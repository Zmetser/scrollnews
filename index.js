import { LitElement, html, css } from 'lit'
import { Task } from '@lit/task'

import './components/NewsItems'
import './components/NewsItemsPlaceholder'
import { fetchNews } from './utils/dataFetcher'

export class App extends LitElement {
  render() {
    return html`
      <!-- TODO: style the title -->
      <h1>Top stories</h1>
      ${this.items()}
      <!-- TODO: add a topic selector -->
    `
  }

  items() {
    return this._dataTask.render({
      pending: () => html`<news-items-placeholder />`,
      complete: (items) => html`<news-items .items=${items}></news-items>`,
      error: (e) => html`<p>Error: ${e}</p>`
    })
  }

  _dataTask = new Task(this, {
    task: async (_, { signal }) => await fetchNews(signal),
    args: () => []
  })

  static get styles() {
    return css``
  }
}

window.customElements.define('scrollnews-app', App)
