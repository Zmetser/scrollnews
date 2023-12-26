import { LitElement, html, css } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import { ContextConsumer } from '@lit/context'

import { scrollObserverContext } from '../utils/contexts'

export class NewsItem extends LitElement {
  render() {
    return html`
      <li
        class="newsitem ${classMap({ active: this.isActive })}"
        role="article"
      >
        <header class="header">
          <h2 class="title">${this.item.title}</h2>
        </header>
        <div class="details">
          <!-- TODO: Add a read more permalink -->
          <p class="lead">${this.item.lead}</p>
          <!-- TODO: Add relative time somewhere -->
        </div>
        <!-- TODO: source should take me to the article, or the source home? -->
        <footer class="source">${this.item.source}</footer>
      </li>
    `
  }

  // create a new context consumer for the intersection observer
  _observer = new ContextConsumer(this, { context: scrollObserverContext })

  static properties = {
    item: { type: Object },
    isActive: {
      type: Boolean,
      attribute: 'is-active'
    }
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

  static get styles() {
    return css`
      .newsitem {
        background-color: var(--newsitem-bg-color);
        color: var(--newsitem-color);
        padding: 16px;

        display: grid;
        grid-template-columns: 1fr;
        /* grid-template-rows: fit-content(1em) 1fr 0; */
        grid-template-rows: fit-content(1em) fit-content(1em) 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        column-gap: 10px;

        overflow: hidden;
        transition: grid-template-rows var(--animation-duration) ease-out;

        border-radius: 16px;

        /* Open/close animation */
        transition: max-height var(--animation-duration),
          transform var(--animation-duration);
        will-change: max-height, transform;
        overflow: hidden;
      }

      .details {
        display: grid;
        order: 3;
        min-height: 0;
        margin-top: 1.3em;
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

      .source {
        font-size: 0.75rem;
        font-family: 'Roboto Condensed', sans-serif;
        line-height: 1.3;
        order: 1;
        grid-column: 1 / span 2;
        display: flex;
        align-items: center;
      }

      .source::before {
        content: '';
        width: 1em;
        height: 1em;
        display: block;
        background-color: var(--topic-color, var(--topic-0));
        margin-right: 0.5em;
      }

      .lead {
        display: -webkit-box;
        line-height: 1.3;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 400;
        margin: 0;
        order: 2;

        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: max-height var(--animation-duration),
          opacity var(--animation-duration);

        -webkit-line-clamp: var(--max-visible-lead-lines);
        -webkit-box-orient: vertical;
      }

      .media-container {
        width: 0;
        aspect-ratio: var(--media-ratio);
        overflow: hidden;
        margin: 0;
        justify-self: center;
      }
      .media-container img {
        width: 100%;
        object-fit: cover;
        object-position: center;
        aspect-ratio: var(--media-ratio);

        opacity: 0;
        transition: opacity var(--animation-duration);
        will-change: opacity;
      }

      .lead,
      .source,
      .header {
        grid-column: 1 / span 2;
      }

      .newsitem.active {
        grid-template-rows: fit-content(1em) fit-content(1em) 1fr;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transform: scale(1.02);
      }

      .newsitem.active .lead {
        grid-column: 1;
        opacity: 1;
        overflow: hidden;
        max-height: calc(var(--max-visible-lead-lines) * 1.3 * 1rem);
        margin-bottom: 0.5em;
      }
    `
  }
}

window.customElements.define('news-item', NewsItem)
