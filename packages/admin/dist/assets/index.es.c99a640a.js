import{W as m,h as n,e as b,a as g}from"./index.2b48b3a4.js";const d=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const t of e.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function i(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerpolicy&&(e.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?e.credentials="include":o.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(o){if(o.ep)return;o.ep=!0;const e=i(o);fetch(o.href,e)}};d();var s=`:root,:root[theme-mode=light]{--omi-gray-color-1: #f3f3f3;--omi-gray-color-2: #eee;--omi-gray-color-3: #e7e7e7;--omi-gray-color-4: #dcdcdc;--omi-gray-color-5: #c5c5c5;--omi-gray-color-6: #a6a6a6;--omi-gray-color-7: #8b8b8b;--omi-gray-color-8: #777;--omi-gray-color-9: #5e5e5e;--omi-gray-color-10: #4b4b4b;--omi-gray-color-11: #383838;--omi-gray-color-12: #2c2c2c;--omi-gray-color-13: #242424;--omi-gray-color-14: #181818;--omi-font-white-1: rgba(255, 255, 255, 100%);--omi-font-white-2: rgba(255, 255, 255, 55%);--omi-font-white-3: rgba(255, 255, 255, 35%);--omi-font-white-4: rgba(255, 255, 255, 22%);--omi-font-gray-1: rgba(0, 0, 0, 90%);--omi-font-gray-2: rgba(0, 0, 0, 60%);--omi-font-gray-3: rgba(0, 0, 0, 40%);--omi-font-gray-4: rgba(0, 0, 0, 26%);--omi-font-gray-5: rgba(0, 0, 0, .45);--omi-font-gray-6: rgba(0, 0, 0, .7);--omi-icon-gray-3:rgba(0, 0, 0, .54);--omi-mask-active: rgba(0, 0, 0, 60%);--omi-mask-disabled: rgba(255, 255, 255, 60%);--omi-bg-color-page: var(--omi-gray-color-2);--omi-bg-color-page-dark: #fff;--omi-bg-color-container: #fff;--omi-bg-color-container-hover: var(--omi-gray-color-1);--omi-bg-color-container-active: var(--omi-gray-color-3);--omi-bg-color-container-select: #fff;--omi-bg-color-secondarycontainer: var(--omi-gray-color-1);--omi-bg-color-secondarycontainer-hover: var(--omi-gray-color-2);--omi-bg-color-secondarycontainer-active: var(--omi-gray-color-4);--omi-bg-color-component: var(--omi-gray-color-3);--omi-bg-color-component-hover: var(--omi-gray-color-4);--omi-bg-color-component-active: var(--omi-gray-color-6);--omi-bg-color-component-disabled: var(--omi-gray-color-2);--omi-bg-cascader-hover:#f1fff8;--omi-bg-color-specialcomponent: #fff;--omi-text-color-primary: var(--omi-font-gray-1);--omi-text-color-secondary: var(--omi-font-gray-2);--omi-text-color-placeholder: var(--omi-font-gray-3);--omi-text-color-disabled: var(--omi-font-gray-4);--omi-text-color-anti: #fff;--omi-text-color-brand: var(--omi-brand-color-8);--omi-text-color-link: var(--omi-brand-color-8);--omi-text-color-gray:#606266;--omi-text-color-gray-5:var(--omi-font-gray-5);--omi-text-color-gray-6:var(--omi-font-gray-6);--omi-icon-color-primary: var(--omi-icon-gray-3);--omi-border-level-1-color: var(--omi-gray-color-3);--omi-component-stroke: var(--omi-gray-color-3);--omi-border-level-2-color: var(--omi-gray-color-4);--omi-component-border: var(--omi-gray-color-4)}:root[theme-mode=dark]{--omi-gray-color-1: #f3f3f3;--omi-gray-color-2: #eee;--omi-gray-color-3: #e7e7e7;--omi-gray-color-4: #dcdcdc;--omi-gray-color-5: #c5c5c5;--omi-gray-color-6: #a6a6a6;--omi-gray-color-7: #8b8b8b;--omi-gray-color-8: #777;--omi-gray-color-9: #5e5e5e;--omi-gray-color-10: #4b4b4b;--omi-gray-color-11: #383838;--omi-gray-color-12: #2c2c2c;--omi-gray-color-13: #242424;--omi-gray-color-14: #181818;--omi-font-white-1: rgba(255, 255, 255, 90%);--omi-font-white-2: rgba(255, 255, 255, 55%);--omi-font-white-3: rgba(255, 255, 255, 35%);--omi-font-white-4: rgba(255, 255, 255, 22%);--omi-font-gray-1: rgba(0, 0, 0, 90%);--omi-font-gray-2: rgba(0, 0, 0, 60%);--omi-font-gray-3: rgba(0, 0, 0, 40%);--omi-font-gray-4: rgba(0, 0, 0, 26%);--omi-bg-color-page: var(--omi-gray-color-14);--omi-bg-color-page-dark: var(--omi-gray-color-14);--omi-bg-color-container: var(--omi-gray-color-13);--omi-bg-color-container-hover: var(--omi-gray-color-12);--omi-bg-color-container-active: var(--omi-gray-color-10);--omi-bg-color-container-select: var(--omi-gray-color-9);--omi-bg-color-secondarycontainer: var(--omi-gray-color-12);--omi-bg-color-secondarycontainer-hover: var(--omi-gray-color-11);--omi-bg-color-secondarycontainer-active: var(--omi-gray-color-9);--omi-bg-color-component: var(--omi-gray-color-11);--omi-bg-color-component-hover: var(--omi-gray-color-10);--omi-bg-color-component-active: var(--omi-gray-color-9);--omi-bg-color-component-disabled: var(--omi-gray-color-12);--omi-bg-cascader-hover:var(--omi-gray-color-11);--omi-bg-color-specialcomponent: transparent;--omi-text-color-primary: var(--omi-font-white-1);--omi-text-color-secondary: var(--omi-font-white-2);--omi-text-color-placeholder: var(--omi-font-white-3);--omi-text-color-disabled: var(--omi-font-white-4);--omi-text-color-anti: #fff;--omi-text-color-gray:--omi-gray-color-7;--omi-text-color-gray-5:var(--omi-font-white-3);--omi-text-color-gray-6:var(--omi-font-white-2);--omi-icon-color-primary: var(--omi-font-white-1);--omi-border-level-1-color: var(--omi-gray-color-11);--omi-component-stroke: var(--omi-gray-color-11);--omi-border-level-2-color: var(--omi-gray-color-9);--omi-component-border: var(--omi-gray-color-9)}:host{display:inline-block}*{box-sizing:border-box}.o-checkbox{position:relative;font-size:14px;line-height:14px;height:14px;white-space:nowrap}.o-checkbox:hover{cursor:pointer}.o-checkbox__native-control:enabled:checked~.o-checkbox__background,.o-checkbox__native-control:enabled:indeterminate~.o-checkbox__background{border-color:#07c160;border-color:var(--o-primary, #07c160);background-color:#07c160;background-color:var(--o-primary, #07c160);opacity:1}.o-checkbox__indeterminate .o-checkbox__checkmark{opacity:0}.o-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:1;transition:opacity .18s 0ms cubic-bezier(.4,0,.6,1);color:#fff}.o-checkbox__checkmark-path{transition:stroke-dashoffset .18s 0ms cubic-bezier(.4,0,.6,1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.78334;stroke-dasharray:29.78334}.o-checkbox__native-control:checked~.o-checkbox__background .o-checkbox__checkmark-path,.o-checkbox__native-control:indeterminate~.o-checkbox__background .o-checkbox__checkmark-path{stroke-dashoffset:0}.o-checkbox__background{position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:45%;height:45%;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(.4,0,.6,1),border-color 90ms 0ms cubic-bezier(.4,0,.6,1)}.o-checkbox__background,.o-checkbox__label{display:inline-block;height:14px;vertical-align:middle}.o-checkbox__background{width:14px}.o-checkbox__label{margin-left:10px}.o-checkbox__native-control:indeterminate~.o-checkbox__background .o-checkbox__mixedmark{transform:scaleX(1) rotate(0);opacity:1}.o-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0);border:1px solid white;top:50%;position:relative;margin-top:-1px;opacity:0;transition:opacity 90ms 0ms cubic-bezier(.4,0,.6,1),transform 90ms 0ms cubic-bezier(.4,0,.6,1)}.o-checkbox__native-control{appearance:none;-webkit-appearance:none;position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;opacity:0;cursor:inherit}.o-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.o-checkbox__background{background-color:transparent;border:1px solid rgba(0,0,0,.54);color:#fff}.o-checkbox__native-control:disabled:checked~.o-checkbox__background,.o-checkbox__native-control:disabled:indeterminate~.o-checkbox__background{border-color:#07c160;border-color:var(--o-primary, #07c160);background-color:#07c160;background-color:var(--o-primary, #07c160);opacity:.5}.o-checkbox__native-control:disabled:not(:checked):not(:indeterminate)~.o-checkbox__background{background-color:transparent;border:1px solid var(--omi-border-level-2-color);color:#fff}.o-checkbox__disabled .o-checkbox__label{color:#888}.o-checkbox__disabled:hover{cursor:not-allowed}
`,h=Object.defineProperty,y=Object.getOwnPropertyDescriptor,f=(r,c,i,a)=>{for(var o=a>1?void 0:a?y(c,i):c,e=r.length-1,t;e>=0;e--)(t=r[e])&&(o=(a?t(c,i,o):t(o))||o);return a&&o&&h(c,i,o),o};let l=class extends m{constructor(){super(...arguments),this.onChange=r=>{this.props.disabled||(this.props.indeterminate?(this.props.checked=!0,this.props.indeterminate=!1,this.updateProps({checked:!0,indeterminate:!1})):this.updateProps({checked:!this.props.checked}),this.fire("change",r.currentTarget.checked))}}render(r){return n("div",{...b(r,"o-checkbox",{"o-checkbox__disabled":r.disabled,"o-checkbox__indeterminate":r.indeterminate})},n("input",{type:"checkbox",disabled:r.disabled,onChange:this.onChange,...k(r,["checked","value","indeterminate"]),class:"o-checkbox__native-control",id:"checkbox"}),n("div",{class:"o-checkbox__background"},n("svg",{class:"o-checkbox__checkmark",viewBox:"0 0 24 24"},n("path",{class:"o-checkbox__checkmark-path",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),n("div",{class:"o-checkbox__mixedmark"})),r.label&&n("label",{class:"o-checkbox__label",for:"checkbox"},r.label))}};l.css=s;l.propTypes={label:String,disabled:Boolean,indeterminate:Boolean,checked:Boolean,value:String};l=f([g("o-checkbox")],l);function k(r,c){if(typeof c=="string"){if(r.hasOwnProperty(c))return{[c]:r[c]}}else{const i={};return c.forEach(a=>{r.hasOwnProperty(a)&&(i[a]=r[a])}),i}}
