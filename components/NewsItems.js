import { LitElement, html, css } from 'lit'
import { repeat } from 'lit/directives/repeat.js'

import { toTimestamp } from '../utils/dateUtils'

import './NewsItem'

export class NewsItems extends LitElement {
  render() {
    return html`
      <ol>
        ${repeat(
          this.items,
          (item) => item.id,
          (item, index) => {
            const newsItemHTML = html`<news-item
              data-id="${item.id}"
              ?is-active=${this._activeItem === item.id}
              .item=${item}
            ></news-item>`

            // render a separator before the first item that is older than the previous update
            return this._renderSeparatorBefore &&
              item.id === this._renderSeparatorBefore.id &&
              index > 0
              ? html`${this.separator()} ${newsItemHTML}`
              : newsItemHTML
          }
        )}
      </ol>
    `
  }

  separator() {
    return html`<li class="separator"><span>régebbi hírek</span></li>`
  }

  static properties = {
    items: { type: Array },
    previusUpdate: { type: String },
    selectedCategory: { type: String, attribute: false },
    // track the active item
    _activeItem: { state: true },
    _renderSeparatorBefore: { state: true }
  }

  willUpdate(changedProperties) {
    // find the first item that is older than the previous update
    this._renderSeparatorBefore = this.items.find(
      (item) => toTimestamp(item.date, item.time) <= this.previusUpdate
    )

    if (changedProperties.has('selectedCategory')) {
      this._activeItem = this.items[0].id
    }
  }

  firstUpdated() {
    this._activeItem = this.items[0].id
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

      .separator {
        text-align: center;
        margin: 10px 0;
        position: relative;
      }
      .separator::before {
        content: '';
        height: 1px;
        display: block;
        position: absolute;
        top: 50%;
        width: 100%;
        background-color: var(--header-color);
      }

      .separator span {
        background-color: var(--main-bg-color);
        color: var(--header-color);
        position: relative;
        padding: 0 10px;
      }

      @media only screen and (min-width: 768px) {
        ol {
          max-width: 60%;
          margin: 0 auto;
        }
      }
    `
  }
}

window.customElements.define('news-items', NewsItems)
