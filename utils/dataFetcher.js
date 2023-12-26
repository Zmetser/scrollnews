import { Cache } from './cache'

const REMOTE_URL =
  'https://stories-test-78664cfb8416.herokuapp.com/?randomize-media=true'
// const REMOTE_URL = 'http://localhost:3000/?randomize-media=true'

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
      const topics = gatherTopics(items)
      Cache.saveTopicsToCache(topics)
      return { items, topics }
    })
  } else {
    // Try to handle the error gracefully by returning cached items
    const itemsFromCache = Cache.getItemsFromCache()
    if (itemsFromCache.length > 0) {
      console.error(response.text())
      return { items: itemsFromCache, topics: Cache.getTopicsFromCache() }
    } else {
      throw response.text()
    }
  }
}

function gatherTopics(items) {
  return Array.from(
    items.reduce((topics, item) => {
      if (item.topic) {
        topics.add(item.topic)
      }
      return topics
    }, new Set())
  ).sort((lhs, rhs) => lhs.localeCompare(rhs))
}
