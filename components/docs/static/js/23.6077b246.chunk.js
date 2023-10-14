webpackJsonp([23],{100:function(n,t){n.exports="## Omiu \u662f\u4ec0\u4e48\uff1f\n\nOmiu \u662f\u57fa\u4e8e [Omi](https://github.com/Tencent/omi) \u5f00\u53d1\u7684\u8de8\u6846\u67b6 UI \u7ec4\u4ef6\u5e93\uff0c\u8f93\u51fa\u6807\u51c6 Web Components \u7684 Custom Elements\uff0c\u4efb\u610f\u7ec4\u4ef6\u53ef\u4ee5\u540c\u65f6\u5728 React\u3001Vue\u3001Preact\u3001Omi \u6216\u8005\u539f\u751f JS \u7b49\u4efb\u610f\u6846\u67b6\u6216\u65e0\u6846\u67b6\u4e2d\u4f7f\u7528\uff0c\u975e\u5e38\u65b9\u4fbf\u3002\u603b\u4f53\u6765\u770b\uff0cOmiu \u6709\u8fd9\u4e9b\u7279\u6027:\n\n> [Omiu Codepen \u5408\u96c6](https://codepen.io/collection/XBJjke)\n\n* \u8de8\u6846\u67b6\u4f7f\u7528\n* \u9ad8\u54c1\u8d28\u7684 UI \u4ea4\u4e92\u7ec6\u8282\n* \u96c6\u6210 MUI [\u6d77\u91cf ICON](https://tencent.github.io/omi/components/icon/demos/icon.html)\n* \u79fb\u52a8\u7aef\u548c PC \u5171\u7528\u4e00\u5957\u7ec4\u4ef6\n* \u8fd0\u884c\u65f6\u7684\u4e3b\u9898\u5207\u6362\u652f\u6301(\u989c\u8272\u3001\u5b57\u4f53\u548c\u5706\u89d2)\n* \u7ec4\u4ef6\u76f4\u63a5\u89e3\u8026\uff0c\u72ec\u7acb\u6253\u78e8\uff0c\u72ec\u7acb\u53d1\u5e03\uff0c\u72ec\u7acb\u5f15\u7528\n* \u6269\u5c55\u4e86 HTML \u80fd\u529b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5b57\u7b26\u4e32 `'0'` \u6216\u8005\u5b57\u7b26\u4e32 `'false'` \u4f20\u9012 false \u7ed9\u5143\u7d20\n\n## \u4f7f\u7528\u6307\u5357\n\n### \u901a\u8fc7 script\n\n```html\n<script src=\"https://unpkg.com/omi\"><\/script>\n<script src=\"https://unpkg.com/@omiu/button\"><\/script>\n\n<o-button>I am button</o-button>\n```\n\n### \u901a\u8fc7 npm\n\n``` bash\nnpm install @omiu/button\n```\n\n\u7136\u540e\u5bfc\u5165\uff08\u81ea\u52a8\u5168\u5c40\u6ce8\u518c\uff09:\n\n```js\nimport '@omiu/button'\n```\n\n\u7136\u540e\u5728\u4efb\u610f\u6846\u67b6\u4e2d\u4f7f\u7528\uff0c\u6bd4\u5982 Omi, React, Vue or Angular:\n\n``` html\n<o-button>I am button</o-button>\n```\n\n\u4e5f\u53ef\u4ee5\u539f\u751f JS \u4f7f\u7528\uff1a\n\n```js\nvar button = document.createElement('o-button')\nbutton.innerHTML = 'I am omiu button'\ndocument.body.append(button)\nbutton.addEventListener('click', function () {\n  console.log('Clicked!')\n})\n\n//or\n//document.body.innerHTML = '<o-button>I am omiu button</o-button>'\n```\n\n## HTML \u6269\u5c55 \n\n\u5f53\u9ed8\u8ba4\u503c\u4e3a true\uff0c\u9700\u8981\u4f20\u9012 false \u7ed9 element \u7684\u65f6\u5019\uff0c\u4ee5\u524d\u662f\u5386\u53f2\u96be\u9898\uff0cOmi \u5b8c\u7f8e\u89e3\u51b3\u4e86\u8fd9\u4e00\u70b9\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5b57\u7b26\u4e32 `'0'` \u6216\u8005 \u5b57\u7b26\u4e32 `'false'` \u6765\u8bbe\u7f6e\u3002\n\n```js\ndefine('my-element', class extends WeElement {\n  static defaultProps = {\n    show: true\n  }\n\n static propTypes = {\n    show: Boolean\n  }\n\n  render(props) {\n    ...\n    ...\n  }\n})\n```\n\nUse:\n\n```html\n<my-element show=\"false\"></my-element>\n```\n\nor\n\n```html\n<my-element show=\"0\"></my-element>\n```\n\n\n## Vue \u4e2d\u4f7f\u7528 Omiu\n\n```html\n<script>\nimport '@omiu/icon-button'\n\nexport default {\n  name: 'HelloWorld',\n  data: function() {\n    return {\n      result: false\n    }\n  },\n  methods: {\n    myEvent: function(evt) {\n      this.result = evt.detail.isOn\n    }\n  }\n}\n<\/script>\n\n<template>\n  <div class=\"component\">\n    <p>The switch is {{result? 'on' : 'off'}}</p>\n    <o-icon-button color=\"red\" icons=\"['favorite', 'favorite_border']\" @change=\"myEvent\"></o-icon-button>\n  </div>\n</template>\n```\n\n## \u5728 preact \u4e2d\u4f7f\u7528 Omiu\n\n```tsx\nimport { useState, h } from 'preact'\nimport '@omiu/icon-button'\n\nexport default function SomeComponent(props) {\n    const [result, setSwitch] = useState(false)\n\n    return (\n      <div>\n        <p>The switch is {result ? 'on' : 'off'}</p>\n        <o-icon-button color=\"red\" icons=\"['favorite', 'favorite_border']\" onchange={e => setSwitch(e.detail.isOn)}>\n        </o-icon-button>\n      </div>\n    )\n}\n```\n\n## \u4e8b\u4ef6\u89e6\u53d1\u548c\u7ed1\u5b9a\u6700\u4f73\u5b9e\u8df5\n\n\u7531\u4e8e\u9700\u8981\u8de8\u6846\u67b6\uff0c\u5728\u4e8b\u4ef6\u7ed1\u5b9a\u4e0a\u4e3a\u4e86\u7edf\u4e00\u7ec4\u4ef6\u884c\u4e3a\u8fd9\u91cc\u7ed9\u9664\u4e86\u7ec4\u4ef6\u5f00\u53d1\u548c\u4f7f\u7528\u7684\u6700\u4f73\u5b9e\u8df5\u3002Omiu \u7ec4\u4ef6\u7684\u4e8b\u4ef6\u89e6\u53d1\u7edf\u4e00\u4f7f\u7528\u5c0f\u5199\u4e2d\u5212\u7ebf\u7684\u5f62\u5f0f\uff1a\n\n```js\nthis.fire('change')\nthis.fire('my-event')\n```\n\n\u5728 Omi \u4e2d\uff1a\n\n```jsx\n<my-ele onChange={this.changeHandler} onMyEvent={this.myEventHandler}></my-ele>\n```\n\nPreact \u4e2d\u8fdb\u884c\u5bf9\u5e94\u7684\u4e8b\u4ef6\u7ed1\u5b9a:\n\n```jsx\n<my-ele onchange={this.changeHandler} onMyEvent={this.myEventHandler}></my-ele>\n```\n\n\u5728 Vue \u4e2d\u8fdb\u884c\u5bf9\u5e94\u7684\u4e8b\u4ef6\u7ed1\u5b9a:\n\n```html\n<my-ele @change=\"changeHandler\" @my-event=\"myEventHandler\"></my-ele>\n```\n\n\u5728 React \u548c JS \u4e2d\u8fdb\u884c\u5bf9\u5e94\u7684\u4e8b\u4ef6\u7ed1\u5b9a:\n\n```jsx\nmyEl.addEventListener('my-event', (evt) => {})\n```\n\n\n## \u8d21\u732e\n\n### \u4e00\u4e9b\u547d\u4ee4\n\nBuild \u7ec4\u4ef6:\n\n```bash\nnpm run build \n```\n\nBuild \u4f8b\u5b50:\n\n```bash\nnpm start\n```\n\n\u751f\u6210\u6587\u6863:\n\n```bash\nnpm run docs\n```\n\n\u53d1\u5e03:\n\n```bash\nnpm publish --access public\n```\n"}});
//# sourceMappingURL=23.6077b246.chunk.js.map