import { Cache } from './cache'
import { gatherCategoriesFrom, CATEGORIES } from '../utils/categoryUtils'
import { toTimestamp } from '../utils/dateUtils'

const REMOTE_URL =
  'https://us-central1-scrollnews-proxy.cloudfunctions.net/app?randomize-media=true'

export const fetchNews = async (signal) => {
  // Artificial delay for demo purposes
  const response = await fetch(REMOTE_URL, {
    signal
  })
  if (response.status === 200) {
    const items = response.json()
    // Save the 10 latest items to cache
    return items.then((items) => {
      Cache.saveItemsToCache(items.slice(0, 10))
      if (items[0]) {
        Cache.saveState({
          ...Cache.getState(),
          latestItemTimestamp: toTimestamp(items[0].date, items[0].time)
        })
      }
      return { items, categories: gatherCategoriesFrom(items) }
    })
  } else {
    // Try to handle the error gracefully by returning cached items
    const itemsFromCache = Cache.getItemsFromCache()
    if (itemsFromCache.length > 0) {
      console.error(response.text())
      return { items: itemsFromCache, categories: CATEGORIES }
    } else {
      throw response.text()
    }
  }
}
