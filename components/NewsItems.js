import { LitElement, html, css } from 'lit'
import { ContextProvider } from '@lit/context'
import { repeat } from 'lit/directives/repeat.js'

import { scrollObserverContext } from '../utils/contexts'

import './NewsItem'

export class NewsItems extends LitElement {
  render() {
    return html`
      <ol>
        ${repeat(this.items, (item) => item.id, (item) => {
          return html`<news-item
            data-id="${item.id}"
            ?is-active=${this._activeItem === item.id}
            .item=${item}
          ></news-item>`
        })}
      </ol>
    `
  }

  // create a new context provider for the intersection observer
  _provider = new ContextProvider(this, { context: scrollObserverContext })

  static properties = {
    items: { type: Object },
    // track the active item
    _activeItem: { state: true }
  }

  // options for the intersection observer
  intersectionOptions = {
    root: null,
    rootMargin: '0px 0px -55% 0px',
    threshold: 0
  }

  // the intersection observer
  observer = null

  connectedCallback() {
    super.connectedCallback()
    // create a new intersection observer when the component is connected
    // this is used to track which news item should be active
    this.observer = new IntersectionObserver(
      this.onIntersect.bind(this),
      this.intersectionOptions
    )
    // and set it as the value of the context
    this._provider.setValue(this.observer)
  }

  disconnectedCallback() {
    // disconnect the observer when the component is disconnected
    this.observer.disconnect()
    super.disconnectedCallback()
  }

  // called when the intersection observer detects an intersection
  onIntersect(entries, observer) {
    entries.forEach((entry) => {
      // if the entry is intersecting, set the active item to the id of the entry
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('data-id')
        this._activeItem = id
      }
    })
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
