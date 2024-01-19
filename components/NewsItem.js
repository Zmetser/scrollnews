import { LitElement, html, css } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { styleMap } from 'lit/directives/style-map.js'

import { getAbsoluteTimeString } from '../utils/dateUtils'
import { categoryStyleMapFor } from '../utils/categoryUtils'
import { getKeyframeOptions } from '../utils/animationConfig'
import './media/LazyImage'

export class NewsItem extends LitElement {
  render() {
    return html`
      <li
        class="newsitem ${classMap({
          active: this.isActive
        })}"
        style="${styleMap(categoryStyleMapFor(this.item.topic))}"
        role="article"
      >
        <header class="header">
          <h2 class="title">
            <a href="${this._permalink}" target="_blank">${unsafeHTML(
      this.item.title
    )}</a>
          </h2>
        </header>
        <div class="details">
          <p class="lead">${unsafeHTML(this.item.lead)}</p>
          <lazy-image src="${this.item.image}"></lazy-media>
        </div>
        <footer>
          <span class="source">${this.item.source}</span>
          <span class="time">${this.absoluteTime(this.item)}</span>
        </footer>
        <a href="${
          this._permalink
        }" target="_blank" class="permalink" aria-hidden="true" tabindex="-1"></a>
      </li>
    `
  }

  // url to the article
  _permalink = ''
  // url to the publisher's main page
  _sourceURL = ''

  static properties = {
    item: { type: Object },
    isActive: {
      type: Boolean,
      attribute: 'is-active'
    }
  }

  willUpdate(changedProperties) {
    const url = new URL(this.item.url)
    this._permalink = url.href
  }

  // Keep the items always active. This is an experiment to see if we can simplify the open animation.
  shouldUpdate(changedProperties) {
    if (changedProperties.has('isActive')) {
      return this.isActive
    }
    return true
  }

  // observe the element when it is first updated
  firstUpdated() {
    const $root = this.renderRoot.querySelector('.newsitem')
    const $details = this.renderRoot.querySelector('.details')
    $details.animate(
      [
        { maxHeight: 0 },
        { maxHeight: '500px' },
        { maxHeight: 0 }
      ],
      getKeyframeOptions($root)
    )

    $root.animate(
      [
        { opacity: 0.7 },
        { opacity: 1 },
        { opacity: 0.7 }
      ],
      getKeyframeOptions($root)
    )
  }

  disconnectedCallback() {
    super.disconnectedCallback()
  }

  absoluteTime({ date, time }) {
    if (!date || !time) {
      return ''
    }
    return getAbsoluteTimeString(
      new Date(date + 'T' + time),
      navigator.language
    )
  }

  static styles = [
    css`
      .newsitem {
        --bubble-padding: 16px;

        background-color: var(--newsitem-bg-color);
        color: var(--newsitem-color);
        padding: var(--bubble-padding) var(--bubble-padding) 0;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        position: relative;
        border-left: 3px solid var(--category-color);
      }
      .newsitem:hover .title a {
        text-decoration: underline;
      }

      /* Making the whole item tappable */
      .permalink {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
      }

      .details {
        order: 3;
        display: grid;
        max-height: 0;
        grid-template-rows: 1fr;
        overflow: hidden;
        margin-bottom: var(--bubble-padding);
      }

      .header {
        order: 2;
        margin-bottom: var(--bubble-padding);
      }

      .title {
        font-family: 'Roboto', sans-serif;
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 1.3;
        text-wrap: balance;
        margin: 0;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
      a:visited {
        color: color-mix(in srgb, var(--newsitem-color) 75%, white);
      }

      footer {
        order: 1;
        display: flex;
        font-size: 0.75rem;
        font-family: 'Roboto Condensed', sans-serif;
        line-height: 1.3;
        margin-bottom: 10px;

        align-items: center;
      }

      footer::before {
        content: '';
        width: 1em;
        height: 1em;
        display: block;
        /* background-color: var(--category-color); */
        background-color: var(--newsitem-color);
        margin-right: 0.5em;
      }

      .time {
      }

      .time::before {
        content: '•';
        margin: 0 0.5em;
      }

      .lead {
        line-height: 1.3;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 400;
        margin: 0;
        order: 2;
        text-wrap: pretty;
      }

      lazy-image {
        display: block;
        width: 100%;
        aspect-ratio: var(--media-ratio);
        margin: 0 0 1.3em 0;
        justify-self: center;
      }
    `
  ]
}

window.customElements.define('news-item', NewsItem)
