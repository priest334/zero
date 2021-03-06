'use strict'

process.env.NODE_ENV = 'production'

const { say } = require('cfonts')
const chalk = require('chalk')
const del = require('del')
const webpack = require('webpack')
const Multispinner = require('multispinner')

const mainConfig = require('./webpack.main.config')(process.env.NODE_ENV)
const rendererConfig = require('./webpack.renderer.config')(process.env.NODE_ENV)


function greeting () {
  const cols = process.stdout.columns;
  let text = '';

  if (cols > 85) text = 'lets-build';
  else if (cols > 60) text = 'lets-|build';

  if(text) {
    say(text, {colors: ['yellow'], font: 'simple3d', space: false});
  } else {
    console.log(chalk.yellow.bold('\n  lets-build'));
  }
  console.log();
}

function pack(config) {
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err) reject(err.stack || err)
      else if (stats.hasErrors()) {
        let err = ''

        stats.toString('verbose')
        .split(/\r?\n/)
        .forEach(line => {
          err += `    ${line}\n`
        })
        console.log('+++++++++++++++++++++++++++ error ++++++++++++++++++++++++++++++');
        console.log(err);
        console.log('+++++++++++++++++++++++++++ error ++++++++++++++++++++++++++++++');
        reject(err)
      } else {
        resolve(stats.toString({
          chunks: false,
          colors: true
        }))
      }
    })
  })
}

function build() {
  greeting();

  del.sync(['./build/*']);

  const tasks = ['main', 'renderer'];
  const m = new Multispinner(tasks, {
    preText: 'building',
    postText: 'process'
  });

  let results = '';

  m.on('success', () => {
    process.stdout.write('\x1B[2J\x1B[0f')
    console.log(`\n\n${results}`)
    console.log(`take it away ${chalk.yellow('`electron-builder`')}\n`)
    process.exit()
  })

  pack(mainConfig).then(result => {
    results += result + '\n\n'
    m.success('main')
  }).catch(err => {
    m.error('main')
    console.log(`\n  failed to build main process`)
    console.error(`\n${err}\n`)
    process.exit(1)
  })

  pack(rendererConfig).then(result => {
    results += result + '\n\n'
    m.success('renderer')
  }).catch(err => {
    m.error('renderer')
    console.log(`\n  failed to build renderer process`)
    console.error(`\n${err}\n`)
    process.exit(2)
  })
}


build();
