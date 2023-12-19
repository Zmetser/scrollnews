import { LitElement, html, css } from 'lit'

import './NewsItem'

export class NewsItems extends LitElement {
  render() {
    return html`
      <ol>
        <!-- TODO: load data from API, use context -->
        ${window.data.map((item) => html`<news-item .item=${item}></news-item>`)}
      </ol>
    `
  }

  static get styles() {
    return css`
      ol {
        list-style: none;
        padding: 0;
        margin: 0;

        display: flex;
        flex-direction: column;
        gap: 1em;
      }

      @media only screen and (min-width: 768px) {
        ol {
          /* max-width: 60%; */
          margin: 0 auto;
        }
      }
    `
  }
}

window.customElements.define('news-items', NewsItems)
