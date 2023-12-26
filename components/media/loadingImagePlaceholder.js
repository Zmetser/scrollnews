import { html, svg } from 'lit-element'

// this base class is used to display an animated svg while the image is loading
export const loadingImagePlaceholder = function (SuperClass) {
  return class extends SuperClass {
    static get properties() {
      return {
        ...super.properties,
        imageLoaded: {
          type: Boolean,
          reflect: true,
          attribute: 'image-loaded'
        }
      }
    }

    firstUpdated(changedProperties) {
      if (super.firstUpdated) {
        super.firstUpdated(changedProperties)
      }

      // check if it completed ahead of time
      const img = this.shadowRoot.querySelector('img[data-loading="lazy"]')
      if (img) {
        img.addEventListener('load', this._lazyImageLoadComplete.bind(this))
        img.addEventListener('error', () => {
          this._lazyImageLoadComplete.bind(this)
        })
      } else {
        // fallback is there is no image
        this._lazyImageLoadComplete()
      }
    }

    _lazyImageLoadComplete() {
      this.imageLoaded = true
    }

    // display an animated svg while the image is loading
    renderSVGLoader() {
      // https://medium.com/@djangoist/why-you-should-use-this-animated-svg-loader-for-async-placeholders-instead-of-a-gif-3fafb2e0b311
      return html`${!this.imageLoaded
        ? svg`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0" stop-color="#eee" stop-opacity=".5"/>
      <stop offset=".5" stop-color="#ccc" stop-opacity=".5"/>
      <stop offset="1" stop-color="#eee" stop-opacity=".5"/>
    </linearGradient>
    <linearGradient id="b" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0" stop-color="#ccc" stop-opacity=".5"/>
      <stop offset=".5" stop-color="#eee" stop-opacity=".5"/>
      <stop offset="1" stop-color="#ccc" stop-opacity=".5"/>
    </linearGradient>
  </defs>
  <rect id="c" width="100%" height="100%" x="-200%" y="0" fill="url(#a)" fill-opacity="1" fill-rule="evenodd"/>
  <rect id="d" width="100%" height="100%" x="-100%" y="0" fill="url(#b)" fill-opacity="1" fill-rule="evenodd"/>
  <rect id="e" width="100%" height="100%" x="0" y="0" fill="url(#a)" fill-opacity="1" fill-rule="evenodd"/>
  <animate xlink:href="#c" attributeName="x" from="-200%" to="0%" dur="1s" begin="0s" fill="freeze" repeatCount="indefinite"/>
  <animate xlink:href="#d" attributeName="x" from="-100%" to="100%" dur="1s" begin="0s" fill="freeze" repeatCount="indefinite"/>
  <animate xlink:href="#e" attributeName="x" from="0%" to="200%" dur="1s" begin="0s" fill="freeze" repeatCount="indefinite"/>
</svg>`
        : ''}`
    }
  }
}
