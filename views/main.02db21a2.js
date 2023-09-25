/*! For license information please see main.02db21a2.js.LICENSE.txt */
!function () {
    var e = {
        948: function (e) {
            "use strict";
            var t = function (e) {
                return function (e) {
                    return !!e && "object" === typeof e
                }(e) && !function (e) {
                    var t = Object.prototype.toString.call(e);
                    return "[object RegExp]" === t || "[object Date]" === t || function (e) {
                        return e.$$typeof === n
                    }(e)
                }(e)
            };
            var n = "function" === typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function r(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e) ? l((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
                var n
            }

            function o(e, t, n) {
                return e.concat(t).map((function (e) {
                    return r(e, n)
                }))
            }

            function a(e) {
                return Object.keys(e).concat(function (e) {
                    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function (t) {
                        return Object.propertyIsEnumerable.call(e, t)
                    })) : []
                }(e))
            }

            function i(e, t) {
                try {
                    return t in e
                } catch (n) {
                    return !1
                }
            }

            function u(e, t, n) {
                var o = {};
                return n.isMergeableObject(e) && a(e).forEach((function (t) {
                    o[t] = r(e[t], n)
                })), a(t).forEach((function (a) {
                    (function (e, t) {
                        return i(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
                    })(e, a) || (i(e, a) && n.isMergeableObject(t[a]) ? o[a] = function (e, t) {
                        if (!t.customMerge) return l;
                        var n = t.customMerge(e);
                        return "function" === typeof n ? n : l
                    }(a, n)(e[a], t[a], n) : o[a] = r(t[a], n))
                })), o
            }

            function l(e, n, a) {
                (a = a || {}).arrayMerge = a.arrayMerge || o, a.isMergeableObject = a.isMergeableObject || t, a.cloneUnlessOtherwiseSpecified = r;
                var i = Array.isArray(n);
                return i === Array.isArray(e) ? i ? a.arrayMerge(e, n, a) : u(e, n, a) : r(n, a)
            }

            l.all = function (e, t) {
                if (!Array.isArray(e)) throw new Error("first argument should be an array");
                return e.reduce((function (e, n) {
                    return l(e, n, t)
                }), {})
            };
            var s = l;
            e.exports = s
        }, 102: function (e) {
            function t(e, t) {
                e.onload = function () {
                    this.onerror = this.onload = null, t(null, e)
                }, e.onerror = function () {
                    this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e)
                }
            }

            function n(e, t) {
                e.onreadystatechange = function () {
                    "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, t(null, e))
                }
            }

            e.exports = function (e, r, o) {
                var a = document.head || document.getElementsByTagName("head")[0], i = document.createElement("script");
                "function" === typeof r && (o = r, r = {}), r = r || {}, o = o || function () {
                }, i.type = r.type || "text/javascript", i.charset = r.charset || "utf8", i.async = !("async" in r) || !!r.async, i.src = e, r.attrs && function (e, t) {
                    for (var n in t) e.setAttribute(n, t[n])
                }(i, r.attrs), r.text && (i.text = "" + r.text), ("onload" in i ? t : n)(i, o), i.onload || t(i, o), a.appendChild(i)
            }
        }, 781: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = Number.isNaN || function (e) {
                return "number" === typeof e && e !== e
            };

            function o(e, t) {
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; n++) if (o = e[n], a = t[n], !(o === a || r(o) && r(a))) return !1;
                var o, a;
                return !0
            }

            t.default = function (e, t) {
                var n;
                void 0 === t && (t = o);
                var r, a = [], i = !1;
                return function () {
                    for (var o = [], u = 0; u < arguments.length; u++) o[u] = arguments[u];
                    return i && n === this && t(o, a) || (r = e.apply(this, o), i = !0, n = this, a = o), r
                }
            }
        }, 888: function (e, t, n) {
            "use strict";
            var r = n(47);

            function o() {
            }

            function a() {
            }

            a.resetWarningCache = o, e.exports = function () {
                function e(e, t, n, o, a, i) {
                    if (i !== r) {
                        var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw u.name = "Invariant Violation", u
                    }
                }

                function t() {
                    return e
                }

                e.isRequired = e;
                var n = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: a,
                    resetWarningCache: o
                };
                return n.PropTypes = n, n
            }
        }, 7: function (e, t, n) {
            e.exports = n(888)()
        }, 47: function (e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        }, 463: function (e, t, n) {
            "use strict";
            var r = n(791), o = n(296);

            function a(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }

            var i = new Set, u = {};

            function l(e, t) {
                s(e, t), s(e + "Capture", t)
            }

            function s(e, t) {
                for (u[e] = t, e = 0; e < t.length; e++) i.add(t[e])
            }

            var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                f = Object.prototype.hasOwnProperty,
                p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                d = {}, h = {};

            function y(e, t, n, r, o, a, i) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = i
            }

            var v = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) {
                v[e] = new y(e, 0, !1, e, null, !1, !1)
            })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) {
                var t = e[0];
                v[t] = new y(t, 1, !1, e[1], null, !1, !1)
            })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
                v[e] = new y(e, 2, !1, e.toLowerCase(), null, !1, !1)
            })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
                v[e] = new y(e, 2, !1, e, null, !1, !1)
            })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) {
                v[e] = new y(e, 3, !1, e.toLowerCase(), null, !1, !1)
            })), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
                v[e] = new y(e, 3, !0, e, null, !1, !1)
            })), ["capture", "download"].forEach((function (e) {
                v[e] = new y(e, 4, !1, e, null, !1, !1)
            })), ["cols", "rows", "size", "span"].forEach((function (e) {
                v[e] = new y(e, 6, !1, e, null, !1, !1)
            })), ["rowSpan", "start"].forEach((function (e) {
                v[e] = new y(e, 5, !1, e.toLowerCase(), null, !1, !1)
            }));
            var m = /[\-:]([a-z])/g;

            function g(e) {
                return e[1].toUpperCase()
            }

            function b(e, t, n, r) {
                var o = v.hasOwnProperty(t) ? v[t] : null;
                (null !== o ? 0 !== o.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function (e, t, n, r) {
                    if (null === t || "undefined" === typeof t || function (e, t, n, r) {
                        if (null !== n && 0 === n.type) return !1;
                        switch (typeof t) {
                            case"function":
                            case"symbol":
                                return !0;
                            case"boolean":
                                return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                            default:
                                return !1
                        }
                    }(e, t, n, r)) return !0;
                    if (r) return !1;
                    if (null !== n) switch (n.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || 1 > t
                    }
                    return !1
                }(t, n, o, r) && (n = null), r || null === o ? function (e) {
                    return !!f.call(h, e) || !f.call(d, e) && (p.test(e) ? h[e] = !0 : (d[e] = !0, !1))
                }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
            }

            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) {
                var t = e.replace(m, g);
                v[t] = new y(t, 1, !1, e, null, !1, !1)
            })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) {
                var t = e.replace(m, g);
                v[t] = new y(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
            })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
                var t = e.replace(m, g);
                v[t] = new y(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
            })), ["tabIndex", "crossOrigin"].forEach((function (e) {
                v[e] = new y(e, 1, !1, e.toLowerCase(), null, !1, !1)
            })), v.xlinkHref = new y("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) {
                v[e] = new y(e, 1, !1, e.toLowerCase(), null, !0, !0)
            }));
            var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, k = Symbol.for("react.element"),
                P = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"),
                E = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), C = Symbol.for("react.context"),
                x = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"),
                T = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), L = Symbol.for("react.lazy");
            Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
            var D = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
            var N = Symbol.iterator;

            function A(e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof (e = N && e[N] || e["@@iterator"]) ? e : null
            }

            var M, I = Object.assign;

            function U(e) {
                if (void 0 === M) try {
                    throw Error()
                } catch (n) {
                    var t = n.stack.trim().match(/\n( *(at )?)/);
                    M = t && t[1] || ""
                }
                return "\n" + M + e
            }

            var z = !1;

            function B(e, t) {
                if (!e || z) return "";
                z = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t) if (t = function () {
                        throw Error()
                    }, Object.defineProperty(t.prototype, "props", {
                        set: function () {
                            throw Error()
                        }
                    }), "object" === typeof Reflect && Reflect.construct) {
                        try {
                            Reflect.construct(t, [])
                        } catch (s) {
                            var r = s
                        }
                        Reflect.construct(e, [], t)
                    } else {
                        try {
                            t.call()
                        } catch (s) {
                            r = s
                        }
                        e.call(t.prototype)
                    } else {
                        try {
                            throw Error()
                        } catch (s) {
                            r = s
                        }
                        e()
                    }
                } catch (s) {
                    if (s && r && "string" === typeof s.stack) {
                        for (var o = s.stack.split("\n"), a = r.stack.split("\n"), i = o.length - 1, u = a.length - 1; 1 <= i && 0 <= u && o[i] !== a[u];) u--;
                        for (; 1 <= i && 0 <= u; i--, u--) if (o[i] !== a[u]) {
                            if (1 !== i || 1 !== u) do {
                                if (i--, 0 > --u || o[i] !== a[u]) {
                                    var l = "\n" + o[i].replace(" at new ", " at ");
                                    return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                                }
                            } while (1 <= i && 0 <= u);
                            break
                        }
                    }
                } finally {
                    z = !1, Error.prepareStackTrace = n
                }
                return (e = e ? e.displayName || e.name : "") ? U(e) : ""
            }

            function F(e) {
                switch (e.tag) {
                    case 5:
                        return U(e.type);
                    case 16:
                        return U("Lazy");
                    case 13:
                        return U("Suspense");
                    case 19:
                        return U("SuspenseList");
                    case 0:
                    case 2:
                    case 15:
                        return e = B(e.type, !1);
                    case 11:
                        return e = B(e.type.render, !1);
                    case 1:
                        return e = B(e.type, !0);
                    default:
                        return ""
                }
            }

            function V(e) {
                if (null == e) return null;
                if ("function" === typeof e) return e.displayName || e.name || null;
                if ("string" === typeof e) return e;
                switch (e) {
                    case S:
                        return "Fragment";
                    case P:
                        return "Portal";
                    case E:
                        return "Profiler";
                    case O:
                        return "StrictMode";
                    case j:
                        return "Suspense";
                    case T:
                        return "SuspenseList"
                }
                if ("object" === typeof e) switch (e.$$typeof) {
                    case C:
                        return (e.displayName || "Context") + ".Consumer";
                    case _:
                        return (e._context.displayName || "Context") + ".Provider";
                    case x:
                        var t = e.render;
                        return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                    case R:
                        return null !== (t = e.displayName || null) ? t : V(e.type) || "Memo";
                    case L:
                        t = e._payload, e = e._init;
                        try {
                            return V(e(t))
                        } catch (n) {
                        }
                }
                return null
            }

            function H(e) {
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
                        return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
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
                        return V(t);
                    case 8:
                        return t === O ? "StrictMode" : "Mode";
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
                        if ("function" === typeof t) return t.displayName || t.name || null;
                        if ("string" === typeof t) return t
                }
                return null
            }

            function W(e) {
                switch (typeof e) {
                    case"boolean":
                    case"number":
                    case"string":
                    case"undefined":
                    case"object":
                        return e;
                    default:
                        return ""
                }
            }

            function $(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }

            function q(e) {
                e._valueTracker || (e._valueTracker = function (e) {
                    var t = $(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                        r = "" + e[t];
                    if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                        var o = n.get, a = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0, get: function () {
                                return o.call(this)
                            }, set: function (e) {
                                r = "" + e, a.call(this, e)
                            }
                        }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
                            getValue: function () {
                                return r
                            }, setValue: function (e) {
                                r = "" + e
                            }, stopTracking: function () {
                                e._valueTracker = null, delete e[t]
                            }
                        }
                    }
                }(e))
            }

            function K(e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var n = t.getValue(), r = "";
                return e && (r = $(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
            }

            function Q(e) {
                if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }

            function Y(e, t) {
                var n = t.checked;
                return I({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != n ? n : e._wrapperState.initialChecked
                })
            }

            function X(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue,
                    r = null != t.checked ? t.checked : t.defaultChecked;
                n = W(null != t.value ? t.value : n), e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }

            function G(e, t) {
                null != (t = t.checked) && b(e, "checked", t, !1)
            }

            function J(e, t) {
                G(e, t);
                var n = W(t.value), r = t.type;
                if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, W(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
            }

            function Z(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                }
                "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
            }

            function ee(e, t, n) {
                "number" === t && Q(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
            }

            var te = Array.isArray;

            function ne(e, t, n, r) {
                if (e = e.options, t) {
                    t = {};
                    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
                    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + W(n), t = null, o = 0; o < e.length; o++) {
                        if (e[o].value === n) return e[o].selected = !0, void (r && (e[o].defaultSelected = !0));
                        null !== t || e[o].disabled || (t = e[o])
                    }
                    null !== t && (t.selected = !0)
                }
            }

            function re(e, t) {
                if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
                return I({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
            }

            function oe(e, t) {
                var n = t.value;
                if (null == n) {
                    if (n = t.children, t = t.defaultValue, null != n) {
                        if (null != t) throw Error(a(92));
                        if (te(n)) {
                            if (1 < n.length) throw Error(a(93));
                            n = n[0]
                        }
                        t = n
                    }
                    null == t && (t = ""), n = t
                }
                e._wrapperState = {initialValue: W(n)}
            }

            function ae(e, t) {
                var n = W(t.value), r = W(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
            }

            function ie(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
            }

            function ue(e) {
                switch (e) {
                    case"svg":
                        return "http://www.w3.org/2000/svg";
                    case"math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml"
                }
            }

            function le(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? ue(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }

            var se, ce, fe = (ce = function (e, t) {
                if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t; else {
                    for ((se = se || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = se.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                    for (; t.firstChild;) e.appendChild(t.firstChild)
                }
            }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction((function () {
                    return ce(e, t)
                }))
            } : ce);

            function pe(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t)
                }
                e.textContent = t
            }

            var de = {
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
            }, he = ["Webkit", "ms", "Moz", "O"];

            function ye(e, t, n) {
                return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || de.hasOwnProperty(e) && de[e] ? ("" + t).trim() : t + "px"
            }

            function ve(e, t) {
                for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
                    var r = 0 === n.indexOf("--"), o = ye(n, t[n], r);
                    "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
                }
            }

            Object.keys(de).forEach((function (e) {
                he.forEach((function (t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1), de[t] = de[e]
                }))
            }));
            var me = I({menuitem: !0}, {
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

            function ge(e, t) {
                if (t) {
                    if (me[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children) throw Error(a(60));
                        if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61))
                    }
                    if (null != t.style && "object" !== typeof t.style) throw Error(a(62))
                }
            }

            function be(e, t) {
                if (-1 === e.indexOf("-")) return "string" === typeof t.is;
                switch (e) {
                    case"annotation-xml":
                    case"color-profile":
                    case"font-face":
                    case"font-face-src":
                    case"font-face-uri":
                    case"font-face-format":
                    case"font-face-name":
                    case"missing-glyph":
                        return !1;
                    default:
                        return !0
                }
            }

            var we = null;

            function ke(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
            }

            var Pe = null, Se = null, Oe = null;

            function Ee(e) {
                if (e = wo(e)) {
                    if ("function" !== typeof Pe) throw Error(a(280));
                    var t = e.stateNode;
                    t && (t = Po(t), Pe(e.stateNode, e.type, t))
                }
            }

            function _e(e) {
                Se ? Oe ? Oe.push(e) : Oe = [e] : Se = e
            }

            function Ce() {
                if (Se) {
                    var e = Se, t = Oe;
                    if (Oe = Se = null, Ee(e), t) for (e = 0; e < t.length; e++) Ee(t[e])
                }
            }

            function xe(e, t) {
                return e(t)
            }

            function je() {
            }

            var Te = !1;

            function Re(e, t, n) {
                if (Te) return e(t, n);
                Te = !0;
                try {
                    return xe(e, t, n)
                } finally {
                    Te = !1, (null !== Se || null !== Oe) && (je(), Ce())
                }
            }

            function Le(e, t) {
                var n = e.stateNode;
                if (null === n) return null;
                var r = Po(n);
                if (null === r) return null;
                n = r[t];
                e:switch (t) {
                    case"onClick":
                    case"onClickCapture":
                    case"onDoubleClick":
                    case"onDoubleClickCapture":
                    case"onMouseDown":
                    case"onMouseDownCapture":
                    case"onMouseMove":
                    case"onMouseMoveCapture":
                    case"onMouseUp":
                    case"onMouseUpCapture":
                    case"onMouseEnter":
                        (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                        break e;
                    default:
                        e = !1
                }
                if (e) return null;
                if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
                return n
            }

            var De = !1;
            if (c) try {
                var Ne = {};
                Object.defineProperty(Ne, "passive", {
                    get: function () {
                        De = !0
                    }
                }), window.addEventListener("test", Ne, Ne), window.removeEventListener("test", Ne, Ne)
            } catch (ce) {
                De = !1
            }

            function Ae(e, t, n, r, o, a, i, u, l) {
                var s = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, s)
                } catch (c) {
                    this.onError(c)
                }
            }

            var Me = !1, Ie = null, Ue = !1, ze = null, Be = {
                onError: function (e) {
                    Me = !0, Ie = e
                }
            };

            function Fe(e, t, n, r, o, a, i, u, l) {
                Me = !1, Ie = null, Ae.apply(Be, arguments)
            }

            function Ve(e) {
                var t = e, n = e;
                if (e.alternate) for (; t.return;) t = t.return; else {
                    e = t;
                    do {
                        0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }

            function He(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                }
                return null
            }

            function We(e) {
                if (Ve(e) !== e) throw Error(a(188))
            }

            function $e(e) {
                return null !== (e = function (e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = Ve(e))) throw Error(a(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t; ;) {
                        var o = n.return;
                        if (null === o) break;
                        var i = o.alternate;
                        if (null === i) {
                            if (null !== (r = o.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (o.child === i.child) {
                            for (i = o.child; i;) {
                                if (i === n) return We(o), e;
                                if (i === r) return We(o), t;
                                i = i.sibling
                            }
                            throw Error(a(188))
                        }
                        if (n.return !== r.return) n = o, r = i; else {
                            for (var u = !1, l = o.child; l;) {
                                if (l === n) {
                                    u = !0, n = o, r = i;
                                    break
                                }
                                if (l === r) {
                                    u = !0, r = o, n = i;
                                    break
                                }
                                l = l.sibling
                            }
                            if (!u) {
                                for (l = i.child; l;) {
                                    if (l === n) {
                                        u = !0, n = i, r = o;
                                        break
                                    }
                                    if (l === r) {
                                        u = !0, r = i, n = o;
                                        break
                                    }
                                    l = l.sibling
                                }
                                if (!u) throw Error(a(189))
                            }
                        }
                        if (n.alternate !== r) throw Error(a(190))
                    }
                    if (3 !== n.tag) throw Error(a(188));
                    return n.stateNode.current === n ? e : t
                }(e)) ? qe(e) : null
            }

            function qe(e) {
                if (5 === e.tag || 6 === e.tag) return e;
                for (e = e.child; null !== e;) {
                    var t = qe(e);
                    if (null !== t) return t;
                    e = e.sibling
                }
                return null
            }

            var Ke = o.unstable_scheduleCallback, Qe = o.unstable_cancelCallback, Ye = o.unstable_shouldYield,
                Xe = o.unstable_requestPaint, Ge = o.unstable_now, Je = o.unstable_getCurrentPriorityLevel,
                Ze = o.unstable_ImmediatePriority, et = o.unstable_UserBlockingPriority, tt = o.unstable_NormalPriority,
                nt = o.unstable_LowPriority, rt = o.unstable_IdlePriority, ot = null, at = null;
            var it = Math.clz32 ? Math.clz32 : function (e) {
                return e >>>= 0, 0 === e ? 32 : 31 - (ut(e) / lt | 0) | 0
            }, ut = Math.log, lt = Math.LN2;
            var st = 64, ct = 4194304;

            function ft(e) {
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
                        return 4194240 & e;
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        return 130023424 & e;
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

            function pt(e, t) {
                var n = e.pendingLanes;
                if (0 === n) return 0;
                var r = 0, o = e.suspendedLanes, a = e.pingedLanes, i = 268435455 & n;
                if (0 !== i) {
                    var u = i & ~o;
                    0 !== u ? r = ft(u) : 0 !== (a &= i) && (r = ft(a))
                } else 0 !== (i = n & ~o) ? r = ft(i) : 0 !== a && (r = ft(a));
                if (0 === r) return 0;
                if (0 !== t && t !== r && 0 === (t & o) && ((o = r & -r) >= (a = t & -t) || 16 === o && 0 !== (4194240 & a))) return t;
                if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)) for (e = e.entanglements, t &= r; 0 < t;) o = 1 << (n = 31 - it(t)), r |= e[n], t &= ~o;
                return r
            }

            function dt(e, t) {
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
                    default:
                        return -1
                }
            }

            function ht(e) {
                return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }

            function yt() {
                var e = st;
                return 0 === (4194240 & (st <<= 1)) && (st = 64), e
            }

            function vt(e) {
                for (var t = [], n = 0; 31 > n; n++) t.push(e);
                return t
            }

            function mt(e, t, n) {
                e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - it(t)] = n
            }

            function gt(e, t) {
                var n = e.entangledLanes |= t;
                for (e = e.entanglements; n;) {
                    var r = 31 - it(n), o = 1 << r;
                    o & t | e[r] & t && (e[r] |= t), n &= ~o
                }
            }

            var bt = 0;

            function wt(e) {
                return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
            }

            var kt, Pt, St, Ot, Et, _t = !1, Ct = [], xt = null, jt = null, Tt = null, Rt = new Map, Lt = new Map,
                Dt = [],
                Nt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

            function At(e, t) {
                switch (e) {
                    case"focusin":
                    case"focusout":
                        xt = null;
                        break;
                    case"dragenter":
                    case"dragleave":
                        jt = null;
                        break;
                    case"mouseover":
                    case"mouseout":
                        Tt = null;
                        break;
                    case"pointerover":
                    case"pointerout":
                        Rt.delete(t.pointerId);
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                        Lt.delete(t.pointerId)
                }
            }

            function Mt(e, t, n, r, o, a) {
                return null === e || e.nativeEvent !== a ? (e = {
                    blockedOn: t,
                    domEventName: n,
                    eventSystemFlags: r,
                    nativeEvent: a,
                    targetContainers: [o]
                }, null !== t && (null !== (t = wo(t)) && Pt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== o && -1 === t.indexOf(o) && t.push(o), e)
            }

            function It(e) {
                var t = bo(e.target);
                if (null !== t) {
                    var n = Ve(t);
                    if (null !== n) if (13 === (t = n.tag)) {
                        if (null !== (t = He(n))) return e.blockedOn = t, void Et(e.priority, (function () {
                            St(n)
                        }))
                    } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }

            function Ut(e) {
                if (null !== e.blockedOn) return !1;
                for (var t = e.targetContainers; 0 < t.length;) {
                    var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                    if (null !== n) return null !== (t = wo(n)) && Pt(t), e.blockedOn = n, !1;
                    var r = new (n = e.nativeEvent).constructor(n.type, n);
                    we = r, n.target.dispatchEvent(r), we = null, t.shift()
                }
                return !0
            }

            function zt(e, t, n) {
                Ut(e) && n.delete(t)
            }

            function Bt() {
                _t = !1, null !== xt && Ut(xt) && (xt = null), null !== jt && Ut(jt) && (jt = null), null !== Tt && Ut(Tt) && (Tt = null), Rt.forEach(zt), Lt.forEach(zt)
            }

            function Ft(e, t) {
                e.blockedOn === t && (e.blockedOn = null, _t || (_t = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, Bt)))
            }

            function Vt(e) {
                function t(t) {
                    return Ft(t, e)
                }

                if (0 < Ct.length) {
                    Ft(Ct[0], e);
                    for (var n = 1; n < Ct.length; n++) {
                        var r = Ct[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                for (null !== xt && Ft(xt, e), null !== jt && Ft(jt, e), null !== Tt && Ft(Tt, e), Rt.forEach(t), Lt.forEach(t), n = 0; n < Dt.length; n++) (r = Dt[n]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < Dt.length && null === (n = Dt[0]).blockedOn;) It(n), null === n.blockedOn && Dt.shift()
            }

            var Ht = w.ReactCurrentBatchConfig, Wt = !0;

            function $t(e, t, n, r) {
                var o = bt, a = Ht.transition;
                Ht.transition = null;
                try {
                    bt = 1, Kt(e, t, n, r)
                } finally {
                    bt = o, Ht.transition = a
                }
            }

            function qt(e, t, n, r) {
                var o = bt, a = Ht.transition;
                Ht.transition = null;
                try {
                    bt = 4, Kt(e, t, n, r)
                } finally {
                    bt = o, Ht.transition = a
                }
            }

            function Kt(e, t, n, r) {
                if (Wt) {
                    var o = Yt(e, t, n, r);
                    if (null === o) Wr(e, t, r, Qt, n), At(e, r); else if (function (e, t, n, r, o) {
                        switch (t) {
                            case"focusin":
                                return xt = Mt(xt, e, t, n, r, o), !0;
                            case"dragenter":
                                return jt = Mt(jt, e, t, n, r, o), !0;
                            case"mouseover":
                                return Tt = Mt(Tt, e, t, n, r, o), !0;
                            case"pointerover":
                                var a = o.pointerId;
                                return Rt.set(a, Mt(Rt.get(a) || null, e, t, n, r, o)), !0;
                            case"gotpointercapture":
                                return a = o.pointerId, Lt.set(a, Mt(Lt.get(a) || null, e, t, n, r, o)), !0
                        }
                        return !1
                    }(o, e, t, n, r)) r.stopPropagation(); else if (At(e, r), 4 & t && -1 < Nt.indexOf(e)) {
                        for (; null !== o;) {
                            var a = wo(o);
                            if (null !== a && kt(a), null === (a = Yt(e, t, n, r)) && Wr(e, t, r, Qt, n), a === o) break;
                            o = a
                        }
                        null !== o && r.stopPropagation()
                    } else Wr(e, t, r, null, n)
                }
            }

            var Qt = null;

            function Yt(e, t, n, r) {
                if (Qt = null, null !== (e = bo(e = ke(r)))) if (null === (t = Ve(e))) e = null; else if (13 === (n = t.tag)) {
                    if (null !== (e = He(t))) return e;
                    e = null
                } else if (3 === n) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null);
                return Qt = e, null
            }

            function Xt(e) {
                switch (e) {
                    case"cancel":
                    case"click":
                    case"close":
                    case"contextmenu":
                    case"copy":
                    case"cut":
                    case"auxclick":
                    case"dblclick":
                    case"dragend":
                    case"dragstart":
                    case"drop":
                    case"focusin":
                    case"focusout":
                    case"input":
                    case"invalid":
                    case"keydown":
                    case"keypress":
                    case"keyup":
                    case"mousedown":
                    case"mouseup":
                    case"paste":
                    case"pause":
                    case"play":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointerup":
                    case"ratechange":
                    case"reset":
                    case"resize":
                    case"seeked":
                    case"submit":
                    case"touchcancel":
                    case"touchend":
                    case"touchstart":
                    case"volumechange":
                    case"change":
                    case"selectionchange":
                    case"textInput":
                    case"compositionstart":
                    case"compositionend":
                    case"compositionupdate":
                    case"beforeblur":
                    case"afterblur":
                    case"beforeinput":
                    case"blur":
                    case"fullscreenchange":
                    case"focus":
                    case"hashchange":
                    case"popstate":
                    case"select":
                    case"selectstart":
                        return 1;
                    case"drag":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"mousemove":
                    case"mouseout":
                    case"mouseover":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"scroll":
                    case"toggle":
                    case"touchmove":
                    case"wheel":
                    case"mouseenter":
                    case"mouseleave":
                    case"pointerenter":
                    case"pointerleave":
                        return 4;
                    case"message":
                        switch (Je()) {
                            case Ze:
                                return 1;
                            case et:
                                return 4;
                            case tt:
                            case nt:
                                return 16;
                            case rt:
                                return 536870912;
                            default:
                                return 16
                        }
                    default:
                        return 16
                }
            }

            var Gt = null, Jt = null, Zt = null;

            function en() {
                if (Zt) return Zt;
                var e, t, n = Jt, r = n.length, o = "value" in Gt ? Gt.value : Gt.textContent, a = o.length;
                for (e = 0; e < r && n[e] === o[e]; e++) ;
                var i = r - e;
                for (t = 1; t <= i && n[r - t] === o[a - t]; t++) ;
                return Zt = o.slice(e, 1 < t ? 1 - t : void 0)
            }

            function tn(e) {
                var t = e.keyCode;
                return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
            }

            function nn() {
                return !0
            }

            function rn() {
                return !1
            }

            function on(e) {
                function t(t, n, r, o, a) {
                    for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = o, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]);
                    return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
                }

                return I(t.prototype, {
                    preventDefault: function () {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
                    }, stopPropagation: function () {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
                    }, persist: function () {
                    }, isPersistent: nn
                }), t
            }

            var an, un, ln, sn = {
                    eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
                        return e.timeStamp || Date.now()
                    }, defaultPrevented: 0, isTrusted: 0
                }, cn = on(sn), fn = I({}, sn, {view: 0, detail: 0}), pn = on(fn), dn = I({}, fn, {
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
                    getModifierState: En,
                    button: 0,
                    buttons: 0,
                    relatedTarget: function (e) {
                        return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                    },
                    movementX: function (e) {
                        return "movementX" in e ? e.movementX : (e !== ln && (ln && "mousemove" === e.type ? (an = e.screenX - ln.screenX, un = e.screenY - ln.screenY) : un = an = 0, ln = e), an)
                    },
                    movementY: function (e) {
                        return "movementY" in e ? e.movementY : un
                    }
                }), hn = on(dn), yn = on(I({}, dn, {dataTransfer: 0})), vn = on(I({}, fn, {relatedTarget: 0})),
                mn = on(I({}, sn, {animationName: 0, elapsedTime: 0, pseudoElement: 0})), gn = I({}, sn, {
                    clipboardData: function (e) {
                        return "clipboardData" in e ? e.clipboardData : window.clipboardData
                    }
                }), bn = on(gn), wn = on(I({}, sn, {data: 0})), kn = {
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
                }, Pn = {
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
                }, Sn = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

            function On(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e]
            }

            function En() {
                return On
            }

            var _n = I({}, fn, {
                key: function (e) {
                    if (e.key) {
                        var t = kn[e.key] || e.key;
                        if ("Unidentified" !== t) return t
                    }
                    return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Pn[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: En,
                charCode: function (e) {
                    return "keypress" === e.type ? tn(e) : 0
                },
                keyCode: function (e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function (e) {
                    return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            }), Cn = on(_n), xn = on(I({}, dn, {
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
            })), jn = on(I({}, fn, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: En
            })), Tn = on(I({}, sn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0})), Rn = I({}, dn, {
                deltaX: function (e) {
                    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                }, deltaY: function (e) {
                    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                }, deltaZ: 0, deltaMode: 0
            }), Ln = on(Rn), Dn = [9, 13, 27, 32], Nn = c && "CompositionEvent" in window, An = null;
            c && "documentMode" in document && (An = document.documentMode);
            var Mn = c && "TextEvent" in window && !An, In = c && (!Nn || An && 8 < An && 11 >= An),
                Un = String.fromCharCode(32), zn = !1;

            function Bn(e, t) {
                switch (e) {
                    case"keyup":
                        return -1 !== Dn.indexOf(t.keyCode);
                    case"keydown":
                        return 229 !== t.keyCode;
                    case"keypress":
                    case"mousedown":
                    case"focusout":
                        return !0;
                    default:
                        return !1
                }
            }

            function Fn(e) {
                return "object" === typeof (e = e.detail) && "data" in e ? e.data : null
            }

            var Vn = !1;
            var Hn = {
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

            function Wn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!Hn[e.type] : "textarea" === t
            }

            function $n(e, t, n, r) {
                _e(r), 0 < (t = qr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({
                    event: n,
                    listeners: t
                }))
            }

            var qn = null, Kn = null;

            function Qn(e) {
                Ur(e, 0)
            }

            function Yn(e) {
                if (K(ko(e))) return e
            }

            function Xn(e, t) {
                if ("change" === e) return t
            }

            var Gn = !1;
            if (c) {
                var Jn;
                if (c) {
                    var Zn = "oninput" in document;
                    if (!Zn) {
                        var er = document.createElement("div");
                        er.setAttribute("oninput", "return;"), Zn = "function" === typeof er.oninput
                    }
                    Jn = Zn
                } else Jn = !1;
                Gn = Jn && (!document.documentMode || 9 < document.documentMode)
            }

            function tr() {
                qn && (qn.detachEvent("onpropertychange", nr), Kn = qn = null)
            }

            function nr(e) {
                if ("value" === e.propertyName && Yn(Kn)) {
                    var t = [];
                    $n(t, Kn, e, ke(e)), Re(Qn, t)
                }
            }

            function rr(e, t, n) {
                "focusin" === e ? (tr(), Kn = n, (qn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
            }

            function or(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Yn(Kn)
            }

            function ar(e, t) {
                if ("click" === e) return Yn(t)
            }

            function ir(e, t) {
                if ("input" === e || "change" === e) return Yn(t)
            }

            var ur = "function" === typeof Object.is ? Object.is : function (e, t) {
                return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
            };

            function lr(e, t) {
                if (ur(e, t)) return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                var n = Object.keys(e), r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (r = 0; r < n.length; r++) {
                    var o = n[r];
                    if (!f.call(t, o) || !ur(e[o], t[o])) return !1
                }
                return !0
            }

            function sr(e) {
                for (; e && e.firstChild;) e = e.firstChild;
                return e
            }

            function cr(e, t) {
                var n, r = sr(e);
                for (e = 0; r;) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length, e <= t && n >= t) return {node: r, offset: t - e};
                        e = n
                    }
                    e:{
                        for (; r;) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = sr(r)
                }
            }

            function fr(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? fr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }

            function pr() {
                for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement;) {
                    try {
                        var n = "string" === typeof t.contentWindow.location.href
                    } catch (r) {
                        n = !1
                    }
                    if (!n) break;
                    t = Q((e = t.contentWindow).document)
                }
                return t
            }

            function dr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }

            function hr(e) {
                var t = pr(), n = e.focusedElem, r = e.selectionRange;
                if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
                    if (null !== r && dr(n)) if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                        e = e.getSelection();
                        var o = n.textContent.length, a = Math.min(r.start, o);
                        r = void 0 === r.end ? a : Math.min(r.end, o), !e.extend && a > r && (o = r, r = a, a = o), o = cr(n, a);
                        var i = cr(n, r);
                        o && i && (1 !== e.rangeCount || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(o.node, o.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
                    }
                    for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                        element: e,
                        left: e.scrollLeft,
                        top: e.scrollTop
                    });
                    for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++) (e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                }
            }

            var yr = c && "documentMode" in document && 11 >= document.documentMode, vr = null, mr = null, gr = null,
                br = !1;

            function wr(e, t, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                br || null == vr || vr !== Q(r) || ("selectionStart" in (r = vr) && dr(r) ? r = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : r = {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                }, gr && lr(gr, r) || (gr = r, 0 < (r = qr(mr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({
                    event: t,
                    listeners: r
                }), t.target = vr)))
            }

            function kr(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
            }

            var Pr = {
                animationend: kr("Animation", "AnimationEnd"),
                animationiteration: kr("Animation", "AnimationIteration"),
                animationstart: kr("Animation", "AnimationStart"),
                transitionend: kr("Transition", "TransitionEnd")
            }, Sr = {}, Or = {};

            function Er(e) {
                if (Sr[e]) return Sr[e];
                if (!Pr[e]) return e;
                var t, n = Pr[e];
                for (t in n) if (n.hasOwnProperty(t) && t in Or) return Sr[e] = n[t];
                return e
            }

            c && (Or = document.createElement("div").style, "AnimationEvent" in window || (delete Pr.animationend.animation, delete Pr.animationiteration.animation, delete Pr.animationstart.animation), "TransitionEvent" in window || delete Pr.transitionend.transition);
            var _r = Er("animationend"), Cr = Er("animationiteration"), xr = Er("animationstart"),
                jr = Er("transitionend"), Tr = new Map,
                Rr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

            function Lr(e, t) {
                Tr.set(e, t), l(t, [e])
            }

            for (var Dr = 0; Dr < Rr.length; Dr++) {
                var Nr = Rr[Dr];
                Lr(Nr.toLowerCase(), "on" + (Nr[0].toUpperCase() + Nr.slice(1)))
            }
            Lr(_r, "onAnimationEnd"), Lr(Cr, "onAnimationIteration"), Lr(xr, "onAnimationStart"), Lr("dblclick", "onDoubleClick"), Lr("focusin", "onFocus"), Lr("focusout", "onBlur"), Lr(jr, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Ar = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                Mr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));

            function Ir(e, t, n) {
                var r = e.type || "unknown-event";
                e.currentTarget = n, function (e, t, n, r, o, i, u, l, s) {
                    if (Fe.apply(this, arguments), Me) {
                        if (!Me) throw Error(a(198));
                        var c = Ie;
                        Me = !1, Ie = null, Ue || (Ue = !0, ze = c)
                    }
                }(r, t, void 0, e), e.currentTarget = null
            }

            function Ur(e, t) {
                t = 0 !== (4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n], o = r.event;
                    r = r.listeners;
                    e:{
                        var a = void 0;
                        if (t) for (var i = r.length - 1; 0 <= i; i--) {
                            var u = r[i], l = u.instance, s = u.currentTarget;
                            if (u = u.listener, l !== a && o.isPropagationStopped()) break e;
                            Ir(o, u, s), a = l
                        } else for (i = 0; i < r.length; i++) {
                            if (l = (u = r[i]).instance, s = u.currentTarget, u = u.listener, l !== a && o.isPropagationStopped()) break e;
                            Ir(o, u, s), a = l
                        }
                    }
                }
                if (Ue) throw e = ze, Ue = !1, ze = null, e
            }

            function zr(e, t) {
                var n = t[vo];
                void 0 === n && (n = t[vo] = new Set);
                var r = e + "__bubble";
                n.has(r) || (Hr(t, e, 2, !1), n.add(r))
            }

            function Br(e, t, n) {
                var r = 0;
                t && (r |= 4), Hr(n, e, r, t)
            }

            var Fr = "_reactListening" + Math.random().toString(36).slice(2);

            function Vr(e) {
                if (!e[Fr]) {
                    e[Fr] = !0, i.forEach((function (t) {
                        "selectionchange" !== t && (Mr.has(t) || Br(t, !1, e), Br(t, !0, e))
                    }));
                    var t = 9 === e.nodeType ? e : e.ownerDocument;
                    null === t || t[Fr] || (t[Fr] = !0, Br("selectionchange", !1, t))
                }
            }

            function Hr(e, t, n, r) {
                switch (Xt(t)) {
                    case 1:
                        var o = $t;
                        break;
                    case 4:
                        o = qt;
                        break;
                    default:
                        o = Kt
                }
                n = o.bind(null, t, n, e), o = void 0, !De || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0), r ? void 0 !== o ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: o
                }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {passive: o}) : e.addEventListener(t, n, !1)
            }

            function Wr(e, t, n, r, o) {
                var a = r;
                if (0 === (1 & t) && 0 === (2 & t) && null !== r) e:for (; ;) {
                    if (null === r) return;
                    var i = r.tag;
                    if (3 === i || 4 === i) {
                        var u = r.stateNode.containerInfo;
                        if (u === o || 8 === u.nodeType && u.parentNode === o) break;
                        if (4 === i) for (i = r.return; null !== i;) {
                            var l = i.tag;
                            if ((3 === l || 4 === l) && ((l = i.stateNode.containerInfo) === o || 8 === l.nodeType && l.parentNode === o)) return;
                            i = i.return
                        }
                        for (; null !== u;) {
                            if (null === (i = bo(u))) return;
                            if (5 === (l = i.tag) || 6 === l) {
                                r = a = i;
                                continue e
                            }
                            u = u.parentNode
                        }
                    }
                    r = r.return
                }
                Re((function () {
                    var r = a, o = ke(n), i = [];
                    e:{
                        var u = Tr.get(e);
                        if (void 0 !== u) {
                            var l = cn, s = e;
                            switch (e) {
                                case"keypress":
                                    if (0 === tn(n)) break e;
                                case"keydown":
                                case"keyup":
                                    l = Cn;
                                    break;
                                case"focusin":
                                    s = "focus", l = vn;
                                    break;
                                case"focusout":
                                    s = "blur", l = vn;
                                    break;
                                case"beforeblur":
                                case"afterblur":
                                    l = vn;
                                    break;
                                case"click":
                                    if (2 === n.button) break e;
                                case"auxclick":
                                case"dblclick":
                                case"mousedown":
                                case"mousemove":
                                case"mouseup":
                                case"mouseout":
                                case"mouseover":
                                case"contextmenu":
                                    l = hn;
                                    break;
                                case"drag":
                                case"dragend":
                                case"dragenter":
                                case"dragexit":
                                case"dragleave":
                                case"dragover":
                                case"dragstart":
                                case"drop":
                                    l = yn;
                                    break;
                                case"touchcancel":
                                case"touchend":
                                case"touchmove":
                                case"touchstart":
                                    l = jn;
                                    break;
                                case _r:
                                case Cr:
                                case xr:
                                    l = mn;
                                    break;
                                case jr:
                                    l = Tn;
                                    break;
                                case"scroll":
                                    l = pn;
                                    break;
                                case"wheel":
                                    l = Ln;
                                    break;
                                case"copy":
                                case"cut":
                                case"paste":
                                    l = bn;
                                    break;
                                case"gotpointercapture":
                                case"lostpointercapture":
                                case"pointercancel":
                                case"pointerdown":
                                case"pointermove":
                                case"pointerout":
                                case"pointerover":
                                case"pointerup":
                                    l = xn
                            }
                            var c = 0 !== (4 & t), f = !c && "scroll" === e,
                                p = c ? null !== u ? u + "Capture" : null : u;
                            c = [];
                            for (var d, h = r; null !== h;) {
                                var y = (d = h).stateNode;
                                if (5 === d.tag && null !== y && (d = y, null !== p && (null != (y = Le(h, p)) && c.push($r(h, y, d)))), f) break;
                                h = h.return
                            }
                            0 < c.length && (u = new l(u, s, null, n, o), i.push({event: u, listeners: c}))
                        }
                    }
                    if (0 === (7 & t)) {
                        if (l = "mouseout" === e || "pointerout" === e, (!(u = "mouseover" === e || "pointerover" === e) || n === we || !(s = n.relatedTarget || n.fromElement) || !bo(s) && !s[yo]) && (l || u) && (u = o.window === o ? o : (u = o.ownerDocument) ? u.defaultView || u.parentWindow : window, l ? (l = r, null !== (s = (s = n.relatedTarget || n.toElement) ? bo(s) : null) && (s !== (f = Ve(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (l = null, s = r), l !== s)) {
                            if (c = hn, y = "onMouseLeave", p = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = xn, y = "onPointerLeave", p = "onPointerEnter", h = "pointer"), f = null == l ? u : ko(l), d = null == s ? u : ko(s), (u = new c(y, h + "leave", l, n, o)).target = f, u.relatedTarget = d, y = null, bo(o) === r && ((c = new c(p, h + "enter", s, n, o)).target = d, c.relatedTarget = f, y = c), f = y, l && s) e:{
                                for (p = s, h = 0, d = c = l; d; d = Kr(d)) h++;
                                for (d = 0, y = p; y; y = Kr(y)) d++;
                                for (; 0 < h - d;) c = Kr(c), h--;
                                for (; 0 < d - h;) p = Kr(p), d--;
                                for (; h--;) {
                                    if (c === p || null !== p && c === p.alternate) break e;
                                    c = Kr(c), p = Kr(p)
                                }
                                c = null
                            } else c = null;
                            null !== l && Qr(i, u, l, c, !1), null !== s && null !== f && Qr(i, f, s, c, !0)
                        }
                        if ("select" === (l = (u = r ? ko(r) : window).nodeName && u.nodeName.toLowerCase()) || "input" === l && "file" === u.type) var v = Xn; else if (Wn(u)) if (Gn) v = ir; else {
                            v = or;
                            var m = rr
                        } else (l = u.nodeName) && "input" === l.toLowerCase() && ("checkbox" === u.type || "radio" === u.type) && (v = ar);
                        switch (v && (v = v(e, r)) ? $n(i, v, n, o) : (m && m(e, u, r), "focusout" === e && (m = u._wrapperState) && m.controlled && "number" === u.type && ee(u, "number", u.value)), m = r ? ko(r) : window, e) {
                            case"focusin":
                                (Wn(m) || "true" === m.contentEditable) && (vr = m, mr = r, gr = null);
                                break;
                            case"focusout":
                                gr = mr = vr = null;
                                break;
                            case"mousedown":
                                br = !0;
                                break;
                            case"contextmenu":
                            case"mouseup":
                            case"dragend":
                                br = !1, wr(i, n, o);
                                break;
                            case"selectionchange":
                                if (yr) break;
                            case"keydown":
                            case"keyup":
                                wr(i, n, o)
                        }
                        var g;
                        if (Nn) e:{
                            switch (e) {
                                case"compositionstart":
                                    var b = "onCompositionStart";
                                    break e;
                                case"compositionend":
                                    b = "onCompositionEnd";
                                    break e;
                                case"compositionupdate":
                                    b = "onCompositionUpdate";
                                    break e
                            }
                            b = void 0
                        } else Vn ? Bn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                        b && (In && "ko" !== n.locale && (Vn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Vn && (g = en()) : (Jt = "value" in (Gt = o) ? Gt.value : Gt.textContent, Vn = !0)), 0 < (m = qr(r, b)).length && (b = new wn(b, e, null, n, o), i.push({
                            event: b,
                            listeners: m
                        }), g ? b.data = g : null !== (g = Fn(n)) && (b.data = g))), (g = Mn ? function (e, t) {
                            switch (e) {
                                case"compositionend":
                                    return Fn(t);
                                case"keypress":
                                    return 32 !== t.which ? null : (zn = !0, Un);
                                case"textInput":
                                    return (e = t.data) === Un && zn ? null : e;
                                default:
                                    return null
                            }
                        }(e, n) : function (e, t) {
                            if (Vn) return "compositionend" === e || !Nn && Bn(e, t) ? (e = en(), Zt = Jt = Gt = null, Vn = !1, e) : null;
                            switch (e) {
                                case"paste":
                                default:
                                    return null;
                                case"keypress":
                                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                        if (t.char && 1 < t.char.length) return t.char;
                                        if (t.which) return String.fromCharCode(t.which)
                                    }
                                    return null;
                                case"compositionend":
                                    return In && "ko" !== t.locale ? null : t.data
                            }
                        }(e, n)) && (0 < (r = qr(r, "onBeforeInput")).length && (o = new wn("onBeforeInput", "beforeinput", null, n, o), i.push({
                            event: o,
                            listeners: r
                        }), o.data = g))
                    }
                    Ur(i, t)
                }))
            }

            function $r(e, t, n) {
                return {instance: e, listener: t, currentTarget: n}
            }

            function qr(e, t) {
                for (var n = t + "Capture", r = []; null !== e;) {
                    var o = e, a = o.stateNode;
                    5 === o.tag && null !== a && (o = a, null != (a = Le(e, n)) && r.unshift($r(e, a, o)), null != (a = Le(e, t)) && r.push($r(e, a, o))), e = e.return
                }
                return r
            }

            function Kr(e) {
                if (null === e) return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }

            function Qr(e, t, n, r, o) {
                for (var a = t._reactName, i = []; null !== n && n !== r;) {
                    var u = n, l = u.alternate, s = u.stateNode;
                    if (null !== l && l === r) break;
                    5 === u.tag && null !== s && (u = s, o ? null != (l = Le(n, a)) && i.unshift($r(n, l, u)) : o || null != (l = Le(n, a)) && i.push($r(n, l, u))), n = n.return
                }
                0 !== i.length && e.push({event: t, listeners: i})
            }

            var Yr = /\r\n?/g, Xr = /\u0000|\uFFFD/g;

            function Gr(e) {
                return ("string" === typeof e ? e : "" + e).replace(Yr, "\n").replace(Xr, "")
            }

            function Jr(e, t, n) {
                if (t = Gr(t), Gr(e) !== t && n) throw Error(a(425))
            }

            function Zr() {
            }

            var eo = null, to = null;

            function no(e, t) {
                return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }

            var ro = "function" === typeof setTimeout ? setTimeout : void 0,
                oo = "function" === typeof clearTimeout ? clearTimeout : void 0,
                ao = "function" === typeof Promise ? Promise : void 0,
                io = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof ao ? function (e) {
                    return ao.resolve(null).then(e).catch(uo)
                } : ro;

            function uo(e) {
                setTimeout((function () {
                    throw e
                }))
            }

            function lo(e, t) {
                var n = t, r = 0;
                do {
                    var o = n.nextSibling;
                    if (e.removeChild(n), o && 8 === o.nodeType) if ("/$" === (n = o.data)) {
                        if (0 === r) return e.removeChild(o), void Vt(t);
                        r--
                    } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                    n = o
                } while (n);
                Vt(t)
            }

            function so(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t) break;
                    if (8 === t) {
                        if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                        if ("/$" === t) return null
                    }
                }
                return e
            }

            function co(e) {
                e = e.previousSibling;
                for (var t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t) return e;
                            t--
                        } else "/$" === n && t++
                    }
                    e = e.previousSibling
                }
                return null
            }

            var fo = Math.random().toString(36).slice(2), po = "__reactFiber$" + fo, ho = "__reactProps$" + fo,
                yo = "__reactContainer$" + fo, vo = "__reactEvents$" + fo, mo = "__reactListeners$" + fo,
                go = "__reactHandles$" + fo;

            function bo(e) {
                var t = e[po];
                if (t) return t;
                for (var n = e.parentNode; n;) {
                    if (t = n[yo] || n[po]) {
                        if (n = t.alternate, null !== t.child || null !== n && null !== n.child) for (e = co(e); null !== e;) {
                            if (n = e[po]) return n;
                            e = co(e)
                        }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }

            function wo(e) {
                return !(e = e[po] || e[yo]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }

            function ko(e) {
                if (5 === e.tag || 6 === e.tag) return e.stateNode;
                throw Error(a(33))
            }

            function Po(e) {
                return e[ho] || null
            }

            var So = [], Oo = -1;

            function Eo(e) {
                return {current: e}
            }

            function _o(e) {
                0 > Oo || (e.current = So[Oo], So[Oo] = null, Oo--)
            }

            function Co(e, t) {
                Oo++, So[Oo] = e.current, e.current = t
            }

            var xo = {}, jo = Eo(xo), To = Eo(!1), Ro = xo;

            function Lo(e, t) {
                var n = e.type.contextTypes;
                if (!n) return xo;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                var o, a = {};
                for (o in n) a[o] = t[o];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
            }

            function Do(e) {
                return null !== (e = e.childContextTypes) && void 0 !== e
            }

            function No() {
                _o(To), _o(jo)
            }

            function Ao(e, t, n) {
                if (jo.current !== xo) throw Error(a(168));
                Co(jo, t), Co(To, n)
            }

            function Mo(e, t, n) {
                var r = e.stateNode;
                if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
                for (var o in r = r.getChildContext()) if (!(o in t)) throw Error(a(108, H(e) || "Unknown", o));
                return I({}, n, r)
            }

            function Io(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xo, Ro = jo.current, Co(jo, e), Co(To, To.current), !0
            }

            function Uo(e, t, n) {
                var r = e.stateNode;
                if (!r) throw Error(a(169));
                n ? (e = Mo(e, t, Ro), r.__reactInternalMemoizedMergedChildContext = e, _o(To), _o(jo), Co(jo, e)) : _o(To), Co(To, n)
            }

            var zo = null, Bo = !1, Fo = !1;

            function Vo(e) {
                null === zo ? zo = [e] : zo.push(e)
            }

            function Ho() {
                if (!Fo && null !== zo) {
                    Fo = !0;
                    var e = 0, t = bt;
                    try {
                        var n = zo;
                        for (bt = 1; e < n.length; e++) {
                            var r = n[e];
                            do {
                                r = r(!0)
                            } while (null !== r)
                        }
                        zo = null, Bo = !1
                    } catch (o) {
                        throw null !== zo && (zo = zo.slice(e + 1)), Ke(Ze, Ho), o
                    } finally {
                        bt = t, Fo = !1
                    }
                }
                return null
            }

            var Wo = [], $o = 0, qo = null, Ko = 0, Qo = [], Yo = 0, Xo = null, Go = 1, Jo = "";

            function Zo(e, t) {
                Wo[$o++] = Ko, Wo[$o++] = qo, qo = e, Ko = t
            }

            function ea(e, t, n) {
                Qo[Yo++] = Go, Qo[Yo++] = Jo, Qo[Yo++] = Xo, Xo = e;
                var r = Go;
                e = Jo;
                var o = 32 - it(r) - 1;
                r &= ~(1 << o), n += 1;
                var a = 32 - it(t) + o;
                if (30 < a) {
                    var i = o - o % 5;
                    a = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Go = 1 << 32 - it(t) + o | n << o | r, Jo = a + e
                } else Go = 1 << a | n << o | r, Jo = e
            }

            function ta(e) {
                null !== e.return && (Zo(e, 1), ea(e, 1, 0))
            }

            function na(e) {
                for (; e === qo;) qo = Wo[--$o], Wo[$o] = null, Ko = Wo[--$o], Wo[$o] = null;
                for (; e === Xo;) Xo = Qo[--Yo], Qo[Yo] = null, Jo = Qo[--Yo], Qo[Yo] = null, Go = Qo[--Yo], Qo[Yo] = null
            }

            var ra = null, oa = null, aa = !1, ia = null;

            function ua(e, t) {
                var n = Ls(5, null, null, 0);
                n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
            }

            function la(e, t) {
                switch (e.tag) {
                    case 5:
                        var n = e.type;
                        return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, ra = e, oa = so(t.firstChild), !0);
                    case 6:
                        return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, ra = e, oa = null, !0);
                    case 13:
                        return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Xo ? {
                            id: Go,
                            overflow: Jo
                        } : null, e.memoizedState = {
                            dehydrated: t,
                            treeContext: n,
                            retryLane: 1073741824
                        }, (n = Ls(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, ra = e, oa = null, !0);
                    default:
                        return !1
                }
            }

            function sa(e) {
                return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
            }

            function ca(e) {
                if (aa) {
                    var t = oa;
                    if (t) {
                        var n = t;
                        if (!la(e, t)) {
                            if (sa(e)) throw Error(a(418));
                            t = so(n.nextSibling);
                            var r = ra;
                            t && la(e, t) ? ua(r, n) : (e.flags = -4097 & e.flags | 2, aa = !1, ra = e)
                        }
                    } else {
                        if (sa(e)) throw Error(a(418));
                        e.flags = -4097 & e.flags | 2, aa = !1, ra = e
                    }
                }
            }

            function fa(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                ra = e
            }

            function pa(e) {
                if (e !== ra) return !1;
                if (!aa) return fa(e), aa = !0, !1;
                var t;
                if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !no(e.type, e.memoizedProps)), t && (t = oa)) {
                    if (sa(e)) throw da(), Error(a(418));
                    for (; t;) ua(e, t), t = so(t.nextSibling)
                }
                if (fa(e), 13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
                    e:{
                        for (e = e.nextSibling, t = 0; e;) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if ("/$" === n) {
                                    if (0 === t) {
                                        oa = so(e.nextSibling);
                                        break e
                                    }
                                    t--
                                } else "$" !== n && "$!" !== n && "$?" !== n || t++
                            }
                            e = e.nextSibling
                        }
                        oa = null
                    }
                } else oa = ra ? so(e.stateNode.nextSibling) : null;
                return !0
            }

            function da() {
                for (var e = oa; e;) e = so(e.nextSibling)
            }

            function ha() {
                oa = ra = null, aa = !1
            }

            function ya(e) {
                null === ia ? ia = [e] : ia.push(e)
            }

            var va = w.ReactCurrentBatchConfig;

            function ma(e, t) {
                if (e && e.defaultProps) {
                    for (var n in t = I({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                return t
            }

            var ga = Eo(null), ba = null, wa = null, ka = null;

            function Pa() {
                ka = wa = ba = null
            }

            function Sa(e) {
                var t = ga.current;
                _o(ga), e._currentValue = t
            }

            function Oa(e, t, n) {
                for (; null !== e;) {
                    var r = e.alternate;
                    if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                    e = e.return
                }
            }

            function Ea(e, t) {
                ba = e, ka = wa = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (wu = !0), e.firstContext = null)
            }

            function _a(e) {
                var t = e._currentValue;
                if (ka !== e) if (e = {context: e, memoizedValue: t, next: null}, null === wa) {
                    if (null === ba) throw Error(a(308));
                    wa = e, ba.dependencies = {lanes: 0, firstContext: e}
                } else wa = wa.next = e;
                return t
            }

            var Ca = null;

            function xa(e) {
                null === Ca ? Ca = [e] : Ca.push(e)
            }

            function ja(e, t, n, r) {
                var o = t.interleaved;
                return null === o ? (n.next = n, xa(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Ta(e, r)
            }

            function Ta(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                return 3 === n.tag ? n.stateNode : null
            }

            var Ra = !1;

            function La(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {pending: null, interleaved: null, lanes: 0},
                    effects: null
                }
            }

            function Da(e, t) {
                e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }

            function Na(e, t) {
                return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
            }

            function Aa(e, t, n) {
                var r = e.updateQueue;
                if (null === r) return null;
                if (r = r.shared, 0 !== (2 & jl)) {
                    var o = r.pending;
                    return null === o ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Ta(e, n)
                }
                return null === (o = r.interleaved) ? (t.next = t, xa(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Ta(e, n)
            }

            function Ma(e, t, n) {
                if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes, t.lanes = n, gt(e, n)
                }
            }

            function Ia(e, t) {
                var n = e.updateQueue, r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var o = null, a = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var i = {
                                eventTime: n.eventTime,
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: n.callback,
                                next: null
                            };
                            null === a ? o = a = i : a = a.next = i, n = n.next
                        } while (null !== n);
                        null === a ? o = a = t : a = a.next = t
                    } else o = a = t;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: o,
                        lastBaseUpdate: a,
                        shared: r.shared,
                        effects: r.effects
                    }, void (e.updateQueue = n)
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
            }

            function Ua(e, t, n, r) {
                var o = e.updateQueue;
                Ra = !1;
                var a = o.firstBaseUpdate, i = o.lastBaseUpdate, u = o.shared.pending;
                if (null !== u) {
                    o.shared.pending = null;
                    var l = u, s = l.next;
                    l.next = null, null === i ? a = s : i.next = s, i = l;
                    var c = e.alternate;
                    null !== c && ((u = (c = c.updateQueue).lastBaseUpdate) !== i && (null === u ? c.firstBaseUpdate = s : u.next = s, c.lastBaseUpdate = l))
                }
                if (null !== a) {
                    var f = o.baseState;
                    for (i = 0, c = s = l = null, u = a; ;) {
                        var p = u.lane, d = u.eventTime;
                        if ((r & p) === p) {
                            null !== c && (c = c.next = {
                                eventTime: d,
                                lane: 0,
                                tag: u.tag,
                                payload: u.payload,
                                callback: u.callback,
                                next: null
                            });
                            e:{
                                var h = e, y = u;
                                switch (p = t, d = n, y.tag) {
                                    case 1:
                                        if ("function" === typeof (h = y.payload)) {
                                            f = h.call(d, f, p);
                                            break e
                                        }
                                        f = h;
                                        break e;
                                    case 3:
                                        h.flags = -65537 & h.flags | 128;
                                    case 0:
                                        if (null === (p = "function" === typeof (h = y.payload) ? h.call(d, f, p) : h) || void 0 === p) break e;
                                        f = I({}, f, p);
                                        break e;
                                    case 2:
                                        Ra = !0
                                }
                            }
                            null !== u.callback && 0 !== u.lane && (e.flags |= 64, null === (p = o.effects) ? o.effects = [u] : p.push(u))
                        } else d = {
                            eventTime: d,
                            lane: p,
                            tag: u.tag,
                            payload: u.payload,
                            callback: u.callback,
                            next: null
                        }, null === c ? (s = c = d, l = f) : c = c.next = d, i |= p;
                        if (null === (u = u.next)) {
                            if (null === (u = o.shared.pending)) break;
                            u = (p = u).next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null
                        }
                    }
                    if (null === c && (l = f), o.baseState = l, o.firstBaseUpdate = s, o.lastBaseUpdate = c, null !== (t = o.shared.interleaved)) {
                        o = t;
                        do {
                            i |= o.lane, o = o.next
                        } while (o !== t)
                    } else null === a && (o.shared.lanes = 0);
                    Il |= i, e.lanes = i, e.memoizedState = f
                }
            }

            function za(e, t, n) {
                if (e = t.effects, t.effects = null, null !== e) for (t = 0; t < e.length; t++) {
                    var r = e[t], o = r.callback;
                    if (null !== o) {
                        if (r.callback = null, r = n, "function" !== typeof o) throw Error(a(191, o));
                        o.call(r)
                    }
                }
            }

            var Ba = (new r.Component).refs;

            function Fa(e, t, n, r) {
                n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : I({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
            }

            var Va = {
                isMounted: function (e) {
                    return !!(e = e._reactInternals) && Ve(e) === e
                }, enqueueSetState: function (e, t, n) {
                    e = e._reactInternals;
                    var r = ts(), o = ns(e), a = Na(r, o);
                    a.payload = t, void 0 !== n && null !== n && (a.callback = n), null !== (t = Aa(e, a, o)) && (rs(t, e, o, r), Ma(t, e, o))
                }, enqueueReplaceState: function (e, t, n) {
                    e = e._reactInternals;
                    var r = ts(), o = ns(e), a = Na(r, o);
                    a.tag = 1, a.payload = t, void 0 !== n && null !== n && (a.callback = n), null !== (t = Aa(e, a, o)) && (rs(t, e, o, r), Ma(t, e, o))
                }, enqueueForceUpdate: function (e, t) {
                    e = e._reactInternals;
                    var n = ts(), r = ns(e), o = Na(n, r);
                    o.tag = 2, void 0 !== t && null !== t && (o.callback = t), null !== (t = Aa(e, o, r)) && (rs(t, e, r, n), Ma(t, e, r))
                }
            };

            function Ha(e, t, n, r, o, a, i) {
                return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, i) : !t.prototype || !t.prototype.isPureReactComponent || (!lr(n, r) || !lr(o, a))
            }

            function Wa(e, t, n) {
                var r = !1, o = xo, a = t.contextType;
                return "object" === typeof a && null !== a ? a = _a(a) : (o = Do(t) ? Ro : jo.current, a = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Lo(e, o) : xo), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Va, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = a), t
            }

            function $a(e, t, n, r) {
                e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Va.enqueueReplaceState(t, t.state, null)
            }

            function qa(e, t, n, r) {
                var o = e.stateNode;
                o.props = n, o.state = e.memoizedState, o.refs = Ba, La(e);
                var a = t.contextType;
                "object" === typeof a && null !== a ? o.context = _a(a) : (a = Do(t) ? Ro : jo.current, o.context = Lo(e, a)), o.state = e.memoizedState, "function" === typeof (a = t.getDerivedStateFromProps) && (Fa(e, t, a, n), o.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof o.getSnapshotBeforeUpdate || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || (t = o.state, "function" === typeof o.componentWillMount && o.componentWillMount(), "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && Va.enqueueReplaceState(o, o.state, null), Ua(e, n, o, r), o.state = e.memoizedState), "function" === typeof o.componentDidMount && (e.flags |= 4194308)
            }

            function Ka(e, t, n) {
                if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag) throw Error(a(309));
                            var r = n.stateNode
                        }
                        if (!r) throw Error(a(147, e));
                        var o = r, i = "" + e;
                        return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === i ? t.ref : (t = function (e) {
                            var t = o.refs;
                            t === Ba && (t = o.refs = {}), null === e ? delete t[i] : t[i] = e
                        }, t._stringRef = i, t)
                    }
                    if ("string" !== typeof e) throw Error(a(284));
                    if (!n._owner) throw Error(a(290, e))
                }
                return e
            }

            function Qa(e, t) {
                throw e = Object.prototype.toString.call(t), Error(a(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
            }

            function Ya(e) {
                return (0, e._init)(e._payload)
            }

            function Xa(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.deletions;
                        null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                    }
                }

                function n(n, r) {
                    if (!e) return null;
                    for (; null !== r;) t(n, r), r = r.sibling;
                    return null
                }

                function r(e, t) {
                    for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                    return e
                }

                function o(e, t) {
                    return (e = Ns(e, t)).index = 0, e.sibling = null, e
                }

                function i(t, n, r) {
                    return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                }

                function u(t) {
                    return e && null === t.alternate && (t.flags |= 2), t
                }

                function l(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = Us(n, e.mode, r)).return = e, t) : ((t = o(t, n)).return = e, t)
                }

                function s(e, t, n, r) {
                    var a = n.type;
                    return a === S ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" === typeof a && null !== a && a.$$typeof === L && Ya(a) === t.type) ? ((r = o(t, n.props)).ref = Ka(e, t, n), r.return = e, r) : ((r = As(n.type, n.key, n.props, null, e.mode, r)).ref = Ka(e, t, n), r.return = e, r)
                }

                function c(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = zs(n, e.mode, r)).return = e, t) : ((t = o(t, n.children || [])).return = e, t)
                }

                function f(e, t, n, r, a) {
                    return null === t || 7 !== t.tag ? ((t = Ms(n, e.mode, r, a)).return = e, t) : ((t = o(t, n)).return = e, t)
                }

                function p(e, t, n) {
                    if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = Us("" + t, e.mode, n)).return = e, t;
                    if ("object" === typeof t && null !== t) {
                        switch (t.$$typeof) {
                            case k:
                                return (n = As(t.type, t.key, t.props, null, e.mode, n)).ref = Ka(e, null, t), n.return = e, n;
                            case P:
                                return (t = zs(t, e.mode, n)).return = e, t;
                            case L:
                                return p(e, (0, t._init)(t._payload), n)
                        }
                        if (te(t) || A(t)) return (t = Ms(t, e.mode, n, null)).return = e, t;
                        Qa(e, t)
                    }
                    return null
                }

                function d(e, t, n, r) {
                    var o = null !== t ? t.key : null;
                    if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== o ? null : l(e, t, "" + n, r);
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case k:
                                return n.key === o ? s(e, t, n, r) : null;
                            case P:
                                return n.key === o ? c(e, t, n, r) : null;
                            case L:
                                return d(e, t, (o = n._init)(n._payload), r)
                        }
                        if (te(n) || A(n)) return null !== o ? null : f(e, t, n, r, null);
                        Qa(e, n)
                    }
                    return null
                }

                function h(e, t, n, r, o) {
                    if ("string" === typeof r && "" !== r || "number" === typeof r) return l(t, e = e.get(n) || null, "" + r, o);
                    if ("object" === typeof r && null !== r) {
                        switch (r.$$typeof) {
                            case k:
                                return s(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                            case P:
                                return c(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                            case L:
                                return h(e, t, n, (0, r._init)(r._payload), o)
                        }
                        if (te(r) || A(r)) return f(t, e = e.get(n) || null, r, o, null);
                        Qa(t, r)
                    }
                    return null
                }

                function y(o, a, u, l) {
                    for (var s = null, c = null, f = a, y = a = 0, v = null; null !== f && y < u.length; y++) {
                        f.index > y ? (v = f, f = null) : v = f.sibling;
                        var m = d(o, f, u[y], l);
                        if (null === m) {
                            null === f && (f = v);
                            break
                        }
                        e && f && null === m.alternate && t(o, f), a = i(m, a, y), null === c ? s = m : c.sibling = m, c = m, f = v
                    }
                    if (y === u.length) return n(o, f), aa && Zo(o, y), s;
                    if (null === f) {
                        for (; y < u.length; y++) null !== (f = p(o, u[y], l)) && (a = i(f, a, y), null === c ? s = f : c.sibling = f, c = f);
                        return aa && Zo(o, y), s
                    }
                    for (f = r(o, f); y < u.length; y++) null !== (v = h(f, o, y, u[y], l)) && (e && null !== v.alternate && f.delete(null === v.key ? y : v.key), a = i(v, a, y), null === c ? s = v : c.sibling = v, c = v);
                    return e && f.forEach((function (e) {
                        return t(o, e)
                    })), aa && Zo(o, y), s
                }

                function v(o, u, l, s) {
                    var c = A(l);
                    if ("function" !== typeof c) throw Error(a(150));
                    if (null == (l = c.call(l))) throw Error(a(151));
                    for (var f = c = null, y = u, v = u = 0, m = null, g = l.next(); null !== y && !g.done; v++, g = l.next()) {
                        y.index > v ? (m = y, y = null) : m = y.sibling;
                        var b = d(o, y, g.value, s);
                        if (null === b) {
                            null === y && (y = m);
                            break
                        }
                        e && y && null === b.alternate && t(o, y), u = i(b, u, v), null === f ? c = b : f.sibling = b, f = b, y = m
                    }
                    if (g.done) return n(o, y), aa && Zo(o, v), c;
                    if (null === y) {
                        for (; !g.done; v++, g = l.next()) null !== (g = p(o, g.value, s)) && (u = i(g, u, v), null === f ? c = g : f.sibling = g, f = g);
                        return aa && Zo(o, v), c
                    }
                    for (y = r(o, y); !g.done; v++, g = l.next()) null !== (g = h(y, o, v, g.value, s)) && (e && null !== g.alternate && y.delete(null === g.key ? v : g.key), u = i(g, u, v), null === f ? c = g : f.sibling = g, f = g);
                    return e && y.forEach((function (e) {
                        return t(o, e)
                    })), aa && Zo(o, v), c
                }

                return function e(r, a, i, l) {
                    if ("object" === typeof i && null !== i && i.type === S && null === i.key && (i = i.props.children), "object" === typeof i && null !== i) {
                        switch (i.$$typeof) {
                            case k:
                                e:{
                                    for (var s = i.key, c = a; null !== c;) {
                                        if (c.key === s) {
                                            if ((s = i.type) === S) {
                                                if (7 === c.tag) {
                                                    n(r, c.sibling), (a = o(c, i.props.children)).return = r, r = a;
                                                    break e
                                                }
                                            } else if (c.elementType === s || "object" === typeof s && null !== s && s.$$typeof === L && Ya(s) === c.type) {
                                                n(r, c.sibling), (a = o(c, i.props)).ref = Ka(r, c, i), a.return = r, r = a;
                                                break e
                                            }
                                            n(r, c);
                                            break
                                        }
                                        t(r, c), c = c.sibling
                                    }
                                    i.type === S ? ((a = Ms(i.props.children, r.mode, l, i.key)).return = r, r = a) : ((l = As(i.type, i.key, i.props, null, r.mode, l)).ref = Ka(r, a, i), l.return = r, r = l)
                                }
                                return u(r);
                            case P:
                                e:{
                                    for (c = i.key; null !== a;) {
                                        if (a.key === c) {
                                            if (4 === a.tag && a.stateNode.containerInfo === i.containerInfo && a.stateNode.implementation === i.implementation) {
                                                n(r, a.sibling), (a = o(a, i.children || [])).return = r, r = a;
                                                break e
                                            }
                                            n(r, a);
                                            break
                                        }
                                        t(r, a), a = a.sibling
                                    }
                                    (a = zs(i, r.mode, l)).return = r, r = a
                                }
                                return u(r);
                            case L:
                                return e(r, a, (c = i._init)(i._payload), l)
                        }
                        if (te(i)) return y(r, a, i, l);
                        if (A(i)) return v(r, a, i, l);
                        Qa(r, i)
                    }
                    return "string" === typeof i && "" !== i || "number" === typeof i ? (i = "" + i, null !== a && 6 === a.tag ? (n(r, a.sibling), (a = o(a, i)).return = r, r = a) : (n(r, a), (a = Us(i, r.mode, l)).return = r, r = a), u(r)) : n(r, a)
                }
            }

            var Ga = Xa(!0), Ja = Xa(!1), Za = {}, ei = Eo(Za), ti = Eo(Za), ni = Eo(Za);

            function ri(e) {
                if (e === Za) throw Error(a(174));
                return e
            }

            function oi(e, t) {
                switch (Co(ni, t), Co(ti, e), Co(ei, Za), e = t.nodeType) {
                    case 9:
                    case 11:
                        t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
                        break;
                    default:
                        t = le(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                }
                _o(ei), Co(ei, t)
            }

            function ai() {
                _o(ei), _o(ti), _o(ni)
            }

            function ii(e) {
                ri(ni.current);
                var t = ri(ei.current), n = le(t, e.type);
                t !== n && (Co(ti, e), Co(ei, n))
            }

            function ui(e) {
                ti.current === e && (_o(ei), _o(ti))
            }

            var li = Eo(0);

            function si(e) {
                for (var t = e; null !== t;) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 !== (128 & t.flags)) return t
                    } else if (null !== t.child) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) return null;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
                return null
            }

            var ci = [];

            function fi() {
                for (var e = 0; e < ci.length; e++) ci[e]._workInProgressVersionPrimary = null;
                ci.length = 0
            }

            var pi = w.ReactCurrentDispatcher, di = w.ReactCurrentBatchConfig, hi = 0, yi = null, vi = null, mi = null,
                gi = !1, bi = !1, wi = 0, ki = 0;

            function Pi() {
                throw Error(a(321))
            }

            function Si(e, t) {
                if (null === t) return !1;
                for (var n = 0; n < t.length && n < e.length; n++) if (!ur(e[n], t[n])) return !1;
                return !0
            }

            function Oi(e, t, n, r, o, i) {
                if (hi = i, yi = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, pi.current = null === e || null === e.memoizedState ? uu : lu, e = n(r, o), bi) {
                    i = 0;
                    do {
                        if (bi = !1, wi = 0, 25 <= i) throw Error(a(301));
                        i += 1, mi = vi = null, t.updateQueue = null, pi.current = su, e = n(r, o)
                    } while (bi)
                }
                if (pi.current = iu, t = null !== vi && null !== vi.next, hi = 0, mi = vi = yi = null, gi = !1, t) throw Error(a(300));
                return e
            }

            function Ei() {
                var e = 0 !== wi;
                return wi = 0, e
            }

            function _i() {
                var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
                return null === mi ? yi.memoizedState = mi = e : mi = mi.next = e, mi
            }

            function Ci() {
                if (null === vi) {
                    var e = yi.alternate;
                    e = null !== e ? e.memoizedState : null
                } else e = vi.next;
                var t = null === mi ? yi.memoizedState : mi.next;
                if (null !== t) mi = t, vi = e; else {
                    if (null === e) throw Error(a(310));
                    e = {
                        memoizedState: (vi = e).memoizedState,
                        baseState: vi.baseState,
                        baseQueue: vi.baseQueue,
                        queue: vi.queue,
                        next: null
                    }, null === mi ? yi.memoizedState = mi = e : mi = mi.next = e
                }
                return mi
            }

            function xi(e, t) {
                return "function" === typeof t ? t(e) : t
            }

            function ji(e) {
                var t = Ci(), n = t.queue;
                if (null === n) throw Error(a(311));
                n.lastRenderedReducer = e;
                var r = vi, o = r.baseQueue, i = n.pending;
                if (null !== i) {
                    if (null !== o) {
                        var u = o.next;
                        o.next = i.next, i.next = u
                    }
                    r.baseQueue = o = i, n.pending = null
                }
                if (null !== o) {
                    i = o.next, r = r.baseState;
                    var l = u = null, s = null, c = i;
                    do {
                        var f = c.lane;
                        if ((hi & f) === f) null !== s && (s = s.next = {
                            lane: 0,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null
                        }), r = c.hasEagerState ? c.eagerState : e(r, c.action); else {
                            var p = {
                                lane: f,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            };
                            null === s ? (l = s = p, u = r) : s = s.next = p, yi.lanes |= f, Il |= f
                        }
                        c = c.next
                    } while (null !== c && c !== i);
                    null === s ? u = r : s.next = l, ur(r, t.memoizedState) || (wu = !0), t.memoizedState = r, t.baseState = u, t.baseQueue = s, n.lastRenderedState = r
                }
                if (null !== (e = n.interleaved)) {
                    o = e;
                    do {
                        i = o.lane, yi.lanes |= i, Il |= i, o = o.next
                    } while (o !== e)
                } else null === o && (n.lanes = 0);
                return [t.memoizedState, n.dispatch]
            }

            function Ti(e) {
                var t = Ci(), n = t.queue;
                if (null === n) throw Error(a(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch, o = n.pending, i = t.memoizedState;
                if (null !== o) {
                    n.pending = null;
                    var u = o = o.next;
                    do {
                        i = e(i, u.action), u = u.next
                    } while (u !== o);
                    ur(i, t.memoizedState) || (wu = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i
                }
                return [i, r]
            }

            function Ri() {
            }

            function Li(e, t) {
                var n = yi, r = Ci(), o = t(), i = !ur(r.memoizedState, o);
                if (i && (r.memoizedState = o, wu = !0), r = r.queue, Wi(Ai.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || null !== mi && 1 & mi.memoizedState.tag) {
                    if (n.flags |= 2048, zi(9, Ni.bind(null, n, r, o, t), void 0, null), null === Tl) throw Error(a(349));
                    0 !== (30 & hi) || Di(n, t, o)
                }
                return o
            }

            function Di(e, t, n) {
                e.flags |= 16384, e = {
                    getSnapshot: t,
                    value: n
                }, null === (t = yi.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                }, yi.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
            }

            function Ni(e, t, n, r) {
                t.value = n, t.getSnapshot = r, Mi(t) && Ii(e)
            }

            function Ai(e, t, n) {
                return n((function () {
                    Mi(t) && Ii(e)
                }))
            }

            function Mi(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !ur(e, n)
                } catch (r) {
                    return !0
                }
            }

            function Ii(e) {
                var t = Ta(e, 1);
                null !== t && rs(t, e, 1, -1)
            }

            function Ui(e) {
                var t = _i();
                return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: xi,
                    lastRenderedState: e
                }, t.queue = e, e = e.dispatch = nu.bind(null, yi, e), [t.memoizedState, e]
            }

            function zi(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: n,
                    deps: r,
                    next: null
                }, null === (t = yi.updateQueue) ? (t = {
                    lastEffect: null,
                    stores: null
                }, yi.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
            }

            function Bi() {
                return Ci().memoizedState
            }

            function Fi(e, t, n, r) {
                var o = _i();
                yi.flags |= e, o.memoizedState = zi(1 | t, n, void 0, void 0 === r ? null : r)
            }

            function Vi(e, t, n, r) {
                var o = Ci();
                r = void 0 === r ? null : r;
                var a = void 0;
                if (null !== vi) {
                    var i = vi.memoizedState;
                    if (a = i.destroy, null !== r && Si(r, i.deps)) return void (o.memoizedState = zi(t, n, a, r))
                }
                yi.flags |= e, o.memoizedState = zi(1 | t, n, a, r)
            }

            function Hi(e, t) {
                return Fi(8390656, 8, e, t)
            }

            function Wi(e, t) {
                return Vi(2048, 8, e, t)
            }

            function $i(e, t) {
                return Vi(4, 2, e, t)
            }

            function qi(e, t) {
                return Vi(4, 4, e, t)
            }

            function Ki(e, t) {
                return "function" === typeof t ? (e = e(), t(e), function () {
                    t(null)
                }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function () {
                    t.current = null
                }) : void 0
            }

            function Qi(e, t, n) {
                return n = null !== n && void 0 !== n ? n.concat([e]) : null, Vi(4, 4, Ki.bind(null, t, e), n)
            }

            function Yi() {
            }

            function Xi(e, t) {
                var n = Ci();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && Si(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
            }

            function Gi(e, t) {
                var n = Ci();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && Si(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
            }

            function Ji(e, t, n) {
                return 0 === (21 & hi) ? (e.baseState && (e.baseState = !1, wu = !0), e.memoizedState = n) : (ur(n, t) || (n = yt(), yi.lanes |= n, Il |= n, e.baseState = !0), t)
            }

            function Zi(e, t) {
                var n = bt;
                bt = 0 !== n && 4 > n ? n : 4, e(!0);
                var r = di.transition;
                di.transition = {};
                try {
                    e(!1), t()
                } finally {
                    bt = n, di.transition = r
                }
            }

            function eu() {
                return Ci().memoizedState
            }

            function tu(e, t, n) {
                var r = ns(e);
                if (n = {
                    lane: r,
                    action: n,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, ru(e)) ou(t, n); else if (null !== (n = ja(e, t, n, r))) {
                    rs(n, e, r, ts()), au(n, t, r)
                }
            }

            function nu(e, t, n) {
                var r = ns(e), o = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null};
                if (ru(e)) ou(t, o); else {
                    var a = e.alternate;
                    if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer)) try {
                        var i = t.lastRenderedState, u = a(i, n);
                        if (o.hasEagerState = !0, o.eagerState = u, ur(u, i)) {
                            var l = t.interleaved;
                            return null === l ? (o.next = o, xa(t)) : (o.next = l.next, l.next = o), void (t.interleaved = o)
                        }
                    } catch (s) {
                    }
                    null !== (n = ja(e, t, o, r)) && (rs(n, e, r, o = ts()), au(n, t, r))
                }
            }

            function ru(e) {
                var t = e.alternate;
                return e === yi || null !== t && t === yi
            }

            function ou(e, t) {
                bi = gi = !0;
                var n = e.pending;
                null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
            }

            function au(e, t, n) {
                if (0 !== (4194240 & n)) {
                    var r = t.lanes;
                    n |= r &= e.pendingLanes, t.lanes = n, gt(e, n)
                }
            }

            var iu = {
                readContext: _a,
                useCallback: Pi,
                useContext: Pi,
                useEffect: Pi,
                useImperativeHandle: Pi,
                useInsertionEffect: Pi,
                useLayoutEffect: Pi,
                useMemo: Pi,
                useReducer: Pi,
                useRef: Pi,
                useState: Pi,
                useDebugValue: Pi,
                useDeferredValue: Pi,
                useTransition: Pi,
                useMutableSource: Pi,
                useSyncExternalStore: Pi,
                useId: Pi,
                unstable_isNewReconciler: !1
            }, uu = {
                readContext: _a, useCallback: function (e, t) {
                    return _i().memoizedState = [e, void 0 === t ? null : t], e
                }, useContext: _a, useEffect: Hi, useImperativeHandle: function (e, t, n) {
                    return n = null !== n && void 0 !== n ? n.concat([e]) : null, Fi(4194308, 4, Ki.bind(null, t, e), n)
                }, useLayoutEffect: function (e, t) {
                    return Fi(4194308, 4, e, t)
                }, useInsertionEffect: function (e, t) {
                    return Fi(4, 2, e, t)
                }, useMemo: function (e, t) {
                    var n = _i();
                    return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                }, useReducer: function (e, t, n) {
                    var r = _i();
                    return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    }, r.queue = e, e = e.dispatch = tu.bind(null, yi, e), [r.memoizedState, e]
                }, useRef: function (e) {
                    return e = {current: e}, _i().memoizedState = e
                }, useState: Ui, useDebugValue: Yi, useDeferredValue: function (e) {
                    return _i().memoizedState = e
                }, useTransition: function () {
                    var e = Ui(!1), t = e[0];
                    return e = Zi.bind(null, e[1]), _i().memoizedState = e, [t, e]
                }, useMutableSource: function () {
                }, useSyncExternalStore: function (e, t, n) {
                    var r = yi, o = _i();
                    if (aa) {
                        if (void 0 === n) throw Error(a(407));
                        n = n()
                    } else {
                        if (n = t(), null === Tl) throw Error(a(349));
                        0 !== (30 & hi) || Di(r, t, n)
                    }
                    o.memoizedState = n;
                    var i = {value: n, getSnapshot: t};
                    return o.queue = i, Hi(Ai.bind(null, r, i, e), [e]), r.flags |= 2048, zi(9, Ni.bind(null, r, i, n, t), void 0, null), n
                }, useId: function () {
                    var e = _i(), t = Tl.identifierPrefix;
                    if (aa) {
                        var n = Jo;
                        t = ":" + t + "R" + (n = (Go & ~(1 << 32 - it(Go) - 1)).toString(32) + n), 0 < (n = wi++) && (t += "H" + n.toString(32)), t += ":"
                    } else t = ":" + t + "r" + (n = ki++).toString(32) + ":";
                    return e.memoizedState = t
                }, unstable_isNewReconciler: !1
            }, lu = {
                readContext: _a,
                useCallback: Xi,
                useContext: _a,
                useEffect: Wi,
                useImperativeHandle: Qi,
                useInsertionEffect: $i,
                useLayoutEffect: qi,
                useMemo: Gi,
                useReducer: ji,
                useRef: Bi,
                useState: function () {
                    return ji(xi)
                },
                useDebugValue: Yi,
                useDeferredValue: function (e) {
                    return Ji(Ci(), vi.memoizedState, e)
                },
                useTransition: function () {
                    return [ji(xi)[0], Ci().memoizedState]
                },
                useMutableSource: Ri,
                useSyncExternalStore: Li,
                useId: eu,
                unstable_isNewReconciler: !1
            }, su = {
                readContext: _a,
                useCallback: Xi,
                useContext: _a,
                useEffect: Wi,
                useImperativeHandle: Qi,
                useInsertionEffect: $i,
                useLayoutEffect: qi,
                useMemo: Gi,
                useReducer: Ti,
                useRef: Bi,
                useState: function () {
                    return Ti(xi)
                },
                useDebugValue: Yi,
                useDeferredValue: function (e) {
                    var t = Ci();
                    return null === vi ? t.memoizedState = e : Ji(t, vi.memoizedState, e)
                },
                useTransition: function () {
                    return [Ti(xi)[0], Ci().memoizedState]
                },
                useMutableSource: Ri,
                useSyncExternalStore: Li,
                useId: eu,
                unstable_isNewReconciler: !1
            };

            function cu(e, t) {
                try {
                    var n = "", r = t;
                    do {
                        n += F(r), r = r.return
                    } while (r);
                    var o = n
                } catch (a) {
                    o = "\nError generating stack: " + a.message + "\n" + a.stack
                }
                return {value: e, source: t, stack: o, digest: null}
            }

            function fu(e, t, n) {
                return {value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null}
            }

            function pu(e, t) {
                try {
                    console.error(t.value)
                } catch (n) {
                    setTimeout((function () {
                        throw n
                    }))
                }
            }

            var du = "function" === typeof WeakMap ? WeakMap : Map;

            function hu(e, t, n) {
                (n = Na(-1, n)).tag = 3, n.payload = {element: null};
                var r = t.value;
                return n.callback = function () {
                    $l || ($l = !0, ql = r), pu(0, t)
                }, n
            }

            function yu(e, t, n) {
                (n = Na(-1, n)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" === typeof r) {
                    var o = t.value;
                    n.payload = function () {
                        return r(o)
                    }, n.callback = function () {
                        pu(0, t)
                    }
                }
                var a = e.stateNode;
                return null !== a && "function" === typeof a.componentDidCatch && (n.callback = function () {
                    pu(0, t), "function" !== typeof r && (null === Kl ? Kl = new Set([this]) : Kl.add(this));
                    var e = t.stack;
                    this.componentDidCatch(t.value, {componentStack: null !== e ? e : ""})
                }), n
            }

            function vu(e, t, n) {
                var r = e.pingCache;
                if (null === r) {
                    r = e.pingCache = new du;
                    var o = new Set;
                    r.set(t, o)
                } else void 0 === (o = r.get(t)) && (o = new Set, r.set(t, o));
                o.has(n) || (o.add(n), e = _s.bind(null, e, t, n), t.then(e, e))
            }

            function mu(e) {
                do {
                    var t;
                    if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                    e = e.return
                } while (null !== e);
                return null
            }

            function gu(e, t, n, r, o) {
                return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Na(-1, 1)).tag = 2, Aa(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e)
            }

            var bu = w.ReactCurrentOwner, wu = !1;

            function ku(e, t, n, r) {
                t.child = null === e ? Ja(t, null, n, r) : Ga(t, e.child, n, r)
            }

            function Pu(e, t, n, r, o) {
                n = n.render;
                var a = t.ref;
                return Ea(t, o), r = Oi(e, t, n, r, a, o), n = Ei(), null === e || wu ? (aa && n && ta(t), t.flags |= 1, ku(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, $u(e, t, o))
            }

            function Su(e, t, n, r, o) {
                if (null === e) {
                    var a = n.type;
                    return "function" !== typeof a || Ds(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = As(n.type, null, r, t, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, Ou(e, t, a, r, o))
                }
                if (a = e.child, 0 === (e.lanes & o)) {
                    var i = a.memoizedProps;
                    if ((n = null !== (n = n.compare) ? n : lr)(i, r) && e.ref === t.ref) return $u(e, t, o)
                }
                return t.flags |= 1, (e = Ns(a, r)).ref = t.ref, e.return = t, t.child = e
            }

            function Ou(e, t, n, r, o) {
                if (null !== e) {
                    var a = e.memoizedProps;
                    if (lr(a, r) && e.ref === t.ref) {
                        if (wu = !1, t.pendingProps = r = a, 0 === (e.lanes & o)) return t.lanes = e.lanes, $u(e, t, o);
                        0 !== (131072 & e.flags) && (wu = !0)
                    }
                }
                return Cu(e, t, n, r, o)
            }

            function Eu(e, t, n) {
                var r = t.pendingProps, o = r.children, a = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode) if (0 === (1 & t.mode)) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, Co(Nl, Dl), Dl |= n; else {
                    if (0 === (1073741824 & n)) return e = null !== a ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }, t.updateQueue = null, Co(Nl, Dl), Dl |= e, null;
                    t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    }, r = null !== a ? a.baseLanes : n, Co(Nl, Dl), Dl |= r
                } else null !== a ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, Co(Nl, Dl), Dl |= r;
                return ku(e, t, o, n), t.child
            }

            function _u(e, t) {
                var n = t.ref;
                (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
            }

            function Cu(e, t, n, r, o) {
                var a = Do(n) ? Ro : jo.current;
                return a = Lo(t, a), Ea(t, o), n = Oi(e, t, n, r, a, o), r = Ei(), null === e || wu ? (aa && r && ta(t), t.flags |= 1, ku(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, $u(e, t, o))
            }

            function xu(e, t, n, r, o) {
                if (Do(n)) {
                    var a = !0;
                    Io(t)
                } else a = !1;
                if (Ea(t, o), null === t.stateNode) Wu(e, t), Wa(t, n, r), qa(t, n, r, o), r = !0; else if (null === e) {
                    var i = t.stateNode, u = t.memoizedProps;
                    i.props = u;
                    var l = i.context, s = n.contextType;
                    "object" === typeof s && null !== s ? s = _a(s) : s = Lo(t, s = Do(n) ? Ro : jo.current);
                    var c = n.getDerivedStateFromProps,
                        f = "function" === typeof c || "function" === typeof i.getSnapshotBeforeUpdate;
                    f || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (u !== r || l !== s) && $a(t, i, r, s), Ra = !1;
                    var p = t.memoizedState;
                    i.state = p, Ua(t, r, i, o), l = t.memoizedState, u !== r || p !== l || To.current || Ra ? ("function" === typeof c && (Fa(t, n, c, r), l = t.memoizedState), (u = Ra || Ha(t, n, u, r, p, l, s)) ? (f || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || ("function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" === typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), i.props = r, i.state = l, i.context = s, r = u) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
                } else {
                    i = t.stateNode, Da(e, t), u = t.memoizedProps, s = t.type === t.elementType ? u : ma(t.type, u), i.props = s, f = t.pendingProps, p = i.context, "object" === typeof (l = n.contextType) && null !== l ? l = _a(l) : l = Lo(t, l = Do(n) ? Ro : jo.current);
                    var d = n.getDerivedStateFromProps;
                    (c = "function" === typeof d || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (u !== f || p !== l) && $a(t, i, r, l), Ra = !1, p = t.memoizedState, i.state = p, Ua(t, r, i, o);
                    var h = t.memoizedState;
                    u !== f || p !== h || To.current || Ra ? ("function" === typeof d && (Fa(t, n, d, r), h = t.memoizedState), (s = Ra || Ha(t, n, s, r, p, h, l) || !1) ? (c || "function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(r, h, l), "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, l)), "function" === typeof i.componentDidUpdate && (t.flags |= 4), "function" === typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof i.componentDidUpdate || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), i.props = r, i.state = h, i.context = l, r = s) : ("function" !== typeof i.componentDidUpdate || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
                }
                return ju(e, t, n, r, a, o)
            }

            function ju(e, t, n, r, o, a) {
                _u(e, t);
                var i = 0 !== (128 & t.flags);
                if (!r && !i) return o && Uo(t, n, !1), $u(e, t, a);
                r = t.stateNode, bu.current = t;
                var u = i && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                return t.flags |= 1, null !== e && i ? (t.child = Ga(t, e.child, null, a), t.child = Ga(t, null, u, a)) : ku(e, t, u, a), t.memoizedState = r.state, o && Uo(t, n, !0), t.child
            }

            function Tu(e) {
                var t = e.stateNode;
                t.pendingContext ? Ao(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ao(0, t.context, !1), oi(e, t.containerInfo)
            }

            function Ru(e, t, n, r, o) {
                return ha(), ya(o), t.flags |= 256, ku(e, t, n, r), t.child
            }

            var Lu, Du, Nu, Au, Mu = {dehydrated: null, treeContext: null, retryLane: 0};

            function Iu(e) {
                return {baseLanes: e, cachePool: null, transitions: null}
            }

            function Uu(e, t, n) {
                var r, o = t.pendingProps, i = li.current, u = !1, l = 0 !== (128 & t.flags);
                if ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)), r ? (u = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1), Co(li, 1 & i), null === e) return ca(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = o.children, e = o.fallback, u ? (o = t.mode, u = t.child, l = {
                    mode: "hidden",
                    children: l
                }, 0 === (1 & o) && null !== u ? (u.childLanes = 0, u.pendingProps = l) : u = Is(l, o, 0, null), e = Ms(e, o, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Iu(n), t.memoizedState = Mu, e) : zu(t, l));
                if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated)) return function (e, t, n, r, o, i, u) {
                    if (n) return 256 & t.flags ? (t.flags &= -257, Bu(e, t, u, r = fu(Error(a(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Is({
                        mode: "visible",
                        children: r.children
                    }, o, 0, null), (i = Ms(i, o, u, null)).flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, 0 !== (1 & t.mode) && Ga(t, e.child, null, u), t.child.memoizedState = Iu(u), t.memoizedState = Mu, i);
                    if (0 === (1 & t.mode)) return Bu(e, t, u, null);
                    if ("$!" === o.data) {
                        if (r = o.nextSibling && o.nextSibling.dataset) var l = r.dgst;
                        return r = l, Bu(e, t, u, r = fu(i = Error(a(419)), r, void 0))
                    }
                    if (l = 0 !== (u & e.childLanes), wu || l) {
                        if (null !== (r = Tl)) {
                            switch (u & -u) {
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
                            0 !== (o = 0 !== (o & (r.suspendedLanes | u)) ? 0 : o) && o !== i.retryLane && (i.retryLane = o, Ta(e, o), rs(r, e, o, -1))
                        }
                        return vs(), Bu(e, t, u, r = fu(Error(a(421))))
                    }
                    return "$?" === o.data ? (t.flags |= 128, t.child = e.child, t = xs.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, oa = so(o.nextSibling), ra = t, aa = !0, ia = null, null !== e && (Qo[Yo++] = Go, Qo[Yo++] = Jo, Qo[Yo++] = Xo, Go = e.id, Jo = e.overflow, Xo = t), t = zu(t, r.children), t.flags |= 4096, t)
                }(e, t, l, o, r, i, n);
                if (u) {
                    u = o.fallback, l = t.mode, r = (i = e.child).sibling;
                    var s = {mode: "hidden", children: o.children};
                    return 0 === (1 & l) && t.child !== i ? ((o = t.child).childLanes = 0, o.pendingProps = s, t.deletions = null) : (o = Ns(i, s)).subtreeFlags = 14680064 & i.subtreeFlags, null !== r ? u = Ns(r, u) : (u = Ms(u, l, n, null)).flags |= 2, u.return = t, o.return = t, o.sibling = u, t.child = o, o = u, u = t.child, l = null === (l = e.child.memoizedState) ? Iu(n) : {
                        baseLanes: l.baseLanes | n,
                        cachePool: null,
                        transitions: l.transitions
                    }, u.memoizedState = l, u.childLanes = e.childLanes & ~n, t.memoizedState = Mu, o
                }
                return e = (u = e.child).sibling, o = Ns(u, {
                    mode: "visible",
                    children: o.children
                }), 0 === (1 & t.mode) && (o.lanes = n), o.return = t, o.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = o, t.memoizedState = null, o
            }

            function zu(e, t) {
                return (t = Is({mode: "visible", children: t}, e.mode, 0, null)).return = e, e.child = t
            }

            function Bu(e, t, n, r) {
                return null !== r && ya(r), Ga(t, e.child, null, n), (e = zu(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
            }

            function Fu(e, t, n) {
                e.lanes |= t;
                var r = e.alternate;
                null !== r && (r.lanes |= t), Oa(e.return, t, n)
            }

            function Vu(e, t, n, r, o) {
                var a = e.memoizedState;
                null === a ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: o
                } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = o)
            }

            function Hu(e, t, n) {
                var r = t.pendingProps, o = r.revealOrder, a = r.tail;
                if (ku(e, t, r.children, n), 0 !== (2 & (r = li.current))) r = 1 & r | 2, t.flags |= 128; else {
                    if (null !== e && 0 !== (128 & e.flags)) e:for (e = t.child; null !== e;) {
                        if (13 === e.tag) null !== e.memoizedState && Fu(e, n, t); else if (19 === e.tag) Fu(e, n, t); else if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                        if (e === t) break e;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === t) break e;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    r &= 1
                }
                if (Co(li, r), 0 === (1 & t.mode)) t.memoizedState = null; else switch (o) {
                    case"forwards":
                        for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === si(e) && (o = n), n = n.sibling;
                        null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Vu(t, !1, o, n, a);
                        break;
                    case"backwards":
                        for (n = null, o = t.child, t.child = null; null !== o;) {
                            if (null !== (e = o.alternate) && null === si(e)) {
                                t.child = o;
                                break
                            }
                            e = o.sibling, o.sibling = n, n = o, o = e
                        }
                        Vu(t, !0, n, null, a);
                        break;
                    case"together":
                        Vu(t, !1, null, null, void 0);
                        break;
                    default:
                        t.memoizedState = null
                }
                return t.child
            }

            function Wu(e, t) {
                0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
            }

            function $u(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies), Il |= t.lanes, 0 === (n & t.childLanes)) return null;
                if (null !== e && t.child !== e.child) throw Error(a(153));
                if (null !== t.child) {
                    for (n = Ns(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Ns(e, e.pendingProps)).return = t;
                    n.sibling = null
                }
                return t.child
            }

            function qu(e, t) {
                if (!aa) switch (e.tailMode) {
                    case"hidden":
                        t = e.tail;
                        for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case"collapsed":
                        n = e.tail;
                        for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                }
            }

            function Ku(e) {
                var t = null !== e.alternate && e.alternate.child === e.child, n = 0, r = 0;
                if (t) for (var o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= 14680064 & o.subtreeFlags, r |= 14680064 & o.flags, o.return = e, o = o.sibling; else for (o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
                return e.subtreeFlags |= r, e.childLanes = n, t
            }

            function Qu(e, t, n) {
                var r = t.pendingProps;
                switch (na(t), t.tag) {
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
                        return Ku(t), null;
                    case 1:
                    case 17:
                        return Do(t.type) && No(), Ku(t), null;
                    case 3:
                        return r = t.stateNode, ai(), _o(To), _o(jo), fi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (pa(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== ia && (us(ia), ia = null))), Du(e, t), Ku(t), null;
                    case 5:
                        ui(t);
                        var o = ri(ni.current);
                        if (n = t.type, null !== e && null != t.stateNode) Nu(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
                            if (!r) {
                                if (null === t.stateNode) throw Error(a(166));
                                return Ku(t), null
                            }
                            if (e = ri(ei.current), pa(t)) {
                                r = t.stateNode, n = t.type;
                                var i = t.memoizedProps;
                                switch (r[po] = t, r[ho] = i, e = 0 !== (1 & t.mode), n) {
                                    case"dialog":
                                        zr("cancel", r), zr("close", r);
                                        break;
                                    case"iframe":
                                    case"object":
                                    case"embed":
                                        zr("load", r);
                                        break;
                                    case"video":
                                    case"audio":
                                        for (o = 0; o < Ar.length; o++) zr(Ar[o], r);
                                        break;
                                    case"source":
                                        zr("error", r);
                                        break;
                                    case"img":
                                    case"image":
                                    case"link":
                                        zr("error", r), zr("load", r);
                                        break;
                                    case"details":
                                        zr("toggle", r);
                                        break;
                                    case"input":
                                        X(r, i), zr("invalid", r);
                                        break;
                                    case"select":
                                        r._wrapperState = {wasMultiple: !!i.multiple}, zr("invalid", r);
                                        break;
                                    case"textarea":
                                        oe(r, i), zr("invalid", r)
                                }
                                for (var l in ge(n, i), o = null, i) if (i.hasOwnProperty(l)) {
                                    var s = i[l];
                                    "children" === l ? "string" === typeof s ? r.textContent !== s && (!0 !== i.suppressHydrationWarning && Jr(r.textContent, s, e), o = ["children", s]) : "number" === typeof s && r.textContent !== "" + s && (!0 !== i.suppressHydrationWarning && Jr(r.textContent, s, e), o = ["children", "" + s]) : u.hasOwnProperty(l) && null != s && "onScroll" === l && zr("scroll", r)
                                }
                                switch (n) {
                                    case"input":
                                        q(r), Z(r, i, !0);
                                        break;
                                    case"textarea":
                                        q(r), ie(r);
                                        break;
                                    case"select":
                                    case"option":
                                        break;
                                    default:
                                        "function" === typeof i.onClick && (r.onclick = Zr)
                                }
                                r = o, t.updateQueue = r, null !== r && (t.flags |= 4)
                            } else {
                                l = 9 === o.nodeType ? o : o.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = ue(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = l.createElement(n, {is: r.is}) : (e = l.createElement(n), "select" === n && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[po] = t, e[ho] = r, Lu(e, t, !1, !1), t.stateNode = e;
                                e:{
                                    switch (l = be(n, r), n) {
                                        case"dialog":
                                            zr("cancel", e), zr("close", e), o = r;
                                            break;
                                        case"iframe":
                                        case"object":
                                        case"embed":
                                            zr("load", e), o = r;
                                            break;
                                        case"video":
                                        case"audio":
                                            for (o = 0; o < Ar.length; o++) zr(Ar[o], e);
                                            o = r;
                                            break;
                                        case"source":
                                            zr("error", e), o = r;
                                            break;
                                        case"img":
                                        case"image":
                                        case"link":
                                            zr("error", e), zr("load", e), o = r;
                                            break;
                                        case"details":
                                            zr("toggle", e), o = r;
                                            break;
                                        case"input":
                                            X(e, r), o = Y(e, r), zr("invalid", e);
                                            break;
                                        case"option":
                                        default:
                                            o = r;
                                            break;
                                        case"select":
                                            e._wrapperState = {wasMultiple: !!r.multiple}, o = I({}, r, {value: void 0}), zr("invalid", e);
                                            break;
                                        case"textarea":
                                            oe(e, r), o = re(e, r), zr("invalid", e)
                                    }
                                    for (i in ge(n, o), s = o) if (s.hasOwnProperty(i)) {
                                        var c = s[i];
                                        "style" === i ? ve(e, c) : "dangerouslySetInnerHTML" === i ? null != (c = c ? c.__html : void 0) && fe(e, c) : "children" === i ? "string" === typeof c ? ("textarea" !== n || "" !== c) && pe(e, c) : "number" === typeof c && pe(e, "" + c) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (u.hasOwnProperty(i) ? null != c && "onScroll" === i && zr("scroll", e) : null != c && b(e, i, c, l))
                                    }
                                    switch (n) {
                                        case"input":
                                            q(e), Z(e, r, !1);
                                            break;
                                        case"textarea":
                                            q(e), ie(e);
                                            break;
                                        case"option":
                                            null != r.value && e.setAttribute("value", "" + W(r.value));
                                            break;
                                        case"select":
                                            e.multiple = !!r.multiple, null != (i = r.value) ? ne(e, !!r.multiple, i, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                            break;
                                        default:
                                            "function" === typeof o.onClick && (e.onclick = Zr)
                                    }
                                    switch (n) {
                                        case"button":
                                        case"input":
                                        case"select":
                                        case"textarea":
                                            r = !!r.autoFocus;
                                            break e;
                                        case"img":
                                            r = !0;
                                            break e;
                                        default:
                                            r = !1
                                    }
                                }
                                r && (t.flags |= 4)
                            }
                            null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                        }
                        return Ku(t), null;
                    case 6:
                        if (e && null != t.stateNode) Au(e, t, e.memoizedProps, r); else {
                            if ("string" !== typeof r && null === t.stateNode) throw Error(a(166));
                            if (n = ri(ni.current), ri(ei.current), pa(t)) {
                                if (r = t.stateNode, n = t.memoizedProps, r[po] = t, (i = r.nodeValue !== n) && null !== (e = ra)) switch (e.tag) {
                                    case 3:
                                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                                        break;
                                    case 5:
                                        !0 !== e.memoizedProps.suppressHydrationWarning && Jr(r.nodeValue, n, 0 !== (1 & e.mode))
                                }
                                i && (t.flags |= 4)
                            } else (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[po] = t, t.stateNode = r
                        }
                        return Ku(t), null;
                    case 13:
                        if (_o(li), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                            if (aa && null !== oa && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) da(), ha(), t.flags |= 98560, i = !1; else if (i = pa(t), null !== r && null !== r.dehydrated) {
                                if (null === e) {
                                    if (!i) throw Error(a(318));
                                    if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(a(317));
                                    i[po] = t
                                } else ha(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                Ku(t), i = !1
                            } else null !== ia && (us(ia), ia = null), i = !0;
                            if (!i) return 65536 & t.flags ? t : null
                        }
                        return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & li.current) ? 0 === Al && (Al = 3) : vs())), null !== t.updateQueue && (t.flags |= 4), Ku(t), null);
                    case 4:
                        return ai(), Du(e, t), null === e && Vr(t.stateNode.containerInfo), Ku(t), null;
                    case 10:
                        return Sa(t.type._context), Ku(t), null;
                    case 19:
                        if (_o(li), null === (i = t.memoizedState)) return Ku(t), null;
                        if (r = 0 !== (128 & t.flags), null === (l = i.rendering)) if (r) qu(i, !1); else {
                            if (0 !== Al || null !== e && 0 !== (128 & e.flags)) for (e = t.child; null !== e;) {
                                if (null !== (l = si(e))) {
                                    for (t.flags |= 128, qu(i, !1), null !== (r = l.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (i = n).flags &= 14680066, null === (l = i.alternate) ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = null === e ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }), n = n.sibling;
                                    return Co(li, 1 & li.current | 2), t.child
                                }
                                e = e.sibling
                            }
                            null !== i.tail && Ge() > Hl && (t.flags |= 128, r = !0, qu(i, !1), t.lanes = 4194304)
                        } else {
                            if (!r) if (null !== (e = si(l))) {
                                if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), qu(i, !0), null === i.tail && "hidden" === i.tailMode && !l.alternate && !aa) return Ku(t), null
                            } else 2 * Ge() - i.renderingStartTime > Hl && 1073741824 !== n && (t.flags |= 128, r = !0, qu(i, !1), t.lanes = 4194304);
                            i.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (n = i.last) ? n.sibling = l : t.child = l, i.last = l)
                        }
                        return null !== i.tail ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ge(), t.sibling = null, n = li.current, Co(li, r ? 1 & n | 2 : 1 & n), t) : (Ku(t), null);
                    case 22:
                    case 23:
                        return ps(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Dl) && (Ku(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Ku(t), null;
                    case 24:
                    case 25:
                        return null
                }
                throw Error(a(156, t.tag))
            }

            function Yu(e, t) {
                switch (na(t), t.tag) {
                    case 1:
                        return Do(t.type) && No(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 3:
                        return ai(), _o(To), _o(jo), fi(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                    case 5:
                        return ui(t), null;
                    case 13:
                        if (_o(li), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                            if (null === t.alternate) throw Error(a(340));
                            ha()
                        }
                        return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                    case 19:
                        return _o(li), null;
                    case 4:
                        return ai(), null;
                    case 10:
                        return Sa(t.type._context), null;
                    case 22:
                    case 23:
                        return ps(), null;
                    default:
                        return null
                }
            }

            Lu = function (e, t) {
                for (var n = t.child; null !== n;) {
                    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode); else if (4 !== n.tag && null !== n.child) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === t) break;
                    for (; null === n.sibling;) {
                        if (null === n.return || n.return === t) return;
                        n = n.return
                    }
                    n.sibling.return = n.return, n = n.sibling
                }
            }, Du = function () {
            }, Nu = function (e, t, n, r) {
                var o = e.memoizedProps;
                if (o !== r) {
                    e = t.stateNode, ri(ei.current);
                    var a, i = null;
                    switch (n) {
                        case"input":
                            o = Y(e, o), r = Y(e, r), i = [];
                            break;
                        case"select":
                            o = I({}, o, {value: void 0}), r = I({}, r, {value: void 0}), i = [];
                            break;
                        case"textarea":
                            o = re(e, o), r = re(e, r), i = [];
                            break;
                        default:
                            "function" !== typeof o.onClick && "function" === typeof r.onClick && (e.onclick = Zr)
                    }
                    for (c in ge(n, r), n = null, o) if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c]) if ("style" === c) {
                        var l = o[c];
                        for (a in l) l.hasOwnProperty(a) && (n || (n = {}), n[a] = "")
                    } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (u.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
                    for (c in r) {
                        var s = r[c];
                        if (l = null != o ? o[c] : void 0, r.hasOwnProperty(c) && s !== l && (null != s || null != l)) if ("style" === c) if (l) {
                            for (a in l) !l.hasOwnProperty(a) || s && s.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
                            for (a in s) s.hasOwnProperty(a) && l[a] !== s[a] && (n || (n = {}), n[a] = s[a])
                        } else n || (i || (i = []), i.push(c, n)), n = s; else "dangerouslySetInnerHTML" === c ? (s = s ? s.__html : void 0, l = l ? l.__html : void 0, null != s && l !== s && (i = i || []).push(c, s)) : "children" === c ? "string" !== typeof s && "number" !== typeof s || (i = i || []).push(c, "" + s) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (u.hasOwnProperty(c) ? (null != s && "onScroll" === c && zr("scroll", e), i || l === s || (i = [])) : (i = i || []).push(c, s))
                    }
                    n && (i = i || []).push("style", n);
                    var c = i;
                    (t.updateQueue = c) && (t.flags |= 4)
                }
            }, Au = function (e, t, n, r) {
                n !== r && (t.flags |= 4)
            };
            var Xu = !1, Gu = !1, Ju = "function" === typeof WeakSet ? WeakSet : Set, Zu = null;

            function el(e, t) {
                var n = e.ref;
                if (null !== n) if ("function" === typeof n) try {
                    n(null)
                } catch (r) {
                    Es(e, t, r)
                } else n.current = null
            }

            function tl(e, t, n) {
                try {
                    n()
                } catch (r) {
                    Es(e, t, r)
                }
            }

            var nl = !1;

            function rl(e, t, n) {
                var r = t.updateQueue;
                if (null !== (r = null !== r ? r.lastEffect : null)) {
                    var o = r = r.next;
                    do {
                        if ((o.tag & e) === e) {
                            var a = o.destroy;
                            o.destroy = void 0, void 0 !== a && tl(t, n, a)
                        }
                        o = o.next
                    } while (o !== r)
                }
            }

            function ol(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
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

            function al(e) {
                var t = e.ref;
                if (null !== t) {
                    var n = e.stateNode;
                    e.tag, e = n, "function" === typeof t ? t(e) : t.current = e
                }
            }

            function il(e) {
                var t = e.alternate;
                null !== t && (e.alternate = null, il(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[po], delete t[ho], delete t[vo], delete t[mo], delete t[go])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
            }

            function ul(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }

            function ll(e) {
                e:for (; ;) {
                    for (; null === e.sibling;) {
                        if (null === e.return || ul(e.return)) return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                        if (2 & e.flags) continue e;
                        if (null === e.child || 4 === e.tag) continue e;
                        e.child.return = e, e = e.child
                    }
                    if (!(2 & e.flags)) return e.stateNode
                }
            }

            function sl(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Zr)); else if (4 !== r && null !== (e = e.child)) for (sl(e, t, n), e = e.sibling; null !== e;) sl(e, t, n), e = e.sibling
            }

            function cl(e, t, n) {
                var r = e.tag;
                if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (4 !== r && null !== (e = e.child)) for (cl(e, t, n), e = e.sibling; null !== e;) cl(e, t, n), e = e.sibling
            }

            var fl = null, pl = !1;

            function dl(e, t, n) {
                for (n = n.child; null !== n;) hl(e, t, n), n = n.sibling
            }

            function hl(e, t, n) {
                if (at && "function" === typeof at.onCommitFiberUnmount) try {
                    at.onCommitFiberUnmount(ot, n)
                } catch (u) {
                }
                switch (n.tag) {
                    case 5:
                        Gu || el(n, t);
                    case 6:
                        var r = fl, o = pl;
                        fl = null, dl(e, t, n), pl = o, null !== (fl = r) && (pl ? (e = fl, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : fl.removeChild(n.stateNode));
                        break;
                    case 18:
                        null !== fl && (pl ? (e = fl, n = n.stateNode, 8 === e.nodeType ? lo(e.parentNode, n) : 1 === e.nodeType && lo(e, n), Vt(e)) : lo(fl, n.stateNode));
                        break;
                    case 4:
                        r = fl, o = pl, fl = n.stateNode.containerInfo, pl = !0, dl(e, t, n), fl = r, pl = o;
                        break;
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        if (!Gu && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                            o = r = r.next;
                            do {
                                var a = o, i = a.destroy;
                                a = a.tag, void 0 !== i && (0 !== (2 & a) || 0 !== (4 & a)) && tl(n, t, i), o = o.next
                            } while (o !== r)
                        }
                        dl(e, t, n);
                        break;
                    case 1:
                        if (!Gu && (el(n, t), "function" === typeof (r = n.stateNode).componentWillUnmount)) try {
                            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                        } catch (u) {
                            Es(n, t, u)
                        }
                        dl(e, t, n);
                        break;
                    case 21:
                        dl(e, t, n);
                        break;
                    case 22:
                        1 & n.mode ? (Gu = (r = Gu) || null !== n.memoizedState, dl(e, t, n), Gu = r) : dl(e, t, n);
                        break;
                    default:
                        dl(e, t, n)
                }
            }

            function yl(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new Ju), t.forEach((function (t) {
                        var r = js.bind(null, e, t);
                        n.has(t) || (n.add(t), t.then(r, r))
                    }))
                }
            }

            function vl(e, t) {
                var n = t.deletions;
                if (null !== n) for (var r = 0; r < n.length; r++) {
                    var o = n[r];
                    try {
                        var i = e, u = t, l = u;
                        e:for (; null !== l;) {
                            switch (l.tag) {
                                case 5:
                                    fl = l.stateNode, pl = !1;
                                    break e;
                                case 3:
                                case 4:
                                    fl = l.stateNode.containerInfo, pl = !0;
                                    break e
                            }
                            l = l.return
                        }
                        if (null === fl) throw Error(a(160));
                        hl(i, u, o), fl = null, pl = !1;
                        var s = o.alternate;
                        null !== s && (s.return = null), o.return = null
                    } catch (c) {
                        Es(o, t, c)
                    }
                }
                if (12854 & t.subtreeFlags) for (t = t.child; null !== t;) ml(t, e), t = t.sibling
            }

            function ml(e, t) {
                var n = e.alternate, r = e.flags;
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        if (vl(t, e), gl(e), 4 & r) {
                            try {
                                rl(3, e, e.return), ol(3, e)
                            } catch (v) {
                                Es(e, e.return, v)
                            }
                            try {
                                rl(5, e, e.return)
                            } catch (v) {
                                Es(e, e.return, v)
                            }
                        }
                        break;
                    case 1:
                        vl(t, e), gl(e), 512 & r && null !== n && el(n, n.return);
                        break;
                    case 5:
                        if (vl(t, e), gl(e), 512 & r && null !== n && el(n, n.return), 32 & e.flags) {
                            var o = e.stateNode;
                            try {
                                pe(o, "")
                            } catch (v) {
                                Es(e, e.return, v)
                            }
                        }
                        if (4 & r && null != (o = e.stateNode)) {
                            var i = e.memoizedProps, u = null !== n ? n.memoizedProps : i, l = e.type,
                                s = e.updateQueue;
                            if (e.updateQueue = null, null !== s) try {
                                "input" === l && "radio" === i.type && null != i.name && G(o, i), be(l, u);
                                var c = be(l, i);
                                for (u = 0; u < s.length; u += 2) {
                                    var f = s[u], p = s[u + 1];
                                    "style" === f ? ve(o, p) : "dangerouslySetInnerHTML" === f ? fe(o, p) : "children" === f ? pe(o, p) : b(o, f, p, c)
                                }
                                switch (l) {
                                    case"input":
                                        J(o, i);
                                        break;
                                    case"textarea":
                                        ae(o, i);
                                        break;
                                    case"select":
                                        var d = o._wrapperState.wasMultiple;
                                        o._wrapperState.wasMultiple = !!i.multiple;
                                        var h = i.value;
                                        null != h ? ne(o, !!i.multiple, h, !1) : d !== !!i.multiple && (null != i.defaultValue ? ne(o, !!i.multiple, i.defaultValue, !0) : ne(o, !!i.multiple, i.multiple ? [] : "", !1))
                                }
                                o[ho] = i
                            } catch (v) {
                                Es(e, e.return, v)
                            }
                        }
                        break;
                    case 6:
                        if (vl(t, e), gl(e), 4 & r) {
                            if (null === e.stateNode) throw Error(a(162));
                            o = e.stateNode, i = e.memoizedProps;
                            try {
                                o.nodeValue = i
                            } catch (v) {
                                Es(e, e.return, v)
                            }
                        }
                        break;
                    case 3:
                        if (vl(t, e), gl(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                            Vt(t.containerInfo)
                        } catch (v) {
                            Es(e, e.return, v)
                        }
                        break;
                    case 4:
                    default:
                        vl(t, e), gl(e);
                        break;
                    case 13:
                        vl(t, e), gl(e), 8192 & (o = e.child).flags && (i = null !== o.memoizedState, o.stateNode.isHidden = i, !i || null !== o.alternate && null !== o.alternate.memoizedState || (Vl = Ge())), 4 & r && yl(e);
                        break;
                    case 22:
                        if (f = null !== n && null !== n.memoizedState, 1 & e.mode ? (Gu = (c = Gu) || f, vl(t, e), Gu = c) : vl(t, e), gl(e), 8192 & r) {
                            if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode)) for (Zu = e, f = e.child; null !== f;) {
                                for (p = Zu = f; null !== Zu;) {
                                    switch (h = (d = Zu).child, d.tag) {
                                        case 0:
                                        case 11:
                                        case 14:
                                        case 15:
                                            rl(4, d, d.return);
                                            break;
                                        case 1:
                                            el(d, d.return);
                                            var y = d.stateNode;
                                            if ("function" === typeof y.componentWillUnmount) {
                                                r = d, n = d.return;
                                                try {
                                                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount()
                                                } catch (v) {
                                                    Es(r, n, v)
                                                }
                                            }
                                            break;
                                        case 5:
                                            el(d, d.return);
                                            break;
                                        case 22:
                                            if (null !== d.memoizedState) {
                                                Pl(p);
                                                continue
                                            }
                                    }
                                    null !== h ? (h.return = d, Zu = h) : Pl(p)
                                }
                                f = f.sibling
                            }
                            e:for (f = null, p = e; ;) {
                                if (5 === p.tag) {
                                    if (null === f) {
                                        f = p;
                                        try {
                                            o = p.stateNode, c ? "function" === typeof (i = o.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (l = p.stateNode, u = void 0 !== (s = p.memoizedProps.style) && null !== s && s.hasOwnProperty("display") ? s.display : null, l.style.display = ye("display", u))
                                        } catch (v) {
                                            Es(e, e.return, v)
                                        }
                                    }
                                } else if (6 === p.tag) {
                                    if (null === f) try {
                                        p.stateNode.nodeValue = c ? "" : p.memoizedProps
                                    } catch (v) {
                                        Es(e, e.return, v)
                                    }
                                } else if ((22 !== p.tag && 23 !== p.tag || null === p.memoizedState || p === e) && null !== p.child) {
                                    p.child.return = p, p = p.child;
                                    continue
                                }
                                if (p === e) break e;
                                for (; null === p.sibling;) {
                                    if (null === p.return || p.return === e) break e;
                                    f === p && (f = null), p = p.return
                                }
                                f === p && (f = null), p.sibling.return = p.return, p = p.sibling
                            }
                        }
                        break;
                    case 19:
                        vl(t, e), gl(e), 4 & r && yl(e);
                    case 21:
                }
            }

            function gl(e) {
                var t = e.flags;
                if (2 & t) {
                    try {
                        e:{
                            for (var n = e.return; null !== n;) {
                                if (ul(n)) {
                                    var r = n;
                                    break e
                                }
                                n = n.return
                            }
                            throw Error(a(160))
                        }
                        switch (r.tag) {
                            case 5:
                                var o = r.stateNode;
                                32 & r.flags && (pe(o, ""), r.flags &= -33), cl(e, ll(e), o);
                                break;
                            case 3:
                            case 4:
                                var i = r.stateNode.containerInfo;
                                sl(e, ll(e), i);
                                break;
                            default:
                                throw Error(a(161))
                        }
                    } catch (u) {
                        Es(e, e.return, u)
                    }
                    e.flags &= -3
                }
                4096 & t && (e.flags &= -4097)
            }

            function bl(e, t, n) {
                Zu = e, wl(e, t, n)
            }

            function wl(e, t, n) {
                for (var r = 0 !== (1 & e.mode); null !== Zu;) {
                    var o = Zu, a = o.child;
                    if (22 === o.tag && r) {
                        var i = null !== o.memoizedState || Xu;
                        if (!i) {
                            var u = o.alternate, l = null !== u && null !== u.memoizedState || Gu;
                            u = Xu;
                            var s = Gu;
                            if (Xu = i, (Gu = l) && !s) for (Zu = o; null !== Zu;) l = (i = Zu).child, 22 === i.tag && null !== i.memoizedState ? Sl(o) : null !== l ? (l.return = i, Zu = l) : Sl(o);
                            for (; null !== a;) Zu = a, wl(a, t, n), a = a.sibling;
                            Zu = o, Xu = u, Gu = s
                        }
                        kl(e)
                    } else 0 !== (8772 & o.subtreeFlags) && null !== a ? (a.return = o, Zu = a) : kl(e)
                }
            }

            function kl(e) {
                for (; null !== Zu;) {
                    var t = Zu;
                    if (0 !== (8772 & t.flags)) {
                        var n = t.alternate;
                        try {
                            if (0 !== (8772 & t.flags)) switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Gu || ol(5, t);
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if (4 & t.flags && !Gu) if (null === n) r.componentDidMount(); else {
                                        var o = t.elementType === t.type ? n.memoizedProps : ma(t.type, n.memoizedProps);
                                        r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                    }
                                    var i = t.updateQueue;
                                    null !== i && za(t, i, r);
                                    break;
                                case 3:
                                    var u = t.updateQueue;
                                    if (null !== u) {
                                        if (n = null, null !== t.child) switch (t.child.tag) {
                                            case 5:
                                            case 1:
                                                n = t.child.stateNode
                                        }
                                        za(t, u, n)
                                    }
                                    break;
                                case 5:
                                    var l = t.stateNode;
                                    if (null === n && 4 & t.flags) {
                                        n = l;
                                        var s = t.memoizedProps;
                                        switch (t.type) {
                                            case"button":
                                            case"input":
                                            case"select":
                                            case"textarea":
                                                s.autoFocus && n.focus();
                                                break;
                                            case"img":
                                                s.src && (n.src = s.src)
                                        }
                                    }
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                case 19:
                                case 17:
                                case 21:
                                case 22:
                                case 23:
                                case 25:
                                    break;
                                case 13:
                                    if (null === t.memoizedState) {
                                        var c = t.alternate;
                                        if (null !== c) {
                                            var f = c.memoizedState;
                                            if (null !== f) {
                                                var p = f.dehydrated;
                                                null !== p && Vt(p)
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw Error(a(163))
                            }
                            Gu || 512 & t.flags && al(t)
                        } catch (d) {
                            Es(t, t.return, d)
                        }
                    }
                    if (t === e) {
                        Zu = null;
                        break
                    }
                    if (null !== (n = t.sibling)) {
                        n.return = t.return, Zu = n;
                        break
                    }
                    Zu = t.return
                }
            }

            function Pl(e) {
                for (; null !== Zu;) {
                    var t = Zu;
                    if (t === e) {
                        Zu = null;
                        break
                    }
                    var n = t.sibling;
                    if (null !== n) {
                        n.return = t.return, Zu = n;
                        break
                    }
                    Zu = t.return
                }
            }

            function Sl(e) {
                for (; null !== Zu;) {
                    var t = Zu;
                    try {
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                var n = t.return;
                                try {
                                    ol(4, t)
                                } catch (l) {
                                    Es(t, n, l)
                                }
                                break;
                            case 1:
                                var r = t.stateNode;
                                if ("function" === typeof r.componentDidMount) {
                                    var o = t.return;
                                    try {
                                        r.componentDidMount()
                                    } catch (l) {
                                        Es(t, o, l)
                                    }
                                }
                                var a = t.return;
                                try {
                                    al(t)
                                } catch (l) {
                                    Es(t, a, l)
                                }
                                break;
                            case 5:
                                var i = t.return;
                                try {
                                    al(t)
                                } catch (l) {
                                    Es(t, i, l)
                                }
                        }
                    } catch (l) {
                        Es(t, t.return, l)
                    }
                    if (t === e) {
                        Zu = null;
                        break
                    }
                    var u = t.sibling;
                    if (null !== u) {
                        u.return = t.return, Zu = u;
                        break
                    }
                    Zu = t.return
                }
            }

            var Ol, El = Math.ceil, _l = w.ReactCurrentDispatcher, Cl = w.ReactCurrentOwner,
                xl = w.ReactCurrentBatchConfig, jl = 0, Tl = null, Rl = null, Ll = 0, Dl = 0, Nl = Eo(0), Al = 0,
                Ml = null, Il = 0, Ul = 0, zl = 0, Bl = null, Fl = null, Vl = 0, Hl = 1 / 0, Wl = null, $l = !1,
                ql = null, Kl = null, Ql = !1, Yl = null, Xl = 0, Gl = 0, Jl = null, Zl = -1, es = 0;

            function ts() {
                return 0 !== (6 & jl) ? Ge() : -1 !== Zl ? Zl : Zl = Ge()
            }

            function ns(e) {
                return 0 === (1 & e.mode) ? 1 : 0 !== (2 & jl) && 0 !== Ll ? Ll & -Ll : null !== va.transition ? (0 === es && (es = yt()), es) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Xt(e.type)
            }

            function rs(e, t, n, r) {
                if (50 < Gl) throw Gl = 0, Jl = null, Error(a(185));
                mt(e, n, r), 0 !== (2 & jl) && e === Tl || (e === Tl && (0 === (2 & jl) && (Ul |= n), 4 === Al && ls(e, Ll)), os(e, r), 1 === n && 0 === jl && 0 === (1 & t.mode) && (Hl = Ge() + 500, Bo && Ho()))
            }

            function os(e, t) {
                var n = e.callbackNode;
                !function (e, t) {
                    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
                        var i = 31 - it(a), u = 1 << i, l = o[i];
                        -1 === l ? 0 !== (u & n) && 0 === (u & r) || (o[i] = dt(u, t)) : l <= t && (e.expiredLanes |= u), a &= ~u
                    }
                }(e, t);
                var r = pt(e, e === Tl ? Ll : 0);
                if (0 === r) null !== n && Qe(n), e.callbackNode = null, e.callbackPriority = 0; else if (t = r & -r, e.callbackPriority !== t) {
                    if (null != n && Qe(n), 1 === t) 0 === e.tag ? function (e) {
                        Bo = !0, Vo(e)
                    }(ss.bind(null, e)) : Vo(ss.bind(null, e)), io((function () {
                        0 === (6 & jl) && Ho()
                    })), n = null; else {
                        switch (wt(r)) {
                            case 1:
                                n = Ze;
                                break;
                            case 4:
                                n = et;
                                break;
                            case 16:
                            default:
                                n = tt;
                                break;
                            case 536870912:
                                n = rt
                        }
                        n = Ts(n, as.bind(null, e))
                    }
                    e.callbackPriority = t, e.callbackNode = n
                }
            }

            function as(e, t) {
                if (Zl = -1, es = 0, 0 !== (6 & jl)) throw Error(a(327));
                var n = e.callbackNode;
                if (Ss() && e.callbackNode !== n) return null;
                var r = pt(e, e === Tl ? Ll : 0);
                if (0 === r) return null;
                if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ms(e, r); else {
                    t = r;
                    var o = jl;
                    jl |= 2;
                    var i = ys();
                    for (Tl === e && Ll === t || (Wl = null, Hl = Ge() + 500, ds(e, t)); ;) try {
                        bs();
                        break
                    } catch (l) {
                        hs(e, l)
                    }
                    Pa(), _l.current = i, jl = o, null !== Rl ? t = 0 : (Tl = null, Ll = 0, t = Al)
                }
                if (0 !== t) {
                    if (2 === t && (0 !== (o = ht(e)) && (r = o, t = is(e, o))), 1 === t) throw n = Ml, ds(e, 0), ls(e, r), os(e, Ge()), n;
                    if (6 === t) ls(e, r); else {
                        if (o = e.current.alternate, 0 === (30 & r) && !function (e) {
                            for (var t = e; ;) {
                                if (16384 & t.flags) {
                                    var n = t.updateQueue;
                                    if (null !== n && null !== (n = n.stores)) for (var r = 0; r < n.length; r++) {
                                        var o = n[r], a = o.getSnapshot;
                                        o = o.value;
                                        try {
                                            if (!ur(a(), o)) return !1
                                        } catch (u) {
                                            return !1
                                        }
                                    }
                                }
                                if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n; else {
                                    if (t === e) break;
                                    for (; null === t.sibling;) {
                                        if (null === t.return || t.return === e) return !0;
                                        t = t.return
                                    }
                                    t.sibling.return = t.return, t = t.sibling
                                }
                            }
                            return !0
                        }(o) && (2 === (t = ms(e, r)) && (0 !== (i = ht(e)) && (r = i, t = is(e, i))), 1 === t)) throw n = Ml, ds(e, 0), ls(e, r), os(e, Ge()), n;
                        switch (e.finishedWork = o, e.finishedLanes = r, t) {
                            case 0:
                            case 1:
                                throw Error(a(345));
                            case 2:
                            case 5:
                                Ps(e, Fl, Wl);
                                break;
                            case 3:
                                if (ls(e, r), (130023424 & r) === r && 10 < (t = Vl + 500 - Ge())) {
                                    if (0 !== pt(e, 0)) break;
                                    if (((o = e.suspendedLanes) & r) !== r) {
                                        ts(), e.pingedLanes |= e.suspendedLanes & o;
                                        break
                                    }
                                    e.timeoutHandle = ro(Ps.bind(null, e, Fl, Wl), t);
                                    break
                                }
                                Ps(e, Fl, Wl);
                                break;
                            case 4:
                                if (ls(e, r), (4194240 & r) === r) break;
                                for (t = e.eventTimes, o = -1; 0 < r;) {
                                    var u = 31 - it(r);
                                    i = 1 << u, (u = t[u]) > o && (o = u), r &= ~i
                                }
                                if (r = o, 10 < (r = (120 > (r = Ge() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * El(r / 1960)) - r)) {
                                    e.timeoutHandle = ro(Ps.bind(null, e, Fl, Wl), r);
                                    break
                                }
                                Ps(e, Fl, Wl);
                                break;
                            default:
                                throw Error(a(329))
                        }
                    }
                }
                return os(e, Ge()), e.callbackNode === n ? as.bind(null, e) : null
            }

            function is(e, t) {
                var n = Bl;
                return e.current.memoizedState.isDehydrated && (ds(e, t).flags |= 256), 2 !== (e = ms(e, t)) && (t = Fl, Fl = n, null !== t && us(t)), e
            }

            function us(e) {
                null === Fl ? Fl = e : Fl.push.apply(Fl, e)
            }

            function ls(e, t) {
                for (t &= ~zl, t &= ~Ul, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                    var n = 31 - it(t), r = 1 << n;
                    e[n] = -1, t &= ~r
                }
            }

            function ss(e) {
                if (0 !== (6 & jl)) throw Error(a(327));
                Ss();
                var t = pt(e, 0);
                if (0 === (1 & t)) return os(e, Ge()), null;
                var n = ms(e, t);
                if (0 !== e.tag && 2 === n) {
                    var r = ht(e);
                    0 !== r && (t = r, n = is(e, r))
                }
                if (1 === n) throw n = Ml, ds(e, 0), ls(e, t), os(e, Ge()), n;
                if (6 === n) throw Error(a(345));
                return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ps(e, Fl, Wl), os(e, Ge()), null
            }

            function cs(e, t) {
                var n = jl;
                jl |= 1;
                try {
                    return e(t)
                } finally {
                    0 === (jl = n) && (Hl = Ge() + 500, Bo && Ho())
                }
            }

            function fs(e) {
                null !== Yl && 0 === Yl.tag && 0 === (6 & jl) && Ss();
                var t = jl;
                jl |= 1;
                var n = xl.transition, r = bt;
                try {
                    if (xl.transition = null, bt = 1, e) return e()
                } finally {
                    bt = r, xl.transition = n, 0 === (6 & (jl = t)) && Ho()
                }
            }

            function ps() {
                Dl = Nl.current, _o(Nl)
            }

            function ds(e, t) {
                e.finishedWork = null, e.finishedLanes = 0;
                var n = e.timeoutHandle;
                if (-1 !== n && (e.timeoutHandle = -1, oo(n)), null !== Rl) for (n = Rl.return; null !== n;) {
                    var r = n;
                    switch (na(r), r.tag) {
                        case 1:
                            null !== (r = r.type.childContextTypes) && void 0 !== r && No();
                            break;
                        case 3:
                            ai(), _o(To), _o(jo), fi();
                            break;
                        case 5:
                            ui(r);
                            break;
                        case 4:
                            ai();
                            break;
                        case 13:
                        case 19:
                            _o(li);
                            break;
                        case 10:
                            Sa(r.type._context);
                            break;
                        case 22:
                        case 23:
                            ps()
                    }
                    n = n.return
                }
                if (Tl = e, Rl = e = Ns(e.current, null), Ll = Dl = t, Al = 0, Ml = null, zl = Ul = Il = 0, Fl = Bl = null, null !== Ca) {
                    for (t = 0; t < Ca.length; t++) if (null !== (r = (n = Ca[t]).interleaved)) {
                        n.interleaved = null;
                        var o = r.next, a = n.pending;
                        if (null !== a) {
                            var i = a.next;
                            a.next = o, r.next = i
                        }
                        n.pending = r
                    }
                    Ca = null
                }
                return e
            }

            function hs(e, t) {
                for (; ;) {
                    var n = Rl;
                    try {
                        if (Pa(), pi.current = iu, gi) {
                            for (var r = yi.memoizedState; null !== r;) {
                                var o = r.queue;
                                null !== o && (o.pending = null), r = r.next
                            }
                            gi = !1
                        }
                        if (hi = 0, mi = vi = yi = null, bi = !1, wi = 0, Cl.current = null, null === n || null === n.return) {
                            Al = 1, Ml = t, Rl = null;
                            break
                        }
                        e:{
                            var i = e, u = n.return, l = n, s = t;
                            if (t = Ll, l.flags |= 32768, null !== s && "object" === typeof s && "function" === typeof s.then) {
                                var c = s, f = l, p = f.tag;
                                if (0 === (1 & f.mode) && (0 === p || 11 === p || 15 === p)) {
                                    var d = f.alternate;
                                    d ? (f.updateQueue = d.updateQueue, f.memoizedState = d.memoizedState, f.lanes = d.lanes) : (f.updateQueue = null, f.memoizedState = null)
                                }
                                var h = mu(u);
                                if (null !== h) {
                                    h.flags &= -257, gu(h, u, l, 0, t), 1 & h.mode && vu(i, c, t), s = c;
                                    var y = (t = h).updateQueue;
                                    if (null === y) {
                                        var v = new Set;
                                        v.add(s), t.updateQueue = v
                                    } else y.add(s);
                                    break e
                                }
                                if (0 === (1 & t)) {
                                    vu(i, c, t), vs();
                                    break e
                                }
                                s = Error(a(426))
                            } else if (aa && 1 & l.mode) {
                                var m = mu(u);
                                if (null !== m) {
                                    0 === (65536 & m.flags) && (m.flags |= 256), gu(m, u, l, 0, t), ya(cu(s, l));
                                    break e
                                }
                            }
                            i = s = cu(s, l), 4 !== Al && (Al = 2), null === Bl ? Bl = [i] : Bl.push(i), i = u;
                            do {
                                switch (i.tag) {
                                    case 3:
                                        i.flags |= 65536, t &= -t, i.lanes |= t, Ia(i, hu(0, s, t));
                                        break e;
                                    case 1:
                                        l = s;
                                        var g = i.type, b = i.stateNode;
                                        if (0 === (128 & i.flags) && ("function" === typeof g.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === Kl || !Kl.has(b)))) {
                                            i.flags |= 65536, t &= -t, i.lanes |= t, Ia(i, yu(i, l, t));
                                            break e
                                        }
                                }
                                i = i.return
                            } while (null !== i)
                        }
                        ks(n)
                    } catch (w) {
                        t = w, Rl === n && null !== n && (Rl = n = n.return);
                        continue
                    }
                    break
                }
            }

            function ys() {
                var e = _l.current;
                return _l.current = iu, null === e ? iu : e
            }

            function vs() {
                0 !== Al && 3 !== Al && 2 !== Al || (Al = 4), null === Tl || 0 === (268435455 & Il) && 0 === (268435455 & Ul) || ls(Tl, Ll)
            }

            function ms(e, t) {
                var n = jl;
                jl |= 2;
                var r = ys();
                for (Tl === e && Ll === t || (Wl = null, ds(e, t)); ;) try {
                    gs();
                    break
                } catch (o) {
                    hs(e, o)
                }
                if (Pa(), jl = n, _l.current = r, null !== Rl) throw Error(a(261));
                return Tl = null, Ll = 0, Al
            }

            function gs() {
                for (; null !== Rl;) ws(Rl)
            }

            function bs() {
                for (; null !== Rl && !Ye();) ws(Rl)
            }

            function ws(e) {
                var t = Ol(e.alternate, e, Dl);
                e.memoizedProps = e.pendingProps, null === t ? ks(e) : Rl = t, Cl.current = null
            }

            function ks(e) {
                var t = e;
                do {
                    var n = t.alternate;
                    if (e = t.return, 0 === (32768 & t.flags)) {
                        if (null !== (n = Qu(n, t, Dl))) return void (Rl = n)
                    } else {
                        if (null !== (n = Yu(n, t))) return n.flags &= 32767, void (Rl = n);
                        if (null === e) return Al = 6, void (Rl = null);
                        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                    }
                    if (null !== (t = t.sibling)) return void (Rl = t);
                    Rl = t = e
                } while (null !== t);
                0 === Al && (Al = 5)
            }

            function Ps(e, t, n) {
                var r = bt, o = xl.transition;
                try {
                    xl.transition = null, bt = 1, function (e, t, n, r) {
                        do {
                            Ss()
                        } while (null !== Yl);
                        if (0 !== (6 & jl)) throw Error(a(327));
                        n = e.finishedWork;
                        var o = e.finishedLanes;
                        if (null === n) return null;
                        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
                        e.callbackNode = null, e.callbackPriority = 0;
                        var i = n.lanes | n.childLanes;
                        if (function (e, t) {
                            var n = e.pendingLanes & ~t;
                            e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                            var r = e.eventTimes;
                            for (e = e.expirationTimes; 0 < n;) {
                                var o = 31 - it(n), a = 1 << o;
                                t[o] = 0, r[o] = -1, e[o] = -1, n &= ~a
                            }
                        }(e, i), e === Tl && (Rl = Tl = null, Ll = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Ql || (Ql = !0, Ts(tt, (function () {
                            return Ss(), null
                        }))), i = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || i) {
                            i = xl.transition, xl.transition = null;
                            var u = bt;
                            bt = 1;
                            var l = jl;
                            jl |= 4, Cl.current = null, function (e, t) {
                                if (eo = Wt, dr(e = pr())) {
                                    if ("selectionStart" in e) var n = {
                                        start: e.selectionStart,
                                        end: e.selectionEnd
                                    }; else e:{
                                        var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                        if (r && 0 !== r.rangeCount) {
                                            n = r.anchorNode;
                                            var o = r.anchorOffset, i = r.focusNode;
                                            r = r.focusOffset;
                                            try {
                                                n.nodeType, i.nodeType
                                            } catch (k) {
                                                n = null;
                                                break e
                                            }
                                            var u = 0, l = -1, s = -1, c = 0, f = 0, p = e, d = null;
                                            t:for (; ;) {
                                                for (var h; p !== n || 0 !== o && 3 !== p.nodeType || (l = u + o), p !== i || 0 !== r && 3 !== p.nodeType || (s = u + r), 3 === p.nodeType && (u += p.nodeValue.length), null !== (h = p.firstChild);) d = p, p = h;
                                                for (; ;) {
                                                    if (p === e) break t;
                                                    if (d === n && ++c === o && (l = u), d === i && ++f === r && (s = u), null !== (h = p.nextSibling)) break;
                                                    d = (p = d).parentNode
                                                }
                                                p = h
                                            }
                                            n = -1 === l || -1 === s ? null : {start: l, end: s}
                                        } else n = null
                                    }
                                    n = n || {start: 0, end: 0}
                                } else n = null;
                                for (to = {
                                    focusedElem: e,
                                    selectionRange: n
                                }, Wt = !1, Zu = t; null !== Zu;) if (e = (t = Zu).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, Zu = e; else for (; null !== Zu;) {
                                    t = Zu;
                                    try {
                                        var y = t.alternate;
                                        if (0 !== (1024 & t.flags)) switch (t.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                            case 5:
                                            case 6:
                                            case 4:
                                            case 17:
                                                break;
                                            case 1:
                                                if (null !== y) {
                                                    var v = y.memoizedProps, m = y.memoizedState, g = t.stateNode,
                                                        b = g.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ma(t.type, v), m);
                                                    g.__reactInternalSnapshotBeforeUpdate = b
                                                }
                                                break;
                                            case 3:
                                                var w = t.stateNode.containerInfo;
                                                1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                                break;
                                            default:
                                                throw Error(a(163))
                                        }
                                    } catch (k) {
                                        Es(t, t.return, k)
                                    }
                                    if (null !== (e = t.sibling)) {
                                        e.return = t.return, Zu = e;
                                        break
                                    }
                                    Zu = t.return
                                }
                                y = nl, nl = !1
                            }(e, n), ml(n, e), hr(to), Wt = !!eo, to = eo = null, e.current = n, bl(n, e, o), Xe(), jl = l, bt = u, xl.transition = i
                        } else e.current = n;
                        if (Ql && (Ql = !1, Yl = e, Xl = o), i = e.pendingLanes, 0 === i && (Kl = null), function (e) {
                            if (at && "function" === typeof at.onCommitFiberRoot) try {
                                at.onCommitFiberRoot(ot, e, void 0, 128 === (128 & e.current.flags))
                            } catch (t) {
                            }
                        }(n.stateNode), os(e, Ge()), null !== t) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
                            componentStack: o.stack,
                            digest: o.digest
                        });
                        if ($l) throw $l = !1, e = ql, ql = null, e;
                        0 !== (1 & Xl) && 0 !== e.tag && Ss(), i = e.pendingLanes, 0 !== (1 & i) ? e === Jl ? Gl++ : (Gl = 0, Jl = e) : Gl = 0, Ho()
                    }(e, t, n, r)
                } finally {
                    xl.transition = o, bt = r
                }
                return null
            }

            function Ss() {
                if (null !== Yl) {
                    var e = wt(Xl), t = xl.transition, n = bt;
                    try {
                        if (xl.transition = null, bt = 16 > e ? 16 : e, null === Yl) var r = !1; else {
                            if (e = Yl, Yl = null, Xl = 0, 0 !== (6 & jl)) throw Error(a(331));
                            var o = jl;
                            for (jl |= 4, Zu = e.current; null !== Zu;) {
                                var i = Zu, u = i.child;
                                if (0 !== (16 & Zu.flags)) {
                                    var l = i.deletions;
                                    if (null !== l) {
                                        for (var s = 0; s < l.length; s++) {
                                            var c = l[s];
                                            for (Zu = c; null !== Zu;) {
                                                var f = Zu;
                                                switch (f.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                        rl(8, f, i)
                                                }
                                                var p = f.child;
                                                if (null !== p) p.return = f, Zu = p; else for (; null !== Zu;) {
                                                    var d = (f = Zu).sibling, h = f.return;
                                                    if (il(f), f === c) {
                                                        Zu = null;
                                                        break
                                                    }
                                                    if (null !== d) {
                                                        d.return = h, Zu = d;
                                                        break
                                                    }
                                                    Zu = h
                                                }
                                            }
                                        }
                                        var y = i.alternate;
                                        if (null !== y) {
                                            var v = y.child;
                                            if (null !== v) {
                                                y.child = null;
                                                do {
                                                    var m = v.sibling;
                                                    v.sibling = null, v = m
                                                } while (null !== v)
                                            }
                                        }
                                        Zu = i
                                    }
                                }
                                if (0 !== (2064 & i.subtreeFlags) && null !== u) u.return = i, Zu = u; else e:for (; null !== Zu;) {
                                    if (0 !== (2048 & (i = Zu).flags)) switch (i.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            rl(9, i, i.return)
                                    }
                                    var g = i.sibling;
                                    if (null !== g) {
                                        g.return = i.return, Zu = g;
                                        break e
                                    }
                                    Zu = i.return
                                }
                            }
                            var b = e.current;
                            for (Zu = b; null !== Zu;) {
                                var w = (u = Zu).child;
                                if (0 !== (2064 & u.subtreeFlags) && null !== w) w.return = u, Zu = w; else e:for (u = b; null !== Zu;) {
                                    if (0 !== (2048 & (l = Zu).flags)) try {
                                        switch (l.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                ol(9, l)
                                        }
                                    } catch (P) {
                                        Es(l, l.return, P)
                                    }
                                    if (l === u) {
                                        Zu = null;
                                        break e
                                    }
                                    var k = l.sibling;
                                    if (null !== k) {
                                        k.return = l.return, Zu = k;
                                        break e
                                    }
                                    Zu = l.return
                                }
                            }
                            if (jl = o, Ho(), at && "function" === typeof at.onPostCommitFiberRoot) try {
                                at.onPostCommitFiberRoot(ot, e)
                            } catch (P) {
                            }
                            r = !0
                        }
                        return r
                    } finally {
                        bt = n, xl.transition = t
                    }
                }
                return !1
            }

            function Os(e, t, n) {
                e = Aa(e, t = hu(0, t = cu(n, t), 1), 1), t = ts(), null !== e && (mt(e, 1, t), os(e, t))
            }

            function Es(e, t, n) {
                if (3 === e.tag) Os(e, e, n); else for (; null !== t;) {
                    if (3 === t.tag) {
                        Os(t, e, n);
                        break
                    }
                    if (1 === t.tag) {
                        var r = t.stateNode;
                        if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Kl || !Kl.has(r))) {
                            t = Aa(t, e = yu(t, e = cu(n, e), 1), 1), e = ts(), null !== t && (mt(t, 1, e), os(t, e));
                            break
                        }
                    }
                    t = t.return
                }
            }

            function _s(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t), t = ts(), e.pingedLanes |= e.suspendedLanes & n, Tl === e && (Ll & n) === n && (4 === Al || 3 === Al && (130023424 & Ll) === Ll && 500 > Ge() - Vl ? ds(e, 0) : zl |= n), os(e, t)
            }

            function Cs(e, t) {
                0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ct, 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
                var n = ts();
                null !== (e = Ta(e, t)) && (mt(e, t, n), os(e, n))
            }

            function xs(e) {
                var t = e.memoizedState, n = 0;
                null !== t && (n = t.retryLane), Cs(e, n)
            }

            function js(e, t) {
                var n = 0;
                switch (e.tag) {
                    case 13:
                        var r = e.stateNode, o = e.memoizedState;
                        null !== o && (n = o.retryLane);
                        break;
                    case 19:
                        r = e.stateNode;
                        break;
                    default:
                        throw Error(a(314))
                }
                null !== r && r.delete(t), Cs(e, n)
            }

            function Ts(e, t) {
                return Ke(e, t)
            }

            function Rs(e, t, n, r) {
                this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
            }

            function Ls(e, t, n, r) {
                return new Rs(e, t, n, r)
            }

            function Ds(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }

            function Ns(e, t) {
                var n = e.alternate;
                return null === n ? ((n = Ls(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
            }

            function As(e, t, n, r, o, i) {
                var u = 2;
                if (r = e, "function" === typeof e) Ds(e) && (u = 1); else if ("string" === typeof e) u = 5; else e:switch (e) {
                    case S:
                        return Ms(n.children, o, i, t);
                    case O:
                        u = 8, o |= 8;
                        break;
                    case E:
                        return (e = Ls(12, n, t, 2 | o)).elementType = E, e.lanes = i, e;
                    case j:
                        return (e = Ls(13, n, t, o)).elementType = j, e.lanes = i, e;
                    case T:
                        return (e = Ls(19, n, t, o)).elementType = T, e.lanes = i, e;
                    case D:
                        return Is(n, o, i, t);
                    default:
                        if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                            case _:
                                u = 10;
                                break e;
                            case C:
                                u = 9;
                                break e;
                            case x:
                                u = 11;
                                break e;
                            case R:
                                u = 14;
                                break e;
                            case L:
                                u = 16, r = null;
                                break e
                        }
                        throw Error(a(130, null == e ? e : typeof e, ""))
                }
                return (t = Ls(u, n, t, o)).elementType = e, t.type = r, t.lanes = i, t
            }

            function Ms(e, t, n, r) {
                return (e = Ls(7, e, r, t)).lanes = n, e
            }

            function Is(e, t, n, r) {
                return (e = Ls(22, e, r, t)).elementType = D, e.lanes = n, e.stateNode = {isHidden: !1}, e
            }

            function Us(e, t, n) {
                return (e = Ls(6, e, null, t)).lanes = n, e
            }

            function zs(e, t, n) {
                return (t = Ls(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                }, t
            }

            function Bs(e, t, n, r, o) {
                this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vt(0), this.expirationTimes = vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vt(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
            }

            function Fs(e, t, n, r, o, a, i, u, l) {
                return e = new Bs(e, t, n, u, l), 1 === t ? (t = 1, !0 === a && (t |= 8)) : t = 0, a = Ls(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
                    element: r,
                    isDehydrated: n,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                }, La(a), e
            }

            function Vs(e) {
                if (!e) return xo;
                e:{
                    if (Ve(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(a(170));
                    var t = e;
                    do {
                        switch (t.tag) {
                            case 3:
                                t = t.stateNode.context;
                                break e;
                            case 1:
                                if (Do(t.type)) {
                                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                    break e
                                }
                        }
                        t = t.return
                    } while (null !== t);
                    throw Error(a(171))
                }
                if (1 === e.tag) {
                    var n = e.type;
                    if (Do(n)) return Mo(e, n, t)
                }
                return t
            }

            function Hs(e, t, n, r, o, a, i, u, l) {
                return (e = Fs(n, r, !0, e, 0, a, 0, u, l)).context = Vs(null), n = e.current, (a = Na(r = ts(), o = ns(n))).callback = void 0 !== t && null !== t ? t : null, Aa(n, a, o), e.current.lanes = o, mt(e, o, r), os(e, r), e
            }

            function Ws(e, t, n, r) {
                var o = t.current, a = ts(), i = ns(o);
                return n = Vs(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Na(a, i)).payload = {element: e}, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Aa(o, t, i)) && (rs(e, o, i, a), Ma(e, o, i)), i
            }

            function $s(e) {
                return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
            }

            function qs(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }

            function Ks(e, t) {
                qs(e, t), (e = e.alternate) && qs(e, t)
            }

            Ol = function (e, t, n) {
                if (null !== e) if (e.memoizedProps !== t.pendingProps || To.current) wu = !0; else {
                    if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return wu = !1, function (e, t, n) {
                        switch (t.tag) {
                            case 3:
                                Tu(t), ha();
                                break;
                            case 5:
                                ii(t);
                                break;
                            case 1:
                                Do(t.type) && Io(t);
                                break;
                            case 4:
                                oi(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                var r = t.type._context, o = t.memoizedProps.value;
                                Co(ga, r._currentValue), r._currentValue = o;
                                break;
                            case 13:
                                if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Co(li, 1 & li.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Uu(e, t, n) : (Co(li, 1 & li.current), null !== (e = $u(e, t, n)) ? e.sibling : null);
                                Co(li, 1 & li.current);
                                break;
                            case 19:
                                if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
                                    if (r) return Hu(e, t, n);
                                    t.flags |= 128
                                }
                                if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), Co(li, li.current), r) break;
                                return null;
                            case 22:
                            case 23:
                                return t.lanes = 0, Eu(e, t, n)
                        }
                        return $u(e, t, n)
                    }(e, t, n);
                    wu = 0 !== (131072 & e.flags)
                } else wu = !1, aa && 0 !== (1048576 & t.flags) && ea(t, Ko, t.index);
                switch (t.lanes = 0, t.tag) {
                    case 2:
                        var r = t.type;
                        Wu(e, t), e = t.pendingProps;
                        var o = Lo(t, jo.current);
                        Ea(t, n), o = Oi(null, t, r, e, o, n);
                        var i = Ei();
                        return t.flags |= 1, "object" === typeof o && null !== o && "function" === typeof o.render && void 0 === o.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Do(r) ? (i = !0, Io(t)) : i = !1, t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, La(t), o.updater = Va, t.stateNode = o, o._reactInternals = t, qa(t, r, e, n), t = ju(null, t, r, !0, i, n)) : (t.tag = 0, aa && i && ta(t), ku(null, t, o, n), t = t.child), t;
                    case 16:
                        r = t.elementType;
                        e:{
                            switch (Wu(e, t), e = t.pendingProps, r = (o = r._init)(r._payload), t.type = r, o = t.tag = function (e) {
                                if ("function" === typeof e) return Ds(e) ? 1 : 0;
                                if (void 0 !== e && null !== e) {
                                    if ((e = e.$$typeof) === x) return 11;
                                    if (e === R) return 14
                                }
                                return 2
                            }(r), e = ma(r, e), o) {
                                case 0:
                                    t = Cu(null, t, r, e, n);
                                    break e;
                                case 1:
                                    t = xu(null, t, r, e, n);
                                    break e;
                                case 11:
                                    t = Pu(null, t, r, e, n);
                                    break e;
                                case 14:
                                    t = Su(null, t, r, ma(r.type, e), n);
                                    break e
                            }
                            throw Error(a(306, r, ""))
                        }
                        return t;
                    case 0:
                        return r = t.type, o = t.pendingProps, Cu(e, t, r, o = t.elementType === r ? o : ma(r, o), n);
                    case 1:
                        return r = t.type, o = t.pendingProps, xu(e, t, r, o = t.elementType === r ? o : ma(r, o), n);
                    case 3:
                        e:{
                            if (Tu(t), null === e) throw Error(a(387));
                            r = t.pendingProps, o = (i = t.memoizedState).element, Da(e, t), Ua(t, r, null, n);
                            var u = t.memoizedState;
                            if (r = u.element, i.isDehydrated) {
                                if (i = {
                                    element: r,
                                    isDehydrated: !1,
                                    cache: u.cache,
                                    pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                                    transitions: u.transitions
                                }, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
                                    t = Ru(e, t, r, n, o = cu(Error(a(423)), t));
                                    break e
                                }
                                if (r !== o) {
                                    t = Ru(e, t, r, n, o = cu(Error(a(424)), t));
                                    break e
                                }
                                for (oa = so(t.stateNode.containerInfo.firstChild), ra = t, aa = !0, ia = null, n = Ja(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                            } else {
                                if (ha(), r === o) {
                                    t = $u(e, t, n);
                                    break e
                                }
                                ku(e, t, r, n)
                            }
                            t = t.child
                        }
                        return t;
                    case 5:
                        return ii(t), null === e && ca(t), r = t.type, o = t.pendingProps, i = null !== e ? e.memoizedProps : null, u = o.children, no(r, o) ? u = null : null !== i && no(r, i) && (t.flags |= 32), _u(e, t), ku(e, t, u, n), t.child;
                    case 6:
                        return null === e && ca(t), null;
                    case 13:
                        return Uu(e, t, n);
                    case 4:
                        return oi(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Ga(t, null, r, n) : ku(e, t, r, n), t.child;
                    case 11:
                        return r = t.type, o = t.pendingProps, Pu(e, t, r, o = t.elementType === r ? o : ma(r, o), n);
                    case 7:
                        return ku(e, t, t.pendingProps, n), t.child;
                    case 8:
                    case 12:
                        return ku(e, t, t.pendingProps.children, n), t.child;
                    case 10:
                        e:{
                            if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, u = o.value, Co(ga, r._currentValue), r._currentValue = u, null !== i) if (ur(i.value, u)) {
                                if (i.children === o.children && !To.current) {
                                    t = $u(e, t, n);
                                    break e
                                }
                            } else for (null !== (i = t.child) && (i.return = t); null !== i;) {
                                var l = i.dependencies;
                                if (null !== l) {
                                    u = i.child;
                                    for (var s = l.firstContext; null !== s;) {
                                        if (s.context === r) {
                                            if (1 === i.tag) {
                                                (s = Na(-1, n & -n)).tag = 2;
                                                var c = i.updateQueue;
                                                if (null !== c) {
                                                    var f = (c = c.shared).pending;
                                                    null === f ? s.next = s : (s.next = f.next, f.next = s), c.pending = s
                                                }
                                            }
                                            i.lanes |= n, null !== (s = i.alternate) && (s.lanes |= n), Oa(i.return, n, t), l.lanes |= n;
                                            break
                                        }
                                        s = s.next
                                    }
                                } else if (10 === i.tag) u = i.type === t.type ? null : i.child; else if (18 === i.tag) {
                                    if (null === (u = i.return)) throw Error(a(341));
                                    u.lanes |= n, null !== (l = u.alternate) && (l.lanes |= n), Oa(u, n, t), u = i.sibling
                                } else u = i.child;
                                if (null !== u) u.return = i; else for (u = i; null !== u;) {
                                    if (u === t) {
                                        u = null;
                                        break
                                    }
                                    if (null !== (i = u.sibling)) {
                                        i.return = u.return, u = i;
                                        break
                                    }
                                    u = u.return
                                }
                                i = u
                            }
                            ku(e, t, o.children, n), t = t.child
                        }
                        return t;
                    case 9:
                        return o = t.type, r = t.pendingProps.children, Ea(t, n), r = r(o = _a(o)), t.flags |= 1, ku(e, t, r, n), t.child;
                    case 14:
                        return o = ma(r = t.type, t.pendingProps), Su(e, t, r, o = ma(r.type, o), n);
                    case 15:
                        return Ou(e, t, t.type, t.pendingProps, n);
                    case 17:
                        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ma(r, o), Wu(e, t), t.tag = 1, Do(r) ? (e = !0, Io(t)) : e = !1, Ea(t, n), Wa(t, r, o), qa(t, r, o, n), ju(null, t, r, !0, e, n);
                    case 19:
                        return Hu(e, t, n);
                    case 22:
                        return Eu(e, t, n)
                }
                throw Error(a(156, t.tag))
            };
            var Qs = "function" === typeof reportError ? reportError : function (e) {
                console.error(e)
            };

            function Ys(e) {
                this._internalRoot = e
            }

            function Xs(e) {
                this._internalRoot = e
            }

            function Gs(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            }

            function Js(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }

            function Zs() {
            }

            function ec(e, t, n, r, o) {
                var a = n._reactRootContainer;
                if (a) {
                    var i = a;
                    if ("function" === typeof o) {
                        var u = o;
                        o = function () {
                            var e = $s(i);
                            u.call(e)
                        }
                    }
                    Ws(t, i, e, o)
                } else i = function (e, t, n, r, o) {
                    if (o) {
                        if ("function" === typeof r) {
                            var a = r;
                            r = function () {
                                var e = $s(i);
                                a.call(e)
                            }
                        }
                        var i = Hs(t, r, e, 0, null, !1, 0, "", Zs);
                        return e._reactRootContainer = i, e[yo] = i.current, Vr(8 === e.nodeType ? e.parentNode : e), fs(), i
                    }
                    for (; o = e.lastChild;) e.removeChild(o);
                    if ("function" === typeof r) {
                        var u = r;
                        r = function () {
                            var e = $s(l);
                            u.call(e)
                        }
                    }
                    var l = Fs(e, 0, !1, null, 0, !1, 0, "", Zs);
                    return e._reactRootContainer = l, e[yo] = l.current, Vr(8 === e.nodeType ? e.parentNode : e), fs((function () {
                        Ws(t, l, n, r)
                    })), l
                }(n, t, e, o, r);
                return $s(i)
            }

            Xs.prototype.render = Ys.prototype.render = function (e) {
                var t = this._internalRoot;
                if (null === t) throw Error(a(409));
                Ws(e, t, null, null)
            }, Xs.prototype.unmount = Ys.prototype.unmount = function () {
                var e = this._internalRoot;
                if (null !== e) {
                    this._internalRoot = null;
                    var t = e.containerInfo;
                    fs((function () {
                        Ws(null, e, null, null)
                    })), t[yo] = null
                }
            }, Xs.prototype.unstable_scheduleHydration = function (e) {
                if (e) {
                    var t = Ot();
                    e = {blockedOn: null, target: e, priority: t};
                    for (var n = 0; n < Dt.length && 0 !== t && t < Dt[n].priority; n++) ;
                    Dt.splice(n, 0, e), 0 === n && It(e)
                }
            }, kt = function (e) {
                switch (e.tag) {
                    case 3:
                        var t = e.stateNode;
                        if (t.current.memoizedState.isDehydrated) {
                            var n = ft(t.pendingLanes);
                            0 !== n && (gt(t, 1 | n), os(t, Ge()), 0 === (6 & jl) && (Hl = Ge() + 500, Ho()))
                        }
                        break;
                    case 13:
                        fs((function () {
                            var t = Ta(e, 1);
                            if (null !== t) {
                                var n = ts();
                                rs(t, e, 1, n)
                            }
                        })), Ks(e, 1)
                }
            }, Pt = function (e) {
                if (13 === e.tag) {
                    var t = Ta(e, 134217728);
                    if (null !== t) rs(t, e, 134217728, ts());
                    Ks(e, 134217728)
                }
            }, St = function (e) {
                if (13 === e.tag) {
                    var t = ns(e), n = Ta(e, t);
                    if (null !== n) rs(n, e, t, ts());
                    Ks(e, t)
                }
            }, Ot = function () {
                return bt
            }, Et = function (e, t) {
                var n = bt;
                try {
                    return bt = e, t()
                } finally {
                    bt = n
                }
            }, Pe = function (e, t, n) {
                switch (t) {
                    case"input":
                        if (J(e, n), t = n.name, "radio" === n.type && null != t) {
                            for (n = e; n.parentNode;) n = n.parentNode;
                            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                var r = n[t];
                                if (r !== e && r.form === e.form) {
                                    var o = Po(r);
                                    if (!o) throw Error(a(90));
                                    K(r), J(r, o)
                                }
                            }
                        }
                        break;
                    case"textarea":
                        ae(e, n);
                        break;
                    case"select":
                        null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                }
            }, xe = cs, je = fs;
            var tc = {usingClientEntryPoint: !1, Events: [wo, ko, Po, _e, Ce, cs]},
                nc = {findFiberByHostInstance: bo, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom"},
                rc = {
                    bundleType: nc.bundleType,
                    version: nc.version,
                    rendererPackageName: nc.rendererPackageName,
                    rendererConfig: nc.rendererConfig,
                    overrideHookState: null,
                    overrideHookStateDeletePath: null,
                    overrideHookStateRenamePath: null,
                    overrideProps: null,
                    overridePropsDeletePath: null,
                    overridePropsRenamePath: null,
                    setErrorHandler: null,
                    setSuspenseHandler: null,
                    scheduleUpdate: null,
                    currentDispatcherRef: w.ReactCurrentDispatcher,
                    findHostInstanceByFiber: function (e) {
                        return null === (e = $e(e)) ? null : e.stateNode
                    },
                    findFiberByHostInstance: nc.findFiberByHostInstance || function () {
                        return null
                    },
                    findHostInstancesForRefresh: null,
                    scheduleRefresh: null,
                    scheduleRoot: null,
                    setRefreshHandler: null,
                    getCurrentFiber: null,
                    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
                };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!oc.isDisabled && oc.supportsFiber) try {
                    ot = oc.inject(rc), at = oc
                } catch (ce) {
                }
            }
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function (e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!Gs(t)) throw Error(a(200));
                return function (e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: P,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }(e, t, null, n)
            }, t.createRoot = function (e, t) {
                if (!Gs(e)) throw Error(a(299));
                var n = !1, r = "", o = Qs;
                return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (o = t.onRecoverableError)), t = Fs(e, 1, !1, null, 0, n, 0, r, o), e[yo] = t.current, Vr(8 === e.nodeType ? e.parentNode : e), new Ys(t)
            }, t.findDOMNode = function (e) {
                if (null == e) return null;
                if (1 === e.nodeType) return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" === typeof e.render) throw Error(a(188));
                    throw e = Object.keys(e).join(","), Error(a(268, e))
                }
                return e = null === (e = $e(t)) ? null : e.stateNode
            }, t.flushSync = function (e) {
                return fs(e)
            }, t.hydrate = function (e, t, n) {
                if (!Js(t)) throw Error(a(200));
                return ec(null, e, t, !0, n)
            }, t.hydrateRoot = function (e, t, n) {
                if (!Gs(e)) throw Error(a(405));
                var r = null != n && n.hydratedSources || null, o = !1, i = "", u = Qs;
                if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (o = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onRecoverableError && (u = n.onRecoverableError)), t = Hs(t, null, e, 1, null != n ? n : null, o, 0, i, u), e[yo] = t.current, Vr(e), r) for (e = 0; e < r.length; e++) o = (o = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
                return new Xs(t)
            }, t.render = function (e, t, n) {
                if (!Js(t)) throw Error(a(200));
                return ec(null, e, t, !1, n)
            }, t.unmountComponentAtNode = function (e) {
                if (!Js(e)) throw Error(a(40));
                return !!e._reactRootContainer && (fs((function () {
                    ec(null, null, e, !1, (function () {
                        e._reactRootContainer = null, e[yo] = null
                    }))
                })), !0)
            }, t.unstable_batchedUpdates = cs, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
                if (!Js(n)) throw Error(a(200));
                if (null == e || void 0 === e._reactInternals) throw Error(a(38));
                return ec(e, t, n, !1, r)
            }, t.version = "18.2.0-next-9e3b772b8-20220608"
        }, 250: function (e, t, n) {
            "use strict";
            var r = n(164);
            t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
        }, 164: function (e, t, n) {
            "use strict";
            !function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                } catch (t) {
                    console.error(t)
                }
            }(), e.exports = n(463)
        }, 77: function (e) {
            var t = "undefined" !== typeof Element, n = "function" === typeof Map, r = "function" === typeof Set,
                o = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;

            function a(e, i) {
                if (e === i) return !0;
                if (e && i && "object" == typeof e && "object" == typeof i) {
                    if (e.constructor !== i.constructor) return !1;
                    var u, l, s, c;
                    if (Array.isArray(e)) {
                        if ((u = e.length) != i.length) return !1;
                        for (l = u; 0 !== l--;) if (!a(e[l], i[l])) return !1;
                        return !0
                    }
                    if (n && e instanceof Map && i instanceof Map) {
                        if (e.size !== i.size) return !1;
                        for (c = e.entries(); !(l = c.next()).done;) if (!i.has(l.value[0])) return !1;
                        for (c = e.entries(); !(l = c.next()).done;) if (!a(l.value[1], i.get(l.value[0]))) return !1;
                        return !0
                    }
                    if (r && e instanceof Set && i instanceof Set) {
                        if (e.size !== i.size) return !1;
                        for (c = e.entries(); !(l = c.next()).done;) if (!i.has(l.value[0])) return !1;
                        return !0
                    }
                    if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
                        if ((u = e.length) != i.length) return !1;
                        for (l = u; 0 !== l--;) if (e[l] !== i[l]) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === i.source && e.flags === i.flags;
                    if (e.valueOf !== Object.prototype.valueOf && "function" === typeof e.valueOf && "function" === typeof i.valueOf) return e.valueOf() === i.valueOf();
                    if (e.toString !== Object.prototype.toString && "function" === typeof e.toString && "function" === typeof i.toString) return e.toString() === i.toString();
                    if ((u = (s = Object.keys(e)).length) !== Object.keys(i).length) return !1;
                    for (l = u; 0 !== l--;) if (!Object.prototype.hasOwnProperty.call(i, s[l])) return !1;
                    if (t && e instanceof Element) return !1;
                    for (l = u; 0 !== l--;) if (("_owner" !== s[l] && "__v" !== s[l] && "__o" !== s[l] || !e.$$typeof) && !a(e[s[l]], i[s[l]])) return !1;
                    return !0
                }
                return e !== e && i !== i
            }

            e.exports = function (e, t) {
                try {
                    return a(e, t)
                } catch (n) {
                    if ((n.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw n
                }
            }
        }, 434: function (e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o, a = function (e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" !== typeof e) return {default: e};
                var t = s();
                if (t && t.has(e)) return t.get(e);
                var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
                n.default = e, t && t.set(e, n);
                return n
            }(n(791)), i = (o = n(77)) && o.__esModule ? o : {default: o}, u = n(174), l = n(135);

            function s() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return s = function () {
                    return e
                }, e
            }

            function c() {
                return c = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, c.apply(this, arguments)
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function p(e, t) {
                return p = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, p(e, t)
            }

            function d(e) {
                var t = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                        }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, o = y(e);
                    if (t) {
                        var a = y(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === r(t) || "function" === typeof t)) return t;
                        return h(e)
                    }(this, n)
                }
            }

            function h(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function y(e) {
                return y = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, y(e)
            }

            function v(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var m = function (e) {
                !function (e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && p(e, t)
                }(u, e);
                var t, n, r, o = d(u);

                function u() {
                    var e;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, u);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return v(h(e = o.call.apply(o, [this].concat(n))), "mounted", !1), v(h(e), "isReady", !1), v(h(e), "isPlaying", !1), v(h(e), "isLoading", !0), v(h(e), "loadOnReady", null), v(h(e), "startOnPlay", !0), v(h(e), "seekOnPlay", null), v(h(e), "onDurationCalled", !1), v(h(e), "handlePlayerMount", (function (t) {
                        e.player || (e.player = t, e.player.load(e.props.url)), e.progress()
                    })), v(h(e), "getInternalPlayer", (function (t) {
                        return e.player ? e.player[t] : null
                    })), v(h(e), "progress", (function () {
                        if (e.props.url && e.player && e.isReady) {
                            var t = e.getCurrentTime() || 0, n = e.getSecondsLoaded(), r = e.getDuration();
                            if (r) {
                                var o = {playedSeconds: t, played: t / r};
                                null !== n && (o.loadedSeconds = n, o.loaded = n / r), o.playedSeconds === e.prevPlayed && o.loadedSeconds === e.prevLoaded || e.props.onProgress(o), e.prevPlayed = o.playedSeconds, e.prevLoaded = o.loadedSeconds
                            }
                        }
                        e.progressTimeout = setTimeout(e.progress, e.props.progressFrequency || e.props.progressInterval)
                    })), v(h(e), "handleReady", (function () {
                        if (e.mounted) {
                            e.isReady = !0, e.isLoading = !1;
                            var t = e.props, n = t.onReady, r = t.playing, o = t.volume, a = t.muted;
                            n(), a || null === o || e.player.setVolume(o), e.loadOnReady ? (e.player.load(e.loadOnReady, !0), e.loadOnReady = null) : r && e.player.play(), e.handleDurationCheck()
                        }
                    })), v(h(e), "handlePlay", (function () {
                        e.isPlaying = !0, e.isLoading = !1;
                        var t = e.props, n = t.onStart, r = t.onPlay, o = t.playbackRate;
                        e.startOnPlay && (e.player.setPlaybackRate && 1 !== o && e.player.setPlaybackRate(o), n(), e.startOnPlay = !1), r(), e.seekOnPlay && (e.seekTo(e.seekOnPlay), e.seekOnPlay = null), e.handleDurationCheck()
                    })), v(h(e), "handlePause", (function (t) {
                        e.isPlaying = !1, e.isLoading || e.props.onPause(t)
                    })), v(h(e), "handleEnded", (function () {
                        var t = e.props, n = t.activePlayer, r = t.loop, o = t.onEnded;
                        n.loopOnEnded && r && e.seekTo(0), r || (e.isPlaying = !1, o())
                    })), v(h(e), "handleError", (function () {
                        var t;
                        e.isLoading = !1, (t = e.props).onError.apply(t, arguments)
                    })), v(h(e), "handleDurationCheck", (function () {
                        clearTimeout(e.durationCheckTimeout);
                        var t = e.getDuration();
                        t ? e.onDurationCalled || (e.props.onDuration(t), e.onDurationCalled = !0) : e.durationCheckTimeout = setTimeout(e.handleDurationCheck, 100)
                    })), v(h(e), "handleLoaded", (function () {
                        e.isLoading = !1
                    })), e
                }

                return t = u, n = [{
                    key: "componentDidMount", value: function () {
                        this.mounted = !0
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        clearTimeout(this.progressTimeout), clearTimeout(this.durationCheckTimeout), this.isReady && this.props.stopOnUnmount && (this.player.stop(), this.player.disablePIP && this.player.disablePIP()), this.mounted = !1
                    }
                }, {
                    key: "componentDidUpdate", value: function (e) {
                        var t = this;
                        if (this.player) {
                            var n = this.props, r = n.url, o = n.playing, a = n.volume, u = n.muted, s = n.playbackRate,
                                c = n.pip, f = n.loop, p = n.activePlayer, d = n.disableDeferredLoading;
                            if (!(0, i.default)(e.url, r)) {
                                if (this.isLoading && !p.forceLoad && !d && !(0, l.isMediaStream)(r)) return console.warn("ReactPlayer: the attempt to load ".concat(r, " is being deferred until the player has loaded")), void (this.loadOnReady = r);
                                this.isLoading = !0, this.startOnPlay = !0, this.onDurationCalled = !1, this.player.load(r, this.isReady)
                            }
                            e.playing || !o || this.isPlaying || this.player.play(), e.playing && !o && this.isPlaying && this.player.pause(), !e.pip && c && this.player.enablePIP && this.player.enablePIP(), e.pip && !c && this.player.disablePIP && this.player.disablePIP(), e.volume !== a && null !== a && this.player.setVolume(a), e.muted !== u && (u ? this.player.mute() : (this.player.unmute(), null !== a && setTimeout((function () {
                                return t.player.setVolume(a)
                            })))), e.playbackRate !== s && this.player.setPlaybackRate && this.player.setPlaybackRate(s), e.loop !== f && this.player.setLoop && this.player.setLoop(f)
                        }
                    }
                }, {
                    key: "getDuration", value: function () {
                        return this.isReady ? this.player.getDuration() : null
                    }
                }, {
                    key: "getCurrentTime", value: function () {
                        return this.isReady ? this.player.getCurrentTime() : null
                    }
                }, {
                    key: "getSecondsLoaded", value: function () {
                        return this.isReady ? this.player.getSecondsLoaded() : null
                    }
                }, {
                    key: "seekTo", value: function (e, t, n) {
                        var r = this;
                        if (this.isReady) {
                            if (t ? "fraction" === t : e > 0 && e < 1) {
                                var o = this.player.getDuration();
                                return o ? void this.player.seekTo(o * e, n) : void console.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available")
                            }
                            this.player.seekTo(e, n)
                        } else 0 !== e && (this.seekOnPlay = e, setTimeout((function () {
                            r.seekOnPlay = null
                        }), 5e3))
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.props.activePlayer;
                        return e ? a.default.createElement(e, c({}, this.props, {
                            onMount: this.handlePlayerMount,
                            onReady: this.handleReady,
                            onPlay: this.handlePlay,
                            onPause: this.handlePause,
                            onEnded: this.handleEnded,
                            onLoaded: this.handleLoaded,
                            onError: this.handleError
                        })) : null
                    }
                }], n && f(t.prototype, n), r && f(t, r), u
            }(a.Component);
            t.default = m, v(m, "displayName", "Player"), v(m, "propTypes", u.propTypes), v(m, "defaultProps", u.defaultProps)
        }, 275: function (e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = function (e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" !== typeof e) return {default: e};
                var t = a();
                if (t && t.has(e)) return t.get(e);
                var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var u = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    u && (u.get || u.set) ? Object.defineProperty(n, i, u) : n[i] = e[i]
                }
                n.default = e, t && t.set(e, n);
                return n
            }(n(791));

            function a() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return a = function () {
                    return e
                }, e
            }

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function (t) {
                        d(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function s(e, t) {
                return s = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, s(e, t)
            }

            function c(e) {
                var t = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                        }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, o = p(e);
                    if (t) {
                        var a = p(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === r(t) || "function" === typeof t)) return t;
                        return f(e)
                    }(this, n)
                }
            }

            function f(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function p(e) {
                return p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, p(e)
            }

            function d(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var h = "64px", y = {}, v = function (e) {
                !function (e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && s(e, t)
                }(i, e);
                var t, n, r, a = c(i);

                function i() {
                    var e;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return d(f(e = a.call.apply(a, [this].concat(n))), "mounted", !1), d(f(e), "state", {image: null}), d(f(e), "handleKeyPress", (function (t) {
                        "Enter" !== t.key && " " !== t.key || e.props.onClick()
                    })), e
                }

                return t = i, (n = [{
                    key: "componentDidMount", value: function () {
                        this.mounted = !0, this.fetchImage(this.props)
                    }
                }, {
                    key: "componentDidUpdate", value: function (e) {
                        var t = this.props, n = t.url, r = t.light;
                        e.url === n && e.light === r || this.fetchImage(this.props)
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        this.mounted = !1
                    }
                }, {
                    key: "fetchImage", value: function (e) {
                        var t = this, n = e.url, r = e.light, a = e.oEmbedUrl;
                        if (!o.default.isValidElement(r)) if ("string" !== typeof r) {
                            if (!y[n]) return this.setState({image: null}), window.fetch(a.replace("{url}", n)).then((function (e) {
                                return e.json()
                            })).then((function (e) {
                                if (e.thumbnail_url && t.mounted) {
                                    var r = e.thumbnail_url.replace("height=100", "height=480").replace("-d_295x166", "-d_640");
                                    t.setState({image: r}), y[n] = r
                                }
                            }));
                            this.setState({image: y[n]})
                        } else this.setState({image: r})
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.props, t = e.light, n = e.onClick, r = e.playIcon, a = e.previewTabIndex,
                            i = this.state.image, l = o.default.isValidElement(t),
                            s = {display: "flex", alignItems: "center", justifyContent: "center"}, c = {
                                preview: u({
                                    width: "100%",
                                    height: "100%",
                                    backgroundImage: i && !l ? "url(".concat(i, ")") : void 0,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    cursor: "pointer"
                                }, s),
                                shadow: u({
                                    background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
                                    borderRadius: h,
                                    width: h,
                                    height: h,
                                    position: l ? "absolute" : void 0
                                }, s),
                                playIcon: {
                                    borderStyle: "solid",
                                    borderWidth: "16px 0 16px 26px",
                                    borderColor: "transparent transparent transparent white",
                                    marginLeft: "7px"
                                }
                            }, f = o.default.createElement("div", {
                                style: c.shadow,
                                className: "react-player__shadow"
                            }, o.default.createElement("div", {style: c.playIcon, className: "react-player__play-icon"}));
                        return o.default.createElement("div", {
                            style: c.preview,
                            className: "react-player__preview",
                            onClick: n,
                            tabIndex: a,
                            onKeyPress: this.handleKeyPress
                        }, l ? t : null, r || f)
                    }
                }]) && l(t.prototype, n), r && l(t, r), i
            }(o.Component);
            t.default = v
        }, 646: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.createReactPlayer = void 0;
            var r = O(n(791)), o = c(n(948)), a = c(n(781)), i = c(n(77)), u = n(174), l = n(135), s = c(n(434));

            function c(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function f(e) {
                return f = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, f(e)
            }

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function (t) {
                        P(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function h() {
                return h = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, h.apply(this, arguments)
            }

            function y(e) {
                return function (e) {
                    if (Array.isArray(e)) return v(e)
                }(e) || function (e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function (e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return v(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function m(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function g(e, t) {
                return g = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, g(e, t)
            }

            function b(e) {
                var t = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                        }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, r = k(e);
                    if (t) {
                        var o = k(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === f(t) || "function" === typeof t)) return t;
                        return w(e)
                    }(this, n)
                }
            }

            function w(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function k(e) {
                return k = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, k(e)
            }

            function P(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function S() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return S = function () {
                    return e
                }, e
            }

            function O(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== f(e) && "function" !== typeof e) return {default: e};
                var t = S();
                if (t && t.has(e)) return t.get(e);
                var n = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
                return n.default = e, t && t.set(e, n), n
            }

            var E = (0, r.lazy)((function () {
                    return Promise.resolve().then((function () {
                        return O(n(275))
                    }))
                })), _ = "undefined" !== typeof window && window.document,
                C = "undefined" !== typeof n.g && n.g.window && n.g.window.document, x = Object.keys(u.propTypes),
                j = _ || C ? r.Suspense : function () {
                    return null
                }, T = [];
            t.createReactPlayer = function (e, t) {
                var n, c;
                return c = n = function (n) {
                    !function (e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && g(e, t)
                    }(k, n);
                    var c, f, p, v = b(k);

                    function k() {
                        var n;
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, k);
                        for (var i = arguments.length, c = new Array(i), f = 0; f < i; f++) c[f] = arguments[f];
                        return P(w(n = v.call.apply(v, [this].concat(c))), "state", {showPreview: !!n.props.light}), P(w(n), "references", {
                            wrapper: function (e) {
                                n.wrapper = e
                            }, player: function (e) {
                                n.player = e
                            }
                        }), P(w(n), "handleClickPreview", (function (e) {
                            n.setState({showPreview: !1}), n.props.onClickPreview(e)
                        })), P(w(n), "showPreview", (function () {
                            n.setState({showPreview: !0})
                        })), P(w(n), "getDuration", (function () {
                            return n.player ? n.player.getDuration() : null
                        })), P(w(n), "getCurrentTime", (function () {
                            return n.player ? n.player.getCurrentTime() : null
                        })), P(w(n), "getSecondsLoaded", (function () {
                            return n.player ? n.player.getSecondsLoaded() : null
                        })), P(w(n), "getInternalPlayer", (function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "player";
                            return n.player ? n.player.getInternalPlayer(e) : null
                        })), P(w(n), "seekTo", (function (e, t, r) {
                            if (!n.player) return null;
                            n.player.seekTo(e, t, r)
                        })), P(w(n), "handleReady", (function () {
                            n.props.onReady(w(n))
                        })), P(w(n), "getActivePlayer", (0, a.default)((function (n) {
                            for (var r = 0, o = [].concat(T, y(e)); r < o.length; r++) {
                                var a = o[r];
                                if (a.canPlay(n)) return a
                            }
                            return t || null
                        }))), P(w(n), "getConfig", (0, a.default)((function (e, t) {
                            var r = n.props.config;
                            return o.default.all([u.defaultProps.config, u.defaultProps.config[t] || {}, r, r[t] || {}])
                        }))), P(w(n), "getAttributes", (0, a.default)((function (e) {
                            return (0, l.omit)(n.props, x)
                        }))), P(w(n), "renderActivePlayer", (function (e) {
                            if (!e) return null;
                            var t = n.getActivePlayer(e);
                            if (!t) return null;
                            var o = n.getConfig(e, t.key);
                            return r.default.createElement(s.default, h({}, n.props, {
                                key: t.key,
                                ref: n.references.player,
                                config: o,
                                activePlayer: t.lazyPlayer || t,
                                onReady: n.handleReady
                            }))
                        })), n
                    }

                    return c = k, f = [{
                        key: "shouldComponentUpdate", value: function (e, t) {
                            return !(0, i.default)(this.props, e) || !(0, i.default)(this.state, t)
                        }
                    }, {
                        key: "componentDidUpdate", value: function (e) {
                            var t = this.props.light;
                            !e.light && t && this.setState({showPreview: !0}), e.light && !t && this.setState({showPreview: !1})
                        }
                    }, {
                        key: "renderPreview", value: function (e) {
                            if (!e) return null;
                            var t = this.props, n = t.light, o = t.playIcon, a = t.previewTabIndex, i = t.oEmbedUrl;
                            return r.default.createElement(E, {
                                url: e,
                                light: n,
                                playIcon: o,
                                previewTabIndex: a,
                                oEmbedUrl: i,
                                onClick: this.handleClickPreview
                            })
                        }
                    }, {
                        key: "render", value: function () {
                            var e = this.props, t = e.url, n = e.style, o = e.width, a = e.height, i = e.fallback,
                                u = e.wrapper, l = this.state.showPreview, s = this.getAttributes(t),
                                c = "string" === typeof u ? this.references.wrapper : void 0;
                            return r.default.createElement(u, h({
                                ref: c,
                                style: d(d({}, n), {}, {width: o, height: a})
                            }, s), r.default.createElement(j, {fallback: i}, l ? this.renderPreview(t) : this.renderActivePlayer(t)))
                        }
                    }], f && m(c.prototype, f), p && m(c, p), k
                }(r.Component), P(n, "displayName", "ReactPlayer"), P(n, "propTypes", u.propTypes), P(n, "defaultProps", u.defaultProps), P(n, "addCustomPlayer", (function (e) {
                    T.push(e)
                })), P(n, "removeCustomPlayers", (function () {
                    T.length = 0
                })), P(n, "canPlay", (function (t) {
                    for (var n = 0, r = [].concat(T, y(e)); n < r.length; n++) {
                        if (r[n].canPlay(t)) return !0
                    }
                    return !1
                })), P(n, "canEnablePIP", (function (t) {
                    for (var n = 0, r = [].concat(T, y(e)); n < r.length; n++) {
                        var o = r[n];
                        if (o.canEnablePIP && o.canEnablePIP(t)) return !0
                    }
                    return !1
                })), c
            }
        }, 710: function (e, t, n) {
            "use strict";
            t.Z = void 0;
            var r, o = (r = n(687)) && r.__esModule ? r : {default: r}, a = n(646);
            var i = o.default[o.default.length - 1], u = (0, a.createReactPlayer)(o.default, i);
            t.Z = u
        }, 365: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.canPlay = t.FLV_EXTENSIONS = t.DASH_EXTENSIONS = t.HLS_EXTENSIONS = t.VIDEO_EXTENSIONS = t.AUDIO_EXTENSIONS = t.MATCH_URL_KALTURA = t.MATCH_URL_VIDYARD = t.MATCH_URL_MIXCLOUD = t.MATCH_URL_DAILYMOTION = t.MATCH_URL_TWITCH_CHANNEL = t.MATCH_URL_TWITCH_VIDEO = t.MATCH_URL_WISTIA = t.MATCH_URL_STREAMABLE = t.MATCH_URL_FACEBOOK_WATCH = t.MATCH_URL_FACEBOOK = t.MATCH_URL_VIMEO = t.MATCH_URL_SOUNDCLOUD = t.MATCH_URL_YOUTUBE = void 0;
            var r = n(135);

            function o(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function (e, t) {
                        if (!e) return;
                        if ("string" === typeof e) return a(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                    }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0, o = function () {
                        };
                        return {
                            s: o, n: function () {
                                return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                            }, e: function (e) {
                                throw e
                            }, f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, u = !0, l = !1;
                return {
                    s: function () {
                        n = e[Symbol.iterator]()
                    }, n: function () {
                        var e = n.next();
                        return u = e.done, e
                    }, e: function (e) {
                        l = !0, i = e
                    }, f: function () {
                        try {
                            u || null == n.return || n.return()
                        } finally {
                            if (l) throw i
                        }
                    }
                }
            }

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            var i = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
            t.MATCH_URL_YOUTUBE = i;
            var u = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
            t.MATCH_URL_SOUNDCLOUD = u;
            var l = /vimeo\.com\/(?!progressive_redirect).+/;
            t.MATCH_URL_VIMEO = l;
            var s = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
            t.MATCH_URL_FACEBOOK = s;
            var c = /^https?:\/\/fb\.watch\/.+$/;
            t.MATCH_URL_FACEBOOK_WATCH = c;
            var f = /streamable\.com\/([a-z0-9]+)$/;
            t.MATCH_URL_STREAMABLE = f;
            var p = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/;
            t.MATCH_URL_WISTIA = p;
            var d = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
            t.MATCH_URL_TWITCH_VIDEO = d;
            var h = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
            t.MATCH_URL_TWITCH_CHANNEL = h;
            var y = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/;
            t.MATCH_URL_DAILYMOTION = y;
            var v = /mixcloud\.com\/([^/]+\/[^/]+)/;
            t.MATCH_URL_MIXCLOUD = v;
            var m = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
            t.MATCH_URL_VIDYARD = m;
            var g = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;
            t.MATCH_URL_KALTURA = g;
            var b = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
            t.AUDIO_EXTENSIONS = b;
            var w = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
            t.VIDEO_EXTENSIONS = w;
            var k = /\.(m3u8)($|\?)/i;
            t.HLS_EXTENSIONS = k;
            var P = /\.(mpd)($|\?)/i;
            t.DASH_EXTENSIONS = P;
            var S = /\.(flv)($|\?)/i;
            t.FLV_EXTENSIONS = S;
            var O = {
                youtube: function (e) {
                    return e instanceof Array ? e.every((function (e) {
                        return i.test(e)
                    })) : i.test(e)
                }, soundcloud: function (e) {
                    return u.test(e) && !b.test(e)
                }, vimeo: function (e) {
                    return l.test(e) && !w.test(e) && !k.test(e)
                }, facebook: function (e) {
                    return s.test(e) || c.test(e)
                }, streamable: function (e) {
                    return f.test(e)
                }, wistia: function (e) {
                    return p.test(e)
                }, twitch: function (e) {
                    return d.test(e) || h.test(e)
                }, dailymotion: function (e) {
                    return y.test(e)
                }, mixcloud: function (e) {
                    return v.test(e)
                }, vidyard: function (e) {
                    return m.test(e)
                }, kaltura: function (e) {
                    return g.test(e)
                }, file: function e(t) {
                    if (t instanceof Array) {
                        var n, a = o(t);
                        try {
                            for (a.s(); !(n = a.n()).done;) {
                                var i = n.value;
                                if ("string" === typeof i && e(i)) return !0;
                                if (e(i.src)) return !0
                            }
                        } catch (u) {
                            a.e(u)
                        } finally {
                            a.f()
                        }
                        return !1
                    }
                    return !(!(0, r.isMediaStream)(t) && !(0, r.isBlobUrl)(t)) || (b.test(t) || w.test(t) || k.test(t) || P.test(t) || S.test(t))
                }
            };
            t.canPlay = O
        }, 303: function (e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = function (e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" !== typeof e) return {default: e};
                var t = u();
                if (t && t.has(e)) return t.get(e);
                var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
                n.default = e, t && t.set(e, n);
                return n
            }(n(791)), a = n(135), i = n(365);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function () {
                    return e
                }, e
            }

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function (t) {
                        m(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function c(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [], r = !0, o = !1, a = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0) ;
                    } catch (l) {
                        o = !0, a = l
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function d(e, t) {
                return d = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, d(e, t)
            }

            function h(e) {
                var t = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                        }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, o = v(e);
                    if (t) {
                        var a = v(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === r(t) || "function" === typeof t)) return t;
                        return y(e)
                    }(this, n)
                }
            }

            function y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v(e) {
                return v = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, v(e)
            }

            function m(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var g = function (e) {
                !function (e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && d(e, t)
                }(l, e);
                var t, n, r, u = h(l);

                function l() {
                    var e;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return m(y(e = u.call.apply(u, [this].concat(n))), "callPlayer", a.callPlayer), m(y(e), "onDurationChange", (function () {
                        var t = e.getDuration();
                        e.props.onDuration(t)
                    })), m(y(e), "mute", (function () {
                        e.callPlayer("setMuted", !0)
                    })), m(y(e), "unmute", (function () {
                        e.callPlayer("setMuted", !1)
                    })), m(y(e), "ref", (function (t) {
                        e.container = t
                    })), e
                }

                return t = l, n = [{
                    key: "componentDidMount", value: function () {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load", value: function (e) {
                        var t = this, n = this.props, r = n.controls, o = n.config, u = n.onError, l = n.playing,
                            f = c(e.match(i.MATCH_URL_DAILYMOTION), 2)[1];
                        this.player ? this.player.load(f, {
                            start: (0, a.parseStartTime)(e),
                            autoplay: l
                        }) : (0, a.getSDK)("https://api.dmcdn.net/all.js", "DM", "dmAsyncInit", (function (e) {
                            return e.player
                        })).then((function (n) {
                            if (t.container) {
                                var i = n.player;
                                t.player = new i(t.container, {
                                    width: "100%",
                                    height: "100%",
                                    video: f,
                                    params: s({
                                        controls: r,
                                        autoplay: t.props.playing,
                                        mute: t.props.muted,
                                        start: (0, a.parseStartTime)(e),
                                        origin: window.location.origin
                                    }, o.params),
                                    events: {
                                        apiready: t.props.onReady,
                                        seeked: function () {
                                            return t.props.onSeek(t.player.currentTime)
                                        },
                                        video_end: t.props.onEnded,
                                        durationchange: t.onDurationChange,
                                        pause: t.props.onPause,
                                        playing: t.props.onPlay,
                                        waiting: t.props.onBuffer,
                                        error: function (e) {
                                            return u(e)
                                        }
                                    }
                                })
                            }
                        }), u)
                    }
                }, {
                    key: "play", value: function () {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause", value: function () {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop", value: function () {
                    }
                }, {
                    key: "seekTo", value: function (e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        this.callPlayer("seek", e), t || this.pause()
                    }
                }, {
                    key: "setVolume", value: function (e) {
                        this.callPlayer("setVolume", e)
                    }
                }, {
                    key: "getDuration", value: function () {
                        return this.player.duration || null
                    }
                }, {
                    key: "getCurrentTime", value: function () {
                        return this.player.currentTime
                    }
                }, {
                    key: "getSecondsLoaded", value: function () {
                        return this.player.bufferedTime
                    }
                }, {
                    key: "render", value: function () {
                        var e = {width: "100%", height: "100%", display: this.props.display};
                        return o.default.createElement("div", {style: e}, o.default.createElement("div", {ref: this.ref}))
                    }
                }], n && p(t.prototype, n), r && p(t, r), l
            }(o.Component);
            t.default = g, m(g, "displayName", "DailyMotion"), m(g, "canPlay", i.canPlay.dailymotion), m(g, "loopOnEnded", !0)
        }, 793: function (e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = function (e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" !== typeof e) return {default: e};
                var t = u();
                if (t && t.has(e)) return t.get(e);
                var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
                n.default = e, t && t.set(e, n);
                return n
            }(n(791)), a = n(135), i = n(365);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function () {
                    return e
                }, e
            }

            function l() {
                return l = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, l.apply(this, arguments)
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function c(e, t) {
                return c = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, c(e, t)
            }

            function f(e) {
                var t = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                        }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, o = d(e);
                    if (t) {
                        var a = d(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === r(t) || "function" === typeof t)) return t;
                        return p(e)
                    }(this, n)
                }
            }

            function p(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function d(e) {
                return d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, d(e)
            }

            function h(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var y = "https://connect.facebook.net/en_US/sdk.js", v = "fbAsyncInit", m = function (e) {
                !function (e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t)
                }(u, e);
                var t, n, r, i = f(u);

                function u() {
                    var e;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, u);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return h(p(e = i.call.apply(i, [this].concat(n))), "callPlayer", a.callPlayer), h(p(e), "playerID", e.props.config.playerId || "".concat("facebook-player-").concat((0, a.randomString)())), h(p(e), "mute", (function () {
                        e.callPlayer("mute")
                    })), h(p(e), "unmute", (function () {
                        e.callPlayer("unmute")
                    })), e
                }

                return t = u, n = [{
                    key: "componentDidMount", value: function () {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load", value: function (e, t) {
                        var n = this;
                        t ? (0, a.getSDK)(y, "FB", v).then((function (e) {
                            return e.XFBML.parse()
                        })) : (0, a.getSDK)(y, "FB", v).then((function (e) {
                            e.init({
                                appId: n.props.config.appId,
                                xfbml: !0,
                                version: n.props.config.version
                            }), e.Event.subscribe("xfbml.render", (function (e) {
                                n.props.onLoaded()
                            })), e.Event.subscribe("xfbml.ready", (function (e) {
                                "video" === e.type && e.id === n.playerID && (n.player = e.instance, n.player.subscribe("startedPlaying", n.props.onPlay), n.player.subscribe("paused", n.props.onPause), n.player.subscribe("finishedPlaying", n.props.onEnded), n.player.subscribe("startedBuffering", n.props.onBuffer), n.player.subscribe("finishedBuffering", n.props.onBufferEnd), n.player.subscribe("error", n.props.onError), n.props.muted ? n.callPlayer("mute") : n.callPlayer("unmute"), n.props.onReady(), document.getElementById(n.playerID).querySelector("iframe").style.visibility = "visible")
                            }))
                        }))
                    }
                }, {
                    key: "play", value: function () {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause", value: function () {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop", value: function () {
                    }
                }, {
                    key: "seekTo", value: function (e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        this.callPlayer("seek", e), t || this.pause()
                    }
                }, {
                    key: "setVolume", value: function (e) {
                        this.callPlayer("setVolume", e)
                    }
                }, {
                    key: "getDuration", value: function () {
                        return this.callPlayer("getDuration")
                    }
                }, {
                    key: "getCurrentTime", value: function () {
                        return this.callPlayer("getCurrentPosition")
                    }
                }, {
                    key: "getSecondsLoaded", value: function () {
                        return null
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.props.config.attributes;
                        return o.default.createElement("div", l({
                            style: {width: "100%", height: "100%"},
                            id: this.playerID,
                            className: "fb-video",
                            "data-href": this.props.url,
                            "data-autoplay": this.props.playing ? "true" : "false",
                            "data-allowfullscreen": "true",
                            "data-controls": this.props.controls ? "true" : "false"
                        }, e))
                    }
                }], n && s(t.prototype, n), r && s(t, r), u
            }(o.Component);
            t.default = m, h(m, "displayName", "Facebook"), h(m, "canPlay", i.canPlay.facebook), h(m, "loopOnEnded", !0)
        }, 997: function (e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = function (e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" !== typeof e) return {default: e};
                var t = u();
                if (t && t.has(e)) return t.get(e);
                var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
                n.default = e, t && t.set(e, n);
                return n
            }(n(791)), a = n(135), i = n(365);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function () {
                    return e
                }, e
            }

            function l() {
                return l = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, l.apply(this, arguments)
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function c(e, t) {
                return c = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, c(e, t)
            }

            function f(e) {
                var t = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                        }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, o = d(e);
                    if (t) {
                        var a = d(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === r(t) || "function" === typeof t)) return t;
                        return p(e)
                    }(this, n)
                }
            }

            function p(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function d(e) {
                return d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, d(e)
            }

            function h(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var y = "undefined" !== typeof navigator,
                v = y && "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
                m = y && (/iPad|iPhone|iPod/.test(navigator.userAgent) || v) && !window.MSStream,
                g = y && /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !window.MSStream,
                b = /www\.dropbox\.com\/.+/, w = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/,
                k = function (e) {
                    !function (e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && c(e, t)
                    }(d, e);
                    var t, n, r, u = f(d);

                    function d() {
                        var e;
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, d);
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return h(p(e = u.call.apply(u, [this].concat(n))), "onReady", (function () {
                            var t;
                            return (t = e.props).onReady.apply(t, arguments)
                        })), h(p(e), "onPlay", (function () {
                            var t;
                            return (t = e.props).onPlay.apply(t, arguments)
                        })), h(p(e), "onBuffer", (function () {
                            var t;
                            return (t = e.props).onBuffer.apply(t, arguments)
                        })), h(p(e), "onBufferEnd", (function () {
                            var t;
                            return (t = e.props).onBufferEnd.apply(t, arguments)
                        })), h(p(e), "onPause", (function () {
                            var t;
                            return (t = e.props).onPause.apply(t, arguments)
                        })), h(p(e), "onEnded", (function () {
                            var t;
                            return (t = e.props).onEnded.apply(t, arguments)
                        })), h(p(e), "onError", (function () {
                            var t;
                            return (t = e.props).onError.apply(t, arguments)
                        })), h(p(e), "onPlayBackRateChange", (function (t) {
                            return e.props.onPlaybackRateChange(t.target.playbackRate)
                        })), h(p(e), "onEnablePIP", (function () {
                            var t;
                            return (t = e.props).onEnablePIP.apply(t, arguments)
                        })), h(p(e), "onDisablePIP", (function (t) {
                            var n = e.props, r = n.onDisablePIP, o = n.playing;
                            r(t), o && e.play()
                        })), h(p(e), "onPresentationModeChange", (function (t) {
                            if (e.player && (0, a.supportsWebKitPresentationMode)(e.player)) {
                                var n = e.player.webkitPresentationMode;
                                "picture-in-picture" === n ? e.onEnablePIP(t) : "inline" === n && e.onDisablePIP(t)
                            }
                        })), h(p(e), "onSeek", (function (t) {
                            e.props.onSeek(t.target.currentTime)
                        })), h(p(e), "mute", (function () {
                            e.player.muted = !0
                        })), h(p(e), "unmute", (function () {
                            e.player.muted = !1
                        })), h(p(e), "renderSourceElement", (function (e, t) {
                            return "string" === typeof e ? o.default.createElement("source", {
                                key: t,
                                src: e
                            }) : o.default.createElement("source", l({key: t}, e))
                        })), h(p(e), "renderTrack", (function (e, t) {
                            return o.default.createElement("track", l({key: t}, e))
                        })), h(p(e), "ref", (function (t) {
                            e.player && (e.prevPlayer = e.player), e.player = t
                        })), e
                    }

                    return t = d, n = [{
                        key: "componentDidMount", value: function () {
                            this.props.onMount && this.props.onMount(this), this.addListeners(this.player);
                            var e = this.getSource(this.props.url);
                            e && (this.player.src = e), (m || this.props.config.forceDisableHls) && this.player.load()
                        }
                    }, {
                        key: "componentDidUpdate", value: function (e) {
                            this.shouldUseAudio(this.props) !== this.shouldUseAudio(e) && (this.removeListeners(this.prevPlayer, e.url), this.addListeners(this.player)), this.props.url === e.url || (0, a.isMediaStream)(this.props.url) || this.props.url instanceof Array || (this.player.srcObject = null)
                        }
                    }, {
                        key: "componentWillUnmount", value: function () {
                            this.player.removeAttribute("src"), this.removeListeners(this.player), this.hls && this.hls.destroy()
                        }
                    }, {
                        key: "addListeners", value: function (e) {
                            var t = this.props, n = t.url, r = t.playsinline;
                            e.addEventListener("play", this.onPlay), e.addEventListener("waiting", this.onBuffer), e.addEventListener("playing", this.onBufferEnd), e.addEventListener("pause", this.onPause), e.addEventListener("seeked", this.onSeek), e.addEventListener("ended", this.onEnded), e.addEventListener("error", this.onError), e.addEventListener("ratechange", this.onPlayBackRateChange), e.addEventListener("enterpictureinpicture", this.onEnablePIP), e.addEventListener("leavepictureinpicture", this.onDisablePIP), e.addEventListener("webkitpresentationmodechanged", this.onPresentationModeChange), this.shouldUseHLS(n) || e.addEventListener("canplay", this.onReady), r && (e.setAttribute("playsinline", ""), e.setAttribute("webkit-playsinline", ""), e.setAttribute("x5-playsinline", ""))
                        }
                    }, {
                        key: "removeListeners", value: function (e, t) {
                            e.removeEventListener("canplay", this.onReady), e.removeEventListener("play", this.onPlay), e.removeEventListener("waiting", this.onBuffer), e.removeEventListener("playing", this.onBufferEnd), e.removeEventListener("pause", this.onPause), e.removeEventListener("seeked", this.onSeek), e.removeEventListener("ended", this.onEnded), e.removeEventListener("error", this.onError), e.removeEventListener("ratechange", this.onPlayBackRateChange), e.removeEventListener("enterpictureinpicture", this.onEnablePIP), e.removeEventListener("leavepictureinpicture", this.onDisablePIP), e.removeEventListener("webkitpresentationmodechanged", this.onPresentationModeChange), this.shouldUseHLS(t) || e.removeEventListener("canplay", this.onReady)
                        }
                    }, {
                        key: "shouldUseAudio", value: function (e) {
                            return !e.config.forceVideo && !e.config.attributes.poster && (i.AUDIO_EXTENSIONS.test(e.url) || e.config.forceAudio)
                        }
                    }, {
                        key: "shouldUseHLS", value: function (e) {
                            return !!(g && this.props.config.forceSafariHLS || this.props.config.forceHLS) || !m && !this.props.config.forceDisableHls && (i.HLS_EXTENSIONS.test(e) || w.test(e))
                        }
                    }, {
                        key: "shouldUseDASH", value: function (e) {
                            return i.DASH_EXTENSIONS.test(e) || this.props.config.forceDASH
                        }
                    }, {
                        key: "shouldUseFLV", value: function (e) {
                            return i.FLV_EXTENSIONS.test(e) || this.props.config.forceFLV
                        }
                    }, {
                        key: "load", value: function (e) {
                            var t = this, n = this.props.config, r = n.hlsVersion, o = n.hlsOptions, i = n.dashVersion,
                                u = n.flvVersion;
                            if (this.hls && this.hls.destroy(), this.dash && this.dash.reset(), this.shouldUseHLS(e) && (0, a.getSDK)("https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace("VERSION", r), "Hls").then((function (n) {
                                if (t.hls = new n(o), t.hls.on(n.Events.MANIFEST_PARSED, (function () {
                                    t.props.onReady()
                                })), t.hls.on(n.Events.ERROR, (function (e, r) {
                                    t.props.onError(e, r, t.hls, n)
                                })), w.test(e)) {
                                    var r = e.match(w)[1];
                                    t.hls.loadSource("https://videodelivery.net/{id}/manifest/video.m3u8".replace("{id}", r))
                                } else t.hls.loadSource(e);
                                t.hls.attachMedia(t.player), t.props.onLoaded()
                            })), this.shouldUseDASH(e) && (0, a.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace("VERSION", i), "dashjs").then((function (n) {
                                t.dash = n.MediaPlayer().create(), t.dash.initialize(t.player, e, t.props.playing), t.dash.on("error", t.props.onError), parseInt(i) < 3 ? t.dash.getDebug().setLogToBrowserConsole(!1) : t.dash.updateSettings({debug: {logLevel: n.Debug.LOG_LEVEL_NONE}}), t.props.onLoaded()
                            })), this.shouldUseFLV(e) && (0, a.getSDK)("https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js".replace("VERSION", u), "flvjs").then((function (n) {
                                t.flv = n.createPlayer({
                                    type: "flv",
                                    url: e
                                }), t.flv.attachMediaElement(t.player), t.flv.on(n.Events.ERROR, (function (e, r) {
                                    t.props.onError(e, r, t.flv, n)
                                })), t.flv.load(), t.props.onLoaded()
                            })), e instanceof Array) this.player.load(); else if ((0, a.isMediaStream)(e)) try {
                                this.player.srcObject = e
                            } catch (l) {
                                this.player.src = window.URL.createObjectURL(e)
                            }
                        }
                    }, {
                        key: "play", value: function () {
                            var e = this.player.play();
                            e && e.catch(this.props.onError)
                        }
                    }, {
                        key: "pause", value: function () {
                            this.player.pause()
                        }
                    }, {
                        key: "stop", value: function () {
                            this.player.removeAttribute("src"), this.dash && this.dash.reset()
                        }
                    }, {
                        key: "seekTo", value: function (e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            this.player.currentTime = e, t || this.pause()
                        }
                    }, {
                        key: "setVolume", value: function (e) {
                            this.player.volume = e
                        }
                    }, {
                        key: "enablePIP", value: function () {
                            this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player ? this.player.requestPictureInPicture() : (0, a.supportsWebKitPresentationMode)(this.player) && "picture-in-picture" !== this.player.webkitPresentationMode && this.player.webkitSetPresentationMode("picture-in-picture")
                        }
                    }, {
                        key: "disablePIP", value: function () {
                            document.exitPictureInPicture && document.pictureInPictureElement === this.player ? document.exitPictureInPicture() : (0, a.supportsWebKitPresentationMode)(this.player) && "inline" !== this.player.webkitPresentationMode && this.player.webkitSetPresentationMode("inline")
                        }
                    }, {
                        key: "setPlaybackRate", value: function (e) {
                            try {
                                this.player.playbackRate = e
                            } catch (t) {
                                this.props.onError(t)
                            }
                        }
                    }, {
                        key: "getDuration", value: function () {
                            if (!this.player) return null;
                            var e = this.player, t = e.duration, n = e.seekable;
                            return t === 1 / 0 && n.length > 0 ? n.end(n.length - 1) : t
                        }
                    }, {
                        key: "getCurrentTime", value: function () {
                            return this.player ? this.player.currentTime : null
                        }
                    }, {
                        key: "getSecondsLoaded", value: function () {
                            if (!this.player) return null;
                            var e = this.player.buffered;
                            if (0 === e.length) return 0;
                            var t = e.end(e.length - 1), n = this.getDuration();
                            return t > n ? n : t
                        }
                    }, {
                        key: "getSource", value: function (e) {
                            var t = this.shouldUseHLS(e), n = this.shouldUseDASH(e), r = this.shouldUseFLV(e);
                            if (!(e instanceof Array || (0, a.isMediaStream)(e) || t || n || r)) return b.test(e) ? e.replace("www.dropbox.com", "dl.dropboxusercontent.com") : e
                        }
                    }, {
                        key: "render", value: function () {
                            var e = this.props, t = e.url, n = e.playing, r = e.loop, a = e.controls, i = e.muted,
                                u = e.config, s = e.width, c = e.height,
                                f = this.shouldUseAudio(this.props) ? "audio" : "video",
                                p = {width: "auto" === s ? s : "100%", height: "auto" === c ? c : "100%"};
                            return o.default.createElement(f, l({
                                ref: this.ref,
                                src: this.getSource(t),
                                style: p,
                                preload: "auto",
                                autoPlay: n || void 0,
                                controls: a,
                                muted: i,
                                loop: r
                            }, u.attributes), t instanceof Array && t.map(this.renderSourceElement), u.tracks.map(this.renderTrack))
                        }
                    }], n && s(t.prototype, n), r && s(t, r), d
                }(o.Component);
            t.default = k, h(k, "displayName", "FilePlayer"), h(k, "canPlay", i.canPlay.file)
        }, 332: function (e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = function (e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" !== typeof e) return {default: e};
                var t = u();
                if (t && t.has(e)) return t.get(e);
                var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
                n.default = e, t && t.set(e, n);
                return n
            }(n(791)), a = n(135), i = n(365);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function () {
                    return e
                }, e
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function s(e, t) {
                return s = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, s(e, t)
            }

            function c(e) {
                var t = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                        }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, o = p(e);
                    if (t) {
                        var a = p(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === r(t) || "function" === typeof t)) return t;
                        return f(e)
                    }(this, n)
                }
            }

            function f(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function p(e) {
                return p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, p(e)
            }

            function d(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var h = function (e) {
                !function (e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && s(e, t)
                }(u, e);
                var t, n, r, i = c(u);

                function u() {
                    var e;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, u);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return d(f(e = i.call.apply(i, [this].concat(n))), "callPlayer", a.callPlayer), d(f(e), "duration", null), d(f(e), "currentTime", null), d(f(e), "secondsLoaded", null), d(f(e), "mute", (function () {
                        e.callPlayer("mute")
                    })), d(f(e), "unmute", (function () {
                        e.callPlayer("unmute")
                    })), d(f(e), "ref", (function (t) {
                        e.iframe = t
                    })), e
                }

                return t = u, n = [{
                    key: "componentDidMount", value: function () {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load", value: function (e) {
                        var t = this;
                        (0, a.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js", "playerjs").then((function (e) {
                            t.iframe && (t.player = new e.Player(t.iframe), t.player.on("ready", (function () {
                                setTimeout((function () {
                                    t.player.isReady = !0, t.player.setLoop(t.props.loop), t.props.muted && t.player.mute(), t.addListeners(t.player, t.props), t.props.onReady()
                                }), 500)
                            })))
                        }), this.props.onError)
                    }
                }, {
                    key: "addListeners", value: function (e, t) {
                        var n = this;
                        e.on("play", t.onPlay), e.on("pause", t.onPause), e.on("ended", t.onEnded), e.on("error", t.onError), e.on("timeupdate", (function (e) {
                            var t = e.duration, r = e.seconds;
                            n.duration = t, n.currentTime = r
                        }))
                    }
                }, {
                    key: "play", value: function () {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause", value: function () {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop", value: function () {
                    }
                }, {
                    key: "seekTo", value: function (e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        this.callPlayer("setCurrentTime", e), t || this.pause()
                    }
                }, {
                    key: "setVolume", value: function (e) {
                        this.callPlayer("setVolume", e)
                    }
                }, {
                    key: "setLoop", value: function (e) {
                        this.callPlayer("setLoop", e)
                    }
                }, {
                    key: "getDuration", value: function () {
                        return this.duration
                    }
                }, {
                    key: "getCurrentTime", value: function () {
                        return this.currentTime
                    }
                }, {
                    key: "getSecondsLoaded", value: function () {
                        return this.secondsLoaded
                    }
                }, {
                    key: "render", value: function () {
                        return o.default.createElement("iframe", {
                            ref: this.ref,
                            src: this.props.url,
                            frameBorder: "0",
                            scrolling: "no",
                            style: {width: "100%", height: "100%"},
                            allow: "encrypted-media; autoplay; fullscreen;",
                            referrerPolicy: "no-referrer-when-downgrade"
                        })
                    }
                }], n && l(t.prototype, n), r && l(t, r), u
            }(o.Component);
            t.default = h, d(h, "displayName", "Kaltura"), d(h, "canPlay", i.canPlay.kaltura)
        }, 732: function (e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = function (e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" !== typeof e) return {default: e};
                var t = u();
                if (t && t.has(e)) return t.get(e);
                var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
                n.default = e, t && t.set(e, n);
                return n
            }(n(791)), a = n(135), i = n(365);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function () {
                    return e
                }, e
            }

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function (t) {
                        y(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t) {
                return f = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, f(e, t)
            }

            function p(e) {
                var t = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                        }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, o = h(e);
                    if (t) {
                        var a = h(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === r(t) || "function" === typeof t)) return t;
                        return d(e)
                    }(this, n)
                }
            }

            function d(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e) {
                return h = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, h(e)
            }

            function y(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var v = function (e) {
                !function (e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && f(e, t)
                }(l, e);
                var t, n, r, u = p(l);

                function l() {
                    var e;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return y(d(e = u.call.apply(u, [this].concat(n))), "callPlayer", a.callPlayer), y(d(e), "duration", null), y(d(e), "currentTime", null), y(d(e), "secondsLoaded", null), y(d(e), "mute", (function () {
                    })), y(d(e), "unmute", (function () {
                    })), y(d(e), "ref", (function (t) {
                        e.iframe = t
                    })), e
                }

                return t = l, n = [{
                    key: "componentDidMount", value: function () {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load", value: function (e) {
                        var t = this;
                        (0, a.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js", "Mixcloud").then((function (e) {
                            t.player = e.PlayerWidget(t.iframe), t.player.ready.then((function () {
                                t.player.events.play.on(t.props.onPlay), t.player.events.pause.on(t.props.onPause), t.player.events.ended.on(t.props.onEnded), t.player.events.error.on(t.props.error), t.player.events.progress.on((function (e, n) {
                                    t.currentTime = e, t.duration = n
                                })), t.props.onReady()
                            }))
                        }), this.props.onError)
                    }
                }, {
                    key: "play", value: function () {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause", value: function () {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop", value: function () {
                    }
                }, {
                    key: "seekTo", value: function (e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        this.callPlayer("seek", e), t || this.pause()
                    }
                }, {
                    key: "setVolume", value: function (e) {
                    }
                }, {
                    key: "getDuration", value: function () {
                        return this.duration
                    }
                }, {
                    key: "getCurrentTime", value: function () {
                        return this.currentTime
                    }
                }, {
                    key: "getSecondsLoaded", value: function () {
                        return null
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.props, t = e.url, n = e.config, r = t.match(i.MATCH_URL_MIXCLOUD)[1],
                            u = (0, a.queryString)(s(s({}, n.options), {}, {feed: "/".concat(r, "/")}));
                        return o.default.createElement("iframe", {
                            key: r,
                            ref: this.ref,
                            style: {width: "100%", height: "100%"},
                            src: "https://www.mixcloud.com/widget/iframe/?".concat(u),
                            frameBorder: "0",
                            allow: "autoplay"
                        })
                    }
                }], n && c(t.prototype, n), r && c(t, r), l
            }(o.Component);
            t.default = v, y(v, "displayName", "Mixcloud"), y(v, "canPlay", i.canPlay.mixcloud), y(v, "loopOnEnded", !0)
        }, 801: function (e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = function (e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" !== typeof e) return {default: e};
                var t = u();
                if (t && t.has(e)) return t.get(e);
                var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
                n.default = e, t && t.set(e, n);
                return n
            }(n(791)), a = n(135), i = n(365);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function () {
                    return e
                }, e
            }

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function (t) {
                        y(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t) {
                return f = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, f(e, t)
            }

            function p(e) {
                var t = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                        }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, o = h(e);
                    if (t) {
                        var a = h(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === r(t) || "function" === typeof t)) return t;
                        return d(e)
                    }(this, n)
                }
            }

            function d(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e) {
                return h = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, h(e)
            }

            function y(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var v = function (e) {
                !function (e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && f(e, t)
                }(u, e);
                var t, n, r, i = p(u);

                function u() {
                    var e;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, u);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return y(d(e = i.call.apply(i, [this].concat(n))), "callPlayer", a.callPlayer), y(d(e), "duration", null), y(d(e), "currentTime", null), y(d(e), "fractionLoaded", null), y(d(e), "mute", (function () {
                        e.setVolume(0)
                    })), y(d(e), "unmute", (function () {
                        null !== e.props.volume && e.setVolume(e.props.volume)
                    })), y(d(e), "ref", (function (t) {
                        e.iframe = t
                    })), e
                }

                return t = u, n = [{
                    key: "componentDidMount", value: function () {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load", value: function (e, t) {
                        var n = this;
                        (0, a.getSDK)("https://w.soundcloud.com/player/api.js", "SC").then((function (r) {
                            if (n.iframe) {
                                var o = r.Widget.Events, a = o.PLAY, i = o.PLAY_PROGRESS, u = o.PAUSE, l = o.FINISH,
                                    c = o.ERROR;
                                t || (n.player = r.Widget(n.iframe), n.player.bind(a, n.props.onPlay), n.player.bind(u, (function () {
                                    n.duration - n.currentTime < .05 || n.props.onPause()
                                })), n.player.bind(i, (function (e) {
                                    n.currentTime = e.currentPosition / 1e3, n.fractionLoaded = e.loadedProgress
                                })), n.player.bind(l, (function () {
                                    return n.props.onEnded()
                                })), n.player.bind(c, (function (e) {
                                    return n.props.onError(e)
                                }))), n.player.load(e, s(s({}, n.props.config.options), {}, {
                                    callback: function () {
                                        n.player.getDuration((function (e) {
                                            n.duration = e / 1e3, n.props.onReady()
                                        }))
                                    }
                                }))
                            }
                        }))
                    }
                }, {
                    key: "play", value: function () {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause", value: function () {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop", value: function () {
                    }
                }, {
                    key: "seekTo", value: function (e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        this.callPlayer("seekTo", 1e3 * e), t || this.pause()
                    }
                }, {
                    key: "setVolume", value: function (e) {
                        this.callPlayer("setVolume", 100 * e)
                    }
                }, {
                    key: "getDuration", value: function () {
                        return this.duration
                    }
                }, {
                    key: "getCurrentTime", value: function () {
                        return this.currentTime
                    }
                }, {
                    key: "getSecondsLoaded", value: function () {
                        return this.fractionLoaded * this.duration
                    }
                }, {
                    key: "render", value: function () {
                        var e = {width: "100%", height: "100%", display: this.props.display};
                        return o.default.createElement("iframe", {
                            ref: this.ref,
                            src: "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),
                            style: e,
                            frameBorder: 0,
                            allow: "autoplay"
                        })
                    }
                }], n && c(t.prototype, n), r && c(t, r), u
            }(o.Component);
            t.default = v, y(v, "displayName", "SoundCloud"), y(v, "canPlay", i.canPlay.soundcloud), y(v, "loopOnEnded", !0)
        }, 286: function (e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = function (e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" !== typeof e) return {default: e};
                var t = u();
                if (t && t.has(e)) return t.get(e);
                var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
                n.default = e, t && t.set(e, n);
                return n
            }(n(791)), a = n(135), i = n(365);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function () {
                    return e
                }, e
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function s(e, t) {
                return s = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, s(e, t)
            }

            function c(e) {
                var t = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                        }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, o = p(e);
                    if (t) {
                        var a = p(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === r(t) || "function" === typeof t)) return t;
                        return f(e)
                    }(this, n)
                }
            }

            function f(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function p(e) {
                return p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, p(e)
            }

            function d(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var h = function (e) {
                !function (e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && s(e, t)
                }(p, e);
                var t, n, r, u = c(p);

                function p() {
                    var e;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, p);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return d(f(e = u.call.apply(u, [this].concat(n))), "callPlayer", a.callPlayer), d(f(e), "duration", null), d(f(e), "currentTime", null), d(f(e), "secondsLoaded", null), d(f(e), "mute", (function () {
                        e.callPlayer("mute")
                    })), d(f(e), "unmute", (function () {
                        e.callPlayer("unmute")
                    })), d(f(e), "ref", (function (t) {
                        e.iframe = t
                    })), e
                }

                return t = p, n = [{
                    key: "componentDidMount", value: function () {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load", value: function (e) {
                        var t = this;
                        (0, a.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js", "playerjs").then((function (e) {
                            t.iframe && (t.player = new e.Player(t.iframe), t.player.setLoop(t.props.loop), t.player.on("ready", t.props.onReady), t.player.on("play", t.props.onPlay), t.player.on("pause", t.props.onPause), t.player.on("seeked", t.props.onSeek), t.player.on("ended", t.props.onEnded), t.player.on("error", t.props.onError), t.player.on("timeupdate", (function (e) {
                                var n = e.duration, r = e.seconds;
                                t.duration = n, t.currentTime = r
                            })), t.player.on("buffered", (function (e) {
                                var n = e.percent;
                                t.duration && (t.secondsLoaded = t.duration * n)
                            })), t.props.muted && t.player.mute())
                        }), this.props.onError)
                    }
                }, {
                    key: "play", value: function () {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause", value: function () {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop", value: function () {
                    }
                }, {
                    key: "seekTo", value: function (e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        this.callPlayer("setCurrentTime", e), t || this.pause()
                    }
                }, {
                    key: "setVolume", value: function (e) {
                        this.callPlayer("setVolume", 100 * e)
                    }
                }, {
                    key: "setLoop", value: function (e) {
                        this.callPlayer("setLoop", e)
                    }
                }, {
                    key: "getDuration", value: function () {
                        return this.duration
                    }
                }, {
                    key: "getCurrentTime", value: function () {
                        return this.currentTime
                    }
                }, {
                    key: "getSecondsLoaded", value: function () {
                        return this.secondsLoaded
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.props.url.match(i.MATCH_URL_STREAMABLE)[1];
                        return o.default.createElement("iframe", {
                            ref: this.ref,
                            src: "https://streamable.com/o/".concat(e),
                            frameBorder: "0",
                            scrolling: "no",
                            style: {width: "100%", height: "100%"},
                            allow: "encrypted-media; autoplay; fullscreen;"
                        })
                    }
                }], n && l(t.prototype, n), r && l(t, r), p
            }(o.Component);
            t.default = h, d(h, "displayName", "Streamable"), d(h, "canPlay", i.canPlay.streamable)
        }, 741: function (e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = function (e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" !== typeof e) return {default: e};
                var t = u();
                if (t && t.has(e)) return t.get(e);
                var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
                n.default = e, t && t.set(e, n);
                return n
            }(n(791)), a = n(135), i = n(365);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function () {
                    return e
                }, e
            }

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function c(e, t) {
                return c = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, c(e, t)
            }

            function f(e) {
                var t = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                        }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, o = d(e);
                    if (t) {
                        var a = d(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === r(t) || "function" === typeof t)) return t;
                        return p(e)
                    }(this, n)
                }
            }

            function p(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function d(e) {
                return d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, d(e)
            }

            function h(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var y = function (e) {
                !function (e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t)
                }(d, e);
                var t, n, r, u = f(d);

                function d() {
                    var e;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, d);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return h(p(e = u.call.apply(u, [this].concat(n))), "callPlayer", a.callPlayer), h(p(e), "playerID", e.props.config.playerId || "".concat("twitch-player-").concat((0, a.randomString)())), h(p(e), "mute", (function () {
                        e.callPlayer("setMuted", !0)
                    })), h(p(e), "unmute", (function () {
                        e.callPlayer("setMuted", !1)
                    })), e
                }

                return t = d, n = [{
                    key: "componentDidMount", value: function () {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load", value: function (e, t) {
                        var n = this, r = this.props, o = r.playsinline, u = r.onError, s = r.config, c = r.controls,
                            f = i.MATCH_URL_TWITCH_CHANNEL.test(e),
                            p = f ? e.match(i.MATCH_URL_TWITCH_CHANNEL)[1] : e.match(i.MATCH_URL_TWITCH_VIDEO)[1];
                        t ? f ? this.player.setChannel(p) : this.player.setVideo("v" + p) : (0, a.getSDK)("https://player.twitch.tv/js/embed/v1.js", "Twitch").then((function (t) {
                            n.player = new t.Player(n.playerID, function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? l(Object(n), !0).forEach((function (t) {
                                        h(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({
                                video: f ? "" : p,
                                channel: f ? p : "",
                                height: "100%",
                                width: "100%",
                                playsinline: o,
                                autoplay: n.props.playing,
                                muted: n.props.muted,
                                controls: !!f || c,
                                time: (0, a.parseStartTime)(e)
                            }, s.options));
                            var r = t.Player, i = r.READY, u = r.PLAYING, d = r.PAUSE, y = r.ENDED, v = r.ONLINE,
                                m = r.OFFLINE, g = r.SEEK;
                            n.player.addEventListener(i, n.props.onReady), n.player.addEventListener(u, n.props.onPlay), n.player.addEventListener(d, n.props.onPause), n.player.addEventListener(y, n.props.onEnded), n.player.addEventListener(g, n.props.onSeek), n.player.addEventListener(v, n.props.onLoaded), n.player.addEventListener(m, n.props.onLoaded)
                        }), u)
                    }
                }, {
                    key: "play", value: function () {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause", value: function () {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop", value: function () {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "seekTo", value: function (e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        this.callPlayer("seek", e), t || this.pause()
                    }
                }, {
                    key: "setVolume", value: function (e) {
                        this.callPlayer("setVolume", e)
                    }
                }, {
                    key: "getDuration", value: function () {
                        return this.callPlayer("getDuration")
                    }
                }, {
                    key: "getCurrentTime", value: function () {
                        return this.callPlayer("getCurrentTime")
                    }
                }, {
                    key: "getSecondsLoaded", value: function () {
                        return null
                    }
                }, {
                    key: "render", value: function () {
                        return o.default.createElement("div", {
                            style: {width: "100%", height: "100%"},
                            id: this.playerID
                        })
                    }
                }], n && s(t.prototype, n), r && s(t, r), d
            }(o.Component);
            t.default = y, h(y, "displayName", "Twitch"), h(y, "canPlay", i.canPlay.twitch), h(y, "loopOnEnded", !0)
        }, 561: function (e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = function (e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" !== typeof e) return {default: e};
                var t = u();
                if (t && t.has(e)) return t.get(e);
                var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
                n.default = e, t && t.set(e, n);
                return n
            }(n(791)), a = n(135), i = n(365);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function () {
                    return e
                }, e
            }

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function c(e, t) {
                return c = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, c(e, t)
            }

            function f(e) {
                var t = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                        }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, o = d(e);
                    if (t) {
                        var a = d(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === r(t) || "function" === typeof t)) return t;
                        return p(e)
                    }(this, n)
                }
            }

            function p(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function d(e) {
                return d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, d(e)
            }

            function h(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var y = function (e) {
                !function (e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t)
                }(d, e);
                var t, n, r, u = f(d);

                function d() {
                    var e;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, d);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return h(p(e = u.call.apply(u, [this].concat(n))), "callPlayer", a.callPlayer), h(p(e), "mute", (function () {
                        e.setVolume(0)
                    })), h(p(e), "unmute", (function () {
                        null !== e.props.volume && e.setVolume(e.props.volume)
                    })), h(p(e), "ref", (function (t) {
                        e.container = t
                    })), e
                }

                return t = d, n = [{
                    key: "componentDidMount", value: function () {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load", value: function (e) {
                        var t = this, n = this.props, r = n.playing, o = n.config, u = n.onError, s = n.onDuration,
                            c = e && e.match(i.MATCH_URL_VIDYARD)[1];
                        this.player && this.stop(), (0, a.getSDK)("https://play.vidyard.com/embed/v4.js", "VidyardV4", "onVidyardAPI").then((function (e) {
                            t.container && (e.api.addReadyListener((function (e, n) {
                                t.player || (t.player = n, t.player.on("ready", t.props.onReady), t.player.on("play", t.props.onPlay), t.player.on("pause", t.props.onPause), t.player.on("seek", t.props.onSeek), t.player.on("playerComplete", t.props.onEnded))
                            }), c), e.api.renderPlayer(function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? l(Object(n), !0).forEach((function (t) {
                                        h(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({
                                uuid: c,
                                container: t.container,
                                autoplay: r ? 1 : 0
                            }, o.options)), e.api.getPlayerMetadata(c).then((function (e) {
                                t.duration = e.length_in_seconds, s(e.length_in_seconds)
                            })))
                        }), u)
                    }
                }, {
                    key: "play", value: function () {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause", value: function () {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop", value: function () {
                        window.VidyardV4.api.destroyPlayer(this.player)
                    }
                }, {
                    key: "seekTo", value: function (e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        this.callPlayer("seek", e), t || this.pause()
                    }
                }, {
                    key: "setVolume", value: function (e) {
                        this.callPlayer("setVolume", e)
                    }
                }, {
                    key: "setPlaybackRate", value: function (e) {
                        this.callPlayer("setPlaybackSpeed", e)
                    }
                }, {
                    key: "getDuration", value: function () {
                        return this.duration
                    }
                }, {
                    key: "getCurrentTime", value: function () {
                        return this.callPlayer("currentTime")
                    }
                }, {
                    key: "getSecondsLoaded", value: function () {
                        return null
                    }
                }, {
                    key: "render", value: function () {
                        var e = {width: "100%", height: "100%", display: this.props.display};
                        return o.default.createElement("div", {style: e}, o.default.createElement("div", {ref: this.ref}))
                    }
                }], n && s(t.prototype, n), r && s(t, r), d
            }(o.Component);
            t.default = y, h(y, "displayName", "Vidyard"), h(y, "canPlay", i.canPlay.vidyard)
        }, 600: function (e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = function (e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" !== typeof e) return {default: e};
                var t = u();
                if (t && t.has(e)) return t.get(e);
                var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
                n.default = e, t && t.set(e, n);
                return n
            }(n(791)), a = n(135), i = n(365);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function () {
                    return e
                }, e
            }

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function c(e, t) {
                return c = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, c(e, t)
            }

            function f(e) {
                var t = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                        }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, o = d(e);
                    if (t) {
                        var a = d(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === r(t) || "function" === typeof t)) return t;
                        return p(e)
                    }(this, n)
                }
            }

            function p(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function d(e) {
                return d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, d(e)
            }

            function h(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var y = function (e) {
                return e.replace("/manage/videos", "")
            }, v = function (e) {
                !function (e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t)
                }(u, e);
                var t, n, r, i = f(u);

                function u() {
                    var e;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, u);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return h(p(e = i.call.apply(i, [this].concat(n))), "callPlayer", a.callPlayer), h(p(e), "duration", null), h(p(e), "currentTime", null), h(p(e), "secondsLoaded", null), h(p(e), "mute", (function () {
                        e.setMuted(!0)
                    })), h(p(e), "unmute", (function () {
                        e.setMuted(!1)
                    })), h(p(e), "ref", (function (t) {
                        e.container = t
                    })), e
                }

                return t = u, n = [{
                    key: "componentDidMount", value: function () {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load", value: function (e) {
                        var t = this;
                        this.duration = null, (0, a.getSDK)("https://player.vimeo.com/api/player.js", "Vimeo").then((function (n) {
                            if (t.container) {
                                var r = t.props.config, o = r.playerOptions, a = r.title;
                                t.player = new n.Player(t.container, function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? l(Object(n), !0).forEach((function (t) {
                                            h(e, t, n[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        }))
                                    }
                                    return e
                                }({
                                    url: y(e),
                                    autoplay: t.props.playing,
                                    muted: t.props.muted,
                                    loop: t.props.loop,
                                    playsinline: t.props.playsinline,
                                    controls: t.props.controls
                                }, o)), t.player.ready().then((function () {
                                    var e = t.container.querySelector("iframe");
                                    e.style.width = "100%", e.style.height = "100%", a && (e.title = a)
                                })).catch(t.props.onError), t.player.on("loaded", (function () {
                                    t.props.onReady(), t.refreshDuration()
                                })), t.player.on("play", (function () {
                                    t.props.onPlay(), t.refreshDuration()
                                })), t.player.on("pause", t.props.onPause), t.player.on("seeked", (function (e) {
                                    return t.props.onSeek(e.seconds)
                                })), t.player.on("ended", t.props.onEnded), t.player.on("error", t.props.onError), t.player.on("timeupdate", (function (e) {
                                    var n = e.seconds;
                                    t.currentTime = n
                                })), t.player.on("progress", (function (e) {
                                    var n = e.seconds;
                                    t.secondsLoaded = n
                                })), t.player.on("bufferstart", t.props.onBuffer), t.player.on("bufferend", t.props.onBufferEnd), t.player.on("playbackratechange", (function (e) {
                                    return t.props.onPlaybackRateChange(e.playbackRate)
                                }))
                            }
                        }), this.props.onError)
                    }
                }, {
                    key: "refreshDuration", value: function () {
                        var e = this;
                        this.player.getDuration().then((function (t) {
                            e.duration = t
                        }))
                    }
                }, {
                    key: "play", value: function () {
                        var e = this.callPlayer("play");
                        e && e.catch(this.props.onError)
                    }
                }, {
                    key: "pause", value: function () {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop", value: function () {
                        this.callPlayer("unload")
                    }
                }, {
                    key: "seekTo", value: function (e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        this.callPlayer("setCurrentTime", e), t || this.pause()
                    }
                }, {
                    key: "setVolume", value: function (e) {
                        this.callPlayer("setVolume", e)
                    }
                }, {
                    key: "setMuted", value: function (e) {
                        this.callPlayer("setMuted", e)
                    }
                }, {
                    key: "setLoop", value: function (e) {
                        this.callPlayer("setLoop", e)
                    }
                }, {
                    key: "setPlaybackRate", value: function (e) {
                        this.callPlayer("setPlaybackRate", e)
                    }
                }, {
                    key: "getDuration", value: function () {
                        return this.duration
                    }
                }, {
                    key: "getCurrentTime", value: function () {
                        return this.currentTime
                    }
                }, {
                    key: "getSecondsLoaded", value: function () {
                        return this.secondsLoaded
                    }
                }, {
                    key: "render", value: function () {
                        var e = {width: "100%", height: "100%", overflow: "hidden", display: this.props.display};
                        return o.default.createElement("div", {key: this.props.url, ref: this.ref, style: e})
                    }
                }], n && s(t.prototype, n), r && s(t, r), u
            }(o.Component);
            t.default = v, h(v, "displayName", "Vimeo"), h(v, "canPlay", i.canPlay.vimeo), h(v, "forceLoad", !0)
        }, 67: function (e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = function (e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" !== typeof e) return {default: e};
                var t = u();
                if (t && t.has(e)) return t.get(e);
                var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
                n.default = e, t && t.set(e, n);
                return n
            }(n(791)), a = n(135), i = n(365);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function () {
                    return e
                }, e
            }

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function (t) {
                        y(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t) {
                return f = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, f(e, t)
            }

            function p(e) {
                var t = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                        }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, o = h(e);
                    if (t) {
                        var a = h(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === r(t) || "function" === typeof t)) return t;
                        return d(e)
                    }(this, n)
                }
            }

            function d(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e) {
                return h = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, h(e)
            }

            function y(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var v = function (e) {
                !function (e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && f(e, t)
                }(l, e);
                var t, n, r, u = p(l);

                function l() {
                    var e;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return y(d(e = u.call.apply(u, [this].concat(n))), "callPlayer", a.callPlayer), y(d(e), "playerID", e.props.config.playerId || "".concat("wistia-player-").concat((0, a.randomString)())), y(d(e), "onPlay", (function () {
                        var t;
                        return (t = e.props).onPlay.apply(t, arguments)
                    })), y(d(e), "onPause", (function () {
                        var t;
                        return (t = e.props).onPause.apply(t, arguments)
                    })), y(d(e), "onSeek", (function () {
                        var t;
                        return (t = e.props).onSeek.apply(t, arguments)
                    })), y(d(e), "onEnded", (function () {
                        var t;
                        return (t = e.props).onEnded.apply(t, arguments)
                    })), y(d(e), "onPlaybackRateChange", (function () {
                        var t;
                        return (t = e.props).onPlaybackRateChange.apply(t, arguments)
                    })), y(d(e), "mute", (function () {
                        e.callPlayer("mute")
                    })), y(d(e), "unmute", (function () {
                        e.callPlayer("unmute")
                    })), e
                }

                return t = l, n = [{
                    key: "componentDidMount", value: function () {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load", value: function (e) {
                        var t = this, n = this.props, r = n.playing, o = n.muted, i = n.controls, u = n.onReady,
                            l = n.config, c = n.onError;
                        (0, a.getSDK)("https://fast.wistia.com/assets/external/E-v1.js", "Wistia").then((function (e) {
                            l.customControls && l.customControls.forEach((function (t) {
                                return e.defineControl(t)
                            })), window._wq = window._wq || [], window._wq.push({
                                id: t.playerID,
                                options: s({
                                    autoPlay: r,
                                    silentAutoPlay: "allow",
                                    muted: o,
                                    controlsVisibleOnLoad: i,
                                    fullscreenButton: i,
                                    playbar: i,
                                    playbackRateControl: i,
                                    qualityControl: i,
                                    volumeControl: i,
                                    settingsControl: i,
                                    smallPlayButton: i
                                }, l.options),
                                onReady: function (e) {
                                    t.player = e, t.unbind(), t.player.bind("play", t.onPlay), t.player.bind("pause", t.onPause), t.player.bind("seek", t.onSeek), t.player.bind("end", t.onEnded), t.player.bind("playbackratechange", t.onPlaybackRateChange), u()
                                }
                            })
                        }), c)
                    }
                }, {
                    key: "unbind", value: function () {
                        this.player.unbind("play", this.onPlay), this.player.unbind("pause", this.onPause), this.player.unbind("seek", this.onSeek), this.player.unbind("end", this.onEnded), this.player.unbind("playbackratechange", this.onPlaybackRateChange)
                    }
                }, {
                    key: "play", value: function () {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause", value: function () {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop", value: function () {
                        this.unbind(), this.callPlayer("remove")
                    }
                }, {
                    key: "seekTo", value: function (e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        this.callPlayer("time", e), t || this.pause()
                    }
                }, {
                    key: "setVolume", value: function (e) {
                        this.callPlayer("volume", e)
                    }
                }, {
                    key: "setPlaybackRate", value: function (e) {
                        this.callPlayer("playbackRate", e)
                    }
                }, {
                    key: "getDuration", value: function () {
                        return this.callPlayer("duration")
                    }
                }, {
                    key: "getCurrentTime", value: function () {
                        return this.callPlayer("time")
                    }
                }, {
                    key: "getSecondsLoaded", value: function () {
                        return null
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.props.url, t = e && e.match(i.MATCH_URL_WISTIA)[1],
                            n = "wistia_embed wistia_async_".concat(t);
                        return o.default.createElement("div", {
                            id: this.playerID,
                            key: t,
                            className: n,
                            style: {width: "100%", height: "100%"}
                        })
                    }
                }], n && c(t.prototype, n), r && c(t, r), l
            }(o.Component);
            t.default = v, y(v, "displayName", "Wistia"), y(v, "canPlay", i.canPlay.wistia), y(v, "loopOnEnded", !0)
        }, 322: function (e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var o = function (e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" !== typeof e) return {default: e};
                var t = u();
                if (t && t.has(e)) return t.get(e);
                var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a]
                }
                n.default = e, t && t.set(e, n);
                return n
            }(n(791)), a = n(135), i = n(365);

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function () {
                    return e
                }, e
            }

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function (t) {
                        m(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function c(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [], r = !0, o = !1, a = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0) ;
                    } catch (l) {
                        o = !0, a = l
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function d(e, t) {
                return d = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                }, d(e, t)
            }

            function h(e) {
                var t = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                        }))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, o = v(e);
                    if (t) {
                        var a = v(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return function (e, t) {
                        if (t && ("object" === r(t) || "function" === typeof t)) return t;
                        return y(e)
                    }(this, n)
                }
            }

            function y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v(e) {
                return v = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, v(e)
            }

            function m(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var g = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/, b = /user\/([a-zA-Z0-9_-]+)\/?/,
                w = /youtube-nocookie\.com/, k = function (e) {
                    !function (e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && d(e, t)
                    }(l, e);
                    var t, n, r, u = h(l);

                    function l() {
                        var e;
                        !function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l);
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return m(y(e = u.call.apply(u, [this].concat(n))), "callPlayer", a.callPlayer), m(y(e), "parsePlaylist", (function (t) {
                            return t instanceof Array ? {
                                listType: "playlist",
                                playlist: t.map(e.getID).join(",")
                            } : g.test(t) ? {
                                listType: "playlist",
                                list: c(t.match(g), 2)[1].replace(/^UC/, "UU")
                            } : b.test(t) ? {listType: "user_uploads", list: c(t.match(b), 2)[1]} : {}
                        })), m(y(e), "onStateChange", (function (t) {
                            var n = t.data, r = e.props, o = r.onPlay, a = r.onPause, i = r.onBuffer, u = r.onBufferEnd,
                                l = r.onEnded, s = r.onReady, c = r.loop, f = r.config, p = f.playerVars, d = f.onUnstarted,
                                h = window.YT.PlayerState, y = h.UNSTARTED, v = h.PLAYING, m = h.PAUSED, g = h.BUFFERING,
                                b = h.ENDED, w = h.CUED;
                            if (n === y && d(), n === v && (o(), u()), n === m && a(), n === g && i(), n === b) {
                                var k = !!e.callPlayer("getPlaylist");
                                c && !k && (p.start ? e.seekTo(p.start) : e.play()), l()
                            }
                            n === w && s()
                        })), m(y(e), "mute", (function () {
                            e.callPlayer("mute")
                        })), m(y(e), "unmute", (function () {
                            e.callPlayer("unMute")
                        })), m(y(e), "ref", (function (t) {
                            e.container = t
                        })), e
                    }

                    return t = l, n = [{
                        key: "componentDidMount", value: function () {
                            this.props.onMount && this.props.onMount(this)
                        }
                    }, {
                        key: "getID", value: function (e) {
                            return !e || e instanceof Array || g.test(e) ? null : e.match(i.MATCH_URL_YOUTUBE)[1]
                        }
                    }, {
                        key: "load", value: function (e, t) {
                            var n = this, r = this.props, o = r.playing, i = r.muted, u = r.playsinline, l = r.controls,
                                c = r.loop, f = r.config, p = r.onError, d = f.playerVars, h = f.embedOptions,
                                y = this.getID(e);
                            if (t) return g.test(e) || b.test(e) || e instanceof Array ? void this.player.loadPlaylist(this.parsePlaylist(e)) : void this.player.cueVideoById({
                                videoId: y,
                                startSeconds: (0, a.parseStartTime)(e) || d.start,
                                endSeconds: (0, a.parseEndTime)(e) || d.end
                            });
                            (0, a.getSDK)("https://www.youtube.com/iframe_api", "YT", "onYouTubeIframeAPIReady", (function (e) {
                                return e.loaded
                            })).then((function (t) {
                                n.container && (n.player = new t.Player(n.container, s({
                                    width: "100%",
                                    height: "100%",
                                    videoId: y,
                                    playerVars: s(s({
                                        autoplay: o ? 1 : 0,
                                        mute: i ? 1 : 0,
                                        controls: l ? 1 : 0,
                                        start: (0, a.parseStartTime)(e),
                                        end: (0, a.parseEndTime)(e),
                                        origin: window.location.origin,
                                        playsinline: u ? 1 : 0
                                    }, n.parsePlaylist(e)), d),
                                    events: {
                                        onReady: function () {
                                            c && n.player.setLoop(!0), n.props.onReady()
                                        }, onPlaybackRateChange: function (e) {
                                            return n.props.onPlaybackRateChange(e.data)
                                        }, onPlaybackQualityChange: function (e) {
                                            return n.props.onPlaybackQualityChange(e)
                                        }, onStateChange: n.onStateChange, onError: function (e) {
                                            return p(e.data)
                                        }
                                    },
                                    host: w.test(e) ? "https://www.youtube-nocookie.com" : void 0
                                }, h)))
                            }), p), h.events && console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause")
                        }
                    }, {
                        key: "play", value: function () {
                            this.callPlayer("playVideo")
                        }
                    }, {
                        key: "pause", value: function () {
                            this.callPlayer("pauseVideo")
                        }
                    }, {
                        key: "stop", value: function () {
                            document.body.contains(this.callPlayer("getIframe")) && this.callPlayer("stopVideo")
                        }
                    }, {
                        key: "seekTo", value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            this.callPlayer("seekTo", e), t || this.props.playing || this.pause()
                        }
                    }, {
                        key: "setVolume", value: function (e) {
                            this.callPlayer("setVolume", 100 * e)
                        }
                    }, {
                        key: "setPlaybackRate", value: function (e) {
                            this.callPlayer("setPlaybackRate", e)
                        }
                    }, {
                        key: "setLoop", value: function (e) {
                            this.callPlayer("setLoop", e)
                        }
                    }, {
                        key: "getDuration", value: function () {
                            return this.callPlayer("getDuration")
                        }
                    }, {
                        key: "getCurrentTime", value: function () {
                            return this.callPlayer("getCurrentTime")
                        }
                    }, {
                        key: "getSecondsLoaded", value: function () {
                            return this.callPlayer("getVideoLoadedFraction") * this.getDuration()
                        }
                    }, {
                        key: "render", value: function () {
                            var e = {width: "100%", height: "100%", display: this.props.display};
                            return o.default.createElement("div", {style: e}, o.default.createElement("div", {ref: this.ref}))
                        }
                    }], n && p(t.prototype, n), r && p(t, r), l
                }(o.Component);
            t.default = k, m(k, "displayName", "YouTube"), m(k, "canPlay", i.canPlay.youtube)
        }, 687: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
            var r = n(791), o = n(135), a = n(365);

            function i(e) {
                return i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, i(e)
            }

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function () {
                    return e
                }, e
            }

            function l(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== i(e) && "function" !== typeof e) return {default: e};
                var t = u();
                if (t && t.has(e)) return t.get(e);
                var n = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
                return n.default = e, t && t.set(e, n), n
            }

            var s = [{
                key: "youtube",
                name: "YouTube",
                canPlay: a.canPlay.youtube,
                lazyPlayer: (0, r.lazy)((function () {
                    return Promise.resolve().then((function () {
                        return l(n(322))
                    }))
                }))
            }, {
                key: "soundcloud",
                name: "SoundCloud",
                canPlay: a.canPlay.soundcloud,
                lazyPlayer: (0, r.lazy)((function () {
                    return Promise.resolve().then((function () {
                        return l(n(801))
                    }))
                }))
            }, {
                key: "vimeo", name: "Vimeo", canPlay: a.canPlay.vimeo, lazyPlayer: (0, r.lazy)((function () {
                    return Promise.resolve().then((function () {
                        return l(n(600))
                    }))
                }))
            }, {
                key: "facebook", name: "Facebook", canPlay: a.canPlay.facebook, lazyPlayer: (0, r.lazy)((function () {
                    return Promise.resolve().then((function () {
                        return l(n(793))
                    }))
                }))
            }, {
                key: "streamable",
                name: "Streamable",
                canPlay: a.canPlay.streamable,
                lazyPlayer: (0, r.lazy)((function () {
                    return Promise.resolve().then((function () {
                        return l(n(286))
                    }))
                }))
            }, {
                key: "wistia", name: "Wistia", canPlay: a.canPlay.wistia, lazyPlayer: (0, r.lazy)((function () {
                    return Promise.resolve().then((function () {
                        return l(n(67))
                    }))
                }))
            }, {
                key: "twitch", name: "Twitch", canPlay: a.canPlay.twitch, lazyPlayer: (0, r.lazy)((function () {
                    return Promise.resolve().then((function () {
                        return l(n(741))
                    }))
                }))
            }, {
                key: "dailymotion",
                name: "DailyMotion",
                canPlay: a.canPlay.dailymotion,
                lazyPlayer: (0, r.lazy)((function () {
                    return Promise.resolve().then((function () {
                        return l(n(303))
                    }))
                }))
            }, {
                key: "mixcloud", name: "Mixcloud", canPlay: a.canPlay.mixcloud, lazyPlayer: (0, r.lazy)((function () {
                    return Promise.resolve().then((function () {
                        return l(n(732))
                    }))
                }))
            }, {
                key: "vidyard", name: "Vidyard", canPlay: a.canPlay.vidyard, lazyPlayer: (0, r.lazy)((function () {
                    return Promise.resolve().then((function () {
                        return l(n(561))
                    }))
                }))
            }, {
                key: "kaltura", name: "Kaltura", canPlay: a.canPlay.kaltura, lazyPlayer: (0, r.lazy)((function () {
                    return Promise.resolve().then((function () {
                        return l(n(332))
                    }))
                }))
            }, {
                key: "file", name: "FilePlayer", canPlay: a.canPlay.file, canEnablePIP: function (e) {
                    return a.canPlay.file(e) && (document.pictureInPictureEnabled || (0, o.supportsWebKitPresentationMode)()) && !a.AUDIO_EXTENSIONS.test(e)
                }, lazyPlayer: (0, r.lazy)((function () {
                    return Promise.resolve().then((function () {
                        return l(n(997))
                    }))
                }))
            }];
            t.default = s
        }, 174: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.defaultProps = t.propTypes = void 0;
            var r, o = (r = n(7)) && r.__esModule ? r : {default: r};
            var a = o.default.string, i = o.default.bool, u = o.default.number, l = o.default.array,
                s = o.default.oneOfType, c = o.default.shape, f = o.default.object, p = o.default.func,
                d = o.default.node, h = {
                    url: s([a, l, f]),
                    playing: i,
                    loop: i,
                    controls: i,
                    volume: u,
                    muted: i,
                    playbackRate: u,
                    width: s([a, u]),
                    height: s([a, u]),
                    style: f,
                    progressInterval: u,
                    playsinline: i,
                    pip: i,
                    stopOnUnmount: i,
                    light: s([i, a, f]),
                    playIcon: d,
                    previewTabIndex: u,
                    fallback: d,
                    oEmbedUrl: a,
                    wrapper: s([a, p, c({render: p.isRequired})]),
                    config: c({
                        soundcloud: c({options: f}),
                        youtube: c({playerVars: f, embedOptions: f, onUnstarted: p}),
                        facebook: c({appId: a, version: a, playerId: a, attributes: f}),
                        dailymotion: c({params: f}),
                        vimeo: c({playerOptions: f, title: a}),
                        file: c({
                            attributes: f,
                            tracks: l,
                            forceVideo: i,
                            forceAudio: i,
                            forceHLS: i,
                            forceSafariHLS: i,
                            forceDisableHls: i,
                            forceDASH: i,
                            forceFLV: i,
                            hlsOptions: f,
                            hlsVersion: a,
                            dashVersion: a,
                            flvVersion: a
                        }),
                        wistia: c({options: f, playerId: a, customControls: l}),
                        mixcloud: c({options: f}),
                        twitch: c({options: f, playerId: a}),
                        vidyard: c({options: f})
                    }),
                    onReady: p,
                    onStart: p,
                    onPlay: p,
                    onPause: p,
                    onBuffer: p,
                    onBufferEnd: p,
                    onEnded: p,
                    onError: p,
                    onDuration: p,
                    onSeek: p,
                    onPlaybackRateChange: p,
                    onPlaybackQualityChange: p,
                    onProgress: p,
                    onClickPreview: p,
                    onEnablePIP: p,
                    onDisablePIP: p
                };
            t.propTypes = h;
            var y = function () {
            }, v = {
                playing: !1,
                loop: !1,
                controls: !1,
                volume: null,
                muted: !1,
                playbackRate: 1,
                width: "640px",
                height: "360px",
                style: {},
                progressInterval: 1e3,
                playsinline: !1,
                pip: !1,
                stopOnUnmount: !0,
                light: !1,
                fallback: null,
                wrapper: "div",
                previewTabIndex: 0,
                oEmbedUrl: "https://noembed.com/embed?url={url}",
                config: {
                    soundcloud: {
                        options: {
                            visual: !0,
                            buying: !1,
                            liking: !1,
                            download: !1,
                            sharing: !1,
                            show_comments: !1,
                            show_playcount: !1
                        }
                    },
                    youtube: {
                        playerVars: {playsinline: 1, showinfo: 0, rel: 0, iv_load_policy: 3, modestbranding: 1},
                        embedOptions: {},
                        onUnstarted: y
                    },
                    facebook: {appId: "1309697205772819", version: "v3.3", playerId: null, attributes: {}},
                    dailymotion: {params: {api: 1, "endscreen-enable": !1}},
                    vimeo: {playerOptions: {autopause: !1, byline: !1, portrait: !1, title: !1}, title: null},
                    file: {
                        attributes: {},
                        tracks: [],
                        forceVideo: !1,
                        forceAudio: !1,
                        forceHLS: !1,
                        forceDASH: !1,
                        forceFLV: !1,
                        hlsOptions: {},
                        hlsVersion: "1.1.4",
                        dashVersion: "3.1.3",
                        flvVersion: "1.5.0",
                        forceDisableHls: !1
                    },
                    wistia: {options: {}, playerId: null, customControls: null},
                    mixcloud: {options: {hide_cover: 1}},
                    twitch: {options: {}, playerId: null},
                    vidyard: {options: {}}
                },
                onReady: y,
                onStart: y,
                onPlay: y,
                onPause: y,
                onBuffer: y,
                onBufferEnd: y,
                onEnded: y,
                onError: y,
                onDuration: y,
                onSeek: y,
                onPlaybackRateChange: y,
                onPlaybackQualityChange: y,
                onProgress: y,
                onClickPreview: y,
                onEnablePIP: y,
                onDisablePIP: y
            };
            t.defaultProps = v
        }, 135: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0}), t.parseStartTime = function (e) {
                return p(e, l)
            }, t.parseEndTime = function (e) {
                return p(e, s)
            }, t.randomString = function () {
                return Math.random().toString(36).substr(2, 5)
            }, t.queryString = function (e) {
                return Object.keys(e).map((function (t) {
                    return "".concat(t, "=").concat(e[t])
                })).join("&")
            }, t.getSDK = function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {
                        return !0
                    }, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.default, i = d(t);
                if (i && o(i)) return Promise.resolve(i);
                return new Promise((function (r, o) {
                    if (h[e]) h[e].push({resolve: r, reject: o}); else {
                        h[e] = [{resolve: r, reject: o}];
                        var i = function (t) {
                            h[e].forEach((function (e) {
                                return e.resolve(t)
                            }))
                        };
                        if (n) {
                            var u = window[n];
                            window[n] = function () {
                                u && u(), i(d(t))
                            }
                        }
                        a(e, (function (r) {
                            r ? (h[e].forEach((function (e) {
                                return e.reject(r)
                            })), h[e] = null) : n || i(d(t))
                        }))
                    }
                }))
            }, t.getConfig = function (e, t) {
                return (0, o.default)(t.config, e.config)
            }, t.omit = function (e) {
                for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                for (var a = (t = []).concat.apply(t, r), i = {}, u = Object.keys(e), l = 0, s = u; l < s.length; l++) {
                    var c = s[l];
                    -1 === a.indexOf(c) && (i[c] = e[c])
                }
                return i
            }, t.callPlayer = function (e) {
                var t;
                if (!this.player || !this.player[e]) {
                    var n = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(e, "%c \u2013 ");
                    return this.player ? this.player[e] || (n += "The method was not available") : n += "The player was not available", console.warn(n, "font-weight: bold", ""), null
                }
                for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
                return (t = this.player)[e].apply(t, o)
            }, t.isMediaStream = function (e) {
                return "undefined" !== typeof window && "undefined" !== typeof window.MediaStream && e instanceof window.MediaStream
            }, t.isBlobUrl = function (e) {
                return /^blob:/.test(e)
            }, t.supportsWebKitPresentationMode = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.createElement("video"),
                    t = !1 === /iPhone|iPod/.test(navigator.userAgent);
                return e.webkitSupportsPresentationMode && "function" === typeof e.webkitSetPresentationMode && t
            };
            var r = a(n(102)), o = a(n(948));

            function a(e) {
                return e && e.__esModule ? e : {default: e}
            }

            function i(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [], r = !0, o = !1, a = void 0;
                    try {
                        for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0) ;
                    } catch (l) {
                        o = !0, a = l
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || function (e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            var l = /[?&#](?:start|t)=([0-9hms]+)/, s = /[?&#]end=([0-9hms]+)/, c = /(\d+)(h|m|s)/g, f = /^\d+$/;

            function p(e, t) {
                if (!(e instanceof Array)) {
                    var n = e.match(t);
                    if (n) {
                        var r = n[1];
                        if (r.match(c)) return function (e) {
                            var t = 0, n = c.exec(e);
                            for (; null !== n;) {
                                var r = i(n, 3), o = r[1], a = r[2];
                                "h" === a && (t += 60 * parseInt(o, 10) * 60), "m" === a && (t += 60 * parseInt(o, 10)), "s" === a && (t += parseInt(o, 10)), n = c.exec(e)
                            }
                            return t
                        }(r);
                        if (f.test(r)) return parseInt(r)
                    }
                }
            }

            function d(e) {
                return window[e] ? window[e] : window.exports && window.exports[e] ? window.exports[e] : window.module && window.module.exports && window.module.exports[e] ? window.module.exports[e] : null
            }

            var h = {}
        }, 374: function (e, t, n) {
            "use strict";
            var r = n(791), o = Symbol.for("react.element"), a = Symbol.for("react.fragment"),
                i = Object.prototype.hasOwnProperty,
                u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                l = {key: !0, ref: !0, __self: !0, __source: !0};

            function s(e, t, n) {
                var r, a = {}, s = null, c = null;
                for (r in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t) i.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
                if (e && e.defaultProps) for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
                return {$$typeof: o, type: e, key: s, ref: c, props: a, _owner: u.current}
            }

            t.jsx = s, t.jsxs = s
        }, 117: function (e, t) {
            "use strict";
            var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"),
                a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), u = Symbol.for("react.provider"),
                l = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"),
                f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), d = Symbol.iterator;
            var h = {
                isMounted: function () {
                    return !1
                }, enqueueForceUpdate: function () {
                }, enqueueReplaceState: function () {
                }, enqueueSetState: function () {
                }
            }, y = Object.assign, v = {};

            function m(e, t, n) {
                this.props = e, this.context = t, this.refs = v, this.updater = n || h
            }

            function g() {
            }

            function b(e, t, n) {
                this.props = e, this.context = t, this.refs = v, this.updater = n || h
            }

            m.prototype.isReactComponent = {}, m.prototype.setState = function (e, t) {
                if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }, m.prototype.forceUpdate = function (e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, g.prototype = m.prototype;
            var w = b.prototype = new g;
            w.constructor = b, y(w, m.prototype), w.isPureReactComponent = !0;
            var k = Array.isArray, P = Object.prototype.hasOwnProperty, S = {current: null},
                O = {key: !0, ref: !0, __self: !0, __source: !0};

            function E(e, t, r) {
                var o, a = {}, i = null, u = null;
                if (null != t) for (o in void 0 !== t.ref && (u = t.ref), void 0 !== t.key && (i = "" + t.key), t) P.call(t, o) && !O.hasOwnProperty(o) && (a[o] = t[o]);
                var l = arguments.length - 2;
                if (1 === l) a.children = r; else if (1 < l) {
                    for (var s = Array(l), c = 0; c < l; c++) s[c] = arguments[c + 2];
                    a.children = s
                }
                if (e && e.defaultProps) for (o in l = e.defaultProps) void 0 === a[o] && (a[o] = l[o]);
                return {$$typeof: n, type: e, key: i, ref: u, props: a, _owner: S.current}
            }

            function _(e) {
                return "object" === typeof e && null !== e && e.$$typeof === n
            }

            var C = /\/+/g;

            function x(e, t) {
                return "object" === typeof e && null !== e && null != e.key ? function (e) {
                    var t = {"=": "=0", ":": "=2"};
                    return "$" + e.replace(/[=:]/g, (function (e) {
                        return t[e]
                    }))
                }("" + e.key) : t.toString(36)
            }

            function j(e, t, o, a, i) {
                var u = typeof e;
                "undefined" !== u && "boolean" !== u || (e = null);
                var l = !1;
                if (null === e) l = !0; else switch (u) {
                    case"string":
                    case"number":
                        l = !0;
                        break;
                    case"object":
                        switch (e.$$typeof) {
                            case n:
                            case r:
                                l = !0
                        }
                }
                if (l) return i = i(l = e), e = "" === a ? "." + x(l, 0) : a, k(i) ? (o = "", null != e && (o = e.replace(C, "$&/") + "/"), j(i, t, o, "", (function (e) {
                    return e
                }))) : null != i && (_(i) && (i = function (e, t) {
                    return {$$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
                }(i, o + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(C, "$&/") + "/") + e)), t.push(i)), 1;
                if (l = 0, a = "" === a ? "." : a + ":", k(e)) for (var s = 0; s < e.length; s++) {
                    var c = a + x(u = e[s], s);
                    l += j(u, t, o, c, i)
                } else if (c = function (e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof (e = d && e[d] || e["@@iterator"]) ? e : null
                }(e), "function" === typeof c) for (e = c.call(e), s = 0; !(u = e.next()).done;) l += j(u = u.value, t, o, c = a + x(u, s++), i); else if ("object" === u) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return l
            }

            function T(e, t, n) {
                if (null == e) return e;
                var r = [], o = 0;
                return j(e, r, "", "", (function (e) {
                    return t.call(n, e, o++)
                })), r
            }

            function R(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()).then((function (t) {
                        0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                    }), (function (t) {
                        0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                    })), -1 === e._status && (e._status = 0, e._result = t)
                }
                if (1 === e._status) return e._result.default;
                throw e._result
            }

            var L = {current: null}, D = {transition: null},
                N = {ReactCurrentDispatcher: L, ReactCurrentBatchConfig: D, ReactCurrentOwner: S};
            t.Children = {
                map: T, forEach: function (e, t, n) {
                    T(e, (function () {
                        t.apply(this, arguments)
                    }), n)
                }, count: function (e) {
                    var t = 0;
                    return T(e, (function () {
                        t++
                    })), t
                }, toArray: function (e) {
                    return T(e, (function (e) {
                        return e
                    })) || []
                }, only: function (e) {
                    if (!_(e)) throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            }, t.Component = m, t.Fragment = o, t.Profiler = i, t.PureComponent = b, t.StrictMode = a, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N, t.cloneElement = function (e, t, r) {
                if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var o = y({}, e.props), a = e.key, i = e.ref, u = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (i = t.ref, u = S.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
                    for (s in t) P.call(t, s) && !O.hasOwnProperty(s) && (o[s] = void 0 === t[s] && void 0 !== l ? l[s] : t[s])
                }
                var s = arguments.length - 2;
                if (1 === s) o.children = r; else if (1 < s) {
                    l = Array(s);
                    for (var c = 0; c < s; c++) l[c] = arguments[c + 2];
                    o.children = l
                }
                return {$$typeof: n, type: e.type, key: a, ref: i, props: o, _owner: u}
            }, t.createContext = function (e) {
                return (e = {
                    $$typeof: l,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {$$typeof: u, _context: e}, e.Consumer = e
            }, t.createElement = E, t.createFactory = function (e) {
                var t = E.bind(null, e);
                return t.type = e, t
            }, t.createRef = function () {
                return {current: null}
            }, t.forwardRef = function (e) {
                return {$$typeof: s, render: e}
            }, t.isValidElement = _, t.lazy = function (e) {
                return {$$typeof: p, _payload: {_status: -1, _result: e}, _init: R}
            }, t.memo = function (e, t) {
                return {$$typeof: f, type: e, compare: void 0 === t ? null : t}
            }, t.startTransition = function (e) {
                var t = D.transition;
                D.transition = {};
                try {
                    e()
                } finally {
                    D.transition = t
                }
            }, t.unstable_act = function () {
                throw Error("act(...) is not supported in production builds of React.")
            }, t.useCallback = function (e, t) {
                return L.current.useCallback(e, t)
            }, t.useContext = function (e) {
                return L.current.useContext(e)
            }, t.useDebugValue = function () {
            }, t.useDeferredValue = function (e) {
                return L.current.useDeferredValue(e)
            }, t.useEffect = function (e, t) {
                return L.current.useEffect(e, t)
            }, t.useId = function () {
                return L.current.useId()
            }, t.useImperativeHandle = function (e, t, n) {
                return L.current.useImperativeHandle(e, t, n)
            }, t.useInsertionEffect = function (e, t) {
                return L.current.useInsertionEffect(e, t)
            }, t.useLayoutEffect = function (e, t) {
                return L.current.useLayoutEffect(e, t)
            }, t.useMemo = function (e, t) {
                return L.current.useMemo(e, t)
            }, t.useReducer = function (e, t, n) {
                return L.current.useReducer(e, t, n)
            }, t.useRef = function (e) {
                return L.current.useRef(e)
            }, t.useState = function (e) {
                return L.current.useState(e)
            }, t.useSyncExternalStore = function (e, t, n) {
                return L.current.useSyncExternalStore(e, t, n)
            }, t.useTransition = function () {
                return L.current.useTransition()
            }, t.version = "18.2.0"
        }, 791: function (e, t, n) {
            "use strict";
            e.exports = n(117)
        }, 184: function (e, t, n) {
            "use strict";
            e.exports = n(374)
        }, 813: function (e, t) {
            "use strict";

            function n(e, t) {
                var n = e.length;
                e.push(t);
                e:for (; 0 < n;) {
                    var r = n - 1 >>> 1, o = e[r];
                    if (!(0 < a(o, t))) break e;
                    e[r] = t, e[n] = o, n = r
                }
            }

            function r(e) {
                return 0 === e.length ? null : e[0]
            }

            function o(e) {
                if (0 === e.length) return null;
                var t = e[0], n = e.pop();
                if (n !== t) {
                    e[0] = n;
                    e:for (var r = 0, o = e.length, i = o >>> 1; r < i;) {
                        var u = 2 * (r + 1) - 1, l = e[u], s = u + 1, c = e[s];
                        if (0 > a(l, n)) s < o && 0 > a(c, l) ? (e[r] = c, e[s] = n, r = s) : (e[r] = l, e[u] = n, r = u); else {
                            if (!(s < o && 0 > a(c, n))) break e;
                            e[r] = c, e[s] = n, r = s
                        }
                    }
                }
                return t
            }

            function a(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }

            if ("object" === typeof performance && "function" === typeof performance.now) {
                var i = performance;
                t.unstable_now = function () {
                    return i.now()
                }
            } else {
                var u = Date, l = u.now();
                t.unstable_now = function () {
                    return u.now() - l
                }
            }
            var s = [], c = [], f = 1, p = null, d = 3, h = !1, y = !1, v = !1,
                m = "function" === typeof setTimeout ? setTimeout : null,
                g = "function" === typeof clearTimeout ? clearTimeout : null,
                b = "undefined" !== typeof setImmediate ? setImmediate : null;

            function w(e) {
                for (var t = r(c); null !== t;) {
                    if (null === t.callback) o(c); else {
                        if (!(t.startTime <= e)) break;
                        o(c), t.sortIndex = t.expirationTime, n(s, t)
                    }
                    t = r(c)
                }
            }

            function k(e) {
                if (v = !1, w(e), !y) if (null !== r(s)) y = !0, D(P); else {
                    var t = r(c);
                    null !== t && N(k, t.startTime - e)
                }
            }

            function P(e, n) {
                y = !1, v && (v = !1, g(_), _ = -1), h = !0;
                var a = d;
                try {
                    for (w(n), p = r(s); null !== p && (!(p.expirationTime > n) || e && !j());) {
                        var i = p.callback;
                        if ("function" === typeof i) {
                            p.callback = null, d = p.priorityLevel;
                            var u = i(p.expirationTime <= n);
                            n = t.unstable_now(), "function" === typeof u ? p.callback = u : p === r(s) && o(s), w(n)
                        } else o(s);
                        p = r(s)
                    }
                    if (null !== p) var l = !0; else {
                        var f = r(c);
                        null !== f && N(k, f.startTime - n), l = !1
                    }
                    return l
                } finally {
                    p = null, d = a, h = !1
                }
            }

            "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var S, O = !1, E = null, _ = -1, C = 5, x = -1;

            function j() {
                return !(t.unstable_now() - x < C)
            }

            function T() {
                if (null !== E) {
                    var e = t.unstable_now();
                    x = e;
                    var n = !0;
                    try {
                        n = E(!0, e)
                    } finally {
                        n ? S() : (O = !1, E = null)
                    }
                } else O = !1
            }

            if ("function" === typeof b) S = function () {
                b(T)
            }; else if ("undefined" !== typeof MessageChannel) {
                var R = new MessageChannel, L = R.port2;
                R.port1.onmessage = T, S = function () {
                    L.postMessage(null)
                }
            } else S = function () {
                m(T, 0)
            };

            function D(e) {
                E = e, O || (O = !0, S())
            }

            function N(e, n) {
                _ = m((function () {
                    e(t.unstable_now())
                }), n)
            }

            t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) {
                e.callback = null
            }, t.unstable_continueExecution = function () {
                y || h || (y = !0, D(P))
            }, t.unstable_forceFrameRate = function (e) {
                0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : C = 0 < e ? Math.floor(1e3 / e) : 5
            }, t.unstable_getCurrentPriorityLevel = function () {
                return d
            }, t.unstable_getFirstCallbackNode = function () {
                return r(s)
            }, t.unstable_next = function (e) {
                switch (d) {
                    case 1:
                    case 2:
                    case 3:
                        var t = 3;
                        break;
                    default:
                        t = d
                }
                var n = d;
                d = t;
                try {
                    return e()
                } finally {
                    d = n
                }
            }, t.unstable_pauseExecution = function () {
            }, t.unstable_requestPaint = function () {
            }, t.unstable_runWithPriority = function (e, t) {
                switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        e = 3
                }
                var n = d;
                d = e;
                try {
                    return t()
                } finally {
                    d = n
                }
            }, t.unstable_scheduleCallback = function (e, o, a) {
                var i = t.unstable_now();
                switch ("object" === typeof a && null !== a ? a = "number" === typeof (a = a.delay) && 0 < a ? i + a : i : a = i, e) {
                    case 1:
                        var u = -1;
                        break;
                    case 2:
                        u = 250;
                        break;
                    case 5:
                        u = 1073741823;
                        break;
                    case 4:
                        u = 1e4;
                        break;
                    default:
                        u = 5e3
                }
                return e = {
                    id: f++,
                    callback: o,
                    priorityLevel: e,
                    startTime: a,
                    expirationTime: u = a + u,
                    sortIndex: -1
                }, a > i ? (e.sortIndex = a, n(c, e), null === r(s) && e === r(c) && (v ? (g(_), _ = -1) : v = !0, N(k, a - i))) : (e.sortIndex = u, n(s, e), y || h || (y = !0, D(P))), e
            }, t.unstable_shouldYield = j, t.unstable_wrapCallback = function (e) {
                var t = d;
                return function () {
                    var n = d;
                    d = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        d = n
                    }
                }
            }
        }, 296: function (e, t, n) {
            "use strict";
            e.exports = n(813)
        }
    }, t = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var a = t[r] = {exports: {}};
        return e[r](a, a.exports, n), a.exports
    }

    !function () {
        var e, t = Object.getPrototypeOf ? function (e) {
            return Object.getPrototypeOf(e)
        } : function (e) {
            return e.__proto__
        };
        n.t = function (r, o) {
            if (1 & o && (r = this(r)), 8 & o) return r;
            if ("object" === typeof r && r) {
                if (4 & o && r.__esModule) return r;
                if (16 & o && "function" === typeof r.then) return r
            }
            var a = Object.create(null);
            n.r(a);
            var i = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var u = 2 & o && r; "object" == typeof u && !~e.indexOf(u); u = t(u)) Object.getOwnPropertyNames(u).forEach((function (e) {
                i[e] = function () {
                    return r[e]
                }
            }));
            return i.default = function () {
                return r
            }, n.d(a, i), a
        }
    }(), n.d = function (e, t) {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {enumerable: !0, get: t[r]})
    }, n.g = function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window) return window
        }
    }(), n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, function () {
        "use strict";
        var e = {};
        n.r(e), n.d(e, {
            Decoder: function () {
                return rn
            }, Encoder: function () {
                return tn
            }, PacketType: function () {
                return Jt
            }, protocol: function () {
                return en
            }
        });
        var t, r = n(791), o = n.t(r, 2), a = n(250);

        function i(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function u(e) {
            if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }

        function l(e, t) {
            if (e) {
                if ("string" === typeof e) return i(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
            }
        }

        function s(e) {
            return function (e) {
                if (Array.isArray(e)) return i(e)
            }(e) || u(e) || l(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function c(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function f(e) {
            return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, f(e)
        }

        function p(e) {
            var t = function (e, t) {
                if ("object" !== f(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== f(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === f(t) ? t : String(t)
        }

        function d(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, p(r.key), r)
            }
        }

        function h(e, t, n) {
            return t && d(e.prototype, t), n && d(e, n), Object.defineProperty(e, "prototype", {writable: !1}), e
        }

        function y(e, t) {
            return y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t, e
            }, y(e, t)
        }

        function v(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(e, "prototype", {writable: !1}), t && y(e, t)
        }

        function m(e) {
            return m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }, m(e)
        }

        function g() {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                }))), !0
            } catch (e) {
                return !1
            }
        }

        function b(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function w(e) {
            var t = g();
            return function () {
                var n, r = m(e);
                if (t) {
                    var o = m(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return function (e, t) {
                    if (t && ("object" === f(t) || "function" === typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return b(e)
                }(this, n)
            }
        }

        function k(e, t, n) {
            return k = g() ? Reflect.construct.bind() : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var o = new (Function.bind.apply(e, r));
                return n && y(o, n.prototype), o
            }, k.apply(null, arguments)
        }

        function P(e) {
            var t = "function" === typeof Map ? new Map : void 0;
            return P = function (e) {
                if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                var n;
                if ("function" !== typeof e) throw new TypeError("Super expression must either be null or a function");
                if ("undefined" !== typeof t) {
                    if (t.has(e)) return t.get(e);
                    t.set(e, r)
                }

                function r() {
                    return k(e, arguments, m(this).constructor)
                }

                return r.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: r,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), y(r, e)
            }, P(e)
        }

        function S(e) {
            if (Array.isArray(e)) return e
        }

        function O() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }

        function E(e, t) {
            return S(e) || function (e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, a, i, u = [], l = !0, s = !1;
                    try {
                        if (a = (n = n.call(e)).next, 0 === t) {
                            if (Object(n) !== n) return;
                            l = !1
                        } else for (; !(l = (r = a.call(n)).done) && (u.push(r.value), u.length !== t); l = !0) ;
                    } catch (c) {
                        s = !0, o = c
                    } finally {
                        try {
                            if (!l && null != n.return && (i = n.return(), Object(i) !== i)) return
                        } finally {
                            if (s) throw o
                        }
                    }
                    return u
                }
            }(e, t) || l(e, t) || O()
        }

        function _(e, t) {
            var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = l(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var r = 0, o = function () {
                    };
                    return {
                        s: o, n: function () {
                            return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                        }, e: function (e) {
                            throw e
                        }, f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, i = !0, u = !1;
            return {
                s: function () {
                    n = n.call(e)
                }, n: function () {
                    var e = n.next();
                    return i = e.done, e
                }, e: function (e) {
                    u = !0, a = e
                }, f: function () {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (u) throw a
                    }
                }
            }
        }

        function C() {
            return C = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, C.apply(this, arguments)
        }

        !function (e) {
            e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
        }(t || (t = {}));
        var x, j = "popstate";

        function T(e, t) {
            if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t)
        }

        function R(e, t) {
            if (!e) {
                "undefined" !== typeof console && console.warn(t);
                try {
                    throw new Error(t)
                } catch (n) {
                }
            }
        }

        function L(e, t) {
            return {usr: e.state, key: e.key, idx: t}
        }

        function D(e, t, n, r) {
            return void 0 === n && (n = null), C({
                pathname: "string" === typeof e ? e : e.pathname,
                search: "",
                hash: ""
            }, "string" === typeof t ? A(t) : t, {
                state: n,
                key: t && t.key || r || Math.random().toString(36).substr(2, 8)
            })
        }

        function N(e) {
            var t = e.pathname, n = void 0 === t ? "/" : t, r = e.search, o = void 0 === r ? "" : r, a = e.hash,
                i = void 0 === a ? "" : a;
            return o && "?" !== o && (n += "?" === o.charAt(0) ? o : "?" + o), i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i), n
        }

        function A(e) {
            var t = {};
            if (e) {
                var n = e.indexOf("#");
                n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
                var r = e.indexOf("?");
                r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
            }
            return t
        }

        function M(e, n, r, o) {
            void 0 === o && (o = {});
            var a = o, i = a.window, u = void 0 === i ? document.defaultView : i, l = a.v5Compat, s = void 0 !== l && l,
                c = u.history, f = t.Pop, p = null, d = h();

            function h() {
                return (c.state || {idx: null}).idx
            }

            function y() {
                f = t.Pop;
                var e = h(), n = null == e ? null : e - d;
                d = e, p && p({action: f, location: m.location, delta: n})
            }

            function v(e) {
                var t = "null" !== u.location.origin ? u.location.origin : u.location.href,
                    n = "string" === typeof e ? e : N(e);
                return T(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t)
            }

            null == d && (d = 0, c.replaceState(C({}, c.state, {idx: d}), ""));
            var m = {
                get action() {
                    return f
                }, get location() {
                    return e(u, c)
                }, listen: function (e) {
                    if (p) throw new Error("A history only accepts one active listener");
                    return u.addEventListener(j, y), p = e, function () {
                        u.removeEventListener(j, y), p = null
                    }
                }, createHref: function (e) {
                    return n(u, e)
                }, createURL: v, encodeLocation: function (e) {
                    var t = v(e);
                    return {pathname: t.pathname, search: t.search, hash: t.hash}
                }, push: function (e, n) {
                    f = t.Push;
                    var o = D(m.location, e, n);
                    r && r(o, e);
                    var a = L(o, d = h() + 1), i = m.createHref(o);
                    try {
                        c.pushState(a, "", i)
                    } catch (l) {
                        if (l instanceof DOMException && "DataCloneError" === l.name) throw l;
                        u.location.assign(i)
                    }
                    s && p && p({action: f, location: m.location, delta: 1})
                }, replace: function (e, n) {
                    f = t.Replace;
                    var o = D(m.location, e, n);
                    r && r(o, e);
                    var a = L(o, d = h()), i = m.createHref(o);
                    c.replaceState(a, "", i), s && p && p({action: f, location: m.location, delta: 0})
                }, go: function (e) {
                    return c.go(e)
                }
            };
            return m
        }

        !function (e) {
            e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
        }(x || (x = {}));
        new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

        function I(e, t, n) {
            void 0 === n && (n = "/");
            var r = G(("string" === typeof t ? A(t) : t).pathname || "/", n);
            if (null == r) return null;
            var o = U(e);
            !function (e) {
                e.sort((function (e, t) {
                    return e.score !== t.score ? t.score - e.score : function (e, t) {
                        var n = e.length === t.length && e.slice(0, -1).every((function (e, n) {
                            return e === t[n]
                        }));
                        return n ? e[e.length - 1] - t[t.length - 1] : 0
                    }(e.routesMeta.map((function (e) {
                        return e.childrenIndex
                    })), t.routesMeta.map((function (e) {
                        return e.childrenIndex
                    })))
                }))
            }(o);
            for (var a = null, i = 0; null == a && i < o.length; ++i) a = Q(o[i], X(r));
            return a
        }

        function U(e, t, n, r) {
            void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = "");
            var o = function (e, o, a) {
                var i = {
                    relativePath: void 0 === a ? e.path || "" : a,
                    caseSensitive: !0 === e.caseSensitive,
                    childrenIndex: o,
                    route: e
                };
                i.relativePath.startsWith("/") && (T(i.relativePath.startsWith(r), 'Absolute route path "' + i.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(r.length));
                var u = te([r, i.relativePath]), l = n.concat(i);
                e.children && e.children.length > 0 && (T(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + u + '".'), U(e.children, t, l, u)), (null != e.path || e.index) && t.push({
                    path: u,
                    score: K(u, e.index),
                    routesMeta: l
                })
            };
            return e.forEach((function (e, t) {
                var n;
                if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
                    var r, a = _(z(e.path));
                    try {
                        for (a.s(); !(r = a.n()).done;) {
                            var i = r.value;
                            o(e, t, i)
                        }
                    } catch (u) {
                        a.e(u)
                    } finally {
                        a.f()
                    }
                } else o(e, t)
            })), t
        }

        function z(e) {
            var t = e.split("/");
            if (0 === t.length) return [];
            var n, r = S(n = t) || u(n) || l(n) || O(), o = r[0], a = r.slice(1), i = o.endsWith("?"),
                c = o.replace(/\?$/, "");
            if (0 === a.length) return i ? [c, ""] : [c];
            var f = z(a.join("/")), p = [];
            return p.push.apply(p, s(f.map((function (e) {
                return "" === e ? c : [c, e].join("/")
            })))), i && p.push.apply(p, s(f)), p.map((function (t) {
                return e.startsWith("/") && "" === t ? "/" : t
            }))
        }

        var B = /^:\w+$/, F = 3, V = 2, H = 1, W = 10, $ = -2, q = function (e) {
            return "*" === e
        };

        function K(e, t) {
            var n = e.split("/"), r = n.length;
            return n.some(q) && (r += $), t && (r += V), n.filter((function (e) {
                return !q(e)
            })).reduce((function (e, t) {
                return e + (B.test(t) ? F : "" === t ? H : W)
            }), r)
        }

        function Q(e, t) {
            for (var n = e.routesMeta, r = {}, o = "/", a = [], i = 0; i < n.length; ++i) {
                var u = n[i], l = i === n.length - 1, s = "/" === o ? t : t.slice(o.length) || "/",
                    c = Y({path: u.relativePath, caseSensitive: u.caseSensitive, end: l}, s);
                if (!c) return null;
                Object.assign(r, c.params);
                var f = u.route;
                a.push({
                    params: r,
                    pathname: te([o, c.pathname]),
                    pathnameBase: ne(te([o, c.pathnameBase])),
                    route: f
                }), "/" !== c.pathnameBase && (o = te([o, c.pathnameBase]))
            }
            return a
        }

        function Y(e, t) {
            "string" === typeof e && (e = {path: e, caseSensitive: !1, end: !0});
            var n = function (e, t, n) {
                void 0 === t && (t = !1);
                void 0 === n && (n = !0);
                R("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
                var r = [],
                    o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (function (e, t) {
                        return r.push(t), "/([^\\/]+)"
                    }));
                e.endsWith("*") ? (r.push("*"), o += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : "" !== e && "/" !== e && (o += "(?:(?=\\/|$))");
                var a = new RegExp(o, t ? void 0 : "i");
                return [a, r]
            }(e.path, e.caseSensitive, e.end), r = E(n, 2), o = r[0], a = r[1], i = t.match(o);
            if (!i) return null;
            var u = i[0], l = u.replace(/(.)\/+$/, "$1"), s = i.slice(1), c = a.reduce((function (e, t, n) {
                if ("*" === t) {
                    var r = s[n] || "";
                    l = u.slice(0, u.length - r.length).replace(/(.)\/+$/, "$1")
                }
                return e[t] = function (e, t) {
                    try {
                        return decodeURIComponent(e)
                    } catch (n) {
                        return R(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e
                    }
                }(s[n] || "", t), e
            }), {});
            return {params: c, pathname: u, pathnameBase: l, pattern: e}
        }

        function X(e) {
            try {
                return decodeURI(e)
            } catch (t) {
                return R(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
            }
        }

        function G(e, t) {
            if ("/" === t) return e;
            if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
            var n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
            return r && "/" !== r ? null : e.slice(n) || "/"
        }

        function J(e, t, n, r) {
            return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        }

        function Z(e) {
            return e.filter((function (e, t) {
                return 0 === t || e.route.path && e.route.path.length > 0
            }))
        }

        function ee(e, t, n, r) {
            var o;
            void 0 === r && (r = !1), "string" === typeof e ? o = A(e) : (T(!(o = C({}, e)).pathname || !o.pathname.includes("?"), J("?", "pathname", "search", o)), T(!o.pathname || !o.pathname.includes("#"), J("#", "pathname", "hash", o)), T(!o.search || !o.search.includes("#"), J("#", "search", "hash", o)));
            var a, i = "" === e || "" === o.pathname, u = i ? "/" : o.pathname;
            if (r || null == u) a = n; else {
                var l = t.length - 1;
                if (u.startsWith("..")) {
                    for (var s = u.split("/"); ".." === s[0];) s.shift(), l -= 1;
                    o.pathname = s.join("/")
                }
                a = l >= 0 ? t[l] : "/"
            }
            var c = function (e, t) {
                void 0 === t && (t = "/");
                var n = "string" === typeof e ? A(e) : e, r = n.pathname, o = n.search, a = void 0 === o ? "" : o,
                    i = n.hash, u = void 0 === i ? "" : i, l = r ? r.startsWith("/") ? r : function (e, t) {
                        var n = t.replace(/\/+$/, "").split("/");
                        return e.split("/").forEach((function (e) {
                            ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
                        })), n.length > 1 ? n.join("/") : "/"
                    }(r, t) : t;
                return {pathname: l, search: re(a), hash: oe(u)}
            }(o, a), f = u && "/" !== u && u.endsWith("/"), p = (i || "." === u) && n.endsWith("/");
            return c.pathname.endsWith("/") || !f && !p || (c.pathname += "/"), c
        }

        var te = function (e) {
            return e.join("/").replace(/\/\/+/g, "/")
        }, ne = function (e) {
            return e.replace(/\/+$/, "").replace(/^\/*/, "/")
        }, re = function (e) {
            return e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""
        }, oe = function (e) {
            return e && "#" !== e ? e.startsWith("#") ? e : "#" + e : ""
        }, ae = function (e) {
            v(n, e);
            var t = w(n);

            function n() {
                return c(this, n), t.apply(this, arguments)
            }

            return h(n)
        }(P(Error));

        function ie(e) {
            return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data" in e
        }

        var ue = ["post", "put", "patch", "delete"], le = (new Set(ue), ["get"].concat(ue));
        new Set(le), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
        Symbol("deferred");

        function se() {
            return se = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, se.apply(this, arguments)
        }

        var ce = r.createContext(null);
        var fe = r.createContext(null);
        var pe = r.createContext(null);
        var de = r.createContext(null);
        var he = r.createContext(null);
        var ye = r.createContext({outlet: null, matches: [], isDataRoute: !1});
        var ve = r.createContext(null);

        function me() {
            return null != r.useContext(he)
        }

        function ge() {
            return me() || T(!1), r.useContext(he).location
        }

        function be(e) {
            r.useContext(de).static || r.useLayoutEffect(e)
        }

        function we() {
            return r.useContext(ye).isDataRoute ? function () {
                var e = je(Ce.UseNavigateStable).router, t = Re(xe.UseNavigateStable), n = r.useRef(!1);
                return be((function () {
                    n.current = !0
                })), r.useCallback((function (r, o) {
                    void 0 === o && (o = {}), n.current && ("number" === typeof r ? e.navigate(r) : e.navigate(r, se({fromRouteId: t}, o)))
                }), [e, t])
            }() : function () {
                me() || T(!1);
                var e = r.useContext(ce), t = r.useContext(de), n = t.basename, o = t.navigator,
                    a = r.useContext(ye).matches, i = ge().pathname, u = JSON.stringify(Z(a).map((function (e) {
                        return e.pathnameBase
                    }))), l = r.useRef(!1);
                return be((function () {
                    l.current = !0
                })), r.useCallback((function (t, r) {
                    if (void 0 === r && (r = {}), l.current) if ("number" !== typeof t) {
                        var a = ee(t, JSON.parse(u), i, "path" === r.relative);
                        null == e && "/" !== n && (a.pathname = "/" === a.pathname ? n : te([n, a.pathname])), (r.replace ? o.replace : o.push)(a, r.state, r)
                    } else o.go(t)
                }), [n, o, u, i, e])
            }()
        }

        function ke(e, n, o) {
            me() || T(!1);
            var a, i = r.useContext(de).navigator, u = r.useContext(ye).matches, l = u[u.length - 1],
                s = l ? l.params : {}, c = (l && l.pathname, l ? l.pathnameBase : "/"), f = (l && l.route, ge());
            if (n) {
                var p, d = "string" === typeof n ? A(n) : n;
                "/" === c || (null == (p = d.pathname) ? void 0 : p.startsWith(c)) || T(!1), a = d
            } else a = f;
            var h = a.pathname || "/", y = I(e, {pathname: "/" === c ? h : h.slice(c.length) || "/"});
            var v = _e(y && y.map((function (e) {
                return Object.assign({}, e, {
                    params: Object.assign({}, s, e.params),
                    pathname: te([c, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
                    pathnameBase: "/" === e.pathnameBase ? c : te([c, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
                })
            })), u, o);
            return n && v ? r.createElement(he.Provider, {
                value: {
                    location: se({
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default"
                    }, a), navigationType: t.Pop
                }
            }, v) : v
        }

        function Pe() {
            var e = function () {
                    var e, t = r.useContext(ve), n = Te(xe.UseRouteError), o = Re(xe.UseRouteError);
                    if (t) return t;
                    return null == (e = n.errors) ? void 0 : e[o]
                }(), t = ie(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
                n = e instanceof Error ? e.stack : null, o = "rgba(200,200,200, 0.5)",
                a = {padding: "0.5rem", backgroundColor: o};
            return r.createElement(r.Fragment, null, r.createElement("h2", null, "Unexpected Application Error!"), r.createElement("h3", {style: {fontStyle: "italic"}}, t), n ? r.createElement("pre", {style: a}, n) : null, null)
        }

        var Se = r.createElement(Pe, null), Oe = function (e) {
            v(n, e);
            var t = w(n);

            function n(e) {
                var r;
                return c(this, n), (r = t.call(this, e)).state = {
                    location: e.location,
                    revalidation: e.revalidation,
                    error: e.error
                }, r
            }

            return h(n, [{
                key: "componentDidCatch", value: function (e, t) {
                    console.error("React Router caught the following error during render", e, t)
                }
            }, {
                key: "render", value: function () {
                    return this.state.error ? r.createElement(ye.Provider, {value: this.props.routeContext}, r.createElement(ve.Provider, {
                        value: this.state.error,
                        children: this.props.component
                    })) : this.props.children
                }
            }], [{
                key: "getDerivedStateFromError", value: function (e) {
                    return {error: e}
                }
            }, {
                key: "getDerivedStateFromProps", value: function (e, t) {
                    return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
                        error: e.error,
                        location: e.location,
                        revalidation: e.revalidation
                    } : {
                        error: e.error || t.error,
                        location: t.location,
                        revalidation: e.revalidation || t.revalidation
                    }
                }
            }]), n
        }(r.Component);

        function Ee(e) {
            var t = e.routeContext, n = e.match, o = e.children, a = r.useContext(ce);
            return a && a.static && a.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = n.route.id), r.createElement(ye.Provider, {value: t}, o)
        }

        function _e(e, t, n) {
            var o;
            if (void 0 === t && (t = []), void 0 === n && (n = null), null == e) {
                var a;
                if (null == (a = n) || !a.errors) return null;
                e = n.matches
            }
            var i = e, u = null == (o = n) ? void 0 : o.errors;
            if (null != u) {
                var l = i.findIndex((function (e) {
                    return e.route.id && (null == u ? void 0 : u[e.route.id])
                }));
                l >= 0 || T(!1), i = i.slice(0, Math.min(i.length, l + 1))
            }
            return i.reduceRight((function (e, o, a) {
                var l = o.route.id ? null == u ? void 0 : u[o.route.id] : null, s = null;
                n && (s = o.route.errorElement || Se);
                var c = t.concat(i.slice(0, a + 1)), f = function () {
                    var t;
                    return t = l ? s : o.route.Component ? r.createElement(o.route.Component, null) : o.route.element ? o.route.element : e, r.createElement(Ee, {
                        match: o,
                        routeContext: {outlet: e, matches: c, isDataRoute: null != n},
                        children: t
                    })
                };
                return n && (o.route.ErrorBoundary || o.route.errorElement || 0 === a) ? r.createElement(Oe, {
                    location: n.location,
                    revalidation: n.revalidation,
                    component: s,
                    error: l,
                    children: f(),
                    routeContext: {outlet: null, matches: c, isDataRoute: !0}
                }) : f()
            }), null)
        }

        var Ce = function (e) {
            return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
        }(Ce || {}), xe = function (e) {
            return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
        }(xe || {});

        function je(e) {
            var t = r.useContext(ce);
            return t || T(!1), t
        }

        function Te(e) {
            var t = r.useContext(fe);
            return t || T(!1), t
        }

        function Re(e) {
            var t = function (e) {
                var t = r.useContext(ye);
                return t || T(!1), t
            }(), n = t.matches[t.matches.length - 1];
            return n.route.id || T(!1), n.route.id
        }

        o.startTransition;

        function Le(e) {
            T(!1)
        }

        function De(e) {
            var n = e.basename, o = void 0 === n ? "/" : n, a = e.children, i = void 0 === a ? null : a, u = e.location,
                l = e.navigationType, s = void 0 === l ? t.Pop : l, c = e.navigator, f = e.static,
                p = void 0 !== f && f;
            me() && T(!1);
            var d = o.replace(/^\/*/, "/"), h = r.useMemo((function () {
                return {basename: d, navigator: c, static: p}
            }), [d, c, p]);
            "string" === typeof u && (u = A(u));
            var y = u, v = y.pathname, m = void 0 === v ? "/" : v, g = y.search, b = void 0 === g ? "" : g, w = y.hash,
                k = void 0 === w ? "" : w, P = y.state, S = void 0 === P ? null : P, O = y.key,
                E = void 0 === O ? "default" : O, _ = r.useMemo((function () {
                    var e = G(m, d);
                    return null == e ? null : {
                        location: {pathname: e, search: b, hash: k, state: S, key: E},
                        navigationType: s
                    }
                }), [d, m, b, k, S, E, s]);
            return null == _ ? null : r.createElement(de.Provider, {value: h}, r.createElement(he.Provider, {
                children: i,
                value: _
            }))
        }

        function Ne(e) {
            var t = e.children, n = e.location;
            return ke(Ie(t), n)
        }

        var Ae = function (e) {
            return e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error", e
        }(Ae || {}), Me = new Promise((function () {
        }));
        r.Component;

        function Ie(e, t) {
            void 0 === t && (t = []);
            var n = [];
            return r.Children.forEach(e, (function (e, o) {
                if (r.isValidElement(e)) {
                    var a = [].concat(s(t), [o]);
                    if (e.type !== r.Fragment) {
                        e.type !== Le && T(!1), e.props.index && e.props.children && T(!1);
                        var i = {
                            id: e.props.id || a.join("-"),
                            caseSensitive: e.props.caseSensitive,
                            element: e.props.element,
                            Component: e.props.Component,
                            index: e.props.index,
                            path: e.props.path,
                            loader: e.props.loader,
                            action: e.props.action,
                            errorElement: e.props.errorElement,
                            ErrorBoundary: e.props.ErrorBoundary,
                            hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement,
                            shouldRevalidate: e.props.shouldRevalidate,
                            handle: e.props.handle,
                            lazy: e.props.lazy
                        };
                        e.props.children && (i.children = Ie(e.props.children, a)), n.push(i)
                    } else n.push.apply(n, Ie(e.props.children, a))
                }
            })), n
        }

        function Ue() {
            return Ue = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, n) {
                var r = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = m(e));) ;
                    return e
                }(e, t);
                if (r) {
                    var o = Object.getOwnPropertyDescriptor(r, t);
                    return o.get ? o.get.call(arguments.length < 3 ? e : n) : o.value
                }
            }, Ue.apply(this, arguments)
        }

        var ze = Object.create(null);
        ze.open = "0", ze.close = "1", ze.ping = "2", ze.pong = "3", ze.message = "4", ze.upgrade = "5", ze.noop = "6";
        var Be = Object.create(null);
        Object.keys(ze).forEach((function (e) {
            Be[ze[e]] = e
        }));
        var Fe, Ve = {type: "error", data: "parser error"},
            He = "function" === typeof Blob || "undefined" !== typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob),
            We = "function" === typeof ArrayBuffer, $e = function (e) {
                return "function" === typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer
            }, qe = function (e, t, n) {
                var r = e.type, o = e.data;
                return He && o instanceof Blob ? t ? n(o) : Ke(o, n) : We && (o instanceof ArrayBuffer || $e(o)) ? t ? n(o) : Ke(new Blob([o]), n) : n(ze[r] + (o || ""))
            }, Ke = function (e, t) {
                var n = new FileReader;
                return n.onload = function () {
                    var e = n.result.split(",")[1];
                    t("b" + (e || ""))
                }, n.readAsDataURL(e)
            };

        function Qe(e) {
            return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
        }

        for (var Ye = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Xe = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256), Ge = 0; Ge < 64; Ge++) Xe[Ye.charCodeAt(Ge)] = Ge;
        var Je, Ze = "function" === typeof ArrayBuffer, et = function (e, t) {
            if ("string" !== typeof e) return {type: "message", data: nt(e, t)};
            var n = e.charAt(0);
            return "b" === n ? {type: "message", data: tt(e.substring(1), t)} : Be[n] ? e.length > 1 ? {
                type: Be[n],
                data: e.substring(1)
            } : {type: Be[n]} : Ve
        }, tt = function (e, t) {
            if (Ze) {
                var n = function (e) {
                    var t, n, r, o, a, i = .75 * e.length, u = e.length, l = 0;
                    "=" === e[e.length - 1] && (i--, "=" === e[e.length - 2] && i--);
                    var s = new ArrayBuffer(i), c = new Uint8Array(s);
                    for (t = 0; t < u; t += 4) n = Xe[e.charCodeAt(t)], r = Xe[e.charCodeAt(t + 1)], o = Xe[e.charCodeAt(t + 2)], a = Xe[e.charCodeAt(t + 3)], c[l++] = n << 2 | r >> 4, c[l++] = (15 & r) << 4 | o >> 2, c[l++] = (3 & o) << 6 | 63 & a;
                    return s
                }(e);
                return nt(n, t)
            }
            return {base64: !0, data: e}
        }, nt = function (e, t) {
            return "blob" === t ? e instanceof Blob ? e : new Blob([e]) : e instanceof ArrayBuffer ? e : e.buffer
        }, rt = String.fromCharCode(30);

        function ot() {
            return new TransformStream({
                transform: function (e, t) {
                    !function (e, t) {
                        He && e.data instanceof Blob ? e.data.arrayBuffer().then(Qe).then(t) : We && (e.data instanceof ArrayBuffer || $e(e.data)) ? t(Qe(e.data)) : qe(e, !1, (function (e) {
                            Fe || (Fe = new TextEncoder), t(Fe.encode(e))
                        }))
                    }(e, (function (n) {
                        var r, o = n.length;
                        if (o < 126) r = new Uint8Array(1), new DataView(r.buffer).setUint8(0, o); else if (o < 65536) {
                            r = new Uint8Array(3);
                            var a = new DataView(r.buffer);
                            a.setUint8(0, 126), a.setUint16(1, o)
                        } else {
                            r = new Uint8Array(9);
                            var i = new DataView(r.buffer);
                            i.setUint8(0, 127), i.setBigUint64(1, BigInt(o))
                        }
                        e.data && "string" !== typeof e.data && (r[0] |= 128), t.enqueue(r), t.enqueue(n)
                    }))
                }
            })
        }

        function at(e) {
            return e.reduce((function (e, t) {
                return e + t.length
            }), 0)
        }

        function it(e, t) {
            if (e[0].length === t) return e.shift();
            for (var n = new Uint8Array(t), r = 0, o = 0; o < t; o++) n[o] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
            return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n
        }

        function ut(e) {
            if (e) return function (e) {
                for (var t in ut.prototype) e[t] = ut.prototype[t];
                return e
            }(e)
        }

        ut.prototype.on = ut.prototype.addEventListener = function (e, t) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
        }, ut.prototype.once = function (e, t) {
            function n() {
                this.off(e, n), t.apply(this, arguments)
            }

            return n.fn = t, this.on(e, n), this
        }, ut.prototype.off = ut.prototype.removeListener = ut.prototype.removeAllListeners = ut.prototype.removeEventListener = function (e, t) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var n, r = this._callbacks["$" + e];
            if (!r) return this;
            if (1 == arguments.length) return delete this._callbacks["$" + e], this;
            for (var o = 0; o < r.length; o++) if ((n = r[o]) === t || n.fn === t) {
                r.splice(o, 1);
                break
            }
            return 0 === r.length && delete this._callbacks["$" + e], this
        }, ut.prototype.emit = function (e) {
            this._callbacks = this._callbacks || {};
            for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            if (n) {
                r = 0;
                for (var o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, t)
            }
            return this
        }, ut.prototype.emitReserved = ut.prototype.emit, ut.prototype.listeners = function (e) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
        }, ut.prototype.hasListeners = function (e) {
            return !!this.listeners(e).length
        };
        var lt = "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : Function("return this")();

        function st(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return n.reduce((function (t, n) {
                return e.hasOwnProperty(n) && (t[n] = e[n]), t
            }), {})
        }

        var ct = lt.setTimeout, ft = lt.clearTimeout;

        function pt(e, t) {
            t.useNativeTimers ? (e.setTimeoutFn = ct.bind(lt), e.clearTimeoutFn = ft.bind(lt)) : (e.setTimeoutFn = lt.setTimeout.bind(lt), e.clearTimeoutFn = lt.clearTimeout.bind(lt))
        }

        var dt, ht = function (e) {
                v(n, e);
                var t = w(n);

                function n(e, r, o) {
                    var a;
                    return c(this, n), (a = t.call(this, e)).description = r, a.context = o, a.type = "TransportError", a
                }

                return h(n)
            }(P(Error)), yt = function (e) {
                v(n, e);
                var t = w(n);

                function n(e) {
                    var r;
                    return c(this, n), (r = t.call(this)).writable = !1, pt(b(r), e), r.opts = e, r.query = e.query, r.socket = e.socket, r
                }

                return h(n, [{
                    key: "onError", value: function (e, t, r) {
                        return Ue(m(n.prototype), "emitReserved", this).call(this, "error", new ht(e, t, r)), this
                    }
                }, {
                    key: "open", value: function () {
                        return this.readyState = "opening", this.doOpen(), this
                    }
                }, {
                    key: "close", value: function () {
                        return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
                    }
                }, {
                    key: "send", value: function (e) {
                        "open" === this.readyState && this.write(e)
                    }
                }, {
                    key: "onOpen", value: function () {
                        this.readyState = "open", this.writable = !0, Ue(m(n.prototype), "emitReserved", this).call(this, "open")
                    }
                }, {
                    key: "onData", value: function (e) {
                        var t = et(e, this.socket.binaryType);
                        this.onPacket(t)
                    }
                }, {
                    key: "onPacket", value: function (e) {
                        Ue(m(n.prototype), "emitReserved", this).call(this, "packet", e)
                    }
                }, {
                    key: "onClose", value: function (e) {
                        this.readyState = "closed", Ue(m(n.prototype), "emitReserved", this).call(this, "close", e)
                    }
                }, {
                    key: "pause", value: function (e) {
                    }
                }, {
                    key: "createUri", value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(t)
                    }
                }, {
                    key: "_hostname", value: function () {
                        var e = this.opts.hostname;
                        return -1 === e.indexOf(":") ? e : "[" + e + "]"
                    }
                }, {
                    key: "_port", value: function () {
                        return this.opts.port && (this.opts.secure && Number(443 !== this.opts.port) || !this.opts.secure && 80 !== Number(this.opts.port)) ? ":" + this.opts.port : ""
                    }
                }, {
                    key: "_query", value: function (e) {
                        var t = function (e) {
                            var t = "";
                            for (var n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                            return t
                        }(e);
                        return t.length ? "?" + t : ""
                    }
                }]), n
            }(ut), vt = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), mt = 64, gt = {},
            bt = 0, wt = 0;

        function kt(e) {
            var t = "";
            do {
                t = vt[e % mt] + t, e = Math.floor(e / mt)
            } while (e > 0);
            return t
        }

        function Pt() {
            var e = kt(+new Date);
            return e !== dt ? (bt = 0, dt = e) : e + "." + kt(bt++)
        }

        for (; wt < mt; wt++) gt[vt[wt]] = wt;
        var St = !1;
        try {
            St = "undefined" !== typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
        } catch (Hn) {
        }
        var Ot = St;

        function Et(e) {
            var t = e.xdomain;
            try {
                if ("undefined" !== typeof XMLHttpRequest && (!t || Ot)) return new XMLHttpRequest
            } catch (n) {
            }
            if (!t) try {
                return new (lt[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
            } catch (n) {
            }
        }

        function _t() {
        }

        var Ct = null != new Et({xdomain: !1}).responseType, xt = function (e) {
            v(n, e);
            var t = w(n);

            function n(e) {
                var r;
                if (c(this, n), (r = t.call(this, e)).polling = !1, "undefined" !== typeof location) {
                    var o = "https:" === location.protocol, a = location.port;
                    a || (a = o ? "443" : "80"), r.xd = "undefined" !== typeof location && e.hostname !== location.hostname || a !== e.port
                }
                var i = e && e.forceBase64;
                return r.supportsBinary = Ct && !i, r.opts.withCredentials && (r.cookieJar = void 0), r
            }

            return h(n, [{
                key: "name", get: function () {
                    return "polling"
                }
            }, {
                key: "doOpen", value: function () {
                    this.poll()
                }
            }, {
                key: "pause", value: function (e) {
                    var t = this;
                    this.readyState = "pausing";
                    var n = function () {
                        t.readyState = "paused", e()
                    };
                    if (this.polling || !this.writable) {
                        var r = 0;
                        this.polling && (r++, this.once("pollComplete", (function () {
                            --r || n()
                        }))), this.writable || (r++, this.once("drain", (function () {
                            --r || n()
                        })))
                    } else n()
                }
            }, {
                key: "poll", value: function () {
                    this.polling = !0, this.doPoll(), this.emitReserved("poll")
                }
            }, {
                key: "onData", value: function (e) {
                    var t = this;
                    (function (e, t) {
                        for (var n = e.split(rt), r = [], o = 0; o < n.length; o++) {
                            var a = et(n[o], t);
                            if (r.push(a), "error" === a.type) break
                        }
                        return r
                    })(e, this.socket.binaryType).forEach((function (e) {
                        if ("opening" === t.readyState && "open" === e.type && t.onOpen(), "close" === e.type) return t.onClose({description: "transport closed by the server"}), !1;
                        t.onPacket(e)
                    })), "closed" !== this.readyState && (this.polling = !1, this.emitReserved("pollComplete"), "open" === this.readyState && this.poll())
                }
            }, {
                key: "doClose", value: function () {
                    var e = this, t = function () {
                        e.write([{type: "close"}])
                    };
                    "open" === this.readyState ? t() : this.once("open", t)
                }
            }, {
                key: "write", value: function (e) {
                    var t = this;
                    this.writable = !1, function (e, t) {
                        var n = e.length, r = new Array(n), o = 0;
                        e.forEach((function (e, a) {
                            qe(e, !1, (function (e) {
                                r[a] = e, ++o === n && t(r.join(rt))
                            }))
                        }))
                    }(e, (function (e) {
                        t.doWrite(e, (function () {
                            t.writable = !0, t.emitReserved("drain")
                        }))
                    }))
                }
            }, {
                key: "uri", value: function () {
                    var e = this.opts.secure ? "https" : "http", t = this.query || {};
                    return !1 !== this.opts.timestampRequests && (t[this.opts.timestampParam] = Pt()), this.supportsBinary || t.sid || (t.b64 = 1), this.createUri(e, t)
                }
            }, {
                key: "request", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object.assign(e, {xd: this.xd, cookieJar: this.cookieJar}, this.opts), new jt(this.uri(), e)
                }
            }, {
                key: "doWrite", value: function (e, t) {
                    var n = this, r = this.request({method: "POST", data: e});
                    r.on("success", t), r.on("error", (function (e, t) {
                        n.onError("xhr post error", e, t)
                    }))
                }
            }, {
                key: "doPoll", value: function () {
                    var e = this, t = this.request();
                    t.on("data", this.onData.bind(this)), t.on("error", (function (t, n) {
                        e.onError("xhr poll error", t, n)
                    })), this.pollXhr = t
                }
            }]), n
        }(yt), jt = function (e) {
            v(n, e);
            var t = w(n);

            function n(e, r) {
                var o;
                return c(this, n), pt(b(o = t.call(this)), r), o.opts = r, o.method = r.method || "GET", o.uri = e, o.data = void 0 !== r.data ? r.data : null, o.create(), o
            }

            return h(n, [{
                key: "create", value: function () {
                    var e, t = this,
                        r = st(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
                    r.xdomain = !!this.opts.xd;
                    var o = this.xhr = new Et(r);
                    try {
                        o.open(this.method, this.uri, !0);
                        try {
                            if (this.opts.extraHeaders) for (var a in o.setDisableHeaderCheck && o.setDisableHeaderCheck(!0), this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(a) && o.setRequestHeader(a, this.opts.extraHeaders[a])
                        } catch (i) {
                        }
                        if ("POST" === this.method) try {
                            o.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                        } catch (i) {
                        }
                        try {
                            o.setRequestHeader("Accept", "*/*")
                        } catch (i) {
                        }
                        null === (e = this.opts.cookieJar) || void 0 === e || e.addCookies(o), "withCredentials" in o && (o.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (o.timeout = this.opts.requestTimeout), o.onreadystatechange = function () {
                            var e;
                            3 === o.readyState && (null === (e = t.opts.cookieJar) || void 0 === e || e.parseCookies(o)), 4 === o.readyState && (200 === o.status || 1223 === o.status ? t.onLoad() : t.setTimeoutFn((function () {
                                t.onError("number" === typeof o.status ? o.status : 0)
                            }), 0))
                        }, o.send(this.data)
                    } catch (i) {
                        return void this.setTimeoutFn((function () {
                            t.onError(i)
                        }), 0)
                    }
                    "undefined" !== typeof document && (this.index = n.requestsCount++, n.requests[this.index] = this)
                }
            }, {
                key: "onError", value: function (e) {
                    this.emitReserved("error", e, this.xhr), this.cleanup(!0)
                }
            }, {
                key: "cleanup", value: function (e) {
                    if ("undefined" !== typeof this.xhr && null !== this.xhr) {
                        if (this.xhr.onreadystatechange = _t, e) try {
                            this.xhr.abort()
                        } catch (t) {
                        }
                        "undefined" !== typeof document && delete n.requests[this.index], this.xhr = null
                    }
                }
            }, {
                key: "onLoad", value: function () {
                    var e = this.xhr.responseText;
                    null !== e && (this.emitReserved("data", e), this.emitReserved("success"), this.cleanup())
                }
            }, {
                key: "abort", value: function () {
                    this.cleanup()
                }
            }]), n
        }(ut);
        if (jt.requestsCount = 0, jt.requests = {}, "undefined" !== typeof document) if ("function" === typeof attachEvent) attachEvent("onunload", Tt); else if ("function" === typeof addEventListener) {
            addEventListener("onpagehide" in lt ? "pagehide" : "unload", Tt, !1)
        }

        function Tt() {
            for (var e in jt.requests) jt.requests.hasOwnProperty(e) && jt.requests[e].abort()
        }

        var Rt = "function" === typeof Promise && "function" === typeof Promise.resolve ? function (e) {
                return Promise.resolve().then(e)
            } : function (e, t) {
                return t(e, 0)
            }, Lt = lt.WebSocket || lt.MozWebSocket,
            Dt = "undefined" !== typeof navigator && "string" === typeof navigator.product && "reactnative" === navigator.product.toLowerCase(),
            Nt = function (e) {
                v(n, e);
                var t = w(n);

                function n(e) {
                    var r;
                    return c(this, n), (r = t.call(this, e)).supportsBinary = !e.forceBase64, r
                }

                return h(n, [{
                    key: "name", get: function () {
                        return "websocket"
                    }
                }, {
                    key: "doOpen", value: function () {
                        if (this.check()) {
                            var e = this.uri(), t = this.opts.protocols,
                                n = Dt ? {} : st(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
                            this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
                            try {
                                this.ws = Dt ? new Lt(e, t, n) : t ? new Lt(e, t) : new Lt(e)
                            } catch (Hn) {
                                return this.emitReserved("error", Hn)
                            }
                            this.ws.binaryType = this.socket.binaryType, this.addEventListeners()
                        }
                    }
                }, {
                    key: "addEventListeners", value: function () {
                        var e = this;
                        this.ws.onopen = function () {
                            e.opts.autoUnref && e.ws._socket.unref(), e.onOpen()
                        }, this.ws.onclose = function (t) {
                            return e.onClose({description: "websocket connection closed", context: t})
                        }, this.ws.onmessage = function (t) {
                            return e.onData(t.data)
                        }, this.ws.onerror = function (t) {
                            return e.onError("websocket error", t)
                        }
                    }
                }, {
                    key: "write", value: function (e) {
                        var t = this;
                        this.writable = !1;
                        for (var n = function () {
                            var n = e[r], o = r === e.length - 1;
                            qe(n, t.supportsBinary, (function (e) {
                                try {
                                    t.ws.send(e)
                                } catch (n) {
                                }
                                o && Rt((function () {
                                    t.writable = !0, t.emitReserved("drain")
                                }), t.setTimeoutFn)
                            }))
                        }, r = 0; r < e.length; r++) n()
                    }
                }, {
                    key: "doClose", value: function () {
                        "undefined" !== typeof this.ws && (this.ws.close(), this.ws = null)
                    }
                }, {
                    key: "uri", value: function () {
                        var e = this.opts.secure ? "wss" : "ws", t = this.query || {};
                        return this.opts.timestampRequests && (t[this.opts.timestampParam] = Pt()), this.supportsBinary || (t.b64 = 1), this.createUri(e, t)
                    }
                }, {
                    key: "check", value: function () {
                        return !!Lt
                    }
                }]), n
            }(yt), At = function (e) {
                v(n, e);
                var t = w(n);

                function n() {
                    return c(this, n), t.apply(this, arguments)
                }

                return h(n, [{
                    key: "name", get: function () {
                        return "webtransport"
                    }
                }, {
                    key: "doOpen", value: function () {
                        var e = this;
                        "function" === typeof WebTransport && (this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]), this.transport.closed.then((function () {
                            e.onClose()
                        })).catch((function (t) {
                            e.onError("webtransport error", t)
                        })), this.transport.ready.then((function () {
                            e.transport.createBidirectionalStream().then((function (t) {
                                var n = function (e, t) {
                                        Je || (Je = new TextDecoder);
                                        var n = [], r = 0, o = -1, a = !1;
                                        return new TransformStream({
                                            transform: function (i, u) {
                                                for (n.push(i); ;) {
                                                    if (0 === r) {
                                                        if (at(n) < 1) break;
                                                        var l = it(n, 1);
                                                        a = 128 === (128 & l[0]), o = 127 & l[0], r = o < 126 ? 3 : 126 === o ? 1 : 2
                                                    } else if (1 === r) {
                                                        if (at(n) < 2) break;
                                                        var s = it(n, 2);
                                                        o = new DataView(s.buffer, s.byteOffset, s.length).getUint16(0), r = 3
                                                    } else if (2 === r) {
                                                        if (at(n) < 8) break;
                                                        var c = it(n, 8), f = new DataView(c.buffer, c.byteOffset, c.length),
                                                            p = f.getUint32(0);
                                                        if (p > Math.pow(2, 21) - 1) {
                                                            u.enqueue(Ve);
                                                            break
                                                        }
                                                        o = p * Math.pow(2, 32) + f.getUint32(4), r = 3
                                                    } else {
                                                        if (at(n) < o) break;
                                                        var d = it(n, o);
                                                        u.enqueue(et(a ? d : Je.decode(d), t)), r = 0
                                                    }
                                                    if (0 === o || o > e) {
                                                        u.enqueue(Ve);
                                                        break
                                                    }
                                                }
                                            }
                                        })
                                    }(Number.MAX_SAFE_INTEGER, e.socket.binaryType), r = t.readable.pipeThrough(n).getReader(),
                                    o = ot();
                                o.readable.pipeTo(t.writable), e.writer = o.writable.getWriter();
                                !function t() {
                                    r.read().then((function (n) {
                                        var r = n.done, o = n.value;
                                        r || (e.onPacket(o), t())
                                    })).catch((function (e) {
                                    }))
                                }();
                                var a = {type: "open"};
                                e.query.sid && (a.data = '{"sid":"'.concat(e.query.sid, '"}')), e.writer.write(a).then((function () {
                                    return e.onOpen()
                                }))
                            }))
                        })))
                    }
                }, {
                    key: "write", value: function (e) {
                        var t = this;
                        this.writable = !1;
                        for (var n = function () {
                            var n = e[r], o = r === e.length - 1;
                            t.writer.write(n).then((function () {
                                o && Rt((function () {
                                    t.writable = !0, t.emitReserved("drain")
                                }), t.setTimeoutFn)
                            }))
                        }, r = 0; r < e.length; r++) n()
                    }
                }, {
                    key: "doClose", value: function () {
                        var e;
                        null === (e = this.transport) || void 0 === e || e.close()
                    }
                }]), n
            }(yt), Mt = {websocket: Nt, webtransport: At, polling: xt},
            It = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            Ut = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];

        function zt(e) {
            var t = e, n = e.indexOf("["), r = e.indexOf("]");
            -1 != n && -1 != r && (e = e.substring(0, n) + e.substring(n, r).replace(/:/g, ";") + e.substring(r, e.length));
            for (var o = It.exec(e || ""), a = {}, i = 14; i--;) a[Ut[i]] = o[i] || "";
            return -1 != n && -1 != r && (a.source = t, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a.pathNames = function (e, t) {
                var n = /\/{2,9}/g, r = t.replace(n, "/").split("/");
                "/" != t.slice(0, 1) && 0 !== t.length || r.splice(0, 1);
                "/" == t.slice(-1) && r.splice(r.length - 1, 1);
                return r
            }(0, a.path), a.queryKey = function (e, t) {
                var n = {};
                return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (function (e, t, r) {
                    t && (n[t] = r)
                })), n
            }(0, a.query), a
        }

        var Bt = function (e) {
            v(n, e);
            var t = w(n);

            function n(e) {
                var r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return c(this, n), (r = t.call(this)).binaryType = "arraybuffer", r.writeBuffer = [], e && "object" === typeof e && (o = e, e = null), e ? (e = zt(e), o.hostname = e.host, o.secure = "https" === e.protocol || "wss" === e.protocol, o.port = e.port, e.query && (o.query = e.query)) : o.host && (o.hostname = zt(o.host).host), pt(b(r), o), r.secure = null != o.secure ? o.secure : "undefined" !== typeof location && "https:" === location.protocol, o.hostname && !o.port && (o.port = r.secure ? "443" : "80"), r.hostname = o.hostname || ("undefined" !== typeof location ? location.hostname : "localhost"), r.port = o.port || ("undefined" !== typeof location && location.port ? location.port : r.secure ? "443" : "80"), r.transports = o.transports || ["polling", "websocket", "webtransport"], r.writeBuffer = [], r.prevBufferLen = 0, r.opts = Object.assign({
                    path: "/engine.io",
                    agent: !1,
                    withCredentials: !1,
                    upgrade: !0,
                    timestampParam: "t",
                    rememberUpgrade: !1,
                    addTrailingSlash: !0,
                    rejectUnauthorized: !0,
                    perMessageDeflate: {threshold: 1024},
                    transportOptions: {},
                    closeOnBeforeunload: !1
                }, o), r.opts.path = r.opts.path.replace(/\/$/, "") + (r.opts.addTrailingSlash ? "/" : ""), "string" === typeof r.opts.query && (r.opts.query = function (e) {
                    for (var t = {}, n = e.split("&"), r = 0, o = n.length; r < o; r++) {
                        var a = n[r].split("=");
                        t[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
                    }
                    return t
                }(r.opts.query)), r.id = null, r.upgrades = null, r.pingInterval = null, r.pingTimeout = null, r.pingTimeoutTimer = null, "function" === typeof addEventListener && (r.opts.closeOnBeforeunload && (r.beforeunloadEventListener = function () {
                    r.transport && (r.transport.removeAllListeners(), r.transport.close())
                }, addEventListener("beforeunload", r.beforeunloadEventListener, !1)), "localhost" !== r.hostname && (r.offlineEventListener = function () {
                    r.onClose("transport close", {description: "network connection lost"})
                }, addEventListener("offline", r.offlineEventListener, !1))), r.open(), r
            }

            return h(n, [{
                key: "createTransport", value: function (e) {
                    var t = Object.assign({}, this.opts.query);
                    t.EIO = 4, t.transport = e, this.id && (t.sid = this.id);
                    var n = Object.assign({}, this.opts, {
                        query: t,
                        socket: this,
                        hostname: this.hostname,
                        secure: this.secure,
                        port: this.port
                    }, this.opts.transportOptions[e]);
                    return new Mt[e](n)
                }
            }, {
                key: "open", value: function () {
                    var e, t = this;
                    if (this.opts.rememberUpgrade && n.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) e = "websocket"; else {
                        if (0 === this.transports.length) return void this.setTimeoutFn((function () {
                            t.emitReserved("error", "No transports available")
                        }), 0);
                        e = this.transports[0]
                    }
                    this.readyState = "opening";
                    try {
                        e = this.createTransport(e)
                    } catch (r) {
                        return this.transports.shift(), void this.open()
                    }
                    e.open(), this.setTransport(e)
                }
            }, {
                key: "setTransport", value: function (e) {
                    var t = this;
                    this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (function (e) {
                        return t.onClose("transport close", e)
                    }))
                }
            }, {
                key: "probe", value: function (e) {
                    var t = this, r = this.createTransport(e), o = !1;
                    n.priorWebsocketSuccess = !1;
                    var a = function () {
                        o || (r.send([{type: "ping", data: "probe"}]), r.once("packet", (function (e) {
                            if (!o) if ("pong" === e.type && "probe" === e.data) {
                                if (t.upgrading = !0, t.emitReserved("upgrading", r), !r) return;
                                n.priorWebsocketSuccess = "websocket" === r.name, t.transport.pause((function () {
                                    o || "closed" !== t.readyState && (f(), t.setTransport(r), r.send([{type: "upgrade"}]), t.emitReserved("upgrade", r), r = null, t.upgrading = !1, t.flush())
                                }))
                            } else {
                                var a = new Error("probe error");
                                a.transport = r.name, t.emitReserved("upgradeError", a)
                            }
                        })))
                    };

                    function i() {
                        o || (o = !0, f(), r.close(), r = null)
                    }

                    var u = function (e) {
                        var n = new Error("probe error: " + e);
                        n.transport = r.name, i(), t.emitReserved("upgradeError", n)
                    };

                    function l() {
                        u("transport closed")
                    }

                    function s() {
                        u("socket closed")
                    }

                    function c(e) {
                        r && e.name !== r.name && i()
                    }

                    var f = function () {
                        r.removeListener("open", a), r.removeListener("error", u), r.removeListener("close", l), t.off("close", s), t.off("upgrading", c)
                    };
                    r.once("open", a), r.once("error", u), r.once("close", l), this.once("close", s), this.once("upgrading", c), -1 !== this.upgrades.indexOf("webtransport") && "webtransport" !== e ? this.setTimeoutFn((function () {
                        o || r.open()
                    }), 200) : r.open()
                }
            }, {
                key: "onOpen", value: function () {
                    if (this.readyState = "open", n.priorWebsocketSuccess = "websocket" === this.transport.name, this.emitReserved("open"), this.flush(), "open" === this.readyState && this.opts.upgrade) for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
                }
            }, {
                key: "onPacket", value: function (e) {
                    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (this.emitReserved("packet", e), this.emitReserved("heartbeat"), this.resetPingTimeout(), e.type) {
                        case"open":
                            this.onHandshake(JSON.parse(e.data));
                            break;
                        case"ping":
                            this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
                            break;
                        case"error":
                            var t = new Error("server error");
                            t.code = e.data, this.onError(t);
                            break;
                        case"message":
                            this.emitReserved("data", e.data), this.emitReserved("message", e.data)
                    }
                }
            }, {
                key: "onHandshake", value: function (e) {
                    this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.maxPayload = e.maxPayload, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout()
                }
            }, {
                key: "resetPingTimeout", value: function () {
                    var e = this;
                    this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn((function () {
                        e.onClose("ping timeout")
                    }), this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref()
                }
            }, {
                key: "onDrain", value: function () {
                    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush()
                }
            }, {
                key: "flush", value: function () {
                    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                        var e = this.getWritablePackets();
                        this.transport.send(e), this.prevBufferLen = e.length, this.emitReserved("flush")
                    }
                }
            }, {
                key: "getWritablePackets", value: function () {
                    if (!(this.maxPayload && "polling" === this.transport.name && this.writeBuffer.length > 1)) return this.writeBuffer;
                    for (var e, t = 1, n = 0; n < this.writeBuffer.length; n++) {
                        var r = this.writeBuffer[n].data;
                        if (r && (t += "string" === typeof (e = r) ? function (e) {
                            for (var t = 0, n = 0, r = 0, o = e.length; r < o; r++) (t = e.charCodeAt(r)) < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
                            return n
                        }(e) : Math.ceil(1.33 * (e.byteLength || e.size))), n > 0 && t > this.maxPayload) return this.writeBuffer.slice(0, n);
                        t += 2
                    }
                    return this.writeBuffer
                }
            }, {
                key: "write", value: function (e, t, n) {
                    return this.sendPacket("message", e, t, n), this
                }
            }, {
                key: "send", value: function (e, t, n) {
                    return this.sendPacket("message", e, t, n), this
                }
            }, {
                key: "sendPacket", value: function (e, t, n, r) {
                    if ("function" === typeof t && (r = t, t = void 0), "function" === typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                        (n = n || {}).compress = !1 !== n.compress;
                        var o = {type: e, data: t, options: n};
                        this.emitReserved("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), this.flush()
                    }
                }
            }, {
                key: "close", value: function () {
                    var e = this, t = function () {
                        e.onClose("forced close"), e.transport.close()
                    }, n = function n() {
                        e.off("upgrade", n), e.off("upgradeError", n), t()
                    }, r = function () {
                        e.once("upgrade", n), e.once("upgradeError", n)
                    };
                    return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", (function () {
                        e.upgrading ? r() : t()
                    })) : this.upgrading ? r() : t()), this
                }
            }, {
                key: "onError", value: function (e) {
                    n.priorWebsocketSuccess = !1, this.emitReserved("error", e), this.onClose("transport error", e)
                }
            }, {
                key: "onClose", value: function (e, t) {
                    "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" === typeof removeEventListener && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0)
                }
            }, {
                key: "filterUpgrades", value: function (e) {
                    for (var t = [], n = 0, r = e.length; n < r; n++) ~this.transports.indexOf(e[n]) && t.push(e[n]);
                    return t
                }
            }]), n
        }(ut);
        Bt.protocol = 4;
        Bt.protocol;
        var Ft = "function" === typeof ArrayBuffer, Vt = function (e) {
                return "function" === typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer
            }, Ht = Object.prototype.toString,
            Wt = "function" === typeof Blob || "undefined" !== typeof Blob && "[object BlobConstructor]" === Ht.call(Blob),
            $t = "function" === typeof File || "undefined" !== typeof File && "[object FileConstructor]" === Ht.call(File);

        function qt(e) {
            return Ft && (e instanceof ArrayBuffer || Vt(e)) || Wt && e instanceof Blob || $t && e instanceof File
        }

        function Kt(e, t) {
            if (!e || "object" !== typeof e) return !1;
            if (Array.isArray(e)) {
                for (var n = 0, r = e.length; n < r; n++) if (Kt(e[n])) return !0;
                return !1
            }
            if (qt(e)) return !0;
            if (e.toJSON && "function" === typeof e.toJSON && 1 === arguments.length) return Kt(e.toJSON(), !0);
            for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o) && Kt(e[o])) return !0;
            return !1
        }

        function Qt(e) {
            var t = [], n = e.data, r = e;
            return r.data = Yt(n, t), r.attachments = t.length, {packet: r, buffers: t}
        }

        function Yt(e, t) {
            if (!e) return e;
            if (qt(e)) {
                var n = {_placeholder: !0, num: t.length};
                return t.push(e), n
            }
            if (Array.isArray(e)) {
                for (var r = new Array(e.length), o = 0; o < e.length; o++) r[o] = Yt(e[o], t);
                return r
            }
            if ("object" === typeof e && !(e instanceof Date)) {
                var a = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (a[i] = Yt(e[i], t));
                return a
            }
            return e
        }

        function Xt(e, t) {
            return e.data = Gt(e.data, t), delete e.attachments, e
        }

        function Gt(e, t) {
            if (!e) return e;
            if (e && !0 === e._placeholder) {
                if ("number" === typeof e.num && e.num >= 0 && e.num < t.length) return t[e.num];
                throw new Error("illegal attachments")
            }
            if (Array.isArray(e)) for (var n = 0; n < e.length; n++) e[n] = Gt(e[n], t); else if ("object" === typeof e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (e[r] = Gt(e[r], t));
            return e
        }

        var Jt, Zt = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"],
            en = 5;
        !function (e) {
            e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK"
        }(Jt || (Jt = {}));
        var tn = function () {
            function e(t) {
                c(this, e), this.replacer = t
            }

            return h(e, [{
                key: "encode", value: function (e) {
                    return e.type !== Jt.EVENT && e.type !== Jt.ACK || !Kt(e) ? [this.encodeAsString(e)] : this.encodeAsBinary({
                        type: e.type === Jt.EVENT ? Jt.BINARY_EVENT : Jt.BINARY_ACK,
                        nsp: e.nsp,
                        data: e.data,
                        id: e.id
                    })
                }
            }, {
                key: "encodeAsString", value: function (e) {
                    var t = "" + e.type;
                    return e.type !== Jt.BINARY_EVENT && e.type !== Jt.BINARY_ACK || (t += e.attachments + "-"), e.nsp && "/" !== e.nsp && (t += e.nsp + ","), null != e.id && (t += e.id), null != e.data && (t += JSON.stringify(e.data, this.replacer)), t
                }
            }, {
                key: "encodeAsBinary", value: function (e) {
                    var t = Qt(e), n = this.encodeAsString(t.packet), r = t.buffers;
                    return r.unshift(n), r
                }
            }]), e
        }();

        function nn(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        }

        var rn = function (e) {
            v(n, e);
            var t = w(n);

            function n(e) {
                var r;
                return c(this, n), (r = t.call(this)).reviver = e, r
            }

            return h(n, [{
                key: "add", value: function (e) {
                    var t;
                    if ("string" === typeof e) {
                        if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
                        var r = (t = this.decodeString(e)).type === Jt.BINARY_EVENT;
                        r || t.type === Jt.BINARY_ACK ? (t.type = r ? Jt.EVENT : Jt.ACK, this.reconstructor = new on(t), 0 === t.attachments && Ue(m(n.prototype), "emitReserved", this).call(this, "decoded", t)) : Ue(m(n.prototype), "emitReserved", this).call(this, "decoded", t)
                    } else {
                        if (!qt(e) && !e.base64) throw new Error("Unknown type: " + e);
                        if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                        (t = this.reconstructor.takeBinaryData(e)) && (this.reconstructor = null, Ue(m(n.prototype), "emitReserved", this).call(this, "decoded", t))
                    }
                }
            }, {
                key: "decodeString", value: function (e) {
                    var t = 0, r = {type: Number(e.charAt(0))};
                    if (void 0 === Jt[r.type]) throw new Error("unknown packet type " + r.type);
                    if (r.type === Jt.BINARY_EVENT || r.type === Jt.BINARY_ACK) {
                        for (var o = t + 1; "-" !== e.charAt(++t) && t != e.length;) ;
                        var a = e.substring(o, t);
                        if (a != Number(a) || "-" !== e.charAt(t)) throw new Error("Illegal attachments");
                        r.attachments = Number(a)
                    }
                    if ("/" === e.charAt(t + 1)) {
                        for (var i = t + 1; ++t;) {
                            if ("," === e.charAt(t)) break;
                            if (t === e.length) break
                        }
                        r.nsp = e.substring(i, t)
                    } else r.nsp = "/";
                    var u = e.charAt(t + 1);
                    if ("" !== u && Number(u) == u) {
                        for (var l = t + 1; ++t;) {
                            var s = e.charAt(t);
                            if (null == s || Number(s) != s) {
                                --t;
                                break
                            }
                            if (t === e.length) break
                        }
                        r.id = Number(e.substring(l, t + 1))
                    }
                    if (e.charAt(++t)) {
                        var c = this.tryParse(e.substr(t));
                        if (!n.isPayloadValid(r.type, c)) throw new Error("invalid payload");
                        r.data = c
                    }
                    return r
                }
            }, {
                key: "tryParse", value: function (e) {
                    try {
                        return JSON.parse(e, this.reviver)
                    } catch (t) {
                        return !1
                    }
                }
            }, {
                key: "destroy", value: function () {
                    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null)
                }
            }], [{
                key: "isPayloadValid", value: function (e, t) {
                    switch (e) {
                        case Jt.CONNECT:
                            return nn(t);
                        case Jt.DISCONNECT:
                            return void 0 === t;
                        case Jt.CONNECT_ERROR:
                            return "string" === typeof t || nn(t);
                        case Jt.EVENT:
                        case Jt.BINARY_EVENT:
                            return Array.isArray(t) && ("number" === typeof t[0] || "string" === typeof t[0] && -1 === Zt.indexOf(t[0]));
                        case Jt.ACK:
                        case Jt.BINARY_ACK:
                            return Array.isArray(t)
                    }
                }
            }]), n
        }(ut), on = function () {
            function e(t) {
                c(this, e), this.packet = t, this.buffers = [], this.reconPack = t
            }

            return h(e, [{
                key: "takeBinaryData", value: function (e) {
                    if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
                        var t = Xt(this.reconPack, this.buffers);
                        return this.finishedReconstruction(), t
                    }
                    return null
                }
            }, {
                key: "finishedReconstruction", value: function () {
                    this.reconPack = null, this.buffers = []
                }
            }]), e
        }();

        function an(e, t, n) {
            return e.on(t, n), function () {
                e.off(t, n)
            }
        }

        var un = Object.freeze({
            connect: 1,
            connect_error: 1,
            disconnect: 1,
            disconnecting: 1,
            newListener: 1,
            removeListener: 1
        }), ln = function (e) {
            v(n, e);
            var t = w(n);

            function n(e, r, o) {
                var a;
                return c(this, n), (a = t.call(this)).connected = !1, a.recovered = !1, a.receiveBuffer = [], a.sendBuffer = [], a._queue = [], a._queueSeq = 0, a.ids = 0, a.acks = {}, a.flags = {}, a.io = e, a.nsp = r, o && o.auth && (a.auth = o.auth), a._opts = Object.assign({}, o), a.io._autoConnect && a.open(), a
            }

            return h(n, [{
                key: "disconnected", get: function () {
                    return !this.connected
                }
            }, {
                key: "subEvents", value: function () {
                    if (!this.subs) {
                        var e = this.io;
                        this.subs = [an(e, "open", this.onopen.bind(this)), an(e, "packet", this.onpacket.bind(this)), an(e, "error", this.onerror.bind(this)), an(e, "close", this.onclose.bind(this))]
                    }
                }
            }, {
                key: "active", get: function () {
                    return !!this.subs
                }
            }, {
                key: "connect", value: function () {
                    return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this
                }
            }, {
                key: "open", value: function () {
                    return this.connect()
                }
            }, {
                key: "send", value: function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.unshift("message"), this.emit.apply(this, t), this
                }
            }, {
                key: "emit", value: function (e) {
                    if (un.hasOwnProperty(e)) throw new Error('"' + e.toString() + '" is a reserved event name');
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    if (n.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(n), this;
                    var o = {type: Jt.EVENT, data: n, options: {}};
                    if (o.options.compress = !1 !== this.flags.compress, "function" === typeof n[n.length - 1]) {
                        var a = this.ids++, i = n.pop();
                        this._registerAckCallback(a, i), o.id = a
                    }
                    var u = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
                    return this.flags.volatile && (!u || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this
                }
            }, {
                key: "_registerAckCallback", value: function (e, t) {
                    var n, r = this, o = null !== (n = this.flags.timeout) && void 0 !== n ? n : this._opts.ackTimeout;
                    if (void 0 !== o) {
                        var a = this.io.setTimeoutFn((function () {
                            delete r.acks[e];
                            for (var n = 0; n < r.sendBuffer.length; n++) r.sendBuffer[n].id === e && r.sendBuffer.splice(n, 1);
                            t.call(r, new Error("operation has timed out"))
                        }), o);
                        this.acks[e] = function () {
                            r.io.clearTimeoutFn(a);
                            for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                            t.apply(r, [null].concat(n))
                        }
                    } else this.acks[e] = t
                }
            }, {
                key: "emitWithAck", value: function (e) {
                    for (var t = this, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                    var a = void 0 !== this.flags.timeout || void 0 !== this._opts.ackTimeout;
                    return new Promise((function (n, o) {
                        r.push((function (e, t) {
                            return a ? e ? o(e) : n(t) : n(e)
                        })), t.emit.apply(t, [e].concat(r))
                    }))
                }
            }, {
                key: "_addToQueue", value: function (e) {
                    var t, n = this;
                    "function" === typeof e[e.length - 1] && (t = e.pop());
                    var r = {
                        id: this._queueSeq++,
                        tryCount: 0,
                        pending: !1,
                        args: e,
                        flags: Object.assign({fromQueue: !0}, this.flags)
                    };
                    e.push((function (e) {
                        if (r === n._queue[0]) {
                            if (null !== e) r.tryCount > n._opts.retries && (n._queue.shift(), t && t(e)); else if (n._queue.shift(), t) {
                                for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) a[i - 1] = arguments[i];
                                t.apply(void 0, [null].concat(a))
                            }
                            return r.pending = !1, n._drainQueue()
                        }
                    })), this._queue.push(r), this._drainQueue()
                }
            }, {
                key: "_drainQueue", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.connected && 0 !== this._queue.length) {
                        var t = this._queue[0];
                        t.pending && !e || (t.pending = !0, t.tryCount++, this.flags = t.flags, this.emit.apply(this, t.args))
                    }
                }
            }, {
                key: "packet", value: function (e) {
                    e.nsp = this.nsp, this.io._packet(e)
                }
            }, {
                key: "onopen", value: function () {
                    var e = this;
                    "function" == typeof this.auth ? this.auth((function (t) {
                        e._sendConnectPacket(t)
                    })) : this._sendConnectPacket(this.auth)
                }
            }, {
                key: "_sendConnectPacket", value: function (e) {
                    this.packet({
                        type: Jt.CONNECT,
                        data: this._pid ? Object.assign({pid: this._pid, offset: this._lastOffset}, e) : e
                    })
                }
            }, {
                key: "onerror", value: function (e) {
                    this.connected || this.emitReserved("connect_error", e)
                }
            }, {
                key: "onclose", value: function (e, t) {
                    this.connected = !1, delete this.id, this.emitReserved("disconnect", e, t)
                }
            }, {
                key: "onpacket", value: function (e) {
                    if (e.nsp === this.nsp) switch (e.type) {
                        case Jt.CONNECT:
                            e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x frontend, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                            break;
                        case Jt.EVENT:
                        case Jt.BINARY_EVENT:
                            this.onevent(e);
                            break;
                        case Jt.ACK:
                        case Jt.BINARY_ACK:
                            this.onack(e);
                            break;
                        case Jt.DISCONNECT:
                            this.ondisconnect();
                            break;
                        case Jt.CONNECT_ERROR:
                            this.destroy();
                            var t = new Error(e.data.message);
                            t.data = e.data.data, this.emitReserved("connect_error", t)
                    }
                }
            }, {
                key: "onevent", value: function (e) {
                    var t = e.data || [];
                    null != e.id && t.push(this.ack(e.id)), this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t))
                }
            }, {
                key: "emitEvent", value: function (e) {
                    if (this._anyListeners && this._anyListeners.length) {
                        var t, r = _(this._anyListeners.slice());
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                t.value.apply(this, e)
                            }
                        } catch (Hn) {
                            r.e(Hn)
                        } finally {
                            r.f()
                        }
                    }
                    Ue(m(n.prototype), "emit", this).apply(this, e), this._pid && e.length && "string" === typeof e[e.length - 1] && (this._lastOffset = e[e.length - 1])
                }
            }, {
                key: "ack", value: function (e) {
                    var t = this, n = !1;
                    return function () {
                        if (!n) {
                            n = !0;
                            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                            t.packet({type: Jt.ACK, id: e, data: o})
                        }
                    }
                }
            }, {
                key: "onack", value: function (e) {
                    var t = this.acks[e.id];
                    "function" === typeof t && (t.apply(this, e.data), delete this.acks[e.id])
                }
            }, {
                key: "onconnect", value: function (e, t) {
                    this.id = e, this.recovered = t && this._pid === t, this._pid = t, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0)
                }
            }, {
                key: "emitBuffered", value: function () {
                    var e = this;
                    this.receiveBuffer.forEach((function (t) {
                        return e.emitEvent(t)
                    })), this.receiveBuffer = [], this.sendBuffer.forEach((function (t) {
                        e.notifyOutgoingListeners(t), e.packet(t)
                    })), this.sendBuffer = []
                }
            }, {
                key: "ondisconnect", value: function () {
                    this.destroy(), this.onclose("io server disconnect")
                }
            }, {
                key: "destroy", value: function () {
                    this.subs && (this.subs.forEach((function (e) {
                        return e()
                    })), this.subs = void 0), this.io._destroy(this)
                }
            }, {
                key: "disconnect", value: function () {
                    return this.connected && this.packet({type: Jt.DISCONNECT}), this.destroy(), this.connected && this.onclose("io frontend disconnect"), this
                }
            }, {
                key: "close", value: function () {
                    return this.disconnect()
                }
            }, {
                key: "compress", value: function (e) {
                    return this.flags.compress = e, this
                }
            }, {
                key: "volatile", get: function () {
                    return this.flags.volatile = !0, this
                }
            }, {
                key: "timeout", value: function (e) {
                    return this.flags.timeout = e, this
                }
            }, {
                key: "onAny", value: function (e) {
                    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this
                }
            }, {
                key: "prependAny", value: function (e) {
                    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this
                }
            }, {
                key: "offAny", value: function (e) {
                    if (!this._anyListeners) return this;
                    if (e) {
                        for (var t = this._anyListeners, n = 0; n < t.length; n++) if (e === t[n]) return t.splice(n, 1), this
                    } else this._anyListeners = [];
                    return this
                }
            }, {
                key: "listenersAny", value: function () {
                    return this._anyListeners || []
                }
            }, {
                key: "onAnyOutgoing", value: function (e) {
                    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this
                }
            }, {
                key: "prependAnyOutgoing", value: function (e) {
                    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this
                }
            }, {
                key: "offAnyOutgoing", value: function (e) {
                    if (!this._anyOutgoingListeners) return this;
                    if (e) {
                        for (var t = this._anyOutgoingListeners, n = 0; n < t.length; n++) if (e === t[n]) return t.splice(n, 1), this
                    } else this._anyOutgoingListeners = [];
                    return this
                }
            }, {
                key: "listenersAnyOutgoing", value: function () {
                    return this._anyOutgoingListeners || []
                }
            }, {
                key: "notifyOutgoingListeners", value: function (e) {
                    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
                        var t, n = _(this._anyOutgoingListeners.slice());
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                t.value.apply(this, e.data)
                            }
                        } catch (Hn) {
                            n.e(Hn)
                        } finally {
                            n.f()
                        }
                    }
                }
            }]), n
        }(ut);

        function sn(e) {
            e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
        }

        sn.prototype.duration = function () {
            var e = this.ms * Math.pow(this.factor, this.attempts++);
            if (this.jitter) {
                var t = Math.random(), n = Math.floor(t * this.jitter * e);
                e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
            }
            return 0 | Math.min(e, this.max)
        }, sn.prototype.reset = function () {
            this.attempts = 0
        }, sn.prototype.setMin = function (e) {
            this.ms = e
        }, sn.prototype.setMax = function (e) {
            this.max = e
        }, sn.prototype.setJitter = function (e) {
            this.jitter = e
        };
        var cn = function (t) {
            v(r, t);
            var n = w(r);

            function r(t, o) {
                var a, i;
                c(this, r), (a = n.call(this)).nsps = {}, a.subs = [], t && "object" === typeof t && (o = t, t = void 0), (o = o || {}).path = o.path || "/socket.io", a.opts = o, pt(b(a), o), a.reconnection(!1 !== o.reconnection), a.reconnectionAttempts(o.reconnectionAttempts || 1 / 0), a.reconnectionDelay(o.reconnectionDelay || 1e3), a.reconnectionDelayMax(o.reconnectionDelayMax || 5e3), a.randomizationFactor(null !== (i = o.randomizationFactor) && void 0 !== i ? i : .5), a.backoff = new sn({
                    min: a.reconnectionDelay(),
                    max: a.reconnectionDelayMax(),
                    jitter: a.randomizationFactor()
                }), a.timeout(null == o.timeout ? 2e4 : o.timeout), a._readyState = "closed", a.uri = t;
                var u = o.parser || e;
                return a.encoder = new u.Encoder, a.decoder = new u.Decoder, a._autoConnect = !1 !== o.autoConnect, a._autoConnect && a.open(), a
            }

            return h(r, [{
                key: "reconnection", value: function (e) {
                    return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
                }
            }, {
                key: "reconnectionAttempts", value: function (e) {
                    return void 0 === e ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this)
                }
            }, {
                key: "reconnectionDelay", value: function (e) {
                    var t;
                    return void 0 === e ? this._reconnectionDelay : (this._reconnectionDelay = e, null === (t = this.backoff) || void 0 === t || t.setMin(e), this)
                }
            }, {
                key: "randomizationFactor", value: function (e) {
                    var t;
                    return void 0 === e ? this._randomizationFactor : (this._randomizationFactor = e, null === (t = this.backoff) || void 0 === t || t.setJitter(e), this)
                }
            }, {
                key: "reconnectionDelayMax", value: function (e) {
                    var t;
                    return void 0 === e ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, null === (t = this.backoff) || void 0 === t || t.setMax(e), this)
                }
            }, {
                key: "timeout", value: function (e) {
                    return arguments.length ? (this._timeout = e, this) : this._timeout
                }
            }, {
                key: "maybeReconnectOnOpen", value: function () {
                    !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
                }
            }, {
                key: "open", value: function (e) {
                    var t = this;
                    if (~this._readyState.indexOf("open")) return this;
                    this.engine = new Bt(this.uri, this.opts);
                    var n = this.engine, r = this;
                    this._readyState = "opening", this.skipReconnect = !1;
                    var o = an(n, "open", (function () {
                        r.onopen(), e && e()
                    })), a = function (n) {
                        t.cleanup(), t._readyState = "closed", t.emitReserved("error", n), e ? e(n) : t.maybeReconnectOnOpen()
                    }, i = an(n, "error", a);
                    if (!1 !== this._timeout) {
                        var u = this._timeout, l = this.setTimeoutFn((function () {
                            o(), a(new Error("timeout")), n.close()
                        }), u);
                        this.opts.autoUnref && l.unref(), this.subs.push((function () {
                            t.clearTimeoutFn(l)
                        }))
                    }
                    return this.subs.push(o), this.subs.push(i), this
                }
            }, {
                key: "connect", value: function (e) {
                    return this.open(e)
                }
            }, {
                key: "onopen", value: function () {
                    this.cleanup(), this._readyState = "open", this.emitReserved("open");
                    var e = this.engine;
                    this.subs.push(an(e, "ping", this.onping.bind(this)), an(e, "data", this.ondata.bind(this)), an(e, "error", this.onerror.bind(this)), an(e, "close", this.onclose.bind(this)), an(this.decoder, "decoded", this.ondecoded.bind(this)))
                }
            }, {
                key: "onping", value: function () {
                    this.emitReserved("ping")
                }
            }, {
                key: "ondata", value: function (e) {
                    try {
                        this.decoder.add(e)
                    } catch (t) {
                        this.onclose("parse error", t)
                    }
                }
            }, {
                key: "ondecoded", value: function (e) {
                    var t = this;
                    Rt((function () {
                        t.emitReserved("packet", e)
                    }), this.setTimeoutFn)
                }
            }, {
                key: "onerror", value: function (e) {
                    this.emitReserved("error", e)
                }
            }, {
                key: "socket", value: function (e, t) {
                    var n = this.nsps[e];
                    return n ? this._autoConnect && !n.active && n.connect() : (n = new ln(this, e, t), this.nsps[e] = n), n
                }
            }, {
                key: "_destroy", value: function (e) {
                    for (var t = 0, n = Object.keys(this.nsps); t < n.length; t++) {
                        var r = n[t];
                        if (this.nsps[r].active) return
                    }
                    this._close()
                }
            }, {
                key: "_packet", value: function (e) {
                    for (var t = this.encoder.encode(e), n = 0; n < t.length; n++) this.engine.write(t[n], e.options)
                }
            }, {
                key: "cleanup", value: function () {
                    this.subs.forEach((function (e) {
                        return e()
                    })), this.subs.length = 0, this.decoder.destroy()
                }
            }, {
                key: "_close", value: function () {
                    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close()
                }
            }, {
                key: "disconnect", value: function () {
                    return this._close()
                }
            }, {
                key: "onclose", value: function (e, t) {
                    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, t), this._reconnection && !this.skipReconnect && this.reconnect()
                }
            }, {
                key: "reconnect", value: function () {
                    var e = this;
                    if (this._reconnecting || this.skipReconnect) return this;
                    var t = this;
                    if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1; else {
                        var n = this.backoff.duration();
                        this._reconnecting = !0;
                        var r = this.setTimeoutFn((function () {
                            t.skipReconnect || (e.emitReserved("reconnect_attempt", t.backoff.attempts), t.skipReconnect || t.open((function (n) {
                                n ? (t._reconnecting = !1, t.reconnect(), e.emitReserved("reconnect_error", n)) : t.onreconnect()
                            })))
                        }), n);
                        this.opts.autoUnref && r.unref(), this.subs.push((function () {
                            e.clearTimeoutFn(r)
                        }))
                    }
                }
            }, {
                key: "onreconnect", value: function () {
                    var e = this.backoff.attempts;
                    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e)
                }
            }]), r
        }(ut), fn = {};

        function pn(e, t) {
            "object" === typeof e && (t = e, e = void 0);
            var n, r = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments.length > 2 ? arguments[2] : void 0, r = e;
                n = n || "undefined" !== typeof location && location, null == e && (e = n.protocol + "//" + n.host), "string" === typeof e && ("/" === e.charAt(0) && (e = "/" === e.charAt(1) ? n.protocol + e : n.host + e), /^(https?|wss?):\/\//.test(e) || (e = "undefined" !== typeof n ? n.protocol + "//" + e : "https://" + e), r = zt(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
                var o = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
                return r.id = r.protocol + "://" + o + ":" + r.port + t, r.href = r.protocol + "://" + o + (n && n.port === r.port ? "" : ":" + r.port), r
            }(e, (t = t || {}).path || "/socket.io"), o = r.source, a = r.id, i = r.path, u = fn[a] && i in fn[a].nsps;
            return t.forceNew || t["force new connection"] || !1 === t.multiplex || u ? n = new cn(o, t) : (fn[a] || (fn[a] = new cn(o, t)), n = fn[a]), r.query && !t.query && (t.query = r.queryKey), n.socket(r.path, t)
        }

        Object.assign(pn, {Manager: cn, Socket: ln, io: pn, connect: pn});
        var dn = n(184), hn = (0, r.createContext)(null), yn = function () {
                return (0, r.useContext)(hn)
            }, vn = function (e) {
                var t = (0, r.useMemo)((function () {
                    return pn("http://localhost:4000/")
                }), []);
                return (0, dn.jsx)(hn.Provider, {value: t, children: e.children})
            }, mn = "Lobby_title__gcqnq", gn = "Lobby_details__UhJaj", bn = "Lobby_container__Ty4gh",
            wn = "Lobby_form__iwNH-", kn = "Lobby_input__+jQBc", Pn = "Lobby_button__lcIrB", Sn = function () {
                var e = E((0, r.useState)(""), 2), t = e[0], n = e[1], o = E((0, r.useState)(""), 2), a = o[0], i = o[1],
                    u = yn(), l = we(), s = (0, r.useCallback)((function (e) {
                        e.preventDefault(), u.emit("room:join", {email: t, room: a})
                    }), [t, a, u]), c = (0, r.useCallback)((function (e) {
                        e.email;
                        var t = e.room;
                        l("/room/".concat(t))
                    }), [l]);
                return (0, r.useEffect)((function () {
                    return u.on("room:join", c), function () {
                        u.off("room:join", c)
                    }
                }), [u, c]), (0, dn.jsxs)("div", {
                    className: bn,
                    children: [(0, dn.jsx)("h1", {
                        className: mn,
                        children: "VIDEO MONITORING - PROCTORED EXAM TOOL"
                    }), (0, dn.jsx)("div", {
                        className: wn,
                        children: (0, dn.jsxs)("form", {
                            onSubmit: s,
                            children: [(0, dn.jsx)("h2", {
                                className: gn,
                                children: "DETAILS"
                            }), (0, dn.jsx)("input", {
                                className: kn,
                                type: "email",
                                id: "email",
                                value: t,
                                onChange: function (e) {
                                    return n(e.target.value)
                                },
                                placeholder: "Email"
                            }), (0, dn.jsx)("br", {}), (0, dn.jsx)("input", {
                                placeholder: "Room Number",
                                className: kn,
                                type: "text",
                                id: "room",
                                value: a,
                                onChange: function (e) {
                                    return i(e.target.value)
                                }
                            }), (0, dn.jsx)("br", {}), (0, dn.jsx)("button", {className: Pn, children: "Join"})]
                        })
                    })]
                })
            };

        function On() {
            On = function () {
                return e
            };
            var e = {}, t = Object.prototype, n = t.hasOwnProperty, r = Object.defineProperty || function (e, t, n) {
                    e[t] = n.value
                }, o = "function" == typeof Symbol ? Symbol : {}, a = o.iterator || "@@iterator",
                i = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag";

            function l(e, t, n) {
                return Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}), e[t]
            }

            try {
                l({}, "")
            } catch (Hn) {
                l = function (e, t, n) {
                    return e[t] = n
                }
            }

            function s(e, t, n, o) {
                var a = t && t.prototype instanceof d ? t : d, i = Object.create(a.prototype), u = new _(o || []);
                return r(i, "_invoke", {value: P(e, n, u)}), i
            }

            function c(e, t, n) {
                try {
                    return {type: "normal", arg: e.call(t, n)}
                } catch (Hn) {
                    return {type: "throw", arg: Hn}
                }
            }

            e.wrap = s;
            var p = {};

            function d() {
            }

            function h() {
            }

            function y() {
            }

            var v = {};
            l(v, a, (function () {
                return this
            }));
            var m = Object.getPrototypeOf, g = m && m(m(C([])));
            g && g !== t && n.call(g, a) && (v = g);
            var b = y.prototype = d.prototype = Object.create(v);

            function w(e) {
                ["next", "throw", "return"].forEach((function (t) {
                    l(e, t, (function (e) {
                        return this._invoke(t, e)
                    }))
                }))
            }

            function k(e, t) {
                function o(r, a, i, u) {
                    var l = c(e[r], e, a);
                    if ("throw" !== l.type) {
                        var s = l.arg, p = s.value;
                        return p && "object" == f(p) && n.call(p, "__await") ? t.resolve(p.__await).then((function (e) {
                            o("next", e, i, u)
                        }), (function (e) {
                            o("throw", e, i, u)
                        })) : t.resolve(p).then((function (e) {
                            s.value = e, i(s)
                        }), (function (e) {
                            return o("throw", e, i, u)
                        }))
                    }
                    u(l.arg)
                }

                var a;
                r(this, "_invoke", {
                    value: function (e, n) {
                        function r() {
                            return new t((function (t, r) {
                                o(e, n, t, r)
                            }))
                        }

                        return a = a ? a.then(r, r) : r()
                    }
                })
            }

            function P(e, t, n) {
                var r = "suspendedStart";
                return function (o, a) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === o) throw a;
                        return {value: void 0, done: !0}
                    }
                    for (n.method = o, n.arg = a; ;) {
                        var i = n.delegate;
                        if (i) {
                            var u = S(i, n);
                            if (u) {
                                if (u === p) continue;
                                return u
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var l = c(e, t, n);
                        if ("normal" === l.type) {
                            if (r = n.done ? "completed" : "suspendedYield", l.arg === p) continue;
                            return {value: l.arg, done: n.done}
                        }
                        "throw" === l.type && (r = "completed", n.method = "throw", n.arg = l.arg)
                    }
                }
            }

            function S(e, t) {
                var n = t.method, r = e.iterator[n];
                if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), p;
                var o = c(r, e.iterator, t.arg);
                if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, p;
                var a = o.arg;
                return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
            }

            function O(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function E(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function _(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(O, this), this.reset(!0)
            }

            function C(e) {
                if (e || "" === e) {
                    var t = e[a];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var r = -1, o = function t() {
                            for (; ++r < e.length;) if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t
                        };
                        return o.next = o
                    }
                }
                throw new TypeError(f(e) + " is not iterable")
            }

            return h.prototype = y, r(b, "constructor", {value: y, configurable: !0}), r(y, "constructor", {
                value: h,
                configurable: !0
            }), h.displayName = l(y, u, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function (e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, l(e, u, "GeneratorFunction")), e.prototype = Object.create(b), e
            }, e.awrap = function (e) {
                return {__await: e}
            }, w(k.prototype), l(k.prototype, i, (function () {
                return this
            })), e.AsyncIterator = k, e.async = function (t, n, r, o, a) {
                void 0 === a && (a = Promise);
                var i = new k(s(t, n, r, o), a);
                return e.isGeneratorFunction(n) ? i : i.next().then((function (e) {
                    return e.done ? e.value : i.next()
                }))
            }, w(b), l(b, u, "Generator"), l(b, a, (function () {
                return this
            })), l(b, "toString", (function () {
                return "[object Generator]"
            })), e.keys = function (e) {
                var t = Object(e), n = [];
                for (var r in t) n.push(r);
                return n.reverse(), function e() {
                    for (; n.length;) {
                        var r = n.pop();
                        if (r in t) return e.value = r, e.done = !1, e
                    }
                    return e.done = !0, e
                }
            }, e.values = C, _.prototype = {
                constructor: _, reset: function (e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                }, stop: function () {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                }, dispatchException: function (e) {
                    if (this.done) throw e;
                    var t = this;

                    function r(n, r) {
                        return i.type = "throw", i.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                    }

                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var a = this.tryEntries[o], i = a.completion;
                        if ("root" === a.tryLoc) return r("end");
                        if (a.tryLoc <= this.prev) {
                            var u = n.call(a, "catchLoc"), l = n.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                            }
                        }
                    }
                }, abrupt: function (e, t) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var a = o;
                            break
                        }
                    }
                    a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                    var i = a ? a.completion : {};
                    return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, p) : this.complete(i)
                }, complete: function (e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                }, finish: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), p
                    }
                }, catch: function (e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                E(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                }, delegateYield: function (e, t, n) {
                    return this.delegate = {
                        iterator: C(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), p
                }
            }, e
        }

        function En(e, t, n, r, o, a, i) {
            try {
                var u = e[a](i), l = u.value
            } catch (s) {
                return void n(s)
            }
            u.done ? t(l) : Promise.resolve(l).then(r, o)
        }

        function _n(e) {
            return function () {
                var t = this, n = arguments;
                return new Promise((function (r, o) {
                    var a = e.apply(t, n);

                    function i(e) {
                        En(a, r, o, i, u, "next", e)
                    }

                    function u(e) {
                        En(a, r, o, i, u, "throw", e)
                    }

                    i(void 0)
                }))
            }
        }

        var Cn = n(710), xn = function () {
                function e() {
                    c(this, e), this.peer || (this.peer = new RTCPeerConnection({iceServers: [{urls: ["stun:stun.l.google.com:19302", "stun:global.stun.twilio.com:3478"]}]}))
                }

                return h(e, [{
                    key: "getAnswer", value: function () {
                        var e = _n(On().mark((function e(t) {
                            var n;
                            return On().wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.peer) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 3, this.peer.setRemoteDescription(t);
                                    case 3:
                                        return e.next = 5, this.peer.createAnswer();
                                    case 5:
                                        return n = e.sent, e.next = 8, this.peer.setLocalDescription(new RTCSessionDescription(n));
                                    case 8:
                                        return e.abrupt("return", n);
                                    case 9:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "setLocalDescription", value: function () {
                        var e = _n(On().mark((function e(t) {
                            return On().wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.peer) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.next = 3, this.peer.setRemoteDescription(new RTCSessionDescription(t));
                                    case 3:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getOffer", value: function () {
                        var e = _n(On().mark((function e() {
                            var t;
                            return On().wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.peer) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 3, this.peer.createOffer();
                                    case 3:
                                        return t = e.sent, e.next = 6, this.peer.setLocalDescription(new RTCSessionDescription(t));
                                    case 6:
                                        return e.abrupt("return", t);
                                    case 7:
                                    case"end":
                                        return e.stop()
                                }
                            }), e, this)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }()
                }]), e
            }(), jn = new xn, Tn = "Room_container__EoJy-", Rn = "Room_title__pnzSO", Ln = "Room_button__yBQw1",
            Dn = "Room_desc__uQWZe", Nn = "Room_buttonDiv__asO0g", An = "Room_streamDiv__ZdeO2",
            Mn = "Room_streamTitle__wVVuS", In = function () {
                var e = function () {
                        var e = r.useContext(ye).matches, t = e[e.length - 1];
                        return t ? t.params : {}
                    }().roomId, t = yn(), n = E((0, r.useState)(null), 2), o = n[0], a = n[1], i = E((0, r.useState)(), 2),
                    u = i[0], l = i[1], s = E((0, r.useState)(), 2), c = s[0], f = s[1],
                    p = (0, r.useCallback)((function (e) {
                        var t = e.email, n = e.id;
                        console.log("Email ".concat(t, " joined room")), a(n)
                    }), []), d = (0, r.useCallback)(_n(On().mark((function e() {
                        var n, r;
                        return On().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, navigator.mediaDevices.getUserMedia({audio: !0, video: !0});
                                case 2:
                                    return n = e.sent, e.next = 5, jn.getOffer();
                                case 5:
                                    r = e.sent, t.emit("user:call", {to: o, offer: r}), l(n);
                                case 8:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [o, t]), h = (0, r.useCallback)(function () {
                        var e = _n(On().mark((function e(n) {
                            var r, o, i, u;
                            return On().wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = n.from, o = n.offer, a(r), e.next = 4, navigator.mediaDevices.getUserMedia({
                                            audio: !0,
                                            video: !0
                                        });
                                    case 4:
                                        return i = e.sent, l(i), console.log("Incoming Call", r, o), e.next = 9, jn.getAnswer(o);
                                    case 9:
                                        u = e.sent, t.emit("call:accepted", {to: r, ans: u});
                                    case 11:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }(), [t]), y = (0, r.useCallback)((function () {
                        var e, t = _(u.getTracks());
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                var n = e.value;
                                jn.peer.addTrack(n, u)
                            }
                        } catch (Hn) {
                            t.e(Hn)
                        } finally {
                            t.f()
                        }
                    }), [u]), v = (0, r.useCallback)((function (e) {
                        e.from;
                        var t = e.ans;
                        jn.setLocalDescription(t), console.log("Call Accepted!"), y()
                    }), [y]), m = (0, r.useCallback)(_n(On().mark((function e() {
                        var n;
                        return On().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, jn.getOffer();
                                case 2:
                                    n = e.sent, t.emit("peer:nego:needed", {offer: n, to: o});
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [o, t]);
                (0, r.useEffect)((function () {
                    return jn.peer.addEventListener("negotiationneeded", m), function () {
                        jn.peer.removeEventListener("negotiationneeded", m)
                    }
                }), [m]);
                var g = (0, r.useCallback)(function () {
                    var e = _n(On().mark((function e(n) {
                        var r, o, a;
                        return On().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return r = n.from, o = n.offer, e.next = 3, jn.getAnswer(o);
                                case 3:
                                    a = e.sent, t.emit("peer:nego:done", {to: r, ans: a});
                                case 5:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), [t]), b = (0, r.useCallback)(function () {
                    var e = _n(On().mark((function e(t) {
                        var n;
                        return On().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.ans, e.next = 3, jn.setLocalDescription(n);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), []);
                return (0, r.useEffect)((function () {
                    jn.peer.addEventListener("track", function () {
                        var e = _n(On().mark((function e(t) {
                            var n;
                            return On().wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        n = t.streams, console.log("GOT TRACKS!!"), f(n[0]);
                                    case 3:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }())
                }), []), (0, r.useEffect)((function () {
                    return t.on("user:joined", p), t.on("incomming:call", h), t.on("call:accepted", v), t.on("peer:nego:needed", g), t.on("peer:nego:final", b), function () {
                        t.off("user:joined", p), t.off("incomming:call", h), t.off("call:accepted", v), t.off("peer:nego:needed", g), t.off("peer:nego:final", b)
                    }
                }), [t, p, h, v, g, b]), (0, dn.jsxs)("div", {
                    className: Tn,
                    children: [(0, dn.jsxs)("h1", {
                        className: Rn,
                        children: ["Room Number - ", e]
                    }), (0, dn.jsx)("h4", {
                        className: Dn,
                        children: o ? "Connected" : "No one in room"
                    }), (0, dn.jsxs)("div", {
                        className: Nn,
                        children: [u && (0, dn.jsx)("button", {
                            onClick: y,
                            className: Ln,
                            children: "Send Stream"
                        }), o && (0, dn.jsx)("button", {onClick: d, className: Ln, children: "CALL"})]
                    }), (0, dn.jsxs)("div", {
                        className: An,
                        children: [u && (0, dn.jsxs)("div", {
                            children: [(0, dn.jsx)("h1", {
                                className: Mn,
                                children: "My Stream"
                            }), (0, dn.jsx)(Cn.Z, {playing: !0, muted: !0, height: "400px", width: "400px", url: u})]
                        }), c && (0, dn.jsxs)("div", {
                            children: [(0, dn.jsx)("h1", {
                                className: Mn,
                                children: "Remote Stream"
                            }), (0, dn.jsx)(Cn.Z, {playing: !0, muted: !0, height: "400px", width: "400px", url: c})]
                        })]
                    })]
                })
            };
        var Un = function () {
            return (0, dn.jsx)("div", {
                className: "App",
                children: (0, dn.jsxs)(Ne, {
                    children: [(0, dn.jsx)(Le, {
                        path: "/",
                        element: (0, dn.jsx)(Sn, {})
                    }), (0, dn.jsx)(Le, {path: "/room/:roomId", element: (0, dn.jsx)(In, {})})]
                })
            })
        };
        new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
        var zn = o.startTransition;

        function Bn(e) {
            var t, n = e.basename, o = e.children, a = e.future, i = e.window, u = r.useRef();
            null == u.current && (u.current = (void 0 === (t = {
                window: i,
                v5Compat: !0
            }) && (t = {}), M((function (e, t) {
                var n = e.location;
                return D("", {
                    pathname: n.pathname,
                    search: n.search,
                    hash: n.hash
                }, t.state && t.state.usr || null, t.state && t.state.key || "default")
            }), (function (e, t) {
                return "string" === typeof t ? t : N(t)
            }), null, t)));
            var l = u.current, s = E(r.useState({action: l.action, location: l.location}), 2), c = s[0], f = s[1],
                p = (a || {}).v7_startTransition, d = r.useCallback((function (e) {
                    p && zn ? zn((function () {
                        return f(e)
                    })) : f(e)
                }), [f, p]);
            return r.useLayoutEffect((function () {
                return l.listen(d)
            }), [l, d]), r.createElement(De, {
                basename: n,
                children: o,
                location: c.location,
                navigationType: c.action,
                navigator: l
            })
        }

        "undefined" !== typeof window && "undefined" !== typeof window.document && window.document.createElement;
        var Fn, Vn;
        (function (e) {
            e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher"
        })(Fn || (Fn = {})), function (e) {
            e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
        }(Vn || (Vn = {}));
        a.createRoot(document.getElementById("root")).render((0, dn.jsx)(r.StrictMode, {children: (0, dn.jsx)(Bn, {children: (0, dn.jsx)(vn, {children: (0, dn.jsx)(Un, {})})})}))
    }()
}();
//# sourceMappingURL=main.02db21a2.js.map