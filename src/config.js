System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "bundles": {
    "post-css-built": [
      "npm:insert-css@0.2.0/index",
      "npm:postcss@4.0.6/lib/vendor",
      "npm:base64-js@0.0.8/lib/b64",
      "npm:ieee754@1.1.4/index",
      "npm:is-array@1.0.1/index",
      "npm:process@0.10.1/browser",
      "npm:source-map@0.2.0/lib/source-map/base64",
      "npm:source-map@0.2.0/lib/source-map/util",
      "npm:source-map@0.2.0/lib/source-map/array-set",
      "npm:source-map@0.2.0/lib/source-map/mapping-list",
      "npm:source-map@0.2.0/lib/source-map/binary-search",
      "npm:source-map@0.2.0/lib/source-map/basic-source-map-consumer",
      "npm:source-map@0.2.0/lib/source-map/source-node",
      "github:jspm/nodelibs-fs@0.1.2/index",
      "npm:postcss@4.0.6/lib/comment",
      "npm:postcss@4.0.6/lib/list",
      "npm:postcss@4.0.6/lib/map-generator",
      "npm:postcss@4.0.6/lib/tokenize",
      "npm:postcss@4.0.6/lib/root",
      "npm:postcss@4.0.6/lib/input",
      "npm:caniuse-db@1.0.30000111/data.json!github:systemjs/plugin-json@0.1.0",
      "npm:autoprefixer-core@5.1.8/lib/utils",
      "npm:autoprefixer-core@5.1.8/lib/prefixer",
      "npm:num2fraction@1.0.1/index",
      "npm:autoprefixer-core@5.1.8/lib/old-value",
      "npm:autoprefixer-core@5.1.8/lib/supports",
      "npm:autoprefixer-core@5.1.8/lib/old-selector",
      "npm:autoprefixer-core@5.1.8/lib/at-rule",
      "npm:autoprefixer-core@5.1.8/lib/hacks/fullscreen",
      "npm:autoprefixer-core@5.1.8/lib/hacks/placeholder",
      "npm:autoprefixer-core@5.1.8/lib/hacks/flex-spec",
      "npm:autoprefixer-core@5.1.8/lib/hacks/order",
      "npm:autoprefixer-core@5.1.8/lib/hacks/filter",
      "npm:autoprefixer-core@5.1.8/lib/hacks/flex-flow",
      "npm:autoprefixer-core@5.1.8/lib/hacks/flex-grow",
      "npm:autoprefixer-core@5.1.8/lib/hacks/flex-wrap",
      "npm:autoprefixer-core@5.1.8/lib/hacks/align-self",
      "npm:autoprefixer-core@5.1.8/lib/hacks/flex-basis",
      "npm:autoprefixer-core@5.1.8/lib/hacks/align-items",
      "npm:autoprefixer-core@5.1.8/lib/hacks/flex-shrink",
      "npm:autoprefixer-core@5.1.8/lib/hacks/break-inside",
      "npm:autoprefixer-core@5.1.8/lib/hacks/border-image",
      "npm:autoprefixer-core@5.1.8/lib/hacks/align-content",
      "npm:autoprefixer-core@5.1.8/lib/hacks/border-radius",
      "npm:autoprefixer-core@5.1.8/lib/hacks/block-logical",
      "npm:autoprefixer-core@5.1.8/lib/hacks/inline-logical",
      "npm:autoprefixer-core@5.1.8/lib/hacks/transform-decl",
      "npm:autoprefixer-core@5.1.8/lib/hacks/flex-direction",
      "npm:autoprefixer-core@5.1.8/lib/hacks/image-rendering",
      "npm:autoprefixer-core@5.1.8/lib/hacks/justify-content",
      "npm:autoprefixer-core@5.1.8/lib/hacks/background-size",
      "npm:autoprefixer-core@5.1.8/lib/hacks/gradient",
      "npm:autoprefixer-core@5.1.8/lib/hacks/crisp-edges",
      "npm:autoprefixer-core@5.1.8/lib/hacks/flex-values",
      "npm:autoprefixer-core@5.1.8/lib/hacks/display-flex",
      "npm:autoprefixer-core@5.1.8/lib/hacks/filter-value",
      "npm:autoprefixer-core@5.1.8/lib/hacks/fill-available",
      "npm:autoprefixer-core@5.1.8/lib/hacks/transform-value",
      "npm:caniuse-db@1.0.30000111/features-json/border-radius.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/css-boxshadow.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/css-animation.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/css-transitions.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/transforms2d.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/transforms3d.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/css-gradients.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/css3-boxsizing.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/css-filters.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/multicolumn.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/user-select-none.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/flexbox.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/calc.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/background-img-opts.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/font-feature.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/border-image.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/css-selection.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/css-placeholder.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/css-hyphens.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/fullscreen.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/css3-tabsize.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/intrinsic-width.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/css3-cursors-newer.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/css-sticky.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/pointer.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/text-decoration.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/text-size-adjust.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/css-masks.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/css-boxdecorationbreak.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/object-fit.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/css-shapes.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/text-overflow.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/text-emphasis.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/css-deviceadaptation.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/css-media-resolution.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/css-text-align-last.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/css-crisp-edges.json!github:systemjs/plugin-json@0.1.0",
      "npm:caniuse-db@1.0.30000111/features-json/css-logical-props.json!github:systemjs/plugin-json@0.1.0",
      "npm:autoprefixer-core@5.1.8/lib/info",
      "npm:postcss-nested@0.2.2/index",
      "npm:insert-css@0.2.0",
      "npm:base64-js@0.0.8",
      "npm:ieee754@1.1.4",
      "npm:is-array@1.0.1",
      "npm:process@0.10.1",
      "npm:source-map@0.2.0/lib/source-map/base64-vlq",
      "npm:source-map@0.2.0/lib/source-map/indexed-source-map-consumer",
      "github:jspm/nodelibs-fs@0.1.2",
      "npm:postcss@4.0.6/lib/rule",
      "npm:postcss@4.0.6/lib/result",
      "npm:postcss@4.0.6/lib/parser",
      "npm:browserslist@0.2.0/index",
      "npm:autoprefixer-core@5.1.8/lib/browsers",
      "npm:autoprefixer-core@5.1.8/lib/declaration",
      "npm:num2fraction@1.0.1",
      "npm:autoprefixer-core@5.1.8/lib/value",
      "npm:autoprefixer-core@5.1.8/lib/selector",
      "npm:autoprefixer-core@5.1.8/lib/hacks/flex",
      "npm:autoprefixer-core@5.1.8/data/prefixes",
      "npm:postcss-nested@0.2.2",
      "npm:buffer@3.1.2/index",
      "github:jspm/nodelibs-process@0.1.1/index",
      "npm:source-map@0.2.0/lib/source-map/source-map-consumer",
      "npm:postcss@4.0.6/lib/container",
      "npm:postcss@4.0.6/lib/parse",
      "npm:browserslist@0.2.0",
      "npm:autoprefixer-core@5.1.8/lib/resolution",
      "npm:autoprefixer-core@5.1.8/lib/processor",
      "npm:buffer@3.1.2",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:postcss@4.0.6/lib/at-rule",
      "npm:autoprefixer-core@5.1.8/lib/prefixes",
      "github:jspm/nodelibs-buffer@0.1.0/index",
      "npm:path-browserify@0.0.0/index",
      "npm:autoprefixer-core@5.1.8/lib/autoprefixer",
      "github:jspm/nodelibs-buffer@0.1.0",
      "npm:path-browserify@0.0.0",
      "npm:autoprefixer-core@5.1.8",
      "npm:js-base64@2.1.7/base64",
      "github:jspm/nodelibs-path@0.1.0/index",
      "npm:js-base64@2.1.7",
      "github:jspm/nodelibs-path@0.1.0",
      "npm:amdefine@0.1.0/amdefine",
      "npm:amdefine@0.1.0",
      "npm:source-map@0.2.0/lib/source-map/source-map-generator",
      "npm:source-map@0.2.0/lib/source-map",
      "npm:source-map@0.2.0",
      "npm:postcss@4.0.6/lib/previous-map",
      "npm:postcss@4.0.6/lib/css-syntax-error",
      "npm:postcss@4.0.6/lib/node",
      "npm:postcss@4.0.6/lib/declaration",
      "npm:postcss@4.0.6/lib/postcss",
      "npm:postcss@4.0.6",
      "post-css"
    ],
    "build": [
      "styles/core.scss!post-css",
      "npm:process@0.10.1/browser",
      "npm:react@0.13.1/lib/PooledClass",
      "npm:react@0.13.1/lib/Object.assign",
      "npm:react@0.13.1/lib/emptyObject",
      "npm:react@0.13.1/lib/emptyFunction",
      "npm:react@0.13.1/lib/ReactCurrentOwner",
      "npm:react@0.13.1/lib/ReactRootIndex",
      "npm:react@0.13.1/lib/getIteratorFn",
      "npm:react@0.13.1/lib/ReactLifeCycle",
      "npm:react@0.13.1/lib/ReactInstanceMap",
      "npm:react@0.13.1/lib/CallbackQueue",
      "npm:react@0.13.1/lib/ReactPerf",
      "npm:react@0.13.1/lib/ReactOwner",
      "npm:react@0.13.1/lib/ReactPropTypeLocations",
      "npm:react@0.13.1/lib/ReactPropTypeLocationNames",
      "npm:react@0.13.1/lib/ReactNativeComponent",
      "npm:react@0.13.1/lib/Transaction",
      "npm:react@0.13.1/lib/ReactErrorUtils",
      "npm:react@0.13.1/lib/keyOf",
      "npm:react@0.13.1/lib/mapObject",
      "npm:react@0.13.1/lib/DOMProperty",
      "npm:react@0.13.1/lib/escapeTextContentForBrowser",
      "npm:react@0.13.1/lib/CSSProperty",
      "npm:react@0.13.1/lib/ExecutionEnvironment",
      "npm:react@0.13.1/lib/camelize",
      "npm:react@0.13.1/lib/dangerousStyleValue",
      "npm:react@0.13.1/lib/hyphenate",
      "npm:react@0.13.1/lib/memoizeStringOnly",
      "npm:react@0.13.1/lib/toArray",
      "npm:react@0.13.1/lib/getMarkupWrap",
      "npm:react@0.13.1/lib/ReactMultiChildUpdateTypes",
      "npm:react@0.13.1/lib/setInnerHTML",
      "npm:react@0.13.1/lib/EventPluginRegistry",
      "npm:react@0.13.1/lib/accumulateInto",
      "npm:react@0.13.1/lib/forEachAccumulated",
      "npm:react@0.13.1/lib/ReactEventEmitterMixin",
      "npm:react@0.13.1/lib/ViewportMetrics",
      "npm:react@0.13.1/lib/isEventSupported",
      "npm:react@0.13.1/lib/ReactEmptyComponent",
      "npm:react@0.13.1/lib/adler32",
      "npm:react@0.13.1/lib/isNode",
      "npm:react@0.13.1/lib/getReactRootElementInContainer",
      "npm:react@0.13.1/lib/ReactComponentEnvironment",
      "npm:react@0.13.1/lib/shouldUpdateReactComponent",
      "npm:react@0.13.1/lib/flattenChildren",
      "npm:react@0.13.1/lib/EventPropagators",
      "npm:react@0.13.1/lib/getTextContentAccessor",
      "npm:react@0.13.1/lib/getEventTarget",
      "npm:react@0.13.1/lib/SyntheticInputEvent",
      "npm:react@0.13.1/lib/isTextInputElement",
      "npm:react@0.13.1/lib/ClientReactRootIndex",
      "npm:react@0.13.1/lib/DefaultEventPluginOrder",
      "npm:react@0.13.1/lib/SyntheticUIEvent",
      "npm:react@0.13.1/lib/getEventModifierState",
      "npm:react@0.13.1/lib/HTMLDOMPropertyConfig",
      "npm:react@0.13.1/lib/MobileSafariClickEventPlugin",
      "npm:react@0.13.1/lib/findDOMNode",
      "npm:react@0.13.1/lib/ReactDefaultBatchingStrategy",
      "npm:react@0.13.1/lib/focusNode",
      "npm:react@0.13.1/lib/LocalEventTrapMixin",
      "npm:react@0.13.1/lib/ReactDOMImg",
      "npm:react@0.13.1/lib/ReactDOMIframe",
      "npm:react@0.13.1/lib/ReactPropTypes",
      "npm:react@0.13.1/lib/ReactDOMOption",
      "npm:react@0.13.1/lib/ReactDOMSelect",
      "npm:react@0.13.1/lib/ReactDOMTextarea",
      "npm:react@0.13.1/lib/EventListener",
      "npm:react@0.13.1/lib/getUnboundedScrollPosition",
      "npm:react@0.13.1/lib/ReactInjection",
      "npm:react@0.13.1/lib/getNodeForCharacterOffset",
      "npm:react@0.13.1/lib/getActiveElement",
      "npm:react@0.13.1/lib/ReactPutListenerQueue",
      "npm:react@0.13.1/lib/shallowEqual",
      "npm:react@0.13.1/lib/ServerReactRootIndex",
      "npm:react@0.13.1/lib/SyntheticClipboardEvent",
      "npm:react@0.13.1/lib/SyntheticFocusEvent",
      "npm:react@0.13.1/lib/getEventCharCode",
      "npm:react@0.13.1/lib/getEventKey",
      "npm:react@0.13.1/lib/SyntheticDragEvent",
      "npm:react@0.13.1/lib/SyntheticTouchEvent",
      "npm:react@0.13.1/lib/SyntheticWheelEvent",
      "npm:react@0.13.1/lib/SVGDOMPropertyConfig",
      "npm:react@0.13.1/lib/createFullPageComponent",
      "npm:react@0.13.1/lib/ReactDefaultPerfAnalysis",
      "npm:react@0.13.1/lib/performance",
      "npm:react@0.13.1/lib/ReactServerRenderingTransaction",
      "npm:react@0.13.1/lib/onlyChild",
      "npm:babel-runtime@4.7.16/helpers/class-call-check",
      "npm:babel-runtime@4.7.16/helpers/inherits",
      "npm:babel-runtime@4.7.16/helpers/create-class",
      "npm:react@0.13.1/lib/ReactLink",
      "npm:react@0.13.1/lib/ReactStateSetters",
      "npm:react@0.13.1/lib/ReactComponentWithPureRenderMixin",
      "npm:react@0.13.1/lib/ReactTransitionChildMapping",
      "npm:react@0.13.1/lib/joinClasses",
      "npm:react@0.13.1/lib/CSSCore",
      "npm:react@0.13.1/lib/ReactTransitionEvents",
      "npm:react@0.13.1/lib/cx",
      "npm:react@0.13.1/lib/update",
      "npm:react@0.13.1/lib/ReactTestUtils",
      "npm:eventemitter3@0.1.6/index",
      "npm:object-assign@2.0.0/index",
      "npm:uniqueid@0.1.0/index",
      "npm:flux@2.0.1/lib/invariant",
      "lib/components/controls/controls.scss!post-css",
      "npm:babel-runtime@4.7.16/core-js",
      "npm:react-canvas@0.0.1/lib/ContainerMixin",
      "npm:react-canvas@0.0.1/lib/FrameUtils",
      "npm:events-browserify@0.0.1/events",
      "npm:react-canvas@0.0.1/lib/FontFace",
      "npm:react-canvas@0.0.1/lib/clamp",
      "npm:react-canvas@0.0.1/lib/measureText",
      "npm:react-canvas@0.0.1/lib/Canvas",
      "npm:react-canvas@0.0.1/lib/EventTypes",
      "npm:react-canvas@0.0.1/lib/hitTest",
      "npm:react-canvas@0.0.1/lib/Layout",
      "npm:react-canvas@0.0.1/lib/createComponent",
      "npm:react-canvas@0.0.1/lib/LayerMixin",
      "lib/components/output/output.scss!post-css",
      "npm:flummox@3.5.0",
      "lib/actions/message-actions",
      "lib/stores/message-store",
      "npm:process@0.10.1",
      "npm:react@0.13.1/lib/warning",
      "npm:react@0.13.1/lib/ReactInstanceHandles",
      "npm:react@0.13.1/lib/ReactRef",
      "npm:react@0.13.1/lib/ReactElementValidator",
      "npm:react@0.13.1/lib/ReactClass",
      "npm:react@0.13.1/lib/ReactDOM",
      "npm:react@0.13.1/lib/quoteAttributeValueForBrowser",
      "npm:react@0.13.1/lib/camelizeStyleName",
      "npm:react@0.13.1/lib/hyphenateStyleName",
      "npm:react@0.13.1/lib/createArrayFromMixed",
      "npm:react@0.13.1/lib/setTextContent",
      "npm:react@0.13.1/lib/EventPluginHub",
      "npm:react@0.13.1/lib/ReactMarkupChecksum",
      "npm:react@0.13.1/lib/isTextNode",
      "npm:react@0.13.1/lib/ReactCompositeComponent",
      "npm:react@0.13.1/lib/ReactChildReconciler",
      "npm:react@0.13.1/lib/FallbackCompositionState",
      "npm:react@0.13.1/lib/SyntheticEvent",
      "npm:react@0.13.1/lib/ChangeEventPlugin",
      "npm:react@0.13.1/lib/SyntheticMouseEvent",
      "npm:react@0.13.1/lib/ReactBrowserComponentMixin",
      "npm:react@0.13.1/lib/AutoFocusMixin",
      "npm:react@0.13.1/lib/ReactDOMForm",
      "npm:react@0.13.1/lib/LinkedValueUtils",
      "npm:react@0.13.1/lib/ReactEventListener",
      "npm:react@0.13.1/lib/ReactDOMSelection",
      "npm:react@0.13.1/lib/SelectEventPlugin",
      "npm:react@0.13.1/lib/SyntheticKeyboardEvent",
      "npm:react@0.13.1/lib/performanceNow",
      "npm:react@0.13.1/lib/ReactServerRendering",
      "npm:react@0.13.1/lib/LinkedStateMixin",
      "npm:react@0.13.1/lib/ReactPropTransferer",
      "npm:react@0.13.1/lib/ReactCSSTransitionGroupChild",
      "npm:eventemitter3@0.1.6",
      "npm:object-assign@2.0.0",
      "npm:uniqueid@0.1.0",
      "npm:flux@2.0.1/lib/Dispatcher",
      "lib/components/controls/controls.jsx!github:floatdrop/plugin-jsx@1.1.0",
      "npm:babel-runtime@4.7.16/helpers/get",
      "npm:events-browserify@0.0.1",
      "npm:react-canvas@0.0.1/lib/FontUtils",
      "npm:react-canvas@0.0.1/lib/CanvasUtils",
      "npm:react-canvas@0.0.1/lib/layoutNode",
      "npm:react-canvas@0.0.1/lib/Text",
      "lib/flux",
      "github:jspm/nodelibs-process@0.1.1/index",
      "npm:react@0.13.1/lib/ReactContext",
      "npm:react@0.13.1/lib/traverseAllChildren",
      "npm:react@0.13.1/lib/ReactReconciler",
      "npm:react@0.13.1/lib/DOMPropertyOperations",
      "npm:react@0.13.1/lib/CSSPropertyOperations",
      "npm:react@0.13.1/lib/createNodesFromMarkup",
      "npm:react@0.13.1/lib/ReactBrowserEventEmitter",
      "npm:react@0.13.1/lib/containsNode",
      "npm:react@0.13.1/lib/instantiateReactComponent",
      "npm:react@0.13.1/lib/ReactMultiChild",
      "npm:react@0.13.1/lib/SyntheticCompositionEvent",
      "npm:react@0.13.1/lib/EnterLeaveEventPlugin",
      "npm:react@0.13.1/lib/ReactDOMButton",
      "npm:react@0.13.1/lib/ReactDOMInput",
      "npm:react@0.13.1/lib/ReactInputSelection",
      "npm:react@0.13.1/lib/SimpleEventPlugin",
      "npm:react@0.13.1/lib/ReactDefaultPerf",
      "npm:react@0.13.1/lib/cloneWithProps",
      "npm:flummox@3.5.0/lib/Store",
      "npm:flummox@3.5.0/lib/Actions",
      "npm:flux@2.0.1/index",
      "github:jspm/nodelibs-events@0.1.0/index",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:react@0.13.1/lib/ReactElement",
      "npm:react@0.13.1/lib/ReactUpdates",
      "npm:react@0.13.1/lib/Danger",
      "npm:react@0.13.1/lib/ReactMount",
      "npm:react@0.13.1/lib/ReactDOMComponent",
      "npm:react@0.13.1/lib/BeforeInputEventPlugin",
      "npm:react@0.13.1/lib/ReactReconcileTransaction",
      "npm:react@0.13.1/lib/ReactTransitionGroup",
      "npm:flux@2.0.1",
      "github:jspm/nodelibs-events@0.1.0",
      "npm:react@0.13.1/lib/invariant",
      "npm:react@0.13.1/lib/ReactFragment",
      "npm:react@0.13.1/lib/ReactUpdateQueue",
      "npm:react@0.13.1/lib/DOMChildrenOperations",
      "npm:react@0.13.1/lib/ReactDefaultInjection",
      "npm:react@0.13.1/lib/ReactCSSTransitionGroup",
      "npm:flummox@3.5.0/lib/Flux",
      "npm:react-canvas@0.0.1/lib/ImageCache",
      "npm:react@0.13.1/lib/keyMirror",
      "npm:react@0.13.1/lib/ReactChildren",
      "npm:react@0.13.1/lib/ReactComponent",
      "npm:react@0.13.1/lib/ReactDOMIDOperations",
      "npm:react@0.13.1/lib/ReactWithAddons",
      "npm:flummox@3.5.0/lib/addons/reactComponentMethods",
      "npm:react-canvas@0.0.1/lib/DrawingUtils",
      "npm:react@0.13.1/lib/EventConstants",
      "npm:react@0.13.1/lib/ReactComponentBrowserEnvironment",
      "npm:react@0.13.1/addons",
      "npm:react-canvas@0.0.1/lib/RenderLayer",
      "npm:react@0.13.1/lib/EventPluginUtils",
      "npm:react@0.13.1/lib/ReactDOMTextComponent",
      "npm:flummox@3.5.0/lib/addons/FluxComponent",
      "npm:react-canvas@0.0.1/lib/Surface",
      "npm:react@0.13.1/lib/React",
      "npm:flummox@3.5.0/component",
      "lib/components/output/output.jsx!github:floatdrop/plugin-jsx@1.1.0",
      "npm:react@0.13.1/react",
      "lib/app.jsx!github:floatdrop/plugin-jsx@1.1.0",
      "npm:react@0.13.1",
      "lib/main"
    ]
  }
});

