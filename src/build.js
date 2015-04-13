"format register";















System.register("npm:process@0.10.1/browser", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  function drainQueue() {
    if (draining) {
      return ;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      var i = -1;
      while (++i < len) {
        currentQueue[i]();
      }
      len = queue.length;
    }
    draining = false;
  }
  process.nextTick = function(fun) {
    queue.push(fun);
    if (!draining) {
      setTimeout(drainQueue, 0);
    }
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/PooledClass", ["npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var oneArgumentPooler = function(copyFieldsFrom) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, copyFieldsFrom);
        return instance;
      } else {
        return new Klass(copyFieldsFrom);
      }
    };
    var twoArgumentPooler = function(a1, a2) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, a1, a2);
        return instance;
      } else {
        return new Klass(a1, a2);
      }
    };
    var threeArgumentPooler = function(a1, a2, a3) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, a1, a2, a3);
        return instance;
      } else {
        return new Klass(a1, a2, a3);
      }
    };
    var fiveArgumentPooler = function(a1, a2, a3, a4, a5) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, a1, a2, a3, a4, a5);
        return instance;
      } else {
        return new Klass(a1, a2, a3, a4, a5);
      }
    };
    var standardReleaser = function(instance) {
      var Klass = this;
      ("production" !== process.env.NODE_ENV ? invariant(instance instanceof Klass, 'Trying to release an instance into a pool of a different type.') : invariant(instance instanceof Klass));
      if (instance.destructor) {
        instance.destructor();
      }
      if (Klass.instancePool.length < Klass.poolSize) {
        Klass.instancePool.push(instance);
      }
    };
    var DEFAULT_POOL_SIZE = 10;
    var DEFAULT_POOLER = oneArgumentPooler;
    var addPoolingTo = function(CopyConstructor, pooler) {
      var NewKlass = CopyConstructor;
      NewKlass.instancePool = [];
      NewKlass.getPooled = pooler || DEFAULT_POOLER;
      if (!NewKlass.poolSize) {
        NewKlass.poolSize = DEFAULT_POOL_SIZE;
      }
      NewKlass.release = standardReleaser;
      return NewKlass;
    };
    var PooledClass = {
      addPoolingTo: addPoolingTo,
      oneArgumentPooler: oneArgumentPooler,
      twoArgumentPooler: twoArgumentPooler,
      threeArgumentPooler: threeArgumentPooler,
      fiveArgumentPooler: fiveArgumentPooler
    };
    module.exports = PooledClass;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/Object.assign", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function assign(target, sources) {
    if (target == null) {
      throw new TypeError('Object.assign target cannot be null or undefined');
    }
    var to = Object(target);
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
      var nextSource = arguments[nextIndex];
      if (nextSource == null) {
        continue;
      }
      var from = Object(nextSource);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
    }
    return to;
  }
  module.exports = assign;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/emptyObject", ["github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    "use strict";
    var emptyObject = {};
    if ("production" !== process.env.NODE_ENV) {
      Object.freeze(emptyObject);
    }
    module.exports = emptyObject;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/emptyFunction", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function makeEmptyFunction(arg) {
    return function() {
      return arg;
    };
  }
  function emptyFunction() {}
  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function() {
    return this;
  };
  emptyFunction.thatReturnsArgument = function(arg) {
    return arg;
  };
  module.exports = emptyFunction;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactCurrentOwner", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ReactCurrentOwner = {current: null};
  module.exports = ReactCurrentOwner;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactRootIndex", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ReactRootIndexInjection = {injectCreateReactRootIndex: function(_createReactRootIndex) {
      ReactRootIndex.createReactRootIndex = _createReactRootIndex;
    }};
  var ReactRootIndex = {
    createReactRootIndex: null,
    injection: ReactRootIndexInjection
  };
  module.exports = ReactRootIndex;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/getIteratorFn", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]));
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  module.exports = getIteratorFn;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactLifeCycle", ["github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactLifeCycle = {
      currentlyMountingInstance: null,
      currentlyUnmountingInstance: null
    };
    module.exports = ReactLifeCycle;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactInstanceMap", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ReactInstanceMap = {
    remove: function(key) {
      key._reactInternalInstance = undefined;
    },
    get: function(key) {
      return key._reactInternalInstance;
    },
    has: function(key) {
      return key._reactInternalInstance !== undefined;
    },
    set: function(key, value) {
      key._reactInternalInstance = value;
    }
  };
  module.exports = ReactInstanceMap;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/CallbackQueue", ["npm:react@0.13.1/lib/PooledClass", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var PooledClass = require("npm:react@0.13.1/lib/PooledClass");
    var assign = require("npm:react@0.13.1/lib/Object.assign");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    function CallbackQueue() {
      this._callbacks = null;
      this._contexts = null;
    }
    assign(CallbackQueue.prototype, {
      enqueue: function(callback, context) {
        this._callbacks = this._callbacks || [];
        this._contexts = this._contexts || [];
        this._callbacks.push(callback);
        this._contexts.push(context);
      },
      notifyAll: function() {
        var callbacks = this._callbacks;
        var contexts = this._contexts;
        if (callbacks) {
          ("production" !== process.env.NODE_ENV ? invariant(callbacks.length === contexts.length, 'Mismatched list of contexts in callback queue') : invariant(callbacks.length === contexts.length));
          this._callbacks = null;
          this._contexts = null;
          for (var i = 0,
              l = callbacks.length; i < l; i++) {
            callbacks[i].call(contexts[i]);
          }
          callbacks.length = 0;
          contexts.length = 0;
        }
      },
      reset: function() {
        this._callbacks = null;
        this._contexts = null;
      },
      destructor: function() {
        this.reset();
      }
    });
    PooledClass.addPoolingTo(CallbackQueue);
    module.exports = CallbackQueue;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactPerf", ["github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactPerf = {
      enableMeasure: false,
      storedMeasure: _noMeasure,
      measureMethods: function(object, objectName, methodNames) {
        if ("production" !== process.env.NODE_ENV) {
          for (var key in methodNames) {
            if (!methodNames.hasOwnProperty(key)) {
              continue;
            }
            object[key] = ReactPerf.measure(objectName, methodNames[key], object[key]);
          }
        }
      },
      measure: function(objName, fnName, func) {
        if ("production" !== process.env.NODE_ENV) {
          var measuredFunc = null;
          var wrapper = function() {
            if (ReactPerf.enableMeasure) {
              if (!measuredFunc) {
                measuredFunc = ReactPerf.storedMeasure(objName, fnName, func);
              }
              return measuredFunc.apply(this, arguments);
            }
            return func.apply(this, arguments);
          };
          wrapper.displayName = objName + '_' + fnName;
          return wrapper;
        }
        return func;
      },
      injection: {injectMeasure: function(measure) {
          ReactPerf.storedMeasure = measure;
        }}
    };
    function _noMeasure(objName, fnName, func) {
      return func;
    }
    module.exports = ReactPerf;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactOwner", ["npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var ReactOwner = {
      isValidOwner: function(object) {
        return !!((object && typeof object.attachRef === 'function' && typeof object.detachRef === 'function'));
      },
      addComponentAsRefTo: function(component, ref, owner) {
        ("production" !== process.env.NODE_ENV ? invariant(ReactOwner.isValidOwner(owner), 'addComponentAsRefTo(...): Only a ReactOwner can have refs. This ' + 'usually means that you\'re trying to add a ref to a component that ' + 'doesn\'t have an owner (that is, was not created inside of another ' + 'component\'s `render` method). Try rendering this component inside of ' + 'a new top-level component which will hold the ref.') : invariant(ReactOwner.isValidOwner(owner)));
        owner.attachRef(ref, component);
      },
      removeComponentAsRefFrom: function(component, ref, owner) {
        ("production" !== process.env.NODE_ENV ? invariant(ReactOwner.isValidOwner(owner), 'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. This ' + 'usually means that you\'re trying to remove a ref to a component that ' + 'doesn\'t have an owner (that is, was not created inside of another ' + 'component\'s `render` method). Try rendering this component inside of ' + 'a new top-level component which will hold the ref.') : invariant(ReactOwner.isValidOwner(owner)));
        if (owner.getPublicInstance().refs[ref] === component.getPublicInstance()) {
          owner.detachRef(ref);
        }
      }
    };
    module.exports = ReactOwner;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactPropTypeLocations", ["npm:react@0.13.1/lib/keyMirror"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var keyMirror = require("npm:react@0.13.1/lib/keyMirror");
  var ReactPropTypeLocations = keyMirror({
    prop: null,
    context: null,
    childContext: null
  });
  module.exports = ReactPropTypeLocations;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactPropTypeLocationNames", ["github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactPropTypeLocationNames = {};
    if ("production" !== process.env.NODE_ENV) {
      ReactPropTypeLocationNames = {
        prop: 'prop',
        context: 'context',
        childContext: 'child context'
      };
    }
    module.exports = ReactPropTypeLocationNames;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactNativeComponent", ["npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var assign = require("npm:react@0.13.1/lib/Object.assign");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var autoGenerateWrapperClass = null;
    var genericComponentClass = null;
    var tagToComponentClass = {};
    var textComponentClass = null;
    var ReactNativeComponentInjection = {
      injectGenericComponentClass: function(componentClass) {
        genericComponentClass = componentClass;
      },
      injectTextComponentClass: function(componentClass) {
        textComponentClass = componentClass;
      },
      injectComponentClasses: function(componentClasses) {
        assign(tagToComponentClass, componentClasses);
      },
      injectAutoWrapper: function(wrapperFactory) {
        autoGenerateWrapperClass = wrapperFactory;
      }
    };
    function getComponentClassForElement(element) {
      if (typeof element.type === 'function') {
        return element.type;
      }
      var tag = element.type;
      var componentClass = tagToComponentClass[tag];
      if (componentClass == null) {
        tagToComponentClass[tag] = componentClass = autoGenerateWrapperClass(tag);
      }
      return componentClass;
    }
    function createInternalComponent(element) {
      ("production" !== process.env.NODE_ENV ? invariant(genericComponentClass, 'There is no registered component for the tag %s', element.type) : invariant(genericComponentClass));
      return new genericComponentClass(element.type, element.props);
    }
    function createInstanceForText(text) {
      return new textComponentClass(text);
    }
    function isTextComponent(component) {
      return component instanceof textComponentClass;
    }
    var ReactNativeComponent = {
      getComponentClassForElement: getComponentClassForElement,
      createInternalComponent: createInternalComponent,
      createInstanceForText: createInstanceForText,
      isTextComponent: isTextComponent,
      injection: ReactNativeComponentInjection
    };
    module.exports = ReactNativeComponent;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/Transaction", ["npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var Mixin = {
      reinitializeTransaction: function() {
        this.transactionWrappers = this.getTransactionWrappers();
        if (!this.wrapperInitData) {
          this.wrapperInitData = [];
        } else {
          this.wrapperInitData.length = 0;
        }
        this._isInTransaction = false;
      },
      _isInTransaction: false,
      getTransactionWrappers: null,
      isInTransaction: function() {
        return !!this._isInTransaction;
      },
      perform: function(method, scope, a, b, c, d, e, f) {
        ("production" !== process.env.NODE_ENV ? invariant(!this.isInTransaction(), 'Transaction.perform(...): Cannot initialize a transaction when there ' + 'is already an outstanding transaction.') : invariant(!this.isInTransaction()));
        var errorThrown;
        var ret;
        try {
          this._isInTransaction = true;
          errorThrown = true;
          this.initializeAll(0);
          ret = method.call(scope, a, b, c, d, e, f);
          errorThrown = false;
        } finally {
          try {
            if (errorThrown) {
              try {
                this.closeAll(0);
              } catch (err) {}
            } else {
              this.closeAll(0);
            }
          } finally {
            this._isInTransaction = false;
          }
        }
        return ret;
      },
      initializeAll: function(startIndex) {
        var transactionWrappers = this.transactionWrappers;
        for (var i = startIndex; i < transactionWrappers.length; i++) {
          var wrapper = transactionWrappers[i];
          try {
            this.wrapperInitData[i] = Transaction.OBSERVED_ERROR;
            this.wrapperInitData[i] = wrapper.initialize ? wrapper.initialize.call(this) : null;
          } finally {
            if (this.wrapperInitData[i] === Transaction.OBSERVED_ERROR) {
              try {
                this.initializeAll(i + 1);
              } catch (err) {}
            }
          }
        }
      },
      closeAll: function(startIndex) {
        ("production" !== process.env.NODE_ENV ? invariant(this.isInTransaction(), 'Transaction.closeAll(): Cannot close transaction when none are open.') : invariant(this.isInTransaction()));
        var transactionWrappers = this.transactionWrappers;
        for (var i = startIndex; i < transactionWrappers.length; i++) {
          var wrapper = transactionWrappers[i];
          var initData = this.wrapperInitData[i];
          var errorThrown;
          try {
            errorThrown = true;
            if (initData !== Transaction.OBSERVED_ERROR && wrapper.close) {
              wrapper.close.call(this, initData);
            }
            errorThrown = false;
          } finally {
            if (errorThrown) {
              try {
                this.closeAll(i + 1);
              } catch (e) {}
            }
          }
        }
        this.wrapperInitData.length = 0;
      }
    };
    var Transaction = {
      Mixin: Mixin,
      OBSERVED_ERROR: {}
    };
    module.exports = Transaction;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactErrorUtils", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var ReactErrorUtils = {guard: function(func, name) {
      return func;
    }};
  module.exports = ReactErrorUtils;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/keyOf", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var keyOf = function(oneKeyObj) {
    var key;
    for (key in oneKeyObj) {
      if (!oneKeyObj.hasOwnProperty(key)) {
        continue;
      }
      return key;
    }
    return null;
  };
  module.exports = keyOf;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/mapObject", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function mapObject(object, callback, context) {
    if (!object) {
      return null;
    }
    var result = {};
    for (var name in object) {
      if (hasOwnProperty.call(object, name)) {
        result[name] = callback.call(context, object[name], name, object);
      }
    }
    return result;
  }
  module.exports = mapObject;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/DOMProperty", ["npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var invariant = require("npm:react@0.13.1/lib/invariant");
    function checkMask(value, bitmask) {
      return (value & bitmask) === bitmask;
    }
    var DOMPropertyInjection = {
      MUST_USE_ATTRIBUTE: 0x1,
      MUST_USE_PROPERTY: 0x2,
      HAS_SIDE_EFFECTS: 0x4,
      HAS_BOOLEAN_VALUE: 0x8,
      HAS_NUMERIC_VALUE: 0x10,
      HAS_POSITIVE_NUMERIC_VALUE: 0x20 | 0x10,
      HAS_OVERLOADED_BOOLEAN_VALUE: 0x40,
      injectDOMPropertyConfig: function(domPropertyConfig) {
        var Properties = domPropertyConfig.Properties || {};
        var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
        var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
        var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};
        if (domPropertyConfig.isCustomAttribute) {
          DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
        }
        for (var propName in Properties) {
          ("production" !== process.env.NODE_ENV ? invariant(!DOMProperty.isStandardName.hasOwnProperty(propName), 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property ' + '\'%s\' which has already been injected. You may be accidentally ' + 'injecting the same DOM property config twice, or you may be ' + 'injecting two configs that have conflicting property names.', propName) : invariant(!DOMProperty.isStandardName.hasOwnProperty(propName)));
          DOMProperty.isStandardName[propName] = true;
          var lowerCased = propName.toLowerCase();
          DOMProperty.getPossibleStandardName[lowerCased] = propName;
          if (DOMAttributeNames.hasOwnProperty(propName)) {
            var attributeName = DOMAttributeNames[propName];
            DOMProperty.getPossibleStandardName[attributeName] = propName;
            DOMProperty.getAttributeName[propName] = attributeName;
          } else {
            DOMProperty.getAttributeName[propName] = lowerCased;
          }
          DOMProperty.getPropertyName[propName] = DOMPropertyNames.hasOwnProperty(propName) ? DOMPropertyNames[propName] : propName;
          if (DOMMutationMethods.hasOwnProperty(propName)) {
            DOMProperty.getMutationMethod[propName] = DOMMutationMethods[propName];
          } else {
            DOMProperty.getMutationMethod[propName] = null;
          }
          var propConfig = Properties[propName];
          DOMProperty.mustUseAttribute[propName] = checkMask(propConfig, DOMPropertyInjection.MUST_USE_ATTRIBUTE);
          DOMProperty.mustUseProperty[propName] = checkMask(propConfig, DOMPropertyInjection.MUST_USE_PROPERTY);
          DOMProperty.hasSideEffects[propName] = checkMask(propConfig, DOMPropertyInjection.HAS_SIDE_EFFECTS);
          DOMProperty.hasBooleanValue[propName] = checkMask(propConfig, DOMPropertyInjection.HAS_BOOLEAN_VALUE);
          DOMProperty.hasNumericValue[propName] = checkMask(propConfig, DOMPropertyInjection.HAS_NUMERIC_VALUE);
          DOMProperty.hasPositiveNumericValue[propName] = checkMask(propConfig, DOMPropertyInjection.HAS_POSITIVE_NUMERIC_VALUE);
          DOMProperty.hasOverloadedBooleanValue[propName] = checkMask(propConfig, DOMPropertyInjection.HAS_OVERLOADED_BOOLEAN_VALUE);
          ("production" !== process.env.NODE_ENV ? invariant(!DOMProperty.mustUseAttribute[propName] || !DOMProperty.mustUseProperty[propName], 'DOMProperty: Cannot require using both attribute and property: %s', propName) : invariant(!DOMProperty.mustUseAttribute[propName] || !DOMProperty.mustUseProperty[propName]));
          ("production" !== process.env.NODE_ENV ? invariant(DOMProperty.mustUseProperty[propName] || !DOMProperty.hasSideEffects[propName], 'DOMProperty: Properties that have side effects must use property: %s', propName) : invariant(DOMProperty.mustUseProperty[propName] || !DOMProperty.hasSideEffects[propName]));
          ("production" !== process.env.NODE_ENV ? invariant(!!DOMProperty.hasBooleanValue[propName] + !!DOMProperty.hasNumericValue[propName] + !!DOMProperty.hasOverloadedBooleanValue[propName] <= 1, 'DOMProperty: Value can be one of boolean, overloaded boolean, or ' + 'numeric value, but not a combination: %s', propName) : invariant(!!DOMProperty.hasBooleanValue[propName] + !!DOMProperty.hasNumericValue[propName] + !!DOMProperty.hasOverloadedBooleanValue[propName] <= 1));
        }
      }
    };
    var defaultValueCache = {};
    var DOMProperty = {
      ID_ATTRIBUTE_NAME: 'data-reactid',
      isStandardName: {},
      getPossibleStandardName: {},
      getAttributeName: {},
      getPropertyName: {},
      getMutationMethod: {},
      mustUseAttribute: {},
      mustUseProperty: {},
      hasSideEffects: {},
      hasBooleanValue: {},
      hasNumericValue: {},
      hasPositiveNumericValue: {},
      hasOverloadedBooleanValue: {},
      _isCustomAttributeFunctions: [],
      isCustomAttribute: function(attributeName) {
        for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
          var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
          if (isCustomAttributeFn(attributeName)) {
            return true;
          }
        }
        return false;
      },
      getDefaultValueForProperty: function(nodeName, prop) {
        var nodeDefaults = defaultValueCache[nodeName];
        var testElement;
        if (!nodeDefaults) {
          defaultValueCache[nodeName] = nodeDefaults = {};
        }
        if (!(prop in nodeDefaults)) {
          testElement = document.createElement(nodeName);
          nodeDefaults[prop] = testElement[prop];
        }
        return nodeDefaults[prop];
      },
      injection: DOMPropertyInjection
    };
    module.exports = DOMProperty;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/escapeTextContentForBrowser", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ESCAPE_LOOKUP = {
    '&': '&amp;',
    '>': '&gt;',
    '<': '&lt;',
    '"': '&quot;',
    '\'': '&#x27;'
  };
  var ESCAPE_REGEX = /[&><"']/g;
  function escaper(match) {
    return ESCAPE_LOOKUP[match];
  }
  function escapeTextContentForBrowser(text) {
    return ('' + text).replace(ESCAPE_REGEX, escaper);
  }
  module.exports = escapeTextContentForBrowser;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/CSSProperty", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var isUnitlessNumber = {
    boxFlex: true,
    boxFlexGroup: true,
    columnCount: true,
    flex: true,
    flexGrow: true,
    flexShrink: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    strokeOpacity: true
  };
  function prefixKey(prefix, key) {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
  }
  var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(isUnitlessNumber).forEach(function(prop) {
    prefixes.forEach(function(prefix) {
      isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
    });
  });
  var shorthandPropertyExpansions = {
    background: {
      backgroundImage: true,
      backgroundPosition: true,
      backgroundRepeat: true,
      backgroundColor: true
    },
    border: {
      borderWidth: true,
      borderStyle: true,
      borderColor: true
    },
    borderBottom: {
      borderBottomWidth: true,
      borderBottomStyle: true,
      borderBottomColor: true
    },
    borderLeft: {
      borderLeftWidth: true,
      borderLeftStyle: true,
      borderLeftColor: true
    },
    borderRight: {
      borderRightWidth: true,
      borderRightStyle: true,
      borderRightColor: true
    },
    borderTop: {
      borderTopWidth: true,
      borderTopStyle: true,
      borderTopColor: true
    },
    font: {
      fontStyle: true,
      fontVariant: true,
      fontWeight: true,
      fontSize: true,
      lineHeight: true,
      fontFamily: true
    }
  };
  var CSSProperty = {
    isUnitlessNumber: isUnitlessNumber,
    shorthandPropertyExpansions: shorthandPropertyExpansions
  };
  module.exports = CSSProperty;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ExecutionEnvironment", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var canUseDOM = !!((typeof window !== 'undefined' && window.document && window.document.createElement));
  var ExecutionEnvironment = {
    canUseDOM: canUseDOM,
    canUseWorkers: typeof Worker !== 'undefined',
    canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
    canUseViewport: canUseDOM && !!window.screen,
    isInWorker: !canUseDOM
  };
  module.exports = ExecutionEnvironment;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/camelize", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var _hyphenPattern = /-(.)/g;
  function camelize(string) {
    return string.replace(_hyphenPattern, function(_, character) {
      return character.toUpperCase();
    });
  }
  module.exports = camelize;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/dangerousStyleValue", ["npm:react@0.13.1/lib/CSSProperty"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var CSSProperty = require("npm:react@0.13.1/lib/CSSProperty");
  var isUnitlessNumber = CSSProperty.isUnitlessNumber;
  function dangerousStyleValue(name, value) {
    var isEmpty = value == null || typeof value === 'boolean' || value === '';
    if (isEmpty) {
      return '';
    }
    var isNonNumeric = isNaN(value);
    if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
      return '' + value;
    }
    if (typeof value === 'string') {
      value = value.trim();
    }
    return value + 'px';
  }
  module.exports = dangerousStyleValue;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/hyphenate", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var _uppercasePattern = /([A-Z])/g;
  function hyphenate(string) {
    return string.replace(_uppercasePattern, '-$1').toLowerCase();
  }
  module.exports = hyphenate;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/memoizeStringOnly", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function memoizeStringOnly(callback) {
    var cache = {};
    return function(string) {
      if (!cache.hasOwnProperty(string)) {
        cache[string] = callback.call(this, string);
      }
      return cache[string];
    };
  }
  module.exports = memoizeStringOnly;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/toArray", ["npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var invariant = require("npm:react@0.13.1/lib/invariant");
    function toArray(obj) {
      var length = obj.length;
      ("production" !== process.env.NODE_ENV ? invariant(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function'), 'toArray: Array-like object expected') : invariant(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function')));
      ("production" !== process.env.NODE_ENV ? invariant(typeof length === 'number', 'toArray: Object needs a length property') : invariant(typeof length === 'number'));
      ("production" !== process.env.NODE_ENV ? invariant(length === 0 || (length - 1) in obj, 'toArray: Object should have keys for indices') : invariant(length === 0 || (length - 1) in obj));
      if (obj.hasOwnProperty) {
        try {
          return Array.prototype.slice.call(obj);
        } catch (e) {}
      }
      var ret = Array(length);
      for (var ii = 0; ii < length; ii++) {
        ret[ii] = obj[ii];
      }
      return ret;
    }
    module.exports = toArray;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/getMarkupWrap", ["npm:react@0.13.1/lib/ExecutionEnvironment", "npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var ExecutionEnvironment = require("npm:react@0.13.1/lib/ExecutionEnvironment");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
    var shouldWrap = {
      'circle': true,
      'defs': true,
      'ellipse': true,
      'g': true,
      'line': true,
      'linearGradient': true,
      'path': true,
      'polygon': true,
      'polyline': true,
      'radialGradient': true,
      'rect': true,
      'stop': true,
      'text': true
    };
    var selectWrap = [1, '<select multiple="true">', '</select>'];
    var tableWrap = [1, '<table>', '</table>'];
    var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
    var svgWrap = [1, '<svg>', '</svg>'];
    var markupWrap = {
      '*': [1, '?<div>', '</div>'],
      'area': [1, '<map>', '</map>'],
      'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
      'legend': [1, '<fieldset>', '</fieldset>'],
      'param': [1, '<object>', '</object>'],
      'tr': [2, '<table><tbody>', '</tbody></table>'],
      'optgroup': selectWrap,
      'option': selectWrap,
      'caption': tableWrap,
      'colgroup': tableWrap,
      'tbody': tableWrap,
      'tfoot': tableWrap,
      'thead': tableWrap,
      'td': trWrap,
      'th': trWrap,
      'circle': svgWrap,
      'defs': svgWrap,
      'ellipse': svgWrap,
      'g': svgWrap,
      'line': svgWrap,
      'linearGradient': svgWrap,
      'path': svgWrap,
      'polygon': svgWrap,
      'polyline': svgWrap,
      'radialGradient': svgWrap,
      'rect': svgWrap,
      'stop': svgWrap,
      'text': svgWrap
    };
    function getMarkupWrap(nodeName) {
      ("production" !== process.env.NODE_ENV ? invariant(!!dummyNode, 'Markup wrapping node not initialized') : invariant(!!dummyNode));
      if (!markupWrap.hasOwnProperty(nodeName)) {
        nodeName = '*';
      }
      if (!shouldWrap.hasOwnProperty(nodeName)) {
        if (nodeName === '*') {
          dummyNode.innerHTML = '<link />';
        } else {
          dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
        }
        shouldWrap[nodeName] = !dummyNode.firstChild;
      }
      return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
    }
    module.exports = getMarkupWrap;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactMultiChildUpdateTypes", ["npm:react@0.13.1/lib/keyMirror"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var keyMirror = require("npm:react@0.13.1/lib/keyMirror");
  var ReactMultiChildUpdateTypes = keyMirror({
    INSERT_MARKUP: null,
    MOVE_EXISTING: null,
    REMOVE_NODE: null,
    TEXT_CONTENT: null
  });
  module.exports = ReactMultiChildUpdateTypes;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/setInnerHTML", ["npm:react@0.13.1/lib/ExecutionEnvironment", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ExecutionEnvironment = require("npm:react@0.13.1/lib/ExecutionEnvironment");
    var WHITESPACE_TEST = /^[ \r\n\t\f]/;
    var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;
    var setInnerHTML = function(node, html) {
      node.innerHTML = html;
    };
    if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
      setInnerHTML = function(node, html) {
        MSApp.execUnsafeLocalFunction(function() {
          node.innerHTML = html;
        });
      };
    }
    if (ExecutionEnvironment.canUseDOM) {
      var testElement = document.createElement('div');
      testElement.innerHTML = ' ';
      if (testElement.innerHTML === '') {
        setInnerHTML = function(node, html) {
          if (node.parentNode) {
            node.parentNode.replaceChild(node, node);
          }
          if (WHITESPACE_TEST.test(html) || html[0] === '<' && NONVISIBLE_TEST.test(html)) {
            node.innerHTML = '\uFEFF' + html;
            var textNode = node.firstChild;
            if (textNode.data.length === 1) {
              node.removeChild(textNode);
            } else {
              textNode.deleteData(0, 1);
            }
          } else {
            node.innerHTML = html;
          }
        };
      }
    }
    module.exports = setInnerHTML;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/EventPluginRegistry", ["npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var EventPluginOrder = null;
    var namesToPlugins = {};
    function recomputePluginOrdering() {
      if (!EventPluginOrder) {
        return ;
      }
      for (var pluginName in namesToPlugins) {
        var PluginModule = namesToPlugins[pluginName];
        var pluginIndex = EventPluginOrder.indexOf(pluginName);
        ("production" !== process.env.NODE_ENV ? invariant(pluginIndex > -1, 'EventPluginRegistry: Cannot inject event plugins that do not exist in ' + 'the plugin ordering, `%s`.', pluginName) : invariant(pluginIndex > -1));
        if (EventPluginRegistry.plugins[pluginIndex]) {
          continue;
        }
        ("production" !== process.env.NODE_ENV ? invariant(PluginModule.extractEvents, 'EventPluginRegistry: Event plugins must implement an `extractEvents` ' + 'method, but `%s` does not.', pluginName) : invariant(PluginModule.extractEvents));
        EventPluginRegistry.plugins[pluginIndex] = PluginModule;
        var publishedEvents = PluginModule.eventTypes;
        for (var eventName in publishedEvents) {
          ("production" !== process.env.NODE_ENV ? invariant(publishEventForPlugin(publishedEvents[eventName], PluginModule, eventName), 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : invariant(publishEventForPlugin(publishedEvents[eventName], PluginModule, eventName)));
        }
      }
    }
    function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
      ("production" !== process.env.NODE_ENV ? invariant(!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName), 'EventPluginHub: More than one plugin attempted to publish the same ' + 'event name, `%s`.', eventName) : invariant(!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName)));
      EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;
      var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
      if (phasedRegistrationNames) {
        for (var phaseName in phasedRegistrationNames) {
          if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
            var phasedRegistrationName = phasedRegistrationNames[phaseName];
            publishRegistrationName(phasedRegistrationName, PluginModule, eventName);
          }
        }
        return true;
      } else if (dispatchConfig.registrationName) {
        publishRegistrationName(dispatchConfig.registrationName, PluginModule, eventName);
        return true;
      }
      return false;
    }
    function publishRegistrationName(registrationName, PluginModule, eventName) {
      ("production" !== process.env.NODE_ENV ? invariant(!EventPluginRegistry.registrationNameModules[registrationName], 'EventPluginHub: More than one plugin attempted to publish the same ' + 'registration name, `%s`.', registrationName) : invariant(!EventPluginRegistry.registrationNameModules[registrationName]));
      EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
      EventPluginRegistry.registrationNameDependencies[registrationName] = PluginModule.eventTypes[eventName].dependencies;
    }
    var EventPluginRegistry = {
      plugins: [],
      eventNameDispatchConfigs: {},
      registrationNameModules: {},
      registrationNameDependencies: {},
      injectEventPluginOrder: function(InjectedEventPluginOrder) {
        ("production" !== process.env.NODE_ENV ? invariant(!EventPluginOrder, 'EventPluginRegistry: Cannot inject event plugin ordering more than ' + 'once. You are likely trying to load more than one copy of React.') : invariant(!EventPluginOrder));
        EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
        recomputePluginOrdering();
      },
      injectEventPluginsByName: function(injectedNamesToPlugins) {
        var isOrderingDirty = false;
        for (var pluginName in injectedNamesToPlugins) {
          if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
            continue;
          }
          var PluginModule = injectedNamesToPlugins[pluginName];
          if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== PluginModule) {
            ("production" !== process.env.NODE_ENV ? invariant(!namesToPlugins[pluginName], 'EventPluginRegistry: Cannot inject two different event plugins ' + 'using the same name, `%s`.', pluginName) : invariant(!namesToPlugins[pluginName]));
            namesToPlugins[pluginName] = PluginModule;
            isOrderingDirty = true;
          }
        }
        if (isOrderingDirty) {
          recomputePluginOrdering();
        }
      },
      getPluginModuleForEvent: function(event) {
        var dispatchConfig = event.dispatchConfig;
        if (dispatchConfig.registrationName) {
          return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
        }
        for (var phase in dispatchConfig.phasedRegistrationNames) {
          if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
            continue;
          }
          var PluginModule = EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];
          if (PluginModule) {
            return PluginModule;
          }
        }
        return null;
      },
      _resetEventPlugins: function() {
        EventPluginOrder = null;
        for (var pluginName in namesToPlugins) {
          if (namesToPlugins.hasOwnProperty(pluginName)) {
            delete namesToPlugins[pluginName];
          }
        }
        EventPluginRegistry.plugins.length = 0;
        var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
        for (var eventName in eventNameDispatchConfigs) {
          if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
            delete eventNameDispatchConfigs[eventName];
          }
        }
        var registrationNameModules = EventPluginRegistry.registrationNameModules;
        for (var registrationName in registrationNameModules) {
          if (registrationNameModules.hasOwnProperty(registrationName)) {
            delete registrationNameModules[registrationName];
          }
        }
      }
    };
    module.exports = EventPluginRegistry;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/accumulateInto", ["npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var invariant = require("npm:react@0.13.1/lib/invariant");
    function accumulateInto(current, next) {
      ("production" !== process.env.NODE_ENV ? invariant(next != null, 'accumulateInto(...): Accumulated items must not be null or undefined.') : invariant(next != null));
      if (current == null) {
        return next;
      }
      var currentIsArray = Array.isArray(current);
      var nextIsArray = Array.isArray(next);
      if (currentIsArray && nextIsArray) {
        current.push.apply(current, next);
        return current;
      }
      if (currentIsArray) {
        current.push(next);
        return current;
      }
      if (nextIsArray) {
        return [current].concat(next);
      }
      return [current, next];
    }
    module.exports = accumulateInto;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/forEachAccumulated", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var forEachAccumulated = function(arr, cb, scope) {
    if (Array.isArray(arr)) {
      arr.forEach(cb, scope);
    } else if (arr) {
      cb.call(scope, arr);
    }
  };
  module.exports = forEachAccumulated;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactEventEmitterMixin", ["npm:react@0.13.1/lib/EventPluginHub"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var EventPluginHub = require("npm:react@0.13.1/lib/EventPluginHub");
  function runEventQueueInBatch(events) {
    EventPluginHub.enqueueEvents(events);
    EventPluginHub.processEventQueue();
  }
  var ReactEventEmitterMixin = {handleTopLevel: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
      var events = EventPluginHub.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent);
      runEventQueueInBatch(events);
    }};
  module.exports = ReactEventEmitterMixin;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ViewportMetrics", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ViewportMetrics = {
    currentScrollLeft: 0,
    currentScrollTop: 0,
    refreshScrollValues: function(scrollPosition) {
      ViewportMetrics.currentScrollLeft = scrollPosition.x;
      ViewportMetrics.currentScrollTop = scrollPosition.y;
    }
  };
  module.exports = ViewportMetrics;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/isEventSupported", ["npm:react@0.13.1/lib/ExecutionEnvironment"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ExecutionEnvironment = require("npm:react@0.13.1/lib/ExecutionEnvironment");
  var useHasFeature;
  if (ExecutionEnvironment.canUseDOM) {
    useHasFeature = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature('', '') !== true;
  }
  function isEventSupported(eventNameSuffix, capture) {
    if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
      return false;
    }
    var eventName = 'on' + eventNameSuffix;
    var isSupported = eventName in document;
    if (!isSupported) {
      var element = document.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }
    if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
      isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
    }
    return isSupported;
  }
  module.exports = isEventSupported;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactEmptyComponent", ["npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/ReactInstanceMap", "npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
    var ReactInstanceMap = require("npm:react@0.13.1/lib/ReactInstanceMap");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var component;
    var nullComponentIDsRegistry = {};
    var ReactEmptyComponentInjection = {injectEmptyComponent: function(emptyComponent) {
        component = ReactElement.createFactory(emptyComponent);
      }};
    var ReactEmptyComponentType = function() {};
    ReactEmptyComponentType.prototype.componentDidMount = function() {
      var internalInstance = ReactInstanceMap.get(this);
      if (!internalInstance) {
        return ;
      }
      registerNullComponentID(internalInstance._rootNodeID);
    };
    ReactEmptyComponentType.prototype.componentWillUnmount = function() {
      var internalInstance = ReactInstanceMap.get(this);
      if (!internalInstance) {
        return ;
      }
      deregisterNullComponentID(internalInstance._rootNodeID);
    };
    ReactEmptyComponentType.prototype.render = function() {
      ("production" !== process.env.NODE_ENV ? invariant(component, 'Trying to return null from a render, but no null placeholder component ' + 'was injected.') : invariant(component));
      return component();
    };
    var emptyElement = ReactElement.createElement(ReactEmptyComponentType);
    function registerNullComponentID(id) {
      nullComponentIDsRegistry[id] = true;
    }
    function deregisterNullComponentID(id) {
      delete nullComponentIDsRegistry[id];
    }
    function isNullComponentID(id) {
      return !!nullComponentIDsRegistry[id];
    }
    var ReactEmptyComponent = {
      emptyElement: emptyElement,
      injection: ReactEmptyComponentInjection,
      isNullComponentID: isNullComponentID
    };
    module.exports = ReactEmptyComponent;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/adler32", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var MOD = 65521;
  function adler32(data) {
    var a = 1;
    var b = 0;
    for (var i = 0; i < data.length; i++) {
      a = (a + data.charCodeAt(i)) % MOD;
      b = (b + a) % MOD;
    }
    return a | (b << 16);
  }
  module.exports = adler32;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/isNode", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function isNode(object) {
    return !!(object && (((typeof Node === 'function' ? object instanceof Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'))));
  }
  module.exports = isNode;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/getReactRootElementInContainer", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var DOC_NODE_TYPE = 9;
  function getReactRootElementInContainer(container) {
    if (!container) {
      return null;
    }
    if (container.nodeType === DOC_NODE_TYPE) {
      return container.documentElement;
    } else {
      return container.firstChild;
    }
  }
  module.exports = getReactRootElementInContainer;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactComponentEnvironment", ["npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var injected = false;
    var ReactComponentEnvironment = {
      unmountIDFromEnvironment: null,
      replaceNodeWithMarkupByID: null,
      processChildrenUpdates: null,
      injection: {injectEnvironment: function(environment) {
          ("production" !== process.env.NODE_ENV ? invariant(!injected, 'ReactCompositeComponent: injectEnvironment() can only be called once.') : invariant(!injected));
          ReactComponentEnvironment.unmountIDFromEnvironment = environment.unmountIDFromEnvironment;
          ReactComponentEnvironment.replaceNodeWithMarkupByID = environment.replaceNodeWithMarkupByID;
          ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;
          injected = true;
        }}
    };
    module.exports = ReactComponentEnvironment;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/shouldUpdateReactComponent", ["npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var warning = require("npm:react@0.13.1/lib/warning");
    function shouldUpdateReactComponent(prevElement, nextElement) {
      if (prevElement != null && nextElement != null) {
        var prevType = typeof prevElement;
        var nextType = typeof nextElement;
        if (prevType === 'string' || prevType === 'number') {
          return (nextType === 'string' || nextType === 'number');
        } else {
          if (nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key) {
            var ownersMatch = prevElement._owner === nextElement._owner;
            var prevName = null;
            var nextName = null;
            var nextDisplayName = null;
            if ("production" !== process.env.NODE_ENV) {
              if (!ownersMatch) {
                if (prevElement._owner != null && prevElement._owner.getPublicInstance() != null && prevElement._owner.getPublicInstance().constructor != null) {
                  prevName = prevElement._owner.getPublicInstance().constructor.displayName;
                }
                if (nextElement._owner != null && nextElement._owner.getPublicInstance() != null && nextElement._owner.getPublicInstance().constructor != null) {
                  nextName = nextElement._owner.getPublicInstance().constructor.displayName;
                }
                if (nextElement.type != null && nextElement.type.displayName != null) {
                  nextDisplayName = nextElement.type.displayName;
                }
                if (nextElement.type != null && typeof nextElement.type === 'string') {
                  nextDisplayName = nextElement.type;
                }
                if (typeof nextElement.type !== 'string' || nextElement.type === 'input' || nextElement.type === 'textarea') {
                  if ((prevElement._owner != null && prevElement._owner._isOwnerNecessary === false) || (nextElement._owner != null && nextElement._owner._isOwnerNecessary === false)) {
                    if (prevElement._owner != null) {
                      prevElement._owner._isOwnerNecessary = true;
                    }
                    if (nextElement._owner != null) {
                      nextElement._owner._isOwnerNecessary = true;
                    }
                    ("production" !== process.env.NODE_ENV ? warning(false, '<%s /> is being rendered by both %s and %s using the same ' + 'key (%s) in the same place. Currently, this means that ' + 'they don\'t preserve state. This behavior should be very ' + 'rare so we\'re considering deprecating it. Please contact ' + 'the React team and explain your use case so that we can ' + 'take that into consideration.', nextDisplayName || 'Unknown Component', prevName || '[Unknown]', nextName || '[Unknown]', prevElement.key) : null);
                  }
                }
              }
            }
            return ownersMatch;
          }
        }
      }
      return false;
    }
    module.exports = shouldUpdateReactComponent;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/flattenChildren", ["npm:react@0.13.1/lib/traverseAllChildren", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var traverseAllChildren = require("npm:react@0.13.1/lib/traverseAllChildren");
    var warning = require("npm:react@0.13.1/lib/warning");
    function flattenSingleChildIntoContext(traverseContext, child, name) {
      var result = traverseContext;
      var keyUnique = !result.hasOwnProperty(name);
      if ("production" !== process.env.NODE_ENV) {
        ("production" !== process.env.NODE_ENV ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', name) : null);
      }
      if (keyUnique && child != null) {
        result[name] = child;
      }
    }
    function flattenChildren(children) {
      if (children == null) {
        return children;
      }
      var result = {};
      traverseAllChildren(children, flattenSingleChildIntoContext, result);
      return result;
    }
    module.exports = flattenChildren;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/EventPropagators", ["npm:react@0.13.1/lib/EventConstants", "npm:react@0.13.1/lib/EventPluginHub", "npm:react@0.13.1/lib/accumulateInto", "npm:react@0.13.1/lib/forEachAccumulated", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var EventConstants = require("npm:react@0.13.1/lib/EventConstants");
    var EventPluginHub = require("npm:react@0.13.1/lib/EventPluginHub");
    var accumulateInto = require("npm:react@0.13.1/lib/accumulateInto");
    var forEachAccumulated = require("npm:react@0.13.1/lib/forEachAccumulated");
    var PropagationPhases = EventConstants.PropagationPhases;
    var getListener = EventPluginHub.getListener;
    function listenerAtPhase(id, event, propagationPhase) {
      var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
      return getListener(id, registrationName);
    }
    function accumulateDirectionalDispatches(domID, upwards, event) {
      if ("production" !== process.env.NODE_ENV) {
        if (!domID) {
          throw new Error('Dispatching id must not be null');
        }
      }
      var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
      var listener = listenerAtPhase(domID, event, phase);
      if (listener) {
        event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
        event._dispatchIDs = accumulateInto(event._dispatchIDs, domID);
      }
    }
    function accumulateTwoPhaseDispatchesSingle(event) {
      if (event && event.dispatchConfig.phasedRegistrationNames) {
        EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(event.dispatchMarker, accumulateDirectionalDispatches, event);
      }
    }
    function accumulateDispatches(id, ignoredDirection, event) {
      if (event && event.dispatchConfig.registrationName) {
        var registrationName = event.dispatchConfig.registrationName;
        var listener = getListener(id, registrationName);
        if (listener) {
          event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
          event._dispatchIDs = accumulateInto(event._dispatchIDs, id);
        }
      }
    }
    function accumulateDirectDispatchesSingle(event) {
      if (event && event.dispatchConfig.registrationName) {
        accumulateDispatches(event.dispatchMarker, null, event);
      }
    }
    function accumulateTwoPhaseDispatches(events) {
      forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
    }
    function accumulateEnterLeaveDispatches(leave, enter, fromID, toID) {
      EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(fromID, toID, accumulateDispatches, leave, enter);
    }
    function accumulateDirectDispatches(events) {
      forEachAccumulated(events, accumulateDirectDispatchesSingle);
    }
    var EventPropagators = {
      accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
      accumulateDirectDispatches: accumulateDirectDispatches,
      accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
    };
    module.exports = EventPropagators;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/getTextContentAccessor", ["npm:react@0.13.1/lib/ExecutionEnvironment"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ExecutionEnvironment = require("npm:react@0.13.1/lib/ExecutionEnvironment");
  var contentKey = null;
  function getTextContentAccessor() {
    if (!contentKey && ExecutionEnvironment.canUseDOM) {
      contentKey = 'textContent' in document.documentElement ? 'textContent' : 'innerText';
    }
    return contentKey;
  }
  module.exports = getTextContentAccessor;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/getEventTarget", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function getEventTarget(nativeEvent) {
    var target = nativeEvent.target || nativeEvent.srcElement || window;
    return target.nodeType === 3 ? target.parentNode : target;
  }
  module.exports = getEventTarget;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/SyntheticInputEvent", ["npm:react@0.13.1/lib/SyntheticEvent"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var SyntheticEvent = require("npm:react@0.13.1/lib/SyntheticEvent");
  var InputEventInterface = {data: null};
  function SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
  }
  SyntheticEvent.augmentClass(SyntheticInputEvent, InputEventInterface);
  module.exports = SyntheticInputEvent;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/isTextInputElement", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var supportedInputTypes = {
    'color': true,
    'date': true,
    'datetime': true,
    'datetime-local': true,
    'email': true,
    'month': true,
    'number': true,
    'password': true,
    'range': true,
    'search': true,
    'tel': true,
    'text': true,
    'time': true,
    'url': true,
    'week': true
  };
  function isTextInputElement(elem) {
    return elem && ((elem.nodeName === 'INPUT' && supportedInputTypes[elem.type] || elem.nodeName === 'TEXTAREA'));
  }
  module.exports = isTextInputElement;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ClientReactRootIndex", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var nextReactRootIndex = 0;
  var ClientReactRootIndex = {createReactRootIndex: function() {
      return nextReactRootIndex++;
    }};
  module.exports = ClientReactRootIndex;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/DefaultEventPluginOrder", ["npm:react@0.13.1/lib/keyOf"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var keyOf = require("npm:react@0.13.1/lib/keyOf");
  var DefaultEventPluginOrder = [keyOf({ResponderEventPlugin: null}), keyOf({SimpleEventPlugin: null}), keyOf({TapEventPlugin: null}), keyOf({EnterLeaveEventPlugin: null}), keyOf({ChangeEventPlugin: null}), keyOf({SelectEventPlugin: null}), keyOf({BeforeInputEventPlugin: null}), keyOf({AnalyticsEventPlugin: null}), keyOf({MobileSafariClickEventPlugin: null})];
  module.exports = DefaultEventPluginOrder;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/SyntheticUIEvent", ["npm:react@0.13.1/lib/SyntheticEvent", "npm:react@0.13.1/lib/getEventTarget"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var SyntheticEvent = require("npm:react@0.13.1/lib/SyntheticEvent");
  var getEventTarget = require("npm:react@0.13.1/lib/getEventTarget");
  var UIEventInterface = {
    view: function(event) {
      if (event.view) {
        return event.view;
      }
      var target = getEventTarget(event);
      if (target != null && target.window === target) {
        return target;
      }
      var doc = target.ownerDocument;
      if (doc) {
        return doc.defaultView || doc.parentWindow;
      } else {
        return window;
      }
    },
    detail: function(event) {
      return event.detail || 0;
    }
  };
  function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
  }
  SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);
  module.exports = SyntheticUIEvent;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/getEventModifierState", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var modifierKeyToProp = {
    'Alt': 'altKey',
    'Control': 'ctrlKey',
    'Meta': 'metaKey',
    'Shift': 'shiftKey'
  };
  function modifierStateGetter(keyArg) {
    var syntheticEvent = this;
    var nativeEvent = syntheticEvent.nativeEvent;
    if (nativeEvent.getModifierState) {
      return nativeEvent.getModifierState(keyArg);
    }
    var keyProp = modifierKeyToProp[keyArg];
    return keyProp ? !!nativeEvent[keyProp] : false;
  }
  function getEventModifierState(nativeEvent) {
    return modifierStateGetter;
  }
  module.exports = getEventModifierState;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/HTMLDOMPropertyConfig", ["npm:react@0.13.1/lib/DOMProperty", "npm:react@0.13.1/lib/ExecutionEnvironment"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var DOMProperty = require("npm:react@0.13.1/lib/DOMProperty");
  var ExecutionEnvironment = require("npm:react@0.13.1/lib/ExecutionEnvironment");
  var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
  var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
  var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
  var HAS_SIDE_EFFECTS = DOMProperty.injection.HAS_SIDE_EFFECTS;
  var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
  var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
  var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
  var hasSVG;
  if (ExecutionEnvironment.canUseDOM) {
    var implementation = document.implementation;
    hasSVG = (implementation && implementation.hasFeature && implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1'));
  }
  var HTMLDOMPropertyConfig = {
    isCustomAttribute: RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),
    Properties: {
      accept: null,
      acceptCharset: null,
      accessKey: null,
      action: null,
      allowFullScreen: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
      allowTransparency: MUST_USE_ATTRIBUTE,
      alt: null,
      async: HAS_BOOLEAN_VALUE,
      autoComplete: null,
      autoPlay: HAS_BOOLEAN_VALUE,
      cellPadding: null,
      cellSpacing: null,
      charSet: MUST_USE_ATTRIBUTE,
      checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      classID: MUST_USE_ATTRIBUTE,
      className: hasSVG ? MUST_USE_ATTRIBUTE : MUST_USE_PROPERTY,
      cols: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
      colSpan: null,
      content: null,
      contentEditable: null,
      contextMenu: MUST_USE_ATTRIBUTE,
      controls: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      coords: null,
      crossOrigin: null,
      data: null,
      dateTime: MUST_USE_ATTRIBUTE,
      defer: HAS_BOOLEAN_VALUE,
      dir: null,
      disabled: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
      download: HAS_OVERLOADED_BOOLEAN_VALUE,
      draggable: null,
      encType: null,
      form: MUST_USE_ATTRIBUTE,
      formAction: MUST_USE_ATTRIBUTE,
      formEncType: MUST_USE_ATTRIBUTE,
      formMethod: MUST_USE_ATTRIBUTE,
      formNoValidate: HAS_BOOLEAN_VALUE,
      formTarget: MUST_USE_ATTRIBUTE,
      frameBorder: MUST_USE_ATTRIBUTE,
      headers: null,
      height: MUST_USE_ATTRIBUTE,
      hidden: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
      href: null,
      hrefLang: null,
      htmlFor: null,
      httpEquiv: null,
      icon: null,
      id: MUST_USE_PROPERTY,
      label: null,
      lang: null,
      list: MUST_USE_ATTRIBUTE,
      loop: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      manifest: MUST_USE_ATTRIBUTE,
      marginHeight: null,
      marginWidth: null,
      max: null,
      maxLength: MUST_USE_ATTRIBUTE,
      media: MUST_USE_ATTRIBUTE,
      mediaGroup: null,
      method: null,
      min: null,
      multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      name: null,
      noValidate: HAS_BOOLEAN_VALUE,
      open: HAS_BOOLEAN_VALUE,
      pattern: null,
      placeholder: null,
      poster: null,
      preload: null,
      radioGroup: null,
      readOnly: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      rel: null,
      required: HAS_BOOLEAN_VALUE,
      role: MUST_USE_ATTRIBUTE,
      rows: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
      rowSpan: null,
      sandbox: null,
      scope: null,
      scrolling: null,
      seamless: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
      selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      shape: null,
      size: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
      sizes: MUST_USE_ATTRIBUTE,
      span: HAS_POSITIVE_NUMERIC_VALUE,
      spellCheck: null,
      src: null,
      srcDoc: MUST_USE_PROPERTY,
      srcSet: MUST_USE_ATTRIBUTE,
      start: HAS_NUMERIC_VALUE,
      step: null,
      style: null,
      tabIndex: null,
      target: null,
      title: null,
      type: null,
      useMap: null,
      value: MUST_USE_PROPERTY | HAS_SIDE_EFFECTS,
      width: MUST_USE_ATTRIBUTE,
      wmode: MUST_USE_ATTRIBUTE,
      autoCapitalize: null,
      autoCorrect: null,
      itemProp: MUST_USE_ATTRIBUTE,
      itemScope: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
      itemType: MUST_USE_ATTRIBUTE,
      itemID: MUST_USE_ATTRIBUTE,
      itemRef: MUST_USE_ATTRIBUTE,
      property: null
    },
    DOMAttributeNames: {
      acceptCharset: 'accept-charset',
      className: 'class',
      htmlFor: 'for',
      httpEquiv: 'http-equiv'
    },
    DOMPropertyNames: {
      autoCapitalize: 'autocapitalize',
      autoComplete: 'autocomplete',
      autoCorrect: 'autocorrect',
      autoFocus: 'autofocus',
      autoPlay: 'autoplay',
      encType: 'encoding',
      hrefLang: 'hreflang',
      radioGroup: 'radiogroup',
      spellCheck: 'spellcheck',
      srcDoc: 'srcdoc',
      srcSet: 'srcset'
    }
  };
  module.exports = HTMLDOMPropertyConfig;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/MobileSafariClickEventPlugin", ["npm:react@0.13.1/lib/EventConstants", "npm:react@0.13.1/lib/emptyFunction"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var EventConstants = require("npm:react@0.13.1/lib/EventConstants");
  var emptyFunction = require("npm:react@0.13.1/lib/emptyFunction");
  var topLevelTypes = EventConstants.topLevelTypes;
  var MobileSafariClickEventPlugin = {
    eventTypes: null,
    extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
      if (topLevelType === topLevelTypes.topTouchStart) {
        var target = nativeEvent.target;
        if (target && !target.onclick) {
          target.onclick = emptyFunction;
        }
      }
    }
  };
  module.exports = MobileSafariClickEventPlugin;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/findDOMNode", ["npm:react@0.13.1/lib/ReactCurrentOwner", "npm:react@0.13.1/lib/ReactInstanceMap", "npm:react@0.13.1/lib/ReactMount", "npm:react@0.13.1/lib/invariant", "npm:react@0.13.1/lib/isNode", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactCurrentOwner = require("npm:react@0.13.1/lib/ReactCurrentOwner");
    var ReactInstanceMap = require("npm:react@0.13.1/lib/ReactInstanceMap");
    var ReactMount = require("npm:react@0.13.1/lib/ReactMount");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var isNode = require("npm:react@0.13.1/lib/isNode");
    var warning = require("npm:react@0.13.1/lib/warning");
    function findDOMNode(componentOrElement) {
      if ("production" !== process.env.NODE_ENV) {
        var owner = ReactCurrentOwner.current;
        if (owner !== null) {
          ("production" !== process.env.NODE_ENV ? warning(owner._warnedAboutRefsInRender, '%s is accessing getDOMNode or findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : null);
          owner._warnedAboutRefsInRender = true;
        }
      }
      if (componentOrElement == null) {
        return null;
      }
      if (isNode(componentOrElement)) {
        return componentOrElement;
      }
      if (ReactInstanceMap.has(componentOrElement)) {
        return ReactMount.getNodeFromInstance(componentOrElement);
      }
      ("production" !== process.env.NODE_ENV ? invariant(componentOrElement.render == null || typeof componentOrElement.render !== 'function', 'Component (with keys: %s) contains `render` method ' + 'but is not mounted in the DOM', Object.keys(componentOrElement)) : invariant(componentOrElement.render == null || typeof componentOrElement.render !== 'function'));
      ("production" !== process.env.NODE_ENV ? invariant(false, 'Element appears to be neither ReactComponent nor DOMNode (keys: %s)', Object.keys(componentOrElement)) : invariant(false));
    }
    module.exports = findDOMNode;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactDefaultBatchingStrategy", ["npm:react@0.13.1/lib/ReactUpdates", "npm:react@0.13.1/lib/Transaction", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/emptyFunction"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ReactUpdates = require("npm:react@0.13.1/lib/ReactUpdates");
  var Transaction = require("npm:react@0.13.1/lib/Transaction");
  var assign = require("npm:react@0.13.1/lib/Object.assign");
  var emptyFunction = require("npm:react@0.13.1/lib/emptyFunction");
  var RESET_BATCHED_UPDATES = {
    initialize: emptyFunction,
    close: function() {
      ReactDefaultBatchingStrategy.isBatchingUpdates = false;
    }
  };
  var FLUSH_BATCHED_UPDATES = {
    initialize: emptyFunction,
    close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
  };
  var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];
  function ReactDefaultBatchingStrategyTransaction() {
    this.reinitializeTransaction();
  }
  assign(ReactDefaultBatchingStrategyTransaction.prototype, Transaction.Mixin, {getTransactionWrappers: function() {
      return TRANSACTION_WRAPPERS;
    }});
  var transaction = new ReactDefaultBatchingStrategyTransaction();
  var ReactDefaultBatchingStrategy = {
    isBatchingUpdates: false,
    batchedUpdates: function(callback, a, b, c, d) {
      var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;
      ReactDefaultBatchingStrategy.isBatchingUpdates = true;
      if (alreadyBatchingUpdates) {
        callback(a, b, c, d);
      } else {
        transaction.perform(callback, null, a, b, c, d);
      }
    }
  };
  module.exports = ReactDefaultBatchingStrategy;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/focusNode", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  function focusNode(node) {
    try {
      node.focus();
    } catch (e) {}
  }
  module.exports = focusNode;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/LocalEventTrapMixin", ["npm:react@0.13.1/lib/ReactBrowserEventEmitter", "npm:react@0.13.1/lib/accumulateInto", "npm:react@0.13.1/lib/forEachAccumulated", "npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactBrowserEventEmitter = require("npm:react@0.13.1/lib/ReactBrowserEventEmitter");
    var accumulateInto = require("npm:react@0.13.1/lib/accumulateInto");
    var forEachAccumulated = require("npm:react@0.13.1/lib/forEachAccumulated");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    function remove(event) {
      event.remove();
    }
    var LocalEventTrapMixin = {
      trapBubbledEvent: function(topLevelType, handlerBaseName) {
        ("production" !== process.env.NODE_ENV ? invariant(this.isMounted(), 'Must be mounted to trap events') : invariant(this.isMounted()));
        var node = this.getDOMNode();
        ("production" !== process.env.NODE_ENV ? invariant(node, 'LocalEventTrapMixin.trapBubbledEvent(...): Requires node to be rendered.') : invariant(node));
        var listener = ReactBrowserEventEmitter.trapBubbledEvent(topLevelType, handlerBaseName, node);
        this._localEventListeners = accumulateInto(this._localEventListeners, listener);
      },
      componentWillUnmount: function() {
        if (this._localEventListeners) {
          forEachAccumulated(this._localEventListeners, remove);
        }
      }
    };
    module.exports = LocalEventTrapMixin;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactDOMImg", ["npm:react@0.13.1/lib/EventConstants", "npm:react@0.13.1/lib/LocalEventTrapMixin", "npm:react@0.13.1/lib/ReactBrowserComponentMixin", "npm:react@0.13.1/lib/ReactClass", "npm:react@0.13.1/lib/ReactElement"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var EventConstants = require("npm:react@0.13.1/lib/EventConstants");
  var LocalEventTrapMixin = require("npm:react@0.13.1/lib/LocalEventTrapMixin");
  var ReactBrowserComponentMixin = require("npm:react@0.13.1/lib/ReactBrowserComponentMixin");
  var ReactClass = require("npm:react@0.13.1/lib/ReactClass");
  var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
  var img = ReactElement.createFactory('img');
  var ReactDOMImg = ReactClass.createClass({
    displayName: 'ReactDOMImg',
    tagName: 'IMG',
    mixins: [ReactBrowserComponentMixin, LocalEventTrapMixin],
    render: function() {
      return img(this.props);
    },
    componentDidMount: function() {
      this.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load');
      this.trapBubbledEvent(EventConstants.topLevelTypes.topError, 'error');
    }
  });
  module.exports = ReactDOMImg;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactDOMIframe", ["npm:react@0.13.1/lib/EventConstants", "npm:react@0.13.1/lib/LocalEventTrapMixin", "npm:react@0.13.1/lib/ReactBrowserComponentMixin", "npm:react@0.13.1/lib/ReactClass", "npm:react@0.13.1/lib/ReactElement"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var EventConstants = require("npm:react@0.13.1/lib/EventConstants");
  var LocalEventTrapMixin = require("npm:react@0.13.1/lib/LocalEventTrapMixin");
  var ReactBrowserComponentMixin = require("npm:react@0.13.1/lib/ReactBrowserComponentMixin");
  var ReactClass = require("npm:react@0.13.1/lib/ReactClass");
  var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
  var iframe = ReactElement.createFactory('iframe');
  var ReactDOMIframe = ReactClass.createClass({
    displayName: 'ReactDOMIframe',
    tagName: 'IFRAME',
    mixins: [ReactBrowserComponentMixin, LocalEventTrapMixin],
    render: function() {
      return iframe(this.props);
    },
    componentDidMount: function() {
      this.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load');
    }
  });
  module.exports = ReactDOMIframe;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactPropTypes", ["npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/ReactFragment", "npm:react@0.13.1/lib/ReactPropTypeLocationNames", "npm:react@0.13.1/lib/emptyFunction"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
  var ReactFragment = require("npm:react@0.13.1/lib/ReactFragment");
  var ReactPropTypeLocationNames = require("npm:react@0.13.1/lib/ReactPropTypeLocationNames");
  var emptyFunction = require("npm:react@0.13.1/lib/emptyFunction");
  var ANONYMOUS = '<<anonymous>>';
  var elementTypeChecker = createElementTypeChecker();
  var nodeTypeChecker = createNodeChecker();
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: elementTypeChecker,
    instanceOf: createInstanceTypeChecker,
    node: nodeTypeChecker,
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };
  function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location) {
      componentName = componentName || ANONYMOUS;
      if (props[propName] == null) {
        var locationName = ReactPropTypeLocationNames[location];
        if (isRequired) {
          return new Error(("Required " + locationName + " `" + propName + "` was not specified in ") + ("`" + componentName + "`."));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location);
      }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }
  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        var locationName = ReactPropTypeLocationNames[location];
        var preciseType = getPreciseType(propValue);
        return new Error(("Invalid " + locationName + " `" + propName + "` of type `" + preciseType + "` ") + ("supplied to `" + componentName + "`, expected `" + expectedType + "`."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturns(null));
  }
  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location) {
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var locationName = ReactPropTypeLocationNames[location];
        var propType = getPropType(propValue);
        return new Error(("Invalid " + locationName + " `" + propName + "` of type ") + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeChecker() {
    function validate(props, propName, componentName, location) {
      if (!ReactElement.isValidElement(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error(("Invalid " + locationName + " `" + propName + "` supplied to ") + ("`" + componentName + "`, expected a ReactElement."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location) {
      if (!(props[propName] instanceof expectedClass)) {
        var locationName = ReactPropTypeLocationNames[location];
        var expectedClassName = expectedClass.name || ANONYMOUS;
        return new Error(("Invalid " + locationName + " `" + propName + "` supplied to ") + ("`" + componentName + "`, expected instance of `" + expectedClassName + "`."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createEnumTypeChecker(expectedValues) {
    function validate(props, propName, componentName, location) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (propValue === expectedValues[i]) {
          return null;
        }
      }
      var locationName = ReactPropTypeLocationNames[location];
      var valuesString = JSON.stringify(expectedValues);
      return new Error(("Invalid " + locationName + " `" + propName + "` of value `" + propValue + "` ") + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
    }
    return createChainableTypeChecker(validate);
  }
  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error(("Invalid " + locationName + " `" + propName + "` of type ") + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createUnionTypeChecker(arrayOfTypeCheckers) {
    function validate(props, propName, componentName, location) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location) == null) {
          return null;
        }
      }
      var locationName = ReactPropTypeLocationNames[location];
      return new Error(("Invalid " + locationName + " `" + propName + "` supplied to ") + ("`" + componentName + "`."));
    }
    return createChainableTypeChecker(validate);
  }
  function createNodeChecker() {
    function validate(props, propName, componentName, location) {
      if (!isNode(props[propName])) {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error(("Invalid " + locationName + " `" + propName + "` supplied to ") + ("`" + componentName + "`, expected a ReactNode."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        var locationName = ReactPropTypeLocationNames[location];
        return new Error(("Invalid " + locationName + " `" + propName + "` of type `" + propType + "` ") + ("supplied to `" + componentName + "`, expected `object`."));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || ReactElement.isValidElement(propValue)) {
          return true;
        }
        propValue = ReactFragment.extractIfFragment(propValue);
        for (var k in propValue) {
          if (!isNode(propValue[k])) {
            return false;
          }
        }
        return true;
      default:
        return false;
    }
  }
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      return 'object';
    }
    return propType;
  }
  function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }
  module.exports = ReactPropTypes;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactDOMOption", ["npm:react@0.13.1/lib/ReactBrowserComponentMixin", "npm:react@0.13.1/lib/ReactClass", "npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactBrowserComponentMixin = require("npm:react@0.13.1/lib/ReactBrowserComponentMixin");
    var ReactClass = require("npm:react@0.13.1/lib/ReactClass");
    var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
    var warning = require("npm:react@0.13.1/lib/warning");
    var option = ReactElement.createFactory('option');
    var ReactDOMOption = ReactClass.createClass({
      displayName: 'ReactDOMOption',
      tagName: 'OPTION',
      mixins: [ReactBrowserComponentMixin],
      componentWillMount: function() {
        if ("production" !== process.env.NODE_ENV) {
          ("production" !== process.env.NODE_ENV ? warning(this.props.selected == null, 'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.') : null);
        }
      },
      render: function() {
        return option(this.props, this.props.children);
      }
    });
    module.exports = ReactDOMOption;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactDOMSelect", ["npm:react@0.13.1/lib/AutoFocusMixin", "npm:react@0.13.1/lib/LinkedValueUtils", "npm:react@0.13.1/lib/ReactBrowserComponentMixin", "npm:react@0.13.1/lib/ReactClass", "npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/ReactUpdates", "npm:react@0.13.1/lib/Object.assign"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var AutoFocusMixin = require("npm:react@0.13.1/lib/AutoFocusMixin");
  var LinkedValueUtils = require("npm:react@0.13.1/lib/LinkedValueUtils");
  var ReactBrowserComponentMixin = require("npm:react@0.13.1/lib/ReactBrowserComponentMixin");
  var ReactClass = require("npm:react@0.13.1/lib/ReactClass");
  var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
  var ReactUpdates = require("npm:react@0.13.1/lib/ReactUpdates");
  var assign = require("npm:react@0.13.1/lib/Object.assign");
  var select = ReactElement.createFactory('select');
  function updateOptionsIfPendingUpdateAndMounted() {
    if (this._pendingUpdate) {
      this._pendingUpdate = false;
      var value = LinkedValueUtils.getValue(this);
      if (value != null && this.isMounted()) {
        updateOptions(this, value);
      }
    }
  }
  function selectValueType(props, propName, componentName) {
    if (props[propName] == null) {
      return null;
    }
    if (props.multiple) {
      if (!Array.isArray(props[propName])) {
        return new Error(("The `" + propName + "` prop supplied to <select> must be an array if ") + ("`multiple` is true."));
      }
    } else {
      if (Array.isArray(props[propName])) {
        return new Error(("The `" + propName + "` prop supplied to <select> must be a scalar ") + ("value if `multiple` is false."));
      }
    }
  }
  function updateOptions(component, propValue) {
    var selectedValue,
        i,
        l;
    var options = component.getDOMNode().options;
    if (component.props.multiple) {
      selectedValue = {};
      for (i = 0, l = propValue.length; i < l; i++) {
        selectedValue['' + propValue[i]] = true;
      }
      for (i = 0, l = options.length; i < l; i++) {
        var selected = selectedValue.hasOwnProperty(options[i].value);
        if (options[i].selected !== selected) {
          options[i].selected = selected;
        }
      }
    } else {
      selectedValue = '' + propValue;
      for (i = 0, l = options.length; i < l; i++) {
        if (options[i].value === selectedValue) {
          options[i].selected = true;
          return ;
        }
      }
      if (options.length) {
        options[0].selected = true;
      }
    }
  }
  var ReactDOMSelect = ReactClass.createClass({
    displayName: 'ReactDOMSelect',
    tagName: 'SELECT',
    mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],
    propTypes: {
      defaultValue: selectValueType,
      value: selectValueType
    },
    render: function() {
      var props = assign({}, this.props);
      props.onChange = this._handleChange;
      props.value = null;
      return select(props, this.props.children);
    },
    componentWillMount: function() {
      this._pendingUpdate = false;
    },
    componentDidMount: function() {
      var value = LinkedValueUtils.getValue(this);
      if (value != null) {
        updateOptions(this, value);
      } else if (this.props.defaultValue != null) {
        updateOptions(this, this.props.defaultValue);
      }
    },
    componentDidUpdate: function(prevProps) {
      var value = LinkedValueUtils.getValue(this);
      if (value != null) {
        this._pendingUpdate = false;
        updateOptions(this, value);
      } else if (!prevProps.multiple !== !this.props.multiple) {
        if (this.props.defaultValue != null) {
          updateOptions(this, this.props.defaultValue);
        } else {
          updateOptions(this, this.props.multiple ? [] : '');
        }
      }
    },
    _handleChange: function(event) {
      var returnValue;
      var onChange = LinkedValueUtils.getOnChange(this);
      if (onChange) {
        returnValue = onChange.call(this, event);
      }
      this._pendingUpdate = true;
      ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted, this);
      return returnValue;
    }
  });
  module.exports = ReactDOMSelect;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactDOMTextarea", ["npm:react@0.13.1/lib/AutoFocusMixin", "npm:react@0.13.1/lib/DOMPropertyOperations", "npm:react@0.13.1/lib/LinkedValueUtils", "npm:react@0.13.1/lib/ReactBrowserComponentMixin", "npm:react@0.13.1/lib/ReactClass", "npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/ReactUpdates", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/invariant", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var AutoFocusMixin = require("npm:react@0.13.1/lib/AutoFocusMixin");
    var DOMPropertyOperations = require("npm:react@0.13.1/lib/DOMPropertyOperations");
    var LinkedValueUtils = require("npm:react@0.13.1/lib/LinkedValueUtils");
    var ReactBrowserComponentMixin = require("npm:react@0.13.1/lib/ReactBrowserComponentMixin");
    var ReactClass = require("npm:react@0.13.1/lib/ReactClass");
    var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
    var ReactUpdates = require("npm:react@0.13.1/lib/ReactUpdates");
    var assign = require("npm:react@0.13.1/lib/Object.assign");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var warning = require("npm:react@0.13.1/lib/warning");
    var textarea = ReactElement.createFactory('textarea');
    function forceUpdateIfMounted() {
      if (this.isMounted()) {
        this.forceUpdate();
      }
    }
    var ReactDOMTextarea = ReactClass.createClass({
      displayName: 'ReactDOMTextarea',
      tagName: 'TEXTAREA',
      mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],
      getInitialState: function() {
        var defaultValue = this.props.defaultValue;
        var children = this.props.children;
        if (children != null) {
          if ("production" !== process.env.NODE_ENV) {
            ("production" !== process.env.NODE_ENV ? warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.') : null);
          }
          ("production" !== process.env.NODE_ENV ? invariant(defaultValue == null, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : invariant(defaultValue == null));
          if (Array.isArray(children)) {
            ("production" !== process.env.NODE_ENV ? invariant(children.length <= 1, '<textarea> can only have at most one child.') : invariant(children.length <= 1));
            children = children[0];
          }
          defaultValue = '' + children;
        }
        if (defaultValue == null) {
          defaultValue = '';
        }
        var value = LinkedValueUtils.getValue(this);
        return {initialValue: '' + (value != null ? value : defaultValue)};
      },
      render: function() {
        var props = assign({}, this.props);
        ("production" !== process.env.NODE_ENV ? invariant(props.dangerouslySetInnerHTML == null, '`dangerouslySetInnerHTML` does not make sense on <textarea>.') : invariant(props.dangerouslySetInnerHTML == null));
        props.defaultValue = null;
        props.value = null;
        props.onChange = this._handleChange;
        return textarea(props, this.state.initialValue);
      },
      componentDidUpdate: function(prevProps, prevState, prevContext) {
        var value = LinkedValueUtils.getValue(this);
        if (value != null) {
          var rootNode = this.getDOMNode();
          DOMPropertyOperations.setValueForProperty(rootNode, 'value', '' + value);
        }
      },
      _handleChange: function(event) {
        var returnValue;
        var onChange = LinkedValueUtils.getOnChange(this);
        if (onChange) {
          returnValue = onChange.call(this, event);
        }
        ReactUpdates.asap(forceUpdateIfMounted, this);
        return returnValue;
      }
    });
    module.exports = ReactDOMTextarea;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/EventListener", ["npm:react@0.13.1/lib/emptyFunction", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var emptyFunction = require("npm:react@0.13.1/lib/emptyFunction");
    var EventListener = {
      listen: function(target, eventType, callback) {
        if (target.addEventListener) {
          target.addEventListener(eventType, callback, false);
          return {remove: function() {
              target.removeEventListener(eventType, callback, false);
            }};
        } else if (target.attachEvent) {
          target.attachEvent('on' + eventType, callback);
          return {remove: function() {
              target.detachEvent('on' + eventType, callback);
            }};
        }
      },
      capture: function(target, eventType, callback) {
        if (!target.addEventListener) {
          if ("production" !== process.env.NODE_ENV) {
            console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
          }
          return {remove: emptyFunction};
        } else {
          target.addEventListener(eventType, callback, true);
          return {remove: function() {
              target.removeEventListener(eventType, callback, true);
            }};
        }
      },
      registerDefault: function() {}
    };
    module.exports = EventListener;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/getUnboundedScrollPosition", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  function getUnboundedScrollPosition(scrollable) {
    if (scrollable === window) {
      return {
        x: window.pageXOffset || document.documentElement.scrollLeft,
        y: window.pageYOffset || document.documentElement.scrollTop
      };
    }
    return {
      x: scrollable.scrollLeft,
      y: scrollable.scrollTop
    };
  }
  module.exports = getUnboundedScrollPosition;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactInjection", ["npm:react@0.13.1/lib/DOMProperty", "npm:react@0.13.1/lib/EventPluginHub", "npm:react@0.13.1/lib/ReactComponentEnvironment", "npm:react@0.13.1/lib/ReactClass", "npm:react@0.13.1/lib/ReactEmptyComponent", "npm:react@0.13.1/lib/ReactBrowserEventEmitter", "npm:react@0.13.1/lib/ReactNativeComponent", "npm:react@0.13.1/lib/ReactDOMComponent", "npm:react@0.13.1/lib/ReactPerf", "npm:react@0.13.1/lib/ReactRootIndex", "npm:react@0.13.1/lib/ReactUpdates"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var DOMProperty = require("npm:react@0.13.1/lib/DOMProperty");
  var EventPluginHub = require("npm:react@0.13.1/lib/EventPluginHub");
  var ReactComponentEnvironment = require("npm:react@0.13.1/lib/ReactComponentEnvironment");
  var ReactClass = require("npm:react@0.13.1/lib/ReactClass");
  var ReactEmptyComponent = require("npm:react@0.13.1/lib/ReactEmptyComponent");
  var ReactBrowserEventEmitter = require("npm:react@0.13.1/lib/ReactBrowserEventEmitter");
  var ReactNativeComponent = require("npm:react@0.13.1/lib/ReactNativeComponent");
  var ReactDOMComponent = require("npm:react@0.13.1/lib/ReactDOMComponent");
  var ReactPerf = require("npm:react@0.13.1/lib/ReactPerf");
  var ReactRootIndex = require("npm:react@0.13.1/lib/ReactRootIndex");
  var ReactUpdates = require("npm:react@0.13.1/lib/ReactUpdates");
  var ReactInjection = {
    Component: ReactComponentEnvironment.injection,
    Class: ReactClass.injection,
    DOMComponent: ReactDOMComponent.injection,
    DOMProperty: DOMProperty.injection,
    EmptyComponent: ReactEmptyComponent.injection,
    EventPluginHub: EventPluginHub.injection,
    EventEmitter: ReactBrowserEventEmitter.injection,
    NativeComponent: ReactNativeComponent.injection,
    Perf: ReactPerf.injection,
    RootIndex: ReactRootIndex.injection,
    Updates: ReactUpdates.injection
  };
  module.exports = ReactInjection;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/getNodeForCharacterOffset", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function getLeafNode(node) {
    while (node && node.firstChild) {
      node = node.firstChild;
    }
    return node;
  }
  function getSiblingNode(node) {
    while (node) {
      if (node.nextSibling) {
        return node.nextSibling;
      }
      node = node.parentNode;
    }
  }
  function getNodeForCharacterOffset(root, offset) {
    var node = getLeafNode(root);
    var nodeStart = 0;
    var nodeEnd = 0;
    while (node) {
      if (node.nodeType === 3) {
        nodeEnd = nodeStart + node.textContent.length;
        if (nodeStart <= offset && nodeEnd >= offset) {
          return {
            node: node,
            offset: offset - nodeStart
          };
        }
        nodeStart = nodeEnd;
      }
      node = getLeafNode(getSiblingNode(node));
    }
  }
  module.exports = getNodeForCharacterOffset;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/getActiveElement", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  function getActiveElement() {
    try {
      return document.activeElement || document.body;
    } catch (e) {
      return document.body;
    }
  }
  module.exports = getActiveElement;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactPutListenerQueue", ["npm:react@0.13.1/lib/PooledClass", "npm:react@0.13.1/lib/ReactBrowserEventEmitter", "npm:react@0.13.1/lib/Object.assign"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var PooledClass = require("npm:react@0.13.1/lib/PooledClass");
  var ReactBrowserEventEmitter = require("npm:react@0.13.1/lib/ReactBrowserEventEmitter");
  var assign = require("npm:react@0.13.1/lib/Object.assign");
  function ReactPutListenerQueue() {
    this.listenersToPut = [];
  }
  assign(ReactPutListenerQueue.prototype, {
    enqueuePutListener: function(rootNodeID, propKey, propValue) {
      this.listenersToPut.push({
        rootNodeID: rootNodeID,
        propKey: propKey,
        propValue: propValue
      });
    },
    putListeners: function() {
      for (var i = 0; i < this.listenersToPut.length; i++) {
        var listenerToPut = this.listenersToPut[i];
        ReactBrowserEventEmitter.putListener(listenerToPut.rootNodeID, listenerToPut.propKey, listenerToPut.propValue);
      }
    },
    reset: function() {
      this.listenersToPut.length = 0;
    },
    destructor: function() {
      this.reset();
    }
  });
  PooledClass.addPoolingTo(ReactPutListenerQueue);
  module.exports = ReactPutListenerQueue;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/shallowEqual", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function shallowEqual(objA, objB) {
    if (objA === objB) {
      return true;
    }
    var key;
    for (key in objA) {
      if (objA.hasOwnProperty(key) && (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
        return false;
      }
    }
    for (key in objB) {
      if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }
  module.exports = shallowEqual;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ServerReactRootIndex", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var GLOBAL_MOUNT_POINT_MAX = Math.pow(2, 53);
  var ServerReactRootIndex = {createReactRootIndex: function() {
      return Math.ceil(Math.random() * GLOBAL_MOUNT_POINT_MAX);
    }};
  module.exports = ServerReactRootIndex;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/SyntheticClipboardEvent", ["npm:react@0.13.1/lib/SyntheticEvent"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var SyntheticEvent = require("npm:react@0.13.1/lib/SyntheticEvent");
  var ClipboardEventInterface = {clipboardData: function(event) {
      return ('clipboardData' in event ? event.clipboardData : window.clipboardData);
    }};
  function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
  }
  SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);
  module.exports = SyntheticClipboardEvent;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/SyntheticFocusEvent", ["npm:react@0.13.1/lib/SyntheticUIEvent"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var SyntheticUIEvent = require("npm:react@0.13.1/lib/SyntheticUIEvent");
  var FocusEventInterface = {relatedTarget: null};
  function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
  }
  SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);
  module.exports = SyntheticFocusEvent;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/getEventCharCode", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function getEventCharCode(nativeEvent) {
    var charCode;
    var keyCode = nativeEvent.keyCode;
    if ('charCode' in nativeEvent) {
      charCode = nativeEvent.charCode;
      if (charCode === 0 && keyCode === 13) {
        charCode = 13;
      }
    } else {
      charCode = keyCode;
    }
    if (charCode >= 32 || charCode === 13) {
      return charCode;
    }
    return 0;
  }
  module.exports = getEventCharCode;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/getEventKey", ["npm:react@0.13.1/lib/getEventCharCode"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var getEventCharCode = require("npm:react@0.13.1/lib/getEventCharCode");
  var normalizeKey = {
    'Esc': 'Escape',
    'Spacebar': ' ',
    'Left': 'ArrowLeft',
    'Up': 'ArrowUp',
    'Right': 'ArrowRight',
    'Down': 'ArrowDown',
    'Del': 'Delete',
    'Win': 'OS',
    'Menu': 'ContextMenu',
    'Apps': 'ContextMenu',
    'Scroll': 'ScrollLock',
    'MozPrintableKey': 'Unidentified'
  };
  var translateToKey = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  };
  function getEventKey(nativeEvent) {
    if (nativeEvent.key) {
      var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
      if (key !== 'Unidentified') {
        return key;
      }
    }
    if (nativeEvent.type === 'keypress') {
      var charCode = getEventCharCode(nativeEvent);
      return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
    }
    if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
      return translateToKey[nativeEvent.keyCode] || 'Unidentified';
    }
    return '';
  }
  module.exports = getEventKey;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/SyntheticDragEvent", ["npm:react@0.13.1/lib/SyntheticMouseEvent"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var SyntheticMouseEvent = require("npm:react@0.13.1/lib/SyntheticMouseEvent");
  var DragEventInterface = {dataTransfer: null};
  function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
  }
  SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);
  module.exports = SyntheticDragEvent;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/SyntheticTouchEvent", ["npm:react@0.13.1/lib/SyntheticUIEvent", "npm:react@0.13.1/lib/getEventModifierState"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var SyntheticUIEvent = require("npm:react@0.13.1/lib/SyntheticUIEvent");
  var getEventModifierState = require("npm:react@0.13.1/lib/getEventModifierState");
  var TouchEventInterface = {
    touches: null,
    targetTouches: null,
    changedTouches: null,
    altKey: null,
    metaKey: null,
    ctrlKey: null,
    shiftKey: null,
    getModifierState: getEventModifierState
  };
  function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
  }
  SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);
  module.exports = SyntheticTouchEvent;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/SyntheticWheelEvent", ["npm:react@0.13.1/lib/SyntheticMouseEvent"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var SyntheticMouseEvent = require("npm:react@0.13.1/lib/SyntheticMouseEvent");
  var WheelEventInterface = {
    deltaX: function(event) {
      return ('deltaX' in event ? event.deltaX : 'wheelDeltaX' in event ? -event.wheelDeltaX : 0);
    },
    deltaY: function(event) {
      return ('deltaY' in event ? event.deltaY : 'wheelDeltaY' in event ? -event.wheelDeltaY : 'wheelDelta' in event ? -event.wheelDelta : 0);
    },
    deltaZ: null,
    deltaMode: null
  };
  function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
  }
  SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);
  module.exports = SyntheticWheelEvent;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/SVGDOMPropertyConfig", ["npm:react@0.13.1/lib/DOMProperty"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var DOMProperty = require("npm:react@0.13.1/lib/DOMProperty");
  var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
  var SVGDOMPropertyConfig = {
    Properties: {
      cx: MUST_USE_ATTRIBUTE,
      cy: MUST_USE_ATTRIBUTE,
      d: MUST_USE_ATTRIBUTE,
      dx: MUST_USE_ATTRIBUTE,
      dy: MUST_USE_ATTRIBUTE,
      fill: MUST_USE_ATTRIBUTE,
      fillOpacity: MUST_USE_ATTRIBUTE,
      fontFamily: MUST_USE_ATTRIBUTE,
      fontSize: MUST_USE_ATTRIBUTE,
      fx: MUST_USE_ATTRIBUTE,
      fy: MUST_USE_ATTRIBUTE,
      gradientTransform: MUST_USE_ATTRIBUTE,
      gradientUnits: MUST_USE_ATTRIBUTE,
      markerEnd: MUST_USE_ATTRIBUTE,
      markerMid: MUST_USE_ATTRIBUTE,
      markerStart: MUST_USE_ATTRIBUTE,
      offset: MUST_USE_ATTRIBUTE,
      opacity: MUST_USE_ATTRIBUTE,
      patternContentUnits: MUST_USE_ATTRIBUTE,
      patternUnits: MUST_USE_ATTRIBUTE,
      points: MUST_USE_ATTRIBUTE,
      preserveAspectRatio: MUST_USE_ATTRIBUTE,
      r: MUST_USE_ATTRIBUTE,
      rx: MUST_USE_ATTRIBUTE,
      ry: MUST_USE_ATTRIBUTE,
      spreadMethod: MUST_USE_ATTRIBUTE,
      stopColor: MUST_USE_ATTRIBUTE,
      stopOpacity: MUST_USE_ATTRIBUTE,
      stroke: MUST_USE_ATTRIBUTE,
      strokeDasharray: MUST_USE_ATTRIBUTE,
      strokeLinecap: MUST_USE_ATTRIBUTE,
      strokeOpacity: MUST_USE_ATTRIBUTE,
      strokeWidth: MUST_USE_ATTRIBUTE,
      textAnchor: MUST_USE_ATTRIBUTE,
      transform: MUST_USE_ATTRIBUTE,
      version: MUST_USE_ATTRIBUTE,
      viewBox: MUST_USE_ATTRIBUTE,
      x1: MUST_USE_ATTRIBUTE,
      x2: MUST_USE_ATTRIBUTE,
      x: MUST_USE_ATTRIBUTE,
      y1: MUST_USE_ATTRIBUTE,
      y2: MUST_USE_ATTRIBUTE,
      y: MUST_USE_ATTRIBUTE
    },
    DOMAttributeNames: {
      fillOpacity: 'fill-opacity',
      fontFamily: 'font-family',
      fontSize: 'font-size',
      gradientTransform: 'gradientTransform',
      gradientUnits: 'gradientUnits',
      markerEnd: 'marker-end',
      markerMid: 'marker-mid',
      markerStart: 'marker-start',
      patternContentUnits: 'patternContentUnits',
      patternUnits: 'patternUnits',
      preserveAspectRatio: 'preserveAspectRatio',
      spreadMethod: 'spreadMethod',
      stopColor: 'stop-color',
      stopOpacity: 'stop-opacity',
      strokeDasharray: 'stroke-dasharray',
      strokeLinecap: 'stroke-linecap',
      strokeOpacity: 'stroke-opacity',
      strokeWidth: 'stroke-width',
      textAnchor: 'text-anchor',
      viewBox: 'viewBox'
    }
  };
  module.exports = SVGDOMPropertyConfig;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/createFullPageComponent", ["npm:react@0.13.1/lib/ReactClass", "npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactClass = require("npm:react@0.13.1/lib/ReactClass");
    var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    function createFullPageComponent(tag) {
      var elementFactory = ReactElement.createFactory(tag);
      var FullPageComponent = ReactClass.createClass({
        tagName: tag.toUpperCase(),
        displayName: 'ReactFullPageComponent' + tag,
        componentWillUnmount: function() {
          ("production" !== process.env.NODE_ENV ? invariant(false, '%s tried to unmount. Because of cross-browser quirks it is ' + 'impossible to unmount some top-level components (eg <html>, <head>, ' + 'and <body>) reliably and efficiently. To fix this, have a single ' + 'top-level component that never unmounts render these elements.', this.constructor.displayName) : invariant(false));
        },
        render: function() {
          return elementFactory(this.props);
        }
      });
      return FullPageComponent;
    }
    module.exports = createFullPageComponent;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactDefaultPerfAnalysis", ["npm:react@0.13.1/lib/Object.assign"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var assign = require("npm:react@0.13.1/lib/Object.assign");
  var DONT_CARE_THRESHOLD = 1.2;
  var DOM_OPERATION_TYPES = {
    '_mountImageIntoNode': 'set innerHTML',
    INSERT_MARKUP: 'set innerHTML',
    MOVE_EXISTING: 'move',
    REMOVE_NODE: 'remove',
    TEXT_CONTENT: 'set textContent',
    'updatePropertyByID': 'update attribute',
    'deletePropertyByID': 'delete attribute',
    'updateStylesByID': 'update styles',
    'updateInnerHTMLByID': 'set innerHTML',
    'dangerouslyReplaceNodeWithMarkupByID': 'replace'
  };
  function getTotalTime(measurements) {
    var totalTime = 0;
    for (var i = 0; i < measurements.length; i++) {
      var measurement = measurements[i];
      totalTime += measurement.totalTime;
    }
    return totalTime;
  }
  function getDOMSummary(measurements) {
    var items = [];
    for (var i = 0; i < measurements.length; i++) {
      var measurement = measurements[i];
      var id;
      for (id in measurement.writes) {
        measurement.writes[id].forEach(function(write) {
          items.push({
            id: id,
            type: DOM_OPERATION_TYPES[write.type] || write.type,
            args: write.args
          });
        });
      }
    }
    return items;
  }
  function getExclusiveSummary(measurements) {
    var candidates = {};
    var displayName;
    for (var i = 0; i < measurements.length; i++) {
      var measurement = measurements[i];
      var allIDs = assign({}, measurement.exclusive, measurement.inclusive);
      for (var id in allIDs) {
        displayName = measurement.displayNames[id].current;
        candidates[displayName] = candidates[displayName] || {
          componentName: displayName,
          inclusive: 0,
          exclusive: 0,
          render: 0,
          count: 0
        };
        if (measurement.render[id]) {
          candidates[displayName].render += measurement.render[id];
        }
        if (measurement.exclusive[id]) {
          candidates[displayName].exclusive += measurement.exclusive[id];
        }
        if (measurement.inclusive[id]) {
          candidates[displayName].inclusive += measurement.inclusive[id];
        }
        if (measurement.counts[id]) {
          candidates[displayName].count += measurement.counts[id];
        }
      }
    }
    var arr = [];
    for (displayName in candidates) {
      if (candidates[displayName].exclusive >= DONT_CARE_THRESHOLD) {
        arr.push(candidates[displayName]);
      }
    }
    arr.sort(function(a, b) {
      return b.exclusive - a.exclusive;
    });
    return arr;
  }
  function getInclusiveSummary(measurements, onlyClean) {
    var candidates = {};
    var inclusiveKey;
    for (var i = 0; i < measurements.length; i++) {
      var measurement = measurements[i];
      var allIDs = assign({}, measurement.exclusive, measurement.inclusive);
      var cleanComponents;
      if (onlyClean) {
        cleanComponents = getUnchangedComponents(measurement);
      }
      for (var id in allIDs) {
        if (onlyClean && !cleanComponents[id]) {
          continue;
        }
        var displayName = measurement.displayNames[id];
        inclusiveKey = displayName.owner + ' > ' + displayName.current;
        candidates[inclusiveKey] = candidates[inclusiveKey] || {
          componentName: inclusiveKey,
          time: 0,
          count: 0
        };
        if (measurement.inclusive[id]) {
          candidates[inclusiveKey].time += measurement.inclusive[id];
        }
        if (measurement.counts[id]) {
          candidates[inclusiveKey].count += measurement.counts[id];
        }
      }
    }
    var arr = [];
    for (inclusiveKey in candidates) {
      if (candidates[inclusiveKey].time >= DONT_CARE_THRESHOLD) {
        arr.push(candidates[inclusiveKey]);
      }
    }
    arr.sort(function(a, b) {
      return b.time - a.time;
    });
    return arr;
  }
  function getUnchangedComponents(measurement) {
    var cleanComponents = {};
    var dirtyLeafIDs = Object.keys(measurement.writes);
    var allIDs = assign({}, measurement.exclusive, measurement.inclusive);
    for (var id in allIDs) {
      var isDirty = false;
      for (var i = 0; i < dirtyLeafIDs.length; i++) {
        if (dirtyLeafIDs[i].indexOf(id) === 0) {
          isDirty = true;
          break;
        }
      }
      if (!isDirty && measurement.counts[id] > 0) {
        cleanComponents[id] = true;
      }
    }
    return cleanComponents;
  }
  var ReactDefaultPerfAnalysis = {
    getExclusiveSummary: getExclusiveSummary,
    getInclusiveSummary: getInclusiveSummary,
    getDOMSummary: getDOMSummary,
    getTotalTime: getTotalTime
  };
  module.exports = ReactDefaultPerfAnalysis;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/performance", ["npm:react@0.13.1/lib/ExecutionEnvironment"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var ExecutionEnvironment = require("npm:react@0.13.1/lib/ExecutionEnvironment");
  var performance;
  if (ExecutionEnvironment.canUseDOM) {
    performance = window.performance || window.msPerformance || window.webkitPerformance;
  }
  module.exports = performance || {};
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactServerRenderingTransaction", ["npm:react@0.13.1/lib/PooledClass", "npm:react@0.13.1/lib/CallbackQueue", "npm:react@0.13.1/lib/ReactPutListenerQueue", "npm:react@0.13.1/lib/Transaction", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/emptyFunction"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var PooledClass = require("npm:react@0.13.1/lib/PooledClass");
  var CallbackQueue = require("npm:react@0.13.1/lib/CallbackQueue");
  var ReactPutListenerQueue = require("npm:react@0.13.1/lib/ReactPutListenerQueue");
  var Transaction = require("npm:react@0.13.1/lib/Transaction");
  var assign = require("npm:react@0.13.1/lib/Object.assign");
  var emptyFunction = require("npm:react@0.13.1/lib/emptyFunction");
  var ON_DOM_READY_QUEUEING = {
    initialize: function() {
      this.reactMountReady.reset();
    },
    close: emptyFunction
  };
  var PUT_LISTENER_QUEUEING = {
    initialize: function() {
      this.putListenerQueue.reset();
    },
    close: emptyFunction
  };
  var TRANSACTION_WRAPPERS = [PUT_LISTENER_QUEUEING, ON_DOM_READY_QUEUEING];
  function ReactServerRenderingTransaction(renderToStaticMarkup) {
    this.reinitializeTransaction();
    this.renderToStaticMarkup = renderToStaticMarkup;
    this.reactMountReady = CallbackQueue.getPooled(null);
    this.putListenerQueue = ReactPutListenerQueue.getPooled();
  }
  var Mixin = {
    getTransactionWrappers: function() {
      return TRANSACTION_WRAPPERS;
    },
    getReactMountReady: function() {
      return this.reactMountReady;
    },
    getPutListenerQueue: function() {
      return this.putListenerQueue;
    },
    destructor: function() {
      CallbackQueue.release(this.reactMountReady);
      this.reactMountReady = null;
      ReactPutListenerQueue.release(this.putListenerQueue);
      this.putListenerQueue = null;
    }
  };
  assign(ReactServerRenderingTransaction.prototype, Transaction.Mixin, Mixin);
  PooledClass.addPoolingTo(ReactServerRenderingTransaction);
  module.exports = ReactServerRenderingTransaction;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/onlyChild", ["npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    function onlyChild(children) {
      ("production" !== process.env.NODE_ENV ? invariant(ReactElement.isValidElement(children), 'onlyChild must be passed a children with exactly one child.') : invariant(ReactElement.isValidElement(children)));
      return children;
    }
    module.exports = onlyChild;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:babel-runtime@4.7.16/helpers/class-call-check", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.register("npm:babel-runtime@4.7.16/helpers/inherits", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  exports["default"] = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }});
    if (superClass)
      subClass.__proto__ = superClass;
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.register("npm:babel-runtime@4.7.16/helpers/create-class", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var key in props) {
        var prop = props[key];
        prop.configurable = true;
        if (prop.value)
          prop.writable = true;
      }
      Object.defineProperties(target, props);
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.register("npm:babel-runtime@4.7.16/core-js", ["github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  (function(process) {
    !function(global, framework, undefined) {
      'use strict';
      var OBJECT = 'Object',
          FUNCTION = 'Function',
          ARRAY = 'Array',
          STRING = 'String',
          NUMBER = 'Number',
          REGEXP = 'RegExp',
          DATE = 'Date',
          MAP = 'Map',
          SET = 'Set',
          WEAKMAP = 'WeakMap',
          WEAKSET = 'WeakSet',
          SYMBOL = 'Symbol',
          PROMISE = 'Promise',
          MATH = 'Math',
          ARGUMENTS = 'Arguments',
          PROTOTYPE = 'prototype',
          CONSTRUCTOR = 'constructor',
          TO_STRING = 'toString',
          TO_STRING_TAG = TO_STRING + 'Tag',
          TO_LOCALE = 'toLocaleString',
          HAS_OWN = 'hasOwnProperty',
          FOR_EACH = 'forEach',
          ITERATOR = 'iterator',
          FF_ITERATOR = '@@' + ITERATOR,
          PROCESS = 'process',
          CREATE_ELEMENT = 'createElement',
          Function = global[FUNCTION],
          Object = global[OBJECT],
          Array = global[ARRAY],
          String = global[STRING],
          Number = global[NUMBER],
          RegExp = global[REGEXP],
          Date = global[DATE],
          Map = global[MAP],
          Set = global[SET],
          WeakMap = global[WEAKMAP],
          WeakSet = global[WEAKSET],
          Symbol = global[SYMBOL],
          Math = global[MATH],
          TypeError = global.TypeError,
          RangeError = global.RangeError,
          setTimeout = global.setTimeout,
          setImmediate = global.setImmediate,
          clearImmediate = global.clearImmediate,
          parseInt = global.parseInt,
          isFinite = global.isFinite,
          process = global[PROCESS],
          nextTick = process && process.nextTick,
          document = global.document,
          html = document && document.documentElement,
          navigator = global.navigator,
          define = global.define,
          console = global.console || {},
          ArrayProto = Array[PROTOTYPE],
          ObjectProto = Object[PROTOTYPE],
          FunctionProto = Function[PROTOTYPE],
          Infinity = 1 / 0,
          DOT = '.';
      function isObject(it) {
        return it !== null && (typeof it == 'object' || typeof it == 'function');
      }
      function isFunction(it) {
        return typeof it == 'function';
      }
      var isNative = ctx(/./.test, /\[native code\]\s*\}\s*$/, 1);
      var toString = ObjectProto[TO_STRING];
      function setToStringTag(it, tag, stat) {
        if (it && !has(it = stat ? it : it[PROTOTYPE], SYMBOL_TAG))
          hidden(it, SYMBOL_TAG, tag);
      }
      function cof(it) {
        return toString.call(it).slice(8, -1);
      }
      function classof(it) {
        var O,
            T;
        return it == undefined ? it === undefined ? 'Undefined' : 'Null' : typeof(T = (O = Object(it))[SYMBOL_TAG]) == 'string' ? T : cof(O);
      }
      var call = FunctionProto.call,
          apply = FunctionProto.apply,
          REFERENCE_GET;
      function part() {
        var fn = assertFunction(this),
            length = arguments.length,
            args = Array(length),
            i = 0,
            _ = path._,
            holder = false;
        while (length > i)
          if ((args[i] = arguments[i++]) === _)
            holder = true;
        return function() {
          var that = this,
              _length = arguments.length,
              i = 0,
              j = 0,
              _args;
          if (!holder && !_length)
            return invoke(fn, args, that);
          _args = args.slice();
          if (holder)
            for (; length > i; i++)
              if (_args[i] === _)
                _args[i] = arguments[j++];
          while (_length > j)
            _args.push(arguments[j++]);
          return invoke(fn, _args, that);
        };
      }
      function ctx(fn, that, length) {
        assertFunction(fn);
        if (~length && that === undefined)
          return fn;
        switch (length) {
          case 1:
            return function(a) {
              return fn.call(that, a);
            };
          case 2:
            return function(a, b) {
              return fn.call(that, a, b);
            };
          case 3:
            return function(a, b, c) {
              return fn.call(that, a, b, c);
            };
        }
        return function() {
          return fn.apply(that, arguments);
        };
      }
      function invoke(fn, args, that) {
        var un = that === undefined;
        switch (args.length | 0) {
          case 0:
            return un ? fn() : fn.call(that);
          case 1:
            return un ? fn(args[0]) : fn.call(that, args[0]);
          case 2:
            return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
          case 3:
            return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
          case 4:
            return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
          case 5:
            return un ? fn(args[0], args[1], args[2], args[3], args[4]) : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
        }
        return fn.apply(that, args);
      }
      var create = Object.create,
          getPrototypeOf = Object.getPrototypeOf,
          setPrototypeOf = Object.setPrototypeOf,
          defineProperty = Object.defineProperty,
          defineProperties = Object.defineProperties,
          getOwnDescriptor = Object.getOwnPropertyDescriptor,
          getKeys = Object.keys,
          getNames = Object.getOwnPropertyNames,
          getSymbols = Object.getOwnPropertySymbols,
          isFrozen = Object.isFrozen,
          has = ctx(call, ObjectProto[HAS_OWN], 2),
          ES5Object = Object,
          Dict;
      function toObject(it) {
        return ES5Object(assertDefined(it));
      }
      function returnIt(it) {
        return it;
      }
      function returnThis() {
        return this;
      }
      function get(object, key) {
        if (has(object, key))
          return object[key];
      }
      function ownKeys(it) {
        assertObject(it);
        return getSymbols ? getNames(it).concat(getSymbols(it)) : getNames(it);
      }
      var assign = Object.assign || function(target, source) {
        var T = Object(assertDefined(target)),
            l = arguments.length,
            i = 1;
        while (l > i) {
          var S = ES5Object(arguments[i++]),
              keys = getKeys(S),
              length = keys.length,
              j = 0,
              key;
          while (length > j)
            T[key = keys[j++]] = S[key];
        }
        return T;
      };
      function keyOf(object, el) {
        var O = toObject(object),
            keys = getKeys(O),
            length = keys.length,
            index = 0,
            key;
        while (length > index)
          if (O[key = keys[index++]] === el)
            return key;
      }
      function array(it) {
        return String(it).split(',');
      }
      var push = ArrayProto.push,
          unshift = ArrayProto.unshift,
          slice = ArrayProto.slice,
          splice = ArrayProto.splice,
          indexOf = ArrayProto.indexOf,
          forEach = ArrayProto[FOR_EACH];
      function createArrayMethod(type) {
        var isMap = type == 1,
            isFilter = type == 2,
            isSome = type == 3,
            isEvery = type == 4,
            isFindIndex = type == 6,
            noholes = type == 5 || isFindIndex;
        return function(callbackfn) {
          var O = Object(assertDefined(this)),
              that = arguments[1],
              self = ES5Object(O),
              f = ctx(callbackfn, that, 3),
              length = toLength(self.length),
              index = 0,
              result = isMap ? Array(length) : isFilter ? [] : undefined,
              val,
              res;
          for (; length > index; index++)
            if (noholes || index in self) {
              val = self[index];
              res = f(val, index, O);
              if (type) {
                if (isMap)
                  result[index] = res;
                else if (res)
                  switch (type) {
                    case 3:
                      return true;
                    case 5:
                      return val;
                    case 6:
                      return index;
                    case 2:
                      result.push(val);
                  }
                else if (isEvery)
                  return false;
              }
            }
          return isFindIndex ? -1 : isSome || isEvery ? isEvery : result;
        };
      }
      function createArrayContains(isContains) {
        return function(el) {
          var O = toObject(this),
              length = toLength(O.length),
              index = toIndex(arguments[1], length);
          if (isContains && el != el) {
            for (; length > index; index++)
              if (sameNaN(O[index]))
                return isContains || index;
          } else
            for (; length > index; index++)
              if (isContains || index in O) {
                if (O[index] === el)
                  return isContains || index;
              }
          return !isContains && -1;
        };
      }
      function generic(A, B) {
        return typeof A == 'function' ? A : B;
      }
      var MAX_SAFE_INTEGER = 0x1fffffffffffff,
          pow = Math.pow,
          abs = Math.abs,
          ceil = Math.ceil,
          floor = Math.floor,
          max = Math.max,
          min = Math.min,
          random = Math.random,
          trunc = Math.trunc || function(it) {
            return (it > 0 ? floor : ceil)(it);
          };
      function sameNaN(number) {
        return number != number;
      }
      function toInteger(it) {
        return isNaN(it) ? 0 : trunc(it);
      }
      function toLength(it) {
        return it > 0 ? min(toInteger(it), MAX_SAFE_INTEGER) : 0;
      }
      function toIndex(index, length) {
        var index = toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
      }
      function lz(num) {
        return num > 9 ? num : '0' + num;
      }
      function createReplacer(regExp, replace, isStatic) {
        var replacer = isObject(replace) ? function(part) {
          return replace[part];
        } : replace;
        return function(it) {
          return String(isStatic ? it : this).replace(regExp, replacer);
        };
      }
      function createPointAt(toString) {
        return function(pos) {
          var s = String(assertDefined(this)),
              i = toInteger(pos),
              l = s.length,
              a,
              b;
          if (i < 0 || i >= l)
            return toString ? '' : undefined;
          a = s.charCodeAt(i);
          return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? toString ? s.charAt(i) : a : toString ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
        };
      }
      var REDUCE_ERROR = 'Reduce of empty object with no initial value';
      function assert(condition, msg1, msg2) {
        if (!condition)
          throw TypeError(msg2 ? msg1 + msg2 : msg1);
      }
      function assertDefined(it) {
        if (it == undefined)
          throw TypeError('Function called on null or undefined');
        return it;
      }
      function assertFunction(it) {
        assert(isFunction(it), it, ' is not a function!');
        return it;
      }
      function assertObject(it) {
        assert(isObject(it), it, ' is not an object!');
        return it;
      }
      function assertInstance(it, Constructor, name) {
        assert(it instanceof Constructor, name, ": use the 'new' operator!");
      }
      function descriptor(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        };
      }
      function simpleSet(object, key, value) {
        object[key] = value;
        return object;
      }
      function createDefiner(bitmap) {
        return DESC ? function(object, key, value) {
          return defineProperty(object, key, descriptor(bitmap, value));
        } : simpleSet;
      }
      function uid(key) {
        return SYMBOL + '(' + key + ')_' + (++sid + random())[TO_STRING](36);
      }
      function getWellKnownSymbol(name, setter) {
        return (Symbol && Symbol[name]) || (setter ? Symbol : safeSymbol)(SYMBOL + DOT + name);
      }
      var DESC = !!function() {
        try {
          return defineProperty({}, 'a', {get: function() {
              return 2;
            }}).a == 2;
        } catch (e) {}
      }(),
          sid = 0,
          hidden = createDefiner(1),
          set = Symbol ? simpleSet : hidden,
          safeSymbol = Symbol || uid;
      function assignHidden(target, src) {
        for (var key in src)
          hidden(target, key, src[key]);
        return target;
      }
      var SYMBOL_UNSCOPABLES = getWellKnownSymbol('unscopables'),
          ArrayUnscopables = ArrayProto[SYMBOL_UNSCOPABLES] || {},
          SYMBOL_TAG = getWellKnownSymbol(TO_STRING_TAG),
          SYMBOL_SPECIES = getWellKnownSymbol('species'),
          SYMBOL_ITERATOR;
      function setSpecies(C) {
        if (DESC && (framework || !isNative(C)))
          defineProperty(C, SYMBOL_SPECIES, {
            configurable: true,
            get: returnThis
          });
      }
      var NODE = cof(process) == PROCESS,
          core = {},
          path = framework ? global : core,
          old = global.core,
          exportGlobal,
          FORCED = 1,
          GLOBAL = 2,
          STATIC = 4,
          PROTO = 8,
          BIND = 16,
          WRAP = 32;
      function $define(type, name, source) {
        var key,
            own,
            out,
            exp,
            isGlobal = type & GLOBAL,
            target = isGlobal ? global : (type & STATIC) ? global[name] : (global[name] || ObjectProto)[PROTOTYPE],
            exports = isGlobal ? core : core[name] || (core[name] = {});
        if (isGlobal)
          source = name;
        for (key in source) {
          own = !(type & FORCED) && target && key in target && (!isFunction(target[key]) || isNative(target[key]));
          out = (own ? target : source)[key];
          if (!framework && isGlobal && !isFunction(target[key]))
            exp = source[key];
          else if (type & BIND && own)
            exp = ctx(out, global);
          else if (type & WRAP && !framework && target[key] == out) {
            exp = function(param) {
              return this instanceof out ? new out(param) : out(param);
            };
            exp[PROTOTYPE] = out[PROTOTYPE];
          } else
            exp = type & PROTO && isFunction(out) ? ctx(call, out) : out;
          if (framework && target && !own) {
            if (isGlobal)
              target[key] = out;
            else
              delete target[key] && hidden(target, key, out);
          }
          if (exports[key] != out)
            hidden(exports, key, exp);
        }
      }
      if (typeof module != 'undefined' && module.exports)
        module.exports = core;
      else if (isFunction(define) && define.amd)
        define(function() {
          return core;
        });
      else
        exportGlobal = true;
      if (exportGlobal || framework) {
        core.noConflict = function() {
          global.core = old;
          return core;
        };
        global.core = core;
      }
      SYMBOL_ITERATOR = getWellKnownSymbol(ITERATOR);
      var ITER = safeSymbol('iter'),
          KEY = 1,
          VALUE = 2,
          Iterators = {},
          IteratorPrototype = {},
          BUGGY_ITERATORS = 'keys' in ArrayProto && !('next' in [].keys());
      setIterator(IteratorPrototype, returnThis);
      function setIterator(O, value) {
        hidden(O, SYMBOL_ITERATOR, value);
        FF_ITERATOR in ArrayProto && hidden(O, FF_ITERATOR, value);
      }
      function createIterator(Constructor, NAME, next, proto) {
        Constructor[PROTOTYPE] = create(proto || IteratorPrototype, {next: descriptor(1, next)});
        setToStringTag(Constructor, NAME + ' Iterator');
      }
      function defineIterator(Constructor, NAME, value, DEFAULT) {
        var proto = Constructor[PROTOTYPE],
            iter = get(proto, SYMBOL_ITERATOR) || get(proto, FF_ITERATOR) || (DEFAULT && get(proto, DEFAULT)) || value;
        if (framework) {
          setIterator(proto, iter);
          if (iter !== value) {
            var iterProto = getPrototypeOf(iter.call(new Constructor));
            setToStringTag(iterProto, NAME + ' Iterator', true);
            has(proto, FF_ITERATOR) && setIterator(iterProto, returnThis);
          }
        }
        Iterators[NAME] = iter;
        Iterators[NAME + ' Iterator'] = returnThis;
        return iter;
      }
      function defineStdIterators(Base, NAME, Constructor, next, DEFAULT, IS_SET) {
        function createIter(kind) {
          return function() {
            return new Constructor(this, kind);
          };
        }
        createIterator(Constructor, NAME, next);
        var entries = createIter(KEY + VALUE),
            values = createIter(VALUE);
        if (DEFAULT == VALUE)
          values = defineIterator(Base, NAME, values, 'values');
        else
          entries = defineIterator(Base, NAME, entries, 'entries');
        if (DEFAULT) {
          $define(PROTO + FORCED * BUGGY_ITERATORS, NAME, {
            entries: entries,
            keys: IS_SET ? values : createIter(KEY),
            values: values
          });
        }
      }
      function iterResult(done, value) {
        return {
          value: value,
          done: !!done
        };
      }
      function isIterable(it) {
        var O = Object(it),
            Symbol = global[SYMBOL],
            hasExt = (Symbol && Symbol[ITERATOR] || FF_ITERATOR) in O;
        return hasExt || SYMBOL_ITERATOR in O || has(Iterators, classof(O));
      }
      function getIterator(it) {
        var Symbol = global[SYMBOL],
            ext = it[Symbol && Symbol[ITERATOR] || FF_ITERATOR],
            getIter = ext || it[SYMBOL_ITERATOR] || Iterators[classof(it)];
        return assertObject(getIter.call(it));
      }
      function stepCall(fn, value, entries) {
        return entries ? invoke(fn, value) : fn(value);
      }
      function checkDangerIterClosing(fn) {
        var danger = true;
        var O = {
          next: function() {
            throw 1;
          },
          'return': function() {
            danger = false;
          }
        };
        O[SYMBOL_ITERATOR] = returnThis;
        try {
          fn(O);
        } catch (e) {}
        return danger;
      }
      function closeIterator(iterator) {
        var ret = iterator['return'];
        if (ret !== undefined)
          ret.call(iterator);
      }
      function safeIterClose(exec, iterator) {
        try {
          exec(iterator);
        } catch (e) {
          closeIterator(iterator);
          throw e;
        }
      }
      function forOf(iterable, entries, fn, that) {
        safeIterClose(function(iterator) {
          var f = ctx(fn, that, entries ? 2 : 1),
              step;
          while (!(step = iterator.next()).done)
            if (stepCall(f, step.value, entries) === false) {
              return closeIterator(iterator);
            }
        }, getIterator(iterable));
      }
      !function(TAG, SymbolRegistry, AllSymbols, setter) {
        if (!isNative(Symbol)) {
          Symbol = function(description) {
            assert(!(this instanceof Symbol), SYMBOL + ' is not a ' + CONSTRUCTOR);
            var tag = uid(description),
                sym = set(create(Symbol[PROTOTYPE]), TAG, tag);
            AllSymbols[tag] = sym;
            DESC && setter && defineProperty(ObjectProto, tag, {
              configurable: true,
              set: function(value) {
                hidden(this, tag, value);
              }
            });
            return sym;
          };
          hidden(Symbol[PROTOTYPE], TO_STRING, function() {
            return this[TAG];
          });
        }
        $define(GLOBAL + WRAP, {Symbol: Symbol});
        var symbolStatics = {
          'for': function(key) {
            return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = Symbol(key);
          },
          iterator: SYMBOL_ITERATOR || getWellKnownSymbol(ITERATOR),
          keyFor: part.call(keyOf, SymbolRegistry),
          species: SYMBOL_SPECIES,
          toStringTag: SYMBOL_TAG = getWellKnownSymbol(TO_STRING_TAG, true),
          unscopables: SYMBOL_UNSCOPABLES,
          pure: safeSymbol,
          set: set,
          useSetter: function() {
            setter = true;
          },
          useSimple: function() {
            setter = false;
          }
        };
        forEach.call(array('hasInstance,isConcatSpreadable,match,replace,search,split,toPrimitive'), function(it) {
          symbolStatics[it] = getWellKnownSymbol(it);
        });
        $define(STATIC, SYMBOL, symbolStatics);
        setToStringTag(Symbol, SYMBOL);
        $define(STATIC + FORCED * !isNative(Symbol), OBJECT, {
          getOwnPropertyNames: function(it) {
            var names = getNames(toObject(it)),
                result = [],
                key,
                i = 0;
            while (names.length > i)
              has(AllSymbols, key = names[i++]) || result.push(key);
            return result;
          },
          getOwnPropertySymbols: function(it) {
            var names = getNames(toObject(it)),
                result = [],
                key,
                i = 0;
            while (names.length > i)
              has(AllSymbols, key = names[i++]) && result.push(AllSymbols[key]);
            return result;
          }
        });
        setToStringTag(Math, MATH, true);
        setToStringTag(global.JSON, 'JSON', true);
      }(safeSymbol('tag'), {}, {}, true);
      !function() {
        var objectStatic = {
          assign: assign,
          is: function(x, y) {
            return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
          }
        };
        '__proto__' in ObjectProto && function(buggy, set) {
          try {
            set = ctx(call, getOwnDescriptor(ObjectProto, '__proto__').set, 2);
            set({}, ArrayProto);
          } catch (e) {
            buggy = true;
          }
          objectStatic.setPrototypeOf = setPrototypeOf = setPrototypeOf || function(O, proto) {
            assertObject(O);
            assert(proto === null || isObject(proto), proto, ": can't set as prototype!");
            if (buggy)
              O.__proto__ = proto;
            else
              set(O, proto);
            return O;
          };
        }();
        $define(STATIC, OBJECT, objectStatic);
      }();
      !function() {
        function wrapObjectMethod(key, MODE) {
          var fn = Object[key],
              exp = core[OBJECT][key],
              f = 0,
              o = {};
          if (!exp || isNative(exp)) {
            o[key] = MODE == 1 ? function(it) {
              return isObject(it) ? fn(it) : it;
            } : MODE == 2 ? function(it) {
              return isObject(it) ? fn(it) : true;
            } : MODE == 3 ? function(it) {
              return isObject(it) ? fn(it) : false;
            } : MODE == 4 ? function(it, key) {
              return fn(toObject(it), key);
            } : function(it) {
              return fn(toObject(it));
            };
            try {
              fn(DOT);
            } catch (e) {
              f = 1;
            }
            $define(STATIC + FORCED * f, OBJECT, o);
          }
        }
        wrapObjectMethod('freeze', 1);
        wrapObjectMethod('seal', 1);
        wrapObjectMethod('preventExtensions', 1);
        wrapObjectMethod('isFrozen', 2);
        wrapObjectMethod('isSealed', 2);
        wrapObjectMethod('isExtensible', 3);
        wrapObjectMethod('getOwnPropertyDescriptor', 4);
        wrapObjectMethod('getPrototypeOf');
        wrapObjectMethod('keys');
        wrapObjectMethod('getOwnPropertyNames');
      }();
      !function(isInteger) {
        $define(STATIC, NUMBER, {
          EPSILON: pow(2, -52),
          isFinite: function(it) {
            return typeof it == 'number' && isFinite(it);
          },
          isInteger: isInteger,
          isNaN: sameNaN,
          isSafeInteger: function(number) {
            return isInteger(number) && abs(number) <= MAX_SAFE_INTEGER;
          },
          MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
          MIN_SAFE_INTEGER: -MAX_SAFE_INTEGER,
          parseFloat: parseFloat,
          parseInt: parseInt
        });
      }(Number.isInteger || function(it) {
        return !isObject(it) && isFinite(it) && floor(it) === it;
      });
      !function() {
        var E = Math.E,
            exp = Math.exp,
            log = Math.log,
            sqrt = Math.sqrt,
            sign = Math.sign || function(x) {
              return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
            };
        function asinh(x) {
          return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
        }
        function expm1(x) {
          return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp(x) - 1;
        }
        $define(STATIC, MATH, {
          acosh: function(x) {
            return (x = +x) < 1 ? NaN : isFinite(x) ? log(x / E + sqrt(x + 1) * sqrt(x - 1) / E) + 1 : x;
          },
          asinh: asinh,
          atanh: function(x) {
            return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2;
          },
          cbrt: function(x) {
            return sign(x = +x) * pow(abs(x), 1 / 3);
          },
          clz32: function(x) {
            return (x >>>= 0) ? 32 - x[TO_STRING](2).length : 32;
          },
          cosh: function(x) {
            return (exp(x = +x) + exp(-x)) / 2;
          },
          expm1: expm1,
          fround: function(x) {
            return new Float32Array([x])[0];
          },
          hypot: function(value1, value2) {
            var sum = 0,
                len1 = arguments.length,
                len2 = len1,
                args = Array(len1),
                larg = -Infinity,
                arg;
            while (len1--) {
              arg = args[len1] = +arguments[len1];
              if (arg == Infinity || arg == -Infinity)
                return Infinity;
              if (arg > larg)
                larg = arg;
            }
            larg = arg || 1;
            while (len2--)
              sum += pow(args[len2] / larg, 2);
            return larg * sqrt(sum);
          },
          imul: function(x, y) {
            var UInt16 = 0xffff,
                xn = +x,
                yn = +y,
                xl = UInt16 & xn,
                yl = UInt16 & yn;
            return 0 | xl * yl + ((UInt16 & xn >>> 16) * yl + xl * (UInt16 & yn >>> 16) << 16 >>> 0);
          },
          log1p: function(x) {
            return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x);
          },
          log10: function(x) {
            return log(x) / Math.LN10;
          },
          log2: function(x) {
            return log(x) / Math.LN2;
          },
          sign: sign,
          sinh: function(x) {
            return (abs(x = +x) < 1) ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2);
          },
          tanh: function(x) {
            var a = expm1(x = +x),
                b = expm1(-x);
            return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
          },
          trunc: trunc
        });
      }();
      !function(fromCharCode) {
        function assertNotRegExp(it) {
          if (cof(it) == REGEXP)
            throw TypeError();
        }
        $define(STATIC, STRING, {
          fromCodePoint: function(x) {
            var res = [],
                len = arguments.length,
                i = 0,
                code;
            while (len > i) {
              code = +arguments[i++];
              if (toIndex(code, 0x10ffff) !== code)
                throw RangeError(code + ' is not a valid code point');
              res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
            }
            return res.join('');
          },
          raw: function(callSite) {
            var raw = toObject(callSite.raw),
                len = toLength(raw.length),
                sln = arguments.length,
                res = [],
                i = 0;
            while (len > i) {
              res.push(String(raw[i++]));
              if (i < sln)
                res.push(String(arguments[i]));
            }
            return res.join('');
          }
        });
        $define(PROTO, STRING, {
          codePointAt: createPointAt(false),
          endsWith: function(searchString) {
            assertNotRegExp(searchString);
            var that = String(assertDefined(this)),
                endPosition = arguments[1],
                len = toLength(that.length),
                end = endPosition === undefined ? len : min(toLength(endPosition), len);
            searchString += '';
            return that.slice(end - searchString.length, end) === searchString;
          },
          includes: function(searchString) {
            assertNotRegExp(searchString);
            return !!~String(assertDefined(this)).indexOf(searchString, arguments[1]);
          },
          repeat: function(count) {
            var str = String(assertDefined(this)),
                res = '',
                n = toInteger(count);
            if (0 > n || n == Infinity)
              throw RangeError("Count can't be negative");
            for (; n > 0; (n >>>= 1) && (str += str))
              if (n & 1)
                res += str;
            return res;
          },
          startsWith: function(searchString) {
            assertNotRegExp(searchString);
            var that = String(assertDefined(this)),
                index = toLength(min(arguments[1], that.length));
            searchString += '';
            return that.slice(index, index + searchString.length) === searchString;
          }
        });
      }(String.fromCharCode);
      !function() {
        $define(STATIC + FORCED * checkDangerIterClosing(Array.from), ARRAY, {from: function(arrayLike) {
            var O = Object(assertDefined(arrayLike)),
                mapfn = arguments[1],
                mapping = mapfn !== undefined,
                f = mapping ? ctx(mapfn, arguments[2], 2) : undefined,
                index = 0,
                length,
                result,
                step;
            if (isIterable(O)) {
              result = new (generic(this, Array));
              safeIterClose(function(iterator) {
                for (; !(step = iterator.next()).done; index++) {
                  result[index] = mapping ? f(step.value, index) : step.value;
                }
              }, getIterator(O));
            } else {
              result = new (generic(this, Array))(length = toLength(O.length));
              for (; length > index; index++) {
                result[index] = mapping ? f(O[index], index) : O[index];
              }
            }
            result.length = index;
            return result;
          }});
        $define(STATIC, ARRAY, {of: function() {
            var index = 0,
                length = arguments.length,
                result = new (generic(this, Array))(length);
            while (length > index)
              result[index] = arguments[index++];
            result.length = length;
            return result;
          }});
        setSpecies(Array);
      }();
      !function() {
        $define(PROTO, ARRAY, {
          copyWithin: function(target, start) {
            var O = Object(assertDefined(this)),
                len = toLength(O.length),
                to = toIndex(target, len),
                from = toIndex(start, len),
                end = arguments[2],
                fin = end === undefined ? len : toIndex(end, len),
                count = min(fin - from, len - to),
                inc = 1;
            if (from < to && to < from + count) {
              inc = -1;
              from = from + count - 1;
              to = to + count - 1;
            }
            while (count-- > 0) {
              if (from in O)
                O[to] = O[from];
              else
                delete O[to];
              to += inc;
              from += inc;
            }
            return O;
          },
          fill: function(value) {
            var O = Object(assertDefined(this)),
                length = toLength(O.length),
                index = toIndex(arguments[1], length),
                end = arguments[2],
                endPos = end === undefined ? length : toIndex(end, length);
            while (endPos > index)
              O[index++] = value;
            return O;
          },
          find: createArrayMethod(5),
          findIndex: createArrayMethod(6)
        });
        if (framework) {
          forEach.call(array('find,findIndex,fill,copyWithin,entries,keys,values'), function(it) {
            ArrayUnscopables[it] = true;
          });
          SYMBOL_UNSCOPABLES in ArrayProto || hidden(ArrayProto, SYMBOL_UNSCOPABLES, ArrayUnscopables);
        }
      }();
      !function(at) {
        defineStdIterators(Array, ARRAY, function(iterated, kind) {
          set(this, ITER, {
            o: toObject(iterated),
            i: 0,
            k: kind
          });
        }, function() {
          var iter = this[ITER],
              O = iter.o,
              kind = iter.k,
              index = iter.i++;
          if (!O || index >= O.length) {
            iter.o = undefined;
            return iterResult(1);
          }
          if (kind == KEY)
            return iterResult(0, index);
          if (kind == VALUE)
            return iterResult(0, O[index]);
          return iterResult(0, [index, O[index]]);
        }, VALUE);
        Iterators[ARGUMENTS] = Iterators[ARRAY];
        defineStdIterators(String, STRING, function(iterated) {
          set(this, ITER, {
            o: String(iterated),
            i: 0
          });
        }, function() {
          var iter = this[ITER],
              O = iter.o,
              index = iter.i,
              point;
          if (index >= O.length)
            return iterResult(1);
          point = at.call(O, index);
          iter.i += point.length;
          return iterResult(0, point);
        });
      }(createPointAt(true));
      isFunction(setImmediate) && isFunction(clearImmediate) || function(ONREADYSTATECHANGE) {
        var postMessage = global.postMessage,
            addEventListener = global.addEventListener,
            MessageChannel = global.MessageChannel,
            counter = 0,
            queue = {},
            defer,
            channel,
            port;
        setImmediate = function(fn) {
          var args = [],
              i = 1;
          while (arguments.length > i)
            args.push(arguments[i++]);
          queue[++counter] = function() {
            invoke(isFunction(fn) ? fn : Function(fn), args);
          };
          defer(counter);
          return counter;
        };
        clearImmediate = function(id) {
          delete queue[id];
        };
        function run(id) {
          if (has(queue, id)) {
            var fn = queue[id];
            delete queue[id];
            fn();
          }
        }
        function listner(event) {
          run(event.data);
        }
        if (NODE) {
          defer = function(id) {
            nextTick(part.call(run, id));
          };
        } else if (addEventListener && isFunction(postMessage) && !global.importScripts) {
          defer = function(id) {
            postMessage(id, '*');
          };
          addEventListener('message', listner, false);
        } else if (isFunction(MessageChannel)) {
          channel = new MessageChannel;
          port = channel.port2;
          channel.port1.onmessage = listner;
          defer = ctx(port.postMessage, port, 1);
        } else if (document && ONREADYSTATECHANGE in document[CREATE_ELEMENT]('script')) {
          defer = function(id) {
            html.appendChild(document[CREATE_ELEMENT]('script'))[ONREADYSTATECHANGE] = function() {
              html.removeChild(this);
              run(id);
            };
          };
        } else {
          defer = function(id) {
            setTimeout(run, 0, id);
          };
        }
      }('onreadystatechange');
      $define(GLOBAL + BIND, {
        setImmediate: setImmediate,
        clearImmediate: clearImmediate
      });
      !function(Promise, test) {
        isFunction(Promise) && isFunction(Promise.resolve) && Promise.resolve(test = new Promise(function() {})) == test || function(asap, RECORD) {
          function isThenable(it) {
            var then;
            if (isObject(it))
              then = it.then;
            return isFunction(then) ? then : false;
          }
          function handledRejectionOrHasOnRejected(promise) {
            var record = promise[RECORD],
                chain = record.c,
                i = 0,
                react;
            if (record.h)
              return true;
            while (chain.length > i) {
              react = chain[i++];
              if (react.fail || handledRejectionOrHasOnRejected(react.P))
                return true;
            }
          }
          function notify(record, reject) {
            var chain = record.c;
            if (reject || chain.length)
              asap(function() {
                var promise = record.p,
                    value = record.v,
                    ok = record.s == 1,
                    i = 0;
                if (reject && !handledRejectionOrHasOnRejected(promise)) {
                  setTimeout(function() {
                    if (!handledRejectionOrHasOnRejected(promise)) {
                      if (NODE) {
                        if (!process.emit('unhandledRejection', value, promise)) {}
                      } else if (isFunction(console.error)) {
                        console.error('Unhandled promise rejection', value);
                      }
                    }
                  }, 1e3);
                } else
                  while (chain.length > i)
                    !function(react) {
                      var cb = ok ? react.ok : react.fail,
                          ret,
                          then;
                      try {
                        if (cb) {
                          if (!ok)
                            record.h = true;
                          ret = cb === true ? value : cb(value);
                          if (ret === react.P) {
                            react.rej(TypeError(PROMISE + '-chain cycle'));
                          } else if (then = isThenable(ret)) {
                            then.call(ret, react.res, react.rej);
                          } else
                            react.res(ret);
                        } else
                          react.rej(value);
                      } catch (err) {
                        react.rej(err);
                      }
                    }(chain[i++]);
                chain.length = 0;
              });
          }
          function resolve(value) {
            var record = this,
                then,
                wrapper;
            if (record.d)
              return ;
            record.d = true;
            record = record.r || record;
            try {
              if (then = isThenable(value)) {
                wrapper = {
                  r: record,
                  d: false
                };
                then.call(value, ctx(resolve, wrapper, 1), ctx(reject, wrapper, 1));
              } else {
                record.v = value;
                record.s = 1;
                notify(record);
              }
            } catch (err) {
              reject.call(wrapper || {
                r: record,
                d: false
              }, err);
            }
          }
          function reject(value) {
            var record = this;
            if (record.d)
              return ;
            record.d = true;
            record = record.r || record;
            record.v = value;
            record.s = 2;
            notify(record, true);
          }
          function getConstructor(C) {
            var S = assertObject(C)[SYMBOL_SPECIES];
            return S != undefined ? S : C;
          }
          Promise = function(executor) {
            assertFunction(executor);
            assertInstance(this, Promise, PROMISE);
            var record = {
              p: this,
              c: [],
              s: 0,
              d: false,
              v: undefined,
              h: false
            };
            hidden(this, RECORD, record);
            try {
              executor(ctx(resolve, record, 1), ctx(reject, record, 1));
            } catch (err) {
              reject.call(record, err);
            }
          };
          assignHidden(Promise[PROTOTYPE], {
            then: function(onFulfilled, onRejected) {
              var S = assertObject(assertObject(this)[CONSTRUCTOR])[SYMBOL_SPECIES];
              var react = {
                ok: isFunction(onFulfilled) ? onFulfilled : true,
                fail: isFunction(onRejected) ? onRejected : false
              },
                  P = react.P = new (S != undefined ? S : Promise)(function(resolve, reject) {
                    react.res = assertFunction(resolve);
                    react.rej = assertFunction(reject);
                  }),
                  record = this[RECORD];
              record.c.push(react);
              record.s && notify(record);
              return P;
            },
            'catch': function(onRejected) {
              return this.then(undefined, onRejected);
            }
          });
          assignHidden(Promise, {
            all: function(iterable) {
              var Promise = getConstructor(this),
                  values = [];
              return new Promise(function(resolve, reject) {
                forOf(iterable, false, push, values);
                var remaining = values.length,
                    results = Array(remaining);
                if (remaining)
                  forEach.call(values, function(promise, index) {
                    Promise.resolve(promise).then(function(value) {
                      results[index] = value;
                      --remaining || resolve(results);
                    }, reject);
                  });
                else
                  resolve(results);
              });
            },
            race: function(iterable) {
              var Promise = getConstructor(this);
              return new Promise(function(resolve, reject) {
                forOf(iterable, false, function(promise) {
                  Promise.resolve(promise).then(resolve, reject);
                });
              });
            },
            reject: function(r) {
              return new (getConstructor(this))(function(resolve, reject) {
                reject(r);
              });
            },
            resolve: function(x) {
              return isObject(x) && RECORD in x && getPrototypeOf(x) === this[PROTOTYPE] ? x : new (getConstructor(this))(function(resolve, reject) {
                resolve(x);
              });
            }
          });
        }(nextTick || setImmediate, safeSymbol('record'));
        setToStringTag(Promise, PROMISE);
        setSpecies(Promise);
        $define(GLOBAL + FORCED * !isNative(Promise), {Promise: Promise});
      }(global[PROMISE]);
      !function() {
        var UID = safeSymbol('uid'),
            O1 = safeSymbol('O1'),
            WEAK = safeSymbol('weak'),
            LEAK = safeSymbol('leak'),
            LAST = safeSymbol('last'),
            FIRST = safeSymbol('first'),
            SIZE = DESC ? safeSymbol('size') : 'size',
            uid = 0,
            tmp = {};
        function getCollection(C, NAME, methods, commonMethods, isMap, isWeak) {
          var ADDER = isMap ? 'set' : 'add',
              proto = C && C[PROTOTYPE],
              O = {};
          function initFromIterable(that, iterable) {
            if (iterable != undefined)
              forOf(iterable, isMap, that[ADDER], that);
            return that;
          }
          function fixSVZ(key, chain) {
            var method = proto[key];
            if (framework)
              proto[key] = function(a, b) {
                var result = method.call(this, a === 0 ? 0 : a, b);
                return chain ? this : result;
              };
          }
          if (!isNative(C) || !(isWeak || (!BUGGY_ITERATORS && has(proto, FOR_EACH) && has(proto, 'entries')))) {
            C = isWeak ? function(iterable) {
              assertInstance(this, C, NAME);
              set(this, UID, uid++);
              initFromIterable(this, iterable);
            } : function(iterable) {
              var that = this;
              assertInstance(that, C, NAME);
              set(that, O1, create(null));
              set(that, SIZE, 0);
              set(that, LAST, undefined);
              set(that, FIRST, undefined);
              initFromIterable(that, iterable);
            };
            assignHidden(assignHidden(C[PROTOTYPE], methods), commonMethods);
            isWeak || !DESC || defineProperty(C[PROTOTYPE], 'size', {get: function() {
                return assertDefined(this[SIZE]);
              }});
          } else {
            var Native = C,
                inst = new C,
                chain = inst[ADDER](isWeak ? {} : -0, 1),
                buggyZero;
            if (checkDangerIterClosing(function(O) {
              new C(O);
            })) {
              C = function(iterable) {
                assertInstance(this, C, NAME);
                return initFromIterable(new Native, iterable);
              };
              C[PROTOTYPE] = proto;
              if (framework)
                proto[CONSTRUCTOR] = C;
            }
            isWeak || inst[FOR_EACH](function(val, key) {
              buggyZero = 1 / key === -Infinity;
            });
            if (buggyZero) {
              fixSVZ('delete');
              fixSVZ('has');
              isMap && fixSVZ('get');
            }
            if (buggyZero || chain !== inst)
              fixSVZ(ADDER, true);
          }
          setToStringTag(C, NAME);
          setSpecies(C);
          O[NAME] = C;
          $define(GLOBAL + WRAP + FORCED * !isNative(C), O);
          isWeak || defineStdIterators(C, NAME, function(iterated, kind) {
            set(this, ITER, {
              o: iterated,
              k: kind
            });
          }, function() {
            var iter = this[ITER],
                kind = iter.k,
                entry = iter.l;
            while (entry && entry.r)
              entry = entry.p;
            if (!iter.o || !(iter.l = entry = entry ? entry.n : iter.o[FIRST])) {
              iter.o = undefined;
              return iterResult(1);
            }
            if (kind == KEY)
              return iterResult(0, entry.k);
            if (kind == VALUE)
              return iterResult(0, entry.v);
            return iterResult(0, [entry.k, entry.v]);
          }, isMap ? KEY + VALUE : VALUE, !isMap);
          return C;
        }
        function fastKey(it, create) {
          if (!isObject(it))
            return (typeof it == 'string' ? 'S' : 'P') + it;
          if (isFrozen(it))
            return 'F';
          if (!has(it, UID)) {
            if (!create)
              return 'E';
            hidden(it, UID, ++uid);
          }
          return 'O' + it[UID];
        }
        function getEntry(that, key) {
          var index = fastKey(key),
              entry;
          if (index != 'F')
            return that[O1][index];
          for (entry = that[FIRST]; entry; entry = entry.n) {
            if (entry.k == key)
              return entry;
          }
        }
        function def(that, key, value) {
          var entry = getEntry(that, key),
              prev,
              index;
          if (entry)
            entry.v = value;
          else {
            that[LAST] = entry = {
              i: index = fastKey(key, true),
              k: key,
              v: value,
              p: prev = that[LAST],
              n: undefined,
              r: false
            };
            if (!that[FIRST])
              that[FIRST] = entry;
            if (prev)
              prev.n = entry;
            that[SIZE]++;
            if (index != 'F')
              that[O1][index] = entry;
          }
          return that;
        }
        var collectionMethods = {
          clear: function() {
            for (var that = this,
                data = that[O1],
                entry = that[FIRST]; entry; entry = entry.n) {
              entry.r = true;
              if (entry.p)
                entry.p = entry.p.n = undefined;
              delete data[entry.i];
            }
            that[FIRST] = that[LAST] = undefined;
            that[SIZE] = 0;
          },
          'delete': function(key) {
            var that = this,
                entry = getEntry(that, key);
            if (entry) {
              var next = entry.n,
                  prev = entry.p;
              delete that[O1][entry.i];
              entry.r = true;
              if (prev)
                prev.n = next;
              if (next)
                next.p = prev;
              if (that[FIRST] == entry)
                that[FIRST] = next;
              if (that[LAST] == entry)
                that[LAST] = prev;
              that[SIZE]--;
            }
            return !!entry;
          },
          forEach: function(callbackfn) {
            var f = ctx(callbackfn, arguments[1], 3),
                entry;
            while (entry = entry ? entry.n : this[FIRST]) {
              f(entry.v, entry.k, this);
              while (entry && entry.r)
                entry = entry.p;
            }
          },
          has: function(key) {
            return !!getEntry(this, key);
          }
        };
        Map = getCollection(Map, MAP, {
          get: function(key) {
            var entry = getEntry(this, key);
            return entry && entry.v;
          },
          set: function(key, value) {
            return def(this, key === 0 ? 0 : key, value);
          }
        }, collectionMethods, true);
        Set = getCollection(Set, SET, {add: function(value) {
            return def(this, value = value === 0 ? 0 : value, value);
          }}, collectionMethods);
        function defWeak(that, key, value) {
          if (isFrozen(assertObject(key)))
            leakStore(that).set(key, value);
          else {
            has(key, WEAK) || hidden(key, WEAK, {});
            key[WEAK][that[UID]] = value;
          }
          return that;
        }
        function leakStore(that) {
          return that[LEAK] || hidden(that, LEAK, new Map)[LEAK];
        }
        var weakMethods = {
          'delete': function(key) {
            if (!isObject(key))
              return false;
            if (isFrozen(key))
              return leakStore(this)['delete'](key);
            return has(key, WEAK) && has(key[WEAK], this[UID]) && delete key[WEAK][this[UID]];
          },
          has: function(key) {
            if (!isObject(key))
              return false;
            if (isFrozen(key))
              return leakStore(this).has(key);
            return has(key, WEAK) && has(key[WEAK], this[UID]);
          }
        };
        WeakMap = getCollection(WeakMap, WEAKMAP, {
          get: function(key) {
            if (isObject(key)) {
              if (isFrozen(key))
                return leakStore(this).get(key);
              if (has(key, WEAK))
                return key[WEAK][this[UID]];
            }
          },
          set: function(key, value) {
            return defWeak(this, key, value);
          }
        }, weakMethods, true, true);
        if (framework && new WeakMap().set(Object.freeze(tmp), 7).get(tmp) != 7) {
          forEach.call(array('delete,has,get,set'), function(key) {
            var method = WeakMap[PROTOTYPE][key];
            WeakMap[PROTOTYPE][key] = function(a, b) {
              if (isObject(a) && isFrozen(a)) {
                var result = leakStore(this)[key](a, b);
                return key == 'set' ? this : result;
              }
              return method.call(this, a, b);
            };
          });
        }
        WeakSet = getCollection(WeakSet, WEAKSET, {add: function(value) {
            return defWeak(this, value, true);
          }}, weakMethods, false, true);
      }();
      !function() {
        function Enumerate(iterated) {
          var keys = [],
              key;
          for (key in iterated)
            keys.push(key);
          set(this, ITER, {
            o: iterated,
            a: keys,
            i: 0
          });
        }
        createIterator(Enumerate, OBJECT, function() {
          var iter = this[ITER],
              keys = iter.a,
              key;
          do {
            if (iter.i >= keys.length)
              return iterResult(1);
          } while (!((key = keys[iter.i++]) in iter.o));
          return iterResult(0, key);
        });
        function wrap(fn) {
          return function(it) {
            assertObject(it);
            try {
              return fn.apply(undefined, arguments), true;
            } catch (e) {
              return false;
            }
          };
        }
        function reflectGet(target, propertyKey) {
          var receiver = arguments.length < 3 ? target : arguments[2],
              desc = getOwnDescriptor(assertObject(target), propertyKey),
              proto;
          if (desc)
            return has(desc, 'value') ? desc.value : desc.get === undefined ? undefined : desc.get.call(receiver);
          return isObject(proto = getPrototypeOf(target)) ? reflectGet(proto, propertyKey, receiver) : undefined;
        }
        function reflectSet(target, propertyKey, V) {
          var receiver = arguments.length < 4 ? target : arguments[3],
              ownDesc = getOwnDescriptor(assertObject(target), propertyKey),
              existingDescriptor,
              proto;
          if (!ownDesc) {
            if (isObject(proto = getPrototypeOf(target))) {
              return reflectSet(proto, propertyKey, V, receiver);
            }
            ownDesc = descriptor(0);
          }
          if (has(ownDesc, 'value')) {
            if (ownDesc.writable === false || !isObject(receiver))
              return false;
            existingDescriptor = getOwnDescriptor(receiver, propertyKey) || descriptor(0);
            existingDescriptor.value = V;
            return defineProperty(receiver, propertyKey, existingDescriptor), true;
          }
          return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
        }
        var isExtensible = Object.isExtensible || returnIt;
        var reflect = {
          apply: ctx(call, apply, 3),
          construct: function(target, argumentsList) {
            var proto = assertFunction(arguments.length < 3 ? target : arguments[2])[PROTOTYPE],
                instance = create(isObject(proto) ? proto : ObjectProto),
                result = apply.call(target, instance, argumentsList);
            return isObject(result) ? result : instance;
          },
          defineProperty: wrap(defineProperty),
          deleteProperty: function(target, propertyKey) {
            var desc = getOwnDescriptor(assertObject(target), propertyKey);
            return desc && !desc.configurable ? false : delete target[propertyKey];
          },
          enumerate: function(target) {
            return new Enumerate(assertObject(target));
          },
          get: reflectGet,
          getOwnPropertyDescriptor: function(target, propertyKey) {
            return getOwnDescriptor(assertObject(target), propertyKey);
          },
          getPrototypeOf: function(target) {
            return getPrototypeOf(assertObject(target));
          },
          has: function(target, propertyKey) {
            return propertyKey in target;
          },
          isExtensible: function(target) {
            return !!isExtensible(assertObject(target));
          },
          ownKeys: ownKeys,
          preventExtensions: wrap(Object.preventExtensions || returnIt),
          set: reflectSet
        };
        if (setPrototypeOf)
          reflect.setPrototypeOf = function(target, proto) {
            return setPrototypeOf(assertObject(target), proto), true;
          };
        $define(GLOBAL, {Reflect: {}});
        $define(STATIC, 'Reflect', reflect);
      }();
      !function() {
        $define(PROTO, ARRAY, {includes: createArrayContains(true)});
        $define(PROTO, STRING, {at: createPointAt(true)});
        function createObjectToArray(isEntries) {
          return function(object) {
            var O = toObject(object),
                keys = getKeys(object),
                length = keys.length,
                i = 0,
                result = Array(length),
                key;
            if (isEntries)
              while (length > i)
                result[i] = [key = keys[i++], O[key]];
            else
              while (length > i)
                result[i] = O[keys[i++]];
            return result;
          };
        }
        $define(STATIC, OBJECT, {
          getOwnPropertyDescriptors: function(object) {
            var O = toObject(object),
                result = {};
            forEach.call(ownKeys(O), function(key) {
              defineProperty(result, key, descriptor(0, getOwnDescriptor(O, key)));
            });
            return result;
          },
          values: createObjectToArray(false),
          entries: createObjectToArray(true)
        });
        $define(STATIC, REGEXP, {escape: createReplacer(/([\\\-[\]{}()*+?.,^$|])/g, '\\$1', true)});
      }();
      !function(REFERENCE) {
        REFERENCE_GET = getWellKnownSymbol(REFERENCE + 'Get', true);
        var REFERENCE_SET = getWellKnownSymbol(REFERENCE + SET, true),
            REFERENCE_DELETE = getWellKnownSymbol(REFERENCE + 'Delete', true);
        $define(STATIC, SYMBOL, {
          referenceGet: REFERENCE_GET,
          referenceSet: REFERENCE_SET,
          referenceDelete: REFERENCE_DELETE
        });
        hidden(FunctionProto, REFERENCE_GET, returnThis);
        function setMapMethods(Constructor) {
          if (Constructor) {
            var MapProto = Constructor[PROTOTYPE];
            hidden(MapProto, REFERENCE_GET, MapProto.get);
            hidden(MapProto, REFERENCE_SET, MapProto.set);
            hidden(MapProto, REFERENCE_DELETE, MapProto['delete']);
          }
        }
        setMapMethods(Map);
        setMapMethods(WeakMap);
      }('reference');
      !function(DICT) {
        Dict = function(iterable) {
          var dict = create(null);
          if (iterable != undefined) {
            if (isIterable(iterable)) {
              forOf(iterable, true, function(key, value) {
                dict[key] = value;
              });
            } else
              assign(dict, iterable);
          }
          return dict;
        };
        Dict[PROTOTYPE] = null;
        function DictIterator(iterated, kind) {
          set(this, ITER, {
            o: toObject(iterated),
            a: getKeys(iterated),
            i: 0,
            k: kind
          });
        }
        createIterator(DictIterator, DICT, function() {
          var iter = this[ITER],
              O = iter.o,
              keys = iter.a,
              kind = iter.k,
              key;
          do {
            if (iter.i >= keys.length) {
              iter.o = undefined;
              return iterResult(1);
            }
          } while (!has(O, key = keys[iter.i++]));
          if (kind == KEY)
            return iterResult(0, key);
          if (kind == VALUE)
            return iterResult(0, O[key]);
          return iterResult(0, [key, O[key]]);
        });
        function createDictIter(kind) {
          return function(it) {
            return new DictIterator(it, kind);
          };
        }
        function createDictMethod(type) {
          var isMap = type == 1,
              isEvery = type == 4;
          return function(object, callbackfn, that) {
            var f = ctx(callbackfn, that, 3),
                O = toObject(object),
                result = isMap || type == 7 || type == 2 ? new (generic(this, Dict)) : undefined,
                key,
                val,
                res;
            for (key in O)
              if (has(O, key)) {
                val = O[key];
                res = f(val, key, object);
                if (type) {
                  if (isMap)
                    result[key] = res;
                  else if (res)
                    switch (type) {
                      case 2:
                        result[key] = val;
                        break;
                      case 3:
                        return true;
                      case 5:
                        return val;
                      case 6:
                        return key;
                      case 7:
                        result[res[0]] = res[1];
                    }
                  else if (isEvery)
                    return false;
                }
              }
            return type == 3 || isEvery ? isEvery : result;
          };
        }
        function createDictReduce(isTurn) {
          return function(object, mapfn, init) {
            assertFunction(mapfn);
            var O = toObject(object),
                keys = getKeys(O),
                length = keys.length,
                i = 0,
                memo,
                key,
                result;
            if (isTurn)
              memo = init == undefined ? new (generic(this, Dict)) : Object(init);
            else if (arguments.length < 3) {
              assert(length, REDUCE_ERROR);
              memo = O[keys[i++]];
            } else
              memo = Object(init);
            while (length > i)
              if (has(O, key = keys[i++])) {
                result = mapfn(memo, O[key], key, object);
                if (isTurn) {
                  if (result === false)
                    break;
                } else
                  memo = result;
              }
            return memo;
          };
        }
        var findKey = createDictMethod(6);
        function includes(object, el) {
          return (el == el ? keyOf(object, el) : findKey(object, sameNaN)) !== undefined;
        }
        var dictMethods = {
          keys: createDictIter(KEY),
          values: createDictIter(VALUE),
          entries: createDictIter(KEY + VALUE),
          forEach: createDictMethod(0),
          map: createDictMethod(1),
          filter: createDictMethod(2),
          some: createDictMethod(3),
          every: createDictMethod(4),
          find: createDictMethod(5),
          findKey: findKey,
          mapPairs: createDictMethod(7),
          reduce: createDictReduce(false),
          turn: createDictReduce(true),
          keyOf: keyOf,
          includes: includes,
          has: has,
          get: get,
          set: createDefiner(0),
          isDict: function(it) {
            return isObject(it) && getPrototypeOf(it) === Dict[PROTOTYPE];
          }
        };
        if (REFERENCE_GET)
          for (var key in dictMethods)
            !function(fn) {
              function method() {
                for (var args = [this],
                    i = 0; i < arguments.length; )
                  args.push(arguments[i++]);
                return invoke(fn, args);
              }
              fn[REFERENCE_GET] = function() {
                return method;
              };
            }(dictMethods[key]);
        $define(GLOBAL + FORCED, {Dict: assignHidden(Dict, dictMethods)});
      }('Dict');
      !function(ENTRIES, FN) {
        function $for(iterable, entries) {
          if (!(this instanceof $for))
            return new $for(iterable, entries);
          this[ITER] = getIterator(iterable);
          this[ENTRIES] = !!entries;
        }
        createIterator($for, 'Wrapper', function() {
          return this[ITER].next();
        });
        var $forProto = $for[PROTOTYPE];
        setIterator($forProto, function() {
          return this[ITER];
        });
        function createChainIterator(next) {
          function Iter(I, fn, that) {
            this[ITER] = getIterator(I);
            this[ENTRIES] = I[ENTRIES];
            this[FN] = ctx(fn, that, I[ENTRIES] ? 2 : 1);
          }
          createIterator(Iter, 'Chain', next, $forProto);
          setIterator(Iter[PROTOTYPE], returnThis);
          return Iter;
        }
        var MapIter = createChainIterator(function() {
          var step = this[ITER].next();
          return step.done ? step : iterResult(0, stepCall(this[FN], step.value, this[ENTRIES]));
        });
        var FilterIter = createChainIterator(function() {
          for (; ; ) {
            var step = this[ITER].next();
            if (step.done || stepCall(this[FN], step.value, this[ENTRIES]))
              return step;
          }
        });
        assignHidden($forProto, {
          of: function(fn, that) {
            forOf(this, this[ENTRIES], fn, that);
          },
          array: function(fn, that) {
            var result = [];
            forOf(fn != undefined ? this.map(fn, that) : this, false, push, result);
            return result;
          },
          filter: function(fn, that) {
            return new FilterIter(this, fn, that);
          },
          map: function(fn, that) {
            return new MapIter(this, fn, that);
          }
        });
        $for.isIterable = isIterable;
        $for.getIterator = getIterator;
        $define(GLOBAL + FORCED, {$for: $for});
      }('entries', safeSymbol('fn'));
      $define(GLOBAL + FORCED, {delay: function(time) {
          return new Promise(function(resolve) {
            setTimeout(resolve, time, true);
          });
        }});
      !function(_, toLocaleString) {
        core._ = path._ = path._ || {};
        $define(PROTO + FORCED, FUNCTION, {
          part: part,
          only: function(numberArguments, that) {
            var fn = assertFunction(this),
                n = toLength(numberArguments),
                isThat = arguments.length > 1;
            return function() {
              var length = min(n, arguments.length),
                  args = Array(length),
                  i = 0;
              while (length > i)
                args[i] = arguments[i++];
              return invoke(fn, args, isThat ? that : this);
            };
          }
        });
        function tie(key) {
          var that = this,
              bound = {};
          return hidden(that, _, function(key) {
            if (key === undefined || !(key in that))
              return toLocaleString.call(that);
            return has(bound, key) ? bound[key] : (bound[key] = ctx(that[key], that, -1));
          })[_](key);
        }
        hidden(path._, TO_STRING, function() {
          return _;
        });
        hidden(ObjectProto, _, tie);
        DESC || hidden(ArrayProto, _, tie);
      }(DESC ? uid('tie') : TO_LOCALE, ObjectProto[TO_LOCALE]);
      !function() {
        function define(target, mixin) {
          var keys = ownKeys(toObject(mixin)),
              length = keys.length,
              i = 0,
              key;
          while (length > i)
            defineProperty(target, key = keys[i++], getOwnDescriptor(mixin, key));
          return target;
        }
        ;
        $define(STATIC + FORCED, OBJECT, {
          isObject: isObject,
          classof: classof,
          define: define,
          make: function(proto, mixin) {
            return define(create(proto), mixin);
          }
        });
      }();
      $define(PROTO + FORCED, ARRAY, {turn: function(fn, target) {
          assertFunction(fn);
          var memo = target == undefined ? [] : Object(target),
              O = ES5Object(this),
              length = toLength(O.length),
              index = 0;
          while (length > index)
            if (fn(memo, O[index], index++, this) === false)
              break;
          return memo;
        }});
      if (framework)
        ArrayUnscopables.turn = true;
      !function(numberMethods) {
        function NumberIterator(iterated) {
          set(this, ITER, {
            l: toLength(iterated),
            i: 0
          });
        }
        createIterator(NumberIterator, NUMBER, function() {
          var iter = this[ITER],
              i = iter.i++;
          return i < iter.l ? iterResult(0, i) : iterResult(1);
        });
        defineIterator(Number, NUMBER, function() {
          return new NumberIterator(this);
        });
        numberMethods.random = function(lim) {
          var a = +this,
              b = lim == undefined ? 0 : +lim,
              m = min(a, b);
          return random() * (max(a, b) - m) + m;
        };
        forEach.call(array('round,floor,ceil,abs,sin,asin,cos,acos,tan,atan,exp,sqrt,max,min,pow,atan2,' + 'acosh,asinh,atanh,cbrt,clz32,cosh,expm1,hypot,imul,log1p,log10,log2,sign,sinh,tanh,trunc'), function(key) {
          var fn = Math[key];
          if (fn)
            numberMethods[key] = function() {
              var args = [+this],
                  i = 0;
              while (arguments.length > i)
                args.push(arguments[i++]);
              return invoke(fn, args);
            };
        });
        $define(PROTO + FORCED, NUMBER, numberMethods);
      }({});
      !function() {
        var escapeHTMLDict = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&apos;'
        },
            unescapeHTMLDict = {},
            key;
        for (key in escapeHTMLDict)
          unescapeHTMLDict[escapeHTMLDict[key]] = key;
        $define(PROTO + FORCED, STRING, {
          escapeHTML: createReplacer(/[&<>"']/g, escapeHTMLDict),
          unescapeHTML: createReplacer(/&(?:amp|lt|gt|quot|apos);/g, unescapeHTMLDict)
        });
      }();
      !function(formatRegExp, flexioRegExp, locales, current, SECONDS, MINUTES, HOURS, MONTH, YEAR) {
        function createFormat(prefix) {
          return function(template, locale) {
            var that = this,
                dict = locales[has(locales, locale) ? locale : current];
            function get(unit) {
              return that[prefix + unit]();
            }
            return String(template).replace(formatRegExp, function(part) {
              switch (part) {
                case 's':
                  return get(SECONDS);
                case 'ss':
                  return lz(get(SECONDS));
                case 'm':
                  return get(MINUTES);
                case 'mm':
                  return lz(get(MINUTES));
                case 'h':
                  return get(HOURS);
                case 'hh':
                  return lz(get(HOURS));
                case 'D':
                  return get(DATE);
                case 'DD':
                  return lz(get(DATE));
                case 'W':
                  return dict[0][get('Day')];
                case 'N':
                  return get(MONTH) + 1;
                case 'NN':
                  return lz(get(MONTH) + 1);
                case 'M':
                  return dict[2][get(MONTH)];
                case 'MM':
                  return dict[1][get(MONTH)];
                case 'Y':
                  return get(YEAR);
                case 'YY':
                  return lz(get(YEAR) % 100);
              }
              return part;
            });
          };
        }
        function addLocale(lang, locale) {
          function split(index) {
            var result = [];
            forEach.call(array(locale.months), function(it) {
              result.push(it.replace(flexioRegExp, '$' + index));
            });
            return result;
          }
          locales[lang] = [array(locale.weekdays), split(1), split(2)];
          return core;
        }
        $define(PROTO + FORCED, DATE, {
          format: createFormat('get'),
          formatUTC: createFormat('getUTC')
        });
        addLocale(current, {
          weekdays: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday',
          months: 'January,February,March,April,May,June,July,August,September,October,November,December'
        });
        addLocale('ru', {
          weekdays: 'Воскресенье,Понедельник,Вторник,Среда,Четверг,Пятница,Суббота',
          months: 'Январ:я|ь,Феврал:я|ь,Март:а|,Апрел:я|ь,Ма:я|й,Июн:я|ь,' + 'Июл:я|ь,Август:а|,Сентябр:я|ь,Октябр:я|ь,Ноябр:я|ь,Декабр:я|ь'
        });
        core.locale = function(locale) {
          return has(locales, locale) ? current = locale : current;
        };
        core.addLocale = addLocale;
      }(/\b\w\w?\b/g, /:(.*)\|(.*)$/, {}, 'en', 'Seconds', 'Minutes', 'Hours', 'Month', 'FullYear');
      $define(GLOBAL + FORCED, {global: global});
      !function(arrayStatics) {
        function setArrayStatics(keys, length) {
          forEach.call(array(keys), function(key) {
            if (key in ArrayProto)
              arrayStatics[key] = ctx(call, ArrayProto[key], length);
          });
        }
        setArrayStatics('pop,reverse,shift,keys,values,entries', 1);
        setArrayStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
        setArrayStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' + 'reduce,reduceRight,copyWithin,fill,turn');
        $define(STATIC, ARRAY, arrayStatics);
      }({});
      !function(NodeList) {
        if (framework && NodeList && !(SYMBOL_ITERATOR in NodeList[PROTOTYPE])) {
          hidden(NodeList[PROTOTYPE], SYMBOL_ITERATOR, Iterators[ARRAY]);
        }
        Iterators.NodeList = Iterators[ARRAY];
      }(global.NodeList);
      !function(log, enabled) {
        forEach.call(array('assert,clear,count,debug,dir,dirxml,error,exception,' + 'group,groupCollapsed,groupEnd,info,isIndependentlyComposed,log,' + 'markTimeline,profile,profileEnd,table,time,timeEnd,timeline,' + 'timelineEnd,timeStamp,trace,warn'), function(key) {
          log[key] = function() {
            if (enabled && key in console)
              return apply.call(console[key], console, arguments);
          };
        });
        $define(GLOBAL + FORCED, {log: assign(log.log, log, {
            enable: function() {
              enabled = true;
            },
            disable: function() {
              enabled = false;
            }
          })});
      }({}, true);
    }(typeof self != 'undefined' && self.Math === Math ? self : Function('return this')(), false);
    module.exports = {
      "default": module.exports,
      __esModule: true
    };
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactLink", ["npm:react@0.13.1/lib/React"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var React = require("npm:react@0.13.1/lib/React");
  function ReactLink(value, requestChange) {
    this.value = value;
    this.requestChange = requestChange;
  }
  function createLinkTypeChecker(linkType) {
    var shapes = {
      value: typeof linkType === 'undefined' ? React.PropTypes.any.isRequired : linkType.isRequired,
      requestChange: React.PropTypes.func.isRequired
    };
    return React.PropTypes.shape(shapes);
  }
  ReactLink.PropTypes = {link: createLinkTypeChecker};
  module.exports = ReactLink;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactStateSetters", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ReactStateSetters = {
    createStateSetter: function(component, funcReturningState) {
      return function(a, b, c, d, e, f) {
        var partialState = funcReturningState.call(component, a, b, c, d, e, f);
        if (partialState) {
          component.setState(partialState);
        }
      };
    },
    createStateKeySetter: function(component, key) {
      var cache = component.__keySetters || (component.__keySetters = {});
      return cache[key] || (cache[key] = createStateKeySetter(component, key));
    }
  };
  function createStateKeySetter(component, key) {
    var partialState = {};
    return function stateKeySetter(value) {
      partialState[key] = value;
      component.setState(partialState);
    };
  }
  ReactStateSetters.Mixin = {
    createStateSetter: function(funcReturningState) {
      return ReactStateSetters.createStateSetter(this, funcReturningState);
    },
    createStateKeySetter: function(key) {
      return ReactStateSetters.createStateKeySetter(this, key);
    }
  };
  module.exports = ReactStateSetters;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactComponentWithPureRenderMixin", ["npm:react@0.13.1/lib/shallowEqual"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var shallowEqual = require("npm:react@0.13.1/lib/shallowEqual");
  var ReactComponentWithPureRenderMixin = {shouldComponentUpdate: function(nextProps, nextState) {
      return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    }};
  module.exports = ReactComponentWithPureRenderMixin;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactTransitionChildMapping", ["npm:react@0.13.1/lib/ReactChildren", "npm:react@0.13.1/lib/ReactFragment"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ReactChildren = require("npm:react@0.13.1/lib/ReactChildren");
  var ReactFragment = require("npm:react@0.13.1/lib/ReactFragment");
  var ReactTransitionChildMapping = {
    getChildMapping: function(children) {
      if (!children) {
        return children;
      }
      return ReactFragment.extract(ReactChildren.map(children, function(child) {
        return child;
      }));
    },
    mergeChildMappings: function(prev, next) {
      prev = prev || {};
      next = next || {};
      function getValueForKey(key) {
        if (next.hasOwnProperty(key)) {
          return next[key];
        } else {
          return prev[key];
        }
      }
      var nextKeysPending = {};
      var pendingKeys = [];
      for (var prevKey in prev) {
        if (next.hasOwnProperty(prevKey)) {
          if (pendingKeys.length) {
            nextKeysPending[prevKey] = pendingKeys;
            pendingKeys = [];
          }
        } else {
          pendingKeys.push(prevKey);
        }
      }
      var i;
      var childMapping = {};
      for (var nextKey in next) {
        if (nextKeysPending.hasOwnProperty(nextKey)) {
          for (i = 0; i < nextKeysPending[nextKey].length; i++) {
            var pendingNextKey = nextKeysPending[nextKey][i];
            childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
          }
        }
        childMapping[nextKey] = getValueForKey(nextKey);
      }
      for (i = 0; i < pendingKeys.length; i++) {
        childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
      }
      return childMapping;
    }
  };
  module.exports = ReactTransitionChildMapping;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/joinClasses", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function joinClasses(className) {
    if (!className) {
      className = '';
    }
    var nextClass;
    var argLength = arguments.length;
    if (argLength > 1) {
      for (var ii = 1; ii < argLength; ii++) {
        nextClass = arguments[ii];
        if (nextClass) {
          className = (className ? className + ' ' : '') + nextClass;
        }
      }
    }
    return className;
  }
  module.exports = joinClasses;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/CSSCore", ["npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var CSSCore = {
      addClass: function(element, className) {
        ("production" !== process.env.NODE_ENV ? invariant(!/\s/.test(className), 'CSSCore.addClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(!/\s/.test(className)));
        if (className) {
          if (element.classList) {
            element.classList.add(className);
          } else if (!CSSCore.hasClass(element, className)) {
            element.className = element.className + ' ' + className;
          }
        }
        return element;
      },
      removeClass: function(element, className) {
        ("production" !== process.env.NODE_ENV ? invariant(!/\s/.test(className), 'CSSCore.removeClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(!/\s/.test(className)));
        if (className) {
          if (element.classList) {
            element.classList.remove(className);
          } else if (CSSCore.hasClass(element, className)) {
            element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
          }
        }
        return element;
      },
      conditionClass: function(element, className, bool) {
        return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
      },
      hasClass: function(element, className) {
        ("production" !== process.env.NODE_ENV ? invariant(!/\s/.test(className), 'CSS.hasClass takes only a single class name.') : invariant(!/\s/.test(className)));
        if (element.classList) {
          return !!className && element.classList.contains(className);
        }
        return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
      }
    };
    module.exports = CSSCore;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactTransitionEvents", ["npm:react@0.13.1/lib/ExecutionEnvironment"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ExecutionEnvironment = require("npm:react@0.13.1/lib/ExecutionEnvironment");
  var EVENT_NAME_MAP = {
    transitionend: {
      'transition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'mozTransitionEnd',
      'OTransition': 'oTransitionEnd',
      'msTransition': 'MSTransitionEnd'
    },
    animationend: {
      'animation': 'animationend',
      'WebkitAnimation': 'webkitAnimationEnd',
      'MozAnimation': 'mozAnimationEnd',
      'OAnimation': 'oAnimationEnd',
      'msAnimation': 'MSAnimationEnd'
    }
  };
  var endEvents = [];
  function detectEvents() {
    var testEl = document.createElement('div');
    var style = testEl.style;
    if (!('AnimationEvent' in window)) {
      delete EVENT_NAME_MAP.animationend.animation;
    }
    if (!('TransitionEvent' in window)) {
      delete EVENT_NAME_MAP.transitionend.transition;
    }
    for (var baseEventName in EVENT_NAME_MAP) {
      var baseEvents = EVENT_NAME_MAP[baseEventName];
      for (var styleName in baseEvents) {
        if (styleName in style) {
          endEvents.push(baseEvents[styleName]);
          break;
        }
      }
    }
  }
  if (ExecutionEnvironment.canUseDOM) {
    detectEvents();
  }
  function addEventListener(node, eventName, eventListener) {
    node.addEventListener(eventName, eventListener, false);
  }
  function removeEventListener(node, eventName, eventListener) {
    node.removeEventListener(eventName, eventListener, false);
  }
  var ReactTransitionEvents = {
    addEndEventListener: function(node, eventListener) {
      if (endEvents.length === 0) {
        window.setTimeout(eventListener, 0);
        return ;
      }
      endEvents.forEach(function(endEvent) {
        addEventListener(node, endEvent, eventListener);
      });
    },
    removeEndEventListener: function(node, eventListener) {
      if (endEvents.length === 0) {
        return ;
      }
      endEvents.forEach(function(endEvent) {
        removeEventListener(node, endEvent, eventListener);
      });
    }
  };
  module.exports = ReactTransitionEvents;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/cx", ["npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var warning = require("npm:react@0.13.1/lib/warning");
    var warned = false;
    function cx(classNames) {
      if ("production" !== process.env.NODE_ENV) {
        ("production" !== process.env.NODE_ENV ? warning(warned, 'React.addons.classSet will be deprecated in a future version. See ' + 'http://fb.me/react-addons-classset') : null);
        warned = true;
      }
      if (typeof classNames == 'object') {
        return Object.keys(classNames).filter(function(className) {
          return classNames[className];
        }).join(' ');
      } else {
        return Array.prototype.join.call(arguments, ' ');
      }
    }
    module.exports = cx;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/update", ["npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/keyOf", "npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var assign = require("npm:react@0.13.1/lib/Object.assign");
    var keyOf = require("npm:react@0.13.1/lib/keyOf");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    function shallowCopy(x) {
      if (Array.isArray(x)) {
        return x.concat();
      } else if (x && typeof x === 'object') {
        return assign(new x.constructor(), x);
      } else {
        return x;
      }
    }
    var COMMAND_PUSH = keyOf({$push: null});
    var COMMAND_UNSHIFT = keyOf({$unshift: null});
    var COMMAND_SPLICE = keyOf({$splice: null});
    var COMMAND_SET = keyOf({$set: null});
    var COMMAND_MERGE = keyOf({$merge: null});
    var COMMAND_APPLY = keyOf({$apply: null});
    var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];
    var ALL_COMMANDS_SET = {};
    ALL_COMMANDS_LIST.forEach(function(command) {
      ALL_COMMANDS_SET[command] = true;
    });
    function invariantArrayCase(value, spec, command) {
      ("production" !== process.env.NODE_ENV ? invariant(Array.isArray(value), 'update(): expected target of %s to be an array; got %s.', command, value) : invariant(Array.isArray(value)));
      var specValue = spec[command];
      ("production" !== process.env.NODE_ENV ? invariant(Array.isArray(specValue), 'update(): expected spec of %s to be an array; got %s. ' + 'Did you forget to wrap your parameter in an array?', command, specValue) : invariant(Array.isArray(specValue)));
    }
    function update(value, spec) {
      ("production" !== process.env.NODE_ENV ? invariant(typeof spec === 'object', 'update(): You provided a key path to update() that did not contain one ' + 'of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : invariant(typeof spec === 'object'));
      if (spec.hasOwnProperty(COMMAND_SET)) {
        ("production" !== process.env.NODE_ENV ? invariant(Object.keys(spec).length === 1, 'Cannot have more than one key in an object with %s', COMMAND_SET) : invariant(Object.keys(spec).length === 1));
        return spec[COMMAND_SET];
      }
      var nextValue = shallowCopy(value);
      if (spec.hasOwnProperty(COMMAND_MERGE)) {
        var mergeObj = spec[COMMAND_MERGE];
        ("production" !== process.env.NODE_ENV ? invariant(mergeObj && typeof mergeObj === 'object', 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : invariant(mergeObj && typeof mergeObj === 'object'));
        ("production" !== process.env.NODE_ENV ? invariant(nextValue && typeof nextValue === 'object', 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : invariant(nextValue && typeof nextValue === 'object'));
        assign(nextValue, spec[COMMAND_MERGE]);
      }
      if (spec.hasOwnProperty(COMMAND_PUSH)) {
        invariantArrayCase(value, spec, COMMAND_PUSH);
        spec[COMMAND_PUSH].forEach(function(item) {
          nextValue.push(item);
        });
      }
      if (spec.hasOwnProperty(COMMAND_UNSHIFT)) {
        invariantArrayCase(value, spec, COMMAND_UNSHIFT);
        spec[COMMAND_UNSHIFT].forEach(function(item) {
          nextValue.unshift(item);
        });
      }
      if (spec.hasOwnProperty(COMMAND_SPLICE)) {
        ("production" !== process.env.NODE_ENV ? invariant(Array.isArray(value), 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : invariant(Array.isArray(value)));
        ("production" !== process.env.NODE_ENV ? invariant(Array.isArray(spec[COMMAND_SPLICE]), 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(Array.isArray(spec[COMMAND_SPLICE])));
        spec[COMMAND_SPLICE].forEach(function(args) {
          ("production" !== process.env.NODE_ENV ? invariant(Array.isArray(args), 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(Array.isArray(args)));
          nextValue.splice.apply(nextValue, args);
        });
      }
      if (spec.hasOwnProperty(COMMAND_APPLY)) {
        ("production" !== process.env.NODE_ENV ? invariant(typeof spec[COMMAND_APPLY] === 'function', 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : invariant(typeof spec[COMMAND_APPLY] === 'function'));
        nextValue = spec[COMMAND_APPLY](nextValue);
      }
      for (var k in spec) {
        if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
          nextValue[k] = update(value[k], spec[k]);
        }
      }
      return nextValue;
    }
    module.exports = update;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactTestUtils", ["npm:react@0.13.1/lib/EventConstants", "npm:react@0.13.1/lib/EventPluginHub", "npm:react@0.13.1/lib/EventPropagators", "npm:react@0.13.1/lib/React", "npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/ReactEmptyComponent", "npm:react@0.13.1/lib/ReactBrowserEventEmitter", "npm:react@0.13.1/lib/ReactCompositeComponent", "npm:react@0.13.1/lib/ReactInstanceHandles", "npm:react@0.13.1/lib/ReactInstanceMap", "npm:react@0.13.1/lib/ReactMount", "npm:react@0.13.1/lib/ReactUpdates", "npm:react@0.13.1/lib/SyntheticEvent", "npm:react@0.13.1/lib/Object.assign"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var EventConstants = require("npm:react@0.13.1/lib/EventConstants");
  var EventPluginHub = require("npm:react@0.13.1/lib/EventPluginHub");
  var EventPropagators = require("npm:react@0.13.1/lib/EventPropagators");
  var React = require("npm:react@0.13.1/lib/React");
  var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
  var ReactEmptyComponent = require("npm:react@0.13.1/lib/ReactEmptyComponent");
  var ReactBrowserEventEmitter = require("npm:react@0.13.1/lib/ReactBrowserEventEmitter");
  var ReactCompositeComponent = require("npm:react@0.13.1/lib/ReactCompositeComponent");
  var ReactInstanceHandles = require("npm:react@0.13.1/lib/ReactInstanceHandles");
  var ReactInstanceMap = require("npm:react@0.13.1/lib/ReactInstanceMap");
  var ReactMount = require("npm:react@0.13.1/lib/ReactMount");
  var ReactUpdates = require("npm:react@0.13.1/lib/ReactUpdates");
  var SyntheticEvent = require("npm:react@0.13.1/lib/SyntheticEvent");
  var assign = require("npm:react@0.13.1/lib/Object.assign");
  var topLevelTypes = EventConstants.topLevelTypes;
  function Event(suffix) {}
  var ReactTestUtils = {
    renderIntoDocument: function(instance) {
      var div = document.createElement('div');
      return React.render(instance, div);
    },
    isElement: function(element) {
      return ReactElement.isValidElement(element);
    },
    isElementOfType: function(inst, convenienceConstructor) {
      return (ReactElement.isValidElement(inst) && inst.type === convenienceConstructor);
    },
    isDOMComponent: function(inst) {
      return !!(inst && inst.tagName && inst.getDOMNode);
    },
    isDOMComponentElement: function(inst) {
      return !!(inst && ReactElement.isValidElement(inst) && !!inst.tagName);
    },
    isCompositeComponent: function(inst) {
      return typeof inst.render === 'function' && typeof inst.setState === 'function';
    },
    isCompositeComponentWithType: function(inst, type) {
      return !!(ReactTestUtils.isCompositeComponent(inst) && (inst.constructor === type));
    },
    isCompositeComponentElement: function(inst) {
      if (!ReactElement.isValidElement(inst)) {
        return false;
      }
      var prototype = inst.type.prototype;
      return (typeof prototype.render === 'function' && typeof prototype.setState === 'function');
    },
    isCompositeComponentElementWithType: function(inst, type) {
      return !!(ReactTestUtils.isCompositeComponentElement(inst) && (inst.constructor === type));
    },
    getRenderedChildOfCompositeComponent: function(inst) {
      if (!ReactTestUtils.isCompositeComponent(inst)) {
        return null;
      }
      var internalInstance = ReactInstanceMap.get(inst);
      return internalInstance._renderedComponent.getPublicInstance();
    },
    findAllInRenderedTree: function(inst, test) {
      if (!inst) {
        return [];
      }
      var ret = test(inst) ? [inst] : [];
      if (ReactTestUtils.isDOMComponent(inst)) {
        var internalInstance = ReactInstanceMap.get(inst);
        var renderedChildren = internalInstance._renderedComponent._renderedChildren;
        var key;
        for (key in renderedChildren) {
          if (!renderedChildren.hasOwnProperty(key)) {
            continue;
          }
          if (!renderedChildren[key].getPublicInstance) {
            continue;
          }
          ret = ret.concat(ReactTestUtils.findAllInRenderedTree(renderedChildren[key].getPublicInstance(), test));
        }
      } else if (ReactTestUtils.isCompositeComponent(inst)) {
        ret = ret.concat(ReactTestUtils.findAllInRenderedTree(ReactTestUtils.getRenderedChildOfCompositeComponent(inst), test));
      }
      return ret;
    },
    scryRenderedDOMComponentsWithClass: function(root, className) {
      return ReactTestUtils.findAllInRenderedTree(root, function(inst) {
        var instClassName = inst.props.className;
        return ReactTestUtils.isDOMComponent(inst) && ((instClassName && (' ' + instClassName + ' ').indexOf(' ' + className + ' ') !== -1));
      });
    },
    findRenderedDOMComponentWithClass: function(root, className) {
      var all = ReactTestUtils.scryRenderedDOMComponentsWithClass(root, className);
      if (all.length !== 1) {
        throw new Error('Did not find exactly one match ' + '(found: ' + all.length + ') for class:' + className);
      }
      return all[0];
    },
    scryRenderedDOMComponentsWithTag: function(root, tagName) {
      return ReactTestUtils.findAllInRenderedTree(root, function(inst) {
        return ReactTestUtils.isDOMComponent(inst) && inst.tagName === tagName.toUpperCase();
      });
    },
    findRenderedDOMComponentWithTag: function(root, tagName) {
      var all = ReactTestUtils.scryRenderedDOMComponentsWithTag(root, tagName);
      if (all.length !== 1) {
        throw new Error('Did not find exactly one match for tag:' + tagName);
      }
      return all[0];
    },
    scryRenderedComponentsWithType: function(root, componentType) {
      return ReactTestUtils.findAllInRenderedTree(root, function(inst) {
        return ReactTestUtils.isCompositeComponentWithType(inst, componentType);
      });
    },
    findRenderedComponentWithType: function(root, componentType) {
      var all = ReactTestUtils.scryRenderedComponentsWithType(root, componentType);
      if (all.length !== 1) {
        throw new Error('Did not find exactly one match for componentType:' + componentType);
      }
      return all[0];
    },
    mockComponent: function(module, mockTagName) {
      mockTagName = mockTagName || module.mockTagName || "div";
      module.prototype.render.mockImplementation(function() {
        return React.createElement(mockTagName, null, this.props.children);
      });
      return this;
    },
    simulateNativeEventOnNode: function(topLevelType, node, fakeNativeEvent) {
      fakeNativeEvent.target = node;
      ReactBrowserEventEmitter.ReactEventListener.dispatchEvent(topLevelType, fakeNativeEvent);
    },
    simulateNativeEventOnDOMComponent: function(topLevelType, comp, fakeNativeEvent) {
      ReactTestUtils.simulateNativeEventOnNode(topLevelType, comp.getDOMNode(), fakeNativeEvent);
    },
    nativeTouchData: function(x, y) {
      return {touches: [{
          pageX: x,
          pageY: y
        }]};
    },
    createRenderer: function() {
      return new ReactShallowRenderer();
    },
    Simulate: null,
    SimulateNative: {}
  };
  var ReactShallowRenderer = function() {
    this._instance = null;
  };
  ReactShallowRenderer.prototype.getRenderOutput = function() {
    return ((this._instance && this._instance._renderedComponent && this._instance._renderedComponent._renderedOutput) || null);
  };
  var NoopInternalComponent = function(element) {
    this._renderedOutput = element;
    this._currentElement = element === null || element === false ? ReactEmptyComponent.emptyElement : element;
  };
  NoopInternalComponent.prototype = {
    mountComponent: function() {},
    receiveComponent: function(element) {
      this._renderedOutput = element;
      this._currentElement = element === null || element === false ? ReactEmptyComponent.emptyElement : element;
    },
    unmountComponent: function() {}
  };
  var ShallowComponentWrapper = function() {};
  assign(ShallowComponentWrapper.prototype, ReactCompositeComponent.Mixin, {
    _instantiateReactComponent: function(element) {
      return new NoopInternalComponent(element);
    },
    _replaceNodeWithMarkupByID: function() {},
    _renderValidatedComponent: ReactCompositeComponent.Mixin._renderValidatedComponentWithoutOwnerOrContext
  });
  ReactShallowRenderer.prototype.render = function(element, context) {
    var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
    this._render(element, transaction, context);
    ReactUpdates.ReactReconcileTransaction.release(transaction);
  };
  ReactShallowRenderer.prototype.unmount = function() {
    if (this._instance) {
      this._instance.unmountComponent();
    }
  };
  ReactShallowRenderer.prototype._render = function(element, transaction, context) {
    if (!this._instance) {
      var rootID = ReactInstanceHandles.createReactRootID();
      var instance = new ShallowComponentWrapper(element.type);
      instance.construct(element);
      instance.mountComponent(rootID, transaction, context);
      this._instance = instance;
    } else {
      this._instance.receiveComponent(element, transaction, context);
    }
  };
  function makeSimulator(eventType) {
    return function(domComponentOrNode, eventData) {
      var node;
      if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
        node = domComponentOrNode.getDOMNode();
      } else if (domComponentOrNode.tagName) {
        node = domComponentOrNode;
      }
      var fakeNativeEvent = new Event();
      fakeNativeEvent.target = node;
      var event = new SyntheticEvent(ReactBrowserEventEmitter.eventNameDispatchConfigs[eventType], ReactMount.getID(node), fakeNativeEvent);
      assign(event, eventData);
      EventPropagators.accumulateTwoPhaseDispatches(event);
      ReactUpdates.batchedUpdates(function() {
        EventPluginHub.enqueueEvents(event);
        EventPluginHub.processEventQueue();
      });
    };
  }
  function buildSimulators() {
    ReactTestUtils.Simulate = {};
    var eventType;
    for (eventType in ReactBrowserEventEmitter.eventNameDispatchConfigs) {
      ReactTestUtils.Simulate[eventType] = makeSimulator(eventType);
    }
  }
  var oldInjectEventPluginOrder = EventPluginHub.injection.injectEventPluginOrder;
  EventPluginHub.injection.injectEventPluginOrder = function() {
    oldInjectEventPluginOrder.apply(this, arguments);
    buildSimulators();
  };
  var oldInjectEventPlugins = EventPluginHub.injection.injectEventPluginsByName;
  EventPluginHub.injection.injectEventPluginsByName = function() {
    oldInjectEventPlugins.apply(this, arguments);
    buildSimulators();
  };
  buildSimulators();
  function makeNativeSimulator(eventType) {
    return function(domComponentOrNode, nativeEventData) {
      var fakeNativeEvent = new Event(eventType);
      assign(fakeNativeEvent, nativeEventData);
      if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
        ReactTestUtils.simulateNativeEventOnDOMComponent(eventType, domComponentOrNode, fakeNativeEvent);
      } else if (!!domComponentOrNode.tagName) {
        ReactTestUtils.simulateNativeEventOnNode(eventType, domComponentOrNode, fakeNativeEvent);
      }
    };
  }
  var eventType;
  for (eventType in topLevelTypes) {
    var convenienceName = eventType.indexOf('top') === 0 ? eventType.charAt(3).toLowerCase() + eventType.substr(4) : eventType;
    ReactTestUtils.SimulateNative[convenienceName] = makeNativeSimulator(eventType);
  }
  module.exports = ReactTestUtils;
  global.define = __define;
  return module.exports;
});

System.register("npm:eventemitter3@0.1.6/index", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }
  function EventEmitter() {}
  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype.listeners = function listeners(event) {
    if (!this._events || !this._events[event])
      return [];
    if (this._events[event].fn)
      return [this._events[event].fn];
    for (var i = 0,
        l = this._events[event].length,
        ee = new Array(l); i < l; i++) {
      ee[i] = this._events[event][i].fn;
    }
    return ee;
  };
  EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    if (!this._events || !this._events[event])
      return false;
    var listeners = this._events[event],
        len = arguments.length,
        args,
        i;
    if ('function' === typeof listeners.fn) {
      if (listeners.once)
        this.removeListener(event, listeners.fn, true);
      switch (len) {
        case 1:
          return listeners.fn.call(listeners.context), true;
        case 2:
          return listeners.fn.call(listeners.context, a1), true;
        case 3:
          return listeners.fn.call(listeners.context, a1, a2), true;
        case 4:
          return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6:
          return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }
      for (i = 1, args = new Array(len - 1); i < len; i++) {
        args[i - 1] = arguments[i];
      }
      listeners.fn.apply(listeners.context, args);
    } else {
      var length = listeners.length,
          j;
      for (i = 0; i < length; i++) {
        if (listeners[i].once)
          this.removeListener(event, listeners[i].fn, true);
        switch (len) {
          case 1:
            listeners[i].fn.call(listeners[i].context);
            break;
          case 2:
            listeners[i].fn.call(listeners[i].context, a1);
            break;
          case 3:
            listeners[i].fn.call(listeners[i].context, a1, a2);
            break;
          default:
            if (!args)
              for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }
    return true;
  };
  EventEmitter.prototype.on = function on(event, fn, context) {
    var listener = new EE(fn, context || this);
    if (!this._events)
      this._events = {};
    if (!this._events[event])
      this._events[event] = listener;
    else {
      if (!this._events[event].fn)
        this._events[event].push(listener);
      else
        this._events[event] = [this._events[event], listener];
    }
    return this;
  };
  EventEmitter.prototype.once = function once(event, fn, context) {
    var listener = new EE(fn, context || this, true);
    if (!this._events)
      this._events = {};
    if (!this._events[event])
      this._events[event] = listener;
    else {
      if (!this._events[event].fn)
        this._events[event].push(listener);
      else
        this._events[event] = [this._events[event], listener];
    }
    return this;
  };
  EventEmitter.prototype.removeListener = function removeListener(event, fn, once) {
    if (!this._events || !this._events[event])
      return this;
    var listeners = this._events[event],
        events = [];
    if (fn) {
      if (listeners.fn && (listeners.fn !== fn || (once && !listeners.once))) {
        events.push(listeners);
      }
      if (!listeners.fn)
        for (var i = 0,
            length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || (once && !listeners[i].once)) {
            events.push(listeners[i]);
          }
        }
    }
    if (events.length) {
      this._events[event] = events.length === 1 ? events[0] : events;
    } else {
      delete this._events[event];
    }
    return this;
  };
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    if (!this._events)
      return this;
    if (event)
      delete this._events[event];
    else
      this._events = {};
    return this;
  };
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.addListener = EventEmitter.prototype.on;
  EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
    return this;
  };
  EventEmitter.EventEmitter = EventEmitter;
  EventEmitter.EventEmitter2 = EventEmitter;
  EventEmitter.EventEmitter3 = EventEmitter;
  module.exports = EventEmitter;
  global.define = __define;
  return module.exports;
});

System.register("npm:object-assign@2.0.0/index", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function ToObject(val) {
    if (val == null) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
  }
  module.exports = Object.assign || function(target, source) {
    var from;
    var keys;
    var to = ToObject(target);
    for (var s = 1; s < arguments.length; s++) {
      from = arguments[s];
      keys = Object.keys(Object(from));
      for (var i = 0; i < keys.length; i++) {
        to[keys[i]] = from[keys[i]];
      }
    }
    return to;
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:uniqueid@0.1.0/index", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var count = 0;
  var id = module.exports = function(options) {
    options = options || {};
    var prefix = options.prefix;
    var suffix = options.suffix;
    var id = ++count * (options.multiplier || 1);
    if (prefix == null) {
      prefix = '';
    }
    if (suffix == null) {
      suffix = '';
    }
    return String(prefix) + id + String(suffix);
  };
  id.reset = function() {
    return count = 0;
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:flux@2.0.1/lib/invariant", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var invariant = function(condition, format, a, b, c, d, e, f) {
    if (false) {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    }
    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error('Invariant Violation: ' + format.replace(/%s/g, function() {
          return args[argIndex++];
        }));
      }
      error.framesToPop = 1;
      throw error;
    }
  };
  module.exports = invariant;
  global.define = __define;
  return module.exports;
});

System.register("npm:react-canvas@0.0.1/lib/ContainerMixin", ["npm:react@0.13.1", "npm:react@0.13.1/lib/ReactMultiChild", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/emptyObject"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var React = require("npm:react@0.13.1");
  var ReactMultiChild = require("npm:react@0.13.1/lib/ReactMultiChild");
  var assign = require("npm:react@0.13.1/lib/Object.assign");
  var emptyObject = require("npm:react@0.13.1/lib/emptyObject");
  var ContainerMixin = assign({}, ReactMultiChild.Mixin, {
    moveChild: function(child, toIndex) {
      var childNode = child._mountImage;
      var mostRecentlyPlacedChild = this._mostRecentlyPlacedChild;
      if (mostRecentlyPlacedChild == null) {
        if (childNode.previousSibling) {
          if (this.node.firstChild) {
            childNode.injectBefore(this.node.firstChild);
          } else {
            childNode.inject(this.node);
          }
        }
      } else {
        if (mostRecentlyPlacedChild.nextSibling !== childNode) {
          if (mostRecentlyPlacedChild.nextSibling) {
            childNode.injectBefore(mostRecentlyPlacedChild.nextSibling);
          } else {
            childNode.inject(this.node);
          }
        }
      }
      this._mostRecentlyPlacedChild = childNode;
    },
    createChild: function(child, childNode) {
      child._mountImage = childNode;
      var mostRecentlyPlacedChild = this._mostRecentlyPlacedChild;
      if (mostRecentlyPlacedChild == null) {
        if (this.node.firstChild) {
          childNode.injectBefore(this.node.firstChild);
        } else {
          childNode.inject(this.node);
        }
      } else {
        if (mostRecentlyPlacedChild.nextSibling) {
          childNode.injectBefore(mostRecentlyPlacedChild.nextSibling);
        } else {
          childNode.inject(this.node);
        }
      }
      this._mostRecentlyPlacedChild = childNode;
    },
    removeChild: function(child) {
      child._mountImage.remove();
      child._mountImage = null;
      this.node.invalidateLayout();
    },
    updateChildrenAtRoot: function(nextChildren, transaction) {
      this.updateChildren(nextChildren, transaction, emptyObject);
    },
    mountAndInjectChildrenAtRoot: function(children, transaction) {
      this.mountAndInjectChildren(children, transaction, emptyObject);
    },
    updateChildren: function(nextChildren, transaction, context) {
      this._mostRecentlyPlacedChild = null;
      this._updateChildren(nextChildren, transaction, context);
    },
    mountAndInjectChildren: function(children, transaction, context) {
      var mountedImages = this.mountChildren(children, transaction, context);
      var i = 0;
      for (var key in this._renderedChildren) {
        if (this._renderedChildren.hasOwnProperty(key)) {
          var child = this._renderedChildren[key];
          child._mountImage = mountedImages[i];
          mountedImages[i].inject(this.node);
          i++;
        }
      }
    }
  });
  module.exports = ContainerMixin;
  global.define = __define;
  return module.exports;
});

System.register("npm:react-canvas@0.0.1/lib/FrameUtils", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  function Frame(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  function make(x, y, width, height) {
    return new Frame(x, y, width, height);
  }
  function zero() {
    return make(0, 0, 0, 0);
  }
  function clone(frame) {
    return make(frame.x, frame.y, frame.width, frame.height);
  }
  function inset(frame, top, right, bottom, left) {
    var frameCopy = clone(frame);
    if (typeof bottom === 'undefined') {
      bottom = top;
      left = right;
    }
    if (typeof right === 'undefined') {
      right = bottom = left = top;
    }
    frameCopy.x += left;
    frameCopy.y += top;
    frameCopy.height -= (top + bottom);
    frameCopy.width -= (left + right);
    return frameCopy;
  }
  function intersection(frame, otherFrame) {
    var x = Math.max(frame.x, otherFrame.x);
    var width = Math.min(frame.x + frame.width, otherFrame.x + otherFrame.width);
    var y = Math.max(frame.y, otherFrame.y);
    var height = Math.min(frame.y + frame.height, otherFrame.y + otherFrame.height);
    if (width >= x && height >= y) {
      return make(x, y, width - x, height - y);
    }
    return null;
  }
  function union(frame, otherFrame) {
    var x1 = Math.min(frame.x, otherFrame.x);
    var x2 = Math.max(frame.x + frame.width, otherFrame.x + otherFrame.width);
    var y1 = Math.min(frame.y, otherFrame.y);
    var y2 = Math.max(frame.y + frame.height, otherFrame.y + otherFrame.height);
    return make(x1, y1, x2 - x1, y2 - y1);
  }
  function intersects(frame, otherFrame) {
    return !(otherFrame.x > frame.x + frame.width || otherFrame.x + otherFrame.width < frame.x || otherFrame.y > frame.y + frame.height || otherFrame.y + otherFrame.height < frame.y);
  }
  module.exports = {
    make: make,
    zero: zero,
    clone: clone,
    inset: inset,
    intersection: intersection,
    intersects: intersects,
    union: union
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:events-browserify@0.0.1/events", ["github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    if (!process.EventEmitter)
      process.EventEmitter = function() {};
    var EventEmitter = exports.EventEmitter = process.EventEmitter;
    var isArray = typeof Array.isArray === 'function' ? Array.isArray : function(xs) {
      return Object.prototype.toString.call(xs) === '[object Array]';
    };
    ;
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function(n) {
      if (!this._events)
        this._events = {};
      this._events.maxListeners = n;
    };
    EventEmitter.prototype.emit = function(type) {
      if (type === 'error') {
        if (!this._events || !this._events.error || (isArray(this._events.error) && !this._events.error.length)) {
          if (arguments[1] instanceof Error) {
            throw arguments[1];
          } else {
            throw new Error("Uncaught, unspecified 'error' event.");
          }
          return false;
        }
      }
      if (!this._events)
        return false;
      var handler = this._events[type];
      if (!handler)
        return false;
      if (typeof handler == 'function') {
        switch (arguments.length) {
          case 1:
            handler.call(this);
            break;
          case 2:
            handler.call(this, arguments[1]);
            break;
          case 3:
            handler.call(this, arguments[1], arguments[2]);
            break;
          default:
            var args = Array.prototype.slice.call(arguments, 1);
            handler.apply(this, args);
        }
        return true;
      } else if (isArray(handler)) {
        var args = Array.prototype.slice.call(arguments, 1);
        var listeners = handler.slice();
        for (var i = 0,
            l = listeners.length; i < l; i++) {
          listeners[i].apply(this, args);
        }
        return true;
      } else {
        return false;
      }
    };
    EventEmitter.prototype.addListener = function(type, listener) {
      if ('function' !== typeof listener) {
        throw new Error('addListener only takes instances of Function');
      }
      if (!this._events)
        this._events = {};
      this.emit('newListener', type, listener);
      if (!this._events[type]) {
        this._events[type] = listener;
      } else if (isArray(this._events[type])) {
        if (!this._events[type].warned) {
          var m;
          if (this._events.maxListeners !== undefined) {
            m = this._events.maxListeners;
          } else {
            m = defaultMaxListeners;
          }
          if (m && m > 0 && this._events[type].length > m) {
            this._events[type].warned = true;
            console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
            console.trace();
          }
        }
        this._events[type].push(listener);
      } else {
        this._events[type] = [this._events[type], listener];
      }
      return this;
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function(type, listener) {
      var self = this;
      self.on(type, function g() {
        self.removeListener(type, g);
        listener.apply(this, arguments);
      });
      return this;
    };
    EventEmitter.prototype.removeListener = function(type, listener) {
      if ('function' !== typeof listener) {
        throw new Error('removeListener only takes instances of Function');
      }
      if (!this._events || !this._events[type])
        return this;
      var list = this._events[type];
      if (isArray(list)) {
        var i = list.indexOf(listener);
        if (i < 0)
          return this;
        list.splice(i, 1);
        if (list.length == 0)
          delete this._events[type];
      } else if (this._events[type] === listener) {
        delete this._events[type];
      }
      return this;
    };
    EventEmitter.prototype.removeAllListeners = function(type) {
      if (type && this._events && this._events[type])
        this._events[type] = null;
      return this;
    };
    EventEmitter.prototype.listeners = function(type) {
      if (!this._events)
        this._events = {};
      if (!this._events[type])
        this._events[type] = [];
      if (!isArray(this._events[type])) {
        this._events[type] = [this._events[type]];
      }
      return this._events[type];
    };
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react-canvas@0.0.1/lib/FontFace", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var _fontFaces = {};
  function FontFace(family, url, attributes) {
    var fontFace;
    var fontId;
    attributes = attributes || {};
    attributes.style = attributes.style || 'normal';
    attributes.weight = attributes.weight || 400;
    fontId = getCacheKey(family, url, attributes);
    fontFace = _fontFaces[fontId];
    if (!fontFace) {
      fontFace = {};
      fontFace.id = fontId;
      fontFace.family = family;
      fontFace.url = url;
      fontFace.attributes = attributes;
      _fontFaces[fontId] = fontFace;
    }
    return fontFace;
  }
  FontFace.Default = function(fontWeight) {
    return FontFace('sans-serif', null, {weight: fontWeight});
  };
  function getCacheKey(family, url, attributes) {
    return family + url + Object.keys(attributes).sort().map(function(key) {
      return attributes[key];
    });
  }
  module.exports = FontFace;
  global.define = __define;
  return module.exports;
});

System.register("npm:react-canvas@0.0.1/lib/clamp", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  module.exports = function(number, min, max) {
    return Math.min(Math.max(number, min), max);
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:react-canvas@0.0.1/lib/measureText", ["npm:react-canvas@0.0.1/lib/FontFace", "npm:react-canvas@0.0.1/lib/FontUtils"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var FontFace = require("npm:react-canvas@0.0.1/lib/FontFace");
  var FontUtils = require("npm:react-canvas@0.0.1/lib/FontUtils");
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var _cache = {};
  var _zeroMetrics = {
    width: 0,
    height: 0,
    lines: []
  };
  function splitText(text) {
    return text.split(' ');
  }
  function getCacheKey(text, width, fontFace, fontSize, lineHeight) {
    return text + width + fontFace.id + fontSize + lineHeight;
  }
  module.exports = function measureText(text, width, fontFace, fontSize, lineHeight) {
    var cacheKey = getCacheKey(text, width, fontFace, fontSize, lineHeight);
    var cached = _cache[cacheKey];
    if (cached) {
      return cached;
    }
    if (!FontUtils.isFontLoaded(fontFace)) {
      return _zeroMetrics;
    }
    var measuredSize = {};
    var textMetrics;
    var lastMeasuredWidth;
    var words;
    var tryLine;
    var currentLine;
    ctx.font = fontFace.attributes.style + ' normal ' + fontFace.attributes.weight + ' ' + fontSize + 'pt ' + fontFace.family;
    textMetrics = ctx.measureText(text);
    measuredSize.width = textMetrics.width;
    measuredSize.height = lineHeight;
    measuredSize.lines = [];
    if (measuredSize.width <= width) {
      measuredSize.lines.push({
        width: measuredSize.width,
        text: text
      });
    } else {
      measuredSize.width = width;
      words = splitText(text);
      currentLine = '';
      while (words.length) {
        tryLine = currentLine + words[0] + ' ';
        textMetrics = ctx.measureText(tryLine);
        if (textMetrics.width > width) {
          measuredSize.height += lineHeight;
          measuredSize.lines.push({
            width: lastMeasuredWidth,
            text: currentLine.trim()
          });
          currentLine = words[0] + ' ';
          lastMeasuredWidth = ctx.measureText(currentLine.trim()).width;
        } else {
          currentLine = tryLine;
          lastMeasuredWidth = textMetrics.width;
        }
        if (words.length === 1) {
          textMetrics = ctx.measureText(currentLine.trim());
          measuredSize.lines.push({
            width: textMetrics.width,
            text: currentLine.trim()
          });
        }
        words.shift();
      }
    }
    _cache[cacheKey] = measuredSize;
    return measuredSize;
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:react-canvas@0.0.1/lib/Canvas", ["npm:react@0.13.1/lib/Object.assign"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var assign = require("npm:react@0.13.1/lib/Object.assign");
  function Canvas(width, height, scale) {
    if (!this._canvas) {
      this._canvas = document.createElement('canvas');
    }
    this.width = width;
    this.height = height;
    this.scale = scale || window.devicePixelRatio;
    this._canvas.width = this.width * this.scale;
    this._canvas.height = this.height * this.scale;
    this._canvas.getContext('2d').scale(this.scale, this.scale);
  }
  assign(Canvas.prototype, {
    getRawCanvas: function() {
      return this._canvas;
    },
    getContext: function() {
      return this._canvas.getContext('2d');
    }
  });
  Canvas.poolSize = 30;
  module.exports = Canvas;
  global.define = __define;
  return module.exports;
});

System.register("npm:react-canvas@0.0.1/lib/EventTypes", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  module.exports = {
    onTouchStart: 'touchstart',
    onTouchMove: 'touchmove',
    onTouchEnd: 'touchend',
    onTouchCancel: 'touchcancel',
    onClick: 'click'
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:react-canvas@0.0.1/lib/hitTest", ["npm:react-canvas@0.0.1/lib/FrameUtils", "npm:react-canvas@0.0.1/lib/EventTypes"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var FrameUtils = require("npm:react-canvas@0.0.1/lib/FrameUtils");
  var EventTypes = require("npm:react-canvas@0.0.1/lib/EventTypes");
  function hitTest(e, rootLayer, rootNode) {
    var touch = e.touches ? e.touches[0] : e;
    var touchX = touch.pageX;
    var touchY = touch.pageY;
    var rootNodeBox;
    if (rootNode) {
      rootNodeBox = rootNode.getBoundingClientRect();
      touchX -= rootNodeBox.left;
      touchY -= rootNodeBox.top;
    }
    return getLayerAtPoint(rootLayer, e.type, FrameUtils.make(touchX, touchY, 1, 1));
  }
  function sortByZIndexDescending(layer, otherLayer) {
    return (otherLayer.zIndex || 0) - (layer.zIndex || 0);
  }
  function getHitHandle(type) {
    var hitHandle;
    for (var tryHandle in EventTypes) {
      if (EventTypes[tryHandle] === type) {
        hitHandle = tryHandle;
        break;
      }
    }
    return hitHandle;
  }
  function getLayerAtPoint(root, type, point) {
    var layer = null;
    var hitHandle = getHitHandle(type);
    var sortedChildren;
    var hitFrame = root.frame;
    if (typeof root.alpha === 'number' && root.alpha < 0.01) {
      return null;
    }
    if (root.children) {
      sortedChildren = root.children.slice().reverse().sort(sortByZIndexDescending);
      for (var i = 0,
          len = sortedChildren.length; i < len; i++) {
        layer = getLayerAtPoint(sortedChildren[i], type, point);
        if (layer) {
          break;
        }
      }
    }
    if (root.hitOutsets) {
      hitFrame = FrameUtils.inset(FrameUtils.clone(hitFrame), -root.hitOutsets[0], -root.hitOutsets[1], -root.hitOutsets[2], -root.hitOutsets[3]);
    }
    if (!layer && root[hitHandle] && FrameUtils.intersects(hitFrame, point)) {
      layer = root;
    }
    return layer;
  }
  module.exports = hitTest;
  module.exports.getHitHandle = getHitHandle;
  global.define = __define;
  return module.exports;
});

System.register("npm:react-canvas@0.0.1/lib/Layout", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var computeLayout = (function() {
    function capitalizeFirst(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    function getSpacing(node, type, suffix, location) {
      var key = type + capitalizeFirst(location) + suffix;
      if (key in node.style) {
        return node.style[key];
      }
      key = type + suffix;
      if (key in node.style) {
        return node.style[key];
      }
      return 0;
    }
    function getPositiveSpacing(node, type, suffix, location) {
      var key = type + capitalizeFirst(location) + suffix;
      if (key in node.style && node.style[key] >= 0) {
        return node.style[key];
      }
      key = type + suffix;
      if (key in node.style && node.style[key] >= 0) {
        return node.style[key];
      }
      return 0;
    }
    function isUndefined(value) {
      return value === undefined;
    }
    function getMargin(node, location) {
      return getSpacing(node, 'margin', '', location);
    }
    function getPadding(node, location) {
      return getPositiveSpacing(node, 'padding', '', location);
    }
    function getBorder(node, location) {
      return getPositiveSpacing(node, 'border', 'Width', location);
    }
    function getPaddingAndBorder(node, location) {
      return getPadding(node, location) + getBorder(node, location);
    }
    function getMarginAxis(node, axis) {
      return getMargin(node, leading[axis]) + getMargin(node, trailing[axis]);
    }
    function getPaddingAndBorderAxis(node, axis) {
      return getPaddingAndBorder(node, leading[axis]) + getPaddingAndBorder(node, trailing[axis]);
    }
    function getJustifyContent(node) {
      if ('justifyContent' in node.style) {
        return node.style.justifyContent;
      }
      return 'flex-start';
    }
    function getAlignItem(node, child) {
      if ('alignSelf' in child.style) {
        return child.style.alignSelf;
      }
      if ('alignItems' in node.style) {
        return node.style.alignItems;
      }
      return 'stretch';
    }
    function getFlexDirection(node) {
      if ('flexDirection' in node.style) {
        return node.style.flexDirection;
      }
      return 'column';
    }
    function getPositionType(node) {
      if ('position' in node.style) {
        return node.style.position;
      }
      return 'relative';
    }
    function getFlex(node) {
      return node.style.flex;
    }
    function isFlex(node) {
      return (getPositionType(node) === CSS_POSITION_RELATIVE && getFlex(node) > 0);
    }
    function isFlexWrap(node) {
      return node.style.flexWrap === 'wrap';
    }
    function getDimWithMargin(node, axis) {
      return node.layout[dim[axis]] + getMarginAxis(node, axis);
    }
    function isDimDefined(node, axis) {
      return !isUndefined(node.style[dim[axis]]) && node.style[dim[axis]] >= 0;
    }
    function isPosDefined(node, pos) {
      return !isUndefined(node.style[pos]);
    }
    function isMeasureDefined(node) {
      return 'measure' in node.style;
    }
    function getPosition(node, pos) {
      if (pos in node.style) {
        return node.style[pos];
      }
      return 0;
    }
    function setDimensionFromStyle(node, axis) {
      if (!isUndefined(node.layout[dim[axis]])) {
        return ;
      }
      if (!isDimDefined(node, axis)) {
        return ;
      }
      node.layout[dim[axis]] = fmaxf(node.style[dim[axis]], getPaddingAndBorderAxis(node, axis));
    }
    function getRelativePosition(node, axis) {
      if (leading[axis] in node.style) {
        return getPosition(node, leading[axis]);
      }
      return -getPosition(node, trailing[axis]);
    }
    var leading = {
      row: 'left',
      column: 'top'
    };
    var trailing = {
      row: 'right',
      column: 'bottom'
    };
    var pos = {
      row: 'left',
      column: 'top'
    };
    var dim = {
      row: 'width',
      column: 'height'
    };
    function fmaxf(a, b) {
      if (a > b) {
        return a;
      }
      return b;
    }
    var CSS_UNDEFINED = undefined;
    var CSS_FLEX_DIRECTION_ROW = 'row';
    var CSS_FLEX_DIRECTION_COLUMN = 'column';
    var CSS_JUSTIFY_FLEX_START = 'flex-start';
    var CSS_JUSTIFY_CENTER = 'center';
    var CSS_JUSTIFY_FLEX_END = 'flex-end';
    var CSS_JUSTIFY_SPACE_BETWEEN = 'space-between';
    var CSS_JUSTIFY_SPACE_AROUND = 'space-around';
    var CSS_ALIGN_FLEX_START = 'flex-start';
    var CSS_ALIGN_CENTER = 'center';
    var CSS_ALIGN_FLEX_END = 'flex-end';
    var CSS_ALIGN_STRETCH = 'stretch';
    var CSS_POSITION_RELATIVE = 'relative';
    var CSS_POSITION_ABSOLUTE = 'absolute';
    return function layoutNode(node, parentMaxWidth) {
      var mainAxis = getFlexDirection(node);
      var crossAxis = mainAxis === CSS_FLEX_DIRECTION_ROW ? CSS_FLEX_DIRECTION_COLUMN : CSS_FLEX_DIRECTION_ROW;
      setDimensionFromStyle(node, mainAxis);
      setDimensionFromStyle(node, crossAxis);
      node.layout[leading[mainAxis]] += getMargin(node, leading[mainAxis]) + getRelativePosition(node, mainAxis);
      node.layout[leading[crossAxis]] += getMargin(node, leading[crossAxis]) + getRelativePosition(node, crossAxis);
      if (isMeasureDefined(node)) {
        var width = CSS_UNDEFINED;
        if (isDimDefined(node, CSS_FLEX_DIRECTION_ROW)) {
          width = node.style.width;
        } else if (!isUndefined(node.layout[dim[CSS_FLEX_DIRECTION_ROW]])) {
          width = node.layout[dim[CSS_FLEX_DIRECTION_ROW]];
        } else {
          width = parentMaxWidth - getMarginAxis(node, CSS_FLEX_DIRECTION_ROW);
        }
        width -= getPaddingAndBorderAxis(node, CSS_FLEX_DIRECTION_ROW);
        var isRowUndefined = !isDimDefined(node, CSS_FLEX_DIRECTION_ROW) && isUndefined(node.layout[dim[CSS_FLEX_DIRECTION_ROW]]);
        var isColumnUndefined = !isDimDefined(node, CSS_FLEX_DIRECTION_COLUMN) && isUndefined(node.layout[dim[CSS_FLEX_DIRECTION_COLUMN]]);
        if (isRowUndefined || isColumnUndefined) {
          var measure_dim = node.style.measure(width);
          if (isRowUndefined) {
            node.layout.width = measure_dim.width + getPaddingAndBorderAxis(node, CSS_FLEX_DIRECTION_ROW);
          }
          if (isColumnUndefined) {
            node.layout.height = measure_dim.height + getPaddingAndBorderAxis(node, CSS_FLEX_DIRECTION_COLUMN);
          }
        }
        return ;
      }
      for (var i = 0; i < node.children.length; ++i) {
        var child = node.children[i];
        if (getAlignItem(node, child) === CSS_ALIGN_STRETCH && getPositionType(child) === CSS_POSITION_RELATIVE && !isUndefined(node.layout[dim[crossAxis]]) && !isDimDefined(child, crossAxis)) {
          child.layout[dim[crossAxis]] = fmaxf(node.layout[dim[crossAxis]] - getPaddingAndBorderAxis(node, crossAxis) - getMarginAxis(child, crossAxis), getPaddingAndBorderAxis(child, crossAxis));
        } else if (getPositionType(child) == CSS_POSITION_ABSOLUTE) {
          for (var ii = 0; ii < 2; ii++) {
            var axis = (ii != 0) ? CSS_FLEX_DIRECTION_ROW : CSS_FLEX_DIRECTION_COLUMN;
            if (!isUndefined(node.layout[dim[axis]]) && !isDimDefined(child, axis) && isPosDefined(child, leading[axis]) && isPosDefined(child, trailing[axis])) {
              child.layout[dim[axis]] = fmaxf(node.layout[dim[axis]] - getPaddingAndBorderAxis(node, axis) - getMarginAxis(child, axis) - getPosition(child, leading[axis]) - getPosition(child, trailing[axis]), getPaddingAndBorderAxis(child, axis));
            }
          }
        }
      }
      var definedMainDim = CSS_UNDEFINED;
      if (!isUndefined(node.layout[dim[mainAxis]])) {
        definedMainDim = node.layout[dim[mainAxis]] - getPaddingAndBorderAxis(node, mainAxis);
      }
      var startLine = 0;
      var endLine = 0;
      var nextOffset = 0;
      var alreadyComputedNextLayout = 0;
      var linesCrossDim = 0;
      var linesMainDim = 0;
      while (endLine < node.children.length) {
        var mainContentDim = 0;
        var flexibleChildrenCount = 0;
        var totalFlexible = 0;
        var nonFlexibleChildrenCount = 0;
        for (var i = startLine; i < node.children.length; ++i) {
          var child = node.children[i];
          var nextContentDim = 0;
          if (!isUndefined(node.layout[dim[mainAxis]]) && isFlex(child)) {
            flexibleChildrenCount++;
            totalFlexible += getFlex(child);
            nextContentDim = getPaddingAndBorderAxis(child, mainAxis) + getMarginAxis(child, mainAxis);
          } else {
            var maxWidth = CSS_UNDEFINED;
            if (mainAxis === CSS_FLEX_DIRECTION_ROW) {} else if (isDimDefined(node, CSS_FLEX_DIRECTION_ROW)) {
              maxWidth = node.layout[dim[CSS_FLEX_DIRECTION_ROW]] - getPaddingAndBorderAxis(node, CSS_FLEX_DIRECTION_ROW);
            } else {
              maxWidth = parentMaxWidth - getMarginAxis(node, CSS_FLEX_DIRECTION_ROW) - getPaddingAndBorderAxis(node, CSS_FLEX_DIRECTION_ROW);
            }
            if (alreadyComputedNextLayout === 0) {
              layoutNode(child, maxWidth);
            }
            if (getPositionType(child) === CSS_POSITION_RELATIVE) {
              nonFlexibleChildrenCount++;
              nextContentDim = getDimWithMargin(child, mainAxis);
            }
          }
          if (isFlexWrap(node) && !isUndefined(node.layout[dim[mainAxis]]) && mainContentDim + nextContentDim > definedMainDim && i !== startLine) {
            alreadyComputedNextLayout = 1;
            break;
          }
          alreadyComputedNextLayout = 0;
          mainContentDim += nextContentDim;
          endLine = i + 1;
        }
        var leadingMainDim = 0;
        var betweenMainDim = 0;
        var remainingMainDim = 0;
        if (!isUndefined(node.layout[dim[mainAxis]])) {
          remainingMainDim = definedMainDim - mainContentDim;
        } else {
          remainingMainDim = fmaxf(mainContentDim, 0) - mainContentDim;
        }
        if (flexibleChildrenCount !== 0) {
          var flexibleMainDim = remainingMainDim / totalFlexible;
          if (flexibleMainDim < 0) {
            flexibleMainDim = 0;
          }
          for (var i = startLine; i < endLine; ++i) {
            var child = node.children[i];
            if (isFlex(child)) {
              child.layout[dim[mainAxis]] = flexibleMainDim * getFlex(child) + getPaddingAndBorderAxis(child, mainAxis);
              var maxWidth = CSS_UNDEFINED;
              if (mainAxis === CSS_FLEX_DIRECTION_ROW) {} else if (isDimDefined(node, CSS_FLEX_DIRECTION_ROW)) {
                maxWidth = node.layout[dim[CSS_FLEX_DIRECTION_ROW]] - getPaddingAndBorderAxis(node, CSS_FLEX_DIRECTION_ROW);
              } else {
                maxWidth = parentMaxWidth - getMarginAxis(node, CSS_FLEX_DIRECTION_ROW) - getPaddingAndBorderAxis(node, CSS_FLEX_DIRECTION_ROW);
              }
              layoutNode(child, maxWidth);
            }
          }
        } else {
          var justifyContent = getJustifyContent(node);
          if (justifyContent === CSS_JUSTIFY_FLEX_START) {} else if (justifyContent === CSS_JUSTIFY_CENTER) {
            leadingMainDim = remainingMainDim / 2;
          } else if (justifyContent === CSS_JUSTIFY_FLEX_END) {
            leadingMainDim = remainingMainDim;
          } else if (justifyContent === CSS_JUSTIFY_SPACE_BETWEEN) {
            remainingMainDim = fmaxf(remainingMainDim, 0);
            if (flexibleChildrenCount + nonFlexibleChildrenCount - 1 !== 0) {
              betweenMainDim = remainingMainDim / (flexibleChildrenCount + nonFlexibleChildrenCount - 1);
            } else {
              betweenMainDim = 0;
            }
          } else if (justifyContent === CSS_JUSTIFY_SPACE_AROUND) {
            betweenMainDim = remainingMainDim / (flexibleChildrenCount + nonFlexibleChildrenCount);
            leadingMainDim = betweenMainDim / 2;
          }
        }
        var crossDim = 0;
        var mainDim = leadingMainDim + getPaddingAndBorder(node, leading[mainAxis]);
        for (var i = startLine; i < endLine; ++i) {
          var child = node.children[i];
          if (getPositionType(child) === CSS_POSITION_ABSOLUTE && isPosDefined(child, leading[mainAxis])) {
            child.layout[pos[mainAxis]] = getPosition(child, leading[mainAxis]) + getBorder(node, leading[mainAxis]) + getMargin(child, leading[mainAxis]);
          } else {
            child.layout[pos[mainAxis]] += mainDim;
          }
          if (getPositionType(child) === CSS_POSITION_RELATIVE) {
            mainDim += betweenMainDim + getDimWithMargin(child, mainAxis);
            crossDim = fmaxf(crossDim, getDimWithMargin(child, crossAxis));
          }
        }
        var containerMainAxis = node.layout[dim[mainAxis]];
        if (isUndefined(node.layout[dim[mainAxis]])) {
          containerMainAxis = fmaxf(mainDim + getPaddingAndBorder(node, trailing[mainAxis]), getPaddingAndBorderAxis(node, mainAxis));
        }
        var containerCrossAxis = node.layout[dim[crossAxis]];
        if (isUndefined(node.layout[dim[crossAxis]])) {
          containerCrossAxis = fmaxf(crossDim + getPaddingAndBorderAxis(node, crossAxis), getPaddingAndBorderAxis(node, crossAxis));
        }
        for (var i = startLine; i < endLine; ++i) {
          var child = node.children[i];
          if (getPositionType(child) === CSS_POSITION_ABSOLUTE && isPosDefined(child, leading[crossAxis])) {
            child.layout[pos[crossAxis]] = getPosition(child, leading[crossAxis]) + getBorder(node, leading[crossAxis]) + getMargin(child, leading[crossAxis]);
          } else {
            var leadingCrossDim = getPaddingAndBorder(node, leading[crossAxis]);
            if (getPositionType(child) === CSS_POSITION_RELATIVE) {
              var alignItem = getAlignItem(node, child);
              if (alignItem === CSS_ALIGN_FLEX_START) {} else if (alignItem === CSS_ALIGN_STRETCH) {
                if (!isDimDefined(child, crossAxis)) {
                  child.layout[dim[crossAxis]] = fmaxf(containerCrossAxis - getPaddingAndBorderAxis(node, crossAxis) - getMarginAxis(child, crossAxis), getPaddingAndBorderAxis(child, crossAxis));
                }
              } else {
                var remainingCrossDim = containerCrossAxis - getPaddingAndBorderAxis(node, crossAxis) - getDimWithMargin(child, crossAxis);
                if (alignItem === CSS_ALIGN_CENTER) {
                  leadingCrossDim += remainingCrossDim / 2;
                } else {
                  leadingCrossDim += remainingCrossDim;
                }
              }
            }
            child.layout[pos[crossAxis]] += linesCrossDim + leadingCrossDim;
          }
        }
        linesCrossDim += crossDim;
        linesMainDim = fmaxf(linesMainDim, mainDim);
        startLine = endLine;
      }
      if (isUndefined(node.layout[dim[mainAxis]])) {
        node.layout[dim[mainAxis]] = fmaxf(linesMainDim + getPaddingAndBorder(node, trailing[mainAxis]), getPaddingAndBorderAxis(node, mainAxis));
      }
      if (isUndefined(node.layout[dim[crossAxis]])) {
        node.layout[dim[crossAxis]] = fmaxf(linesCrossDim + getPaddingAndBorderAxis(node, crossAxis), getPaddingAndBorderAxis(node, crossAxis));
      }
      for (var i = 0; i < node.children.length; ++i) {
        var child = node.children[i];
        if (getPositionType(child) == CSS_POSITION_ABSOLUTE) {
          for (var ii = 0; ii < 2; ii++) {
            var axis = (ii !== 0) ? CSS_FLEX_DIRECTION_ROW : CSS_FLEX_DIRECTION_COLUMN;
            if (!isUndefined(node.layout[dim[axis]]) && !isDimDefined(child, axis) && isPosDefined(child, leading[axis]) && isPosDefined(child, trailing[axis])) {
              child.layout[dim[axis]] = fmaxf(node.layout[dim[axis]] - getPaddingAndBorderAxis(node, axis) - getMarginAxis(child, axis) - getPosition(child, leading[axis]) - getPosition(child, trailing[axis]), getPaddingAndBorderAxis(child, axis));
            }
          }
          for (var ii = 0; ii < 2; ii++) {
            var axis = (ii !== 0) ? CSS_FLEX_DIRECTION_ROW : CSS_FLEX_DIRECTION_COLUMN;
            if (isPosDefined(child, trailing[axis]) && !isPosDefined(child, leading[axis])) {
              child.layout[leading[axis]] = node.layout[dim[axis]] - child.layout[dim[axis]] - getPosition(child, trailing[axis]);
            }
          }
        }
      }
    };
  })();
  if (typeof module === 'object') {
    module.exports = computeLayout;
  }
  global.define = __define;
  return module.exports;
});

System.register("npm:react-canvas@0.0.1/lib/createComponent", ["npm:react@0.13.1/lib/Object.assign", "npm:react-canvas@0.0.1/lib/RenderLayer"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var assign = require("npm:react@0.13.1/lib/Object.assign");
  var RenderLayer = require("npm:react-canvas@0.0.1/lib/RenderLayer");
  function createComponent(name) {
    var ReactCanvasComponent = function(props) {
      this.node = null;
      this.subscriptions = null;
      this.listeners = null;
      this.node = new RenderLayer();
      this._mountImage = null;
      this._renderedChildren = null;
      this._mostRecentlyPlacedChild = null;
    };
    ReactCanvasComponent.displayName = name;
    for (var i = 1,
        l = arguments.length; i < l; i++) {
      assign(ReactCanvasComponent.prototype, arguments[i]);
    }
    return ReactCanvasComponent;
  }
  module.exports = createComponent;
  global.define = __define;
  return module.exports;
});

System.register("npm:react-canvas@0.0.1/lib/LayerMixin", ["npm:react-canvas@0.0.1/lib/FrameUtils", "npm:react-canvas@0.0.1/lib/DrawingUtils", "npm:react-canvas@0.0.1/lib/EventTypes"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var FrameUtils = require("npm:react-canvas@0.0.1/lib/FrameUtils");
  var DrawingUtils = require("npm:react-canvas@0.0.1/lib/DrawingUtils");
  var EventTypes = require("npm:react-canvas@0.0.1/lib/EventTypes");
  var LAYER_GUID = 0;
  var LayerMixin = {
    construct: function(element) {
      this._currentElement = element;
      this._layerId = LAYER_GUID++;
    },
    getPublicInstance: function() {
      return this.node;
    },
    putEventListener: function(type, listener) {
      var subscriptions = this.subscriptions || (this.subscriptions = {});
      var listeners = this.listeners || (this.listeners = {});
      listeners[type] = listener;
      if (listener) {
        if (!subscriptions[type]) {
          subscriptions[type] = this.node.subscribe(type, listener, this);
        }
      } else {
        if (subscriptions[type]) {
          subscriptions[type]();
          delete subscriptions[type];
        }
      }
    },
    handleEvent: function(event) {},
    destroyEventListeners: function() {},
    applyLayerProps: function(prevProps, props) {
      var layer = this.node;
      var style = (props && props.style) ? props.style : {};
      layer._originalStyle = style;
      layer.alpha = style.alpha;
      layer.backgroundColor = style.backgroundColor;
      layer.borderColor = style.borderColor;
      layer.borderRadius = style.borderRadius;
      layer.clipRect = style.clipRect;
      layer.frame = FrameUtils.make(style.left || 0, style.top || 0, style.width || 0, style.height || 0);
      layer.scale = style.scale;
      layer.translateX = style.translateX;
      layer.translateY = style.translateY;
      layer.zIndex = style.zIndex;
      if (props.useBackingStore) {
        layer.backingStoreId = this._layerId;
      }
      for (var type in EventTypes) {
        this.putEventListener(EventTypes[type], props[type]);
      }
    },
    mountComponentIntoNode: function(rootID, container) {
      throw new Error('You cannot render a Canvas component standalone. ' + 'You need to wrap it in a Surface.');
    },
    unmountComponent: function() {
      var layer = this.node;
      if (layer.backingStoreId) {
        DrawingUtils.invalidateBackingStore(layer.backingStoreId);
      }
      this.destroyEventListeners();
    }
  };
  module.exports = LayerMixin;
  global.define = __define;
  return module.exports;
});

System.register("npm:react-canvas@0.0.1/lib/Text", ["npm:react-canvas@0.0.1/lib/createComponent", "npm:react-canvas@0.0.1/lib/LayerMixin"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var createComponent = require("npm:react-canvas@0.0.1/lib/createComponent");
  var LayerMixin = require("npm:react-canvas@0.0.1/lib/LayerMixin");
  var Text = createComponent('Text', LayerMixin, {
    applyTextProps: function(prevProps, props) {
      var style = (props && props.style) ? props.style : {};
      var layer = this.node;
      layer.type = 'text';
      layer.text = childrenAsString(props.children);
      layer.color = style.color;
      layer.fontFace = style.fontFace;
      layer.fontSize = style.fontSize;
      layer.lineHeight = style.lineHeight;
      layer.textAlign = style.textAlign;
    },
    mountComponent: function(rootID, transaction, context) {
      var props = this._currentElement.props;
      var layer = this.node;
      this.applyLayerProps({}, props);
      this.applyTextProps({}, props);
      return layer;
    },
    receiveComponent: function(nextComponent, transaction, context) {
      var props = nextComponent.props;
      var prevProps = this._currentElement.props;
      this.applyLayerProps(prevProps, props);
      this.applyTextProps(prevProps, props);
      this._currentElement = nextComponent;
    }
  });
  function childrenAsString(children) {
    if (!children) {
      return '';
    }
    if (typeof children === 'string') {
      return children;
    }
    if (children.length) {
      return children.join('\n');
    }
    return '';
  }
  module.exports = Text;
  global.define = __define;
  return module.exports;
});

System.register("npm:whatwg-fetch@0.7.0/fetch", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  (function() {
    'use strict';
    if (self.fetch) {
      return ;
    }
    function Headers(headers) {
      this.map = {};
      var self = this;
      if (headers instanceof Headers) {
        headers.forEach(function(name, values) {
          values.forEach(function(value) {
            self.append(name, value);
          });
        });
      } else if (headers) {
        Object.getOwnPropertyNames(headers).forEach(function(name) {
          self.append(name, headers[name]);
        });
      }
    }
    Headers.prototype.append = function(name, value) {
      name = name.toLowerCase();
      var list = this.map[name];
      if (!list) {
        list = [];
        this.map[name] = list;
      }
      list.push(value);
    };
    Headers.prototype['delete'] = function(name) {
      delete this.map[name.toLowerCase()];
    };
    Headers.prototype.get = function(name) {
      var values = this.map[name.toLowerCase()];
      return values ? values[0] : null;
    };
    Headers.prototype.getAll = function(name) {
      return this.map[name.toLowerCase()] || [];
    };
    Headers.prototype.has = function(name) {
      return this.map.hasOwnProperty(name.toLowerCase());
    };
    Headers.prototype.set = function(name, value) {
      this.map[name.toLowerCase()] = [value];
    };
    Headers.prototype.forEach = function(callback) {
      var self = this;
      Object.getOwnPropertyNames(this.map).forEach(function(name) {
        callback(name, self.map[name]);
      });
    };
    function consumed(body) {
      if (body.bodyUsed) {
        return Promise.reject(new TypeError('Already read'));
      }
      body.bodyUsed = true;
    }
    function fileReaderReady(reader) {
      return new Promise(function(resolve, reject) {
        reader.onload = function() {
          resolve(reader.result);
        };
        reader.onerror = function() {
          reject(reader.error);
        };
      });
    }
    function readBlobAsArrayBuffer(blob) {
      var reader = new FileReader();
      reader.readAsArrayBuffer(blob);
      return fileReaderReady(reader);
    }
    function readBlobAsText(blob) {
      var reader = new FileReader();
      reader.readAsText(blob);
      return fileReaderReady(reader);
    }
    var support = {
      blob: 'FileReader' in self && 'Blob' in self && (function() {
        try {
          new Blob();
          return true;
        } catch (e) {
          return false;
        }
      })(),
      formData: 'FormData' in self
    };
    function Body() {
      this.bodyUsed = false;
      if (support.blob) {
        this._initBody = function(body) {
          this._bodyInit = body;
          if (typeof body === 'string') {
            this._bodyText = body;
          } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
            this._bodyBlob = body;
          } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
            this._bodyFormData = body;
          } else if (!body) {
            this._bodyText = '';
          } else {
            throw new Error('unsupported BodyInit type');
          }
        };
        this.blob = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }
          if (this._bodyBlob) {
            return Promise.resolve(this._bodyBlob);
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as blob');
          } else {
            return Promise.resolve(new Blob([this._bodyText]));
          }
        };
        this.arrayBuffer = function() {
          return this.blob().then(readBlobAsArrayBuffer);
        };
        this.text = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }
          if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob);
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as text');
          } else {
            return Promise.resolve(this._bodyText);
          }
        };
      } else {
        this._initBody = function(body) {
          this._bodyInit = body;
          if (typeof body === 'string') {
            this._bodyText = body;
          } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
            this._bodyFormData = body;
          } else if (!body) {
            this._bodyText = '';
          } else {
            throw new Error('unsupported BodyInit type');
          }
        };
        this.text = function() {
          var rejected = consumed(this);
          return rejected ? rejected : Promise.resolve(this._bodyText);
        };
      }
      if (support.formData) {
        this.formData = function() {
          return this.text().then(decode);
        };
      }
      this.json = function() {
        return this.text().then(JSON.parse);
      };
      return this;
    }
    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
    function normalizeMethod(method) {
      var upcased = method.toUpperCase();
      return (methods.indexOf(upcased) > -1) ? upcased : method;
    }
    function Request(url, options) {
      options = options || {};
      this.url = url;
      this.credentials = options.credentials || 'omit';
      this.headers = new Headers(options.headers);
      this.method = normalizeMethod(options.method || 'GET');
      this.mode = options.mode || null;
      this.referrer = null;
      if ((this.method === 'GET' || this.method === 'HEAD') && options.body) {
        throw new TypeError('Body not allowed for GET or HEAD requests');
      }
      this._initBody(options.body);
    }
    function decode(body) {
      var form = new FormData();
      body.trim().split('&').forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
      return form;
    }
    function headers(xhr) {
      var head = new Headers();
      var pairs = xhr.getAllResponseHeaders().trim().split('\n');
      pairs.forEach(function(header) {
        var split = header.trim().split(':');
        var key = split.shift().trim();
        var value = split.join(':').trim();
        head.append(key, value);
      });
      return head;
    }
    Request.prototype.fetch = function() {
      var self = this;
      return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        if (self.credentials === 'cors') {
          xhr.withCredentials = true;
        }
        function responseURL() {
          if ('responseURL' in xhr) {
            return xhr.responseURL;
          }
          if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
            return xhr.getResponseHeader('X-Request-URL');
          }
          return ;
        }
        xhr.onload = function() {
          var status = (xhr.status === 1223) ? 204 : xhr.status;
          if (status < 100 || status > 599) {
            reject(new TypeError('Network request failed'));
            return ;
          }
          var options = {
            status: status,
            statusText: xhr.statusText,
            headers: headers(xhr),
            url: responseURL()
          };
          var body = 'response' in xhr ? xhr.response : xhr.responseText;
          resolve(new Response(body, options));
        };
        xhr.onerror = function() {
          reject(new TypeError('Network request failed'));
        };
        xhr.open(self.method, self.url, true);
        if ('responseType' in xhr && support.blob) {
          xhr.responseType = 'blob';
        }
        self.headers.forEach(function(name, values) {
          values.forEach(function(value) {
            xhr.setRequestHeader(name, value);
          });
        });
        xhr.send(typeof self._bodyInit === 'undefined' ? null : self._bodyInit);
      });
    };
    Body.call(Request.prototype);
    function Response(bodyInit, options) {
      if (!options) {
        options = {};
      }
      this._initBody(bodyInit);
      this.type = 'default';
      this.url = null;
      this.status = options.status;
      this.statusText = options.statusText;
      this.headers = options.headers;
      this.url = options.url || '';
    }
    Body.call(Response.prototype);
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
    self.fetch = function(url, options) {
      return new Request(url, options).fetch();
    };
    self.fetch.polyfill = true;
  })();
  global.define = __define;
  return module.exports;
});

System.register("npm:flummox@3.5.0", ["npm:flummox@3.5.0/lib/Flux"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:flummox@3.5.0/lib/Flux");
  global.define = __define;
  return module.exports;
});

System.register("github:JenniferSimonds/FontDetect@master/lib/fontdetect", [], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, []);
  (function() {
    FontDetect = function() {
      var _isInitialized = false;
      var _aFallbackFonts = ['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy'];
      var span = null;
      function _init() {
        if (_isInitialized) {
          return ;
        }
        _isInitialized = true;
        var body = document.body;
        var firstChild = document.body.firstChild;
        var div = document.createElement('div');
        div.id = 'fontdetectHelper';
        span = document.createElement('span');
        span.innerText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        div.appendChild(span);
        body.insertBefore(div, firstChild);
        div.style.position = 'absolute';
        div.style.visibility = 'hidden';
        div.style.top = '-200px';
        div.style.left = '-100000px';
        div.style.width = '100000px';
        div.style.height = '200px';
        div.style.fontSize = '100px';
      }
      function _getCss(p_element, p_cssStyle) {
        if (p_element instanceof Element) {
          return window.getComputedStyle(p_element).getPropertyValue(p_cssStyle);
        } else if (window.jQuery) {
          return $(p_element).css(p_cssStyle);
        } else {
          return '';
        }
      }
      return {
        onFontLoaded: function(p_cssFontName, p_onLoad, p_onFail, p_options) {
          if (!p_cssFontName) {
            return ;
          }
          var msInterval = (p_options && p_options.msInterval) ? p_options.msInterval : 100;
          var msTimeout = (p_options && p_options.msTimeout) ? p_options.msTimeout : 2000;
          if (!p_onLoad && !p_onFail) {
            return ;
          }
          if (!_isInitialized) {
            _init();
          }
          if (this.isFontLoaded(p_cssFontName)) {
            if (p_onLoad) {
              p_onLoad(p_cssFontName);
            }
            return ;
          }
          var outerThis = this;
          var utStart = new Date().getTime();
          var idInterval = setInterval(function() {
            if (outerThis.isFontLoaded(p_cssFontName)) {
              clearInterval(idInterval);
              p_onLoad(p_cssFontName);
              return ;
            } else {
              var utNow = new Date().getTime();
              if ((utNow - utStart) > msTimeout) {
                clearInterval(idInterval);
                if (p_onFail) {
                  p_onFail(p_cssFontName);
                }
              }
            }
          }, msInterval);
        },
        isFontLoaded: function(p_cssFontName) {
          var wThisFont = 0;
          var wPrevFont = 0;
          if (!_isInitialized) {
            _init();
          }
          for (var ix = 0; ix < _aFallbackFonts.length; ++ix) {
            span.style.fontFamily = '"' + p_cssFontName + '",' + _aFallbackFonts[ix];
            wThisFont = span.offsetWidth;
            if (ix > 0 && wThisFont != wPrevFont) {
              return false;
            }
            wPrevFont = wThisFont;
          }
          return true;
        },
        whichFont: function(p_element) {
          var sStack = _getCss(p_element, 'font-family');
          var aStack = sStack.split(',');
          var sFont = aStack.shift();
          while (sFont) {
            sFont = sFont.replace(/^\s*['"]?\s*([^'"]*)\s*['"]?\s*$/, '$1');
            for (var ix = 0; ix < _aFallbackFonts.length; ix++) {
              if (sFont == _aFallbackFonts[ix]) {
                return sFont;
              }
            }
            if (this.isFontLoaded(sFont)) {
              return sFont;
            }
            sFont = aStack.shift();
          }
          return null;
        }
      };
    }();
  }).call(System.global);
  return System.get("@@global-helpers").retrieveGlobal(__module.id, false);
});

System.register("npm:fkit@0.16.2/src/util", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  module.exports = {
    extend: function(target, objects) {
      objects.forEach(function(object) {
        Object.getOwnPropertyNames(object).forEach(function(property) {
          target[property] = object[property];
        });
      });
      return target;
    },
    slice: Array.prototype.slice
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:fkit@0.16.2/src/fn", ["npm:fkit@0.16.2/src/util"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var util = require("npm:fkit@0.16.2/src/util");
  function flatten(as) {
    return as.reduce(function(a, b) {
      return a.concat(b);
    }, []);
  }
  function curry(f) {
    var arity = f.length;
    return (arity <= 1) ? f : given([], 0);
    function given(args, applications) {
      return function() {
        var newArgs = args.concat((arguments.length > 0) ? util.slice.call(arguments, 0) : undefined);
        return (newArgs.length >= arity) ? f.apply(this, newArgs) : given(newArgs, applications + 1);
      };
    }
  }
  function variadic(f) {
    var arity = f.length;
    if (arity < 1) {
      return f;
    } else if (arity === 1) {
      return function() {
        var args = util.slice.call(arguments, 0),
            newArgs = (arguments.length === 1) ? flatten(args) : args;
        return f.call(this, newArgs);
      };
    } else {
      return function() {
        var numMissingArgs = Math.max(arity - arguments.length - 1, 0),
            missingArgs = new Array(numMissingArgs),
            namedArgs = util.slice.call(arguments, 0, arity - 1),
            variadicArgs = util.slice.call(arguments, f.length - 1);
        return f.apply(this, namedArgs.concat(missingArgs).concat([variadicArgs]));
      };
    }
  }
  var self;
  self = module.exports = {
    flatten: flatten,
    apply: curry(function(f, a) {
      return f(a);
    }),
    apply2: curry(function(f, a, b) {
      return f(a, b);
    }),
    apply3: curry(function(f, a, b, c) {
      return f(a, b, c);
    }),
    applyRight: curry(function(a, f) {
      return f(a);
    }),
    compose: variadic(function(fs) {
      return function(a) {
        return fs.reduceRight(function(a, f) {
          return f(a);
        }, a);
      };
    }),
    flip: curry(function(f, a, b) {
      return f(b, a);
    }),
    id: function(a) {
      return a;
    },
    const: function(c) {
      return function() {
        return c;
      };
    },
    curry: curry,
    uncurry: curry(function(f, p) {
      return f(p[0], p[1]);
    }),
    unary: function(f) {
      return (f.length === 1) ? f : self.apply(f);
    },
    binary: function(f) {
      return (f.length === 2) ? f : self.apply2(f);
    },
    variadic: variadic,
    tap: curry(function(f, a) {
      f(a);
      return a;
    }),
    equal: curry(function(a, b) {
      return b === a;
    }),
    notEqual: curry(function(a, b) {
      return b !== a;
    }),
    compare: curry(function(a, b) {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    })
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:fkit@0.16.2/src/list/base", ["npm:fkit@0.16.2/src/fn"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var fn = require("npm:fkit@0.16.2/src/fn");
  var self;
  self = module.exports = {
    isString: function(as) {
      return (typeof as === 'string');
    },
    isArrayOfStrings: function(as) {
      return Array.isArray(as) && as.length > 0 && as.reduce(function(a, b) {
        return a && self.isString(b);
      }, true);
    },
    mempty: function(as) {
      return self.isString(as) || self.isArrayOfStrings(as) ? '' : [];
    },
    pure: function(a) {
      return self.isString(a) || self.isArrayOfStrings(a) ? a : [a];
    },
    toArray: function(as) {
      return self.isString(as) ? as.split('') : as;
    },
    toList: function(as, t) {
      return t === 'string' ? as.join('') : as;
    },
    length: function(as) {
      return as.length;
    },
    empty: function(as) {
      return as.length === 0;
    },
    append: fn.curry(function(a, bs) {
      return self.isString(bs) ? (bs + a) : bs.concat([a]);
    }),
    prepend: fn.curry(function(a, bs) {
      return self.isString(bs) ? (a + bs) : [a].concat(bs);
    }),
    surround: fn.curry(function(a, b, cs) {
      return self.append(b, self.prepend(a, cs));
    }),
    head: function(as) {
      return as[0];
    },
    last: function(as) {
      return as[as.length - 1];
    },
    init: function(as) {
      return as.slice(0, as.length - 1);
    },
    tail: function(as) {
      return as.slice(1);
    },
    inits: function inits(as) {
      return self.prepend(self.mempty(as), self.empty(as) ? [] : inits(self.tail(as)).map(self.prepend(self.head(as))));
    },
    tails: function tails(as) {
      return self.prepend(as, self.empty(as) ? [] : tails(self.tail(as)));
    }
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:fkit@0.16.2/src/math", ["npm:fkit@0.16.2/src/fn"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var fn = require("npm:fkit@0.16.2/src/fn");
  module.exports = {
    add: fn.curry(function(a, b) {
      return b + a;
    }),
    sub: fn.curry(function(a, b) {
      return b - a;
    }),
    mul: fn.curry(function(a, b) {
      return b * a;
    }),
    div: fn.curry(function(a, b) {
      return b / a;
    }),
    mod: fn.curry(function(a, b) {
      return b % a;
    }),
    max: fn.curry(function(a, b) {
      return b > a ? b : a;
    }),
    min: fn.curry(function(a, b) {
      return a > b ? b : a;
    }),
    negate: function(a) {
      return -a;
    },
    eq: fn.curry(function(a, b) {
      return b == a;
    }),
    neq: fn.curry(function(a, b) {
      return b != a;
    }),
    gt: fn.curry(function(a, b) {
      return b > a;
    }),
    gte: fn.curry(function(a, b) {
      return b >= a;
    }),
    lt: fn.curry(function(a, b) {
      return b < a;
    }),
    lte: fn.curry(function(a, b) {
      return b <= a;
    }),
    inc: function(a) {
      return a + 1;
    },
    dec: function(a) {
      return a - 1;
    },
    randomInt: fn.curry(function(a, b) {
      return Math.floor(Math.random() * (b - a + 1)) + a;
    }),
    randomFloat: fn.curry(function(a, b) {
      return (Math.random() * (b - a)) + a;
    })
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:fkit@0.16.2/src/list/sublist", ["npm:fkit@0.16.2/src/list/base", "npm:fkit@0.16.2/src/fn", "npm:fkit@0.16.2/src/list/fold"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var base = require("npm:fkit@0.16.2/src/list/base"),
      fn = require("npm:fkit@0.16.2/src/fn"),
      fold = require("npm:fkit@0.16.2/src/list/fold");
  var self;
  self = module.exports = {
    take: fn.curry(function(n, as) {
      var s = base.isString(as) ? '' : [],
          m = as.length;
      for (var i = 0; i < Math.min(m, n); i++) {
        s = s.concat(as[i]);
      }
      return s;
    }),
    drop: fn.curry(function(n, as) {
      var s = base.isString(as) ? '' : [],
          m = as.length;
      for (var i = n; i < m; i++) {
        s = s.concat(as[i]);
      }
      return s;
    }),
    takeWhile: fn.curry(function(p, as) {
      var s = base.isString(as) ? '' : [],
          n = as.length;
      for (var i = 0; i < n && p(as[i]); i++) {
        s = s.concat(as[i]);
      }
      return s;
    }),
    dropWhile: fn.curry(function(p, as) {
      var s = base.isString(as) ? '' : [],
          m = as.length,
          n = 0;
      while (p(as[n]) && n < as.length) {
        n++;
      }
      for (var i = n; i < m; i++) {
        s = s.concat(as[i]);
      }
      return s;
    }),
    splitAt: fn.curry(function(n, as) {
      return [self.take(n, as), self.drop(n, as)];
    }),
    span: fn.curry(function(p, as) {
      return [self.takeWhile(p, as), self.dropWhile(p, as)];
    }),
    group: function(as) {
      return self.groupBy(fn.equal, as);
    },
    groupBy: fn.curry(function groupBy(f, as) {
      var b = base.head(as),
          bs = self.span(f(b), base.tail(as));
      return base.empty(as) ? [] : base.prepend(base.prepend(b, base.head(bs)), groupBy(f, base.last(bs)));
    })
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:fkit@0.16.2/src/list/map", ["npm:fkit@0.16.2/src/list/base", "npm:fkit@0.16.2/src/fn", "npm:fkit@0.16.2/src/list/fold"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var base = require("npm:fkit@0.16.2/src/list/base"),
      fn = require("npm:fkit@0.16.2/src/fn"),
      fold = require("npm:fkit@0.16.2/src/list/fold");
  module.exports = {
    map: fn.curry(function(f, as) {
      return base.toArray(as).map(f);
    }),
    reverse: function(as) {
      return base.toArray(as).reduce(fn.flip(base.prepend), base.mempty(as));
    },
    intersperse: fn.curry(function(s, as) {
      return base.empty(as) ? base.mempty(as) : fold.concat(base.head(as), prependToAll(base.tail(as)));
      function prependToAll(bs) {
        return base.empty(bs) ? base.mempty(bs) : fold.concat(s, base.head(bs), prependToAll(base.tail(bs)));
      }
    })
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:fkit@0.16.2/src/logic", ["npm:fkit@0.16.2/src/fn", "npm:fkit@0.16.2/src/list/map"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var fn = require("npm:fkit@0.16.2/src/fn"),
      map = require("npm:fkit@0.16.2/src/list/map");
  var self;
  self = module.exports = {
    and: fn.curry(function(a, b) {
      return b && a;
    }),
    or: fn.curry(function(a, b) {
      return b || a;
    }),
    not: function(a) {
      return !a;
    },
    branch: fn.curry(function(p, f, g, a) {
      return p(a) ? f(a) : g(a);
    }),
    whereAll: fn.curry(function(ps, a) {
      return ps.map(fn.applyRight(a)).reduce(self.and, true);
    }),
    whereAny: fn.curry(function(ps, a) {
      return ps.map(fn.applyRight(a)).reduce(self.or, false);
    })
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:fkit@0.16.2/src/list/set", ["npm:fkit@0.16.2/src/list/base", "npm:fkit@0.16.2/src/list/build", "npm:fkit@0.16.2/src/fn", "npm:fkit@0.16.2/src/list/fold", "npm:fkit@0.16.2/src/list/map", "npm:fkit@0.16.2/src/list/search"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var base = require("npm:fkit@0.16.2/src/list/base"),
      build = require("npm:fkit@0.16.2/src/list/build"),
      fn = require("npm:fkit@0.16.2/src/fn"),
      fold = require("npm:fkit@0.16.2/src/list/fold"),
      map = require("npm:fkit@0.16.2/src/list/map"),
      search = require("npm:fkit@0.16.2/src/list/search");
  var self;
  self = module.exports = {
    nub: function(as) {
      return self.nubBy(fn.equal, as);
    },
    nubBy: fn.curry(function nubBy(f, as) {
      var a = base.head(as);
      return base.empty(as) ? base.mempty(as) : base.prepend(a, nubBy(f, search.filter(function(b) {
        return !f(a, b);
      }, base.tail(as))));
    }),
    union: fn.curry(function(as, bs) {
      return fold.fold(function(cs, b) {
        return (search.elem(b, cs)) ? cs : base.append(b, cs);
      }, as, bs);
    }),
    intersect: fn.curry(function(as, bs) {
      return fold.fold(function(cs, a) {
        return (search.elem(a, bs)) ? base.append(a, cs) : cs;
      }, base.mempty(as), as);
    }),
    difference: fn.curry(function(as, bs) {
      return fold.fold(fn.flip(self.remove), as, bs);
    }),
    remove: fn.curry(function(a, bs) {
      return self.removeBy(fn.equal, a, bs);
    }),
    removeBy: fn.curry(function removeBy(f, a, bs_) {
      var b = base.head(bs_),
          bs = base.tail(bs_);
      return base.empty(bs_) ? base.mempty(bs_) : f(a, b) ? bs : base.prepend(b, removeBy(f, a, bs));
    }),
    cartesian: fn.curry(function cartesian(as, bs) {
      return base.empty(as) ? [] : fold.concat(map.map(build.pair(base.head(as)), bs), cartesian(base.tail(as), bs));
    }),
    subsequences: function(as) {
      return base.prepend(base.mempty(as), subsequences_(as));
      function subsequences_(bs) {
        var b = base.head(bs);
        if (base.empty(bs)) {
          return [];
        } else {
          return base.prepend(base.pure(b), fold.foldRight(f, [], subsequences_(base.tail(bs))));
        }
        function f(ys, r) {
          return fold.concat(base.pure(ys), base.pure(base.prepend(b, ys)), r);
        }
      }
    },
    permutations: function permutations(as) {
      return base.prepend(as, permutations_(as, []));
      function permutations_(bs_, cs) {
        var b = base.head(bs_),
            bs = base.tail(bs_);
        return base.empty(bs_) ? [] : fold.foldRight(interleave, permutations_(bs, base.prepend(b, cs)), permutations(cs));
        function interleave(ds, r) {
          return interleave_(fn.id, ds)[1];
          function interleave_(f, es_) {
            if (base.empty(es_)) {
              return [bs, r];
            } else {
              var e = base.head(es_),
                  es = base.tail(es_),
                  s = interleave_(fn.compose(f, base.prepend(e)), es);
              return [base.prepend(e, s[0]), base.prepend(f(fold.concat(b, e, s[0])), s[1])];
            }
          }
        }
      }
    }
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:fkit@0.16.2/src/list/sort", ["npm:fkit@0.16.2/src/list/base", "npm:fkit@0.16.2/src/fn", "npm:fkit@0.16.2/src/util"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var base = require("npm:fkit@0.16.2/src/list/base"),
      fn = require("npm:fkit@0.16.2/src/fn"),
      util = require("npm:fkit@0.16.2/src/util");
  var self;
  self = module.exports = {
    sort: function(as) {
      return self.sortBy(fn.compare, as);
    },
    sortBy: fn.curry(function(c, as) {
      var bs = base.toArray(as.slice(0));
      return base.toList(bs.sort(c), typeof as);
    })
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:fkit@0.16.2/src/list/zip", ["npm:fkit@0.16.2/src/list/base", "npm:fkit@0.16.2/src/list/build", "npm:fkit@0.16.2/src/fn"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var base = require("npm:fkit@0.16.2/src/list/base"),
      build = require("npm:fkit@0.16.2/src/list/build"),
      fn = require("npm:fkit@0.16.2/src/fn");
  var self;
  self = module.exports = {
    zipWith: fn.curry(function(f, as, bs) {
      var n = Math.min(as.length, bs.length);
      return base.toArray(as.slice(0, n)).map(function(a, i) {
        return f(a, bs[i]);
      });
    }),
    zip: fn.curry(function(as, bs) {
      return self.zipWith(build.pair, as, bs);
    }),
    unzip: function(as) {
      var s = base.mempty(as[0]);
      return as.reduceRight(function(p, ps) {
        var a = ps[0],
            b = ps[1],
            as = p[0],
            bs = p[1];
        return [base.prepend(a, as), base.prepend(b, bs)];
      }, [s, s]);
    }
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:fkit@0.16.2/src/obj", ["npm:fkit@0.16.2/src/fn", "npm:fkit@0.16.2/src/list/set", "npm:fkit@0.16.2/src/util"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var fn = require("npm:fkit@0.16.2/src/fn"),
      set = require("npm:fkit@0.16.2/src/list/set"),
      util = require("npm:fkit@0.16.2/src/util");
  var self;
  self = module.exports = {
    applyMethod: fn.curry(function(k, a, o) {
      return o[k](a);
    }),
    applyMethod2: fn.curry(function(k, a, b, o) {
      return o[k](a, b);
    }),
    applyMethod3: fn.curry(function(k, a, b, c, o) {
      return o[k](a, b, c);
    }),
    copy: fn.variadic(function(o, ps) {
      return util.extend(new o.constructor(), [o].concat(ps));
    }),
    get: fn.curry(function(k, o) {
      return o[k];
    }),
    getIn: fn.curry(function(ks, o) {
      return ks.reduce(function(a, b) {
        return (a !== undefined) ? a[b] : undefined;
      }, o);
    }),
    set: fn.curry(function(k, v, o) {
      var p = {};
      p[k] = v;
      return self.copy(o, p);
    }),
    update: fn.curry(function(k, f, o) {
      return self.set(k, f(self.get(k, o)), o);
    }),
    pick: fn.curry(function(ks, o) {
      return ks.reduce(function(p, k) {
        return self.set(k, self.get(k, o), p);
      }, {});
    }),
    omit: fn.curry(function(ks, o) {
      return set.difference(self.keys(o), ks).reduce(function(p, k) {
        return self.set(k, self.get(k, o), p);
      }, {});
    }),
    pairs: function(o) {
      return Object.keys(o).map(function(k) {
        return [k, self.get(k, o)];
      });
    },
    keys: function(o) {
      return Object.keys(o);
    },
    values: function(o) {
      return Object.keys(o).map(fn.flip(self.get)(o));
    }
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:fkit@0.16.2/src/string", ["npm:fkit@0.16.2/src/fn"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var fn = require("npm:fkit@0.16.2/src/fn");
  module.exports = {
    toUpper: function(s) {
      return s.toUpperCase();
    },
    toLower: function(s) {
      return s.toLowerCase();
    },
    replace: fn.curry(function(a, b, s) {
      return s.replace(a, b);
    })
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:webfontloader@1.5.15/webfontloader", [], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "format cjs";
  ;
  (function(window, document, undefined) {
    function aa(a, b, c) {
      return a.call.apply(a.bind, arguments);
    }
    function ba(a, b, c) {
      if (!a)
        throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
          var c = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(c, d);
          return a.apply(b, c);
        };
      }
      return function() {
        return a.apply(b, arguments);
      };
    }
    function k(a, b, c) {
      k = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
      return k.apply(null, arguments);
    }
    var n = Date.now || function() {
      return +new Date;
    };
    function q(a, b) {
      this.J = a;
      this.t = b || a;
      this.C = this.t.document;
    }
    q.prototype.createElement = function(a, b, c) {
      a = this.C.createElement(a);
      if (b)
        for (var d in b)
          b.hasOwnProperty(d) && ("style" == d ? a.style.cssText = b[d] : a.setAttribute(d, b[d]));
      c && a.appendChild(this.C.createTextNode(c));
      return a;
    };
    function r(a, b, c) {
      a = a.C.getElementsByTagName(b)[0];
      a || (a = document.documentElement);
      a && a.lastChild && a.insertBefore(c, a.lastChild);
    }
    function ca(a, b) {
      function c() {
        a.C.body ? b() : setTimeout(c, 0);
      }
      c();
    }
    function s(a, b, c) {
      b = b || [];
      c = c || [];
      for (var d = a.className.split(/\s+/),
          e = 0; e < b.length; e += 1) {
        for (var f = !1,
            g = 0; g < d.length; g += 1)
          if (b[e] === d[g]) {
            f = !0;
            break;
          }
        f || d.push(b[e]);
      }
      b = [];
      for (e = 0; e < d.length; e += 1) {
        f = !1;
        for (g = 0; g < c.length; g += 1)
          if (d[e] === c[g]) {
            f = !0;
            break;
          }
        f || b.push(d[e]);
      }
      a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
    }
    function t(a, b) {
      for (var c = a.className.split(/\s+/),
          d = 0,
          e = c.length; d < e; d++)
        if (c[d] == b)
          return !0;
      return !1;
    }
    function u(a) {
      if ("string" === typeof a.ma)
        return a.ma;
      var b = a.t.location.protocol;
      "about:" == b && (b = a.J.location.protocol);
      return "https:" == b ? "https:" : "http:";
    }
    function v(a, b) {
      var c = a.createElement("link", {
        rel: "stylesheet",
        href: b
      }),
          d = !1;
      c.onload = function() {
        d || (d = !0);
      };
      c.onerror = function() {
        d || (d = !0);
      };
      r(a, "head", c);
    }
    function w(a, b, c, d) {
      var e = a.C.getElementsByTagName("head")[0];
      if (e) {
        var f = a.createElement("script", {src: b}),
            g = !1;
        f.onload = f.onreadystatechange = function() {
          g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f));
        };
        e.appendChild(f);
        window.setTimeout(function() {
          g || (g = !0, c && c(Error("Script load timeout")));
        }, d || 5E3);
        return f;
      }
      return null;
    }
    ;
    function x(a, b) {
      this.X = a;
      this.fa = b;
    }
    ;
    function y(a, b, c, d) {
      this.c = null != a ? a : null;
      this.g = null != b ? b : null;
      this.A = null != c ? c : null;
      this.e = null != d ? d : null;
    }
    var da = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
    y.prototype.compare = function(a) {
      return this.c > a.c || this.c === a.c && this.g > a.g || this.c === a.c && this.g === a.g && this.A > a.A ? 1 : this.c < a.c || this.c === a.c && this.g < a.g || this.c === a.c && this.g === a.g && this.A < a.A ? -1 : 0;
    };
    y.prototype.toString = function() {
      return [this.c, this.g || "", this.A || "", this.e || ""].join("");
    };
    function z(a) {
      a = da.exec(a);
      var b = null,
          c = null,
          d = null,
          e = null;
      a && (null !== a[1] && a[1] && (b = parseInt(a[1], 10)), null !== a[2] && a[2] && (c = parseInt(a[2], 10)), null !== a[3] && a[3] && (d = parseInt(a[3], 10)), null !== a[4] && a[4] && (e = /^[0-9]+$/.test(a[4]) ? parseInt(a[4], 10) : a[4]));
      return new y(b, c, d, e);
    }
    ;
    function A(a, b, c, d, e, f, g, h) {
      this.M = a;
      this.k = h;
    }
    A.prototype.getName = function() {
      return this.M;
    };
    function B(a) {
      this.a = a;
    }
    var ea = new A("Unknown", 0, 0, 0, 0, 0, 0, new x(!1, !1));
    B.prototype.parse = function() {
      var a;
      if (-1 != this.a.indexOf("MSIE") || -1 != this.a.indexOf("Trident/")) {
        a = C(this);
        var b = z(D(this)),
            c = null,
            d = E(this.a, /Trident\/([\d\w\.]+)/, 1),
            c = -1 != this.a.indexOf("MSIE") ? z(E(this.a, /MSIE ([\d\w\.]+)/, 1)) : z(E(this.a, /rv:([\d\w\.]+)/, 1));
        "" != d && z(d);
        a = new A("MSIE", 0, 0, 0, 0, 0, 0, new x("Windows" == a && 6 <= c.c || "Windows Phone" == a && 8 <= b.c, !1));
      } else if (-1 != this.a.indexOf("Opera"))
        a: if (a = z(E(this.a, /Presto\/([\d\w\.]+)/, 1)), z(D(this)), null !== a.c || z(E(this.a, /rv:([^\)]+)/, 1)), -1 != this.a.indexOf("Opera Mini/"))
          a = z(E(this.a, /Opera Mini\/([\d\.]+)/, 1)), a = new A("OperaMini", 0, 0, 0, C(this), 0, 0, new x(!1, !1));
        else {
          if (-1 != this.a.indexOf("Version/") && (a = z(E(this.a, /Version\/([\d\.]+)/, 1)), null !== a.c)) {
            a = new A("Opera", 0, 0, 0, C(this), 0, 0, new x(10 <= a.c, !1));
            break a;
          }
          a = z(E(this.a, /Opera[\/ ]([\d\.]+)/, 1));
          a = null !== a.c ? new A("Opera", 0, 0, 0, C(this), 0, 0, new x(10 <= a.c, !1)) : new A("Opera", 0, 0, 0, C(this), 0, 0, new x(!1, !1));
        }
      else
        /OPR\/[\d.]+/.test(this.a) ? a = F(this) : /AppleWeb(K|k)it/.test(this.a) ? a = F(this) : -1 != this.a.indexOf("Gecko") ? (a = "Unknown", b = new y, z(D(this)), b = !1, -1 != this.a.indexOf("Firefox") ? (a = "Firefox", b = z(E(this.a, /Firefox\/([\d\w\.]+)/, 1)), b = 3 <= b.c && 5 <= b.g) : -1 != this.a.indexOf("Mozilla") && (a = "Mozilla"), c = z(E(this.a, /rv:([^\)]+)/, 1)), b || (b = 1 < c.c || 1 == c.c && 9 < c.g || 1 == c.c && 9 == c.g && 2 <= c.A), a = new A(a, 0, 0, 0, C(this), 0, 0, new x(b, !1))) : a = ea;
      return a;
    };
    function C(a) {
      var b = E(a.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
      if ("" != b)
        return /BB\d{2}/.test(b) && (b = "BlackBerry"), b;
      a = E(a.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/, 1);
      return "" != a ? ("Mac_PowerPC" == a ? a = "Macintosh" : "PlayStation" == a && (a = "Linux"), a) : "Unknown";
    }
    function D(a) {
      var b = E(a.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
      if (b || (b = E(a.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (b = E(a.a, /(iPhone )?OS ([\d_]+)/, 2)))
        return b;
      if (b = E(a.a, /(?:Linux|CrOS|CrKey) ([^;)]+)/, 1))
        for (var b = b.split(/\s/),
            c = 0; c < b.length; c += 1)
          if (/^[\d\._]+$/.test(b[c]))
            return b[c];
      return (a = E(a.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : "Unknown";
    }
    function F(a) {
      var b = C(a),
          c = z(D(a)),
          d = z(E(a.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1)),
          e = "Unknown",
          f = new y,
          f = "Unknown",
          g = !1;
      /OPR\/[\d.]+/.test(a.a) ? e = "Opera" : -1 != a.a.indexOf("Chrome") || -1 != a.a.indexOf("CrMo") || -1 != a.a.indexOf("CriOS") ? e = "Chrome" : /Silk\/\d/.test(a.a) ? e = "Silk" : "BlackBerry" == b || "Android" == b ? e = "BuiltinBrowser" : -1 != a.a.indexOf("PhantomJS") ? e = "PhantomJS" : -1 != a.a.indexOf("Safari") ? e = "Safari" : -1 != a.a.indexOf("AdobeAIR") ? e = "AdobeAIR" : -1 != a.a.indexOf("PlayStation") && (e = "BuiltinBrowser");
      "BuiltinBrowser" == e ? f = "Unknown" : "Silk" == e ? f = E(a.a, /Silk\/([\d\._]+)/, 1) : "Chrome" == e ? f = E(a.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != a.a.indexOf("Version/") ? f = E(a.a, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == e ? f = E(a.a, /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == e ? f = E(a.a, /OPR\/([\d.]+)/, 1) : "PhantomJS" == e && (f = E(a.a, /PhantomJS\/([\d.]+)/, 1));
      f = z(f);
      g = "AdobeAIR" == e ? 2 < f.c || 2 == f.c && 5 <= f.g : "BlackBerry" == b ? 10 <= c.c : "Android" == b ? 2 < c.c || 2 == c.c && 1 < c.g : 526 <= d.c || 525 <= d.c && 13 <= d.g;
      return new A(e, 0, 0, 0, 0, 0, 0, new x(g, 536 > d.c || 536 == d.c && 11 > d.g));
    }
    function E(a, b, c) {
      return (a = a.match(b)) && a[c] ? a[c] : "";
    }
    ;
    function G(a) {
      this.la = a || "-";
    }
    G.prototype.e = function(a) {
      for (var b = [],
          c = 0; c < arguments.length; c++)
        b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
      return b.join(this.la);
    };
    function H(a, b) {
      this.M = a;
      this.Y = 4;
      this.N = "n";
      var c = (b || "n4").match(/^([nio])([1-9])$/i);
      c && (this.N = c[1], this.Y = parseInt(c[2], 10));
    }
    H.prototype.getName = function() {
      return this.M;
    };
    function I(a) {
      return a.N + a.Y;
    }
    function ga(a) {
      var b = 4,
          c = "n",
          d = null;
      a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
      return c + b;
    }
    ;
    function ha(a, b) {
      this.d = a;
      this.p = a.t.document.documentElement;
      this.P = b;
      this.j = "wf";
      this.h = new G("-");
      this.ga = !1 !== b.events;
      this.B = !1 !== b.classes;
    }
    function J(a) {
      if (a.B) {
        var b = t(a.p, a.h.e(a.j, "active")),
            c = [],
            d = [a.h.e(a.j, "loading")];
        b || c.push(a.h.e(a.j, "inactive"));
        s(a.p, c, d);
      }
      K(a, "inactive");
    }
    function K(a, b, c) {
      if (a.ga && a.P[b])
        if (c)
          a.P[b](c.getName(), I(c));
        else
          a.P[b]();
    }
    ;
    function ia() {
      this.w = {};
    }
    ;
    function L(a, b) {
      this.d = a;
      this.G = b;
      this.m = this.d.createElement("span", {"aria-hidden": "true"}, this.G);
    }
    function M(a) {
      r(a.d, "body", a.m);
    }
    function N(a) {
      var b;
      b = [];
      for (var c = a.M.split(/,\s*/),
          d = 0; d < c.length; d++) {
        var e = c[d].replace(/['"]/g, "");
        -1 == e.indexOf(" ") ? b.push(e) : b.push("'" + e + "'");
      }
      b = b.join(",");
      c = "normal";
      "o" === a.N ? c = "oblique" : "i" === a.N && (c = "italic");
      return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + b + ";" + ("font-style:" + c + ";font-weight:" + (a.Y + "00") + ";");
    }
    L.prototype.remove = function() {
      var a = this.m;
      a.parentNode && a.parentNode.removeChild(a);
    };
    function O(a, b, c, d, e, f, g, h) {
      this.Z = a;
      this.ja = b;
      this.d = c;
      this.s = d;
      this.G = h || "BESbswy";
      this.k = e;
      this.I = {};
      this.W = f || 3E3;
      this.ba = g || null;
      this.F = this.D = null;
      a = new L(this.d, this.G);
      M(a);
      for (var m in P)
        P.hasOwnProperty(m) && (b = new H(P[m], I(this.s)), b = N(b), a.m.style.cssText = b, this.I[P[m]] = a.m.offsetWidth);
      a.remove();
    }
    var P = {
      ra: "serif",
      qa: "sans-serif",
      pa: "monospace"
    };
    O.prototype.start = function() {
      this.D = new L(this.d, this.G);
      M(this.D);
      this.F = new L(this.d, this.G);
      M(this.F);
      this.na = n();
      var a = new H(this.s.getName() + ",serif", I(this.s)),
          a = N(a);
      this.D.m.style.cssText = a;
      a = new H(this.s.getName() + ",sans-serif", I(this.s));
      a = N(a);
      this.F.m.style.cssText = a;
      Q(this);
    };
    function R(a, b, c) {
      for (var d in P)
        if (P.hasOwnProperty(d) && b === a.I[P[d]] && c === a.I[P[d]])
          return !0;
      return !1;
    }
    function Q(a) {
      var b = a.D.m.offsetWidth,
          c = a.F.m.offsetWidth;
      b === a.I.serif && c === a.I["sans-serif"] || a.k.fa && R(a, b, c) ? n() - a.na >= a.W ? a.k.fa && R(a, b, c) && (null === a.ba || a.ba.hasOwnProperty(a.s.getName())) ? S(a, a.Z) : S(a, a.ja) : ja(a) : S(a, a.Z);
    }
    function ja(a) {
      setTimeout(k(function() {
        Q(this);
      }, a), 25);
    }
    function S(a, b) {
      a.D.remove();
      a.F.remove();
      b(a.s);
    }
    ;
    function T(a, b, c, d) {
      this.d = b;
      this.u = c;
      this.R = 0;
      this.da = this.aa = !1;
      this.W = d;
      this.k = a.k;
    }
    function ka(a, b, c, d, e) {
      c = c || {};
      if (0 === b.length && e)
        J(a.u);
      else
        for (a.R += b.length, e && (a.aa = e), e = 0; e < b.length; e++) {
          var f = b[e],
              g = c[f.getName()],
              h = a.u,
              m = f;
          h.B && s(h.p, [h.h.e(h.j, m.getName(), I(m).toString(), "loading")]);
          K(h, "fontloading", m);
          h = null;
          h = new O(k(a.ha, a), k(a.ia, a), a.d, f, a.k, a.W, d, g);
          h.start();
        }
    }
    T.prototype.ha = function(a) {
      var b = this.u;
      b.B && s(b.p, [b.h.e(b.j, a.getName(), I(a).toString(), "active")], [b.h.e(b.j, a.getName(), I(a).toString(), "loading"), b.h.e(b.j, a.getName(), I(a).toString(), "inactive")]);
      K(b, "fontactive", a);
      this.da = !0;
      la(this);
    };
    T.prototype.ia = function(a) {
      var b = this.u;
      if (b.B) {
        var c = t(b.p, b.h.e(b.j, a.getName(), I(a).toString(), "active")),
            d = [],
            e = [b.h.e(b.j, a.getName(), I(a).toString(), "loading")];
        c || d.push(b.h.e(b.j, a.getName(), I(a).toString(), "inactive"));
        s(b.p, d, e);
      }
      K(b, "fontinactive", a);
      la(this);
    };
    function la(a) {
      0 == --a.R && a.aa && (a.da ? (a = a.u, a.B && s(a.p, [a.h.e(a.j, "active")], [a.h.e(a.j, "loading"), a.h.e(a.j, "inactive")]), K(a, "active")) : J(a.u));
    }
    ;
    function U(a) {
      this.J = a;
      this.v = new ia;
      this.oa = new B(a.navigator.userAgent);
      this.a = this.oa.parse();
      this.T = this.U = 0;
      this.Q = this.S = !0;
    }
    U.prototype.load = function(a) {
      this.d = new q(this.J, a.context || this.J);
      this.S = !1 !== a.events;
      this.Q = !1 !== a.classes;
      var b = new ha(this.d, a),
          c = [],
          d = a.timeout;
      b.B && s(b.p, [b.h.e(b.j, "loading")]);
      K(b, "loading");
      var c = this.v,
          e = this.d,
          f = [],
          g;
      for (g in a)
        if (a.hasOwnProperty(g)) {
          var h = c.w[g];
          h && f.push(h(a[g], e));
        }
      c = f;
      this.T = this.U = c.length;
      a = new T(this.a, this.d, b, d);
      d = 0;
      for (g = c.length; d < g; d++)
        e = c[d], e.K(this.a, k(this.ka, this, e, b, a));
    };
    U.prototype.ka = function(a, b, c, d) {
      var e = this;
      d ? a.load(function(a, b, d) {
        ma(e, c, a, b, d);
      }) : (a = 0 == --this.U, this.T--, a && 0 == this.T ? J(b) : (this.Q || this.S) && ka(c, [], {}, null, a));
    };
    function ma(a, b, c, d, e) {
      var f = 0 == --a.U;
      (a.Q || a.S) && setTimeout(function() {
        ka(b, c, d || null, e || null, f);
      }, 0);
    }
    ;
    function na(a, b, c) {
      this.O = a ? a : b + oa;
      this.q = [];
      this.V = [];
      this.ea = c || "";
    }
    var oa = "//fonts.googleapis.com/css";
    na.prototype.e = function() {
      if (0 == this.q.length)
        throw Error("No fonts to load!");
      if (-1 != this.O.indexOf("kit="))
        return this.O;
      for (var a = this.q.length,
          b = [],
          c = 0; c < a; c++)
        b.push(this.q[c].replace(/ /g, "+"));
      a = this.O + "?family=" + b.join("%7C");
      0 < this.V.length && (a += "&subset=" + this.V.join(","));
      0 < this.ea.length && (a += "&text=" + encodeURIComponent(this.ea));
      return a;
    };
    function pa(a) {
      this.q = a;
      this.ca = [];
      this.L = {};
    }
    var qa = {
      latin: "BESbswy",
      cyrillic: "&#1081;&#1103;&#1046;",
      greek: "&#945;&#946;&#931;",
      khmer: "&#x1780;&#x1781;&#x1782;",
      Hanuman: "&#x1780;&#x1781;&#x1782;"
    },
        ra = {
          thin: "1",
          extralight: "2",
          "extra-light": "2",
          ultralight: "2",
          "ultra-light": "2",
          light: "3",
          regular: "4",
          book: "4",
          medium: "5",
          "semi-bold": "6",
          semibold: "6",
          "demi-bold": "6",
          demibold: "6",
          bold: "7",
          "extra-bold": "8",
          extrabold: "8",
          "ultra-bold": "8",
          ultrabold: "8",
          black: "9",
          heavy: "9",
          l: "3",
          r: "4",
          b: "7"
        },
        sa = {
          i: "i",
          italic: "i",
          n: "n",
          normal: "n"
        },
        ta = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
    pa.prototype.parse = function() {
      for (var a = this.q.length,
          b = 0; b < a; b++) {
        var c = this.q[b].split(":"),
            d = c[0].replace(/\+/g, " "),
            e = ["n4"];
        if (2 <= c.length) {
          var f;
          var g = c[1];
          f = [];
          if (g)
            for (var g = g.split(","),
                h = g.length,
                m = 0; m < h; m++) {
              var l;
              l = g[m];
              if (l.match(/^[\w-]+$/)) {
                l = ta.exec(l.toLowerCase());
                var p = void 0;
                if (null == l)
                  p = "";
                else {
                  p = void 0;
                  p = l[1];
                  if (null == p || "" == p)
                    p = "4";
                  else
                    var fa = ra[p],
                        p = fa ? fa : isNaN(p) ? "4" : p.substr(0, 1);
                  l = l[2];
                  p = [null == l || "" == l ? "n" : sa[l], p].join("");
                }
                l = p;
              } else
                l = "";
              l && f.push(l);
            }
          0 < f.length && (e = f);
          3 == c.length && (c = c[2], f = [], c = c ? c.split(",") : f, 0 < c.length && (c = qa[c[0]]) && (this.L[d] = c));
        }
        this.L[d] || (c = qa[d]) && (this.L[d] = c);
        for (c = 0; c < e.length; c += 1)
          this.ca.push(new H(d, e[c]));
      }
    };
    function V(a, b) {
      this.a = (new B(navigator.userAgent)).parse();
      this.d = a;
      this.f = b;
    }
    var ua = {
      Arimo: !0,
      Cousine: !0,
      Tinos: !0
    };
    V.prototype.K = function(a, b) {
      b(a.k.X);
    };
    V.prototype.load = function(a) {
      var b = this.d;
      "MSIE" == this.a.getName() && 1 != this.f.blocking ? ca(b, k(this.$, this, a)) : this.$(a);
    };
    V.prototype.$ = function(a) {
      for (var b = this.d,
          c = new na(this.f.api, u(b), this.f.text),
          d = this.f.families,
          e = d.length,
          f = 0; f < e; f++) {
        var g = d[f].split(":");
        3 == g.length && c.V.push(g.pop());
        var h = "";
        2 == g.length && "" != g[1] && (h = ":");
        c.q.push(g.join(h));
      }
      d = new pa(d);
      d.parse();
      v(b, c.e());
      a(d.ca, d.L, ua);
    };
    function W(a, b) {
      this.d = a;
      this.f = b;
      this.o = [];
    }
    W.prototype.H = function(a) {
      var b = this.d;
      return u(this.d) + (this.f.api || "//f.fontdeck.com/s/css/js/") + (b.t.location.hostname || b.J.location.hostname) + "/" + a + ".js";
    };
    W.prototype.K = function(a, b) {
      var c = this.f.id,
          d = this.d.t,
          e = this;
      c ? (d.__webfontfontdeckmodule__ || (d.__webfontfontdeckmodule__ = {}), d.__webfontfontdeckmodule__[c] = function(a, c) {
        for (var d = 0,
            m = c.fonts.length; d < m; ++d) {
          var l = c.fonts[d];
          e.o.push(new H(l.name, ga("font-weight:" + l.weight + ";font-style:" + l.style)));
        }
        b(a);
      }, w(this.d, this.H(c), function(a) {
        a && b(!1);
      })) : b(!1);
    };
    W.prototype.load = function(a) {
      a(this.o);
    };
    function X(a, b) {
      this.d = a;
      this.f = b;
      this.o = [];
    }
    X.prototype.H = function(a) {
      var b = u(this.d);
      return (this.f.api || b + "//use.typekit.net") + "/" + a + ".js";
    };
    X.prototype.K = function(a, b) {
      var c = this.f.id,
          d = this.d.t,
          e = this;
      c ? w(this.d, this.H(c), function(a) {
        if (a)
          b(!1);
        else {
          if (d.Typekit && d.Typekit.config && d.Typekit.config.fn) {
            a = d.Typekit.config.fn;
            for (var c = 0; c < a.length; c += 2)
              for (var h = a[c],
                  m = a[c + 1],
                  l = 0; l < m.length; l++)
                e.o.push(new H(h, m[l]));
            try {
              d.Typekit.load({
                events: !1,
                classes: !1
              });
            } catch (p) {}
          }
          b(!0);
        }
      }, 2E3) : b(!1);
    };
    X.prototype.load = function(a) {
      a(this.o);
    };
    function Y(a, b) {
      this.d = a;
      this.f = b;
      this.o = [];
    }
    Y.prototype.K = function(a, b) {
      var c = this,
          d = c.f.projectId,
          e = c.f.version;
      if (d) {
        var f = c.d.t;
        w(this.d, c.H(d, e), function(e) {
          if (e)
            b(!1);
          else {
            if (f["__mti_fntLst" + d] && (e = f["__mti_fntLst" + d]()))
              for (var h = 0; h < e.length; h++)
                c.o.push(new H(e[h].fontfamily));
            b(a.k.X);
          }
        }).id = "__MonotypeAPIScript__" + d;
      } else
        b(!1);
    };
    Y.prototype.H = function(a, b) {
      var c = u(this.d),
          d = (this.f.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
      return c + "//" + d + "/" + a + ".js" + (b ? "?v=" + b : "");
    };
    Y.prototype.load = function(a) {
      a(this.o);
    };
    function Z(a, b) {
      this.d = a;
      this.f = b;
    }
    Z.prototype.load = function(a) {
      var b,
          c,
          d = this.f.urls || [],
          e = this.f.families || [],
          f = this.f.testStrings || {};
      b = 0;
      for (c = d.length; b < c; b++)
        v(this.d, d[b]);
      d = [];
      b = 0;
      for (c = e.length; b < c; b++) {
        var g = e[b].split(":");
        if (g[1])
          for (var h = g[1].split(","),
              m = 0; m < h.length; m += 1)
            d.push(new H(g[0], h[m]));
        else
          d.push(new H(g[0]));
      }
      a(d, f);
    };
    Z.prototype.K = function(a, b) {
      return b(a.k.X);
    };
    var $ = new U(this);
    $.v.w.custom = function(a, b) {
      return new Z(b, a);
    };
    $.v.w.fontdeck = function(a, b) {
      return new W(b, a);
    };
    $.v.w.monotype = function(a, b) {
      return new Y(b, a);
    };
    $.v.w.typekit = function(a, b) {
      return new X(b, a);
    };
    $.v.w.google = function(a, b) {
      return new V(b, a);
    };
    this.WebFont || (this.WebFont = {}, this.WebFont.load = k($.load, $), this.WebFontConfig && $.load(this.WebFontConfig));
  })(this, document);
  global.define = __define;
  return module.exports;
});

System.register("npm:process@0.10.1", ["npm:process@0.10.1/browser"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:process@0.10.1/browser");
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/warning", ["npm:react@0.13.1/lib/emptyFunction", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    "use strict";
    var emptyFunction = require("npm:react@0.13.1/lib/emptyFunction");
    var warning = emptyFunction;
    if ("production" !== process.env.NODE_ENV) {
      warning = function(condition, format) {
        for (var args = [],
            $__0 = 2,
            $__1 = arguments.length; $__0 < $__1; $__0++)
          args.push(arguments[$__0]);
        if (format === undefined) {
          throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (format.length < 10 || /^[s\W]*$/.test(format)) {
          throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
        }
        if (format.indexOf('Failed Composite propType: ') === 0) {
          return ;
        }
        if (!condition) {
          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function() {
            return args[argIndex++];
          });
          console.warn(message);
          try {
            throw new Error(message);
          } catch (x) {}
        }
      };
    }
    module.exports = warning;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactInstanceHandles", ["npm:react@0.13.1/lib/ReactRootIndex", "npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactRootIndex = require("npm:react@0.13.1/lib/ReactRootIndex");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var SEPARATOR = '.';
    var SEPARATOR_LENGTH = SEPARATOR.length;
    var MAX_TREE_DEPTH = 100;
    function getReactRootIDString(index) {
      return SEPARATOR + index.toString(36);
    }
    function isBoundary(id, index) {
      return id.charAt(index) === SEPARATOR || index === id.length;
    }
    function isValidID(id) {
      return id === '' || (id.charAt(0) === SEPARATOR && id.charAt(id.length - 1) !== SEPARATOR);
    }
    function isAncestorIDOf(ancestorID, descendantID) {
      return (descendantID.indexOf(ancestorID) === 0 && isBoundary(descendantID, ancestorID.length));
    }
    function getParentID(id) {
      return id ? id.substr(0, id.lastIndexOf(SEPARATOR)) : '';
    }
    function getNextDescendantID(ancestorID, destinationID) {
      ("production" !== process.env.NODE_ENV ? invariant(isValidID(ancestorID) && isValidID(destinationID), 'getNextDescendantID(%s, %s): Received an invalid React DOM ID.', ancestorID, destinationID) : invariant(isValidID(ancestorID) && isValidID(destinationID)));
      ("production" !== process.env.NODE_ENV ? invariant(isAncestorIDOf(ancestorID, destinationID), 'getNextDescendantID(...): React has made an invalid assumption about ' + 'the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.', ancestorID, destinationID) : invariant(isAncestorIDOf(ancestorID, destinationID)));
      if (ancestorID === destinationID) {
        return ancestorID;
      }
      var start = ancestorID.length + SEPARATOR_LENGTH;
      var i;
      for (i = start; i < destinationID.length; i++) {
        if (isBoundary(destinationID, i)) {
          break;
        }
      }
      return destinationID.substr(0, i);
    }
    function getFirstCommonAncestorID(oneID, twoID) {
      var minLength = Math.min(oneID.length, twoID.length);
      if (minLength === 0) {
        return '';
      }
      var lastCommonMarkerIndex = 0;
      for (var i = 0; i <= minLength; i++) {
        if (isBoundary(oneID, i) && isBoundary(twoID, i)) {
          lastCommonMarkerIndex = i;
        } else if (oneID.charAt(i) !== twoID.charAt(i)) {
          break;
        }
      }
      var longestCommonID = oneID.substr(0, lastCommonMarkerIndex);
      ("production" !== process.env.NODE_ENV ? invariant(isValidID(longestCommonID), 'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s', oneID, twoID, longestCommonID) : invariant(isValidID(longestCommonID)));
      return longestCommonID;
    }
    function traverseParentPath(start, stop, cb, arg, skipFirst, skipLast) {
      start = start || '';
      stop = stop || '';
      ("production" !== process.env.NODE_ENV ? invariant(start !== stop, 'traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.', start) : invariant(start !== stop));
      var traverseUp = isAncestorIDOf(stop, start);
      ("production" !== process.env.NODE_ENV ? invariant(traverseUp || isAncestorIDOf(start, stop), 'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do ' + 'not have a parent path.', start, stop) : invariant(traverseUp || isAncestorIDOf(start, stop)));
      var depth = 0;
      var traverse = traverseUp ? getParentID : getNextDescendantID;
      for (var id = start; ; id = traverse(id, stop)) {
        var ret;
        if ((!skipFirst || id !== start) && (!skipLast || id !== stop)) {
          ret = cb(id, traverseUp, arg);
        }
        if (ret === false || id === stop) {
          break;
        }
        ("production" !== process.env.NODE_ENV ? invariant(depth++ < MAX_TREE_DEPTH, 'traverseParentPath(%s, %s, ...): Detected an infinite loop while ' + 'traversing the React DOM ID tree. This may be due to malformed IDs: %s', start, stop) : invariant(depth++ < MAX_TREE_DEPTH));
      }
    }
    var ReactInstanceHandles = {
      createReactRootID: function() {
        return getReactRootIDString(ReactRootIndex.createReactRootIndex());
      },
      createReactID: function(rootID, name) {
        return rootID + name;
      },
      getReactRootIDFromNodeID: function(id) {
        if (id && id.charAt(0) === SEPARATOR && id.length > 1) {
          var index = id.indexOf(SEPARATOR, 1);
          return index > -1 ? id.substr(0, index) : id;
        }
        return null;
      },
      traverseEnterLeave: function(leaveID, enterID, cb, upArg, downArg) {
        var ancestorID = getFirstCommonAncestorID(leaveID, enterID);
        if (ancestorID !== leaveID) {
          traverseParentPath(leaveID, ancestorID, cb, upArg, false, true);
        }
        if (ancestorID !== enterID) {
          traverseParentPath(ancestorID, enterID, cb, downArg, true, false);
        }
      },
      traverseTwoPhase: function(targetID, cb, arg) {
        if (targetID) {
          traverseParentPath('', targetID, cb, arg, true, false);
          traverseParentPath(targetID, '', cb, arg, false, true);
        }
      },
      traverseAncestors: function(targetID, cb, arg) {
        traverseParentPath('', targetID, cb, arg, true, false);
      },
      _getFirstCommonAncestorID: getFirstCommonAncestorID,
      _getNextDescendantID: getNextDescendantID,
      isAncestorIDOf: isAncestorIDOf,
      SEPARATOR: SEPARATOR
    };
    module.exports = ReactInstanceHandles;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactRef", ["npm:react@0.13.1/lib/ReactOwner", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactOwner = require("npm:react@0.13.1/lib/ReactOwner");
    var ReactRef = {};
    function attachRef(ref, component, owner) {
      if (typeof ref === 'function') {
        ref(component.getPublicInstance());
      } else {
        ReactOwner.addComponentAsRefTo(component, ref, owner);
      }
    }
    function detachRef(ref, component, owner) {
      if (typeof ref === 'function') {
        ref(null);
      } else {
        ReactOwner.removeComponentAsRefFrom(component, ref, owner);
      }
    }
    ReactRef.attachRefs = function(instance, element) {
      var ref = element.ref;
      if (ref != null) {
        attachRef(ref, instance, element._owner);
      }
    };
    ReactRef.shouldUpdateRefs = function(prevElement, nextElement) {
      return (nextElement._owner !== prevElement._owner || nextElement.ref !== prevElement.ref);
    };
    ReactRef.detachRefs = function(instance, element) {
      var ref = element.ref;
      if (ref != null) {
        detachRef(ref, instance, element._owner);
      }
    };
    module.exports = ReactRef;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactElementValidator", ["npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/ReactFragment", "npm:react@0.13.1/lib/ReactPropTypeLocations", "npm:react@0.13.1/lib/ReactPropTypeLocationNames", "npm:react@0.13.1/lib/ReactCurrentOwner", "npm:react@0.13.1/lib/ReactNativeComponent", "npm:react@0.13.1/lib/getIteratorFn", "npm:react@0.13.1/lib/invariant", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
    var ReactFragment = require("npm:react@0.13.1/lib/ReactFragment");
    var ReactPropTypeLocations = require("npm:react@0.13.1/lib/ReactPropTypeLocations");
    var ReactPropTypeLocationNames = require("npm:react@0.13.1/lib/ReactPropTypeLocationNames");
    var ReactCurrentOwner = require("npm:react@0.13.1/lib/ReactCurrentOwner");
    var ReactNativeComponent = require("npm:react@0.13.1/lib/ReactNativeComponent");
    var getIteratorFn = require("npm:react@0.13.1/lib/getIteratorFn");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var warning = require("npm:react@0.13.1/lib/warning");
    function getDeclarationErrorAddendum() {
      if (ReactCurrentOwner.current) {
        var name = ReactCurrentOwner.current.getName();
        if (name) {
          return ' Check the render method of `' + name + '`.';
        }
      }
      return '';
    }
    var ownerHasKeyUseWarning = {};
    var loggedTypeFailures = {};
    var NUMERIC_PROPERTY_REGEX = /^\d+$/;
    function getName(instance) {
      var publicInstance = instance && instance.getPublicInstance();
      if (!publicInstance) {
        return undefined;
      }
      var constructor = publicInstance.constructor;
      if (!constructor) {
        return undefined;
      }
      return constructor.displayName || constructor.name || undefined;
    }
    function getCurrentOwnerDisplayName() {
      var current = ReactCurrentOwner.current;
      return (current && getName(current) || undefined);
    }
    function validateExplicitKey(element, parentType) {
      if (element._store.validated || element.key != null) {
        return ;
      }
      element._store.validated = true;
      warnAndMonitorForKeyUse('Each child in an array or iterator should have a unique "key" prop.', element, parentType);
    }
    function validatePropertyKey(name, element, parentType) {
      if (!NUMERIC_PROPERTY_REGEX.test(name)) {
        return ;
      }
      warnAndMonitorForKeyUse('Child objects should have non-numeric keys so ordering is preserved.', element, parentType);
    }
    function warnAndMonitorForKeyUse(message, element, parentType) {
      var ownerName = getCurrentOwnerDisplayName();
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
      var useName = ownerName || parentName;
      var memoizer = ownerHasKeyUseWarning[message] || ((ownerHasKeyUseWarning[message] = {}));
      if (memoizer.hasOwnProperty(useName)) {
        return ;
      }
      memoizer[useName] = true;
      var parentOrOwnerAddendum = ownerName ? (" Check the render method of " + ownerName + ".") : parentName ? (" Check the React.render call using <" + parentName + ">.") : '';
      var childOwnerAddendum = '';
      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
        var childOwnerName = getName(element._owner);
        childOwnerAddendum = (" It was passed a child from " + childOwnerName + ".");
      }
      ("production" !== process.env.NODE_ENV ? warning(false, message + '%s%s See http://fb.me/react-warning-keys for more information.', parentOrOwnerAddendum, childOwnerAddendum) : null);
    }
    function validateChildKeys(node, parentType) {
      if (Array.isArray(node)) {
        for (var i = 0; i < node.length; i++) {
          var child = node[i];
          if (ReactElement.isValidElement(child)) {
            validateExplicitKey(child, parentType);
          }
        }
      } else if (ReactElement.isValidElement(node)) {
        node._store.validated = true;
      } else if (node) {
        var iteratorFn = getIteratorFn(node);
        if (iteratorFn) {
          if (iteratorFn !== node.entries) {
            var iterator = iteratorFn.call(node);
            var step;
            while (!(step = iterator.next()).done) {
              if (ReactElement.isValidElement(step.value)) {
                validateExplicitKey(step.value, parentType);
              }
            }
          }
        } else if (typeof node === 'object') {
          var fragment = ReactFragment.extractIfFragment(node);
          for (var key in fragment) {
            if (fragment.hasOwnProperty(key)) {
              validatePropertyKey(key, fragment[key], parentType);
            }
          }
        }
      }
    }
    function checkPropTypes(componentName, propTypes, props, location) {
      for (var propName in propTypes) {
        if (propTypes.hasOwnProperty(propName)) {
          var error;
          try {
            ("production" !== process.env.NODE_ENV ? invariant(typeof propTypes[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(typeof propTypes[propName] === 'function'));
            error = propTypes[propName](props, propName, componentName, location);
          } catch (ex) {
            error = ex;
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = true;
            var addendum = getDeclarationErrorAddendum(this);
            ("production" !== process.env.NODE_ENV ? warning(false, 'Failed propType: %s%s', error.message, addendum) : null);
          }
        }
      }
    }
    var warnedPropsMutations = {};
    function warnForPropsMutation(propName, element) {
      var type = element.type;
      var elementName = typeof type === 'string' ? type : type.displayName;
      var ownerName = element._owner ? element._owner.getPublicInstance().constructor.displayName : null;
      var warningKey = propName + '|' + elementName + '|' + ownerName;
      if (warnedPropsMutations.hasOwnProperty(warningKey)) {
        return ;
      }
      warnedPropsMutations[warningKey] = true;
      var elementInfo = '';
      if (elementName) {
        elementInfo = ' <' + elementName + ' />';
      }
      var ownerInfo = '';
      if (ownerName) {
        ownerInfo = ' The element was created by ' + ownerName + '.';
      }
      ("production" !== process.env.NODE_ENV ? warning(false, 'Don\'t set .props.%s of the React component%s. ' + 'Instead, specify the correct value when ' + 'initially creating the element.%s', propName, elementInfo, ownerInfo) : null);
    }
    function is(a, b) {
      if (a !== a) {
        return b !== b;
      }
      if (a === 0 && b === 0) {
        return 1 / a === 1 / b;
      }
      return a === b;
    }
    function checkAndWarnForMutatedProps(element) {
      if (!element._store) {
        return ;
      }
      var originalProps = element._store.originalProps;
      var props = element.props;
      for (var propName in props) {
        if (props.hasOwnProperty(propName)) {
          if (!originalProps.hasOwnProperty(propName) || !is(originalProps[propName], props[propName])) {
            warnForPropsMutation(propName, element);
            originalProps[propName] = props[propName];
          }
        }
      }
    }
    function validatePropTypes(element) {
      if (element.type == null) {
        return ;
      }
      var componentClass = ReactNativeComponent.getComponentClassForElement(element);
      var name = componentClass.displayName || componentClass.name;
      if (componentClass.propTypes) {
        checkPropTypes(name, componentClass.propTypes, element.props, ReactPropTypeLocations.prop);
      }
      if (typeof componentClass.getDefaultProps === 'function') {
        ("production" !== process.env.NODE_ENV ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : null);
      }
    }
    var ReactElementValidator = {
      checkAndWarnForMutatedProps: checkAndWarnForMutatedProps,
      createElement: function(type, props, children) {
        ("production" !== process.env.NODE_ENV ? warning(type != null, 'React.createElement: type should not be null or undefined. It should ' + 'be a string (for DOM elements) or a ReactClass (for composite ' + 'components).') : null);
        var element = ReactElement.createElement.apply(this, arguments);
        if (element == null) {
          return element;
        }
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], type);
        }
        validatePropTypes(element);
        return element;
      },
      createFactory: function(type) {
        var validatedFactory = ReactElementValidator.createElement.bind(null, type);
        validatedFactory.type = type;
        if ("production" !== process.env.NODE_ENV) {
          try {
            Object.defineProperty(validatedFactory, 'type', {
              enumerable: false,
              get: function() {
                ("production" !== process.env.NODE_ENV ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : null);
                Object.defineProperty(this, 'type', {value: type});
                return type;
              }
            });
          } catch (x) {}
        }
        return validatedFactory;
      },
      cloneElement: function(element, props, children) {
        var newElement = ReactElement.cloneElement.apply(this, arguments);
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], newElement.type);
        }
        validatePropTypes(newElement);
        return newElement;
      }
    };
    module.exports = ReactElementValidator;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactClass", ["npm:react@0.13.1/lib/ReactComponent", "npm:react@0.13.1/lib/ReactCurrentOwner", "npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/ReactErrorUtils", "npm:react@0.13.1/lib/ReactInstanceMap", "npm:react@0.13.1/lib/ReactLifeCycle", "npm:react@0.13.1/lib/ReactPropTypeLocations", "npm:react@0.13.1/lib/ReactPropTypeLocationNames", "npm:react@0.13.1/lib/ReactUpdateQueue", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/invariant", "npm:react@0.13.1/lib/keyMirror", "npm:react@0.13.1/lib/keyOf", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactComponent = require("npm:react@0.13.1/lib/ReactComponent");
    var ReactCurrentOwner = require("npm:react@0.13.1/lib/ReactCurrentOwner");
    var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
    var ReactErrorUtils = require("npm:react@0.13.1/lib/ReactErrorUtils");
    var ReactInstanceMap = require("npm:react@0.13.1/lib/ReactInstanceMap");
    var ReactLifeCycle = require("npm:react@0.13.1/lib/ReactLifeCycle");
    var ReactPropTypeLocations = require("npm:react@0.13.1/lib/ReactPropTypeLocations");
    var ReactPropTypeLocationNames = require("npm:react@0.13.1/lib/ReactPropTypeLocationNames");
    var ReactUpdateQueue = require("npm:react@0.13.1/lib/ReactUpdateQueue");
    var assign = require("npm:react@0.13.1/lib/Object.assign");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var keyMirror = require("npm:react@0.13.1/lib/keyMirror");
    var keyOf = require("npm:react@0.13.1/lib/keyOf");
    var warning = require("npm:react@0.13.1/lib/warning");
    var MIXINS_KEY = keyOf({mixins: null});
    var SpecPolicy = keyMirror({
      DEFINE_ONCE: null,
      DEFINE_MANY: null,
      OVERRIDE_BASE: null,
      DEFINE_MANY_MERGED: null
    });
    var injectedMixins = [];
    var ReactClassInterface = {
      mixins: SpecPolicy.DEFINE_MANY,
      statics: SpecPolicy.DEFINE_MANY,
      propTypes: SpecPolicy.DEFINE_MANY,
      contextTypes: SpecPolicy.DEFINE_MANY,
      childContextTypes: SpecPolicy.DEFINE_MANY,
      getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,
      getInitialState: SpecPolicy.DEFINE_MANY_MERGED,
      getChildContext: SpecPolicy.DEFINE_MANY_MERGED,
      render: SpecPolicy.DEFINE_ONCE,
      componentWillMount: SpecPolicy.DEFINE_MANY,
      componentDidMount: SpecPolicy.DEFINE_MANY,
      componentWillReceiveProps: SpecPolicy.DEFINE_MANY,
      shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,
      componentWillUpdate: SpecPolicy.DEFINE_MANY,
      componentDidUpdate: SpecPolicy.DEFINE_MANY,
      componentWillUnmount: SpecPolicy.DEFINE_MANY,
      updateComponent: SpecPolicy.OVERRIDE_BASE
    };
    var RESERVED_SPEC_KEYS = {
      displayName: function(Constructor, displayName) {
        Constructor.displayName = displayName;
      },
      mixins: function(Constructor, mixins) {
        if (mixins) {
          for (var i = 0; i < mixins.length; i++) {
            mixSpecIntoComponent(Constructor, mixins[i]);
          }
        }
      },
      childContextTypes: function(Constructor, childContextTypes) {
        if ("production" !== process.env.NODE_ENV) {
          validateTypeDef(Constructor, childContextTypes, ReactPropTypeLocations.childContext);
        }
        Constructor.childContextTypes = assign({}, Constructor.childContextTypes, childContextTypes);
      },
      contextTypes: function(Constructor, contextTypes) {
        if ("production" !== process.env.NODE_ENV) {
          validateTypeDef(Constructor, contextTypes, ReactPropTypeLocations.context);
        }
        Constructor.contextTypes = assign({}, Constructor.contextTypes, contextTypes);
      },
      getDefaultProps: function(Constructor, getDefaultProps) {
        if (Constructor.getDefaultProps) {
          Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
        } else {
          Constructor.getDefaultProps = getDefaultProps;
        }
      },
      propTypes: function(Constructor, propTypes) {
        if ("production" !== process.env.NODE_ENV) {
          validateTypeDef(Constructor, propTypes, ReactPropTypeLocations.prop);
        }
        Constructor.propTypes = assign({}, Constructor.propTypes, propTypes);
      },
      statics: function(Constructor, statics) {
        mixStaticSpecIntoComponent(Constructor, statics);
      }
    };
    function validateTypeDef(Constructor, typeDef, location) {
      for (var propName in typeDef) {
        if (typeDef.hasOwnProperty(propName)) {
          ("production" !== process.env.NODE_ENV ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : null);
        }
      }
    }
    function validateMethodOverride(proto, name) {
      var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;
      if (ReactClassMixin.hasOwnProperty(name)) {
        ("production" !== process.env.NODE_ENV ? invariant(specPolicy === SpecPolicy.OVERRIDE_BASE, 'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.', name) : invariant(specPolicy === SpecPolicy.OVERRIDE_BASE));
      }
      if (proto.hasOwnProperty(name)) {
        ("production" !== process.env.NODE_ENV ? invariant(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED, 'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.', name) : invariant(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED));
      }
    }
    function mixSpecIntoComponent(Constructor, spec) {
      if (!spec) {
        return ;
      }
      ("production" !== process.env.NODE_ENV ? invariant(typeof spec !== 'function', 'ReactClass: You\'re attempting to ' + 'use a component class as a mixin. Instead, just use a regular object.') : invariant(typeof spec !== 'function'));
      ("production" !== process.env.NODE_ENV ? invariant(!ReactElement.isValidElement(spec), 'ReactClass: You\'re attempting to ' + 'use a component as a mixin. Instead, just use a regular object.') : invariant(!ReactElement.isValidElement(spec)));
      var proto = Constructor.prototype;
      if (spec.hasOwnProperty(MIXINS_KEY)) {
        RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
      }
      for (var name in spec) {
        if (!spec.hasOwnProperty(name)) {
          continue;
        }
        if (name === MIXINS_KEY) {
          continue;
        }
        var property = spec[name];
        validateMethodOverride(proto, name);
        if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
          RESERVED_SPEC_KEYS[name](Constructor, property);
        } else {
          var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
          var isAlreadyDefined = proto.hasOwnProperty(name);
          var markedDontBind = property && property.__reactDontBind;
          var isFunction = typeof property === 'function';
          var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && !markedDontBind;
          if (shouldAutoBind) {
            if (!proto.__reactAutoBindMap) {
              proto.__reactAutoBindMap = {};
            }
            proto.__reactAutoBindMap[name] = property;
            proto[name] = property;
          } else {
            if (isAlreadyDefined) {
              var specPolicy = ReactClassInterface[name];
              ("production" !== process.env.NODE_ENV ? invariant(isReactClassMethod && ((specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)), 'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.', specPolicy, name) : invariant(isReactClassMethod && ((specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY))));
              if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
                proto[name] = createMergedResultFunction(proto[name], property);
              } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
                proto[name] = createChainedFunction(proto[name], property);
              }
            } else {
              proto[name] = property;
              if ("production" !== process.env.NODE_ENV) {
                if (typeof property === 'function' && spec.displayName) {
                  proto[name].displayName = spec.displayName + '_' + name;
                }
              }
            }
          }
        }
      }
    }
    function mixStaticSpecIntoComponent(Constructor, statics) {
      if (!statics) {
        return ;
      }
      for (var name in statics) {
        var property = statics[name];
        if (!statics.hasOwnProperty(name)) {
          continue;
        }
        var isReserved = name in RESERVED_SPEC_KEYS;
        ("production" !== process.env.NODE_ENV ? invariant(!isReserved, 'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.', name) : invariant(!isReserved));
        var isInherited = name in Constructor;
        ("production" !== process.env.NODE_ENV ? invariant(!isInherited, 'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.', name) : invariant(!isInherited));
        Constructor[name] = property;
      }
    }
    function mergeIntoWithNoDuplicateKeys(one, two) {
      ("production" !== process.env.NODE_ENV ? invariant(one && two && typeof one === 'object' && typeof two === 'object', 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : invariant(one && two && typeof one === 'object' && typeof two === 'object'));
      for (var key in two) {
        if (two.hasOwnProperty(key)) {
          ("production" !== process.env.NODE_ENV ? invariant(one[key] === undefined, 'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.', key) : invariant(one[key] === undefined));
          one[key] = two[key];
        }
      }
      return one;
    }
    function createMergedResultFunction(one, two) {
      return function mergedResult() {
        var a = one.apply(this, arguments);
        var b = two.apply(this, arguments);
        if (a == null) {
          return b;
        } else if (b == null) {
          return a;
        }
        var c = {};
        mergeIntoWithNoDuplicateKeys(c, a);
        mergeIntoWithNoDuplicateKeys(c, b);
        return c;
      };
    }
    function createChainedFunction(one, two) {
      return function chainedFunction() {
        one.apply(this, arguments);
        two.apply(this, arguments);
      };
    }
    function bindAutoBindMethod(component, method) {
      var boundMethod = method.bind(component);
      if ("production" !== process.env.NODE_ENV) {
        boundMethod.__reactBoundContext = component;
        boundMethod.__reactBoundMethod = method;
        boundMethod.__reactBoundArguments = null;
        var componentName = component.constructor.displayName;
        var _bind = boundMethod.bind;
        boundMethod.bind = function(newThis) {
          for (var args = [],
              $__0 = 1,
              $__1 = arguments.length; $__0 < $__1; $__0++)
            args.push(arguments[$__0]);
          if (newThis !== component && newThis !== null) {
            ("production" !== process.env.NODE_ENV ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : null);
          } else if (!args.length) {
            ("production" !== process.env.NODE_ENV ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : null);
            return boundMethod;
          }
          var reboundMethod = _bind.apply(boundMethod, arguments);
          reboundMethod.__reactBoundContext = component;
          reboundMethod.__reactBoundMethod = method;
          reboundMethod.__reactBoundArguments = args;
          return reboundMethod;
        };
      }
      return boundMethod;
    }
    function bindAutoBindMethods(component) {
      for (var autoBindKey in component.__reactAutoBindMap) {
        if (component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
          var method = component.__reactAutoBindMap[autoBindKey];
          component[autoBindKey] = bindAutoBindMethod(component, ReactErrorUtils.guard(method, component.constructor.displayName + '.' + autoBindKey));
        }
      }
    }
    var typeDeprecationDescriptor = {
      enumerable: false,
      get: function() {
        var displayName = this.displayName || this.name || 'Component';
        ("production" !== process.env.NODE_ENV ? warning(false, '%s.type is deprecated. Use %s directly to access the class.', displayName, displayName) : null);
        Object.defineProperty(this, 'type', {value: this});
        return this;
      }
    };
    var ReactClassMixin = {
      replaceState: function(newState, callback) {
        ReactUpdateQueue.enqueueReplaceState(this, newState);
        if (callback) {
          ReactUpdateQueue.enqueueCallback(this, callback);
        }
      },
      isMounted: function() {
        if ("production" !== process.env.NODE_ENV) {
          var owner = ReactCurrentOwner.current;
          if (owner !== null) {
            ("production" !== process.env.NODE_ENV ? warning(owner._warnedAboutRefsInRender, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : null);
            owner._warnedAboutRefsInRender = true;
          }
        }
        var internalInstance = ReactInstanceMap.get(this);
        return (internalInstance && internalInstance !== ReactLifeCycle.currentlyMountingInstance);
      },
      setProps: function(partialProps, callback) {
        ReactUpdateQueue.enqueueSetProps(this, partialProps);
        if (callback) {
          ReactUpdateQueue.enqueueCallback(this, callback);
        }
      },
      replaceProps: function(newProps, callback) {
        ReactUpdateQueue.enqueueReplaceProps(this, newProps);
        if (callback) {
          ReactUpdateQueue.enqueueCallback(this, callback);
        }
      }
    };
    var ReactClassComponent = function() {};
    assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);
    var ReactClass = {
      createClass: function(spec) {
        var Constructor = function(props, context) {
          if ("production" !== process.env.NODE_ENV) {
            ("production" !== process.env.NODE_ENV ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: http://fb.me/react-legacyfactory') : null);
          }
          if (this.__reactAutoBindMap) {
            bindAutoBindMethods(this);
          }
          this.props = props;
          this.context = context;
          this.state = null;
          var initialState = this.getInitialState ? this.getInitialState() : null;
          if ("production" !== process.env.NODE_ENV) {
            if (typeof initialState === 'undefined' && this.getInitialState._isMockFunction) {
              initialState = null;
            }
          }
          ("production" !== process.env.NODE_ENV ? invariant(typeof initialState === 'object' && !Array.isArray(initialState), '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : invariant(typeof initialState === 'object' && !Array.isArray(initialState)));
          this.state = initialState;
        };
        Constructor.prototype = new ReactClassComponent();
        Constructor.prototype.constructor = Constructor;
        injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
        mixSpecIntoComponent(Constructor, spec);
        if (Constructor.getDefaultProps) {
          Constructor.defaultProps = Constructor.getDefaultProps();
        }
        if ("production" !== process.env.NODE_ENV) {
          if (Constructor.getDefaultProps) {
            Constructor.getDefaultProps.isReactClassApproved = {};
          }
          if (Constructor.prototype.getInitialState) {
            Constructor.prototype.getInitialState.isReactClassApproved = {};
          }
        }
        ("production" !== process.env.NODE_ENV ? invariant(Constructor.prototype.render, 'createClass(...): Class specification must implement a `render` method.') : invariant(Constructor.prototype.render));
        if ("production" !== process.env.NODE_ENV) {
          ("production" !== process.env.NODE_ENV ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : null);
        }
        for (var methodName in ReactClassInterface) {
          if (!Constructor.prototype[methodName]) {
            Constructor.prototype[methodName] = null;
          }
        }
        Constructor.type = Constructor;
        if ("production" !== process.env.NODE_ENV) {
          try {
            Object.defineProperty(Constructor, 'type', typeDeprecationDescriptor);
          } catch (x) {}
        }
        return Constructor;
      },
      injection: {injectMixin: function(mixin) {
          injectedMixins.push(mixin);
        }}
    };
    module.exports = ReactClass;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactDOM", ["npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/ReactElementValidator", "npm:react@0.13.1/lib/mapObject", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
    var ReactElementValidator = require("npm:react@0.13.1/lib/ReactElementValidator");
    var mapObject = require("npm:react@0.13.1/lib/mapObject");
    function createDOMFactory(tag) {
      if ("production" !== process.env.NODE_ENV) {
        return ReactElementValidator.createFactory(tag);
      }
      return ReactElement.createFactory(tag);
    }
    var ReactDOM = mapObject({
      a: 'a',
      abbr: 'abbr',
      address: 'address',
      area: 'area',
      article: 'article',
      aside: 'aside',
      audio: 'audio',
      b: 'b',
      base: 'base',
      bdi: 'bdi',
      bdo: 'bdo',
      big: 'big',
      blockquote: 'blockquote',
      body: 'body',
      br: 'br',
      button: 'button',
      canvas: 'canvas',
      caption: 'caption',
      cite: 'cite',
      code: 'code',
      col: 'col',
      colgroup: 'colgroup',
      data: 'data',
      datalist: 'datalist',
      dd: 'dd',
      del: 'del',
      details: 'details',
      dfn: 'dfn',
      dialog: 'dialog',
      div: 'div',
      dl: 'dl',
      dt: 'dt',
      em: 'em',
      embed: 'embed',
      fieldset: 'fieldset',
      figcaption: 'figcaption',
      figure: 'figure',
      footer: 'footer',
      form: 'form',
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      head: 'head',
      header: 'header',
      hr: 'hr',
      html: 'html',
      i: 'i',
      iframe: 'iframe',
      img: 'img',
      input: 'input',
      ins: 'ins',
      kbd: 'kbd',
      keygen: 'keygen',
      label: 'label',
      legend: 'legend',
      li: 'li',
      link: 'link',
      main: 'main',
      map: 'map',
      mark: 'mark',
      menu: 'menu',
      menuitem: 'menuitem',
      meta: 'meta',
      meter: 'meter',
      nav: 'nav',
      noscript: 'noscript',
      object: 'object',
      ol: 'ol',
      optgroup: 'optgroup',
      option: 'option',
      output: 'output',
      p: 'p',
      param: 'param',
      picture: 'picture',
      pre: 'pre',
      progress: 'progress',
      q: 'q',
      rp: 'rp',
      rt: 'rt',
      ruby: 'ruby',
      s: 's',
      samp: 'samp',
      script: 'script',
      section: 'section',
      select: 'select',
      small: 'small',
      source: 'source',
      span: 'span',
      strong: 'strong',
      style: 'style',
      sub: 'sub',
      summary: 'summary',
      sup: 'sup',
      table: 'table',
      tbody: 'tbody',
      td: 'td',
      textarea: 'textarea',
      tfoot: 'tfoot',
      th: 'th',
      thead: 'thead',
      time: 'time',
      title: 'title',
      tr: 'tr',
      track: 'track',
      u: 'u',
      ul: 'ul',
      'var': 'var',
      video: 'video',
      wbr: 'wbr',
      circle: 'circle',
      defs: 'defs',
      ellipse: 'ellipse',
      g: 'g',
      line: 'line',
      linearGradient: 'linearGradient',
      mask: 'mask',
      path: 'path',
      pattern: 'pattern',
      polygon: 'polygon',
      polyline: 'polyline',
      radialGradient: 'radialGradient',
      rect: 'rect',
      stop: 'stop',
      svg: 'svg',
      text: 'text',
      tspan: 'tspan'
    }, createDOMFactory);
    module.exports = ReactDOM;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/quoteAttributeValueForBrowser", ["npm:react@0.13.1/lib/escapeTextContentForBrowser"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var escapeTextContentForBrowser = require("npm:react@0.13.1/lib/escapeTextContentForBrowser");
  function quoteAttributeValueForBrowser(value) {
    return '"' + escapeTextContentForBrowser(value) + '"';
  }
  module.exports = quoteAttributeValueForBrowser;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/camelizeStyleName", ["npm:react@0.13.1/lib/camelize"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var camelize = require("npm:react@0.13.1/lib/camelize");
  var msPattern = /^-ms-/;
  function camelizeStyleName(string) {
    return camelize(string.replace(msPattern, 'ms-'));
  }
  module.exports = camelizeStyleName;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/hyphenateStyleName", ["npm:react@0.13.1/lib/hyphenate"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var hyphenate = require("npm:react@0.13.1/lib/hyphenate");
  var msPattern = /^ms-/;
  function hyphenateStyleName(string) {
    return hyphenate(string).replace(msPattern, '-ms-');
  }
  module.exports = hyphenateStyleName;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/createArrayFromMixed", ["npm:react@0.13.1/lib/toArray"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var toArray = require("npm:react@0.13.1/lib/toArray");
  function hasArrayNature(obj) {
    return (!!obj && (typeof obj == 'object' || typeof obj == 'function') && ('length' in obj) && !('setInterval' in obj) && (typeof obj.nodeType != 'number') && (((Array.isArray(obj) || ('callee' in obj) || 'item' in obj))));
  }
  function createArrayFromMixed(obj) {
    if (!hasArrayNature(obj)) {
      return [obj];
    } else if (Array.isArray(obj)) {
      return obj.slice();
    } else {
      return toArray(obj);
    }
  }
  module.exports = createArrayFromMixed;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/setTextContent", ["npm:react@0.13.1/lib/ExecutionEnvironment", "npm:react@0.13.1/lib/escapeTextContentForBrowser", "npm:react@0.13.1/lib/setInnerHTML"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ExecutionEnvironment = require("npm:react@0.13.1/lib/ExecutionEnvironment");
  var escapeTextContentForBrowser = require("npm:react@0.13.1/lib/escapeTextContentForBrowser");
  var setInnerHTML = require("npm:react@0.13.1/lib/setInnerHTML");
  var setTextContent = function(node, text) {
    node.textContent = text;
  };
  if (ExecutionEnvironment.canUseDOM) {
    if (!('textContent' in document.documentElement)) {
      setTextContent = function(node, text) {
        setInnerHTML(node, escapeTextContentForBrowser(text));
      };
    }
  }
  module.exports = setTextContent;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/EventPluginHub", ["npm:react@0.13.1/lib/EventPluginRegistry", "npm:react@0.13.1/lib/EventPluginUtils", "npm:react@0.13.1/lib/accumulateInto", "npm:react@0.13.1/lib/forEachAccumulated", "npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var EventPluginRegistry = require("npm:react@0.13.1/lib/EventPluginRegistry");
    var EventPluginUtils = require("npm:react@0.13.1/lib/EventPluginUtils");
    var accumulateInto = require("npm:react@0.13.1/lib/accumulateInto");
    var forEachAccumulated = require("npm:react@0.13.1/lib/forEachAccumulated");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var listenerBank = {};
    var eventQueue = null;
    var executeDispatchesAndRelease = function(event) {
      if (event) {
        var executeDispatch = EventPluginUtils.executeDispatch;
        var PluginModule = EventPluginRegistry.getPluginModuleForEvent(event);
        if (PluginModule && PluginModule.executeDispatch) {
          executeDispatch = PluginModule.executeDispatch;
        }
        EventPluginUtils.executeDispatchesInOrder(event, executeDispatch);
        if (!event.isPersistent()) {
          event.constructor.release(event);
        }
      }
    };
    var InstanceHandle = null;
    function validateInstanceHandle() {
      var valid = InstanceHandle && InstanceHandle.traverseTwoPhase && InstanceHandle.traverseEnterLeave;
      ("production" !== process.env.NODE_ENV ? invariant(valid, 'InstanceHandle not injected before use!') : invariant(valid));
    }
    var EventPluginHub = {
      injection: {
        injectMount: EventPluginUtils.injection.injectMount,
        injectInstanceHandle: function(InjectedInstanceHandle) {
          InstanceHandle = InjectedInstanceHandle;
          if ("production" !== process.env.NODE_ENV) {
            validateInstanceHandle();
          }
        },
        getInstanceHandle: function() {
          if ("production" !== process.env.NODE_ENV) {
            validateInstanceHandle();
          }
          return InstanceHandle;
        },
        injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,
        injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName
      },
      eventNameDispatchConfigs: EventPluginRegistry.eventNameDispatchConfigs,
      registrationNameModules: EventPluginRegistry.registrationNameModules,
      putListener: function(id, registrationName, listener) {
        ("production" !== process.env.NODE_ENV ? invariant(!listener || typeof listener === 'function', 'Expected %s listener to be a function, instead got type %s', registrationName, typeof listener) : invariant(!listener || typeof listener === 'function'));
        var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});
        bankForRegistrationName[id] = listener;
      },
      getListener: function(id, registrationName) {
        var bankForRegistrationName = listenerBank[registrationName];
        return bankForRegistrationName && bankForRegistrationName[id];
      },
      deleteListener: function(id, registrationName) {
        var bankForRegistrationName = listenerBank[registrationName];
        if (bankForRegistrationName) {
          delete bankForRegistrationName[id];
        }
      },
      deleteAllListeners: function(id) {
        for (var registrationName in listenerBank) {
          delete listenerBank[registrationName][id];
        }
      },
      extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
        var events;
        var plugins = EventPluginRegistry.plugins;
        for (var i = 0,
            l = plugins.length; i < l; i++) {
          var possiblePlugin = plugins[i];
          if (possiblePlugin) {
            var extractedEvents = possiblePlugin.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent);
            if (extractedEvents) {
              events = accumulateInto(events, extractedEvents);
            }
          }
        }
        return events;
      },
      enqueueEvents: function(events) {
        if (events) {
          eventQueue = accumulateInto(eventQueue, events);
        }
      },
      processEventQueue: function() {
        var processingEventQueue = eventQueue;
        eventQueue = null;
        forEachAccumulated(processingEventQueue, executeDispatchesAndRelease);
        ("production" !== process.env.NODE_ENV ? invariant(!eventQueue, 'processEventQueue(): Additional events were enqueued while processing ' + 'an event queue. Support for this has not yet been implemented.') : invariant(!eventQueue));
      },
      __purge: function() {
        listenerBank = {};
      },
      __getListenerBank: function() {
        return listenerBank;
      }
    };
    module.exports = EventPluginHub;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactMarkupChecksum", ["npm:react@0.13.1/lib/adler32"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var adler32 = require("npm:react@0.13.1/lib/adler32");
  var ReactMarkupChecksum = {
    CHECKSUM_ATTR_NAME: 'data-react-checksum',
    addChecksumToMarkup: function(markup) {
      var checksum = adler32(markup);
      return markup.replace('>', ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '">');
    },
    canReuseMarkup: function(markup, element) {
      var existingChecksum = element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
      existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
      var markupChecksum = adler32(markup);
      return markupChecksum === existingChecksum;
    }
  };
  module.exports = ReactMarkupChecksum;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/isTextNode", ["npm:react@0.13.1/lib/isNode"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var isNode = require("npm:react@0.13.1/lib/isNode");
  function isTextNode(object) {
    return isNode(object) && object.nodeType == 3;
  }
  module.exports = isTextNode;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactCompositeComponent", ["npm:react@0.13.1/lib/ReactComponentEnvironment", "npm:react@0.13.1/lib/ReactContext", "npm:react@0.13.1/lib/ReactCurrentOwner", "npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/ReactElementValidator", "npm:react@0.13.1/lib/ReactInstanceMap", "npm:react@0.13.1/lib/ReactLifeCycle", "npm:react@0.13.1/lib/ReactNativeComponent", "npm:react@0.13.1/lib/ReactPerf", "npm:react@0.13.1/lib/ReactPropTypeLocations", "npm:react@0.13.1/lib/ReactPropTypeLocationNames", "npm:react@0.13.1/lib/ReactReconciler", "npm:react@0.13.1/lib/ReactUpdates", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/emptyObject", "npm:react@0.13.1/lib/invariant", "npm:react@0.13.1/lib/shouldUpdateReactComponent", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactComponentEnvironment = require("npm:react@0.13.1/lib/ReactComponentEnvironment");
    var ReactContext = require("npm:react@0.13.1/lib/ReactContext");
    var ReactCurrentOwner = require("npm:react@0.13.1/lib/ReactCurrentOwner");
    var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
    var ReactElementValidator = require("npm:react@0.13.1/lib/ReactElementValidator");
    var ReactInstanceMap = require("npm:react@0.13.1/lib/ReactInstanceMap");
    var ReactLifeCycle = require("npm:react@0.13.1/lib/ReactLifeCycle");
    var ReactNativeComponent = require("npm:react@0.13.1/lib/ReactNativeComponent");
    var ReactPerf = require("npm:react@0.13.1/lib/ReactPerf");
    var ReactPropTypeLocations = require("npm:react@0.13.1/lib/ReactPropTypeLocations");
    var ReactPropTypeLocationNames = require("npm:react@0.13.1/lib/ReactPropTypeLocationNames");
    var ReactReconciler = require("npm:react@0.13.1/lib/ReactReconciler");
    var ReactUpdates = require("npm:react@0.13.1/lib/ReactUpdates");
    var assign = require("npm:react@0.13.1/lib/Object.assign");
    var emptyObject = require("npm:react@0.13.1/lib/emptyObject");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var shouldUpdateReactComponent = require("npm:react@0.13.1/lib/shouldUpdateReactComponent");
    var warning = require("npm:react@0.13.1/lib/warning");
    function getDeclarationErrorAddendum(component) {
      var owner = component._currentElement._owner || null;
      if (owner) {
        var name = owner.getName();
        if (name) {
          return ' Check the render method of `' + name + '`.';
        }
      }
      return '';
    }
    var nextMountID = 1;
    var ReactCompositeComponentMixin = {
      construct: function(element) {
        this._currentElement = element;
        this._rootNodeID = null;
        this._instance = null;
        this._pendingElement = null;
        this._pendingStateQueue = null;
        this._pendingReplaceState = false;
        this._pendingForceUpdate = false;
        this._renderedComponent = null;
        this._context = null;
        this._mountOrder = 0;
        this._isTopLevel = false;
        this._pendingCallbacks = null;
      },
      mountComponent: function(rootID, transaction, context) {
        this._context = context;
        this._mountOrder = nextMountID++;
        this._rootNodeID = rootID;
        var publicProps = this._processProps(this._currentElement.props);
        var publicContext = this._processContext(this._currentElement._context);
        var Component = ReactNativeComponent.getComponentClassForElement(this._currentElement);
        var inst = new Component(publicProps, publicContext);
        if ("production" !== process.env.NODE_ENV) {
          ("production" !== process.env.NODE_ENV ? warning(inst.render != null, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render` in your ' + 'component or you may have accidentally tried to render an element ' + 'whose type is a function that isn\'t a React component.', Component.displayName || Component.name || 'Component') : null);
        }
        inst.props = publicProps;
        inst.context = publicContext;
        inst.refs = emptyObject;
        this._instance = inst;
        ReactInstanceMap.set(inst, this);
        if ("production" !== process.env.NODE_ENV) {
          this._warnIfContextsDiffer(this._currentElement._context, context);
        }
        if ("production" !== process.env.NODE_ENV) {
          ("production" !== process.env.NODE_ENV ? warning(!inst.getInitialState || inst.getInitialState.isReactClassApproved, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', this.getName() || 'a component') : null);
          ("production" !== process.env.NODE_ENV ? warning(!inst.propTypes, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', this.getName() || 'a component') : null);
          ("production" !== process.env.NODE_ENV ? warning(!inst.contextTypes, 'contextTypes was defined as an instance property on %s. Use a ' + 'static property to define contextTypes instead.', this.getName() || 'a component') : null);
          ("production" !== process.env.NODE_ENV ? warning(typeof inst.componentShouldUpdate !== 'function', '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', (this.getName() || 'A component')) : null);
        }
        var initialState = inst.state;
        if (initialState === undefined) {
          inst.state = initialState = null;
        }
        ("production" !== process.env.NODE_ENV ? invariant(typeof initialState === 'object' && !Array.isArray(initialState), '%s.state: must be set to an object or null', this.getName() || 'ReactCompositeComponent') : invariant(typeof initialState === 'object' && !Array.isArray(initialState)));
        this._pendingStateQueue = null;
        this._pendingReplaceState = false;
        this._pendingForceUpdate = false;
        var renderedElement;
        var previouslyMounting = ReactLifeCycle.currentlyMountingInstance;
        ReactLifeCycle.currentlyMountingInstance = this;
        try {
          if (inst.componentWillMount) {
            inst.componentWillMount();
            if (this._pendingStateQueue) {
              inst.state = this._processPendingState(inst.props, inst.context);
            }
          }
          renderedElement = this._renderValidatedComponent();
        } finally {
          ReactLifeCycle.currentlyMountingInstance = previouslyMounting;
        }
        this._renderedComponent = this._instantiateReactComponent(renderedElement, this._currentElement.type);
        var markup = ReactReconciler.mountComponent(this._renderedComponent, rootID, transaction, this._processChildContext(context));
        if (inst.componentDidMount) {
          transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
        }
        return markup;
      },
      unmountComponent: function() {
        var inst = this._instance;
        if (inst.componentWillUnmount) {
          var previouslyUnmounting = ReactLifeCycle.currentlyUnmountingInstance;
          ReactLifeCycle.currentlyUnmountingInstance = this;
          try {
            inst.componentWillUnmount();
          } finally {
            ReactLifeCycle.currentlyUnmountingInstance = previouslyUnmounting;
          }
        }
        ReactReconciler.unmountComponent(this._renderedComponent);
        this._renderedComponent = null;
        this._pendingStateQueue = null;
        this._pendingReplaceState = false;
        this._pendingForceUpdate = false;
        this._pendingCallbacks = null;
        this._pendingElement = null;
        this._context = null;
        this._rootNodeID = null;
        ReactInstanceMap.remove(inst);
      },
      _setPropsInternal: function(partialProps, callback) {
        var element = this._pendingElement || this._currentElement;
        this._pendingElement = ReactElement.cloneAndReplaceProps(element, assign({}, element.props, partialProps));
        ReactUpdates.enqueueUpdate(this, callback);
      },
      _maskContext: function(context) {
        var maskedContext = null;
        if (typeof this._currentElement.type === 'string') {
          return emptyObject;
        }
        var contextTypes = this._currentElement.type.contextTypes;
        if (!contextTypes) {
          return emptyObject;
        }
        maskedContext = {};
        for (var contextName in contextTypes) {
          maskedContext[contextName] = context[contextName];
        }
        return maskedContext;
      },
      _processContext: function(context) {
        var maskedContext = this._maskContext(context);
        if ("production" !== process.env.NODE_ENV) {
          var Component = ReactNativeComponent.getComponentClassForElement(this._currentElement);
          if (Component.contextTypes) {
            this._checkPropTypes(Component.contextTypes, maskedContext, ReactPropTypeLocations.context);
          }
        }
        return maskedContext;
      },
      _processChildContext: function(currentContext) {
        var inst = this._instance;
        var childContext = inst.getChildContext && inst.getChildContext();
        if (childContext) {
          ("production" !== process.env.NODE_ENV ? invariant(typeof inst.constructor.childContextTypes === 'object', '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', this.getName() || 'ReactCompositeComponent') : invariant(typeof inst.constructor.childContextTypes === 'object'));
          if ("production" !== process.env.NODE_ENV) {
            this._checkPropTypes(inst.constructor.childContextTypes, childContext, ReactPropTypeLocations.childContext);
          }
          for (var name in childContext) {
            ("production" !== process.env.NODE_ENV ? invariant(name in inst.constructor.childContextTypes, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', this.getName() || 'ReactCompositeComponent', name) : invariant(name in inst.constructor.childContextTypes));
          }
          return assign({}, currentContext, childContext);
        }
        return currentContext;
      },
      _processProps: function(newProps) {
        if ("production" !== process.env.NODE_ENV) {
          var Component = ReactNativeComponent.getComponentClassForElement(this._currentElement);
          if (Component.propTypes) {
            this._checkPropTypes(Component.propTypes, newProps, ReactPropTypeLocations.prop);
          }
        }
        return newProps;
      },
      _checkPropTypes: function(propTypes, props, location) {
        var componentName = this.getName();
        for (var propName in propTypes) {
          if (propTypes.hasOwnProperty(propName)) {
            var error;
            try {
              ("production" !== process.env.NODE_ENV ? invariant(typeof propTypes[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually ' + 'from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(typeof propTypes[propName] === 'function'));
              error = propTypes[propName](props, propName, componentName, location);
            } catch (ex) {
              error = ex;
            }
            if (error instanceof Error) {
              var addendum = getDeclarationErrorAddendum(this);
              if (location === ReactPropTypeLocations.prop) {
                ("production" !== process.env.NODE_ENV ? warning(false, 'Failed Composite propType: %s%s', error.message, addendum) : null);
              } else {
                ("production" !== process.env.NODE_ENV ? warning(false, 'Failed Context Types: %s%s', error.message, addendum) : null);
              }
            }
          }
        }
      },
      receiveComponent: function(nextElement, transaction, nextContext) {
        var prevElement = this._currentElement;
        var prevContext = this._context;
        this._pendingElement = null;
        this.updateComponent(transaction, prevElement, nextElement, prevContext, nextContext);
      },
      performUpdateIfNecessary: function(transaction) {
        if (this._pendingElement != null) {
          ReactReconciler.receiveComponent(this, this._pendingElement || this._currentElement, transaction, this._context);
        }
        if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
          if ("production" !== process.env.NODE_ENV) {
            ReactElementValidator.checkAndWarnForMutatedProps(this._currentElement);
          }
          this.updateComponent(transaction, this._currentElement, this._currentElement, this._context, this._context);
        }
      },
      _warnIfContextsDiffer: function(ownerBasedContext, parentBasedContext) {
        ownerBasedContext = this._maskContext(ownerBasedContext);
        parentBasedContext = this._maskContext(parentBasedContext);
        var parentKeys = Object.keys(parentBasedContext).sort();
        var displayName = this.getName() || 'ReactCompositeComponent';
        for (var i = 0; i < parentKeys.length; i++) {
          var key = parentKeys[i];
          ("production" !== process.env.NODE_ENV ? warning(ownerBasedContext[key] === parentBasedContext[key], 'owner-based and parent-based contexts differ ' + '(values: `%s` vs `%s`) for key (%s) while mounting %s ' + '(see: http://fb.me/react-context-by-parent)', ownerBasedContext[key], parentBasedContext[key], key, displayName) : null);
        }
      },
      updateComponent: function(transaction, prevParentElement, nextParentElement, prevUnmaskedContext, nextUnmaskedContext) {
        var inst = this._instance;
        var nextContext = inst.context;
        var nextProps = inst.props;
        if (prevParentElement !== nextParentElement) {
          nextContext = this._processContext(nextParentElement._context);
          nextProps = this._processProps(nextParentElement.props);
          if ("production" !== process.env.NODE_ENV) {
            if (nextUnmaskedContext != null) {
              this._warnIfContextsDiffer(nextParentElement._context, nextUnmaskedContext);
            }
          }
          if (inst.componentWillReceiveProps) {
            inst.componentWillReceiveProps(nextProps, nextContext);
          }
        }
        var nextState = this._processPendingState(nextProps, nextContext);
        var shouldUpdate = this._pendingForceUpdate || !inst.shouldComponentUpdate || inst.shouldComponentUpdate(nextProps, nextState, nextContext);
        if ("production" !== process.env.NODE_ENV) {
          ("production" !== process.env.NODE_ENV ? warning(typeof shouldUpdate !== 'undefined', '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', this.getName() || 'ReactCompositeComponent') : null);
        }
        if (shouldUpdate) {
          this._pendingForceUpdate = false;
          this._performComponentUpdate(nextParentElement, nextProps, nextState, nextContext, transaction, nextUnmaskedContext);
        } else {
          this._currentElement = nextParentElement;
          this._context = nextUnmaskedContext;
          inst.props = nextProps;
          inst.state = nextState;
          inst.context = nextContext;
        }
      },
      _processPendingState: function(props, context) {
        var inst = this._instance;
        var queue = this._pendingStateQueue;
        var replace = this._pendingReplaceState;
        this._pendingReplaceState = false;
        this._pendingStateQueue = null;
        if (!queue) {
          return inst.state;
        }
        var nextState = assign({}, replace ? queue[0] : inst.state);
        for (var i = replace ? 1 : 0; i < queue.length; i++) {
          var partial = queue[i];
          assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
        }
        return nextState;
      },
      _performComponentUpdate: function(nextElement, nextProps, nextState, nextContext, transaction, unmaskedContext) {
        var inst = this._instance;
        var prevProps = inst.props;
        var prevState = inst.state;
        var prevContext = inst.context;
        if (inst.componentWillUpdate) {
          inst.componentWillUpdate(nextProps, nextState, nextContext);
        }
        this._currentElement = nextElement;
        this._context = unmaskedContext;
        inst.props = nextProps;
        inst.state = nextState;
        inst.context = nextContext;
        this._updateRenderedComponent(transaction, unmaskedContext);
        if (inst.componentDidUpdate) {
          transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), inst);
        }
      },
      _updateRenderedComponent: function(transaction, context) {
        var prevComponentInstance = this._renderedComponent;
        var prevRenderedElement = prevComponentInstance._currentElement;
        var nextRenderedElement = this._renderValidatedComponent();
        if (shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {
          ReactReconciler.receiveComponent(prevComponentInstance, nextRenderedElement, transaction, this._processChildContext(context));
        } else {
          var thisID = this._rootNodeID;
          var prevComponentID = prevComponentInstance._rootNodeID;
          ReactReconciler.unmountComponent(prevComponentInstance);
          this._renderedComponent = this._instantiateReactComponent(nextRenderedElement, this._currentElement.type);
          var nextMarkup = ReactReconciler.mountComponent(this._renderedComponent, thisID, transaction, context);
          this._replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
        }
      },
      _replaceNodeWithMarkupByID: function(prevComponentID, nextMarkup) {
        ReactComponentEnvironment.replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
      },
      _renderValidatedComponentWithoutOwnerOrContext: function() {
        var inst = this._instance;
        var renderedComponent = inst.render();
        if ("production" !== process.env.NODE_ENV) {
          if (typeof renderedComponent === 'undefined' && inst.render._isMockFunction) {
            renderedComponent = null;
          }
        }
        return renderedComponent;
      },
      _renderValidatedComponent: function() {
        var renderedComponent;
        var previousContext = ReactContext.current;
        ReactContext.current = this._processChildContext(this._currentElement._context);
        ReactCurrentOwner.current = this;
        try {
          renderedComponent = this._renderValidatedComponentWithoutOwnerOrContext();
        } finally {
          ReactContext.current = previousContext;
          ReactCurrentOwner.current = null;
        }
        ("production" !== process.env.NODE_ENV ? invariant(renderedComponent === null || renderedComponent === false || ReactElement.isValidElement(renderedComponent), '%s.render(): A valid ReactComponent must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', this.getName() || 'ReactCompositeComponent') : invariant(renderedComponent === null || renderedComponent === false || ReactElement.isValidElement(renderedComponent)));
        return renderedComponent;
      },
      attachRef: function(ref, component) {
        var inst = this.getPublicInstance();
        var refs = inst.refs === emptyObject ? (inst.refs = {}) : inst.refs;
        refs[ref] = component.getPublicInstance();
      },
      detachRef: function(ref) {
        var refs = this.getPublicInstance().refs;
        delete refs[ref];
      },
      getName: function() {
        var type = this._currentElement.type;
        var constructor = this._instance && this._instance.constructor;
        return (type.displayName || (constructor && constructor.displayName) || type.name || (constructor && constructor.name) || null);
      },
      getPublicInstance: function() {
        return this._instance;
      },
      _instantiateReactComponent: null
    };
    ReactPerf.measureMethods(ReactCompositeComponentMixin, 'ReactCompositeComponent', {
      mountComponent: 'mountComponent',
      updateComponent: 'updateComponent',
      _renderValidatedComponent: '_renderValidatedComponent'
    });
    var ReactCompositeComponent = {Mixin: ReactCompositeComponentMixin};
    module.exports = ReactCompositeComponent;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactChildReconciler", ["npm:react@0.13.1/lib/ReactReconciler", "npm:react@0.13.1/lib/flattenChildren", "npm:react@0.13.1/lib/instantiateReactComponent", "npm:react@0.13.1/lib/shouldUpdateReactComponent"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ReactReconciler = require("npm:react@0.13.1/lib/ReactReconciler");
  var flattenChildren = require("npm:react@0.13.1/lib/flattenChildren");
  var instantiateReactComponent = require("npm:react@0.13.1/lib/instantiateReactComponent");
  var shouldUpdateReactComponent = require("npm:react@0.13.1/lib/shouldUpdateReactComponent");
  var ReactChildReconciler = {
    instantiateChildren: function(nestedChildNodes, transaction, context) {
      var children = flattenChildren(nestedChildNodes);
      for (var name in children) {
        if (children.hasOwnProperty(name)) {
          var child = children[name];
          var childInstance = instantiateReactComponent(child, null);
          children[name] = childInstance;
        }
      }
      return children;
    },
    updateChildren: function(prevChildren, nextNestedChildNodes, transaction, context) {
      var nextChildren = flattenChildren(nextNestedChildNodes);
      if (!nextChildren && !prevChildren) {
        return null;
      }
      var name;
      for (name in nextChildren) {
        if (!nextChildren.hasOwnProperty(name)) {
          continue;
        }
        var prevChild = prevChildren && prevChildren[name];
        var prevElement = prevChild && prevChild._currentElement;
        var nextElement = nextChildren[name];
        if (shouldUpdateReactComponent(prevElement, nextElement)) {
          ReactReconciler.receiveComponent(prevChild, nextElement, transaction, context);
          nextChildren[name] = prevChild;
        } else {
          if (prevChild) {
            ReactReconciler.unmountComponent(prevChild, name);
          }
          var nextChildInstance = instantiateReactComponent(nextElement, null);
          nextChildren[name] = nextChildInstance;
        }
      }
      for (name in prevChildren) {
        if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
          ReactReconciler.unmountComponent(prevChildren[name]);
        }
      }
      return nextChildren;
    },
    unmountChildren: function(renderedChildren) {
      for (var name in renderedChildren) {
        var renderedChild = renderedChildren[name];
        ReactReconciler.unmountComponent(renderedChild);
      }
    }
  };
  module.exports = ReactChildReconciler;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/FallbackCompositionState", ["npm:react@0.13.1/lib/PooledClass", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/getTextContentAccessor"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var PooledClass = require("npm:react@0.13.1/lib/PooledClass");
  var assign = require("npm:react@0.13.1/lib/Object.assign");
  var getTextContentAccessor = require("npm:react@0.13.1/lib/getTextContentAccessor");
  function FallbackCompositionState(root) {
    this._root = root;
    this._startText = this.getText();
    this._fallbackText = null;
  }
  assign(FallbackCompositionState.prototype, {
    getText: function() {
      if ('value' in this._root) {
        return this._root.value;
      }
      return this._root[getTextContentAccessor()];
    },
    getData: function() {
      if (this._fallbackText) {
        return this._fallbackText;
      }
      var start;
      var startValue = this._startText;
      var startLength = startValue.length;
      var end;
      var endValue = this.getText();
      var endLength = endValue.length;
      for (start = 0; start < startLength; start++) {
        if (startValue[start] !== endValue[start]) {
          break;
        }
      }
      var minEnd = startLength - start;
      for (end = 1; end <= minEnd; end++) {
        if (startValue[startLength - end] !== endValue[endLength - end]) {
          break;
        }
      }
      var sliceTail = end > 1 ? 1 - end : undefined;
      this._fallbackText = endValue.slice(start, sliceTail);
      return this._fallbackText;
    }
  });
  PooledClass.addPoolingTo(FallbackCompositionState);
  module.exports = FallbackCompositionState;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/SyntheticEvent", ["npm:react@0.13.1/lib/PooledClass", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/emptyFunction", "npm:react@0.13.1/lib/getEventTarget"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var PooledClass = require("npm:react@0.13.1/lib/PooledClass");
  var assign = require("npm:react@0.13.1/lib/Object.assign");
  var emptyFunction = require("npm:react@0.13.1/lib/emptyFunction");
  var getEventTarget = require("npm:react@0.13.1/lib/getEventTarget");
  var EventInterface = {
    type: null,
    target: getEventTarget,
    currentTarget: emptyFunction.thatReturnsNull,
    eventPhase: null,
    bubbles: null,
    cancelable: null,
    timeStamp: function(event) {
      return event.timeStamp || Date.now();
    },
    defaultPrevented: null,
    isTrusted: null
  };
  function SyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    this.dispatchConfig = dispatchConfig;
    this.dispatchMarker = dispatchMarker;
    this.nativeEvent = nativeEvent;
    var Interface = this.constructor.Interface;
    for (var propName in Interface) {
      if (!Interface.hasOwnProperty(propName)) {
        continue;
      }
      var normalize = Interface[propName];
      if (normalize) {
        this[propName] = normalize(nativeEvent);
      } else {
        this[propName] = nativeEvent[propName];
      }
    }
    var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
    if (defaultPrevented) {
      this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
    } else {
      this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
    }
    this.isPropagationStopped = emptyFunction.thatReturnsFalse;
  }
  assign(SyntheticEvent.prototype, {
    preventDefault: function() {
      this.defaultPrevented = true;
      var event = this.nativeEvent;
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
      this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
    },
    stopPropagation: function() {
      var event = this.nativeEvent;
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
      this.isPropagationStopped = emptyFunction.thatReturnsTrue;
    },
    persist: function() {
      this.isPersistent = emptyFunction.thatReturnsTrue;
    },
    isPersistent: emptyFunction.thatReturnsFalse,
    destructor: function() {
      var Interface = this.constructor.Interface;
      for (var propName in Interface) {
        this[propName] = null;
      }
      this.dispatchConfig = null;
      this.dispatchMarker = null;
      this.nativeEvent = null;
    }
  });
  SyntheticEvent.Interface = EventInterface;
  SyntheticEvent.augmentClass = function(Class, Interface) {
    var Super = this;
    var prototype = Object.create(Super.prototype);
    assign(prototype, Class.prototype);
    Class.prototype = prototype;
    Class.prototype.constructor = Class;
    Class.Interface = assign({}, Super.Interface, Interface);
    Class.augmentClass = Super.augmentClass;
    PooledClass.addPoolingTo(Class, PooledClass.threeArgumentPooler);
  };
  PooledClass.addPoolingTo(SyntheticEvent, PooledClass.threeArgumentPooler);
  module.exports = SyntheticEvent;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ChangeEventPlugin", ["npm:react@0.13.1/lib/EventConstants", "npm:react@0.13.1/lib/EventPluginHub", "npm:react@0.13.1/lib/EventPropagators", "npm:react@0.13.1/lib/ExecutionEnvironment", "npm:react@0.13.1/lib/ReactUpdates", "npm:react@0.13.1/lib/SyntheticEvent", "npm:react@0.13.1/lib/isEventSupported", "npm:react@0.13.1/lib/isTextInputElement", "npm:react@0.13.1/lib/keyOf", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var EventConstants = require("npm:react@0.13.1/lib/EventConstants");
    var EventPluginHub = require("npm:react@0.13.1/lib/EventPluginHub");
    var EventPropagators = require("npm:react@0.13.1/lib/EventPropagators");
    var ExecutionEnvironment = require("npm:react@0.13.1/lib/ExecutionEnvironment");
    var ReactUpdates = require("npm:react@0.13.1/lib/ReactUpdates");
    var SyntheticEvent = require("npm:react@0.13.1/lib/SyntheticEvent");
    var isEventSupported = require("npm:react@0.13.1/lib/isEventSupported");
    var isTextInputElement = require("npm:react@0.13.1/lib/isTextInputElement");
    var keyOf = require("npm:react@0.13.1/lib/keyOf");
    var topLevelTypes = EventConstants.topLevelTypes;
    var eventTypes = {change: {
        phasedRegistrationNames: {
          bubbled: keyOf({onChange: null}),
          captured: keyOf({onChangeCapture: null})
        },
        dependencies: [topLevelTypes.topBlur, topLevelTypes.topChange, topLevelTypes.topClick, topLevelTypes.topFocus, topLevelTypes.topInput, topLevelTypes.topKeyDown, topLevelTypes.topKeyUp, topLevelTypes.topSelectionChange]
      }};
    var activeElement = null;
    var activeElementID = null;
    var activeElementValue = null;
    var activeElementValueProp = null;
    function shouldUseChangeEvent(elem) {
      return (elem.nodeName === 'SELECT' || (elem.nodeName === 'INPUT' && elem.type === 'file'));
    }
    var doesChangeEventBubble = false;
    if (ExecutionEnvironment.canUseDOM) {
      doesChangeEventBubble = isEventSupported('change') && ((!('documentMode' in document) || document.documentMode > 8));
    }
    function manualDispatchChangeEvent(nativeEvent) {
      var event = SyntheticEvent.getPooled(eventTypes.change, activeElementID, nativeEvent);
      EventPropagators.accumulateTwoPhaseDispatches(event);
      ReactUpdates.batchedUpdates(runEventInBatch, event);
    }
    function runEventInBatch(event) {
      EventPluginHub.enqueueEvents(event);
      EventPluginHub.processEventQueue();
    }
    function startWatchingForChangeEventIE8(target, targetID) {
      activeElement = target;
      activeElementID = targetID;
      activeElement.attachEvent('onchange', manualDispatchChangeEvent);
    }
    function stopWatchingForChangeEventIE8() {
      if (!activeElement) {
        return ;
      }
      activeElement.detachEvent('onchange', manualDispatchChangeEvent);
      activeElement = null;
      activeElementID = null;
    }
    function getTargetIDForChangeEvent(topLevelType, topLevelTarget, topLevelTargetID) {
      if (topLevelType === topLevelTypes.topChange) {
        return topLevelTargetID;
      }
    }
    function handleEventsForChangeEventIE8(topLevelType, topLevelTarget, topLevelTargetID) {
      if (topLevelType === topLevelTypes.topFocus) {
        stopWatchingForChangeEventIE8();
        startWatchingForChangeEventIE8(topLevelTarget, topLevelTargetID);
      } else if (topLevelType === topLevelTypes.topBlur) {
        stopWatchingForChangeEventIE8();
      }
    }
    var isInputEventSupported = false;
    if (ExecutionEnvironment.canUseDOM) {
      isInputEventSupported = isEventSupported('input') && ((!('documentMode' in document) || document.documentMode > 9));
    }
    var newValueProp = {
      get: function() {
        return activeElementValueProp.get.call(this);
      },
      set: function(val) {
        activeElementValue = '' + val;
        activeElementValueProp.set.call(this, val);
      }
    };
    function startWatchingForValueChange(target, targetID) {
      activeElement = target;
      activeElementID = targetID;
      activeElementValue = target.value;
      activeElementValueProp = Object.getOwnPropertyDescriptor(target.constructor.prototype, 'value');
      Object.defineProperty(activeElement, 'value', newValueProp);
      activeElement.attachEvent('onpropertychange', handlePropertyChange);
    }
    function stopWatchingForValueChange() {
      if (!activeElement) {
        return ;
      }
      delete activeElement.value;
      activeElement.detachEvent('onpropertychange', handlePropertyChange);
      activeElement = null;
      activeElementID = null;
      activeElementValue = null;
      activeElementValueProp = null;
    }
    function handlePropertyChange(nativeEvent) {
      if (nativeEvent.propertyName !== 'value') {
        return ;
      }
      var value = nativeEvent.srcElement.value;
      if (value === activeElementValue) {
        return ;
      }
      activeElementValue = value;
      manualDispatchChangeEvent(nativeEvent);
    }
    function getTargetIDForInputEvent(topLevelType, topLevelTarget, topLevelTargetID) {
      if (topLevelType === topLevelTypes.topInput) {
        return topLevelTargetID;
      }
    }
    function handleEventsForInputEventIE(topLevelType, topLevelTarget, topLevelTargetID) {
      if (topLevelType === topLevelTypes.topFocus) {
        stopWatchingForValueChange();
        startWatchingForValueChange(topLevelTarget, topLevelTargetID);
      } else if (topLevelType === topLevelTypes.topBlur) {
        stopWatchingForValueChange();
      }
    }
    function getTargetIDForInputEventIE(topLevelType, topLevelTarget, topLevelTargetID) {
      if (topLevelType === topLevelTypes.topSelectionChange || topLevelType === topLevelTypes.topKeyUp || topLevelType === topLevelTypes.topKeyDown) {
        if (activeElement && activeElement.value !== activeElementValue) {
          activeElementValue = activeElement.value;
          return activeElementID;
        }
      }
    }
    function shouldUseClickEvent(elem) {
      return (elem.nodeName === 'INPUT' && (elem.type === 'checkbox' || elem.type === 'radio'));
    }
    function getTargetIDForClickEvent(topLevelType, topLevelTarget, topLevelTargetID) {
      if (topLevelType === topLevelTypes.topClick) {
        return topLevelTargetID;
      }
    }
    var ChangeEventPlugin = {
      eventTypes: eventTypes,
      extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
        var getTargetIDFunc,
            handleEventFunc;
        if (shouldUseChangeEvent(topLevelTarget)) {
          if (doesChangeEventBubble) {
            getTargetIDFunc = getTargetIDForChangeEvent;
          } else {
            handleEventFunc = handleEventsForChangeEventIE8;
          }
        } else if (isTextInputElement(topLevelTarget)) {
          if (isInputEventSupported) {
            getTargetIDFunc = getTargetIDForInputEvent;
          } else {
            getTargetIDFunc = getTargetIDForInputEventIE;
            handleEventFunc = handleEventsForInputEventIE;
          }
        } else if (shouldUseClickEvent(topLevelTarget)) {
          getTargetIDFunc = getTargetIDForClickEvent;
        }
        if (getTargetIDFunc) {
          var targetID = getTargetIDFunc(topLevelType, topLevelTarget, topLevelTargetID);
          if (targetID) {
            var event = SyntheticEvent.getPooled(eventTypes.change, targetID, nativeEvent);
            EventPropagators.accumulateTwoPhaseDispatches(event);
            return event;
          }
        }
        if (handleEventFunc) {
          handleEventFunc(topLevelType, topLevelTarget, topLevelTargetID);
        }
      }
    };
    module.exports = ChangeEventPlugin;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/SyntheticMouseEvent", ["npm:react@0.13.1/lib/SyntheticUIEvent", "npm:react@0.13.1/lib/ViewportMetrics", "npm:react@0.13.1/lib/getEventModifierState"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var SyntheticUIEvent = require("npm:react@0.13.1/lib/SyntheticUIEvent");
  var ViewportMetrics = require("npm:react@0.13.1/lib/ViewportMetrics");
  var getEventModifierState = require("npm:react@0.13.1/lib/getEventModifierState");
  var MouseEventInterface = {
    screenX: null,
    screenY: null,
    clientX: null,
    clientY: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    getModifierState: getEventModifierState,
    button: function(event) {
      var button = event.button;
      if ('which' in event) {
        return button;
      }
      return button === 2 ? 2 : button === 4 ? 1 : 0;
    },
    buttons: null,
    relatedTarget: function(event) {
      return event.relatedTarget || (((event.fromElement === event.srcElement ? event.toElement : event.fromElement)));
    },
    pageX: function(event) {
      return 'pageX' in event ? event.pageX : event.clientX + ViewportMetrics.currentScrollLeft;
    },
    pageY: function(event) {
      return 'pageY' in event ? event.pageY : event.clientY + ViewportMetrics.currentScrollTop;
    }
  };
  function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
  }
  SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);
  module.exports = SyntheticMouseEvent;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactBrowserComponentMixin", ["npm:react@0.13.1/lib/findDOMNode"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var findDOMNode = require("npm:react@0.13.1/lib/findDOMNode");
  var ReactBrowserComponentMixin = {getDOMNode: function() {
      return findDOMNode(this);
    }};
  module.exports = ReactBrowserComponentMixin;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/AutoFocusMixin", ["npm:react@0.13.1/lib/focusNode"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var focusNode = require("npm:react@0.13.1/lib/focusNode");
  var AutoFocusMixin = {componentDidMount: function() {
      if (this.props.autoFocus) {
        focusNode(this.getDOMNode());
      }
    }};
  module.exports = AutoFocusMixin;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactDOMForm", ["npm:react@0.13.1/lib/EventConstants", "npm:react@0.13.1/lib/LocalEventTrapMixin", "npm:react@0.13.1/lib/ReactBrowserComponentMixin", "npm:react@0.13.1/lib/ReactClass", "npm:react@0.13.1/lib/ReactElement"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var EventConstants = require("npm:react@0.13.1/lib/EventConstants");
  var LocalEventTrapMixin = require("npm:react@0.13.1/lib/LocalEventTrapMixin");
  var ReactBrowserComponentMixin = require("npm:react@0.13.1/lib/ReactBrowserComponentMixin");
  var ReactClass = require("npm:react@0.13.1/lib/ReactClass");
  var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
  var form = ReactElement.createFactory('form');
  var ReactDOMForm = ReactClass.createClass({
    displayName: 'ReactDOMForm',
    tagName: 'FORM',
    mixins: [ReactBrowserComponentMixin, LocalEventTrapMixin],
    render: function() {
      return form(this.props);
    },
    componentDidMount: function() {
      this.trapBubbledEvent(EventConstants.topLevelTypes.topReset, 'reset');
      this.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit, 'submit');
    }
  });
  module.exports = ReactDOMForm;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/LinkedValueUtils", ["npm:react@0.13.1/lib/ReactPropTypes", "npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactPropTypes = require("npm:react@0.13.1/lib/ReactPropTypes");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var hasReadOnlyValue = {
      'button': true,
      'checkbox': true,
      'image': true,
      'hidden': true,
      'radio': true,
      'reset': true,
      'submit': true
    };
    function _assertSingleLink(input) {
      ("production" !== process.env.NODE_ENV ? invariant(input.props.checkedLink == null || input.props.valueLink == null, 'Cannot provide a checkedLink and a valueLink. If you want to use ' + 'checkedLink, you probably don\'t want to use valueLink and vice versa.') : invariant(input.props.checkedLink == null || input.props.valueLink == null));
    }
    function _assertValueLink(input) {
      _assertSingleLink(input);
      ("production" !== process.env.NODE_ENV ? invariant(input.props.value == null && input.props.onChange == null, 'Cannot provide a valueLink and a value or onChange event. If you want ' + 'to use value or onChange, you probably don\'t want to use valueLink.') : invariant(input.props.value == null && input.props.onChange == null));
    }
    function _assertCheckedLink(input) {
      _assertSingleLink(input);
      ("production" !== process.env.NODE_ENV ? invariant(input.props.checked == null && input.props.onChange == null, 'Cannot provide a checkedLink and a checked property or onChange event. ' + 'If you want to use checked or onChange, you probably don\'t want to ' + 'use checkedLink') : invariant(input.props.checked == null && input.props.onChange == null));
    }
    function _handleLinkedValueChange(e) {
      this.props.valueLink.requestChange(e.target.value);
    }
    function _handleLinkedCheckChange(e) {
      this.props.checkedLink.requestChange(e.target.checked);
    }
    var LinkedValueUtils = {
      Mixin: {propTypes: {
          value: function(props, propName, componentName) {
            if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
              return null;
            }
            return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
          },
          checked: function(props, propName, componentName) {
            if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
              return null;
            }
            return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
          },
          onChange: ReactPropTypes.func
        }},
      getValue: function(input) {
        if (input.props.valueLink) {
          _assertValueLink(input);
          return input.props.valueLink.value;
        }
        return input.props.value;
      },
      getChecked: function(input) {
        if (input.props.checkedLink) {
          _assertCheckedLink(input);
          return input.props.checkedLink.value;
        }
        return input.props.checked;
      },
      getOnChange: function(input) {
        if (input.props.valueLink) {
          _assertValueLink(input);
          return _handleLinkedValueChange;
        } else if (input.props.checkedLink) {
          _assertCheckedLink(input);
          return _handleLinkedCheckChange;
        }
        return input.props.onChange;
      }
    };
    module.exports = LinkedValueUtils;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactEventListener", ["npm:react@0.13.1/lib/EventListener", "npm:react@0.13.1/lib/ExecutionEnvironment", "npm:react@0.13.1/lib/PooledClass", "npm:react@0.13.1/lib/ReactInstanceHandles", "npm:react@0.13.1/lib/ReactMount", "npm:react@0.13.1/lib/ReactUpdates", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/getEventTarget", "npm:react@0.13.1/lib/getUnboundedScrollPosition", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var EventListener = require("npm:react@0.13.1/lib/EventListener");
    var ExecutionEnvironment = require("npm:react@0.13.1/lib/ExecutionEnvironment");
    var PooledClass = require("npm:react@0.13.1/lib/PooledClass");
    var ReactInstanceHandles = require("npm:react@0.13.1/lib/ReactInstanceHandles");
    var ReactMount = require("npm:react@0.13.1/lib/ReactMount");
    var ReactUpdates = require("npm:react@0.13.1/lib/ReactUpdates");
    var assign = require("npm:react@0.13.1/lib/Object.assign");
    var getEventTarget = require("npm:react@0.13.1/lib/getEventTarget");
    var getUnboundedScrollPosition = require("npm:react@0.13.1/lib/getUnboundedScrollPosition");
    function findParent(node) {
      var nodeID = ReactMount.getID(node);
      var rootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);
      var container = ReactMount.findReactContainerForID(rootID);
      var parent = ReactMount.getFirstReactDOM(container);
      return parent;
    }
    function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
      this.topLevelType = topLevelType;
      this.nativeEvent = nativeEvent;
      this.ancestors = [];
    }
    assign(TopLevelCallbackBookKeeping.prototype, {destructor: function() {
        this.topLevelType = null;
        this.nativeEvent = null;
        this.ancestors.length = 0;
      }});
    PooledClass.addPoolingTo(TopLevelCallbackBookKeeping, PooledClass.twoArgumentPooler);
    function handleTopLevelImpl(bookKeeping) {
      var topLevelTarget = ReactMount.getFirstReactDOM(getEventTarget(bookKeeping.nativeEvent)) || window;
      var ancestor = topLevelTarget;
      while (ancestor) {
        bookKeeping.ancestors.push(ancestor);
        ancestor = findParent(ancestor);
      }
      for (var i = 0,
          l = bookKeeping.ancestors.length; i < l; i++) {
        topLevelTarget = bookKeeping.ancestors[i];
        var topLevelTargetID = ReactMount.getID(topLevelTarget) || '';
        ReactEventListener._handleTopLevel(bookKeeping.topLevelType, topLevelTarget, topLevelTargetID, bookKeeping.nativeEvent);
      }
    }
    function scrollValueMonitor(cb) {
      var scrollPosition = getUnboundedScrollPosition(window);
      cb(scrollPosition);
    }
    var ReactEventListener = {
      _enabled: true,
      _handleTopLevel: null,
      WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,
      setHandleTopLevel: function(handleTopLevel) {
        ReactEventListener._handleTopLevel = handleTopLevel;
      },
      setEnabled: function(enabled) {
        ReactEventListener._enabled = !!enabled;
      },
      isEnabled: function() {
        return ReactEventListener._enabled;
      },
      trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
        var element = handle;
        if (!element) {
          return null;
        }
        return EventListener.listen(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
      },
      trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
        var element = handle;
        if (!element) {
          return null;
        }
        return EventListener.capture(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
      },
      monitorScrollValue: function(refresh) {
        var callback = scrollValueMonitor.bind(null, refresh);
        EventListener.listen(window, 'scroll', callback);
      },
      dispatchEvent: function(topLevelType, nativeEvent) {
        if (!ReactEventListener._enabled) {
          return ;
        }
        var bookKeeping = TopLevelCallbackBookKeeping.getPooled(topLevelType, nativeEvent);
        try {
          ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
        } finally {
          TopLevelCallbackBookKeeping.release(bookKeeping);
        }
      }
    };
    module.exports = ReactEventListener;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactDOMSelection", ["npm:react@0.13.1/lib/ExecutionEnvironment", "npm:react@0.13.1/lib/getNodeForCharacterOffset", "npm:react@0.13.1/lib/getTextContentAccessor"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ExecutionEnvironment = require("npm:react@0.13.1/lib/ExecutionEnvironment");
  var getNodeForCharacterOffset = require("npm:react@0.13.1/lib/getNodeForCharacterOffset");
  var getTextContentAccessor = require("npm:react@0.13.1/lib/getTextContentAccessor");
  function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
    return anchorNode === focusNode && anchorOffset === focusOffset;
  }
  function getIEOffsets(node) {
    var selection = document.selection;
    var selectedRange = selection.createRange();
    var selectedLength = selectedRange.text.length;
    var fromStart = selectedRange.duplicate();
    fromStart.moveToElementText(node);
    fromStart.setEndPoint('EndToStart', selectedRange);
    var startOffset = fromStart.text.length;
    var endOffset = startOffset + selectedLength;
    return {
      start: startOffset,
      end: endOffset
    };
  }
  function getModernOffsets(node) {
    var selection = window.getSelection && window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return null;
    }
    var anchorNode = selection.anchorNode;
    var anchorOffset = selection.anchorOffset;
    var focusNode = selection.focusNode;
    var focusOffset = selection.focusOffset;
    var currentRange = selection.getRangeAt(0);
    var isSelectionCollapsed = isCollapsed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);
    var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;
    var tempRange = currentRange.cloneRange();
    tempRange.selectNodeContents(node);
    tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);
    var isTempRangeCollapsed = isCollapsed(tempRange.startContainer, tempRange.startOffset, tempRange.endContainer, tempRange.endOffset);
    var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
    var end = start + rangeLength;
    var detectionRange = document.createRange();
    detectionRange.setStart(anchorNode, anchorOffset);
    detectionRange.setEnd(focusNode, focusOffset);
    var isBackward = detectionRange.collapsed;
    return {
      start: isBackward ? end : start,
      end: isBackward ? start : end
    };
  }
  function setIEOffsets(node, offsets) {
    var range = document.selection.createRange().duplicate();
    var start,
        end;
    if (typeof offsets.end === 'undefined') {
      start = offsets.start;
      end = start;
    } else if (offsets.start > offsets.end) {
      start = offsets.end;
      end = offsets.start;
    } else {
      start = offsets.start;
      end = offsets.end;
    }
    range.moveToElementText(node);
    range.moveStart('character', start);
    range.setEndPoint('EndToStart', range);
    range.moveEnd('character', end - start);
    range.select();
  }
  function setModernOffsets(node, offsets) {
    if (!window.getSelection) {
      return ;
    }
    var selection = window.getSelection();
    var length = node[getTextContentAccessor()].length;
    var start = Math.min(offsets.start, length);
    var end = typeof offsets.end === 'undefined' ? start : Math.min(offsets.end, length);
    if (!selection.extend && start > end) {
      var temp = end;
      end = start;
      start = temp;
    }
    var startMarker = getNodeForCharacterOffset(node, start);
    var endMarker = getNodeForCharacterOffset(node, end);
    if (startMarker && endMarker) {
      var range = document.createRange();
      range.setStart(startMarker.node, startMarker.offset);
      selection.removeAllRanges();
      if (start > end) {
        selection.addRange(range);
        selection.extend(endMarker.node, endMarker.offset);
      } else {
        range.setEnd(endMarker.node, endMarker.offset);
        selection.addRange(range);
      }
    }
  }
  var useIEOffsets = (ExecutionEnvironment.canUseDOM && 'selection' in document && !('getSelection' in window));
  var ReactDOMSelection = {
    getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,
    setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
  };
  module.exports = ReactDOMSelection;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/SelectEventPlugin", ["npm:react@0.13.1/lib/EventConstants", "npm:react@0.13.1/lib/EventPropagators", "npm:react@0.13.1/lib/ReactInputSelection", "npm:react@0.13.1/lib/SyntheticEvent", "npm:react@0.13.1/lib/getActiveElement", "npm:react@0.13.1/lib/isTextInputElement", "npm:react@0.13.1/lib/keyOf", "npm:react@0.13.1/lib/shallowEqual"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var EventConstants = require("npm:react@0.13.1/lib/EventConstants");
  var EventPropagators = require("npm:react@0.13.1/lib/EventPropagators");
  var ReactInputSelection = require("npm:react@0.13.1/lib/ReactInputSelection");
  var SyntheticEvent = require("npm:react@0.13.1/lib/SyntheticEvent");
  var getActiveElement = require("npm:react@0.13.1/lib/getActiveElement");
  var isTextInputElement = require("npm:react@0.13.1/lib/isTextInputElement");
  var keyOf = require("npm:react@0.13.1/lib/keyOf");
  var shallowEqual = require("npm:react@0.13.1/lib/shallowEqual");
  var topLevelTypes = EventConstants.topLevelTypes;
  var eventTypes = {select: {
      phasedRegistrationNames: {
        bubbled: keyOf({onSelect: null}),
        captured: keyOf({onSelectCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topContextMenu, topLevelTypes.topFocus, topLevelTypes.topKeyDown, topLevelTypes.topMouseDown, topLevelTypes.topMouseUp, topLevelTypes.topSelectionChange]
    }};
  var activeElement = null;
  var activeElementID = null;
  var lastSelection = null;
  var mouseDown = false;
  function getSelection(node) {
    if ('selectionStart' in node && ReactInputSelection.hasSelectionCapabilities(node)) {
      return {
        start: node.selectionStart,
        end: node.selectionEnd
      };
    } else if (window.getSelection) {
      var selection = window.getSelection();
      return {
        anchorNode: selection.anchorNode,
        anchorOffset: selection.anchorOffset,
        focusNode: selection.focusNode,
        focusOffset: selection.focusOffset
      };
    } else if (document.selection) {
      var range = document.selection.createRange();
      return {
        parentElement: range.parentElement(),
        text: range.text,
        top: range.boundingTop,
        left: range.boundingLeft
      };
    }
  }
  function constructSelectEvent(nativeEvent) {
    if (mouseDown || activeElement == null || activeElement !== getActiveElement()) {
      return null;
    }
    var currentSelection = getSelection(activeElement);
    if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
      lastSelection = currentSelection;
      var syntheticEvent = SyntheticEvent.getPooled(eventTypes.select, activeElementID, nativeEvent);
      syntheticEvent.type = 'select';
      syntheticEvent.target = activeElement;
      EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);
      return syntheticEvent;
    }
  }
  var SelectEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
      switch (topLevelType) {
        case topLevelTypes.topFocus:
          if (isTextInputElement(topLevelTarget) || topLevelTarget.contentEditable === 'true') {
            activeElement = topLevelTarget;
            activeElementID = topLevelTargetID;
            lastSelection = null;
          }
          break;
        case topLevelTypes.topBlur:
          activeElement = null;
          activeElementID = null;
          lastSelection = null;
          break;
        case topLevelTypes.topMouseDown:
          mouseDown = true;
          break;
        case topLevelTypes.topContextMenu:
        case topLevelTypes.topMouseUp:
          mouseDown = false;
          return constructSelectEvent(nativeEvent);
        case topLevelTypes.topSelectionChange:
        case topLevelTypes.topKeyDown:
        case topLevelTypes.topKeyUp:
          return constructSelectEvent(nativeEvent);
      }
    }
  };
  module.exports = SelectEventPlugin;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/SyntheticKeyboardEvent", ["npm:react@0.13.1/lib/SyntheticUIEvent", "npm:react@0.13.1/lib/getEventCharCode", "npm:react@0.13.1/lib/getEventKey", "npm:react@0.13.1/lib/getEventModifierState"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var SyntheticUIEvent = require("npm:react@0.13.1/lib/SyntheticUIEvent");
  var getEventCharCode = require("npm:react@0.13.1/lib/getEventCharCode");
  var getEventKey = require("npm:react@0.13.1/lib/getEventKey");
  var getEventModifierState = require("npm:react@0.13.1/lib/getEventModifierState");
  var KeyboardEventInterface = {
    key: getEventKey,
    location: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    repeat: null,
    locale: null,
    getModifierState: getEventModifierState,
    charCode: function(event) {
      if (event.type === 'keypress') {
        return getEventCharCode(event);
      }
      return 0;
    },
    keyCode: function(event) {
      if (event.type === 'keydown' || event.type === 'keyup') {
        return event.keyCode;
      }
      return 0;
    },
    which: function(event) {
      if (event.type === 'keypress') {
        return getEventCharCode(event);
      }
      if (event.type === 'keydown' || event.type === 'keyup') {
        return event.keyCode;
      }
      return 0;
    }
  };
  function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
  }
  SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);
  module.exports = SyntheticKeyboardEvent;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/performanceNow", ["npm:react@0.13.1/lib/performance"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var performance = require("npm:react@0.13.1/lib/performance");
  if (!performance || !performance.now) {
    performance = Date;
  }
  var performanceNow = performance.now.bind(performance);
  module.exports = performanceNow;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactServerRendering", ["npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/ReactInstanceHandles", "npm:react@0.13.1/lib/ReactMarkupChecksum", "npm:react@0.13.1/lib/ReactServerRenderingTransaction", "npm:react@0.13.1/lib/emptyObject", "npm:react@0.13.1/lib/instantiateReactComponent", "npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
    var ReactInstanceHandles = require("npm:react@0.13.1/lib/ReactInstanceHandles");
    var ReactMarkupChecksum = require("npm:react@0.13.1/lib/ReactMarkupChecksum");
    var ReactServerRenderingTransaction = require("npm:react@0.13.1/lib/ReactServerRenderingTransaction");
    var emptyObject = require("npm:react@0.13.1/lib/emptyObject");
    var instantiateReactComponent = require("npm:react@0.13.1/lib/instantiateReactComponent");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    function renderToString(element) {
      ("production" !== process.env.NODE_ENV ? invariant(ReactElement.isValidElement(element), 'renderToString(): You must pass a valid ReactElement.') : invariant(ReactElement.isValidElement(element)));
      var transaction;
      try {
        var id = ReactInstanceHandles.createReactRootID();
        transaction = ReactServerRenderingTransaction.getPooled(false);
        return transaction.perform(function() {
          var componentInstance = instantiateReactComponent(element, null);
          var markup = componentInstance.mountComponent(id, transaction, emptyObject);
          return ReactMarkupChecksum.addChecksumToMarkup(markup);
        }, null);
      } finally {
        ReactServerRenderingTransaction.release(transaction);
      }
    }
    function renderToStaticMarkup(element) {
      ("production" !== process.env.NODE_ENV ? invariant(ReactElement.isValidElement(element), 'renderToStaticMarkup(): You must pass a valid ReactElement.') : invariant(ReactElement.isValidElement(element)));
      var transaction;
      try {
        var id = ReactInstanceHandles.createReactRootID();
        transaction = ReactServerRenderingTransaction.getPooled(true);
        return transaction.perform(function() {
          var componentInstance = instantiateReactComponent(element, null);
          return componentInstance.mountComponent(id, transaction, emptyObject);
        }, null);
      } finally {
        ReactServerRenderingTransaction.release(transaction);
      }
    }
    module.exports = {
      renderToString: renderToString,
      renderToStaticMarkup: renderToStaticMarkup
    };
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:babel-runtime@4.7.16/helpers/get", ["npm:babel-runtime@4.7.16/core-js"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var _core = require("npm:babel-runtime@4.7.16/core-js")["default"];
  exports["default"] = function get(_x, _x2, _x3) {
    var _again = true;
    _function: while (_again) {
      _again = false;
      var object = _x,
          property = _x2,
          receiver = _x3;
      desc = parent = getter = undefined;
      var desc = _core.Object.getOwnPropertyDescriptor(object, property);
      if (desc === undefined) {
        var parent = _core.Object.getPrototypeOf(object);
        if (parent === null) {
          return undefined;
        } else {
          _x = parent;
          _x2 = property;
          _x3 = receiver;
          _again = true;
          continue _function;
        }
      } else if ("value" in desc && desc.writable) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === undefined) {
          return undefined;
        }
        return getter.call(receiver);
      }
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/LinkedStateMixin", ["npm:react@0.13.1/lib/ReactLink", "npm:react@0.13.1/lib/ReactStateSetters"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ReactLink = require("npm:react@0.13.1/lib/ReactLink");
  var ReactStateSetters = require("npm:react@0.13.1/lib/ReactStateSetters");
  var LinkedStateMixin = {linkState: function(key) {
      return new ReactLink(this.state[key], ReactStateSetters.createStateKeySetter(this, key));
    }};
  module.exports = LinkedStateMixin;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactPropTransferer", ["npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/emptyFunction", "npm:react@0.13.1/lib/joinClasses"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var assign = require("npm:react@0.13.1/lib/Object.assign");
  var emptyFunction = require("npm:react@0.13.1/lib/emptyFunction");
  var joinClasses = require("npm:react@0.13.1/lib/joinClasses");
  function createTransferStrategy(mergeStrategy) {
    return function(props, key, value) {
      if (!props.hasOwnProperty(key)) {
        props[key] = value;
      } else {
        props[key] = mergeStrategy(props[key], value);
      }
    };
  }
  var transferStrategyMerge = createTransferStrategy(function(a, b) {
    return assign({}, b, a);
  });
  var TransferStrategies = {
    children: emptyFunction,
    className: createTransferStrategy(joinClasses),
    style: transferStrategyMerge
  };
  function transferInto(props, newProps) {
    for (var thisKey in newProps) {
      if (!newProps.hasOwnProperty(thisKey)) {
        continue;
      }
      var transferStrategy = TransferStrategies[thisKey];
      if (transferStrategy && TransferStrategies.hasOwnProperty(thisKey)) {
        transferStrategy(props, thisKey, newProps[thisKey]);
      } else if (!props.hasOwnProperty(thisKey)) {
        props[thisKey] = newProps[thisKey];
      }
    }
    return props;
  }
  var ReactPropTransferer = {mergeProps: function(oldProps, newProps) {
      return transferInto(assign({}, oldProps), newProps);
    }};
  module.exports = ReactPropTransferer;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactCSSTransitionGroupChild", ["npm:react@0.13.1/lib/React", "npm:react@0.13.1/lib/CSSCore", "npm:react@0.13.1/lib/ReactTransitionEvents", "npm:react@0.13.1/lib/onlyChild", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var React = require("npm:react@0.13.1/lib/React");
    var CSSCore = require("npm:react@0.13.1/lib/CSSCore");
    var ReactTransitionEvents = require("npm:react@0.13.1/lib/ReactTransitionEvents");
    var onlyChild = require("npm:react@0.13.1/lib/onlyChild");
    var warning = require("npm:react@0.13.1/lib/warning");
    var TICK = 17;
    var NO_EVENT_TIMEOUT = 5000;
    var noEventListener = null;
    if ("production" !== process.env.NODE_ENV) {
      noEventListener = function() {
        ("production" !== process.env.NODE_ENV ? warning(false, 'transition(): tried to perform an animation without ' + 'an animationend or transitionend event after timeout (' + '%sms). You should either disable this ' + 'transition in JS or add a CSS animation/transition.', NO_EVENT_TIMEOUT) : null);
      };
    }
    var ReactCSSTransitionGroupChild = React.createClass({
      displayName: 'ReactCSSTransitionGroupChild',
      transition: function(animationType, finishCallback) {
        var node = this.getDOMNode();
        var className = this.props.name + '-' + animationType;
        var activeClassName = className + '-active';
        var noEventTimeout = null;
        var endListener = function(e) {
          if (e && e.target !== node) {
            return ;
          }
          if ("production" !== process.env.NODE_ENV) {
            clearTimeout(noEventTimeout);
          }
          CSSCore.removeClass(node, className);
          CSSCore.removeClass(node, activeClassName);
          ReactTransitionEvents.removeEndEventListener(node, endListener);
          if (finishCallback) {
            finishCallback();
          }
        };
        ReactTransitionEvents.addEndEventListener(node, endListener);
        CSSCore.addClass(node, className);
        this.queueClass(activeClassName);
        if ("production" !== process.env.NODE_ENV) {
          noEventTimeout = setTimeout(noEventListener, NO_EVENT_TIMEOUT);
        }
      },
      queueClass: function(className) {
        this.classNameQueue.push(className);
        if (!this.timeout) {
          this.timeout = setTimeout(this.flushClassNameQueue, TICK);
        }
      },
      flushClassNameQueue: function() {
        if (this.isMounted()) {
          this.classNameQueue.forEach(CSSCore.addClass.bind(CSSCore, this.getDOMNode()));
        }
        this.classNameQueue.length = 0;
        this.timeout = null;
      },
      componentWillMount: function() {
        this.classNameQueue = [];
      },
      componentWillUnmount: function() {
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
      },
      componentWillAppear: function(done) {
        if (this.props.appear) {
          this.transition('appear', done);
        } else {
          done();
        }
      },
      componentWillEnter: function(done) {
        if (this.props.enter) {
          this.transition('enter', done);
        } else {
          done();
        }
      },
      componentWillLeave: function(done) {
        if (this.props.leave) {
          this.transition('leave', done);
        } else {
          done();
        }
      },
      render: function() {
        return onlyChild(this.props.children);
      }
    });
    module.exports = ReactCSSTransitionGroupChild;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:eventemitter3@0.1.6", ["npm:eventemitter3@0.1.6/index"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:eventemitter3@0.1.6/index");
  global.define = __define;
  return module.exports;
});

System.register("npm:object-assign@2.0.0", ["npm:object-assign@2.0.0/index"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:object-assign@2.0.0/index");
  global.define = __define;
  return module.exports;
});

System.register("npm:uniqueid@0.1.0", ["npm:uniqueid@0.1.0/index"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:uniqueid@0.1.0/index");
  global.define = __define;
  return module.exports;
});

System.register("npm:flux@2.0.1/lib/Dispatcher", ["npm:flux@2.0.1/lib/invariant"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var invariant = require("npm:flux@2.0.1/lib/invariant");
  var _lastID = 1;
  var _prefix = 'ID_';
  function Dispatcher() {
    this.$Dispatcher_callbacks = {};
    this.$Dispatcher_isPending = {};
    this.$Dispatcher_isHandled = {};
    this.$Dispatcher_isDispatching = false;
    this.$Dispatcher_pendingPayload = null;
  }
  Dispatcher.prototype.register = function(callback) {
    var id = _prefix + _lastID++;
    this.$Dispatcher_callbacks[id] = callback;
    return id;
  };
  Dispatcher.prototype.unregister = function(id) {
    invariant(this.$Dispatcher_callbacks[id], 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id);
    delete this.$Dispatcher_callbacks[id];
  };
  Dispatcher.prototype.waitFor = function(ids) {
    invariant(this.$Dispatcher_isDispatching, 'Dispatcher.waitFor(...): Must be invoked while dispatching.');
    for (var ii = 0; ii < ids.length; ii++) {
      var id = ids[ii];
      if (this.$Dispatcher_isPending[id]) {
        invariant(this.$Dispatcher_isHandled[id], 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id);
        continue;
      }
      invariant(this.$Dispatcher_callbacks[id], 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id);
      this.$Dispatcher_invokeCallback(id);
    }
  };
  Dispatcher.prototype.dispatch = function(payload) {
    invariant(!this.$Dispatcher_isDispatching, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.');
    this.$Dispatcher_startDispatching(payload);
    try {
      for (var id in this.$Dispatcher_callbacks) {
        if (this.$Dispatcher_isPending[id]) {
          continue;
        }
        this.$Dispatcher_invokeCallback(id);
      }
    } finally {
      this.$Dispatcher_stopDispatching();
    }
  };
  Dispatcher.prototype.isDispatching = function() {
    return this.$Dispatcher_isDispatching;
  };
  Dispatcher.prototype.$Dispatcher_invokeCallback = function(id) {
    this.$Dispatcher_isPending[id] = true;
    this.$Dispatcher_callbacks[id](this.$Dispatcher_pendingPayload);
    this.$Dispatcher_isHandled[id] = true;
  };
  Dispatcher.prototype.$Dispatcher_startDispatching = function(payload) {
    for (var id in this.$Dispatcher_callbacks) {
      this.$Dispatcher_isPending[id] = false;
      this.$Dispatcher_isHandled[id] = false;
    }
    this.$Dispatcher_pendingPayload = payload;
    this.$Dispatcher_isDispatching = true;
  };
  Dispatcher.prototype.$Dispatcher_stopDispatching = function() {
    this.$Dispatcher_pendingPayload = null;
    this.$Dispatcher_isDispatching = false;
  };
  module.exports = Dispatcher;
  global.define = __define;
  return module.exports;
});

System.register("npm:events-browserify@0.0.1", ["npm:events-browserify@0.0.1/events"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:events-browserify@0.0.1/events");
  global.define = __define;
  return module.exports;
});

System.register("npm:react-canvas@0.0.1/lib/FontUtils", ["npm:react-canvas@0.0.1/lib/FontFace"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var FontFace = require("npm:react-canvas@0.0.1/lib/FontFace");
  var _useNativeImpl = (typeof window.FontFace !== 'undefined');
  var _pendingFonts = {};
  var _loadedFonts = {};
  var _failedFonts = {};
  var kFontLoadTimeout = 3000;
  function isFontLoaded(fontFace) {
    return _loadedFonts[fontFace.id] !== undefined || !fontFace.url;
  }
  function loadFont(fontFace, callback) {
    var defaultNode;
    var testNode;
    var checkFont;
    if (_loadedFonts[fontFace.id]) {
      return callback(null);
    }
    if (_failedFonts[fontFace.id]) {
      return callback(_failedFonts[fontFace.id]);
    }
    if (!fontFace.url) {
      return callback(null);
    }
    if (_pendingFonts[fontFace.id]) {
      _pendingFonts[fontFace.id].callbacks.push(callback);
      return ;
    }
    defaultNode = createTestNode('Helvetica', fontFace.attributes);
    testNode = createTestNode(fontFace.family, fontFace.attributes);
    document.body.appendChild(testNode);
    document.body.appendChild(defaultNode);
    _pendingFonts[fontFace.id] = {
      startTime: Date.now(),
      defaultNode: defaultNode,
      testNode: testNode,
      callbacks: [callback]
    };
    checkFont = function() {
      var currWidth = testNode.getBoundingClientRect().width;
      var defaultWidth = defaultNode.getBoundingClientRect().width;
      var loaded = currWidth !== defaultWidth;
      if (loaded) {
        handleFontLoad(fontFace, null);
      } else {
        if (Date.now() - _pendingFonts[fontFace.id].startTime >= kFontLoadTimeout) {
          handleFontLoad(fontFace, true);
        } else {
          requestAnimationFrame(checkFont);
        }
      }
    };
    checkFont();
  }
  function loadFontNative(fontFace, callback) {
    var theFontFace;
    if (_loadedFonts[fontFace.id]) {
      return callback(null);
    }
    if (_failedFonts[fontFace.id]) {
      return callback(_failedFonts[fontFace.id]);
    }
    if (!fontFace.url) {
      return callback(null);
    }
    if (_pendingFonts[fontFace.id]) {
      _pendingFonts[fontFace.id].callbacks.push(callback);
      return ;
    }
    _pendingFonts[fontFace.id] = {
      startTime: Date.now(),
      callbacks: [callback]
    };
    theFontFace = new window.FontFace(fontFace.family, 'url(' + fontFace.url + ')', fontFace.attributes);
    theFontFace.load().then(function() {
      _loadedFonts[fontFace.id] = true;
      callback(null);
    }, function(err) {
      _failedFonts[fontFace.id] = err;
      callback(err);
    });
  }
  function createTestNode(family, attributes) {
    var span = document.createElement('span');
    span.setAttribute('data-fontfamily', family);
    span.style.cssText = 'position:absolute; left:-5000px; top:-5000px; visibility:hidden;' + 'font-size:100px; font-family:"' + family + '", Helvetica;font-weight: ' + attributes.weight + ';' + 'font-style:' + attributes.style + ';';
    span.innerHTML = 'BESs';
    return span;
  }
  function handleFontLoad(fontFace, timeout) {
    var error = timeout ? 'Exceeded load timeout of ' + kFontLoadTimeout + 'ms' : null;
    if (!error) {
      _loadedFonts[fontFace.id] = true;
    } else {
      _failedFonts[fontFace.id] = error;
    }
    _pendingFonts[fontFace.id].callbacks.forEach(function(callback) {
      callback(error);
    });
    if (_pendingFonts[fontFace.id].defaultNode) {
      document.body.removeChild(_pendingFonts[fontFace.id].defaultNode);
    }
    if (_pendingFonts[fontFace.id].testNode) {
      document.body.removeChild(_pendingFonts[fontFace.id].testNode);
    }
    delete _pendingFonts[fontFace.id];
  }
  module.exports = {
    isFontLoaded: isFontLoaded,
    loadFont: _useNativeImpl ? loadFontNative : loadFont
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:react-canvas@0.0.1/lib/CanvasUtils", ["npm:react-canvas@0.0.1/lib/FontFace", "npm:react-canvas@0.0.1/lib/clamp", "npm:react-canvas@0.0.1/lib/measureText"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var FontFace = require("npm:react-canvas@0.0.1/lib/FontFace");
  var clamp = require("npm:react-canvas@0.0.1/lib/clamp");
  var measureText = require("npm:react-canvas@0.0.1/lib/measureText");
  function drawImage(ctx, image, x, y, width, height, options) {
    options = options || {};
    if (options.backgroundColor) {
      ctx.save();
      ctx.fillStyle = options.backgroundColor;
      ctx.fillRect(x, y, width, height);
      ctx.restore();
    }
    var dx = 0;
    var dy = 0;
    var dw = 0;
    var dh = 0;
    var sx = 0;
    var sy = 0;
    var sw = 0;
    var sh = 0;
    var scale;
    var scaledSize;
    var actualSize;
    var focusPoint = options.focusPoint;
    actualSize = {
      width: image.getWidth(),
      height: image.getHeight()
    };
    scale = Math.max(width / actualSize.width, height / actualSize.height) || 1;
    scale = parseFloat(scale.toFixed(4), 10);
    scaledSize = {
      width: actualSize.width * scale,
      height: actualSize.height * scale
    };
    if (focusPoint) {
      if (options.originalHeight) {
        focusPoint.x *= (actualSize.height / options.originalHeight);
        focusPoint.y *= (actualSize.height / options.originalHeight);
      }
    } else {
      focusPoint = {
        x: actualSize.width * 0.5,
        y: actualSize.height * 0.5
      };
    }
    sx = Math.round(clamp(width * 0.5 - focusPoint.x * scale, width - scaledSize.width, 0)) * (-1 / scale);
    sy = Math.round(clamp(height * 0.5 - focusPoint.y * scale, height - scaledSize.height, 0)) * (-1 / scale);
    sw = Math.round(actualSize.width - (sx * 2));
    sh = Math.round(actualSize.height - (sy * 2));
    dw = Math.round(width);
    dh = Math.round(height);
    dx = Math.round(x);
    dy = Math.round(y);
    ctx.drawImage(image.getRawImage(), sx, sy, sw, sh, dx, dy, dw, dh);
  }
  function drawText(ctx, text, x, y, width, height, fontFace, options) {
    var textMetrics;
    var currX = x;
    var currY = y;
    var currText;
    var options = options || {};
    options.fontSize = options.fontSize || 16;
    options.lineHeight = options.lineHeight || 18;
    options.textAlign = options.textAlign || 'left';
    options.backgroundColor = options.backgroundColor || 'transparent';
    options.color = options.color || '#000';
    textMetrics = measureText(text, width, fontFace, options.fontSize, options.lineHeight);
    ctx.save();
    if (options.backgroundColor !== 'transparent') {
      ctx.fillStyle = options.backgroundColor;
      ctx.fillRect(0, 0, width, height);
    }
    ctx.fillStyle = options.color;
    ctx.font = fontFace.attributes.style + ' normal ' + fontFace.attributes.weight + ' ' + options.fontSize + 'pt ' + fontFace.family;
    textMetrics.lines.forEach(function(line, index) {
      currText = line.text;
      currY = (index === 0) ? y + options.fontSize : (y + options.fontSize + options.lineHeight * index);
      switch (options.textAlign) {
        case 'center':
          currX = x + (width / 2) - (line.width / 2);
          break;
        case 'right':
          currX = x + width - line.width;
          break;
        default:
          currX = x;
      }
      if ((index < textMetrics.lines.length - 1) && ((options.fontSize + options.lineHeight * (index + 1)) > height)) {
        currText = currText.replace(/\,?\s?\w+$/, '…');
      }
      if (currY <= (height + y)) {
        ctx.fillText(currText, currX, currY);
      }
    });
    ctx.restore();
  }
  function drawGradient(ctx, x1, y1, x2, y2, colorStops, x, y, width, height) {
    var grad;
    ctx.save();
    grad = ctx.createLinearGradient(x1, y1, x2, y2);
    colorStops.forEach(function(colorStop) {
      grad.addColorStop(colorStop.position, colorStop.color);
    });
    ctx.fillStyle = grad;
    ctx.fillRect(x, y, width, height);
    ctx.restore();
  }
  module.exports = {
    drawImage: drawImage,
    drawText: drawText,
    drawGradient: drawGradient
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:react-canvas@0.0.1/lib/layoutNode", ["npm:react-canvas@0.0.1/lib/Layout"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var computeLayout = require("npm:react-canvas@0.0.1/lib/Layout");
  function layoutNode(root) {
    var rootNode = createNode(root);
    computeLayout(rootNode);
    walkNode(rootNode);
    return rootNode;
  }
  function createNode(layer) {
    return {
      layer: layer,
      layout: {
        width: undefined,
        height: undefined,
        top: 0,
        left: 0
      },
      style: layer._originalStyle || {},
      children: (layer.children || []).map(createNode)
    };
  }
  function walkNode(node, parentLeft, parentTop) {
    node.layer.frame.x = node.layout.left + (parentLeft || 0);
    node.layer.frame.y = node.layout.top + (parentTop || 0);
    node.layer.frame.width = node.layout.width;
    node.layer.frame.height = node.layout.height;
    if (node.children && node.children.length > 0) {
      node.children.forEach(function(child) {
        walkNode(child, node.layout.left, node.layout.top);
      });
    }
  }
  module.exports = layoutNode;
  global.define = __define;
  return module.exports;
});

System.register("npm:react-canvas@0.0.1/lib/Layer", ["npm:react-canvas@0.0.1/lib/createComponent", "npm:react-canvas@0.0.1/lib/LayerMixin"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var createComponent = require("npm:react-canvas@0.0.1/lib/createComponent");
  var LayerMixin = require("npm:react-canvas@0.0.1/lib/LayerMixin");
  var Layer = createComponent('Layer', LayerMixin, {
    mountComponent: function(rootID, transaction, context) {
      var props = this._currentElement.props;
      var layer = this.node;
      this.applyLayerProps({}, props);
      return layer;
    },
    receiveComponent: function(nextComponent, transaction, context) {
      var prevProps = this._currentElement.props;
      var props = nextComponent.props;
      this.applyLayerProps(prevProps, props);
      this._currentElement = nextComponent;
    }
  });
  module.exports = Layer;
  global.define = __define;
  return module.exports;
});

System.register("npm:whatwg-fetch@0.7.0", ["npm:whatwg-fetch@0.7.0/fetch"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:whatwg-fetch@0.7.0/fetch");
  global.define = __define;
  return module.exports;
});

System.register("npm:fkit@0.16.2/src/list/fold", ["npm:fkit@0.16.2/src/list/base", "npm:fkit@0.16.2/src/fn", "npm:fkit@0.16.2/src/math"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var base = require("npm:fkit@0.16.2/src/list/base"),
      fn = require("npm:fkit@0.16.2/src/fn"),
      math = require("npm:fkit@0.16.2/src/math");
  var self;
  self = module.exports = {
    flattenStrings: function flattenStrings(as) {
      if (base.isArrayOfStrings(as)) {
        return self.concat(as);
      } else {
        if (Array.isArray(as)) {
          return as.map(flattenStrings);
        } else {
          return as;
        }
      }
    },
    concatWith: fn.curry(function(s, as) {
      return base.toArray(fn.flatten(as)).reduce(fn.flip(base.append), s);
    }),
    concat: fn.variadic(function(as) {
      return self.concatWith(base.mempty(as), as);
    }),
    concatMap: fn.curry(function(f, as) {
      var bs = base.toArray(as).map(fn.compose(self.flattenStrings, f)),
          cs = bs.length > 0 ? bs : as;
      return self.concatWith(base.mempty(cs), bs);
    }),
    fold: fn.curry(function(f, s, as) {
      return base.toArray(as).reduce(f, s);
    }),
    foldRight: fn.curry(function(f, s, as) {
      return base.toArray(as).reduceRight(fn.flip(f), s);
    }),
    scan: fn.curry(function(f, s, as) {
      var r = [s];
      self.fold(function(b, a) {
        return fn.tap(r.push.bind(r), f(b, a));
      }, s, as);
      return r;
    }),
    scanRight: fn.curry(function(f, s, as) {
      var r = [s];
      self.foldRight(function(a, b) {
        return fn.tap(r.unshift.bind(r), f(a, b));
      }, s, as);
      return r;
    }),
    maximum: function(as) {
      return self.fold(math.max, as[0], as);
    },
    minimum: function(as) {
      return self.fold(math.min, as[0], as);
    },
    maximumBy: fn.curry(function(c, as) {
      return self.fold(function(a, b) {
        return c(a, b) > 0 ? a : b;
      }, as[0], as);
    }),
    minimumBy: fn.curry(function(c, as) {
      return self.fold(function(a, b) {
        return c(a, b) < 0 ? a : b;
      }, as[0], as);
    }),
    sum: function(as) {
      return self.fold(math.add, 0, as);
    },
    product: function(as) {
      return self.fold(math.mul, 1, as);
    }
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:fkit@0.16.2/src/list/search", ["npm:fkit@0.16.2/src/list/base", "npm:fkit@0.16.2/src/fn", "npm:fkit@0.16.2/src/list/fold", "npm:fkit@0.16.2/src/logic", "npm:fkit@0.16.2/src/list/map"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var base = require("npm:fkit@0.16.2/src/list/base"),
      fn = require("npm:fkit@0.16.2/src/fn"),
      fold = require("npm:fkit@0.16.2/src/list/fold"),
      logic = require("npm:fkit@0.16.2/src/logic"),
      map = require("npm:fkit@0.16.2/src/list/map");
  var self;
  self = module.exports = {
    elem: fn.curry(function(a, as) {
      return as.indexOf(a) >= 0;
    }),
    elemIndex: fn.curry(function(a, as) {
      var i = as.indexOf(a);
      return (i >= 0) ? i : undefined;
    }),
    elemIndices: fn.curry(function(a, as) {
      return self.findIndices(fn.equal(a), as);
    }),
    find: fn.curry(function(p, as) {
      return base.head(self.filter(p, as));
    }),
    findIndex: fn.curry(function(p, as) {
      var n = as.length;
      for (var i = 0; i < n; i++) {
        if (p(as[i])) {
          return i;
        }
      }
      return undefined;
    }),
    findIndices: fn.curry(function(p, as) {
      var s = [],
          n = as.length;
      for (var i = 0; i < n; i++) {
        if (p(as[i])) {
          s.push(i);
        }
      }
      return s;
    }),
    filter: fn.curry(function(p, as) {
      var f = logic.branch(p, fn.id, fn.const(''));
      return base.isString(as) ? fold.concatMap(f, as) : as.filter(p);
    }),
    partition: fn.curry(function(p, as) {
      return [self.filter(p, as), self.filter(fn.compose(logic.not, p), as)];
    }),
    all: fn.curry(function(p, as) {
      return self.filter(p, as).length === as.length;
    }),
    any: fn.curry(function(p, as) {
      return self.filter(p, as).length > 0;
    }),
    isPrefixOf: fn.curry(function isPrefixOf(as, bs) {
      if (base.empty(as)) {
        return true;
      } else if (base.empty(bs)) {
        return false;
      } else {
        return base.head(as) === base.head(bs) && isPrefixOf(base.tail(as), base.tail(bs));
      }
    }),
    isSuffixOf: fn.curry(function(as, bs) {
      return self.isPrefixOf(map.reverse(as), map.reverse(bs));
    }),
    isInfixOf: fn.curry(function(as, bs) {
      return self.any(self.isPrefixOf(as), base.tails(bs));
    })
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:webfontloader@1.5.15", ["npm:webfontloader@1.5.15/webfontloader"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:webfontloader@1.5.15/webfontloader");
  global.define = __define;
  return module.exports;
});

System.register("github:jspm/nodelibs-process@0.1.1/index", ["npm:process@0.10.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = System._nodeRequire ? process : require("npm:process@0.10.1");
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactContext", ["npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/emptyObject", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var assign = require("npm:react@0.13.1/lib/Object.assign");
    var emptyObject = require("npm:react@0.13.1/lib/emptyObject");
    var warning = require("npm:react@0.13.1/lib/warning");
    var didWarn = false;
    var ReactContext = {
      current: emptyObject,
      withContext: function(newContext, scopedCallback) {
        if ("production" !== process.env.NODE_ENV) {
          ("production" !== process.env.NODE_ENV ? warning(didWarn, 'withContext is deprecated and will be removed in a future version. ' + 'Use a wrapper component with getChildContext instead.') : null);
          didWarn = true;
        }
        var result;
        var previousContext = ReactContext.current;
        ReactContext.current = assign({}, previousContext, newContext);
        try {
          result = scopedCallback();
        } finally {
          ReactContext.current = previousContext;
        }
        return result;
      }
    };
    module.exports = ReactContext;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/traverseAllChildren", ["npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/ReactFragment", "npm:react@0.13.1/lib/ReactInstanceHandles", "npm:react@0.13.1/lib/getIteratorFn", "npm:react@0.13.1/lib/invariant", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
    var ReactFragment = require("npm:react@0.13.1/lib/ReactFragment");
    var ReactInstanceHandles = require("npm:react@0.13.1/lib/ReactInstanceHandles");
    var getIteratorFn = require("npm:react@0.13.1/lib/getIteratorFn");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var warning = require("npm:react@0.13.1/lib/warning");
    var SEPARATOR = ReactInstanceHandles.SEPARATOR;
    var SUBSEPARATOR = ':';
    var userProvidedKeyEscaperLookup = {
      '=': '=0',
      '.': '=1',
      ':': '=2'
    };
    var userProvidedKeyEscapeRegex = /[=.:]/g;
    var didWarnAboutMaps = false;
    function userProvidedKeyEscaper(match) {
      return userProvidedKeyEscaperLookup[match];
    }
    function getComponentKey(component, index) {
      if (component && component.key != null) {
        return wrapUserProvidedKey(component.key);
      }
      return index.toString(36);
    }
    function escapeUserProvidedKey(text) {
      return ('' + text).replace(userProvidedKeyEscapeRegex, userProvidedKeyEscaper);
    }
    function wrapUserProvidedKey(key) {
      return '$' + escapeUserProvidedKey(key);
    }
    function traverseAllChildrenImpl(children, nameSoFar, indexSoFar, callback, traverseContext) {
      var type = typeof children;
      if (type === 'undefined' || type === 'boolean') {
        children = null;
      }
      if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
        callback(traverseContext, children, nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar, indexSoFar);
        return 1;
      }
      var child,
          nextName,
          nextIndex;
      var subtreeCount = 0;
      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          child = children[i];
          nextName = ((nameSoFar !== '' ? nameSoFar + SUBSEPARATOR : SEPARATOR) + getComponentKey(child, i));
          nextIndex = indexSoFar + subtreeCount;
          subtreeCount += traverseAllChildrenImpl(child, nextName, nextIndex, callback, traverseContext);
        }
      } else {
        var iteratorFn = getIteratorFn(children);
        if (iteratorFn) {
          var iterator = iteratorFn.call(children);
          var step;
          if (iteratorFn !== children.entries) {
            var ii = 0;
            while (!(step = iterator.next()).done) {
              child = step.value;
              nextName = ((nameSoFar !== '' ? nameSoFar + SUBSEPARATOR : SEPARATOR) + getComponentKey(child, ii++));
              nextIndex = indexSoFar + subtreeCount;
              subtreeCount += traverseAllChildrenImpl(child, nextName, nextIndex, callback, traverseContext);
            }
          } else {
            if ("production" !== process.env.NODE_ENV) {
              ("production" !== process.env.NODE_ENV ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.') : null);
              didWarnAboutMaps = true;
            }
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                child = entry[1];
                nextName = ((nameSoFar !== '' ? nameSoFar + SUBSEPARATOR : SEPARATOR) + wrapUserProvidedKey(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0));
                nextIndex = indexSoFar + subtreeCount;
                subtreeCount += traverseAllChildrenImpl(child, nextName, nextIndex, callback, traverseContext);
              }
            }
          }
        } else if (type === 'object') {
          ("production" !== process.env.NODE_ENV ? invariant(children.nodeType !== 1, 'traverseAllChildren(...): Encountered an invalid child; DOM ' + 'elements are not valid children of React components.') : invariant(children.nodeType !== 1));
          var fragment = ReactFragment.extract(children);
          for (var key in fragment) {
            if (fragment.hasOwnProperty(key)) {
              child = fragment[key];
              nextName = ((nameSoFar !== '' ? nameSoFar + SUBSEPARATOR : SEPARATOR) + wrapUserProvidedKey(key) + SUBSEPARATOR + getComponentKey(child, 0));
              nextIndex = indexSoFar + subtreeCount;
              subtreeCount += traverseAllChildrenImpl(child, nextName, nextIndex, callback, traverseContext);
            }
          }
        }
      }
      return subtreeCount;
    }
    function traverseAllChildren(children, callback, traverseContext) {
      if (children == null) {
        return 0;
      }
      return traverseAllChildrenImpl(children, '', 0, callback, traverseContext);
    }
    module.exports = traverseAllChildren;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactReconciler", ["npm:react@0.13.1/lib/ReactRef", "npm:react@0.13.1/lib/ReactElementValidator", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactRef = require("npm:react@0.13.1/lib/ReactRef");
    var ReactElementValidator = require("npm:react@0.13.1/lib/ReactElementValidator");
    function attachRefs() {
      ReactRef.attachRefs(this, this._currentElement);
    }
    var ReactReconciler = {
      mountComponent: function(internalInstance, rootID, transaction, context) {
        var markup = internalInstance.mountComponent(rootID, transaction, context);
        if ("production" !== process.env.NODE_ENV) {
          ReactElementValidator.checkAndWarnForMutatedProps(internalInstance._currentElement);
        }
        transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
        return markup;
      },
      unmountComponent: function(internalInstance) {
        ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
        internalInstance.unmountComponent();
      },
      receiveComponent: function(internalInstance, nextElement, transaction, context) {
        var prevElement = internalInstance._currentElement;
        if (nextElement === prevElement && nextElement._owner != null) {
          return ;
        }
        if ("production" !== process.env.NODE_ENV) {
          ReactElementValidator.checkAndWarnForMutatedProps(nextElement);
        }
        var refsChanged = ReactRef.shouldUpdateRefs(prevElement, nextElement);
        if (refsChanged) {
          ReactRef.detachRefs(internalInstance, prevElement);
        }
        internalInstance.receiveComponent(nextElement, transaction, context);
        if (refsChanged) {
          transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
        }
      },
      performUpdateIfNecessary: function(internalInstance, transaction) {
        internalInstance.performUpdateIfNecessary(transaction);
      }
    };
    module.exports = ReactReconciler;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/DOMPropertyOperations", ["npm:react@0.13.1/lib/DOMProperty", "npm:react@0.13.1/lib/quoteAttributeValueForBrowser", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var DOMProperty = require("npm:react@0.13.1/lib/DOMProperty");
    var quoteAttributeValueForBrowser = require("npm:react@0.13.1/lib/quoteAttributeValueForBrowser");
    var warning = require("npm:react@0.13.1/lib/warning");
    function shouldIgnoreValue(name, value) {
      return value == null || (DOMProperty.hasBooleanValue[name] && !value) || (DOMProperty.hasNumericValue[name] && isNaN(value)) || (DOMProperty.hasPositiveNumericValue[name] && (value < 1)) || (DOMProperty.hasOverloadedBooleanValue[name] && value === false);
    }
    if ("production" !== process.env.NODE_ENV) {
      var reactProps = {
        children: true,
        dangerouslySetInnerHTML: true,
        key: true,
        ref: true
      };
      var warnedProperties = {};
      var warnUnknownProperty = function(name) {
        if (reactProps.hasOwnProperty(name) && reactProps[name] || warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
          return ;
        }
        warnedProperties[name] = true;
        var lowerCasedName = name.toLowerCase();
        var standardName = (DOMProperty.isCustomAttribute(lowerCasedName) ? lowerCasedName : DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? DOMProperty.getPossibleStandardName[lowerCasedName] : null);
        ("production" !== process.env.NODE_ENV ? warning(standardName == null, 'Unknown DOM property %s. Did you mean %s?', name, standardName) : null);
      };
    }
    var DOMPropertyOperations = {
      createMarkupForID: function(id) {
        return DOMProperty.ID_ATTRIBUTE_NAME + '=' + quoteAttributeValueForBrowser(id);
      },
      createMarkupForProperty: function(name, value) {
        if (DOMProperty.isStandardName.hasOwnProperty(name) && DOMProperty.isStandardName[name]) {
          if (shouldIgnoreValue(name, value)) {
            return '';
          }
          var attributeName = DOMProperty.getAttributeName[name];
          if (DOMProperty.hasBooleanValue[name] || (DOMProperty.hasOverloadedBooleanValue[name] && value === true)) {
            return attributeName;
          }
          return attributeName + '=' + quoteAttributeValueForBrowser(value);
        } else if (DOMProperty.isCustomAttribute(name)) {
          if (value == null) {
            return '';
          }
          return name + '=' + quoteAttributeValueForBrowser(value);
        } else if ("production" !== process.env.NODE_ENV) {
          warnUnknownProperty(name);
        }
        return null;
      },
      setValueForProperty: function(node, name, value) {
        if (DOMProperty.isStandardName.hasOwnProperty(name) && DOMProperty.isStandardName[name]) {
          var mutationMethod = DOMProperty.getMutationMethod[name];
          if (mutationMethod) {
            mutationMethod(node, value);
          } else if (shouldIgnoreValue(name, value)) {
            this.deleteValueForProperty(node, name);
          } else if (DOMProperty.mustUseAttribute[name]) {
            node.setAttribute(DOMProperty.getAttributeName[name], '' + value);
          } else {
            var propName = DOMProperty.getPropertyName[name];
            if (!DOMProperty.hasSideEffects[name] || ('' + node[propName]) !== ('' + value)) {
              node[propName] = value;
            }
          }
        } else if (DOMProperty.isCustomAttribute(name)) {
          if (value == null) {
            node.removeAttribute(name);
          } else {
            node.setAttribute(name, '' + value);
          }
        } else if ("production" !== process.env.NODE_ENV) {
          warnUnknownProperty(name);
        }
      },
      deleteValueForProperty: function(node, name) {
        if (DOMProperty.isStandardName.hasOwnProperty(name) && DOMProperty.isStandardName[name]) {
          var mutationMethod = DOMProperty.getMutationMethod[name];
          if (mutationMethod) {
            mutationMethod(node, undefined);
          } else if (DOMProperty.mustUseAttribute[name]) {
            node.removeAttribute(DOMProperty.getAttributeName[name]);
          } else {
            var propName = DOMProperty.getPropertyName[name];
            var defaultValue = DOMProperty.getDefaultValueForProperty(node.nodeName, propName);
            if (!DOMProperty.hasSideEffects[name] || ('' + node[propName]) !== defaultValue) {
              node[propName] = defaultValue;
            }
          }
        } else if (DOMProperty.isCustomAttribute(name)) {
          node.removeAttribute(name);
        } else if ("production" !== process.env.NODE_ENV) {
          warnUnknownProperty(name);
        }
      }
    };
    module.exports = DOMPropertyOperations;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/CSSPropertyOperations", ["npm:react@0.13.1/lib/CSSProperty", "npm:react@0.13.1/lib/ExecutionEnvironment", "npm:react@0.13.1/lib/camelizeStyleName", "npm:react@0.13.1/lib/dangerousStyleValue", "npm:react@0.13.1/lib/hyphenateStyleName", "npm:react@0.13.1/lib/memoizeStringOnly", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var CSSProperty = require("npm:react@0.13.1/lib/CSSProperty");
    var ExecutionEnvironment = require("npm:react@0.13.1/lib/ExecutionEnvironment");
    var camelizeStyleName = require("npm:react@0.13.1/lib/camelizeStyleName");
    var dangerousStyleValue = require("npm:react@0.13.1/lib/dangerousStyleValue");
    var hyphenateStyleName = require("npm:react@0.13.1/lib/hyphenateStyleName");
    var memoizeStringOnly = require("npm:react@0.13.1/lib/memoizeStringOnly");
    var warning = require("npm:react@0.13.1/lib/warning");
    var processStyleName = memoizeStringOnly(function(styleName) {
      return hyphenateStyleName(styleName);
    });
    var styleFloatAccessor = 'cssFloat';
    if (ExecutionEnvironment.canUseDOM) {
      if (document.documentElement.style.cssFloat === undefined) {
        styleFloatAccessor = 'styleFloat';
      }
    }
    if ("production" !== process.env.NODE_ENV) {
      var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
      var badStyleValueWithSemicolonPattern = /;\s*$/;
      var warnedStyleNames = {};
      var warnedStyleValues = {};
      var warnHyphenatedStyleName = function(name) {
        if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
          return ;
        }
        warnedStyleNames[name] = true;
        ("production" !== process.env.NODE_ENV ? warning(false, 'Unsupported style property %s. Did you mean %s?', name, camelizeStyleName(name)) : null);
      };
      var warnBadVendoredStyleName = function(name) {
        if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
          return ;
        }
        warnedStyleNames[name] = true;
        ("production" !== process.env.NODE_ENV ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1)) : null);
      };
      var warnStyleValueWithSemicolon = function(name, value) {
        if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
          return ;
        }
        warnedStyleValues[value] = true;
        ("production" !== process.env.NODE_ENV ? warning(false, 'Style property values shouldn\'t contain a semicolon. ' + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, '')) : null);
      };
      var warnValidStyle = function(name, value) {
        if (name.indexOf('-') > -1) {
          warnHyphenatedStyleName(name);
        } else if (badVendoredStyleNamePattern.test(name)) {
          warnBadVendoredStyleName(name);
        } else if (badStyleValueWithSemicolonPattern.test(value)) {
          warnStyleValueWithSemicolon(name, value);
        }
      };
    }
    var CSSPropertyOperations = {
      createMarkupForStyles: function(styles) {
        var serialized = '';
        for (var styleName in styles) {
          if (!styles.hasOwnProperty(styleName)) {
            continue;
          }
          var styleValue = styles[styleName];
          if ("production" !== process.env.NODE_ENV) {
            warnValidStyle(styleName, styleValue);
          }
          if (styleValue != null) {
            serialized += processStyleName(styleName) + ':';
            serialized += dangerousStyleValue(styleName, styleValue) + ';';
          }
        }
        return serialized || null;
      },
      setValueForStyles: function(node, styles) {
        var style = node.style;
        for (var styleName in styles) {
          if (!styles.hasOwnProperty(styleName)) {
            continue;
          }
          if ("production" !== process.env.NODE_ENV) {
            warnValidStyle(styleName, styles[styleName]);
          }
          var styleValue = dangerousStyleValue(styleName, styles[styleName]);
          if (styleName === 'float') {
            styleName = styleFloatAccessor;
          }
          if (styleValue) {
            style[styleName] = styleValue;
          } else {
            var expansion = CSSProperty.shorthandPropertyExpansions[styleName];
            if (expansion) {
              for (var individualStyleName in expansion) {
                style[individualStyleName] = '';
              }
            } else {
              style[styleName] = '';
            }
          }
        }
      }
    };
    module.exports = CSSPropertyOperations;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/createNodesFromMarkup", ["npm:react@0.13.1/lib/ExecutionEnvironment", "npm:react@0.13.1/lib/createArrayFromMixed", "npm:react@0.13.1/lib/getMarkupWrap", "npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    var ExecutionEnvironment = require("npm:react@0.13.1/lib/ExecutionEnvironment");
    var createArrayFromMixed = require("npm:react@0.13.1/lib/createArrayFromMixed");
    var getMarkupWrap = require("npm:react@0.13.1/lib/getMarkupWrap");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
    var nodeNamePattern = /^\s*<(\w+)/;
    function getNodeName(markup) {
      var nodeNameMatch = markup.match(nodeNamePattern);
      return nodeNameMatch && nodeNameMatch[1].toLowerCase();
    }
    function createNodesFromMarkup(markup, handleScript) {
      var node = dummyNode;
      ("production" !== process.env.NODE_ENV ? invariant(!!dummyNode, 'createNodesFromMarkup dummy not initialized') : invariant(!!dummyNode));
      var nodeName = getNodeName(markup);
      var wrap = nodeName && getMarkupWrap(nodeName);
      if (wrap) {
        node.innerHTML = wrap[1] + markup + wrap[2];
        var wrapDepth = wrap[0];
        while (wrapDepth--) {
          node = node.lastChild;
        }
      } else {
        node.innerHTML = markup;
      }
      var scripts = node.getElementsByTagName('script');
      if (scripts.length) {
        ("production" !== process.env.NODE_ENV ? invariant(handleScript, 'createNodesFromMarkup(...): Unexpected <script> element rendered.') : invariant(handleScript));
        createArrayFromMixed(scripts).forEach(handleScript);
      }
      var nodes = createArrayFromMixed(node.childNodes);
      while (node.lastChild) {
        node.removeChild(node.lastChild);
      }
      return nodes;
    }
    module.exports = createNodesFromMarkup;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactBrowserEventEmitter", ["npm:react@0.13.1/lib/EventConstants", "npm:react@0.13.1/lib/EventPluginHub", "npm:react@0.13.1/lib/EventPluginRegistry", "npm:react@0.13.1/lib/ReactEventEmitterMixin", "npm:react@0.13.1/lib/ViewportMetrics", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/isEventSupported", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var EventConstants = require("npm:react@0.13.1/lib/EventConstants");
    var EventPluginHub = require("npm:react@0.13.1/lib/EventPluginHub");
    var EventPluginRegistry = require("npm:react@0.13.1/lib/EventPluginRegistry");
    var ReactEventEmitterMixin = require("npm:react@0.13.1/lib/ReactEventEmitterMixin");
    var ViewportMetrics = require("npm:react@0.13.1/lib/ViewportMetrics");
    var assign = require("npm:react@0.13.1/lib/Object.assign");
    var isEventSupported = require("npm:react@0.13.1/lib/isEventSupported");
    var alreadyListeningTo = {};
    var isMonitoringScrollValue = false;
    var reactTopListenersCounter = 0;
    var topEventMapping = {
      topBlur: 'blur',
      topChange: 'change',
      topClick: 'click',
      topCompositionEnd: 'compositionend',
      topCompositionStart: 'compositionstart',
      topCompositionUpdate: 'compositionupdate',
      topContextMenu: 'contextmenu',
      topCopy: 'copy',
      topCut: 'cut',
      topDoubleClick: 'dblclick',
      topDrag: 'drag',
      topDragEnd: 'dragend',
      topDragEnter: 'dragenter',
      topDragExit: 'dragexit',
      topDragLeave: 'dragleave',
      topDragOver: 'dragover',
      topDragStart: 'dragstart',
      topDrop: 'drop',
      topFocus: 'focus',
      topInput: 'input',
      topKeyDown: 'keydown',
      topKeyPress: 'keypress',
      topKeyUp: 'keyup',
      topMouseDown: 'mousedown',
      topMouseMove: 'mousemove',
      topMouseOut: 'mouseout',
      topMouseOver: 'mouseover',
      topMouseUp: 'mouseup',
      topPaste: 'paste',
      topScroll: 'scroll',
      topSelectionChange: 'selectionchange',
      topTextInput: 'textInput',
      topTouchCancel: 'touchcancel',
      topTouchEnd: 'touchend',
      topTouchMove: 'touchmove',
      topTouchStart: 'touchstart',
      topWheel: 'wheel'
    };
    var topListenersIDKey = '_reactListenersID' + String(Math.random()).slice(2);
    function getListeningForDocument(mountAt) {
      if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
        mountAt[topListenersIDKey] = reactTopListenersCounter++;
        alreadyListeningTo[mountAt[topListenersIDKey]] = {};
      }
      return alreadyListeningTo[mountAt[topListenersIDKey]];
    }
    var ReactBrowserEventEmitter = assign({}, ReactEventEmitterMixin, {
      ReactEventListener: null,
      injection: {injectReactEventListener: function(ReactEventListener) {
          ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);
          ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
        }},
      setEnabled: function(enabled) {
        if (ReactBrowserEventEmitter.ReactEventListener) {
          ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
        }
      },
      isEnabled: function() {
        return !!((ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter.ReactEventListener.isEnabled()));
      },
      listenTo: function(registrationName, contentDocumentHandle) {
        var mountAt = contentDocumentHandle;
        var isListening = getListeningForDocument(mountAt);
        var dependencies = EventPluginRegistry.registrationNameDependencies[registrationName];
        var topLevelTypes = EventConstants.topLevelTypes;
        for (var i = 0,
            l = dependencies.length; i < l; i++) {
          var dependency = dependencies[i];
          if (!((isListening.hasOwnProperty(dependency) && isListening[dependency]))) {
            if (dependency === topLevelTypes.topWheel) {
              if (isEventSupported('wheel')) {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'wheel', mountAt);
              } else if (isEventSupported('mousewheel')) {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'mousewheel', mountAt);
              } else {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'DOMMouseScroll', mountAt);
              }
            } else if (dependency === topLevelTypes.topScroll) {
              if (isEventSupported('scroll', true)) {
                ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll, 'scroll', mountAt);
              } else {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll, 'scroll', ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
              }
            } else if (dependency === topLevelTypes.topFocus || dependency === topLevelTypes.topBlur) {
              if (isEventSupported('focus', true)) {
                ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus, 'focus', mountAt);
                ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur, 'blur', mountAt);
              } else if (isEventSupported('focusin')) {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus, 'focusin', mountAt);
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur, 'focusout', mountAt);
              }
              isListening[topLevelTypes.topBlur] = true;
              isListening[topLevelTypes.topFocus] = true;
            } else if (topEventMapping.hasOwnProperty(dependency)) {
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency, topEventMapping[dependency], mountAt);
            }
            isListening[dependency] = true;
          }
        }
      },
      trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
        return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType, handlerBaseName, handle);
      },
      trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
        return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType, handlerBaseName, handle);
      },
      ensureScrollValueMonitoring: function() {
        if (!isMonitoringScrollValue) {
          var refresh = ViewportMetrics.refreshScrollValues;
          ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
          isMonitoringScrollValue = true;
        }
      },
      eventNameDispatchConfigs: EventPluginHub.eventNameDispatchConfigs,
      registrationNameModules: EventPluginHub.registrationNameModules,
      putListener: EventPluginHub.putListener,
      getListener: EventPluginHub.getListener,
      deleteListener: EventPluginHub.deleteListener,
      deleteAllListeners: EventPluginHub.deleteAllListeners
    });
    module.exports = ReactBrowserEventEmitter;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/containsNode", ["npm:react@0.13.1/lib/isTextNode"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  var isTextNode = require("npm:react@0.13.1/lib/isTextNode");
  function containsNode(outerNode, innerNode) {
    if (!outerNode || !innerNode) {
      return false;
    } else if (outerNode === innerNode) {
      return true;
    } else if (isTextNode(outerNode)) {
      return false;
    } else if (isTextNode(innerNode)) {
      return containsNode(outerNode, innerNode.parentNode);
    } else if (outerNode.contains) {
      return outerNode.contains(innerNode);
    } else if (outerNode.compareDocumentPosition) {
      return !!(outerNode.compareDocumentPosition(innerNode) & 16);
    } else {
      return false;
    }
  }
  module.exports = containsNode;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/instantiateReactComponent", ["npm:react@0.13.1/lib/ReactCompositeComponent", "npm:react@0.13.1/lib/ReactEmptyComponent", "npm:react@0.13.1/lib/ReactNativeComponent", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/invariant", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactCompositeComponent = require("npm:react@0.13.1/lib/ReactCompositeComponent");
    var ReactEmptyComponent = require("npm:react@0.13.1/lib/ReactEmptyComponent");
    var ReactNativeComponent = require("npm:react@0.13.1/lib/ReactNativeComponent");
    var assign = require("npm:react@0.13.1/lib/Object.assign");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var warning = require("npm:react@0.13.1/lib/warning");
    var ReactCompositeComponentWrapper = function() {};
    assign(ReactCompositeComponentWrapper.prototype, ReactCompositeComponent.Mixin, {_instantiateReactComponent: instantiateReactComponent});
    function isInternalComponentType(type) {
      return (typeof type === 'function' && typeof type.prototype.mountComponent === 'function' && typeof type.prototype.receiveComponent === 'function');
    }
    function instantiateReactComponent(node, parentCompositeType) {
      var instance;
      if (node === null || node === false) {
        node = ReactEmptyComponent.emptyElement;
      }
      if (typeof node === 'object') {
        var element = node;
        if ("production" !== process.env.NODE_ENV) {
          ("production" !== process.env.NODE_ENV ? warning(element && (typeof element.type === 'function' || typeof element.type === 'string'), 'Only functions or strings can be mounted as React components.') : null);
        }
        if (parentCompositeType === element.type && typeof element.type === 'string') {
          instance = ReactNativeComponent.createInternalComponent(element);
        } else if (isInternalComponentType(element.type)) {
          instance = new element.type(element);
        } else {
          instance = new ReactCompositeComponentWrapper();
        }
      } else if (typeof node === 'string' || typeof node === 'number') {
        instance = ReactNativeComponent.createInstanceForText(node);
      } else {
        ("production" !== process.env.NODE_ENV ? invariant(false, 'Encountered invalid React node of type %s', typeof node) : invariant(false));
      }
      if ("production" !== process.env.NODE_ENV) {
        ("production" !== process.env.NODE_ENV ? warning(typeof instance.construct === 'function' && typeof instance.mountComponent === 'function' && typeof instance.receiveComponent === 'function' && typeof instance.unmountComponent === 'function', 'Only React Components can be mounted.') : null);
      }
      instance.construct(node);
      instance._mountIndex = 0;
      instance._mountImage = null;
      if ("production" !== process.env.NODE_ENV) {
        instance._isOwnerNecessary = false;
        instance._warnedAboutRefsInRender = false;
      }
      if ("production" !== process.env.NODE_ENV) {
        if (Object.preventExtensions) {
          Object.preventExtensions(instance);
        }
      }
      return instance;
    }
    module.exports = instantiateReactComponent;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactMultiChild", ["npm:react@0.13.1/lib/ReactComponentEnvironment", "npm:react@0.13.1/lib/ReactMultiChildUpdateTypes", "npm:react@0.13.1/lib/ReactReconciler", "npm:react@0.13.1/lib/ReactChildReconciler", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactComponentEnvironment = require("npm:react@0.13.1/lib/ReactComponentEnvironment");
    var ReactMultiChildUpdateTypes = require("npm:react@0.13.1/lib/ReactMultiChildUpdateTypes");
    var ReactReconciler = require("npm:react@0.13.1/lib/ReactReconciler");
    var ReactChildReconciler = require("npm:react@0.13.1/lib/ReactChildReconciler");
    var updateDepth = 0;
    var updateQueue = [];
    var markupQueue = [];
    function enqueueMarkup(parentID, markup, toIndex) {
      updateQueue.push({
        parentID: parentID,
        parentNode: null,
        type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
        markupIndex: markupQueue.push(markup) - 1,
        textContent: null,
        fromIndex: null,
        toIndex: toIndex
      });
    }
    function enqueueMove(parentID, fromIndex, toIndex) {
      updateQueue.push({
        parentID: parentID,
        parentNode: null,
        type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
        markupIndex: null,
        textContent: null,
        fromIndex: fromIndex,
        toIndex: toIndex
      });
    }
    function enqueueRemove(parentID, fromIndex) {
      updateQueue.push({
        parentID: parentID,
        parentNode: null,
        type: ReactMultiChildUpdateTypes.REMOVE_NODE,
        markupIndex: null,
        textContent: null,
        fromIndex: fromIndex,
        toIndex: null
      });
    }
    function enqueueTextContent(parentID, textContent) {
      updateQueue.push({
        parentID: parentID,
        parentNode: null,
        type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
        markupIndex: null,
        textContent: textContent,
        fromIndex: null,
        toIndex: null
      });
    }
    function processQueue() {
      if (updateQueue.length) {
        ReactComponentEnvironment.processChildrenUpdates(updateQueue, markupQueue);
        clearQueue();
      }
    }
    function clearQueue() {
      updateQueue.length = 0;
      markupQueue.length = 0;
    }
    var ReactMultiChild = {Mixin: {
        mountChildren: function(nestedChildren, transaction, context) {
          var children = ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
          this._renderedChildren = children;
          var mountImages = [];
          var index = 0;
          for (var name in children) {
            if (children.hasOwnProperty(name)) {
              var child = children[name];
              var rootID = this._rootNodeID + name;
              var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
              child._mountIndex = index;
              mountImages.push(mountImage);
              index++;
            }
          }
          return mountImages;
        },
        updateTextContent: function(nextContent) {
          updateDepth++;
          var errorThrown = true;
          try {
            var prevChildren = this._renderedChildren;
            ReactChildReconciler.unmountChildren(prevChildren);
            for (var name in prevChildren) {
              if (prevChildren.hasOwnProperty(name)) {
                this._unmountChildByName(prevChildren[name], name);
              }
            }
            this.setTextContent(nextContent);
            errorThrown = false;
          } finally {
            updateDepth--;
            if (!updateDepth) {
              if (errorThrown) {
                clearQueue();
              } else {
                processQueue();
              }
            }
          }
        },
        updateChildren: function(nextNestedChildren, transaction, context) {
          updateDepth++;
          var errorThrown = true;
          try {
            this._updateChildren(nextNestedChildren, transaction, context);
            errorThrown = false;
          } finally {
            updateDepth--;
            if (!updateDepth) {
              if (errorThrown) {
                clearQueue();
              } else {
                processQueue();
              }
            }
          }
        },
        _updateChildren: function(nextNestedChildren, transaction, context) {
          var prevChildren = this._renderedChildren;
          var nextChildren = ReactChildReconciler.updateChildren(prevChildren, nextNestedChildren, transaction, context);
          this._renderedChildren = nextChildren;
          if (!nextChildren && !prevChildren) {
            return ;
          }
          var name;
          var lastIndex = 0;
          var nextIndex = 0;
          for (name in nextChildren) {
            if (!nextChildren.hasOwnProperty(name)) {
              continue;
            }
            var prevChild = prevChildren && prevChildren[name];
            var nextChild = nextChildren[name];
            if (prevChild === nextChild) {
              this.moveChild(prevChild, nextIndex, lastIndex);
              lastIndex = Math.max(prevChild._mountIndex, lastIndex);
              prevChild._mountIndex = nextIndex;
            } else {
              if (prevChild) {
                lastIndex = Math.max(prevChild._mountIndex, lastIndex);
                this._unmountChildByName(prevChild, name);
              }
              this._mountChildByNameAtIndex(nextChild, name, nextIndex, transaction, context);
            }
            nextIndex++;
          }
          for (name in prevChildren) {
            if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
              this._unmountChildByName(prevChildren[name], name);
            }
          }
        },
        unmountChildren: function() {
          var renderedChildren = this._renderedChildren;
          ReactChildReconciler.unmountChildren(renderedChildren);
          this._renderedChildren = null;
        },
        moveChild: function(child, toIndex, lastIndex) {
          if (child._mountIndex < lastIndex) {
            enqueueMove(this._rootNodeID, child._mountIndex, toIndex);
          }
        },
        createChild: function(child, mountImage) {
          enqueueMarkup(this._rootNodeID, mountImage, child._mountIndex);
        },
        removeChild: function(child) {
          enqueueRemove(this._rootNodeID, child._mountIndex);
        },
        setTextContent: function(textContent) {
          enqueueTextContent(this._rootNodeID, textContent);
        },
        _mountChildByNameAtIndex: function(child, name, index, transaction, context) {
          var rootID = this._rootNodeID + name;
          var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
          child._mountIndex = index;
          this.createChild(child, mountImage);
        },
        _unmountChildByName: function(child, name) {
          this.removeChild(child);
          child._mountIndex = null;
        }
      }};
    module.exports = ReactMultiChild;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/SyntheticCompositionEvent", ["npm:react@0.13.1/lib/SyntheticEvent"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var SyntheticEvent = require("npm:react@0.13.1/lib/SyntheticEvent");
  var CompositionEventInterface = {data: null};
  function SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent) {
    SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
  }
  SyntheticEvent.augmentClass(SyntheticCompositionEvent, CompositionEventInterface);
  module.exports = SyntheticCompositionEvent;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/EnterLeaveEventPlugin", ["npm:react@0.13.1/lib/EventConstants", "npm:react@0.13.1/lib/EventPropagators", "npm:react@0.13.1/lib/SyntheticMouseEvent", "npm:react@0.13.1/lib/ReactMount", "npm:react@0.13.1/lib/keyOf"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var EventConstants = require("npm:react@0.13.1/lib/EventConstants");
  var EventPropagators = require("npm:react@0.13.1/lib/EventPropagators");
  var SyntheticMouseEvent = require("npm:react@0.13.1/lib/SyntheticMouseEvent");
  var ReactMount = require("npm:react@0.13.1/lib/ReactMount");
  var keyOf = require("npm:react@0.13.1/lib/keyOf");
  var topLevelTypes = EventConstants.topLevelTypes;
  var getFirstReactDOM = ReactMount.getFirstReactDOM;
  var eventTypes = {
    mouseEnter: {
      registrationName: keyOf({onMouseEnter: null}),
      dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
    },
    mouseLeave: {
      registrationName: keyOf({onMouseLeave: null}),
      dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
    }
  };
  var extractedEvents = [null, null];
  var EnterLeaveEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
      if (topLevelType === topLevelTypes.topMouseOver && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
        return null;
      }
      if (topLevelType !== topLevelTypes.topMouseOut && topLevelType !== topLevelTypes.topMouseOver) {
        return null;
      }
      var win;
      if (topLevelTarget.window === topLevelTarget) {
        win = topLevelTarget;
      } else {
        var doc = topLevelTarget.ownerDocument;
        if (doc) {
          win = doc.defaultView || doc.parentWindow;
        } else {
          win = window;
        }
      }
      var from,
          to;
      if (topLevelType === topLevelTypes.topMouseOut) {
        from = topLevelTarget;
        to = getFirstReactDOM(nativeEvent.relatedTarget || nativeEvent.toElement) || win;
      } else {
        from = win;
        to = topLevelTarget;
      }
      if (from === to) {
        return null;
      }
      var fromID = from ? ReactMount.getID(from) : '';
      var toID = to ? ReactMount.getID(to) : '';
      var leave = SyntheticMouseEvent.getPooled(eventTypes.mouseLeave, fromID, nativeEvent);
      leave.type = 'mouseleave';
      leave.target = from;
      leave.relatedTarget = to;
      var enter = SyntheticMouseEvent.getPooled(eventTypes.mouseEnter, toID, nativeEvent);
      enter.type = 'mouseenter';
      enter.target = to;
      enter.relatedTarget = from;
      EventPropagators.accumulateEnterLeaveDispatches(leave, enter, fromID, toID);
      extractedEvents[0] = leave;
      extractedEvents[1] = enter;
      return extractedEvents;
    }
  };
  module.exports = EnterLeaveEventPlugin;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactDOMButton", ["npm:react@0.13.1/lib/AutoFocusMixin", "npm:react@0.13.1/lib/ReactBrowserComponentMixin", "npm:react@0.13.1/lib/ReactClass", "npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/keyMirror"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var AutoFocusMixin = require("npm:react@0.13.1/lib/AutoFocusMixin");
  var ReactBrowserComponentMixin = require("npm:react@0.13.1/lib/ReactBrowserComponentMixin");
  var ReactClass = require("npm:react@0.13.1/lib/ReactClass");
  var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
  var keyMirror = require("npm:react@0.13.1/lib/keyMirror");
  var button = ReactElement.createFactory('button');
  var mouseListenerNames = keyMirror({
    onClick: true,
    onDoubleClick: true,
    onMouseDown: true,
    onMouseMove: true,
    onMouseUp: true,
    onClickCapture: true,
    onDoubleClickCapture: true,
    onMouseDownCapture: true,
    onMouseMoveCapture: true,
    onMouseUpCapture: true
  });
  var ReactDOMButton = ReactClass.createClass({
    displayName: 'ReactDOMButton',
    tagName: 'BUTTON',
    mixins: [AutoFocusMixin, ReactBrowserComponentMixin],
    render: function() {
      var props = {};
      for (var key in this.props) {
        if (this.props.hasOwnProperty(key) && (!this.props.disabled || !mouseListenerNames[key])) {
          props[key] = this.props[key];
        }
      }
      return button(props, this.props.children);
    }
  });
  module.exports = ReactDOMButton;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactDOMInput", ["npm:react@0.13.1/lib/AutoFocusMixin", "npm:react@0.13.1/lib/DOMPropertyOperations", "npm:react@0.13.1/lib/LinkedValueUtils", "npm:react@0.13.1/lib/ReactBrowserComponentMixin", "npm:react@0.13.1/lib/ReactClass", "npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/ReactMount", "npm:react@0.13.1/lib/ReactUpdates", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var AutoFocusMixin = require("npm:react@0.13.1/lib/AutoFocusMixin");
    var DOMPropertyOperations = require("npm:react@0.13.1/lib/DOMPropertyOperations");
    var LinkedValueUtils = require("npm:react@0.13.1/lib/LinkedValueUtils");
    var ReactBrowserComponentMixin = require("npm:react@0.13.1/lib/ReactBrowserComponentMixin");
    var ReactClass = require("npm:react@0.13.1/lib/ReactClass");
    var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
    var ReactMount = require("npm:react@0.13.1/lib/ReactMount");
    var ReactUpdates = require("npm:react@0.13.1/lib/ReactUpdates");
    var assign = require("npm:react@0.13.1/lib/Object.assign");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var input = ReactElement.createFactory('input');
    var instancesByReactID = {};
    function forceUpdateIfMounted() {
      if (this.isMounted()) {
        this.forceUpdate();
      }
    }
    var ReactDOMInput = ReactClass.createClass({
      displayName: 'ReactDOMInput',
      tagName: 'INPUT',
      mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],
      getInitialState: function() {
        var defaultValue = this.props.defaultValue;
        return {
          initialChecked: this.props.defaultChecked || false,
          initialValue: defaultValue != null ? defaultValue : null
        };
      },
      render: function() {
        var props = assign({}, this.props);
        props.defaultChecked = null;
        props.defaultValue = null;
        var value = LinkedValueUtils.getValue(this);
        props.value = value != null ? value : this.state.initialValue;
        var checked = LinkedValueUtils.getChecked(this);
        props.checked = checked != null ? checked : this.state.initialChecked;
        props.onChange = this._handleChange;
        return input(props, this.props.children);
      },
      componentDidMount: function() {
        var id = ReactMount.getID(this.getDOMNode());
        instancesByReactID[id] = this;
      },
      componentWillUnmount: function() {
        var rootNode = this.getDOMNode();
        var id = ReactMount.getID(rootNode);
        delete instancesByReactID[id];
      },
      componentDidUpdate: function(prevProps, prevState, prevContext) {
        var rootNode = this.getDOMNode();
        if (this.props.checked != null) {
          DOMPropertyOperations.setValueForProperty(rootNode, 'checked', this.props.checked || false);
        }
        var value = LinkedValueUtils.getValue(this);
        if (value != null) {
          DOMPropertyOperations.setValueForProperty(rootNode, 'value', '' + value);
        }
      },
      _handleChange: function(event) {
        var returnValue;
        var onChange = LinkedValueUtils.getOnChange(this);
        if (onChange) {
          returnValue = onChange.call(this, event);
        }
        ReactUpdates.asap(forceUpdateIfMounted, this);
        var name = this.props.name;
        if (this.props.type === 'radio' && name != null) {
          var rootNode = this.getDOMNode();
          var queryRoot = rootNode;
          while (queryRoot.parentNode) {
            queryRoot = queryRoot.parentNode;
          }
          var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');
          for (var i = 0,
              groupLen = group.length; i < groupLen; i++) {
            var otherNode = group[i];
            if (otherNode === rootNode || otherNode.form !== rootNode.form) {
              continue;
            }
            var otherID = ReactMount.getID(otherNode);
            ("production" !== process.env.NODE_ENV ? invariant(otherID, 'ReactDOMInput: Mixing React and non-React radio inputs with the ' + 'same `name` is not supported.') : invariant(otherID));
            var otherInstance = instancesByReactID[otherID];
            ("production" !== process.env.NODE_ENV ? invariant(otherInstance, 'ReactDOMInput: Unknown radio button ID %s.', otherID) : invariant(otherInstance));
            ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
          }
        }
        return returnValue;
      }
    });
    module.exports = ReactDOMInput;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactInputSelection", ["npm:react@0.13.1/lib/ReactDOMSelection", "npm:react@0.13.1/lib/containsNode", "npm:react@0.13.1/lib/focusNode", "npm:react@0.13.1/lib/getActiveElement"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ReactDOMSelection = require("npm:react@0.13.1/lib/ReactDOMSelection");
  var containsNode = require("npm:react@0.13.1/lib/containsNode");
  var focusNode = require("npm:react@0.13.1/lib/focusNode");
  var getActiveElement = require("npm:react@0.13.1/lib/getActiveElement");
  function isInDocument(node) {
    return containsNode(document.documentElement, node);
  }
  var ReactInputSelection = {
    hasSelectionCapabilities: function(elem) {
      return elem && (((elem.nodeName === 'INPUT' && elem.type === 'text') || elem.nodeName === 'TEXTAREA' || elem.contentEditable === 'true'));
    },
    getSelectionInformation: function() {
      var focusedElem = getActiveElement();
      return {
        focusedElem: focusedElem,
        selectionRange: ReactInputSelection.hasSelectionCapabilities(focusedElem) ? ReactInputSelection.getSelection(focusedElem) : null
      };
    },
    restoreSelection: function(priorSelectionInformation) {
      var curFocusedElem = getActiveElement();
      var priorFocusedElem = priorSelectionInformation.focusedElem;
      var priorSelectionRange = priorSelectionInformation.selectionRange;
      if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
        if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
          ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
        }
        focusNode(priorFocusedElem);
      }
    },
    getSelection: function(input) {
      var selection;
      if ('selectionStart' in input) {
        selection = {
          start: input.selectionStart,
          end: input.selectionEnd
        };
      } else if (document.selection && input.nodeName === 'INPUT') {
        var range = document.selection.createRange();
        if (range.parentElement() === input) {
          selection = {
            start: -range.moveStart('character', -input.value.length),
            end: -range.moveEnd('character', -input.value.length)
          };
        }
      } else {
        selection = ReactDOMSelection.getOffsets(input);
      }
      return selection || {
        start: 0,
        end: 0
      };
    },
    setSelection: function(input, offsets) {
      var start = offsets.start;
      var end = offsets.end;
      if (typeof end === 'undefined') {
        end = start;
      }
      if ('selectionStart' in input) {
        input.selectionStart = start;
        input.selectionEnd = Math.min(end, input.value.length);
      } else if (document.selection && input.nodeName === 'INPUT') {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveStart('character', start);
        range.moveEnd('character', end - start);
        range.select();
      } else {
        ReactDOMSelection.setOffsets(input, offsets);
      }
    }
  };
  module.exports = ReactInputSelection;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/SimpleEventPlugin", ["npm:react@0.13.1/lib/EventConstants", "npm:react@0.13.1/lib/EventPluginUtils", "npm:react@0.13.1/lib/EventPropagators", "npm:react@0.13.1/lib/SyntheticClipboardEvent", "npm:react@0.13.1/lib/SyntheticEvent", "npm:react@0.13.1/lib/SyntheticFocusEvent", "npm:react@0.13.1/lib/SyntheticKeyboardEvent", "npm:react@0.13.1/lib/SyntheticMouseEvent", "npm:react@0.13.1/lib/SyntheticDragEvent", "npm:react@0.13.1/lib/SyntheticTouchEvent", "npm:react@0.13.1/lib/SyntheticUIEvent", "npm:react@0.13.1/lib/SyntheticWheelEvent", "npm:react@0.13.1/lib/getEventCharCode", "npm:react@0.13.1/lib/invariant", "npm:react@0.13.1/lib/keyOf", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var EventConstants = require("npm:react@0.13.1/lib/EventConstants");
    var EventPluginUtils = require("npm:react@0.13.1/lib/EventPluginUtils");
    var EventPropagators = require("npm:react@0.13.1/lib/EventPropagators");
    var SyntheticClipboardEvent = require("npm:react@0.13.1/lib/SyntheticClipboardEvent");
    var SyntheticEvent = require("npm:react@0.13.1/lib/SyntheticEvent");
    var SyntheticFocusEvent = require("npm:react@0.13.1/lib/SyntheticFocusEvent");
    var SyntheticKeyboardEvent = require("npm:react@0.13.1/lib/SyntheticKeyboardEvent");
    var SyntheticMouseEvent = require("npm:react@0.13.1/lib/SyntheticMouseEvent");
    var SyntheticDragEvent = require("npm:react@0.13.1/lib/SyntheticDragEvent");
    var SyntheticTouchEvent = require("npm:react@0.13.1/lib/SyntheticTouchEvent");
    var SyntheticUIEvent = require("npm:react@0.13.1/lib/SyntheticUIEvent");
    var SyntheticWheelEvent = require("npm:react@0.13.1/lib/SyntheticWheelEvent");
    var getEventCharCode = require("npm:react@0.13.1/lib/getEventCharCode");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var keyOf = require("npm:react@0.13.1/lib/keyOf");
    var warning = require("npm:react@0.13.1/lib/warning");
    var topLevelTypes = EventConstants.topLevelTypes;
    var eventTypes = {
      blur: {phasedRegistrationNames: {
          bubbled: keyOf({onBlur: true}),
          captured: keyOf({onBlurCapture: true})
        }},
      click: {phasedRegistrationNames: {
          bubbled: keyOf({onClick: true}),
          captured: keyOf({onClickCapture: true})
        }},
      contextMenu: {phasedRegistrationNames: {
          bubbled: keyOf({onContextMenu: true}),
          captured: keyOf({onContextMenuCapture: true})
        }},
      copy: {phasedRegistrationNames: {
          bubbled: keyOf({onCopy: true}),
          captured: keyOf({onCopyCapture: true})
        }},
      cut: {phasedRegistrationNames: {
          bubbled: keyOf({onCut: true}),
          captured: keyOf({onCutCapture: true})
        }},
      doubleClick: {phasedRegistrationNames: {
          bubbled: keyOf({onDoubleClick: true}),
          captured: keyOf({onDoubleClickCapture: true})
        }},
      drag: {phasedRegistrationNames: {
          bubbled: keyOf({onDrag: true}),
          captured: keyOf({onDragCapture: true})
        }},
      dragEnd: {phasedRegistrationNames: {
          bubbled: keyOf({onDragEnd: true}),
          captured: keyOf({onDragEndCapture: true})
        }},
      dragEnter: {phasedRegistrationNames: {
          bubbled: keyOf({onDragEnter: true}),
          captured: keyOf({onDragEnterCapture: true})
        }},
      dragExit: {phasedRegistrationNames: {
          bubbled: keyOf({onDragExit: true}),
          captured: keyOf({onDragExitCapture: true})
        }},
      dragLeave: {phasedRegistrationNames: {
          bubbled: keyOf({onDragLeave: true}),
          captured: keyOf({onDragLeaveCapture: true})
        }},
      dragOver: {phasedRegistrationNames: {
          bubbled: keyOf({onDragOver: true}),
          captured: keyOf({onDragOverCapture: true})
        }},
      dragStart: {phasedRegistrationNames: {
          bubbled: keyOf({onDragStart: true}),
          captured: keyOf({onDragStartCapture: true})
        }},
      drop: {phasedRegistrationNames: {
          bubbled: keyOf({onDrop: true}),
          captured: keyOf({onDropCapture: true})
        }},
      focus: {phasedRegistrationNames: {
          bubbled: keyOf({onFocus: true}),
          captured: keyOf({onFocusCapture: true})
        }},
      input: {phasedRegistrationNames: {
          bubbled: keyOf({onInput: true}),
          captured: keyOf({onInputCapture: true})
        }},
      keyDown: {phasedRegistrationNames: {
          bubbled: keyOf({onKeyDown: true}),
          captured: keyOf({onKeyDownCapture: true})
        }},
      keyPress: {phasedRegistrationNames: {
          bubbled: keyOf({onKeyPress: true}),
          captured: keyOf({onKeyPressCapture: true})
        }},
      keyUp: {phasedRegistrationNames: {
          bubbled: keyOf({onKeyUp: true}),
          captured: keyOf({onKeyUpCapture: true})
        }},
      load: {phasedRegistrationNames: {
          bubbled: keyOf({onLoad: true}),
          captured: keyOf({onLoadCapture: true})
        }},
      error: {phasedRegistrationNames: {
          bubbled: keyOf({onError: true}),
          captured: keyOf({onErrorCapture: true})
        }},
      mouseDown: {phasedRegistrationNames: {
          bubbled: keyOf({onMouseDown: true}),
          captured: keyOf({onMouseDownCapture: true})
        }},
      mouseMove: {phasedRegistrationNames: {
          bubbled: keyOf({onMouseMove: true}),
          captured: keyOf({onMouseMoveCapture: true})
        }},
      mouseOut: {phasedRegistrationNames: {
          bubbled: keyOf({onMouseOut: true}),
          captured: keyOf({onMouseOutCapture: true})
        }},
      mouseOver: {phasedRegistrationNames: {
          bubbled: keyOf({onMouseOver: true}),
          captured: keyOf({onMouseOverCapture: true})
        }},
      mouseUp: {phasedRegistrationNames: {
          bubbled: keyOf({onMouseUp: true}),
          captured: keyOf({onMouseUpCapture: true})
        }},
      paste: {phasedRegistrationNames: {
          bubbled: keyOf({onPaste: true}),
          captured: keyOf({onPasteCapture: true})
        }},
      reset: {phasedRegistrationNames: {
          bubbled: keyOf({onReset: true}),
          captured: keyOf({onResetCapture: true})
        }},
      scroll: {phasedRegistrationNames: {
          bubbled: keyOf({onScroll: true}),
          captured: keyOf({onScrollCapture: true})
        }},
      submit: {phasedRegistrationNames: {
          bubbled: keyOf({onSubmit: true}),
          captured: keyOf({onSubmitCapture: true})
        }},
      touchCancel: {phasedRegistrationNames: {
          bubbled: keyOf({onTouchCancel: true}),
          captured: keyOf({onTouchCancelCapture: true})
        }},
      touchEnd: {phasedRegistrationNames: {
          bubbled: keyOf({onTouchEnd: true}),
          captured: keyOf({onTouchEndCapture: true})
        }},
      touchMove: {phasedRegistrationNames: {
          bubbled: keyOf({onTouchMove: true}),
          captured: keyOf({onTouchMoveCapture: true})
        }},
      touchStart: {phasedRegistrationNames: {
          bubbled: keyOf({onTouchStart: true}),
          captured: keyOf({onTouchStartCapture: true})
        }},
      wheel: {phasedRegistrationNames: {
          bubbled: keyOf({onWheel: true}),
          captured: keyOf({onWheelCapture: true})
        }}
    };
    var topLevelEventsToDispatchConfig = {
      topBlur: eventTypes.blur,
      topClick: eventTypes.click,
      topContextMenu: eventTypes.contextMenu,
      topCopy: eventTypes.copy,
      topCut: eventTypes.cut,
      topDoubleClick: eventTypes.doubleClick,
      topDrag: eventTypes.drag,
      topDragEnd: eventTypes.dragEnd,
      topDragEnter: eventTypes.dragEnter,
      topDragExit: eventTypes.dragExit,
      topDragLeave: eventTypes.dragLeave,
      topDragOver: eventTypes.dragOver,
      topDragStart: eventTypes.dragStart,
      topDrop: eventTypes.drop,
      topError: eventTypes.error,
      topFocus: eventTypes.focus,
      topInput: eventTypes.input,
      topKeyDown: eventTypes.keyDown,
      topKeyPress: eventTypes.keyPress,
      topKeyUp: eventTypes.keyUp,
      topLoad: eventTypes.load,
      topMouseDown: eventTypes.mouseDown,
      topMouseMove: eventTypes.mouseMove,
      topMouseOut: eventTypes.mouseOut,
      topMouseOver: eventTypes.mouseOver,
      topMouseUp: eventTypes.mouseUp,
      topPaste: eventTypes.paste,
      topReset: eventTypes.reset,
      topScroll: eventTypes.scroll,
      topSubmit: eventTypes.submit,
      topTouchCancel: eventTypes.touchCancel,
      topTouchEnd: eventTypes.touchEnd,
      topTouchMove: eventTypes.touchMove,
      topTouchStart: eventTypes.touchStart,
      topWheel: eventTypes.wheel
    };
    for (var type in topLevelEventsToDispatchConfig) {
      topLevelEventsToDispatchConfig[type].dependencies = [type];
    }
    var SimpleEventPlugin = {
      eventTypes: eventTypes,
      executeDispatch: function(event, listener, domID) {
        var returnValue = EventPluginUtils.executeDispatch(event, listener, domID);
        ("production" !== process.env.NODE_ENV ? warning(typeof returnValue !== 'boolean', 'Returning `false` from an event handler is deprecated and will be ' + 'ignored in a future release. Instead, manually call ' + 'e.stopPropagation() or e.preventDefault(), as appropriate.') : null);
        if (returnValue === false) {
          event.stopPropagation();
          event.preventDefault();
        }
      },
      extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
        var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
        if (!dispatchConfig) {
          return null;
        }
        var EventConstructor;
        switch (topLevelType) {
          case topLevelTypes.topInput:
          case topLevelTypes.topLoad:
          case topLevelTypes.topError:
          case topLevelTypes.topReset:
          case topLevelTypes.topSubmit:
            EventConstructor = SyntheticEvent;
            break;
          case topLevelTypes.topKeyPress:
            if (getEventCharCode(nativeEvent) === 0) {
              return null;
            }
          case topLevelTypes.topKeyDown:
          case topLevelTypes.topKeyUp:
            EventConstructor = SyntheticKeyboardEvent;
            break;
          case topLevelTypes.topBlur:
          case topLevelTypes.topFocus:
            EventConstructor = SyntheticFocusEvent;
            break;
          case topLevelTypes.topClick:
            if (nativeEvent.button === 2) {
              return null;
            }
          case topLevelTypes.topContextMenu:
          case topLevelTypes.topDoubleClick:
          case topLevelTypes.topMouseDown:
          case topLevelTypes.topMouseMove:
          case topLevelTypes.topMouseOut:
          case topLevelTypes.topMouseOver:
          case topLevelTypes.topMouseUp:
            EventConstructor = SyntheticMouseEvent;
            break;
          case topLevelTypes.topDrag:
          case topLevelTypes.topDragEnd:
          case topLevelTypes.topDragEnter:
          case topLevelTypes.topDragExit:
          case topLevelTypes.topDragLeave:
          case topLevelTypes.topDragOver:
          case topLevelTypes.topDragStart:
          case topLevelTypes.topDrop:
            EventConstructor = SyntheticDragEvent;
            break;
          case topLevelTypes.topTouchCancel:
          case topLevelTypes.topTouchEnd:
          case topLevelTypes.topTouchMove:
          case topLevelTypes.topTouchStart:
            EventConstructor = SyntheticTouchEvent;
            break;
          case topLevelTypes.topScroll:
            EventConstructor = SyntheticUIEvent;
            break;
          case topLevelTypes.topWheel:
            EventConstructor = SyntheticWheelEvent;
            break;
          case topLevelTypes.topCopy:
          case topLevelTypes.topCut:
          case topLevelTypes.topPaste:
            EventConstructor = SyntheticClipboardEvent;
            break;
        }
        ("production" !== process.env.NODE_ENV ? invariant(EventConstructor, 'SimpleEventPlugin: Unhandled event type, `%s`.', topLevelType) : invariant(EventConstructor));
        var event = EventConstructor.getPooled(dispatchConfig, topLevelTargetID, nativeEvent);
        EventPropagators.accumulateTwoPhaseDispatches(event);
        return event;
      }
    };
    module.exports = SimpleEventPlugin;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactDefaultPerf", ["npm:react@0.13.1/lib/DOMProperty", "npm:react@0.13.1/lib/ReactDefaultPerfAnalysis", "npm:react@0.13.1/lib/ReactMount", "npm:react@0.13.1/lib/ReactPerf", "npm:react@0.13.1/lib/performanceNow"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var DOMProperty = require("npm:react@0.13.1/lib/DOMProperty");
  var ReactDefaultPerfAnalysis = require("npm:react@0.13.1/lib/ReactDefaultPerfAnalysis");
  var ReactMount = require("npm:react@0.13.1/lib/ReactMount");
  var ReactPerf = require("npm:react@0.13.1/lib/ReactPerf");
  var performanceNow = require("npm:react@0.13.1/lib/performanceNow");
  function roundFloat(val) {
    return Math.floor(val * 100) / 100;
  }
  function addValue(obj, key, val) {
    obj[key] = (obj[key] || 0) + val;
  }
  var ReactDefaultPerf = {
    _allMeasurements: [],
    _mountStack: [0],
    _injected: false,
    start: function() {
      if (!ReactDefaultPerf._injected) {
        ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);
      }
      ReactDefaultPerf._allMeasurements.length = 0;
      ReactPerf.enableMeasure = true;
    },
    stop: function() {
      ReactPerf.enableMeasure = false;
    },
    getLastMeasurements: function() {
      return ReactDefaultPerf._allMeasurements;
    },
    printExclusive: function(measurements) {
      measurements = measurements || ReactDefaultPerf._allMeasurements;
      var summary = ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);
      console.table(summary.map(function(item) {
        return {
          'Component class name': item.componentName,
          'Total inclusive time (ms)': roundFloat(item.inclusive),
          'Exclusive mount time (ms)': roundFloat(item.exclusive),
          'Exclusive render time (ms)': roundFloat(item.render),
          'Mount time per instance (ms)': roundFloat(item.exclusive / item.count),
          'Render time per instance (ms)': roundFloat(item.render / item.count),
          'Instances': item.count
        };
      }));
    },
    printInclusive: function(measurements) {
      measurements = measurements || ReactDefaultPerf._allMeasurements;
      var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);
      console.table(summary.map(function(item) {
        return {
          'Owner > component': item.componentName,
          'Inclusive time (ms)': roundFloat(item.time),
          'Instances': item.count
        };
      }));
      console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
    },
    getMeasurementsSummaryMap: function(measurements) {
      var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements, true);
      return summary.map(function(item) {
        return {
          'Owner > component': item.componentName,
          'Wasted time (ms)': item.time,
          'Instances': item.count
        };
      });
    },
    printWasted: function(measurements) {
      measurements = measurements || ReactDefaultPerf._allMeasurements;
      console.table(ReactDefaultPerf.getMeasurementsSummaryMap(measurements));
      console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
    },
    printDOM: function(measurements) {
      measurements = measurements || ReactDefaultPerf._allMeasurements;
      var summary = ReactDefaultPerfAnalysis.getDOMSummary(measurements);
      console.table(summary.map(function(item) {
        var result = {};
        result[DOMProperty.ID_ATTRIBUTE_NAME] = item.id;
        result['type'] = item.type;
        result['args'] = JSON.stringify(item.args);
        return result;
      }));
      console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
    },
    _recordWrite: function(id, fnName, totalTime, args) {
      var writes = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].writes;
      writes[id] = writes[id] || [];
      writes[id].push({
        type: fnName,
        time: totalTime,
        args: args
      });
    },
    measure: function(moduleName, fnName, func) {
      return function() {
        for (var args = [],
            $__0 = 0,
            $__1 = arguments.length; $__0 < $__1; $__0++)
          args.push(arguments[$__0]);
        var totalTime;
        var rv;
        var start;
        if (fnName === '_renderNewRootComponent' || fnName === 'flushBatchedUpdates') {
          ReactDefaultPerf._allMeasurements.push({
            exclusive: {},
            inclusive: {},
            render: {},
            counts: {},
            writes: {},
            displayNames: {},
            totalTime: 0
          });
          start = performanceNow();
          rv = func.apply(this, args);
          ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].totalTime = performanceNow() - start;
          return rv;
        } else if (fnName === '_mountImageIntoNode' || moduleName === 'ReactDOMIDOperations') {
          start = performanceNow();
          rv = func.apply(this, args);
          totalTime = performanceNow() - start;
          if (fnName === '_mountImageIntoNode') {
            var mountID = ReactMount.getID(args[1]);
            ReactDefaultPerf._recordWrite(mountID, fnName, totalTime, args[0]);
          } else if (fnName === 'dangerouslyProcessChildrenUpdates') {
            args[0].forEach(function(update) {
              var writeArgs = {};
              if (update.fromIndex !== null) {
                writeArgs.fromIndex = update.fromIndex;
              }
              if (update.toIndex !== null) {
                writeArgs.toIndex = update.toIndex;
              }
              if (update.textContent !== null) {
                writeArgs.textContent = update.textContent;
              }
              if (update.markupIndex !== null) {
                writeArgs.markup = args[1][update.markupIndex];
              }
              ReactDefaultPerf._recordWrite(update.parentID, update.type, totalTime, writeArgs);
            });
          } else {
            ReactDefaultPerf._recordWrite(args[0], fnName, totalTime, Array.prototype.slice.call(args, 1));
          }
          return rv;
        } else if (moduleName === 'ReactCompositeComponent' && (((fnName === 'mountComponent' || fnName === 'updateComponent' || fnName === '_renderValidatedComponent')))) {
          if (typeof this._currentElement.type === 'string') {
            return func.apply(this, args);
          }
          var rootNodeID = fnName === 'mountComponent' ? args[0] : this._rootNodeID;
          var isRender = fnName === '_renderValidatedComponent';
          var isMount = fnName === 'mountComponent';
          var mountStack = ReactDefaultPerf._mountStack;
          var entry = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1];
          if (isRender) {
            addValue(entry.counts, rootNodeID, 1);
          } else if (isMount) {
            mountStack.push(0);
          }
          start = performanceNow();
          rv = func.apply(this, args);
          totalTime = performanceNow() - start;
          if (isRender) {
            addValue(entry.render, rootNodeID, totalTime);
          } else if (isMount) {
            var subMountTime = mountStack.pop();
            mountStack[mountStack.length - 1] += totalTime;
            addValue(entry.exclusive, rootNodeID, totalTime - subMountTime);
            addValue(entry.inclusive, rootNodeID, totalTime);
          } else {
            addValue(entry.inclusive, rootNodeID, totalTime);
          }
          entry.displayNames[rootNodeID] = {
            current: this.getName(),
            owner: this._currentElement._owner ? this._currentElement._owner.getName() : '<root>'
          };
          return rv;
        } else {
          return func.apply(this, args);
        }
      };
    }
  };
  module.exports = ReactDefaultPerf;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/cloneWithProps", ["npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/ReactPropTransferer", "npm:react@0.13.1/lib/keyOf", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
    var ReactPropTransferer = require("npm:react@0.13.1/lib/ReactPropTransferer");
    var keyOf = require("npm:react@0.13.1/lib/keyOf");
    var warning = require("npm:react@0.13.1/lib/warning");
    var CHILDREN_PROP = keyOf({children: null});
    function cloneWithProps(child, props) {
      if ("production" !== process.env.NODE_ENV) {
        ("production" !== process.env.NODE_ENV ? warning(!child.ref, 'You are calling cloneWithProps() on a child with a ref. This is ' + 'dangerous because you\'re creating a new child which will not be ' + 'added as a ref to its parent.') : null);
      }
      var newProps = ReactPropTransferer.mergeProps(props, child.props);
      if (!newProps.hasOwnProperty(CHILDREN_PROP) && child.props.hasOwnProperty(CHILDREN_PROP)) {
        newProps.children = child.props.children;
      }
      return ReactElement.createElement(child.type, newProps);
    }
    module.exports = cloneWithProps;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:flummox@3.5.0/lib/Store", ["npm:eventemitter3@0.1.6", "npm:object-assign@2.0.0"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var _interopRequire = function(obj) {
    return obj && obj.__esModule ? obj["default"] : obj;
  };
  var _createClass = (function() {
    function defineProperties(target, props) {
      for (var key in props) {
        var prop = props[key];
        prop.configurable = true;
        if (prop.value)
          prop.writable = true;
      }
      Object.defineProperties(target, props);
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _inherits = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }});
    if (superClass)
      subClass.__proto__ = superClass;
  };
  var _classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  var EventEmitter = _interopRequire(require("npm:eventemitter3@0.1.6"));
  var assign = _interopRequire(require("npm:object-assign@2.0.0"));
  var Store = (function(_EventEmitter) {
    function Store() {
      _classCallCheck(this, Store);
      this.state = null;
      this._handlers = {};
      this._asyncHandlers = {};
      this._catchAllHandlers = [];
      this._catchAllAsyncHandlers = {
        begin: [],
        success: [],
        failure: []
      };
    }
    _inherits(Store, _EventEmitter);
    _createClass(Store, {
      setState: {value: function setState(newState) {
          if (typeof newState === "function") {
            var prevState = this._isHandlingDispatch ? this._pendingState : this.state;
            newState = newState(prevState);
          }
          if (this._isHandlingDispatch) {
            this._pendingState = this._assignState(this._pendingState, newState);
            this._emitChangeAfterHandlingDispatch = true;
          } else {
            this.state = this._assignState(this.state, newState);
            this.emit("change");
          }
        }},
      replaceState: {value: function replaceState(newState) {
          if (this._isHandlingDispatch) {
            this._pendingState = this._assignState(undefined, newState);
            this._emitChangeAfterHandlingDispatch = true;
          } else {
            this.state = this._assignState(undefined, newState);
            this.emit("change");
          }
        }},
      getStateAsObject: {value: function getStateAsObject() {
          return this.state;
        }},
      _assignState: {value: function _assignState() {
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return (this.constructor.assignState || Store.assignState).apply(undefined, args);
        }},
      forceUpdate: {value: function forceUpdate() {
          if (this._isHandlingDispatch) {
            this._emitChangeAfterHandlingDispatch = true;
          } else {
            this.emit("change");
          }
        }},
      register: {value: function register(actionId, handler) {
          actionId = ensureActionId(actionId);
          if (typeof handler !== "function") {
            return ;
          }
          this._handlers[actionId] = handler.bind(this);
        }},
      registerAsync: {value: function registerAsync(actionId, beginHandler, successHandler, failureHandler) {
          actionId = ensureActionId(actionId);
          var asyncHandlers = this._bindAsyncHandlers({
            begin: beginHandler,
            success: successHandler,
            failure: failureHandler
          });
          this._asyncHandlers[actionId] = asyncHandlers;
        }},
      registerAll: {value: function registerAll(handler) {
          if (typeof handler !== "function") {
            return ;
          }
          this._catchAllHandlers.push(handler.bind(this));
        }},
      registerAllAsync: {value: function registerAllAsync(beginHandler, successHandler, failureHandler) {
          var _this = this;
          var asyncHandlers = this._bindAsyncHandlers({
            begin: beginHandler,
            success: successHandler,
            failure: failureHandler
          });
          Object.keys(asyncHandlers).forEach(function(key) {
            _this._catchAllAsyncHandlers[key].push(asyncHandlers[key]);
          });
        }},
      _bindAsyncHandlers: {value: function _bindAsyncHandlers(asyncHandlers) {
          for (var key in asyncHandlers) {
            if (!asyncHandlers.hasOwnProperty(key))
              continue;
            var handler = asyncHandlers[key];
            if (typeof handler === "function") {
              asyncHandlers[key] = handler.bind(this);
            } else {
              delete asyncHandlers[key];
            }
          }
          return asyncHandlers;
        }},
      waitFor: {value: function waitFor(tokensOrStores) {
          this._waitFor(tokensOrStores);
        }},
      handler: {value: function handler(payload) {
          var body = payload.body;
          var actionId = payload.actionId;
          var _async = payload.async;
          var actionArgs = payload.actionArgs;
          var error = payload.error;
          var _allHandlers = this._catchAllHandlers;
          var _handler = this._handlers[actionId];
          var _allAsyncHandlers = this._catchAllAsyncHandlers[_async];
          var _asyncHandler = this._asyncHandlers[actionId] && this._asyncHandlers[actionId][_async];
          if (_async) {
            var beginOrFailureHandlers = _allAsyncHandlers.concat([_asyncHandler]);
            switch (_async) {
              case "begin":
                this._performHandler(beginOrFailureHandlers, actionArgs);
                return ;
              case "failure":
                this._performHandler(beginOrFailureHandlers, [error]);
                return ;
              case "success":
                this._performHandler(_allAsyncHandlers.concat([_asyncHandler || _handler]), [body]);
                return ;
              default:
                return ;
            }
          }
          this._performHandler(_allHandlers.concat([_handler]), [body]);
        }},
      _performHandler: {value: function _performHandler(_handlers, args) {
          this._isHandlingDispatch = true;
          this._pendingState = this._assignState(undefined, this.state);
          this._emitChangeAfterHandlingDispatch = false;
          try {
            this._performHandlers(_handlers, args);
          } finally {
            if (this._emitChangeAfterHandlingDispatch) {
              this.state = this._pendingState;
              this.emit("change");
            }
            this._isHandlingDispatch = false;
            this._pendingState = undefined;
            this._emitChangeAfterHandlingDispatch = false;
          }
        }},
      _performHandlers: {value: function _performHandlers(_handlers, args) {
          _handlers.forEach((function(_handler) {
            if (typeof _handler !== "function")
              return ;
            _handler.apply(this, args);
          }).bind(this));
        }}
    }, {assignState: {value: function assignState(oldState, newState) {
          return assign({}, oldState, newState);
        }}});
    return Store;
  })(EventEmitter);
  module.exports = Store;
  function ensureActionId(actionOrActionId) {
    return typeof actionOrActionId === "function" ? actionOrActionId._id : actionOrActionId;
  }
  global.define = __define;
  return module.exports;
});

System.register("npm:flummox@3.5.0/lib/Actions", ["npm:uniqueid@0.1.0", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    "use strict";
    var _interopRequire = function(obj) {
      return obj && obj.__esModule ? obj["default"] : obj;
    };
    var _createClass = (function() {
      function defineProperties(target, props) {
        for (var key in props) {
          var prop = props[key];
          prop.configurable = true;
          if (prop.value)
            prop.writable = true;
        }
        Object.defineProperties(target, props);
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    })();
    var _classCallCheck = function(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    var uniqueId = _interopRequire(require("npm:uniqueid@0.1.0"));
    var Actions = (function() {
      function Actions() {
        _classCallCheck(this, Actions);
        this._baseId = uniqueId();
        var methodNames = this._getActionMethodNames();
        for (var i = 0; i < methodNames.length; i++) {
          var methodName = methodNames[i];
          this._wrapAction(methodName);
        }
        this.getConstants = this.getActionIds;
      }
      _createClass(Actions, {
        getActionIds: {value: function getActionIds() {
            var _this = this;
            return this._getActionMethodNames().reduce(function(result, actionName) {
              result[actionName] = _this[actionName]._id;
              return result;
            }, {});
          }},
        _getActionMethodNames: {value: function _getActionMethodNames(instance) {
            var _this = this;
            return Object.getOwnPropertyNames(this.constructor.prototype).filter(function(name) {
              return name !== "constructor" && typeof _this[name] === "function";
            });
          }},
        _wrapAction: {value: function _wrapAction(methodName) {
            var _this = this;
            var originalMethod = this[methodName];
            var actionId = this._createActionId(methodName);
            var action = function() {
              for (var _len = arguments.length,
                  args = Array(_len),
                  _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              var body = originalMethod.apply(_this, args);
              if (isPromise(body)) {
                var promise = body;
                _this._dispatchAsync(actionId, promise, args, methodName);
              } else {
                _this._dispatch(actionId, body, args, methodName);
              }
              return body;
            };
            action._id = actionId;
            this[methodName] = action;
          }},
        _createActionId: {value: function _createActionId(methodName) {
            return "" + this._baseId + "-" + methodName;
          }},
        _dispatch: {value: function _dispatch(actionId, body, args, methodName) {
            if (typeof this.dispatch === "function") {
              if (typeof body !== "undefined") {
                this.dispatch(actionId, body, args);
              }
            } else {
              if (process.env.NODE_ENV !== "production") {
                console.warn("You've attempted to perform the action " + ("" + this.constructor.name + "#" + methodName + ", but it hasn't been added ") + "to a Flux instance.");
              }
            }
            return body;
          }},
        _dispatchAsync: {value: function _dispatchAsync(actionId, promise, args, methodName) {
            if (typeof this.dispatchAsync === "function") {
              this.dispatchAsync(actionId, promise, args);
            } else {
              if (process.env.NODE_ENV !== "production") {
                console.warn("You've attempted to perform the asynchronous action " + ("" + this.constructor.name + "#" + methodName + ", but it hasn't been added ") + "to a Flux instance.");
              }
            }
          }}
      });
      return Actions;
    })();
    module.exports = Actions;
    function isPromise(value) {
      return value && typeof value.then === "function";
    }
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:flux@2.0.1/index", ["npm:flux@2.0.1/lib/Dispatcher"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports.Dispatcher = require("npm:flux@2.0.1/lib/Dispatcher");
  global.define = __define;
  return module.exports;
});

System.register("github:jspm/nodelibs-events@0.1.0/index", ["npm:events-browserify@0.0.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = System._nodeRequire ? System._nodeRequire('events') : require("npm:events-browserify@0.0.1");
  global.define = __define;
  return module.exports;
});

System.register("npm:fkit@0.16.2/src/list/build", ["npm:fkit@0.16.2/src/list/base", "npm:fkit@0.16.2/src/fn", "npm:fkit@0.16.2/src/list/fold", "npm:fkit@0.16.2/src/math", "npm:fkit@0.16.2/src/list/sublist"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var base = require("npm:fkit@0.16.2/src/list/base"),
      fn = require("npm:fkit@0.16.2/src/fn"),
      fold = require("npm:fkit@0.16.2/src/list/fold"),
      math = require("npm:fkit@0.16.2/src/math"),
      sublist = require("npm:fkit@0.16.2/src/list/sublist");
  var self;
  self = module.exports = {
    array: function(n) {
      return Array.apply(null, Array(n));
    },
    string: function(n) {
      return self.array(n + 1).join(' ');
    },
    pair: fn.curry(function(a, b) {
      return [a, b];
    }),
    range: fn.curry(function(a, n) {
      return self.array(n).map(function(_, i) {
        return a + i;
      });
    }),
    replicate: fn.curry(function(n, a) {
      var as = base.isString(a) ? self.string(n) : self.array(n);
      return fold.concatMap(function() {
        return [a];
      }, as);
    }),
    sample: fn.curry(function(n, as) {
      return sublist.take(n, self.shuffle(as));
    }),
    shuffle: function(as) {
      var i = -1,
          r = self.array(as.length),
          bs = fold.fold(f, r, as),
          s = base.isString(as) ? '' : [];
      return fold.concatWith(s, bs);
      function f(b, a) {
        var j = math.randomInt(0, ++i);
        b[i] = b[j];
        b[j] = a;
        return b;
      }
    }
  };
  global.define = __define;
  return module.exports;
});

System.register("github:jspm/nodelibs-process@0.1.1", ["github:jspm/nodelibs-process@0.1.1/index"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:jspm/nodelibs-process@0.1.1/index");
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactElement", ["npm:react@0.13.1/lib/ReactContext", "npm:react@0.13.1/lib/ReactCurrentOwner", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactContext = require("npm:react@0.13.1/lib/ReactContext");
    var ReactCurrentOwner = require("npm:react@0.13.1/lib/ReactCurrentOwner");
    var assign = require("npm:react@0.13.1/lib/Object.assign");
    var warning = require("npm:react@0.13.1/lib/warning");
    var RESERVED_PROPS = {
      key: true,
      ref: true
    };
    function defineWarningProperty(object, key) {
      Object.defineProperty(object, key, {
        configurable: false,
        enumerable: true,
        get: function() {
          if (!this._store) {
            return null;
          }
          return this._store[key];
        },
        set: function(value) {
          ("production" !== process.env.NODE_ENV ? warning(false, 'Don\'t set the %s property of the React element. Instead, ' + 'specify the correct value when initially creating the element.', key) : null);
          this._store[key] = value;
        }
      });
    }
    var useMutationMembrane = false;
    function defineMutationMembrane(prototype) {
      try {
        var pseudoFrozenProperties = {props: true};
        for (var key in pseudoFrozenProperties) {
          defineWarningProperty(prototype, key);
        }
        useMutationMembrane = true;
      } catch (x) {}
    }
    var ReactElement = function(type, key, ref, owner, context, props) {
      this.type = type;
      this.key = key;
      this.ref = ref;
      this._owner = owner;
      this._context = context;
      if ("production" !== process.env.NODE_ENV) {
        this._store = {
          props: props,
          originalProps: assign({}, props)
        };
        try {
          Object.defineProperty(this._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true
          });
        } catch (x) {}
        this._store.validated = false;
        if (useMutationMembrane) {
          Object.freeze(this);
          return ;
        }
      }
      this.props = props;
    };
    ReactElement.prototype = {_isReactElement: true};
    if ("production" !== process.env.NODE_ENV) {
      defineMutationMembrane(ReactElement.prototype);
    }
    ReactElement.createElement = function(type, config, children) {
      var propName;
      var props = {};
      var key = null;
      var ref = null;
      if (config != null) {
        ref = config.ref === undefined ? null : config.ref;
        key = config.key === undefined ? null : '' + config.key;
        for (propName in config) {
          if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      }
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
        props.children = childArray;
      }
      if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;
        for (propName in defaultProps) {
          if (typeof props[propName] === 'undefined') {
            props[propName] = defaultProps[propName];
          }
        }
      }
      return new ReactElement(type, key, ref, ReactCurrentOwner.current, ReactContext.current, props);
    };
    ReactElement.createFactory = function(type) {
      var factory = ReactElement.createElement.bind(null, type);
      factory.type = type;
      return factory;
    };
    ReactElement.cloneAndReplaceProps = function(oldElement, newProps) {
      var newElement = new ReactElement(oldElement.type, oldElement.key, oldElement.ref, oldElement._owner, oldElement._context, newProps);
      if ("production" !== process.env.NODE_ENV) {
        newElement._store.validated = oldElement._store.validated;
      }
      return newElement;
    };
    ReactElement.cloneElement = function(element, config, children) {
      var propName;
      var props = assign({}, element.props);
      var key = element.key;
      var ref = element.ref;
      var owner = element._owner;
      if (config != null) {
        if (config.ref !== undefined) {
          ref = config.ref;
          owner = ReactCurrentOwner.current;
        }
        if (config.key !== undefined) {
          key = '' + config.key;
        }
        for (propName in config) {
          if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      }
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
        props.children = childArray;
      }
      return new ReactElement(element.type, key, ref, owner, element._context, props);
    };
    ReactElement.isValidElement = function(object) {
      var isElement = !!(object && object._isReactElement);
      return isElement;
    };
    module.exports = ReactElement;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactUpdates", ["npm:react@0.13.1/lib/CallbackQueue", "npm:react@0.13.1/lib/PooledClass", "npm:react@0.13.1/lib/ReactCurrentOwner", "npm:react@0.13.1/lib/ReactPerf", "npm:react@0.13.1/lib/ReactReconciler", "npm:react@0.13.1/lib/Transaction", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/invariant", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var CallbackQueue = require("npm:react@0.13.1/lib/CallbackQueue");
    var PooledClass = require("npm:react@0.13.1/lib/PooledClass");
    var ReactCurrentOwner = require("npm:react@0.13.1/lib/ReactCurrentOwner");
    var ReactPerf = require("npm:react@0.13.1/lib/ReactPerf");
    var ReactReconciler = require("npm:react@0.13.1/lib/ReactReconciler");
    var Transaction = require("npm:react@0.13.1/lib/Transaction");
    var assign = require("npm:react@0.13.1/lib/Object.assign");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var warning = require("npm:react@0.13.1/lib/warning");
    var dirtyComponents = [];
    var asapCallbackQueue = CallbackQueue.getPooled();
    var asapEnqueued = false;
    var batchingStrategy = null;
    function ensureInjected() {
      ("production" !== process.env.NODE_ENV ? invariant(ReactUpdates.ReactReconcileTransaction && batchingStrategy, 'ReactUpdates: must inject a reconcile transaction class and batching ' + 'strategy') : invariant(ReactUpdates.ReactReconcileTransaction && batchingStrategy));
    }
    var NESTED_UPDATES = {
      initialize: function() {
        this.dirtyComponentsLength = dirtyComponents.length;
      },
      close: function() {
        if (this.dirtyComponentsLength !== dirtyComponents.length) {
          dirtyComponents.splice(0, this.dirtyComponentsLength);
          flushBatchedUpdates();
        } else {
          dirtyComponents.length = 0;
        }
      }
    };
    var UPDATE_QUEUEING = {
      initialize: function() {
        this.callbackQueue.reset();
      },
      close: function() {
        this.callbackQueue.notifyAll();
      }
    };
    var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];
    function ReactUpdatesFlushTransaction() {
      this.reinitializeTransaction();
      this.dirtyComponentsLength = null;
      this.callbackQueue = CallbackQueue.getPooled();
      this.reconcileTransaction = ReactUpdates.ReactReconcileTransaction.getPooled();
    }
    assign(ReactUpdatesFlushTransaction.prototype, Transaction.Mixin, {
      getTransactionWrappers: function() {
        return TRANSACTION_WRAPPERS;
      },
      destructor: function() {
        this.dirtyComponentsLength = null;
        CallbackQueue.release(this.callbackQueue);
        this.callbackQueue = null;
        ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
        this.reconcileTransaction = null;
      },
      perform: function(method, scope, a) {
        return Transaction.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, method, scope, a);
      }
    });
    PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);
    function batchedUpdates(callback, a, b, c, d) {
      ensureInjected();
      batchingStrategy.batchedUpdates(callback, a, b, c, d);
    }
    function mountOrderComparator(c1, c2) {
      return c1._mountOrder - c2._mountOrder;
    }
    function runBatchedUpdates(transaction) {
      var len = transaction.dirtyComponentsLength;
      ("production" !== process.env.NODE_ENV ? invariant(len === dirtyComponents.length, 'Expected flush transaction\'s stored dirty-components length (%s) to ' + 'match dirty-components array length (%s).', len, dirtyComponents.length) : invariant(len === dirtyComponents.length));
      dirtyComponents.sort(mountOrderComparator);
      for (var i = 0; i < len; i++) {
        var component = dirtyComponents[i];
        var callbacks = component._pendingCallbacks;
        component._pendingCallbacks = null;
        ReactReconciler.performUpdateIfNecessary(component, transaction.reconcileTransaction);
        if (callbacks) {
          for (var j = 0; j < callbacks.length; j++) {
            transaction.callbackQueue.enqueue(callbacks[j], component.getPublicInstance());
          }
        }
      }
    }
    var flushBatchedUpdates = function() {
      while (dirtyComponents.length || asapEnqueued) {
        if (dirtyComponents.length) {
          var transaction = ReactUpdatesFlushTransaction.getPooled();
          transaction.perform(runBatchedUpdates, null, transaction);
          ReactUpdatesFlushTransaction.release(transaction);
        }
        if (asapEnqueued) {
          asapEnqueued = false;
          var queue = asapCallbackQueue;
          asapCallbackQueue = CallbackQueue.getPooled();
          queue.notifyAll();
          CallbackQueue.release(queue);
        }
      }
    };
    flushBatchedUpdates = ReactPerf.measure('ReactUpdates', 'flushBatchedUpdates', flushBatchedUpdates);
    function enqueueUpdate(component) {
      ensureInjected();
      ("production" !== process.env.NODE_ENV ? warning(ReactCurrentOwner.current == null, 'enqueueUpdate(): Render methods should be a pure function of props ' + 'and state; triggering nested component updates from render is not ' + 'allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate.') : null);
      if (!batchingStrategy.isBatchingUpdates) {
        batchingStrategy.batchedUpdates(enqueueUpdate, component);
        return ;
      }
      dirtyComponents.push(component);
    }
    function asap(callback, context) {
      ("production" !== process.env.NODE_ENV ? invariant(batchingStrategy.isBatchingUpdates, 'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where' + 'updates are not being batched.') : invariant(batchingStrategy.isBatchingUpdates));
      asapCallbackQueue.enqueue(callback, context);
      asapEnqueued = true;
    }
    var ReactUpdatesInjection = {
      injectReconcileTransaction: function(ReconcileTransaction) {
        ("production" !== process.env.NODE_ENV ? invariant(ReconcileTransaction, 'ReactUpdates: must provide a reconcile transaction class') : invariant(ReconcileTransaction));
        ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
      },
      injectBatchingStrategy: function(_batchingStrategy) {
        ("production" !== process.env.NODE_ENV ? invariant(_batchingStrategy, 'ReactUpdates: must provide a batching strategy') : invariant(_batchingStrategy));
        ("production" !== process.env.NODE_ENV ? invariant(typeof _batchingStrategy.batchedUpdates === 'function', 'ReactUpdates: must provide a batchedUpdates() function') : invariant(typeof _batchingStrategy.batchedUpdates === 'function'));
        ("production" !== process.env.NODE_ENV ? invariant(typeof _batchingStrategy.isBatchingUpdates === 'boolean', 'ReactUpdates: must provide an isBatchingUpdates boolean attribute') : invariant(typeof _batchingStrategy.isBatchingUpdates === 'boolean'));
        batchingStrategy = _batchingStrategy;
      }
    };
    var ReactUpdates = {
      ReactReconcileTransaction: null,
      batchedUpdates: batchedUpdates,
      enqueueUpdate: enqueueUpdate,
      flushBatchedUpdates: flushBatchedUpdates,
      injection: ReactUpdatesInjection,
      asap: asap
    };
    module.exports = ReactUpdates;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/Danger", ["npm:react@0.13.1/lib/ExecutionEnvironment", "npm:react@0.13.1/lib/createNodesFromMarkup", "npm:react@0.13.1/lib/emptyFunction", "npm:react@0.13.1/lib/getMarkupWrap", "npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ExecutionEnvironment = require("npm:react@0.13.1/lib/ExecutionEnvironment");
    var createNodesFromMarkup = require("npm:react@0.13.1/lib/createNodesFromMarkup");
    var emptyFunction = require("npm:react@0.13.1/lib/emptyFunction");
    var getMarkupWrap = require("npm:react@0.13.1/lib/getMarkupWrap");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var OPEN_TAG_NAME_EXP = /^(<[^ \/>]+)/;
    var RESULT_INDEX_ATTR = 'data-danger-index';
    function getNodeName(markup) {
      return markup.substring(1, markup.indexOf(' '));
    }
    var Danger = {
      dangerouslyRenderMarkup: function(markupList) {
        ("production" !== process.env.NODE_ENV ? invariant(ExecutionEnvironment.canUseDOM, 'dangerouslyRenderMarkup(...): Cannot render markup in a worker ' + 'thread. Make sure `window` and `document` are available globally ' + 'before requiring React when unit testing or use ' + 'React.renderToString for server rendering.') : invariant(ExecutionEnvironment.canUseDOM));
        var nodeName;
        var markupByNodeName = {};
        for (var i = 0; i < markupList.length; i++) {
          ("production" !== process.env.NODE_ENV ? invariant(markupList[i], 'dangerouslyRenderMarkup(...): Missing markup.') : invariant(markupList[i]));
          nodeName = getNodeName(markupList[i]);
          nodeName = getMarkupWrap(nodeName) ? nodeName : '*';
          markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
          markupByNodeName[nodeName][i] = markupList[i];
        }
        var resultList = [];
        var resultListAssignmentCount = 0;
        for (nodeName in markupByNodeName) {
          if (!markupByNodeName.hasOwnProperty(nodeName)) {
            continue;
          }
          var markupListByNodeName = markupByNodeName[nodeName];
          var resultIndex;
          for (resultIndex in markupListByNodeName) {
            if (markupListByNodeName.hasOwnProperty(resultIndex)) {
              var markup = markupListByNodeName[resultIndex];
              markupListByNodeName[resultIndex] = markup.replace(OPEN_TAG_NAME_EXP, '$1 ' + RESULT_INDEX_ATTR + '="' + resultIndex + '" ');
            }
          }
          var renderNodes = createNodesFromMarkup(markupListByNodeName.join(''), emptyFunction);
          for (var j = 0; j < renderNodes.length; ++j) {
            var renderNode = renderNodes[j];
            if (renderNode.hasAttribute && renderNode.hasAttribute(RESULT_INDEX_ATTR)) {
              resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR);
              renderNode.removeAttribute(RESULT_INDEX_ATTR);
              ("production" !== process.env.NODE_ENV ? invariant(!resultList.hasOwnProperty(resultIndex), 'Danger: Assigning to an already-occupied result index.') : invariant(!resultList.hasOwnProperty(resultIndex)));
              resultList[resultIndex] = renderNode;
              resultListAssignmentCount += 1;
            } else if ("production" !== process.env.NODE_ENV) {
              console.error('Danger: Discarding unexpected node:', renderNode);
            }
          }
        }
        ("production" !== process.env.NODE_ENV ? invariant(resultListAssignmentCount === resultList.length, 'Danger: Did not assign to every index of resultList.') : invariant(resultListAssignmentCount === resultList.length));
        ("production" !== process.env.NODE_ENV ? invariant(resultList.length === markupList.length, 'Danger: Expected markup to render %s nodes, but rendered %s.', markupList.length, resultList.length) : invariant(resultList.length === markupList.length));
        return resultList;
      },
      dangerouslyReplaceNodeWithMarkup: function(oldChild, markup) {
        ("production" !== process.env.NODE_ENV ? invariant(ExecutionEnvironment.canUseDOM, 'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a ' + 'worker thread. Make sure `window` and `document` are available ' + 'globally before requiring React when unit testing or use ' + 'React.renderToString for server rendering.') : invariant(ExecutionEnvironment.canUseDOM));
        ("production" !== process.env.NODE_ENV ? invariant(markup, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.') : invariant(markup));
        ("production" !== process.env.NODE_ENV ? invariant(oldChild.tagName.toLowerCase() !== 'html', 'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the ' + '<html> node. This is because browser quirks make this unreliable ' + 'and/or slow. If you want to render to the root you must use ' + 'server rendering. See React.renderToString().') : invariant(oldChild.tagName.toLowerCase() !== 'html'));
        var newChild = createNodesFromMarkup(markup, emptyFunction)[0];
        oldChild.parentNode.replaceChild(newChild, oldChild);
      }
    };
    module.exports = Danger;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactMount", ["npm:react@0.13.1/lib/DOMProperty", "npm:react@0.13.1/lib/ReactBrowserEventEmitter", "npm:react@0.13.1/lib/ReactCurrentOwner", "npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/ReactElementValidator", "npm:react@0.13.1/lib/ReactEmptyComponent", "npm:react@0.13.1/lib/ReactInstanceHandles", "npm:react@0.13.1/lib/ReactInstanceMap", "npm:react@0.13.1/lib/ReactMarkupChecksum", "npm:react@0.13.1/lib/ReactPerf", "npm:react@0.13.1/lib/ReactReconciler", "npm:react@0.13.1/lib/ReactUpdateQueue", "npm:react@0.13.1/lib/ReactUpdates", "npm:react@0.13.1/lib/emptyObject", "npm:react@0.13.1/lib/containsNode", "npm:react@0.13.1/lib/getReactRootElementInContainer", "npm:react@0.13.1/lib/instantiateReactComponent", "npm:react@0.13.1/lib/invariant", "npm:react@0.13.1/lib/setInnerHTML", "npm:react@0.13.1/lib/shouldUpdateReactComponent", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var DOMProperty = require("npm:react@0.13.1/lib/DOMProperty");
    var ReactBrowserEventEmitter = require("npm:react@0.13.1/lib/ReactBrowserEventEmitter");
    var ReactCurrentOwner = require("npm:react@0.13.1/lib/ReactCurrentOwner");
    var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
    var ReactElementValidator = require("npm:react@0.13.1/lib/ReactElementValidator");
    var ReactEmptyComponent = require("npm:react@0.13.1/lib/ReactEmptyComponent");
    var ReactInstanceHandles = require("npm:react@0.13.1/lib/ReactInstanceHandles");
    var ReactInstanceMap = require("npm:react@0.13.1/lib/ReactInstanceMap");
    var ReactMarkupChecksum = require("npm:react@0.13.1/lib/ReactMarkupChecksum");
    var ReactPerf = require("npm:react@0.13.1/lib/ReactPerf");
    var ReactReconciler = require("npm:react@0.13.1/lib/ReactReconciler");
    var ReactUpdateQueue = require("npm:react@0.13.1/lib/ReactUpdateQueue");
    var ReactUpdates = require("npm:react@0.13.1/lib/ReactUpdates");
    var emptyObject = require("npm:react@0.13.1/lib/emptyObject");
    var containsNode = require("npm:react@0.13.1/lib/containsNode");
    var getReactRootElementInContainer = require("npm:react@0.13.1/lib/getReactRootElementInContainer");
    var instantiateReactComponent = require("npm:react@0.13.1/lib/instantiateReactComponent");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var setInnerHTML = require("npm:react@0.13.1/lib/setInnerHTML");
    var shouldUpdateReactComponent = require("npm:react@0.13.1/lib/shouldUpdateReactComponent");
    var warning = require("npm:react@0.13.1/lib/warning");
    var SEPARATOR = ReactInstanceHandles.SEPARATOR;
    var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
    var nodeCache = {};
    var ELEMENT_NODE_TYPE = 1;
    var DOC_NODE_TYPE = 9;
    var instancesByReactRootID = {};
    var containersByReactRootID = {};
    if ("production" !== process.env.NODE_ENV) {
      var rootElementsByReactRootID = {};
    }
    var findComponentRootReusableArray = [];
    function firstDifferenceIndex(string1, string2) {
      var minLen = Math.min(string1.length, string2.length);
      for (var i = 0; i < minLen; i++) {
        if (string1.charAt(i) !== string2.charAt(i)) {
          return i;
        }
      }
      return string1.length === string2.length ? -1 : minLen;
    }
    function getReactRootID(container) {
      var rootElement = getReactRootElementInContainer(container);
      return rootElement && ReactMount.getID(rootElement);
    }
    function getID(node) {
      var id = internalGetID(node);
      if (id) {
        if (nodeCache.hasOwnProperty(id)) {
          var cached = nodeCache[id];
          if (cached !== node) {
            ("production" !== process.env.NODE_ENV ? invariant(!isValid(cached, id), 'ReactMount: Two valid but unequal nodes with the same `%s`: %s', ATTR_NAME, id) : invariant(!isValid(cached, id)));
            nodeCache[id] = node;
          }
        } else {
          nodeCache[id] = node;
        }
      }
      return id;
    }
    function internalGetID(node) {
      return node && node.getAttribute && node.getAttribute(ATTR_NAME) || '';
    }
    function setID(node, id) {
      var oldID = internalGetID(node);
      if (oldID !== id) {
        delete nodeCache[oldID];
      }
      node.setAttribute(ATTR_NAME, id);
      nodeCache[id] = node;
    }
    function getNode(id) {
      if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
        nodeCache[id] = ReactMount.findReactNodeByID(id);
      }
      return nodeCache[id];
    }
    function getNodeFromInstance(instance) {
      var id = ReactInstanceMap.get(instance)._rootNodeID;
      if (ReactEmptyComponent.isNullComponentID(id)) {
        return null;
      }
      if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
        nodeCache[id] = ReactMount.findReactNodeByID(id);
      }
      return nodeCache[id];
    }
    function isValid(node, id) {
      if (node) {
        ("production" !== process.env.NODE_ENV ? invariant(internalGetID(node) === id, 'ReactMount: Unexpected modification of `%s`', ATTR_NAME) : invariant(internalGetID(node) === id));
        var container = ReactMount.findReactContainerForID(id);
        if (container && containsNode(container, node)) {
          return true;
        }
      }
      return false;
    }
    function purgeID(id) {
      delete nodeCache[id];
    }
    var deepestNodeSoFar = null;
    function findDeepestCachedAncestorImpl(ancestorID) {
      var ancestor = nodeCache[ancestorID];
      if (ancestor && isValid(ancestor, ancestorID)) {
        deepestNodeSoFar = ancestor;
      } else {
        return false;
      }
    }
    function findDeepestCachedAncestor(targetID) {
      deepestNodeSoFar = null;
      ReactInstanceHandles.traverseAncestors(targetID, findDeepestCachedAncestorImpl);
      var foundNode = deepestNodeSoFar;
      deepestNodeSoFar = null;
      return foundNode;
    }
    function mountComponentIntoNode(componentInstance, rootID, container, transaction, shouldReuseMarkup) {
      var markup = ReactReconciler.mountComponent(componentInstance, rootID, transaction, emptyObject);
      componentInstance._isTopLevel = true;
      ReactMount._mountImageIntoNode(markup, container, shouldReuseMarkup);
    }
    function batchedMountComponentIntoNode(componentInstance, rootID, container, shouldReuseMarkup) {
      var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
      transaction.perform(mountComponentIntoNode, null, componentInstance, rootID, container, transaction, shouldReuseMarkup);
      ReactUpdates.ReactReconcileTransaction.release(transaction);
    }
    var ReactMount = {
      _instancesByReactRootID: instancesByReactRootID,
      scrollMonitor: function(container, renderCallback) {
        renderCallback();
      },
      _updateRootComponent: function(prevComponent, nextElement, container, callback) {
        if ("production" !== process.env.NODE_ENV) {
          ReactElementValidator.checkAndWarnForMutatedProps(nextElement);
        }
        ReactMount.scrollMonitor(container, function() {
          ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement);
          if (callback) {
            ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
          }
        });
        if ("production" !== process.env.NODE_ENV) {
          rootElementsByReactRootID[getReactRootID(container)] = getReactRootElementInContainer(container);
        }
        return prevComponent;
      },
      _registerComponent: function(nextComponent, container) {
        ("production" !== process.env.NODE_ENV ? invariant(container && ((container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE)), '_registerComponent(...): Target container is not a DOM element.') : invariant(container && ((container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE))));
        ReactBrowserEventEmitter.ensureScrollValueMonitoring();
        var reactRootID = ReactMount.registerContainer(container);
        instancesByReactRootID[reactRootID] = nextComponent;
        return reactRootID;
      },
      _renderNewRootComponent: function(nextElement, container, shouldReuseMarkup) {
        ("production" !== process.env.NODE_ENV ? warning(ReactCurrentOwner.current == null, '_renderNewRootComponent(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from ' + 'render is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate.') : null);
        var componentInstance = instantiateReactComponent(nextElement, null);
        var reactRootID = ReactMount._registerComponent(componentInstance, container);
        ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, componentInstance, reactRootID, container, shouldReuseMarkup);
        if ("production" !== process.env.NODE_ENV) {
          rootElementsByReactRootID[reactRootID] = getReactRootElementInContainer(container);
        }
        return componentInstance;
      },
      render: function(nextElement, container, callback) {
        ("production" !== process.env.NODE_ENV ? invariant(ReactElement.isValidElement(nextElement), 'React.render(): Invalid component element.%s', (typeof nextElement === 'string' ? ' Instead of passing an element string, make sure to instantiate ' + 'it by passing it to React.createElement.' : typeof nextElement === 'function' ? ' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.' : nextElement != null && nextElement.props !== undefined ? ' This may be caused by unintentionally loading two independent ' + 'copies of React.' : '')) : invariant(ReactElement.isValidElement(nextElement)));
        var prevComponent = instancesByReactRootID[getReactRootID(container)];
        if (prevComponent) {
          var prevElement = prevComponent._currentElement;
          if (shouldUpdateReactComponent(prevElement, nextElement)) {
            return ReactMount._updateRootComponent(prevComponent, nextElement, container, callback).getPublicInstance();
          } else {
            ReactMount.unmountComponentAtNode(container);
          }
        }
        var reactRootElement = getReactRootElementInContainer(container);
        var containerHasReactMarkup = reactRootElement && ReactMount.isRenderedByReact(reactRootElement);
        if ("production" !== process.env.NODE_ENV) {
          if (!containerHasReactMarkup || reactRootElement.nextSibling) {
            var rootElementSibling = reactRootElement;
            while (rootElementSibling) {
              if (ReactMount.isRenderedByReact(rootElementSibling)) {
                ("production" !== process.env.NODE_ENV ? warning(false, 'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.') : null);
                break;
              }
              rootElementSibling = rootElementSibling.nextSibling;
            }
          }
        }
        var shouldReuseMarkup = containerHasReactMarkup && !prevComponent;
        var component = ReactMount._renderNewRootComponent(nextElement, container, shouldReuseMarkup).getPublicInstance();
        if (callback) {
          callback.call(component);
        }
        return component;
      },
      constructAndRenderComponent: function(constructor, props, container) {
        var element = ReactElement.createElement(constructor, props);
        return ReactMount.render(element, container);
      },
      constructAndRenderComponentByID: function(constructor, props, id) {
        var domNode = document.getElementById(id);
        ("production" !== process.env.NODE_ENV ? invariant(domNode, 'Tried to get element with id of "%s" but it is not present on the page.', id) : invariant(domNode));
        return ReactMount.constructAndRenderComponent(constructor, props, domNode);
      },
      registerContainer: function(container) {
        var reactRootID = getReactRootID(container);
        if (reactRootID) {
          reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID);
        }
        if (!reactRootID) {
          reactRootID = ReactInstanceHandles.createReactRootID();
        }
        containersByReactRootID[reactRootID] = container;
        return reactRootID;
      },
      unmountComponentAtNode: function(container) {
        ("production" !== process.env.NODE_ENV ? warning(ReactCurrentOwner.current == null, 'unmountComponentAtNode(): Render methods should be a pure function of ' + 'props and state; triggering nested component updates from render is ' + 'not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate.') : null);
        ("production" !== process.env.NODE_ENV ? invariant(container && ((container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE)), 'unmountComponentAtNode(...): Target container is not a DOM element.') : invariant(container && ((container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE))));
        var reactRootID = getReactRootID(container);
        var component = instancesByReactRootID[reactRootID];
        if (!component) {
          return false;
        }
        ReactMount.unmountComponentFromNode(component, container);
        delete instancesByReactRootID[reactRootID];
        delete containersByReactRootID[reactRootID];
        if ("production" !== process.env.NODE_ENV) {
          delete rootElementsByReactRootID[reactRootID];
        }
        return true;
      },
      unmountComponentFromNode: function(instance, container) {
        ReactReconciler.unmountComponent(instance);
        if (container.nodeType === DOC_NODE_TYPE) {
          container = container.documentElement;
        }
        while (container.lastChild) {
          container.removeChild(container.lastChild);
        }
      },
      findReactContainerForID: function(id) {
        var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(id);
        var container = containersByReactRootID[reactRootID];
        if ("production" !== process.env.NODE_ENV) {
          var rootElement = rootElementsByReactRootID[reactRootID];
          if (rootElement && rootElement.parentNode !== container) {
            ("production" !== process.env.NODE_ENV ? invariant(internalGetID(rootElement) === reactRootID, 'ReactMount: Root element ID differed from reactRootID.') : invariant(internalGetID(rootElement) === reactRootID));
            var containerChild = container.firstChild;
            if (containerChild && reactRootID === internalGetID(containerChild)) {
              rootElementsByReactRootID[reactRootID] = containerChild;
            } else {
              ("production" !== process.env.NODE_ENV ? warning(false, 'ReactMount: Root element has been removed from its original ' + 'container. New container:', rootElement.parentNode) : null);
            }
          }
        }
        return container;
      },
      findReactNodeByID: function(id) {
        var reactRoot = ReactMount.findReactContainerForID(id);
        return ReactMount.findComponentRoot(reactRoot, id);
      },
      isRenderedByReact: function(node) {
        if (node.nodeType !== 1) {
          return false;
        }
        var id = ReactMount.getID(node);
        return id ? id.charAt(0) === SEPARATOR : false;
      },
      getFirstReactDOM: function(node) {
        var current = node;
        while (current && current.parentNode !== current) {
          if (ReactMount.isRenderedByReact(current)) {
            return current;
          }
          current = current.parentNode;
        }
        return null;
      },
      findComponentRoot: function(ancestorNode, targetID) {
        var firstChildren = findComponentRootReusableArray;
        var childIndex = 0;
        var deepestAncestor = findDeepestCachedAncestor(targetID) || ancestorNode;
        firstChildren[0] = deepestAncestor.firstChild;
        firstChildren.length = 1;
        while (childIndex < firstChildren.length) {
          var child = firstChildren[childIndex++];
          var targetChild;
          while (child) {
            var childID = ReactMount.getID(child);
            if (childID) {
              if (targetID === childID) {
                targetChild = child;
              } else if (ReactInstanceHandles.isAncestorIDOf(childID, targetID)) {
                firstChildren.length = childIndex = 0;
                firstChildren.push(child.firstChild);
              }
            } else {
              firstChildren.push(child.firstChild);
            }
            child = child.nextSibling;
          }
          if (targetChild) {
            firstChildren.length = 0;
            return targetChild;
          }
        }
        firstChildren.length = 0;
        ("production" !== process.env.NODE_ENV ? invariant(false, 'findComponentRoot(..., %s): Unable to find element. This probably ' + 'means the DOM was unexpectedly mutated (e.g., by the browser), ' + 'usually due to forgetting a <tbody> when using tables, nesting tags ' + 'like <form>, <p>, or <a>, or using non-SVG elements in an <svg> ' + 'parent. ' + 'Try inspecting the child nodes of the element with React ID `%s`.', targetID, ReactMount.getID(ancestorNode)) : invariant(false));
      },
      _mountImageIntoNode: function(markup, container, shouldReuseMarkup) {
        ("production" !== process.env.NODE_ENV ? invariant(container && ((container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE)), 'mountComponentIntoNode(...): Target container is not valid.') : invariant(container && ((container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE))));
        if (shouldReuseMarkup) {
          var rootElement = getReactRootElementInContainer(container);
          if (ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
            return ;
          } else {
            var checksum = rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
            rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
            var rootMarkup = rootElement.outerHTML;
            rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME, checksum);
            var diffIndex = firstDifferenceIndex(markup, rootMarkup);
            var difference = ' (client) ' + markup.substring(diffIndex - 20, diffIndex + 20) + '\n (server) ' + rootMarkup.substring(diffIndex - 20, diffIndex + 20);
            ("production" !== process.env.NODE_ENV ? invariant(container.nodeType !== DOC_NODE_TYPE, 'You\'re trying to render a component to the document using ' + 'server rendering but the checksum was invalid. This usually ' + 'means you rendered a different component type or props on ' + 'the client from the one on the server, or your render() ' + 'methods are impure. React cannot handle this case due to ' + 'cross-browser quirks by rendering at the document root. You ' + 'should look for environment dependent code in your components ' + 'and ensure the props are the same client and server side:\n%s', difference) : invariant(container.nodeType !== DOC_NODE_TYPE));
            if ("production" !== process.env.NODE_ENV) {
              ("production" !== process.env.NODE_ENV ? warning(false, 'React attempted to reuse markup in a container but the ' + 'checksum was invalid. This generally means that you are ' + 'using server rendering and the markup generated on the ' + 'server was not what the client was expecting. React injected ' + 'new markup to compensate which works but you have lost many ' + 'of the benefits of server rendering. Instead, figure out ' + 'why the markup being generated is different on the client ' + 'or server:\n%s', difference) : null);
            }
          }
        }
        ("production" !== process.env.NODE_ENV ? invariant(container.nodeType !== DOC_NODE_TYPE, 'You\'re trying to render a component to the document but ' + 'you didn\'t use server rendering. We can\'t do this ' + 'without using server rendering due to cross-browser quirks. ' + 'See React.renderToString() for server rendering.') : invariant(container.nodeType !== DOC_NODE_TYPE));
        setInnerHTML(container, markup);
      },
      getReactRootID: getReactRootID,
      getID: getID,
      setID: setID,
      getNode: getNode,
      getNodeFromInstance: getNodeFromInstance,
      purgeID: purgeID
    };
    ReactPerf.measureMethods(ReactMount, 'ReactMount', {
      _renderNewRootComponent: '_renderNewRootComponent',
      _mountImageIntoNode: '_mountImageIntoNode'
    });
    module.exports = ReactMount;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactDOMComponent", ["npm:react@0.13.1/lib/CSSPropertyOperations", "npm:react@0.13.1/lib/DOMProperty", "npm:react@0.13.1/lib/DOMPropertyOperations", "npm:react@0.13.1/lib/ReactBrowserEventEmitter", "npm:react@0.13.1/lib/ReactComponentBrowserEnvironment", "npm:react@0.13.1/lib/ReactMount", "npm:react@0.13.1/lib/ReactMultiChild", "npm:react@0.13.1/lib/ReactPerf", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/escapeTextContentForBrowser", "npm:react@0.13.1/lib/invariant", "npm:react@0.13.1/lib/isEventSupported", "npm:react@0.13.1/lib/keyOf", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var CSSPropertyOperations = require("npm:react@0.13.1/lib/CSSPropertyOperations");
    var DOMProperty = require("npm:react@0.13.1/lib/DOMProperty");
    var DOMPropertyOperations = require("npm:react@0.13.1/lib/DOMPropertyOperations");
    var ReactBrowserEventEmitter = require("npm:react@0.13.1/lib/ReactBrowserEventEmitter");
    var ReactComponentBrowserEnvironment = require("npm:react@0.13.1/lib/ReactComponentBrowserEnvironment");
    var ReactMount = require("npm:react@0.13.1/lib/ReactMount");
    var ReactMultiChild = require("npm:react@0.13.1/lib/ReactMultiChild");
    var ReactPerf = require("npm:react@0.13.1/lib/ReactPerf");
    var assign = require("npm:react@0.13.1/lib/Object.assign");
    var escapeTextContentForBrowser = require("npm:react@0.13.1/lib/escapeTextContentForBrowser");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var isEventSupported = require("npm:react@0.13.1/lib/isEventSupported");
    var keyOf = require("npm:react@0.13.1/lib/keyOf");
    var warning = require("npm:react@0.13.1/lib/warning");
    var deleteListener = ReactBrowserEventEmitter.deleteListener;
    var listenTo = ReactBrowserEventEmitter.listenTo;
    var registrationNameModules = ReactBrowserEventEmitter.registrationNameModules;
    var CONTENT_TYPES = {
      'string': true,
      'number': true
    };
    var STYLE = keyOf({style: null});
    var ELEMENT_NODE_TYPE = 1;
    var BackendIDOperations = null;
    function assertValidProps(props) {
      if (!props) {
        return ;
      }
      if (props.dangerouslySetInnerHTML != null) {
        ("production" !== process.env.NODE_ENV ? invariant(props.children == null, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : invariant(props.children == null));
        ("production" !== process.env.NODE_ENV ? invariant(props.dangerouslySetInnerHTML.__html != null, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit http://fb.me/react-invariant-dangerously-set-inner-html ' + 'for more information.') : invariant(props.dangerouslySetInnerHTML.__html != null));
      }
      if ("production" !== process.env.NODE_ENV) {
        ("production" !== process.env.NODE_ENV ? warning(props.innerHTML == null, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.') : null);
        ("production" !== process.env.NODE_ENV ? warning(!props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : null);
      }
      ("production" !== process.env.NODE_ENV ? invariant(props.style == null || typeof props.style === 'object', 'The `style` prop expects a mapping from style properties to values, ' + 'not a string. For example, style={{marginRight: spacing + \'em\'}} when ' + 'using JSX.') : invariant(props.style == null || typeof props.style === 'object'));
    }
    function putListener(id, registrationName, listener, transaction) {
      if ("production" !== process.env.NODE_ENV) {
        ("production" !== process.env.NODE_ENV ? warning(registrationName !== 'onScroll' || isEventSupported('scroll', true), 'This browser doesn\'t support the `onScroll` event') : null);
      }
      var container = ReactMount.findReactContainerForID(id);
      if (container) {
        var doc = container.nodeType === ELEMENT_NODE_TYPE ? container.ownerDocument : container;
        listenTo(registrationName, doc);
      }
      transaction.getPutListenerQueue().enqueuePutListener(id, registrationName, listener);
    }
    var omittedCloseTags = {
      'area': true,
      'base': true,
      'br': true,
      'col': true,
      'embed': true,
      'hr': true,
      'img': true,
      'input': true,
      'keygen': true,
      'link': true,
      'meta': true,
      'param': true,
      'source': true,
      'track': true,
      'wbr': true
    };
    var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var validatedTagCache = {};
    var hasOwnProperty = {}.hasOwnProperty;
    function validateDangerousTag(tag) {
      if (!hasOwnProperty.call(validatedTagCache, tag)) {
        ("production" !== process.env.NODE_ENV ? invariant(VALID_TAG_REGEX.test(tag), 'Invalid tag: %s', tag) : invariant(VALID_TAG_REGEX.test(tag)));
        validatedTagCache[tag] = true;
      }
    }
    function ReactDOMComponent(tag) {
      validateDangerousTag(tag);
      this._tag = tag;
      this._renderedChildren = null;
      this._previousStyleCopy = null;
      this._rootNodeID = null;
    }
    ReactDOMComponent.displayName = 'ReactDOMComponent';
    ReactDOMComponent.Mixin = {
      construct: function(element) {
        this._currentElement = element;
      },
      mountComponent: function(rootID, transaction, context) {
        this._rootNodeID = rootID;
        assertValidProps(this._currentElement.props);
        var closeTag = omittedCloseTags[this._tag] ? '' : '</' + this._tag + '>';
        return (this._createOpenTagMarkupAndPutListeners(transaction) + this._createContentMarkup(transaction, context) + closeTag);
      },
      _createOpenTagMarkupAndPutListeners: function(transaction) {
        var props = this._currentElement.props;
        var ret = '<' + this._tag;
        for (var propKey in props) {
          if (!props.hasOwnProperty(propKey)) {
            continue;
          }
          var propValue = props[propKey];
          if (propValue == null) {
            continue;
          }
          if (registrationNameModules.hasOwnProperty(propKey)) {
            putListener(this._rootNodeID, propKey, propValue, transaction);
          } else {
            if (propKey === STYLE) {
              if (propValue) {
                propValue = this._previousStyleCopy = assign({}, props.style);
              }
              propValue = CSSPropertyOperations.createMarkupForStyles(propValue);
            }
            var markup = DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
            if (markup) {
              ret += ' ' + markup;
            }
          }
        }
        if (transaction.renderToStaticMarkup) {
          return ret + '>';
        }
        var markupForID = DOMPropertyOperations.createMarkupForID(this._rootNodeID);
        return ret + ' ' + markupForID + '>';
      },
      _createContentMarkup: function(transaction, context) {
        var prefix = '';
        if (this._tag === 'listing' || this._tag === 'pre' || this._tag === 'textarea') {
          prefix = '\n';
        }
        var props = this._currentElement.props;
        var innerHTML = props.dangerouslySetInnerHTML;
        if (innerHTML != null) {
          if (innerHTML.__html != null) {
            return prefix + innerHTML.__html;
          }
        } else {
          var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
          var childrenToUse = contentToUse != null ? null : props.children;
          if (contentToUse != null) {
            return prefix + escapeTextContentForBrowser(contentToUse);
          } else if (childrenToUse != null) {
            var mountImages = this.mountChildren(childrenToUse, transaction, context);
            return prefix + mountImages.join('');
          }
        }
        return prefix;
      },
      receiveComponent: function(nextElement, transaction, context) {
        var prevElement = this._currentElement;
        this._currentElement = nextElement;
        this.updateComponent(transaction, prevElement, nextElement, context);
      },
      updateComponent: function(transaction, prevElement, nextElement, context) {
        assertValidProps(this._currentElement.props);
        this._updateDOMProperties(prevElement.props, transaction);
        this._updateDOMChildren(prevElement.props, transaction, context);
      },
      _updateDOMProperties: function(lastProps, transaction) {
        var nextProps = this._currentElement.props;
        var propKey;
        var styleName;
        var styleUpdates;
        for (propKey in lastProps) {
          if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey)) {
            continue;
          }
          if (propKey === STYLE) {
            var lastStyle = this._previousStyleCopy;
            for (styleName in lastStyle) {
              if (lastStyle.hasOwnProperty(styleName)) {
                styleUpdates = styleUpdates || {};
                styleUpdates[styleName] = '';
              }
            }
            this._previousStyleCopy = null;
          } else if (registrationNameModules.hasOwnProperty(propKey)) {
            deleteListener(this._rootNodeID, propKey);
          } else if (DOMProperty.isStandardName[propKey] || DOMProperty.isCustomAttribute(propKey)) {
            BackendIDOperations.deletePropertyByID(this._rootNodeID, propKey);
          }
        }
        for (propKey in nextProps) {
          var nextProp = nextProps[propKey];
          var lastProp = propKey === STYLE ? this._previousStyleCopy : lastProps[propKey];
          if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp) {
            continue;
          }
          if (propKey === STYLE) {
            if (nextProp) {
              nextProp = this._previousStyleCopy = assign({}, nextProp);
            }
            if (lastProp) {
              for (styleName in lastProp) {
                if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
                  styleUpdates = styleUpdates || {};
                  styleUpdates[styleName] = '';
                }
              }
              for (styleName in nextProp) {
                if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
                  styleUpdates = styleUpdates || {};
                  styleUpdates[styleName] = nextProp[styleName];
                }
              }
            } else {
              styleUpdates = nextProp;
            }
          } else if (registrationNameModules.hasOwnProperty(propKey)) {
            putListener(this._rootNodeID, propKey, nextProp, transaction);
          } else if (DOMProperty.isStandardName[propKey] || DOMProperty.isCustomAttribute(propKey)) {
            BackendIDOperations.updatePropertyByID(this._rootNodeID, propKey, nextProp);
          }
        }
        if (styleUpdates) {
          BackendIDOperations.updateStylesByID(this._rootNodeID, styleUpdates);
        }
      },
      _updateDOMChildren: function(lastProps, transaction, context) {
        var nextProps = this._currentElement.props;
        var lastContent = CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
        var nextContent = CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;
        var lastHtml = lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
        var nextHtml = nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;
        var lastChildren = lastContent != null ? null : lastProps.children;
        var nextChildren = nextContent != null ? null : nextProps.children;
        var lastHasContentOrHtml = lastContent != null || lastHtml != null;
        var nextHasContentOrHtml = nextContent != null || nextHtml != null;
        if (lastChildren != null && nextChildren == null) {
          this.updateChildren(null, transaction, context);
        } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
          this.updateTextContent('');
        }
        if (nextContent != null) {
          if (lastContent !== nextContent) {
            this.updateTextContent('' + nextContent);
          }
        } else if (nextHtml != null) {
          if (lastHtml !== nextHtml) {
            BackendIDOperations.updateInnerHTMLByID(this._rootNodeID, nextHtml);
          }
        } else if (nextChildren != null) {
          this.updateChildren(nextChildren, transaction, context);
        }
      },
      unmountComponent: function() {
        this.unmountChildren();
        ReactBrowserEventEmitter.deleteAllListeners(this._rootNodeID);
        ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
        this._rootNodeID = null;
      }
    };
    ReactPerf.measureMethods(ReactDOMComponent, 'ReactDOMComponent', {
      mountComponent: 'mountComponent',
      updateComponent: 'updateComponent'
    });
    assign(ReactDOMComponent.prototype, ReactDOMComponent.Mixin, ReactMultiChild.Mixin);
    ReactDOMComponent.injection = {injectIDOperations: function(IDOperations) {
        ReactDOMComponent.BackendIDOperations = BackendIDOperations = IDOperations;
      }};
    module.exports = ReactDOMComponent;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/BeforeInputEventPlugin", ["npm:react@0.13.1/lib/EventConstants", "npm:react@0.13.1/lib/EventPropagators", "npm:react@0.13.1/lib/ExecutionEnvironment", "npm:react@0.13.1/lib/FallbackCompositionState", "npm:react@0.13.1/lib/SyntheticCompositionEvent", "npm:react@0.13.1/lib/SyntheticInputEvent", "npm:react@0.13.1/lib/keyOf"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var EventConstants = require("npm:react@0.13.1/lib/EventConstants");
  var EventPropagators = require("npm:react@0.13.1/lib/EventPropagators");
  var ExecutionEnvironment = require("npm:react@0.13.1/lib/ExecutionEnvironment");
  var FallbackCompositionState = require("npm:react@0.13.1/lib/FallbackCompositionState");
  var SyntheticCompositionEvent = require("npm:react@0.13.1/lib/SyntheticCompositionEvent");
  var SyntheticInputEvent = require("npm:react@0.13.1/lib/SyntheticInputEvent");
  var keyOf = require("npm:react@0.13.1/lib/keyOf");
  var END_KEYCODES = [9, 13, 27, 32];
  var START_KEYCODE = 229;
  var canUseCompositionEvent = (ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window);
  var documentMode = null;
  if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
    documentMode = document.documentMode;
  }
  var canUseTextInputEvent = (ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !documentMode && !isPresto());
  var useFallbackCompositionData = (ExecutionEnvironment.canUseDOM && ((!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11)));
  function isPresto() {
    var opera = window.opera;
    return (typeof opera === 'object' && typeof opera.version === 'function' && parseInt(opera.version(), 10) <= 12);
  }
  var SPACEBAR_CODE = 32;
  var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);
  var topLevelTypes = EventConstants.topLevelTypes;
  var eventTypes = {
    beforeInput: {
      phasedRegistrationNames: {
        bubbled: keyOf({onBeforeInput: null}),
        captured: keyOf({onBeforeInputCapture: null})
      },
      dependencies: [topLevelTypes.topCompositionEnd, topLevelTypes.topKeyPress, topLevelTypes.topTextInput, topLevelTypes.topPaste]
    },
    compositionEnd: {
      phasedRegistrationNames: {
        bubbled: keyOf({onCompositionEnd: null}),
        captured: keyOf({onCompositionEndCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionEnd, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    },
    compositionStart: {
      phasedRegistrationNames: {
        bubbled: keyOf({onCompositionStart: null}),
        captured: keyOf({onCompositionStartCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionStart, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    },
    compositionUpdate: {
      phasedRegistrationNames: {
        bubbled: keyOf({onCompositionUpdate: null}),
        captured: keyOf({onCompositionUpdateCapture: null})
      },
      dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionUpdate, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
    }
  };
  var hasSpaceKeypress = false;
  function isKeypressCommand(nativeEvent) {
    return ((nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) && !(nativeEvent.ctrlKey && nativeEvent.altKey));
  }
  function getCompositionEventType(topLevelType) {
    switch (topLevelType) {
      case topLevelTypes.topCompositionStart:
        return eventTypes.compositionStart;
      case topLevelTypes.topCompositionEnd:
        return eventTypes.compositionEnd;
      case topLevelTypes.topCompositionUpdate:
        return eventTypes.compositionUpdate;
    }
  }
  function isFallbackCompositionStart(topLevelType, nativeEvent) {
    return (topLevelType === topLevelTypes.topKeyDown && nativeEvent.keyCode === START_KEYCODE);
  }
  function isFallbackCompositionEnd(topLevelType, nativeEvent) {
    switch (topLevelType) {
      case topLevelTypes.topKeyUp:
        return (END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1);
      case topLevelTypes.topKeyDown:
        return (nativeEvent.keyCode !== START_KEYCODE);
      case topLevelTypes.topKeyPress:
      case topLevelTypes.topMouseDown:
      case topLevelTypes.topBlur:
        return true;
      default:
        return false;
    }
  }
  function getDataFromCustomEvent(nativeEvent) {
    var detail = nativeEvent.detail;
    if (typeof detail === 'object' && 'data' in detail) {
      return detail.data;
    }
    return null;
  }
  var currentComposition = null;
  function extractCompositionEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
    var eventType;
    var fallbackData;
    if (canUseCompositionEvent) {
      eventType = getCompositionEventType(topLevelType);
    } else if (!currentComposition) {
      if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
        eventType = eventTypes.compositionStart;
      }
    } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
      eventType = eventTypes.compositionEnd;
    }
    if (!eventType) {
      return null;
    }
    if (useFallbackCompositionData) {
      if (!currentComposition && eventType === eventTypes.compositionStart) {
        currentComposition = FallbackCompositionState.getPooled(topLevelTarget);
      } else if (eventType === eventTypes.compositionEnd) {
        if (currentComposition) {
          fallbackData = currentComposition.getData();
        }
      }
    }
    var event = SyntheticCompositionEvent.getPooled(eventType, topLevelTargetID, nativeEvent);
    if (fallbackData) {
      event.data = fallbackData;
    } else {
      var customData = getDataFromCustomEvent(nativeEvent);
      if (customData !== null) {
        event.data = customData;
      }
    }
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  }
  function getNativeBeforeInputChars(topLevelType, nativeEvent) {
    switch (topLevelType) {
      case topLevelTypes.topCompositionEnd:
        return getDataFromCustomEvent(nativeEvent);
      case topLevelTypes.topKeyPress:
        var which = nativeEvent.which;
        if (which !== SPACEBAR_CODE) {
          return null;
        }
        hasSpaceKeypress = true;
        return SPACEBAR_CHAR;
      case topLevelTypes.topTextInput:
        var chars = nativeEvent.data;
        if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
          return null;
        }
        return chars;
      default:
        return null;
    }
  }
  function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
    if (currentComposition) {
      if (topLevelType === topLevelTypes.topCompositionEnd || isFallbackCompositionEnd(topLevelType, nativeEvent)) {
        var chars = currentComposition.getData();
        FallbackCompositionState.release(currentComposition);
        currentComposition = null;
        return chars;
      }
      return null;
    }
    switch (topLevelType) {
      case topLevelTypes.topPaste:
        return null;
      case topLevelTypes.topKeyPress:
        if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
          return String.fromCharCode(nativeEvent.which);
        }
        return null;
      case topLevelTypes.topCompositionEnd:
        return useFallbackCompositionData ? null : nativeEvent.data;
      default:
        return null;
    }
  }
  function extractBeforeInputEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
    var chars;
    if (canUseTextInputEvent) {
      chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
    } else {
      chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
    }
    if (!chars) {
      return null;
    }
    var event = SyntheticInputEvent.getPooled(eventTypes.beforeInput, topLevelTargetID, nativeEvent);
    event.data = chars;
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  }
  var BeforeInputEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent) {
      return [extractCompositionEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent), extractBeforeInputEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent)];
    }
  };
  module.exports = BeforeInputEventPlugin;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactReconcileTransaction", ["npm:react@0.13.1/lib/CallbackQueue", "npm:react@0.13.1/lib/PooledClass", "npm:react@0.13.1/lib/ReactBrowserEventEmitter", "npm:react@0.13.1/lib/ReactInputSelection", "npm:react@0.13.1/lib/ReactPutListenerQueue", "npm:react@0.13.1/lib/Transaction", "npm:react@0.13.1/lib/Object.assign"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var CallbackQueue = require("npm:react@0.13.1/lib/CallbackQueue");
  var PooledClass = require("npm:react@0.13.1/lib/PooledClass");
  var ReactBrowserEventEmitter = require("npm:react@0.13.1/lib/ReactBrowserEventEmitter");
  var ReactInputSelection = require("npm:react@0.13.1/lib/ReactInputSelection");
  var ReactPutListenerQueue = require("npm:react@0.13.1/lib/ReactPutListenerQueue");
  var Transaction = require("npm:react@0.13.1/lib/Transaction");
  var assign = require("npm:react@0.13.1/lib/Object.assign");
  var SELECTION_RESTORATION = {
    initialize: ReactInputSelection.getSelectionInformation,
    close: ReactInputSelection.restoreSelection
  };
  var EVENT_SUPPRESSION = {
    initialize: function() {
      var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
      ReactBrowserEventEmitter.setEnabled(false);
      return currentlyEnabled;
    },
    close: function(previouslyEnabled) {
      ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
    }
  };
  var ON_DOM_READY_QUEUEING = {
    initialize: function() {
      this.reactMountReady.reset();
    },
    close: function() {
      this.reactMountReady.notifyAll();
    }
  };
  var PUT_LISTENER_QUEUEING = {
    initialize: function() {
      this.putListenerQueue.reset();
    },
    close: function() {
      this.putListenerQueue.putListeners();
    }
  };
  var TRANSACTION_WRAPPERS = [PUT_LISTENER_QUEUEING, SELECTION_RESTORATION, EVENT_SUPPRESSION, ON_DOM_READY_QUEUEING];
  function ReactReconcileTransaction() {
    this.reinitializeTransaction();
    this.renderToStaticMarkup = false;
    this.reactMountReady = CallbackQueue.getPooled(null);
    this.putListenerQueue = ReactPutListenerQueue.getPooled();
  }
  var Mixin = {
    getTransactionWrappers: function() {
      return TRANSACTION_WRAPPERS;
    },
    getReactMountReady: function() {
      return this.reactMountReady;
    },
    getPutListenerQueue: function() {
      return this.putListenerQueue;
    },
    destructor: function() {
      CallbackQueue.release(this.reactMountReady);
      this.reactMountReady = null;
      ReactPutListenerQueue.release(this.putListenerQueue);
      this.putListenerQueue = null;
    }
  };
  assign(ReactReconcileTransaction.prototype, Transaction.Mixin, Mixin);
  PooledClass.addPoolingTo(ReactReconcileTransaction);
  module.exports = ReactReconcileTransaction;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactTransitionGroup", ["npm:react@0.13.1/lib/React", "npm:react@0.13.1/lib/ReactTransitionChildMapping", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/cloneWithProps", "npm:react@0.13.1/lib/emptyFunction"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var React = require("npm:react@0.13.1/lib/React");
  var ReactTransitionChildMapping = require("npm:react@0.13.1/lib/ReactTransitionChildMapping");
  var assign = require("npm:react@0.13.1/lib/Object.assign");
  var cloneWithProps = require("npm:react@0.13.1/lib/cloneWithProps");
  var emptyFunction = require("npm:react@0.13.1/lib/emptyFunction");
  var ReactTransitionGroup = React.createClass({
    displayName: 'ReactTransitionGroup',
    propTypes: {
      component: React.PropTypes.any,
      childFactory: React.PropTypes.func
    },
    getDefaultProps: function() {
      return {
        component: 'span',
        childFactory: emptyFunction.thatReturnsArgument
      };
    },
    getInitialState: function() {
      return {children: ReactTransitionChildMapping.getChildMapping(this.props.children)};
    },
    componentWillMount: function() {
      this.currentlyTransitioningKeys = {};
      this.keysToEnter = [];
      this.keysToLeave = [];
    },
    componentDidMount: function() {
      var initialChildMapping = this.state.children;
      for (var key in initialChildMapping) {
        if (initialChildMapping[key]) {
          this.performAppear(key);
        }
      }
    },
    componentWillReceiveProps: function(nextProps) {
      var nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
      var prevChildMapping = this.state.children;
      this.setState({children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)});
      var key;
      for (key in nextChildMapping) {
        var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
        if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
          this.keysToEnter.push(key);
        }
      }
      for (key in prevChildMapping) {
        var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
        if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
          this.keysToLeave.push(key);
        }
      }
    },
    componentDidUpdate: function() {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);
      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    },
    performAppear: function(key) {
      this.currentlyTransitioningKeys[key] = true;
      var component = this.refs[key];
      if (component.componentWillAppear) {
        component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
      } else {
        this._handleDoneAppearing(key);
      }
    },
    _handleDoneAppearing: function(key) {
      var component = this.refs[key];
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }
      delete this.currentlyTransitioningKeys[key];
      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        this.performLeave(key);
      }
    },
    performEnter: function(key) {
      this.currentlyTransitioningKeys[key] = true;
      var component = this.refs[key];
      if (component.componentWillEnter) {
        component.componentWillEnter(this._handleDoneEntering.bind(this, key));
      } else {
        this._handleDoneEntering(key);
      }
    },
    _handleDoneEntering: function(key) {
      var component = this.refs[key];
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }
      delete this.currentlyTransitioningKeys[key];
      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        this.performLeave(key);
      }
    },
    performLeave: function(key) {
      this.currentlyTransitioningKeys[key] = true;
      var component = this.refs[key];
      if (component.componentWillLeave) {
        component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
      } else {
        this._handleDoneLeaving(key);
      }
    },
    _handleDoneLeaving: function(key) {
      var component = this.refs[key];
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }
      delete this.currentlyTransitioningKeys[key];
      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        this.performEnter(key);
      } else {
        var newChildren = assign({}, this.state.children);
        delete newChildren[key];
        this.setState({children: newChildren});
      }
    },
    render: function() {
      var childrenToRender = [];
      for (var key in this.state.children) {
        var child = this.state.children[key];
        if (child) {
          childrenToRender.push(cloneWithProps(this.props.childFactory(child), {
            ref: key,
            key: key
          }));
        }
      }
      return React.createElement(this.props.component, this.props, childrenToRender);
    }
  });
  module.exports = ReactTransitionGroup;
  global.define = __define;
  return module.exports;
});

System.register("npm:flux@2.0.1", ["npm:flux@2.0.1/index"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:flux@2.0.1/index");
  global.define = __define;
  return module.exports;
});

System.register("github:jspm/nodelibs-events@0.1.0", ["github:jspm/nodelibs-events@0.1.0/index"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("github:jspm/nodelibs-events@0.1.0/index");
  global.define = __define;
  return module.exports;
});

System.register("npm:fkit@0.16.2/src/list", ["npm:fkit@0.16.2/src/util", "npm:fkit@0.16.2/src/list/base", "npm:fkit@0.16.2/src/list/build", "npm:fkit@0.16.2/src/list/fold", "npm:fkit@0.16.2/src/list/map", "npm:fkit@0.16.2/src/list/search", "npm:fkit@0.16.2/src/list/set", "npm:fkit@0.16.2/src/list/sort", "npm:fkit@0.16.2/src/list/sublist", "npm:fkit@0.16.2/src/list/zip"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var util = require("npm:fkit@0.16.2/src/util");
  module.exports = util.extend({}, [require("npm:fkit@0.16.2/src/list/base"), require("npm:fkit@0.16.2/src/list/build"), require("npm:fkit@0.16.2/src/list/fold"), require("npm:fkit@0.16.2/src/list/map"), require("npm:fkit@0.16.2/src/list/search"), require("npm:fkit@0.16.2/src/list/set"), require("npm:fkit@0.16.2/src/list/sort"), require("npm:fkit@0.16.2/src/list/sublist"), require("npm:fkit@0.16.2/src/list/zip")]);
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/invariant", ["github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    "use strict";
    var invariant = function(condition, format, a, b, c, d, e, f) {
      if ("production" !== process.env.NODE_ENV) {
        if (format === undefined) {
          throw new Error('invariant requires an error message argument');
        }
      }
      if (!condition) {
        var error;
        if (format === undefined) {
          error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error('Invariant Violation: ' + format.replace(/%s/g, function() {
            return args[argIndex++];
          }));
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module.exports = invariant;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactFragment", ["npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
    var warning = require("npm:react@0.13.1/lib/warning");
    if ("production" !== process.env.NODE_ENV) {
      var fragmentKey = '_reactFragment';
      var didWarnKey = '_reactDidWarn';
      var canWarnForReactFragment = false;
      try {
        var dummy = function() {
          return 1;
        };
        Object.defineProperty({}, fragmentKey, {
          enumerable: false,
          value: true
        });
        Object.defineProperty({}, 'key', {
          enumerable: true,
          get: dummy
        });
        canWarnForReactFragment = true;
      } catch (x) {}
      var proxyPropertyAccessWithWarning = function(obj, key) {
        Object.defineProperty(obj, key, {
          enumerable: true,
          get: function() {
            ("production" !== process.env.NODE_ENV ? warning(this[didWarnKey], 'A ReactFragment is an opaque type. Accessing any of its ' + 'properties is deprecated. Pass it to one of the React.Children ' + 'helpers.') : null);
            this[didWarnKey] = true;
            return this[fragmentKey][key];
          },
          set: function(value) {
            ("production" !== process.env.NODE_ENV ? warning(this[didWarnKey], 'A ReactFragment is an immutable opaque type. Mutating its ' + 'properties is deprecated.') : null);
            this[didWarnKey] = true;
            this[fragmentKey][key] = value;
          }
        });
      };
      var issuedWarnings = {};
      var didWarnForFragment = function(fragment) {
        var fragmentCacheKey = '';
        for (var key in fragment) {
          fragmentCacheKey += key + ':' + (typeof fragment[key]) + ',';
        }
        var alreadyWarnedOnce = !!issuedWarnings[fragmentCacheKey];
        issuedWarnings[fragmentCacheKey] = true;
        return alreadyWarnedOnce;
      };
    }
    var ReactFragment = {
      create: function(object) {
        if ("production" !== process.env.NODE_ENV) {
          if (typeof object !== 'object' || !object || Array.isArray(object)) {
            ("production" !== process.env.NODE_ENV ? warning(false, 'React.addons.createFragment only accepts a single object.', object) : null);
            return object;
          }
          if (ReactElement.isValidElement(object)) {
            ("production" !== process.env.NODE_ENV ? warning(false, 'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.') : null);
            return object;
          }
          if (canWarnForReactFragment) {
            var proxy = {};
            Object.defineProperty(proxy, fragmentKey, {
              enumerable: false,
              value: object
            });
            Object.defineProperty(proxy, didWarnKey, {
              writable: true,
              enumerable: false,
              value: false
            });
            for (var key in object) {
              proxyPropertyAccessWithWarning(proxy, key);
            }
            Object.preventExtensions(proxy);
            return proxy;
          }
        }
        return object;
      },
      extract: function(fragment) {
        if ("production" !== process.env.NODE_ENV) {
          if (canWarnForReactFragment) {
            if (!fragment[fragmentKey]) {
              ("production" !== process.env.NODE_ENV ? warning(didWarnForFragment(fragment), 'Any use of a keyed object should be wrapped in ' + 'React.addons.createFragment(object) before being passed as a ' + 'child.') : null);
              return fragment;
            }
            return fragment[fragmentKey];
          }
        }
        return fragment;
      },
      extractIfFragment: function(fragment) {
        if ("production" !== process.env.NODE_ENV) {
          if (canWarnForReactFragment) {
            if (fragment[fragmentKey]) {
              return fragment[fragmentKey];
            }
            for (var key in fragment) {
              if (fragment.hasOwnProperty(key) && ReactElement.isValidElement(fragment[key])) {
                return ReactFragment.extract(fragment);
              }
            }
          }
        }
        return fragment;
      }
    };
    module.exports = ReactFragment;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactUpdateQueue", ["npm:react@0.13.1/lib/ReactLifeCycle", "npm:react@0.13.1/lib/ReactCurrentOwner", "npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/ReactInstanceMap", "npm:react@0.13.1/lib/ReactUpdates", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/invariant", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactLifeCycle = require("npm:react@0.13.1/lib/ReactLifeCycle");
    var ReactCurrentOwner = require("npm:react@0.13.1/lib/ReactCurrentOwner");
    var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
    var ReactInstanceMap = require("npm:react@0.13.1/lib/ReactInstanceMap");
    var ReactUpdates = require("npm:react@0.13.1/lib/ReactUpdates");
    var assign = require("npm:react@0.13.1/lib/Object.assign");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var warning = require("npm:react@0.13.1/lib/warning");
    function enqueueUpdate(internalInstance) {
      if (internalInstance !== ReactLifeCycle.currentlyMountingInstance) {
        ReactUpdates.enqueueUpdate(internalInstance);
      }
    }
    function getInternalInstanceReadyForUpdate(publicInstance, callerName) {
      ("production" !== process.env.NODE_ENV ? invariant(ReactCurrentOwner.current == null, '%s(...): Cannot update during an existing state transition ' + '(such as within `render`). Render methods should be a pure function ' + 'of props and state.', callerName) : invariant(ReactCurrentOwner.current == null));
      var internalInstance = ReactInstanceMap.get(publicInstance);
      if (!internalInstance) {
        if ("production" !== process.env.NODE_ENV) {
          ("production" !== process.env.NODE_ENV ? warning(!callerName, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted ' + 'component. This is a no-op.', callerName, callerName) : null);
        }
        return null;
      }
      if (internalInstance === ReactLifeCycle.currentlyUnmountingInstance) {
        return null;
      }
      return internalInstance;
    }
    var ReactUpdateQueue = {
      enqueueCallback: function(publicInstance, callback) {
        ("production" !== process.env.NODE_ENV ? invariant(typeof callback === 'function', 'enqueueCallback(...): You called `setProps`, `replaceProps`, ' + '`setState`, `replaceState`, or `forceUpdate` with a callback that ' + 'isn\'t callable.') : invariant(typeof callback === 'function'));
        var internalInstance = getInternalInstanceReadyForUpdate(publicInstance);
        if (!internalInstance || internalInstance === ReactLifeCycle.currentlyMountingInstance) {
          return null;
        }
        if (internalInstance._pendingCallbacks) {
          internalInstance._pendingCallbacks.push(callback);
        } else {
          internalInstance._pendingCallbacks = [callback];
        }
        enqueueUpdate(internalInstance);
      },
      enqueueCallbackInternal: function(internalInstance, callback) {
        ("production" !== process.env.NODE_ENV ? invariant(typeof callback === 'function', 'enqueueCallback(...): You called `setProps`, `replaceProps`, ' + '`setState`, `replaceState`, or `forceUpdate` with a callback that ' + 'isn\'t callable.') : invariant(typeof callback === 'function'));
        if (internalInstance._pendingCallbacks) {
          internalInstance._pendingCallbacks.push(callback);
        } else {
          internalInstance._pendingCallbacks = [callback];
        }
        enqueueUpdate(internalInstance);
      },
      enqueueForceUpdate: function(publicInstance) {
        var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'forceUpdate');
        if (!internalInstance) {
          return ;
        }
        internalInstance._pendingForceUpdate = true;
        enqueueUpdate(internalInstance);
      },
      enqueueReplaceState: function(publicInstance, completeState) {
        var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceState');
        if (!internalInstance) {
          return ;
        }
        internalInstance._pendingStateQueue = [completeState];
        internalInstance._pendingReplaceState = true;
        enqueueUpdate(internalInstance);
      },
      enqueueSetState: function(publicInstance, partialState) {
        var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setState');
        if (!internalInstance) {
          return ;
        }
        var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
        queue.push(partialState);
        enqueueUpdate(internalInstance);
      },
      enqueueSetProps: function(publicInstance, partialProps) {
        var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setProps');
        if (!internalInstance) {
          return ;
        }
        ("production" !== process.env.NODE_ENV ? invariant(internalInstance._isTopLevel, 'setProps(...): You called `setProps` on a ' + 'component with a parent. This is an anti-pattern since props will ' + 'get reactively updated when rendered. Instead, change the owner\'s ' + '`render` method to pass the correct value as props to the component ' + 'where it is created.') : invariant(internalInstance._isTopLevel));
        var element = internalInstance._pendingElement || internalInstance._currentElement;
        var props = assign({}, element.props, partialProps);
        internalInstance._pendingElement = ReactElement.cloneAndReplaceProps(element, props);
        enqueueUpdate(internalInstance);
      },
      enqueueReplaceProps: function(publicInstance, props) {
        var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceProps');
        if (!internalInstance) {
          return ;
        }
        ("production" !== process.env.NODE_ENV ? invariant(internalInstance._isTopLevel, 'replaceProps(...): You called `replaceProps` on a ' + 'component with a parent. This is an anti-pattern since props will ' + 'get reactively updated when rendered. Instead, change the owner\'s ' + '`render` method to pass the correct value as props to the component ' + 'where it is created.') : invariant(internalInstance._isTopLevel));
        var element = internalInstance._pendingElement || internalInstance._currentElement;
        internalInstance._pendingElement = ReactElement.cloneAndReplaceProps(element, props);
        enqueueUpdate(internalInstance);
      },
      enqueueElementInternal: function(internalInstance, newElement) {
        internalInstance._pendingElement = newElement;
        enqueueUpdate(internalInstance);
      }
    };
    module.exports = ReactUpdateQueue;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/DOMChildrenOperations", ["npm:react@0.13.1/lib/Danger", "npm:react@0.13.1/lib/ReactMultiChildUpdateTypes", "npm:react@0.13.1/lib/setTextContent", "npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var Danger = require("npm:react@0.13.1/lib/Danger");
    var ReactMultiChildUpdateTypes = require("npm:react@0.13.1/lib/ReactMultiChildUpdateTypes");
    var setTextContent = require("npm:react@0.13.1/lib/setTextContent");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    function insertChildAt(parentNode, childNode, index) {
      parentNode.insertBefore(childNode, parentNode.childNodes[index] || null);
    }
    var DOMChildrenOperations = {
      dangerouslyReplaceNodeWithMarkup: Danger.dangerouslyReplaceNodeWithMarkup,
      updateTextContent: setTextContent,
      processUpdates: function(updates, markupList) {
        var update;
        var initialChildren = null;
        var updatedChildren = null;
        for (var i = 0; i < updates.length; i++) {
          update = updates[i];
          if (update.type === ReactMultiChildUpdateTypes.MOVE_EXISTING || update.type === ReactMultiChildUpdateTypes.REMOVE_NODE) {
            var updatedIndex = update.fromIndex;
            var updatedChild = update.parentNode.childNodes[updatedIndex];
            var parentID = update.parentID;
            ("production" !== process.env.NODE_ENV ? invariant(updatedChild, 'processUpdates(): Unable to find child %s of element. This ' + 'probably means the DOM was unexpectedly mutated (e.g., by the ' + 'browser), usually due to forgetting a <tbody> when using tables, ' + 'nesting tags like <form>, <p>, or <a>, or using non-SVG elements ' + 'in an <svg> parent. Try inspecting the child nodes of the element ' + 'with React ID `%s`.', updatedIndex, parentID) : invariant(updatedChild));
            initialChildren = initialChildren || {};
            initialChildren[parentID] = initialChildren[parentID] || [];
            initialChildren[parentID][updatedIndex] = updatedChild;
            updatedChildren = updatedChildren || [];
            updatedChildren.push(updatedChild);
          }
        }
        var renderedMarkup = Danger.dangerouslyRenderMarkup(markupList);
        if (updatedChildren) {
          for (var j = 0; j < updatedChildren.length; j++) {
            updatedChildren[j].parentNode.removeChild(updatedChildren[j]);
          }
        }
        for (var k = 0; k < updates.length; k++) {
          update = updates[k];
          switch (update.type) {
            case ReactMultiChildUpdateTypes.INSERT_MARKUP:
              insertChildAt(update.parentNode, renderedMarkup[update.markupIndex], update.toIndex);
              break;
            case ReactMultiChildUpdateTypes.MOVE_EXISTING:
              insertChildAt(update.parentNode, initialChildren[update.parentID][update.fromIndex], update.toIndex);
              break;
            case ReactMultiChildUpdateTypes.TEXT_CONTENT:
              setTextContent(update.parentNode, update.textContent);
              break;
            case ReactMultiChildUpdateTypes.REMOVE_NODE:
              break;
          }
        }
      }
    };
    module.exports = DOMChildrenOperations;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactDefaultInjection", ["npm:react@0.13.1/lib/BeforeInputEventPlugin", "npm:react@0.13.1/lib/ChangeEventPlugin", "npm:react@0.13.1/lib/ClientReactRootIndex", "npm:react@0.13.1/lib/DefaultEventPluginOrder", "npm:react@0.13.1/lib/EnterLeaveEventPlugin", "npm:react@0.13.1/lib/ExecutionEnvironment", "npm:react@0.13.1/lib/HTMLDOMPropertyConfig", "npm:react@0.13.1/lib/MobileSafariClickEventPlugin", "npm:react@0.13.1/lib/ReactBrowserComponentMixin", "npm:react@0.13.1/lib/ReactClass", "npm:react@0.13.1/lib/ReactComponentBrowserEnvironment", "npm:react@0.13.1/lib/ReactDefaultBatchingStrategy", "npm:react@0.13.1/lib/ReactDOMComponent", "npm:react@0.13.1/lib/ReactDOMButton", "npm:react@0.13.1/lib/ReactDOMForm", "npm:react@0.13.1/lib/ReactDOMImg", "npm:react@0.13.1/lib/ReactDOMIDOperations", "npm:react@0.13.1/lib/ReactDOMIframe", "npm:react@0.13.1/lib/ReactDOMInput", "npm:react@0.13.1/lib/ReactDOMOption", "npm:react@0.13.1/lib/ReactDOMSelect", "npm:react@0.13.1/lib/ReactDOMTextarea", "npm:react@0.13.1/lib/ReactDOMTextComponent", "npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/ReactEventListener", "npm:react@0.13.1/lib/ReactInjection", "npm:react@0.13.1/lib/ReactInstanceHandles", "npm:react@0.13.1/lib/ReactMount", "npm:react@0.13.1/lib/ReactReconcileTransaction", "npm:react@0.13.1/lib/SelectEventPlugin", "npm:react@0.13.1/lib/ServerReactRootIndex", "npm:react@0.13.1/lib/SimpleEventPlugin", "npm:react@0.13.1/lib/SVGDOMPropertyConfig", "npm:react@0.13.1/lib/createFullPageComponent", "npm:react@0.13.1/lib/ReactDefaultPerf", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var BeforeInputEventPlugin = require("npm:react@0.13.1/lib/BeforeInputEventPlugin");
    var ChangeEventPlugin = require("npm:react@0.13.1/lib/ChangeEventPlugin");
    var ClientReactRootIndex = require("npm:react@0.13.1/lib/ClientReactRootIndex");
    var DefaultEventPluginOrder = require("npm:react@0.13.1/lib/DefaultEventPluginOrder");
    var EnterLeaveEventPlugin = require("npm:react@0.13.1/lib/EnterLeaveEventPlugin");
    var ExecutionEnvironment = require("npm:react@0.13.1/lib/ExecutionEnvironment");
    var HTMLDOMPropertyConfig = require("npm:react@0.13.1/lib/HTMLDOMPropertyConfig");
    var MobileSafariClickEventPlugin = require("npm:react@0.13.1/lib/MobileSafariClickEventPlugin");
    var ReactBrowserComponentMixin = require("npm:react@0.13.1/lib/ReactBrowserComponentMixin");
    var ReactClass = require("npm:react@0.13.1/lib/ReactClass");
    var ReactComponentBrowserEnvironment = require("npm:react@0.13.1/lib/ReactComponentBrowserEnvironment");
    var ReactDefaultBatchingStrategy = require("npm:react@0.13.1/lib/ReactDefaultBatchingStrategy");
    var ReactDOMComponent = require("npm:react@0.13.1/lib/ReactDOMComponent");
    var ReactDOMButton = require("npm:react@0.13.1/lib/ReactDOMButton");
    var ReactDOMForm = require("npm:react@0.13.1/lib/ReactDOMForm");
    var ReactDOMImg = require("npm:react@0.13.1/lib/ReactDOMImg");
    var ReactDOMIDOperations = require("npm:react@0.13.1/lib/ReactDOMIDOperations");
    var ReactDOMIframe = require("npm:react@0.13.1/lib/ReactDOMIframe");
    var ReactDOMInput = require("npm:react@0.13.1/lib/ReactDOMInput");
    var ReactDOMOption = require("npm:react@0.13.1/lib/ReactDOMOption");
    var ReactDOMSelect = require("npm:react@0.13.1/lib/ReactDOMSelect");
    var ReactDOMTextarea = require("npm:react@0.13.1/lib/ReactDOMTextarea");
    var ReactDOMTextComponent = require("npm:react@0.13.1/lib/ReactDOMTextComponent");
    var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
    var ReactEventListener = require("npm:react@0.13.1/lib/ReactEventListener");
    var ReactInjection = require("npm:react@0.13.1/lib/ReactInjection");
    var ReactInstanceHandles = require("npm:react@0.13.1/lib/ReactInstanceHandles");
    var ReactMount = require("npm:react@0.13.1/lib/ReactMount");
    var ReactReconcileTransaction = require("npm:react@0.13.1/lib/ReactReconcileTransaction");
    var SelectEventPlugin = require("npm:react@0.13.1/lib/SelectEventPlugin");
    var ServerReactRootIndex = require("npm:react@0.13.1/lib/ServerReactRootIndex");
    var SimpleEventPlugin = require("npm:react@0.13.1/lib/SimpleEventPlugin");
    var SVGDOMPropertyConfig = require("npm:react@0.13.1/lib/SVGDOMPropertyConfig");
    var createFullPageComponent = require("npm:react@0.13.1/lib/createFullPageComponent");
    function autoGenerateWrapperClass(type) {
      return ReactClass.createClass({
        tagName: type.toUpperCase(),
        render: function() {
          return new ReactElement(type, null, null, null, null, this.props);
        }
      });
    }
    function inject() {
      ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener);
      ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
      ReactInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles);
      ReactInjection.EventPluginHub.injectMount(ReactMount);
      ReactInjection.EventPluginHub.injectEventPluginsByName({
        SimpleEventPlugin: SimpleEventPlugin,
        EnterLeaveEventPlugin: EnterLeaveEventPlugin,
        ChangeEventPlugin: ChangeEventPlugin,
        MobileSafariClickEventPlugin: MobileSafariClickEventPlugin,
        SelectEventPlugin: SelectEventPlugin,
        BeforeInputEventPlugin: BeforeInputEventPlugin
      });
      ReactInjection.NativeComponent.injectGenericComponentClass(ReactDOMComponent);
      ReactInjection.NativeComponent.injectTextComponentClass(ReactDOMTextComponent);
      ReactInjection.NativeComponent.injectAutoWrapper(autoGenerateWrapperClass);
      ReactInjection.Class.injectMixin(ReactBrowserComponentMixin);
      ReactInjection.NativeComponent.injectComponentClasses({
        'button': ReactDOMButton,
        'form': ReactDOMForm,
        'iframe': ReactDOMIframe,
        'img': ReactDOMImg,
        'input': ReactDOMInput,
        'option': ReactDOMOption,
        'select': ReactDOMSelect,
        'textarea': ReactDOMTextarea,
        'html': createFullPageComponent('html'),
        'head': createFullPageComponent('head'),
        'body': createFullPageComponent('body')
      });
      ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
      ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);
      ReactInjection.EmptyComponent.injectEmptyComponent('noscript');
      ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);
      ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);
      ReactInjection.RootIndex.injectCreateReactRootIndex(ExecutionEnvironment.canUseDOM ? ClientReactRootIndex.createReactRootIndex : ServerReactRootIndex.createReactRootIndex);
      ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);
      ReactInjection.DOMComponent.injectIDOperations(ReactDOMIDOperations);
      if ("production" !== process.env.NODE_ENV) {
        var url = (ExecutionEnvironment.canUseDOM && window.location.href) || '';
        if ((/[?&]react_perf\b/).test(url)) {
          var ReactDefaultPerf = require("npm:react@0.13.1/lib/ReactDefaultPerf");
          ReactDefaultPerf.start();
        }
      }
    }
    module.exports = {inject: inject};
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactCSSTransitionGroup", ["npm:react@0.13.1/lib/React", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/ReactTransitionGroup", "npm:react@0.13.1/lib/ReactCSSTransitionGroupChild"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var React = require("npm:react@0.13.1/lib/React");
  var assign = require("npm:react@0.13.1/lib/Object.assign");
  var ReactTransitionGroup = React.createFactory(require("npm:react@0.13.1/lib/ReactTransitionGroup"));
  var ReactCSSTransitionGroupChild = React.createFactory(require("npm:react@0.13.1/lib/ReactCSSTransitionGroupChild"));
  var ReactCSSTransitionGroup = React.createClass({
    displayName: 'ReactCSSTransitionGroup',
    propTypes: {
      transitionName: React.PropTypes.string.isRequired,
      transitionAppear: React.PropTypes.bool,
      transitionEnter: React.PropTypes.bool,
      transitionLeave: React.PropTypes.bool
    },
    getDefaultProps: function() {
      return {
        transitionAppear: false,
        transitionEnter: true,
        transitionLeave: true
      };
    },
    _wrapChild: function(child) {
      return ReactCSSTransitionGroupChild({
        name: this.props.transitionName,
        appear: this.props.transitionAppear,
        enter: this.props.transitionEnter,
        leave: this.props.transitionLeave
      }, child);
    },
    render: function() {
      return (ReactTransitionGroup(assign({}, this.props, {childFactory: this._wrapChild})));
    }
  });
  module.exports = ReactCSSTransitionGroup;
  global.define = __define;
  return module.exports;
});

System.register("npm:flummox@3.5.0/lib/Flux", ["npm:flummox@3.5.0/lib/Store", "npm:flummox@3.5.0/lib/Actions", "npm:flux@2.0.1", "npm:eventemitter3@0.1.6", "npm:object-assign@2.0.0", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    "use strict";
    var _interopRequire = function(obj) {
      return obj && obj.__esModule ? obj["default"] : obj;
    };
    var _applyConstructor = function(Constructor, args) {
      var instance = Object.create(Constructor.prototype);
      var result = Constructor.apply(instance, args);
      return result != null && (typeof result == "object" || typeof result == "function") ? result : instance;
    };
    var _createClass = (function() {
      function defineProperties(target, props) {
        for (var key in props) {
          var prop = props[key];
          prop.configurable = true;
          if (prop.value)
            prop.writable = true;
        }
        Object.defineProperties(target, props);
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    })();
    var _inherits = function(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }});
      if (superClass)
        subClass.__proto__ = superClass;
    };
    var _classCallCheck = function(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    var Store = _interopRequire(require("npm:flummox@3.5.0/lib/Store"));
    var Actions = _interopRequire(require("npm:flummox@3.5.0/lib/Actions"));
    var Dispatcher = require("npm:flux@2.0.1").Dispatcher;
    var EventEmitter = _interopRequire(require("npm:eventemitter3@0.1.6"));
    var assign = _interopRequire(require("npm:object-assign@2.0.0"));
    var Flux = (function(_EventEmitter) {
      function Flux() {
        _classCallCheck(this, Flux);
        this.dispatcher = new Dispatcher();
        this._stores = {};
        this._actions = {};
      }
      _inherits(Flux, _EventEmitter);
      _createClass(Flux, {
        createStore: {value: function createStore(key, _Store) {
            for (var _len = arguments.length,
                constructorArgs = Array(_len > 2 ? _len - 2 : 0),
                _key = 2; _key < _len; _key++) {
              constructorArgs[_key - 2] = arguments[_key];
            }
            if (!(_Store.prototype instanceof Store)) {
              var className = getClassName(_Store);
              throw new Error("You've attempted to create a store from the class " + className + ", which " + "does not have the base Store class in its prototype chain. Make sure " + ("you're using the `extends` keyword: `class " + className + " extends ") + "Store { ... }`");
            }
            if (this._stores.hasOwnProperty(key) && this._stores[key]) {
              throw new Error("You've attempted to create multiple stores with key " + key + ". Keys must " + "be unique.");
            }
            var store = _applyConstructor(_Store, constructorArgs);
            var token = this.dispatcher.register(store.handler.bind(store));
            store._waitFor = this.waitFor.bind(this);
            store._token = token;
            store._getAllActionIds = this.getAllActionIds.bind(this);
            this._stores[key] = store;
            return store;
          }},
        getStore: {value: function getStore(key) {
            return this._stores.hasOwnProperty(key) ? this._stores[key] : undefined;
          }},
        removeStore: {value: function removeStore(key) {
            if (this._stores.hasOwnProperty(key)) {
              this._stores[key].removeAllListeners();
              this.dispatcher.unregister(this._stores[key]._token);
              delete this._stores[key];
            } else {
              throw new Error("You've attempted to remove store with key " + key + " which does not exist.");
            }
          }},
        createActions: {value: function createActions(key, _Actions) {
            for (var _len = arguments.length,
                constructorArgs = Array(_len > 2 ? _len - 2 : 0),
                _key = 2; _key < _len; _key++) {
              constructorArgs[_key - 2] = arguments[_key];
            }
            if (!(_Actions.prototype instanceof Actions) && _Actions !== Actions) {
              if (typeof _Actions === "function") {
                var className = getClassName(_Actions);
                throw new Error("You've attempted to create actions from the class " + className + ", which " + "does not have the base Actions class in its prototype chain. Make " + ("sure you're using the `extends` keyword: `class " + className + " ") + "extends Actions { ... }`");
              } else {
                var properties = _Actions;
                _Actions = (function(_Actions2) {
                  var _class = function() {
                    _classCallCheck(this, _class);
                    if (_Actions2 != null) {
                      _Actions2.apply(this, arguments);
                    }
                  };
                  _inherits(_class, _Actions2);
                  return _class;
                })(Actions);
                assign(_Actions.prototype, properties);
              }
            }
            if (this._actions.hasOwnProperty(key) && this._actions[key]) {
              throw new Error("You've attempted to create multiple actions with key " + key + ". Keys " + "must be unique.");
            }
            var actions = _applyConstructor(_Actions, constructorArgs);
            actions.dispatch = this.dispatch.bind(this);
            actions.dispatchAsync = this.dispatchAsync.bind(this);
            this._actions[key] = actions;
            return actions;
          }},
        getActions: {value: function getActions(key) {
            return this._actions.hasOwnProperty(key) ? this._actions[key] : undefined;
          }},
        getActionIds: {value: function getActionIds(key) {
            var actions = this.getActions(key);
            if (!actions) {
              return ;
            }
            return actions.getConstants();
          }},
        removeActions: {value: function removeActions(key) {
            if (this._actions.hasOwnProperty(key)) {
              delete this._actions[key];
            } else {
              throw new Error("You've attempted to remove actions with key " + key + " which does not exist.");
            }
          }},
        getAllActionIds: {value: function getAllActionIds() {
            var actionIds = [];
            for (var key in this._actions) {
              if (!this._actions.hasOwnProperty(key))
                continue;
              var actionConstants = this._actions[key].getConstants();
              actionIds = actionIds.concat(getValues(actionConstants));
            }
            return actionIds;
          }},
        dispatch: {value: function dispatch(actionId, body) {
            this._dispatch({
              actionId: actionId,
              body: body
            });
          }},
        dispatchAsync: {value: function dispatchAsync(actionId, promise, actionArgs) {
            var _this = this;
            var payload = {
              actionId: actionId,
              async: "begin"
            };
            if (actionArgs)
              payload.actionArgs = actionArgs;
            this._dispatch(payload);
            return promise.then(function(body) {
              _this._dispatch({
                actionId: actionId,
                body: body,
                async: "success"
              });
              return body;
            }, function(error) {
              _this._dispatch({
                actionId: actionId,
                error: error,
                async: "failure"
              });
            })["catch"](function(error) {
              _this.emit("error", error);
              throw error;
            });
          }},
        _dispatch: {value: function _dispatch(payload) {
            this.dispatcher.dispatch(payload);
            this.emit("dispatch", payload);
          }},
        waitFor: {value: function waitFor(tokensOrStores) {
            if (!Array.isArray(tokensOrStores))
              tokensOrStores = [tokensOrStores];
            var ensureIsToken = function(tokenOrStore) {
              return tokenOrStore instanceof Store ? tokenOrStore._token : tokenOrStore;
            };
            var tokens = tokensOrStores.map(ensureIsToken);
            this.dispatcher.waitFor(tokens);
          }},
        removeAllStoreListeners: {value: function removeAllStoreListeners(event) {
            for (var key in this._stores) {
              if (!this._stores.hasOwnProperty(key))
                continue;
              var store = this._stores[key];
              store.removeAllListeners(event);
            }
          }},
        serialize: {value: function serialize() {
            var stateTree = {};
            for (var key in this._stores) {
              if (!this._stores.hasOwnProperty(key))
                continue;
              var store = this._stores[key];
              var serialize = store.constructor.serialize;
              if (typeof serialize !== "function")
                continue;
              var serializedStoreState = serialize(store.state);
              if (typeof serializedStoreState !== "string") {
                var className = store.constructor.name;
                if (process.env.NODE_ENV !== "production") {
                  console.warn("The store with key '" + key + "' was not serialized because the static " + ("method `" + className + ".serialize()` returned a non-string with type ") + ("'" + typeof serializedStoreState + "'."));
                }
              }
              stateTree[key] = serializedStoreState;
              if (typeof store.constructor.deserialize !== "function") {
                var className = store.constructor.name;
                if (process.env.NODE_ENV !== "production") {
                  console.warn("The class `" + className + "` has a `serialize()` method, but no " + "corresponding `deserialize()` method.");
                }
              }
            }
            return JSON.stringify(stateTree);
          }},
        deserialize: {value: function deserialize(serializedState) {
            var stateMap = undefined;
            try {
              stateMap = JSON.parse(serializedState);
            } catch (error) {
              var className = this.constructor.name;
              if (process.env.NODE_ENV !== "production") {
                throw new Error("Invalid value passed to `" + className + "#deserialize()`: " + ("" + serializedState));
              }
            }
            for (var key in this._stores) {
              if (!this._stores.hasOwnProperty(key))
                continue;
              var store = this._stores[key];
              var deserialize = store.constructor.deserialize;
              if (typeof deserialize !== "function")
                continue;
              var storeStateString = stateMap[key];
              var storeState = deserialize(storeStateString);
              store.replaceState(storeState);
              if (typeof store.constructor.serialize !== "function") {
                var className = store.constructor.name;
                if (process.env.NODE_ENV !== "production") {
                  console.warn("The class `" + className + "` has a `deserialize()` method, but no " + "corresponding `serialize()` method.");
                }
              }
            }
          }}
      });
      return Flux;
    })(EventEmitter);
    exports["default"] = Flux;
    Flux.prototype.getConstants = Flux.prototype.getActionIds;
    Flux.prototype.getAllConstants = Flux.prototype.getAllActionIds;
    Flux.prototype.dehydrate = Flux.prototype.serialize;
    Flux.prototype.hydrate = Flux.prototype.deserialize;
    function getClassName(Class) {
      return Class.prototype.constructor.name;
    }
    function getValues(object) {
      var values = [];
      for (var key in object) {
        if (!object.hasOwnProperty(key))
          continue;
        values.push(object[key]);
      }
      return values;
    }
    var Flummox = Flux;
    exports.Flux = Flux;
    exports.Flummox = Flummox;
    exports.Store = Store;
    exports.Actions = Actions;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react-canvas@0.0.1/lib/ImageCache", ["github:jspm/nodelibs-events@0.1.0", "npm:react@0.13.1/lib/Object.assign"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var EventEmitter = require("github:jspm/nodelibs-events@0.1.0");
  var assign = require("npm:react@0.13.1/lib/Object.assign");
  var NOOP = function() {};
  function Img(src) {
    this._originalSrc = src;
    this._img = new Image();
    this._img.onload = this.emit.bind(this, 'load');
    this._img.onerror = this.emit.bind(this, 'error');
    this._img.src = src;
    this.on('error', NOOP);
    this.setMaxListeners(100);
  }
  assign(Img.prototype, EventEmitter.prototype, {
    destructor: function() {
      this.removeAllListeners();
    },
    getOriginalSrc: function() {
      return this._originalSrc;
    },
    getRawImage: function() {
      return this._img;
    },
    getWidth: function() {
      return this._img.naturalWidth;
    },
    getHeight: function() {
      return this._img.naturalHeight;
    },
    isLoaded: function() {
      return this._img.naturalHeight > 0;
    }
  });
  var kInstancePoolLength = 300;
  var _instancePool = [];
  function getPooledImage(src) {
    for (var i = 0,
        len = _instancePool.length; i < len; i++) {
      if (_instancePool[i].getOriginalSrc() === src) {
        return _instancePool[i];
      }
    }
    return null;
  }
  var ImageCache = {get: function(src) {
      var image = getPooledImage(src);
      if (!image) {
        image = new Img(src);
        if (_instancePool.length >= kInstancePoolLength) {
          _instancePool.shift().destructor();
        }
        _instancePool.push(image);
      }
      return image;
    }};
  module.exports = ImageCache;
  global.define = __define;
  return module.exports;
});

System.register("npm:fkit@0.16.2/src/fkit", ["npm:fkit@0.16.2/src/util", "npm:fkit@0.16.2/src/fn", "npm:fkit@0.16.2/src/list", "npm:fkit@0.16.2/src/logic", "npm:fkit@0.16.2/src/math", "npm:fkit@0.16.2/src/obj", "npm:fkit@0.16.2/src/string"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var util = require("npm:fkit@0.16.2/src/util");
  module.exports = util.extend({}, [require("npm:fkit@0.16.2/src/fn"), require("npm:fkit@0.16.2/src/list"), require("npm:fkit@0.16.2/src/logic"), require("npm:fkit@0.16.2/src/math"), require("npm:fkit@0.16.2/src/obj"), require("npm:fkit@0.16.2/src/string")]);
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/keyMirror", ["npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var keyMirror = function(obj) {
      var ret = {};
      var key;
      ("production" !== process.env.NODE_ENV ? invariant(obj instanceof Object && !Array.isArray(obj), 'keyMirror(...): Argument must be an object.') : invariant(obj instanceof Object && !Array.isArray(obj)));
      for (key in obj) {
        if (!obj.hasOwnProperty(key)) {
          continue;
        }
        ret[key] = key;
      }
      return ret;
    };
    module.exports = keyMirror;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactChildren", ["npm:react@0.13.1/lib/PooledClass", "npm:react@0.13.1/lib/ReactFragment", "npm:react@0.13.1/lib/traverseAllChildren", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var PooledClass = require("npm:react@0.13.1/lib/PooledClass");
    var ReactFragment = require("npm:react@0.13.1/lib/ReactFragment");
    var traverseAllChildren = require("npm:react@0.13.1/lib/traverseAllChildren");
    var warning = require("npm:react@0.13.1/lib/warning");
    var twoArgumentPooler = PooledClass.twoArgumentPooler;
    var threeArgumentPooler = PooledClass.threeArgumentPooler;
    function ForEachBookKeeping(forEachFunction, forEachContext) {
      this.forEachFunction = forEachFunction;
      this.forEachContext = forEachContext;
    }
    PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);
    function forEachSingleChild(traverseContext, child, name, i) {
      var forEachBookKeeping = traverseContext;
      forEachBookKeeping.forEachFunction.call(forEachBookKeeping.forEachContext, child, i);
    }
    function forEachChildren(children, forEachFunc, forEachContext) {
      if (children == null) {
        return children;
      }
      var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
      traverseAllChildren(children, forEachSingleChild, traverseContext);
      ForEachBookKeeping.release(traverseContext);
    }
    function MapBookKeeping(mapResult, mapFunction, mapContext) {
      this.mapResult = mapResult;
      this.mapFunction = mapFunction;
      this.mapContext = mapContext;
    }
    PooledClass.addPoolingTo(MapBookKeeping, threeArgumentPooler);
    function mapSingleChildIntoContext(traverseContext, child, name, i) {
      var mapBookKeeping = traverseContext;
      var mapResult = mapBookKeeping.mapResult;
      var keyUnique = !mapResult.hasOwnProperty(name);
      if ("production" !== process.env.NODE_ENV) {
        ("production" !== process.env.NODE_ENV ? warning(keyUnique, 'ReactChildren.map(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', name) : null);
      }
      if (keyUnique) {
        var mappedChild = mapBookKeeping.mapFunction.call(mapBookKeeping.mapContext, child, i);
        mapResult[name] = mappedChild;
      }
    }
    function mapChildren(children, func, context) {
      if (children == null) {
        return children;
      }
      var mapResult = {};
      var traverseContext = MapBookKeeping.getPooled(mapResult, func, context);
      traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
      MapBookKeeping.release(traverseContext);
      return ReactFragment.create(mapResult);
    }
    function forEachSingleChildDummy(traverseContext, child, name, i) {
      return null;
    }
    function countChildren(children, context) {
      return traverseAllChildren(children, forEachSingleChildDummy, null);
    }
    var ReactChildren = {
      forEach: forEachChildren,
      map: mapChildren,
      count: countChildren
    };
    module.exports = ReactChildren;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactComponent", ["npm:react@0.13.1/lib/ReactUpdateQueue", "npm:react@0.13.1/lib/invariant", "npm:react@0.13.1/lib/warning", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactUpdateQueue = require("npm:react@0.13.1/lib/ReactUpdateQueue");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var warning = require("npm:react@0.13.1/lib/warning");
    function ReactComponent(props, context) {
      this.props = props;
      this.context = context;
    }
    ReactComponent.prototype.setState = function(partialState, callback) {
      ("production" !== process.env.NODE_ENV ? invariant(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null, 'setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.') : invariant(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null));
      if ("production" !== process.env.NODE_ENV) {
        ("production" !== process.env.NODE_ENV ? warning(partialState != null, 'setState(...): You passed an undefined or null state object; ' + 'instead, use forceUpdate().') : null);
      }
      ReactUpdateQueue.enqueueSetState(this, partialState);
      if (callback) {
        ReactUpdateQueue.enqueueCallback(this, callback);
      }
    };
    ReactComponent.prototype.forceUpdate = function(callback) {
      ReactUpdateQueue.enqueueForceUpdate(this);
      if (callback) {
        ReactUpdateQueue.enqueueCallback(this, callback);
      }
    };
    if ("production" !== process.env.NODE_ENV) {
      var deprecatedAPIs = {
        getDOMNode: 'getDOMNode',
        isMounted: 'isMounted',
        replaceProps: 'replaceProps',
        replaceState: 'replaceState',
        setProps: 'setProps'
      };
      var defineDeprecationWarning = function(methodName, displayName) {
        try {
          Object.defineProperty(ReactComponent.prototype, methodName, {get: function() {
              ("production" !== process.env.NODE_ENV ? warning(false, '%s(...) is deprecated in plain JavaScript React classes.', displayName) : null);
              return undefined;
            }});
        } catch (x) {}
      };
      for (var fnName in deprecatedAPIs) {
        if (deprecatedAPIs.hasOwnProperty(fnName)) {
          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        }
      }
    }
    module.exports = ReactComponent;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactDOMIDOperations", ["npm:react@0.13.1/lib/CSSPropertyOperations", "npm:react@0.13.1/lib/DOMChildrenOperations", "npm:react@0.13.1/lib/DOMPropertyOperations", "npm:react@0.13.1/lib/ReactMount", "npm:react@0.13.1/lib/ReactPerf", "npm:react@0.13.1/lib/invariant", "npm:react@0.13.1/lib/setInnerHTML", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var CSSPropertyOperations = require("npm:react@0.13.1/lib/CSSPropertyOperations");
    var DOMChildrenOperations = require("npm:react@0.13.1/lib/DOMChildrenOperations");
    var DOMPropertyOperations = require("npm:react@0.13.1/lib/DOMPropertyOperations");
    var ReactMount = require("npm:react@0.13.1/lib/ReactMount");
    var ReactPerf = require("npm:react@0.13.1/lib/ReactPerf");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var setInnerHTML = require("npm:react@0.13.1/lib/setInnerHTML");
    var INVALID_PROPERTY_ERRORS = {
      dangerouslySetInnerHTML: '`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.',
      style: '`style` must be set using `updateStylesByID()`.'
    };
    var ReactDOMIDOperations = {
      updatePropertyByID: function(id, name, value) {
        var node = ReactMount.getNode(id);
        ("production" !== process.env.NODE_ENV ? invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name), 'updatePropertyByID(...): %s', INVALID_PROPERTY_ERRORS[name]) : invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name)));
        if (value != null) {
          DOMPropertyOperations.setValueForProperty(node, name, value);
        } else {
          DOMPropertyOperations.deleteValueForProperty(node, name);
        }
      },
      deletePropertyByID: function(id, name, value) {
        var node = ReactMount.getNode(id);
        ("production" !== process.env.NODE_ENV ? invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name), 'updatePropertyByID(...): %s', INVALID_PROPERTY_ERRORS[name]) : invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name)));
        DOMPropertyOperations.deleteValueForProperty(node, name, value);
      },
      updateStylesByID: function(id, styles) {
        var node = ReactMount.getNode(id);
        CSSPropertyOperations.setValueForStyles(node, styles);
      },
      updateInnerHTMLByID: function(id, html) {
        var node = ReactMount.getNode(id);
        setInnerHTML(node, html);
      },
      updateTextContentByID: function(id, content) {
        var node = ReactMount.getNode(id);
        DOMChildrenOperations.updateTextContent(node, content);
      },
      dangerouslyReplaceNodeWithMarkupByID: function(id, markup) {
        var node = ReactMount.getNode(id);
        DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup(node, markup);
      },
      dangerouslyProcessChildrenUpdates: function(updates, markup) {
        for (var i = 0; i < updates.length; i++) {
          updates[i].parentNode = ReactMount.getNode(updates[i].parentID);
        }
        DOMChildrenOperations.processUpdates(updates, markup);
      }
    };
    ReactPerf.measureMethods(ReactDOMIDOperations, 'ReactDOMIDOperations', {
      updatePropertyByID: 'updatePropertyByID',
      deletePropertyByID: 'deletePropertyByID',
      updateStylesByID: 'updateStylesByID',
      updateInnerHTMLByID: 'updateInnerHTMLByID',
      updateTextContentByID: 'updateTextContentByID',
      dangerouslyReplaceNodeWithMarkupByID: 'dangerouslyReplaceNodeWithMarkupByID',
      dangerouslyProcessChildrenUpdates: 'dangerouslyProcessChildrenUpdates'
    });
    module.exports = ReactDOMIDOperations;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactWithAddons", ["npm:react@0.13.1/lib/LinkedStateMixin", "npm:react@0.13.1/lib/React", "npm:react@0.13.1/lib/ReactComponentWithPureRenderMixin", "npm:react@0.13.1/lib/ReactCSSTransitionGroup", "npm:react@0.13.1/lib/ReactFragment", "npm:react@0.13.1/lib/ReactTransitionGroup", "npm:react@0.13.1/lib/ReactUpdates", "npm:react@0.13.1/lib/cx", "npm:react@0.13.1/lib/cloneWithProps", "npm:react@0.13.1/lib/update", "npm:react@0.13.1/lib/ReactDefaultPerf", "npm:react@0.13.1/lib/ReactTestUtils", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var LinkedStateMixin = require("npm:react@0.13.1/lib/LinkedStateMixin");
    var React = require("npm:react@0.13.1/lib/React");
    var ReactComponentWithPureRenderMixin = require("npm:react@0.13.1/lib/ReactComponentWithPureRenderMixin");
    var ReactCSSTransitionGroup = require("npm:react@0.13.1/lib/ReactCSSTransitionGroup");
    var ReactFragment = require("npm:react@0.13.1/lib/ReactFragment");
    var ReactTransitionGroup = require("npm:react@0.13.1/lib/ReactTransitionGroup");
    var ReactUpdates = require("npm:react@0.13.1/lib/ReactUpdates");
    var cx = require("npm:react@0.13.1/lib/cx");
    var cloneWithProps = require("npm:react@0.13.1/lib/cloneWithProps");
    var update = require("npm:react@0.13.1/lib/update");
    React.addons = {
      CSSTransitionGroup: ReactCSSTransitionGroup,
      LinkedStateMixin: LinkedStateMixin,
      PureRenderMixin: ReactComponentWithPureRenderMixin,
      TransitionGroup: ReactTransitionGroup,
      batchedUpdates: ReactUpdates.batchedUpdates,
      classSet: cx,
      cloneWithProps: cloneWithProps,
      createFragment: ReactFragment.create,
      update: update
    };
    if ("production" !== process.env.NODE_ENV) {
      React.addons.Perf = require("npm:react@0.13.1/lib/ReactDefaultPerf");
      React.addons.TestUtils = require("npm:react@0.13.1/lib/ReactTestUtils");
    }
    module.exports = React;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:flummox@3.5.0/lib/addons/reactComponentMethods", ["npm:react@0.13.1", "npm:flummox@3.5.0/lib/Flux", "npm:object-assign@2.0.0"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var _interopRequire = function(obj) {
    return obj && obj.__esModule ? obj["default"] : obj;
  };
  Object.defineProperty(exports, "__esModule", {value: true});
  var _react = require("npm:react@0.13.1");
  var React = _interopRequire(_react);
  var PropTypes = _react.PropTypes;
  var Flux = require("npm:flummox@3.5.0/lib/Flux").Flux;
  var assign = _interopRequire(require("npm:object-assign@2.0.0"));
  var instanceMethods = {
    getChildContext: function getChildContext() {
      var flux = this.getFlux();
      if (!flux) {
        return {};
      }
      return {flux: flux};
    },
    getFlux: function getFlux() {
      return this.props.flux || this.context.flux;
    },
    initialize: function initialize() {
      this._fluxStateGetters = [];
      this._fluxListeners = {};
      this.flux = this.getFlux();
      if (!(this.flux instanceof Flux)) {
        throw new Error("fluxMixin: Could not find Flux instance. Ensure that your component " + "has either `this.context.flux` or `this.props.flux`.");
      }
    },
    componentWillUnmount: function componentWillUnmount() {
      var flux = this.getFlux();
      for (var key in this._fluxListeners) {
        if (!this._fluxListeners.hasOwnProperty(key))
          continue;
        var store = flux.getStore(key);
        if (typeof store === "undefined")
          continue;
        var listener = this._fluxListeners[key];
        store.removeListener("change", listener);
      }
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
      this.updateStores(nextProps);
    },
    updateStores: function updateStores() {
      var props = arguments[0] === undefined ? this.props : arguments[0];
      var state = this.getStoreState(props);
      this.setState(state);
    },
    getStoreState: function getStoreState() {
      var props = arguments[0] === undefined ? this.props : arguments[0];
      return this._fluxStateGetters.reduce(function(result, stateGetter) {
        var getter = stateGetter.getter;
        var stores = stateGetter.stores;
        var stateFromStores = getter(stores, props);
        return assign(result, stateFromStores);
      }, {});
    },
    connectToStores: function connectToStores() {
      var _this = this;
      var stateGetterMap = arguments[0] === undefined ? {} : arguments[0];
      var stateGetter = arguments[1] === undefined ? null : arguments[1];
      var flux = this.getFlux();
      var getStore = function(key) {
        var store = flux.getStore(key);
        if (typeof store === "undefined") {
          throw new Error("connectToStores(): Store with key '" + key + "' does not exist.");
        }
        return store;
      };
      if (typeof stateGetterMap === "string") {
        var key = stateGetterMap;
        var store = getStore(key);
        var getter = stateGetter || defaultStateGetter;
        this._fluxStateGetters.push({
          stores: store,
          getter: getter
        });
        var listener = createStoreListener(this, store, getter);
        store.addListener("change", listener);
        this._fluxListeners[key] = listener;
      } else if (Array.isArray(stateGetterMap)) {
        (function() {
          var stores = stateGetterMap.map(getStore);
          var getter = stateGetter || defaultReduceStateGetter;
          _this._fluxStateGetters.push({
            stores: stores,
            getter: getter
          });
          var listener = createStoreListener(_this, stores, getter);
          stateGetterMap.forEach(function(key, index) {
            var store = stores[index];
            store.addListener("change", listener);
            _this._fluxListeners[key] = listener;
          });
        })();
      } else {
        for (var key in stateGetterMap) {
          var store = getStore(key);
          var getter = stateGetterMap[key] || defaultStateGetter;
          this._fluxStateGetters.push({
            stores: store,
            getter: getter
          });
          var listener = createStoreListener(this, store, getter);
          store.addListener("change", listener);
          this._fluxListeners[key] = listener;
        }
      }
      return this.getStoreState();
    }
  };
  var staticProperties = {
    contextTypes: {flux: PropTypes.instanceOf(Flux)},
    childContextTypes: {flux: PropTypes.instanceOf(Flux)},
    propTypes: {
      connectToStores: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.object]),
      flux: PropTypes.instanceOf(Flux),
      render: React.PropTypes.func,
      stateGetter: React.PropTypes.func
    }
  };
  exports.instanceMethods = instanceMethods;
  exports.staticProperties = staticProperties;
  function createStoreListener(component, store, storeStateGetter) {
    return (function() {
      var state = storeStateGetter(store, this.props);
      this.setState(state);
    }).bind(component);
  }
  function defaultStateGetter(store) {
    return store.getStateAsObject();
  }
  function defaultReduceStateGetter(stores) {
    return stores.reduce(function(result, store) {
      return assign(result, store.getStateAsObject());
    }, {});
  }
  global.define = __define;
  return module.exports;
});

System.register("npm:react-canvas@0.0.1/lib/DrawingUtils", ["npm:react-canvas@0.0.1/lib/ImageCache", "npm:react-canvas@0.0.1/lib/FontUtils", "npm:react-canvas@0.0.1/lib/FontFace", "npm:react-canvas@0.0.1/lib/FrameUtils", "npm:react-canvas@0.0.1/lib/CanvasUtils", "npm:react-canvas@0.0.1/lib/Canvas"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var ImageCache = require("npm:react-canvas@0.0.1/lib/ImageCache");
  var FontUtils = require("npm:react-canvas@0.0.1/lib/FontUtils");
  var FontFace = require("npm:react-canvas@0.0.1/lib/FontFace");
  var FrameUtils = require("npm:react-canvas@0.0.1/lib/FrameUtils");
  var CanvasUtils = require("npm:react-canvas@0.0.1/lib/CanvasUtils");
  var Canvas = require("npm:react-canvas@0.0.1/lib/Canvas");
  var _backingStores = [];
  function getBackingStore(id) {
    for (var i = 0,
        len = _backingStores.length; i < len; i++) {
      if (_backingStores[i].id === id) {
        return _backingStores[i].canvas;
      }
    }
    return null;
  }
  function invalidateBackingStore(id) {
    for (var i = 0,
        len = _backingStores.length; i < len; i++) {
      if (_backingStores[i].id === id) {
        _backingStores.splice(i, 1);
        break;
      }
    }
  }
  function invalidateAllBackingStores() {
    _backingStores = [];
  }
  function getBackingStoreAncestor(layer) {
    while (layer) {
      if (layer.backingStoreId) {
        return layer;
      }
      layer = layer.parentLayer;
    }
    return null;
  }
  function layerContainsImage(layer, imageUrl) {
    if (layer.type === 'image' && layer.imageUrl === imageUrl) {
      return layer;
    }
    if (layer.children) {
      for (var i = 0,
          len = layer.children.length; i < len; i++) {
        if (layerContainsImage(layer.children[i], imageUrl)) {
          return layer.children[i];
        }
      }
    }
    return false;
  }
  function layerContainsFontFace(layer, fontFace) {
    if (layer.type === 'text' && layer.fontFace && layer.fontFace.id === fontFace.id) {
      return layer;
    }
    if (layer.children) {
      for (var i = 0,
          len = layer.children.length; i < len; i++) {
        if (layerContainsFontFace(layer.children[i], fontFace)) {
          return layer.children[i];
        }
      }
    }
    return false;
  }
  function handleImageLoad(imageUrl) {
    _backingStores.forEach(function(backingStore) {
      if (layerContainsImage(backingStore.layer, imageUrl)) {
        invalidateBackingStore(backingStore.id);
      }
    });
  }
  function handleFontLoad(fontFace) {
    _backingStores.forEach(function(backingStore) {
      if (layerContainsFontFace(backingStore.layer, fontFace)) {
        invalidateBackingStore(backingStore.id);
      }
    });
  }
  function drawRenderLayer(ctx, layer) {
    var customDrawFunc;
    if (typeof layer.alpha === 'number' && layer.alpha <= 0) {
      return ;
    }
    switch (layer.type) {
      case 'image':
        customDrawFunc = drawImageRenderLayer;
        break;
      case 'text':
        customDrawFunc = drawTextRenderLayer;
        break;
      case 'gradient':
        customDrawFunc = drawGradientRenderLayer;
        break;
    }
    var saveContext = (layer.alpha !== null && layer.alpha < 1) || (layer.translateX || layer.translateY);
    if (saveContext) {
      ctx.save();
      if (layer.alpha !== null && layer.alpha < 1) {
        ctx.globalAlpha = layer.alpha;
      }
      if (layer.translateX || layer.translateY) {
        ctx.translate(layer.translateX || 0, layer.translateY || 0);
      }
    }
    if (layer.backingStoreId) {
      drawCacheableRenderLayer(ctx, layer, customDrawFunc);
    } else {
      ctx.save();
      drawBaseRenderLayer(ctx, layer);
      customDrawFunc && customDrawFunc(ctx, layer);
      ctx.restore();
      if (layer.children) {
        layer.children.slice().sort(sortByZIndexAscending).forEach(function(childLayer) {
          drawRenderLayer(ctx, childLayer);
        });
      }
    }
    if (saveContext) {
      ctx.restore();
    }
  }
  function drawBaseRenderLayer(ctx, layer) {
    var frame = layer.frame;
    if (layer.borderRadius) {
      ctx.beginPath();
      ctx.moveTo(frame.x + layer.borderRadius, frame.y);
      ctx.arcTo(frame.x + frame.width, frame.y, frame.x + frame.width, frame.y + frame.height, layer.borderRadius);
      ctx.arcTo(frame.x + frame.width, frame.y + frame.height, frame.x, frame.y + frame.height, layer.borderRadius);
      ctx.arcTo(frame.x, frame.y + frame.height, frame.x, frame.y, layer.borderRadius);
      ctx.arcTo(frame.x, frame.y, frame.x + frame.width, frame.y, layer.borderRadius);
      ctx.closePath();
      if (layer.type === 'image') {
        ctx.clip();
      }
      if (layer.borderColor) {
        ctx.lineWidth = layer.borderWidth || 1;
        ctx.strokeStyle = layer.borderColor;
        ctx.stroke();
      }
    }
    if (layer.borderColor && !layer.borderRadius) {
      ctx.lineWidth = layer.borderWidth || 1;
      ctx.strokeStyle = layer.borderColor;
      ctx.strokeRect(frame.x, frame.y, frame.width, frame.height);
    }
    if (layer.backgroundColor) {
      ctx.fillStyle = layer.backgroundColor;
      if (layer.borderRadius) {
        ctx.fill();
      } else {
        ctx.fillRect(frame.x, frame.y, frame.width, frame.height);
      }
    }
  }
  function drawCacheableRenderLayer(ctx, layer, customDrawFunc) {
    var backingStore = getBackingStore(layer.backingStoreId);
    var backingStoreScale = layer.scale || window.devicePixelRatio;
    var frameOffsetY = layer.frame.y;
    var frameOffsetX = layer.frame.x;
    var backingContext;
    if (!backingStore) {
      if (_backingStores.length >= Canvas.poolSize) {
        backingStore = _backingStores[0].canvas;
        Canvas.call(backingStore, layer.frame.width, layer.frame.height, backingStoreScale);
        _backingStores[0].id = layer.backingStoreId;
        _backingStores[0].canvas = backingStore;
        _backingStores.push(_backingStores.shift());
      } else {
        backingStore = new Canvas(layer.frame.width, layer.frame.height, backingStoreScale);
        _backingStores.push({
          id: layer.backingStoreId,
          layer: layer,
          canvas: backingStore
        });
      }
      backingContext = backingStore.getContext('2d');
      layer.translate(-frameOffsetX, -frameOffsetY);
      backingContext.save();
      drawBaseRenderLayer(backingContext, layer);
      customDrawFunc && customDrawFunc(backingContext, layer);
      backingContext.restore();
      if (layer.children) {
        layer.children.slice().sort(sortByZIndexAscending).forEach(function(childLayer) {
          drawRenderLayer(backingContext, childLayer);
        });
      }
      layer.translate(frameOffsetX, frameOffsetY);
    }
    if (layer.clipRect) {
      var sx = (layer.clipRect.x - layer.frame.x) * backingStoreScale;
      var sy = (layer.clipRect.y - layer.frame.y) * backingStoreScale;
      var sw = layer.clipRect.width * backingStoreScale;
      var sh = layer.clipRect.height * backingStoreScale;
      var dx = layer.clipRect.x;
      var dy = layer.clipRect.y;
      var dw = layer.clipRect.width;
      var dh = layer.clipRect.height;
      if (sw > 0 && sh > 0) {
        ctx.drawImage(backingStore.getRawCanvas(), sx, sy, sw, sh, dx, dy, dw, dh);
      }
    } else {
      ctx.drawImage(backingStore.getRawCanvas(), layer.frame.x, layer.frame.y, layer.frame.width, layer.frame.height);
    }
  }
  function sortByZIndexAscending(layerA, layerB) {
    return (layerA.zIndex || 0) - (layerB.zIndex || 0);
  }
  function drawImageRenderLayer(ctx, layer) {
    if (!layer.imageUrl) {
      return ;
    }
    var image = ImageCache.get(layer.imageUrl);
    if (!image.isLoaded()) {
      return ;
    }
    CanvasUtils.drawImage(ctx, image, layer.frame.x, layer.frame.y, layer.frame.width, layer.frame.height);
  }
  function drawTextRenderLayer(ctx, layer) {
    var fontFace = layer.fontFace || FontFace.Default();
    if (!FontUtils.isFontLoaded(fontFace)) {
      return ;
    }
    CanvasUtils.drawText(ctx, layer.text, layer.frame.x, layer.frame.y, layer.frame.width, layer.frame.height, fontFace, {
      fontSize: layer.fontSize,
      lineHeight: layer.lineHeight,
      textAlign: layer.textAlign,
      color: layer.color
    });
  }
  function drawGradientRenderLayer(ctx, layer) {
    var x1 = layer.x1 || layer.frame.x;
    var y1 = layer.y1 || layer.frame.y;
    var x2 = layer.x2 || layer.frame.x;
    var y2 = layer.y2 || layer.frame.y + layer.frame.height;
    CanvasUtils.drawGradient(ctx, x1, y1, x2, y2, layer.colorStops, layer.frame.x, layer.frame.y, layer.frame.width, layer.frame.height);
  }
  module.exports = {
    drawRenderLayer: drawRenderLayer,
    invalidateBackingStore: invalidateBackingStore,
    invalidateAllBackingStores: invalidateAllBackingStores,
    handleImageLoad: handleImageLoad,
    handleFontLoad: handleFontLoad,
    layerContainsImage: layerContainsImage,
    layerContainsFontFace: layerContainsFontFace
  };
  global.define = __define;
  return module.exports;
});

System.register("npm:fkit@0.16.2", ["npm:fkit@0.16.2/src/fkit"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:fkit@0.16.2/src/fkit");
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/EventConstants", ["npm:react@0.13.1/lib/keyMirror"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var keyMirror = require("npm:react@0.13.1/lib/keyMirror");
  var PropagationPhases = keyMirror({
    bubbled: null,
    captured: null
  });
  var topLevelTypes = keyMirror({
    topBlur: null,
    topChange: null,
    topClick: null,
    topCompositionEnd: null,
    topCompositionStart: null,
    topCompositionUpdate: null,
    topContextMenu: null,
    topCopy: null,
    topCut: null,
    topDoubleClick: null,
    topDrag: null,
    topDragEnd: null,
    topDragEnter: null,
    topDragExit: null,
    topDragLeave: null,
    topDragOver: null,
    topDragStart: null,
    topDrop: null,
    topError: null,
    topFocus: null,
    topInput: null,
    topKeyDown: null,
    topKeyPress: null,
    topKeyUp: null,
    topLoad: null,
    topMouseDown: null,
    topMouseMove: null,
    topMouseOut: null,
    topMouseOver: null,
    topMouseUp: null,
    topPaste: null,
    topReset: null,
    topScroll: null,
    topSelectionChange: null,
    topSubmit: null,
    topTextInput: null,
    topTouchCancel: null,
    topTouchEnd: null,
    topTouchMove: null,
    topTouchStart: null,
    topWheel: null
  });
  var EventConstants = {
    topLevelTypes: topLevelTypes,
    PropagationPhases: PropagationPhases
  };
  module.exports = EventConstants;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactComponentBrowserEnvironment", ["npm:react@0.13.1/lib/ReactDOMIDOperations", "npm:react@0.13.1/lib/ReactMount", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var ReactDOMIDOperations = require("npm:react@0.13.1/lib/ReactDOMIDOperations");
    var ReactMount = require("npm:react@0.13.1/lib/ReactMount");
    var ReactComponentBrowserEnvironment = {
      processChildrenUpdates: ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,
      replaceNodeWithMarkupByID: ReactDOMIDOperations.dangerouslyReplaceNodeWithMarkupByID,
      unmountIDFromEnvironment: function(rootNodeID) {
        ReactMount.purgeID(rootNodeID);
      }
    };
    module.exports = ReactComponentBrowserEnvironment;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/addons", ["npm:react@0.13.1/lib/ReactWithAddons"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:react@0.13.1/lib/ReactWithAddons");
  global.define = __define;
  return module.exports;
});

System.register("npm:react-canvas@0.0.1/lib/RenderLayer", ["npm:react-canvas@0.0.1/lib/FrameUtils", "npm:react-canvas@0.0.1/lib/DrawingUtils", "npm:react-canvas@0.0.1/lib/EventTypes"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var FrameUtils = require("npm:react-canvas@0.0.1/lib/FrameUtils");
  var DrawingUtils = require("npm:react-canvas@0.0.1/lib/DrawingUtils");
  var EventTypes = require("npm:react-canvas@0.0.1/lib/EventTypes");
  function RenderLayer() {
    this.children = [];
    this.frame = FrameUtils.zero();
  }
  RenderLayer.prototype = {
    getRootLayer: function() {
      var root = this;
      while (root.parentLayer) {
        root = root.parentLayer;
      }
      return root;
    },
    inject: function(parentLayer) {
      if (this.parentLayer && this.parentLayer !== parentLayer) {
        this.remove();
      }
      if (!this.parentLayer) {
        parentLayer.addChild(this);
      }
    },
    injectBefore: function(parentLayer, referenceLayer) {
      this.inject(parentLayer);
    },
    addChild: function(child) {
      child.parentLayer = this;
      this.children.push(child);
    },
    remove: function() {
      if (this.parentLayer) {
        this.parentLayer.children.splice(this.parentLayer.children.indexOf(this), 1);
      }
    },
    subscribe: function(type, callback, callbackScope) {
      for (var eventType in EventTypes) {
        if (EventTypes[eventType] === type) {
          this[eventType] = callback;
        }
      }
      return this.removeEventListener.bind(this, type, callback, callbackScope);
    },
    addEventListener: function(type, callback, callbackScope) {
      for (var eventType in EventTypes) {
        if (EventTypes[eventType] === type) {
          delete this[eventType];
        }
      }
    },
    removeEventListener: function(type, callback, callbackScope) {
      var listeners = this.eventListeners[type];
      var listener;
      if (listeners) {
        for (var index = 0,
            len = listeners.length; index < len; index++) {
          listener = listeners[index];
          if (listener.callback === callback && listener.callbackScope === callbackScope) {
            listeners.splice(index, 1);
            break;
          }
        }
      }
    },
    translate: function(x, y) {
      if (this.frame) {
        this.frame.x += x;
        this.frame.y += y;
      }
      if (this.clipRect) {
        this.clipRect.x += x;
        this.clipRect.y += y;
      }
      if (this.children) {
        this.children.forEach(function(child) {
          child.translate(x, y);
        });
      }
    },
    invalidateLayout: function() {
      this.getRootLayer().draw();
    },
    invalidateBackingStore: function() {
      if (this.backingStoreId) {
        DrawingUtils.invalidateBackingStore(this.backingStoreId);
      }
      this.invalidateLayout();
    },
    draw: function() {}
  };
  module.exports = RenderLayer;
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/EventPluginUtils", ["npm:react@0.13.1/lib/EventConstants", "npm:react@0.13.1/lib/invariant", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var EventConstants = require("npm:react@0.13.1/lib/EventConstants");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var injection = {
      Mount: null,
      injectMount: function(InjectedMount) {
        injection.Mount = InjectedMount;
        if ("production" !== process.env.NODE_ENV) {
          ("production" !== process.env.NODE_ENV ? invariant(InjectedMount && InjectedMount.getNode, 'EventPluginUtils.injection.injectMount(...): Injected Mount module ' + 'is missing getNode.') : invariant(InjectedMount && InjectedMount.getNode));
        }
      }
    };
    var topLevelTypes = EventConstants.topLevelTypes;
    function isEndish(topLevelType) {
      return topLevelType === topLevelTypes.topMouseUp || topLevelType === topLevelTypes.topTouchEnd || topLevelType === topLevelTypes.topTouchCancel;
    }
    function isMoveish(topLevelType) {
      return topLevelType === topLevelTypes.topMouseMove || topLevelType === topLevelTypes.topTouchMove;
    }
    function isStartish(topLevelType) {
      return topLevelType === topLevelTypes.topMouseDown || topLevelType === topLevelTypes.topTouchStart;
    }
    var validateEventDispatches;
    if ("production" !== process.env.NODE_ENV) {
      validateEventDispatches = function(event) {
        var dispatchListeners = event._dispatchListeners;
        var dispatchIDs = event._dispatchIDs;
        var listenersIsArr = Array.isArray(dispatchListeners);
        var idsIsArr = Array.isArray(dispatchIDs);
        var IDsLen = idsIsArr ? dispatchIDs.length : dispatchIDs ? 1 : 0;
        var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;
        ("production" !== process.env.NODE_ENV ? invariant(idsIsArr === listenersIsArr && IDsLen === listenersLen, 'EventPluginUtils: Invalid `event`.') : invariant(idsIsArr === listenersIsArr && IDsLen === listenersLen));
      };
    }
    function forEachEventDispatch(event, cb) {
      var dispatchListeners = event._dispatchListeners;
      var dispatchIDs = event._dispatchIDs;
      if ("production" !== process.env.NODE_ENV) {
        validateEventDispatches(event);
      }
      if (Array.isArray(dispatchListeners)) {
        for (var i = 0; i < dispatchListeners.length; i++) {
          if (event.isPropagationStopped()) {
            break;
          }
          cb(event, dispatchListeners[i], dispatchIDs[i]);
        }
      } else if (dispatchListeners) {
        cb(event, dispatchListeners, dispatchIDs);
      }
    }
    function executeDispatch(event, listener, domID) {
      event.currentTarget = injection.Mount.getNode(domID);
      var returnValue = listener(event, domID);
      event.currentTarget = null;
      return returnValue;
    }
    function executeDispatchesInOrder(event, cb) {
      forEachEventDispatch(event, cb);
      event._dispatchListeners = null;
      event._dispatchIDs = null;
    }
    function executeDispatchesInOrderStopAtTrueImpl(event) {
      var dispatchListeners = event._dispatchListeners;
      var dispatchIDs = event._dispatchIDs;
      if ("production" !== process.env.NODE_ENV) {
        validateEventDispatches(event);
      }
      if (Array.isArray(dispatchListeners)) {
        for (var i = 0; i < dispatchListeners.length; i++) {
          if (event.isPropagationStopped()) {
            break;
          }
          if (dispatchListeners[i](event, dispatchIDs[i])) {
            return dispatchIDs[i];
          }
        }
      } else if (dispatchListeners) {
        if (dispatchListeners(event, dispatchIDs)) {
          return dispatchIDs;
        }
      }
      return null;
    }
    function executeDispatchesInOrderStopAtTrue(event) {
      var ret = executeDispatchesInOrderStopAtTrueImpl(event);
      event._dispatchIDs = null;
      event._dispatchListeners = null;
      return ret;
    }
    function executeDirectDispatch(event) {
      if ("production" !== process.env.NODE_ENV) {
        validateEventDispatches(event);
      }
      var dispatchListener = event._dispatchListeners;
      var dispatchID = event._dispatchIDs;
      ("production" !== process.env.NODE_ENV ? invariant(!Array.isArray(dispatchListener), 'executeDirectDispatch(...): Invalid `event`.') : invariant(!Array.isArray(dispatchListener)));
      var res = dispatchListener ? dispatchListener(event, dispatchID) : null;
      event._dispatchListeners = null;
      event._dispatchIDs = null;
      return res;
    }
    function hasDispatches(event) {
      return !!event._dispatchListeners;
    }
    var EventPluginUtils = {
      isEndish: isEndish,
      isMoveish: isMoveish,
      isStartish: isStartish,
      executeDirectDispatch: executeDirectDispatch,
      executeDispatch: executeDispatch,
      executeDispatchesInOrder: executeDispatchesInOrder,
      executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
      hasDispatches: hasDispatches,
      injection: injection,
      useTouchEvents: false
    };
    module.exports = EventPluginUtils;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/ReactDOMTextComponent", ["npm:react@0.13.1/lib/DOMPropertyOperations", "npm:react@0.13.1/lib/ReactComponentBrowserEnvironment", "npm:react@0.13.1/lib/ReactDOMComponent", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/escapeTextContentForBrowser"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  'use strict';
  var DOMPropertyOperations = require("npm:react@0.13.1/lib/DOMPropertyOperations");
  var ReactComponentBrowserEnvironment = require("npm:react@0.13.1/lib/ReactComponentBrowserEnvironment");
  var ReactDOMComponent = require("npm:react@0.13.1/lib/ReactDOMComponent");
  var assign = require("npm:react@0.13.1/lib/Object.assign");
  var escapeTextContentForBrowser = require("npm:react@0.13.1/lib/escapeTextContentForBrowser");
  var ReactDOMTextComponent = function(props) {};
  assign(ReactDOMTextComponent.prototype, {
    construct: function(text) {
      this._currentElement = text;
      this._stringText = '' + text;
      this._rootNodeID = null;
      this._mountIndex = 0;
    },
    mountComponent: function(rootID, transaction, context) {
      this._rootNodeID = rootID;
      var escapedText = escapeTextContentForBrowser(this._stringText);
      if (transaction.renderToStaticMarkup) {
        return escapedText;
      }
      return ('<span ' + DOMPropertyOperations.createMarkupForID(rootID) + '>' + escapedText + '</span>');
    },
    receiveComponent: function(nextText, transaction) {
      if (nextText !== this._currentElement) {
        this._currentElement = nextText;
        var nextStringText = '' + nextText;
        if (nextStringText !== this._stringText) {
          this._stringText = nextStringText;
          ReactDOMComponent.BackendIDOperations.updateTextContentByID(this._rootNodeID, nextStringText);
        }
      }
    },
    unmountComponent: function() {
      ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
    }
  });
  module.exports = ReactDOMTextComponent;
  global.define = __define;
  return module.exports;
});

System.register("npm:flummox@3.5.0/lib/addons/FluxComponent", ["npm:react@0.13.1/addons", "npm:flummox@3.5.0/lib/addons/reactComponentMethods", "npm:object-assign@2.0.0"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  "use strict";
  var _interopRequire = function(obj) {
    return obj && obj.__esModule ? obj["default"] : obj;
  };
  var _objectWithoutProperties = function(obj, keys) {
    var target = {};
    for (var i in obj) {
      if (keys.indexOf(i) >= 0)
        continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i))
        continue;
      target[i] = obj[i];
    }
    return target;
  };
  var _createClass = (function() {
    function defineProperties(target, props) {
      for (var key in props) {
        var prop = props[key];
        prop.configurable = true;
        if (prop.value)
          prop.writable = true;
      }
      Object.defineProperties(target, props);
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  var _get = function get(object, property, receiver) {
    var desc = Object.getOwnPropertyDescriptor(object, property);
    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);
      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc && desc.writable) {
      return desc.value;
    } else {
      var getter = desc.get;
      if (getter === undefined) {
        return undefined;
      }
      return getter.call(receiver);
    }
  };
  var _inherits = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }});
    if (superClass)
      subClass.__proto__ = superClass;
  };
  var _classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  var React = _interopRequire(require("npm:react@0.13.1/addons"));
  var _reactComponentMethods = require("npm:flummox@3.5.0/lib/addons/reactComponentMethods");
  var instanceMethods = _reactComponentMethods.instanceMethods;
  var staticProperties = _reactComponentMethods.staticProperties;
  var assign = _interopRequire(require("npm:object-assign@2.0.0"));
  var FluxComponent = (function(_React$Component) {
    function FluxComponent(props, context) {
      _classCallCheck(this, FluxComponent);
      _get(Object.getPrototypeOf(FluxComponent.prototype), "constructor", this).call(this, props, context);
      this.initialize();
      this.state = this.connectToStores(props.connectToStores, props.stateGetter);
      this.wrapChild = this.wrapChild.bind(this);
    }
    _inherits(FluxComponent, _React$Component);
    _createClass(FluxComponent, {
      wrapChild: {value: function wrapChild(child) {
          return React.addons.cloneWithProps(child, this.getChildProps());
        }},
      getChildProps: {value: function getChildProps() {
          var _props = this.props;
          var children = _props.children;
          var render = _props.render;
          var connectToStores = _props.connectToStores;
          var stateGetter = _props.stateGetter;
          var flux = _props.flux;
          var extraProps = _objectWithoutProperties(_props, ["children", "render", "connectToStores", "stateGetter", "flux"]);
          return assign({flux: this.getFlux()}, this.state, extraProps);
        }},
      render: {value: function render() {
          var _props = this.props;
          var children = _props.children;
          var render = _props.render;
          if (typeof render === "function") {
            return render(this.getChildProps(), this.getFlux());
          }
          if (!children) {
            return null;
          }
          if (!Array.isArray(children)) {
            var child = children;
            return this.wrapChild(child);
          } else {
            return React.createElement("span", null, React.Children.map(children, this.wrapChild));
          }
        }}
    });
    return FluxComponent;
  })(React.Component);
  assign(FluxComponent.prototype, instanceMethods);
  assign(FluxComponent, staticProperties);
  module.exports = FluxComponent;
  global.define = __define;
  return module.exports;
});

System.register("npm:react-canvas@0.0.1/lib/Surface", ["npm:react@0.13.1", "npm:react@0.13.1/lib/ReactUpdates", "npm:react@0.13.1/lib/invariant", "npm:react-canvas@0.0.1/lib/ContainerMixin", "npm:react-canvas@0.0.1/lib/RenderLayer", "npm:react-canvas@0.0.1/lib/FrameUtils", "npm:react-canvas@0.0.1/lib/DrawingUtils", "npm:react-canvas@0.0.1/lib/hitTest", "npm:react-canvas@0.0.1/lib/layoutNode", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var React = require("npm:react@0.13.1");
    var ReactUpdates = require("npm:react@0.13.1/lib/ReactUpdates");
    var invariant = require("npm:react@0.13.1/lib/invariant");
    var ContainerMixin = require("npm:react-canvas@0.0.1/lib/ContainerMixin");
    var RenderLayer = require("npm:react-canvas@0.0.1/lib/RenderLayer");
    var FrameUtils = require("npm:react-canvas@0.0.1/lib/FrameUtils");
    var DrawingUtils = require("npm:react-canvas@0.0.1/lib/DrawingUtils");
    var hitTest = require("npm:react-canvas@0.0.1/lib/hitTest");
    var layoutNode = require("npm:react-canvas@0.0.1/lib/layoutNode");
    var Surface = React.createClass({
      mixins: [ContainerMixin],
      propTypes: {
        top: React.PropTypes.number.isRequired,
        left: React.PropTypes.number.isRequired,
        width: React.PropTypes.number.isRequired,
        height: React.PropTypes.number.isRequired,
        scale: React.PropTypes.number.isRequired,
        enableCSSLayout: React.PropTypes.bool
      },
      getDefaultProps: function() {
        return {scale: window.devicePixelRatio || 1};
      },
      componentDidMount: function() {
        this.scale();
        this.node = new RenderLayer();
        this.node.frame = FrameUtils.make(this.props.left, this.props.top, this.props.width, this.props.height);
        this.node.draw = this.batchedTick;
        var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
        transaction.perform(this.mountAndInjectChildrenAtRoot, this, this.props.children, transaction);
        ReactUpdates.ReactReconcileTransaction.release(transaction);
        this.node.draw();
      },
      componentWillUnmount: function() {
        this.unmountChildren();
      },
      componentDidUpdate: function(prevProps, prevState) {
        var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
        transaction.perform(this.updateChildrenAtRoot, this, this.props.children, transaction);
        ReactUpdates.ReactReconcileTransaction.release(transaction);
        if (prevProps.width !== this.props.width || prevProps.height !== this.props.height) {
          this.scale();
        }
        if (this.node) {
          this.node.draw();
        }
      },
      render: function() {
        var width = this.props.width * this.props.scale;
        var height = this.props.height * this.props.scale;
        var style = {
          width: this.props.width,
          height: this.props.height
        };
        return (React.createElement('canvas', {
          ref: 'canvas',
          width: width,
          height: height,
          style: style,
          onTouchStart: this.handleTouchStart,
          onTouchMove: this.handleTouchMove,
          onTouchEnd: this.handleTouchEnd,
          onTouchCancel: this.handleTouchEnd,
          onClick: this.handleClick
        }));
      },
      getContext: function() {
        ('production' !== process.env.NODE_ENV ? invariant(this.isMounted(), 'Tried to access drawing context on an unmounted Surface.') : invariant(this.isMounted()));
        return this.refs.canvas.getDOMNode().getContext('2d');
      },
      scale: function() {
        this.getContext().scale(this.props.scale, this.props.scale);
      },
      batchedTick: function() {
        if (this._frameReady === false) {
          this._pendingTick = true;
          return ;
        }
        this.tick();
      },
      tick: function() {
        this._frameReady = false;
        this.clear();
        this.draw();
        requestAnimationFrame(this.afterTick);
      },
      afterTick: function() {
        this._frameReady = true;
        if (this._pendingTick) {
          this.tick();
          this._pendingTick = false;
        }
      },
      clear: function() {
        this.getContext().clearRect(0, 0, this.props.width, this.props.height);
      },
      draw: function() {
        var layout;
        if (this.node) {
          if (this.props.enableCSSLayout) {
            layout = layoutNode(this.node);
          }
          DrawingUtils.drawRenderLayer(this.getContext(), this.node);
        }
      },
      hitTest: function(e) {
        var hitTarget = hitTest(e, this.node, this.getDOMNode());
        if (hitTarget) {
          hitTarget[hitTest.getHitHandle(e.type)](e);
        }
      },
      handleTouchStart: function(e) {
        var hitTarget = hitTest(e, this.node, this.getDOMNode());
        var touch;
        if (hitTarget) {
          this._touches = this._touches || {};
          for (var i = 0,
              len = e.touches.length; i < len; i++) {
            touch = e.touches[i];
            this._touches[touch.identifier] = hitTarget;
          }
          hitTarget[hitTest.getHitHandle(e.type)](e);
        }
      },
      handleTouchMove: function(e) {
        this.hitTest(e);
      },
      handleTouchEnd: function(e) {
        if (!this._touches) {
          return ;
        }
        var hitTarget;
        var hitHandle = hitTest.getHitHandle(e.type);
        for (var i = 0,
            len = e.changedTouches.length; i < len; i++) {
          hitTarget = this._touches[e.changedTouches[i].identifier];
          if (hitTarget && hitTarget[hitHandle]) {
            hitTarget[hitHandle](e);
          }
          delete this._touches[e.changedTouches[i].identifier];
        }
      },
      handleClick: function(e) {
        this.hitTest(e);
      }
    });
    module.exports = Surface;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/lib/React", ["npm:react@0.13.1/lib/EventPluginUtils", "npm:react@0.13.1/lib/ReactChildren", "npm:react@0.13.1/lib/ReactComponent", "npm:react@0.13.1/lib/ReactClass", "npm:react@0.13.1/lib/ReactContext", "npm:react@0.13.1/lib/ReactCurrentOwner", "npm:react@0.13.1/lib/ReactElement", "npm:react@0.13.1/lib/ReactElementValidator", "npm:react@0.13.1/lib/ReactDOM", "npm:react@0.13.1/lib/ReactDOMTextComponent", "npm:react@0.13.1/lib/ReactDefaultInjection", "npm:react@0.13.1/lib/ReactInstanceHandles", "npm:react@0.13.1/lib/ReactMount", "npm:react@0.13.1/lib/ReactPerf", "npm:react@0.13.1/lib/ReactPropTypes", "npm:react@0.13.1/lib/ReactReconciler", "npm:react@0.13.1/lib/ReactServerRendering", "npm:react@0.13.1/lib/Object.assign", "npm:react@0.13.1/lib/findDOMNode", "npm:react@0.13.1/lib/onlyChild", "npm:react@0.13.1/lib/ExecutionEnvironment", "github:jspm/nodelibs-process@0.1.1"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  (function(process) {
    'use strict';
    var EventPluginUtils = require("npm:react@0.13.1/lib/EventPluginUtils");
    var ReactChildren = require("npm:react@0.13.1/lib/ReactChildren");
    var ReactComponent = require("npm:react@0.13.1/lib/ReactComponent");
    var ReactClass = require("npm:react@0.13.1/lib/ReactClass");
    var ReactContext = require("npm:react@0.13.1/lib/ReactContext");
    var ReactCurrentOwner = require("npm:react@0.13.1/lib/ReactCurrentOwner");
    var ReactElement = require("npm:react@0.13.1/lib/ReactElement");
    var ReactElementValidator = require("npm:react@0.13.1/lib/ReactElementValidator");
    var ReactDOM = require("npm:react@0.13.1/lib/ReactDOM");
    var ReactDOMTextComponent = require("npm:react@0.13.1/lib/ReactDOMTextComponent");
    var ReactDefaultInjection = require("npm:react@0.13.1/lib/ReactDefaultInjection");
    var ReactInstanceHandles = require("npm:react@0.13.1/lib/ReactInstanceHandles");
    var ReactMount = require("npm:react@0.13.1/lib/ReactMount");
    var ReactPerf = require("npm:react@0.13.1/lib/ReactPerf");
    var ReactPropTypes = require("npm:react@0.13.1/lib/ReactPropTypes");
    var ReactReconciler = require("npm:react@0.13.1/lib/ReactReconciler");
    var ReactServerRendering = require("npm:react@0.13.1/lib/ReactServerRendering");
    var assign = require("npm:react@0.13.1/lib/Object.assign");
    var findDOMNode = require("npm:react@0.13.1/lib/findDOMNode");
    var onlyChild = require("npm:react@0.13.1/lib/onlyChild");
    ReactDefaultInjection.inject();
    var createElement = ReactElement.createElement;
    var createFactory = ReactElement.createFactory;
    var cloneElement = ReactElement.cloneElement;
    if ("production" !== process.env.NODE_ENV) {
      createElement = ReactElementValidator.createElement;
      createFactory = ReactElementValidator.createFactory;
      cloneElement = ReactElementValidator.cloneElement;
    }
    var render = ReactPerf.measure('React', 'render', ReactMount.render);
    var React = {
      Children: {
        map: ReactChildren.map,
        forEach: ReactChildren.forEach,
        count: ReactChildren.count,
        only: onlyChild
      },
      Component: ReactComponent,
      DOM: ReactDOM,
      PropTypes: ReactPropTypes,
      initializeTouchEvents: function(shouldUseTouch) {
        EventPluginUtils.useTouchEvents = shouldUseTouch;
      },
      createClass: ReactClass.createClass,
      createElement: createElement,
      cloneElement: cloneElement,
      createFactory: createFactory,
      createMixin: function(mixin) {
        return mixin;
      },
      constructAndRenderComponent: ReactMount.constructAndRenderComponent,
      constructAndRenderComponentByID: ReactMount.constructAndRenderComponentByID,
      findDOMNode: findDOMNode,
      render: render,
      renderToString: ReactServerRendering.renderToString,
      renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
      unmountComponentAtNode: ReactMount.unmountComponentAtNode,
      isValidElement: ReactElement.isValidElement,
      withContext: ReactContext.withContext,
      __spread: assign
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
        CurrentOwner: ReactCurrentOwner,
        InstanceHandles: ReactInstanceHandles,
        Mount: ReactMount,
        Reconciler: ReactReconciler,
        TextComponent: ReactDOMTextComponent
      });
    }
    if ("production" !== process.env.NODE_ENV) {
      var ExecutionEnvironment = require("npm:react@0.13.1/lib/ExecutionEnvironment");
      if (ExecutionEnvironment.canUseDOM && window.top === window.self) {
        if (navigator.userAgent.indexOf('Chrome') > -1) {
          if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
            console.debug('Download the React DevTools for a better development experience: ' + 'http://fb.me/react-devtools');
          }
        }
        var expectedFeatures = [Array.isArray, Array.prototype.every, Array.prototype.forEach, Array.prototype.indexOf, Array.prototype.map, Date.now, Function.prototype.bind, Object.keys, String.prototype.split, String.prototype.trim, Object.create, Object.freeze];
        for (var i = 0; i < expectedFeatures.length; i++) {
          if (!expectedFeatures[i]) {
            console.error('One or more ES5 shim/shams expected by React are not available: ' + 'http://fb.me/react-warning-polyfills');
            break;
          }
        }
      }
    }
    React.version = '0.13.1';
    module.exports = React;
  })(require("github:jspm/nodelibs-process@0.1.1"));
  global.define = __define;
  return module.exports;
});

System.register("npm:flummox@3.5.0/component", ["npm:flummox@3.5.0/lib/addons/FluxComponent"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:flummox@3.5.0/lib/addons/FluxComponent");
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1/react", ["npm:react@0.13.1/lib/React"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:react@0.13.1/lib/React");
  global.define = __define;
  return module.exports;
});

System.register("npm:react@0.13.1", ["npm:react@0.13.1/react"], true, function(require, exports, module) {
  var global = System.global,
      __define = global.define;
  global.define = undefined;
  module.exports = require("npm:react@0.13.1/react");
  global.define = __define;
  return module.exports;
});

System.register("lib/colors", [], function (_export) {
  return {
    setters: [],
    execute: function () {
      "use strict";

      _export("default", [{
        name: "Default",
        foreground: "black",
        background: "white"
      }, {
        name: "Inverse",
        foreground: "white",
        background: "black"
      }, {
        name: "Jaffa",
        foreground: "hsl(0, 0%, 13%)",
        background: "rgb(242,70,17)"
      }, {
        name: "Paper",
        foreground: "hsl(0, 0%, 20%)",
        background: "hsl(48, 63%, 97%)"
      }, {
        name: "Finch",
        foreground: "rgb(202,58,53)",
        background: "rgb(208,210,207)"
      }, {
        name: "Ocean",
        foreground: "hsl(240, 5%, 92%)",
        background: "hsl(232, 15%, 19%)"
      }, {
        name: "Sky",
        foreground: "white",
        background: "hsl(192, 92%, 50%)"
      }, {
        name: "Achtung",
        foreground: "hsl(0, 0%, 4%)",
        background: "hsl(0, 100%, 40%)"
      }, {
        name: "<a>",
        foreground: "hsl(232, 77%, 39%)",
        background: "hsl(40, 39%, 95%)"
      }, {
        name: "Scroll",
        foreground: "hsl(0, 0%, 9%)",
        background: "hsl(35, 46%, 87%)"
      }, {
        name: "Neo",
        foreground: "rgb(32,255,30)",
        background: "black"
      }]);
    }
  };
});
System.register("lib/actions/message-actions", ["npm:babel-runtime@4.7.16/helpers/class-call-check", "npm:babel-runtime@4.7.16/helpers/inherits", "npm:babel-runtime@4.7.16/helpers/create-class", "npm:flummox@3.5.0"], function (_export) {
  var _classCallCheck, _inherits, _createClass, Actions, MessageActions;

  return {
    setters: [function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck["default"];
    }, function (_babelRuntimeHelpersInherits) {
      _inherits = _babelRuntimeHelpersInherits["default"];
    }, function (_babelRuntimeHelpersCreateClass) {
      _createClass = _babelRuntimeHelpersCreateClass["default"];
    }, function (_npmFlummox350) {
      Actions = _npmFlummox350.Actions;
    }],
    execute: function () {
      "use strict";

      MessageActions = (function (_Actions) {
        function MessageActions() {
          _classCallCheck(this, MessageActions);

          if (_Actions != null) {
            _Actions.apply(this, arguments);
          }
        }

        _inherits(MessageActions, _Actions);

        _createClass(MessageActions, {
          changeMessage: {
            value: function changeMessage(content) {
              return content; // automatically dispatched
            }
          },
          imageRendered: {
            value: function imageRendered(dataUrl) {
              return dataUrl;
            }
          }
        });

        return MessageActions;
      })(Actions);

      _export("default", MessageActions);
    }
  };
});
System.register("lib/stores/message-store", ["npm:babel-runtime@4.7.16/helpers/class-call-check", "npm:babel-runtime@4.7.16/helpers/inherits", "npm:babel-runtime@4.7.16/helpers/get", "npm:babel-runtime@4.7.16/helpers/create-class", "npm:babel-runtime@4.7.16/core-js", "npm:flummox@3.5.0"], function (_export) {
  var _classCallCheck, _inherits, _get, _createClass, _core, Store, MessageStore;

  return {
    setters: [function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck["default"];
    }, function (_babelRuntimeHelpersInherits) {
      _inherits = _babelRuntimeHelpersInherits["default"];
    }, function (_babelRuntimeHelpersGet) {
      _get = _babelRuntimeHelpersGet["default"];
    }, function (_babelRuntimeHelpersCreateClass) {
      _createClass = _babelRuntimeHelpersCreateClass["default"];
    }, function (_babelRuntimeCoreJs) {
      _core = _babelRuntimeCoreJs["default"];
    }, function (_npmFlummox350) {
      Store = _npmFlummox350.Store;
    }],
    execute: function () {
      "use strict";

      MessageStore = (function (_Store) {
        function MessageStore(flux) {
          _classCallCheck(this, MessageStore);

          _get(_core.Object.getPrototypeOf(MessageStore.prototype), "constructor", this).call(this);

          var messageActions = flux.getActions("message");
          this.register(messageActions.changeMessage, this.handleChangedMessage);
          this.register(messageActions.imageRendered, this.handleNewImage);
          this.state = {
            message: "",
            lines: []
          };
        }

        _inherits(MessageStore, _Store);

        _createClass(MessageStore, {
          handleChangedMessage: {
            value: function handleChangedMessage(content) {
              this.setState({
                message: content,
                lines: content.split("\n").filter(function (x) {
                  return x;
                })
              });
            }
          },
          handleNewImage: {
            value: function handleNewImage(dataUrl) {
              this.setState({
                imageUrl: dataUrl
              });
            }
          }
        });

        return MessageStore;
      })(Store);

      _export("default", MessageStore);
    }
  };
});
System.register("lib/type-pairings", [], function (_export) {
  return {
    setters: [],
    execute: function () {
      "use strict";

      _export("default", [{
        main: {
          local: ["Avenir Next", "Arial Black", "sans-serif"],
          weight: 900,
          caps: true,
          lineHeightFactor: 1.05,
          prePaddingFactor: 0
        },
        alt: {
          local: ["Georgia", "Times New Roman", "serif"],
          weight: 400,
          italic: true,
          lineHeightFactor: 1.45,
          prePaddingFactor: 0.05
        }
      }, {
        main: {
          google: "Sigmar One",
          weight: 400,
          caps: true,
          lineHeightFactor: 1.1,
          prePaddingFactor: 0.02
        },
        alt: {
          google: "Gentium Book Basic",
          weight: 400,
          italic: true,
          lineHeightFactor: 1.32,
          prePaddingFactor: 0.02
        }
      }, {
        main: {
          google: "Raleway",
          weight: 900,
          caps: true,
          lineHeightFactor: 1.05,
          prePaddingFactor: 0
        },
        alt: {
          google: "Raleway",
          weight: 200,
          lineHeightFactor: 1.35,
          prePaddingFactor: 0
        }
      }, {
        main: {
          google: "Alfa Slab One",
          weight: 400,
          caps: true,
          lineHeightFactor: 1.15,
          prePaddingFactor: 0.075
        },
        alt: {
          google: "Raleway",
          weight: 200,
          lineHeightFactor: 1.3,
          prePaddingFactor: 0
        }
      }, {
        main: {
          google: "Gentium Book Basic",
          weight: 700,
          italic: true,
          caps: true,
          lineHeightFactor: 1.1,
          prePaddingFactor: -0.05
        },
        alt: {
          google: "Open Sans",
          weight: 300,
          lineHeightFactor: 1.4,
          prePaddingFactor: 0.05
        }
      }, {
        main: {
          google: "Playfair Display",
          weight: 900,
          caps: true,
          italic: true,
          lineHeightFactor: 1.35,
          prePaddingFactor: 0.15
        },
        alt: {
          google: "Lato",
          weight: 100,
          lineHeightFactor: 1.3,
          prePaddingFactor: 0
        }
      }]);
    }
  };
});
System.register("lib/stores/fonts-store", ["npm:babel-runtime@4.7.16/helpers/class-call-check", "npm:babel-runtime@4.7.16/helpers/inherits", "npm:babel-runtime@4.7.16/helpers/get", "npm:babel-runtime@4.7.16/helpers/create-class", "npm:babel-runtime@4.7.16/core-js", "npm:flummox@3.5.0"], function (_export) {
  var _classCallCheck, _inherits, _get, _createClass, _core, Store, FontsStore;

  return {
    setters: [function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck["default"];
    }, function (_babelRuntimeHelpersInherits) {
      _inherits = _babelRuntimeHelpersInherits["default"];
    }, function (_babelRuntimeHelpersGet) {
      _get = _babelRuntimeHelpersGet["default"];
    }, function (_babelRuntimeHelpersCreateClass) {
      _createClass = _babelRuntimeHelpersCreateClass["default"];
    }, function (_babelRuntimeCoreJs) {
      _core = _babelRuntimeCoreJs["default"];
    }, function (_npmFlummox350) {
      Store = _npmFlummox350.Store;
    }],
    execute: function () {
      "use strict";

      FontsStore = (function (_Store) {
        function FontsStore(flux) {
          _classCallCheck(this, FontsStore);

          _get(_core.Object.getPrototypeOf(FontsStore.prototype), "constructor", this).call(this);

          var fontsActions = flux.getActions("fonts");
          this.register(fontsActions.fontLoaded, this.handleFontLoaded);
          this.register(fontsActions.chooseFont, this.handleChosenFont);
          this.register(fontsActions.fontLoadingFinished, this.finishLoading);
          this.state = {
            loadedFonts: [],
            stillLoading: true
          };
        }

        _inherits(FontsStore, _Store);

        _createClass(FontsStore, {
          handleFontLoaded: {
            value: function handleFontLoaded(font) {
              this.setState({
                loadedFonts: this.state.loadedFonts.concat([font]),
                chosenFont: this.state.chosenFont || font
              });
            }
          },
          handleChosenFont: {
            value: function handleChosenFont(font) {
              this.setState({
                chosenFont: font
              });
            }
          },
          finishLoading: {
            value: function finishLoading() {
              console.log("finished!");
              this.setState({
                stillLoading: false
              });
            }
          }
        });

        return FontsStore;
      })(Store);

      _export("default", FontsStore);
    }
  };
});
System.register("lib/actions/colors-actions", ["npm:babel-runtime@4.7.16/helpers/class-call-check", "npm:babel-runtime@4.7.16/helpers/inherits", "npm:babel-runtime@4.7.16/helpers/create-class", "npm:flummox@3.5.0"], function (_export) {
  var _classCallCheck, _inherits, _createClass, Actions, ColorsActions;

  return {
    setters: [function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck["default"];
    }, function (_babelRuntimeHelpersInherits) {
      _inherits = _babelRuntimeHelpersInherits["default"];
    }, function (_babelRuntimeHelpersCreateClass) {
      _createClass = _babelRuntimeHelpersCreateClass["default"];
    }, function (_npmFlummox350) {
      Actions = _npmFlummox350.Actions;
    }],
    execute: function () {
      "use strict";

      ColorsActions = (function (_Actions) {
        function ColorsActions() {
          _classCallCheck(this, ColorsActions);

          if (_Actions != null) {
            _Actions.apply(this, arguments);
          }
        }

        _inherits(ColorsActions, _Actions);

        _createClass(ColorsActions, {
          chooseColor: {
            value: function chooseColor(color) {
              return color;
            }
          }
        });

        return ColorsActions;
      })(Actions);

      _export("default", ColorsActions);
    }
  };
});
System.register("lib/stores/colors-store", ["npm:babel-runtime@4.7.16/helpers/class-call-check", "npm:babel-runtime@4.7.16/helpers/inherits", "npm:babel-runtime@4.7.16/helpers/get", "npm:babel-runtime@4.7.16/helpers/create-class", "npm:babel-runtime@4.7.16/core-js", "npm:flummox@3.5.0"], function (_export) {
  var _classCallCheck, _inherits, _get, _createClass, _core, Store, ColorsStore;

  return {
    setters: [function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck["default"];
    }, function (_babelRuntimeHelpersInherits) {
      _inherits = _babelRuntimeHelpersInherits["default"];
    }, function (_babelRuntimeHelpersGet) {
      _get = _babelRuntimeHelpersGet["default"];
    }, function (_babelRuntimeHelpersCreateClass) {
      _createClass = _babelRuntimeHelpersCreateClass["default"];
    }, function (_babelRuntimeCoreJs) {
      _core = _babelRuntimeCoreJs["default"];
    }, function (_npmFlummox350) {
      Store = _npmFlummox350.Store;
    }],
    execute: function () {
      "use strict";

      ColorsStore = (function (_Store) {
        function ColorsStore(flux) {
          _classCallCheck(this, ColorsStore);

          _get(_core.Object.getPrototypeOf(ColorsStore.prototype), "constructor", this).call(this);

          var colorsActions = flux.getActions("colors");
          this.register(colorsActions.chooseColor, this.handleChosenColor);
        }

        _inherits(ColorsStore, _Store);

        _createClass(ColorsStore, {
          handleChosenColor: {
            value: function handleChosenColor(color) {
              this.setState({
                chosenColor: color
              });
            }
          }
        });

        return ColorsStore;
      })(Store);

      _export("default", ColorsStore);
    }
  };
});
System.register("styles/index", ["styles/reset.scss!post-css", "styles/variables.scss!post-css", "styles/traits/colors.scss!post-css", "styles/traits/typography.scss!post-css", "styles/traits/layout.scss!post-css", "styles/traits/flex.scss!post-css", "styles/traits/link.scss!post-css", "styles/core.scss!post-css"], function (_export) {
  return {
    setters: [function (_stylesResetScssPostCss) {}, function (_stylesVariablesScssPostCss) {}, function (_stylesTraitsColorsScssPostCss) {}, function (_stylesTraitsTypographyScssPostCss) {}, function (_stylesTraitsLayoutScssPostCss) {}, function (_stylesTraitsFlexScssPostCss) {}, function (_stylesTraitsLinkScssPostCss) {}, function (_stylesCoreScssPostCss) {}],
    execute: function () {
      "use strict";
    }
  };
});
// Inject the styles (async obvs)
System.register("lib/components/message-entry.jsx!jsx", ["npm:babel-runtime@4.7.16/helpers/class-call-check", "npm:babel-runtime@4.7.16/helpers/inherits", "npm:babel-runtime@4.7.16/helpers/create-class", "npm:react@0.13.1", "lib/components/message-entry.scss!post-css"], function (_export) {
  var _classCallCheck, _inherits, _createClass, React, MessageEntry;

  return {
    setters: [function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck["default"];
    }, function (_babelRuntimeHelpersInherits) {
      _inherits = _babelRuntimeHelpersInherits["default"];
    }, function (_babelRuntimeHelpersCreateClass) {
      _createClass = _babelRuntimeHelpersCreateClass["default"];
    }, function (_npmReact0131) {
      React = _npmReact0131["default"];
    }, function (_libComponentsMessageEntryScssPostCss) {}],
    execute: function () {
      "use strict";

      MessageEntry = (function (_React$Component) {
        function MessageEntry() {
          _classCallCheck(this, MessageEntry);

          if (_React$Component != null) {
            _React$Component.apply(this, arguments);
          }
        }

        _inherits(MessageEntry, _React$Component);

        _createClass(MessageEntry, {
          componentWillMount: {
            value: function componentWillMount() {
              this.messageActions = this.context.flux.getActions("message");
              this.setValue("Whatever you write here\nwill be rendered as a slab-type\nposter!\nStart a line with an '!'\n!to use the alternate typeface\nnow go and write something\nprofound\nand share it with the world!");
            }
          },
          handleChange: {
            value: function handleChange(event) {
              this.setValue(event.target.value);
            }
          },
          setValue: {
            value: function setValue(value) {
              this.messageActions.changeMessage(value);
              this.setState({ value: value });
            }
          },
          render: {
            value: function render() {
              return React.createElement("div", { className: "MessageEntry" }, React.createElement("textarea", { value: this.state.value, onChange: this.handleChange.bind(this) }));
            }
          }
        });

        return MessageEntry;
      })(React.Component);

      _export("default", MessageEntry);

      MessageEntry.contextTypes = {
        flux: React.PropTypes.object
      };
    }
  };
});
System.register("lib/components/type-selector.jsx!jsx", ["npm:babel-runtime@4.7.16/helpers/class-call-check", "npm:babel-runtime@4.7.16/helpers/inherits", "npm:babel-runtime@4.7.16/helpers/create-class", "npm:react@0.13.1", "lib/components/type-selector.scss!post-css"], function (_export) {
  var _classCallCheck, _inherits, _createClass, React, TypeSelector;

  return {
    setters: [function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck["default"];
    }, function (_babelRuntimeHelpersInherits) {
      _inherits = _babelRuntimeHelpersInherits["default"];
    }, function (_babelRuntimeHelpersCreateClass) {
      _createClass = _babelRuntimeHelpersCreateClass["default"];
    }, function (_npmReact0131) {
      React = _npmReact0131["default"];
    }, function (_libComponentsTypeSelectorScssPostCss) {}],
    execute: function () {
      "use strict";

      TypeSelector = (function (_React$Component) {
        function TypeSelector() {
          _classCallCheck(this, TypeSelector);

          if (_React$Component != null) {
            _React$Component.apply(this, arguments);
          }
        }

        _inherits(TypeSelector, _React$Component);

        _createClass(TypeSelector, {
          componentWillMount: {
            value: function componentWillMount() {
              this.fontsActions = this.props.flux.getActions("fonts");
              this.fontsActions.loadAllFonts();
            }
          },
          chooseFont: {
            value: function chooseFont(font) {
              this.fontsActions.chooseFont(font);
            }
          },
          render: {
            value: function render() {
              var _this = this;

              return React.createElement("ul", { className: "TypeSelector" }, this.props.loadedFonts.map(function (f) {
                return React.createElement("li", { onClick: _this.chooseFont.bind(_this, f), className: _this.props.chosenFont === f ? "-selected" : "" }, React.createElement("span", { style: _this.getTextStyle(f.main) }, f.main.name), React.createElement("span", { style: _this.getTextStyle(f.alt) }, f.alt.name));
              }), this.props.stillLoading ? "Loading..." : React.createElement("div", null));
            }
          },
          getTextStyle: {
            value: function getTextStyle(font) {
              return {
                fontFamily: font.name,
                textTransform: font.caps ? "uppercase" : "initial",
                fontWeight: font.weight,
                fontStyle: font.italic ? "italic" : "initial"
              };
            }
          }
        });

        return TypeSelector;
      })(React.Component);

      _export("default", TypeSelector);
    }
  };
});
System.register("lib/components/color-selector.jsx!jsx", ["npm:babel-runtime@4.7.16/helpers/class-call-check", "npm:babel-runtime@4.7.16/helpers/inherits", "npm:babel-runtime@4.7.16/helpers/create-class", "npm:react@0.13.1", "lib/components/color-selector.scss!post-css", "lib/colors"], function (_export) {
  var _classCallCheck, _inherits, _createClass, React, Colors, ColorSelector;

  return {
    setters: [function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck["default"];
    }, function (_babelRuntimeHelpersInherits) {
      _inherits = _babelRuntimeHelpersInherits["default"];
    }, function (_babelRuntimeHelpersCreateClass) {
      _createClass = _babelRuntimeHelpersCreateClass["default"];
    }, function (_npmReact0131) {
      React = _npmReact0131["default"];
    }, function (_libComponentsColorSelectorScssPostCss) {}, function (_libColors) {
      Colors = _libColors["default"];
    }],
    execute: function () {
      "use strict";

      ColorSelector = (function (_React$Component) {
        function ColorSelector() {
          _classCallCheck(this, ColorSelector);

          if (_React$Component != null) {
            _React$Component.apply(this, arguments);
          }
        }

        _inherits(ColorSelector, _React$Component);

        _createClass(ColorSelector, {
          componentWillMount: {
            value: function componentWillMount() {
              this.colorsActions = this.context.flux.getActions("colors");
              this.chooseColor(Colors[0]);
            }
          },
          chooseColor: {
            value: function chooseColor(color) {
              this.colorsActions.chooseColor(color);
            }
          },
          render: {
            value: function render() {
              var _this = this;

              return React.createElement("ul", { className: "ColorSelector" }, Colors.map(function (o) {
                return React.createElement("li", { style: _this.getStyle(o), onClick: _this.chooseColor.bind(_this, o), className: o === _this.props.chosenColor ? "-selected" : "" }, " ", o.name, " ");
              }));
            }
          },
          getStyle: {
            value: function getStyle(option) {
              return {
                backgroundColor: option.background,
                color: option.foreground
              };
            }
          }
        });

        return ColorSelector;
      })(React.Component);

      _export("default", ColorSelector);

      ColorSelector.contextTypes = {
        flux: React.PropTypes.object
      };
    }
  };
});
System.register("lib/components/controls.jsx!jsx", ["npm:babel-runtime@4.7.16/helpers/class-call-check", "npm:babel-runtime@4.7.16/helpers/inherits", "npm:babel-runtime@4.7.16/helpers/create-class", "npm:react@0.13.1", "lib/components/message-entry.jsx!jsx", "npm:flummox@3.5.0/component", "lib/components/type-selector.jsx!jsx", "lib/components/color-selector.jsx!jsx", "lib/components/controls.scss!post-css"], function (_export) {
  var _classCallCheck, _inherits, _createClass, React, MessageEntry, FluxComponent, TypeSelector, ColorSelector, Controls;

  return {
    setters: [function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck["default"];
    }, function (_babelRuntimeHelpersInherits) {
      _inherits = _babelRuntimeHelpersInherits["default"];
    }, function (_babelRuntimeHelpersCreateClass) {
      _createClass = _babelRuntimeHelpersCreateClass["default"];
    }, function (_npmReact0131) {
      React = _npmReact0131["default"];
    }, function (_libComponentsMessageEntryJsxJsx) {
      MessageEntry = _libComponentsMessageEntryJsxJsx["default"];
    }, function (_npmFlummox350Component) {
      FluxComponent = _npmFlummox350Component["default"];
    }, function (_libComponentsTypeSelectorJsxJsx) {
      TypeSelector = _libComponentsTypeSelectorJsxJsx["default"];
    }, function (_libComponentsColorSelectorJsxJsx) {
      ColorSelector = _libComponentsColorSelectorJsxJsx["default"];
    }, function (_libComponentsControlsScssPostCss) {}],
    execute: function () {
      "use strict";

      Controls = (function (_React$Component) {
        function Controls() {
          _classCallCheck(this, Controls);

          if (_React$Component != null) {
            _React$Component.apply(this, arguments);
          }
        }

        _inherits(Controls, _React$Component);

        _createClass(Controls, {
          render: {
            value: function render() {
              return React.createElement("div", { className: "Controls" }, React.createElement("h2", null, "Enter your message:"), React.createElement(MessageEntry, null), React.createElement("h2", null, "Pick your type pairing:"), React.createElement(FluxComponent, { connectToStores: "fonts" }, React.createElement(TypeSelector, null)), React.createElement("h2", null, "Choose a colour scheme:"), React.createElement(FluxComponent, { connectToStores: "colors" }, React.createElement(ColorSelector, null)));
            }
          }
        });

        return Controls;
      })(React.Component);

      _export("default", Controls);

      Controls.contextTypes = {
        flux: React.PropTypes.object
      };
    }
  };
});
System.register("lib/components/share.jsx!jsx", ["npm:babel-runtime@4.7.16/helpers/class-call-check", "npm:babel-runtime@4.7.16/helpers/inherits", "npm:babel-runtime@4.7.16/helpers/create-class", "npm:react@0.13.1", "lib/components/share.scss!post-css", "npm:whatwg-fetch@0.7.0"], function (_export) {
  var _classCallCheck, _inherits, _createClass, React, Share;

  return {
    setters: [function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck["default"];
    }, function (_babelRuntimeHelpersInherits) {
      _inherits = _babelRuntimeHelpersInherits["default"];
    }, function (_babelRuntimeHelpersCreateClass) {
      _createClass = _babelRuntimeHelpersCreateClass["default"];
    }, function (_npmReact0131) {
      React = _npmReact0131["default"];
    }, function (_libComponentsShareScssPostCss) {}, function (_npmWhatwgFetch070) {}],
    execute: function () {
      "use strict";

      Share = (function (_React$Component) {
        function Share() {
          _classCallCheck(this, Share);

          this.state = {};
        }

        _inherits(Share, _React$Component);

        _createClass(Share, {
          componentWillReceiveProps: {
            value: function componentWillReceiveProps(newProps, oldProps) {
              if (newProps.message != oldProps.message || newProps.color != oldProps.color || newProps.font != oldProps.font) {
                this.setState({ link: undefined });
              }
            }
          },
          uploadToImgur: {
            value: function uploadToImgur() {
              var _this = this;

              this.setState({ uploading: true });
              var data = new FormData();
              data.append("image", this.props.canvas.toDataURL().split(",")[1]);
              data.append("type", "base64");
              data.append("description", "Made with http://typeslab.com");
              fetch("https://api.imgur.com/3/image", {
                method: "post",
                body: data,
                headers: {
                  Authorization: "Client-ID dc208153560e2ef"
                }
              }).then(function (response) {
                return response.json();
              }).then(function (json) {
                _this.setState({ uploading: false });
                if (json.success) {
                  _this.setState({ link: json.data.link });
                } else {
                  var message = json.data.error.match(/anonymous uploading in your country has been disabled/) ? "Sorry, IMGUR has blocked anonymous uploads from your country" : json.data.error;
                  _this.setState({ failed: true, failure: message });
                }
              });
            }
          },
          saveLocally: {
            value: function saveLocally(e) {
              e.target.href = this.props.canvas.toDataURL();
            }
          },
          render: {
            value: function render() {
              return React.createElement("ul", { className: "Share" }, this.state.failure ? React.createElement("p", null, this.state.failure) : "", this.state.uploading ? React.createElement("p", null, "Uploading...") : "", this.state.link ? React.createElement("p", null, "Uploaded to ", React.createElement("a", { href: this.state.link, target: "_blank" }, this.state.link)) : "", React.createElement("button", { disabled: this.state.link || this.state.uploading || this.state.failed, className: "ShareButton", onClick: this.uploadToImgur.bind(this) }, "Upload to IMGUR"), React.createElement("a", { href: true, className: "ShareButton", download: true, onClick: this.saveLocally.bind(this) }, "Save locally"));
            }
          }
        });

        return Share;
      })(React.Component);

      _export("default", Share);
    }
  };
});
System.register("lib/actions/fonts-actions", ["npm:babel-runtime@4.7.16/helpers/class-call-check", "npm:babel-runtime@4.7.16/helpers/inherits", "npm:babel-runtime@4.7.16/helpers/create-class", "npm:babel-runtime@4.7.16/core-js", "npm:flummox@3.5.0", "lib/type-pairings", "github:JenniferSimonds/FontDetect@master/lib/fontdetect", "npm:fkit@0.16.2", "npm:webfontloader@1.5.15"], function (_export) {
  var _classCallCheck, _inherits, _createClass, _core, Actions, TypePairings, FontDetect, F, FontsActions;

  return {
    setters: [function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck["default"];
    }, function (_babelRuntimeHelpersInherits) {
      _inherits = _babelRuntimeHelpersInherits["default"];
    }, function (_babelRuntimeHelpersCreateClass) {
      _createClass = _babelRuntimeHelpersCreateClass["default"];
    }, function (_babelRuntimeCoreJs) {
      _core = _babelRuntimeCoreJs["default"];
    }, function (_npmFlummox350) {
      Actions = _npmFlummox350.Actions;
    }, function (_libTypePairings) {
      TypePairings = _libTypePairings["default"];
    }, function (_githubJenniferSimondsFontDetectMasterLibFontdetect) {
      FontDetect = _githubJenniferSimondsFontDetectMasterLibFontdetect["default"];
    }, function (_npmFkit0162) {
      F = _npmFkit0162["default"];
    }, function (_npmWebfontloader1515) {}],
    execute: function () {
      "use strict";

      FontsActions = (function (_Actions) {
        function FontsActions() {
          _classCallCheck(this, FontsActions);

          if (_Actions != null) {
            _Actions.apply(this, arguments);
          }
        }

        _inherits(FontsActions, _Actions);

        _createClass(FontsActions, {
          loadAllFonts: {
            value: function loadAllFonts() {
              var _this = this;

              _core.Promise.all([this.loadLocalFonts(), this.loadGoogleFonts()]).then(function (_) {
                _this.fontLoadingFinished();
              });
            }
          },
          loadLocalFonts: {
            value: function loadLocalFonts() {
              var _this = this;

              var isLocal = function (font) {
                return font.main.local && font.alt.local;
              };
              F.filter(isLocal, TypePairings).forEach(function (font) {
                var isLoaded = function (f) {
                  return FontDetect.isFontLoaded(f);
                };
                font.main.name = F.find(isLoaded, font.main.local) || "sans-serif";
                font.alt.name = F.find(isLoaded, font.alt.local) || "serif";
                _this.fontLoaded(font);
              });
              return _core.Promise.resolve();
            }
          },
          loadGoogleFonts: {
            value: function loadGoogleFonts() {
              var _this = this;

              return new _core.Promise(function (resolve, reject) {
                var isGoogle = function (font) {
                  return font.main.google && font.alt.google;
                },
                    fonts = [],
                    googleFonts = F.filter(isGoogle, TypePairings),
                    toGoogleName = function (f) {
                  return "" + f.google + ":" + f.weight + "" + (f.italic ? "italic" : "");
                };
                googleFonts.forEach(function (font) {
                  return fonts.push(toGoogleName(font.main), toGoogleName(font.alt));
                });
                WebFont.load({
                  classes: false,
                  google: {
                    families: F.nub(fonts)
                  },
                  active: function () {
                    googleFonts.forEach(function (font) {
                      font.main.name = font.main.google;
                      font.alt.name = font.alt.google;
                      _this.fontLoaded(font);
                    });
                    resolve();
                  }
                });
              });
            }
          },
          fontLoaded: {
            value: function fontLoaded(font) {
              return font;
            }
          },
          chooseFont: {
            value: function chooseFont(font) {
              return font;
            }
          },
          fontLoadingFinished: {
            value: function fontLoadingFinished() {
              return {};
            }
          }
        });

        return FontsActions;
      })(Actions);

      _export("default", FontsActions);
    }
  };
});
System.register("lib/flux", ["npm:babel-runtime@4.7.16/helpers/class-call-check", "npm:babel-runtime@4.7.16/helpers/inherits", "npm:babel-runtime@4.7.16/helpers/get", "npm:babel-runtime@4.7.16/core-js", "npm:flummox@3.5.0", "lib/actions/message-actions", "lib/stores/message-store", "lib/actions/fonts-actions", "lib/stores/fonts-store", "lib/actions/colors-actions", "lib/stores/colors-store"], function (_export) {
  var _classCallCheck, _inherits, _get, _core, Flummox, MessageActions, MessageStore, FontsActions, FontsStore, ColorsActions, ColorsStore, Flux;

  return {
    setters: [function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck["default"];
    }, function (_babelRuntimeHelpersInherits) {
      _inherits = _babelRuntimeHelpersInherits["default"];
    }, function (_babelRuntimeHelpersGet) {
      _get = _babelRuntimeHelpersGet["default"];
    }, function (_babelRuntimeCoreJs) {
      _core = _babelRuntimeCoreJs["default"];
    }, function (_npmFlummox350) {
      Flummox = _npmFlummox350.Flummox;
    }, function (_libActionsMessageActions) {
      MessageActions = _libActionsMessageActions["default"];
    }, function (_libStoresMessageStore) {
      MessageStore = _libStoresMessageStore["default"];
    }, function (_libActionsFontsActions) {
      FontsActions = _libActionsFontsActions["default"];
    }, function (_libStoresFontsStore) {
      FontsStore = _libStoresFontsStore["default"];
    }, function (_libActionsColorsActions) {
      ColorsActions = _libActionsColorsActions["default"];
    }, function (_libStoresColorsStore) {
      ColorsStore = _libStoresColorsStore["default"];
    }],
    execute: function () {
      "use strict";

      Flux = (function (_Flummox) {
        function Flux() {
          _classCallCheck(this, Flux);

          _get(_core.Object.getPrototypeOf(Flux.prototype), "constructor", this).call(this);

          this.createActions("message", MessageActions);
          this.createStore("message", MessageStore, this);
          this.createActions("fonts", FontsActions);
          this.createStore("fonts", FontsStore, this);
          this.createActions("colors", ColorsActions);
          this.createStore("colors", ColorsStore, this);
        }

        _inherits(Flux, _Flummox);

        return Flux;
      })(Flummox);

      _export("default", Flux);
    }
  };
});
System.register("lib/components/output.jsx!jsx", ["npm:babel-runtime@4.7.16/helpers/class-call-check", "npm:babel-runtime@4.7.16/helpers/inherits", "npm:babel-runtime@4.7.16/helpers/create-class", "npm:babel-runtime@4.7.16/helpers/get", "npm:babel-runtime@4.7.16/core-js", "npm:react@0.13.1", "npm:react-canvas@0.0.1/lib/Surface", "npm:react-canvas@0.0.1/lib/Layer", "npm:react-canvas@0.0.1/lib/Text", "npm:react-canvas@0.0.1/lib/FontFace", "lib/components/share.jsx!jsx", "npm:react-canvas@0.0.1/lib/measureText", "lib/components/output.scss!post-css"], function (_export) {
  var _classCallCheck, _inherits, _createClass, _get, _core, React, Surface, Layer, Text, FontFace, Share, measureText, getFontFace, Line, Output;

  return {
    setters: [function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck["default"];
    }, function (_babelRuntimeHelpersInherits) {
      _inherits = _babelRuntimeHelpersInherits["default"];
    }, function (_babelRuntimeHelpersCreateClass) {
      _createClass = _babelRuntimeHelpersCreateClass["default"];
    }, function (_babelRuntimeHelpersGet) {
      _get = _babelRuntimeHelpersGet["default"];
    }, function (_babelRuntimeCoreJs) {
      _core = _babelRuntimeCoreJs["default"];
    }, function (_npmReact0131) {
      React = _npmReact0131["default"];
    }, function (_npmReactCanvas001LibSurface) {
      Surface = _npmReactCanvas001LibSurface["default"];
    }, function (_npmReactCanvas001LibLayer) {
      Layer = _npmReactCanvas001LibLayer["default"];
    }, function (_npmReactCanvas001LibText) {
      Text = _npmReactCanvas001LibText["default"];
    }, function (_npmReactCanvas001LibFontFace) {
      FontFace = _npmReactCanvas001LibFontFace["default"];
    }, function (_libComponentsShareJsxJsx) {
      Share = _libComponentsShareJsxJsx["default"];
    }, function (_npmReactCanvas001LibMeasureText) {
      measureText = _npmReactCanvas001LibMeasureText["default"];
    }, function (_libComponentsOutputScssPostCss) {}],
    execute: function () {
      "use strict";

      getFontFace = function (font) {
        var options = { weight: font.weight };
        if (font.italic) options.style = "italic";
        return FontFace(font.name, null, options);
      };

      Line = (function (_React$Component) {
        function Line() {
          _classCallCheck(this, Line);

          if (_React$Component != null) {
            _React$Component.apply(this, arguments);
          }
        }

        _inherits(Line, _React$Component);

        _createClass(Line, {
          componentDidMount: {
            value: function componentDidMount() {}
          },
          render: {
            value: function render() {
              return React.createElement(Text, { style: this.props.line.style }, this.props.line.line);
            }
          }
        });

        return Line;
      })(React.Component);

      Output = (function (_React$Component2) {
        function Output() {
          _classCallCheck(this, Output);

          _get(_core.Object.getPrototypeOf(Output.prototype), "constructor", this).call(this);
          this.state = {};
          this.spacing = 32;
        }

        _inherits(Output, _React$Component2);

        _createClass(Output, {
          componentDidMount: {
            value: function componentDidMount() {
              this.setState({
                canvas: this.refs.surface.getDOMNode()
              });
            }
          },
          render: {
            value: function render() {
              var lines = this.layoutLines(this.props.lines),
                  text = "typeslab.com",
                  canvasWidth = this.props.width + this.spacing * 2,
                  canvasHeight = lines.totalHeight + this.spacing;
              return React.createElement("div", { className: "Output", style: { backgroundColor: this.props.chosenColor.background, color: this.props.chosenColor.foreground } }, React.createElement(Surface, { ref: "surface", width: canvasWidth, height: canvasHeight, top: 0, left: 0 }, React.createElement(Layer, { style: { zIndex: 0, width: canvasWidth, height: canvasHeight, top: 0, left: 0, backgroundColor: this.props.chosenColor.background } }), React.createElement(Layer, { style: this.getBorderStyle(lines.totalHeight) }), lines.sizedLines.map(function (line) {
                return React.createElement(Line, { line: line });
              }), React.createElement(Text, { style: this.getByLineStyle(text, lines.totalHeight) }, text)), React.createElement(Share, { canvas: this.state.canvas, message: this.props.message, color: this.props.chosenColor, font: this.props.chosenFont }));
            }
          },
          layoutLines: {
            value: function layoutLines(lines) {
              var _this = this;

              var totalHeight = this.spacing,
                  sizedLines = [];
              if (this.props.chosenFont) {
                sizedLines = lines.map(function (line) {
                  var text = line,
                      font = undefined,
                      defaultLH = undefined,
                      defaultPP = undefined;
                  if (!text.match(/^!/)) {
                    font = _this.props.chosenFont.main;
                    defaultLH = 1.35;
                    defaultPP = 0.15;
                  } else {
                    text = text.replace(/^!/, "");
                    font = _this.props.chosenFont.alt;
                    defaultLH = 1.5;
                    defaultPP = 0.15;
                  }
                  text = font.caps ? text.toUpperCase() : text;
                  var fontFace = getFontFace(font),
                      measurements = measureText(text, 9999, fontFace, 12, 15),
                      factor = _this.props.width / measurements.width,
                      fontSize = Math.min(300, 12 * factor),
                      lineHeight = fontSize * (typeof font.lineHeightFactor == "undefined" ? defaultLH : font.lineHeightFactor),
                      style = {
                    fontSize: fontSize,
                    height: fontSize * 2,
                    lineHeight: fontSize * 2,
                    top: totalHeight + lineHeight * (typeof font.lineHeightFactor == "undefined" ? defaultPP : font.prePaddingFactor),
                    width: 500 + 2 * _this.spacing,
                    fontFace: fontFace,
                    left: 0,
                    textAlign: "center",
                    color: _this.props.chosenColor.foreground,
                    zIndex: 2
                  };
                  totalHeight += lineHeight;
                  return { line: text, style: style };
                });
              }
              return { totalHeight: totalHeight, sizedLines: sizedLines };
            }
          },
          getBorderStyle: {
            value: function getBorderStyle(height) {
              return {
                borderColor: this.props.chosenColor.foreground,
                top: this.spacing / 2,
                width: this.props.width + this.spacing,
                left: this.spacing / 2,
                height: height,
                zIndex: 1
              };
            }
          },
          getByLineStyle: {
            value: function getByLineStyle(text, height) {
              var font = FontFace("Avenir Next Condensed, Helvetica, sans-serif", null, { weight: 400 }),
                  size = 8,
                  width = measureText(text, 9999, font, size, 15).width;
              return {
                fontFace: font,
                fontSize: size,
                backgroundColor: this.props.chosenColor.background,
                color: this.props.chosenColor.foreground,
                textAlign: "center",
                width: width + 6,
                left: this.props.width / 2 + this.spacing / 4,
                top: height + 11,
                height: 16,
                zIndex: 3
              };
            }
          }
        });

        return Output;
      })(React.Component);

      _export("default", Output);

      Output.contextTypes = {
        flux: React.PropTypes.object
      };
    }
  };
});
System.register("lib/components/frame.jsx!jsx", ["npm:babel-runtime@4.7.16/helpers/class-call-check", "npm:babel-runtime@4.7.16/helpers/inherits", "npm:babel-runtime@4.7.16/helpers/create-class", "npm:react@0.13.1", "npm:flummox@3.5.0/component", "lib/components/frame.scss!post-css", "lib/components/controls.jsx!jsx", "lib/components/output.jsx!jsx"], function (_export) {
  var _classCallCheck, _inherits, _createClass, React, FluxComponent, Controls, Output, Frame;

  return {
    setters: [function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck["default"];
    }, function (_babelRuntimeHelpersInherits) {
      _inherits = _babelRuntimeHelpersInherits["default"];
    }, function (_babelRuntimeHelpersCreateClass) {
      _createClass = _babelRuntimeHelpersCreateClass["default"];
    }, function (_npmReact0131) {
      React = _npmReact0131["default"];
    }, function (_npmFlummox350Component) {
      FluxComponent = _npmFlummox350Component["default"];
    }, function (_libComponentsFrameScssPostCss) {}, function (_libComponentsControlsJsxJsx) {
      Controls = _libComponentsControlsJsxJsx["default"];
    }, function (_libComponentsOutputJsxJsx) {
      Output = _libComponentsOutputJsxJsx["default"];
    }],
    execute: function () {
      "use strict";

      Frame = (function (_React$Component) {
        function Frame() {
          _classCallCheck(this, Frame);

          if (_React$Component != null) {
            _React$Component.apply(this, arguments);
          }
        }

        _inherits(Frame, _React$Component);

        _createClass(Frame, {
          render: {
            value: function render() {
              return React.createElement("div", { className: "Frame" }, React.createElement("header", null, React.createElement("h1", { className: "Frame-Logo" }, React.createElement("span", null, "Type"), React.createElement("span", null, "Slab"))), React.createElement("main", null, React.createElement(Controls, null), React.createElement(FluxComponent, { connectToStores: ["message", "fonts", "colors"] }, React.createElement(Output, { width: 500 }))), React.createElement("footer", null, React.createElement("p", null, "Made with <3 by ", React.createElement("a", { href: "http://glenmaddern.com", target: "_blank" }, "Glen Maddern")), " ", React.createElement("p", null, "View source ", React.createElement("a", { target: "_blank", href: "https://github.com/geelen/typeslab" }, "on GitHub"))));
            }
          }
        });

        return Frame;
      })(React.Component);

      _export("default", Frame);
    }
  };
});
System.register("lib/app.jsx!jsx", ["npm:babel-runtime@4.7.16/helpers/class-call-check", "npm:babel-runtime@4.7.16/helpers/inherits", "npm:babel-runtime@4.7.16/helpers/create-class", "npm:babel-runtime@4.7.16/helpers/get", "npm:babel-runtime@4.7.16/core-js", "npm:react@0.13.1", "npm:flummox@3.5.0/component", "lib/components/frame.jsx!jsx"], function (_export) {
  var _classCallCheck, _inherits, _createClass, _get, _core, React, FluxComponent, Frame, CanvasImage, App;

  return {
    setters: [function (_babelRuntimeHelpersClassCallCheck) {
      _classCallCheck = _babelRuntimeHelpersClassCallCheck["default"];
    }, function (_babelRuntimeHelpersInherits) {
      _inherits = _babelRuntimeHelpersInherits["default"];
    }, function (_babelRuntimeHelpersCreateClass) {
      _createClass = _babelRuntimeHelpersCreateClass["default"];
    }, function (_babelRuntimeHelpersGet) {
      _get = _babelRuntimeHelpersGet["default"];
    }, function (_babelRuntimeCoreJs) {
      _core = _babelRuntimeCoreJs["default"];
    }, function (_npmReact0131) {
      React = _npmReact0131["default"];
    }, function (_npmFlummox350Component) {
      FluxComponent = _npmFlummox350Component["default"];
    }, function (_libComponentsFrameJsxJsx) {
      Frame = _libComponentsFrameJsxJsx["default"];
    }],
    execute: function () {
      "use strict";

      CanvasImage = (function (_React$Component) {
        function CanvasImage() {
          _classCallCheck(this, CanvasImage);

          if (_React$Component != null) {
            _React$Component.apply(this, arguments);
          }
        }

        _inherits(CanvasImage, _React$Component);

        _createClass(CanvasImage, {
          render: {
            value: function render() {
              return React.createElement("img", { style: { backgroundColor: "white", padding: "1rem" }, width: 564, src: this.props.imageUrl });
            }
          }
        });

        return CanvasImage;
      })(React.Component);

      App = (function (_React$Component2) {
        function App() {
          _classCallCheck(this, App);

          _get(_core.Object.getPrototypeOf(App.prototype), "constructor", this).call(this);
        }

        _inherits(App, _React$Component2);

        _createClass(App, {
          render: {
            value: function render() {
              return React.createElement(FluxComponent, { flux: this.props.flux }, React.createElement(Frame, null));
            }
          }
        });

        return App;
      })(React.Component);

      _export("default", App);
    }
  };
});
System.register("lib/main", ["styles/index", "npm:react@0.13.1", "lib/app.jsx!jsx", "lib/flux"], function (_export) {
  var React, App, Flux, flux;
  return {
    setters: [function (_stylesIndex) {}, function (_npmReact0131) {
      React = _npmReact0131["default"];
    }, function (_libAppJsxJsx) {
      App = _libAppJsxJsx["default"];
    }, function (_libFlux) {
      Flux = _libFlux["default"];
    }],
    execute: function () {
      "use strict";

      flux = new Flux();

      React.render(React.createElement(App, { flux: flux }), document.querySelector("main"));
    }
  };
});
System.register('styles/reset.scss!post-css', [], false, function() {});
System.register('styles/variables.scss!post-css', [], false, function() {});
System.register('styles/traits/colors.scss!post-css', [], false, function() {});
System.register('styles/traits/typography.scss!post-css', [], false, function() {});
System.register('styles/traits/layout.scss!post-css', [], false, function() {});
System.register('styles/traits/flex.scss!post-css', [], false, function() {});
System.register('styles/traits/link.scss!post-css', [], false, function() {});
System.register('styles/core.scss!post-css', [], false, function() {});
System.register('lib/components/frame.scss!post-css', [], false, function() {});
System.register('lib/components/message-entry.scss!post-css', [], false, function() {});
System.register('lib/components/type-selector.scss!post-css', [], false, function() {});
System.register('lib/components/color-selector.scss!post-css', [], false, function() {});
System.register('lib/components/controls.scss!post-css', [], false, function() {});
System.register('lib/components/share.scss!post-css', [], false, function() {});
System.register('lib/components/output.scss!post-css', [], false, function() {});
(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
("/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Avenir Next\", \"Arial Black\";\n  font-weight: 400;\n  background-color: white;\n  color: hsl(240,7%,29%);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nbutton {\n  background: initial;\n  border: initial;\n  font: inherit;\n}\n\n.Frame {\n  min-height: 100vh;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column\n}\n\n.Frame > header {\n\tbackground-color: hsl(240,7%,29%);\n\tcolor: hsl(240,7%,99%);\n\tfont-family: \"Avenir Next\", \"Arial Black\";\n\tfont-weight: 700;\n\tletter-spacing: 5px;\n\ttext-transform: uppercase;\n\tpadding: 1rem;\n}\n\n.Frame > footer {\n\tdisplay: -webkit-flex;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-wrap: wrap;\n\t-ms-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\t-webkit-justify-content: center;\n\t-ms-flex-pack: center;\n\tjustify-content: center;\n\tbackground-color: hsl(240,7%,29%);\n\tcolor: hsl(240,7%,99%);\n\tfont-family: \"Avenir Next\", \"Arial Black\";\n\tfont-weight: 700;\n\tfont-size: 0.8rem;\n\tletter-spacing: 2px;\n\ttext-transform: uppercase;\n\tline-height: 1.4;\n\tpadding: 1rem\n}\n\n.Frame > footer > p {\n\tpadding: 0.25rem;\n\tpadding-right: 1rem;\n\tpadding-left: 1rem;\n\ttext-align: center\n}\n\n.Frame > footer > p > a {\n\tcursor: pointer;\n\tcolor: inherit;\n\ttext-decoration: none;\n\ttext-decoration: underline;\n\topacity: 0.75;\n\twhite-space: nowrap;\n}\n\n.Frame > footer > p > a:hover, .Frame > footer > p > a:active {\n\ttext-decoration: initial;\n\tcolor: inherit;\n}\n\n.Frame > footer > p > a:visited {\n\tcolor: inherit;\n}\n\n.Frame > footer > p > a:hover, .Frame > footer > p > a:active {\n\ttext-decoration: underline;\n\topacity: 1;\n}\n\n.Frame > main {\n\tdisplay: -webkit-flex;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-flex-wrap: wrap;\n\t-ms-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\t-webkit-flex-grow: 1;\n\t-ms-flex-positive: 1;\n\tflex-grow: 1;\n}\n\n.Frame-Logo {\n  text-align: center\n}\n\n.Frame-Logo > span {\n\tdisplay: inline-block\n}\n\n.Frame-Logo > span::first-letter {\n\tfont-size: 1.4em;\n\tvertical-align: text-top;\n}\n\n.MessageEntry > textarea {\n\tbackground-color: #eee;\n\tcolor: black;\n\tbox-shadow: inset 0 2px 4px rgba(0,0,0,0.1);\n\tpadding: 0.5rem;\n\tfont-size: 0.875rem;\n\theight: 10rem;\n\twidth: 100%;\n\tborder: none;\n\tresize: none;\n}\n\n.TypeSelector > li {\n\tmargin: 0.25rem;\n\tpadding: 0.25rem;\n\tdisplay: -webkit-flex;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tdisplay: -webkit-inline-flex;\n\tdisplay: -ms-inline-flexbox;\n\tdisplay: inline-flex;\n\t-webkit-align-items: baseline;\n\t-ms-flex-align: baseline;\n\talign-items: baseline;\n\tborder: solid 1px rgba(0, 0, 0, 0.2);\n\tborder-radius: 0.25rem;\n\tcursor: pointer\n}\n\n.TypeSelector > li > span {\n\tpadding: 0.25rem\n}\n\n.TypeSelector > li > span:first-child {}\n\n.TypeSelector > li:hover {\n\tbox-shadow: 0 0 4px -2px;\n}\n\n.TypeSelector > li.-selected {\n\tborder-color: black;\n\tbox-shadow: 0 0 5px -1px;\n}\n\n.ColorSelector {\n  text-align: center\n}\n\n.ColorSelector > li {\n\tmargin: 0.25rem;\n\tfont-size: 0.875rem;\n\tfont-weight: 700;\n\ttext-transform: uppercase;\n\tdisplay: inline-block;\n\tpadding: 0.6rem 1.5rem 0.5rem;\n\tborder: solid 1px rgba(0,0,0,0.2);\n\tborder-radius: 0.25rem;\n\tcursor: pointer\n}\n\n.ColorSelector > li:hover {\n\tbox-shadow: 0 0 4px -2px;\n}\n\n.ColorSelector > li.-selected {\n\tborder-color: currentColor;\n\tbox-shadow: 0 0 5px -1px black;\n}\n\n.Controls {\n  padding: 1rem;\n  padding-bottom: 2rem;\n  padding-top: 2rem;\n  background-color: white;\n  color: hsl(240,7%,29%);\n  width: 320px\n}\n\n@media screen and (max-width: 600px) {\n\n\t.Controls {\n\t\twidth: 100%;\n\t}\n}\n\n@media screen and (min-width: 1200px) {\n\n\t.Controls {\n\t\twidth: 480px;\n\t}\n}\n\n.Controls > h2 {\n\tfont-size: 1.125rem;\n\tfont-weight: 500;\n\tmargin-top: 2rem;\n\tmargin-bottom: 1rem\n}\n\n.Controls > h2:first-child {\n\tmargin-top: 0;\n}\n\n.Share {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center\n}\n\n.Share > p {\n\twidth: 100%;\n\tpadding-bottom: 0.5rem\n}\n\n.Share > p > a {\n\tcursor: pointer;\n\tcolor: inherit;\n\ttext-decoration: none;\n\ttext-decoration: underline;\n\topacity: 0.75;\n}\n\n.Share > p > a:hover, .Share > p > a:active {\n\ttext-decoration: initial;\n\tcolor: inherit;\n}\n\n.Share > p > a:visited {\n\tcolor: inherit;\n}\n\n.Share > p > a:hover, .Share > p > a:active {\n\ttext-decoration: underline;\n\topacity: 1;\n}\n\n.ShareButton {\n  padding: 0.5rem;\n  margin: 0.5rem;\n  cursor: pointer;\n  color: inherit;\n  text-decoration: none;\n  opacity: 0.75;\n  display: block;\n  border: 1px solid;\n  border-radius: 0.25rem;\n}\n\n.ShareButton:hover, .ShareButton:active {\n\ttext-decoration: initial;\n\tcolor: inherit;\n}\n\n.ShareButton:visited {\n\tcolor: inherit;\n}\n\n.ShareButton:hover, .ShareButton:active {\n\topacity: 1;\n}\n\n.ShareButton:disabled {\n\topacity: 0.25;\n\tcursor: initial;\n}\n\n.Output {\n  padding-top: 1rem;\n  -webkit-flex-grow: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  text-align: center;\n  overflow: hidden;\n  max-width: calc(100vw - 320px)\n}\n\n@media screen and (max-width: 600px) {\n\n\t.Output {\n\t\tmax-width: 100%;\n\t}\n}\n\n.Output canvas {\n\tmax-width: 100%;\n\theight: auto !important;\n\tdisplay: inline-block;\n}\n");
//# sourceMappingURL=build.js.map