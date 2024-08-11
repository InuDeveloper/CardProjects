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

// You typically listen to Node.js events by using an emitter's .on function.
app.on('ready', () => {
    CreateWindow()
    console.log('App ready')
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
