const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('preload', {
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send('notify', message);
    },
  },
});
