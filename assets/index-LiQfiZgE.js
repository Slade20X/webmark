var Cc = e => {
    throw TypeError(e)
}
;
var hl = (e, t, n) => t.has(e) || Cc("Cannot " + n);
var P = (e, t, n) => (hl(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , J = (e, t, n) => t.has(e) ? Cc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , B = (e, t, n, r) => (hl(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , ze = (e, t, n) => (hl(e, t, "access private method"),
n);
var Si = (e, t, n, r) => ({
    set _(o) {
        B(e, t, o, n)
    },
    get _() {
        return P(e, t, r)
    }
});
function _y(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function zf(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Nf = {
    exports: {}
}
  , Ds = {}
  , Tf = {
    exports: {}
}
  , Y = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ui = Symbol.for("react.element")
  , Ay = Symbol.for("react.portal")
  , My = Symbol.for("react.fragment")
  , Ly = Symbol.for("react.strict_mode")
  , Dy = Symbol.for("react.profiler")
  , Iy = Symbol.for("react.provider")
  , Fy = Symbol.for("react.context")
  , $y = Symbol.for("react.forward_ref")
  , Uy = Symbol.for("react.suspense")
  , By = Symbol.for("react.memo")
  , Vy = Symbol.for("react.lazy")
  , bc = Symbol.iterator;
function Wy(e) {
    return e === null || typeof e != "object" ? null : (e = bc && e[bc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var jf = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Rf = Object.assign
  , Of = {};
function ro(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Of,
    this.updater = n || jf
}
ro.prototype.isReactComponent = {};
ro.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
ro.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function _f() {}
_f.prototype = ro.prototype;
function ou(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Of,
    this.updater = n || jf
}
var iu = ou.prototype = new _f;
iu.constructor = ou;
Rf(iu, ro.prototype);
iu.isPureReactComponent = !0;
var Pc = Array.isArray
  , Af = Object.prototype.hasOwnProperty
  , su = {
    current: null
}
  , Mf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Lf(e, t, n) {
    var r, o = {}, i = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            Af.call(t, r) && !Mf.hasOwnProperty(r) && (o[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        o.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            o[r] === void 0 && (o[r] = l[r]);
    return {
        $$typeof: ui,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: su.current
    }
}
function Hy(e, t) {
    return {
        $$typeof: ui,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function lu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ui
}
function Qy(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var zc = /\/+/g;
function ml(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Qy("" + e.key) : t.toString(36)
}
function Hi(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ui:
            case Ay:
                s = !0
            }
        }
    if (s)
        return s = e,
        o = o(s),
        e = r === "" ? "." + ml(s, 0) : r,
        Pc(o) ? (n = "",
        e != null && (n = e.replace(zc, "$&/") + "/"),
        Hi(o, t, n, "", function(u) {
            return u
        })) : o != null && (lu(o) && (o = Hy(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(zc, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    Pc(e))
        for (var l = 0; l < e.length; l++) {
            i = e[l];
            var a = r + ml(i, l);
            s += Hi(i, t, n, a, o)
        }
    else if (a = Wy(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(i = e.next()).done; )
            i = i.value,
            a = r + ml(i, l++),
            s += Hi(i, t, n, a, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function Ei(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Hi(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function Ky(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var De = {
    current: null
}
  , Qi = {
    transition: null
}
  , Yy = {
    ReactCurrentDispatcher: De,
    ReactCurrentBatchConfig: Qi,
    ReactCurrentOwner: su
};
function Df() {
    throw Error("act(...) is not supported in production builds of React.")
}
Y.Children = {
    map: Ei,
    forEach: function(e, t, n) {
        Ei(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ei(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ei(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!lu(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Y.Component = ro;
Y.Fragment = My;
Y.Profiler = Dy;
Y.PureComponent = ou;
Y.StrictMode = Ly;
Y.Suspense = Uy;
Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yy;
Y.act = Df;
Y.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Rf({}, e.props)
      , o = e.key
      , i = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        s = su.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            Af.call(t, a) && !Mf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: ui,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
}
;
Y.createContext = function(e) {
    return e = {
        $$typeof: Fy,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Iy,
        _context: e
    },
    e.Consumer = e
}
;
Y.createElement = Lf;
Y.createFactory = function(e) {
    var t = Lf.bind(null, e);
    return t.type = e,
    t
}
;
Y.createRef = function() {
    return {
        current: null
    }
}
;
Y.forwardRef = function(e) {
    return {
        $$typeof: $y,
        render: e
    }
}
;
Y.isValidElement = lu;
Y.lazy = function(e) {
    return {
        $$typeof: Vy,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Ky
    }
}
;
Y.memo = function(e, t) {
    return {
        $$typeof: By,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
Y.startTransition = function(e) {
    var t = Qi.transition;
    Qi.transition = {};
    try {
        e()
    } finally {
        Qi.transition = t
    }
}
;
Y.unstable_act = Df;
Y.useCallback = function(e, t) {
    return De.current.useCallback(e, t)
}
;
Y.useContext = function(e) {
    return De.current.useContext(e)
}
;
Y.useDebugValue = function() {}
;
Y.useDeferredValue = function(e) {
    return De.current.useDeferredValue(e)
}
;
Y.useEffect = function(e, t) {
    return De.current.useEffect(e, t)
}
;
Y.useId = function() {
    return De.current.useId()
}
;
Y.useImperativeHandle = function(e, t, n) {
    return De.current.useImperativeHandle(e, t, n)
}
;
Y.useInsertionEffect = function(e, t) {
    return De.current.useInsertionEffect(e, t)
}
;
Y.useLayoutEffect = function(e, t) {
    return De.current.useLayoutEffect(e, t)
}
;
Y.useMemo = function(e, t) {
    return De.current.useMemo(e, t)
}
;
Y.useReducer = function(e, t, n) {
    return De.current.useReducer(e, t, n)
}
;
Y.useRef = function(e) {
    return De.current.useRef(e)
}
;
Y.useState = function(e) {
    return De.current.useState(e)
}
;
Y.useSyncExternalStore = function(e, t, n) {
    return De.current.useSyncExternalStore(e, t, n)
}
;
Y.useTransition = function() {
    return De.current.useTransition()
}
;
Y.version = "18.3.1";
Tf.exports = Y;
var w = Tf.exports;
const R = zf(w)
  , If = _y({
    __proto__: null,
    default: R
}, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gy = w
  , qy = Symbol.for("react.element")
  , Xy = Symbol.for("react.fragment")
  , Jy = Object.prototype.hasOwnProperty
  , Zy = Gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , eg = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Ff(e, t, n) {
    var r, o = {}, i = null, s = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        Jy.call(t, r) && !eg.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: qy,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Zy.current
    }
}
Ds.Fragment = Xy;
Ds.jsx = Ff;
Ds.jsxs = Ff;
Nf.exports = Ds;
var v = Nf.exports
  , $f = {
    exports: {}
}
  , Je = {}
  , Uf = {
    exports: {}
}
  , Bf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(z, N) {
        var M = z.length;
        z.push(N);
        e: for (; 0 < M; ) {
            var W = M - 1 >>> 1
              , I = z[W];
            if (0 < o(I, N))
                z[W] = N,
                z[M] = I,
                M = W;
            else
                break e
        }
    }
    function n(z) {
        return z.length === 0 ? null : z[0]
    }
    function r(z) {
        if (z.length === 0)
            return null;
        var N = z[0]
          , M = z.pop();
        if (M !== N) {
            z[0] = M;
            e: for (var W = 0, I = z.length, K = I >>> 1; W < K; ) {
                var q = 2 * (W + 1) - 1
                  , he = z[q]
                  , Pe = q + 1
                  , Z = z[Pe];
                if (0 > o(he, M))
                    Pe < I && 0 > o(Z, he) ? (z[W] = Z,
                    z[Pe] = M,
                    W = Pe) : (z[W] = he,
                    z[q] = M,
                    W = q);
                else if (Pe < I && 0 > o(Z, M))
                    z[W] = Z,
                    z[Pe] = M,
                    W = Pe;
                else
                    break e
            }
        }
        return N
    }
    function o(z, N) {
        var M = z.sortIndex - N.sortIndex;
        return M !== 0 ? M : z.id - N.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date
          , l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = []
      , u = []
      , c = 1
      , f = null
      , h = 3
      , d = !1
      , k = !1
      , g = !1
      , x = typeof setTimeout == "function" ? setTimeout : null
      , m = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(z) {
        for (var N = n(u); N !== null; ) {
            if (N.callback === null)
                r(u);
            else if (N.startTime <= z)
                r(u),
                N.sortIndex = N.expirationTime,
                t(a, N);
            else
                break;
            N = n(u)
        }
    }
    function S(z) {
        if (g = !1,
        y(z),
        !k)
            if (n(a) !== null)
                k = !0,
                $(E);
            else {
                var N = n(u);
                N !== null && V(S, N.startTime - z)
            }
    }
    function E(z, N) {
        k = !1,
        g && (g = !1,
        m(T),
        T = -1),
        d = !0;
        var M = h;
        try {
            for (y(N),
            f = n(a); f !== null && (!(f.expirationTime > N) || z && !F()); ) {
                var W = f.callback;
                if (typeof W == "function") {
                    f.callback = null,
                    h = f.priorityLevel;
                    var I = W(f.expirationTime <= N);
                    N = e.unstable_now(),
                    typeof I == "function" ? f.callback = I : f === n(a) && r(a),
                    y(N)
                } else
                    r(a);
                f = n(a)
            }
            if (f !== null)
                var K = !0;
            else {
                var q = n(u);
                q !== null && V(S, q.startTime - N),
                K = !1
            }
            return K
        } finally {
            f = null,
            h = M,
            d = !1
        }
    }
    var C = !1
      , b = null
      , T = -1
      , _ = 5
      , O = -1;
    function F() {
        return !(e.unstable_now() - O < _)
    }
    function D() {
        if (b !== null) {
            var z = e.unstable_now();
            O = z;
            var N = !0;
            try {
                N = b(!0, z)
            } finally {
                N ? Q() : (C = !1,
                b = null)
            }
        } else
            C = !1
    }
    var Q;
    if (typeof p == "function")
        Q = function() {
            p(D)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var A = new MessageChannel
          , G = A.port2;
        A.port1.onmessage = D,
        Q = function() {
            G.postMessage(null)
        }
    } else
        Q = function() {
            x(D, 0)
        }
        ;
    function $(z) {
        b = z,
        C || (C = !0,
        Q())
    }
    function V(z, N) {
        T = x(function() {
            z(e.unstable_now())
        }, N)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(z) {
        z.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        k || d || (k = !0,
        $(E))
    }
    ,
    e.unstable_forceFrameRate = function(z) {
        0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _ = 0 < z ? Math.floor(1e3 / z) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return h
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(z) {
        switch (h) {
        case 1:
        case 2:
        case 3:
            var N = 3;
            break;
        default:
            N = h
        }
        var M = h;
        h = N;
        try {
            return z()
        } finally {
            h = M
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(z, N) {
        switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            z = 3
        }
        var M = h;
        h = z;
        try {
            return N()
        } finally {
            h = M
        }
    }
    ,
    e.unstable_scheduleCallback = function(z, N, M) {
        var W = e.unstable_now();
        switch (typeof M == "object" && M !== null ? (M = M.delay,
        M = typeof M == "number" && 0 < M ? W + M : W) : M = W,
        z) {
        case 1:
            var I = -1;
            break;
        case 2:
            I = 250;
            break;
        case 5:
            I = 1073741823;
            break;
        case 4:
            I = 1e4;
            break;
        default:
            I = 5e3
        }
        return I = M + I,
        z = {
            id: c++,
            callback: N,
            priorityLevel: z,
            startTime: M,
            expirationTime: I,
            sortIndex: -1
        },
        M > W ? (z.sortIndex = M,
        t(u, z),
        n(a) === null && z === n(u) && (g ? (m(T),
        T = -1) : g = !0,
        V(S, M - W))) : (z.sortIndex = I,
        t(a, z),
        k || d || (k = !0,
        $(E))),
        z
    }
    ,
    e.unstable_shouldYield = F,
    e.unstable_wrapCallback = function(z) {
        var N = h;
        return function() {
            var M = h;
            h = N;
            try {
                return z.apply(this, arguments)
            } finally {
                h = M
            }
        }
    }
}
)(Bf);
Uf.exports = Bf;
var tg = Uf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ng = w
  , Xe = tg;
function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Vf = new Set
  , Io = {};
function lr(e, t) {
    Yr(e, t),
    Yr(e + "Capture", t)
}
function Yr(e, t) {
    for (Io[e] = t,
    e = 0; e < t.length; e++)
        Vf.add(t[e])
}
var Ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Gl = Object.prototype.hasOwnProperty
  , rg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Nc = {}
  , Tc = {};
function og(e) {
    return Gl.call(Tc, e) ? !0 : Gl.call(Nc, e) ? !1 : rg.test(e) ? Tc[e] = !0 : (Nc[e] = !0,
    !1)
}
function ig(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function sg(e, t, n, r) {
    if (t === null || typeof t > "u" || ig(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Ie(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = s
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ce[e] = new Ie(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ce[t] = new Ie(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ce[e] = new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ce[e] = new Ie(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ce[e] = new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ce[e] = new Ie(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ce[e] = new Ie(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ce[e] = new Ie(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ce[e] = new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var au = /[\-:]([a-z])/g;
function uu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(au, uu);
    Ce[t] = new Ie(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(au, uu);
    Ce[t] = new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(au, uu);
    Ce[t] = new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ce[e] = new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ce.xlinkHref = new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ce[e] = new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function cu(e, t, n, r) {
    var o = Ce.hasOwnProperty(t) ? Ce[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (sg(t, n, o, r) && (n = null),
    r || o === null ? og(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Xt = ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Ci = Symbol.for("react.element")
  , xr = Symbol.for("react.portal")
  , kr = Symbol.for("react.fragment")
  , du = Symbol.for("react.strict_mode")
  , ql = Symbol.for("react.profiler")
  , Wf = Symbol.for("react.provider")
  , Hf = Symbol.for("react.context")
  , fu = Symbol.for("react.forward_ref")
  , Xl = Symbol.for("react.suspense")
  , Jl = Symbol.for("react.suspense_list")
  , pu = Symbol.for("react.memo")
  , un = Symbol.for("react.lazy")
  , Qf = Symbol.for("react.offscreen")
  , jc = Symbol.iterator;
function ho(e) {
    return e === null || typeof e != "object" ? null : (e = jc && e[jc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ce = Object.assign, yl;
function Co(e) {
    if (yl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            yl = t && t[1] || ""
        }
    return `
` + yl + e
}
var gl = !1;
function vl(e, t) {
    if (!e || gl)
        return "";
    gl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (o[s] !== i[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || o[s] !== i[l]) {
                                var a = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        gl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Co(e) : ""
}
function lg(e) {
    switch (e.tag) {
    case 5:
        return Co(e.type);
    case 16:
        return Co("Lazy");
    case 13:
        return Co("Suspense");
    case 19:
        return Co("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = vl(e.type, !1),
        e;
    case 11:
        return e = vl(e.type.render, !1),
        e;
    case 1:
        return e = vl(e.type, !0),
        e;
    default:
        return ""
    }
}
function Zl(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case kr:
        return "Fragment";
    case xr:
        return "Portal";
    case ql:
        return "Profiler";
    case du:
        return "StrictMode";
    case Xl:
        return "Suspense";
    case Jl:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Hf:
            return (e.displayName || "Context") + ".Consumer";
        case Wf:
            return (e._context.displayName || "Context") + ".Provider";
        case fu:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case pu:
            return t = e.displayName || null,
            t !== null ? t : Zl(e.type) || "Memo";
        case un:
            t = e._payload,
            e = e._init;
            try {
                return Zl(e(t))
            } catch {}
        }
    return null
}
function ag(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Zl(t);
    case 8:
        return t === du ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function jn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Kf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function ug(e) {
    var t = Kf(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s,
                i.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function bi(e) {
    e._valueTracker || (e._valueTracker = ug(e))
}
function Yf(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Kf(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function ss(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function ea(e, t) {
    var n = t.checked;
    return ce({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Rc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = jn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Gf(e, t) {
    t = t.checked,
    t != null && cu(e, "checked", t, !1)
}
function ta(e, t) {
    Gf(e, t);
    var n = jn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? na(e, t.type, n) : t.hasOwnProperty("defaultValue") && na(e, t.type, jn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Oc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function na(e, t, n) {
    (t !== "number" || ss(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var bo = Array.isArray;
function Or(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + jn(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function ra(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(j(91));
    return ce({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function _c(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(j(92));
            if (bo(n)) {
                if (1 < n.length)
                    throw Error(j(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: jn(n)
    }
}
function qf(e, t) {
    var n = jn(t.value)
      , r = jn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Ac(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Xf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function oa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Xf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Pi, Jf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
    else {
        for (Pi = Pi || document.createElement("div"),
        Pi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Pi.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Fo(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var No = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , cg = ["Webkit", "ms", "Moz", "O"];
Object.keys(No).forEach(function(e) {
    cg.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        No[t] = No[e]
    })
});
function Zf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || No.hasOwnProperty(e) && No[e] ? ("" + t).trim() : t + "px"
}
function ep(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = Zf(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var dg = ce({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ia(e, t) {
    if (t) {
        if (dg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(j(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(j(62))
    }
}
function sa(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var la = null;
function hu(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var aa = null
  , _r = null
  , Ar = null;
function Mc(e) {
    if (e = fi(e)) {
        if (typeof aa != "function")
            throw Error(j(280));
        var t = e.stateNode;
        t && (t = Bs(t),
        aa(e.stateNode, e.type, t))
    }
}
function tp(e) {
    _r ? Ar ? Ar.push(e) : Ar = [e] : _r = e
}
function np() {
    if (_r) {
        var e = _r
          , t = Ar;
        if (Ar = _r = null,
        Mc(e),
        t)
            for (e = 0; e < t.length; e++)
                Mc(t[e])
    }
}
function rp(e, t) {
    return e(t)
}
function op() {}
var wl = !1;
function ip(e, t, n) {
    if (wl)
        return e(t, n);
    wl = !0;
    try {
        return rp(e, t, n)
    } finally {
        wl = !1,
        (_r !== null || Ar !== null) && (op(),
        np())
    }
}
function $o(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Bs(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(j(231, t, typeof n));
    return n
}
var ua = !1;
if (Ht)
    try {
        var mo = {};
        Object.defineProperty(mo, "passive", {
            get: function() {
                ua = !0
            }
        }),
        window.addEventListener("test", mo, mo),
        window.removeEventListener("test", mo, mo)
    } catch {
        ua = !1
    }
function fg(e, t, n, r, o, i, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var To = !1
  , ls = null
  , as = !1
  , ca = null
  , pg = {
    onError: function(e) {
        To = !0,
        ls = e
    }
};
function hg(e, t, n, r, o, i, s, l, a) {
    To = !1,
    ls = null,
    fg.apply(pg, arguments)
}
function mg(e, t, n, r, o, i, s, l, a) {
    if (hg.apply(this, arguments),
    To) {
        if (To) {
            var u = ls;
            To = !1,
            ls = null
        } else
            throw Error(j(198));
        as || (as = !0,
        ca = u)
    }
}
function ar(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function sp(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Lc(e) {
    if (ar(e) !== e)
        throw Error(j(188))
}
function yg(e) {
    var t = e.alternate;
    if (!t) {
        if (t = ar(e),
        t === null)
            throw Error(j(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return Lc(o),
                    e;
                if (i === r)
                    return Lc(o),
                    t;
                i = i.sibling
            }
            throw Error(j(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var s = !1, l = o.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = o,
                    r = i;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = o,
                    n = i;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = i.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = i,
                        n = o;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(j(189))
            }
        }
        if (n.alternate !== r)
            throw Error(j(190))
    }
    if (n.tag !== 3)
        throw Error(j(188));
    return n.stateNode.current === n ? e : t
}
function lp(e) {
    return e = yg(e),
    e !== null ? ap(e) : null
}
function ap(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = ap(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var up = Xe.unstable_scheduleCallback
  , Dc = Xe.unstable_cancelCallback
  , gg = Xe.unstable_shouldYield
  , vg = Xe.unstable_requestPaint
  , pe = Xe.unstable_now
  , wg = Xe.unstable_getCurrentPriorityLevel
  , mu = Xe.unstable_ImmediatePriority
  , cp = Xe.unstable_UserBlockingPriority
  , us = Xe.unstable_NormalPriority
  , xg = Xe.unstable_LowPriority
  , dp = Xe.unstable_IdlePriority
  , Is = null
  , Ot = null;
function kg(e) {
    if (Ot && typeof Ot.onCommitFiberRoot == "function")
        try {
            Ot.onCommitFiberRoot(Is, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var wt = Math.clz32 ? Math.clz32 : Cg
  , Sg = Math.log
  , Eg = Math.LN2;
function Cg(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Sg(e) / Eg | 0) | 0
}
var zi = 64
  , Ni = 4194304;
function Po(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function cs(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~o;
        l !== 0 ? r = Po(l) : (i &= s,
        i !== 0 && (r = Po(i)))
    } else
        s = n & ~o,
        s !== 0 ? r = Po(s) : i !== 0 && (r = Po(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - wt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function bg(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Pg(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var s = 31 - wt(i)
          , l = 1 << s
          , a = o[s];
        a === -1 ? (!(l & n) || l & r) && (o[s] = bg(l, t)) : a <= t && (e.expiredLanes |= l),
        i &= ~l
    }
}
function da(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function fp() {
    var e = zi;
    return zi <<= 1,
    !(zi & 4194240) && (zi = 64),
    e
}
function xl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ci(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - wt(t),
    e[t] = n
}
function zg(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - wt(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function yu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - wt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var ee = 0;
function pp(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var hp, gu, mp, yp, gp, fa = !1, Ti = [], kn = null, Sn = null, En = null, Uo = new Map, Bo = new Map, dn = [], Ng = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ic(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        kn = null;
        break;
    case "dragenter":
    case "dragleave":
        Sn = null;
        break;
    case "mouseover":
    case "mouseout":
        En = null;
        break;
    case "pointerover":
    case "pointerout":
        Uo.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Bo.delete(t.pointerId)
    }
}
function yo(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = fi(t),
    t !== null && gu(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function Tg(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return kn = yo(kn, e, t, n, r, o),
        !0;
    case "dragenter":
        return Sn = yo(Sn, e, t, n, r, o),
        !0;
    case "mouseover":
        return En = yo(En, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return Uo.set(i, yo(Uo.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        Bo.set(i, yo(Bo.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function vp(e) {
    var t = Wn(e.target);
    if (t !== null) {
        var n = ar(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = sp(n),
                t !== null) {
                    e.blockedOn = t,
                    gp(e.priority, function() {
                        mp(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Ki(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = pa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            la = r,
            n.target.dispatchEvent(r),
            la = null
        } else
            return t = fi(n),
            t !== null && gu(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Fc(e, t, n) {
    Ki(e) && n.delete(t)
}
function jg() {
    fa = !1,
    kn !== null && Ki(kn) && (kn = null),
    Sn !== null && Ki(Sn) && (Sn = null),
    En !== null && Ki(En) && (En = null),
    Uo.forEach(Fc),
    Bo.forEach(Fc)
}
function go(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    fa || (fa = !0,
    Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, jg)))
}
function Vo(e) {
    function t(o) {
        return go(o, e)
    }
    if (0 < Ti.length) {
        go(Ti[0], e);
        for (var n = 1; n < Ti.length; n++) {
            var r = Ti[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (kn !== null && go(kn, e),
    Sn !== null && go(Sn, e),
    En !== null && go(En, e),
    Uo.forEach(t),
    Bo.forEach(t),
    n = 0; n < dn.length; n++)
        r = dn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < dn.length && (n = dn[0],
    n.blockedOn === null); )
        vp(n),
        n.blockedOn === null && dn.shift()
}
var Mr = Xt.ReactCurrentBatchConfig
  , ds = !0;
function Rg(e, t, n, r) {
    var o = ee
      , i = Mr.transition;
    Mr.transition = null;
    try {
        ee = 1,
        vu(e, t, n, r)
    } finally {
        ee = o,
        Mr.transition = i
    }
}
function Og(e, t, n, r) {
    var o = ee
      , i = Mr.transition;
    Mr.transition = null;
    try {
        ee = 4,
        vu(e, t, n, r)
    } finally {
        ee = o,
        Mr.transition = i
    }
}
function vu(e, t, n, r) {
    if (ds) {
        var o = pa(e, t, n, r);
        if (o === null)
            jl(e, t, r, fs, n),
            Ic(e, r);
        else if (Tg(o, e, t, n, r))
            r.stopPropagation();
        else if (Ic(e, r),
        t & 4 && -1 < Ng.indexOf(e)) {
            for (; o !== null; ) {
                var i = fi(o);
                if (i !== null && hp(i),
                i = pa(e, t, n, r),
                i === null && jl(e, t, r, fs, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            jl(e, t, r, null, n)
    }
}
var fs = null;
function pa(e, t, n, r) {
    if (fs = null,
    e = hu(r),
    e = Wn(e),
    e !== null)
        if (t = ar(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = sp(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return fs = e,
    null
}
function wp(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (wg()) {
        case mu:
            return 1;
        case cp:
            return 4;
        case us:
        case xg:
            return 16;
        case dp:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var vn = null
  , wu = null
  , Yi = null;
function xp() {
    if (Yi)
        return Yi;
    var e, t = wu, n = t.length, r, o = "value" in vn ? vn.value : vn.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++)
        ;
    return Yi = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Gi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function ji() {
    return !0
}
function $c() {
    return !1
}
function Ze(e) {
    function t(n, r, o, i, s) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = s,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(i) : i[l]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ji : $c,
        this.isPropagationStopped = $c,
        this
    }
    return ce(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = ji)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = ji)
        },
        persist: function() {},
        isPersistent: ji
    }),
    t
}
var oo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, xu = Ze(oo), di = ce({}, oo, {
    view: 0,
    detail: 0
}), _g = Ze(di), kl, Sl, vo, Fs = ce({}, di, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ku,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== vo && (vo && e.type === "mousemove" ? (kl = e.screenX - vo.screenX,
        Sl = e.screenY - vo.screenY) : Sl = kl = 0,
        vo = e),
        kl)
    },
    movementY: function(e) {
        return "movementY" in e ? e.movementY : Sl
    }
}), Uc = Ze(Fs), Ag = ce({}, Fs, {
    dataTransfer: 0
}), Mg = Ze(Ag), Lg = ce({}, di, {
    relatedTarget: 0
}), El = Ze(Lg), Dg = ce({}, oo, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Ig = Ze(Dg), Fg = ce({}, oo, {
    clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
}), $g = Ze(Fg), Ug = ce({}, oo, {
    data: 0
}), Bc = Ze(Ug), Bg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Vg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Wg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Hg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Wg[e]) ? !!t[e] : !1
}
function ku() {
    return Hg
}
var Qg = ce({}, di, {
    key: function(e) {
        if (e.key) {
            var t = Bg[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Gi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vg[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ku,
    charCode: function(e) {
        return e.type === "keypress" ? Gi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Gi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Kg = Ze(Qg)
  , Yg = ce({}, Fs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Vc = Ze(Yg)
  , Gg = ce({}, di, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ku
})
  , qg = Ze(Gg)
  , Xg = ce({}, oo, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Jg = Ze(Xg)
  , Zg = ce({}, Fs, {
    deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , ev = Ze(Zg)
  , tv = [9, 13, 27, 32]
  , Su = Ht && "CompositionEvent" in window
  , jo = null;
Ht && "documentMode" in document && (jo = document.documentMode);
var nv = Ht && "TextEvent" in window && !jo
  , kp = Ht && (!Su || jo && 8 < jo && 11 >= jo)
  , Wc = " "
  , Hc = !1;
function Sp(e, t) {
    switch (e) {
    case "keyup":
        return tv.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Ep(e) {
    return e = e.detail,
    typeof e == "object" && "data" in e ? e.data : null
}
var Sr = !1;
function rv(e, t) {
    switch (e) {
    case "compositionend":
        return Ep(t);
    case "keypress":
        return t.which !== 32 ? null : (Hc = !0,
        Wc);
    case "textInput":
        return e = t.data,
        e === Wc && Hc ? null : e;
    default:
        return null
    }
}
function ov(e, t) {
    if (Sr)
        return e === "compositionend" || !Su && Sp(e, t) ? (e = xp(),
        Yi = wu = vn = null,
        Sr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return kp && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var iv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Qc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!iv[e.type] : t === "textarea"
}
function Cp(e, t, n, r) {
    tp(r),
    t = ps(t, "onChange"),
    0 < t.length && (n = new xu("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Ro = null
  , Wo = null;
function sv(e) {
    Mp(e, 0)
}
function $s(e) {
    var t = br(e);
    if (Yf(t))
        return e
}
function lv(e, t) {
    if (e === "change")
        return t
}
var bp = !1;
if (Ht) {
    var Cl;
    if (Ht) {
        var bl = "oninput" in document;
        if (!bl) {
            var Kc = document.createElement("div");
            Kc.setAttribute("oninput", "return;"),
            bl = typeof Kc.oninput == "function"
        }
        Cl = bl
    } else
        Cl = !1;
    bp = Cl && (!document.documentMode || 9 < document.documentMode)
}
function Yc() {
    Ro && (Ro.detachEvent("onpropertychange", Pp),
    Wo = Ro = null)
}
function Pp(e) {
    if (e.propertyName === "value" && $s(Wo)) {
        var t = [];
        Cp(t, Wo, e, hu(e)),
        ip(sv, t)
    }
}
function av(e, t, n) {
    e === "focusin" ? (Yc(),
    Ro = t,
    Wo = n,
    Ro.attachEvent("onpropertychange", Pp)) : e === "focusout" && Yc()
}
function uv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return $s(Wo)
}
function cv(e, t) {
    if (e === "click")
        return $s(t)
}
function dv(e, t) {
    if (e === "input" || e === "change")
        return $s(t)
}
function fv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var kt = typeof Object.is == "function" ? Object.is : fv;
function Ho(e, t) {
    if (kt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Gl.call(t, o) || !kt(e[o], t[o]))
            return !1
    }
    return !0
}
function Gc(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function qc(e, t) {
    var n = Gc(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Gc(n)
    }
}
function zp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Np() {
    for (var e = window, t = ss(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = ss(e.document)
    }
    return t
}
function Eu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function pv(e) {
    var t = Np()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && zp(n.ownerDocument.documentElement, n)) {
        if (r !== null && Eu(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart" in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = qc(n, i);
                var s = qc(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var hv = Ht && "documentMode" in document && 11 >= document.documentMode
  , Er = null
  , ha = null
  , Oo = null
  , ma = !1;
function Xc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ma || Er == null || Er !== ss(r) || (r = Er,
    "selectionStart" in r && Eu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Oo && Ho(Oo, r) || (Oo = r,
    r = ps(ha, "onSelect"),
    0 < r.length && (t = new xu("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Er)))
}
function Ri(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Cr = {
    animationend: Ri("Animation", "AnimationEnd"),
    animationiteration: Ri("Animation", "AnimationIteration"),
    animationstart: Ri("Animation", "AnimationStart"),
    transitionend: Ri("Transition", "TransitionEnd")
}
  , Pl = {}
  , Tp = {};
Ht && (Tp = document.createElement("div").style,
"AnimationEvent" in window || (delete Cr.animationend.animation,
delete Cr.animationiteration.animation,
delete Cr.animationstart.animation),
"TransitionEvent" in window || delete Cr.transitionend.transition);
function Us(e) {
    if (Pl[e])
        return Pl[e];
    if (!Cr[e])
        return e;
    var t = Cr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Tp)
            return Pl[e] = t[n];
    return e
}
var jp = Us("animationend")
  , Rp = Us("animationiteration")
  , Op = Us("animationstart")
  , _p = Us("transitionend")
  , Ap = new Map
  , Jc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ln(e, t) {
    Ap.set(e, t),
    lr(t, [e])
}
for (var zl = 0; zl < Jc.length; zl++) {
    var Nl = Jc[zl]
      , mv = Nl.toLowerCase()
      , yv = Nl[0].toUpperCase() + Nl.slice(1);
    Ln(mv, "on" + yv)
}
Ln(jp, "onAnimationEnd");
Ln(Rp, "onAnimationIteration");
Ln(Op, "onAnimationStart");
Ln("dblclick", "onDoubleClick");
Ln("focusin", "onFocus");
Ln("focusout", "onBlur");
Ln(_p, "onTransitionEnd");
Yr("onMouseEnter", ["mouseout", "mouseover"]);
Yr("onMouseLeave", ["mouseout", "mouseover"]);
Yr("onPointerEnter", ["pointerout", "pointerover"]);
Yr("onPointerLeave", ["pointerout", "pointerover"]);
lr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
lr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
lr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
lr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
lr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
lr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var zo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , gv = new Set("cancel close invalid load scroll toggle".split(" ").concat(zo));
function Zc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    mg(r, t, void 0, e),
    e.currentTarget = null
}
function Mp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    Zc(o, l, u),
                    i = a
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    Zc(o, l, u),
                    i = a
                }
        }
    }
    if (as)
        throw e = ca,
        as = !1,
        ca = null,
        e
}
function oe(e, t) {
    var n = t[xa];
    n === void 0 && (n = t[xa] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Lp(t, e, 2, !1),
    n.add(r))
}
function Tl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Lp(n, e, r, t)
}
var Oi = "_reactListening" + Math.random().toString(36).slice(2);
function Qo(e) {
    if (!e[Oi]) {
        e[Oi] = !0,
        Vf.forEach(function(n) {
            n !== "selectionchange" && (gv.has(n) || Tl(n, !1, e),
            Tl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Oi] || (t[Oi] = !0,
        Tl("selectionchange", !1, t))
    }
}
function Lp(e, t, n, r) {
    switch (wp(t)) {
    case 1:
        var o = Rg;
        break;
    case 4:
        o = Og;
        break;
    default:
        o = vu
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !ua || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function jl(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === o || l.nodeType === 8 && l.parentNode === o)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === o || a.nodeType === 8 && a.parentNode === o))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = Wn(l),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        r = i = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    ip(function() {
        var u = i
          , c = hu(n)
          , f = [];
        e: {
            var h = Ap.get(e);
            if (h !== void 0) {
                var d = xu
                  , k = e;
                switch (e) {
                case "keypress":
                    if (Gi(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    d = Kg;
                    break;
                case "focusin":
                    k = "focus",
                    d = El;
                    break;
                case "focusout":
                    k = "blur",
                    d = El;
                    break;
                case "beforeblur":
                case "afterblur":
                    d = El;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    d = Uc;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    d = Mg;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    d = qg;
                    break;
                case jp:
                case Rp:
                case Op:
                    d = Ig;
                    break;
                case _p:
                    d = Jg;
                    break;
                case "scroll":
                    d = _g;
                    break;
                case "wheel":
                    d = ev;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    d = $g;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    d = Vc
                }
                var g = (t & 4) !== 0
                  , x = !g && e === "scroll"
                  , m = g ? h !== null ? h + "Capture" : null : h;
                g = [];
                for (var p = u, y; p !== null; ) {
                    y = p;
                    var S = y.stateNode;
                    if (y.tag === 5 && S !== null && (y = S,
                    m !== null && (S = $o(p, m),
                    S != null && g.push(Ko(p, S, y)))),
                    x)
                        break;
                    p = p.return
                }
                0 < g.length && (h = new d(h,k,null,n,c),
                f.push({
                    event: h,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover",
                d = e === "mouseout" || e === "pointerout",
                h && n !== la && (k = n.relatedTarget || n.fromElement) && (Wn(k) || k[Qt]))
                    break e;
                if ((d || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window,
                d ? (k = n.relatedTarget || n.toElement,
                d = u,
                k = k ? Wn(k) : null,
                k !== null && (x = ar(k),
                k !== x || k.tag !== 5 && k.tag !== 6) && (k = null)) : (d = null,
                k = u),
                d !== k)) {
                    if (g = Uc,
                    S = "onMouseLeave",
                    m = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (g = Vc,
                    S = "onPointerLeave",
                    m = "onPointerEnter",
                    p = "pointer"),
                    x = d == null ? h : br(d),
                    y = k == null ? h : br(k),
                    h = new g(S,p + "leave",d,n,c),
                    h.target = x,
                    h.relatedTarget = y,
                    S = null,
                    Wn(c) === u && (g = new g(m,p + "enter",k,n,c),
                    g.target = y,
                    g.relatedTarget = x,
                    S = g),
                    x = S,
                    d && k)
                        t: {
                            for (g = d,
                            m = k,
                            p = 0,
                            y = g; y; y = vr(y))
                                p++;
                            for (y = 0,
                            S = m; S; S = vr(S))
                                y++;
                            for (; 0 < p - y; )
                                g = vr(g),
                                p--;
                            for (; 0 < y - p; )
                                m = vr(m),
                                y--;
                            for (; p--; ) {
                                if (g === m || m !== null && g === m.alternate)
                                    break t;
                                g = vr(g),
                                m = vr(m)
                            }
                            g = null
                        }
                    else
                        g = null;
                    d !== null && ed(f, h, d, g, !1),
                    k !== null && x !== null && ed(f, x, k, g, !0)
                }
            }
            e: {
                if (h = u ? br(u) : window,
                d = h.nodeName && h.nodeName.toLowerCase(),
                d === "select" || d === "input" && h.type === "file")
                    var E = lv;
                else if (Qc(h))
                    if (bp)
                        E = dv;
                    else {
                        E = uv;
                        var C = av
                    }
                else
                    (d = h.nodeName) && d.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (E = cv);
                if (E && (E = E(e, u))) {
                    Cp(f, E, n, c);
                    break e
                }
                C && C(e, h, u),
                e === "focusout" && (C = h._wrapperState) && C.controlled && h.type === "number" && na(h, "number", h.value)
            }
            switch (C = u ? br(u) : window,
            e) {
            case "focusin":
                (Qc(C) || C.contentEditable === "true") && (Er = C,
                ha = u,
                Oo = null);
                break;
            case "focusout":
                Oo = ha = Er = null;
                break;
            case "mousedown":
                ma = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                ma = !1,
                Xc(f, n, c);
                break;
            case "selectionchange":
                if (hv)
                    break;
            case "keydown":
            case "keyup":
                Xc(f, n, c)
            }
            var b;
            if (Su)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                    }
                    T = void 0
                }
            else
                Sr ? Sp(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
            T && (kp && n.locale !== "ko" && (Sr || T !== "onCompositionStart" ? T === "onCompositionEnd" && Sr && (b = xp()) : (vn = c,
            wu = "value" in vn ? vn.value : vn.textContent,
            Sr = !0)),
            C = ps(u, T),
            0 < C.length && (T = new Bc(T,e,null,n,c),
            f.push({
                event: T,
                listeners: C
            }),
            b ? T.data = b : (b = Ep(n),
            b !== null && (T.data = b)))),
            (b = nv ? rv(e, n) : ov(e, n)) && (u = ps(u, "onBeforeInput"),
            0 < u.length && (c = new Bc("onBeforeInput","beforeinput",null,n,c),
            f.push({
                event: c,
                listeners: u
            }),
            c.data = b))
        }
        Mp(f, t)
    })
}
function Ko(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ps(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = $o(e, n),
        i != null && r.unshift(Ko(e, i, o)),
        i = $o(e, t),
        i != null && r.push(Ko(e, i, o))),
        e = e.return
    }
    return r
}
function vr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function ed(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        o ? (a = $o(n, i),
        a != null && s.unshift(Ko(n, a, l))) : o || (a = $o(n, i),
        a != null && s.push(Ko(n, a, l)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var vv = /\r\n?/g
  , wv = /\u0000|\uFFFD/g;
function td(e) {
    return (typeof e == "string" ? e : "" + e).replace(vv, `
`).replace(wv, "")
}
function _i(e, t, n) {
    if (t = td(t),
    td(e) !== t && n)
        throw Error(j(425))
}
function hs() {}
var ya = null
  , ga = null;
function va(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var wa = typeof setTimeout == "function" ? setTimeout : void 0
  , xv = typeof clearTimeout == "function" ? clearTimeout : void 0
  , nd = typeof Promise == "function" ? Promise : void 0
  , kv = typeof queueMicrotask == "function" ? queueMicrotask : typeof nd < "u" ? function(e) {
    return nd.resolve(null).then(e).catch(Sv)
}
: wa;
function Sv(e) {
    setTimeout(function() {
        throw e
    })
}
function Rl(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    Vo(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Vo(t)
}
function Cn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function rd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var io = Math.random().toString(36).slice(2)
  , jt = "__reactFiber$" + io
  , Yo = "__reactProps$" + io
  , Qt = "__reactContainer$" + io
  , xa = "__reactEvents$" + io
  , Ev = "__reactListeners$" + io
  , Cv = "__reactHandles$" + io;
function Wn(e) {
    var t = e[jt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Qt] || n[jt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = rd(e); e !== null; ) {
                    if (n = e[jt])
                        return n;
                    e = rd(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function fi(e) {
    return e = e[jt] || e[Qt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function br(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(j(33))
}
function Bs(e) {
    return e[Yo] || null
}
var ka = []
  , Pr = -1;
function Dn(e) {
    return {
        current: e
    }
}
function ie(e) {
    0 > Pr || (e.current = ka[Pr],
    ka[Pr] = null,
    Pr--)
}
function ne(e, t) {
    Pr++,
    ka[Pr] = e.current,
    e.current = t
}
var Rn = {}
  , Oe = Dn(Rn)
  , Be = Dn(!1)
  , tr = Rn;
function Gr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Rn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function Ve(e) {
    return e = e.childContextTypes,
    e != null
}
function ms() {
    ie(Be),
    ie(Oe)
}
function od(e, t, n) {
    if (Oe.current !== Rn)
        throw Error(j(168));
    ne(Oe, t),
    ne(Be, n)
}
function Dp(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(j(108, ag(e) || "Unknown", o));
    return ce({}, n, r)
}
function ys(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Rn,
    tr = Oe.current,
    ne(Oe, e),
    ne(Be, Be.current),
    !0
}
function id(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(j(169));
    n ? (e = Dp(e, t, tr),
    r.__reactInternalMemoizedMergedChildContext = e,
    ie(Be),
    ie(Oe),
    ne(Oe, e)) : ie(Be),
    ne(Be, n)
}
var $t = null
  , Vs = !1
  , Ol = !1;
function Ip(e) {
    $t === null ? $t = [e] : $t.push(e)
}
function bv(e) {
    Vs = !0,
    Ip(e)
}
function In() {
    if (!Ol && $t !== null) {
        Ol = !0;
        var e = 0
          , t = ee;
        try {
            var n = $t;
            for (ee = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            $t = null,
            Vs = !1
        } catch (o) {
            throw $t !== null && ($t = $t.slice(e + 1)),
            up(mu, In),
            o
        } finally {
            ee = t,
            Ol = !1
        }
    }
    return null
}
var zr = []
  , Nr = 0
  , gs = null
  , vs = 0
  , nt = []
  , rt = 0
  , nr = null
  , Bt = 1
  , Vt = "";
function Bn(e, t) {
    zr[Nr++] = vs,
    zr[Nr++] = gs,
    gs = e,
    vs = t
}
function Fp(e, t, n) {
    nt[rt++] = Bt,
    nt[rt++] = Vt,
    nt[rt++] = nr,
    nr = e;
    var r = Bt;
    e = Vt;
    var o = 32 - wt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - wt(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32),
        r >>= s,
        o -= s,
        Bt = 1 << 32 - wt(t) + o | n << o | r,
        Vt = i + e
    } else
        Bt = 1 << i | n << o | r,
        Vt = e
}
function Cu(e) {
    e.return !== null && (Bn(e, 1),
    Fp(e, 1, 0))
}
function bu(e) {
    for (; e === gs; )
        gs = zr[--Nr],
        zr[Nr] = null,
        vs = zr[--Nr],
        zr[Nr] = null;
    for (; e === nr; )
        nr = nt[--rt],
        nt[rt] = null,
        Vt = nt[--rt],
        nt[rt] = null,
        Bt = nt[--rt],
        nt[rt] = null
}
var Ge = null
  , Ye = null
  , le = !1
  , vt = null;
function $p(e, t) {
    var n = ot(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function sd(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ge = e,
        Ye = Cn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ge = e,
        Ye = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = nr !== null ? {
            id: Bt,
            overflow: Vt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = ot(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ge = e,
        Ye = null,
        !0) : !1;
    default:
        return !1
    }
}
function Sa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ea(e) {
    if (le) {
        var t = Ye;
        if (t) {
            var n = t;
            if (!sd(e, t)) {
                if (Sa(e))
                    throw Error(j(418));
                t = Cn(n.nextSibling);
                var r = Ge;
                t && sd(e, t) ? $p(r, n) : (e.flags = e.flags & -4097 | 2,
                le = !1,
                Ge = e)
            }
        } else {
            if (Sa(e))
                throw Error(j(418));
            e.flags = e.flags & -4097 | 2,
            le = !1,
            Ge = e
        }
    }
}
function ld(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ge = e
}
function Ai(e) {
    if (e !== Ge)
        return !1;
    if (!le)
        return ld(e),
        le = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !va(e.type, e.memoizedProps)),
    t && (t = Ye)) {
        if (Sa(e))
            throw Up(),
            Error(j(418));
        for (; t; )
            $p(e, t),
            t = Cn(t.nextSibling)
    }
    if (ld(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(j(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ye = Cn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ye = null
        }
    } else
        Ye = Ge ? Cn(e.stateNode.nextSibling) : null;
    return !0
}
function Up() {
    for (var e = Ye; e; )
        e = Cn(e.nextSibling)
}
function qr() {
    Ye = Ge = null,
    le = !1
}
function Pu(e) {
    vt === null ? vt = [e] : vt.push(e)
}
var Pv = Xt.ReactCurrentBatchConfig;
function wo(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(j(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(j(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var l = o.refs;
                s === null ? delete l[i] : l[i] = s
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(j(284));
        if (!n._owner)
            throw Error(j(290, e))
    }
    return e
}
function Mi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function ad(e) {
    var t = e._init;
    return t(e._payload)
}
function Bp(e) {
    function t(m, p) {
        if (e) {
            var y = m.deletions;
            y === null ? (m.deletions = [p],
            m.flags |= 16) : y.push(p)
        }
    }
    function n(m, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(m, p),
            p = p.sibling;
        return null
    }
    function r(m, p) {
        for (m = new Map; p !== null; )
            p.key !== null ? m.set(p.key, p) : m.set(p.index, p),
            p = p.sibling;
        return m
    }
    function o(m, p) {
        return m = Nn(m, p),
        m.index = 0,
        m.sibling = null,
        m
    }
    function i(m, p, y) {
        return m.index = y,
        e ? (y = m.alternate,
        y !== null ? (y = y.index,
        y < p ? (m.flags |= 2,
        p) : y) : (m.flags |= 2,
        p)) : (m.flags |= 1048576,
        p)
    }
    function s(m) {
        return e && m.alternate === null && (m.flags |= 2),
        m
    }
    function l(m, p, y, S) {
        return p === null || p.tag !== 6 ? (p = Fl(y, m.mode, S),
        p.return = m,
        p) : (p = o(p, y),
        p.return = m,
        p)
    }
    function a(m, p, y, S) {
        var E = y.type;
        return E === kr ? c(m, p, y.props.children, S, y.key) : p !== null && (p.elementType === E || typeof E == "object" && E !== null && E.$$typeof === un && ad(E) === p.type) ? (S = o(p, y.props),
        S.ref = wo(m, p, y),
        S.return = m,
        S) : (S = ns(y.type, y.key, y.props, null, m.mode, S),
        S.ref = wo(m, p, y),
        S.return = m,
        S)
    }
    function u(m, p, y, S) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== y.containerInfo || p.stateNode.implementation !== y.implementation ? (p = $l(y, m.mode, S),
        p.return = m,
        p) : (p = o(p, y.children || []),
        p.return = m,
        p)
    }
    function c(m, p, y, S, E) {
        return p === null || p.tag !== 7 ? (p = er(y, m.mode, S, E),
        p.return = m,
        p) : (p = o(p, y),
        p.return = m,
        p)
    }
    function f(m, p, y) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = Fl("" + p, m.mode, y),
            p.return = m,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Ci:
                return y = ns(p.type, p.key, p.props, null, m.mode, y),
                y.ref = wo(m, null, p),
                y.return = m,
                y;
            case xr:
                return p = $l(p, m.mode, y),
                p.return = m,
                p;
            case un:
                var S = p._init;
                return f(m, S(p._payload), y)
            }
            if (bo(p) || ho(p))
                return p = er(p, m.mode, y, null),
                p.return = m,
                p;
            Mi(m, p)
        }
        return null
    }
    function h(m, p, y, S) {
        var E = p !== null ? p.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return E !== null ? null : l(m, p, "" + y, S);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Ci:
                return y.key === E ? a(m, p, y, S) : null;
            case xr:
                return y.key === E ? u(m, p, y, S) : null;
            case un:
                return E = y._init,
                h(m, p, E(y._payload), S)
            }
            if (bo(y) || ho(y))
                return E !== null ? null : c(m, p, y, S, null);
            Mi(m, y)
        }
        return null
    }
    function d(m, p, y, S, E) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return m = m.get(y) || null,
            l(p, m, "" + S, E);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case Ci:
                return m = m.get(S.key === null ? y : S.key) || null,
                a(p, m, S, E);
            case xr:
                return m = m.get(S.key === null ? y : S.key) || null,
                u(p, m, S, E);
            case un:
                var C = S._init;
                return d(m, p, y, C(S._payload), E)
            }
            if (bo(S) || ho(S))
                return m = m.get(y) || null,
                c(p, m, S, E, null);
            Mi(p, S)
        }
        return null
    }
    function k(m, p, y, S) {
        for (var E = null, C = null, b = p, T = p = 0, _ = null; b !== null && T < y.length; T++) {
            b.index > T ? (_ = b,
            b = null) : _ = b.sibling;
            var O = h(m, b, y[T], S);
            if (O === null) {
                b === null && (b = _);
                break
            }
            e && b && O.alternate === null && t(m, b),
            p = i(O, p, T),
            C === null ? E = O : C.sibling = O,
            C = O,
            b = _
        }
        if (T === y.length)
            return n(m, b),
            le && Bn(m, T),
            E;
        if (b === null) {
            for (; T < y.length; T++)
                b = f(m, y[T], S),
                b !== null && (p = i(b, p, T),
                C === null ? E = b : C.sibling = b,
                C = b);
            return le && Bn(m, T),
            E
        }
        for (b = r(m, b); T < y.length; T++)
            _ = d(b, m, T, y[T], S),
            _ !== null && (e && _.alternate !== null && b.delete(_.key === null ? T : _.key),
            p = i(_, p, T),
            C === null ? E = _ : C.sibling = _,
            C = _);
        return e && b.forEach(function(F) {
            return t(m, F)
        }),
        le && Bn(m, T),
        E
    }
    function g(m, p, y, S) {
        var E = ho(y);
        if (typeof E != "function")
            throw Error(j(150));
        if (y = E.call(y),
        y == null)
            throw Error(j(151));
        for (var C = E = null, b = p, T = p = 0, _ = null, O = y.next(); b !== null && !O.done; T++,
        O = y.next()) {
            b.index > T ? (_ = b,
            b = null) : _ = b.sibling;
            var F = h(m, b, O.value, S);
            if (F === null) {
                b === null && (b = _);
                break
            }
            e && b && F.alternate === null && t(m, b),
            p = i(F, p, T),
            C === null ? E = F : C.sibling = F,
            C = F,
            b = _
        }
        if (O.done)
            return n(m, b),
            le && Bn(m, T),
            E;
        if (b === null) {
            for (; !O.done; T++,
            O = y.next())
                O = f(m, O.value, S),
                O !== null && (p = i(O, p, T),
                C === null ? E = O : C.sibling = O,
                C = O);
            return le && Bn(m, T),
            E
        }
        for (b = r(m, b); !O.done; T++,
        O = y.next())
            O = d(b, m, T, O.value, S),
            O !== null && (e && O.alternate !== null && b.delete(O.key === null ? T : O.key),
            p = i(O, p, T),
            C === null ? E = O : C.sibling = O,
            C = O);
        return e && b.forEach(function(D) {
            return t(m, D)
        }),
        le && Bn(m, T),
        E
    }
    function x(m, p, y, S) {
        if (typeof y == "object" && y !== null && y.type === kr && y.key === null && (y = y.props.children),
        typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Ci:
                e: {
                    for (var E = y.key, C = p; C !== null; ) {
                        if (C.key === E) {
                            if (E = y.type,
                            E === kr) {
                                if (C.tag === 7) {
                                    n(m, C.sibling),
                                    p = o(C, y.props.children),
                                    p.return = m,
                                    m = p;
                                    break e
                                }
                            } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === un && ad(E) === C.type) {
                                n(m, C.sibling),
                                p = o(C, y.props),
                                p.ref = wo(m, C, y),
                                p.return = m,
                                m = p;
                                break e
                            }
                            n(m, C);
                            break
                        } else
                            t(m, C);
                        C = C.sibling
                    }
                    y.type === kr ? (p = er(y.props.children, m.mode, S, y.key),
                    p.return = m,
                    m = p) : (S = ns(y.type, y.key, y.props, null, m.mode, S),
                    S.ref = wo(m, p, y),
                    S.return = m,
                    m = S)
                }
                return s(m);
            case xr:
                e: {
                    for (C = y.key; p !== null; ) {
                        if (p.key === C)
                            if (p.tag === 4 && p.stateNode.containerInfo === y.containerInfo && p.stateNode.implementation === y.implementation) {
                                n(m, p.sibling),
                                p = o(p, y.children || []),
                                p.return = m,
                                m = p;
                                break e
                            } else {
                                n(m, p);
                                break
                            }
                        else
                            t(m, p);
                        p = p.sibling
                    }
                    p = $l(y, m.mode, S),
                    p.return = m,
                    m = p
                }
                return s(m);
            case un:
                return C = y._init,
                x(m, p, C(y._payload), S)
            }
            if (bo(y))
                return k(m, p, y, S);
            if (ho(y))
                return g(m, p, y, S);
            Mi(m, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y,
        p !== null && p.tag === 6 ? (n(m, p.sibling),
        p = o(p, y),
        p.return = m,
        m = p) : (n(m, p),
        p = Fl(y, m.mode, S),
        p.return = m,
        m = p),
        s(m)) : n(m, p)
    }
    return x
}
var Xr = Bp(!0)
  , Vp = Bp(!1)
  , ws = Dn(null)
  , xs = null
  , Tr = null
  , zu = null;
function Nu() {
    zu = Tr = xs = null
}
function Tu(e) {
    var t = ws.current;
    ie(ws),
    e._currentValue = t
}
function Ca(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Lr(e, t) {
    xs = e,
    zu = Tr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Ue = !0),
    e.firstContext = null)
}
function st(e) {
    var t = e._currentValue;
    if (zu !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Tr === null) {
            if (xs === null)
                throw Error(j(308));
            Tr = e,
            xs.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Tr = Tr.next = e;
    return t
}
var Hn = null;
function ju(e) {
    Hn === null ? Hn = [e] : Hn.push(e)
}
function Wp(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    ju(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Kt(e, r)
}
function Kt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var cn = !1;
function Ru(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Hp(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Wt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function bn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    X & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Kt(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    ju(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Kt(e, n)
}
function qi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        yu(e, n)
    }
}
function ud(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ks(e, t, n, r) {
    var o = e.updateQueue;
    cn = !1;
    var i = o.firstBaseUpdate
      , s = o.lastBaseUpdate
      , l = o.shared.pending;
    if (l !== null) {
        o.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        s === null ? i = u : s.next = u,
        s = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        l = c.lastBaseUpdate,
        l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u,
        c.lastBaseUpdate = a))
    }
    if (i !== null) {
        var f = o.baseState;
        s = 0,
        c = u = a = null,
        l = i;
        do {
            var h = l.lane
              , d = l.eventTime;
            if ((r & h) === h) {
                c !== null && (c = c.next = {
                    eventTime: d,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var k = e
                      , g = l;
                    switch (h = t,
                    d = n,
                    g.tag) {
                    case 1:
                        if (k = g.payload,
                        typeof k == "function") {
                            f = k.call(d, f, h);
                            break e
                        }
                        f = k;
                        break e;
                    case 3:
                        k.flags = k.flags & -65537 | 128;
                    case 0:
                        if (k = g.payload,
                        h = typeof k == "function" ? k.call(d, f, h) : k,
                        h == null)
                            break e;
                        f = ce({}, f, h);
                        break e;
                    case 2:
                        cn = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                h = o.effects,
                h === null ? o.effects = [l] : h.push(l))
            } else
                d = {
                    eventTime: d,
                    lane: h,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                c === null ? (u = c = d,
                a = f) : c = c.next = d,
                s |= h;
            if (l = l.next,
            l === null) {
                if (l = o.shared.pending,
                l === null)
                    break;
                h = l,
                l = h.next,
                h.next = null,
                o.lastBaseUpdate = h,
                o.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = f),
        o.baseState = a,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = c,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                s |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        or |= s,
        e.lanes = s,
        e.memoizedState = f
    }
}
function cd(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(j(191, o));
                o.call(r)
            }
        }
}
var pi = {}
  , _t = Dn(pi)
  , Go = Dn(pi)
  , qo = Dn(pi);
function Qn(e) {
    if (e === pi)
        throw Error(j(174));
    return e
}
function Ou(e, t) {
    switch (ne(qo, t),
    ne(Go, e),
    ne(_t, pi),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : oa(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = oa(t, e)
    }
    ie(_t),
    ne(_t, t)
}
function Jr() {
    ie(_t),
    ie(Go),
    ie(qo)
}
function Qp(e) {
    Qn(qo.current);
    var t = Qn(_t.current)
      , n = oa(t, e.type);
    t !== n && (ne(Go, e),
    ne(_t, n))
}
function _u(e) {
    Go.current === e && (ie(_t),
    ie(Go))
}
var ae = Dn(0);
function Ss(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var _l = [];
function Au() {
    for (var e = 0; e < _l.length; e++)
        _l[e]._workInProgressVersionPrimary = null;
    _l.length = 0
}
var Xi = Xt.ReactCurrentDispatcher
  , Al = Xt.ReactCurrentBatchConfig
  , rr = 0
  , ue = null
  , ge = null
  , xe = null
  , Es = !1
  , _o = !1
  , Xo = 0
  , zv = 0;
function Ne() {
    throw Error(j(321))
}
function Mu(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!kt(e[n], t[n]))
            return !1;
    return !0
}
function Lu(e, t, n, r, o, i) {
    if (rr = i,
    ue = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Xi.current = e === null || e.memoizedState === null ? Rv : Ov,
    e = n(r, o),
    _o) {
        i = 0;
        do {
            if (_o = !1,
            Xo = 0,
            25 <= i)
                throw Error(j(301));
            i += 1,
            xe = ge = null,
            t.updateQueue = null,
            Xi.current = _v,
            e = n(r, o)
        } while (_o)
    }
    if (Xi.current = Cs,
    t = ge !== null && ge.next !== null,
    rr = 0,
    xe = ge = ue = null,
    Es = !1,
    t)
        throw Error(j(300));
    return e
}
function Du() {
    var e = Xo !== 0;
    return Xo = 0,
    e
}
function Pt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return xe === null ? ue.memoizedState = xe = e : xe = xe.next = e,
    xe
}
function lt() {
    if (ge === null) {
        var e = ue.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ge.next;
    var t = xe === null ? ue.memoizedState : xe.next;
    if (t !== null)
        xe = t,
        ge = e;
    else {
        if (e === null)
            throw Error(j(310));
        ge = e,
        e = {
            memoizedState: ge.memoizedState,
            baseState: ge.baseState,
            baseQueue: ge.baseQueue,
            queue: ge.queue,
            next: null
        },
        xe === null ? ue.memoizedState = xe = e : xe = xe.next = e
    }
    return xe
}
function Jo(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Ml(e) {
    var t = lt()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = ge
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next,
            i.next = s
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var l = s = null
          , a = null
          , u = i;
        do {
            var c = u.lane;
            if ((rr & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f,
                s = r) : a = a.next = f,
                ue.lanes |= c,
                or |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? s = r : a.next = l,
        kt(r, t.memoizedState) || (Ue = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            ue.lanes |= i,
            or |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Ll(e) {
    var t = lt()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do
            i = e(i, s.action),
            s = s.next;
        while (s !== o);
        kt(i, t.memoizedState) || (Ue = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Kp() {}
function Yp(e, t) {
    var n = ue
      , r = lt()
      , o = t()
      , i = !kt(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    Ue = !0),
    r = r.queue,
    Iu(Xp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || xe !== null && xe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Zo(9, qp.bind(null, n, r, o, t), void 0, null),
        ke === null)
            throw Error(j(349));
        rr & 30 || Gp(n, t, o)
    }
    return o
}
function Gp(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ue.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ue.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function qp(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Jp(t) && Zp(e)
}
function Xp(e, t, n) {
    return n(function() {
        Jp(t) && Zp(e)
    })
}
function Jp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !kt(e, n)
    } catch {
        return !0
    }
}
function Zp(e) {
    var t = Kt(e, 1);
    t !== null && xt(t, e, 1, -1)
}
function dd(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Jo,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = jv.bind(null, ue, e),
    [t.memoizedState, e]
}
function Zo(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ue.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ue.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function eh() {
    return lt().memoizedState
}
function Ji(e, t, n, r) {
    var o = Pt();
    ue.flags |= e,
    o.memoizedState = Zo(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ws(e, t, n, r) {
    var o = lt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ge !== null) {
        var s = ge.memoizedState;
        if (i = s.destroy,
        r !== null && Mu(r, s.deps)) {
            o.memoizedState = Zo(t, n, i, r);
            return
        }
    }
    ue.flags |= e,
    o.memoizedState = Zo(1 | t, n, i, r)
}
function fd(e, t) {
    return Ji(8390656, 8, e, t)
}
function Iu(e, t) {
    return Ws(2048, 8, e, t)
}
function th(e, t) {
    return Ws(4, 2, e, t)
}
function nh(e, t) {
    return Ws(4, 4, e, t)
}
function rh(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function oh(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ws(4, 4, rh.bind(null, t, e), n)
}
function Fu() {}
function ih(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Mu(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function sh(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Mu(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function lh(e, t, n) {
    return rr & 21 ? (kt(n, t) || (n = fp(),
    ue.lanes |= n,
    or |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Ue = !0),
    e.memoizedState = n)
}
function Nv(e, t) {
    var n = ee;
    ee = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Al.transition;
    Al.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ee = n,
        Al.transition = r
    }
}
function ah() {
    return lt().memoizedState
}
function Tv(e, t, n) {
    var r = zn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    uh(e))
        ch(t, n);
    else if (n = Wp(e, t, n, r),
    n !== null) {
        var o = Le();
        xt(n, e, r, o),
        dh(n, t, r)
    }
}
function jv(e, t, n) {
    var r = zn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (uh(e))
        ch(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var s = t.lastRenderedState
                  , l = i(s, n);
                if (o.hasEagerState = !0,
                o.eagerState = l,
                kt(l, s)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o,
                    ju(t)) : (o.next = a.next,
                    a.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Wp(e, t, o, r),
        n !== null && (o = Le(),
        xt(n, e, r, o),
        dh(n, t, r))
    }
}
function uh(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue
}
function ch(e, t) {
    _o = Es = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function dh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        yu(e, n)
    }
}
var Cs = {
    readContext: st,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1
}
  , Rv = {
    readContext: st,
    useCallback: function(e, t) {
        return Pt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: st,
    useEffect: fd,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Ji(4194308, 4, rh.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Ji(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Ji(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Pt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Pt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Tv.bind(null, ue, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Pt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: dd,
    useDebugValue: Fu,
    useDeferredValue: function(e) {
        return Pt().memoizedState = e
    },
    useTransition: function() {
        var e = dd(!1)
          , t = e[0];
        return e = Nv.bind(null, e[1]),
        Pt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ue
          , o = Pt();
        if (le) {
            if (n === void 0)
                throw Error(j(407));
            n = n()
        } else {
            if (n = t(),
            ke === null)
                throw Error(j(349));
            rr & 30 || Gp(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        fd(Xp.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        Zo(9, qp.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Pt()
          , t = ke.identifierPrefix;
        if (le) {
            var n = Vt
              , r = Bt;
            n = (r & ~(1 << 32 - wt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Xo++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = zv++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Ov = {
    readContext: st,
    useCallback: ih,
    useContext: st,
    useEffect: Iu,
    useImperativeHandle: oh,
    useInsertionEffect: th,
    useLayoutEffect: nh,
    useMemo: sh,
    useReducer: Ml,
    useRef: eh,
    useState: function() {
        return Ml(Jo)
    },
    useDebugValue: Fu,
    useDeferredValue: function(e) {
        var t = lt();
        return lh(t, ge.memoizedState, e)
    },
    useTransition: function() {
        var e = Ml(Jo)[0]
          , t = lt().memoizedState;
        return [e, t]
    },
    useMutableSource: Kp,
    useSyncExternalStore: Yp,
    useId: ah,
    unstable_isNewReconciler: !1
}
  , _v = {
    readContext: st,
    useCallback: ih,
    useContext: st,
    useEffect: Iu,
    useImperativeHandle: oh,
    useInsertionEffect: th,
    useLayoutEffect: nh,
    useMemo: sh,
    useReducer: Ll,
    useRef: eh,
    useState: function() {
        return Ll(Jo)
    },
    useDebugValue: Fu,
    useDeferredValue: function(e) {
        var t = lt();
        return ge === null ? t.memoizedState = e : lh(t, ge.memoizedState, e)
    },
    useTransition: function() {
        var e = Ll(Jo)[0]
          , t = lt().memoizedState;
        return [e, t]
    },
    useMutableSource: Kp,
    useSyncExternalStore: Yp,
    useId: ah,
    unstable_isNewReconciler: !1
};
function pt(e, t) {
    if (e && e.defaultProps) {
        t = ce({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function ba(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ce({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Hs = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? ar(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Le()
          , o = zn(e)
          , i = Wt(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = bn(e, i, o),
        t !== null && (xt(t, e, o, r),
        qi(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Le()
          , o = zn(e)
          , i = Wt(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = bn(e, i, o),
        t !== null && (xt(t, e, o, r),
        qi(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Le()
          , r = zn(e)
          , o = Wt(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = bn(e, o, r),
        t !== null && (xt(t, e, r, n),
        qi(t, e, r))
    }
};
function pd(e, t, n, r, o, i, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Ho(n, r) || !Ho(o, i) : !0
}
function fh(e, t, n) {
    var r = !1
      , o = Rn
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = st(i) : (o = Ve(t) ? tr : Oe.current,
    r = t.contextTypes,
    i = (r = r != null) ? Gr(e, o) : Rn),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Hs,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function hd(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Hs.enqueueReplaceState(t, t.state, null)
}
function Pa(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    Ru(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = st(i) : (i = Ve(t) ? tr : Oe.current,
    o.context = Gr(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (ba(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && Hs.enqueueReplaceState(o, o.state, null),
    ks(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function Zr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += lg(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Dl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function za(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Av = typeof WeakMap == "function" ? WeakMap : Map;
function ph(e, t, n) {
    n = Wt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Ps || (Ps = !0,
        Da = r),
        za(e, t)
    }
    ,
    n
}
function hh(e, t, n) {
    n = Wt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            za(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        za(e, t),
        typeof r != "function" && (Pn === null ? Pn = new Set([this]) : Pn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function md(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Av;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = Yv.bind(null, e, t, n),
    t.then(e, e))
}
function yd(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function gd(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Wt(-1, 1),
    t.tag = 2,
    bn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Mv = Xt.ReactCurrentOwner
  , Ue = !1;
function Ae(e, t, n, r) {
    t.child = e === null ? Vp(t, null, n, r) : Xr(t, e.child, n, r)
}
function vd(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return Lr(t, o),
    r = Lu(e, t, n, r, i, o),
    n = Du(),
    e !== null && !Ue ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Yt(e, t, o)) : (le && n && Cu(t),
    t.flags |= 1,
    Ae(e, t, r, o),
    t.child)
}
function wd(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Ku(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        mh(e, t, i, r, o)) : (e = ns(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Ho,
        n(s, r) && e.ref === t.ref)
            return Yt(e, t, o)
    }
    return t.flags |= 1,
    e = Nn(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function mh(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Ho(i, r) && e.ref === t.ref)
            if (Ue = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Ue = !0);
            else
                return t.lanes = e.lanes,
                Yt(e, t, o)
    }
    return Na(e, t, n, r, o)
}
function yh(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ne(Rr, Qe),
            Qe |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ne(Rr, Qe),
                Qe |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            ne(Rr, Qe),
            Qe |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        ne(Rr, Qe),
        Qe |= r;
    return Ae(e, t, o, n),
    t.child
}
function gh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Na(e, t, n, r, o) {
    var i = Ve(n) ? tr : Oe.current;
    return i = Gr(t, i),
    Lr(t, o),
    n = Lu(e, t, n, r, i, o),
    r = Du(),
    e !== null && !Ue ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Yt(e, t, o)) : (le && r && Cu(t),
    t.flags |= 1,
    Ae(e, t, n, o),
    t.child)
}
function xd(e, t, n, r, o) {
    if (Ve(n)) {
        var i = !0;
        ys(t)
    } else
        i = !1;
    if (Lr(t, o),
    t.stateNode === null)
        Zi(e, t),
        fh(t, n, r),
        Pa(t, n, r, o),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , l = t.memoizedProps;
        s.props = l;
        var a = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = st(u) : (u = Ve(n) ? tr : Oe.current,
        u = Gr(t, u));
        var c = n.getDerivedStateFromProps
          , f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && hd(t, s, r, u),
        cn = !1;
        var h = t.memoizedState;
        s.state = h,
        ks(t, r, s, o),
        a = t.memoizedState,
        l !== r || h !== a || Be.current || cn ? (typeof c == "function" && (ba(t, n, c, r),
        a = t.memoizedState),
        (l = cn || pd(t, n, l, r, h, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        Hp(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : pt(t.type, l),
        s.props = u,
        f = t.pendingProps,
        h = s.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = st(a) : (a = Ve(n) ? tr : Oe.current,
        a = Gr(t, a));
        var d = n.getDerivedStateFromProps;
        (c = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || h !== a) && hd(t, s, r, a),
        cn = !1,
        h = t.memoizedState,
        s.state = h,
        ks(t, r, s, o);
        var k = t.memoizedState;
        l !== f || h !== k || Be.current || cn ? (typeof d == "function" && (ba(t, n, d, r),
        k = t.memoizedState),
        (u = cn || pd(t, n, u, r, h, k, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, k, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, k, a)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = k),
        s.props = r,
        s.state = k,
        s.context = a,
        r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Ta(e, t, n, r, i, o)
}
function Ta(e, t, n, r, o, i) {
    gh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return o && id(t, n, !1),
        Yt(e, t, i);
    r = t.stateNode,
    Mv.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = Xr(t, e.child, null, i),
    t.child = Xr(t, null, l, i)) : Ae(e, t, l, i),
    t.memoizedState = r.state,
    o && id(t, n, !0),
    t.child
}
function vh(e) {
    var t = e.stateNode;
    t.pendingContext ? od(e, t.pendingContext, t.pendingContext !== t.context) : t.context && od(e, t.context, !1),
    Ou(e, t.containerInfo)
}
function kd(e, t, n, r, o) {
    return qr(),
    Pu(o),
    t.flags |= 256,
    Ae(e, t, n, r),
    t.child
}
var ja = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Ra(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function wh(e, t, n) {
    var r = t.pendingProps, o = ae.current, i = !1, s = (t.flags & 128) !== 0, l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    ne(ae, o & 1),
    e === null)
        return Ea(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = s) : i = Ys(s, r, 0, null),
        e = er(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Ra(n),
        t.memoizedState = ja,
        e) : $u(t, s));
    if (o = e.memoizedState,
    o !== null && (l = o.dehydrated,
    l !== null))
        return Lv(e, t, s, r, l, o, n);
    if (i) {
        i = r.fallback,
        s = t.mode,
        o = e.child,
        l = o.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = Nn(o, a),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        l !== null ? i = Nn(l, i) : (i = er(i, s, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        s = e.child.memoizedState,
        s = s === null ? Ra(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        i.memoizedState = s,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = ja,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = Nn(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function $u(e, t) {
    return t = Ys({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Li(e, t, n, r) {
    return r !== null && Pu(r),
    Xr(t, e.child, null, n),
    e = $u(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Lv(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Dl(Error(j(422))),
        Li(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = Ys({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = er(i, o, s, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && Xr(t, e.child, null, s),
        t.child.memoizedState = Ra(s),
        t.memoizedState = ja,
        i);
    if (!(t.mode & 1))
        return Li(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        i = Error(j(419)),
        r = Dl(i, r, void 0),
        Li(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0,
    Ue || l) {
        if (r = ke,
        r !== null) {
            switch (s & -s) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            Kt(e, o),
            xt(r, e, o, -1))
        }
        return Qu(),
        r = Dl(Error(j(421))),
        Li(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Gv.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    Ye = Cn(o.nextSibling),
    Ge = t,
    le = !0,
    vt = null,
    e !== null && (nt[rt++] = Bt,
    nt[rt++] = Vt,
    nt[rt++] = nr,
    Bt = e.id,
    Vt = e.overflow,
    nr = t),
    t = $u(t, r.children),
    t.flags |= 4096,
    t)
}
function Sd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Ca(e.return, t, n)
}
function Il(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function xh(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (Ae(e, t, r.children, n),
    r = ae.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Sd(e, n, t);
                else if (e.tag === 19)
                    Sd(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ne(ae, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && Ss(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Il(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Ss(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Il(t, !0, n, null, i);
            break;
        case "together":
            Il(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Zi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Yt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    or |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Nn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Nn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Dv(e, t, n) {
    switch (t.tag) {
    case 3:
        vh(t),
        qr();
        break;
    case 5:
        Qp(t);
        break;
    case 1:
        Ve(t.type) && ys(t);
        break;
    case 4:
        Ou(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        ne(ws, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ne(ae, ae.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? wh(e, t, n) : (ne(ae, ae.current & 1),
            e = Yt(e, t, n),
            e !== null ? e.sibling : null);
        ne(ae, ae.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return xh(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        ne(ae, ae.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        yh(e, t, n)
    }
    return Yt(e, t, n)
}
var kh, Oa, Sh, Eh;
kh = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Oa = function() {}
;
Sh = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        Qn(_t.current);
        var i = null;
        switch (n) {
        case "input":
            o = ea(e, o),
            r = ea(e, r),
            i = [];
            break;
        case "select":
            o = ce({}, o, {
                value: void 0
            }),
            r = ce({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = ra(e, o),
            r = ra(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = hs)
        }
        ia(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var l = o[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Io.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                            n[s] = a[s])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Io.hasOwnProperty(u) ? (a != null && u === "onScroll" && oe("scroll", e),
                    i || l === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Eh = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function xo(e, t) {
    if (!le)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Iv(e, t, n) {
    var r = t.pendingProps;
    switch (bu(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Te(t),
        null;
    case 1:
        return Ve(t.type) && ms(),
        Te(t),
        null;
    case 3:
        return r = t.stateNode,
        Jr(),
        ie(Be),
        ie(Oe),
        Au(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Ai(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        vt !== null && ($a(vt),
        vt = null))),
        Oa(e, t),
        Te(t),
        null;
    case 5:
        _u(t);
        var o = Qn(qo.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Sh(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(j(166));
                return Te(t),
                null
            }
            if (e = Qn(_t.current),
            Ai(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[jt] = t,
                r[Yo] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    oe("cancel", r),
                    oe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    oe("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < zo.length; o++)
                        oe(zo[o], r);
                    break;
                case "source":
                    oe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    oe("error", r),
                    oe("load", r);
                    break;
                case "details":
                    oe("toggle", r);
                    break;
                case "input":
                    Rc(r, i),
                    oe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    oe("invalid", r);
                    break;
                case "textarea":
                    _c(r, i),
                    oe("invalid", r)
                }
                ia(n, i),
                o = null;
                for (var s in i)
                    if (i.hasOwnProperty(s)) {
                        var l = i[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && _i(r.textContent, l, e),
                        o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && _i(r.textContent, l, e),
                        o = ["children", "" + l]) : Io.hasOwnProperty(s) && l != null && s === "onScroll" && oe("scroll", r)
                    }
                switch (n) {
                case "input":
                    bi(r),
                    Oc(r, i, !0);
                    break;
                case "textarea":
                    bi(r),
                    Ac(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = hs)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Xf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[jt] = t,
                e[Yo] = r,
                kh(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = sa(n, r),
                    n) {
                    case "dialog":
                        oe("cancel", e),
                        oe("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        oe("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < zo.length; o++)
                            oe(zo[o], e);
                        o = r;
                        break;
                    case "source":
                        oe("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        oe("error", e),
                        oe("load", e),
                        o = r;
                        break;
                    case "details":
                        oe("toggle", e),
                        o = r;
                        break;
                    case "input":
                        Rc(e, r),
                        o = ea(e, r),
                        oe("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = ce({}, r, {
                            value: void 0
                        }),
                        oe("invalid", e);
                        break;
                    case "textarea":
                        _c(e, r),
                        o = ra(e, r),
                        oe("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    ia(n, o),
                    l = o;
                    for (i in l)
                        if (l.hasOwnProperty(i)) {
                            var a = l[i];
                            i === "style" ? ep(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Jf(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Fo(e, a) : typeof a == "number" && Fo(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Io.hasOwnProperty(i) ? a != null && i === "onScroll" && oe("scroll", e) : a != null && cu(e, i, a, s))
                        }
                    switch (n) {
                    case "input":
                        bi(e),
                        Oc(e, r, !1);
                        break;
                    case "textarea":
                        bi(e),
                        Ac(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + jn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? Or(e, !!r.multiple, i, !1) : r.defaultValue != null && Or(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = hs)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Te(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Eh(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(j(166));
            if (n = Qn(qo.current),
            Qn(_t.current),
            Ai(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[jt] = t,
                (i = r.nodeValue !== n) && (e = Ge,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        _i(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && _i(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[jt] = t,
                t.stateNode = r
        }
        return Te(t),
        null;
    case 13:
        if (ie(ae),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (le && Ye !== null && t.mode & 1 && !(t.flags & 128))
                Up(),
                qr(),
                t.flags |= 98560,
                i = !1;
            else if (i = Ai(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(j(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(j(317));
                    i[jt] = t
                } else
                    qr(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Te(t),
                i = !1
            } else
                vt !== null && ($a(vt),
                vt = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ae.current & 1 ? we === 0 && (we = 3) : Qu())),
        t.updateQueue !== null && (t.flags |= 4),
        Te(t),
        null);
    case 4:
        return Jr(),
        Oa(e, t),
        e === null && Qo(t.stateNode.containerInfo),
        Te(t),
        null;
    case 10:
        return Tu(t.type._context),
        Te(t),
        null;
    case 17:
        return Ve(t.type) && ms(),
        Te(t),
        null;
    case 19:
        if (ie(ae),
        i = t.memoizedState,
        i === null)
            return Te(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = i.rendering,
        s === null)
            if (r)
                xo(i, !1);
            else {
                if (we !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = Ss(e),
                        s !== null) {
                            for (t.flags |= 128,
                            xo(i, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                s = i.alternate,
                                s === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = s.childLanes,
                                i.lanes = s.lanes,
                                i.child = s.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = s.memoizedProps,
                                i.memoizedState = s.memoizedState,
                                i.updateQueue = s.updateQueue,
                                i.type = s.type,
                                e = s.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ne(ae, ae.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && pe() > eo && (t.flags |= 128,
                r = !0,
                xo(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Ss(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    xo(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !s.alternate && !le)
                        return Te(t),
                        null
                } else
                    2 * pe() - i.renderingStartTime > eo && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    xo(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = i.last,
            n !== null ? n.sibling = s : t.child = s,
            i.last = s)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = pe(),
        t.sibling = null,
        n = ae.current,
        ne(ae, r ? n & 1 | 2 : n & 1),
        t) : (Te(t),
        null);
    case 22:
    case 23:
        return Hu(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Qe & 1073741824 && (Te(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(j(156, t.tag))
}
function Fv(e, t) {
    switch (bu(t),
    t.tag) {
    case 1:
        return Ve(t.type) && ms(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Jr(),
        ie(Be),
        ie(Oe),
        Au(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return _u(t),
        null;
    case 13:
        if (ie(ae),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(j(340));
            qr()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return ie(ae),
        null;
    case 4:
        return Jr(),
        null;
    case 10:
        return Tu(t.type._context),
        null;
    case 22:
    case 23:
        return Hu(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Di = !1
  , Re = !1
  , $v = typeof WeakSet == "function" ? WeakSet : Set
  , L = null;
function jr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                fe(e, t, r)
            }
        else
            n.current = null
}
function _a(e, t, n) {
    try {
        n()
    } catch (r) {
        fe(e, t, r)
    }
}
var Ed = !1;
function Uv(e, t) {
    if (ya = ds,
    e = Np(),
    Eu(e)) {
        if ("selectionStart" in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , c = 0
                      , f = e
                      , h = null;
                    t: for (; ; ) {
                        for (var d; f !== n || o !== 0 && f.nodeType !== 3 || (l = s + o),
                        f !== i || r !== 0 && f.nodeType !== 3 || (a = s + r),
                        f.nodeType === 3 && (s += f.nodeValue.length),
                        (d = f.firstChild) !== null; )
                            h = f,
                            f = d;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (h === n && ++u === o && (l = s),
                            h === i && ++c === r && (a = s),
                            (d = f.nextSibling) !== null)
                                break;
                            f = h,
                            h = f.parentNode
                        }
                        f = d
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (ga = {
        focusedElem: e,
        selectionRange: n
    },
    ds = !1,
    L = t; L !== null; )
        if (t = L,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            L = e;
        else
            for (; L !== null; ) {
                t = L;
                try {
                    var k = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (k !== null) {
                                var g = k.memoizedProps
                                  , x = k.memoizedState
                                  , m = t.stateNode
                                  , p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : pt(t.type, g), x);
                                m.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(j(163))
                        }
                } catch (S) {
                    fe(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    L = e;
                    break
                }
                L = t.return
            }
    return k = Ed,
    Ed = !1,
    k
}
function Ao(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && _a(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function Qs(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Aa(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Ch(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Ch(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[jt],
    delete t[Yo],
    delete t[xa],
    delete t[Ev],
    delete t[Cv])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function bh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Cd(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || bh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Ma(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = hs));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ma(e, t, n),
        e = e.sibling; e !== null; )
            Ma(e, t, n),
            e = e.sibling
}
function La(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (La(e, t, n),
        e = e.sibling; e !== null; )
            La(e, t, n),
            e = e.sibling
}
var Se = null
  , gt = !1;
function on(e, t, n) {
    for (n = n.child; n !== null; )
        Ph(e, t, n),
        n = n.sibling
}
function Ph(e, t, n) {
    if (Ot && typeof Ot.onCommitFiberUnmount == "function")
        try {
            Ot.onCommitFiberUnmount(Is, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Re || jr(n, t);
    case 6:
        var r = Se
          , o = gt;
        Se = null,
        on(e, t, n),
        Se = r,
        gt = o,
        Se !== null && (gt ? (e = Se,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Se.removeChild(n.stateNode));
        break;
    case 18:
        Se !== null && (gt ? (e = Se,
        n = n.stateNode,
        e.nodeType === 8 ? Rl(e.parentNode, n) : e.nodeType === 1 && Rl(e, n),
        Vo(e)) : Rl(Se, n.stateNode));
        break;
    case 4:
        r = Se,
        o = gt,
        Se = n.stateNode.containerInfo,
        gt = !0,
        on(e, t, n),
        Se = r,
        gt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Re && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , s = i.destroy;
                i = i.tag,
                s !== void 0 && (i & 2 || i & 4) && _a(n, t, s),
                o = o.next
            } while (o !== r)
        }
        on(e, t, n);
        break;
    case 1:
        if (!Re && (jr(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                fe(n, t, l)
            }
        on(e, t, n);
        break;
    case 21:
        on(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Re = (r = Re) || n.memoizedState !== null,
        on(e, t, n),
        Re = r) : on(e, t, n);
        break;
    default:
        on(e, t, n)
    }
}
function bd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new $v),
        t.forEach(function(r) {
            var o = qv.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function dt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , s = t
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        Se = l.stateNode,
                        gt = !1;
                        break e;
                    case 3:
                        Se = l.stateNode.containerInfo,
                        gt = !0;
                        break e;
                    case 4:
                        Se = l.stateNode.containerInfo,
                        gt = !0;
                        break e
                    }
                    l = l.return
                }
                if (Se === null)
                    throw Error(j(160));
                Ph(i, s, o),
                Se = null,
                gt = !1;
                var a = o.alternate;
                a !== null && (a.return = null),
                o.return = null
            } catch (u) {
                fe(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            zh(t, e),
            t = t.sibling
}
function zh(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (dt(t, e),
        bt(e),
        r & 4) {
            try {
                Ao(3, e, e.return),
                Qs(3, e)
            } catch (g) {
                fe(e, e.return, g)
            }
            try {
                Ao(5, e, e.return)
            } catch (g) {
                fe(e, e.return, g)
            }
        }
        break;
    case 1:
        dt(t, e),
        bt(e),
        r & 512 && n !== null && jr(n, n.return);
        break;
    case 5:
        if (dt(t, e),
        bt(e),
        r & 512 && n !== null && jr(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Fo(o, "")
            } catch (g) {
                fe(e, e.return, g)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , s = n !== null ? n.memoizedProps : i
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && i.type === "radio" && i.name != null && Gf(o, i),
                    sa(l, s);
                    var u = sa(l, i);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s]
                          , f = a[s + 1];
                        c === "style" ? ep(o, f) : c === "dangerouslySetInnerHTML" ? Jf(o, f) : c === "children" ? Fo(o, f) : cu(o, c, f, u)
                    }
                    switch (l) {
                    case "input":
                        ta(o, i);
                        break;
                    case "textarea":
                        qf(o, i);
                        break;
                    case "select":
                        var h = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var d = i.value;
                        d != null ? Or(o, !!i.multiple, d, !1) : h !== !!i.multiple && (i.defaultValue != null ? Or(o, !!i.multiple, i.defaultValue, !0) : Or(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Yo] = i
                } catch (g) {
                    fe(e, e.return, g)
                }
        }
        break;
    case 6:
        if (dt(t, e),
        bt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(j(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (g) {
                fe(e, e.return, g)
            }
        }
        break;
    case 3:
        if (dt(t, e),
        bt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Vo(t.containerInfo)
            } catch (g) {
                fe(e, e.return, g)
            }
        break;
    case 4:
        dt(t, e),
        bt(e);
        break;
    case 13:
        dt(t, e),
        bt(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (Vu = pe())),
        r & 4 && bd(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Re = (u = Re) || c,
        dt(t, e),
        Re = u) : dt(t, e),
        bt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (L = e,
                c = e.child; c !== null; ) {
                    for (f = L = c; L !== null; ) {
                        switch (h = L,
                        d = h.child,
                        h.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ao(4, h, h.return);
                            break;
                        case 1:
                            jr(h, h.return);
                            var k = h.stateNode;
                            if (typeof k.componentWillUnmount == "function") {
                                r = h,
                                n = h.return;
                                try {
                                    t = r,
                                    k.props = t.memoizedProps,
                                    k.state = t.memoizedState,
                                    k.componentWillUnmount()
                                } catch (g) {
                                    fe(r, n, g)
                                }
                            }
                            break;
                        case 5:
                            jr(h, h.return);
                            break;
                        case 22:
                            if (h.memoizedState !== null) {
                                zd(f);
                                continue
                            }
                        }
                        d !== null ? (d.return = h,
                        L = d) : zd(f)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            o = f.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = f.stateNode,
                            a = f.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = Zf("display", s))
                        } catch (g) {
                            fe(e, e.return, g)
                        }
                    }
                } else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (g) {
                            fe(e, e.return, g)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    c === f && (c = null),
                    f = f.return
                }
                c === f && (c = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        dt(t, e),
        bt(e),
        r & 4 && bd(e);
        break;
    case 21:
        break;
    default:
        dt(t, e),
        bt(e)
    }
}
function bt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (bh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(j(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Fo(o, ""),
                r.flags &= -33);
                var i = Cd(e);
                La(e, i, o);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = Cd(e);
                Ma(e, l, s);
                break;
            default:
                throw Error(j(161))
            }
        } catch (a) {
            fe(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Bv(e, t, n) {
    L = e,
    Nh(e)
}
function Nh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; L !== null; ) {
        var o = L
          , i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || Di;
            if (!s) {
                var l = o.alternate
                  , a = l !== null && l.memoizedState !== null || Re;
                l = Di;
                var u = Re;
                if (Di = s,
                (Re = a) && !u)
                    for (L = o; L !== null; )
                        s = L,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? Nd(o) : a !== null ? (a.return = s,
                        L = a) : Nd(o);
                for (; i !== null; )
                    L = i,
                    Nh(i),
                    i = i.sibling;
                L = o,
                Di = l,
                Re = u
            }
            Pd(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            L = i) : Pd(e)
    }
}
function Pd(e) {
    for (; L !== null; ) {
        var t = L;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Re || Qs(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Re)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : pt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && cd(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            cd(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && Vo(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(j(163))
                    }
                Re || t.flags & 512 && Aa(t)
            } catch (h) {
                fe(t, t.return, h)
            }
        }
        if (t === e) {
            L = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            L = n;
            break
        }
        L = t.return
    }
}
function zd(e) {
    for (; L !== null; ) {
        var t = L;
        if (t === e) {
            L = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            L = n;
            break
        }
        L = t.return
    }
}
function Nd(e) {
    for (; L !== null; ) {
        var t = L;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Qs(4, t)
                } catch (a) {
                    fe(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        fe(t, o, a)
                    }
                }
                var i = t.return;
                try {
                    Aa(t)
                } catch (a) {
                    fe(t, i, a)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    Aa(t)
                } catch (a) {
                    fe(t, s, a)
                }
            }
        } catch (a) {
            fe(t, t.return, a)
        }
        if (t === e) {
            L = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            L = l;
            break
        }
        L = t.return
    }
}
var Vv = Math.ceil
  , bs = Xt.ReactCurrentDispatcher
  , Uu = Xt.ReactCurrentOwner
  , it = Xt.ReactCurrentBatchConfig
  , X = 0
  , ke = null
  , me = null
  , Ee = 0
  , Qe = 0
  , Rr = Dn(0)
  , we = 0
  , ei = null
  , or = 0
  , Ks = 0
  , Bu = 0
  , Mo = null
  , $e = null
  , Vu = 0
  , eo = 1 / 0
  , Ft = null
  , Ps = !1
  , Da = null
  , Pn = null
  , Ii = !1
  , wn = null
  , zs = 0
  , Lo = 0
  , Ia = null
  , es = -1
  , ts = 0;
function Le() {
    return X & 6 ? pe() : es !== -1 ? es : es = pe()
}
function zn(e) {
    return e.mode & 1 ? X & 2 && Ee !== 0 ? Ee & -Ee : Pv.transition !== null ? (ts === 0 && (ts = fp()),
    ts) : (e = ee,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : wp(e.type)),
    e) : 1
}
function xt(e, t, n, r) {
    if (50 < Lo)
        throw Lo = 0,
        Ia = null,
        Error(j(185));
    ci(e, n, r),
    (!(X & 2) || e !== ke) && (e === ke && (!(X & 2) && (Ks |= n),
    we === 4 && fn(e, Ee)),
    We(e, r),
    n === 1 && X === 0 && !(t.mode & 1) && (eo = pe() + 500,
    Vs && In()))
}
function We(e, t) {
    var n = e.callbackNode;
    Pg(e, t);
    var r = cs(e, e === ke ? Ee : 0);
    if (r === 0)
        n !== null && Dc(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Dc(n),
        t === 1)
            e.tag === 0 ? bv(Td.bind(null, e)) : Ip(Td.bind(null, e)),
            kv(function() {
                !(X & 6) && In()
            }),
            n = null;
        else {
            switch (pp(r)) {
            case 1:
                n = mu;
                break;
            case 4:
                n = cp;
                break;
            case 16:
                n = us;
                break;
            case 536870912:
                n = dp;
                break;
            default:
                n = us
            }
            n = Lh(n, Th.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Th(e, t) {
    if (es = -1,
    ts = 0,
    X & 6)
        throw Error(j(327));
    var n = e.callbackNode;
    if (Dr() && e.callbackNode !== n)
        return null;
    var r = cs(e, e === ke ? Ee : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Ns(e, r);
    else {
        t = r;
        var o = X;
        X |= 2;
        var i = Rh();
        (ke !== e || Ee !== t) && (Ft = null,
        eo = pe() + 500,
        Zn(e, t));
        do
            try {
                Qv();
                break
            } catch (l) {
                jh(e, l)
            }
        while (!0);
        Nu(),
        bs.current = i,
        X = o,
        me !== null ? t = 0 : (ke = null,
        Ee = 0,
        t = we)
    }
    if (t !== 0) {
        if (t === 2 && (o = da(e),
        o !== 0 && (r = o,
        t = Fa(e, o))),
        t === 1)
            throw n = ei,
            Zn(e, 0),
            fn(e, r),
            We(e, pe()),
            n;
        if (t === 6)
            fn(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !Wv(o) && (t = Ns(e, r),
            t === 2 && (i = da(e),
            i !== 0 && (r = i,
            t = Fa(e, i))),
            t === 1))
                throw n = ei,
                Zn(e, 0),
                fn(e, r),
                We(e, pe()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(j(345));
            case 2:
                Vn(e, $e, Ft);
                break;
            case 3:
                if (fn(e, r),
                (r & 130023424) === r && (t = Vu + 500 - pe(),
                10 < t)) {
                    if (cs(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Le(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = wa(Vn.bind(null, e, $e, Ft), t);
                    break
                }
                Vn(e, $e, Ft);
                break;
            case 4:
                if (fn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var s = 31 - wt(r);
                    i = 1 << s,
                    s = t[s],
                    s > o && (o = s),
                    r &= ~i
                }
                if (r = o,
                r = pe() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Vv(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = wa(Vn.bind(null, e, $e, Ft), r);
                    break
                }
                Vn(e, $e, Ft);
                break;
            case 5:
                Vn(e, $e, Ft);
                break;
            default:
                throw Error(j(329))
            }
        }
    }
    return We(e, pe()),
    e.callbackNode === n ? Th.bind(null, e) : null
}
function Fa(e, t) {
    var n = Mo;
    return e.current.memoizedState.isDehydrated && (Zn(e, t).flags |= 256),
    e = Ns(e, t),
    e !== 2 && (t = $e,
    $e = n,
    t !== null && $a(t)),
    e
}
function $a(e) {
    $e === null ? $e = e : $e.push.apply($e, e)
}
function Wv(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!kt(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function fn(e, t) {
    for (t &= ~Bu,
    t &= ~Ks,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - wt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Td(e) {
    if (X & 6)
        throw Error(j(327));
    Dr();
    var t = cs(e, 0);
    if (!(t & 1))
        return We(e, pe()),
        null;
    var n = Ns(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = da(e);
        r !== 0 && (t = r,
        n = Fa(e, r))
    }
    if (n === 1)
        throw n = ei,
        Zn(e, 0),
        fn(e, t),
        We(e, pe()),
        n;
    if (n === 6)
        throw Error(j(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Vn(e, $e, Ft),
    We(e, pe()),
    null
}
function Wu(e, t) {
    var n = X;
    X |= 1;
    try {
        return e(t)
    } finally {
        X = n,
        X === 0 && (eo = pe() + 500,
        Vs && In())
    }
}
function ir(e) {
    wn !== null && wn.tag === 0 && !(X & 6) && Dr();
    var t = X;
    X |= 1;
    var n = it.transition
      , r = ee;
    try {
        if (it.transition = null,
        ee = 1,
        e)
            return e()
    } finally {
        ee = r,
        it.transition = n,
        X = t,
        !(X & 6) && In()
    }
}
function Hu() {
    Qe = Rr.current,
    ie(Rr)
}
function Zn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    xv(n)),
    me !== null)
        for (n = me.return; n !== null; ) {
            var r = n;
            switch (bu(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ms();
                break;
            case 3:
                Jr(),
                ie(Be),
                ie(Oe),
                Au();
                break;
            case 5:
                _u(r);
                break;
            case 4:
                Jr();
                break;
            case 13:
                ie(ae);
                break;
            case 19:
                ie(ae);
                break;
            case 10:
                Tu(r.type._context);
                break;
            case 22:
            case 23:
                Hu()
            }
            n = n.return
        }
    if (ke = e,
    me = e = Nn(e.current, null),
    Ee = Qe = t,
    we = 0,
    ei = null,
    Bu = Ks = or = 0,
    $e = Mo = null,
    Hn !== null) {
        for (t = 0; t < Hn.length; t++)
            if (n = Hn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o,
                    r.next = s
                }
                n.pending = r
            }
        Hn = null
    }
    return e
}
function jh(e, t) {
    do {
        var n = me;
        try {
            if (Nu(),
            Xi.current = Cs,
            Es) {
                for (var r = ue.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                Es = !1
            }
            if (rr = 0,
            xe = ge = ue = null,
            _o = !1,
            Xo = 0,
            Uu.current = null,
            n === null || n.return === null) {
                we = 1,
                ei = t,
                me = null;
                break
            }
            e: {
                var i = e
                  , s = n.return
                  , l = n
                  , a = t;
                if (t = Ee,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , c = l
                      , f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var h = c.alternate;
                        h ? (c.updateQueue = h.updateQueue,
                        c.memoizedState = h.memoizedState,
                        c.lanes = h.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var d = yd(s);
                    if (d !== null) {
                        d.flags &= -257,
                        gd(d, s, l, i, t),
                        d.mode & 1 && md(i, u, t),
                        t = d,
                        a = u;
                        var k = t.updateQueue;
                        if (k === null) {
                            var g = new Set;
                            g.add(a),
                            t.updateQueue = g
                        } else
                            k.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            md(i, u, t),
                            Qu();
                            break e
                        }
                        a = Error(j(426))
                    }
                } else if (le && l.mode & 1) {
                    var x = yd(s);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256),
                        gd(x, s, l, i, t),
                        Pu(Zr(a, l));
                        break e
                    }
                }
                i = a = Zr(a, l),
                we !== 4 && (we = 2),
                Mo === null ? Mo = [i] : Mo.push(i),
                i = s;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var m = ph(i, a, t);
                        ud(i, m);
                        break e;
                    case 1:
                        l = a;
                        var p = i.type
                          , y = i.stateNode;
                        if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Pn === null || !Pn.has(y)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var S = hh(i, l, t);
                            ud(i, S);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            _h(n)
        } catch (E) {
            t = E,
            me === n && n !== null && (me = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Rh() {
    var e = bs.current;
    return bs.current = Cs,
    e === null ? Cs : e
}
function Qu() {
    (we === 0 || we === 3 || we === 2) && (we = 4),
    ke === null || !(or & 268435455) && !(Ks & 268435455) || fn(ke, Ee)
}
function Ns(e, t) {
    var n = X;
    X |= 2;
    var r = Rh();
    (ke !== e || Ee !== t) && (Ft = null,
    Zn(e, t));
    do
        try {
            Hv();
            break
        } catch (o) {
            jh(e, o)
        }
    while (!0);
    if (Nu(),
    X = n,
    bs.current = r,
    me !== null)
        throw Error(j(261));
    return ke = null,
    Ee = 0,
    we
}
function Hv() {
    for (; me !== null; )
        Oh(me)
}
function Qv() {
    for (; me !== null && !gg(); )
        Oh(me)
}
function Oh(e) {
    var t = Mh(e.alternate, e, Qe);
    e.memoizedProps = e.pendingProps,
    t === null ? _h(e) : me = t,
    Uu.current = null
}
function _h(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Fv(n, t),
            n !== null) {
                n.flags &= 32767,
                me = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                we = 6,
                me = null;
                return
            }
        } else if (n = Iv(n, t, Qe),
        n !== null) {
            me = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            me = t;
            return
        }
        me = t = e
    } while (t !== null);
    we === 0 && (we = 5)
}
function Vn(e, t, n) {
    var r = ee
      , o = it.transition;
    try {
        it.transition = null,
        ee = 1,
        Kv(e, t, n, r)
    } finally {
        it.transition = o,
        ee = r
    }
    return null
}
function Kv(e, t, n, r) {
    do
        Dr();
    while (wn !== null);
    if (X & 6)
        throw Error(j(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(j(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (zg(e, i),
    e === ke && (me = ke = null,
    Ee = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ii || (Ii = !0,
    Lh(us, function() {
        return Dr(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = it.transition,
        it.transition = null;
        var s = ee;
        ee = 1;
        var l = X;
        X |= 4,
        Uu.current = null,
        Uv(e, n),
        zh(n, e),
        pv(ga),
        ds = !!ya,
        ga = ya = null,
        e.current = n,
        Bv(n),
        vg(),
        X = l,
        ee = s,
        it.transition = i
    } else
        e.current = n;
    if (Ii && (Ii = !1,
    wn = e,
    zs = o),
    i = e.pendingLanes,
    i === 0 && (Pn = null),
    kg(n.stateNode),
    We(e, pe()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (Ps)
        throw Ps = !1,
        e = Da,
        Da = null,
        e;
    return zs & 1 && e.tag !== 0 && Dr(),
    i = e.pendingLanes,
    i & 1 ? e === Ia ? Lo++ : (Lo = 0,
    Ia = e) : Lo = 0,
    In(),
    null
}
function Dr() {
    if (wn !== null) {
        var e = pp(zs)
          , t = it.transition
          , n = ee;
        try {
            if (it.transition = null,
            ee = 16 > e ? 16 : e,
            wn === null)
                var r = !1;
            else {
                if (e = wn,
                wn = null,
                zs = 0,
                X & 6)
                    throw Error(j(331));
                var o = X;
                for (X |= 4,
                L = e.current; L !== null; ) {
                    var i = L
                      , s = i.child;
                    if (L.flags & 16) {
                        var l = i.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (L = u; L !== null; ) {
                                    var c = L;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ao(8, c, i)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                        L = f;
                                    else
                                        for (; L !== null; ) {
                                            c = L;
                                            var h = c.sibling
                                              , d = c.return;
                                            if (Ch(c),
                                            c === u) {
                                                L = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = d,
                                                L = h;
                                                break
                                            }
                                            L = d
                                        }
                                }
                            }
                            var k = i.alternate;
                            if (k !== null) {
                                var g = k.child;
                                if (g !== null) {
                                    k.child = null;
                                    do {
                                        var x = g.sibling;
                                        g.sibling = null,
                                        g = x
                                    } while (g !== null)
                                }
                            }
                            L = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        s.return = i,
                        L = s;
                    else
                        e: for (; L !== null; ) {
                            if (i = L,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ao(9, i, i.return)
                                }
                            var m = i.sibling;
                            if (m !== null) {
                                m.return = i.return,
                                L = m;
                                break e
                            }
                            L = i.return
                        }
                }
                var p = e.current;
                for (L = p; L !== null; ) {
                    s = L;
                    var y = s.child;
                    if (s.subtreeFlags & 2064 && y !== null)
                        y.return = s,
                        L = y;
                    else
                        e: for (s = p; L !== null; ) {
                            if (l = L,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Qs(9, l)
                                    }
                                } catch (E) {
                                    fe(l, l.return, E)
                                }
                            if (l === s) {
                                L = null;
                                break e
                            }
                            var S = l.sibling;
                            if (S !== null) {
                                S.return = l.return,
                                L = S;
                                break e
                            }
                            L = l.return
                        }
                }
                if (X = o,
                In(),
                Ot && typeof Ot.onPostCommitFiberRoot == "function")
                    try {
                        Ot.onPostCommitFiberRoot(Is, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ee = n,
            it.transition = t
        }
    }
    return !1
}
function jd(e, t, n) {
    t = Zr(n, t),
    t = ph(e, t, 1),
    e = bn(e, t, 1),
    t = Le(),
    e !== null && (ci(e, 1, t),
    We(e, t))
}
function fe(e, t, n) {
    if (e.tag === 3)
        jd(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                jd(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Pn === null || !Pn.has(r))) {
                    e = Zr(n, e),
                    e = hh(t, e, 1),
                    t = bn(t, e, 1),
                    e = Le(),
                    t !== null && (ci(t, 1, e),
                    We(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Yv(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Le(),
    e.pingedLanes |= e.suspendedLanes & n,
    ke === e && (Ee & n) === n && (we === 4 || we === 3 && (Ee & 130023424) === Ee && 500 > pe() - Vu ? Zn(e, 0) : Bu |= n),
    We(e, t)
}
function Ah(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ni,
    Ni <<= 1,
    !(Ni & 130023424) && (Ni = 4194304)) : t = 1);
    var n = Le();
    e = Kt(e, t),
    e !== null && (ci(e, t, n),
    We(e, n))
}
function Gv(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Ah(e, n)
}
function qv(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(j(314))
    }
    r !== null && r.delete(t),
    Ah(e, n)
}
var Mh;
Mh = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Be.current)
            Ue = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Ue = !1,
                Dv(e, t, n);
            Ue = !!(e.flags & 131072)
        }
    else
        Ue = !1,
        le && t.flags & 1048576 && Fp(t, vs, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Zi(e, t),
        e = t.pendingProps;
        var o = Gr(t, Oe.current);
        Lr(t, n),
        o = Lu(null, t, r, e, o, n);
        var i = Du();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ve(r) ? (i = !0,
        ys(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Ru(t),
        o.updater = Hs,
        t.stateNode = o,
        o._reactInternals = t,
        Pa(t, r, e, n),
        t = Ta(null, t, r, !0, i, n)) : (t.tag = 0,
        le && i && Cu(t),
        Ae(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Zi(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = Jv(r),
            e = pt(r, e),
            o) {
            case 0:
                t = Na(null, t, r, e, n);
                break e;
            case 1:
                t = xd(null, t, r, e, n);
                break e;
            case 11:
                t = vd(null, t, r, e, n);
                break e;
            case 14:
                t = wd(null, t, r, pt(r.type, e), n);
                break e
            }
            throw Error(j(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : pt(r, o),
        Na(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : pt(r, o),
        xd(e, t, r, o, n);
    case 3:
        e: {
            if (vh(t),
            e === null)
                throw Error(j(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            Hp(e, t),
            ks(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = Zr(Error(j(423)), t),
                    t = kd(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = Zr(Error(j(424)), t),
                    t = kd(e, t, r, n, o);
                    break e
                } else
                    for (Ye = Cn(t.stateNode.containerInfo.firstChild),
                    Ge = t,
                    le = !0,
                    vt = null,
                    n = Vp(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (qr(),
                r === o) {
                    t = Yt(e, t, n);
                    break e
                }
                Ae(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Qp(t),
        e === null && Ea(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        s = o.children,
        va(r, o) ? s = null : i !== null && va(r, i) && (t.flags |= 32),
        gh(e, t),
        Ae(e, t, s, n),
        t.child;
    case 6:
        return e === null && Ea(t),
        null;
    case 13:
        return wh(e, t, n);
    case 4:
        return Ou(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Xr(t, null, r, n) : Ae(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : pt(r, o),
        vd(e, t, r, o, n);
    case 7:
        return Ae(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ae(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ae(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            s = o.value,
            ne(ws, r._currentValue),
            r._currentValue = s,
            i !== null)
                if (kt(i.value, s)) {
                    if (i.children === o.children && !Be.current) {
                        t = Yt(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var l = i.dependencies;
                        if (l !== null) {
                            s = i.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (i.tag === 1) {
                                        a = Wt(-1, n & -n),
                                        a.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next,
                                            c.next = a),
                                            u.pending = a
                                        }
                                    }
                                    i.lanes |= n,
                                    a = i.alternate,
                                    a !== null && (a.lanes |= n),
                                    Ca(i.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (i.tag === 10)
                            s = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (s = i.return,
                            s === null)
                                throw Error(j(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            Ca(s, n, t),
                            s = i.sibling
                        } else
                            s = i.child;
                        if (s !== null)
                            s.return = i;
                        else
                            for (s = i; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (i = s.sibling,
                                i !== null) {
                                    i.return = s.return,
                                    s = i;
                                    break
                                }
                                s = s.return
                            }
                        i = s
                    }
            Ae(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Lr(t, n),
        o = st(o),
        r = r(o),
        t.flags |= 1,
        Ae(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = pt(r, t.pendingProps),
        o = pt(r.type, o),
        wd(e, t, r, o, n);
    case 15:
        return mh(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : pt(r, o),
        Zi(e, t),
        t.tag = 1,
        Ve(r) ? (e = !0,
        ys(t)) : e = !1,
        Lr(t, n),
        fh(t, r, o),
        Pa(t, r, o, n),
        Ta(null, t, r, !0, e, n);
    case 19:
        return xh(e, t, n);
    case 22:
        return yh(e, t, n)
    }
    throw Error(j(156, t.tag))
}
;
function Lh(e, t) {
    return up(e, t)
}
function Xv(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function ot(e, t, n, r) {
    return new Xv(e,t,n,r)
}
function Ku(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Jv(e) {
    if (typeof e == "function")
        return Ku(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === fu)
            return 11;
        if (e === pu)
            return 14
    }
    return 2
}
function Nn(e, t) {
    var n = e.alternate;
    return n === null ? (n = ot(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function ns(e, t, n, r, o, i) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        Ku(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case kr:
            return er(n.children, o, i, t);
        case du:
            s = 8,
            o |= 8;
            break;
        case ql:
            return e = ot(12, n, t, o | 2),
            e.elementType = ql,
            e.lanes = i,
            e;
        case Xl:
            return e = ot(13, n, t, o),
            e.elementType = Xl,
            e.lanes = i,
            e;
        case Jl:
            return e = ot(19, n, t, o),
            e.elementType = Jl,
            e.lanes = i,
            e;
        case Qf:
            return Ys(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Wf:
                    s = 10;
                    break e;
                case Hf:
                    s = 9;
                    break e;
                case fu:
                    s = 11;
                    break e;
                case pu:
                    s = 14;
                    break e;
                case un:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(j(130, e == null ? e : typeof e, ""))
        }
    return t = ot(s, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function er(e, t, n, r) {
    return e = ot(7, e, r, t),
    e.lanes = n,
    e
}
function Ys(e, t, n, r) {
    return e = ot(22, e, r, t),
    e.elementType = Qf,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Fl(e, t, n) {
    return e = ot(6, e, null, t),
    e.lanes = n,
    e
}
function $l(e, t, n) {
    return t = ot(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Zv(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = xl(0),
    this.expirationTimes = xl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = xl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Yu(e, t, n, r, o, i, s, l, a) {
    return e = new Zv(e,t,n,l,a),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = ot(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Ru(i),
    e
}
function e0(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: xr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Dh(e) {
    if (!e)
        return Rn;
    e = e._reactInternals;
    e: {
        if (ar(e) !== e || e.tag !== 1)
            throw Error(j(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ve(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(j(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ve(n))
            return Dp(e, n, t)
    }
    return t
}
function Ih(e, t, n, r, o, i, s, l, a) {
    return e = Yu(n, r, !0, e, o, i, s, l, a),
    e.context = Dh(null),
    n = e.current,
    r = Le(),
    o = zn(n),
    i = Wt(r, o),
    i.callback = t ?? null,
    bn(n, i, o),
    e.current.lanes = o,
    ci(e, o, r),
    We(e, r),
    e
}
function Gs(e, t, n, r) {
    var o = t.current
      , i = Le()
      , s = zn(o);
    return n = Dh(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Wt(i, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = bn(o, t, s),
    e !== null && (xt(e, o, s, i),
    qi(e, o, s)),
    s
}
function Ts(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Rd(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Gu(e, t) {
    Rd(e, t),
    (e = e.alternate) && Rd(e, t)
}
function t0() {
    return null
}
var Fh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function qu(e) {
    this._internalRoot = e
}
qs.prototype.render = qu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(j(409));
    Gs(e, t, null, null)
}
;
qs.prototype.unmount = qu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        ir(function() {
            Gs(null, e, null, null)
        }),
        t[Qt] = null
    }
}
;
function qs(e) {
    this._internalRoot = e
}
qs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = yp();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < dn.length && t !== 0 && t < dn[n].priority; n++)
            ;
        dn.splice(n, 0, e),
        n === 0 && vp(e)
    }
}
;
function Xu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Xs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Od() {}
function n0(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = Ts(s);
                i.call(u)
            }
        }
        var s = Ih(t, r, e, 0, null, !1, !1, "", Od);
        return e._reactRootContainer = s,
        e[Qt] = s.current,
        Qo(e.nodeType === 8 ? e.parentNode : e),
        ir(),
        s
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = Ts(a);
            l.call(u)
        }
    }
    var a = Yu(e, 0, !1, null, null, !1, !1, "", Od);
    return e._reactRootContainer = a,
    e[Qt] = a.current,
    Qo(e.nodeType === 8 ? e.parentNode : e),
    ir(function() {
        Gs(t, a, n, r)
    }),
    a
}
function Js(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var l = o;
            o = function() {
                var a = Ts(s);
                l.call(a)
            }
        }
        Gs(t, s, e, o)
    } else
        s = n0(n, t, e, o, r);
    return Ts(s)
}
hp = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Po(t.pendingLanes);
            n !== 0 && (yu(t, n | 1),
            We(t, pe()),
            !(X & 6) && (eo = pe() + 500,
            In()))
        }
        break;
    case 13:
        ir(function() {
            var r = Kt(e, 1);
            if (r !== null) {
                var o = Le();
                xt(r, e, 1, o)
            }
        }),
        Gu(e, 1)
    }
}
;
gu = function(e) {
    if (e.tag === 13) {
        var t = Kt(e, 134217728);
        if (t !== null) {
            var n = Le();
            xt(t, e, 134217728, n)
        }
        Gu(e, 134217728)
    }
}
;
mp = function(e) {
    if (e.tag === 13) {
        var t = zn(e)
          , n = Kt(e, t);
        if (n !== null) {
            var r = Le();
            xt(n, e, t, r)
        }
        Gu(e, t)
    }
}
;
yp = function() {
    return ee
}
;
gp = function(e, t) {
    var n = ee;
    try {
        return ee = e,
        t()
    } finally {
        ee = n
    }
}
;
aa = function(e, t, n) {
    switch (t) {
    case "input":
        if (ta(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Bs(r);
                    if (!o)
                        throw Error(j(90));
                    Yf(r),
                    ta(r, o)
                }
            }
        }
        break;
    case "textarea":
        qf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Or(e, !!n.multiple, t, !1)
    }
}
;
rp = Wu;
op = ir;
var r0 = {
    usingClientEntryPoint: !1,
    Events: [fi, br, Bs, tp, np, Wu]
}
  , ko = {
    findFiberByHostInstance: Wn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , o0 = {
    bundleType: ko.bundleType,
    version: ko.version,
    rendererPackageName: ko.rendererPackageName,
    rendererConfig: ko.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = lp(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ko.findFiberByHostInstance || t0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Fi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fi.isDisabled && Fi.supportsFiber)
        try {
            Is = Fi.inject(o0),
            Ot = Fi
        } catch {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r0;
Je.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xu(t))
        throw Error(j(200));
    return e0(e, t, null, n)
}
;
Je.createRoot = function(e, t) {
    if (!Xu(e))
        throw Error(j(299));
    var n = !1
      , r = ""
      , o = Fh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Yu(e, 1, !1, null, null, n, !1, r, o),
    e[Qt] = t.current,
    Qo(e.nodeType === 8 ? e.parentNode : e),
    new qu(t)
}
;
Je.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","),
        Error(j(268, e)));
    return e = lp(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Je.flushSync = function(e) {
    return ir(e)
}
;
Je.hydrate = function(e, t, n) {
    if (!Xs(t))
        throw Error(j(200));
    return Js(null, e, t, !0, n)
}
;
Je.hydrateRoot = function(e, t, n) {
    if (!Xu(e))
        throw Error(j(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , s = Fh;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Ih(t, null, e, 1, n ?? null, o, !1, i, s),
    e[Qt] = t.current,
    Qo(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new qs(t)
}
;
Je.render = function(e, t, n) {
    if (!Xs(t))
        throw Error(j(200));
    return Js(null, e, t, !1, n)
}
;
Je.unmountComponentAtNode = function(e) {
    if (!Xs(e))
        throw Error(j(40));
    return e._reactRootContainer ? (ir(function() {
        Js(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Qt] = null
        })
    }),
    !0) : !1
}
;
Je.unstable_batchedUpdates = Wu;
Je.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Xs(n))
        throw Error(j(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(j(38));
    return Js(e, t, n, !1, r)
}
;
Je.version = "18.3.1-next-f1338f8080-20240426";
function $h() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($h)
        } catch (e) {
            console.error(e)
        }
}
$h(),
$f.exports = Je;
var hi = $f.exports;
const Uh = zf(hi);
var Bh, _d = hi;
Bh = _d.createRoot,
_d.hydrateRoot;
var Zs = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , el = typeof window > "u" || "Deno" in globalThis;
function ht() {}
function i0(e, t) {
    return typeof e == "function" ? e(t) : e
}
function s0(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function l0(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function Ua(e, t) {
    return typeof e == "function" ? e(t) : e
}
function a0(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Ad(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: l} = e;
    if (s) {
        if (r) {
            if (t.queryHash !== Ju(s, t.options))
                return !1
        } else if (!ni(t.queryKey, s))
            return !1
    }
    if (n !== "all") {
        const a = t.isActive();
        if (n === "active" && !a || n === "inactive" && a)
            return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || i && !i(t))
}
function Md(e, t) {
    const {exact: n, status: r, predicate: o, mutationKey: i} = e;
    if (i) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (ti(t.options.mutationKey) !== ti(i))
                return !1
        } else if (!ni(t.options.mutationKey, i))
            return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}
function Ju(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || ti)(e)
}
function ti(e) {
    return JSON.stringify(e, (t, n) => Ba(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function ni(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => ni(e[n], t[n])) : !1
}
function Vh(e, t) {
    if (e === t)
        return e;
    const n = Ld(e) && Ld(t);
    if (n || Ba(e) && Ba(t)) {
        const r = n ? e : Object.keys(e)
          , o = r.length
          , i = n ? t : Object.keys(t)
          , s = i.length
          , l = n ? [] : {}
          , a = new Set(r);
        let u = 0;
        for (let c = 0; c < s; c++) {
            const f = n ? c : i[c];
            (!n && a.has(f) || n) && e[f] === void 0 && t[f] === void 0 ? (l[f] = void 0,
            u++) : (l[f] = Vh(e[f], t[f]),
            l[f] === e[f] && e[f] !== void 0 && u++)
        }
        return o === s && u === o ? e : l
    }
    return t
}
function Ld(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Ba(e) {
    if (!Dd(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Dd(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Dd(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function u0(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function c0(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Vh(e, t) : t
}
function d0(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function f0(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Zu = Symbol();
function Wh(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Zu ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Kn, pn, $r, wf, p0 = (wf = class extends Zs {
    constructor() {
        super();
        J(this, Kn);
        J(this, pn);
        J(this, $r);
        B(this, $r, t => {
            if (!el && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        P(this, pn) || this.setEventListener(P(this, $r))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = P(this, pn)) == null || t.call(this),
        B(this, pn, void 0))
    }
    setEventListener(t) {
        var n;
        B(this, $r, t),
        (n = P(this, pn)) == null || n.call(this),
        B(this, pn, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        P(this, Kn) !== t && (B(this, Kn, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof P(this, Kn) == "boolean" ? P(this, Kn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Kn = new WeakMap,
pn = new WeakMap,
$r = new WeakMap,
wf), Hh = new p0, Ur, hn, Br, xf, h0 = (xf = class extends Zs {
    constructor() {
        super();
        J(this, Ur, !0);
        J(this, hn);
        J(this, Br);
        B(this, Br, t => {
            if (!el && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        P(this, hn) || this.setEventListener(P(this, Br))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = P(this, hn)) == null || t.call(this),
        B(this, hn, void 0))
    }
    setEventListener(t) {
        var n;
        B(this, Br, t),
        (n = P(this, hn)) == null || n.call(this),
        B(this, hn, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        P(this, Ur) !== t && (B(this, Ur, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return P(this, Ur)
    }
}
,
Ur = new WeakMap,
hn = new WeakMap,
Br = new WeakMap,
xf), js = new h0;
function m0() {
    let e, t;
    const n = new Promise( (o, i) => {
        e = o,
        t = i
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(o) {
        Object.assign(n, o),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }),
        e(o)
    }
    ,
    n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }),
        t(o)
    }
    ,
    n
}
function y0(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Qh(e) {
    return (e ?? "online") === "online" ? js.isOnline() : !0
}
var Kh = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Ul(e) {
    return e instanceof Kh
}
function Yh(e) {
    let t = !1, n = 0, r = !1, o;
    const i = m0()
      , s = g => {
        var x;
        r || (h(new Kh(g)),
        (x = e.abort) == null || x.call(e))
    }
      , l = () => {
        t = !0
    }
      , a = () => {
        t = !1
    }
      , u = () => Hh.isFocused() && (e.networkMode === "always" || js.isOnline()) && e.canRun()
      , c = () => Qh(e.networkMode) && e.canRun()
      , f = g => {
        var x;
        r || (r = !0,
        (x = e.onSuccess) == null || x.call(e, g),
        o == null || o(),
        i.resolve(g))
    }
      , h = g => {
        var x;
        r || (r = !0,
        (x = e.onError) == null || x.call(e, g),
        o == null || o(),
        i.reject(g))
    }
      , d = () => new Promise(g => {
        var x;
        o = m => {
            (r || u()) && g(m)
        }
        ,
        (x = e.onPause) == null || x.call(e)
    }
    ).then( () => {
        var g;
        o = void 0,
        r || (g = e.onContinue) == null || g.call(e)
    }
    )
      , k = () => {
        if (r)
            return;
        let g;
        const x = n === 0 ? e.initialPromise : void 0;
        try {
            g = x ?? e.fn()
        } catch (m) {
            g = Promise.reject(m)
        }
        Promise.resolve(g).then(f).catch(m => {
            var C;
            if (r)
                return;
            const p = e.retry ?? (el ? 0 : 3)
              , y = e.retryDelay ?? y0
              , S = typeof y == "function" ? y(n, m) : y
              , E = p === !0 || typeof p == "number" && n < p || typeof p == "function" && p(n, m);
            if (t || !E) {
                h(m);
                return
            }
            n++,
            (C = e.onFail) == null || C.call(e, n, m),
            u0(S).then( () => u() ? void 0 : d()).then( () => {
                t ? h(m) : k()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(),
        i),
        cancelRetry: l,
        continueRetry: a,
        canStart: c,
        start: () => (c() ? k() : d().then(k),
        i)
    }
}
var g0 = e => setTimeout(e, 0);
function v0() {
    let e = []
      , t = 0
      , n = l => {
        l()
    }
      , r = l => {
        l()
    }
      , o = g0;
    const i = l => {
        t ? e.push(l) : o( () => {
            n(l)
        }
        )
    }
      , s = () => {
        const l = e;
        e = [],
        l.length && o( () => {
            r( () => {
                l.forEach(a => {
                    n(a)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: l => {
            let a;
            t++;
            try {
                a = l()
            } finally {
                t--,
                t || s()
            }
            return a
        }
        ,
        batchCalls: l => (...a) => {
            i( () => {
                l(...a)
            }
            )
        }
        ,
        schedule: i,
        setNotifyFunction: l => {
            n = l
        }
        ,
        setBatchNotifyFunction: l => {
            r = l
        }
        ,
        setScheduler: l => {
            o = l
        }
    }
}
var Me = v0(), Yn, kf, Gh = (kf = class {
    constructor() {
        J(this, Yn)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        s0(this.gcTime) && B(this, Yn, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (el ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        P(this, Yn) && (clearTimeout(P(this, Yn)),
        B(this, Yn, void 0))
    }
}
,
Yn = new WeakMap,
kf), Vr, Gn, tt, qn, je, li, Xn, mt, It, Sf, w0 = (Sf = class extends Gh {
    constructor(t) {
        super();
        J(this, mt);
        J(this, Vr);
        J(this, Gn);
        J(this, tt);
        J(this, qn);
        J(this, je);
        J(this, li);
        J(this, Xn);
        B(this, Xn, !1),
        B(this, li, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        B(this, qn, t.client),
        B(this, tt, P(this, qn).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        B(this, Vr, k0(this.options)),
        this.state = t.state ?? P(this, Vr),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = P(this, je)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...P(this, li),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && P(this, tt).remove(this)
    }
    setData(t, n) {
        const r = c0(this.state.data, t, this.options);
        return ze(this, mt, It).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        ze(this, mt, It).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, o;
        const n = (r = P(this, je)) == null ? void 0 : r.promise;
        return (o = P(this, je)) == null || o.cancel(t),
        n ? n.then(ht).catch(ht) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(P(this, Vr))
    }
    isActive() {
        return this.observers.some(t => a0(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Zu || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => Ua(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !l0(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = P(this, je)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = P(this, je)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        P(this, tt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (P(this, je) && (P(this, Xn) ? P(this, je).cancel({
            revert: !0
        }) : P(this, je).cancelRetry()),
        this.scheduleGc()),
        P(this, tt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || ze(this, mt, It).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var u, c, f;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (P(this, je))
                return P(this, je).continueRetry(),
                P(this, je).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const h = this.observers.find(d => d.options.queryFn);
            h && this.setOptions(h.options)
        }
        const r = new AbortController
          , o = h => {
            Object.defineProperty(h, "signal", {
                enumerable: !0,
                get: () => (B(this, Xn, !0),
                r.signal)
            })
        }
          , i = () => {
            const h = Wh(this.options, n)
              , k = ( () => {
                const g = {
                    client: P(this, qn),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return o(g),
                g
            }
            )();
            return B(this, Xn, !1),
            this.options.persister ? this.options.persister(h, k, this) : h(k)
        }
          , l = ( () => {
            const h = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: P(this, qn),
                state: this.state,
                fetchFn: i
            };
            return o(h),
            h
        }
        )();
        (u = this.options.behavior) == null || u.onFetch(l, this),
        B(this, Gn, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = l.fetchOptions) == null ? void 0 : c.meta)) && ze(this, mt, It).call(this, {
            type: "fetch",
            meta: (f = l.fetchOptions) == null ? void 0 : f.meta
        });
        const a = h => {
            var d, k, g, x;
            Ul(h) && h.silent || ze(this, mt, It).call(this, {
                type: "error",
                error: h
            }),
            Ul(h) || ((k = (d = P(this, tt).config).onError) == null || k.call(d, h, this),
            (x = (g = P(this, tt).config).onSettled) == null || x.call(g, this.state.data, h, this)),
            this.scheduleGc()
        }
        ;
        return B(this, je, Yh({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: l.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: h => {
                var d, k, g, x;
                if (h === void 0) {
                    a(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(h)
                } catch (m) {
                    a(m);
                    return
                }
                (k = (d = P(this, tt).config).onSuccess) == null || k.call(d, h, this),
                (x = (g = P(this, tt).config).onSettled) == null || x.call(g, h, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: a,
            onFail: (h, d) => {
                ze(this, mt, It).call(this, {
                    type: "failed",
                    failureCount: h,
                    error: d
                })
            }
            ,
            onPause: () => {
                ze(this, mt, It).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                ze(this, mt, It).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: l.options.retry,
            retryDelay: l.options.retryDelay,
            networkMode: l.options.networkMode,
            canRun: () => !0
        })),
        P(this, je).start()
    }
}
,
Vr = new WeakMap,
Gn = new WeakMap,
tt = new WeakMap,
qn = new WeakMap,
je = new WeakMap,
li = new WeakMap,
Xn = new WeakMap,
mt = new WeakSet,
It = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...x0(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return B(this, Gn, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const o = t.error;
            return Ul(o) && o.revert && P(this, Gn) ? {
                ...P(this, Gn),
                fetchStatus: "idle"
            } : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    Me.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        P(this, tt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Sf);
function x0(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Qh(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function k0(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var zt, Ef, S0 = (Ef = class extends Zs {
    constructor(t={}) {
        super();
        J(this, zt);
        this.config = t,
        B(this, zt, new Map)
    }
    build(t, n, r) {
        const o = n.queryKey
          , i = n.queryHash ?? Ju(o, n);
        let s = this.get(i);
        return s || (s = new w0({
            client: t,
            queryKey: o,
            queryHash: i,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(o)
        }),
        this.add(s)),
        s
    }
    add(t) {
        P(this, zt).has(t.queryHash) || (P(this, zt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = P(this, zt).get(t.queryHash);
        n && (t.destroy(),
        n === t && P(this, zt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        Me.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return P(this, zt).get(t)
    }
    getAll() {
        return [...P(this, zt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Ad(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => Ad(t, r)) : n
    }
    notify(t) {
        Me.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        Me.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Me.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
zt = new WeakMap,
Ef), Nt, _e, Jn, Tt, an, Cf, E0 = (Cf = class extends Gh {
    constructor(t) {
        super();
        J(this, Tt);
        J(this, Nt);
        J(this, _e);
        J(this, Jn);
        this.mutationId = t.mutationId,
        B(this, _e, t.mutationCache),
        B(this, Nt, []),
        this.state = t.state || C0(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        P(this, Nt).includes(t) || (P(this, Nt).push(t),
        this.clearGcTimeout(),
        P(this, _e).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        B(this, Nt, P(this, Nt).filter(n => n !== t)),
        this.scheduleGc(),
        P(this, _e).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        P(this, Nt).length || (this.state.status === "pending" ? this.scheduleGc() : P(this, _e).remove(this))
    }
    continue() {
        var t;
        return ((t = P(this, Jn)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var i, s, l, a, u, c, f, h, d, k, g, x, m, p, y, S, E, C, b, T;
        const n = () => {
            ze(this, Tt, an).call(this, {
                type: "continue"
            })
        }
        ;
        B(this, Jn, Yh({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (_, O) => {
                ze(this, Tt, an).call(this, {
                    type: "failed",
                    failureCount: _,
                    error: O
                })
            }
            ,
            onPause: () => {
                ze(this, Tt, an).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, _e).canRun(this)
        }));
        const r = this.state.status === "pending"
          , o = !P(this, Jn).canStart();
        try {
            if (r)
                n();
            else {
                ze(this, Tt, an).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: o
                }),
                await ((s = (i = P(this, _e).config).onMutate) == null ? void 0 : s.call(i, t, this));
                const O = await ((a = (l = this.options).onMutate) == null ? void 0 : a.call(l, t));
                O !== this.state.context && ze(this, Tt, an).call(this, {
                    type: "pending",
                    context: O,
                    variables: t,
                    isPaused: o
                })
            }
            const _ = await P(this, Jn).start();
            return await ((c = (u = P(this, _e).config).onSuccess) == null ? void 0 : c.call(u, _, t, this.state.context, this)),
            await ((h = (f = this.options).onSuccess) == null ? void 0 : h.call(f, _, t, this.state.context)),
            await ((k = (d = P(this, _e).config).onSettled) == null ? void 0 : k.call(d, _, null, this.state.variables, this.state.context, this)),
            await ((x = (g = this.options).onSettled) == null ? void 0 : x.call(g, _, null, t, this.state.context)),
            ze(this, Tt, an).call(this, {
                type: "success",
                data: _
            }),
            _
        } catch (_) {
            try {
                throw await ((p = (m = P(this, _e).config).onError) == null ? void 0 : p.call(m, _, t, this.state.context, this)),
                await ((S = (y = this.options).onError) == null ? void 0 : S.call(y, _, t, this.state.context)),
                await ((C = (E = P(this, _e).config).onSettled) == null ? void 0 : C.call(E, void 0, _, this.state.variables, this.state.context, this)),
                await ((T = (b = this.options).onSettled) == null ? void 0 : T.call(b, void 0, _, t, this.state.context)),
                _
            } finally {
                ze(this, Tt, an).call(this, {
                    type: "error",
                    error: _
                })
            }
        } finally {
            P(this, _e).runNext(this)
        }
    }
}
,
Nt = new WeakMap,
_e = new WeakMap,
Jn = new WeakMap,
Tt = new WeakSet,
an = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    Me.batch( () => {
        P(this, Nt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        P(this, _e).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
Cf);
function C0() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Ut, yt, ai, bf, b0 = (bf = class extends Zs {
    constructor(t={}) {
        super();
        J(this, Ut);
        J(this, yt);
        J(this, ai);
        this.config = t,
        B(this, Ut, new Set),
        B(this, yt, new Map),
        B(this, ai, 0)
    }
    build(t, n, r) {
        const o = new E0({
            mutationCache: this,
            mutationId: ++Si(this, ai)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o),
        o
    }
    add(t) {
        P(this, Ut).add(t);
        const n = $i(t);
        if (typeof n == "string") {
            const r = P(this, yt).get(n);
            r ? r.push(t) : P(this, yt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (P(this, Ut).delete(t)) {
            const n = $i(t);
            if (typeof n == "string") {
                const r = P(this, yt).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else
                        r[0] === t && P(this, yt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = $i(t);
        if (typeof n == "string") {
            const r = P(this, yt).get(n)
              , o = r == null ? void 0 : r.find(i => i.state.status === "pending");
            return !o || o === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = $i(t);
        if (typeof n == "string") {
            const o = (r = P(this, yt).get(n)) == null ? void 0 : r.find(i => i !== t && i.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        Me.batch( () => {
            P(this, Ut).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            P(this, Ut).clear(),
            P(this, yt).clear()
        }
        )
    }
    getAll() {
        return Array.from(P(this, Ut))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Md(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => Md(t, n))
    }
    notify(t) {
        Me.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Me.batch( () => Promise.all(t.map(n => n.continue().catch(ht))))
    }
}
,
Ut = new WeakMap,
yt = new WeakMap,
ai = new WeakMap,
bf);
function $i(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function Id(e) {
    return {
        onFetch: (t, n) => {
            var c, f, h, d, k;
            const r = t.options
              , o = (h = (f = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : h.direction
              , i = ((d = t.state.data) == null ? void 0 : d.pages) || []
              , s = ((k = t.state.data) == null ? void 0 : k.pageParams) || [];
            let l = {
                pages: [],
                pageParams: []
            }
              , a = 0;
            const u = async () => {
                let g = !1;
                const x = y => {
                    Object.defineProperty(y, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
                            g = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , m = Wh(t.options, t.fetchOptions)
                  , p = async (y, S, E) => {
                    if (g)
                        return Promise.reject();
                    if (S == null && y.pages.length)
                        return Promise.resolve(y);
                    const b = ( () => {
                        const F = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: S,
                            direction: E ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return x(F),
                        F
                    }
                    )()
                      , T = await m(b)
                      , {maxPages: _} = t.options
                      , O = E ? f0 : d0;
                    return {
                        pages: O(y.pages, T, _),
                        pageParams: O(y.pageParams, S, _)
                    }
                }
                ;
                if (o && i.length) {
                    const y = o === "backward"
                      , S = y ? P0 : Fd
                      , E = {
                        pages: i,
                        pageParams: s
                    }
                      , C = S(r, E);
                    l = await p(E, C, y)
                } else {
                    const y = e ?? i.length;
                    do {
                        const S = a === 0 ? s[0] ?? r.initialPageParam : Fd(r, l);
                        if (a > 0 && S == null)
                            break;
                        l = await p(l, S),
                        a++
                    } while (a < y)
                }
                return l
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var g, x;
                return (x = (g = t.options).persister) == null ? void 0 : x.call(g, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = u
        }
    }
}
function Fd(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function P0(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var de, mn, yn, Wr, Hr, gn, Qr, Kr, Pf, z0 = (Pf = class {
    constructor(e={}) {
        J(this, de);
        J(this, mn);
        J(this, yn);
        J(this, Wr);
        J(this, Hr);
        J(this, gn);
        J(this, Qr);
        J(this, Kr);
        B(this, de, e.queryCache || new S0),
        B(this, mn, e.mutationCache || new b0),
        B(this, yn, e.defaultOptions || {}),
        B(this, Wr, new Map),
        B(this, Hr, new Map),
        B(this, gn, 0)
    }
    mount() {
        Si(this, gn)._++,
        P(this, gn) === 1 && (B(this, Qr, Hh.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            P(this, de).onFocus())
        }
        )),
        B(this, Kr, js.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            P(this, de).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        Si(this, gn)._--,
        P(this, gn) === 0 && ((e = P(this, Qr)) == null || e.call(this),
        B(this, Qr, void 0),
        (t = P(this, Kr)) == null || t.call(this),
        B(this, Kr, void 0))
    }
    isFetching(e) {
        return P(this, de).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return P(this, mn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = P(this, de).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = P(this, de).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Ua(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return P(this, de).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , o = P(this, de).get(r.queryHash)
          , i = o == null ? void 0 : o.state.data
          , s = i0(t, i);
        if (s !== void 0)
            return P(this, de).build(this, r).setData(s, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return Me.batch( () => P(this, de).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = P(this, de).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = P(this, de);
        Me.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = P(this, de);
        return Me.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = Me.batch( () => P(this, de).findAll(e).map(o => o.cancel(n)));
        return Promise.all(r).then(ht).catch(ht)
    }
    invalidateQueries(e, t={}) {
        return Me.batch( () => (P(this, de).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = Me.batch( () => P(this, de).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
            let i = o.fetch(void 0, n);
            return n.throwOnError || (i = i.catch(ht)),
            o.state.fetchStatus === "paused" ? Promise.resolve() : i
        }
        ));
        return Promise.all(r).then(ht)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = P(this, de).build(this, t);
        return n.isStaleByTime(Ua(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(ht).catch(ht)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Id(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(ht).catch(ht)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Id(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return js.isOnline() ? P(this, mn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return P(this, de)
    }
    getMutationCache() {
        return P(this, mn)
    }
    getDefaultOptions() {
        return P(this, yn)
    }
    setDefaultOptions(e) {
        B(this, yn, e)
    }
    setQueryDefaults(e, t) {
        P(this, Wr).set(ti(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...P(this, Wr).values()]
          , n = {};
        return t.forEach(r => {
            ni(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        P(this, Hr).set(ti(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...P(this, Hr).values()]
          , n = {};
        return t.forEach(r => {
            ni(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...P(this, yn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Ju(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Zu && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...P(this, yn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        P(this, de).clear(),
        P(this, mn).clear()
    }
}
,
de = new WeakMap,
mn = new WeakMap,
yn = new WeakMap,
Wr = new WeakMap,
Hr = new WeakMap,
gn = new WeakMap,
Qr = new WeakMap,
Kr = new WeakMap,
Pf), N0 = w.createContext(void 0), T0 = ({client: e, children: t}) => (w.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
v.jsx(N0.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ri() {
    return ri = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ri.apply(this, arguments)
}
var xn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(xn || (xn = {}));
const $d = "popstate";
function j0(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: i, search: s, hash: l} = r.location;
        return Va("", {
            pathname: i,
            search: s,
            hash: l
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : Rs(o)
    }
    return O0(t, n, null, e)
}
function ye(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function qh(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function R0() {
    return Math.random().toString(36).substr(2, 8)
}
function Ud(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function Va(e, t, n, r) {
    return n === void 0 && (n = null),
    ri({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? so(t) : t, {
        state: n,
        key: t && t.key || r || R0()
    })
}
function Rs(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function so(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function O0(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = r
      , s = o.history
      , l = xn.Pop
      , a = null
      , u = c();
    u == null && (u = 0,
    s.replaceState(ri({}, s.state, {
        idx: u
    }), ""));
    function c() {
        return (s.state || {
            idx: null
        }).idx
    }
    function f() {
        l = xn.Pop;
        let x = c()
          , m = x == null ? null : x - u;
        u = x,
        a && a({
            action: l,
            location: g.location,
            delta: m
        })
    }
    function h(x, m) {
        l = xn.Push;
        let p = Va(g.location, x, m);
        u = c() + 1;
        let y = Ud(p, u)
          , S = g.createHref(p);
        try {
            s.pushState(y, "", S)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError")
                throw E;
            o.location.assign(S)
        }
        i && a && a({
            action: l,
            location: g.location,
            delta: 1
        })
    }
    function d(x, m) {
        l = xn.Replace;
        let p = Va(g.location, x, m);
        u = c();
        let y = Ud(p, u)
          , S = g.createHref(p);
        s.replaceState(y, "", S),
        i && a && a({
            action: l,
            location: g.location,
            delta: 0
        })
    }
    function k(x) {
        let m = o.location.origin !== "null" ? o.location.origin : o.location.href
          , p = typeof x == "string" ? x : Rs(x);
        return p = p.replace(/ $/, "%20"),
        ye(m, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,m)
    }
    let g = {
        get action() {
            return l
        },
        get location() {
            return e(o, s)
        },
        listen(x) {
            if (a)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener($d, f),
            a = x,
            () => {
                o.removeEventListener($d, f),
                a = null
            }
        },
        createHref(x) {
            return t(o, x)
        },
        createURL: k,
        encodeLocation(x) {
            let m = k(x);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: h,
        replace: d,
        go(x) {
            return s.go(x)
        }
    };
    return g
}
var Bd;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Bd || (Bd = {}));
function _0(e, t, n) {
    return n === void 0 && (n = "/"),
    A0(e, t, n, !1)
}
function A0(e, t, n, r) {
    let o = typeof t == "string" ? so(t) : t
      , i = ec(o.pathname || "/", n);
    if (i == null)
        return null;
    let s = Xh(e);
    M0(s);
    let l = null;
    for (let a = 0; l == null && a < s.length; ++a) {
        let u = Q0(i);
        l = W0(s[a], u, r)
    }
    return l
}
function Xh(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (i, s, l) => {
        let a = {
            relativePath: l === void 0 ? i.path || "" : l,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        a.relativePath.startsWith("/") && (ye(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        a.relativePath = a.relativePath.slice(r.length));
        let u = Tn([r, a.relativePath])
          , c = n.concat(a);
        i.children && i.children.length > 0 && (ye(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Xh(i.children, t, c, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: B0(u, i.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (i, s) => {
        var l;
        if (i.path === "" || !((l = i.path) != null && l.includes("?")))
            o(i, s);
        else
            for (let a of Jh(i.path))
                o(i, s, a)
    }
    ),
    t
}
function Jh(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [i, ""] : [i];
    let s = Jh(r.join("/"))
      , l = [];
    return l.push(...s.map(a => a === "" ? i : [i, a].join("/"))),
    o && l.push(...s),
    l.map(a => e.startsWith("/") && a === "" ? "/" : a)
}
function M0(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : V0(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const L0 = /^:[\w-]+$/
  , D0 = 3
  , I0 = 2
  , F0 = 1
  , $0 = 10
  , U0 = -2
  , Vd = e => e === "*";
function B0(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Vd) && (r += U0),
    t && (r += I0),
    n.filter(o => !Vd(o)).reduce( (o, i) => o + (L0.test(i) ? D0 : i === "" ? F0 : $0), r)
}
function V0(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function W0(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , i = "/"
      , s = [];
    for (let l = 0; l < r.length; ++l) {
        let a = r[l]
          , u = l === r.length - 1
          , c = i === "/" ? t : t.slice(i.length) || "/"
          , f = Wd({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: u
        }, c)
          , h = a.route;
        if (!f && u && n && !r[r.length - 1].route.index && (f = Wd({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: !1
        }, c)),
        !f)
            return null;
        Object.assign(o, f.params),
        s.push({
            params: o,
            pathname: Tn([i, f.pathname]),
            pathnameBase: q0(Tn([i, f.pathnameBase])),
            route: h
        }),
        f.pathnameBase !== "/" && (i = Tn([i, f.pathnameBase]))
    }
    return s
}
function Wd(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = H0(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let i = o[0]
      , s = i.replace(/(.)\/+$/, "$1")
      , l = o.slice(1);
    return {
        params: r.reduce( (u, c, f) => {
            let {paramName: h, isOptional: d} = c;
            if (h === "*") {
                let g = l[f] || "";
                s = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const k = l[f];
            return d && !k ? u[h] = void 0 : u[h] = (k || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}
function H0(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    qh(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, a) => (r.push({
        paramName: l,
        isOptional: a != null
    }),
    a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function Q0(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return qh(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function ec(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function K0(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: o=""} = typeof e == "string" ? so(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Y0(n, t) : t,
        search: X0(r),
        hash: J0(o)
    }
}
function Y0(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Bl(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function G0(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function Zh(e, t) {
    let n = G0(e);
    return t ? n.map( (r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function em(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = so(e) : (o = ri({}, e),
    ye(!o.pathname || !o.pathname.includes("?"), Bl("?", "pathname", "search", o)),
    ye(!o.pathname || !o.pathname.includes("#"), Bl("#", "pathname", "hash", o)),
    ye(!o.search || !o.search.includes("#"), Bl("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "", s = i ? "/" : o.pathname, l;
    if (s == null)
        l = n;
    else {
        let f = t.length - 1;
        if (!r && s.startsWith("..")) {
            let h = s.split("/");
            for (; h[0] === ".."; )
                h.shift(),
                f -= 1;
            o.pathname = h.join("/")
        }
        l = f >= 0 ? t[f] : "/"
    }
    let a = K0(o, l)
      , u = s && s !== "/" && s.endsWith("/")
      , c = (i || s === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"),
    a
}
const Tn = e => e.join("/").replace(/\/\/+/g, "/")
  , q0 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , X0 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , J0 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Z0(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const tm = ["post", "put", "patch", "delete"];
new Set(tm);
const ew = ["get", ...tm];
new Set(ew);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function oi() {
    return oi = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    oi.apply(this, arguments)
}
const tc = w.createContext(null)
  , tw = w.createContext(null)
  , ur = w.createContext(null)
  , tl = w.createContext(null)
  , cr = w.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , nm = w.createContext(null);
function nw(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    mi() || ye(!1);
    let {basename: r, navigator: o} = w.useContext(ur)
      , {hash: i, pathname: s, search: l} = om(e, {
        relative: n
    })
      , a = s;
    return r !== "/" && (a = s === "/" ? r : Tn([r, s])),
    o.createHref({
        pathname: a,
        search: l,
        hash: i
    })
}
function mi() {
    return w.useContext(tl) != null
}
function yi() {
    return mi() || ye(!1),
    w.useContext(tl).location
}
function rm(e) {
    w.useContext(ur).static || w.useLayoutEffect(e)
}
function rw() {
    let {isDataRoute: e} = w.useContext(cr);
    return e ? yw() : ow()
}
function ow() {
    mi() || ye(!1);
    let e = w.useContext(tc)
      , {basename: t, future: n, navigator: r} = w.useContext(ur)
      , {matches: o} = w.useContext(cr)
      , {pathname: i} = yi()
      , s = JSON.stringify(Zh(o, n.v7_relativeSplatPath))
      , l = w.useRef(!1);
    return rm( () => {
        l.current = !0
    }
    ),
    w.useCallback(function(u, c) {
        if (c === void 0 && (c = {}),
        !l.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let f = em(u, JSON.parse(s), i, c.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Tn([t, f.pathname])),
        (c.replace ? r.replace : r.push)(f, c.state, c)
    }, [t, r, s, i, e])
}
function om(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = w.useContext(ur)
      , {matches: o} = w.useContext(cr)
      , {pathname: i} = yi()
      , s = JSON.stringify(Zh(o, r.v7_relativeSplatPath));
    return w.useMemo( () => em(e, JSON.parse(s), i, n === "path"), [e, s, i, n])
}
function iw(e, t) {
    return sw(e, t)
}
function sw(e, t, n, r) {
    mi() || ye(!1);
    let {navigator: o} = w.useContext(ur)
      , {matches: i} = w.useContext(cr)
      , s = i[i.length - 1]
      , l = s ? s.params : {};
    s && s.pathname;
    let a = s ? s.pathnameBase : "/";
    s && s.route;
    let u = yi(), c;
    if (t) {
        var f;
        let x = typeof t == "string" ? so(t) : t;
        a === "/" || (f = x.pathname) != null && f.startsWith(a) || ye(!1),
        c = x
    } else
        c = u;
    let h = c.pathname || "/"
      , d = h;
    if (a !== "/") {
        let x = a.replace(/^\//, "").split("/");
        d = "/" + h.replace(/^\//, "").split("/").slice(x.length).join("/")
    }
    let k = _0(e, {
        pathname: d
    })
      , g = dw(k && k.map(x => Object.assign({}, x, {
        params: Object.assign({}, l, x.params),
        pathname: Tn([a, o.encodeLocation ? o.encodeLocation(x.pathname).pathname : x.pathname]),
        pathnameBase: x.pathnameBase === "/" ? a : Tn([a, o.encodeLocation ? o.encodeLocation(x.pathnameBase).pathname : x.pathnameBase])
    })), i, n, r);
    return t && g ? w.createElement(tl.Provider, {
        value: {
            location: oi({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: xn.Pop
        }
    }, g) : g
}
function lw() {
    let e = mw()
      , t = Z0(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? w.createElement("pre", {
        style: o
    }, n) : null, null)
}
const aw = w.createElement(lw, null);
class uw extends w.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? w.createElement(cr.Provider, {
            value: this.props.routeContext
        }, w.createElement(nm.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function cw(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = w.useContext(tc);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(cr.Provider, {
        value: t
    }, r)
}
function dw(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let s = e
      , l = (o = n) == null ? void 0 : o.errors;
    if (l != null) {
        let c = s.findIndex(f => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
        c >= 0 || ye(!1),
        s = s.slice(0, Math.min(s.length, c + 1))
    }
    let a = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < s.length; c++) {
            let f = s[c];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
            f.route.id) {
                let {loaderData: h, errors: d} = n
                  , k = f.route.loader && h[f.route.id] === void 0 && (!d || d[f.route.id] === void 0);
                if (f.route.lazy || k) {
                    a = !0,
                    u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (c, f, h) => {
        let d, k = !1, g = null, x = null;
        n && (d = l && f.route.id ? l[f.route.id] : void 0,
        g = f.route.errorElement || aw,
        a && (u < 0 && h === 0 ? (k = !0,
        x = null) : u === h && (k = !0,
        x = f.route.hydrateFallbackElement || null)));
        let m = t.concat(s.slice(0, h + 1))
          , p = () => {
            let y;
            return d ? y = g : k ? y = x : f.route.Component ? y = w.createElement(f.route.Component, null) : f.route.element ? y = f.route.element : y = c,
            w.createElement(cw, {
                match: f,
                routeContext: {
                    outlet: c,
                    matches: m,
                    isDataRoute: n != null
                },
                children: y
            })
        }
        ;
        return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? w.createElement(uw, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: d,
            children: p(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var im = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(im || {})
  , Os = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(Os || {});
function fw(e) {
    let t = w.useContext(tc);
    return t || ye(!1),
    t
}
function pw(e) {
    let t = w.useContext(tw);
    return t || ye(!1),
    t
}
function hw(e) {
    let t = w.useContext(cr);
    return t || ye(!1),
    t
}
function sm(e) {
    let t = hw()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || ye(!1),
    n.route.id
}
function mw() {
    var e;
    let t = w.useContext(nm)
      , n = pw(Os.UseRouteError)
      , r = sm(Os.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function yw() {
    let {router: e} = fw(im.UseNavigateStable)
      , t = sm(Os.UseNavigateStable)
      , n = w.useRef(!1);
    return rm( () => {
        n.current = !0
    }
    ),
    w.useCallback(function(o, i) {
        i === void 0 && (i = {}),
        n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, oi({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
function gw(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function wr(e) {
    ye(!1)
}
function vw(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=xn.Pop, navigator: i, static: s=!1, future: l} = e;
    mi() && ye(!1);
    let a = t.replace(/^\/*/, "/")
      , u = w.useMemo( () => ({
        basename: a,
        navigator: i,
        static: s,
        future: oi({
            v7_relativeSplatPath: !1
        }, l)
    }), [a, l, i, s]);
    typeof r == "string" && (r = so(r));
    let {pathname: c="/", search: f="", hash: h="", state: d=null, key: k="default"} = r
      , g = w.useMemo( () => {
        let x = ec(c, a);
        return x == null ? null : {
            location: {
                pathname: x,
                search: f,
                hash: h,
                state: d,
                key: k
            },
            navigationType: o
        }
    }
    , [a, c, f, h, d, k, o]);
    return g == null ? null : w.createElement(ur.Provider, {
        value: u
    }, w.createElement(tl.Provider, {
        children: n,
        value: g
    }))
}
function ww(e) {
    let {children: t, location: n} = e;
    return iw(Wa(t), n)
}
new Promise( () => {}
);
function Wa(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return w.Children.forEach(e, (r, o) => {
        if (!w.isValidElement(r))
            return;
        let i = [...t, o];
        if (r.type === w.Fragment) {
            n.push.apply(n, Wa(r.props.children, i));
            return
        }
        r.type !== wr && ye(!1),
        !r.props.index || !r.props.children || ye(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = Wa(r.props.children, i)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ha() {
    return Ha = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ha.apply(this, arguments)
}
function xw(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), o, i;
    for (i = 0; i < r.length; i++)
        o = r[i],
        !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}
function kw(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Sw(e, t) {
    return e.button === 0 && (!t || t === "_self") && !kw(e)
}
const Ew = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , Cw = "6";
try {
    window.__reactRouterVersion = Cw
} catch {}
const bw = "startTransition"
  , Hd = If[bw];
function Pw(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , i = w.useRef();
    i.current == null && (i.current = j0({
        window: o,
        v5Compat: !0
    }));
    let s = i.current
      , [l,a] = w.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: u} = r || {}
      , c = w.useCallback(f => {
        u && Hd ? Hd( () => a(f)) : a(f)
    }
    , [a, u]);
    return w.useLayoutEffect( () => s.listen(c), [s, c]),
    w.useEffect( () => gw(r), [r]),
    w.createElement(vw, {
        basename: t,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
        future: r
    })
}
const zw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , Nw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , lm = w.forwardRef(function(t, n) {
    let {onClick: r, relative: o, reloadDocument: i, replace: s, state: l, target: a, to: u, preventScrollReset: c, viewTransition: f} = t, h = xw(t, Ew), {basename: d} = w.useContext(ur), k, g = !1;
    if (typeof u == "string" && Nw.test(u) && (k = u,
    zw))
        try {
            let y = new URL(window.location.href)
              , S = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u)
              , E = ec(S.pathname, d);
            S.origin === y.origin && E != null ? u = E + S.search + S.hash : g = !0
        } catch {}
    let x = nw(u, {
        relative: o
    })
      , m = Tw(u, {
        replace: s,
        state: l,
        target: a,
        preventScrollReset: c,
        relative: o,
        viewTransition: f
    });
    function p(y) {
        r && r(y),
        y.defaultPrevented || m(y)
    }
    return w.createElement("a", Ha({}, h, {
        href: k || x,
        onClick: g || i ? r : p,
        ref: n,
        target: a
    }))
});
var Qd;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Qd || (Qd = {}));
var Kd;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Kd || (Kd = {}));
function Tw(e, t) {
    let {target: n, replace: r, state: o, preventScrollReset: i, relative: s, viewTransition: l} = t === void 0 ? {} : t
      , a = rw()
      , u = yi()
      , c = om(e, {
        relative: s
    });
    return w.useCallback(f => {
        if (Sw(f, n)) {
            f.preventDefault();
            let h = r !== void 0 ? r : Rs(u) === Rs(c);
            a(e, {
                replace: h,
                state: o,
                preventScrollReset: i,
                relative: s,
                viewTransition: l
            })
        }
    }
    , [u, a, c, r, o, n, e, i, s, l])
}
var Yd = ["light", "dark"]
  , jw = "(prefers-color-scheme: dark)"
  , Rw = w.createContext(void 0)
  , Ow = {
    setTheme: e => {}
    ,
    themes: []
}
  , _w = () => {
    var e;
    return (e = w.useContext(Rw)) != null ? e : Ow
}
;
w.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: i, value: s, attrs: l, nonce: a}) => {
    let u = i === "system"
      , c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map(k => `'${k}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , f = o ? Yd.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , h = (k, g=!1, x=!0) => {
        let m = s ? s[k] : k
          , p = g ? k + "|| ''" : `'${m}'`
          , y = "";
        return o && x && !g && Yd.includes(k) && (y += `d.style.colorScheme = '${k}';`),
        n === "class" ? g || m ? y += `c.add(${p})` : y += "null" : m && (y += `d[s](n,${p})`),
        y
    }
      , d = e ? `!function(){${c}${h(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${jw}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${h(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + h(i, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${h(s ? "x[e]" : "e", !0)}}else{${h(i, !1, !1)};}${f}}catch(t){}}();`;
    return w.createElement("script", {
        nonce: a,
        dangerouslySetInnerHTML: {
            __html: d
        }
    })
}
);
var Aw = e => {
    switch (e) {
    case "success":
        return Dw;
    case "info":
        return Fw;
    case "warning":
        return Iw;
    case "error":
        return $w;
    default:
        return null
    }
}
  , Mw = Array(12).fill(0)
  , Lw = ({visible: e, className: t}) => R.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, R.createElement("div", {
    className: "sonner-spinner"
}, Mw.map( (n, r) => R.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , Dw = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , Iw = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , Fw = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , $w = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, R.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , Uw = R.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, R.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), R.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , Bw = () => {
    let[e,t] = R.useState(document.hidden);
    return R.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Qa = 1
  , Vw = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Qa++
              , i = this.toasts.find(l => l.id === o)
              , s = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i ? this.toasts = this.toasts.map(l => l.id === o ? (this.publish({
                ...l,
                ...e,
                id: o,
                title: n
            }),
            {
                ...l,
                ...e,
                id: o,
                dismissible: s,
                title: n
            }) : l) : this.addToast({
                title: n,
                ...r,
                dismissible: s,
                id: o
            }),
            o
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), o = n !== void 0, i, s = r.then(async a => {
                if (i = ["resolve", a],
                R.isValidElement(a))
                    o = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: a
                    });
                else if (Hw(a) && !a.ok) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${a.status}`) : t.error
                      , c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${a.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                } else if (t.success !== void 0) {
                    o = !1;
                    let u = typeof t.success == "function" ? await t.success(a) : t.success
                      , c = typeof t.description == "function" ? await t.description(a) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: c
                    })
                }
            }
            ).catch(async a => {
                if (i = ["reject", a],
                t.error !== void 0) {
                    o = !1;
                    let u = typeof t.error == "function" ? await t.error(a) : t.error
                      , c = typeof t.description == "function" ? await t.description(a) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c
                    })
                }
            }
            ).finally( () => {
                var a;
                o && (this.dismiss(n),
                n = void 0),
                (a = t.finally) == null || a.call(t)
            }
            ), l = () => new Promise( (a, u) => s.then( () => i[0] === "reject" ? u(i[1]) : a(i[1])).catch(u));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: l
            } : Object.assign(n, {
                unwrap: l
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Qa++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , Fe = new Vw
  , Ww = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Qa++;
    return Fe.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , Hw = e => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number"
  , Qw = Ww
  , Kw = () => Fe.toasts
  , Yw = () => Fe.getActiveToasts();
Object.assign(Qw, {
    success: Fe.success,
    info: Fe.info,
    warning: Fe.warning,
    error: Fe.error,
    custom: Fe.custom,
    message: Fe.message,
    promise: Fe.promise,
    dismiss: Fe.dismiss,
    loading: Fe.loading
}, {
    getHistory: Kw,
    getToasts: Yw
});
function Gw(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
Gw(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Ui(e) {
    return e.label !== void 0
}
var qw = 3
  , Xw = "32px"
  , Jw = "16px"
  , Gd = 4e3
  , Zw = 356
  , ex = 14
  , tx = 20
  , nx = 200;
function ft(...e) {
    return e.filter(Boolean).join(" ")
}
function rx(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var ox = e => {
    var t, n, r, o, i, s, l, a, u, c, f;
    let {invert: h, toast: d, unstyled: k, interacting: g, setHeights: x, visibleToasts: m, heights: p, index: y, toasts: S, expanded: E, removeToast: C, defaultRichColors: b, closeButton: T, style: _, cancelButtonStyle: O, actionButtonStyle: F, className: D="", descriptionClassName: Q="", duration: A, position: G, gap: $, loadingIcon: V, expandByDefault: z, classNames: N, icons: M, closeButtonAriaLabel: W="Close toast", pauseWhenPageIsHidden: I} = e
      , [K,q] = R.useState(null)
      , [he,Pe] = R.useState(null)
      , [Z,fr] = R.useState(!1)
      , [Jt,Fn] = R.useState(!1)
      , [Zt,pr] = R.useState(!1)
      , [en,wi] = R.useState(!1)
      , [cl,xi] = R.useState(!1)
      , [dl,fo] = R.useState(0)
      , [hr,vc] = R.useState(0)
      , po = R.useRef(d.duration || A || Gd)
      , wc = R.useRef(null)
      , $n = R.useRef(null)
      , Cy = y === 0
      , by = y + 1 <= m
      , et = d.type
      , mr = d.dismissible !== !1
      , Py = d.className || ""
      , zy = d.descriptionClassName || ""
      , ki = R.useMemo( () => p.findIndex(U => U.toastId === d.id) || 0, [p, d.id])
      , Ny = R.useMemo( () => {
        var U;
        return (U = d.closeButton) != null ? U : T
    }
    , [d.closeButton, T])
      , xc = R.useMemo( () => d.duration || A || Gd, [d.duration, A])
      , fl = R.useRef(0)
      , yr = R.useRef(0)
      , kc = R.useRef(0)
      , gr = R.useRef(null)
      , [Ty,jy] = G.split("-")
      , Sc = R.useMemo( () => p.reduce( (U, te, se) => se >= ki ? U : U + te.height, 0), [p, ki])
      , Ec = Bw()
      , Ry = d.invert || h
      , pl = et === "loading";
    yr.current = R.useMemo( () => ki * $ + Sc, [ki, Sc]),
    R.useEffect( () => {
        po.current = xc
    }
    , [xc]),
    R.useEffect( () => {
        fr(!0)
    }
    , []),
    R.useEffect( () => {
        let U = $n.current;
        if (U) {
            let te = U.getBoundingClientRect().height;
            return vc(te),
            x(se => [{
                toastId: d.id,
                height: te,
                position: d.position
            }, ...se]),
            () => x(se => se.filter(at => at.toastId !== d.id))
        }
    }
    , [x, d.id]),
    R.useLayoutEffect( () => {
        if (!Z)
            return;
        let U = $n.current
          , te = U.style.height;
        U.style.height = "auto";
        let se = U.getBoundingClientRect().height;
        U.style.height = te,
        vc(se),
        x(at => at.find(ut => ut.toastId === d.id) ? at.map(ut => ut.toastId === d.id ? {
            ...ut,
            height: se
        } : ut) : [{
            toastId: d.id,
            height: se,
            position: d.position
        }, ...at])
    }
    , [Z, d.title, d.description, x, d.id]);
    let tn = R.useCallback( () => {
        Fn(!0),
        fo(yr.current),
        x(U => U.filter(te => te.toastId !== d.id)),
        setTimeout( () => {
            C(d)
        }
        , nx)
    }
    , [d, C, x, yr]);
    R.useEffect( () => {
        if (d.promise && et === "loading" || d.duration === 1 / 0 || d.type === "loading")
            return;
        let U;
        return E || g || I && Ec ? ( () => {
            if (kc.current < fl.current) {
                let te = new Date().getTime() - fl.current;
                po.current = po.current - te
            }
            kc.current = new Date().getTime()
        }
        )() : po.current !== 1 / 0 && (fl.current = new Date().getTime(),
        U = setTimeout( () => {
            var te;
            (te = d.onAutoClose) == null || te.call(d, d),
            tn()
        }
        , po.current)),
        () => clearTimeout(U)
    }
    , [E, g, d, et, I, Ec, tn]),
    R.useEffect( () => {
        d.delete && tn()
    }
    , [tn, d.delete]);
    function Oy() {
        var U, te, se;
        return M != null && M.loading ? R.createElement("div", {
            className: ft(N == null ? void 0 : N.loader, (U = d == null ? void 0 : d.classNames) == null ? void 0 : U.loader, "sonner-loader"),
            "data-visible": et === "loading"
        }, M.loading) : V ? R.createElement("div", {
            className: ft(N == null ? void 0 : N.loader, (te = d == null ? void 0 : d.classNames) == null ? void 0 : te.loader, "sonner-loader"),
            "data-visible": et === "loading"
        }, V) : R.createElement(Lw, {
            className: ft(N == null ? void 0 : N.loader, (se = d == null ? void 0 : d.classNames) == null ? void 0 : se.loader),
            visible: et === "loading"
        })
    }
    return R.createElement("li", {
        tabIndex: 0,
        ref: $n,
        className: ft(D, Py, N == null ? void 0 : N.toast, (t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast, N == null ? void 0 : N.default, N == null ? void 0 : N[et], (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[et]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = d.richColors) != null ? r : b,
        "data-styled": !(d.jsx || d.unstyled || k),
        "data-mounted": Z,
        "data-promise": !!d.promise,
        "data-swiped": cl,
        "data-removed": Jt,
        "data-visible": by,
        "data-y-position": Ty,
        "data-x-position": jy,
        "data-index": y,
        "data-front": Cy,
        "data-swiping": Zt,
        "data-dismissible": mr,
        "data-type": et,
        "data-invert": Ry,
        "data-swipe-out": en,
        "data-swipe-direction": he,
        "data-expanded": !!(E || z && Z),
        style: {
            "--index": y,
            "--toasts-before": y,
            "--z-index": S.length - y,
            "--offset": `${Jt ? dl : yr.current}px`,
            "--initial-height": z ? "auto" : `${hr}px`,
            ..._,
            ...d.style
        },
        onDragEnd: () => {
            pr(!1),
            q(null),
            gr.current = null
        }
        ,
        onPointerDown: U => {
            pl || !mr || (wc.current = new Date,
            fo(yr.current),
            U.target.setPointerCapture(U.pointerId),
            U.target.tagName !== "BUTTON" && (pr(!0),
            gr.current = {
                x: U.clientX,
                y: U.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var U, te, se, at;
            if (en || !mr)
                return;
            gr.current = null;
            let ut = Number(((U = $n.current) == null ? void 0 : U.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , nn = Number(((te = $n.current) == null ? void 0 : te.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , Un = new Date().getTime() - ((se = wc.current) == null ? void 0 : se.getTime())
              , ct = K === "x" ? ut : nn
              , rn = Math.abs(ct) / Un;
            if (Math.abs(ct) >= tx || rn > .11) {
                fo(yr.current),
                (at = d.onDismiss) == null || at.call(d, d),
                Pe(K === "x" ? ut > 0 ? "right" : "left" : nn > 0 ? "down" : "up"),
                tn(),
                wi(!0),
                xi(!1);
                return
            }
            pr(!1),
            q(null)
        }
        ,
        onPointerMove: U => {
            var te, se, at, ut;
            if (!gr.current || !mr || ((te = window.getSelection()) == null ? void 0 : te.toString().length) > 0)
                return;
            let nn = U.clientY - gr.current.y
              , Un = U.clientX - gr.current.x
              , ct = (se = e.swipeDirections) != null ? se : rx(G);
            !K && (Math.abs(Un) > 1 || Math.abs(nn) > 1) && q(Math.abs(Un) > Math.abs(nn) ? "x" : "y");
            let rn = {
                x: 0,
                y: 0
            };
            K === "y" ? (ct.includes("top") || ct.includes("bottom")) && (ct.includes("top") && nn < 0 || ct.includes("bottom") && nn > 0) && (rn.y = nn) : K === "x" && (ct.includes("left") || ct.includes("right")) && (ct.includes("left") && Un < 0 || ct.includes("right") && Un > 0) && (rn.x = Un),
            (Math.abs(rn.x) > 0 || Math.abs(rn.y) > 0) && xi(!0),
            (at = $n.current) == null || at.style.setProperty("--swipe-amount-x", `${rn.x}px`),
            (ut = $n.current) == null || ut.style.setProperty("--swipe-amount-y", `${rn.y}px`)
        }
    }, Ny && !d.jsx ? R.createElement("button", {
        "aria-label": W,
        "data-disabled": pl,
        "data-close-button": !0,
        onClick: pl || !mr ? () => {}
        : () => {
            var U;
            tn(),
            (U = d.onDismiss) == null || U.call(d, d)
        }
        ,
        className: ft(N == null ? void 0 : N.closeButton, (o = d == null ? void 0 : d.classNames) == null ? void 0 : o.closeButton)
    }, (i = M == null ? void 0 : M.close) != null ? i : Uw) : null, d.jsx || w.isValidElement(d.title) ? d.jsx ? d.jsx : typeof d.title == "function" ? d.title() : d.title : R.createElement(R.Fragment, null, et || d.icon || d.promise ? R.createElement("div", {
        "data-icon": "",
        className: ft(N == null ? void 0 : N.icon, (s = d == null ? void 0 : d.classNames) == null ? void 0 : s.icon)
    }, d.promise || d.type === "loading" && !d.icon ? d.icon || Oy() : null, d.type !== "loading" ? d.icon || (M == null ? void 0 : M[et]) || Aw(et) : null) : null, R.createElement("div", {
        "data-content": "",
        className: ft(N == null ? void 0 : N.content, (l = d == null ? void 0 : d.classNames) == null ? void 0 : l.content)
    }, R.createElement("div", {
        "data-title": "",
        className: ft(N == null ? void 0 : N.title, (a = d == null ? void 0 : d.classNames) == null ? void 0 : a.title)
    }, typeof d.title == "function" ? d.title() : d.title), d.description ? R.createElement("div", {
        "data-description": "",
        className: ft(Q, zy, N == null ? void 0 : N.description, (u = d == null ? void 0 : d.classNames) == null ? void 0 : u.description)
    }, typeof d.description == "function" ? d.description() : d.description) : null), w.isValidElement(d.cancel) ? d.cancel : d.cancel && Ui(d.cancel) ? R.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: d.cancelButtonStyle || O,
        onClick: U => {
            var te, se;
            Ui(d.cancel) && mr && ((se = (te = d.cancel).onClick) == null || se.call(te, U),
            tn())
        }
        ,
        className: ft(N == null ? void 0 : N.cancelButton, (c = d == null ? void 0 : d.classNames) == null ? void 0 : c.cancelButton)
    }, d.cancel.label) : null, w.isValidElement(d.action) ? d.action : d.action && Ui(d.action) ? R.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: d.actionButtonStyle || F,
        onClick: U => {
            var te, se;
            Ui(d.action) && ((se = (te = d.action).onClick) == null || se.call(te, U),
            !U.defaultPrevented && tn())
        }
        ,
        className: ft(N == null ? void 0 : N.actionButton, (f = d == null ? void 0 : d.classNames) == null ? void 0 : f.actionButton)
    }, d.action.label) : null))
}
;
function qd() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function ix(e, t) {
    let n = {};
    return [e, t].forEach( (r, o) => {
        let i = o === 1
          , s = i ? "--mobile-offset" : "--offset"
          , l = i ? Jw : Xw;
        function a(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? a(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${s}-${u}`] = l : n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }
        ) : a(l)
    }
    ),
    n
}
var sx = w.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: o=["altKey", "KeyT"], expand: i, closeButton: s, className: l, offset: a, mobileOffset: u, theme: c="light", richColors: f, duration: h, style: d, visibleToasts: k=qw, toastOptions: g, dir: x=qd(), gap: m=ex, loadingIcon: p, icons: y, containerAriaLabel: S="Notifications", pauseWhenPageIsHidden: E} = e
      , [C,b] = R.useState([])
      , T = R.useMemo( () => Array.from(new Set([r].concat(C.filter(I => I.position).map(I => I.position)))), [C, r])
      , [_,O] = R.useState([])
      , [F,D] = R.useState(!1)
      , [Q,A] = R.useState(!1)
      , [G,$] = R.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , V = R.useRef(null)
      , z = o.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , N = R.useRef(null)
      , M = R.useRef(!1)
      , W = R.useCallback(I => {
        b(K => {
            var q;
            return (q = K.find(he => he.id === I.id)) != null && q.delete || Fe.dismiss(I.id),
            K.filter( ({id: he}) => he !== I.id)
        }
        )
    }
    , []);
    return R.useEffect( () => Fe.subscribe(I => {
        if (I.dismiss) {
            b(K => K.map(q => q.id === I.id ? {
                ...q,
                delete: !0
            } : q));
            return
        }
        setTimeout( () => {
            Uh.flushSync( () => {
                b(K => {
                    let q = K.findIndex(he => he.id === I.id);
                    return q !== -1 ? [...K.slice(0, q), {
                        ...K[q],
                        ...I
                    }, ...K.slice(q + 1)] : [I, ...K]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    R.useEffect( () => {
        if (c !== "system") {
            $(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")),
        typeof window > "u")
            return;
        let I = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            I.addEventListener("change", ({matches: K}) => {
                $(K ? "dark" : "light")
            }
            )
        } catch {
            I.addListener( ({matches: q}) => {
                try {
                    $(q ? "dark" : "light")
                } catch (he) {
                    console.error(he)
                }
            }
            )
        }
    }
    , [c]),
    R.useEffect( () => {
        C.length <= 1 && D(!1)
    }
    , [C]),
    R.useEffect( () => {
        let I = K => {
            var q, he;
            o.every(Pe => K[Pe] || K.code === Pe) && (D(!0),
            (q = V.current) == null || q.focus()),
            K.code === "Escape" && (document.activeElement === V.current || (he = V.current) != null && he.contains(document.activeElement)) && D(!1)
        }
        ;
        return document.addEventListener("keydown", I),
        () => document.removeEventListener("keydown", I)
    }
    , [o]),
    R.useEffect( () => {
        if (V.current)
            return () => {
                N.current && (N.current.focus({
                    preventScroll: !0
                }),
                N.current = null,
                M.current = !1)
            }
    }
    , [V.current]),
    R.createElement("section", {
        ref: t,
        "aria-label": `${S} ${z}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, T.map( (I, K) => {
        var q;
        let[he,Pe] = I.split("-");
        return C.length ? R.createElement("ol", {
            key: I,
            dir: x === "auto" ? qd() : x,
            tabIndex: -1,
            ref: V,
            className: l,
            "data-sonner-toaster": !0,
            "data-theme": G,
            "data-y-position": he,
            "data-lifted": F && C.length > 1 && !i,
            "data-x-position": Pe,
            style: {
                "--front-toast-height": `${((q = _[0]) == null ? void 0 : q.height) || 0}px`,
                "--width": `${Zw}px`,
                "--gap": `${m}px`,
                ...d,
                ...ix(a, u)
            },
            onBlur: Z => {
                M.current && !Z.currentTarget.contains(Z.relatedTarget) && (M.current = !1,
                N.current && (N.current.focus({
                    preventScroll: !0
                }),
                N.current = null))
            }
            ,
            onFocus: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || M.current || (M.current = !0,
                N.current = Z.relatedTarget)
            }
            ,
            onMouseEnter: () => D(!0),
            onMouseMove: () => D(!0),
            onMouseLeave: () => {
                Q || D(!1)
            }
            ,
            onDragEnd: () => D(!1),
            onPointerDown: Z => {
                Z.target instanceof HTMLElement && Z.target.dataset.dismissible === "false" || A(!0)
            }
            ,
            onPointerUp: () => A(!1)
        }, C.filter(Z => !Z.position && K === 0 || Z.position === I).map( (Z, fr) => {
            var Jt, Fn;
            return R.createElement(ox, {
                key: Z.id,
                icons: y,
                index: fr,
                toast: Z,
                defaultRichColors: f,
                duration: (Jt = g == null ? void 0 : g.duration) != null ? Jt : h,
                className: g == null ? void 0 : g.className,
                descriptionClassName: g == null ? void 0 : g.descriptionClassName,
                invert: n,
                visibleToasts: k,
                closeButton: (Fn = g == null ? void 0 : g.closeButton) != null ? Fn : s,
                interacting: Q,
                position: I,
                style: g == null ? void 0 : g.style,
                unstyled: g == null ? void 0 : g.unstyled,
                classNames: g == null ? void 0 : g.classNames,
                cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                removeToast: W,
                toasts: C.filter(Zt => Zt.position == Z.position),
                heights: _.filter(Zt => Zt.position == Z.position),
                setHeights: O,
                expandByDefault: i,
                gap: m,
                loadingIcon: p,
                expanded: F,
                pauseWhenPageIsHidden: E,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const lx = ({...e}) => {
    const {theme: t="system"} = _w();
    return v.jsx(sx, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
  , ax = 1
  , ux = 1e6;
let Vl = 0;
function cx() {
    return Vl = (Vl + 1) % Number.MAX_SAFE_INTEGER,
    Vl.toString()
}
const Wl = new Map
  , Xd = e => {
    if (Wl.has(e))
        return;
    const t = setTimeout( () => {
        Wl.delete(e),
        Do({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , ux);
    Wl.set(e, t)
}
  , dx = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, ax)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? Xd(n) : e.toasts.forEach(r => {
                Xd(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , rs = [];
let os = {
    toasts: []
};
function Do(e) {
    os = dx(os, e),
    rs.forEach(t => {
        t(os)
    }
    )
}
function fx({...e}) {
    const t = cx()
      , n = o => Do({
        type: "UPDATE_TOAST",
        toast: {
            ...o,
            id: t
        }
    })
      , r = () => Do({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Do({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function px() {
    const [e,t] = w.useState(os);
    return w.useEffect( () => (rs.push(t),
    () => {
        const n = rs.indexOf(t);
        n > -1 && rs.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: fx,
        dismiss: n => Do({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function ve(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Jd(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function am(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = Jd(o, t);
            return !n && typeof i == "function" && (n = !0),
            i
        }
        );
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const i = r[o];
                    typeof i == "function" ? i() : Jd(e[o], null)
                }
            }
    }
}
function St(...e) {
    return w.useCallback(am(...e), e)
}
function nl(e, t=[]) {
    let n = [];
    function r(i, s) {
        const l = w.createContext(s)
          , a = n.length;
        n = [...n, s];
        const u = f => {
            var m;
            const {scope: h, children: d, ...k} = f
              , g = ((m = h == null ? void 0 : h[e]) == null ? void 0 : m[a]) || l
              , x = w.useMemo( () => k, Object.values(k));
            return v.jsx(g.Provider, {
                value: x,
                children: d
            })
        }
        ;
        u.displayName = i + "Provider";
        function c(f, h) {
            var g;
            const d = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[a]) || l
              , k = w.useContext(d);
            if (k)
                return k;
            if (s !== void 0)
                return s;
            throw new Error(`\`${f}\` must be used within \`${i}\``)
        }
        return [u, c]
    }
    const o = () => {
        const i = n.map(s => w.createContext(s));
        return function(l) {
            const a = (l == null ? void 0 : l[e]) || i;
            return w.useMemo( () => ({
                [`__scope${e}`]: {
                    ...l,
                    [e]: a
                }
            }), [l, a])
        }
    }
    ;
    return o.scopeName = e,
    [r, hx(o, ...t)]
}
function hx(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce( (l, {useScope: a, scopeName: u}) => {
                const f = a(i)[`__scope${u}`];
                return {
                    ...l,
                    ...f
                }
            }
            , {});
            return w.useMemo( () => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function Ka(e) {
    const t = mx(e)
      , n = w.forwardRef( (r, o) => {
        const {children: i, ...s} = r
          , l = w.Children.toArray(i)
          , a = l.find(gx);
        if (a) {
            const u = a.props.children
              , c = l.map(f => f === a ? w.Children.count(u) > 1 ? w.Children.only(null) : w.isValidElement(u) ? u.props.children : null : f);
            return v.jsx(t, {
                ...s,
                ref: o,
                children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null
            })
        }
        return v.jsx(t, {
            ...s,
            ref: o,
            children: i
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
function mx(e) {
    const t = w.forwardRef( (n, r) => {
        const {children: o, ...i} = n;
        if (w.isValidElement(o)) {
            const s = wx(o)
              , l = vx(i, o.props);
            return o.type !== w.Fragment && (l.ref = r ? am(r, s) : s),
            w.cloneElement(o, l)
        }
        return w.Children.count(o) > 1 ? w.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var um = Symbol("radix.slottable");
function yx(e) {
    const t = ({children: n}) => v.jsx(v.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = um,
    t
}
function gx(e) {
    return w.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === um
}
function vx(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
            const a = i(...l);
            return o(...l),
            a
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function wx(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning" in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function xx(e) {
    const t = e + "CollectionProvider"
      , [n,r] = nl(t)
      , [o,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , s = g => {
        const {scope: x, children: m} = g
          , p = R.useRef(null)
          , y = R.useRef(new Map).current;
        return v.jsx(o, {
            scope: x,
            itemMap: y,
            collectionRef: p,
            children: m
        })
    }
    ;
    s.displayName = t;
    const l = e + "CollectionSlot"
      , a = Ka(l)
      , u = R.forwardRef( (g, x) => {
        const {scope: m, children: p} = g
          , y = i(l, m)
          , S = St(x, y.collectionRef);
        return v.jsx(a, {
            ref: S,
            children: p
        })
    }
    );
    u.displayName = l;
    const c = e + "CollectionItemSlot"
      , f = "data-radix-collection-item"
      , h = Ka(c)
      , d = R.forwardRef( (g, x) => {
        const {scope: m, children: p, ...y} = g
          , S = R.useRef(null)
          , E = St(x, S)
          , C = i(c, m);
        return R.useEffect( () => (C.itemMap.set(S, {
            ref: S,
            ...y
        }),
        () => void C.itemMap.delete(S))),
        v.jsx(h, {
            [f]: "",
            ref: E,
            children: p
        })
    }
    );
    d.displayName = c;
    function k(g) {
        const x = i(e + "CollectionConsumer", g);
        return R.useCallback( () => {
            const p = x.collectionRef.current;
            if (!p)
                return [];
            const y = Array.from(p.querySelectorAll(`[${f}]`));
            return Array.from(x.itemMap.values()).sort( (C, b) => y.indexOf(C.ref.current) - y.indexOf(b.ref.current))
        }
        , [x.collectionRef, x.itemMap])
    }
    return [{
        Provider: s,
        Slot: u,
        ItemSlot: d
    }, k, r]
}
var kx = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , He = kx.reduce( (e, t) => {
    const n = Ka(`Primitive.${t}`)
      , r = w.forwardRef( (o, i) => {
        const {asChild: s, ...l} = o
          , a = s ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        v.jsx(a, {
            ...l,
            ref: i
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function cm(e, t) {
    e && hi.flushSync( () => e.dispatchEvent(t))
}
function On(e) {
    const t = w.useRef(e);
    return w.useEffect( () => {
        t.current = e
    }
    ),
    w.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function Sx(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = On(e);
    w.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var Ex = "DismissableLayer", Ya = "dismissableLayer.update", Cx = "dismissableLayer.pointerDownOutside", bx = "dismissableLayer.focusOutside", Zd, dm = w.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), nc = w.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: l, ...a} = e
      , u = w.useContext(dm)
      , [c,f] = w.useState(null)
      , h = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,d] = w.useState({})
      , k = St(t, b => f(b))
      , g = Array.from(u.layers)
      , [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1)
      , m = g.indexOf(x)
      , p = c ? g.indexOf(c) : -1
      , y = u.layersWithOutsidePointerEventsDisabled.size > 0
      , S = p >= m
      , E = zx(b => {
        const T = b.target
          , _ = [...u.branches].some(O => O.contains(T));
        !S || _ || (o == null || o(b),
        s == null || s(b),
        b.defaultPrevented || l == null || l())
    }
    , h)
      , C = Nx(b => {
        const T = b.target;
        [...u.branches].some(O => O.contains(T)) || (i == null || i(b),
        s == null || s(b),
        b.defaultPrevented || l == null || l())
    }
    , h);
    return Sx(b => {
        p === u.layers.size - 1 && (r == null || r(b),
        !b.defaultPrevented && l && (b.preventDefault(),
        l()))
    }
    , h),
    w.useEffect( () => {
        if (c)
            return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Zd = h.body.style.pointerEvents,
            h.body.style.pointerEvents = "none"),
            u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            ef(),
            () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Zd)
            }
    }
    , [c, h, n, u]),
    w.useEffect( () => () => {
        c && (u.layers.delete(c),
        u.layersWithOutsidePointerEventsDisabled.delete(c),
        ef())
    }
    , [c, u]),
    w.useEffect( () => {
        const b = () => d({});
        return document.addEventListener(Ya, b),
        () => document.removeEventListener(Ya, b)
    }
    , []),
    v.jsx(He.div, {
        ...a,
        ref: k,
        style: {
            pointerEvents: y ? S ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: ve(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: ve(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: ve(e.onPointerDownCapture, E.onPointerDownCapture)
    })
}
);
nc.displayName = Ex;
var Px = "DismissableLayerBranch"
  , fm = w.forwardRef( (e, t) => {
    const n = w.useContext(dm)
      , r = w.useRef(null)
      , o = St(t, r);
    return w.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    v.jsx(He.div, {
        ...e,
        ref: o
    })
}
);
fm.displayName = Px;
function zx(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = On(e)
      , r = w.useRef(!1)
      , o = w.useRef( () => {}
    );
    return w.useEffect( () => {
        const i = l => {
            if (l.target && !r.current) {
                let a = function() {
                    pm(Cx, n, u, {
                        discrete: !0
                    })
                };
                const u = {
                    originalEvent: l
                };
                l.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = a,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : a()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , s = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(s),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function Nx(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = On(e)
      , r = w.useRef(!1);
    return w.useEffect( () => {
        const o = i => {
            i.target && !r.current && pm(bx, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function ef() {
    const e = new CustomEvent(Ya);
    document.dispatchEvent(e)
}
function pm(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? cm(o, i) : o.dispatchEvent(i)
}
var Tx = nc
  , jx = fm
  , _n = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {}
  , Rx = "Portal"
  , hm = w.forwardRef( (e, t) => {
    var l;
    const {container: n, ...r} = e
      , [o,i] = w.useState(!1);
    _n( () => i(!0), []);
    const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
    return s ? Uh.createPortal(v.jsx(He.div, {
        ...r,
        ref: t
    }), s) : null
}
);
hm.displayName = Rx;
function Ox(e, t) {
    return w.useReducer( (n, r) => t[n][r] ?? n, e)
}
var rc = e => {
    const {present: t, children: n} = e
      , r = _x(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : w.Children.only(n)
      , i = St(r.ref, Ax(o));
    return typeof n == "function" || r.isPresent ? w.cloneElement(o, {
        ref: i
    }) : null
}
;
rc.displayName = "Presence";
function _x(e) {
    const [t,n] = w.useState()
      , r = w.useRef(null)
      , o = w.useRef(e)
      , i = w.useRef("none")
      , s = e ? "mounted" : "unmounted"
      , [l,a] = Ox(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return w.useEffect( () => {
        const u = Bi(r.current);
        i.current = l === "mounted" ? u : "none"
    }
    , [l]),
    _n( () => {
        const u = r.current
          , c = o.current;
        if (c !== e) {
            const h = i.current
              , d = Bi(u);
            e ? a("MOUNT") : d === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(c && h !== d ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, a]),
    _n( () => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window
              , f = d => {
                const g = Bi(r.current).includes(d.animationName);
                if (d.target === t && g && (a("ANIMATION_END"),
                !o.current)) {
                    const x = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    u = c.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x)
                    }
                    )
                }
            }
              , h = d => {
                d.target === t && (i.current = Bi(r.current))
            }
            ;
            return t.addEventListener("animationstart", h),
            t.addEventListener("animationcancel", f),
            t.addEventListener("animationend", f),
            () => {
                c.clearTimeout(u),
                t.removeEventListener("animationstart", h),
                t.removeEventListener("animationcancel", f),
                t.removeEventListener("animationend", f)
            }
        } else
            a("ANIMATION_END")
    }
    , [t, a]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(l),
        ref: w.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null,
            n(u)
        }
        , [])
    }
}
function Bi(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function Ax(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning" in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var Mx = If[" useInsertionEffect ".trim().toString()] || _n;
function Lx({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [o,i,s] = Dx({
        defaultProp: t,
        onChange: n
    })
      , l = e !== void 0
      , a = l ? e : o;
    {
        const c = w.useRef(e !== void 0);
        w.useEffect( () => {
            const f = c.current;
            f !== l && console.warn(`${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            c.current = l
        }
        , [l, r])
    }
    const u = w.useCallback(c => {
        var f;
        if (l) {
            const h = Ix(c) ? c(e) : c;
            h !== e && ((f = s.current) == null || f.call(s, h))
        } else
            i(c)
    }
    , [l, e, i, s]);
    return [a, u]
}
function Dx({defaultProp: e, onChange: t}) {
    const [n,r] = w.useState(e)
      , o = w.useRef(n)
      , i = w.useRef(t);
    return Mx( () => {
        i.current = t
    }
    , [t]),
    w.useEffect( () => {
        var s;
        o.current !== n && ((s = i.current) == null || s.call(i, n),
        o.current = n)
    }
    , [n, o]),
    [n, r, i]
}
function Ix(e) {
    return typeof e == "function"
}
var Fx = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , $x = "VisuallyHidden"
  , rl = w.forwardRef( (e, t) => v.jsx(He.span, {
    ...e,
    ref: t,
    style: {
        ...Fx,
        ...e.style
    }
}));
rl.displayName = $x;
var Ux = rl
  , oc = "ToastProvider"
  , [ic,Bx,Vx] = xx("Toast")
  , [mm,vE] = nl("Toast", [Vx])
  , [Wx,ol] = mm(oc)
  , ym = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: o="right", swipeThreshold: i=50, children: s} = e
      , [l,a] = w.useState(null)
      , [u,c] = w.useState(0)
      , f = w.useRef(!1)
      , h = w.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${oc}\`. Expected non-empty \`string\`.`),
    v.jsx(ic.Provider, {
        scope: t,
        children: v.jsx(Wx, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: o,
            swipeThreshold: i,
            toastCount: u,
            viewport: l,
            onViewportChange: a,
            onToastAdd: w.useCallback( () => c(d => d + 1), []),
            onToastRemove: w.useCallback( () => c(d => d - 1), []),
            isFocusedToastEscapeKeyDownRef: f,
            isClosePausedRef: h,
            children: s
        })
    })
}
;
ym.displayName = oc;
var gm = "ToastViewport"
  , Hx = ["F8"]
  , Ga = "toast.viewportPause"
  , qa = "toast.viewportResume"
  , vm = w.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=Hx, label: o="Notifications ({hotkey})", ...i} = e
      , s = ol(gm, n)
      , l = Bx(n)
      , a = w.useRef(null)
      , u = w.useRef(null)
      , c = w.useRef(null)
      , f = w.useRef(null)
      , h = St(t, f, s.onViewportChange)
      , d = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , k = s.toastCount > 0;
    w.useEffect( () => {
        const x = m => {
            var y;
            r.length !== 0 && r.every(S => m[S] || m.code === S) && ((y = f.current) == null || y.focus())
        }
        ;
        return document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
    }
    , [r]),
    w.useEffect( () => {
        const x = a.current
          , m = f.current;
        if (k && x && m) {
            const p = () => {
                if (!s.isClosePausedRef.current) {
                    const C = new CustomEvent(Ga);
                    m.dispatchEvent(C),
                    s.isClosePausedRef.current = !0
                }
            }
              , y = () => {
                if (s.isClosePausedRef.current) {
                    const C = new CustomEvent(qa);
                    m.dispatchEvent(C),
                    s.isClosePausedRef.current = !1
                }
            }
              , S = C => {
                !x.contains(C.relatedTarget) && y()
            }
              , E = () => {
                x.contains(document.activeElement) || y()
            }
            ;
            return x.addEventListener("focusin", p),
            x.addEventListener("focusout", S),
            x.addEventListener("pointermove", p),
            x.addEventListener("pointerleave", E),
            window.addEventListener("blur", p),
            window.addEventListener("focus", y),
            () => {
                x.removeEventListener("focusin", p),
                x.removeEventListener("focusout", S),
                x.removeEventListener("pointermove", p),
                x.removeEventListener("pointerleave", E),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", y)
            }
        }
    }
    , [k, s.isClosePausedRef]);
    const g = w.useCallback( ({tabbingDirection: x}) => {
        const p = l().map(y => {
            const S = y.ref.current
              , E = [S, ...o1(S)];
            return x === "forwards" ? E : E.reverse()
        }
        );
        return (x === "forwards" ? p.reverse() : p).flat()
    }
    , [l]);
    return w.useEffect( () => {
        const x = f.current;
        if (x) {
            const m = p => {
                var E, C, b;
                const y = p.altKey || p.ctrlKey || p.metaKey;
                if (p.key === "Tab" && !y) {
                    const T = document.activeElement
                      , _ = p.shiftKey;
                    if (p.target === x && _) {
                        (E = u.current) == null || E.focus();
                        return
                    }
                    const D = g({
                        tabbingDirection: _ ? "backwards" : "forwards"
                    })
                      , Q = D.findIndex(A => A === T);
                    Hl(D.slice(Q + 1)) ? p.preventDefault() : _ ? (C = u.current) == null || C.focus() : (b = c.current) == null || b.focus()
                }
            }
            ;
            return x.addEventListener("keydown", m),
            () => x.removeEventListener("keydown", m)
        }
    }
    , [l, g]),
    v.jsxs(jx, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", d),
        tabIndex: -1,
        style: {
            pointerEvents: k ? void 0 : "none"
        },
        children: [k && v.jsx(Xa, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const x = g({
                    tabbingDirection: "forwards"
                });
                Hl(x)
            }
        }), v.jsx(ic.Slot, {
            scope: n,
            children: v.jsx(He.ol, {
                tabIndex: -1,
                ...i,
                ref: h
            })
        }), k && v.jsx(Xa, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const x = g({
                    tabbingDirection: "backwards"
                });
                Hl(x)
            }
        })]
    })
}
);
vm.displayName = gm;
var wm = "ToastFocusProxy"
  , Xa = w.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...o} = e
      , i = ol(wm, n);
    return v.jsx(rl, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: s => {
            var u;
            const l = s.relatedTarget;
            !((u = i.viewport) != null && u.contains(l)) && r()
        }
    })
}
);
Xa.displayName = wm;
var gi = "Toast"
  , Qx = "toast.swipeStart"
  , Kx = "toast.swipeMove"
  , Yx = "toast.swipeCancel"
  , Gx = "toast.swipeEnd"
  , xm = w.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s} = e
      , [l,a] = Lx({
        prop: r,
        defaultProp: o ?? !0,
        onChange: i,
        caller: gi
    });
    return v.jsx(rc, {
        present: n || l,
        children: v.jsx(Jx, {
            open: l,
            ...s,
            ref: t,
            onClose: () => a(!1),
            onPause: On(e.onPause),
            onResume: On(e.onResume),
            onSwipeStart: ve(e.onSwipeStart, u => {
                u.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: ve(e.onSwipeMove, u => {
                const {x: c, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`)
            }
            ),
            onSwipeCancel: ve(e.onSwipeCancel, u => {
                u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: ve(e.onSwipeEnd, u => {
                const {x: c, y: f} = u.detail.delta;
                u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`),
                a(!1)
            }
            )
        })
    })
}
);
xm.displayName = gi;
var [qx,Xx] = mm(gi, {
    onClose() {}
})
  , Jx = w.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: l, onPause: a, onResume: u, onSwipeStart: c, onSwipeMove: f, onSwipeCancel: h, onSwipeEnd: d, ...k} = e
      , g = ol(gi, n)
      , [x,m] = w.useState(null)
      , p = St(t, A => m(A))
      , y = w.useRef(null)
      , S = w.useRef(null)
      , E = o || g.duration
      , C = w.useRef(0)
      , b = w.useRef(E)
      , T = w.useRef(0)
      , {onToastAdd: _, onToastRemove: O} = g
      , F = On( () => {
        var G;
        (x == null ? void 0 : x.contains(document.activeElement)) && ((G = g.viewport) == null || G.focus()),
        s()
    }
    )
      , D = w.useCallback(A => {
        !A || A === 1 / 0 || (window.clearTimeout(T.current),
        C.current = new Date().getTime(),
        T.current = window.setTimeout(F, A))
    }
    , [F]);
    w.useEffect( () => {
        const A = g.viewport;
        if (A) {
            const G = () => {
                D(b.current),
                u == null || u()
            }
              , $ = () => {
                const V = new Date().getTime() - C.current;
                b.current = b.current - V,
                window.clearTimeout(T.current),
                a == null || a()
            }
            ;
            return A.addEventListener(Ga, $),
            A.addEventListener(qa, G),
            () => {
                A.removeEventListener(Ga, $),
                A.removeEventListener(qa, G)
            }
        }
    }
    , [g.viewport, E, a, u, D]),
    w.useEffect( () => {
        i && !g.isClosePausedRef.current && D(E)
    }
    , [i, E, g.isClosePausedRef, D]),
    w.useEffect( () => (_(),
    () => O()), [_, O]);
    const Q = w.useMemo( () => x ? zm(x) : null, [x]);
    return g.viewport ? v.jsxs(v.Fragment, {
        children: [Q && v.jsx(Zx, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: Q
        }), v.jsx(qx, {
            scope: n,
            onClose: F,
            children: hi.createPortal(v.jsx(ic.ItemSlot, {
                scope: n,
                children: v.jsx(Tx, {
                    asChild: !0,
                    onEscapeKeyDown: ve(l, () => {
                        g.isFocusedToastEscapeKeyDownRef.current || F(),
                        g.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: v.jsx(He.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": g.swipeDirection,
                        ...k,
                        ref: p,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: ve(e.onKeyDown, A => {
                            A.key === "Escape" && (l == null || l(A.nativeEvent),
                            A.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0,
                            F()))
                        }
                        ),
                        onPointerDown: ve(e.onPointerDown, A => {
                            A.button === 0 && (y.current = {
                                x: A.clientX,
                                y: A.clientY
                            })
                        }
                        ),
                        onPointerMove: ve(e.onPointerMove, A => {
                            if (!y.current)
                                return;
                            const G = A.clientX - y.current.x
                              , $ = A.clientY - y.current.y
                              , V = !!S.current
                              , z = ["left", "right"].includes(g.swipeDirection)
                              , N = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max
                              , M = z ? N(0, G) : 0
                              , W = z ? 0 : N(0, $)
                              , I = A.pointerType === "touch" ? 10 : 2
                              , K = {
                                x: M,
                                y: W
                            }
                              , q = {
                                originalEvent: A,
                                delta: K
                            };
                            V ? (S.current = K,
                            Vi(Kx, f, q, {
                                discrete: !1
                            })) : tf(K, g.swipeDirection, I) ? (S.current = K,
                            Vi(Qx, c, q, {
                                discrete: !1
                            }),
                            A.target.setPointerCapture(A.pointerId)) : (Math.abs(G) > I || Math.abs($) > I) && (y.current = null)
                        }
                        ),
                        onPointerUp: ve(e.onPointerUp, A => {
                            const G = S.current
                              , $ = A.target;
                            if ($.hasPointerCapture(A.pointerId) && $.releasePointerCapture(A.pointerId),
                            S.current = null,
                            y.current = null,
                            G) {
                                const V = A.currentTarget
                                  , z = {
                                    originalEvent: A,
                                    delta: G
                                };
                                tf(G, g.swipeDirection, g.swipeThreshold) ? Vi(Gx, d, z, {
                                    discrete: !0
                                }) : Vi(Yx, h, z, {
                                    discrete: !0
                                }),
                                V.addEventListener("click", N => N.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), g.viewport)
        })]
    }) : null
}
)
  , Zx = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , o = ol(gi, t)
      , [i,s] = w.useState(!1)
      , [l,a] = w.useState(!1);
    return n1( () => s(!0)),
    w.useEffect( () => {
        const u = window.setTimeout( () => a(!0), 1e3);
        return () => window.clearTimeout(u)
    }
    , []),
    l ? null : v.jsx(hm, {
        asChild: !0,
        children: v.jsx(rl, {
            ...r,
            children: i && v.jsxs(v.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}
  , e1 = "ToastTitle"
  , km = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return v.jsx(He.div, {
        ...r,
        ref: t
    })
}
);
km.displayName = e1;
var t1 = "ToastDescription"
  , Sm = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return v.jsx(He.div, {
        ...r,
        ref: t
    })
}
);
Sm.displayName = t1;
var Em = "ToastAction"
  , Cm = w.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? v.jsx(Pm, {
        altText: n,
        asChild: !0,
        children: v.jsx(sc, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${Em}\`. Expected non-empty \`string\`.`),
    null)
}
);
Cm.displayName = Em;
var bm = "ToastClose"
  , sc = w.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , o = Xx(bm, n);
    return v.jsx(Pm, {
        asChild: !0,
        children: v.jsx(He.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: ve(e.onClick, o.onClose)
        })
    })
}
);
sc.displayName = bm;
var Pm = w.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...o} = e;
    return v.jsx(He.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
}
);
function zm(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        r1(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none"
              , i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else
                    t.push(...zm(r))
        }
    }
    ),
    t
}
function Vi(e, t, n, {discrete: r}) {
    const o = n.originalEvent.currentTarget
      , i = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? cm(o, i) : o.dispatchEvent(i)
}
var tf = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , o = Math.abs(e.y)
      , i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
}
;
function n1(e= () => {}
) {
    const t = On(e);
    _n( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function r1(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function o1(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Hl(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var i1 = ym
  , Nm = vm
  , Tm = xm
  , jm = km
  , Rm = Sm
  , Om = Cm
  , _m = sc;
function Am(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = Am(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function Mm() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = Am(e)) && (r && (r += " "),
        r += t);
    return r
}
const nf = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , rf = Mm
  , s1 = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return rf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: i} = t
      , s = Object.keys(o).map(u => {
        const c = n == null ? void 0 : n[u]
          , f = i == null ? void 0 : i[u];
        if (c === null)
            return null;
        const h = nf(c) || nf(f);
        return o[u][h]
    }
    )
      , l = n && Object.entries(n).reduce( (u, c) => {
        let[f,h] = c;
        return h === void 0 || (u[f] = h),
        u
    }
    , {})
      , a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (u, c) => {
        let {class: f, className: h, ...d} = c;
        return Object.entries(d).every(k => {
            let[g,x] = k;
            return Array.isArray(x) ? x.includes({
                ...i,
                ...l
            }[g]) : {
                ...i,
                ...l
            }[g] === x
        }
        ) ? [...u, f, h] : u
    }
    , []);
    return rf(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l1 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Lm = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var a1 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u1 = w.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: i, iconNode: s, ...l}, a) => w.createElement("svg", {
    ref: a,
    ...a1,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Lm("lucide", o),
    ...l
}, [...s.map( ([u,c]) => w.createElement(u, c)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const be = (e, t) => {
    const n = w.forwardRef( ({className: r, ...o}, i) => w.createElement(u1, {
        ref: i,
        iconNode: t,
        className: Lm(`lucide-${l1(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c1 = be("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dm = be("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d1 = be("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f1 = be("CircleHelp", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
    key: "1u773s"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p1 = be("DollarSign", [["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "22",
    key: "7eqyqh"
}], ["path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    key: "1b0p4s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h1 = be("Flame", [["path", {
    d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
    key: "96xj49"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m1 = be("Map", [["path", {
    d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
    key: "169xi5"
}], ["path", {
    d: "M15 5.764v15",
    key: "1pn4in"
}], ["path", {
    d: "M9 3.236v15",
    key: "1uimfh"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y1 = be("Monitor", [["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "3",
    rx: "2",
    key: "48i651"
}], ["line", {
    x1: "8",
    x2: "16",
    y1: "21",
    y2: "21",
    key: "1svkeh"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "17",
    y2: "21",
    key: "vw1qmm"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g1 = be("Quote", [["path", {
    d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
    key: "rib7q0"
}], ["path", {
    d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
    key: "1ymkrd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v1 = be("Rocket", [["path", {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    key: "m3kijz"
}], ["path", {
    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    key: "1fmvmk"
}], ["path", {
    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
    key: "1f8sc4"
}], ["path", {
    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
    key: "qeys4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w1 = be("Shuffle", [["path", {
    d: "m18 14 4 4-4 4",
    key: "10pe0f"
}], ["path", {
    d: "m18 2 4 4-4 4",
    key: "pucp1d"
}], ["path", {
    d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",
    key: "1ailkh"
}], ["path", {
    d: "M2 6h1.972a4 4 0 0 1 3.6 2.2",
    key: "km57vx"
}], ["path", {
    d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",
    key: "os18l9"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x1 = be("Star", [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k1 = be("Target", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "6",
    key: "1vlfrh"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "2",
    key: "1c9p78"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S1 = be("TrendingUp", [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E1 = be("TriangleAlert", [["path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
    key: "wmoenq"
}], ["path", {
    d: "M12 9v4",
    key: "juzpu7"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C1 = be("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b1 = be("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , lc = "-"
  , P1 = e => {
    const t = N1(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: s => {
            const l = s.split(lc);
            return l[0] === "" && l.length !== 1 && l.shift(),
            Im(l, t) || z1(s)
        }
        ,
        getConflictingClassGroupIds: (s, l) => {
            const a = n[s] || [];
            return l && r[s] ? [...a, ...r[s]] : a
        }
    }
}
  , Im = (e, t) => {
    var s;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? Im(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const i = e.join(lc);
    return (s = t.validators.find( ({validator: l}) => l(i))) == null ? void 0 : s.classGroupId
}
  , of = /^\[(.+)\]$/
  , z1 = e => {
    if (of.test(e)) {
        const t = of.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , N1 = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return j1(Object.entries(e.classGroups), n).forEach( ([i,s]) => {
        Ja(s, r, i, t)
    }
    ),
    r
}
  , Ja = (e, t, n, r) => {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : sf(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (T1(o)) {
                Ja(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([i,s]) => {
            Ja(s, sf(t, i), n, r)
        }
        )
    }
    )
}
  , sf = (e, t) => {
    let n = e;
    return t.split(lc).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , T1 = e => e.isThemeGetter
  , j1 = (e, t) => t ? e.map( ([n,r]) => {
    const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([s,l]) => [t + s, l])) : i);
    return [n, o]
}
) : e
  , R1 = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const o = (i, s) => {
        n.set(i, s),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(i) {
            let s = n.get(i);
            if (s !== void 0)
                return s;
            if ((s = r.get(i)) !== void 0)
                return o(i, s),
                s
        },
        set(i, s) {
            n.has(i) ? n.set(i, s) : o(i, s)
        }
    }
}
  , Fm = "!"
  , O1 = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , i = t.length
      , s = l => {
        const a = [];
        let u = 0, c = 0, f;
        for (let x = 0; x < l.length; x++) {
            let m = l[x];
            if (u === 0) {
                if (m === o && (r || l.slice(x, x + i) === t)) {
                    a.push(l.slice(c, x)),
                    c = x + i;
                    continue
                }
                if (m === "/") {
                    f = x;
                    continue
                }
            }
            m === "[" ? u++ : m === "]" && u--
        }
        const h = a.length === 0 ? l : l.substring(c)
          , d = h.startsWith(Fm)
          , k = d ? h.substring(1) : h
          , g = f && f > c ? f - c : void 0;
        return {
            modifiers: a,
            hasImportantModifier: d,
            baseClassName: k,
            maybePostfixModifierPosition: g
        }
    }
    ;
    return n ? l => n({
        className: l,
        parseClassName: s
    }) : s
}
  , _1 = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , A1 = e => ({
    cache: R1(e.cacheSize),
    parseClassName: O1(e),
    ...P1(e)
})
  , M1 = /\s+/
  , L1 = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , i = []
      , s = e.trim().split(M1);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
        const u = s[a]
          , {modifiers: c, hasImportantModifier: f, baseClassName: h, maybePostfixModifierPosition: d} = n(u);
        let k = !!d
          , g = r(k ? h.substring(0, d) : h);
        if (!g) {
            if (!k) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            if (g = r(h),
            !g) {
                l = u + (l.length > 0 ? " " + l : l);
                continue
            }
            k = !1
        }
        const x = _1(c).join(":")
          , m = f ? x + Fm : x
          , p = m + g;
        if (i.includes(p))
            continue;
        i.push(p);
        const y = o(g, k);
        for (let S = 0; S < y.length; ++S) {
            const E = y[S];
            i.push(m + E)
        }
        l = u + (l.length > 0 ? " " + l : l)
    }
    return l
}
;
function D1() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = $m(t)) && (r && (r += " "),
        r += n);
    return r
}
const $m = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = $m(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function I1(e, ...t) {
    let n, r, o, i = s;
    function s(a) {
        const u = t.reduce( (c, f) => f(c), e());
        return n = A1(u),
        r = n.cache.get,
        o = n.cache.set,
        i = l,
        l(a)
    }
    function l(a) {
        const u = r(a);
        if (u)
            return u;
        const c = L1(a, n);
        return o(a, c),
        c
    }
    return function() {
        return i(D1.apply(null, arguments))
    }
}
const re = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , Um = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , F1 = /^\d+\/\d+$/
  , $1 = new Set(["px", "full", "screen"])
  , U1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , B1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , V1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , W1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , H1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Dt = e => Ir(e) || $1.has(e) || F1.test(e)
  , sn = e => lo(e, "length", Z1)
  , Ir = e => !!e && !Number.isNaN(Number(e))
  , Ql = e => lo(e, "number", Ir)
  , So = e => !!e && Number.isInteger(Number(e))
  , Q1 = e => e.endsWith("%") && Ir(e.slice(0, -1))
  , H = e => Um.test(e)
  , ln = e => U1.test(e)
  , K1 = new Set(["length", "size", "percentage"])
  , Y1 = e => lo(e, K1, Bm)
  , G1 = e => lo(e, "position", Bm)
  , q1 = new Set(["image", "url"])
  , X1 = e => lo(e, q1, tk)
  , J1 = e => lo(e, "", ek)
  , Eo = () => !0
  , lo = (e, t, n) => {
    const r = Um.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , Z1 = e => B1.test(e) && !V1.test(e)
  , Bm = () => !1
  , ek = e => W1.test(e)
  , tk = e => H1.test(e)
  , nk = () => {
    const e = re("colors")
      , t = re("spacing")
      , n = re("blur")
      , r = re("brightness")
      , o = re("borderColor")
      , i = re("borderRadius")
      , s = re("borderSpacing")
      , l = re("borderWidth")
      , a = re("contrast")
      , u = re("grayscale")
      , c = re("hueRotate")
      , f = re("invert")
      , h = re("gap")
      , d = re("gradientColorStops")
      , k = re("gradientColorStopPositions")
      , g = re("inset")
      , x = re("margin")
      , m = re("opacity")
      , p = re("padding")
      , y = re("saturate")
      , S = re("scale")
      , E = re("sepia")
      , C = re("skew")
      , b = re("space")
      , T = re("translate")
      , _ = () => ["auto", "contain", "none"]
      , O = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , F = () => ["auto", H, t]
      , D = () => [H, t]
      , Q = () => ["", Dt, sn]
      , A = () => ["auto", Ir, H]
      , G = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , $ = () => ["solid", "dashed", "dotted", "double", "none"]
      , V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , z = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , N = () => ["", "0", H]
      , M = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , W = () => [Ir, H];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Eo],
            spacing: [Dt, sn],
            blur: ["none", "", ln, H],
            brightness: W(),
            borderColor: [e],
            borderRadius: ["none", "", "full", ln, H],
            borderSpacing: D(),
            borderWidth: Q(),
            contrast: W(),
            grayscale: N(),
            hueRotate: W(),
            invert: N(),
            gap: D(),
            gradientColorStops: [e],
            gradientColorStopPositions: [Q1, sn],
            inset: F(),
            margin: F(),
            opacity: W(),
            padding: D(),
            saturate: W(),
            scale: W(),
            sepia: N(),
            skew: W(),
            space: D(),
            translate: D()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", H]
            }],
            container: ["container"],
            columns: [{
                columns: [ln]
            }],
            "break-after": [{
                "break-after": M()
            }],
            "break-before": [{
                "break-before": M()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...G(), H]
            }],
            overflow: [{
                overflow: O()
            }],
            "overflow-x": [{
                "overflow-x": O()
            }],
            "overflow-y": [{
                "overflow-y": O()
            }],
            overscroll: [{
                overscroll: _()
            }],
            "overscroll-x": [{
                "overscroll-x": _()
            }],
            "overscroll-y": [{
                "overscroll-y": _()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [g]
            }],
            "inset-x": [{
                "inset-x": [g]
            }],
            "inset-y": [{
                "inset-y": [g]
            }],
            start: [{
                start: [g]
            }],
            end: [{
                end: [g]
            }],
            top: [{
                top: [g]
            }],
            right: [{
                right: [g]
            }],
            bottom: [{
                bottom: [g]
            }],
            left: [{
                left: [g]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", So, H]
            }],
            basis: [{
                basis: F()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", H]
            }],
            grow: [{
                grow: N()
            }],
            shrink: [{
                shrink: N()
            }],
            order: [{
                order: ["first", "last", "none", So, H]
            }],
            "grid-cols": [{
                "grid-cols": [Eo]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", So, H]
                }, H]
            }],
            "col-start": [{
                "col-start": A()
            }],
            "col-end": [{
                "col-end": A()
            }],
            "grid-rows": [{
                "grid-rows": [Eo]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [So, H]
                }, H]
            }],
            "row-start": [{
                "row-start": A()
            }],
            "row-end": [{
                "row-end": A()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", H]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", H]
            }],
            gap: [{
                gap: [h]
            }],
            "gap-x": [{
                "gap-x": [h]
            }],
            "gap-y": [{
                "gap-y": [h]
            }],
            "justify-content": [{
                justify: ["normal", ...z()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...z(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...z(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [p]
            }],
            px: [{
                px: [p]
            }],
            py: [{
                py: [p]
            }],
            ps: [{
                ps: [p]
            }],
            pe: [{
                pe: [p]
            }],
            pt: [{
                pt: [p]
            }],
            pr: [{
                pr: [p]
            }],
            pb: [{
                pb: [p]
            }],
            pl: [{
                pl: [p]
            }],
            m: [{
                m: [x]
            }],
            mx: [{
                mx: [x]
            }],
            my: [{
                my: [x]
            }],
            ms: [{
                ms: [x]
            }],
            me: [{
                me: [x]
            }],
            mt: [{
                mt: [x]
            }],
            mr: [{
                mr: [x]
            }],
            mb: [{
                mb: [x]
            }],
            ml: [{
                ml: [x]
            }],
            "space-x": [{
                "space-x": [b]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [b]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", H, t]
            }],
            "min-w": [{
                "min-w": [H, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [H, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [ln]
                }, ln]
            }],
            h: [{
                h: [H, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [H, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [H, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", ln, sn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ql]
            }],
            "font-family": [{
                font: [Eo]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", H]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Ir, Ql]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Dt, H]
            }],
            "list-image": [{
                "list-image": ["none", H]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", H]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [m]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [m]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...$(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Dt, sn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Dt, H]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: D()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", H]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", H]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [m]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...G(), G1]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", Y1]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, X1]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [k]
            }],
            "gradient-via-pos": [{
                via: [k]
            }],
            "gradient-to-pos": [{
                to: [k]
            }],
            "gradient-from": [{
                from: [d]
            }],
            "gradient-via": [{
                via: [d]
            }],
            "gradient-to": [{
                to: [d]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [l]
            }],
            "border-w-x": [{
                "border-x": [l]
            }],
            "border-w-y": [{
                "border-y": [l]
            }],
            "border-w-s": [{
                "border-s": [l]
            }],
            "border-w-e": [{
                "border-e": [l]
            }],
            "border-w-t": [{
                "border-t": [l]
            }],
            "border-w-r": [{
                "border-r": [l]
            }],
            "border-w-b": [{
                "border-b": [l]
            }],
            "border-w-l": [{
                "border-l": [l]
            }],
            "border-opacity": [{
                "border-opacity": [m]
            }],
            "border-style": [{
                border: [...$(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [l]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [l]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [m]
            }],
            "divide-style": [{
                divide: $()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-s": [{
                "border-s": [o]
            }],
            "border-color-e": [{
                "border-e": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...$()]
            }],
            "outline-offset": [{
                "outline-offset": [Dt, H]
            }],
            "outline-w": [{
                outline: [Dt, sn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: Q()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [m]
            }],
            "ring-offset-w": [{
                "ring-offset": [Dt, sn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", ln, J1]
            }],
            "shadow-color": [{
                shadow: [Eo]
            }],
            opacity: [{
                opacity: [m]
            }],
            "mix-blend": [{
                "mix-blend": [...V(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": V()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [a]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", ln, H]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [f]
            }],
            saturate: [{
                saturate: [y]
            }],
            sepia: [{
                sepia: [E]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [a]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [f]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [m]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [y]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [E]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", H]
            }],
            duration: [{
                duration: W()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", H]
            }],
            delay: [{
                delay: W()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", H]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [S]
            }],
            "scale-x": [{
                "scale-x": [S]
            }],
            "scale-y": [{
                "scale-y": [S]
            }],
            rotate: [{
                rotate: [So, H]
            }],
            "translate-x": [{
                "translate-x": [T]
            }],
            "translate-y": [{
                "translate-y": [T]
            }],
            "skew-x": [{
                "skew-x": [C]
            }],
            "skew-y": [{
                "skew-y": [C]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", H]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", H]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": D()
            }],
            "scroll-mx": [{
                "scroll-mx": D()
            }],
            "scroll-my": [{
                "scroll-my": D()
            }],
            "scroll-ms": [{
                "scroll-ms": D()
            }],
            "scroll-me": [{
                "scroll-me": D()
            }],
            "scroll-mt": [{
                "scroll-mt": D()
            }],
            "scroll-mr": [{
                "scroll-mr": D()
            }],
            "scroll-mb": [{
                "scroll-mb": D()
            }],
            "scroll-ml": [{
                "scroll-ml": D()
            }],
            "scroll-p": [{
                "scroll-p": D()
            }],
            "scroll-px": [{
                "scroll-px": D()
            }],
            "scroll-py": [{
                "scroll-py": D()
            }],
            "scroll-ps": [{
                "scroll-ps": D()
            }],
            "scroll-pe": [{
                "scroll-pe": D()
            }],
            "scroll-pt": [{
                "scroll-pt": D()
            }],
            "scroll-pr": [{
                "scroll-pr": D()
            }],
            "scroll-pb": [{
                "scroll-pb": D()
            }],
            "scroll-pl": [{
                "scroll-pl": D()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", H]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Dt, sn, Ql]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , rk = I1(nk);
function dr(...e) {
    return rk(Mm(e))
}
const ok = i1
  , Vm = w.forwardRef( ({className: e, ...t}, n) => v.jsx(Nm, {
    ref: n,
    className: dr("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
Vm.displayName = Nm.displayName;
const ik = s1("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Wm = w.forwardRef( ({className: e, variant: t, ...n}, r) => v.jsx(Tm, {
    ref: r,
    className: dr(ik({
        variant: t
    }), e),
    ...n
}));
Wm.displayName = Tm.displayName;
const sk = w.forwardRef( ({className: e, ...t}, n) => v.jsx(Om, {
    ref: n,
    className: dr("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
sk.displayName = Om.displayName;
const Hm = w.forwardRef( ({className: e, ...t}, n) => v.jsx(_m, {
    ref: n,
    className: dr("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: v.jsx(b1, {
        className: "h-4 w-4"
    })
}));
Hm.displayName = _m.displayName;
const Qm = w.forwardRef( ({className: e, ...t}, n) => v.jsx(jm, {
    ref: n,
    className: dr("text-sm font-semibold", e),
    ...t
}));
Qm.displayName = jm.displayName;
const Km = w.forwardRef( ({className: e, ...t}, n) => v.jsx(Rm, {
    ref: n,
    className: dr("text-sm opacity-90", e),
    ...t
}));
Km.displayName = Rm.displayName;
function lk() {
    const {toasts: e} = px();
    return v.jsxs(ok, {
        children: [e.map(function({id: t, title: n, description: r, action: o, ...i}) {
            return v.jsxs(Wm, {
                ...i,
                children: [v.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && v.jsx(Qm, {
                        children: n
                    }), r && v.jsx(Km, {
                        children: r
                    })]
                }), o, v.jsx(Hm, {})]
            }, t)
        }), v.jsx(Vm, {})]
    })
}
const ak = ["top", "right", "bottom", "left"]
  , An = Math.min
  , Ke = Math.max
  , _s = Math.round
  , Wi = Math.floor
  , At = e => ({
    x: e,
    y: e
})
  , uk = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , ck = {
    start: "end",
    end: "start"
};
function Za(e, t, n) {
    return Ke(e, An(t, n))
}
function Gt(e, t) {
    return typeof e == "function" ? e(t) : e
}
function qt(e) {
    return e.split("-")[0]
}
function ao(e) {
    return e.split("-")[1]
}
function ac(e) {
    return e === "x" ? "y" : "x"
}
function uc(e) {
    return e === "y" ? "height" : "width"
}
const dk = new Set(["top", "bottom"]);
function Rt(e) {
    return dk.has(qt(e)) ? "y" : "x"
}
function cc(e) {
    return ac(Rt(e))
}
function fk(e, t, n) {
    n === void 0 && (n = !1);
    const r = ao(e)
      , o = cc(e)
      , i = uc(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = As(s)),
    [s, As(s)]
}
function pk(e) {
    const t = As(e);
    return [eu(e), t, eu(t)]
}
function eu(e) {
    return e.replace(/start|end/g, t => ck[t])
}
const lf = ["left", "right"]
  , af = ["right", "left"]
  , hk = ["top", "bottom"]
  , mk = ["bottom", "top"];
function yk(e, t, n) {
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? af : lf : t ? lf : af;
    case "left":
    case "right":
        return t ? hk : mk;
    default:
        return []
    }
}
function gk(e, t, n, r) {
    const o = ao(e);
    let i = yk(qt(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o),
    t && (i = i.concat(i.map(eu)))),
    i
}
function As(e) {
    return e.replace(/left|right|bottom|top/g, t => uk[t])
}
function vk(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function Ym(e) {
    return typeof e != "number" ? vk(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Ms(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function uf(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = Rt(t)
      , s = cc(t)
      , l = uc(s)
      , a = qt(t)
      , u = i === "y"
      , c = r.x + r.width / 2 - o.width / 2
      , f = r.y + r.height / 2 - o.height / 2
      , h = r[l] / 2 - o[l] / 2;
    let d;
    switch (a) {
    case "top":
        d = {
            x: c,
            y: r.y - o.height
        };
        break;
    case "bottom":
        d = {
            x: c,
            y: r.y + r.height
        };
        break;
    case "right":
        d = {
            x: r.x + r.width,
            y: f
        };
        break;
    case "left":
        d = {
            x: r.x - o.width,
            y: f
        };
        break;
    default:
        d = {
            x: r.x,
            y: r.y
        }
    }
    switch (ao(t)) {
    case "start":
        d[s] -= h * (n && u ? -1 : 1);
        break;
    case "end":
        d[s] += h * (n && u ? -1 : 1);
        break
    }
    return d
}
const wk = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: s} = n
      , l = i.filter(Boolean)
      , a = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: c, y: f} = uf(u, r, a)
      , h = r
      , d = {}
      , k = 0;
    for (let g = 0; g < l.length; g++) {
        const {name: x, fn: m} = l[g]
          , {x: p, y, data: S, reset: E} = await m({
            x: c,
            y: f,
            initialPlacement: r,
            placement: h,
            strategy: o,
            middlewareData: d,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = p ?? c,
        f = y ?? f,
        d = {
            ...d,
            [x]: {
                ...d[x],
                ...S
            }
        },
        E && k <= 50 && (k++,
        typeof E == "object" && (E.placement && (h = E.placement),
        E.rects && (u = E.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : E.rects),
        {x: c, y: f} = uf(u, h, a)),
        g = -1)
    }
    return {
        x: c,
        y: f,
        placement: h,
        strategy: o,
        middlewareData: d
    }
}
;
async function ii(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: s, elements: l, strategy: a} = e
      , {boundary: u="clippingAncestors", rootBoundary: c="viewport", elementContext: f="floating", altBoundary: h=!1, padding: d=0} = Gt(t, e)
      , k = Ym(d)
      , x = l[h ? f === "floating" ? "reference" : "floating" : f]
      , m = Ms(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: a
    }))
      , p = f === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating))
      , S = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , E = Ms(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: l,
        rect: p,
        offsetParent: y,
        strategy: a
    }) : p);
    return {
        top: (m.top - E.top + k.top) / S.y,
        bottom: (E.bottom - m.bottom + k.bottom) / S.y,
        left: (m.left - E.left + k.left) / S.x,
        right: (E.right - m.right + k.right) / S.x
    }
}
const xk = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: s, elements: l, middlewareData: a} = t
          , {element: u, padding: c=0} = Gt(e, t) || {};
        if (u == null)
            return {};
        const f = Ym(c)
          , h = {
            x: n,
            y: r
        }
          , d = cc(o)
          , k = uc(d)
          , g = await s.getDimensions(u)
          , x = d === "y"
          , m = x ? "top" : "left"
          , p = x ? "bottom" : "right"
          , y = x ? "clientHeight" : "clientWidth"
          , S = i.reference[k] + i.reference[d] - h[d] - i.floating[k]
          , E = h[d] - i.reference[d]
          , C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
        let b = C ? C[y] : 0;
        (!b || !await (s.isElement == null ? void 0 : s.isElement(C))) && (b = l.floating[y] || i.floating[k]);
        const T = S / 2 - E / 2
          , _ = b / 2 - g[k] / 2 - 1
          , O = An(f[m], _)
          , F = An(f[p], _)
          , D = O
          , Q = b - g[k] - F
          , A = b / 2 - g[k] / 2 + T
          , G = Za(D, A, Q)
          , $ = !a.arrow && ao(o) != null && A !== G && i.reference[k] / 2 - (A < D ? O : F) - g[k] / 2 < 0
          , V = $ ? A < D ? A - D : A - Q : 0;
        return {
            [d]: h[d] + V,
            data: {
                [d]: G,
                centerOffset: A - G - V,
                ...$ && {
                    alignmentOffset: V
                }
            },
            reset: $
        }
    }
})
  , kk = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: i, rects: s, initialPlacement: l, platform: a, elements: u} = t
              , {mainAxis: c=!0, crossAxis: f=!0, fallbackPlacements: h, fallbackStrategy: d="bestFit", fallbackAxisSideDirection: k="none", flipAlignment: g=!0, ...x} = Gt(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            const m = qt(o)
              , p = Rt(l)
              , y = qt(l) === l
              , S = await (a.isRTL == null ? void 0 : a.isRTL(u.floating))
              , E = h || (y || !g ? [As(l)] : pk(l))
              , C = k !== "none";
            !h && C && E.push(...gk(l, g, k, S));
            const b = [l, ...E]
              , T = await ii(t, x)
              , _ = [];
            let O = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (c && _.push(T[m]),
            f) {
                const A = fk(o, s, S);
                _.push(T[A[0]], T[A[1]])
            }
            if (O = [...O, {
                placement: o,
                overflows: _
            }],
            !_.every(A => A <= 0)) {
                var F, D;
                const A = (((F = i.flip) == null ? void 0 : F.index) || 0) + 1
                  , G = b[A];
                if (G && (!(f === "alignment" ? p !== Rt(G) : !1) || O.every(z => z.overflows[0] > 0 && Rt(z.placement) === p)))
                    return {
                        data: {
                            index: A,
                            overflows: O
                        },
                        reset: {
                            placement: G
                        }
                    };
                let $ = (D = O.filter(V => V.overflows[0] <= 0).sort( (V, z) => V.overflows[1] - z.overflows[1])[0]) == null ? void 0 : D.placement;
                if (!$)
                    switch (d) {
                    case "bestFit":
                        {
                            var Q;
                            const V = (Q = O.filter(z => {
                                if (C) {
                                    const N = Rt(z.placement);
                                    return N === p || N === "y"
                                }
                                return !0
                            }
                            ).map(z => [z.placement, z.overflows.filter(N => N > 0).reduce( (N, M) => N + M, 0)]).sort( (z, N) => z[1] - N[1])[0]) == null ? void 0 : Q[0];
                            V && ($ = V);
                            break
                        }
                    case "initialPlacement":
                        $ = l;
                        break
                    }
                if (o !== $)
                    return {
                        reset: {
                            placement: $
                        }
                    }
            }
            return {}
        }
    }
};
function cf(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function df(e) {
    return ak.some(t => e[t] >= 0)
}
const Sk = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = Gt(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const i = await ii(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , s = cf(i, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: s,
                            referenceHidden: df(s)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await ii(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , s = cf(i, n.floating);
                    return {
                        data: {
                            escapedOffsets: s,
                            escaped: df(s)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , Gm = new Set(["left", "top"]);
async function Ek(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , s = qt(n)
      , l = ao(n)
      , a = Rt(n) === "y"
      , u = Gm.has(s) ? -1 : 1
      , c = i && a ? -1 : 1
      , f = Gt(t, e);
    let {mainAxis: h, crossAxis: d, alignmentAxis: k} = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return l && typeof k == "number" && (d = l === "end" ? k * -1 : k),
    a ? {
        x: d * c,
        y: h * u
    } : {
        x: h * u,
        y: d * c
    }
}
const Ck = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: i, placement: s, middlewareData: l} = t
              , a = await Ek(t, e);
            return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
                x: o + a.x,
                y: i + a.y,
                data: {
                    ...a,
                    placement: s
                }
            }
        }
    }
}
  , bk = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: i=!0, crossAxis: s=!1, limiter: l={
                fn: x => {
                    let {x: m, y: p} = x;
                    return {
                        x: m,
                        y: p
                    }
                }
            }, ...a} = Gt(e, t)
              , u = {
                x: n,
                y: r
            }
              , c = await ii(t, a)
              , f = Rt(qt(o))
              , h = ac(f);
            let d = u[h]
              , k = u[f];
            if (i) {
                const x = h === "y" ? "top" : "left"
                  , m = h === "y" ? "bottom" : "right"
                  , p = d + c[x]
                  , y = d - c[m];
                d = Za(p, d, y)
            }
            if (s) {
                const x = f === "y" ? "top" : "left"
                  , m = f === "y" ? "bottom" : "right"
                  , p = k + c[x]
                  , y = k - c[m];
                k = Za(p, k, y)
            }
            const g = l.fn({
                ...t,
                [h]: d,
                [f]: k
            });
            return {
                ...g,
                data: {
                    x: g.x - n,
                    y: g.y - r,
                    enabled: {
                        [h]: i,
                        [f]: s
                    }
                }
            }
        }
    }
}
  , Pk = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: i, middlewareData: s} = t
              , {offset: l=0, mainAxis: a=!0, crossAxis: u=!0} = Gt(e, t)
              , c = {
                x: n,
                y: r
            }
              , f = Rt(o)
              , h = ac(f);
            let d = c[h]
              , k = c[f];
            const g = Gt(l, t)
              , x = typeof g == "number" ? {
                mainAxis: g,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...g
            };
            if (a) {
                const y = h === "y" ? "height" : "width"
                  , S = i.reference[h] - i.floating[y] + x.mainAxis
                  , E = i.reference[h] + i.reference[y] - x.mainAxis;
                d < S ? d = S : d > E && (d = E)
            }
            if (u) {
                var m, p;
                const y = h === "y" ? "width" : "height"
                  , S = Gm.has(qt(o))
                  , E = i.reference[f] - i.floating[y] + (S && ((m = s.offset) == null ? void 0 : m[f]) || 0) + (S ? 0 : x.crossAxis)
                  , C = i.reference[f] + i.reference[y] + (S ? 0 : ((p = s.offset) == null ? void 0 : p[f]) || 0) - (S ? x.crossAxis : 0);
                k < E ? k = E : k > C && (k = C)
            }
            return {
                [h]: d,
                [f]: k
            }
        }
    }
}
  , zk = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, rects: i, platform: s, elements: l} = t
              , {apply: a= () => {}
            , ...u} = Gt(e, t)
              , c = await ii(t, u)
              , f = qt(o)
              , h = ao(o)
              , d = Rt(o) === "y"
              , {width: k, height: g} = i.floating;
            let x, m;
            f === "top" || f === "bottom" ? (x = f,
            m = h === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (m = f,
            x = h === "end" ? "top" : "bottom");
            const p = g - c.top - c.bottom
              , y = k - c.left - c.right
              , S = An(g - c[x], p)
              , E = An(k - c[m], y)
              , C = !t.middlewareData.shift;
            let b = S
              , T = E;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (b = p),
            C && !h) {
                const O = Ke(c.left, 0)
                  , F = Ke(c.right, 0)
                  , D = Ke(c.top, 0)
                  , Q = Ke(c.bottom, 0);
                d ? T = k - 2 * (O !== 0 || F !== 0 ? O + F : Ke(c.left, c.right)) : b = g - 2 * (D !== 0 || Q !== 0 ? D + Q : Ke(c.top, c.bottom))
            }
            await a({
                ...t,
                availableWidth: T,
                availableHeight: b
            });
            const _ = await s.getDimensions(l.floating);
            return k !== _.width || g !== _.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function il() {
    return typeof window < "u"
}
function uo(e) {
    return qm(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function qe(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Lt(e) {
    var t;
    return (t = (qm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function qm(e) {
    return il() ? e instanceof Node || e instanceof qe(e).Node : !1
}
function Et(e) {
    return il() ? e instanceof Element || e instanceof qe(e).Element : !1
}
function Mt(e) {
    return il() ? e instanceof HTMLElement || e instanceof qe(e).HTMLElement : !1
}
function ff(e) {
    return !il() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof qe(e).ShadowRoot
}
const Nk = new Set(["inline", "contents"]);
function vi(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = Ct(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Nk.has(o)
}
const Tk = new Set(["table", "td", "th"]);
function jk(e) {
    return Tk.has(uo(e))
}
const Rk = [":popover-open", ":modal"];
function sl(e) {
    return Rk.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
const Ok = ["transform", "translate", "scale", "rotate", "perspective"]
  , _k = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , Ak = ["paint", "layout", "strict", "content"];
function dc(e) {
    const t = fc()
      , n = Et(e) ? Ct(e) : e;
    return Ok.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || _k.some(r => (n.willChange || "").includes(r)) || Ak.some(r => (n.contain || "").includes(r))
}
function Mk(e) {
    let t = Mn(e);
    for (; Mt(t) && !to(t); ) {
        if (dc(t))
            return t;
        if (sl(t))
            return null;
        t = Mn(t)
    }
    return null
}
function fc() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const Lk = new Set(["html", "body", "#document"]);
function to(e) {
    return Lk.has(uo(e))
}
function Ct(e) {
    return qe(e).getComputedStyle(e)
}
function ll(e) {
    return Et(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function Mn(e) {
    if (uo(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || ff(e) && e.host || Lt(e);
    return ff(t) ? t.host : t
}
function Xm(e) {
    const t = Mn(e);
    return to(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Mt(t) && vi(t) ? t : Xm(t)
}
function si(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = Xm(e)
      , i = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , s = qe(o);
    if (i) {
        const l = tu(s);
        return t.concat(s, s.visualViewport || [], vi(o) ? o : [], l && n ? si(l) : [])
    }
    return t.concat(o, si(o, [], n))
}
function tu(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Jm(e) {
    const t = Ct(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = Mt(e)
      , i = o ? e.offsetWidth : n
      , s = o ? e.offsetHeight : r
      , l = _s(n) !== i || _s(r) !== s;
    return l && (n = i,
    r = s),
    {
        width: n,
        height: r,
        $: l
    }
}
function pc(e) {
    return Et(e) ? e : e.contextElement
}
function Fr(e) {
    const t = pc(e);
    if (!Mt(t))
        return At(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: i} = Jm(t);
    let s = (i ? _s(n.width) : n.width) / r
      , l = (i ? _s(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    {
        x: s,
        y: l
    }
}
const Dk = At(0);
function Zm(e) {
    const t = qe(e);
    return !fc() || !t.visualViewport ? Dk : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function Ik(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== qe(e) ? !1 : t
}
function sr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , i = pc(e);
    let s = At(1);
    t && (r ? Et(r) && (s = Fr(r)) : s = Fr(e));
    const l = Ik(i, n, r) ? Zm(i) : At(0);
    let a = (o.left + l.x) / s.x
      , u = (o.top + l.y) / s.y
      , c = o.width / s.x
      , f = o.height / s.y;
    if (i) {
        const h = qe(i)
          , d = r && Et(r) ? qe(r) : r;
        let k = h
          , g = tu(k);
        for (; g && r && d !== k; ) {
            const x = Fr(g)
              , m = g.getBoundingClientRect()
              , p = Ct(g)
              , y = m.left + (g.clientLeft + parseFloat(p.paddingLeft)) * x.x
              , S = m.top + (g.clientTop + parseFloat(p.paddingTop)) * x.y;
            a *= x.x,
            u *= x.y,
            c *= x.x,
            f *= x.y,
            a += y,
            u += S,
            k = qe(g),
            g = tu(k)
        }
    }
    return Ms({
        width: c,
        height: f,
        x: a,
        y: u
    })
}
function hc(e, t) {
    const n = ll(e).scrollLeft;
    return t ? t.left + n : sr(Lt(e)).left + n
}
function ey(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect()
      , o = r.left + t.scrollLeft - (n ? 0 : hc(e, r))
      , i = r.top + t.scrollTop;
    return {
        x: o,
        y: i
    }
}
function Fk(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const i = o === "fixed"
      , s = Lt(r)
      , l = t ? sl(t.floating) : !1;
    if (r === s || l && i)
        return n;
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = At(1);
    const c = At(0)
      , f = Mt(r);
    if ((f || !f && !i) && ((uo(r) !== "body" || vi(s)) && (a = ll(r)),
    Mt(r))) {
        const d = sr(r);
        u = Fr(r),
        c.x = d.x + r.clientLeft,
        c.y = d.y + r.clientTop
    }
    const h = s && !f && !i ? ey(s, a, !0) : At(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - a.scrollLeft * u.x + c.x + h.x,
        y: n.y * u.y - a.scrollTop * u.y + c.y + h.y
    }
}
function $k(e) {
    return Array.from(e.getClientRects())
}
function Uk(e) {
    const t = Lt(e)
      , n = ll(e)
      , r = e.ownerDocument.body
      , o = Ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , i = Ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + hc(e);
    const l = -n.scrollTop;
    return Ct(r).direction === "rtl" && (s += Ke(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: i,
        x: s,
        y: l
    }
}
function Bk(e, t) {
    const n = qe(e)
      , r = Lt(e)
      , o = n.visualViewport;
    let i = r.clientWidth
      , s = r.clientHeight
      , l = 0
      , a = 0;
    if (o) {
        i = o.width,
        s = o.height;
        const u = fc();
        (!u || u && t === "fixed") && (l = o.offsetLeft,
        a = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: l,
        y: a
    }
}
const Vk = new Set(["absolute", "fixed"]);
function Wk(e, t) {
    const n = sr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , i = Mt(e) ? Fr(e) : At(1)
      , s = e.clientWidth * i.x
      , l = e.clientHeight * i.y
      , a = o * i.x
      , u = r * i.y;
    return {
        width: s,
        height: l,
        x: a,
        y: u
    }
}
function pf(e, t, n) {
    let r;
    if (t === "viewport")
        r = Bk(e, n);
    else if (t === "document")
        r = Uk(Lt(e));
    else if (Et(t))
        r = Wk(t, n);
    else {
        const o = Zm(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return Ms(r)
}
function ty(e, t) {
    const n = Mn(e);
    return n === t || !Et(n) || to(n) ? !1 : Ct(n).position === "fixed" || ty(n, t)
}
function Hk(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = si(e, [], !1).filter(l => Et(l) && uo(l) !== "body")
      , o = null;
    const i = Ct(e).position === "fixed";
    let s = i ? Mn(e) : e;
    for (; Et(s) && !to(s); ) {
        const l = Ct(s)
          , a = dc(s);
        !a && l.position === "fixed" && (o = null),
        (i ? !a && !o : !a && l.position === "static" && !!o && Vk.has(o.position) || vi(s) && !a && ty(e, s)) ? r = r.filter(c => c !== s) : o = l,
        s = Mn(s)
    }
    return t.set(e, r),
    r
}
function Qk(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const s = [...n === "clippingAncestors" ? sl(t) ? [] : Hk(t, this._c) : [].concat(n), r]
      , l = s[0]
      , a = s.reduce( (u, c) => {
        const f = pf(t, c, o);
        return u.top = Ke(f.top, u.top),
        u.right = An(f.right, u.right),
        u.bottom = An(f.bottom, u.bottom),
        u.left = Ke(f.left, u.left),
        u
    }
    , pf(t, l, o));
    return {
        width: a.right - a.left,
        height: a.bottom - a.top,
        x: a.left,
        y: a.top
    }
}
function Kk(e) {
    const {width: t, height: n} = Jm(e);
    return {
        width: t,
        height: n
    }
}
function Yk(e, t, n) {
    const r = Mt(t)
      , o = Lt(t)
      , i = n === "fixed"
      , s = sr(e, !0, i, t);
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const a = At(0);
    function u() {
        a.x = hc(o)
    }
    if (r || !r && !i)
        if ((uo(t) !== "body" || vi(o)) && (l = ll(t)),
        r) {
            const d = sr(t, !0, i, t);
            a.x = d.x + t.clientLeft,
            a.y = d.y + t.clientTop
        } else
            o && u();
    i && !r && o && u();
    const c = o && !r && !i ? ey(o, l) : At(0)
      , f = s.left + l.scrollLeft - a.x - c.x
      , h = s.top + l.scrollTop - a.y - c.y;
    return {
        x: f,
        y: h,
        width: s.width,
        height: s.height
    }
}
function Kl(e) {
    return Ct(e).position === "static"
}
function hf(e, t) {
    if (!Mt(e) || Ct(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return Lt(e) === n && (n = n.ownerDocument.body),
    n
}
function ny(e, t) {
    const n = qe(e);
    if (sl(e))
        return n;
    if (!Mt(e)) {
        let o = Mn(e);
        for (; o && !to(o); ) {
            if (Et(o) && !Kl(o))
                return o;
            o = Mn(o)
        }
        return n
    }
    let r = hf(e, t);
    for (; r && jk(r) && Kl(r); )
        r = hf(r, t);
    return r && to(r) && Kl(r) && !dc(r) ? n : r || Mk(e) || n
}
const Gk = async function(e) {
    const t = this.getOffsetParent || ny
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: Yk(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function qk(e) {
    return Ct(e).direction === "rtl"
}
const Xk = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Fk,
    getDocumentElement: Lt,
    getClippingRect: Qk,
    getOffsetParent: ny,
    getElementRects: Gk,
    getClientRects: $k,
    getDimensions: Kk,
    getScale: Fr,
    isElement: Et,
    isRTL: qk
};
function ry(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function Jk(e, t) {
    let n = null, r;
    const o = Lt(e);
    function i() {
        var l;
        clearTimeout(r),
        (l = n) == null || l.disconnect(),
        n = null
    }
    function s(l, a) {
        l === void 0 && (l = !1),
        a === void 0 && (a = 1),
        i();
        const u = e.getBoundingClientRect()
          , {left: c, top: f, width: h, height: d} = u;
        if (l || t(),
        !h || !d)
            return;
        const k = Wi(f)
          , g = Wi(o.clientWidth - (c + h))
          , x = Wi(o.clientHeight - (f + d))
          , m = Wi(c)
          , y = {
            rootMargin: -k + "px " + -g + "px " + -x + "px " + -m + "px",
            threshold: Ke(0, An(1, a)) || 1
        };
        let S = !0;
        function E(C) {
            const b = C[0].intersectionRatio;
            if (b !== a) {
                if (!S)
                    return s();
                b ? s(!1, b) : r = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            b === 1 && !ry(u, e.getBoundingClientRect()) && s(),
            S = !1
        }
        try {
            n = new IntersectionObserver(E,{
                ...y,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(E,y)
        }
        n.observe(e)
    }
    return s(!0),
    i
}
function Zk(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: s=typeof ResizeObserver == "function", layoutShift: l=typeof IntersectionObserver == "function", animationFrame: a=!1} = r
      , u = pc(e)
      , c = o || i ? [...u ? si(u) : [], ...si(t)] : [];
    c.forEach(m => {
        o && m.addEventListener("scroll", n, {
            passive: !0
        }),
        i && m.addEventListener("resize", n)
    }
    );
    const f = u && l ? Jk(u, n) : null;
    let h = -1
      , d = null;
    s && (d = new ResizeObserver(m => {
        let[p] = m;
        p && p.target === u && d && (d.unobserve(t),
        cancelAnimationFrame(h),
        h = requestAnimationFrame( () => {
            var y;
            (y = d) == null || y.observe(t)
        }
        )),
        n()
    }
    ),
    u && !a && d.observe(u),
    d.observe(t));
    let k, g = a ? sr(e) : null;
    a && x();
    function x() {
        const m = sr(e);
        g && !ry(g, m) && n(),
        g = m,
        k = requestAnimationFrame(x)
    }
    return n(),
    () => {
        var m;
        c.forEach(p => {
            o && p.removeEventListener("scroll", n),
            i && p.removeEventListener("resize", n)
        }
        ),
        f == null || f(),
        (m = d) == null || m.disconnect(),
        d = null,
        a && cancelAnimationFrame(k)
    }
}
const eS = Ck
  , tS = bk
  , nS = kk
  , rS = zk
  , oS = Sk
  , mf = xk
  , iS = Pk
  , sS = (e, t, n) => {
    const r = new Map
      , o = {
        platform: Xk,
        ...n
    }
      , i = {
        ...o.platform,
        _c: r
    };
    return wk(e, t, {
        ...o,
        platform: i
    })
}
;
var lS = typeof document < "u"
  , aS = function() {}
  , is = lS ? w.useLayoutEffect : aS;
function Ls(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Ls(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !Ls(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function oy(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function yf(e, t) {
    const n = oy(e);
    return Math.round(t * n) / n
}
function Yl(e) {
    const t = w.useRef(e);
    return is( () => {
        t.current = e
    }
    ),
    t
}
function uS(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: s}={}, transform: l=!0, whileElementsMounted: a, open: u} = e
      , [c,f] = w.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [h,d] = w.useState(r);
    Ls(h, r) || d(r);
    const [k,g] = w.useState(null)
      , [x,m] = w.useState(null)
      , p = w.useCallback(z => {
        z !== C.current && (C.current = z,
        g(z))
    }
    , [])
      , y = w.useCallback(z => {
        z !== b.current && (b.current = z,
        m(z))
    }
    , [])
      , S = i || k
      , E = s || x
      , C = w.useRef(null)
      , b = w.useRef(null)
      , T = w.useRef(c)
      , _ = a != null
      , O = Yl(a)
      , F = Yl(o)
      , D = Yl(u)
      , Q = w.useCallback( () => {
        if (!C.current || !b.current)
            return;
        const z = {
            placement: t,
            strategy: n,
            middleware: h
        };
        F.current && (z.platform = F.current),
        sS(C.current, b.current, z).then(N => {
            const M = {
                ...N,
                isPositioned: D.current !== !1
            };
            A.current && !Ls(T.current, M) && (T.current = M,
            hi.flushSync( () => {
                f(M)
            }
            ))
        }
        )
    }
    , [h, t, n, F, D]);
    is( () => {
        u === !1 && T.current.isPositioned && (T.current.isPositioned = !1,
        f(z => ({
            ...z,
            isPositioned: !1
        })))
    }
    , [u]);
    const A = w.useRef(!1);
    is( () => (A.current = !0,
    () => {
        A.current = !1
    }
    ), []),
    is( () => {
        if (S && (C.current = S),
        E && (b.current = E),
        S && E) {
            if (O.current)
                return O.current(S, E, Q);
            Q()
        }
    }
    , [S, E, Q, O, _]);
    const G = w.useMemo( () => ({
        reference: C,
        floating: b,
        setReference: p,
        setFloating: y
    }), [p, y])
      , $ = w.useMemo( () => ({
        reference: S,
        floating: E
    }), [S, E])
      , V = w.useMemo( () => {
        const z = {
            position: n,
            left: 0,
            top: 0
        };
        if (!$.floating)
            return z;
        const N = yf($.floating, c.x)
          , M = yf($.floating, c.y);
        return l ? {
            ...z,
            transform: "translate(" + N + "px, " + M + "px)",
            ...oy($.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: N,
            top: M
        }
    }
    , [n, l, $.floating, c.x, c.y]);
    return w.useMemo( () => ({
        ...c,
        update: Q,
        refs: G,
        elements: $,
        floatingStyles: V
    }), [c, Q, G, $, V])
}
const cS = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? mf({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? mf({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , dS = (e, t) => ({
    ...eS(e),
    options: [e, t]
})
  , fS = (e, t) => ({
    ...tS(e),
    options: [e, t]
})
  , pS = (e, t) => ({
    ...iS(e),
    options: [e, t]
})
  , hS = (e, t) => ({
    ...nS(e),
    options: [e, t]
})
  , mS = (e, t) => ({
    ...rS(e),
    options: [e, t]
})
  , yS = (e, t) => ({
    ...oS(e),
    options: [e, t]
})
  , gS = (e, t) => ({
    ...cS(e),
    options: [e, t]
});
var vS = "Arrow"
  , iy = w.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...i} = e;
    return v.jsx(He.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : v.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
iy.displayName = vS;
var wS = iy;
function xS(e) {
    const [t,n] = w.useState(void 0);
    return _n( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const i = o[0];
                let s, l;
                if ("borderBoxSize" in i) {
                    const a = i.borderBoxSize
                      , u = Array.isArray(a) ? a[0] : a;
                    s = u.inlineSize,
                    l = u.blockSize
                } else
                    s = e.offsetWidth,
                    l = e.offsetHeight;
                n({
                    width: s,
                    height: l
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var sy = "Popper"
  , [ly,ay] = nl(sy)
  , [wE,uy] = ly(sy)
  , cy = "PopperAnchor"
  , dy = w.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , i = uy(cy, n)
      , s = w.useRef(null)
      , l = St(t, s);
    return w.useEffect( () => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
    }
    ),
    r ? null : v.jsx(He.div, {
        ...o,
        ref: l
    })
}
);
dy.displayName = cy;
var mc = "PopperContent"
  , [kS,SS] = ly(mc)
  , fy = w.forwardRef( (e, t) => {
    var Z, fr, Jt, Fn, Zt, pr;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: i="center", alignOffset: s=0, arrowPadding: l=0, avoidCollisions: a=!0, collisionBoundary: u=[], collisionPadding: c=0, sticky: f="partial", hideWhenDetached: h=!1, updatePositionStrategy: d="optimized", onPlaced: k, ...g} = e
      , x = uy(mc, n)
      , [m,p] = w.useState(null)
      , y = St(t, en => p(en))
      , [S,E] = w.useState(null)
      , C = xS(S)
      , b = (C == null ? void 0 : C.width) ?? 0
      , T = (C == null ? void 0 : C.height) ?? 0
      , _ = r + (i !== "center" ? "-" + i : "")
      , O = typeof c == "number" ? c : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...c
    }
      , F = Array.isArray(u) ? u : [u]
      , D = F.length > 0
      , Q = {
        padding: O,
        boundary: F.filter(CS),
        altBoundary: D
    }
      , {refs: A, floatingStyles: G, placement: $, isPositioned: V, middlewareData: z} = uS({
        strategy: "fixed",
        placement: _,
        whileElementsMounted: (...en) => Zk(...en, {
            animationFrame: d === "always"
        }),
        elements: {
            reference: x.anchor
        },
        middleware: [dS({
            mainAxis: o + T,
            alignmentAxis: s
        }), a && fS({
            mainAxis: !0,
            crossAxis: !1,
            limiter: f === "partial" ? pS() : void 0,
            ...Q
        }), a && hS({
            ...Q
        }), mS({
            ...Q,
            apply: ({elements: en, rects: wi, availableWidth: cl, availableHeight: xi}) => {
                const {width: dl, height: fo} = wi.reference
                  , hr = en.floating.style;
                hr.setProperty("--radix-popper-available-width", `${cl}px`),
                hr.setProperty("--radix-popper-available-height", `${xi}px`),
                hr.setProperty("--radix-popper-anchor-width", `${dl}px`),
                hr.setProperty("--radix-popper-anchor-height", `${fo}px`)
            }
        }), S && gS({
            element: S,
            padding: l
        }), bS({
            arrowWidth: b,
            arrowHeight: T
        }), h && yS({
            strategy: "referenceHidden",
            ...Q
        })]
    })
      , [N,M] = my($)
      , W = On(k);
    _n( () => {
        V && (W == null || W())
    }
    , [V, W]);
    const I = (Z = z.arrow) == null ? void 0 : Z.x
      , K = (fr = z.arrow) == null ? void 0 : fr.y
      , q = ((Jt = z.arrow) == null ? void 0 : Jt.centerOffset) !== 0
      , [he,Pe] = w.useState();
    return _n( () => {
        m && Pe(window.getComputedStyle(m).zIndex)
    }
    , [m]),
    v.jsx("div", {
        ref: A.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...G,
            transform: V ? G.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: he,
            "--radix-popper-transform-origin": [(Fn = z.transformOrigin) == null ? void 0 : Fn.x, (Zt = z.transformOrigin) == null ? void 0 : Zt.y].join(" "),
            ...((pr = z.hide) == null ? void 0 : pr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: v.jsx(kS, {
            scope: n,
            placedSide: N,
            onArrowChange: E,
            arrowX: I,
            arrowY: K,
            shouldHideArrow: q,
            children: v.jsx(He.div, {
                "data-side": N,
                "data-align": M,
                ...g,
                ref: y,
                style: {
                    ...g.style,
                    animation: V ? void 0 : "none"
                }
            })
        })
    })
}
);
fy.displayName = mc;
var py = "PopperArrow"
  , ES = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , hy = w.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , i = SS(py, r)
      , s = ES[i.placedSide];
    return v.jsx("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [s]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: v.jsx(wS, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
hy.displayName = py;
function CS(e) {
    return e !== null
}
var bS = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var x, m, p;
        const {placement: n, rects: r, middlewareData: o} = t
          , s = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0
          , l = s ? 0 : e.arrowWidth
          , a = s ? 0 : e.arrowHeight
          , [u,c] = my(n)
          , f = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c]
          , h = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + l / 2
          , d = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + a / 2;
        let k = ""
          , g = "";
        return u === "bottom" ? (k = s ? f : `${h}px`,
        g = `${-a}px`) : u === "top" ? (k = s ? f : `${h}px`,
        g = `${r.floating.height + a}px`) : u === "right" ? (k = `${-a}px`,
        g = s ? f : `${d}px`) : u === "left" && (k = `${r.floating.width + a}px`,
        g = s ? f : `${d}px`),
        {
            data: {
                x: k,
                y: g
            }
        }
    }
});
function my(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var PS = dy
  , zS = fy
  , NS = hy
  , [al,xE] = nl("Tooltip", [ay])
  , yc = ay()
  , yy = "TooltipProvider"
  , TS = 700
  , gf = "tooltip.open"
  , [jS,gy] = al(yy)
  , vy = e => {
    const {__scopeTooltip: t, delayDuration: n=TS, skipDelayDuration: r=300, disableHoverableContent: o=!1, children: i} = e
      , s = w.useRef(!0)
      , l = w.useRef(!1)
      , a = w.useRef(0);
    return w.useEffect( () => {
        const u = a.current;
        return () => window.clearTimeout(u)
    }
    , []),
    v.jsx(jS, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: w.useCallback( () => {
            window.clearTimeout(a.current),
            s.current = !1
        }
        , []),
        onClose: w.useCallback( () => {
            window.clearTimeout(a.current),
            a.current = window.setTimeout( () => s.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: w.useCallback(u => {
            l.current = u
        }
        , []),
        disableHoverableContent: o,
        children: i
    })
}
;
vy.displayName = yy;
var wy = "Tooltip"
  , [kE,ul] = al(wy)
  , nu = "TooltipTrigger"
  , RS = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = ul(nu, n)
      , i = gy(nu, n)
      , s = yc(n)
      , l = w.useRef(null)
      , a = St(t, l, o.onTriggerChange)
      , u = w.useRef(!1)
      , c = w.useRef(!1)
      , f = w.useCallback( () => u.current = !1, []);
    return w.useEffect( () => () => document.removeEventListener("pointerup", f), [f]),
    v.jsx(PS, {
        asChild: !0,
        ...s,
        children: v.jsx(He.button, {
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute,
            ...r,
            ref: a,
            onPointerMove: ve(e.onPointerMove, h => {
                h.pointerType !== "touch" && !c.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(),
                c.current = !0)
            }
            ),
            onPointerLeave: ve(e.onPointerLeave, () => {
                o.onTriggerLeave(),
                c.current = !1
            }
            ),
            onPointerDown: ve(e.onPointerDown, () => {
                o.open && o.onClose(),
                u.current = !0,
                document.addEventListener("pointerup", f, {
                    once: !0
                })
            }
            ),
            onFocus: ve(e.onFocus, () => {
                u.current || o.onOpen()
            }
            ),
            onBlur: ve(e.onBlur, o.onClose),
            onClick: ve(e.onClick, o.onClose)
        })
    })
}
);
RS.displayName = nu;
var OS = "TooltipPortal"
  , [SE,_S] = al(OS, {
    forceMount: void 0
})
  , no = "TooltipContent"
  , xy = w.forwardRef( (e, t) => {
    const n = _S(no, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: o="top", ...i} = e
      , s = ul(no, e.__scopeTooltip);
    return v.jsx(rc, {
        present: r || s.open,
        children: s.disableHoverableContent ? v.jsx(ky, {
            side: o,
            ...i,
            ref: t
        }) : v.jsx(AS, {
            side: o,
            ...i,
            ref: t
        })
    })
}
)
  , AS = w.forwardRef( (e, t) => {
    const n = ul(no, e.__scopeTooltip)
      , r = gy(no, e.__scopeTooltip)
      , o = w.useRef(null)
      , i = St(t, o)
      , [s,l] = w.useState(null)
      , {trigger: a, onClose: u} = n
      , c = o.current
      , {onPointerInTransitChange: f} = r
      , h = w.useCallback( () => {
        l(null),
        f(!1)
    }
    , [f])
      , d = w.useCallback( (k, g) => {
        const x = k.currentTarget
          , m = {
            x: k.clientX,
            y: k.clientY
        }
          , p = FS(m, x.getBoundingClientRect())
          , y = $S(m, p)
          , S = US(g.getBoundingClientRect())
          , E = VS([...y, ...S]);
        l(E),
        f(!0)
    }
    , [f]);
    return w.useEffect( () => () => h(), [h]),
    w.useEffect( () => {
        if (a && c) {
            const k = x => d(x, c)
              , g = x => d(x, a);
            return a.addEventListener("pointerleave", k),
            c.addEventListener("pointerleave", g),
            () => {
                a.removeEventListener("pointerleave", k),
                c.removeEventListener("pointerleave", g)
            }
        }
    }
    , [a, c, d, h]),
    w.useEffect( () => {
        if (s) {
            const k = g => {
                const x = g.target
                  , m = {
                    x: g.clientX,
                    y: g.clientY
                }
                  , p = (a == null ? void 0 : a.contains(x)) || (c == null ? void 0 : c.contains(x))
                  , y = !BS(m, s);
                p ? h() : y && (h(),
                u())
            }
            ;
            return document.addEventListener("pointermove", k),
            () => document.removeEventListener("pointermove", k)
        }
    }
    , [a, c, s, u, h]),
    v.jsx(ky, {
        ...e,
        ref: i
    })
}
)
  , [MS,LS] = al(wy, {
    isInside: !1
})
  , DS = yx("TooltipContent")
  , ky = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: s, ...l} = e
      , a = ul(no, n)
      , u = yc(n)
      , {onClose: c} = a;
    return w.useEffect( () => (document.addEventListener(gf, c),
    () => document.removeEventListener(gf, c)), [c]),
    w.useEffect( () => {
        if (a.trigger) {
            const f = h => {
                const d = h.target;
                d != null && d.contains(a.trigger) && c()
            }
            ;
            return window.addEventListener("scroll", f, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", f, {
                capture: !0
            })
        }
    }
    , [a.trigger, c]),
    v.jsx(nc, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: f => f.preventDefault(),
        onDismiss: c,
        children: v.jsxs(zS, {
            "data-state": a.stateAttribute,
            ...u,
            ...l,
            ref: t,
            style: {
                ...l.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [v.jsx(DS, {
                children: r
            }), v.jsx(MS, {
                scope: n,
                isInside: !0,
                children: v.jsx(Ux, {
                    id: a.contentId,
                    role: "tooltip",
                    children: o || r
                })
            })]
        })
    })
}
);
xy.displayName = no;
var Sy = "TooltipArrow"
  , IS = w.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , o = yc(n);
    return LS(Sy, n).isInside ? null : v.jsx(NS, {
        ...o,
        ...r,
        ref: t
    })
}
);
IS.displayName = Sy;
function FS(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , o = Math.abs(t.right - e.x)
      , i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
    case i:
        return "left";
    case o:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function $S(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function US(e) {
    const {top: t, right: n, bottom: r, left: o} = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}
function BS(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const l = t[i]
          , a = t[s]
          , u = l.x
          , c = l.y
          , f = a.x
          , h = a.y;
        c > r != h > r && n < (f - u) * (r - c) / (h - c) + u && (o = !o)
    }
    return o
}
function VS(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    WS(t)
}
function WS(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1]
              , s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                t.pop();
            else
                break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1]
              , s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x))
                n.pop();
            else
                break
        }
        n.push(o)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var HS = vy
  , Ey = xy;
const QS = HS
  , KS = w.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => v.jsx(Ey, {
    ref: r,
    sideOffset: t,
    className: dr("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
KS.displayName = Ey.displayName;
const YS = () => v.jsxs("section", {
    className: "relative min-h-[70vh] flex items-center justify-center bg-gradient-hero overflow-hidden px-4 pt-20 pb-16",
    children: [v.jsx("div", {
        className: "absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full opacity-15 blur-[120px]",
        style: {
            background: "hsl(25 95% 53%)"
        }
    }), v.jsxs("div", {
        className: "relative z-10 max-w-4xl mx-auto text-center",
        children: [v.jsx("p", {
            className: "text-primary font-medium tracking-widest uppercase text-xs mb-5 animate-fade-in-up",
            children: "Kurs Online — Twórz & Sprzedawaj Strony"
        }), v.jsxs("h1", {
            className: "font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-in-up",
            style: {
                animationDelay: "0.1s"
            },
            children: ["Zacznij zarabiać na tworzeniu", " ", v.jsx("span", {
                className: "text-gradient-gold",
                children: "stron internetowych"
            }), " ", "— nawet jeśli zaczynasz od zera"]
        }), v.jsx("p", {
            className: "text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 animate-fade-in-up",
            style: {
                animationDelay: "0.2s"
            },
            children: "Pokażę Ci krok po kroku jak zdobywać klientów i sprzedawać strony za realne pieniądze"
        }), v.jsx("a", {
            href: "#oferta",
            className: "inline-block bg-gradient-gold text-primary-foreground font-semibold px-8 py-3.5 rounded-lg text-base hover:opacity-90 transition-all animate-pulse-gold animate-fade-in-up",
            style: {
                animationDelay: "0.3s"
            },
            children: "Zacznij teraz"
        })]
    })]
});
function co(e=.1) {
    const t = w.useRef(null)
      , [n,r] = w.useState(!1);
    return w.useEffect( () => {
        const o = t.current;
        if (!o)
            return;
        const i = new IntersectionObserver( ([s]) => {
            s.isIntersecting && r(!0)
        }
        ,{
            threshold: e
        });
        return i.observe(o),
        () => i.disconnect()
    }
    , [e]),
    {
        ref: t,
        isInView: n
    }
}
const GS = [{
    icon: E1,
    title: "Brak klientów",
    desc: "Nie wiesz, jak dotrzeć do osób, które naprawdę potrzebują strony internetowej. Każdy dzień to frustracja i brak zamówień."
}, {
    icon: f1,
    title: "Brak pomysłu jak zacząć",
    desc: "Chciałbyś zarabiać na stronach, ale nie wiesz od czego zacząć. Każda rada w internecie jest sprzeczna z poprzednią."
}, {
    icon: w1,
    title: "Chaos informacyjny",
    desc: "Setki kursów, poradników, filmów — a Ty nadal stoisz w miejscu. Brak jednej, konkretnej ścieżki działania."
}]
  , qS = () => {
    const {ref: e, isInView: t} = co();
    return v.jsx("section", {
        className: "py-24 md:py-32 px-4",
        ref: e,
        children: v.jsxs("div", {
            className: "max-w-5xl mx-auto text-center",
            children: [v.jsx("p", {
                className: "text-primary font-medium tracking-widest uppercase text-xs mb-4",
                children: "Czy to brzmi znajomo?"
            }), v.jsxs("h2", {
                className: "font-serif text-2xl md:text-4xl font-bold mb-14",
                children: ["Wiesz, że ", v.jsx("span", {
                    className: "text-gradient-gold",
                    children: "chcesz więcej"
                }), " — ale nie wiesz jak"]
            }), v.jsx("div", {
                className: "grid md:grid-cols-3 gap-8",
                children: GS.map( (n, r) => v.jsxs("div", {
                    className: `bg-gradient-card border border-border rounded-2xl p-8 text-left transition-all duration-700 ${t ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                    style: {
                        transitionDelay: `${r * 150}ms`
                    },
                    children: [v.jsx("div", {
                        className: "w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5",
                        children: v.jsx(n.icon, {
                            className: "w-6 h-6 text-primary"
                        })
                    }), v.jsx("h3", {
                        className: "font-serif text-xl font-semibold mb-3",
                        children: n.title
                    }), v.jsx("p", {
                        className: "text-muted-foreground leading-relaxed",
                        children: n.desc
                    })]
                }, r))
            })]
        })
    })
}
  , XS = [{
    icon: k1,
    title: "Od zera do pierwszych klientów",
    desc: "Nie potrzebujesz doświadczenia. Pokażę Ci dokładnie, jak zacząć i zdobyć pierwszych klientów w kilka tygodni."
}, {
    icon: m1,
    title: "Gotowe schematy działania",
    desc: "Żadnego zgadywania. Dostajesz sprawdzone szablony, skrypty i procesy — kopiujesz, wdrażasz, zarabiasz."
}, {
    icon: v1,
    title: "Praktyczne podejście",
    desc: "Zero teorii bez pokrycia. Każdy moduł to konkretne zadanie, które przybliża Cię do realnych pieniędzy."
}]
  , JS = () => {
    const {ref: e, isInView: t} = co();
    return v.jsxs("section", {
        className: "py-24 md:py-32 px-4 relative",
        ref: e,
        children: [v.jsx("div", {
            className: "absolute inset-0 bg-gradient-hero opacity-50"
        }), v.jsxs("div", {
            className: "relative z-10 max-w-5xl mx-auto text-center",
            children: [v.jsx("p", {
                className: "text-primary font-medium tracking-widest uppercase text-xs mb-4",
                children: "Rozwiązanie"
            }), v.jsxs("h2", {
                className: "font-serif text-2xl md:text-4xl font-bold mb-6",
                children: ["Jedna ", v.jsx("span", {
                    className: "text-gradient-gold",
                    children: "konkretna droga"
                }), " do zarabiania"]
            }), v.jsx("p", {
                className: "text-muted-foreground text-lg max-w-2xl mx-auto mb-16",
                children: "Ten kurs to nie kolejny zbiór porad. To kompletny system, który przeprowadzi Cię od zera do regularnych przychodów ze stron internetowych."
            }), v.jsx("div", {
                className: "grid md:grid-cols-3 gap-8",
                children: XS.map( (n, r) => v.jsxs("div", {
                    className: `text-center transition-all duration-700 ${t ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                    style: {
                        transitionDelay: `${r * 150}ms`
                    },
                    children: [v.jsx("div", {
                        className: "w-16 h-16 rounded-2xl bg-gradient-gold mx-auto flex items-center justify-center mb-6 shadow-gold",
                        children: v.jsx(n.icon, {
                            className: "w-8 h-8 text-primary-foreground"
                        })
                    }), v.jsx("h3", {
                        className: "font-serif text-xl font-semibold mb-3",
                        children: n.title
                    }), v.jsx("p", {
                        className: "text-muted-foreground leading-relaxed",
                        children: n.desc
                    })]
                }, r))
            })]
        })]
    })
}
  , ZS = [{
    icon: y1,
    num: "01",
    title: "Jak tworzyć strony",
    desc: "Poznasz najlepsze narzędzia i nauczysz się budować profesjonalne strony bez kodowania — szybko i skutecznie."
}, {
    icon: C1,
    num: "02",
    title: "Jak zdobywać klientów",
    desc: "Sprawdzone metody pozyskiwania klientów: od social media, przez cold outreach, po polecenia i networking."
}, {
    icon: p1,
    num: "03",
    title: "Jak sprzedawać usługi",
    desc: "Nauczysz się wyceniać swoją pracę, prowadzić rozmowy sprzedażowe i zamykać transakcje z zyskiem."
}, {
    icon: S1,
    num: "04",
    title: "Jak skalować",
    desc: "Od freelancera do małej agencji. Automatyzacja, delegowanie i budowanie powtarzalnego modelu biznesowego."
}]
  , eE = () => {
    const {ref: e, isInView: t} = co();
    return v.jsx("section", {
        className: "py-24 md:py-32 px-4",
        ref: e,
        children: v.jsxs("div", {
            className: "max-w-5xl mx-auto",
            children: [v.jsxs("div", {
                className: "text-center mb-16",
                children: [v.jsx("p", {
                    className: "text-primary font-medium tracking-widest uppercase text-xs mb-4",
                    children: "Program kursu"
                }), v.jsxs("h2", {
                    className: "font-serif text-2xl md:text-4xl font-bold",
                    children: ["Co dokładnie ", v.jsx("span", {
                        className: "text-gradient-gold",
                        children: "dostajesz"
                    })]
                })]
            }), v.jsx("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: ZS.map( (n, r) => v.jsxs("div", {
                    className: `bg-gradient-card border border-border rounded-2xl p-8 flex gap-6 hover:border-gold transition-all duration-500 group ${t ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                    style: {
                        transitionDelay: `${r * 100}ms`
                    },
                    children: [v.jsx("div", {
                        className: "shrink-0",
                        children: v.jsx("span", {
                            className: "text-primary font-serif text-4xl font-bold opacity-30 group-hover:opacity-60 transition-opacity",
                            children: n.num
                        })
                    }), v.jsxs("div", {
                        children: [v.jsxs("div", {
                            className: "flex items-center gap-3 mb-3",
                            children: [v.jsx(n.icon, {
                                className: "w-5 h-5 text-primary"
                            }), v.jsx("h3", {
                                className: "font-serif text-xl font-semibold",
                                children: n.title
                            })]
                        }), v.jsx("p", {
                            className: "text-muted-foreground leading-relaxed",
                            children: n.desc
                        })]
                    })]
                }, r))
            })]
        })
    })
}
  , tE = [{
    name: "Michał K.",
    role: "Freelancer, Warszawa",
    text: "Po 2 dniach kursu zdobyłem pierwszego klienta. Teraz zarabiam 8 000 zł miesięcznie na stronach.",
    stars: 5
}, {
    name: "Anna W.",
    role: "Studentka, Kraków",
    text: "Zaczynałam kompletnie od zera. Dziś mam 4 stałych klientów i pracuję na własnych warunkach.",
    stars: 5
}, {
    name: "Tomek D.",
    role: "Ex-korporacja, Gdańsk",
    text: "Rzuciłem robotę i nie żałuję. Kupiłem pakiet i już w kilka dni zarobiłem 4k zł.",
    stars: 5
}]
  , nE = [{
    value: "230+",
    label: "Kursantów"
}, {
    value: "30 000 zł",
    label: "Miesięczny dochód"
}, {
    value: "100%",
    label: "Poleca kurs dalej"
}]
  , rE = () => {
    const {ref: e, isInView: t} = co();
    return v.jsxs("section", {
        className: "py-24 md:py-32 px-4 relative",
        ref: e,
        children: [v.jsx("div", {
            className: "absolute inset-0 bg-gradient-hero opacity-50"
        }), v.jsxs("div", {
            className: "relative z-10 max-w-6xl mx-auto",
            children: [v.jsxs("div", {
                className: "text-center mb-16",
                children: [v.jsx("p", {
                    className: "text-primary font-medium tracking-widest uppercase text-sm mb-4",
                    children: "Opinie"
                }), v.jsxs("h2", {
                    className: "font-serif text-3xl md:text-5xl font-bold",
                    children: ["Oni już ", v.jsx("span", {
                        className: "text-gradient-gold",
                        children: "zarabiają"
                    })]
                })]
            }), v.jsx("div", {
                className: "grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-16",
                children: nE.map( (n, r) => v.jsxs("div", {
                    className: `text-center transition-all duration-700 ${t ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                    style: {
                        transitionDelay: `${r * 100}ms`
                    },
                    children: [v.jsx("p", {
                        className: "font-serif text-3xl md:text-4xl font-bold text-gradient-gold",
                        children: n.value
                    }), v.jsx("p", {
                        className: "text-muted-foreground text-sm mt-1",
                        children: n.label
                    })]
                }, r))
            }), v.jsx("div", {
                className: "grid md:grid-cols-3 gap-6",
                children: tE.map( (n, r) => v.jsxs("div", {
                    className: `bg-gradient-card border border-border rounded-2xl p-8 transition-all duration-700 hover:border-gold ${t ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                    style: {
                        transitionDelay: `${(r + 3) * 100}ms`
                    },
                    children: [v.jsx(g1, {
                        className: "w-8 h-8 text-primary opacity-40 mb-4"
                    }), v.jsxs("p", {
                        className: "text-foreground leading-relaxed mb-6",
                        children: ['"', n.text, '"']
                    }), v.jsx("div", {
                        className: "flex items-center gap-1 mb-3",
                        children: Array.from({
                            length: n.stars
                        }).map( (o, i) => v.jsx(x1, {
                            className: "w-4 h-4 fill-primary text-primary"
                        }, i))
                    }), v.jsx("p", {
                        className: "font-semibold",
                        children: n.name
                    }), v.jsx("p", {
                        className: "text-muted-foreground text-sm",
                        children: n.role
                    })]
                }, r))
            })]
        })]
    })
}
  , vf = () => {
    const e = new Date
      , t = new Date;
    t.setHours(23, 59, 59, 999);
    const n = t.getTime() - e.getTime()
      , r = Math.floor(n / (1e3 * 60 * 60))
      , o = Math.floor(n / (1e3 * 60) % 60)
      , i = Math.floor(n / 1e3 % 60);
    return {
        hours: r,
        minutes: o,
        seconds: i
    }
}
  , ru = ({className: e="", variant: t="default"}) => {
    const [n,r] = w.useState(vf());
    w.useEffect( () => {
        const s = setInterval( () => r(vf()), 1e3);
        return () => clearInterval(s)
    }
    , []);
    const o = s => s.toString().padStart(2, "0");
    if (t === "compact")
        return v.jsxs("span", {
            className: `font-mono font-bold tabular-nums ${e}`,
            children: [o(n.hours), ":", o(n.minutes), ":", o(n.seconds)]
        });
    const i = ({value: s, label: l}) => v.jsxs("div", {
        className: "flex flex-col items-center",
        children: [v.jsx("div", {
            className: "bg-gradient-card border border-gold-strong rounded-lg px-3 py-2 md:px-4 md:py-3 min-w-[60px] md:min-w-[72px]",
            children: v.jsx("span", {
                className: "font-serif text-2xl md:text-3xl font-bold text-gradient-gold tabular-nums",
                children: o(s)
            })
        }), v.jsx("span", {
            className: "text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest mt-1.5",
            children: l
        })]
    });
    return v.jsxs("div", {
        className: `flex items-center justify-center gap-2 md:gap-3 ${e}`,
        children: [v.jsx(i, {
            value: n.hours,
            label: "godz"
        }), v.jsx("span", {
            className: "text-2xl md:text-3xl text-primary font-bold pb-5",
            children: ":"
        }), v.jsx(i, {
            value: n.minutes,
            label: "min"
        }), v.jsx("span", {
            className: "text-2xl md:text-3xl text-primary font-bold pb-5",
            children: ":"
        }), v.jsx(i, {
            value: n.seconds,
            label: "sek"
        })]
    })
}
  , oE = [{
    name: "Start",
    price: "199",
    oldPrice: "284",
    popular: !1,
    link: "/pakiet-start",
    features: ["Idealny na start, jeśli zaczynasz od zera", "Kompletny kurs tworzenia stron internetowych przy użyciu AI", "Dowiesz się gdzie tworzyć strony i jakich narzędzi używać", "Podstawy zarządzania stroną i jej publikacji"]
}, {
    name: "Pro",
    price: "399",
    oldPrice: "570",
    popular: !0,
    link: "/pakiet-pro",
    features: ["Wszystko z pakietu Start", "Nauczysz się co pisać, żeby strony wyglądały profesjonalnie", "Stały dostęp + przyszłe aktualizacje", "Nauczysz się jak znaleźć pierwszych klientów", "Gotowe schematy: jak pisać do klientów i prowadzić rozmowy", "Strategie negocjacji cen na Twoją korzyść", "Dodatkowe materiały i praktyczne wskazówki z rynku"]
}, {
    name: "Premium",
    price: "999",
    oldPrice: "1427",
    popular: !1,
    link: "/pakiet-premium",
    features: ["Wszystko z pakietu Start i Pro", "Nauczysz się jak zbudować i rozwijać własny biznes", "Dostęp do dodatkowych narzędzi i rozwiązań, które przyspieszą Twoją pracę", "Cotygodniowe rozmowy 1:1 — odpowiadamy na Twoje pytania i pomagamy na bieżąco", "Wsparcie w każdej sytuacji związanej z tworzeniem i sprzedażą stron"]
}]
  , iE = () => {
    const {ref: e, isInView: t} = co();
    return v.jsx("section", {
        id: "oferta",
        className: "py-24 md:py-32 px-4",
        ref: e,
        children: v.jsxs("div", {
            className: "max-w-6xl mx-auto",
            children: [v.jsxs("div", {
                className: "text-center mb-12",
                children: [v.jsx("p", {
                    className: "text-primary font-medium tracking-widest uppercase text-xs mb-4",
                    children: "Oferta"
                }), v.jsxs("h2", {
                    className: "font-serif text-2xl md:text-4xl font-bold",
                    children: ["Wybierz swój ", v.jsx("span", {
                        className: "text-gradient-gold",
                        children: "pakiet"
                    })]
                }), v.jsx("p", {
                    className: "text-muted-foreground text-lg mt-4 max-w-xl mx-auto",
                    children: "Każdy pakiet daje Ci natychmiastowy dostęp. Bez ukrytych opłat. Bez subskrypcji."
                })]
            }), v.jsxs("div", {
                className: "max-w-2xl mx-auto mb-16 text-center bg-gradient-card border border-gold-strong rounded-2xl p-6 md:p-8 glow-gold",
                children: [v.jsx("div", {
                    className: "inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4",
                    children: "🔥 Promocja -30%"
                }), v.jsx("p", {
                    className: "text-foreground font-semibold text-lg mb-4",
                    children: "Oferta kończy się dzisiaj o północy"
                }), v.jsx(ru, {})]
            }), v.jsx("div", {
                className: "grid md:grid-cols-3 gap-6 lg:gap-8 items-start",
                children: oE.map( (n, r) => v.jsxs("div", {
                    className: `relative rounded-2xl p-8 border transition-all duration-700 ${n.popular ? "bg-gradient-card border-gold-strong glow-gold scale-[1.02] md:scale-105" : "bg-gradient-card border-border hover:border-gold"} ${t ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                    style: {
                        transitionDelay: `${r * 150}ms`
                    },
                    children: [n.popular && v.jsx("div", {
                        className: "absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-sm font-semibold px-5 py-1.5 rounded-full",
                        children: "Najczęściej wybierany"
                    }), v.jsxs("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [v.jsx("h3", {
                            className: "font-serif text-2xl font-bold",
                            children: n.name
                        }), v.jsx("span", {
                            className: "bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full",
                            children: "-30%"
                        })]
                    }), v.jsxs("div", {
                        className: "flex items-baseline gap-2 mb-2",
                        children: [v.jsx("span", {
                            className: "font-serif text-5xl font-bold text-gradient-gold",
                            children: n.price
                        }), v.jsx("span", {
                            className: "text-muted-foreground",
                            children: "zł"
                        })]
                    }), v.jsxs("div", {
                        className: "flex items-baseline gap-2 mb-8",
                        children: [v.jsxs("span", {
                            className: "text-muted-foreground line-through text-lg",
                            children: [n.oldPrice, " zł"]
                        }), v.jsxs("span", {
                            className: "text-primary text-sm font-semibold",
                            children: ["Oszczędzasz ", Number(n.oldPrice) - Number(n.price), " zł"]
                        })]
                    }), v.jsx("ul", {
                        className: "space-y-4 mb-10",
                        children: n.features.map( (o, i) => v.jsxs("li", {
                            className: "flex items-start gap-3",
                            children: [v.jsx(Dm, {
                                className: "w-5 h-5 text-primary shrink-0 mt-0.5"
                            }), v.jsx("span", {
                                className: "text-secondary-foreground",
                                children: o
                            })]
                        }, i))
                    }), v.jsx(lm, {
                        to: n.link,
                        className: `block w-full text-center py-4 rounded-xl font-semibold transition-all ${n.popular ? "bg-gradient-gold text-primary-foreground hover:opacity-90" : "border border-border text-foreground hover:border-gold hover:text-primary"}`,
                        children: "Kup teraz"
                    })]
                }, r))
            })]
        })
    })
}
  , sE = [{
    q: "Czy dam radę bez doświadczenia?",
    a: "Tak! Kurs jest stworzony dla osób zaczynających od zera. Prowadzę Cię krok po kroku — od podstaw po zaawansowane strategie sprzedaży."
}, {
    q: "Ile czasu potrzebuję, żeby zobaczyć efekty?",
    a: "Większość kursantów zdobywa pierwszego klienta w ciągu 2-7 dni od rozpoczęcia kursu. Tempo zależy od Twojego zaangażowania."
}, {
    q: "Czy to działa w Polsce?",
    a: "Jesteśmy pierwszą grupą w Polsce, która znalazła skuteczny sposób na zastąpienie drogich informatyków. Nasi kursanci zarabiają od Krakowa po Szczecin, oferując profesjonalne strony bez kodowania."
}, {
    q: "Jak długo mam dostęp do kursu?",
    a: "Dostajesz dostęp na zawsze. Plus wszystkie przyszłe aktualizacje bez dodatkowych opłat."
}, {
    q: "Czy potrzebuję umieć programować?",
    a: "Nie. Pokażę Ci narzędzia, które pozwalają tworzyć profesjonalne strony bez pisania kodu. Skupiamy się na efektach, nie na kodowaniu."
}]
  , lE = () => {
    const {ref: e, isInView: t} = co()
      , [n,r] = w.useState(null);
    return v.jsx("section", {
        className: "py-24 md:py-32 px-4",
        ref: e,
        children: v.jsxs("div", {
            className: "max-w-3xl mx-auto",
            children: [v.jsxs("div", {
                className: "text-center mb-16",
                children: [v.jsx("p", {
                    className: "text-primary font-medium tracking-widest uppercase text-xs mb-4",
                    children: "FAQ"
                }), v.jsxs("h2", {
                    className: "font-serif text-2xl md:text-4xl font-bold",
                    children: ["Najczęstsze ", v.jsx("span", {
                        className: "text-gradient-gold",
                        children: "pytania"
                    })]
                })]
            }), v.jsx("div", {
                className: "space-y-4",
                children: sE.map( (o, i) => v.jsxs("div", {
                    className: `bg-gradient-card border border-border rounded-xl overflow-hidden transition-all duration-700 hover:border-gold ${t ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
                    style: {
                        transitionDelay: `${i * 80}ms`
                    },
                    children: [v.jsxs("button", {
                        onClick: () => r(n === i ? null : i),
                        className: "w-full flex items-center justify-between p-6 text-left",
                        children: [v.jsx("span", {
                            className: "font-semibold text-foreground pr-4",
                            children: o.q
                        }), v.jsx(d1, {
                            className: `w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${n === i ? "rotate-180" : ""}`
                        })]
                    }), v.jsx("div", {
                        className: `overflow-hidden transition-all duration-300 ${n === i ? "max-h-40 pb-6 px-6" : "max-h-0"}`,
                        children: v.jsx("p", {
                            className: "text-muted-foreground leading-relaxed",
                            children: o.a
                        })
                    })]
                }, i))
            })]
        })
    })
}
  , aE = () => v.jsx("footer", {
    className: "py-12 px-4 border-t border-border",
    children: v.jsxs("div", {
        className: "max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm",
        children: [v.jsx("p", {
            children: "© 2026 Kurs Tworzenia Stron. Wszelkie prawa zastrzeżone."
        }), v.jsxs("div", {
            className: "flex gap-6",
            children: [v.jsx("a", {
                href: "#",
                className: "hover:text-primary transition-colors",
                children: "Regulamin"
            }), v.jsx("a", {
                href: "#",
                className: "hover:text-primary transition-colors",
                children: "Polityka prywatności"
            }), v.jsx("a", {
                href: "#",
                className: "hover:text-primary transition-colors",
                children: "Kontakt"
            })]
        })]
    })
})
  , uE = () => {
    const [e,t] = w.useState(!1);
    return w.useEffect( () => {
        const n = () => t(window.scrollY > 600);
        return window.addEventListener("scroll", n, {
            passive: !0
        }),
        () => window.removeEventListener("scroll", n)
    }
    , []),
    v.jsx("div", {
        className: `fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`,
        children: v.jsx("a", {
            href: "#oferta",
            className: "bg-gradient-gold text-primary-foreground font-semibold px-8 py-3.5 rounded-full text-sm shadow-gold hover:opacity-90 transition-all flex items-center gap-2",
            children: "🚀 Zacznij teraz"
        })
    })
}
  , cE = () => v.jsxs("div", {
    className: "min-h-screen",
    children: [v.jsx(YS, {}), v.jsx(iE, {}), v.jsx(qS, {}), v.jsx(JS, {}), v.jsx(eE, {}), v.jsx(rE, {}), v.jsx(lE, {}), v.jsx(aE, {}), v.jsx(uE, {})]
})
  , gc = ({name: e, price: t, oldPrice: n, paymentLink: r, emoji: o, badge: i, sections: s}) => (w.useEffect( () => {
    window.scrollTo(0, 0)
}
, []),
v.jsxs("div", {
    className: "min-h-screen bg-background text-foreground",
    children: [v.jsx("div", {
        className: "border-b border-border",
        children: v.jsx("div", {
            className: "max-w-4xl mx-auto px-4 py-6 flex items-center gap-4",
            children: v.jsxs(lm, {
                to: "/#oferta",
                className: "flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors",
                children: [v.jsx(c1, {
                    className: "w-4 h-4"
                }), v.jsx("span", {
                    className: "text-sm",
                    children: "Wróć do oferty"
                })]
            })
        })
    }), v.jsx("div", {
        className: "bg-gradient-hero py-16 md:py-24 px-4",
        children: v.jsxs("div", {
            className: "max-w-4xl mx-auto text-center",
            children: [i && v.jsx("span", {
                className: "inline-block bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6",
                children: i
            }), v.jsxs("h1", {
                className: "font-serif text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3",
                children: [o && v.jsx(h1, {
                    className: "w-8 h-8 md:w-10 md:h-10 text-primary"
                }), "Pakiet ", e]
            }), v.jsx("div", {
                className: "inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4",
                children: "🔥 Promocja -30%"
            }), v.jsxs("div", {
                className: "flex items-baseline justify-center gap-3 mb-2",
                children: [v.jsx("span", {
                    className: "font-serif text-5xl md:text-6xl font-bold text-gradient-gold",
                    children: t
                }), v.jsx("span", {
                    className: "text-muted-foreground text-xl",
                    children: "zł"
                })]
            }), v.jsxs("div", {
                className: "flex items-center justify-center gap-3 mb-8",
                children: [v.jsxs("span", {
                    className: "text-muted-foreground line-through text-lg",
                    children: [n, " zł"]
                }), v.jsxs("span", {
                    className: "text-primary text-sm font-semibold",
                    children: ["Oszczędzasz ", Number(n) - Number(t), " zł"]
                })]
            }), v.jsx("p", {
                className: "text-foreground text-sm font-semibold mb-3",
                children: "Oferta kończy się dzisiaj:"
            }), v.jsx(ru, {})]
        })
    }), v.jsxs("div", {
        className: "max-w-4xl mx-auto px-4 py-16 space-y-16",
        children: [s.map( (l, a) => v.jsxs("div", {
            className: "animate-fade-in",
            style: {
                animationDelay: `${a * 100}ms`
            },
            children: [v.jsxs("div", {
                className: "flex items-center gap-3 mb-6",
                children: [v.jsx("div", {
                    className: "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm",
                    children: a + 1
                }), v.jsx("h2", {
                    className: "font-serif text-xl md:text-2xl font-bold",
                    children: l.title
                })]
            }), l.description && v.jsx("p", {
                className: "text-secondary-foreground text-lg leading-relaxed mb-6 ml-11",
                children: l.description
            }), l.prefix && v.jsx("p", {
                className: "text-foreground font-semibold mb-4 ml-11",
                children: l.prefix
            }), l.items && l.items.length > 0 && v.jsx("ul", {
                className: "space-y-3 ml-11",
                children: l.items.map( (u, c) => v.jsxs("li", {
                    className: "flex items-start gap-3",
                    children: [v.jsx(Dm, {
                        className: "w-5 h-5 text-primary shrink-0 mt-0.5"
                    }), v.jsx("span", {
                        className: "text-secondary-foreground",
                        children: u
                    })]
                }, c))
            })]
        }, a)), v.jsxs("div", {
            className: "text-center pt-8 border-t border-border",
            children: [v.jsxs("a", {
                href: r,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-block bg-gradient-gold text-primary-foreground font-semibold px-12 py-4 rounded-xl text-lg hover:opacity-90 transition-all",
                children: ["Kup teraz — ", t, " zł"]
            }), v.jsxs("p", {
                className: "text-muted-foreground text-sm mt-4",
                children: ["Jednorazowa płatność. Bez ukrytych opłat. Promocja kończy się za", " ", v.jsx(ru, {
                    variant: "compact",
                    className: "text-primary"
                })]
            })]
        })]
    })]
}))
  , dE = () => v.jsx(gc, {
    name: "Start",
    price: "199",
    oldPrice: "284",
    paymentLink: "https://www.naffy.io/seweryn-seweryn/webment-cqO",
    emoji: "🔥",
    sections: [{
        title: "Wprowadzenie",
        description: "Zacznij od zera i stwórz swoją pierwszą stronę. Ten pakiet jest dla Ciebie, jeśli nie masz doświadczenia, ale chcesz nauczyć się tworzyć nowoczesne strony internetowe przy użyciu AI."
    }, {
        title: "Czego się nauczysz",
        items: ["Jak tworzyć strony internetowe w chwilę przy użyciu AI", "Jakie narzędzia wybrać (bez tracenia czasu)", "Jakie komendy pisać do AI, żeby wyglądały profesjonalnie", "Jak przyciągać klientów i ich szukać"]
    }, {
        title: "Co dostajesz",
        items: ["Pełny kurs krok po kroku od zera", "Dostęp do wszystkich materiałów od razu", "Aktualizacje kursu w przyszłości", "Możliwość nauki we własnym tempie"]
    }, {
        title: "Dla kogo",
        items: ["Dla początkujących", "Dla osób, które chcą zacząć zarabiać online", "Dla tych, którzy chcą zdobyć praktyczną umiejętność"]
    }]
})
  , fE = () => v.jsx(gc, {
    name: "Pro",
    price: "399",
    oldPrice: "570",
    paymentLink: "https://www.naffy.io/seweryn-seweryn/pakiet-pro-n3p",
    badge: "Najczęściej wybierany",
    sections: [{
        title: "Wprowadzenie",
        description: "Naucz się nie tylko robić strony, ale też na nich zarabiać. To pakiet dla osób, które chcą przejść od nauki do pierwszych klientów i realnych pieniędzy."
    }, {
        title: "Czego się nauczysz",
        items: ["Wszystko z pakietu Start", "Jak znaleźć klientów (bez doświadczenia)", "Jak pisać wiadomości, które dostają odpowiedzi", "Jak prowadzić rozmowy sprzedażowe", "Jak negocjować ceny na swoją korzyść"]
    }, {
        title: "Co dostajesz",
        items: ["Gotowe schematy wiadomości do klientów", "Checklisty działania krok po kroku", "Praktyczne przykłady z rynku oraz porady sprzedażowe", "Dodatkowe materiały, które przyspieszą Twój start"]
    }, {
        title: "Efekt końcowy",
        prefix: "Po tym pakiecie:",
        items: ["Wiesz jak zdobyć klienta", "Wiesz jak sprzedać stronę", "Masz realny plan zarabiania oraz dostęp do narzędzi schowanych na rynku"]
    }]
})
  , pE = () => v.jsx(gc, {
    name: "Premium",
    price: "999",
    oldPrice: "1427",
    paymentLink: "https://www.naffy.io/seweryn-seweryn/pakiet-premium-zr8",
    sections: [{
        title: "Wprowadzenie",
        description: "Zbuduj realny biznes i przyspiesz swoje wyniki. To opcja dla osób, które chcą iść na poważnie i mieć wsparcie na każdym etapie."
    }, {
        title: "Czego się nauczysz",
        items: ["Wszystko z pakietu Start i Pro", "Jak skalować zarobki i brać droższych klientów", "Jak budować system pozyskiwania klientów", "Jak zarządzać projektami i swoją pracą"]
    }, {
        title: "Co dostajesz",
        items: ["Cotygodniowe rozmowy 1:1 (mentoring)", "Pomoc w Twoich projektach na bieżąco", "Dostęp do narzędzi i rozwiązań przyspieszających pracę", "Bezpośrednie wsparcie w każdej sytuacji"]
    }, {
        title: "Efekt końcowy",
        prefix: "Po tym pakiecie:",
        items: ["Masz działający model biznesowy", "Wiesz jak zdobywać klientów regularnie", "Nie działasz sam — masz wsparcie"]
    }]
})
  , hE = () => {
    const e = yi();
    return w.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    v.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: v.jsxs("div", {
            className: "text-center",
            children: [v.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), v.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), v.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , mE = new z0
  , yE = () => v.jsx(T0, {
    client: mE,
    children: v.jsxs(QS, {
        children: [v.jsx(lk, {}), v.jsx(lx, {}), v.jsx(Pw, {
            children: v.jsxs(ww, {
                children: [v.jsx(wr, {
                    path: "/",
                    element: v.jsx(cE, {})
                }), v.jsx(wr, {
                    path: "/pakiet-start",
                    element: v.jsx(dE, {})
                }), v.jsx(wr, {
                    path: "/pakiet-pro",
                    element: v.jsx(fE, {})
                }), v.jsx(wr, {
                    path: "/pakiet-premium",
                    element: v.jsx(pE, {})
                }), v.jsx(wr, {
                    path: "*",
                    element: v.jsx(hE, {})
                })]
            })
        })]
    })
});
Bh(document.getElementById("root")).render(v.jsx(yE, {}));