System.config({
  "map": {
    "autoprefixer": "npm:autoprefixer@5.1.0",
    "autoprefixer-core": "npm:autoprefixer-core@5.1.8",
    "babel": "npm:babel@4.7.16",
    "babel-runtime": "npm:babel-runtime@4.7.16",
    "caniuse-db": "npm:caniuse-db@1.0.30000111",
    "flummox": "npm:flummox@3.5.0",
    "insert-css": "npm:insert-css@0.2.0",
    "isomorphic-fetch": "npm:isomorphic-fetch@2.0.0",
    "json": "github:systemjs/plugin-json@0.1.0",
    "jsx": "github:floatdrop/plugin-jsx@1.1.0",
    "postcss": "npm:postcss@4.0.6",
    "postcss-nested": "npm:postcss-nested@0.2.2",
    "react": "npm:react@0.13.1",
    "react-canvas": "npm:react-canvas@0.0.1",
    "traceur": "github:jmcriffey/bower-traceur@0.0.87",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.87",
    "whatwg-fetch": "npm:whatwg-fetch@0.7.0",
    "github:floatdrop/plugin-jsx@1.1.0": {
      "react-tools": "npm:react-tools@0.13.1"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.1.2"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.13"
    },
    "github:jspm/nodelibs-events@0.1.0": {
      "events-browserify": "npm:events-browserify@0.0.1"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:amdefine@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:asn1.js-rfc3280@1.0.0": {
      "asn1.js": "npm:asn1.js@1.0.3"
    },
    "npm:asn1.js@1.0.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:ast-types@0.6.16": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:autoprefixer-core@5.1.8": {
      "browserslist": "npm:browserslist@0.2.0",
      "caniuse-db": "npm:caniuse-db@1.0.30000111",
      "num2fraction": "npm:num2fraction@1.0.1",
      "postcss": "npm:postcss@4.0.6",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:autoprefixer@5.1.0": {
      "autoprefixer-core": "npm:autoprefixer-core@5.1.8",
      "fs-extra": "npm:fs-extra@0.16.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@4.0.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:babel-runtime@4.7.16": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:brace-expansion@1.1.0": {
      "balanced-match": "npm:balanced-match@0.2.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browserify-aes@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@1.1.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:browserify-rsa@2.0.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@2.8.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "browserify-rsa": "npm:browserify-rsa@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@1.0.1",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@2.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:browserslist@0.2.0": {
      "caniuse-db": "npm:caniuse-db@1.0.30000111",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:buffer@3.1.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.4",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:commander@2.5.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:commoner@0.10.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.5.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@4.2.2",
      "graceful-fs": "npm:graceful-fs@3.0.6",
      "iconv-lite": "npm:iconv-lite@0.4.7",
      "install": "npm:install@0.1.8",
      "mkdirp": "npm:mkdirp@0.5.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "q": "npm:q@1.1.2",
      "recast": "npm:recast@0.9.18",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@1.0.1"
    },
    "npm:create-hash@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.0",
      "sha.js": "npm:sha.js@2.3.6",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-hmac@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.9.13": {
      "browserify-aes": "npm:browserify-aes@1.0.0",
      "browserify-sign": "npm:browserify-sign@2.8.0",
      "create-ecdh": "npm:create-ecdh@2.0.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "diffie-hellman": "npm:diffie-hellman@3.0.1",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2-compat": "npm:pbkdf2-compat@3.0.2",
      "public-encrypt": "npm:public-encrypt@2.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:diffie-hellman@3.0.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@1.1.5",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@1.0.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:encoding@0.1.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.7"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.6"
    },
    "npm:esprima-fb@10001.1.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:eventemitter3@0.1.6": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:events-browserify@0.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:flummox@3.5.0": {
      "eventemitter3": "npm:eventemitter3@0.1.6",
      "flux": "npm:flux@2.0.1",
      "object-assign": "npm:object-assign@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "uniqueid": "npm:uniqueid@0.1.0"
    },
    "npm:fs-extra@0.16.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "graceful-fs": "npm:graceful-fs@3.0.6",
      "jsonfile": "npm:jsonfile@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "rimraf": "npm:rimraf@2.3.2"
    },
    "npm:glob@4.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@1.0.0",
      "once": "npm:once@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glob@4.5.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@2.0.4",
      "once": "npm:once@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@3.0.6": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:hash.js@1.0.2": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:install@0.1.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:isomorphic-fetch@2.0.0": {
      "node-fetch": "npm:node-fetch@1.0.6",
      "whatwg-fetch": "github:matthew-andrews/fetch@ie9"
    },
    "npm:js-base64@2.1.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:jsonfile@2.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:miller-rabin@1.1.5": {
      "bn.js": "npm:bn.js@1.3.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:minimatch@1.0.0": {
      "lru-cache": "npm:lru-cache@2.5.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sigmund": "npm:sigmund@1.0.0"
    },
    "npm:minimatch@2.0.4": {
      "brace-expansion": "npm:brace-expansion@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:mkdirp@0.5.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:node-fetch@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.11",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:once@1.3.1": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:pako@0.2.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:parse-asn1@2.0.0": {
      "asn1.js": "npm:asn1.js@1.0.3",
      "asn1.js-rfc3280": "npm:asn1.js-rfc3280@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pemstrip": "npm:pemstrip@0.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parse-asn1@3.0.0": {
      "asn1.js": "npm:asn1.js@1.0.3",
      "browserify-aes": "npm:browserify-aes@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "pbkdf2-compat": "npm:pbkdf2-compat@3.0.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:pbkdf2-compat@3.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:postcss-nested@0.2.2": {
      "postcss": "npm:postcss@4.0.6",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:postcss@4.0.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.2.0"
    },
    "npm:public-encrypt@2.0.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:q@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:react-canvas@0.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "react": "npm:react@0.13.1",
      "scroller": "github:mjohnston/scroller@1.2.2"
    },
    "npm:react-tools@0.13.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commoner": "npm:commoner@0.10.1",
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:react@0.13.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:recast@0.9.18": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.6.16",
      "esprima-fb": "npm:esprima-fb@10001.1.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43"
    },
    "npm:rimraf@2.3.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@4.5.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:ripemd160@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sha.js@2.3.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sigmund@1.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.2.0": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.6": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:uniqueid@0.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});

