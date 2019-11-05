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
