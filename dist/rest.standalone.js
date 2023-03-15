(() => { var t = { 363: function (t) { t.exports = function () { class t { static that(...t) { return new this(...t) } constructor(t, n = "?", e = "xxxxx") { this.target = t, this.targetID = n, this.errorID = e, this.and = this } equals(t, n) { if (this.target === t) return this; throw new Error("Expected <" + this.targetID + "> to equal <" + (n || t) + "> [ERROR:" + this.errorID + "]") } isUndefined() { if (void 0 === this.target) return this; throw new Error("Expected <" + this.targetID + "> to be undefined [ERROR:" + this.errorID + "]") } isNotUndefined() { if (void 0 !== this.target) return this; throw new Error("Expected <" + this.targetID + "> to not be undefined [ERROR:" + this.errorID + "]") } isNumber() { if ("number" == typeof this.target) return this; throw new Error("Expected <" + this.targetID + "> to be a number [ERROR:" + this.errorID + "]") } isString() { if ("string" == typeof this.target) return this; throw new Error("Expected <" + this.targetID + "> to be a string [ERROR:" + this.errorID + "]") } isObject() { if ("object" == typeof this.target) return this; throw new Error("Expected <" + this.targetID + "> to be an object [ERROR:" + this.errorID + "]") } isFunction() { if ("function" == typeof this.target) return this; throw new Error("Expected <" + this.targetID + "> to be a function [ERROR:" + this.errorID + "]") } isArray() { if (Array.isArray(this.target)) return this; throw new Error("Expected <" + this.targetID + "> to be an array [ERROR:" + this.errorID + "]") } isGreaterThan(t, n) { try { if (this.target > t) return this } catch (e) { throw new Error("Expected <" + this.targetID + "> to be -comparable as- greater than <" + (n || t) + "> [ERROR:" + this.errorID + "]") } throw new Error("Expected <" + this.targetID + "> to be greater than <" + (n || t) + "> [ERROR:" + this.errorID + "]") } isLowerThan(t, n) { try { if (this.target < t) return this } catch (e) { throw new Error("Expected <" + this.targetID + "> to be -comparable as- lower than <" + (n || t) + "> [ERROR:" + this.errorID + "]") } throw new Error("Expected <" + this.targetID + "> to be lower than <" + (n || t) + "> [ERROR:" + this.errorID + "]") } isInstanceOf(t, n = !1) { try { if (this.target instanceof t) return this } catch (e) { throw new Error("Expected <" + this.targetID + "> to be -comparable as- instance of <" + (n || t) + "> [ERROR:" + this.errorID + "]") } throw new Error("Expected <" + this.targetID + "> to be an instance of <" + (n || t) + "> [ERROR:" + this.errorID + "]") } isDate() { try { if (this.target instanceof Date) return this } catch (t) { throw new Error("Expected <" + this.targetID + "> to be -comparable as- a date [ERROR:" + this.errorID + "]") } throw new Error("Expected <" + this.targetID + "> to be a date [ERROR:" + this.errorID + "]") } hasLengthGreaterThan(t, n) { try { if (this.target.length > t) return this } catch (e) { throw new Error("Expected <" + this.targetID + "> to have a length -comparable as- greater than <" + (n || t) + "> [ERROR:" + this.errorID + "]") } throw new Error("Expected <" + this.targetID + "> to have a length greater than <" + (n || t) + "> [ERROR:" + this.errorID + "]") } hasLengthLowerThan(t, n) { try { if (this.target.length < t) return this } catch (e) { throw new Error("Expected <" + this.targetID + "> to have a length -comparable as- lower than <" + (n || t) + "> [ERROR:" + this.errorID + "]") } throw new Error("Expected <" + this.targetID + "> to have a length lower than <" + (n || t) + "> [ERROR:" + this.errorID + "]") } can(t, n = "?") { try { if ("function" == typeof t && !0 === t(this.target, this)) return this } catch (t) { throw new Error("Expected <" + this.targetID + "> to -be called and to- be able to <" + n + "> [ERROR:" + this.errorID + "]") } throw new Error("Expected <" + this.targetID + "> to be able to <" + n + "> [ERROR:" + this.errorID + "]") } cannot(t, n = "?") { try { if ("function" == typeof t && !1 === t(this.target, this)) return this } catch (t) { throw new Error("Expected <" + this.targetID + "> to -be called and to- not be able to <" + n + "> [ERROR:" + this.errorID + "]") } throw new Error("Expected <" + this.targetID + "> to not be able to <" + n + "> [ERROR:" + this.errorID + "]") } throwsOn(t, n = "?") { if ("function" == typeof t) { try { t(this.target, this) } catch (t) { return this } throw new Error("Expected <" + this.targetID + "> to throw errors on <" + n + "> [ERROR:" + this.errorID + "]") } throw new Error("Expected <" + this.targetID + "> to -be called and to- throw errors on <" + n + "> [ERROR:" + this.errorID + "]") } doesNotThrowOn(t, n = "?") { try { if ("function" == typeof t) return t(this.target, this), this } catch (t) { throw new Error("Expected <" + this.targetID + "> to not throw errors on <" + n + "> [ERROR:" + this.errorID + "]") } throw new Error("Expected <" + this.targetID + "> to -be called and to- not throw errors on <" + n + "> [ERROR:" + this.errorID + "]") } } return t.default = t, t }() }, 534: function (t, n, e) { t.exports = function (t) { "use strict"; t = "default" in t ? t.default : t; var n = function (t) { this.schema = t }; function e(t) { return null != t && ("string" == typeof t || "number" == typeof t || t instanceof Date || Array.isArray(t) && t.every(e)) } n.prototype.getForeignKeys = function () { var t = this, n = {}; return Object.keys(this.schema).forEach((function (e) { var r = t.schema[e].split(","); n[e] = r.filter((function (t) { return -1 !== t.indexOf("->") })).map((function (t) { var n = t.split("->").map((function (t) { return t.trim() })), e = n[0], r = n[1]; return { index: e, targetTable: r.split(".")[0], targetIndex: r.split(".")[1] } })) })), n }, n.prototype.getCleanedSchema = function () { var t = this, n = {}; return Object.keys(this.schema).forEach((function (e) { var r = t.schema[e].split(","); n[e] = r.map((function (t) { return t.split("->")[0].trim() })).join(",") })), n }; var r = function (r) { var i = t.Promise; r.Table.prototype.with = function (t) { return this.toCollection().with(t) }, r.Collection.prototype.with = function (t) { var n = this, o = this._ctx.table.name, a = r._allTables, u = []; return Object.keys(t).forEach((function (e) { var r = t[e], i = n._ctx.table.schema.idxByName[r]; if (i && i.hasOwnProperty("foreignKey")) { var s = i; u.push({ column: e, index: s.foreignKey.targetIndex, tableName: s.foreignKey.targetTable, targetIndex: s.foreignKey.index, oneToOne: !0 }) } else { var c = r; if (!a.hasOwnProperty(c)) throw new Error("Relationship table " + c + " doesn't exist."); if (!a[c].schema.hasOwnProperty("foreignKeys")) throw new Error("Relationship table " + c + " doesn't have foreign keys set."); var f = a[c].schema.foreignKeys.filter((function (t) { return t.targetTable === o })); f.length > 0 && u.push({ column: e, index: f[0].index, tableName: c, targetIndex: f[0].targetIndex }) } })), this.toArray().then((function (t) { var n = u.map((function (n) { var r = n.tableName, i = t.map((function (t) { return t[n.targetIndex] })).filter(e); return a[r].where(n.index).anyOf(i) })).map((function (t) { return t.toArray() })); return i.all(n).then((function (n) { u.forEach((function (e, r) { var i = e.tableName, a = n[r], u = e.targetIndex, s = e.index, c = e.column, f = {}; a.forEach((function (t) { var n = t[s]; e.oneToOne ? f[n] = t : (f[n] = f[n] || []).push(t) })), t.forEach((function (t) { var n = t[u], e = f[n] || []; if (null != n && !e) throw new Error("Could not lookup foreign key where " + i + "." + s + " == " + o + "." + c + ". The content of the failing key was: " + JSON.stringify(n) + "."); Object.defineProperty(t, c, { value: e, enumerable: !1, configurable: !0, writable: !0 }) })) })) })).then((function () { return t })) })) }, r.Version.prototype._parseStoresSpec = t.override(r.Version.prototype._parseStoresSpec, (function (t) { return function (e, r) { var i = new n(e), o = i.getForeignKeys(), a = t.call(this, i.getCleanedSchema(), r); return Object.keys(r).forEach((function (t) { o.hasOwnProperty(t) && (r[t].foreignKeys = o[t], o[t].forEach((function (n) { r[t].idxByName[n.index].foreignKey = n }))) })), a } })) }; return r.default = r, r }(e(128)) }, 128: (t, n, e) => { "use strict"; e.r(n), e.d(n, { default: () => Mn }); var r = Object.keys, i = Array.isArray, o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : e.g; function a(t, n) { return "object" != typeof n || r(n).forEach((function (e) { t[e] = n[e] })), t } var u = Object.getPrototypeOf, s = {}.hasOwnProperty; function c(t, n) { return s.call(t, n) } function f(t, n) { "function" == typeof n && (n = n(u(t))), r(n).forEach((function (e) { l(t, e, n[e]) })) } var h = Object.defineProperty; function l(t, n, e, r) { h(t, n, a(e && c(e, "get") && "function" == typeof e.get ? { get: e.get, set: e.set, configurable: !0 } : { value: e, configurable: !0, writable: !0 }, r)) } function d(t) { return { from: function (n) { return t.prototype = Object.create(n.prototype), l(t.prototype, "constructor", t), { extend: f.bind(null, t.prototype) } } } } var p = Object.getOwnPropertyDescriptor; function v(t, n) { var e; return p(t, n) || (e = u(t)) && v(e, n) } var g = [].slice; function y(t, n, e) { return g.call(t, n, e) } function m(t, n) { return n(t) } function b(t) { if (!t) throw new Error("Assertion Failed") } function w(t) { o.setImmediate ? setImmediate(t) : setTimeout(t, 0) } function _(t, n) { return t.reduce((function (t, e, r) { var i = n(e, r); return i && (t[i[0]] = i[1]), t }), {}) } function x(t, n, e) { try { t.apply(null, e) } catch (t) { n && n(t) } } function E(t, n) { if (c(t, n)) return t[n]; if (!n) return t; if ("string" != typeof n) { for (var e = [], r = 0, i = n.length; r < i; ++r) { var o = E(t, n[r]); e.push(o) } return e } var a = n.indexOf("."); if (-1 !== a) { var u = t[n.substr(0, a)]; return void 0 === u ? void 0 : E(u, n.substr(a + 1)) } } function k(t, n, e) { if (t && void 0 !== n && (!("isFrozen" in Object) || !Object.isFrozen(t))) if ("string" != typeof n && "length" in n) { b("string" != typeof e && "length" in e); for (var r = 0, i = n.length; r < i; ++r)k(t, n[r], e[r]) } else { var o = n.indexOf("."); if (-1 !== o) { var a = n.substr(0, o), u = n.substr(o + 1); if ("" === u) void 0 === e ? delete t[a] : t[a] = e; else { var s = t[a]; s || (s = t[a] = {}), k(s, u, e) } } else void 0 === e ? delete t[n] : t[n] = e } } function D(t) { var n = {}; for (var e in t) c(t, e) && (n[e] = t[e]); return n } var I = [].concat; function O(t) { return I.apply([], t) } var R = "Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set".split(",").concat(O([8, 16, 32, 64].map((function (t) { return ["Int", "Uint", "Float"].map((function (n) { return n + t + "Array" })) })))).filter((function (t) { return o[t] })).map((function (t) { return o[t] })); function j(t) { if (!t || "object" != typeof t) return t; var n; if (i(t)) { n = []; for (var e = 0, r = t.length; e < r; ++e)n.push(j(t[e])) } else if (R.indexOf(t.constructor) >= 0) n = t; else for (var o in n = t.constructor ? Object.create(t.constructor.prototype) : {}, t) c(t, o) && (n[o] = j(t[o])); return n } function P(t, n, e, i) { return e = e || {}, i = i || "", r(t).forEach((function (r) { if (c(n, r)) { var o = t[r], a = n[r]; "object" == typeof o && "object" == typeof a && o && a && "" + o.constructor == "" + a.constructor ? P(o, a, e, i + r + ".") : o !== a && (e[i + r] = n[r]) } else e[i + r] = void 0 })), r(n).forEach((function (r) { c(t, r) || (e[i + r] = n[r]) })), e } var S = "undefined" != typeof Symbol && Symbol.iterator, A = S ? function (t) { var n; return null != t && (n = t[S]) && n.apply(t) } : function () { return null }, T = {}; function C(t) { var n, e, r, o; if (1 === arguments.length) { if (i(t)) return t.slice(); if (this === T && "string" == typeof t) return [t]; if (o = A(t)) { for (e = []; !(r = o.next()).done;)e.push(r.value); return e } if (null == t) return [t]; if ("number" == typeof (n = t.length)) { for (e = new Array(n); n--;)e[n] = t[n]; return e } return [t] } for (n = arguments.length, e = new Array(n); n--;)e[n] = arguments[n]; return e } var K = "undefined" != typeof location && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href); function B(t, n) { K = t, F = n } var F = function () { return !0 }, N = !new Error("").stack; function M() { if (N) try { throw M.arguments, new Error } catch (t) { return t } return new Error } function q(t, n) { var e = t.stack; return e ? (n = n || 0, 0 === e.indexOf(t.name) && (n += (t.name + t.message).split("\n").length), e.split("\n").slice(n).filter(F).map((function (t) { return "\n" + t })).join("")) : "" } var U = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], L = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(U), V = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed" }; function z(t, n) { this._e = M(), this.name = t, this.message = n } function W(t, n, e, r) { this._e = M(), this.failures = n, this.failedKeys = r, this.successCount = e } function $(t, n) { this._e = M(), this.name = "BulkError", this.failures = n, this.message = function (t, n) { return t + ". Errors: " + n.map((function (t) { return t.toString() })).filter((function (t, n, e) { return e.indexOf(t) === n })).join("\n") }(t, n) } d(z).from(Error).extend({ stack: { get: function () { return this._stack || (this._stack = this.name + ": " + this.message + q(this._e, 2)) } }, toString: function () { return this.name + ": " + this.message } }), d(W).from(z), d($).from(z); var G = L.reduce((function (t, n) { return t[n] = n + "Error", t }), {}), Q = z, H = L.reduce((function (t, n) { var e = n + "Error"; function r(t, r) { this._e = M(), this.name = e, t ? "string" == typeof t ? (this.message = t, this.inner = r || null) : "object" == typeof t && (this.message = t.name + " " + t.message, this.inner = t) : (this.message = V[n] || e, this.inner = null) } return d(r).from(Q), t[n] = r, t }), {}); H.Syntax = SyntaxError, H.Type = TypeError, H.Range = RangeError; var J = U.reduce((function (t, n) { return t[n + "Error"] = H[n], t }), {}), Y = L.reduce((function (t, n) { return -1 === ["Syntax", "Type", "Range"].indexOf(n) && (t[n + "Error"] = H[n]), t }), {}); function X() { } function Z(t) { return t } function tt(t, n) { return null == t || t === Z ? n : function (e) { return n(t(e)) } } function nt(t, n) { return function () { t.apply(this, arguments), n.apply(this, arguments) } } function et(t, n) { return t === X ? n : function () { var e = t.apply(this, arguments); void 0 !== e && (arguments[0] = e); var r = this.onsuccess, i = this.onerror; this.onsuccess = null, this.onerror = null; var o = n.apply(this, arguments); return r && (this.onsuccess = this.onsuccess ? nt(r, this.onsuccess) : r), i && (this.onerror = this.onerror ? nt(i, this.onerror) : i), void 0 !== o ? o : e } } function rt(t, n) { return t === X ? n : function () { t.apply(this, arguments); var e = this.onsuccess, r = this.onerror; this.onsuccess = this.onerror = null, n.apply(this, arguments), e && (this.onsuccess = this.onsuccess ? nt(e, this.onsuccess) : e), r && (this.onerror = this.onerror ? nt(r, this.onerror) : r) } } function it(t, n) { return t === X ? n : function (e) { var r = t.apply(this, arguments); a(e, r); var i = this.onsuccess, o = this.onerror; this.onsuccess = null, this.onerror = null; var u = n.apply(this, arguments); return i && (this.onsuccess = this.onsuccess ? nt(i, this.onsuccess) : i), o && (this.onerror = this.onerror ? nt(o, this.onerror) : o), void 0 === r ? void 0 === u ? void 0 : u : a(r, u) } } function ot(t, n) { return t === X ? n : function () { return !1 !== n.apply(this, arguments) && t.apply(this, arguments) } } function at(t, n) { return t === X ? n : function () { var e = t.apply(this, arguments); if (e && "function" == typeof e.then) { for (var r = this, i = arguments.length, o = new Array(i); i--;)o[i] = arguments[i]; return e.then((function () { return n.apply(r, o) })) } return n.apply(this, arguments) } } Y.ModifyError = W, Y.DexieError = z, Y.BulkError = $; var ut = {}, st = function () { try { return new Function("let F=async ()=>{},p=F();return [p,Object.getPrototypeOf(p),Promise.resolve(),F.constructor];")() } catch (n) { var t = o.Promise; return t ? [t.resolve(), t.prototype, t.resolve()] : [] } }(), ct = st[0], ft = st[1], ht = st[2], lt = ft && ft.then, dt = ct && ct.constructor, pt = st[3], vt = !!ht, gt = !1, yt = ht ? function () { ht.then(qt) } : o.setImmediate ? setImmediate.bind(null, qt) : o.MutationObserver ? function () { var t = document.createElement("div"); new MutationObserver((function () { qt(), t = null })).observe(t, { attributes: !0 }), t.setAttribute("i", "1") } : function () { setTimeout(qt, 0) }, mt = function (t, n) { Ot.push([t, n]), wt && (yt(), wt = !1) }, bt = !0, wt = !0, _t = [], xt = [], Et = null, kt = Z, Dt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: hn, pgp: !1, env: {}, finalize: function () { this.unhandleds.forEach((function (t) { try { hn(t[0], t[1]) } catch (t) { } })) } }, It = Dt, Ot = [], Rt = 0, jt = []; function Pt(t) { if ("object" != typeof this) throw new TypeError("Promises must be constructed via new"); this._listeners = [], this.onuncatched = X, this._lib = !1; var n = this._PSD = It; if (K && (this._stackHolder = M(), this._prev = null, this._numPrev = 0), "function" != typeof t) { if (t !== ut) throw new TypeError("Not a function"); return this._state = arguments[1], this._value = arguments[2], void (!1 === this._state && Ct(this, this._value)) } this._state = null, this._value = null, ++n.ref, Tt(this, t) } var St = { get: function () { var t = It, n = Jt; function e(e, r) { var i = this, o = !t.global && (t !== It || n !== Jt); o && tn(); var a = new Pt((function (n, a) { Bt(i, new At(sn(e, t, o), sn(r, t, o), n, a, t)) })); return K && Mt(a, this), a } return e.prototype = ut, e }, set: function (t) { l(this, "then", t && t.prototype === ut ? St : { get: function () { return t }, set: St.set }) } }; function At(t, n, e, r, i) { this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof n ? n : null, this.resolve = e, this.reject = r, this.psd = i } function Tt(t, n) { try { n((function (n) { if (null === t._state) { if (n === t) throw new TypeError("A promise cannot be resolved with itself."); var e = t._lib && Ut(); n && "function" == typeof n.then ? Tt(t, (function (t, e) { n instanceof Pt ? n._then(t, e) : n.then(t, e) })) : (t._state = !0, t._value = n, Kt(t)), e && Lt() } }), Ct.bind(null, t)) } catch (n) { Ct(t, n) } } function Ct(t, n) { if (xt.push(n), null === t._state) { var e = t._lib && Ut(); n = kt(n), t._state = !1, t._value = n, K && null !== n && "object" == typeof n && !n._promise && x((function () { var e = v(n, "stack"); n._promise = t, l(n, "stack", { get: function () { return gt ? e && (e.get ? e.get.apply(n) : e.value) : t.stack } }) })), function (t) { _t.some((function (n) { return n._value === t._value })) || _t.push(t) }(t), Kt(t), e && Lt() } } function Kt(t) { var n = t._listeners; t._listeners = []; for (var e = 0, r = n.length; e < r; ++e)Bt(t, n[e]); var i = t._PSD; --i.ref || i.finalize(), 0 === Rt && (++Rt, mt((function () { 0 == --Rt && Vt() }), [])) } function Bt(t, n) { if (null !== t._state) { var e = t._state ? n.onFulfilled : n.onRejected; if (null === e) return (t._state ? n.resolve : n.reject)(t._value); ++n.psd.ref, ++Rt, mt(Ft, [e, t, n]) } else t._listeners.push(n) } function Ft(t, n, e) { try { Et = n; var r, i = n._value; n._state ? r = t(i) : (xt.length && (xt = []), r = t(i), -1 === xt.indexOf(i) && function (t) { for (var n = _t.length; n;)if (_t[--n]._value === t._value) return void _t.splice(n, 1) }(n)), e.resolve(r) } catch (t) { e.reject(t) } finally { Et = null, 0 == --Rt && Vt(), --e.psd.ref || e.psd.finalize() } } function Nt(t, n, e) { if (n.length === e) return n; var r = ""; if (!1 === t._state) { var i, o, a = t._value; null != a ? (i = a.name || "Error", o = a.message || a, r = q(a, 0)) : (i = a, o = ""), n.push(i + (o ? ": " + o : "") + r) } return K && ((r = q(t._stackHolder, 2)) && -1 === n.indexOf(r) && n.push(r), t._prev && Nt(t._prev, n, e)), n } function Mt(t, n) { var e = n ? n._numPrev + 1 : 0; e < 100 && (t._prev = n, t._numPrev = e) } function qt() { Ut() && Lt() } function Ut() { var t = bt; return bt = !1, wt = !1, t } function Lt() { var t, n, e; do { for (; Ot.length > 0;)for (t = Ot, Ot = [], e = t.length, n = 0; n < e; ++n) { var r = t[n]; r[0].apply(null, r[1]) } } while (Ot.length > 0); bt = !0, wt = !0 } function Vt() { var t = _t; _t = [], t.forEach((function (t) { t._PSD.onunhandled.call(null, t._value, t) })); for (var n = jt.slice(0), e = n.length; e;)n[--e]() } function zt(t) { return new Pt(ut, !1, t) } function Wt(t, n) { var e = It; return function () { var r = Ut(), i = It; try { return on(e, !0), t.apply(this, arguments) } catch (t) { n && n(t) } finally { on(i, !1), r && Lt() } } } f(Pt.prototype, { then: St, _then: function (t, n) { Bt(this, new At(null, null, t, n, It)) }, catch: function (t) { if (1 === arguments.length) return this.then(null, t); var n = arguments[0], e = arguments[1]; return "function" == typeof n ? this.then(null, (function (t) { return t instanceof n ? e(t) : zt(t) })) : this.then(null, (function (t) { return t && t.name === n ? e(t) : zt(t) })) }, finally: function (t) { return this.then((function (n) { return t(), n }), (function (n) { return t(), zt(n) })) }, stack: { get: function () { if (this._stack) return this._stack; try { gt = !0; var t = Nt(this, [], 20).join("\nFrom previous: "); return null !== this._state && (this._stack = t), t } finally { gt = !1 } } }, timeout: function (t, n) { var e = this; return t < 1 / 0 ? new Pt((function (r, i) { var o = setTimeout((function () { return i(new H.Timeout(n)) }), t); e.then(r, i).finally(clearTimeout.bind(null, o)) })) : this } }), "undefined" != typeof Symbol && Symbol.toStringTag && l(Pt.prototype, Symbol.toStringTag, "Promise"), Dt.env = an(), f(Pt, { all: function () { var t = C.apply(null, arguments).map(nn); return new Pt((function (n, e) { 0 === t.length && n([]); var r = t.length; t.forEach((function (i, o) { return Pt.resolve(i).then((function (e) { t[o] = e, --r || n(t) }), e) })) })) }, resolve: function (t) { if (t instanceof Pt) return t; if (t && "function" == typeof t.then) return new Pt((function (n, e) { t.then(n, e) })); var n = new Pt(ut, !0, t); return Mt(n, Et), n }, reject: zt, race: function () { var t = C.apply(null, arguments).map(nn); return new Pt((function (n, e) { t.map((function (t) { return Pt.resolve(t).then(n, e) })) })) }, PSD: { get: function () { return It }, set: function (t) { return It = t } }, newPSD: Xt, usePSD: un, scheduler: { get: function () { return mt }, set: function (t) { mt = t } }, rejectionMapper: { get: function () { return kt }, set: function (t) { kt = t } }, follow: function (t, n) { return new Pt((function (e, r) { return Xt((function (n, e) { var r = It; r.unhandleds = [], r.onunhandled = e, r.finalize = nt((function () { var t = this; jt.push((function r() { 0 === t.unhandleds.length ? n() : e(t.unhandleds[0]), jt.splice(jt.indexOf(r), 1) })), ++Rt, mt((function () { 0 == --Rt && Vt() }), []) }), r.finalize), t() }), n, e, r) })) } }); var $t = { awaits: 0, echoes: 0, id: 0 }, Gt = 0, Qt = [], Ht = 0, Jt = 0, Yt = 0; function Xt(t, n, e, r) { var i = It, o = Object.create(i); o.parent = i, o.ref = 0, o.global = !1, o.id = ++Yt; var u = Dt.env; o.env = vt ? { Promise: Pt, PromiseProp: { value: Pt, configurable: !0, writable: !0 }, all: Pt.all, race: Pt.race, resolve: Pt.resolve, reject: Pt.reject, nthen: cn(u.nthen, o), gthen: cn(u.gthen, o) } : {}, n && a(o, n), ++i.ref, o.finalize = function () { --this.parent.ref || this.parent.finalize() }; var s = un(o, t, e, r); return 0 === o.ref && o.finalize(), s } function Zt() { return $t.id || ($t.id = ++Gt), ++$t.awaits, $t.echoes += 7, $t.id } function tn(t) { !$t.awaits || t && t !== $t.id || (0 == --$t.awaits && ($t.id = 0), $t.echoes = 7 * $t.awaits) } function nn(t) { return $t.echoes && t && t.constructor === dt ? (Zt(), t.then((function (t) { return tn(), t }), (function (t) { return tn(), ln(t) }))) : t } function en(t) { ++Jt, $t.echoes && 0 != --$t.echoes || ($t.echoes = $t.id = 0), Qt.push(It), on(t, !0) } function rn() { var t = Qt[Qt.length - 1]; Qt.pop(), on(t, !1) } function on(t, n) { var e, r = It; if ((n ? !$t.echoes || Ht++ && t === It : !Ht || --Ht && t === It) || (e = n ? en.bind(null, t) : rn, lt.call(ct, e)), t !== It && (It = t, r === Dt && (Dt.env = an()), vt)) { var i = Dt.env.Promise, a = t.env; ft.then = a.nthen, i.prototype.then = a.gthen, (r.global || t.global) && (Object.defineProperty(o, "Promise", a.PromiseProp), i.all = a.all, i.race = a.race, i.resolve = a.resolve, i.reject = a.reject) } } function an() { var t = o.Promise; return vt ? { Promise: t, PromiseProp: Object.getOwnPropertyDescriptor(o, "Promise"), all: t.all, race: t.race, resolve: t.resolve, reject: t.reject, nthen: ft.then, gthen: t.prototype.then } : {} } function un(t, n, e, r, i) { var o = It; try { return on(t, !0), n(e, r, i) } finally { on(o, !1) } } function sn(t, n, e) { return "function" != typeof t ? t : function () { var r = It; e && Zt(), on(n, !0); try { return t.apply(this, arguments) } finally { on(r, !1) } } } function cn(t, n) { return function (e, r) { return t.call(this, sn(e, n, !1), sn(r, n, !1)) } } var fn = "unhandledrejection"; function hn(t, n) { var e; try { e = n.onuncatched(t) } catch (t) { } if (!1 !== e) try { var r, i = { promise: n, reason: t }; if (o.document && document.createEvent ? ((r = document.createEvent("Event")).initEvent(fn, !0, !0), a(r, i)) : o.CustomEvent && a(r = new CustomEvent(fn, { detail: i }), i), r && o.dispatchEvent && (dispatchEvent(r), !o.PromiseRejectionEvent && o.onunhandledrejection)) try { o.onunhandledrejection(r) } catch (t) { } r.defaultPrevented || console.warn("Unhandled rejection: " + (t.stack || t)) } catch (t) { } } var ln = Pt.reject; function dn(t) { var n = {}, e = function (e, r) { if (r) { for (var i = arguments.length, o = new Array(i - 1); --i;)o[i - 1] = arguments[i]; return n[e].subscribe.apply(null, o), t } if ("string" == typeof e) return n[e] }; e.addEventType = u; for (var o = 1, a = arguments.length; o < a; ++o)u(arguments[o]); return e; function u(t, r, i) { if ("object" == typeof t) return s(t); r || (r = ot), i || (i = X); var o = { subscribers: [], fire: i, subscribe: function (t) { -1 === o.subscribers.indexOf(t) && (o.subscribers.push(t), o.fire = r(o.fire, t)) }, unsubscribe: function (t) { o.subscribers = o.subscribers.filter((function (n) { return n !== t })), o.fire = o.subscribers.reduce(r, i) } }; return n[t] = e[t] = o, o } function s(t) { r(t).forEach((function (n) { var e = t[n]; if (i(e)) u(n, t[n][0], t[n][1]); else { if ("asap" !== e) throw new H.InvalidArgument("Invalid event config"); var r = u(n, Z, (function () { for (var t = arguments.length, n = new Array(t); t--;)n[t] = arguments[t]; r.subscribers.forEach((function (t) { w((function () { t.apply(null, n) })) })) })) } })) } } var pn, vn = "{version}", gn = String.fromCharCode(65535), yn = function () { try { return IDBKeyRange.only([[]]), [[]] } catch (t) { return gn } }(), mn = -1 / 0, bn = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", wn = "String expected.", _n = [], xn = "undefined" != typeof navigator && /(MSIE|Trident|Edge)/.test(navigator.userAgent), En = xn, kn = xn, Dn = function (t) { return !/(dexie\.js|dexie\.min\.js)/.test(t) }; function In(t, n) { var e, u, s, h, d, p = In.dependencies, v = a({ addons: In.addons, autoOpen: !0, indexedDB: p.indexedDB, IDBKeyRange: p.IDBKeyRange }, n), g = v.addons, w = v.autoOpen, I = v.indexedDB, R = v.IDBKeyRange, S = this._dbSchema = {}, A = [], B = [], F = {}, N = null, U = null, L = !1, V = null, z = !1, G = "readonly", Q = "readwrite", J = this, Y = new Pt((function (t) { e = t })), nt = new Pt((function (t, n) { u = n })), ot = !0, ut = !!Nn(I); function st(t) { this._cfg = { version: t, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null }, this.stores({}) } function ct(t, n, e, r) { var i = t.db.createObjectStore(n, e.keyPath ? { keyPath: e.keyPath, autoIncrement: e.auto } : { autoIncrement: e.auto }); return r.forEach((function (t) { ft(i, t) })), i } function ft(t, n) { t.createIndex(n.name, n.keyPath, { unique: n.unique, multiEntry: n.multi }) } function ht(t, n, e) { if (z || It.letThrough) { var r = J._createTransaction(t, n, S); try { r.create() } catch (t) { return ln(t) } return r._promise(t, (function (t, n) { return Xt((function () { return It.trans = r, e(t, n, r) })) })).then((function (t) { return r._completion.then((function () { return t })) })) } if (!L) { if (!w) return ln(new H.DatabaseClosed); J.open().catch(X) } return Y.then((function () { return ht(t, n, e) })) } function lt(t, n, e) { var r = arguments.length; if (r < 2) throw new H.InvalidArgument("Too few arguments"); for (var i = new Array(r - 1); --r;)i[r - 1] = arguments[r]; e = i.pop(); var o = O(i); return [t, o, e] } function vt(t, n, e) { this.name = t, this.schema = n, this._tx = e, this.hook = F[t] ? F[t].hook : dn(null, { creating: [et, X], reading: [tt, Z], updating: [it, X], deleting: [rt, X] }) } function gt(t, n, e) { return (e ? An : Pn)((function (e) { t.push(e), n && n() })) } function yt(t, n, e, r, i) { return new Pt((function (o, a) { var u = e.length, s = u - 1; if (0 === u) return o(); if (r) { var c, f = An(a), h = jn(null); x((function () { for (var r = 0; r < u; ++r) { c = { onsuccess: null, onerror: null }; var a = e[r]; i.call(c, a[0], a[1], n); var l = t.delete(a[0]); l._hookCtx = c, l.onerror = f, l.onsuccess = r === s ? jn(o) : h } }), (function (t) { throw c.onerror && c.onerror(t), t })) } else for (var l = 0; l < u; ++l) { var d = t.delete(e[l]); d.onerror = Pn(a), l === s && (d.onsuccess = Wt((function () { return o() }))) } })) } function mt(t, n, e, r) { var i = this; this.db = J, this.mode = t, this.storeNames = n, this.idbtrans = null, this.on = dn(this, "complete", "error", "abort"), this.parent = r || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Pt((function (t, n) { i._resolve = t, i._reject = n })), this._completion.then((function () { i.active = !1, i.on.complete.fire() }), (function (t) { var n = i.active; return i.active = !1, i.on.error.fire(t), i.parent ? i.parent._reject(t) : n && i.idbtrans && i.idbtrans.abort(), ln(t) })) } function bt(t, n, e) { this._ctx = { table: t, index: ":id" === n ? null : n, or: e } } function wt(t, n) { var e = null, r = null; if (n) try { e = n() } catch (t) { r = t } var i = t._ctx, o = i.table; this._ctx = { table: o, index: i.index, isPrimKey: !i.index || o.schema.primKey.keyPath && i.index === o.schema.primKey.name, range: e, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: r, or: i.or, valueMapper: o.hook.reading.fire } } function _t(t, n) { return !(t.filter || t.algorithm || t.or) && (n ? t.justLimit : !t.replayFilter) } function xt(t, n) { return t._cfg.version - n._cfg.version } function Et(t, n, e) { n.forEach((function (n) { var r = e[n]; t.forEach((function (t) { n in t || (t === mt.prototype || t instanceof mt ? l(t, n, { get: function () { return this.table(n) } }) : t[n] = new vt(n, r)) })) })) } function kt(t, n, e, r, i, o) { var a = Wt(o ? function (t, n, r) { return e(o(t), n, r) } : e, i); t.onerror || (t.onerror = Pn(i)), t.onsuccess = function (t, n) { return function () { try { t.apply(this, arguments) } catch (t) { n(t) } } }(n ? function () { var e = t.result; if (e) { var o = function () { e.continue() }; n(e, (function (t) { o = t }), r, i) && a(e.value, e, (function (t) { o = t })), o() } else r() } : function () { var n = t.result; if (n) { var e = function () { n.continue() }; a(n.value, n, (function (t) { e = t })), e() } else r() }, i) } function Dt(t, n) { return I.cmp(t, n) } function Ot(t, n) { return Dt(t, n) > 0 ? t : n } function Rt(t, n) { return I.cmp(t, n) } function jt(t, n) { return I.cmp(n, t) } function St(t, n) { return t < n ? -1 : t === n ? 0 : 1 } function At(t, n) { return t > n ? -1 : t === n ? 0 : 1 } function Tt(t, n) { return t ? n ? function () { return t.apply(this, arguments) && n.apply(this, arguments) } : t : n } function Ct(t, n) { for (var e = n.db.objectStoreNames, r = 0; r < e.length; ++r) { var i = e[r], a = n.objectStore(i); s = "getAll" in a; for (var u = 0; u < a.indexNames.length; ++u) { var c = a.indexNames[u], f = a.index(c).keyPath, h = "string" == typeof f ? f : "[" + y(f).join("+") + "]"; if (t[i]) { var l = t[i].idxByName[h]; l && (l.name = c) } } } /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && o.WorkerGlobalScope && o instanceof o.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (s = !1) } function Kt(t) { J.on("blocked").fire(t), _n.filter((function (t) { return t.name === J.name && t !== J && !t._vcFired })).map((function (n) { return n.on("versionchange").fire(t) })) } this.version = function (t) { if (N || L) throw new H.Schema("Cannot add version when database is open"); this.verno = Math.max(this.verno, t); var n = A.filter((function (n) { return n._cfg.version === t }))[0]; return n || (n = new st(t), A.push(n), A.sort(xt), ot = !1, n) }, a(st.prototype, { stores: function (t) { this._cfg.storesSource = this._cfg.storesSource ? a(this._cfg.storesSource, t) : t; var n = {}; A.forEach((function (t) { a(n, t._cfg.storesSource) })); var e = this._cfg.dbschema = {}; return this._parseStoresSpec(n, e), S = J._dbSchema = e, [F, J, mt.prototype].forEach((function (t) { for (var n in t) t[n] instanceof vt && delete t[n] })), Et([F, J, mt.prototype, this._cfg.tables], r(e), e), B = r(e), this }, upgrade: function (t) { return this._cfg.contentUpgrade = t, this }, _parseStoresSpec: function (t, n) { r(t).forEach((function (e) { if (null !== t[e]) { var r = {}, o = function (t) { var n = []; return t.split(",").forEach((function (t) { var e = (t = t.trim()).replace(/([&*]|\+\+)/g, ""), r = /^\[/.test(e) ? e.match(/^\[(.*)\]$/)[1].split("+") : e; n.push(new Kn(e, r || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), i(r), /\./.test(t))) })), n }(t[e]), a = o.shift(); if (a.multi) throw new H.Schema("Primary key cannot be multi-valued"); a.keyPath && k(r, a.keyPath, a.auto ? 0 : a.keyPath), o.forEach((function (t) { if (t.auto) throw new H.Schema("Only primary key can be marked as autoIncrement (++)"); if (!t.keyPath) throw new H.Schema("Index must have a name and cannot be an empty string"); k(r, t.keyPath, t.compound ? t.keyPath.map((function () { return "" })) : "") })), n[e] = new Bn(e, a, o, r) } })) } }), this._allTables = F, this._createTransaction = function (t, n, e, r) { return new mt(t, n, e, r) }, this._whenReady = function (t) { return z || It.letThrough ? t() : new Pt((function (t, n) { if (!L) { if (!w) return void n(new H.DatabaseClosed); J.open().catch(X) } Y.then(t, n) })).then(t) }, this.verno = 0, this.open = function () { if (L || N) return Y.then((function () { return U ? ln(U) : J })); K && (nt._stackHolder = M()), L = !0, U = null, z = !1; var n = e, i = null; return Pt.race([nt, new Pt((function (n, e) { if (!I) throw new H.MissingAPI("indexedDB API not found. If using IE10+, make sure to run your code on a server URL (not locally). If using old Safari versions, make sure to include indexedDB polyfill."); var o = ot ? I.open(t) : I.open(t, Math.round(10 * J.verno)); if (!o) throw new H.MissingAPI("IndexedDB API not available"); o.onerror = Pn(e), o.onblocked = Wt(Kt), o.onupgradeneeded = Wt((function (n) { if (i = o.transaction, ot && !J._allowEmptyDB) { o.onerror = Tn, i.abort(), o.result.close(); var a = I.deleteDatabase(t); a.onsuccess = a.onerror = Wt((function () { e(new H.NoSuchDatabase("Database " + t + " doesnt exist")) })) } else i.onerror = Pn(e), function (t, n, e) { var i = J._createTransaction(Q, B, S); i.create(n), i._completion.catch(e); var o = i._reject.bind(i); Xt((function () { It.trans = i, 0 === t ? (r(S).forEach((function (t) { ct(n, t, S[t].primKey, S[t].indexes) })), Pt.follow((function () { return J.on.populate.fire(i) })).catch(o)) : function (t, n, e) { var i = [], o = A.filter((function (n) { return n._cfg.version === t }))[0]; if (!o) throw new H.Upgrade("Dexie specification of currently installed DB version is missing"); S = J._dbSchema = o._cfg.dbschema; var a = !1; return A.filter((function (n) { return n._cfg.version > t })).forEach((function (t) { i.push((function () { var r = S, i = t._cfg.dbschema; Ct(r, e), Ct(i, e), S = J._dbSchema = i; var o = function (t, n) { var e = { del: [], add: [], change: [] }; for (var r in t) n[r] || e.del.push(r); for (r in n) { var i = t[r], o = n[r]; if (i) { var a = { name: r, def: o, recreate: !1, del: [], add: [], change: [] }; if (i.primKey.src !== o.primKey.src) a.recreate = !0, e.change.push(a); else { var u = i.idxByName, s = o.idxByName; for (var c in u) s[c] || a.del.push(c); for (c in s) { var f = u[c], h = s[c]; f ? f.src !== h.src && a.change.push(h) : a.add.push(h) } (a.del.length > 0 || a.add.length > 0 || a.change.length > 0) && e.change.push(a) } } else e.add.push([r, o]) } return e }(r, i); if (o.add.forEach((function (t) { ct(e, t[0], t[1].primKey, t[1].indexes) })), o.change.forEach((function (t) { if (t.recreate) throw new H.Upgrade("Not yet support for changing primary key"); var n = e.objectStore(t.name); t.add.forEach((function (t) { ft(n, t) })), t.change.forEach((function (t) { n.deleteIndex(t.name), ft(n, t) })), t.del.forEach((function (t) { n.deleteIndex(t) })) })), t._cfg.contentUpgrade) return a = !0, Pt.follow((function () { t._cfg.contentUpgrade(n) })) })), i.push((function (n) { a && En || function (t, n) { for (var e = 0; e < n.db.objectStoreNames.length; ++e) { var r = n.db.objectStoreNames[e]; null == t[r] && n.db.deleteObjectStore(r) } }(t._cfg.dbschema, n) })) })), function t() { return i.length ? Pt.resolve(i.shift()(n.idbtrans)).then(t) : Pt.resolve() }().then((function () { !function (t, n) { r(t).forEach((function (e) { n.db.objectStoreNames.contains(e) || ct(n, e, t[e].primKey, t[e].indexes) })) }(S, e) })) }(t, i, n).catch(o) })) }((n.oldVersion > Math.pow(2, 62) ? 0 : n.oldVersion) / 10, i, e) }), e), o.onsuccess = Wt((function () { if (i = null, N = o.result, _n.push(J), ot) !function () { if (J.verno = N.version / 10, J._dbSchema = S = {}, 0 !== (B = y(N.objectStoreNames, 0)).length) { var t = N.transaction(Fn(B), "readonly"); B.forEach((function (n) { for (var e = t.objectStore(n), r = e.keyPath, i = r && "string" == typeof r && -1 !== r.indexOf("."), o = new Kn(r, r || "", !1, !1, !!e.autoIncrement, r && "string" != typeof r, i), a = [], u = 0; u < e.indexNames.length; ++u) { var s = e.index(e.indexNames[u]); i = (r = s.keyPath) && "string" == typeof r && -1 !== r.indexOf("."); var c = new Kn(s.name, r, !!s.unique, !!s.multiEntry, !1, r && "string" != typeof r, i); a.push(c) } S[n] = new Bn(n, o, a, {}) })), Et([F], r(S), S) } }(); else if (N.objectStoreNames.length > 0) try { Ct(S, N.transaction(Fn(N.objectStoreNames), G)) } catch (t) { } N.onversionchange = Wt((function (t) { J._vcFired = !0, J.on("versionchange").fire(t) })), ut || "__dbnames" === t || pn.dbnames.put({ name: t }).catch(X), n() }), e) }))]).then((function () { return V = [], Pt.resolve(In.vip(J.on.ready.fire)).then((function t() { if (V.length > 0) { var n = V.reduce(at, X); return V = [], Pt.resolve(In.vip(n)).then(t) } })) })).finally((function () { V = null })).then((function () { return L = !1, J })).catch((function (t) { try { i && i.abort() } catch (t) { } return L = !1, J.close(), ln(U = t) })).finally((function () { z = !0, n() })) }, this.close = function () { var t = _n.indexOf(J); if (t >= 0 && _n.splice(t, 1), N) { try { N.close() } catch (t) { } N = null } w = !1, U = new H.DatabaseClosed, L && u(U), Y = new Pt((function (t) { e = t })), nt = new Pt((function (t, n) { u = n })) }, this.delete = function () { var n = arguments.length > 0; return new Pt((function (e, r) { if (n) throw new H.InvalidArgument("Arguments not allowed in db.delete()"); function i() { J.close(); var n = I.deleteDatabase(t); n.onsuccess = Wt((function () { ut || pn.dbnames.delete(t).catch(X), e() })), n.onerror = Pn(r), n.onblocked = Kt } L ? Y.then(i) : i() })) }, this.backendDB = function () { return N }, this.isOpen = function () { return null !== N }, this.hasBeenClosed = function () { return U && U instanceof H.DatabaseClosed }, this.hasFailed = function () { return null !== U }, this.dynamicallyOpened = function () { return ot }, this.name = t, f(this, { tables: { get: function () { return r(F).map((function (t) { return F[t] })) } } }), this.on = dn(this, "populate", "blocked", "versionchange", { ready: [at, X] }), this.on.ready.subscribe = m(this.on.ready.subscribe, (function (t) { return function (n, e) { In.vip((function () { z ? (U || Pt.resolve().then(n), e && t(n)) : V ? (V.push(n), e && t(n)) : (t(n), e || t((function t() { J.on.ready.unsubscribe(n), J.on.ready.unsubscribe(t) }))) })) } })), this.transaction = function () { var t = lt.apply(this, arguments); return this._transaction.apply(this, t) }, this._transaction = function (t, n, e) { var r = It.trans; r && r.db === J && -1 === t.indexOf("!") || (r = null); var i = -1 !== t.indexOf("?"); t = t.replace("!", "").replace("?", ""); try { var o = n.map((function (t) { var n = t instanceof vt ? t.name : t; if ("string" != typeof n) throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed"); return n })); if ("r" == t || t == G) t = G; else { if ("rw" != t && t != Q) throw new H.InvalidArgument("Invalid transaction mode: " + t); t = Q } if (r) { if (r.mode === G && t === Q) { if (!i) throw new H.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY"); r = null } r && o.forEach((function (t) { if (r && -1 === r.storeNames.indexOf(t)) { if (!i) throw new H.SubTransaction("Table " + t + " not included in parent transaction."); r = null } })), i && r && !r.active && (r = null) } } catch (t) { return r ? r._promise(null, (function (n, e) { e(t) })) : ln(t) } return r ? r._promise(t, a, "lock") : It.trans ? un(It.transless, (function () { return J._whenReady(a) })) : J._whenReady(a); function a() { return Pt.resolve().then((function () { var n, i = It.transless || It, a = J._createTransaction(t, o, S, r), u = { trans: a, transless: i }; r ? a.idbtrans = r.idbtrans : a.create(), e.constructor === pt && Zt(); var s = Pt.follow((function () { if (n = e.call(a, a)) if (n.constructor === dt) { var t = tn.bind(null, null); n.then(t, t) } else "function" == typeof n.next && "function" == typeof n.throw && (n = Cn(n)) }), u); return (n && "function" == typeof n.then ? Pt.resolve(n).then((function (t) { return a.active ? t : ln(new H.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn")) })) : s.then((function () { return n }))).then((function (t) { return r && a._resolve(), a._completion.then((function () { return t })) })).catch((function (t) { return a._reject(t), ln(t) })) })) } }, this.table = function (t) { if (!c(F, t)) throw new H.InvalidTable("Table " + t + " does not exist"); return F[t] }, f(vt.prototype, { _trans: function (t, n, e) { var r = this._tx || It.trans; return r && r.db === J ? r === It.trans ? r._promise(t, n, e) : Xt((function () { return r._promise(t, n, e) }), { trans: r, transless: It.transless || It }) : ht(t, [this.name], n) }, _idbstore: function (t, n, e) { var r = this.name; return this._trans(t, (function (t, e, i) { if (-1 === i.storeNames.indexOf(r)) throw new H.NotFound("Table" + r + " not part of transaction"); return n(t, e, i.idbtrans.objectStore(r), i) }), e) }, get: function (t, n) { if (t && t.constructor === Object) return this.where(t).first(n); var e = this; return this._idbstore(G, (function (n, r, i) { var o = i.get(t); o.onerror = Pn(r), o.onsuccess = Wt((function () { n(e.hook.reading.fire(o.result)) }), r) })).then(n) }, where: function (t) { if ("string" == typeof t) return new bt(this, t); if (i(t)) return new bt(this, "[" + t.join("+") + "]"); var n = r(t); if (1 === n.length) return this.where(n[0]).equals(t[n[0]]); var e = this.schema.indexes.concat(this.schema.primKey).filter((function (t) { return t.compound && n.every((function (n) { return t.keyPath.indexOf(n) >= 0 })) && t.keyPath.every((function (t) { return n.indexOf(t) >= 0 })) }))[0]; if (e && yn !== gn) return this.where(e.name).equals(e.keyPath.map((function (n) { return t[n] }))); e || console.warn("The query " + JSON.stringify(t) + " on " + this.name + " would benefit of a compound index [" + n.join("+") + "]"); var o = this.schema.idxByName, a = n.reduce((function (n, e) { return [n[0] || o[e], n[0] || !o[e] ? Tt(n[1], (function (n) { return "" + E(n, e) == "" + t[e] })) : n[1]] }), [null, null]), u = a[0]; return u ? this.where(u.name).equals(t[u.keyPath]).filter(a[1]) : e ? this.filter(a[1]) : this.where(n).equals("") }, count: function (t) { return this.toCollection().count(t) }, offset: function (t) { return this.toCollection().offset(t) }, limit: function (t) { return this.toCollection().limit(t) }, reverse: function () { return this.toCollection().reverse() }, filter: function (t) { return this.toCollection().and(t) }, each: function (t) { return this.toCollection().each(t) }, toArray: function (t) { return this.toCollection().toArray(t) }, orderBy: function (t) { return new wt(new bt(this, i(t) ? "[" + t.join("+") + "]" : t)) }, toCollection: function () { return new wt(new bt(this)) }, mapToClass: function (t, n) { this.schema.mappedClass = t; var e = Object.create(t.prototype); n && Rn(e, n), this.schema.instanceTemplate = e; var r = function (n) { if (!n) return n; var e = Object.create(t.prototype); for (var r in n) if (c(n, r)) try { e[r] = n[r] } catch (t) { } return e }; return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = r, this.hook("reading", r), t }, defineClass: function (t) { return this.mapToClass(In.defineClass(t), t) }, bulkDelete: function (t) { return this.hook.deleting.fire === X ? this._idbstore(Q, (function (n, e, r, i) { n(yt(r, i, t, !1, X)) })) : this.where(":id").anyOf(t).delete().then((function () { })) }, bulkPut: function (t, n) { var e = this; return this._idbstore(Q, (function (r, i, o) { if (!o.keyPath && !e.schema.primKey.auto && !n) throw new H.InvalidArgument("bulkPut() with non-inbound keys requires keys array in second argument"); if (o.keyPath && n) throw new H.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys"); if (n && n.length !== t.length) throw new H.InvalidArgument("Arguments objects and keys must have the same length"); if (0 === t.length) return r(); var a, u, s = function (t) { 0 === c.length ? r(t) : i(new $(e.name + ".bulkPut(): " + c.length + " of " + f + " operations failed", c)) }, c = [], f = t.length, h = e; if (e.hook.creating.fire === X && e.hook.updating.fire === X) { u = gt(c); for (var l = 0, d = t.length; l < d; ++l)(a = n ? o.put(t[l], n[l]) : o.put(t[l])).onerror = u; a.onerror = gt(c, s), a.onsuccess = Sn(s) } else { var p = n || o.keyPath && t.map((function (t) { return E(t, o.keyPath) })), v = p && _(p, (function (n, e) { return null != n && [n, t[e]] })), g = p ? h.where(":id").anyOf(p.filter((function (t) { return null != t }))).modify((function () { this.value = v[this.primKey], v[this.primKey] = null })).catch(W, (function (t) { c = t.failures })).then((function () { for (var e = [], r = n && [], i = p.length - 1; i >= 0; --i) { var o = p[i]; (null == o || v[o]) && (e.push(t[i]), n && r.push(o), null != o && (v[o] = null)) } return e.reverse(), n && r.reverse(), h.bulkAdd(e, r) })).then((function (t) { var n = p[p.length - 1]; return null != n ? n : t })) : h.bulkAdd(t); g.then(s).catch($, (function (t) { c = c.concat(t.failures), s() })).catch(i) } }), "locked") }, bulkAdd: function (t, n) { var e = this, r = this.hook.creating.fire; return this._idbstore(Q, (function (i, o, a, u) { if (!a.keyPath && !e.schema.primKey.auto && !n) throw new H.InvalidArgument("bulkAdd() with non-inbound keys requires keys array in second argument"); if (a.keyPath && n) throw new H.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys"); if (n && n.length !== t.length) throw new H.InvalidArgument("Arguments objects and keys must have the same length"); if (0 === t.length) return i(); function s(t) { 0 === l.length ? i(t) : o(new $(e.name + ".bulkAdd(): " + l.length + " of " + d + " operations failed", l)) } var c, f, h, l = [], d = t.length; if (r !== X) { var p, v = a.keyPath; f = gt(l, null, !0), h = jn(null), x((function () { for (var e = 0, i = t.length; e < i; ++e) { p = { onerror: null, onsuccess: null }; var o = n && n[e], s = t[e], l = n ? o : v ? E(s, v) : void 0, d = r.call(p, l, s, u); null == l && null != d && (v ? k(s = j(s), v, d) : o = d), (c = null != o ? a.add(s, o) : a.add(s))._hookCtx = p, e < i - 1 && (c.onerror = f, p.onsuccess && (c.onsuccess = h)) } }), (function (t) { throw p.onerror && p.onerror(t), t })), c.onerror = gt(l, s, !0), c.onsuccess = jn(s) } else { f = gt(l); for (var g = 0, y = t.length; g < y; ++g)(c = n ? a.add(t[g], n[g]) : a.add(t[g])).onerror = f; c.onerror = gt(l, s), c.onsuccess = Sn(s) } })) }, add: function (t, n) { var e = this.hook.creating.fire; return this._idbstore(Q, (function (r, i, o, a) { var u = { onsuccess: null, onerror: null }; if (e !== X) { var s = null != n ? n : o.keyPath ? E(t, o.keyPath) : void 0, c = e.call(u, s, t, a); null == s && null != c && (o.keyPath ? k(t, o.keyPath, c) : n = c) } try { var f = null != n ? o.add(t, n) : o.add(t); f._hookCtx = u, f.onerror = An(i), f.onsuccess = jn((function (n) { var e = o.keyPath; e && k(t, e, n), r(n) })) } catch (t) { throw u.onerror && u.onerror(t), t } })) }, put: function (t, n) { var e = this, r = this.hook.creating.fire, i = this.hook.updating.fire; if (r !== X || i !== X) { var o = this.schema.primKey.keyPath, a = void 0 !== n ? n : o && E(t, o); return null == a ? this.add(t) : (t = j(t), this._trans(Q, (function () { return e.where(":id").equals(a).modify((function () { this.value = t })).then((function (r) { return 0 === r ? e.add(t, n) : a })) }), "locked")) } return this._idbstore(Q, (function (e, r, i) { var o = void 0 !== n ? i.put(t, n) : i.put(t); o.onerror = Pn(r), o.onsuccess = Wt((function (n) { var r = i.keyPath; r && k(t, r, n.target.result), e(o.result) })) })) }, delete: function (t) { return this.hook.deleting.subscribers.length ? this.where(":id").equals(t).delete() : this._idbstore(Q, (function (n, e, r) { var i = r.delete(t); i.onerror = Pn(e), i.onsuccess = Wt((function () { n(i.result) })) })) }, clear: function () { return this.hook.deleting.subscribers.length ? this.toCollection().delete() : this._idbstore(Q, (function (t, n, e) { var r = e.clear(); r.onerror = Pn(n), r.onsuccess = Wt((function () { t(r.result) })) })) }, update: function (t, n) { if ("object" != typeof n || i(n)) throw new H.InvalidArgument("Modifications must be an object."); if ("object" != typeof t || i(t)) return this.where(":id").equals(t).modify(n); r(n).forEach((function (e) { k(t, e, n[e]) })); var e = E(t, this.schema.primKey.keyPath); return void 0 === e ? ln(new H.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(n) } }), f(mt.prototype, { _lock: function () { return b(!It.global), ++this._reculock, 1 !== this._reculock || It.global || (It.lockOwnerFor = this), this }, _unlock: function () { if (b(!It.global), 0 == --this._reculock) for (It.global || (It.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked();) { var t = this._blockedFuncs.shift(); try { un(t[1], t[0]) } catch (t) { } } return this }, _locked: function () { return this._reculock && It.lockOwnerFor !== this }, create: function (t) { var n = this; if (!this.mode) return this; if (b(!this.idbtrans), !t && !N) switch (U && U.name) { case "DatabaseClosedError": throw new H.DatabaseClosed(U); case "MissingAPIError": throw new H.MissingAPI(U.message, U); default: throw new H.OpenFailed(U) }if (!this.active) throw new H.TransactionInactive; return b(null === this._completion._state), (t = this.idbtrans = t || N.transaction(Fn(this.storeNames), this.mode)).onerror = Wt((function (e) { Tn(e), n._reject(t.error) })), t.onabort = Wt((function (e) { Tn(e), n.active && n._reject(new H.Abort(t.error)), n.active = !1, n.on("abort").fire(e) })), t.oncomplete = Wt((function () { n.active = !1, n._resolve() })), this }, _promise: function (t, n, e) { var r = this; if (t === Q && this.mode !== Q) return ln(new H.ReadOnly("Transaction is readonly")); if (!this.active) return ln(new H.TransactionInactive); if (this._locked()) return new Pt((function (i, o) { r._blockedFuncs.push([function () { r._promise(t, n, e).then(i, o) }, It]) })); if (e) return Xt((function () { var t = new Pt((function (t, e) { r._lock(); var i = n(t, e, r); i && i.then && i.then(t, e) })); return t.finally((function () { return r._unlock() })), t._lib = !0, t })); var i = new Pt((function (t, e) { var i = n(t, e, r); i && i.then && i.then(t, e) })); return i._lib = !0, i }, _root: function () { return this.parent ? this.parent._root() : this }, waitFor: function (t) { var n = this._root(); if (t = Pt.resolve(t), n._waitingFor) n._waitingFor = n._waitingFor.then((function () { return t })); else { n._waitingFor = t, n._waitingQueue = []; var e = n.idbtrans.objectStore(n.storeNames[0]); !function t() { for (++n._spinCount; n._waitingQueue.length;)n._waitingQueue.shift()(); n._waitingFor && (e.get(-1 / 0).onsuccess = t) }() } var r = n._waitingFor; return new Pt((function (e, i) { t.then((function (t) { return n._waitingQueue.push(Wt(e.bind(null, t))) }), (function (t) { return n._waitingQueue.push(Wt(i.bind(null, t))) })).finally((function () { n._waitingFor === r && (n._waitingFor = null) })) })) }, abort: function () { this.active && this._reject(new H.Abort), this.active = !1 }, tables: { get: (h = "Transaction.tables", d = function () { return F }, function () { return console.warn(h + " is deprecated. See https://github.com/dfahlander/Dexie.js/wiki/Deprecations. " + q(M(), 1)), d.apply(this, arguments) }) }, table: function (t) { return new vt(t, J.table(t).schema, this) } }), f(bt.prototype, (function () { function t(t, n, e) { var r = t instanceof bt ? new wt(t) : t; return r._ctx.error = e ? new e(n) : new TypeError(n), r } function n(t) { return new wt(t, (function () { return R.only("") })).limit(0) } function e(t, n, e, r, i, o) { for (var a = Math.min(t.length, r.length), u = -1, s = 0; s < a; ++s) { var c = n[s]; if (c !== r[s]) return i(t[s], e[s]) < 0 ? t.substr(0, s) + e[s] + e.substr(s + 1) : i(t[s], r[s]) < 0 ? t.substr(0, s) + r[s] + e.substr(s + 1) : u >= 0 ? t.substr(0, u) + n[u] + e.substr(u + 1) : null; i(t[s], c) < 0 && (u = s) } return a < r.length && "next" === o ? t + e.substr(t.length) : a < t.length && "prev" === o ? t.substr(0, e.length) : u < 0 ? null : t.substr(0, u) + r[u] + e.substr(u + 1) } function r(n, r, i, o) { var a, u, s, c, f, h, l, d = i.length; if (!i.every((function (t) { return "string" == typeof t }))) return t(n, wn); function p(t) { a = function (t) { return "next" === t ? function (t) { return t.toUpperCase() } : function (t) { return t.toLowerCase() } }(t), u = function (t) { return "next" === t ? function (t) { return t.toLowerCase() } : function (t) { return t.toUpperCase() } }(t), s = "next" === t ? St : At; var n = i.map((function (t) { return { lower: u(t), upper: a(t) } })).sort((function (t, n) { return s(t.lower, n.lower) })); c = n.map((function (t) { return t.upper })), f = n.map((function (t) { return t.lower })), h = t, l = "next" === t ? "" : o } p("next"); var v = new wt(n, (function () { return R.bound(c[0], f[d - 1] + o) })); v._ondirectionchange = function (t) { p(t) }; var g = 0; return v._addAlgorithm((function (t, n, i) { var o = t.key; if ("string" != typeof o) return !1; var a = u(o); if (r(a, f, g)) return !0; for (var p = null, v = g; v < d; ++v) { var y = e(o, a, c[v], f[v], s, h); null === y && null === p ? g = v + 1 : (null === p || s(p, y) > 0) && (p = y) } return n(null !== p ? function () { t.continue(p + l) } : i), !1 })), v } return { between: function (e, r, i, o) { i = !1 !== i, o = !0 === o; try { return Dt(e, r) > 0 || 0 === Dt(e, r) && (i || o) && (!i || !o) ? n(this) : new wt(this, (function () { return R.bound(e, r, !i, !o) })) } catch (n) { return t(this, bn) } }, equals: function (t) { return new wt(this, (function () { return R.only(t) })) }, above: function (t) { return new wt(this, (function () { return R.lowerBound(t, !0) })) }, aboveOrEqual: function (t) { return new wt(this, (function () { return R.lowerBound(t) })) }, below: function (t) { return new wt(this, (function () { return R.upperBound(t, !0) })) }, belowOrEqual: function (t) { return new wt(this, (function () { return R.upperBound(t) })) }, startsWith: function (n) { return "string" != typeof n ? t(this, wn) : this.between(n, n + gn, !0, !0) }, startsWithIgnoreCase: function (t) { return "" === t ? this.startsWith(t) : r(this, (function (t, n) { return 0 === t.indexOf(n[0]) }), [t], gn) }, equalsIgnoreCase: function (t) { return r(this, (function (t, n) { return t === n[0] }), [t], "") }, anyOfIgnoreCase: function () { var t = C.apply(T, arguments); return 0 === t.length ? n(this) : r(this, (function (t, n) { return -1 !== n.indexOf(t) }), t, "") }, startsWithAnyOfIgnoreCase: function () { var t = C.apply(T, arguments); return 0 === t.length ? n(this) : r(this, (function (t, n) { return n.some((function (n) { return 0 === t.indexOf(n) })) }), t, gn) }, anyOf: function () { var e = C.apply(T, arguments), r = Rt; try { e.sort(r) } catch (n) { return t(this, bn) } if (0 === e.length) return n(this); var i = new wt(this, (function () { return R.bound(e[0], e[e.length - 1]) })); i._ondirectionchange = function (t) { r = "next" === t ? Rt : jt, e.sort(r) }; var o = 0; return i._addAlgorithm((function (t, n, i) { for (var a = t.key; r(a, e[o]) > 0;)if (++o === e.length) return n(i), !1; return 0 === r(a, e[o]) || (n((function () { t.continue(e[o]) })), !1) })), i }, notEqual: function (t) { return this.inAnyRange([[mn, t], [t, yn]], { includeLowers: !1, includeUppers: !1 }) }, noneOf: function () { var n = C.apply(T, arguments); if (0 === n.length) return new wt(this); try { n.sort(Rt) } catch (n) { return t(this, bn) } var e = n.reduce((function (t, n) { return t ? t.concat([[t[t.length - 1][1], n]]) : [[mn, n]] }), null); return e.push([n[n.length - 1], yn]), this.inAnyRange(e, { includeLowers: !1, includeUppers: !1 }) }, inAnyRange: function (e, r) { if (0 === e.length) return n(this); if (!e.every((function (t) { return void 0 !== t[0] && void 0 !== t[1] && Rt(t[0], t[1]) <= 0 }))) return t(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", H.InvalidArgument); var i, o = !r || !1 !== r.includeLowers, a = r && !0 === r.includeUppers, u = Rt; function s(t, n) { return u(t[0], n[0]) } try { i = e.reduce((function (t, n) { for (var e = 0, r = t.length; e < r; ++e) { var i = t[e]; if (Dt(n[0], i[1]) < 0 && Dt(n[1], i[0]) > 0) { i[0] = Dt(o = i[0], a = n[0]) < 0 ? o : a, i[1] = Ot(i[1], n[1]); break } } var o, a; return e === r && t.push(n), t }), []), i.sort(s) } catch (n) { return t(this, bn) } var c = 0, f = a ? function (t) { return Rt(t, i[c][1]) > 0 } : function (t) { return Rt(t, i[c][1]) >= 0 }, h = o ? function (t) { return jt(t, i[c][0]) > 0 } : function (t) { return jt(t, i[c][0]) >= 0 }, l = f, d = new wt(this, (function () { return R.bound(i[0][0], i[i.length - 1][1], !o, !a) })); return d._ondirectionchange = function (t) { "next" === t ? (l = f, u = Rt) : (l = h, u = jt), i.sort(s) }, d._addAlgorithm((function (t, n, e) { for (var r = t.key; l(r);)if (++c === i.length) return n(e), !1; return !!function (t) { return !f(t) && !h(t) }(r) || (0 === Dt(r, i[c][1]) || 0 === Dt(r, i[c][0]) || n((function () { u === Rt ? t.continue(i[c][0]) : t.continue(i[c][1]) })), !1) })), d }, startsWithAnyOf: function () { var e = C.apply(T, arguments); return e.every((function (t) { return "string" == typeof t })) ? 0 === e.length ? n(this) : this.inAnyRange(e.map((function (t) { return [t, t + gn] }))) : t(this, "startsWithAnyOf() only works with strings") } } })), f(wt.prototype, (function () { function t(t, n) { t.filter = Tt(t.filter, n) } function n(t, n, e) { var r = t.replayFilter; t.replayFilter = r ? function () { return Tt(r(), n()) } : n, t.justLimit = e && !r } function e(t, n) { if (t.isPrimKey) return n; var e = t.table.schema.idxByName[t.index]; if (!e) throw new H.Schema("KeyPath " + t.index + " on object store " + n.name + " is not indexed"); return n.index(e.name) } function i(t, n) { var r = e(t, n); return t.keysOnly && "openKeyCursor" in r ? r.openKeyCursor(t.range || null, t.dir + t.unique) : r.openCursor(t.range || null, t.dir + t.unique) } function o(t, n, e, r, o) { var a = t.replayFilter ? Tt(t.filter, t.replayFilter()) : t.filter; t.or ? function () { var u = {}, s = 0; function f() { 2 == ++s && e() } function h(t, e, i) { if (!a || a(e, i, f, r)) { var o = e.primaryKey, s = "" + o; "[object ArrayBuffer]" === s && (s = "" + new Uint8Array(o)), c(u, s) || (u[s] = !0, n(t, e, i)) } } t.or._iterate(h, f, r, o), kt(i(t, o), t.algorithm, h, f, r, !t.keysOnly && t.valueMapper) }() : kt(i(t, o), Tt(t.algorithm, a), n, e, r, !t.keysOnly && t.valueMapper) } return { _read: function (t, n) { var e = this._ctx; return e.error ? e.table._trans(null, ln.bind(null, e.error)) : e.table._idbstore(G, t).then(n) }, _write: function (t) { var n = this._ctx; return n.error ? n.table._trans(null, ln.bind(null, n.error)) : n.table._idbstore(Q, t, "locked") }, _addAlgorithm: function (t) { var n = this._ctx; n.algorithm = Tt(n.algorithm, t) }, _iterate: function (t, n, e, r) { return o(this._ctx, t, n, e, r) }, clone: function (t) { var n = Object.create(this.constructor.prototype), e = Object.create(this._ctx); return t && a(e, t), n._ctx = e, n }, raw: function () { return this._ctx.valueMapper = null, this }, each: function (t) { var n = this._ctx; return this._read((function (e, r, i) { o(n, t, e, r, i) })) }, count: function (t) { var n = this._ctx; if (_t(n, !0)) return this._read((function (t, r, i) { var o = e(n, i), a = n.range ? o.count(n.range) : o.count(); a.onerror = Pn(r), a.onsuccess = function (e) { t(Math.min(e.target.result, n.limit)) } }), t); var r = 0; return this._read((function (t, e, i) { o(n, (function () { return ++r, !1 }), (function () { t(r) }), e, i) }), t) }, sortBy: function (t, n) { var e = t.split(".").reverse(), r = e[0], i = e.length - 1; function o(t, n) { return n ? o(t[e[n]], n - 1) : t[r] } var a = "next" === this._ctx.dir ? 1 : -1; function u(t, n) { var e = o(t, i), r = o(n, i); return e < r ? -a : e > r ? a : 0 } return this.toArray((function (t) { return t.sort(u) })).then(n) }, toArray: function (t) { var n = this._ctx; return this._read((function (t, r, i) { if (s && "next" === n.dir && _t(n, !0) && n.limit > 0) { var a = n.table.hook.reading.fire, u = e(n, i), c = n.limit < 1 / 0 ? u.getAll(n.range, n.limit) : u.getAll(n.range); c.onerror = Pn(r), c.onsuccess = Sn(a === Z ? t : function (n) { try { t(n.map(a)) } catch (t) { r(t) } }) } else { var f = []; o(n, (function (t) { f.push(t) }), (function () { t(f) }), r, i) } }), t) }, offset: function (t) { var e = this._ctx; return t <= 0 || (e.offset += t, _t(e) ? n(e, (function () { var n = t; return function (t, e) { return 0 === n || (1 === n ? (--n, !1) : (e((function () { t.advance(n), n = 0 })), !1)) } })) : n(e, (function () { var n = t; return function () { return --n < 0 } }))), this }, limit: function (t) { return this._ctx.limit = Math.min(this._ctx.limit, t), n(this._ctx, (function () { var n = t; return function (t, e, r) { return --n <= 0 && e(r), n >= 0 } }), !0), this }, until: function (n, e) { return t(this._ctx, (function (t, r, i) { return !n(t.value) || (r(i), e) })), this }, first: function (t) { return this.limit(1).toArray((function (t) { return t[0] })).then(t) }, last: function (t) { return this.reverse().first(t) }, filter: function (n) { return t(this._ctx, (function (t) { return n(t.value) })), function (t, n) { t.isMatch = Tt(t.isMatch, n) }(this._ctx, n), this }, and: function (t) { return this.filter(t) }, or: function (t) { return new bt(this._ctx.table, t, this) }, reverse: function () { return this._ctx.dir = "prev" === this._ctx.dir ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this }, desc: function () { return this.reverse() }, eachKey: function (t) { var n = this._ctx; return n.keysOnly = !n.isMatch, this.each((function (n, e) { t(e.key, e) })) }, eachUniqueKey: function (t) { return this._ctx.unique = "unique", this.eachKey(t) }, eachPrimaryKey: function (t) { var n = this._ctx; return n.keysOnly = !n.isMatch, this.each((function (n, e) { t(e.primaryKey, e) })) }, keys: function (t) { var n = this._ctx; n.keysOnly = !n.isMatch; var e = []; return this.each((function (t, n) { e.push(n.key) })).then((function () { return e })).then(t) }, primaryKeys: function (t) { var n = this._ctx; if (s && "next" === n.dir && _t(n, !0) && n.limit > 0) return this._read((function (t, r, i) { var o = e(n, i), a = n.limit < 1 / 0 ? o.getAllKeys(n.range, n.limit) : o.getAllKeys(n.range); a.onerror = Pn(r), a.onsuccess = Sn(t) })).then(t); n.keysOnly = !n.isMatch; var r = []; return this.each((function (t, n) { r.push(n.primaryKey) })).then((function () { return r })).then(t) }, uniqueKeys: function (t) { return this._ctx.unique = "unique", this.keys(t) }, firstKey: function (t) { return this.limit(1).keys((function (t) { return t[0] })).then(t) }, lastKey: function (t) { return this.reverse().firstKey(t) }, distinct: function () { var n = this._ctx, e = n.index && n.table.schema.idxByName[n.index]; if (!e || !e.multi) return this; var r = {}; return t(this._ctx, (function (t) { var n = t.primaryKey.toString(), e = c(r, n); return r[n] = !0, !e })), this }, modify: function (t) { var n = this, e = this._ctx.table.hook, i = e.updating.fire, o = e.deleting.fire; return this._write((function (e, u, s, f) { var h; if ("function" == typeof t) h = i === X && o === X ? t : function (n) { var e = j(n); if (!1 === t.call(this, n, this)) return !1; if (c(this, "value")) { var a = P(e, this.value), u = i.call(this, a, this.primKey, e, f); u && (n = this.value, r(u).forEach((function (t) { k(n, t, u[t]) }))) } else o.call(this, this.primKey, n, f) }; else if (i === X) { var l = r(t), d = l.length; h = function (n) { for (var e = !1, r = 0; r < d; ++r) { var i = l[r], o = t[i]; E(n, i) !== o && (k(n, i, o), e = !0) } return e } } else { var p = t; t = D(p), h = function (n) { var e = !1, o = i.call(this, t, this.primKey, j(n), f); return o && a(t, o), r(t).forEach((function (r) { var i = t[r]; E(n, r) !== i && (k(n, r, i), e = !0) })), o && (t = D(p)), e } } var v = 0, g = 0, y = !1, m = [], b = [], w = null; function _(t) { return t && (m.push(t), b.push(w)), u(new W("Error modifying one or more objects", m, g, b)) } function I() { y && g + m.length === v && (m.length > 0 ? _() : e(g)) } n.clone().raw()._iterate((function (t, n) { w = n.primaryKey; var e = { primKey: n.primaryKey, value: t, onsuccess: null, onerror: null }; function r(t) { return m.push(t), b.push(e.primKey), I(), !0 } if (!1 !== h.call(e, t, e)) { var i = !c(e, "value"); ++v, x((function () { var t = i ? n.delete() : n.update(e.value); t._hookCtx = e, t.onerror = An(r), t.onsuccess = jn((function () { ++g, I() })) }), r) } else e.onsuccess && e.onsuccess(e.value) }), (function () { y = !0, I() }), _, s) })) }, delete: function () { var t = this, n = this._ctx, e = n.range, r = n.table.hook.deleting.fire, i = r !== X; if (!i && _t(n) && (n.isPrimKey && !kn || !e)) return this._write((function (t, n, r) { var i = Pn(n), o = e ? r.count(e) : r.count(); o.onerror = i, o.onsuccess = function () { var a = o.result; x((function () { var n = e ? r.delete(e) : r.clear(); n.onerror = i, n.onsuccess = function () { return t(a) } }), (function (t) { return n(t) })) } })); var o = i ? 2e3 : 1e4; return this._write((function (e, a, u, s) { var c = 0, f = t.clone({ keysOnly: !n.isMatch && !i }).distinct().limit(o).raw(), h = [], l = function () { return f.each(i ? function (t, n) { h.push([n.primaryKey, n.value]) } : function (t, n) { h.push(n.primaryKey) }).then((function () { return i ? h.sort((function (t, n) { return Rt(t[0], n[0]) })) : h.sort(Rt), yt(u, s, h, i, r) })).then((function () { var t = h.length; return c += t, h = [], t < o ? c : l() })) }; e(l()) })) } } })), a(this, { Collection: wt, Table: vt, Transaction: mt, Version: st, WhereClause: bt }), J.on("versionchange", (function (t) { t.newVersion > 0 ? console.warn("Another connection wants to upgrade database '" + J.name + "'. Closing db now to resume the upgrade.") : console.warn("Another connection wants to delete database '" + J.name + "'. Closing db now to resume the delete request."), J.close() })), J.on("blocked", (function (t) { !t.newVersion || t.newVersion < t.oldVersion ? console.warn("Dexie.delete('" + J.name + "') was blocked") : console.warn("Upgrade '" + J.name + "' blocked by other connection holding version " + t.oldVersion / 10) })), g.forEach((function (t) { t(J) })) } function On(t) { if ("function" == typeof t) return new t; if (i(t)) return [On(t[0])]; if (t && "object" == typeof t) { var n = {}; return Rn(n, t), n } return t } function Rn(t, n) { return r(n).forEach((function (e) { var r = On(n[e]); t[e] = r })), t } function jn(t) { return Wt((function (n) { var e = n.target, r = e._hookCtx, i = r.value || e.result, o = r && r.onsuccess; o && o(i), t && t(i) }), t) } function Pn(t) { return Wt((function (n) { return Tn(n), t(n.target.error), !1 })) } function Sn(t) { return Wt((function (n) { t(n.target.result) })) } function An(t) { return Wt((function (n) { var e = n.target, r = e.error, i = e._hookCtx, o = i && i.onerror; return o && o(r), Tn(n), t(r), !1 })) } function Tn(t) { t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault() } function Cn(t) { var n = function (n) { return t.next(n) }, e = o(n), r = o((function (n) { return t.throw(n) })); function o(t) { return function (n) { var o = t(n), a = o.value; return o.done ? a : a && "function" == typeof a.then ? a.then(e, r) : i(a) ? Pt.all(a).then(e, r) : e(a) } } return o(n)() } function Kn(t, n, e, r, i, o, a) { this.name = t, this.keyPath = n, this.unique = e, this.multi = r, this.auto = i, this.compound = o, this.dotted = a; var u = "string" == typeof n ? n : n && "[" + [].join.call(n, "+") + "]"; this.src = (e ? "&" : "") + (r ? "*" : "") + (i ? "++" : "") + u } function Bn(t, n, e, r) { this.name = t, this.primKey = n || new Kn, this.indexes = e || [new Kn], this.instanceTemplate = r, this.mappedClass = null, this.idxByName = _(e, (function (t) { return [t.name, t] })) } function Fn(t) { return 1 === t.length ? t[0] : t } function Nn(t) { var n = t && (t.getDatabaseNames || t.webkitGetDatabaseNames); return n && n.bind(t) } B(K, Dn), f(In, Y), f(In, { delete: function (t) { var n = new In(t), e = n.delete(); return e.onblocked = function (t) { return n.on("blocked", t), this }, e }, exists: function (t) { return new In(t).open().then((function (t) { return t.close(), !0 })).catch(In.NoSuchDatabaseError, (function () { return !1 })) }, getDatabaseNames: function (t) { var n = Nn(In.dependencies.indexedDB); return n ? new Pt((function (t, e) { var r = n(); r.onsuccess = function (n) { t(y(n.target.result, 0)) }, r.onerror = Pn(e) })).then(t) : pn.dbnames.toCollection().primaryKeys(t) }, defineClass: function () { return function (t) { t && a(this, t) } }, applyStructure: Rn, ignoreTransaction: function (t) { return It.trans ? un(It.transless, t) : t() }, vip: function (t) { return Xt((function () { return It.letThrough = !0, t() })) }, async: function (t) { return function () { try { var n = Cn(t.apply(this, arguments)); return n && "function" == typeof n.then ? n : Pt.resolve(n) } catch (t) { return ln(t) } } }, spawn: function (t, n, e) { try { var r = Cn(t.apply(e, n || [])); return r && "function" == typeof r.then ? r : Pt.resolve(r) } catch (t) { return ln(t) } }, currentTransaction: { get: function () { return It.trans || null } }, waitFor: function (t, n) { var e = Pt.resolve("function" == typeof t ? In.ignoreTransaction(t) : t).timeout(n || 6e4); return It.trans ? It.trans.waitFor(e) : e }, Promise: Pt, debug: { get: function () { return K }, set: function (t) { B(t, "dexie" === t ? function () { return !0 } : Dn) } }, derive: d, extend: a, props: f, override: m, Events: dn, getByKeyPath: E, setByKeyPath: k, delByKeyPath: function (t, n) { "string" == typeof n ? k(t, n, void 0) : "length" in n && [].map.call(n, (function (n) { k(t, n, void 0) })) }, shallowClone: D, deepClone: j, getObjectDiff: P, asap: w, maxKey: yn, minKey: mn, addons: [], connections: _n, MultiModifyError: H.Modify, errnames: G, IndexSpec: Kn, TableSchema: Bn, dependencies: function () { try { return { indexedDB: o.indexedDB || o.mozIndexedDB || o.webkitIndexedDB || o.msIndexedDB, IDBKeyRange: o.IDBKeyRange || o.webkitIDBKeyRange } } catch (t) { return { indexedDB: null, IDBKeyRange: null } } }(), semVer: vn, version: vn.split(".").map((function (t) { return parseInt(t) })).reduce((function (t, n, e) { return t + n / Math.pow(10, 2 * e) })), default: In, Dexie: In }), Pt.rejectionMapper = function (t, n) { if (!t || t instanceof z || t instanceof TypeError || t instanceof SyntaxError || !t.name || !J[t.name]) return t; var e = new J[t.name](n || t.message, t); return "stack" in t && l(e, "stack", { get: function () { return this.inner.stack } }), e }, (pn = new In("__dbnames")).version(1).stores({ dbnames: "name" }), function () { var t = "Dexie.DatabaseNames"; try { void 0 !== typeof localStorage && void 0 !== o.document && (JSON.parse(localStorage.getItem(t) || "[]").forEach((function (t) { return pn.dbnames.put({ name: t }).catch(X) })), localStorage.removeItem(t)) } catch (t) { } }(); const Mn = In } }, n = {}; function e(r) { var i = n[r]; if (void 0 !== i) return i.exports; var o = n[r] = { exports: {} }; return t[r].call(o.exports, o, o.exports, e), o.exports } e.n = t => { var n = t && t.__esModule ? () => t.default : () => t; return e.d(n, { a: n }), n }, e.d = (t, n) => { for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: n[r] }) }, e.g = function () { if ("object" == typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (t) { if ("object" == typeof window) return window } }(), e.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n), e.r = t => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, (() => { "use strict"; var t = e(128), n = e(534), r = e.n(n), i = e(363), o = e.n(i); const a = { debug: !1 }; /* console.log("[*] Cargando RanasDB..."); */ class u { static get Dexie() { return t.default } static get DexieRelationships() { return r() } static get Check() { return o() } static create(t, n, e, r) { return new u(t, n, e, r) } static connect(t, n, e, r) { return new u(t, n, e, r).initialize() } static dropDatabase(t) { return u.Dexie.delete(t) } static dropDatabaseIfExists(t) { try { return u.Dexie.delete(t) } catch (t) { } } static get defaultOptions() { return a } constructor(n = "Base_de_datos_por_defecto_de_ranas_db", e = [], i = this.constructor.defaultOptions, a = {}) { o().that(n).isString(), o().that(e).isArray(); for (let t = 0; t < e.length; t++) { const n = e[t]; o().that(n).isArray().hasLengthGreaterThan(1), o().that(n[0]).isObject(), o().that(n[1]).isFunction() } this.options = i, this.databaseID = n, this.versionation = e, this.dexieDB = new t.default(this.databaseID, { addons: [r()] }) } debug(...t) { "function" == typeof this.options.debug && this.options.debug(...t) } initialize() { if (this.debug(`Initializing: #${this.databaseID}`), !this.dexieDB.isOpen()) for (let t = 0; t < this.versionation.length; t++) { const [n, e] = this.versionation[t], r = this.dexieDB.version(t + 1).stores(n); e && r.upgrade(e) } return this } select(t, n = (() => !0), e = []) { this.debug(`Selecting on: #${this.databaseID} » ${t}`, { table: t, filter: n, joins: e }), o().that(t).isString(), o().that(n).isFunction(); let r = this.dexieDB.table(t).filter(n); for (let t = 0; t < e.length; t++) { let n = e[t]; r = r.with({ [n]: n }) } return r.toArray() } insert(t, n) { return this.debug(`Inserting on: #${this.databaseID} » ${t}`, { table: t, item: n }), o().that(t).isString(), o().that(n).isObject(), this.dexieDB.table(t).add(n) } update(t, n, e) { return this.debug(`Updating on: #${this.databaseID} » ${t}`, { table: t, id: n, value: e }), o().that(t).isString(), o().that(n).isNumber(), o().that(e).isObject(), this.dexieDB.table(t).update(n, e) } delete(t, n) { return this.debug(`Deleting on: #${this.databaseID} » ${t}`, { table: t, id: n }), o().that(t).isString(), o().that(n).isNumber(), this.dexieDB.table(t).delete(n) } } "undefined" != typeof window && (window.RanasDB = u), void 0 !== e.g && (e.g.RanasDB = u) })() })();
//RestUtils.require("fs").writeFileSync(__dirname + "/../process.json", "" + process.pid, "utf8");

(typeof window !== "undefined" ? window : global).die = function (...args) {
    console.log(...args);
    process.exit(0);
};

(function(scope, factory) {
    const jsmodule = factory();
    if(typeof window !== "undefined") {
        window.Automatic_http_rest_api_interface = jsmodule;
    }
    if(typeof global !== "undefined") {
        global.Automatic_http_rest_api_interface = jsmodule;
    }
    if(typeof define === "function") {
        define("Automatic_http_rest_api_interface", jsmodule);
    }
    if(typeof module !== "undefined") {
        module.exports = jsmodule;
    }
    return jsmodule;
})(this, () => function(factoryParameters) {

    const defaultConfigurations = {
        platform: "node", // "browser"
        environment: "production", // "development", "testing"
        debug: true,
        debugSQL: true,
        debugErrors: true,
        responseWrapper: {
            app: {
                title: "Automatic HTTP REST API development",
                author: {
                    name: "allnulled",
                    telephone: "+34 619 98 26 22",
                    url: "https://www.github.com/allnulled",
                }
            }
        },
        traceCallback: function (id) {
            if (configurations.debug) {
                if(configurations.platform === "node") {
                    console.log("\u001b[32m[TRACE]\u001b[0m " + id);
                } else {
                    console.log("[TRACE] " + id);
                }
            }
        },
        traceSQLCallback: function (id) {
            if (configurations.debugSQL) {
                if (configurations.platform === "node") {
                    console.log("\u001b[33m[·SQL·]\u001b[0m " + id.split("\n").join("\n  "));
                } else {
                    console.log("[·SQL·] " + id);
                }
            }
        },
        traceErrorCallback: function (error) {
            try {
                if (configurations.debugErrors) {
                    let id = undefined;
                    if (typeof error === "string") {
                        id = error;
                    } else if (error instanceof Error) {
                        id = error.name + ": " + error.message + "\n      " + error.stack + "";
                    }
                    if (configurations.platform === "node") {
                        console.log("\u001b[31m[ERROR]\u001b[0m " + id.split("\n").join("\n  "));
                    } else {
                        console.log("[ERROR] " + id);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },
    };

    const configurations = Object.assign(defaultConfigurations, factoryParameters);
    const trace = configurations.traceCallback;
    const traceSQL = configurations.traceSQLCallback;
    const traceError = configurations.traceErrorCallback;

    const RestClient = function (baseUrl, client = {}) {
        Object.assign(client, {
            defaults: {
                headers: {
                    common: {
                        // @CONFIGURABLE
                    }
                }
            },
            request: (method, url, requestArgs = {}, requestConfigArgs = {}, responseArgs = {}, ...args) => {
                trace("DataServer.prototype.createClient:request");
                const parsedUrl = RestUtils.require("url").parse(url);
                trace("RestClient is requesting: " + url);
                const requestParameters = Object.assign({}, requestArgs);
                const responseParameters = Object.assign({}, responseArgs);
                if (configurations.platform === "browser") {
                    const queryParameters = Object.assign({}, requestParameters);
                    requestParameters.headers = Object.assign({}, client.defaults.headers.common, requestConfigArgs.headers || {});
                    requestParameters.query = queryParameters;
                    if (parsedUrl.pathname.startsWith(client.server.basePathForData)) {
                        return client.server.dispatchSelf(method, url, requestParameters, responseParameters, ...args);
                    } else if (parsedUrl.pathname.startsWith(client.server.basePathForAuth)) {
                        return client.server.dispatchSelf(method, url, requestParameters, responseParameters, ...args);
                    } else if (parsedUrl.pathname.startsWith(client.server.basePathForProcess)) {
                        return client.server.dispatchSelf(method, url, requestParameters, responseParameters, ...args);
                    } else if (parsedUrl.pathname.startsWith(client.server.basePathForQuery)) {
                        return client.server.dispatchSelf(method, url, requestParameters, responseParameters, ...args);
                    } else {
                        throw new Error("Required parameter «url» to start as a valid basepath on browser in order to «createClient:request»");
                    }
                } else if (configurations.platform === "node") {
                    const requestConfigParameters = Object.assign({}, {headers:{}}, requestConfigArgs);
                    Object.assign(requestConfigParameters.headers, client.defaults.headers.common, )
                    if (parsedUrl.pathname.startsWith(client.server.basePathForData)) {
                        return require("axios").create()[method](url, requestParameters, requestConfigParameters, ...args);
                    } else if (parsedUrl.pathname.startsWith(client.server.basePathForAuth)) {
                        return require("axios").create()[method](url, requestParameters, requestConfigParameters, ...args);
                    } else if (parsedUrl.pathname.startsWith(client.server.basePathForProcess)) {
                        return require("axios").create()[method](url, requestParameters, requestConfigParameters, ...args);
                    } else if (parsedUrl.pathname.startsWith(client.server.basePathForQuery)) {
                        return require("axios").create()[method](url, requestParameters, requestConfigParameters, ...args);
                    } else {
                        throw new Error("Required parameter «url» to start as a valid basepath on browser in order to «createClient:request»");
                    }
                } else {
                    throw new Error("Required configuration «platform» to be a valid platform on node in order to «createClient:request»");
                }
            },
            auth: {
                login: (user, password) => {
                    trace("DataServer.prototype.createClient:auth:login");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForAuth, "/login");
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        user,
                        password,
                    }).toString());
                },
                logout: (session_token) => {
                    trace("DataServer.prototype.createClient:auth:logout");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForAuth, "/logout");
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        session_token: session_token,
                    }).toString());
                },
                register: (user, password, email) => {
                    trace("DataServer.prototype.createClient:auth:register");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForAuth, "/register");
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        user,
                        password,
                        email,
                    }).toString());
                },
                confirm: (token) => {
                    trace("DataServer.prototype.createClient:auth:confirm");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForAuth, "/confirm");
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        token,
                    }).toString());
                },
                forgot: (user) => {
                    trace("DataServer.prototype.createClient:auth:forgot");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForAuth, "/forgot");
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        user,
                    }).toString());
                },
                recover: (token) => {
                    trace("DataServer.prototype.createClient:auth:recover");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForAuth, "/recover");
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        token,
                    }).toString());
                },
                unregister: (user, password) => {
                    trace("DataServer.prototype.createClient:auth:unregister");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForAuth, "/unregister");
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        user,
                        password,
                    }).toString());
                },
            },
            rest: {
                selectOne: (model, where) => {
                    trace("DataServer.prototype.createClient:rest:selectOne");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForData, model, "/select/one");
                    trace(finalUrl);
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        where: JSON.stringify(where)
                    }).toString());
                },
                selectMany: (model, where = [], order = [], group = [], pagination = []) => {
                    trace("DataServer.prototype.createClient:rest:selectMany");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForData, model, "/select/many");
                    trace(finalUrl);
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        where: JSON.stringify(where),
                        group: JSON.stringify(group),
                        order: JSON.stringify(order),
                        pagination: JSON.stringify(pagination)
                    }).toString());
                },
                insertOne: (model, item) => {
                    trace("DataServer.prototype.createClient:rest:insertOne");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForData, model, "/insert/one");
                    trace(finalUrl);
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        item: JSON.stringify(item),
                    }).toString());
                },
                insertMany: (model, items) => {
                    trace("DataServer.prototype.createClient:rest:insertMany");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForData, model, "/insert/many");
                    trace(finalUrl);
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        items: JSON.stringify(items),
                    }).toString());
                },
                updateOne: (model, where, values) => {
                    trace("DataServer.prototype.createClient:rest:updateOne");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForData, model, "/update/one");
                    trace(finalUrl);
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        where: JSON.stringify(where),
                        values: JSON.stringify(values),
                    }).toString());
                },
                updateMany: (model, where, values) => {
                    trace("DataServer.prototype.createClient:rest:updateMany");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForData, model, "/update/many");
                    trace(finalUrl);
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        where: JSON.stringify(where),
                        values: JSON.stringify(values),
                    }).toString());
                },
                deleteOne: (model, where) => {
                    trace("DataServer.prototype.createClient:rest:deleteOne");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForData, model, "/delete/one");
                    trace(finalUrl);
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        where: JSON.stringify(where),
                    }).toString());
                },
                deleteMany: (model, where) => {
                    trace("DataServer.prototype.createClient:rest:deleteMany");
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForData, model, "/delete/many");
                    trace(finalUrl);
                    return this.request("get", finalUrl + "?" + new URLSearchParams({
                        where: JSON.stringify(where),
                    }).toString());
                },
            },
            queries: client.server.queries.reduce((output, item) => {
                output[item.id] = (parameters, ...args) => {
                    trace("DataServer.prototype.createClient:queries:" + item.id);
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForQuery, item.path);
                    trace(finalUrl);
                    return this.request("get", finalUrl + "?" + new URLSearchParams(parameters), ...args);
                };
                return output;
            }, {}),
            processes: client.server.processes.reduce((output, item) => {
                output[item.id] = (parameters, ...args) => {
                    trace("DataServer.prototype.createClient:processes:" + item.id);
                    const finalUrl = baseUrl + RestUtils.require("path").join(client.server.basePathForProcess, item.path);
                    trace(finalUrl);
                    return this.request("get", finalUrl + "?" + new URLSearchParams(parameters), ...args);
                };
                return output;
            }, {})
        });
        return Object.assign(this, client);
    };

    ////////////////////////////////////////////////////////////////////////
    // -1. Hooks class:
    const Hooks = function () {
        this.hooks = {};
    };
    Hooks.create = function (...args) {
        trace("Hooks.create");
        return new Hooks(...args);
    };
    Hooks.prototype.addHook = function (selectorString, hookId, event) {
        trace("Hooks.prototype.addHook");
        if (typeof selectorString !== "string") {
            throw new Error("Required argument «selectorString» to be an array in order to «addHook»");
        } else if (selectorString.length === 0) {
            throw new Error("Required argument «selectorString» to have one or more items in order to «addHook»");
        }
        if (typeof hookId !== "string") {
            throw new Error("Required argument «hookId» to be a string in order to «addHook»");
        }
        if (typeof event !== "function") {
            throw new Error("Required argument «event» to be a function in order to «addHook»");
        }
        if (!(selectorString in this.hooks)) {
            this.hooks[selectorString] = [];
        }
        this.hooks[selectorString].push({
            id: hookId,
            event
        });
        return this;
    };
    Hooks.prototype.addHooks = function (selectorList, hookId, event) {
        trace("Hooks.prototype.addHooks");
        if (!Array.isArray(selectorList)) {
            throw new Error("Required argument «selectorList» to be an array in order to «addHooks»");
        } else if (selectorList.length === 0) {
            throw new Error("Required argument «selectorList» to have one or more items in order to «addHooks»");
        }
        if (typeof hookId !== "string") {
            throw new Error("Required argument «hookId» to be a string in order to «addHooks»");
        }
        if (typeof event !== "function") {
            throw new Error("Required argument «event» to be a function in order to «addHooks»");
        }
        const selectors = Array.isArray(selectorList) ? selectorList : [selectorList];
        for(let indexSelectors = 0; indexSelectors < selectors.length; indexSelectors++) {
            const selector = selectors[indexSelectors];
            this.addHook(selector, hookId, event);
        }
        return this;
    };
    Hooks.prototype.useHook = async function (selectorString, parameters = {}) {
        trace("Hooks.prototype.useHook");
        try {
            trace("Throwing hook: " + selectorString);
            if (typeof selectorString !== "string") {
                throw new Error("Required argument «selectorString» to be a string in order to «useHook»");
            }
            if (typeof parameters !== "object") {
                throw new Error("Required argument «parameters» to be an object or omitted in order to «useHook»");
            }
            if(!(selectorString in this.hooks)) {
                return parameters;
            }
            const hookEvents = this.hooks[selectorString];
            IteratingSelection:
            for(let indexList = 0; indexList < hookEvents.length; indexList++) {
                const hookEvent = hookEvents[indexList];
                let hookFunction = undefined;
                if(typeof hookEvent === "object") {
                    if(typeof hookEvent.event === "function") {
                        hookFunction = hookEvent.event;
                    } else throw new Error("Required hook «" + selectorString + "» on index «" + indexList + "» on property «event» to be a function in order to «useHook»");
                } else throw new Error("Required hook «" + selectorString + "» on index «" + indexList + "» to be an object in order to «useHook»");
                const result = await hookFunction(parameters);
                if(typeof result !== "undefined") {
                    parameters = result;
                }
            }
            return parameters;
        } catch(error) {
            this.onError(error);
        }
    };
    Hooks.prototype.replaceHook = function (selectorString, hookId, eventSource) {
        trace("Hooks.prototype.replaceHook");
        try {
            if (typeof selectorString !== "string") {
                throw new Error("Required argument «selectorString» to be a string in order to «replaceHook»");
            }
            if (!(selectorString in this.hooks)) {
                throw new Error("Required argument «selectorString» to be a valid hook id in order to «replaceHook»");
            }
            if (typeof hookId !== "string") {
                throw new Error("Required argument «hookId» to be a string in order to «replaceHook»");
            }
            if (typeof eventSource !== "object") {
                throw new Error("Required argument «eventSource» to be an object in order to «replaceHook»");
            }
            if (typeof eventSource.id !== "string") {
                throw new Error("Required argument «eventSource.id» to be a string in order to «replaceHook»");
            }
            if (typeof eventSource.event !== "function") {
                throw new Error("Required argument «eventSource.event» to be a function in order to «replaceHook»");
            }
            let count = 0;
            const hookEvents = this.hooks[selectorString];
            IteratingSelection:
            for (let indexList = 0; indexList < hookEvents.length; indexList++) {
                const hookEvent = hookEvents[indexList];
                if (hookEvent.id === hookId) {
                    this.hooks[selectorString].splice(indexList, 1, eventSource);
                    count++;
                }
            }
            return count;
        } catch(error) {
            this.onError(error);
        }
    };
    Hooks.prototype.removeHook = function (selectorString, hookId) {
        trace("Hooks.prototype.removeHook");
        try {
            if (typeof selectorString !== "string") {
                throw new Error("Required argument «selectorString» to be a string in order to «removeHook»");
            }
            if (!(selectorString in this.hooks)) {
                throw new Error("Required argument «selectorString» to be a valid hook id in order to «removeHook»");
            }
            if (typeof hookId !== "string") {
                throw new Error("Required argument «hookId» to be an string in order to «removeHook»");
            }
            let count = 0;
            const hookEvents = this.hooks[selectorString];
            IteratingSelection:
            for (let indexList = 0; indexList < hookEvents.length; indexList++) {
                const hookEvent = hookEvents[indexList];
                if (typeof hookEvent === "object") {
                    if (hookEvent.id === hookId) {
                        this.hooks[selectorString].splice(indexList, 1);
                        count++;
                    }
                }
            }
            return count;
        } catch (error) {
            this.onError(error);
        }
    };

    ////////////////////////////////////////////////////////////////////////
    // 0. RestUtils object:
    const RestUtils = {
        prototype: {},
        modules: {},
        modulePolyfills: {
            "mysql2/promise": {
                createConnection: function() {
                    trace("polyfill://require:mysql2/promise:createConnection");
                    return {
                        ping() {
                            trace("polyfill://require:mysql2/promise:createConnection:ping");
                            // throw new Error("Method ping must be overriden");
                        },
                        query(query, ...args) {
                            trace("polyfill://require:mysql2/promise:createConnection:query");
                            console.log("Function «RestUtils.modulePolyfills.mysql2/promises.createConnection.query» to be overwritten");
                            console.log(query);
                            return [[], []];
                        },
                        proxifiedQuery(query, ...args) {
                            trace("polyfill://require:mysql2/promise:createConnection:proxifiedQuery");
                            traceSQL(query);
                            return this.query(query, ...args);
                        }
                    }
                }
            },
            "url": {
                parse: function(parameter) {
                    trace("polyfill://require:url:parse x " + parameter);
                    return new URL(parameter);
                },
            },
            "sqlstring": {
                sanitize: function (arg) {
                    trace("polyfill://require:sqlstring:sanitize");
                    return arg;
                },
                sanitizeId: function (arg) {
                    trace("polyfill://require:sqlstring:sanitizeId");
                    return arg;
                },
            },
            "path": {
                resolve: function (...args) {
                    trace("polyfill://require:path:resolve");
                    return ["", ...args].map(i => i.replace(/^\//g, "").replace(/\/$/g, "")).join("/");
                },
                join: function (...args) {
                    trace("polyfill://require:path:join");
                    return ["",...args].filter(i => typeof i !== "undefined").map(i => i.replace(/^\//g, "").replace(/\/$/g, "")).join("/");
                },
            },
            "http": {
                createServer: function(controller) {
                    trace("polyfill://require:http:createServer");
                    return {
                        listen: function (options, callback) {
                            trace("polyfill://require:http:createServer:listen");
                            setTimeout(callback, 0);
                        }
                    }
                }
            },
        },
        require: function(modulepath) {
            trace("RestUtils.require");
            if(modulepath in RestUtils.modules) {
                return RestUtils.modules[modulepath];
            }
            if(configurations.platform === "browser") {
                if(modulepath in RestUtils.modulePolyfills) {
                    return RestUtils.modulePolyfills[modulepath];
                } else {
                    throw new Error("Not identified package: " + modulepath);
                }
            }
            RestUtils.modules[modulepath] = require(modulepath);
            return RestUtils.modules[modulepath];
        },
        define: function(name, value) {
            trace("RestUtils.define");
            RestUtils.modules[name] = value;
        },
        definePolyfill: function (name, value) {
            trace("RestUtils.definePolyfill");
            RestUtils.modulePolyfills[name] = value;
        },
        wrapResponse: function (data) {
            trace("RestUtils.wrapResponse");
            return {
                ...configurations.responseWrapper,
                ...data,
                time: new Date().toString()
            };
        },
        respondContext: function (context) {
            trace("RestUtils.respondContext");
            const response = context.output;
            const responseWrapped = RestUtils.wrapResponse(response);
            const responseJson = JSON.stringify(responseWrapped, null, 2);
            context.response.writeHead(200, { "Content-type": "application/json" });
            context.response.write(responseJson);
            return context.response.end();
        },
        generateRandomToken: function (len, alphabet = "abcdefghijklmnopqrstuvwxyz0123456789") {
            trace("RestUtils.generateRandomToken");
            let output = "";
            for(let index = 0; index < len; index++) {
                output += alphabet[Math.floor(Math.random() * alphabet.length)];
            }
            return output;
        },
        generateOnErrorFunction: function (id) {
            trace("RestUtils.generateOnErrorFunction");
            return function (error, propagate = true) {
                trace(id);
                traceError(error);
                if (propagate) {
                    throw error;
                }
            };
        },
        generateContextByRequestResponseFactory: function (id) {
            trace("RestUtils.generateContextByRequestResponseFactory");
            return function (request, response) {
                trace(id);
                const parsedURL = RestUtils.require("url").parse(request.url, true);
                return {
                    output: {},
                    parameters: {},
                    state: {},
                    input: {
                        url: parsedURL.pathname,
                        query: RestUtils.fromURLToQuerystringObject(request.url),
                        body: request.body,
                        params: request.params,
                        request,
                        response
                    },
                    request,
                    response,
                };
            };
        },
        generateOnDispatchErrorFunction: function (traceId) {
            trace("RestUtils.generateOnDispatchErrorFunction");
            return function (error, request, response) {
                trace(traceId);
                traceError(error);
                response.writeHead(500, { "Content-Type": "application/json" });
                const data = {
                    name: error.name,
                    message: error.message,
                    stack: Object.assign({}, error.stack.split(/\n    /g))
                };
                const wrappedData = RestUtils.wrapResponse({
                    status: "error",
                    error: data
                });
                const wrappedJson = JSON.stringify(wrappedData, null, 2);
                response.write(wrappedJson);
                return response.end();
            };
        },
        noop: function () { },
        basicServiceFactory: function () {
            trace("RestUtils.basicServiceFactory");
            return function (modifications) {
                trace("RestUtils.basicServiceFactory:Service");
                Object.assign(this, modifications);
                return this;
            }
        },
        basicQueryFactory: function () {
            trace("RestUtils.basicQueryFactory");
            return function () {
                trace("RestUtils.basicQueryFactory:Query");
                return this;
            }
        },
        basicProcessFactory: function () {
            trace("RestUtils.basicProcessFactory");
            return function () {
                trace("RestUtils.basicProcessFactory:Process");
                return this;
            }
        },
        basicControllerFallback: function (request, response) {
            trace("RestUtils.basicControllerFallback");
            response.writeHead(404);
            response.write("Error 404: Page was not found.");
            return response.end();
        },
        sanitize: function (value) {
            trace("RestUtils.sanitize");
            return RestUtils.require("sqlstring").escape(value);
        },
        sanitizeId: function (id) {
            trace("RestUtils.sanitizeId");
            return RestUtils.require("sqlstring").escapeId(id);
        },
        availableOperators: {
            "<": "<",
            "<=": "<=",
            ">": ">",
            ">=": ">=",
            "=": "=",
            "!=": "!=",
            "in": "IN",
            "!in": "NOT IN",
            // "contains": "contains",
            // "!contains": "!contains",
        },
        validateStaticServiceInterface: function (staticInterface) {
            trace("RestUtils.validateStaticServiceInterface");
            if (typeof staticInterface !== "function") {
                throw new Error("Required parameter «staticInterface» to be an function in order to «validateStaticServiceInterface»")
            }
            if (typeof staticInterface.table !== "string") {
                throw new Error("Required parameter «staticInterface.table» to be a string in order to «validateStaticServiceInterface»")
            }
            if (typeof staticInterface.path !== "string") {
                throw new Error("Required parameter «staticInterface.path» to be a string in order to «validateStaticServiceInterface»")
            }
            if (typeof staticInterface.creationScript !== "string") {
                throw new Error("Required parameter «staticInterface.creationScript» to be a string in order to «validateStaticServiceInterface»")
            }
            if (typeof staticInterface.schema !== "object") {
                throw new Error("Required parameter «staticInterface.schema» to be an object in order to «validateStaticServiceInterface»")
            }
            return true;
        },
        validateDynamicServiceInterface: function (dynamicInterface) {
            trace("RestUtils.validateDynamicServiceInterface");
            return true;
        },
        validateStaticQueryInterface: function(staticInterface) {
            trace("RestUtils.validateStaticQueryInterface");
            if (typeof staticInterface.path !== "string") {
                throw new Error("Required parameter «staticInterface.path» to be a string in order to «validateStaticQueryInterface»")
            }
            if (typeof staticInterface.query !== "function") {
                throw new Error("Required parameter «staticInterface.query» to be a function in order to «validateStaticQueryInterface»")
            }
            return true;
        },
        validateDynamicQueryInterface: function(dynamicInterface) {
            trace("RestUtils.validateDynamicQueryInterface");
            return true;
        },
        validateStaticProcessInterface: function(staticInterface) {
            trace("RestUtils.validateStaticProcessInterface");
            if (typeof staticInterface.path !== "string") {
                throw new Error("Required parameter «staticInterface.path» to be a string in order to «validateStaticProcessInterface»")
            }
            if (typeof staticInterface.process !== "function") {
                throw new Error("Required parameter «staticInterface.process» to be a function in order to «validateStaticProcessInterface»")
            }
            return true;
        },
        validateDynamicProcessInterface: function(dynamicInterface) {
            trace("RestUtils.validateDynamicProcessInterface");
            return true;
        },
        expandConnection: function (connection) {
            trace("RestUtils.expandConnection");
            connection.proxifiedQuery = function (query) {
                trace("RestUtils.expandConnection:connection.proxifiedQuery");
                traceSQL(query);
                return this.query(query);
            }
            return connection;
        },
        formatTableFromRequest: function (context, { start, end }) {
            trace("RestUtils.formatTableFromRequest");
            return RestUtils.require("url").parse(context.request.url).pathname
                .replace(start, "")
                .split("")
                .reverse()
                .join("")
                .replace(end.split("").reverse().join(""), "")
                .split("")
                .reverse()
                .join("");
        },
        formatWhereFromRequest: function (context) {
            trace("RestUtils.formatWhereFromRequest");
            const where = context.input.query.where || "[]";
            if (typeof where === "object") {
                return where;
            }
            let whereData = undefined;
            try {
                whereData = JSON.parse(where);
            } catch (error) {
                throw new Error("Required parameter «where» to be a well-formed JSON object in order to «formatWhereFromRequest»");
            }
            if (!Array.isArray(whereData)) {
                throw new Error("Required parameter «where» to be a JSON array in order to «formatWhereFromRequest»");
            }
            if (whereData.length === 0) {
                return whereData;
            }
            for (let index = 0; index < whereData.length; index++) {
                const whereRule = whereData[index];
                if (!Array.isArray(whereRule)) {
                    throw new Error("Required parameter «where[" + index + "]» to be an array in order to «formatWhereFromRequest»");
                }
                if (whereRule.length < 3) {
                    throw new Error("Required parameter «where[" + index + "]» to be an array of 3 or more items in order to «formatWhereFromRequest»");
                }
                if (typeof whereRule[0] !== "string") {
                    throw new Error("Required parameter «where[" + index + "][0]» to be a string in order to «formatWhereFromRequest»");
                }
                if (typeof whereRule[1] !== "string") {
                    throw new Error("Required parameter «where[" + index + "][1]» to be a string in order to «formatWhereFromRequest»");
                }
                if (!(whereRule[1] in RestUtils.availableOperators)) {
                    throw new Error("Required parameter «where[" + index + "][1]» to be a valid query operator in order to «formatWhereFromRequest»");
                }
            }
            return whereData;
        },
        formatOrderFromRequest: function (context) {
            trace("RestUtils.formatOrderFromRequest");
            const order = context.input.query.order || "[]";
            let orderData = undefined;
            if (typeof order === "object") {
                orderData = order;
            } else if (typeof order !== "string") {
                throw new Error("Required parameter «context.input.query.order» to be an (optionally JSON) array in order to «formatOrderFromRequest»");
            } else {
                try {
                    orderData = JSON.parse(order);
                } catch (error) {
                    throw new Error("Required parameter «order» to be a well-formed JSON object in order to «formatOrderFromRequest»");
                }
            }
            if (!Array.isArray(orderData)) {
                throw new Error("Required parameter «order» to be a JSON array in order to «formatOrderFromRequest»");
            }
            if (orderData.length === 0) {
                orderData.push("id");
            }
            for (let index = 0; index < orderData.length; index++) {
                const orderRule = orderData[index];
                if (typeof orderRule !== "string") {
                    throw new Error("Required parameter «order[" + index + "]» to be a string in order to «formatOrderFromRequest»");
                }
            }
            return orderData;
        },
        formatGroupFromRequest: function (context) {
            trace("RestUtils.formatGroupFromRequest");
            const group = context.input.query.group || "[]";
            let groupData = undefined;
            if (typeof group === "object") {
                groupData = group;
            } else if (typeof group !== "string") {
                throw new Error("Required parameter «context.input.query.group» to be an (optionally JSON) array in order to «formatGroupFromRequest»");
            } else {
                try {
                    groupData = JSON.parse(group);
                } catch (error) {
                    throw new Error("Required parameter «group» to be a well-formed JSON object in group to «formatGroupFromRequest»");
                }
            }
            if (!Array.isArray(groupData)) {
                throw new Error("Required parameter «group» to be a JSON array in group to «formatGroupFromRequest»");
            }
            if (groupData.length === 0) {
                return groupData;
            }
            for (let index = 0; index < groupData.length; index++) {
                const groupRule = groupData[index];
                if (typeof groupRule !== "string") {
                    throw new Error("Required parameter «group[" + index + "]» to be a string in group to «formatGroupFromRequest»");
                }
            }
            return groupData;
        },
        formatPaginationFromRequest: function (context) {
            trace("RestUtils.formatPaginationFromRequest");
            const pagination = context.input.query.pagination || "[1,20]";
            let paginationData = undefined;
            if (typeof pagination === "object") {
                paginationData = pagination;
            } else if (typeof pagination !== "string") {
                throw new Error("Required parameter «context.input.query.pagination» to be an (optionally JSON) array in order to «formatPaginationFromRequest»");
            } else {
                try {
                    paginationData = JSON.parse(pagination);
                } catch (error) {
                    throw new Error("Required parameter «pagination» to be a well-formed JSON object in pagination to «formatPaginationFromRequest»");
                }
            }
            if (!Array.isArray(paginationData)) {
                throw new Error("Required parameter «pagination» to be a JSON array in pagination to «formatPaginationFromRequest»");
            }
            if (paginationData.length === 0) {
                return paginationData;
            }
            const [page = 1, items = 20] = paginationData;
            if (typeof page !== "number") {
                throw new Error("Required parameter «page» to be a number in order to «formatPaginationFromRequest»");
            }
            if (typeof items !== "number") {
                throw new Error("Required parameter «items» to be a number in order to «formatPaginationFromRequest»");
            }
            if (page < 0) {
                throw new Error("Required parameter «pagination[0]» to be a number higher or equal to 0 in order to «formatPaginationFromRequest»");
            }
            if (items < 1) {
                throw new Error("Required parameter «pagination[1]» to be a number higher or equal to 1 in order to «formatPaginationFromRequest»");
            }
            return paginationData;
        },
        formatItemFromRequest: function (context) {
            trace("RestUtils.formatItemFromRequest");
            const item = context.input.query.item || "{}";
            let itemData = undefined;
            if (typeof item === "object") {
                itemData = item;
            } else if (typeof item !== "string") {
                throw new Error("Required parameter «context.input.query.item» to be an (optionally JSON) object in order to «formatItemFromRequest»");
            } else {
                try {
                    itemData = JSON.parse(item);
                } catch (error) {
                    throw new Error("Required parameter «item» to be a well-formed JSON object to «formatItemFromRequest»");
                }
            }
            if (typeof itemData !== "object") {
                throw new Error("Required parameter «item» to be a JSON object to «formatItemFromRequest»");
            }
            return itemData;
        },
        formatItemsFromRequest: function (context) {
            trace("RestUtils.formatItemsFromRequest");
            const items = context.input.query.items || "{}";
            let itemsData = undefined;
            if (typeof items === "object") {
                itemsData = items;
            } else if (typeof items !== "string") {
                throw new Error("Required parameter «context.input.query.items» to be an (optionally JSON) object in order to «formatItemsFromRequest»");
            } else {
                try {
                    itemsData = JSON.parse(items);
                } catch (error) {
                    throw new Error("Required parameter «item» to be a well-formed JSON object to «formatItemsFromRequest»");
                }
            }
            if (!Array.isArray(itemsData)) {
                throw new Error("Required parameter «items» to be an (optionally JSON) array in order to «formatItemsFromRequest»");
            }
            for (let index = 0; index < itemsData.length; index++) {
                const itemData = itemsData[index];
                if (typeof itemData !== "object") {
                    throw new Error("Required parameter «items[" + index + "]» to be a JSON object to «formatItemsFromRequest»");
                }
            }
            return itemsData;
        },
        formatValuesFromRequest: function (context) {
            trace("RestUtils.formatValuesFromRequest");
            const values = context.input.query.values || "{}";
            let valuesData = undefined;
            if (typeof values === "object") {
                valuesData = values;
            } else if (typeof values !== "string") {
                throw new Error("Required parameter «context.input.query.values» to be an (optionally JSON) object in order to «formatValuesFromRequest»");
            } else {
                try {
                    valuesData = JSON.parse(values);
                } catch (error) {
                    throw new Error("Required parameter «values» to be a well-formed JSON object to «formatValuesFromRequest»");
                }
            }
            if (Array.isArray(valuesData)) {
                throw new Error("Required parameter «values» to be an object and not an array in order to «formatValuesFromRequest»");
            } else if (typeof valuesData !== "object") {
                throw new Error("Required parameter «values» to be an object in order to «formatValuesFromRequest»");
            }
            return valuesData;
        },
        fromWhereToSQL: function (where, wholeClause = false) {
            trace("RestUtils.fromWhereToSQL");
            if (!Array.isArray(where)) {
                throw new Error("Required parameter «where» to be an array in order to «fromWhereToSQL»");
            }
            if (where.length === 0) {
                return "# No filtering rules";
            }
            let query = where.map((whereRule, index) => {
                const sanitizedSubject = RestUtils.sanitizeId(whereRule[0]);
                const sanitizedOperation = RestUtils.availableOperators[whereRule[1]];
                const unsanitizedObject = whereRule[2];
                const thirdArgumentMode = whereRule[3] || "default";
                let sanitizedObject = whereRule[2];
                if (thirdArgumentMode === "default") {
                    if ((typeof unsanitizedObject !== "string") && (typeof unsanitizedObject !== "number")) {
                        throw new Error("Required argument «where[" + index + "][2]» to be a string or a number (on «default» mode) in order to «RestUtils.fromWhereToSQL»");
                    }
                    sanitizedObject = RestUtils.sanitize(unsanitizedObject);
                } else if (thirdArgumentMode === "column") {
                    throw new Error("Required argument «where[" + index + "][3]» to be a valid mode and 'column' mode is not allowed in order to «RestUtils.fromWhereToSQL»");
                    sanitizedObject = RestUtils.sanitizeId(unsanitizedObject);
                } else if (thirdArgumentMode === "null") {
                    sanitizedObject = "NULL";
                } else if (thirdArgumentMode === "array") {
                    let parsedObject = undefined;
                    if (typeof unsanitizedObject === "string") {
                        try {
                            parsedObject = JSON.parse(unsanitizedObject);
                        } catch (error) {
                            throw new Error("Required argument «where[" + index + "][3]» to be a well-formed JSON in order to «RestUtils.fromWhereToSQL»");
                        }
                    } else if (Array.isArray(unsanitizedObject)) {
                        parsedObject = unsanitizedObject;
                    } else {
                        throw new Error("Required argument «where[" + index + "][2]» to be an (optionally JSON) array in order to «RestUtils.fromWhereToSQL»");
                    }
                    if (!Array.isArray(parsedObject)) {
                        throw new Error("Required argument «where[" + index + "][2]» to be a JSON array in order to «RestUtils.fromWhereToSQL»");
                    } else if (parsedObject.length === 0) {
                        throw new Error("Required argument «where[" + index + "][2]» to be a JSON array with 1 or more items in order to «RestUtils.fromWhereToSQL»");
                    }
                    sanitizedObject = "(" + parsedObject.map(item => RestUtils.sanitize(item)) + ")";
                } else {
                    throw new Error("Required argument «where[" + index + "][3]» to be a a known mode in order to «RestUtils.fromWhereToSQL»");
                }
                return `    AND ${sanitizedSubject} ${sanitizedOperation} ${sanitizedObject}`;
            }).join("\n");
            if (wholeClause) {
                query = query.replace('    AND ', '  WHERE ');
            }
            return query;
        },
        fromOrderToSQL: function (order, wholeClause = true) {
            trace("RestUtils.fromOrderToSQL");
            if (!Array.isArray(order)) {
                throw new Error("Required parameter «order» to be an array in order to «fromOrderToSQL»");
            }
            if (order.length === 0) {
                return "# No ordering rules";
            }
            let query = order.map((orderRule, index) => {
                if (typeof orderRule !== "string") {
                    throw new Error("Required parameter «order[" + index + "]» to be a string in order «fromOrderToSQL»");
                }
                const isDescending = orderRule.startsWith("!");
                const orderColumn = isDescending ? orderRule.substr(1) : orderRule;
                return ", " + RestUtils.sanitizeId(orderColumn) + (isDescending ? ' DESC' : ' ASC');
            }).join(", ");
            if (wholeClause) {
                query = query.replace(', ', '  ORDER BY ');
            }
            return query;
        },
        fromGroupToSQL: function (groups, wholeClause = true) {
            trace("RestUtils.fromGroupToSQL");
            if (!Array.isArray(groups)) {
                throw new Error("Required parameter «groups» to be an array in order to «fromGroupToSQL»");
            }
            if (groups.length === 0) {
                return "# No grouping rules";
            }
            let query = groups.map((groupsRule, index) => {
                if (typeof groupsRule !== "string") {
                    throw new Error("Required parameter «groups[" + index + "]» to be a string in order «fromGroupToSQL»");
                }
                const isDescending = groupsRule.startsWith("!");
                const groupsColumn = isDescending ? groupsRule.substr(1) : groupsRule;
                return ", " + RestUtils.sanitizeId(groupsColumn) + (isDescending ? ' DESC' : ' ASC');
            }).join(", ");
            if (wholeClause) {
                query = query.replace(', ', '  GROUP BY ');
            }
            return query;
        },
        fromPaginationToSQL: function (pagination = []) {
            trace("RestUtils.fromPaginationToSQL");
            if (!Array.isArray(pagination)) {
                throw new Error("Required parameter «pagination» to be an array in order to «fromPaginationToSQL»");
            }
            const [page = 1, items = 20] = pagination;
            if (typeof page !== "number") {
                throw new Error("Required parameter «pagination[0]» to be an array in order to «fromPaginationToSQL»");
            }
            if (typeof items !== "number") {
                throw new Error("Required parameter «pagination[1]» to be an array in order to «fromPaginationToSQL»");
            }
            if (page < 0) {
                throw new Error("Required parameter «pagination[0]» to be a number higher or equal to 0 in order to «fromPaginationToSQL»");
            }
            if (items < 1) {
                throw new Error("Required parameter «pagination[1]» to be a number higher or equal to 1 in order to «fromPaginationToSQL»");
            }
            if (page === 0) {
                return "# No pagination rules";
            }
            const limit = items;
            const offset = (page - 1) * items;
            const query = [
                `  LIMIT ${limit}`,
                `  OFFSET ${offset}`,
            ].join("\n");
            return query;
        },
        fromItemToKeysSQL: function (item, wholeToken = true) {
            trace("RestUtils.fromItemToKeysSQL");
            if (typeof item !== "object") {
                throw new Error("Required argument «item» to be an object in order to «fromItemToKeysSQL»");
            }
            const keys = Object.keys(item);
            const query = keys.map(key => RestUtils.sanitizeId(key)).join(", ");
            if (wholeToken) {
                return "(" + query + ")";
            }
            return query;
        },
        fromItemsToKeysSQL: function (items, wholeExpression = true) {
            trace("RestUtils.fromItemsToKeysSQL");
            if (typeof items !== "object") {
                throw new Error("Required argument «items» to be an object in order to «fromItemsToKeysSQL»");
            }
            if (!Array.isArray(items)) {
                throw new Error("Required argument «items» to be an array in order to «fromItemsToKeysSQL»");
            }
            if (items.length === 0) {
                throw new Error("Required argument «items» to have one or more items in order to «fromItemsToKeysSQL»");
            }
            return this.fromItemToKeysSQL(items[0], wholeExpression);
        },
        fromItemToValuesSQL: function (item, wholeToken = true) {
            trace("RestUtils.fromItemToValuesSQL");
            if (typeof item !== "object") {
                throw new Error("Required argument «item» to be an object in order to «fromItemToValuesSQL»");
            }
            const keys = Object.keys(item);
            const query = keys.map(key => RestUtils.sanitize(item[key])).join(", ");
            if (wholeToken) {
                return "(" + query + ")";
            }
            return query;
        },
        fromItemToSettablesSQL: function (item, wholeToken = false) {
            trace("RestUtils.fromItemToSettablesSQL");
            if (typeof item !== "object") {
                throw new Error("Required argument «item» to be an object in order to «fromItemToSettablesSQL»");
            }
            const keys = Object.keys(item);
            const query = keys.map(key => "\n    " + RestUtils.sanitizeId(key) + " = " + RestUtils.sanitize(item[key])).join(",");
            if (wholeToken) {
                return "(" + query + ")";
            }
            return query;
        },
        fromItemsToValuesSQL: function (items, wholeExpression = true) {
            trace("RestUtils.fromItemsToValuesSQL");
            const query = items.map((item, index) => {
                if (typeof item !== "object") {
                    throw new Error("Required argument «items[" + index + "]» to be an object in order to «fromItemsToValuesSQL»");
                }
                const itemQuery = "(" + Object.keys(item).map((key, index) => {
                    return "\n    " + RestUtils.sanitize(item[key]);
                }).join(", ") + "\n  )";
                return itemQuery;
            }).join(", ");
            return query;
        },
        fromWhereToFilterFunction(whereRules) {
            const allFilters = [];
            for(let indexRules = 0; indexRules < whereRules.length; indexRules++) {
                const whereRule = whereRules[indexRules];
                const [subject, operator, target, targetType = "value"] = whereRule;
                const t1 = subject;
                const t2 = RestUtils.availableOperators[operator];
                const t3 = targetType === "value" ? target : targetType === "array" ? JSON.parse(target) : target;
                const partialFilter = item => {
                    // trace("RestUtils.fromWhereToFilterFunction:partialFilter");
                    if (!(t1 in item)) return false;
                    const s1 = item[t1];
                    const s2 = t2;
                    const s3 = t3;
                    switch (s2) {
                        case "<":
                            return s1 < s3;
                        case "<=":
                            return s1 <= s3;
                        case ">":
                            return s1 > s3;
                        case ">=":
                            return s1 >= s3;
                        case "!=":
                            return s1 !== s3;
                        case "=":
                            return s1 === s3;
                        case "!in":
                            return s3.indexOf(s1) === -1;
                        case "in":
                            return s3.indexOf(s1) !== -1;
                    }
                    return false;
                };
                allFilters.push((() => partialFilter)());
            };
            const finalFilter = function (item) {
                // trace("RestUtils.fromWhereToFilterFunction:finalFilter");
                for (let indexFilters = 0; indexFilters < allFilters.length; indexFilters++) {
                    const oneFilter = allFilters[indexFilters];
                    const result = oneFilter(item);
                    if (!result) {
                        return false;
                    }
                }
                return true;
            };
            return finalFilter;
        },
        fromURLToQuerystringObject(url) {
            const output = {};
            const searchParams = new URLSearchParams(this.require("url").parse(url).search);
            searchParams.forEach((value,key) => {
                output[key] = value;
            });
            return output;
        }
    };

    ////////////////////////////////////////////////////////////////////////
    // 1. RestInterface class:
    const RestInterface = function () { };
    RestInterface.prototype.initialize = function () { throw new Error("Required method «initialize» to be overriden") };
    RestInterface.prototype.selectMany = function (dataType, { where, order, groups, page, items }, authentication) { throw new Error("Required method «selectMany» to be overriden") };
    RestInterface.prototype.selectOne = function (dataType, { where, order }, authentication) { throw new Error("Required method «selectOne» to be overriden") };
    RestInterface.prototype.insertMany = function (dataType, { values }, authentication) { throw new Error("Required method «insertMany» to be overriden") };
    RestInterface.prototype.insertOne = function (dataType, { value }, authentication) { throw new Error("Required method «insertOne» to be overriden") };
    RestInterface.prototype.updateMany = function (dataType, { where, value }, authentication) { throw new Error("Required method «updateMany» to be overriden") };
    RestInterface.prototype.updateOne = function (dataType, { where, value }, authentication) { throw new Error("Required method «updateOne» to be overriden") };
    RestInterface.prototype.deleteMany = function (dataType, { where }, authentication) { throw new Error("Required method «deleteMany» to be overriden") };
    RestInterface.prototype.deleteOne = function (dataType, { where }, authentication) { throw new Error("Required method «deleteOne» to be overriden") };
    RestInterface.prototype.getFile = function (dataType, { id, column }, authentication) { throw new Error("Required method «getFile» to be overriden") };
    RestInterface.prototype.setFile = function (dataType, { id, column, file }, authentication) { throw new Error("Required method «setFile» to be overriden") };
    RestInterface.prototype.resetDatabase = function (authentication) { throw new Error("Required method «resetDatabase» to be overriden") };

    ////////////////////////////////////////////////////////////////////////
    // 2. AuthInterface class:
    const AuthInterface = function () { };
    AuthInterface.prototype.initialize = function () { throw new Error("Required method «initialize» to be overriden") };
    AuthInterface.prototype.authenticate = function (token) { throw new Error("Required method «authenticate» to be overriden") };
    AuthInterface.prototype.login = function ({ user, password }) { throw new Error("Required method «login» to be overriden") };
    AuthInterface.prototype.logout = function (token) { throw new Error("Required method «logout» to be overriden") };
    AuthInterface.prototype.refresh = function (token) { throw new Error("Required method «refresh» to be overriden") };
    AuthInterface.prototype.register = function ({ user, password, email }) { throw new Error("Required method «register» to be overriden") };
    AuthInterface.prototype.confirm = function (confirmationToken) { throw new Error("Required method «confirm» to be overriden") };
    AuthInterface.prototype.forgot = function () { throw new Error("Required method «forgot» to be overriden") };
    AuthInterface.prototype.recover = function (recoverToken) { throw new Error("Required method «recover» to be overriden") };
    AuthInterface.prototype.unregister = function () { throw new Error("Required method «unregister» to be overriden") };
    AuthInterface.prototype.hasAuthorizationFor = function () { throw new Error("Required method «isAuthorizedFor» to be overriden") };
    AuthInterface.prototype.resetAuth = function () { throw new Error("Required method «resetAuth» to be overriden") };

    ////////////////////////////////////////////////////////////////////////
    // 4. DataServer class:
    const DataServer = function (dynamicInterface = {}) {
        trace("DataServer.constructor");
        Object.assign(this, dynamicInterface);
        this.client = configurations.platform === "node" ? require("axios").create() : {};
        this.rest = undefined;
        this.auth = undefined;
        this.services = [];
        this.queries = [];
        this.processes = [];
        this.hooks = Hooks.create();
        this.basePathForData = "/rest/api/v1";
        this.basePathForAuth = "/auth/api/v1";
        this.basePathForQuery = "/query/api/v1";
        this.basePathForProcess = "/process/api/v1";

        return this;
    };
    DataServer.create = function (...args) {
        trace("DataServer.create");
        return new this(...args);
    };
    DataServer.initialize = function (...args) {
        trace("DataServer.initialize");
        return (new this(...args)).initialize();
    };
    DataServer.prototype.addService = function (...args) {
        trace("DataServer.prototype.addService");
        const [staticInterface = {}, dynamicInterface = {}, constructorFunctionParameter = undefined] = args;
        const constructorFunction = constructorFunctionParameter ? constructorFunctionParameter : RestUtils.basicServiceFactory()
        const service = constructorFunction;
        Object.assign(service, { ...DataService }, { ...staticInterface });
        Object.assign(service.prototype, { ...DataService.prototype }, { ...dynamicInterface }, {
            server: this
        });
        RestUtils.validateStaticServiceInterface(service);
        RestUtils.validateDynamicServiceInterface(service.prototype);
        this.services.push(service);
        return this;
    };
    DataServer.prototype.addQuery = function (...args) {
        trace("DataServer.prototype.addQuery");
        const [staticInterface = {}, dynamicInterface = {}, constructorFunctionParameter = undefined] = args;
        const constructorFunction = constructorFunctionParameter ? constructorFunctionParameter : RestUtils.basicQueryFactory()
        const queryClass = constructorFunction;
        Object.assign(queryClass, { ...QueryService }, { ...staticInterface });
        Object.assign(queryClass.prototype, { ...QueryService.prototype }, { ...dynamicInterface }, {
            server: this
        });
        RestUtils.validateStaticQueryInterface(queryClass);
        RestUtils.validateDynamicQueryInterface(queryClass.prototype);
        this.queries.push(queryClass);
        return this;
    };
    DataServer.prototype.addProcess = function (...args) {
        trace("DataServer.prototype.addProcess");
        const [staticInterface = {}, dynamicInterface = {}, constructorFunctionParameter = undefined] = args;
        const constructorFunction = constructorFunctionParameter ? constructorFunctionParameter : RestUtils.basicProcessFactory()
        const processClass = constructorFunction;
        Object.assign(processClass, { ...ProcessService }, { ...staticInterface });
        Object.assign(processClass.prototype, { ...ProcessService.prototype }, { ...dynamicInterface }, {
            server: this
        });
        RestUtils.validateStaticProcessInterface(processClass);
        RestUtils.validateDynamicProcessInterface(processClass.prototype);
        this.processes.push(processClass);
        return this;
    };
    const RequestPolyfill = function(method, url, others = {}) {
        trace("RequestPolyfill.constructor");
        this.method = method;
        this.url = url;
        Object.assign(this, others);
        return this;
    }
    const ResponsePolyfill = function() {
        trace("ResponsePolyfill.constructor");
        this.output = { status: 200, headers: {}, data: "", json: true };
        this.response_promise = new Promise((ok, fail) => {
            this.solve_response = ok;
            this.fail_response = fail;
        }).then(finalResponse => {
            if(finalResponse.status < 300 && finalResponse.status >= 200) {
                return finalResponse;
            }
            throw finalResponse;
        });
        this.writeHead = (statusCode, headers = {}) => {
            trace("ResponsePolyfill.prototype.writeHead");
            this.output.status = statusCode;
            Object.assign(this.output.headers, headers);
            return this;
        };
        this.write = (contents) => {
            trace("ResponsePolyfill.prototype.write");
            this.output.data += contents;
            return this;
        };
        this.end = (contents = "") => {
            trace("ResponsePolyfill.prototype.end");
            this.output.data += contents;
            if(this.output.json === true) {
                try {
                    this.output.data = JSON.parse(this.output.data);
                } catch(error) {
                    
                }
            }
            if(this.output.status < 300 && this.output.status >= 200) {
                this.output.statusText = "OK";
            } else {
                this.output.statusText = "Erroneous";
                this.output.name = this.output.data.error.name;
                this.output.message = this.output.data.error.message;
                this.output.stack = this.output.data.error.stack;
            }
            this.output.response = Object.assign({}, this.output);
            return this.solve_response(this.output);
        };
        return this;
    }
    DataServer.prototype.dispatch = function (request, response, fallback = RestUtils.basicControllerFallback) {
        trace("DataServer.prototype.dispatch");
        try {
            const path = RestUtils.require("path");
            const url = RestUtils.require("url");
            const parsedUrl = url.parse(request.url);
            if (parsedUrl.pathname.startsWith(this.basePathForData)) {
                for (let index = 0; index < this.services.length; index++) {
                    const service = this.services[index];
                    const serviceUrl = path.join(this.basePathForData, service.path) + "/";
                    if (parsedUrl.pathname.startsWith(serviceUrl)) {
                        trace("Dispatching by data service on: " + parsedUrl.pathname);
                        const serviceInstance = service.create({
                            server: this
                        });
                        return serviceInstance.dispatch(request, response);
                    }
                }
            } else if (parsedUrl.pathname.startsWith(this.basePathForAuth)) {
                trace("Dispatching by auth service on: " + parsedUrl.pathname);
                return this.auth.dispatch(request, response, fallback);
            } else if (parsedUrl.pathname.startsWith(this.basePathForQuery)) {
                trace("Dispatching by query service on: " + parsedUrl.pathname);
                const queryId = "/" + parsedUrl.pathname.replace(this.basePathForQuery, "").split("/").filter(it => it !== "").join("/");
                const matchedServices = this.queries.filter(x => x.path === queryId);
                if(matchedServices.length === 0) {
                    throw new Error("Required parameter «queryId» to be a known query in order to «DataServer.prototype.dispatch» (passed: «" + queryId + "») (available: «" + this.queries.map(x => x.path).join("» «") + "»)");
                }
                const [queryServiceClass] = matchedServices;
                const queryService = queryServiceClass.create({ server: this });
                return queryService.dispatch(request, response, fallback);
            } else if (parsedUrl.pathname.startsWith(this.basePathForProcess)) {
                trace("Dispatching by process service on: " + parsedUrl.pathname);
                const processId = "/" + parsedUrl.pathname.replace(this.basePathForProcess, "").split("/").filter(it => it !== "").join("/");
                const matchedServices = this.processes.filter(x => x.path === processId);
                if (matchedServices.length === 0) {
                    throw new Error("Required parameter «processId» to be a known process in order to «DataServer.prototype.dispatch» (passed: «" + processId + "») (available: «" + this.processes.map(x => x.path).join("» «") + "»)");
                }
                const [processServiceClass] = matchedServices;
                const processService = processServiceClass.create({ server: this });
                return processService.dispatch(request, response, fallback);
            }
            trace("Dispatching by fallback on: " + serviceUrl);
            return fallback(request, response);
        } catch (error) {
            return this.onDispatchError(error, request, response);
        }
    };
    DataServer.prototype.createDispatcher = function (fallback = RestUtils.basicControllerFallback) {
        trace("DataServer.prototype.createDispatcher");
        return (request, response) => this.dispatch(request, response, fallback);
    };
    DataServer.prototype.createHttpServerController = function () {
        trace("DataServer.prototype.createHttpServerController");
        const dispatcher = this.createDispatcher();
        return (request, response) => dispatcher(request, response);
    };
    DataServer.prototype.createHttpServer = function (fallback = RestUtils.basicControllerFallback) {
        trace("DataServer.prototype.createHttpServer");
        this.httpServer = RestUtils.require("http").createServer(this.createHttpServerController());
        return this.httpServer;
    };
    DataServer.prototype.listen = function (options) {
        trace("DataServer.prototype.listen");
        return new Promise((ok, fail) => {
            const httpServer = this.httpServer || this.createHttpServer();
            try {
                httpServer.listen(options, () => {
                    return ok(httpServer);
                });
            } catch (error) {
                return fail(error);
            }
        });
    };
    DataServer.prototype.stopDatabaseConnection = function () {
        trace("DataServer.prototype.stopDatabaseConnection");
        return this.rest.connection.end();
    };
    DataServer.prototype.stopHttpServer = function () {
        trace("DataServer.prototype.stopHttpServer");
        return this.httpServer.close();
    };
    DataServer.prototype.resetDatabase = function () {
        trace("DataServer.prototype.resetDatabase");
        return this.rest.resetDatabase();
    };
    DataServer.prototype.resetAuth = function () {
        trace("DataServer.prototype.resetAuth");
        return this.auth.resetAuth();
    };
    DataServer.prototype.dispatchSelf = function (method = "get", url = "/", requestArgs = {}, responseArgs = {}) {
        throw new Error("Required method «dispatchSelf» to be overriden");
    };
    DataServer.prototype.createClient = function (baseUrl = undefined) {
        trace("DataServer.prototype.createClient");
        if (typeof baseUrl !== "string") {
            throw new Error("Required argument «baseUrl» to be a string in order to «createClient»");
        }
        return new RestClient(baseUrl, { server: this });
    };
    DataServer.prototype.initialize = async function () {
        try {
            trace("DataServer.prototype.initialize");
            await this.initializeRest();
            await this.initializeAuth();
            return this;
        } catch (error) {
            this.onError(error);
        }
    };
    DataServer.prototype.initializeRest = async function () {
        try {
            trace("DataServer.prototype.initializeRest");
            let restAdapter = undefined;
            if (typeof this.adapter !== "string") {
                this.adapter = "mysql";
            }
            // @TOCONTINUE: continue adding other REST adapters on the following conditional:
            if (this.adapter === "mysql") {
                if (typeof this.credentials !== "object") {
                    throw new Error("Required parameter «this.credentials» to be an object in order to «initalizeRest» (on 'mysql' REST adapter)");
                }
                restAdapter = new RestByMySQL({
                    credentials: this.credentials,
                }, {
                    ...this.restExtension,
                    server: this,
                });
            } else {
                throw new Error("Required configuration «this.adapter» to be a valid option in order to «initializeRest»");
            }
            // @OK!
            this.rest = await restAdapter.initialize();
        } catch (error) {
            this.onError(error);
        }
    };
    DataServer.prototype.initializeAuth = async function () {
        try {
            trace("DataServer.prototype.initializeAuth");
            let authAdapter = undefined;
            if (typeof this.adapter !== "string") {
                this.adapter = "mysql";
            }
            // @TOCONTINUE: continue adding other AUTH adapters on the following conditional:
            if (this.adapter === "mysql") {
                if (typeof this.credentials !== "object") {
                    throw new Error("Required parameter «this.credentials» to be an object in order to «initializeAuth» (on 'mysql' REST adapter)");
                }
                authAdapter = new AuthByMySQL({
                    credentials: this.credentials,
                }, {
                    ...this.authExtension,
                    server: this,
                });
            } else {
                throw new Error("Required parameter «adapter» to be a valid option in order to «initializeRest»");
            }
            // @OK!
            this.auth = await authAdapter.initialize();
        } catch (error) {
            this.onError(error);
        }
    };

    ////////////////////////////////////////////////////////////////////////
    // 5. DataService class:
    const DataService = function (dynamicInterface = {}) {
        trace("DataService.constructor");
        Object.assign(this, dynamicInterface);
        return this;
    };
    DataService.create = function (...args) {
        trace("DataService.create");
        return new this(...args);
    };
    DataService.initialize = function (...args) {
        trace("DataService.initialize");
        return (new this(...args)).initialize();
    };
    DataService.path = "/customize/path/here";
    DataService.prototype.initialize = async function () {
        try {
            trace("DataService.prototype.initialize");
            return this;
        } catch (error) {
            this.onError(error);
        }
    };
    DataService.prototype.generateContext = RestUtils.generateContextByRequestResponseFactory("DataService.prototype.generateContext");
    DataService.prototype.dispatch = function (request, response) {
        trace("DataService.prototype.dispatch");
        const parsedUrl = RestUtils.require("url").parse(request.url);
        if (parsedUrl.pathname.startsWith(this.server.basePathForData)) {
            const actionPath = parsedUrl.pathname.replace(this.server.basePathForData, "").replace(this.constructor.path, "");
            if (false) {
                return false;
            } else if (actionPath === "/define") {
                return this.dispatchDefine(request, response);
            } else if (actionPath === "/select/one") {
                return this.dispatchSelectOne(request, response);
            } else if (actionPath === "/select/many") {
                return this.dispatchSelectMany(request, response);
            } else if (actionPath === "/insert/one") {
                return this.dispatchInsertOne(request, response);
            } else if (actionPath === "/insert/many") {
                return this.dispatchInsertMany(request, response);
            } else if (actionPath === "/update/one") {
                return this.dispatchUpdateOne(request, response);
            } else if (actionPath === "/update/many") {
                return this.dispatchUpdateMany(request, response);
            } else if (actionPath === "/delete/one") {
                return this.dispatchDeleteOne(request, response);
            } else if (actionPath === "/delete/many") {
                return this.dispatchDeleteMany(request, response);
            } else if (actionPath === "/get/file") {
                return this.dispatchGetFile(request, response);
            } else if (actionPath === "/set/file") {
                return this.dispatchSetFile(request, response);
            } else {
                return this.onDispatchError(new Error("Required action path to be valid in order to «dispatch» (passed: «" + actionPath + "»)"), request, response);
            }
        } else {
            return this.onDispatchError(new Error("Required url path to be valid in order to «dispatch» (passed: «" + parsedUrl.pathname + "»)"), request, response);
        }
    };
    DataService.prototype.dispatchDefine = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchDefine");
            const context = this.generateContext(request, response);
            await this.onDefine(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    DataService.prototype.dispatchSelectOne = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchSelectOne");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForSelectOne(context);
            await this.onQueryForSelectOne(context);
            await this.onFormatOutputForSelectOne(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    DataService.prototype.dispatchSelectMany = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchSelectMany");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForSelectMany(context);
            await this.onQueryForSelectMany(context);
            await this.onFormatOutputForSelectMany(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    DataService.prototype.dispatchInsertOne = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchInsertOne");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForInsertOne(context);
            await this.onQueryForInsertOne(context);
            await this.onFormatOutputForInsertOne(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    DataService.prototype.dispatchInsertMany = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchInsertMany");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForInsertMany(context);
            await this.onQueryForInsertMany(context);
            await this.onFormatOutputForInsertMany(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    DataService.prototype.dispatchUpdateOne = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchUpdateOne");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForUpdateOne(context);
            await this.onQueryForUpdateOne(context);
            await this.onFormatOutputForUpdateOne(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    DataService.prototype.dispatchUpdateMany = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchUpdateMany");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForUpdateMany(context);
            await this.onQueryForUpdateMany(context);
            await this.onFormatOutputForUpdateMany(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    DataService.prototype.dispatchDeleteOne = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchDeleteOne");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForDeleteOne(context);
            await this.onQueryForDeleteOne(context);
            await this.onFormatOutputForDeleteOne(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    DataService.prototype.dispatchDeleteMany = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchDeleteMany");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForDeleteMany(context);
            await this.onQueryForDeleteMany(context);
            await this.onFormatOutputForDeleteMany(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    DataService.prototype.dispatchGetFile = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchGetFile");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForGetFile(context);
            await this.onQueryForGetFile(context);
            await this.onServeFile(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    DataService.prototype.dispatchSetFile = async function (request, response) {
        try {
            trace("DataService.prototype.dispatchSetFile");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForSetFile(context);
            await this.onQueryForSetFile(context);
            await this.onPersistFile(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };

    //////////////////////////////////////////////////////
    // (01) Service for SELECT ONE:
    DataService.prototype.onFormatParametersForSelectOne = async function (context) {
        trace("DataService.prototype.onFormatParametersForSelectOne");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatParameters::before", { context });
        context.parameters.table = this.constructor.table;
        context.parameters.path = this.constructor.path;
        context.parameters.where = RestUtils.formatWhereFromRequest(context);
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatParameters::after", { context });
        return true;
    };
    DataService.prototype.onQueryForSelectOne = function (context) {
        trace("DataService.prototype.onQueryForSelectOne");
        return this.server.rest.selectOne(context.parameters.table, {
            where: context.parameters.where
        }).then(data => {
            context.state.queryResults = data;
            return data;
        });
    };
    DataService.prototype.onFormatOutputForSelectOne = async function (context) {
        trace("DataService.prototype.onFormatOutputForSelectOne");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatOutput::before", { context });
        context.output = {
            data: context.state.queryResults,
            metadata: {
                path: this.server.basePathForData + this.constructor.path + "/select/one",
                model: this.constructor.table,
                action: "/select/one",
            }
        };
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatOutput::after", { context });
    };

    //////////////////////////////////////////////////////
    // (02) Service for SELECT MANY:
    DataService.prototype.onFormatParametersForSelectMany = async function (context) {
        trace("DataService.prototype.onFormatParametersForSelectMany");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatParameters::before", { context });
        context.parameters.table = this.constructor.table;
        context.parameters.path = this.constructor.path;
        context.parameters.where = RestUtils.formatWhereFromRequest(context);
        context.parameters.order = RestUtils.formatOrderFromRequest(context);
        context.parameters.group = RestUtils.formatGroupFromRequest(context);
        context.parameters.pagination = RestUtils.formatPaginationFromRequest(context);
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatParameters::after", { context });
    };
    DataService.prototype.onQueryForSelectMany = function (context) {
        trace("DataService.prototype.onQueryForSelectMany");
        return this.server.rest.selectMany(context.parameters.table, {
            where: context.parameters.where,
            order: context.parameters.order,
            group: context.parameters.group,
            pagination: context.parameters.pagination,
        }).then(data => {
            context.state.queryResults = data;
            return data;
        });
    };
    DataService.prototype.onFormatOutputForSelectMany = async function (context) {
        trace("DataService.prototype.onFormatOutputForSelectMany");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatOutput::before", { context });
        context.output = {
            data: context.state.queryResults,
            metadata: {
                path: this.server.basePathForData + this.constructor.path + "/select/many",
                model: this.constructor.table,
                action: "/select/many",
            }
        };
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatOutput::after", { context });
    };

    //////////////////////////////////////////////////////
    // (03) Service for INSERT ONE:
    DataService.prototype.onFormatParametersForInsertOne = async function (context) {
        trace("DataService.prototype.onFormatParametersForInsertOne");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatParameters::before", { context });
        context.parameters.table = this.constructor.table;
        context.parameters.path = this.constructor.path;
        context.parameters.item = RestUtils.formatItemFromRequest(context);
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatParameters::after", { context });
    };
    DataService.prototype.onQueryForInsertOne = function (context) {
        trace("DataService.prototype.onQueryForInsertOne");
        return this.server.rest.insertOne(context.parameters.table, {
            item: context.parameters.item,
        }).then(data => {
            context.state.queryResults = data;
            return data;
        });
    };
    DataService.prototype.onFormatOutputForInsertOne = async function (context) {
        trace("DataService.prototype.onFormatOutputForInsertOne");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatOutput::before", { context });
        context.output = {
            data: context.state.queryResults,
            metadata: {
                path: this.server.basePathForData + this.constructor.path + "/insert/one",
                model: this.constructor.table,
                action: "/insert/one",
            }
        };
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatOutput::after", { context });
    };

    //////////////////////////////////////////////////////
    // (04) Service for INSERT MANY:
    DataService.prototype.onFormatParametersForInsertMany = async function (context) {
        trace("DataService.prototype.onFormatParametersForInsertMany");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatParameters::before", { context });
        console.log(context);
        context.parameters.table = this.constructor.table;
        context.parameters.path = this.constructor.path;
        context.parameters.items = RestUtils.formatItemsFromRequest(context);
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatParameters::after", { context });
    };
    DataService.prototype.onQueryForInsertMany = function (context) {
        trace("DataService.prototype.onQueryForInsertMany");
        return this.server.rest.insertMany(context.parameters.table, {
            items: context.parameters.items,
        }).then(data => {
            context.state.queryResults = data;
            return data;
        });
    };
    DataService.prototype.onFormatOutputForInsertMany = async function (context) {
        trace("DataService.prototype.onFormatOutputForInsertMany");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatOutput::before", { context });
        context.output = {
            data: context.state.queryResults,
            metadata: {
                path: this.server.basePathForData + this.constructor.path + "/insert/many",
                model: this.constructor.table,
                action: "/insert/many",
            }
        };
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatOutput::after", { context });
    };

    //////////////////////////////////////////////////////
    // (05) Service for UPDATE ONE:
    DataService.prototype.onFormatParametersForUpdateOne = async function (context) {
        trace("DataService.prototype.onFormatParametersForUpdateOne");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatParameters::before", { context });
        context.parameters.table = this.constructor.table;
        context.parameters.path = this.constructor.path;
        context.parameters.where = RestUtils.formatWhereFromRequest(context);
        context.parameters.values = RestUtils.formatValuesFromRequest(context);
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatParameters::after", { context });
    };
    DataService.prototype.onQueryForUpdateOne = function (context) {
        trace("DataService.prototype.onQueryForUpdateOne");
        return this.server.rest.updateOne(context.parameters.table, {
            where: context.parameters.where,
            values: context.parameters.values,
        }).then(data => {
            context.state.queryResults = data;
            return data;
        });
    };
    DataService.prototype.onFormatOutputForUpdateOne = async function (context) {
        trace("DataService.prototype.onFormatOutputForUpdateOne");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatOutput::before", { context });
        context.output = {
            data: context.state.queryResults,
            metadata: {
                path: this.server.basePathForData + this.constructor.path + "/update/one",
                model: this.constructor.table,
                action: "/update/one",
            }
        };
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatOutput::after", { context });
    };

    //////////////////////////////////////////////////////
    // (06) Service for UPDATE MANY:
    DataService.prototype.onFormatParametersForUpdateMany = async function (context) {
        trace("DataService.prototype.onFormatParametersForUpdateMany");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatParameters::before", { context });
        context.parameters.table = this.constructor.table;
        context.parameters.path = this.constructor.path;
        context.parameters.where = RestUtils.formatWhereFromRequest(context);
        context.parameters.values = RestUtils.formatValuesFromRequest(context);
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatParameters::after", { context });
    };
    DataService.prototype.onQueryForUpdateMany = function (context) {
        trace("DataService.prototype.onQueryForUpdateMany");
        return this.server.rest.updateMany(context.parameters.table, {
            where: context.parameters.where,
            values: context.parameters.values,
        }).then(data => {
            context.state.queryResults = data;
            return data;
        });
    };
    DataService.prototype.onFormatOutputForUpdateMany = async function (context) {
        trace("DataService.prototype.onFormatOutputForUpdateMany");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatOutput::before", { context });
        context.output = {
            data: context.state.queryResults,
            metadata: {
                path: this.server.basePathForData + this.constructor.path + "/update/many",
                model: this.constructor.table,
                action: "/update/many",
            }
        };
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatOutput::after", { context });
    };

    //////////////////////////////////////////////////////
    // (07) Service for DELETE ONE:
    DataService.prototype.onFormatParametersForDeleteOne = async function (context) {
        trace("DataService.prototype.onFormatParametersForDeleteOne");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatParameters::before", { context });
        context.parameters.table = this.constructor.table;
        context.parameters.path = this.constructor.path;
        context.parameters.where = RestUtils.formatWhereFromRequest(context);
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatParameters::after", { context });
    };
    DataService.prototype.onQueryForDeleteOne = function (context) {
        trace("DataService.prototype.onQueryForDeleteOne");
        return this.server.rest.deleteOne(context.parameters.table, {
            where: context.parameters.where,
        }).then(data => {
            context.state.queryResults = data;
            return data;
        });
    };
    DataService.prototype.onFormatOutputForDeleteOne = async function (context) {
        trace("DataService.prototype.onFormatOutputForDeleteOne");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatOutput::before", { context });
        context.output = {
            data: context.state.queryResults,
            metadata: {
                path: this.server.basePathForData + this.constructor.path + "/delete/one",
                model: this.constructor.table,
                action: "/delete/one",
            }
        };
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatOutput::after", { context });
    };

    //////////////////////////////////////////////////////
    // (08) Service for DELETE MANY:
    DataService.prototype.onFormatParametersForDeleteMany = async function (context) {
        trace("DataService.prototype.onFormatParametersForDeleteMany");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatParameters::before", { context });
        context.parameters.table = this.constructor.table;
        context.parameters.path = this.constructor.path;
        context.parameters.where = RestUtils.formatWhereFromRequest(context);
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatParameters::after", { context });
    };
    DataService.prototype.onQueryForDeleteMany = function (context) {
        trace("DataService.prototype.onQueryForDeleteMany");
        return this.server.rest.deleteMany(context.parameters.table, {
            where: context.parameters.where,
        }).then(data => {
            context.state.queryResults = data;
            return data;
        });
    };
    DataService.prototype.onFormatOutputForDeleteMany = async function (context) {
        trace("DataService.prototype.onFormatOutputForDeleteMany");
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatOutput::before", { context });
        context.output = {
            data: context.state.queryResults,
            metadata: {
                path: this.server.basePathForData + this.constructor.path + "/delete/many",
                model: this.constructor.table,
                action: "/delete/many",
            }
        };
        await this.server.hooks.useHook("service://" + context.input.url.replace(/^\//g,"") + "@onFormatOutput::after", { context });
    };

    //////////////////////////////////////////////////////
    // (09) Service for GET FILE:
    DataService.prototype.onFormatParametersForGetFile = function (context) {
        trace("DataService.prototype.onFormatParametersForGetFile");
    };
    DataService.prototype.onQueryForGetFile = function (context) {
        trace("DataService.prototype.onQueryForGetFile");
    };
    DataService.prototype.onServeFile = function (context) {
        trace("DataService.prototype.onServeFile");
        throw new Error("Required «DataService.prototype.onServeFile» to be overriden");
    };

    //////////////////////////////////////////////////////
    // (10) Service for SET FILE:
    DataService.prototype.onFormatParametersForSetFile = function (context) {
        trace("DataService.prototype.onFormatParametersForSetFile");
    };
    DataService.prototype.onQueryForSetFile = function (context) {
        trace("DataService.prototype.onQueryForSetFile");
    };
    DataService.prototype.onPersistFile = function (context) {
        trace("DataService.prototype.onPersistFile");
        throw new Error("Required «DataService.prototype.onPersistFile» to be overriden");
    };
    DataService.prototype.onRespond = function (context) {
        trace("DataService.prototype.onRespond");
        return RestUtils.respondContext(context);
    };
    DataService.prototype.onDefine = function (context) {
        trace("DataService.prototype.onDefine");
        const publicFieldIds = this.constructor.publicFields || ["id", "path", "table", "class", "schema"];
        const data = {};
        for (let index = 0; index < publicFieldIds.length; index++) {
            const publicFieldId = publicFieldIds[index];
            data[publicFieldId] = this.constructor[publicFieldId];
        }
        context.output = {
            data,
            metadata: {
                path: this.server.basePathForData + this.constructor.path + "/define",
                model: this.constructor.table,
                action: "/define",
            }
        };
    };
    DataService.prototype.setServer = function (server) {
        trace("DataService.prototype.setServer");
        this.server = server;
        return this;
    };


    const QueryService = function (dynamicInterface = {}) {
        trace("QueryService.constructor");
        Object.assign(this, dynamicInterface);
        return this;
    };
    QueryService.create = function(...args) {
        return new this(...args);
    };
    QueryService.prototype = { ...DataService.prototype };
    QueryService.prototype.getParametersByURL = function(url) {
        trace("QueryService.prototype.getParametersByURL");
        const parsedUrl = RestUtils.require("url").parse(url);
        const urlStarter = RestUtils.require("path").join(this.server.basePathForQuery, this.constructor.path);
        const extraPath = parsedUrl.pathname.replace(urlStarter, "");
        return extraPath;
    };
    QueryService.prototype.serve = function(status, headers, body, response) {
        trace("QueryService.prototype.serve");
        const responseHeaders = Object.assign({ "Content-type": "application/json" }, headers);
        response.writeHead(status, responseHeaders);
        response.write(typeof body === "string" ? body : JSON.stringify(body));
        return response.end();
    };
    QueryService.prototype.onDispatchQuery = function(request, response, fallback) {
        trace("QueryService.prototype.onDispatchQuery");
        return this.constructor.query.call(this, request, response, fallback);
    };
    QueryService.prototype.dispatch = function (request, response, fallback = RestUtils.noop) {
        trace("QueryService.prototype.dispatch");
        const parsedUrl = RestUtils.require("url").parse(request.url);
        const urlStarter = RestUtils.require("path").join(this.server.basePathForQuery, this.constructor.path);
        if (parsedUrl.pathname.startsWith(urlStarter)) {
            return this.onDispatchQuery(request, response, fallback);
        } else {
            return this.onDispatchError(new Error("Required url path to be valid in order to «QueryService.prototype.dispatch» (passed: «" + parsedUrl.pathname + "») (valid: «" + urlStarter + "»)"), request, response);
        }
    };
    const ProcessService = function (dynamicInterface = {}) {
        trace("ProcessService.constructor");
        Object.assign(this, dynamicInterface);
        return this;
    };
    ProcessService.create = function (...args) {
        return new this(...args);
    };
    ProcessService.prototype = { ...DataService.prototype };
    ProcessService.prototype.getParametersByURL = function (url) {
        trace("ProcessService.prototype.getParametersByURL");
        const parsedUrl = RestUtils.require("url").parse(url);
        const urlStarter = RestUtils.require("path").join(this.server.basePathForQuery, this.constructor.path);
        const extraPath = parsedUrl.pathname.replace(urlStarter, "");
        return extraPath;
    };
    ProcessService.prototype.serve = function (status, headers, body, response) {
        trace("ProcessService.prototype.serve");
        const responseHeaders = Object.assign({ "Content-type": "application/json" }, headers);
        response.writeHead(status, responseHeaders);
        response.write(typeof body === "string" ? body : JSON.stringify(body));
        return response.end();
    };
    ProcessService.prototype.onDispatchProcess = function (request, response, fallback) {
        trace("ProcessService.prototype.onDispatchProcess");
        return this.constructor.process.call(this, request, response, fallback);
        const parsedUrl = RestUtils.require("url").parse(request.url);
        const urlStarter = RestUtils.require("path").join(this.server.basePathForProcess, this.constructor.path);
        const extraPath = parsedUrl.pathname.replace(urlStarter, "");
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify({
            process: urlStarter,
            subroute: extraPath
        }));
        return response.end();
    };
    ProcessService.prototype.dispatch = function (request, response, fallback = RestUtils.noop) {
        trace("ProcessService.prototype.dispatch");
        const parsedUrl = RestUtils.require("url").parse(request.url);
        const urlStarter = RestUtils.require("path").join(this.server.basePathForProcess, this.constructor.path);
        if (parsedUrl.pathname.startsWith(urlStarter)) {
            return this.onDispatchProcess(request, response, fallback);
        } else {
            return this.onDispatchError(new Error("Required url path to be valid in order to «ProcessService.prototype.dispatch» (passed: «" + parsedUrl.pathname + "») (valid: «" + urlStarter + "»)"), request, response);
        }
    };

    ////////////////////////////////////////////////////////////////////////
    // 7. RestByMySQL class:
    const RestByMySQL = function (options, extensions = {}) {
        trace("RestByMySQL.constructor");
        if (typeof options !== "object") {
            throw new Error("Required parameter «options» to be an object in order to «RestByMySQL.constructor»");
        }
        if (typeof options.credentials !== "object") {
            throw new Error("Required parameter «options.credentials» to be an object in order to «RestByMySQL.constructor»");
        }
        if (typeof extensions !== "object") {
            throw new Error("Required parameter «extensions» to be an object in order to «RestByMySQL.constructor»");
        }
        this.credentials = options.credentials;
        Object.assign(this, extensions);
        return this;
    };
    Object.assign(RestByMySQL.prototype, { ...RestInterface.prototype });
    RestByMySQL.prototype.initialize = async function () {
        try {
            trace("RestByMySQL.prototype.initialize");
            this.connection = await RestUtils.require("mysql2/promise").createConnection(this.credentials);
            this.connection = RestUtils.expandConnection(this.connection);
            await this.connection.ping();
            return this;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.selectMany = async function (dataType, { where = [], order = [], groups = [], pagination = [1, 20] }, authentication) {
        try {
            trace("RestByMySQL.prototype.selectMany");
            const sanitizedTable = dataType;
            const sanitizedWhere = RestUtils.fromWhereToSQL(where);
            const sanitizedGroup = RestUtils.fromGroupToSQL(groups);
            const sanitizedOrder = RestUtils.fromOrderToSQL(order);
            const sanitizedPagination = RestUtils.fromPaginationToSQL(pagination);
            const query = [
                `# Select many query:`,
                `SELECT * `,
                `  FROM ${sanitizedTable}`,
                `  WHERE 1 = 1`,
                sanitizedWhere,
                sanitizedGroup,
                sanitizedOrder,
                sanitizedPagination,
            ].join("\n");
            const resultsReport = await this.connection.proxifiedQuery(query);
            const [results] = resultsReport;
            const context = { dataType, where, order, groups, pagination, authentication, query, results };
            await this.server.hooks.useHook("api://rest.selectMany::after", { context });
            await this.server.hooks.useHook("api://rest.selectMany:" + dataType + "::after", { context });
            return results;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.selectOne = async function (dataType, { where = [] }, authentication) {
        try {
            trace("RestByMySQL.prototype.selectOne");
            const sanitizedTable = dataType;
            const sanitizedWhere = RestUtils.fromWhereToSQL(where);
            const query = [
                `# Select one query:`,
                `SELECT * `,
                `  FROM ${sanitizedTable}`,
                `  WHERE 1 = 1`,
                sanitizedWhere,
            ].join("\n");
            const resultsReport = await this.connection.proxifiedQuery(query);
            const [results] = resultsReport;
            if (results.length === 0) {
                throw new Error("No items were found on «" + dataType + "» by using the specified filters on «RestByMySQL.prototype.selectOne»");
            } else if (results.length !== 1) {
                throw new Error("More than 1 item was found on «" + dataType + "» by using the specified filters on «RestByMySQL.prototype.selectOne»");
            }
            const context = { dataType, where, authentication, query, results };
            await this.server.hooks.useHook("api://rest.selectOne::after", { context });
            await this.server.hooks.useHook("api://rest.selectOne:" + dataType + "::after", { context });
            return results[0];
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.insertMany = async function (dataType, { items }, authentication) {
        try {
            trace("RestByMySQL.prototype.insertMany");
            const sanitizedTable = dataType;
            const sanitizedKeys = RestUtils.fromItemsToKeysSQL(items);
            const sanitizedValues = RestUtils.fromItemsToValuesSQL(items);
            const query = [
                `# Insert many query:`,
                `INSERT `,
                `  INTO ${sanitizedTable} ${sanitizedKeys}`,
                `  VALUES ${sanitizedValues}`,
            ].join("\n");
            const results = await this.connection.proxifiedQuery(query);
            const [unsanitizedReport] = results;
            const sanitizedReport = {
                firstId: unsanitizedReport.insertId,
                rows: unsanitizedReport.affectedRows,
            };
            const context = { dataType, items, authentication, query, results, sanitizedReport };
            await this.server.hooks.useHook("api://rest.insertMany::after", { context });
            await this.server.hooks.useHook("api://rest.insertMany:" + dataType + "::after", { context });
            return sanitizedReport;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.insertOne = async function (dataType, { item }, authentication) {
        try {
            trace("RestByMySQL.prototype.insertOne");
            const sanitizedTable = dataType;
            const sanitizedKeys = RestUtils.fromItemToKeysSQL(item);
            const sanitizedValues = RestUtils.fromItemToValuesSQL(item);
            const query = [
                `# Insert one query:`,
                `INSERT `,
                `  INTO ${sanitizedTable} ${sanitizedKeys}`,
                `  VALUES ${sanitizedValues}`,
            ].join("\n");
            const results = await this.connection.proxifiedQuery(query);
            const [unsanitizedReport] = results;
            const sanitizedReport = {
                id: unsanitizedReport.insertId,
                rows: unsanitizedReport.affectedRows,
            };
            const context = { dataType, item, authentication, query, results, sanitizedReport };
            await this.server.hooks.useHook("api://rest.insertOne::after", { context });
            await this.server.hooks.useHook("api://rest.insertOne:" + dataType + "::after", { context });
            return sanitizedReport;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.updateMany = async function (dataType, { where, values }, authentication) {
        try {
            trace("RestByMySQL.prototype.updateMany");
            const sanitizedTable = dataType;
            const sanitizedWhere = RestUtils.fromWhereToSQL(where);
            const sanitizedSettables = RestUtils.fromItemToSettablesSQL(values);
            const query = [
                `# Update many query:`,
                `UPDATE ${sanitizedTable}`,
                `  SET ${sanitizedSettables}`,
                `  WHERE 1 = 1`,
                sanitizedWhere,
            ].join("\n");
            const results = await this.connection.proxifiedQuery(query);
            const [unsanitizedReport] = results;
            const sanitizedReport = {
                rows: unsanitizedReport.affectedRows,
            };
            const context = { dataType, where, values, authentication, query, results, sanitizedReport };
            await this.server.hooks.useHook("api://rest.updateMany::after", { context });
            await this.server.hooks.useHook("api://rest.updateMany:" + dataType + "::after", { context });
            return sanitizedReport;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.updateOne = async function (dataType, { where, values }, authentication) {
        try {
            trace("RestByMySQL.prototype.updateOne");
            const sanitizedTable = dataType;
            const sanitizedWhere = RestUtils.fromWhereToSQL(where);
            const sanitizedSettables = RestUtils.fromItemToSettablesSQL(values);
            const querySelectOne = [
                `# Select one query (in order to update one):`,
                `SELECT * `,
                `  FROM ${sanitizedTable}`,
                `  WHERE 1 = 1`,
                sanitizedWhere,
            ].join("\n");
            const [selectionReport] = await this.connection.proxifiedQuery(querySelectOne);
            if (selectionReport.length === 0) {
                throw new Error("No items were found on «" + dataType + "» by using the specified filters on «RestByMySQL.prototype.updateOne»");
            } else if (selectionReport.length !== 1) {
                throw new Error("More than 1 item was found on «" + dataType + "» by using the specified filters on «RestByMySQL.prototype.updateOne»");
            }
            const query = [
                `# Update one query:`,
                `UPDATE ${sanitizedTable}`,
                `  SET ${sanitizedSettables}`,
                `  WHERE 1 = 1`,
                sanitizedWhere,
            ].join("\n");
            const results = await this.connection.proxifiedQuery(query);
            const [unsanitizedReport] = results;
            const sanitizedReport = {
                rows: unsanitizedReport.affectedRows,
            };
            const context = { dataType, where, values, authentication, query, results, sanitizedReport };
            await this.server.hooks.useHook("api://rest.updateOne::after", { context });
            await this.server.hooks.useHook("api://rest.updateOne:" + dataType + "::after", { context });
            return sanitizedReport;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.deleteMany = async function (dataType, { where }, authentication) {
        try {
            trace("RestByMySQL.prototype.deleteMany");
            const sanitizedTable = dataType;
            const sanitizedWhere = RestUtils.fromWhereToSQL(where);
            const query = [
                `# Delete many query:`,
                `DELETE`,
                `  FROM ${sanitizedTable}`,
                `  WHERE 1 = 1`,
                sanitizedWhere,
            ].join("\n");
            const results = await this.connection.proxifiedQuery(query);
            const [unsanitizedReport] = results;
            const sanitizedReport = {
                rows: unsanitizedReport.affectedRows,
            };
            const context = { dataType, where, authentication, query, results, sanitizedReport };
            await this.server.hooks.useHook("api://rest.deleteMany::after", { context });
            await this.server.hooks.useHook("api://rest.deleteMany:" + dataType + "::after", { context });
            return sanitizedReport;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.deleteOne = async function (dataType, { where }, authentication) {
        try {
            trace("RestByMySQL.prototype.deleteOne");
            const sanitizedTable = dataType;
            const sanitizedWhere = RestUtils.fromWhereToSQL(where);
            const querySelectOne = [
                `# Select one query (in order to delete one):`,
                `SELECT * `,
                `  FROM ${sanitizedTable}`,
                `  WHERE 1 = 1`,
                sanitizedWhere,
            ].join("\n");
            const [selectionReport] = await this.connection.proxifiedQuery(querySelectOne);
            if (selectionReport.length === 0) {
                throw new Error("No items were found on «" + dataType + "» by using the specified filters on «RestByMySQL.prototype.deleteOne»");
            } else if (selectionReport.length !== 1) {
                throw new Error("More than 1 item was found on «" + dataType + "» by using the specified filters on «RestByMySQL.prototype.deleteOne»");
            }
            const query = [
                `# Delete one query:`,
                `DELETE`,
                `  FROM ${sanitizedTable}`,
                `  WHERE 1 = 1`,
                sanitizedWhere,
            ].join("\n");
            const results = await this.connection.proxifiedQuery(query);
            const [unsanitizedReport] = results;
            const sanitizedReport = {
                rows: unsanitizedReport.affectedRows,
            };
            const context = { dataType, where, authentication, query, results, sanitizedReport };
            await this.server.hooks.useHook("api://rest.deleteOne::after", { context });
            await this.server.hooks.useHook("api://rest.deleteOne:" + dataType + "::after", { context });
            return sanitizedReport;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.getFile = async function (dataType, { id, column }, authentication) {
        try {
            trace("RestByMySQL.prototype.getFile");
            // @TODO...
            // @TODO...
            // @TODO...
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.setFile = async function (dataType, { id, column, file }, authentication) {
        try {
            trace("RestByMySQL.prototype.setFile");
            // @TODO...
            // @TODO...
            // @TODO...
        } catch (error) {
            this.onError(error);
        }
    };
    RestByMySQL.prototype.resetDatabase = async function (authentication) {
        try {
            trace("RestByMySQL.prototype.resetDatabase");
            await this.connection.proxifiedQuery([
                `DROP DATABASE IF EXISTS ${this.credentials.database};`
            ].join("\n"));
            await this.connection.proxifiedQuery([
                `CREATE DATABASE ${this.credentials.database};`
            ].join("\n"));
            await this.connection.proxifiedQuery([
                `USE ${this.credentials.database};`
            ].join("\n"));
            if(this.server.auth && this.server.auth.resetAuth) {
                await this.server.auth.resetAuth();
            }
            const allServices = this.server.services;
            for (let indexService = 0; indexService < allServices.length; indexService++) {
                const serviceClass = allServices[indexService];
                await (async (serviceClass) => {
                    if (typeof serviceClass.creationScript === "string") {
                        await this.connection.proxifiedQuery(serviceClass.creationScript);
                    }
                })(serviceClass);
            }
            if (typeof this.seeder === "function") {
                await this.seeder(authentication);
            }
        } catch (error) {
            this.onError(error);
        }
    };

    ////////////////////////////////////////////////////////////////////////
    // 10. AuthByMySQL class:
    const AuthByMySQL = function (options, extensions = {}) {
        trace("AuthByMySQL.constructor");
        if (typeof options !== "object") {
            throw new Error("Required parameter «options» to be an object in order to «AuthByMySQL.constructor»");
        }
        if (typeof options.credentials !== "object") {
            throw new Error("Required parameter «options.credentials» to be an object in order to «AuthByMySQL.constructor»");
        }
        if (typeof extensions !== "object") {
            throw new Error("Required parameter «extensions» to be an object in order to «AuthByMySQL.constructor»");
        }
        this.credentials = options.credentials;
        Object.assign(this, extensions);
        return this;
    };
    Object.assign(AuthByMySQL.prototype, { ...AuthInterface });
    AuthByMySQL.prototype.initialize = async function () {
        try {
            trace("AuthByMySQL.prototype.initialize");
            // @TODO...
            // @TODO...
            // @TODO...
            return this;
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onRespond = function (context) {
        trace("AuthByMySQL.prototype.onRespond");
        return RestUtils.respondContext(context);
    };
    AuthByMySQL.prototype.dispatch = async function (request, response, fallback = RestUtils.basicControllerFallback) {
        trace("AuthByMySQL.prototype.dispatch");
        const parsedUrl = RestUtils.require("url").parse(request.url);
        if (parsedUrl.pathname.startsWith(this.server.basePathForAuth)) {
            const actionPath = parsedUrl.pathname.replace(this.server.basePathForAuth, "").replace(this.constructor.path, "");
            if (false) {
                return false;
            } else if (actionPath === "/register") {
                return this.dispatchRegister(request, response);
            } else if (actionPath === "/confirm") {
                return this.dispatchConfirm(request, response);
            } else if (actionPath === "/login") {
                return this.dispatchLogin(request, response);
            } else if (actionPath === "/logout") {
                return this.dispatchLogout(request, response);
            } else if (actionPath === "/forgot") {
                return this.dispatchForgot(request, response);
            } else if (actionPath === "/recover") {
                return this.dispatchRecover(request, response);
            } else if (actionPath === "/unregister") {
                return this.dispatchUnregister(request, response);
            } else if (actionPath === "/modify") {
                return this.dispatchModify(request, response);
            } else {
                return this.onDispatchError(new Error("Required action path to be valid (and «" + actionPath + "» is not valid as auth service) in order to «dispatch»"), request, response);
            }
        }
        return fallback(request, response);
    };
    AuthByMySQL.prototype.generateContext = RestUtils.generateContextByRequestResponseFactory("AuthByMySQL.prototype.generateContext");
    AuthByMySQL.prototype.authenticate = async function (token) {
        try {
            trace("AuthByMySQL.prototype.authenticate");
            const sanitizedToken = RestUtils.sanitize(token);
            const [matchedSessions] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_sessions WHERE token = ${sanitizedToken};`
            ].join("\n"));
            if(matchedSessions.length === 0) {
                throw new Error("Required parameter «session_token» to be session a session token in order to «authenticate»");
            } else if(matchedSessions.length !== 1) {
                throw new Error("Data corrupted by duplication of session token");
            }
            const [matchedSession] = matchedSessions;
            const sanitizedUserId = RestUtils.sanitize(matchedSession.id_user);
            const [matchedUsers] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_users WHERE id = ${sanitizedUserId};`
            ].join("\n"));
            if (matchedUsers.length === 0) {
                throw new Error("Required parameter «session_token» to be session a session token in order to «authenticate»");
            } else if (matchedUsers.length !== 1) {
                throw new Error("Data corrupted by duplication of session token");
            }
            const [matchedUser] = matchedUsers;
            let matchedGroups = undefined;
            let matchedPrivileges = undefined;
            const [matchedGroups1] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_groups WHERE auth_groups.id IN (SELECT DISTINCT id_group FROM auth_groups_of_users WHERE auth_groups_of_users.id_user IN (${sanitizedUserId}));`
            ].join("\n"));
            matchedGroups = matchedGroups1;
            if (matchedGroups.length) {
                const sanitizedGroupIds = matchedGroups.map(item => RestUtils.sanitize(item.id)).join(", ");
                const [matchedPrivileges1] = await this.server.rest.connection.proxifiedQuery([
                    `SELECT * FROM auth_privileges WHERE auth_privileges.id IN (SELECT DISTINCT id_privilege FROM auth_privileges_of_groups WHERE auth_privileges_of_groups.id_group IN (${sanitizedGroupIds}));`
                ].join("\n"));
                matchedPrivileges = matchedPrivileges1;
            }
            return {
                session: matchedSession,
                user: matchedUser,
                groups: matchedGroups,
                privileges: matchedPrivileges,
            };
        } catch (error) {
            this.onError(error);
        }
    };

    AuthByMySQL.prototype.dispatchRegister = async function (request, response) {
        try {
            trace("AuthByMySQL.prototype.dispatchRegister");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForRegister(context);
            context.state.operationResults = await this.onRegister(context);
            await this.onFormatOutputForRegister(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    AuthByMySQL.prototype.dispatchConfirm = async function (request, response) {
        try {
            trace("AuthByMySQL.prototype.dispatchConfirm");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForConfirm(context);
            context.state.operationResults = await this.onConfirm(context);
            await this.onFormatOutputForConfirm(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    AuthByMySQL.prototype.dispatchLogin = async function (request, response) {
        try {
            trace("AuthByMySQL.prototype.dispatchLogin");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForLogin(context);
            context.state.operationResults = await this.onLogin(context);
            await this.onFormatOutputForLogin(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    AuthByMySQL.prototype.dispatchLogout = async function (request, response) {
        try {
            trace("AuthByMySQL.prototype.dispatchLogout");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForLogout(context);
            context.state.operationResults = await this.onLogout(context);
            await this.onFormatOutputForLogout(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    AuthByMySQL.prototype.dispatchForgot = async function (request, response) {
        try {
            trace("AuthByMySQL.prototype.dispatchForgot");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForForgot(context);
            context.state.operationResults = await this.onForgot(context);
            await this.onFormatOutputForForgot(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    AuthByMySQL.prototype.dispatchRecover = async function (request, response) {
        try {
            trace("AuthByMySQL.prototype.dispatchRecover");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForRecover(context);
            context.state.operationResults = await this.onRecover(context);
            await this.onFormatOutputForRecover(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    AuthByMySQL.prototype.dispatchUnregister = async function (request, response) {
        try {
            trace("AuthByMySQL.prototype.dispatchUnregister");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForUnregister(context);
            context.state.operationResults = await this.onUnregister(context);
            await this.onFormatOutputForUnregister(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    AuthByMySQL.prototype.dispatchModify = async function (request, response) {
        try {
            trace("AuthByMySQL.prototype.dispatchModify");
            const context = this.generateContext(request, response);
            await this.onFormatParametersForModify(context);
            context.state.operationResults = await this.onModify(context);
            await this.onFormatOutputForModify(context);
            await this.onRespond(context);
        } catch (error) {
            this.onDispatchError(error, request, response);
        }
    };
    AuthByMySQL.prototype.onRegister = async function (context) {
        try {
            trace("AuthByMySQL.prototype.onRegister");
            return await this.register(context.parameters.user, context.parameters.password, context.parameters.email);
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onConfirm = async function (context) {
        try {
            trace("AuthByMySQL.prototype.onConfirm");
            return await this.confirm(context.parameters.confirmationToken);
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onLogin = async function (context) {
        try {
            trace("AuthByMySQL.prototype.onLogin");
            return await this.login(context.parameters.user, context.parameters.password);
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onLogout = async function (context) {
        try {
            trace("AuthByMySQL.prototype.onLogout");
            return await this.logout(context.parameters.session_token);
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onForgot = async function (context) {
        try {
            trace("AuthByMySQL.prototype.onForgot");
            return await this.forgot(context.parameters.user);
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onRecover = async function (context) {
        try {
            trace("AuthByMySQL.prototype.onRecover");
            return await this.recover(context.parameters.recovery_token);
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onUnregister = async function (context) {
        try {
            trace("AuthByMySQL.prototype.onUnregister");
            return await this.unregister(context.parameters.session_token, context.parameters.user, context.parameters.password);
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onModify = async function (context) {
        try {
            trace("AuthByMySQL.prototype.onModify");
            return await this.modify(context.parameters.session_token, context.parameters.user, context.parameters.password);
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onFormatParametersForRegister = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatParametersForRegister");
            context.parameters.user = context.input.query.user;
            context.parameters.password = context.input.query.password;
            context.parameters.email = context.input.query.email;
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onFormatOutputForRegister = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatOutputForRegister");
            context.output = {
                data: context.state.operationResults,
                metadata: {
                    path: this.server.basePathForAuth + "/register",
                    action: "/register",
                }
            };
        } catch (error) {
            this.onError(error);
        }
    };

    AuthByMySQL.prototype.onFormatParametersForConfirm = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatParametersForConfirm");
            context.parameters.confirmationToken = context.input.query.confirmation_token;
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onFormatOutputForConfirm = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatOutputForConfirm");
            context.output = {
                data: context.state.operationResults,
                metadata: {
                    path: this.server.basePathForAuth + "/confirm",
                    action: "/confirm",
                }
            };
        } catch (error) {
            this.onError(error);
        }
    };

    AuthByMySQL.prototype.onFormatParametersForLogin = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatParametersForLogin");
            context.parameters.user = context.input.query.user;
            context.parameters.password = context.input.query.password;
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onFormatOutputForLogin = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatOutputForLogin");
            context.output = {
                data: context.state.operationResults,
                metadata: {
                    path: this.server.basePathForAuth + "/login",
                    action: "/login",
                }
            };
        } catch (error) {
            this.onError(error);
        }
    };

    AuthByMySQL.prototype.onFormatParametersForLogout = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatParametersForLogout");
            context.parameters.session_token = context.input.query.session_token;
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onFormatOutputForLogout = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatOutputForLogout");
            context.output = {
                data: context.state.operationResults,
                metadata: {
                    path: this.server.basePathForAuth + "/logout",
                    action: "/logout",
                }
            };
        } catch (error) {
            this.onError(error);
        }
    };

    AuthByMySQL.prototype.onFormatParametersForForgot = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatParametersForForgot");
            context.parameters.user = context.input.query.user;
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onFormatOutputForForgot = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatOutputForForgot");
            context.output = {
                data: context.state.operationResults,
                metadata: {
                    path: this.server.basePathForAuth + "/forgot",
                    action: "/forgot",
                }
            };
        } catch (error) {
            this.onError(error);
        }
    };

    AuthByMySQL.prototype.onFormatParametersForRecover = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatParametersForRecover");
            context.parameters.recovery_token = context.input.query.recovery_token;
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onFormatOutputForRecover = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatOutputForRecover");
            context.output = {
                data: context.state.operationResults,
                metadata: {
                    path: this.server.basePathForAuth + "/recover",
                    action: "/recover",
                }
            };
        } catch (error) {
            this.onError(error);
        }
    };

    AuthByMySQL.prototype.onFormatParametersForUnregister = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatParametersForUnregister");
            context.parameters.user = context.input.query.user;
            context.parameters.password = context.input.query.password;
            context.parameters.session_token = context.input.query.session_token;
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onFormatOutputForUnregister = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatOutputForUnregister");
            context.output = {
                data: context.state.operationResults,
                metadata: {
                    path: this.server.basePathForAuth + "/unregister",
                    action: "/unregister",
                }
            };
        } catch (error) {
            this.onError(error);
        }
    };

    AuthByMySQL.prototype.onFormatParametersForModify = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatParametersForModify");
            context.parameters.session_token = context.input.query.session_token;
            context.parameters.user = context.input.query.user;
            context.parameters.password = context.input.query.password;
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.onFormatOutputForModify = function (context) {
        try {
            trace("AuthByMySQL.prototype.onFormatOutputForModify");
            context.output = {
                data: context.state.operationResults,
                metadata: {
                    path: this.server.basePathForAuth + "/modify",
                    action: "/modify",
                }
            };
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.register = async function (user, password, email) {
        try {
            trace("AuthByMySQL.prototype.register");
            if(typeof user !== "string") {
                throw new Error("Required parameter «user» to be a «string» in order to «register»");
            }
            if(typeof password !== "string") {
                throw new Error("Required parameter «password» to be a «string» in order to «register»");
            }
            if(typeof email !== "string") {
                throw new Error("Required parameter «email» to be a «string» in order to «register»");
            }
            const sanitizedUser = RestUtils.sanitize(user);
            const sanitizedEmail = RestUtils.sanitize(email);
            const [ coincidentNames ] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_users WHERE name = ${sanitizedUser};`
            ].join("\n"));
            if (coincidentNames.length) {
                throw new Error("Required parameter «name» to be unique in order to «register»");
            }
            const [ coincidentEmails ] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_users WHERE email = ${sanitizedEmail};`
            ].join("\n"));
            if (coincidentEmails.length) {
                throw new Error("Required parameter «email» to be unique in order to «register»");
            }
            const sanitizedPassword = RestUtils.sanitize(password);
            const confirmationToken = RestUtils.generateRandomToken(20);
            const sanitizedConfirmationToken = RestUtils.sanitize(confirmationToken);
            const [{ insertId }] = await this.server.rest.connection.proxifiedQuery([
                `INSERT INTO auth_pending_users (name, password, email, confirmation_token) VALUES (${sanitizedUser},${sanitizedPassword},${sanitizedEmail},${sanitizedConfirmationToken});`
            ].join("\n"));
            return {
                message: "user successfully registered",
                // pending_user_id: insertId,
                confirmation_token: confirmationToken,
            };
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.confirm = async function (confirmationToken) {
        try {
            trace("AuthByMySQL.prototype.confirm");
            if (typeof confirmationToken !== "string") {
                throw new Error("Required parameter «confirmation_token» to be a «string» in order to «confirm»");
            }
            const sanitizedConfirmationToken = RestUtils.sanitize(confirmationToken);
            const [ pendingUsers ] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_pending_users WHERE 1=1 AND confirmation_token = ${sanitizedConfirmationToken};`
            ].join("\n"));
            if (pendingUsers.length === 0) {
                throw new Error("Required parameter «confirmation_token» to match an existing pending users confirmation token in order to «confirm»");
            } else if (pendingUsers.length !== 1) {
                throw new Error("Data corrupted by duplication of confirmation_token of user");
            }
            const [ userData ] = pendingUsers;
            const sanitizedName = RestUtils.sanitize(userData.name);
            const sanitizedPassword = RestUtils.sanitize(userData.password);
            const sanitizedEmail = RestUtils.sanitize(userData.email);
            await this.server.rest.connection.proxifiedQuery([
                `INSERT INTO auth_users (name, password, email) VALUES (${sanitizedName},${sanitizedPassword},${sanitizedEmail});`
            ].join("\n"));
            const sanitizedId = RestUtils.sanitize(userData.id);
            await this.server.rest.connection.proxifiedQuery([
                `DELETE FROM auth_pending_users WHERE id = ${sanitizedId};`
            ].join("\n"));
            return {
                message: "user successfully confirmed"
            };
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.login = async function (user, password) {
        try {
            trace("AuthByMySQL.prototype.login");
            // @TODO......................................
            let sessionToken = undefined;
            if (typeof user !== "string") {
                throw new Error("Required parameter «user» to be a «string» in order to «login»");
            }
            if (typeof password !== "string") {
                throw new Error("Required parameter «password» to be a «string» in order to «login»");
            }
            const sanitizedUser = RestUtils.sanitize(user);
            const [users] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_users WHERE 1=1 AND name = ${sanitizedUser};`
            ].join("\n"));
            if (users.length === 0) {
                throw new Error("Required parameter «user» to match an existing user in order to «login»");
            } else if (users.length !== 1) {
                throw new Error("Data corrupted by duplication of name of user");
            }
            const [matchedUser] = users;
            if(matchedUser.password !== password) {
                throw new Error("Required parameter «password» to be the user password in order to «login»");
            }
            const userId = matchedUser.id;
            const sanitizedUserId = RestUtils.sanitize(userId);
            const [sessionsResults] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_sessions WHERE 1=1 AND id_user = ${sanitizedUserId};`
            ].join("\n"));
            if (sessionsResults.length === 0) {
                sessionToken = RestUtils.generateRandomToken(20);
                const sanitizedSessionToken = RestUtils.sanitize(sessionToken);
                await this.server.rest.connection.proxifiedQuery([
                    `INSERT INTO auth_sessions (id_user, token) VALUES (${sanitizedUserId}, ${sanitizedSessionToken});`
                ].join("\n"));
            } else {
                sessionToken = sessionsResults[0].token;
            }
            const authentication = await this.authenticate(sessionToken);
            return {
                message: "user successfully logged in",
                session_token: sessionToken,
                authentication,
            };
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.logout = async function (sessionToken) {
        try {
            trace("AuthByMySQL.prototype.logout");
            const sanitizedSessionToken = RestUtils.sanitize(sessionToken);
            const [ sessionsResults ] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_sessions WHERE 1=1 AND token = ${sanitizedSessionToken};`
            ].join("\n"));
            if (sessionsResults.length === 0) {
                throw new Error("Required parameter «session_token» to be a session token in order to «logout»");
            } else if(sessionsResults.length !== 1) {
                throw new Error("Data corrupted by session token duplication");
            }
            const [ matchedSession ] = sessionsResults;
            const sanitizedSessionId = RestUtils.sanitize(matchedSession.id);
            await this.server.rest.connection.proxifiedQuery([
                `DELETE FROM auth_sessions WHERE 1=1 AND id = ${sanitizedSessionId};`
            ].join("\n"));
            return {
                message: "user successfully logged out",
            };
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.forgot = async function (user) {
        try {
            trace("AuthByMySQL.prototype.forgot");
            const token = RestUtils.generateRandomToken(20);
            const sanitizedUser = RestUtils.sanitize(user);
            const sanitizedToken = RestUtils.sanitize(token);
            await this.server.rest.connection.proxifiedQuery([
                `UPDATE auth_users SET recovery_token = ${sanitizedToken} WHERE 1=1 AND name = ${sanitizedUser};`
            ].join("\n"));
            return {
                message: "user successfully notified with recovery email",
                recovery_token: configurations.environment !== "test" ? "unknown" : token
            };
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.recover = async function (recovery_token) {
        try {
            trace("AuthByMySQL.prototype.recover");
            const sanitizedToken = RestUtils.sanitize(recovery_token);
            const [matchedUsers] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_users WHERE recovery_token = ${sanitizedToken};`
            ].join("\n"));
            if (matchedUsers.length === 0) {
                throw new Error("Required parameter «recovery_token» to be a recovery token in order to «recover»");
            } else if(matchedUsers.length !== 1) {
                throw new Error("Required user «recovery_token» to be active in order to «recover»");
            }
            const [userData] = matchedUsers;
            const token = RestUtils.generateRandomToken(20);
            const sanitizedUserId = RestUtils.sanitize(userData.id);
            await this.server.rest.connection.proxifiedQuery([
                `UPDATE auth_users SET recovery_token = NULL WHERE 1=1 AND id = ${sanitizedUserId};`
            ].join("\n"));
            return {
                message: "user successfully recovered",
                password: userData.password
            };
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.unregister = async function (session_token, user, password) {
        try {
            trace("AuthByMySQL.prototype.unregister");
            const sanitizedToken = RestUtils.sanitize(session_token);
            const [matchedSessions] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_sessions WHERE token = ${sanitizedToken};`
            ].join("\n"));
            if (matchedSessions.length === 0) {
                throw new Error("Required parameters «session_token» to be a session token in order to «unregister»");
            } else if (matchedSessions.length !== 1) {matchedSessions
                throw new Error("Data corrupted by session duplication on unregister");
            }
            const [matchedSession] = matchedSessions;
            const sanitizedUserId = RestUtils.sanitize(matchedSession.id_user);
            const [[matchedUser]] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_users WHERE id = ${sanitizedUserId};`
            ].join("\n"));
            const isValidUser = (matchedUser.name === user) && (matchedUser.password === password);
            if(!isValidUser) {
                throw new Error("Required parameters «user» and «password» to match in order to «unregister»")
            }
            const sanitizedSessionId = RestUtils.sanitize(matchedSession.id);
            await this.server.rest.connection.proxifiedQuery([
                `DELETE FROM auth_sessions WHERE 1=1 AND id = ${sanitizedSessionId};`
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                `DELETE FROM auth_users WHERE 1=1 AND id = ${sanitizedUserId};`
            ].join("\n"));
            return {
                message: "user successfully unregistered",
            };
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.modify = async function (sessionToken, user, password) {
        try {
            trace("AuthByMySQL.prototype.modify");
            const sanitizedToken = RestUtils.sanitize(sessionToken);
            const [matchedSessions] = await this.server.rest.connection.proxifiedQuery([
                `SELECT * FROM auth_sessions WHERE token = ${sanitizedToken};`
            ].join("\n"));
            if (matchedSessions.length === 0) {
                throw new Error("Required parameters «session_token» to be a session token in order to «modify»");
            } else if (matchedSessions.length !== 1) {
                matchedSessions
                throw new Error("Data corrupted by session duplication on modify");
            }
            const [matchedSession] = matchedSessions;
            const sanitizedUserId = RestUtils.sanitize(matchedSession.id_user);
            const sanitizedUser = RestUtils.sanitize(user || "");
            const sanitizedPassword = RestUtils.sanitize(password || "");
            let sanitizedValues = "";
            sanitizedValues += user ? ("name = " + sanitizedUser) : "";
            sanitizedValues += ((user && password) ? ", " : "") + (password ? ("password = " + sanitizedPassword) : "");
            const [updateResults] = await this.server.rest.connection.proxifiedQuery([
                `UPDATE auth_users SET ${sanitizedValues} WHERE id = ${sanitizedUserId};`
            ].join("\n"));
            return {
                message: "user successfully modified",
            };
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.resetAuth = async function () {
        try {
            trace("AuthByMySQL.prototype.resetAuth");
            // ENTITIES:
            await this.server.rest.connection.proxifiedQuery([
                "CREATE TABLE auth_pending_users (",
                "  id INT PRIMARY KEY AUTO_INCREMENT,",
                "  name VARCHAR(100),",
                "  password VARCHAR(100),",
                "  email VARCHAR(100),",
                "  confirmation_token VARCHAR(100)",
                ");"
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                "CREATE TABLE auth_users (",
                "  id INT PRIMARY KEY AUTO_INCREMENT,",
                "  name VARCHAR(100),",
                "  password VARCHAR(100),",
                "  email VARCHAR(100),",
                "  recovery_token VARCHAR(100),",
                "  description VARCHAR(200)",
                ");"
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                "CREATE TABLE auth_groups (",
                "  id INT PRIMARY KEY AUTO_INCREMENT,",
                "  name VARCHAR(100),",
                "  description VARCHAR(200)",
                ");"
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                "CREATE TABLE auth_privileges (",
                "  id INT PRIMARY KEY AUTO_INCREMENT,",
                "  name VARCHAR(100),",
                "  description VARCHAR(200)",
                ");"
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                "CREATE TABLE auth_sessions (",
                "  id INT PRIMARY KEY AUTO_INCREMENT,",
                "  id_user INT,",
                "  token VARCHAR(100),",
                "  FOREIGN KEY (id_user) REFERENCES auth_users(id)",
                ");"
            ].join("\n"));
            // RELATIONS:
            await this.server.rest.connection.proxifiedQuery([
                "CREATE TABLE auth_groups_of_users (",
                "  id INT PRIMARY KEY AUTO_INCREMENT,",
                "  id_user INT,",
                "  id_group INT,",
                "  FOREIGN KEY (id_user) REFERENCES auth_users(id),",
                "  FOREIGN KEY (id_group) REFERENCES auth_groups(id)",
                ");"
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                "CREATE TABLE auth_privileges_of_groups (",
                "  id INT PRIMARY KEY AUTO_INCREMENT,",
                "  id_privilege INT,",
                "  id_group INT,",
                "  FOREIGN KEY (id_privilege) REFERENCES auth_privileges(id),",
                "  FOREIGN KEY (id_group) REFERENCES auth_groups(id)",
                ");"
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                "INSERT INTO auth_users (name, password, email) VALUES ('administrator', 'administrator', 'carlcarlsonc18@gmail.com');"
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                "INSERT INTO auth_groups (name, description) VALUES ('administrators', 'the administration');"
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                "INSERT INTO auth_privileges (name, description) VALUES ('to administrate', 'to administrate');"
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                "INSERT INTO auth_groups_of_users (id_user, id_group) VALUES ('1', '1');"
            ].join("\n"));
            await this.server.rest.connection.proxifiedQuery([
                "INSERT INTO auth_privileges_of_groups (id_group, id_privilege) VALUES ('1', '1');"
            ].join("\n"));
        } catch (error) {
            this.onError(error);
        }
    };
    AuthByMySQL.prototype.hasAuthorizationFor = async function (privilegeName, authentication) {
        try {
            trace("AuthByMySQL.prototype.hasAuthorizationFor");
            if(typeof privilegeName !== "string") {
                throw new Error("Required parameter «privilegeName» to be a string in order to «hasAuthorizationFor»");
            }
            if (typeof authentication !== "object") {
                throw new Error("Required parameter «authentication» to be a string in order to «hasAuthorizationFor»");
            }
            const matchedPrivileges = authentication.privileges.filter(privilege => privilege.name === privilegeName);
            return matchedPrivileges.length;
        } catch (error) {
            this.onError(error);
        }
    };

    let RestByDexie = function (options, extensions = {}) {
        trace("RestByDexie.constructor");
        if (typeof options !== "object") {
            throw new Error("Required parameter «options» to be an object in order to «RestByDexie.constructor»");
        }
        if (typeof options.credentials !== "object") {
            throw new Error("Required parameter «options.credentials» to be an object in order to «RestByDexie.constructor»");
        }
        if (typeof extensions !== "object") {
            throw new Error("Required parameter «extensions» to be an object in order to «RestByDexie.constructor»");
        }
        this.credentials = options.credentials;
        Object.assign(this, extensions);
        return this;
    };
    RestByDexie = Object.assign(RestByDexie, { ...RestByMySQL });
    RestByDexie.prototype = Object.assign(RestByDexie.prototype, { ...RestByMySQL.prototype });
    RestByDexie.prototype.initialize = async function() {
        try {
            trace("RestByDexie.prototype.initialize");
            const versionSchema = {};
            const allServices = this.server.services;
            for (let indexService = 0; indexService < allServices.length; indexService++) {
                const serviceClass = allServices[indexService];
                if (typeof serviceClass.creationScript === "string") {
                    versionSchema[serviceClass.table] = serviceClass.creationScript;
                    // await this.connection.proxifiedQuery(serviceClass.creationScript);
                }
            }
            if (typeof this.seeder === "function") {
                await this.seeder(authentication);
            }
            this.connection = await RanasDB.connect("main_app_id", [[versionSchema, () => {}]]);
            this.connection = RestUtils.expandConnection(this.connection);
            return this;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.resetDatabase = async function (authentication) {
        try {
            trace("RestByDexie.prototype.resetDatabase");
            await RanasDB.dropDatabaseIfExists("main_app_id");
            await this.initialize();
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.selectOne = async function (dataType, { where }, authentication) {
        try {
            trace("RestByDexie.prototype.selectOne");
            await this.server.hooks.useHook("api://rest.selectOne::before", { dataType, where, authentication });
            await this.server.hooks.useHook("api://rest.selectOne:" + dataType + "::before", { dataType, where, authentication });
            const tfilter = RestUtils.fromWhereToFilterFunction(where);
            const allResults = await this.connection.dexieDB[dataType].filter(tfilter).toArray();
            if (allResults.length === 0) {
                throw new Error("No items were found on «" + dataType + "» by using the specified filters on «RestByDexie.prototype.selectOne»");
            } else if (allResults.length !== 1) {
                throw new Error("More than 1 item was found on «" + dataType + "» by using the specified filters on «RestByDexie.prototype.selectOne»");
            }
            const result = allResults[0];
            await this.server.hooks.useHook("api://rest.selectOne::after", { dataType, where, authentication, result });
            await this.server.hooks.useHook("api://rest.selectOne:" + dataType + "::after", { dataType, where, authentication, result });
            return result;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.selectMany = async function (dataType, { where = [], order = [], group = [], pagination = [] }, authentication) {
        try {
            trace("RestByDexie.prototype.selectMany");
            await this.server.hooks.useHook("api://rest.selectMany::before", { dataType, where, order, group, pagination, authentication });
            await this.server.hooks.useHook("api://rest.selectMany:" + dataType + "::before", { dataType, where, order, group, pagination, authentication });
            const tfilter = RestUtils.fromWhereToFilterFunction(where);
            const transaction = await this.connection.dexieDB[dataType].filter(tfilter);
            const [ page = 1, items = 20 ] = pagination;
            const offset = (page - 1) * items;
            const finalOrder = ((!Array.isArray(order)) || (order.length === 0)) ? ":id" : order[0].startsWith("!") ? order[0].substr(1) : order[0];
            if(order[0].startsWith("!")) {
                transaction.reverse();
            }
            transaction.offset(offset).limit(items);
            const result = await transaction.sortBy(...finalOrder);
            await this.server.hooks.useHook("api://rest.selectMany::after", { dataType, where, order, group, pagination, result, authentication });
            await this.server.hooks.useHook("api://rest.selectMany:" + dataType + "::after", { dataType, where, order, group, pagination, result, authentication });
            return result;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.insertOne = async function (dataType, { item }, authentication) {
        try {
            trace("RestByDexie.prototype.insertOne");
            await this.server.hooks.useHook("api://rest.insertOne::before", { dataType, item, authentication });
            await this.server.hooks.useHook("api://rest.insertOne:" + dataType + "::before", { dataType, item, authentication });
            const result = await this.connection.dexieDB[dataType].add(item);
            await this.server.hooks.useHook("api://rest.insertOne::after", { dataType, item, authentication });
            await this.server.hooks.useHook("api://rest.insertOne:" + dataType + "::after", { dataType, item, authentication });
            return {
                rows: 1,
                id: result
            };
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.insertMany = async function (dataType, { items }, authentication) {
        try {
            trace("RestByDexie.prototype.insertMany");
            await this.server.hooks.useHook("api://rest.insertMany::before", { dataType, items, authentication });
            await this.server.hooks.useHook("api://rest.insertMany:" + dataType + "::before", { dataType, items, authentication });
            const result = await this.connection.dexieDB[dataType].bulkAdd(items);
            await this.server.hooks.useHook("api://rest.insertMany::after", { dataType, items, authentication });
            await this.server.hooks.useHook("api://rest.insertMany:" + dataType + "::after", { dataType, items, authentication });
            return {
                rows: items.length,
                id: result
            };
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.updateOne = async function (dataType, { where, values }, authentication) {
        try {
            trace("RestByDexie.prototype.updateOne");
            await this.server.hooks.useHook("api://rest.updateOne::before", { dataType, where, values, authentication });
            await this.server.hooks.useHook("api://rest.updateOne:" + dataType + "::before", { dataType, where, values, authentication });
            const tfilter = RestUtils.fromWhereToFilterFunction(where);
            const transaction = await this.connection.dexieDB[dataType].filter(tfilter);
            const allResults = await transaction.toArray();
            if (allResults.length === 0) {
                throw new Error("No items were found on «" + dataType + "» by using the specified filters on «RestByDexie.prototype.updateOne»");
            } else if (allResults.length !== 1) {
                throw new Error("More than 1 item was found on «" + dataType + "» by using the specified filters on «RestByDexie.prototype.updateOne»");
            }
            await transaction.modify(item => {
                Object.assign(item, values);
            });
            await this.server.hooks.useHook("api://rest.updateOne::after", { dataType, where, values, authentication });
            await this.server.hooks.useHook("api://rest.updateOne:" + dataType + "::after", { dataType, where, values, authentication });
            return {
                rows: allResults.length,
            };
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.updateMany = async function (dataType, { where, values }, authentication) {
        try {
            trace("RestByDexie.prototype.updateMany");
            await this.server.hooks.useHook("api://rest.updateMany::before", { dataType, where, values, authentication });
            await this.server.hooks.useHook("api://rest.updateMany:" + dataType + "::before", { dataType, where, values, authentication });
            const tfilter = RestUtils.fromWhereToFilterFunction(where);
            const transaction = await this.connection.dexieDB[dataType].filter(tfilter);
            const allResults = await transaction.toArray();
            await transaction.modify(item => {
                Object.assign(item, values);
            });
            await this.server.hooks.useHook("api://rest.updateMany::after", { dataType, where, values, authentication });
            await this.server.hooks.useHook("api://rest.updateMany:" + dataType + "::after", { dataType, where, values, authentication });
            return {
                rows: allResults.length,
            };
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.deleteOne = async function (dataType, { where }, authentication) {
        try {
            trace("RestByDexie.prototype.deleteOne");
            await this.server.hooks.useHook("api://rest.deleteOne::before", { dataType, where, authentication });
            await this.server.hooks.useHook("api://rest.deleteOne:" + dataType + "::before", { dataType, where, authentication });
            const tfilter = RestUtils.fromWhereToFilterFunction(where);
            const transaction = await this.connection.dexieDB[dataType].filter(tfilter);
            const allResults = await transaction.toArray();
            if (allResults.length === 0) {
                throw new Error("No items were found on «" + dataType + "» by using the specified filters on «RestByDexie.prototype.deleteOne»");
            } else if (allResults.length !== 1) {
                throw new Error("More than 1 item was found on «" + dataType + "» by using the specified filters on «RestByDexie.prototype.deleteOne»");
            }
            await transaction.delete();
            await this.server.hooks.useHook("api://rest.deleteOne::after", { dataType, where, authentication });
            await this.server.hooks.useHook("api://rest.deleteOne:" + dataType + "::after", { dataType, where, authentication });
            return {
                rows: allResults.length,
            };
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.deleteMany = async function (dataType, { where }, authentication) {
        try {
            trace("RestByDexie.prototype.deleteMany");
            await this.server.hooks.useHook("api://rest.deleteMany::before", { dataType, where, authentication });
            await this.server.hooks.useHook("api://rest.deleteMany:" + dataType + "::before", { dataType, where, authentication });
            const tfilter = RestUtils.fromWhereToFilterFunction(where);
            const transaction = await this.connection.dexieDB[dataType].filter(tfilter);
            const allResults = await transaction.toArray();
            await transaction.delete();
            await this.server.hooks.useHook("api://rest.deleteMany::after", { dataType, where, authentication });
            await this.server.hooks.useHook("api://rest.deleteMany:" + dataType + "::after", { dataType, where, authentication });
            return {
                rows: allResults.length,
            };
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.getFile = async function (table) {
        try {
            trace("RestByDexie.prototype.getFile");
            console.log(table);
            return 600;
        } catch (error) {
            this.onError(error);
        }
    };
    RestByDexie.prototype.setFile = async function (table) {
        try {
            trace("RestByDexie.prototype.setFile");
            console.log(table);
            return 600;
        } catch (error) {
            this.onError(error);
        }
    };
    
    let AuthByDexie = function (options, extensions = {}) {
        trace("AuthByDexie.constructor");
        if (typeof options !== "object") {
            throw new Error("Required parameter «options» to be an object in order to «AuthByDexie.constructor»");
        }
        if (typeof options.credentials !== "object") {
            throw new Error("Required parameter «options.credentials» to be an object in order to «AuthByDexie.constructor»");
        }
        if (typeof extensions !== "object") {
            throw new Error("Required parameter «extensions» to be an object in order to «AuthByDexie.constructor»");
        }
        this.credentials = options.credentials;
        Object.assign(this, extensions);
        return this;
    };
    AuthByDexie = Object.assign(AuthByDexie, { ...AuthByMySQL });
    AuthByDexie.prototype = Object.assign(AuthByDexie.prototype, { ...AuthByMySQL.prototype });
    AuthByDexie.prototype.authenticate = function () {};
    AuthByDexie.prototype.login = function () {};
    AuthByDexie.prototype.logout = function () {};
    AuthByDexie.prototype.refresh = function () {};
    AuthByDexie.prototype.register = function () {};
    AuthByDexie.prototype.confirm = function () {};
    AuthByDexie.prototype.forgot = function () {};
    AuthByDexie.prototype.recover = function () {};
    AuthByDexie.prototype.unregister = function () {};
    AuthByDexie.prototype.hasAuthorizationFor = function () {};
    AuthByDexie.prototype.resetAuth = function () {};
    
    const VirtualDataService = function(dynamicInterface = {}) {
        trace("VirtualDataService.constructor");
        Object.assign(this, dynamicInterface);
        return this;
    };
    Object.assign(VirtualDataService, { ...DataService });
    Object.assign(VirtualDataService.prototype, { ...DataService.prototype });
    
    VirtualDataService.prototype.resetDatabase = async function () {
        trace("VirtualDataService.prototype.resetDatabase");
        try {
            await RanasDB.dropDatabaseIfExists(this.credentials.database);
            return await this.initialize();
        } catch (error) {
            this.onError(error);
        }
    };
    VirtualDataService.prototype.initialize = async function () {
        trace("VirtualDataService.prototype.initialize");
        try {
            this.connection = await RanasDB.connect(this.credentials.database, this.versionation);
            return this;
        } catch (error) {
            this.onError(error);
        }
    };

    const VirtualQueryService = function () {
        trace("VirtualQueryService.constructor");
    };
    Object.assign(VirtualQueryService, { ...QueryService });
    Object.assign(VirtualQueryService.prototype, { ...QueryService.prototype });

    const VirtualProcessService = function () {
        trace("VirtualProcessService.constructor");
    };
    Object.assign(VirtualProcessService, { ...ProcessService });
    Object.assign(VirtualProcessService.prototype, { ...ProcessService.prototype });
    // VirtualProcessService.prototype.dispatch = function (request, response) { };
    
    const VirtualDataServer = function (dynamicInterface = {}) {
        trace("VirtualDataServer.constructor");
        Object.assign(this, dynamicInterface);
        if(!this.adapter) this.adapter = "dexie";
        this.rest = undefined;
        this.auth = undefined;
        this.services = [];
        this.queries = [];
        this.processes = [];
        this.hooks = Hooks.create();
        this.basePathForData = "/rest/api/v1";
        this.basePathForAuth = "/auth/api/v1";
        this.basePathForQuery = "/query/api/v1";
        this.basePathForProcess = "/process/api/v1";
        return this;
    };
    Object.assign(VirtualDataServer, { ...DataServer });
    Object.assign(VirtualDataServer.prototype, { ...DataServer.prototype });
    VirtualDataServer.prototype.initializeRest = async function () {
        try {
            trace("VirtualDataServer.prototype.initializeRest");
            let restAdapter = undefined;
            if (typeof this.adapter !== "string") {
                this.adapter = "dexie";
            }
            // @TOCONTINUE: continue adding other REST adapters on the following conditional:
            if (this.adapter === "dexie") {
                restAdapter = new RestByDexie({
                    credentials: this.credentials || {},
                }, {
                    ...this.restExtension,
                    server: this,
                });
            } else {
                throw new Error("Required configuration «this.adapter» to be a valid option in order to «initializeRest»");
            }
            // @OK!
            this.rest = await restAdapter.initialize();
        } catch (error) {
            this.onError(error);
        }
    };
    VirtualDataServer.prototype.initializeAuth = async function () {
        try {
            trace("VirtualDataServer.prototype.initializeAuth");
            let authAdapter = undefined;
            if (typeof this.adapter !== "string") {
                this.adapter = "dexie";
            }
            // @TOCONTINUE: continue adding other AUTH adapters on the following conditional:
            if (this.adapter === "dexie") {
                authAdapter = new AuthByDexie({
                    credentials: this.credentials,
                }, {
                    ...this.authExtension,
                    server: this,
                });
            } else {
                throw new Error("Required parameter «adapter» to be a valid option in order to «initializeRest»");
            }
            // @OK!
            this.auth = await authAdapter.initialize();
        } catch (error) {
            this.onError(error);
        }
    };
    VirtualDataServer.prototype.addService = function (...args) {
        trace("VirtualDataServer.prototype.addService");
        const [staticInterface = {}, dynamicInterface = {}, constructorFunctionParameter = undefined] = args;
        const constructorFunction = constructorFunctionParameter ? constructorFunctionParameter : RestUtils.basicServiceFactory()
        const service = constructorFunction;
        Object.assign(service, { ...VirtualDataService }, { ...staticInterface });
        Object.assign(service.prototype, { ...VirtualDataService.prototype }, { ...dynamicInterface }, {
            server: this
        });
        RestUtils.validateStaticServiceInterface(service);
        RestUtils.validateDynamicServiceInterface(service.prototype);
        this.services.push(service);
        return this;
    };
    VirtualDataServer.prototype.addQuery = function (...args) {
        trace("VirtualDataServer.prototype.addQuery");
        const [staticInterface = {}, dynamicInterface = {}, constructorFunctionParameter = undefined] = args;
        const constructorFunction = constructorFunctionParameter ? constructorFunctionParameter : RestUtils.basicQueryFactory()
        const queryClass = constructorFunction;
        Object.assign(queryClass, { ...VirtualQueryService }, { ...staticInterface });
        Object.assign(queryClass.prototype, { ...VirtualQueryService.prototype }, { ...dynamicInterface }, {
            server: this
        });
        RestUtils.validateStaticQueryInterface(queryClass);
        RestUtils.validateDynamicQueryInterface(queryClass.prototype);
        this.queries.push(queryClass);
        return this;
    };
    VirtualDataServer.prototype.addProcess = function (...args) {
        trace("VirtualDataServer.prototype.addProcess");
        const [staticInterface = {}, dynamicInterface = {}, constructorFunctionParameter = undefined] = args;
        const constructorFunction = constructorFunctionParameter ? constructorFunctionParameter : RestUtils.basicProcessFactory()
        const processClass = constructorFunction;
        Object.assign(processClass, { ...VirtualProcessService }, { ...staticInterface });
        Object.assign(processClass.prototype, { ...VirtualProcessService.prototype }, { ...dynamicInterface }, {
            server: this
        });
        RestUtils.validateStaticProcessInterface(processClass);
        RestUtils.validateDynamicProcessInterface(processClass.prototype);
        this.processes.push(processClass);
        return this;
    };
    VirtualDataServer.prototype.dispatchSelf = function (method = "get", url = "/", requestArgs = {}, responseArgs = {}) {
        trace("VirtualDataServer.prototype.dispatchSelf");
        trace("METHOD: " + method);
        trace("   URL: " + url);
        const parsedUrl = RestUtils.require("url").parse(url);
        const request = new RequestPolyfill(method, url, requestArgs);
        const response = new ResponsePolyfill(responseArgs);
        if(parsedUrl.pathname.startsWith(this.basePathForData)) {
            const [model, operation, quantifier ] = parsedUrl.pathname.replace(this.basePathForData, "").split("/").filter(it => it !== "");
            this.dispatch(request, response);
            return response.response_promise.then(VirtualDataServer.throwOnErrorStatus);
        } else if (parsedUrl.pathname.startsWith(this.basePathForAuth)) {
            const [operation ] = parsedUrl.pathname.replace(this.basePathForAuth, "").split("/").filter(it => it !== "");
            this.dispatch(request, response);
            return response.response_promise.then(VirtualDataServer.throwOnErrorStatus);
        } else if (parsedUrl.pathname.startsWith(this.basePathForProcess)) {
            const [processId] = parsedUrl.pathname.replace(this.basePathForProcess, "").split("/").filter(it => it !== "");
            this.dispatch(request, response);
            return response.response_promise.then(VirtualDataServer.throwOnErrorStatus);
        } else if(parsedUrl.pathname.startsWith(this.basePathForQuery)) {
            const [queryId] = parsedUrl.pathname.replace(this.basePathForQuery, "").split("/").filter(it => it !== "");
            this.dispatch(request, response);
            return response.response_promise.then(VirtualDataServer.throwOnErrorStatus);
        }
        throw new Error("Request not valid: domain out of bounds");
    };
    VirtualDataServer.throwOnErrorStatus = function(data) {
        if(data.status >= 200 && data.status <= 400) {
            data.response = Object.assign({}, data, {
                statusText: "OK"
            });
            return data;
        }
        throw data;
    };
    /*
    VirtualDataServer.prototype.dispatch = function () {};
    VirtualDataServer.prototype.createDispatcher = function() {};
    VirtualDataServer.prototype.createHttpServerController = function() {};
    VirtualDataServer.prototype.createHttpServer = function() {};
    VirtualDataServer.prototype.listen = function() {};
    VirtualDataServer.prototype.stopDatabaseConnection = function() {};
    VirtualDataServer.prototype.stopHttpServer = function() {};
    VirtualDataServer.prototype.resetDatabase = function() {};
    VirtualDataServer.prototype.resetAuth = function() {};
    //*/

    ////////////////////////////////////////////////////////////////////////
    // 12. Common traits:
    RestByMySQL.prototype.onError = RestUtils.generateOnErrorFunction("RestByMySQL.prototype.onError");
    RestByMySQL.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("RestByMySQL.prototype.onDispatchError");
    AuthByMySQL.prototype.onError = RestUtils.generateOnErrorFunction("AuthByMySQL.prototype.onError");
    AuthByMySQL.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("AuthByMySQL.prototype.onDispatchError");
    DataService.prototype.onError = RestUtils.generateOnErrorFunction("DataService.prototype.onError");
    DataService.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("DataService.prototype.onDispatchError");
    DataServer.prototype.onError = RestUtils.generateOnErrorFunction("DataServer.prototype.onError");
    DataServer.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("DataServer.prototype.onDispatchError");
    Hooks.prototype.onError = RestUtils.generateOnErrorFunction("Hooks.prototype.onError");
    Hooks.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("Hooks.prototype.onDispatchError");
    QueryService.prototype.onError = RestUtils.generateOnErrorFunction("QueryService.prototype.onError");
    QueryService.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("QueryService.prototype.onDispatchError");
    ProcessService.prototype.onError = RestUtils.generateOnErrorFunction("ProcessService.prototype.onError");
    ProcessService.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("ProcessService.prototype.onDispatchError");

    RestByDexie.prototype.onError = RestUtils.generateOnErrorFunction("RestByDexie.prototype.onError");
    RestByDexie.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("RestByDexie.prototype.onDispatchError");
    AuthByDexie.prototype.onError = RestUtils.generateOnErrorFunction("AuthByDexie.prototype.onError");
    AuthByDexie.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("AuthByDexie.prototype.onDispatchError");
    VirtualDataService.prototype.onError = RestUtils.generateOnErrorFunction("VirtualDataService.prototype.onError");
    VirtualDataService.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("VirtualDataService.prototype.onDispatchError");
    VirtualDataServer.prototype.onError = RestUtils.generateOnErrorFunction("VirtualDataServer.prototype.onError");
    VirtualDataServer.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("VirtualDataServer.prototype.onDispatchError");

    VirtualQueryService.prototype.onError = RestUtils.generateOnDispatchErrorFunction("VirtualQueryService.prototype.onError");
    VirtualQueryService.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("VirtualQueryService.prototype.onDispatchError");
    VirtualProcessService.prototype.onError = RestUtils.generateOnDispatchErrorFunction("VirtualProcessService.prototype.onError");
    VirtualProcessService.prototype.onDispatchError = RestUtils.generateOnDispatchErrorFunction("VirtualProcessService.prototype.onDispatchError");

    ////////////////////////////////////////////////////////////////////////
    // 99. Export internal interfaces from DataServer:
    DataServer.RestInterface = RestInterface;
    DataServer.RestByMySQL = RestByMySQL;
    DataServer.AuthInterface = AuthInterface;
    DataServer.AuthByMySQL = AuthByMySQL;
    DataServer.DataService = DataService;
    DataServer.RestUtils = RestUtils;
    DataServer.Hooks = Hooks;
    DataServer.RestByDexie = RestByDexie;
    DataServer.AuthByDexie = AuthByDexie;
    DataServer.VirtualDataServer = VirtualDataServer;
    DataServer.VirtualDataService = VirtualDataService;
    
    ////////////////////////////////////////////////////////////////////////
    const finalAPI = {
        // Public API:
        DataServer,
        VirtualDataServer,
        DataService,
        Hooks,
        // Internal (but exposed) API:
        RestInterface,
        RestByMySQL,
        AuthInterface,
        AuthByMySQL,
        RestUtils,
        RestByDexie,
        AuthByDexie,
        VirtualDataService,
    };
    finalAPI.default = finalAPI;
    return finalAPI;

});