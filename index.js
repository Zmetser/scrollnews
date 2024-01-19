import { LitElement, html, css, nothing } from 'lit'
import { Task, TaskStatus } from '@lit/task'

import './components/NewsItems'
import './components/NewsItemsPlaceholder'
import './components/Categories'

import { fetchNews } from './utils/dataFetcher'
import { Cache } from './utils/cache'
import { filterByCategory, CATEGORIES, CATEGORY_DEFAULT } from './utils/categoryUtils'

export class App extends LitElement {
  render() {
    return html`
      <div class="header">
        <h1><strong>Stenza</strong> news aggregator</h1>
        <news-categories
          .selectedCategory=${this._selectedCategory}
          .availableCategories=${this._availableCategories}
          @categorySelect=${this.onCategorySelect}
        ></news-categories>
      </div>

      <!-- Show placeholders when cache is cold and data is loading -->
      ${this._items.length === 0 && this._dataTask.status === TaskStatus.PENDING
        ? html`<news-items-placeholder></news-items-placeholder>`
        : html`<news-items
            .items=${filterByCategory(this._items, this._selectedCategory)}
            .previusUpdate=${this._previusUpdate}
            .selectedCategory=${this._selectedCategory}
          ></news-items>`}

      <!-- Show error message when couldn't refresh -->
      ${this._dataTask.status === TaskStatus.ERROR
        ? html`<p class="error-message">Couldn't refresh feed</p>`
        : nothing}
    `
  }

  _itemsFromCache = Cache.getItemsFromCache()
  _previusUpdate = Cache.getState().latestItemTimestamp

  constructor() {
    super()
    // Show items from cache until we get new items
    this._items = this._itemsFromCache
    // By default populate the categories with all the categories
    this._availableCategories = CATEGORIES
    // By default no category is selected
    this._selectedCategory = CATEGORY_DEFAULT
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
      this._availableCategories = result.categories
      return result
    }
  })

  onCategorySelect(event) {
    const category = event.detail.category
    // reset the selected category if it's already selected
    if (category === this._selectedCategory) {
      this._selectedCategory = CATEGORY_DEFAULT
      return
    }
    this._selectedCategory = category
  }

  static properties = {
    // All the items
    _items: { state: true },
    // Keeps track of available categories (only categories with items are in here)
    _availableCategories: { state: true },
    // Keeps track of the selected category
    _selectedCategory: { state: true }
  }

  static styles = [
    css`
      news-items-placeholder,
      news-items {
        margin: 0 10px;
        display: block;
      }

      .error-message {
        text-align: center;
        color: darkred;
      }

      .header {
        border-bottom: 1px solid var(--header-bottom-border-color);
        padding: 10px 10px 0;
        margin-bottom: 35px;
        background: var(--header-bg-color);
      }

      h1 {
        font-size: 22px;
        margin-top: 10px;
        margin-left: 16px;
        color: var(--header-color);
        font-family: 'Roboto Condensed', sans-serif;
      }
      h1 strong {
        font-family: Roboto, sans-serif;
      }
    `
  ]
}

window.customElements.define('scrollnews-app', App)
