webpackJsonp([14],{62:function(n,e){n.exports="## H / H.F / JSX\n\nJSX \u662f\u76ee\u524d\u4e3a\u6b62\u5f00\u53d1\u4f53\u9a8c\u6700\u68d2\u3001\u8bed\u6cd5\u566a\u97f3\u6700\u5c11\u3001\u8868\u8fbe\u80fd\u529b\u6700\u5f3a\u4e14\u56fe\u7075\u5b8c\u5907\u7684 UI \u8868\u8fbe\u5f0f\uff0c\u6a21\u677f\u5f15\u64ce\u4e0d\u5b8c\u5907\uff0c\u6a21\u677f\u5b57\u7b26\u4e32\u56fe\u7075\u5b8c\u5907\u4f46\u662f\u8bed\u6cd5\u566a\u97f3\u592a\u5927\u3002\u5373\uff1a\n\n\n```jsx\nimport { WeElement, h } from 'omi'\n\nclass Test extends WeElement {\n\n  render() {\n    return (\n      //<h.f></h.f> \u6216 <></>  \u90fd\u652f\u6301\n      <h.f>\n        <h1>Test</h1>\n        <p>Test</p>\n      </h.f>\n    )\n  }\n}\n```\n\n## Hello JSX\n\n\u4f7f\u7528 JSX\uff0c\u53ef\u4ee5\u5728 JS \u4e2d\u4e66\u5199\u95ed\u5408\u7684 XML \u6807\u7b7e\u6765\u8868\u8fbe DOM \u7ed3\u6784\u7b49\uff0c\u6bd4\u5982:\n\n```jsx\nconst element = <h1>Hello, world!</h1>\n```\n\n## \u6570\u636e\u7ed1\u5b9a\n\n\u636e\u7ed1\u5b9a\u4f7f\u7528\u5355\u62ec\u53f7\u5c06\u53d8\u91cf\u6216\u8868\u8fbe\u5f0f\u3001\u6216JS\u8bed\u53e5\u5757\u5305\u8d77\u6765\uff1a\n\n```jsx\n<h1>{user.name}</h1>\n```\n\n\u5728 Omi \u7684 render \u91cc\u8bd5\u8bd5:\n\n```jsx\ndefine('my-element', class extends WeElement {\n  render(props) {\n    return <h1>{props.name}</h1>\n  }\n})\n```\n\n\u4f7f\u7528\u5143\u7d20:\n\n```jsx\n<my-element name='dntzhang' />\n```\n\n\u8fd8\u53ef\u4ee5\u5199\u8868\u8fbe\u5f0f:\n\n```jsx\n<h1>{user.age > 18 ? '\u6210\u5e74' : '\u672a\u6210\u5e74'}<h1>\n```\n\n\u8868\u8fbe\u5f0f\u91cc\u4e5f\u53ef\u4ee5\u5d4c\u5165 JSX\uff1a\n\n```jsx\n<h1>{ user.age > 18 ? <div>\u6210\u5e74</div> : <div>\u672a\u6210\u5e74</div> }<h1>\n```\n\n\u4e0a\u9762\u7684\u4e09\u5143\u5176\u5b9e\u5c31\u662f if else\uff0c\u5982\u679c\u4ec5\u4ec5\u9700\u8981 if\uff0c\u53ef\u4ee5\uff1a\n\n```jsx\n<h1>{ user.age > 18 && <div>\u6210\u5e74</div> }<h1>\n```\n\n\u5f3a\u5927\uff01\n\n## \u5217\u8868\u6e32\u67d3\n\n\u6570\u636e\u6e90:\n\n```js\nconst arr = [{\n  message: 'foo',\n}, {\n  message: 'bar'\n}]\n```\n\nJSX \u6e32\u67d3:\n\n```jsx\n<ul>\n  {arr.map(item =>\n    <li>{item.message}</li>\n  )}\n</ul>\n```\n\n\u7b49\u540c\u4e8e:\n\n```jsx\n<ul>\n  {\n    arr.map(item => {\n      return <li>{item.message}</li>\n    })\n  }\n</ul>\n```\n\n\u5982\u679c\u662f `{}` \u5305\u88f9\uff0c\u5c31\u9700\u8981 `return`\u3002\u5982\u679c\u9700\u8981 index:\n\n```jsx\n<ul>\n  {arr.map((item, index) =>\n    <li>{index}: {item.message}</li>\n  )}\n</ul>\n```\n\n## \u7efc\u5408\u4f8b\u5b50\n\n\u8fd9\u91cc\u4e3e\u4e00\u4e2a\u4e5d\u4e5d\u4e58\u6cd5\u8868:\n\n```jsx\nimport { define, render, WeElement } from 'omi'\n\ndefine('my-app', class extends WeElement {\n\n  static css = `span{\n    display: inline-block;\n    width: 68px;\n  }`\n\n  render(props) {\n    return (\n      <div>\n        {props.numbers.map((a, indexA) =>\n          <div>\n            {\n              props.numbers.map((b, indexB) => {\n                return indexA <= indexB && <span>{a}*{b}={a * b} </span>\n              })\n            }\n          </div>\n        )}\n      </div>\n    )\n  }\n})\n\nrender(<my-app numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />, 'body')\n```\n\n\u7ed3\u679c\u5c55\u793a:\n\n![](https://github.com/Tencent/omi/raw/master/assets/99.jpg)\n\n[\u2192 \u5728\u7ebf\u67e5\u770b](https://tencent.github.io/omi/packages/omi/examples/99/)\n"}});
//# sourceMappingURL=14.aab16c83.chunk.js.map