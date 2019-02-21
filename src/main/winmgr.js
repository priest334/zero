import { BrowserWindow } from 'electron'

class WinMgr {
    constructor() {
        this.windows_ = {}
    }

    newWindow({name,url} = {}, options={}) {
        let win = new BrowserWindow(options); // Object.assign({webPreferences: {nodeIntegration: false}}, options)
        if (!name) {
            name = 'zero-win-'+(this.windows_.length+1);
        }
        win.on('closed', () => {
            win = null;
            this.windows_[name] = null;
        })
        this.windows_[name] = win;
        if (process.env.NODE_ENV == 'development') {
            win.webContents.openDevTools({mode: 'detach'});
        }
        win.loadURL(url);
        return win;
    }

    getWindow(name) {
        if (name in this.windows_) {
            return this.windows_[name];
        }
        return null;
    }
};

export const winmgr = new WinMgr();

