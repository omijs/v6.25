webpackJsonp([11],{65:function(n,t){n.exports='## mps\n\n> \u539f\u751f\u5c0f\u7a0b\u5e8f\u63d2\u4e0a JSX \u548c Less \u7684\u7fc5\u8180\uff0c**mp + sweet**\n\nmps \u662f\u4ec0\u4e48\uff1f\u4e3a\u4ec0\u4e48\u9700\u8981 mps\uff1f\u5148\u5217\u4e3e\u51e0\u4e2a\u73b0\u72b6:\n\n* \u76ee\u524d\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u4f7f\u7528\u6700\u591a\u7684\u6280\u672f\u4f9d\u7136\u662f\u539f\u751f\u5c0f\u7a0b\u5e8f\n* \u539f\u751f\u5c0f\u7a0b\u5e8f\u7684 API \u5728\u4e0d\u65ad\u5b8c\u5584\u548c\u8fdb\u5316\u4e2d\n* JSX \u662f\u8868\u8fbe\u80fd\u529b\u548c\u7f16\u7a0b\u4f53\u9a8c\u6700\u597d\u7684 UI \u8868\u8fbe\u5f0f\n* JSX \u53ef\u4ee5\u8868\u8fbe\u4e00\u5207\u60f3\u8868\u8fbe\u7684 UI \u7ed3\u6784\u4e5f\u5c31\u80fd\u591f\u63cf\u8ff0\u4efb\u610f WXML\n\n\u6240\u4ee5\uff0c\u5c31\u6709\u4e86 mps\uff0c**mp + sweet**\u3002 \u8ba9\u5f00\u53d1\u8005\u76f4\u63a5\u5728\u539f\u751f\u5c0f\u7a0b\u5e8f\u4f7f\u7528 JSX \u5199 WXML\uff0c\u7528 Less \u5199 WXSS\uff0c\u5b9e\u65f6\u7f16\u8bd1\uff0c\u5b9e\u65f6\u9884\u89c8\u3002\n\n![](https://github.com/Tencent/omi/raw/master/assets/mps.png)\n\n- JSX \u4ee3\u66ff WXML \u4e66\u5199\u7ed3\u6784\uff0c\u7cbe\u7b80\u9ad8\u6548\n- \u5bf9\u539f\u751f\u5c0f\u7a0b\u5e8f\u96f6\u5165\u4fb5\n- \u652f\u6301 JS \u548c TS\n- \u5b9e\u65f6\u7f16\u8bd1\uff0c\u5b9e\u65f6\u9884\u89c8\n- \u8f93\u51fa WXML \u81ea\u52a8\u7f8e\u5316\n\n## \u6548\u679c\u9884\u89c8\n\n![](https://github.com/Tencent/omi/raw/master/assets/mps.gif)\n\n## \u7acb\u5373\u5f00\u59cb\n\n```bash\n$ npm i omi-cli -g              \n$ omi init-mps my-app    \n$ cd my-app        \n$ npm start               \n```\n\n\u63a5\u7740\u628a\u5c0f\u7a0b\u5e8f\u76ee\u5f55\u8bbe\u7f6e\u4e3a my-app \u76ee\u5f55\u4fbf\u53ef\u4ee5\u6109\u5feb\u5730\u5f00\u59cb\u5f00\u53d1\u8c03\u8bd5\u4e86\uff01 \n\n> `npx omi-cli init-mps my-app` \u4e5f\u652f\u6301(npm v5.2.0+)\n\n\u751f\u6210\u7684\u76ee\u5f55\u548c\u5b98\u65b9\u7684\u6a21\u677f\u4e00\u81f4\uff0c\u53ea\u4e0d\u8fc7\u591a\u4e86 JSX \u6587\u4ef6\uff0c\u53ea\u9700\u8981\u4fee\u6539 JSX \u6587\u4ef6\u5c31\u4f1a\u5b9e\u65f6\u4fee\u6539 WXML\u3002\n\n\u4e5f\u652f\u6301 typescript:\n\n```bash           \n$ omi init-mps-ts my-app             \n```\n\n\u5176\u4ed6\u547d\u4ee4\u4e00\u6837\u3002\n\n> `npx omi-cli init-mps-ts my-app` \u4e5f\u652f\u6301(npm v5.2.0+)\n\n## JSX vs WXML\n\n\u8fd9\u91cc\u662f\u4e00\u4e2a\u771f\u5b9e\u7684\u6848\u4f8b\u8bf4\u660e JSX \u7684\u7cbe\u5de7\u9ad8\u6548\u7684\u8868\u8fbe\u80fd\u529b:\n\n\u7f16\u8bd1\u524d\u7684 JSX:\n\n```jsx\n<view class=\'pre language-jsx\'>\n  <view class=\'code\'>\n    {tks.map(tk => {\n      return tk.type === \'tag\' ? <text class={\'token \' + tk.type}>{\n        tk.content.map(stk => {\n          return stk.deep ? stk.content.map(sstk => {\n            return <text class={\'token \' + sstk.type}>{sstk.content || sstk}</text>\n          }) : <text class={\'token \' + stk.type}>{stk.content || stk}</text>\n        })}</text> : <text class={\'token \' + tk.type}>{tk.content || tk}</text>\n    })}\n  </view>\n</view>\n```\n\n\u7f16\u8bd1\u540e WXML:\n\n```jsx\n<view class="pre language-jsx">\n  <view class="code">\n    <block wx:for="{{tks}}" wx:for-item="tk" wx:for-index="_anonIdx4">\n      <block wx:if="{{tk.type === \'tag\'}}"\n        ><text class="{{\'token \' + tk.type}}"\n          ><block\n            wx:for="{{tk.content}}"\n            wx:for-item="stk"\n            wx:for-index="_anonIdx2"\n            ><block wx:if="{{stk.deep}}"\n              ><text\n                class="{{\'token \' + sstk.type}}"\n                wx:for="{{stk.content}}"\n                wx:for-item="sstk"\n                wx:for-index="_anonIdx3"\n                >{{sstk.content || sstk}}</text\n              >\n            </block>\n            <block wx:else\n              ><text class="{{\'token \' + stk.type}}"\n                >{{stk.content || stk}}</text\n              >\n            </block>\n          </block>\n        </text>\n      </block>\n      <block wx:else\n        ><text class="{{\'token \' + tk.type}}">{{tk.content || tk}}</text>\n      </block>\n    </block>\n  </view>\n</view>\n```\n\n## \u8001\u9879\u76ee\u4f7f\u7528 mps\n\n\u62f7\u8d1d\u4ee5\u4e0b\u6587\u4ef6\u5230\u5c0f\u7a0b\u5e8f\u6839\u76ee\u5f55:\n\n* _scripts \u76ee\u5f55\u6240\u6709\u6587\u4ef6\n* package.json\n* gulpfile.js\n\n\u8bbe\u7f6e project.config.json \u91cc\u7684 packOptions.ignore \u5ffd\u7565\u4ee5\u4e0a\u7684\u6587\u4ef6\uff0c\u7136\u540e:\n\n``` bash\n$ npm install\n$ npm start\n```\n\n## mps \u7ea6\u5b9a\n\n\u516c\u5171\u7684 less \u6587\u4ef6\u5fc5\u987b\u653e\u5728 common-less \u76ee\u5f55\uff0c@import \u4f7f\u7528\u7684\u65f6\u5019\u4e0d\u9700\u8981\u5199\u8def\u5f84\u3002\n\n## \u63a8\u8350\u642d\u914d\n\n\u65e2\u7136\u7528\u4e86\u539f\u751f\u5c0f\u7a0b\u5e8f\u7684\u65b9\u6848\uff0c\u6240\u6709\u53ef\u4ee5\u8f7b\u677e\u4f7f\u7528 mps + [omix](https://github.com/Tencent/omi/tree/master/packages/omix) \u642d\u914d\u4e00\u8d77\u4f7f\u7528\u3002\n\n\u6b22\u8fce\u4f7f\u7528 mps \u5927\u5e45\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\uff0cHave fun!\n'}});
//# sourceMappingURL=11.df4eed1c.chunk.js.map