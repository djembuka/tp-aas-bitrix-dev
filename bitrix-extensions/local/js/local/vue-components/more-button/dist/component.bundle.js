/* eslint-disable */
this.BX = this.BX || {};
(function (exports,local_vueComponents_buttonComponent) {
  'use strict';

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  var MoreButton = {
    data: function data() {
      return {};
    },
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent
    },
    props: {
      text: {
        type: String,
        "default": 'Загрузить еще'
      },
      loading: {
        type: Boolean,
        "default": false
      },
      show: {
        type: Boolean,
        "default": true
      },
      infiniteScroll: {
        type: Object,
        "default": null
        /*{
            offset: 200,
            direction: 'down',
            root: null,
            once: false
          }*/
      }
    },

    emits: ['clickMore'],
    // language=Vue
    template: "\n    <ButtonComponent ref=\"moreButton\" v-if=\"show\" :text=\"text\" :props=\"buttonProps\" @clickButton=\"clickButton\" />\n\t",
    computed: {
      buttonProps: function buttonProps() {
        var result = ['serve', 'medium', 'wide'];
        if (this.loading) {
          result.push('load-circle');
        }
        return result;
      }
    },
    methods: {
      clickButton: function clickButton() {
        this.$emit('clickMore');
      },
      observeProximity: function observeProximity(target, callback) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var _options$offset = options.offset,
          offset = _options$offset === void 0 ? 200 : _options$offset,
          _options$root = options.root,
          root = _options$root === void 0 ? null : _options$root,
          _options$direction = options.direction,
          direction = _options$direction === void 0 ? 'down' : _options$direction,
          _options$threshold = options.threshold,
          threshold = _options$threshold === void 0 ? 0 : _options$threshold,
          _options$once = options.once,
          once = _options$once === void 0 ? true : _options$once;
        if (!(target instanceof Element)) {
          throw new Error('observeProximity: target должен быть DOM-элементом');
        }
        if (typeof callback !== 'function') {
          throw new Error('observeProximity: callback должен быть функцией');
        }
        var top = direction === 'up' || direction === 'both' ? offset : 0;
        var bottom = direction === 'down' || direction === 'both' ? offset : 0;
        var observer = new IntersectionObserver(function (entries) {
          var _iterator = _createForOfIteratorHelper(entries),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var entry = _step.value;
              if (entry.isIntersecting) {
                callback(entry);
                if (once) observer.unobserve(target);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }, {
          root: root,
          rootMargin: "".concat(top, "px 0px ").concat(bottom, "px 0px"),
          threshold: threshold
        });
        observer.observe(target);
        return function () {
          return observer.unobserve(target);
        };
      }
    },
    mounted: function mounted() {
      if (this.infiniteScroll) {
        this.observeProximity(this.$refs.moreButton.$el, this.clickButton, this.infiniteScroll);
      }
    }
  };

  exports.MoreButton = MoreButton;

}((this.BX.AAS = this.BX.AAS || {}),BX.AAS));
//# sourceMappingURL=component.bundle.js.map
