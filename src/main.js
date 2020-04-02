const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
  //create the browser window
  const mainWindow = new BrowserWindow({
    width: 1140,
    height: 400
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js') ,
    //   nodeIntegration: false
    // }
  })

  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  })

  mainWindow.loadURL(startUrl)

  // eslint-disable-next-line no-console
  // console.log(require.resolve('electron'))

  // Troubleshooting? Open DevTools! 
  mainWindow.webContents.openDevTools();

  //load app's index.html file
  // mainWindow.loadURL(`file://${__dirname}/index.html`);
  // mainWindow.loadURL('http://localhost:3000/')

  //when main windows closed app will quit
  mainWindow.on('closed', function() { app.quit() })

  // mainWindow.on('closed', function() {
  //   mainWindow = null
  // })
}

//when Electron has completed initialization it calls the .on method

app.on('ready', createWindow);

//when all windows are closed the app will quit (not needed on Darwin OS)
app.on('window-all-closed', function() {
  if (process.platform !== "darwin") app.quit();
});

app.on('activate', function() {
  //recreate a window in the app when the dock icon is clicked and no other windows are open
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

//rest of app's specific main processes can go here OR can go in separate files and be required in 


