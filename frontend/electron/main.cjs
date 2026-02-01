const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
let mainWindow;
app.on('ready', () => {
 
 mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, '..', 'assets', 'logo.png'), // Ensure the icon path is correct
        autoHideMenuBar: true, 
        webPreferences: {
            preload: path.join(__dirname, "preload.cjs"),
            contextIsolation: false,  // Ensure this is true
            enableRemoteModule: false,
            webSecurity: false,
            nodeIntegration: true    // Ensure this is false            
        }
    });

  
  const invoicePath = path.join(__dirname, 'paymentinvoice.html');
  mainWindow.loadFile(invoicePath);

  mainWindow.loadFile(path.join(__dirname, '../dist/index.html'))

 ;

  ipcMain.on('reload-app', () => {
    console.log("Reloading the application...");
    if (mainWindow) {
        mainWindow.reload();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
      },
    });
    const frontendPath = `file://${path.join(__dirname, '../dist/index.html')}`;
    mainWindow.loadURL(frontendPath);
  }
});
