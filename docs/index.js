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
 */,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,m=u.trustedTypes,g=m?m.emptyScript:"",f=u.reactiveElementPolyfillSupport,y=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},_=(t,e)=>!a(t,e),v={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const o=i?.call(this);r.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const s=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((s,i)=>{if(e)s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),r=t.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}})(s,this.constructor.elementStyles),s}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:$).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=i,this[i]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??_)(i?r:this[t],e))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[y("elementProperties")]=new Map,b[y("finalized")]=new Map,f?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,w=A.trustedTypes,x=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,E="?"+C,k=`<${E}>`,U=document,T=()=>U.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,R=t=>O(t)||"function"==typeof t?.[Symbol.iterator],N="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,M=/>/g,z=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,j=/"/g,B=/^(?:script|style|textarea|title)$/i,D=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),V=D(1),q=D(2),F=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),G=new WeakMap,J=U.createTreeWalker(U,129);function K(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}const Z=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":"",n=H;for(let e=0;e<s;e++){const s=t[e];let a,l,c=-1,h=0;for(;h<s.length&&(n.lastIndex=h,l=n.exec(s),null!==l);)h=n.lastIndex,n===H?"!--"===l[1]?n=I:void 0!==l[1]?n=M:void 0!==l[2]?(B.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=z):void 0!==l[3]&&(n=z):n===z?">"===l[0]?(n=r??H,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?z:'"'===l[3]?j:L):n===j||n===L?n=z:n===I||n===M?n=H:(n=z,r=void 0);const d=n===z&&t[e+1].startsWith("/>")?" ":"";o+=n===H?s+k:c>=0?(i.push(a),s.slice(0,c)+S+s.slice(c)+C+d):s+C+(-2===c?e:d)}return[K(t,o+(t[s]||"<?>")+(2===e?"</svg>":"")),i]};class Q{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[l,c]=Z(t,e);if(this.el=Q.createElement(l,s),J.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=J.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=c[o++],s=i.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?st:"?"===n[1]?it:"@"===n[1]?rt:et}),i.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(B.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=w?w.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),J.nextNode(),a.push({type:2,index:++r});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===E)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)a.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const s=U.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,i){if(e===F)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const o=P(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=X(t,r._$AS(t,e.values),r,i)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??U).importNode(e,!0);J.currentNode=i;let r=J.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new tt(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new ot(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=J.nextNode(),o++)}return J.currentNode=U,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),P(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):R(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==W&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(U.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Q.createElement(K(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Y(i,this),s=t.u(this.options);t.p(e),this.$(s),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new Q(t)),e}T(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new tt(this.k(T()),this.k(T()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=X(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=X(this,i[s+n],e,n),a===F&&(a=this._$AH[n]),o||=!P(a)||a!==this._$AH[n],a===W?t=W:t!==W&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.O(t)}O(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends et{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===W?void 0:t}}class it extends et{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class rt extends et{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??W)===F)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const nt={j:S,P:C,A:E,C:1,M:Z,L:Y,R,V:X,D:tt,I:et,H:it,N:rt,U:st,B:ot},at=A.litHtmlPolyfillSupport;at?.(Q,tt),(A.litHtmlVersions??=[]).push("3.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let lt=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new tt(e.insertBefore(T(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};lt._$litElement$=!0,lt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lt});const ct=globalThis.litElementPolyfillSupport;ct?.({LitElement:lt}),(globalThis.litElementVersions??=[]).push("4.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=1,dt=3,pt=Symbol();let ut=class{get taskComplete(){return this.t||(1===this.status?this.t=new Promise(((t,e)=>{this.i=t,this.o=e})):3===this.status?this.t=Promise.reject(this.h):this.t=Promise.resolve(this.l)),this.t}constructor(t,e,s){this.u=0,this.status=0,(this.p=t).addController(this);const i="object"==typeof e?e:{task:e,args:s};this._=i.task,this.v=i.args,this.j=i.argsEqual??mt,this.m=i.onComplete,this.g=i.onError,this.autoRun=i.autoRun??!0,"initialValue"in i&&(this.l=i.initialValue,this.status=2,this.k=this.A?.())}hostUpdate(){!0===this.autoRun&&this.O()}hostUpdated(){"afterUpdate"===this.autoRun&&this.O()}A(){if(void 0===this.v)return;const t=this.v();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async O(){const t=this.A(),e=this.k;this.k=t,t===e||void 0===t||void 0!==e&&this.j(e,t)||await this.run(t)}async run(t){let e,s;t??=this.A(),this.k=t,1===this.status?this.T?.abort():(this.t=void 0,this.i=void 0,this.o=void 0),this.status=1,"afterUpdate"===this.autoRun?queueMicrotask((()=>this.p.requestUpdate())):this.p.requestUpdate();const i=++this.u;this.T=new AbortController;let r=!1;try{e=await this._(t,{signal:this.T.signal})}catch(t){r=!0,s=t}if(this.u===i){if(e===pt)this.status=0;else{if(!1===r){try{this.m?.(e)}catch{}this.status=2,this.i?.(e)}else{try{this.g?.(s)}catch{}this.status=3,this.o?.(s)}this.l=e,this.h=s}this.p.requestUpdate()}}abort(t){1===this.status&&this.T?.abort(t)}get value(){return this.l}get error(){return this.h}render(t){switch(this.status){case 0:return t.initial?.();case 1:return t.pending?.();case 2:return t.complete?.(this.value);case 3:return t.error?.(this.error);default:throw Error("Unexpected status: "+this.status)}}};const mt=(t,e)=>t===e||t.length===e.length&&t.every(((t,s)=>!_(t,e[s])))
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,gt=1,ft=2,yt=t=>(...e)=>({_$litDirective$:t,values:e});let $t=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{D:_t}=nt,vt=()=>document.createComment(""),bt=(t,e,s)=>{const i=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===s){const e=i.insertBefore(vt(),r),o=i.insertBefore(vt(),r);s=new _t(e,o,t,t.options)}else{const e=s._$AB.nextSibling,o=s._$AM,n=o!==t;if(n){let e;s._$AQ?.(t),s._$AM=t,void 0!==s._$AP&&(e=t._$AU)!==o._$AU&&s._$AP(e)}if(e!==r||n){let t=s._$AA;for(;t!==e;){const e=t.nextSibling;i.insertBefore(t,r),t=e}}}return s},At=(t,e,s=t)=>(t._$AI(e,s),t),wt={},xt=t=>{t._$AP?.(!1,!0);let e=t._$AA;const s=t._$AB.nextSibling;for(;e!==s;){const t=e.nextSibling;e.remove(),e=t}},St=(t,e,s)=>{const i=new Map;for(let r=e;r<=s;r++)i.set(t[r],r);return i},Ct=yt(class extends $t{constructor(t){if(super(t),t.type!==ft)throw Error("repeat() can only be used in text expressions")}ht(t,e,s){let i;void 0===s?s=e:void 0!==e&&(i=e);const r=[],o=[];let n=0;for(const e of t)r[n]=i?i(e,n):n,o[n]=s(e,n),n++;return{values:o,keys:r}}render(t,e,s){return this.ht(t,e,s).values}update(t,[e,s,i]){const r=(t=>t._$AH)(t),{values:o,keys:n}=this.ht(e,s,i);if(!Array.isArray(r))return this.dt=n,o;const a=this.dt??=[],l=[];let c,h,d=0,p=r.length-1,u=0,m=o.length-1;for(;d<=p&&u<=m;)if(null===r[d])d++;else if(null===r[p])p--;else if(a[d]===n[u])l[u]=At(r[d],o[u]),d++,u++;else if(a[p]===n[m])l[m]=At(r[p],o[m]),p--,m--;else if(a[d]===n[m])l[m]=At(r[d],o[m]),bt(t,l[m+1],r[d]),d++,m--;else if(a[p]===n[u])l[u]=At(r[p],o[u]),bt(t,r[d],r[p]),p--,u++;else if(void 0===c&&(c=St(n,u,m),h=St(a,d,p)),c.has(a[d]))if(c.has(a[p])){const e=h.get(n[u]),s=void 0!==e?r[e]:null;if(null===s){const e=bt(t,r[d]);At(e,o[u]),l[u]=e}else l[u]=At(s,o[u]),bt(t,r[d],s),r[e]=null;u++}else xt(r[p]),p--;else xt(r[d]),d++;for(;u<=m;){const e=bt(t,l[m+1]);At(e,o[u]),l[u++]=e}for(;d<=p;){const t=r[d++];null!==t&&xt(t)}return this.dt=n,((t,e=wt)=>{t._$AH=e})(t,l),F}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Et(t,e){return function(t){return(new Date).toDateString()===t.toDateString()}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */(t)?new Intl.DateTimeFormat(e,{hour:"numeric",minute:"numeric"}).format(t):new Intl.DateTimeFormat(e,{month:"short",day:"numeric"}).format(t)}function kt(t,e){return new Date(t+"T"+e).getTime()}const Ut=yt(class extends $t{constructor(t){if(super(t),t.type!==gt||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(e)}const s=t.element.classList;for(const t of this.it)t in e||(s.remove(t),this.it.delete(t));for(const t in e){const i=!!e[t];i===this.it.has(t)||this.st?.has(t)||(i?(s.add(t),this.it.add(t)):(s.remove(t),this.it.delete(t)))}return F}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Tt extends $t{constructor(t){if(super(t),this.et=W,t.type!==ft)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===W||null==t)return this.vt=void 0,this.et=t;if(t===F)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;const e=[t];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Tt.directiveName="unsafeHTML",Tt.resultType=1;const Pt=yt(Tt),Ot="important",Rt=" !"+Ot,Nt=yt(class extends $t{constructor(t){if(super(t),t.type!==gt||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return null==i?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(e)),this.render(e);for(const t of this.ut)null==e[t]&&(this.ut.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in e){const i=e[t];if(null!=i){this.ut.add(t);const e="string"==typeof i&&i.endsWith(Rt);t.includes("-")||e?s.setProperty(t,e?i.slice(0,-11):i,e?Ot:""):s[t]=i}}return F}}),Ht=["Autó","Belföld","Bulvár","Életmód","Gazdaság","Informatika","Külföld","Kultúra","Publicisztika","Sport"],It=Ht.reduce(((t,e)=>(t[e]=e.toLowerCase().replace(/ /g,"-").normalize("NFD").replace(/[\u0300-\u036f]/g,""),t)),{});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Mt(t){return{"--category-color":`var(--category-color-${It[t]??"unknown"})`}}function zt(t){return Array.from(t.reduce(((t,e)=>(e.topic&&t.add(e.topic),t)),new Set)).sort(((t,e)=>t.localeCompare(e)))}function Lt(t){return{fill:"both",timeline:new window.ViewTimeline({axis:"block",subject:t}),rangeStart:"cover 20%",rangeEnd:"contain 100%"}}class jt extends(function(t){return class extends t{static get properties(){return{...super.properties,imageLoaded:{type:Boolean,reflect:!0,attribute:"image-loaded"}}}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t);const e=this.shadowRoot.querySelector('img[data-loading="lazy"]');e?(e.addEventListener("load",this._lazyImageLoadComplete.bind(this)),e.addEventListener("error",(()=>{this._lazyImageLoadComplete.bind(this)}))):this._lazyImageLoadComplete()}_lazyImageLoadComplete(){this.imageLoaded=!0}renderSVGLoader(){return V`${this.imageLoaded?W:q`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
    `}}window.customElements.define("lazy-image",jt);class Bt extends lt{render(){return V`
      <li
        class="newsitem ${Ut({active:this.isActive})}"
        style="${Nt(Mt(this.item.topic))}"
        role="article"
      >
        <header class="header">
          <h2 class="title">
            <a href="${this._permalink}" target="_blank">${Pt(this.item.title)}</a>
          </h2>
        </header>
        <div class="details">
          <p class="lead">${Pt(this.item.lead)}</p>
          <lazy-image src="${this.item.image}"></lazy-media>
        </div>
        <footer>
          <span class="source">${this.item.source}</span>
          <span class="time">${this.absoluteTime(this.item)}</span>
        </footer>
        <a href="${this._permalink}" target="_blank" class="permalink" aria-hidden="true" tabindex="-1"></a>
      </li>
    `}_permalink="";_sourceURL="";static properties={item:{type:Object},isActive:{type:Boolean,attribute:"is-active"}};willUpdate(t){const e=new URL(this.item.url);this._permalink=e.href}shouldUpdate(t){return!t.has("isActive")||this.isActive}firstUpdated(){const t=this.renderRoot.querySelector(".newsitem");this.renderRoot.querySelector(".details").animate([{maxHeight:0},{maxHeight:"500px"},{maxHeight:0}],Lt(t)),t.animate([{opacity:.7},{opacity:1},{opacity:.7}],Lt(t))}disconnectedCallback(){super.disconnectedCallback()}absoluteTime({date:t,time:e}){return t&&e?Et(new Date(t+"T"+e),navigator.language):""}static styles=[o`
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
    `]}window.customElements.define("news-item",Bt);window.customElements.define("news-items",class extends lt{render(){return V`
      <ol>
        ${Ct(this.items,(t=>t.id),((t,e)=>{const s=V`<news-item
              data-id="${t.id}"
              ?is-active=${this._activeItem===t.id}
              .item=${t}
            ></news-item>`;return this._renderSeparatorBefore&&t.id===this._renderSeparatorBefore.id&&e>0?V`${this.separator()} ${s}`:s}))}
      </ol>
    `}separator(){return V`<li class="separator"><span>régebbi hírek</span></li>`}static properties={items:{type:Array},previusUpdate:{type:String},selectedCategory:{type:String,attribute:!1},_activeItem:{state:!0},_renderSeparatorBefore:{state:!0}};willUpdate(t){this._renderSeparatorBefore=this.items.find((t=>kt(t.date,t.time)<=this.previusUpdate)),t.has("selectedCategory")&&(this._activeItem=this.items[0].id)}firstUpdated(){this._activeItem=this.items[0].id}static get styles(){return o`
      ol {
        list-style: none;
        padding: 0;
        margin: 0;

        display: flex;
        flex-direction: column;
        gap: 1em;
      }

      .separator {
        text-align: center;
        margin: 10px 0;
        position: relative;
      }
      .separator::before {
        content: '';
        height: 1px;
        display: block;
        position: absolute;
        top: 50%;
        width: 100%;
        background-color: var(--header-color);
      }

      .separator span {
        background-color: var(--main-bg-color);
        color: var(--header-color);
        position: relative;
        padding: 0 10px;
      }

      @media only screen and (min-width: 768px) {
        ol {
          max-width: 60%;
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
    `}});class Dt extends lt{render(){return V`
      ${Ct(this.availableCategories,(t=>t),(t=>V`<a
            class="category-button ${Ut({selected:t===this.selectedCategory})}"
            style="${Nt(Mt(t))}"
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
  `}window.customElements.define("news-categories",Dt);const Vt={latestItemTimestamp:null};class qt{static saveItemsToCache(t){localStorage.setItem("items",JSON.stringify(t))}static getItemsFromCache(){const t=localStorage.getItem("items");return t?JSON.parse(t):[]}static saveState(t){localStorage.setItem("state",JSON.stringify(t))}static getState(){const t=localStorage.getItem("state");return t?JSON.parse(t):Vt}}class Ft extends lt{render(){return V`
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
            .previusUpdate=${this._previusUpdate}
            .selectedCategory=${this._selectedCategory}
          ></news-items>`}

      <!-- Show error message when couldn't refresh -->
      ${this._dataTask.status===dt?V`<p class="error-message">Couldn't refresh feed</p>`:W}
    `;var t,e}_itemsFromCache=qt.getItemsFromCache();_previusUpdate=qt.getState().latestItemTimestamp;constructor(){super(),this._items=this._itemsFromCache,this._availableCategories=Ht,this._selectedCategory=null}connectedCallback(){super.connectedCallback(),this._dataTask.run()}_dataTask=new ut(this,{task:async(t,{signal:e})=>{const s=await(async t=>{const e=await fetch("https://us-central1-scrollnews-proxy.cloudfunctions.net/app?randomize-media=true",{signal:t});if(200===e.status)return e.json().then((t=>(qt.saveItemsToCache(t.slice(0,10)),t[0]&&qt.saveState({...qt.getState(),latestItemTimestamp:kt(t[0].date,t[0].time)}),{items:t,categories:zt(t)})));{const t=qt.getItemsFromCache();if(t.length>0)return console.error(e.text()),{items:t,categories:Ht};throw e.text()}})(e);return this._items=s.items,this._availableCategories=s.categories,s}});onCategorySelect(t){const e=t.detail.category;e!==this._selectedCategory?this._selectedCategory=e:this._selectedCategory=null}static properties={_items:{state:!0},_availableCategories:{state:!0},_selectedCategory:{state:!0}};static styles=[o`
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
    `]}window.customElements.define("scrollnews-app",Ft);export{Ft as App};
