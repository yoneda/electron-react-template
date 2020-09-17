const { app, BrowserWindow } = require("electron");

function createWindow(){
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences:{
      webSecurity: false,
      nodeIntegration: true
    }
  })

  win.loadURL(`file://${__dirname}/dist/index.html`);
  // win.loadURL("http://localhost:3000");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", ()=>{
  console.log("window-all-closed");
  if(process.platform !== "darwin"){
    app.quit();
  }
})

app.on("activate", () => {
  console.log("activate");
  if(BrowserWindow.getAllWindows().length === 0){
    createWindow();
  }
})