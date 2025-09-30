// consola/preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  send: (channel, data) => ipcRenderer.invoke(channel, data),
  on: (channel, handler) => ipcRenderer.on(channel, (e, ...args) => handler(...args))
});
