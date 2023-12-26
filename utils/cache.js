export class Cache {
  static saveItemsToCache(items) {
    localStorage.setItem('items', JSON.stringify(items))
  }

  static getItemsFromCache() {
    const items = localStorage.getItem('items')
    return items ? JSON.parse(items) : []
  }
}
