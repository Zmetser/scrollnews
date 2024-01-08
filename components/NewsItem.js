import { LitElement, html, css } from 'lit'
import { ContextConsumer } from '@lit/context'
import { classMap } from 'lit/directives/class-map.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { styleMap } from 'lit/directives/style-map.js'

import { scrollObserverContext } from '../utils/contexts'
import { getAbsoluteTimeString } from '../utils/dateUtils'
import { categoryStyleMapFor } from '../utils/categoryUtils'
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
          <div class="expander">
            <p class="lead">${unsafeHTML(this.item.lead)}</p>
            <lazy-image src="${this.item.image}"></lazy-image>
          </div>
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

  // create a new context consumer for the intersection observer
  _observer = new ContextConsumer(this, { context: scrollObserverContext })
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
    this._observer.value.observe(this)
  }

  disconnectedCallback() {
    // disconnect the observer when the component is disconnected
    this._observer.value.unobserve(this)
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
        background-color: var(--newsitem-bg-color);
        color: var(--newsitem-color);
        padding: 16px;
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
        grid-template-rows: 0fr;
        overflow: hidden;
        transition: grid-template-rows var(--opening-duration);
      }

      .active .details {
        margin-top: 1.3em;
        grid-template-rows: 1fr;
      }

      .header {
        order: 2;
      }

      .title {
        font-family: 'Roboto', sans-serif;
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 1.3;
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

        /* display: -webkit-box;
        -webkit-line-clamp: var(--max-visible-lead-lines);
        -webkit-box-orient: vertical; */
      }

      lazy-image {
        display: block;
        width: 100%;
        aspect-ratio: var(--media-ratio);
        margin: 0 0 1.3em 0;
        justify-self: center;
      }

      .expander {
        display: grid;
        min-height: 0;
        transition: visibility var(--opening-duration);
        visibility: hidden;
      }

      .active .expander {
        visibility: visible;
      }

      .newsitem.active {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transform: scale(1.02);
      }
    `
  ]
}

window.customElements.define('news-item', NewsItem)
