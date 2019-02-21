import { app } from 'electron'
import { winmgr } from './winmgr'

let isDev = (process.env.NODE_ENV === 'development');

const DEFINED_WINDOWS = {
    'index': {
        name: 'index',
        url: isDev
        ? 'http://localhost:9080/index.html'
        : `file://${__dirname}/pages/index.html`
    },
    'about': {
        name: 'about',
        url: isDev
        ? 'http://localhost:9080/about.html'
        : `file://${__dirname}/pages/index.html`
    }
};


app.on('ready', () => {
    let win = winmgr.newWindow(
        DEFINED_WINDOWS['index'], 
        {
            width: 480,
            height: 360
        }
    );
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

