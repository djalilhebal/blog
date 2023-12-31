# Vue 3


## Learn

- [Vue and Web Components | Vue.js](https://vuejs.org/guide/extras/web-components)
```js
import { defineCustomElement } from 'vue'
import Example from './Example.ce.vue'

console.log(Example.styles) // ["/* inlined css */"]

// convert into custom element constructor
const ExampleElement = defineCustomElement(Example)

// register
customElements.define('my-example', ExampleElement)
```

---

END.
