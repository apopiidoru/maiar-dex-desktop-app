const { app, BrowserWindow } = require('electron')

const MAIN_URL = 'https://maiar.exchange';

const createWindow = (url) => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    center: true,
    backgroundColor: '#18191a',
    webPreferences: {
      devTools: false,
    },
  })

  win.loadURL(url);
};

app.whenReady().then(() => {
  createWindow(MAIN_URL)

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow(MAIN_URL);
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});