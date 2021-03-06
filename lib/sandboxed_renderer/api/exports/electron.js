Object.defineProperties(exports, {
  ipcRenderer: {
    enumerable: true,
    get: function () {
      return require('../ipc-renderer')
    }
  },
  remote: {
    enumerable: true,
    get: function () {
      return require('../../../renderer/api/remote')
    }
  },
  CallbacksRegistry: {
    get: function () {
      return require('../../../common/api/callbacks-registry')
    }
  },
  isPromise: {
    get: function () {
      return require('../../../common/api/is-promise')
    }
  }
})
