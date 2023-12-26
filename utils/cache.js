export class Cache {
  static saveItemsToCache(items) {
    localStorage.setItem('items', JSON.stringify(items))
  }

  static getItemsFromCache() {
    const items = localStorage.getItem('items')
    return items ? JSON.parse(items) : []
  }

  static saveTopicsToCache(topics) {
    localStorage.setItem('topics', JSON.stringify(topics))
  }

  static getTopicsFromCache() {
    const topics = localStorage.getItem('topics')
    return topics ? JSON.parse(topics) : []
  }
}
