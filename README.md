[![Codecov Coverage](https://img.shields.io/codecov/c/github/sun-asterisk-research/vue-highlight-tool/master.svg?style=flat-square)](https://codecov.io/gh/sun-asterisk-research/vue-highlight-tool/)
[![npm download](https://img.shields.io/npm/dt/vue-highlight-tool.svg?maxAge=30)](https://www.npmjs.com/package/vue-highlight-tool)
[![npm download per month](https://img.shields.io/npm/dm/vue-highlight-tool.svg?)](https://www.npmjs.com/package/vue-highlight-tool)
![GitHub open issues](https://img.shields.io/github/issues/sun-asterisk-research/vue-highlight-tool)
[![npm version](https://img.shields.io/npm/v/vue-highlight-tool.svg)](https://www.npmjs.com/package/vue-highlight-tool)

## Live Demos

https://vue-highlight-tool.herokuapp.com/

## Installation

### With npm or yarn

```bash
yarn add vue-highlight-tool

npm i vue-highlight-tool
```

## For Vue.js 2

Use vue-highlight-tool component:

### Typical use:

```js
// main.js
import HighLightTool from 'vue-highlight-tool'
...
Vue.use(HighLightTool)
```

.vue file:

```html
<template>
  <div id="app">
    <highlight-tool
      :linkedIn="true"
      :facebook="true"
      :twitter="true"
      :highlight="true"
      @shareFacebook="onShareFacebook"
      @shareLinkedIn="onShareLinkedIn"
      @shareTwitter="onShareTwitter"
      @highlight="onHighlight"
    >
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet at debitis deserunt, optio rem eaque obcaecati non possimus nisi assumenda architecto exercitationem dolore quo praesentium, deleniti reiciendis sed ab nihil!
      </div>
    </highlight-tool>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    onShareFacebook (text) {
      // eslint-disable-next-line
      console.log('shareFacebook:', text)
    },

    onShareLinkedIn (text) {
      // eslint-disable-next-line
      console.log('shareLinkedIn:', text)
    },

    onShareTwitter (text) {
      // eslint-disable-next-line
      console.log('shareTwitter:', text)
    },

    onHighlight (text) {
      // eslint-disable-next-line
      console.log('highlight:', text)
    }
  }
}
</script>
```
### Props

#### twitter

Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

Enable icon share twitter

#### facebook

Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

Enable icon share facebook

#### linkedIn

Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

Enable icon share linkedIn

#### highlight

Type: `Boolean`<br>
Required: `false`<br>
Default: `true`

Enable icon highlight, may be to save text highlight on your database with call API
