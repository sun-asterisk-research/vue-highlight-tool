/*!
 * vue-highlight-tool v0.0.2
 * (c) quanghung97
 * Released under the MIT License.
 */
'use strict';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'HighLightTool',
  data: function data() {
    return {
      x: 0,
      y: 0,
      showTools: false,
      selectedText: ''
    };
  },
  props: {
    twitter: {
      type: Boolean,
      default: true
    },
    facebook: {
      type: Boolean,
      default: true
    },
    highlight: {
      type: Boolean,
      default: true
    },
    linkedIn: {
      type: Boolean,
      default: true
    }
  },
  created: function created() {},
  computed: {
    highlightableEl: function highlightableEl() {
      return this.$slots.default[0].elm;
    }
  },
  mounted: function mounted() {
    window.addEventListener('mouseup', this.onMouseup);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('mouseup', this.onMouseup);
  },
  watch: {},
  methods: {
    onMouseup: function onMouseup() {
      var selection = window.getSelection();
      var startNode = selection.getRangeAt(0).startContainer.parentNode;
      var endNode = selection.getRangeAt(0).endContainer.parentNode;

      if (!startNode.isSameNode(this.highlightableEl) || !startNode.isSameNode(endNode)) {
        this.showTools = false;
        return;
      }

      var _selection$getRangeAt = selection.getRangeAt(0).getBoundingClientRect(),
          x = _selection$getRangeAt.x,
          y = _selection$getRangeAt.y,
          width = _selection$getRangeAt.width;

      if (!width) {
        this.showTools = false;
        return;
      }

      this.x = x + width / 2;
      this.y = y + window.scrollY - 10;
      this.showTools = true;
      this.selectedText = selection.toString();
    },
    handleAction: function handleAction(action) {
      this.$emit(action, this.selectedText);
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD;
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showTools,
      expression: "showTools"
    }],
    staticClass: "tools",
    style: {
      left: _vm.x + "px",
      top: _vm.y + "px"
    },
    on: {
      "mousedown": function mousedown($event) {
        $event.preventDefault();
      }
    }
  }, [_vm.twitter ? _c('span', {
    staticClass: "item",
    on: {
      "mousedown": function mousedown($event) {
        $event.preventDefault();
        return _vm.handleAction('shareTwitter');
      }
    }
  }, [_c('svg', {
    staticStyle: {
      "width": "24px",
      "height": "24px"
    },
    attrs: {
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "fill": "#000000",
      "d": "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.facebook ? _c('span', {
    staticClass: "item",
    on: {
      "mousedown": function mousedown($event) {
        $event.preventDefault();
        return _vm.handleAction('shareFacebook');
      }
    }
  }, [_c('svg', {
    staticStyle: {
      "width": "24px",
      "height": "24px"
    },
    attrs: {
      "viewBox": "0 0 33.24 64"
    }
  }, [_c('path', {
    attrs: {
      "fill": "#000000",
      "d": "M21.57,64V34.81h9.8l1.47-11.38H21.57V16.17c0-3.3.92-5.54,5.64-5.54h6V.45A80.21,80.21,0,0,0,24.46,0C15.77,0,9.82,5.3,9.82,15v8.39H0V34.81H9.82V64Z"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.linkedIn ? _c('span', {
    staticClass: "item",
    on: {
      "mousedown": function mousedown($event) {
        $event.preventDefault();
        return _vm.handleAction('shareLinkedIn');
      }
    }
  }, [_c('svg', {
    staticStyle: {
      "width": "24px",
      "height": "24px"
    },
    attrs: {
      "viewBox": "0 0 66.97 64"
    }
  }, [_c('path', {
    attrs: {
      "fill": "#000000",
      "d": "M0,7.43A7,7,0,0,1,2.26,2.1,8.31,8.31,0,0,1,8.15,0,8,8,0,0,1,13.9,2.07a7.27,7.27,0,0,1,2.26,5.56A6.79,6.79,0,0,1,14,12.8,8.3,8.3,0,0,1,8,14.93H8A7.9,7.9,0,0,1,2.2,12.8,7.15,7.15,0,0,1,0,7.43ZM.84,64V20.82H15.19V64Zm22.3,0H37.49V39.89A9.35,9.35,0,0,1,38,36.4a9.39,9.39,0,0,1,2.75-3.72,7,7,0,0,1,4.62-1.52q7.24,0,7.24,9.76V64H67V39.24q0-9.57-4.52-14.51a15.43,15.43,0,0,0-12-4.95,14.68,14.68,0,0,0-13,7.18v.13h-.06l.06-.13V20.82H23.14q.13,2.07.13,12.86T23.14,64Z"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.highlight ? _c('span', {
    staticClass: "item",
    on: {
      "mousedown": function mousedown($event) {
        $event.preventDefault();
        return _vm.handleAction('highlight');
      }
    }
  }, [_c('svg', {
    staticStyle: {
      "width": "24px",
      "height": "24px"
    },
    attrs: {
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "fill": "#000000",
      "d": "M18.5,1.15C17.97,1.15 17.46,1.34 17.07,1.73L11.26,7.55L16.91,13.2L22.73,7.39C23.5,6.61 23.5,5.35 22.73,4.56L19.89,1.73C19.5,1.34 19,1.15 18.5,1.15M10.3,8.5L4.34,14.46C3.56,15.24 3.56,16.5 4.36,17.31C3.14,18.54 1.9,19.77 0.67,21H6.33L7.19,20.14C7.97,20.9 9.22,20.89 10,20.12L15.95,14.16"
    }
  })])]) : _vm._e()]), _vm._v(" "), _vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2fdfee2a_0", {
    source: ".tools[data-v-2fdfee2a]{height:30px;padding:5px 10px;background:#333;border-radius:3px;position:absolute;top:0;left:0;transform:translate(-50%,-100%);transition:.2s all;display:flex;justify-content:center;align-items:center}.tools[data-v-2fdfee2a]:after{content:\"\";position:absolute;left:50%;bottom:-5px;transform:translateX(-50%);width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #333}.item[data-v-2fdfee2a]{color:#fff;cursor:pointer}.item>svg>path[data-v-2fdfee2a]{fill:#fff}.item:hover>svg>path[data-v-2fdfee2a]{fill:#19f}.item[data-v-2fdfee2a]:hover{color:#19f}.item[data-v-2fdfee2a]{margin:0 5px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-2fdfee2a";
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

var HighLightTool = normalizeComponent_1({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, browser, undefined);

var index = {
  install: function install(Vue) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component('highlight-tool', HighLightTool);
  }
};

module.exports = index;
