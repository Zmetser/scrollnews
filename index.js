import { LitElement, html, css, nothing } from 'lit'
import { Task, TaskStatus } from '@lit/task'

import './components/NewsItems'
import './components/NewsItemsPlaceholder'

import { fetchNews } from './utils/dataFetcher'
import { Cache } from './utils/cache'

export class App extends LitElement {
  render() {
    return html`
      <!-- TODO: style the title -->
      <h1>Top stories</h1>
      <!-- TODO: add a topic selector -->

      <!-- Show placeholders when cache is cold and data is loading -->
      ${this._items.length === 0 && this._dataTask.status === TaskStatus.PENDING
        ? html`<news-items-placeholder></news-items-placeholder>`
        : html`<news-items .items=${this._items}></news-items>`}

      <!-- Show error message when couldn't refresh -->
      ${this._dataTask.status === TaskStatus.ERROR
        ? html`<p class="error-message">Couldn't refresh feed</p>`
        : nothing}
    `
  }

  _itemsFromCache = Cache.getItemsFromCache()

  constructor() {
    super()
    // Show items from cache until we get new items
    this._items = this._itemsFromCache
  }

  connectedCallback() {
    super.connectedCallback()
    // Fetch new items when the component is connected
    this._dataTask.run()
  }

  updated(changedProperties) {
    // Overwrite the items with the fresh ones from the server when the data task is complete
    if (this._dataTask.status === TaskStatus.COMPLETE) {
      this._items = this._dataTask.value
    }
  }

  _dataTask = new Task(this, {
    task: async (_, { signal }) => await fetchNews(signal)
  })

  static properties = {
    // Hold the items in state.
    _items: { state: true }
  }

  static get styles() {
    return css`
      .error-message {
        text-align: center;
        color: darkred;
      }
    `
  }
}

window.customElements.define('scrollnews-app', App)
