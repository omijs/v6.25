import{W as u,h as a,a as c}from"./index.2b48b3a4.js";var d=Object.defineProperty,m=Object.getOwnPropertyDescriptor,h=(n,s,r,t)=>{for(var e=t>1?void 0:t?m(s,r):s,i=n.length-1,o;i>=0;i--)(o=n[i])&&(e=(t?o(s,r,e):o(e))||e);return t&&e&&d(s,r,e),e};const v="code-demo-container";let l=class extends u{constructor(){super(...arguments),this.columnCount=2,this.onResize=()=>{this.columnCount=window.innerWidth<768?1:2,this.updateSelf()}}installed(){window.addEventListener("resize",this.onResize)}uninstall(){window.removeEventListener("resize",this.onResize)}render(n){return a("div",{class:n.class,style:Object.assign({columnCount:this.columnCount,columnGap:"1rem",padding:"1rem"},n.style)},a("slot",null))}};l.css=null;l=h([c(v)],l);
