# 𝕺𝖑𝖉𝖎𝖋𝖞
𝔗𝔯𝔞𝔫𝔰𝔣𝔬𝔯𝔪 𝔶𝔬𝔲𝔯 𝔠𝔬𝔡𝔢 𝔱𝔬 𝔱𝔥𝔢 𝔬𝔩𝔡𝔢𝔫 𝔡𝔞𝔶𝔰 𝔴𝔦𝔱𝔥 𝔒𝔩𝔡𝔦𝔣𝔶.

## 𝖀𝖘𝖆𝖌𝖊

Command Line
```bash
npm install -g oldify && oldify
```

NodeJS
```js
const transpile = require('oldify/transpile');

transpile('input'); //𝔬𝔲𝔱𝔭𝔲𝔱
```

## 𝕮𝖔𝖓𝖋𝖎𝖌

```bash
oldify src dist
```

**.oldifyrc**
```json
{
  "src": "src",
  "output": "dist",
  "ignore": ["node_modules"]
}
```
