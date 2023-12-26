import { LitElement, html, css, nothing } from 'lit'
import { Task, TaskStatus } from '@lit/task'
import { repeat } from 'lit/directives/repeat.js'

import './components/NewsItems'
import './components/NewsItemsPlaceholder'

import { fetchNews } from './utils/dataFetcher'
import { Cache } from './utils/cache'

export class App extends LitElement {
  render() {
    return html`
      <!-- TODO: style the title -->
      <h1>Top stories</h1>

      <div class="topics">
        ${repeat(
          this._topics,
          (topic) => topic,
          (topic) => {
            return html`<button
              class="topic-button ${topic === this._selectedTopic ? 'selected' : ''}"
              @click=${{ handleEvent: () => this.onTopicSelect(topic) }}
            >
              ${topic}
            </button>`
          }
        )}
      </div>

      <!-- Show placeholders when cache is cold and data is loading -->
      ${this._items.length === 0 && this._dataTask.status === TaskStatus.PENDING
        ? html`<news-items-placeholder></news-items-placeholder>`
        : html`<news-items .items=${this.filterByTopic(this._items, this._selectedTopic)}></news-items>`}

      <!-- Show error message when couldn't refresh -->
      ${this._dataTask.status === TaskStatus.ERROR
        ? html`<p class="error-message">Couldn't refresh feed</p>`
        : nothing}
    `
  }

  _itemsFromCache = Cache.getItemsFromCache()
  _topicsFromCache = Cache.getTopicsFromCache()

  constructor() {
    super()
    // Show items from cache until we get new items
    this._items = this._itemsFromCache
    this._topics = this._topicsFromCache
    this._selectedTopic = null
  }

  connectedCallback() {
    super.connectedCallback()
    // Fetch new items when the component is connected
    this._dataTask.run()
  }

  _dataTask = new Task(this, {
    task: async (_, { signal }) => {
      // Overwrite the items with the fresh ones from the server when the data task is complete
      const result = await fetchNews(signal)
      this._items = result.items
      this._topics = result.topics
      return this._items
    }
  })

  onTopicSelect(topic) {
    // reset the selected topic if it's already selected
    if (topic === this._selectedTopic) {
      this._selectedTopic = null
      return
    }
    this._selectedTopic = topic
  }

  filterByTopic(items, topic) {
    if (!topic) {
      return items
    }
    return items.filter((item) => item.topic === topic)
  }

  static properties = {
    // Hold the items in state.
    _items: { state: true },
    _topics: { state: true },
    _selectedTopic: { state: true }
  }

  static get styles() {
    return css`
      .error-message {
        text-align: center;
        color: darkred;
      }

      .topics {
        white-space: nowrap;
        overflow-x: auto;
      }

      .topic-button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        padding: 0.5rem;
        margin: 0.5rem;
        background-color: var(--topic-button-bg-color);
        color: var(--topic-button-color);
      }

      .topic-button.selected {
        background-color: var(--topic-3);
      }
    `
  }
}

window.customElements.define('scrollnews-app', App)
