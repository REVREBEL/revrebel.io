/**
https://scripts.feedspring.co/instagram-attrs.js
*/

!(function() {
  "use strict";
  function t(t, e, n, r) {
    return new (n || (n = Promise))(function(i, o) {
      function a(t) {
        try {
          s(r.next(t));
        } catch (t) {
          o(t);
        }
      }
      function u(t) {
        try {
          s(r.throw(t));
        } catch (t) {
          o(t);
        }
      }
      function s(t) {
        var e;
        t.done
          ? i(t.value)
          : (
              (e = t.value),
              e instanceof n
                ? e
                : new n(function(t) {
                    t(e);
                  })
            ).then(a, u);
      }
      s((r = r.apply(t, e || [])).next());
    });
  }
  function e(t, e) {
    var n,
      r,
      i,
      o,
      a = {
        label: 0,
        sent: function() {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      };
    return (o = { next: u(0), throw: u(1), return: u(2) }), "function" ==
      typeof Symbol &&
      (o[Symbol.iterator] = function() {
        return this;
      }), o;
    function u(u) {
      return function(s) {
        return (function(u) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; o && ((o = 0), u[0] && (a = 0)), a; )
            try {
              if (
                (
                  (n = 1),
                  r &&
                    (i =
                      2 & u[0]
                        ? r.return
                        : u[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                    !(i = i.call(r, u[1])).done
                )
              )
                return i;
              switch (((r = 0), i && (u = [2 & u[0], i.value]), u[0])) {
                case 0:
                case 1:
                  i = u;
                  break;
                case 4:
                  return a.label++, { value: u[1], done: !1 };
                case 5:
                  a.label++, (r = u[1]), (u = [0]);
                  continue;
                case 7:
                  (u = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (
                    !(
                      (i = a.trys),
                      (i = i.length > 0 && i[i.length - 1]) ||
                        (6 !== u[0] && 2 !== u[0])
                    )
                  ) {
                    a = 0;
                    continue;
                  }
                  if (3 === u[0] && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                    a.label = u[1];
                    break;
                  }
                  if (6 === u[0] && a.label < i[1]) {
                    (a.label = i[1]), (i = u);
                    break;
                  }
                  if (i && a.label < i[2]) {
                    (a.label = i[2]), a.ops.push(u);
                    break;
                  }
                  i[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              u = e.call(t, a);
            } catch (t) {
              (u = [6, t]), (r = 0);
            } finally {
              n = i = 0;
            }
          if (5 & u[0]) throw u[1];
          return { value: u[0] ? u[1] : void 0, done: !0 };
        })([u, s]);
      };
    }
  }
  var n = function(n) {
      return t(void 0, void 0, void 0, function() {
        var t, r;
        return e(this, function(e) {
          switch (e.label) {
            case 0:
              return [4, fetch("https://api.feedspring.co/".concat(n))];
            case 1:
              return [4, (t = e.sent()).json()];
            case 2:
              return (r = e.sent()), t.ok, [2, r];
          }
        });
      });
    },
    r = (
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof self && self,
      { exports: {} }
    );
  r.exports = (function() {
    var t = 1e3,
      e = 6e4,
      n = 36e5,
      r = "millisecond",
      i = "second",
      o = "minute",
      a = "hour",
      u = "day",
      s = "week",
      c = "month",
      f = "quarter",
      l = "year",
      d = "date",
      h = "Invalid Date",
      p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      y = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
          "_"
        ),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
          "_"
        ),
        ordinal: function(t) {
          var e = ["th", "st", "nd", "rd"],
            n = t % 100;
          return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
        }
      },
      v = function(t, e, n) {
        var r = String(t);
        return !r || r.length >= e
          ? t
          : "" + Array(e + 1 - r.length).join(n) + t;
      },
      g = {
        s: v,
        z: function(t) {
          var e = -t.utcOffset(),
            n = Math.abs(e),
            r = Math.floor(n / 60),
            i = n % 60;
          return (e <= 0 ? "+" : "-") + v(r, 2, "0") + ":" + v(i, 2, "0");
        },
        m: function t(e, n) {
          if (e.date() < n.date()) return -t(n, e);
          var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
            i = e.clone().add(r, c),
            o = n - i < 0,
            a = e.clone().add(r + (o ? -1 : 1), c);
          return +(-(r + (n - i) / (o ? i - a : a - i)) || 0);
        },
        a: function(t) {
          return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function(t) {
          return (
            { M: c, y: l, w: s, d: u, D: d, h: a, m: o, s: i, ms: r, Q: f }[
              t
            ] || String(t || "").toLowerCase().replace(/s$/, "")
          );
        },
        u: function(t) {
          return void 0 === t;
        }
      },
      $ = "en",
      b = {};
    b[$] = y;
    var w = function(t) {
        return t instanceof x;
      },
      M = function t(e, n, r) {
        var i;
        if (!e) return $;
        if ("string" == typeof e) {
          var o = e.toLowerCase();
          b[o] && (i = o), n && ((b[o] = n), (i = o));
          var a = e.split("-");
          if (!i && a.length > 1) return t(a[0]);
        } else {
          var u = e.name;
          (b[u] = e), (i = u);
        }
        return !r && i && ($ = i), i || (!r && $);
      },
      S = function(t, e) {
        if (w(t)) return t.clone();
        var n = "object" == typeof e ? e : {};
        return (n.date = t), (n.args = arguments), new x(n);
      },
      D = g;
    (D.l = M), (D.i = w), (D.w = function(t, e) {
      return S(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset });
    });
    var x = (function() {
        function y(t) {
          (this.$L = M(t.locale, null, !0)), this.parse(t);
        }
        var v = y.prototype;
        return (v.parse = function(t) {
          (this.$d = (function(t) {
            var e = t.date,
              n = t.utc;
            if (null === e) return new Date(NaN);
            if (D.u(e)) return new Date();
            if (e instanceof Date) return new Date(e);
            if ("string" == typeof e && !/Z$/i.test(e)) {
              var r = e.match(p);
              if (r) {
                var i = r[2] - 1 || 0,
                  o = (r[7] || "0").substring(0, 3);
                return n
                  ? new Date(
                      Date.UTC(
                        r[1],
                        i,
                        r[3] || 1,
                        r[4] || 0,
                        r[5] || 0,
                        r[6] || 0,
                        o
                      )
                    )
                  : new Date(
                      r[1],
                      i,
                      r[3] || 1,
                      r[4] || 0,
                      r[5] || 0,
                      r[6] || 0,
                      o
                    );
              }
            }
            return new Date(e);
          })(t)), (this.$x = t.x || {}), this.init();
        }), (v.init = function() {
          var t = this.$d;
          (this.$y = t.getFullYear()), (this.$M = t.getMonth()), (this.$D = t.getDate()), (this.$W = t.getDay()), (this.$H = t.getHours()), (this.$m = t.getMinutes()), (this.$s = t.getSeconds()), (this.$ms = t.getMilliseconds());
        }), (v.$utils = function() {
          return D;
        }), (v.isValid = function() {
          return !(this.$d.toString() === h);
        }), (v.isSame = function(t, e) {
          var n = S(t);
          return this.startOf(e) <= n && n <= this.endOf(e);
        }), (v.isAfter = function(t, e) {
          return S(t) < this.startOf(e);
        }), (v.isBefore = function(t, e) {
          return this.endOf(e) < S(t);
        }), (v.$g = function(t, e, n) {
          return D.u(t) ? this[e] : this.set(n, t);
        }), (v.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }), (v.valueOf = function() {
          return this.$d.getTime();
        }), (v.startOf = function(t, e) {
          var n = this,
            r = !!D.u(e) || e,
            f = D.p(t),
            h = function(t, e) {
              var i = D.w(
                n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t),
                n
              );
              return r ? i : i.endOf(u);
            },
            p = function(t, e) {
              return D.w(
                n
                  .toDate()
                  [t].apply(
                    n.toDate("s"),
                    (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)
                  ),
                n
              );
            },
            m = this.$W,
            y = this.$M,
            v = this.$D,
            g = "set" + (this.$u ? "UTC" : "");
          switch (f) {
            case l:
              return r ? h(1, 0) : h(31, 11);
            case c:
              return r ? h(1, y) : h(0, y + 1);
            case s:
              var $ = this.$locale().weekStart || 0,
                b = (m < $ ? m + 7 : m) - $;
              return h(r ? v - b : v + (6 - b), y);
            case u:
            case d:
              return p(g + "Hours", 0);
            case a:
              return p(g + "Minutes", 1);
            case o:
              return p(g + "Seconds", 2);
            case i:
              return p(g + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }), (v.endOf = function(t) {
          return this.startOf(t, !1);
        }), (v.$set = function(t, e) {
          var n,
            s = D.p(t),
            f = "set" + (this.$u ? "UTC" : ""),
            h = (
              (n = {}),
              (n[u] = f + "Date"),
              (n[d] = f + "Date"),
              (n[c] = f + "Month"),
              (n[l] = f + "FullYear"),
              (n[a] = f + "Hours"),
              (n[o] = f + "Minutes"),
              (n[i] = f + "Seconds"),
              (n[r] = f + "Milliseconds"),
              n
            )[s],
            p = s === u ? this.$D + (e - this.$W) : e;
          if (s === c || s === l) {
            var m = this.clone().set(d, 1);
            m.$d[h](p), m.init(), (this.$d = m.set(
              d,
              Math.min(this.$D, m.daysInMonth())
            ).$d);
          } else h && this.$d[h](p);
          return this.init(), this;
        }), (v.set = function(t, e) {
          return this.clone().$set(t, e);
        }), (v.get = function(t) {
          return this[D.p(t)]();
        }), (v.add = function(r, f) {
          var d,
            h = this;
          r = Number(r);
          var p = D.p(f),
            m = function(t) {
              var e = S(h);
              return D.w(e.date(e.date() + Math.round(t * r)), h);
            };
          if (p === c) return this.set(c, this.$M + r);
          if (p === l) return this.set(l, this.$y + r);
          if (p === u) return m(1);
          if (p === s) return m(7);
          var y = ((d = {}), (d[o] = e), (d[a] = n), (d[i] = t), d)[p] || 1,
            v = this.$d.getTime() + r * y;
          return D.w(v, this);
        }), (v.subtract = function(t, e) {
          return this.add(-1 * t, e);
        }), (v.format = function(t) {
          var e = this,
            n = this.$locale();
          if (!this.isValid()) return n.invalidDate || h;
          var r = t || "YYYY-MM-DDTHH:mm:ssZ",
            i = D.z(this),
            o = this.$H,
            a = this.$m,
            u = this.$M,
            s = n.weekdays,
            c = n.months,
            f = function(t, n, i, o) {
              return (t && (t[n] || t(e, r))) || i[n].slice(0, o);
            },
            l = function(t) {
              return D.s(o % 12 || 12, t, "0");
            },
            d =
              n.meridiem ||
              function(t, e, n) {
                var r = t < 12 ? "AM" : "PM";
                return n ? r.toLowerCase() : r;
              },
            p = {
              YY: String(this.$y).slice(-2),
              YYYY: this.$y,
              M: u + 1,
              MM: D.s(u + 1, 2, "0"),
              MMM: f(n.monthsShort, u, c, 3),
              MMMM: f(c, u),
              D: this.$D,
              DD: D.s(this.$D, 2, "0"),
              d: String(this.$W),
              dd: f(n.weekdaysMin, this.$W, s, 2),
              ddd: f(n.weekdaysShort, this.$W, s, 3),
              dddd: s[this.$W],
              H: String(o),
              HH: D.s(o, 2, "0"),
              h: l(1),
              hh: l(2),
              a: d(o, a, !0),
              A: d(o, a, !1),
              m: String(a),
              mm: D.s(a, 2, "0"),
              s: String(this.$s),
              ss: D.s(this.$s, 2, "0"),
              SSS: D.s(this.$ms, 3, "0"),
              Z: i
            };
          return r.replace(m, function(t, e) {
            return e || p[t] || i.replace(":", "");
          });
        }), (v.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }), (v.diff = function(r, d, h) {
          var p,
            m = D.p(d),
            y = S(r),
            v = (y.utcOffset() - this.utcOffset()) * e,
            g = this - y,
            $ = D.m(this, y);
          return ($ =
            (
              (p = {}),
              (p[l] = $ / 12),
              (p[c] = $),
              (p[f] = $ / 3),
              (p[s] = (g - v) / 6048e5),
              (p[u] = (g - v) / 864e5),
              (p[a] = g / n),
              (p[o] = g / e),
              (p[i] = g / t),
              p
            )[m] || g), h ? $ : D.a($);
        }), (v.daysInMonth = function() {
          return this.endOf(c).$D;
        }), (v.$locale = function() {
          return b[this.$L];
        }), (v.locale = function(t, e) {
          if (!t) return this.$L;
          var n = this.clone(),
            r = M(t, e, !0);
          return r && (n.$L = r), n;
        }), (v.clone = function() {
          return D.w(this.$d, this);
        }), (v.toDate = function() {
          return new Date(this.valueOf());
        }), (v.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }), (v.toISOString = function() {
          return this.$d.toISOString();
        }), (v.toString = function() {
          return this.$d.toUTCString();
        }), y;
      })(),
      A = x.prototype;
    return (S.prototype = A), [
      ["$ms", r],
      ["$s", i],
      ["$m", o],
      ["$H", a],
      ["$W", u],
      ["$M", c],
      ["$y", l],
      ["$D", d]
    ].forEach(function(t) {
      A[t[1]] = function(e) {
        return this.$g(e, t[0], t[1]);
      };
    }), (S.extend = function(t, e) {
      return t.$i || (t(e, x, S), (t.$i = !0)), S;
    }), (S.locale = M), (S.isDayjs = w), (S.unix = function(t) {
      return S(1e3 * t);
    }), (S.en = b[$]), (S.Ls = b), (S.p = {}), S;
  })();
  var i = r.exports,
    o = { exports: {} };
  !(function(t, e) {
    t.exports = function(t, e, n) {
      t = t || {};
      var r = e.prototype,
        i = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        };
      function o(t, e, n, i) {
        return r.fromToBase(t, e, n, i);
      }
      (n.en.relativeTime = i), (r.fromToBase = function(e, r, o, a, u) {
        for (
          var s,
            c,
            f,
            l = o.$locale().relativeTime || i,
            d = t.thresholds || [
              { l: "s", r: 44, d: "second" },
              { l: "m", r: 89 },
              { l: "mm", r: 44, d: "minute" },
              { l: "h", r: 89 },
              { l: "hh", r: 21, d: "hour" },
              { l: "d", r: 35 },
              { l: "dd", r: 25, d: "day" },
              { l: "M", r: 45 },
              { l: "MM", r: 10, d: "month" },
              { l: "y", r: 17 },
              { l: "yy", d: "year" }
            ],
            h = d.length,
            p = 0;
          p < h;
          p += 1
        ) {
          var m = d[p];
          m.d && (s = a ? n(e).diff(o, m.d, !0) : o.diff(e, m.d, !0));
          var y = (t.rounding || Math.round)(Math.abs(s));
          if (((f = s > 0), y <= m.r || !m.r)) {
            y <= 1 && p > 0 && (m = d[p - 1]);
            var v = l[m.l];
            u && (y = u("" + y)), (c =
              "string" == typeof v ? v.replace("%d", y) : v(y, r, m.l, f));
            break;
          }
        }
        if (r) return c;
        var g = f ? l.future : l.past;
        return "function" == typeof g ? g(c) : g.replace("%s", c);
      }), (r.to = function(t, e) {
        return o(t, e, this, !0);
      }), (r.from = function(t, e) {
        return o(t, e, this);
      });
      var a = function(t) {
        return t.$u ? n.utc() : n();
      };
      (r.toNow = function(t) {
        return this.to(a(this), t);
      }), (r.fromNow = function(t) {
        return this.from(a(this), t);
      });
    };
  })(o);
  var a = o.exports;
  i.extend(a);
  var u,
    s = {
      Widget: (function() {
        function r(t) {
          this.config = t;
        }
        return (r.prototype.initialize = function() {
          return t(this, void 0, void 0, function() {
            var t,
              n,
              r = this;
            return e(this, function(e) {
              switch (e.label) {
                case 0:
                  this.dispatchEvent("init", {
                    name: this.config.name
                  }), (t = {}), document.querySelectorAll("[".concat(this.config.containerAttribute, '*="').concat(this.config.keyPrefix, '_"]')).forEach(function(e) {
                    var n = e.getAttribute(r.config.containerAttribute);
                    n && (n in t ? t[n].push(e) : (t[n] = [e]));
                  }), (e.label = 1);
                case 1:
                  if ((e.trys.push([1, 3, , 4]), !Object.keys(t).length))
                    throw new Error("No feed containers found");
                  return [
                    4,
                    Promise.all(
                      Object.entries(t).map(function(t) {
                        var e = t[0],
                          n = t[1];
                        return r.loadFeed(e, n);
                      })
                    )
                  ];
                case 2:
                  return e.sent(), this.dispatchEvent("init-complete", { name: this.config.name }), [3, 4];
                case 3:
                  return "string" == typeof (n = e.sent()) &&
                    this.log(n), [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }), (r.prototype.log = function(t) {
          console.log(
            "%c[feedspring.co] ".concat(t),
            ";background: #145ff5; color: #fff; padding: 2px; border-radius: 3px;"
          );
        }), (r.prototype.loadFeed = function(r, i) {
          return t(this, void 0, void 0, function() {
            var t,
              o = this;
            return e(this, function(e) {
              switch (e.label) {
                case 0:
                  return [4, n(r)];
                case 1:
                  if ("error" in (t = e.sent()))
                    throw new Error(
                      "".concat(t.error.message, " (").concat(t.error.code, ")")
                    );
                  return this.dispatchEvent("load-complete", {
                    data: t.data
                  }), i.forEach(function(e) {
                    return o.renderFeed(t.data, e);
                  }), this.dispatchEvent("render-complete", {
                    data: t.data
                  }), [2];
              }
            });
          });
        }), (r.prototype.dispatchEvent = function(t, e) {
          var n = new CustomEvent("feedspring:".concat(t), { detail: e });
          document.dispatchEvent(n);
        }), (r.prototype.renderFeed = function(n, r) {
          return t(this, void 0, void 0, function() {
            var t,
              i,
              o,
              a,
              u,
              s,
              c = this;
            return e(this, function(e) {
              if (
                (
                  (t = r.getAttribute("feed-type")),
                  (i = Array.from(
                    r.querySelectorAll(
                      '[feedspring="post"], [feed-field="item"]'
                    )
                  )),
                  "dynamic" == t &&
                    1 === i.length &&
                    (o = i.at(0)) &&
                    (a = o.parentElement)
                )
              )
                for (u = 0; u < n.media.length - 1; u++)
                  (s = o.cloneNode(!0)), i.push(s), a.appendChild(s);
              return i.forEach(function(t, e) {
                var r = n.media[e];
                r &&
                  c.config.fields.forEach(function(e) {
                    t
                      .querySelectorAll('[feed-field="'.concat(e.name, '"]'))
                      .forEach(function(t) {
                        c.parseElementOptions(
                          t.getAttribute("feed-options")
                        ).length;
                        try {
                          e.apply(t, r);
                        } catch (t) {
                          c.log(t);
                        }
                      });
                  });
              }), n.extra &&
                this.config.extraFields.forEach(function(t) {
                  r
                    .querySelectorAll('[feed-field="'.concat(t.name, '"]'))
                    .forEach(function(e) {
                      t.apply(e, n.extra);
                    });
                }), [2];
            });
          });
        }), (r.prototype.parseElementOptions = function(t) {
          if (!t) return [];
          var e = [];
          return t.split(",").forEach(function(t) {
            if (t.includes(":")) {
              var n = t.split(":"),
                r = n[0],
                i = n[1];
              e.push({ key: r, value: i });
            } else e.push({ key: t });
          }), e;
        }), r;
      })(),
      fields: {
        timestamp: function(t, e) {
          return {
            name: t,
            apply: function(t, n) {
              var r = "function" == typeof e ? e(n) : null == n ? void 0 : n[e];
              if (r) {
                var o = t.getAttribute("feed-timestamp") || "MMMM D, YYYY",
                  a = i(r);
                if ("from-now" === o) r = a.fromNow();
                else r = a.format(o);
                t.innerText = r;
              }
            }
          };
        },
        numberAbbr: function(t, e) {
          return {
            name: t,
            apply: function(t, n) {
              var r = "function" == typeof e ? e(n) : null == n ? void 0 : n[e];
              r &&
                (t.innerText = (function(t) {
                  var e = Math.sign(t) >= 0;
                  t = Math.abs(t);
                  var n = (Math.log10(t) / 3) | 0;
                  if (0 == n) return (e ? "" : "-") + t.toString();
                  var r = ["", "k", "M", "G", "T", "P", "E"][n];
                  if (!r) throw new RangeError();
                  return (
                    (e ? "" : "-") + (t / Math.pow(10, 3 * n)).toFixed(0) + r
                  );
                })(r));
            }
          };
        }
      }
    },
    c = new s.Widget({
      containerAttribute: "feedspring",
      keyPrefix: "inst",
      name: "instagram",
      extraFields: [
        {
          name: "avatar",
          apply: function(t, e) {
            if ("IMG" !== t.nodeName)
              throw 'Field "avatar-url" support only <img/> HTML tag';
            e.avatar && t.setAttribute("src", e.avatar);
          }
        },
        {
          name: "name",
          apply: function(t, e) {
            e.fullName && (t.innerText = e.fullName);
          }
        },
        {
          name: "username",
          apply: function(t, e) {
            e.username && (t.innerText = e.username);
          }
        },
        {
          name: "bio",
          apply: function(t, e) {
            e.bio && (t.innerText = e.bio);
          }
        },
        s.fields.numberAbbr("following-count", "followingCount"),
        s.fields.numberAbbr("follower-count", "followersCount")
      ],
      fields: [
        {
          name: "bg",
          apply: function(t, e) {
            (null == e ? void 0 : e.mediaUrl) &&
              (t.style.backgroundImage = "url(".concat(e.mediaUrl, ")"));
          }
        },
        {
          name: "img",
          apply: function(t, e) {
            (null == e ? void 0 : e.mediaUrl) &&
              (
                t.setAttribute("src", e.mediaUrl),
                t.hasAttribute("srcset") && t.removeAttribute("srcset")
              );
          }
        },
        {
          name: "link",
          apply: function(t, e) {
            (null == e ? void 0 : e.permalink) &&
              t.setAttribute("href", e.permalink);
          }
        },
        {
          name: "caption",
          apply: function(t, e) {
            (null == e ? void 0 : e.caption) && (t.innerHTML = e.caption);
          }
        },
        {
          name: "avatar",
          apply: function(t, e) {
            if ("IMG" !== t.nodeName)
              throw 'Field "avatar-url" support only <img/> HTML tag';
            e.avatar && t.setAttribute("src", e.avatar);
          }
        },
        {
          name: "name",
          apply: function(t, e) {
            e.fullName && (t.innerText = e.fullName);
          }
        },
        {
          name: "username",
          apply: function(t, e) {
            e.username && (t.innerText = e.username);
          }
        },
        s.fields.numberAbbr("like-count", "likeCount"),
        s.fields.numberAbbr("comment-count", "commentCount"),
        s.fields.timestamp("timestamp", "timestamp")
      ]
    });
  (u = function() {
    c.initialize();
  }), "complete" == document.readyState
    ? u()
    : window.addEventListener("load", u);
})();
