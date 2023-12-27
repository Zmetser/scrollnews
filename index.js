import { LitElement, html, css, nothing } from 'lit'
import { Task, TaskStatus } from '@lit/task'
import { repeat } from 'lit/directives/repeat.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'

import './components/NewsItems'
import './components/NewsItemsPlaceholder'

import { fetchNews } from './utils/dataFetcher'
import { Cache } from './utils/cache'
import {
  filterByCategory,
  CATEGORIES,
  categoryStyleMapFor
} from './utils/categoryUtils'

export class App extends LitElement {
  render() {
    return html`
      <!-- TODO: style the title -->
      <h1>Top stories</h1>

      <!-- TODO: add unique color to categories, active should be underlined -->
      <!-- TODO: empty categories should gray out -->
      <div class="categories">
        ${repeat(
          CATEGORIES,
          (category) => category,
          (category) => {
            return html`<button
              class="category-button ${classMap({
                selected: category === this._selectedCategory
              })}"
              style="${styleMap(categoryStyleMapFor(category))}"
              @click=${{ handleEvent: () => this.onCategorySelect(category) }}
            >
              ${category}
            </button>`
          }
        )}
      </div>

      <!-- Show placeholders when cache is cold and data is loading -->
      ${this._items.length === 0 && this._dataTask.status === TaskStatus.PENDING
        ? html`<news-items-placeholder></news-items-placeholder>`
        : html`<news-items
            .items=${filterByCategory(this._items, this._selectedCategory)}
          ></news-items>`}

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
    // By default populate the categories with all the categories
    this._categories = CATEGORIES
    // By default no category is selected
    this._selectedCategory = null
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
      this._categories = result.categories
      return result
    }
  })

  onCategorySelect(category) {
    // reset the selected category if it's already selected
    if (category === this._selectedCategory) {
      this._selectedCategory = null
      return
    }
    this._selectedCategory = category
  }

  static properties = {
    // All the items
    _items: { state: true },
    // Keeps track of available categories (only categories with items are in here)
    _categories: { state: true },
    // Keeps track of the selected category
    _selectedCategory: { state: true }
  }

  static styles = [
    css`
      .error-message {
        text-align: center;
        color: darkred;
      }

      .categories {
        white-space: nowrap;
        overflow-x: auto;
      }

      .category-button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        padding: 0.5rem;
        margin: 0.5rem;
        background-color: var(--category-button-bg-color);
        color: var(--category-button-color);
      }

      .category-button.selected {
        background-color: var(--category-color);
      }
    `
  ]
}

window.customElements.define('scrollnews-app', App)
