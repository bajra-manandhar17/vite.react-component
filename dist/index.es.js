import * as W from "react";
import Xe, { useLayoutEffect as ui, forwardRef as li, useContext as Ar, createContext as yo, createElement as Ke, Fragment as Vt, useRef as fi, Children as di, isValidElement as Br, cloneElement as Ur } from "react";
var ke = {}, pi = {
  get exports() {
    return ke;
  },
  set exports(e) {
    ke = e;
  }
}, xr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yn;
function mi() {
  if (yn)
    return xr;
  yn = 1;
  var e = Xe, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, u, d) {
    var f, p = {}, h = null, x = null;
    d !== void 0 && (h = "" + d), u.key !== void 0 && (h = "" + u.key), u.ref !== void 0 && (x = u.ref);
    for (f in u)
      n.call(u, f) && !i.hasOwnProperty(f) && (p[f] = u[f]);
    if (c && c.defaultProps)
      for (f in u = c.defaultProps, u)
        p[f] === void 0 && (p[f] = u[f]);
    return { $$typeof: r, type: c, key: h, ref: x, props: p, _owner: o.current };
  }
  return xr.Fragment = t, xr.jsx = a, xr.jsxs = a, xr;
}
var Tr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vn;
function hi() {
  return vn || (vn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Xe, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), g = Symbol.iterator, m = "@@iterator";
    function y(s) {
      if (s === null || typeof s != "object")
        return null;
      var T = g && s[g] || s[m];
      return typeof T == "function" ? T : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(s) {
      {
        for (var T = arguments.length, C = new Array(T > 1 ? T - 1 : 0), D = 1; D < T; D++)
          C[D - 1] = arguments[D];
        R("error", s, C);
      }
    }
    function R(s, T, C) {
      {
        var D = S.ReactDebugCurrentFrame, X = D.getStackAddendum();
        X !== "" && (T += "%s", C = C.concat([X]));
        var ue = C.map(function(G) {
          return String(G);
        });
        ue.unshift("Warning: " + T), Function.prototype.apply.call(console[s], console, ue);
      }
    }
    var _ = !1, l = !1, A = !1, k = !1, pe = !1, I;
    I = Symbol.for("react.module.reference");
    function q(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === n || s === i || pe || s === o || s === d || s === f || k || s === x || _ || l || A || typeof s == "object" && s !== null && (s.$$typeof === h || s.$$typeof === p || s.$$typeof === a || s.$$typeof === c || s.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === I || s.getModuleId !== void 0));
    }
    function se(s, T, C) {
      var D = s.displayName;
      if (D)
        return D;
      var X = T.displayName || T.name || "";
      return X !== "" ? C + "(" + X + ")" : C;
    }
    function le(s) {
      return s.displayName || "Context";
    }
    function ae(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case c:
            var T = s;
            return le(T) + ".Consumer";
          case a:
            var C = s;
            return le(C._context) + ".Provider";
          case u:
            return se(s, s.render, "ForwardRef");
          case p:
            var D = s.displayName || null;
            return D !== null ? D : ae(s.type) || "Memo";
          case h: {
            var X = s, ue = X._payload, G = X._init;
            try {
              return ae(G(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, ve = 0, ce, be, fe, Pe, E, O, L;
    function F() {
    }
    F.__reactDisabledLog = !0;
    function P() {
      {
        if (ve === 0) {
          ce = console.log, be = console.info, fe = console.warn, Pe = console.error, E = console.group, O = console.groupCollapsed, L = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: F,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        ve++;
      }
    }
    function Y() {
      {
        if (ve--, ve === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, s, {
              value: ce
            }),
            info: H({}, s, {
              value: be
            }),
            warn: H({}, s, {
              value: fe
            }),
            error: H({}, s, {
              value: Pe
            }),
            group: H({}, s, {
              value: E
            }),
            groupCollapsed: H({}, s, {
              value: O
            }),
            groupEnd: H({}, s, {
              value: L
            })
          });
        }
        ve < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = S.ReactCurrentDispatcher, j;
    function V(s, T, C) {
      {
        if (j === void 0)
          try {
            throw Error();
          } catch (X) {
            var D = X.stack.trim().match(/\n( *(at )?)/);
            j = D && D[1] || "";
          }
        return `
` + j + s;
      }
    }
    var M = !1, B;
    {
      var me = typeof WeakMap == "function" ? WeakMap : Map;
      B = new me();
    }
    function v(s, T) {
      if (!s || M)
        return "";
      {
        var C = B.get(s);
        if (C !== void 0)
          return C;
      }
      var D;
      M = !0;
      var X = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = N.current, N.current = null, P();
      try {
        if (T) {
          var G = function() {
            throw Error();
          };
          if (Object.defineProperty(G.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(G, []);
            } catch (Ye) {
              D = Ye;
            }
            Reflect.construct(s, [], G);
          } else {
            try {
              G.call();
            } catch (Ye) {
              D = Ye;
            }
            s.call(G.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ye) {
            D = Ye;
          }
          s();
        }
      } catch (Ye) {
        if (Ye && D && typeof Ye.stack == "string") {
          for (var K = Ye.stack.split(`
`), Ce = D.stack.split(`
`), ge = K.length - 1, xe = Ce.length - 1; ge >= 1 && xe >= 0 && K[ge] !== Ce[xe]; )
            xe--;
          for (; ge >= 1 && xe >= 0; ge--, xe--)
            if (K[ge] !== Ce[xe]) {
              if (ge !== 1 || xe !== 1)
                do
                  if (ge--, xe--, xe < 0 || K[ge] !== Ce[xe]) {
                    var Ie = `
` + K[ge].replace(" at new ", " at ");
                    return s.displayName && Ie.includes("<anonymous>") && (Ie = Ie.replace("<anonymous>", s.displayName)), typeof s == "function" && B.set(s, Ie), Ie;
                  }
                while (ge >= 1 && xe >= 0);
              break;
            }
        }
      } finally {
        M = !1, N.current = ue, Y(), Error.prepareStackTrace = X;
      }
      var tr = s ? s.displayName || s.name : "", hn = tr ? V(tr) : "";
      return typeof s == "function" && B.set(s, hn), hn;
    }
    function Ee(s, T, C) {
      return v(s, !1);
    }
    function $(s) {
      var T = s.prototype;
      return !!(T && T.isReactComponent);
    }
    function Se(s, T, C) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return v(s, $(s));
      if (typeof s == "string")
        return V(s);
      switch (s) {
        case d:
          return V("Suspense");
        case f:
          return V("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case u:
            return Ee(s.render);
          case p:
            return Se(s.type, T, C);
          case h: {
            var D = s, X = D._payload, ue = D._init;
            try {
              return Se(ue(X), T, C);
            } catch {
            }
          }
        }
      return "";
    }
    var De = Object.prototype.hasOwnProperty, He = {}, jr = S.ReactDebugCurrentFrame;
    function Qe(s) {
      if (s) {
        var T = s._owner, C = Se(s.type, s._source, T ? T.type : null);
        jr.setExtraStackFrame(C);
      } else
        jr.setExtraStackFrame(null);
    }
    function yr(s, T, C, D, X) {
      {
        var ue = Function.call.bind(De);
        for (var G in s)
          if (ue(s, G)) {
            var K = void 0;
            try {
              if (typeof s[G] != "function") {
                var Ce = Error((D || "React class") + ": " + C + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ce.name = "Invariant Violation", Ce;
              }
              K = s[G](T, G, D, C, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              K = ge;
            }
            K && !(K instanceof Error) && (Qe(X), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", C, G, typeof K), Qe(null)), K instanceof Error && !(K.message in He) && (He[K.message] = !0, Qe(X), w("Failed %s type: %s", C, K.message), Qe(null));
          }
      }
    }
    var vr = Array.isArray;
    function gr(s) {
      return vr(s);
    }
    function gt(s) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, C = T && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return C;
      }
    }
    function er(s) {
      try {
        return We(s), !1;
      } catch {
        return !0;
      }
    }
    function We(s) {
      return "" + s;
    }
    function Dr(s) {
      if (er(s))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(s)), We(s);
    }
    var qe = S.ReactCurrentOwner, bt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, U, br, Er;
    Er = {};
    function Fr(s) {
      if (De.call(s, "ref")) {
        var T = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function cn(s) {
      if (De.call(s, "key")) {
        var T = Object.getOwnPropertyDescriptor(s, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function Xo(s, T) {
      if (typeof s.ref == "string" && qe.current && T && qe.current.stateNode !== T) {
        var C = ae(qe.current.type);
        Er[C] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ae(qe.current.type), s.ref), Er[C] = !0);
      }
    }
    function Jo(s, T) {
      {
        var C = function() {
          U || (U = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        C.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: C,
          configurable: !0
        });
      }
    }
    function Zo(s, T) {
      {
        var C = function() {
          br || (br = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        C.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: C,
          configurable: !0
        });
      }
    }
    var Qo = function(s, T, C, D, X, ue, G) {
      var K = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: s,
        key: T,
        ref: C,
        props: G,
        // Record the component responsible for creating this element.
        _owner: ue
      };
      return K._store = {}, Object.defineProperty(K._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(K, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.defineProperty(K, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.freeze && (Object.freeze(K.props), Object.freeze(K)), K;
    };
    function ei(s, T, C, D, X) {
      {
        var ue, G = {}, K = null, Ce = null;
        C !== void 0 && (Dr(C), K = "" + C), cn(T) && (Dr(T.key), K = "" + T.key), Fr(T) && (Ce = T.ref, Xo(T, X));
        for (ue in T)
          De.call(T, ue) && !bt.hasOwnProperty(ue) && (G[ue] = T[ue]);
        if (s && s.defaultProps) {
          var ge = s.defaultProps;
          for (ue in ge)
            G[ue] === void 0 && (G[ue] = ge[ue]);
        }
        if (K || Ce) {
          var xe = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          K && Jo(G, xe), Ce && Zo(G, xe);
        }
        return Qo(s, K, Ce, X, D, qe.current, G);
      }
    }
    var Et = S.ReactCurrentOwner, un = S.ReactDebugCurrentFrame;
    function rr(s) {
      if (s) {
        var T = s._owner, C = Se(s.type, s._source, T ? T.type : null);
        un.setExtraStackFrame(C);
      } else
        un.setExtraStackFrame(null);
    }
    var xt;
    xt = !1;
    function Tt(s) {
      return typeof s == "object" && s !== null && s.$$typeof === r;
    }
    function ln() {
      {
        if (Et.current) {
          var s = ae(Et.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function ri(s) {
      {
        if (s !== void 0) {
          var T = s.fileName.replace(/^.*[\\\/]/, ""), C = s.lineNumber;
          return `

Check your code at ` + T + ":" + C + ".";
        }
        return "";
      }
    }
    var fn = {};
    function ti(s) {
      {
        var T = ln();
        if (!T) {
          var C = typeof s == "string" ? s : s.displayName || s.name;
          C && (T = `

Check the top-level render call using <` + C + ">.");
        }
        return T;
      }
    }
    function dn(s, T) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var C = ti(T);
        if (fn[C])
          return;
        fn[C] = !0;
        var D = "";
        s && s._owner && s._owner !== Et.current && (D = " It was passed a child from " + ae(s._owner.type) + "."), rr(s), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', C, D), rr(null);
      }
    }
    function pn(s, T) {
      {
        if (typeof s != "object")
          return;
        if (gr(s))
          for (var C = 0; C < s.length; C++) {
            var D = s[C];
            Tt(D) && dn(D, T);
          }
        else if (Tt(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var X = y(s);
          if (typeof X == "function" && X !== s.entries)
            for (var ue = X.call(s), G; !(G = ue.next()).done; )
              Tt(G.value) && dn(G.value, T);
        }
      }
    }
    function ni(s) {
      {
        var T = s.type;
        if (T == null || typeof T == "string")
          return;
        var C;
        if (typeof T == "function")
          C = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === p))
          C = T.propTypes;
        else
          return;
        if (C) {
          var D = ae(T);
          yr(C, s.props, "prop", D, s);
        } else if (T.PropTypes !== void 0 && !xt) {
          xt = !0;
          var X = ae(T);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function oi(s) {
      {
        for (var T = Object.keys(s.props), C = 0; C < T.length; C++) {
          var D = T[C];
          if (D !== "children" && D !== "key") {
            rr(s), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), rr(null);
            break;
          }
        }
        s.ref !== null && (rr(s), w("Invalid attribute `ref` supplied to `React.Fragment`."), rr(null));
      }
    }
    function mn(s, T, C, D, X, ue) {
      {
        var G = q(s);
        if (!G) {
          var K = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ce = ri(X);
          Ce ? K += Ce : K += ln();
          var ge;
          s === null ? ge = "null" : gr(s) ? ge = "array" : s !== void 0 && s.$$typeof === r ? (ge = "<" + (ae(s.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof s, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, K);
        }
        var xe = ei(s, T, C, X, ue);
        if (xe == null)
          return xe;
        if (G) {
          var Ie = T.children;
          if (Ie !== void 0)
            if (D)
              if (gr(Ie)) {
                for (var tr = 0; tr < Ie.length; tr++)
                  pn(Ie[tr], s);
                Object.freeze && Object.freeze(Ie);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pn(Ie, s);
        }
        return s === n ? oi(xe) : ni(xe), xe;
      }
    }
    function ii(s, T, C) {
      return mn(s, T, C, !0);
    }
    function ai(s, T, C) {
      return mn(s, T, C, !1);
    }
    var si = ai, ci = ii;
    Tr.Fragment = n, Tr.jsx = si, Tr.jsxs = ci;
  }()), Tr;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = mi() : e.exports = hi();
})(pi);
const yi = {
  black: "#000",
  white: "#fff"
}, Or = yi, gi = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, nr = gi, bi = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, or = bi, Ei = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, ir = Ei, xi = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, ar = xi, Ti = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, sr = Ti, _i = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, _r = _i, Si = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Ri = Si;
function Ci(e, r) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || r(...n);
  };
}
function z() {
  return z = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, z.apply(this, arguments);
}
function cr(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function vo(e) {
  if (!cr(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = vo(e[t]);
  }), r;
}
function Be(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? z({}, e) : e;
  return cr(e) && cr(r) && Object.keys(r).forEach((o) => {
    o !== "__proto__" && (cr(r[o]) && o in e && cr(e[o]) ? n[o] = Be(e[o], r[o], t) : t.clone ? n[o] = cr(r[o]) ? vo(r[o]) : r[o] : n[o] = r[o]);
  }), n;
}
var b = {}, gn = {
  get exports() {
    return b;
  },
  set exports(e) {
    b = e;
  }
}, Hr = {}, Oi = {
  get exports() {
    return Hr;
  },
  set exports(e) {
    Hr = e;
  }
}, Z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bn;
function wi() {
  if (bn)
    return Z;
  bn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function R(l) {
    if (typeof l == "object" && l !== null) {
      var A = l.$$typeof;
      switch (A) {
        case r:
          switch (l = l.type, l) {
            case u:
            case d:
            case n:
            case i:
            case o:
            case p:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case c:
                case f:
                case g:
                case x:
                case a:
                  return l;
                default:
                  return A;
              }
          }
        case t:
          return A;
      }
    }
  }
  function _(l) {
    return R(l) === d;
  }
  return Z.AsyncMode = u, Z.ConcurrentMode = d, Z.ContextConsumer = c, Z.ContextProvider = a, Z.Element = r, Z.ForwardRef = f, Z.Fragment = n, Z.Lazy = g, Z.Memo = x, Z.Portal = t, Z.Profiler = i, Z.StrictMode = o, Z.Suspense = p, Z.isAsyncMode = function(l) {
    return _(l) || R(l) === u;
  }, Z.isConcurrentMode = _, Z.isContextConsumer = function(l) {
    return R(l) === c;
  }, Z.isContextProvider = function(l) {
    return R(l) === a;
  }, Z.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === r;
  }, Z.isForwardRef = function(l) {
    return R(l) === f;
  }, Z.isFragment = function(l) {
    return R(l) === n;
  }, Z.isLazy = function(l) {
    return R(l) === g;
  }, Z.isMemo = function(l) {
    return R(l) === x;
  }, Z.isPortal = function(l) {
    return R(l) === t;
  }, Z.isProfiler = function(l) {
    return R(l) === i;
  }, Z.isStrictMode = function(l) {
    return R(l) === o;
  }, Z.isSuspense = function(l) {
    return R(l) === p;
  }, Z.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === d || l === i || l === o || l === p || l === h || typeof l == "object" && l !== null && (l.$$typeof === g || l.$$typeof === x || l.$$typeof === a || l.$$typeof === c || l.$$typeof === f || l.$$typeof === y || l.$$typeof === S || l.$$typeof === w || l.$$typeof === m);
  }, Z.typeOf = R, Z;
}
var Q = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var En;
function $i() {
  return En || (En = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function R(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === n || v === d || v === i || v === o || v === p || v === h || typeof v == "object" && v !== null && (v.$$typeof === g || v.$$typeof === x || v.$$typeof === a || v.$$typeof === c || v.$$typeof === f || v.$$typeof === y || v.$$typeof === S || v.$$typeof === w || v.$$typeof === m);
    }
    function _(v) {
      if (typeof v == "object" && v !== null) {
        var Ee = v.$$typeof;
        switch (Ee) {
          case r:
            var $ = v.type;
            switch ($) {
              case u:
              case d:
              case n:
              case i:
              case o:
              case p:
                return $;
              default:
                var Se = $ && $.$$typeof;
                switch (Se) {
                  case c:
                  case f:
                  case g:
                  case x:
                  case a:
                    return Se;
                  default:
                    return Ee;
                }
            }
          case t:
            return Ee;
        }
      }
    }
    var l = u, A = d, k = c, pe = a, I = r, q = f, se = n, le = g, ae = x, H = t, ve = i, ce = o, be = p, fe = !1;
    function Pe(v) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(v) || _(v) === u;
    }
    function E(v) {
      return _(v) === d;
    }
    function O(v) {
      return _(v) === c;
    }
    function L(v) {
      return _(v) === a;
    }
    function F(v) {
      return typeof v == "object" && v !== null && v.$$typeof === r;
    }
    function P(v) {
      return _(v) === f;
    }
    function Y(v) {
      return _(v) === n;
    }
    function N(v) {
      return _(v) === g;
    }
    function j(v) {
      return _(v) === x;
    }
    function V(v) {
      return _(v) === t;
    }
    function M(v) {
      return _(v) === i;
    }
    function B(v) {
      return _(v) === o;
    }
    function me(v) {
      return _(v) === p;
    }
    Q.AsyncMode = l, Q.ConcurrentMode = A, Q.ContextConsumer = k, Q.ContextProvider = pe, Q.Element = I, Q.ForwardRef = q, Q.Fragment = se, Q.Lazy = le, Q.Memo = ae, Q.Portal = H, Q.Profiler = ve, Q.StrictMode = ce, Q.Suspense = be, Q.isAsyncMode = Pe, Q.isConcurrentMode = E, Q.isContextConsumer = O, Q.isContextProvider = L, Q.isElement = F, Q.isForwardRef = P, Q.isFragment = Y, Q.isLazy = N, Q.isMemo = j, Q.isPortal = V, Q.isProfiler = M, Q.isStrictMode = B, Q.isSuspense = me, Q.isValidElementType = R, Q.typeOf = _;
  }()), Q;
}
var xn;
function go() {
  return xn || (xn = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = wi() : e.exports = $i();
  }(Oi)), Hr;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var _t, Tn;
function Pi() {
  if (Tn)
    return _t;
  Tn = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(a).map(function(f) {
        return a[f];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        d[f] = f;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return _t = o() ? Object.assign : function(i, a) {
    for (var c, u = n(i), d, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var p in c)
        r.call(c, p) && (u[p] = c[p]);
      if (e) {
        d = e(c);
        for (var h = 0; h < d.length; h++)
          t.call(c, d[h]) && (u[d[h]] = c[d[h]]);
      }
    }
    return u;
  }, _t;
}
var St, _n;
function Lt() {
  if (_n)
    return St;
  _n = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return St = e, St;
}
var Rt, Sn;
function bo() {
  return Sn || (Sn = 1, Rt = Function.call.bind(Object.prototype.hasOwnProperty)), Rt;
}
var Ct, Rn;
function Ai() {
  if (Rn)
    return Ct;
  Rn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Lt(), t = {}, n = bo();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, u, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (n(i, f)) {
          var p;
          try {
            if (typeof i[f] != "function") {
              var h = Error(
                (u || "React class") + ": " + c + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            p = i[f](a, f, u, c, null, r);
          } catch (g) {
            p = g;
          }
          if (p && !(p instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in t)) {
            t[p.message] = !0;
            var x = d ? d() : "";
            e(
              "Failed " + c + " type: " + p.message + (x ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Ct = o, Ct;
}
var Ot, Cn;
function ki() {
  if (Cn)
    return Ot;
  Cn = 1;
  var e = go(), r = Pi(), t = Lt(), n = bo(), o = Ai(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Ot = function(c, u) {
    var d = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function p(E) {
      var O = E && (d && E[d] || E[f]);
      if (typeof O == "function")
        return O;
    }
    var h = "<<anonymous>>", x = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: w(),
      arrayOf: R,
      element: _(),
      elementType: l(),
      instanceOf: A,
      node: q(),
      objectOf: pe,
      oneOf: k,
      oneOfType: I,
      shape: le,
      exact: ae
    };
    function g(E, O) {
      return E === O ? E !== 0 || 1 / E === 1 / O : E !== E && O !== O;
    }
    function m(E, O) {
      this.message = E, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function y(E) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, L = 0;
      function F(Y, N, j, V, M, B, me) {
        if (V = V || h, B = B || j, me !== t) {
          if (u) {
            var v = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw v.name = "Invariant Violation", v;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ee = V + ":" + j;
            !O[Ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            L < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + B + "` prop on `" + V + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[Ee] = !0, L++);
          }
        }
        return N[j] == null ? Y ? N[j] === null ? new m("The " + M + " `" + B + "` is marked as required " + ("in `" + V + "`, but its value is `null`.")) : new m("The " + M + " `" + B + "` is marked as required in " + ("`" + V + "`, but its value is `undefined`.")) : null : E(N, j, V, M, B);
      }
      var P = F.bind(null, !1);
      return P.isRequired = F.bind(null, !0), P;
    }
    function S(E) {
      function O(L, F, P, Y, N, j) {
        var V = L[F], M = ce(V);
        if (M !== E) {
          var B = be(V);
          return new m(
            "Invalid " + Y + " `" + N + "` of type " + ("`" + B + "` supplied to `" + P + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return y(O);
    }
    function w() {
      return y(a);
    }
    function R(E) {
      function O(L, F, P, Y, N) {
        if (typeof E != "function")
          return new m("Property `" + N + "` of component `" + P + "` has invalid PropType notation inside arrayOf.");
        var j = L[F];
        if (!Array.isArray(j)) {
          var V = ce(j);
          return new m("Invalid " + Y + " `" + N + "` of type " + ("`" + V + "` supplied to `" + P + "`, expected an array."));
        }
        for (var M = 0; M < j.length; M++) {
          var B = E(j, M, P, Y, N + "[" + M + "]", t);
          if (B instanceof Error)
            return B;
        }
        return null;
      }
      return y(O);
    }
    function _() {
      function E(O, L, F, P, Y) {
        var N = O[L];
        if (!c(N)) {
          var j = ce(N);
          return new m("Invalid " + P + " `" + Y + "` of type " + ("`" + j + "` supplied to `" + F + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(E);
    }
    function l() {
      function E(O, L, F, P, Y) {
        var N = O[L];
        if (!e.isValidElementType(N)) {
          var j = ce(N);
          return new m("Invalid " + P + " `" + Y + "` of type " + ("`" + j + "` supplied to `" + F + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(E);
    }
    function A(E) {
      function O(L, F, P, Y, N) {
        if (!(L[F] instanceof E)) {
          var j = E.name || h, V = Pe(L[F]);
          return new m("Invalid " + Y + " `" + N + "` of type " + ("`" + V + "` supplied to `" + P + "`, expected ") + ("instance of `" + j + "`."));
        }
        return null;
      }
      return y(O);
    }
    function k(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function O(L, F, P, Y, N) {
        for (var j = L[F], V = 0; V < E.length; V++)
          if (g(j, E[V]))
            return null;
        var M = JSON.stringify(E, function(me, v) {
          var Ee = be(v);
          return Ee === "symbol" ? String(v) : v;
        });
        return new m("Invalid " + Y + " `" + N + "` of value `" + String(j) + "` " + ("supplied to `" + P + "`, expected one of " + M + "."));
      }
      return y(O);
    }
    function pe(E) {
      function O(L, F, P, Y, N) {
        if (typeof E != "function")
          return new m("Property `" + N + "` of component `" + P + "` has invalid PropType notation inside objectOf.");
        var j = L[F], V = ce(j);
        if (V !== "object")
          return new m("Invalid " + Y + " `" + N + "` of type " + ("`" + V + "` supplied to `" + P + "`, expected an object."));
        for (var M in j)
          if (n(j, M)) {
            var B = E(j, M, P, Y, N + "." + M, t);
            if (B instanceof Error)
              return B;
          }
        return null;
      }
      return y(O);
    }
    function I(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var O = 0; O < E.length; O++) {
        var L = E[O];
        if (typeof L != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + fe(L) + " at index " + O + "."
          ), a;
      }
      function F(P, Y, N, j, V) {
        for (var M = [], B = 0; B < E.length; B++) {
          var me = E[B], v = me(P, Y, N, j, V, t);
          if (v == null)
            return null;
          v.data && n(v.data, "expectedType") && M.push(v.data.expectedType);
        }
        var Ee = M.length > 0 ? ", expected one of type [" + M.join(", ") + "]" : "";
        return new m("Invalid " + j + " `" + V + "` supplied to " + ("`" + N + "`" + Ee + "."));
      }
      return y(F);
    }
    function q() {
      function E(O, L, F, P, Y) {
        return H(O[L]) ? null : new m("Invalid " + P + " `" + Y + "` supplied to " + ("`" + F + "`, expected a ReactNode."));
      }
      return y(E);
    }
    function se(E, O, L, F, P) {
      return new m(
        (E || "React class") + ": " + O + " type `" + L + "." + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + P + "`."
      );
    }
    function le(E) {
      function O(L, F, P, Y, N) {
        var j = L[F], V = ce(j);
        if (V !== "object")
          return new m("Invalid " + Y + " `" + N + "` of type `" + V + "` " + ("supplied to `" + P + "`, expected `object`."));
        for (var M in E) {
          var B = E[M];
          if (typeof B != "function")
            return se(P, Y, N, M, be(B));
          var me = B(j, M, P, Y, N + "." + M, t);
          if (me)
            return me;
        }
        return null;
      }
      return y(O);
    }
    function ae(E) {
      function O(L, F, P, Y, N) {
        var j = L[F], V = ce(j);
        if (V !== "object")
          return new m("Invalid " + Y + " `" + N + "` of type `" + V + "` " + ("supplied to `" + P + "`, expected `object`."));
        var M = r({}, L[F], E);
        for (var B in M) {
          var me = E[B];
          if (n(E, B) && typeof me != "function")
            return se(P, Y, N, B, be(me));
          if (!me)
            return new m(
              "Invalid " + Y + " `" + N + "` key `" + B + "` supplied to `" + P + "`.\nBad object: " + JSON.stringify(L[F], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var v = me(j, B, P, Y, N + "." + B, t);
          if (v)
            return v;
        }
        return null;
      }
      return y(O);
    }
    function H(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(H);
          if (E === null || c(E))
            return !0;
          var O = p(E);
          if (O) {
            var L = O.call(E), F;
            if (O !== E.entries) {
              for (; !(F = L.next()).done; )
                if (!H(F.value))
                  return !1;
            } else
              for (; !(F = L.next()).done; ) {
                var P = F.value;
                if (P && !H(P[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ve(E, O) {
      return E === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function ce(E) {
      var O = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : ve(O, E) ? "symbol" : O;
    }
    function be(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var O = ce(E);
      if (O === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function fe(E) {
      var O = be(E);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function Pe(E) {
      return !E.constructor || !E.constructor.name ? h : E.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, Ot;
}
var wt, On;
function Ni() {
  if (On)
    return wt;
  On = 1;
  var e = Lt();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, wt = function() {
    function n(a, c, u, d, f, p) {
      if (p !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, wt;
}
if (process.env.NODE_ENV !== "production") {
  var Ii = go(), Mi = !0;
  gn.exports = ki()(Ii.isElement, Mi);
} else
  gn.exports = Ni()();
function ji(e) {
  const {
    prototype: r = {}
  } = e;
  return Boolean(r.isReactComponent);
}
function Di(e, r, t, n, o) {
  const i = e[r], a = o || r;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !ji(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${t}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Fi = Ci(b.elementType, Di);
function fr(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
var Xr = {}, Vi = {
  get exports() {
    return Xr;
  },
  set exports(e) {
    Xr = e;
  }
}, ee = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wn;
function Li() {
  if (wn)
    return ee;
  wn = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function m(y) {
    if (typeof y == "object" && y !== null) {
      var S = y.$$typeof;
      switch (S) {
        case e:
          switch (y = y.type, y) {
            case t:
            case o:
            case n:
            case d:
            case f:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case c:
                case a:
                case u:
                case h:
                case p:
                case i:
                  return y;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  return ee.ContextConsumer = a, ee.ContextProvider = i, ee.Element = e, ee.ForwardRef = u, ee.Fragment = t, ee.Lazy = h, ee.Memo = p, ee.Portal = r, ee.Profiler = o, ee.StrictMode = n, ee.Suspense = d, ee.SuspenseList = f, ee.isAsyncMode = function() {
    return !1;
  }, ee.isConcurrentMode = function() {
    return !1;
  }, ee.isContextConsumer = function(y) {
    return m(y) === a;
  }, ee.isContextProvider = function(y) {
    return m(y) === i;
  }, ee.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === e;
  }, ee.isForwardRef = function(y) {
    return m(y) === u;
  }, ee.isFragment = function(y) {
    return m(y) === t;
  }, ee.isLazy = function(y) {
    return m(y) === h;
  }, ee.isMemo = function(y) {
    return m(y) === p;
  }, ee.isPortal = function(y) {
    return m(y) === r;
  }, ee.isProfiler = function(y) {
    return m(y) === o;
  }, ee.isStrictMode = function(y) {
    return m(y) === n;
  }, ee.isSuspense = function(y) {
    return m(y) === d;
  }, ee.isSuspenseList = function(y) {
    return m(y) === f;
  }, ee.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === t || y === o || y === n || y === d || y === f || y === x || typeof y == "object" && y !== null && (y.$$typeof === h || y.$$typeof === p || y.$$typeof === i || y.$$typeof === a || y.$$typeof === u || y.$$typeof === g || y.getModuleId !== void 0);
  }, ee.typeOf = m, ee;
}
var re = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $n;
function zi() {
  return $n || ($n = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), g = !1, m = !1, y = !1, S = !1, w = !1, R;
    R = Symbol.for("react.module.reference");
    function _($) {
      return !!(typeof $ == "string" || typeof $ == "function" || $ === t || $ === o || w || $ === n || $ === d || $ === f || S || $ === x || g || m || y || typeof $ == "object" && $ !== null && ($.$$typeof === h || $.$$typeof === p || $.$$typeof === i || $.$$typeof === a || $.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      $.$$typeof === R || $.getModuleId !== void 0));
    }
    function l($) {
      if (typeof $ == "object" && $ !== null) {
        var Se = $.$$typeof;
        switch (Se) {
          case e:
            var De = $.type;
            switch (De) {
              case t:
              case o:
              case n:
              case d:
              case f:
                return De;
              default:
                var He = De && De.$$typeof;
                switch (He) {
                  case c:
                  case a:
                  case u:
                  case h:
                  case p:
                  case i:
                    return He;
                  default:
                    return Se;
                }
            }
          case r:
            return Se;
        }
      }
    }
    var A = a, k = i, pe = e, I = u, q = t, se = h, le = p, ae = r, H = o, ve = n, ce = d, be = f, fe = !1, Pe = !1;
    function E($) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function O($) {
      return Pe || (Pe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L($) {
      return l($) === a;
    }
    function F($) {
      return l($) === i;
    }
    function P($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === e;
    }
    function Y($) {
      return l($) === u;
    }
    function N($) {
      return l($) === t;
    }
    function j($) {
      return l($) === h;
    }
    function V($) {
      return l($) === p;
    }
    function M($) {
      return l($) === r;
    }
    function B($) {
      return l($) === o;
    }
    function me($) {
      return l($) === n;
    }
    function v($) {
      return l($) === d;
    }
    function Ee($) {
      return l($) === f;
    }
    re.ContextConsumer = A, re.ContextProvider = k, re.Element = pe, re.ForwardRef = I, re.Fragment = q, re.Lazy = se, re.Memo = le, re.Portal = ae, re.Profiler = H, re.StrictMode = ve, re.Suspense = ce, re.SuspenseList = be, re.isAsyncMode = E, re.isConcurrentMode = O, re.isContextConsumer = L, re.isContextProvider = F, re.isElement = P, re.isForwardRef = Y, re.isFragment = N, re.isLazy = j, re.isMemo = V, re.isPortal = M, re.isProfiler = B, re.isStrictMode = me, re.isSuspense = v, re.isSuspenseList = Ee, re.isValidElementType = _, re.typeOf = l;
  }()), re;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Li() : e.exports = zi();
})(Vi);
const Yi = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Bi(e) {
  const r = `${e}`.match(Yi);
  return r && r[1] || "";
}
function Eo(e, r = "") {
  return e.displayName || e.name || Bi(e) || r;
}
function Pn(e, r, t) {
  const n = Eo(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function Ui(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Eo(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Xr.ForwardRef:
          return Pn(e, e.render, "ForwardRef");
        case Xr.Memo:
          return Pn(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Wi = b.oneOfType([b.func, b.object]), qi = Wi;
function Oe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : fr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ki(e, r) {
  typeof e == "function" ? e(r) : e && (e.current = r);
}
const Gi = typeof window < "u" ? W.useLayoutEffect : W.useEffect, Hi = Gi;
function Vr(e) {
  const r = W.useRef(e);
  return Hi(() => {
    r.current = e;
  }), W.useCallback((...t) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, r.current)(...t)
  ), []);
}
function An(...e) {
  return W.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    e.forEach((t) => {
      Ki(t, r);
    });
  }, e);
}
let et = !0, kt = !1, kn;
const Xi = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function Ji(e) {
  const {
    type: r,
    tagName: t
  } = e;
  return !!(t === "INPUT" && Xi[r] && !e.readOnly || t === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Zi(e) {
  e.metaKey || e.altKey || e.ctrlKey || (et = !0);
}
function $t() {
  et = !1;
}
function Qi() {
  this.visibilityState === "hidden" && kt && (et = !0);
}
function ea(e) {
  e.addEventListener("keydown", Zi, !0), e.addEventListener("mousedown", $t, !0), e.addEventListener("pointerdown", $t, !0), e.addEventListener("touchstart", $t, !0), e.addEventListener("visibilitychange", Qi, !0);
}
function ra(e) {
  const {
    target: r
  } = e;
  try {
    return r.matches(":focus-visible");
  } catch {
  }
  return et || Ji(r);
}
function ta() {
  const e = W.useCallback((o) => {
    o != null && ea(o.ownerDocument);
  }, []), r = W.useRef(!1);
  function t() {
    return r.current ? (kt = !0, window.clearTimeout(kn), kn = window.setTimeout(() => {
      kt = !1;
    }, 100), r.current = !1, !0) : !1;
  }
  function n(o) {
    return ra(o) ? (r.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: r,
    onFocus: n,
    onBlur: t,
    ref: e
  };
}
function zt(e, r) {
  const t = z({}, r);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      t[n] = z({}, e[n], t[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = r[n];
      t[n] = {}, !i || !Object.keys(i) ? t[n] = o : !o || !Object.keys(o) ? t[n] = i : (t[n] = z({}, i), Object.keys(o).forEach((a) => {
        t[n][a] = zt(o[a], i[a]);
      }));
    } else
      t[n] === void 0 && (t[n] = e[n]);
  }), t;
}
function xo(e, r, t) {
  const n = {};
  return Object.keys(e).forEach(
    // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, a) => (a && (i.push(r(a)), t && t[a] && i.push(t[a])), i), []).join(" ");
    }
  ), n;
}
const Nn = (e) => e, na = () => {
  let e = Nn;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = Nn;
    }
  };
}, oa = na(), ia = oa, aa = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  required: "required",
  selected: "selected"
};
function rt(e, r, t = "Mui") {
  const n = aa[r];
  return n ? `${t}-${n}` : `${ia.generate(e)}-${r}`;
}
function Yt(e, r, t = "Mui") {
  const n = {};
  return r.forEach((o) => {
    n[o] = rt(e, o, t);
  }), n;
}
function we(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function To(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var sa = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ca = /* @__PURE__ */ To(
  function(e) {
    return sa.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function ua(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function la(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var fa = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(la(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var a = ua(o);
      try {
        a.insertRule(n, a.cssRules.length);
      } catch (c) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', c);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), Re = "-ms-", Jr = "-moz-", J = "-webkit-", Bt = "comm", Ut = "rule", Wt = "decl", da = "@import", _o = "@keyframes", pa = Math.abs, tt = String.fromCharCode, ma = Object.assign;
function ha(e, r) {
  return _e(e, 0) ^ 45 ? (((r << 2 ^ _e(e, 0)) << 2 ^ _e(e, 1)) << 2 ^ _e(e, 2)) << 2 ^ _e(e, 3) : 0;
}
function So(e) {
  return e.trim();
}
function ya(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function oe(e, r, t) {
  return e.replace(r, t);
}
function Nt(e, r) {
  return e.indexOf(r);
}
function _e(e, r) {
  return e.charCodeAt(r) | 0;
}
function wr(e, r, t) {
  return e.slice(r, t);
}
function Ve(e) {
  return e.length;
}
function qt(e) {
  return e.length;
}
function Lr(e, r) {
  return r.push(e), e;
}
function va(e, r) {
  return e.map(r).join("");
}
var nt = 1, dr = 1, Ro = 0, $e = 0, Te = 0, mr = "";
function ot(e, r, t, n, o, i, a) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: nt, column: dr, length: a, return: "" };
}
function Sr(e, r) {
  return ma(ot("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function ga() {
  return Te;
}
function ba() {
  return Te = $e > 0 ? _e(mr, --$e) : 0, dr--, Te === 10 && (dr = 1, nt--), Te;
}
function Ne() {
  return Te = $e < Ro ? _e(mr, $e++) : 0, dr++, Te === 10 && (dr = 1, nt++), Te;
}
function ze() {
  return _e(mr, $e);
}
function Wr() {
  return $e;
}
function kr(e, r) {
  return wr(mr, e, r);
}
function $r(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Co(e) {
  return nt = dr = 1, Ro = Ve(mr = e), $e = 0, [];
}
function Oo(e) {
  return mr = "", e;
}
function qr(e) {
  return So(kr($e - 1, It(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ea(e) {
  for (; (Te = ze()) && Te < 33; )
    Ne();
  return $r(e) > 2 || $r(Te) > 3 ? "" : " ";
}
function xa(e, r) {
  for (; --r && Ne() && !(Te < 48 || Te > 102 || Te > 57 && Te < 65 || Te > 70 && Te < 97); )
    ;
  return kr(e, Wr() + (r < 6 && ze() == 32 && Ne() == 32));
}
function It(e) {
  for (; Ne(); )
    switch (Te) {
      case e:
        return $e;
      case 34:
      case 39:
        e !== 34 && e !== 39 && It(Te);
        break;
      case 40:
        e === 41 && It(e);
        break;
      case 92:
        Ne();
        break;
    }
  return $e;
}
function Ta(e, r) {
  for (; Ne() && e + Te !== 47 + 10; )
    if (e + Te === 42 + 42 && ze() === 47)
      break;
  return "/*" + kr(r, $e - 1) + "*" + tt(e === 47 ? e : Ne());
}
function _a(e) {
  for (; !$r(ze()); )
    Ne();
  return kr(e, $e);
}
function Sa(e) {
  return Oo(Kr("", null, null, null, [""], e = Co(e), 0, [0], e));
}
function Kr(e, r, t, n, o, i, a, c, u) {
  for (var d = 0, f = 0, p = a, h = 0, x = 0, g = 0, m = 1, y = 1, S = 1, w = 0, R = "", _ = o, l = i, A = n, k = R; y; )
    switch (g = w, w = Ne()) {
      case 40:
        if (g != 108 && _e(k, p - 1) == 58) {
          Nt(k += oe(qr(w), "&", "&\f"), "&\f") != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += qr(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Ea(g);
        break;
      case 92:
        k += xa(Wr() - 1, 7);
        continue;
      case 47:
        switch (ze()) {
          case 42:
          case 47:
            Lr(Ra(Ta(Ne(), Wr()), r, t), u);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * m:
        c[d++] = Ve(k) * S;
      case 125 * m:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            y = 0;
          case 59 + f:
            x > 0 && Ve(k) - p && Lr(x > 32 ? Mn(k + ";", n, t, p - 1) : Mn(oe(k, " ", "") + ";", n, t, p - 2), u);
            break;
          case 59:
            k += ";";
          default:
            if (Lr(A = In(k, r, t, d, f, o, c, R, _ = [], l = [], p), i), w === 123)
              if (f === 0)
                Kr(k, r, A, A, _, i, p, c, l);
              else
                switch (h === 99 && _e(k, 3) === 110 ? 100 : h) {
                  case 100:
                  case 109:
                  case 115:
                    Kr(e, A, A, n && Lr(In(e, A, A, 0, 0, o, c, R, o, _ = [], p), l), o, l, p, c, n ? _ : l);
                    break;
                  default:
                    Kr(k, A, A, A, [""], l, 0, c, l);
                }
        }
        d = f = x = 0, m = S = 1, R = k = "", p = a;
        break;
      case 58:
        p = 1 + Ve(k), x = g;
      default:
        if (m < 1) {
          if (w == 123)
            --m;
          else if (w == 125 && m++ == 0 && ba() == 125)
            continue;
        }
        switch (k += tt(w), w * m) {
          case 38:
            S = f > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            c[d++] = (Ve(k) - 1) * S, S = 1;
            break;
          case 64:
            ze() === 45 && (k += qr(Ne())), h = ze(), f = p = Ve(R = k += _a(Wr())), w++;
            break;
          case 45:
            g === 45 && Ve(k) == 2 && (m = 0);
        }
    }
  return i;
}
function In(e, r, t, n, o, i, a, c, u, d, f) {
  for (var p = o - 1, h = o === 0 ? i : [""], x = qt(h), g = 0, m = 0, y = 0; g < n; ++g)
    for (var S = 0, w = wr(e, p + 1, p = pa(m = a[g])), R = e; S < x; ++S)
      (R = So(m > 0 ? h[S] + " " + w : oe(w, /&\f/g, h[S]))) && (u[y++] = R);
  return ot(e, r, t, o === 0 ? Ut : c, u, d, f);
}
function Ra(e, r, t) {
  return ot(e, r, t, Bt, tt(ga()), wr(e, 2, -2), 0);
}
function Mn(e, r, t, n) {
  return ot(e, r, t, Wt, wr(e, 0, n), wr(e, n + 1, -1), n);
}
function ur(e, r) {
  for (var t = "", n = qt(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function Ca(e, r, t, n) {
  switch (e.type) {
    case da:
    case Wt:
      return e.return = e.return || e.value;
    case Bt:
      return "";
    case _o:
      return e.return = e.value + "{" + ur(e.children, n) + "}";
    case Ut:
      e.value = e.props.join(",");
  }
  return Ve(t = ur(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Oa(e) {
  var r = qt(e);
  return function(t, n, o, i) {
    for (var a = "", c = 0; c < r; c++)
      a += e[c](t, n, o, i) || "";
    return a;
  };
}
function wa(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var $a = function(r, t, n) {
  for (var o = 0, i = 0; o = i, i = ze(), o === 38 && i === 12 && (t[n] = 1), !$r(i); )
    Ne();
  return kr(r, $e);
}, Pa = function(r, t) {
  var n = -1, o = 44;
  do
    switch ($r(o)) {
      case 0:
        o === 38 && ze() === 12 && (t[n] = 1), r[n] += $a($e - 1, t, n);
        break;
      case 2:
        r[n] += qr(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = ze() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += tt(o);
    }
  while (o = Ne());
  return r;
}, Aa = function(r, t) {
  return Oo(Pa(Co(r), t));
}, jn = /* @__PURE__ */ new WeakMap(), ka = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !jn.get(n)) && !o) {
      jn.set(r, !0);
      for (var i = [], a = Aa(t, i), c = n.props, u = 0, d = 0; u < a.length; u++)
        for (var f = 0; f < c.length; f++, d++)
          r.props[d] = i[u] ? a[u].replace(/&\f/g, c[f]) : c[f] + " " + a[u];
    }
  }
}, Na = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, Ia = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Ma = function(r) {
  return r.type === "comm" && r.children.indexOf(Ia) > -1;
}, ja = function(r) {
  return function(t, n, o) {
    if (!(t.type !== "rule" || r.compat)) {
      var i = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var a = t.parent === o[0], c = a ? o[0].children : (
          // global rule at the root level
          o
        ), u = c.length - 1; u >= 0; u--) {
          var d = c[u];
          if (d.line < t.line)
            break;
          if (d.column < t.column) {
            if (Ma(d))
              return;
            break;
          }
        }
        i.forEach(function(f) {
          console.error('The pseudo class "' + f + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + f.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, wo = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, Da = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!wo(t[n]))
      return !0;
  return !1;
}, Dn = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, Fa = function(r, t, n) {
  wo(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Dn(r)) : Da(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Dn(r)));
};
function $o(e, r) {
  switch (ha(e, r)) {
    case 5103:
      return J + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return J + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return J + e + Jr + e + Re + e + e;
    case 6828:
    case 4268:
      return J + e + Re + e + e;
    case 6165:
      return J + e + Re + "flex-" + e + e;
    case 5187:
      return J + e + oe(e, /(\w+).+(:[^]+)/, J + "box-$1$2" + Re + "flex-$1$2") + e;
    case 5443:
      return J + e + Re + "flex-item-" + oe(e, /flex-|-self/, "") + e;
    case 4675:
      return J + e + Re + "flex-line-pack" + oe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return J + e + Re + oe(e, "shrink", "negative") + e;
    case 5292:
      return J + e + Re + oe(e, "basis", "preferred-size") + e;
    case 6060:
      return J + "box-" + oe(e, "-grow", "") + J + e + Re + oe(e, "grow", "positive") + e;
    case 4554:
      return J + oe(e, /([^-])(transform)/g, "$1" + J + "$2") + e;
    case 6187:
      return oe(oe(oe(e, /(zoom-|grab)/, J + "$1"), /(image-set)/, J + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return oe(e, /(image-set\([^]*)/, J + "$1$`$1");
    case 4968:
      return oe(oe(e, /(.+:)(flex-)?(.*)/, J + "box-pack:$3" + Re + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + J + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return oe(e, /(.+)-inline(.+)/, J + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ve(e) - 1 - r > 6)
        switch (_e(e, r + 1)) {
          case 109:
            if (_e(e, r + 4) !== 45)
              break;
          case 102:
            return oe(e, /(.+:)(.+)-([^]+)/, "$1" + J + "$2-$3$1" + Jr + (_e(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Nt(e, "stretch") ? $o(oe(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (_e(e, r + 1) !== 115)
        break;
    case 6444:
      switch (_e(e, Ve(e) - 3 - (~Nt(e, "!important") && 10))) {
        case 107:
          return oe(e, ":", ":" + J) + e;
        case 101:
          return oe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + J + (_e(e, 14) === 45 ? "inline-" : "") + "box$3$1" + J + "$2$3$1" + Re + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (_e(e, r + 11)) {
        case 114:
          return J + e + Re + oe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return J + e + Re + oe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return J + e + Re + oe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return J + e + Re + e + e;
  }
  return e;
}
var Va = function(r, t, n, o) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Wt:
        r.return = $o(r.value, r.length);
        break;
      case _o:
        return ur([Sr(r, {
          value: oe(r.value, "@", "@" + J)
        })], o);
      case Ut:
        if (r.length)
          return va(r.props, function(i) {
            switch (ya(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ur([Sr(r, {
                  props: [oe(i, /:(read-\w+)/, ":" + Jr + "$1")]
                })], o);
              case "::placeholder":
                return ur([Sr(r, {
                  props: [oe(i, /:(plac\w+)/, ":" + J + "input-$1")]
                }), Sr(r, {
                  props: [oe(i, /:(plac\w+)/, ":" + Jr + "$1")]
                }), Sr(r, {
                  props: [oe(i, /:(plac\w+)/, Re + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, La = [Va], za = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(m) {
      var y = m.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || La;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var i = {}, a, c = [];
  a = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(m) {
      for (var y = m.getAttribute("data-emotion").split(" "), S = 1; S < y.length; S++)
        i[y[S]] = !0;
      c.push(m);
    }
  );
  var u, d = [ka, Na];
  process.env.NODE_ENV !== "production" && d.push(ja({
    get compat() {
      return g.compat;
    }
  }), Fa);
  {
    var f, p = [Ca, process.env.NODE_ENV !== "production" ? function(m) {
      m.root || (m.return ? f.insert(m.return) : m.value && m.type !== Bt && f.insert(m.value + "{}"));
    } : wa(function(m) {
      f.insert(m);
    })], h = Oa(d.concat(o, p)), x = function(y) {
      return ur(Sa(y), h);
    };
    u = function(y, S, w, R) {
      f = w, process.env.NODE_ENV !== "production" && S.map !== void 0 && (f = {
        insert: function(l) {
          w.insert(l + S.map);
        }
      }), x(y ? y + "{" + S.styles + "}" : S.styles), R && (g.inserted[S.name] = !0);
    };
  }
  var g = {
    key: t,
    sheet: new fa({
      key: t,
      container: a,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: u
  };
  return g.sheet.hydrate(c), g;
}, Mt = {}, Ya = {
  get exports() {
    return Mt;
  },
  set exports(e) {
    Mt = e;
  }
}, te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fn;
function Ba() {
  if (Fn)
    return te;
  Fn = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function R(l) {
    if (typeof l == "object" && l !== null) {
      var A = l.$$typeof;
      switch (A) {
        case r:
          switch (l = l.type, l) {
            case u:
            case d:
            case n:
            case i:
            case o:
            case p:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case c:
                case f:
                case g:
                case x:
                case a:
                  return l;
                default:
                  return A;
              }
          }
        case t:
          return A;
      }
    }
  }
  function _(l) {
    return R(l) === d;
  }
  return te.AsyncMode = u, te.ConcurrentMode = d, te.ContextConsumer = c, te.ContextProvider = a, te.Element = r, te.ForwardRef = f, te.Fragment = n, te.Lazy = g, te.Memo = x, te.Portal = t, te.Profiler = i, te.StrictMode = o, te.Suspense = p, te.isAsyncMode = function(l) {
    return _(l) || R(l) === u;
  }, te.isConcurrentMode = _, te.isContextConsumer = function(l) {
    return R(l) === c;
  }, te.isContextProvider = function(l) {
    return R(l) === a;
  }, te.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === r;
  }, te.isForwardRef = function(l) {
    return R(l) === f;
  }, te.isFragment = function(l) {
    return R(l) === n;
  }, te.isLazy = function(l) {
    return R(l) === g;
  }, te.isMemo = function(l) {
    return R(l) === x;
  }, te.isPortal = function(l) {
    return R(l) === t;
  }, te.isProfiler = function(l) {
    return R(l) === i;
  }, te.isStrictMode = function(l) {
    return R(l) === o;
  }, te.isSuspense = function(l) {
    return R(l) === p;
  }, te.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === n || l === d || l === i || l === o || l === p || l === h || typeof l == "object" && l !== null && (l.$$typeof === g || l.$$typeof === x || l.$$typeof === a || l.$$typeof === c || l.$$typeof === f || l.$$typeof === y || l.$$typeof === S || l.$$typeof === w || l.$$typeof === m);
  }, te.typeOf = R, te;
}
var ne = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn;
function Ua() {
  return Vn || (Vn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function R(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === n || v === d || v === i || v === o || v === p || v === h || typeof v == "object" && v !== null && (v.$$typeof === g || v.$$typeof === x || v.$$typeof === a || v.$$typeof === c || v.$$typeof === f || v.$$typeof === y || v.$$typeof === S || v.$$typeof === w || v.$$typeof === m);
    }
    function _(v) {
      if (typeof v == "object" && v !== null) {
        var Ee = v.$$typeof;
        switch (Ee) {
          case r:
            var $ = v.type;
            switch ($) {
              case u:
              case d:
              case n:
              case i:
              case o:
              case p:
                return $;
              default:
                var Se = $ && $.$$typeof;
                switch (Se) {
                  case c:
                  case f:
                  case g:
                  case x:
                  case a:
                    return Se;
                  default:
                    return Ee;
                }
            }
          case t:
            return Ee;
        }
      }
    }
    var l = u, A = d, k = c, pe = a, I = r, q = f, se = n, le = g, ae = x, H = t, ve = i, ce = o, be = p, fe = !1;
    function Pe(v) {
      return fe || (fe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(v) || _(v) === u;
    }
    function E(v) {
      return _(v) === d;
    }
    function O(v) {
      return _(v) === c;
    }
    function L(v) {
      return _(v) === a;
    }
    function F(v) {
      return typeof v == "object" && v !== null && v.$$typeof === r;
    }
    function P(v) {
      return _(v) === f;
    }
    function Y(v) {
      return _(v) === n;
    }
    function N(v) {
      return _(v) === g;
    }
    function j(v) {
      return _(v) === x;
    }
    function V(v) {
      return _(v) === t;
    }
    function M(v) {
      return _(v) === i;
    }
    function B(v) {
      return _(v) === o;
    }
    function me(v) {
      return _(v) === p;
    }
    ne.AsyncMode = l, ne.ConcurrentMode = A, ne.ContextConsumer = k, ne.ContextProvider = pe, ne.Element = I, ne.ForwardRef = q, ne.Fragment = se, ne.Lazy = le, ne.Memo = ae, ne.Portal = H, ne.Profiler = ve, ne.StrictMode = ce, ne.Suspense = be, ne.isAsyncMode = Pe, ne.isConcurrentMode = E, ne.isContextConsumer = O, ne.isContextProvider = L, ne.isElement = F, ne.isForwardRef = P, ne.isFragment = Y, ne.isLazy = N, ne.isMemo = j, ne.isPortal = V, ne.isProfiler = M, ne.isStrictMode = B, ne.isSuspense = me, ne.isValidElementType = R, ne.typeOf = _;
  }()), ne;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ba() : e.exports = Ua();
})(Ya);
var Po = Mt, Wa = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, qa = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ao = {};
Ao[Po.ForwardRef] = Wa;
Ao[Po.Memo] = qa;
var Ka = !0;
function Kt(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : n += o + " ";
  }), n;
}
var it = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Ka === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, at = function(r, t, n) {
  it(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + o : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Ga(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var Ha = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ln = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Xa = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Ja = /[A-Z]|^ms/g, ko = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Gt = function(r) {
  return r.charCodeAt(1) === 45;
}, zn = function(r) {
  return r != null && typeof r != "boolean";
}, Pt = /* @__PURE__ */ To(function(e) {
  return Gt(e) ? e : e.replace(Ja, "-$&").toLowerCase();
}), Zr = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(ko, function(n, o, i) {
          return Fe = {
            name: o,
            styles: i,
            next: Fe
          }, o;
        });
  }
  return Ha[r] !== 1 && !Gt(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var Za = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Qa = ["normal", "none", "initial", "inherit", "unset"], es = Zr, rs = /^-ms-/, ts = /-(.)/g, Yn = {};
  Zr = function(r, t) {
    if (r === "content" && (typeof t != "string" || Qa.indexOf(t) === -1 && !Za.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = es(r, t);
    return n !== "" && !Gt(r) && r.indexOf("-") !== -1 && Yn[r] === void 0 && (Yn[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(rs, "ms-").replace(ts, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var No = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Pr(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(No);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return Fe = {
          name: t.name,
          styles: t.styles,
          next: Fe
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            Fe = {
              name: n.name,
              styles: n.styles,
              next: Fe
            }, n = n.next;
        var o = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (o += t.map), o;
      }
      return ns(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var i = Fe, a = t(e);
        return Fe = i, Pr(e, r, a);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var c = [], u = t.replace(ko, function(f, p, h) {
          var x = "animation" + c.length;
          return c.push("const " + x + " = keyframes`" + h.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + x + "}";
        });
        c.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(c, ["`" + u + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + u + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var d = r[t];
  return d !== void 0 ? d : t;
}
function ns(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += Pr(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var a = t[i];
      if (typeof a != "object")
        r != null && r[a] !== void 0 ? n += i + "{" + r[a] + "}" : zn(a) && (n += Pt(i) + ":" + Zr(i, a) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(No);
        if (Array.isArray(a) && typeof a[0] == "string" && (r == null || r[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            zn(a[c]) && (n += Pt(i) + ":" + Zr(i, a[c]) + ";");
        else {
          var u = Pr(e, r, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Pt(i) + ":" + u + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(Xa), n += i + "{" + u + "}";
          }
        }
      }
    }
  return n;
}
var Bn = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Io;
process.env.NODE_ENV !== "production" && (Io = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Fe, pr = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var o = !0, i = "";
  Fe = void 0;
  var a = r[0];
  a == null || a.raw === void 0 ? (o = !1, i += Pr(n, t, a)) : (process.env.NODE_ENV !== "production" && a[0] === void 0 && console.error(Ln), i += a[0]);
  for (var c = 1; c < r.length; c++)
    i += Pr(n, t, r[c]), o && (process.env.NODE_ENV !== "production" && a[c] === void 0 && console.error(Ln), i += a[c]);
  var u;
  process.env.NODE_ENV !== "production" && (i = i.replace(Io, function(h) {
    return u = h, "";
  })), Bn.lastIndex = 0;
  for (var d = "", f; (f = Bn.exec(i)) !== null; )
    d += "-" + // $FlowFixMe we know it's not null
    f[1];
  var p = Ga(i) + d;
  return process.env.NODE_ENV !== "production" ? {
    name: p,
    styles: i,
    map: u,
    next: Fe,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: p,
    styles: i,
    next: Fe
  };
}, os = function(r) {
  return r();
}, Mo = W["useInsertionEffect"] ? W["useInsertionEffect"] : !1, Ht = Mo || os, Un = Mo || ui, is = {}.hasOwnProperty, Xt = /* @__PURE__ */ yo(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ za({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Xt.displayName = "EmotionCacheContext");
Xt.Provider;
var st = function(r) {
  return /* @__PURE__ */ li(function(t, n) {
    var o = Ar(Xt);
    return r(t, o, n);
  });
}, Nr = /* @__PURE__ */ yo({});
process.env.NODE_ENV !== "production" && (Nr.displayName = "EmotionThemeContext");
var Wn = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", qn = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", as = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return it(t, n, o), Ht(function() {
    return at(t, n, o);
  }), null;
}, ss = /* @__PURE__ */ st(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var o = e[Wn], i = [n], a = "";
  typeof e.className == "string" ? a = Kt(r.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var c = pr(i, void 0, Ar(Nr));
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var u = e[qn];
    u && (c = pr([c, "label:" + u + ";"]));
  }
  a += r.key + "-" + c.name;
  var d = {};
  for (var f in e)
    is.call(e, f) && f !== "css" && f !== Wn && (process.env.NODE_ENV === "production" || f !== qn) && (d[f] = e[f]);
  return d.ref = t, d.className = a, /* @__PURE__ */ Ke(Vt, null, /* @__PURE__ */ Ke(as, {
    cache: r,
    serialized: c,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ Ke(o, d));
});
process.env.NODE_ENV !== "production" && (ss.displayName = "EmotionCssPropInternal");
var cs = {
  name: "@emotion/react",
  version: "11.10.5",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": "./macro.js"
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.js",
    "macro.d.ts",
    "macro.js.flow"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.10.5",
    "@emotion/cache": "^11.10.5",
    "@emotion/serialize": "^1.1.1",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.0",
    "@emotion/utils": "^1.2.0",
    "@emotion/weak-memoize": "^0.3.0",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    "@babel/core": "^7.0.0",
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@babel/core": {
      optional: !0
    },
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@babel/core": "^7.18.5",
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.10.5",
    "@emotion/css-prettifier": "1.1.1",
    "@emotion/server": "11.10.0",
    "@emotion/styled": "11.10.5",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": "./macro.js"
      }
    }
  }
}, Kn = !1, us = /* @__PURE__ */ st(function(e, r) {
  process.env.NODE_ENV !== "production" && !Kn && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Kn = !0);
  var t = e.styles, n = pr([t], void 0, Ar(Nr)), o = fi();
  return Un(function() {
    var i = r.key + "-global", a = new r.sheet.constructor({
      key: i,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), c = !1, u = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return r.sheet.tags.length && (a.before = r.sheet.tags[0]), u !== null && (c = !0, u.setAttribute("data-emotion", i), a.hydrate([u])), o.current = [a, c], function() {
      a.flush();
    };
  }, [r]), Un(function() {
    var i = o.current, a = i[0], c = i[1];
    if (c) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && at(r, n.next, !0), a.tags.length) {
      var u = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = u, a.flush();
    }
    r.insert("", n, a, !1);
  }, [r, n.name]), null;
});
process.env.NODE_ENV !== "production" && (us.displayName = "EmotionGlobal");
function ls() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return pr(r);
}
var Jt = function() {
  var r = ls.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, fs = function e(r) {
  for (var t = r.length, n = 0, o = ""; n < t; n++) {
    var i = r[n];
    if (i != null) {
      var a = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            a = e(i);
          else {
            process.env.NODE_ENV !== "production" && i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), a = "";
            for (var c in i)
              i[c] && c && (a && (a += " "), a += c);
          }
          break;
        }
        default:
          a = i;
      }
      a && (o && (o += " "), o += a);
    }
  }
  return o;
};
function ds(e, r, t) {
  var n = [], o = Kt(e, n, t);
  return n.length < 2 ? t : o + r(n);
}
var ps = function(r) {
  var t = r.cache, n = r.serializedArr;
  return Ht(function() {
    for (var o = 0; o < n.length; o++)
      at(t, n[o], !1);
  }), null;
}, ms = /* @__PURE__ */ st(function(e, r) {
  var t = !1, n = [], o = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var d = arguments.length, f = new Array(d), p = 0; p < d; p++)
      f[p] = arguments[p];
    var h = pr(f, r.registered);
    return n.push(h), it(r, h, !1), r.key + "-" + h.name;
  }, i = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var d = arguments.length, f = new Array(d), p = 0; p < d; p++)
      f[p] = arguments[p];
    return ds(r.registered, o, fs(f));
  }, a = {
    css: o,
    cx: i,
    theme: Ar(Nr)
  }, c = e.children(a);
  return t = !0, /* @__PURE__ */ Ke(Vt, null, /* @__PURE__ */ Ke(ps, {
    cache: r,
    serializedArr: n
  }), c);
});
process.env.NODE_ENV !== "production" && (ms.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Gn = !0, hs = typeof jest < "u" || typeof vi < "u";
  if (Gn && !hs) {
    var Hn = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Gn ? window : global
    ), Xn = "__EMOTION_REACT_" + cs.version.split(".")[0] + "__";
    Hn[Xn] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Hn[Xn] = !0;
  }
}
var ys = ca, vs = function(r) {
  return r !== "theme";
}, Jn = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? ys : vs;
}, Zn = function(r, t, n) {
  var o;
  if (t) {
    var i = t.shouldForwardProp;
    o = r.__emotion_forwardProp && i ? function(a) {
      return r.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, Qn = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, gs = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return it(t, n, o), Ht(function() {
    return at(t, n, o);
  }), null;
}, bs = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, i, a;
  t !== void 0 && (i = t.label, a = t.target);
  var c = Zn(r, t, n), u = c || Jn(o), d = !u("as");
  return function() {
    var f = arguments, p = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      p.push.apply(p, f);
    else {
      process.env.NODE_ENV !== "production" && f[0][0] === void 0 && console.error(Qn), p.push(f[0][0]);
      for (var h = f.length, x = 1; x < h; x++)
        process.env.NODE_ENV !== "production" && f[0][x] === void 0 && console.error(Qn), p.push(f[x], f[0][x]);
    }
    var g = st(function(m, y, S) {
      var w = d && m.as || o, R = "", _ = [], l = m;
      if (m.theme == null) {
        l = {};
        for (var A in m)
          l[A] = m[A];
        l.theme = Ar(Nr);
      }
      typeof m.className == "string" ? R = Kt(y.registered, _, m.className) : m.className != null && (R = m.className + " ");
      var k = pr(p.concat(_), y.registered, l);
      R += y.key + "-" + k.name, a !== void 0 && (R += " " + a);
      var pe = d && c === void 0 ? Jn(w) : u, I = {};
      for (var q in m)
        d && q === "as" || // $FlowFixMe
        pe(q) && (I[q] = m[q]);
      return I.className = R, I.ref = S, /* @__PURE__ */ Ke(Vt, null, /* @__PURE__ */ Ke(gs, {
        cache: y,
        serialized: k,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ Ke(w, I));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = r.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = p, g.__emotion_forwardProp = c, Object.defineProperty(g, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), g.withComponent = function(m, y) {
      return e(m, z({}, t, y, {
        shouldForwardProp: Zn(g, y, !0)
      })).apply(void 0, p);
    }, g;
  };
}, Es = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], jt = bs.bind();
Es.forEach(function(e) {
  jt[e] = jt(e);
});
const xs = jt;
/** @license MUI v5.11.0
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ts(e, r) {
  const t = xs(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
const _s = (e, r) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
}, Ss = process.env.NODE_ENV !== "production" ? b.oneOfType([b.number, b.string, b.object, b.array]) : {}, Ge = Ss;
function Cr(e, r) {
  return r ? Be(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Zt = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, eo = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Zt[e]}px)`
};
function Ue(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || eo;
    return r.reduce((a, c, u) => (a[i.up(i.keys[u])] = t(r[u]), a), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || eo;
    return Object.keys(r).reduce((a, c) => {
      if (Object.keys(i.values || Zt).indexOf(c) !== -1) {
        const u = i.up(c);
        a[u] = t(r[c], c);
      } else {
        const u = c;
        a[u] = r[u];
      }
      return a;
    }, {});
  }
  return t(r);
}
function Rs(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Cs(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function ct(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Qr(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = ct(e, t) || n, r && (o = r(o, n, e)), o;
}
function ie(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[r] == null)
      return null;
    const c = a[r], u = a.theme, d = ct(u, n) || {};
    return Ue(a, c, (p) => {
      let h = Qr(d, o, p);
      return p === h && typeof p == "string" && (h = Qr(d, o, `${r}${p === "default" ? "" : Oe(p)}`, p)), t === !1 ? h : {
        [t]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: Ge
  } : {}, i.filterProps = [r], i;
}
function ut(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? Cr(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function Os(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const ws = {
  m: "margin",
  p: "padding"
}, $s = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ro = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ps = Os((e) => {
  if (e.length > 2)
    if (ro[e])
      e = ro[e];
    else
      return [e];
  const [r, t] = e.split(""), n = ws[r], o = $s[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), lt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ft = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], As = [...lt, ...ft];
function Ir(e, r, t, n) {
  var o;
  const i = (o = ct(e, r, !1)) != null ? o : t;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function jo(e) {
  return Ir(e, "spacing", 8, "spacing");
}
function Mr(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function ks(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = Mr(r, t), n), {});
}
function Ns(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const o = Ps(t), i = ks(o, n), a = e[t];
  return Ue(e, a, i);
}
function Do(e, r) {
  const t = jo(e.theme);
  return Object.keys(e).map((n) => Ns(e, r, n, t)).reduce(Cr, {});
}
function he(e) {
  return Do(e, lt);
}
he.propTypes = process.env.NODE_ENV !== "production" ? lt.reduce((e, r) => (e[r] = Ge, e), {}) : {};
he.filterProps = lt;
function ye(e) {
  return Do(e, ft);
}
ye.propTypes = process.env.NODE_ENV !== "production" ? ft.reduce((e, r) => (e[r] = Ge, e), {}) : {};
ye.filterProps = ft;
process.env.NODE_ENV !== "production" && As.reduce((e, r) => (e[r] = Ge, e), {});
function Le(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Is = ie({
  prop: "border",
  themeKey: "borders",
  transform: Le
}), Ms = ie({
  prop: "borderTop",
  themeKey: "borders",
  transform: Le
}), js = ie({
  prop: "borderRight",
  themeKey: "borders",
  transform: Le
}), Ds = ie({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Le
}), Fs = ie({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Le
}), Vs = ie({
  prop: "borderColor",
  themeKey: "palette"
}), Ls = ie({
  prop: "borderTopColor",
  themeKey: "palette"
}), zs = ie({
  prop: "borderRightColor",
  themeKey: "palette"
}), Ys = ie({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Bs = ie({
  prop: "borderLeftColor",
  themeKey: "palette"
}), dt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = Ir(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: Mr(r, n)
    });
    return Ue(e, e.borderRadius, t);
  }
  return null;
};
dt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ge
} : {};
dt.filterProps = ["borderRadius"];
ut(Is, Ms, js, Ds, Fs, Vs, Ls, zs, Ys, Bs, dt);
const pt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = Ir(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: Mr(r, n)
    });
    return Ue(e, e.gap, t);
  }
  return null;
};
pt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ge
} : {};
pt.filterProps = ["gap"];
const mt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = Ir(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: Mr(r, n)
    });
    return Ue(e, e.columnGap, t);
  }
  return null;
};
mt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ge
} : {};
mt.filterProps = ["columnGap"];
const ht = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = Ir(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: Mr(r, n)
    });
    return Ue(e, e.rowGap, t);
  }
  return null;
};
ht.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ge
} : {};
ht.filterProps = ["rowGap"];
const Us = ie({
  prop: "gridColumn"
}), Ws = ie({
  prop: "gridRow"
}), qs = ie({
  prop: "gridAutoFlow"
}), Ks = ie({
  prop: "gridAutoColumns"
}), Gs = ie({
  prop: "gridAutoRows"
}), Hs = ie({
  prop: "gridTemplateColumns"
}), Xs = ie({
  prop: "gridTemplateRows"
}), Js = ie({
  prop: "gridTemplateAreas"
}), Zs = ie({
  prop: "gridArea"
});
ut(pt, mt, ht, Us, Ws, qs, Ks, Gs, Hs, Xs, Js, Zs);
function lr(e, r) {
  return r === "grey" ? r : e;
}
const Qs = ie({
  prop: "color",
  themeKey: "palette",
  transform: lr
}), ec = ie({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: lr
}), rc = ie({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: lr
});
ut(Qs, ec, rc);
function Ae(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const tc = ie({
  prop: "width",
  transform: Ae
}), Qt = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, o, i;
      return {
        maxWidth: ((n = e.theme) == null || (o = n.breakpoints) == null || (i = o.values) == null ? void 0 : i[t]) || Zt[t] || Ae(t)
      };
    };
    return Ue(e, e.maxWidth, r);
  }
  return null;
};
Qt.filterProps = ["maxWidth"];
const nc = ie({
  prop: "minWidth",
  transform: Ae
}), oc = ie({
  prop: "height",
  transform: Ae
}), ic = ie({
  prop: "maxHeight",
  transform: Ae
}), ac = ie({
  prop: "minHeight",
  transform: Ae
});
ie({
  prop: "size",
  cssProperty: "width",
  transform: Ae
});
ie({
  prop: "size",
  cssProperty: "height",
  transform: Ae
});
const sc = ie({
  prop: "boxSizing"
});
ut(tc, Qt, nc, oc, ic, ac, sc);
const cc = {
  // borders
  border: {
    themeKey: "borders",
    transform: Le
  },
  borderTop: {
    themeKey: "borders",
    transform: Le
  },
  borderRight: {
    themeKey: "borders",
    transform: Le
  },
  borderBottom: {
    themeKey: "borders",
    transform: Le
  },
  borderLeft: {
    themeKey: "borders",
    transform: Le
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: dt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: lr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: lr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: lr
  },
  // spacing
  p: {
    style: ye
  },
  pt: {
    style: ye
  },
  pr: {
    style: ye
  },
  pb: {
    style: ye
  },
  pl: {
    style: ye
  },
  px: {
    style: ye
  },
  py: {
    style: ye
  },
  padding: {
    style: ye
  },
  paddingTop: {
    style: ye
  },
  paddingRight: {
    style: ye
  },
  paddingBottom: {
    style: ye
  },
  paddingLeft: {
    style: ye
  },
  paddingX: {
    style: ye
  },
  paddingY: {
    style: ye
  },
  paddingInline: {
    style: ye
  },
  paddingInlineStart: {
    style: ye
  },
  paddingInlineEnd: {
    style: ye
  },
  paddingBlock: {
    style: ye
  },
  paddingBlockStart: {
    style: ye
  },
  paddingBlockEnd: {
    style: ye
  },
  m: {
    style: he
  },
  mt: {
    style: he
  },
  mr: {
    style: he
  },
  mb: {
    style: he
  },
  ml: {
    style: he
  },
  mx: {
    style: he
  },
  my: {
    style: he
  },
  margin: {
    style: he
  },
  marginTop: {
    style: he
  },
  marginRight: {
    style: he
  },
  marginBottom: {
    style: he
  },
  marginLeft: {
    style: he
  },
  marginX: {
    style: he
  },
  marginY: {
    style: he
  },
  marginInline: {
    style: he
  },
  marginInlineStart: {
    style: he
  },
  marginInlineEnd: {
    style: he
  },
  marginBlock: {
    style: he
  },
  marginBlockStart: {
    style: he
  },
  marginBlockEnd: {
    style: he
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: pt
  },
  rowGap: {
    style: ht
  },
  columnGap: {
    style: mt
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Ae
  },
  maxWidth: {
    style: Qt
  },
  minWidth: {
    transform: Ae
  },
  height: {
    transform: Ae
  },
  maxHeight: {
    transform: Ae
  },
  minHeight: {
    transform: Ae
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, en = cc;
function uc(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function lc(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function fc() {
  function e(t, n, o, i) {
    const a = {
      [t]: n,
      theme: o
    }, c = i[t];
    if (!c)
      return {
        [t]: n
      };
    const {
      cssProperty: u = t,
      themeKey: d,
      transform: f,
      style: p
    } = c;
    if (n == null)
      return null;
    const h = ct(o, d) || {};
    return p ? p(a) : Ue(a, n, (g) => {
      let m = Qr(h, f, g);
      return g === m && typeof g == "string" && (m = Qr(h, f, `${t}${g === "default" ? "" : Oe(g)}`, g)), u === !1 ? m : {
        [u]: m
      };
    });
  }
  function r(t) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = t || {};
    if (!o)
      return null;
    const a = (n = i.unstable_sxConfig) != null ? n : en;
    function c(u) {
      let d = u;
      if (typeof u == "function")
        d = u(i);
      else if (typeof u != "object")
        return u;
      if (!d)
        return null;
      const f = Rs(i.breakpoints), p = Object.keys(f);
      let h = f;
      return Object.keys(d).forEach((x) => {
        const g = lc(d[x], i);
        if (g != null)
          if (typeof g == "object")
            if (a[x])
              h = Cr(h, e(x, g, i, a));
            else {
              const m = Ue({
                theme: i
              }, g, (y) => ({
                [x]: y
              }));
              uc(m, g) ? h[x] = r({
                sx: g,
                theme: i
              }) : h = Cr(h, m);
            }
          else
            h = Cr(h, e(x, g, i, a));
      }), Cs(p, h);
    }
    return Array.isArray(o) ? o.map(c) : c(o);
  }
  return r;
}
const Fo = fc();
Fo.filterProps = ["sx"];
const rn = Fo;
function Vo(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (r = 0; r < e.length; r++)
        e[r] && (t = Vo(e[r])) && (n && (n += " "), n += t);
    else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function Me() {
  for (var e, r, t = 0, n = ""; t < arguments.length; )
    (e = arguments[t++]) && (r = Vo(e)) && (n && (n += " "), n += r);
  return n;
}
const dc = ["values", "unit", "step"], pc = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => z({}, t, {
    [n.key]: n.val
  }), {});
};
function mc(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5
  } = e, o = we(e, dc), i = pc(r), a = Object.keys(i);
  function c(h) {
    return `@media (min-width:${typeof r[h] == "number" ? r[h] : h}${t})`;
  }
  function u(h) {
    return `@media (max-width:${(typeof r[h] == "number" ? r[h] : h) - n / 100}${t})`;
  }
  function d(h, x) {
    const g = a.indexOf(x);
    return `@media (min-width:${typeof r[h] == "number" ? r[h] : h}${t}) and (max-width:${(g !== -1 && typeof r[a[g]] == "number" ? r[a[g]] : x) - n / 100}${t})`;
  }
  function f(h) {
    return a.indexOf(h) + 1 < a.length ? d(h, a[a.indexOf(h) + 1]) : c(h);
  }
  function p(h) {
    const x = a.indexOf(h);
    return x === 0 ? c(a[1]) : x === a.length - 1 ? u(a[x]) : d(h, a[a.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return z({
    keys: a,
    values: i,
    up: c,
    down: u,
    between: d,
    only: f,
    not: p,
    unit: t
  }, o);
}
const hc = {
  borderRadius: 4
}, yc = hc;
function vc(e = 8) {
  if (e.mui)
    return e;
  const r = jo({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = r(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return t.mui = !0, t;
}
const gc = ["breakpoints", "palette", "spacing", "shape"];
function tn(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, a = we(e, gc), c = mc(t), u = vc(o);
  let d = Be({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: z({
      mode: "light"
    }, n),
    spacing: u,
    shape: z({}, yc, i)
  }, a);
  return d = r.reduce((f, p) => Be(f, p), d), d.unstable_sxConfig = z({}, en, a?.unstable_sxConfig), d.unstable_sx = function(p) {
    return rn({
      sx: p,
      theme: this
    });
  }, d;
}
const Lo = /* @__PURE__ */ W.createContext(null);
process.env.NODE_ENV !== "production" && (Lo.displayName = "ThemeContext");
const bc = Lo;
function Ec() {
  const e = W.useContext(bc);
  return process.env.NODE_ENV !== "production" && W.useDebugValue(e), e;
}
function xc(e) {
  return Object.keys(e).length === 0;
}
function Tc(e = null) {
  const r = Ec();
  return !r || xc(r) ? e : r;
}
const _c = tn();
function Sc(e = _c) {
  return Tc(e);
}
const Rc = ["variant"];
function to(e) {
  return e.length === 0;
}
function zo(e) {
  const {
    variant: r
  } = e, t = we(e, Rc);
  let n = r || "";
  return Object.keys(t).sort().forEach((o) => {
    o === "color" ? n += to(n) ? e[o] : Oe(e[o]) : n += `${to(n) ? o : Oe(o)}${Oe(e[o].toString())}`;
  }), n;
}
const Cc = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"], Oc = ["theme"], wc = ["theme"];
function Rr(e) {
  return Object.keys(e).length === 0;
}
function $c(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Pc = (e, r) => r.components && r.components[e] && r.components[e].styleOverrides ? r.components[e].styleOverrides : null, Ac = (e, r) => {
  let t = [];
  r && r.components && r.components[e] && r.components[e].variants && (t = r.components[e].variants);
  const n = {};
  return t.forEach((o) => {
    const i = zo(o.props);
    n[i] = o.style;
  }), n;
}, kc = (e, r, t, n) => {
  var o, i;
  const {
    ownerState: a = {}
  } = e, c = [], u = t == null || (o = t.components) == null || (i = o[n]) == null ? void 0 : i.variants;
  return u && u.forEach((d) => {
    let f = !0;
    Object.keys(d.props).forEach((p) => {
      a[p] !== d.props[p] && e[p] !== d.props[p] && (f = !1);
    }), f && c.push(r[zo(d.props)]);
  }), c;
};
function Gr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Nc = tn(), Ic = (e) => e.charAt(0).toLowerCase() + e.slice(1);
function Mc(e = {}) {
  const {
    defaultTheme: r = Nc,
    rootShouldForwardProp: t = Gr,
    slotShouldForwardProp: n = Gr
  } = e, o = (i) => {
    const a = Rr(i.theme) ? r : i.theme;
    return rn(z({}, i, {
      theme: a
    }));
  };
  return o.__mui_systemSx = !0, (i, a = {}) => {
    _s(i, (R) => R.filter((_) => !(_ != null && _.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: f,
      overridesResolver: p
    } = a, h = we(a, Cc), x = d !== void 0 ? d : u && u !== "Root" || !1, g = f || !1;
    let m;
    process.env.NODE_ENV !== "production" && c && (m = `${c}-${Ic(u || "Root")}`);
    let y = Gr;
    u === "Root" ? y = t : u ? y = n : $c(i) && (y = void 0);
    const S = Ts(i, z({
      shouldForwardProp: y,
      label: m
    }, h)), w = (R, ..._) => {
      const l = _ ? _.map((I) => typeof I == "function" && I.__emotion_real !== I ? (q) => {
        let {
          theme: se
        } = q, le = we(q, Oc);
        return I(z({
          theme: Rr(se) ? r : se
        }, le));
      } : I) : [];
      let A = R;
      c && p && l.push((I) => {
        const q = Rr(I.theme) ? r : I.theme, se = Pc(c, q);
        if (se) {
          const le = {};
          return Object.entries(se).forEach(([ae, H]) => {
            le[ae] = typeof H == "function" ? H(z({}, I, {
              theme: q
            })) : H;
          }), p(I, le);
        }
        return null;
      }), c && !x && l.push((I) => {
        const q = Rr(I.theme) ? r : I.theme;
        return kc(I, Ac(c, q), q, c);
      }), g || l.push(o);
      const k = l.length - _.length;
      if (Array.isArray(R) && k > 0) {
        const I = new Array(k).fill("");
        A = [...R, ...I], A.raw = [...R.raw, ...I];
      } else
        typeof R == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        R.__emotion_real !== R && (A = (I) => {
          let {
            theme: q
          } = I, se = we(I, wc);
          return R(z({
            theme: Rr(q) ? r : q
          }, se));
        });
      const pe = S(A, ...l);
      if (process.env.NODE_ENV !== "production") {
        let I;
        c && (I = `${c}${u || ""}`), I === void 0 && (I = `Styled(${Ui(i)})`), pe.displayName = I;
      }
      return pe;
    };
    return S.withConfig && (w.withConfig = S.withConfig), w;
  };
}
function jc(e) {
  const {
    theme: r,
    name: t,
    props: n
  } = e;
  return !r || !r.components || !r.components[t] || !r.components[t].defaultProps ? n : zt(r.components[t].defaultProps, n);
}
function Dc({
  props: e,
  name: r,
  defaultTheme: t
}) {
  const n = Sc(t);
  return jc({
    theme: n,
    name: r,
    props: e
  });
}
function nn(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), Math.min(Math.max(r, e), t);
}
function Fc(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ze(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ze(Fc(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : fr(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : fr(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
function yt(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.indexOf("color") !== -1 ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function Vc(e) {
  e = Ze(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), a = (d, f = (d + t / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let c = "rgb";
  const u = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", u.push(r[3])), yt({
    type: c,
    values: u
  });
}
function no(e) {
  e = Ze(e);
  let r = e.type === "hsl" || e.type === "hsla" ? Ze(Vc(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function oo(e, r) {
  const t = no(e), n = no(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function zr(e, r) {
  return e = Ze(e), r = nn(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, yt(e);
}
function Lc(e, r) {
  if (e = Ze(e), r = nn(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return yt(e);
}
function zc(e, r) {
  if (e = Ze(e), r = nn(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return yt(e);
}
function Yc(e, r) {
  return z({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, r);
}
const Bc = ["mode", "contrastThreshold", "tonalOffset"], io = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Or.white,
    default: Or.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, At = {
  text: {
    primary: Or.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Or.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function ao(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = zc(e.main, o) : r === "dark" && (e.dark = Lc(e.main, i)));
}
function Uc(e = "light") {
  return e === "dark" ? {
    main: ir[200],
    light: ir[50],
    dark: ir[400]
  } : {
    main: ir[700],
    light: ir[400],
    dark: ir[800]
  };
}
function Wc(e = "light") {
  return e === "dark" ? {
    main: or[200],
    light: or[50],
    dark: or[400]
  } : {
    main: or[500],
    light: or[300],
    dark: or[700]
  };
}
function qc(e = "light") {
  return e === "dark" ? {
    main: nr[500],
    light: nr[300],
    dark: nr[700]
  } : {
    main: nr[700],
    light: nr[400],
    dark: nr[800]
  };
}
function Kc(e = "light") {
  return e === "dark" ? {
    main: ar[400],
    light: ar[300],
    dark: ar[700]
  } : {
    main: ar[700],
    light: ar[500],
    dark: ar[900]
  };
}
function Gc(e = "light") {
  return e === "dark" ? {
    main: sr[400],
    light: sr[300],
    dark: sr[700]
  } : {
    main: sr[800],
    light: sr[500],
    dark: sr[900]
  };
}
function Hc(e = "light") {
  return e === "dark" ? {
    main: _r[400],
    light: _r[300],
    dark: _r[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: _r[500],
    dark: _r[900]
  };
}
function Xc(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, o = we(e, Bc), i = e.primary || Uc(r), a = e.secondary || Wc(r), c = e.error || qc(r), u = e.info || Kc(r), d = e.success || Gc(r), f = e.warning || Hc(r);
  function p(m) {
    const y = oo(m, At.text.primary) >= t ? At.text.primary : io.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const S = oo(m, y);
      S < 3 && console.error([`MUI: The contrast ratio of ${S}:1 for ${y} on ${m}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return y;
  }
  const h = ({
    color: m,
    name: y,
    mainShade: S = 500,
    lightShade: w = 300,
    darkShade: R = 700
  }) => {
    if (m = z({}, m), !m.main && m[S] && (m.main = m[S]), !m.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${S}\` property.` : fr(11, y ? ` (${y})` : "", S));
    if (typeof m.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(m.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : fr(12, y ? ` (${y})` : "", JSON.stringify(m.main)));
    return ao(m, "light", w, n), ao(m, "dark", R, n), m.contrastText || (m.contrastText = p(m.main)), m;
  }, x = {
    dark: At,
    light: io
  };
  return process.env.NODE_ENV !== "production" && (x[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), Be(z({
    // A collection of common colors.
    common: z({}, Or),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Ri,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, x[r]), o);
}
const Jc = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Zc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const so = {
  textTransform: "uppercase"
}, co = '"Roboto", "Helvetica", "Arial", sans-serif';
function Qc(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = co,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: d = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: p
  } = t, h = we(t, Jc);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof d != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const x = o / 14, g = p || ((S) => `${S / d * x}rem`), m = (S, w, R, _, l) => z({
    fontFamily: n,
    fontWeight: S,
    fontSize: g(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: R
  }, n === co ? {
    letterSpacing: `${Zc(_ / w)}em`
  } : {}, l, f), y = {
    h1: m(i, 96, 1.167, -1.5),
    h2: m(i, 60, 1.2, -0.5),
    h3: m(a, 48, 1.167, 0),
    h4: m(a, 34, 1.235, 0.25),
    h5: m(a, 24, 1.334, 0),
    h6: m(c, 20, 1.6, 0.15),
    subtitle1: m(a, 16, 1.75, 0.15),
    subtitle2: m(c, 14, 1.57, 0.1),
    body1: m(a, 16, 1.5, 0.15),
    body2: m(a, 14, 1.43, 0.15),
    button: m(c, 14, 1.75, 0.4, so),
    caption: m(a, 12, 1.66, 0.4),
    overline: m(a, 12, 2.66, 1, so)
  };
  return Be(z({
    htmlFontSize: d,
    pxToRem: g,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: c,
    fontWeightBold: u
  }, y), h, {
    clone: !1
    // No need to clone deep
  });
}
const eu = 0.2, ru = 0.14, tu = 0.12;
function de(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${eu})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ru})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${tu})`].join(",");
}
const nu = ["none", de(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), de(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), de(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), de(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), de(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), de(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), de(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), de(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), de(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), de(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), de(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), de(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), de(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), de(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), de(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), de(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), de(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), de(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), de(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), de(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), de(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), de(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), de(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), de(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ou = nu, iu = ["duration", "easing", "delay"], au = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, su = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function uo(e) {
  return `${Math.round(e)}ms`;
}
function cu(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function uu(e) {
  const r = z({}, au, e.easing), t = z({}, su, e.duration);
  return z({
    getAutoHeightDuration: cu,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = t.standard,
        easing: c = r.easeInOut,
        delay: u = 0
      } = i, d = we(i, iu);
      if (process.env.NODE_ENV !== "production") {
        const f = (h) => typeof h == "string", p = (h) => !isNaN(parseFloat(h));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !f(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), f(c) || console.error('MUI: Argument "easing" must be a string.'), !p(u) && !f(u) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof a == "string" ? a : uo(a)} ${c} ${typeof u == "string" ? u : uo(u)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const lu = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, fu = lu, du = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function pu(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = we(e, du);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : fr(18));
  const c = Xc(n), u = tn(e);
  let d = Be(u, {
    mixins: Yc(u.breakpoints, t),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ou.slice(),
    typography: Qc(c, i),
    transitions: uu(o),
    zIndex: z({}, fu)
  });
  if (d = Be(d, a), d = r.reduce((f, p) => Be(f, p), d), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (h, x) => {
      let g;
      for (g in h) {
        const m = h[g];
        if (f.indexOf(g) !== -1 && Object.keys(m).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const y = rt("", g);
            console.error([`MUI: The \`${x}\` component increases the CSS specificity of the \`${g}\` internal state.`, "You can not override it like this: ", JSON.stringify(h, null, 2), "", `Instead, you need to use the '&.${y}' syntax:`, JSON.stringify({
              root: {
                [`&.${y}`]: m
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          h[g] = {};
        }
      }
    };
    Object.keys(d.components).forEach((h) => {
      const x = d.components[h].styleOverrides;
      x && h.indexOf("Mui") === 0 && p(x, h);
    });
  }
  return d.unstable_sxConfig = z({}, en, a?.unstable_sxConfig), d.unstable_sx = function(p) {
    return rn({
      sx: p,
      theme: this
    });
  }, d;
}
const mu = pu(), Yo = mu;
function on({
  props: e,
  name: r
}) {
  return Dc({
    props: e,
    name: r,
    defaultTheme: Yo
  });
}
const Bo = (e) => Gr(e) && e !== "classes", hu = Mc({
  defaultTheme: Yo,
  rootShouldForwardProp: Bo
}), hr = hu;
function Dt(e, r) {
  return Dt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Dt(e, r);
}
function yu(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, Dt(e, r);
}
const lo = Xe.createContext(null);
function vu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function an(e, r) {
  var t = function(i) {
    return r && Br(i) ? r(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && di.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = t(o);
  }), n;
}
function gu(e, r) {
  e = e || {}, r = r || {};
  function t(f) {
    return f in r ? r[f] : e[f];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in r ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, c = {};
  for (var u in r) {
    if (n[u])
      for (a = 0; a < n[u].length; a++) {
        var d = n[u][a];
        c[n[u][a]] = t(d);
      }
    c[u] = t(u);
  }
  for (a = 0; a < o.length; a++)
    c[o[a]] = t(o[a]);
  return c;
}
function Je(e, r, t) {
  return t[r] != null ? t[r] : e.props[r];
}
function bu(e, r) {
  return an(e.children, function(t) {
    return Ur(t, {
      onExited: r.bind(null, t),
      in: !0,
      appear: Je(t, "appear", e),
      enter: Je(t, "enter", e),
      exit: Je(t, "exit", e)
    });
  });
}
function Eu(e, r, t) {
  var n = an(e.children), o = gu(r, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (Br(a)) {
      var c = i in r, u = i in n, d = r[i], f = Br(d) && !d.props.in;
      u && (!c || f) ? o[i] = Ur(a, {
        onExited: t.bind(null, a),
        in: !0,
        exit: Je(a, "exit", e),
        enter: Je(a, "enter", e)
      }) : !u && c && !f ? o[i] = Ur(a, {
        in: !1
      }) : u && c && Br(d) && (o[i] = Ur(a, {
        onExited: t.bind(null, a),
        in: d.props.in,
        exit: Je(a, "exit", e),
        enter: Je(a, "enter", e)
      }));
    }
  }), o;
}
var xu = Object.values || function(e) {
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}, Tu = {
  component: "div",
  childFactory: function(r) {
    return r;
  }
}, sn = /* @__PURE__ */ function(e) {
  yu(r, e);
  function r(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(vu(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var t = r.prototype;
  return t.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, t.componentWillUnmount = function() {
    this.mounted = !1;
  }, r.getDerivedStateFromProps = function(o, i) {
    var a = i.children, c = i.handleExited, u = i.firstRender;
    return {
      children: u ? bu(o, c) : Eu(o, a, c),
      firstRender: !1
    };
  }, t.handleExited = function(o, i) {
    var a = an(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var u = z({}, c.children);
      return delete u[o.key], {
        children: u
      };
    }));
  }, t.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, c = we(o, ["component", "childFactory"]), u = this.state.contextValue, d = xu(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ Xe.createElement(lo.Provider, {
      value: u
    }, d) : /* @__PURE__ */ Xe.createElement(lo.Provider, {
      value: u
    }, /* @__PURE__ */ Xe.createElement(i, c, d));
  }, r;
}(Xe.Component);
sn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: b.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: b.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: b.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: b.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: b.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: b.func
} : {};
sn.defaultProps = Tu;
const _u = sn;
function Uo(e) {
  const {
    className: r,
    classes: t,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: c,
    onExited: u,
    timeout: d
  } = e, [f, p] = W.useState(!1), h = Me(r, t.ripple, t.rippleVisible, n && t.ripplePulsate), x = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, g = Me(t.child, f && t.childLeaving, n && t.childPulsate);
  return !c && !f && p(!0), W.useEffect(() => {
    if (!c && u != null) {
      const m = setTimeout(u, d);
      return () => {
        clearTimeout(m);
      };
    }
  }, [u, c, d]), /* @__PURE__ */ ke.jsx("span", {
    className: h,
    style: x,
    children: /* @__PURE__ */ ke.jsx("span", {
      className: g
    })
  });
}
process.env.NODE_ENV !== "production" && (Uo.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: b.object.isRequired,
  className: b.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: b.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: b.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: b.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: b.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: b.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: b.number,
  /**
   * exit delay
   */
  timeout: b.number.isRequired
});
const Su = Yt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), je = Su, Ru = ["center", "classes", "className"];
let vt = (e) => e, fo, po, mo, ho;
const Ft = 550, Cu = 80, Ou = Jt(fo || (fo = vt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), wu = Jt(po || (po = vt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), $u = Jt(mo || (mo = vt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Pu = hr("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Au = hr(Uo, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(ho || (ho = vt`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), je.rippleVisible, Ou, Ft, ({
  theme: e
}) => e.transitions.easing.easeInOut, je.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, je.child, je.childLeaving, wu, Ft, ({
  theme: e
}) => e.transitions.easing.easeInOut, je.childPulsate, $u, ({
  theme: e
}) => e.transitions.easing.easeInOut), Wo = /* @__PURE__ */ W.forwardRef(function(r, t) {
  const n = on({
    props: r,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a
  } = n, c = we(n, Ru), [u, d] = W.useState([]), f = W.useRef(0), p = W.useRef(null);
  W.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [u]);
  const h = W.useRef(!1), x = W.useRef(null), g = W.useRef(null), m = W.useRef(null);
  W.useEffect(() => () => {
    clearTimeout(x.current);
  }, []);
  const y = W.useCallback((_) => {
    const {
      pulsate: l,
      rippleX: A,
      rippleY: k,
      rippleSize: pe,
      cb: I
    } = _;
    d((q) => [...q, /* @__PURE__ */ ke.jsx(Au, {
      classes: {
        ripple: Me(i.ripple, je.ripple),
        rippleVisible: Me(i.rippleVisible, je.rippleVisible),
        ripplePulsate: Me(i.ripplePulsate, je.ripplePulsate),
        child: Me(i.child, je.child),
        childLeaving: Me(i.childLeaving, je.childLeaving),
        childPulsate: Me(i.childPulsate, je.childPulsate)
      },
      timeout: Ft,
      pulsate: l,
      rippleX: A,
      rippleY: k,
      rippleSize: pe
    }, f.current)]), f.current += 1, p.current = I;
  }, [i]), S = W.useCallback((_ = {}, l = {}, A = () => {
  }) => {
    const {
      pulsate: k = !1,
      center: pe = o || l.pulsate,
      fakeElement: I = !1
      // For test purposes
    } = l;
    if (_?.type === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    _?.type === "touchstart" && (h.current = !0);
    const q = I ? null : m.current, se = q ? q.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let le, ae, H;
    if (pe || _ === void 0 || _.clientX === 0 && _.clientY === 0 || !_.clientX && !_.touches)
      le = Math.round(se.width / 2), ae = Math.round(se.height / 2);
    else {
      const {
        clientX: ve,
        clientY: ce
      } = _.touches && _.touches.length > 0 ? _.touches[0] : _;
      le = Math.round(ve - se.left), ae = Math.round(ce - se.top);
    }
    if (pe)
      H = Math.sqrt((2 * se.width ** 2 + se.height ** 2) / 3), H % 2 === 0 && (H += 1);
    else {
      const ve = Math.max(Math.abs((q ? q.clientWidth : 0) - le), le) * 2 + 2, ce = Math.max(Math.abs((q ? q.clientHeight : 0) - ae), ae) * 2 + 2;
      H = Math.sqrt(ve ** 2 + ce ** 2);
    }
    _ != null && _.touches ? g.current === null && (g.current = () => {
      y({
        pulsate: k,
        rippleX: le,
        rippleY: ae,
        rippleSize: H,
        cb: A
      });
    }, x.current = setTimeout(() => {
      g.current && (g.current(), g.current = null);
    }, Cu)) : y({
      pulsate: k,
      rippleX: le,
      rippleY: ae,
      rippleSize: H,
      cb: A
    });
  }, [o, y]), w = W.useCallback(() => {
    S({}, {
      pulsate: !0
    });
  }, [S]), R = W.useCallback((_, l) => {
    if (clearTimeout(x.current), _?.type === "touchend" && g.current) {
      g.current(), g.current = null, x.current = setTimeout(() => {
        R(_, l);
      });
      return;
    }
    g.current = null, d((A) => A.length > 0 ? A.slice(1) : A), p.current = l;
  }, []);
  return W.useImperativeHandle(t, () => ({
    pulsate: w,
    start: S,
    stop: R
  }), [w, S, R]), /* @__PURE__ */ ke.jsx(Pu, z({
    className: Me(je.root, i.root, a),
    ref: m
  }, c, {
    children: /* @__PURE__ */ ke.jsx(_u, {
      component: null,
      exit: !0,
      children: u
    })
  }));
});
process.env.NODE_ENV !== "production" && (Wo.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: b.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: b.object,
  /**
   * @ignore
   */
  className: b.string
});
const ku = Wo;
function Nu(e) {
  return rt("MuiButtonBase", e);
}
const Iu = Yt("MuiButtonBase", ["root", "disabled", "focusVisible"]), Mu = Iu, ju = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Du = (e) => {
  const {
    disabled: r,
    focusVisible: t,
    focusVisibleClassName: n,
    classes: o
  } = e, a = xo({
    root: ["root", r && "disabled", t && "focusVisible"]
  }, Nu, o);
  return t && n && (a.root += ` ${n}`), a;
}, Fu = hr("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, r) => r.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Mu.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), qo = /* @__PURE__ */ W.forwardRef(function(r, t) {
  const n = on({
    props: r,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: c,
    component: u = "button",
    disabled: d = !1,
    disableRipple: f = !1,
    disableTouchRipple: p = !1,
    focusRipple: h = !1,
    LinkComponent: x = "a",
    onBlur: g,
    onClick: m,
    onContextMenu: y,
    onDragLeave: S,
    onFocus: w,
    onFocusVisible: R,
    onKeyDown: _,
    onKeyUp: l,
    onMouseDown: A,
    onMouseLeave: k,
    onMouseUp: pe,
    onTouchEnd: I,
    onTouchMove: q,
    onTouchStart: se,
    tabIndex: le = 0,
    TouchRippleProps: ae,
    touchRippleRef: H,
    type: ve
  } = n, ce = we(n, ju), be = W.useRef(null), fe = W.useRef(null), Pe = An(fe, H), {
    isFocusVisibleRef: E,
    onFocus: O,
    onBlur: L,
    ref: F
  } = ta(), [P, Y] = W.useState(!1);
  d && P && Y(!1), W.useImperativeHandle(o, () => ({
    focusVisible: () => {
      Y(!0), be.current.focus();
    }
  }), []);
  const [N, j] = W.useState(!1);
  W.useEffect(() => {
    j(!0);
  }, []);
  const V = N && !f && !d;
  W.useEffect(() => {
    P && h && !f && N && fe.current.pulsate();
  }, [f, h, P, N]);
  function M(U, br, Er = p) {
    return Vr((Fr) => (br && br(Fr), !Er && fe.current && fe.current[U](Fr), !0));
  }
  const B = M("start", A), me = M("stop", y), v = M("stop", S), Ee = M("stop", pe), $ = M("stop", (U) => {
    P && U.preventDefault(), k && k(U);
  }), Se = M("start", se), De = M("stop", I), He = M("stop", q), jr = M("stop", (U) => {
    L(U), E.current === !1 && Y(!1), g && g(U);
  }, !1), Qe = Vr((U) => {
    be.current || (be.current = U.currentTarget), O(U), E.current === !0 && (Y(!0), R && R(U)), w && w(U);
  }), yr = () => {
    const U = be.current;
    return u && u !== "button" && !(U.tagName === "A" && U.href);
  }, vr = W.useRef(!1), gr = Vr((U) => {
    h && !vr.current && P && fe.current && U.key === " " && (vr.current = !0, fe.current.stop(U, () => {
      fe.current.start(U);
    })), U.target === U.currentTarget && yr() && U.key === " " && U.preventDefault(), _ && _(U), U.target === U.currentTarget && yr() && U.key === "Enter" && !d && (U.preventDefault(), m && m(U));
  }), gt = Vr((U) => {
    h && U.key === " " && fe.current && P && !U.defaultPrevented && (vr.current = !1, fe.current.stop(U, () => {
      fe.current.pulsate(U);
    })), l && l(U), m && U.target === U.currentTarget && yr() && U.key === " " && !U.defaultPrevented && m(U);
  });
  let er = u;
  er === "button" && (ce.href || ce.to) && (er = x);
  const We = {};
  er === "button" ? (We.type = ve === void 0 ? "button" : ve, We.disabled = d) : (!ce.href && !ce.to && (We.role = "button"), d && (We["aria-disabled"] = d));
  const Dr = An(t, F, be);
  process.env.NODE_ENV !== "production" && W.useEffect(() => {
    V && !fe.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [V]);
  const qe = z({}, n, {
    centerRipple: i,
    component: u,
    disabled: d,
    disableRipple: f,
    disableTouchRipple: p,
    focusRipple: h,
    tabIndex: le,
    focusVisible: P
  }), bt = Du(qe);
  return /* @__PURE__ */ ke.jsxs(Fu, z({
    as: er,
    className: Me(bt.root, c),
    ownerState: qe,
    onBlur: jr,
    onClick: m,
    onContextMenu: me,
    onFocus: Qe,
    onKeyDown: gr,
    onKeyUp: gt,
    onMouseDown: B,
    onMouseLeave: $,
    onMouseUp: Ee,
    onDragLeave: v,
    onTouchEnd: De,
    onTouchMove: He,
    onTouchStart: Se,
    ref: Dr,
    tabIndex: d ? -1 : le,
    type: ve
  }, We, ce, {
    children: [a, V ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ ke.jsx(ku, z({
        ref: Pe,
        center: i
      }, ae))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (qo.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: qi,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: b.bool,
  /**
   * The content of the component.
   */
  children: b.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: b.object,
  /**
   * @ignore
   */
  className: b.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Fi,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: b.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: b.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: b.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: b.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: b.string,
  /**
   * @ignore
   */
  href: b.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: b.elementType,
  /**
   * @ignore
   */
  onBlur: b.func,
  /**
   * @ignore
   */
  onClick: b.func,
  /**
   * @ignore
   */
  onContextMenu: b.func,
  /**
   * @ignore
   */
  onDragLeave: b.func,
  /**
   * @ignore
   */
  onFocus: b.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: b.func,
  /**
   * @ignore
   */
  onKeyDown: b.func,
  /**
   * @ignore
   */
  onKeyUp: b.func,
  /**
   * @ignore
   */
  onMouseDown: b.func,
  /**
   * @ignore
   */
  onMouseLeave: b.func,
  /**
   * @ignore
   */
  onMouseUp: b.func,
  /**
   * @ignore
   */
  onTouchEnd: b.func,
  /**
   * @ignore
   */
  onTouchMove: b.func,
  /**
   * @ignore
   */
  onTouchStart: b.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: b.oneOfType([b.arrayOf(b.oneOfType([b.func, b.object, b.bool])), b.func, b.object]),
  /**
   * @default 0
   */
  tabIndex: b.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: b.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: b.oneOfType([b.func, b.shape({
    current: b.shape({
      pulsate: b.func.isRequired,
      start: b.func.isRequired,
      stop: b.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: b.oneOfType([b.oneOf(["button", "reset", "submit"]), b.string])
});
const Vu = qo;
function Lu(e) {
  return rt("MuiButton", e);
}
const zu = Yt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Yr = zu, Ko = /* @__PURE__ */ W.createContext({});
process.env.NODE_ENV !== "production" && (Ko.displayName = "ButtonGroupContext");
const Yu = Ko, Bu = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], Uu = (e) => {
  const {
    color: r,
    disableElevation: t,
    fullWidth: n,
    size: o,
    variant: i,
    classes: a
  } = e, c = {
    root: ["root", i, `${i}${Oe(r)}`, `size${Oe(o)}`, `${i}Size${Oe(o)}`, r === "inherit" && "colorInherit", t && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${Oe(o)}`],
    endIcon: ["endIcon", `iconSize${Oe(o)}`]
  }, u = xo(c, Lu, a);
  return z({}, a, u);
}, Go = (e) => z({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), Wu = hr(Vu, {
  shouldForwardProp: (e) => Bo(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, r[t.variant], r[`${t.variant}${Oe(t.color)}`], r[`size${Oe(t.size)}`], r[`${t.variant}Size${Oe(t.size)}`], t.color === "inherit" && r.colorInherit, t.disableElevation && r.disableElevation, t.fullWidth && r.fullWidth];
  }
})(({
  theme: e,
  ownerState: r
}) => {
  var t, n;
  return z({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": z({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : zr(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, r.variant === "text" && r.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : zr(e.palette[r.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, r.variant === "outlined" && r.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[r.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[r.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : zr(e.palette[r.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, r.variant === "contained" && {
      backgroundColor: (e.vars || e).palette.grey.A100,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, r.variant === "contained" && r.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[r.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[r.color].main
      }
    }),
    "&:active": z({}, r.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${Yr.focusVisible}`]: z({}, r.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${Yr.disabled}`]: z({
      color: (e.vars || e).palette.action.disabled
    }, r.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, r.variant === "outlined" && r.color === "secondary" && {
      border: `1px solid ${(e.vars || e).palette.action.disabled}`
    }, r.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, r.variant === "text" && {
    padding: "6px 8px"
  }, r.variant === "text" && r.color !== "inherit" && {
    color: (e.vars || e).palette[r.color].main
  }, r.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, r.variant === "outlined" && r.color !== "inherit" && {
    color: (e.vars || e).palette[r.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[r.color].mainChannel} / 0.5)` : `1px solid ${zr(e.palette[r.color].main, 0.5)}`
  }, r.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (t = (n = e.palette).getContrastText) == null ? void 0 : t.call(n, e.palette.grey[300]),
    backgroundColor: (e.vars || e).palette.grey[300],
    boxShadow: (e.vars || e).shadows[2]
  }, r.variant === "contained" && r.color !== "inherit" && {
    color: (e.vars || e).palette[r.color].contrastText,
    backgroundColor: (e.vars || e).palette[r.color].main
  }, r.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, r.size === "small" && r.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, r.size === "large" && r.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, r.size === "small" && r.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, r.size === "large" && r.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, r.size === "small" && r.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, r.size === "large" && r.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, r.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${Yr.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${Yr.disabled}`]: {
    boxShadow: "none"
  }
}), qu = hr("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.startIcon, r[`iconSize${Oe(t.size)}`]];
  }
})(({
  ownerState: e
}) => z({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Go(e))), Ku = hr("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.endIcon, r[`iconSize${Oe(t.size)}`]];
  }
})(({
  ownerState: e
}) => z({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Go(e))), Ho = /* @__PURE__ */ W.forwardRef(function(r, t) {
  const n = W.useContext(Yu), o = zt(n, r), i = on({
    props: o,
    name: "MuiButton"
  }), {
    children: a,
    color: c = "primary",
    component: u = "button",
    className: d,
    disabled: f = !1,
    disableElevation: p = !1,
    disableFocusRipple: h = !1,
    endIcon: x,
    focusVisibleClassName: g,
    fullWidth: m = !1,
    size: y = "medium",
    startIcon: S,
    type: w,
    variant: R = "text"
  } = i, _ = we(i, Bu), l = z({}, i, {
    color: c,
    component: u,
    disabled: f,
    disableElevation: p,
    disableFocusRipple: h,
    fullWidth: m,
    size: y,
    type: w,
    variant: R
  }), A = Uu(l), k = S && /* @__PURE__ */ ke.jsx(qu, {
    className: A.startIcon,
    ownerState: l,
    children: S
  }), pe = x && /* @__PURE__ */ ke.jsx(Ku, {
    className: A.endIcon,
    ownerState: l,
    children: x
  });
  return /* @__PURE__ */ ke.jsxs(Wu, z({
    ownerState: l,
    className: Me(n.className, A.root, d),
    component: u,
    disabled: f,
    focusRipple: !h,
    focusVisibleClassName: Me(A.focusVisible, g),
    ref: t,
    type: w
  }, _, {
    classes: A,
    children: [k, a, pe]
  }));
});
process.env.NODE_ENV !== "production" && (Ho.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: b.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: b.object,
  /**
   * @ignore
   */
  className: b.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color: b.oneOfType([b.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), b.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: b.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: b.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: b.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: b.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: b.bool,
  /**
   * Element placed after the children.
   */
  endIcon: b.node,
  /**
   * @ignore
   */
  focusVisibleClassName: b.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: b.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: b.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: b.oneOfType([b.oneOf(["small", "medium", "large"]), b.string]),
  /**
   * Element placed before the children.
   */
  startIcon: b.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: b.oneOfType([b.arrayOf(b.oneOfType([b.func, b.object, b.bool])), b.func, b.object]),
  /**
   * @ignore
   */
  type: b.oneOfType([b.oneOf(["button", "reset", "submit"]), b.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: b.oneOfType([b.oneOf(["contained", "outlined", "text"]), b.string])
});
const Gu = Ho, Xu = ({ label: e, ...r }) => /* @__PURE__ */ ke.jsx(Gu, { ...r, children: e });
export {
  Xu as Button
};
