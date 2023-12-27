/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new r(i,t,s)},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,p=globalThis,m=p.trustedTypes,f=m?m.emptyScript:"",g=p.reactiveElementPolyfillSupport,v=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},y=(t,e)=>!a(t,e),$={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const o=i?.call(this);r.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((s,i)=>{if(e)s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),r=t.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:b).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=i,this[i]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??y)(i?r:this[t],e))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[v("elementProperties")]=new Map,_[v("finalized")]=new Map,g?.({ReactiveElement:_}),(p.reactiveElementVersions??=[]).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,w=A.trustedTypes,x=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,S="?"+E,k=`<${S}>`,P=document,O=()=>P.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,R=t=>U(t)||"function"==typeof t?.[Symbol.iterator],M="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,I=/>/g,z=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,j=/"/g,B=/^(?:script|style|textarea|title)$/i,D=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),V=D(1),q=D(2),F=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),G=new WeakMap,J=P.createTreeWalker(P,129);function K(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const Z=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":"",n=H;for(let e=0;e<s;e++){const s=t[e];let a,l,c=-1,h=0;for(;h<s.length&&(n.lastIndex=h,l=n.exec(s),null!==l);)h=n.lastIndex,n===H?"!--"===l[1]?n=N:void 0!==l[1]?n=I:void 0!==l[2]?(B.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=z):void 0!==l[3]&&(n=z):n===z?">"===l[0]?(n=r??H,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?z:'"'===l[3]?j:L):n===j||n===L?n=z:n===N||n===I?n=H:(n=z,r=void 0);const d=n===z&&t[e+1].startsWith("/>")?" ":"";o+=n===H?s+k:c>=0?(i.push(a),s.slice(0,c)+C+s.slice(c)+E+d):s+E+(-2===c?e:d)}return[K(t,o+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class Q{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,c]=Z(t,e);if(this.el=Q.createElement(l,s),J.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=J.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=c[o++],s=i.getAttribute(t).split(E),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?st:"?"===n[1]?it:"@"===n[1]?rt:et}),i.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(B.test(i.tagName)){const t=i.textContent.split(E),e=t.length-1;if(e>0){i.textContent=w?w.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],O()),J.nextNode(),a.push({type:2,index:++r});i.append(t[e],O())}}}else if(8===i.nodeType)if(i.data===S)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(E,t+1));)a.push({type:7,index:r}),t+=E.length-1}r++}}static createElement(t,e){const s=P.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,i){if(e===F)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const o=T(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=X(t,r._$AS(t,e.values),r,i)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??P).importNode(e,!0);J.currentNode=i;let r=J.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new tt(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new ot(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=J.nextNode(),o++)}return J.currentNode=P,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),T(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):R(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==W&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(P.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Q.createElement(K(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Y(i,this),s=t.u(this.options);t.p(e),this.$(s),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new Q(t)),e}T(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new tt(this.k(O()),this.k(O()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=X(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=X(this,i[s+n],e,n),a===F&&(a=this._$AH[n]),o||=!T(a)||a!==this._$AH[n],a===W?t=W:t!==W&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.O(t)}O(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends et{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===W?void 0:t}}class it extends et{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class rt extends et{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??W)===F)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const nt={j:C,P:E,A:S,C:1,M:Z,L:Y,R,V:X,D:tt,I:et,H:it,N:rt,U:st,B:ot},at=A.litHtmlPolyfillSupport;at?.(Q,tt),(A.litHtmlVersions??=[]).push("3.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let lt=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new tt(e.insertBefore(O(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};lt._$litElement$=!0,lt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lt});const ct=globalThis.litElementPolyfillSupport;ct?.({LitElement:lt}),(globalThis.litElementVersions??=[]).push("4.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=1,dt=3,ut=Symbol();let pt=class{get taskComplete(){return this.t||(1===this.status?this.t=new Promise(((t,e)=>{this.i=t,this.o=e})):3===this.status?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(t,e,s){this.u=0,this.status=0,(this.p=t).addController(this);const i="object"==typeof e?e:{task:e,args:s};this._=i.task,this.v=i.args,this.j=i.argsEqual??mt,this.m=i.onComplete,this.g=i.onError,this.autoRun=i.autoRun??!0,"initialValue"in i&&(this.l=i.initialValue,this.status=2,this.k=this.A?.())}hostUpdate(){!0===this.autoRun&&this.O()}hostUpdated(){"afterUpdate"===this.autoRun&&this.O()}A(){if(void 0===this.v)return;const t=this.v();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async O(){const t=this.A(),e=this.k;this.k=t,t===e||void 0===t||void 0!==e&&this.j(e,t)||await this.run(t)}async run(t){let e,s;t??=this.A(),this.k=t,1===this.status?this.T?.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,"afterUpdate"===this.autoRun?queueMicrotask((()=>this.p.requestUpdate())):this.p.requestUpdate();const i=++this.u;this.T=new AbortController;let r=!1;try{e=await this._(t,{signal:this.T.signal})}catch(t){r=!0,s=t}if(this.u===i){if(e===ut)this.status=0;else{if(!1===r){try{this.m?.(e)}catch{}this.status=2,this.i?.(e)}else{try{this.g?.(s)}catch{}this.status=3,this.o?.(s)}this.l=e,this.h=s}this.p.requestUpdate()}}abort(t){1===this.status&&this.T?.abort(t)}get value(){return this.l}get error(){return this.h}render(t){switch(this.status){case 0:return t.initial?.();case 1:return t.pending?.();case 2:return t.complete?.(this.value);case 3:return t.error?.(this.error);default:throw Error("Unexpected status: "+this.status)}}};const mt=(t,e)=>t===e||t.length===e.length&&t.every(((t,s)=>!y(t,e[s])))
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;let ft=class extends Event{constructor(t,e,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=e,this.subscribe=s??!1}};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let gt=class{constructor(t,e,s,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=s,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new ft(this.context,this.t,this.subscribe))}},vt=class{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const s=e||!Object.is(t,this.o);this.o=t,s&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:e}]of this.subscriptions)t(this.o,e)},void 0!==t&&(this.value=t)}addCallback(t,e,s){if(!s)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}},bt=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}},yt=class extends vt{constructor(t,e,s){super(void 0!==e.context?e.initialValue:s),this.onContextRequest=t=>{const e=t.composedPath()[0];t.context===this.context&&e!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,e,t.subscribe))},this.onProviderRequest=t=>{const e=t.composedPath()[0];if(t.context!==this.context||e===this.host)return;const s=new Set;for(const[t,{consumerHost:e}]of this.subscriptions)s.has(t)||(s.add(t),e.dispatchEvent(new ft(this.context,t,!0)));t.stopPropagation()},this.host=t,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new bt(this.context))}};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $t=1,_t=2,At=t=>(...e)=>({_$litDirective$:t,values:e});let wt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:xt}=nt,Ct=()=>document.createComment(""),Et=(t,e,s)=>{const i=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===s){const e=i.insertBefore(Ct(),r),o=i.insertBefore(Ct(),r);s=new xt(e,o,t,t.options)}else{const e=s._$AB.nextSibling,o=s._$AM,n=o!==t;if(n){let e;s._$AQ?.(t),s._$AM=t,void 0!==s._$AP&&(e=t._$AU)!==o._$AU&&s._$AP(e)}if(e!==r||n){let t=s._$AA;for(;t!==e;){const e=t.nextSibling;i.insertBefore(t,r),t=e}}}return s},St=(t,e,s=t)=>(t._$AI(e,s),t),kt={},Pt=t=>{t._$AP?.(!1,!0);let e=t._$AA;const s=t._$AB.nextSibling;for(;e!==s;){const t=e.nextSibling;e.remove(),e=t}},Ot=(t,e,s)=>{const i=new Map;for(let r=e;r<=s;r++)i.set(t[r],r);return i},Tt=At(class extends wt{constructor(t){if(super(t),t.type!==_t)throw Error("repeat() can only be used in text expressions")}ht(t,e,s){let i;void 0===s?s=e:void 0!==e&&(i=e);const r=[],o=[];let n=0;for(const e of t)r[n]=i?i(e,n):n,o[n]=s(e,n),n++;return{values:o,keys:r}}render(t,e,s){return this.ht(t,e,s).values}update(t,[e,s,i]){const r=(t=>t._$AH)(t),{values:o,keys:n}=this.ht(e,s,i);if(!Array.isArray(r))return this.dt=n,o;const a=this.dt??=[],l=[];let c,h,d=0,u=r.length-1,p=0,m=o.length-1;for(;d<=u&&p<=m;)if(null===r[d])d++;else if(null===r[u])u--;else if(a[d]===n[p])l[p]=St(r[d],o[p]),d++,p++;else if(a[u]===n[m])l[m]=St(r[u],o[m]),u--,m--;else if(a[d]===n[m])l[m]=St(r[d],o[m]),Et(t,l[m+1],r[d]),d++,m--;else if(a[u]===n[p])l[p]=St(r[u],o[p]),Et(t,r[d],r[u]),u--,p++;else if(void 0===c&&(c=Ot(n,p,m),h=Ot(a,d,u)),c.has(a[d]))if(c.has(a[u])){const e=h.get(n[p]),s=void 0!==e?r[e]:null;if(null===s){const e=Et(t,r[d]);St(e,o[p]),l[p]=e}else l[p]=St(s,o[p]),Et(t,r[d],s),r[e]=null;p++}else Pt(r[u]),u--;else Pt(r[d]),d++;for(;p<=m;){const e=Et(t,l[m+1]);St(e,o[p]),l[p++]=e}for(;d<=u;){const t=r[d++];null!==t&&Pt(t)}return this.dt=n,((t,e=kt)=>{t._$AH=e})(t,l),F}}),Ut=Symbol("scroller-context"),Rt=At(class extends wt{constructor(t){if(super(t),t.type!==$t||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(e)}const s=t.element.classList;for(const t of this.it)t in e||(s.remove(t),this.it.delete(t));for(const t in e){const i=!!e[t];i===this.it.has(t)||this.st?.has(t)||(i?(s.add(t),this.it.add(t)):(s.remove(t),this.it.delete(t)))}return F}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Mt extends wt{constructor(t){if(super(t),this.et=W,t.type!==_t)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===W||null==t)return this.vt=void 0,this.et=t;if(t===F)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const e=[t];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Mt.directiveName="unsafeHTML",Mt.resultType=1;const Ht=At(Mt),Nt="important",It=" !"+Nt,zt=At(class extends wt{constructor(t){if(super(t),t.type!==$t||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return null==i?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(e)),this.render(e);for(const t of this.ut)null==e[t]&&(this.ut.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ut.add(t);const e="string"==typeof i&&i.endsWith(It);t.includes("-")||e?s.setProperty(t,e?i.slice(0,-11):i,e?Nt:""):s[t]=i}}return F}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=["Autó","Belföld","Bulvár","Életmód","Gazdaság","Informatika","Külföld","Kultúra","Publicisztika","Sport"],jt=Lt.reduce(((t,e)=>(t[e]=e.toLowerCase().replace(/ /g,"-").normalize("NFD").replace(/[\u0300-\u036f]/g,""),t)),{});function Bt(t){return{"--category-color":`var(--category-color-${jt[t]??"unknown"})`}}function Dt(t){return Array.from(t.reduce(((t,e)=>(e.topic&&t.add(e.topic),t)),new Set)).sort(((t,e)=>t.localeCompare(e)))}class Vt extends(function(t){return class extends t{static get properties(){return{...super.properties,imageLoaded:{type:Boolean,reflect:!0,attribute:"image-loaded"}}}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t);const e=this.shadowRoot.querySelector('img[data-loading="lazy"]');e?(e.addEventListener("load",this._lazyImageLoadComplete.bind(this)),e.addEventListener("error",(()=>{this._lazyImageLoadComplete.bind(this)}))):this._lazyImageLoadComplete()}_lazyImageLoadComplete(){this.imageLoaded=!0}renderSVGLoader(){return V`${this.imageLoaded?W:q`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
</svg>`}`}}}(lt)){render(){return V`
      <figure
        class="media-container"
        ?hidden=${!this._elementVisible||!this.imageSrc}
      >
        ${this.renderSVGLoader()}
        <img
          class="js_media js_lazy"
          data-loading="lazy"
          src="${this._elementVisible?this.imageSrc:""}"
        />
        <!-- TODO: Add caption and alt -->
        <!-- <figcaption></figcaption> -->
      </figure>
    `}static properties={imageSrc:{type:String,attribute:"src"},_elementVisible:{state:!0}};intersectionObserver=null;connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._elementVisible||this.registerObserver()}disconnectedCallback(){this.intersectionObserver&&this.intersectionObserver.disconnect(),super.disconnectedCallback&&super.disconnectedCallback()}registerObserver(){this.intersectionObserver=new IntersectionObserver(this.onIntersect.bind(this),{rootMargin:"0px"}),this.intersectionObserver.observe(this)}onIntersect(t,e){t.forEach((t=>{t.isIntersecting&&(this._elementVisible=!0,this.intersectionObserver.disconnect())}))}static get styles(){return o`
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
    `}}window.customElements.define("lazy-image",Vt);class qt extends lt{render(){return V`
      <li
        class="newsitem ${Rt({active:this.isActive})}"
        style="${zt(Bt(this.item.topic))}"
        role="article"
      >
        <header class="header">
          <h2 class="title">${Ht(this.item.title)}</h2>
        </header>
        <div class="details">
          <div class="expander">
            <!-- TODO: Add a read more permalink -->
            <p class="lead">${Ht(this.item.lead)}</p>
            <lazy-image src="${this.item.image}"></lazy-media>
          </div>
        </div>
        <!-- TODO: source should take me to the article, or the source home? -->
        <footer>
          <span class="source">${this.item.source}</span>
          <span class="time">${this.relativeTime(this.item)}</span>
        </footer>
      </li>
    `}_observer=new gt(this,{context:Ut});static properties={item:{type:Object},isActive:{type:Boolean,attribute:"is-active"}};shouldUpdate(t){return!t.has("isActive")||this.isActive}firstUpdated(){this._observer.value.observe(this)}disconnectedCallback(){this._observer.value.unobserve(this),super.disconnectedCallback()}relativeTime({date:t,time:e}){return t&&e?function(t,e){const s="number"==typeof t?t:t.getTime(),i=Math.round((s-Date.now())/1e3),r=[60,3600,86400,604800,2592e3,31536e3,1/0],o=r.findIndex((t=>t>Math.abs(i))),n=o?r[o-1]:1;return new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(Math.floor(i/n),["second","minute","hour","day","week","month","year"][o])}(new Date(t+"T"+e),navigator.language):""}static styles=[o`
      .newsitem {
        background-color: var(--newsitem-bg-color);
        color: var(--newsitem-color);
        padding: 16px;
        display: flex;
        flex-direction: column;
        border-radius: 16px;
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

      footer {
        order: 1;
        display: flex;
        font-size: 0.75rem;
        font-family: 'Roboto Condensed', sans-serif;
        line-height: 1.3;

        align-items: center;
      }

      footer::before {
        content: '';
        width: 1em;
        height: 1em;
        display: block;
        background-color: var(--topic-color, var(--topic-0));
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
    `]}window.customElements.define("news-item",qt);window.customElements.define("news-items",class extends lt{render(){return V`
      <ol>
        ${Tt(this.items,(t=>t.id),(t=>V`<news-item
            data-id="${t.id}"
            ?is-active=${this._activeItem===t.id}
            .item=${t}
          ></news-item>`))}
      </ol>
    `}_provider=new yt(this,{context:Ut});static properties={items:{type:Array},_activeItem:{state:!0}};intersectionOptions={root:null,rootMargin:"0px 0px -55% 0px",threshold:0};observer=null;connectedCallback(){super.connectedCallback(),this.observer=new IntersectionObserver(this.onIntersect.bind(this),this.intersectionOptions),this._provider.setValue(this.observer)}disconnectedCallback(){this.observer.disconnect(),super.disconnectedCallback()}onIntersect(t,e){t.forEach((t=>{if(t.isIntersecting){const e=t.target.getAttribute("data-id");this._activeItem=e}}))}static get styles(){return o`
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
    `}});window.customElements.define("news-items-placeholder",class extends lt{render(){return V`
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    `}static get styles(){return o`
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
    `}});class Ft extends lt{render(){return V`
      ${Tt(Lt,(t=>t),(t=>V`<a
            class="category-button ${Rt({selected:t===this.selectedCategory})}"
            style="${zt(Bt(t))}"
            aria-disabled=${!this.availableCategories.includes(t)}
            @click=${{handleEvent:()=>this.onCategorySelect(t)}}
          >
            ${t}
          </a>`))}
    `}static properties={availableCategories:{type:Array,attribute:!1},selectedCategory:{type:String,attribute:!1}};onCategorySelect(t){this.dispatchEvent(new CustomEvent("categorySelect",{detail:{category:t},bubbles:!0,composed:!0}))}static styles=o`
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
  `}window.customElements.define("news-categories",Ft);class Wt{static saveItemsToCache(t){localStorage.setItem("items",JSON.stringify(t))}static getItemsFromCache(){const t=localStorage.getItem("items");return t?JSON.parse(t):[]}}class Gt extends lt{render(){return V`
      <div class="header">
        <h1><strong>Stenza</strong> news aggregator</h1>
        <news-categories
          .selectedCategory=${this._selectedCategory}
          .availableCategories=${this._availableCategories}
          @categorySelect=${this.onCategorySelect}
        ></news-categories>
      </div>

      <!-- Show placeholders when cache is cold and data is loading -->
      ${0===this._items.length&&this._dataTask.status===ht?V`<news-items-placeholder></news-items-placeholder>`:V`<news-items
            .items=${t=this._items,e=this._selectedCategory,e?t.filter((t=>t.topic===e)):t}
          ></news-items>`}

      <!-- Show error message when couldn't refresh -->
      ${this._dataTask.status===dt?V`<p class="error-message">Couldn't refresh feed</p>`:W}
    `;var t,e}_itemsFromCache=Wt.getItemsFromCache();constructor(){super(),this._items=this._itemsFromCache,this._availableCategories=Lt,this._selectedCategory=null}connectedCallback(){super.connectedCallback(),this._dataTask.run()}_dataTask=new pt(this,{task:async(t,{signal:e})=>{const s=await(async t=>{const e=await fetch("https://stories-test-78664cfb8416.herokuapp.com/?randomize-media=true",{signal:t});if(200===e.status)return e.json().then((t=>(Wt.saveItemsToCache(t.slice(0,10)),{items:t,categories:Dt(t)})));{const t=Wt.getItemsFromCache();if(t.length>0)return console.error(e.text()),{items:t,categories:Lt};throw e.text()}})(e);return this._items=s.items,this._availableCategories=s.categories,s}});onCategorySelect(t){const e=t.detail.category;e!==this._selectedCategory?this._selectedCategory=e:this._selectedCategory=null}static properties={_items:{state:!0},_availableCategories:{state:!0},_selectedCategory:{state:!0}};static styles=[o`
      news-items-placeholder,
      news-items {
        margin: 0 10px;
        display: block;
      }

      .error-message {
        text-align: center;
        color: darkred;
      }

      .header {
        border-bottom: 1px solid var(--header-bottom-border-color);
        padding: 10px 10px 0;
        margin-bottom: 35px;
        background: var(--header-bg-color);
      }

      h1 {
        font-size: 22px;
        margin-top: 10px;
        margin-left: 16px;
        color: var(--header-color);
        font-family: 'Roboto Condensed', sans-serif;
      }
      h1 strong {
        font-family: Roboto, sans-serif;
      }
    `]}window.customElements.define("scrollnews-app",Gt);export{Gt as App};
