import { tag, WeElement, h } from "omi";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var index = ":root,:root[theme-mode=light]{--omi-gray-color-1: #f3f3f3;--omi-gray-color-2: #eee;--omi-gray-color-3: #e7e7e7;--omi-gray-color-4: #dcdcdc;--omi-gray-color-5: #c5c5c5;--omi-gray-color-6: #a6a6a6;--omi-gray-color-7: #8b8b8b;--omi-gray-color-8: #777;--omi-gray-color-9: #5e5e5e;--omi-gray-color-10: #4b4b4b;--omi-gray-color-11: #383838;--omi-gray-color-12: #2c2c2c;--omi-gray-color-13: #242424;--omi-gray-color-14: #181818;--omi-font-white-1: rgba(255, 255, 255, 100%);--omi-font-white-2: rgba(255, 255, 255, 55%);--omi-font-white-3: rgba(255, 255, 255, 35%);--omi-font-white-4: rgba(255, 255, 255, 22%);--omi-font-gray-1: rgba(0, 0, 0, 90%);--omi-font-gray-2: rgba(0, 0, 0, 60%);--omi-font-gray-3: rgba(0, 0, 0, 40%);--omi-font-gray-4: rgba(0, 0, 0, 26%);--omi-font-gray-5: rgba(0, 0, 0, .45);--omi-font-gray-6: rgba(0, 0, 0, .7);--omi-icon-gray-3:rgba(0, 0, 0, .54);--omi-mask-active: rgba(0, 0, 0, 60%);--omi-mask-disabled: rgba(255, 255, 255, 60%);--omi-bg-color-page: var(--omi-gray-color-2);--omi-bg-color-page-dark: #fff;--omi-bg-color-container: #fff;--omi-bg-color-container-hover: var(--omi-gray-color-1);--omi-bg-color-container-active: var(--omi-gray-color-3);--omi-bg-color-container-select: #fff;--omi-bg-color-secondarycontainer: var(--omi-gray-color-1);--omi-bg-color-secondarycontainer-hover: var(--omi-gray-color-2);--omi-bg-color-secondarycontainer-active: var(--omi-gray-color-4);--omi-bg-color-component: var(--omi-gray-color-3);--omi-bg-color-component-hover: var(--omi-gray-color-4);--omi-bg-color-component-active: var(--omi-gray-color-6);--omi-bg-color-component-disabled: var(--omi-gray-color-2);--omi-bg-cascader-hover:#f1fff8;--omi-treenode-focus:#f5f7fa;--omi-bg-table-th:#fafafa;--omi-bg-color-specialcomponent: #fff;--omi-text-color-primary: var(--omi-font-gray-1);--omi-text-color-secondary: var(--omi-font-gray-2);--omi-text-color-placeholder: var(--omi-font-gray-3);--omi-text-color-disabled: var(--omi-font-gray-4);--omi-text-color-anti: #fff;--omi-text-color-gray:#606266;--omi-text-color-gray-5:var(--omi-font-gray-5);--omi-text-color-gray-6:var(--omi-font-gray-6);--omi-icon-color-primary: var(--omi-icon-gray-3);--omi-border-level-1-color: var(--omi-gray-color-3);--omi-component-stroke: var(--omi-gray-color-3);--omi-border-level-2-color: var(--omi-gray-color-4);--omi-component-border: var(--omi-gray-color-4)}:root[theme-mode=dark]{--omi-gray-color-1: #f3f3f3;--omi-gray-color-2: #eee;--omi-gray-color-3: #e7e7e7;--omi-gray-color-4: #dcdcdc;--omi-gray-color-5: #c5c5c5;--omi-gray-color-6: #a6a6a6;--omi-gray-color-7: #8b8b8b;--omi-gray-color-8: #777;--omi-gray-color-9: #5e5e5e;--omi-gray-color-10: #4b4b4b;--omi-gray-color-11: #383838;--omi-gray-color-12: #2c2c2c;--omi-gray-color-13: #242424;--omi-gray-color-14: #181818;--omi-font-white-1: rgba(255, 255, 255, 90%);--omi-font-white-2: rgba(255, 255, 255, 55%);--omi-font-white-3: rgba(255, 255, 255, 35%);--omi-font-white-4: rgba(255, 255, 255, 22%);--omi-font-gray-1: rgba(0, 0, 0, 90%);--omi-font-gray-2: rgba(0, 0, 0, 60%);--omi-font-gray-3: rgba(0, 0, 0, 40%);--omi-font-gray-4: rgba(0, 0, 0, 26%);--omi-bg-color-page: var(--omi-gray-color-14);--omi-bg-color-page-dark: var(--omi-gray-color-14);--omi-bg-color-container: var(--omi-gray-color-13);--omi-bg-color-container-hover: var(--omi-gray-color-12);--omi-bg-color-container-active: var(--omi-gray-color-10);--omi-bg-color-container-select: var(--omi-gray-color-9);--omi-bg-color-secondarycontainer: var(--omi-gray-color-12);--omi-bg-color-secondarycontainer-hover: var(--omi-gray-color-11);--omi-bg-color-secondarycontainer-active: var(--omi-gray-color-9);--omi-bg-color-component: var(--omi-gray-color-11);--omi-bg-color-component-hover: var(--omi-gray-color-10);--omi-bg-color-component-active: var(--omi-gray-color-9);--omi-bg-color-component-disabled: var(--omi-gray-color-12);--omi-bg-cascader-hover:var(--omi-gray-color-11);--omi-treenode-focus:var(--omi-gray-color-11);--omi-bg-table-th:var(--omi-gray-color-11);--omi-bg-color-specialcomponent: transparent;--omi-text-color-primary: var(--omi-font-white-1);--omi-text-color-secondary: var(--omi-font-white-2);--omi-text-color-placeholder: var(--omi-font-white-3);--omi-text-color-disabled: var(--omi-font-white-4);--omi-text-color-anti: #fff;--omi-text-color-gray:--omi-gray-color-7;--omi-text-color-gray-5:var(--omi-font-white-3);--omi-text-color-gray-6:var(--omi-font-white-2);--omi-icon-color-primary: var(--omi-font-white-1);--omi-border-level-1-color: var(--omi-gray-color-11);--omi-component-stroke: var(--omi-gray-color-11);--omi-border-level-2-color: var(--omi-gray-color-9);--omi-component-border: var(--omi-gray-color-9)}:host{display:inline-block}.o-root{display:inline-block;line-height:1;color:#07c160}.o-static{transition:transform .3s cubic-bezier(.4,0,.2,1) 0ms}.o-indeterminate{animation:o-rotate 1.4s linear infinite}.o-circle{stroke:currentColor}.o-circleStatic{transition:stroke-dashoffset .3s cubic-bezier(.4,0,.2,1) 0ms}.o-circleIndeterminate{animation:mui-progress-circular-dash 1.4s ease-in-out infinite;animation-name:o-keyframes-mui-progress-circular-dash;stroke-dasharray:80px,200px;stroke-dashoffset:0px}@-webkit-keyframes o-rotate{to{transform:rotate(360deg)}}@-webkit-keyframes o-keyframes-mui-progress-circular-dash{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px}to{stroke-dasharray:100px,200px;stroke-dashoffset:-125px}}.o-circleDisableShrink{animation:none}\n";
var css = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index
}, Symbol.toStringTag, { value: "Module" }));
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let Loading = class extends WeElement {
  render(props) {
    return /* @__PURE__ */ h("div", {
      class: "o-root o-colorPrimary o-indeterminate",
      role: "progressbar",
      style: `width: ${props.size}px; height: ${props.size}px;${props.color ? `color:${props.color};` : ""}`
    }, /* @__PURE__ */ h("svg", {
      class: "o-svg",
      viewBox: "22 22 44 44"
    }, /* @__PURE__ */ h("circle", {
      class: "o-circle o-circleIndeterminate",
      cx: "44",
      cy: "44",
      r: "20.2",
      fill: "none",
      "stroke-width": "3.6"
    })));
  }
};
Loading.css = css;
Loading.defaultProps = {
  size: 40
};
Loading.propTypes = {
  size: Number,
  color: String
};
Loading = __decorateClass([
  tag("o-loading")
], Loading);
