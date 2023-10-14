webpackJsonp([22], { 54: function (n, t) { n.exports = "## What's Store?\n\nStore is Omi's built-in centralized data warehouse, which solves and provides the following problems and capabilities:\n\n* Component Tree Data Sharing\n* Data Change Updates Dependent Components on Demand\n\n![](https://github.com/Tencent/omi/raw/master/assets/store.jpg)\n\n\n## Quick Preview\n\nPass data through the component tree without having to pass props down manually at every level by store, auto update the view on demand.\n\n```jsx\nimport { define, render } from 'omi'\n\nclass Store {\n  data = {\n    count: 1\n  }\n  sub = () => {\n    this.data.count--\n  }\n  add = () => {\n    this.data.count++\n  }\n}\n\ndefine('my-counter', _ => (\n  <div>\n    <button onClick={_.store.sub}>-</button>\n    <span>{_.store.data.count}</span>\n    <button onClick={_.store.add}>+</button>\n  </div>\n), {\n    use: ['count'], \n    //or using useSelf, useSelf will update self only, exclude children components\n    //useSelf: ['count'], \n    css: `span { color: red; }`,\n    installed() {\n      console.log('installed')\n    }\n  })\n\nrender(<my-counter />, 'body', new Store)\n```\n\n* `<my-counter></my-counter>` can be used in any framework or no framework, such as `document.createElement('my-counter')`\n\nYou can also use `useSelf`, `useSelf` only updates itself. When using `useSelf`, the corresponding attributes are accessed through `usingSelf` in JSX.\n\nYou can also implement `computed` props through `compute`, such as:\n\n```jsx\ndefine('my-counter', _ => (\n  <div>\n    <button onClick={_.store.sub}>-</button>\n    <span>{_.store.data.count}</span>\n    <button onClick={_.store.add}>+</button>\n    <div>Double: {_.computed.doubleCount}</div>\n  </div>\n), {\n    use: ['count'],\n    compute: {\n      doubleCount() {\n        return this.count * 2\n      }\n    }\n  })\n```\n\nPath is also supported:\n\n```js\nclass Store {\n  data = {\n    list: [\n      { name: { first: 'dnt', last: 'zhang' } }\n    ]\n  }\n}\n\n...\n...\n\ndefine('my-counter', _ => (\n  ...\n  ...\n), {\n    use: [\n      'list[0].name', //Direct string path dep, accessible through this.using[0] \n    ],\n    compute: {\n      fullName() {\n        return this.list[0].name.first + this.list[0].name.last\n      }\n    }\n  })\n```\n\n![](https://tencent.github.io/omi/assets/store.jpg)\n\n### Multi-store injection\n\n```jsx\nimport { define, render } from 'omi'\n\ndefine('my-app', _ => {\n  const store = _.store.storeA\n  const { data, add, sub } = store\n  return (\n    <p>\n      Clicked: {data.count} times\n      <button onClick={add}>+</button>\n      <button onClick={sub}>-</button>\n\n      <div>\n        {_.store.storeB.data.msg}\n        <button  onClick={_.store.storeB.changeMsg}>\n          change storeB's msg\n        </button>\n      </div>\n    </p>\n  )\n}, {\n  useSelf: {\n    storeA: ['count', 'adding'],\n    storeB: ['msg']\n  }\n})\n\nconst storeA = new class Store {\n  data = {\n    count: 0,\n    adding: false\n  }\n  sub = () => {\n    this.data.count--\n  }\n  add = () => {\n    this.data.count++\n  }\n}\n\nconst storeB = new class Store {\n  data = {\n    msg: 'abc'\n  }\n  changeMsg = () => {\n    this.data.msg = 'bcd'\n  }\n}\n\nrender( <my-app /> , 'body', {\n  storeA,\n  storeB\n})\n```\n\nHow to Multi-store injection with `compute` and `computed`? Very simple:\n\n```jsx\ndefine('my-app', _ => {\n  const store = _.store.storeA\n  const { data, add, sub } = store\n  return (\n    <p>\n      Clicked: {data.count} times\n      <button onClick={add}>+</button>\n      <button onClick={sub}>-</button>\n\n      <div>\n        {_.store.storeB.data.msg}\n        <button onClick={_.store.storeB.changeMsg}>\n          change storeB's msg\n        </button>\n      </div>\n\n      <div>{_.computed.dobuleCount}</div>\n      <div>{_.computed.reverseMsg}</div>\n    </p>\n  )\n}, {\n    useSelf: {\n      storeA: ['count', 'adding'],\n      storeB: ['msg']\n    },\n    compute: {\n      dobuleCount() {\n        return this.storeA.data.count * 2\n      },\n      reverseMsg() {\n        return this.storeB.data.msg.split('').reverse().join('')\n      }\n    }\n  })\n```\n\n### API and Hooks\n\n```jsx\ndefine('my-component', _ => (\n  ...\n  ...\n), {\n    use: ['count', 'path.a', 'path[1].b'],\n    useSelf: ['path.c', 'path[1].d'],\n    compute: {\n      doubleCount() {\n        return this.count * 2\n      }\n    },\n    css: 'h1 { color: red; }',\n    propTypes: { },\n    defaultProps: { },\n    isLightDOM: true, //default is false\n\n    //life cycle\n    install() { }, \n    installed() { }, \n    uninstall() { }, \n    receiveProps() { },\n    beforeUpdate() { }, \n    updated() { }, \n    beforeRender() { }, \n    rendered() { }, \n\n    //custom methods\n    myMethodA() { },\n    myMethodB() { }\n\n  })\n```\n\n### Inject use or useSelf through prop\n\n```jsx\n<my-counter use={['count']} ></my-counter>\n```\n\n\n## A piece of code is completely ready for Store\n\n```jsx\nimport { render, WeElement, define } from 'omi'\n\ndefine('my-counter', class extends WeElement {\n  use = ['count', 'adding']\n\n  addIfOdd = () => {\n    if (this.store.data.count % 2 !== 0) {\n      this.store.add()\n    }\n  }\n\n  addAsync = () => {\n    this.store.data.adding = true\n    setTimeout(() => {\n      this.store.data.adding = false\n      this.store.add()\n    }, 1000)\n  }\n\n  render() {\n    const store = this.store\n    const { data, add, sub } = store\n    return (\n      <p>\n        Clicked: {data.count} times\n        {' '}\n        <button onClick={add}>+</button>\n        {' '}\n        <button onClick={sub}>-</button>\n        {' '}\n        <button disabled={data.count % 2 === 0} onClick={this.addIfOdd}>\n          Add if odd\n        </button>\n        {' '}\n        <button disabled={data.adding} onClick={this.addAsync}>\n          Add async\n        </button>\n      </p>\n    )\n  }\n})\n\nrender(<my-counter />, 'body', new class Store {\n  data = {\n    count: 0,\n    adding: false\n  }\n  sub = () => {\n    this.data.count--\n  }\n  add = () => {\n    this.data.count++\n  }\n})\n```\n\n* Declare a dependent path by `use` or `useSelf`(useSelf will update self only, exclude children components).\n* `store` injects all components from the root node through the third parameter of render.\n\nHere is a complicated example of `use'.\n\nData of store:\n\n```json\n{\n  count: 0,\n  arr: ['china', 'tencent'],\n  motto: 'I love omi.',\n  userInfo: {\n    firstName: 'dnt',\n    lastName: 'zhang',\n    age: 18\n  }\n}\n```\n\nUse and compute grammar:\n\n```jsx\nuse = [\n  'count', //Direct string, accessible through this.using[0] \n  'arr[0]', //It also supports path, which is accessible through this.using[1]\n  'motto',\n  'userInfo',\n  { name: 'arr[1]' } //{ alias: path }\uff0caccessible through this.using.name\n]\n\ncompute = {\n  reverseMotto() {\n    return this.motto.split('').reverse().join('')\n  },\n  fullName() {\n    return this.userInfo.firstName + this.userInfo.lastName\n  }\n}\n```\n\nLet's look at the use of JSX:\n\n```jsx\n...\n...\nrender() {\n  return (\n    <div>\n      <button onClick={this.sub}>-</button>\n      <span>{this.using[0]}</span>\n      <button onClick={this.add}>+</button>\n      <div>\n        <span>{this.using[1]}</span>\n        <button onClick={this.rename}>rename</button>\n      </div>\n      <div>{this.computed.reverseMotto}</div><button onClick={this.changeMotto}>change motto</button>\n      <div>{this.using.name}</div>\n      <div>{this.using[3]}</div>\n      <div>\n        {this.computed.fullName}\n        <button onClick={this.changeFirstName}>change first name</button>\n      </div>\n    </div>\n  )\n}\n...\n...\n```\n\nWithout alias, you can also access it directly through `this.store.data.xxx'.\n\n### Path hit rule\n\n| Proxy Path | path in use   | update |\n| ---------- | ---------- | -------- |\n| abc        | abc        | true     |\n| abc[1]     | abc        | true     |\n| abc.a      | abc        | true     |\n| abc        | abc.a      | false   |\n| abc        | abc[1]     | false   |\n| abc        | abc[1].c   | false   |\n| abc.b      | abc.b      | true     |\n\nThe above can be updated by hitting only one condition!\n\nSummary: As long as the path of the injected component is equal to that declared in use or under one of the path sub-nodes declared in use, it will be updated!\n\n### Destructuring assignment\n\n```jsx\nimport { define, WeElement } from 'omi'\nimport '../my-list'\n\ndefine('my-sidebar', class extends WeElement {\n  static css = require('./_index.css')\n\n  use = [\n    'menus',\n    'sideBarShow',\n    'lan'\n  ]\n\n  render() {\n    const [menus, sideBarShow, lan] = this.using\n\n    return (\n      <div class={`list${sideBarShow ? ' show' : ''}`}>\n        {menus[lan].map((menu, index) => (\n          <my-list menu={menu} index={index} />\n        ))}\n      </div>\n    )\n  }\n})\n```\n\nHere is an example of using the ES2015+ Grammar `const [xx, xxx] = xxxx` for fast assignment.\n\n\n## Dynamic use\n\nIf you don't want the same components to have the same dependencies, you can use dynamic use:\n\n```js\nuse() {\n  return [\n    'a.b',\n    'c[1].d',\n    `e.f.${xxx}.d[${index}]`\n  ]\n}\n```\n\n## Functional style \n\n```jsx\nimport { define, render } from 'omi'\n\nclass Store {\n  data = {\n    count: 1\n  }\n  sub = () => {\n    this.data.count--\n  }\n  add = () => {\n    this.data.count++\n  }\n}\n\ndefine('my-counter', ['count'], _ => (\n  <div>\n    <button onClick={_.store.sub}>-</button>\n    <span>{_.store.data.count}</span>\n    <button onClick={_.store.add}>+</button>\n  </div>\n))\n\nrender(<my-counter />, 'body', new Store)\n```\n\nVery flexible!\n\n\n" } });
//# sourceMappingURL=22.5d6510e9.chunk.js.map