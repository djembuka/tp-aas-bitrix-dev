/* eslint-disable */
(function (
  exports,
  ui_vue3,
  ui_vue3_router,
  local_vueComponents_controlComponent,
  local_vueComponents_controlChoice,
  local_vueComponents_buttonComponent,
  ui_vue3_pinia
) {
  'use strict';

  var TheMenu = {
    template:
      '\n    <div class="twpx-desing-system-menu">\n      <router-link to="/">Form controls</router-link>\n      <router-link to="/multi">Form controls multi</router-link>\n      <router-link to="/buttons">Buttons</router-link>\n      <router-link to="/filter">Filter</router-link>\n    </div>\n  ',
  };

  var Application = {
    components: {
      TheMenu: TheMenu,
    },
    template: '\n    <TheMenu />\n    <router-view />\n\t',
  };

  function _regeneratorRuntime() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
      function _regeneratorRuntime() {
        return exports;
      };
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty =
        Object.defineProperty ||
        function (obj, key, desc) {
          obj[key] = desc.value;
        },
      $Symbol = 'function' == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || '@@iterator',
      asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
      toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';
    function define(obj, key, value) {
      return (
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        obj[key]
      );
    }
    try {
      define({}, '');
    } catch (err) {
      define = function define(obj, key, value) {
        return (obj[key] = value);
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator =
          outerFn && outerFn.prototype instanceof Generator
            ? outerFn
            : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return (
        defineProperty(generator, '_invoke', {
          value: makeInvokeMethod(innerFn, self, context),
        }),
        generator
      );
    }
    function tryCatch(fn, obj, arg) {
      try {
        return { type: 'normal', arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: 'throw', arg: err };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
      (IteratorPrototype = NativeIteratorPrototype);
    var Gp =
      (GeneratorFunctionPrototype.prototype =
      Generator.prototype =
        Object.create(IteratorPrototype));
    function defineIteratorMethods(prototype) {
      ['next', 'throw', 'return'].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ('throw' !== record.type) {
          var result = record.arg,
            value = result.value;
          return value &&
            'object' == babelHelpers['typeof'](value) &&
            hasOwn.call(value, '__await')
            ? PromiseImpl.resolve(value.__await).then(
                function (value) {
                  invoke('next', value, resolve, reject);
                },
                function (err) {
                  invoke('throw', err, resolve, reject);
                }
              )
            : PromiseImpl.resolve(value).then(
                function (unwrapped) {
                  (result.value = unwrapped), resolve(result);
                },
                function (error) {
                  return invoke('throw', error, resolve, reject);
                }
              );
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, '_invoke', {
        value: function value(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return (previousPromise = previousPromise
            ? previousPromise.then(
                callInvokeWithMethodAndArg,
                callInvokeWithMethodAndArg
              )
            : callInvokeWithMethodAndArg());
        },
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = 'suspendedStart';
      return function (method, arg) {
        if ('executing' === state)
          throw new Error('Generator is already running');
        if ('completed' === state) {
          if ('throw' === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg; ; ) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ('next' === context.method)
            context.sent = context._sent = context.arg;
          else if ('throw' === context.method) {
            if ('suspendedStart' === state)
              throw ((state = 'completed'), context.arg);
            context.dispatchException(context.arg);
          } else
            'return' === context.method &&
              context.abrupt('return', context.arg);
          state = 'executing';
          var record = tryCatch(innerFn, self, context);
          if ('normal' === record.type) {
            if (
              ((state = context.done ? 'completed' : 'suspendedYield'),
              record.arg === ContinueSentinel)
            )
              continue;
            return { value: record.arg, done: context.done };
          }
          'throw' === record.type &&
            ((state = 'completed'),
            (context.method = 'throw'),
            (context.arg = record.arg));
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method)
        return (
          (context.delegate = null),
          ('throw' === methodName &&
            delegate.iterator['return'] &&
            ((context.method = 'return'),
            (context.arg = undefined),
            maybeInvokeDelegate(delegate, context),
            'throw' === context.method)) ||
            ('return' !== methodName &&
              ((context.method = 'throw'),
              (context.arg = new TypeError(
                "The iterator does not provide a '" + methodName + "' method"
              )))),
          ContinueSentinel
        );
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ('throw' === record.type)
        return (
          (context.method = 'throw'),
          (context.arg = record.arg),
          (context.delegate = null),
          ContinueSentinel
        );
      var info = record.arg;
      return info
        ? info.done
          ? ((context[delegate.resultName] = info.value),
            (context.next = delegate.nextLoc),
            'return' !== context.method &&
              ((context.method = 'next'), (context.arg = undefined)),
            (context.delegate = null),
            ContinueSentinel)
          : info
        : ((context.method = 'throw'),
          (context.arg = new TypeError('iterator result is not an object')),
          (context.delegate = null),
          ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };
      1 in locs && (entry.catchLoc = locs[1]),
        2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      (record.type = 'normal'), delete record.arg, (entry.completion = record);
    }
    function Context(tryLocsList) {
      (this.tryEntries = [{ tryLoc: 'root' }]),
        tryLocsList.forEach(pushTryEntry, this),
        this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ('function' == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length; )
                if (hasOwn.call(iterable, i))
                  return (next.value = iterable[i]), (next.done = !1), next;
              return (next.value = undefined), (next.done = !0), next;
            };
          return (next.next = next);
        }
      }
      return { next: doneResult };
    }
    function doneResult() {
      return { value: undefined, done: !0 };
    }
    return (
      (GeneratorFunction.prototype = GeneratorFunctionPrototype),
      defineProperty(Gp, 'constructor', {
        value: GeneratorFunctionPrototype,
        configurable: !0,
      }),
      defineProperty(GeneratorFunctionPrototype, 'constructor', {
        value: GeneratorFunction,
        configurable: !0,
      }),
      (GeneratorFunction.displayName = define(
        GeneratorFunctionPrototype,
        toStringTagSymbol,
        'GeneratorFunction'
      )),
      (exports.isGeneratorFunction = function (genFun) {
        var ctor = 'function' == typeof genFun && genFun.constructor;
        return (
          !!ctor &&
          (ctor === GeneratorFunction ||
            'GeneratorFunction' === (ctor.displayName || ctor.name))
        );
      }),
      (exports.mark = function (genFun) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
            : ((genFun.__proto__ = GeneratorFunctionPrototype),
              define(genFun, toStringTagSymbol, 'GeneratorFunction')),
          (genFun.prototype = Object.create(Gp)),
          genFun
        );
      }),
      (exports.awrap = function (arg) {
        return { __await: arg };
      }),
      defineIteratorMethods(AsyncIterator.prototype),
      define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
        return this;
      }),
      (exports.AsyncIterator = AsyncIterator),
      (exports.async = function (
        innerFn,
        outerFn,
        self,
        tryLocsList,
        PromiseImpl
      ) {
        void 0 === PromiseImpl && (PromiseImpl = Promise);
        var iter = new AsyncIterator(
          wrap(innerFn, outerFn, self, tryLocsList),
          PromiseImpl
        );
        return exports.isGeneratorFunction(outerFn)
          ? iter
          : iter.next().then(function (result) {
              return result.done ? result.value : iter.next();
            });
      }),
      defineIteratorMethods(Gp),
      define(Gp, toStringTagSymbol, 'Generator'),
      define(Gp, iteratorSymbol, function () {
        return this;
      }),
      define(Gp, 'toString', function () {
        return '[object Generator]';
      }),
      (exports.keys = function (val) {
        var object = Object(val),
          keys = [];
        for (var key in object) keys.push(key);
        return (
          keys.reverse(),
          function next() {
            for (; keys.length; ) {
              var key = keys.pop();
              if (key in object)
                return (next.value = key), (next.done = !1), next;
            }
            return (next.done = !0), next;
          }
        );
      }),
      (exports.values = values),
      (Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = undefined),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = undefined),
            this.tryEntries.forEach(resetTryEntry),
            !skipTempReset)
          )
            for (var name in this)
              't' === name.charAt(0) &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1)) &&
                (this[name] = undefined);
        },
        stop: function stop() {
          this.done = !0;
          var rootRecord = this.tryEntries[0].completion;
          if ('throw' === rootRecord.type) throw rootRecord.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) throw exception;
          var context = this;
          function handle(loc, caught) {
            return (
              (record.type = 'throw'),
              (record.arg = exception),
              (context.next = loc),
              caught && ((context.method = 'next'), (context.arg = undefined)),
              !!caught
            );
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i],
              record = entry.completion;
            if ('root' === entry.tryLoc) return handle('end');
            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, 'catchLoc'),
                hasFinally = hasOwn.call(entry, 'finallyLoc');
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc)
                  return handle(entry.catchLoc, !0);
                if (this.prev < entry.finallyLoc)
                  return handle(entry.finallyLoc);
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc)
                  return handle(entry.catchLoc, !0);
              } else {
                if (!hasFinally)
                  throw new Error('try statement without catch or finally');
                if (this.prev < entry.finallyLoc)
                  return handle(entry.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (
              entry.tryLoc <= this.prev &&
              hasOwn.call(entry, 'finallyLoc') &&
              this.prev < entry.finallyLoc
            ) {
              var finallyEntry = entry;
              break;
            }
          }
          finallyEntry &&
            ('break' === type || 'continue' === type) &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc &&
            (finallyEntry = null);
          var record = finallyEntry ? finallyEntry.completion : {};
          return (
            (record.type = type),
            (record.arg = arg),
            finallyEntry
              ? ((this.method = 'next'),
                (this.next = finallyEntry.finallyLoc),
                ContinueSentinel)
              : this.complete(record)
          );
        },
        complete: function complete(record, afterLoc) {
          if ('throw' === record.type) throw record.arg;
          return (
            'break' === record.type || 'continue' === record.type
              ? (this.next = record.arg)
              : 'return' === record.type
              ? ((this.rval = this.arg = record.arg),
                (this.method = 'return'),
                (this.next = 'end'))
              : 'normal' === record.type && afterLoc && (this.next = afterLoc),
            ContinueSentinel
          );
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc)
              return (
                this.complete(entry.completion, entry.afterLoc),
                resetTryEntry(entry),
                ContinueSentinel
              );
          }
        },
        catch: function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if ('throw' === record.type) {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          return (
            (this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc,
            }),
            'next' === this.method && (this.arg = undefined),
            ContinueSentinel
          );
        },
      }),
      exports
    );
  }
  var formControlsStore = ui_vue3_pinia.defineStore('form-controls-store', {
    state: function state() {
      return {
        controls: [
          {
            property: 'hint',
            id: 'id5',
            name: 'AUDITOR_ORNZ',
            label: 'Simple',
            value: '',
            count: 3,
            action: '/markup/vue/design-system/hints.json',
            required: false,
            disabled: false,
            tab: 1,
          },
          {
            property: 'hint',
            id: 'id5-1',
            name: 'AUDITOR_ORNZ_WITH_PHOTO',
            label: 'With HTML - data-value',
            value: '',
            count: 3,
            action: '/markup/vue/design-system/hints-html.json',
            required: false,
            disabled: false,
          },
          {
            property: 'hint',
            id: 'id5-2',
            name: 'AUDITOR_ORNZ_WITH_PHOTO',
            label: 'Autocomplete',
            value: '',
            count: 3,
            action: '/markup/vue/design-system/hints-autocomplete.json',
            required: false,
            disabled: false,
          },
          {
            id: 'id1',
            property: 'text',
            name: 'SOME_TEXT',
            label: 'Some text',
            value: '',
            multi: 3,
            required: false,
            disabled: false,
          },
          {
            id: 'id1-1',
            property: 'textarea',
            name: 'MESSAGE',
            label: 'Message',
            value: '',
            multi: 3,
            required: false,
            disabled: false,
          },
          {
            id: 'id2',
            property: 'tel',
            name: 'PHONE',
            label: 'Phone number',
            value: '',
            multi: 3,
            required: false,
            disabled: false,
          },
          {
            id: 'id3',
            property: 'email',
            name: 'EMAIL',
            label: 'Your email',
            value: '',
            multi: 3,
            required: false,
            disabled: false,
          },
          {
            id: 'id4',
            property: 'hidden',
            name: 'HIDDEN_FIELD',
            value: '',
            required: false,
            disabled: false,
          },
          {
            property: 'password',
            id: 'id6',
            name: 'PASSWORD',
            label: 'Password',
            value: '',
            required: false,
            disabled: false,
          },
          {
            property: 'date',
            type: 'range',
            id: 'id7',
            label: 'Calendar',
            name: 'DATE_FROM_TO',
            required: true,
            value: ['20.02.2024', '28.02.2024'],
          },
          {
            property: 'date',
            type: 'single',
            id: 'id8',
            label: 'Calendar',
            name: 'DATE',
            required: true,
            value: '28.02.2024',
            hint_external: 'Hint',
            dependency: 'id6',
          },
          {
            property: 'file',
            id: 'id11',
            name: 'FILE_LOGO',
            label: 'Logo',
            value: '',
            file: '',
            hint_external: 'For your site',
            required: true,
            disabled: false,
            accept: ['svg', 'png', 'jpg', 'jpeg'],
            image: true,
            maxsize: 10000000,
          },
          {
            property: 'file',
            type: 'upload',
            id: 'id12',
            name: 'FILE_LOGO_UPLOADED',
            label: 'Upload logo',
            value: null,
            upload: {},
            hint_external: 'For your site',
            required: true,
            disabled: false,
            accept: ['svg', 'png', 'jpg', 'jpeg'],
            image: true,
            maxsize: 10000000,
          },
          {
            property: 'select',
            type: 'dropdown',
            id: 'id13',
            name: 'STATUS',
            label: 'Status',
            options: [
              {
                label: 'molestias',
                code: '23423423423',
              },
              {
                label: 'Farming',
                code: '324234324',
              },
              {
                label: 'Very',
                code: '324234325',
              },
            ],
            value: '',
            disabled: false,
          },
          {
            property: 'select',
            type: 'radio',
            id: 'id9',
            name: 'SELECT_BUTTON_TEXT',
            label: 'Buttons',
            options: [
              {
                label: 'Thin',
                code: '1',
              },
              {
                label: 'Thick',
                code: '2',
              },
              {
                label: 'Uppercase',
                code: '3',
              },
            ],
            value: '2',
          },
          {
            property: 'checkbox',
            type: 'switch',
            id: 'id14',
            name: 'SWITCH',
            required: false,
            label: 'labore',
            value: 'on',
            checked: true,
            disabled: false,
            hint_external: '',
            dependency: 'id6',
          },
          {
            property: 'checkbox',
            type: 'checkbox',
            id: 'id10',
            name: 'DEPENDENCY_CHECKBOX',
            required: false,
            label: 'Checkbox',
            value: 'on',
            checked: true,
            disabled: false,
            hint_external: 'Active checkbox',
          },
        ],
      };
    },
    actions: {
      changeControlValue: function changeControlValue(_ref) {
        var control = _ref.control,
          value = _ref.value,
          checked = _ref.checked;
        switch (control.property) {
          case 'text':
          case 'tel':
          case 'email':
          case 'hidden':
          case 'password':
          case 'date':
          case 'textarea':
            control.value = value;
            break;
          case 'hint':
            this.changeHintControlValue({
              control: control,
              value: value,
            });
            break;
          case 'select':
            this[
              'changeSelect'
                .concat(control.type.substring(0, 1).toUpperCase())
                .concat(control.type.substring(1).toLowerCase(), 'Value')
            ]({
              control: control,
              value: value,
            });
            break;
          case 'checkbox':
            control.checked = checked;
            break;
          // case 'file':
          //   commit('changeFileValue', { control, value });
          //   break;
          // case 'color':
          //   commit('changeColorValue', { control, value });
          //   break;
        }
      },
      runHints: function runHints(control, action) {
        var _this = this;
        return babelHelpers.asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
            var controller, timeoutId, response, result;
            return _regeneratorRuntime().wrap(
              function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.prev = 0;
                      // ������� AbortController ��� ����������� ������ �������
                      controller = new AbortController();
                      timeoutId = setTimeout(function () {
                        return controller.abort();
                      }, 20000); // 20 ������ �������
                      _context.next = 5;
                      return fetch(action, {
                        signal: controller.signal,
                        headers: {
                          'Content-Type': 'application/json',
                        },
                      });
                    case 5:
                      response = _context.sent;
                      clearTimeout(timeoutId);
                      if (response.ok) {
                        _context.next = 9;
                        break;
                      }
                      throw new Error(
                        'HTTP error! status: '.concat(response.status)
                      );
                    case 9:
                      _context.next = 11;
                      return response.json();
                    case 11:
                      result = _context.sent;
                      if (!(result.status === 'success' && result.data)) {
                        _context.next = 16;
                        break;
                      }
                      _this.setHints(control, result.data);
                      _context.next = 21;
                      break;
                    case 16:
                      if (!result.errors) {
                        _context.next = 20;
                        break;
                      }
                      console.error('Server returned errors:', result.errors);
                      _context.next = 21;
                      break;
                    case 20:
                      throw new Error('Invalid response format');
                    case 21:
                      _context.next = 26;
                      break;
                    case 23:
                      _context.prev = 23;
                      _context.t0 = _context['catch'](0);
                      console.error('Error fetching hints:', _context.t0);
                    case 26:
                    case 'end':
                      return _context.stop();
                  }
              },
              _callee,
              null,
              [[0, 23]]
            );
          })
        )();
      },
      setHints: function setHints(control, value) {
        control.hints = value;
      },
      changeHintControlValue: function changeHintControlValue(_ref2) {
        var _this2 = this;
        var control = _ref2.control,
          value = _ref2.value;
        control.value = value;
        if (value.autocomplete && value.autocomplete.forEach) {
          value.autocomplete.forEach(function (o) {
            var control = _this2.controls.find(function (c) {
              return c.id === o.id;
            });
            if (control) {
              control.value = o.value;
            }
          });
        }
      },
      addTab: function addTab(control) {
        control.tab = control.tab ? ++control.tab : 1;
      },
    },
  });

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly &&
        (symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })),
        keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2
        ? ownKeys(Object(source), !0).forEach(function (key) {
            babelHelpers.defineProperty(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        : ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
    }
    return target;
  }
  var FormControlsComponent = {
    data: function data() {
      return {};
    },
    components: {
      ControlComponent: local_vueComponents_controlComponent.ControlComponent,
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
    },
    // language=Vue

    template:
      '\n    <div>\n      <div class="twpx-design-system-block" v-for="control in controls" :key="control.id">\n        <div>\n          <h3>{{ control.property }} {{ control.type }}</h3>\n          <ControlComponent :control="control" @input="input" @hints="hints" />\n        </div>\n        <pre>{{ control }}</pre>\n        <div>\n          <ButtonComponent text="+ tab" :props="[\'secondary\',\'medium\']" @clickButton="addTab(control)" />\n        </div>\n      </div>\n    </div>\n\t',
    computed: _objectSpread(
      {},
      ui_vue3_pinia.mapState(formControlsStore, ['controls'])
    ),
    methods: _objectSpread(
      _objectSpread(
        {},
        ui_vue3_pinia.mapActions(formControlsStore, [
          'changeControlValue',
          'runHints',
          'setHints',
          'addTab',
        ])
      ),
      {},
      {
        input: function input(_ref) {
          var control = _ref.control,
            value = _ref.value,
            checked = _ref.checked;
          this.changeControlValue({
            control: control,
            value: value,
            checked: checked,
          });
        },
        hints: function hints(_ref2) {
          var control = _ref2.control,
            type = _ref2.type,
            action = _ref2.action,
            value = _ref2.value;
          if (type === 'get') {
            this.runHints(control, action);
          } else if (type === 'set') {
            this.setHints(control, value);
          }
        },
      }
    ),
  };

  var FormControls = {
    components: {
      FormControlsComponent: FormControlsComponent,
    },
    template: '\n    <FormControlsComponent />\n  ',
  };

  function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly &&
        (symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })),
        keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread$1(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2
        ? ownKeys$1(Object(source), !0).forEach(function (key) {
            babelHelpers.defineProperty(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        : ownKeys$1(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
    }
    return target;
  }
  function _regeneratorRuntime$1() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime$1 =
      function _regeneratorRuntime() {
        return exports;
      };
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty =
        Object.defineProperty ||
        function (obj, key, desc) {
          obj[key] = desc.value;
        },
      $Symbol = 'function' == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || '@@iterator',
      asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
      toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';
    function define(obj, key, value) {
      return (
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        obj[key]
      );
    }
    try {
      define({}, '');
    } catch (err) {
      define = function define(obj, key, value) {
        return (obj[key] = value);
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator =
          outerFn && outerFn.prototype instanceof Generator
            ? outerFn
            : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return (
        defineProperty(generator, '_invoke', {
          value: makeInvokeMethod(innerFn, self, context),
        }),
        generator
      );
    }
    function tryCatch(fn, obj, arg) {
      try {
        return { type: 'normal', arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: 'throw', arg: err };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
      (IteratorPrototype = NativeIteratorPrototype);
    var Gp =
      (GeneratorFunctionPrototype.prototype =
      Generator.prototype =
        Object.create(IteratorPrototype));
    function defineIteratorMethods(prototype) {
      ['next', 'throw', 'return'].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ('throw' !== record.type) {
          var result = record.arg,
            value = result.value;
          return value &&
            'object' == babelHelpers['typeof'](value) &&
            hasOwn.call(value, '__await')
            ? PromiseImpl.resolve(value.__await).then(
                function (value) {
                  invoke('next', value, resolve, reject);
                },
                function (err) {
                  invoke('throw', err, resolve, reject);
                }
              )
            : PromiseImpl.resolve(value).then(
                function (unwrapped) {
                  (result.value = unwrapped), resolve(result);
                },
                function (error) {
                  return invoke('throw', error, resolve, reject);
                }
              );
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, '_invoke', {
        value: function value(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return (previousPromise = previousPromise
            ? previousPromise.then(
                callInvokeWithMethodAndArg,
                callInvokeWithMethodAndArg
              )
            : callInvokeWithMethodAndArg());
        },
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = 'suspendedStart';
      return function (method, arg) {
        if ('executing' === state)
          throw new Error('Generator is already running');
        if ('completed' === state) {
          if ('throw' === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg; ; ) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ('next' === context.method)
            context.sent = context._sent = context.arg;
          else if ('throw' === context.method) {
            if ('suspendedStart' === state)
              throw ((state = 'completed'), context.arg);
            context.dispatchException(context.arg);
          } else
            'return' === context.method &&
              context.abrupt('return', context.arg);
          state = 'executing';
          var record = tryCatch(innerFn, self, context);
          if ('normal' === record.type) {
            if (
              ((state = context.done ? 'completed' : 'suspendedYield'),
              record.arg === ContinueSentinel)
            )
              continue;
            return { value: record.arg, done: context.done };
          }
          'throw' === record.type &&
            ((state = 'completed'),
            (context.method = 'throw'),
            (context.arg = record.arg));
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method)
        return (
          (context.delegate = null),
          ('throw' === methodName &&
            delegate.iterator['return'] &&
            ((context.method = 'return'),
            (context.arg = undefined),
            maybeInvokeDelegate(delegate, context),
            'throw' === context.method)) ||
            ('return' !== methodName &&
              ((context.method = 'throw'),
              (context.arg = new TypeError(
                "The iterator does not provide a '" + methodName + "' method"
              )))),
          ContinueSentinel
        );
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ('throw' === record.type)
        return (
          (context.method = 'throw'),
          (context.arg = record.arg),
          (context.delegate = null),
          ContinueSentinel
        );
      var info = record.arg;
      return info
        ? info.done
          ? ((context[delegate.resultName] = info.value),
            (context.next = delegate.nextLoc),
            'return' !== context.method &&
              ((context.method = 'next'), (context.arg = undefined)),
            (context.delegate = null),
            ContinueSentinel)
          : info
        : ((context.method = 'throw'),
          (context.arg = new TypeError('iterator result is not an object')),
          (context.delegate = null),
          ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };
      1 in locs && (entry.catchLoc = locs[1]),
        2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      (record.type = 'normal'), delete record.arg, (entry.completion = record);
    }
    function Context(tryLocsList) {
      (this.tryEntries = [{ tryLoc: 'root' }]),
        tryLocsList.forEach(pushTryEntry, this),
        this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ('function' == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length; )
                if (hasOwn.call(iterable, i))
                  return (next.value = iterable[i]), (next.done = !1), next;
              return (next.value = undefined), (next.done = !0), next;
            };
          return (next.next = next);
        }
      }
      return { next: doneResult };
    }
    function doneResult() {
      return { value: undefined, done: !0 };
    }
    return (
      (GeneratorFunction.prototype = GeneratorFunctionPrototype),
      defineProperty(Gp, 'constructor', {
        value: GeneratorFunctionPrototype,
        configurable: !0,
      }),
      defineProperty(GeneratorFunctionPrototype, 'constructor', {
        value: GeneratorFunction,
        configurable: !0,
      }),
      (GeneratorFunction.displayName = define(
        GeneratorFunctionPrototype,
        toStringTagSymbol,
        'GeneratorFunction'
      )),
      (exports.isGeneratorFunction = function (genFun) {
        var ctor = 'function' == typeof genFun && genFun.constructor;
        return (
          !!ctor &&
          (ctor === GeneratorFunction ||
            'GeneratorFunction' === (ctor.displayName || ctor.name))
        );
      }),
      (exports.mark = function (genFun) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
            : ((genFun.__proto__ = GeneratorFunctionPrototype),
              define(genFun, toStringTagSymbol, 'GeneratorFunction')),
          (genFun.prototype = Object.create(Gp)),
          genFun
        );
      }),
      (exports.awrap = function (arg) {
        return { __await: arg };
      }),
      defineIteratorMethods(AsyncIterator.prototype),
      define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
        return this;
      }),
      (exports.AsyncIterator = AsyncIterator),
      (exports.async = function (
        innerFn,
        outerFn,
        self,
        tryLocsList,
        PromiseImpl
      ) {
        void 0 === PromiseImpl && (PromiseImpl = Promise);
        var iter = new AsyncIterator(
          wrap(innerFn, outerFn, self, tryLocsList),
          PromiseImpl
        );
        return exports.isGeneratorFunction(outerFn)
          ? iter
          : iter.next().then(function (result) {
              return result.done ? result.value : iter.next();
            });
      }),
      defineIteratorMethods(Gp),
      define(Gp, toStringTagSymbol, 'Generator'),
      define(Gp, iteratorSymbol, function () {
        return this;
      }),
      define(Gp, 'toString', function () {
        return '[object Generator]';
      }),
      (exports.keys = function (val) {
        var object = Object(val),
          keys = [];
        for (var key in object) keys.push(key);
        return (
          keys.reverse(),
          function next() {
            for (; keys.length; ) {
              var key = keys.pop();
              if (key in object)
                return (next.value = key), (next.done = !1), next;
            }
            return (next.done = !0), next;
          }
        );
      }),
      (exports.values = values),
      (Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = undefined),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = undefined),
            this.tryEntries.forEach(resetTryEntry),
            !skipTempReset)
          )
            for (var name in this)
              't' === name.charAt(0) &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1)) &&
                (this[name] = undefined);
        },
        stop: function stop() {
          this.done = !0;
          var rootRecord = this.tryEntries[0].completion;
          if ('throw' === rootRecord.type) throw rootRecord.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) throw exception;
          var context = this;
          function handle(loc, caught) {
            return (
              (record.type = 'throw'),
              (record.arg = exception),
              (context.next = loc),
              caught && ((context.method = 'next'), (context.arg = undefined)),
              !!caught
            );
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i],
              record = entry.completion;
            if ('root' === entry.tryLoc) return handle('end');
            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, 'catchLoc'),
                hasFinally = hasOwn.call(entry, 'finallyLoc');
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc)
                  return handle(entry.catchLoc, !0);
                if (this.prev < entry.finallyLoc)
                  return handle(entry.finallyLoc);
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc)
                  return handle(entry.catchLoc, !0);
              } else {
                if (!hasFinally)
                  throw new Error('try statement without catch or finally');
                if (this.prev < entry.finallyLoc)
                  return handle(entry.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (
              entry.tryLoc <= this.prev &&
              hasOwn.call(entry, 'finallyLoc') &&
              this.prev < entry.finallyLoc
            ) {
              var finallyEntry = entry;
              break;
            }
          }
          finallyEntry &&
            ('break' === type || 'continue' === type) &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc &&
            (finallyEntry = null);
          var record = finallyEntry ? finallyEntry.completion : {};
          return (
            (record.type = type),
            (record.arg = arg),
            finallyEntry
              ? ((this.method = 'next'),
                (this.next = finallyEntry.finallyLoc),
                ContinueSentinel)
              : this.complete(record)
          );
        },
        complete: function complete(record, afterLoc) {
          if ('throw' === record.type) throw record.arg;
          return (
            'break' === record.type || 'continue' === record.type
              ? (this.next = record.arg)
              : 'return' === record.type
              ? ((this.rval = this.arg = record.arg),
                (this.method = 'return'),
                (this.next = 'end'))
              : 'normal' === record.type && afterLoc && (this.next = afterLoc),
            ContinueSentinel
          );
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc)
              return (
                this.complete(entry.completion, entry.afterLoc),
                resetTryEntry(entry),
                ContinueSentinel
              );
          }
        },
        catch: function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if ('throw' === record.type) {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          return (
            (this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc,
            }),
            'next' === this.method && (this.arg = undefined),
            ContinueSentinel
          );
        },
      }),
      exports
    );
  }
  var formControlsMultiStore = ui_vue3_pinia.defineStore(
    'form-controls-multi-store',
    {
      state: function state() {
        return {
          controls: [
            {
              property: 'hint',
              id: 'id5',
              name: 'AUDITOR_ORNZ',
              label: 'Simple',
              value: '',
              count: 3,
              action: '/markup/vue/design-system/hints.json',
              required: false,
              disabled: false,
              multi: 3,
            },
            {
              property: 'hint',
              id: 'id5-1',
              name: 'AUDITOR_ORNZ_WITH_PHOTO',
              label: 'With HTML - data-value',
              value: '',
              count: 3,
              action: '/markup/vue/design-system/hints-html.json',
              required: false,
              disabled: false,
              multi: 3,
            },
            {
              property: 'hint',
              id: 'id5-2',
              name: 'AUDITOR_ORNZ_WITH_PHOTO',
              label: 'Autocomplete',
              value: '',
              count: 3,
              action: '/markup/vue/design-system/hints-autocomplete.json',
              required: false,
              disabled: false,
              multi: 3,
            },
            babelHelpers.defineProperty(
              {
                id: 'id1',
                property: 'text',
                name: 'SOME_TEXT',
                label: 'Some text',
                value: '',
                multi: 3,
                required: false,
                disabled: false,
              },
              'multi',
              3
            ),
            babelHelpers.defineProperty(
              {
                id: 'id1-1',
                property: 'textarea',
                name: 'MESSAGE',
                label: 'Message',
                value: '',
                multi: 3,
                required: false,
                disabled: false,
              },
              'multi',
              3
            ),
            babelHelpers.defineProperty(
              {
                id: 'id2',
                property: 'tel',
                name: 'PHONE',
                label: 'Phone number',
                value: '',
                multi: 3,
                required: false,
                disabled: false,
              },
              'multi',
              3
            ),
            babelHelpers.defineProperty(
              {
                id: 'id3',
                property: 'email',
                name: 'EMAIL',
                label: 'Your email',
                value: '',
                multi: 3,
                required: false,
                disabled: false,
              },
              'multi',
              3
            ),
            {
              id: 'id4',
              property: 'hidden',
              name: 'HIDDEN_FIELD',
              value: '',
              required: false,
              disabled: false,
              multi: 3,
            },
            {
              property: 'password',
              id: 'id6',
              name: 'PASSWORD',
              label: 'Password',
              value: '',
              required: false,
              disabled: false,
              multi: 3,
            },
            {
              property: 'date',
              type: 'range',
              id: 'id7',
              label: 'Calendar',
              name: 'DATE_FROM_TO',
              required: true,
              value: [],
              multi: 3,
            },
            {
              property: 'date',
              type: 'single',
              id: 'id8',
              label: 'Calendar',
              name: 'DATE',
              required: true,
              value: '',
              hint_external: '',
              dependency: 'id6',
              multi: 3,
            },
            {
              property: 'file',
              id: 'id11',
              name: 'FILE_LOGO',
              label: 'Logo',
              value: '',
              file: '',
              hint_external: '',
              required: true,
              disabled: false,
              accept: ['svg', 'png', 'jpg', 'jpeg'],
              image: true,
              multi: 5,
              maxsize: 10000000,
            },
            {
              property: 'file',
              type: 'upload',
              id: 'id12',
              name: 'FILE_LOGO_UPLOADED',
              label: 'Upload logo',
              value: null,
              upload: {},
              hint_external: '',
              required: true,
              disabled: false,
              accept: ['svg', 'png', 'jpg', 'jpeg'],
              image: true,
              maxsize: 10000000,
              multi: 3,
            },
            {
              property: 'select',
              type: 'dropdown',
              id: 'id13',
              name: 'STATUS',
              label: 'Status',
              options: [
                {
                  label: 'molestias',
                  code: '23423423423',
                },
                {
                  label: 'Farming',
                  code: '324234324',
                },
                {
                  label: 'Very',
                  code: '324234325',
                },
              ],
              value: '',
              disabled: false,
              multi: 3,
            },
            {
              property: 'select',
              type: 'radio',
              id: 'id9',
              name: 'SELECT_BUTTON_TEXT',
              label: 'Buttons',
              options: [
                {
                  label: 'Thin',
                  code: '1',
                },
                {
                  label: 'Thick',
                  code: '2',
                },
                {
                  label: 'Uppercase',
                  code: '3',
                },
              ],
              value: '2',
              multi: 3,
            },
            {
              property: 'checkbox',
              type: 'switch',
              id: 'id14',
              name: 'SWITCH',
              required: false,
              label: 'labore',
              value: 'on',
              checked: true,
              disabled: false,
              hint_external: '',
              dependency: 'id6',
              multi: 3,
            },
            {
              property: 'checkbox',
              type: 'checkbox',
              id: 'id10',
              name: 'DEPENDENCY_CHECKBOX',
              required: false,
              label: 'Checkbox',
              value: 'on',
              checked: true,
              disabled: false,
              hint_external: 'Active checkbox',
              multi: 3,
            },
          ],
        };
      },
      actions: {
        changeControlValue: function changeControlValue(_ref5) {
          var control = _ref5.control,
            value = _ref5.value,
            checked = _ref5.checked;
          switch (control.property) {
            case 'text':
            case 'tel':
            case 'email':
            case 'hidden':
            case 'password':
            case 'date':
            case 'textarea':
              control.value = value;
              break;
            case 'hint':
              this.changeHintControlValue({
                control: control,
                value: value,
              });
              break;
            case 'select':
              this[
                'changeSelect'
                  .concat(control.type.substring(0, 1).toUpperCase())
                  .concat(control.type.substring(1).toLowerCase(), 'Value')
              ]({
                control: control,
                value: value,
              });
              break;
            case 'checkbox':
              control.checked = checked;
              break;
            // case 'file':
            //   commit('changeFileValue', { control, value });
            //   break;
            // case 'color':
            //   commit('changeColorValue', { control, value });
            //   break;
          }
        },
        runHints: function runHints(control, action) {
          var _this = this;
          return babelHelpers.asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime$1().mark(function _callee() {
              var controller, timeoutId, response, result;
              return _regeneratorRuntime$1().wrap(
                function _callee$(_context) {
                  while (1)
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        _context.prev = 0;
                        // ������� AbortController ��� ����������� ������ �������
                        controller = new AbortController();
                        timeoutId = setTimeout(function () {
                          return controller.abort();
                        }, 20000); // 20 ������ �������
                        _context.next = 5;
                        return fetch(action, {
                          signal: controller.signal,
                          headers: {
                            'Content-Type': 'application/json',
                          },
                        });
                      case 5:
                        response = _context.sent;
                        clearTimeout(timeoutId);
                        if (response.ok) {
                          _context.next = 9;
                          break;
                        }
                        throw new Error(
                          'HTTP error! status: '.concat(response.status)
                        );
                      case 9:
                        _context.next = 11;
                        return response.json();
                      case 11:
                        result = _context.sent;
                        if (!(result.status === 'success' && result.data)) {
                          _context.next = 16;
                          break;
                        }
                        _this.setHints(control, result.data);
                        _context.next = 21;
                        break;
                      case 16:
                        if (!result.errors) {
                          _context.next = 20;
                          break;
                        }
                        console.error('Server returned errors:', result.errors);
                        _context.next = 21;
                        break;
                      case 20:
                        throw new Error('Invalid response format');
                      case 21:
                        _context.next = 26;
                        break;
                      case 23:
                        _context.prev = 23;
                        _context.t0 = _context['catch'](0);
                        console.error('Error fetching hints:', _context.t0);
                      case 26:
                      case 'end':
                        return _context.stop();
                    }
                },
                _callee,
                null,
                [[0, 23]]
              );
            })
          )();
        },
        setHints: function setHints(control, value) {
          control.hints = value;
        },
        changeHintControlValue: function changeHintControlValue(_ref6) {
          var _this2 = this;
          var control = _ref6.control,
            value = _ref6.value;
          control.value = value;
          if (value.autocomplete && value.autocomplete.forEach) {
            value.autocomplete.forEach(function (o) {
              var control = _this2.controls.find(function (c) {
                return c.id === o.id;
              });
              if (control) {
                control.value = o.value;
              }
            });
          }
        },
        createMulti: function createMulti(_ref7) {
          var parent = _ref7.parent;
          parent.property = 'multi';
          parent.multi = [];
        },
        addMulti: function addMulti(_ref8) {
          var parent = _ref8.parent,
            add = _ref8.add;
          var randomId = Math.round(Math.random() * 1000);
          var sub = [];
          if (add.sub && add.sub.forEach) {
            add.sub.forEach(function (s) {
              s.id = ''.concat(s.id).concat(randomId);
              sub.push(_objectSpread$1({}, s));
            });
            add.sub = sub;
          }
          add.id = ''.concat(add.id).concat(randomId);
          parent.multi.push(add);
        },
        removeMulti: function removeMulti(_ref9) {
          var parent = _ref9.parent,
            index = _ref9.index;
          parent.multi.splice(index, 1);
        },
      },
    }
  );

  function ownKeys$2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly &&
        (symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })),
        keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread$2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2
        ? ownKeys$2(Object(source), !0).forEach(function (key) {
            babelHelpers.defineProperty(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        : ownKeys$2(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
    }
    return target;
  }
  var FormControlsMultiComponent = {
    data: function data() {
      return {};
    },
    components: {
      ControlChoice: local_vueComponents_controlChoice.ControlChoice,
    },
    // language=Vue
    template:
      '\n    <div>\n      <div class="twpx-design-system-block" v-for="control in controls" :key="control.id">\n        <div>\n          <h3>{{ heading3(control) }}</h3>\n          <ControlChoice :control="control" @create="createMulti" @add="addMulti" @remove="removeMulti" @input="input" @focus="focus" @blur="blur" @enter="enter" @hints="hints" />\n        </div>\n        <pre>{{ control }}</pre>\n        <div>\n        </div>\n      </div>\n    </div>\n\t',
    computed: _objectSpread$2(
      {},
      ui_vue3_pinia.mapState(formControlsMultiStore, ['controls'])
    ),
    methods: _objectSpread$2(
      _objectSpread$2(
        {},
        ui_vue3_pinia.mapActions(formControlsMultiStore, [
          'changeControlValue',
          'runHints',
          'setHints',
          'createMulti',
          'addMulti',
          'removeMulti',
        ])
      ),
      {},
      {
        heading3: function heading3(control) {
          return ''
            .concat(
              babelHelpers['typeof'](control.multi) === 'object'
                ? control.multi[0].property
                : control.property,
              ' '
            )
            .concat(
              babelHelpers['typeof'](control.multi) === 'object'
                ? control.multi[0].type || ''
                : control.type || ''
            );
        },
        input: function input(_ref) {
          var control = _ref.control,
            value = _ref.value,
            checked = _ref.checked;
          this.changeControlValue({
            control: control,
            value: value,
            checked: checked,
          });
        },
        hints: function hints(_ref2) {
          var control = _ref2.control,
            type = _ref2.type,
            action = _ref2.action,
            value = _ref2.value;
          if (type === 'get') {
            this.runHints(control, action);
          } else if (type === 'set') {
            this.setHints(control, value);
          }
        },
        focus: function focus() {
          // console.log('focus');
        },
        blur: function blur() {
          // console.log('blur');
        },
        enter: function enter() {
          // console.log('enter');
        },
      }
    ),
  };

  var FormControlsMulti = {
    components: {
      FormControlsMultiComponent: FormControlsMultiComponent,
    },
    template: '\n    <FormControlsMultiComponent />\n  ',
  };

  var buttonsStore = ui_vue3_pinia.defineStore('buttons-store', {
    state: function state() {
      return {
        buttons: [
          {
            id: '1',
            text: 'Primary',
            props: ['primary', 'medium'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
          {
            id: '2',
            text: 'Secondary',
            props: ['secondary', 'medium'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
          {
            id: '3',
            text: 'Small',
            props: ['primary', 'small'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
          {
            id: '4',
            text: 'Medium',
            props: ['primary', 'medium'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
          {
            id: '4',
            text: 'Large',
            props: ['primary', 'large'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
          {
            id: '5',
            text: 'More',
            props: ['more', 'large'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
          {
            id: '6',
            text: 'Dark',
            props: ['dark', 'large'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
          {
            id: '7',
            text: 'Success',
            props: ['success', 'large'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
          {
            id: '8',
            text: 'Danger',
            props: ['danger', 'large'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
          {
            id: '9',
            text: 'Serve',
            props: ['serve', 'large'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
          {
            id: '10',
            text: 'Disabled',
            props: ['disabled', 'large'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
          {
            id: '11',
            text: 'Link-color',
            props: ['link-color', 'large'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
          {
            id: '11',
            text: 'Blue-color',
            props: ['blue-color', 'large'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
          {
            id: '12',
            text: 'Gray-color',
            props: ['gray-color', 'large'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
          {
            id: '13',
            text: 'Red-color',
            props: ['red-color', 'large'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
          {
            id: '14',
            text: 'Wide',
            props: ['wide', 'secondary', 'large'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
          {
            id: '15',
            text: 'Tag',
            props: ['tag'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
          {
            id: '16',
            text: 'Load-circle',
            props: ['load-circle', 'secondary', 'large'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
          {
            id: '17',
            text: 'Delete',
            props: ['icon', 'delete', 'medium'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
          {
            id: '18',
            text: 'Remove',
            props: ['icon', 'remove', 'medium'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
          {
            id: '19',
            text: 'Edit',
            props: ['icon', 'edit', 'medium'],
            clickButton: function clickButton() {
              alert('click');
            },
          },
        ],
      };
    },
    actions: {},
  });

  function ownKeys$3(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly &&
        (symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })),
        keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread$3(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2
        ? ownKeys$3(Object(source), !0).forEach(function (key) {
            babelHelpers.defineProperty(target, key, source[key]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          )
        : ownKeys$3(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
    }
    return target;
  }
  var ButtonsComponent = {
    data: function data() {},
    components: {
      ButtonComponent: local_vueComponents_buttonComponent.ButtonComponent,
    },
    template:
      '\n    <div>\n      <div class="twpx-design-system-block" v-for="button in buttons" :key="button.id">\n        <div>\n          <ButtonComponent :text="button.text" :props="button.props" @clickButton="button.clickButton" />\n        </div>\n        <pre>{{ getButtonCode(button) }}</pre>\n      </div>\n    </div>\n  ',
    computed: _objectSpread$3(
      {},
      ui_vue3_pinia.mapState(buttonsStore, ['buttons'])
    ),
    methods: {
      getButtonCode: function getButtonCode(button) {
        return 'ButtonComponent :text="'
          .concat(button.text, '" :props="[')
          .concat(button.props, ']" @clickButton=""');
      },
    },
  };

  var Buttons = {
    components: {
      ButtonsComponent: ButtonsComponent,
    },
    template: '\n    <div><ButtonsComponent/></div>\n  ',
  };

  var Filter = {
    template: '\n    <div>Filter</div>\n  ',
  };

  function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }
  function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError(
        'Cannot initialize the same private elements twice on an object'
      );
    }
  }
  var _store = /*#__PURE__*/ new WeakMap();
  var _router = /*#__PURE__*/ new WeakMap();
  var _rootNode = /*#__PURE__*/ new WeakMap();
  var _application = /*#__PURE__*/ new WeakMap();
  var DesignSystem = /*#__PURE__*/ (function () {
    function DesignSystem(rootNode, options) {
      babelHelpers.classCallCheck(this, DesignSystem);
      _classPrivateFieldInitSpec(this, _store, {
        writable: true,
        value: void 0,
      });
      _classPrivateFieldInitSpec(this, _router, {
        writable: true,
        value: void 0,
      });
      _classPrivateFieldInitSpec(this, _rootNode, {
        writable: true,
        value: void 0,
      });
      _classPrivateFieldInitSpec(this, _application, {
        writable: true,
        value: void 0,
      });
      babelHelpers.classPrivateFieldSet(
        this,
        _store,
        ui_vue3_pinia.createPinia()
      );
      babelHelpers.classPrivateFieldSet(
        this,
        _router,
        ui_vue3_router.createRouter({
          history: ui_vue3_router.createMemoryHistory(),
          routes: [
            {
              path: '/',
              component: FormControls,
            },
            {
              path: '/multi',
              component: FormControlsMulti,
            },
            {
              path: '/buttons',
              component: Buttons,
            },
            {
              path: '/filter',
              component: Filter,
            },
          ],
        })
      );
      babelHelpers.classPrivateFieldSet(
        this,
        _rootNode,
        document.querySelector(rootNode)
      );
      this.options = options;
    }
    babelHelpers.createClass(DesignSystem, [
      {
        key: 'run',
        value: function run() {
          babelHelpers.classPrivateFieldSet(
            this,
            _application,
            ui_vue3.BitrixVue.createApp({
              name: 'Design System Application',
              components: {
                Application: Application,
              },
              template: '<Application />',
              mounted: function mounted() {},
            })
          );
          babelHelpers
            .classPrivateFieldGet(this, _application)
            .use(babelHelpers.classPrivateFieldGet(this, _store));
          babelHelpers
            .classPrivateFieldGet(this, _application)
            .use(babelHelpers.classPrivateFieldGet(this, _router));
          babelHelpers
            .classPrivateFieldGet(this, _application)
            .mount(babelHelpers.classPrivateFieldGet(this, _rootNode));
        },
      },
      {
        key: 'initStorageBeforeStartApplication',
        value: function initStorageBeforeStartApplication() {
          ui_vue3_pinia.setActivePinia(
            babelHelpers.classPrivateFieldGet(this, _store)
          );
        },
      },
      {
        key: 'getTableStore',
        value: function getTableStore() {
          return tableStore;
        },
      },
    ]);
    return DesignSystem;
  })();

  exports.DesignSystem = DesignSystem;
})(
  (this.BX = this.BX || {}),
  BX.Vue3,
  BX.Vue3.VueRouter,
  BX.Controls,
  BX.Controls,
  BX.AAS,
  BX.Vue3.Pinia
);
//# sourceMappingURL=application.bundle.js.map
