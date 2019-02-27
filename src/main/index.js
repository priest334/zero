'use strict'

import { app } from 'electron';
import { winmgr } from './winmgr';

const assetsPath = (process.env.NODE_ENV === 'development')
? 'http://localhost:9080'
: `file://${app.getAppPath()}/build`;

const DEFINED_WINDOWS = {
    'index': {
        name: 'index',
        url: `${assetsPath}/pages/index.html`
    },
    'about': {
        name: 'about',
        url: `${assetsPath}/pages/about.html`
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

