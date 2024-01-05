/*! For license information please see curator.embed.js.LICENSE.txt */
(()=>{
    var t = {
        6757: (t,e,o)=>{
            o(9529);
            var r = o(8791);
            t.exports = r("Array", "includes")
        }
        ,
        47: (t,e,o)=>{
            o(3105);
            var r = o(9276);
            t.exports = r.Object.assign
        }
        ,
        6925: (t,e,o)=>{
            o(1235);
            var r = o(8791);
            t.exports = r("String", "includes")
        }
        ,
        7111: (t,e,o)=>{
            var r = o(6733)
              , n = o(9821)
              , s = TypeError;
            t.exports = function(t) {
                if (r(t))
                    return t;
                throw s(n(t) + " is not a function")
            }
        }
        ,
        9736: (t,e,o)=>{
            var r = o(95)
              , n = o(2391)
              , s = o(1787).f
              , i = r("unscopables")
              , a = Array.prototype;
            null == a[i] && s(a, i, {
                configurable: !0,
                value: n(null)
            }),
            t.exports = function(t) {
                a[i][t] = !0
            }
        }
        ,
        1176: (t,e,o)=>{
            var r = o(5052)
              , n = String
              , s = TypeError;
            t.exports = function(t) {
                if (r(t))
                    return t;
                throw s(n(t) + " is not an object")
            }
        }
        ,
        9540: (t,e,o)=>{
            var r = o(905)
              , n = o(3231)
              , s = o(9646)
              , i = function(t) {
                return function(e, o, i) {
                    var a, c = r(e), l = s(c), u = n(i, l);
                    if (t && o != o) {
                        for (; l > u; )
                            if ((a = c[u++]) != a)
                                return !0
                    } else
                        for (; l > u; u++)
                            if ((t || u in c) && c[u] === o)
                                return t || u || 0;
                    return !t && -1
                }
            };
            t.exports = {
                includes: i(!0),
                indexOf: i(!1)
            }
        }
        ,
        7079: (t,e,o)=>{
            var r = o(5968)
              , n = r({}.toString)
              , s = r("".slice);
            t.exports = function(t) {
                return s(n(t), 8, -1)
            }
        }
        ,
        1589: (t,e,o)=>{
            var r = o(1601)
              , n = o(6733)
              , s = o(7079)
              , i = o(95)("toStringTag")
              , a = Object
              , c = "Arguments" == s(function() {
                return arguments
            }());
            t.exports = r ? s : function(t) {
                var e, o, r;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (o = function(t, e) {
                    try {
                        return t[e]
                    } catch (t) {}
                }(e = a(t), i)) ? o : c ? s(e) : "Object" == (r = s(e)) && n(e.callee) ? "Arguments" : r
            }
        }
        ,
        7081: (t,e,o)=>{
            var r = o(8270)
              , n = o(4826)
              , s = o(7933)
              , i = o(1787);
            t.exports = function(t, e, o) {
                for (var a = n(e), c = i.f, l = s.f, u = 0; u < a.length; u++) {
                    var d = a[u];
                    r(t, d) || o && r(o, d) || c(t, d, l(e, d))
                }
            }
        }
        ,
        8127: (t,e,o)=>{
            var r = o(95)("match");
            t.exports = function(t) {
                var e = /./;
                try {
                    "/./"[t](e)
                } catch (o) {
                    try {
                        return e[r] = !1,
                        "/./"[t](e)
                    } catch (t) {}
                }
                return !1
            }
        }
        ,
        5762: (t,e,o)=>{
            var r = o(7400)
              , n = o(1787)
              , s = o(5358);
            t.exports = r ? function(t, e, o) {
                return n.f(t, e, s(1, o))
            }
            : function(t, e, o) {
                return t[e] = o,
                t
            }
        }
        ,
        5358: t=>{
            t.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            }
        }
        ,
        4768: (t,e,o)=>{
            var r = o(6733)
              , n = o(1787)
              , s = o(6039)
              , i = o(8400);
            t.exports = function(t, e, o, a) {
                a || (a = {});
                var c = a.enumerable
                  , l = void 0 !== a.name ? a.name : e;
                if (r(o) && s(o, l, a),
                a.global)
                    c ? t[e] = o : i(e, o);
                else {
                    try {
                        a.unsafe ? t[e] && (c = !0) : delete t[e]
                    } catch (t) {}
                    c ? t[e] = o : n.f(t, e, {
                        value: o,
                        enumerable: !1,
                        configurable: !a.nonConfigurable,
                        writable: !a.nonWritable
                    })
                }
                return t
            }
        }
        ,
        8400: (t,e,o)=>{
            var r = o(9859)
              , n = Object.defineProperty;
            t.exports = function(t, e) {
                try {
                    n(r, t, {
                        value: e,
                        configurable: !0,
                        writable: !0
                    })
                } catch (o) {
                    r[t] = e
                }
                return e
            }
        }
        ,
        7400: (t,e,o)=>{
            var r = o(4229);
            t.exports = !r((function() {
                return 7 != Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            }
            ))
        }
        ,
        3777: t=>{
            var e = "object" == typeof document && document.all
              , o = void 0 === e && void 0 !== e;
            t.exports = {
                all: e,
                IS_HTMLDDA: o
            }
        }
        ,
        2635: (t,e,o)=>{
            var r = o(9859)
              , n = o(5052)
              , s = r.document
              , i = n(s) && n(s.createElement);
            t.exports = function(t) {
                return i ? s.createElement(t) : {}
            }
        }
        ,
        598: (t,e,o)=>{
            var r = o(1333);
            t.exports = r("navigator", "userAgent") || ""
        }
        ,
        6358: (t,e,o)=>{
            var r, n, s = o(9859), i = o(598), a = s.process, c = s.Deno, l = a && a.versions || c && c.version, u = l && l.v8;
            u && (n = (r = u.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
            !n && i && (!(r = i.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = i.match(/Chrome\/(\d+)/)) && (n = +r[1]),
            t.exports = n
        }
        ,
        8791: (t,e,o)=>{
            var r = o(9859)
              , n = o(5968);
            t.exports = function(t, e) {
                return n(r[t].prototype[e])
            }
        }
        ,
        3837: t=>{
            t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        }
        ,
        3103: (t,e,o)=>{
            var r = o(9859)
              , n = o(7933).f
              , s = o(5762)
              , i = o(4768)
              , a = o(8400)
              , c = o(7081)
              , l = o(6541);
            t.exports = function(t, e) {
                var o, u, d, h, p, f = t.target, g = t.global, m = t.stat;
                if (o = g ? r : m ? r[f] || a(f, {}) : (r[f] || {}).prototype)
                    for (u in e) {
                        if (h = e[u],
                        d = t.dontCallGetSet ? (p = n(o, u)) && p.value : o[u],
                        !l(g ? u : f + (m ? "." : "#") + u, t.forced) && void 0 !== d) {
                            if (typeof h == typeof d)
                                continue;
                            c(h, d)
                        }
                        (t.sham || d && d.sham) && s(h, "sham", !0),
                        i(o, u, h, t)
                    }
            }
        }
        ,
        4229: t=>{
            t.exports = function(t) {
                try {
                    return !!t()
                } catch (t) {
                    return !0
                }
            }
        }
        ,
        7188: (t,e,o)=>{
            var r = o(4229);
            t.exports = !r((function() {
                var t = function() {}
                .bind();
                return "function" != typeof t || t.hasOwnProperty("prototype")
            }
            ))
        }
        ,
        266: (t,e,o)=>{
            var r = o(7188)
              , n = Function.prototype.call;
            t.exports = r ? n.bind(n) : function() {
                return n.apply(n, arguments)
            }
        }
        ,
        1805: (t,e,o)=>{
            var r = o(7400)
              , n = o(8270)
              , s = Function.prototype
              , i = r && Object.getOwnPropertyDescriptor
              , a = n(s, "name")
              , c = a && "something" === function() {}
            .name
              , l = a && (!r || r && i(s, "name").configurable);
            t.exports = {
                EXISTS: a,
                PROPER: c,
                CONFIGURABLE: l
            }
        }
        ,
        5968: (t,e,o)=>{
            var r = o(7188)
              , n = Function.prototype
              , s = n.call
              , i = r && n.bind.bind(s, s);
            t.exports = r ? i : function(t) {
                return function() {
                    return s.apply(t, arguments)
                }
            }
        }
        ,
        1333: (t,e,o)=>{
            var r = o(9859)
              , n = o(6733)
              , s = function(t) {
                return n(t) ? t : void 0
            };
            t.exports = function(t, e) {
                return arguments.length < 2 ? s(r[t]) : r[t] && r[t][e]
            }
        }
        ,
        5300: (t,e,o)=>{
            var r = o(7111)
              , n = o(9650);
            t.exports = function(t, e) {
                var o = t[e];
                return n(o) ? void 0 : r(o)
            }
        }
        ,
        9859: (t,e,o)=>{
            var r = function(t) {
                return t && t.Math == Math && t
            };
            t.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof o.g && o.g) || function() {
                return this
            }() || Function("return this")()
        }
        ,
        8270: (t,e,o)=>{
            var r = o(5968)
              , n = o(2991)
              , s = r({}.hasOwnProperty);
            t.exports = Object.hasOwn || function(t, e) {
                return s(n(t), e)
            }
        }
        ,
        5977: t=>{
            t.exports = {}
        }
        ,
        8385: (t,e,o)=>{
            var r = o(1333);
            t.exports = r("document", "documentElement")
        }
        ,
        4394: (t,e,o)=>{
            var r = o(7400)
              , n = o(4229)
              , s = o(2635);
            t.exports = !r && !n((function() {
                return 7 != Object.defineProperty(s("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }
            ))
        }
        ,
        9337: (t,e,o)=>{
            var r = o(5968)
              , n = o(4229)
              , s = o(7079)
              , i = Object
              , a = r("".split);
            t.exports = n((function() {
                return !i("z").propertyIsEnumerable(0)
            }
            )) ? function(t) {
                return "String" == s(t) ? a(t, "") : i(t)
            }
            : i
        }
        ,
        8511: (t,e,o)=>{
            var r = o(5968)
              , n = o(6733)
              , s = o(5353)
              , i = r(Function.toString);
            n(s.inspectSource) || (s.inspectSource = function(t) {
                return i(t)
            }
            ),
            t.exports = s.inspectSource
        }
        ,
        6407: (t,e,o)=>{
            var r, n, s, i = o(1180), a = o(9859), c = o(5052), l = o(5762), u = o(8270), d = o(5353), h = o(4399), p = o(5977), f = "Object already initialized", g = a.TypeError, m = a.WeakMap;
            if (i || d.state) {
                var b = d.state || (d.state = new m);
                b.get = b.get,
                b.has = b.has,
                b.set = b.set,
                r = function(t, e) {
                    if (b.has(t))
                        throw g(f);
                    return e.facade = t,
                    b.set(t, e),
                    e
                }
                ,
                n = function(t) {
                    return b.get(t) || {}
                }
                ,
                s = function(t) {
                    return b.has(t)
                }
            } else {
                var v = h("state");
                p[v] = !0,
                r = function(t, e) {
                    if (u(t, v))
                        throw g(f);
                    return e.facade = t,
                    l(t, v, e),
                    e
                }
                ,
                n = function(t) {
                    return u(t, v) ? t[v] : {}
                }
                ,
                s = function(t) {
                    return u(t, v)
                }
            }
            t.exports = {
                set: r,
                get: n,
                has: s,
                enforce: function(t) {
                    return s(t) ? n(t) : r(t, {})
                },
                getterFor: function(t) {
                    return function(e) {
                        var o;
                        if (!c(e) || (o = n(e)).type !== t)
                            throw g("Incompatible receiver, " + t + " required");
                        return o
                    }
                }
            }
        }
        ,
        6733: (t,e,o)=>{
            var r = o(3777)
              , n = r.all;
            t.exports = r.IS_HTMLDDA ? function(t) {
                return "function" == typeof t || t === n
            }
            : function(t) {
                return "function" == typeof t
            }
        }
        ,
        6541: (t,e,o)=>{
            var r = o(4229)
              , n = o(6733)
              , s = /#|\.prototype\./
              , i = function(t, e) {
                var o = c[a(t)];
                return o == u || o != l && (n(e) ? r(e) : !!e)
            }
              , a = i.normalize = function(t) {
                return String(t).replace(s, ".").toLowerCase()
            }
              , c = i.data = {}
              , l = i.NATIVE = "N"
              , u = i.POLYFILL = "P";
            t.exports = i
        }
        ,
        9650: t=>{
            t.exports = function(t) {
                return null == t
            }
        }
        ,
        5052: (t,e,o)=>{
            var r = o(6733)
              , n = o(3777)
              , s = n.all;
            t.exports = n.IS_HTMLDDA ? function(t) {
                return "object" == typeof t ? null !== t : r(t) || t === s
            }
            : function(t) {
                return "object" == typeof t ? null !== t : r(t)
            }
        }
        ,
        4231: t=>{
            t.exports = !1
        }
        ,
        8311: (t,e,o)=>{
            var r = o(5052)
              , n = o(7079)
              , s = o(95)("match");
            t.exports = function(t) {
                var e;
                return r(t) && (void 0 !== (e = t[s]) ? !!e : "RegExp" == n(t))
            }
        }
        ,
        9395: (t,e,o)=>{
            var r = o(1333)
              , n = o(6733)
              , s = o(1321)
              , i = o(6969)
              , a = Object;
            t.exports = i ? function(t) {
                return "symbol" == typeof t
            }
            : function(t) {
                var e = r("Symbol");
                return n(e) && s(e.prototype, a(t))
            }
        }
        ,
        9646: (t,e,o)=>{
            var r = o(4237);
            t.exports = function(t) {
                return r(t.length)
            }
        }
        ,
        6039: (t,e,o)=>{
            var r = o(4229)
              , n = o(6733)
              , s = o(8270)
              , i = o(7400)
              , a = o(1805).CONFIGURABLE
              , c = o(8511)
              , l = o(6407)
              , u = l.enforce
              , d = l.get
              , h = Object.defineProperty
              , p = i && !r((function() {
                return 8 !== h((function() {}
                ), "length", {
                    value: 8
                }).length
            }
            ))
              , f = String(String).split("String")
              , g = t.exports = function(t, e, o) {
                "Symbol(" === String(e).slice(0, 7) && (e = "[" + String(e).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
                o && o.getter && (e = "get " + e),
                o && o.setter && (e = "set " + e),
                (!s(t, "name") || a && t.name !== e) && (i ? h(t, "name", {
                    value: e,
                    configurable: !0
                }) : t.name = e),
                p && o && s(o, "arity") && t.length !== o.arity && h(t, "length", {
                    value: o.arity
                });
                try {
                    o && s(o, "constructor") && o.constructor ? i && h(t, "prototype", {
                        writable: !1
                    }) : t.prototype && (t.prototype = void 0)
                } catch (t) {}
                var r = u(t);
                return s(r, "source") || (r.source = f.join("string" == typeof e ? e : "")),
                t
            }
            ;
            Function.prototype.toString = g((function() {
                return n(this) && d(this).source || c(this)
            }
            ), "toString")
        }
        ,
        917: t=>{
            var e = Math.ceil
              , o = Math.floor;
            t.exports = Math.trunc || function(t) {
                var r = +t;
                return (r > 0 ? o : e)(r)
            }
        }
        ,
        7272: (t,e,o)=>{
            var r = o(8311)
              , n = TypeError;
            t.exports = function(t) {
                if (r(t))
                    throw n("The method doesn't accept regular expressions");
                return t
            }
        }
        ,
        7888: (t,e,o)=>{
            "use strict";
            var r = o(7400)
              , n = o(5968)
              , s = o(266)
              , i = o(4229)
              , a = o(5632)
              , c = o(894)
              , l = o(9195)
              , u = o(2991)
              , d = o(9337)
              , h = Object.assign
              , p = Object.defineProperty
              , f = n([].concat);
            t.exports = !h || i((function() {
                if (r && 1 !== h({
                    b: 1
                }, h(p({}, "a", {
                    enumerable: !0,
                    get: function() {
                        p(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b)
                    return !0;
                var t = {}
                  , e = {}
                  , o = Symbol()
                  , n = "abcdefghijklmnopqrst";
                return t[o] = 7,
                n.split("").forEach((function(t) {
                    e[t] = t
                }
                )),
                7 != h({}, t)[o] || a(h({}, e)).join("") != n
            }
            )) ? function(t, e) {
                for (var o = u(t), n = arguments.length, i = 1, h = c.f, p = l.f; n > i; )
                    for (var g, m = d(arguments[i++]), b = h ? f(a(m), h(m)) : a(m), v = b.length, w = 0; v > w; )
                        g = b[w++],
                        r && !s(p, m, g) || (o[g] = m[g]);
                return o
            }
            : h
        }
        ,
        2391: (t,e,o)=>{
            var r, n = o(1176), s = o(219), i = o(3837), a = o(5977), c = o(8385), l = o(2635), u = o(4399), d = u("IE_PROTO"), h = function() {}, p = function(t) {
                return "<script>" + t + "</" + "script>"
            }, f = function(t) {
                t.write(p("")),
                t.close();
                var e = t.parentWindow.Object;
                return t = null,
                e
            }, g = function() {
                try {
                    r = new ActiveXObject("htmlfile")
                } catch (t) {}
                var t, e;
                g = "undefined" != typeof document ? document.domain && r ? f(r) : ((e = l("iframe")).style.display = "none",
                c.appendChild(e),
                e.src = String("javascript:"),
                (t = e.contentWindow.document).open(),
                t.write(p("document.F=Object")),
                t.close(),
                t.F) : f(r);
                for (var o = i.length; o--; )
                    delete g.prototype[i[o]];
                return g()
            };
            a[d] = !0,
            t.exports = Object.create || function(t, e) {
                var o;
                return null !== t ? (h.prototype = n(t),
                o = new h,
                h.prototype = null,
                o[d] = t) : o = g(),
                void 0 === e ? o : s.f(o, e)
            }
        }
        ,
        219: (t,e,o)=>{
            var r = o(7400)
              , n = o(7137)
              , s = o(1787)
              , i = o(1176)
              , a = o(905)
              , c = o(5632);
            e.f = r && !n ? Object.defineProperties : function(t, e) {
                i(t);
                for (var o, r = a(e), n = c(e), l = n.length, u = 0; l > u; )
                    s.f(t, o = n[u++], r[o]);
                return t
            }
        }
        ,
        1787: (t,e,o)=>{
            var r = o(7400)
              , n = o(4394)
              , s = o(7137)
              , i = o(1176)
              , a = o(9310)
              , c = TypeError
              , l = Object.defineProperty
              , u = Object.getOwnPropertyDescriptor
              , d = "enumerable"
              , h = "configurable"
              , p = "writable";
            e.f = r ? s ? function(t, e, o) {
                if (i(t),
                e = a(e),
                i(o),
                "function" == typeof t && "prototype" === e && "value"in o && p in o && !o.writable) {
                    var r = u(t, e);
                    r && r.writable && (t[e] = o.value,
                    o = {
                        configurable: h in o ? o.configurable : r.configurable,
                        enumerable: d in o ? o.enumerable : r.enumerable,
                        writable: !1
                    })
                }
                return l(t, e, o)
            }
            : l : function(t, e, o) {
                if (i(t),
                e = a(e),
                i(o),
                n)
                    try {
                        return l(t, e, o)
                    } catch (t) {}
                if ("get"in o || "set"in o)
                    throw c("Accessors not supported");
                return "value"in o && (t[e] = o.value),
                t
            }
        }
        ,
        7933: (t,e,o)=>{
            var r = o(7400)
              , n = o(266)
              , s = o(9195)
              , i = o(5358)
              , a = o(905)
              , c = o(9310)
              , l = o(8270)
              , u = o(4394)
              , d = Object.getOwnPropertyDescriptor;
            e.f = r ? d : function(t, e) {
                if (t = a(t),
                e = c(e),
                u)
                    try {
                        return d(t, e)
                    } catch (t) {}
                if (l(t, e))
                    return i(!n(s.f, t, e), t[e])
            }
        }
        ,
        8151: (t,e,o)=>{
            var r = o(140)
              , n = o(3837).concat("length", "prototype");
            e.f = Object.getOwnPropertyNames || function(t) {
                return r(t, n)
            }
        }
        ,
        894: (t,e)=>{
            e.f = Object.getOwnPropertySymbols
        }
        ,
        1321: (t,e,o)=>{
            var r = o(5968);
            t.exports = r({}.isPrototypeOf)
        }
        ,
        140: (t,e,o)=>{
            var r = o(5968)
              , n = o(8270)
              , s = o(905)
              , i = o(9540).indexOf
              , a = o(5977)
              , c = r([].push);
            t.exports = function(t, e) {
                var o, r = s(t), l = 0, u = [];
                for (o in r)
                    !n(a, o) && n(r, o) && c(u, o);
                for (; e.length > l; )
                    n(r, o = e[l++]) && (~i(u, o) || c(u, o));
                return u
            }
        }
        ,
        5632: (t,e,o)=>{
            var r = o(140)
              , n = o(3837);
            t.exports = Object.keys || function(t) {
                return r(t, n)
            }
        }
        ,
        9195: (t,e)=>{
            "use strict";
            var o = {}.propertyIsEnumerable
              , r = Object.getOwnPropertyDescriptor
              , n = r && !o.call({
                1: 2
            }, 1);
            e.f = n ? function(t) {
                var e = r(this, t);
                return !!e && e.enumerable
            }
            : o
        }
        ,
        2914: (t,e,o)=>{
            var r = o(266)
              , n = o(6733)
              , s = o(5052)
              , i = TypeError;
            t.exports = function(t, e) {
                var o, a;
                if ("string" === e && n(o = t.toString) && !s(a = r(o, t)))
                    return a;
                if (n(o = t.valueOf) && !s(a = r(o, t)))
                    return a;
                if ("string" !== e && n(o = t.toString) && !s(a = r(o, t)))
                    return a;
                throw i("Can't convert object to primitive value")
            }
        }
        ,
        4826: (t,e,o)=>{
            var r = o(1333)
              , n = o(5968)
              , s = o(8151)
              , i = o(894)
              , a = o(1176)
              , c = n([].concat);
            t.exports = r("Reflect", "ownKeys") || function(t) {
                var e = s.f(a(t))
                  , o = i.f;
                return o ? c(e, o(t)) : e
            }
        }
        ,
        9276: (t,e,o)=>{
            var r = o(9859);
            t.exports = r
        }
        ,
        8885: (t,e,o)=>{
            var r = o(9650)
              , n = TypeError;
            t.exports = function(t) {
                if (r(t))
                    throw n("Can't call method on " + t);
                return t
            }
        }
        ,
        4399: (t,e,o)=>{
            var r = o(3036)
              , n = o(1441)
              , s = r("keys");
            t.exports = function(t) {
                return s[t] || (s[t] = n(t))
            }
        }
        ,
        5353: (t,e,o)=>{
            var r = o(9859)
              , n = o(8400)
              , s = "__core-js_shared__"
              , i = r[s] || n(s, {});
            t.exports = i
        }
        ,
        3036: (t,e,o)=>{
            var r = o(4231)
              , n = o(5353);
            (t.exports = function(t, e) {
                return n[t] || (n[t] = void 0 !== e ? e : {})
            }
            )("versions", []).push({
                version: "3.26.1",
                mode: r ? "pure" : "global",
                copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        }
        ,
        4860: (t,e,o)=>{
            var r = o(6358)
              , n = o(4229);
            t.exports = !!Object.getOwnPropertySymbols && !n((function() {
                var t = Symbol();
                return !String(t) || !(Object(t)instanceof Symbol) || !Symbol.sham && r && r < 41
            }
            ))
        }
        ,
        3231: (t,e,o)=>{
            var r = o(3329)
              , n = Math.max
              , s = Math.min;
            t.exports = function(t, e) {
                var o = r(t);
                return o < 0 ? n(o + e, 0) : s(o, e)
            }
        }
        ,
        905: (t,e,o)=>{
            var r = o(9337)
              , n = o(8885);
            t.exports = function(t) {
                return r(n(t))
            }
        }
        ,
        3329: (t,e,o)=>{
            var r = o(917);
            t.exports = function(t) {
                var e = +t;
                return e != e || 0 === e ? 0 : r(e)
            }
        }
        ,
        4237: (t,e,o)=>{
            var r = o(3329)
              , n = Math.min;
            t.exports = function(t) {
                return t > 0 ? n(r(t), 9007199254740991) : 0
            }
        }
        ,
        2991: (t,e,o)=>{
            var r = o(8885)
              , n = Object;
            t.exports = function(t) {
                return n(r(t))
            }
        }
        ,
        2066: (t,e,o)=>{
            var r = o(266)
              , n = o(5052)
              , s = o(9395)
              , i = o(5300)
              , a = o(2914)
              , c = o(95)
              , l = TypeError
              , u = c("toPrimitive");
            t.exports = function(t, e) {
                if (!n(t) || s(t))
                    return t;
                var o, c = i(t, u);
                if (c) {
                    if (void 0 === e && (e = "default"),
                    o = r(c, t, e),
                    !n(o) || s(o))
                        return o;
                    throw l("Can't convert object to primitive value")
                }
                return void 0 === e && (e = "number"),
                a(t, e)
            }
        }
        ,
        9310: (t,e,o)=>{
            var r = o(2066)
              , n = o(9395);
            t.exports = function(t) {
                var e = r(t, "string");
                return n(e) ? e : e + ""
            }
        }
        ,
        1601: (t,e,o)=>{
            var r = {};
            r[o(95)("toStringTag")] = "z",
            t.exports = "[object z]" === String(r)
        }
        ,
        3326: (t,e,o)=>{
            var r = o(1589)
              , n = String;
            t.exports = function(t) {
                if ("Symbol" === r(t))
                    throw TypeError("Cannot convert a Symbol value to a string");
                return n(t)
            }
        }
        ,
        9821: t=>{
            var e = String;
            t.exports = function(t) {
                try {
                    return e(t)
                } catch (t) {
                    return "Object"
                }
            }
        }
        ,
        1441: (t,e,o)=>{
            var r = o(5968)
              , n = 0
              , s = Math.random()
              , i = r(1..toString);
            t.exports = function(t) {
                return "Symbol(" + (void 0 === t ? "" : t) + ")_" + i(++n + s, 36)
            }
        }
        ,
        6969: (t,e,o)=>{
            var r = o(4860);
            t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        }
        ,
        7137: (t,e,o)=>{
            var r = o(7400)
              , n = o(4229);
            t.exports = r && n((function() {
                return 42 != Object.defineProperty((function() {}
                ), "prototype", {
                    value: 42,
                    writable: !1
                }).prototype
            }
            ))
        }
        ,
        1180: (t,e,o)=>{
            var r = o(9859)
              , n = o(6733)
              , s = r.WeakMap;
            t.exports = n(s) && /native code/.test(String(s))
        }
        ,
        95: (t,e,o)=>{
            var r = o(9859)
              , n = o(3036)
              , s = o(8270)
              , i = o(1441)
              , a = o(4860)
              , c = o(6969)
              , l = n("wks")
              , u = r.Symbol
              , d = u && u.for
              , h = c ? u : u && u.withoutSetter || i;
            t.exports = function(t) {
                if (!s(l, t) || !a && "string" != typeof l[t]) {
                    var e = "Symbol." + t;
                    a && s(u, t) ? l[t] = u[t] : l[t] = c && d ? d(e) : h(e)
                }
                return l[t]
            }
        }
        ,
        9529: (t,e,o)=>{
            "use strict";
            var r = o(3103)
              , n = o(9540).includes
              , s = o(4229)
              , i = o(9736);
            r({
                target: "Array",
                proto: !0,
                forced: s((function() {
                    return !Array(1).includes()
                }
                ))
            }, {
                includes: function(t) {
                    return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }),
            i("includes")
        }
        ,
        3105: (t,e,o)=>{
            var r = o(3103)
              , n = o(7888);
            r({
                target: "Object",
                stat: !0,
                arity: 2,
                forced: Object.assign !== n
            }, {
                assign: n
            })
        }
        ,
        1235: (t,e,o)=>{
            "use strict";
            var r = o(3103)
              , n = o(5968)
              , s = o(7272)
              , i = o(8885)
              , a = o(3326)
              , c = o(8127)
              , l = n("".indexOf);
            r({
                target: "String",
                proto: !0,
                forced: !c("includes")
            }, {
                includes: function(t) {
                    return !!~l(a(i(this)), a(s(t)), arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        }
        ,
        857: (t,e,o)=>{
            var r = o(7772).Symbol;
            t.exports = r
        }
        ,
        3366: (t,e,o)=>{
            var r = o(857)
              , n = o(2107)
              , s = o(7157)
              , i = r ? r.toStringTag : void 0;
            t.exports = function(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : i && i in Object(t) ? n(t) : s(t)
            }
        }
        ,
        1704: (t,e,o)=>{
            var r = o(2153)
              , n = /^\s+/;
            t.exports = function(t) {
                return t ? t.slice(0, r(t) + 1).replace(n, "") : t
            }
        }
        ,
        1242: (t,e,o)=>{
            var r = "object" == typeof o.g && o.g && o.g.Object === Object && o.g;
            t.exports = r
        }
        ,
        2107: (t,e,o)=>{
            var r = o(857)
              , n = Object.prototype
              , s = n.hasOwnProperty
              , i = n.toString
              , a = r ? r.toStringTag : void 0;
            t.exports = function(t) {
                var e = s.call(t, a)
                  , o = t[a];
                try {
                    t[a] = void 0;
                    var r = !0
                } catch (t) {}
                var n = i.call(t);
                return r && (e ? t[a] = o : delete t[a]),
                n
            }
        }
        ,
        7157: t=>{
            var e = Object.prototype.toString;
            t.exports = function(t) {
                return e.call(t)
            }
        }
        ,
        7772: (t,e,o)=>{
            var r = o(1242)
              , n = "object" == typeof self && self && self.Object === Object && self
              , s = r || n || Function("return this")();
            t.exports = s
        }
        ,
        2153: t=>{
            var e = /\s/;
            t.exports = function(t) {
                for (var o = t.length; o-- && e.test(t.charAt(o)); )
                    ;
                return o
            }
        }
        ,
        4073: (t,e,o)=>{
            var r = o(9259)
              , n = o(1100)
              , s = o(7642)
              , i = Math.max
              , a = Math.min;
            t.exports = function(t, e, o) {
                var c, l, u, d, h, p, f = 0, g = !1, m = !1, b = !0;
                if ("function" != typeof t)
                    throw new TypeError("Expected a function");
                function v(e) {
                    var o = c
                      , r = l;
                    return c = l = void 0,
                    f = e,
                    d = t.apply(r, o)
                }
                function w(t) {
                    return f = t,
                    h = setTimeout(C, e),
                    g ? v(t) : d
                }
                function y(t) {
                    var o = t - p;
                    return void 0 === p || o >= e || o < 0 || m && t - f >= u
                }
                function C() {
                    var t = n();
                    if (y(t))
                        return _(t);
                    h = setTimeout(C, function(t) {
                        var o = e - (t - p);
                        return m ? a(o, u - (t - f)) : o
                    }(t))
                }
                function _(t) {
                    return h = void 0,
                    b && c ? v(t) : (c = l = void 0,
                    d)
                }
                function x() {
                    var t = n()
                      , o = y(t);
                    if (c = arguments,
                    l = this,
                    p = t,
                    o) {
                        if (void 0 === h)
                            return w(p);
                        if (m)
                            return clearTimeout(h),
                            h = setTimeout(C, e),
                            v(p)
                    }
                    return void 0 === h && (h = setTimeout(C, e)),
                    d
                }
                return e = s(e) || 0,
                r(o) && (g = !!o.leading,
                u = (m = "maxWait"in o) ? i(s(o.maxWait) || 0, e) : u,
                b = "trailing"in o ? !!o.trailing : b),
                x.cancel = function() {
                    void 0 !== h && clearTimeout(h),
                    f = 0,
                    c = p = l = h = void 0
                }
                ,
                x.flush = function() {
                    return void 0 === h ? d : _(n())
                }
                ,
                x
            }
        }
        ,
        9259: t=>{
            t.exports = function(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }
        }
        ,
        5125: t=>{
            t.exports = function(t) {
                return null != t && "object" == typeof t
            }
        }
        ,
        4795: (t,e,o)=>{
            var r = o(3366)
              , n = o(5125);
            t.exports = function(t) {
                return "symbol" == typeof t || n(t) && "[object Symbol]" == r(t)
            }
        }
        ,
        1100: (t,e,o)=>{
            var r = o(7772);
            t.exports = function() {
                return r.Date.now()
            }
        }
        ,
        7642: (t,e,o)=>{
            var r = o(1704)
              , n = o(9259)
              , s = o(4795)
              , i = /^[-+]0x[0-9a-f]+$/i
              , a = /^0b[01]+$/i
              , c = /^0o[0-7]+$/i
              , l = parseInt;
            t.exports = function(t) {
                if ("number" == typeof t)
                    return t;
                if (s(t))
                    return NaN;
                if (n(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = n(e) ? e + "" : e
                }
                if ("string" != typeof t)
                    return 0 === t ? t : +t;
                t = r(t);
                var o = a.test(t);
                return o || c.test(t) ? l(t.slice(2), o ? 2 : 8) : i.test(t) ? NaN : +t
            }
        }
    }
      , e = {};
    function o(r) {
        var n = e[r];
        if (void 0 !== n)
            return n.exports;
        var s = e[r] = {
            exports: {}
        };
        return t[r](s, s.exports, o),
        s.exports
    }
    o.n = t=>{
        var e = t && t.__esModule ? ()=>t.default : ()=>t;
        return o.d(e, {
            a: e
        }),
        e
    }
    ,
    o.d = (t,e)=>{
        for (var r in e)
            o.o(e, r) && !o.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: e[r]
            })
    }
    ,
    o.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }(),
    o.o = (t,e)=>Object.prototype.hasOwnProperty.call(t, e),
    o.r = t=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ;
    var r = {};
    (()=>{
        "use strict";
        o.r(r),
        o.d(r, {
            Events: ()=>is,
            Themes: ()=>kn,
            Utils: ()=>Xf,
            Widgets: ()=>Sp,
            h: ()=>F,
            loadWidget: ()=>Zf
        });
        o(47),
        o(6757),
        o(6925);
        const t = function(t) {
            var e = this.constructor;
            return this.then((function(o) {
                return e.resolve(t()).then((function() {
                    return o
                }
                ))
            }
            ), (function(o) {
                return e.resolve(t()).then((function() {
                    return e.reject(o)
                }
                ))
            }
            ))
        };
        const e = function(t) {
            return new this((function(e, o) {
                if (!t || void 0 === t.length)
                    return o(new TypeError(typeof t + " " + t + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                var r = Array.prototype.slice.call(t);
                if (0 === r.length)
                    return e([]);
                var n = r.length;
                function s(t, o) {
                    if (o && ("object" == typeof o || "function" == typeof o)) {
                        var i = o.then;
                        if ("function" == typeof i)
                            return void i.call(o, (function(e) {
                                s(t, e)
                            }
                            ), (function(o) {
                                r[t] = {
                                    status: "rejected",
                                    reason: o
                                },
                                0 == --n && e(r)
                            }
                            ))
                    }
                    r[t] = {
                        status: "fulfilled",
                        value: o
                    },
                    0 == --n && e(r)
                }
                for (var i = 0; i < r.length; i++)
                    s(i, r[i])
            }
            ))
        };
        var n = setTimeout;
        function s(t) {
            return Boolean(t && void 0 !== t.length)
        }
        function i() {}
        function a(t) {
            if (!(this instanceof a))
                throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof t)
                throw new TypeError("not a function");
            this._state = 0,
            this._handled = !1,
            this._value = void 0,
            this._deferreds = [],
            p(t, this)
        }
        function c(t, e) {
            for (; 3 === t._state; )
                t = t._value;
            0 !== t._state ? (t._handled = !0,
            a._immediateFn((function() {
                var o = 1 === t._state ? e.onFulfilled : e.onRejected;
                if (null !== o) {
                    var r;
                    try {
                        r = o(t._value)
                    } catch (t) {
                        return void u(e.promise, t)
                    }
                    l(e.promise, r)
                } else
                    (1 === t._state ? l : u)(e.promise, t._value)
            }
            ))) : t._deferreds.push(e)
        }
        function l(t, e) {
            try {
                if (e === t)
                    throw new TypeError("A promise cannot be resolved with itself.");
                if (e && ("object" == typeof e || "function" == typeof e)) {
                    var o = e.then;
                    if (e instanceof a)
                        return t._state = 3,
                        t._value = e,
                        void d(t);
                    if ("function" == typeof o)
                        return void p(function(t, e) {
                            return function() {
                                t.apply(e, arguments)
                            }
                        }(o, e), t)
                }
                t._state = 1,
                t._value = e,
                d(t)
            } catch (e) {
                u(t, e)
            }
        }
        function u(t, e) {
            t._state = 2,
            t._value = e,
            d(t)
        }
        function d(t) {
            2 === t._state && 0 === t._deferreds.length && a._immediateFn((function() {
                t._handled || a._unhandledRejectionFn(t._value)
            }
            ));
            for (var e = 0, o = t._deferreds.length; e < o; e++)
                c(t, t._deferreds[e]);
            t._deferreds = null
        }
        function h(t, e, o) {
            this.onFulfilled = "function" == typeof t ? t : null,
            this.onRejected = "function" == typeof e ? e : null,
            this.promise = o
        }
        function p(t, e) {
            var o = !1;
            try {
                t((function(t) {
                    o || (o = !0,
                    l(e, t))
                }
                ), (function(t) {
                    o || (o = !0,
                    u(e, t))
                }
                ))
            } catch (t) {
                if (o)
                    return;
                o = !0,
                u(e, t)
            }
        }
        a.prototype.catch = function(t) {
            return this.then(null, t)
        }
        ,
        a.prototype.then = function(t, e) {
            var o = new this.constructor(i);
            return c(this, new h(t,e,o)),
            o
        }
        ,
        a.prototype.finally = t,
        a.all = function(t) {
            return new a((function(e, o) {
                if (!s(t))
                    return o(new TypeError("Promise.all accepts an array"));
                var r = Array.prototype.slice.call(t);
                if (0 === r.length)
                    return e([]);
                var n = r.length;
                function i(t, s) {
                    try {
                        if (s && ("object" == typeof s || "function" == typeof s)) {
                            var a = s.then;
                            if ("function" == typeof a)
                                return void a.call(s, (function(e) {
                                    i(t, e)
                                }
                                ), o)
                        }
                        r[t] = s,
                        0 == --n && e(r)
                    } catch (t) {
                        o(t)
                    }
                }
                for (var a = 0; a < r.length; a++)
                    i(a, r[a])
            }
            ))
        }
        ,
        a.allSettled = e,
        a.resolve = function(t) {
            return t && "object" == typeof t && t.constructor === a ? t : new a((function(e) {
                e(t)
            }
            ))
        }
        ,
        a.reject = function(t) {
            return new a((function(e, o) {
                o(t)
            }
            ))
        }
        ,
        a.race = function(t) {
            return new a((function(e, o) {
                if (!s(t))
                    return o(new TypeError("Promise.race accepts an array"));
                for (var r = 0, n = t.length; r < n; r++)
                    a.resolve(t[r]).then(e, o)
            }
            ))
        }
        ,
        a._immediateFn = "function" == typeof setImmediate && function(t) {
            setImmediate(t)
        }
        || function(t) {
            n(t, 0)
        }
        ,
        a._unhandledRejectionFn = function(t) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
        }
        ;
        const f = a;
        var g = function() {
            if ("undefined" != typeof self)
                return self;
            if ("undefined" != typeof window)
                return window;
            if (void 0 !== o.g)
                return o.g;
            throw new Error("unable to locate global object")
        }();
        "function" != typeof g.Promise ? g.Promise = f : (g.Promise.prototype.finally || (g.Promise.prototype.finally = t),
        g.Promise.allSettled || (g.Promise.allSettled = e));
        var m, b, v, w, y, C, _, x, P = {}, k = [], S = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, A = Array.isArray;
        function O(t, e) {
            for (var o in e)
                t[o] = e[o];
            return t
        }
        function j(t) {
            var e = t.parentNode;
            e && e.removeChild(t)
        }
        function F(t, e, o) {
            var r, n, s, i = {};
            for (s in e)
                "key" == s ? r = e[s] : "ref" == s ? n = e[s] : i[s] = e[s];
            if (arguments.length > 2 && (i.children = arguments.length > 3 ? m.call(arguments, 2) : o),
            "function" == typeof t && null != t.defaultProps)
                for (s in t.defaultProps)
                    void 0 === i[s] && (i[s] = t.defaultProps[s]);
            return E(t, i, r, n, null)
        }
        function E(t, e, o, r, n) {
            var s = {
                type: t,
                props: e,
                key: o,
                ref: r,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                __h: null,
                constructor: void 0,
                __v: null == n ? ++v : n
            };
            return null == n && null != b.vnode && b.vnode(s),
            s
        }
        function D(t) {
            return t.children
        }
        function T(t, e) {
            this.props = t,
            this.context = e
        }
        function N(t, e) {
            if (null == e)
                return t.__ ? N(t.__, t.__.__k.indexOf(t) + 1) : null;
            for (var o; e < t.__k.length; e++)
                if (null != (o = t.__k[e]) && null != o.__e)
                    return o.__e;
            return "function" == typeof t.type ? N(t) : null
        }
        function L(t) {
            var e, o;
            if (null != (t = t.__) && null != t.__c) {
                for (t.__e = t.__c.base = null,
                e = 0; e < t.__k.length; e++)
                    if (null != (o = t.__k[e]) && null != o.__e) {
                        t.__e = t.__c.base = o.__e;
                        break
                    }
                return L(t)
            }
        }
        function B(t) {
            (!t.__d && (t.__d = !0) && w.push(t) && !I.__r++ || y !== b.debounceRendering) && ((y = b.debounceRendering) || C)(I)
        }
        function I() {
            var t, e, o, r, n, s, i, a, c;
            for (w.sort(_); t = w.shift(); )
                t.__d && (e = w.length,
                r = void 0,
                n = void 0,
                s = void 0,
                a = (i = (o = t).__v).__e,
                (c = o.__P) && (r = [],
                n = [],
                (s = O({}, i)).__v = i.__v + 1,
                G(c, i, s, o.__n, void 0 !== c.ownerSVGElement, null != i.__h ? [a] : null, r, null == a ? N(i) : a, i.__h, n),
                K(r, i, n),
                i.__e != a && L(i)),
                w.length > e && w.sort(_));
            I.__r = 0
        }
        function M(t, e, o, r, n, s, i, a, c, l, u) {
            var d, h, p, f, g, m, b, v, w, y, C = 0, _ = r && r.__k || k, x = _.length, S = x, O = e.length;
            for (o.__k = [],
            d = 0; d < O; d++)
                null != (f = o.__k[d] = null == (f = e[d]) || "boolean" == typeof f || "function" == typeof f ? null : "string" == typeof f || "number" == typeof f || "bigint" == typeof f ? E(null, f, null, null, f) : A(f) ? E(D, {
                    children: f
                }, null, null, null) : f.__b > 0 ? E(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v) : f) && (f.__ = o,
                f.__b = o.__b + 1,
                -1 === (v = R(f, _, b = d + C, S)) ? p = P : (p = _[v] || P,
                _[v] = void 0,
                S--),
                G(t, f, p, n, s, i, a, c, l, u),
                g = f.__e,
                (h = f.ref) && p.ref != h && (p.ref && Z(p.ref, null, f),
                u.push(h, f.__c || g, f)),
                null != g && (null == m && (m = g),
                y = !(w = p === P || null === p.__v) && v === b,
                w ? -1 == v && C-- : v !== b && (v === b + 1 ? (C++,
                y = !0) : v > b ? S > O - b ? (C += v - b,
                y = !0) : C-- : C = v < b && v == b - 1 ? v - b : 0),
                b = d + C,
                y = y || v == d && !w,
                "function" != typeof f.type || v === b && p.__k !== f.__k ? "function" == typeof f.type || y ? void 0 !== f.__d ? (c = f.__d,
                f.__d = void 0) : c = g.nextSibling : c = H(t, g, c) : c = q(f, c, t),
                "function" == typeof o.type && (o.__d = c)));
            for (o.__e = m,
            d = x; d--; )
                null != _[d] && ("function" == typeof o.type && null != _[d].__e && _[d].__e == o.__d && (o.__d = _[d].__e.nextSibling),
                X(_[d], _[d]))
        }
        function q(t, e, o) {
            for (var r, n = t.__k, s = 0; n && s < n.length; s++)
                (r = n[s]) && (r.__ = t,
                e = "function" == typeof r.type ? q(r, e, o) : H(o, r.__e, e));
            return e
        }
        function W(t, e) {
            return e = e || [],
            null == t || "boolean" == typeof t || (A(t) ? t.some((function(t) {
                W(t, e)
            }
            )) : e.push(t)),
            e
        }
        function H(t, e, o) {
            return null == o || o.parentNode !== t ? t.insertBefore(e, null) : e == o && null != e.parentNode || t.insertBefore(e, o),
            e.nextSibling
        }
        function R(t, e, o, r) {
            var n = t.key
              , s = t.type
              , i = o - 1
              , a = o + 1
              , c = e[o];
            if (null === c || c && n == c.key && s === c.type)
                return o;
            if (r > (null != c ? 1 : 0))
                for (; i >= 0 || a < e.length; ) {
                    if (i >= 0) {
                        if ((c = e[i]) && n == c.key && s === c.type)
                            return i;
                        i--
                    }
                    if (a < e.length) {
                        if ((c = e[a]) && n == c.key && s === c.type)
                            return a;
                        a++
                    }
                }
            return -1
        }
        function z(t, e, o) {
            "-" === e[0] ? t.setProperty(e, null == o ? "" : o) : t[e] = null == o ? "" : "number" != typeof o || S.test(e) ? o : o + "px"
        }
        function U(t, e, o, r, n) {
            var s;
            t: if ("style" === e)
                if ("string" == typeof o)
                    t.style.cssText = o;
                else {
                    if ("string" == typeof r && (t.style.cssText = r = ""),
                    r)
                        for (e in r)
                            o && e in o || z(t.style, e, "");
                    if (o)
                        for (e in o)
                            r && o[e] === r[e] || z(t.style, e, o[e])
                }
            else if ("o" === e[0] && "n" === e[1])
                s = e !== (e = e.replace(/Capture$/, "")),
                e = e.toLowerCase()in t ? e.toLowerCase().slice(2) : e.slice(2),
                t.l || (t.l = {}),
                t.l[e + s] = o,
                o ? r || t.addEventListener(e, s ? V : $, s) : t.removeEventListener(e, s ? V : $, s);
            else if ("dangerouslySetInnerHTML" !== e) {
                if (n)
                    e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                else if ("width" !== e && "height" !== e && "href" !== e && "list" !== e && "form" !== e && "tabIndex" !== e && "download" !== e && "rowSpan" !== e && "colSpan" !== e && e in t)
                    try {
                        t[e] = null == o ? "" : o;
                        break t
                    } catch (t) {}
                "function" == typeof o || (null == o || !1 === o && "-" !== e[4] ? t.removeAttribute(e) : t.setAttribute(e, o))
            }
        }
        function $(t) {
            return this.l[t.type + !1](b.event ? b.event(t) : t)
        }
        function V(t) {
            return this.l[t.type + !0](b.event ? b.event(t) : t)
        }
        function G(t, e, o, r, n, s, i, a, c, l) {
            var u, d, h, p, f, g, m, v, w, y, C, _, x, P, k, S = e.type;
            if (void 0 !== e.constructor)
                return null;
            null != o.__h && (c = o.__h,
            a = e.__e = o.__e,
            e.__h = null,
            s = [a]),
            (u = b.__b) && u(e);
            try {
                t: if ("function" == typeof S) {
                    if (v = e.props,
                    w = (u = S.contextType) && r[u.__c],
                    y = u ? w ? w.props.value : u.__ : r,
                    o.__c ? m = (d = e.__c = o.__c).__ = d.__E : ("prototype"in S && S.prototype.render ? e.__c = d = new S(v,y) : (e.__c = d = new T(v,y),
                    d.constructor = S,
                    d.render = Q),
                    w && w.sub(d),
                    d.props = v,
                    d.state || (d.state = {}),
                    d.context = y,
                    d.__n = r,
                    h = d.__d = !0,
                    d.__h = [],
                    d._sb = []),
                    null == d.__s && (d.__s = d.state),
                    null != S.getDerivedStateFromProps && (d.__s == d.state && (d.__s = O({}, d.__s)),
                    O(d.__s, S.getDerivedStateFromProps(v, d.__s))),
                    p = d.props,
                    f = d.state,
                    d.__v = e,
                    h)
                        null == S.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(),
                        null != d.componentDidMount && d.__h.push(d.componentDidMount);
                    else {
                        if (null == S.getDerivedStateFromProps && v !== p && null != d.componentWillReceiveProps && d.componentWillReceiveProps(v, y),
                        !d.__e && (null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(v, d.__s, y) || e.__v === o.__v)) {
                            for (e.__v !== o.__v && (d.props = v,
                            d.state = d.__s,
                            d.__d = !1),
                            e.__e = o.__e,
                            e.__k = o.__k,
                            e.__k.forEach((function(t) {
                                t && (t.__ = e)
                            }
                            )),
                            C = 0; C < d._sb.length; C++)
                                d.__h.push(d._sb[C]);
                            d._sb = [],
                            d.__h.length && i.push(d);
                            break t
                        }
                        null != d.componentWillUpdate && d.componentWillUpdate(v, d.__s, y),
                        null != d.componentDidUpdate && d.__h.push((function() {
                            d.componentDidUpdate(p, f, g)
                        }
                        ))
                    }
                    if (d.context = y,
                    d.props = v,
                    d.__P = t,
                    d.__e = !1,
                    _ = b.__r,
                    x = 0,
                    "prototype"in S && S.prototype.render) {
                        for (d.state = d.__s,
                        d.__d = !1,
                        _ && _(e),
                        u = d.render(d.props, d.state, d.context),
                        P = 0; P < d._sb.length; P++)
                            d.__h.push(d._sb[P]);
                        d._sb = []
                    } else
                        do {
                            d.__d = !1,
                            _ && _(e),
                            u = d.render(d.props, d.state, d.context),
                            d.state = d.__s
                        } while (d.__d && ++x < 25);
                    d.state = d.__s,
                    null != d.getChildContext && (r = O(O({}, r), d.getChildContext())),
                    h || null == d.getSnapshotBeforeUpdate || (g = d.getSnapshotBeforeUpdate(p, f)),
                    M(t, A(k = null != u && u.type === D && null == u.key ? u.props.children : u) ? k : [k], e, o, r, n, s, i, a, c, l),
                    d.base = e.__e,
                    e.__h = null,
                    d.__h.length && i.push(d),
                    m && (d.__E = d.__ = null)
                } else
                    null == s && e.__v === o.__v ? (e.__k = o.__k,
                    e.__e = o.__e) : e.__e = Y(o.__e, e, o, r, n, s, i, c, l);
                (u = b.diffed) && u(e)
            } catch (t) {
                e.__v = null,
                (c || null != s) && (e.__e = a,
                e.__h = !!c,
                s[s.indexOf(a)] = null),
                b.__e(t, e, o)
            }
        }
        function K(t, e, o) {
            for (var r = 0; r < o.length; r++)
                Z(o[r], o[++r], o[++r]);
            b.__c && b.__c(e, t),
            t.some((function(e) {
                try {
                    t = e.__h,
                    e.__h = [],
                    t.some((function(t) {
                        t.call(e)
                    }
                    ))
                } catch (t) {
                    b.__e(t, e.__v)
                }
            }
            ))
        }
        function Y(t, e, o, r, n, s, i, a, c) {
            var l, u, d, h = o.props, p = e.props, f = e.type, g = 0;
            if ("svg" === f && (n = !0),
            null != s)
                for (; g < s.length; g++)
                    if ((l = s[g]) && "setAttribute"in l == !!f && (f ? l.localName === f : 3 === l.nodeType)) {
                        t = l,
                        s[g] = null;
                        break
                    }
            if (null == t) {
                if (null === f)
                    return document.createTextNode(p);
                t = n ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, p.is && p),
                s = null,
                a = !1
            }
            if (null === f)
                h === p || a && t.data === p || (t.data = p);
            else {
                if (s = s && m.call(t.childNodes),
                u = (h = o.props || P).dangerouslySetInnerHTML,
                d = p.dangerouslySetInnerHTML,
                !a) {
                    if (null != s)
                        for (h = {},
                        g = 0; g < t.attributes.length; g++)
                            h[t.attributes[g].name] = t.attributes[g].value;
                    (d || u) && (d && (u && d.__html == u.__html || d.__html === t.innerHTML) || (t.innerHTML = d && d.__html || ""))
                }
                if (function(t, e, o, r, n) {
                    var s;
                    for (s in o)
                        "children" === s || "key" === s || s in e || U(t, s, null, o[s], r);
                    for (s in e)
                        n && "function" != typeof e[s] || "children" === s || "key" === s || "value" === s || "checked" === s || o[s] === e[s] || U(t, s, e[s], o[s], r)
                }(t, p, h, n, a),
                d)
                    e.__k = [];
                else if (M(t, A(g = e.props.children) ? g : [g], e, o, r, n && "foreignObject" !== f, s, i, s ? s[0] : o.__k && N(o, 0), a, c),
                null != s)
                    for (g = s.length; g--; )
                        null != s[g] && j(s[g]);
                a || ("value"in p && void 0 !== (g = p.value) && (g !== t.value || "progress" === f && !g || "option" === f && g !== h.value) && U(t, "value", g, h.value, !1),
                "checked"in p && void 0 !== (g = p.checked) && g !== t.checked && U(t, "checked", g, h.checked, !1))
            }
            return t
        }
        function Z(t, e, o) {
            try {
                "function" == typeof t ? t(e) : t.current = e
            } catch (t) {
                b.__e(t, o)
            }
        }
        function X(t, e, o) {
            var r, n;
            if (b.unmount && b.unmount(t),
            (r = t.ref) && (r.current && r.current !== t.__e || Z(r, null, e)),
            null != (r = t.__c)) {
                if (r.componentWillUnmount)
                    try {
                        r.componentWillUnmount()
                    } catch (t) {
                        b.__e(t, e)
                    }
                r.base = r.__P = null,
                t.__c = void 0
            }
            if (r = t.__k)
                for (n = 0; n < r.length; n++)
                    r[n] && X(r[n], e, o || "function" != typeof t.type);
            o || null == t.__e || j(t.__e),
            t.__ = t.__e = t.__d = void 0
        }
        function Q(t, e, o) {
            return this.constructor(t, o)
        }
        function J(t, e, o) {
            var r, n, s, i;
            b.__ && b.__(t, e),
            n = (r = "function" == typeof o) ? null : o && o.__k || e.__k,
            s = [],
            i = [],
            G(e, t = (!r && o || e).__k = F(D, null, [t]), n || P, P, void 0 !== e.ownerSVGElement, !r && o ? [o] : n ? null : e.firstChild ? m.call(e.childNodes) : null, s, !r && o ? o : n ? n.__e : e.firstChild, r, i),
            K(s, t, i)
        }
        function tt(t, e) {
            var o = {
                __c: e = "__cC" + x++,
                __: t,
                Consumer: function(t, e) {
                    return t.children(e)
                },
                Provider: function(t) {
                    var o, r;
                    return this.getChildContext || (o = [],
                    (r = {})[e] = this,
                    this.getChildContext = function() {
                        return r
                    }
                    ,
                    this.shouldComponentUpdate = function(t) {
                        this.props.value !== t.value && o.some((function(t) {
                            t.__e = !0,
                            B(t)
                        }
                        ))
                    }
                    ,
                    this.sub = function(t) {
                        o.push(t);
                        var e = t.componentWillUnmount;
                        t.componentWillUnmount = function() {
                            o.splice(o.indexOf(t), 1),
                            e && e.call(t)
                        }
                    }
                    ),
                    t.children
                }
            };
            return o.Provider.__ = o.Consumer.contextType = o
        }
        m = k.slice,
        b = {
            __e: function(t, e, o, r) {
                for (var n, s, i; e = e.__; )
                    if ((n = e.__c) && !n.__)
                        try {
                            if ((s = n.constructor) && null != s.getDerivedStateFromError && (n.setState(s.getDerivedStateFromError(t)),
                            i = n.__d),
                            null != n.componentDidCatch && (n.componentDidCatch(t, r || {}),
                            i = n.__d),
                            i)
                                return n.__E = n
                        } catch (e) {
                            t = e
                        }
                throw t
            }
        },
        v = 0,
        T.prototype.setState = function(t, e) {
            var o;
            o = null != this.__s && this.__s !== this.state ? this.__s : this.__s = O({}, this.state),
            "function" == typeof t && (t = t(O({}, o), this.props)),
            t && O(o, t),
            null != t && this.__v && (e && this._sb.push(e),
            B(this))
        }
        ,
        T.prototype.forceUpdate = function(t) {
            this.__v && (this.__e = !0,
            t && this.__h.push(t),
            B(this))
        }
        ,
        T.prototype.render = D,
        w = [],
        C = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
        _ = function(t, e) {
            return t.__v.__b - e.__v.__b
        }
        ,
        I.__r = 0,
        x = 0;
        const et = function() {
            this.__data__ = [],
            this.size = 0
        };
        const ot = function(t, e) {
            return t === e || t != t && e != e
        };
        const rt = function(t, e) {
            for (var o = t.length; o--; )
                if (ot(t[o][0], e))
                    return o;
            return -1
        };
        var nt = Array.prototype.splice;
        const st = function(t) {
            var e = this.__data__
              , o = rt(e, t);
            return !(o < 0) && (o == e.length - 1 ? e.pop() : nt.call(e, o, 1),
            --this.size,
            !0)
        };
        const it = function(t) {
            var e = this.__data__
              , o = rt(e, t);
            return o < 0 ? void 0 : e[o][1]
        };
        const at = function(t) {
            return rt(this.__data__, t) > -1
        };
        const ct = function(t, e) {
            var o = this.__data__
              , r = rt(o, t);
            return r < 0 ? (++this.size,
            o.push([t, e])) : o[r][1] = e,
            this
        };
        function lt(t) {
            var e = -1
              , o = null == t ? 0 : t.length;
            for (this.clear(); ++e < o; ) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        lt.prototype.clear = et,
        lt.prototype.delete = st,
        lt.prototype.get = it,
        lt.prototype.has = at,
        lt.prototype.set = ct;
        const ut = lt;
        const dt = function() {
            this.__data__ = new ut,
            this.size = 0
        };
        const ht = function(t) {
            var e = this.__data__
              , o = e.delete(t);
            return this.size = e.size,
            o
        };
        const pt = function(t) {
            return this.__data__.get(t)
        };
        const ft = function(t) {
            return this.__data__.has(t)
        };
        const gt = "object" == typeof global && global && global.Object === Object && global;
        var mt = "object" == typeof self && self && self.Object === Object && self;
        const bt = gt || mt || Function("return this")();
        const vt = bt.Symbol;
        var wt = Object.prototype
          , yt = wt.hasOwnProperty
          , Ct = wt.toString
          , _t = vt ? vt.toStringTag : void 0;
        const xt = function(t) {
            var e = yt.call(t, _t)
              , o = t[_t];
            try {
                t[_t] = void 0;
                var r = !0
            } catch (t) {}
            var n = Ct.call(t);
            return r && (e ? t[_t] = o : delete t[_t]),
            n
        };
        var Pt = Object.prototype.toString;
        const kt = function(t) {
            return Pt.call(t)
        };
        var St = vt ? vt.toStringTag : void 0;
        const At = function(t) {
            return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : St && St in Object(t) ? xt(t) : kt(t)
        };
        const Ot = function(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        };
        const jt = function(t) {
            if (!Ot(t))
                return !1;
            var e = At(t);
            return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
        };
        const Ft = bt["__core-js_shared__"];
        var Et, Dt = (Et = /[^.]+$/.exec(Ft && Ft.keys && Ft.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Et : "";
        const Tt = function(t) {
            return !!Dt && Dt in t
        };
        var Nt = Function.prototype.toString;
        const Lt = function(t) {
            if (null != t) {
                try {
                    return Nt.call(t)
                } catch (t) {}
                try {
                    return t + ""
                } catch (t) {}
            }
            return ""
        };
        var Bt = /^\[object .+?Constructor\]$/
          , It = Function.prototype
          , Mt = Object.prototype
          , qt = It.toString
          , Wt = Mt.hasOwnProperty
          , Ht = RegExp("^" + qt.call(Wt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        const Rt = function(t) {
            return !(!Ot(t) || Tt(t)) && (jt(t) ? Ht : Bt).test(Lt(t))
        };
        const zt = function(t, e) {
            return null == t ? void 0 : t[e]
        };
        const Ut = function(t, e) {
            var o = zt(t, e);
            return Rt(o) ? o : void 0
        };
        const $t = Ut(bt, "Map");
        const Vt = Ut(Object, "create");
        const Gt = function() {
            this.__data__ = Vt ? Vt(null) : {},
            this.size = 0
        };
        const Kt = function(t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0,
            e
        };
        var Yt = Object.prototype.hasOwnProperty;
        const Zt = function(t) {
            var e = this.__data__;
            if (Vt) {
                var o = e[t];
                return "__lodash_hash_undefined__" === o ? void 0 : o
            }
            return Yt.call(e, t) ? e[t] : void 0
        };
        var Xt = Object.prototype.hasOwnProperty;
        const Qt = function(t) {
            var e = this.__data__;
            return Vt ? void 0 !== e[t] : Xt.call(e, t)
        };
        const Jt = function(t, e) {
            var o = this.__data__;
            return this.size += this.has(t) ? 0 : 1,
            o[t] = Vt && void 0 === e ? "__lodash_hash_undefined__" : e,
            this
        };
        function te(t) {
            var e = -1
              , o = null == t ? 0 : t.length;
            for (this.clear(); ++e < o; ) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        te.prototype.clear = Gt,
        te.prototype.delete = Kt,
        te.prototype.get = Zt,
        te.prototype.has = Qt,
        te.prototype.set = Jt;
        const ee = te;
        const oe = function() {
            this.size = 0,
            this.__data__ = {
                hash: new ee,
                map: new ($t || ut),
                string: new ee
            }
        };
        const re = function(t) {
            var e = typeof t;
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
        };
        const ne = function(t, e) {
            var o = t.__data__;
            return re(e) ? o["string" == typeof e ? "string" : "hash"] : o.map
        };
        const se = function(t) {
            var e = ne(this, t).delete(t);
            return this.size -= e ? 1 : 0,
            e
        };
        const ie = function(t) {
            return ne(this, t).get(t)
        };
        const ae = function(t) {
            return ne(this, t).has(t)
        };
        const ce = function(t, e) {
            var o = ne(this, t)
              , r = o.size;
            return o.set(t, e),
            this.size += o.size == r ? 0 : 1,
            this
        };
        function le(t) {
            var e = -1
              , o = null == t ? 0 : t.length;
            for (this.clear(); ++e < o; ) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        le.prototype.clear = oe,
        le.prototype.delete = se,
        le.prototype.get = ie,
        le.prototype.has = ae,
        le.prototype.set = ce;
        const ue = le;
        const de = function(t, e) {
            var o = this.__data__;
            if (o instanceof ut) {
                var r = o.__data__;
                if (!$t || r.length < 199)
                    return r.push([t, e]),
                    this.size = ++o.size,
                    this;
                o = this.__data__ = new ue(r)
            }
            return o.set(t, e),
            this.size = o.size,
            this
        };
        function he(t) {
            var e = this.__data__ = new ut(t);
            this.size = e.size
        }
        he.prototype.clear = dt,
        he.prototype.delete = ht,
        he.prototype.get = pt,
        he.prototype.has = ft,
        he.prototype.set = de;
        const pe = he;
        const fe = function(t, e) {
            for (var o = -1, r = null == t ? 0 : t.length; ++o < r && !1 !== e(t[o], o, t); )
                ;
            return t
        };
        const ge = function() {
            try {
                var t = Ut(Object, "defineProperty");
                return t({}, "", {}),
                t
            } catch (t) {}
        }();
        const me = function(t, e, o) {
            "__proto__" == e && ge ? ge(t, e, {
                configurable: !0,
                enumerable: !0,
                value: o,
                writable: !0
            }) : t[e] = o
        };
        var be = Object.prototype.hasOwnProperty;
        const ve = function(t, e, o) {
            var r = t[e];
            be.call(t, e) && ot(r, o) && (void 0 !== o || e in t) || me(t, e, o)
        };
        const we = function(t, e, o, r) {
            var n = !o;
            o || (o = {});
            for (var s = -1, i = e.length; ++s < i; ) {
                var a = e[s]
                  , c = r ? r(o[a], t[a], a, o, t) : void 0;
                void 0 === c && (c = t[a]),
                n ? me(o, a, c) : ve(o, a, c)
            }
            return o
        };
        const ye = function(t, e) {
            for (var o = -1, r = Array(t); ++o < t; )
                r[o] = e(o);
            return r
        };
        const Ce = function(t) {
            return null != t && "object" == typeof t
        };
        const _e = function(t) {
            return Ce(t) && "[object Arguments]" == At(t)
        };
        var xe = Object.prototype
          , Pe = xe.hasOwnProperty
          , ke = xe.propertyIsEnumerable;
        const Se = _e(function() {
            return arguments
        }()) ? _e : function(t) {
            return Ce(t) && Pe.call(t, "callee") && !ke.call(t, "callee")
        }
        ;
        const Ae = Array.isArray;
        const Oe = function() {
            return !1
        };
        var je = "object" == typeof exports && exports && !exports.nodeType && exports
          , Fe = je && "object" == typeof module && module && !module.nodeType && module
          , Ee = Fe && Fe.exports === je ? bt.Buffer : void 0;
        const De = (Ee ? Ee.isBuffer : void 0) || Oe;
        var Te = /^(?:0|[1-9]\d*)$/;
        const Ne = function(t, e) {
            var o = typeof t;
            return !!(e = null == e ? 9007199254740991 : e) && ("number" == o || "symbol" != o && Te.test(t)) && t > -1 && t % 1 == 0 && t < e
        };
        const Le = function(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        };
        var Be = {};
        Be["[object Float32Array]"] = Be["[object Float64Array]"] = Be["[object Int8Array]"] = Be["[object Int16Array]"] = Be["[object Int32Array]"] = Be["[object Uint8Array]"] = Be["[object Uint8ClampedArray]"] = Be["[object Uint16Array]"] = Be["[object Uint32Array]"] = !0,
        Be["[object Arguments]"] = Be["[object Array]"] = Be["[object ArrayBuffer]"] = Be["[object Boolean]"] = Be["[object DataView]"] = Be["[object Date]"] = Be["[object Error]"] = Be["[object Function]"] = Be["[object Map]"] = Be["[object Number]"] = Be["[object Object]"] = Be["[object RegExp]"] = Be["[object Set]"] = Be["[object String]"] = Be["[object WeakMap]"] = !1;
        const Ie = function(t) {
            return Ce(t) && Le(t.length) && !!Be[At(t)]
        };
        const Me = function(t) {
            return function(e) {
                return t(e)
            }
        };
        var qe = "object" == typeof exports && exports && !exports.nodeType && exports
          , We = qe && "object" == typeof module && module && !module.nodeType && module
          , He = We && We.exports === qe && gt.process;
        const Re = function() {
            try {
                var t = We && We.require && We.require("util").types;
                return t || He && He.binding && He.binding("util")
            } catch (t) {}
        }();
        var ze = Re && Re.isTypedArray;
        const Ue = ze ? Me(ze) : Ie;
        var $e = Object.prototype.hasOwnProperty;
        const Ve = function(t, e) {
            var o = Ae(t)
              , r = !o && Se(t)
              , n = !o && !r && De(t)
              , s = !o && !r && !n && Ue(t)
              , i = o || r || n || s
              , a = i ? ye(t.length, String) : []
              , c = a.length;
            for (var l in t)
                !e && !$e.call(t, l) || i && ("length" == l || n && ("offset" == l || "parent" == l) || s && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || Ne(l, c)) || a.push(l);
            return a
        };
        var Ge = Object.prototype;
        const Ke = function(t) {
            var e = t && t.constructor;
            return t === ("function" == typeof e && e.prototype || Ge)
        };
        const Ye = function(t, e) {
            return function(o) {
                return t(e(o))
            }
        };
        const Ze = Ye(Object.keys, Object);
        var Xe = Object.prototype.hasOwnProperty;
        const Qe = function(t) {
            if (!Ke(t))
                return Ze(t);
            var e = [];
            for (var o in Object(t))
                Xe.call(t, o) && "constructor" != o && e.push(o);
            return e
        };
        const Je = function(t) {
            return null != t && Le(t.length) && !jt(t)
        };
        const to = function(t) {
            return Je(t) ? Ve(t) : Qe(t)
        };
        const eo = function(t, e) {
            return t && we(e, to(e), t)
        };
        const oo = function(t) {
            var e = [];
            if (null != t)
                for (var o in Object(t))
                    e.push(o);
            return e
        };
        var ro = Object.prototype.hasOwnProperty;
        const no = function(t) {
            if (!Ot(t))
                return oo(t);
            var e = Ke(t)
              , o = [];
            for (var r in t)
                ("constructor" != r || !e && ro.call(t, r)) && o.push(r);
            return o
        };
        const so = function(t) {
            return Je(t) ? Ve(t, !0) : no(t)
        };
        const io = function(t, e) {
            return t && we(e, so(e), t)
        };
        var ao = "object" == typeof exports && exports && !exports.nodeType && exports
          , co = ao && "object" == typeof module && module && !module.nodeType && module
          , lo = co && co.exports === ao ? bt.Buffer : void 0
          , uo = lo ? lo.allocUnsafe : void 0;
        const ho = function(t, e) {
            if (e)
                return t.slice();
            var o = t.length
              , r = uo ? uo(o) : new t.constructor(o);
            return t.copy(r),
            r
        };
        const po = function(t, e) {
            var o = -1
              , r = t.length;
            for (e || (e = Array(r)); ++o < r; )
                e[o] = t[o];
            return e
        };
        const fo = function(t, e) {
            for (var o = -1, r = null == t ? 0 : t.length, n = 0, s = []; ++o < r; ) {
                var i = t[o];
                e(i, o, t) && (s[n++] = i)
            }
            return s
        };
        const go = function() {
            return []
        };
        var mo = Object.prototype.propertyIsEnumerable
          , bo = Object.getOwnPropertySymbols
          , vo = bo ? function(t) {
            return null == t ? [] : (t = Object(t),
            fo(bo(t), (function(e) {
                return mo.call(t, e)
            }
            )))
        }
        : go;
        const wo = vo;
        const yo = function(t, e) {
            return we(t, wo(t), e)
        };
        const Co = function(t, e) {
            for (var o = -1, r = e.length, n = t.length; ++o < r; )
                t[n + o] = e[o];
            return t
        };
        const _o = Ye(Object.getPrototypeOf, Object);
        var xo = Object.getOwnPropertySymbols ? function(t) {
            for (var e = []; t; )
                Co(e, wo(t)),
                t = _o(t);
            return e
        }
        : go;
        const Po = xo;
        const ko = function(t, e) {
            return we(t, Po(t), e)
        };
        const So = function(t, e, o) {
            var r = e(t);
            return Ae(t) ? r : Co(r, o(t))
        };
        const Ao = function(t) {
            return So(t, to, wo)
        };
        const Oo = function(t) {
            return So(t, so, Po)
        };
        const jo = Ut(bt, "DataView");
        const Fo = Ut(bt, "Promise");
        const Eo = Ut(bt, "Set");
        const Do = Ut(bt, "WeakMap");
        var To = "[object Map]"
          , No = "[object Promise]"
          , Lo = "[object Set]"
          , Bo = "[object WeakMap]"
          , Io = "[object DataView]"
          , Mo = Lt(jo)
          , qo = Lt($t)
          , Wo = Lt(Fo)
          , Ho = Lt(Eo)
          , Ro = Lt(Do)
          , zo = At;
        (jo && zo(new jo(new ArrayBuffer(1))) != Io || $t && zo(new $t) != To || Fo && zo(Fo.resolve()) != No || Eo && zo(new Eo) != Lo || Do && zo(new Do) != Bo) && (zo = function(t) {
            var e = At(t)
              , o = "[object Object]" == e ? t.constructor : void 0
              , r = o ? Lt(o) : "";
            if (r)
                switch (r) {
                case Mo:
                    return Io;
                case qo:
                    return To;
                case Wo:
                    return No;
                case Ho:
                    return Lo;
                case Ro:
                    return Bo
                }
            return e
        }
        );
        const Uo = zo;
        var $o = Object.prototype.hasOwnProperty;
        const Vo = function(t) {
            var e = t.length
              , o = new t.constructor(e);
            return e && "string" == typeof t[0] && $o.call(t, "index") && (o.index = t.index,
            o.input = t.input),
            o
        };
        const Go = bt.Uint8Array;
        const Ko = function(t) {
            var e = new t.constructor(t.byteLength);
            return new Go(e).set(new Go(t)),
            e
        };
        const Yo = function(t, e) {
            var o = e ? Ko(t.buffer) : t.buffer;
            return new t.constructor(o,t.byteOffset,t.byteLength)
        };
        var Zo = /\w*$/;
        const Xo = function(t) {
            var e = new t.constructor(t.source,Zo.exec(t));
            return e.lastIndex = t.lastIndex,
            e
        };
        var Qo = vt ? vt.prototype : void 0
          , Jo = Qo ? Qo.valueOf : void 0;
        const tr = function(t) {
            return Jo ? Object(Jo.call(t)) : {}
        };
        const er = function(t, e) {
            var o = e ? Ko(t.buffer) : t.buffer;
            return new t.constructor(o,t.byteOffset,t.length)
        };
        const or = function(t, e, o) {
            var r = t.constructor;
            switch (e) {
            case "[object ArrayBuffer]":
                return Ko(t);
            case "[object Boolean]":
            case "[object Date]":
                return new r(+t);
            case "[object DataView]":
                return Yo(t, o);
            case "[object Float32Array]":
            case "[object Float64Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object Int32Array]":
            case "[object Uint8Array]":
            case "[object Uint8ClampedArray]":
            case "[object Uint16Array]":
            case "[object Uint32Array]":
                return er(t, o);
            case "[object Map]":
            case "[object Set]":
                return new r;
            case "[object Number]":
            case "[object String]":
                return new r(t);
            case "[object RegExp]":
                return Xo(t);
            case "[object Symbol]":
                return tr(t)
            }
        };
        var rr = Object.create
          , nr = function() {
            function t() {}
            return function(e) {
                if (!Ot(e))
                    return {};
                if (rr)
                    return rr(e);
                t.prototype = e;
                var o = new t;
                return t.prototype = void 0,
                o
            }
        }();
        const sr = nr;
        const ir = function(t) {
            return "function" != typeof t.constructor || Ke(t) ? {} : sr(_o(t))
        };
        const ar = function(t) {
            return Ce(t) && "[object Map]" == Uo(t)
        };
        var cr = Re && Re.isMap;
        const lr = cr ? Me(cr) : ar;
        const ur = function(t) {
            return Ce(t) && "[object Set]" == Uo(t)
        };
        var dr = Re && Re.isSet;
        const hr = dr ? Me(dr) : ur;
        var pr = "[object Arguments]"
          , fr = "[object Function]"
          , gr = "[object Object]"
          , mr = {};
        mr[pr] = mr["[object Array]"] = mr["[object ArrayBuffer]"] = mr["[object DataView]"] = mr["[object Boolean]"] = mr["[object Date]"] = mr["[object Float32Array]"] = mr["[object Float64Array]"] = mr["[object Int8Array]"] = mr["[object Int16Array]"] = mr["[object Int32Array]"] = mr["[object Map]"] = mr["[object Number]"] = mr["[object Object]"] = mr["[object RegExp]"] = mr["[object Set]"] = mr["[object String]"] = mr["[object Symbol]"] = mr["[object Uint8Array]"] = mr["[object Uint8ClampedArray]"] = mr["[object Uint16Array]"] = mr["[object Uint32Array]"] = !0,
        mr["[object Error]"] = mr[fr] = mr["[object WeakMap]"] = !1;
        const br = function t(e, o, r, n, s, i) {
            var a, c = 1 & o, l = 2 & o, u = 4 & o;
            if (r && (a = s ? r(e, n, s, i) : r(e)),
            void 0 !== a)
                return a;
            if (!Ot(e))
                return e;
            var d = Ae(e);
            if (d) {
                if (a = Vo(e),
                !c)
                    return po(e, a)
            } else {
                var h = Uo(e)
                  , p = h == fr || "[object GeneratorFunction]" == h;
                if (De(e))
                    return ho(e, c);
                if (h == gr || h == pr || p && !s) {
                    if (a = l || p ? {} : ir(e),
                    !c)
                        return l ? ko(e, io(a, e)) : yo(e, eo(a, e))
                } else {
                    if (!mr[h])
                        return s ? e : {};
                    a = or(e, h, c)
                }
            }
            i || (i = new pe);
            var f = i.get(e);
            if (f)
                return f;
            i.set(e, a),
            hr(e) ? e.forEach((function(n) {
                a.add(t(n, o, r, n, e, i))
            }
            )) : lr(e) && e.forEach((function(n, s) {
                a.set(s, t(n, o, r, s, e, i))
            }
            ));
            var g = d ? void 0 : (u ? l ? Oo : Ao : l ? so : to)(e);
            return fe(g || e, (function(n, s) {
                g && (n = e[s = n]),
                ve(a, s, t(n, o, r, s, e, i))
            }
            )),
            a
        };
        const vr = function(t) {
            return br(t, 5)
        };
        var wr;
        !function(t) {
            t.OPEN_POPUP = "open-popup",
            t.GOTO_SOURCE = "goto-source",
            t.NOTHING = "nothing"
        }(wr || (wr = {}));
        const yr = {
            lang: "en",
            container: "#crt-container",
            debug: !1,
            hidePoweredBy: !1,
            embedSource: "",
            forceHttps: !1,
            feed: {
                id: "",
                apiEndpoint: "https://api.curator.io",
                postsPerPage: 12,
                params: {},
                limit: 25
            },
            widget: {
                autoLoadNew: !1,
                lazyLoadType: "none",
                gridMobile: !1
            },
            post: {
                showTitles: !0,
                showShare: !0,
                showComments: !1,
                showLikes: !1,
                autoPlayVideos: !1,
                clickAction: wr.OPEN_POPUP,
                clickReadMoreAction: "open-popup",
                maxLines: 0
            },
            popup: {
                template: "popup",
                templateWrapper: "popup-wrapper",
                autoPlayVideos: !1,
                deepLink: !1
            },
            filter: {
                template: "filter",
                showNetworks: !1,
                showSources: !1,
                showAll: !1,
                default: "all",
                limitPosts: !1,
                limitPostNumber: 0,
                period: ""
            }
        };
        const Cr = function(t, e, o) {
            switch (o.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, o[0]);
            case 2:
                return t.call(e, o[0], o[1]);
            case 3:
                return t.call(e, o[0], o[1], o[2])
            }
            return t.apply(e, o)
        };
        const _r = function(t) {
            return t
        };
        var xr = Math.max;
        const Pr = function(t, e, o) {
            return e = xr(void 0 === e ? t.length - 1 : e, 0),
            function() {
                for (var r = arguments, n = -1, s = xr(r.length - e, 0), i = Array(s); ++n < s; )
                    i[n] = r[e + n];
                n = -1;
                for (var a = Array(e + 1); ++n < e; )
                    a[n] = r[n];
                return a[e] = o(i),
                Cr(t, this, a)
            }
        };
        const kr = function(t) {
            return function() {
                return t
            }
        };
        var Sr = ge ? function(t, e) {
            return ge(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: kr(e),
                writable: !0
            })
        }
        : _r;
        const Ar = Sr;
        var Or = Date.now;
        const jr = function(t) {
            var e = 0
              , o = 0;
            return function() {
                var r = Or()
                  , n = 16 - (r - o);
                if (o = r,
                n > 0) {
                    if (++e >= 800)
                        return arguments[0]
                } else
                    e = 0;
                return t.apply(void 0, arguments)
            }
        }(Ar);
        const Fr = function(t, e) {
            return jr(Pr(t, e, _r), t + "")
        };
        const Er = function(t, e, o) {
            (void 0 !== o && !ot(t[e], o) || void 0 === o && !(e in t)) && me(t, e, o)
        };
        const Dr = function(t) {
            return function(e, o, r) {
                for (var n = -1, s = Object(e), i = r(e), a = i.length; a--; ) {
                    var c = i[t ? a : ++n];
                    if (!1 === o(s[c], c, s))
                        break
                }
                return e
            }
        };
        const Tr = Dr();
        const Nr = function(t) {
            return Ce(t) && Je(t)
        };
        var Lr = Function.prototype
          , Br = Object.prototype
          , Ir = Lr.toString
          , Mr = Br.hasOwnProperty
          , qr = Ir.call(Object);
        const Wr = function(t) {
            if (!Ce(t) || "[object Object]" != At(t))
                return !1;
            var e = _o(t);
            if (null === e)
                return !0;
            var o = Mr.call(e, "constructor") && e.constructor;
            return "function" == typeof o && o instanceof o && Ir.call(o) == qr
        };
        const Hr = function(t, e) {
            if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e)
                return t[e]
        };
        const Rr = function(t) {
            return we(t, so(t))
        };
        const zr = function(t, e, o, r, n, s, i) {
            var a = Hr(t, o)
              , c = Hr(e, o)
              , l = i.get(c);
            if (l)
                Er(t, o, l);
            else {
                var u = s ? s(a, c, o + "", t, e, i) : void 0
                  , d = void 0 === u;
                if (d) {
                    var h = Ae(c)
                      , p = !h && De(c)
                      , f = !h && !p && Ue(c);
                    u = c,
                    h || p || f ? Ae(a) ? u = a : Nr(a) ? u = po(a) : p ? (d = !1,
                    u = ho(c, !0)) : f ? (d = !1,
                    u = er(c, !0)) : u = [] : Wr(c) || Se(c) ? (u = a,
                    Se(a) ? u = Rr(a) : Ot(a) && !jt(a) || (u = ir(c))) : d = !1
                }
                d && (i.set(c, u),
                n(u, c, r, s, i),
                i.delete(c)),
                Er(t, o, u)
            }
        };
        const Ur = function t(e, o, r, n, s) {
            e !== o && Tr(o, (function(i, a) {
                if (s || (s = new pe),
                Ot(i))
                    zr(e, o, a, r, t, n, s);
                else {
                    var c = n ? n(Hr(e, a), i, a + "", e, o, s) : void 0;
                    void 0 === c && (c = i),
                    Er(e, a, c)
                }
            }
            ), so)
        };
        const $r = function t(e, o, r, n, s, i) {
            return Ot(e) && Ot(o) && (i.set(o, e),
            Ur(e, o, void 0, t, i),
            i.delete(o)),
            e
        };
        const Vr = function(t, e, o) {
            if (!Ot(o))
                return !1;
            var r = typeof e;
            return !!("number" == r ? Je(o) && Ne(e, o.length) : "string" == r && e in o) && ot(o[e], t)
        };
        const Gr = function(t) {
            return Fr((function(e, o) {
                var r = -1
                  , n = o.length
                  , s = n > 1 ? o[n - 1] : void 0
                  , i = n > 2 ? o[2] : void 0;
                for (s = t.length > 3 && "function" == typeof s ? (n--,
                s) : void 0,
                i && Vr(o[0], o[1], i) && (s = n < 3 ? void 0 : s,
                n = 1),
                e = Object(e); ++r < n; ) {
                    var a = o[r];
                    a && t(e, a, r, s)
                }
                return e
            }
            ))
        };
        var Kr = Gr((function(t, e, o, r) {
            Ur(t, e, o, r)
        }
        ));
        const Yr = Kr;
        var Zr = Fr((function(t) {
            return t.push(void 0, $r),
            Cr(Yr, void 0, t)
        }
        ));
        const Xr = Zr
          , Qr = Xr({}, yr, {
            post: {
                matchHeights: !1,
                showComments: !1,
                showLikes: !1,
                maxHeight: 0,
                minWidth: 250
            },
            widget: {
                template: "widget-carousel",
                autoPlay: !0,
                autoLoad: !0,
                infinite: !1,
                controlsOver: !1,
                controlsShowOnHover: !1,
                speed: 5e3,
                duration: 700,
                panesVisible: -1,
                useCss: !0,
                moveAmount: 0,
                easing: "ease-in-out",
                progressiveLoad: !1,
                lazyLoad: !1,
                horizontalSpacing: 20,
                verticalSpacing: 0
            },
            popup: {
                deepLink: !1
            }
        })
          , Jr = Xr({}, {
            post: {
                template: "post-grid",
                matchHeights: !1,
                minWidth: 200,
                imageHeight: "100%"
            },
            widget: {
                template: "widget-grid-carousel",
                autoPlay: !0,
                autoLoad: !0,
                infinite: !1,
                rows: 2,
                controlsOver: !0,
                controlsShowOnHover: !1,
                speed: 5e3,
                duration: 700,
                panesVisible: -1,
                useCss: !0,
                moveAmount: 0,
                easing: null,
                verticalSpacing: 0,
                horizontalSpacing: 0
            },
            popup: {
                deepLink: !1
            }
        }, yr)
          , tn = Xr({}, {
            post: {
                template: "post-grid",
                imageHeight: "100%",
                minWidth: 250
            },
            widget: {
                animate: !1,
                continuousScroll: !1,
                continuousScrollOffset: 50,
                rows: 3,
                template: "widget-grid",
                showLoadMore: !1,
                loadMoreRows: 1,
                verticalSpacing: 0,
                horizontalSpacing: 0
            },
            responsive: {
                480: {
                    widget: {
                        loadMoreRows: 4
                    }
                },
                768: {
                    widget: {
                        loadMoreRows: 2
                    }
                }
            }
        }, yr)
          , en = Xr({}, {
            post: {
                matchHeights: !1,
                showComments: !1,
                showLikes: !1,
                maxHeight: 0,
                minWidth: 2e3
            },
            widget: {
                template: "widget-carousel",
                autoPlay: !0,
                autoLoad: !0,
                infinite: !1,
                controlsOver: !0,
                controlsShowOnHover: !0,
                speed: 5e3,
                duration: 700,
                panesVisible: -1,
                useCss: !0,
                moveAmount: 0,
                easing: null
            },
            popup: {
                deepLink: !1
            }
        }, yr)
          , on = Xr({}, {
            post: {
                template: "post-list",
                imageWidth: "25%",
                showComments: !1,
                showLikes: !1
            },
            widget: {
                template: "widget-list",
                animate: !1,
                showLoadMore: !0,
                continuousScroll: !1,
                postsPerPage: 12,
                verticalSpacing: 20
            }
        }, yr)
          , rn = Xr({}, {
            post: {
                template: "post-mosaic",
                imageHeight: "100%",
                minWidth: 150
            },
            widget: {
                showLoadMore: !0,
                switchPosts: !0,
                rows: 9
            }
        }, yr)
          , nn = Xr({}, {
            post: {
                template: "post-tetris",
                imageHeight: "100%",
                minWidth: 280,
                maxLines: 3
            },
            widget: {
                showLoadMore: !0,
                postsPerPage: 25,
                verticalSpacing: 20,
                horizontalSpacing: 20
            }
        }, yr)
          , sn = Xr({}, {
            post: {
                template: "post-select",
                imageHeight: "100%",
                minWidth: 95,
                clickAction: "nothing"
            },
            widget: {
                showLoadMore: !1,
                autoPlay: !1,
                autoLoad: !0,
                infinite: !0,
                controlsOver: !1,
                controlsShowOnHover: !1,
                speed: 5e3,
                duration: 700,
                panesVisible: -1,
                useCss: !0,
                moveAmount: 0,
                easing: "ease-in-out",
                progressiveLoad: !1,
                lazyLoad: !1
            }
        }, yr)
          , an = Xr({}, {
            post: {
                template: "post-stack",
                clickAction: "nothing"
            },
            widget: {}
        }, yr)
          , cn = Xr({}, {
            post: {
                animate: !0,
                maxHeight: 0
            },
            widget: {
                template: "widget-wall",
                colWidth: 250,
                colGutter: 0,
                showLoadMore: !0,
                continuousScroll: !1,
                postsPerPage: 12,
                animate: !1,
                progressiveLoad: !1,
                lazyLoad: !1
            }
        }, yr)
          , ln = Xr({}, {
            post: {
                animate: !0,
                maxHeight: 0
            },
            widget: {
                template: "widget-waterfall",
                colWidth: 250,
                colGutter: 0,
                showLoadMore: !0,
                continuousScroll: !1,
                postsPerPage: 12,
                animate: !1,
                progressiveLoad: !1,
                lazyLoad: !1,
                verticalSpacing: 20,
                horizontalSpacing: 20
            }
        }, yr)
          , un = Xr({}, {
            post: {
                template: "post-select",
                imageHeight: "100%",
                minWidth: 95,
                clickAction: "nothing"
            },
            widget: {
                showLoadMore: !1,
                autoPlay: !1,
                postsPerPage: 12
            }
        }, yr)
          , dn = Xr({}, {
            post: {
                template: "post-stack",
                clickAction: "nothing"
            },
            widget: {
                verticalSpacing: 0,
                postsPerPage: 12,
                showLoadMore: !1
            }
        }, yr)
          , hn = Xr({}, {
            post: {
                template: "post-stack",
                clickAction: "nothing"
            },
            widget: {
                postsPerPage: 12,
                colWidth: 250
            }
        }, yr)
          , pn = Xr({}, {
            post: {
                template: "post-select",
                imageHeight: "100%",
                minWidth: 95,
                clickAction: "nothing"
            },
            widget: {
                showLoadMore: !1,
                autoPlay: !1,
                postsPerPage: 12
            }
        }, yr);
        const fn = function(t) {
            const e = t.bgColor
              , o = t.textColor
              , r = t.linkColor
              , n = t.borderColor
              , s = t.iconColor;
            return {
                config: {
                    post: {
                        template: "post-grid"
                    },
                    widget: {
                        verticalSpacing: 0,
                        horizontalSpacing: 0
                    }
                },
                styles: {
                    gridPost: {},
                    gridPostContent: {
                        backgroundColor: e,
                        color: o
                    },
                    gridPostText: {
                        color: o
                    },
                    gridPostTextLink: {
                        color: r
                    },
                    gridPostHover: {
                        backgroundColor: e,
                        color: o
                    },
                    gridPostHoverLink: {
                        color: r
                    },
                    gridPostIcon: {
                        color: s
                    },
                    gridPostFooter: {
                        backgroundColor: e,
                        borderTopColor: n
                    },
                    gridPostIconWithBorder: {
                        color: s,
                        borderColor: s
                    },
                    gridPostHoverGradient: {
                        background: `linear-gradient(${e}00, ${e}FF)`
                    },
                    loadMore: {
                        color: o,
                        backgroundColor: e,
                        borderColor: n
                    },
                    gridPostDate: {
                        color: t.dateColor
                    },
                    cssRules: {
                        ".crt-widget *:focus": {
                            outlineColor: t.tabIndexColor
                        },
                        ".crt-popup-manager *:focus": {
                            outlineColor: t.tabIndexColor
                        }
                    }
                }
            }
        }
          , gn = function(t) {
            const e = t.bgColor
              , o = t.textColor
              , r = t.linkColor
              , n = t.borderColor
              , s = t.iconColor;
            return {
                config: {
                    post: {
                        template: "post-grid-new-york"
                    },
                    widget: {
                        verticalSpacing: 20,
                        horizontalSpacing: 20
                    }
                },
                styles: {
                    gridPost: {
                        padding: "10px",
                        borderRadius: "10px"
                    },
                    gridPostContent: {
                        backgroundColor: e,
                        color: o
                    },
                    gridPostText: {
                        color: o
                    },
                    gridPostTextLink: {
                        color: r
                    },
                    gridPostHover: {
                        backgroundColor: e,
                        color: o
                    },
                    gridPostHoverLink: {
                        color: r
                    },
                    gridPostHoverGradient: {
                        background: `linear-gradient(${e}00, ${e}FF)`
                    },
                    gridPostIcon: {
                        color: s
                    },
                    gridPostFooter: {
                        backgroundColor: e,
                        borderTopColor: n
                    },
                    gridPostIconWithBorder: {
                        color: s,
                        borderColor: s
                    },
                    loadMore: {
                        color: o,
                        backgroundColor: e,
                        borderColor: n
                    },
                    gridPostDate: {
                        color: t.dateColor
                    },
                    cssRules: {
                        ".crt-grid-post-new-york .crt-post-footer .crt-post-fullname a,.crt-grid-post-new-york .crt-post-footer .crt-post-username a": {
                            color: o
                        },
                        ".crt-widget *:focus": {
                            outlineColor: t.tabIndexColor
                        },
                        ".crt-popup-manager *:focus": {
                            outlineColor: t.tabIndexColor
                        }
                    }
                }
            }
        }
          , mn = function(t) {
            const e = t.bgColor
              , o = t.textColor
              , r = t.linkColor
              , n = t.borderColor
              , s = t.iconColor
              , i = t.dateColor;
            return {
                config: {
                    post: {
                        template: "post-grid-tokyo"
                    },
                    widget: {
                        verticalSpacing: 20,
                        horizontalSpacing: 20
                    }
                },
                styles: {
                    gridPost: {
                        padding: "10px",
                        borderRadius: "10px"
                    },
                    gridPostContent: {
                        backgroundColor: e,
                        color: o
                    },
                    gridPostText: {
                        color: o
                    },
                    gridPostTextLink: {
                        color: r
                    },
                    gridPostHover: {
                        backgroundColor: e,
                        color: o
                    },
                    gridPostHoverLink: {
                        color: r
                    },
                    gridPostIcon: {
                        color: s
                    },
                    gridPostFooter: {
                        backgroundColor: e
                    },
                    gridPostIconWithBorder: {
                        color: s,
                        borderColor: s
                    },
                    loadMore: {
                        color: o,
                        backgroundColor: e,
                        borderColor: n
                    },
                    gridPostDate: {
                        color: i
                    },
                    cssRules: {
                        ".crt-grid-post-tokyo .crt-post-header .crt-post-share .crt-share-button svg": {
                            color: s
                        },
                        ".crt-widget .crt-grid-post .crt-post-hover .crt-post-date a.crt-post-date-link": {
                            color: i
                        },
                        ".crt-grid-post-tokyo .crt-post-header .crt-social-icon svg": {
                            color: s
                        },
                        ".crt-widget *:focus": {
                            outlineColor: t.tabIndexColor
                        },
                        ".crt-popup-manager *:focus": {
                            outlineColor: t.tabIndexColor
                        }
                    }
                }
            }
        }
          , bn = function(t) {
            const e = t.bgColor
              , o = t.textColor
              , r = t.iconColor
              , n = t.linkColor
              , s = t.borderColor
              , i = t.widgetBgColor
              , a = t.dateColor
              , c = t.tabIndexColor;
            return {
                config: {},
                styles: {
                    widget: {
                        backgroundColor: i
                    },
                    post: {
                        backgroundColor: e,
                        borderColor: s,
                        borderWidth: "1px",
                        color: o
                    },
                    postText: {
                        color: o
                    },
                    postTextLink: {
                        color: n
                    },
                    postName: {
                        color: o,
                        textDecoration: "none"
                    },
                    postUsername: {
                        color: n
                    },
                    postIcon: {
                        color: r
                    },
                    postComments: {
                        color: o
                    },
                    postShareIcons: {
                        color: r
                    },
                    postIconWithBorder: {
                        color: r,
                        borderColor: r
                    },
                    postDate: {
                        color: o
                    },
                    postFixDate: {
                        color: a
                    },
                    postFooter: {
                        backgroundColor: e
                    },
                    linearGradient: {
                        background: `linear-gradient(${e}00, ${e}FF)`
                    },
                    loadMore: {
                        color: o,
                        backgroundColor: e,
                        borderColor: s
                    },
                    cssRules: {
                        ".crt-post .crt-post-border": {
                            borderColor: s
                        },
                        ".crt-widget *:focus": {
                            outlineColor: c
                        },
                        ".crt-popup-manager *:focus": {
                            outlineColor: c
                        }
                    }
                }
            }
        }
          , vn = function(t) {
            const e = t.bgColor
              , o = t.textColor
              , r = t.iconColor
              , n = t.linkColor
              , s = t.borderColor;
            return {
                config: {},
                styles: {
                    widget: {
                        backgroundColor: t.widgetBgColor
                    },
                    post: {
                        backgroundColor: e,
                        borderColor: s,
                        color: o
                    },
                    postText: {
                        color: o
                    },
                    postTextLink: {
                        color: n
                    },
                    postName: {
                        color: o,
                        textDecoration: "none"
                    },
                    postUsername: {
                        color: n
                    },
                    postIcon: {
                        color: r
                    },
                    postComments: {
                        color: o
                    },
                    postIconWithBorder: {
                        color: r,
                        borderColor: r
                    },
                    postShareIcons: {
                        color: r
                    },
                    postDate: {
                        color: o
                    },
                    postFooter: {
                        backgroundColor: e
                    },
                    linearGradient: {
                        background: `linear-gradient(${e}00, ${e}FF)`
                    },
                    loadMore: {
                        color: o,
                        backgroundColor: e,
                        borderColor: s
                    },
                    postMaxHeightReadMore: {
                        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, " + e + " 50%)"
                    },
                    cssRules: {
                        ".crt-post .crt-post-border": {
                            borderWidth: "10px",
                            borderColor: s
                        },
                        ".crt-widget *:focus": {
                            outlineColor: t.tabIndexColor
                        },
                        ".crt-popup-manager *:focus": {
                            outlineColor: t.tabIndexColor
                        }
                    }
                }
            }
        }
          , wn = function(t) {
            const e = t.bgColor
              , o = t.textColor
              , r = t.iconColor
              , n = t.linkColor
              , s = t.borderColor;
            return {
                config: {},
                styles: {
                    widget: {
                        backgroundColor: t.widgetBgColor
                    },
                    post: {
                        backgroundColor: e,
                        borderColor: "transparent",
                        borderWidth: "0px",
                        color: o
                    },
                    postText: {
                        color: o
                    },
                    postTextLink: {
                        color: n
                    },
                    postName: {
                        color: o,
                        textDecoration: "none"
                    },
                    postUsername: {
                        color: n
                    },
                    postIcon: {
                        color: r
                    },
                    postComments: {
                        color: o
                    },
                    postShareIcons: {
                        color: r
                    },
                    postIconWithBorder: {
                        color: r,
                        borderColor: r
                    },
                    postFooter: {
                        backgroundColor: e
                    },
                    postDate: {
                        color: o
                    },
                    linearGradient: {
                        background: `linear-gradient(${e}00, ${e}FF)`
                    },
                    loadMore: {
                        color: o,
                        backgroundColor: e,
                        borderColor: s
                    },
                    cssRules: {
                        ".crt-post .crt-post-border": {
                            borderWidth: "0px"
                        },
                        ".crt-widget *:focus": {
                            outlineColor: t.tabIndexColor
                        },
                        ".crt-popup-manager *:focus": {
                            outlineColor: t.tabIndexColor
                        }
                    }
                }
            }
        }
          , yn = function(t) {
            const e = t.bgColor
              , o = t.textColor
              , r = t.iconColor
              , n = t.linkColor
              , s = t.borderColor;
            return {
                config: {},
                styles: {
                    widget: {
                        backgroundColor: t.widgetBgColor
                    },
                    post: {
                        backgroundColor: e,
                        borderColor: "transparent",
                        borderWidth: "0px",
                        "border-radius": "8px",
                        color: o
                    },
                    postText: {
                        color: o
                    },
                    postTextLink: {
                        color: n
                    },
                    postName: {
                        color: o,
                        textDecoration: "none"
                    },
                    postUsername: {
                        color: n
                    },
                    postIcon: {
                        color: r
                    },
                    postComments: {
                        color: o
                    },
                    postShareIcons: {
                        color: r
                    },
                    postIconWithBorder: {
                        color: r,
                        borderColor: r
                    },
                    postDate: {
                        color: o
                    },
                    loadMore: {
                        color: o,
                        backgroundColor: e,
                        borderColor: s
                    },
                    cssRules: {
                        ".crt-post .crt-post-border": {
                            borderWidth: "0px"
                        },
                        ".crt-widget *:focus": {
                            outlineColor: t.tabIndexColor
                        },
                        ".crt-popup-manager *:focus": {
                            outlineColor: t.tabIndexColor
                        }
                    }
                }
            }
        };
        var Cn, _n;
        !function(t) {
            t.SYDNEY = "sydney",
            t.BERLIN = "berlin",
            t.LONDON = "london",
            t.BARCELONA = "barcelona",
            t.HAVANA = "havana",
            t.HELSINKI = "helsinki"
        }(Cn || (Cn = {})),
        function(t) {
            t.SYDNEY = "sydney",
            t.TOKYO = "tokyo",
            t.NEW_YORK = "new-york"
        }(_n || (_n = {}));
        const xn = {
            widgetBgColor: "transparent",
            bgColor: "#ffffff",
            borderColor: "#cccccc",
            iconColor: "#222222",
            textColor: "#222222",
            linkColor: "#999999",
            dateColor: "#000000",
            footerColor: "#ffffff",
            tabIndexColor: "#cccccc"
        }
          , Pn = {
            defaultColors(t, e) {
                const o = xn;
                return e && Object.prototype.hasOwnProperty.call(Pn.widgetDefaultColors, e) ? Pn.widgetDefaultColors[e] : ("berlin" === t ? o.bgColor = "transparent" : ("transparent" === o.bgColor && (o.bgColor = "#ffffff"),
                "london" === t && (o.borderColor = "#efefef")),
                vr(o))
            },
            widgetThemes(t) {
                if (Object.prototype.hasOwnProperty.call(Pn.widgetThemeOptions, t)) {
                    const e = Pn.getThemeType(t);
                    return Object.keys(Pn.widgetThemeOptions[e])
                }
                return console.error("Unknown Widget Type: " + t),
                []
            },
            getThemeType(t) {
                switch (t) {
                case "Carousel":
                    return Sn.CAROUSEL;
                case "Panel":
                    return Sn.PANEL;
                case "Grid":
                    return Sn.GRID;
                case "GridCarousel":
                    return Sn.GRID_CAROUSEL;
                case "List":
                    return Sn.LIST;
                case "Mosaic":
                    return Sn.MOSAIC;
                case "Tetris":
                    return Sn.TETRIS;
                case "Wall":
                    return Sn.WALL;
                case "Select":
                    return Sn.SELECT;
                case "Stack":
                    return Sn.STACK;
                case "Timeline":
                    return Sn.TIMELINE;
                default:
                    return Sn.WATER_FALL
                }
            },
            defaultTheme(t) {
                const e = Pn.widgetThemes(t);
                return e ? e[0] : (console.error("Unknown Widget Type: " + t),
                "sydney")
            },
            typeConfig: t=>Pn.widgetConfigs[t] ? vr(Pn.widgetConfigs[t]) : {},
            themeConfig(t, e) {
                if (Pn.widgetThemeOptions[t] && Pn.widgetThemeOptions[t][e]) {
                    const o = Pn.widgetThemeOptions[t][e]({});
                    return vr(o.config)
                }
                return {}
            },
            themeStyles(t, e, o) {
                if (Pn.widgetThemeOptions[t] && Pn.widgetThemeOptions[t][e]) {
                    const r = Pn.widgetThemeOptions[t][e](o);
                    return vr(r.styles)
                }
                return {}
            },
            widgetConfigs: {
                Waterfall: ln,
                Carousel: Qr,
                Panel: en,
                Grid: tn,
                GridCarousel: Jr,
                List: on,
                Mosaic: rn,
                Tetris: nn,
                Select: sn,
                Stack: an,
                Wall: cn,
                CoverFlow: un,
                Stagger: dn,
                Layers: hn,
                Timeline: pn
            },
            widgetThemeOptions: {
                Waterfall: {
                    sydney: bn,
                    berlin: wn,
                    london: vn,
                    barcelona: yn,
                    manila: bn,
                    havana: function(t) {
                        const e = t.bgColor
                          , o = t.textColor
                          , r = t.iconColor
                          , n = t.linkColor
                          , s = t.borderColor;
                        return {
                            config: {},
                            styles: {
                                widget: {
                                    backgroundColor: t.widgetBgColor
                                },
                                post: {
                                    backgroundColor: e,
                                    borderColor: s,
                                    borderWidth: "1px",
                                    color: o
                                },
                                postText: {
                                    color: o
                                },
                                postTextLink: {
                                    color: n
                                },
                                postName: {
                                    color: o,
                                    textDecoration: "none"
                                },
                                postUsername: {
                                    color: n
                                },
                                postIcon: {
                                    color: r
                                },
                                postComments: {
                                    color: o
                                },
                                postShareIcons: {
                                    color: r
                                },
                                postIconWithBorder: {
                                    color: r,
                                    borderColor: r
                                },
                                postDate: {
                                    color: o
                                },
                                postFixDate: {
                                    color: t.dateColor
                                },
                                linearGradient: {
                                    background: `linear-gradient(${e}00, ${e}FF)`
                                },
                                loadMore: {
                                    color: o,
                                    backgroundColor: e,
                                    borderColor: s
                                },
                                cssRules: {
                                    ".crt-post .crt-post-border": {
                                        borderColor: s
                                    },
                                    ".crt-post .crt-post-c": {
                                        borderColor: s
                                    },
                                    ".crt-widget .crt-post.crt-post-havana.crt-post-has-image .crt-post-content .crt-post-userimage": {
                                        borderColor: e
                                    },
                                    ".crt-widget .crt-post.crt-post-havana .post-footer-2 .crt-post-share .crt-share-button a svg": {
                                        color: r
                                    },
                                    ".crt-widget *:focus": {
                                        outlineColor: t.tabIndexColor
                                    },
                                    ".crt-popup-manager *:focus": {
                                        outlineColor: t.tabIndexColor
                                    }
                                }
                            }
                        }
                    },
                    helsinki: function(t) {
                        const e = t.bgColor
                          , o = t.textColor
                          , r = t.iconColor
                          , n = t.linkColor
                          , s = t.borderColor
                          , i = t.widgetBgColor
                          , a = t.dateColor
                          , c = t.footerColor
                          , l = {
                            ".crt-post .crt-post-border": {
                                borderColor: s
                            },
                            ".crt-post .crt-post-c": {
                                borderColor: s
                            },
                            ".crt-widget .crt-post.crt-post-helsinki .crt-post-footer-helsinki": {
                                backgroundColor: c
                            },
                            ".crt-post-date .crt-post-date-link": {
                                color: o
                            },
                            ".crt-widget *:focus": {
                                outlineColor: t.tabIndexColor
                            },
                            ".crt-popup-manager *:focus": {
                                outlineColor: t.tabIndexColor
                            }
                        };
                        return "transparent" === c && (l[".crt-widget .crt-post.crt-post-helsinki .crt-post-footer-helsinki"] = {
                            backgroundColor: "transparent",
                            bottom: "0",
                            left: "0",
                            right: "0",
                            position: "absolute"
                        }),
                        {
                            config: {},
                            styles: {
                                widget: {
                                    backgroundColor: i
                                },
                                post: {
                                    backgroundColor: e,
                                    borderColor: s,
                                    borderWidth: "1px",
                                    color: o
                                },
                                postText: {
                                    color: o
                                },
                                postTextLink: {
                                    color: n
                                },
                                postName: {
                                    color: o,
                                    textDecoration: "none"
                                },
                                postUsername: {
                                    color: n
                                },
                                postIcon: {
                                    color: r
                                },
                                postComments: {
                                    color: o
                                },
                                postShareIcons: {
                                    color: r
                                },
                                postIconWithBorder: {
                                    color: r,
                                    borderColor: r
                                },
                                postDate: {
                                    color: o
                                },
                                postFixDate: {
                                    color: a
                                },
                                linearGradient: {
                                    background: `linear-gradient(${e}00, ${e}FF)`
                                },
                                postFooter: {
                                    backgroundColor: c
                                },
                                loadMore: {
                                    color: o,
                                    backgroundColor: e,
                                    borderColor: s
                                },
                                cssRules: l
                            }
                        }
                    }
                },
                Carousel: {
                    sydney: bn,
                    berlin: wn,
                    london: vn,
                    barcelona: yn,
                    manila: bn
                },
                Panel: {
                    sydney: bn,
                    berlin: wn,
                    london: vn,
                    barcelona: yn,
                    manila: bn
                },
                Grid: {
                    sydney: fn,
                    "new-york": gn,
                    tokyo: mn,
                    manila: fn
                },
                GridCarousel: {
                    sydney: fn,
                    "new-york": gn,
                    tokyo: mn,
                    manila: fn
                },
                List: {
                    sydney: function(t) {
                        const e = t.bgColor
                          , o = t.textColor
                          , r = t.linkColor
                          , n = t.borderColor
                          , s = t.widgetBgColor
                          , i = t.iconColor;
                        return {
                            config: {},
                            styles: {
                                loadMore: {
                                    color: o,
                                    backgroundColor: e,
                                    borderColor: n
                                },
                                cssRules: {
                                    ".crt-list-post .crt-post-content": {
                                        backgroundColor: e
                                    },
                                    ".crt-list-post .crt-post-text, .crt-list-post  .crt-post-text, .crt-list-post .crt-post-title": {
                                        color: o
                                    },
                                    ".crt-list-post .crt-post-text p a, .crt-list-post .crt-list-post-text-wrap a": {
                                        color: r
                                    },
                                    ".crt-list-post .crt-social-icon i": {
                                        color: i
                                    },
                                    ".crt-list-post .crt-social-icon svg": {
                                        color: i
                                    },
                                    ".crt-list-post, .crt-post": {
                                        borderRadius: "1px",
                                        borderColor: n
                                    },
                                    ".crt-widget": {
                                        backgroundColor: s
                                    },
                                    ".crt-list-post .crt-post-fullname a": {
                                        color: r
                                    },
                                    ".crt-list-post .crt-post-footer .crt-post-share .crt-share-button svg": {
                                        color: i
                                    },
                                    ".crt-list-post .crt-post-footer .crt-post-username a": {
                                        color: r
                                    },
                                    ".crt-list-post .crt-post-footer .crt-post-date .crt-post-date-link": {
                                        color: o
                                    },
                                    ".crt-widget *:focus": {
                                        outlineColor: t.tabIndexColor
                                    },
                                    ".crt-popup-manager *:focus": {
                                        outlineColor: t.tabIndexColor
                                    }
                                },
                                postIconWithBorder: {
                                    color: i,
                                    borderColor: i
                                }
                            }
                        }
                    }
                },
                Mosaic: {
                    sydney: function(t) {
                        const e = t.bgColor
                          , o = t.textColor
                          , r = t.linkColor
                          , n = t.borderColor
                          , s = t.iconColor;
                        return {
                            config: {
                                post: {
                                    template: "post-mosaic"
                                }
                            },
                            styles: {
                                widget: {
                                    backgroundColor: t.widgetBgColor
                                },
                                post: {},
                                postContent: {
                                    backgroundColor: e,
                                    color: o
                                },
                                postText: {
                                    color: o
                                },
                                postTextLink: {
                                    color: r
                                },
                                postHover: {
                                    backgroundColor: e,
                                    color: o,
                                    borderColor: n
                                },
                                postHoverLink: {
                                    color: r
                                },
                                postIcon: {
                                    color: s
                                },
                                postFooter: {
                                    backgroundColor: e,
                                    borderTopColor: n
                                },
                                postIconWithBorder: {
                                    color: s,
                                    borderColor: s
                                },
                                postHoverGradient: {
                                    background: `linear-gradient(${e}00, ${e}FF)`
                                },
                                postBorder: {
                                    borderColor: n
                                },
                                loadMore: {
                                    color: o,
                                    backgroundColor: e,
                                    borderColor: n
                                },
                                postDate: {
                                    color: o
                                },
                                cssRules: {
                                    ".crt-widget *:focus": {
                                        outlineColor: t.tabIndexColor
                                    },
                                    ".crt-popup-manager *:focus": {
                                        outlineColor: t.tabIndexColor
                                    }
                                }
                            }
                        }
                    },
                    manila: bn
                },
                Tetris: {
                    sydney: function(t) {
                        const e = t.bgColor
                          , o = t.textColor
                          , r = t.linkColor
                          , n = t.borderColor
                          , s = t.widgetBgColor
                          , i = t.iconColor;
                        return {
                            config: {
                                post: {
                                    template: "post-tetris"
                                }
                            },
                            styles: {
                                widget: {
                                    backgroundColor: s
                                },
                                post: {
                                    backgroundColor: e,
                                    borderColor: n,
                                    borderWidth: "1px",
                                    color: o
                                },
                                postBorder: {
                                    borderColor: n,
                                    borderWidth: "1px",
                                    borderStyle: "solid"
                                },
                                postContent: {
                                    backgroundColor: e,
                                    color: o
                                },
                                postText: {
                                    color: o
                                },
                                postShareIcons: {
                                    color: i
                                },
                                postTextLink: {
                                    color: r
                                },
                                postHover: {
                                    backgroundColor: e,
                                    color: o
                                },
                                postUsername: {
                                    color: r
                                },
                                postHoverLink: {
                                    color: r
                                },
                                postIcon: {
                                    color: i
                                },
                                postFooter: {
                                    background: `linear-gradient(${e}00, ${e}FF)`
                                },
                                postIconWithBorder: {
                                    color: i,
                                    borderColor: i
                                },
                                loadMore: {
                                    color: o,
                                    backgroundColor: e,
                                    borderColor: n
                                },
                                postDate: {
                                    color: o
                                },
                                cssRules: {
                                    ".crt-widget *:focus": {
                                        outlineColor: t.tabIndexColor
                                    },
                                    ".crt-popup-manager *:focus": {
                                        outlineColor: t.tabIndexColor
                                    }
                                }
                            }
                        }
                    }
                },
                Wall: {
                    sydney: bn
                },
                Select: {
                    sydney: function(t) {
                        const e = t.bgColor
                          , o = t.textColor
                          , r = t.iconColor
                          , n = t.linkColor
                          , s = t.borderColor;
                        return {
                            config: {},
                            styles: {
                                widget: {
                                    backgroundColor: t.widgetBgColor
                                },
                                post: {
                                    backgroundColor: e,
                                    borderColor: s,
                                    borderWidth: "1px",
                                    color: o
                                },
                                postFooter: {
                                    background: `linear-gradient(${e}00, ${e}FF)`
                                },
                                postImages: {
                                    borderColor: s,
                                    borderWidth: "1px",
                                    borderStyle: "solid"
                                },
                                postText: {
                                    color: o
                                },
                                postTextLink: {
                                    color: n
                                },
                                postName: {
                                    color: o,
                                    textDecoration: "none"
                                },
                                postUsername: {
                                    color: n
                                },
                                postIcon: {
                                    color: r
                                },
                                postComments: {
                                    color: o
                                },
                                postShareIcons: {
                                    color: r
                                },
                                postIconWithBorder: {
                                    color: r,
                                    borderColor: r
                                },
                                postDate: {
                                    color: o
                                },
                                loadMore: {
                                    color: o,
                                    backgroundColor: e,
                                    borderColor: s
                                },
                                cssRules: {
                                    ".crt-post .crt-post-border": {
                                        borderColor: s
                                    },
                                    ".crt-widget *:focus": {
                                        outlineColor: t.tabIndexColor
                                    },
                                    ".crt-popup-manager *:focus": {
                                        outlineColor: t.tabIndexColor
                                    }
                                }
                            }
                        }
                    }
                },
                Stack: {
                    sydney: bn
                },
                CoverFlow: {
                    sydney: bn
                },
                Stagger: {
                    sydney: function(t) {
                        const e = t.bgColor
                          , o = t.textColor
                          , r = t.linkColor
                          , n = t.borderColor
                          , s = t.widgetBgColor
                          , i = t.iconColor;
                        return {
                            config: {
                                post: {
                                    template: "post-stagger"
                                }
                            },
                            styles: {
                                widget: {
                                    backgroundColor: s
                                },
                                post: {
                                    backgroundColor: e,
                                    borderColor: n,
                                    borderWidth: "1px",
                                    color: o
                                },
                                postBorder: {
                                    borderColor: n,
                                    borderWidth: "1px",
                                    borderStyle: "solid"
                                },
                                postContent: {
                                    backgroundColor: e,
                                    color: o
                                },
                                postText: {
                                    color: o
                                },
                                postShareIcons: {
                                    color: i
                                },
                                postTextLink: {
                                    color: r
                                },
                                postHover: {
                                    backgroundColor: e,
                                    color: o
                                },
                                postUsername: {
                                    color: r
                                },
                                postHoverLink: {
                                    color: r
                                },
                                postIcon: {
                                    color: i
                                },
                                postFooter: {
                                    background: `linear-gradient(${e}00, ${e}FF)`
                                },
                                postIconWithBorder: {
                                    color: i,
                                    borderColor: i
                                },
                                loadMore: {
                                    color: o,
                                    backgroundColor: e,
                                    borderColor: n
                                },
                                postDate: {
                                    color: t.dateColor
                                },
                                cssRules: {
                                    ".crt-widget *:focus": {
                                        outlineColor: t.tabIndexColor
                                    },
                                    ".crt-popup-manager *:focus": {
                                        outlineColor: t.tabIndexColor
                                    }
                                }
                            }
                        }
                    }
                },
                Layers: {
                    sydney: bn
                },
                Timeline: {
                    sydney: function(t) {
                        const e = t.bgColor
                          , o = t.textColor
                          , r = t.borderColor;
                        return {
                            config: {
                                post: {
                                    template: "post-timeline"
                                }
                            },
                            styles: {
                                widget: {
                                    backgroundColor: t.widgetBgColor
                                },
                                postScrollbarTrack: {
                                    backgroundColor: e,
                                    background: `linear-gradient(90deg,\n            ${e} 20px,\n            transparent 0%\n          ),\n          linear-gradient(90deg,\n            transparent calc(100% - 20px),\n            ${e} 20px\n          ),\n          linear-gradient(180deg,\n            ${e} 26px,\n            transparent 26px\n          ),\n          linear-gradient(180deg,\n            transparent 34px,\n            ${e} 26px\n          ),\n          repeating-linear-gradient(\n            to right,\n            #8B8E9F,\n            #8B8E9F 1px,\n            ${e} 2px,\n            ${e} 8px\n        )`
                                },
                                postBorder: {
                                    borderColor: r,
                                    borderWidth: "1px",
                                    borderStyle: "solid"
                                },
                                postText: {
                                    color: o
                                },
                                postUsername: {
                                    color: o
                                },
                                cssRules: {
                                    ".crt-widget *:focus": {
                                        outlineColor: t.tabIndexColor
                                    },
                                    ".crt-popup-manager *:focus": {
                                        outlineColor: t.tabIndexColor
                                    }
                                }
                            }
                        }
                    }
                }
            },
            widgetDefaultColors: {
                Tetris: {
                    widgetBgColor: "transparent",
                    bgColor: "#FFFFFF",
                    borderColor: "#EAEAEA",
                    iconColor: "#1E1E23",
                    textColor: "#222222",
                    linkColor: "#999999",
                    dateColor: "#8B8E9F",
                    tabIndexColor: "#cccccc"
                },
                Stack: {
                    widgetBgColor: "transparent",
                    bgColor: "#F4F4F4",
                    borderColor: "transparent",
                    iconColor: "#1E1E23",
                    textColor: "#222222",
                    linkColor: "#999999",
                    dateColor: "#1E1E23",
                    tabIndexColor: "#cccccc"
                },
                CoverFlow: {
                    widgetBgColor: "transparent",
                    bgColor: "#F4F4F4",
                    borderColor: "transparent",
                    iconColor: "#F4F4F4",
                    textColor: "#F4F4F4",
                    linkColor: "#999999",
                    dateColor: "#1E1E23",
                    tabIndexColor: "#cccccc"
                },
                Stagger: {
                    widgetBgColor: "transparent",
                    bgColor: "#E9EBF0",
                    borderColor: "transparent",
                    iconColor: "#1E1E23",
                    textColor: "#222222",
                    linkColor: "#999999",
                    dateColor: "#8B8E9F",
                    tabIndexColor: "#cccccc"
                },
                Timeline: {
                    widgetBgColor: "transparent",
                    bgColor: "#f4f4f6",
                    borderColor: "white",
                    iconColor: "#1E1E23",
                    textColor: "#ffffff",
                    linkColor: "transparent",
                    dateColor: "transparent",
                    tabIndexColor: "#cccccc"
                }
            }
        }
          , kn = Pn;
        var Sn, An;
        !function(t) {
            t.WATER_FALL = "Waterfall",
            t.CAROUSEL = "Carousel",
            t.PANEL = "Panel",
            t.GRID = "Grid",
            t.GRID_CAROUSEL = "GridCarousel",
            t.LIST = "List",
            t.MOSAIC = "Mosaic",
            t.TETRIS = "Tetris",
            t.WALL = "Wall",
            t.SELECT = "Select",
            t.STACK = "Stack",
            t.COVER_FLOW = "CoverFlow",
            t.STAGGER = "Stagger",
            t.LAYERS = "Layers",
            t.TIMELINE = "Timeline"
        }(Sn || (Sn = {})),
        function(t) {
            t.SYDNEY = "sydney",
            t.BERLIN = "berlin",
            t.LONDON = "london",
            t.TOKYO = "tokyo",
            t.NEW_YORK = "new-york",
            t.BARCELONA = "barcelona"
        }(An || (An = {}));
        const On = /A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2D/.source
          , jn = /0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19/.source
          , Fn = /_\u200c\u200d\ua67e\u05be\u05f3\u05f4\uff5e\u301c\u309b\u309c\u30a0\u30fb\u3003\u0f0b\u0f0c\u00b7/.source
          , En = /\.-/.source
          , Dn = {
            hashSigns: /[#＃]/,
            hashtagAlpha: new RegExp("[" + On + "]"),
            hashtagAlphaNumeric: new RegExp("[" + On + jn + Fn + En + "]"),
            hashtagBoundary: new RegExp("(?:^|$|[^&" + On + jn + Fn + "])")
        };
        function Tn(t, e="") {
            return "string" != typeof t && (t.global && e.indexOf("g") < 0 && (e += "g"),
            t.ignoreCase && e.indexOf("i") < 0 && (e += "i"),
            t.multiline && e.indexOf("m") < 0 && (e += "m"),
            t = t.source),
            new RegExp(t.replace(/#\{(\w+)\}/g, (function(t, e) {
                let o = Dn[e] || "";
                return "string" != typeof o && (o = o.source),
                o
            }
            )),e)
        }
        Dn.endHashtagMatch = Tn(/^(?:#{hashSigns}|:\/\/)/),
        Dn.validHashtag = Tn(/[#]+(#{hashtagAlphaNumeric}*)/gi),
        Dn.excludeInsideLinks = Tn(/(<a\s.*?>.*?<\/a>)|([#]+(#{hashtagAlphaNumeric}*))/gi);
        const Nn = {
            camelize: t=>t.replace(/(?:^|[-_])(\w)/g, (function(t, e) {
                return e ? e.toUpperCase() : ""
            }
            )),
            camelToDash: t=>t.replace(/([A-Z])/g, (function(t, e, o) {
                return (o > 0 ? "-" : "") + t.toLowerCase()
            }
            )),
            replaceHashtag: (t,e)=>t = t.replace(Dn.excludeInsideLinks, (function(t, o, r) {
                return o || e(r)
            }
            )),
            twitterLinks: t=>(t = t.replace(/[@]+[A-Za-z0-9-_]+/g, (function(t) {
                const e = t.replace("@", "");
                return Nn.url("https://twitter.com/" + e, t)
            }
            )),
            t = Nn.replaceHashtag(t, (t=>{
                const e = t.replace("#", "%23");
                return Nn.url("https://twitter.com/search?q=" + e, t)
            }
            )),
            t),
            instagramLinks: t=>(t = t.replace(/[@]+[A-Za-z0-9-_\.]+/g, (function(t) {
                const e = t.replace("@", "");
                return Nn.url("https://www.instagram.com/" + e + "/", t)
            }
            )),
            t = Nn.replaceHashtag(t, (t=>{
                const e = t.replace("#", "");
                return Nn.url("https://www.instagram.com/explore/tags/" + e + "/", t)
            }
            )),
            t),
            facebookLinks: t=>(t = t.replace(/[@]+[A-Za-z0-9-_]+/g, (function(t) {
                const e = t.replace("@", "");
                return Nn.url("https://www.facebook.com/" + e + "/", t)
            }
            )),
            t = Nn.replaceHashtag(t, (t=>{
                const e = t.replace("#", "%23");
                return Nn.url("https://www.facebook.com/search/top/?q=" + e, t)
            }
            )),
            t),
            removeScripts: (t,e="")=>t = t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, (function() {
                return e
            }
            )),
            linksToHref: t=>t = t.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+[A-Za-z0-9-_:%&~\?\/=#]+/g, (function(t) {
                return Nn.url(t)
            }
            )),
            url: (t,e)=>'<a href="' + t + '" target="_blank" rel="noopener">' + (e = e || t) + "</a>",
            forceHttps: t=>t ? t.replace("http://", "https://") : t,
            youtubeVideoId(t) {
                const e = t.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/);
                if (e && 11 === e[7].length)
                    return e[7];
                {
                    const e = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/))([^#\&\?]*).*/
                      , o = t.match(e);
                    if (o && 11 === o[6].length)
                        return o[6]
                }
                return !1
            },
            vimeoVideoId(t) {
                const e = t.match(/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/);
                return !!(e && e.length >= 2) && e[1]
            },
            filterHtml(t) {
                try {
                    const e = document.createElement("div");
                    e.innerHTML = t;
                    return e.textContent || e.innerText || ""
                } catch (e) {
                    return t
                }
            },
            isHtml: t=>0 === t.trim().indexOf("<"),
            nl2br: function(t) {
                return t = (t = t.trim()).replace(/(?:\r\n|\r|\n)/g, "<br />")
            },
            replaceAll: (t,e,o)=>t.split(e).join(o)
        }
          , Ln = Nn;
        function Bn(t) {
            return void 0 !== t.current
        }
        function In(t) {
            return void 0 !== t.item
        }
        function Mn(t) {
            return Bn(t) ? t.current || void 0 : In(t) ? t.length > 0 ? t.item(0) : void 0 : t
        }
        function qn(t, e, o) {
            const r = Mn(t);
            if (r) {
                const t = r.getAttribute("data-" + e);
                if (t)
                    return t
            }
            return o
        }
        function Wn(t) {
            const e = Mn(t);
            return e && e.textContent ? e.textContent : ""
        }
        const Hn = ["width", "height"];
        function Rn(t, e, o, r, n) {
            return new Promise((s=>{
                const i = n / 1e3
                  , a = Mn(t);
                if (a) {
                    const t = function(t, e) {
                        return -1 !== Hn.indexOf(t) ? "px" : ""
                    }(e);
                    a.style.setProperty(e, o + t),
                    a.style.transition = `${e} ${i}s linear`,
                    a.style.setProperty(e, r + t),
                    window.setTimeout((()=>{
                        a.style.transition = "",
                        a.style.setProperty(e, r + t),
                        s()
                    }
                    ), n + 10)
                } else
                    console.log("Could not find element ")
            }
            ))
        }
        function zn(t, e) {
            const o = Mn(t);
            o && Object.keys(e).forEach((t=>{
                o.style.setProperty(t, e[t])
            }
            ))
        }
        function Un(t, e) {
            const o = Mn(t);
            return e ? (o && (o.style.width = `${e}px`),
            e) : o ? o.clientWidth || o.offsetWidth : 0
        }
        function $n(t, e) {
            const o = Mn(t);
            return e ? (o && (o.style.height = `${e}px`),
            e) : o ? o.clientHeight : 0
        }
        function Vn(t) {
            const e = Mn(t);
            return e ? e.offsetHeight : 0
        }
        function Gn(t) {
            const e = Mn(t);
            if (e) {
                const t = window.getComputedStyle(e);
                return parseFloat(t.borderTop) + parseFloat(t.borderBottom)
            }
            return 0
        }
        function Kn(t, e) {
            const o = Mn(t);
            o && o.classList.contains(e) && o.classList.remove(e)
        }
        function Yn(t, e) {
            const o = Mn(t);
            o && (o.classList.contains(e) || o.classList.add(e))
        }
        function Zn(t, e) {
            const o = Mn(t);
            return !!o && o.classList.contains(e)
        }
        function Xn(t) {
            return e=>{
                e.preventDefault(),
                e.cancelBubble = !0,
                t(e)
            }
        }
        function Qn(t) {
            if ("string" == typeof t) {
                let e;
                if (0 === t.indexOf("[data-")) {
                    const o = document.querySelectorAll(t);
                    o.length > 0 && (e = o[0])
                } else if (0 === t.indexOf("#")) {
                    const o = t.replace(/#/, "");
                    e = document.getElementById(o)
                }
                return e || void 0
            }
            return Bn(t) ? t.current || void 0 : In(t) ? t.length > 0 ? t.item(0) : void 0 : t
        }
        const Jn = [];
        function ts(t) {
            Jn.push(t)
        }
        function es(t) {
            return {
                debug(...e) {
                    for (const o of Jn)
                        o.debug(t, ...e)
                },
                log(...e) {
                    for (const o of Jn)
                        o.log(t, ...e)
                },
                info(...e) {
                    for (const o of Jn)
                        o.info(t, ...e)
                },
                warn(...e) {
                    for (const o of Jn)
                        o.warn(t, ...e)
                },
                error(...e) {
                    for (const o of Jn)
                        o.error(t, ...e)
                }
            }
        }
        es("common");
        let os = 0;
        const rs = es("HtmlUtils")
          , ns = {
            checkContainer: t=>(rs.log("checkContainer: " + t),
            !!Qn(t) || (rs.error("Curator could not find the element " + t + ". Please ensure this element exists in your HTML code. Exiting."),
            !1)),
            checkPowered(t) {
                rs.log("checkPowered");
                return function(t) {
                    const e = Mn(t);
                    return e && e.innerHTML ? e.innerHTML : ""
                }(t).indexOf("Curator") > 0 || (window.alert("Container is missing Powered by Curator"),
                !1)
            },
            addCSSRule(t, e, o, r=0) {
                "insertRule"in t ? t.insertRule(e + "{" + o + "}", r) : "addRule"in t && t.addRule(e, o)
            },
            deleteCSSRules(t) {
                if (t.cssRules)
                    for (let e = t.cssRules.length - 1; e > -1; e--)
                        t.deleteRule(e);
                else
                    for (let e = 0; e < t.rules.length; e++)
                        t.removeRule(e)
            },
            createSheet() {
                const t = document.createElement("style");
                if (t.setAttribute("type", "text/css"),
                t.setAttribute("nonce", "curator-feed"),
                t.setAttribute("data-sheet-num", os + ""),
                t.appendChild(document.createTextNode("")),
                document.head.appendChild(t),
                os++,
                !t.sheet)
                    throw new Error("BaseWidget - unable to create stylesheet");
                return t.sheet
            },
            isTouch() {
                let t = !1;
                try {
                    t = "ontouchstart"in document.documentElement
                } catch (t) {}
                return t
            }
        }
          , ss = ns
          , is = {
            FEED_LOADED: "feed:loaded",
            FEED_FAILED: "feed:failed",
            FILTER_CHANGED: "filter:changed",
            POSTS_LOADED: "posts:loaded",
            POSTS_FAILED: "posts:failed",
            POSTS_RENDERED: "posts:rendered",
            POSTS_COL_RENDERED: "posts:colRendered",
            POSTS_FETCHED: "posts:fetched",
            AD_CREATED: "ad:created",
            POST_CREATED: "post:created",
            POST_CLICK: "post:click",
            POST_CLICK_READ_MORE: "post:clickReadMore",
            POST_IMAGE_LOADED: "post:imageLoaded",
            POST_IMAGE_FAILED: "post:imageFailed",
            POST_LAYOUT_CHANGED: "post:layoutChanged",
            POST_CLOSED: "post:postClosed",
            CAROUSEL_CHANGED: "carousel:changed",
            GRID_HEIGHT_CHANGED: "grid:heightChanged",
            HAS_INSTAGRAM_EMBED: "feed:hasInstagramEmbed",
            HAS_FACEBOOK_EMBED: "feed:hasFacebookEmbed",
            PANE_HEIGHT_CHANGED: "pane:heightChanged",
            WIDGET_RESIZE: "widget:resize",
            WIDGET_VISIBLE: "widget:visible",
            ACCOUNT_NEEDS_ATTENTION: "account:needsAttention"
        };
        var as = 0;
        function cs(t, e, o, r, n, s) {
            var i, a, c = {};
            for (a in e)
                "ref" == a ? i = e[a] : c[a] = e[a];
            var l = {
                type: t,
                props: c,
                key: o,
                ref: i,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                __h: null,
                constructor: void 0,
                __v: --as,
                __source: n,
                __self: s
            };
            if ("function" == typeof t && (i = t.defaultProps))
                for (a in i)
                    void 0 === c[a] && (c[a] = i[a]);
            return b.vnode && b.vnode(l),
            l
        }
        const ls = function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }
          , us = function(t) {
            return "object" == typeof t && void 0 !== t
        }
          , ds = function(t) {
            return "object" == typeof t && void 0 !== t
        }
          , hs = {
            getTranslationFunction: function(t, e) {
                const o = (e = ds(e) ? e : {}).debug
                  , r = e.namespaceSplitter || "::";
                function n(t, e) {
                    return r = t,
                    "[object String]" === Object.prototype.toString.call(r) ? t.replace(/\{(\w*)\}/g, (function(t, r) {
                        return Object.prototype.hasOwnProperty.call(e, r) ? Object.prototype.hasOwnProperty.call(e, r) ? e[r] : r : (o && console.log('Could not find replacement "' + r + '" in provided replacements object:', e),
                        "{" + r + "}")
                    }
                    )) : t;
                    var r
                }
                return function(e, s, i) {
                    const a = us(s) ? s : us(i) ? i : {}
                      , c = ls(s) ? s : ls(i) ? i : void 0;
                    let l = function(e) {
                        if (t[e])
                            return t[e];
                        const o = e.split(r)
                          , n = o[0]
                          , s = o[1]
                          , i = t[n] ?? void 0;
                        return us(i) ? i[s] ?? void 0 : void 0
                    }(e);
                    return void 0 !== c && void 0 === a?.n && (a.n = a.n ? a.n : `${c}`,
                    l = function(t, e, r) {
                        if (ds(t)) {
                            const n = Object.keys(t);
                            let s;
                            if (0 === n.length)
                                return void (o && console.log("[Translation] No plural forms found."));
                            for (let t = 0; t < n.length; t++)
                                0 === n[t].indexOf("gt") && (s = parseInt(n[t].replace("gt", ""), 10));
                            t[e] ? t = t[e] : s && e > s ? t = t["gt" + s] : t.n ? t = t.n : r ? t = r : (o && console.log('[Translation] No plural forms found for count:"' + e + '" in', t),
                            t = t[Object.keys(t).reverse()[0]])
                        }
                        return t
                    }(l, c, `${c}`)),
                    l = n(l, a),
                    void 0 === l && (l = o ? "@@" + e + "@@" : e,
                    o && console.log('Translation for "' + e + '" not found.')),
                    l
                }
            }
        }
          , ps = hs
          , fs = {}
          , gs = "\nid,en,da,de,it,nl,es,fr,po,ru,sl,fi,pl,ar,zh,jp,pt-br,kr,th,hr,tr,in,vi,nor\nload-more,Load more,Hent mere,Mehr anzeigen,Di più,Laad meer,Cargar más,Voir plus,Carregar Mais,Загрузить больше,Prikaži več,Lataa lisää,Zobacz Więcej,تحميل المزيد,加载更多,もっと見る,Carregar mais,더 보기,ดูทั้งหมด,Prikaži još,Daha fazla yükle,Lihat lagi,Tải thêm,Last inn mer\nminutes-ago.1,{n} minute ago,{n} minut siden,Vor einer Minute,Un minuto fa,{n} minuut geleden,Hace un minuto,Il y a {n} minute,Tem um minuto,Одну минуту назад,pred {n} minuto,{n} minuutti sitten,,قبل {n} من الدقائق,{n}分钟前,{n} 分前,há {n} minuto,{n} 분 전에,นาทีที่แล้ว,prije {n} minute,{n} dakika önce,{n} menit yang lalu,{n} phút trước,Et minutt siden\nminutes-ago.n,{n} minutes ago,{n} minutter siden,Vor {n} Minuten,{n} minuti fa,{n} minuten geleden,Hace {n} minutos,Il y a {n} minutes,Tem {n} minutos,{n} минут назад,pred {n} minutami,{n} minuuttia sitten,,قبل {n} من الدقائق,{n}分钟前,{n} 分前,há {n} minutos,{n} 분 전에,หลายนาทีที่แล้ว,prije {n} minuta,{n} dakika önce,{n} menit yang lalu,{n} phút trước,Minutter siden\nhours-ago.1,{n} hour ago,{n} time siden,Vor einer Stunde,Un'ora fa,{n} uur geleden,Hace una hora,Il y a {n} heure,Tem {n} hora,Один час назад,pred {n} uro,{n} tunti sitten,,قبل {n} من الساعات,{n}小时前,{n} 時間前,há {n} hora,{n} 시간 전에,ชั่วโมงที่แล้ว,prije {n} sat,{n} saat önce,{n} jam yang lalu,{n} giờ trước,En time siden\nhours-ago.n,{n} hours ago,{n} timer siden,Vor {n} Stunden,{n} ore fa,{n} uren geleden,Hace {n} horas,Il y a {n} heures,Tem {n} horas,{n} часов назад,pred {n} urami,{n} tuntia sitten,,قبل {n} من الساعات,{n}小时前,{n} 時間前,há {n} horas,{n} 시간 전에,หลายชั่วโมงที่แล้ว,prije {n} sati,{n} saat önce,{n} jam yang lalu,{n} giờ trước,Timer siden\ndays-ago.1,{n} day ago,{n} dag siden,Vor einem Tag,Un giorno fa,{n} dag geleden,Hace un día,Il y a {n} jour,Faz um dia,Один день назад,pred {n} dnevom,{n} päivä sitten,,قبل{n} من الأيام,{n}天前,{n} 日前,há {n} dia,{n} 일 전에,วันก่อน,prije {n} dan,{n} gün önce,{n} hari yang lalu,{n} ngày trước,En dag siden\ndays-ago.n,{n} days ago,{n} dage siden,Vor {n} Tagen,{n} giorni fa,{n} dagen geleden,Hace {n} días,Il y a {n} jours,Fazem {n} dias,{n} дней назад,pred {n} dnevi,{n} päivää sitten,Dni Temu,قبل{n} من الأيام,{n}天前,{n} 日前,há {n} dias,{n} 일 전에,หลายวันก่อน,prije {n} dana,{n} gün önce,{n} hari yang lalu,{n} ngày trước,Dager siden\nweeks-ago.1,{n} week ago,{n} uge siden,Vor einer Woche,Una settimana fa,{n} week geleden,Hace una semana,Il y a {n} semaine,Faz uma semana,Одну неделю назад,pred {n} tednom,{n} viikko sitten,,قبل {n} من الأسابيع,{n}周前,{n} 週間前,há {n} semana,{n} 주 전에,สัปดาห์ก่อน,prije {n} tjedan,{n} hafta önce,{n} minggu yang lalu,{n} tuần trước,En uke siden\nweeks-ago.n,{n} weeks ago,{n} uger siden,Vor {n} Wochen,{n} settimane fa,{n} weken geleden,Hace {n} semanas,Il y a {n} semaines,Fazem {n} semanas,{n} недель назад,pred {n} tedni,{n} viikkoa sitten,,قبل {n} من الأسابيع,{n}周前,{n} 週間前,há {n} semanas,{n} 주 전에,หลายสัปดาห์ก่อน,prije {n} tjedana,{n} hafta önce,{n} minggu yang lalu,{n} tuần trước,Uker siden\nmonths-ago.1,{n} month ago,{n} måned siden,Vor einem Monat,Un mese fa,{n} maand geleden,Hace un mes,Il y a {n} mois,Tem um mês,Один месяц назад,pred {n} mesecem,{n} kuukausi sitten,,قبل {n} من الأشهر,{n}个月前,{n} ヶ月前,há {n} mês,{n} 달 전에,เดือนก่อน,prije {n} mjesec,{n} ay önce,{n} bulan yang lalu,{n} tháng trước,En måned siden\nmonths-ago.n,{n} months ago,{n} måneder siden,Vor {n} Monaten,{n} mesi,{n} maanden geleden,Hace {n} meses,Il y a {n} mois,Tem {n} meses,{n} месяцев назад,pred {n} meseci,{n} kuukautta sitten,,قبل {n} من الأشهر,{n}个月前,{n} ヶ月前,há {n} meses,{n} 달 전에,หลายเดือนก่อน,prije {n} mjeseci,{n} ay önce,{n} bulan yang lalu,{n} tháng trước,Måneder siden\nyesterday,Yesterday,I går,Gestern,Ieri,Gisteren,Ayer,Hier,Ontem,Вчера,Včeraj,Eilen,,البارحة,昨天,昨日,Ontem,어제,เมื่อวาน,Jučer,Dün,Kemarin,Hôm qua,I går\njust-now,Just now,Lige nu,Eben,Appena,Nu,Ahora,Il y a un instant,Agora,Только что,Pravkar,Juuri nyt,,للتو,刚刚,たった今,Agora,지금,เมื่อสักครู่,Upravo sad,Az önce,Baru saja,Vừa xong,Akkurat nå\nprevious,Previous,Forrige,Zurück,Indietro,Vorige,Anterior,Précédent,Anterior,Предыдущий,Prejšnji,Edellinen,,السابق,上一个,前の記事,Anterior,이전,ก่อนหน้า,Prethodni,Öncesi,Sebelumnya,Trước,Forrige\nnext,Next,Næste,Weiter,Più,Volgende,Siguiente,Suivant,Próximo,Следующий,Naslednji,Seuraava,,التالي,下一个,次の記事,Próximo,다음,ถัดไป,Slijedeći,Sonraki,Berikutnya,Tiếp theo,Neste\ncomments,Comments,Kommentarer,Kommentare,Commenti,Comments,Comentarios,Commentaires,Comentários,Комментарии,Komentarji,Kommenttia,,تعليقات,评论,コメント,Comentários,댓글,ความคิดเห็น,Komentari,Yorum,Komentar,Bình luận,Kommentarer\nlikes,Likes,Synes godt om,Gefällt mir,Mi piace,Likes,Me gusta,J'aime,Curtir,Лайки,Všečki,Tykkäystä,,إعجابات,赞,いいね,Curtidas,좋아요,ถูกใจ,Sviđa mi se,Beğeni,Suka,Thích,Liker\nread-more,Read more,Læs mere,Weiterlesen,Di più,Lees meer,Leer más,En savoir plus,Leia mais,Подробнее,Preberi več,Lue lisää,,قراءة المزيد,阅读更多,もっと読む,Leia mais,더 읽어보기,อ่านเพิ่มเติม,Nastavite čitati,Daha fazla oku,Selengkapnya,Đọc thêm,Les mer\nfilter,Filter,Filter,Filtern,filtrare,Filtreren,filtrar,filtrer,Filtro,фильтровать,Filter,Suodata,,تصفية,筛选,フィルター,Filtro,필터,ตัวกรอง,Filtriranje,Filtre,Filter,Lọc,Filter\nall,All,Alle,Alle,Tutti,Alle,Todas,Tout,Todos,все,Vsi,Kaikki,,الجميع,全部,全て,Tudo,전부,ทั้งหมด,Svi,Hepsi,Semua,Tất cả,Alle\ngo-to-original-post,Go to original post,Gå til originalt opslag,Original-Post ansehen,,Ga naar het bericht,Ver publicación original,Voir la publication,,,,Näytä alkuperäinen viesti,,العودة للمنشور الأصلي,查看原帖,元の記事へ,Ir para o conteúdo original,원래의 포스트로 가기,ไปยังโพสต์ต้นฉบับ,Idi na originalnu objavu,Orijinal gönderiye git,Ke artikel awal,Xem bài viết gốc,Gå til originalt innlegg\nfilter-source,Filter source,Filter kilde,Filtern,Filtrare,Filtreren,Filtrar,Filtrer,Filtro,фильтровать,Filter,Suodata lähde,,تصفية بحسب المصدر,过滤源,フィルターソース,Filtro por fonte,필터 소스,ตัวกรองแหล่งที่มา,Filtriraj izvor,Kaynağı filtrele,Filter sumber,Lọc theo nguồn,Filter kilde\nfilter-network,Filter network,Filter netværk,Filtern,Filtrare,Filtreren,Filtrar,Filtrer,Filtro,фильтровать,Filter,Suodata palvelu,,تصفية بحسب الشبكة,过滤网络,フィルターネットワーク,Filtro por rede social,필터 네트워크,ตัวกรองเครือข่าย,Filtriraj mrežu,Ağı filtrele,Filter jaringan,Lọc theo mạng,Filter nettverk\nno-posts,The feed contains no posts,Der er ingen opslag i dette feed,Der Feed enthält keine Posts,,,,,,,,Syötteessä ei ole sisältöä,,ليس في التلقيمة أي منشورات,此信息流不包含任何帖子,このフィードには投稿がありません,Este feed está vazio,피드에 포스트가 없습니다,ไม่มีโพสต์,Ovaj feed nema objava,Gönderi yok,Tidak ada post di feed ini,Không có bài viết trong nguồn cấp dữ liệu này,Denne feeden inneholder ingen innlegg\nalt-image-posted,Image posted by {userName} to {networkName},Billede slået op af {userName} på {networkName},,,,,,,,,{networkName} kuva lisätty käyttäjän {userName} toimesta,,نُشرت الصورة من طرف المستخدم {userName} إلى الشبكة {networkName},图片由{userName}发布到{networkName},,Imagem publicada por {userName} no {networkName},{userName} 가  {networkName} 로 포스팅한 이미지,รูปภาพโพสต์โดย (ชื่อผู้ใช้) ไปยัง (ชื่อเครือข่าย),Slika korisnika {userName} objavljena na {networkName},{userName} tarafından {networkName}'e fotoğraf yayımlandı,Gambar diposting oleh {userName} ke {networkName},Ảnh được {userName} đăng tải lên {networkName},Bilde postet av {userName} til {networkName}\nalt-profile-image,Profile image for {userName},Profilbillede for {userName},,,,,,,,,Käyttäjän {userName} profiilikuva,,صورة ملف المستخدم {userName},{userName}的资料图片,,Imagem de perfil para {userName},{userName} 의 프로필 이미지,รูปโปรไฟลล์สำหรับ (ชื่อผู้ใช้),Profilna slika korisnika {userName},Profil resmi {userName},Gambar profil untuk {userName},Ảnh đại diện của {userName},Profilbilde til {userName}\nalt-image-posted-no-username,Image posted to {networkName},,,,,,,,,,,,,,,,,,,,,,Bilde postet til {networkName}".split("\n");
        for (let t = gs.length - 1; t >= 0; t--)
            gs[t] || gs.splice(t, 1);
        const ms = gs[0].split(",");
        function bs(t, e, o) {
            const r = e.split(".");
            for (let e = 0; e < r.length; e++) {
                const n = r[e];
                t[n] || (t[n] = {}),
                e === r.length - 1 ? t[n] = o : t = t[n]
            }
        }
        for (let t = 1; t < gs.length; t++) {
            const e = gs[t].split(",");
            for (let t = 1; t < e.length; t++)
                bs(fs, ms[t] + "." + e[0], e[t])
        }
        const vs = fs
          , ws = {};
        let ys = "en";
        const Cs = {
            setLang(t) {
                ys = t
            },
            t(t, e=0, o) {
                ws[o = o || ys] || (vs[o] ? ws[o] = ps.getTranslationFunction(vs[o]) : (window.console.error("Unsupported language `" + o + "`"),
                ws[o] = ps.getTranslationFunction(vs.en))),
                t = (t = t.toLowerCase()).replace(" ", "-");
                const r = ws[o](t, e);
                return r !== t ? r : "en" !== o ? Cs.t(t, e, "en") : t
            }
        }
          , _s = Cs;
        const xs = {
            getQuery(t, e="") {
                const o = function(t) {
                    if (0 === t.length)
                        return {};
                    const e = {};
                    for (let o = 0; o < t.length; ++o) {
                        const r = t[o].split("=", 2);
                        e[r[0]] = 1 === r.length ? "" : decodeURIComponent(r[1].replace(/\+/g, " "))
                    }
                    return e
                }(window.location.search.substr(1).split("&"));
                return o[t] ? o[t] : e
            }
        }
          , Ps = xs
          , ks = {
            postUrl: t=>t.url && "" !== t.url && "''" !== t.url ? t.url : t.network_id + "" == "1" ? "https://twitter.com/" + t.user_screen_name + "/status/" + t.source_identifier : "",
            center(t, e, o) {
                const r = window.screen
                  , n = o || {}
                  , s = n.height || r.height
                  , i = n.width || r.height;
                return {
                    top: s ? (s - e) / 2 : 0,
                    left: i ? (i - t) / 2 : 0
                }
            },
            popup(t, e, o, r, n) {
                const s = this.center(o, r)
                  , i = "height=" + r + ",width=" + o + ",top=" + s.top + ",left=" + s.left + ",scrollbars=" + n + ",resizable";
                window.open(t, e, i)
            },
            tinyparser: (t,e)=>t.replace(/\{\{(.*?)\}\}/g, (function(t, o) {
                return e && void 0 !== e[o] ? encodeURIComponent(e[o]) : ""
            }
            )),
            debounce(t, e, o, r) {
                let n;
                function s() {
                    const s = r && !n;
                    window.clearTimeout(n),
                    n = window.setTimeout((function() {
                        r || t.apply(o)
                    }
                    ), e),
                    s && t.apply(o)
                }
                return s.cancel = function() {
                    void 0 !== n && window.clearTimeout(n),
                    n = void 0
                }
                ,
                s
            },
            uId: ()=>"_" + Math.random().toString(36).substr(2, 9)
        }
          , Ss = ks;
        const As = function(t) {
            return "symbol" == typeof t || Ce(t) && "[object Symbol]" == At(t)
        };
        var Os = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , js = /^\w*$/;
        const Fs = function(t, e) {
            if (Ae(t))
                return !1;
            var o = typeof t;
            return !("number" != o && "symbol" != o && "boolean" != o && null != t && !As(t)) || (js.test(t) || !Os.test(t) || null != e && t in Object(e))
        };
        function Es(t, e) {
            if ("function" != typeof t || null != e && "function" != typeof e)
                throw new TypeError("Expected a function");
            var o = function() {
                var r = arguments
                  , n = e ? e.apply(this, r) : r[0]
                  , s = o.cache;
                if (s.has(n))
                    return s.get(n);
                var i = t.apply(this, r);
                return o.cache = s.set(n, i) || s,
                i
            };
            return o.cache = new (Es.Cache || ue),
            o
        }
        Es.Cache = ue;
        const Ds = Es;
        var Ts = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , Ns = /\\(\\)?/g
          , Ls = function(t) {
            var e = Ds(t, (function(t) {
                return 500 === o.size && o.clear(),
                t
            }
            ))
              , o = e.cache;
            return e
        }((function(t) {
            var e = [];
            return 46 === t.charCodeAt(0) && e.push(""),
            t.replace(Ts, (function(t, o, r, n) {
                e.push(r ? n.replace(Ns, "$1") : o || t)
            }
            )),
            e
        }
        ));
        const Bs = Ls;
        const Is = function(t, e) {
            for (var o = -1, r = null == t ? 0 : t.length, n = Array(r); ++o < r; )
                n[o] = e(t[o], o, t);
            return n
        };
        var Ms = vt ? vt.prototype : void 0
          , qs = Ms ? Ms.toString : void 0;
        const Ws = function t(e) {
            if ("string" == typeof e)
                return e;
            if (Ae(e))
                return Is(e, t) + "";
            if (As(e))
                return qs ? qs.call(e) : "";
            var o = e + "";
            return "0" == o && 1 / e == -Infinity ? "-0" : o
        };
        const Hs = function(t) {
            return null == t ? "" : Ws(t)
        };
        const Rs = function(t, e) {
            return Ae(t) ? t : Fs(t, e) ? [t] : Bs(Hs(t))
        };
        const zs = function(t) {
            if ("string" == typeof t || As(t))
                return t;
            var e = t + "";
            return "0" == e && 1 / t == -Infinity ? "-0" : e
        };
        const Us = function(t, e) {
            for (var o = 0, r = (e = Rs(e, t)).length; null != t && o < r; )
                t = t[zs(e[o++])];
            return o && o == r ? t : void 0
        };
        const $s = function(t, e, o) {
            var r = null == t ? void 0 : Us(t, e);
            return void 0 === r ? o : r
        };
        const Vs = function(t, e, o, r) {
            if (!Ot(t))
                return t;
            for (var n = -1, s = (e = Rs(e, t)).length, i = s - 1, a = t; null != a && ++n < s; ) {
                var c = zs(e[n])
                  , l = o;
                if ("__proto__" === c || "constructor" === c || "prototype" === c)
                    return t;
                if (n != i) {
                    var u = a[c];
                    void 0 === (l = r ? r(u, c, a) : void 0) && (l = Ot(u) ? u : Ne(e[n + 1]) ? [] : {})
                }
                ve(a, c, l),
                a = a[c]
            }
            return t
        };
        const Gs = function(t, e, o) {
            return null == t ? t : Vs(t, e, o)
        };
        var Ks, Ys, Zs, Xs, Qs = 0, Js = [], ti = [], ei = b.__b, oi = b.__r, ri = b.diffed, ni = b.__c, si = b.unmount;
        function ii(t, e) {
            b.__h && b.__h(Ys, t, Qs || e),
            Qs = 0;
            var o = Ys.__H || (Ys.__H = {
                __: [],
                __h: []
            });
            return t >= o.__.length && o.__.push({
                __V: ti
            }),
            o.__[t]
        }
        function ai(t) {
            return Qs = 1,
            ci(wi, t)
        }
        function ci(t, e, o) {
            var r = ii(Ks++, 2);
            if (r.t = t,
            !r.__c && (r.__ = [o ? o(e) : wi(void 0, e), function(t) {
                var e = r.__N ? r.__N[0] : r.__[0]
                  , o = r.t(e, t);
                e !== o && (r.__N = [o, r.__[1]],
                r.__c.setState({}))
            }
            ],
            r.__c = Ys,
            !Ys.u)) {
                var n = function(t, e, o) {
                    if (!r.__c.__H)
                        return !0;
                    var n = r.__c.__H.__.filter((function(t) {
                        return t.__c
                    }
                    ));
                    if (n.every((function(t) {
                        return !t.__N
                    }
                    )))
                        return !s || s.call(this, t, e, o);
                    var i = !1;
                    return n.forEach((function(t) {
                        if (t.__N) {
                            var e = t.__[0];
                            t.__ = t.__N,
                            t.__N = void 0,
                            e !== t.__[0] && (i = !0)
                        }
                    }
                    )),
                    !(!i && r.__c.props === t) && (!s || s.call(this, t, e, o))
                };
                Ys.u = !0;
                var s = Ys.shouldComponentUpdate
                  , i = Ys.componentWillUpdate;
                Ys.componentWillUpdate = function(t, e, o) {
                    if (this.__e) {
                        var r = s;
                        s = void 0,
                        n(t, e, o),
                        s = r
                    }
                    i && i.call(this, t, e, o)
                }
                ,
                Ys.shouldComponentUpdate = n
            }
            return r.__N || r.__
        }
        function li(t, e) {
            var o = ii(Ks++, 3);
            !b.__s && vi(o.__H, e) && (o.__ = t,
            o.i = e,
            Ys.__H.__h.push(o))
        }
        function ui(t) {
            return Qs = 5,
            di((function() {
                return {
                    current: t
                }
            }
            ), [])
        }
        function di(t, e) {
            var o = ii(Ks++, 7);
            return vi(o.__H, e) ? (o.__V = t(),
            o.i = e,
            o.__h = t,
            o.__V) : o.__
        }
        function hi(t) {
            var e = Ys.context[t.__c]
              , o = ii(Ks++, 9);
            return o.c = t,
            e ? (null == o.__ && (o.__ = !0,
            e.sub(Ys)),
            e.props.value) : t.__
        }
        function pi() {
            for (var t; t = Js.shift(); )
                if (t.__P && t.__H)
                    try {
                        t.__H.__h.forEach(mi),
                        t.__H.__h.forEach(bi),
                        t.__H.__h = []
                    } catch (e) {
                        t.__H.__h = [],
                        b.__e(e, t.__v)
                    }
        }
        b.__b = function(t) {
            Ys = null,
            ei && ei(t)
        }
        ,
        b.__r = function(t) {
            oi && oi(t),
            Ks = 0;
            var e = (Ys = t.__c).__H;
            e && (Zs === Ys ? (e.__h = [],
            Ys.__h = [],
            e.__.forEach((function(t) {
                t.__N && (t.__ = t.__N),
                t.__V = ti,
                t.__N = t.i = void 0
            }
            ))) : (e.__h.forEach(mi),
            e.__h.forEach(bi),
            e.__h = [],
            Ks = 0)),
            Zs = Ys
        }
        ,
        b.diffed = function(t) {
            ri && ri(t);
            var e = t.__c;
            e && e.__H && (e.__H.__h.length && (1 !== Js.push(e) && Xs === b.requestAnimationFrame || ((Xs = b.requestAnimationFrame) || gi)(pi)),
            e.__H.__.forEach((function(t) {
                t.i && (t.__H = t.i),
                t.__V !== ti && (t.__ = t.__V),
                t.i = void 0,
                t.__V = ti
            }
            ))),
            Zs = Ys = null
        }
        ,
        b.__c = function(t, e) {
            e.some((function(t) {
                try {
                    t.__h.forEach(mi),
                    t.__h = t.__h.filter((function(t) {
                        return !t.__ || bi(t)
                    }
                    ))
                } catch (o) {
                    e.some((function(t) {
                        t.__h && (t.__h = [])
                    }
                    )),
                    e = [],
                    b.__e(o, t.__v)
                }
            }
            )),
            ni && ni(t, e)
        }
        ,
        b.unmount = function(t) {
            si && si(t);
            var e, o = t.__c;
            o && o.__H && (o.__H.__.forEach((function(t) {
                try {
                    mi(t)
                } catch (t) {
                    e = t
                }
            }
            )),
            o.__H = void 0,
            e && b.__e(e, o.__v))
        }
        ;
        var fi = "function" == typeof requestAnimationFrame;
        function gi(t) {
            var e, o = function() {
                clearTimeout(r),
                fi && cancelAnimationFrame(e),
                setTimeout(t)
            }, r = setTimeout(o, 100);
            fi && (e = requestAnimationFrame(o))
        }
        function mi(t) {
            var e = Ys
              , o = t.__c;
            "function" == typeof o && (t.__c = void 0,
            o()),
            Ys = e
        }
        function bi(t) {
            var e = Ys;
            t.__c = t.__(),
            Ys = e
        }
        function vi(t, e) {
            return !t || t.length !== e.length || e.some((function(e, o) {
                return e !== t[o]
            }
            ))
        }
        function wi(t, e) {
            return "function" == typeof e ? e(t) : e
        }
        class yi {
            constructor(t, e) {
                Object.defineProperty(this, "config", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }),
                Object.defineProperty(this, "id", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                this.id = t,
                this.config = e
            }
            set(t, e) {
                Gs(this.config, t, e)
            }
            get(t="", e) {
                return "" === t ? vr(this.config) : $s(this.config, t, e)
            }
        }
        const Ci = {};
        const _i = {
            create: function(t, e) {
                return Ci[t] = new yi(t,e),
                Ci[t]
            },
            set: function(t, e, o) {
                Ci[t].get(e, o)
            },
            get: function(t, e="", o) {
                return Ci[t].get(e, o)
            },
            getConfig: function(t) {
                return Ci[t]
            }
        }
          , xi = _i
          , Pi = tt({})
          , ki = ()=>hi(Pi);
        const Si = class {
            constructor(t) {
                Object.defineProperty(this, "apiEndpoint", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                });
                const e = /(.+?):\/\/([0-9A-Za-z.:-]*)/.exec(t);
                if (!e)
                    throw Error("UriBuilder - is invalid format");
                this.apiEndpoint = e[1] + "://" + e[2]
            }
            build(t, e) {
                const o = Ss.tinyparser(t, e);
                return this.apiEndpoint + o
            }
        }
        ;
        function Ai(t, e, o) {
            t[e] = t[e] || o
        }
        const Oi = function(t, e) {
            const o = t.headers || {}
              , r = t.body
              , n = t.method || (r ? "POST" : "GET");
            let s = !1;
            const i = function(t) {
                if (t && window.XDomainRequest && !/MSIE 1/.test(window.navigator.userAgent))
                    return new window.XDomainRequest;
                if (window.XMLHttpRequest)
                    return new window.XMLHttpRequest
            }(t.cors);
            function a(t, o) {
                return function() {
                    s || (e(void 0 === i.status ? t : i.status, 0 === i.status ? "Error" : i.response || i.responseText || o, i),
                    s = !0)
                }
            }
            i.open(n, t.url, !0);
            const c = i.onload = a(200, "");
            i.onreadystatechange = function() {
                4 === i.readyState && c()
            }
            ,
            i.onerror = a(void 0, "Error"),
            i.ontimeout = a(void 0, "Timeout"),
            i.onabort = a(void 0, "Abort"),
            r && (Ai(o, "X-Requested-With", "XMLHttpRequest"),
            window.FormData && r instanceof window.FormData || Ai(o, "Content-Type", "application/x-www-form-urlencoded")),
            t.responseType && (i.responseType = t.responseType),
            t.withCredentials && (i.withCredentials = !0),
            t.timeout && (i.timeout = t.timeout),
            t.onprogress && (i.onprogress = t.onprogress);
            for (const t in o)
                i.setRequestHeader(t, o[t]);
            return i.send(r),
            i
        };
        function ji(t) {
            const e = Object.keys(t)
              , o = [];
            for (let r = 0; r < e.length; r++) {
                const n = e[r];
                o.push(n + "=" + encodeURIComponent(t[n]))
            }
            return "?" + o.join("&")
        }
        function Fi(t) {
            let e = window.location.protocol;
            const o = t.indexOf("://");
            return o && (t = t.substr(o + 3)),
            e = "https:" !== e && "http:" !== e ? "https:" : e,
            t = e + "//" + t
        }
        const Ei = {
            get: (t,e,o,r)=>(t = Fi(t),
            e && (t += ji(e)),
            Oi({
                url: t,
                cors: !0
            }, (function(t, e) {
                t ? o(JSON.parse(e), t) : r(t, e)
            }
            ))),
            post: (t,e,o,r)=>(t = Fi(t),
            Oi({
                url: t,
                cors: !0,
                body: e,
                method: "POST"
            }, (function(t, e) {
                t ? o(JSON.parse(e), t) : r(t, e)
            }
            ))),
            getPromise: (t,e,o={})=>new Promise((r=>{
                o.dontChangeProtocol || (t = Fi(t)),
                e && (t += ji(e)),
                Oi({
                    url: t,
                    cors: !0
                }, (function(t, e) {
                    if (t) {
                        const o = JSON.parse(e);
                        r({
                            success: !0,
                            data: o,
                            text: "",
                            statusCode: t
                        })
                    } else
                        r({
                            success: !1,
                            data: {},
                            text: e,
                            statusCode: t
                        })
                }
                ))
            }
            ))
        }
          , Di = Ei
          , Ti = es("Tracker");
        const Ni = class {
            constructor(t) {
                Object.defineProperty(this, "uriBuilder", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "urlFeedTack", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "config", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                this.config = t,
                this.uriBuilder = new Si(this.config.get("feed.apiEndpoint")),
                this.urlFeedTack = this.uriBuilder.build("/restricted/feeds/{{feedId}}/track", {
                    feedId: this.config.get("feed.id")
                }),
                this.urlFeedTack = this.uriBuilder.build("/restricted/feeds/{{feedId}}/track", {
                    feedId: this.config.get("feed.id")
                })
            }
            track(t) {
                Di.get(this.urlFeedTack, {
                    a: t
                }, (()=>{}
                ), ((t,e)=>{
                    Ti.log("Tracker->track fail"),
                    Ti.log(t),
                    Ti.log(e)
                }
                ))
            }
            trackPostAction(t, e) {
                const o = {
                    postId: t,
                    feedId: this.config.get("feed.id")
                }
                  , r = this.uriBuilder.build("/restricted/feeds/{{feedId}}/posts/{{postId}}/action", o);
                Di.get(r, {
                    action: e
                }, (()=>{}
                ), ((t,e)=>{
                    Ti.log("Tracker->track fail code: " + t),
                    Ti.log(e)
                }
                ))
            }
        }
        ;
        let Li = null;
        const Bi = {
            dateFromString(t) {
                const e = t.replace(/\D/g, " ").split(" ")
                  , o = +e[0];
                let r = +e[1];
                r--;
                const n = +e[2]
                  , s = +e[3]
                  , i = +e[4]
                  , a = +e[5];
                return new Date(Date.UTC(o, r, n, s, i, a))
            },
            dateAsDayMonthYear(t) {
                const e = new Date(parseInt(t, 10));
                let o = e.getDate() + ""
                  , r = e.getMonth() + 1 + "";
                const n = e.getFullYear() + "";
                o = 1 === o.length ? "0" + o : o,
                r = 1 === r.length ? "0" + r : r;
                return o + "/" + r + "/" + n
            },
            dateAsTimeArray(t) {
                const e = new Date(parseInt(t, 10));
                let o, r = e.getHours() + "", n = e.getMinutes() + "";
                e.getHours() >= 12 ? (o = "PM",
                e.getHours() > 12 && (r = e.getHours() - 12 + "")) : o = "AM",
                r = 1 === r.length ? "0" + r : r,
                n = 1 === n.length ? "0" + n : n;
                return [parseInt(r.charAt(0), 10), parseInt(r.charAt(1), 10), parseInt(n.charAt(0), 10), parseInt(n.charAt(1), 10), o]
            },
            fuzzyDate(t) {
                const e = Date.parse(t + " UTC")
                  , o = new Date
                  , r = Math.round((o.getTime() - e) / 1e3)
                  , n = 3600
                  , s = 86400
                  , i = 7 * s;
                let a;
                return a = r < 30 ? "Just now" : r < 60 ? r + " seconds ago" : r < 120 ? "a minute ago." : r < n ? Math.floor(r / 60) + " minutes ago" : 1 === Math.floor(r / n) ? "1 hour ago." : r < s ? Math.floor(r / n) + " hours ago" : r < 2 * s ? "Yesterday" : r < i ? "This week" : r < 2 * i ? "Last week" : r < 2592e3 ? "This month" : e + "",
                a
            },
            prettyDate(t) {
                const e = Bi.dateFromString(t)
                  , o = ((new Date).getTime() - e.getTime()) / 1e3
                  , r = ((new Date).getTime() - e.setHours(0, 0, 0, 0)) / 1e3
                  , n = Math.floor(r / 86400);
                if (isNaN(n) || n < 0 || n >= 31)
                    return function() {
                        if (null !== Li)
                            return Li;
                        Li = !1;
                        try {
                            (new Date).toLocaleDateString("i")
                        } catch (t) {
                            Li = "RangeError" === t.name
                        }
                        return Li
                    }() ? e.toLocaleDateString(void 0, {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    }) : this.shortDate(e);
                const s = Math.floor(o / 60)
                  , i = Math.floor(o / 3600)
                  , a = Math.floor(n / 7);
                return 1 === n && _s.t("yesterday") || 0 === n && (o < 60 && _s.t("just-now") || o < 3600 && _s.t("minutes ago", s) || o < 86400 && _s.t("hours ago", i)) || n < 7 && _s.t("days-ago", n) || n < 31 && _s.t("weeks ago", a)
            },
            shortDate: function(t) {
                const e = t.getFullYear()
                  , o = t.getMonth() + 1
                  , r = t.getDate()
                  , n = e.toString()
                  , s = ["-", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][o];
                return r.toString() + " " + s + " " + n
            }
        }
          , Ii = Bi;
        var Mi;
        function qi(t) {
            return "ad" !== t.type
        }
        function Wi(t) {
            return qi(t) ? `${t.id}` : t.slug
        }
        function Hi(t, e=0) {
            return _s.t(t, e)
        }
        function Ri(t) {
            if (!qi(t))
                return "";
            const e = t.network_id + "";
            if ("10" === e && t.url)
                return t.url;
            if (t.user_url && "" !== t.user_url)
                return t.user_url;
            if (t.originator_user_url && "" !== t.originator_user_url)
                return t.originator_user_url;
            if (t.userUrl && "" !== t.userUrl)
                return t.userUrl;
            if (t.user_screen_name) {
                if ("1" === e)
                    return "http://twitter.com/" + t.user_screen_name;
                if ("2" === e)
                    return "http://instagram.com/" + t.user_screen_name;
                if ("3" === e)
                    return "http://facebook.com/" + t.user_screen_name
            }
            return "#"
        }
        function zi(t, e, o="") {
            const r = o;
            if (!qi(t))
                return "";
            if (t.data && t.data.length > 0)
                for (const o of t.data)
                    if (o.name === e)
                        return o.value;
            return r
        }
        function Ui(t) {
            return "RSS" === t.network_name ? t.user_screen_name ? t.user_screen_name : "" : t.user_screen_name ? "@" + t.user_screen_name : ""
        }
        function $i(t) {
            const e = t.user_screen_name ? Hi("alt-image-posted", {
                userName: t.user_screen_name,
                networkName: Xi(t)
            }) : Hi("alt-image-posted-no-username", {
                networkName: Xi(t)
            });
            return t.text,
            e
        }
        function Vi(t) {
            if (!t)
                return "";
            const e = Ii.prettyDate(t);
            return e || ""
        }
        function Gi(t, e=!0) {
            let o = t.text;
            return e && (o = Ln.removeScripts(t.text)),
            t.is_html ? o : ("Twitter" === t.network_name ? (o = Ln.linksToHref(o),
            o = Ln.twitterLinks(o)) : "Instagram" === t.network_name ? (o = Ln.linksToHref(o),
            o = Ln.instagramLinks(o)) : "Facebook" === t.network_name ? (o = Ln.linksToHref(o),
            o = Ln.facebookLinks(o)) : o = Ln.linksToHref(o),
            Ln.nl2br(o))
        }
        function Ki(t) {
            return "RSS" === t.network_name ? zi(t, "title", "") : t.user_full_name
        }
        function Yi(t, e) {
            const o = [e];
            return t.image && o.push("crt-post-has-image"),
            t.text && o.push("crt-post-has-text"),
            qi(t) || t.video ? (qi(t) && !t.source_type && o.push("crt-post-has-no-source"),
            qi(t) && t.is_embed && o.push("crt-post-is-embed"),
            t.video && o.push("crt-post-has-video"),
            t.images && t.images.length > 1 && o.push("crt-has-image-carousel"),
            t.user_full_name || o.push("crt-no-user-full-name"),
            t.user_screen_name || o.push("crt-no-user-screen-name"),
            t.user_image && "https://cdn.curator.io/0.gif" !== t.user_image || o.push("crt-no-user-image")) : o.push("crt-ad"),
            o.push(`crt-post-${t.network_name.toLowerCase()}`),
            o
        }
        function Zi(t, e) {
            const o = [e];
            return t.image && o.push("crt-ad-has-image"),
            t.text && o.push("crt-ad-has-text"),
            "" === t.title && o.push("crt-ad-no-title"),
            t.video && o.push("crt-post-has-video"),
            o.push(`crt-ad-${t.slug}`),
            o
        }
        function Xi(t) {
            return t.network_name ? t.network_name.toLowerCase() : ""
        }
        function Qi(t) {
            return t.text ? "crt-post-has-text" : "crt-post-content-text-hidden crt-post-no-text"
        }
        !function(t) {
            t.Approved = "approved",
            t.NeedsApproval = "needs-approval",
            t.Rejected = "rejected",
            t.Trashed = "trash"
        }(Mi || (Mi = {}));
        const Ji = function(t) {
            return this.__data__.set(t, "__lodash_hash_undefined__"),
            this
        };
        const ta = function(t) {
            return this.__data__.has(t)
        };
        function ea(t) {
            var e = -1
              , o = null == t ? 0 : t.length;
            for (this.__data__ = new ue; ++e < o; )
                this.add(t[e])
        }
        ea.prototype.add = ea.prototype.push = Ji,
        ea.prototype.has = ta;
        const oa = ea;
        const ra = function(t, e) {
            for (var o = -1, r = null == t ? 0 : t.length; ++o < r; )
                if (e(t[o], o, t))
                    return !0;
            return !1
        };
        const na = function(t, e) {
            return t.has(e)
        };
        const sa = function(t, e, o, r, n, s) {
            var i = 1 & o
              , a = t.length
              , c = e.length;
            if (a != c && !(i && c > a))
                return !1;
            var l = s.get(t)
              , u = s.get(e);
            if (l && u)
                return l == e && u == t;
            var d = -1
              , h = !0
              , p = 2 & o ? new oa : void 0;
            for (s.set(t, e),
            s.set(e, t); ++d < a; ) {
                var f = t[d]
                  , g = e[d];
                if (r)
                    var m = i ? r(g, f, d, e, t, s) : r(f, g, d, t, e, s);
                if (void 0 !== m) {
                    if (m)
                        continue;
                    h = !1;
                    break
                }
                if (p) {
                    if (!ra(e, (function(t, e) {
                        if (!na(p, e) && (f === t || n(f, t, o, r, s)))
                            return p.push(e)
                    }
                    ))) {
                        h = !1;
                        break
                    }
                } else if (f !== g && !n(f, g, o, r, s)) {
                    h = !1;
                    break
                }
            }
            return s.delete(t),
            s.delete(e),
            h
        };
        const ia = function(t) {
            var e = -1
              , o = Array(t.size);
            return t.forEach((function(t, r) {
                o[++e] = [r, t]
            }
            )),
            o
        };
        const aa = function(t) {
            var e = -1
              , o = Array(t.size);
            return t.forEach((function(t) {
                o[++e] = t
            }
            )),
            o
        };
        var ca = vt ? vt.prototype : void 0
          , la = ca ? ca.valueOf : void 0;
        const ua = function(t, e, o, r, n, s, i) {
            switch (o) {
            case "[object DataView]":
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                    return !1;
                t = t.buffer,
                e = e.buffer;
            case "[object ArrayBuffer]":
                return !(t.byteLength != e.byteLength || !s(new Go(t), new Go(e)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
                return ot(+t, +e);
            case "[object Error]":
                return t.name == e.name && t.message == e.message;
            case "[object RegExp]":
            case "[object String]":
                return t == e + "";
            case "[object Map]":
                var a = ia;
            case "[object Set]":
                var c = 1 & r;
                if (a || (a = aa),
                t.size != e.size && !c)
                    return !1;
                var l = i.get(t);
                if (l)
                    return l == e;
                r |= 2,
                i.set(t, e);
                var u = sa(a(t), a(e), r, n, s, i);
                return i.delete(t),
                u;
            case "[object Symbol]":
                if (la)
                    return la.call(t) == la.call(e)
            }
            return !1
        };
        var da = Object.prototype.hasOwnProperty;
        const ha = function(t, e, o, r, n, s) {
            var i = 1 & o
              , a = Ao(t)
              , c = a.length;
            if (c != Ao(e).length && !i)
                return !1;
            for (var l = c; l--; ) {
                var u = a[l];
                if (!(i ? u in e : da.call(e, u)))
                    return !1
            }
            var d = s.get(t)
              , h = s.get(e);
            if (d && h)
                return d == e && h == t;
            var p = !0;
            s.set(t, e),
            s.set(e, t);
            for (var f = i; ++l < c; ) {
                var g = t[u = a[l]]
                  , m = e[u];
                if (r)
                    var b = i ? r(m, g, u, e, t, s) : r(g, m, u, t, e, s);
                if (!(void 0 === b ? g === m || n(g, m, o, r, s) : b)) {
                    p = !1;
                    break
                }
                f || (f = "constructor" == u)
            }
            if (p && !f) {
                var v = t.constructor
                  , w = e.constructor;
                v == w || !("constructor"in t) || !("constructor"in e) || "function" == typeof v && v instanceof v && "function" == typeof w && w instanceof w || (p = !1)
            }
            return s.delete(t),
            s.delete(e),
            p
        };
        var pa = "[object Arguments]"
          , fa = "[object Array]"
          , ga = "[object Object]"
          , ma = Object.prototype.hasOwnProperty;
        const ba = function(t, e, o, r, n, s) {
            var i = Ae(t)
              , a = Ae(e)
              , c = i ? fa : Uo(t)
              , l = a ? fa : Uo(e)
              , u = (c = c == pa ? ga : c) == ga
              , d = (l = l == pa ? ga : l) == ga
              , h = c == l;
            if (h && De(t)) {
                if (!De(e))
                    return !1;
                i = !0,
                u = !1
            }
            if (h && !u)
                return s || (s = new pe),
                i || Ue(t) ? sa(t, e, o, r, n, s) : ua(t, e, c, o, r, n, s);
            if (!(1 & o)) {
                var p = u && ma.call(t, "__wrapped__")
                  , f = d && ma.call(e, "__wrapped__");
                if (p || f) {
                    var g = p ? t.value() : t
                      , m = f ? e.value() : e;
                    return s || (s = new pe),
                    n(g, m, o, r, s)
                }
            }
            return !!h && (s || (s = new pe),
            ha(t, e, o, r, n, s))
        };
        const va = function t(e, o, r, n, s) {
            return e === o || (null == e || null == o || !Ce(e) && !Ce(o) ? e != e && o != o : ba(e, o, r, n, t, s))
        };
        const wa = function(t, e, o, r) {
            var n = o.length
              , s = n
              , i = !r;
            if (null == t)
                return !s;
            for (t = Object(t); n--; ) {
                var a = o[n];
                if (i && a[2] ? a[1] !== t[a[0]] : !(a[0]in t))
                    return !1
            }
            for (; ++n < s; ) {
                var c = (a = o[n])[0]
                  , l = t[c]
                  , u = a[1];
                if (i && a[2]) {
                    if (void 0 === l && !(c in t))
                        return !1
                } else {
                    var d = new pe;
                    if (r)
                        var h = r(l, u, c, t, e, d);
                    if (!(void 0 === h ? va(u, l, 3, r, d) : h))
                        return !1
                }
            }
            return !0
        };
        const ya = function(t) {
            return t == t && !Ot(t)
        };
        const Ca = function(t) {
            for (var e = to(t), o = e.length; o--; ) {
                var r = e[o]
                  , n = t[r];
                e[o] = [r, n, ya(n)]
            }
            return e
        };
        const _a = function(t, e) {
            return function(o) {
                return null != o && (o[t] === e && (void 0 !== e || t in Object(o)))
            }
        };
        const xa = function(t) {
            var e = Ca(t);
            return 1 == e.length && e[0][2] ? _a(e[0][0], e[0][1]) : function(o) {
                return o === t || wa(o, t, e)
            }
        };
        const Pa = function(t, e) {
            return null != t && e in Object(t)
        };
        const ka = function(t, e, o) {
            for (var r = -1, n = (e = Rs(e, t)).length, s = !1; ++r < n; ) {
                var i = zs(e[r]);
                if (!(s = null != t && o(t, i)))
                    break;
                t = t[i]
            }
            return s || ++r != n ? s : !!(n = null == t ? 0 : t.length) && Le(n) && Ne(i, n) && (Ae(t) || Se(t))
        };
        const Sa = function(t, e) {
            return null != t && ka(t, e, Pa)
        };
        const Aa = function(t, e) {
            return Fs(t) && ya(e) ? _a(zs(t), e) : function(o) {
                var r = $s(o, t);
                return void 0 === r && r === e ? Sa(o, t) : va(e, r, 3)
            }
        };
        const Oa = function(t) {
            return function(e) {
                return null == e ? void 0 : e[t]
            }
        };
        const ja = function(t) {
            return function(e) {
                return Us(e, t)
            }
        };
        const Fa = function(t) {
            return Fs(t) ? Oa(zs(t)) : ja(t)
        };
        const Ea = function(t) {
            return "function" == typeof t ? t : null == t ? _r : "object" == typeof t ? Ae(t) ? Aa(t[0], t[1]) : xa(t) : Fa(t)
        };
        const Da = function(t) {
            return function(e, o, r) {
                var n = Object(e);
                if (!Je(e)) {
                    var s = Ea(o, 3);
                    e = to(e),
                    o = function(t) {
                        return s(n[t], t, n)
                    }
                }
                var i = t(e, o, r);
                return i > -1 ? n[s ? e[i] : i] : void 0
            }
        };
        const Ta = function(t, e, o, r) {
            for (var n = t.length, s = o + (r ? 1 : -1); r ? s-- : ++s < n; )
                if (e(t[s], s, t))
                    return s;
            return -1
        };
        var Na = /\s/;
        const La = function(t) {
            for (var e = t.length; e-- && Na.test(t.charAt(e)); )
                ;
            return e
        };
        var Ba = /^\s+/;
        const Ia = function(t) {
            return t ? t.slice(0, La(t) + 1).replace(Ba, "") : t
        };
        var Ma = /^[-+]0x[0-9a-f]+$/i
          , qa = /^0b[01]+$/i
          , Wa = /^0o[0-7]+$/i
          , Ha = parseInt;
        const Ra = function(t) {
            if ("number" == typeof t)
                return t;
            if (As(t))
                return NaN;
            if (Ot(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = Ot(e) ? e + "" : e
            }
            if ("string" != typeof t)
                return 0 === t ? t : +t;
            t = Ia(t);
            var o = qa.test(t);
            return o || Wa.test(t) ? Ha(t.slice(2), o ? 2 : 8) : Ma.test(t) ? NaN : +t
        };
        var za = 1 / 0;
        const Ua = function(t) {
            return t ? (t = Ra(t)) === za || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
        };
        const $a = function(t) {
            var e = Ua(t)
              , o = e % 1;
            return e == e ? o ? e - o : e : 0
        };
        var Va = Math.max;
        const Ga = function(t, e, o) {
            var r = null == t ? 0 : t.length;
            if (!r)
                return -1;
            var n = null == o ? 0 : $a(o);
            return n < 0 && (n = Va(r + n, 0)),
            Ta(t, Ea(e, 3), n)
        };
        const Ka = Da(Ga)
          , Ya = [{
            id: 1,
            name: "Twitter",
            slug: "twitter",
            icon: "crt-icon-twitter"
        }, {
            id: 2,
            name: "Instagram",
            slug: "instagram",
            icon: "crt-icon-instagram"
        }, {
            id: 3,
            name: "Facebook",
            slug: "facebook",
            icon: "crt-icon-facebook"
        }, {
            id: 4,
            name: "Pinterest",
            slug: "pinterest",
            icon: "crt-icon-pinterest"
        }, {
            id: 5,
            name: "Google",
            slug: "google",
            icon: "crt-icon-google"
        }, {
            id: 6,
            name: "Vine",
            slug: "vine",
            icon: "crt-icon-vine"
        }, {
            id: 7,
            name: "Flickr",
            slug: "flickr",
            icon: "crt-icon-flickr"
        }, {
            id: 8,
            name: "YouTube",
            slug: "youtube",
            icon: "crt-icon-youtube"
        }, {
            id: 9,
            name: "Tumblr",
            slug: "tumblr",
            icon: "crt-icon-tumblr"
        }, {
            id: 10,
            name: "RSS",
            slug: "rss",
            icon: "crt-icon-rss"
        }, {
            id: 11,
            name: "LinkedIn",
            slug: "linkedin",
            icon: "crt-icon-linkedin"
        }, {
            id: 12,
            name: "Vimeo",
            slug: "vimeo",
            icon: "crt-icon-vimeo"
        }, {
            id: 13,
            name: "Diffbot",
            slug: "difbot",
            icon: "crt-icon-cog"
        }, {
            id: 14,
            name: "Webo",
            slug: "webo",
            icon: "crt-icon-weibo"
        }, {
            id: 15,
            name: "Glassdoor",
            slug: "glassdoor",
            icon: "crt-icon-glassdoor"
        }, {
            id: 16,
            name: "Instagram",
            slug: "instagram",
            icon: "crt-icon-instagram"
        }, {
            id: 17,
            name: "Yelp",
            slug: "yelp",
            icon: "crt-icon-yelp"
        }, {
            id: 18,
            name: "DeviantArt",
            slug: "deviant-art",
            icon: "crt-icon-deviantart"
        }, {
            id: 19,
            name: "Behance",
            slug: "deviant-art",
            icon: "crt-icon-behance"
        }, {
            id: 20,
            name: "Spotify",
            slug: "spotify",
            icon: "crt-icon-spotify"
        }, {
            id: 21,
            name: "Slack",
            slug: "slack",
            icon: "crt-icon-slack"
        }, {
            id: 22,
            name: "Giphy",
            slug: "giphy",
            icon: "crt-icon-giphy"
        }, {
            id: 23,
            name: "Reddit",
            slug: "reddit",
            icon: "crt-icon-reddit"
        }, {
            id: 25,
            name: "Tiktok",
            slug: "tiktok",
            icon: "crt-icon-tiktok"
        }]
          , Za = {
            findById: t=>Ka(Ya, (function(e) {
                return e.id === t
            }
            ))
        };
        function Xa(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                "aria-label": "Twitter icon",
                class: [e && e["crt-icon-twitter"] || "crt-icon-twitter"].join(" "),
                width: "24",
                height: "21",
                viewBox: "0 0 26 23",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, o), ["\n  ", F("path", {
                d: "M0.0632662 0L10.1016 12.6858L0 23H2.27364L11.1177 13.9696L18.2633 23H26L15.3967 9.60076L24.7993 0H22.5256L14.3809 8.31659L7.8 0H0.0632662ZM3.40675 1.58274H6.96097L22.6561 21.4173H19.1019L3.40675 1.58274Z",
                fill: "currentColor"
            }, []), "\n"])
        }
        function Qa(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ["\n", F("path", {
                d: "M17.363 0.137404L1.12296 7.63395C-0.751789 8.509 -0.126873 11.2553 1.87286 11.2553H8.74303V18.1268C8.74303 20.1269 11.4927 20.7519 12.3675 18.8768L19.8626 2.63756C20.4875 1.13746 18.8628 -0.487634 17.363 0.137404Z",
                fill: "currentColor"
            }, []), "\n"])
        }
        function Ja(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                width: "21",
                height: "21",
                viewBox: "0 0 21 21",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ["\n", F("path", {
                d: "M14.776 17.425L15.94 19.3901C15.069 19.9425 14.1821 20.345 13.2794 20.5975C12.3925 20.8658 11.3156 21 10.0486 21C8.71833 21 7.45928 20.7948 6.27149 20.3844C5.09955 19.9741 4.03846 19.3664 3.08824 18.5614C2.13801 17.7723 1.38575 16.7148 0.831448 15.389C0.277149 14.0474 0 12.5163 0 10.7959C0 8.823 0.467195 7.01578 1.40158 5.3743C2.33597 3.73281 3.65837 2.43067 5.36878 1.46787C7.07919 0.48929 8.99547 0 11.1176 0C12.4163 0 13.6437 0.189402 14.7998 0.568207C15.9717 0.931229 17.0249 1.47576 17.9593 2.2018C18.8937 2.92785 19.6301 3.88275 20.1686 5.06652C20.7229 6.2345 21 7.56032 21 9.04397C21 11.2063 20.414 13.0135 19.2421 14.4656C18.0701 15.9177 16.6448 16.6437 14.9661 16.6437C14.2534 16.6437 13.6753 16.478 13.2319 16.1466C12.7885 15.8151 12.5667 15.3732 12.5667 14.8207C12.5667 14.805 12.5667 14.7813 12.5667 14.7497C12.5826 14.7182 12.5905 14.6866 12.5905 14.655C12.6063 14.6077 12.6143 14.5603 12.6143 14.513C12.2342 15.1285 11.7195 15.6415 11.0701 16.0519C10.4367 16.4464 9.70815 16.6437 8.88461 16.6437C7.53846 16.6437 6.46154 16.1702 5.65385 15.2232C4.84615 14.2762 4.44231 13.0214 4.44231 11.4589C4.44231 10.3382 4.62443 9.31229 4.98869 8.38106C5.36878 7.43405 5.85181 6.66855 6.43778 6.08455C7.03959 5.48478 7.68891 5.02706 8.38575 4.71139C9.08258 4.37993 9.77941 4.21421 10.4762 4.21421C11.9491 4.21421 12.9706 4.74295 13.5407 5.80045L13.7545 4.59301H16.0826L14.7285 13.3766C14.7127 13.5186 14.7048 13.6449 14.7048 13.7554C14.7048 14.3078 14.9502 14.584 15.4412 14.584C16.1855 14.584 16.8665 14.0947 17.4842 13.1161C18.1018 12.1218 18.4106 10.7723 18.4106 9.06764C18.4106 7.01578 17.7771 5.3664 16.5102 4.1195C15.2432 2.85682 13.3903 2.22548 10.9514 2.22548C8.6233 2.22548 6.64367 3.05412 5.01244 4.71139C3.39706 6.35288 2.58937 8.4363 2.58937 10.9617C2.58937 13.4239 3.30995 15.3416 4.75113 16.7148C6.19231 18.0722 7.98982 18.7508 10.1437 18.7508C11.9649 18.7508 13.509 18.3089 14.776 17.425ZM9.24095 14.584C10.2545 14.584 11.1256 14.0789 11.8541 13.0688C12.5984 12.0428 12.9706 10.7407 12.9706 9.16234C12.9706 7.26832 12.25 6.32131 10.8088 6.32131C9.81109 6.32131 8.93213 6.83427 8.17195 7.8602C7.41176 8.87035 7.03167 10.1172 7.03167 11.6009C7.03167 12.5637 7.23756 13.3055 7.64932 13.8264C8.06109 14.3315 8.59163 14.584 9.24095 14.584Z",
                fill: "currentColor"
            }, []), "\n"])
        }
        function tc(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                width: "22",
                height: "21",
                viewBox: "0 0 22 21",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ["\n    ", F("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M0 10.5667C0 16.3162 4.66176 20.9779 10.5667 20.9779C16.3162 20.9779 21.1333 16.4716 21.1333 10.5667C21.1333 4.66177 16.4716 0 10.5667 0C4.66176 0 0 4.81716 0 10.5667ZM2.48627 10.4113C2.48627 6.06029 6.06029 2.33088 10.5667 2.33088C14.9176 2.33088 18.6471 6.21569 18.6471 10.5667C18.6471 14.9176 15.073 18.6471 10.5667 18.6471C6.06029 18.6471 2.48627 14.7623 2.48627 10.4113ZM9.32353 10.5671C9.32353 11.1887 9.78971 11.6549 10.5667 11.6549H14.6069C15.2284 11.6549 16.0054 11.3441 16.0054 10.5671C16.0054 9.79016 15.3838 9.32398 14.7623 9.32398H11.8098V6.37153C11.8098 5.59457 11.3436 5.1284 10.5667 5.1284C9.78971 5.1284 9.32353 5.74996 9.32353 6.37153V10.5671Z",
                fill: "currentColor"
            }, []), "\n  "])
        }
        function ec(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                "aria-label": "Facebook icon",
                class: [e && e["crt-icon-facebook"] || "crt-icon-facebook"].join(" "),
                width: "9",
                height: "17",
                viewBox: "0 0 9 17",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, o), ["\n  ", F("path", {
                d: "M2.61477 17V9.39648H0V6.375H2.61477V3.99434C2.61477 1.40781 4.2375 0 6.60682 0C7.74205 0 8.71705 0.0830078 9 0.119531V2.82227H7.35682C6.06818 2.82227 5.81932 3.41992 5.81932 4.29316V6.375H8.72727L8.32841 9.39648H5.81932V17",
                fill: "currentColor"
            }, []), "\n"])
        }
        function oc(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                width: "38",
                height: "38",
                viewBox: "0 0 38 38",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: "fill: none;"
            }, e), ["\n    ", F("path", {
                d: "M2.35126 36.639C2.53946 36.639 2.75455 36.5857 2.94275 36.5058L10.3684 33.8804C10.5566 33.8005 10.7986 33.8005 10.9868 33.9071C19.5633 38.4901 30.2638 35.2926 34.8882 26.7928C39.5125 18.2929 36.2863 7.688 27.7097 3.10499C25.1018 1.71943 22.225 1 19.3214 1C9.75006 1 2.00698 8.67388 2.00698 18.133C2.00698 18.2662 2.00698 18.3728 2.00698 18.506C1.92632 21.3571 2.54469 24.2082 3.78143 26.7661C3.86209 26.9526 3.86209 27.1658 3.78143 27.3523L1.14141 34.7206C0.818778 35.3867 1.11452 36.1861 1.78666 36.5058C1.94798 36.5857 2.16306 36.639 2.35126 36.639Z",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
            }, []), "\n    ", F("path", {
                d: "M17.1958 30V19.7129H14V15.625H17.1958V12.4041C17.1958 8.90469 19.1792 7 22.075 7C23.4625 7 24.6542 7.1123 25 7.16172V10.8184H22.9917C21.4167 10.8184 21.1125 11.627 21.1125 12.8084V15.625H24.6667L24.1792 19.7129H21.1125V30",
                fill: "currentColor"
            }, []), "\n"])
        }
        function rc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-instagram"] || "crt-icon-instagram"].join(" "),
                viewBox: "0 0 857.1 1000",
                width: "24px",
                height: "24px",
                xmlns: "http://www.w3.org/2000/svg"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M571 350q0 59-41 101t-101 42-101-42-42-101 42-101 101-42 101 42 41 101z m77 0q0-91-64-156t-155-64-156 64-64 156 64 156 156 64 155-64 64-156z m61 229q0-21-15-36t-37-15-36 15-15 36 15 36 36 15 37-15 15-36z m-280 123q-4 0-43 0t-59 0-54-2-57-5-40-11q-28-11-49-32t-33-49q-6-16-10-40t-6-58-1-53 0-59 0-43 0-43 0-59 1-53 6-58 10-40q12-28 33-49t49-32q16-6 40-11t57-5 54-2 59 0 43 0 42 0 59 0 54 2 58 5 39 11q28 11 50 32t32 49q6 16 10 40t6 58 1 53 0 59 0 43 0 43 0 59-1 53-6 58-10 40q-11 28-32 49t-50 32q-16 6-39 11t-58 5-54 2-59 0-42 0z m428-352q0-128-3-177-5-116-69-180t-179-69q-50-3-177-3t-177 3q-116 6-180 69t-69 180q-3 49-3 177t3 177q5 116 69 180t180 69q49 3 177 3t177-3q116-6 179-69t69-180q3-49 3-177z"
            }, [])])
        }
        function nc(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                width: "25",
                height: "25",
                viewBox: "0 0 25 25",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: "fill: none;"
            }, e), ["\n    ", F("path", {
                d: "M12.5 1C18.8513 1 24 6.14873 24 12.5C24 17.4447 20.8793 21.6605 16.5 23.2853",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }, []), "\n    ", F("circle", {
                cx: "12.5",
                cy: "12.5",
                r: "11.5",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-dasharray": "1.5 5"
            }, []), "\n    ", F("path", {
                d: "M12.75 8V17",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "square",
                "stroke-linejoin": "round"
            }, []), "\n    ", F("path", {
                d: "M17.25 12.5L8.25 12.5",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "square",
                "stroke-linejoin": "round"
            }, []), "\n"])
        }
        function sc(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                width: "21",
                height: "21",
                viewBox: "0 0 21 21",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ["\n    ", F("path", {
                d: "M14.776 17.425L15.94 19.3901C15.069 19.9425 14.1821 20.345 13.2794 20.5975C12.3925 20.8658 11.3156 21 10.0486 21C8.71833 21 7.45928 20.7948 6.27149 20.3844C5.09955 19.9741 4.03846 19.3664 3.08824 18.5614C2.13801 17.7723 1.38575 16.7148 0.831448 15.389C0.277149 14.0474 0 12.5163 0 10.7959C0 8.823 0.467195 7.01578 1.40158 5.3743C2.33597 3.73281 3.65837 2.43067 5.36878 1.46787C7.07919 0.48929 8.99547 0 11.1176 0C12.4163 0 13.6437 0.189402 14.7998 0.568207C15.9717 0.931229 17.0249 1.47576 17.9593 2.2018C18.8937 2.92785 19.6301 3.88275 20.1686 5.06652C20.7229 6.2345 21 7.56032 21 9.04397C21 11.2063 20.414 13.0135 19.2421 14.4656C18.0701 15.9177 16.6448 16.6437 14.9661 16.6437C14.2534 16.6437 13.6753 16.478 13.2319 16.1466C12.7885 15.8151 12.5667 15.3732 12.5667 14.8207C12.5667 14.805 12.5667 14.7813 12.5667 14.7497C12.5826 14.7182 12.5905 14.6866 12.5905 14.655C12.6063 14.6077 12.6143 14.5603 12.6143 14.513C12.2342 15.1285 11.7195 15.6415 11.0701 16.0519C10.4367 16.4464 9.70815 16.6437 8.88461 16.6437C7.53846 16.6437 6.46154 16.1702 5.65385 15.2232C4.84615 14.2762 4.44231 13.0214 4.44231 11.4589C4.44231 10.3382 4.62443 9.31229 4.98869 8.38106C5.36878 7.43405 5.85181 6.66855 6.43778 6.08455C7.03959 5.48478 7.68891 5.02706 8.38575 4.71139C9.08258 4.37993 9.77941 4.21421 10.4762 4.21421C11.9491 4.21421 12.9706 4.74295 13.5407 5.80045L13.7545 4.59301H16.0826L14.7285 13.3766C14.7127 13.5186 14.7048 13.6449 14.7048 13.7554C14.7048 14.3078 14.9502 14.584 15.4412 14.584C16.1855 14.584 16.8665 14.0947 17.4842 13.1161C18.1018 12.1218 18.4106 10.7723 18.4106 9.06764C18.4106 7.01578 17.7771 5.3664 16.5102 4.1195C15.2432 2.85682 13.3903 2.22548 10.9514 2.22548C8.6233 2.22548 6.64367 3.05412 5.01244 4.71139C3.39706 6.35288 2.58937 8.4363 2.58937 10.9617C2.58937 13.4239 3.30995 15.3416 4.75113 16.7148C6.19231 18.0722 7.98982 18.7508 10.1437 18.7508C11.9649 18.7508 13.509 18.3089 14.776 17.425ZM9.24095 14.584C10.2545 14.584 11.1256 14.0789 11.8541 13.0688C12.5984 12.0428 12.9706 10.7407 12.9706 9.16234C12.9706 7.26832 12.25 6.32131 10.8088 6.32131C9.81109 6.32131 8.93213 6.83427 8.17195 7.8602C7.41176 8.87035 7.03167 10.1172 7.03167 11.6009C7.03167 12.5637 7.23756 13.3055 7.64932 13.8264C8.06109 14.3315 8.59163 14.584 9.24095 14.584Z",
                fill: "currentColor"
            }, []), "\n"])
        }
        function ic(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                width: "25",
                height: "25",
                viewBox: "0 0 25 25",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ["\n", F("path", {
                d: "M24.9122 7.34548C24.8173 5.3428 24.36 3.56884 22.8932 2.10727C21.432 0.64571 19.6584 0.188274 17.6562 0.0878612C15.5926 -0.0292871 9.40742 -0.0292871 7.34384 0.0878612C5.34718 0.182696 3.57362 0.640132 2.1068 2.1017C0.639989 3.56326 0.188232 5.33722 0.0878416 7.3399C-0.0292805 9.40394 -0.0292805 15.5905 0.0878416 17.6545C0.182655 19.6572 0.639989 21.4312 2.1068 22.8927C3.57362 24.3543 5.34161 24.8117 7.34384 24.9121C9.40742 25.0293 15.5926 25.0293 17.6562 24.9121C19.6584 24.8173 21.432 24.3599 22.8932 22.8927C24.3544 21.4312 24.8118 19.6572 24.9122 17.6545C25.0293 15.5905 25.0293 9.40952 24.9122 7.34548ZM22.2462 19.8692C21.8112 20.9626 20.969 21.8049 19.8703 22.2456C18.225 22.8983 14.321 22.7477 12.5028 22.7477C10.6846 22.7477 6.77496 22.8927 5.13525 22.2456C4.04211 21.8105 3.19994 20.9681 2.75934 19.8692C2.1068 18.2235 2.25739 14.3186 2.25739 12.5C2.25739 10.6814 2.11238 6.77089 2.75934 5.13082C3.19437 4.03743 4.03653 3.19508 5.13525 2.75438C6.78054 2.1017 10.6846 2.25232 12.5028 2.25232C14.321 2.25232 18.2306 2.10727 19.8703 2.75438C20.9635 3.1895 21.8056 4.03185 22.2462 5.13082C22.8988 6.77647 22.7482 10.6814 22.7482 12.5C22.7482 14.3186 22.8988 18.2291 22.2462 19.8692Z",
                fill: "currentColor"
            }, []), "\n", F("path", {
                d: "M12.5 13C10.5556 13 9 11.4444 9 9.5C9 7.55556 10.5556 6 12.5 6C14.4444 6 16 7.55556 16 9.5C16 11.4444 14.4444 13 12.5 13Z",
                fill: "currentColor"
            }, []), "\n", F("path", {
                d: "M12.5 14C15.5067 14 18 15.7 18 17.75V18.75C18 18.9 17.8533 19 17.6333 19H7.36667C7.14667 19 7 18.9 7 18.75V17.75C7 15.7 9.49333 14 12.5 14Z",
                fill: "currentColor"
            }, []), "\n"])
        }
        function ac(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                width: "25",
                height: "25",
                viewBox: "0 0 25 25",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ["\n    ", F("path", {
                d: "M24.9122 7.34548C24.8174 5.3428 24.36 3.56884 22.8932 2.10727C21.432 0.64571 19.6584 0.188274 17.6562 0.0878612C15.5926 -0.0292871 9.40742 -0.0292871 7.34384 0.0878612C5.34718 0.182696 3.57362 0.640132 2.1068 2.1017C0.639989 3.56326 0.188232 5.33722 0.0878416 7.3399C-0.0292805 9.40394 -0.0292805 15.5905 0.0878416 17.6545C0.182655 19.6572 0.639989 21.4312 2.1068 22.8927C3.57362 24.3543 5.34161 24.8117 7.34384 24.9121C9.40742 25.0293 15.5926 25.0293 17.6562 24.9121C19.6584 24.8173 21.432 24.3599 22.8932 22.8927C24.3544 21.4312 24.8118 19.6572 24.9122 17.6545C25.0293 15.5905 25.0293 9.40952 24.9122 7.34548ZM22.2462 19.8692C21.8112 20.9626 20.969 21.8049 19.8703 22.2456C18.225 22.8983 14.321 22.7477 12.5028 22.7477C10.6846 22.7477 6.77496 22.8927 5.13525 22.2456C4.04211 21.8105 3.19994 20.9681 2.75934 19.8692C2.1068 18.2235 2.25739 14.3186 2.25739 12.5C2.25739 10.6814 2.11238 6.77089 2.75934 5.13082C3.19437 4.03743 4.03653 3.19508 5.13525 2.75438C6.78053 2.1017 10.6846 2.25232 12.5028 2.25232C14.321 2.25232 18.2306 2.10727 19.8703 2.75438C20.9635 3.1895 21.8056 4.03185 22.2462 5.13082C22.8988 6.77647 22.7482 10.6814 22.7482 12.5C22.7482 14.3186 22.8988 18.2291 22.2462 19.8692Z",
                fill: "currentColor"
            }, []), "\n    ", F("path", {
                d: "M19.2722 10.3556L19.4941 9.19487C19.5347 8.98013 19.3597 8.78571 19.1254 8.78571H16.7877L17.244 6.40915C17.2846 6.19732 17.1096 6 16.8752 6H15.6064C15.4252 6 15.2689 6.12187 15.2376 6.28728L14.7564 8.78571H11.675L12.1312 6.40915C12.1719 6.19732 11.9937 6 11.7625 6H10.4936C10.3124 6 10.1561 6.12187 10.1249 6.28728L9.64047 8.78571H7.16847C6.98721 8.78571 6.83095 8.90759 6.7997 9.07299L6.57781 10.2337C6.53718 10.4484 6.71219 10.6429 6.94658 10.6429H9.2842L8.56854 14.3571H6.09654C5.91528 14.3571 5.75902 14.479 5.72777 14.6444L5.50588 15.8051C5.46525 16.017 5.64026 16.2143 5.87465 16.2143H8.21227L7.756 18.5908C7.71537 18.8027 7.89038 19 8.12477 19H9.39359C9.57484 19 9.7311 18.8781 9.76235 18.7127L10.2436 16.2143H13.325L12.8688 18.5908C12.8281 18.8056 13.0032 19 13.2375 19H14.5064C14.6876 19 14.8439 18.8781 14.8751 18.7127L15.3564 16.2143H17.8284C18.0097 16.2143 18.1659 16.0924 18.1972 15.927L18.4191 14.7663C18.4597 14.5516 18.2847 14.3571 18.0503 14.3571H15.7127L16.4283 10.6429H18.9003C19.0847 10.6429 19.2379 10.521 19.2722 10.3556ZM13.6844 14.3571H10.603L11.3187 10.6429H14.4001L13.6844 14.3571Z",
                fill: "currentColor"
            }, []), "\n  "])
        }
        function cc(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                width: "25",
                height: "29",
                viewBox: "0 0 25 29",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ["\n    ", F("path", {
                d: "M24.9122 11.3455C24.8173 9.3428 24.36 7.56884 22.8932 6.10727C21.432 4.64571 19.6584 4.18827 17.6562 4.08786C15.5926 3.97071 9.40742 3.97071 7.34384 4.08786C5.34718 4.1827 3.57362 4.64013 2.1068 6.1017C0.639989 7.56326 0.188232 9.33722 0.0878416 11.3399C-0.0292805 13.4039 -0.0292805 19.5905 0.0878416 21.6545C0.182655 23.6572 0.639989 25.4312 2.1068 26.8927C3.57362 28.3543 5.34161 28.8117 7.34384 28.9121C9.40742 29.0293 15.5926 29.0293 17.6562 28.9121C19.6584 28.8173 21.432 28.3599 22.8932 26.8927C24.3544 25.4312 24.8118 23.6572 24.9122 21.6545C25.0293 19.5905 25.0293 13.4095 24.9122 11.3455ZM22.2462 23.8692C21.8112 24.9626 20.969 25.8049 19.8703 26.2456C18.225 26.8983 14.321 26.7477 12.5028 26.7477C10.6846 26.7477 6.77496 26.8927 5.13525 26.2456C4.04211 25.8105 3.19994 24.9681 2.75934 23.8692C2.1068 22.2235 2.25739 18.3186 2.25739 16.5C2.25739 14.6814 2.11238 10.7709 2.75934 9.13082C3.19437 8.03743 4.03653 7.19508 5.13525 6.75438C6.78054 6.1017 10.6846 6.25232 12.5028 6.25232C14.321 6.25232 18.2306 6.10727 19.8703 6.75438C20.9635 7.1895 21.8056 8.03185 22.2462 9.13082C22.8988 10.7765 22.7482 14.6814 22.7482 16.5C22.7482 18.3186 22.8988 22.2291 22.2462 23.8692Z",
                fill: "currentColor"
            }, []), "\n    ", F("path", {
                d: "M7.73656 1.00044L12.3513 5.00044",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
            }, []), "\n    ", F("path", {
                d: "M17.5202 1.00044L12.9055 5.00044",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round"
            }, []), "\n    ", F("path", {
                d: "M6 18L12.5 14.5V18.5L19 15.5",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }, []), "\n"])
        }
        function lc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-yelp"] || "crt-icon-yelp"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 741 992",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M0 262l0-13q0-43 6-69 5-18 19-26t29-2l204 63q22 7 31 26 5 10 5 20t-5 19q-9 19-32 26l-204 82q-14 3-27-8t-17-30q-8-36-9-88z m87 477q-5 8-5 16 0 9 6 18 12 17 38 27 81 31 171 46l5 0q45 0 49-38 25-313 25-393 0-33-27-40-6-2-12-2-21 0-37 25-148 232-213 341z m69-766l139 167q19 21 38 21 8 0 16-3 25-11 25-45 0-5-1-10l0-222q-2-14-17-22-9-5-18-5-8 0-16 3-36 6-85 26t-73 37q-18 14-18 30 0 11 10 23z m294 338q-6 12-6 23 0 17 15 33l130 179q7 8 20 8 3 0 7-1 17-2 29-18 25-26 53-71t37-73q3-8 3-15 0-9-4-16-8-13-23-16l-209-53q-8-2-16-2-23 0-36 22z m12-125q-9-12-9-24 0-16 13-32l114-191q7-9 24-9l3 0q19 1 33 15 27 24 56 63t41 70q4 11 4 21 0 7-3 13-5 14-19 19l-205 70q-10 4-19 4-21 0-33-19z"
            }, [])])
        }
        function uc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-soundcloud"] || "crt-icon-soundcloud"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1152 550",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M0 221q0 16 4 44t9 31q6-3 11-32t4-43q0-14-4-42t-11-32q-13 7-13 74z m64 0q0 25 5 74t6 61q0 6 6 6 4 0 6-6 12-129 12-135 0-24-5-71t-7-59q-2-7-6-7-6 0-6 7-1 11-6 59t-5 71z m81 0q0 24 5 74t5 54q0 9 7 9 8 0 8-9 11-113 11-128t-11-136q0-8-8-8-7 0-7 8 0 7-5 59t-5 77z m92 0q0 38 2 81t4 95 3 81q0 10 9 10 10 0 10-10 1-16 6-111t4-146q0-26-5-77t-5-58q0-10-10-10-9 0-9 10-9 132-9 135z m94 0q0 55 3 160t4 128q2 12 12 12t12-12q1-32 5-133t3-155q0-25-3-72t-5-61q-2-12-12-12t-12 12q0 11-3 59t-4 74z m95 0q0 40 1 85t3 100 2 85q2 15 14 15t14-15q1-30 3-85t2-100 1-85q0-2-6-131l0 1q-2-15-14-15t-14 14q-6 129-6 131z m95-1q0 3 6 351 2 18 16 18t16-18q6-348 6-351 0-1-6-127-2-17-16-17t-16 17q-6 126-6 127z m80 213q0 82 1 155-1 10 13 18t32 12 35 5 24 2q97 0 169-72t80-179q28 13 55 13 58 0 100-45t42-111-42-110-100-46l-393 0q-6 0-10 6t-5 13q0 55 0 156t-1 183z"
            }, [])])
        }
        function dc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-tiktok"] || "crt-icon-tiktok"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 887 998",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M938 599c-57 0-110 19-152 51-48 37-83 90-95 152-4 15-5 31-5 47h-163v-445l-1-244c0-65-42-121-101-140-17-6-35-9-55-7-24 1-47 8-67 20-43 26-72 72-72 125-2 82 65 149 148 149 16 0 31-2 46-7v122 43c-15 3-31 4-47 4-90 0-175-38-235-105-45-51-73-116-77-185-6-89 27-175 91-238 9-9 19-18 29-25 55-42 122-65 192-65 16 0 32 1 47 3 66 10 126 40 174 87 59 58 91 135 92 218l-1 364c28-22 59-40 91-53 52-22 106-33 162-33v118 44c0 0-1 0-1 0z"
            }, [])])
        }
        function hc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-gplus"] || "crt-icon-gplus"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1285.7 1000",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M802 341q0-117-49-207t-138-142-206-51q-83 0-159 32t-131 87-87 131-32 159 32 159 87 131 131 87 159 32q160 0 274-107l-111-107q-65 63-163 63-69 0-127-34t-92-94-34-130 34-130 92-94 127-34q46 0 85 13t64 32 44 43 27 47 12 41h-232v141h386q7-36 7-68z m484 68v-118h-117v-116h-117v116h-117v118h117v116h117v-116h117z"
            }, [])])
        }
        function pc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-linkedin"] || "crt-icon-linkedin"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 857 819",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-819)",
                d: "M195 501v-553h-184v553h184z m12 171q0-41-29-68t-75-27h-1q-46 0-74 27t-28 68q0 41 29 68t75 27 74-27 29-68z m650-407v-317h-183v296q0 59-23 92t-71 33q-35 0-58-19t-36-48q-6-17-6-45v-309h-184q1 223 1 361t0 165l-1 27h184v-80h-1q11 18 23 31t31 29 49 24 64 9q95 0 153-63t58-186z"
            }, [])])
        }
        function fc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-attention-alt"] || "crt-icon-attention-alt"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 248.2 786",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-786)",
                d: "M286 154v-125q0-15-11-25t-25-11h-143q-14 0-25 11t-11 25v125q0 14 11 25t25 10h143q15 0 25-10t11-25z m17 589l-16-429q-1-14-12-25t-25-10h-143q-14 0-25 10t-12 25l-15 429q-1 14 10 25t24 11h179q14 0 25-11t10-25z"
            }, [])])
        }
        function gc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-youtube"] || "crt-icon-youtube"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1000 704",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                fill: "#ff0000",
                transform: "scale(1,-1) translate(0,-704)",
                d: "M397 221l270 139-270 141v-280z m103 481q94 0 181-3t128-5l41-2q0 0 9-1t13-2 13-2 16-5 16-7 17-11 16-15q4-3 9-10t16-33 15-56q4-36 7-76t3-64v-98q1-81-10-162-4-30-14-55t-18-35l-8-9q-7-8-16-15t-17-10-16-7-16-5-13-2-13-2-9-1q-140-11-350-11-115 2-201 4t-111 4l-28 3-20 2q-20 3-30 5t-29 12-31 23q-4 3-9 10t-16 33-15 56q-4 36-7 76t-3 64v98q-1 81 10 162 4 31 14 55t18 35l8 9q8 9 16 15t17 11 16 7 16 5 13 2 13 2 9 1q140 10 350 10z"
            }, [])])
        }
        function mc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-tumblr"] || "crt-icon-tumblr"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 533 930",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M527 108l44-132q-12-19-61-37t-99-18q-58-1-107 15t-79 41-53 59-31 67-9 66v304h-94v120q40 14 72 39t51 50 32 57 19 55 8 49q1 3 3 5t4 2h136v-237h186v-140h-186v-289q0-17 3-31t13-30 28-23 45-8q44 1 75 16z"
            }, [])])
        }
        function bc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-weibo"] || "crt-icon-weibo"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1000 850",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M377 134q11 19 6 38t-25 28q-19 8-41 0t-33-25q-13-19-8-38t24-29 42-1 35 27z m52 67q5 7 2 15t-10 10q-7 3-16 0t-12-10q-9-18 8-26 8-2 16 1t12 10z m97-60q-25-57-88-83t-125-7q-60 19-82 71t3 104q27 52 85 78t117 10q62-16 89-66t1-107z m174 90q-5 53-49 94t-117 61-153 12q-124-13-206-79t-74-148q5-53 50-94t116-61 153-12q125 13 206 79t74 148z m172-3q0-38-20-77t-61-77-94-65-126-47-151-17-154 19-134 52-96 84-36 111q0 64 39 137t110 144q94 94 191 131t137-3q36-36 11-117-2-8 0-11t5-4 8 0 8 2l3 1q78 33 138 33t85-34q25-35 0-99-1-7-3-11t3-7 7-5 9-3q32-10 58-26t44-46 19-65z m-41 349q23-27 30-61t-3-66q-5-12-17-18t-25-3q-12 5-19 17t-2 25q11 35-13 62t-60 19q-13-3-25 5t-14 20q-3 14 5 25t20 14q34 7 67-3t56-36z m101 91q49-54 63-125t-8-134q-5-15-19-23t-29-2-22 19-3 29q16 46 6 96t-45 88q-35 39-83 54t-96 4q-16-3-29 6t-17 24 5 29 25 16q68 15 136-6t116-75z"
            }, [])])
        }
        function vc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-slack"] || "crt-icon-slack"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 928.6 850",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M848 417q34 0 57-23t24-56q0-54-52-73l-96-33 31-93q4-12 4-26 0-33-24-57t-56-24q-26 0-48 15t-29 40l-31 92-173-59 31-91q4-14 4-27 0-33-23-57t-57-24q-27 0-48 15t-29 41l-31 91-85-30q-17-5-28-5-34 0-57 22t-23 57q0 26 16 47t40 30l87 29-59 175-87-30q-14-5-27-5-33 0-56 23t-23 56q0 26 15 48t40 29l88 30-30 88q-4 14-4 27 0 33 23 57t57 24q26 0 48-16t29-40l30-89 173 59-30 89q-4 13-4 26 0 33 23 57t57 24q26 0 48-15t30-40l29-90 91 31q11 3 24 3 33 0 57-22t24-55q0-25-17-45t-41-29l-88-30 59-177 91 32q13 4 26 4z m-443-146l173 58-59 176-173-60z"
            }, [])])
        }
        function wc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-behance"] || "crt-icon-behance"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1142.9 850",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M1031 661h-285v-69h285v69z m-140-238q-51 0-82-29t-34-80h227q-10 109-111 109z m9-326q35 0 68 18t42 48h123q-55-171-238-171-119 0-190 73t-70 194q0 116 72 193t188 77q77 0 134-38t86-100 28-139q0-9-1-26h-367q0-62 32-96t93-33z m-745 28h165q114 0 114 93 0 100-111 100h-168v-193z m0 299h156q44 0 69 21t26 63q0 80-106 80h-145v-164z m-155 284h332q48 0 86-8t71-26 50-54 17-86q0-101-96-147 64-17 96-64t33-114q0-41-14-76t-37-58-55-39-67-24-75-7h-341v703z"
            }, [])])
        }
        function yc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-spotify"] || "crt-icon-spotify"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 857.1 900",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M629 175q0 18-17 28-107 64-249 64-74 0-160-19-24-5-24-29 0-11 8-19t20-8q2 0 20 5 74 15 136 15 126 0 221-58 11-6 19-6 10 0 18 8t8 19z m54 120q0 22-20 34-132 79-306 79-85 0-169-24-27-7-27-36 0-14 10-23t24-10q4 0 20 4 69 19 141 19 155 0 272-69 13-8 21-8 14 0 24 10t10 24z m60 138q0 26-23 39-70 41-163 62t-191 21q-114 0-204-26-12-4-21-15t-9-27q0-17 12-29t28-11q7 0 23 4 74 21 171 21 89 0 173-19t141-53q12-7 23-7 16 0 28 11t12 29z m114-83q0-117-57-215t-156-156-215-58-216 58-155 156-58 215 58 215 155 156 216 58 215-58 156-156 57-215z"
            }, [])])
        }
        function Cc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-vine"] || "crt-icon-vine"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 857.1 1000",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M835 389v-111q-56-13-110-13-36-76-92-151t-102-120-71-60q-45-25-91 2-15 9-33 24t-48 47-57 72-60 102-59 136-51 176-39 218h158q14-122 39-223t58-177 68-131 78-109q94 94 160 227-79 40-124 122t-45 186q0 107 58 176t158 68q99 0 152-59t53-166q0-89-32-159-4-1-11-2t-25-1-36 3-34 14-28 29q17 58 17 103 0 48-16 73t-44 26q-30 0-48-28t-18-78q0-104 59-164t149-60q35 0 67 8z"
            }, [])])
        }
        function _c(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-pinterest"] || "crt-icon-pinterest"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 714.3 920",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M0 517q0 60 21 113t58 93 85 69 103 44 113 14q88 0 164-37t123-108 47-160q0-54-10-105t-34-99-56-83-80-58-106-21q-38 0-75 18t-54 49q-5-22-15-63t-14-53-11-40-15-39-17-35-26-44-35-48l-7-3-5 6q-9 88-9 105 0 51 12 115t37 161 29 113q-18 36-18 94 0 47 29 87t74 41q34 0 53-23t19-57q0-37-24-106t-25-105q0-35 25-58t61-23q31 0 57 14t44 38 31 53 21 61 11 62 4 56q0 96-61 150t-160 54q-111 0-186-72t-75-183q0-25 7-48t15-36 15-26 7-17q0-15-8-40t-21-25q-1 0-9 1-29 9-51 31t-34 53-18 60-6 60z"
            }, [])])
        }
        function xc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-medium"] || "crt-icon-medium"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1000 920",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M333 615v-655q0-14-7-23t-20-10q-10 0-19 4l-259 131q-12 5-20 18t-8 26v636q0 12 6 19t16 8q8 0 24-8l286-143q1-2 1-3z m36-56l298-484-298 149v335z m631-10v-589q0-14-8-22t-21-9-26 7l-246 123z m-2 67q0-2-143-234t-167-272l-218 353 181 294q9 16 29 16 8 0 14-3l302-151q2-1 2-3z"
            }, [])])
        }
        function Pc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-tripadvisor"] || "crt-icon-tripadvisor"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1285.7 920",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M363 294q0-22-15-37t-37-16q-21 0-37 16t-15 37q0 21 15 36t37 16q22 0 37-16t15-36z m644 0q0-22-15-37t-37-15-37 15-16 37 16 37 37 15 37-15 15-37z m-580 0q0 44-32 76t-76 31-76-31-31-76 31-76 76-32 76 32 32 76z m643 0q0 45-31 76t-76 32q-44 0-76-32t-32-76 31-76 77-31 76 31 31 76z m-596 0q0-65-45-111t-110-45q-64 0-110 46t-45 110 45 109 110 46 110-46 45-109z m644 0q0-64-45-109t-110-46q-65 0-110 46t-45 109 45 110 110 45q64 0 110-45t45-110z m-538-1q0 106-75 182t-182 75q-70 0-129-34t-94-94-35-129 35-130 94-94 129-34q106 0 182 75t75 183z m373 319q-142 62-310 62-178 0-320-61 65 0 125-26t101-68 69-102 25-124q0 64 24 122t66 101 99 68 121 28z m267-319q0 106-75 182t-182 75-182-75-76-182 76-183 182-75 182 75 75 183z m-148 315h214q-25-28-42-63t-22-64q61-85 61-188 0-87-43-161t-117-116-160-43q-74 0-139 31t-109 87q-26-32-72-100-6 12-30 46t-42 54q-44-55-109-87t-139-31q-87 0-161 43t-116 116-43 161q0 103 61 188-5 28-22 64t-42 63h204q83 56 198 88t241 31q125 0 235-31t194-88z"
            }, [])])
        }
        function kc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-snapchat-ghost"] || "crt-icon-snapchat-ghost"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 928.6 920",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M473 779q75 0 134-39t92-107q15-32 15-100 0-26-5-106 8-4 15-4 10 0 29 7t28 8q16 0 32-10t15-26q0-18-18-30t-38-18-39-16-18-26q0-9 7-24 21-46 57-84t81-57q16-6 45-12 15-4 15-20 0-39-122-57-4-6-6-22t-8-26-18-10q-11 0-35 3t-36 4q-20 0-34-3-18-3-35-13t-33-21-32-22-43-19-55-8q-29 0-54 8t-41 19-33 22-32 21-35 13q-14 3-35 3-13 0-36-4t-33-5q-14 0-19 11t-8 26-6 23q-123 18-123 57 0 16 16 20 29 6 45 12 43 18 80 57t58 84q6 15 6 24 0 15-17 26t-39 17-39 17-18 29q0 15 15 26t31 10q8 0 26-7t30-7q10 0 18 4-5 79-5 106 0 68 15 100 36 76 96 110t147 36z"
            }, [])])
        }
        function Sc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-flickr"] || "crt-icon-flickr"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 900 920",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M196 150q-80 0-138 59t-58 141q0 84 57 142t139 58 139-58 57-142q0-82-58-141t-138-59z m508 0q-80 0-138 59t-58 141q0 84 57 142t139 58 139-58 57-142q0-82-58-141t-138-59z"
            }, [])])
        }
        function Ac(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                width: "26",
                height: "12",
                viewBox: "0 0 26 12",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ["\n    ", F("circle", {
                cx: "6",
                cy: "6",
                r: "6",
                fill: "currentColor"
            }, []), "\n    ", F("circle", {
                cx: "20",
                cy: "6",
                r: "6",
                fill: "currentColor"
            }, []), "\n"])
        }
        function Oc(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                width: "17",
                height: "20",
                viewBox: "0 0 17 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ["\n    ", F("path", {
                d: "M8.5 11C5.44444 11 3 8.55556 3 5.5C3 2.44444 5.44444 0 8.5 0C11.5556 0 14 2.44444 14 5.5C14 8.55556 11.5556 11 8.5 11Z",
                fill: "currentColor"
            }, []), "\n    ", F("path", {
                d: "M8.5 13C13.1467 13 17 15.38 17 18.25V19.65C17 19.86 16.7733 20 16.4333 20H0.566667C0.226667 20 0 19.86 0 19.65V18.25C0 15.38 3.85333 13 8.5 13Z",
                fill: "currentColor"
            }, []), "\n"])
        }
        function jc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-vimeo"] || "crt-icon-vimeo"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 901 920",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M896 558q-32-186-171-351t-245-237q-42-28-81-17t-66 38-43 61q-16 32-78 239t-74 223q-16 12-38 5t-44-21l-20-14-36 50q18 20 46 52t100 89 124 67q30 6 53-7t36-35 23-60 15-70 12-75 13-67q14-54 21-80t17-54 18-39 18-11q40 0 126 166 42 76 6 124t-112 2q22 126 140 188 104 54 182 8 80-46 58-174z"
            }, [])])
        }
        function Fc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-deviantart"] || "crt-icon-deviantart"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 571.4 920",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M571 681l-169-325 14-17h155v-232h-282l-25-16-79-153-17-17h-168v170l169 325-13 17h-156v231h283l25 17 79 152 17 17h167v-169z"
            }, [])])
        }
        function Ec(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-rss"] || "crt-icon-rss"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 760 920",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M0 730q314 0 537-223t223-537l-118 0q0 266-188 453t-454 187l0 120z m0-238q218 0 371-153t153-369l-118 0q0 166-119 285t-287 119l0 118z m114-296q46 0 80-33t34-81q0-46-34-79t-80-33-80 33-34 79q0 48 34 81t80 33z"
            }, [])])
        }
        function Dc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-cogs"] || "crt-icon-cogs"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1000 920",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M0 245l0 97 94 8q8 30 23 55l-60 74 68 69 74-61q26 16 55 23l8 94 97 0 10-94q29-7 55-23l74 61 68-69-60-74q16-25 23-55l94-8 0-97-94-10q-7-29-23-55l60-72-68-70-74 60q-26-15-55-23l-10-94-97 0-8 94q-29 8-55 23l-74-60-68 70 60 72q-15 26-23 55z m221 49q0-37 26-64t64-26 63 26 26 64-26 63-63 26-64-26-26-63z m318 238l8 72 70-2q8 22 20 39l-37 57 54 45 49-49q20 10 41 14l14 66 72-8-2-68q22-8 39-22l57 39 45-54-49-49q10-20 12-43l68-14-8-70-68 0q-8-20-22-37l39-59-56-45-47 49q-22-8-43-12l-14-66-70 6 0 70q-20 8-37 20l-59-37-45 54 49 49q-8 20-12 41z m31-445l6 50 49 0q6 16 14 28l-26 43 37 33 36-37q13 8 29 10l10 48 48-5 0-49q16-6 28-16l41 27 31-41-35-35q6-13 10-29l47-12-6-51-49 0q-4-15-14-27l28-43-40-33-35 37q-13-8-29-10l-10-49-49 6 0 51q-13 4-27 14l-41-28-31 41 35 36q-6 13-8 29z m118 13q-4-21 8-36t32-17 34 9 17 34-10 35-31 18l-6 0q-17 0-31-12t-13-31z m17 451q-4-27 14-48t45-25 48 15 23 45-14 48-44 24l-7 0q-26 0-44-17t-21-42z"
            }, [])])
        }
        function Tc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-right-open-big"] || "crt-icon-right-open-big"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 465 920",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M13-20l358 370-358 372q-26 26 0 48 26 26 48 0l392-394q24-26 0-50l-392-394q-22-26-48 0-26 22 0 48z"
            }, [])])
        }
        function Nc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-left-open-big"] || "crt-icon-left-open-big"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 465 920",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M452-20q26-26 0-48-26-26-48 0l-392 394q-24 24 0 50l392 394q22 26 48 0 26-22 0-48l-358-372z"
            }, [])])
        }
        function Lc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-cancel"] || "crt-icon-cancel"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1000 920",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M654 349l346-346-154-154-346 346-346-346-154 154 346 346-346 346 154 154 346-346 346 346 154-154z"
            }, [])])
        }
        function Bc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-right-open"] || "crt-icon-right-open"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 654 1000",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M154 849l500-500-500-500-154 154 346 346-346 346z"
            }, [])])
        }
        function Ic(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-left-open"] || "crt-icon-left-open"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 654 1000",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M308 349l346-346-154-154-500 500 500 500 154-154z"
            }, [])])
        }
        function Mc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-heart"] || "crt-icon-heart"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 955 1000",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M1 532q7 111 75 183 94 80 212 70t190-98q38 49 92 79 113 43 217 3t150-140q30-106 10-199t-78-174q-68-94-174-184-53-49-124-103t-93-57q-13 2-28 12t-35 25-24 20q-264 199-348 357-49 96-42 206z"
            }, [])])
        }
        function qc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-comment-alt"] || "crt-icon-comment-alt"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1179 1000",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M1179 385q0-126-79-233t-215-170-296-62q-122 0-234 39l2-3-357-107q44 59 71 126t31 106l4 38q-106 120-106 266 0 126 79 233t215 169 295 62 296-62 215-169 79-233z"
            }, [])])
        }
        function Wc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-spin1"] || "crt-icon-spin1"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1000 1000",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M496 850c-176 0-331-90-421-226-18-27-33-55-46-85-12-29-21-60-28-92 0 0 0-1 0-1l0 0 0 0c0-1 0-2 0-2 0-7 5-12 11-12l101 0c5 0 10 4 11 9 29 113 109 206 214 253 20 10 41 17 63 23 31 7 62 11 95 11l0 0 0 0 0 0c25 0 50-2 74-7 5-1 10-2 14-3 6-1 10-3 14-4l0 0c5-1 11 1 13 6l51 87c0 0 1 1 1 2 2 6-1 13-7 15-22 7-43 13-65 17-5 1-9 1-13 2-27 5-54 7-82 7l0 0 0 0z m327-114c-5 0-9-2-11-6l-50-87c-3-4-2-10 2-14 29-29 54-63 73-101 4-7 7-14 11-22 19-46 30-97 30-151l0 0 0 0c0-77-22-149-62-209-7-11-15-23-24-33-9-11-18-21-28-31l0 0 0 0 0 0c-4-4-5-10-2-14l50-87c0-1 1-2 2-3 4-5 11-5 16-1 58 52 104 117 134 190 6 15 11 29 15 44 14 46 21 94 21 144 0 108-34 209-92 291-11 16-23 31-37 46-13 14-26 28-41 41l0 0c-1 1-1 1-2 1-2 1-4 2-5 2z m-811-468l0 0c-1 0-2 0-3 0-6-1-10-8-9-14 34-166 149-302 302-366 30-12 61-21 93-28 32-6 66-10 100-10l0 0 0 0c40 0 79 5 117 14 7 1 14 3 22 5 6 2 13 5 20 7 1 0 2 1 3 1 6 3 8 10 4 16l-50 87c-3 5-8 7-13 6-14-4-28-7-42-9-3-1-6-1-8-2-18-2-35-3-53-3l0 0 0 0c-128 0-242 63-311 160-1 0-1 0-1 0-13 19-25 40-35 61-10 21-18 43-24 65-1 6-6 10-11 10l-101 0z"
            }, [])])
        }
        function Hc(t) {
            var e = t.styles
              , o = Object.assign({}, t);
            return delete o.styles,
            F("svg", Object.assign({
                class: [e && e["crt-icon-clone"] || "crt-icon-clone"].join(" "),
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1000 1000",
                width: "24px",
                height: "24px"
            }, o), [F("path", {
                transform: "scale(1,-1) translate(0,-850)",
                d: "M929-61v607q0 8-6 13t-12 5h-607q-8 0-13-5t-5-13v-607q0-7 5-12t13-6h607q7 0 12 6t6 12z m71 607v-607q0-37-26-63t-63-26h-607q-37 0-63 26t-27 63v607q0 37 27 64t63 26h607q37 0 63-26t26-64z m-214 215v-90h-72v90q0 7-5 12t-13 6h-607q-7 0-12-6t-6-12v-607q0-8 6-13t12-5h90v-72h-90q-36 0-63 27t-26 63v607q0 37 26 63t63 26h607q37 0 64-26t26-63z"
            }, [])])
        }
        function Rc(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24"
            }, e), [F("path", {
                d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 11.889c0-.729-.596-1.323-1.329-1.323-.358 0-.681.143-.92.373-.905-.595-2.13-.975-3.485-1.023l.742-2.334 2.008.471-.003.029c0 .596.487 1.082 1.087 1.082.599 0 1.086-.485 1.086-1.082s-.488-1.082-1.087-1.082c-.46 0-.852.287-1.01.69l-2.164-.507c-.094-.023-.191.032-.22.124l-.827 2.603c-1.419.017-2.705.399-3.65 1.012-.237-.219-.552-.356-.9-.356-.732.001-1.328.594-1.328 1.323 0 .485.267.905.659 1.136-.026.141-.043.283-.043.429-.001 1.955 2.404 3.546 5.359 3.546 2.956 0 5.36-1.591 5.36-3.546 0-.137-.015-.272-.038-.405.416-.224.703-.657.703-1.16zm-8.612.908c0-.434.355-.788.791-.788.436 0 .79.353.79.788 0 .434-.355.787-.79.787-.436.001-.791-.352-.791-.787zm4.53 2.335c-.398.396-1.024.589-1.912.589l-.007-.001-.007.001c-.888 0-1.514-.193-1.912-.589-.073-.072-.073-.19 0-.262.072-.072.191-.072.263 0 .325.323.864.481 1.649.481l.007.001.007-.001c.784 0 1.324-.157 1.649-.481.073-.072.19-.072.263 0 .073.072.073.19 0 .262zm-.094-1.547c-.436 0-.79-.353-.79-.787 0-.434.355-.788.79-.788.436 0 .79.353.79.788 0 .434-.354.787-.79.787z"
            }, [])])
        }
        function zc(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                width: "22",
                height: "22",
                viewBox: "0 0 22 22",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ["\n", F("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M16.083 17.9691C18.1541 16.368 19.4877 13.8591 19.4877 11.0388C19.4877 6.20375 15.5682 2.28418 10.7331 2.28418C7.99594 2.28418 5.55215 3.54035 3.94679 5.50764C4.67677 7.49556 6.32532 9.41887 8.61972 12.0957C10.5949 14.4 14.1323 16.7958 16.083 17.9691ZM14.5656 18.9122C13.4081 19.4766 12.1076 19.7934 10.7331 19.7934C5.89809 19.7934 1.97852 15.8738 1.97852 11.0388C1.97852 9.5783 2.33615 8.20134 2.96861 6.9907C4.18725 9.08655 6.10198 11.8993 8.16689 13.6051C9.33489 14.57 10.1099 15.3127 10.7852 15.9598C11.8867 17.0155 12.7226 17.8166 14.5656 18.9122Z",
                fill: "currentColor"
            }, []), "\n", F("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M21.0213 21.0701C22.9031 19.1932 19.8471 13.0783 14.1956 7.41214C8.54401 1.746 2.43705 -1.32577 0.555271 0.55116C-1.32651 2.42809 1.72949 8.54296 7.38104 14.2091C13.0326 19.8752 19.1395 22.947 21.0213 21.0701ZM18.8418 18.885C17.4591 20.2641 12.7325 17.7672 8.28479 13.308C3.83705 8.84878 1.35236 4.11583 2.73508 2.73667C4.1178 1.35751 8.84432 3.85441 13.2921 8.31364C17.7398 12.7729 20.2245 17.5058 18.8418 18.885Z",
                fill: "currentColor"
            }, []), "\n"])
        }
        function Uc(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                width: "21",
                height: "19",
                viewBox: "0 0 21 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ["\n    ", F("path", {
                d: "M21.0002 8.79769C20.9982 8.14999 20.7453 7.52951 20.2967 7.07222C19.8482 6.61493 19.2407 6.35815 18.6073 6.35815C18.0099 6.35956 17.4353 6.59301 16.9998 7.01122C15.2136 5.88377 13.1674 5.25965 11.069 5.20221L12.3022 1.21639L15.6492 2.01954C15.6504 2.51739 15.8321 2.99711 16.1592 3.36592C16.4862 3.73472 16.9353 3.96643 17.4197 4.01621C17.9041 4.06599 18.3893 3.9303 18.7815 3.63542C19.1738 3.34054 19.4452 2.9074 19.5432 2.41975C19.6413 1.9321 19.559 1.42458 19.3123 0.995356C19.0657 0.566136 18.6722 0.245709 18.2079 0.0960165C17.7436 -0.0536755 17.2415 -0.0219794 16.7987 0.184965C16.3559 0.39191 16.0039 0.759407 15.8107 1.21639L12.1407 0.323142C12.0415 0.297508 11.9364 0.312084 11.8475 0.363848C11.7586 0.415613 11.6927 0.500551 11.6636 0.60087L10.2396 5.18718C8.03002 5.18788 5.8626 5.80559 3.97117 6.97367C3.72359 6.75491 3.43452 6.59073 3.12207 6.49143C2.80961 6.39213 2.4805 6.35985 2.15528 6.39657C1.83006 6.43329 1.51573 6.53823 1.23199 6.70486C0.948244 6.87148 0.701202 7.09619 0.506264 7.36493C0.311326 7.63367 0.172695 7.94065 0.0990737 8.26667C0.0254526 8.5927 0.0184008 8.93075 0.0783759 9.25968C0.138351 9.58862 0.264052 9.90135 0.44762 10.1783C0.631188 10.4553 0.868663 10.6906 1.14521 10.8694C1.10518 11.1175 1.08557 11.3686 1.08652 11.62C1.08652 15.1555 5.29237 18.0304 10.4671 18.0304C15.6419 18.0304 19.8551 15.1555 19.8551 11.62C19.8569 11.3938 19.8397 11.1678 19.8037 10.9445C20.1715 10.7274 20.4761 10.4141 20.6864 10.0369C20.8967 9.65961 21.005 9.2319 21.0002 8.79769ZM5.89427 10.4116C5.95387 10.0636 6.13155 9.7483 6.39603 9.5211C6.66051 9.29389 6.99483 9.16934 7.34025 9.16934C7.68566 9.16934 8.02002 9.29389 8.2845 9.5211C8.54898 9.7483 8.72666 10.0636 8.78627 10.4116C8.82323 10.6273 8.81357 10.8488 8.75795 11.0604C8.70233 11.2719 8.60208 11.4685 8.46429 11.6362C8.32649 11.804 8.15451 11.9388 7.96033 12.0314C7.76615 12.1239 7.55447 12.1718 7.34025 12.1718C7.12602 12.1718 6.91439 12.1239 6.72021 12.0314C6.52603 11.9388 6.354 11.804 6.2162 11.6362C6.07841 11.4685 5.9782 11.2719 5.92258 11.0604C5.86696 10.8488 5.8573 10.6273 5.89427 10.4116ZM13.8876 14.6451C13.1536 15.3957 12.0746 15.7185 10.5112 15.7185C8.94039 15.7185 7.8394 15.3657 7.13475 14.6451C7.09611 14.6072 7.06534 14.5618 7.04434 14.5115C7.02334 14.4612 7.01253 14.407 7.01253 14.3523C7.01253 14.2976 7.02334 14.2435 7.04434 14.1932C7.06534 14.1429 7.09611 14.0974 7.13475 14.0596C7.1711 14.0203 7.21491 13.989 7.2635 13.9676C7.31209 13.9462 7.36445 13.9352 7.41735 13.9352C7.47025 13.9352 7.5226 13.9462 7.57119 13.9676C7.61978 13.989 7.66359 14.0203 7.69995 14.0596C8.25045 14.615 9.16793 14.8928 10.5112 14.8928C11.5161 14.9979 12.5217 14.6991 13.3151 14.0596C13.3521 14.0201 13.3965 13.9886 13.4457 13.9671C13.4949 13.9457 13.5479 13.9346 13.6014 13.9346C13.6549 13.9346 13.7078 13.9457 13.757 13.9671C13.8062 13.9886 13.8506 14.0201 13.8876 14.0596C13.9621 14.138 14.0037 14.243 14.0037 14.3523C14.0037 14.4616 13.9621 14.5666 13.8876 14.6451ZM13.6674 11.9128C13.2781 11.9128 12.9047 11.7546 12.6294 11.4731C12.3541 11.1916 12.1994 10.8097 12.1994 10.4116C12.259 10.0636 12.4367 9.7483 12.7011 9.5211C12.9656 9.29389 13.3 9.16934 13.6454 9.16934C13.9908 9.16934 14.3252 9.29389 14.5897 9.5211C14.8541 9.7483 15.0318 10.0636 15.0914 10.4116C15.0916 10.802 14.943 11.1772 14.6771 11.4575C14.4113 11.7378 14.0491 11.9011 13.6674 11.9128Z",
                fill: "currentColor"
            }, []), "\n"])
        }
        function $c(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                width: "32",
                height: "38",
                viewBox: "0 0 32 38",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ["\n    ", F("path", {
                d: "M0.5 3.25488H4.93101V34.7403H0.5V3.25488Z",
                fill: "currentColor"
            }, []), "\n    ", F("path", {
                d: "M27.0892 11.9438H31.5202V34.7428H27.0892V11.9438Z",
                fill: "currentColor"
            }, []), "\n    ", F("path", {
                d: "M0.5 33.6533H31.5201V37.9973H0.5V33.6533Z",
                fill: "currentColor"
            }, []), "\n    ", F("path", {
                d: "M0.5 0H18.2271V4.34397H0.5V0Z",
                fill: "currentColor"
            }, []), "\n    ", F("path", {
                d: "M27.0891 8.6849V4.34245H22.6566V0H18.2256V13.0273H31.5201V8.6849",
                fill: "currentColor"
            }, []), "\n    ", F("path", {
                d: "M27.0892 17.3718V13.0278H31.5202",
                fill: "currentColor"
            }, []), "\n"])
        }
        function Vc(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                width: "31",
                height: "43",
                viewBox: "0 0 31 43",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ["\n    ", F("path", {
                d: "M24.5141 36.2264H0.528302C0.528302 39.566 3.20283 42.2547 6.5283 42.2547H24.5141C27.8255 42.2547 30.5 39.5519 30.5 36.2264V11.434C30.5 11.3208 30.4009 11.2075 30.2877 11.2075H24.7264C24.6132 11.2075 24.5141 11.3066 24.5141 11.434V36.2264ZM24.5141 0C27.8255 0 30.5 2.70283 30.5 6.04245H6.51415V30.8349C6.51415 30.9481 6.41509 31.0613 6.28774 31.0613H0.726415C0.613208 31.0613 0.5 30.9623 0.5 30.8349V6.04245C0.5 2.70283 3.17453 0 6.5 0H24.5141Z",
                fill: "currentColor"
            }, []), "\n"])
        }
        function Gc(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                width: "58",
                height: "35",
                viewBox: "0 0 58 35",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ["\n    ", F("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M28.7326 34.6863C27.9614 34.6391 27.1247 34.6575 26.2465 34.6767C24.3849 34.7176 22.3375 34.7625 20.3355 34.1953C13.0186 32.1819 7.46964 25.8963 7.51875 17.45C7.56785 9.54393 13.9026 2.42353 21.8087 1.24498C26.8175 0.459276 31.8754 0.459276 36.8843 1.19587C44.4466 2.27621 51.076 8.56181 51.4197 17.7447C51.7635 26.2401 43.9556 34.4408 35.4111 34.6863C34.1048 34.7182 32.7778 34.7087 31.296 34.6981L31.2945 34.6981H31.2943H31.2941H31.2938H31.2936C30.4923 34.6924 29.6457 34.6863 28.7326 34.6863ZM50.094 27.271C53.3841 20.9363 53.3841 14.6507 49.9467 8.3651C51.8127 8.3651 56.3305 10.5749 57.2635 11.8025C57.8037 12.5391 58.0001 13.423 58.0001 14.307V21.1327C58.0001 22.6059 57.509 23.8827 56.1832 24.6193C54.6252 25.5035 52.9951 26.3155 51.3856 27.1173L51.3839 27.1181C51.1169 27.2511 50.8505 27.3838 50.5851 27.5165C50.4377 27.4674 50.2413 27.3692 50.094 27.271ZM8.79554 27.1242C5.40721 20.8386 5.65274 14.5039 8.79554 8.07101C6.34023 8.90582 4.03223 9.83884 2.06798 11.3611C1.28228 11.9504 0.938538 12.9325 0.938538 13.9638V21.5261C0.938538 22.3609 1.23318 23.1466 1.72424 23.785C2.60815 24.9145 7.02771 27.026 8.79554 27.1242ZM29.6166 5.81278C30.6133 5.81278 31.6154 5.80734 32.6193 5.8019H32.6194H32.6195C34.6328 5.79097 36.6534 5.78001 38.6521 5.81278C42.286 5.86188 44.4467 7.97345 44.5449 11.5582C44.6431 15.7813 44.594 20.0045 44.5449 24.2276C44.4958 27.616 42.286 29.9731 38.8977 30.0222C32.5629 30.1204 26.1791 30.1204 19.8444 30.0222C16.6034 29.9731 14.3936 27.5668 14.3445 24.3258V24.3258C14.2954 20.0044 14.2463 15.6831 14.3445 11.4109C14.3936 7.92435 16.5543 5.91099 20.09 5.81278H20.581H29.6166ZM32.1211 20.4338C31.4172 20.4392 30.7134 20.4447 30.0095 20.4447C29.3076 20.4447 28.6057 20.4393 27.902 20.4338H27.9018H27.9015C26.4884 20.4229 25.068 20.4119 23.6257 20.4447C23.5133 20.4447 23.3956 20.4395 23.2758 20.4341C22.6623 20.4067 21.9901 20.3767 21.6614 21.034C21.2379 21.7869 21.7614 22.5398 22.1947 23.1631L22.2507 23.2438C24.0676 25.8955 26.8176 26.6812 29.7149 26.6321C32.9068 26.6321 35.9022 25.7482 37.5227 22.6054C38.3084 21.034 38.0629 20.4938 36.3442 20.4447C34.9365 20.412 33.5288 20.4229 32.1211 20.4338ZM22.0541 10.4271C23.38 10.4762 24.6076 11.0655 25.2951 12.4405C25.6389 13.0789 25.6389 13.7172 25.0005 14.1592C24.4112 14.5521 23.871 14.3065 23.4782 13.8646C22.4961 12.5878 21.6122 12.3423 20.63 13.8646C20.2863 14.3556 19.7461 14.6012 19.1568 14.2083C18.5185 13.7664 18.5185 13.128 18.8131 12.4896C19.4515 11.1637 20.4827 10.4762 22.0541 10.4271ZM40.469 12.3914C39.7325 11.0164 38.5539 10.4762 37.1298 10.4271C35.6566 10.4271 34.1834 11.5075 33.8888 12.7351C33.7415 13.3244 33.7906 13.8646 34.3799 14.2083C34.8709 14.5029 35.4111 14.4047 35.7057 13.9628C36.6879 12.4896 37.6209 12.3914 38.7012 13.8646C39.0941 14.3556 39.6833 14.5521 40.2235 14.1101C40.8619 13.6681 40.8128 13.0298 40.469 12.3914Z",
                fill: "currentColor"
            }, []), "\n"])
        }
        function Kc(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                width: "20",
                height: "19",
                viewBox: "0 0 20 19",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ["\n", F("path", {
                d: "M19.6746 6.36585L19.9916 4.66942C20.0496 4.35558 19.7996 4.07143 19.4648 4.07143H16.1253L16.7771 0.597991C16.8352 0.288393 16.5852 0 16.2503 0H14.4377C14.1788 0 13.9556 0.178125 13.9109 0.419866L13.2234 4.07143H8.82137L9.47319 0.597991C9.53122 0.288393 9.27675 0 8.94637 0H7.13378C6.87483 0 6.65161 0.178125 6.60696 0.419866L5.91496 4.07143H2.38352C2.12458 4.07143 1.90136 4.24955 1.85671 4.49129L1.53973 6.18772C1.48169 6.50156 1.7317 6.78571 2.06654 6.78571H5.40601L4.38363 12.2143H0.852193C0.593251 12.2143 0.370024 12.3924 0.325379 12.6342L0.00839801 14.3306C-0.0496408 14.6402 0.200373 14.9286 0.535212 14.9286H3.87467L3.22285 18.402C3.16482 18.7116 3.41483 19 3.74967 19H5.56226C5.82121 19 6.04443 18.8219 6.08908 18.5801L6.77661 14.9286H11.1786L10.5268 18.402C10.4688 18.7158 10.7188 19 11.0536 19H12.8662C13.1252 19 13.3484 18.8219 13.393 18.5801L14.0806 14.9286H17.612C17.871 14.9286 18.0942 14.7504 18.1388 14.5087L18.4558 12.8123C18.5138 12.4984 18.2638 12.2143 17.929 12.2143H14.5895L15.6119 6.78571H19.1433C19.4067 6.78571 19.6255 6.60759 19.6746 6.36585ZM11.6921 12.2143H7.29003L8.31241 6.78571H12.7144L11.6921 12.2143Z",
                fill: "currentColor"
            }, []), "\n"])
        }
        const Yc = {
            46: {
                svg: "instagram-mention"
            },
            47: {
                svg: "instagram-stories"
            },
            34: {
                svg: "instagram-private-account"
            },
            38: {
                svg: "instagram-business-hashtag"
            },
            50: {
                svg: "instagram-business-igtv"
            },
            24: {
                svg: "facebook-visitor"
            },
            21: {
                svg: "twitter-geo-location"
            },
            1: {
                svg: "hashtag"
            },
            25: {
                svg: "twitter-timeline"
            },
            20: {
                svg: "twitter-mention"
            },
            27: {
                svg: "flickr-album"
            },
            9: {
                svg: "hashtag"
            },
            15: {
                svg: "flickr-user"
            },
            11: {
                svg: "hashtag"
            },
            48: {
                svg: "reddit-subreddit-feed"
            },
            49: {
                svg: "reddit-user-feed"
            }
        };
        function Zc(t) {
            let e = t.icon;
            switch (t.sourceTypeId && function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }(Yc, t.sourceTypeId) && (e = "crt-icon-" + Yc[t.sourceTypeId].svg),
            e) {
            case "crt-icon-twitter":
                return cs(Xa, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-twitter-geo-location":
                return cs(Qa, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-twitter-mention":
                return cs(Ja, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-twitter-timeline":
                return cs(tc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-facebook":
                return cs(ec, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-facebook-visitor":
                return cs(oc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-instagram":
                return cs(rc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-instagram-stories":
                return cs(nc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-instagram-mention":
                return cs(sc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-instagram-business-hashtag":
                return cs(ac, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-instagram-business-igtv":
                return cs(cc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-instagram-private-account":
                return cs(ic, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-yelp":
                return cs(lc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-soundcloud":
                return cs(uc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-tiktok":
                return cs(dc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-gplus":
                return cs(hc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-linkedin":
                return cs(pc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-attention-alt":
                return cs(fc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-youtube":
                return cs(gc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-tumblr":
                return cs(mc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-weibo":
                return cs(bc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-slack":
                return cs(vc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-behance":
                return cs(wc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-spotify":
                return cs(yc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-vine":
                return cs(Cc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-pinterest":
                return cs(_c, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-medium":
                return cs(xc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-tripadvisor":
                return cs(Pc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-snapchat-ghost":
                return cs(kc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-flickr":
                return cs(Sc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-flickr-album":
                return cs(Ac, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-flickr-user":
                return cs(Oc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-vimeo":
                return cs(jc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-deviantart":
                return cs(Fc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-rss":
                return cs(Ec, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-cogs":
                return cs(Dc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-right-open-big":
                return cs(Tc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-left-open-big":
                return cs(Nc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-cancel":
                return cs(Lc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-right-open":
                return cs(Bc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-left-open":
                return cs(Ic, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-heart":
                return cs(Mc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-comment-alt":
                return cs(qc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-spin1":
                return cs(Wc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-clone":
                return cs(Hc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-reddit":
                return cs(Rc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-reddit-subreddit-feed":
                return cs(zc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-reddit-user-feed":
                return cs(Uc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-giphy":
                return cs($c, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-glassdoor":
                return cs(Vc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-diffbot":
                return cs(Gc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-hashtag":
                return cs(Kc, {
                    width: t.width,
                    height: t.height,
                    fill: t.color
                });
            case "crt-icon-none":
            case "crt-icon-unknown":
                return null;
            default:
                return cs("i", {
                    className: t.icon
                })
            }
        }
        function Xc(t) {
            const e = []
              , o = ki()
              , r = o.config.get("filter.showAll")
              , n = o.config.get("filter.showNetworks");
            if (!n)
                return null;
            if (r && e.push(cs("li", {
                className: 0 === t.selectedNetwork ? "active" : "",
                children: cs("a", {
                    href: "#",
                    onClick: e=>t.onNetworkClick(e, 0),
                    children: "All"
                })
            })),
            n)
                for (const o of t.networks) {
                    const r = Za.findById(o);
                    r && e.push(cs("li", {
                        className: r.id === t.selectedNetwork ? "active" : "",
                        children: cs("a", {
                            href: "#",
                            onClick: e=>t.onNetworkClick(e, r),
                            children: [cs(Zc, {
                                icon: r.icon
                            }), r.name]
                        })
                    }))
                }
            return cs("div", {
                className: "crt-filter-networks",
                children: cs("ul", {
                    className: "crt-networks",
                    children: [cs("li", {
                        className: "crt-filter-label",
                        children: cs("label", {
                            children: [Hi("filter-network"), ":"]
                        })
                    }), e]
                })
            })
        }
        function Qc(t) {
            const e = []
              , o = ki()
              , r = o.config.get("filter.showAll");
            if (!o.config.get("filter.showSources"))
                return null;
            r && e.push(cs("li", {
                className: 0 === t.selectedSource ? "active" : "",
                children: cs("a", {
                    href: "#",
                    onClick: e=>t.onSourceClick(e, 0),
                    children: "All"
                })
            }));
            for (const o of t.sources) {
                const r = Za.findById(o.network_id);
                r && e.push(cs("li", {
                    className: o.id === t.selectedSource ? "active" : "",
                    children: cs("a", {
                        href: "#",
                        "data-network": o.id,
                        onClick: e=>t.onSourceClick(e, o),
                        children: [cs(Zc, {
                            icon: r.icon,
                            sourceTypeId: o.source_type_id
                        }), o.name]
                    })
                }))
            }
            return cs("div", {
                className: "crt-filter-sources",
                children: cs("ul", {
                    className: "crt-sources",
                    children: [cs("li", {
                        className: "crt-filter-label",
                        children: cs("label", {
                            children: [Hi("filter-source"), ":"]
                        })
                    }), e]
                })
            })
        }
        class Jc extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "onPostsLoaded", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t=>{
                        const e = t.networks
                          , o = t.sources;
                        this.setState({
                            networks: e,
                            sources: o
                        })
                    }
                }),
                Object.defineProperty(this, "onSourceClick", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: (t,e)=>{
                        t.preventDefault();
                        const o = "number" == typeof e ? e : e.id;
                        this.context.filterService.triggerOnFilterChanged({
                            sourceId: o,
                            networkId: 0
                        }),
                        this.setState({
                            selectedNetwork: 0,
                            selectedSource: o
                        })
                    }
                }),
                Object.defineProperty(this, "onNetworkClick", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: (t,e)=>{
                        t.preventDefault();
                        const o = "number" == typeof e ? e : e.id;
                        this.context.filterService.triggerOnFilterChanged({
                            sourceId: 0,
                            networkId: o
                        }),
                        this.setState({
                            selectedNetwork: o,
                            selectedSource: 0
                        })
                    }
                }),
                this.state = {
                    playing: !1,
                    networks: [],
                    sources: [],
                    selectedSource: 0,
                    selectedNetwork: 0
                }
            }
            checkDefaultFilter() {
                const t = this.context.config.get("filter.default");
                if (t)
                    if (isNaN(t)) {
                        if (t.includes("all_")) {
                            const e = t.replace("all_", "");
                            this.context.filterService.triggerOnFilterChanged({
                                sourceId: 0,
                                networkId: e
                            }),
                            this.setState({
                                selectedNetwork: parseInt(e),
                                selectedSource: 0
                            })
                        }
                    } else
                        this.context.filterService.triggerOnFilterChanged({
                            sourceId: t,
                            networkId: 0
                        }),
                        this.setState({
                            selectedNetwork: 0,
                            selectedSource: parseInt(t)
                        })
            }
            componentDidMount() {
                this.context.events.on(is.FEED_LOADED, this.onPostsLoaded),
                this.context.filterService.registerCheckDefaultFilter(this.checkDefaultFilter.bind(this))
            }
            componentWillUnmount() {
                this.context.events.off(is.FEED_LOADED, this.onPostsLoaded)
            }
            render(t, e) {
                const o = this.context.config.get("filter.showNetworks")
                  , r = this.context.config.get("filter.showSources");
                if (o || r)
                    return cs("div", {
                        className: "crt-filter",
                        children: [cs(Xc, {
                            selectedNetwork: e.selectedNetwork,
                            networks: e.networks,
                            onNetworkClick: this.onNetworkClick
                        }), cs(Qc, {
                            selectedSource: e.selectedSource,
                            sources: e.sources,
                            onSourceClick: this.onSourceClick
                        })]
                    })
            }
        }
        function tl(t) {
            const e = t.post;
            let o = `crt-icon-${e.network_name.toLowerCase()}`;
            return qi(e) || e.network_id || (o = "crt-icon-none"),
            cs("span", {
                className: "crt-social-icon",
                role: "link",
                tabIndex: 0,
                "aria-label": e.network_name,
                ref: t.cRef,
                children: cs(Zc, {
                    icon: o
                })
            })
        }
        function el(t) {
            return t.user_image && "https://cdn.curator.io/0.gif" !== t.user_image
        }
        function ol({post: t, cRef: e}) {
            const [o,r] = ai(!1);
            if (!qi(t))
                return null;
            if (!el(t))
                return null;
            const n = Hi("alt-profile-image", {
                userName: t.user_full_name
            });
            return o ? null : cs("img", {
                className: "crt-post-userimage",
                "aria-label": n,
                tabIndex: 0,
                ref: e,
                src: t.user_image,
                alt: n,
                onError: ()=>{
                    r(!0)
                }
            })
        }
        Object.defineProperty(Jc, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Pi
        });
        class rl extends T {
            render(t) {
                const e = t.post;
                if (!qi(e))
                    return cs(D, {});
                let o = "";
                if (e.spots) {
                    for (let t = 0; t < e.spots.length; t++) {
                        const r = e.spots[t].label;
                        let n = e.spots[t].url;
                        "" !== r && ("" !== n ? (-1 === n.indexOf("http") && (n = `http://${n}`),
                        o += `<a href="${n}" target='_blank'>${r}</a>, `) : o += `${r}, `)
                    }
                    o = o.replace(/,\s*$/, "")
                }
                return cs(D, {
                    children: o && cs("div", {
                        className: "crt-popup-post-spots-content",
                        dangerouslySetInnerHTML: {
                            __html: "In this photo: " + o
                        }
                    })
                })
            }
        }
        const nl = function(t) {
            return 13 === (t.keyCode || t.which)
        }
          , sl = function(t) {
            return 9 === (t.keyCode || t.which)
        };
        function il({...t}) {
            return cs("div", {
                ...t,
                children: cs("svg", {
                    class: "loading-image-svg",
                    xmlSpace: "preserve",
                    viewBox: "0 0 100 100",
                    y: "0",
                    x: "0",
                    xmlns: "http://www.w3.org/2000/svg",
                    id: "Layer_1",
                    version: "1.1",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    children: [cs("g", {
                        class: "ldl-scale",
                        style: "transform-origin:50% 50%;transform:rotate(0deg) scale(0.6, 0.6);"
                    }), cs("circle", {
                        class: "dot-1",
                        fill: "#d65a62",
                        r: "10",
                        cy: "50",
                        cx: "20",
                        style: "fill:rgb(204, 204, 204);"
                    }), cs("circle", {
                        class: "dot-2",
                        fill: "#ea7c60",
                        r: "10",
                        cy: "50",
                        cx: "50",
                        style: "fill:rgb(204, 204, 204);"
                    }), cs("circle", {
                        class: "dot-3",
                        fill: "#f0af6b",
                        r: "10",
                        cy: "50",
                        cx: "80",
                        style: "fill:rgb(204, 204, 204);"
                    })]
                })
            })
        }
        function al(t) {
            const e = t.post
              , [o,r] = ai({
                currentImage: t.post.image,
                currentIndex: 0
            })
              , [n,s] = ai(!1)
              , i = 400
              , a = ui();
            li((()=>{
                r({
                    currentImage: t.post.image,
                    currentIndex: 0
                })
            }
            ), [t.post.image]);
            const c = (e,o=0)=>{
                e.preventDefault(),
                r({
                    currentImage: t.post.images[o].url,
                    currentIndex: o
                })
            }
              , l = e.images && e.images.length > 1 ? e.images.map(((t,e)=>cs("li", {
                className: e === o.currentIndex ? "selected" : "",
                children: cs("a", {
                    onClick: t=>c(t, e),
                    onKeyPress: t=>{
                        nl(t) && c(t, e)
                    }
                    ,
                    tabIndex: 0,
                    children: " "
                })
            }))) : void 0;
            return cs("div", {
                children: [cs("div", {
                    className: "crt-image crt-popup-images",
                    style: {
                        minWidth: n ? "auto" : i,
                        minHeight: n ? "auto" : i
                    },
                    children: [!n && cs(il, {
                        className: "crt-popup-background-image",
                        width: i,
                        height: i
                    }), cs("img", {
                        ref: a,
                        style: {
                            opacity: n ? 1 : 0
                        },
                        src: o.currentImage,
                        onLoad: ()=>{
                            s(!0)
                        }
                        ,
                        alt: $i(e),
                        tabIndex: 0,
                        "aria-label": $i(e)
                    })]
                }), cs("div", {
                    className: "crt-pagination",
                    children: cs("ul", {
                        children: l
                    })
                })]
            })
        }
        const cl = class {
            constructor() {
                Object.defineProperty(this, "listeners", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }),
                Object.defineProperty(this, "alive", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !0
                }),
                this.listeners = {}
            }
            on(t, e, o) {
                let r = [];
                const n = arguments.length;
                for (let t = 0; t < n; t += 1)
                    r.push(arguments[t]);
                r = r.length > 3 ? r.splice(3, r.length - 1) : [],
                void 0 !== this.listeners[t] ? this.listeners[t].push({
                    scope: o,
                    callback: e,
                    args: r
                }) : this.listeners[t] = [{
                    scope: o,
                    callback: e,
                    args: r
                }]
            }
            off(t, e, o) {
                if (void 0 !== this.listeners[t]) {
                    const r = this.listeners[t].length
                      , n = [];
                    for (let s = 0; s < r; s += 1) {
                        const r = this.listeners[t][s];
                        r.scope === o && r.callback === e || n.push(r)
                    }
                    this.listeners[t] = n
                }
            }
            has(t, e, o) {
                if (void 0 !== this.listeners[t]) {
                    const r = this.listeners[t].length;
                    if (void 0 === e && void 0 === o)
                        return r > 0;
                    for (let n = 0; n < r; n += 1) {
                        const r = this.listeners[t][n];
                        if ((!o || r.scope === o) && r.callback === e)
                            return !0
                    }
                }
                return !1
            }
            trigger(t, ...e) {
                let o = 0;
                if (void 0 !== this.listeners[t]) {
                    const r = this.listeners[t].length;
                    for (let n = 0; n < r; n += 1) {
                        const r = this.listeners[t][n];
                        if (r && r.callback) {
                            const t = e.concat(r.args);
                            r.callback.apply(r.scope, t),
                            o += 1
                        }
                    }
                }
                return o
            }
            getEvents() {
                let t = "";
                for (const e in this.listeners)
                    if (Object.prototype.hasOwnProperty.call(this.listeners, e)) {
                        const o = this.listeners[e].length;
                        for (let r = 0; r < o; r += 1) {
                            const o = this.listeners[e][r];
                            t += o.scope && o.scope.className ? o.scope.className : "anonymous",
                            t += ` listen for '${e}'\n`
                        }
                    }
                return t
            }
            destroy() {
                this.listeners = {},
                this.alive = !1
            }
        }
        ;
        class ll extends cl {
            constructor(t) {
                super(),
                Object.defineProperty(this, "_videoPlaying", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_alive", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "element", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                this.element = t,
                this._videoPlaying = !1,
                this._alive = !0,
                this.onPause = this.onPause.bind(this),
                this.onPlay = this.onPlay.bind(this),
                this.onData = this.onData.bind(this),
                this.onMetaData = this.onMetaData.bind(this),
                this.element.addEventListener("loadedmetadata", this.onMetaData),
                this.element.addEventListener("loadeddata", this.onData),
                this.element.addEventListener("play", this.onPlay),
                this.element.addEventListener("pause", this.onPause)
            }
            play() {
                const t = this.element.play();
                void 0 !== t && t.catch((()=>{
                    console.error("Video failed to play")
                }
                ))
            }
            pause() {
                this.element.pause()
            }
            playPause() {
                this._videoPlaying ? this.pause() : this.play()
            }
            isPlaying() {
                return this._videoPlaying
            }
            onMetaData() {
                const t = this.element.videoWidth
                  , e = this.element.videoHeight;
                Yn(this.element, t === e ? "aspect-square" : t > e ? "aspect-landscape" : "aspect-portrait")
            }
            onData() {}
            onPlay() {
                this._videoPlaying = !0,
                this.trigger("state:changed", this._videoPlaying)
            }
            onPause() {
                this._alive ? (this._videoPlaying = !1,
                this.trigger("state:changed", this._videoPlaying)) : console.log("onPause on destroyed")
            }
            destroy() {
                this._alive = !1,
                this.element.removeEventListener("loadedmetadata", this.onMetaData),
                this.element.removeEventListener("loadeddata", this.onData),
                this.element.removeEventListener("play", this.onPlay),
                this.element.removeEventListener("pause", this.onPause),
                this._videoPlaying && this.element.pause(),
                super.destroy()
            }
        }
        let ul = {};
        const dl = {
            create: function(t) {
                ul = t
            },
            set: function(t, e) {
                Gs(ul, t, e)
            },
            get: function(t="", e) {
                return "" === t ? vr(ul) : $s(ul, t, e)
            }
        }
          , hl = dl;
        class pl extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "player", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "videoPlayer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "playerType", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: ""
                }),
                this.state = {
                    playing: !1
                }
            }
            onPlay() {
                this.videoPlayer && this.videoPlayer.playPause()
            }
            componentDidMount() {
                "inline" === this.playerType && (this.videoPlayer = new ll(this.player.current),
                this.videoPlayer.on("state:changed", (t=>{
                    this.setState({
                        playing: t
                    })
                }
                )),
                hl.get("popup.autoPlayVideos", !1) && this.videoPlayer.play())
            }
            componentWillUnmount() {
                this.videoPlayer && (this.videoPlayer.pause(),
                this.videoPlayer.destroy())
            }
            render(t, e) {
                const o = t.post
                  , r = ["crt-video"];
                let n;
                if (e.playing && r.push("crt-video-playing"),
                o.video)
                    if (r.push("has-video"),
                    o.video && o.video.indexOf("youtu") >= 0) {
                        const t = Ln.youtubeVideoId(o.video);
                        this.playerType = "youtube",
                        r.push("crt-has-video-youtube"),
                        n = cs("div", {
                            className: "crt-responsive-video fitvidsignore",
                            children: cs("iframe", {
                                id: "ytplayer",
                                src: `https://www.youtube.com/embed/${t}?autoplay=0&rel=0&showinfo`,
                                frameBorder: "0",
                                allowFullScreen: !0
                            })
                        })
                    } else if (o.video && o.video.indexOf("vimeo") >= 0) {
                        const t = Ln.vimeoVideoId(o.video);
                        t ? (this.playerType = "vimeo",
                        r.push("crt-has-video-vimeo"),
                        n = cs("div", {
                            className: "crt-responsive-video fitvidsignore",
                            children: cs("iframe", {
                                src: `https://player.vimeo.com/video/${t}?color=ffffff&title=0&byline=0&portrait=0`,
                                frameBorder: "0",
                                allowFullScreen: !0
                            })
                        })) : n = cs("div", {
                            children: "Could not find Vimeo ID"
                        })
                    } else
                        this.playerType = "inline",
                        n = cs("div", {
                            class: "popup-video-container",
                            children: [cs(il, {
                                className: "crt-popup-background-image",
                                width: 400,
                                height: 400
                            }), cs("img", {
                                src: o.image,
                                alt: $i(o)
                            }), cs("video", {
                                preload: "none",
                                ref: this.player,
                                style: {
                                    display: e.playing ? "block" : "none"
                                },
                                poster: o.image,
                                children: cs("source", {
                                    src: o.video,
                                    type: "video/mp4"
                                })
                            }), cs("a", {
                                onClick: ()=>this.onPlay(),
                                className: "crt-play",
                                children: cs("i", {
                                    className: "crt-play-icon",
                                    style: {
                                        display: e.playing ? "none" : "block"
                                    }
                                })
                            })]
                        });
                return cs("div", {
                    className: r.join(" "),
                    style: "display:block",
                    children: cs("div", {
                        className: "crt-video-container",
                        style: "position:relative",
                        tabIndex: 0,
                        onKeyPress: t=>{
                            nl(t) && this.onPlay()
                        }
                        ,
                        children: n
                    })
                })
            }
        }
        function fl(t) {
            const e = ki()
              , o = t.post;
            let r, n = qi(t.post) ? o.source_created_at : o.created_at;
            n = Vi(n),
            r = qi(t.post) ? e.config.get("post.clickAction") : o.click_action;
            const s = o.url
              , i = t.tag ? t.tag : "span"
              , a = !(!t.className || !t.className.includes("hide"));
            return cs(i, s && "nothing" !== r ? {
                className: `crt-post-date ${t.className}`,
                ref: t.cRef,
                children: cs("a", {
                    href: s,
                    target: "_blank",
                    className: "crt-post-date-link",
                    "aria-hidden": a,
                    tabIndex: a ? -1 : 0,
                    children: n
                })
            } : {
                className: `crt-post-date ${t.className}`,
                ref: t.cRef,
                children: cs("span", {
                    className: "crt-post-date-link",
                    children: n
                })
            })
        }
        var gl = function() {
            if ("undefined" != typeof Map)
                return Map;
            function t(t, e) {
                var o = -1;
                return t.some((function(t, r) {
                    return t[0] === e && (o = r,
                    !0)
                }
                )),
                o
            }
            return function() {
                function e() {
                    this.__entries__ = []
                }
                return Object.defineProperty(e.prototype, "size", {
                    get: function() {
                        return this.__entries__.length
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                e.prototype.get = function(e) {
                    var o = t(this.__entries__, e)
                      , r = this.__entries__[o];
                    return r && r[1]
                }
                ,
                e.prototype.set = function(e, o) {
                    var r = t(this.__entries__, e);
                    ~r ? this.__entries__[r][1] = o : this.__entries__.push([e, o])
                }
                ,
                e.prototype.delete = function(e) {
                    var o = this.__entries__
                      , r = t(o, e);
                    ~r && o.splice(r, 1)
                }
                ,
                e.prototype.has = function(e) {
                    return !!~t(this.__entries__, e)
                }
                ,
                e.prototype.clear = function() {
                    this.__entries__.splice(0)
                }
                ,
                e.prototype.forEach = function(t, e) {
                    void 0 === e && (e = null);
                    for (var o = 0, r = this.__entries__; o < r.length; o++) {
                        var n = r[o];
                        t.call(e, n[1], n[0])
                    }
                }
                ,
                e
            }()
        }()
          , ml = "undefined" != typeof window && "undefined" != typeof document && window.document === document
          , bl = void 0 !== o.g && o.g.Math === Math ? o.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")()
          , vl = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(bl) : function(t) {
            return setTimeout((function() {
                return t(Date.now())
            }
            ), 1e3 / 60)
        }
        ;
        var wl = ["top", "right", "bottom", "left", "width", "height", "size", "weight"]
          , yl = "undefined" != typeof MutationObserver
          , Cl = function() {
            function t() {
                this.connected_ = !1,
                this.mutationEventsAdded_ = !1,
                this.mutationsObserver_ = null,
                this.observers_ = [],
                this.onTransitionEnd_ = this.onTransitionEnd_.bind(this),
                this.refresh = function(t, e) {
                    var o = !1
                      , r = !1
                      , n = 0;
                    function s() {
                        o && (o = !1,
                        t()),
                        r && a()
                    }
                    function i() {
                        vl(s)
                    }
                    function a() {
                        var t = Date.now();
                        if (o) {
                            if (t - n < 2)
                                return;
                            r = !0
                        } else
                            o = !0,
                            r = !1,
                            setTimeout(i, e);
                        n = t
                    }
                    return a
                }(this.refresh.bind(this), 20)
            }
            return t.prototype.addObserver = function(t) {
                ~this.observers_.indexOf(t) || this.observers_.push(t),
                this.connected_ || this.connect_()
            }
            ,
            t.prototype.removeObserver = function(t) {
                var e = this.observers_
                  , o = e.indexOf(t);
                ~o && e.splice(o, 1),
                !e.length && this.connected_ && this.disconnect_()
            }
            ,
            t.prototype.refresh = function() {
                this.updateObservers_() && this.refresh()
            }
            ,
            t.prototype.updateObservers_ = function() {
                var t = this.observers_.filter((function(t) {
                    return t.gatherActive(),
                    t.hasActive()
                }
                ));
                return t.forEach((function(t) {
                    return t.broadcastActive()
                }
                )),
                t.length > 0
            }
            ,
            t.prototype.connect_ = function() {
                ml && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_),
                window.addEventListener("resize", this.refresh),
                yl ? (this.mutationsObserver_ = new MutationObserver(this.refresh),
                this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })) : (document.addEventListener("DOMSubtreeModified", this.refresh),
                this.mutationEventsAdded_ = !0),
                this.connected_ = !0)
            }
            ,
            t.prototype.disconnect_ = function() {
                ml && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_),
                window.removeEventListener("resize", this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh),
                this.mutationsObserver_ = null,
                this.mutationEventsAdded_ = !1,
                this.connected_ = !1)
            }
            ,
            t.prototype.onTransitionEnd_ = function(t) {
                var e = t.propertyName
                  , o = void 0 === e ? "" : e;
                wl.some((function(t) {
                    return !!~o.indexOf(t)
                }
                )) && this.refresh()
            }
            ,
            t.getInstance = function() {
                return this.instance_ || (this.instance_ = new t),
                this.instance_
            }
            ,
            t.instance_ = null,
            t
        }()
          , _l = function(t, e) {
            for (var o = 0, r = Object.keys(e); o < r.length; o++) {
                var n = r[o];
                Object.defineProperty(t, n, {
                    value: e[n],
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                })
            }
            return t
        }
          , xl = function(t) {
            return t && t.ownerDocument && t.ownerDocument.defaultView || bl
        }
          , Pl = Fl(0, 0, 0, 0);
        function kl(t) {
            return parseFloat(t) || 0
        }
        function Sl(t) {
            for (var e = [], o = 1; o < arguments.length; o++)
                e[o - 1] = arguments[o];
            return e.reduce((function(e, o) {
                return e + kl(t["border-" + o + "-width"])
            }
            ), 0)
        }
        function Al(t) {
            var e = t.clientWidth
              , o = t.clientHeight;
            if (!e && !o)
                return Pl;
            var r = xl(t).getComputedStyle(t)
              , n = function(t) {
                for (var e = {}, o = 0, r = ["top", "right", "bottom", "left"]; o < r.length; o++) {
                    var n = r[o]
                      , s = t["padding-" + n];
                    e[n] = kl(s)
                }
                return e
            }(r)
              , s = n.left + n.right
              , i = n.top + n.bottom
              , a = kl(r.width)
              , c = kl(r.height);
            if ("border-box" === r.boxSizing && (Math.round(a + s) !== e && (a -= Sl(r, "left", "right") + s),
            Math.round(c + i) !== o && (c -= Sl(r, "top", "bottom") + i)),
            !function(t) {
                return t === xl(t).document.documentElement
            }(t)) {
                var l = Math.round(a + s) - e
                  , u = Math.round(c + i) - o;
                1 !== Math.abs(l) && (a -= l),
                1 !== Math.abs(u) && (c -= u)
            }
            return Fl(n.left, n.top, a, c)
        }
        var Ol = "undefined" != typeof SVGGraphicsElement ? function(t) {
            return t instanceof xl(t).SVGGraphicsElement
        }
        : function(t) {
            return t instanceof xl(t).SVGElement && "function" == typeof t.getBBox
        }
        ;
        function jl(t) {
            return ml ? Ol(t) ? function(t) {
                var e = t.getBBox();
                return Fl(0, 0, e.width, e.height)
            }(t) : Al(t) : Pl
        }
        function Fl(t, e, o, r) {
            return {
                x: t,
                y: e,
                width: o,
                height: r
            }
        }
        var El = function() {
            function t(t) {
                this.broadcastWidth = 0,
                this.broadcastHeight = 0,
                this.contentRect_ = Fl(0, 0, 0, 0),
                this.target = t
            }
            return t.prototype.isActive = function() {
                var t = jl(this.target);
                return this.contentRect_ = t,
                t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
            }
            ,
            t.prototype.broadcastRect = function() {
                var t = this.contentRect_;
                return this.broadcastWidth = t.width,
                this.broadcastHeight = t.height,
                t
            }
            ,
            t
        }()
          , Dl = function(t, e) {
            var o = function(t) {
                var e = t.x
                  , o = t.y
                  , r = t.width
                  , n = t.height
                  , s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object
                  , i = Object.create(s.prototype);
                return _l(i, {
                    x: e,
                    y: o,
                    width: r,
                    height: n,
                    top: o,
                    right: e + r,
                    bottom: n + o,
                    left: e
                }),
                i
            }(e);
            _l(this, {
                target: t,
                contentRect: o
            })
        }
          , Tl = function() {
            function t(t, e, o) {
                if (this.activeObservations_ = [],
                this.observations_ = new gl,
                "function" != typeof t)
                    throw new TypeError("The callback provided as parameter 1 is not a function.");
                this.callback_ = t,
                this.controller_ = e,
                this.callbackCtx_ = o
            }
            return t.prototype.observe = function(t) {
                if (!arguments.length)
                    throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(t instanceof xl(t).Element))
                        throw new TypeError('parameter 1 is not of type "Element".');
                    var e = this.observations_;
                    e.has(t) || (e.set(t, new El(t)),
                    this.controller_.addObserver(this),
                    this.controller_.refresh())
                }
            }
            ,
            t.prototype.unobserve = function(t) {
                if (!arguments.length)
                    throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(t instanceof xl(t).Element))
                        throw new TypeError('parameter 1 is not of type "Element".');
                    var e = this.observations_;
                    e.has(t) && (e.delete(t),
                    e.size || this.controller_.removeObserver(this))
                }
            }
            ,
            t.prototype.disconnect = function() {
                this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this)
            }
            ,
            t.prototype.gatherActive = function() {
                var t = this;
                this.clearActive(),
                this.observations_.forEach((function(e) {
                    e.isActive() && t.activeObservations_.push(e)
                }
                ))
            }
            ,
            t.prototype.broadcastActive = function() {
                if (this.hasActive()) {
                    var t = this.callbackCtx_
                      , e = this.activeObservations_.map((function(t) {
                        return new Dl(t.target,t.broadcastRect())
                    }
                    ));
                    this.callback_.call(t, e, t),
                    this.clearActive()
                }
            }
            ,
            t.prototype.clearActive = function() {
                this.activeObservations_.splice(0)
            }
            ,
            t.prototype.hasActive = function() {
                return this.activeObservations_.length > 0
            }
            ,
            t
        }()
          , Nl = "undefined" != typeof WeakMap ? new WeakMap : new gl
          , Ll = function t(e) {
            if (!(this instanceof t))
                throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
            var o = Cl.getInstance()
              , r = new Tl(e,o,this);
            Nl.set(this, r)
        };
        ["observe", "unobserve", "disconnect"].forEach((function(t) {
            Ll.prototype[t] = function() {
                var e;
                return (e = Nl.get(this))[t].apply(e, arguments)
            }
        }
        ));
        const Bl = void 0 !== bl.ResizeObserver ? bl.ResizeObserver : Ll;
        const Il = function() {
            return bt.Date.now()
        };
        var Ml = Math.max
          , ql = Math.min;
        const Wl = function(t, e, o) {
            var r, n, s, i, a, c, l = 0, u = !1, d = !1, h = !0;
            if ("function" != typeof t)
                throw new TypeError("Expected a function");
            function p(e) {
                var o = r
                  , s = n;
                return r = n = void 0,
                l = e,
                i = t.apply(s, o)
            }
            function f(t) {
                return l = t,
                a = setTimeout(m, e),
                u ? p(t) : i
            }
            function g(t) {
                var o = t - c;
                return void 0 === c || o >= e || o < 0 || d && t - l >= s
            }
            function m() {
                var t = Il();
                if (g(t))
                    return b(t);
                a = setTimeout(m, function(t) {
                    var o = e - (t - c);
                    return d ? ql(o, s - (t - l)) : o
                }(t))
            }
            function b(t) {
                return a = void 0,
                h && r ? p(t) : (r = n = void 0,
                i)
            }
            function v() {
                var t = Il()
                  , o = g(t);
                if (r = arguments,
                n = this,
                c = t,
                o) {
                    if (void 0 === a)
                        return f(c);
                    if (d)
                        return clearTimeout(a),
                        a = setTimeout(m, e),
                        p(c)
                }
                return void 0 === a && (a = setTimeout(m, e)),
                i
            }
            return e = Ra(e) || 0,
            Ot(o) && (u = !!o.leading,
            s = (d = "maxWait"in o) ? Ml(Ra(o.maxWait) || 0, e) : s,
            h = "trailing"in o ? !!o.trailing : h),
            v.cancel = function() {
                void 0 !== a && clearTimeout(a),
                l = 0,
                r = c = n = a = void 0
            }
            ,
            v.flush = function() {
                return void 0 === a ? i : b(Il())
            }
            ,
            v
        };
        class Hl {
            constructor(t, e, o=100) {
                Object.defineProperty(this, "ro", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                });
                const r = Wl(t, o);
                this.ro = new Bl((t=>{
                    t.length > 0 && r()
                }
                )),
                this.ro.observe(e)
            }
            disconnect() {
                this.ro?.disconnect()
            }
        }
        function Rl(t, e, o=100) {
            return new Hl(t,e)
        }
        const zl = function(t) {
            return br(t, 4)
        }
          , Ul = function(t) {
            const e = zl(t);
            e.url = Ss.postUrl(t),
            e.cleanText = Ln.filterHtml(t.text),
            0 !== e.url.indexOf("http") && (e.url = e.image);
            {
                const t = "https://www.facebook.com/sharer/sharer.php?u={{url}}&d={{cleanText}}"
                  , o = Ss.tinyparser(t, e);
                Ss.popup(o, "twitter", 600, 430, 0)
            }
        }
          , $l = function(t) {
            const e = zl(t);
            e.url = Ss.postUrl(t),
            e.cleanText = Ln.filterHtml(t.text);
            const o = Ss.tinyparser("http://twitter.com/share?url={{url}}&text={{cleanText}}&hashtags={{hashtags}}", e);
            Ss.popup(o, "twitter", 600, 430, 0)
        };
        function Vl(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                width: "18",
                height: "15",
                viewBox: "0 0 18 15",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ["\n  ", F("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M9.65875 0.821899V13.0736L17.2182 6.94777L9.65875 0.821899Z",
                fill: "currentColor"
            }, []), "\n  ", F("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M0.138031 13.1146C0.138031 8.46583 3.7997 4.60382 10.2833 4.60382V9.39066C10.2833 9.39066 6.07325 8.10554 1.03012 13.1146C0.76259 13.1439 0.138031 13.1146 0.138031 13.1146Z",
                fill: "currentColor"
            }, []), "\n"])
        }
        function Gl(t) {
            if (!qi(t.post))
                return null;
            const e = t.post
              , o = hi(Pi);
            if (!o.config.get("post.showShare"))
                return null;
            const r = Xn((()=>{
                Ul(e),
                o.tracker.track("share:twitter")
            }
            ))
              , n = Xn((()=>{
                $l(e),
                o.tracker.track("share:twitter")
            }
            ));
            return cs("div", {
                className: "crt-post-share",
                ref: t.cRef,
                children: [cs("span", {
                    className: "crt-share-hint"
                }), cs("a", {
                    className: "crt-share-button",
                    role: "link",
                    children: cs(Vl, {})
                }), cs("div", {
                    className: "crt-popup-share-icon-container",
                    children: [cs("p", {
                        children: "Share"
                    }), cs("div", {
                        className: "crt-popup-share-icon-container-icons",
                        children: [cs("a", {
                            className: "crt-share-facebook",
                            role: "link",
                            onClick: r,
                            tabIndex: 0,
                            "aria-label": "Share to facebook",
                            children: cs(ec, {})
                        }), cs("a", {
                            className: "crt-share-twitter",
                            role: "link",
                            onClick: n,
                            tabIndex: 0,
                            "aria-label": "Share to twitter",
                            children: cs(Xa, {})
                        })]
                    })]
                })]
            })
        }
        function Kl(t) {
            if (!qi(t.post))
                return null;
            const e = t.post;
            return cs("div", {
                className: "crt-popup-footer",
                onKeyDown: t.onKeyDown,
                ref: t.footerRef,
                children: [cs("div", {
                    className: "crt-popup-stats",
                    tabIndex: 0,
                    children: [cs("span", {
                        children: e.likes
                    }), " ", Hi("likes", e.likes), " ", cs("i", {
                        className: "sep"
                    }), " ", cs("span", {
                        children: e.comments
                    }), " ", Hi("comments", e.comments)]
                }), cs(Gl, {
                    post: e
                })]
            })
        }
        function Yl(t) {
            const e = t.post;
            let o = Gi(e);
            const r = ki().config.get("post.maxLines");
            let n = "crt-post-text"
              , s = "";
            return r && !t.noMaxLines && (n += " with-max-lines",
            s = "-webkit-line-clamp: " + r + "; "),
            25 === e.network_id && (o = o.replace(/(?:^<blockquote[^>]*>)/, ""),
            o = o.replace(/<\/blockquote>/, "")),
            3 === e.network_id && qi(e) && e.is_embed ? cs("div", {
                className: "crt-post-text-embed-container",
                children: [cs("div", {
                    className: n,
                    style: s,
                    dangerouslySetInnerHTML: {
                        __html: o
                    }
                }), cs("div", {
                    className: "crt-post-text-embed-wrapper"
                })]
            }) : cs("div", {
                className: n,
                style: s,
                dangerouslySetInnerHTML: {
                    __html: o
                }
            })
        }
        function Zl(t) {
            const e = Gi(t.post);
            return li((()=>{
                const t = document.getElementById("tiktok-embed-script");
                t && t.remove();
                const e = document.createElement("script")
                  , o = new Date;
                e.setAttribute("src", "https://www.tiktok.com/embed.js?v=" + o.getTime()),
                e.id = "tiktok-embed-script",
                document.body.appendChild(e)
            }
            ), []),
            cs("div", {
                class: "popup-tiktok-embed",
                dangerouslySetInnerHTML: {
                    __html: e
                }
            })
        }
        class Xl extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "re", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "alive", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !0
                }),
                Object.defineProperty(this, "refCloseButton", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "refFooter", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "refReadMore", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                this.state = {
                    leftWidth: 400
                },
                this.onEsc = this.onEsc.bind(this),
                this.onFooterKeydown = this.onFooterKeydown.bind(this),
                this.onCloseKeydown = this.onCloseKeydown.bind(this)
            }
            onFooterKeydown(t) {
                t.stopPropagation();
                const e = t.target;
                e && e && !e.className.toString().includes("crt-share-twitter") || sl(t) && !t.shiftKey && this.refCloseButton.current && (t.preventDefault(),
                this.refCloseButton.current.focus())
            }
            onCloseKeydown(t) {
                if (sl(t) && t.shiftKey)
                    if (t.preventDefault(),
                    this.props.post && qi(this.props.post) && this.refFooter.current && this.refFooter.current.lastElementChild) {
                        const t = this.refFooter.current.lastElementChild.lastChild;
                        t && t.focus()
                    } else
                        this.refReadMore.current && this.refReadMore.current.focus()
            }
            componentDidMount() {
                this.re = Rl(this.onResize.bind(this), this.base),
                document.addEventListener("keydown", this.onEsc, !1)
            }
            componentWillUnmount() {
                this.re?.disconnect(),
                document.removeEventListener("keydown", this.onEsc, !1)
            }
            onResize() {
                if (!this.alive)
                    return;
                const t = window.innerWidth;
                let e = t - 80;
                t > 1055 ? e = 935 : t > 910 ? e = t - 120 : t > 680 && (e = 600),
                this.setState({
                    leftWidth: e
                })
            }
            onEsc(t) {
                27 === t.keyCode && this.props.onClose()
            }
            render(t) {
                const e = t.post
                  , o = ["crt-popup"];
                let r = ""
                  , n = e.user_full_name
                  , s = "crt-post-name";
                qi(e) || (n = e.title,
                s = "crt-post-name username-ad"),
                e.title || (r = zi(e, "title", "")),
                r || o.push("crt-popup-has-title"),
                e.image && o.push("has-image"),
                e.video && o.push("has-video"),
                e.url && (o.push("crt-has-read-more"),
                "http" !== e.url.substring(0, 4) && (e.url = `https://${e.url}`));
                const i = qi(e) ? e.id : 0;
                return cs("div", {
                    className: o.join(" "),
                    children: [cs("a", {
                        ref: this.refCloseButton,
                        onClick: this.props.onClose,
                        className: "crt-close",
                        "aria-label": "close popup",
                        role: "button",
                        tabIndex: 0,
                        onKeyPress: t=>{
                            nl(t) && this.props.onClose()
                        }
                        ,
                        onKeyDown: this.onCloseKeydown,
                        children: cs(Zc, {
                            icon: "crt-icon-cancel",
                            width: 15,
                            height: 15
                        })
                    }), cs("a", {
                        onClick: this.props.onPrevious,
                        className: "crt-previous",
                        "aria-label": "go to previous post",
                        role: "button",
                        tabIndex: 0,
                        onKeyPress: t=>{
                            nl(t) && this.props.onPrevious()
                        }
                        ,
                        children: cs(Zc, {
                            icon: "crt-icon-left-open",
                            color: "white"
                        })
                    }), cs("a", {
                        onClick: this.props.onNext,
                        className: "crt-next",
                        "aria-label": "go to next post",
                        role: "button",
                        tabIndex: 0,
                        onKeyPress: t=>{
                            nl(t) && this.props.onNext()
                        }
                        ,
                        children: cs(Zc, {
                            icon: "crt-icon-right-open",
                            color: "white"
                        })
                    }), 25 !== e.network_id && cs("div", {
                        className: "crt-popup-left",
                        children: [e.video && cs(pl, {
                            post: e
                        }, i), !e.video && cs(al, {
                            post: e
                        })]
                    }), 25 === e.network_id && cs("div", {
                        className: "crt-popup-left",
                        children: cs(Zl, {
                            post: e
                        }, i)
                    }), cs("div", {
                        className: "crt-popup-right",
                        children: [cs("div", {
                            className: "crt-popup-header",
                            children: [cs(tl, {
                                post: e
                            }), cs(ol, {
                                post: e
                            }), cs("div", {
                                className: s,
                                children: [cs("span", {
                                    children: n
                                }), cs("br", {}), Ui(e) && "#" !== Ri(e) && cs("a", {
                                    href: Ri(e),
                                    target: "_blank",
                                    children: Ui(e)
                                })]
                            })]
                        }), cs("div", {
                            className: "crt-popup-text " + Qi(e),
                            children: cs("div", {
                                className: "crt-popup-text-container",
                                children: [cs(fl, {
                                    post: e,
                                    tag: "p"
                                }), cs("p", {
                                    className: "crt-popup-text-title",
                                    children: r
                                }), cs(Yl, {
                                    post: e,
                                    noMaxLines: !0
                                }), cs(rl, {
                                    post: e
                                })]
                            })
                        }), cs("div", {
                            className: "crt-popup-read-more",
                            children: cs("a", {
                                href: e.url,
                                target: "_blank",
                                ref: this.refReadMore,
                                className: "crt-button",
                                onKeyDown: t=>{
                                    sl(t) && this.props.post && !qi(this.props.post) && this.refCloseButton.current && !t.shiftKey && (t.preventDefault(),
                                    this.refCloseButton.current.focus())
                                }
                                ,
                                children: Hi("go-to-original-post")
                            })
                        }), cs(Kl, {
                            post: e,
                            onKeyDown: this.onFooterKeydown,
                            footerRef: this.refFooter
                        })]
                    })]
                })
            }
        }
        function Ql({show: t, children: e, className: o}) {
            const [r,n] = ai(t);
            return li((()=>{
                t ? n(!0) : setTimeout((()=>{
                    n(!1)
                }
                ), 400)
            }
            ), [t]),
            cs(D, {
                children: r && cs("div", {
                    style: {
                        animation: (t ? "crtFadeIn" : "crtFadeOut") + " 0.5s"
                    },
                    className: o,
                    children: e
                })
            })
        }
        function Jl(t) {
            const e = qi(t) ? t.id : t.slug;
            window.history ? window.history.pushState(null, "", "#crt:post:" + e) : window.document.location.hash = "crt:post:" + e
        }
        function tu(t, e) {
            for (var o in e)
                t[o] = e[o];
            return t
        }
        function eu(t, e) {
            for (var o in t)
                if ("__source" !== o && !(o in e))
                    return !0;
            for (var r in e)
                if ("__source" !== r && t[r] !== e[r])
                    return !0;
            return !1
        }
        function ou(t) {
            this.props = t
        }
        function ru(t, e) {
            function o(t) {
                var o = this.props.ref
                  , r = o == t.ref;
                return !r && o && (o.call ? o(null) : o.current = null),
                e ? !e(this.props, t) || !r : eu(this.props, t)
            }
            function r(e) {
                return this.shouldComponentUpdate = o,
                F(t, e)
            }
            return r.displayName = "Memo(" + (t.displayName || t.name) + ")",
            r.prototype.isReactComponent = !0,
            r.__f = !0,
            r
        }
        Object.defineProperty(Xl, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Pi
        }),
        (ou.prototype = new T).isPureReactComponent = !0,
        ou.prototype.shouldComponentUpdate = function(t, e) {
            return eu(this.props, t) || eu(this.state, e)
        }
        ;
        var nu = b.__b;
        b.__b = function(t) {
            t.type && t.type.__f && t.ref && (t.props.ref = t.ref,
            t.ref = null),
            nu && nu(t)
        }
        ;
        "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref");
        var su = b.__e;
        b.__e = function(t, e, o, r) {
            if (t.then)
                for (var n, s = e; s = s.__; )
                    if ((n = s.__c) && n.__c)
                        return null == e.__e && (e.__e = o.__e,
                        e.__k = o.__k),
                        n.__c(t, e);
            su(t, e, o, r)
        }
        ;
        var iu = b.unmount;
        function au(t, e, o) {
            return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(t) {
                "function" == typeof t.__c && t.__c()
            }
            )),
            t.__c.__H = null),
            null != (t = tu({}, t)).__c && (t.__c.__P === o && (t.__c.__P = e),
            t.__c = null),
            t.__k = t.__k && t.__k.map((function(t) {
                return au(t, e, o)
            }
            ))),
            t
        }
        function cu(t, e, o) {
            return t && (t.__v = null,
            t.__k = t.__k && t.__k.map((function(t) {
                return cu(t, e, o)
            }
            )),
            t.__c && t.__c.__P === e && (t.__e && o.insertBefore(t.__e, t.__d),
            t.__c.__e = !0,
            t.__c.__P = o)),
            t
        }
        function lu() {
            this.__u = 0,
            this.t = null,
            this.__b = null
        }
        function uu(t) {
            var e = t.__.__c;
            return e && e.__a && e.__a(t)
        }
        function du() {
            this.u = null,
            this.o = null
        }
        b.unmount = function(t) {
            var e = t.__c;
            e && e.__R && e.__R(),
            e && !0 === t.__h && (t.type = null),
            iu && iu(t)
        }
        ,
        (lu.prototype = new T).__c = function(t, e) {
            var o = e.__c
              , r = this;
            null == r.t && (r.t = []),
            r.t.push(o);
            var n = uu(r.__v)
              , s = !1
              , i = function() {
                s || (s = !0,
                o.__R = null,
                n ? n(a) : a())
            };
            o.__R = i;
            var a = function() {
                if (!--r.__u) {
                    if (r.state.__a) {
                        var t = r.state.__a;
                        r.__v.__k[0] = cu(t, t.__c.__P, t.__c.__O)
                    }
                    var e;
                    for (r.setState({
                        __a: r.__b = null
                    }); e = r.t.pop(); )
                        e.forceUpdate()
                }
            }
              , c = !0 === e.__h;
            r.__u++ || c || r.setState({
                __a: r.__b = r.__v.__k[0]
            }),
            t.then(i, i)
        }
        ,
        lu.prototype.componentWillUnmount = function() {
            this.t = []
        }
        ,
        lu.prototype.render = function(t, e) {
            if (this.__b) {
                if (this.__v.__k) {
                    var o = document.createElement("div")
                      , r = this.__v.__k[0].__c;
                    this.__v.__k[0] = au(this.__b, o, r.__O = r.__P)
                }
                this.__b = null
            }
            var n = e.__a && F(D, null, t.fallback);
            return n && (n.__h = null),
            [F(D, null, e.__a ? null : t.children), n]
        }
        ;
        var hu = function(t, e, o) {
            if (++o[1] === o[0] && t.o.delete(e),
            t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.o.size))
                for (o = t.u; o; ) {
                    for (; o.length > 3; )
                        o.pop()();
                    if (o[1] < o[0])
                        break;
                    t.u = o = o[2]
                }
        };
        function pu(t) {
            return this.getChildContext = function() {
                return t.context
            }
            ,
            t.children
        }
        function fu(t) {
            var e = this
              , o = t.i;
            e.componentWillUnmount = function() {
                J(null, e.l),
                e.l = null,
                e.i = null
            }
            ,
            e.i && e.i !== o && e.componentWillUnmount(),
            t.__v ? (e.l || (e.i = o,
            e.l = {
                nodeType: 1,
                parentNode: o,
                childNodes: [],
                appendChild: function(t) {
                    this.childNodes.push(t),
                    e.i.appendChild(t)
                },
                insertBefore: function(t, o) {
                    this.childNodes.push(t),
                    e.i.appendChild(t)
                },
                removeChild: function(t) {
                    this.childNodes.splice(this.childNodes.indexOf(t) >>> 1, 1),
                    e.i.removeChild(t)
                }
            }),
            J(F(pu, {
                context: e.context
            }, t.__v), e.l)) : e.l && e.componentWillUnmount()
        }
        function gu(t, e) {
            var o = F(fu, {
                __v: t,
                i: e
            });
            return o.containerInfo = e,
            o
        }
        (du.prototype = new T).__a = function(t) {
            var e = this
              , o = uu(e.__v)
              , r = e.o.get(t);
            return r[0]++,
            function(n) {
                var s = function() {
                    e.props.revealOrder ? (r.push(n),
                    hu(e, t, r)) : n()
                };
                o ? o(s) : s()
            }
        }
        ,
        du.prototype.render = function(t) {
            this.u = null,
            this.o = new Map;
            var e = W(t.children);
            t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
            for (var o = e.length; o--; )
                this.o.set(e[o], this.u = [1, 0, this.u]);
            return t.children
        }
        ,
        du.prototype.componentDidUpdate = du.prototype.componentDidMount = function() {
            var t = this;
            this.o.forEach((function(e, o) {
                hu(t, o, e)
            }
            ))
        }
        ;
        var mu = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103
          , bu = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/
          , vu = /^on(Ani|Tra|Tou|BeforeInp|Compo)/
          , wu = /[A-Z0-9]/g
          , yu = "undefined" != typeof document
          , Cu = function(t) {
            return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(t)
        };
        T.prototype.isReactComponent = {},
        ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(t) {
            Object.defineProperty(T.prototype, t, {
                configurable: !0,
                get: function() {
                    return this["UNSAFE_" + t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        }
        ));
        var _u = b.event;
        function xu() {}
        function Pu() {
            return this.cancelBubble
        }
        function ku() {
            return this.defaultPrevented
        }
        b.event = function(t) {
            return _u && (t = _u(t)),
            t.persist = xu,
            t.isPropagationStopped = Pu,
            t.isDefaultPrevented = ku,
            t.nativeEvent = t
        }
        ;
        var Su = {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return this.class
            }
        }
          , Au = b.vnode;
        b.vnode = function(t) {
            "string" == typeof t.type && function(t) {
                var e = t.props
                  , o = t.type
                  , r = {};
                for (var n in e) {
                    var s = e[n];
                    if (!("value" === n && "defaultValue"in e && null == s || yu && "children" === n && "noscript" === o || "class" === n || "className" === n)) {
                        var i = n.toLowerCase();
                        "defaultValue" === n && "value"in e && null == e.value ? n = "value" : "download" === n && !0 === s ? s = "" : "ondoubleclick" === i ? n = "ondblclick" : "onchange" !== i || "input" !== o && "textarea" !== o || Cu(e.type) ? "onfocus" === i ? n = "onfocusin" : "onblur" === i ? n = "onfocusout" : vu.test(n) ? n = i : -1 === o.indexOf("-") && bu.test(n) ? n = n.replace(wu, "-$&").toLowerCase() : null === s && (s = void 0) : i = n = "oninput",
                        "oninput" === i && r[n = i] && (n = "oninputCapture"),
                        r[n] = s
                    }
                }
                "select" == o && r.multiple && Array.isArray(r.value) && (r.value = W(e.children).forEach((function(t) {
                    t.props.selected = -1 != r.value.indexOf(t.props.value)
                }
                ))),
                "select" == o && null != r.defaultValue && (r.value = W(e.children).forEach((function(t) {
                    t.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(t.props.value) : r.defaultValue == t.props.value
                }
                ))),
                e.class && !e.className ? (r.class = e.class,
                Object.defineProperty(r, "className", Su)) : (e.className && !e.class || e.class && e.className) && (r.class = r.className = e.className),
                t.props = r
            }(t),
            t.$$typeof = mu,
            Au && Au(t)
        }
        ;
        var Ou = b.__r;
        b.__r = function(t) {
            Ou && Ou(t),
            t.__c
        }
        ;
        var ju = b.diffed;
        b.diffed = function(t) {
            ju && ju(t);
            var e = t.props
              , o = t.__e;
            null != o && "textarea" === t.type && "value"in e && e.value !== o.value && (o.value = null == e.value ? "" : e.value),
            null
        }
        ;
        class Fu extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "currentPostNum", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "postRef", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "onPostClick", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t=>{
                        "ad" != t.type || t.video ? this.context.config.get("post.clickAction") === wr.OPEN_POPUP && this.showPost(t) : "goto-url" == t.click_action && window.open(t.url, "_blank")
                    }
                }),
                Object.defineProperty(this, "onPrevious", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: ()=>{
                        this.currentPostNum -= 1,
                        this.currentPostNum = this.currentPostNum >= 0 ? this.currentPostNum : this.context.feed._posts.length - 1,
                        this.setPost(this.context.feed._posts[this.currentPostNum])
                    }
                }),
                Object.defineProperty(this, "onNext", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: ()=>{
                        this.currentPostNum += 1,
                        this.currentPostNum = this.currentPostNum < this.context.feed._posts.length ? this.currentPostNum : 0,
                        this.setPost(this.context.feed._posts[this.currentPostNum])
                    }
                }),
                Object.defineProperty(this, "onClose", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: ()=>{
                        this.context.tracker.track("popup:hide"),
                        Kn(document.body, "crt-popup-visible"),
                        this.setState({
                            popupVisible: !1
                        }),
                        setTimeout((()=>{
                            if (this.setState({
                                visible: !1
                            }),
                            this.state.post) {
                                const t = qi(this.state.post) ? this.state.post.id : this.state.post.slug;
                                this.context.events.trigger(`${is.POST_CLOSED}${t}`)
                            }
                        }
                        ), 500),
                        function() {
                            let t = window.document.location.hash;
                            if (t = t.replace("#", ""),
                            t.indexOf("crt:post:") > -1) {
                                const t = window.location.origin + window.location.pathname;
                                window.history && window.history.replaceState(null, "", t)
                            }
                        }()
                    }
                }),
                this.state = {
                    leftWidth: 400,
                    visible: !!t.visible,
                    popupVisible: !1
                }
            }
            componentDidMount() {
                this.context.events.on(is.POST_CLICK, this.onPostClick)
            }
            componentWillUnmount() {
                this.context.events.off(is.POST_CLICK, this.onPostClick),
                Kn(document.body, "crt-popup-visible")
            }
            showPost(t) {
                this.context.tracker.track("popup:show"),
                this.setState({
                    visible: !0,
                    post: t
                }),
                this.show(),
                this.context.config.get("popup.deepLink") && Jl(t),
                this.currentPostNum = Ga(this.context.feed._posts, (e=>{
                    const o = qi(t) ? t.id : t.slug;
                    return e.id === o
                }
                ))
            }
            show() {
                Yn(document.body, "crt-popup-visible"),
                this.setState({
                    visible: !0
                }),
                setTimeout((()=>{
                    this.setState({
                        popupVisible: !0
                    })
                }
                ), 500)
            }
            setPost(t) {
                t && (this.setState({
                    post: t
                }),
                this.context.config.get("popup.deepLink") && Jl(t))
            }
            render(t, e) {
                return this.postRef.current && this.postRef.current.focus(),
                gu(cs("div", {
                    className: "crt-popup-manager",
                    children: cs(Ql, {
                        show: e.visible,
                        className: "crt-popup-wrapper crt-popup-wrapper-visible",
                        children: cs("div", {
                            className: "crt-popup-wrapper-c",
                            ref: this.postRef,
                            tabIndex: 0,
                            children: [cs("div", {
                                className: "crt-popup-underlay",
                                onClick: this.onClose
                            }), cs(Ql, {
                                className: "crt-popup-container",
                                show: e.popupVisible,
                                children: cs(Xl, {
                                    post: e.post,
                                    onNext: this.onNext,
                                    onPrevious: this.onPrevious,
                                    onClose: this.onClose
                                }, e.post && qi(e.post) ? e.post.id : 0)
                            })]
                        })
                    })
                }), document.body)
            }
        }
        Object.defineProperty(Fu, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Pi
        });
        const Eu = ["curator-admin.test", "admin.curator.io", "admin-stage.curator.io", "superadmin.curator.io", "app.curator.io", "localhost"];
        const Du = tt({})
          , Tu = ()=>hi(Du)
          , Nu = t=>{
            const [e,o] = ai({
                text: "",
                type: "info"
            })
              , r = {
                message: e,
                setMessage: (t="",r="info")=>{
                    t ? (e.text = t,
                    e.type = r) : (e.text = "",
                    e.type = "info"),
                    o(e)
                }
            };
            return cs(Du.Provider, {
                value: r,
                children: t.children
            })
        }
        ;
        function Lu() {
            const t = Tu()
              , e = ki()
              , [o,r] = ai("info")
              , [n,s] = ai("")
              , i = t=>{
                -1 !== Eu.indexOf(window.location.hostname) && s(0 === t.postCount ? "The feed contains no posts" : "")
            }
            ;
            return li((()=>(e.events.on(is.FEED_LOADED, i),
            ()=>{
                e.events.off(is.FEED_LOADED, i)
            }
            )), []),
            li((()=>{
                s(t.message.text ?? ""),
                r(t.message.type ?? "")
            }
            ), [t.message.text, t.message.type]),
            n ? cs("div", {
                className: `crt-notice crt-notice-${o}`,
                children: cs("span", {
                    children: n
                })
            }) : null
        }
        function Bu(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                width: "24",
                height: "24",
                id: "svg-warning-2pfGa-G",
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                viewBox: "0 0 512 512",
                style: "enable-background:new 0 0 512 512;",
                "xml:space": "preserve"
            }, e), ["\n  ", F("path", {
                d: "M256,34.297L0,477.703h512L256,34.297z M256,422.05c-9.22,0-16.696-7.475-16.696-16.696s7.475-16.696,16.696-16.696\n    c9.22,0,16.696,7.475,16.696,16.696S265.22,422.05,256,422.05z M239.304,344.137V177.181h33.391v166.956H239.304z"
            }, []), "\n"])
        }
        const Iu = ()=>{
            const t = ki()
              , [e,o] = ai(!1);
            return li((()=>{
                t.events.on(is.ACCOUNT_NEEDS_ATTENTION, (e=>{
                    t.config.get("feed.hideNotice") || o(e)
                }
                ))
            }
            ), []),
            e ? cs("div", {
                className: "crt-warning-dialog",
                children: cs("p", {
                    children: [cs(Bu, {}), " Your Curator account requires attention. ", cs(Bu, {})]
                })
            }) : null
        }
          , Mu = {};
        function qu(t) {
            return Mu[t] || (Mu[t] = new cl),
            Mu[t]
        }
        const Wu = es("Feed");
        const Hu = class extends cl {
            constructor(t) {
                super(),
                Object.defineProperty(this, "postsLoaded", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "postCount", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "loading", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "allPostsLoaded", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "pagination", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "params", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_firstLoad", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_feedCurrentIdx", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_feed", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_posts", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_ads", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "_active", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "urlFeedPosts", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "urlFeedPost", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "urlPost", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "networks", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "currentPage", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "config", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "eventBus", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Wu.log("init"),
                this.config = t,
                this.eventBus = qu(t.id),
                this.postsLoaded = 0,
                this.postCount = 0,
                this.loading = !1,
                this.allPostsLoaded = !1,
                this.pagination = {
                    after: "",
                    before: ""
                },
                this._firstLoad = !0,
                this._feedCurrentIdx = 0,
                this._feed = [],
                this._posts = [],
                this._ads = [],
                this._active = !0;
                const e = this.config.get("feed.id");
                this.params = this.config.get("feed.params") || {},
                Wu.log("constructor params", this.params),
                this.params.limit = this.config.get("feed.limit", 25),
                this.params.hasPoweredBy = this.config.get("hasPoweredBy"),
                this.params.image_width = this.config.get("image_width", 480);
                this.config.get("filter.limitPosts", !1) && (this.params.limitPosts = !0,
                this.params.limitPostNumber = this.config.get("filter.limitPostNumber", 12),
                this.params.limitPostPeriod = this.config.get("filter.period", "hours"));
                const o = new Si(this.config.get("feed.apiEndpoint"));
                this.urlFeedPosts = o.build("/restricted/feeds/{{feedId}}/posts", {
                    feedId: e
                }),
                this.urlFeedPost = o.build("/restricted/feeds/{{feedId}}/posts", {
                    feedId: e
                }),
                this.urlPost = o.build("/restricted/feeds/{{feedId}}/posts", {
                    feedId: e
                }),
                this.checkDeepLink()
            }
            reset() {
                this._feedCurrentIdx = 0,
                this._feed = [],
                this._posts = [],
                this.postCount = 0,
                this._ads = [],
                this.params = this.config.get("feed.params") || {},
                this.params.limit = this.config.get("feed.limit", 25),
                this._firstLoad = !0,
                this.allPostsLoaded = !1,
                this.loading = !1
            }
            setParams(t) {
                t.networkId ? this.params.network_id = `${t.networkId}` : delete this.params.network_id,
                t.sourceId ? this.params.source_id = `${t.sourceId}` : delete this.params.source_id
            }
            loadXPosts(t, e) {
                return Wu.log("loadXPosts " + t),
                new Promise(((o,r)=>{
                    this.numPostsAfterCurrent() < t ? this.allPostsLoaded ? o(this.getXPosts(t)) : this.load(e).then((()=>{
                        o(this.getXPosts(t))
                    }
                    )).catch((t=>{
                        r(t)
                    }
                    )) : o(this.getXPosts(t))
                }
                ))
            }
            nextPost() {
                if (this._feedCurrentIdx < this._feed.length) {
                    const t = this._feed[this._feedCurrentIdx];
                    return this._feedCurrentIdx++,
                    t
                }
            }
            getXPosts(t) {
                Wu.log("getXpost", t);
                let e = this._feedCurrentIdx + t;
                e > this._feed.length && (e = this._feed.length);
                const o = this._feed.slice(this._feedCurrentIdx, e);
                return this._feedCurrentIdx = e,
                this.trigger(is.POSTS_FETCHED, o),
                this.eventBus.trigger(is.POSTS_FETCHED, o),
                o
            }
            postAtIndex(t) {
                return this._feed[t]
            }
            numPosts() {
                return this._feed.length
            }
            numPostsAfterCurrent() {
                return this._feed.length - this._feedCurrentIdx
            }
            hasMorePosts() {
                return !(this.allPostsLoaded && this._feedCurrentIdx >= this._feed.length)
            }
            isFirstLoad() {
                return this._firstLoad
            }
            checkDeepLink() {
                if (this.config.get("popup.deepLink")) {
                    let t = window.document.location.hash;
                    if (t = t.replace("#", ""),
                    t.indexOf("crt:post:") > -1) {
                        const e = t.substring("crt:post:".length);
                        this.loadPost(e).then((t=>{
                            this.eventBus.trigger(is.POST_CLICK, t)
                        }
                        ))
                    }
                }
            }
            loadPost(t) {
                return new Promise(((e,o)=>{
                    Di.getPromise(this.urlPost + "/" + t, {}, {
                        dontChangeProtocol: !0
                    }).then((({success: t, data: o})=>{
                        t && e(o.post)
                    }
                    ))
                }
                ))
            }
            load(t) {
                return Wu.log("load " + this.loading),
                this.loading ? new Promise((t=>{
                    t(!1)
                }
                )) : this._firstLoad ? this.loadFirst(t) : this.loadAfter(t)
            }
            loadFirst(t) {
                if (Wu.log("loadFirst " + this.loading),
                this.loading)
                    return new Promise((t=>{
                        t(!1)
                    }
                    ));
                this._feed = [],
                this.postsLoaded = 0;
                const e = {
                    ...this.params,
                    ...t
                };
                return e.limit = this.config.get("feed.limit", 25),
                this._loadPosts(e, "first-load")
            }
            loadAfter(t) {
                if (Wu.log("loadAfter " + this.loading),
                this.loading)
                    return new Promise((t=>{
                        t(!1)
                    }
                    ));
                const e = {
                    ...this.params,
                    ...t
                };
                return this.pagination && this.pagination.after && (e.after = this.pagination.after,
                e.before = ""),
                this._loadPosts(e, "after")
            }
            loadMore() {
                return this.loadAfter()
            }
            loadBefore() {
                if (Wu.log("loadBefore " + this.loading),
                this.loading)
                    return new Promise((t=>{
                        t(!1)
                    }
                    ));
                const t = {
                    ...this.params
                };
                return this.pagination && this.pagination.before && (t.before = this.pagination.before,
                t.after = ""),
                this._loadPosts(t, "before")
            }
            loadNew() {
                return this.loadBefore()
            }
            loadPage(t) {
                if (Wu.log("loadPage " + t),
                this.loading)
                    return new Promise((t=>{
                        t(void 0)
                    }
                    ));
                const e = {
                    ...this.params
                }
                  , o = this.config.get("feed.limit", 25);
                return e.limit = o,
                e.offset = t * o,
                e.before = "",
                e.after = "",
                this.currentPage = t,
                this._loadPosts(e, "load-page")
            }
            _loadPosts(t, e) {
                Wu.log("_loadPosts position:" + e),
                this.loading = !0;
                const o = this.config.get("embedSource", null);
                return o && (t.embedSource = o),
                new Promise(((o,r)=>{
                    Di.getPromise(this.urlFeedPosts, t, {
                        dontChangeProtocol: !0
                    }).then((({success: t, data: n})=>{
                        if (Wu.log("_loadPosts success"),
                        this._active)
                            if (this.loading = !1,
                            this._firstLoad = !1,
                            t && n.posts) {
                                if (this.postCount = n.postCount,
                                this.postsLoaded += n.posts.length,
                                this.allPostsLoaded = this.postsLoaded >= this.postCount,
                                this._ads = n.ads.sort(((t,e)=>t.position_start > e.position_start ? 1 : e.position_start > t.position_start ? -1 : 0)),
                                this.networks = n.networks,
                                "before" === e) {
                                    if (n.posts.length) {
                                        let t = [];
                                        t = t.concat(n.posts),
                                        this._feed = t.concat(this._feed)
                                    }
                                    n.pagination && n.pagination.before && (this.pagination.before = n.pagination.before)
                                } else
                                    "after" === e ? (this.addPostsAndAdsToEnd(n.posts),
                                    n.pagination && n.pagination.after && (this.pagination.after = n.pagination.after)) : "first-load" === e && (this.addPostsAndAdsToEnd(n.posts),
                                    n.pagination && (this.pagination.after = n.pagination.after,
                                    this.pagination.before = n.pagination.before));
                                if (this.trigger(is.FEED_LOADED, n, e),
                                this.trigger(is.POSTS_LOADED, n.posts, e),
                                this.eventBus.trigger(is.FEED_LOADED, n),
                                this.eventBus.trigger(is.POSTS_LOADED, n.posts, e),
                                !0 === n.account.needsAttention && this.eventBus.trigger(is.ACCOUNT_NEEDS_ATTENTION, !0),
                                n.feed.meta) {
                                    "string" == typeof n.feed.meta && (n.feed.meta = JSON.parse(n.feed.meta));
                                    const t = t=>n.posts.filter((e=>e.network_id === t && e.is_embed));
                                    n.feed.meta.hasInstagramEmbed && t(2) && this.eventBus.trigger(is.HAS_INSTAGRAM_EMBED),
                                    n.feed.meta.hasFacebookEmbed && t(3) && this.eventBus.trigger(is.HAS_FACEBOOK_EMBED)
                                }
                                o(n)
                            } else
                                this.trigger(is.POSTS_FAILED, n, e),
                                this.eventBus.trigger(is.FEED_FAILED, n),
                                r()
                    }
                    ))
                }
                ))
            }
            addPostsAndAdsToEnd(t) {
                if (this._posts = this._posts.concat(t),
                this._ads.length) {
                    const e = vr(this._ads);
                    if (t.length) {
                        const o = t
                          , r = this._feed.length - 1;
                        for (let t = 0; t < e.length; t++) {
                            const n = vr(e[t]);
                            r < n.position_start && o.splice(r + n.position_start, 0, n)
                        }
                        const n = e.filter((t=>t.position_repeats));
                        for (let t = 0; t < n.length; t++) {
                            const e = vr(n[t]);
                            if (1 === e.position_repeat_interval)
                                continue;
                            let s = e.position_start + e.position_repeat_interval;
                            for (r > e.position_start && (s = e.position_repeat_interval - (r - e.position_start) % e.position_repeat_interval); s < o.length; )
                                o.splice(s - 1, 0, e),
                                s += e.position_repeat_interval
                        }
                        this._feed = this._feed.concat(o)
                    } else {
                        const t = [];
                        let o = 1;
                        for (let r = 0; r < e.length; r++) {
                            const e = this._ads[r];
                            if (e.type = "ad",
                            e.position_repeats) {
                                this._feed.push(e),
                                t.push(e),
                                o++;
                                continue
                            }
                            let n = !1;
                            if (t.length)
                                for (let e = 0; e < t.length; e++) {
                                    const r = t[e];
                                    if (o % r.position_repeat_interval === r.position_start) {
                                        this._feed.push(r),
                                        o++,
                                        n = !0;
                                        break
                                    }
                                }
                            n || (this._feed.push(e),
                            o++)
                        }
                    }
                } else
                    this._feed = this._feed.concat(t);
                this._feed.map(((t,e)=>{
                    t.feed_position = e + 1
                }
                ))
            }
            destroy() {
                Wu.log("destroy"),
                this._active = !1,
                super.destroy()
            }
        }
        ;
        function Ru() {
            const {events: t, config: e, $container: o} = ki()
              , r = ()=>{
                e.get("hidePoweredBy") ? Yn(o, "crt-widget-unbranded") : Yn(o, "crt-widget-branded")
            }
            ;
            window,
            null === e.config.hidePoweredBy && void 0 === e.config.hidePoweredBy || r();
            const n = t=>{
                r()
            }
            ;
            return li((()=>(t.on(is.FEED_LOADED, n),
            ()=>{
                t.off(is.FEED_LOADED, n)
            }
            )), []),
            cs("a", {
                href: "https://curator.io",
                target: "_blank",
                className: "crt-logo crt-tag",
                children: "Powered by Curator.io"
            })
        }
        const zu = class {
            constructor(t) {
                Object.defineProperty(this, "config", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "listeners", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "defaultFilterListener", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                this.config = t
            }
            registerOnFilterChanged(t) {
                this.listeners.push(t)
            }
            clearOnFilterChanged() {
                this.listeners = []
            }
            registerCheckDefaultFilter(t) {
                this.defaultFilterListener = t
            }
            triggerCheckDefaultFilter() {
                this.defaultFilterListener && this.defaultFilterListener()
            }
            triggerOnFilterChanged(t) {
                for (let e = 0; e < this.listeners.length; e++)
                    this.listeners[e](t)
            }
        }
          , Uu = tt({})
          , $u = "image_only"
          , Vu = es("ViewportTracker");
        function Gu(t) {
            const e = t.current;
            if (!e)
                return !1;
            return function(t, e) {
                return t.left <= e.right && e.left <= t.right && t.top <= e.bottom && e.top <= t.bottom
            }(e.getBoundingClientRect(), {
                top: 0,
                left: 0,
                bottom: window.innerHeight || document.documentElement.clientHeight,
                right: window.innerWidth || document.documentElement.clientWidth
            })
        }
        const Ku = t=>{
            const e = ui()
              , [o,r] = ai(!1)
              , [n,s] = ai(!1)
              , i = ki();
            li((()=>{
                const t = i.config.get("widget.lazyLoadType");
                Vu.info(`mount type: ${t}`);
                const o = ()=>{
                    Vu.info("widgetEnteredViewport"),
                    r(!0),
                    s(!0),
                    i.events.trigger(is.WIDGET_VISIBLE, !0)
                }
                  , n = ()=>{
                    if ("IntersectionObserver"in window) {
                        Vu.log("register intersection observer");
                        const t = new IntersectionObserver((e=>{
                            e[0].isIntersecting && (Vu.log("intersection callback triggered"),
                            o(),
                            t.disconnect())
                        }
                        ),{
                            root: null,
                            rootMargin: "0px",
                            threshold: 1
                        });
                        t.observe(e.current)
                    } else {
                        Vu.log("register scroll event");
                        const t = Wl((()=>{
                            Gu(e) && (Vu.log("scroll on viewport triggered"),
                            o(),
                            document.removeEventListener("scroll", t))
                        }
                        ));
                        Gu(e) ? (o(),
                        document.removeEventListener("scroll", t)) : document.addEventListener("scroll", t)
                    }
                }
                ;
                "whole_widget" === t ? n() : t === $u ? (r(!0),
                n()) : o()
            }
            ), []);
            const a = {
                lazyLoaded: n
            };
            return cs(Uu.Provider, {
                value: a,
                children: [cs("div", {
                    ref: e,
                    className: "crt-viewport-tracker"
                }), o && t.children]
            })
        }
          , Yu = tt({})
          , Zu = ()=>hi(Yu)
          , Xu = t=>{
            const e = Tu()
              , o = ki()
              , r = {
                widget: o,
                message: e,
                feed: o.feed,
                filterService: o.filterService,
                config: o.config,
                data: {
                    nOfPosts: 0
                }
            };
            return cs(Yu.Provider, {
                value: r,
                children: t.children
            })
        }
          , Qu = t=>{
            const e = ui()
              , o = new Ni(t.config)
              , r = new Hu(t.config)
              , n = new zu(t.config)
              , s = {
                widgetId: t.widgetId,
                feed: r,
                filterService: n,
                config: t.config,
                tracker: o,
                events: t.events,
                $container: t.$container,
                data: {
                    nOfPosts: 0,
                    previousNOfPosts: 0
                }
            };
            return li((()=>{
                t.events.on(is.POST_CLICK, (t=>{
                    qi(t) && o.trackPostAction(t.id, "click")
                }
                )),
                t.onMounted(e)
            }
            ), []),
            cs(Pi.Provider, {
                value: s,
                children: cs(Nu, {
                    children: cs(Xu, {
                        children: [cs(Iu, {}), cs(Fu, {}), cs(Jc, {}), cs(Ku, {
                            children: t.children
                        }), cs(Lu, {}), cs(Ru, {})]
                    })
                })
            })
        }
          , Ju = es("BaseWidget");
        class td {
            constructor(t, e) {
                Object.defineProperty(this, "id", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "$container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "sheet", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "autoLoadTimeout", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "autoLoading", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "config", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "events", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "widget", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "hasFacebookEmbed", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "hasInstagramEmbed", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "onMounted", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t=>{
                        this.widget = t
                    }
                }),
                Ju.log("construct"),
                this.id = "widget" + Ss.uId(),
                this.autoLoadTimeout = 0,
                this.autoLoading = !1,
                this.config = this.setOptions(t, e),
                this.events = this.createEventBus(),
                this.$container = this.createContainer(),
                this.$container.setAttribute("dir", "ltr");
                const o = this.checkPoweredBy();
                this.config.set("hasPoweredBy", o),
                this.emptyContainer(),
                this.events.on(is.HAS_INSTAGRAM_EMBED, (()=>{
                    this.hasInstagramEmbed = !0,
                    this.loadInstagramPost()
                }
                )),
                this.events.on(is.HAS_FACEBOOK_EMBED, (()=>{
                    this.hasFacebookEmbed = !0,
                    this.loadFacebookPost()
                }
                )),
                this.events.on(is.POSTS_COL_RENDERED, (()=>{
                    this.hasInstagramEmbed && this.loadInstagramPost(!0),
                    this.hasFacebookEmbed && this.loadFacebookPost()
                }
                ))
            }
            updateCustomCss(t) {
                if (!t)
                    return;
                const e = "crt-custom-css-style"
                  , o = document.getElementById(e);
                if (o)
                    o.innerText = t;
                else {
                    const o = document.createElement("style");
                    o.type = "text/css",
                    o.id = e,
                    o.innerText = t,
                    o.setAttribute("scoped", "1"),
                    this.$container.appendChild(o)
                }
            }
            loadInstagramPost(t=!1) {
                if (document.getElementById("insta-embed-script"))
                    window.instgrm && window.requestAnimationFrame((()=>{
                        setTimeout((()=>{
                            window.instgrm.Embeds.process()
                        }
                        ), 50)
                    }
                    ));
                else if (!t) {
                    const t = document.createElement("script");
                    t.setAttribute("src", "https://platform.instagram.com/en_US/embeds.js"),
                    t.setAttribute("async", "true"),
                    t.id = "insta-embed-script",
                    t.async = !0,
                    document.body.appendChild(t)
                }
            }
            loadFacebookPost(t=!1) {
                if (document.getElementById("facebook-embed-script"))
                    window.fbAsyncInit && window.requestAnimationFrame((()=>{
                        setTimeout((()=>{
                            window.fbAsyncInit()
                        }
                        ), 50)
                    }
                    ));
                else if (!t) {
                    window.fbAsyncInit = function() {
                        window.FB ? window.FB.init({
                            xfbml: !0,
                            version: "v11.0"
                        }) : console.log("no window.FB")
                    }
                    ;
                    const t = document.createElement("script");
                    t.setAttribute("src", "https://connect.facebook.net/en_US/sdk.js"),
                    t.setAttribute("async", "1"),
                    t.setAttribute("defer", "1"),
                    t.setAttribute("crossorigin", "anonymous"),
                    t.id = "facebook-embed-script",
                    document.body.appendChild(t)
                }
            }
            createWidgetProps() {
                return {
                    widgetId: this.id,
                    config: this.config,
                    events: this.events,
                    $container: this.$container,
                    onMounted(t) {}
                }
            }
            renderInWidgetWrapper(t, e) {
                this.renderInContainer(cs(Qu, {
                    ...t,
                    children: e
                }))
            }
            renderInContainer(t) {
                J(t, this.$container)
            }
            setOptions(t, e) {
                if (!t)
                    throw new Error("Widget Options missing");
                "true" === Ps.getQuery("curatorDebug", "false") && (t.debug = !0);
                const o = Xr(t, e)
                  , r = xi.create(this.id, o);
                if (!r.get("container"))
                    throw new Error("Widget options.container missing");
                if (!r.get("feed.id"))
                    throw new Error("Widget options.feedId missing");
                return r
            }
            createEventBus() {
                const t = qu(this.id);
                return t.on(is.POST_CLICK, (t=>{
                    this.config.get("post.clickAction") === wr.GOTO_SOURCE && window.open(t.url)
                }
                )),
                t
            }
            createContainer() {
                const t = this.config.get("container", "#crt-container");
                if (this.$container = Qn(t),
                !this.$container)
                    throw new Error("Widget init failed - could not find container");
                this.configLoadInline(this.$container);
                const e = this.config.get("lang", "en");
                _s.setLang(e),
                Ju.log("Setting language to: " + e),
                Yn(this.$container, "crt-widget"),
                ss.isTouch() ? Yn(this.$container, "crt-touch") : Yn(this.$container, "crt-no-touch");
                const o = this.config.get("theme", "");
                o && Yn(this.$container, "crt-widget-theme-" + o);
                const r = {
                    name: "crt:widget:created",
                    data: {
                        feedId: this.config.get("feed.id")
                    }
                };
                return window.postMessage(r, "*"),
                this.$container
            }
            setStyles(t) {
                this.createStyleSheet(),
                console.log("setStyles - this should be overridden")
            }
            createStyleSheet() {
                this.sheet ? this.clearStyles() : this.sheet = ss.createSheet()
            }
            clearStyles() {
                this.sheet && ss.deleteCSSRules(this.sheet)
            }
            addStyle(t, e) {
                if (t) {
                    const o = [];
                    for (const e in t)
                        if (Object.prototype.hasOwnProperty.call(t, e)) {
                            const r = Ln.camelToDash(e) + ": " + t[e];
                            o.push(r)
                        }
                    o.length > 0 && ss.addCSSRule(this.sheet, e, o.join(";"))
                }
            }
            addCssRules(t) {
                if (t)
                    for (const e in t)
                        if (Object.prototype.hasOwnProperty.call(t, e)) {
                            const o = []
                              , r = t[e];
                            for (const t in r)
                                if (Object.prototype.hasOwnProperty.call(r, t)) {
                                    const e = `${Ln.camelToDash(t)}: ${r[t]}`;
                                    o.push(e)
                                }
                            o.length > 0 && ss.addCSSRule(this.sheet, e, o.join(";"))
                        }
            }
            configLoadInline(t) {
                const e = ["lang", "debug"];
                for (const o of e) {
                    const e = qn(t, "crt-" + o);
                    e && this.config.set(o, e)
                }
            }
            on(t, e, o) {
                this.events.on(t, e, o)
            }
            off(t, e, o) {
                this.events.off(t, e, o)
            }
            checkPoweredBy() {
                if (Wn(this.$container).trim().indexOf("Powered by Curator.io") > -1)
                    return !0;
                const t = document.querySelectorAll(".crt-logo");
                return !!(t.length && Wn(t).trim().indexOf("Powered by Curator.io") > -1)
            }
            emptyContainer() {
                !function(t) {
                    const e = Mn(t);
                    if (e)
                        for (; e.firstChild; )
                            e.removeChild(e.firstChild)
                }(this.$container)
            }
            startAutoLoad() {
                Ju.log("startAutoLoad"),
                this.autoLoading = !0,
                this.autoLoadTimeout = window.setTimeout(this.onAutoLoadFire.bind(this), 3e4)
            }
            stopAutoLoad() {
                Ju.log("stopAutoLoad"),
                this.autoLoading = !1,
                window.clearTimeout(this.autoLoadTimeout)
            }
            onAutoLoadFire() {
                Ju.log("onAutoLoadFire"),
                this.autoLoadTimeout = window.setTimeout(this.onAutoLoadFire.bind(this), 3e4)
            }
            destroy() {
                if (Ju.log("destroy"),
                this.events && this.events.destroy(),
                this.sheet && (this.clearStyles(),
                delete this.sheet),
                Kn(this.$container, "crt-widget"),
                Kn(this.$container, "crt-widget-unbranded"),
                Kn(this.$container, "crt-widget-branded"),
                Kn(this.$container, "crt-no-touch"),
                this.$container.classList)
                    for (let t = 0; t < this.$container.classList.length; t++) {
                        const e = this.$container.classList[t];
                        e && 0 === e.indexOf("crt-widget-theme-") && Kn(this.$container, e)
                    }
                J(null, this.$container, void 0)
            }
            log(t) {
                const e = "Base[" + this.id + "]";
                Ju.log(e + "->" + t)
            }
        }
        class ed extends td {
            setStyles(t) {
                this.createStyleSheet(),
                this.setStylesGeneral(t)
            }
            setStylesGeneral(t) {
                this.addStyle(t.popup, ".crt-popup"),
                this.addStyle(t.widget, ".crt-widget"),
                this.addStyle(t.loadMore, ".crt-widget .crt-load-more"),
                this.addStyle(t.post, ".crt-widget .crt-post"),
                this.addStyle(t.post, ".crt-widget .crt-post"),
                this.addStyle(t.postText, ".crt-widget .crt-post-text"),
                this.addStyle(t.postTextLink, ".crt-widget .crt-post-text a"),
                this.addStyle(t.postTextLink, ".crt-widget .crt-post-fullname a"),
                this.addStyle(t.postName, ".crt-widget .crt-post-header .crt-post-title"),
                this.addStyle(t.postUsername, ".crt-widget .crt-post-username a"),
                this.addStyle(t.postIcon, ".crt-widget .crt-social-icon i"),
                this.addStyle(t.postIcon, ".crt-widget .crt-social-icon svg"),
                this.addStyle(t.postIcon, ".crt-widget .crt-post-share .crt-share-button svg"),
                this.addStyle(t.postIcon, ".crt-widget .crt-post-share .crt-popup-share-icon-container-icons a:not(:hover) svg"),
                this.addStyle(t.postIconWithBorder, ".crt-widget .crt-post-share .crt-popup-share-icon-container-icons a:not(:hover)"),
                this.addStyle(t.postComments, ".crt-widget .crt-comments-likes"),
                this.addStyle(t.postShareIcons, ".crt-widget .crt-post-footer .crt-post-share a"),
                this.addStyle(t.postFooter, ".crt-widget .crt-post-footer"),
                this.addStyle(t.postDate, ".crt-widget .crt-post-date a"),
                this.addStyle(t.postDate, ".crt-widget .crt-post-date span"),
                this.addStyle(t.postMaxHeightReadMore, ".crt-widget .crt-post.crt-post-max-height .crt-post-max-height-read-more"),
                this.addStyle(t.gridPost, ".crt-widget .crt-grid-post"),
                this.addCssRules(t.cssRules)
            }
        }
        const od = (t,e)=>{
            if (qi(t) && t.is_embed)
                return t.network_name + " embed post";
            const o = e.get("post.clickAction");
            let r = "Post " + t.feed_position + ", " + t.network_name + " post ";
            if (t.user_full_name && (r += "by " + t.user_full_name + " "),
            t.text) {
                let e = t.text;
                t.is_html && (e = function(t) {
                    const e = document.createElement("div");
                    return e.innerHTML = t,
                    (e.textContent || e.innerText || "").replace(/^\s+|\s+$/gm, "")
                }(t.text));
                const n = e.split(" ");
                if (r += n.slice(0, 20).join(" ") + " ",
                n.length > 20)
                    switch (o) {
                    case "open-popup":
                    case "nothing":
                        r += "press enter to read more";
                        break;
                    case "goto-source":
                        r += "press enter to visit post"
                    }
            }
            return r
        }
          , rd = (t,e)=>{
            if (qi(t) && t.is_embed)
                return null;
            const o = e.get("post.clickAction")
              , r = t.text.split(" ");
            return ("open-popup" === o || "nothing" === o) && r.length > 20 ? r.slice(20, r.length).join(" ") : null
        }
          , nd = t=>{
            const e = document.createElement("div")
              , o = "speak-" + Date.now();
            e.setAttribute("id", o),
            e.setAttribute("aria-live", "polite"),
            e.classList.add("visually-hidden"),
            document.body.appendChild(e),
            window.setTimeout((function() {
                document.getElementById(o).innerHTML = t
            }
            ), 100),
            window.setTimeout((function() {
                document.body.removeChild(document.getElementById(o))
            }
            ), 1e3)
        }
        ;
        function sd(t) {
            const e = ki();
            if (!e.config.get("widget.showLoadMore"))
                return null;
            const [o,r] = ai(!1)
              , n = t=>{
                r(t.length > 0 && e.feed.hasMorePosts())
            }
              , s = async o=>{
                o.preventDefault(),
                o.cancelBubble = !0,
                o.stopPropagation(),
                await t.onLoadMore();
                const r = e.data.nOfPosts - e.data.previousNOfPosts
                  , n = e.data.previousNOfPosts;
                nd(`${r} more posts are loaded.`),
                Number.isInteger(n) && setTimeout((()=>{
                    const t = e.$container.querySelectorAll(`[data-position='${n + 1}']`);
                    t.length && t[0].focus()
                }
                ), 900)
            }
            ;
            return void 0 === t.showLoadMore ? li((()=>(e.events.on(is.POSTS_FETCHED, n),
            ()=>{
                e.events.off(is.POSTS_FETCHED, n)
            }
            )), []) : r(t.showLoadMore),
            o ? cs("div", {
                className: "crt-load-more-container",
                style: "overflow-anchor: none",
                children: cs("button", {
                    className: "crt-load-more",
                    onClick: s,
                    "aria-label": "click to load more posts",
                    children: cs("span", {
                        children: [" ", Hi("load-more")]
                    })
                })
            }) : null
        }
        const id = tt({})
          , ad = ({post: t, el: e, children: o})=>{
            const r = {
                post: t,
                el: e
            };
            return cs(id.Provider, {
                value: r,
                children: o
            })
        }
        ;
        function cd(t) {
            if (!t.post.video)
                return null;
            const {config: e} = hi(Pi)
              , {el: o} = hi(id)
              , r = e.get("post.autoPlayVideos")
              , n = ui()
              , s = ui()
              , i = ui();
            li((()=>{
                n.current && (i.current = new ll(n.current),
                i.current.on("state:changed", (t=>{
                    var e, r;
                    e = o,
                    r = "crt-post-video-playing",
                    t ? Yn(e, r) : Kn(e, r)
                }
                )),
                r && window.setTimeout((()=>{
                    i.current && i.current.play()
                }
                ), 200),
                s.current = ()=>{
                    t.playable && i.current && i.current.playPause()
                }
                )
            }
            ), []);
            let a = "";
            return t.post.thumbnail ? a = t.post.thumbnail : t.post.image && (a = t.post.image),
            cs("div", {
                className: "crt-video-container " + (t.playable ? "playable" : ""),
                children: [cs("span", {
                    className: "crt-play",
                    onClick: ()=>{
                        s.current && s.current()
                    }
                    ,
                    tabIndex: t.tabIndex || 0,
                    "aria-label": "play video",
                    role: "button",
                    onKeyPress: t=>{
                        nl(t) && s.current && s.current()
                    }
                    ,
                    children: cs("i", {
                        className: "crt-play-icon"
                    })
                }), cs("video", {
                    preload: "none",
                    playsInline: !0,
                    "aria-label": "video",
                    loop: !0,
                    muted: !0,
                    ref: n,
                    poster: a,
                    children: cs("source", {
                        src: t.post.video,
                        type: "video/mp4"
                    })
                })]
            })
        }
        function ld(t) {
            const e = t.post
              , o = ki();
            if (!qi(e))
                return null;
            const r = Ri(e)
              , n = Ki(e);
            return n ? cs("div", {
                className: "crt-post-fullname",
                children: "nothing" !== o.config.get("post.clickAction") ? cs("a", {
                    href: r,
                    target: "_blank",
                    role: "heading",
                    "aria-level": 1,
                    children: n
                }) : cs("span", {
                    children: n
                })
            }) : null
        }
        function ud(t) {
            if (!qi(t.post))
                return null;
            const e = t.post;
            return cs(D, {
                children: e.images && e.images.length > 1 && cs("div", {
                    className: "crt-image-carousel",
                    children: cs(Zc, {
                        icon: "crt-icon-clone"
                    })
                })
            })
        }
        function dd(t) {
            if (!qi(t.post))
                return null;
            const e = t.post;
            let o = "";
            if (e.spots) {
                for (let t = 0; t < e.spots.length; t++) {
                    const r = e.spots[t].label;
                    let n = e.spots[t].url;
                    "" !== r && ("" !== n ? (-1 === n.indexOf("http") && (n = `http://${n}`),
                    o += `<a href="${n}" target='_blank'>${r}</a>, `) : o += `${r}, `)
                }
                o = o.replace(/,\s*$/, "")
            }
            return o ? cs("div", {
                className: "crt-post-spots-content",
                dangerouslySetInnerHTML: {
                    __html: "In this photo: " + o
                }
            }) : null
        }
        const hd = t=>{
            if (!qi(t.post))
                return null;
            const e = t.post
              , o = hi(Pi)
              , r = o.config.get("post.showComments")
              , n = o.config.get("post.showLikes") && cs("span", {
                className: "crt-likes",
                children: [e.likes, " ", cs("span", {
                    children: Hi("likes", e.likes)
                })]
            })
              , s = r && cs("span", {
                className: "crt-comments",
                children: [e.comments, " ", cs("span", {
                    children: Hi("comments", e.comments)
                })]
            })
              , i = s && n ? cs("span", {
                className: "crt-sep"
            }) : void 0;
            return s || n ? cs("div", {
                className: "crt-comments-likes",
                children: [n, " ", i, " ", s]
            }) : null
        }
          , pd = tt({})
          , fd = ({loader: t, children: e})=>{
            const o = {
                loader: t
            };
            return cs(pd.Provider, {
                value: o,
                children: e
            })
        }
        ;
        function gd(t) {
            const e = t.post
              , o = ui()
              , r = ui()
              , n = Wi(e)
              , s = ki()
              , i = hi(Uu)
              , a = hi(pd);
            if (!e.image)
                return null;
            li((()=>{
                o.current && (s.config.get("widget.lazyLoadType") !== $u || i.lazyLoaded ? a.loader.reg(n, e.image, o.current) : s.events.on(is.WIDGET_VISIBLE, (t=>{
                    t && a.loader.reg(n, e.image, o.current)
                }
                )))
            }
            ), []);
            const c = hl.get("widget.lazyLoad", !1)
              , l = hl.get("widget.progressiveLoad", !0)
              , u = c || l ? "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw" : e.image
              , d = $i(e);
            return cs("div", {
                className: "crt-image-c",
                ref: r,
                children: [cs("span", {
                    className: "crt-play",
                    children: cs("i", {
                        className: "crt-play-icon"
                    })
                }), cs("img", {
                    src: u,
                    ref: o,
                    className: "crt-post-image",
                    tabIndex: 0,
                    onLoad: ()=>{
                        s.events.trigger("post:image:loaded")
                    }
                    ,
                    onError: ()=>{
                        s.events.trigger("post:image:loaded")
                    }
                    ,
                    alt: d,
                    style: {
                        opacity: 0
                    }
                })]
            })
        }
        const md = es("PostActions");
        function bd(t) {
            if (!qi(t.post))
                return null;
            const e = t.post;
            return cs("div", {
                className: "crt-post-read-more",
                children: cs("button", {
                    className: "crt-post-read-more-button",
                    onClick: t=>function(t, e) {
                        md.log("Read More Click" + t.id)
                    }(e),
                    children: Hi("Read more")
                })
            })
        }
        function vd(t) {
            return qi(t) ? t.id + "" : t.slug
        }
        function wd(t, e) {
            if ("Tab" === t.key && t.shiftKey && void 0 !== e.feed_position) {
                if (parseInt(t.target.getAttribute("data-position")) !== e.feed_position)
                    return !1;
                const o = document.querySelectorAll(`[data-position='${e.feed_position - 1}']`);
                if (o.length)
                    return console.log("going to previous post"),
                    t.preventDefault(),
                    o[0].focus(),
                    !0
            }
            return !1
        }
        function yd(t, e) {
            if (console.log("e.key", t.key),
            "Tab" === t.key && !t.shiftKey && void 0 !== e.feed_position) {
                console.log("onTabkKeyPress");
                const o = document.querySelectorAll(`[data-position='${e.feed_position + 1}']`)
                  , r = document.querySelectorAll(".crt-load-more-container .crt-load-more");
                if (o.length)
                    return t.preventDefault(),
                    o[0].focus(),
                    !0;
                if (r.length)
                    return t.preventDefault(),
                    r[0].focus(),
                    !0
            }
            return !1
        }
        function Cd(t) {
            const e = t.post
              , o = t.classes
              , {tracker: r, config: n, events: s} = ki()
              , i = ui()
              , a = t.sx ?? {}
              , c = t=>{
                const o = t.target
                  , n = o?.tagName.toLowerCase()
                  , a = o?.getAttribute("href");
                s.on(`${is.POST_CLOSED}${u}`, (()=>{
                    setTimeout((()=>{
                        i.current && i.current.focus()
                    }
                    ))
                }
                )),
                "a" === n && "#" !== a && "javascript:;" !== a ? r.track("click:link") : (t.preventDefault(),
                t.cancelBubble = !0,
                s.trigger(is.POST_CLICK, e))
            }
            ;
            function l(t) {
                return wd(t, e)
            }
            li((()=>{
                const t = n.get("post.maxHeight", 0);
                t > 0 && (Yn(i, "crt-post-max-height"),
                zn(i, {
                    "max-height": `${t}px`
                }))
            }
            ), []);
            const u = vd(e)
              , d = od(e, n);
            return cs(ad, {
                post: e,
                el: i,
                children: cs("article", {
                    className: o.join(" "),
                    "data-post": u,
                    style: a,
                    ref: i,
                    tabIndex: t.tabIndex || 0,
                    "aria-label": d,
                    role: "article",
                    onClick: c,
                    "data-position": e.feed_position,
                    onKeyPress: t=>{
                        if (console.log("onKeyPress"),
                        !l(t) && nl(t)) {
                            c(t);
                            const o = rd(e, n);
                            o && nd(o)
                        }
                    }
                    ,
                    onKeyDown: l,
                    children: [cs("div", {
                        className: "crt-post-c crt-post-border",
                        style: {},
                        children: [t.children, cs("div", {
                            className: "crt-post-max-height-read-more",
                            children: cs("button", {
                                className: "crt-post-read-more-button",
                                onClick: c,
                                children: Hi("read-more")
                            })
                        })]
                    }), cs("span", {
                        class: "hidden-for-aria-label",
                        onKeyDown: function(t) {
                            yd(t, e)
                        },
                        tabIndex: 0,
                        "aria-label": "End of post.",
                        role: "status"
                    })]
                })
            }, u)
        }
        const _d = t=>{
            if (!qi(t.post))
                return null;
            const e = t.post
              , o = Ui(e)
              , r = Ri(e);
            let n = "padding: 0 5px;";
            t.width && (n += `width: ${t.width}px`);
            const s = !(!t.className || !t.className.includes("hide"));
            return cs(D, {
                children: o && cs("span", {
                    className: `crt-post-username ${t.className}`,
                    ref: t.cRef,
                    style: n,
                    children: cs("a", {
                        href: r,
                        target: "_blank",
                        onClick: t=>{
                            r && "#" !== r || t.preventDefault()
                        }
                        ,
                        "aria-hidden": s,
                        tabIndex: s ? -1 : 0,
                        children: o
                    })
                })
            })
        }
        ;
        class xd extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "refFooter", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "postUserImageRef", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "postUserNameRef", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "postDateRef", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "postShareButtons", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                this.state = {
                    showUsername: !1,
                    showDate: !0
                }
            }
            componentDidMount() {
                if (this.props.multiLine)
                    this.setState({
                        showUsername: Un(this.postUserImageRef) + Un(this.postUserNameRef) + Un(this.postShareButtons) + 40 < Un(this.refFooter),
                        showDate: Un(this.postUserImageRef) + Un(this.postDateRef) + Un(this.postShareButtons) + 40 < Un(this.refFooter)
                    });
                else {
                    const t = Un(this.postDateRef) + Un(this.postShareButtons) + Un(this.postUserImageRef) + 40
                      , e = Un(this.postUserNameRef) + t;
                    this.setState({
                        showUsername: e < Un(this.refFooter),
                        showDate: t < Un(this.refFooter)
                    })
                }
            }
            render() {
                const t = this.props.post;
                let e = "crt-post-footer";
                return el(t) || (e += " crt-post-footer-no-user-image"),
                this.state.showUsername || (e += " crt-post-footer-no-username"),
                cs("div", {
                    className: e,
                    ref: this.refFooter,
                    children: [cs(ol, {
                        post: t,
                        cRef: this.postUserImageRef
                    }), cs(_d, {
                        className: this.state.showUsername ? "" : "hide",
                        post: t,
                        cRef: this.postUserNameRef
                    }), cs(fl, {
                        className: this.state.showDate ? "" : "hide",
                        post: t,
                        cRef: this.postDateRef
                    }), cs(Gl, {
                        post: t,
                        cRef: this.postShareButtons
                    })]
                })
            }
        }
        const Pd = t=>{
            const e = t.post
              , o = ki().config.get("post.showTitles")
              , r = qi(e) ? function(t, e) {
                if (t.data)
                    for (const o of t.data)
                        if (o.name === e)
                            return o.value
            }(e, "title") : e.title;
            return o && void 0 !== r ? cs("div", {
                className: "crt-post-title",
                children: r
            }) : null
        }
        ;
        function kd() {
            const t = {}
              , e = ki()
              , o = e.config.get("widget.verticalSpacing")
              , r = e.config.get("widget.horizontalSpacing");
            return null != o && (t.marginBottom = o + "px"),
            null != r && (t.marginLeft = t.marginRight = r / 2 + "px"),
            t
        }
        function Sd() {
            const t = {}
              , e = ki()
              , o = e.config.get("widget.verticalSpacing")
              , r = e.config.get("widget.horizontalSpacing");
            return null != o && (t.paddingTop = "0px",
            t.paddingBottom = o + "px"),
            null != r && (t.paddingLeft = t.paddingRight = r / 2 + "px"),
            t
        }
        function Ad({post: t}) {
            return cs(Cd, {
                post: t,
                classes: Yi(t, "crt-post"),
                sx: kd(),
                children: [cs("div", {
                    className: "crt-post-content",
                    children: cs("div", {
                        className: "crt-image crt-hitarea crt-post-content-image",
                        children: [cs(gd, {
                            post: t
                        }), cs(ud, {
                            post: t
                        }), cs(cd, {
                            post: t
                        })]
                    })
                }), cs(dd, {
                    post: t
                }), cs("div", {
                    className: "crt-post-header",
                    children: [cs(tl, {
                        post: t
                    }), cs(ld, {
                        post: t
                    }), cs(Pd, {
                        post: t
                    })]
                }), cs(Yl, {
                    post: t
                }), cs(hd, {
                    post: t
                }), cs(xd, {
                    post: t
                }), cs(bd, {
                    post: t
                })]
            })
        }
        function Od({post: t}) {
            return cs(Cd, {
                post: t,
                classes: Yi(t, "crt-post crt-post-berlin"),
                sx: kd(),
                children: [cs("div", {
                    className: "crt-post-content",
                    children: [cs("div", {
                        className: "crt-image crt-hitarea crt-post-content-image",
                        children: [cs(gd, {
                            post: t
                        }), cs(ud, {
                            post: t
                        }), cs(cd, {
                            post: t
                        })]
                    }), cs(dd, {
                        post: t
                    }), cs("div", {
                        className: "crt-post-header",
                        children: [cs(tl, {
                            post: t
                        }), cs(ld, {
                            post: t
                        })]
                    })]
                }), cs(Pd, {
                    post: t
                }), cs(Yl, {
                    post: t
                }), cs(hd, {
                    post: t
                }), cs(xd, {
                    post: t,
                    multiLine: !0
                }), cs(bd, {
                    post: t
                })]
            })
        }
        function jd({post: t}) {
            return cs(Cd, {
                post: t,
                classes: Yi(t, "crt-post  crt-post-barcelona"),
                sx: kd(),
                children: [cs("div", {
                    className: "crt-post-content",
                    children: [cs("div", {
                        className: "crt-image crt-hitarea crt-post-content-image",
                        children: [cs(gd, {
                            post: t
                        }), cs(ud, {
                            post: t
                        }), cs(cd, {
                            post: t
                        })]
                    }), cs(dd, {
                        post: t
                    }), cs("div", {
                        className: "crt-post-header",
                        children: [cs(tl, {
                            post: t
                        }), cs(ld, {
                            post: t
                        }), cs(Pd, {
                            post: t
                        })]
                    })]
                }), cs(Yl, {
                    post: t
                }), cs(hd, {
                    post: t
                }), cs(xd, {
                    post: t
                }), cs(bd, {
                    post: t
                })]
            })
        }
        function Fd({post: t}) {
            return cs(Cd, {
                post: t,
                classes: Yi(t, "crt-post crt-post-london"),
                sx: kd(),
                children: [cs("div", {
                    className: "crt-post-content",
                    children: [cs("div", {
                        className: "crt-image crt-hitarea crt-post-content-image",
                        children: [cs(gd, {
                            post: t
                        }), cs(ud, {
                            post: t
                        }), cs(cd, {
                            post: t
                        })]
                    }), cs(dd, {
                        post: t
                    }), cs("div", {
                        className: "crt-post-header",
                        children: [cs(tl, {
                            post: t
                        }), cs(ld, {
                            post: t
                        }), cs(Pd, {
                            post: t
                        })]
                    })]
                }), cs(Yl, {
                    post: t
                }), cs(hd, {
                    post: t
                }), cs(xd, {
                    post: t,
                    multiLine: !0
                }), cs(bd, {
                    post: t
                })]
            })
        }
        class Ed extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "refFooter", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "postIconRef", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "postUserNameRef", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "postShareButtons", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                this.state = {
                    showUsername: !1
                }
            }
            componentDidMount() {
                const t = Un(this.postUserNameRef) + Un(this.postShareButtons) + Un(this.postIconRef) + 40;
                this.setState({
                    showUsername: t < Un(this.refFooter)
                })
            }
            render() {
                const t = this.props.post;
                let e = "crt-post-text-footer";
                return this.props.className && (e = this.props.className),
                e += " post-footer-2",
                cs("div", {
                    className: e,
                    ref: this.refFooter,
                    children: [cs(tl, {
                        post: t,
                        className: "crt-social-icon-normal",
                        cRef: this.postIconRef
                    }), cs(_d, {
                        className: this.state.showUsername ? "" : "hide",
                        post: t,
                        cRef: this.postUserNameRef
                    }), cs(Gl, {
                        post: t,
                        cRef: this.postShareButtons
                    })]
                })
            }
        }
        function Dd({post: t}) {
            return cs(Cd, {
                post: t,
                classes: Yi(t, "crt-post crt-post-havana"),
                sx: kd(),
                children: [cs("div", {
                    className: "crt-post-content",
                    children: [cs("div", {
                        className: "crt-image crt-hitarea crt-post-content-image",
                        children: [cs(gd, {
                            post: t
                        }), cs(ud, {
                            post: t
                        }), cs(cd, {
                            post: t
                        })]
                    }), cs(ol, {
                        post: t
                    })]
                }), cs(dd, {
                    post: t
                }), cs("div", {
                    className: "crt-post-header",
                    children: [cs(ld, {
                        post: t
                    }), cs(Pd, {
                        post: t
                    })]
                }), cs(Yl, {
                    post: t
                }), cs(hd, {
                    post: t
                }), cs(Ed, {
                    post: t
                }), cs(bd, {
                    post: t
                })]
            })
        }
        function Td({post: t}) {
            return cs(Cd, {
                post: t,
                classes: Yi(t, "crt-post crt-post-helsinki"),
                sx: kd(),
                children: t.image ? cs("div", {
                    children: [cs("div", {
                        className: "crt-post-content",
                        children: cs("div", {
                            className: "crt-image crt-hitarea crt-post-content-image",
                            children: [cs(gd, {
                                post: t
                            }), cs(ud, {
                                post: t
                            }), cs(cd, {
                                post: t
                            })]
                        })
                    }), cs("div", {
                        className: "crt-post-footer-helsinki",
                        children: [cs(ol, {
                            post: t
                        }), cs("div", {
                            className: "crt-post-helsinki-user-fullname-date",
                            children: [cs(ld, {
                                post: t
                            }), cs(fl, {
                                post: t
                            })]
                        }), cs(tl, {
                            post: t
                        })]
                    })]
                }) : cs("div", {
                    children: [cs("div", {
                        className: "crt-post-content",
                        children: [cs(ol, {
                            post: t
                        }), cs(Pd, {
                            post: t
                        }), cs(ld, {
                            post: t
                        }), cs(Yl, {
                            post: t
                        })]
                    }), cs("div", {
                        className: "crt-post-footer-helsinki",
                        children: [cs(fl, {
                            post: t
                        }), cs(tl, {
                            post: t
                        })]
                    })]
                })
            })
        }
        const Nd = ru((t=>{
            const e = ki()
              , o = e.config.get("theme")
              , r = e.config.get("post.template");
            return "function" == typeof r ? r(t.post, t, e) : o == Cn.BERLIN ? cs(Od, {
                ...t
            }) : o == Cn.LONDON ? cs(Fd, {
                ...t
            }) : o == Cn.BARCELONA ? cs(jd, {
                ...t
            }) : o == Cn.HAVANA ? cs(Dd, {
                ...t
            }) : o == Cn.HELSINKI ? cs(Td, {
                ...t
            }) : cs(Ad, {
                ...t
            })
        }
        ), ((t,e)=>!(!qi(t.post) || !qi(e.post) || e.post.post_status == e.post.post_status)));
        class Ld extends T {
            constructor(t) {
                super(t),
                this.state = {
                    posts: []
                }
            }
            componentDidMount() {
                this.props.manager.registerCol(this)
            }
            componentWillUnmount() {
                this.props.manager.unregisterCol(this)
            }
            allPostsAdded() {
                this.context.events.trigger(is.POSTS_COL_RENDERED)
            }
            addPost(t) {
                const e = this.state.posts;
                e.push(t),
                this.setState({
                    posts: e
                })
            }
            rest() {
                this.setState({
                    posts: []
                })
            }
            render(t) {
                const e = {
                    width: t.colWidth + "%",
                    float: "left",
                    "-webkit-box-sizing": "border-box",
                    "-moz-box-sizing": "border-box",
                    "-o-box-sizing": "border-box",
                    "box-sizing": "border-box"
                }
                  , o = this.context.config.get("post.component") || Nd
                  , r = this.state.posts.map(((t,e)=>{
                    const r = Wi(t);
                    return F(o, {
                        post: t,
                        key: r
                    })
                }
                ));
                return cs("div", {
                    style: e,
                    className: "crt-col-" + t.i,
                    children: r
                })
            }
        }
        async function Bd(t, e, o=12, r) {
            try {
                return await t.loadXPosts(o, r)
            } catch (t) {
                !function(t) {
                    return !!t && "string" == typeof t.message
                }(t) ? e.setMessage("Feed failed to load, check browser console for more info", "error") : e.setMessage(t.message, "error")
            }
        }
        Object.defineProperty(Ld, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Pi
        });
        var Id = vt ? vt.isConcatSpreadable : void 0;
        const Md = function(t) {
            return Ae(t) || Se(t) || !!(Id && t && t[Id])
        };
        const qd = function t(e, o, r, n, s) {
            var i = -1
              , a = e.length;
            for (r || (r = Md),
            s || (s = []); ++i < a; ) {
                var c = e[i];
                o > 0 && r(c) ? o > 1 ? t(c, o - 1, r, n, s) : Co(s, c) : n || (s[s.length] = c)
            }
            return s
        };
        const Wd = function(t, e) {
            return t && Tr(t, e, to)
        };
        const Hd = function(t, e) {
            return function(o, r) {
                if (null == o)
                    return o;
                if (!Je(o))
                    return t(o, r);
                for (var n = o.length, s = e ? n : -1, i = Object(o); (e ? s-- : ++s < n) && !1 !== r(i[s], s, i); )
                    ;
                return o
            }
        };
        const Rd = Hd(Wd);
        const zd = function(t, e) {
            var o = -1
              , r = Je(t) ? Array(t.length) : [];
            return Rd(t, (function(t, n, s) {
                r[++o] = e(t, n, s)
            }
            )),
            r
        };
        const Ud = function(t, e) {
            var o = t.length;
            for (t.sort(e); o--; )
                t[o] = t[o].value;
            return t
        };
        const $d = function(t, e) {
            if (t !== e) {
                var o = void 0 !== t
                  , r = null === t
                  , n = t == t
                  , s = As(t)
                  , i = void 0 !== e
                  , a = null === e
                  , c = e == e
                  , l = As(e);
                if (!a && !l && !s && t > e || s && i && c && !a && !l || r && i && c || !o && c || !n)
                    return 1;
                if (!r && !s && !l && t < e || l && o && n && !r && !s || a && o && n || !i && n || !c)
                    return -1
            }
            return 0
        };
        const Vd = function(t, e, o) {
            for (var r = -1, n = t.criteria, s = e.criteria, i = n.length, a = o.length; ++r < i; ) {
                var c = $d(n[r], s[r]);
                if (c)
                    return r >= a ? c : c * ("desc" == o[r] ? -1 : 1)
            }
            return t.index - e.index
        };
        const Gd = function(t, e, o) {
            e = e.length ? Is(e, (function(t) {
                return Ae(t) ? function(e) {
                    return Us(e, 1 === t.length ? t[0] : t)
                }
                : t
            }
            )) : [_r];
            var r = -1;
            e = Is(e, Me(Ea));
            var n = zd(t, (function(t, o, n) {
                return {
                    criteria: Is(e, (function(e) {
                        return e(t)
                    }
                    )),
                    index: ++r,
                    value: t
                }
            }
            ));
            return Ud(n, (function(t, e) {
                return Vd(t, e, o)
            }
            ))
        };
        const Kd = Fr((function(t, e) {
            if (null == t)
                return [];
            var o = e.length;
            return o > 1 && Vr(t, e[0], e[1]) ? e = [] : o > 2 && Vr(e[0], e[1], e[2]) && (e = [e[0]]),
            Gd(t, qd(e, 1), [])
        }
        ));
        var Yd;
        !function(t) {
            t[t.NOT_STARTED = 0] = "NOT_STARTED",
            t[t.LOADING = 1] = "LOADING",
            t[t.LOADED = 2] = "LOADED",
            t[t.FAILED = 3] = "FAILED"
        }(Yd || (Yd = {}));
        class Zd {
            constructor(t=!0) {
                Object.defineProperty(this, "images", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "currentImage", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "loading", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "autoLoad", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                this.autoLoad = t
            }
            reg(t, e, o) {
                this.images.push({
                    idx: t,
                    src: e,
                    tag: o,
                    state: Yd.NOT_STARTED
                }),
                this.sort(),
                this.autoLoad && !this.loading && this.startLoad()
            }
            sort() {
                Kd(this.images, [function(t) {
                    return t.idx
                }
                ])
            }
            startLoad() {
                this.loading = !0,
                this.loadNext(this.currentImage)
            }
            loadNext(t) {
                if (this.currentImage = t,
                this.currentImage >= this.images.length)
                    return void (this.loading = !1);
                const e = this.images[this.currentImage];
                e.state === Yd.NOT_STARTED ? this.loadImage(e) : this.loadNext(this.currentImage + 1)
            }
            loadImage(t) {
                t.tag.onload = ()=>{
                    t.state = Yd.LOADED,
                    Rn(t.tag, "opacity", 0, 1, 400),
                    this.loadImageFinished(t)
                }
                ,
                t.tag.onerror = ()=>{
                    console.log("ERROR: " + t.src),
                    t.state = Yd.FAILED,
                    function(t) {
                        const e = Mn(t);
                        e ? e.style.setProperty("display", "none") : console.log("Could not find element ")
                    }(t.tag),
                    this.loadImageFinished(t)
                }
                ,
                t.state = Yd.LOADING,
                t.tag.src = t.src
            }
            loadImageFinished(t) {
                t.tag.onload = null,
                t.tag.onerror = null,
                this.loadNext(this.currentImage + 1)
            }
            imageLoaded(t) {}
            imageFailed(t) {}
        }
        const Xd = es("WaterfallColManager");
        class Qd {
            constructor() {
                Object.defineProperty(this, "cols", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "postsRendered", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "postsToAdd", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "alive", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !0
                }),
                this.rebuild = Wl(this.rebuild, 100)
            }
            destroy() {
                this.alive = !1
            }
            registerCol(t) {
                Xd.log("REGISTER"),
                Xd.log(t),
                this.cols.push(t),
                this.postsRendered.length > 0 && this.rebuild()
            }
            unregisterCol(t) {
                Xd.log("UNREGISTER");
                for (let e = 0; e < this.cols.length; e++)
                    this.cols[e] === t && (Xd.log("FOUND!!!"),
                    this.cols.splice(e, 1));
                Xd.log(this.cols),
                this.cols.length > 0 && this.rebuild()
            }
            rebuild() {
                if (this.postsToAdd = zl(this.postsRendered),
                this.postsRendered = [],
                this.cols.length > 0) {
                    for (let t = 0; t < this.cols.length; t++)
                        this.cols[t].rest();
                    window.requestAnimationFrame((()=>{
                        this.addNextPost()
                    }
                    ))
                }
            }
            addPosts(t) {
                this.postsToAdd = this.postsToAdd.concat(t),
                this.cols.length && window.requestAnimationFrame((()=>{
                    this.addNextPost()
                }
                ))
            }
            addNextPost() {
                if (!this.alive)
                    return;
                const t = this.postsToAdd.shift();
                if (t) {
                    const e = this.getShortestCol();
                    this.cols[e].addPost(t),
                    this.postsRendered.push(t),
                    window.requestAnimationFrame((()=>{
                        setTimeout((()=>{
                            this.addNextPost()
                        }
                        ), 5)
                    }
                    ))
                } else
                    this.allPostsAdded()
            }
            allPostsAdded() {
                for (let t = 0; t < this.cols.length; t++)
                    this.cols[t].allPostsAdded()
            }
            getShortestCol() {
                let t = 0
                  , e = $n(this.cols[0].base);
                for (let o = 1; o < this.cols.length; o++) {
                    const r = $n(this.cols[o].base);
                    r < e && (t = o,
                    e = r)
                }
                return t
            }
            reset() {
                this.postsRendered = [],
                this.postsToAdd = [],
                window.requestAnimationFrame((()=>{
                    for (let t = 0; t < this.cols.length; t++)
                        this.cols[t].rest()
                }
                ))
            }
        }
        function Jd(t) {
            return t.show ? cs("div", {
                className: "crt-feed-spacer",
                children: "- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"
            }) : null
        }
        const th = es("WaterfallWidget");
        class eh extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "re", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "previousFeedWidth", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: -1
                }),
                Object.defineProperty(this, "refFeed", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "refCols", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "posts", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "config", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "loader", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new Zd
                }),
                Object.defineProperty(this, "manager", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new Qd
                }),
                Object.defineProperty(this, "firstLoad", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !0
                }),
                Object.defineProperty(this, "onLoadMore", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: async()=>await this._loadPosts()
                }),
                Object.defineProperty(this, "loadPage", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: async t=>{
                        this.reset(),
                        this.setState({
                            page: t
                        }),
                        this.posts = [];
                        const e = await this.context.widget.feed.loadPage(t);
                        e && (this.posts.concat(e.posts),
                        this.manager.reset(),
                        window.requestAnimationFrame((()=>{
                            this.manager.addPosts(e.posts)
                        }
                        )))
                    }
                }),
                this.config = t.config;
                const e = this.config.get("widget.postsPerPage", 12);
                this.config.set("feed.limit", e),
                this.state = {
                    showPopup: !1,
                    visible: !1,
                    colCount: 0,
                    message: "",
                    messageType: "",
                    page: 0
                }
            }
            componentDidMount() {
                th.log("componentDidMount"),
                this.re = Rl(this.updateLayout.bind(this), this.base),
                this.context.widget.filterService.registerOnFilterChanged(this.onFilterChanged.bind(this)),
                this.context.widget.filterService.triggerCheckDefaultFilter()
            }
            componentWillUnmount() {
                this.manager.destroy(),
                this.re?.disconnect()
            }
            onFilterChanged(t) {
                th.log("onFilterChanged " + this.props.widgetId),
                this.reset(),
                this.context.widget.feed.reset(),
                this.context.widget.feed.setParams(t),
                this._loadPosts()
            }
            async _loadPosts() {
                th.log("_loadPosts");
                const t = {};
                "manila" === this.config.get("theme") && (t.has_media = !0),
                "sydney" === this.config.get("theme") && (t.has_embed = "all");
                const e = await Bd(this.context.widget.feed, this.context.message, this.config.get("widget.postsPerPage", 12), t);
                e && (this.posts = this.posts.concat(e),
                this.manager.addPosts(e)),
                this.setState({}),
                this.context.widget.data.previousNOfPosts = this.context.widget.data.nOfPosts,
                this.context.widget.data.nOfPosts = this.posts.length
            }
            reset() {
                this.posts = [],
                this.manager.reset()
            }
            updateLayout(t=!1) {
                th.log("updateLayout ", "force:", t);
                const e = this.feedWidth();
                if (e === this.previousFeedWidth && !t)
                    return;
                this.previousFeedWidth = e;
                const o = this.config.get("widget.colWidth", 100);
                let r = Math.floor(e / o);
                r = r < 1 ? 1 : r,
                (r !== this.state.colCount || t) && (this.setState({
                    colCount: r
                }),
                (this.firstLoad || t) && (this.firstLoad = !1,
                window.requestAnimationFrame((()=>{
                    this._loadPosts()
                }
                ))))
            }
            feedWidth() {
                const t = Un(this.refFeed);
                return t < 100 ? 100 : t
            }
            render() {
                th.log("render");
                const t = []
                  , e = 100 / this.state.colCount;
                for (let o = 0; o < this.state.colCount; o++)
                    t.push(cs(Ld, {
                        i: o,
                        colWidth: e,
                        ref: this.refCols,
                        manager: this.manager
                    }, o));
                const o = this.context.widget.data.nOfPosts ? "feed" : "presentation";
                return cs("div", {
                    className: "crt-feed-scroll",
                    children: cs(fd, {
                        loader: this.loader,
                        children: [cs(Jd, {
                            show: 0 === this.posts.length
                        }), cs("div", {
                            className: "crt-feed",
                            ref: this.refFeed,
                            tabIndex: 0,
                            "aria-label": "There are " + this.context.widget.data.nOfPosts + " posts in the feed",
                            role: o,
                            children: t
                        }), cs(sd, {
                            onLoadMore: this.onLoadMore
                        })]
                    })
                })
            }
        }
        Object.defineProperty(eh, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Yu
        }),
        eh.contextType = Yu;
        const oh = es("Waterfall");
        class rh extends td {
            setStyles(t) {
                this.sheet ? this.clearStyles() : this.sheet = ss.createSheet(),
                this.addStyle(t.popup, ".crt-popup"),
                this.addStyle(t.widget, ".crt-widget"),
                this.addStyle(t.loadMore, ".crt-widget .crt-load-more"),
                this.addStyle(t.gridPostIcon, ".crt-widget .crt-social-icon i"),
                this.addStyle(t.gridPostIcon, ".crt-widget .crt-social-icon svg"),
                this.addStyle(t.gridPostIcon, ".crt-widget .crt-grid-post .crt-post-share a"),
                this.addStyle(t.gridPostTextLink, ".crt-widget .crt-post-username a"),
                this.addStyle(t.gridPost, ".crt-widget .crt-grid-post"),
                this.addStyle(t.gridPostHoverGradient, ".crt-no-touch .crt-grid-post:not(.crt-post-youtube) .crt-post-c:hover .crt-post-hover:after"),
                this.addStyle(t.gridPostHoverGradient, ".crt-no-touch .crt-grid-post:not(.crt-post-youtube):not(.crt-post-has-image):not(.crt-ad-has-image) .crt-post-hover:after"),
                this.addStyle(t.gridPostContent, ".crt-widget .crt-grid-post-content"),
                this.addStyle(t.gridPostText, ".crt-widget .crt-grid-post .crt-post-text"),
                this.addStyle(t.gridPostText, ".crt-widget .crt-grid-post .crt-post-title"),
                this.addStyle(t.gridPostTextLink, ".crt-widget .crt-grid-post .crt-post-text a"),
                this.addStyle(t.gridPostHover, ".crt-widget .crt-grid-post .crt-post-hover"),
                this.addStyle(t.gridPostHoverLink, ".crt-widget .crt-grid-post .crt-post-hover a"),
                this.addStyle(t.gridPostIconWithBorder, ".crt-widget .crt-post-share .crt-popup-share-icon-container-icons a:not(:hover)"),
                this.addStyle(t.gridPostFooter, ".crt-widget .crt-grid-post .crt-post-footer"),
                this.addStyle(t.gridPostDate, ".crt-widget .crt-post-date"),
                this.addStyle(t.gridPostDate, ".crt-widget .crt-post-date .crt-post-date-link"),
                this.addStyle(t.gridPostDate, ".crt-widget .crt-grid-post .crt-post-hover .crt-post-date a"),
                this.addStyle(t.gridPostDate, ".crt-widget .crt-post-date a"),
                this.addCssRules(t.cssRules)
            }
        }
        function nh(t) {
            const e = t.post
              , o = `background-image:url('${e.image}');`
              , r = $i(e);
            return cs(D, {
                children: e.image && cs("div", {
                    "aria-label": r,
                    tabIndex: 0,
                    role: "img",
                    className: "crt-grid-post-image",
                    style: o
                })
            })
        }
        function sh(t) {
            const e = t.post
              , o = t.classes
              , {tracker: r, config: n, events: s} = ki()
              , i = ui()
              , a = t.sx ?? {}
              , c = qi(e) ? e.id : e.slug
              , l = t=>{
                const o = t.target
                  , n = o?.tagName.toLowerCase()
                  , a = o?.getAttribute("href");
                "a" === n && "#" !== a && "javascript:;" !== a ? r.track("click:link") : (t.preventDefault(),
                t.cancelBubble = !0,
                s.trigger(is.POST_CLICK, e),
                s.on(`${is.POST_CLOSED}${c}`, (()=>{
                    setTimeout((()=>{
                        i.current && i.current.focus()
                    }
                    ))
                }
                )))
            }
            ;
            t.layout.animate && (a.opacity = 0),
            li((()=>{
                t.layout.animate && setTimeout((()=>{
                    !async function(t, e=400, o="block") {
                        const r = Mn(t);
                        if (r)
                            return Rn(r, "opacity", 0, 1, e);
                        console.log("Could not find element ")
                    }(i, 400)
                }
                ), 100 * t.layout.i)
            }
            ));
            const u = (t,o)=>{
                if (!e.image && ("tokyo" === n.get("theme") || "sydney" === n.get("theme")))
                    return;
                const r = t.querySelector(".crt-post-hover");
                if (r) {
                    const t = r.querySelectorAll("[aria-label]");
                    for (let e = 0; e < t.length; e++)
                        "true" === o ? t[e].removeAttribute("tabIndex") : t[e].setAttribute("tabIndex", "0"),
                        t[e].setAttribute("aria-hidden", o)
                }
            }
              , d = od(e, n);
            return li((()=>{
                i.current && u(i.current, "true")
            }
            ), []),
            cs(ad, {
                post: e,
                el: i,
                children: cs("div", {
                    className: o.join(" "),
                    "data-post": c,
                    style: a,
                    ref: i,
                    tabIndex: 0,
                    role: "article",
                    "aria-label": d,
                    onKeyPress: t=>{
                        if (nl(t)) {
                            l(t);
                            const o = rd(e, n);
                            o && nd(o)
                        }
                        wd(t, e)
                    }
                    ,
                    "data-position": e.feed_position,
                    onKeyDown: function(t) {
                        return wd(t, e)
                    },
                    children: [cs("div", {
                        className: "crt-post-c",
                        onClick: l,
                        style: {},
                        onMouseEnter: t=>{
                            u(t.target, "false")
                        }
                        ,
                        onMouseLeave: t=>{
                            u(t.target, "true")
                        }
                        ,
                        children: t.children
                    }), cs("span", {
                        class: "hidden-for-aria-label",
                        onKeyDown: function(t) {
                            yd(t, e)
                        },
                        tabIndex: 0,
                        "aria-label": "End of post.",
                        role: "status"
                    })]
                })
            })
        }
        function ih({post: t, layout: e}) {
            return cs(sh, {
                post: t,
                classes: Yi(t, "crt-grid-post"),
                layout: e,
                sx: Sd(),
                children: cs("div", {
                    children: [cs("div", {
                        className: "crt-grid-post-content",
                        style: "padding-bottom: 100%;",
                        children: [t.image && cs(tl, {
                            post: t,
                            className: "crt-social-icon-normal"
                        }), cs(ud, {
                            post: t
                        }), cs(nh, {
                            post: t
                        }), cs(cd, {
                            post: t
                        })]
                    }), cs("div", {
                        className: "crt-post-hover",
                        children: cs("div", {
                            children: [cs("div", {
                                className: "crt-post-header",
                                children: cs(ld, {
                                    post: t
                                })
                            }), cs(Pd, {
                                post: t
                            }), cs(Yl, {
                                post: t
                            }), cs(bd, {
                                post: t
                            }), cs(xd, {
                                post: t
                            })]
                        })
                    })]
                })
            })
        }
        class ah extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "refFooter", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "postUserImageRef", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "postUserNameRef", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "postDateRef", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "postShareButtons", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                this.state = {
                    showUsername: !1,
                    showDate: !0,
                    userNameWidth: 0
                }
            }
            componentDidMount() {
                const t = Ui(this.props.post)
                  , e = Un(this.refFooter) - (Un(this.postUserImageRef) + Un(this.postShareButtons) + 10);
                this.setState({
                    showUsername: !!t && e > 40,
                    userNameWidth: e,
                    showDate: Un(this.postUserImageRef) + Un(this.postDateRef) + Un(this.postShareButtons) + 10 < Un(this.refFooter) && !t
                })
            }
            render() {
                const t = this.props.post;
                let e = "crt-post-footer";
                return el(t) || (e += " crt-post-footer-no-user-image"),
                this.state.showUsername || (e += " crt-post-footer-no-username"),
                cs("div", {
                    className: e,
                    ref: this.refFooter,
                    children: [cs(ol, {
                        post: t,
                        cRef: this.postUserImageRef
                    }), cs(_d, {
                        className: this.state.showUsername ? "" : "hide",
                        post: t,
                        cRef: this.postUserNameRef,
                        width: this.state.userNameWidth
                    }), cs(fl, {
                        className: this.state.showDate ? "" : "hide",
                        post: t,
                        cRef: this.postDateRef
                    }), cs(Gl, {
                        post: t,
                        cRef: this.postShareButtons
                    })]
                })
            }
        }
        function ch({post: t, layout: e}) {
            return cs(sh, {
                post: t,
                classes: Yi(t, "crt-grid-post crt-grid-post-new-york"),
                layout: e,
                sx: Sd(),
                children: [cs("div", {
                    className: "crt-grid-post-content",
                    children: [cs(nh, {
                        post: t
                    }), cs(cd, {
                        post: t
                    }), cs("div", {
                        className: "crt-grid-post-text",
                        children: cs(Yl, {
                            post: t
                        })
                    }), cs(tl, {
                        post: t
                    }), cs(ud, {
                        post: t
                    }), cs(fl, {
                        post: t
                    }), cs("div", {
                        className: "crt-post-hover",
                        children: [cs(Pd, {
                            post: t
                        }), cs(Yl, {
                            post: t
                        }), cs(bd, {
                            post: t
                        })]
                    })]
                }), cs(ah, {
                    post: t
                })]
            })
        }
        function lh({post: t, layout: e}) {
            return cs(sh, {
                post: t,
                classes: Yi(t, "crt-grid-post crt-grid-post-tokyo"),
                layout: e,
                sx: Sd(),
                children: [cs("div", {
                    className: "crt-grid-post-content",
                    style: "padding-bottom: 100%;",
                    children: [t.image && cs(tl, {
                        post: t,
                        className: "crt-social-icon-normal"
                    }), cs(ud, {
                        post: t
                    }), cs(nh, {
                        post: t
                    }), cs(cd, {
                        post: t
                    })]
                }), cs("div", {
                    className: "crt-post-hover",
                    children: cs("div", {
                        children: cs("div", {
                            className: "crt-post-header",
                            children: [cs(tl, {
                                post: t
                            }), cs(ld, {
                                post: t
                            }), cs(Pd, {
                                post: t
                            }), cs(fl, {
                                post: t
                            }), cs(Gl, {
                                post: t
                            })]
                        })
                    })
                })]
            })
        }
        const uh = ru((t=>{
            const e = ki().config.get("theme");
            return e == _n.NEW_YORK ? cs(ch, {
                ...t
            }) : e == _n.TOKYO ? cs(lh, {
                ...t
            }) : cs(ih, {
                post: t.post,
                layout: t.layout
            })
        }
        ), ((t,e)=>!(!qi(t.post) || !qi(e.post) || e.post.post_status == e.post.post_status)))
          , dh = es("GridWidget");
        class hh extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "previousFeedWidth", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: -1
                }),
                Object.defineProperty(this, "refFeed", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "ro", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "config", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "postsRequired", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "onWidthChanged", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: ()=>{
                        this.updateLayout()
                    }
                }),
                this.config = t.config,
                this.state = {
                    posts: [],
                    feedHeight: 0,
                    visible: !1,
                    rowCount: t.config.get("widget.rows", 2),
                    colCount: 1,
                    previousPostsCount: 0
                }
            }
            componentDidMount() {
                dh.log("componentDidMount"),
                this.ro = Rl(this.onWidthChanged, this.base),
                this.context.filterService.registerOnFilterChanged(this.onFilterChanged.bind(this)),
                this.context.filterService.triggerCheckDefaultFilter()
            }
            componentWillUnmount() {
                dh.log("componentWillUnmount"),
                this.ro?.disconnect()
            }
            onFilterChanged(t) {
                this.setState({
                    posts: []
                }),
                this.context.feed.reset(),
                this.context.feed.setParams(t);
                const e = this.postsToLoad();
                e && this._loadPosts(e)
            }
            componentDidUpdate(t, e, o) {
                dh.log("componentDidUpdate");
                const r = this.refFeed.current?.firstChild?.firstChild;
                if (r) {
                    const t = $n(r);
                    $n(this.refFeed, this.state.rowCount * t - this.context.config.get("widget.horizontalSpacing"))
                }
                const n = this.postsToLoad();
                n && this._loadPosts(n)
            }
            async _loadPosts(t) {
                const e = {};
                "manila" === this.config.get("theme") && (e.has_media = !0);
                const o = await Bd(this.context.feed, this.context.message, t, e);
                if (o) {
                    const t = this.state.posts
                      , e = t.length;
                    for (let e = 0; e < o.length; e++) {
                        const r = o[e];
                        t.push(r)
                    }
                    await this.setState({
                        previousPostsCount: e,
                        posts: t
                    }),
                    this.context.widget.data.previousNOfPosts = this.context.widget.data.nOfPosts,
                    this.context.widget.data.nOfPosts = t.length,
                    console.log("this.context.widget.data.nOfPosts", this.context.widget.data.nOfPosts),
                    console.log("this.context.widget.data.previousNOfPosts", this.context.widget.data.previousNOfPosts),
                    this.updateLayout(!0)
                }
            }
            async onLoadMore() {
                dh.log("onMoreClick");
                const t = this.context.config.get("widget.loadMoreRows");
                await new Promise(((e,o)=>{
                    this.setState({
                        rowCount: this.state.rowCount + t
                    }, (()=>{
                        setTimeout((()=>{
                            e()
                        }
                        ), 1e3)
                    }
                    ))
                }
                ))
            }
            postsToLoad() {
                return this.postsRequired = this.state.colCount * this.state.rowCount,
                dh.log("POSTS _ REQUIRED: " + this.postsRequired + " " + this.state.posts.length + this.context.feed.hasMorePosts()),
                this.postsRequired > this.state.posts.length && !this.context.feed.loading && this.context.feed.hasMorePosts() ? this.postsRequired - this.state.posts.length : 0
            }
            getColsCount() {
                const t = this.feedWidth();
                this.previousFeedWidth = t;
                const e = Math.floor(t / (this.context.config.get("post.minWidth") + 2 * this.context.config.get("widget.verticalSpacing")));
                return e < 1 ? 1 : e
            }
            updateLayout(t=!1) {
                dh.log("updateLayout");
                const e = this.feedWidth();
                if (e === this.previousFeedWidth && !t)
                    return;
                this.previousFeedWidth = e;
                const o = this.getColsCount();
                this.setState({
                    colCount: o
                })
            }
            feedWidth() {
                const t = Un(this.refFeed);
                return t < 100 ? 100 : t
            }
            render() {
                dh.log("render");
                const t = this.state.colCount
                  , e = this.feedWidth() / t
                  , o = this.state.rowCount * e
                  , r = this.state.posts.map(((t,e)=>{
                    const o = this.state.posts.length - this.state.previousPostsCount
                      , r = e - (this.state.posts.length - o);
                    return cs(uh, {
                        post: t,
                        layout: {
                            animate: !0,
                            i: r > 0 ? r : 0
                        }
                    })
                }
                ))
                  , n = {
                    height: o,
                    overflow: "hidden"
                }
                  , s = this.state.posts.length ? "feed" : "presentation";
                return cs("div", {
                    className: "crt-grid-col" + t,
                    children: [cs("div", {
                        className: "crt-feed-window",
                        style: n,
                        ref: this.refFeed,
                        tabIndex: 0,
                        "aria-label": "There are " + this.state.posts.length + " posts in the feed",
                        role: s,
                        children: cs("div", {
                            className: "crt-feed",
                            children: r
                        })
                    }), cs(sd, {
                        onLoadMore: ()=>this.onLoadMore()
                    })]
                })
            }
        }
        Object.defineProperty(hh, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Yu
        });
        const ph = es("Grid");
        const fh = function(t, e, o) {
            for (var r = -1, n = t.length; ++r < n; ) {
                var s = t[r]
                  , i = e(s);
                if (null != i && (void 0 === a ? i == i && !As(i) : o(i, a)))
                    var a = i
                      , c = s
            }
            return c
        };
        const gh = function(t, e) {
            return t > e
        };
        const mh = function(t) {
            return t && t.length ? fh(t, _r, gh) : void 0
        };
        const bh = function(t, e, o) {
            var r = -1
              , n = t.length;
            e < 0 && (e = -e > n ? 0 : n + e),
            (o = o > n ? n : o) < 0 && (o += n),
            n = e > o ? 0 : o - e >>> 0,
            e >>>= 0;
            for (var s = Array(n); ++r < n; )
                s[r] = t[r + e];
            return s
        };
        const vh = function(t, e, o) {
            var r = null == t ? 0 : t.length;
            return r ? (o && "number" != typeof o && Vr(t, e, o) ? (e = 0,
            o = r) : (e = null == e ? 0 : $a(e),
            o = void 0 === o ? r : $a(o)),
            bh(t, e, o)) : []
        };
        class wh extends T {
            constructor(t) {
                super(t)
            }
            render() {
                return cs("div", {
                    className: "crt-carousel-pane",
                    style: {
                        width: this.props.width
                    },
                    children: [cs("div", {
                        className: "crt-pane-index",
                        children: [" ", this.props.i, " "]
                    }), this.props.children]
                })
            }
        }
        function yh(t, e) {
            return t < e ? 1 : Math.floor(t / e)
        }
        const Ch = es("CarouselLayout");
        function _h(t) {
            let e = 0;
            for (let o = 0; o < t.length; o++) {
                e += Vn(t[o])
            }
            return e
        }
        class xh extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "refStage", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "refSlider", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "panesVisible", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "panesLength", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "paneWidth", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "stageWidth", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "_currentPane", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "previousPaneCount", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "previousMaxHeight", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: -1
                }),
                Object.defineProperty(this, "_moving", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "alive", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !0
                }),
                Object.defineProperty(this, "config", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "ro", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "autoPlayTimeout", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "runAutoplay", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "onDimsChanged", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: ()=>{
                        Ch.log("onDimsChanged");
                        this.feedWidth() !== this.stageWidth && this.forceUpdate()
                    }
                })
            }
            componentWillMount() {
                this.config = this.context.config,
                this.context.widget.events.trigger("post:image:loaded")
            }
            componentDidMount() {
                Ch.log("componentDidMount"),
                this.ro = Rl(this.onDimsChanged, this.base, 500),
                this.calcSizes(!0),
                this.updateHeight(!0);
                const t = Wl((()=>{
                    this.updateHeight()
                }
                ), 500);
                this.context.widget.events.on("post:image:loaded", t);
                this.config.get("widget.lazyLoadType", "none") === $u ? this.context.widget.events.on(is.WIDGET_VISIBLE, (t=>{
                    this.runAutoplay = !0,
                    this.autoPlayStart()
                }
                )) : this.runAutoplay = !0
            }
            componentDidUpdate(t, e, o) {
                Ch.log("componentDidUpdate"),
                this.runAutoplay && this.autoPlayStart(),
                this.updateHeight(!0)
            }
            componentWillUnmount() {
                this.ro?.disconnect()
            }
            updateHeight(t=!0) {
                Ch.log("updateHeight");
                const e = this.refSlider.current?.children;
                if (e && e.length > 0) {
                    const o = this.getVisiblePanes(e)
                      , r = this.getMaxHeight(o);
                    if ($n(this.refStage) !== r && (t ? Rn(this.refStage, "height", $n(this.refStage), r, 300) : $n(this.refStage, r)),
                    this.config.get("post.matchHeights") && e.length > this.panesVisible) {
                        Ch.log(`maxHeight: ${r}`);
                        for (let o = 0; o < e.length; o++) {
                            const n = e[o];
                            t ? Rn(n, "height", this.previousMaxHeight, r, 300) : $n(n, r)
                        }
                    }
                    this.previousMaxHeight = r
                }
            }
            getMaxHeight(t) {
                Ch.log("getMaxHeight ");
                const e = this.config.get("post.maxHeight", 0)
                  , o = t.map(((t,o)=>{
                    let r = 0;
                    for (let e = 0; e < t.childNodes.length; e++) {
                        const o = t.childNodes[e];
                        if (Zn(o, "crt-post")) {
                            const t = o.querySelector(".crt-post-c");
                            t && (Ch.log("children postContainer", _h(t.children)),
                            r += _h(t.children) + Gn(t))
                        } else
                            Zn(o, "crt-grid-post") && (Ch.log("children post", Vn(o)),
                            r += Vn(o))
                    }
                    return Ch.log("paneContentHeight i:" + o + " height:" + r),
                    e && e < r && (r = e),
                    r
                }
                ));
                return Ch.log("getMaxHeight:" + mh(o)),
                mh(o) ?? 0
            }
            getVisiblePanes(t) {
                const e = this.canRotate() ? this.panesVisible : 0
                  , o = e + this.panesVisible;
                return vh(t, e, o)
            }
            feedWidth() {
                const t = Un(this.refStage);
                return t < 100 ? 100 : t
            }
            calcSizes(t=!1) {
                Ch.log("calcSizes");
                const e = this.feedWidth();
                if (Ch.log("stageWidth = new:" + e + " old:" + this.stageWidth + " force:" + t),
                (e !== this.stageWidth || t) && !isNaN(e) && e > 0) {
                    const t = this.config.get("widget.panesVisible");
                    "number" == typeof t && t > 0 ? (this.panesVisible = t,
                    this.paneWidth = e / this.panesVisible) : (this.panesVisible = yh(e, this.config.get("post.minWidth", 100)),
                    this.paneWidth = e / this.panesVisible),
                    Ch.log("newStageWidth: " + e),
                    Ch.log("this.panesVisible: " + this.panesVisible),
                    Ch.log("this.paneWidth: " + this.paneWidth),
                    this.stageWidth = e
                }
            }
            canRotate() {
                return this.panesLength > this.panesVisible
            }
            setSliderX(t) {
                Ch.log(`setSliderX ${t}`),
                zn(this.refSlider, {
                    transform: "translate3d(" + t + "px, 0px, 0px)"
                })
            }
            setSliderWidth() {
                const t = this.canRotate() ? this.paneWidth * (3 * this.panesVisible) : this.stageWidth;
                Un(this.refSlider, t)
            }
            next() {
                if (!this._moving) {
                    const t = this.config.get("widget.moveAmount")
                      , e = t || this.panesVisible;
                    this.move(e, !0)
                }
            }
            prev() {
                if (!this._moving) {
                    const t = this.config.get("widget.moveAmount")
                      , e = t || this.panesVisible;
                    this.move(0 - e, !0)
                }
            }
            move(t, e) {
                Ch.log("move currentPane:" + this._currentPane + " moveAmt:" + t + " noAnimate:" + e);
                const o = this._currentPane;
                let r = this._currentPane + t;
                if (this._moving = !0,
                this.config.get("widget.infinite") ? r < 0 ? r = this.panesLength + r : r > this.panesLength && (r -= this.panesLength) : (r < 0 ? r = 0 : r > this.panesLength - this.panesVisible && (r = this.panesLength - this.panesVisible),
                t = r - o),
                this._currentPane = r,
                t) {
                    let o = 0;
                    if (this.canRotate() && (o = 0 - this.panesVisible * this.paneWidth - t * this.paneWidth),
                    e) {
                        const t = this.getX()
                          , e = this.config.get("widget.duration");
                        (function(t, e, o, r) {
                            return new Promise((n=>{
                                const s = r / 1e3
                                  , i = Mn(t);
                                i && (i.style.transform = "translate3d(" + e + "px, 0px, 0px)",
                                i.style.transition = "-webkit-transform " + s + "s",
                                i.style.transform = "translate3d(" + o + "px, 0px, 0px)",
                                window.setTimeout((()=>{
                                    i.style.transition = "",
                                    i.style.transform = "translate3d(" + o + "px, 0px, 0px)",
                                    n()
                                }
                                ), r + 10))
                            }
                            ))
                        }
                        )(this.refSlider, t, o, e).then((()=>{
                            this.moveComplete()
                        }
                        ))
                    } else
                        Kn(this.refSlider, "crt-animate-transform"),
                        this.setSliderX(o),
                        this.moveComplete()
                } else
                    this._moving = !1
            }
            getX() {
                return this.canRotate() ? 0 - this.panesVisible * this.paneWidth : 0
            }
            moveComplete() {
                Ch.log("moveComplete"),
                this.alive && (this._moving = !1,
                this.forceUpdate())
            }
            autoPlayStart() {
                this.context.config.get("widget.autoPlay") && (window.clearTimeout(this.autoPlayTimeout),
                this.canRotate() && (this.autoPlayTimeout = window.setTimeout((()=>{
                    this.next()
                }
                ), this.context.config.get("widget.speed"))))
            }
            render() {
                Ch.log("render pageCount:" + this.props.paneCount);
                const t = this.previousPaneCount != this.props.paneCount;
                this.calcSizes(t);
                const e = [];
                let o = !1;
                if (this.props.paneCount) {
                    this.panesLength = this.props.paneCount;
                    let t = 0
                      , r = 0;
                    this.panesLength > this.panesVisible ? (t = this._currentPane - this.panesVisible,
                    r = 3 * this.panesVisible) : (o = !0,
                    r = this.panesLength);
                    for (let o = 0; o < r; o++) {
                        const r = this.props.createPane(t + o, this.paneWidth)
                          , n = t + o;
                        e.push(cs(wh, {
                            width: this.paneWidth,
                            children: r
                        }, n))
                    }
                    this.previousPaneCount = this.props.paneCount
                }
                const r = this.getX();
                this.setSliderX(r),
                this.setSliderWidth();
                const n = ["crt-carousel-feed"];
                return this.context.config.get("post.matchHeights", !1) && n.push("crt-match-heights"),
                this.context.config.get("widget.controlsOver") ? n.push("crt-controls-over") : n.push("crt-controls-outside"),
                this.context.config.get("widget.controlsShowOnHover") && n.push("crt-controls-show-on-hover"),
                o && n.push("crt-hide-controls"),
                cs("div", {
                    className: n.join(" "),
                    children: [cs("div", {
                        className: "crt-carousel-stage",
                        ref: this.refStage,
                        style: "overflow:hidden;",
                        children: cs("div", {
                            className: "crt-carousel-slider",
                            ref: this.refSlider,
                            children: e
                        })
                    }), !!e.length && cs("button", {
                        onClick: ()=>this.prev(),
                        type: "button",
                        "data-role": "button",
                        className: "crt-panel-prev crt-panel-arrow",
                        "aria-label": "Previous",
                        role: "button",
                        "aria-disabled": "false",
                        tabIndex: 0,
                        children: cs(Nc, {})
                    }), !!e.length && cs("button", {
                        onClick: ()=>this.next(),
                        type: "button",
                        "data-role": "button",
                        className: "crt-panel-next crt-panel-arrow",
                        "aria-label": "Next",
                        role: "button",
                        "aria-disabled": "false",
                        tabIndex: 0,
                        children: cs(Tc, {})
                    })]
                })
            }
        }
        Object.defineProperty(xh, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Yu
        });
        var Ph = o(4073)
          , kh = o.n(Ph);
        const Sh = es("CarouselLayout");
        class Ah extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "config", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "alive", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !0
                }),
                Object.defineProperty(this, "loader", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new Zd
                }),
                Object.defineProperty(this, "debouncedLoadPost", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: kh()((()=>{
                        this._loadPosts()
                    }
                    ), 500)
                }),
                this.config = t.config,
                this.createPane = this.createPane.bind(this),
                this.setState({
                    posts: [],
                    paneCount: 0
                })
            }
            componentDidMount() {
                this.debouncedLoadPost(),
                this.context.filterService.registerOnFilterChanged(this.onFilterChanged.bind(this)),
                this.context.filterService.triggerCheckDefaultFilter()
            }
            onFilterChanged(t) {
                Sh.log("onFilterChanged " + this.props.widgetId),
                this.setState({
                    posts: [],
                    paneCount: 0
                }),
                this.context.feed.reset(),
                this.context.feed.setParams(t),
                this.debouncedLoadPost()
            }
            async _loadPosts() {
                const t = {};
                "manila" === this.config.get("theme") && (t.has_media = !0),
                await Bd(this.context.feed, this.context.message, 25, t),
                this.setState({
                    posts: this.context.feed._posts,
                    paneCount: this.context.feed._posts.length
                })
            }
            createPane(t, e) {
                Sh.log("createPane " + t);
                let o = t;
                t < 0 ? o = this.context.feed.numPosts() + t : t > this.context.feed.numPosts() - 1 && (o = t % this.context.feed.numPosts());
                const r = this.context.feed.postAtIndex(o);
                return cs(Nd, {
                    post: r
                })
            }
            render() {
                return Sh.log("render " + this.state.paneCount),
                cs(fd, {
                    loader: this.loader,
                    children: cs(xh, {
                        createPane: this.createPane,
                        paneCount: this.state.paneCount
                    })
                })
            }
        }
        Object.defineProperty(Ah, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Yu
        });
        const Oh = es("Carousel");
        const jh = es("GridCarouselWidget");
        class Fh extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "config", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "alive", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !0
                }),
                Object.defineProperty(this, "debouncedLoadPost", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: kh()((()=>{
                        this._loadPosts()
                    }
                    ), 500)
                }),
                Object.defineProperty(this, "createPane", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: (t,e)=>{
                        const o = []
                          , r = this.context.feed.numPosts();
                        let n = this.config.get("widget.rows");
                        r < n && (n = r);
                        for (let e = 0; e < n; e++) {
                            let s = t * n + e;
                            s < 0 ? s = r + s : s > r - 1 && (s %= r);
                            const i = this.context.feed.postAtIndex(s);
                            if (i) {
                                const e = {
                                    animate: !1,
                                    i: t
                                };
                                o.push(cs(uh, {
                                    post: i,
                                    layout: e
                                }))
                            }
                        }
                        return o
                    }
                }),
                this.config = t.config,
                this.config.set("feed.limit", 50),
                this.setState({
                    posts: [],
                    paneCount: 0
                })
            }
            componentDidMount() {
                this.debouncedLoadPost(),
                this.context.filterService.registerOnFilterChanged(this.onFilterChanged.bind(this)),
                this.context.filterService.triggerCheckDefaultFilter()
            }
            onFilterChanged(t) {
                this.setState({
                    posts: [],
                    paneCount: 0
                }),
                this.context.feed.reset(),
                this.context.feed.setParams(t),
                this.debouncedLoadPost()
            }
            async _loadPosts() {
                const t = {};
                "manila" === this.config.get("theme") && (t.has_media = !0);
                if (await Bd(this.context.feed, this.context.message, 25, t)) {
                    const t = this.config.get("widget.rows")
                      , e = Math.ceil(this.context.feed.numPosts() / t);
                    this.setState({
                        posts: this.context.feed._feed,
                        paneCount: e
                    })
                }
            }
            render() {
                return function(t) {
                    jh.log("GridCarouselWidget->" + t)
                }("render " + this.state.paneCount),
                cs(xh, {
                    createPane: this.createPane,
                    paneCount: this.state.paneCount
                })
            }
        }
        Object.defineProperty(Fh, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Yu
        });
        const Eh = es("PanelWidget");
        class Dh extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "config", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "alive", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !0
                }),
                Object.defineProperty(this, "loader", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new Zd
                }),
                Object.defineProperty(this, "debouncedLoadPost", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: kh()((()=>{
                        this._loadPosts(25)
                    }
                    ), 500)
                }),
                this.config = t.config,
                this.config.set("feed.limit", 50),
                this.createPane = this.createPane.bind(this),
                this.setState({
                    posts: [],
                    paneCount: 0
                })
            }
            componentDidMount() {
                this.debouncedLoadPost(),
                this.context.filterService.registerOnFilterChanged(this.onFilterChanged.bind(this)),
                this.context.filterService.triggerCheckDefaultFilter()
            }
            onFilterChanged(t) {
                console.log("onFilterChanged " + this.props.widgetId),
                this.setState({
                    posts: [],
                    paneCount: 0
                }),
                this.context.feed.reset(),
                this.context.feed.setParams(t),
                this.debouncedLoadPost()
            }
            async _loadPosts(t) {
                const e = {};
                "manila" === this.config.get("theme") && (e.has_media = !0),
                await Bd(this.context.feed, this.context.message, t, e),
                this.setState({
                    posts: this.context.feed._posts,
                    paneCount: this.context.feed._posts.length
                })
            }
            createPane(t, e) {
                let o = t;
                t < 0 ? o = this.context.feed.numPosts() + t : t > this.context.feed.numPosts() - 1 && (o = t % this.context.feed.numPosts());
                const r = this.context.feed.postAtIndex(o);
                return cs(Nd, {
                    post: r
                })
            }
            render() {
                return function(t) {
                    Eh.log("PanelWidget->" + t)
                }("render " + this.state.paneCount),
                cs(fd, {
                    loader: this.loader,
                    children: cs(xh, {
                        createPane: this.createPane,
                        paneCount: this.state.paneCount
                    })
                })
            }
        }
        Object.defineProperty(Dh, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Yu
        });
        class Th extends T {
            constructor(t) {
                super(t)
            }
            postStyles() {
                const t = {}
                  , e = this.context.config.get("widget.verticalSpacing");
                return null != e && (t.marginBottom = e + "px"),
                t
            }
            render() {
                const t = this.props.post;
                return cs(Cd, {
                    post: t,
                    classes: Yi(t, "crt-list-post"),
                    sx: this.postStyles(),
                    children: cs("div", {
                        className: "crt-post-content",
                        children: [cs("div", {
                            className: "crt-list-post-image",
                            children: cs("div", {
                                children: [cs("img", {
                                    className: "crt-post-content-image",
                                    src: t.image,
                                    alt: ""
                                }), t.image && cs(tl, {
                                    post: t
                                }), cs(ud, {
                                    post: t
                                })]
                            })
                        }), cs("div", {
                            className: "crt-list-post-text",
                            children: [cs(ld, {
                                post: t
                            }), cs("div", {
                                className: "crt-list-post-text-wrap",
                                children: [cs(Pd, {
                                    post: t
                                }), cs(Yl, {
                                    post: t
                                }), cs(hd, {
                                    post: t
                                })]
                            }), cs(xd, {
                                post: t
                            })]
                        })]
                    })
                })
            }
        }
        Object.defineProperty(Th, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Pi
        });
        class Nh extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "config", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "onLoadMore", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: async()=>await this._loadPosts()
                }),
                Object.defineProperty(this, "debouncedLoadPost", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: kh()((()=>{
                        this._loadPosts()
                    }
                    ), 500)
                }),
                this.config = t.config,
                this.config.set("feed.limit", this.config.get("widget.postsPerPage", 12)),
                this.setState({
                    posts: []
                })
            }
            componentDidMount() {
                this.debouncedLoadPost(),
                this.context.filterService.registerOnFilterChanged(this.onFilterChanged.bind(this)),
                this.context.filterService.triggerCheckDefaultFilter()
            }
            onFilterChanged(t) {
                this.setState({
                    posts: []
                }),
                this.context.feed.reset(),
                this.context.feed.setParams(t),
                this.debouncedLoadPost()
            }
            async _loadPosts() {
                const t = await Bd(this.context.feed, this.context.message, this.config.get("widget.postsPerPage", 12));
                t && await this.setState({
                    posts: this.state.posts.concat(t)
                }),
                this.context.widget.data.previousNOfPosts = this.context.widget.data.nOfPosts,
                this.context.widget.data.nOfPosts = this.state.posts.length,
                console.log("state.posts.length", this.state.posts.length, this.context.widget.data.nOfPosts, this.context.widget.data.previousNOfPosts)
            }
            render() {
                const t = this.state.posts.map((t=>{
                    const e = vd(t);
                    return cs(Th, {
                        post: t
                    }, e)
                }
                ))
                  , e = this.state.posts.length ? "feed" : "presentation";
                return cs("div", {
                    children: [cs("div", {
                        className: "crt-feed",
                        tabIndex: 0,
                        "aria-label": "There are " + this.state.posts.length + " posts in the feed",
                        role: e,
                        children: t
                    }), cs(sd, {
                        onLoadMore: this.onLoadMore
                    })]
                })
            }
        }
        Object.defineProperty(Nh, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Yu
        });
        class Lh extends td {
            setStyles(t) {
                this.sheet ? this.clearStyles() : this.sheet = ss.createSheet(),
                this.addStyle(t.popup, ".crt-popup"),
                this.addStyle(t.widget, ".crt-widget"),
                this.addStyle(t.loadMore, ".crt-widget .crt-load-more"),
                this.addStyle(t.postIcon, ".crt-widget .crt-mosaic-post .crt-social-icon i"),
                this.addStyle(t.postIcon, ".crt-widget .crt-mosaic-post .crt-social-icon svg"),
                this.addStyle(t.postIcon, ".crt-widget .crt-mosaic-post .crt-social-icon svg"),
                this.addStyle(t.postIcon, ".crt-widget .crt-mosaic-post .crt-post-hover .crt-post-share a"),
                this.addStyle(t.postIcon, ".crt-widget .crt-mosaic-post .crt-post-text-footer .crt-share-facebook svg"),
                this.addStyle(t.postIcon, ".crt-widget .crt-mosaic-post .crt-post-text-footer .crt-share-twitter svg"),
                this.addStyle(t.postHoverGradient, ".crt-no-touch .crt-mosaic-post:not(.crt-post-youtube) .crt-post-c:hover .crt-post-hover:after"),
                this.addStyle(t.postHoverGradient, ".crt-widget .crt-post-text:after"),
                this.addStyle(t.postFooter, ".crt-widget .crt-post-text-footer"),
                this.addStyle(t.postIconWithBorder, ".crt-widget .crt-post-share .crt-popup-share-icon-container-icons a:not(:hover)"),
                this.addStyle(t.post, ".crt-widget .crt-grid-post"),
                this.addStyle(t.postContent, ".crt-widget .crt-post-only-text"),
                this.addStyle(t.postText, ".crt-widget .crt-mosaic-post .crt-post-text"),
                this.addStyle(t.postText, ".crt-widget .crt-mosaic-post .crt-post-title"),
                this.addStyle(t.postTextLink, ".crt-widget .crt-mosaic-post .crt-post-text a"),
                this.addStyle(t.postTextLink, ".crt-widget .crt-mosaic-post .crt-post-only-text .crt-post-fullname a"),
                this.addStyle(t.postHover, ".crt-widget .crt-mosaic-post .crt-post-hover"),
                this.addStyle(t.postHoverLink, ".crt-widget .crt-mosaic-post .crt-post-hover a"),
                this.addStyle(t.postFooter, ".crt-widget .crt-mosaic-post .crt-post-footer"),
                this.addStyle(t.postText, ".crt-widget .crt-post-date-link"),
                this.addStyle(t.postDate, ".crt-widget .crt-post-date a"),
                this.addStyle(t.postBorder, ".crt-post .crt-post-border"),
                this.addCssRules(t.cssRules)
            }
        }
        function Bh(t) {
            if (!qi(t.post))
                return null;
            const e = t.post
              , o = Xn((()=>{
                Ul(e);
                hi(Pi).tracker.track("share:twitter")
            }
            ))
              , r = Xn((()=>{
                $l(e);
                hi(Pi).tracker.track("share:twitter")
            }
            ));
            return cs("div", {
                className: "crt-post-text-footer",
                children: [cs("a", {
                    className: "crt-share-facebook",
                    onClick: o,
                    children: cs(ec, {})
                }), cs(fl, {
                    post: e
                }), cs("a", {
                    className: "crt-share-twitter",
                    onClick: r,
                    children: cs(Xa, {})
                })]
            })
        }
        function Ih({post: t, cRef: e}) {
            const o = Gi(t)
              , r = ki().config.get("post.maxLines");
            let n = "crt-post-text"
              , s = "";
            return r && (n += " with-max-lines",
            s = "-webkit-line-clamp: " + r + "; "),
            cs("div", {
                className: n,
                style: s,
                ref: e,
                dangerouslySetInnerHTML: {
                    __html: o
                }
            })
        }
        class Mh extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "containerRef", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                this.setAriaHidden = this.setAriaHidden.bind(this),
                this.onMouseEnter = this.onMouseEnter.bind(this),
                this.onMouseLeave = this.onMouseLeave.bind(this),
                this.containerRef = {
                    current: null
                }
            }
            setAriaHidden(t, e) {
                const o = t.querySelector(".crt-post-hover");
                if (o) {
                    const t = o.querySelectorAll("[aria-label]");
                    for (let o = 0; o < t.length; o++)
                        t[o].setAttribute("aria-hidden", e)
                }
            }
            onMouseEnter(t) {
                this.setAriaHidden(t.target, "false")
            }
            onMouseLeave(t) {
                this.setAriaHidden(t.target, "true")
            }
            render() {
                const t = this.props.post
                  , e = this.props.layout
                  , o = {
                    position: "absolute",
                    left: e.x,
                    top: e.y,
                    width: e.w,
                    height: e.h,
                    display: "none" === e.display ? "none" : "block",
                    padding: "1px"
                };
                return cs(Cd, {
                    post: t,
                    classes: Yi(t, "crt-post crt-mosaic-post"),
                    sx: o,
                    children: t.image ? cs("div", {
                        ref: this.containerRef,
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave,
                        children: [cs("div", {
                            className: "crt-mosaic-post-content",
                            style: "padding-bottom: 100%;",
                            children: cs("div", {
                                children: [cs(tl, {
                                    post: t,
                                    className: "crt-social-icon-normal"
                                }), cs(nh, {
                                    post: t
                                }), t.video && cs(cd, {
                                    post: t
                                })]
                            })
                        }), cs("div", {
                            className: "crt-post-hover",
                            children: [cs("div", {
                                className: "crt-post-header",
                                children: [cs(tl, {
                                    post: t
                                }), cs(ld, {
                                    post: t
                                })]
                            }), cs(Yl, {
                                post: t
                            }), cs(hd, {
                                post: t
                            }), cs(bd, {
                                post: t
                            }), cs(xd, {
                                post: t
                            })]
                        })]
                    }) : cs("div", {
                        className: "crt-post-only-text",
                        children: [cs(ol, {
                            post: t
                        }), cs(ld, {
                            post: t
                        }), cs(Ih, {
                            post: t
                        }), cs(Bh, {
                            post: t
                        })]
                    })
                })
            }
        }
        const qh = [{
            cols: 1,
            rows: 1,
            postPositions: [{
                x: 0,
                y: 0,
                w: 1,
                h: 1
            }]
        }, {
            cols: 2,
            rows: 2,
            postPositions: [{
                x: 0,
                y: 0,
                w: 1,
                h: 1
            }, {
                x: 1,
                y: 0,
                w: 1,
                h: 1
            }, {
                x: 0,
                y: 1,
                w: 1,
                h: 1
            }, {
                x: 1,
                y: 1,
                w: 1,
                h: 1
            }]
        }, {
            cols: 3,
            rows: 4,
            postPositions: [{
                x: 0,
                y: 0,
                w: 2,
                h: 2
            }, {
                x: 2,
                y: 0,
                w: 1,
                h: 1
            }, {
                x: 2,
                y: 1,
                w: 1,
                h: 1
            }, {
                x: 0,
                y: 2,
                w: 1,
                h: 1
            }, {
                x: 0,
                y: 3,
                w: 1,
                h: 1
            }, {
                x: 1,
                y: 2,
                w: 2,
                h: 2
            }]
        }, {
            cols: 4,
            rows: 9,
            postPositions: [{
                x: 0,
                y: 0,
                w: 2,
                h: 2
            }, {
                x: 2,
                y: 0,
                w: 1,
                h: 1
            }, {
                x: 3,
                y: 0,
                w: 1,
                h: 1
            }, {
                x: 2,
                y: 1,
                w: 2,
                h: 2
            }, {
                x: 0,
                y: 2,
                w: 1,
                h: 1
            }, {
                x: 1,
                y: 2,
                w: 1,
                h: 1
            }, {
                x: 0,
                y: 3,
                w: 2,
                h: 2
            }, {
                x: 2,
                y: 3,
                w: 1,
                h: 1
            }, {
                x: 3,
                y: 3,
                w: 1,
                h: 1
            }, {
                x: 2,
                y: 4,
                w: 2,
                h: 2
            }, {
                x: 0,
                y: 5,
                w: 1,
                h: 1
            }, {
                x: 1,
                y: 5,
                w: 1,
                h: 1
            }, {
                x: 0,
                y: 6,
                w: 2,
                h: 2
            }, {
                x: 2,
                y: 6,
                w: 1,
                h: 1
            }, {
                x: 3,
                y: 6,
                w: 1,
                h: 1
            }, {
                x: 2,
                y: 7,
                w: 2,
                h: 2
            }, {
                x: 0,
                y: 8,
                w: 1,
                h: 1
            }, {
                x: 1,
                y: 8,
                w: 1,
                h: 1
            }]
        }, {
            cols: 6,
            rows: 7,
            postPositions: [{
                x: 0,
                y: 0,
                w: 2,
                h: 2
            }, {
                x: 2,
                y: 0,
                w: 1,
                h: 1
            }, {
                x: 3,
                y: 0,
                w: 1,
                h: 1
            }, {
                x: 4,
                y: 0,
                w: 1,
                h: 1
            }, {
                x: 5,
                y: 0,
                w: 1,
                h: 1
            }, {
                x: 2,
                y: 1,
                w: 1,
                h: 1
            }, {
                x: 3,
                y: 1,
                w: 2,
                h: 2
            }, {
                x: 5,
                y: 1,
                w: 1,
                h: 1
            }, {
                x: 0,
                y: 2,
                w: 1,
                h: 1
            }, {
                x: 1,
                y: 2,
                w: 2,
                h: 2
            }, {
                x: 5,
                y: 2,
                w: 1,
                h: 1
            }, {
                x: 0,
                y: 3,
                w: 1,
                h: 1
            }, {
                x: 3,
                y: 3,
                w: 1,
                h: 1
            }, {
                x: 4,
                y: 3,
                w: 2,
                h: 2
            }, {
                x: 0,
                y: 4,
                w: 2,
                h: 2
            }, {
                x: 2,
                y: 4,
                w: 1,
                h: 1
            }, {
                x: 3,
                y: 4,
                w: 1,
                h: 1
            }, {
                x: 2,
                y: 5,
                w: 1,
                h: 1
            }, {
                x: 3,
                y: 5,
                w: 2,
                h: 2
            }, {
                x: 5,
                y: 5,
                w: 1,
                h: 1
            }, {
                x: 0,
                y: 6,
                w: 1,
                h: 1
            }, {
                x: 1,
                y: 6,
                w: 1,
                h: 1
            }, {
                x: 2,
                y: 6,
                w: 1,
                h: 1
            }, {
                x: 5,
                y: 6,
                w: 1,
                h: 1
            }]
        }];
        function Wh(t, e) {
            const o = Math.floor(e / t.postPositions.length)
              , r = e % t.postPositions.length
              , n = {
                ...t.postPositions[r]
            };
            return n.y = o * t.rows + n.y,
            n
        }
        class Hh extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "refPost", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                this.adClick = this.adClick.bind(this),
                this.onTabPressNextPost = this.onTabPressNextPost.bind(this),
                this.onTabPressPreviousPost = this.onTabPressPreviousPost.bind(this)
            }
            adClick(t) {
                if (nl(t)) {
                    const t = this.props.ad
                      , e = rd(t, this.context.config);
                    e && nd(e)
                }
                const e = this.props.ad;
                "goto-url" == e.click_action && window.open(e.url, "_blank")
            }
            onTabPressPreviousPost(t) {
                wd(t, this.props.ad)
            }
            onTabPressNextPost(t) {
                yd(t, this.props.ad)
            }
            render() {
                const t = this.props.ad
                  , e = this.props.layout
                  , o = {
                    position: "absolute",
                    left: e.x,
                    top: e.y,
                    width: e.w,
                    height: e.h,
                    display: "none" === e.display ? "none" : "block",
                    padding: "1px"
                }
                  , r = Zi(t, "crt-post crt-mosaic-post")
                  , n = od(t, this.context.config);
                return cs("article", {
                    className: r.join(" "),
                    "data-post": t.slug,
                    style: o,
                    onKeyDown: this.onTabPressPreviousPost,
                    children: [cs("div", {
                        className: "crt-post-c",
                        ref: this.refPost,
                        onClick: ()=>this.adClick,
                        tabIndex: 0,
                        "aria-label": n,
                        role: "article",
                        onKeyPress: this.adClick,
                        "data-position": t.feed_position,
                        children: [cs("div", {
                            className: "crt-mosaic-post-content",
                            style: "padding-bottom: 100%;",
                            children: [cs(tl, {
                                post: t,
                                className: "crt-social-icon-normal"
                            }), cs(nh, {
                                post: t
                            })]
                        }), cs("div", {
                            className: "crt-post-hover",
                            children: cs("div", {
                                children: [cs("div", {
                                    className: "crt-post-header",
                                    children: [cs(tl, {
                                        post: t
                                    }), cs(Pd, {
                                        post: t
                                    })]
                                }), cs(Yl, {
                                    post: t
                                })]
                            })
                        })]
                    }), cs("span", {
                        class: "hidden-for-aria-label",
                        onKeyDown: this.onTabPressNextPost,
                        tabIndex: 0,
                        "aria-label": "End of post.",
                        role: "status"
                    })]
                })
            }
        }
        Object.defineProperty(Hh, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Pi
        });
        const Rh = t=>{
            const e = ui(t);
            return li((()=>{
                e.current = t
            }
            )),
            e
        }
        ;
        const zh = es("MosaicWidget");
        function Uh(t, e, o, r) {
            const n = [];
            let s = 0
              , i = !1;
            return t._feedCurrentIdx = 0,
            function(t, e, o) {
                let r = 0
                  , n = Wh(t, r);
                for (; n.y + 1 <= e; ) {
                    if (n.y + n.h > e) {
                        if (n.w = 1,
                        n.h = 1,
                        !o(n))
                            break;
                        const t = {
                            ...n
                        };
                        if (t.x += 1,
                        !o(t))
                            break
                    } else if (!o(n))
                        break;
                    r++,
                    n = Wh(t, r)
                }
            }(e, r, (e=>{
                const r = t.nextPost();
                if (!r)
                    return i = !0,
                    !1;
                n.push({
                    post: r,
                    layout: {
                        y: e.y * o,
                        x: e.x * o,
                        w: e.w * o,
                        h: e.h * o
                    }
                });
                const a = e.y * o + e.h * o;
                return a > s && (s = a),
                !0
            }
            )),
            {
                newPostLayouts: n,
                maxY: s,
                allPostsRender: i
            }
        }
        function $h(t) {
            const e = ui(null)
              , [o,r] = ai(0)
              , [n,s] = ai(0)
              , [i,a] = ai(!1)
              , [c,l] = ai([])
              , u = Zu()
              , {onFilterChanged: d} = function() {
                const t = Zu();
                let e = Rh(void 0);
                return li((()=>(t.filterService.registerOnFilterChanged((t=>{
                    e.current && e.current(t)
                }
                )),
                ()=>{
                    t.filterService.clearOnFilterChanged()
                }
                )), []),
                {
                    onFilterChanged(t) {
                        e = Rh(t)
                    }
                }
            }()
              , h = u.config.get("widget.rows", 3)
              , [p,f] = ai(h)
              , g = kh()(((t=!1)=>{
                !async function(t=!1) {
                    zh.log("updateLayout");
                    const o = Un(e) || 100;
                    if (!p || o === n && !t)
                        return;
                    s(o);
                    const i = function(t) {
                        let e = qh[0];
                        for (let o = 1; o < qh.length; o++) {
                            const r = qh[o];
                            r.cols <= t && (e = r)
                        }
                        return e
                    }(yh(o, u.config.get("post.minWidth", 100)))
                      , c = function(t, e) {
                        let o = 0
                          , r = Wh(t, o);
                        for (; r.y < e; )
                            r = Wh(t, o),
                            o++;
                        return o
                    }(i, p);
                    await async function(t) {
                        const e = {};
                        "manila" === u.config.get("theme") && (e.has_media = !0);
                        for (; u.feed._feed.length < t && !1 === u.feed.allPostsLoaded; )
                            await Bd(u.feed, u.message, t, e);
                        u.feed._feedCurrentIdx = 0
                    }(c);
                    const d = o / i.cols
                      , {newPostLayouts: h, maxY: f, allPostsRender: g} = Uh(u.feed, i, d, p);
                    r(f),
                    l(h),
                    a(!1 === g)
                }(t)
            }
            ), 500);
            li((()=>{
                u.filterService.triggerCheckDefaultFilter()
            }
            ), []),
            ((t,e)=>{
                const o = Rh(t);
                li((()=>{
                    const t = new Hl((()=>{
                        o.current()
                    }
                    ),e.current);
                    return ()=>{
                        t.disconnect()
                    }
                }
                ), [])
            }
            )((()=>{
                g(!1)
            }
            ), e);
            const m = function(t) {
                const e = t.map((t=>"ad" === t.post.type ? cs(Hh, {
                    ad: t.post,
                    layout: t.layout
                }, t.post.slug) : cs(Mh, {
                    post: t.post,
                    layout: t.layout
                }, t.post.id)));
                return u.widget.data.previousNOfPosts = u.widget.data.nOfPosts,
                u.widget.data.nOfPosts = t.length,
                e
            }(c);
            li((()=>{
                g(!0)
            }
            ), [p]),
            d((t=>{
                u.feed.reset(),
                u.feed.setParams(t),
                p == h ? g(!0) : f(h)
            }
            ));
            const b = {
                height: o,
                overflow: "hidden"
            }
              , v = m.length ? "feed" : "presentation";
            return cs("div", {
                className: "crt-feed-window",
                ref: e,
                tabIndex: 0,
                "aria-label": "There are " + m.length + " posts in the feed",
                role: v,
                children: [cs(Jd, {
                    show: !0
                }), cs("div", {
                    className: "crt-feed",
                    style: b,
                    children: m
                }), cs(sd, {
                    onLoadMore: async function() {
                        const t = u.config.get("widget.rows", 3);
                        f(p + t),
                        await new Promise(((t,e)=>{
                            setTimeout((()=>{
                                t()
                            }
                            ), 1e3)
                        }
                        ))
                    },
                    showLoadMore: i
                })]
            })
        }
        class Vh extends td {
            setStyles(t) {
                this.createStyleSheet(),
                this.setStylesTetris(t)
            }
            setStylesTetris(t) {
                this.addStyle(t.popup, ".crt-popup"),
                this.addStyle(t.widget, ".crt-widget-tetris .crt-tetris-post"),
                this.addStyle(t.loadMore, ".crt-widget .crt-load-more"),
                this.addStyle(t.post, ".crt-widget .crt-post .crt-post-only-text"),
                this.addStyle(t.postFooter, ".crt-widget-tetris .crt-tetris-post .crt-post-text-footer"),
                this.addStyle(t.postText, ".crt-tetris-post .crt-post-only-text .crt-post-text"),
                this.addStyle(t.postBorder, ".crt-tetris-post .crt-post-c"),
                this.addStyle(t.postTextLink, ".crt-widget .crt-post-text a"),
                this.addStyle(t.postName, ".crt-widget .crt-post-fullname a"),
                this.addStyle(t.postText, ".crt-tetris-post .crt-post-title"),
                this.addStyle(t.postIcon, " .crt-widget-tetris .crt-tetris-post .crt-post-text-footer .crt-social-icon i"),
                this.addStyle(t.postIcon, " .crt-widget-tetris .crt-tetris-post .crt-post-text-footer .crt-social-icon svg"),
                this.addStyle(t.postIconWithBorder, ".crt-widget .crt-post-share .crt-popup-share-icon-container-icons a:not(:hover)"),
                this.addStyle(t.postUsername, ".crt-widget-tetris .crt-tetris-post .crt-post-text-footer .crt-post-username a"),
                this.addStyle(t.postComments, ".crt-widget .crt-comments-likes"),
                this.addStyle(t.postShareIcons, ".crt-widget-tetris .crt-tetris-post .crt-post-text-footer .crt-post-share a.crt-share-button svg"),
                this.addStyle(t.postDate, ".crt-widget-tetris .crt-tetris-post .crt-post-date a"),
                this.addStyle(t.postMaxHeightReadMore, ".crt-widget .crt-post.crt-post-max-height .crt-post-max-height-read-more"),
                this.addStyle(t.gridPost, ".crt-widget .crt-grid-post"),
                this.addCssRules(t.cssRules)
            }
        }
        class Gh extends T {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "textContainerRef", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "textRef", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                })
            }
            componentDidMount() {
                $n(this.textContainerRef) > $n(this.textRef) && this.setState({
                    textContainerClasses: "crt-post-centered-text middle-text"
                })
            }
            render() {
                const t = this.props.post;
                let e = Gi(t);
                25 === t.network_id && (e = e.replace(/(?:^<blockquote[^>]*>)/, ""),
                e = e.replace(/<\/blockquote>/, ""));
                const o = ki().config.get("post.maxLines");
                let r = "crt-post-text"
                  , n = "";
                return o && (r += " with-max-lines",
                n = "-webkit-line-clamp: " + o + "; "),
                cs("div", {
                    className: this.state.textContainerClasses,
                    ref: this.textContainerRef,
                    children: cs("div", {
                        children: [this.props.withTitle && cs(Pd, {
                            post: t
                        }), cs("div", {
                            className: r,
                            style: n,
                            ref: this.textRef,
                            dangerouslySetInnerHTML: {
                                __html: e
                            }
                        })]
                    })
                })
            }
        }
        class Kh extends T {
            constructor(t) {
                super(t)
            }
            postOnlyText(t, e) {
                return cs("div", {
                    className: "crt-post-only-text",
                    style: e,
                    children: [cs(fl, {
                        post: t
                    }), cs(ol, {
                        post: t
                    }), cs(Gh, {
                        post: t
                    }), cs(Ed, {
                        post: t
                    })]
                })
            }
            render() {
                const t = this.props.post
                  , e = this.props.layout
                  , o = {
                    position: "absolute",
                    left: e.x,
                    top: e.y,
                    width: e.w,
                    height: e.h,
                    display: "none" === e.display ? "none" : "block",
                    paddingLeft: this.context.config.get("widget.horizontalSpacing", 20) / 2,
                    paddingRight: this.context.config.get("widget.horizontalSpacing", 20) / 2,
                    paddingBottom: this.context.config.get("widget.verticalSpacing", 20)
                }
                  , r = e.w > e.h ? (e.w - 20) / 2 : e.w - 20
                  , n = e.h > e.w ? (e.h - 20) / 2 : e.h - 20;
                let s = {
                    position: "absolute",
                    width: r,
                    height: n
                }
                  , i = {
                    position: "absolute",
                    width: r,
                    height: n
                };
                switch (e.position) {
                case "left":
                    s = {
                        ...s,
                        left: 0
                    },
                    i = {
                        ...i,
                        right: 0,
                        top: 0
                    },
                    t.image || (i.width = 2 * i.width);
                    break;
                case "right":
                    s = {
                        ...s,
                        right: 0
                    },
                    i = {
                        ...i,
                        left: 0,
                        top: 0
                    },
                    t.image || (i.width = 2 * i.width);
                    break;
                case "top":
                    s = {
                        ...s,
                        top: 0
                    },
                    i = {
                        ...i,
                        bottom: 0
                    },
                    t.image || (i.height = 2 * i.height);
                    break;
                case "bottom":
                    s = {
                        ...s,
                        bottom: 0
                    },
                    i = {
                        ...i,
                        top: 0
                    },
                    t.image || (i.height = 2 * i.height);
                    break;
                default:
                    s = {
                        ...s,
                        left: 0
                    },
                    i = {
                        ...i,
                        right: 0,
                        top: 0
                    }
                }
                return cs(Cd, {
                    post: t,
                    classes: Yi(t, "crt-post crt-tetris-post " + (e.w > e.h ? "crt-tetris-horizontal" : "crt-tetris-vertical")),
                    sx: o,
                    children: t.image ? cs("div", {
                        className: "crt-tetris-post-content",
                        children: [cs("div", {
                            className: "crt-tetris-post-image",
                            style: s,
                            children: [cs(nh, {
                                post: t
                            }), t.video && cs(cd, {
                                post: t
                            })]
                        }), this.postOnlyText(t, i)]
                    }) : this.postOnlyText(t, i)
                })
            }
        }
        Object.defineProperty(Kh, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Pi
        });
        const Yh = [{
            cols: 1,
            rows: 2,
            layouts: [{
                x: 0,
                y: 0,
                w: 1,
                h: 2,
                position: "top"
            }]
        }, {
            cols: 2,
            rows: 2,
            layouts: [{
                x: 0,
                y: 0,
                w: 2,
                h: 1,
                position: "left"
            }, {
                x: 0,
                y: 1,
                w: 2,
                h: 1,
                position: "right"
            }]
        }, {
            cols: 3,
            rows: 4,
            layouts: [{
                x: 0,
                y: 0,
                w: 2,
                h: 1,
                position: "left"
            }, {
                x: 0,
                y: 1,
                w: 2,
                h: 1,
                position: "right"
            }, {
                x: 2,
                y: 0,
                w: 1,
                h: 2,
                position: "top"
            }, {
                x: 0,
                y: 2,
                w: 1,
                h: 2,
                position: "bottom"
            }, {
                x: 1,
                y: 2,
                w: 2,
                h: 1,
                position: "right"
            }, {
                x: 1,
                y: 3,
                w: 2,
                h: 1,
                position: "left"
            }]
        }, {
            cols: 4,
            rows: 9,
            layouts: [{
                x: 0,
                y: 0,
                w: 2,
                h: 1,
                position: "left"
            }, {
                x: 0,
                y: 1,
                w: 2,
                h: 1,
                position: "right"
            }, {
                x: 2,
                y: 0,
                w: 1,
                h: 2,
                position: "top"
            }, {
                x: 3,
                y: 0,
                w: 1,
                h: 2,
                position: "bottom"
            }, {
                x: 0,
                y: 2,
                w: 1,
                h: 2,
                position: "top"
            }, {
                x: 1,
                y: 2,
                w: 2,
                h: 1,
                position: "left"
            }, {
                x: 3,
                y: 2,
                w: 1,
                h: 2,
                position: "top"
            }, {
                x: 1,
                y: 3,
                w: 1,
                h: 2,
                position: "top"
            }, {
                x: 2,
                y: 3,
                w: 1,
                h: 2,
                position: "bottom"
            }, {
                x: 0,
                y: 4,
                w: 1,
                h: 2,
                position: "bottom"
            }, {
                x: 1,
                y: 5,
                w: 2,
                h: 1,
                position: "left"
            }, {
                x: 3,
                y: 4,
                w: 1,
                h: 2,
                position: "bottom"
            }, {
                x: 0,
                y: 6,
                w: 2,
                h: 1,
                position: "right"
            }, {
                x: 0,
                y: 7,
                w: 1,
                h: 2,
                position: "bottom"
            }, {
                x: 2,
                y: 6,
                w: 1,
                h: 2,
                position: "bottom"
            }, {
                x: 3,
                y: 6,
                w: 1,
                h: 2,
                position: "top"
            }, {
                x: 1,
                y: 7,
                w: 1,
                h: 2,
                position: "bottom"
            }, {
                x: 2,
                y: 8,
                w: 2,
                h: 1,
                position: "left"
            }]
        }, {
            cols: 6,
            rows: 7,
            layouts: [{
                x: 0,
                y: 0,
                w: 2,
                h: 1,
                position: "left"
            }, {
                x: 0,
                y: 1,
                w: 2,
                h: 1,
                position: "right"
            }, {
                x: 2,
                y: 0,
                w: 1,
                h: 2,
                position: "top"
            }, {
                x: 3,
                y: 0,
                w: 1,
                h: 2,
                position: "bottom"
            }, {
                x: 4,
                y: 0,
                w: 2,
                h: 1,
                position: "left"
            }, {
                x: 4,
                y: 1,
                w: 2,
                h: 1,
                position: "right"
            }, {
                x: 0,
                y: 2,
                w: 1,
                h: 2,
                position: "top"
            }, {
                x: 1,
                y: 2,
                w: 2,
                h: 1,
                position: "left"
            }, {
                x: 3,
                y: 2,
                w: 2,
                h: 1,
                position: "right"
            }, {
                x: 5,
                y: 2,
                w: 1,
                h: 2,
                position: "top"
            }, {
                x: 1,
                y: 3,
                w: 1,
                h: 2,
                position: "top"
            }, {
                x: 2,
                y: 3,
                w: 1,
                h: 2,
                position: "bottom"
            }, {
                x: 3,
                y: 3,
                w: 2,
                h: 1,
                position: "left"
            }, {
                x: 0,
                y: 4,
                w: 1,
                h: 2,
                position: "bottom"
            }, {
                x: 1,
                y: 5,
                w: 2,
                h: 1,
                position: "left"
            }, {
                x: 3,
                y: 4,
                w: 1,
                h: 2,
                position: "top"
            }, {
                x: 4,
                y: 4,
                w: 2,
                h: 1,
                position: "right"
            }, {
                x: 4,
                y: 5,
                w: 2,
                h: 1,
                position: "left"
            }, {
                x: 0,
                y: 6,
                w: 2,
                h: 1,
                position: "left"
            }, {
                x: 0,
                y: 7,
                w: 2,
                h: 1,
                position: "right"
            }, {
                x: 2,
                y: 6,
                w: 1,
                h: 2,
                position: "top"
            }, {
                x: 3,
                y: 6,
                w: 1,
                h: 2,
                position: "bottom"
            }, {
                x: 4,
                y: 6,
                w: 2,
                h: 1,
                position: "right"
            }, {
                x: 4,
                y: 7,
                w: 2,
                h: 1,
                position: "left"
            }]
        }];
        class Zh extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "refPost", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                })
            }
            adClick() {
                const t = this.props.ad;
                "goto-url" == t.click_action && window.open(t.url, "_blank")
            }
            postOnlyText(t, e) {
                return cs("div", {
                    className: "crt-post-only-text",
                    style: e,
                    children: [cs(Gh, {
                        post: t,
                        withTitle: !0
                    }), cs("div", {
                        className: "crt-post-text-footer",
                        children: [cs(tl, {
                            post: t,
                            className: "crt-social-icon-normal"
                        }), cs(_d, {
                            post: t
                        }), cs(Gl, {
                            post: t
                        })]
                    })]
                })
            }
            render() {
                const t = this.props.ad
                  , e = this.props.layout
                  , o = {
                    position: "absolute",
                    left: e.x,
                    top: e.y,
                    width: e.w,
                    height: e.h,
                    display: "none" === e.display ? "none" : "block",
                    paddingLeft: this.context.config.get("widget.horizontalSpacing") / 2,
                    paddingRight: this.context.config.get("widget.horizontalSpacing") / 2,
                    paddingBottom: this.context.config.get("widget.verticalSpacing", 0)
                }
                  , r = e.w > e.h ? (e.w - 20) / 2 : e.w - 20
                  , n = e.h > e.w ? (e.h - 20) / 2 : e.h - 20;
                let s = {
                    position: "absolute",
                    width: r,
                    height: n
                }
                  , i = {
                    position: "absolute",
                    width: r,
                    height: n
                };
                switch (e.position) {
                case "left":
                default:
                    s = {
                        ...s,
                        left: 0
                    },
                    i = {
                        ...i,
                        right: 0,
                        top: 0
                    };
                    break;
                case "right":
                    s = {
                        ...s,
                        right: 0
                    },
                    i = {
                        ...i,
                        left: 0,
                        top: 0
                    };
                    break;
                case "top":
                    s = {
                        ...s,
                        top: 0
                    },
                    i = {
                        ...i,
                        bottom: 0
                    };
                    break;
                case "bottom":
                    s = {
                        ...s,
                        bottom: 0
                    },
                    i = {
                        ...i,
                        top: 0
                    }
                }
                return cs(Cd, {
                    post: t,
                    classes: Zi(t, "crt-post crt-tetris-post " + (e.w > e.h ? "crt-tetris-horizontal" : "crt-tetris-vertical")),
                    sx: o,
                    children: cs("div", {
                        className: "crt-post-c",
                        ref: this.refPost,
                        onClick: ()=>this.adClick(),
                        children: t.image ? cs("div", {
                            className: "crt-tetris-post-content",
                            children: [cs("div", {
                                className: "crt-tetris-post-image",
                                style: s,
                                children: [cs(nh, {
                                    post: t
                                }), t.video && cs(cd, {
                                    post: t
                                })]
                            }), this.postOnlyText(t, i)]
                        }) : this.postOnlyText(t, i)
                    })
                })
            }
        }
        Object.defineProperty(Zh, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Pi
        });
        class Xh extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "el", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "ro", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "previousFeedWidth", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: -1
                }),
                Object.defineProperty(this, "previousMax", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "config", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "debouncedLoadPost", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: kh()(((t=25)=>{
                        this._loadPosts(t)
                    }
                    ), 500)
                }),
                this.config = t.config,
                this.config.get("post.minWidth") < 100 && this.config.set("post.minWidth", 100),
                this.state = {
                    posts: [],
                    feedHeight: 0,
                    visible: !1
                }
            }
            componentDidMount() {
                requestAnimationFrame((()=>{
                    this.updateLayout(!0)
                }
                )),
                this.ro = Rl(this.updateLayout.bind(this), this.base),
                this.context.filterService.registerOnFilterChanged(this.onFilterChanged.bind(this)),
                this.context.filterService.triggerCheckDefaultFilter(),
                this.debouncedLoadPost()
            }
            componentWillUnmount() {
                this.ro?.disconnect()
            }
            onFilterChanged(t) {
                this.setState({
                    posts: []
                }),
                this.context.feed.reset(),
                this.context.feed.setParams(t),
                this.debouncedLoadPost()
            }
            async onLoadMore() {
                await this.debouncedLoadPost(26)
            }
            async _loadPosts(t) {
                const e = await Bd(this.context.feed, this.context.message, t, {
                    image_width: 1080
                });
                if (e) {
                    const t = this.state.posts;
                    for (let o = 0; o < e.length; o++) {
                        const r = {
                            post: e[o],
                            layout: {
                                x: 0,
                                y: 0,
                                w: 100,
                                h: 100
                            }
                        };
                        t.push(r)
                    }
                    await this.setState({
                        posts: t
                    }),
                    this.updateLayout(!0)
                }
            }
            updateLayout(t=!1) {
                const e = this.state.posts
                  , o = this.el.current && this.el.current.clientWidth ? this.el.current.clientWidth : 100;
                if (o === this.previousFeedWidth && !t)
                    return;
                this.previousFeedWidth = o;
                const r = function(t) {
                    let e = Yh[0];
                    for (let o = 1; o < Yh.length; o++) {
                        const r = Yh[o];
                        r.cols <= t && (e = r)
                    }
                    return e
                }(yh(o, this.config.get("post.minWidth", 100)))
                  , n = o / r.cols;
                let s = 0;
                const i = r.layouts.length;
                let a = e.length < i ? e.length : Math.floor(e.length / i) * i;
                const c = r.rows;
                this.previousMax !== a ? this.previousMax = a : a = e.length;
                for (let t = 0; t < a; t++) {
                    const o = e[t]
                      , a = t % i
                      , l = c * Math.floor(t / i) * n;
                    if (r.layouts[a]) {
                        const t = r.layouts[a];
                        o.layout.w = t.w * n,
                        o.layout.h = t.h * n,
                        o.layout.x = t.x * n,
                        o.layout.y = l + t.y * n,
                        o.layout.display = "block",
                        o.layout.position = t.position,
                        l + o.layout.y + o.layout.h > s && (s = o.layout.y + o.layout.h)
                    } else
                        console.log("No layout")
                }
                for (let t = a; t < e.length; t++) {
                    e[t].layout.display = "none"
                }
                this.context.widget.data.previousNOfPosts = this.context.widget.data.nOfPosts,
                this.context.widget.data.nOfPosts = a,
                this.setState({
                    posts: e,
                    feedHeight: s
                })
            }
            render(t) {
                const e = this.state.posts.map((t=>{
                    if ("none" !== t.layout.display)
                        return "ad" === t.post.type ? cs(Zh, {
                            ad: t.post,
                            layout: t.layout
                        }, t.post.slug) : cs(Kh, {
                            post: t.post,
                            layout: t.layout
                        }, t.post.id)
                }
                ))
                  , o = {
                    height: this.state.feedHeight
                }
                  , r = this.state.posts.length ? "feed" : "presentation";
                return cs("div", {
                    className: "crt-feed-window",
                    children: [cs("div", {
                        ref: this.el,
                        className: "crt-feed",
                        style: o,
                        tabIndex: 0,
                        "aria-label": "There are " + this.state.posts.length + " posts in the feed",
                        role: r,
                        children: e
                    }), cs(sd, {
                        onLoadMore: ()=>this.onLoadMore()
                    })]
                })
            }
        }
        Object.defineProperty(Xh, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Yu
        });
        class Qh extends T {
            constructor(t) {
                super(t)
            }
            render() {
                const t = this.props.post;
                return cs(Cd, {
                    post: t,
                    classes: Yi(t, "crt-post crt-wall-post"),
                    children: t.image ? cs("div", {
                        children: [cs("div", {
                            className: "crt-wall-post-content",
                            children: cs("div", {
                                children: [cs(tl, {
                                    post: t,
                                    className: "crt-social-icon-normal"
                                }), cs(gd, {
                                    post: t
                                }), t.video && cs(cd, {
                                    post: t
                                })]
                            })
                        }), cs("div", {
                            className: "crt-post-hover",
                            children: [cs("div", {
                                className: "crt-post-header",
                                children: [cs(tl, {
                                    post: t
                                }), cs(ld, {
                                    post: t
                                })]
                            }), cs(Yl, {
                                post: t
                            }), cs(hd, {
                                post: t
                            }), cs(bd, {
                                post: t
                            }), cs(xd, {
                                post: t
                            })]
                        })]
                    }) : cs("div", {
                        className: "crt-post-only-text",
                        children: [cs(ol, {
                            post: t
                        }), cs(ld, {
                            post: t
                        }), cs(Ih, {
                            post: t
                        }), cs(Bh, {
                            post: t
                        })]
                    })
                })
            }
        }
        class Jh extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "refPost", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                })
            }
            adClick() {
                const t = this.props.ad;
                "goto-url" == t.click_action && window.open(t.url, "_blank")
            }
            render() {
                const t = this.props.ad;
                return cs("div", {
                    className: Zi(t, "crt-post crt-wall-post").join(" "),
                    "data-post": t.slug,
                    children: cs("div", {
                        className: "crt-post-c",
                        ref: this.refPost,
                        onClick: ()=>this.adClick(),
                        children: [cs("div", {
                            className: "crt-wall-post-content",
                            children: [cs(tl, {
                                post: t,
                                className: "crt-social-icon-normal"
                            }), cs(gd, {
                                post: t
                            })]
                        }), cs("div", {
                            className: "crt-post-hover",
                            children: cs("div", {
                                children: [cs("div", {
                                    className: "crt-post-header",
                                    children: cs(tl, {
                                        post: t
                                    })
                                }), cs(Yl, {
                                    post: t
                                })]
                            })
                        })]
                    })
                })
            }
        }
        class tp extends T {
            constructor(t) {
                super(t),
                this.state = {
                    posts: []
                }
            }
            componentDidMount() {
                this.props.manager.registerCol(this)
            }
            componentWillUnmount() {
                this.props.manager.unregisterCol(this)
            }
            addPost(t) {
                const e = this.state.posts;
                e.push(t),
                this.setState({
                    posts: e
                })
            }
            rest() {
                this.setState({
                    posts: []
                })
            }
            renderPost(t) {
                return "ad" === t.type ? cs(Jh, {
                    ad: t
                }, t.slug) : cs(Qh, {
                    post: t
                }, t.id)
            }
            render(t) {
                const e = {
                    width: t.colWidth + "%",
                    float: "left",
                    "-webkit-box-sizing": "border-box",
                    "-moz-box-sizing": "border-box",
                    "-o-box-sizing": "border-box",
                    "box-sizing": "border-box"
                }
                  , o = this.state.posts.map(((t,e)=>this.renderPost(t)));
                return cs("div", {
                    style: e,
                    className: "crt-col-" + t.i,
                    children: o
                })
            }
        }
        Object.defineProperty(tp, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Pi
        });
        const ep = es("WallColManager");
        class op {
            constructor() {
                Object.defineProperty(this, "cols", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "postsRendered", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "postsToAdd", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "alive", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !0
                }),
                this.rebuild = Wl(this.rebuild, 100)
            }
            destroy() {
                this.alive = !1
            }
            registerCol(t) {
                ep.log("REGISTER"),
                ep.log(t),
                this.cols.push(t),
                this.postsRendered.length > 0 && this.rebuild()
            }
            unregisterCol(t) {
                ep.log("UNREGISTER");
                for (let e = 0; e < this.cols.length; e++)
                    this.cols[e] === t && (ep.log("FOUND!!!"),
                    this.cols.splice(e, 1));
                ep.log(this.cols),
                this.cols.length > 0 && this.rebuild()
            }
            rebuild() {
                if (this.postsToAdd = zl(this.postsRendered),
                this.postsRendered = [],
                this.cols.length > 0) {
                    for (let t = 0; t < this.cols.length; t++)
                        this.cols[t].rest();
                    window.requestAnimationFrame((()=>{
                        this.addNextPost()
                    }
                    ))
                }
            }
            addPosts(t) {
                this.postsToAdd = this.postsToAdd.concat(t),
                this.addNextPost()
            }
            addNextPost() {
                if (!this.alive)
                    return;
                const t = this.postsToAdd.shift();
                if (t) {
                    const e = this.getShortestCol();
                    this.cols[e].addPost(t),
                    this.postsRendered.push(t),
                    window.requestAnimationFrame((()=>{
                        this.addNextPost()
                    }
                    ))
                }
            }
            getShortestCol() {
                let t = 0
                  , e = $n(this.cols[0].base);
                for (let o = 1; o < this.cols.length; o++) {
                    const r = $n(this.cols[o].base);
                    r < e && (t = o,
                    e = r)
                }
                return t
            }
            reset() {
                this.postsRendered = [],
                this.postsToAdd = [],
                window.requestAnimationFrame((()=>{
                    for (let t = 0; t < this.cols.length; t++)
                        this.cols[t].rest()
                }
                ))
            }
        }
        const rp = es("WallWidget");
        class np extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "re", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "previousFeedWidth", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: -1
                }),
                Object.defineProperty(this, "refFeed", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "refCols", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "posts", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "config", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "loader", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new Zd
                }),
                Object.defineProperty(this, "manager", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new op
                }),
                Object.defineProperty(this, "firstLoad", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !0
                }),
                Object.defineProperty(this, "onLoadMore", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: ()=>{
                        rp.log("onMoreClick"),
                        this._loadPosts()
                    }
                }),
                Object.defineProperty(this, "loadPage", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: async t=>{
                        this.reset(),
                        this.setState({
                            page: t
                        }),
                        this.posts = [];
                        const e = await this.context.feed.loadPage(t);
                        e && (this.posts.concat(e.posts),
                        this.manager.reset(),
                        window.requestAnimationFrame((()=>{
                            this.manager.addPosts(e.posts)
                        }
                        )))
                    }
                }),
                this.config = t.config;
                const e = this.config.get("widget.postsPerPage", 12);
                this.config.set("feed.limit", e),
                this.state = {
                    showPopup: !1,
                    visible: !1,
                    colCount: 0,
                    message: "",
                    messageType: "",
                    page: 0
                }
            }
            componentDidMount() {
                rp.log("componentDidMount"),
                this.re = Rl(this.updateLayout.bind(this), this.base),
                this.context.filterService.registerOnFilterChanged(this.onFilterChanged.bind(this)),
                this.context.filterService.triggerCheckDefaultFilter()
            }
            componentWillUnmount() {
                this.manager.destroy(),
                this.re?.disconnect()
            }
            onFilterChanged(t) {
                rp.log("onFilterChanged " + this.props.widgetId),
                this.reset(),
                this.context.feed.reset(),
                this.context.feed.setParams(t),
                this._loadPosts()
            }
            async _loadPosts() {
                rp.log("_loadPosts");
                const t = await Bd(this.context.feed, this.context.message, this.config.get("widget.postsPerPage", 12));
                t && (this.posts = this.posts.concat(t),
                this.manager.addPosts(t))
            }
            reset() {
                this.posts = [],
                this.manager.reset()
            }
            updateLayout() {
                rp.log("updateLayout");
                const t = this.feedWidth();
                if (t === this.previousFeedWidth)
                    return;
                this.previousFeedWidth = t;
                const e = this.config.get("widget.colWidth", 100);
                let o = Math.floor(t / e);
                o = o < 1 ? 1 : o,
                o !== this.state.colCount && (rp.log(" colCount=" + o),
                this.setState({
                    colCount: o
                }),
                this.firstLoad && (this.firstLoad = !1,
                window.requestAnimationFrame((()=>{
                    this._loadPosts()
                }
                ))))
            }
            feedWidth() {
                const t = Un(this.refFeed);
                return t < 100 ? 100 : t
            }
            render() {
                rp.log("render");
                const t = []
                  , e = 100 / this.state.colCount;
                for (let o = 0; o < this.state.colCount; o++)
                    t.push(cs(tp, {
                        i: o,
                        colWidth: e,
                        ref: this.refCols,
                        manager: this.manager
                    }, o));
                return cs("div", {
                    className: "crt-feed-scroll",
                    children: cs(fd, {
                        loader: this.loader,
                        children: [cs(Jd, {
                            show: 0 === this.posts.length
                        }), cs("div", {
                            className: "crt-feed",
                            ref: this.refFeed,
                            children: t
                        }), cs(sd, {
                            onLoadMore: this.onLoadMore
                        })]
                    })
                })
            }
        }
        Object.defineProperty(np, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Yu
        }),
        np.contextType = Yu;
        const sp = es("Wall");
        class ip extends td {
            setStyles(t) {
                this.createStyleSheet(),
                this.setStylesGeneral(t)
            }
            setStylesGeneral(t) {
                this.addStyle(t.popup, ".crt-popup"),
                this.addStyle(t.widget, ".crt-widget"),
                this.addStyle(t.widget, ".crt-select .crt-feed .crt-selected-post .crt-select-post-content"),
                this.addStyle(t.widget, ".crt-select .crt-feed .crt-select-post-list .crt-carousel-feed .crt-post"),
                this.addStyle(t.loadMore, ".crt-widget .crt-load-more"),
                this.addStyle(t.post, ".crt-select .crt-feed .crt-selected-post .crt-select-post-content .crt-select-post-body-container"),
                this.addStyle(t.postFooter, ".crt-select .crt-feed .crt-selected-post .crt-select-post-content .crt-select-post-body-container .crt-select-post-body:after"),
                this.addStyle(t.postText, ".crt-widget .crt-post-text"),
                this.addStyle(t.postTextLink, ".crt-widget .crt-post-text a"),
                this.addStyle(t.postName, ".crt-widget .crt-post-title"),
                this.addStyle(t.postName, ".crt-widget .crt-post-fullname a"),
                this.addStyle(t.postUsername, ".crt-select .crt-feed .crt-selected-post .crt-select-post-content .crt-select-post-body-container .crt-select-post-body .crt-select-post-text-footer .crt-post-username a"),
                this.addStyle(t.postIcon, ".crt-select .crt-feed .crt-selected-post .crt-select-post-content .crt-select-post-body-container .crt-select-post-body .crt-select-post-text-footer .crt-social-icon svg"),
                this.addStyle(t.postIcon, ".crt-select .crt-feed .crt-selected-post .crt-select-post-content .crt-select-post-body-container .crt-select-post-body .crt-select-post-text-footer .crt-post-share .crt-share-button svg"),
                this.addStyle(t.postIconWithBorder, ".crt-widget .crt-post-share .crt-popup-share-icon-container-icons a:not(:hover)"),
                this.addStyle(t.postComments, ".crt-widget .crt-comments-likes"),
                this.addStyle(t.postShareIcons, ".crt-widget .crt-post-footer .crt-post-share a"),
                this.addStyle(t.postDate, ".crt-select .crt-feed .crt-selected-post .crt-select-post-content .crt-select-post-body-container .crt-select-post-body .crt-post-date a"),
                this.addStyle(t.postDate, ".crt-select .crt-feed .crt-selected-post .crt-select-post-content .crt-select-post-body-container .crt-select-post-body .crt-post-date span"),
                this.addStyle(t.postMaxHeightReadMore, ".crt-widget .crt-post.crt-post-max-height .crt-post-max-height-read-more"),
                this.addStyle(t.postImages, ".crt-select .crt-feed .crt-select-post-list .crt-select-post-list-item"),
                this.addStyle(t.postImages, ".crt-select .crt-feed .crt-selected-post .crt-select-post-content .crt-select-post-image-container .crt-select-post-image"),
                this.addStyle(t.postImages, ".crt-select .crt-feed .crt-selected-post .crt-select-post-content .crt-select-post-body-container"),
                this.addStyle(t.postImages, ".crt-select .crt-feed .crt-selected-post .crt-select-post-content .crt-select-post-image-container .crt-video .crt-video-container"),
                this.addStyle(t.gridPost, ".crt-widget .crt-grid-post"),
                this.addCssRules(t.cssRules)
            }
        }
        class ap extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "textContainerRef", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "textRef", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                this.state = {
                    textContainerClasses: "crt-tetris-text-container"
                }
            }
            componentDidMount() {
                $n(this.textContainerRef) > $n(this.textRef) && this.setState({
                    textContainerClasses: "crt-tetris-text-container tetris-middle-text"
                })
            }
            render() {
                const {post: t} = this.props
                  , e = Yi(t, "crt-post crt-select-post ");
                return cs(Cd, {
                    post: t,
                    classes: e,
                    children: cs("div", {
                        className: e.join(" "),
                        children: cs("div", {
                            className: "crt-select-post-content",
                            children: [t.image && cs("div", {
                                className: "crt-select-post-image-container",
                                children: [cs("div", {
                                    className: "crt-select-post-image",
                                    style: {
                                        backgroundImage: `url(${t.image})`
                                    }
                                }), t.video && cs(cd, {
                                    post: t,
                                    playable: !0
                                })]
                            }), cs("div", {
                                className: "crt-select-post-body-container",
                                children: cs("div", {
                                    className: "crt-select-post-body",
                                    children: [cs(fl, {
                                        post: t
                                    }), cs("div", {
                                        className: "crt-select-post-center-body",
                                        children: cs("div", {
                                            className: "center-body",
                                            children: [cs(ol, {
                                                post: t
                                            }), cs(ld, {
                                                post: t
                                            }), cs(Pd, {
                                                post: t
                                            }), cs(Yl, {
                                                post: t
                                            })]
                                        })
                                    }), cs(Ed, {
                                        className: "crt-select-post-text-footer",
                                        post: t
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
        }
        class cp extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "refEl", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                })
            }
            render() {
                const t = this.props.post
                  , e = this.props.selectedPost
                  , o = vd(t);
                let r = "crt-select-post-list-item";
                if (!t.image)
                    return cs("div", {
                        className: "crt-post",
                        children: cs("div", {
                            className: r,
                            onClick: this.props.onClick,
                            children: "no image"
                        }, o)
                    });
                r += " has-image";
                const n = {
                    backgroundImage: `url(${t.image})`
                };
                let s = !1;
                e && t && (qi(e) && qi(t) && e.id === t.id ? s = !0 : qi(e) || qi(t) || e.slug !== t.slug || (s = !0));
                return cs("div", {
                    className: "crt-post " + (s ? "selected" : ""),
                    tabIndex: 0,
                    role: "article",
                    onKeyPress: t=>{
                        nl(t) && this.props.onClick && this.props.onClick()
                    }
                    ,
                    "aria-label": $i(t),
                    children: cs("div", {
                        className: "crt-post-c",
                        children: cs("div", {
                            className: "image-container",
                            children: cs("div", {
                                className: r,
                                style: n,
                                onClick: this.props.onClick
                            }, o)
                        })
                    })
                })
            }
        }
        class lp extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "config", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "debouncedLoadPost", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: kh()((()=>{
                        this._loadPosts()
                    }
                    ), 500)
                }),
                this.config = t.config,
                this.createPane = this.createPane.bind(this),
                this.setState({
                    posts: [],
                    paneCount: 0,
                    selectedPost: void 0
                })
            }
            componentDidMount() {
                console.log("did mount"),
                this.debouncedLoadPost(),
                this.context.filterService.registerOnFilterChanged(this.onFilterChanged.bind(this)),
                this.context.filterService.triggerCheckDefaultFilter()
            }
            onFilterChanged(t) {
                console.log("onFilterChanged " + this.props.widgetId),
                this.setState({
                    posts: [],
                    paneCount: 0
                }),
                this.context.feed.reset(),
                this.context.feed.setParams(t),
                this.debouncedLoadPost()
            }
            async _loadPosts() {
                console.log("load posts");
                await Bd(this.context.feed, this.context.message, 25, {
                    has_media: !0,
                    image_width: 1080
                }),
                this.setState({
                    posts: this.context.feed._feed,
                    paneCount: this.context.feed.numPosts(),
                    selectedPost: this.context.feed._posts[0]
                })
            }
            createPane(t, e) {
                let o = t;
                t < 0 ? o = this.context.feed.numPosts() + t : t > this.context.feed.numPosts() - 1 && (o = t % this.context.feed.numPosts());
                const r = this.context.feed.postAtIndex(o);
                return cs(cp, {
                    post: r,
                    selectedPost: this.state.selectedPost,
                    onClick: async()=>{
                        await this.setState((()=>({
                            selectedPost: r
                        })))
                    }
                })
            }
            render() {
                return cs("div", {
                    children: cs("div", {
                        className: "crt-feed",
                        children: [cs("div", {
                            className: "crt-selected-post",
                            children: this.state.selectedPost && cs(ap, {
                                post: this.state.selectedPost
                            })
                        }), cs("div", {
                            className: "crt-select-post-list",
                            children: cs(xh, {
                                createPane: this.createPane,
                                paneCount: this.state.paneCount
                            })
                        })]
                    })
                })
            }
        }
        Object.defineProperty(lp, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Yu
        });
        class up extends td {
            setStyles(t) {
                this.createStyleSheet(),
                this.setStylesGeneral(t)
            }
            setStylesGeneral(t) {
                this.addStyle(t.popup, ".crt-popup"),
                this.addStyle(t.widget, ".crt-widget"),
                this.addStyle(t.loadMore, ".crt-widget .crt-load-more"),
                this.addStyle(t.post, ".crt-stack .crt-stack-post-content"),
                this.addStyle(t.post, ".crt-stack .crt-stacked-cards-box .hidden-card"),
                this.addStyle(t.linearGradient, ".crt-stack .crt-stack-post-content .crt-stack-post-body .center-body:after"),
                this.addStyle(t.postText, ".crt-widget .crt-post-text"),
                this.addStyle(t.postTextLink, ".crt-widget .crt-post-text a"),
                this.addStyle(t.postFixDate, ".crt-widget .crt-post-date-link"),
                this.addStyle(t.postName, ".crt-widget .crt-post-fullname a"),
                this.addStyle(t.postName, ".crt-widget .crt-post-title"),
                this.addStyle(t.postUsername, ".crt-stack .crt-stack-post-content .crt-stack-post-body .crt-stack-post-text-footer .crt-post-username a"),
                this.addStyle(t.postIcon, ".crt-stack .crt-stack-post-content .crt-stack-post-body .crt-stack-post-text-footer .crt-social-icon i"),
                this.addStyle(t.postIcon, ".crt-stack .crt-stack-post-content .crt-stack-post-body .crt-stack-post-text-footer .crt-social-icon svg"),
                this.addStyle(t.postIconWithBorder, ".crt-widget .crt-post-share .crt-popup-share-icon-container-icons a:not(:hover)"),
                this.addStyle(t.postComments, ".crt-widget .crt-comments-likes"),
                this.addStyle(t.postIcon, ".crt-stack .crt-stack-post-content .crt-stack-post-body .crt-stack-post-text-footer .crt-post-share .crt-share-button svg"),
                this.addStyle(t.postFixDate, ".crt-widget .crt-post-date a"),
                this.addStyle(t.postMaxHeightReadMore, ".crt-widget .crt-post.crt-post-max-height .crt-post-max-height-read-more"),
                this.addStyle(t.gridPost, ".crt-widget .crt-grid-post"),
                this.addCssRules(t.cssRules)
            }
        }
        function dp(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                width: "17",
                height: "34",
                viewBox: "0 0 17 34",
                fill: "none"
            }, e), ["\n    ", F("path", {
                d: "M16 1L2 17L16 33",
                stroke: "currentColor",
                "stroke-width": "2",
                fill: "none"
            }, []), "\n"])
        }
        function hp(t) {
            t.styles;
            var e = Object.assign({}, t);
            return delete e.styles,
            F("svg", Object.assign({
                width: "17",
                height: "34",
                viewBox: "0 0 17 34",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ["\n    ", F("path", {
                d: "M0.999999 33L15 17L1 0.999999",
                stroke: "currentColor",
                "stroke-width": "2",
                fill: "none"
            }, []), "\n"])
        }
        class pp extends T {
            constructor(t) {
                super(t)
            }
            render() {
                const t = this.props.post;
                return t ? cs("div", {
                    className: "crt-stack-post-content",
                    children: cs("div", {
                        className: "crt-stack-post-body",
                        children: [cs(fl, {
                            post: t
                        }), cs("div", {
                            className: "crt-stack-post-center-body",
                            children: cs("div", {
                                className: "center-body",
                                children: [cs(ol, {
                                    post: t
                                }), cs(ld, {
                                    post: t
                                }), cs(Pd, {
                                    post: t
                                }), cs(Yl, {
                                    post: t
                                })]
                            })
                        }), cs("div", {
                            className: "crt-stack-post-text-footer",
                            children: [cs(tl, {
                                post: t,
                                className: "crt-social-icon-normal"
                            }), cs(_d, {
                                post: t
                            }), cs(Gl, {
                                post: t
                            })]
                        })]
                    })
                }) : null
            }
        }
        const fp = t=>{
            const e = t.post;
            if (!e)
                return null;
            const o = {
                backgroundImage: `url(${e.image})`
            }
              , r = e.video && "null" !== e.video ? cs(D, {
                children: [cs(cd, {
                    post: e,
                    playable: !0,
                    tabIndex: 0 === t.index ? 0 : -1
                }), cs("div", {
                    className: "card-image",
                    style: o
                })]
            }) : cs("div", {
                onClick: t.onClick,
                className: "card-image",
                style: o
            });
            return cs("div", {
                className: "crt-stacked-card crt-post",
                "data-slide": t.index,
                children: cs(Cd, {
                    post: e,
                    classes: Yi(e, "crt-post"),
                    tabIndex: -1,
                    children: r
                })
            })
        }
        ;
        class gp extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "config", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "postContentDiv", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "debouncedLoadPost", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: kh()((()=>{
                        this._loadPosts()
                    }
                    ), 500)
                }),
                this.config = t.config,
                this.setState({
                    posts: [],
                    paneCount: 0,
                    selectedPostIndex: 0
                }),
                this.next = this.next.bind(this),
                this.prev = this.prev.bind(this)
            }
            async _loadPosts() {
                await Bd(this.context.feed, this.context.message, this.config.get("widget.postsPerPage", 12), {
                    has_media: !0,
                    image_width: 1080
                });
                const t = this.context.feed._feed;
                this.setState({
                    posts: t,
                    selectedPostIndex: 0
                })
            }
            componentDidMount() {
                this.debouncedLoadPost(),
                this.setState({
                    computedPostContentHeight: Un(this.postContentDiv)
                }),
                this.context.filterService.registerOnFilterChanged(this.onFilterChanged.bind(this)),
                this.context.filterService.triggerCheckDefaultFilter()
            }
            onFilterChanged(t) {
                this.setState({
                    posts: [],
                    paneCount: 0
                }),
                this.context.feed.reset(),
                this.context.feed.setParams(t),
                this.debouncedLoadPost()
            }
            next() {
                let t = this.state.selectedPostIndex + 1;
                this.state.posts.length === t && (t = 0),
                this.setState({
                    selectedPostIndex: t
                })
            }
            prev() {
                let t = this.state.selectedPostIndex - 1;
                t < 0 && (t = this.state.posts.length - 1),
                this.setState({
                    selectedPostIndex: t
                })
            }
            getPosts() {
                const t = this.state.selectedPostIndex
                  , e = this.state.selectedPostIndex + 5;
                return this.state.posts.slice(t, e).map(((t,e)=>F(fp, {
                    ...{
                        index: e,
                        post: t,
                        onClick: ()=>{
                            this.next()
                        }
                    },
                    key: vd(t),
                    index: e
                })))
            }
            render() {
                const t = this.getPosts();
                return cs("div", {
                    children: cs("div", {
                        className: "crt-feed",
                        children: cs("div", {
                            className: "crt-stack-feed-container",
                            children: [cs("div", {
                                className: "crt-stacked-cards-box",
                                children: [cs("div", {
                                    className: "hidden-card"
                                }), t]
                            }), cs("div", {
                                className: "crt-stack-content",
                                ref: this.postContentDiv,
                                style: {
                                    maxHeight: this.state.computedPostContentHeight
                                },
                                children: [cs("span", {
                                    role: "button",
                                    "aria-label": "Previous",
                                    className: "arrow-left-icon",
                                    tabIndex: 0,
                                    onKeyPress: t=>{
                                        nl(t) && this.prev()
                                    }
                                    ,
                                    children: cs(dp, {
                                        onClick: this.prev
                                    })
                                }), cs(pp, {
                                    post: this.state.posts[this.state.selectedPostIndex]
                                }), cs("span", {
                                    role: "button",
                                    "aria-label": "Next",
                                    className: "arrow-right-icon",
                                    tabIndex: 0,
                                    onKeyPress: t=>{
                                        nl(t) && this.next()
                                    }
                                    ,
                                    children: cs(hp, {
                                        onClick: this.next
                                    })
                                })]
                            })]
                        })
                    })
                })
            }
        }
        Object.defineProperty(gp, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Yu
        });
        class mp extends td {
            setStyles(t) {
                this.createStyleSheet(),
                this.setStylesCoverFlow(t)
            }
            setStylesCoverFlow(t) {
                this.addStyle(t.popup, ".crt-popup"),
                this.addStyle(t.widget, ".crt-widget"),
                this.addStyle(t.postIcon, ".crt-cover-flow .crt-cover-flow-gallery-wrap .crt-cover-flow-item .crt-cover-flow-image-content .crt-post-share .crt-share-button svg"),
                this.addStyle(t.postIcon, ".crt-cover-flow .crt-cover-flow-gallery-wrap .crt-cover-flow-item .crt-cover-flow-image-content .crt-social-icon svg"),
                this.addStyle(t.postText, ".crt-cover-flow .crt-cover-flow-gallery-wrap .crt-cover-flow-item .crt-cover-flow-image-content .crt-post-text-footer a"),
                this.addStyle(t.postText, ".crt-cover-flow .crt-cover-flow-gallery-wrap .crt-cover-flow-item .crt-cover-flow-image-content .crt-post-text-footer .crt-post-fullname"),
                this.addStyle(t.postText, ".crt-cover-flow .crt-cover-flow-gallery-wrap .crt-cover-flow-item .crt-cover-flow-image-content .crt-post-text-footer .crt-post-date-link"),
                this.addCssRules(t.cssRules)
            }
        }
        class bp extends T {
            constructor(t) {
                super(t)
            }
            render() {
                const t = this.props.post
                  , e = this.props.postsLength;
                return cs(Cd, {
                    post: t,
                    classes: Yi(t, "crt-cover-flow-item"),
                    sx: {
                        backgroundImage: `url(${t.image})`,
                        flex: e
                    },
                    children: cs("div", {
                        className: "crt-cover-flow-image-content",
                        children: [cs("div", {
                            className: "crt-post-header",
                            children: cs(tl, {
                                post: t,
                                className: "crt-social-icon-normal"
                            })
                        }), cs("div", {
                            className: "crt-post-text-footer",
                            children: [cs(ol, {
                                post: t
                            }), cs("div", {
                                class: "user-info",
                                children: [cs(ld, {
                                    post: t
                                }), cs(fl, {
                                    post: t
                                })]
                            })]
                        }), cs(Gl, {
                            post: t
                        })]
                    })
                })
            }
        }
        class vp extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "config", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "galleryWrapRef", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "debouncedLoadPost", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: kh()((()=>{
                        this._loadPosts()
                    }
                    ), 500)
                }),
                this.config = t.config,
                this.setState({
                    posts: [],
                    paneCount: 0
                }),
                this.onKeyPress = this.onKeyPress.bind(this)
            }
            updateGalleryWrapHeight() {
                this.galleryWrapRef && this.setState({
                    galleryWrapWidth: Un(this.galleryWrapRef)
                })
            }
            componentDidMount() {
                this.debouncedLoadPost(),
                this.updateGalleryWrapHeight(),
                window.addEventListener("resize", (()=>{
                    this.updateGalleryWrapHeight()
                }
                )),
                this.context.filterService.registerOnFilterChanged(this.onFilterChanged.bind(this)),
                this.context.filterService.triggerCheckDefaultFilter()
            }
            onFilterChanged(t) {
                this.setState({
                    posts: [],
                    paneCount: 0
                }),
                this.context.feed.reset(),
                this.context.feed.setParams(t),
                this.debouncedLoadPost()
            }
            async _loadPosts() {
                const t = this.config.get("widget.postsPerPage", 12)
                  , e = await Bd(this.context.feed, this.context.message, t, {
                    has_media: !0,
                    image_width: 1080
                });
                this.setState({
                    posts: e,
                    paneCount: this.context.feed.numPosts()
                })
            }
            async onKeyPress(t, e) {
                if (nl(e)) {
                    const e = rd(t, this.context.config);
                    e && nd(e)
                }
            }
            render() {
                const t = this.state.posts.map((t=>cs(bp, {
                    post: t,
                    postsLength: this.state.posts.length
                })))
                  , e = this.state.posts.length ? "feed" : "presentation";
                return cs("div", {
                    children: cs("div", {
                        className: "crt-feed",
                        children: cs("div", {
                            ref: this.galleryWrapRef,
                            className: "crt-cover-flow-gallery-wrap",
                            style: {
                                height: .5 * this.state.galleryWrapWidth
                            },
                            tabIndex: 0,
                            "aria-label": "There are " + this.state.posts.length + " posts in the feed",
                            role: e,
                            children: t
                        })
                    })
                })
            }
        }
        Object.defineProperty(vp, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Yu
        });
        class wp extends td {
            setStyles(t) {
                this.createStyleSheet(),
                this.setStylesGeneral(t)
            }
            setStylesGeneral(t) {
                this.addStyle(t.popup, ".crt-popup"),
                this.addStyle(t.widget, ".crt-widget"),
                this.addStyle(t.widget, ".crt-stagger .crt-feed .crt-stagger-post .crt-stagger-post-content"),
                this.addStyle(t.loadMore, ".crt-widget .crt-load-more"),
                this.addStyle(t.post, ".crt-stagger .crt-feed .crt-stagger-post .crt-stagger-post-content .crt-stagger-post-body-container"),
                this.addStyle(t.post, ".crt-stagger .crt-feed .crt-stagger-post .crt-stagger-post-content .crt-stagger-post-body-container .crt-stagger-post-body .crt-stagger-post-text-footer"),
                this.addStyle(t.postBorder, ".crt-stagger .crt-feed .crt-stagger-post .crt-stagger-post-content .crt-stagger-post-body-container"),
                this.addStyle(t.postBorder, ".crt-stagger .crt-feed .crt-stagger-post .crt-stagger-post-content .crt-stagger-post-image-container"),
                this.addStyle(t.postFooter, ".crt-stagger .crt-feed .crt-stagger-post .crt-stagger-post-content .crt-stagger-post-body-container .crt-stagger-post-body:after"),
                this.addStyle(t.postText, ".crt-widget .crt-post-text"),
                this.addStyle(t.postTextLink, ".crt-widget .crt-post-text a"),
                this.addStyle(t.postName, ".crt-widget .crt-post-fullname a"),
                this.addStyle(t.postUsername, ".crt-stagger .crt-feed .crt-stagger-post .crt-stagger-post-content .crt-stagger-post-body-container .crt-stagger-post-body .crt-stagger-post-text-footer .crt-post-username a"),
                this.addStyle(t.postUsername, ".crt-stagger .crt-feed .crt-stagger-post .crt-stagger-post-content .crt-stagger-post-body-container .crt-stagger-post-body .crt-post-fullname a"),
                this.addStyle(t.postIcon, ".crt-stagger .crt-feed .crt-stagger-post .crt-stagger-post-content .crt-stagger-post-body-container .crt-stagger-post-body .crt-stagger-post-text-footer .crt-social-icon svg"),
                this.addStyle(t.postIcon, ".crt-stagger .crt-feed .crt-stagger-post .crt-stagger-post-content .crt-stagger-post-body-container .crt-stagger-post-body .crt-stagger-post-text-footer .crt-post-share .crt-share-button svg"),
                this.addStyle(t.postIconWithBorder, ".crt-widget .crt-post-share .crt-popup-share-icon-container-icons a:not(:hover)"),
                this.addStyle(t.postComments, ".crt-widget .crt-comments-likes"),
                this.addStyle(t.postShareIcons, ".crt-widget .crt-post-footer .crt-post-share a"),
                this.addStyle(t.postDate, ".crt-stagger .crt-feed .crt-stagger-post .crt-stagger-post-content .crt-stagger-post-body-container .crt-stagger-post-body .crt-post-date a"),
                this.addStyle(t.postDate, ".crt-stagger .crt-feed .crt-stagger-post .crt-stagger-post-content .crt-stagger-post-body-container .crt-stagger-post-body .crt-post-date .crt-post-date-link"),
                this.addStyle(t.postMaxHeightReadMore, ".crt-widget .crt-post.crt-post-max-height .crt-post-max-height-read-more"),
                this.addStyle(t.postImages, ".crt-stagger .crt-feed .crt-stagger-post-list .crt-stagger-post-list-item"),
                this.addStyle(t.postImages, ".crt-stagger .crt-feed .crt-stagger-post .crt-stagger-post-content .crt-stagger-post-image-container .crt-stagger-post-image"),
                this.addStyle(t.postImages, ".crt-stagger .crt-feed .crt-stagger-post .crt-stagger-post-content .crt-stagger-post-body-container"),
                this.addStyle(t.postImages, ".crt-stagger .crt-feed .crt-stagger-post .crt-stagger-post-content .crt-stagger-post-image-container .crt-video .crt-video-container"),
                this.addStyle(t.gridPost, ".crt-widget .crt-grid-post"),
                this.addCssRules(t.cssRules)
            }
        }
        class yp extends T {
            constructor(t) {
                super(t)
            }
            postStyles() {
                const t = {}
                  , e = this.context.config.get("widget.verticalSpacing");
                return null != e && (t.marginBottom = e + "px"),
                t
            }
            render() {
                const t = this.props.post;
                if (!t)
                    return null;
                let e = "crt-post crt-stagger-post ";
                this.props.reverse && (e += "crt-stagger-post-reverse");
                const o = Yi(t, e)
                  , r = $i(t);
                return cs(Cd, {
                    post: t,
                    classes: o,
                    sx: this.postStyles(),
                    children: cs("div", {
                        children: cs("div", {
                            className: "crt-stagger-post-content",
                            children: [t.image && cs("div", {
                                className: "crt-stagger-post-image-container",
                                children: [cs("div", {
                                    className: "crt-stagger-post-image",
                                    "aria-label": r,
                                    tabIndex: 0,
                                    role: "img",
                                    style: {
                                        backgroundImage: `url(${t.image})`
                                    }
                                }), t.video && cs(cd, {
                                    post: t,
                                    playable: !0
                                })]
                            }), cs("div", {
                                className: "crt-stagger-post-body-container",
                                children: cs("div", {
                                    className: "crt-stagger-post-body",
                                    children: [cs(fl, {
                                        post: t
                                    }), cs("div", {
                                        className: "crt-stagger-post-center-body",
                                        children: cs("div", {
                                            className: "center-body",
                                            children: [cs(ol, {
                                                post: t
                                            }), cs(ld, {
                                                post: t
                                            }), cs(Yl, {
                                                post: t
                                            })]
                                        })
                                    }), cs(Ed, {
                                        className: "crt-stagger-post-text-footer",
                                        post: t
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
        }
        Object.defineProperty(yp, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Pi
        });
        class Cp extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "config", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "debouncedLoadPost", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: kh()((()=>{
                        this._loadPosts()
                    }
                    ), 500)
                }),
                Object.defineProperty(this, "onLoadMore", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: async()=>{
                        await this.debouncedLoadPost()
                    }
                }),
                this.config = t.config,
                this.setState({
                    posts: []
                })
            }
            async _loadPosts() {
                const t = await Bd(this.context.feed, this.context.message, this.config.get("widget.postsPerPage", 12), {
                    has_media: !0
                });
                await this.setState((e=>({
                    posts: e.posts.concat(t)
                }))),
                this.context.widget.data.previousNOfPosts = this.context.widget.data.nOfPosts,
                this.context.widget.data.nOfPosts = this.state.posts.length
            }
            componentDidMount() {
                this.debouncedLoadPost(),
                this.context.filterService.registerOnFilterChanged(this.onFilterChanged.bind(this)),
                this.context.filterService.triggerCheckDefaultFilter()
            }
            onFilterChanged(t) {
                this.setState({
                    posts: []
                }),
                this.context.feed.reset(),
                this.context.feed.setParams(t),
                this.debouncedLoadPost()
            }
            getPosts() {
                return this.state.posts.map(((t,e)=>cs(yp, {
                    post: t,
                    reverse: e % 2 != 0
                })))
            }
            render() {
                const t = this.state.posts.length ? "feed" : "presentation";
                return cs("div", {
                    className: "crt-feed-window",
                    children: [cs("div", {
                        className: "crt-feed",
                        tabIndex: 0,
                        "aria-label": "There are " + this.state.posts.length + " posts in the feed",
                        role: t,
                        children: this.getPosts()
                    }), cs(sd, {
                        onLoadMore: this.onLoadMore
                    })]
                })
            }
        }
        Object.defineProperty(Cp, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Yu
        });
        class _p extends T {
            constructor(t) {
                super(t)
            }
            render() {
                const t = this.props.post;
                return cs(Cd, {
                    post: t,
                    classes: Yi(t, "crt-post " + ((this.props.index + 1) % 3 == 0 ? "small" : "")),
                    children: [cs("div", {
                        className: "crt-layers-thumbnail crt-layers-rear-image ",
                        style: {
                            backgroundImage: `url(${t.image})`
                        }
                    }), cs("div", {
                        className: "crt-layer-thumbnail-footer",
                        children: [cs(_d, {
                            post: t
                        }), cs(fl, {
                            post: t
                        })]
                    })]
                })
            }
        }
        class xp extends T {
            constructor(t) {
                super(t)
            }
            render() {
                const t = this.props.post;
                return cs(Cd, {
                    post: t,
                    classes: Yi(t, "crt-post " + (this.props.index % 3 == 0 ? "small" : "")),
                    children: [cs("div", {
                        className: "crt-layers-thumbnail crt-layers-front-image",
                        style: {
                            backgroundImage: `url(${t.image})`
                        }
                    }), cs("div", {
                        className: "crt-layer-thumbnail-footer",
                        children: [cs(_d, {
                            post: t
                        }), cs(fl, {
                            post: t
                        })]
                    })]
                })
            }
        }
        class Pp extends T {
            constructor(t) {
                super(t),
                Object.defineProperty(this, "config", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "refFront", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        current: null
                    }
                }),
                Object.defineProperty(this, "debouncedLoadPost", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: kh()((()=>{
                        this._loadPosts()
                    }
                    ), 500)
                }),
                Object.defineProperty(this, "onLoadMore", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: async()=>{
                        await this._loadPosts()
                    }
                }),
                this.config = t.config,
                this.onWheel = this.onWheel.bind(this),
                this.getPosts = this.getPosts.bind(this),
                this.setState({
                    posts: []
                })
            }
            async _loadPosts() {
                const t = await Bd(this.context.feed, this.context.message, this.config.get("widget.postsPerPage", 12), {
                    has_media: !0,
                    image_width: 1080
                });
                t && await this.setState(((e,o)=>({
                    posts: e.posts.concat(...t)
                }))),
                this.context.widget.data.previousNOfPosts = this.context.widget.data.nOfPosts,
                this.context.widget.data.nOfPosts = this.state.posts.length
            }
            componentDidMount() {
                this.debouncedLoadPost(),
                this.context.filterService.registerOnFilterChanged(this.onFilterChanged.bind(this)),
                this.context.filterService.triggerCheckDefaultFilter()
            }
            onFilterChanged(t) {
                this.setState({
                    posts: []
                }),
                this.context.feed.reset(),
                this.context.feed.setParams(t),
                this.debouncedLoadPost()
            }
            onWheel(t) {
                if (!this.refFront.current)
                    return;
                const e = t.deltaY
                  , o = parseFloat(this.refFront.current.style.marginTop || "0") + e / 6;
                o >= 0 && 6 * o * 2 < $n(this.refFront) && (this.refFront.current.style.marginTop = o + "px")
            }
            getPosts() {
                const t = vr(this.state.posts)
                  , e = t.length / 2
                  , o = t.splice(e)
                  , r = t.splice(0, e);
                return cs("div", {
                    className: "crt-layers-posts-container",
                    onWheel: this.onWheel,
                    children: [cs("div", {
                        className: "rear",
                        children: r.map(((t,e)=>cs(_p, {
                            post: t,
                            index: e
                        })))
                    }), cs("div", {
                        className: "front",
                        ref: this.refFront,
                        children: o.map(((t,e)=>cs(xp, {
                            post: t,
                            index: e
                        })))
                    })]
                })
            }
            render() {
                const t = this.getPosts()
                  , e = this.state.posts.length ? "feed" : "presentation";
                return cs("div", {
                    className: "crt-feed-window",
                    children: [cs("div", {
                        className: "crt-feed",
                        tabIndex: 0,
                        "aria-label": "There are " + this.state.posts.length + " posts in the feed",
                        role: e,
                        children: t
                    }), cs(sd, {
                        onLoadMore: this.onLoadMore
                    })]
                })
            }
        }
        Object.defineProperty(Pp, "contextType", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Yu
        });
        const kp = {
            Waterfall: class extends ed {
                constructor(t) {
                    super(t, ln),
                    Object.defineProperty(this, "widget2", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: {
                            current: null
                        }
                    }),
                    oh.log("init"),
                    Yn(this.$container, "crt-widget-waterfall"),
                    this.config.set("type", "Waterfall"),
                    this.render()
                }
                render() {
                    const t = this.createWidgetProps();
                    this.renderInWidgetWrapper(t, cs(eh, {
                        ...t,
                        ref: this.widget2
                    }))
                }
                loadPage(t) {
                    this.widget && this.widget.current && this.widget.current.loadPage(t)
                }
                destroy() {
                    this.log("destroy"),
                    Kn(this.$container, "crt-widget-waterfall"),
                    super.destroy()
                }
            }
            ,
            Grid: class extends rh {
                constructor(t) {
                    super(t, tn),
                    Object.defineProperty(this, "columnCount", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 0
                    }),
                    this.config.get("post.minWidth") < 100 && this.config.set("post.minWidth", 100),
                    this.config.set("feed.postsPerPage", 25),
                    Yn(this.$container, "crt-grid"),
                    Yn(this.$container, "crt-widget-grid"),
                    this.render()
                }
                render() {
                    const t = this.createWidgetProps();
                    this.renderInWidgetWrapper(t, cs(hh, {
                        ...t
                    }))
                }
                log(t) {
                    const e = "Grid[" + this.id + "]";
                    ph.log(e + "->" + t)
                }
                destroy() {
                    this.log("destroy"),
                    Kn(this.$container, "crt-widget-grid"),
                    Kn(this.$container, "crt-grid"),
                    Kn(this.$container, "crt-grid-col" + this.columnCount),
                    zn(this.$container, {
                        height: "",
                        overflow: ""
                    }),
                    super.destroy()
                }
            }
            ,
            Carousel: class extends ed {
                constructor(t) {
                    super(t, Qr),
                    Object.defineProperty(this, "_lazyLoad", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: !1
                    }),
                    Object.defineProperty(this, "_progressiveLoad", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: !1
                    }),
                    Object.defineProperty(this, "vnode", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }),
                    this.config.set("feed.limit", 50),
                    this._lazyLoad = this.config.get("widget.lazyLoad", !1),
                    this._progressiveLoad = this.config.get("widget.progressiveLoad", !1),
                    Yn(this.$container, "crt-widget-carousel"),
                    this.render()
                }
                onCarouselChange(t, e) {
                    Oh.log("onCarouselChange currentPane: " + e),
                    this.config.get("widget.autoLoad")
                }
                render() {
                    const t = this.createWidgetProps();
                    this.renderInWidgetWrapper(t, cs(Ah, {
                        ...t
                    }))
                }
                destroy() {
                    Kn(this.$container, "crt-widget-carousel"),
                    Kn(this.$container, "crt-carousel"),
                    super.destroy()
                }
            }
            ,
            GridCarousel: class extends rh {
                constructor(t) {
                    super(t, Jr),
                    Yn(this.$container, "crt-widget-grid-carousel"),
                    this.render()
                }
                render() {
                    const t = this.createWidgetProps();
                    this.renderInWidgetWrapper(t, cs(Fh, {
                        ...t
                    }))
                }
                destroy() {
                    Kn(this.$container, "crt-widget-grid-carousel"),
                    super.destroy()
                }
            }
            ,
            Panel: class extends ed {
                constructor(t) {
                    super(t, en),
                    Yn(this.$container, "crt-widget-carousel"),
                    Yn(this.$container, "crt-widget-panel"),
                    this.config.get("post.fixedHeight") && Yn(this.$container, "crt-panel-fixed-height"),
                    this.render()
                }
                render() {
                    const t = this.createWidgetProps();
                    this.renderInWidgetWrapper(t, cs(Dh, {
                        ...t
                    }))
                }
                destroy() {
                    Kn(this.$container, "crt-widget-carousel"),
                    Kn(this.$container, "crt-widget-panel"),
                    Kn(this.$container, "crt-panel-fixed-height"),
                    super.destroy()
                }
            }
            ,
            List: class extends ed {
                constructor(t) {
                    super(t, on),
                    this.render()
                }
                render() {
                    const t = this.createWidgetProps();
                    this.renderInWidgetWrapper(t, cs(Nh, {
                        ...t
                    }))
                }
                destroy() {
                    Kn(this.$container, "crt-widget-list"),
                    zn(this.$container, {
                        height: "",
                        overflow: ""
                    }),
                    super.destroy()
                }
                setStyles(t) {
                    this.sheet ? this.clearStyles() : this.sheet = ss.createSheet(),
                    this.setStylesGeneral(t)
                }
            }
            ,
            Mosaic: class extends Lh {
                constructor(t) {
                    super(t, rn),
                    Yn(this.$container, "crt-mosaic"),
                    Yn(this.$container, "crt-widget-mosaic"),
                    this.render()
                }
                render() {
                    const t = this.createWidgetProps();
                    this.renderInWidgetWrapper(t, cs($h, {
                        ...t
                    }))
                }
                destroy() {
                    this.log("destroy"),
                    Kn(this.$container, "crt-widget-mosaic"),
                    Kn(this.$container, "crt-mosaic"),
                    zn(this.$container, {
                        height: "",
                        overflow: ""
                    }),
                    super.destroy()
                }
            }
            ,
            Tetris: class extends Vh {
                constructor(t) {
                    super(t, nn),
                    Yn(this.$container, "crt-tetris"),
                    Yn(this.$container, "crt-widget-tetris"),
                    this.render()
                }
                render() {
                    const t = this.createWidgetProps();
                    this.renderInWidgetWrapper(t, cs(Xh, {
                        ...t
                    }))
                }
                destroy() {
                    this.log("destroy"),
                    Kn(this.$container, "crt-widget-tetris"),
                    Kn(this.$container, "crt-tetris"),
                    zn(this.$container, {
                        height: "",
                        overflow: ""
                    }),
                    super.destroy()
                }
            }
            ,
            Wall: class extends ed {
                constructor(t) {
                    super(t, cn),
                    sp.log("init"),
                    Yn(this.$container, "crt-widget-wall"),
                    this.config.set("type", "Wall"),
                    this.render()
                }
                render() {
                    const t = this.createWidgetProps();
                    this.renderInWidgetWrapper(t, cs(np, {
                        ...t
                    }))
                }
                loadPage(t) {
                    this.widget && this.widget.current && this.widget.current.loadPage(t)
                }
                destroy() {
                    this.log("destroy"),
                    Kn(this.$container, "crt-widget-wall"),
                    super.destroy()
                }
            }
            ,
            Select: class extends ip {
                constructor(t) {
                    super(t, sn),
                    Yn(this.$container, "crt-select"),
                    Yn(this.$container, "crt-widget-select"),
                    this.render()
                }
                render() {
                    const t = this.createWidgetProps();
                    this.renderInWidgetWrapper(t, cs(lp, {
                        ...t
                    }))
                }
                destroy() {
                    this.log("destroy"),
                    Kn(this.$container, "crt-widget-select"),
                    Kn(this.$container, "crt-select"),
                    zn(this.$container, {
                        height: "",
                        overflow: ""
                    }),
                    super.destroy()
                }
            }
            ,
            Stack: class extends up {
                constructor(t) {
                    super(t, an),
                    Yn(this.$container, "crt-stack"),
                    Yn(this.$container, "crt-widget-stack"),
                    this.render()
                }
                render() {
                    const t = this.createWidgetProps();
                    this.renderInWidgetWrapper(t, cs(gp, {
                        ...t
                    }))
                }
                destroy() {
                    this.log("destroy"),
                    Kn(this.$container, "crt-widget-stack"),
                    Kn(this.$container, "crt-stack"),
                    zn(this.$container, {
                        height: "",
                        overflow: ""
                    }),
                    super.destroy()
                }
            }
            ,
            CoverFlow: class extends mp {
                constructor(t) {
                    super(t, un),
                    Yn(this.$container, "crt-cover-flow"),
                    Yn(this.$container, "crt-widget-cover-flow"),
                    this.render()
                }
                render() {
                    const t = this.createWidgetProps();
                    this.renderInWidgetWrapper(t, cs(vp, {
                        ...t
                    }))
                }
                destroy() {
                    this.log("destroy"),
                    Kn(this.$container, "crt-widget-cover-flow"),
                    Kn(this.$container, "crt-cover-flow"),
                    zn(this.$container, {
                        height: "",
                        overflow: ""
                    }),
                    super.destroy()
                }
            }
            ,
            Stagger: class extends wp {
                constructor(t) {
                    super(t, dn),
                    Yn(this.$container, "crt-stagger"),
                    Yn(this.$container, "crt-widget-stagger"),
                    this.render()
                }
                render() {
                    const t = this.createWidgetProps();
                    this.renderInWidgetWrapper(t, cs(Cp, {
                        ...t
                    }))
                }
                destroy() {
                    this.log("destroy"),
                    Kn(this.$container, "crt-widget-stagger"),
                    Kn(this.$container, "crt-stagger"),
                    zn(this.$container, {
                        height: "",
                        overflow: ""
                    }),
                    super.destroy()
                }
            }
            ,
            Layers: class extends ed {
                constructor(t) {
                    super(t, hn),
                    Yn(this.$container, "crt-layers"),
                    Yn(this.$container, "crt-widget-layers"),
                    this.render()
                }
                render() {
                    const t = this.createWidgetProps();
                    this.renderInWidgetWrapper(t, cs(Pp, {
                        ...t
                    }))
                }
                destroy() {
                    this.log("destroy"),
                    Kn(this.$container, "crt-widget-layers"),
                    Kn(this.$container, "crt-layers"),
                    zn(this.$container, {
                        height: "",
                        overflow: ""
                    }),
                    super.destroy()
                }
            }
        }
          , Sp = kp
          , Ap = "log"
          , Op = "debug"
          , jp = "info"
          , Fp = "warn"
          , Ep = "error"
          , Dp = {
            [Ap]: 0,
            [Op]: 1,
            [jp]: 2,
            [Fp]: 3,
            [Ep]: 4
        }
          , Tp = {
            timestamp: "gray",
            default: "gray",
            [Ap]: "inherit",
            [Op]: "#82edc1",
            [jp]: "#73bfde",
            [Fp]: "#F1B109",
            [Ep]: "#F20404"
        };
        function Np(t, e) {
            if (e.length < t)
                throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + e.length + " present")
        }
        function Lp(t) {
            return Lp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Lp(t)
        }
        function Bp(t) {
            return Np(1, arguments),
            t instanceof Date || "object" === Lp(t) && "[object Date]" === Object.prototype.toString.call(t)
        }
        function Ip(t) {
            return Ip = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            Ip(t)
        }
        function Mp(t) {
            Np(1, arguments);
            var e = Object.prototype.toString.call(t);
            return t instanceof Date || "object" === Ip(t) && "[object Date]" === e ? new Date(t.getTime()) : "number" == typeof t || "[object Number]" === e ? new Date(t) : ("string" != typeof t && "[object String]" !== e || "undefined" == typeof console || (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),
            console.warn((new Error).stack)),
            new Date(NaN))
        }
        function qp(t) {
            if (Np(1, arguments),
            !Bp(t) && "number" != typeof t)
                return !1;
            var e = Mp(t);
            return !isNaN(Number(e))
        }
        function Wp(t) {
            if (null === t || !0 === t || !1 === t)
                return NaN;
            var e = Number(t);
            return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e)
        }
        function Hp(t, e) {
            Np(2, arguments);
            var o = Mp(t).getTime()
              , r = Wp(e);
            return new Date(o + r)
        }
        function Rp(t, e) {
            Np(2, arguments);
            var o = Wp(e);
            return Hp(t, -o)
        }
        var zp = 864e5;
        function Up(t) {
            Np(1, arguments);
            var e = 1
              , o = Mp(t)
              , r = o.getUTCDay()
              , n = (r < e ? 7 : 0) + r - e;
            return o.setUTCDate(o.getUTCDate() - n),
            o.setUTCHours(0, 0, 0, 0),
            o
        }
        function $p(t) {
            Np(1, arguments);
            var e = Mp(t)
              , o = e.getUTCFullYear()
              , r = new Date(0);
            r.setUTCFullYear(o + 1, 0, 4),
            r.setUTCHours(0, 0, 0, 0);
            var n = Up(r)
              , s = new Date(0);
            s.setUTCFullYear(o, 0, 4),
            s.setUTCHours(0, 0, 0, 0);
            var i = Up(s);
            return e.getTime() >= n.getTime() ? o + 1 : e.getTime() >= i.getTime() ? o : o - 1
        }
        function Vp(t) {
            Np(1, arguments);
            var e = $p(t)
              , o = new Date(0);
            o.setUTCFullYear(e, 0, 4),
            o.setUTCHours(0, 0, 0, 0);
            var r = Up(o);
            return r
        }
        var Gp = 6048e5;
        var Kp = {};
        function Yp() {
            return Kp
        }
        function Zp(t, e) {
            var o, r, n, s, i, a, c, l;
            Np(1, arguments);
            var u = Yp()
              , d = Wp(null !== (o = null !== (r = null !== (n = null !== (s = null == e ? void 0 : e.weekStartsOn) && void 0 !== s ? s : null == e || null === (i = e.locale) || void 0 === i || null === (a = i.options) || void 0 === a ? void 0 : a.weekStartsOn) && void 0 !== n ? n : u.weekStartsOn) && void 0 !== r ? r : null === (c = u.locale) || void 0 === c || null === (l = c.options) || void 0 === l ? void 0 : l.weekStartsOn) && void 0 !== o ? o : 0);
            if (!(d >= 0 && d <= 6))
                throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
            var h = Mp(t)
              , p = h.getUTCDay()
              , f = (p < d ? 7 : 0) + p - d;
            return h.setUTCDate(h.getUTCDate() - f),
            h.setUTCHours(0, 0, 0, 0),
            h
        }
        function Xp(t, e) {
            var o, r, n, s, i, a, c, l;
            Np(1, arguments);
            var u = Mp(t)
              , d = u.getUTCFullYear()
              , h = Yp()
              , p = Wp(null !== (o = null !== (r = null !== (n = null !== (s = null == e ? void 0 : e.firstWeekContainsDate) && void 0 !== s ? s : null == e || null === (i = e.locale) || void 0 === i || null === (a = i.options) || void 0 === a ? void 0 : a.firstWeekContainsDate) && void 0 !== n ? n : h.firstWeekContainsDate) && void 0 !== r ? r : null === (c = h.locale) || void 0 === c || null === (l = c.options) || void 0 === l ? void 0 : l.firstWeekContainsDate) && void 0 !== o ? o : 1);
            if (!(p >= 1 && p <= 7))
                throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
            var f = new Date(0);
            f.setUTCFullYear(d + 1, 0, p),
            f.setUTCHours(0, 0, 0, 0);
            var g = Zp(f, e)
              , m = new Date(0);
            m.setUTCFullYear(d, 0, p),
            m.setUTCHours(0, 0, 0, 0);
            var b = Zp(m, e);
            return u.getTime() >= g.getTime() ? d + 1 : u.getTime() >= b.getTime() ? d : d - 1
        }
        function Qp(t, e) {
            var o, r, n, s, i, a, c, l;
            Np(1, arguments);
            var u = Yp()
              , d = Wp(null !== (o = null !== (r = null !== (n = null !== (s = null == e ? void 0 : e.firstWeekContainsDate) && void 0 !== s ? s : null == e || null === (i = e.locale) || void 0 === i || null === (a = i.options) || void 0 === a ? void 0 : a.firstWeekContainsDate) && void 0 !== n ? n : u.firstWeekContainsDate) && void 0 !== r ? r : null === (c = u.locale) || void 0 === c || null === (l = c.options) || void 0 === l ? void 0 : l.firstWeekContainsDate) && void 0 !== o ? o : 1)
              , h = Xp(t, e)
              , p = new Date(0);
            p.setUTCFullYear(h, 0, d),
            p.setUTCHours(0, 0, 0, 0);
            var f = Zp(p, e);
            return f
        }
        var Jp = 6048e5;
        function tf(t, e) {
            for (var o = t < 0 ? "-" : "", r = Math.abs(t).toString(); r.length < e; )
                r = "0" + r;
            return o + r
        }
        var ef = {
            y: function(t, e) {
                var o = t.getUTCFullYear()
                  , r = o > 0 ? o : 1 - o;
                return tf("yy" === e ? r % 100 : r, e.length)
            },
            M: function(t, e) {
                var o = t.getUTCMonth();
                return "M" === e ? String(o + 1) : tf(o + 1, 2)
            },
            d: function(t, e) {
                return tf(t.getUTCDate(), e.length)
            },
            a: function(t, e) {
                var o = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
                switch (e) {
                case "a":
                case "aa":
                    return o.toUpperCase();
                case "aaa":
                    return o;
                case "aaaaa":
                    return o[0];
                default:
                    return "am" === o ? "a.m." : "p.m."
                }
            },
            h: function(t, e) {
                return tf(t.getUTCHours() % 12 || 12, e.length)
            },
            H: function(t, e) {
                return tf(t.getUTCHours(), e.length)
            },
            m: function(t, e) {
                return tf(t.getUTCMinutes(), e.length)
            },
            s: function(t, e) {
                return tf(t.getUTCSeconds(), e.length)
            },
            S: function(t, e) {
                var o = e.length
                  , r = t.getUTCMilliseconds();
                return tf(Math.floor(r * Math.pow(10, o - 3)), e.length)
            }
        };
        const of = ef;
        var rf = "midnight"
          , nf = "noon"
          , sf = "morning"
          , af = "afternoon"
          , cf = "evening"
          , lf = "night"
          , uf = {
            G: function(t, e, o) {
                var r = t.getUTCFullYear() > 0 ? 1 : 0;
                switch (e) {
                case "G":
                case "GG":
                case "GGG":
                    return o.era(r, {
                        width: "abbreviated"
                    });
                case "GGGGG":
                    return o.era(r, {
                        width: "narrow"
                    });
                default:
                    return o.era(r, {
                        width: "wide"
                    })
                }
            },
            y: function(t, e, o) {
                if ("yo" === e) {
                    var r = t.getUTCFullYear()
                      , n = r > 0 ? r : 1 - r;
                    return o.ordinalNumber(n, {
                        unit: "year"
                    })
                }
                return of.y(t, e)
            },
            Y: function(t, e, o, r) {
                var n = Xp(t, r)
                  , s = n > 0 ? n : 1 - n;
                return "YY" === e ? tf(s % 100, 2) : "Yo" === e ? o.ordinalNumber(s, {
                    unit: "year"
                }) : tf(s, e.length)
            },
            R: function(t, e) {
                return tf($p(t), e.length)
            },
            u: function(t, e) {
                return tf(t.getUTCFullYear(), e.length)
            },
            Q: function(t, e, o) {
                var r = Math.ceil((t.getUTCMonth() + 1) / 3);
                switch (e) {
                case "Q":
                    return String(r);
                case "QQ":
                    return tf(r, 2);
                case "Qo":
                    return o.ordinalNumber(r, {
                        unit: "quarter"
                    });
                case "QQQ":
                    return o.quarter(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "QQQQQ":
                    return o.quarter(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return o.quarter(r, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            q: function(t, e, o) {
                var r = Math.ceil((t.getUTCMonth() + 1) / 3);
                switch (e) {
                case "q":
                    return String(r);
                case "qq":
                    return tf(r, 2);
                case "qo":
                    return o.ordinalNumber(r, {
                        unit: "quarter"
                    });
                case "qqq":
                    return o.quarter(r, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "qqqqq":
                    return o.quarter(r, {
                        width: "narrow",
                        context: "standalone"
                    });
                default:
                    return o.quarter(r, {
                        width: "wide",
                        context: "standalone"
                    })
                }
            },
            M: function(t, e, o) {
                var r = t.getUTCMonth();
                switch (e) {
                case "M":
                case "MM":
                    return of.M(t, e);
                case "Mo":
                    return o.ordinalNumber(r + 1, {
                        unit: "month"
                    });
                case "MMM":
                    return o.month(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "MMMMM":
                    return o.month(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return o.month(r, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            L: function(t, e, o) {
                var r = t.getUTCMonth();
                switch (e) {
                case "L":
                    return String(r + 1);
                case "LL":
                    return tf(r + 1, 2);
                case "Lo":
                    return o.ordinalNumber(r + 1, {
                        unit: "month"
                    });
                case "LLL":
                    return o.month(r, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "LLLLL":
                    return o.month(r, {
                        width: "narrow",
                        context: "standalone"
                    });
                default:
                    return o.month(r, {
                        width: "wide",
                        context: "standalone"
                    })
                }
            },
            w: function(t, e, o, r) {
                var n = function(t, e) {
                    Np(1, arguments);
                    var o = Mp(t)
                      , r = Zp(o, e).getTime() - Qp(o, e).getTime();
                    return Math.round(r / Jp) + 1
                }(t, r);
                return "wo" === e ? o.ordinalNumber(n, {
                    unit: "week"
                }) : tf(n, e.length)
            },
            I: function(t, e, o) {
                var r = function(t) {
                    Np(1, arguments);
                    var e = Mp(t)
                      , o = Up(e).getTime() - Vp(e).getTime();
                    return Math.round(o / Gp) + 1
                }(t);
                return "Io" === e ? o.ordinalNumber(r, {
                    unit: "week"
                }) : tf(r, e.length)
            },
            d: function(t, e, o) {
                return "do" === e ? o.ordinalNumber(t.getUTCDate(), {
                    unit: "date"
                }) : of.d(t, e)
            },
            D: function(t, e, o) {
                var r = function(t) {
                    Np(1, arguments);
                    var e = Mp(t)
                      , o = e.getTime();
                    e.setUTCMonth(0, 1),
                    e.setUTCHours(0, 0, 0, 0);
                    var r = e.getTime()
                      , n = o - r;
                    return Math.floor(n / zp) + 1
                }(t);
                return "Do" === e ? o.ordinalNumber(r, {
                    unit: "dayOfYear"
                }) : tf(r, e.length)
            },
            E: function(t, e, o) {
                var r = t.getUTCDay();
                switch (e) {
                case "E":
                case "EE":
                case "EEE":
                    return o.day(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "EEEEE":
                    return o.day(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEEE":
                    return o.day(r, {
                        width: "short",
                        context: "formatting"
                    });
                default:
                    return o.day(r, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            e: function(t, e, o, r) {
                var n = t.getUTCDay()
                  , s = (n - r.weekStartsOn + 8) % 7 || 7;
                switch (e) {
                case "e":
                    return String(s);
                case "ee":
                    return tf(s, 2);
                case "eo":
                    return o.ordinalNumber(s, {
                        unit: "day"
                    });
                case "eee":
                    return o.day(n, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "eeeee":
                    return o.day(n, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeeee":
                    return o.day(n, {
                        width: "short",
                        context: "formatting"
                    });
                default:
                    return o.day(n, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            c: function(t, e, o, r) {
                var n = t.getUTCDay()
                  , s = (n - r.weekStartsOn + 8) % 7 || 7;
                switch (e) {
                case "c":
                    return String(s);
                case "cc":
                    return tf(s, e.length);
                case "co":
                    return o.ordinalNumber(s, {
                        unit: "day"
                    });
                case "ccc":
                    return o.day(n, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "ccccc":
                    return o.day(n, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccccc":
                    return o.day(n, {
                        width: "short",
                        context: "standalone"
                    });
                default:
                    return o.day(n, {
                        width: "wide",
                        context: "standalone"
                    })
                }
            },
            i: function(t, e, o) {
                var r = t.getUTCDay()
                  , n = 0 === r ? 7 : r;
                switch (e) {
                case "i":
                    return String(n);
                case "ii":
                    return tf(n, e.length);
                case "io":
                    return o.ordinalNumber(n, {
                        unit: "day"
                    });
                case "iii":
                    return o.day(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "iiiii":
                    return o.day(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "iiiiii":
                    return o.day(r, {
                        width: "short",
                        context: "formatting"
                    });
                default:
                    return o.day(r, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            a: function(t, e, o) {
                var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
                switch (e) {
                case "a":
                case "aa":
                    return o.dayPeriod(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "aaa":
                    return o.dayPeriod(r, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "aaaaa":
                    return o.dayPeriod(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return o.dayPeriod(r, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            b: function(t, e, o) {
                var r, n = t.getUTCHours();
                switch (r = 12 === n ? nf : 0 === n ? rf : n / 12 >= 1 ? "pm" : "am",
                e) {
                case "b":
                case "bb":
                    return o.dayPeriod(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "bbb":
                    return o.dayPeriod(r, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "bbbbb":
                    return o.dayPeriod(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return o.dayPeriod(r, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            B: function(t, e, o) {
                var r, n = t.getUTCHours();
                switch (r = n >= 17 ? cf : n >= 12 ? af : n >= 4 ? sf : lf,
                e) {
                case "B":
                case "BB":
                case "BBB":
                    return o.dayPeriod(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "BBBBB":
                    return o.dayPeriod(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                default:
                    return o.dayPeriod(r, {
                        width: "wide",
                        context: "formatting"
                    })
                }
            },
            h: function(t, e, o) {
                if ("ho" === e) {
                    var r = t.getUTCHours() % 12;
                    return 0 === r && (r = 12),
                    o.ordinalNumber(r, {
                        unit: "hour"
                    })
                }
                return of.h(t, e)
            },
            H: function(t, e, o) {
                return "Ho" === e ? o.ordinalNumber(t.getUTCHours(), {
                    unit: "hour"
                }) : of.H(t, e)
            },
            K: function(t, e, o) {
                var r = t.getUTCHours() % 12;
                return "Ko" === e ? o.ordinalNumber(r, {
                    unit: "hour"
                }) : tf(r, e.length)
            },
            k: function(t, e, o) {
                var r = t.getUTCHours();
                return 0 === r && (r = 24),
                "ko" === e ? o.ordinalNumber(r, {
                    unit: "hour"
                }) : tf(r, e.length)
            },
            m: function(t, e, o) {
                return "mo" === e ? o.ordinalNumber(t.getUTCMinutes(), {
                    unit: "minute"
                }) : of.m(t, e)
            },
            s: function(t, e, o) {
                return "so" === e ? o.ordinalNumber(t.getUTCSeconds(), {
                    unit: "second"
                }) : of.s(t, e)
            },
            S: function(t, e) {
                return of.S(t, e)
            },
            X: function(t, e, o, r) {
                var n = (r._originalDate || t).getTimezoneOffset();
                if (0 === n)
                    return "Z";
                switch (e) {
                case "X":
                    return hf(n);
                case "XXXX":
                case "XX":
                    return pf(n);
                default:
                    return pf(n, ":")
                }
            },
            x: function(t, e, o, r) {
                var n = (r._originalDate || t).getTimezoneOffset();
                switch (e) {
                case "x":
                    return hf(n);
                case "xxxx":
                case "xx":
                    return pf(n);
                default:
                    return pf(n, ":")
                }
            },
            O: function(t, e, o, r) {
                var n = (r._originalDate || t).getTimezoneOffset();
                switch (e) {
                case "O":
                case "OO":
                case "OOO":
                    return "GMT" + df(n, ":");
                default:
                    return "GMT" + pf(n, ":")
                }
            },
            z: function(t, e, o, r) {
                var n = (r._originalDate || t).getTimezoneOffset();
                switch (e) {
                case "z":
                case "zz":
                case "zzz":
                    return "GMT" + df(n, ":");
                default:
                    return "GMT" + pf(n, ":")
                }
            },
            t: function(t, e, o, r) {
                var n = r._originalDate || t;
                return tf(Math.floor(n.getTime() / 1e3), e.length)
            },
            T: function(t, e, o, r) {
                return tf((r._originalDate || t).getTime(), e.length)
            }
        };
        function df(t, e) {
            var o = t > 0 ? "-" : "+"
              , r = Math.abs(t)
              , n = Math.floor(r / 60)
              , s = r % 60;
            if (0 === s)
                return o + String(n);
            var i = e || "";
            return o + String(n) + i + tf(s, 2)
        }
        function hf(t, e) {
            return t % 60 == 0 ? (t > 0 ? "-" : "+") + tf(Math.abs(t) / 60, 2) : pf(t, e)
        }
        function pf(t, e) {
            var o = e || ""
              , r = t > 0 ? "-" : "+"
              , n = Math.abs(t);
            return r + tf(Math.floor(n / 60), 2) + o + tf(n % 60, 2)
        }
        const ff = uf;
        var gf = function(t, e) {
            switch (t) {
            case "P":
                return e.date({
                    width: "short"
                });
            case "PP":
                return e.date({
                    width: "medium"
                });
            case "PPP":
                return e.date({
                    width: "long"
                });
            default:
                return e.date({
                    width: "full"
                })
            }
        }
          , mf = function(t, e) {
            switch (t) {
            case "p":
                return e.time({
                    width: "short"
                });
            case "pp":
                return e.time({
                    width: "medium"
                });
            case "ppp":
                return e.time({
                    width: "long"
                });
            default:
                return e.time({
                    width: "full"
                })
            }
        }
          , bf = {
            p: mf,
            P: function(t, e) {
                var o, r = t.match(/(P+)(p+)?/) || [], n = r[1], s = r[2];
                if (!s)
                    return gf(t, e);
                switch (n) {
                case "P":
                    o = e.dateTime({
                        width: "short"
                    });
                    break;
                case "PP":
                    o = e.dateTime({
                        width: "medium"
                    });
                    break;
                case "PPP":
                    o = e.dateTime({
                        width: "long"
                    });
                    break;
                default:
                    o = e.dateTime({
                        width: "full"
                    })
                }
                return o.replace("{{date}}", gf(n, e)).replace("{{time}}", mf(s, e))
            }
        };
        const vf = bf;
        function wf(t) {
            var e = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
            return e.setUTCFullYear(t.getFullYear()),
            t.getTime() - e.getTime()
        }
        var yf = ["D", "DD"]
          , Cf = ["YY", "YYYY"];
        function _f(t) {
            return -1 !== yf.indexOf(t)
        }
        function xf(t) {
            return -1 !== Cf.indexOf(t)
        }
        function Pf(t, e, o) {
            if ("YYYY" === t)
                throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e, "`) for formatting years to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
            if ("YY" === t)
                throw new RangeError("Use `yy` instead of `YY` (in `".concat(e, "`) for formatting years to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
            if ("D" === t)
                throw new RangeError("Use `d` instead of `D` (in `".concat(e, "`) for formatting days of the month to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
            if ("DD" === t)
                throw new RangeError("Use `dd` instead of `DD` (in `".concat(e, "`) for formatting days of the month to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))
        }
        var kf = {
            lessThanXSeconds: {
                one: "less than a second",
                other: "less than {{count}} seconds"
            },
            xSeconds: {
                one: "1 second",
                other: "{{count}} seconds"
            },
            halfAMinute: "half a minute",
            lessThanXMinutes: {
                one: "less than a minute",
                other: "less than {{count}} minutes"
            },
            xMinutes: {
                one: "1 minute",
                other: "{{count}} minutes"
            },
            aboutXHours: {
                one: "about 1 hour",
                other: "about {{count}} hours"
            },
            xHours: {
                one: "1 hour",
                other: "{{count}} hours"
            },
            xDays: {
                one: "1 day",
                other: "{{count}} days"
            },
            aboutXWeeks: {
                one: "about 1 week",
                other: "about {{count}} weeks"
            },
            xWeeks: {
                one: "1 week",
                other: "{{count}} weeks"
            },
            aboutXMonths: {
                one: "about 1 month",
                other: "about {{count}} months"
            },
            xMonths: {
                one: "1 month",
                other: "{{count}} months"
            },
            aboutXYears: {
                one: "about 1 year",
                other: "about {{count}} years"
            },
            xYears: {
                one: "1 year",
                other: "{{count}} years"
            },
            overXYears: {
                one: "over 1 year",
                other: "over {{count}} years"
            },
            almostXYears: {
                one: "almost 1 year",
                other: "almost {{count}} years"
            }
        };
        const Sf = function(t, e, o) {
            var r, n = kf[t];
            return r = "string" == typeof n ? n : 1 === e ? n.one : n.other.replace("{{count}}", e.toString()),
            null != o && o.addSuffix ? o.comparison && o.comparison > 0 ? "in " + r : r + " ago" : r
        };
        function Af(t) {
            return function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , o = e.width ? String(e.width) : t.defaultWidth
                  , r = t.formats[o] || t.formats[t.defaultWidth];
                return r
            }
        }
        const Of = {
            date: Af({
                formats: {
                    full: "EEEE, MMMM do, y",
                    long: "MMMM do, y",
                    medium: "MMM d, y",
                    short: "MM/dd/yyyy"
                },
                defaultWidth: "full"
            }),
            time: Af({
                formats: {
                    full: "h:mm:ss a zzzz",
                    long: "h:mm:ss a z",
                    medium: "h:mm:ss a",
                    short: "h:mm a"
                },
                defaultWidth: "full"
            }),
            dateTime: Af({
                formats: {
                    full: "{{date}} 'at' {{time}}",
                    long: "{{date}} 'at' {{time}}",
                    medium: "{{date}}, {{time}}",
                    short: "{{date}}, {{time}}"
                },
                defaultWidth: "full"
            })
        };
        var jf = {
            lastWeek: "'last' eeee 'at' p",
            yesterday: "'yesterday at' p",
            today: "'today at' p",
            tomorrow: "'tomorrow at' p",
            nextWeek: "eeee 'at' p",
            other: "P"
        };
        const Ff = function(t, e, o, r) {
            return jf[t]
        };
        function Ef(t) {
            return function(e, o) {
                var r;
                if ("formatting" === (null != o && o.context ? String(o.context) : "standalone") && t.formattingValues) {
                    var n = t.defaultFormattingWidth || t.defaultWidth
                      , s = null != o && o.width ? String(o.width) : n;
                    r = t.formattingValues[s] || t.formattingValues[n]
                } else {
                    var i = t.defaultWidth
                      , a = null != o && o.width ? String(o.width) : t.defaultWidth;
                    r = t.values[a] || t.values[i]
                }
                return r[t.argumentCallback ? t.argumentCallback(e) : e]
            }
        }
        const Df = {
            ordinalNumber: function(t, e) {
                var o = Number(t)
                  , r = o % 100;
                if (r > 20 || r < 10)
                    switch (r % 10) {
                    case 1:
                        return o + "st";
                    case 2:
                        return o + "nd";
                    case 3:
                        return o + "rd"
                    }
                return o + "th"
            },
            era: Ef({
                values: {
                    narrow: ["B", "A"],
                    abbreviated: ["BC", "AD"],
                    wide: ["Before Christ", "Anno Domini"]
                },
                defaultWidth: "wide"
            }),
            quarter: Ef({
                values: {
                    narrow: ["1", "2", "3", "4"],
                    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
                    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
                },
                defaultWidth: "wide",
                argumentCallback: function(t) {
                    return t - 1
                }
            }),
            month: Ef({
                values: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                },
                defaultWidth: "wide"
            }),
            day: Ef({
                values: {
                    narrow: ["S", "M", "T", "W", "T", "F", "S"],
                    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                defaultWidth: "wide"
            }),
            dayPeriod: Ef({
                values: {
                    narrow: {
                        am: "a",
                        pm: "p",
                        midnight: "mi",
                        noon: "n",
                        morning: "morning",
                        afternoon: "afternoon",
                        evening: "evening",
                        night: "night"
                    },
                    abbreviated: {
                        am: "AM",
                        pm: "PM",
                        midnight: "midnight",
                        noon: "noon",
                        morning: "morning",
                        afternoon: "afternoon",
                        evening: "evening",
                        night: "night"
                    },
                    wide: {
                        am: "a.m.",
                        pm: "p.m.",
                        midnight: "midnight",
                        noon: "noon",
                        morning: "morning",
                        afternoon: "afternoon",
                        evening: "evening",
                        night: "night"
                    }
                },
                defaultWidth: "wide",
                formattingValues: {
                    narrow: {
                        am: "a",
                        pm: "p",
                        midnight: "mi",
                        noon: "n",
                        morning: "in the morning",
                        afternoon: "in the afternoon",
                        evening: "in the evening",
                        night: "at night"
                    },
                    abbreviated: {
                        am: "AM",
                        pm: "PM",
                        midnight: "midnight",
                        noon: "noon",
                        morning: "in the morning",
                        afternoon: "in the afternoon",
                        evening: "in the evening",
                        night: "at night"
                    },
                    wide: {
                        am: "a.m.",
                        pm: "p.m.",
                        midnight: "midnight",
                        noon: "noon",
                        morning: "in the morning",
                        afternoon: "in the afternoon",
                        evening: "in the evening",
                        night: "at night"
                    }
                },
                defaultFormattingWidth: "wide"
            })
        };
        function Tf(t) {
            return function(e) {
                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = o.width
                  , n = r && t.matchPatterns[r] || t.matchPatterns[t.defaultMatchWidth]
                  , s = e.match(n);
                if (!s)
                    return null;
                var i, a = s[0], c = r && t.parsePatterns[r] || t.parsePatterns[t.defaultParseWidth], l = Array.isArray(c) ? Lf(c, (function(t) {
                    return t.test(a)
                }
                )) : Nf(c, (function(t) {
                    return t.test(a)
                }
                ));
                i = t.valueCallback ? t.valueCallback(l) : l,
                i = o.valueCallback ? o.valueCallback(i) : i;
                var u = e.slice(a.length);
                return {
                    value: i,
                    rest: u
                }
            }
        }
        function Nf(t, e) {
            for (var o in t)
                if (t.hasOwnProperty(o) && e(t[o]))
                    return o
        }
        function Lf(t, e) {
            for (var o = 0; o < t.length; o++)
                if (e(t[o]))
                    return o
        }
        var Bf, If = {
            ordinalNumber: (Bf = {
                matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                parsePattern: /\d+/i,
                valueCallback: function(t) {
                    return parseInt(t, 10)
                }
            },
            function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , o = t.match(Bf.matchPattern);
                if (!o)
                    return null;
                var r = o[0]
                  , n = t.match(Bf.parsePattern);
                if (!n)
                    return null;
                var s = Bf.valueCallback ? Bf.valueCallback(n[0]) : n[0];
                s = e.valueCallback ? e.valueCallback(s) : s;
                var i = t.slice(r.length);
                return {
                    value: s,
                    rest: i
                }
            }
            ),
            era: Tf({
                matchPatterns: {
                    narrow: /^(b|a)/i,
                    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                    wide: /^(before christ|before common era|anno domini|common era)/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    any: [/^b/i, /^(a|c)/i]
                },
                defaultParseWidth: "any"
            }),
            quarter: Tf({
                matchPatterns: {
                    narrow: /^[1234]/i,
                    abbreviated: /^q[1234]/i,
                    wide: /^[1234](th|st|nd|rd)? quarter/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    any: [/1/i, /2/i, /3/i, /4/i]
                },
                defaultParseWidth: "any",
                valueCallback: function(t) {
                    return t + 1
                }
            }),
            month: Tf({
                matchPatterns: {
                    narrow: /^[jfmasond]/i,
                    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
                },
                defaultParseWidth: "any"
            }),
            day: Tf({
                matchPatterns: {
                    narrow: /^[smtwf]/i,
                    short: /^(su|mo|tu|we|th|fr|sa)/i,
                    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
                },
                defaultMatchWidth: "wide",
                parsePatterns: {
                    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
                },
                defaultParseWidth: "any"
            }),
            dayPeriod: Tf({
                matchPatterns: {
                    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
                },
                defaultMatchWidth: "any",
                parsePatterns: {
                    any: {
                        am: /^a/i,
                        pm: /^p/i,
                        midnight: /^mi/i,
                        noon: /^no/i,
                        morning: /morning/i,
                        afternoon: /afternoon/i,
                        evening: /evening/i,
                        night: /night/i
                    }
                },
                defaultParseWidth: "any"
            })
        };
        const Mf = {
            code: "en-US",
            formatDistance: Sf,
            formatLong: Of,
            formatRelative: Ff,
            localize: Df,
            match: If,
            options: {
                weekStartsOn: 0,
                firstWeekContainsDate: 1
            }
        };
        var qf = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
          , Wf = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
          , Hf = /^'([^]*?)'?$/
          , Rf = /''/g
          , zf = /[a-zA-Z]/;
        function Uf(t) {
            var e = t.match(Hf);
            return e ? e[1].replace(Rf, "'") : t
        }
        const $f = console;
        function Vf(t) {
            return [`color: ${Tp.default}; font-weight: lighter;`, `color: ${Tp[t]}; font-weight: bold;`, `color: ${Tp.timestamp}; font-weight: lighter;`]
        }
        function Gf(t, e) {
            const o = function(t, e, o) {
                var r, n, s, i, a, c, l, u, d, h, p, f, g, m, b, v, w, y;
                Np(2, arguments);
                var C = String(e)
                  , _ = Yp()
                  , x = null !== (r = null !== (n = null == o ? void 0 : o.locale) && void 0 !== n ? n : _.locale) && void 0 !== r ? r : Mf
                  , P = Wp(null !== (s = null !== (i = null !== (a = null !== (c = null == o ? void 0 : o.firstWeekContainsDate) && void 0 !== c ? c : null == o || null === (l = o.locale) || void 0 === l || null === (u = l.options) || void 0 === u ? void 0 : u.firstWeekContainsDate) && void 0 !== a ? a : _.firstWeekContainsDate) && void 0 !== i ? i : null === (d = _.locale) || void 0 === d || null === (h = d.options) || void 0 === h ? void 0 : h.firstWeekContainsDate) && void 0 !== s ? s : 1);
                if (!(P >= 1 && P <= 7))
                    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
                var k = Wp(null !== (p = null !== (f = null !== (g = null !== (m = null == o ? void 0 : o.weekStartsOn) && void 0 !== m ? m : null == o || null === (b = o.locale) || void 0 === b || null === (v = b.options) || void 0 === v ? void 0 : v.weekStartsOn) && void 0 !== g ? g : _.weekStartsOn) && void 0 !== f ? f : null === (w = _.locale) || void 0 === w || null === (y = w.options) || void 0 === y ? void 0 : y.weekStartsOn) && void 0 !== p ? p : 0);
                if (!(k >= 0 && k <= 6))
                    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
                if (!x.localize)
                    throw new RangeError("locale must contain localize property");
                if (!x.formatLong)
                    throw new RangeError("locale must contain formatLong property");
                var S = Mp(t);
                if (!qp(S))
                    throw new RangeError("Invalid time value");
                var A = wf(S)
                  , O = Rp(S, A)
                  , j = {
                    firstWeekContainsDate: P,
                    weekStartsOn: k,
                    locale: x,
                    _originalDate: S
                };
                return C.match(Wf).map((function(t) {
                    var e = t[0];
                    return "p" === e || "P" === e ? (0,
                    vf[e])(t, x.formatLong) : t
                }
                )).join("").match(qf).map((function(r) {
                    if ("''" === r)
                        return "'";
                    var n = r[0];
                    if ("'" === n)
                        return Uf(r);
                    var s = ff[n];
                    if (s)
                        return null != o && o.useAdditionalWeekYearTokens || !xf(r) || Pf(r, e, String(t)),
                        null != o && o.useAdditionalDayOfYearTokens || !_f(r) || Pf(r, e, String(t)),
                        s(O, r, x.localize, j);
                    if (n.match(zf))
                        throw new RangeError("Format string contains an unescaped latin alphabet character `" + n + "`");
                    return r
                }
                )).join("")
            }(new Date, "h:mm:ss.SS");
            return `%c ${t} %c ${e} %c@ ${o}`
        }
        class Kf {
            constructor(t) {
                Object.defineProperty(this, "level", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "levelNumber", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                this.level = t,
                this.levelNumber = Dp[t] ?? 0,
                console.log("Creating ConsoleChannel", this.level, this.levelNumber)
            }
            debug(t, ...e) {
                this.sendToConsole("debug", t, ...e)
            }
            log(t, ...e) {
                this.sendToConsole("log", t, ...e)
            }
            info(t, ...e) {
                this.sendToConsole("info", t, ...e)
            }
            warn(t, ...e) {
                this.sendToConsole("warn", t, ...e)
            }
            error(t, ...e) {
                this.sendToConsole("error", t, ...e)
            }
            sendToConsole(t, e, ...o) {
                if (this.levelNumber > Dp[t])
                    return;
                const [r,...n] = o
                  , s = "log" === t || "info" === t;
                if (s && (!n || 0 === n.length) && "string" == typeof r)
                    return void $f[t](Gf(e, r), ...Vf(t));
                const i = s && "string" == typeof r
                  , a = Gf(e, i ? r : t);
                $f.groupCollapsed(a, ...Vf(t)),
                i || $f[t](r),
                void 0 !== n && n.length > 0 && $f[t](...n),
                $f.groupEnd()
            }
        }
        const Yf = ["Stack", "Stagger", "Layers", "CoverFlow", "Select"];
        function Zf(t, e, o) {
            const r = function(t) {
                let e = "";
                const o = t.container;
                t.feed && t.feed.id ? e = t.feed.id : t.feedId && (e = t.feedId);
                let r = Qn('[data-crt-feed-id="' + e + '"]');
                return r || (r = Qn(".crt-feed-" + e),
                r || (r = Qn("#curator-" + e),
                r || (r = Qn(o),
                r || void 0)))
            }(t);
            if (r) {
                if (t.container = r,
                t.embedSource = r.getAttribute("data-crt-source") || "",
                t.debug && ts(new Kf("debug")),
                window.localStorage && window.localStorage.getItem("crt-logger")) {
                    const t = window.localStorage.getItem("crt-logger");
                    ts(new Kf(t ?? "debug"))
                }
                const n = function(t) {
                    let e = null;
                    const o = (window.innerWidth > 0 ? window.innerWidth : screen.width) < 480 && Yf.includes(t.type) && t.widget && t.widget.gridMobile;
                    Object.prototype.hasOwnProperty.call(Sp, t.type) ? (e = Sp[t.type],
                    o && (e = Sp.Grid)) : e = Sp.Waterfall;
                    const r = t;
                    if (o) {
                        const t = kn.themeConfig("Grid", "sydney");
                        t.widget.showLoadMore = !0,
                        r.widget = t.widget,
                        r.post = t.post
                    }
                    return new e(r)
                }(t);
                return e && (o = kn.themeStyles(t.type, t.theme, e)),
                o && n.setStyles(o),
                n
            }
            window.console && window.console.error("Curator - could not find container")
        }
        const Xf = {
            Html: ss,
            String: Ln
        };
        void 0 !== window.VERSION && console.log("Curator.Embed loaded: " + window.VERSION)
    }
    )(),
    window.Curator = r
}
)();
