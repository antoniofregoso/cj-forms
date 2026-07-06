// node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var a;
var s;
var h;
var p;
var v;
var y;
var d = {};
var w = [];
var _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var g = Array.isArray;
function m(n2, l2) {
  for (var u3 in l2) n2[u3] = l2[u3];
  return n2;
}
function b(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function k(l2, u3, t2) {
  var i3, r2, o2, e3 = {};
  for (o2 in u3) "key" == o2 ? i3 = u3[o2] : "ref" == o2 ? r2 = u3[o2] : e3[o2] = u3[o2];
  if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t2), "function" == typeof l2 && null != l2.defaultProps) for (o2 in l2.defaultProps) void 0 === e3[o2] && (e3[o2] = l2.defaultProps[o2]);
  return x(l2, e3, i3, r2, null);
}
function x(n2, t2, i3, r2, o2) {
  var e3 = { type: n2, props: t2, key: i3, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++u : o2, __i: -1, __u: 0 };
  return null == o2 && null != l.vnode && l.vnode(e3), e3;
}
function S(n2) {
  return n2.children;
}
function C(n2, l2) {
  this.props = n2, this.context = l2;
}
function $(n2, l2) {
  if (null == l2) return n2.__ ? $(n2.__, n2.__i + 1) : null;
  for (var u3; l2 < n2.__k.length; l2++) if (null != (u3 = n2.__k[l2]) && null != u3.__e) return u3.__e;
  return "function" == typeof n2.type ? $(n2) : null;
}
function I(n2) {
  if (n2.__P && n2.__d) {
    var u3 = n2.__v, t2 = u3.__e, i3 = [], r2 = [], o2 = m({}, u3);
    o2.__v = u3.__v + 1, l.vnode && l.vnode(o2), q(n2.__P, o2, u3, n2.__n, n2.__P.namespaceURI, 32 & u3.__u ? [t2] : null, i3, null == t2 ? $(u3) : t2, !!(32 & u3.__u), r2), o2.__v = u3.__v, o2.__.__k[o2.__i] = o2, D(i3, o2, r2), u3.__e = u3.__ = null, o2.__e != t2 && P(o2);
  }
}
function P(n2) {
  if (null != (n2 = n2.__) && null != n2.__c) return n2.__e = n2.__c.base = null, n2.__k.some(function(l2) {
    if (null != l2 && null != l2.__e) return n2.__e = n2.__c.base = l2.__e;
  }), P(n2);
}
function A(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !H.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(H);
}
function H() {
  try {
    for (var n2, l2 = 1; i.length; ) i.length > l2 && i.sort(e), n2 = i.shift(), l2 = i.length, I(n2);
  } finally {
    i.length = H.__r = 0;
  }
}
function L(n2, l2, u3, t2, i3, r2, o2, e3, f3, c2, a2) {
  var s2, h2, p2, v2, y2, _2, g2, m2 = t2 && t2.__k || w, b2 = l2.length;
  for (f3 = T(u3, l2, m2, f3, b2), s2 = 0; s2 < b2; s2++) null != (p2 = u3.__k[s2]) && (h2 = -1 != p2.__i && m2[p2.__i] || d, p2.__i = s2, _2 = q(n2, p2, h2, i3, r2, o2, e3, f3, c2, a2), v2 = p2.__e, p2.ref && h2.ref != p2.ref && (h2.ref && J(h2.ref, null, p2), a2.push(p2.ref, p2.__c || v2, p2)), null == y2 && null != v2 && (y2 = v2), (g2 = !!(4 & p2.__u)) || h2.__k === p2.__k ? (f3 = j(p2, f3, n2, g2), g2 && h2.__e && (h2.__e = null)) : "function" == typeof p2.type && void 0 !== _2 ? f3 = _2 : v2 && (f3 = v2.nextSibling), p2.__u &= -7);
  return u3.__e = y2, f3;
}
function T(n2, l2, u3, t2, i3) {
  var r2, o2, e3, f3, c2, a2 = u3.length, s2 = a2, h2 = 0;
  for (n2.__k = new Array(i3), r2 = 0; r2 < i3; r2++) null != (o2 = l2[r2]) && "boolean" != typeof o2 && "function" != typeof o2 ? ("string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? o2 = n2.__k[r2] = x(null, o2, null, null, null) : g(o2) ? o2 = n2.__k[r2] = x(S, { children: o2 }, null, null, null) : void 0 === o2.constructor && o2.__b > 0 ? o2 = n2.__k[r2] = x(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : n2.__k[r2] = o2, f3 = r2 + h2, o2.__ = n2, o2.__b = n2.__b + 1, e3 = null, -1 != (c2 = o2.__i = O(o2, u3, f3, s2)) && (s2--, (e3 = u3[c2]) && (e3.__u |= 2)), null == e3 || null == e3.__v ? (-1 == c2 && (i3 > a2 ? h2-- : i3 < a2 && h2++), "function" != typeof o2.type && (o2.__u |= 4)) : c2 != f3 && (c2 == f3 - 1 ? h2-- : c2 == f3 + 1 ? h2++ : (c2 > f3 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
  if (s2) for (r2 = 0; r2 < a2; r2++) null != (e3 = u3[r2]) && 0 == (2 & e3.__u) && (e3.__e == t2 && (t2 = $(e3)), K(e3, e3));
  return t2;
}
function j(n2, l2, u3, t2) {
  var i3, r2;
  if ("function" == typeof n2.type) {
    for (i3 = n2.__k, r2 = 0; i3 && r2 < i3.length; r2++) i3[r2] && (i3[r2].__ = n2, l2 = j(i3[r2], l2, u3, t2));
    return l2;
  }
  n2.__e != l2 && (t2 && (l2 && n2.type && !l2.parentNode && (l2 = $(n2)), u3.insertBefore(n2.__e, l2 || null)), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 == l2.nodeType);
  return l2;
}
function O(n2, l2, u3, t2) {
  var i3, r2, o2, e3 = n2.key, f3 = n2.type, c2 = l2[u3], a2 = null != c2 && 0 == (2 & c2.__u);
  if (null === c2 && null == e3 || a2 && e3 == c2.key && f3 == c2.type) return u3;
  if (t2 > (a2 ? 1 : 0)) {
    for (i3 = u3 - 1, r2 = u3 + 1; i3 >= 0 || r2 < l2.length; ) if (null != (c2 = l2[o2 = i3 >= 0 ? i3-- : r2++]) && 0 == (2 & c2.__u) && e3 == c2.key && f3 == c2.type) return o2;
  }
  return -1;
}
function z(n2, l2, u3) {
  "-" == l2[0] ? n2.setProperty(l2, null == u3 ? "" : u3) : n2[l2] = null == u3 ? "" : "number" != typeof u3 || _.test(l2) ? u3 : u3 + "px";
}
function N(n2, l2, u3, t2, i3) {
  var r2, o2;
  n: if ("style" == l2) if ("string" == typeof u3) n2.style.cssText = u3;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u3 && l2 in u3 || z(n2.style, l2, "");
    if (u3) for (l2 in u3) t2 && u3[l2] == t2[l2] || z(n2.style, l2, u3[l2]);
  }
  else if ("o" == l2[0] && "n" == l2[1]) r2 = l2 != (l2 = l2.replace(s, "$1")), o2 = l2.toLowerCase(), l2 = o2 in n2 || "onFocusOut" == l2 || "onFocusIn" == l2 ? o2.slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u3, u3 ? t2 ? u3[a] = t2[a] : (u3[a] = h, n2.addEventListener(l2, r2 ? v : p, r2)) : n2.removeEventListener(l2, r2 ? v : p, r2);
  else {
    if ("http://www.w3.org/2000/svg" == i3) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == u3 ? "" : u3;
      break n;
    } catch (n3) {
    }
    "function" == typeof u3 || (null == u3 || false === u3 && "-" != l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u3 ? "" : u3));
  }
}
function V(n2) {
  return function(u3) {
    if (this.l) {
      var t2 = this.l[u3.type + n2];
      if (null == u3[c]) u3[c] = h++;
      else if (u3[c] < t2[a]) return;
      return t2(l.event ? l.event(u3) : u3);
    }
  };
}
function q(n2, u3, t2, i3, r2, o2, e3, f3, c2, a2) {
  var s2, h2, p2, v2, y2, d2, _2, k2, x2, M, $2, I2, P2, A2, H2, T2, j2 = u3.type;
  if (void 0 !== u3.constructor) return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), o2 = [f3 = u3.__e = t2.__e]), (s2 = l.__b) && s2(u3);
  n: if ("function" == typeof j2) {
    h2 = e3.length;
    try {
      if (x2 = u3.props, M = j2.prototype && j2.prototype.render, $2 = (s2 = j2.contextType) && i3[s2.__c], I2 = s2 ? $2 ? $2.props.value : s2.__ : i3, t2.__c ? k2 = (p2 = u3.__c = t2.__c).__ = p2.__E : (M ? u3.__c = p2 = new j2(x2, I2) : (u3.__c = p2 = new C(x2, I2), p2.constructor = j2, p2.render = Q), $2 && $2.sub(p2), p2.state || (p2.state = {}), p2.__n = i3, v2 = p2.__d = true, p2.__h = [], p2._sb = []), M && null == p2.__s && (p2.__s = p2.state), M && null != j2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = m({}, p2.__s)), m(p2.__s, j2.getDerivedStateFromProps(x2, p2.__s))), y2 = p2.props, d2 = p2.state, p2.__v = u3, v2) M && null == j2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), M && null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
      else {
        if (M && null == j2.getDerivedStateFromProps && x2 !== y2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(x2, I2), u3.__v == t2.__v || !p2.__e && null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(x2, p2.__s, I2)) {
          u3.__v != t2.__v && (p2.props = x2, p2.state = p2.__s, p2.__d = false), u3.__e = t2.__e, u3.__k = t2.__k, u3.__k.some(function(n3) {
            n3 && (n3.__ = u3);
          }), w.push.apply(p2.__h, p2._sb), p2._sb = [], p2.__h.length && e3.push(p2);
          break n;
        }
        null != p2.componentWillUpdate && p2.componentWillUpdate(x2, p2.__s, I2), M && null != p2.componentDidUpdate && p2.__h.push(function() {
          p2.componentDidUpdate(y2, d2, _2);
        });
      }
      if (p2.context = I2, p2.props = x2, p2.__P = n2, p2.__e = false, P2 = l.__r, A2 = 0, M) p2.state = p2.__s, p2.__d = false, P2 && P2(u3), s2 = p2.render(p2.props, p2.state, p2.context), w.push.apply(p2.__h, p2._sb), p2._sb = [];
      else do {
        p2.__d = false, P2 && P2(u3), s2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
      } while (p2.__d && ++A2 < 25);
      p2.state = p2.__s, null != p2.getChildContext && (i3 = m(m({}, i3), p2.getChildContext())), M && !v2 && null != p2.getSnapshotBeforeUpdate && (_2 = p2.getSnapshotBeforeUpdate(y2, d2)), H2 = null != s2 && s2.type === S && null == s2.key ? E(s2.props.children) : s2, f3 = L(n2, g(H2) ? H2 : [H2], u3, t2, i3, r2, o2, e3, f3, c2, a2), p2.base = u3.__e, u3.__u &= -161, p2.__h.length && e3.push(p2), k2 && (p2.__E = p2.__ = null);
    } catch (n3) {
      if (e3.length = h2, u3.__v = null, c2 || null != o2) {
        if (n3.then) {
          for (u3.__u |= c2 ? 160 : 128; f3 && 8 == f3.nodeType && f3.nextSibling; ) f3 = f3.nextSibling;
          null != o2 && (o2[o2.indexOf(f3)] = null), u3.__e = f3;
        } else if (null != o2) for (T2 = o2.length; T2--; ) b(o2[T2]);
      } else u3.__e = t2.__e;
      null == u3.__k && (u3.__k = t2.__k || []), n3.then || B(u3), l.__e(n3, u3, t2);
    }
  } else null == o2 && u3.__v == t2.__v ? (u3.__k = t2.__k, u3.__e = t2.__e) : f3 = u3.__e = G(t2.__e, u3, t2, i3, r2, o2, e3, c2, a2);
  return (s2 = l.diffed) && s2(u3), 128 & u3.__u ? void 0 : f3;
}
function B(n2) {
  n2 && (n2.__c && (n2.__c.__e = true), n2.__k && n2.__k.some(B));
}
function D(n2, u3, t2) {
  for (var i3 = 0; i3 < t2.length; i3++) J(t2[i3], t2[++i3], t2[++i3]);
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function E(n2) {
  return "object" != typeof n2 || null == n2 || n2.__b > 0 ? n2 : g(n2) ? n2.map(E) : void 0 !== n2.constructor ? null : m({}, n2);
}
function G(u3, t2, i3, r2, o2, e3, f3, c2, a2) {
  var s2, h2, p2, v2, y2, w2, _2, m2 = i3.props || d, k2 = t2.props, x2 = t2.type;
  if ("svg" == x2 ? o2 = "http://www.w3.org/2000/svg" : "math" == x2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e3) {
    for (s2 = 0; s2 < e3.length; s2++) if ((y2 = e3[s2]) && "setAttribute" in y2 == !!x2 && (x2 ? y2.localName == x2 : 3 == y2.nodeType)) {
      u3 = y2, e3[s2] = null;
      break;
    }
  }
  if (null == u3) {
    if (null == x2) return document.createTextNode(k2);
    u3 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l.__m && l.__m(t2, e3), c2 = false), e3 = null;
  }
  if (null == x2) m2 === k2 || c2 && u3.data == k2 || (u3.data = k2);
  else {
    if (e3 = "textarea" == x2 && null != k2.defaultValue ? null : e3 && n.call(u3.childNodes), !c2 && null != e3) for (m2 = {}, s2 = 0; s2 < u3.attributes.length; s2++) m2[(y2 = u3.attributes[s2]).name] = y2.value;
    for (s2 in m2) y2 = m2[s2], "dangerouslySetInnerHTML" == s2 ? p2 = y2 : "children" == s2 || s2 in k2 || "value" == s2 && "defaultValue" in k2 || "checked" == s2 && "defaultChecked" in k2 || N(u3, s2, null, y2, o2);
    for (s2 in k2) y2 = k2[s2], "children" == s2 ? v2 = y2 : "dangerouslySetInnerHTML" == s2 ? h2 = y2 : "value" == s2 ? w2 = y2 : "checked" == s2 ? _2 = y2 : c2 && "function" != typeof y2 || m2[s2] === y2 || N(u3, s2, y2, m2[s2], o2);
    if (h2) c2 || p2 && (h2.__html == p2.__html || h2.__html == u3.innerHTML) || (u3.innerHTML = h2.__html), t2.__k = [];
    else if (p2 && (u3.innerHTML = ""), L("template" == t2.type ? u3.content : u3, g(v2) ? v2 : [v2], t2, i3, r2, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o2, e3, f3, e3 ? e3[0] : i3.__k && $(i3, 0), c2, a2), null != e3) for (s2 = e3.length; s2--; ) b(e3[s2]);
    c2 && "textarea" != x2 || (s2 = "value", "progress" == x2 && null == w2 ? u3.removeAttribute("value") : null != w2 && (w2 !== u3[s2] || "progress" == x2 && !w2 || "option" == x2 && w2 != m2[s2]) && N(u3, s2, w2, m2[s2], o2), s2 = "checked", null != _2 && _2 != u3[s2] && N(u3, s2, _2, m2[s2], o2));
  }
  return u3;
}
function J(n2, u3, t2) {
  try {
    if ("function" == typeof n2) {
      var i3 = "function" == typeof n2.__u;
      i3 && n2.__u(), i3 && null == u3 || (n2.__u = n2(u3));
    } else n2.current = u3;
  } catch (n3) {
    l.__e(n3, t2);
  }
}
function K(n2, u3, t2) {
  var i3, r2;
  if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current != n2.__e || J(i3, null, u3)), null != (i3 = n2.__c)) {
    if (i3.componentWillUnmount) try {
      i3.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u3);
    }
    i3.base = i3.__P = i3.__n = null;
  }
  if (i3 = n2.__k) for (r2 = 0; r2 < i3.length; r2++) i3[r2] && K(i3[r2], u3, t2 || "function" != typeof n2.type);
  t2 || b(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function Q(n2, l2, u3) {
  return this.constructor(n2, u3);
}
function R(u3, t2, i3) {
  var r2, o2, e3, f3;
  t2 == document && (t2 = document.documentElement), l.__ && l.__(u3, t2), o2 = (r2 = "function" == typeof i3) ? null : i3 && i3.__k || t2.__k, e3 = [], f3 = [], q(t2, u3 = (!r2 && i3 || t2).__k = k(S, null, [u3]), o2 || d, d, t2.namespaceURI, !r2 && i3 ? [i3] : o2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, e3, !r2 && i3 ? i3 : o2 ? o2.__e : t2.firstChild, r2, f3), D(e3, u3, f3), u3.props.children = null;
}
n = w.slice, l = { __e: function(n2, l2, u3, t2) {
  for (var i3, r2, o2; l2 = l2.__; ) if ((i3 = l2.__c) && !i3.__) try {
    if ((r2 = i3.constructor) && null != r2.getDerivedStateFromError && (i3.setState(r2.getDerivedStateFromError(n2)), o2 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t2 || {}), o2 = i3.__d), o2) return i3.__E = i3;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, C.prototype.setState = function(n2, l2) {
  var u3;
  u3 = null != this.__s && this.__s != this.state ? this.__s : this.__s = m({}, this.state), "function" == typeof n2 && (n2 = n2(m({}, u3), this.props)), n2 && m(u3, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), A(this));
}, C.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), A(this));
}, C.prototype.render = S, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, H.__r = 0, f = Math.random().toString(8), c = "__d" + f, a = "__a" + f, s = /(PointerCapture)$|Capture$/i, h = 0, p = V(false), v = V(true), y = 0;

// src/components/FormLead.jsx
import { AppElement } from "@customerjourney/cj-core";

// src/components/countryCodes.json
var countryCodes_default = {
  codes: [
    {
      name: "Afghanistan",
      dial_code: "+93",
      code: "AF"
    },
    {
      name: "Aland Islands",
      dial_code: "+358",
      code: "AX"
    },
    {
      name: "Albania",
      dial_code: "+355",
      code: "AL"
    },
    {
      name: "Algeria",
      dial_code: "+213",
      code: "DZ"
    },
    {
      name: "AmericanSamoa",
      dial_code: "+1684",
      code: "AS"
    },
    {
      name: "Andorra",
      dial_code: "+376",
      code: "AD"
    },
    {
      name: "Angola",
      dial_code: "+244",
      code: "AO"
    },
    {
      name: "Anguilla",
      dial_code: "+1264",
      code: "AI"
    },
    {
      name: "Antarctica",
      dial_code: "+672",
      code: "AQ"
    },
    {
      name: "Antigua and Barbuda",
      dial_code: "+1268",
      code: "AG"
    },
    {
      name: "Argentina",
      dial_code: "+54",
      code: "AR"
    },
    {
      name: "Armenia",
      dial_code: "+374",
      code: "AM"
    },
    {
      name: "Aruba",
      dial_code: "+297",
      code: "AW"
    },
    {
      name: "Australia",
      dial_code: "+61",
      code: "AU"
    },
    {
      name: "Austria",
      dial_code: "+43",
      code: "AT"
    },
    {
      name: "Azerbaijan",
      dial_code: "+994",
      code: "AZ"
    },
    {
      name: "Bahamas",
      dial_code: "+1242",
      code: "BS"
    },
    {
      name: "Bahrain",
      dial_code: "+973",
      code: "BH"
    },
    {
      name: "Bangladesh",
      dial_code: "+880",
      code: "BD"
    },
    {
      name: "Barbados",
      dial_code: "+1246",
      code: "BB"
    },
    {
      name: "Belarus",
      dial_code: "+375",
      code: "BY"
    },
    {
      name: "Belgium",
      dial_code: "+32",
      code: "BE"
    },
    {
      name: "Belize",
      dial_code: "+501",
      code: "BZ"
    },
    {
      name: "Benin",
      dial_code: "+229",
      code: "BJ"
    },
    {
      name: "Bermuda",
      dial_code: "+1441",
      code: "BM"
    },
    {
      name: "Bhutan",
      dial_code: "+975",
      code: "BT"
    },
    {
      name: "Bolivia, Plurinational State of",
      dial_code: "+591",
      code: "BO"
    },
    {
      name: "Bosnia and Herzegovina",
      dial_code: "+387",
      code: "BA"
    },
    {
      name: "Botswana",
      dial_code: "+267",
      code: "BW"
    },
    {
      name: "Brazil",
      dial_code: "+55",
      code: "BR"
    },
    {
      name: "British Indian Ocean Territory",
      dial_code: "+246",
      code: "IO"
    },
    {
      name: "Brunei Darussalam",
      dial_code: "+673",
      code: "BN"
    },
    {
      name: "Bulgaria",
      dial_code: "+359",
      code: "BG"
    },
    {
      name: "Burkina Faso",
      dial_code: "+226",
      code: "BF"
    },
    {
      name: "Burundi",
      dial_code: "+257",
      code: "BI"
    },
    {
      name: "Cambodia",
      dial_code: "+855",
      code: "KH"
    },
    {
      name: "Cameroon",
      dial_code: "+237",
      code: "CM"
    },
    {
      name: "Canada",
      dial_code: "+1",
      code: "CA"
    },
    {
      name: "Cape Verde",
      dial_code: "+238",
      code: "CV"
    },
    {
      name: "Cayman Islands",
      dial_code: "+ 345",
      code: "KY"
    },
    {
      name: "Central African Republic",
      dial_code: "+236",
      code: "CF"
    },
    {
      name: "Chad",
      dial_code: "+235",
      code: "TD"
    },
    {
      name: "Chile",
      dial_code: "+56",
      code: "CL"
    },
    {
      name: "China",
      dial_code: "+86",
      code: "CN"
    },
    {
      name: "Christmas Island",
      dial_code: "+61",
      code: "CX"
    },
    {
      name: "Cocos (Keeling) Islands",
      dial_code: "+61",
      code: "CC"
    },
    {
      name: "Colombia",
      dial_code: "+57",
      code: "CO"
    },
    {
      name: "Comoros",
      dial_code: "+269",
      code: "KM"
    },
    {
      name: "Congo",
      dial_code: "+242",
      code: "CG"
    },
    {
      name: "Congo, The Democratic Republic of the Congo",
      dial_code: "+243",
      code: "CD"
    },
    {
      name: "Cook Islands",
      dial_code: "+682",
      code: "CK"
    },
    {
      name: "Costa Rica",
      dial_code: "+506",
      code: "CR"
    },
    {
      name: "Cote d'Ivoire",
      dial_code: "+225",
      code: "CI"
    },
    {
      name: "Croatia",
      dial_code: "+385",
      code: "HR"
    },
    {
      name: "Cuba",
      dial_code: "+53",
      code: "CU"
    },
    {
      name: "Cyprus",
      dial_code: "+357",
      code: "CY"
    },
    {
      name: "Czech Republic",
      dial_code: "+420",
      code: "CZ"
    },
    {
      name: "Denmark",
      dial_code: "+45",
      code: "DK"
    },
    {
      name: "Djibouti",
      dial_code: "+253",
      code: "DJ"
    },
    {
      name: "Dominica",
      dial_code: "+1767",
      code: "DM"
    },
    {
      name: "Dominican Republic",
      dial_code: "+1849",
      code: "DO"
    },
    {
      name: "Ecuador",
      dial_code: "+593",
      code: "EC"
    },
    {
      name: "Egypt",
      dial_code: "+20",
      code: "EG"
    },
    {
      name: "El Salvador",
      dial_code: "+503",
      code: "SV"
    },
    {
      name: "Equatorial Guinea",
      dial_code: "+240",
      code: "GQ"
    },
    {
      name: "Eritrea",
      dial_code: "+291",
      code: "ER"
    },
    {
      name: "Estonia",
      dial_code: "+372",
      code: "EE"
    },
    {
      name: "Ethiopia",
      dial_code: "+251",
      code: "ET"
    },
    {
      name: "Falkland Islands (Malvinas)",
      dial_code: "+500",
      code: "FK"
    },
    {
      name: "Faroe Islands",
      dial_code: "+298",
      code: "FO"
    },
    {
      name: "Fiji",
      dial_code: "+679",
      code: "FJ"
    },
    {
      name: "Finland",
      dial_code: "+358",
      code: "FI"
    },
    {
      name: "France",
      dial_code: "+33",
      code: "FR"
    },
    {
      name: "French Guiana",
      dial_code: "+594",
      code: "GF"
    },
    {
      name: "French Polynesia",
      dial_code: "+689",
      code: "PF"
    },
    {
      name: "Gabon",
      dial_code: "+241",
      code: "GA"
    },
    {
      name: "Gambia",
      dial_code: "+220",
      code: "GM"
    },
    {
      name: "Georgia",
      dial_code: "+995",
      code: "GE"
    },
    {
      name: "Germany",
      dial_code: "+49",
      code: "DE"
    },
    {
      name: "Ghana",
      dial_code: "+233",
      code: "GH"
    },
    {
      name: "Gibraltar",
      dial_code: "+350",
      code: "GI"
    },
    {
      name: "Greece",
      dial_code: "+30",
      code: "GR"
    },
    {
      name: "Greenland",
      dial_code: "+299",
      code: "GL"
    },
    {
      name: "Grenada",
      dial_code: "+1473",
      code: "GD"
    },
    {
      name: "Guadeloupe",
      dial_code: "+590",
      code: "GP"
    },
    {
      name: "Guam",
      dial_code: "+1671",
      code: "GU"
    },
    {
      name: "Guatemala",
      dial_code: "+502",
      code: "GT"
    },
    {
      name: "Guernsey",
      dial_code: "+44",
      code: "GG"
    },
    {
      name: "Guinea",
      dial_code: "+224",
      code: "GN"
    },
    {
      name: "Guinea-Bissau",
      dial_code: "+245",
      code: "GW"
    },
    {
      name: "Guyana",
      dial_code: "+595",
      code: "GY"
    },
    {
      name: "Haiti",
      dial_code: "+509",
      code: "HT"
    },
    {
      name: "Holy See (Vatican City State)",
      dial_code: "+379",
      code: "VA"
    },
    {
      name: "Honduras",
      dial_code: "+504",
      code: "HN"
    },
    {
      name: "Hong Kong",
      dial_code: "+852",
      code: "HK"
    },
    {
      name: "Hungary",
      dial_code: "+36",
      code: "HU"
    },
    {
      name: "Iceland",
      dial_code: "+354",
      code: "IS"
    },
    {
      name: "India",
      dial_code: "+91",
      code: "IN"
    },
    {
      name: "Indonesia",
      dial_code: "+62",
      code: "ID"
    },
    {
      name: "Iran, Islamic Republic of Persian Gulf",
      dial_code: "+98",
      code: "IR"
    },
    {
      name: "Iraq",
      dial_code: "+964",
      code: "IQ"
    },
    {
      name: "Ireland",
      dial_code: "+353",
      code: "IE"
    },
    {
      name: "Isle of Man",
      dial_code: "+44",
      code: "IM"
    },
    {
      name: "Israel",
      dial_code: "+972",
      code: "IL"
    },
    {
      name: "Italy",
      dial_code: "+39",
      code: "IT"
    },
    {
      name: "Jamaica",
      dial_code: "+1876",
      code: "JM"
    },
    {
      name: "Japan",
      dial_code: "+81",
      code: "JP"
    },
    {
      name: "Jersey",
      dial_code: "+44",
      code: "JE"
    },
    {
      name: "Jordan",
      dial_code: "+962",
      code: "JO"
    },
    {
      name: "Kazakhstan",
      dial_code: "+77",
      code: "KZ"
    },
    {
      name: "Kenya",
      dial_code: "+254",
      code: "KE"
    },
    {
      name: "Kiribati",
      dial_code: "+686",
      code: "KI"
    },
    {
      name: "Korea, Democratic People's Republic of Korea",
      dial_code: "+850",
      code: "KP"
    },
    {
      name: "Korea, Republic of South Korea",
      dial_code: "+82",
      code: "KR"
    },
    {
      name: "Kuwait",
      dial_code: "+965",
      code: "KW"
    },
    {
      name: "Kyrgyzstan",
      dial_code: "+996",
      code: "KG"
    },
    {
      name: "Laos",
      dial_code: "+856",
      code: "LA"
    },
    {
      name: "Latvia",
      dial_code: "+371",
      code: "LV"
    },
    {
      name: "Lebanon",
      dial_code: "+961",
      code: "LB"
    },
    {
      name: "Lesotho",
      dial_code: "+266",
      code: "LS"
    },
    {
      name: "Liberia",
      dial_code: "+231",
      code: "LR"
    },
    {
      name: "Libyan Arab Jamahiriya",
      dial_code: "+218",
      code: "LY"
    },
    {
      name: "Liechtenstein",
      dial_code: "+423",
      code: "LI"
    },
    {
      name: "Lithuania",
      dial_code: "+370",
      code: "LT"
    },
    {
      name: "Luxembourg",
      dial_code: "+352",
      code: "LU"
    },
    {
      name: "Macao",
      dial_code: "+853",
      code: "MO"
    },
    {
      name: "Macedonia",
      dial_code: "+389",
      code: "MK"
    },
    {
      name: "Madagascar",
      dial_code: "+261",
      code: "MG"
    },
    {
      name: "Malawi",
      dial_code: "+265",
      code: "MW"
    },
    {
      name: "Malaysia",
      dial_code: "+60",
      code: "MY"
    },
    {
      name: "Maldives",
      dial_code: "+960",
      code: "MV"
    },
    {
      name: "Mali",
      dial_code: "+223",
      code: "ML"
    },
    {
      name: "Malta",
      dial_code: "+356",
      code: "MT"
    },
    {
      name: "Marshall Islands",
      dial_code: "+692",
      code: "MH"
    },
    {
      name: "Martinique",
      dial_code: "+596",
      code: "MQ"
    },
    {
      name: "Mauritania",
      dial_code: "+222",
      code: "MR"
    },
    {
      name: "Mauritius",
      dial_code: "+230",
      code: "MU"
    },
    {
      name: "Mayotte",
      dial_code: "+262",
      code: "YT"
    },
    {
      name: "Mexico",
      dial_code: "+52",
      code: "MX"
    },
    {
      name: "Micronesia, Federated States of Micronesia",
      dial_code: "+691",
      code: "FM"
    },
    {
      name: "Moldova",
      dial_code: "+373",
      code: "MD"
    },
    {
      name: "Monaco",
      dial_code: "+377",
      code: "MC"
    },
    {
      name: "Mongolia",
      dial_code: "+976",
      code: "MN"
    },
    {
      name: "Montenegro",
      dial_code: "+382",
      code: "ME"
    },
    {
      name: "Montserrat",
      dial_code: "+1664",
      code: "MS"
    },
    {
      name: "Morocco",
      dial_code: "+212",
      code: "MA"
    },
    {
      name: "Mozambique",
      dial_code: "+258",
      code: "MZ"
    },
    {
      name: "Myanmar",
      dial_code: "+95",
      code: "MM"
    },
    {
      name: "Namibia",
      dial_code: "+264",
      code: "NA"
    },
    {
      name: "Nauru",
      dial_code: "+674",
      code: "NR"
    },
    {
      name: "Nepal",
      dial_code: "+977",
      code: "NP"
    },
    {
      name: "Netherlands",
      dial_code: "+31",
      code: "NL"
    },
    {
      name: "Netherlands Antilles",
      dial_code: "+599",
      code: "AN"
    },
    {
      name: "New Caledonia",
      dial_code: "+687",
      code: "NC"
    },
    {
      name: "New Zealand",
      dial_code: "+64",
      code: "NZ"
    },
    {
      name: "Nicaragua",
      dial_code: "+505",
      code: "NI"
    },
    {
      name: "Niger",
      dial_code: "+227",
      code: "NE"
    },
    {
      name: "Nigeria",
      dial_code: "+234",
      code: "NG"
    },
    {
      name: "Niue",
      dial_code: "+683",
      code: "NU"
    },
    {
      name: "Norfolk Island",
      dial_code: "+672",
      code: "NF"
    },
    {
      name: "Northern Mariana Islands",
      dial_code: "+1670",
      code: "MP"
    },
    {
      name: "Norway",
      dial_code: "+47",
      code: "NO"
    },
    {
      name: "Oman",
      dial_code: "+968",
      code: "OM"
    },
    {
      name: "Pakistan",
      dial_code: "+92",
      code: "PK"
    },
    {
      name: "Palau",
      dial_code: "+680",
      code: "PW"
    },
    {
      name: "Palestinian Territory, Occupied",
      dial_code: "+970",
      code: "PS"
    },
    {
      name: "Panama",
      dial_code: "+507",
      code: "PA"
    },
    {
      name: "Papua New Guinea",
      dial_code: "+675",
      code: "PG"
    },
    {
      name: "Paraguay",
      dial_code: "+595",
      code: "PY"
    },
    {
      name: "Peru",
      dial_code: "+51",
      code: "PE"
    },
    {
      name: "Philippines",
      dial_code: "+63",
      code: "PH"
    },
    {
      name: "Pitcairn",
      dial_code: "+872",
      code: "PN"
    },
    {
      name: "Poland",
      dial_code: "+48",
      code: "PL"
    },
    {
      name: "Portugal",
      dial_code: "+351",
      code: "PT"
    },
    {
      name: "Puerto Rico",
      dial_code: "+1939",
      code: "PR"
    },
    {
      name: "Qatar",
      dial_code: "+974",
      code: "QA"
    },
    {
      name: "Romania",
      dial_code: "+40",
      code: "RO"
    },
    {
      name: "Russia",
      dial_code: "+7",
      code: "RU"
    },
    {
      name: "Rwanda",
      dial_code: "+250",
      code: "RW"
    },
    {
      name: "Reunion",
      dial_code: "+262",
      code: "RE"
    },
    {
      name: "Saint Barthelemy",
      dial_code: "+590",
      code: "BL"
    },
    {
      name: "Saint Helena, Ascension and Tristan Da Cunha",
      dial_code: "+290",
      code: "SH"
    },
    {
      name: "Saint Kitts and Nevis",
      dial_code: "+1869",
      code: "KN"
    },
    {
      name: "Saint Lucia",
      dial_code: "+1758",
      code: "LC"
    },
    {
      name: "Saint Martin",
      dial_code: "+590",
      code: "MF"
    },
    {
      name: "Saint Pierre and Miquelon",
      dial_code: "+508",
      code: "PM"
    },
    {
      name: "Saint Vincent and the Grenadines",
      dial_code: "+1784",
      code: "VC"
    },
    {
      name: "Samoa",
      dial_code: "+685",
      code: "WS"
    },
    {
      name: "San Marino",
      dial_code: "+378",
      code: "SM"
    },
    {
      name: "Sao Tome and Principe",
      dial_code: "+239",
      code: "ST"
    },
    {
      name: "Saudi Arabia",
      dial_code: "+966",
      code: "SA"
    },
    {
      name: "Senegal",
      dial_code: "+221",
      code: "SN"
    },
    {
      name: "Serbia",
      dial_code: "+381",
      code: "RS"
    },
    {
      name: "Seychelles",
      dial_code: "+248",
      code: "SC"
    },
    {
      name: "Sierra Leone",
      dial_code: "+232",
      code: "SL"
    },
    {
      name: "Singapore",
      dial_code: "+65",
      code: "SG"
    },
    {
      name: "Slovakia",
      dial_code: "+421",
      code: "SK"
    },
    {
      name: "Slovenia",
      dial_code: "+386",
      code: "SI"
    },
    {
      name: "Solomon Islands",
      dial_code: "+677",
      code: "SB"
    },
    {
      name: "Somalia",
      dial_code: "+252",
      code: "SO"
    },
    {
      name: "South Africa",
      dial_code: "+27",
      code: "ZA"
    },
    {
      name: "South Sudan",
      dial_code: "+211",
      code: "SS"
    },
    {
      name: "South Georgia and the South Sandwich Islands",
      dial_code: "+500",
      code: "GS"
    },
    {
      name: "Spain",
      dial_code: "+34",
      code: "ES"
    },
    {
      name: "Sri Lanka",
      dial_code: "+94",
      code: "LK"
    },
    {
      name: "Sudan",
      dial_code: "+249",
      code: "SD"
    },
    {
      name: "Suriname",
      dial_code: "+597",
      code: "SR"
    },
    {
      name: "Svalbard and Jan Mayen",
      dial_code: "+47",
      code: "SJ"
    },
    {
      name: "Swaziland",
      dial_code: "+268",
      code: "SZ"
    },
    {
      name: "Sweden",
      dial_code: "+46",
      code: "SE"
    },
    {
      name: "Switzerland",
      dial_code: "+41",
      code: "CH"
    },
    {
      name: "Syrian Arab Republic",
      dial_code: "+963",
      code: "SY"
    },
    {
      name: "Taiwan",
      dial_code: "+886",
      code: "TW"
    },
    {
      name: "Tajikistan",
      dial_code: "+992",
      code: "TJ"
    },
    {
      name: "Tanzania, United Republic of Tanzania",
      dial_code: "+255",
      code: "TZ"
    },
    {
      name: "Thailand",
      dial_code: "+66",
      code: "TH"
    },
    {
      name: "Timor-Leste",
      dial_code: "+670",
      code: "TL"
    },
    {
      name: "Togo",
      dial_code: "+228",
      code: "TG"
    },
    {
      name: "Tokelau",
      dial_code: "+690",
      code: "TK"
    },
    {
      name: "Tonga",
      dial_code: "+676",
      code: "TO"
    },
    {
      name: "Trinidad and Tobago",
      dial_code: "+1868",
      code: "TT"
    },
    {
      name: "Tunisia",
      dial_code: "+216",
      code: "TN"
    },
    {
      name: "Turkey",
      dial_code: "+90",
      code: "TR"
    },
    {
      name: "Turkmenistan",
      dial_code: "+993",
      code: "TM"
    },
    {
      name: "Turks and Caicos Islands",
      dial_code: "+1649",
      code: "TC"
    },
    {
      name: "Tuvalu",
      dial_code: "+688",
      code: "TV"
    },
    {
      name: "Uganda",
      dial_code: "+256",
      code: "UG"
    },
    {
      name: "Ukraine",
      dial_code: "+380",
      code: "UA"
    },
    {
      name: "United Arab Emirates",
      dial_code: "+971",
      code: "AE"
    },
    {
      name: "United Kingdom",
      dial_code: "+44",
      code: "GB"
    },
    {
      name: "United States",
      dial_code: "+1",
      code: "US"
    },
    {
      name: "Uruguay",
      dial_code: "+598",
      code: "UY"
    },
    {
      name: "Uzbekistan",
      dial_code: "+998",
      code: "UZ"
    },
    {
      name: "Vanuatu",
      dial_code: "+678",
      code: "VU"
    },
    {
      name: "Venezuela, Bolivarian Republic of Venezuela",
      dial_code: "+58",
      code: "VE"
    },
    {
      name: "Vietnam",
      dial_code: "+84",
      code: "VN"
    },
    {
      name: "Virgin Islands, British",
      dial_code: "+1284",
      code: "VG"
    },
    {
      name: "Virgin Islands, U.S.",
      dial_code: "+1340",
      code: "VI"
    },
    {
      name: "Wallis and Futuna",
      dial_code: "+681",
      code: "WF"
    },
    {
      name: "Yemen",
      dial_code: "+967",
      code: "YE"
    },
    {
      name: "Zambia",
      dial_code: "+260",
      code: "ZM"
    },
    {
      name: "Zimbabwe",
      dial_code: "+263",
      code: "ZW"
    }
  ]
};

// node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var f2 = 0;
var i2 = Array.isArray;
function u2(e3, t2, n2, o2, i3, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e3, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i3, __self: u3 };
  if ("function" == typeof e3 && (a2 = e3.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/Form.jsx
function addFormEvents(component) {
  let btnCancel = component.querySelector("#cancel-lead");
  let form = component.querySelector("form");
  let email = component.querySelector("#email");
  let phone = component.querySelector("#phone");
  if (btnCancel != null) {
    btnCancel.addEventListener("click", component);
  }
  ;
  if (form != null) {
    form.addEventListener("submit", component);
  }
  ;
  if (email != null) {
    email.addEventListener("change", component);
  }
  ;
  if (phone != null) {
    phone.addEventListener("change", component);
  }
  ;
}
var CjForm = class {
  #default = {
    name: {
      label: {
        es: "Nombre",
        en: "Name",
        fr: "Nom"
      },
      help: {
        es: "El campo Nombre es obligatorio.",
        en: "The Name field is required.",
        fr: "Il est requis de compl\xE9ter le champ correspondant au nom."
      }
    },
    function: {
      label: {
        es: "Puesto de Trabajo",
        en: "Job Position",
        fr: "Poste"
      },
      help: {
        es: "El campo Puesto de Trabajo es obligatorio.",
        en: "The Job Position field is required.",
        fr: "Le champ Poste est obligatoire."
      }
    },
    email: {
      label: {
        es: "Correo Electr\xF3nico",
        en: "e-mail",
        fr: "e-mail"
      },
      help: {
        es: "El campo Correo Electr\xF3nico es obligatorio.",
        en: "The Email field is required.",
        fr: "Le champ E-mail est obligatoire."
      },
      help2: {
        es: "El correo electr\xF3nico es invalido.",
        en: "Email is invalid.",
        fr: "Le courriel est invalide."
      }
    },
    phone: {
      label: {
        es: "Tel\xE9fono",
        en: "Phone",
        fr: "T\xE9l\xE9phone"
      },
      help: {
        es: "El campo Tel\xE9fono es obligatorio.",
        en: "The Telephone field is required.",
        fr: "Le champ T\xE9l\xE9phone est obligatoire."
      },
      help2: {
        es: "El N\xFAmero Telef\xF3nico es inv\xE1lido.",
        en: "The Telephone Number is invalid.",
        fr: "Le num\xE9ro de t\xE9l\xE9phone n'est pas valide."
      }
    },
    company: {
      label: {
        es: "Compa\xF1\xEDa",
        en: "Company",
        fr: "Entreprise"
      },
      help: {
        es: "El campo Compa\xF1ia es obligatorio.",
        en: "The Company field is required.",
        fr: "Le champ Soci\xE9t\xE9 est obligatoire."
      }
    },
    subject: {
      label: {
        es: "Asunto",
        en: "Subject",
        fr: "Objet"
      },
      help: {
        es: "El campo Asunto es obligatorio.",
        en: "The Subject field is required.",
        fr: "Le champ Objet est obligatoire."
      }
    },
    description: {
      label: {
        es: "Descripci\xF3n",
        en: "Description",
        fr: "Description"
      },
      help: {
        es: "El campo Descripci\xF3n es obligatorio.",
        en: "The Description field is required.",
        fr: "Le champ Description est obligatoire."
      }
    },
    terms: {
      text: {
        es: "Estoy de acuerdo con los",
        en: "I agree to the",
        fr: "J'accepte les"
      },
      help: {
        es: "Tienes que aceptar los T\xE9rminos y Condiciones.",
        en: "You have to accept the Terms and Conditions.",
        fr: "Vous devez accepter les termes et conditions."
      },
      required: true
    },
    termsLink: {
      text: {
        es: "t\xE9rminos y condiciones",
        en: "terms and conditions",
        fr: "termes et conditions"
      }
    },
    submit: {
      text: {
        es: "Enviar",
        en: "Submit",
        fr: "Soumettre"
      }
    },
    cancel: {
      text: {
        es: "Cancelar",
        en: "Cancel",
        fr: "Annuler"
      }
    },
    context: {
      lang: "en"
    }
  };
  constructor(props = {}, context = {}) {
    this.state = this.initState(this.#default, props);
    this.state.context = context;
  }
  initState(defValues, props) {
    if (props != void 0) {
      let state2 = Object.assign({}, defValues, props);
      if (defValues != void 0) {
        if (Object.keys(defValues).lenght != 0) {
          Object.keys(defValues).forEach((prop) => {
            if (props[prop] != void 0) {
              if (typeof props[prop] === "string" || Array.isArray(props[prop])) {
                state2[prop] = props[prop];
              } else {
                state2[prop] = Object.assign({}, defValues[prop], props[prop]);
              }
            }
          });
        }
      }
      return state2;
    } else {
      return defValues;
    }
  }
  getClassNames(defaultClass = [], optionalClasses) {
    let resultClasses = optionalClasses === void 0 ? defaultClass : [...defaultClass, ...optionalClasses];
    return resultClasses.length > 0 ? resultClasses.join(" ") : void 0;
  }
  getAnimationProps(props) {
    if (props === void 0 || props === null) {
      return {};
    }
    let attrs = { "data-animation": props.effect };
    if (props.delay != void 0) attrs["data-delay"] = props.delay;
    if (props.speed != void 0) attrs["data-speed"] = props.speed;
    if (props.repeat != void 0) attrs["data-repeat"] = props.repeat;
    return attrs;
  }
  #getFlagEmoji(countryCode) {
    const codePoints = countryCode.toUpperCase().split("").map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  }
  #getCodes() {
    const withDialCode = this.state.phoneCodes !== void 0;
    const list2 = !withDialCode ? countryCodes_default.codes : this.state.phoneCodes.map((code2) => countryCodes_default.codes.find((item) => item.code === code2)).filter(Boolean);
    return list2.map((country, i3) => /* @__PURE__ */ u2("option", { value: country.dial_code, selected: this.state.code === country.code, children: withDialCode ? `${this.#getFlagEmoji(country.code)} ${country.dial_code}` : this.#getFlagEmoji(country.code) }, i3));
  }
  render() {
    const lang = this.state.context.lang;
    return /* @__PURE__ */ u2("form", { id: this.state.id, class: this.getClassNames(["box"], this.state?.classList), ...this.getAnimationProps(this.state.form?.animation), novalidate: true, children: /* @__PURE__ */ u2("fieldset", { children: [
      this.state.name?.disabled !== true && /* @__PURE__ */ u2("div", { class: "field", ...this.getAnimationProps(this.state.name?.animation), children: [
        /* @__PURE__ */ u2("label", { class: "label", children: this.state.name?.label[lang] }),
        /* @__PURE__ */ u2("div", { class: "control", children: /* @__PURE__ */ u2("input", { id: "contact", class: "input", type: "text", placeholder: this.state.name?.placeholder?.[lang], required: this.state.name?.required === true }) }),
        /* @__PURE__ */ u2("p", { class: "help is-danger is-hidden", id: "help-contact", children: this.state.name?.help[lang] })
      ] }),
      this.state.function?.disabled !== true && /* @__PURE__ */ u2("div", { class: "field", ...this.getAnimationProps(this.state.function?.animation), children: [
        /* @__PURE__ */ u2("label", { class: "label", children: this.state.function?.label[lang] }),
        /* @__PURE__ */ u2("div", { class: "control", children: /* @__PURE__ */ u2("input", { id: "function", class: "input", type: "text", placeholder: this.state.function?.placeholder?.[lang], required: this.state.function?.required === true }) }),
        /* @__PURE__ */ u2("p", { class: "help is-danger is-hidden", id: "help-function", children: this.state.function?.help[lang] })
      ] }),
      this.state.email?.disabled !== true && /* @__PURE__ */ u2("div", { class: "field", ...this.getAnimationProps(this.state.email?.animation), children: [
        /* @__PURE__ */ u2("label", { class: "label", children: this.state.email?.label[lang] }),
        /* @__PURE__ */ u2("div", { class: "control", children: /* @__PURE__ */ u2("input", { id: "email", class: "input", type: "text", placeholder: this.state.email?.placeholder?.[lang], required: this.state.email?.required === true }) }),
        /* @__PURE__ */ u2("p", { class: "help is-danger is-hidden", id: "help-email", children: this.state.email?.help[lang] }),
        /* @__PURE__ */ u2("p", { class: "help is-danger is-hidden", id: "help2-email", children: this.state.email?.help2[lang] })
      ] }),
      this.state.phone?.disabled !== true && /* @__PURE__ */ u2("div", { class: "field", ...this.getAnimationProps(this.state.phone?.animation), children: [
        /* @__PURE__ */ u2("label", { class: "label", children: this.state.phone?.label[lang] }),
        /* @__PURE__ */ u2("div", { class: "control", children: /* @__PURE__ */ u2("div", { class: "field has-addons", children: [
          /* @__PURE__ */ u2("div", { class: "select", children: /* @__PURE__ */ u2("select", { id: "codes", children: this.#getCodes() }) }),
          /* @__PURE__ */ u2("div", { class: "control is-expanded", children: /* @__PURE__ */ u2("input", { id: "phone", class: "input", type: "text", placeholder: this.state.phone?.placeholder?.[lang], required: this.state.phone?.required === true }) })
        ] }) }),
        /* @__PURE__ */ u2("p", { class: "help is-danger is-hidden", id: "help-phone", children: this.state.phone?.help[lang] }),
        /* @__PURE__ */ u2("p", { class: "help is-danger is-hidden", id: "help2-phone", children: this.state.phone?.help2[lang] })
      ] }),
      this.state.company?.disabled !== true && /* @__PURE__ */ u2("div", { class: "field", ...this.getAnimationProps(this.state.company.animation), children: [
        /* @__PURE__ */ u2("label", { class: "label", children: this.state.company?.label[lang] }),
        /* @__PURE__ */ u2("div", { class: "control", children: /* @__PURE__ */ u2("input", { id: "company", class: "input", type: "text", placeholder: this.state.company?.placeholder?.[lang], required: this.state.company?.required === true }) }),
        /* @__PURE__ */ u2("p", { class: "help is-danger is-hidden", id: "help-company", children: this.state.company?.help[lang] })
      ] }),
      this.state.subject?.disabled !== true && /* @__PURE__ */ u2("div", { class: "field", ...this.getAnimationProps(this.state.subject.animation), children: [
        /* @__PURE__ */ u2("label", { class: "label", children: this.state.subject?.label[lang] }),
        /* @__PURE__ */ u2("div", { class: "control", children: /* @__PURE__ */ u2("input", { id: "subject", class: "input", type: "text", placeholder: this.state.subject?.placeholder?.[lang], required: this.state.subject?.required === true }) }),
        /* @__PURE__ */ u2("p", { class: "help is-danger is-hidden", id: "help-subject", children: this.state.subject?.help[lang] })
      ] }),
      this.state.description?.disabled !== true && /* @__PURE__ */ u2("div", { class: "field", ...this.getAnimationProps(this.state.description.animation), children: [
        /* @__PURE__ */ u2("label", { class: "label", children: this.state.description?.label[lang] }),
        /* @__PURE__ */ u2("div", { class: "control", children: /* @__PURE__ */ u2("textarea", { id: "description", class: "textarea has-fixed-size", placeholder: this.state.description?.placeholder?.[lang], required: this.state.description?.required === true }) }),
        /* @__PURE__ */ u2("p", { class: "help is-danger is-hidden", id: "help-description", children: this.state.description?.help[lang] })
      ] }),
      this.state.terms?.disabled !== true && /* @__PURE__ */ u2("div", { class: "field", ...this.getAnimationProps(this.state.terms.animation), children: [
        /* @__PURE__ */ u2("div", { class: "control", children: /* @__PURE__ */ u2("label", { class: "checkbox", children: [
          /* @__PURE__ */ u2("input", { id: "terms", type: "checkbox", required: this.state.terms?.required === true }),
          " ",
          this.state.terms?.text[lang],
          " ",
          /* @__PURE__ */ u2("a", { href: this.state.termsLink?.url != void 0 ? this.state.termsLink?.url : "#", children: this.state.termsLink?.text[lang] })
        ] }) }),
        /* @__PURE__ */ u2("p", { class: "help is-danger is-hidden", id: "help-terms", children: this.state.terms?.help[lang] })
      ] }),
      /* @__PURE__ */ u2("div", { class: "field is-grouped", children: [
        /* @__PURE__ */ u2("div", { class: "control", ...this.getAnimationProps(this.state.submit?.animation), children: /* @__PURE__ */ u2("button", { type: "submit", id: "submit-lead", class: this.getClassNames(["button"], this.state.submit?.classList), children: this.state.submit?.text[lang] }) }),
        /* @__PURE__ */ u2("div", { class: "control", ...this.getAnimationProps(this.state.cancel?.animation), children: /* @__PURE__ */ u2("button", { type: "button", id: "cancel-lead", class: this.getClassNames(["button"], this.state.cancel?.classList), children: this.state.cancel?.text[lang] }) })
      ] })
    ] }) });
  }
};

// node_modules/libphonenumber-js/metadata.min.json.js
var metadata_min_json_default = { "version": 4, "country_calling_codes": { "1": ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], "7": ["RU", "KZ"], "20": ["EG"], "27": ["ZA"], "30": ["GR"], "31": ["NL"], "32": ["BE"], "33": ["FR"], "34": ["ES"], "36": ["HU"], "39": ["IT", "VA"], "40": ["RO"], "41": ["CH"], "43": ["AT"], "44": ["GB", "GG", "IM", "JE"], "45": ["DK"], "46": ["SE"], "47": ["NO", "SJ"], "48": ["PL"], "49": ["DE"], "51": ["PE"], "52": ["MX"], "53": ["CU"], "54": ["AR"], "55": ["BR"], "56": ["CL"], "57": ["CO"], "58": ["VE"], "60": ["MY"], "61": ["AU", "CC", "CX"], "62": ["ID"], "63": ["PH"], "64": ["NZ"], "65": ["SG"], "66": ["TH"], "81": ["JP"], "82": ["KR"], "84": ["VN"], "86": ["CN"], "90": ["TR"], "91": ["IN"], "92": ["PK"], "93": ["AF"], "94": ["LK"], "95": ["MM"], "98": ["IR"], "211": ["SS"], "212": ["MA", "EH"], "213": ["DZ"], "216": ["TN"], "218": ["LY"], "220": ["GM"], "221": ["SN"], "222": ["MR"], "223": ["ML"], "224": ["GN"], "225": ["CI"], "226": ["BF"], "227": ["NE"], "228": ["TG"], "229": ["BJ"], "230": ["MU"], "231": ["LR"], "232": ["SL"], "233": ["GH"], "234": ["NG"], "235": ["TD"], "236": ["CF"], "237": ["CM"], "238": ["CV"], "239": ["ST"], "240": ["GQ"], "241": ["GA"], "242": ["CG"], "243": ["CD"], "244": ["AO"], "245": ["GW"], "246": ["IO"], "247": ["AC"], "248": ["SC"], "249": ["SD"], "250": ["RW"], "251": ["ET"], "252": ["SO"], "253": ["DJ"], "254": ["KE"], "255": ["TZ"], "256": ["UG"], "257": ["BI"], "258": ["MZ"], "260": ["ZM"], "261": ["MG"], "262": ["RE", "YT"], "263": ["ZW"], "264": ["NA"], "265": ["MW"], "266": ["LS"], "267": ["BW"], "268": ["SZ"], "269": ["KM"], "290": ["SH", "TA"], "291": ["ER"], "297": ["AW"], "298": ["FO"], "299": ["GL"], "350": ["GI"], "351": ["PT"], "352": ["LU"], "353": ["IE"], "354": ["IS"], "355": ["AL"], "356": ["MT"], "357": ["CY"], "358": ["FI", "AX"], "359": ["BG"], "370": ["LT"], "371": ["LV"], "372": ["EE"], "373": ["MD"], "374": ["AM"], "375": ["BY"], "376": ["AD"], "377": ["MC"], "378": ["SM"], "380": ["UA"], "381": ["RS"], "382": ["ME"], "383": ["XK"], "385": ["HR"], "386": ["SI"], "387": ["BA"], "389": ["MK"], "420": ["CZ"], "421": ["SK"], "423": ["LI"], "500": ["FK"], "501": ["BZ"], "502": ["GT"], "503": ["SV"], "504": ["HN"], "505": ["NI"], "506": ["CR"], "507": ["PA"], "508": ["PM"], "509": ["HT"], "590": ["GP", "BL", "MF"], "591": ["BO"], "592": ["GY"], "593": ["EC"], "594": ["GF"], "595": ["PY"], "596": ["MQ"], "597": ["SR"], "598": ["UY"], "599": ["CW", "BQ"], "670": ["TL"], "672": ["NF"], "673": ["BN"], "674": ["NR"], "675": ["PG"], "676": ["TO"], "677": ["SB"], "678": ["VU"], "679": ["FJ"], "680": ["PW"], "681": ["WF"], "682": ["CK"], "683": ["NU"], "685": ["WS"], "686": ["KI"], "687": ["NC"], "688": ["TV"], "689": ["PF"], "690": ["TK"], "691": ["FM"], "692": ["MH"], "850": ["KP"], "852": ["HK"], "853": ["MO"], "855": ["KH"], "856": ["LA"], "880": ["BD"], "886": ["TW"], "960": ["MV"], "961": ["LB"], "962": ["JO"], "963": ["SY"], "964": ["IQ"], "965": ["KW"], "966": ["SA"], "967": ["YE"], "968": ["OM"], "970": ["PS"], "971": ["AE"], "972": ["IL"], "973": ["BH"], "974": ["QA"], "975": ["BT"], "976": ["MN"], "977": ["NP"], "992": ["TJ"], "993": ["TM"], "994": ["AZ"], "995": ["GE"], "996": ["KG"], "998": ["UZ"] }, "countries": { "AC": ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], "AD": ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], "AE": ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], "AF": ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], "AG": ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], "AI": ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], "AL": ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], "AM": ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], "AO": ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], "AR": ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], "AS": ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], "AT": ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], "AU": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|7(?:[013-57-9]\\d|2[0-8]))\\d|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90)))\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|3\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "AW": ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], "AX": ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], "AZ": ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], "BA": ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], "BB": ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], "BD": ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], "BE": ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], "BF": ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]]], "BG": ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], "BH": ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], "BI": ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], "BJ": ["229", "00", "[24-689]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]]], "BL": ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]], "BM": ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], "BN": ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], "BO": ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], "BQ": ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], "BR": ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], "BS": ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], "BT": ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]], "BW": ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], "BY": ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], "BZ": ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], "CA": ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|90[25])[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], "CC": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "CD": ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], "CF": ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], "CG": ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], "CH": ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], "CI": ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], "CK": ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], "CL": ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], "CM": ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], "CN": ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "10(?:10|9[56])|2[0-57-9](?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], "CO": ["57", "00(?:4(?:[14]4|56)|[579])", "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", [10, 11], [["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], "CR": ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], "CU": ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], "CV": ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], "CW": ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], "CX": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "CY": ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], "CZ": ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], "DE": ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|31)"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], "DJ": ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], "DK": ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], "DM": ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], "DO": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], "DZ": ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], "EC": ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], "EE": ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], "EG": ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], "EH": ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"], "ER": ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], "ES": ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], "ET": ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], "FI": ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:1[3-79]|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], "FJ": ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "FK": ["500", "00", "[2-7]\\d{4}", [5]], "FM": ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], "FO": ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], "FR": ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], "GA": ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], "GB": ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], "GD": ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], "GE": ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], "GF": ["594", "00", "[56]94\\d{6}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], "GG": ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], "GH": ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"], "GI": ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], "GL": ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], "GM": ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], "GN": ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], "GP": ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]], "GQ": ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], "GR": ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], "GT": ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], "GU": ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], "GW": ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], "GY": ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], "HK": ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "HN": ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], "HR": ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], "HT": ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], "HU": ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], "ID": ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], "IE": ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "IL": ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], "IM": ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"], "IN": ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], "IO": ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], "IQ": ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], "IR": ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], "IS": ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "IT": ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], "JE": ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], "JM": ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], "JO": ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], "JP": ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], "0", 0, "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1"], "KE": ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], "KG": ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "KH": ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "KI": ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], "KM": ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], "KN": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], "KP": ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], "KR": ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], "KW": ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], "KY": ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], "KZ": ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"], "LA": ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], "LB": ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], "LC": ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], "LI": ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], "LK": ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], "LR": ["231", "00", "(?:[245]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"], "LS": ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], "LT": ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]], "0", 0, "[08]"], "LU": ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], "LV": ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]], "LY": ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], "MA": ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-4]|5[01]|8[0-3]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], "MC": ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], "MD": ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], "ME": ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], "MF": ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]], "MG": ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], "MH": ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], "MK": ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], "ML": ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], "MM": ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], "MN": ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], "MO": ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], "MP": ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], "MQ": ["596", "00", "596\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "MR": ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], "MS": ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], "MT": ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], "MU": ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], "MV": ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "MW": ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], "MX": ["52", "0[09]", "[2-9]\\d{9}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "MY": ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], "MZ": ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], "NA": ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], "NC": ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], "NE": ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]]], "NF": ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], "NG": ["234", "009", "2[0-24-9]\\d{8}|[78]\\d{10,13}|[7-9]\\d{9}|[1-9]\\d{7}|[124-7]\\d{6}", [7, 8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-6]|7(?:0[0-689]|[1-79])|8[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], "NI": ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], "NL": ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], "NO": ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], "NP": ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], "NR": ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]]], "NU": ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], "NZ": ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], "OM": ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], "PA": ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], "PE": ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], "PF": ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], "PG": ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "PH": ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], "PK": ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], "PL": ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], "PM": ["508", "00", "[45]\\d{5}|(?:708|80\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "PR": ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], "PS": ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "PT": ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], "PW": ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], "PY": ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], "QA": ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], "RE": ["262", "00", "(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"], ["69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-5]|76(?:2[278]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], "RO": ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], "RS": ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], "RU": ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"], "RW": ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], "SA": ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], "SB": ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], "SC": ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "SD": ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], "SE": ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], "SG": ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], "SH": ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], "SI": ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], "SJ": ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], "SK": ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"], "SL": ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], "SM": ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], "SN": ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], "SO": ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|77|9[2-9]"]]], "0"], "SR": ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]], "SS": ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], "ST": ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], "SV": ["503", "00", "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], "SX": ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], "SY": ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0"], "SZ": ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], "TA": ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], "TC": ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], "TD": ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "TG": ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], "TH": ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "TJ": ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], "TK": ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], "TL": ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], "TM": ["993", "810", "(?:[1-6]\\d|71)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], "TN": ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], "TO": ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], "TR": ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], "TT": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], "TV": ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], "TW": ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], "TZ": ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], "UA": ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], "UG": ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], "US": ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:3052(?:0[0-8]|[1-9]\\d)|5056(?:[0-35-9]\\d|4[468])|7302[0-4]\\d)\\d{4}|(?:305[3-9]|472[24]|505[2-57-9]|7306|983[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[013569]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["305209\\d{4}"]]], "UY": ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], "UZ": ["998", "00", "(?:20|33|[5-79]\\d|88)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]]], "VA": ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"], "VC": ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], "VE": ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], "VG": ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], "VI": ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], "VN": ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], "VU": ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], "WF": ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], "WS": ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], "XK": ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"], "YE": ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], "YT": ["262", "00", "(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"], ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], "ZA": ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], "ZM": ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0"], "ZW": ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, "nonGeographic": { "800": ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], "808": ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], "870": ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]], "878": ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], "881": ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], "882": ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], "883": ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], "888": ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], "979": ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };

// node_modules/libphonenumber-js/min/exports/withMetadataArgument.js
function withMetadataArgument(func, _arguments) {
  var args = Array.prototype.slice.call(_arguments);
  args.push(metadata_min_json_default);
  return func.apply(this, args);
}

// node_modules/libphonenumber-js/es6/ParseError.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _defineProperties(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result2;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result2 = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result2 = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result2);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2)) return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a2 = [null];
      a2.push.apply(a2, args2);
      var Constructor = Function.bind.apply(Parent2, a2);
      var instance = new Constructor();
      if (Class2) _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e3) {
    return false;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o2, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
    o3.__proto__ = p3;
    return o3;
  };
  return _setPrototypeOf(o2, p2);
}
function _getPrototypeOf(o2) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf(o2);
}
var ParseError = /* @__PURE__ */ function(_Error) {
  _inherits(ParseError2, _Error);
  var _super = _createSuper(ParseError2);
  function ParseError2(code2) {
    var _this;
    _classCallCheck(this, ParseError2);
    _this = _super.call(this, code2);
    Object.setPrototypeOf(_assertThisInitialized(_this), ParseError2.prototype);
    _this.name = _this.constructor.name;
    return _this;
  }
  return _createClass(ParseError2);
}(/* @__PURE__ */ _wrapNativeSuper(Error));

// node_modules/libphonenumber-js/es6/constants.js
var MIN_LENGTH_FOR_NSN = 2;
var MAX_LENGTH_FOR_NSN = 17;
var MAX_LENGTH_COUNTRY_CODE = 3;
var VALID_DIGITS = "0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9";
var DASHES = "-\u2010-\u2015\u2212\u30FC\uFF0D";
var SLASHES = "\uFF0F/";
var DOTS = "\uFF0E.";
var WHITESPACE = " \xA0\xAD\u200B\u2060\u3000";
var BRACKETS = "()\uFF08\uFF09\uFF3B\uFF3D\\[\\]";
var TILDES = "~\u2053\u223C\uFF5E";
var VALID_PUNCTUATION = "".concat(DASHES).concat(SLASHES).concat(DOTS).concat(WHITESPACE).concat(BRACKETS).concat(TILDES);
var PLUS_CHARS = "+\uFF0B";

// node_modules/libphonenumber-js/es6/tools/semver-compare.js
function semver_compare_default(a2, b2) {
  a2 = a2.split("-");
  b2 = b2.split("-");
  var pa = a2[0].split(".");
  var pb = b2[0].split(".");
  for (var i3 = 0; i3 < 3; i3++) {
    var na = Number(pa[i3]);
    var nb = Number(pb[i3]);
    if (na > nb) return 1;
    if (nb > na) return -1;
    if (!isNaN(na) && isNaN(nb)) return 1;
    if (isNaN(na) && !isNaN(nb)) return -1;
  }
  if (a2[1] && b2[1]) {
    return a2[1] > b2[1] ? 1 : a2[1] < b2[1] ? -1 : 0;
  }
  return !a2[1] && b2[1] ? 1 : a2[1] && !b2[1] ? -1 : 0;
}

// node_modules/libphonenumber-js/es6/helpers/isObject.js
var objectConstructor = {}.constructor;
function isObject(object) {
  return object !== void 0 && object !== null && object.constructor === objectConstructor;
}

// node_modules/libphonenumber-js/es6/metadata.js
function _typeof2(obj) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof2(obj);
}
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties2(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties2(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var V3 = "1.2.0";
var V4 = "1.7.35";
var DEFAULT_EXT_PREFIX = " ext. ";
var CALLING_CODE_REG_EXP = /^\d+$/;
var Metadata = /* @__PURE__ */ function() {
  function Metadata2(metadata) {
    _classCallCheck2(this, Metadata2);
    validateMetadata(metadata);
    this.metadata = metadata;
    setVersion.call(this, metadata);
  }
  _createClass2(Metadata2, [{
    key: "getCountries",
    value: function getCountries() {
      return Object.keys(this.metadata.countries).filter(function(_2) {
        return _2 !== "001";
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function getCountryMetadata(countryCode) {
      return this.metadata.countries[countryCode];
    }
  }, {
    key: "nonGeographic",
    value: function nonGeographic() {
      if (this.v1 || this.v2 || this.v3) return;
      return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function hasCountry(country) {
      return this.getCountryMetadata(country) !== void 0;
    }
  }, {
    key: "hasCallingCode",
    value: function hasCallingCode(callingCode) {
      if (this.getCountryCodesForCallingCode(callingCode)) {
        return true;
      }
      if (this.nonGeographic()) {
        if (this.nonGeographic()[callingCode]) {
          return true;
        }
      } else {
        var countryCodes = this.countryCallingCodes()[callingCode];
        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === "001") {
          return true;
        }
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function isNonGeographicCallingCode(callingCode) {
      if (this.nonGeographic()) {
        return this.nonGeographic()[callingCode] ? true : false;
      } else {
        return this.getCountryCodesForCallingCode(callingCode) ? false : true;
      }
    }
    // Deprecated.
  }, {
    key: "country",
    value: function country(countryCode) {
      return this.selectNumberingPlan(countryCode);
    }
  }, {
    key: "selectNumberingPlan",
    value: function selectNumberingPlan(countryCode, callingCode) {
      if (countryCode && CALLING_CODE_REG_EXP.test(countryCode)) {
        callingCode = countryCode;
        countryCode = null;
      }
      if (countryCode && countryCode !== "001") {
        if (!this.hasCountry(countryCode)) {
          throw new Error("Unknown country: ".concat(countryCode));
        }
        this.numberingPlan = new NumberingPlan(this.getCountryMetadata(countryCode), this);
      } else if (callingCode) {
        if (!this.hasCallingCode(callingCode)) {
          throw new Error("Unknown calling code: ".concat(callingCode));
        }
        this.numberingPlan = new NumberingPlan(this.getNumberingPlanMetadata(callingCode), this);
      } else {
        this.numberingPlan = void 0;
      }
      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function getCountryCodesForCallingCode(callingCode) {
      var countryCodes = this.countryCallingCodes()[callingCode];
      if (countryCodes) {
        if (countryCodes.length === 1 && countryCodes[0].length === 3) {
          return;
        }
        return countryCodes;
      }
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function getCountryCodeForCallingCode(callingCode) {
      var countryCodes = this.getCountryCodesForCallingCode(callingCode);
      if (countryCodes) {
        return countryCodes[0];
      }
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function getNumberingPlanMetadata(callingCode) {
      var countryCode = this.getCountryCodeForCallingCode(callingCode);
      if (countryCode) {
        return this.getCountryMetadata(countryCode);
      }
      if (this.nonGeographic()) {
        var metadata = this.nonGeographic()[callingCode];
        if (metadata) {
          return metadata;
        }
      } else {
        var countryCodes = this.countryCallingCodes()[callingCode];
        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === "001") {
          return this.metadata.countries["001"];
        }
      }
    }
    // Deprecated.
  }, {
    key: "countryCallingCode",
    value: function countryCallingCode() {
      return this.numberingPlan.callingCode();
    }
    // Deprecated.
  }, {
    key: "IDDPrefix",
    value: function IDDPrefix() {
      return this.numberingPlan.IDDPrefix();
    }
    // Deprecated.
  }, {
    key: "defaultIDDPrefix",
    value: function defaultIDDPrefix() {
      return this.numberingPlan.defaultIDDPrefix();
    }
    // Deprecated.
  }, {
    key: "nationalNumberPattern",
    value: function nationalNumberPattern() {
      return this.numberingPlan.nationalNumberPattern();
    }
    // Deprecated.
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      return this.numberingPlan.possibleLengths();
    }
    // Deprecated.
  }, {
    key: "formats",
    value: function formats() {
      return this.numberingPlan.formats();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixForParsing",
    value: function nationalPrefixForParsing() {
      return this.numberingPlan.nationalPrefixForParsing();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixTransformRule",
    value: function nationalPrefixTransformRule() {
      return this.numberingPlan.nationalPrefixTransformRule();
    }
    // Deprecated.
  }, {
    key: "leadingDigits",
    value: function leadingDigits() {
      return this.numberingPlan.leadingDigits();
    }
    // Deprecated.
  }, {
    key: "hasTypes",
    value: function hasTypes() {
      return this.numberingPlan.hasTypes();
    }
    // Deprecated.
  }, {
    key: "type",
    value: function type(_type) {
      return this.numberingPlan.type(_type);
    }
    // Deprecated.
  }, {
    key: "ext",
    value: function ext() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function countryCallingCodes() {
      if (this.v1) return this.metadata.country_phone_code_to_countries;
      return this.metadata.country_calling_codes;
    }
    // Deprecated.
  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function chooseCountryByCountryCallingCode(callingCode) {
      return this.selectNumberingPlan(callingCode);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function hasSelectedNumberingPlan() {
      return this.numberingPlan !== void 0;
    }
  }]);
  return Metadata2;
}();
var NumberingPlan = /* @__PURE__ */ function() {
  function NumberingPlan2(metadata, globalMetadataObject) {
    _classCallCheck2(this, NumberingPlan2);
    this.globalMetadataObject = globalMetadataObject;
    this.metadata = metadata;
    setVersion.call(this, globalMetadataObject.metadata);
  }
  _createClass2(NumberingPlan2, [{
    key: "callingCode",
    value: function callingCode() {
      return this.metadata[0];
    }
    // Formatting information for regions which share
    // a country calling code is contained by only one region
    // for performance reasons. For example, for NANPA region
    // ("North American Numbering Plan Administration",
    //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
    // it will be contained in the metadata for `US`.
  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function getDefaultCountryMetadataForRegion() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }
    // Is always present.
  }, {
    key: "IDDPrefix",
    value: function IDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[1];
    }
    // Is only present when a country supports multiple IDD prefixes.
  }, {
    key: "defaultIDDPrefix",
    value: function defaultIDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function nationalNumberPattern() {
      if (this.v1 || this.v2) return this.metadata[1];
      return this.metadata[2];
    }
    // "possible length" data is always present in Google's metadata.
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      if (this.v1) return;
      return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function _getFormats(metadata) {
      return metadata[this.v1 ? 2 : this.v2 ? 3 : 4];
    }
    // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "formats",
    value: function formats() {
      var _this = this;
      var formats2 = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return formats2.map(function(_2) {
        return new Format(_2, _this);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function nationalPrefix() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function _getNationalPrefixFormattingRule(metadata) {
      return metadata[this.v1 ? 4 : this.v2 ? 5 : 6];
    }
    // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixFormattingRule",
    value: function nationalPrefixFormattingRule() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function _nationalPrefixForParsing() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function nationalPrefixForParsing() {
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function nationalPrefixTransformRule() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function _getNationalPrefixIsOptionalWhenFormatting() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    }
    // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "leadingDigits",
    value: function leadingDigits() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function types() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function hasTypes() {
      if (this.types() && this.types().length === 0) {
        return false;
      }
      return !!this.types();
    }
  }, {
    key: "type",
    value: function type(_type2) {
      if (this.hasTypes() && getType(this.types(), _type2)) {
        return new Type(getType(this.types(), _type2), this);
      }
    }
  }, {
    key: "ext",
    value: function ext() {
      if (this.v1 || this.v2) return DEFAULT_EXT_PREFIX;
      return this.metadata[13] || DEFAULT_EXT_PREFIX;
    }
  }]);
  return NumberingPlan2;
}();
var Format = /* @__PURE__ */ function() {
  function Format2(format, metadata) {
    _classCallCheck2(this, Format2);
    this._format = format;
    this.metadata = metadata;
  }
  _createClass2(Format2, [{
    key: "pattern",
    value: function pattern() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function format() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function leadingDigitsPatterns() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function nationalPrefixFormattingRule() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function nationalPrefixIsMandatoryWhenFormattingInNationalFormat() {
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
    // Checks whether national prefix formatting rule contains national prefix.
  }, {
    key: "usesNationalPrefix",
    value: function usesNationalPrefix() {
      return this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !FIRST_GROUP_ONLY_PREFIX_PATTERN.test(this.nationalPrefixFormattingRule()) ? true : false;
    }
  }, {
    key: "internationalFormat",
    value: function internationalFormat() {
      return this._format[5] || this.format();
    }
  }]);
  return Format2;
}();
var FIRST_GROUP_ONLY_PREFIX_PATTERN = /^\(?\$1\)?$/;
var Type = /* @__PURE__ */ function() {
  function Type2(type, metadata) {
    _classCallCheck2(this, Type2);
    this.type = type;
    this.metadata = metadata;
  }
  _createClass2(Type2, [{
    key: "pattern",
    value: function pattern() {
      if (this.metadata.v1) return this.type;
      return this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      if (this.metadata.v1) return;
      return this.type[1] || this.metadata.possibleLengths();
    }
  }]);
  return Type2;
}();
function getType(types, type) {
  switch (type) {
    case "FIXED_LINE":
      return types[0];
    case "MOBILE":
      return types[1];
    case "TOLL_FREE":
      return types[2];
    case "PREMIUM_RATE":
      return types[3];
    case "PERSONAL_NUMBER":
      return types[4];
    case "VOICEMAIL":
      return types[5];
    case "UAN":
      return types[6];
    case "PAGER":
      return types[7];
    case "VOIP":
      return types[8];
    case "SHARED_COST":
      return types[9];
  }
}
function validateMetadata(metadata) {
  if (!metadata) {
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  }
  if (!isObject(metadata) || !isObject(metadata.countries)) {
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(isObject(metadata) ? "an object of shape: { " + Object.keys(metadata).join(", ") + " }" : "a " + typeOf(metadata) + ": " + metadata, "."));
  }
}
var typeOf = function typeOf2(_2) {
  return _typeof2(_2);
};
function getCountryCallingCode(country, metadata) {
  metadata = new Metadata(metadata);
  if (metadata.hasCountry(country)) {
    return metadata.country(country).countryCallingCode();
  }
  throw new Error("Unknown country: ".concat(country));
}
function isSupportedCountry(country, metadata) {
  return metadata.countries.hasOwnProperty(country);
}
function setVersion(metadata) {
  var version = metadata.version;
  if (typeof version === "number") {
    this.v1 = version === 1;
    this.v2 = version === 2;
    this.v3 = version === 3;
    this.v4 = version === 4;
  } else {
    if (!version) {
      this.v1 = true;
    } else if (semver_compare_default(version, V3) === -1) {
      this.v2 = true;
    } else if (semver_compare_default(version, V4) === -1) {
      this.v3 = true;
    } else {
      this.v4 = true;
    }
  }
}

// node_modules/libphonenumber-js/es6/helpers/extension/createExtensionPattern.js
var RFC3966_EXTN_PREFIX = ";ext=";
var getExtensionDigitsPattern = function getExtensionDigitsPattern2(maxLength) {
  return "([".concat(VALID_DIGITS, "]{1,").concat(maxLength, "})");
};
function createExtensionPattern(purpose) {
  var extLimitAfterExplicitLabel = "20";
  var extLimitAfterLikelyLabel = "15";
  var extLimitAfterAmbiguousChar = "9";
  var extLimitWhenNotSure = "6";
  var possibleSeparatorsBetweenNumberAndExtLabel = "[ \xA0\\t,]*";
  var possibleCharsAfterExtLabel = "[:\\.\uFF0E]?[ \xA0\\t,-]*";
  var optionalExtnSuffix = "#?";
  var explicitExtLabels = "(?:e?xt(?:ensi(?:o\u0301?|\xF3))?n?|\uFF45?\uFF58\uFF54\uFF4E?|\u0434\u043E\u0431|anexo)";
  var ambiguousExtLabels = "(?:[x\uFF58#\uFF03~\uFF5E]|int|\uFF49\uFF4E\uFF54)";
  var ambiguousSeparator = "[- ]+";
  var possibleSeparatorsNumberExtLabelNoComma = "[ \xA0\\t]*";
  var autoDiallingAndExtLabelsFound = "(?:,{2}|;)";
  var rfcExtn = RFC3966_EXTN_PREFIX + getExtensionDigitsPattern(extLimitAfterExplicitLabel);
  var explicitExtn = possibleSeparatorsBetweenNumberAndExtLabel + explicitExtLabels + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterExplicitLabel) + optionalExtnSuffix;
  var ambiguousExtn = possibleSeparatorsBetweenNumberAndExtLabel + ambiguousExtLabels + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix;
  var americanStyleExtnWithSuffix = ambiguousSeparator + getExtensionDigitsPattern(extLimitWhenNotSure) + "#";
  var autoDiallingExtn = possibleSeparatorsNumberExtLabelNoComma + autoDiallingAndExtLabelsFound + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterLikelyLabel) + optionalExtnSuffix;
  var onlyCommasExtn = possibleSeparatorsNumberExtLabelNoComma + "(?:,)+" + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix;
  return rfcExtn + "|" + explicitExtn + "|" + ambiguousExtn + "|" + americanStyleExtnWithSuffix + "|" + autoDiallingExtn + "|" + onlyCommasExtn;
}

// node_modules/libphonenumber-js/es6/helpers/isViablePhoneNumber.js
var MIN_LENGTH_PHONE_NUMBER_PATTERN = "[" + VALID_DIGITS + "]{" + MIN_LENGTH_FOR_NSN + "}";
var VALID_PHONE_NUMBER = "[" + PLUS_CHARS + "]{0,1}(?:[" + VALID_PUNCTUATION + "]*[" + VALID_DIGITS + "]){3,}[" + VALID_PUNCTUATION + VALID_DIGITS + "]*";
var VALID_PHONE_NUMBER_START_REG_EXP = new RegExp("^[" + PLUS_CHARS + "]{0,1}(?:[" + VALID_PUNCTUATION + "]*[" + VALID_DIGITS + "]){1,2}$", "i");
var VALID_PHONE_NUMBER_WITH_EXTENSION = VALID_PHONE_NUMBER + // Phone number extensions
"(?:" + createExtensionPattern() + ")?";
var VALID_PHONE_NUMBER_PATTERN = new RegExp(
  // Either a short two-digit-only phone number
  "^" + MIN_LENGTH_PHONE_NUMBER_PATTERN + "$|^" + VALID_PHONE_NUMBER_WITH_EXTENSION + "$",
  "i"
);
function isViablePhoneNumber(number) {
  return number.length >= MIN_LENGTH_FOR_NSN && VALID_PHONE_NUMBER_PATTERN.test(number);
}
function isViablePhoneNumberStart(number) {
  return VALID_PHONE_NUMBER_START_REG_EXP.test(number);
}

// node_modules/libphonenumber-js/es6/helpers/extension/extractExtension.js
var EXTN_PATTERN = new RegExp("(?:" + createExtensionPattern() + ")$", "i");
function extractExtension(number) {
  var start = number.search(EXTN_PATTERN);
  if (start < 0) {
    return {};
  }
  var numberWithoutExtension = number.slice(0, start);
  var matches = number.match(EXTN_PATTERN);
  var i3 = 1;
  while (i3 < matches.length) {
    if (matches[i3]) {
      return {
        number: numberWithoutExtension,
        ext: matches[i3]
      };
    }
    i3++;
  }
}

// node_modules/libphonenumber-js/es6/helpers/parseDigits.js
var DIGITS = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "\uFF10": "0",
  // Fullwidth digit 0
  "\uFF11": "1",
  // Fullwidth digit 1
  "\uFF12": "2",
  // Fullwidth digit 2
  "\uFF13": "3",
  // Fullwidth digit 3
  "\uFF14": "4",
  // Fullwidth digit 4
  "\uFF15": "5",
  // Fullwidth digit 5
  "\uFF16": "6",
  // Fullwidth digit 6
  "\uFF17": "7",
  // Fullwidth digit 7
  "\uFF18": "8",
  // Fullwidth digit 8
  "\uFF19": "9",
  // Fullwidth digit 9
  "\u0660": "0",
  // Arabic-indic digit 0
  "\u0661": "1",
  // Arabic-indic digit 1
  "\u0662": "2",
  // Arabic-indic digit 2
  "\u0663": "3",
  // Arabic-indic digit 3
  "\u0664": "4",
  // Arabic-indic digit 4
  "\u0665": "5",
  // Arabic-indic digit 5
  "\u0666": "6",
  // Arabic-indic digit 6
  "\u0667": "7",
  // Arabic-indic digit 7
  "\u0668": "8",
  // Arabic-indic digit 8
  "\u0669": "9",
  // Arabic-indic digit 9
  "\u06F0": "0",
  // Eastern-Arabic digit 0
  "\u06F1": "1",
  // Eastern-Arabic digit 1
  "\u06F2": "2",
  // Eastern-Arabic digit 2
  "\u06F3": "3",
  // Eastern-Arabic digit 3
  "\u06F4": "4",
  // Eastern-Arabic digit 4
  "\u06F5": "5",
  // Eastern-Arabic digit 5
  "\u06F6": "6",
  // Eastern-Arabic digit 6
  "\u06F7": "7",
  // Eastern-Arabic digit 7
  "\u06F8": "8",
  // Eastern-Arabic digit 8
  "\u06F9": "9"
  // Eastern-Arabic digit 9
};
function parseDigit(character) {
  return DIGITS[character];
}

// node_modules/libphonenumber-js/es6/parseIncompletePhoneNumber.js
function _createForOfIteratorHelperLoose(o2, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
  if (it) return (it = it.call(o2)).next.bind(it);
  if (Array.isArray(o2) || (it = _unsupportedIterableToArray(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
    if (it) o2 = it;
    var i3 = 0;
    return function() {
      if (i3 >= o2.length) return { done: true };
      return { done: false, value: o2[i3++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o2, minLen) {
  if (!o2) return;
  if (typeof o2 === "string") return _arrayLikeToArray(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor) n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray(o2, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
    arr2[i3] = arr[i3];
  }
  return arr2;
}
function parseIncompletePhoneNumber(string) {
  var result2 = "";
  for (var _iterator = _createForOfIteratorHelperLoose(string.split("")), _step; !(_step = _iterator()).done; ) {
    var character = _step.value;
    result2 += parsePhoneNumberCharacter(character, result2) || "";
  }
  return result2;
}
function parsePhoneNumberCharacter(character, prevParsedCharacters, emitEvent) {
  if (character === "+") {
    if (prevParsedCharacters) {
      if (typeof emitEvent === "function") {
        emitEvent("end");
      }
      return;
    }
    return "+";
  }
  return parseDigit(character);
}

// node_modules/libphonenumber-js/es6/helpers/mergeArrays.js
function _createForOfIteratorHelperLoose2(o2, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
  if (it) return (it = it.call(o2)).next.bind(it);
  if (Array.isArray(o2) || (it = _unsupportedIterableToArray2(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
    if (it) o2 = it;
    var i3 = 0;
    return function() {
      if (i3 >= o2.length) return { done: true };
      return { done: false, value: o2[i3++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o2, minLen) {
  if (!o2) return;
  if (typeof o2 === "string") return _arrayLikeToArray2(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor) n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray2(o2, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
    arr2[i3] = arr[i3];
  }
  return arr2;
}
function mergeArrays(a2, b2) {
  var merged = a2.slice();
  for (var _iterator = _createForOfIteratorHelperLoose2(b2), _step; !(_step = _iterator()).done; ) {
    var element = _step.value;
    if (a2.indexOf(element) < 0) {
      merged.push(element);
    }
  }
  return merged.sort(function(a3, b3) {
    return a3 - b3;
  });
}

// node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js
function checkNumberLength(nationalNumber, metadata) {
  return checkNumberLengthForType(nationalNumber, void 0, metadata);
}
function checkNumberLengthForType(nationalNumber, type, metadata) {
  var type_info = metadata.type(type);
  var possible_lengths = type_info && type_info.possibleLengths() || metadata.possibleLengths();
  if (!possible_lengths) {
    return "IS_POSSIBLE";
  }
  if (type === "FIXED_LINE_OR_MOBILE") {
    if (!metadata.type("FIXED_LINE")) {
      return checkNumberLengthForType(nationalNumber, "MOBILE", metadata);
    }
    var mobile_type = metadata.type("MOBILE");
    if (mobile_type) {
      possible_lengths = mergeArrays(possible_lengths, mobile_type.possibleLengths());
    }
  } else if (type && !type_info) {
    return "INVALID_LENGTH";
  }
  var actual_length = nationalNumber.length;
  var minimum_length = possible_lengths[0];
  if (minimum_length === actual_length) {
    return "IS_POSSIBLE";
  }
  if (minimum_length > actual_length) {
    return "TOO_SHORT";
  }
  if (possible_lengths[possible_lengths.length - 1] < actual_length) {
    return "TOO_LONG";
  }
  return possible_lengths.indexOf(actual_length, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}

// node_modules/libphonenumber-js/es6/isPossible.js
function isPossiblePhoneNumber(input, options, metadata) {
  if (options === void 0) {
    options = {};
  }
  metadata = new Metadata(metadata);
  if (options.v2) {
    if (!input.countryCallingCode) {
      throw new Error("Invalid phone number object passed");
    }
    metadata.selectNumberingPlan(input.countryCallingCode);
  } else {
    if (!input.phone) {
      return false;
    }
    if (input.country) {
      if (!metadata.hasCountry(input.country)) {
        throw new Error("Unknown country: ".concat(input.country));
      }
      metadata.country(input.country);
    } else {
      if (!input.countryCallingCode) {
        throw new Error("Invalid phone number object passed");
      }
      metadata.selectNumberingPlan(input.countryCallingCode);
    }
  }
  if (metadata.possibleLengths()) {
    return isPossibleNumber(input.phone || input.nationalNumber, metadata);
  } else {
    if (input.countryCallingCode && metadata.isNonGeographicCallingCode(input.countryCallingCode)) {
      return true;
    } else {
      throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
    }
  }
}
function isPossibleNumber(nationalNumber, metadata) {
  switch (checkNumberLength(nationalNumber, metadata)) {
    case "IS_POSSIBLE":
      return true;
    // This library ignores "local-only" phone numbers (for simplicity).
    // See the readme for more info on what are "local-only" phone numbers.
    // case 'IS_POSSIBLE_LOCAL_ONLY':
    // 	return !isInternational
    default:
      return false;
  }
}

// node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js
function matchesEntirely(text2, regular_expression) {
  text2 = text2 || "";
  return new RegExp("^(?:" + regular_expression + ")$").test(text2);
}

// node_modules/libphonenumber-js/es6/helpers/getNumberType.js
function _createForOfIteratorHelperLoose3(o2, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
  if (it) return (it = it.call(o2)).next.bind(it);
  if (Array.isArray(o2) || (it = _unsupportedIterableToArray3(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
    if (it) o2 = it;
    var i3 = 0;
    return function() {
      if (i3 >= o2.length) return { done: true };
      return { done: false, value: o2[i3++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o2, minLen) {
  if (!o2) return;
  if (typeof o2 === "string") return _arrayLikeToArray3(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor) n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray3(o2, minLen);
}
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
    arr2[i3] = arr[i3];
  }
  return arr2;
}
var NON_FIXED_LINE_PHONE_TYPES = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function getNumberType(input, options, metadata) {
  options = options || {};
  if (!input.country && !input.countryCallingCode) {
    return;
  }
  metadata = new Metadata(metadata);
  metadata.selectNumberingPlan(input.country, input.countryCallingCode);
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
  if (!matchesEntirely(nationalNumber, metadata.nationalNumberPattern())) {
    return;
  }
  if (isNumberTypeEqualTo(nationalNumber, "FIXED_LINE", metadata)) {
    if (metadata.type("MOBILE") && metadata.type("MOBILE").pattern() === "") {
      return "FIXED_LINE_OR_MOBILE";
    }
    if (!metadata.type("MOBILE")) {
      return "FIXED_LINE_OR_MOBILE";
    }
    if (isNumberTypeEqualTo(nationalNumber, "MOBILE", metadata)) {
      return "FIXED_LINE_OR_MOBILE";
    }
    return "FIXED_LINE";
  }
  for (var _iterator = _createForOfIteratorHelperLoose3(NON_FIXED_LINE_PHONE_TYPES), _step; !(_step = _iterator()).done; ) {
    var type = _step.value;
    if (isNumberTypeEqualTo(nationalNumber, type, metadata)) {
      return type;
    }
  }
}
function isNumberTypeEqualTo(nationalNumber, type, metadata) {
  type = metadata.type(type);
  if (!type || !type.pattern()) {
    return false;
  }
  if (type.possibleLengths() && type.possibleLengths().indexOf(nationalNumber.length) < 0) {
    return false;
  }
  return matchesEntirely(nationalNumber, type.pattern());
}

// node_modules/libphonenumber-js/es6/isValid.js
function isValidNumber(input, options, metadata) {
  options = options || {};
  metadata = new Metadata(metadata);
  metadata.selectNumberingPlan(input.country, input.countryCallingCode);
  if (metadata.hasTypes()) {
    return getNumberType(input, options, metadata.metadata) !== void 0;
  }
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
  return matchesEntirely(nationalNumber, metadata.nationalNumberPattern());
}

// node_modules/libphonenumber-js/es6/helpers/getPossibleCountriesForNumber.js
function getPossibleCountriesForNumber(callingCode, nationalNumber, metadata) {
  var _metadata = new Metadata(metadata);
  var possibleCountries = _metadata.getCountryCodesForCallingCode(callingCode);
  if (!possibleCountries) {
    return [];
  }
  return possibleCountries.filter(function(country) {
    return couldNationalNumberBelongToCountry(nationalNumber, country, metadata);
  });
}
function couldNationalNumberBelongToCountry(nationalNumber, country, metadata) {
  var _metadata = new Metadata(metadata);
  _metadata.selectNumberingPlan(country);
  if (_metadata.numberingPlan.possibleLengths().indexOf(nationalNumber.length) >= 0) {
    return true;
  }
  return false;
}

// node_modules/libphonenumber-js/es6/helpers/applyInternationalSeparatorStyle.js
function applyInternationalSeparatorStyle(formattedNumber) {
  return formattedNumber.replace(new RegExp("[".concat(VALID_PUNCTUATION, "]+"), "g"), " ").trim();
}

// node_modules/libphonenumber-js/es6/helpers/formatNationalNumberUsingFormat.js
var FIRST_GROUP_PATTERN = /(\$\d)/;
function formatNationalNumberUsingFormat(number, format, _ref) {
  var useInternationalFormat = _ref.useInternationalFormat, withNationalPrefix = _ref.withNationalPrefix, carrierCode = _ref.carrierCode, metadata = _ref.metadata;
  var formattedNumber = number.replace(new RegExp(format.pattern()), useInternationalFormat ? format.internationalFormat() : (
    // This library doesn't use `domestic_carrier_code_formatting_rule`,
    // because that one is only used when formatting phone numbers
    // for dialing from a mobile phone, and this is not a dialing library.
    // carrierCode && format.domesticCarrierCodeFormattingRule()
    // 	// First, replace the $CC in the formatting rule with the desired carrier code.
    // 	// Then, replace the $FG in the formatting rule with the first group
    // 	// and the carrier code combined in the appropriate way.
    // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
    // 	: (
    // 		withNationalPrefix && format.nationalPrefixFormattingRule()
    // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
    // 			: format.format()
    // 	)
    withNationalPrefix && format.nationalPrefixFormattingRule() ? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule()) : format.format()
  ));
  if (useInternationalFormat) {
    return applyInternationalSeparatorStyle(formattedNumber);
  }
  return formattedNumber;
}

// node_modules/libphonenumber-js/es6/helpers/getIddPrefix.js
var SINGLE_IDD_PREFIX_REG_EXP = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function getIddPrefix(country, callingCode, metadata) {
  var countryMetadata = new Metadata(metadata);
  countryMetadata.selectNumberingPlan(country, callingCode);
  if (countryMetadata.defaultIDDPrefix()) {
    return countryMetadata.defaultIDDPrefix();
  }
  if (SINGLE_IDD_PREFIX_REG_EXP.test(countryMetadata.IDDPrefix())) {
    return countryMetadata.IDDPrefix();
  }
}

// node_modules/libphonenumber-js/es6/helpers/RFC3966.js
function formatRFC3966(_ref) {
  var number = _ref.number, ext = _ref.ext;
  if (!number) {
    return "";
  }
  if (number[0] !== "+") {
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  }
  return "tel:".concat(number).concat(ext ? ";ext=" + ext : "");
}

// node_modules/libphonenumber-js/es6/format.js
function _createForOfIteratorHelperLoose4(o2, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
  if (it) return (it = it.call(o2)).next.bind(it);
  if (Array.isArray(o2) || (it = _unsupportedIterableToArray4(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
    if (it) o2 = it;
    var i3 = 0;
    return function() {
      if (i3 >= o2.length) return { done: true };
      return { done: false, value: o2[i3++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o2, minLen) {
  if (!o2) return;
  if (typeof o2 === "string") return _arrayLikeToArray4(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor) n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray4(o2, minLen);
}
function _arrayLikeToArray4(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
    arr2[i3] = arr[i3];
  }
  return arr2;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = null != arguments[i3] ? arguments[i3] : {};
    i3 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DEFAULT_OPTIONS = {
  formatExtension: function formatExtension(formattedNumber, extension, metadata) {
    return "".concat(formattedNumber).concat(metadata.ext()).concat(extension);
  }
};
function formatNumber(input, format, options, metadata) {
  if (options) {
    options = _objectSpread(_objectSpread({}, DEFAULT_OPTIONS), options);
  } else {
    options = DEFAULT_OPTIONS;
  }
  metadata = new Metadata(metadata);
  if (input.country && input.country !== "001") {
    if (!metadata.hasCountry(input.country)) {
      throw new Error("Unknown country: ".concat(input.country));
    }
    metadata.country(input.country);
  } else if (input.countryCallingCode) {
    metadata.selectNumberingPlan(input.countryCallingCode);
  } else return input.phone || "";
  var countryCallingCode = metadata.countryCallingCode();
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
  var number;
  switch (format) {
    case "NATIONAL":
      if (!nationalNumber) {
        return "";
      }
      number = formatNationalNumber(nationalNumber, input.carrierCode, "NATIONAL", metadata, options);
      return addExtension(number, input.ext, metadata, options.formatExtension);
    case "INTERNATIONAL":
      if (!nationalNumber) {
        return "+".concat(countryCallingCode);
      }
      number = formatNationalNumber(nationalNumber, null, "INTERNATIONAL", metadata, options);
      number = "+".concat(countryCallingCode, " ").concat(number);
      return addExtension(number, input.ext, metadata, options.formatExtension);
    case "E.164":
      return "+".concat(countryCallingCode).concat(nationalNumber);
    case "RFC3966":
      return formatRFC3966({
        number: "+".concat(countryCallingCode).concat(nationalNumber),
        ext: input.ext
      });
    // For reference, here's Google's IDD formatter:
    // https://github.com/google/libphonenumber/blob/32719cf74e68796788d1ca45abc85dcdc63ba5b9/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L1546
    // Not saying that this IDD formatter replicates it 1:1, but it seems to work.
    // Who would even need to format phone numbers in IDD format anyway?
    case "IDD":
      if (!options.fromCountry) {
        return;
      }
      var formattedNumber = formatIDD(nationalNumber, input.carrierCode, countryCallingCode, options.fromCountry, metadata);
      return addExtension(formattedNumber, input.ext, metadata, options.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(format, '"'));
  }
}
function formatNationalNumber(number, carrierCode, formatAs, metadata, options) {
  var format = chooseFormatForNumber(metadata.formats(), number);
  if (!format) {
    return number;
  }
  return formatNationalNumberUsingFormat(number, format, {
    useInternationalFormat: formatAs === "INTERNATIONAL",
    withNationalPrefix: format.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && options && options.nationalPrefix === false ? false : true,
    carrierCode,
    metadata
  });
}
function chooseFormatForNumber(availableFormats, nationalNnumber) {
  for (var _iterator = _createForOfIteratorHelperLoose4(availableFormats), _step; !(_step = _iterator()).done; ) {
    var format = _step.value;
    if (format.leadingDigitsPatterns().length > 0) {
      var lastLeadingDigitsPattern = format.leadingDigitsPatterns()[format.leadingDigitsPatterns().length - 1];
      if (nationalNnumber.search(lastLeadingDigitsPattern) !== 0) {
        continue;
      }
    }
    if (matchesEntirely(nationalNnumber, format.pattern())) {
      return format;
    }
  }
}
function addExtension(formattedNumber, ext, metadata, formatExtension2) {
  return ext ? formatExtension2(formattedNumber, ext, metadata) : formattedNumber;
}
function formatIDD(nationalNumber, carrierCode, countryCallingCode, fromCountry, metadata) {
  var fromCountryCallingCode = getCountryCallingCode(fromCountry, metadata.metadata);
  if (fromCountryCallingCode === countryCallingCode) {
    var formattedNumber = formatNationalNumber(nationalNumber, carrierCode, "NATIONAL", metadata);
    if (countryCallingCode === "1") {
      return countryCallingCode + " " + formattedNumber;
    }
    return formattedNumber;
  }
  var iddPrefix = getIddPrefix(fromCountry, void 0, metadata.metadata);
  if (iddPrefix) {
    return "".concat(iddPrefix, " ").concat(countryCallingCode, " ").concat(formatNationalNumber(nationalNumber, null, "INTERNATIONAL", metadata));
  }
}

// node_modules/libphonenumber-js/es6/PhoneNumber.js
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = null != arguments[i3] ? arguments[i3] : {};
    i3 % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties3(target, props) {
  for (var i3 = 0; i3 < props.length; i3++) {
    var descriptor = props[i3];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass3(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties3(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties3(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;
var PhoneNumber = /* @__PURE__ */ function() {
  function PhoneNumber2(countryOrCountryCallingCode, nationalNumber, metadata) {
    _classCallCheck3(this, PhoneNumber2);
    if (!countryOrCountryCallingCode) {
      throw new TypeError("`country` or `countryCallingCode` not passed");
    }
    if (!nationalNumber) {
      throw new TypeError("`nationalNumber` not passed");
    }
    if (!metadata) {
      throw new TypeError("`metadata` not passed");
    }
    var _getCountryAndCountry = getCountryAndCountryCallingCode(countryOrCountryCallingCode, metadata), country = _getCountryAndCountry.country, countryCallingCode = _getCountryAndCountry.countryCallingCode;
    this.country = country;
    this.countryCallingCode = countryCallingCode;
    this.nationalNumber = nationalNumber;
    this.number = "+" + this.countryCallingCode + this.nationalNumber;
    this.getMetadata = function() {
      return metadata;
    };
  }
  _createClass3(PhoneNumber2, [{
    key: "setExt",
    value: function setExt(ext) {
      this.ext = ext;
    }
  }, {
    key: "getPossibleCountries",
    value: function getPossibleCountries() {
      if (this.country) {
        return [this.country];
      }
      return getPossibleCountriesForNumber(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function isPossible() {
      return isPossiblePhoneNumber(this, {
        v2: true
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return isValidNumber(this, {
        v2: true
      }, this.getMetadata());
    }
  }, {
    key: "isNonGeographic",
    value: function isNonGeographic() {
      var metadata = new Metadata(this.getMetadata());
      return metadata.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function isEqual(phoneNumber) {
      return this.number === phoneNumber.number && this.ext === phoneNumber.ext;
    }
    // This function was originally meant to be an equivalent for `validatePhoneNumberLength()`,
    // but later it was found out that it doesn't include the possible `TOO_SHORT` result
    // returned from `parsePhoneNumberWithError()` in the original `validatePhoneNumberLength()`,
    // so eventually I simply commented out this method from the `PhoneNumber` class
    // and just left the `validatePhoneNumberLength()` function, even though that one would require
    // and additional step to also validate the actual country / calling code of the phone number.
    // validateLength() {
    // 	const metadata = new Metadata(this.getMetadata())
    // 	metadata.selectNumberingPlan(this.countryCallingCode)
    // 	const result = checkNumberLength(this.nationalNumber, metadata)
    // 	if (result !== 'IS_POSSIBLE') {
    // 		return result
    // 	}
    // }
  }, {
    key: "getType",
    value: function getType2() {
      return getNumberType(this, {
        v2: true
      }, this.getMetadata());
    }
  }, {
    key: "format",
    value: function format(_format, options) {
      return formatNumber(this, _format, options ? _objectSpread2(_objectSpread2({}, options), {}, {
        v2: true
      }) : {
        v2: true
      }, this.getMetadata());
    }
  }, {
    key: "formatNational",
    value: function formatNational(options) {
      return this.format("NATIONAL", options);
    }
  }, {
    key: "formatInternational",
    value: function formatInternational(options) {
      return this.format("INTERNATIONAL", options);
    }
  }, {
    key: "getURI",
    value: function getURI(options) {
      return this.format("RFC3966", options);
    }
  }]);
  return PhoneNumber2;
}();
var isCountryCode = function isCountryCode2(value) {
  return /^[A-Z]{2}$/.test(value);
};
function getCountryAndCountryCallingCode(countryOrCountryCallingCode, metadataJson) {
  var country;
  var countryCallingCode;
  var metadata = new Metadata(metadataJson);
  if (isCountryCode(countryOrCountryCallingCode)) {
    country = countryOrCountryCallingCode;
    metadata.selectNumberingPlan(country);
    countryCallingCode = metadata.countryCallingCode();
  } else {
    countryCallingCode = countryOrCountryCallingCode;
    if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
      if (metadata.isNonGeographicCallingCode(countryCallingCode)) {
        country = "001";
      }
    }
  }
  return {
    country,
    countryCallingCode
  };
}

// node_modules/libphonenumber-js/es6/helpers/stripIddPrefix.js
var CAPTURING_DIGIT_PATTERN = new RegExp("([" + VALID_DIGITS + "])");
function stripIddPrefix(number, country, callingCode, metadata) {
  if (!country) {
    return;
  }
  var countryMetadata = new Metadata(metadata);
  countryMetadata.selectNumberingPlan(country, callingCode);
  var IDDPrefixPattern = new RegExp(countryMetadata.IDDPrefix());
  if (number.search(IDDPrefixPattern) !== 0) {
    return;
  }
  number = number.slice(number.match(IDDPrefixPattern)[0].length);
  var matchedGroups = number.match(CAPTURING_DIGIT_PATTERN);
  if (matchedGroups && matchedGroups[1] != null && matchedGroups[1].length > 0) {
    if (matchedGroups[1] === "0") {
      return;
    }
  }
  return number;
}

// node_modules/libphonenumber-js/es6/helpers/extractNationalNumberFromPossiblyIncompleteNumber.js
function extractNationalNumberFromPossiblyIncompleteNumber(number, metadata) {
  if (number && metadata.numberingPlan.nationalPrefixForParsing()) {
    var prefixPattern = new RegExp("^(?:" + metadata.numberingPlan.nationalPrefixForParsing() + ")");
    var prefixMatch = prefixPattern.exec(number);
    if (prefixMatch) {
      var nationalNumber;
      var carrierCode;
      var capturedGroupsCount = prefixMatch.length - 1;
      var hasCapturedGroups = capturedGroupsCount > 0 && prefixMatch[capturedGroupsCount];
      if (metadata.nationalPrefixTransformRule() && hasCapturedGroups) {
        nationalNumber = number.replace(prefixPattern, metadata.nationalPrefixTransformRule());
        if (capturedGroupsCount > 1) {
          carrierCode = prefixMatch[1];
        }
      } else {
        var prefixBeforeNationalNumber = prefixMatch[0];
        nationalNumber = number.slice(prefixBeforeNationalNumber.length);
        if (hasCapturedGroups) {
          carrierCode = prefixMatch[1];
        }
      }
      var nationalPrefix;
      if (hasCapturedGroups) {
        var possiblePositionOfTheFirstCapturedGroup = number.indexOf(prefixMatch[1]);
        var possibleNationalPrefix = number.slice(0, possiblePositionOfTheFirstCapturedGroup);
        if (possibleNationalPrefix === metadata.numberingPlan.nationalPrefix()) {
          nationalPrefix = metadata.numberingPlan.nationalPrefix();
        }
      } else {
        nationalPrefix = prefixMatch[0];
      }
      return {
        nationalNumber,
        nationalPrefix,
        carrierCode
      };
    }
  }
  return {
    nationalNumber: number
  };
}

// node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.js
function extractNationalNumber(number, metadata) {
  var _extractNationalNumbe = extractNationalNumberFromPossiblyIncompleteNumber(number, metadata), carrierCode = _extractNationalNumbe.carrierCode, nationalNumber = _extractNationalNumbe.nationalNumber;
  if (nationalNumber !== number) {
    if (!shouldHaveExtractedNationalPrefix(number, nationalNumber, metadata)) {
      return {
        nationalNumber: number
      };
    }
    if (metadata.possibleLengths()) {
      if (!isPossibleIncompleteNationalNumber(nationalNumber, metadata)) {
        return {
          nationalNumber: number
        };
      }
    }
  }
  return {
    nationalNumber,
    carrierCode
  };
}
function shouldHaveExtractedNationalPrefix(nationalNumberBefore, nationalNumberAfter, metadata) {
  if (matchesEntirely(nationalNumberBefore, metadata.nationalNumberPattern()) && !matchesEntirely(nationalNumberAfter, metadata.nationalNumberPattern())) {
    return false;
  }
  return true;
}
function isPossibleIncompleteNationalNumber(nationalNumber, metadata) {
  switch (checkNumberLength(nationalNumber, metadata)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return false;
    default:
      return true;
  }
}

// node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js
function extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country, callingCode, metadata) {
  var countryCallingCode = country ? getCountryCallingCode(country, metadata) : callingCode;
  if (number.indexOf(countryCallingCode) === 0) {
    metadata = new Metadata(metadata);
    metadata.selectNumberingPlan(country, callingCode);
    var possibleShorterNumber = number.slice(countryCallingCode.length);
    var _extractNationalNumbe = extractNationalNumber(possibleShorterNumber, metadata), possibleShorterNationalNumber = _extractNationalNumbe.nationalNumber;
    var _extractNationalNumbe2 = extractNationalNumber(number, metadata), nationalNumber = _extractNationalNumbe2.nationalNumber;
    if (!matchesEntirely(nationalNumber, metadata.nationalNumberPattern()) && matchesEntirely(possibleShorterNationalNumber, metadata.nationalNumberPattern()) || checkNumberLength(nationalNumber, metadata) === "TOO_LONG") {
      return {
        countryCallingCode,
        number: possibleShorterNumber
      };
    }
  }
  return {
    number
  };
}

// node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCode.js
function extractCountryCallingCode(number, country, callingCode, metadata) {
  if (!number) {
    return {};
  }
  var isNumberWithIddPrefix;
  if (number[0] !== "+") {
    var numberWithoutIDD = stripIddPrefix(number, country, callingCode, metadata);
    if (numberWithoutIDD && numberWithoutIDD !== number) {
      isNumberWithIddPrefix = true;
      number = "+" + numberWithoutIDD;
    } else {
      if (country || callingCode) {
        var _extractCountryCallin = extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country, callingCode, metadata), countryCallingCode = _extractCountryCallin.countryCallingCode, shorterNumber = _extractCountryCallin.number;
        if (countryCallingCode) {
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode,
            number: shorterNumber
          };
        }
      }
      return {
        // No need to set it to `UNSPECIFIED`. It can be just `undefined`.
        // countryCallingCodeSource: 'UNSPECIFIED',
        number
      };
    }
  }
  if (number[1] === "0") {
    return {};
  }
  metadata = new Metadata(metadata);
  var i3 = 2;
  while (i3 - 1 <= MAX_LENGTH_COUNTRY_CODE && i3 <= number.length) {
    var _countryCallingCode = number.slice(1, i3);
    if (metadata.hasCallingCode(_countryCallingCode)) {
      metadata.selectNumberingPlan(_countryCallingCode);
      return {
        countryCallingCodeSource: isNumberWithIddPrefix ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: _countryCallingCode,
        number: number.slice(i3)
      };
    }
    i3++;
  }
  return {};
}

// node_modules/libphonenumber-js/es6/helpers/getCountryByNationalNumber.js
function _createForOfIteratorHelperLoose5(o2, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o2[Symbol.iterator] || o2["@@iterator"];
  if (it) return (it = it.call(o2)).next.bind(it);
  if (Array.isArray(o2) || (it = _unsupportedIterableToArray5(o2)) || allowArrayLike && o2 && typeof o2.length === "number") {
    if (it) o2 = it;
    var i3 = 0;
    return function() {
      if (i3 >= o2.length) return { done: true };
      return { done: false, value: o2[i3++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(o2, minLen) {
  if (!o2) return;
  if (typeof o2 === "string") return _arrayLikeToArray5(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor) n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray5(o2, minLen);
}
function _arrayLikeToArray5(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
    arr2[i3] = arr[i3];
  }
  return arr2;
}
function getCountryByNationalNumber(nationalPhoneNumber, _ref) {
  var countries = _ref.countries, defaultCountry = _ref.defaultCountry, metadata = _ref.metadata;
  metadata = new Metadata(metadata);
  var matchingCountries = [];
  for (var _iterator = _createForOfIteratorHelperLoose5(countries), _step; !(_step = _iterator()).done; ) {
    var country = _step.value;
    metadata.country(country);
    if (metadata.leadingDigits()) {
      if (nationalPhoneNumber && nationalPhoneNumber.search(metadata.leadingDigits()) === 0) {
        return country;
      }
    } else if (getNumberType({
      phone: nationalPhoneNumber,
      country
    }, void 0, metadata.metadata)) {
      if (defaultCountry) {
        if (country === defaultCountry) {
          return country;
        }
        matchingCountries.push(country);
      } else {
        return country;
      }
    }
  }
  if (matchingCountries.length > 0) {
    return matchingCountries[0];
  }
}

// node_modules/libphonenumber-js/es6/helpers/getCountryByCallingCode.js
var USE_NON_GEOGRAPHIC_COUNTRY_CODE2 = false;
function getCountryByCallingCode(callingCode, _ref) {
  var nationalPhoneNumber = _ref.nationalNumber, defaultCountry = _ref.defaultCountry, metadata = _ref.metadata;
  if (USE_NON_GEOGRAPHIC_COUNTRY_CODE2) {
    if (metadata.isNonGeographicCallingCode(callingCode)) {
      return "001";
    }
  }
  var possibleCountries = metadata.getCountryCodesForCallingCode(callingCode);
  if (!possibleCountries) {
    return;
  }
  if (possibleCountries.length === 1) {
    return possibleCountries[0];
  }
  return getCountryByNationalNumber(nationalPhoneNumber, {
    countries: possibleCountries,
    defaultCountry,
    metadata: metadata.metadata
  });
}

// node_modules/libphonenumber-js/es6/helpers/extractPhoneContext.js
var PLUS_SIGN = "+";
var RFC3966_VISUAL_SEPARATOR_ = "[\\-\\.\\(\\)]?";
var RFC3966_PHONE_DIGIT_ = "([" + VALID_DIGITS + "]|" + RFC3966_VISUAL_SEPARATOR_ + ")";
var RFC3966_GLOBAL_NUMBER_DIGITS_ = "^\\" + PLUS_SIGN + RFC3966_PHONE_DIGIT_ + "*[" + VALID_DIGITS + "]" + RFC3966_PHONE_DIGIT_ + "*$";
var RFC3966_GLOBAL_NUMBER_DIGITS_PATTERN_ = new RegExp(RFC3966_GLOBAL_NUMBER_DIGITS_, "g");
var ALPHANUM_ = VALID_DIGITS;
var RFC3966_DOMAINLABEL_ = "[" + ALPHANUM_ + "]+((\\-)*[" + ALPHANUM_ + "])*";
var VALID_ALPHA_ = "a-zA-Z";
var RFC3966_TOPLABEL_ = "[" + VALID_ALPHA_ + "]+((\\-)*[" + ALPHANUM_ + "])*";
var RFC3966_DOMAINNAME_ = "^(" + RFC3966_DOMAINLABEL_ + "\\.)*" + RFC3966_TOPLABEL_ + "\\.?$";
var RFC3966_DOMAINNAME_PATTERN_ = new RegExp(RFC3966_DOMAINNAME_, "g");
var RFC3966_PREFIX_ = "tel:";
var RFC3966_PHONE_CONTEXT_ = ";phone-context=";
var RFC3966_ISDN_SUBADDRESS_ = ";isub=";
function extractPhoneContext(numberToExtractFrom) {
  var indexOfPhoneContext = numberToExtractFrom.indexOf(RFC3966_PHONE_CONTEXT_);
  if (indexOfPhoneContext < 0) {
    return null;
  }
  var phoneContextStart = indexOfPhoneContext + RFC3966_PHONE_CONTEXT_.length;
  if (phoneContextStart >= numberToExtractFrom.length) {
    return "";
  }
  var phoneContextEnd = numberToExtractFrom.indexOf(";", phoneContextStart);
  if (phoneContextEnd >= 0) {
    return numberToExtractFrom.substring(phoneContextStart, phoneContextEnd);
  } else {
    return numberToExtractFrom.substring(phoneContextStart);
  }
}
function isPhoneContextValid(phoneContext) {
  if (phoneContext === null) {
    return true;
  }
  if (phoneContext.length === 0) {
    return false;
  }
  return RFC3966_GLOBAL_NUMBER_DIGITS_PATTERN_.test(phoneContext) || RFC3966_DOMAINNAME_PATTERN_.test(phoneContext);
}

// node_modules/libphonenumber-js/es6/helpers/extractFormattedPhoneNumberFromPossibleRfc3966NumberUri.js
function extractFormattedPhoneNumberFromPossibleRfc3966NumberUri(numberToParse, _ref) {
  var extractFormattedPhoneNumber = _ref.extractFormattedPhoneNumber;
  var phoneContext = extractPhoneContext(numberToParse);
  if (!isPhoneContextValid(phoneContext)) {
    throw new ParseError("NOT_A_NUMBER");
  }
  var phoneNumberString;
  if (phoneContext === null) {
    phoneNumberString = extractFormattedPhoneNumber(numberToParse) || "";
  } else {
    phoneNumberString = "";
    if (phoneContext.charAt(0) === PLUS_SIGN) {
      phoneNumberString += phoneContext;
    }
    var indexOfRfc3966Prefix = numberToParse.indexOf(RFC3966_PREFIX_);
    var indexOfNationalNumber;
    if (indexOfRfc3966Prefix >= 0) {
      indexOfNationalNumber = indexOfRfc3966Prefix + RFC3966_PREFIX_.length;
    } else {
      indexOfNationalNumber = 0;
    }
    var indexOfPhoneContext = numberToParse.indexOf(RFC3966_PHONE_CONTEXT_);
    phoneNumberString += numberToParse.substring(indexOfNationalNumber, indexOfPhoneContext);
  }
  var indexOfIsdn = phoneNumberString.indexOf(RFC3966_ISDN_SUBADDRESS_);
  if (indexOfIsdn > 0) {
    phoneNumberString = phoneNumberString.substring(0, indexOfIsdn);
  }
  if (phoneNumberString !== "") {
    return phoneNumberString;
  }
}

// node_modules/libphonenumber-js/es6/parse.js
var MAX_INPUT_STRING_LENGTH = 250;
var PHONE_NUMBER_START_PATTERN = new RegExp("[" + PLUS_CHARS + VALID_DIGITS + "]");
var AFTER_PHONE_NUMBER_END_PATTERN = new RegExp("[^" + VALID_DIGITS + "#]+$");
var USE_NON_GEOGRAPHIC_COUNTRY_CODE3 = false;
function parse(text2, options, metadata) {
  options = options || {};
  metadata = new Metadata(metadata);
  if (options.defaultCountry && !metadata.hasCountry(options.defaultCountry)) {
    if (options.v2) {
      throw new ParseError("INVALID_COUNTRY");
    }
    throw new Error("Unknown country: ".concat(options.defaultCountry));
  }
  var _parseInput = parseInput(text2, options.v2, options.extract), formattedPhoneNumber = _parseInput.number, ext = _parseInput.ext, error = _parseInput.error;
  if (!formattedPhoneNumber) {
    if (options.v2) {
      if (error === "TOO_SHORT") {
        throw new ParseError("TOO_SHORT");
      }
      throw new ParseError("NOT_A_NUMBER");
    }
    return {};
  }
  var _parsePhoneNumber = parsePhoneNumber(formattedPhoneNumber, options.defaultCountry, options.defaultCallingCode, metadata), country = _parsePhoneNumber.country, nationalNumber = _parsePhoneNumber.nationalNumber, countryCallingCode = _parsePhoneNumber.countryCallingCode, countryCallingCodeSource = _parsePhoneNumber.countryCallingCodeSource, carrierCode = _parsePhoneNumber.carrierCode;
  if (!metadata.hasSelectedNumberingPlan()) {
    if (options.v2) {
      throw new ParseError("INVALID_COUNTRY");
    }
    return {};
  }
  if (!nationalNumber || nationalNumber.length < MIN_LENGTH_FOR_NSN) {
    if (options.v2) {
      throw new ParseError("TOO_SHORT");
    }
    return {};
  }
  if (nationalNumber.length > MAX_LENGTH_FOR_NSN) {
    if (options.v2) {
      throw new ParseError("TOO_LONG");
    }
    return {};
  }
  if (options.v2) {
    var phoneNumber = new PhoneNumber(countryCallingCode, nationalNumber, metadata.metadata);
    if (country) {
      phoneNumber.country = country;
    }
    if (carrierCode) {
      phoneNumber.carrierCode = carrierCode;
    }
    if (ext) {
      phoneNumber.ext = ext;
    }
    phoneNumber.__countryCallingCodeSource = countryCallingCodeSource;
    return phoneNumber;
  }
  var valid = (options.extended ? metadata.hasSelectedNumberingPlan() : country) ? matchesEntirely(nationalNumber, metadata.nationalNumberPattern()) : false;
  if (!options.extended) {
    return valid ? result(country, nationalNumber, ext) : {};
  }
  return {
    country,
    countryCallingCode,
    carrierCode,
    valid,
    possible: valid ? true : options.extended === true && metadata.possibleLengths() && isPossibleNumber(nationalNumber, metadata) ? true : false,
    phone: nationalNumber,
    ext
  };
}
function _extractFormattedPhoneNumber(text2, extract, throwOnError) {
  if (!text2) {
    return;
  }
  if (text2.length > MAX_INPUT_STRING_LENGTH) {
    if (throwOnError) {
      throw new ParseError("TOO_LONG");
    }
    return;
  }
  if (extract === false) {
    return text2;
  }
  var startsAt = text2.search(PHONE_NUMBER_START_PATTERN);
  if (startsAt < 0) {
    return;
  }
  return text2.slice(startsAt).replace(AFTER_PHONE_NUMBER_END_PATTERN, "");
}
function parseInput(text2, v2, extract) {
  var number = extractFormattedPhoneNumberFromPossibleRfc3966NumberUri(text2, {
    extractFormattedPhoneNumber: function extractFormattedPhoneNumber(text3) {
      return _extractFormattedPhoneNumber(text3, extract, v2);
    }
  });
  if (!number) {
    return {};
  }
  if (!isViablePhoneNumber(number)) {
    if (isViablePhoneNumberStart(number)) {
      return {
        error: "TOO_SHORT"
      };
    }
    return {};
  }
  var withExtensionStripped = extractExtension(number);
  if (withExtensionStripped.ext) {
    return withExtensionStripped;
  }
  return {
    number
  };
}
function result(country, nationalNumber, ext) {
  var result2 = {
    country,
    phone: nationalNumber
  };
  if (ext) {
    result2.ext = ext;
  }
  return result2;
}
function parsePhoneNumber(formattedPhoneNumber, defaultCountry, defaultCallingCode, metadata) {
  var _extractCountryCallin = extractCountryCallingCode(parseIncompletePhoneNumber(formattedPhoneNumber), defaultCountry, defaultCallingCode, metadata.metadata), countryCallingCodeSource = _extractCountryCallin.countryCallingCodeSource, countryCallingCode = _extractCountryCallin.countryCallingCode, number = _extractCountryCallin.number;
  var country;
  if (countryCallingCode) {
    metadata.selectNumberingPlan(countryCallingCode);
  } else if (number && (defaultCountry || defaultCallingCode)) {
    metadata.selectNumberingPlan(defaultCountry, defaultCallingCode);
    if (defaultCountry) {
      country = defaultCountry;
    } else {
      if (USE_NON_GEOGRAPHIC_COUNTRY_CODE3) {
        if (metadata.isNonGeographicCallingCode(defaultCallingCode)) {
          country = "001";
        }
      }
    }
    countryCallingCode = defaultCallingCode || getCountryCallingCode(defaultCountry, metadata.metadata);
  } else return {};
  if (!number) {
    return {
      countryCallingCodeSource,
      countryCallingCode
    };
  }
  var _extractNationalNumbe = extractNationalNumber(parseIncompletePhoneNumber(number), metadata), nationalNumber = _extractNationalNumbe.nationalNumber, carrierCode = _extractNationalNumbe.carrierCode;
  var exactCountry = getCountryByCallingCode(countryCallingCode, {
    nationalNumber,
    defaultCountry,
    metadata
  });
  if (exactCountry) {
    country = exactCountry;
    if (exactCountry === "001") {
    } else {
      metadata.country(country);
    }
  }
  return {
    country,
    countryCallingCode,
    countryCallingCodeSource,
    nationalNumber,
    carrierCode
  };
}

// node_modules/libphonenumber-js/es6/parsePhoneNumberWithError_.js
function ownKeys3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread3(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = null != arguments[i3] ? arguments[i3] : {};
    i3 % 2 ? ownKeys3(Object(source), true).forEach(function(key) {
      _defineProperty3(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys3(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function parsePhoneNumberWithError(text2, options, metadata) {
  return parse(text2, _objectSpread3(_objectSpread3({}, options), {}, {
    v2: true
  }), metadata);
}

// node_modules/libphonenumber-js/es6/normalizeArguments.js
function ownKeys4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread4(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = null != arguments[i3] ? arguments[i3] : {};
    i3 % 2 ? ownKeys4(Object(source), true).forEach(function(key) {
      _defineProperty4(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys4(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i3) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i3) || _unsupportedIterableToArray6(arr, i3) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray6(o2, minLen) {
  if (!o2) return;
  if (typeof o2 === "string") return _arrayLikeToArray6(o2, minLen);
  var n2 = Object.prototype.toString.call(o2).slice(8, -1);
  if (n2 === "Object" && o2.constructor) n2 = o2.constructor.name;
  if (n2 === "Map" || n2 === "Set") return Array.from(o2);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray6(o2, minLen);
}
function _arrayLikeToArray6(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
    arr2[i3] = arr[i3];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i3) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i3 && _arr.length === i3) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function normalizeArguments(args) {
  var _Array$prototype$slic = Array.prototype.slice.call(args), _Array$prototype$slic2 = _slicedToArray(_Array$prototype$slic, 4), arg_1 = _Array$prototype$slic2[0], arg_2 = _Array$prototype$slic2[1], arg_3 = _Array$prototype$slic2[2], arg_4 = _Array$prototype$slic2[3];
  var text2;
  var options;
  var metadata;
  if (typeof arg_1 === "string") {
    text2 = arg_1;
  } else throw new TypeError("A text for parsing must be a string.");
  if (!arg_2 || typeof arg_2 === "string") {
    if (arg_4) {
      options = arg_3;
      metadata = arg_4;
    } else {
      options = void 0;
      metadata = arg_3;
    }
    if (arg_2) {
      options = _objectSpread4({
        defaultCountry: arg_2
      }, options);
    }
  } else if (isObject(arg_2)) {
    if (arg_3) {
      options = arg_2;
      metadata = arg_3;
    } else {
      metadata = arg_2;
    }
  } else throw new Error("Invalid second argument: ".concat(arg_2));
  return {
    text: text2,
    options,
    metadata
  };
}

// node_modules/libphonenumber-js/es6/parsePhoneNumber_.js
function ownKeys5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread5(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = null != arguments[i3] ? arguments[i3] : {};
    i3 % 2 ? ownKeys5(Object(source), true).forEach(function(key) {
      _defineProperty5(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys5(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function parsePhoneNumber2(text2, options, metadata) {
  if (options && options.defaultCountry && !isSupportedCountry(options.defaultCountry, metadata)) {
    options = _objectSpread5(_objectSpread5({}, options), {}, {
      defaultCountry: void 0
    });
  }
  try {
    return parsePhoneNumberWithError(text2, options, metadata);
  } catch (error) {
    if (error instanceof ParseError) {
    } else {
      throw error;
    }
  }
}

// node_modules/libphonenumber-js/es6/isValidPhoneNumber.js
function ownKeys6(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread6(target) {
  for (var i3 = 1; i3 < arguments.length; i3++) {
    var source = null != arguments[i3] ? arguments[i3] : {};
    i3 % 2 ? ownKeys6(Object(source), true).forEach(function(key) {
      _defineProperty6(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys6(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function isValidPhoneNumber() {
  var _normalizeArguments = normalizeArguments(arguments), text2 = _normalizeArguments.text, options = _normalizeArguments.options, metadata = _normalizeArguments.metadata;
  options = _objectSpread6(_objectSpread6({}, options), {}, {
    extract: false
  });
  var phoneNumber = parsePhoneNumber2(text2, options, metadata);
  return phoneNumber && phoneNumber.isValid() || false;
}

// node_modules/libphonenumber-js/min/exports/isValidPhoneNumber.js
function isValidPhoneNumber2() {
  return withMetadataArgument(isValidPhoneNumber, arguments);
}

// src/components/FormLead.jsx
var FormLead = class extends AppElement {
  #default = {
    form: {}
  };
  constructor(props = {}) {
    super();
    this.eventName = "user:click-form-lead";
    this.state = this.initState(this.#default, props);
    this.getAttribute("id") || this.setAttribute("id", this.state.id || `component-${Math.floor(Math.random() * 100)}`);
    this.ok = false;
  }
  static get observedAttributes() {
    return ["stage"];
  }
  handleEvent(event) {
    let leadForm = this.querySelector("form");
    if (event.type === "click" && event.target.id === "cancel-lead") {
      const lead = new CustomEvent(this.state.eventName, {
        detail: { source: event.target.id },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(lead);
    } else if (event.type === "change" && event.target.id === "phone") {
      let code2 = leadForm.codes.options[leadForm.codes.selectedIndex].value;
      let country = countryCodes_default.codes.find((country2) => country2.dial_code == code2);
      let phone = code2 + " " + event.target.value;
      if (isValidPhoneNumber2(phone, country.code)) {
        this.querySelector("#help-phone").classList.add("is-hidden");
        this.querySelector("#help2-phone").classList.add("is-hidden");
        this.ok = true;
      } else {
        this.querySelector("#help2-phone").classList.remove("is-hidden");
        this.ok = false;
      }
    } else if (event.type === "change" && event.target.id === "email") {
      let regex = /^(?!\.)((?!.*\.{2})[a-zA-Z0-9à-ü.!#$%&'*+-/=?^_`{|}~\-\d]+)@(?!\.)([a-zA-Z0-9à-ü\-\.\d]+)((\.([a-zA-Z]){2,63})+)$/;
      if (regex.test(event.target.value)) {
        this.querySelector("#help-email").classList.add("is-hidden");
        this.querySelector("#help2-email").classList.add("is-hidden");
        this.ok = true;
      } else {
        this.querySelector("#help2-email").classList.remove("is-hidden");
        this.ok = false;
      }
    } else if (event.type === "click" && event.target.id === "cancel-lead") {
      event.preventDefault();
      const cancelLead = new CustomEvent(this.state.eventName, {
        detail: { click: event.target.id },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(cancelLead);
    } else if (event.type === "submit") {
      event.preventDefault();
      let contact = this.querySelector("#contact");
      let position = this.querySelector("#function");
      let phone = this.querySelector("#phone");
      let email = this.querySelector("#email");
      let company = this.querySelector("#company");
      let subject = this.querySelector("#subject");
      let description = this.querySelector("#description");
      let terms = this.querySelector("#terms");
      if (contact != null && contact.required && contact.value.trim() === "") {
        this.querySelector("#help-contact").classList.remove("is-hidden");
        this.ok = false;
      } else if (contact != null) {
        this.querySelector("#help-contact").classList.add("is-hidden");
        this.ok = true;
      }
      if (position != null && position.required && position.value.trim() === "") {
        this.querySelector("#help-function").classList.remove("is-hidden");
        this.ok = false;
      } else if (position != null) {
        this.querySelector("#help-function").classList.add("is-hidden");
        this.ok = true;
      }
      if (company != null && company.required && company.value.trim() === "") {
        this.querySelector("#help-company").classList.remove("is-hidden");
        this.ok = false;
      } else if (company != null) {
        this.querySelector("#help-company").classList.add("is-hidden");
        this.ok = true;
      }
      if (phone != null && phone.required && phone.value.trim() === "") {
        this.querySelector("#help-phone").classList.remove("is-hidden");
        this.ok = false;
      } else if (phone != null) {
        this.querySelector("#help-phone").classList.add("is-hidden");
        this.ok = true;
      }
      if (email != null && email.required && email.value.trim() === "") {
        this.querySelector("#help-email").classList.remove("is-hidden");
        this.ok = false;
      } else if (email != null) {
        this.querySelector("#help-email").classList.add("is-hidden");
        this.ok = true;
      }
      if (subject != null && subject.required && subject.value.trim() === "") {
        this.querySelector("#help-subject").classList.remove("is-hidden");
        this.ok = false;
      } else if (subject != null) {
        this.querySelector("#help-subject").classList.add("is-hidden");
        this.ok = true;
      }
      if (description != null && description.required && description.value.trim() === "") {
        this.querySelector("#help-description").classList.remove("is-hidden");
        this.ok = false;
      } else if (description != null) {
        this.querySelector("#help-description").classList.add("is-hidden");
        this.ok = true;
      }
      if (terms != null && terms.required && terms.checked == false) {
        this.querySelector("#help-terms").classList.remove("is-hidden");
        this.ok = false;
      } else if (terms != null) {
        this.querySelector("#help-terms").classList.add("is-hidden");
        this.ok = true;
      }
      if (this.ok === true) {
        if (this.form?.eventName != void 0) {
          this.eventName = this.state.form.eventName;
        }
        let data = {};
        if (leadForm?.contact != void 0) {
          data["name"] = leadForm.contact.value;
        }
        if (leadForm?.function != void 0) {
          data["function"] = leadForm.function.value;
        }
        if (leadForm?.email != void 0) {
          data["email"] = leadForm.email.value;
        }
        if (leadForm?.phone != void 0) {
          data["phone"] = leadForm.codes.options[leadForm.codes.selectedIndex].value + " " + leadForm.phone.value;
        }
        if (leadForm?.company != void 0) {
          data["company"] = leadForm.company.value;
        }
        if (leadForm?.subject != void 0) {
          data["subject"] = leadForm.subject.value;
        }
        if (leadForm?.description != void 0) {
          data["description"] = leadForm.description.value;
        }
        const hiddenInputs = leadForm.querySelectorAll('input[type="hidden"]');
        if (hiddenInputs.length > 0) {
          hiddenInputs.forEach((input) => {
            data[input.id] = input.value;
          });
        }
        const lead = new CustomEvent(this.state.eventName, {
          detail: { source: event.target.id, lead: data },
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(lead);
      }
    }
  }
  render() {
    this.state?.id != void 0 ? this.state.form.id = `${this.state.id}-form` : `form-${Math.floor(Math.random() * 100)}`;
    R(
      /* @__PURE__ */ u2("section", { class: this.getClassNames(["section"], this.state?.classList), ...this.getAnimationProps(this.state.animation), style: this.getBackgroundStyle(), children: /* @__PURE__ */ u2("div", { class: "container py-4", children: [
        this.getTitlesJSX(),
        /* @__PURE__ */ u2("div", { class: "columns is-centered", children: /* @__PURE__ */ u2("div", { class: `column ${this.state?.size != void 0 ? this.state.size : "is-4"}`, children: this.state?.form != void 0 && new CjForm(this.state.form, this.state.context).render() }) })
      ] }) }),
      this
    );
    addFormEvents(this);
  }
};
customElements.define("form-lead", FormLead);

// node_modules/remarkable/dist/esm/index.browser.js
var textarea;
function decodeEntity(name) {
  textarea = textarea || document.createElement("textarea");
  textarea.innerHTML = "&" + name + ";";
  return textarea.value;
}
var hasOwn = Object.prototype.hasOwnProperty;
function has(object, key) {
  return object ? hasOwn.call(object, key) : false;
}
function assign(obj) {
  var sources = [].slice.call(arguments, 1);
  sources.forEach(function(source) {
    if (!source) {
      return;
    }
    if (typeof source !== "object") {
      throw new TypeError(source + "must be object");
    }
    Object.keys(source).forEach(function(key) {
      obj[key] = source[key];
    });
  });
  return obj;
}
var UNESCAPE_MD_RE = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
function unescapeMd(str) {
  if (str.indexOf("\\") < 0) {
    return str;
  }
  return str.replace(UNESCAPE_MD_RE, "$1");
}
function isValidEntityCode(c2) {
  if (c2 >= 55296 && c2 <= 57343) {
    return false;
  }
  if (c2 >= 64976 && c2 <= 65007) {
    return false;
  }
  if ((c2 & 65535) === 65535 || (c2 & 65535) === 65534) {
    return false;
  }
  if (c2 >= 0 && c2 <= 8) {
    return false;
  }
  if (c2 === 11) {
    return false;
  }
  if (c2 >= 14 && c2 <= 31) {
    return false;
  }
  if (c2 >= 127 && c2 <= 159) {
    return false;
  }
  if (c2 > 1114111) {
    return false;
  }
  return true;
}
function fromCodePoint(c2) {
  if (c2 > 65535) {
    c2 -= 65536;
    var surrogate1 = 55296 + (c2 >> 10), surrogate2 = 56320 + (c2 & 1023);
    return String.fromCharCode(surrogate1, surrogate2);
  }
  return String.fromCharCode(c2);
}
var NAMED_ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
function replaceEntityPattern(match, name) {
  var code2 = 0;
  var decoded = decodeEntity(name);
  if (name !== decoded) {
    return decoded;
  } else if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name)) {
    code2 = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
    if (isValidEntityCode(code2)) {
      return fromCodePoint(code2);
    }
  }
  return match;
}
function replaceEntities(str) {
  if (str.indexOf("&") < 0) {
    return str;
  }
  return str.replace(NAMED_ENTITY_RE, replaceEntityPattern);
}
var HTML_ESCAPE_TEST_RE = /[&<>"]/;
var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
var HTML_REPLACEMENTS = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function replaceUnsafeChar(ch) {
  return HTML_REPLACEMENTS[ch];
}
function escapeHtml(str) {
  if (HTML_ESCAPE_TEST_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
  }
  return str;
}
var rules = {};
rules.blockquote_open = function() {
  return "<blockquote>\n";
};
rules.blockquote_close = function(tokens, idx) {
  return "</blockquote>" + getBreak(tokens, idx);
};
rules.code = function(tokens, idx) {
  if (tokens[idx].block) {
    return "<pre><code>" + escapeHtml(tokens[idx].content) + "</code></pre>" + getBreak(tokens, idx);
  }
  return "<code>" + escapeHtml(tokens[idx].content) + "</code>";
};
rules.fence = function(tokens, idx, options, env, instance) {
  var token = tokens[idx];
  var langClass = "";
  var langPrefix = options.langPrefix;
  var langName = "", fences2, fenceName;
  var highlighted;
  if (token.params) {
    fences2 = token.params.split(/\s+/g);
    fenceName = fences2.join(" ");
    if (has(instance.rules.fence_custom, fences2[0])) {
      return instance.rules.fence_custom[fences2[0]](tokens, idx, options, env, instance);
    }
    langName = escapeHtml(replaceEntities(unescapeMd(fenceName)));
    langClass = ' class="' + langPrefix + langName + '"';
  }
  if (options.highlight) {
    highlighted = options.highlight.apply(options.highlight, [token.content].concat(fences2)) || escapeHtml(token.content);
  } else {
    highlighted = escapeHtml(token.content);
  }
  return "<pre><code" + langClass + ">" + highlighted + "</code></pre>" + getBreak(tokens, idx);
};
rules.fence_custom = {};
rules.heading_open = function(tokens, idx) {
  return "<h" + tokens[idx].hLevel + ">";
};
rules.heading_close = function(tokens, idx) {
  return "</h" + tokens[idx].hLevel + ">\n";
};
rules.hr = function(tokens, idx, options) {
  return (options.xhtmlOut ? "<hr />" : "<hr>") + getBreak(tokens, idx);
};
rules.bullet_list_open = function() {
  return "<ul>\n";
};
rules.bullet_list_close = function(tokens, idx) {
  return "</ul>" + getBreak(tokens, idx);
};
rules.list_item_open = function() {
  return "<li>";
};
rules.list_item_close = function() {
  return "</li>\n";
};
rules.ordered_list_open = function(tokens, idx) {
  var token = tokens[idx];
  var order = token.order > 1 ? ' start="' + token.order + '"' : "";
  return "<ol" + order + ">\n";
};
rules.ordered_list_close = function(tokens, idx) {
  return "</ol>" + getBreak(tokens, idx);
};
rules.paragraph_open = function(tokens, idx) {
  return tokens[idx].tight ? "" : "<p>";
};
rules.paragraph_close = function(tokens, idx) {
  var addBreak = !(tokens[idx].tight && idx && tokens[idx - 1].type === "inline" && !tokens[idx - 1].content);
  return (tokens[idx].tight ? "" : "</p>") + (addBreak ? getBreak(tokens, idx) : "");
};
rules.link_open = function(tokens, idx, options) {
  var title = tokens[idx].title ? ' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"' : "";
  var target = options.linkTarget ? ' target="' + options.linkTarget + '"' : "";
  return '<a href="' + escapeHtml(tokens[idx].href) + '"' + title + target + ">";
};
rules.link_close = function() {
  return "</a>";
};
rules.image = function(tokens, idx, options) {
  var src = ' src="' + escapeHtml(tokens[idx].src) + '"';
  var title = tokens[idx].title ? ' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"' : "";
  var alt = ' alt="' + (tokens[idx].alt ? escapeHtml(replaceEntities(unescapeMd(tokens[idx].alt))) : "") + '"';
  var suffix = options.xhtmlOut ? " /" : "";
  return "<img" + src + alt + title + suffix + ">";
};
rules.table_open = function() {
  return "<table>\n";
};
rules.table_close = function() {
  return "</table>\n";
};
rules.thead_open = function() {
  return "<thead>\n";
};
rules.thead_close = function() {
  return "</thead>\n";
};
rules.tbody_open = function() {
  return "<tbody>\n";
};
rules.tbody_close = function() {
  return "</tbody>\n";
};
rules.tr_open = function() {
  return "<tr>";
};
rules.tr_close = function() {
  return "</tr>\n";
};
rules.th_open = function(tokens, idx) {
  var token = tokens[idx];
  return "<th" + (token.align ? ' style="text-align:' + token.align + '"' : "") + ">";
};
rules.th_close = function() {
  return "</th>";
};
rules.td_open = function(tokens, idx) {
  var token = tokens[idx];
  return "<td" + (token.align ? ' style="text-align:' + token.align + '"' : "") + ">";
};
rules.td_close = function() {
  return "</td>";
};
rules.strong_open = function() {
  return "<strong>";
};
rules.strong_close = function() {
  return "</strong>";
};
rules.em_open = function() {
  return "<em>";
};
rules.em_close = function() {
  return "</em>";
};
rules.del_open = function() {
  return "<del>";
};
rules.del_close = function() {
  return "</del>";
};
rules.ins_open = function() {
  return "<ins>";
};
rules.ins_close = function() {
  return "</ins>";
};
rules.mark_open = function() {
  return "<mark>";
};
rules.mark_close = function() {
  return "</mark>";
};
rules.sub = function(tokens, idx) {
  return "<sub>" + escapeHtml(tokens[idx].content) + "</sub>";
};
rules.sup = function(tokens, idx) {
  return "<sup>" + escapeHtml(tokens[idx].content) + "</sup>";
};
rules.hardbreak = function(tokens, idx, options) {
  return options.xhtmlOut ? "<br />\n" : "<br>\n";
};
rules.softbreak = function(tokens, idx, options) {
  return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
};
rules.text = function(tokens, idx) {
  return escapeHtml(tokens[idx].content);
};
rules.htmlblock = function(tokens, idx) {
  return tokens[idx].content;
};
rules.htmltag = function(tokens, idx) {
  return tokens[idx].content;
};
rules.abbr_open = function(tokens, idx) {
  return '<abbr title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '">';
};
rules.abbr_close = function() {
  return "</abbr>";
};
rules.footnote_ref = function(tokens, idx) {
  var n2 = Number(tokens[idx].id + 1).toString();
  var id = "fnref" + n2;
  if (tokens[idx].subId > 0) {
    id += ":" + tokens[idx].subId;
  }
  return '<sup class="footnote-ref"><a href="#fn' + n2 + '" id="' + id + '">[' + n2 + "]</a></sup>";
};
rules.footnote_block_open = function(tokens, idx, options) {
  var hr2 = options.xhtmlOut ? '<hr class="footnotes-sep" />\n' : '<hr class="footnotes-sep">\n';
  return hr2 + '<section class="footnotes">\n<ol class="footnotes-list">\n';
};
rules.footnote_block_close = function() {
  return "</ol>\n</section>\n";
};
rules.footnote_open = function(tokens, idx) {
  var id = Number(tokens[idx].id + 1).toString();
  return '<li id="fn' + id + '"  class="footnote-item">';
};
rules.footnote_close = function() {
  return "</li>\n";
};
rules.footnote_anchor = function(tokens, idx) {
  var n2 = Number(tokens[idx].id + 1).toString();
  var id = "fnref" + n2;
  if (tokens[idx].subId > 0) {
    id += ":" + tokens[idx].subId;
  }
  return ' <a href="#' + id + '" class="footnote-backref">\u21A9</a>';
};
rules.dl_open = function() {
  return "<dl>\n";
};
rules.dt_open = function() {
  return "<dt>";
};
rules.dd_open = function() {
  return "<dd>";
};
rules.dl_close = function() {
  return "</dl>\n";
};
rules.dt_close = function() {
  return "</dt>\n";
};
rules.dd_close = function() {
  return "</dd>\n";
};
function nextToken(tokens, idx) {
  if (++idx >= tokens.length - 2) {
    return idx;
  }
  if (tokens[idx].type === "paragraph_open" && tokens[idx].tight && (tokens[idx + 1].type === "inline" && tokens[idx + 1].content.length === 0) && (tokens[idx + 2].type === "paragraph_close" && tokens[idx + 2].tight)) {
    return nextToken(tokens, idx + 2);
  }
  return idx;
}
var getBreak = rules.getBreak = function getBreak2(tokens, idx) {
  idx = nextToken(tokens, idx);
  if (idx < tokens.length && tokens[idx].type === "list_item_close") {
    return "";
  }
  return "\n";
};
function Renderer() {
  this.rules = assign({}, rules);
  this.getBreak = rules.getBreak;
}
Renderer.prototype.renderInline = function(tokens, options, env) {
  var _rules2 = this.rules;
  var len = tokens.length, i3 = 0;
  var result2 = "";
  while (len--) {
    result2 += _rules2[tokens[i3].type](tokens, i3++, options, env, this);
  }
  return result2;
};
Renderer.prototype.render = function(tokens, options, env) {
  var _rules2 = this.rules;
  var len = tokens.length, i3 = -1;
  var result2 = "";
  while (++i3 < len) {
    if (tokens[i3].type === "inline") {
      result2 += this.renderInline(tokens[i3].children, options, env);
    } else {
      result2 += _rules2[tokens[i3].type](tokens, i3, options, env, this);
    }
  }
  return result2;
};
function Ruler() {
  this.__rules__ = [];
  this.__cache__ = null;
}
Ruler.prototype.__find__ = function(name) {
  var len = this.__rules__.length;
  var i3 = -1;
  while (len--) {
    if (this.__rules__[++i3].name === name) {
      return i3;
    }
  }
  return -1;
};
Ruler.prototype.__compile__ = function() {
  var self = this;
  var chains = [""];
  self.__rules__.forEach(function(rule) {
    if (!rule.enabled) {
      return;
    }
    rule.alt.forEach(function(altName) {
      if (chains.indexOf(altName) < 0) {
        chains.push(altName);
      }
    });
  });
  self.__cache__ = {};
  chains.forEach(function(chain) {
    self.__cache__[chain] = [];
    self.__rules__.forEach(function(rule) {
      if (!rule.enabled) {
        return;
      }
      if (chain && rule.alt.indexOf(chain) < 0) {
        return;
      }
      self.__cache__[chain].push(rule.fn);
    });
  });
};
Ruler.prototype.at = function(name, fn, options) {
  var idx = this.__find__(name);
  var opt = options || {};
  if (idx === -1) {
    throw new Error("Parser rule not found: " + name);
  }
  this.__rules__[idx].fn = fn;
  this.__rules__[idx].alt = opt.alt || [];
  this.__cache__ = null;
};
Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
  var idx = this.__find__(beforeName);
  var opt = options || {};
  if (idx === -1) {
    throw new Error("Parser rule not found: " + beforeName);
  }
  this.__rules__.splice(idx, 0, {
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler.prototype.after = function(afterName, ruleName, fn, options) {
  var idx = this.__find__(afterName);
  var opt = options || {};
  if (idx === -1) {
    throw new Error("Parser rule not found: " + afterName);
  }
  this.__rules__.splice(idx + 1, 0, {
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler.prototype.push = function(ruleName, fn, options) {
  var opt = options || {};
  this.__rules__.push({
    name: ruleName,
    enabled: true,
    fn,
    alt: opt.alt || []
  });
  this.__cache__ = null;
};
Ruler.prototype.enable = function(list2, strict) {
  list2 = !Array.isArray(list2) ? [list2] : list2;
  if (strict) {
    this.__rules__.forEach(function(rule) {
      rule.enabled = false;
    });
  }
  list2.forEach(function(name) {
    var idx = this.__find__(name);
    if (idx < 0) {
      throw new Error("Rules manager: invalid rule name " + name);
    }
    this.__rules__[idx].enabled = true;
  }, this);
  this.__cache__ = null;
};
Ruler.prototype.disable = function(list2) {
  list2 = !Array.isArray(list2) ? [list2] : list2;
  list2.forEach(function(name) {
    var idx = this.__find__(name);
    if (idx < 0) {
      throw new Error("Rules manager: invalid rule name " + name);
    }
    this.__rules__[idx].enabled = false;
  }, this);
  this.__cache__ = null;
};
Ruler.prototype.getRules = function(chainName) {
  if (this.__cache__ === null) {
    this.__compile__();
  }
  return this.__cache__[chainName] || [];
};
function block(state2) {
  if (state2.inlineMode) {
    state2.tokens.push({
      type: "inline",
      content: state2.src.replace(/\n/g, " ").trim(),
      level: 0,
      lines: [0, 1],
      children: []
    });
  } else {
    state2.block.parse(state2.src, state2.options, state2.env, state2.tokens);
  }
}
function StateInline(src, parserInline, options, env, outTokens) {
  this.src = src;
  this.env = env;
  this.options = options;
  this.parser = parserInline;
  this.tokens = outTokens;
  this.pos = 0;
  this.posMax = this.src.length;
  this.level = 0;
  this.pending = "";
  this.pendingLevel = 0;
  this.cache = [];
  this.isInLabel = false;
  this.linkLevel = 0;
  this.linkContent = "";
  this.labelUnmatchedScopes = 0;
}
StateInline.prototype.pushPending = function() {
  this.tokens.push({
    type: "text",
    content: this.pending,
    level: this.pendingLevel
  });
  this.pending = "";
};
StateInline.prototype.push = function(token) {
  if (this.pending) {
    this.pushPending();
  }
  this.tokens.push(token);
  this.pendingLevel = this.level;
};
StateInline.prototype.cacheSet = function(key, val) {
  for (var i3 = this.cache.length; i3 <= key; i3++) {
    this.cache.push(0);
  }
  this.cache[key] = val;
};
StateInline.prototype.cacheGet = function(key) {
  return key < this.cache.length ? this.cache[key] : 0;
};
function parseLinkLabel(state2, start) {
  var level, found, marker, labelEnd = -1, max = state2.posMax, oldPos = state2.pos, oldFlag = state2.isInLabel;
  if (state2.isInLabel) {
    return -1;
  }
  if (state2.labelUnmatchedScopes) {
    state2.labelUnmatchedScopes--;
    return -1;
  }
  state2.pos = start + 1;
  state2.isInLabel = true;
  level = 1;
  while (state2.pos < max) {
    marker = state2.src.charCodeAt(state2.pos);
    if (marker === 91) {
      level++;
    } else if (marker === 93) {
      level--;
      if (level === 0) {
        found = true;
        break;
      }
    }
    state2.parser.skipToken(state2);
  }
  if (found) {
    labelEnd = state2.pos;
    state2.labelUnmatchedScopes = 0;
  } else {
    state2.labelUnmatchedScopes = level - 1;
  }
  state2.pos = oldPos;
  state2.isInLabel = oldFlag;
  return labelEnd;
}
function parseAbbr(str, parserInline, options, env) {
  var state2, labelEnd, pos, max, label, title;
  if (str.charCodeAt(0) !== 42) {
    return -1;
  }
  if (str.charCodeAt(1) !== 91) {
    return -1;
  }
  if (str.indexOf("]:") === -1) {
    return -1;
  }
  state2 = new StateInline(str, parserInline, options, env, []);
  labelEnd = parseLinkLabel(state2, 1);
  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
    return -1;
  }
  max = state2.posMax;
  for (pos = labelEnd + 2; pos < max; pos++) {
    if (state2.src.charCodeAt(pos) === 10) {
      break;
    }
  }
  label = str.slice(2, labelEnd);
  title = str.slice(labelEnd + 2, pos).trim();
  if (title.length === 0) {
    return -1;
  }
  if (!env.abbreviations) {
    env.abbreviations = {};
  }
  if (typeof env.abbreviations[":" + label] === "undefined") {
    env.abbreviations[":" + label] = title;
  }
  return pos;
}
function abbr(state2) {
  var tokens = state2.tokens, i3, l2, content, pos;
  if (state2.inlineMode) {
    return;
  }
  for (i3 = 1, l2 = tokens.length - 1; i3 < l2; i3++) {
    if (tokens[i3 - 1].type === "paragraph_open" && tokens[i3].type === "inline" && tokens[i3 + 1].type === "paragraph_close") {
      content = tokens[i3].content;
      while (content.length) {
        pos = parseAbbr(content, state2.inline, state2.options, state2.env);
        if (pos < 0) {
          break;
        }
        content = content.slice(pos).trim();
      }
      tokens[i3].content = content;
      if (!content.length) {
        tokens[i3 - 1].tight = true;
        tokens[i3 + 1].tight = true;
      }
    }
  }
}
function normalizeLink(url) {
  var normalized = replaceEntities(url);
  try {
    normalized = decodeURI(normalized);
  } catch (err) {
  }
  return encodeURI(normalized);
}
function parseLinkDestination(state2, pos) {
  var code2, level, link, start = pos, max = state2.posMax;
  if (state2.src.charCodeAt(pos) === 60) {
    pos++;
    while (pos < max) {
      code2 = state2.src.charCodeAt(pos);
      if (code2 === 10) {
        return false;
      }
      if (code2 === 62) {
        link = normalizeLink(unescapeMd(state2.src.slice(start + 1, pos)));
        if (!state2.parser.validateLink(link)) {
          return false;
        }
        state2.pos = pos + 1;
        state2.linkContent = link;
        return true;
      }
      if (code2 === 92 && pos + 1 < max) {
        pos += 2;
        continue;
      }
      pos++;
    }
    return false;
  }
  level = 0;
  while (pos < max) {
    code2 = state2.src.charCodeAt(pos);
    if (code2 === 32) {
      break;
    }
    if (code2 < 32 || code2 === 127) {
      break;
    }
    if (code2 === 92 && pos + 1 < max) {
      pos += 2;
      continue;
    }
    if (code2 === 40) {
      level++;
      if (level > 1) {
        break;
      }
    }
    if (code2 === 41) {
      level--;
      if (level < 0) {
        break;
      }
    }
    pos++;
  }
  if (start === pos) {
    return false;
  }
  link = unescapeMd(state2.src.slice(start, pos));
  if (!state2.parser.validateLink(link)) {
    return false;
  }
  state2.linkContent = link;
  state2.pos = pos;
  return true;
}
function parseLinkTitle(state2, pos) {
  var code2, start = pos, max = state2.posMax, marker = state2.src.charCodeAt(pos);
  if (marker !== 34 && marker !== 39 && marker !== 40) {
    return false;
  }
  pos++;
  if (marker === 40) {
    marker = 41;
  }
  while (pos < max) {
    code2 = state2.src.charCodeAt(pos);
    if (code2 === marker) {
      state2.pos = pos + 1;
      state2.linkContent = unescapeMd(state2.src.slice(start + 1, pos));
      return true;
    }
    if (code2 === 92 && pos + 1 < max) {
      pos += 2;
      continue;
    }
    pos++;
  }
  return false;
}
function normalizeReference(str) {
  return str.trim().replace(/\s+/g, " ").toUpperCase();
}
function parseReference(str, parser, options, env) {
  var state2, labelEnd, pos, max, code2, start, href, title, label;
  if (str.charCodeAt(0) !== 91) {
    return -1;
  }
  if (str.indexOf("]:") === -1) {
    return -1;
  }
  state2 = new StateInline(str, parser, options, env, []);
  labelEnd = parseLinkLabel(state2, 0);
  if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
    return -1;
  }
  max = state2.posMax;
  for (pos = labelEnd + 2; pos < max; pos++) {
    code2 = state2.src.charCodeAt(pos);
    if (code2 !== 32 && code2 !== 10) {
      break;
    }
  }
  if (!parseLinkDestination(state2, pos)) {
    return -1;
  }
  href = state2.linkContent;
  pos = state2.pos;
  start = pos;
  for (pos = pos + 1; pos < max; pos++) {
    code2 = state2.src.charCodeAt(pos);
    if (code2 !== 32 && code2 !== 10) {
      break;
    }
  }
  if (pos < max && start !== pos && parseLinkTitle(state2, pos)) {
    title = state2.linkContent;
    pos = state2.pos;
  } else {
    title = "";
    pos = start;
  }
  while (pos < max && state2.src.charCodeAt(pos) === 32) {
    pos++;
  }
  if (pos < max && state2.src.charCodeAt(pos) !== 10) {
    return -1;
  }
  label = normalizeReference(str.slice(1, labelEnd));
  if (typeof env.references[label] === "undefined") {
    env.references[label] = { title, href };
  }
  return pos;
}
function references(state2) {
  var tokens = state2.tokens, i3, l2, content, pos;
  state2.env.references = state2.env.references || {};
  if (state2.inlineMode) {
    return;
  }
  for (i3 = 1, l2 = tokens.length - 1; i3 < l2; i3++) {
    if (tokens[i3].type === "inline" && tokens[i3 - 1].type === "paragraph_open" && tokens[i3 + 1].type === "paragraph_close") {
      content = tokens[i3].content;
      while (content.length) {
        pos = parseReference(content, state2.inline, state2.options, state2.env);
        if (pos < 0) {
          break;
        }
        content = content.slice(pos).trim();
      }
      tokens[i3].content = content;
      if (!content.length) {
        tokens[i3 - 1].tight = true;
        tokens[i3 + 1].tight = true;
      }
    }
  }
}
function inline(state2) {
  var tokens = state2.tokens, tok, i3, l2;
  for (i3 = 0, l2 = tokens.length; i3 < l2; i3++) {
    tok = tokens[i3];
    if (tok.type === "inline") {
      state2.inline.parse(tok.content, state2.options, state2.env, tok.children);
    }
  }
}
function footnote_block(state2) {
  var i3, l2, j2, t2, lastParagraph, list2, tokens, current, currentLabel, level = 0, insideRef = false, refTokens = {};
  if (!state2.env.footnotes) {
    return;
  }
  state2.tokens = state2.tokens.filter(function(tok) {
    if (tok.type === "footnote_reference_open") {
      insideRef = true;
      current = [];
      currentLabel = tok.label;
      return false;
    }
    if (tok.type === "footnote_reference_close") {
      insideRef = false;
      refTokens[":" + currentLabel] = current;
      return false;
    }
    if (insideRef) {
      current.push(tok);
    }
    return !insideRef;
  });
  if (!state2.env.footnotes.list) {
    return;
  }
  list2 = state2.env.footnotes.list;
  state2.tokens.push({
    type: "footnote_block_open",
    level: level++
  });
  for (i3 = 0, l2 = list2.length; i3 < l2; i3++) {
    state2.tokens.push({
      type: "footnote_open",
      id: i3,
      level: level++
    });
    if (list2[i3].tokens) {
      tokens = [];
      tokens.push({
        type: "paragraph_open",
        tight: false,
        level: level++
      });
      tokens.push({
        type: "inline",
        content: "",
        level,
        children: list2[i3].tokens
      });
      tokens.push({
        type: "paragraph_close",
        tight: false,
        level: --level
      });
    } else if (list2[i3].label) {
      tokens = refTokens[":" + list2[i3].label];
    }
    state2.tokens = state2.tokens.concat(tokens);
    if (state2.tokens[state2.tokens.length - 1].type === "paragraph_close") {
      lastParagraph = state2.tokens.pop();
    } else {
      lastParagraph = null;
    }
    t2 = list2[i3].count > 0 ? list2[i3].count : 1;
    for (j2 = 0; j2 < t2; j2++) {
      state2.tokens.push({
        type: "footnote_anchor",
        id: i3,
        subId: j2,
        level
      });
    }
    if (lastParagraph) {
      state2.tokens.push(lastParagraph);
    }
    state2.tokens.push({
      type: "footnote_close",
      level: --level
    });
  }
  state2.tokens.push({
    type: "footnote_block_close",
    level: --level
  });
}
var PUNCT_CHARS = ` 
()[]'".,!?-`;
function regEscape(s2) {
  return s2.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1");
}
function abbr2(state2) {
  var i3, j2, l2, tokens, token, text2, nodes, pos, level, reg, m2, regText, blockTokens = state2.tokens;
  if (!state2.env.abbreviations) {
    return;
  }
  if (!state2.env.abbrRegExp) {
    regText = "(^|[" + PUNCT_CHARS.split("").map(regEscape).join("") + "])(" + Object.keys(state2.env.abbreviations).map(function(x2) {
      return x2.substr(1);
    }).sort(function(a2, b2) {
      return b2.length - a2.length;
    }).map(regEscape).join("|") + ")($|[" + PUNCT_CHARS.split("").map(regEscape).join("") + "])";
    state2.env.abbrRegExp = new RegExp(regText, "g");
  }
  reg = state2.env.abbrRegExp;
  for (j2 = 0, l2 = blockTokens.length; j2 < l2; j2++) {
    if (blockTokens[j2].type !== "inline") {
      continue;
    }
    tokens = blockTokens[j2].children;
    for (i3 = tokens.length - 1; i3 >= 0; i3--) {
      token = tokens[i3];
      if (token.type !== "text") {
        continue;
      }
      pos = 0;
      text2 = token.content;
      reg.lastIndex = 0;
      level = token.level;
      nodes = [];
      while (m2 = reg.exec(text2)) {
        if (reg.lastIndex > pos) {
          nodes.push({
            type: "text",
            content: text2.slice(pos, m2.index + m2[1].length),
            level
          });
        }
        nodes.push({
          type: "abbr_open",
          title: state2.env.abbreviations[":" + m2[2]],
          level: level++
        });
        nodes.push({
          type: "text",
          content: m2[2],
          level
        });
        nodes.push({
          type: "abbr_close",
          level: --level
        });
        pos = reg.lastIndex - m2[3].length;
      }
      if (!nodes.length) {
        continue;
      }
      if (pos < text2.length) {
        nodes.push({
          type: "text",
          content: text2.slice(pos),
          level
        });
      }
      blockTokens[j2].children = tokens = [].concat(tokens.slice(0, i3), nodes, tokens.slice(i3 + 1));
    }
  }
}
var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
var SCOPED_ABBR = {
  "c": "\xA9",
  "r": "\xAE",
  "p": "\xA7",
  "tm": "\u2122"
};
function replaceScopedAbbr(str) {
  if (str.indexOf("(") < 0) {
    return str;
  }
  return str.replace(SCOPED_ABBR_RE, function(match, name) {
    return SCOPED_ABBR[name.toLowerCase()];
  });
}
function replace(state2) {
  var i3, token, text2, inlineTokens, blkIdx;
  if (!state2.options.typographer) {
    return;
  }
  for (blkIdx = state2.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    if (state2.tokens[blkIdx].type !== "inline") {
      continue;
    }
    inlineTokens = state2.tokens[blkIdx].children;
    for (i3 = inlineTokens.length - 1; i3 >= 0; i3--) {
      token = inlineTokens[i3];
      if (token.type === "text") {
        text2 = token.content;
        text2 = replaceScopedAbbr(text2);
        if (RARE_RE.test(text2)) {
          text2 = text2.replace(/\+-/g, "\xB1").replace(/\.{2,}/g, "\u2026").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/mg, "$1\u2014$2").replace(/(^|\s)--(\s|$)/mg, "$1\u2013$2").replace(/(^|[^-\s])--([^-\s]|$)/mg, "$1\u2013$2");
        }
        token.content = text2;
      }
    }
  }
}
var QUOTE_TEST_RE = /['"]/;
var QUOTE_RE = /['"]/g;
var PUNCT_RE = /[-\s()\[\]]/;
var APOSTROPHE = "\u2019";
function isLetter(str, pos) {
  if (pos < 0 || pos >= str.length) {
    return false;
  }
  return !PUNCT_RE.test(str[pos]);
}
function replaceAt(str, index, ch) {
  return str.substr(0, index) + ch + str.substr(index + 1);
}
function smartquotes(state2) {
  var i3, token, text2, t2, pos, max, thisLevel, lastSpace, nextSpace, item, canOpen, canClose, j2, isSingle, blkIdx, tokens, stack;
  if (!state2.options.typographer) {
    return;
  }
  stack = [];
  for (blkIdx = state2.tokens.length - 1; blkIdx >= 0; blkIdx--) {
    if (state2.tokens[blkIdx].type !== "inline") {
      continue;
    }
    tokens = state2.tokens[blkIdx].children;
    stack.length = 0;
    for (i3 = 0; i3 < tokens.length; i3++) {
      token = tokens[i3];
      if (token.type !== "text" || QUOTE_TEST_RE.test(token.text)) {
        continue;
      }
      thisLevel = tokens[i3].level;
      for (j2 = stack.length - 1; j2 >= 0; j2--) {
        if (stack[j2].level <= thisLevel) {
          break;
        }
      }
      stack.length = j2 + 1;
      text2 = token.content;
      pos = 0;
      max = text2.length;
      OUTER:
        while (pos < max) {
          QUOTE_RE.lastIndex = pos;
          t2 = QUOTE_RE.exec(text2);
          if (!t2) {
            break;
          }
          lastSpace = !isLetter(text2, t2.index - 1);
          pos = t2.index + 1;
          isSingle = t2[0] === "'";
          nextSpace = !isLetter(text2, pos);
          if (!nextSpace && !lastSpace) {
            if (isSingle) {
              token.content = replaceAt(token.content, t2.index, APOSTROPHE);
            }
            continue;
          }
          canOpen = !nextSpace;
          canClose = !lastSpace;
          if (canClose) {
            for (j2 = stack.length - 1; j2 >= 0; j2--) {
              item = stack[j2];
              if (stack[j2].level < thisLevel) {
                break;
              }
              if (item.single === isSingle && stack[j2].level === thisLevel) {
                item = stack[j2];
                if (isSingle) {
                  tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state2.options.quotes[2]);
                  token.content = replaceAt(token.content, t2.index, state2.options.quotes[3]);
                } else {
                  tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, state2.options.quotes[0]);
                  token.content = replaceAt(token.content, t2.index, state2.options.quotes[1]);
                }
                stack.length = j2;
                continue OUTER;
              }
            }
          }
          if (canOpen) {
            stack.push({
              token: i3,
              pos: t2.index,
              single: isSingle,
              level: thisLevel
            });
          } else if (canClose && isSingle) {
            token.content = replaceAt(token.content, t2.index, APOSTROPHE);
          }
        }
    }
  }
}
var _rules = [
  ["block", block],
  ["abbr", abbr],
  ["references", references],
  ["inline", inline],
  ["footnote_tail", footnote_block],
  ["abbr2", abbr2],
  ["replacements", replace],
  ["smartquotes", smartquotes]
];
function Core() {
  this.options = {};
  this.ruler = new Ruler();
  for (var i3 = 0; i3 < _rules.length; i3++) {
    this.ruler.push(_rules[i3][0], _rules[i3][1]);
  }
}
Core.prototype.process = function(state2) {
  var i3, l2, rules2;
  rules2 = this.ruler.getRules("");
  for (i3 = 0, l2 = rules2.length; i3 < l2; i3++) {
    rules2[i3](state2);
  }
};
function StateBlock(src, parser, options, env, tokens) {
  var ch, s2, start, pos, len, indent, indent_found;
  this.src = src;
  this.parser = parser;
  this.options = options;
  this.env = env;
  this.tokens = tokens;
  this.bMarks = [];
  this.eMarks = [];
  this.tShift = [];
  this.blkIndent = 0;
  this.line = 0;
  this.lineMax = 0;
  this.tight = false;
  this.parentType = "root";
  this.ddIndent = -1;
  this.level = 0;
  this.result = "";
  s2 = this.src;
  indent = 0;
  indent_found = false;
  for (start = pos = indent = 0, len = s2.length; pos < len; pos++) {
    ch = s2.charCodeAt(pos);
    if (!indent_found) {
      if (ch === 32) {
        indent++;
        continue;
      } else {
        indent_found = true;
      }
    }
    if (ch === 10 || pos === len - 1) {
      if (ch !== 10) {
        pos++;
      }
      this.bMarks.push(start);
      this.eMarks.push(pos);
      this.tShift.push(indent);
      indent_found = false;
      indent = 0;
      start = pos + 1;
    }
  }
  this.bMarks.push(s2.length);
  this.eMarks.push(s2.length);
  this.tShift.push(0);
  this.lineMax = this.bMarks.length - 1;
}
StateBlock.prototype.isEmpty = function isEmpty(line) {
  return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
};
StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
  for (var max = this.lineMax; from < max; from++) {
    if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
      break;
    }
  }
  return from;
};
StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
  for (var max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== 32) {
      break;
    }
  }
  return pos;
};
StateBlock.prototype.skipChars = function skipChars(pos, code2) {
  for (var max = this.src.length; pos < max; pos++) {
    if (this.src.charCodeAt(pos) !== code2) {
      break;
    }
  }
  return pos;
};
StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code2, min) {
  if (pos <= min) {
    return pos;
  }
  while (pos > min) {
    if (code2 !== this.src.charCodeAt(--pos)) {
      return pos + 1;
    }
  }
  return pos;
};
StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
  var i3, first, last, queue, shift, line = begin;
  if (begin >= end) {
    return "";
  }
  if (line + 1 === end) {
    first = this.bMarks[line] + Math.min(this.tShift[line], indent);
    last = keepLastLF ? this.eMarks[line] + 1 : this.eMarks[line];
    return this.src.slice(first, last);
  }
  queue = new Array(end - begin);
  for (i3 = 0; line < end; line++, i3++) {
    shift = this.tShift[line];
    if (shift > indent) {
      shift = indent;
    }
    if (shift < 0) {
      shift = 0;
    }
    first = this.bMarks[line] + shift;
    if (line + 1 < end || keepLastLF) {
      last = this.eMarks[line] + 1;
    } else {
      last = this.eMarks[line];
    }
    queue[i3] = this.src.slice(first, last);
  }
  return queue.join("");
};
function code(state2, startLine, endLine) {
  var nextLine, last;
  if (state2.tShift[startLine] - state2.blkIndent < 4) {
    return false;
  }
  last = nextLine = startLine + 1;
  while (nextLine < endLine) {
    if (state2.isEmpty(nextLine)) {
      nextLine++;
      continue;
    }
    if (state2.tShift[nextLine] - state2.blkIndent >= 4) {
      nextLine++;
      last = nextLine;
      continue;
    }
    break;
  }
  state2.line = nextLine;
  state2.tokens.push({
    type: "code",
    content: state2.getLines(startLine, last, 4 + state2.blkIndent, true),
    block: true,
    lines: [startLine, state2.line],
    level: state2.level
  });
  return true;
}
function fences(state2, startLine, endLine, silent) {
  var marker, len, params, nextLine, mem, haveEndMarker = false, pos = state2.bMarks[startLine] + state2.tShift[startLine], max = state2.eMarks[startLine];
  if (pos + 3 > max) {
    return false;
  }
  marker = state2.src.charCodeAt(pos);
  if (marker !== 126 && marker !== 96) {
    return false;
  }
  mem = pos;
  pos = state2.skipChars(pos, marker);
  len = pos - mem;
  if (len < 3) {
    return false;
  }
  params = state2.src.slice(pos, max).trim();
  if (params.indexOf("`") >= 0) {
    return false;
  }
  if (silent) {
    return true;
  }
  nextLine = startLine;
  for (; ; ) {
    nextLine++;
    if (nextLine >= endLine) {
      break;
    }
    pos = mem = state2.bMarks[nextLine] + state2.tShift[nextLine];
    max = state2.eMarks[nextLine];
    if (pos < max && state2.tShift[nextLine] < state2.blkIndent) {
      break;
    }
    if (state2.src.charCodeAt(pos) !== marker) {
      continue;
    }
    if (state2.tShift[nextLine] - state2.blkIndent >= 4) {
      continue;
    }
    pos = state2.skipChars(pos, marker);
    if (pos - mem < len) {
      continue;
    }
    pos = state2.skipSpaces(pos);
    if (pos < max) {
      continue;
    }
    haveEndMarker = true;
    break;
  }
  len = state2.tShift[startLine];
  state2.line = nextLine + (haveEndMarker ? 1 : 0);
  state2.tokens.push({
    type: "fence",
    params,
    content: state2.getLines(startLine + 1, nextLine, len, true),
    lines: [startLine, state2.line],
    level: state2.level
  });
  return true;
}
function blockquote(state2, startLine, endLine, silent) {
  var nextLine, lastLineEmpty, oldTShift, oldBMarks, oldIndent, oldParentType, lines, terminatorRules, i3, l2, terminate, pos = state2.bMarks[startLine] + state2.tShift[startLine], max = state2.eMarks[startLine];
  if (pos > max) {
    return false;
  }
  if (state2.src.charCodeAt(pos++) !== 62) {
    return false;
  }
  if (state2.level >= state2.options.maxNesting) {
    return false;
  }
  if (silent) {
    return true;
  }
  if (state2.src.charCodeAt(pos) === 32) {
    pos++;
  }
  oldIndent = state2.blkIndent;
  state2.blkIndent = 0;
  oldBMarks = [state2.bMarks[startLine]];
  state2.bMarks[startLine] = pos;
  pos = pos < max ? state2.skipSpaces(pos) : pos;
  lastLineEmpty = pos >= max;
  oldTShift = [state2.tShift[startLine]];
  state2.tShift[startLine] = pos - state2.bMarks[startLine];
  terminatorRules = state2.parser.ruler.getRules("blockquote");
  for (nextLine = startLine + 1; nextLine < endLine; nextLine++) {
    pos = state2.bMarks[nextLine] + state2.tShift[nextLine];
    max = state2.eMarks[nextLine];
    if (pos >= max) {
      break;
    }
    if (state2.src.charCodeAt(pos++) === 62) {
      if (state2.src.charCodeAt(pos) === 32) {
        pos++;
      }
      oldBMarks.push(state2.bMarks[nextLine]);
      state2.bMarks[nextLine] = pos;
      pos = pos < max ? state2.skipSpaces(pos) : pos;
      lastLineEmpty = pos >= max;
      oldTShift.push(state2.tShift[nextLine]);
      state2.tShift[nextLine] = pos - state2.bMarks[nextLine];
      continue;
    }
    if (lastLineEmpty) {
      break;
    }
    terminate = false;
    for (i3 = 0, l2 = terminatorRules.length; i3 < l2; i3++) {
      if (terminatorRules[i3](state2, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
    oldBMarks.push(state2.bMarks[nextLine]);
    oldTShift.push(state2.tShift[nextLine]);
    state2.tShift[nextLine] = -1337;
  }
  oldParentType = state2.parentType;
  state2.parentType = "blockquote";
  state2.tokens.push({
    type: "blockquote_open",
    lines: lines = [startLine, 0],
    level: state2.level++
  });
  state2.parser.tokenize(state2, startLine, nextLine);
  state2.tokens.push({
    type: "blockquote_close",
    level: --state2.level
  });
  state2.parentType = oldParentType;
  lines[1] = state2.line;
  for (i3 = 0; i3 < oldTShift.length; i3++) {
    state2.bMarks[i3 + startLine] = oldBMarks[i3];
    state2.tShift[i3 + startLine] = oldTShift[i3];
  }
  state2.blkIndent = oldIndent;
  return true;
}
function hr(state2, startLine, endLine, silent) {
  var marker, cnt, ch, pos = state2.bMarks[startLine], max = state2.eMarks[startLine];
  pos += state2.tShift[startLine];
  if (pos > max) {
    return false;
  }
  marker = state2.src.charCodeAt(pos++);
  if (marker !== 42 && marker !== 45 && marker !== 95) {
    return false;
  }
  cnt = 1;
  while (pos < max) {
    ch = state2.src.charCodeAt(pos++);
    if (ch !== marker && ch !== 32) {
      return false;
    }
    if (ch === marker) {
      cnt++;
    }
  }
  if (cnt < 3) {
    return false;
  }
  if (silent) {
    return true;
  }
  state2.line = startLine + 1;
  state2.tokens.push({
    type: "hr",
    lines: [startLine, state2.line],
    level: state2.level
  });
  return true;
}
function skipBulletListMarker(state2, startLine) {
  var marker, pos, max;
  pos = state2.bMarks[startLine] + state2.tShift[startLine];
  max = state2.eMarks[startLine];
  if (pos >= max) {
    return -1;
  }
  marker = state2.src.charCodeAt(pos++);
  if (marker !== 42 && marker !== 45 && marker !== 43) {
    return -1;
  }
  if (pos < max && state2.src.charCodeAt(pos) !== 32) {
    return -1;
  }
  return pos;
}
function skipOrderedListMarker(state2, startLine) {
  var ch, pos = state2.bMarks[startLine] + state2.tShift[startLine], max = state2.eMarks[startLine];
  if (pos + 1 >= max) {
    return -1;
  }
  ch = state2.src.charCodeAt(pos++);
  if (ch < 48 || ch > 57) {
    return -1;
  }
  for (; ; ) {
    if (pos >= max) {
      return -1;
    }
    ch = state2.src.charCodeAt(pos++);
    if (ch >= 48 && ch <= 57) {
      continue;
    }
    if (ch === 41 || ch === 46) {
      break;
    }
    return -1;
  }
  if (pos < max && state2.src.charCodeAt(pos) !== 32) {
    return -1;
  }
  return pos;
}
function markTightParagraphs(state2, idx) {
  var i3, l2, level = state2.level + 2;
  for (i3 = idx + 2, l2 = state2.tokens.length - 2; i3 < l2; i3++) {
    if (state2.tokens[i3].level === level && state2.tokens[i3].type === "paragraph_open") {
      state2.tokens[i3 + 2].tight = true;
      state2.tokens[i3].tight = true;
      i3 += 2;
    }
  }
}
function list(state2, startLine, endLine, silent) {
  var nextLine, indent, oldTShift, oldIndent, oldTight, oldParentType, start, posAfterMarker, max, indentAfterMarker, markerValue, markerCharCode, isOrdered, contentStart, listTokIdx, prevEmptyEnd, listLines, itemLines, tight = true, terminatorRules, i3, l2, terminate;
  if ((posAfterMarker = skipOrderedListMarker(state2, startLine)) >= 0) {
    isOrdered = true;
  } else if ((posAfterMarker = skipBulletListMarker(state2, startLine)) >= 0) {
    isOrdered = false;
  } else {
    return false;
  }
  if (state2.level >= state2.options.maxNesting) {
    return false;
  }
  markerCharCode = state2.src.charCodeAt(posAfterMarker - 1);
  if (silent) {
    return true;
  }
  listTokIdx = state2.tokens.length;
  if (isOrdered) {
    start = state2.bMarks[startLine] + state2.tShift[startLine];
    markerValue = Number(state2.src.substr(start, posAfterMarker - start - 1));
    state2.tokens.push({
      type: "ordered_list_open",
      order: markerValue,
      lines: listLines = [startLine, 0],
      level: state2.level++
    });
  } else {
    state2.tokens.push({
      type: "bullet_list_open",
      lines: listLines = [startLine, 0],
      level: state2.level++
    });
  }
  nextLine = startLine;
  prevEmptyEnd = false;
  terminatorRules = state2.parser.ruler.getRules("list");
  while (nextLine < endLine) {
    contentStart = state2.skipSpaces(posAfterMarker);
    max = state2.eMarks[nextLine];
    if (contentStart >= max) {
      indentAfterMarker = 1;
    } else {
      indentAfterMarker = contentStart - posAfterMarker;
    }
    if (indentAfterMarker > 4) {
      indentAfterMarker = 1;
    }
    if (indentAfterMarker < 1) {
      indentAfterMarker = 1;
    }
    indent = posAfterMarker - state2.bMarks[nextLine] + indentAfterMarker;
    state2.tokens.push({
      type: "list_item_open",
      lines: itemLines = [startLine, 0],
      level: state2.level++
    });
    oldIndent = state2.blkIndent;
    oldTight = state2.tight;
    oldTShift = state2.tShift[startLine];
    oldParentType = state2.parentType;
    state2.tShift[startLine] = contentStart - state2.bMarks[startLine];
    state2.blkIndent = indent;
    state2.tight = true;
    state2.parentType = "list";
    state2.parser.tokenize(state2, startLine, endLine, true);
    if (!state2.tight || prevEmptyEnd) {
      tight = false;
    }
    prevEmptyEnd = state2.line - startLine > 1 && state2.isEmpty(state2.line - 1);
    state2.blkIndent = oldIndent;
    state2.tShift[startLine] = oldTShift;
    state2.tight = oldTight;
    state2.parentType = oldParentType;
    state2.tokens.push({
      type: "list_item_close",
      level: --state2.level
    });
    nextLine = startLine = state2.line;
    itemLines[1] = nextLine;
    contentStart = state2.bMarks[startLine];
    if (nextLine >= endLine) {
      break;
    }
    if (state2.isEmpty(nextLine)) {
      break;
    }
    if (state2.tShift[nextLine] < state2.blkIndent) {
      break;
    }
    terminate = false;
    for (i3 = 0, l2 = terminatorRules.length; i3 < l2; i3++) {
      if (terminatorRules[i3](state2, nextLine, endLine, true)) {
        terminate = true;
        break;
      }
    }
    if (terminate) {
      break;
    }
    if (isOrdered) {
      posAfterMarker = skipOrderedListMarker(state2, nextLine);
      if (posAfterMarker < 0) {
        break;
      }
    } else {
      posAfterMarker = skipBulletListMarker(state2, nextLine);
      if (posAfterMarker < 0) {
        break;
      }
    }
    if (markerCharCode !== state2.src.charCodeAt(posAfterMarker - 1)) {
      break;
    }
  }
  state2.tokens.push({
    type: isOrdered ? "ordered_list_close" : "bullet_list_close",
    level: --state2.level
  });
  listLines[1] = nextLine;
  state2.line = nextLine;
  if (tight) {
    markTightParagraphs(state2, listTokIdx);
  }
  return true;
}
function footnote(state2, startLine, endLine, silent) {
  var oldBMark, oldTShift, oldParentType, pos, label, start = state2.bMarks[startLine] + state2.tShift[startLine], max = state2.eMarks[startLine];
  if (start + 4 > max) {
    return false;
  }
  if (state2.src.charCodeAt(start) !== 91) {
    return false;
  }
  if (state2.src.charCodeAt(start + 1) !== 94) {
    return false;
  }
  if (state2.level >= state2.options.maxNesting) {
    return false;
  }
  for (pos = start + 2; pos < max; pos++) {
    if (state2.src.charCodeAt(pos) === 32) {
      return false;
    }
    if (state2.src.charCodeAt(pos) === 93) {
      break;
    }
  }
  if (pos === start + 2) {
    return false;
  }
  if (pos + 1 >= max || state2.src.charCodeAt(++pos) !== 58) {
    return false;
  }
  if (silent) {
    return true;
  }
  pos++;
  if (!state2.env.footnotes) {
    state2.env.footnotes = {};
  }
  if (!state2.env.footnotes.refs) {
    state2.env.footnotes.refs = {};
  }
  label = state2.src.slice(start + 2, pos - 2);
  state2.env.footnotes.refs[":" + label] = -1;
  state2.tokens.push({
    type: "footnote_reference_open",
    label,
    level: state2.level++
  });
  oldBMark = state2.bMarks[startLine];
  oldTShift = state2.tShift[startLine];
  oldParentType = state2.parentType;
  state2.tShift[startLine] = state2.skipSpaces(pos) - pos;
  state2.bMarks[startLine] = pos;
  state2.blkIndent += 4;
  state2.parentType = "footnote";
  if (state2.tShift[startLine] < state2.blkIndent) {
    state2.tShift[startLine] += state2.blkIndent;
    state2.bMarks[startLine] -= state2.blkIndent;
  }
  state2.parser.tokenize(state2, startLine, endLine, true);
  state2.parentType = oldParentType;
  state2.blkIndent -= 4;
  state2.tShift[startLine] = oldTShift;
  state2.bMarks[startLine] = oldBMark;
  state2.tokens.push({
    type: "footnote_reference_close",
    level: --state2.level
  });
  return true;
}
function heading(state2, startLine, endLine, silent) {
  var ch, level, tmp, pos = state2.bMarks[startLine] + state2.tShift[startLine], max = state2.eMarks[startLine];
  if (pos >= max) {
    return false;
  }
  ch = state2.src.charCodeAt(pos);
  if (ch !== 35 || pos >= max) {
    return false;
  }
  level = 1;
  ch = state2.src.charCodeAt(++pos);
  while (ch === 35 && pos < max && level <= 6) {
    level++;
    ch = state2.src.charCodeAt(++pos);
  }
  if (level > 6 || pos < max && ch !== 32) {
    return false;
  }
  if (silent) {
    return true;
  }
  max = state2.skipCharsBack(max, 32, pos);
  tmp = state2.skipCharsBack(max, 35, pos);
  if (tmp > pos && state2.src.charCodeAt(tmp - 1) === 32) {
    max = tmp;
  }
  state2.line = startLine + 1;
  state2.tokens.push({
    type: "heading_open",
    hLevel: level,
    lines: [startLine, state2.line],
    level: state2.level
  });
  if (pos < max) {
    state2.tokens.push({
      type: "inline",
      content: state2.src.slice(pos, max).trim(),
      level: state2.level + 1,
      lines: [startLine, state2.line],
      children: []
    });
  }
  state2.tokens.push({ type: "heading_close", hLevel: level, level: state2.level });
  return true;
}
function lheading(state2, startLine, endLine) {
  var marker, pos, max, next = startLine + 1;
  if (next >= endLine) {
    return false;
  }
  if (state2.tShift[next] < state2.blkIndent) {
    return false;
  }
  if (state2.tShift[next] - state2.blkIndent > 3) {
    return false;
  }
  pos = state2.bMarks[next] + state2.tShift[next];
  max = state2.eMarks[next];
  if (pos >= max) {
    return false;
  }
  marker = state2.src.charCodeAt(pos);
  if (marker !== 45 && marker !== 61) {
    return false;
  }
  pos = state2.skipChars(pos, marker);
  pos = state2.skipSpaces(pos);
  if (pos < max) {
    return false;
  }
  pos = state2.bMarks[startLine] + state2.tShift[startLine];
  state2.line = next + 1;
  state2.tokens.push({
    type: "heading_open",
    hLevel: marker === 61 ? 1 : 2,
    lines: [startLine, state2.line],
    level: state2.level
  });
  state2.tokens.push({
    type: "inline",
    content: state2.src.slice(pos, state2.eMarks[startLine]).trim(),
    level: state2.level + 1,
    lines: [startLine, state2.line - 1],
    children: []
  });
  state2.tokens.push({
    type: "heading_close",
    hLevel: marker === 61 ? 1 : 2,
    level: state2.level
  });
  return true;
}
var html_blocks = {};
[
  "article",
  "aside",
  "button",
  "blockquote",
  "body",
  "canvas",
  "caption",
  "col",
  "colgroup",
  "dd",
  "div",
  "dl",
  "dt",
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
  "header",
  "hgroup",
  "hr",
  "iframe",
  "li",
  "map",
  "object",
  "ol",
  "output",
  "p",
  "pre",
  "progress",
  "script",
  "section",
  "style",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "tr",
  "thead",
  "ul",
  "video"
].forEach(function(name) {
  html_blocks[name] = true;
});
var HTML_TAG_OPEN_RE = /^<([a-zA-Z]{1,15})[\s\/>]/;
var HTML_TAG_CLOSE_RE = /^<\/([a-zA-Z]{1,15})[\s>]/;
function isLetter$1(ch) {
  var lc = ch | 32;
  return lc >= 97 && lc <= 122;
}
function htmlblock(state2, startLine, endLine, silent) {
  var ch, match, nextLine, pos = state2.bMarks[startLine], max = state2.eMarks[startLine], shift = state2.tShift[startLine];
  pos += shift;
  if (!state2.options.html) {
    return false;
  }
  if (shift > 3 || pos + 2 >= max) {
    return false;
  }
  if (state2.src.charCodeAt(pos) !== 60) {
    return false;
  }
  ch = state2.src.charCodeAt(pos + 1);
  if (ch === 33 || ch === 63) {
    if (silent) {
      return true;
    }
  } else if (ch === 47 || isLetter$1(ch)) {
    if (ch === 47) {
      match = state2.src.slice(pos, max).match(HTML_TAG_CLOSE_RE);
      if (!match) {
        return false;
      }
    } else {
      match = state2.src.slice(pos, max).match(HTML_TAG_OPEN_RE);
      if (!match) {
        return false;
      }
    }
    if (html_blocks[match[1].toLowerCase()] !== true) {
      return false;
    }
    if (silent) {
      return true;
    }
  } else {
    return false;
  }
  nextLine = startLine + 1;
  while (nextLine < state2.lineMax && !state2.isEmpty(nextLine)) {
    nextLine++;
  }
  state2.line = nextLine;
  state2.tokens.push({
    type: "htmlblock",
    level: state2.level,
    lines: [startLine, state2.line],
    content: state2.getLines(startLine, nextLine, 0, true)
  });
  return true;
}
function getLine(state2, line) {
  var pos = state2.bMarks[line] + state2.blkIndent, max = state2.eMarks[line];
  return state2.src.substr(pos, max - pos);
}
function table(state2, startLine, endLine, silent) {
  var ch, lineText, pos, i3, nextLine, rows, cell, aligns, t2, tableLines, tbodyLines;
  if (startLine + 2 > endLine) {
    return false;
  }
  nextLine = startLine + 1;
  if (state2.tShift[nextLine] < state2.blkIndent) {
    return false;
  }
  pos = state2.bMarks[nextLine] + state2.tShift[nextLine];
  if (pos >= state2.eMarks[nextLine]) {
    return false;
  }
  ch = state2.src.charCodeAt(pos);
  if (ch !== 124 && ch !== 45 && ch !== 58) {
    return false;
  }
  lineText = getLine(state2, startLine + 1);
  if (!/^[-:| ]+$/.test(lineText)) {
    return false;
  }
  rows = lineText.split("|");
  if (rows <= 2) {
    return false;
  }
  aligns = [];
  for (i3 = 0; i3 < rows.length; i3++) {
    t2 = rows[i3].trim();
    if (!t2) {
      if (i3 === 0 || i3 === rows.length - 1) {
        continue;
      } else {
        return false;
      }
    }
    if (!/^:?-+:?$/.test(t2)) {
      return false;
    }
    if (t2.charCodeAt(t2.length - 1) === 58) {
      aligns.push(t2.charCodeAt(0) === 58 ? "center" : "right");
    } else if (t2.charCodeAt(0) === 58) {
      aligns.push("left");
    } else {
      aligns.push("");
    }
  }
  lineText = getLine(state2, startLine).trim();
  if (lineText.indexOf("|") === -1) {
    return false;
  }
  rows = lineText.replace(/^\||\|$/g, "").split("|");
  if (aligns.length !== rows.length) {
    return false;
  }
  if (silent) {
    return true;
  }
  state2.tokens.push({
    type: "table_open",
    lines: tableLines = [startLine, 0],
    level: state2.level++
  });
  state2.tokens.push({
    type: "thead_open",
    lines: [startLine, startLine + 1],
    level: state2.level++
  });
  state2.tokens.push({
    type: "tr_open",
    lines: [startLine, startLine + 1],
    level: state2.level++
  });
  for (i3 = 0; i3 < rows.length; i3++) {
    state2.tokens.push({
      type: "th_open",
      align: aligns[i3],
      lines: [startLine, startLine + 1],
      level: state2.level++
    });
    state2.tokens.push({
      type: "inline",
      content: rows[i3].trim(),
      lines: [startLine, startLine + 1],
      level: state2.level,
      children: []
    });
    state2.tokens.push({ type: "th_close", level: --state2.level });
  }
  state2.tokens.push({ type: "tr_close", level: --state2.level });
  state2.tokens.push({ type: "thead_close", level: --state2.level });
  state2.tokens.push({
    type: "tbody_open",
    lines: tbodyLines = [startLine + 2, 0],
    level: state2.level++
  });
  for (nextLine = startLine + 2; nextLine < endLine; nextLine++) {
    if (state2.tShift[nextLine] < state2.blkIndent) {
      break;
    }
    lineText = getLine(state2, nextLine).trim();
    if (lineText.indexOf("|") === -1) {
      break;
    }
    rows = lineText.replace(/^\||\|$/g, "").split("|");
    state2.tokens.push({ type: "tr_open", level: state2.level++ });
    for (i3 = 0; i3 < rows.length; i3++) {
      state2.tokens.push({ type: "td_open", align: aligns[i3], level: state2.level++ });
      cell = rows[i3].substring(
        rows[i3].charCodeAt(0) === 124 ? 1 : 0,
        rows[i3].charCodeAt(rows[i3].length - 1) === 124 ? rows[i3].length - 1 : rows[i3].length
      ).trim();
      state2.tokens.push({
        type: "inline",
        content: cell,
        level: state2.level,
        children: []
      });
      state2.tokens.push({ type: "td_close", level: --state2.level });
    }
    state2.tokens.push({ type: "tr_close", level: --state2.level });
  }
  state2.tokens.push({ type: "tbody_close", level: --state2.level });
  state2.tokens.push({ type: "table_close", level: --state2.level });
  tableLines[1] = tbodyLines[1] = nextLine;
  state2.line = nextLine;
  return true;
}
function skipMarker(state2, line) {
  var pos, marker, start = state2.bMarks[line] + state2.tShift[line], max = state2.eMarks[line];
  if (start >= max) {
    return -1;
  }
  marker = state2.src.charCodeAt(start++);
  if (marker !== 126 && marker !== 58) {
    return -1;
  }
  pos = state2.skipSpaces(start);
  if (start === pos) {
    return -1;
  }
  if (pos >= max) {
    return -1;
  }
  return pos;
}
function markTightParagraphs$1(state2, idx) {
  var i3, l2, level = state2.level + 2;
  for (i3 = idx + 2, l2 = state2.tokens.length - 2; i3 < l2; i3++) {
    if (state2.tokens[i3].level === level && state2.tokens[i3].type === "paragraph_open") {
      state2.tokens[i3 + 2].tight = true;
      state2.tokens[i3].tight = true;
      i3 += 2;
    }
  }
}
function deflist(state2, startLine, endLine, silent) {
  var contentStart, ddLine, dtLine, itemLines, listLines, listTokIdx, nextLine, oldIndent, oldDDIndent, oldParentType, oldTShift, oldTight, prevEmptyEnd, tight;
  if (silent) {
    if (state2.ddIndent < 0) {
      return false;
    }
    return skipMarker(state2, startLine) >= 0;
  }
  nextLine = startLine + 1;
  if (state2.isEmpty(nextLine)) {
    if (++nextLine > endLine) {
      return false;
    }
  }
  if (state2.tShift[nextLine] < state2.blkIndent) {
    return false;
  }
  contentStart = skipMarker(state2, nextLine);
  if (contentStart < 0) {
    return false;
  }
  if (state2.level >= state2.options.maxNesting) {
    return false;
  }
  listTokIdx = state2.tokens.length;
  state2.tokens.push({
    type: "dl_open",
    lines: listLines = [startLine, 0],
    level: state2.level++
  });
  dtLine = startLine;
  ddLine = nextLine;
  OUTER:
    for (; ; ) {
      tight = true;
      prevEmptyEnd = false;
      state2.tokens.push({
        type: "dt_open",
        lines: [dtLine, dtLine],
        level: state2.level++
      });
      state2.tokens.push({
        type: "inline",
        content: state2.getLines(dtLine, dtLine + 1, state2.blkIndent, false).trim(),
        level: state2.level + 1,
        lines: [dtLine, dtLine],
        children: []
      });
      state2.tokens.push({
        type: "dt_close",
        level: --state2.level
      });
      for (; ; ) {
        state2.tokens.push({
          type: "dd_open",
          lines: itemLines = [nextLine, 0],
          level: state2.level++
        });
        oldTight = state2.tight;
        oldDDIndent = state2.ddIndent;
        oldIndent = state2.blkIndent;
        oldTShift = state2.tShift[ddLine];
        oldParentType = state2.parentType;
        state2.blkIndent = state2.ddIndent = state2.tShift[ddLine] + 2;
        state2.tShift[ddLine] = contentStart - state2.bMarks[ddLine];
        state2.tight = true;
        state2.parentType = "deflist";
        state2.parser.tokenize(state2, ddLine, endLine, true);
        if (!state2.tight || prevEmptyEnd) {
          tight = false;
        }
        prevEmptyEnd = state2.line - ddLine > 1 && state2.isEmpty(state2.line - 1);
        state2.tShift[ddLine] = oldTShift;
        state2.tight = oldTight;
        state2.parentType = oldParentType;
        state2.blkIndent = oldIndent;
        state2.ddIndent = oldDDIndent;
        state2.tokens.push({
          type: "dd_close",
          level: --state2.level
        });
        itemLines[1] = nextLine = state2.line;
        if (nextLine >= endLine) {
          break OUTER;
        }
        if (state2.tShift[nextLine] < state2.blkIndent) {
          break OUTER;
        }
        contentStart = skipMarker(state2, nextLine);
        if (contentStart < 0) {
          break;
        }
        ddLine = nextLine;
      }
      if (nextLine >= endLine) {
        break;
      }
      dtLine = nextLine;
      if (state2.isEmpty(dtLine)) {
        break;
      }
      if (state2.tShift[dtLine] < state2.blkIndent) {
        break;
      }
      ddLine = dtLine + 1;
      if (ddLine >= endLine) {
        break;
      }
      if (state2.isEmpty(ddLine)) {
        ddLine++;
      }
      if (ddLine >= endLine) {
        break;
      }
      if (state2.tShift[ddLine] < state2.blkIndent) {
        break;
      }
      contentStart = skipMarker(state2, ddLine);
      if (contentStart < 0) {
        break;
      }
    }
  state2.tokens.push({
    type: "dl_close",
    level: --state2.level
  });
  listLines[1] = nextLine;
  state2.line = nextLine;
  if (tight) {
    markTightParagraphs$1(state2, listTokIdx);
  }
  return true;
}
function paragraph(state2, startLine) {
  var endLine, content, terminate, i3, l2, nextLine = startLine + 1, terminatorRules;
  endLine = state2.lineMax;
  if (nextLine < endLine && !state2.isEmpty(nextLine)) {
    terminatorRules = state2.parser.ruler.getRules("paragraph");
    for (; nextLine < endLine && !state2.isEmpty(nextLine); nextLine++) {
      if (state2.tShift[nextLine] - state2.blkIndent > 3) {
        continue;
      }
      terminate = false;
      for (i3 = 0, l2 = terminatorRules.length; i3 < l2; i3++) {
        if (terminatorRules[i3](state2, nextLine, endLine, true)) {
          terminate = true;
          break;
        }
      }
      if (terminate) {
        break;
      }
    }
  }
  content = state2.getLines(startLine, nextLine, state2.blkIndent, false).trim();
  state2.line = nextLine;
  if (content.length) {
    state2.tokens.push({
      type: "paragraph_open",
      tight: false,
      lines: [startLine, state2.line],
      level: state2.level
    });
    state2.tokens.push({
      type: "inline",
      content,
      level: state2.level + 1,
      lines: [startLine, state2.line],
      children: []
    });
    state2.tokens.push({
      type: "paragraph_close",
      tight: false,
      level: state2.level
    });
  }
  return true;
}
var _rules$1 = [
  ["code", code],
  ["fences", fences, ["paragraph", "blockquote", "list"]],
  ["blockquote", blockquote, ["paragraph", "blockquote", "list"]],
  ["hr", hr, ["paragraph", "blockquote", "list"]],
  ["list", list, ["paragraph", "blockquote"]],
  ["footnote", footnote, ["paragraph"]],
  ["heading", heading, ["paragraph", "blockquote"]],
  ["lheading", lheading],
  ["htmlblock", htmlblock, ["paragraph", "blockquote"]],
  ["table", table, ["paragraph"]],
  ["deflist", deflist, ["paragraph"]],
  ["paragraph", paragraph]
];
function ParserBlock() {
  this.ruler = new Ruler();
  for (var i3 = 0; i3 < _rules$1.length; i3++) {
    this.ruler.push(_rules$1[i3][0], _rules$1[i3][1], {
      alt: (_rules$1[i3][2] || []).slice()
    });
  }
}
ParserBlock.prototype.tokenize = function(state2, startLine, endLine) {
  var rules2 = this.ruler.getRules("");
  var len = rules2.length;
  var line = startLine;
  var hasEmptyLines = false;
  var ok, i3;
  while (line < endLine) {
    state2.line = line = state2.skipEmptyLines(line);
    if (line >= endLine) {
      break;
    }
    if (state2.tShift[line] < state2.blkIndent) {
      break;
    }
    for (i3 = 0; i3 < len; i3++) {
      ok = rules2[i3](state2, line, endLine, false);
      if (ok) {
        break;
      }
    }
    state2.tight = !hasEmptyLines;
    if (state2.isEmpty(state2.line - 1)) {
      hasEmptyLines = true;
    }
    line = state2.line;
    if (line < endLine && state2.isEmpty(line)) {
      hasEmptyLines = true;
      line++;
      if (line < endLine && state2.parentType === "list" && state2.isEmpty(line)) {
        break;
      }
      state2.line = line;
    }
  }
};
var TABS_SCAN_RE = /[\n\t]/g;
var NEWLINES_RE = /\r[\n\u0085]|[\u2424\u2028\u0085]/g;
var SPACES_RE = /\u00a0/g;
ParserBlock.prototype.parse = function(str, options, env, outTokens) {
  var state2, lineStart = 0, lastTabPos = 0;
  if (!str) {
    return [];
  }
  str = str.replace(SPACES_RE, " ");
  str = str.replace(NEWLINES_RE, "\n");
  if (str.indexOf("	") >= 0) {
    str = str.replace(TABS_SCAN_RE, function(match, offset) {
      var result2;
      if (str.charCodeAt(offset) === 10) {
        lineStart = offset + 1;
        lastTabPos = 0;
        return match;
      }
      result2 = "    ".slice((offset - lineStart - lastTabPos) % 4);
      lastTabPos = offset - lineStart + 1;
      return result2;
    });
  }
  state2 = new StateBlock(str, this, options, env, outTokens);
  this.tokenize(state2, state2.line, state2.lineMax);
};
function isTerminatorChar(ch) {
  switch (ch) {
    case 10:
    case 92:
    case 96:
    case 42:
    case 95:
    case 94:
    case 91:
    case 93:
    case 33:
    case 38:
    case 60:
    case 62:
    case 123:
    case 125:
    case 36:
    case 37:
    case 64:
    case 126:
    case 43:
    case 61:
    case 58:
      return true;
    default:
      return false;
  }
}
function text(state2, silent) {
  var pos = state2.pos;
  while (pos < state2.posMax && !isTerminatorChar(state2.src.charCodeAt(pos))) {
    pos++;
  }
  if (pos === state2.pos) {
    return false;
  }
  if (!silent) {
    state2.pending += state2.src.slice(state2.pos, pos);
  }
  state2.pos = pos;
  return true;
}
function newline(state2, silent) {
  var pmax, max, pos = state2.pos;
  if (state2.src.charCodeAt(pos) !== 10) {
    return false;
  }
  pmax = state2.pending.length - 1;
  max = state2.posMax;
  if (!silent) {
    if (pmax >= 0 && state2.pending.charCodeAt(pmax) === 32) {
      if (pmax >= 1 && state2.pending.charCodeAt(pmax - 1) === 32) {
        for (var i3 = pmax - 2; i3 >= 0; i3--) {
          if (state2.pending.charCodeAt(i3) !== 32) {
            state2.pending = state2.pending.substring(0, i3 + 1);
            break;
          }
        }
        state2.push({
          type: "hardbreak",
          level: state2.level
        });
      } else {
        state2.pending = state2.pending.slice(0, -1);
        state2.push({
          type: "softbreak",
          level: state2.level
        });
      }
    } else {
      state2.push({
        type: "softbreak",
        level: state2.level
      });
    }
  }
  pos++;
  while (pos < max && state2.src.charCodeAt(pos) === 32) {
    pos++;
  }
  state2.pos = pos;
  return true;
}
var ESCAPED = [];
for (i3 = 0; i3 < 256; i3++) {
  ESCAPED.push(0);
}
var i3;
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch) {
  ESCAPED[ch.charCodeAt(0)] = 1;
});
function escape(state2, silent) {
  var ch, pos = state2.pos, max = state2.posMax;
  if (state2.src.charCodeAt(pos) !== 92) {
    return false;
  }
  pos++;
  if (pos < max) {
    ch = state2.src.charCodeAt(pos);
    if (ch < 256 && ESCAPED[ch] !== 0) {
      if (!silent) {
        state2.pending += state2.src[pos];
      }
      state2.pos += 2;
      return true;
    }
    if (ch === 10) {
      if (!silent) {
        state2.push({
          type: "hardbreak",
          level: state2.level
        });
      }
      pos++;
      while (pos < max && state2.src.charCodeAt(pos) === 32) {
        pos++;
      }
      state2.pos = pos;
      return true;
    }
  }
  if (!silent) {
    state2.pending += "\\";
  }
  state2.pos++;
  return true;
}
function backticks(state2, silent) {
  var start, max, marker, matchStart, matchEnd, pos = state2.pos, ch = state2.src.charCodeAt(pos);
  if (ch !== 96) {
    return false;
  }
  start = pos;
  pos++;
  max = state2.posMax;
  while (pos < max && state2.src.charCodeAt(pos) === 96) {
    pos++;
  }
  marker = state2.src.slice(start, pos);
  matchStart = matchEnd = pos;
  while ((matchStart = state2.src.indexOf("`", matchEnd)) !== -1) {
    matchEnd = matchStart + 1;
    while (matchEnd < max && state2.src.charCodeAt(matchEnd) === 96) {
      matchEnd++;
    }
    if (matchEnd - matchStart === marker.length) {
      if (!silent) {
        state2.push({
          type: "code",
          content: state2.src.slice(pos, matchStart).replace(/[ \n]+/g, " ").trim(),
          block: false,
          level: state2.level
        });
      }
      state2.pos = matchEnd;
      return true;
    }
  }
  if (!silent) {
    state2.pending += marker;
  }
  state2.pos += marker.length;
  return true;
}
function del(state2, silent) {
  var found, pos, stack, max = state2.posMax, start = state2.pos, lastChar, nextChar;
  if (state2.src.charCodeAt(start) !== 126) {
    return false;
  }
  if (silent) {
    return false;
  }
  if (start + 4 >= max) {
    return false;
  }
  if (state2.src.charCodeAt(start + 1) !== 126) {
    return false;
  }
  if (state2.level >= state2.options.maxNesting) {
    return false;
  }
  lastChar = start > 0 ? state2.src.charCodeAt(start - 1) : -1;
  nextChar = state2.src.charCodeAt(start + 2);
  if (lastChar === 126) {
    return false;
  }
  if (nextChar === 126) {
    return false;
  }
  if (nextChar === 32 || nextChar === 10) {
    return false;
  }
  pos = start + 2;
  while (pos < max && state2.src.charCodeAt(pos) === 126) {
    pos++;
  }
  if (pos > start + 3) {
    state2.pos += pos - start;
    if (!silent) {
      state2.pending += state2.src.slice(start, pos);
    }
    return true;
  }
  state2.pos = start + 2;
  stack = 1;
  while (state2.pos + 1 < max) {
    if (state2.src.charCodeAt(state2.pos) === 126) {
      if (state2.src.charCodeAt(state2.pos + 1) === 126) {
        lastChar = state2.src.charCodeAt(state2.pos - 1);
        nextChar = state2.pos + 2 < max ? state2.src.charCodeAt(state2.pos + 2) : -1;
        if (nextChar !== 126 && lastChar !== 126) {
          if (lastChar !== 32 && lastChar !== 10) {
            stack--;
          } else if (nextChar !== 32 && nextChar !== 10) {
            stack++;
          }
          if (stack <= 0) {
            found = true;
            break;
          }
        }
      }
    }
    state2.parser.skipToken(state2);
  }
  if (!found) {
    state2.pos = start;
    return false;
  }
  state2.posMax = state2.pos;
  state2.pos = start + 2;
  if (!silent) {
    state2.push({ type: "del_open", level: state2.level++ });
    state2.parser.tokenize(state2);
    state2.push({ type: "del_close", level: --state2.level });
  }
  state2.pos = state2.posMax + 2;
  state2.posMax = max;
  return true;
}
function ins(state2, silent) {
  var found, pos, stack, max = state2.posMax, start = state2.pos, lastChar, nextChar;
  if (state2.src.charCodeAt(start) !== 43) {
    return false;
  }
  if (silent) {
    return false;
  }
  if (start + 4 >= max) {
    return false;
  }
  if (state2.src.charCodeAt(start + 1) !== 43) {
    return false;
  }
  if (state2.level >= state2.options.maxNesting) {
    return false;
  }
  lastChar = start > 0 ? state2.src.charCodeAt(start - 1) : -1;
  nextChar = state2.src.charCodeAt(start + 2);
  if (lastChar === 43) {
    return false;
  }
  if (nextChar === 43) {
    return false;
  }
  if (nextChar === 32 || nextChar === 10) {
    return false;
  }
  pos = start + 2;
  while (pos < max && state2.src.charCodeAt(pos) === 43) {
    pos++;
  }
  if (pos !== start + 2) {
    state2.pos += pos - start;
    if (!silent) {
      state2.pending += state2.src.slice(start, pos);
    }
    return true;
  }
  state2.pos = start + 2;
  stack = 1;
  while (state2.pos + 1 < max) {
    if (state2.src.charCodeAt(state2.pos) === 43) {
      if (state2.src.charCodeAt(state2.pos + 1) === 43) {
        lastChar = state2.src.charCodeAt(state2.pos - 1);
        nextChar = state2.pos + 2 < max ? state2.src.charCodeAt(state2.pos + 2) : -1;
        if (nextChar !== 43 && lastChar !== 43) {
          if (lastChar !== 32 && lastChar !== 10) {
            stack--;
          } else if (nextChar !== 32 && nextChar !== 10) {
            stack++;
          }
          if (stack <= 0) {
            found = true;
            break;
          }
        }
      }
    }
    state2.parser.skipToken(state2);
  }
  if (!found) {
    state2.pos = start;
    return false;
  }
  state2.posMax = state2.pos;
  state2.pos = start + 2;
  if (!silent) {
    state2.push({ type: "ins_open", level: state2.level++ });
    state2.parser.tokenize(state2);
    state2.push({ type: "ins_close", level: --state2.level });
  }
  state2.pos = state2.posMax + 2;
  state2.posMax = max;
  return true;
}
function mark(state2, silent) {
  var found, pos, stack, max = state2.posMax, start = state2.pos, lastChar, nextChar;
  if (state2.src.charCodeAt(start) !== 61) {
    return false;
  }
  if (silent) {
    return false;
  }
  if (start + 4 >= max) {
    return false;
  }
  if (state2.src.charCodeAt(start + 1) !== 61) {
    return false;
  }
  if (state2.level >= state2.options.maxNesting) {
    return false;
  }
  lastChar = start > 0 ? state2.src.charCodeAt(start - 1) : -1;
  nextChar = state2.src.charCodeAt(start + 2);
  if (lastChar === 61) {
    return false;
  }
  if (nextChar === 61) {
    return false;
  }
  if (nextChar === 32 || nextChar === 10) {
    return false;
  }
  pos = start + 2;
  while (pos < max && state2.src.charCodeAt(pos) === 61) {
    pos++;
  }
  if (pos !== start + 2) {
    state2.pos += pos - start;
    if (!silent) {
      state2.pending += state2.src.slice(start, pos);
    }
    return true;
  }
  state2.pos = start + 2;
  stack = 1;
  while (state2.pos + 1 < max) {
    if (state2.src.charCodeAt(state2.pos) === 61) {
      if (state2.src.charCodeAt(state2.pos + 1) === 61) {
        lastChar = state2.src.charCodeAt(state2.pos - 1);
        nextChar = state2.pos + 2 < max ? state2.src.charCodeAt(state2.pos + 2) : -1;
        if (nextChar !== 61 && lastChar !== 61) {
          if (lastChar !== 32 && lastChar !== 10) {
            stack--;
          } else if (nextChar !== 32 && nextChar !== 10) {
            stack++;
          }
          if (stack <= 0) {
            found = true;
            break;
          }
        }
      }
    }
    state2.parser.skipToken(state2);
  }
  if (!found) {
    state2.pos = start;
    return false;
  }
  state2.posMax = state2.pos;
  state2.pos = start + 2;
  if (!silent) {
    state2.push({ type: "mark_open", level: state2.level++ });
    state2.parser.tokenize(state2);
    state2.push({ type: "mark_close", level: --state2.level });
  }
  state2.pos = state2.posMax + 2;
  state2.posMax = max;
  return true;
}
function isAlphaNum(code2) {
  return code2 >= 48 && code2 <= 57 || code2 >= 65 && code2 <= 90 || code2 >= 97 && code2 <= 122;
}
function scanDelims(state2, start) {
  var pos = start, lastChar, nextChar, count, can_open = true, can_close = true, max = state2.posMax, marker = state2.src.charCodeAt(start);
  lastChar = start > 0 ? state2.src.charCodeAt(start - 1) : -1;
  while (pos < max && state2.src.charCodeAt(pos) === marker) {
    pos++;
  }
  if (pos >= max) {
    can_open = false;
  }
  count = pos - start;
  if (count >= 4) {
    can_open = can_close = false;
  } else {
    nextChar = pos < max ? state2.src.charCodeAt(pos) : -1;
    if (nextChar === 32 || nextChar === 10) {
      can_open = false;
    }
    if (lastChar === 32 || lastChar === 10) {
      can_close = false;
    }
    if (marker === 95) {
      if (isAlphaNum(lastChar)) {
        can_open = false;
      }
      if (isAlphaNum(nextChar)) {
        can_close = false;
      }
    }
  }
  return {
    can_open,
    can_close,
    delims: count
  };
}
function emphasis(state2, silent) {
  var startCount, count, found, oldCount, newCount, stack, res, max = state2.posMax, start = state2.pos, marker = state2.src.charCodeAt(start);
  if (marker !== 95 && marker !== 42) {
    return false;
  }
  if (silent) {
    return false;
  }
  res = scanDelims(state2, start);
  startCount = res.delims;
  if (!res.can_open) {
    state2.pos += startCount;
    if (!silent) {
      state2.pending += state2.src.slice(start, state2.pos);
    }
    return true;
  }
  if (state2.level >= state2.options.maxNesting) {
    return false;
  }
  state2.pos = start + startCount;
  stack = [startCount];
  while (state2.pos < max) {
    if (state2.src.charCodeAt(state2.pos) === marker) {
      res = scanDelims(state2, state2.pos);
      count = res.delims;
      if (res.can_close) {
        oldCount = stack.pop();
        newCount = count;
        while (oldCount !== newCount) {
          if (newCount < oldCount) {
            stack.push(oldCount - newCount);
            break;
          }
          newCount -= oldCount;
          if (stack.length === 0) {
            break;
          }
          state2.pos += oldCount;
          oldCount = stack.pop();
        }
        if (stack.length === 0) {
          startCount = oldCount;
          found = true;
          break;
        }
        state2.pos += count;
        continue;
      }
      if (res.can_open) {
        stack.push(count);
      }
      state2.pos += count;
      continue;
    }
    state2.parser.skipToken(state2);
  }
  if (!found) {
    state2.pos = start;
    return false;
  }
  state2.posMax = state2.pos;
  state2.pos = start + startCount;
  if (!silent) {
    if (startCount === 2 || startCount === 3) {
      state2.push({ type: "strong_open", level: state2.level++ });
    }
    if (startCount === 1 || startCount === 3) {
      state2.push({ type: "em_open", level: state2.level++ });
    }
    state2.parser.tokenize(state2);
    if (startCount === 1 || startCount === 3) {
      state2.push({ type: "em_close", level: --state2.level });
    }
    if (startCount === 2 || startCount === 3) {
      state2.push({ type: "strong_close", level: --state2.level });
    }
  }
  state2.pos = state2.posMax + startCount;
  state2.posMax = max;
  return true;
}
var UNESCAPE_RE = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
function sub(state2, silent) {
  var found, content, max = state2.posMax, start = state2.pos;
  if (state2.src.charCodeAt(start) !== 126) {
    return false;
  }
  if (silent) {
    return false;
  }
  if (start + 2 >= max) {
    return false;
  }
  if (state2.level >= state2.options.maxNesting) {
    return false;
  }
  state2.pos = start + 1;
  while (state2.pos < max) {
    if (state2.src.charCodeAt(state2.pos) === 126) {
      found = true;
      break;
    }
    state2.parser.skipToken(state2);
  }
  if (!found || start + 1 === state2.pos) {
    state2.pos = start;
    return false;
  }
  content = state2.src.slice(start + 1, state2.pos);
  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
    state2.pos = start;
    return false;
  }
  state2.posMax = state2.pos;
  state2.pos = start + 1;
  if (!silent) {
    state2.push({
      type: "sub",
      level: state2.level,
      content: content.replace(UNESCAPE_RE, "$1")
    });
  }
  state2.pos = state2.posMax + 1;
  state2.posMax = max;
  return true;
}
var UNESCAPE_RE$1 = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
function sup(state2, silent) {
  var found, content, max = state2.posMax, start = state2.pos;
  if (state2.src.charCodeAt(start) !== 94) {
    return false;
  }
  if (silent) {
    return false;
  }
  if (start + 2 >= max) {
    return false;
  }
  if (state2.level >= state2.options.maxNesting) {
    return false;
  }
  state2.pos = start + 1;
  while (state2.pos < max) {
    if (state2.src.charCodeAt(state2.pos) === 94) {
      found = true;
      break;
    }
    state2.parser.skipToken(state2);
  }
  if (!found || start + 1 === state2.pos) {
    state2.pos = start;
    return false;
  }
  content = state2.src.slice(start + 1, state2.pos);
  if (content.match(/(^|[^\\])(\\\\)*\s/)) {
    state2.pos = start;
    return false;
  }
  state2.posMax = state2.pos;
  state2.pos = start + 1;
  if (!silent) {
    state2.push({
      type: "sup",
      level: state2.level,
      content: content.replace(UNESCAPE_RE$1, "$1")
    });
  }
  state2.pos = state2.posMax + 1;
  state2.posMax = max;
  return true;
}
function links(state2, silent) {
  var labelStart, labelEnd, label, href, title, pos, ref, code2, isImage = false, oldPos = state2.pos, max = state2.posMax, start = state2.pos, marker = state2.src.charCodeAt(start);
  if (marker === 33) {
    isImage = true;
    marker = state2.src.charCodeAt(++start);
  }
  if (marker !== 91) {
    return false;
  }
  if (state2.level >= state2.options.maxNesting) {
    return false;
  }
  labelStart = start + 1;
  labelEnd = parseLinkLabel(state2, start);
  if (labelEnd < 0) {
    return false;
  }
  pos = labelEnd + 1;
  if (pos < max && state2.src.charCodeAt(pos) === 40) {
    pos++;
    for (; pos < max; pos++) {
      code2 = state2.src.charCodeAt(pos);
      if (code2 !== 32 && code2 !== 10) {
        break;
      }
    }
    if (pos >= max) {
      return false;
    }
    start = pos;
    if (parseLinkDestination(state2, pos)) {
      href = state2.linkContent;
      pos = state2.pos;
    } else {
      href = "";
    }
    start = pos;
    for (; pos < max; pos++) {
      code2 = state2.src.charCodeAt(pos);
      if (code2 !== 32 && code2 !== 10) {
        break;
      }
    }
    if (pos < max && start !== pos && parseLinkTitle(state2, pos)) {
      title = state2.linkContent;
      pos = state2.pos;
      for (; pos < max; pos++) {
        code2 = state2.src.charCodeAt(pos);
        if (code2 !== 32 && code2 !== 10) {
          break;
        }
      }
    } else {
      title = "";
    }
    if (pos >= max || state2.src.charCodeAt(pos) !== 41) {
      state2.pos = oldPos;
      return false;
    }
    pos++;
  } else {
    if (state2.linkLevel > 0) {
      return false;
    }
    for (; pos < max; pos++) {
      code2 = state2.src.charCodeAt(pos);
      if (code2 !== 32 && code2 !== 10) {
        break;
      }
    }
    if (pos < max && state2.src.charCodeAt(pos) === 91) {
      start = pos + 1;
      pos = parseLinkLabel(state2, pos);
      if (pos >= 0) {
        label = state2.src.slice(start, pos++);
      } else {
        pos = start - 1;
      }
    }
    if (!label) {
      if (typeof label === "undefined") {
        pos = labelEnd + 1;
      }
      label = state2.src.slice(labelStart, labelEnd);
    }
    ref = state2.env.references[normalizeReference(label)];
    if (!ref) {
      state2.pos = oldPos;
      return false;
    }
    href = ref.href;
    title = ref.title;
  }
  if (!silent) {
    state2.pos = labelStart;
    state2.posMax = labelEnd;
    if (isImage) {
      state2.push({
        type: "image",
        src: href,
        title,
        alt: state2.src.substr(labelStart, labelEnd - labelStart),
        level: state2.level
      });
    } else {
      state2.push({
        type: "link_open",
        href,
        title,
        level: state2.level++
      });
      state2.linkLevel++;
      state2.parser.tokenize(state2);
      state2.linkLevel--;
      state2.push({ type: "link_close", level: --state2.level });
    }
  }
  state2.pos = pos;
  state2.posMax = max;
  return true;
}
function footnote_inline(state2, silent) {
  var labelStart, labelEnd, footnoteId, oldLength, max = state2.posMax, start = state2.pos;
  if (start + 2 >= max) {
    return false;
  }
  if (state2.src.charCodeAt(start) !== 94) {
    return false;
  }
  if (state2.src.charCodeAt(start + 1) !== 91) {
    return false;
  }
  if (state2.level >= state2.options.maxNesting) {
    return false;
  }
  labelStart = start + 2;
  labelEnd = parseLinkLabel(state2, start + 1);
  if (labelEnd < 0) {
    return false;
  }
  if (!silent) {
    if (!state2.env.footnotes) {
      state2.env.footnotes = {};
    }
    if (!state2.env.footnotes.list) {
      state2.env.footnotes.list = [];
    }
    footnoteId = state2.env.footnotes.list.length;
    state2.pos = labelStart;
    state2.posMax = labelEnd;
    state2.push({
      type: "footnote_ref",
      id: footnoteId,
      level: state2.level
    });
    state2.linkLevel++;
    oldLength = state2.tokens.length;
    state2.parser.tokenize(state2);
    state2.env.footnotes.list[footnoteId] = { tokens: state2.tokens.splice(oldLength) };
    state2.linkLevel--;
  }
  state2.pos = labelEnd + 1;
  state2.posMax = max;
  return true;
}
function footnote_ref(state2, silent) {
  var label, pos, footnoteId, footnoteSubId, max = state2.posMax, start = state2.pos;
  if (start + 3 > max) {
    return false;
  }
  if (!state2.env.footnotes || !state2.env.footnotes.refs) {
    return false;
  }
  if (state2.src.charCodeAt(start) !== 91) {
    return false;
  }
  if (state2.src.charCodeAt(start + 1) !== 94) {
    return false;
  }
  if (state2.level >= state2.options.maxNesting) {
    return false;
  }
  for (pos = start + 2; pos < max; pos++) {
    if (state2.src.charCodeAt(pos) === 32) {
      return false;
    }
    if (state2.src.charCodeAt(pos) === 10) {
      return false;
    }
    if (state2.src.charCodeAt(pos) === 93) {
      break;
    }
  }
  if (pos === start + 2) {
    return false;
  }
  if (pos >= max) {
    return false;
  }
  pos++;
  label = state2.src.slice(start + 2, pos - 1);
  if (typeof state2.env.footnotes.refs[":" + label] === "undefined") {
    return false;
  }
  if (!silent) {
    if (!state2.env.footnotes.list) {
      state2.env.footnotes.list = [];
    }
    if (state2.env.footnotes.refs[":" + label] < 0) {
      footnoteId = state2.env.footnotes.list.length;
      state2.env.footnotes.list[footnoteId] = { label, count: 0 };
      state2.env.footnotes.refs[":" + label] = footnoteId;
    } else {
      footnoteId = state2.env.footnotes.refs[":" + label];
    }
    footnoteSubId = state2.env.footnotes.list[footnoteId].count;
    state2.env.footnotes.list[footnoteId].count++;
    state2.push({
      type: "footnote_ref",
      id: footnoteId,
      subId: footnoteSubId,
      level: state2.level
    });
  }
  state2.pos = pos;
  state2.posMax = max;
  return true;
}
var url_schemas = [
  "coap",
  "doi",
  "javascript",
  "aaa",
  "aaas",
  "about",
  "acap",
  "cap",
  "cid",
  "crid",
  "data",
  "dav",
  "dict",
  "dns",
  "file",
  "ftp",
  "geo",
  "go",
  "gopher",
  "h323",
  "http",
  "https",
  "iax",
  "icap",
  "im",
  "imap",
  "info",
  "ipp",
  "iris",
  "iris.beep",
  "iris.xpc",
  "iris.xpcs",
  "iris.lwz",
  "ldap",
  "mailto",
  "mid",
  "msrp",
  "msrps",
  "mtqp",
  "mupdate",
  "news",
  "nfs",
  "ni",
  "nih",
  "nntp",
  "opaquelocktoken",
  "pop",
  "pres",
  "rtsp",
  "service",
  "session",
  "shttp",
  "sieve",
  "sip",
  "sips",
  "sms",
  "snmp",
  "soap.beep",
  "soap.beeps",
  "tag",
  "tel",
  "telnet",
  "tftp",
  "thismessage",
  "tn3270",
  "tip",
  "tv",
  "urn",
  "vemmi",
  "ws",
  "wss",
  "xcon",
  "xcon-userid",
  "xmlrpc.beep",
  "xmlrpc.beeps",
  "xmpp",
  "z39.50r",
  "z39.50s",
  "adiumxtra",
  "afp",
  "afs",
  "aim",
  "apt",
  "attachment",
  "aw",
  "beshare",
  "bitcoin",
  "bolo",
  "callto",
  "chrome",
  "chrome-extension",
  "com-eventbrite-attendee",
  "content",
  "cvs",
  "dlna-playsingle",
  "dlna-playcontainer",
  "dtn",
  "dvb",
  "ed2k",
  "facetime",
  "feed",
  "finger",
  "fish",
  "gg",
  "git",
  "gizmoproject",
  "gtalk",
  "hcp",
  "icon",
  "ipn",
  "irc",
  "irc6",
  "ircs",
  "itms",
  "jar",
  "jms",
  "keyparc",
  "lastfm",
  "ldaps",
  "magnet",
  "maps",
  "market",
  "message",
  "mms",
  "ms-help",
  "msnim",
  "mumble",
  "mvn",
  "notes",
  "oid",
  "palm",
  "paparazzi",
  "platform",
  "proxy",
  "psyc",
  "query",
  "res",
  "resource",
  "rmi",
  "rsync",
  "rtmp",
  "secondlife",
  "sftp",
  "sgn",
  "skype",
  "smb",
  "soldat",
  "spotify",
  "ssh",
  "steam",
  "svn",
  "teamspeak",
  "things",
  "udp",
  "unreal",
  "ut2004",
  "ventrilo",
  "view-source",
  "webcal",
  "wtai",
  "wyciwyg",
  "xfire",
  "xri",
  "ymsgr"
];
var EMAIL_RE = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;
var AUTOLINK_RE = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
function autolink(state2, silent) {
  var tail, linkMatch, emailMatch, url, fullUrl, pos = state2.pos;
  if (state2.src.charCodeAt(pos) !== 60) {
    return false;
  }
  tail = state2.src.slice(pos);
  if (tail.indexOf(">") < 0) {
    return false;
  }
  linkMatch = tail.match(AUTOLINK_RE);
  if (linkMatch) {
    if (url_schemas.indexOf(linkMatch[1].toLowerCase()) < 0) {
      return false;
    }
    url = linkMatch[0].slice(1, -1);
    fullUrl = normalizeLink(url);
    if (!state2.parser.validateLink(url)) {
      return false;
    }
    if (!silent) {
      state2.push({
        type: "link_open",
        href: fullUrl,
        level: state2.level
      });
      state2.push({
        type: "text",
        content: url,
        level: state2.level + 1
      });
      state2.push({ type: "link_close", level: state2.level });
    }
    state2.pos += linkMatch[0].length;
    return true;
  }
  emailMatch = tail.match(EMAIL_RE);
  if (emailMatch) {
    url = emailMatch[0].slice(1, -1);
    fullUrl = normalizeLink("mailto:" + url);
    if (!state2.parser.validateLink(fullUrl)) {
      return false;
    }
    if (!silent) {
      state2.push({
        type: "link_open",
        href: fullUrl,
        level: state2.level
      });
      state2.push({
        type: "text",
        content: url,
        level: state2.level + 1
      });
      state2.push({ type: "link_close", level: state2.level });
    }
    state2.pos += emailMatch[0].length;
    return true;
  }
  return false;
}
function replace$1(regex, options) {
  regex = regex.source;
  options = options || "";
  return function self(name, val) {
    if (!name) {
      return new RegExp(regex, options);
    }
    val = val.source || val;
    regex = regex.replace(name, val);
    return self;
  };
}
var attr_name = /[a-zA-Z_:][a-zA-Z0-9:._-]*/;
var unquoted = /[^"'=<>`\x00-\x20]+/;
var single_quoted = /'[^']*'/;
var double_quoted = /"[^"]*"/;
var attr_value = replace$1(/(?:unquoted|single_quoted|double_quoted)/)("unquoted", unquoted)("single_quoted", single_quoted)("double_quoted", double_quoted)();
var attribute = replace$1(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name", attr_name)("attr_value", attr_value)();
var open_tag = replace$1(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute", attribute)();
var close_tag = /<\/[A-Za-z][A-Za-z0-9]*\s*>/;
var comment = /<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->/;
var processing = /<[?].*?[?]>/;
var declaration = /<![A-Z]+\s+[^>]*>/;
var cdata = /<!\[CDATA\[[\s\S]*?\]\]>/;
var HTML_TAG_RE = replace$1(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag", open_tag)("close_tag", close_tag)("comment", comment)("processing", processing)("declaration", declaration)("cdata", cdata)();
function isLetter$2(ch) {
  var lc = ch | 32;
  return lc >= 97 && lc <= 122;
}
function htmltag(state2, silent) {
  var ch, match, max, pos = state2.pos;
  if (!state2.options.html) {
    return false;
  }
  max = state2.posMax;
  if (state2.src.charCodeAt(pos) !== 60 || pos + 2 >= max) {
    return false;
  }
  ch = state2.src.charCodeAt(pos + 1);
  if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter$2(ch)) {
    return false;
  }
  match = state2.src.slice(pos).match(HTML_TAG_RE);
  if (!match) {
    return false;
  }
  if (!silent) {
    state2.push({
      type: "htmltag",
      content: state2.src.slice(pos, pos + match[0].length),
      level: state2.level
    });
  }
  state2.pos += match[0].length;
  return true;
}
var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i;
var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
function entity(state2, silent) {
  var ch, code2, match, pos = state2.pos, max = state2.posMax;
  if (state2.src.charCodeAt(pos) !== 38) {
    return false;
  }
  if (pos + 1 < max) {
    ch = state2.src.charCodeAt(pos + 1);
    if (ch === 35) {
      match = state2.src.slice(pos).match(DIGITAL_RE);
      if (match) {
        if (!silent) {
          code2 = match[1][0].toLowerCase() === "x" ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
          state2.pending += isValidEntityCode(code2) ? fromCodePoint(code2) : fromCodePoint(65533);
        }
        state2.pos += match[0].length;
        return true;
      }
    } else {
      match = state2.src.slice(pos).match(NAMED_RE);
      if (match) {
        var decoded = decodeEntity(match[1]);
        if (match[1] !== decoded) {
          if (!silent) {
            state2.pending += decoded;
          }
          state2.pos += match[0].length;
          return true;
        }
      }
    }
  }
  if (!silent) {
    state2.pending += "&";
  }
  state2.pos++;
  return true;
}
var _rules$2 = [
  ["text", text],
  ["newline", newline],
  ["escape", escape],
  ["backticks", backticks],
  ["del", del],
  ["ins", ins],
  ["mark", mark],
  ["emphasis", emphasis],
  ["sub", sub],
  ["sup", sup],
  ["links", links],
  ["footnote_inline", footnote_inline],
  ["footnote_ref", footnote_ref],
  ["autolink", autolink],
  ["htmltag", htmltag],
  ["entity", entity]
];
function ParserInline() {
  this.ruler = new Ruler();
  for (var i3 = 0; i3 < _rules$2.length; i3++) {
    this.ruler.push(_rules$2[i3][0], _rules$2[i3][1]);
  }
  this.validateLink = validateLink;
}
ParserInline.prototype.skipToken = function(state2) {
  var rules2 = this.ruler.getRules("");
  var len = rules2.length;
  var pos = state2.pos;
  var i3, cached_pos;
  if ((cached_pos = state2.cacheGet(pos)) > 0) {
    state2.pos = cached_pos;
    return;
  }
  for (i3 = 0; i3 < len; i3++) {
    if (rules2[i3](state2, true)) {
      state2.cacheSet(pos, state2.pos);
      return;
    }
  }
  state2.pos++;
  state2.cacheSet(pos, state2.pos);
};
ParserInline.prototype.tokenize = function(state2) {
  var rules2 = this.ruler.getRules("");
  var len = rules2.length;
  var end = state2.posMax;
  var ok, i3;
  while (state2.pos < end) {
    for (i3 = 0; i3 < len; i3++) {
      ok = rules2[i3](state2, false);
      if (ok) {
        break;
      }
    }
    if (ok) {
      if (state2.pos >= end) {
        break;
      }
      continue;
    }
    state2.pending += state2.src[state2.pos++];
  }
  if (state2.pending) {
    state2.pushPending();
  }
};
ParserInline.prototype.parse = function(str, options, env, outTokens) {
  var state2 = new StateInline(str, this, options, env, outTokens);
  this.tokenize(state2);
};
function validateLink(url) {
  var BAD_PROTOCOLS = ["vbscript", "javascript", "file", "data"];
  var str = url.trim().toLowerCase();
  str = replaceEntities(str);
  if (str.indexOf(":") !== -1 && BAD_PROTOCOLS.indexOf(str.split(":")[0]) !== -1) {
    return false;
  }
  return true;
}
var defaultConfig = {
  options: {
    html: false,
    // Enable HTML tags in source
    xhtmlOut: false,
    // Use '/' to close single tags (<br />)
    breaks: false,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkTarget: "",
    // set target to open link in
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: "\u201C\u201D\u2018\u2019",
    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    core: {
      rules: [
        "block",
        "inline",
        "references",
        "replacements",
        "smartquotes",
        "references",
        "abbr2",
        "footnote_tail"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fences",
        "footnote",
        "heading",
        "hr",
        "htmlblock",
        "lheading",
        "list",
        "paragraph",
        "table"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "del",
        "emphasis",
        "entity",
        "escape",
        "footnote_ref",
        "htmltag",
        "links",
        "newline",
        "text"
      ]
    }
  }
};
var fullConfig = {
  options: {
    html: false,
    // Enable HTML tags in source
    xhtmlOut: false,
    // Use '/' to close single tags (<br />)
    breaks: false,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkTarget: "",
    // set target to open link in
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: "\u201C\u201D\u2018\u2019",
    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    // Don't restrict core/block/inline rules
    core: {},
    block: {},
    inline: {}
  }
};
var commonmarkConfig = {
  options: {
    html: true,
    // Enable HTML tags in source
    xhtmlOut: true,
    // Use '/' to close single tags (<br />)
    breaks: false,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkTarget: "",
    // set target to open link in
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: "\u201C\u201D\u2018\u2019",
    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    core: {
      rules: [
        "block",
        "inline",
        "references",
        "abbr2"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fences",
        "heading",
        "hr",
        "htmlblock",
        "lheading",
        "list",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "htmltag",
        "links",
        "newline",
        "text"
      ]
    }
  }
};
var config = {
  "default": defaultConfig,
  "full": fullConfig,
  "commonmark": commonmarkConfig
};
function StateCore(instance, str, env) {
  this.src = str;
  this.env = env;
  this.options = instance.options;
  this.tokens = [];
  this.inlineMode = false;
  this.inline = instance.inline;
  this.block = instance.block;
  this.renderer = instance.renderer;
  this.typographer = instance.typographer;
}
function Remarkable(preset, options) {
  if (typeof preset !== "string") {
    options = preset;
    preset = "default";
  }
  if (options && options.linkify != null) {
    console.warn(
      "linkify option is removed. Use linkify plugin instead:\n\nimport Remarkable from 'remarkable';\nimport linkify from 'remarkable/linkify';\nnew Remarkable().use(linkify)\n"
    );
  }
  this.inline = new ParserInline();
  this.block = new ParserBlock();
  this.core = new Core();
  this.renderer = new Renderer();
  this.ruler = new Ruler();
  this.options = {};
  this.configure(config[preset]);
  this.set(options || {});
}
Remarkable.prototype.set = function(options) {
  assign(this.options, options);
};
Remarkable.prototype.configure = function(presets) {
  var self = this;
  if (!presets) {
    throw new Error("Wrong `remarkable` preset, check name/content");
  }
  if (presets.options) {
    self.set(presets.options);
  }
  if (presets.components) {
    Object.keys(presets.components).forEach(function(name) {
      if (presets.components[name].rules) {
        self[name].ruler.enable(presets.components[name].rules, true);
      }
    });
  }
};
Remarkable.prototype.use = function(plugin, options) {
  plugin(this, options);
  return this;
};
Remarkable.prototype.parse = function(str, env) {
  var state2 = new StateCore(this, str, env);
  this.core.process(state2);
  return state2.tokens;
};
Remarkable.prototype.render = function(str, env) {
  env = env || {};
  return this.renderer.render(this.parse(str, env), this.options, env);
};
Remarkable.prototype.parseInline = function(str, env) {
  var state2 = new StateCore(this, str, env);
  state2.inlineMode = true;
  this.core.process(state2);
  return state2.tokens;
};
Remarkable.prototype.renderInline = function(str, env) {
  env = env || {};
  return this.renderer.render(this.parseInline(str, env), this.options, env);
};

// src/components/FormHero.jsx
var FormHero = class extends FormLead {
  #default = {
    formPosition: "right",
    formWidth: "is-6",
    form: {},
    context: {
      lang: "en"
    }
  };
  constructor(props = {}) {
    super();
    this.eventName = "user:click-form-hero";
    this.state = this.initState(this.#default, props);
    this.getAttribute("id") || this.setAttribute("id", this.state.id || `component-${Math.floor(Math.random() * 100)}`);
    this.setAttribute("stage", "awaiting");
    this.ok = false;
    this.md = new Remarkable();
  }
  render() {
    this.state?.id != void 0 ? this.state.form.id = `${this.state.id}-form` : `form-${Math.floor(Math.random() * 100)}`;
    const form = /* @__PURE__ */ u2("div", { class: this.getClassNames(["column", "p-6"], [this.state.formWidth]), children: this.state?.form != void 0 && new CjForm(this.state.form, this.state.context).render() });
    const text2 = /* @__PURE__ */ u2("div", { class: "column", children: /* @__PURE__ */ u2("div", { class: "p-4 m-6 content", children: [
      this.state.caption?.text[this.state.context.lang] != void 0 && /* @__PURE__ */ u2("p", { class: this.getClassNames(["subtitle"], this.state.caption?.classList), ...this.getAnimationProps(this.state.caption.animation), children: this.state.caption.text[this.state.context.lang] }),
      this.state.title?.text[this.state.context.lang] != void 0 && /* @__PURE__ */ u2("h1", { class: this.getClassNames(["title"], this.state.title?.classList), ...this.getAnimationProps(this.state.title?.animation), children: this.state.title.text[this.state.context.lang] }),
      this.state.subtitle?.text[this.state.context.lang] != void 0 && /* @__PURE__ */ u2("h2", { class: this.getClassNames(["subtitle"], this.state.subtitle?.classList), ...this.getAnimationProps(this.state.subtitle?.animation), children: this.state.subtitle.text[this.state.context.lang] }),
      this.state.description?.text[this.state.context.lang] != void 0 && /* @__PURE__ */ u2(
        "div",
        {
          class: this.getClassNames(["content"], this.state.description?.classList),
          ...this.getAnimationProps(this.state.description?.animation),
          dangerouslySetInnerHTML: { __html: this.md.render(this.state.description?.text[this.state.context.lang]) }
        }
      )
    ] }) });
    R(
      /* @__PURE__ */ u2("section", { class: this.getClassNames(["section"], this.state?.classList), ...this.getAnimationProps(this.state.animation), style: this.getBackgroundStyle(), children: /* @__PURE__ */ u2("div", { class: "container", children: /* @__PURE__ */ u2("div", { class: "columns is-vcentered is-gapless my-0", children: [
        this.state.formPosition === "right" ? text2 : form,
        this.state.formPosition === "right" ? form : text2
      ] }) }) }),
      this
    );
    addFormEvents(this);
  }
};
customElements.define("form-hero", FormHero);

// src/components/FormModal.jsx
var FormModal = class extends FormLead {
  #default = {
    eventName: "user:click-form-modal",
    form: {}
  };
  constructor(props = {}) {
    super();
    this.eventName = "user:click-form-modal";
    this.state = this.initState(this.#default, props);
    this.getAttribute("id") || this.setAttribute("id", this.state.id || `component-${Math.floor(Math.random() * 100)}`);
    this.setAttribute("stage", "awaiting");
    this.ok = false;
  }
  render() {
    this.state?.id != void 0 ? this.state.form.id = `${this.state.id}-form` : `form-${Math.floor(Math.random() * 100)}`;
    R(
      /* @__PURE__ */ u2("div", { class: "modal", children: [
        /* @__PURE__ */ u2("div", { class: "modal-background" }),
        /* @__PURE__ */ u2("div", { class: "modal-card", children: [
          this.state.title?.text[this.state.context.lang] != void 0 && /* @__PURE__ */ u2("header", { class: this.getClassNames(["modal-card-head"], this.state.title?.classList), ...this.getAnimationProps(this.state.title?.animation), children: /* @__PURE__ */ u2("p", { class: "modal-card-title", children: this.state.title.text[this.state.context.lang] }) }),
          /* @__PURE__ */ u2("section", { class: "modal-card-body", children: this.state?.form != void 0 && new CjForm(this.state.form, this.state.context).render() })
        ] })
      ] }),
      this
    );
    addFormEvents(this);
  }
};
customElements.define("form-modal", FormModal);

// node_modules/vanilla-calendar-pro/index.mjs
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (e3, t2, n2) => t2 in e3 ? __defProp(e3, t2, { enumerable: true, configurable: true, writable: true, value: n2 }) : e3[t2] = n2;
var __spreadValues = (e3, t2) => {
  for (var n2 in t2 || (t2 = {})) __hasOwnProp.call(t2, n2) && __defNormalProp(e3, n2, t2[n2]);
  if (__getOwnPropSymbols) for (var n2 of __getOwnPropSymbols(t2)) __propIsEnum.call(t2, n2) && __defNormalProp(e3, n2, t2[n2]);
  return e3;
};
var __spreadProps = (e3, t2) => __defProps(e3, __getOwnPropDescs(t2));
var __publicField = (e3, t2, n2) => (__defNormalProp(e3, "symbol" != typeof t2 ? t2 + "" : t2, n2), n2);
var errorMessages = { notFoundSelector: (e3) => `${e3} is not found, check the first argument passed to new Calendar.`, notInit: 'The calendar has not been initialized, please initialize it using the "init()" method first.', notLocale: "You specified an incorrect language label or did not specify the required number of values \u200B\u200Bfor \xABlocale.weekdays\xBB or \xABlocale.months\xBB.", incorrectTime: "The value of the time property can be: false, 12 or 24.", incorrectMonthsCount: "For the \xABmultiple\xBB calendar type, the \xABdisplayMonthsCount\xBB parameter can have a value from 2 to 12, and for all others it cannot be greater than 1." };
var setContext = (e3, t2, n2) => {
  e3.context[t2] = n2;
};
var destroy = (e3) => {
  var t2, n2, a2, l2, o2;
  if (!e3.context.isInit) throw new Error(errorMessages.notInit);
  e3.inputMode ? (null == (t2 = e3.context.mainElement.parentElement) || t2.removeChild(e3.context.mainElement), null == (a2 = null == (n2 = e3.context.inputElement) ? void 0 : n2.replaceWith) || a2.call(n2, e3.context.originalElement), setContext(e3, "inputElement", void 0)) : null == (o2 = (l2 = e3.context.mainElement).replaceWith) || o2.call(l2, e3.context.originalElement), setContext(e3, "mainElement", e3.context.originalElement), e3.onDestroy && e3.onDestroy(e3);
};
var hide = (e3) => {
  e3.context.isShowInInputMode && e3.context.currentType && (e3.context.mainElement.dataset.vcCalendarHidden = "", setContext(e3, "isShowInInputMode", false), e3.context.cleanupHandlers[0] && (e3.context.cleanupHandlers.forEach((e4) => e4()), setContext(e3, "cleanupHandlers", [])), e3.onHide && e3.onHide(e3));
};
function getOffset(e3) {
  if (!e3 || !e3.getBoundingClientRect) return { top: 0, bottom: 0, left: 0, right: 0 };
  const t2 = e3.getBoundingClientRect(), n2 = document.documentElement;
  return { bottom: t2.bottom, right: t2.right, top: t2.top + window.scrollY - n2.clientTop, left: t2.left + window.scrollX - n2.clientLeft };
}
function getViewportDimensions() {
  return { vw: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), vh: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) };
}
function getWindowScrollPosition() {
  return { left: window.scrollX || document.documentElement.scrollLeft || 0, top: window.scrollY || document.documentElement.scrollTop || 0 };
}
function calculateAvailableSpace(e3) {
  const { top: t2, left: n2 } = getWindowScrollPosition(), { top: a2, left: l2 } = getOffset(e3), { vh: o2, vw: s2 } = getViewportDimensions(), i3 = a2 - t2, r2 = l2 - n2;
  return { top: i3, bottom: o2 - (i3 + e3.clientHeight), left: r2, right: s2 - (r2 + e3.clientWidth) };
}
function getAvailablePosition(e3, t2, n2 = 5) {
  const a2 = { top: true, bottom: true, left: true, right: true }, l2 = [];
  if (!t2 || !e3) return { canShow: a2, parentPositions: l2 };
  const { bottom: o2, top: s2 } = calculateAvailableSpace(e3), { top: i3, left: r2 } = getOffset(e3), { height: c2, width: d2 } = t2.getBoundingClientRect(), { vh: u3, vw: m2 } = getViewportDimensions(), h2 = m2 / 2, p2 = u3 / 2;
  return [{ condition: i3 < p2, position: "top" }, { condition: i3 > p2, position: "bottom" }, { condition: r2 < h2, position: "left" }, { condition: r2 > h2, position: "right" }].forEach(({ condition: e4, position: t3 }) => {
    e4 && l2.push(t3);
  }), Object.assign(a2, { top: c2 <= s2 - n2, bottom: c2 <= o2 - n2, left: d2 <= r2, right: d2 <= m2 - r2 }), { canShow: a2, parentPositions: l2 };
}
var handleDay = (e3, t2, n2, a2) => {
  var l2;
  const o2 = a2.querySelector(`[data-vc-date="${t2}"]`), s2 = null == o2 ? void 0 : o2.querySelector("[data-vc-date-btn]");
  if (!o2 || !s2) return;
  if ((null == n2 ? void 0 : n2.modifier) && s2.classList.add(...n2.modifier.trim().split(" ")), !(null == n2 ? void 0 : n2.html)) return;
  const i3 = document.createElement("div");
  i3.className = e3.styles.datePopup, i3.dataset.vcDatePopup = "", i3.innerHTML = e3.sanitizerHTML(n2.html), s2.ariaExpanded = "true", s2.ariaLabel = `${s2.ariaLabel}, ${null == (l2 = null == i3 ? void 0 : i3.textContent) ? void 0 : l2.replace(/^\s+|\s+(?=\s)|\s+$/g, "").replace(/&nbsp;/g, " ")}`, o2.appendChild(i3), requestAnimationFrame(() => {
    if (!i3) return;
    const { canShow: e4 } = getAvailablePosition(o2, i3), t3 = e4.bottom ? o2.offsetHeight : -i3.offsetHeight, n3 = e4.left && !e4.right ? o2.offsetWidth - i3.offsetWidth / 2 : !e4.left && e4.right ? i3.offsetWidth / 2 : 0;
    Object.assign(i3.style, { left: `${n3}px`, top: `${t3}px` });
  });
};
var createDatePopup = (e3, t2) => {
  var n2;
  e3.popups && (null == (n2 = Object.entries(e3.popups)) || n2.forEach(([n3, a2]) => handleDay(e3, n3, a2, t2)));
};
var getDate = (e3) => /* @__PURE__ */ new Date(`${e3}T00:00:00`);
var getDateString = (e3) => `${e3.getFullYear()}-${String(e3.getMonth() + 1).padStart(2, "0")}-${String(e3.getDate()).padStart(2, "0")}`;
var parseDates = (e3) => e3.reduce((e4, t2) => {
  if (t2 instanceof Date || "number" == typeof t2) {
    const n2 = t2 instanceof Date ? t2 : new Date(t2);
    e4.push(n2.toISOString().substring(0, 10));
  } else t2.match(/^(\d{4}-\d{2}-\d{2})$/g) ? e4.push(t2) : t2.replace(/(\d{4}-\d{2}-\d{2}).*?(\d{4}-\d{2}-\d{2})/g, (t3, n2, a2) => {
    const l2 = getDate(n2), o2 = getDate(a2), s2 = new Date(l2.getTime());
    for (; s2 <= o2; s2.setDate(s2.getDate() + 1)) e4.push(getDateString(s2));
    return t3;
  });
  return e4;
}, []);
var updateAttribute = (e3, t2, n2, a2 = "") => {
  t2 ? e3.setAttribute(n2, a2) : e3.getAttribute(n2) === a2 && e3.removeAttribute(n2);
};
var setDateModifier = (e3, t2, n2, a2, l2, o2, s2) => {
  var i3, r2, c2, d2;
  const u3 = getDate(e3.context.displayDateMin) > getDate(o2) || getDate(e3.context.displayDateMax) < getDate(o2) || (null == (i3 = e3.context.disableDates) ? void 0 : i3.includes(o2)) || !e3.selectionMonthsMode && "current" !== s2 || !e3.selectionYearsMode && getDate(o2).getFullYear() !== t2;
  updateAttribute(n2, u3, "data-vc-date-disabled"), a2 && updateAttribute(a2, u3, "aria-disabled", "true"), a2 && updateAttribute(a2, u3, "tabindex", "-1"), updateAttribute(n2, !e3.disableToday && e3.context.dateToday === o2, "data-vc-date-today"), updateAttribute(n2, !e3.disableToday && e3.context.dateToday === o2, "aria-current", "date"), updateAttribute(n2, null == (r2 = e3.selectedWeekends) ? void 0 : r2.includes(l2), "data-vc-date-weekend");
  const m2 = (null == (c2 = e3.selectedHolidays) ? void 0 : c2[0]) ? parseDates(e3.selectedHolidays) : [];
  if (updateAttribute(n2, m2.includes(o2), "data-vc-date-holiday"), (null == (d2 = e3.context.selectedDates) ? void 0 : d2.includes(o2)) ? (n2.setAttribute("data-vc-date-selected", ""), a2 && a2.setAttribute("aria-selected", "true"), e3.context.selectedDates.length > 1 && "multiple-ranged" === e3.selectionDatesMode && (e3.context.selectedDates[0] === o2 && e3.context.selectedDates[e3.context.selectedDates.length - 1] === o2 ? n2.setAttribute("data-vc-date-selected", "first-and-last") : e3.context.selectedDates[0] === o2 ? n2.setAttribute("data-vc-date-selected", "first") : e3.context.selectedDates[e3.context.selectedDates.length - 1] === o2 && n2.setAttribute("data-vc-date-selected", "last"), e3.context.selectedDates[0] !== o2 && e3.context.selectedDates[e3.context.selectedDates.length - 1] !== o2 && n2.setAttribute("data-vc-date-selected", "middle"))) : n2.hasAttribute("data-vc-date-selected") && (n2.removeAttribute("data-vc-date-selected"), a2 && a2.removeAttribute("aria-selected")), !e3.context.disableDates.includes(o2) && e3.enableEdgeDatesOnly && e3.context.selectedDates.length > 1 && "multiple-ranged" === e3.selectionDatesMode) {
    const t3 = getDate(e3.context.selectedDates[0]), a3 = getDate(e3.context.selectedDates[e3.context.selectedDates.length - 1]), l3 = getDate(o2);
    updateAttribute(n2, l3 > t3 && l3 < a3, "data-vc-date-selected", "middle");
  }
};
var getLocaleString = (e3, t2, n2) => (/* @__PURE__ */ new Date(`${e3}T00:00:00.000Z`)).toLocaleString(t2, n2);
var getWeekNumber = (e3, t2) => {
  const n2 = getDate(e3), a2 = (n2.getDay() - t2 + 7) % 7;
  n2.setDate(n2.getDate() + 4 - a2);
  const l2 = new Date(n2.getFullYear(), 0, 1), o2 = Math.ceil(((+n2 - +l2) / 864e5 + 1) / 7);
  return { year: n2.getFullYear(), week: o2 };
};
var addWeekNumberForDate = (e3, t2, n2) => {
  const a2 = getWeekNumber(n2, e3.firstWeekday);
  a2 && (t2.dataset.vcDateWeekNumber = String(a2.week));
};
var setDaysAsDisabled = (e3, t2, n2) => {
  var a2, l2, o2, s2, i3;
  const r2 = null == (a2 = e3.disableWeekdays) ? void 0 : a2.includes(n2), c2 = e3.disableAllDates && !!(null == (l2 = e3.context.enableDates) ? void 0 : l2[0]);
  !r2 && !c2 || (null == (o2 = e3.context.enableDates) ? void 0 : o2.includes(t2)) || (null == (s2 = e3.context.disableDates) ? void 0 : s2.includes(t2)) || (e3.context.disableDates.push(t2), null == (i3 = e3.context.disableDates) || i3.sort((e4, t3) => +new Date(e4) - +new Date(t3)));
};
var createDate = (e3, t2, n2, a2, l2, o2) => {
  const s2 = getDate(l2).getDay(), i3 = "string" == typeof e3.locale && e3.locale.length ? e3.locale : "en", r2 = document.createElement("div");
  let c2;
  r2.className = e3.styles.date, r2.dataset.vcDate = l2, r2.dataset.vcDateMonth = o2, r2.dataset.vcDateWeekDay = String(s2), ("current" === o2 || e3.displayDatesOutside) && (c2 = document.createElement("button"), c2.className = e3.styles.dateBtn, c2.type = "button", c2.role = "gridcell", c2.ariaLabel = getLocaleString(l2, i3, { dateStyle: "long", timeZone: "UTC" }), c2.dataset.vcDateBtn = "", c2.innerText = String(a2), r2.appendChild(c2)), e3.enableWeekNumbers && addWeekNumberForDate(e3, r2, l2), setDaysAsDisabled(e3, l2, s2), setDateModifier(e3, t2, r2, c2, s2, l2, o2), n2.appendChild(r2), e3.onCreateDateEls && e3.onCreateDateEls(e3, r2);
};
var createDatesFromCurrentMonth = (e3, t2, n2, a2, l2) => {
  for (let o2 = 1; o2 <= n2; o2++) {
    const n3 = new Date(a2, l2, o2);
    createDate(e3, a2, t2, o2, getDateString(n3), "current");
  }
};
var createDatesFromNextMonth = (e3, t2, n2, a2, l2, o2) => {
  const s2 = o2 + n2, i3 = 7 * Math.ceil(s2 / 7) - s2, r2 = l2 + 1 === 12 ? a2 + 1 : a2, c2 = l2 + 1 === 12 ? "01" : l2 + 2 < 10 ? `0${l2 + 2}` : l2 + 2;
  for (let n3 = 1; n3 <= i3; n3++) {
    const l3 = n3 < 10 ? `0${n3}` : String(n3);
    createDate(e3, a2, t2, n3, `${r2}-${c2}-${l3}`, "next");
  }
};
var createDatesFromPrevMonth = (e3, t2, n2, a2, l2) => {
  let o2 = new Date(n2, a2, 0).getDate() - (l2 - 1);
  const s2 = 0 === a2 ? n2 - 1 : n2, i3 = 0 === a2 ? 12 : a2 < 10 ? `0${a2}` : a2;
  for (let a3 = l2; a3 > 0; a3--, o2++) {
    createDate(e3, n2, t2, o2, `${s2}-${i3}-${o2}`, "prev");
  }
};
var createWeekNumbers = (e3, t2, n2, a2, l2) => {
  if (!e3.enableWeekNumbers) return;
  a2.textContent = "";
  const o2 = document.createElement("b");
  o2.className = e3.styles.weekNumbersTitle, o2.innerText = "#", o2.dataset.vcWeekNumbers = "title", a2.appendChild(o2);
  const s2 = document.createElement("div");
  s2.className = e3.styles.weekNumbersContent, s2.dataset.vcWeekNumbers = "content", a2.appendChild(s2);
  const i3 = document.createElement("button");
  i3.type = "button", i3.className = e3.styles.weekNumber;
  const r2 = l2.querySelectorAll("[data-vc-date]"), c2 = Math.ceil((t2 + n2) / 7);
  for (let t3 = 0; t3 < c2; t3++) {
    const n3 = r2[0 === t3 ? 6 : 7 * t3].dataset.vcDate, a3 = getWeekNumber(n3, e3.firstWeekday);
    if (!a3) return;
    const l3 = i3.cloneNode(true);
    l3.innerText = String(a3.week), l3.dataset.vcWeekNumber = String(a3.week), l3.dataset.vcWeekYear = String(a3.year), l3.role = "rowheader", l3.ariaLabel = `${a3.week}`, s2.appendChild(l3);
  }
};
var createDates = (e3) => {
  const t2 = new Date(e3.context.selectedYear, e3.context.selectedMonth, 1), n2 = e3.context.mainElement.querySelectorAll('[data-vc="dates"]'), a2 = e3.context.mainElement.querySelectorAll('[data-vc-week="numbers"]');
  n2.forEach((n3, l2) => {
    e3.selectionDatesMode || (n3.dataset.vcDatesDisabled = ""), n3.textContent = "";
    const o2 = new Date(t2);
    o2.setMonth(o2.getMonth() + l2);
    const s2 = o2.getMonth(), i3 = o2.getFullYear(), r2 = (new Date(i3, s2, 1).getDay() - e3.firstWeekday + 7) % 7, c2 = new Date(i3, s2 + 1, 0).getDate();
    createDatesFromPrevMonth(e3, n3, i3, s2, r2), createDatesFromCurrentMonth(e3, n3, c2, i3, s2), createDatesFromNextMonth(e3, n3, c2, i3, s2, r2), createDatePopup(e3, n3), createWeekNumbers(e3, r2, c2, a2[l2], n3);
  });
};
var layoutDefault = (e3) => `
  <div class="${e3.styles.header}" data-vc="header" role="toolbar" aria-label="${e3.labels.navigation}">
    <#ArrowPrev [month] />
    <div class="${e3.styles.headerContent}" data-vc-header="content">
      <#Month />
      <#Year />
    </div>
    <#ArrowNext [month] />
  </div>
  <div class="${e3.styles.wrapper}" data-vc="wrapper">
    <#WeekNumbers />
    <div class="${e3.styles.content}" data-vc="content">
      <#Week />
      <#Dates />
      <#DateRangeTooltip />
    </div>
  </div>
  <#ControlTime />
`;
var layoutMonths = (e3) => `
  <div class="${e3.styles.header}" data-vc="header" role="toolbar" aria-label="${e3.labels.navigation}">
    <div class="${e3.styles.headerContent}" data-vc-header="content">
      <#Month />
      <#Year />
    </div>
  </div>
  <div class="${e3.styles.wrapper}" data-vc="wrapper">
    <div class="${e3.styles.content}" data-vc="content">
      <#Months />
    </div>
  </div>
`;
var layoutMultiple = (e3) => `
  <div class="${e3.styles.controls}" data-vc="controls" role="toolbar" aria-label="${e3.labels.navigation}">
    <#ArrowPrev [month] />
    <#ArrowNext [month] />
  </div>
  <div class="${e3.styles.grid}" data-vc="grid">
    <#Multiple>
      <div class="${e3.styles.column}" data-vc="column" role="region">
        <div class="${e3.styles.header}" data-vc="header">
          <div class="${e3.styles.headerContent}" data-vc-header="content">
            <#Month />
            <#Year />
          </div>
        </div>
        <div class="${e3.styles.wrapper}" data-vc="wrapper">
          <#WeekNumbers />
          <div class="${e3.styles.content}" data-vc="content">
            <#Week />
            <#Dates />
          </div>
        </div>
      </div>
    <#/Multiple>
    <#DateRangeTooltip />
  </div>
  <#ControlTime />
`;
var layoutYears = (e3) => `
  <div class="${e3.styles.header}" data-vc="header" role="toolbar" aria-label="${e3.labels.navigation}">
    <#ArrowPrev [year] />
    <div class="${e3.styles.headerContent}" data-vc-header="content">
      <#Month />
      <#Year />
    </div>
    <#ArrowNext [year] />
  </div>
  <div class="${e3.styles.wrapper}" data-vc="wrapper">
    <div class="${e3.styles.content}" data-vc="content">
      <#Years />
    </div>
  </div>
`;
var ArrowNext = (e3, t2) => `<button type="button" class="${e3.styles.arrowNext}" data-vc-arrow="next" aria-label="${e3.labels.arrowNext[t2]}"></button>`;
var ArrowPrev = (e3, t2) => `<button type="button" class="${e3.styles.arrowPrev}" data-vc-arrow="prev" aria-label="${e3.labels.arrowPrev[t2]}"></button>`;
var ControlTime = (e3) => e3.selectionTimeMode ? `<div class="${e3.styles.time}" data-vc="time" role="group" aria-label="${e3.labels.selectingTime}"></div>` : "";
var DateRangeTooltip = (e3) => e3.onCreateDateRangeTooltip ? `<div class="${e3.styles.dateRangeTooltip}" data-vc-date-range-tooltip="hidden"></div>` : "";
var Dates = (e3) => `<div class="${e3.styles.dates}" data-vc="dates" role="grid" aria-live="assertive" aria-label="${e3.labels.dates}" ${"multiple" === e3.type ? "aria-multiselectable" : ""}></div>`;
var Month = (e3) => `<button type="button" class="${e3.styles.month}" data-vc="month"></button>`;
var Months = (e3) => `<div class="${e3.styles.months}" data-vc="months" role="grid" aria-live="assertive" aria-label="${e3.labels.months}"></div>`;
var Week = (e3) => `<div class="${e3.styles.week}" data-vc="week" role="row" aria-label="${e3.labels.week}"></div>`;
var WeekNumbers = (e3) => e3.enableWeekNumbers ? `<div class="${e3.styles.weekNumbers}" data-vc-week="numbers" role="row" aria-label="${e3.labels.weekNumber}"></div>` : "";
var Year = (e3) => `<button type="button" class="${e3.styles.year}" data-vc="year"></button>`;
var Years = (e3) => `<div class="${e3.styles.years}" data-vc="years" role="grid" aria-live="assertive" aria-label="${e3.labels.years}"></div>`;
var components = { ArrowNext, ArrowPrev, ControlTime, Dates, DateRangeTooltip, Month, Months, Week, WeekNumbers, Year, Years };
var getComponent = (e3) => components[e3];
var parseLayout = (e3, t2) => t2.replace(/[\n\t]/g, "").replace(/<#(?!\/?Multiple)(.*?)>/g, (t3, n2) => {
  const a2 = (n2.match(/\[(.*?)\]/) || [])[1], l2 = n2.replace(/[/\s\n\t]|\[(.*?)\]/g, ""), o2 = getComponent(l2), s2 = o2 ? o2(e3, null != a2 ? a2 : null) : "";
  return e3.sanitizerHTML(s2);
}).replace(/[\n\t]/g, "");
var parseMultipleLayout = (e3, t2) => t2.replace(new RegExp("<#Multiple>(.*?)<#\\/Multiple>", "gs"), (t3, n2) => {
  const a2 = Array(e3.context.displayMonthsCount).fill(n2).join("");
  return e3.sanitizerHTML(a2);
}).replace(/[\n\t]/g, "");
var createLayouts = (e3, t2) => {
  const n2 = { default: layoutDefault, month: layoutMonths, year: layoutYears, multiple: layoutMultiple };
  if (Object.keys(n2).forEach((t3) => {
    const a2 = t3;
    e3.layouts[a2].length || (e3.layouts[a2] = n2[a2](e3));
  }), e3.context.mainElement.className = e3.styles.calendar, e3.context.mainElement.dataset.vc = "calendar", e3.context.mainElement.dataset.vcType = e3.context.currentType, e3.context.mainElement.role = "application", e3.context.mainElement.tabIndex = 0, e3.context.mainElement.ariaLabel = e3.labels.application, "multiple" !== e3.context.currentType) {
    if ("multiple" === e3.type && t2) {
      const n3 = e3.context.mainElement.querySelector('[data-vc="controls"]'), a2 = e3.context.mainElement.querySelector('[data-vc="grid"]'), l2 = t2.closest('[data-vc="column"]');
      return n3 && e3.context.mainElement.removeChild(n3), a2 && (a2.dataset.vcGrid = "hidden"), l2 && (l2.dataset.vcColumn = e3.context.currentType), void (l2 && (l2.innerHTML = e3.sanitizerHTML(parseLayout(e3, e3.layouts[e3.context.currentType]))));
    }
    e3.context.mainElement.innerHTML = e3.sanitizerHTML(parseLayout(e3, e3.layouts[e3.context.currentType]));
  } else e3.context.mainElement.innerHTML = e3.sanitizerHTML(parseMultipleLayout(e3, parseLayout(e3, e3.layouts[e3.context.currentType])));
};
var setVisibilityArrows = (e3, t2, n2, a2) => {
  e3.style.visibility = n2 ? "hidden" : "", t2.style.visibility = a2 ? "hidden" : "";
};
var handleDefaultType = (e3, t2, n2) => {
  const a2 = getDate(getDateString(new Date(e3.context.selectedYear, e3.context.selectedMonth, 1))), l2 = new Date(a2.getTime()), o2 = new Date(a2.getTime());
  l2.setMonth(l2.getMonth() - e3.monthsToSwitch), o2.setMonth(o2.getMonth() + e3.monthsToSwitch);
  const s2 = getDate(e3.context.dateMin), i3 = getDate(e3.context.dateMax);
  e3.selectionYearsMode || (s2.setFullYear(a2.getFullYear()), i3.setFullYear(a2.getFullYear()));
  const r2 = !e3.selectionMonthsMode || l2.getFullYear() < s2.getFullYear() || l2.getFullYear() === s2.getFullYear() && l2.getMonth() < s2.getMonth(), c2 = !e3.selectionMonthsMode || o2.getFullYear() > i3.getFullYear() || o2.getFullYear() === i3.getFullYear() && o2.getMonth() > i3.getMonth() - (e3.context.displayMonthsCount - 1);
  setVisibilityArrows(t2, n2, r2, c2);
};
var handleYearType = (e3, t2, n2) => {
  const a2 = getDate(e3.context.dateMin), l2 = getDate(e3.context.dateMax), o2 = !!(a2.getFullYear() && e3.context.displayYear - 7 <= a2.getFullYear()), s2 = !!(l2.getFullYear() && e3.context.displayYear + 7 >= l2.getFullYear());
  setVisibilityArrows(t2, n2, o2, s2);
};
var visibilityArrows = (e3) => {
  if ("month" === e3.context.currentType) return;
  const t2 = e3.context.mainElement.querySelector('[data-vc-arrow="prev"]'), n2 = e3.context.mainElement.querySelector('[data-vc-arrow="next"]');
  if (!t2 || !n2) return;
  ({ default: () => handleDefaultType(e3, t2, n2), year: () => handleYearType(e3, t2, n2) })["multiple" === e3.context.currentType ? "default" : e3.context.currentType]();
};
var visibilityHandler = (e3, t2, n2, a2, l2) => {
  const o2 = new Date(a2.setFullYear(e3.context.selectedYear, e3.context.selectedMonth + n2)).getFullYear(), s2 = new Date(a2.setMonth(e3.context.selectedMonth + n2)).getMonth(), i3 = e3.context.locale.months.long[s2], r2 = t2.closest('[data-vc="column"]');
  r2 && (r2.ariaLabel = `${i3} ${o2}`);
  const c2 = { month: { id: s2, label: i3 }, year: { id: o2, label: o2 } };
  t2.innerText = String(c2[l2].label), t2.dataset[`vc${l2.charAt(0).toUpperCase() + l2.slice(1)}`] = String(c2[l2].id), t2.ariaLabel = `${e3.labels[l2]} ${c2[l2].label}`;
  const d2 = { month: e3.selectionMonthsMode, year: e3.selectionYearsMode }, u3 = false === d2[l2] || "only-arrows" === d2[l2];
  u3 && (t2.tabIndex = -1), t2.disabled = u3;
};
var visibilityTitle = (e3) => {
  const t2 = e3.context.mainElement.querySelectorAll('[data-vc="month"]'), n2 = e3.context.mainElement.querySelectorAll('[data-vc="year"]'), a2 = new Date(e3.context.selectedYear, e3.context.selectedMonth, 1);
  [t2, n2].forEach((t3) => null == t3 ? void 0 : t3.forEach((t4, n3) => visibilityHandler(e3, t4, n3, a2, t4.dataset.vc)));
};
var setYearModifier = (e3, t2, n2, a2, l2) => {
  var o2;
  const s2 = { month: "[data-vc-months-month]", year: "[data-vc-years-year]" }, i3 = { month: { selected: "data-vc-months-month-selected", aria: "aria-selected", value: "vcMonthsMonth", selectedProperty: "selectedMonth" }, year: { selected: "data-vc-years-year-selected", aria: "aria-selected", value: "vcYearsYear", selectedProperty: "selectedYear" } };
  l2 && (null == (o2 = e3.context.mainElement.querySelectorAll(s2[n2])) || o2.forEach((e4) => {
    e4.removeAttribute(i3[n2].selected), e4.removeAttribute(i3[n2].aria);
  }), setContext(e3, i3[n2].selectedProperty, Number(t2.dataset[i3[n2].value])), visibilityTitle(e3), "year" === n2 && visibilityArrows(e3)), a2 && (t2.setAttribute(i3[n2].selected, ""), t2.setAttribute(i3[n2].aria, "true"));
};
var getColumnID = (e3, t2) => {
  var n2;
  if ("multiple" !== e3.type) return { currentValue: null, columnID: 0 };
  const a2 = e3.context.mainElement.querySelectorAll('[data-vc="column"]'), l2 = Array.from(a2).findIndex((e4) => e4.closest(`[data-vc-column="${t2}"]`));
  return { currentValue: l2 >= 0 ? Number(null == (n2 = a2[l2].querySelector(`[data-vc="${t2}"]`)) ? void 0 : n2.getAttribute(`data-vc-${t2}`)) : null, columnID: Math.max(l2, 0) };
};
var createMonthEl = (e3, t2, n2, a2, l2, o2, s2) => {
  const i3 = t2.cloneNode(false);
  return i3.className = e3.styles.monthsMonth, i3.innerText = a2, i3.ariaLabel = l2, i3.role = "gridcell", i3.dataset.vcMonthsMonth = `${s2}`, o2 && (i3.ariaDisabled = "true"), o2 && (i3.tabIndex = -1), i3.disabled = o2, setYearModifier(e3, i3, "month", n2 === s2, false), i3;
};
var createMonths = (e3, t2) => {
  var n2, a2;
  const l2 = null == (n2 = null == t2 ? void 0 : t2.closest('[data-vc="header"]')) ? void 0 : n2.querySelector('[data-vc="year"]'), o2 = l2 ? Number(l2.dataset.vcYear) : e3.context.selectedYear, s2 = (null == t2 ? void 0 : t2.dataset.vcMonth) ? Number(t2.dataset.vcMonth) : e3.context.selectedMonth;
  setContext(e3, "currentType", "month"), createLayouts(e3, t2), visibilityTitle(e3);
  const i3 = e3.context.mainElement.querySelector('[data-vc="months"]');
  if (!e3.selectionMonthsMode || !i3) return;
  const r2 = e3.monthsToSwitch > 1 ? e3.context.locale.months.long.map((t3, n3) => s2 - e3.monthsToSwitch * n3).concat(e3.context.locale.months.long.map((t3, n3) => s2 + e3.monthsToSwitch * n3)).filter((e4) => e4 >= 0 && e4 <= 12) : Array.from(Array(12).keys()), c2 = document.createElement("button");
  c2.type = "button";
  for (let t3 = 0; t3 < 12; t3++) {
    const n3 = getDate(e3.context.dateMin), a3 = getDate(e3.context.dateMax), l3 = e3.context.displayMonthsCount - 1, { columnID: d2 } = getColumnID(e3, "month"), u3 = o2 <= n3.getFullYear() && t3 < n3.getMonth() + d2 || o2 >= a3.getFullYear() && t3 > a3.getMonth() - l3 + d2 || o2 > a3.getFullYear() || t3 !== s2 && !r2.includes(t3), m2 = createMonthEl(e3, c2, s2, e3.context.locale.months.short[t3], e3.context.locale.months.long[t3], u3, t3);
    i3.appendChild(m2), e3.onCreateMonthEls && e3.onCreateMonthEls(e3, m2);
  }
  null == (a2 = e3.context.mainElement.querySelector("[data-vc-months-month]:not([disabled])")) || a2.focus();
};
var TimeInput = (e3, t2, n2, a2, l2) => `
  <label class="${t2}" data-vc-time-input="${e3}">
    <input type="text" name="${e3}" maxlength="2" aria-label="${n2[`input${e3.charAt(0).toUpperCase() + e3.slice(1)}`]}" value="${a2}" ${l2 ? "disabled" : ""}>
  </label>
`;
var TimeRange = (e3, t2, n2, a2, l2, o2, s2) => `
  <label class="${t2}" data-vc-time-range="${e3}">
    <input type="range" name="${e3}" min="${a2}" max="${l2}" step="${o2}" aria-label="${n2[`range${e3.charAt(0).toUpperCase() + e3.slice(1)}`]}" value="${s2}">
  </label>
`;
var handleActions = (e3, t2, n2, a2) => {
  ({ hour: () => setContext(e3, "selectedHours", n2), minute: () => setContext(e3, "selectedMinutes", n2) })[a2](), setContext(e3, "selectedTime", `${e3.context.selectedHours}:${e3.context.selectedMinutes}${e3.context.selectedKeeping ? ` ${e3.context.selectedKeeping}` : ""}`), e3.onChangeTime && e3.onChangeTime(e3, t2, false), e3.inputMode && e3.context.inputElement && e3.context.mainElement && e3.onChangeToInput && e3.onChangeToInput(e3, t2);
};
var transformTime24 = (e3, t2) => {
  var n2;
  return (null == (n2 = { 0: { AM: "00", PM: "12" }, 1: { AM: "01", PM: "13" }, 2: { AM: "02", PM: "14" }, 3: { AM: "03", PM: "15" }, 4: { AM: "04", PM: "16" }, 5: { AM: "05", PM: "17" }, 6: { AM: "06", PM: "18" }, 7: { AM: "07", PM: "19" }, 8: { AM: "08", PM: "20" }, 9: { AM: "09", PM: "21" }, 10: { AM: "10", PM: "22" }, 11: { AM: "11", PM: "23" }, 12: { AM: "00", PM: "12" } }[Number(e3)]) ? void 0 : n2[t2]) || String(e3);
};
var handleClickKeepingTime = (e3, t2, n2, a2, l2) => {
  const o2 = (o3) => {
    const s2 = "AM" === e3.context.selectedKeeping ? "PM" : "AM", i3 = transformTime24(e3.context.selectedHours, s2);
    Number(i3) <= a2 && Number(i3) >= l2 ? (setContext(e3, "selectedKeeping", s2), n2.value = i3, handleActions(e3, o3, e3.context.selectedHours, "hour"), t2.ariaLabel = `${e3.labels.btnKeeping} ${e3.context.selectedKeeping}`, t2.innerText = e3.context.selectedKeeping) : e3.onChangeTime && e3.onChangeTime(e3, o3, true);
  };
  return t2.addEventListener("click", o2), () => {
    t2.removeEventListener("click", o2);
  };
};
var transformTime12 = (e3) => ({ 0: "12", 13: "01", 14: "02", 15: "03", 16: "04", 17: "05", 18: "06", 19: "07", 20: "08", 21: "09", 22: "10", 23: "11" })[Number(e3)] || String(e3);
var updateInputAndRange = (e3, t2, n2, a2) => {
  e3.value = n2, t2.value = a2;
};
var updateKeepingTime$1 = (e3, t2, n2) => {
  t2 && n2 && (setContext(e3, "selectedKeeping", n2), t2.innerText = n2);
};
var handleInput$1 = (e3, t2, n2, a2, l2, o2, s2) => {
  const i3 = { hour: (i4, r3, c2) => {
    if (!e3.selectionTimeMode) return;
    ({ 12: () => {
      if (!e3.context.selectedKeeping) return;
      const d2 = Number(transformTime24(r3, e3.context.selectedKeeping));
      if (!(d2 <= o2 && d2 >= s2)) return updateInputAndRange(n2, t2, e3.context.selectedHours, e3.context.selectedHours), void (e3.onChangeTime && e3.onChangeTime(e3, c2, true));
      updateInputAndRange(n2, t2, transformTime12(r3), transformTime24(r3, e3.context.selectedKeeping)), i4 > 12 && updateKeepingTime$1(e3, a2, "PM"), handleActions(e3, c2, transformTime12(r3), l2);
    }, 24: () => {
      if (!(i4 <= o2 && i4 >= s2)) return updateInputAndRange(n2, t2, e3.context.selectedHours, e3.context.selectedHours), void (e3.onChangeTime && e3.onChangeTime(e3, c2, true));
      updateInputAndRange(n2, t2, r3, r3), handleActions(e3, c2, r3, l2);
    } })[e3.selectionTimeMode]();
  }, minute: (a3, i4, r3) => {
    if (!(a3 <= o2 && a3 >= s2)) return n2.value = e3.context.selectedMinutes, void (e3.onChangeTime && e3.onChangeTime(e3, r3, true));
    n2.value = i4, t2.value = i4, handleActions(e3, r3, i4, l2);
  } }, r2 = (e4) => {
    const t3 = Number(n2.value), a3 = n2.value.padStart(2, "0");
    i3[l2] && i3[l2](t3, a3, e4);
  };
  return n2.addEventListener("change", r2), () => {
    n2.removeEventListener("change", r2);
  };
};
var updateInputAndTime = (e3, t2, n2, a2, l2) => {
  t2.value = l2, handleActions(e3, n2, l2, a2);
};
var updateKeepingTime = (e3, t2, n2) => {
  t2 && (setContext(e3, "selectedKeeping", n2), t2.innerText = n2);
};
var handleRange = (e3, t2, n2, a2, l2) => {
  const o2 = (o3) => {
    const s2 = Number(t2.value), i3 = t2.value.padStart(2, "0"), r2 = "hour" === l2, c2 = 24 === e3.selectionTimeMode, d2 = s2 > 0 && s2 < 12;
    r2 && !c2 && updateKeepingTime(e3, a2, 0 === s2 || d2 ? "AM" : "PM"), updateInputAndTime(e3, n2, o3, l2, !r2 || c2 || d2 ? i3 : transformTime12(t2.value));
  };
  return t2.addEventListener("input", o2), () => {
    t2.removeEventListener("input", o2);
  };
};
var handleMouseOver = (e3) => e3.setAttribute("data-vc-input-focus", "");
var handleMouseOut = (e3) => e3.removeAttribute("data-vc-input-focus");
var handleTime = (e3, t2) => {
  const n2 = t2.querySelector('[data-vc-time-range="hour"] input[name="hour"]'), a2 = t2.querySelector('[data-vc-time-range="minute"] input[name="minute"]'), l2 = t2.querySelector('[data-vc-time-input="hour"] input[name="hour"]'), o2 = t2.querySelector('[data-vc-time-input="minute"] input[name="minute"]'), s2 = t2.querySelector('[data-vc-time="keeping"]');
  if (!(n2 && a2 && l2 && o2)) return;
  const i3 = (e4) => {
    e4.target === n2 && handleMouseOver(l2), e4.target === a2 && handleMouseOver(o2);
  }, r2 = (e4) => {
    e4.target === n2 && handleMouseOut(l2), e4.target === a2 && handleMouseOut(o2);
  };
  return t2.addEventListener("mouseover", i3), t2.addEventListener("mouseout", r2), handleInput$1(e3, n2, l2, s2, "hour", e3.timeMaxHour, e3.timeMinHour), handleInput$1(e3, a2, o2, s2, "minute", e3.timeMaxMinute, e3.timeMinMinute), handleRange(e3, n2, l2, s2, "hour"), handleRange(e3, a2, o2, s2, "minute"), s2 && handleClickKeepingTime(e3, s2, n2, e3.timeMaxHour, e3.timeMinHour), () => {
    t2.removeEventListener("mouseover", i3), t2.removeEventListener("mouseout", r2);
  };
};
var createTime = (e3) => {
  const t2 = e3.context.mainElement.querySelector('[data-vc="time"]');
  if (!e3.selectionTimeMode || !t2) return;
  const [n2, a2] = [e3.timeMinHour, e3.timeMaxHour], [l2, o2] = [e3.timeMinMinute, e3.timeMaxMinute], s2 = e3.context.selectedKeeping ? transformTime24(e3.context.selectedHours, e3.context.selectedKeeping) : e3.context.selectedHours, i3 = "range" === e3.timeControls;
  var r2;
  t2.innerHTML = e3.sanitizerHTML(`
    <div class="${e3.styles.timeContent}" data-vc-time="content">
      ${TimeInput("hour", e3.styles.timeHour, e3.labels, e3.context.selectedHours, i3)}
      ${TimeInput("minute", e3.styles.timeMinute, e3.labels, e3.context.selectedMinutes, i3)}
      ${12 === e3.selectionTimeMode ? (r2 = e3.context.selectedKeeping, `<button type="button" class="${e3.styles.timeKeeping}" aria-label="${e3.labels.btnKeeping} ${r2}" data-vc-time="keeping" ${i3 ? "disabled" : ""}>${r2}</button>`) : ""}
    </div>
    <div class="${e3.styles.timeRanges}" data-vc-time="ranges">
      ${TimeRange("hour", e3.styles.timeRange, e3.labels, n2, a2, e3.timeStepHour, s2)}
      ${TimeRange("minute", e3.styles.timeRange, e3.labels, l2, o2, e3.timeStepMinute, e3.context.selectedMinutes)}
    </div>
  `), handleTime(e3, t2);
};
var createWeek = (e3) => {
  const t2 = e3.selectedWeekends ? [...e3.selectedWeekends] : [], n2 = [...e3.context.locale.weekdays.long].reduce((n3, a3, l2) => [...n3, { id: l2, titleShort: e3.context.locale.weekdays.short[l2], titleLong: a3, isWeekend: t2.includes(l2) }], []), a2 = [...n2.slice(e3.firstWeekday), ...n2.slice(0, e3.firstWeekday)];
  e3.context.mainElement.querySelectorAll('[data-vc="week"]').forEach((t3) => {
    const n3 = e3.onClickWeekDay ? document.createElement("button") : document.createElement("b");
    e3.onClickWeekDay && (n3.type = "button"), a2.forEach((a3) => {
      const l2 = n3.cloneNode(true);
      l2.innerText = a3.titleShort, l2.className = e3.styles.weekDay, l2.role = "columnheader", l2.ariaLabel = a3.titleLong, l2.dataset.vcWeekDay = String(a3.id), a3.isWeekend && (l2.dataset.vcWeekDayOff = ""), t3.appendChild(l2);
    });
  });
};
var createYearEl = (e3, t2, n2, a2, l2) => {
  const o2 = t2.cloneNode(false);
  return o2.className = e3.styles.yearsYear, o2.innerText = String(l2), o2.ariaLabel = String(l2), o2.role = "gridcell", o2.dataset.vcYearsYear = `${l2}`, a2 && (o2.ariaDisabled = "true"), a2 && (o2.tabIndex = -1), o2.disabled = a2, setYearModifier(e3, o2, "year", n2 === l2, false), o2;
};
var createYears = (e3, t2) => {
  var n2;
  const a2 = (null == t2 ? void 0 : t2.dataset.vcYear) ? Number(t2.dataset.vcYear) : e3.context.selectedYear;
  setContext(e3, "currentType", "year"), createLayouts(e3, t2), visibilityTitle(e3), visibilityArrows(e3);
  const l2 = e3.context.mainElement.querySelector('[data-vc="years"]');
  if (!e3.selectionYearsMode || !l2) return;
  const o2 = "multiple" !== e3.type || e3.context.selectedYear === a2 ? 0 : 1, s2 = document.createElement("button");
  s2.type = "button";
  for (let t3 = e3.context.displayYear - 7; t3 < e3.context.displayYear + 8; t3++) {
    const n3 = t3 < getDate(e3.context.dateMin).getFullYear() + o2 || t3 > getDate(e3.context.dateMax).getFullYear(), i3 = createYearEl(e3, s2, a2, n3, t3);
    l2.appendChild(i3), e3.onCreateYearEls && e3.onCreateYearEls(e3, i3);
  }
  null == (n2 = e3.context.mainElement.querySelector("[data-vc-years-year]:not([disabled])")) || n2.focus();
};
var trackChangesHTMLElement = (e3, t2, n2) => {
  new MutationObserver((e4) => {
    for (let a2 = 0; a2 < e4.length; a2++) {
      if (e4[a2].attributeName === t2) {
        n2();
        break;
      }
    }
  }).observe(e3, { attributes: true });
};
var haveListener = { value: false, set: () => haveListener.value = true, check: () => haveListener.value };
var setTheme = (e3, t2) => e3.dataset.vcTheme = t2;
var trackChangesThemeInSystemSettings = (e3, t2) => {
  if (setTheme(e3.context.mainElement, t2.matches ? "dark" : "light"), "system" !== e3.selectedTheme || haveListener.check()) return;
  const n2 = (e4) => {
    const t3 = document.querySelectorAll('[data-vc="calendar"]');
    null == t3 || t3.forEach((t4) => setTheme(t4, e4.matches ? "dark" : "light"));
  };
  t2.addEventListener ? t2.addEventListener("change", n2) : t2.addListener(n2), haveListener.set();
};
var detectTheme = (e3, t2) => {
  const n2 = e3.themeAttrDetect.length ? document.querySelector(e3.themeAttrDetect) : null, a2 = e3.themeAttrDetect.replace(/^.*\[(.+)\]/g, (e4, t3) => t3);
  if (!n2 || "system" === n2.getAttribute(a2)) return void trackChangesThemeInSystemSettings(e3, t2);
  const l2 = n2.getAttribute(a2);
  l2 ? (setTheme(e3.context.mainElement, l2), trackChangesHTMLElement(n2, a2, () => {
    const t3 = n2.getAttribute(a2);
    t3 && setTheme(e3.context.mainElement, t3);
  })) : trackChangesThemeInSystemSettings(e3, t2);
};
var handleTheme = (e3) => {
  "not all" !== window.matchMedia("(prefers-color-scheme)").media ? "system" === e3.selectedTheme ? detectTheme(e3, window.matchMedia("(prefers-color-scheme: dark)")) : setTheme(e3.context.mainElement, e3.selectedTheme) : setTheme(e3.context.mainElement, "light");
};
var capitalizeFirstLetter = (e3) => e3.charAt(0).toUpperCase() + e3.slice(1).replace(/\./, "");
var getLocaleWeekday = (e3, t2, n2) => {
  const a2 = /* @__PURE__ */ new Date(`1978-01-0${t2 + 1}T00:00:00.000Z`), l2 = a2.toLocaleString(n2, { weekday: "short", timeZone: "UTC" }), o2 = a2.toLocaleString(n2, { weekday: "long", timeZone: "UTC" });
  e3.context.locale.weekdays.short.push(capitalizeFirstLetter(l2)), e3.context.locale.weekdays.long.push(capitalizeFirstLetter(o2));
};
var getLocaleMonth = (e3, t2, n2) => {
  const a2 = /* @__PURE__ */ new Date(`1978-${String(t2 + 1).padStart(2, "0")}-01T00:00:00.000Z`), l2 = a2.toLocaleString(n2, { month: "short", timeZone: "UTC" }), o2 = a2.toLocaleString(n2, { month: "long", timeZone: "UTC" });
  e3.context.locale.months.short.push(capitalizeFirstLetter(l2)), e3.context.locale.months.long.push(capitalizeFirstLetter(o2));
};
var getLocale = (e3) => {
  var t2, n2, a2, l2, o2, s2, i3, r2;
  if (!(e3.context.locale.weekdays.short[6] && e3.context.locale.weekdays.long[6] && e3.context.locale.months.short[11] && e3.context.locale.months.long[11])) if ("string" == typeof e3.locale) {
    if ("string" == typeof e3.locale && !e3.locale.length) throw new Error(errorMessages.notLocale);
    Array.from({ length: 7 }, (t3, n3) => getLocaleWeekday(e3, n3, e3.locale)), Array.from({ length: 12 }, (t3, n3) => getLocaleMonth(e3, n3, e3.locale));
  } else {
    if (!((null == (n2 = null == (t2 = e3.locale) ? void 0 : t2.weekdays) ? void 0 : n2.short[6]) && (null == (l2 = null == (a2 = e3.locale) ? void 0 : a2.weekdays) ? void 0 : l2.long[6]) && (null == (s2 = null == (o2 = e3.locale) ? void 0 : o2.months) ? void 0 : s2.short[11]) && (null == (r2 = null == (i3 = e3.locale) ? void 0 : i3.months) ? void 0 : r2.long[11]))) throw new Error(errorMessages.notLocale);
    setContext(e3, "locale", __spreadValues({}, e3.locale));
  }
};
var create = (e3) => {
  const t2 = { default: () => {
    createWeek(e3), createDates(e3);
  }, multiple: () => {
    createWeek(e3), createDates(e3);
  }, month: () => createMonths(e3), year: () => createYears(e3) };
  handleTheme(e3), getLocale(e3), createLayouts(e3), visibilityTitle(e3), visibilityArrows(e3), createTime(e3), t2[e3.context.currentType]();
};
var handleArrowKeys = (e3) => {
  const t2 = (t3) => {
    var n2;
    const a2 = t3.target;
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(t3.key) || "button" !== a2.localName) return;
    const l2 = Array.from(e3.context.mainElement.querySelectorAll('[data-vc="calendar"] button')), o2 = l2.indexOf(a2);
    if (-1 === o2) return;
    const s2 = (i3 = l2[o2]).hasAttribute("data-vc-date-btn") ? 7 : i3.hasAttribute("data-vc-months-month") ? 4 : i3.hasAttribute("data-vc-years-year") ? 5 : 1;
    var i3;
    const r2 = (0, { ArrowUp: () => Math.max(0, o2 - s2), ArrowDown: () => Math.min(l2.length - 1, o2 + s2), ArrowLeft: () => Math.max(0, o2 - 1), ArrowRight: () => Math.min(l2.length - 1, o2 + 1) }[t3.key])();
    null == (n2 = l2[r2]) || n2.focus();
  };
  return e3.context.mainElement.addEventListener("keydown", t2), () => e3.context.mainElement.removeEventListener("keydown", t2);
};
var handleMonth = (e3, t2) => {
  const n2 = getDate(getDateString(new Date(e3.context.selectedYear, e3.context.selectedMonth, 1)));
  ({ prev: () => n2.setMonth(n2.getMonth() - e3.monthsToSwitch), next: () => n2.setMonth(n2.getMonth() + e3.monthsToSwitch) })[t2](), setContext(e3, "selectedMonth", n2.getMonth()), setContext(e3, "selectedYear", n2.getFullYear()), visibilityTitle(e3), visibilityArrows(e3), createDates(e3);
};
var handleClickArrow = (e3, t2) => {
  const n2 = t2.target.closest("[data-vc-arrow]");
  if (n2) {
    if (["default", "multiple"].includes(e3.context.currentType)) handleMonth(e3, n2.dataset.vcArrow);
    else if ("year" === e3.context.currentType && void 0 !== e3.context.displayYear) {
      const a2 = { prev: -15, next: 15 }[n2.dataset.vcArrow];
      setContext(e3, "displayYear", e3.context.displayYear + a2), createYears(e3, t2.target);
    }
    e3.onClickArrow && e3.onClickArrow(e3, t2);
  }
};
var canToggleSelection = (e3) => void 0 === e3.enableDateToggle || ("function" == typeof e3.enableDateToggle ? e3.enableDateToggle(e3) : e3.enableDateToggle);
var handleSelectDate = (e3, t2, n2) => {
  const a2 = t2.dataset.vcDate, l2 = t2.closest("[data-vc-date][data-vc-date-selected]"), o2 = canToggleSelection(e3);
  if (l2 && !o2) return;
  const s2 = l2 ? e3.context.selectedDates.filter((e4) => e4 !== a2) : n2 ? [...e3.context.selectedDates, a2] : [a2];
  setContext(e3, "selectedDates", s2);
};
var createDateRangeTooltip = (e3, t2, n2) => {
  if (!t2) return;
  if (!n2) return t2.dataset.vcDateRangeTooltip = "hidden", void (t2.textContent = "");
  const a2 = e3.context.mainElement.getBoundingClientRect(), l2 = n2.getBoundingClientRect();
  t2.style.left = l2.left - a2.left + l2.width / 2 + "px", t2.style.top = l2.bottom - a2.top - l2.height + "px", t2.dataset.vcDateRangeTooltip = "visible", t2.innerHTML = e3.sanitizerHTML(e3.onCreateDateRangeTooltip(e3, n2, t2, l2, a2));
};
var state = { self: null, lastDateEl: null, isHovering: false, rangeMin: void 0, rangeMax: void 0, tooltipEl: null, timeoutId: null };
var addHoverEffect = (e3, t2, n2) => {
  var a2, l2, o2;
  if (!(null == (l2 = null == (a2 = state.self) ? void 0 : a2.context) ? void 0 : l2.selectedDates[0])) return;
  const s2 = getDateString(e3);
  (null == (o2 = state.self.context.disableDates) ? void 0 : o2.includes(s2)) || (state.self.context.mainElement.querySelectorAll(`[data-vc-date="${s2}"]`).forEach((e4) => e4.dataset.vcDateHover = ""), t2.forEach((e4) => e4.dataset.vcDateHover = "first"), n2.forEach((e4) => {
    "first" === e4.dataset.vcDateHover ? e4.dataset.vcDateHover = "first-and-last" : e4.dataset.vcDateHover = "last";
  }));
};
var removeHoverEffect = () => {
  var e3, t2;
  if (!(null == (t2 = null == (e3 = state.self) ? void 0 : e3.context) ? void 0 : t2.mainElement)) return;
  state.self.context.mainElement.querySelectorAll("[data-vc-date-hover]").forEach((e4) => e4.removeAttribute("data-vc-date-hover"));
};
var handleHoverDatesEvent = (e3) => {
  var t2, n2;
  if (!e3.target || !(null == (n2 = null == (t2 = state.self) ? void 0 : t2.context) ? void 0 : n2.selectedDates[0])) return;
  if (!e3.target.closest('[data-vc="dates"]')) return state.lastDateEl = null, createDateRangeTooltip(state.self, state.tooltipEl, null), void removeHoverEffect();
  const a2 = e3.target.closest("[data-vc-date]");
  if (!a2 || state.lastDateEl === a2) return;
  state.lastDateEl = a2, createDateRangeTooltip(state.self, state.tooltipEl, a2), removeHoverEffect();
  const l2 = a2.dataset.vcDate, o2 = getDate(state.self.context.selectedDates[0]), s2 = getDate(l2), i3 = state.self.context.mainElement.querySelectorAll(`[data-vc-date="${state.self.context.selectedDates[0]}"]`), r2 = state.self.context.mainElement.querySelectorAll(`[data-vc-date="${l2}"]`), [c2, d2] = o2 < s2 ? [i3, r2] : [r2, i3], [u3, m2] = o2 < s2 ? [o2, s2] : [s2, o2];
  for (let e4 = new Date(u3); e4 <= m2; e4.setDate(e4.getDate() + 1)) addHoverEffect(e4, c2, d2);
};
var handleHoverSelectedDatesRangeEvent = (e3) => {
  const t2 = e3.target.closest("[data-vc-date-selected]");
  if (!t2 && state.lastDateEl) return state.lastDateEl = null, void createDateRangeTooltip(state.self, state.tooltipEl, null);
  t2 && state.lastDateEl !== t2 && (state.lastDateEl = t2, createDateRangeTooltip(state.self, state.tooltipEl, t2));
};
var optimizedHoverHandler = (e3) => (t2) => {
  state.isHovering || (state.isHovering = true, requestAnimationFrame(() => {
    e3(t2), state.isHovering = false;
  }));
};
var optimizedHandleHoverDatesEvent = optimizedHoverHandler(handleHoverDatesEvent);
var optimizedHandleHoverSelectedDatesRangeEvent = optimizedHoverHandler(handleHoverSelectedDatesRangeEvent);
var handleCancelSelectionDates = (e3) => {
  state.self && "Escape" === e3.key && (state.lastDateEl = null, setContext(state.self, "selectedDates", []), state.self.context.mainElement.removeEventListener("mousemove", optimizedHandleHoverDatesEvent), state.self.context.mainElement.removeEventListener("keydown", handleCancelSelectionDates), createDateRangeTooltip(state.self, state.tooltipEl, null), removeHoverEffect());
};
var handleMouseLeave = () => {
  null !== state.timeoutId && clearTimeout(state.timeoutId), state.timeoutId = setTimeout(() => {
    state.lastDateEl = null, createDateRangeTooltip(state.self, state.tooltipEl, null), removeHoverEffect();
  }, 50);
};
var updateDisabledDates = () => {
  var e3, t2, n2, a2;
  if (!(null == (n2 = null == (t2 = null == (e3 = state.self) ? void 0 : e3.context) ? void 0 : t2.selectedDates) ? void 0 : n2[0]) || !(null == (a2 = state.self.context.disableDates) ? void 0 : a2[0])) return;
  const l2 = getDate(state.self.context.selectedDates[0]), [o2, s2] = state.self.context.disableDates.map((e4) => getDate(e4)).reduce(([e4, t3], n3) => [l2 >= n3 ? n3 : e4, l2 < n3 && null === t3 ? n3 : t3], [null, null]);
  o2 && setContext(state.self, "displayDateMin", getDateString(new Date(o2.setDate(o2.getDate() + 1)))), s2 && setContext(state.self, "displayDateMax", getDateString(new Date(s2.setDate(s2.getDate() - 1))));
  state.self.disableDatesPast && !state.self.disableAllDates && getDate(state.self.context.displayDateMin) < getDate(state.self.context.dateToday) && setContext(state.self, "displayDateMin", state.self.context.dateToday);
};
var handleSelectDateRange = (e3, t2) => {
  state.self = e3, state.lastDateEl = t2, removeHoverEffect(), e3.disableDatesGaps && (state.rangeMin = state.rangeMin ? state.rangeMin : e3.context.displayDateMin, state.rangeMax = state.rangeMax ? state.rangeMax : e3.context.displayDateMax), e3.onCreateDateRangeTooltip && (state.tooltipEl = e3.context.mainElement.querySelector("[data-vc-date-range-tooltip]"));
  const n2 = null == t2 ? void 0 : t2.dataset.vcDate;
  if (n2) {
    const t3 = 1 === e3.context.selectedDates.length && e3.context.selectedDates[0].includes(n2), a2 = t3 && !canToggleSelection(e3) ? [n2, n2] : t3 && canToggleSelection(e3) ? [] : e3.context.selectedDates.length > 1 ? [n2] : [...e3.context.selectedDates, n2];
    setContext(e3, "selectedDates", a2), e3.context.selectedDates.length > 1 && e3.context.selectedDates.sort((e4, t4) => +new Date(e4) - +new Date(t4));
  }
  ({ set: () => (e3.disableDatesGaps && updateDisabledDates(), createDateRangeTooltip(state.self, state.tooltipEl, t2), state.self.context.mainElement.removeEventListener("mousemove", optimizedHandleHoverSelectedDatesRangeEvent), state.self.context.mainElement.removeEventListener("mouseleave", handleMouseLeave), state.self.context.mainElement.removeEventListener("keydown", handleCancelSelectionDates), state.self.context.mainElement.addEventListener("mousemove", optimizedHandleHoverDatesEvent), state.self.context.mainElement.addEventListener("mouseleave", handleMouseLeave), state.self.context.mainElement.addEventListener("keydown", handleCancelSelectionDates), () => {
    state.self.context.mainElement.removeEventListener("mousemove", optimizedHandleHoverDatesEvent), state.self.context.mainElement.removeEventListener("mouseleave", handleMouseLeave), state.self.context.mainElement.removeEventListener("keydown", handleCancelSelectionDates);
  }), reset: () => {
    const [n3, a2] = [e3.context.selectedDates[0], e3.context.selectedDates[e3.context.selectedDates.length - 1]], l2 = e3.context.selectedDates[0] !== e3.context.selectedDates[e3.context.selectedDates.length - 1], o2 = parseDates([`${n3}:${a2}`]).filter((t3) => !e3.context.disableDates.includes(t3)), s2 = l2 ? e3.enableEdgeDatesOnly ? [n3, a2] : o2 : [e3.context.selectedDates[0], e3.context.selectedDates[0]];
    if (setContext(e3, "selectedDates", s2), e3.disableDatesGaps && (setContext(e3, "displayDateMin", state.rangeMin), setContext(e3, "displayDateMax", state.rangeMax)), state.self.context.mainElement.removeEventListener("mousemove", optimizedHandleHoverDatesEvent), state.self.context.mainElement.removeEventListener("mouseleave", handleMouseLeave), state.self.context.mainElement.removeEventListener("keydown", handleCancelSelectionDates), e3.onCreateDateRangeTooltip) return e3.context.selectedDates[0] || (state.self.context.mainElement.removeEventListener("mousemove", optimizedHandleHoverSelectedDatesRangeEvent), state.self.context.mainElement.removeEventListener("mouseleave", handleMouseLeave), createDateRangeTooltip(state.self, state.tooltipEl, null)), e3.context.selectedDates[0] && (state.self.context.mainElement.addEventListener("mousemove", optimizedHandleHoverSelectedDatesRangeEvent), state.self.context.mainElement.addEventListener("mouseleave", handleMouseLeave), createDateRangeTooltip(state.self, state.tooltipEl, t2)), () => {
      state.self.context.mainElement.removeEventListener("mousemove", optimizedHandleHoverSelectedDatesRangeEvent), state.self.context.mainElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  } })[1 === e3.context.selectedDates.length ? "set" : "reset"]();
};
var updateDateModifier = (e3) => {
  e3.context.mainElement.querySelectorAll("[data-vc-date]").forEach((t2) => {
    const n2 = t2.querySelector("[data-vc-date-btn]"), a2 = t2.dataset.vcDate, l2 = getDate(a2).getDay();
    setDateModifier(e3, e3.context.selectedYear, t2, n2, l2, a2, "current");
  });
};
var handleClickDate = (e3, t2) => {
  var n2;
  const a2 = t2.target, l2 = a2.closest("[data-vc-date-btn]");
  if (!e3.selectionDatesMode || !["single", "multiple", "multiple-ranged"].includes(e3.selectionDatesMode) || !l2) return;
  const o2 = l2.closest("[data-vc-date]");
  ({ single: () => handleSelectDate(e3, o2, false), multiple: () => handleSelectDate(e3, o2, true), "multiple-ranged": () => handleSelectDateRange(e3, o2) })[e3.selectionDatesMode](), null == (n2 = e3.context.selectedDates) || n2.sort((e4, t3) => +new Date(e4) - +new Date(t3)), e3.onClickDate && e3.onClickDate(e3, t2), e3.inputMode && e3.context.inputElement && e3.context.mainElement && e3.onChangeToInput && e3.onChangeToInput(e3, t2);
  const s2 = a2.closest('[data-vc-date-month="prev"]'), i3 = a2.closest('[data-vc-date-month="next"]');
  ({ prev: () => e3.enableMonthChangeOnDayClick ? handleMonth(e3, "prev") : updateDateModifier(e3), next: () => e3.enableMonthChangeOnDayClick ? handleMonth(e3, "next") : updateDateModifier(e3), current: () => updateDateModifier(e3) })[s2 ? "prev" : i3 ? "next" : "current"]();
};
var typeClick = ["month", "year"];
var getValue = (e3, t2, n2) => {
  const { currentValue: a2, columnID: l2 } = getColumnID(e3, t2);
  return "month" === e3.context.currentType && l2 >= 0 ? n2 - l2 : "year" === e3.context.currentType && e3.context.selectedYear !== a2 ? n2 - 1 : n2;
};
var handleMultipleYearSelection = (e3, t2) => {
  const n2 = getValue(e3, "year", Number(t2.dataset.vcYearsYear)), a2 = getDate(e3.context.dateMin), l2 = getDate(e3.context.dateMax), o2 = e3.context.displayMonthsCount - 1, { columnID: s2 } = getColumnID(e3, "year"), i3 = e3.context.selectedMonth < a2.getMonth() && n2 <= a2.getFullYear(), r2 = e3.context.selectedMonth > l2.getMonth() - o2 + s2 && n2 >= l2.getFullYear(), c2 = n2 < a2.getFullYear(), d2 = n2 > l2.getFullYear(), u3 = i3 || c2 ? a2.getFullYear() : r2 || d2 ? l2.getFullYear() : n2, m2 = i3 || c2 ? a2.getMonth() : r2 || d2 ? l2.getMonth() - o2 + s2 : e3.context.selectedMonth;
  setContext(e3, "selectedYear", u3), setContext(e3, "selectedMonth", m2);
};
var handleMultipleMonthSelection = (e3, t2) => {
  const n2 = t2.closest('[data-vc-column="month"]').querySelector('[data-vc="year"]'), a2 = getValue(e3, "month", Number(t2.dataset.vcMonthsMonth)), l2 = Number(n2.dataset.vcYear), o2 = getDate(e3.context.dateMin), s2 = getDate(e3.context.dateMax), i3 = a2 < o2.getMonth() && l2 <= o2.getFullYear(), r2 = a2 > s2.getMonth() && l2 >= s2.getFullYear();
  setContext(e3, "selectedYear", l2), setContext(e3, "selectedMonth", i3 ? o2.getMonth() : r2 ? s2.getMonth() : a2);
};
var handleItemClick = (e3, t2, n2, a2) => {
  var l2;
  ({ year: () => {
    if ("multiple" === e3.type) return handleMultipleYearSelection(e3, a2);
    setContext(e3, "selectedYear", Number(a2.dataset.vcYearsYear));
  }, month: () => {
    if ("multiple" === e3.type) return handleMultipleMonthSelection(e3, a2);
    setContext(e3, "selectedMonth", Number(a2.dataset.vcMonthsMonth));
  } })[n2]();
  ({ year: () => {
    var n3;
    return null == (n3 = e3.onClickYear) ? void 0 : n3.call(e3, e3, t2);
  }, month: () => {
    var n3;
    return null == (n3 = e3.onClickMonth) ? void 0 : n3.call(e3, e3, t2);
  } })[n2](), e3.context.currentType !== e3.type ? (setContext(e3, "currentType", e3.type), create(e3), null == (l2 = e3.context.mainElement.querySelector(`[data-vc="${n2}"]`)) || l2.focus()) : setYearModifier(e3, a2, n2, true, true);
};
var handleClickType = (e3, t2, n2) => {
  var a2;
  const l2 = t2.target, o2 = l2.closest(`[data-vc="${n2}"]`), s2 = { year: () => createYears(e3, l2), month: () => createMonths(e3, l2) };
  if (o2 && e3.onClickTitle && e3.onClickTitle(e3, t2), o2 && e3.context.currentType !== n2) return s2[n2]();
  const i3 = l2.closest(`[data-vc-${n2}s-${n2}]`);
  if (i3) return handleItemClick(e3, t2, n2, i3);
  const r2 = l2.closest('[data-vc="grid"]'), c2 = l2.closest('[data-vc="column"]');
  (e3.context.currentType === n2 && o2 || "multiple" === e3.type && e3.context.currentType === n2 && r2 && !c2) && (setContext(e3, "currentType", e3.type), create(e3), null == (a2 = e3.context.mainElement.querySelector(`[data-vc="${n2}"]`)) || a2.focus());
};
var handleClickMonthOrYear = (e3, t2) => {
  const n2 = { month: e3.selectionMonthsMode, year: e3.selectionYearsMode };
  typeClick.forEach((a2) => {
    n2[a2] && t2.target && handleClickType(e3, t2, a2);
  });
};
var handleClickWeekNumber = (e3, t2) => {
  if (!e3.enableWeekNumbers || !e3.onClickWeekNumber) return;
  const n2 = t2.target.closest("[data-vc-week-number]"), a2 = e3.context.mainElement.querySelectorAll("[data-vc-date-week-number]");
  if (!n2 || !a2[0]) return;
  const l2 = Number(n2.innerText), o2 = Number(n2.dataset.vcWeekYear), s2 = Array.from(a2).filter((e4) => Number(e4.dataset.vcDateWeekNumber) === l2);
  e3.onClickWeekNumber(e3, l2, o2, s2, t2);
};
var handleClickWeekDay = (e3, t2) => {
  if (!e3.onClickWeekDay) return;
  const n2 = t2.target.closest("[data-vc-week-day]"), a2 = t2.target.closest('[data-vc="column"]'), l2 = a2 ? a2.querySelectorAll("[data-vc-date-week-day]") : e3.context.mainElement.querySelectorAll("[data-vc-date-week-day]");
  if (!n2 || !l2[0]) return;
  const o2 = Number(n2.dataset.vcWeekDay), s2 = Array.from(l2).filter((e4) => Number(e4.dataset.vcDateWeekDay) === o2);
  e3.onClickWeekDay(e3, o2, s2, t2);
};
var handleClick = (e3) => {
  const t2 = (t3) => {
    handleClickArrow(e3, t3), handleClickWeekDay(e3, t3), handleClickWeekNumber(e3, t3), handleClickDate(e3, t3), handleClickMonthOrYear(e3, t3);
  };
  return e3.context.mainElement.addEventListener("click", t2), () => e3.context.mainElement.removeEventListener("click", t2);
};
var initMonthsCount = (e3) => {
  if ("multiple" === e3.type && (e3.displayMonthsCount <= 1 || e3.displayMonthsCount > 12)) throw new Error(errorMessages.incorrectMonthsCount);
  if ("multiple" !== e3.type && e3.displayMonthsCount > 1) throw new Error(errorMessages.incorrectMonthsCount);
  setContext(e3, "displayMonthsCount", e3.displayMonthsCount ? e3.displayMonthsCount : "multiple" === e3.type ? 2 : 1);
};
var getLocalDate = () => {
  const e3 = /* @__PURE__ */ new Date();
  return new Date(e3.getTime() - 6e4 * e3.getTimezoneOffset()).toISOString().substring(0, 10);
};
var resolveDate = (e3, t2) => "today" === e3 ? getLocalDate() : e3 instanceof Date || "number" == typeof e3 || "string" == typeof e3 ? parseDates([e3])[0] : t2;
var initRange = (e3) => {
  var t2, n2, a2;
  const l2 = resolveDate(e3.dateMin, e3.dateMin), o2 = resolveDate(e3.dateMax, e3.dateMax), s2 = resolveDate(e3.displayDateMin, l2), i3 = resolveDate(e3.displayDateMax, o2);
  setContext(e3, "dateToday", resolveDate(e3.dateToday, e3.dateToday)), setContext(e3, "displayDateMin", s2 ? getDate(l2) >= getDate(s2) ? l2 : s2 : l2), setContext(e3, "displayDateMax", i3 ? getDate(o2) <= getDate(i3) ? o2 : i3 : o2);
  const r2 = e3.disableDatesPast && !e3.disableAllDates && getDate(s2) < getDate(e3.context.dateToday);
  setContext(e3, "displayDateMin", r2 || e3.disableAllDates ? e3.context.dateToday : s2), setContext(e3, "displayDateMax", e3.disableAllDates ? e3.context.dateToday : i3), setContext(e3, "disableDates", e3.disableDates[0] && !e3.disableAllDates ? parseDates(e3.disableDates) : e3.disableAllDates ? [e3.context.displayDateMin] : []), e3.context.disableDates.length > 1 && e3.context.disableDates.sort((e4, t3) => +new Date(e4) - +new Date(t3)), setContext(e3, "enableDates", e3.enableDates[0] ? parseDates(e3.enableDates) : []), (null == (t2 = e3.context.enableDates) ? void 0 : t2[0]) && (null == (n2 = e3.context.disableDates) ? void 0 : n2[0]) && setContext(e3, "disableDates", e3.context.disableDates.filter((t3) => !e3.context.enableDates.includes(t3))), e3.context.enableDates.length > 1 && e3.context.enableDates.sort((e4, t3) => +new Date(e4) - +new Date(t3)), (null == (a2 = e3.context.enableDates) ? void 0 : a2[0]) && e3.disableAllDates && (setContext(e3, "displayDateMin", e3.context.enableDates[0]), setContext(e3, "displayDateMax", e3.context.enableDates[e3.context.enableDates.length - 1])), setContext(e3, "dateMin", e3.displayDisabledDates ? l2 : e3.context.displayDateMin), setContext(e3, "dateMax", e3.displayDisabledDates ? o2 : e3.context.displayDateMax);
};
var initSelectedDates = (e3) => {
  var t2;
  setContext(e3, "selectedDates", (null == (t2 = e3.selectedDates) ? void 0 : t2[0]) ? parseDates(e3.selectedDates) : []);
};
var setInitialContext = (e3, t2, n2) => {
  setContext(e3, "selectedMonth", t2), setContext(e3, "selectedYear", n2), setContext(e3, "displayYear", n2);
};
var initSelectedMonthYear = (e3) => {
  var t2;
  if (e3.enableJumpToSelectedDate && (null == (t2 = e3.selectedDates) ? void 0 : t2[0]) && void 0 === e3.selectedMonth && void 0 === e3.selectedYear) {
    const t3 = getDate(parseDates(e3.selectedDates)[0]);
    return void setInitialContext(e3, t3.getMonth(), t3.getFullYear());
  }
  const n2 = void 0 !== e3.selectedMonth && Number(e3.selectedMonth) >= 0 && Number(e3.selectedMonth) < 12, a2 = void 0 !== e3.selectedYear && Number(e3.selectedYear) >= 0 && Number(e3.selectedYear) <= 9999;
  setInitialContext(e3, n2 ? Number(e3.selectedMonth) : getDate(e3.context.dateToday).getMonth(), a2 ? Number(e3.selectedYear) : getDate(e3.context.dateToday).getFullYear());
};
var initTime = (e3) => {
  var t2, n2, a2;
  if (!e3.selectionTimeMode) return;
  if (![12, 24].includes(e3.selectionTimeMode)) throw new Error(errorMessages.incorrectTime);
  const l2 = 12 === e3.selectionTimeMode, o2 = l2 ? /^(0[1-9]|1[0-2]):([0-5][0-9]) ?(AM|PM)?$/i : /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/;
  let [s2, i3, r2] = null != (a2 = null == (n2 = null == (t2 = e3.selectedTime) ? void 0 : t2.match(o2)) ? void 0 : n2.slice(1)) ? a2 : [];
  s2 ? l2 && !r2 && (r2 = "AM") : (s2 = l2 ? transformTime12(String(e3.timeMinHour)) : String(e3.timeMinHour), i3 = String(e3.timeMinMinute), r2 = l2 ? Number(transformTime12(String(e3.timeMinHour))) >= 12 ? "PM" : "AM" : null), setContext(e3, "selectedHours", s2.padStart(2, "0")), setContext(e3, "selectedMinutes", i3.padStart(2, "0")), setContext(e3, "selectedKeeping", r2), setContext(e3, "selectedTime", `${e3.context.selectedHours}:${e3.context.selectedMinutes}${r2 ? ` ${r2}` : ""}`);
};
var initAllVariables = (e3) => {
  setContext(e3, "currentType", e3.type), initMonthsCount(e3), initRange(e3), initSelectedMonthYear(e3), initSelectedDates(e3), initTime(e3);
};
var reset = (e3, { year: t2, month: n2, dates: a2, time: l2, locale: o2 }, s2 = true) => {
  var i3;
  const r2 = { year: e3.selectedYear, month: e3.selectedMonth, dates: e3.selectedDates, time: e3.selectedTime };
  if (e3.selectedYear = t2 ? r2.year : e3.context.selectedYear, e3.selectedMonth = n2 ? r2.month : e3.context.selectedMonth, e3.selectedTime = l2 ? r2.time : e3.context.selectedTime, e3.selectedDates = "only-first" === a2 && (null == (i3 = e3.context.selectedDates) ? void 0 : i3[0]) ? [e3.context.selectedDates[0]] : true === a2 ? r2.dates : e3.context.selectedDates, o2) {
    setContext(e3, "locale", { months: { short: [], long: [] }, weekdays: { short: [], long: [] } });
  }
  initAllVariables(e3), s2 && create(e3), e3.selectedYear = r2.year, e3.selectedMonth = r2.month, e3.selectedDates = r2.dates, e3.selectedTime = r2.time, "multiple-ranged" === e3.selectionDatesMode && a2 && handleSelectDateRange(e3, null);
};
var createToInput = (e3) => {
  const t2 = document.createElement("div");
  return t2.className = e3.styles.calendar, t2.dataset.vc = "calendar", t2.dataset.vcInput = "", t2.dataset.vcCalendarHidden = "", setContext(e3, "inputModeInit", true), setContext(e3, "isShowInInputMode", false), setContext(e3, "mainElement", t2), document.body.appendChild(e3.context.mainElement), reset(e3, { year: true, month: true, dates: true, time: true, locale: true }), queueMicrotask(() => show(e3)), e3.onInit && e3.onInit(e3), handleArrowKeys(e3), handleClick(e3);
};
var handleInput = (e3) => {
  setContext(e3, "inputElement", e3.context.mainElement);
  const t2 = () => {
    e3.context.inputModeInit ? queueMicrotask(() => show(e3)) : createToInput(e3);
  };
  return e3.context.inputElement.addEventListener("click", t2), e3.context.inputElement.addEventListener("focus", t2), () => {
    e3.context.inputElement.removeEventListener("click", t2), e3.context.inputElement.removeEventListener("focus", t2);
  };
};
var init = (e3) => (setContext(e3, "originalElement", e3.context.mainElement.cloneNode(true)), setContext(e3, "isInit", true), e3.inputMode ? handleInput(e3) : (initAllVariables(e3), create(e3), e3.onInit && e3.onInit(e3), handleArrowKeys(e3), handleClick(e3)));
var update = (e3, t2) => {
  if (!e3.context.isInit) throw new Error(errorMessages.notInit);
  reset(e3, __spreadValues(__spreadValues({}, { year: true, month: true, dates: true, time: true, locale: true }), t2), !(e3.inputMode && !e3.context.inputModeInit)), e3.onUpdate && e3.onUpdate(e3);
};
var replaceProperties = (e3, t2) => {
  const n2 = Object.keys(t2);
  for (let a2 = 0; a2 < n2.length; a2++) {
    const l2 = n2[a2];
    "object" != typeof e3[l2] || "object" != typeof t2[l2] || t2[l2] instanceof Date || Array.isArray(t2[l2]) ? void 0 !== t2[l2] && (e3[l2] = t2[l2]) : replaceProperties(e3[l2], t2[l2]);
  }
};
var set = (e3, t2, n2) => {
  replaceProperties(e3, t2), e3.context.isInit && update(e3, n2);
};
function findBestPickerPosition(e3, t2) {
  const n2 = "left";
  if (!t2 || !e3) return n2;
  const { canShow: a2, parentPositions: l2 } = getAvailablePosition(e3, t2), o2 = a2.left && a2.right;
  return (o2 && a2.bottom ? "center" : o2 && a2.top ? ["top", "center"] : Array.isArray(l2) ? ["bottom" === l2[0] ? "top" : "bottom", ...l2.slice(1)] : l2) || n2;
}
var setPosition = (e3, t2, n2) => {
  if (!e3) return;
  const a2 = "auto" === n2 ? findBestPickerPosition(e3, t2) : n2, l2 = { top: -t2.offsetHeight, bottom: e3.offsetHeight, left: 0, center: e3.offsetWidth / 2 - t2.offsetWidth / 2, right: e3.offsetWidth - t2.offsetWidth }, o2 = Array.isArray(a2) ? a2[0] : "bottom", s2 = Array.isArray(a2) ? a2[1] : a2;
  t2.dataset.vcPosition = o2;
  const { top: i3, left: r2 } = getOffset(e3), c2 = i3 + l2[o2];
  let d2 = r2 + l2[s2];
  const { vw: u3 } = getViewportDimensions();
  if (d2 + t2.clientWidth > u3) {
    const e4 = window.innerWidth - document.body.clientWidth;
    d2 = u3 - t2.clientWidth - e4;
  } else d2 < 0 && (d2 = 0);
  Object.assign(t2.style, { left: `${d2}px`, top: `${c2}px` });
};
var show = (e3) => {
  if (e3.context.isShowInInputMode) return;
  if (!e3.context.currentType) return void e3.context.mainElement.click();
  setContext(e3, "cleanupHandlers", []), setContext(e3, "isShowInInputMode", true), setPosition(e3.context.inputElement, e3.context.mainElement, e3.positionToInput), e3.context.mainElement.removeAttribute("data-vc-calendar-hidden");
  const t2 = () => {
    setPosition(e3.context.inputElement, e3.context.mainElement, e3.positionToInput);
  };
  window.addEventListener("resize", t2), e3.context.cleanupHandlers.push(() => window.removeEventListener("resize", t2));
  const n2 = (t3) => {
    "Escape" === t3.key && hide(e3);
  };
  document.addEventListener("keydown", n2), e3.context.cleanupHandlers.push(() => document.removeEventListener("keydown", n2));
  const a2 = (t3) => {
    t3.target === e3.context.inputElement || e3.context.mainElement.contains(t3.target) || hide(e3);
  };
  document.addEventListener("click", a2, { capture: true }), e3.context.cleanupHandlers.push(() => document.removeEventListener("click", a2, { capture: true })), e3.onShow && e3.onShow(e3);
};
var labels = { application: "Calendar", navigation: "Calendar Navigation", arrowNext: { month: "Next month", year: "Next list of years" }, arrowPrev: { month: "Previous month", year: "Previous list of years" }, month: "Select month, current selected month:", months: "List of months", year: "Select year, current selected year:", years: "List of years", week: "Days of the week", weekNumber: "Numbers of weeks in a year", dates: "Dates in the current month", selectingTime: "Selecting a time ", inputHour: "Hours", inputMinute: "Minutes", rangeHour: "Slider for selecting hours", rangeMinute: "Slider for selecting minutes", btnKeeping: "Switch AM/PM, current position:" };
var styles = { calendar: "vc", controls: "vc-controls", grid: "vc-grid", column: "vc-column", header: "vc-header", headerContent: "vc-header__content", month: "vc-month", year: "vc-year", arrowPrev: "vc-arrow vc-arrow_prev", arrowNext: "vc-arrow vc-arrow_next", wrapper: "vc-wrapper", content: "vc-content", months: "vc-months", monthsMonth: "vc-months__month", years: "vc-years", yearsYear: "vc-years__year", week: "vc-week", weekDay: "vc-week__day", weekNumbers: "vc-week-numbers", weekNumbersTitle: "vc-week-numbers__title", weekNumbersContent: "vc-week-numbers__content", weekNumber: "vc-week-number", dates: "vc-dates", date: "vc-date", dateBtn: "vc-date__btn", datePopup: "vc-date__popup", dateRangeTooltip: "vc-date-range-tooltip", time: "vc-time", timeContent: "vc-time__content", timeHour: "vc-time__hour", timeMinute: "vc-time__minute", timeKeeping: "vc-time__keeping", timeRanges: "vc-time__ranges", timeRange: "vc-time__range" };
var OptionsCalendar = class {
  constructor() {
    __publicField(this, "type", "default"), __publicField(this, "inputMode", false), __publicField(this, "positionToInput", "left"), __publicField(this, "firstWeekday", 1), __publicField(this, "monthsToSwitch", 1), __publicField(this, "themeAttrDetect", "html[data-theme]"), __publicField(this, "locale", "en"), __publicField(this, "dateToday", "today"), __publicField(this, "dateMin", "1970-01-01"), __publicField(this, "dateMax", "2470-12-31"), __publicField(this, "displayDateMin"), __publicField(this, "displayDateMax"), __publicField(this, "displayDatesOutside", true), __publicField(this, "displayDisabledDates", false), __publicField(this, "displayMonthsCount"), __publicField(this, "disableDates", []), __publicField(this, "disableAllDates", false), __publicField(this, "disableDatesPast", false), __publicField(this, "disableDatesGaps", false), __publicField(this, "disableWeekdays", []), __publicField(this, "disableToday", false), __publicField(this, "enableDates", []), __publicField(this, "enableEdgeDatesOnly", true), __publicField(this, "enableDateToggle", true), __publicField(this, "enableWeekNumbers", false), __publicField(this, "enableMonthChangeOnDayClick", true), __publicField(this, "enableJumpToSelectedDate", false), __publicField(this, "selectionDatesMode", "single"), __publicField(this, "selectionMonthsMode", true), __publicField(this, "selectionYearsMode", true), __publicField(this, "selectionTimeMode", false), __publicField(this, "selectedDates", []), __publicField(this, "selectedMonth"), __publicField(this, "selectedYear"), __publicField(this, "selectedHolidays", []), __publicField(this, "selectedWeekends", [0, 6]), __publicField(this, "selectedTime"), __publicField(this, "selectedTheme", "system"), __publicField(this, "timeMinHour", 0), __publicField(this, "timeMaxHour", 23), __publicField(this, "timeMinMinute", 0), __publicField(this, "timeMaxMinute", 59), __publicField(this, "timeControls", "all"), __publicField(this, "timeStepHour", 1), __publicField(this, "timeStepMinute", 1), __publicField(this, "sanitizerHTML", (e3) => e3), __publicField(this, "onClickDate"), __publicField(this, "onClickWeekDay"), __publicField(this, "onClickWeekNumber"), __publicField(this, "onClickTitle"), __publicField(this, "onClickMonth"), __publicField(this, "onClickYear"), __publicField(this, "onClickArrow"), __publicField(this, "onChangeTime"), __publicField(this, "onChangeToInput"), __publicField(this, "onCreateDateRangeTooltip"), __publicField(this, "onCreateDateEls"), __publicField(this, "onCreateMonthEls"), __publicField(this, "onCreateYearEls"), __publicField(this, "onInit"), __publicField(this, "onUpdate"), __publicField(this, "onDestroy"), __publicField(this, "onShow"), __publicField(this, "onHide"), __publicField(this, "popups", {}), __publicField(this, "labels", __spreadValues({}, labels)), __publicField(this, "layouts", { default: "", multiple: "", month: "", year: "" }), __publicField(this, "styles", __spreadValues({}, styles));
  }
};
var _Calendar = class e2 extends OptionsCalendar {
  constructor(t2, n2) {
    var a2;
    super(), __publicField(this, "init", () => init(this)), __publicField(this, "update", (e3) => update(this, e3)), __publicField(this, "destroy", () => destroy(this)), __publicField(this, "show", () => show(this)), __publicField(this, "hide", () => hide(this)), __publicField(this, "set", (e3, t3) => set(this, e3, t3)), __publicField(this, "context"), this.context = __spreadProps(__spreadValues({}, this.context), { locale: { months: { short: [], long: [] }, weekdays: { short: [], long: [] } } }), setContext(this, "mainElement", "string" == typeof t2 ? null != (a2 = e2.memoizedElements.get(t2)) ? a2 : this.queryAndMemoize(t2) : t2), n2 && replaceProperties(this, n2);
  }
  queryAndMemoize(t2) {
    const n2 = document.querySelector(t2);
    if (!n2) throw new Error(errorMessages.notFoundSelector(t2));
    return e2.memoizedElements.set(t2, n2), n2;
  }
};
__publicField(_Calendar, "memoizedElements", /* @__PURE__ */ new Map());
var Calendar = _Calendar;

// src/components/FormAppoiment.jsx
var FormAppoinment = class extends FormLead {
  #default = {
    eventName: "user:click-form-appoinment",
    form: {
      function: {
        disabled: true
      },
      company: {
        disabled: true
      },
      subject: {
        disabled: true
      },
      description: {
        disabled: true
      }
    },
    calendar: {
      initialTime: 9,
      finalTime: 17,
      deltaTime: 60
    }
  };
  constructor(props = {}) {
    super();
    this.state = this.initState(this.#default, props);
    this.getAttribute("id") || this.setAttribute("id", this.state.id || `component-${Math.floor(Math.random() * 100)}`);
    this.setAttribute("stage", "awaiting");
    this.ok = false;
    this.calendar = false;
  }
  attributeChangedCallback(name, oldValue, newValue) {
    let form = this.querySelector("form");
    if (form === null) return;
    if (newValue === "open") {
      if (this.calendar === false) {
        this.calendar = new Calendar("#calendar", this.#setCalendar());
        this.calendar.init();
      } else {
        this.calendar.update();
      }
      const fieldset = form.querySelector("fieldset");
      fieldset.disabled = true;
      this.querySelector(".modal").classList.add("is-active");
    } else {
      form.reset();
      let times = this.querySelector(".grid").querySelectorAll("button:not([disabled])");
      times.forEach((time) => {
        if (time.classList.contains("is-info")) {
          time.classList.remove("is-info");
        }
        time.disabled = true;
      });
      this.querySelector(".modal").classList.remove("is-active");
    }
  }
  #setCalendar() {
    let eventName = this.state.eventName;
    let id = this.state.id;
    let today = /* @__PURE__ */ new Date();
    let config2 = {
      locale: this.state.context.lang,
      onClickDate(self, event) {
        let selection = event.target.parentNode;
        let date = selection.dataset.vcDate;
        const customEvent = new CustomEvent(eventName, {
          detail: { source: `${id}-calendar`, date },
          bubbles: true,
          composed: true
        });
        selection.dispatchEvent(customEvent);
      }
    };
    if (this.state.calendar?.disablePastDays === true) {
      let yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");
      config2.displayDateMin = `${yyyy}-${mm}-${dd}`;
    }
    if (this.state.calendar?.deltaDays > 0) {
      today.setDate(today.getDate() + this.state.calendar.deltaDays - 1);
      let yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");
      config2.displayDateMax = `${yyyy}-${mm}-${dd}`;
    }
    if (this.state.calendar?.availableDates != void 0) {
      config2.disableAllDates = true, config2.enableDates = this.state.calendar.availableDates;
    }
    return config2;
  }
  #pad(num) {
    return num.toString().padStart(2, "0");
  }
  #getTimes() {
    let times = [];
    let deltaTime = this.state.calendar.deltaTime;
    let currentMinutes = this.state.calendar.initialTime * 60;
    const endMinutes = this.state.calendar.finalTime * 60 + deltaTime;
    if (currentMinutes < endMinutes) {
      while (currentMinutes <= endMinutes) {
        const hours = Math.floor(currentMinutes / 60);
        const minutes = currentMinutes % 60;
        const timeStr = `${this.#pad(hours)}:${this.#pad(minutes)}`;
        times.push(
          /* @__PURE__ */ u2("div", { class: "cell", children: /* @__PURE__ */ u2("button", { class: "button is-small is-time", "data-time": timeStr, disabled: true, children: timeStr }) }, timeStr)
        );
        currentMinutes += deltaTime;
      }
    } else {
      console.warn("finalTime must be greater than initialTime. It is expressed as integers in 24-hour format.");
    }
    return times;
  }
  enableTimes(options) {
    options.forEach((time) => {
      let el = this.querySelector(`[data-time="${time}"]`);
      if (el) {
        el.removeAttribute("disabled");
        el.addEventListener("click", (e3) => {
          e3.preventDefault();
          e3.stopPropagation();
          const customEvent = new CustomEvent("time-selected", {
            detail: { time },
            bubbles: false,
            composed: true
          });
          this.dispatchEvent(customEvent);
        });
      } else {
        console.warn(`Time ${time} not found in the form appoinment component.`);
      }
    });
  }
  registerExtraEvents() {
    this.addEventListener("time-selected", (e3) => {
      const dateSelected = this.querySelector('.vc-dates button[aria-selected="true"]').parentNode.dataset.vcDate;
      let appoinmentDate = `${dateSelected} ${e3.detail.time}`;
      let options = this.querySelectorAll(".is-time");
      options.forEach((el) => {
        el.classList.remove("is-info");
      });
      this.querySelector(`[data-time="${e3.detail.time}"]`).classList.add("is-info");
      let form = this.querySelector("form");
      const fieldset = form.querySelector("fieldset");
      fieldset.disabled = false;
      let input = this.querySelector("#appoinment");
      if (input) {
        input.value = appoinmentDate;
      }
    });
  }
  addDateField() {
    var input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("id", "appoinment");
    let form = this.querySelector("form");
    form.classList.remove("box");
    const fieldset = form.querySelector("fieldset");
    fieldset.appendChild(input);
  }
  render() {
    this.state?.id != void 0 ? this.state.form.id = `${this.state.id}-form` : `form-${Math.floor(Math.random() * 100)}`;
    R(
      /* @__PURE__ */ u2("div", { class: "modal", children: [
        /* @__PURE__ */ u2("div", { class: "modal-background" }),
        /* @__PURE__ */ u2("div", { class: "modal-card", children: [
          this.state.title?.text[this.state.context.lang] != void 0 && /* @__PURE__ */ u2("header", { class: this.getClassNames(["modal-card-head"], this.state.title?.classList), ...this.getAnimationProps(this.state.title?.animation), children: /* @__PURE__ */ u2("p", { class: "modal-card-title", children: this.state.title.text[this.state.context.lang] }) }),
          /* @__PURE__ */ u2("section", { class: "modal-card-body", children: [
            /* @__PURE__ */ u2("div", { children: /* @__PURE__ */ u2("div", { id: "calendar" }) }),
            /* @__PURE__ */ u2("div", { class: "pt-2", children: /* @__PURE__ */ u2("div", { class: "fixed-grid has-5-cols", children: /* @__PURE__ */ u2("div", { class: "grid", children: this.#getTimes() }) }) }),
            /* @__PURE__ */ u2("div", { class: "pt-4", children: this.state?.form != void 0 && new CjForm(this.state.form, this.state.context).render() })
          ] })
        ] })
      ] }),
      this
    );
    addFormEvents(this);
    this.registerExtraEvents();
    this.addDateField();
  }
};
customElements.define("form-appoinment", FormAppoinment);
export {
  CjForm,
  FormAppoinment,
  FormHero,
  FormLead,
  FormModal,
  addFormEvents
};
/*! Bundled license information:

vanilla-calendar-pro/index.mjs:
  (*! name: vanilla-calendar-pro v3.0.4 | url: https://github.com/uvarov-frontend/vanilla-calendar-pro *)
*/
