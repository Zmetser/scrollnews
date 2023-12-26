import { LitElement, html, css } from 'lit'

export class NewsItemsPlaceholder extends LitElement {
  render() {
    return html`
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    `
  }

  static get styles() {
    return css`
      div {
        min-height: 100px;
        padding: 16px;
        border-radius: 16px;
        margin-bottom: 10px;

        background-color: var(--newsitem-bg-color);
        animation: loading 1s infinite ease-in-out;
        animation-direction: alternate-reverse;
      }

      @keyframes loading {
        form {
          opacity: 1;
        }

        to {
          opacity: 0.4;
        }
      }
    `
  }
}

window.customElements.define('news-items-placeholder', NewsItemsPlaceholder)
