import { LitElement, css, html } from 'lit-element'
import { loadingImagePlaceholder } from './loadingImagePlaceholder'

export class LazyImage extends loadingImagePlaceholder(LitElement) {
  render() {
    return html`
      <figure
        class="media-container"
        ?hidden=${!this._elementVisible || !this.imageSrc}
      >
        ${this.renderSVGLoader()}
        <img
          class="js_media js_lazy"
          data-loading="lazy"
          src="${this._elementVisible ? this.imageSrc : ''}"
        />
        <!-- TODO: Add caption and alt -->
        <!-- <figcaption></figcaption> -->
      </figure>
    `
  }

  static properties = {
    imageSrc: { type: String, attribute: 'src' },
    _elementVisible: { state: true }
  }

  intersectionObserver = null

  // TODO: Move intesection observer stuff to a mixin
  // register the intersection observer when the component is connected
  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback()
    }
    if (!this._elementVisible) {
      this.registerObserver()
    }
  }

  disconnectedCallback() {
    // if we have an intersection observer, disconnect it
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect()
    }
    if (super.disconnectedCallback) {
      super.disconnectedCallback()
    }
  }

  registerObserver() {
    this.intersectionObserver = new IntersectionObserver(
      this.onIntersect.bind(this),
      {
        rootMargin: '0px'
      }
    )
    this.intersectionObserver.observe(this)
  }

  // start loading the media when the component is intersecting the viewport
  onIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this._elementVisible = true
        this.intersectionObserver.disconnect()
      }
    })
  }

  static get styles() {
    return css`
      .media-container {
        margin: 0;
        overflow: hidden;
        justify-self: center;
        position: relative;
      }
      svg {
        width: 100%;
        aspect-ratio: var(--media-ratio);
        position: absolute;
        z-index: 1;
      }
      img {
        width: 100%;
        object-fit: cover;
        object-position: center;
        aspect-ratio: var(--media-ratio);

        opacity: 0;
        transition: opacity var(--animation-duration);
        will-change: opacity;
      }

      :host([image-loaded]) img {
        opacity: 1;
      }
    `
  }
}

window.customElements.define('lazy-image', LazyImage)
