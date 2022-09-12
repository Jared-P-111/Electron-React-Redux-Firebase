// Main Process
const { app, BrowserWindow } = require('electron');
const path = require('path');

// Turn off hardware acceleration
app.disableHardwareAcceleration();

function createWindow() {
  // Browser Window <- Renderer Process
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: 'white',
    webPreferences: {
      nodeIntegration: false,
      // will sanitize JS code
      // TODO: explain when React application is initialize
      worldSafeExecuteJavaScript: true,
      // is a feature that ensures that both, your preload scripts and Electron
      // internal logic run in separate
      contextIsolation: true,
    },
  });

  win.loadFile('index.html');
  win.webContents.openDevTools();
}

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
