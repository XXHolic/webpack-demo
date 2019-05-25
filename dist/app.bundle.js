!(function(e) {
  var t = window.webpackHotUpdate;
  window.webpackHotUpdate = function(e, n) {
    !(function(e, t) {
      if (!j[e] || !g[e]) return;
      for (var n in ((g[e] = !1), t))
        Object.prototype.hasOwnProperty.call(t, n) && (v[n] = t[n]);
      0 == --m && 0 === b && E();
    })(e, n),
      t && t(e, n);
  };
  var n,
    r = !0,
    o = "4fd4a6e707ffe8cc2f6c",
    i = 1e4,
    s = {},
    c = [],
    a = [];
  function d(e) {
    var t = U[e];
    if (!t) return S;
    var r = function(r) {
        return (
          t.hot.active
            ? (U[r]
                ? -1 === U[r].parents.indexOf(e) && U[r].parents.push(e)
                : ((c = [e]), (n = r)),
              -1 === t.children.indexOf(r) && t.children.push(r))
            : (console.warn(
                "[HMR] unexpected require(" + r + ") from disposed module " + e
              ),
              (c = [])),
          S(r)
        );
      },
      o = function(e) {
        return {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return S[e];
          },
          set: function(t) {
            S[e] = t;
          }
        };
      };
    for (var i in S)
      Object.prototype.hasOwnProperty.call(S, i) &&
        "e" !== i &&
        "t" !== i &&
        Object.defineProperty(r, i, o(i));
    return (
      (r.e = function(e) {
        return (
          "ready" === f && p("prepare"),
          b++,
          S.e(e).then(t, function(e) {
            throw (t(), e);
          })
        );
        function t() {
          b--, "prepare" === f && (w[e] || x(e), 0 === b && 0 === m && E());
        }
      }),
      (r.t = function(e, t) {
        return 1 & t && (e = r(e)), S.t(e, -2 & t);
      }),
      r
    );
  }
  function l(e) {
    var t = {
      _acceptedDependencies: {},
      _declinedDependencies: {},
      _selfAccepted: !1,
      _selfDeclined: !1,
      _disposeHandlers: [],
      _main: n !== e,
      active: !0,
      accept: function(e, n) {
        if (void 0 === e) t._selfAccepted = !0;
        else if ("function" == typeof e) t._selfAccepted = e;
        else if ("object" == typeof e)
          for (var r = 0; r < e.length; r++)
            t._acceptedDependencies[e[r]] = n || function() {};
        else t._acceptedDependencies[e] = n || function() {};
      },
      decline: function(e) {
        if (void 0 === e) t._selfDeclined = !0;
        else if ("object" == typeof e)
          for (var n = 0; n < e.length; n++) t._declinedDependencies[e[n]] = !0;
        else t._declinedDependencies[e] = !0;
      },
      dispose: function(e) {
        t._disposeHandlers.push(e);
      },
      addDisposeHandler: function(e) {
        t._disposeHandlers.push(e);
      },
      removeDisposeHandler: function(e) {
        var n = t._disposeHandlers.indexOf(e);
        n >= 0 && t._disposeHandlers.splice(n, 1);
      },
      check: _,
      apply: D,
      status: function(e) {
        if (!e) return f;
        u.push(e);
      },
      addStatusHandler: function(e) {
        u.push(e);
      },
      removeStatusHandler: function(e) {
        var t = u.indexOf(e);
        t >= 0 && u.splice(t, 1);
      },
      data: s[e]
    };
    return (n = void 0), t;
  }
  var u = [],
    f = "idle";
  function p(e) {
    f = e;
    for (var t = 0; t < u.length; t++) u[t].call(null, e);
  }
  var h,
    v,
    y,
    m = 0,
    b = 0,
    w = {},
    g = {},
    j = {};
  function O(e) {
    return +e + "" === e ? +e : e;
  }
  function _(e) {
    if ("idle" !== f) throw new Error("check() is only allowed in idle status");
    return (
      (r = e),
      p("check"),
      ((t = i),
      (t = t || 1e4),
      new Promise(function(e, n) {
        if ("undefined" == typeof XMLHttpRequest)
          return n(new Error("No browser support"));
        try {
          var r = new XMLHttpRequest(),
            i = S.p + "" + o + ".hot-update.json";
          r.open("GET", i, !0), (r.timeout = t), r.send(null);
        } catch (e) {
          return n(e);
        }
        r.onreadystatechange = function() {
          if (4 === r.readyState)
            if (0 === r.status)
              n(new Error("Manifest request to " + i + " timed out."));
            else if (404 === r.status) e();
            else if (200 !== r.status && 304 !== r.status)
              n(new Error("Manifest request to " + i + " failed."));
            else {
              try {
                var t = JSON.parse(r.responseText);
              } catch (e) {
                return void n(e);
              }
              e(t);
            }
        };
      })).then(function(e) {
        if (!e) return p("idle"), null;
        (g = {}), (w = {}), (j = e.c), (y = e.h), p("prepare");
        var t = new Promise(function(e, t) {
          h = { resolve: e, reject: t };
        });
        v = {};
        return x(0), "prepare" === f && 0 === b && 0 === m && E(), t;
      })
    );
    var t;
  }
  function x(e) {
    j[e]
      ? ((g[e] = !0),
        m++,
        (function(e) {
          var t = document.createElement("script");
          (t.charset = "utf-8"),
            (t.src = S.p + "" + e + "." + o + ".hot-update.js"),
            document.head.appendChild(t);
        })(e))
      : (w[e] = !0);
  }
  function E() {
    p("ready");
    var e = h;
    if (((h = null), e))
      if (r)
        Promise.resolve()
          .then(function() {
            return D(r);
          })
          .then(
            function(t) {
              e.resolve(t);
            },
            function(t) {
              e.reject(t);
            }
          );
      else {
        var t = [];
        for (var n in v)
          Object.prototype.hasOwnProperty.call(v, n) && t.push(O(n));
        e.resolve(t);
      }
  }
  function D(t) {
    if ("ready" !== f)
      throw new Error("apply() is only allowed in ready status");
    var n, r, i, a, d;
    function l(e) {
      for (
        var t = [e],
          n = {},
          r = t.slice().map(function(e) {
            return { chain: [e], id: e };
          });
        r.length > 0;

      ) {
        var o = r.pop(),
          i = o.id,
          s = o.chain;
        if ((a = U[i]) && !a.hot._selfAccepted) {
          if (a.hot._selfDeclined)
            return { type: "self-declined", chain: s, moduleId: i };
          if (a.hot._main) return { type: "unaccepted", chain: s, moduleId: i };
          for (var c = 0; c < a.parents.length; c++) {
            var d = a.parents[c],
              l = U[d];
            if (l) {
              if (l.hot._declinedDependencies[i])
                return {
                  type: "declined",
                  chain: s.concat([d]),
                  moduleId: i,
                  parentId: d
                };
              -1 === t.indexOf(d) &&
                (l.hot._acceptedDependencies[i]
                  ? (n[d] || (n[d] = []), u(n[d], [i]))
                  : (delete n[d],
                    t.push(d),
                    r.push({ chain: s.concat([d]), id: d })));
            }
          }
        }
      }
      return {
        type: "accepted",
        moduleId: e,
        outdatedModules: t,
        outdatedDependencies: n
      };
    }
    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        -1 === e.indexOf(r) && e.push(r);
      }
    }
    t = t || {};
    var h = {},
      m = [],
      b = {},
      w = function() {
        console.warn(
          "[HMR] unexpected require(" + _.moduleId + ") to disposed module"
        );
      };
    for (var g in v)
      if (Object.prototype.hasOwnProperty.call(v, g)) {
        var _;
        d = O(g);
        var x = !1,
          E = !1,
          D = !1,
          A = "";
        switch (
          ((_ = v[g] ? l(d) : { type: "disposed", moduleId: g }).chain &&
            (A = "\nUpdate propagation: " + _.chain.join(" -> ")),
          _.type)
        ) {
          case "self-declined":
            t.onDeclined && t.onDeclined(_),
              t.ignoreDeclined ||
                (x = new Error(
                  "Aborted because of self decline: " + _.moduleId + A
                ));
            break;
          case "declined":
            t.onDeclined && t.onDeclined(_),
              t.ignoreDeclined ||
                (x = new Error(
                  "Aborted because of declined dependency: " +
                    _.moduleId +
                    " in " +
                    _.parentId +
                    A
                ));
            break;
          case "unaccepted":
            t.onUnaccepted && t.onUnaccepted(_),
              t.ignoreUnaccepted ||
                (x = new Error(
                  "Aborted because " + d + " is not accepted" + A
                ));
            break;
          case "accepted":
            t.onAccepted && t.onAccepted(_), (E = !0);
            break;
          case "disposed":
            t.onDisposed && t.onDisposed(_), (D = !0);
            break;
          default:
            throw new Error("Unexception type " + _.type);
        }
        if (x) return p("abort"), Promise.reject(x);
        if (E)
          for (d in ((b[d] = v[d]),
          u(m, _.outdatedModules),
          _.outdatedDependencies))
            Object.prototype.hasOwnProperty.call(_.outdatedDependencies, d) &&
              (h[d] || (h[d] = []), u(h[d], _.outdatedDependencies[d]));
        D && (u(m, [_.moduleId]), (b[d] = w));
      }
    var I,
      H = [];
    for (r = 0; r < m.length; r++)
      (d = m[r]),
        U[d] &&
          U[d].hot._selfAccepted &&
          H.push({ module: d, errorHandler: U[d].hot._selfAccepted });
    p("dispose"),
      Object.keys(j).forEach(function(e) {
        !1 === j[e] &&
          (function(e) {
            delete installedChunks[e];
          })(e);
      });
    for (var M, R, k = m.slice(); k.length > 0; )
      if (((d = k.pop()), (a = U[d]))) {
        var L = {},
          P = a.hot._disposeHandlers;
        for (i = 0; i < P.length; i++) (n = P[i])(L);
        for (
          s[d] = L, a.hot.active = !1, delete U[d], delete h[d], i = 0;
          i < a.children.length;
          i++
        ) {
          var C = U[a.children[i]];
          C && ((I = C.parents.indexOf(d)) >= 0 && C.parents.splice(I, 1));
        }
      }
    for (d in h)
      if (Object.prototype.hasOwnProperty.call(h, d) && (a = U[d]))
        for (R = h[d], i = 0; i < R.length; i++)
          (M = R[i]),
            (I = a.children.indexOf(M)) >= 0 && a.children.splice(I, 1);
    for (d in (p("apply"), (o = y), b))
      Object.prototype.hasOwnProperty.call(b, d) && (e[d] = b[d]);
    var T = null;
    for (d in h)
      if (Object.prototype.hasOwnProperty.call(h, d) && (a = U[d])) {
        R = h[d];
        var q = [];
        for (r = 0; r < R.length; r++)
          if (((M = R[r]), (n = a.hot._acceptedDependencies[M]))) {
            if (-1 !== q.indexOf(n)) continue;
            q.push(n);
          }
        for (r = 0; r < q.length; r++) {
          n = q[r];
          try {
            n(R);
          } catch (e) {
            t.onErrored &&
              t.onErrored({
                type: "accept-errored",
                moduleId: d,
                dependencyId: R[r],
                error: e
              }),
              t.ignoreErrored || T || (T = e);
          }
        }
      }
    for (r = 0; r < H.length; r++) {
      var N = H[r];
      (d = N.module), (c = [d]);
      try {
        S(d);
      } catch (e) {
        if ("function" == typeof N.errorHandler)
          try {
            N.errorHandler(e);
          } catch (n) {
            t.onErrored &&
              t.onErrored({
                type: "self-accept-error-handler-errored",
                moduleId: d,
                error: n,
                originalError: e
              }),
              t.ignoreErrored || T || (T = n),
              T || (T = e);
          }
        else
          t.onErrored &&
            t.onErrored({ type: "self-accept-errored", moduleId: d, error: e }),
            t.ignoreErrored || T || (T = e);
      }
    }
    return T
      ? (p("fail"), Promise.reject(T))
      : (p("idle"),
        new Promise(function(e) {
          e(m);
        }));
  }
  var U = {};
  function S(t) {
    if (U[t]) return U[t].exports;
    var n = (U[t] = {
      i: t,
      l: !1,
      exports: {},
      hot: l(t),
      parents: ((a = c), (c = []), a),
      children: []
    });
    return e[t].call(n.exports, n, n.exports, d(t)), (n.l = !0), n.exports;
  }
  (S.m = e),
    (S.c = U),
    (S.d = function(e, t, n) {
      S.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (S.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (S.t = function(e, t) {
      if ((1 & t && (e = S(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (S.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          S.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (S.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return S.d(t, "a", t), t;
    }),
    (S.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (S.p = "/"),
    (S.h = function() {
      return o;
    }),
    d("./src/index.js")((S.s = "./src/index.js"));
})({
  "./node_modules/css-loader/dist/cjs.js!./src/style.css": function(e, t, n) {
    (e.exports = n("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([
      e.i,
      "body {\n  background: #fff;\n}",
      ""
    ]);
  },
  "./node_modules/css-loader/dist/runtime/api.js": function(e, t, n) {
    "use strict";
    e.exports = function(e) {
      var t = [];
      return (
        (t.toString = function() {
          return this.map(function(t) {
            var n = (function(e, t) {
              var n = e[1] || "",
                r = e[3];
              if (!r) return n;
              if (t && "function" == typeof btoa) {
                var o = ((s = r),
                  "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                    btoa(unescape(encodeURIComponent(JSON.stringify(s)))) +
                    " */"),
                  i = r.sources.map(function(e) {
                    return "/*# sourceURL=" + r.sourceRoot + e + " */";
                  });
                return [n]
                  .concat(i)
                  .concat([o])
                  .join("\n");
              }
              var s;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
          }).join("");
        }),
        (t.i = function(e, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var r = {}, o = 0; o < this.length; o++) {
            var i = this[o][0];
            null != i && (r[i] = !0);
          }
          for (o = 0; o < e.length; o++) {
            var s = e[o];
            (null != s[0] && r[s[0]]) ||
              (n && !s[2]
                ? (s[2] = n)
                : n && (s[2] = "(" + s[2] + ") and (" + n + ")"),
              t.push(s));
          }
        }),
        t
      );
    };
  },
  "./node_modules/style-loader/lib/addStyles.js": function(e, t, n) {
    var r,
      o,
      i = {},
      s = ((r = function() {
        return window && document && document.all && !window.atob;
      }),
      function() {
        return void 0 === o && (o = r.apply(this, arguments)), o;
      }),
      c = (function(e) {
        var t = {};
        return function(e, n) {
          if ("function" == typeof e) return e();
          if (void 0 === t[e]) {
            var r = function(e, t) {
              return t ? t.querySelector(e) : document.querySelector(e);
            }.call(this, e, n);
            if (
              window.HTMLIFrameElement &&
              r instanceof window.HTMLIFrameElement
            )
              try {
                r = r.contentDocument.head;
              } catch (e) {
                r = null;
              }
            t[e] = r;
          }
          return t[e];
        };
      })(),
      a = null,
      d = 0,
      l = [],
      u = n("./node_modules/style-loader/lib/urls.js");
    function f(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          o = i[r.id];
        if (o) {
          o.refs++;
          for (var s = 0; s < o.parts.length; s++) o.parts[s](r.parts[s]);
          for (; s < r.parts.length; s++) o.parts.push(b(r.parts[s], t));
        } else {
          var c = [];
          for (s = 0; s < r.parts.length; s++) c.push(b(r.parts[s], t));
          i[r.id] = { id: r.id, refs: 1, parts: c };
        }
      }
    }
    function p(e, t) {
      for (var n = [], r = {}, o = 0; o < e.length; o++) {
        var i = e[o],
          s = t.base ? i[0] + t.base : i[0],
          c = { css: i[1], media: i[2], sourceMap: i[3] };
        r[s] ? r[s].parts.push(c) : n.push((r[s] = { id: s, parts: [c] }));
      }
      return n;
    }
    function h(e, t) {
      var n = c(e.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var r = l[l.length - 1];
      if ("top" === e.insertAt)
        r
          ? r.nextSibling
            ? n.insertBefore(t, r.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          l.push(t);
      else if ("bottom" === e.insertAt) n.appendChild(t);
      else {
        if ("object" != typeof e.insertAt || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        var o = c(e.insertAt.before, n);
        n.insertBefore(t, o);
      }
    }
    function v(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = l.indexOf(e);
      t >= 0 && l.splice(t, 1);
    }
    function y(e) {
      var t = document.createElement("style");
      if (
        (void 0 === e.attrs.type && (e.attrs.type = "text/css"),
        void 0 === e.attrs.nonce)
      ) {
        var r = (function() {
          0;
          return n.nc;
        })();
        r && (e.attrs.nonce = r);
      }
      return m(t, e.attrs), h(e, t), t;
    }
    function m(e, t) {
      Object.keys(t).forEach(function(n) {
        e.setAttribute(n, t[n]);
      });
    }
    function b(e, t) {
      var n, r, o, i;
      if (t.transform && e.css) {
        if (
          !(i =
            "function" == typeof t.transform
              ? t.transform(e.css)
              : t.transform.default(e.css))
        )
          return function() {};
        e.css = i;
      }
      if (t.singleton) {
        var s = d++;
        (n = a || (a = y(t))),
          (r = j.bind(null, n, s, !1)),
          (o = j.bind(null, n, s, !0));
      } else
        e.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((n = (function(e) {
              var t = document.createElement("link");
              return (
                void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                (e.attrs.rel = "stylesheet"),
                m(t, e.attrs),
                h(e, t),
                t
              );
            })(t)),
            (r = function(e, t, n) {
              var r = n.css,
                o = n.sourceMap,
                i = void 0 === t.convertToAbsoluteUrls && o;
              (t.convertToAbsoluteUrls || i) && (r = u(r));
              o &&
                (r +=
                  "\n/*# sourceMappingURL=data:application/json;base64," +
                  btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                  " */");
              var s = new Blob([r], { type: "text/css" }),
                c = e.href;
              (e.href = URL.createObjectURL(s)), c && URL.revokeObjectURL(c);
            }.bind(null, n, t)),
            (o = function() {
              v(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = y(t)),
            (r = function(e, t) {
              var n = t.css,
                r = t.media;
              r && e.setAttribute("media", r);
              if (e.styleSheet) e.styleSheet.cssText = n;
              else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n));
              }
            }.bind(null, n)),
            (o = function() {
              v(n);
            }));
      return (
        r(e),
        function(t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else o();
        }
      );
    }
    e.exports = function(e, t) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
        throw new Error(
          "The style-loader cannot be used in a non-browser environment"
        );
      ((t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}),
        t.singleton || "boolean" == typeof t.singleton || (t.singleton = s()),
        t.insertInto || (t.insertInto = "head"),
        t.insertAt || (t.insertAt = "bottom");
      var n = p(e, t);
      return (
        f(n, t),
        function(e) {
          for (var r = [], o = 0; o < n.length; o++) {
            var s = n[o];
            (c = i[s.id]).refs--, r.push(c);
          }
          e && f(p(e, t), t);
          for (o = 0; o < r.length; o++) {
            var c;
            if (0 === (c = r[o]).refs) {
              for (var a = 0; a < c.parts.length; a++) c.parts[a]();
              delete i[c.id];
            }
          }
        }
      );
    };
    var w,
      g = ((w = []),
      function(e, t) {
        return (w[e] = t), w.filter(Boolean).join("\n");
      });
    function j(e, t, n, r) {
      var o = n ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = g(t, o);
      else {
        var i = document.createTextNode(o),
          s = e.childNodes;
        s[t] && e.removeChild(s[t]),
          s.length ? e.insertBefore(i, s[t]) : e.appendChild(i);
      }
    }
  },
  "./node_modules/style-loader/lib/urls.js": function(e, t) {
    e.exports = function(e) {
      var t = "undefined" != typeof window && window.location;
      if (!t) throw new Error("fixUrls requires window.location");
      if (!e || "string" != typeof e) return e;
      var n = t.protocol + "//" + t.host,
        r = n + t.pathname.replace(/\/[^\/]*$/, "/");
      return e.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function(e, t) {
          var o,
            i = t
              .trim()
              .replace(/^"(.*)"$/, function(e, t) {
                return t;
              })
              .replace(/^'(.*)'$/, function(e, t) {
                return t;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)
            ? e
            : ((o =
                0 === i.indexOf("//")
                  ? i
                  : 0 === i.indexOf("/")
                  ? n + i
                  : r + i.replace(/^\.\//, "")),
              "url(" + JSON.stringify(o) + ")");
        }
      );
    };
  },
  "./src/index.js": function(e, t, n) {
    "use strict";
    n.r(t);
    n("./src/style.css");
    let r = ((i = document.createElement("pre")),
    (document.createElement("button").innerHTML = [
      "Hello webpack",
      "5 cubed is equal to " + ((o = 5), o * o * o)
    ].join("\n\n")),
    i);
    var o, i;
    document.body.appendChild(r);
  },
  "./src/style.css": function(e, t, n) {
    var r = n("./node_modules/css-loader/dist/cjs.js!./src/style.css");
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var o = { hmr: !0, transform: void 0, insertInto: void 0 },
      i = n("./node_modules/style-loader/lib/addStyles.js")(r, o);
    r.locals && (e.exports = r.locals),
      e.hot.accept(
        "./node_modules/css-loader/dist/cjs.js!./src/style.css",
        function() {
          var t = n("./node_modules/css-loader/dist/cjs.js!./src/style.css");
          if (
            ("string" == typeof t && (t = [[e.i, t, ""]]),
            !(function(e, t) {
              var n,
                r = 0;
              for (n in e) {
                if (!t || e[n] !== t[n]) return !1;
                r++;
              }
              for (n in t) r--;
              return 0 === r;
            })(r.locals, t.locals))
          )
            throw new Error(
              "Aborting CSS HMR due to changed css-modules locals."
            );
          i(t);
        }
      ),
      e.hot.dispose(function() {
        i();
      });
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzhmMzQiXSwibmFtZXMiOlsicGFyZW50SG90VXBkYXRlQ2FsbGJhY2siLCJ3aW5kb3ciLCJjaHVua0lkIiwibW9yZU1vZHVsZXMiLCJob3RBdmFpbGFibGVGaWxlc01hcCIsImhvdFJlcXVlc3RlZEZpbGVzTWFwIiwibW9kdWxlSWQiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJob3RVcGRhdGUiLCJob3RXYWl0aW5nRmlsZXMiLCJob3RDaHVua3NMb2FkaW5nIiwiaG90VXBkYXRlRG93bmxvYWRlZCIsImhvdEFkZFVwZGF0ZUNodW5rIiwiaG90Q3VycmVudENoaWxkTW9kdWxlIiwiaG90QXBwbHlPblVwZGF0ZSIsImhvdEN1cnJlbnRIYXNoIiwiaG90UmVxdWVzdFRpbWVvdXQiLCJob3RDdXJyZW50TW9kdWxlRGF0YSIsImhvdEN1cnJlbnRQYXJlbnRzIiwiaG90Q3VycmVudFBhcmVudHNUZW1wIiwiaG90Q3JlYXRlUmVxdWlyZSIsIm1lIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJmbiIsInJlcXVlc3QiLCJob3QiLCJhY3RpdmUiLCJwYXJlbnRzIiwiaW5kZXhPZiIsInB1c2giLCJjaGlsZHJlbiIsImNvbnNvbGUiLCJ3YXJuIiwiT2JqZWN0RmFjdG9yeSIsIm5hbWUiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwic2V0IiwidmFsdWUiLCJkZWZpbmVQcm9wZXJ0eSIsImUiLCJob3RTdGF0dXMiLCJob3RTZXRTdGF0dXMiLCJ0aGVuIiwiZmluaXNoQ2h1bmtMb2FkaW5nIiwiZXJyIiwiaG90V2FpdGluZ0ZpbGVzTWFwIiwiaG90RW5zdXJlVXBkYXRlQ2h1bmsiLCJ0IiwibW9kZSIsImhvdENyZWF0ZU1vZHVsZSIsIl9hY2NlcHRlZERlcGVuZGVuY2llcyIsIl9kZWNsaW5lZERlcGVuZGVuY2llcyIsIl9zZWxmQWNjZXB0ZWQiLCJfc2VsZkRlY2xpbmVkIiwiX2Rpc3Bvc2VIYW5kbGVycyIsIl9tYWluIiwiYWNjZXB0IiwiZGVwIiwiY2FsbGJhY2siLCJ1bmRlZmluZWQiLCJpIiwibGVuZ3RoIiwiZGVjbGluZSIsImRpc3Bvc2UiLCJhZGREaXNwb3NlSGFuZGxlciIsInJlbW92ZURpc3Bvc2VIYW5kbGVyIiwiaWR4Iiwic3BsaWNlIiwiY2hlY2siLCJob3RDaGVjayIsImFwcGx5IiwiaG90QXBwbHkiLCJzdGF0dXMiLCJsIiwiaG90U3RhdHVzSGFuZGxlcnMiLCJhZGRTdGF0dXNIYW5kbGVyIiwicmVtb3ZlU3RhdHVzSGFuZGxlciIsImRhdGEiLCJuZXdTdGF0dXMiLCJob3REZWZlcnJlZCIsImhvdFVwZGF0ZU5ld0hhc2giLCJ0b01vZHVsZUlkIiwiaWQiLCJFcnJvciIsInJlcXVlc3RUaW1lb3V0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJYTUxIdHRwUmVxdWVzdCIsInJlcXVlc3RQYXRoIiwicCIsIm9wZW4iLCJ0aW1lb3V0Iiwic2VuZCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJ1cGRhdGUiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJjIiwiaCIsInByb21pc2UiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjaGFyc2V0Iiwic3JjIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiaG90RG93bmxvYWRVcGRhdGVDaHVuayIsImRlZmVycmVkIiwicmVzdWx0Iiwib3V0ZGF0ZWRNb2R1bGVzIiwib3B0aW9ucyIsImNiIiwiaiIsIm1vZHVsZSIsImdldEFmZmVjdGVkU3R1ZmYiLCJ1cGRhdGVNb2R1bGVJZCIsIm91dGRhdGVkRGVwZW5kZW5jaWVzIiwicXVldWUiLCJzbGljZSIsIm1hcCIsImNoYWluIiwicXVldWVJdGVtIiwicG9wIiwidHlwZSIsInBhcmVudElkIiwicGFyZW50IiwiY29uY2F0IiwiYWRkQWxsVG9TZXQiLCJhIiwiYiIsIml0ZW0iLCJhcHBsaWVkVXBkYXRlIiwid2FyblVuZXhwZWN0ZWRSZXF1aXJlIiwiYWJvcnRFcnJvciIsImRvQXBwbHkiLCJkb0Rpc3Bvc2UiLCJjaGFpbkluZm8iLCJqb2luIiwib25EZWNsaW5lZCIsImlnbm9yZURlY2xpbmVkIiwib25VbmFjY2VwdGVkIiwiaWdub3JlVW5hY2NlcHRlZCIsIm9uQWNjZXB0ZWQiLCJvbkRpc3Bvc2VkIiwib3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzIiwiZXJyb3JIYW5kbGVyIiwia2V5cyIsImZvckVhY2giLCJpbnN0YWxsZWRDaHVua3MiLCJob3REaXNwb3NlQ2h1bmsiLCJkZXBlbmRlbmN5IiwibW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMiLCJkaXNwb3NlSGFuZGxlcnMiLCJjaGlsZCIsIm1vZHVsZXMiLCJlcnJvciIsImNhbGxiYWNrcyIsIm9uRXJyb3JlZCIsImRlcGVuZGVuY3lJZCIsImlnbm9yZUVycm9yZWQiLCJlcnIyIiwib3JpZ2luYWxFcnJvciIsImV4cG9ydHMiLCJtIiwiZCIsImdldHRlciIsIm8iLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsInRoaXMiLCJjb250ZW50IiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlTWFwIiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdHJpbmdpZnkiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibWVkaWFRdWVyeSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJtZW1vIiwic3R5bGVzSW5Eb20iLCJpc09sZElFIiwiYWxsIiwiYXRvYiIsImFyZ3VtZW50cyIsImdldEVsZW1lbnQiLCJ0YXJnZXQiLCJzdHlsZVRhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsInNpbmdsZXRvbiIsInNpbmdsZXRvbkNvdW50ZXIiLCJzdHlsZXNJbnNlcnRlZEF0VG9wIiwiZml4VXJscyIsImFkZFN0eWxlc1RvRG9tIiwic3R5bGVzIiwiZG9tU3R5bGUiLCJyZWZzIiwicGFydHMiLCJhZGRTdHlsZSIsImxpc3RUb1N0eWxlcyIsIm5ld1N0eWxlcyIsImJhc2UiLCJwYXJ0IiwiY3NzIiwibWVkaWEiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJzdHlsZSIsImluc2VydEludG8iLCJsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCIsImluc2VydEF0IiwibmV4dFNpYmxpbmciLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiYmVmb3JlIiwicmVtb3ZlU3R5bGVFbGVtZW50IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY3JlYXRlU3R5bGVFbGVtZW50IiwiYXR0cnMiLCJub25jZSIsIm5jIiwiZ2V0Tm9uY2UiLCJhZGRBdHRycyIsImVsIiwic2V0QXR0cmlidXRlIiwib2JqIiwicmVtb3ZlIiwidHJhbnNmb3JtIiwiZGVmYXVsdCIsInN0eWxlSW5kZXgiLCJhcHBseVRvU2luZ2xldG9uVGFnIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicmV2b2tlT2JqZWN0VVJMIiwiQmxvYiIsImxpbmsiLCJyZWwiLCJjcmVhdGVMaW5rRWxlbWVudCIsImF1dG9GaXhVcmxzIiwiY29udmVydFRvQWJzb2x1dGVVcmxzIiwiYmxvYiIsIm9sZFNyYyIsImhyZWYiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImNyZWF0ZVRleHROb2RlIiwibmV3T2JqIiwiREVCVUciLCJuZXdMaXN0IiwibWF5UmVtb3ZlIiwidGV4dFN0b3JlIiwicmVwbGFjZVRleHQiLCJpbmRleCIsInJlcGxhY2VtZW50IiwiZmlsdGVyIiwiQm9vbGVhbiIsImNzc05vZGUiLCJjaGlsZE5vZGVzIiwibG9jYXRpb24iLCJiYXNlVXJsIiwicHJvdG9jb2wiLCJob3N0IiwiY3VycmVudERpciIsInBhdGhuYW1lIiwicmVwbGFjZSIsImZ1bGxNYXRjaCIsIm9yaWdVcmwiLCJuZXdVcmwiLCJ1bnF1b3RlZE9yaWdVcmwiLCJ0cmltIiwiJDEiLCJ0ZXN0Iiwic3JjX2VsZW1lbnQiLCJlbGVtZW50IiwiaW5uZXJIVE1MIiwieCIsImJvZHkiLCJobXIiLCJsb2NhbHMiLCJuZXdDb250ZW50Il0sIm1hcHBpbmdzIjoiYUFHQSxJQUFBQSxFQUFBQyxPQUFBLGlCQUNBQSxPQUFBLGlCQUNBLFNBQUFDLEVBQUFDLElBZ1JBLFNBQUFELEVBQUFDLEdBQ0EsSUFBQUMsRUFBQUYsS0FBQUcsRUFBQUgsR0FDQSxPQUVBLFFBQUFJLEtBREFELEVBQUFILElBQUEsRUFDQUMsRUFDQUksT0FBQUMsVUFBQUMsZUFBQUMsS0FBQVAsRUFBQUcsS0FDQUssRUFBQUwsR0FBQUgsRUFBQUcsSUFHQSxLQUFBTSxHQUFBLElBQUFDLEdBQ0FDLElBelJBQyxDQUFBYixFQUFBQyxHQUNBSCxLQUFBRSxFQUFBQyxJQXVEQSxJQUtBYSxFQUxBQyxHQUFBLEVBRUFDLEVBQUEsdUJBQ0FDLEVBQUEsSUFDQUMsRUFBQSxHQUdBQyxFQUFBLEdBRUFDLEVBQUEsR0FHQSxTQUFBQyxFQUFBakIsR0FDQSxJQUFBa0IsRUFBQUMsRUFBQW5C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QUFBd1AsRUFBbUI1UixFQUFRLHlEQWlCM0IsR0FmQSxpQkFBQTRSLE1BQUEsRUFBb0QzTCxFQUFBekQsRUFBU29QLEVBQUEsT0FFN0QsU0FBQTVLLEVBQUFDLEdBQ0EsSUFBQTRDLEVBQUEvRyxFQUFBLEVBRUEsSUFBQStHLEtBQUE3QyxFQUFBLENBQ0EsSUFBQUMsR0FBQUQsRUFBQTZDLEtBQUE1QyxFQUFBNEMsR0FBQSxTQUNBL0csSUFHQSxJQUFBK0csS0FBQTVDLEVBQUFuRSxJQUVBLFdBQUFBLEVBVkEsQ0FXR3lILEVBQUFvSCxPQUFBQyxFQUFBRCxRQUVILFVBQUE1TixNQUFBLHVEQUVBYSxFQUFBZ04sS0FHQTNMLEVBQUE5RixJQUFBd0MsUUFBQSxXQUFnQ2lDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZVwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVcIl0gPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHRcdGlmIChwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0fSA7XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4gXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4gXHRcdFx0fVxuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCI0ZmQ0YTZlNzA3ZmZlOGNjMmY2Y1wiO1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdHZhciBjaHVua0lkID0gMDtcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHQpXG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdCBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBob3RDcmVhdGVSZXF1aXJlKFwiLi9zcmMvaW5kZXguanNcIikoX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiLy8gaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuLy8gaW1wb3J0IHByaW50TWUgZnJvbSBcIi4vcHJpbnQuanNcIjtcbmltcG9ydCB7IGN1YmUsIHNxdWFyZSB9IGZyb20gXCIuL21hdGguanNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInByZVwiKTtcbiAgdmFyIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgLy8gZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oW1wiSGVsbG9cIiwgXCJ3ZWJwYWNrXCJdLCBcIixcIik7XG5cbiAgYnRuLmlubmVySFRNTCA9IFtcbiAgICAnSGVsbG8gd2VicGFjaycsXG4gICAgJzUgY3ViZWQgaXMgZXF1YWwgdG8gJytjdWJlKDUpXG4gIF0uam9pbignXFxuXFxuJyk7XG4gIC8vIGJ0bi5vbmNsaWNrID0gcHJpbnRNZTtcblxuICAvLyBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xubGV0IGVsZW1lbnQgPSBjb21wb25lbnQoKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbi8vIGlmIChtb2R1bGUuaG90KSB7XG4vLyAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9wcmludC5qc1wiLCBmdW5jdGlvbigpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcIkFjY2VwdCB0aGUgdXBkYXRlZCBwcmludE1lIG1vZHVsZVwiKTtcbi8vICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZShlbGVtZW50KTtcbi8vICAgICBlbGVtZW50ID0gY29tcG9uZW50KCk7XG4vLyAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbi8vICAgICAvLyBwcmludE1lKCk7XG4vLyAgIH0pO1xuLy8gfVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZSh4KSB7XG4gIHJldHVybiB4ICogeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGN1YmUoeCkge1xuICByZXR1cm4geCAqIHggKiB4O1xufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
