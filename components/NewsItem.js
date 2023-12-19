import { LitElement, html, css } from 'lit'

export class NewsItem extends LitElement {
  static get properties() {
    return {
      // TODO: figure put how this works without the type. I have a dot before the property name, dafuq is that?
      // item: { type: Object }
    }
  }

  constructor(item) {
    super()
    // TODO: maybe lit doesn't like Object properties?
    this.item = item
  }

  render() {
    return html`
      <li class="newsitem" role="article">
        <header class="header">
          <h2 class="title">${this.item.title}</h2>
        </header>
        <div class="details">
          <!-- Add a read more permalink -->
          <p class="lead">${this.item.lead}</p>
          <!-- TODO: Add relative time somewhere -->
          <!-- TODO: add media back -->
          <figure class="media-container">
            <img class="js_media js_lazy" loading="lazy">
          </figure>
        </div>
        <!-- TODO: source should take me to the article, or the source home? -->
        <footer class="source">${this.item.source}</footer>
      </li>
    `
  }

  static get styles() {
    return css`
      .newsitem {
        background-color: var(--newsitem-bg-color);
        color: var(--newsitem-color);
        padding: 16px;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: fit-content(1em) 1fr 0;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        column-gap: 10px;

        overflow: hidden;
        transition: grid-template-rows var(--animation-duration) ease-out;

        border-radius: 16px;
      }

      .details {
        display: grid;
        order: 3;
        min-height: 0;
        visibility: hidden;
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
        font-size: .75rem;
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
        margin-right: .5em;
      }

      .lead {
        line-height: 1.3;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 400;
        margin: 0;
        order: 2;

        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: max-height var(--animation-duration), opacity var(--animation-duration);
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

    `
  }
}

window.customElements.define('news-item', NewsItem)
