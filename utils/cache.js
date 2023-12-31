const defaultState = {
  latestItemTimestamp: null
}

export class Cache {
  static saveItemsToCache(items) {
    localStorage.setItem('items', JSON.stringify(items))
  }

  static getItemsFromCache() {
    const items = localStorage.getItem('items')
    return items ? JSON.parse(items) : []
  }

  static saveState(state) {
    localStorage.setItem('state', JSON.stringify(state))
  }

  static getState() {
    const state = localStorage.getItem('state')
    return state ? JSON.parse(state) : defaultState
  }
}
