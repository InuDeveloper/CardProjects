const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const CreateWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, './script/preload.js'),
        },
    })

    win.loadFile('src/index.html')
}

app.whenReady().then(() => {
    CreateWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
