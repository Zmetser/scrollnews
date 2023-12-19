import { LitElement, html, css } from 'lit'

import './components/NewsItems'

export class App extends LitElement {
  render() {
    return html`
      <!-- TODO: style the title -->
      <h1>Top stories</h1>
      <!-- TODO: add a topic selector -->
      <news-items></news-items>
    `
  }

  static get styles() {
    return css`
    `
  }
}

window.customElements.define('scrollnews-app', App)
