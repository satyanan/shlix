const {app,dialog, BrowserWindow, Menu} = require('electron');
const path = require('path')
const url = require('url')
const remote = require('electron');
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on("ready", function() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });        
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }))
    mainWindow.setTitle("shlix");
    mainWindow.openDevTools();    
  const template = [
    {
      label: 'File',
      submenu: [
        {
            label: 'Open File',
            accelerator: 'Control+O',
            click: function() {
              var properties = ['multiSelections', 'createDirectory', 'openFile'],
                  parentWindow = (process.platform == 'darwin') ? null : BrowserWindow.getFocusedWindow();
              
              dialog.showOpenDialog(parentWindow, properties, function(f) {console.log("got a file: " + f)
              
            });            
            }
        },
        {
          label: 'Quit',
          accelerator: 'Control+Q',
          click: function() { app.quit(); }
        },
      ]
    }  
  ];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);    
});

