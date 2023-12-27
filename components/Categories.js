import { LitElement, html, css } from 'lit-element'

import { repeat } from 'lit/directives/repeat.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'

import { CATEGORIES, categoryStyleMapFor } from '../utils/categoryUtils'

export class Categories extends LitElement {
  render() {
    return html`
      ${repeat(
        CATEGORIES,
        (category) => category,
        (category) => {
          return html`<a
            class="category-button ${classMap({
              selected: category === this.selectedCategory
            })}"
            style="${styleMap(categoryStyleMapFor(category))}"
            aria-disabled=${!this.availableCategories.includes(category)}
            @click=${{ handleEvent: () => this.onCategorySelect(category) }}
          >
            ${category}
          </a>`
        }
      )}
    `
  }

  static properties = {
    availableCategories: { type: Array, attribute: false },
    selectedCategory: { type: String, attribute: false }
  }

  onCategorySelect(category) {
    this.dispatchEvent(
      new CustomEvent('categorySelect', {
        detail: { category },
        bubbles: true,
        composed: true
      })
    )
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      white-space: nowrap;
      overflow-x: auto;
      /* Hide scrollbar for IE, Edge and Firefox */
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    :host::-webkit-scrollbar {
      display: none;
    }

    .category-button {
      margin: 6px 16px;
      cursor: pointer;
      color: var(--category-button-color);
      transition: opacity var(--animation-duration) linear;
    }

    .category-button[aria-disabled='true'] {
      pointer-events: none;
      text-decoration: none;
      cursor: not-allowed;
      opacity: 0.5;
    }

    .category-button.selected:after {
      background-color: var(--category-color);
      top: 6px;
    }

    .category-button:after {
      position: relative;
      content: '';
      display: block;
      height: 5px;
      width: 100%;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      top: 12px;
      transition: top var(--animation-duration) linear;
    }
  `
}

window.customElements.define('news-categories', Categories)
