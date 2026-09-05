(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=globalThis,Q=k.ShadowRoot&&(k.ShadyCSS===void 0||k.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),rt=new WeakMap;let yt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Q&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=rt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&rt.set(e,t))}return t}toString(){return this.cssText}};const Tt=r=>new yt(typeof r=="string"?r:r+"",void 0,X),bt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new yt(e,r,X)},Lt=(r,t)=>{if(Q)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=k.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},ot=Q?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return Tt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ot,defineProperty:Ut,getOwnPropertyDescriptor:Ht,getOwnPropertyNames:Rt,getOwnPropertySymbols:It,getPrototypeOf:Dt}=Object,v=globalThis,nt=v.trustedTypes,Nt=nt?nt.emptyScript:"",B=v.reactiveElementPolyfillSupport,P=(r,t)=>r,q={toAttribute(r,t){switch(t){case Boolean:r=r?Nt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},tt=(r,t)=>!Ot(r,t),at={attribute:!0,type:String,converter:q,reflect:!1,useDefault:!1,hasChanged:tt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=at){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Ut(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=Ht(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const a=i==null?void 0:i.call(this);o==null||o.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??at}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=Dt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,s=[...Rt(e),...It(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(ot(i))}else t!==void 0&&e.push(ot(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Lt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:q).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var o,n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=s.getPropertyOptions(i),h=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:q;this._$Em=i;const l=h.fromAttribute(e,a.type);this[i]=l??((n=this._$Ej)==null?void 0:n.get(i))??l,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){var n;if(t!==void 0){const a=this.constructor;if(i===!1&&(o=this[t]),s??(s=a.getPropertyOptions(t)),!((s.hasChanged??tt)(o,e)||s.useDefault&&s.reflect&&o===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(a._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i){const{wrapped:a}=n,h=this[o];a!==!0||this._$AL.has(o)||h===void 0||this.C(o,void 0,n,h)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[P("elementProperties")]=new Map,w[P("finalized")]=new Map,B==null||B({ReactiveElement:w}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,ht=r=>r,j=T.trustedTypes,lt=j?j.createPolicy("lit-html",{createHTML:r=>r}):void 0,_t="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,$t="?"+g,kt=`<${$t}>`,$=document,O=()=>$.createComment(""),U=r=>r===null||typeof r!="object"&&typeof r!="function",et=Array.isArray,Vt=r=>et(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",W=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ct=/-->/g,dt=/>/g,y=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ut=/'/g,pt=/"/g,wt=/^(?:script|style|textarea|title)$/i,qt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),V=qt(1),E=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),mt=new WeakMap,b=$.createTreeWalker($,129);function St(r,t){if(!et(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return lt!==void 0?lt.createHTML(t):t}const jt=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=C;for(let a=0;a<e;a++){const h=r[a];let l,d,c=-1,p=0;for(;p<h.length&&(n.lastIndex=p,d=n.exec(h),d!==null);)p=n.lastIndex,n===C?d[1]==="!--"?n=ct:d[1]!==void 0?n=dt:d[2]!==void 0?(wt.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=y):d[3]!==void 0&&(n=y):n===y?d[0]===">"?(n=i??C,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,l=d[1],n=d[3]===void 0?y:d[3]==='"'?pt:ut):n===pt||n===ut?n=y:n===ct||n===dt?n=C:(n=y,i=void 0);const m=n===y&&r[a+1].startsWith("/>")?" ":"";o+=n===C?h+kt:c>=0?(s.push(l),h.slice(0,c)+_t+h.slice(c)+g+m):h+g+(c===-2?a:m)}return[St(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class H{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const a=t.length-1,h=this.parts,[l,d]=jt(t,e);if(this.el=H.createElement(l,s),b.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=b.nextNode())!==null&&h.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(_t)){const p=d[n++],m=i.getAttribute(c).split(g),N=/([.?@])?(.*)/.exec(p);h.push({type:1,index:o,name:N[2],strings:m,ctor:N[1]==="."?Gt:N[1]==="?"?Bt:N[1]==="@"?Wt:z}),i.removeAttribute(c)}else c.startsWith(g)&&(h.push({type:6,index:o}),i.removeAttribute(c));if(wt.test(i.tagName)){const c=i.textContent.split(g),p=c.length-1;if(p>0){i.textContent=j?j.emptyScript:"";for(let m=0;m<p;m++)i.append(c[m],O()),b.nextNode(),h.push({type:2,index:++o});i.append(c[p],O())}}}else if(i.nodeType===8)if(i.data===$t)h.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf(g,c+1))!==-1;)h.push({type:7,index:o}),c+=g.length-1}o++}}static createElement(t,e){const s=$.createElement("template");return s.innerHTML=t,s}}function x(r,t,e=r,s){var n,a;if(t===E)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const o=U(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=x(r,i._$AS(r,t.values),i,s)),t}class zt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??$).importNode(e,!0);b.currentNode=i;let o=b.nextNode(),n=0,a=0,h=s[0];for(;h!==void 0;){if(n===h.index){let l;h.type===2?l=new I(o,o.nextSibling,this,t):h.type===1?l=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(l=new Ft(o,this,t)),this._$AV.push(l),h=s[++a]}n!==(h==null?void 0:h.index)&&(o=b.nextNode(),n++)}return b.currentNode=$,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class I{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),U(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Vt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T($.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=H.createElement(St(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const n=new zt(i,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=mt.get(t.strings);return e===void 0&&mt.set(t.strings,e=new H(t)),e}k(t){et(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new I(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t!==this._$AB;){const i=ht(t).nextSibling;ht(t).remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=x(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{const a=t;let h,l;for(t=o[0],h=0;h<o.length-1;h++)l=x(this,a[s+h],e,h),l===E&&(l=this._$AH[h]),n||(n=!U(l)||l!==this._$AH[h]),l===u?t=u:t!==u&&(t+=(l??"")+o[h+1]),this._$AH[h]=l}n&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Gt extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}class Bt extends z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class Wt extends z{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=x(this,t,e,0)??u)===E)return;const s=this._$AH,i=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==u&&(s===u||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ft{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const F=T.litHtmlPolyfillSupport;F==null||F(H,I),(T.litHtmlVersions??(T.litHtmlVersions=[])).push("3.3.3");const Kt=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new I(t.insertBefore(O(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=globalThis;let A=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return E}};var vt;A._$litElement$=!0,A.finalized=!0,(vt=_.litElementHydrateSupport)==null||vt.call(_,{LitElement:A});const K=_.litElementPolyfillSupport;K==null||K({LitElement:A});(_.litElementVersions??(_.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:tt},Jt=(r=Yt,t,e)=>{const{kind:s,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),s==="accessor"){const{name:n}=e;return{set(a){const h=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,h,r,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,r,a),a}}}if(s==="setter"){const{name:n}=e;return function(a){const h=this[n];t.call(this,a),this.requestUpdate(n,h,r,!0,a)}}throw Error("Unsupported decorator location: "+s)};function D(r){return(t,e)=>typeof e=="object"?Jt(r,t,e):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Et=class extends Event{constructor(t,e,s,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e,this.callback=s,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ft=class{constructor(t,e,s,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(o,n)=>{this.unsubscribe&&(this.unsubscribe!==n&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=o,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(o,n)),this.unsubscribe=n},this.host=t,e.context!==void 0){const o=e;this.context=o.context,this.callback=o.callback,this.subscribe=o.subscribe??!1}else this.context=e,this.callback=s,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Et(this.context,this.host,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Zt{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){const s=e||!Object.is(t,this.o);this.o=t,s&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[e,{disposer:s}]of this.subscriptions)e(this.o,s)},t!==void 0&&(this.value=t)}addCallback(t,e,s){if(!s)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});const{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Qt=class extends Event{constructor(t,e){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e}};class gt extends Zt{constructor(t,e,s){var i,o;super(e.context!==void 0?e.initialValue:s),this.onContextRequest=n=>{if(n.context!==this.context)return;const a=n.contextTarget??n.composedPath()[0];a!==this.host&&(n.stopPropagation(),this.addCallback(n.callback,a,n.subscribe))},this.onProviderRequest=n=>{if(n.context!==this.context||(n.contextTarget??n.composedPath()[0])===this.host)return;const a=new Set;for(const[h,{consumerHost:l}]of this.subscriptions)a.has(h)||(a.add(h),l.dispatchEvent(new Et(this.context,l,h,!0)));n.stopPropagation()},this.host=t,e.context!==void 0?this.context=e.context:this.context=e,this.attachListeners(),(o=(i=this.host).addController)==null||o.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Qt(this.context,this.host))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function st({context:r}){return(t,e)=>{const s=new WeakMap;if(typeof e=="object")return{get(){return t.get.call(this)},set(i){return s.get(this).setValue(i),t.set.call(this,i)},init(i){return s.set(this,new gt(this,{context:r,initialValue:i})),i}};{t.constructor.addInitializer((n=>{s.set(n,new gt(n,{context:r}))}));const i=Object.getOwnPropertyDescriptor(t,e);let o;if(i===void 0){const n=new WeakMap;o={get(){return n.get(this)},set(a){s.get(this).setValue(a),n.set(this,a)},configurable:!0,enumerable:!0}}else{const n=i.set;o={...i,set(a){s.get(this).setValue(a),n==null||n.call(this,a)}}}return void Object.defineProperty(t,e,o)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xt({context:r,subscribe:t}){return(e,s)=>{typeof s=="object"?s.addInitializer((function(){new ft(this,{context:r,callback:i=>{e.set.call(this,i)},subscribe:t})})):e.constructor.addInitializer((i=>{new ft(i,{context:r,callback:o=>{i[s]=o},subscribe:t})}))}}const Mt=Symbol("auth-context"),Xt=Symbol("telemetry-context"),Ct=Symbol("audio-context");class te{constructor(){this.store=new Map}getItem(t){return this.store.has(t)?this.store.get(t):null}setItem(t,e){this.store.set(t,String(e))}removeItem(t){this.store.delete(t)}clear(){this.store.clear()}}function Pt(){try{if(typeof sessionStorage<"u"){const r="__storage_test__";return sessionStorage.setItem(r,"1"),sessionStorage.removeItem(r),sessionStorage}}catch{}return new te}const S=class S extends EventTarget{constructor(t=Pt()){super(),this.session=null,this.hosts=new Set,this.storage=t,this.currentTabId=`tab_${Math.random().toString(36).slice(2,9)}_${Date.now()}`,this.hydrateFromStorage()}addHost(t){this.hosts.add(t),t.addController({hostDisconnected:()=>{this.hosts.delete(t)}}),t.requestUpdate()}removeHost(t){this.hosts.delete(t)}notifyHosts(){for(const t of this.hosts)t.requestUpdate()}hydrateFromStorage(){try{const t=this.storage.getItem(S.STORAGE_KEY);if(t){const e=JSON.parse(t);e&&typeof e.username=="string"&&(this.session={username:e.username,authenticatedAt:e.authenticatedAt||Date.now(),tabId:this.currentTabId})}}catch{this.session=null}}get isAuthenticated(){return this.session!==null}get currentUser(){var t;return((t=this.session)==null?void 0:t.username)??null}get activeSession(){return this.session?{...this.session}:null}login(t,e){const s=t.trim();if(!s)return{success:!1,error:"Username is required."};if(e!=="joshua")return{success:!1,error:'Invalid password. (Hint: password is "joshua")'};this.session={username:s,authenticatedAt:Date.now(),tabId:this.currentTabId};try{this.storage.setItem(S.STORAGE_KEY,JSON.stringify(this.session))}catch{}return this.dispatchEvent(new CustomEvent("auth-changed",{detail:{isAuthenticated:!0,user:s}})),this.notifyHosts(),{success:!0}}logout(){this.session=null;try{this.storage.removeItem(S.STORAGE_KEY)}catch{}this.dispatchEvent(new CustomEvent("auth-changed",{detail:{isAuthenticated:!1,user:null}})),this.notifyHosts()}};S.STORAGE_KEY="__APP_AUTH_SESSION__";let Y=S;const f=class f extends EventTarget{constructor(){super(),this.nodes=[],this.activeIncident=null,this.timer=null,this.hosts=new Set,this.initDefaultNodes(),this.startSimulation()}addHost(t){this.hosts.add(t),t.addController({hostDisconnected:()=>{this.hosts.delete(t)}}),t.requestUpdate()}removeHost(t){this.hosts.delete(t)}notifyHosts(){for(const t of this.hosts)t.requestUpdate()}initDefaultNodes(){this.nodes=[{id:"node-alpha",name:"US-East Core Alpha",region:"us-east-1",status:"healthy",cpuLoad:24,memoryUsage:45,latencyMs:14,lastUpdated:Date.now(),isCordoned:!1},{id:"node-beta",name:"EU-Central Edge Beta",region:"eu-west-1",status:"healthy",cpuLoad:38,memoryUsage:62,latencyMs:32,lastUpdated:Date.now(),isCordoned:!1},{id:"node-gamma",name:"AP-Tokyo Gateway Gamma",region:"ap-northeast-1",status:"warning",cpuLoad:78,memoryUsage:88,latencyMs:142,lastUpdated:Date.now(),isCordoned:!1},{id:"node-delta",name:"US-West Replica Delta",region:"us-west-2",status:"healthy",cpuLoad:19,memoryUsage:33,latencyMs:22,lastUpdated:Date.now(),isCordoned:!1}]}getNodes(){return[...this.nodes]}getNodeById(t){return this.nodes.find(e=>e.id===t)}getIncident(){return this.activeIncident}triggerMockIncident(t="node-gamma"){this.activeIncident={id:`inc-${Date.now().toString(36)}`,severity:"high",message:`Memory threshold exceeded on [${t}] (>85% sustained for 300s). Potential threadpool exhaustion.`,timestamp:Date.now(),nodeId:t},this.dispatchEvent(new CustomEvent("incident-raised",{detail:this.activeIncident})),this.notifyHosts()}resolveIncident(){this.activeIncident&&(this.activeIncident=null,this.dispatchEvent(new CustomEvent("incident-resolved")),this.notifyHosts())}toggleCordon(t){const e=this.nodes.find(i=>i.id===t);if(!e)return;if(!e.isCordoned){const i=Math.max(0,e.cpuLoad-f.IDLE_CPU),o=Math.max(0,e.memoryUsage-f.IDLE_MEM),n=this.nodes.filter(l=>l.id!==t&&!l.isCordoned),a=n.length>0?Math.round(i/n.length):0,h=n.length>0?Math.round(o/n.length):0;this.nodes=this.nodes.map(l=>{if(l.id===t)return{...l,isCordoned:!0,cpuLoad:f.IDLE_CPU,memoryUsage:f.IDLE_MEM,status:"healthy",latencyMs:0,lastUpdated:Date.now()};if(!l.isCordoned){const d=Math.min(99,l.cpuLoad+a),c=Math.min(99,l.memoryUsage+h),p=d>85||c>90?"critical":d>70?"warning":"healthy";return{...l,cpuLoad:d,memoryUsage:c,status:p,latencyMs:Math.round(l.latencyMs*1.25),lastUpdated:Date.now()}}return l})}else{const i=this.nodes.filter(a=>!a.isCordoned),o=i.length>0?Math.round(i.reduce((a,h)=>a+h.cpuLoad,0)/(i.length+1)):35,n=i.length>0?Math.round(i.reduce((a,h)=>a+h.memoryUsage,0)/(i.length+1)):50;this.nodes=this.nodes.map(a=>{if(a.id===t){const h=o>85||n>90?"critical":o>70?"warning":"healthy";return{...a,isCordoned:!1,cpuLoad:o,memoryUsage:n,status:h,latencyMs:25,lastUpdated:Date.now()}}if(!a.isCordoned){const h=Math.max(15,Math.round(a.cpuLoad*.8)),l=Math.max(20,Math.round(a.memoryUsage*.85)),d=h>85||l>90?"critical":h>70?"warning":"healthy";return{...a,cpuLoad:h,memoryUsage:l,status:d,latencyMs:Math.max(10,Math.round(a.latencyMs*.8)),lastUpdated:Date.now()}}return a})}this.dispatchEvent(new CustomEvent("telemetry-tick",{detail:{nodes:this.nodes}})),this.notifyHosts()}startSimulation(){typeof window>"u"||(this.timer=window.setInterval(()=>{const t=this.nodes.filter(s=>!s.isCordoned).length,e=t===0?1:Math.max(1,4/t);this.nodes=this.nodes.map(s=>{if(s.isCordoned){const c=Math.max(4,Math.min(12,Math.round(s.cpuLoad+(Math.random()-.5)*1.5))),p=Math.max(15,Math.min(25,Math.round(s.memoryUsage+(Math.random()-.5)*1)));return{...s,cpuLoad:c,memoryUsage:p,status:"healthy",latencyMs:0,lastUpdated:Date.now()}}const i=(Math.random()-.48)*4,o=(Math.random()-.48)*2,n=Math.round(20*e),a=Math.round(30*e),h=Math.max(n,Math.min(99,Math.round(s.cpuLoad+i))),l=Math.max(a,Math.min(99,Math.round(s.memoryUsage+o))),d=h>85||l>90?"critical":h>70?"warning":"healthy";return{...s,cpuLoad:h,memoryUsage:l,status:d,latencyMs:Math.max(5,Math.round(s.latencyMs+(Math.random()-.5)*6)),lastUpdated:Date.now()}}),this.dispatchEvent(new CustomEvent("telemetry-tick",{detail:{nodes:this.nodes}})),this.notifyHosts()},2500))}destroy(){this.timer!==null&&(clearInterval(this.timer),this.timer=null),this.hosts.clear()}};f.IDLE_CPU=8,f.IDLE_MEM=20;let J=f;class ee{constructor(){this.ctx=null,this.masterGain=null,this.droneOsc1=null,this.droneOsc2=null,this.alertInterval=null,this.alertState="healthy",this.isRunning=!1}init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.2,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination))}async start(){if(this.init(),!this.ctx||!this.masterGain||(this.ctx.state==="suspended"&&await this.ctx.resume(),this.isRunning))return;this.isRunning=!0,this.droneOsc1=this.ctx.createOscillator(),this.droneOsc1.type="sine",this.droneOsc1.frequency.setValueAtTime(55,this.ctx.currentTime);const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(140,this.ctx.currentTime),this.droneOsc2=this.ctx.createOscillator(),this.droneOsc2.type="triangle",this.droneOsc2.frequency.setValueAtTime(55.4,this.ctx.currentTime);const e=this.ctx.createGain();e.gain.setValueAtTime(.12,this.ctx.currentTime),this.droneOsc1.connect(t),this.droneOsc2.connect(t),t.connect(e),e.connect(this.masterGain),this.droneOsc1.start(),this.droneOsc2.start(),this.restartAlertLoop()}setAlertState(t){this.alertState!==t&&(this.alertState=t,this.isRunning&&this.restartAlertLoop())}get currentAlertState(){return this.alertState}restartAlertLoop(){if(this.alertInterval!==null&&(clearInterval(this.alertInterval),this.alertInterval=null),this.alertState==="healthy"||!this.isRunning)return;const t=this.alertState,e=t==="critical"?500:2e3;this.playAlertBeep(t),this.alertInterval=window.setInterval(()=>{this.playAlertBeep(t)},e)}playAlertBeep(t){if(!this.ctx||!this.masterGain||!this.isRunning)return;const e=this.ctx.createOscillator(),s=this.ctx.createGain(),i=t==="critical"?1174.66:784,o=t==="critical"?.12:.18,n=t==="critical"?.09:.06;e.type=t==="critical"?"square":"sine",e.frequency.setValueAtTime(i,this.ctx.currentTime),s.gain.setValueAtTime(n,this.ctx.currentTime),s.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+o),e.connect(s),s.connect(this.masterGain),e.start(),e.stop(this.ctx.currentTime+o)}setVolume(t){if(!this.masterGain||!this.ctx)return;const e=Math.max(0,Math.min(1,t));this.masterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.05)}stop(){var t,e,s,i;if(this.isRunning){this.isRunning=!1,this.alertInterval!==null&&(clearInterval(this.alertInterval),this.alertInterval=null);try{(t=this.droneOsc1)==null||t.stop(),(e=this.droneOsc2)==null||e.stop(),(s=this.droneOsc1)==null||s.disconnect(),(i=this.droneOsc2)==null||i.disconnect()}catch{}}}get running(){return this.isRunning}}const L=class L extends EventTarget{constructor(t=Pt()){super(),this.isEnabled=!0,this.isMuted=!1,this.volumeLevel=.3,this.hosts=new Set,this.storage=t,this.engine=new ee,this.hydrateFromStorage()}addHost(t){this.hosts.add(t),t.addController({hostDisconnected:()=>{this.hosts.delete(t)}}),t.requestUpdate()}removeHost(t){this.hosts.delete(t)}notifyHosts(){for(const t of this.hosts)t.requestUpdate()}hydrateFromStorage(){try{const t=this.storage.getItem(L.STORAGE_KEY);if(t){const e=JSON.parse(t);typeof e.enabled=="boolean"&&(this.isEnabled=e.enabled),typeof e.muted=="boolean"&&(this.isMuted=e.muted),typeof e.volume=="number"&&(this.volumeLevel=Math.max(0,Math.min(1,e.volume)))}}catch{}}saveToStorage(){try{const t={enabled:this.isEnabled,muted:this.isMuted,volume:this.volumeLevel};this.storage.setItem(L.STORAGE_KEY,JSON.stringify(t))}catch{}}get isPlaying(){return this.engine.running}get isAudioEnabled(){return this.isEnabled}get muted(){return this.isMuted}get volume(){return this.volumeLevel}async start(){this.isEnabled=!0,this.saveToStorage(),this.engine.running||(await this.engine.start(),this.engine.setVolume(this.isMuted?0:this.volumeLevel)),this.notifyState()}stop(){this.isEnabled=!1,this.saveToStorage(),this.engine.running&&this.engine.stop(),this.notifyState()}async togglePlay(){this.engine.running?this.stop():await this.start()}toggleMute(){this.isMuted=!this.isMuted,this.engine.setVolume(this.isMuted?0:this.volumeLevel),this.saveToStorage(),this.notifyState()}setAlertState(t){this.engine.setAlertState(t),this.notifyState()}get alertState(){return this.engine.currentAlertState}setVolume(t){this.volumeLevel=Math.max(0,Math.min(1,t)),this.isMuted||this.engine.setVolume(this.volumeLevel),this.saveToStorage(),this.notifyState()}notifyState(){this.dispatchEvent(new CustomEvent("audio-changed",{detail:{isPlaying:this.engine.running,muted:this.isMuted,volume:this.volumeLevel,alertState:this.engine.currentAlertState}})),this.notifyHosts()}};L.STORAGE_KEY="__APP_AUDIO_PREFS__";let Z=L;class se extends EventTarget{constructor(){super(),this.guards=[],this.attachLinkInterceptor(),window.addEventListener("popstate",t=>this.handlePopState(t))}addGuard(t){this.guards.push(t)}attachLinkInterceptor(){document.addEventListener("click",t=>{const s=(t.composedPath?t.composedPath():[t.target]).find(o=>o instanceof HTMLElement&&o.tagName==="A");if(!s)return;const i=s.getAttribute("href");!i||i.startsWith("http://")||i.startsWith("https://")||i.startsWith("#")||s.target==="_blank"||(t.preventDefault(),this.navigate(i))})}async navigate(t,e=!0){let s=t;for(const o of this.guards){const n=o(s);if(n===!1)return;typeof n=="string"&&(s=n)}this.dispatchEvent(new CustomEvent("route-changing",{detail:{targetUrl:s}}));const i=document;if(typeof i.startViewTransition=="function")try{const o=i.startViewTransition(async()=>{await this.loadView(s)});o&&"finished"in o&&o.finished?await o.finished:o instanceof Promise&&await o}catch{await this.loadView(s)}else await this.loadView(s);e&&window.history.pushState({url:s},"",s),this.dispatchEvent(new CustomEvent("route-changed",{detail:{currentUrl:s}}))}async loadView(t){try{const e=await fetch(t);if(!e.ok)throw new Error(`HTTP ${e.status}`);const s=await e.text(),o=new DOMParser().parseFromString(s,"text/html");document.title=o.title;const n=o.querySelector(".main-content"),a=document.querySelector(".main-content");n&&a&&(a.innerHTML=n.innerHTML);const h=o.querySelectorAll('script[type="module"]');for(const l of h){const d=l.getAttribute("src");d&&import(new URL(d,window.location.href).href).catch(()=>{})}}catch{window.location.href=t}}handlePopState(t){const e=window.location.pathname.split("/").pop()||"index.html";this.navigate(e,!1)}}var ie=Object.defineProperty,re=Object.getOwnPropertyDescriptor,it=(r,t,e,s)=>{for(var i=s>1?void 0:s?re(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&ie(t,e,i),i};let R=class extends A{connectedCallback(){var r,t;super.connectedCallback(),!this.authStore&&typeof window<"u"&&((r=window.__AETHER_SHELL__)!=null&&r.authStore)&&(this.authStore=window.__AETHER_SHELL__.authStore,this.authStore.addHost(this)),!this.audioStore&&typeof window<"u"&&((t=window.__AETHER_SHELL__)!=null&&t.audioStore)&&(this.audioStore=window.__AETHER_SHELL__.audioStore,this.audioStore.addHost(this))}willUpdate(r){var t,e,s,i;r.has("authStore")&&((t=r.get("authStore"))==null||t.removeHost(this),(e=this.authStore)==null||e.addHost(this)),r.has("audioStore")&&((s=r.get("audioStore"))==null||s.removeHost(this),(i=this.audioStore)==null||i.addHost(this))}async toggleAudio(){var r;await((r=this.audioStore)==null?void 0:r.togglePlay())}toggleMute(){var r;(r=this.audioStore)==null||r.toggleMute()}handleVolume(r){var e;const t=parseFloat(r.target.value);(e=this.audioStore)==null||e.setVolume(t)}handleLogout(){var r;(r=this.authStore)==null||r.logout(),this.dispatchEvent(new CustomEvent("request-navigation",{bubbles:!0,composed:!0,detail:{url:"index.html"}}))}render(){var r,t,e,s,i,o,n,a,h,l,d,c,p,m;return V`
      <div class="header-inner">
        <a href="index.html" class="brand" aria-label="AetherWatch Home">
          <span class="brand-icon">⬡</span>
          <span>AetherWatch</span>
        </a>

        <nav aria-label="Main Navigation">
          <a href="index.html">Gateway</a>
          <a href="showcase.html">Standards Showcase</a>
          ${(r=this.authStore)!=null&&r.currentUser?V`
            <a href="dashboard.html">Telemetry</a>
            <a href="dashboard-nodes.html">Nodes</a>
            <button
              type="button"
              class="btn-nav-terminate"
              @click=${this.handleLogout}
              aria-label="Terminate active operator session"
              title="Terminate active session"
            >
              Terminate Session
            </button>
          `:null}
        </nav>

        <div class="controls-group">
          <!-- Web Audio Soundscape Controls -->
          <div class="audio-controls" role="toolbar" aria-label="Soundscape Controls">
            <button
              class="btn-ctrl ${(t=this.audioStore)!=null&&t.isPlaying?"active":""}"
              @click=${this.toggleAudio}
              aria-label="${(e=this.audioStore)!=null&&e.isPlaying?"Stop ambient audio":"Start ambient audio"}"
              title="${(s=this.audioStore)!=null&&s.isPlaying?"Stop ambient audio":"Start ambient audio"}"
            >
              ${(i=this.audioStore)!=null&&i.isPlaying?"■ Audio On":"▶ Audio Off"}
            </button>

            <button
              class="btn-ctrl ${(o=this.audioStore)!=null&&o.muted?"muted":""}"
              @click=${this.toggleMute}
              ?disabled=${!((n=this.audioStore)!=null&&n.isPlaying)}
              aria-label="${(a=this.audioStore)!=null&&a.muted?"Unmute audio":"Mute audio"}"
              title="${(h=this.audioStore)!=null&&h.muted?"Unmute audio":"Mute audio"}"
            >
              ${(l=this.audioStore)!=null&&l.muted?"🔇 Muted":"🔊 Sound"}
            </button>

            <label for="soundscape-vol" class="visually-hidden">Volume</label>
            <input
              id="soundscape-vol"
              type="range"
              min="0"
              max="1"
              step="0.05"
              class="volume-slider"
              .value=${((d=this.audioStore)==null?void 0:d.volume)??.3}
              @input=${this.handleVolume}
              ?disabled=${!((c=this.audioStore)!=null&&c.isPlaying)}
              aria-label="Soundscape Volume"
            />
          </div>

          ${(p=this.authStore)!=null&&p.currentUser?V`
            <div class="user-pill">
              <span>👤 ${(m=this.authStore)==null?void 0:m.currentUser}</span>
              <button class="btn-logout" @click=${this.handleLogout}>Sign Out</button>
            </div>
          `:null}
        </div>
      </div>
    `}};R.styles=bt`
    *, *::before, *::after {
      box-sizing: border-box;
    }

    :host {
      display: block;
      box-sizing: border-box;
      background: var(--color-bg-surface, #111726);
      border-bottom: 1px solid var(--color-border, #24304d);
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      clip-path: inset(50%);
      white-space: nowrap;
      border: 0;
    }

    .header-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0.85rem 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-weight: 700;
      font-size: 1.15rem;
      color: var(--color-text-main, #f8fafc);
      text-decoration: none;
    }

    .brand-icon {
      color: var(--color-primary, #38bdf8);
      font-size: 1.25rem;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }

    nav a {
      color: var(--color-text-muted, #94a3b8);
      font-size: 0.9rem;
      font-weight: 500;
      transition: color var(--transition-speed, 200ms);
    }

    nav a:hover {
      color: var(--color-primary, #38bdf8);
      text-decoration: none;
    }

    .controls-group {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .audio-controls {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--color-bg-base, #0a0d14);
      padding: 0.35rem 0.65rem;
      border-radius: var(--radius-md, 8px);
      border: 1px solid var(--color-border, #24304d);
    }

    .btn-ctrl {
      background: transparent;
      border: none;
      color: var(--color-text-muted, #94a3b8);
      cursor: pointer;
      font-size: 0.85rem;
      padding: 0.2rem 0.4rem;
      border-radius: var(--radius-sm, 4px);
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    .btn-ctrl:hover {
      color: var(--color-text-main, #f8fafc);
    }

    .btn-ctrl.active {
      color: var(--color-primary, #38bdf8);
    }

    .btn-ctrl.muted {
      color: var(--color-danger, #f87171);
    }

    .volume-slider {
      width: 60px;
      height: 4px;
      accent-color: var(--color-primary, #38bdf8);
      cursor: pointer;
    }

    .user-pill {
      font-size: 0.8rem;
      color: var(--color-text-muted, #94a3b8);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .btn-nav-terminate {
      background: transparent;
      border: 1px solid var(--color-danger, #f87171);
      color: var(--color-danger, #f87171);
      border-radius: var(--radius-sm, 4px);
      padding: 0.25rem 0.6rem;
      font-size: 0.8rem;
      font-weight: 500;
      cursor: pointer;
      transition: background var(--transition-speed, 200ms), color var(--transition-speed, 200ms);
    }

    .btn-nav-terminate:hover {
      background: rgba(248, 113, 113, 0.15);
      color: var(--color-danger, #f87171);
    }

    .btn-logout {
      background: transparent;
      border: 1px solid var(--color-border, #24304d);
      color: var(--color-text-faint, #64748b);
      border-radius: var(--radius-sm, 4px);
      padding: 0.2rem 0.5rem;
      font-size: 0.75rem;
      cursor: pointer;
    }

    .btn-logout:hover {
      color: var(--color-danger, #f87171);
      border-color: var(--color-danger, #f87171);
    }
  `;it([xt({context:Mt,subscribe:!0}),D({attribute:!1})],R.prototype,"authStore",2);it([xt({context:Ct,subscribe:!0}),D({attribute:!1})],R.prototype,"audioStore",2);R=it([At("app-header")],R);var oe=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,G=(r,t,e,s)=>{for(var i=s>1?void 0:s?ne(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&oe(t,e,i),i};typeof window<"u"&&(window.addEventListener("error",r=>{var t,e;if((t=r.message)!=null&&t.includes("Cannot read properties of undefined (reading 'startTime')")||r.error instanceof TypeError&&((e=r.error.message)!=null&&e.includes("'startTime'")))return r.preventDefault(),r.stopImmediatePropagation(),!0},!0),window.addEventListener("unhandledrejection",r=>{var t,e,s;((e=(t=r.reason)==null?void 0:t.message)!=null&&e.includes("Cannot read properties of undefined (reading 'startTime')")||r.reason instanceof TypeError&&((s=r.reason.message)!=null&&s.includes("'startTime'")))&&(r.preventDefault(),r.stopImmediatePropagation())},!0));let M=class extends A{constructor(){super(),window.__AETHER_SHELL__?(this.authStore=window.__AETHER_SHELL__.authStore,this.telemetryStore=window.__AETHER_SHELL__.telemetryStore,this.audioStore=window.__AETHER_SHELL__.audioStore,this.router=window.__AETHER_SHELL__.router):(this.authStore=new Y,this.telemetryStore=new J,this.audioStore=new Z,this.router=new se,this.router.addGuard(r=>{const t=r.split("?")[0].split("#")[0].split("/").pop()||"index.html";return(t==="dashboard.html"||t==="dashboard-nodes.html")&&!this.authStore.isAuthenticated?"index.html":!0}),window.__AETHER_SHELL__=this,window.__SHELL_BOOTED__=!0,this.telemetryStore.addEventListener("telemetry-tick",r=>{const t=r.detail.nodes;this.evaluateClusterAlarm(t)})),this.evaluateClusterAlarm(this.telemetryStore.getNodes())}evaluateClusterAlarm(r){const t=(r||[]).filter(e=>!e.isCordoned);t.some(e=>e.status==="critical")?this.audioStore.setAlertState("critical"):t.some(e=>e.status==="warning")?this.audioStore.setAlertState("warning"):this.audioStore.setAlertState("healthy")}connectedCallback(){super.connectedCallback(),this.evaluateClusterAlarm(this.telemetryStore.getNodes()),this.addEventListener("request-navigation",r=>{const t=r.detail.url;this.router.navigate(t)}),this.addEventListener("login-success",()=>{this.router.navigate("dashboard.html")}),this.authStore.addEventListener("auth-changed",()=>{this.verifyRouteProtection()}),this.verifyRouteProtection(),this.initAudioAutoplay()}initAudioAutoplay(){if(!this.audioStore.isAudioEnabled)return;this.audioStore.start().catch(()=>{});const r=()=>{this.audioStore.isAudioEnabled&&!this.audioStore.isPlaying&&this.audioStore.start().catch(()=>{}),window.removeEventListener("pointerdown",r),window.removeEventListener("keydown",r)};window.addEventListener("pointerdown",r,{once:!0,passive:!0}),window.addEventListener("keydown",r,{once:!0,passive:!0})}verifyRouteProtection(){const r=window.location.pathname.split("/").pop()||"index.html";(r==="dashboard.html"||r==="dashboard-nodes.html")&&!this.authStore.isAuthenticated&&this.router.navigate("index.html")}render(){return V`
      <div class="app-layout">
        <app-header></app-header>
        <slot></slot>
      </div>
    `}};M.styles=bt`
    :host {
      display: contents;
    }
  `;G([st({context:Mt}),D({attribute:!1})],M.prototype,"authStore",2);G([st({context:Xt}),D({attribute:!1})],M.prototype,"telemetryStore",2);G([st({context:Ct}),D({attribute:!1})],M.prototype,"audioStore",2);M=G([At("app-shell")],M);export{Mt as a,A as b,xt as c,V as d,At as e,bt as i,D as n,Xt as t};
