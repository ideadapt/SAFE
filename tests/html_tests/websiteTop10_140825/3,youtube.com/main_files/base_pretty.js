  var _yt_www = {
    
  };
  ((function (m) 
  {
    var window = this;
    var oa, pa;
    m.aa = (function (a) 
    {
      return (function () 
      {
        return m.ca[a].apply(this, arguments);
      });
    });
    m.da = (function (a) 
    {
      return void 0 !== a;
    });
    m.l = (function (a, b, c) 
    {
      a = a.split(".");
      c = c || m.n;
      a[0] in c || ! c.execScript || c.execScript("var " + a[0]);
      for(var d;a.length && (d = a.shift());)
        ! a.length && m.da(b) ? c[d] = b : c[d] ? c = c[d] : c = c[d] = {
          
        };
    });
    m.q = (function (a, b) 
    {
      for(var c = a.split("."), d = b || m.n, e;e = c.shift();)
        if(null != d[e])
          d = d[e];
        else
          return null;
      return d;
    });
    m.ea = (function () 
    {
      
    });
    m.fa = (function (a) 
    {
      a.getInstance = (function () 
      {
        return a.Xa ? a.Xa : a.Xa = new a;
      });
    });
    m.ga = (function (a) 
    {
      var b = typeof a;
      if("object" == b)
        if(a)
        {
          if(a instanceof Array)
            return "array";
          if(a instanceof Object)
            return b;
          var c = Object.prototype.toString.call(a);
          if("[object Window]" == c)
            return "object";
          if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && ! a.propertyIsEnumerable("splice"))
            return "array";
          if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && ! a.propertyIsEnumerable("call"))
            return "function";
        }
        else
          return "null";
      else
        if("function" == b && "undefined" == typeof a.call)
          return "object";
      return b;
    });
    m.ha = (function (a) 
    {
      return "array" == m.ga(a);
    });
    m.ia = (function (a) 
    {
      var b = m.ga(a);
      return "array" == b || "object" == b && "number" == typeof a.length;
    });
    m.ja = (function (a) 
    {
      return "string" == typeof a;
    });
    m.ka = (function (a) 
    {
      return "number" == typeof a;
    });
    m.la = (function (a) 
    {
      return "function" == m.ga(a);
    });
    m.ma = (function (a) 
    {
      var b = typeof a;
      return "object" == b && null != a || "function" == b;
    });
    m.na = (function (a) 
    {
      return a[oa] || (a[oa] = ++ pa);
    });
    var qa = (function (a, b, c) 
    {
      return a.call.apply(a.bind, arguments);
    });
    var ra = (function (a, b, c) 
    {
      if(! a)
        throw Error();
      if(2 < arguments.length)
      {
        var d = Array.prototype.slice.call(arguments, 2);
        return (function () 
        {
          var c = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(c, d);
          return a.apply(b, c);
        });
      }
      return (function () 
      {
        return a.apply(b, arguments);
      });
    });
    m.r = (function (a, b, c) 
    {
      m.r = Function.prototype.bind && - 1 != Function.prototype.bind.toString().indexOf("native code") ? qa : ra;
      return m.r.apply(null, arguments);
    });
    m.s = (function (a, b) 
    {
      var c = Array.prototype.slice.call(arguments, 1);
      return (function () 
      {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b);
      });
    });
    m.t = (function (a, b) 
    {
      function c() 
      {
        
      }
      c.prototype = b.prototype;
      a.G = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a;
      a.yy = (function (a, c, f) 
      {
        return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
      });
    });
    m.sa = (function (a) 
    {
      m.sa[" "](a);
      return a;
    });
    m.ta = (function (a) 
    {
      if(Error.captureStackTrace)
        Error.captureStackTrace(this, m.ta);
      else
      {
        var b = Error().stack;
        b && (this.stack = b);
      }
      a && (this.message = String(a));
    });
    m.ua = (function (a) 
    {
      return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    });
    m.va = (function (a) 
    {
      return (0, window.encodeURIComponent)(String(a));
    });
    m.wa = (function (a) 
    {
      if(! xa.test(a))
        return a;
      - 1 != a.indexOf("&") && (a = a.replace(ya, "&amp;"));
      - 1 != a.indexOf("<") && (a = a.replace(za, "&lt;"));
      - 1 != a.indexOf(">") && (a = a.replace(Aa, "&gt;"));
      - 1 != a.indexOf('"') && (a = a.replace(Ba, "&quot;"));
      - 1 != a.indexOf("'") && (a = a.replace(Ca, "&#39;"));
      - 1 != a.indexOf("\x00") && (a = a.replace(Da, "&#0;"));
      return a;
    });
    m.Ea = (function (a, b) 
    {
      return - 1 != a.indexOf(b);
    });
    m.Fa = (function (a, b) 
    {
      for(var c = 0, d = m.ua(String(a)).split("."), e = m.ua(String(b)).split("."), 
      f = Math.max(d.length, e.length), 
      h = 0;0 == c && h < f;h ++)
      {
        var k = d[h] || "", p = e[h] || "", u = RegExp("(\\d*)(\\D*)", "g"), 
        z = RegExp("(\\d*)(\\D*)", "g");
        do
        {
          var O = u.exec(k) || ["", "", "", ], U = z.exec(p) || ["", "", "", ];
          if(0 == O[0].length && 0 == U[0].length)
            break;
          c = Ha(0 == O[1].length ? 0 : (0, window.parseInt)(O[1], 10), 
          0 == U[1].length ? 0 : (0, window.parseInt)(U[1], 10)) || Ha(0 == O[2].length, 0 == U[2].length) || Ha(O[2], U[2]);
        }while(0 == c);
      }
      return c;
    });
    var Ha = (function (a, b) 
    {
      return a < b ? - 1 : a > b ? 1 : 0;
    });
    m.Ia = (function (a) 
    {
      return String(a).replace(/\-([a-z])/g, (function (a, c) 
      {
        return c.toUpperCase();
      }));
    });
    m.Ja = (function (a) 
    {
      var b = m.ja(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
      return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), 
      (function (a, b, e) 
      {
        return b + e.toUpperCase();
      }));
    });
    m.Ka = (function (a, b, c) 
    {
      b = m.La(a, b, c);
      return 0 > b ? null : m.ja(a) ? a.charAt(b) : a[b];
    });
    m.La = (function (a, b, c) 
    {
      for(var d = a.length, e = m.ja(a) ? a.split("") : a, f = 0;f < d;f ++)
        if(f in e && b.call(c, e[f], f, a))
          return f;
      return - 1;
    });
    m.Ma = (function (a, b) 
    {
      return 0 <= (0, m.Na)(a, b);
    });
    m.Oa = (function (a, b) 
    {
      var c = (0, m.Na)(a, b), d;
      (d = 0 <= c) && m.Pa(a, c);
      return d;
    });
    m.Pa = (function (a, b) 
    {
      m.Qa.splice.call(a, b, 1);
    });
    m.Ra = (function (a) 
    {
      var b = a.length;
      if(0 < b)
      {
        for(var c = Array(b), d = 0;d < b;d ++)
          c[d] = a[d];
        return c;
      }
      return [];
    });
    m.Sa = (function (a, b, c) 
    {
      return 2 >= arguments.length ? m.Qa.slice.call(a, b) : m.Qa.slice.call(a, b, c);
    });
    m.Ta = (function () 
    {
      
    });
    m.Ua = (function (a, b) 
    {
      m.Va(a, m.s(m.Wa, b));
    });
    m.Va = (function (a, b) 
    {
      a.Ma || (a.Ma = []);
      a.Ma.push(m.da(void 0) ? (0, m.r)(b, void 0) : b);
    });
    m.Wa = (function (a) 
    {
      a && "function" == typeof a.dispose && a.dispose();
    });
    m.Xa = (function () 
    {
      this.b = [];
      this.wb = {
        
      };
    });
    m.Ya = (function (a) 
    {
      Za(m.$a, arguments);
    });
    m.v = (function (a, b) 
    {
      return a in m.$a ? m.$a[a] : b;
    });
    m.w = (function (a, b) 
    {
      m.la(a) && (a = m.ab(a));
      return window.setTimeout(a, b);
    });
    m.bb = (function (a, b) 
    {
      m.la(a) && (a = m.ab(a));
      return window.setInterval(a, b);
    });
    m.x = (function (a) 
    {
      window.clearTimeout(a);
    });
    m.cb = (function (a) 
    {
      window.clearInterval(a);
    });
    m.ab = (function (a) 
    {
      return a && window.yterr ? (function () 
      {
        try
{          return a.apply(this, arguments);}
        catch(b)
{          throw m.db(b), b;}

      }) : a;
    });
    m.db = (function (a, b) 
    {
      if(window && window.yterr)
      {
        var c = m.q("yt.www.errors.log");
        c ? c(a, b) : (c = m.v("ERRORS") || [], c.push([a, b, ]), m.Ya("ERRORS", c));
      }
    });
    m.eb = (function (a) 
    {
      Za(m.fb, arguments);
    });
    m.gb = (function (a) 
    {
      return a in m.fb;
    });
    m.hb = (function (a, b, c) 
    {
      var d = b || {
        
      };
      if(a = a in m.fb ? m.fb[a] : c)
        for(var e in d)
          a = a.replace(new RegExp("\\$" + e, "gi"), (function () 
          {
            return d[e];
          }));
      return a;
    });
    var Za = (function (a, b) 
    {
      if(1 < b.length)
      {
        var c = b[0];
        a[c] = b[1];
      }
      else
      {
        var d = b[0];
        for(c in d)
          a[c] = d[c];
      }
    });
    m.y = (function (a, b, c) 
    {
      var d = ib();
      if(d)
      {
        var e = d.subscribe(a, (function () 
        {
          if(! m.jb || m.jb != e)
          {
            var d = arguments, h = (function () 
            {
              kb[e] && b.apply(c || window, d);
            });
            try
{              lb[a] ? h() : m.w(h, 0);}
            catch(k)
{              m.db(k);}

          }
        }), 
        c);
        kb[e] = ! 0;
        mb[a] || (mb[a] = []);
        mb[a].push(e);
        return e;
      }
      return 0;
    });
    m.nb = (function (a) 
    {
      var b = ib();
      b && ("number" == typeof a ? a = [a, ] : "string" == typeof a && (a = [(0, window.parseInt)(a, 10), ]), 
      (0, m.A)(a, (function (a) 
      {
        b.unsubscribeByKey(a);
        delete kb[a];
      })));
    });
    m.B = (function (a, b) 
    {
      var c = ib();
      return c ? c.publish.apply(c, arguments) : ! 1;
    });
    m.ob = (function (a, b) 
    {
      lb[a] = ! 0;
      var c = ib(), c = c ? c.publish.apply(c, arguments) : ! 1;
      lb[a] = ! 1;
      return c;
    });
    var ib = (function () 
    {
      return m.q("yt.pubsub.instance_");
    });
    m.pb = (function (a) 
    {
      if(a.classList)
        return a.classList;
      a = a.className;
      return m.ja(a) && a.match(/\S+/g) || [];
    });
    m.C = (function (a, b) 
    {
      return a.classList ? a.classList.contains(b) : m.Ma(m.pb(a), b);
    });
    m.D = (function (a, b) 
    {
      a.classList ? a.classList.add(b) : m.C(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
    });
    m.qb = (function (a, b) 
    {
      if(a.classList)
        (0, m.A)(b, (function (b) 
        {
          m.D(a, b);
        }));
      else
      {
        var c = {
          
        };
        (0, m.A)(m.pb(a), (function (a) 
        {
          c[a] = ! 0;
        }));
        (0, m.A)(b, (function (a) 
        {
          c[a] = ! 0;
        }));
        a.className = "";
        for(var d in c)
          a.className += 0 < a.className.length ? " " + d : d;
      }
    });
    m.E = (function (a, b) 
    {
      a.classList ? a.classList.remove(b) : m.C(a, b) && (a.className = (0, m.rb)(m.pb(a), (function (a) 
      {
        return a != b;
      })).join(" "));
    });
    m.sb = (function (a, b, c) 
    {
      c ? m.D(a, b) : m.E(a, b);
    });
    m.tb = (function (a, b, c) 
    {
      return Math.min(Math.max(a, b), c);
    });
    m.ub = (function (a, b, c) 
    {
      for(var d in a)
        b.call(c, a[d], d, a);
    });
    m.vb = (function (a) 
    {
      var b = [], c = 0, d;
      for(d in a)
        b[c ++] = d;
      return b;
    });
    m.wb = (function (a, b, c) 
    {
      for(var d in a)
        if(b.call(c, a[d], d, a))
          return d;
    });
    m.xb = (function (a) 
    {
      var b = {
        
      }, c;
      for(c in a)
        b[c] = a[c];
      return b;
    });
    m.yb = (function (a, b) 
    {
      for(var c, d, e = 1;e < arguments.length;e ++)
      {
        d = arguments[e];
        for(c in d)
          a[c] = d[c];
        for(var f = 0;f < zb.length;f ++)
          c = zb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    });
    var Ab = (function (a) 
    {
      var b = arguments.length;
      if(1 == b && m.ha(arguments[0]))
        return Ab.apply(null, arguments[0]);
      for(var c = {
        
      }, d = 0;d < b;d ++)
        c[arguments[d]] = ! 0;
      return c;
    });
    var Bb = (function () 
    {
      return m.n.navigator || null;
    });
    var Cb = (function () 
    {
      var a = m.n.document;
      return a ? a.documentMode : void 0;
    });
    m.Db = (function (a) 
    {
      return Eb[a] || (Eb[a] = 0 <= m.Fa(Fb, a));
    });
    m.Gb = (function (a) 
    {
      return m.F && m.Hb >= a;
    });
    m.G = (function (a) 
    {
      return m.ja(a) ? window.document.getElementById(a) : a;
    });
    m.Ib = (function (a) 
    {
      var b = window.document;
      return m.ja(a) ? b.getElementById(a) : a;
    });
    m.H = (function (a, b) 
    {
      var c = b || window.document, d = null;
      c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = m.Jb("*", a, b)[0];
      return d || null;
    });
    m.Jb = (function (a, b, c) 
    {
      var d = window.document;
      c = c || d;
      a = a && "*" != a ? a.toUpperCase() : "";
      if(c.querySelectorAll && c.querySelector && (a || b))
        return c.querySelectorAll(a + (b ? "." + b : ""));
      if(b && c.getElementsByClassName)
      {
        c = c.getElementsByClassName(b);
        if(a)
        {
          for(var d = {
            
          }, e = 0, f = 0, h;h = c[f];f ++)
            a == h.nodeName && (d[e ++] = h);
          d.length = e;
          return d;
        }
        return c;
      }
      c = c.getElementsByTagName(a || "*");
      if(b)
      {
        d = {
          
        };
        for(f = e = 0;h = c[f];f ++)
          a = h.className, "function" == typeof a.split && m.Ma(a.split(/\s+/), b) && (d[e ++] = h);
        d.length = e;
        return d;
      }
      return c;
    });
    m.Kb = (function (a, b) 
    {
      m.ub(b, (function (b, d) 
      {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Mb ? a.setAttribute(Mb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
      }));
    });
    m.Nb = (function (a, b, c) 
    {
      return m.Ob(window.document, arguments);
    });
    m.Ob = (function (a, b) 
    {
      var c = b[0], d = b[1];
      if(! Pb && d && (d.name || d.type))
      {
        c = ["<", c, ];
        d.name && c.push(' name="', m.wa(d.name), '"');
        if(d.type)
        {
          c.push(' type="', m.wa(d.type), '"');
          var e = {
            
          };
          m.yb(e, d);
          delete e.type;
          d = e;
        }
        c.push(">");
        c = c.join("");
      }
      c = a.createElement(c);
      d && (m.ja(d) ? c.className = d : m.ha(d) ? c.className = d.join(" ") : m.Kb(c, d));
      2 < b.length && m.Qb(a, c, b, 2);
      return c;
    });
    m.Qb = (function (a, b, c, d) 
    {
      function e(c) 
      {
        c && b.appendChild(m.ja(c) ? a.createTextNode(c) : c);
      }
      for(;d < c.length;d ++)
      {
        var f = c[d];
        ! m.ia(f) || m.ma(f) && 0 < f.nodeType ? e(f) : (0, m.A)(Rb(f) ? m.Ra(f) : f, e);
      }
    });
    m.Sb = (function (a) 
    {
      for(var b;b = a.firstChild;)
        a.removeChild(b);
    });
    m.Tb = (function (a) 
    {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null;
    });
    var Ub = (function (a) 
    {
      if(! a)
        return null;
      if(a.firstChild)
        return a.firstChild;
      for(;a && ! a.nextSibling;)
        a = a.parentNode;
      return a ? a.nextSibling : null;
    });
    var Vb = (function (a) 
    {
      if(! a)
        return null;
      if(! a.previousSibling)
        return a.parentNode;
      for(a = a.previousSibling;a && a.lastChild;)
        a = a.lastChild;
      return a;
    });
    m.Wb = (function (a) 
    {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    });
    var Rb = (function (a) 
    {
      if(a && "number" == typeof a.length)
      {
        if(m.ma(a))
          return "function" == typeof a.item || "string" == typeof a.item;
        if(m.la(a))
          return "function" == typeof a.item;
      }
      return ! 1;
    });
    m.Xb = (function (a, b, c, d) 
    {
      c || (a = a.parentNode);
      c = null == d;
      for(var e = 0;a && (c || e <= d);)
      {
        if(b(a))
          return a;
        a = a.parentNode;
        e ++;
      }
      return null;
    });
    m.Yb = (function (a) 
    {
      var b = ! 1, c;
      return (function () 
      {
        b || (c = a(), b = ! 0);
        return c;
      });
    });
    m.Zb = (function () 
    {
      
    });
    var $b = (function (a) 
    {
      if(a instanceof m.Zb)
        return a;
      if("function" == typeof a.kb)
        return a.kb(! 1);
      if(m.ia(a))
      {
        var b = 0, c = new m.Zb;
        c.next = (function () 
        {
          for(;;)
          {
            if(b >= a.length)
              throw m.ac;
            if(b in a)
              return a[b ++];
            b ++;
          }
        });
        return c;
      }
      throw Error("Not implemented");
    });
    m.bc = (function (a, b, c) 
    {
      if(m.ia(a))
        try
{          (0, m.A)(a, b, c);}
        catch(d)
{          if(d !== m.ac)
            throw d;}

      else
      {
        a = $b(a);
        try
{          for(;;)
            b.call(c, a.next(), void 0, a);}
        catch(e)
{          if(e !== m.ac)
            throw e;}

      }
    });
    m.cc = (function (a) 
    {
      if(m.ia(a))
        return m.Ra(a);
      a = $b(a);
      var b = [];
      m.bc(a, (function (a) 
      {
        b.push(a);
      }));
      return b;
    });
    m.dc = (function (a, b, c, d, e, f, h) 
    {
      var k = "";
      a && (k += a + ":");
      c && (k += "//", b && (k += b + "@"), k += c, d && (k += ":" + d));
      e && (k += e);
      f && (k += "?" + f);
      h && (k += "#" + h);
      return k;
    });
    m.ec = (function (a) 
    {
      if(fc)
      {
        fc = ! 1;
        var b = m.n.location;
        if(b)
        {
          var c = b.href;
          if(c && (c = m.gc(c)) && c != b.hostname)
            throw fc = ! 0, Error();
        }
      }
      return a.match(hc);
    });
    m.ic = (function (a) 
    {
      return a ? (0, window.decodeURI)(a) : a;
    });
    m.gc = (function (a) 
    {
      return m.ic(m.ec(a)[3] || null);
    });
    m.jc = (function (a) 
    {
      a = m.ec(a);
      return m.dc(null, null, null, null, a[5], a[6], a[7]);
    });
    m.kc = (function (a) 
    {
      if(a[1])
      {
        var b = a[0], c = b.indexOf("#");
        0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
        c = b.indexOf("?");
        0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0);
      }
      return a.join("");
    });
    m.lc = (function (a, b, c) 
    {
      if(m.ha(b))
        for(var d = 0;d < b.length;d ++)
          m.lc(a, String(b[d]), c);
      else
        null != b && c.push("&", a, "" === b ? "" : "=", m.va(b));
    });
    var mc = (function (a, b) 
    {
      for(var c in b)
        m.lc(c, b[c], a);
      return a;
    });
    m.nc = (function (a) 
    {
      a = mc([], a);
      a[0] = "";
      return a.join("");
    });
    m.oc = (function (a, b) 
    {
      return m.kc(mc([a, ], b));
    });
    m.pc = (function (a, b, c) 
    {
      a && (c ? a && (a = m.Nb("iframe", {
        src : 'javascript:"data:text/html,<body><img src=\\"' + a + '\\"></body>"',
        style : "display:none"
      }), 
      m.Wb(a).body.appendChild(a)) : qc(a, b));
    });
    var qc = (function (a, b) 
    {
      var c = new window.Image, d = "" + rc ++;
      sc[d] = c;
      c.onload = c.onerror = (function () 
      {
        b && sc[d] && b();
        delete sc[d];
      });
      c.src = a;
      c = eval("null");
    });
    m.tc = (function (a, b, c) 
    {
      uc(c)[a] = b || (0, m.I)();
      b || vc(a);
    });
    var wc = (function (a, b, c) 
    {
      var d = xc(c).span;
      c = uc(c);
      "number" == typeof b ? d[a] = b : b in c && (d[a] = (0, m.I)() - c[b]);
    });
    var yc = (function (a) 
    {
      var b = uc(a), c = xc(a).span, d = zc(a), e = m.q("yt.timing.reportbuilder_");
      if(e)
      {
        if(e = e(b, c, d, a))
          Ac(e), Bc(a), Cc();
        return window.NaN;
      }
      var e = {
        v : 2,
        s : "youtube",
        action : m.v("TIMING_ACTION")
      }, 
      f = m.v("TIMING_INFO") || {
        
      }, 
      h;
      for(h in f)
        d[h] = f[h];
      h = d.srt;
      delete d.srt;
      var k;
      h || 0 === h || (k = Dc.timing || {
        
      }, h = Math.max(0, k.responseStart - k.navigationStart), 
      (0, window.isNaN)(h) && d.pt && (h = d.pt));
      if(h || 0 === h)
        d.srt = h;
      d.h5jse && (f = window.location.protocol + m.q("ytplayer.config.assets.js"), 
      (f = Dc.getEntriesByName ? Dc.getEntriesByName(f)[0] : null) ? d.h5jse = Math.round(d.h5jse - f.responseEnd) : delete d.h5jse);
      f = ! 1;
      b.aft || (b.pbr && b.pbs > b.pbr ? (b.aft = b.pbr, f = ! 0) : b.pbs ? (b.aft = b.pbs, f = ! 0) : b.vr ? (b.aft = b.vr, f = ! 0) : b.aft = b.ol);
      b.gv && f && (c.vl = Math.round(b.aft - b.gv));
      f = b._start;
      if(! Ec)
      {
        k || (k = Dc.timing || {
          
        });
        var p;
        t : if(p = k, p.msFirstPaint)
          p = Math.max(0, p.msFirstPaint);
        else
        {
          var u = window.chrome;
          if(u && (u = u.loadTimes, m.la(u)))
          {
            var u = u(), z = 1000 * Math.min(u.requestTime || window.Infinity, u.startLoadTime || window.Infinity), 
            z = window.Infinity === z ? 0 : p.navigationStart - z;
            p = Math.max(0, Math.round(1000 * u.firstPaintTime + z) || 0);
            break t;
          }
          p = 0;
        }
        0 < p && p > f && (b.fpt = p);
        p = k.redirectEnd - k.redirectStart;
        0 < p && (c.rtime_ = p);
        p = k.domainLookupEnd - k.domainLookupStart;
        0 < p && (c.dns_ = p);
        p = k.connectEnd - k.connectStart;
        0 < p && (c.tcp_ = p);
        p = k.connectEnd - k.secureConnectionStart;
        k.secureConnectionStart && 0 < p && (c.stcp_ = p);
        p = k.responseStart - k.requestStart;
        0 < p && (c.req_ = p);
        p = k.responseEnd - k.responseStart;
        0 < p && (c.rcv_ = p);
        Ec = ! 0;
      }
      for(var O in d)
        "_" != O.charAt(0) && (e[O] = d[O]);
      d = {
        
      };
      O = [];
      for(var U in b)
        "_" != U.charAt(0) && (p = Math.max(Math.round(b[U] - f), 0), d[U] = p, O.push(U + "." + p));
      e.rt = O.join(",");
      b = {
        
      };
      U = [];
      for(var ba in c)
        "_" != ba.charAt(0) && (b[ba] = c[ba], U.push(ba + "." + c[ba]));
      e.it = U.join(",");
      (c = m.q("ytdebug.logTiming")) && c(e, d, b);
      Bc(a);
      Cc();
      m.v("EXP_DEFER_CSI_PING") && window.requestAnimationFrame ? window.requestAnimationFrame(m.s(Ac, e)) : Ac(e);
      return d.aft + (h || 0);
    });
    var Fc = (function (a, b) 
    {
      var c = m.v("TIMING_ACTION"), d = uc(b);
      if(c && d._start)
        if(c = m.v("TIMING_WAIT", []), ! a && c.length)
        {
          for(var e = ! 0, f = 0, h = c.length;f < h;++ f)
            if(! (c[f] in d))
            {
              e = ! 1;
              break;
            }
          if(e)
            return yc(b);
        }
        else
          if(d.ol || d.aft)
            return yc(b);
      return window.NaN;
    });
    var Gc = (function (a) 
    {
      if(m.v("TIMING_WAIT"))
        a = Fc(! 1, a);
      else
        t : {
          var b = m.v("TIMING_ACTION"), c = ! ! m.v("TIMING_WFF"), 
          d = uc(a);
          if(b && d._start)
          {
            if(c && d.vr || ! c && (d.ol || d.aft))
            {
              a = yc(a);
              break t;
            }
            a && yc(a);
          }
          a = window.NaN;
        }
      return a;
    });
    var Ac = (function (a) 
    {
      var b = "https:" == window.location.protocol ? "https://gg.google.com/csi" : "http://csi.gstatic.com/csi", 
      c = "", 
      d;
      for(d in a)
        c += "&" + d + "=" + a[d];
      m.pc(b + "?" + c.substring(1));
    });
    var uc = (function (a) 
    {
      return xc(a).tick;
    });
    var zc = (function (a) 
    {
      return xc(a).info;
    });
    var xc = (function (a) 
    {
      return m.q("ytcsi." + (a || "") + "data_") || Bc(a);
    });
    var Bc = (function (a) 
    {
      var b = {
        tick : {
          
        },
        span : {
          
        },
        info : {
          
        }
      };
      m.l("ytcsi." + (a || "") + "data_", b, void 0);
      return b;
    });
    m.Hc = (function () 
    {
      return ! ! m.q("yt.scheduler.instance");
    });
    m.Ic = (function () 
    {
      return m.Hc() && m.C(window.document.body, "exp-js-scheduler-more");
    });
    m.Jc = (function (a, b) 
    {
      void 0 === b && (b = window.NaN);
      var c = m.q("yt.scheduler.instance.addJob");
      return c ? ((0, window.isNaN)(b) && (b = 0), c(a, 0, b)) : (0, window.isNaN)(b) ? (a(), window.NaN) : m.w(a, b || 0);
    });
    m.Kc = (function (a, b) 
    {
      return m.Jc(a, b);
    });
    m.Lc = (function (a) 
    {
      var b = m.q("yt.scheduler.instance.cancelJob");
      b ? b(a) : m.x(a);
    });
    m.Mc = (function (a) 
    {
      for(var b = 0, c = a.length;b < c;b ++)
        m.Lc(a[b]);
    });
    m.Nc = (function (a, b, c, d, e) 
    {
      this.name = a;
      this.deps = b || [];
      this.page = c || "";
      this.A = d ? m.ab(d) : null;
      this.B = e ? m.ab(e) : null;
      this.k = [];
      this.g = this.j = 0;
    });
    m.Oc = (function (a) 
    {
      m.Ic() ? (m.Lc(a.j), a.j = m.Kc((0, m.r)(a.init, a))) : a.init();
    });
    m.Pc = (function (a) 
    {
      a.name in Qc && Rc(a.name);
      Qc[a.name] = {
        reqs : [],
        disable : (0, m.r)(a.disable, a)
      };
      (0, m.A)(a.deps, (function (b) 
      {
        if(! (b in Qc))
          throw Error("Module " + b + " required by " + a.name);
        Qc[b].reqs.push(a.name);
      }));
      a.enable();
    });
    var Rc = (function (a) 
    {
      if(a in Qc)
      {
        var b = Qc[a];
        (0, m.A)(b.reqs, (function (a) 
        {
          Rc(a);
        }));
        try
{          b.disable();}
        catch(c)
{          }

        delete Qc[a];
      }
    });
    m.Sc = (function (a) 
    {
      return a && "readyState" in a ? a.readyState : 0;
    });
    var Tc = (function () 
    {
      if(m.v("SCHEDULE_AJAX") && window.XMLHttpRequest && ! Uc)
      {
        Vc = m.v("SCHEDULER_BUFFER_LENGTH");
        var a = window.XMLHttpRequest;
        Wc = a.prototype.abort;
        Xc = a.prototype.open;
        Uc = a.prototype.send;
        a.prototype.abort = Yc;
        a.prototype.open = Zc;
        a.prototype.send = $c;
      }
    });
    var Yc = (function () 
    {
      ad(! 0);
      Wc.call(this);
    });
    var Zc = (function () 
    {
      this.url = arguments[1];
      Xc.apply(this, arguments);
    });
    var $c = (function () 
    {
      var a = this, b = arguments;
      if(a.url && a.url.match(bd))
        Uc.apply(a, b);
      else
      {
        if("onloadend" in a)
          a.addEventListener("loadend", (function () 
          {
            4 == m.Sc(a) && ad(! 0);
          }), 
          ! 1);
        else
        {
          var c = a.onreadystatechange;
          a.onreadystatechange = (function () 
          {
            4 == m.Sc(a) && ad(! 0);
            c && c.apply(this, arguments);
          });
        }
        cd.push((function () 
        {
          Uc.apply(a, b);
        }));
        ad();
      }
    });
    var ad = (function (a) 
    {
      a && (dd = ! 1, m.x(ed));
      if(! dd && cd.length)
        if(Vc && ! fd())
          m.x(gd), gd = m.w(ad, 100);
        else
        {
          dd = ! 0;
          a = cd.shift();
          try
{            a();}
          catch(b)
{            ad(! 0);}

          ed = m.w(m.s(ad, ! 0), 5000);
        }
    });
    var fd = (function () 
    {
      var a = Vc, b = m.q("yt.player.getPlayerByElement");
      if(! b)
        return ! 0;
      var b = b("player-api"), c = m.v("ADS_DATA");
      return b && (! c || ! c.show_instream) && b.getVideoLoadedFraction && b.getDuration && b.getCurrentTime && b.getPlayerState ? (c = b.getVideoLoadedFraction() * b.getDuration() - b.getCurrentTime(), 
      0 >= b.getPlayerState() || c > a || .3 < b.getVideoLoadedFraction()) : ! 0;
    });
    m.J = (function (a, b) 
    {
      return a ? a.dataset ? a.dataset[m.hd(b)] : a.getAttribute("data-" + b) : null;
    });
    m.id = (function (a, b) 
    {
      return a ? a.dataset ? m.hd(b) in a.dataset : a.hasAttribute ? ! ! a.hasAttribute("data-" + b) : ! ! a.getAttribute("data-" + b) : ! 1;
    });
    m.hd = (function (a) 
    {
      return jd[a] || (jd[a] = String(a).replace(/\-([a-z])/g, (function (a, c) 
      {
        return c.toUpperCase();
      })));
    });
    m.kd = (function (a, b) 
    {
      var c = m.ld(a);
      window.spf.script.load(a, c, b);
    });
    m.md = (function (a, b) 
    {
      var c = m.ld(a);
      window.spf.script.ignore(c, b);
    });
    m.nd = (function (a) 
    {
      a && (m.ja(a) ? m.kd(a) : m.ha(a) ? (0, m.A)(a, (function (a) 
      {
        m.nd(a);
      })) : m.ub(a, (function (a, c) 
      {
        m.kd(c, (function () 
        {
          m.nd(a);
        }));
      })));
    });
    m.ld = (function (a) 
    {
      var b = "";
      if(a)
      {
        var c = a.indexOf("jsbin/"), d = a.lastIndexOf(".js"), e = c + 6;
        - 1 < c && - 1 < d && d > e && (b = a.substring(e, d), b = b.replace(od, ""), b = b.replace(pd, ""), 
        b = b.replace("debug-", ""), 
        b = b.replace("tracing-", ""));
      }
      return b;
    });
    var qd = (function (a) 
    {
      a = (0, m.rd)(a);
      a = null === a ? null : a.split(".").reverse();
      return (null === a ? ! 1 : "com" == a[0] && a[1].match(/^youtube(?:-nocookie)?$/) ? ! 0 : ! 1) || (null === a ? ! 1 : "google" == a[1] ? ! 0 : "google" == a[2] ? "au" == a[0] && "com" == a[1] ? ! 0 : "uk" == a[0] && "co" == a[1] ? ! 0 : ! 1 : ! 1);
    });
    m.sd = (function (a, b) 
    {
      m.pc("/gen_204?" + a, b);
    });
    var td = (function (a) 
    {
      a = a || {
        
      };
      this.url = a.url || "";
      this.urlV8 = a.url_v8 || "";
      this.urlV9As2 = a.url_v9as2 || "";
      this.args = a.args || m.xb(ud);
      this.assets = a.assets || {
        
      };
      this.attrs = a.attrs || m.xb(vd);
      this.params = a.params || m.xb(wd);
      this.minVersion = a.min_version || "8.0.0";
      this.fallback = a.fallback || null;
      this.fallbackMessage = a.fallbackMessage || null;
      this.html5 = ! ! a.html5;
      this.disable = a.disable || {
        
      };
      this.loaded = ! ! a.loaded;
    });
    m.xd = (function (a) 
    {
      a instanceof td || (a = new td(a));
      return a;
    });
    m.yd = (function (a) 
    {
      this.b = a;
    });
    m.zd = (function (a) 
    {
      a = (a.b.cookie || "").split(m.Ad);
      for(var b = [], c = [], d, e, f = 0;e = a[f];f ++)
        d = e.indexOf("="), - 1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
      return {
        keys : b,
        values : c
      };
    });
    m.Bd = (function (a, b, c) 
    {
      m.Cd.set("" + a, b, c, "/", "youtube.com");
    });
    m.Dd = (function (a, b) 
    {
      return m.Cd.get("" + a, b);
    });
    m.Ed = (function (a, b, c) 
    {
      var d = m.gc(a);
      if(d == m.gc(window.location.href) || ! d && 0 == a.lastIndexOf("/", 0))
        if(a = m.jc(a), d = a.indexOf("#"), a = 0 > d ? a : a.substr(0, d))
          c ? (c = (0, window.parseInt)(c, 10), (0, window.isFinite)(c) && 0 < c && Fd(a, b, c)) : Fd(a, b);
    });
    var Fd = (function (a, b, c) 
    {
      for(var d = 0, e = 0;e < a.length;++ e)
        d = 31 * d + a.charCodeAt(e), d %= 4294967296;
      a = "s_tempdata-" + d;
      c = c || 5;
      b = b ? m.nc(b) : "";
      m.Bd(a, b, c);
    });
    m.Gd = (function (a, b, c) 
    {
      c = c || "";
      window.location = m.oc(a, b || {
        
      }) + c;
    });
    m.Hd = (function (a) 
    {
      (window.ytspf || {
        
      }).enabled ? window.spf.navigate(a) : m.Gd(a);
    });
    m.Id = (function (a, b, c) 
    {
      var d = m.v("EVENT_ID");
      d && (b || (b = {
        
      }), b.ei || (b.ei = d));
      b && m.Ed(a, b);
      if(c)
        return ! 1;
      m.Hd(a);
      return ! 0;
    });
    m.Jd = (function (a, b, c) 
    {
      a.timeOfStartCall = (new Date).getTime();
      if(b && JSON && JSON.stringify)
      {
        var d = JSON.stringify(b);
        200 >= d.length && (a.psdJson = d);
      }
      d = c || m.n;
      d.GOOGLE_FEEDBACK_START_ARGUMENTS = arguments;
      var e = a.serverUri || "//www.google.com/tools/feedback", 
      f = d.GOOGLE_FEEDBACK_START;
      if(f)
        f.apply(d, arguments);
      else
      {
        var e = e + "/load.js?", h;
        for(h in a)
          f = a[h], null != f && ! m.ma(f) && (e += (0, window.encodeURIComponent)(h) + "=" + (0, window.encodeURIComponent)(f) + "&");
        h = d.document;
        d = h.createElement("script");
        d.src = e;
        h.body.appendChild(d);
      }
    });
    m.Kd = (function () 
    {
      var a = window.GOOGLE_FEEDBACK_DESTROY_FUNCTION;
      a && a();
    });
    var Ld = (function (a) 
    {
      a = a.match(/[\d]+/g);
      if(! a)
        return "";
      a.length = 3;
      return a.join(".");
    });
    var Md = (function (a) 
    {
      return (a = a.exec(m.Nd)) ? a[1] : "";
    });
    m.Od = (function (a) 
    {
      var b = a.cloneNode(! 1);
      "TR" == b.tagName || "SELECT" == b.tagName ? (0, m.A)(a.childNodes, (function (a) 
      {
        b.appendChild(m.Od(a));
      })) : b.innerHTML = a.innerHTML;
      return b;
    });
    m.Pd = (function (a) 
    {
      if(a = a || window.event)
      {
        for(var b in a)
          b in Qd || (this[b] = a[b]);
        this.scale = a.scale;
        this.rotation = a.rotation;
        this.ra = a;
        (b = a.target || a.srcElement) && 3 == b.nodeType && (b = b.parentNode);
        this.target = b;
        if(b = a.relatedTarget)
          try
{            b = b.nodeName ? b : null;}
          catch(c)
{            b = null;}

        else
          "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
        this.relatedTarget = b;
        this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
        this.keyCode = a.keyCode ? a.keyCode : a.which;
        this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
        this.altKey = a.altKey;
        this.ctrlKey = a.ctrlKey;
        this.shiftKey = a.shiftKey;
        "MozMousePixelScroll" == this.type ? (this.wheelDeltaX = a.axis == a.HORIZONTAL_AXIS ? a.detail : 0, 
        this.wheelDeltaY = a.axis == a.HORIZONTAL_AXIS ? 0 : a.detail) : window.opera ? (this.wheelDeltaX = 0, this.wheelDeltaY = a.detail) : 0 == a.wheelDelta % 120 ? "WebkitTransform" in window.document.documentElement.style ? window.chrome && 0 == window.navigator.platform.indexOf("Mac") ? (this.wheelDeltaX = a.wheelDeltaX / - 30, this.wheelDeltaY = a.wheelDeltaY / - 30) : (this.wheelDeltaX = a.wheelDeltaX / - 1.2, this.wheelDeltaY = a.wheelDeltaY / - 1.2) : (this.wheelDeltaX = 0, this.wheelDeltaY = a.wheelDelta / - 1.6) : (this.wheelDeltaX = a.wheelDeltaX / - 3, this.wheelDeltaY = a.wheelDeltaY / - 3);
        this.kj = a.pageX;
        this.lj = a.pageY;
      }
    });
    m.Rd = (function (a, b, c, d) 
    {
      return m.wb(m.Sd, (function (e) 
      {
        return e[0] == a && e[1] == b && e[2] == c && e[4] == ! ! d;
      }));
    });
    m.K = (function (a, b, c, d) 
    {
      if(! a || ! a.addEventListener && ! a.attachEvent)
        return "";
      d = ! ! d;
      var e = m.Rd(a, b, c, d);
      if(e)
        return e;
      var e = ++ Td.count + "", f = ! ("mouseenter" != b && "mouseleave" != b || ! a.addEventListener || "onmouseenter" in window.document), 
      h;
      h = f ? (function (d) 
      {
        d = new m.Pd(d);
        if(! m.Xb(d.relatedTarget, (function (b) 
        {
          return b == a;
        }), 
        ! 0))
          return d.currentTarget = a, d.type = b, c.call(a, d);
      }) : (function (b) 
      {
        b = new m.Pd(b);
        b.currentTarget = a;
        return c.call(a, b);
      });
      h = m.ab(h);
      m.Sd[e] = [a, b, c, h, d, ];
      a.addEventListener ? "mouseenter" == b && f ? a.addEventListener("mouseover", h, d) : "mouseleave" == b && f ? a.addEventListener("mouseout", h, d) : "mousewheel" == b && "MozBoxSizing" in window.document.documentElement.style ? a.addEventListener("MozMousePixelScroll", h, d) : a.addEventListener(b, h, d) : a.attachEvent("on" + b, h);
      return e;
    });
    m.L = (function (a) 
    {
      a && ("string" == typeof a && (a = [a, ]), (0, m.A)(a, (function (a) 
      {
        if(a in m.Sd)
        {
          var c = m.Sd[a], d = c[0], e = c[1], f = c[3], c = c[4];
          d.removeEventListener ? d.removeEventListener(e, f, c) : d.detachEvent && d.detachEvent("on" + e, f);
          delete m.Sd[a];
        }
      })));
    });
    var Ud = (function () 
    {
      this.j = this.g = this.b = 0;
      this.k = "";
      var a = m.q("window.navigator.plugins"), b = m.q("window.navigator.mimeTypes"), 
      a = a && a["Shockwave Flash"], 
      b = b && b["application/x-shockwave-flash"], 
      b = a && b && b.enabledPlugin && a.description || "";
      if(a = b)
      {
        var c = a.indexOf("Shockwave Flash");
        0 <= c && (a = a.substr(c + 15));
        for(var c = a.split(" "), d = "", a = "", e = 0, f = c.length;e < f;e ++)
          if(d)
            if(a)
              break;
            else
              a = c[e];
          else
            d = c[e];
        d = d.split(".");
        c = (0, window.parseInt)(d[0], 10) || 0;
        d = (0, window.parseInt)(d[1], 10) || 0;
        e = 0;
        if("r" == a.charAt(0) || "d" == a.charAt(0))
          e = (0, window.parseInt)(a.substr(1), 10) || 0;
        a = [c, d, e, ];
      }
      else
        a = [0, 0, 0, ];
      this.k = b;
      b = a;
      this.b = b[0];
      this.g = b[1];
      this.j = b[2];
      if(0 >= this.b)
      {
        var h, k, p, u;
        if(m.Vd)
          try
{            h = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash");}
          catch(z)
{            h = null;}

        else
          p = window.document.body, u = window.document.createElement("object"), 
          u.setAttribute("type", "application/x-shockwave-flash"), 
          h = p.appendChild(u);
        if(h && "GetVariable" in h)
          try
{            k = h.GetVariable("$version");}
          catch(O)
{            k = "";}

        p && u && p.removeChild(u);
        (h = k || "") ? (h = h.split(" ")[1].split(","), h = [(0, window.parseInt)(h[0], 10) || 0, (0, window.parseInt)(h[1], 10) || 0, (0, window.parseInt)(h[2], 10) || 0, ]) : h = [0, 0, 0, ];
        this.b = h[0];
        this.g = h[1];
        this.j = h[2];
      }
    });
    var Wd = (function (a, b, c, d) 
    {
      b = "string" == typeof b ? b.split(".") : [b, c, d, ];
      b[0] = (0, window.parseInt)(b[0], 10) || 0;
      b[1] = (0, window.parseInt)(b[1], 10) || 0;
      b[2] = (0, window.parseInt)(b[2], 10) || 0;
      return a.b > b[0] || a.b == b[0] && a.g > b[1] || a.b == b[0] && a.g == b[1] && a.j >= b[2];
    });
    var Xd = (function (a) 
    {
      return - 1 < a.k.indexOf("Gnash") && - 1 == a.k.indexOf("AVM2") || 9 == a.b && 1 == a.g || 9 == a.b && 0 == a.g && 1 == a.j ? ! 1 : 9 <= a.b;
    });
    var Yd = (function (a) 
    {
      return m.Zd ? ! Wd(a, 11, 2) : m.$d ? ! Wd(a, 11, 3) : ! Xd(a);
    });
    m.ae = (function () 
    {
      return m.be ? "Webkit" : m.ce ? "Moz" : m.F ? "ms" : m.de ? "O" : null;
    });
    m.ee = (function () 
    {
      return m.be ? "-webkit" : m.ce ? "-moz" : m.F ? "-ms" : m.de ? "-o" : null;
    });
    m.fe = (function (a, b, c, d) 
    {
      this.top = a;
      this.right = b;
      this.bottom = c;
      this.left = d;
    });
    m.he = (function (a, b) 
    {
      return a && b ? b instanceof m.fe ? b.left >= a.left && b.right <= a.right && b.top >= a.top && b.bottom <= a.bottom : b.x >= a.left && b.x <= a.right && b.y >= a.top && b.y <= a.bottom : ! 1;
    });
    m.ie = (function (a, b) 
    {
      var c = m.Ia(b);
      if(void 0 === a.style[c])
      {
        var d = m.ae() + m.Ja(c);
        if(void 0 !== a.style[d])
          return d;
      }
      return c;
    });
    m.je = (function (a, b) 
    {
      "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
      return a;
    });
    m.ke = (function (a, b) 
    {
      a.style.display = b ? "" : "none";
    });
    m.le = (function () 
    {
      this.b = "";
      this.g = me;
    });
    var ne = (function (a) 
    {
      return a instanceof m.le && a.constructor === m.le && a.g === me ? a.b : "type_error:Const";
    });
    var oe = (function () 
    {
      this.b = "";
      this.g = pe;
    });
    var qe = (function (a) 
    {
      var b = new oe;
      b.b = a;
      return b;
    });
    var re = (function () 
    {
      this.b = se;
    });
    var te = (function () 
    {
      this.b = "";
      this.j = ue;
      this.g = null;
    });
    var ve = (function (a) 
    {
      return a instanceof te && a.constructor === te && a.j === ue ? a.b : "type_error:SafeHtml";
    });
    m.we = (function (a, b) 
    {
      if(! xe.test(a))
        throw Error("Invalid tag name <" + a + ">.");
      if(a.toLowerCase() in ye)
        throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
      var c = null, d = "<" + a;
      if(b)
        for(var e in b)
        {
          if(! xe.test(e))
            throw Error('Invalid attribute name "' + e + '".');
          var f = b[e];
          if(null != f)
          {
            if(f instanceof m.le)
              f = ne(f);
            else
              if("style" == e.toLowerCase())
              {
                if(! m.ma(f))
                  throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof f + " given: " + f);
                if(! (f instanceof oe))
                {
                  var h = "", k = void 0;
                  for(k in f)
                  {
                    if(! /^[-_a-zA-Z0-9]+$/.test(k))
                      throw Error("Name allows only [-_a-zA-Z0-9], got: " + k);
                    var p = f[k];
                    null != p && (p instanceof m.le ? p = ne(p) : ze.test(p) || (p = "zClosurez"), 
                    h += k + ":" + p + ";");
                  }
                  f = h ? qe(h) : Ae;
                }
                f = f instanceof oe && f.constructor === oe && f.g === pe ? f.b : "type_error:SafeStyle";
              }
              else
              {
                if(/^on/i.test(e))
                  throw Error('Attribute "' + e + '" requires goog.string.Const value, "' + f + '" given.');
                if(f instanceof re)
                  f = f instanceof re && f.constructor === re && f.b === se ? "" : "type_error:SafeUrl";
                else
                  if(e.toLowerCase() in Be)
                    throw Error('Attribute "' + e + '" requires goog.string.Const or goog.html.SafeUrl value, "' + f + '" given.');
              }
            d += " " + e + '="' + m.wa(String(f)) + '"';
          }
        }
      e = void 0;
      m.da(e) ? m.ha(e) || (e = [e, ]) : e = [];
      ! 0 === Ce[a.toLowerCase()] ? d += ">" : (c = m.De(e), d += ">" + ve(c) + "</" + a + ">", c = c.wg());
      (e = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(e) ? c = 0 : c = null);
      return Ee(d, c);
    });
    m.De = (function (a) 
    {
      function b(a) 
      {
        if(m.ha(a))
          (0, m.A)(a, b);
        else
        {
          if(! (a instanceof te))
          {
            var f = null;
            a.un && (f = a.wg());
            a = Ee(m.wa(a.jh ? a.ih() : String(a)), f);
          }
          d += ve(a);
          a = a.wg();
          0 == c ? c = a : 0 != a && c != a && (c = null);
        }
      }
      var c = 0, d = "";
      (0, m.A)(arguments, b);
      return Ee(d, c);
    });
    var Ee = (function (a, b) 
    {
      var c = new te;
      c.b = a;
      c.g = b;
      return c;
    });
    m.Fe = (function (a, b) 
    {
      a.innerHTML = ve(b);
    });
    m.Ge = (function (a, b) 
    {
      (a = m.G(a)) && a.style && (m.ke(a, b), m.sb(a, "hid", ! b));
    });
    m.M = (function (a) 
    {
      (0, m.A)(arguments, (function (a) 
      {
        m.Ge(a, ! 0);
      }));
    });
    m.He = (function (a) 
    {
      var b = m.Ie, c = m.v("FEEDBACK_LOCALE_EXTRAS", {
        
      });
      a ? m.yb(b, a) : m.yb(b, c);
      return b;
    });
    m.Je = (function (a) 
    {
      var b = m.v("SESSION_INDEX"), c = m.v("FEEDBACK_BUCKET_ID");
      a = {
        abuseLink : "https://support.google.com/youtube/bin/answer.py?answer=140536",
        customZIndex : "2000000005",
        locale : m.v("FEEDBACK_LOCALE_LANGUAGE"),
        productId : (a || "59") + ""
      };
      b && (a.authuser = b + "");
      c && (a.bucket = c);
      return a;
    });
    m.Ke = (function (a, b) 
    {
      try
{        var c = m.He(b);
        try
{          var d, e = m.q("yt.player.getPlayerByElement");
          (d = e ? e("player-api") : null) && d.pauseVideo && d.pauseVideo();
          var f = Ud.getInstance();
          c.flashVersion = f.getVersion().join(".");
          d && (c.playback_id = d.getVideoData().cpn);}
        catch(h)
{          }

        var k = m.Je(a);
        m.Kd();
        m.Jd(k, c);
        return ! 1;}
      catch(p)
{        return ! 0;}

    });
    m.Le = (function () 
    {
      var a = m.Dd("PREF");
      if(a)
        for(var a = (0, window.unescape)(a).split("&"), b = 0;b < a.length;b ++)
        {
          var c = a[b].split("="), d = c[0];
          (c = c[1]) && (m.Me[d] = c.toString());
        }
    });
    var Ne = (function (a) 
    {
      if(/^f([1-9][0-9]*)$/.test(a))
        throw "ExpectedRegexMatch: " + a;
    });
    var Oe = (function (a) 
    {
      if(! /^\w+$/.test(a))
        throw "ExpectedRegexMismatch: " + a;
    });
    m.Pe = (function (a) 
    {
      a = void 0 !== m.Me[a] ? m.Me[a].toString() : null;
      return null != a && /^[A-Fa-f0-9]+$/.test(a) ? (0, window.parseInt)(a, 16) : null;
    });
    m.Qe = (function (a, b) 
    {
      return ! ! ((m.Pe("f" + (Math.floor(b / 31) + 1)) || 0) & 1 << b % 31);
    });
    var Re = (function (a, b, c) 
    {
      if(b)
      {
        a = m.ja(a) ? m.Ib(a) : a;
        c = m.xd(c);
        var d = m.xb(c.attrs);
        d.tabindex = 0;
        var e = m.xb(c.params);
        e.flashvars = m.nc(c.args);
        if(m.Vd)
        {
          d.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
          e.movie = b;
          b = window.document.createElement("object");
          for(var f in d)
            b.setAttribute(f, d[f]);
          for(f in e)
            d = window.document.createElement("param"), d.setAttribute("name", f), 
            d.setAttribute("value", e[f]), 
            b.appendChild(d);
        }
        else
        {
          d.type = "application/x-shockwave-flash";
          d.src = b;
          b = window.document.createElement("embed");
          b.setAttribute("name", d.id);
          for(f in d)
            b.setAttribute(f, d[f]);
          for(f in e)
            b.setAttribute(f, e[f]);
        }
        e = window.document.createElement("div");
        e.appendChild(b);
        a.innerHTML = e.innerHTML;
      }
    });
    m.Se = (function (a, b) 
    {
      a = m.ja(a) ? m.Ib(a) : a;
      b = m.xd(b);
      if(window != window.top)
      {
        var c = null;
        window.document.referrer && (c = window.document.referrer.substring(0, 128));
        b.args.framer = c;
      }
      c = Te();
      Wd(c, b.minVersion) ? (c = Ue(b, c), Re(a, c, b)) : Ve(a, b, c);
    });
    var We = (function (a, b, c) 
    {
      if(a && a.attrs && a.attrs.id)
      {
        a = m.xd(a);
        var d = ! ! b, e = m.G(a.attrs.id), f = e ? e.parentNode : null;
        if(e && f)
        {
          if(window != window.top)
          {
            var h = null;
            if(window.document.referrer)
            {
              var k = window.document.referrer.substring(0, 128);
              qd(k) || (h = k);
            }
            else
              h = "unknown";
            h && (d = ! 0, a.args.framer = h);
          }
          h = Te();
          if(Wd(h, a.minVersion))
          {
            var k = Ue(a, h), p = "";
            - 1 < window.navigator.userAgent.indexOf("Sony/COM2") || (p = e.getAttribute("src") || e.movie);
            (p != k || d) && Re(f, k, a);
            Yd(h) && Xe();
          }
          else
            Ve(f, a, h);
          c && c();
        }
        else
          m.w((function () 
          {
            We(a, b, c);
          }), 
          50);
      }
    });
    var Ve = (function (a, b, c) 
    {
      0 == c.b && b.fallback ? b.fallback() : 0 == c.b && b.fallbackMessage ? b.fallbackMessage() : a.innerHTML = '<div id="flash-upgrade">' + m.hb("FLASH_UPGRADE", void 0, 'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>') + "</div>";
    });
    var Ue = (function (a, b) 
    {
      var c;
      (c = Xd(b) && a.url) || (c = (- 1 < window.navigator.userAgent.indexOf("Sony/COM2") && ! Wd(b, 9, 1, 58) ? ! 1 : ! 0) && a.urlV9As2);
      return c || a.urlV8 || a.url;
    });
    var Te = (function () 
    {
      var a = Ud.getInstance(), b = m.Le.getInstance();
      b.set("fv", a.getVersion().join("."));
      b.save();
      return a;
    });
    var Xe = (function () 
    {
      var a = m.G("flash10-promo-div"), b = m.Qe(m.Le.getInstance(), 107);
      a && ! b && m.M(a);
    });
    m.Ye = (function (a, b) 
    {
      var c = a.match(Ze);
      window.spf.style.load(a, c ? c[1] : "", b);
    });
    var $e = (function () 
    {
      if(2.2 == af)
        return ! 0;
      var a;
      a = m.q("yt.player.utils.videoElement_");
      a || (a = window.document.createElement("video"), m.l("yt.player.utils.videoElement_", a, void 0));
      try
{        return ! (! a || ! a.canPlayType || ! a.canPlayType('video/mp4; codecs="avc1.42001E, mp4a.40.2"') && ! a.canPlayType('video/webm; codecs="vp8.0, vorbis"'));}
      catch(b)
{        return ! 1;}

    });
    var bf = (function () 
    {
      
    });
    m.cf = (function () 
    {
      
    });
    m.df = (function (a) 
    {
      this.b = a;
    });
    m.ef = (function () 
    {
      var a = null;
      try
{        a = window.localStorage || null;}
      catch(b)
{        }

      this.b = a;
    });
    var ff = (function () 
    {
      var a = null;
      try
{        a = window.sessionStorage || null;}
      catch(b)
{        }

      this.b = a;
    });
    m.gf = (function (a) 
    {
      a = String(a);
      if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, 
      "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
        try
{          return eval("(" + a + ")");}
        catch(b)
{          }

      throw Error("Invalid JSON string: " + a);
    });
    m.hf = (function (a) 
    {
      return m.jf(new m.kf(void 0), a);
    });
    m.kf = (function (a) 
    {
      this.b = a;
    });
    m.jf = (function (a, b) 
    {
      var c = [];
      lf(a, b, c);
      return c.join("");
    });
    var lf = (function (a, b, c) 
    {
      switch(typeof b){
        case "string":
          mf(b, c);
          break;

        case "number":
          c.push((0, window.isFinite)(b) && ! (0, window.isNaN)(b) ? b : "null");
          break;

        case "boolean":
          c.push(b);
          break;

        case "undefined":
          c.push("null");
          break;

        case "object":
          if(null == b)
          {
            c.push("null");
            break;
          }
          if(m.ha(b))
          {
            var d = b.length;
            c.push("[");
            for(var e = "", f = 0;f < d;f ++)
              c.push(e), e = b[f], lf(a, a.b ? a.b.call(b, String(f), e) : e, c), 
              e = ",";
            c.push("]");
            break;
          }
          c.push("{");
          d = "";
          for(f in b)
            Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), mf(f, c), c.push(":"), lf(a, a.b ? a.b.call(b, f, e) : e, c), 
            d = ","));
          c.push("}");
          break;

        case "function":
          break;

        default:
          throw Error("Unknown type: " + typeof b);
        
      }
    });
    var mf = (function (a, b) 
    {
      b.push('"', a.replace(nf, (function (a) 
      {
        if(a in of)
          return of[a];
        var b = a.charCodeAt(0), e = "\\u";
        16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
        return of[a] = e + b.toString(16);
      })), 
      '"');
    });
    var pf = (function (a) 
    {
      this.b = a;
    });
    var qf = (function (a) 
    {
      this.b = a;
    });
    var rf = (function (a) 
    {
      this.data = a;
    });
    var sf = (function (a) 
    {
      return ! m.da(a) || a instanceof rf ? a : new rf(a);
    });
    m.tf = (function (a) 
    {
      a = a.data;
      if(! m.da(a))
        throw "Storage: Invalid value was encountered";
      return a;
    });
    var uf = (function (a) 
    {
      this.b = a;
    });
    m.vf = (function (a) 
    {
      var b = a.creation;
      a = a.expiration;
      return ! ! a && a < (0, m.I)() || ! ! b && b > (0, m.I)();
    });
    m.wf = (function (a) 
    {
      this.b = a;
    });
    m.xf = (function (a, b, c) 
    {
      var d = c && 0 < c ? c : 0;
      c = d ? (0, m.I)() + 1000 * d : 0;
      if((d = d ? m.yf : m.zf) && window.JSON)
      {
        m.ja(b) || (b = JSON.stringify(b, void 0));
        try
{          d.set(a, b, c);}
        catch(e)
{          d.remove(a);}

      }
    });
    m.Af = (function (a) 
    {
      if(! m.zf && ! m.yf || ! window.JSON)
        return null;
      var b;
      try
{        b = m.zf.get(a);}
      catch(c)
{        }

      if(! m.ja(b))
        try
{          b = m.yf.get(a);}
        catch(d)
{          }

      if(! m.ja(b))
        return null;
      try
{        b = JSON.parse(b, void 0);}
      catch(e)
{        }

      return b;
    });
    var Bf = (function () 
    {
      var a = {
        volume : 100,
        muted : ! 1
      }, 
      b = m.Af("yt-player-volume") || {
        
      };
      a.volume = (0, window.isNaN)(b.volume) ? 100 : m.tb(b.volume, 0, 100);
      a.muted = void 0 == b.muted ? ! 1 : b.muted;
      return a;
    });
    var Cf = (function (a, b) 
    {
      this.j = this.Tc = a;
      this.J = b;
      this.A = ! 1;
      this.b = {
        
      };
      this.S = this.D = null;
      this.N = new m.Xa;
      m.Ua(this, this.N);
      this.k = {
        
      };
      this.B = this.W = this.g = this.ka = this.$ = null;
      this.P = ! 1;
      this.ma = this.C = null;
      this.ba = {
        
      };
      this.$a = ["onReady", ];
      this.wa = null;
      this.Ha = 0;
      if(this.F = ! ! m.v("PLAYER_ENABLE_SHARED_UI"))
        this.Tc = window.document.createElement("div"), this.j.appendChild(this.Tc), 
        this.j.style.position = "relative";
      this.ia = ! 1;
      this.Ea = ! ! m.v("PLAYER_PERSISTENCE_REFACTOR");
      Df(this);
      this.Od("onVolumeChange", (0, m.r)(this.Xn, this));
      this.Od("onError", (0, m.r)(this.Wn, this));
      this.Od("onTabOrderChange", (0, m.r)(this.Vn, this));
      this.Od("WATCH_LATER_VIDEO_ADDED", (0, m.r)(this.Yn, this));
      this.Od("WATCH_LATER_VIDEO_REMOVED", (0, m.r)(this.Zn, this));
    });
    var Ef = (function (a, b) 
    {
      a.ka = b;
      a.$ = b.clone();
      a.g = a.$.attrs.id || a.g;
      "video-player" == a.g && (a.g = a.J, a.$.attrs.id = a.J);
      a.j.id == a.g && (a.g = a.g + "-player", a.$.attrs.id = a.g);
      var c = a.$.args, d;
      if(! (d = a.$.args.eurl))
      {
        d = window.document.location.toString();
        var e = ! ! d && - 1 != d.search(Ff), f = - 1 != d.indexOf("/embed/");
        e != f && m.db(Error(d + " behavior is not consistent"));
        d = f ? window.document.referrer && window.document.referrer.substring(0, 128) || "unknown" : d;
      }
      c.eurl = d;
      a.$.args.enablejsapi = "1";
      a.$.args.playerapiid = a.J;
      a.W || (a.W = Gf(a, a.$.args.jsapicallback || "onYouTubePlayerReady"));
      a.$.args.jsapicallback = null;
      a.F && (a.$.args.controls = "0");
      if(c = a.$.attrs.width)
        a.j.style.width = m.je(Number(c) || c, ! 0);
      if(c = a.$.attrs.height)
        a.j.style.height = m.je(Number(c) || c, ! 0);
      a.j.style.overflow = "hidden";
    });
    var Hf = (function (a) 
    {
      a.$.loaded || (a.$.loaded = ! 0, "0" != a.$.args.autoplay ? a.b.loadVideoByPlayerVars(a.$.args) : a.b.cueVideoByPlayerVars(a.$.args));
    });
    var If = (function (a) 
    {
      if(! m.da(a.$.disable.flash))
      {
        var b = a.$.disable, c;
        c = Wd(Te(), a.$.minVersion);
        b.flash = ! c;
      }
      return ! a.$.disable.flash;
    });
    var Jf = (function (a) 
    {
      var b = m.G(a.g);
      b && b.stopVideo && b.stopVideo();
      if(If(a))
      {
        var c = a.$;
        b && b.getUpdatedConfigurationData && (b = m.xd(b.getUpdatedConfigurationData()), b.args.video_id == c.args.video_id && (c = b));
        c.args.autoplay = 1;
        c.args.html5_unavailable = "1";
        Ef(a, c);
        Kf(a, "flash");
      }
    });
    var Kf = (function (a, b) 
    {
      if(! a.ca())
      {
        if(! b)
        {
          var c;
          if(! (c = ! a.$.html5 && If(a)))
          {
            if(! m.da(a.$.disable.html5))
            {
              if(c = $e())
                c = Lf(a) || a.$.assets.js;
              a.$.disable.html5 = ! c;
              c || (a.$.args.html5_unavailable = "1");
            }
            c = ! ! a.$.disable.html5;
          }
          b = c ? If(a) ? "flash" : "unsupported" : "html5";
        }
        ("flash" == b ? a.zv : "html5" == b ? a.Av : a.Bv).call(a);
        a.F && ! a.ia && Mf(a);
      }
    });
    var Lf = (function (a) 
    {
      var b = ! 0;
      a.Ea && ((b = m.G(a.g)) && a.$ ? (a = a.$, a = m.J(b, "version") == a.assets.js) : a = ! 1, 
      b = a);
      return b && ! ! m.q("yt.player.Application.create");
    });
    var Nf = (function (a, b, c) 
    {
      var d = b[c];
      return (function () 
      {
        try
{          return a.wa = null, d.apply(b, arguments);}
        catch(e)
{          "Bad NPObject as private data!" != e.message && (e.message += " (" + c + ")", a.wa = e, m.db(e, "WARNING"));}

      });
    });
    var Df = (function (a) 
    {
      a.A = ! 1;
      if(a.S)
        for(var b in a.k)
          a.S(b, a.k[b]);
      a.D = null;
      a.S = null;
      for(var c in a.b)
        a.b[c] = null;
      a.b.addEventListener = (0, m.r)(a.Od, a);
      a.b.removeEventListener = (0, m.r)(a.zr, a);
      a.b.destroy = (0, m.r)(a.dispose, a);
      a.b.getLastError = (0, m.r)(a.xr, a);
      a.b.getPlayerType = (0, m.r)(a.yr, a);
      a.b.getCurrentVideoConfig = (0, m.r)(a.wr, a);
      a.b.loadNewVideoConfig = (0, m.r)(a.ci, a);
      a.b.isReady = (0, m.r)(a.Ar, a);
    });
    var Gf = (function (a, b) 
    {
      var c = b;
      if("string" == typeof b)
      {
        if(a.ba[b])
          return a.ba[b];
        c = (function () 
        {
          var a = m.q(b);
          a && a.apply(m.n, arguments);
        });
        a.ba[b] = c;
      }
      return c ? c : null;
    });
    var Of = (function (a, b) 
    {
      var c = "ytPlayer" + b + a.J;
      a.k[b] = c;
      m.n[c] = (function (c) 
      {
        m.w((function () 
        {
          a.ca() || a.N.U(b, c);
        }), 
        0);
      });
      return c;
    });
    var Pf = (function (a) 
    {
      return (a = m.G(a.g)) ? "div" == a.tagName.toLowerCase() ? "html5" : "flash" : null;
    });
    var Rf = (function (a) 
    {
      a.cancel();
      Df(a);
      a.B = null;
      a.$.loaded = ! 1;
      var b = m.G(a.g);
      "html5" == Pf(a) ? a.ma = b : b && b.destroy && b.destroy();
      a.F && m.Tb(m.G(a.g));
      m.Sb(a.Tc);
    });
    var Mf = (function (a) 
    {
      a.$.assets.js_sharedui && (a.ia = ! 0, m.Ye(a.$.assets.css_sharedui), m.kd(a.$.assets.js_sharedui, (0, m.r)((function () 
      {
        this.b.addEventListener("onReady", (0, m.r)(this.gt, this));
      }), 
      a)));
    });
    m.Sf = (function (a, b) 
    {
      a = m.ja(a) ? m.Ib(a) : a;
      b = m.xd(b);
      var c = Tf + "_" + m.na(a), d = Uf[c];
      if(d)
        return d.ci(b), d.b;
      d || (d = new Cf(a, c), Uf[c] = d, m.B("player-added", d.b), 
      m.Va(d, m.s(Vf, d)));
      m.w((function () 
      {
        d.ci(b);
      }), 0);
      return d.b;
    });
    var Wf = (function () 
    {
      for(var a in Uf)
      {
        var b = Uf[a];
        b && b.cancel();
      }
    });
    m.Xf = (function (a) 
    {
      if(a = m.G(a))
        a = Tf + "_" + m.na(a), (a = Uf[a]) && a.dispose();
    });
    var Vf = (function (a) 
    {
      Uf[a.getId()] = null;
    });
    m.Yf = (function (a) 
    {
      a = m.G(a);
      if(! a)
        return null;
      var b = Tf + "_" + m.na(a), c = Uf[b];
      c || (c = new Cf(a, b), Uf[b] = c);
      return c.b;
    });
    var Zf = (function () 
    {
      m.l("yt.player.exports.navigate", m.Id, void 0);
      m.l("yt.player.embed", m.Sf, void 0);
      m.l("yt.player.destroy", m.Xf, void 0);
      m.l("yt.player.cancelAll", Wf, void 0);
      m.l("yt.player.getPlayerByElement", m.Yf, void 0);
      m.l("yt.player.exports.feedbackStart", m.Ke, void 0);
      $f = $f || ! ! m.v("PLAYER_WATCH_WHILE") || ! ! m.Dd("watch_while");
      var a = m.q("ytplayer.config");
      ag(a);
      m.q("ytspf.enabled") && (bg = m.bb(cg, 5000), (a = m.dg()) ? (a.addEventListener("onReady", cg), a.addEventListener("onStateChange", cg), 
      $f && (a.addEventListener("onReady", eg), a.addEventListener("onStateChange", eg))) : fg("unable to init PP monitor"));
    });
    var ag = (function (a) 
    {
      Wf();
      if(a = a || null)
      {
        var b = m.dg(), c = ! 0;
        b && b.getVideoData && (c = b.getVideoData(), c = c.video_id != a.args.video_id || c.list != a.args.list);
        c ? (gg = "", m.Sf("player-api", a)) : b.playVideo();
        a = m.xd(a);
        a.loaded = ! 0;
      }
      eg();
      cg();
      m.l("ytplayer.config", a, void 0);
    });
    m.dg = (function () 
    {
      var a = m.q("yt.player.getPlayerByElement");
      return a ? a("player-api") : null;
    });
    var cg = (function () 
    {
      var a = m.G("player"), b = m.dg();
      if(a && b)
      {
        var a = a && m.C(a, "off-screen"), b = 1 == (b && b.isReady() ? b.getPlayerState() : void 0), 
        c = "watch" == m.v("PAGE_NAME");
        hg && ! $f && b && fg("minimized PP playing");
        a && c ? fg("PP off-screen on watch") : $f || a || c || fg("PP !off-screen off watch");
      }
    });
    var eg = (function () 
    {
      if($f)
      {
        var a = "watch" == m.v("PAGE_NAME"), b = m.dg();
        1 == (b && b.isReady() ? b.getPlayerState() : void 0) ? ig(! 0) : a && ig(! 1);
        jg();
      }
    });
    var jg = (function () 
    {
      var a = m.G("player"), b = m.G("player-mole-container");
      hg = ! a || m.C(a, "off-screen") || ! b || m.C(b, "watch-mole");
      (a = m.dg()) && a.isReady() && a.setMinimized(hg);
    });
    var fg = (function (a) 
    {
      var b = m.v("PAGE_NAME");
      b && (b = [b, gg, m.q("_spf_state.nav-counter"), ], a += "(" + b.join(",") + ")", 
      m.l("yt.www.persistentplayer.issue", a, void 0), 
      m.db(Error(a), "WARNING"));
    });
    var ig = (function (a) 
    {
      m.sb(m.G("player-mole-container"), "video-mole", a);
      jg();
    });
    var kg = (function () 
    {
      m.tc("ol");
      lg("init");
      var a = m.v("PAGE_NAME");
      a && lg("init-" + a);
      Gc();
    });
    var lg = (function (a) 
    {
      m.Hc() ? mg.push(m.Jc(m.s(m.ob, a), 0)) : m.B(a);
    });
    var ng = (function () 
    {
      m.Mc(mg);
      mg.length = 0;
      var a = m.v("PAGE_NAME");
      a && m.ob("dispose-" + a);
      m.ob("dispose");
    });
    var og = (function () 
    {
      kg();
    });
    var pg = (function () 
    {
      m.v("TIMING_REPORT_ON_UNLOAD") && Fc(! 0);
      ng();
    });
    var qg = (function (a, b, c) 
    {
      for(var d = window.document.getElementsByTagName("script"), e = ! 1, 
      f = 0, 
      h = d.length;f < h;f ++)
        if(0 < d[f].src.indexOf("/debug-"))
        {
          e = ! 0;
          break;
        }
      e && (d = Error(), d.message = a, d.fileName = b, d.lineNumber = c, 
      m.db(d));
    });
    var rg = (function () 
    {
      sg = 1;
      tg = 0;
      m.v("TIMING_REPORT_ON_UNLOAD") && Fc(! 0);
      Bc(void 0);
      Cc();
      vc("mark_navigation_requested");
      ug(vg);
      m.ob("navigate");
    });
    var wg = (function (a) 
    {
      a = a.detail.part || a.detail.partial;
      m.tc("nc" + tg);
      ++ tg;
      var b = 1 == sg;
      sg = 2;
      b ? (ug(xg), yg()) : ug(zg);
      (a = a.data && a.data.swfcfg) && Ag(a);
    });
    var Bg = (function () 
    {
      
    });
    var Cg = (function (a) 
    {
      a = a.detail.response;
      var b = 1 == sg;
      sg = 3;
      b && (ug(Dg), yg());
      (a = a.data && a.data.swfcfg) && Ag(a);
    });
    var Eg = (function (a) 
    {
      a = a.detail.response.timing;
      var b = window._spf_state, b = b && b["nav-counter"] || 0;
      zc(void 0).yt_nav = b;
      m.tc("_start", a.responseStart);
      b = Math.max(0, a.responseStart - a.navigationStart);
      zc(void 0).srt = b;
      b = a.spfPrefetchType || "none";
      zc(void 0).yt_pft = b;
      wc("req", a.responseStart - a.fetchStart);
      ug(Fg);
      window.document.getElementById("content").style.height = "";
      kg();
      sg = 0;
    });
    var Gg = (function (a) 
    {
      var b = a.detail.url;
      if(a = a.detail.err)
        a.message && (a.message += " (url: " + b + ")"), m.db(a);
    });
    var Hg = (function (a) 
    {
      m.sd("spfreload=1&url=" + m.va(a.detail.url));
    });
    var Ig = (function () 
    {
      Jg();
    });
    var Kg = (function () 
    {
      
    });
    var yg = (function () 
    {
      window.scroll(0, 0);
      var a = window.document.getElementById("content");
      - 1 < a.className.indexOf("spf-animate") && (a.style.height = a.clientHeight + "px");
      ng();
      for(var b in m.$a)
        delete m.$a[b];
      m.l("ytplayer.config", null, void 0);
      if(! $f)
        if((a = m.dg()) && a.stopVideo)
        {
          if(a.stopVideo(), a = a.getLastError())
            gg = a, (a = m.G("movie_player")) && a.stopVideo ? (a.stopVideo(), gg = "recovered") : gg = "missing2";
        }
        else
          gg = "missing";
      cg();
    });
    var Ag = (function (a) 
    {
      "cfg" in uc(void 0) || m.tc("cfg");
      ag(a);
    });
    var ug = (function (a) 
    {
      function b() 
      {
        var b = a[0], e = a[1], f = a[2];
        c.className = "";
        var h = c.style;
        h.transitionDuration = h.webkitTransitionDuration = b + "ms";
        h.width = e + "%";
        m.x(Lg);
        Lg = m.w((function () 
        {
          c.className = f;
        }), 
        b);
      }
      var c = window.document.getElementById("progress");
      c || (c = window.document.createElement("div"), c.id = "progress", 
      c.innerHTML = "<dt><dd>", 
      window.document.body.appendChild(c));
      m.Ic() ? (m.Lc(Mg), Mg = m.Jc(b, 0)) : (m.x(Lg), Lg = m.w(b, 0));
    });
    var Jg = (function () 
    {
      var a = Fg[0] + 50;
      m.x(Lg);
      Lg = m.w((function () 
      {
        var a = window.document.getElementById("progress");
        a && a.parentNode.removeChild(a);
      }), 
      a);
    });
    var Ng = (function () 
    {
      "watch" != m.v("PAGE_NAME") && m.l("yt.www.skywatch.lastBrowsePage", window.location.href, 
      void 0);
      if(m.v("SKYWATCH_ENABLED"))
      {
        var a = m.G("skywatch-close-button");
        a || (a = window.document.createElement("button"), m.qb(a, ["yt-uix-button", "yt-uix-button-default", ]), 
        a.id = "skywatch-minimize-button", 
        a.innerHTML = "\u21f2", 
        m.G("player-mole-container").appendChild(a));
        Og.push(m.K(a, "click", Pg));
      }
    });
    var Pg = (function () 
    {
      m.Hd(m.q("yt.www.skywatch.lastBrowsePage") || "/");
    });
    var Qg = (function () 
    {
      m.Nc.call(this, "www/base");
      this.b = 0;
    });
    var Rg = (function (a) 
    {
      (a = a.detail.name) && Rc(a);
    });
    m.ca = [];
    m.Sg = m.Sg || {
      
    };
    m.n = this;
    oa = "closure_uid_" + (1000000000 * Math.random() >>> 0);
    pa = 0;
    m.I = Date.now || (function () 
    {
      return + new Date;
    });
    Function.prototype.bind = Function.prototype.bind || (function (a, b) 
    {
      if(1 < arguments.length)
      {
        var c = Array.prototype.slice.call(arguments, 1);
        c.unshift(this, a);
        return m.r.apply(null, c);
      }
      return (0, m.r)(this, a);
    });
    m.sa[" "] = m.ea;
    m.t(m.ta, Error);
    m.ta.prototype.name = "CustomError";
    var ya = /&/g, za = /</g, Aa = />/g, Ba = /"/g, Ca = /'/g, 
    Da = /\x00/g, 
    xa = /[\x00&<>"']/;
    m.Qa = Array.prototype;
    m.Na = m.Qa.indexOf ? (function (a, b, c) 
    {
      return m.Qa.indexOf.call(a, b, c);
    }) : (function (a, b, c) 
    {
      c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
      if(m.ja(a))
        return m.ja(b) && 1 == b.length ? a.indexOf(b, c) : - 1;
      for(;c < a.length;c ++)
        if(c in a && a[c] === b)
          return c;
      return - 1;
    });
    m.Tg = m.Qa.lastIndexOf ? (function (a, b, c) 
    {
      return m.Qa.lastIndexOf.call(a, b, null == c ? a.length - 1 : c);
    }) : (function (a, b, c) 
    {
      c = null == c ? a.length - 1 : c;
      0 > c && (c = Math.max(0, a.length + c));
      if(m.ja(a))
        return m.ja(b) && 1 == b.length ? a.lastIndexOf(b, c) : - 1;
      for(;0 <= c;c --)
        if(c in a && a[c] === b)
          return c;
      return - 1;
    });
    m.A = m.Qa.forEach ? (function (a, b, c) 
    {
      m.Qa.forEach.call(a, b, c);
    }) : (function (a, b, c) 
    {
      for(var d = a.length, e = m.ja(a) ? a.split("") : a, f = 0;f < d;f ++)
        f in e && b.call(c, e[f], f, a);
    });
    m.rb = m.Qa.filter ? (function (a, b, c) 
    {
      return m.Qa.filter.call(a, b, c);
    }) : (function (a, b, c) 
    {
      for(var d = a.length, e = [], f = 0, h = m.ja(a) ? a.split("") : a, 
      k = 0;k < d;k ++)
        if(k in h)
        {
          var p = h[k];
          b.call(c, p, k, a) && (e[f ++] = p);
        }
      return e;
    });
    m.Ug = m.Qa.map ? (function (a, b, c) 
    {
      return m.Qa.map.call(a, b, c);
    }) : (function (a, b, c) 
    {
      for(var d = a.length, e = Array(d), f = m.ja(a) ? a.split("") : a, 
      h = 0;h < d;h ++)
        h in f && (e[h] = b.call(c, f[h], h, a));
      return e;
    });
    m.Vg = m.Qa.reduce ? (function (a, b, c, d) 
    {
      d && (b = (0, m.r)(b, d));
      return m.Qa.reduce.call(a, b, c);
    }) : (function (a, b, c, d) 
    {
      var e = c;
      (0, m.A)(a, (function (c, h) 
      {
        e = b.call(d, e, c, h, a);
      }));
      return e;
    });
    m.Wg = m.Qa.some ? (function (a, b, c) 
    {
      return m.Qa.some.call(a, b, c);
    }) : (function (a, b, c) 
    {
      for(var d = a.length, e = m.ja(a) ? a.split("") : a, f = 0;f < d;f ++)
        if(f in e && b.call(c, e[f], f, a))
          return ! 0;
      return ! 1;
    });
    m.Xg = m.Qa.every ? (function (a, b, c) 
    {
      return m.Qa.every.call(a, b, c);
    }) : (function (a, b, c) 
    {
      for(var d = a.length, e = m.ja(a) ? a.split("") : a, f = 0;f < d;f ++)
        if(f in e && ! b.call(c, e[f], f, a))
          return ! 1;
      return ! 0;
    });
    m.Ta.prototype.Uc = ! 1;
    m.Ta.prototype.ca = (function () 
    {
      return this.Uc;
    });
    m.Ta.prototype.dispose = (function () 
    {
      this.Uc || (this.Uc = ! 0, this.L());
    });
    m.Ta.prototype.L = (function () 
    {
      if(this.Ma)
        for(;this.Ma.length;)
          this.Ma.shift()();
    });
    m.t(m.Xa, m.Ta);
    m.g = m.Xa.prototype;
    m.g.Ul = 1;
    m.g.vg = 0;
    m.g.subscribe = (function (a, b, c) 
    {
      var d = this.wb[a];
      d || (d = this.wb[a] = []);
      var e = this.Ul;
      this.b[e] = a;
      this.b[e + 1] = b;
      this.b[e + 2] = c;
      this.Ul = e + 3;
      d.push(e);
      return e;
    });
    m.g.bd = (function (a, b, c) 
    {
      if(a = this.wb[a])
      {
        var d = this.b;
        if(a = m.Ka(a, (function (a) 
        {
          return d[a + 1] == b && d[a + 2] == c;
        })))
          return this.rb(a);
      }
      return ! 1;
    });
    m.g.rb = (function (a) 
    {
      if(0 != this.vg)
        return this.g || (this.g = []), this.g.push(a), ! 1;
      var b = this.b[a];
      if(b)
      {
        var c = this.wb[b];
        c && m.Oa(c, a);
        delete this.b[a];
        delete this.b[a + 1];
        delete this.b[a + 2];
      }
      return ! ! b;
    });
    m.g.U = (function (a, b) 
    {
      var c = this.wb[a];
      if(c)
      {
        this.vg ++;
        for(var d = m.Sa(arguments, 1), e = 0, f = c.length;e < f;e ++)
        {
          var h = c[e];
          this.b[h + 1].apply(this.b[h + 2], d);
        }
        this.vg --;
        if(this.g && 0 == this.vg)
          for(;c = this.g.pop();)
            this.rb(c);
        return 0 != e;
      }
      return ! 1;
    });
    m.g.clear = (function (a) 
    {
      if(a)
      {
        var b = this.wb[a];
        b && ((0, m.A)(b, this.rb, this), delete this.wb[a]);
      }
      else
        this.b.length = 0, this.wb = {
          
        };
    });
    m.g.ja = m.aa(3);
    m.g.L = (function () 
    {
      m.Xa.G.L.call(this);
      delete this.b;
      delete this.wb;
      delete this.g;
    });
    m.$a = window.yt && window.yt.config_ || {
      
    };
    m.l("yt.config_", m.$a, void 0);
    m.l("yt.tokens_", window.yt && window.yt.tokens_ || {
      
    }, 
    void 0);
    m.fb = window.yt && window.yt.msgs_ || {
      
    };
    m.l("yt.msgs_", m.fb, void 0);
    m.Vd = "Microsoft Internet Explorer" == window.navigator.appName;
    var Yg = m.q("yt.pubsub.instance_") || new m.Xa;
    m.Xa.prototype.subscribe = m.Xa.prototype.subscribe;
    m.Xa.prototype.unsubscribeByKey = m.Xa.prototype.rb;
    m.Xa.prototype.publish = m.Xa.prototype.U;
    m.Xa.prototype.clear = m.Xa.prototype.clear;
    m.l("yt.pubsub.instance_", Yg, void 0);
    var kb = m.q("yt.pubsub.subscribedKeys_") || {
      
    };
    m.l("yt.pubsub.subscribedKeys_", kb, void 0);
    var mb = m.q("yt.pubsub.topicToKeys_") || {
      
    };
    m.l("yt.pubsub.topicToKeys_", mb, void 0);
    var lb = m.q("yt.pubsub.isSynchronous_") || {
      
    };
    m.l("yt.pubsub.isSynchronous_", lb, void 0);
    m.jb = m.q("yt.pubsub.skipSubId_") || null;
    m.l("yt.pubsub.skipSubId_", m.jb, void 0);
    var zb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    t : {
      var Zg = m.n.navigator;
      if(Zg)
      {
        var $g = Zg.userAgent;
        if($g)
        {
          m.Nd = $g;
          break t;
        }
      }
      m.Nd = "";
    }
    ;
    var Fb, Eb, ih;
    m.de = m.Ea(m.Nd, "Opera") || m.Ea(m.Nd, "OPR");
    m.F = m.Ea(m.Nd, "Trident") || m.Ea(m.Nd, "MSIE");
    m.ce = m.Ea(m.Nd, "Gecko") && ! m.Ea(m.Nd.toLowerCase(), "webkit") && ! (m.Ea(m.Nd, "Trident") || m.Ea(m.Nd, "MSIE"));
    m.be = m.Ea(m.Nd.toLowerCase(), "webkit");
    m.be && m.Ea(m.Nd, "Mobile");
    var eh = Bb(), fh = eh && eh.platform || "";
    m.$d = m.Ea(fh, "Mac");
    m.Zd = m.Ea(fh, "Win");
    m.ah = m.Ea(fh, "Linux");
    m.bh = ! ! Bb() && m.Ea(Bb().appVersion || "", "X11");
    var gh = m.Nd;
    m.ch = ! ! gh && m.Ea(gh, "Android");
    m.dh = ! ! gh && m.Ea(gh, "iPhone");
    m.hh = ! ! gh && m.Ea(gh, "iPad");
    Fb = (function () 
    {
      var a = "", b;
      if(m.de && m.n.opera)
        return a = m.n.opera.version, m.la(a) ? a() : a;
      m.ce ? b = /rv\:([^\);]+)(\)|;)/ : m.F ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : m.be && (b = /WebKit\/(\S+)/);
      b && (a = (a = b.exec(m.Nd)) ? a[1] : "");
      return m.F && (b = Cb(), b > (0, window.parseFloat)(a)) ? String(b) : a;
    })();
    Eb = {
      
    };
    ih = m.n.document;
    m.Hb = ih && m.F ? Cb() || ("CSS1Compat" == ih.compatMode ? (0, window.parseInt)(Fb, 10) : 5) : void 0;
    var Pb;
    Pb = ! m.F || m.Gb(9);
    m.jh = ! m.ce && ! m.F || m.F && m.Gb(9) || m.ce && m.Db("1.9.1");
    m.kh = m.F && ! m.Db("9");
    m.lh = m.F || m.de || m.be;
    var Mb = {
      cellpadding : "cellPadding",
      cellspacing : "cellSpacing",
      colspan : "colSpan",
      frameborder : "frameBorder",
      height : "height",
      maxlength : "maxLength",
      role : "role",
      rowspan : "rowSpan",
      type : "type",
      usemap : "useMap",
      valign : "vAlign",
      width : "width"
    };
    m.ac = "StopIteration" in m.n ? m.n.StopIteration : Error("StopIteration");
    m.Zb.prototype.next = (function () 
    {
      throw m.ac;
    });
    m.Zb.prototype.kb = (function () 
    {
      return this;
    });
    var hc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/, 
    fc = m.be;
    var Ff = /^https?:\/\/([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|prod\.google\.com|video\.google\.com|youtube\.com|youtube\.googleapis\.com|youtube-nocookie\.com|youtubeeducation\.com)(:[0-9]+)?\/embed\//;
    var sc = {
      
    }, rc = 0, mh = m.q("yt.net.ping.workerUrl_") || null;
    m.l("yt.net.ping.workerUrl_", mh, void 0);
    var Ec, Dc = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {
      
    }, 
    Cc = (0, m.r)(Dc.clearResourceTimings || Dc.webkitClearResourceTimings || Dc.mozClearResourceTimings || Dc.msClearResourceTimings || Dc.oClearResourceTimings || m.ea, 
    Dc), 
    vc = Dc.mark ? (function (a) 
    {
      Dc.mark(a);
    }) : m.ea;
    m.g = m.Nc.prototype;
    m.g.Fu = (function () 
    {
      2 == this.g || this.init();
    });
    m.g.enable = (function () 
    {
      this.g = 1;
      (0, m.A)("string" == typeof this.page ? [this.page, ] : this.page, 
      (function (a) 
      {
        a && (this.subscribe("init-" + a, this.Fu, this), this.subscribe("dispose-" + a, this.dispose, this), 
        m.v("PAGE_NAME") == a && m.Oc(this));
      }), 
      this);
    });
    m.g.init = (function () 
    {
      this.g = 2;
      this.A && this.A();
    });
    m.g.dispose = (function () 
    {
      this.g = 3;
      m.Lc(this.j);
      this.B && this.B();
    });
    m.g.disable = (function () 
    {
      this.g = 4;
      this.dispose();
      this.clear();
    });
    m.g.subscribe = (function (a, b, c) 
    {
      a = m.y(a, b, c);
      this.k.push(a);
      return a;
    });
    m.g.clear = (function () 
    {
      m.nb(this.k);
      this.k = [];
    });
    var Qc = m.q("yt.modules.registry_") || {
      
    };
    m.l("yt.modules.registry_", Qc, void 0);
    m.nh = null;
    "undefined" != typeof window.XMLHttpRequest ? m.nh = (function () 
    {
      return new window.XMLHttpRequest;
    }) : "undefined" != typeof window.ActiveXObject && (m.nh = (function () 
    {
      return new window.ActiveXObject("Microsoft.XMLHTTP");
    }));
    var Uc, Vc, Wc, Xc, dd, gd = 0, ed = 0, cd = [], bd = /.+\.googlevideo\.com|c\.youtube\.com|\/videoplayback\?|spf\=navigate/g;
    var jd = {
      
    };
    var od = /-vfl[a-zA-Z0-9_+=-]+/, pd = /-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;
    m.rd = m.gc;
    var ud = {
      enablejsapi : 1
    }, vd = {
      
    }, 
    wd = {
      allowscriptaccess : "always",
      allowfullscreen : "true",
      bgcolor : "#000000"
    };
    td.prototype.clone = (function () 
    {
      var a = new td, b;
      for(b in this)
      {
        var c = this[b];
        "object" == m.ga(c) ? a[b] = m.xb(c) : a[b] = c;
      }
      return a;
    });
    m.Ad = /\s*;\s*/;
    m.g = m.yd.prototype;
    m.g.set = (function (a, b, c, d, e, f) 
    {
      if(/[;=\s]/.test(a))
        throw Error('Invalid cookie name "' + a + '"');
      if(/[;\r\n]/.test(b))
        throw Error('Invalid cookie value "' + b + '"');
      m.da(c) || (c = - 1);
      e = e ? ";domain=" + e : "";
      d = d ? ";path=" + d : "";
      f = f ? ";secure" : "";
      c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date((0, m.I)() + 1000 * c)).toUTCString();
      this.b.cookie = a + "=" + b + e + d + c + f;
    });
    m.g.get = (function (a, b) 
    {
      for(var c = a + "=", d = (this.b.cookie || "").split(m.Ad), e = 0, 
      f;f = d[e];e ++)
      {
        if(0 == f.lastIndexOf(c, 0))
          return f.substr(c.length);
        if(f == a)
          return "";
      }
      return b;
    });
    m.g.remove = (function (a, b, c) 
    {
      var d = m.da(this.get(a));
      this.set(a, "", 0, b, c);
      return d;
    });
    m.g.Pa = m.aa(4);
    m.g.qa = m.aa(5);
    m.g.isEmpty = m.aa(6);
    m.g.ja = m.aa(2);
    m.g.Ff = m.aa(7);
    m.g.clear = (function () 
    {
      for(var a = m.zd(this).keys, b = a.length - 1;0 <= b;b --)
        this.remove(a[b]);
    });
    m.Cd = new m.yd(window.document);
    m.Cd.g = 3950;
    var oh = ! 1, ph = "";
    if(window.navigator.plugins && window.navigator.plugins.length)
    {
      var qh = window.navigator.plugins["Shockwave Flash"];
      qh && (oh = ! 0, qh.description && (ph = Ld(qh.description)));
      window.navigator.plugins["Shockwave Flash 2.0"] && (oh = ! 0, ph = "2.0.0.11");
    }
    else
      if(window.navigator.mimeTypes && window.navigator.mimeTypes.length)
      {
        var rh = window.navigator.mimeTypes["application/x-shockwave-flash"];
        (oh = rh && rh.enabledPlugin) && (ph = Ld(rh.enabledPlugin.description));
      }
      else
        try
{          var sh = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), 
          oh = ! 0, 
          ph = Ld(sh.GetVariable("$version"));}
        catch(aaa)
{          try
{            sh = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), 
            oh = ! 0, 
            ph = "6.0.21";}
          catch(baa)
{            try
{              sh = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"), 
              oh = ! 0, 
              ph = Ld(sh.GetVariable("$version"));}
            catch(caa)
{              }
}
}

    m.th = oh;
    m.uh = ph;
    var vh, wh, xh, yh, zh, Ah, Bh, Eh, Fh, Gh, Hh;
    Bh = Ah = zh = yh = xh = wh = vh = ! 1;
    var Ch = m.Nd;
    Ch && (- 1 != Ch.indexOf("Firefox") ? vh = ! 0 : - 1 != Ch.indexOf("Camino") ? wh = ! 0 : - 1 != Ch.indexOf("iPhone") || - 1 != Ch.indexOf("iPod") ? xh = ! 0 : - 1 != Ch.indexOf("iPad") ? yh = ! 0 : - 1 != Ch.indexOf("Chrome") ? Ah = ! 0 : - 1 != Ch.indexOf("Android") ? zh = ! 0 : - 1 != Ch.indexOf("Safari") && (Bh = ! 0));
    m.Dh = vh;
    Eh = wh;
    Fh = xh;
    Gh = yh;
    Hh = zh;
    m.Ih = Ah;
    m.Jh = Bh;
    m.Kh = (function () 
    {
      if(m.Dh)
        return Md(/Firefox\/([0-9.]+)/);
      if(m.F || m.de)
        return Fb;
      if(m.Ih)
        return Md(/Chrome\/([0-9.]+)/);
      if(m.Jh)
        return Md(/Version\/([0-9.]+)/);
      if(Fh || Gh)
      {
        var a;
        if(a = /Version\/(\S+).*Mobile\/(\S+)/.exec(m.Nd))
          return a[1] + "." + a[2];
      }
      else
      {
        if(Hh)
          return (a = Md(/Android\s+([0-9.]+)/)) ? a : Md(/Version\/([0-9.]+)/);
        if(Eh)
          return Md(/Camino\/([0-9.]+)/);
      }
      return "";
    })();
    m.Lh = m.be ? "webkit" : m.ce ? "moz" : m.F ? "ms" : m.de ? "o" : "";
    m.Mh = m.q("yt.dom.getNextId_");
    if(! m.Mh)
    {
      m.Mh = (function () 
      {
        return ++ Nh;
      });
      m.l("yt.dom.getNextId_", m.Mh, void 0);
      var Nh = 0;
    }
    ;
    m.g = m.Pd.prototype;
    m.g.ra = null;
    m.g.type = "";
    m.g.target = null;
    m.g.relatedTarget = null;
    m.g.currentTarget = null;
    m.g.data = null;
    m.g.source = null;
    m.g.state = null;
    m.g.keyCode = 0;
    m.g.charCode = 0;
    m.g.altKey = ! 1;
    m.g.ctrlKey = ! 1;
    m.g.shiftKey = ! 1;
    m.g.clientX = 0;
    m.g.clientY = 0;
    m.g.wheelDeltaX = 0;
    m.g.wheelDeltaY = 0;
    m.g.rotation = 0;
    m.g.scale = 1;
    m.g.changedTouches = null;
    m.g.preventDefault = m.aa(8);
    m.g.stopPropagation = m.aa(9);
    var Qd = {
      stopImmediatePropagation : 1,
      stopPropagation : 1,
      preventMouseEvent : 1,
      preventManipulation : 1,
      preventDefault : 1,
      layerX : 1,
      layerY : 1,
      scale : 1,
      rotation : 1
    };
    m.Sd = m.q("yt.events.listeners_") || {
      
    };
    m.l("yt.events.listeners_", m.Sd, void 0);
    var Td = m.q("yt.events.counter_") || {
      count : 0
    };
    m.l("yt.events.counter_", Td, void 0);
    m.fa(Ud);
    Ud.prototype.getVersion = (function () 
    {
      return [this.b, this.g, this.j, ];
    });
    m.g = m.fe.prototype;
    m.g.clone = (function () 
    {
      return new m.fe(this.top, this.right, this.bottom, this.left);
    });
    m.g.contains = (function (a) 
    {
      return m.he(this, a);
    });
    m.g.ceil = m.aa(10);
    m.g.floor = (function () 
    {
      this.top = Math.floor(this.top);
      this.right = Math.floor(this.right);
      this.bottom = Math.floor(this.bottom);
      this.left = Math.floor(this.left);
      return this;
    });
    m.g.round = (function () 
    {
      this.top = Math.round(this.top);
      this.right = Math.round(this.right);
      this.bottom = Math.round(this.bottom);
      this.left = Math.round(this.left);
      return this;
    });
    m.g.scale = (function (a, b) 
    {
      var c = m.ka(b) ? b : a;
      this.left *= a;
      this.right *= a;
      this.top *= c;
      this.bottom *= c;
      return this;
    });
    var Ce = Ab("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    m.Oh = RegExp("^[^\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]");
    m.Ph = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]");
    m.le.prototype.jh = ! 0;
    m.le.prototype.ih = (function () 
    {
      return this.b;
    });
    m.le.prototype.toString = (function () 
    {
      return "Const{" + this.b + "}";
    });
    var me = {
      
    };
    oe.prototype.jh = ! 0;
    var pe = {
      
    };
    oe.prototype.ih = (function () 
    {
      return this.b;
    });
    var Ae = qe(""), ze = /^[-.%_!# a-zA-Z0-9]+$/;
    re.prototype.jh = ! 0;
    re.prototype.ih = (function () 
    {
      return "";
    });
    re.prototype.un = ! 0;
    re.prototype.wg = (function () 
    {
      return 1;
    });
    var se = {
      
    };
    var xe, Be, ye, ue;
    te.prototype.un = ! 0;
    te.prototype.wg = (function () 
    {
      return this.g;
    });
    te.prototype.jh = ! 0;
    te.prototype.ih = (function () 
    {
      return this.b;
    });
    xe = /^[a-zA-Z0-9-]+$/;
    Be = Ab("action", "cite", "data", "formaction", "href", "manifest", 
    "poster", 
    "src");
    ye = Ab("link", "script", "style");
    ue = {
      
    };
    m.Qh = Ee("", 0);
    m.Rh = m.Yb((function () 
    {
      if(m.F)
        return m.Db("10.0");
      var a = window.document.createElement("div"), b = m.ee(), 
      c = {
        transition : "opacity 1s linear"
      };
      b && (c[b + "-transition"] = "opacity 1s linear");
      m.Fe(a, m.we("div", {
        style : c
      }));
      a = a.firstChild;
      b = a.style[m.Ia("transition")];
      return "" != ("undefined" !== typeof b ? b : a.style[m.ie(a, "transition")] || "");
    }));
    m.Ie = {
      
    };
    m.fa(m.Le);
    m.Me = m.q("yt.prefs.UserPrefs.prefs_") || {
      
    };
    m.l("yt.prefs.UserPrefs.prefs_", m.Me, void 0);
    m.g = m.Le.prototype;
    m.g.get = (function (a, b) 
    {
      Oe(a);
      Ne(a);
      var c = void 0 !== m.Me[a] ? m.Me[a].toString() : null;
      return null != c ? c : b ? b : "";
    });
    m.g.set = (function (a, b) 
    {
      Oe(a);
      Ne(a);
      if(null == b)
        throw "ExpectedNotNull";
      m.Me[a] = b.toString();
    });
    m.g.remove = (function (a) 
    {
      Oe(a);
      Ne(a);
      delete m.Me[a];
    });
    m.g.save = (function () 
    {
      var a;
      a = [];
      for(var b in m.Me)
        a.push(b + "=" + (0, window.escape)(m.Me[b]));
      a = a.join("&");
      m.Bd("PREF", a, 63072000);
    });
    m.g.clear = (function () 
    {
      m.Me = {
        
      };
    });
    var Ze = /cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;
    var af;
    var Sh = m.Nd, Sh = Sh.toLowerCase();
    if(m.Ea(Sh, "android"))
    {
      var Th = Sh.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);
      if(Th)
        af = Number(Th[1]);
      else
      {
        var Uh = {
          cupcake : 1.5,
          donut : 1.6,
          eclair : 2,
          froyo : 2.2,
          gingerbread : 2.3,
          honeycomb : 3,
          "ice cream sandwich" : 4,
          jellybean : 4.1
        }, 
        Vh = Sh.match("(" + m.vb(Uh).join("|") + ")");
        af = Vh ? Uh[Vh[0]] : 0;
      }
    }
    else
      af = void 0;
    m.t(m.cf, bf);
    m.cf.prototype.ja = m.aa(1);
    m.cf.prototype.clear = (function () 
    {
      var a = m.cc(this.kb(! 0)), b = this;
      (0, m.A)(a, (function (a) 
      {
        b.remove(a);
      }));
    });
    m.t(m.df, m.cf);
    m.g = m.df.prototype;
    m.g.isAvailable = (function () 
    {
      if(! this.b)
        return ! 1;
      try
{        return this.b.setItem("__sak", "1"), this.b.removeItem("__sak"), 
        ! 0;}
      catch(a)
{        return ! 1;}

    });
    m.g.set = (function (a, b) 
    {
      try
{        this.b.setItem(a, b);}
      catch(c)
{        if(0 == this.b.length)
          throw "Storage mechanism: Storage disabled";
        throw "Storage mechanism: Quota exceeded";}

    });
    m.g.get = (function (a) 
    {
      a = this.b.getItem(a);
      if(! m.ja(a) && null !== a)
        throw "Storage mechanism: Invalid value was encountered";
      return a;
    });
    m.g.remove = (function (a) 
    {
      this.b.removeItem(a);
    });
    m.g.ja = m.aa(0);
    m.g.kb = (function (a) 
    {
      var b = 0, c = this.b, d = new m.Zb;
      d.next = (function () 
      {
        if(b >= c.length)
          throw m.ac;
        var d;
        d = c.key(b ++);
        if(a)
          return d;
        d = c.getItem(d);
        if(! m.ja(d))
          throw "Storage mechanism: Invalid value was encountered";
        return d;
      });
      return d;
    });
    m.g.clear = (function () 
    {
      this.b.clear();
    });
    m.g.key = (function (a) 
    {
      return this.b.key(a);
    });
    m.t(m.ef, m.df);
    m.t(ff, m.df);
    var of = {
      '"' : '\\"',
      "\\\\" : "\\\\",
      "/" : "\\/",
      "\\b" : "\\b",
      "\\f" : "\\f",
      "\\n" : "\\n",
      "\\r" : "\\r",
      "\\t" : "\\t",
      "\\x0B" : "\\u000b"
    }, 
    nf = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
    pf.prototype.set = (function (a, b) 
    {
      m.da(b) ? this.b.set(a, m.hf(b)) : this.b.remove(a);
    });
    pf.prototype.get = (function (a) 
    {
      var b;
      try
{        b = this.b.get(a);}
      catch(c)
{        return;}

      if(null !== b)
        try
{          return m.gf(b);}
        catch(d)
{          throw "Storage: Invalid value was encountered";}

    });
    pf.prototype.remove = (function (a) 
    {
      this.b.remove(a);
    });
    m.t(qf, pf);
    qf.prototype.set = (function (a, b) 
    {
      qf.G.set.call(this, a, sf(b));
    });
    qf.prototype.uf = (function (a) 
    {
      a = qf.G.get.call(this, a);
      if(! m.da(a) || a instanceof Object)
        return a;
      throw "Storage: Invalid value was encountered";
    });
    qf.prototype.get = (function (a) 
    {
      return (a = this.uf(a)) ? m.tf(a) : void 0;
    });
    m.t(uf, qf);
    uf.prototype.set = (function (a, b, c) 
    {
      if(b = sf(b))
      {
        if(c)
        {
          if(c < (0, m.I)())
          {
            uf.prototype.remove.call(this, a);
            return;
          }
          b.expiration = c;
        }
        b.creation = (0, m.I)();
      }
      uf.G.set.call(this, a, b);
    });
    uf.prototype.uf = (function (a, b) 
    {
      var c = uf.G.uf.call(this, a);
      if(c)
        if(! b && m.vf(c))
          uf.prototype.remove.call(this, a);
        else
          return c;
    });
    m.t(m.wf, uf);
    m.wf.prototype.g = m.aa(11);
    var Wh, Xh;
    Wh = new m.ef;
    m.yf = Wh.isAvailable() ? new m.wf(Wh) : null;
    Xh = new ff;
    m.zf = Xh.isAvailable() ? new m.wf(Xh) : null;
    m.t(Cf, m.Ta);
    m.g = Cf.prototype;
    m.g.getId = (function () 
    {
      return this.J;
    });
    m.g.ci = (function (a, b) 
    {
      this.ca() || (Ef(this, a), Kf(this, b), this.A && Hf(this));
    });
    m.g.wr = (function () 
    {
      return this.ka;
    });
    m.g.Av = (function () 
    {
      if(! this.P)
      {
        var a = ! 0;
        this.Ea && (a = Lf(this));
        a && "html5" == Pf(this) ? (this.B = "html5", this.A || this.Vd(! 0)) : (Rf(this), this.B = "html5", a && this.ma ? (this.Tc.appendChild(this.ma), this.Vd()) : (this.$.loaded = ! 0, this.C = (0, m.r)((function () 
        {
          var a = this.Tc, c = this.$.clone();
          m.q("yt.player.Application.create")(a, c);
          this.Vd();
        }), 
        this), 
        this.P = ! 0, 
        Lf(this) ? this.C() : (m.kd(this.$.assets.js, this.C), m.Ye(this.$.assets.css))));
      }
    });
    m.g.zv = (function () 
    {
      var a = this.$.clone();
      a.attrs.width = a.attrs.width || "100%";
      a.attrs.height = a.attrs.height || "100%";
      "flash" == Pf(this) ? (this.B = "flash", this.A || We(a, ! 1, (0, m.r)(this.Vd, this))) : (Rf(this), this.B = "flash", this.$.loaded = ! 0, m.Se(this.Tc, a), 
      this.Vd());
    });
    m.g.Vd = (function (a) 
    {
      var b = m.G(this.g), c = ! 1;
      try
{        b && b.getApiInterface && b.getApiInterface() && (c = ! 0);}
      catch(d)
{        }

      if(c)
        if(this.P = ! 1, a && b.isNotServable && b.isNotServable())
          Jf(this);
        else
        {
          Df(this);
          this.A = ! 0;
          a = m.G(this.g);
          a.addEventListener && (this.D = Nf(this, a, "addEventListener"));
          a.removeEventListener && (this.S = Nf(this, a, "removeEventListener"));
          b = a.getApiInterface();
          b = b.concat(a.getInternalApiInterface());
          for(c = 0;c < b.length;c ++)
          {
            var e = b[c];
            this.b[e] || (this.b[e] = Nf(this, a, e));
          }
          for(var f in this.k)
            this.D(f, this.k[f]);
          Hf(this);
          this.W && this.W(this.b);
          this.N.U("onReady", this.b);
        }
      else
        this.Ha = m.w((0, m.r)(this.Vd, this), 50);
    });
    m.g.Ar = (function () 
    {
      return this.A;
    });
    m.g.Od = (function (a, b) 
    {
      if(! this.ca())
      {
        var c = Gf(this, b);
        if(c)
        {
          if(! m.Ma(this.$a, a) && ! this.k[a])
          {
            var d = Of(this, a);
            this.D && this.D(a, d);
          }
          this.N.subscribe(a, c);
          "onReady" == a && this.A && m.w(m.s(c, this.b), 0);
        }
      }
    });
    m.g.zr = (function (a, b) 
    {
      if(! this.ca())
      {
        var c = Gf(this, b);
        c && this.N.bd(a, c);
      }
    });
    m.g.Vn = (function (a) 
    {
      a = a ? Vb : Ub;
      for(var b = a(window.document.activeElement);b && (1 != b.nodeType || (b.focus(), b != window.document.activeElement));)
        b = a(b);
    });
    m.g.Xn = (function (a) 
    {
      var b = {
        
      };
      b.volume = (0, window.isNaN)(a.volume) ? Bf().volume : m.tb(a.volume, 0, 100);
      b.muted = void 0 == a.muted ? Bf().muted : a.muted;
      m.xf("yt-player-volume", b, 2592000);
    });
    m.g.Wn = (function (a) 
    {
      5 == a && Jf(this);
    });
    m.g.Yn = (function (a) 
    {
      m.B("WATCH_LATER_VIDEO_ADDED", a);
    });
    m.g.Zn = (function (a) 
    {
      m.B("WATCH_LATER_VIDEO_REMOVED", a);
    });
    m.g.Bv = (function () 
    {
      Rf(this);
      this.B = "unsupported";
      var a = m.hb("PLAYER_FALLBACK", void 0, 'The Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>'), 
      b = window.navigator.userAgent.match(/Version\/(\d).*Safari/);
      b && 5 <= (0, window.parseInt)(b[1], 10) && (a = m.hb("QUICKTIME_FALLBACK", void 0, 'The Adobe Flash Player or QuickTime is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>'));
      b = m.G("player-unavailable");
      m.G("unavailable-submessage") && b && (m.G("unavailable-submessage").innerHTML = a, (a = m.H("icon", b)) && m.id(a, "icon") && (a.src = m.J(a, "icon")), 
      m.E(b, "hid"), 
      m.D(m.G("player"), "off-screen-trigger"));
    });
    m.g.yr = (function () 
    {
      return this.B || Pf(this);
    });
    m.g.xr = (function () 
    {
      return this.wa;
    });
    m.g.cancel = (function () 
    {
      this.C && m.md(this.$.assets.js, this.C);
      m.x(this.Ha);
      this.P = ! 1;
    });
    m.g.gt = (function () 
    {
      var a = m.q("yt.player.ui.shared.init");
      a && (this.b.hideUserInterface(), a(this.j, this.$.clone()));
    });
    m.g.L = (function () 
    {
      Rf(this);
      if(this.F)
      {
        var a = m.q("yt.player.ui.shared.dispose");
        a && a();
        this.ia = ! 1;
      }
      this.ba = null;
      for(var b in this.k)
        m.n[this.k[b]] = null;
      this.b = null;
      delete this.Tc;
      delete this.j;
      this.$ && (this.ka = this.$ = this.$.fallback = null);
      Cf.G.L.call(this);
    });
    var Uf = {
      
    }, Tf = "player_uid_" + (1000000000 * Math.random() >>> 0);
    var Yh = m.q("yt.player.exports.navigate") || m.Id;
    m.l("yt.player.exports.navigate", Yh, void 0);
    var Zh = m.q("yt.player.embed") || m.Sf;
    m.l("yt.player.embed", Zh, void 0);
    var $h = m.q("yt.player.destroy") || m.Xf;
    m.l("yt.player.destroy", $h, void 0);
    var ai = m.q("yt.player.cancelAll") || Wf;
    m.l("yt.player.cancelAll", ai, void 0);
    var bi = m.q("yt.player.getPlayerByElement") || m.Yf;
    m.l("yt.player.getPlayerByElement", bi, void 0);
    var ci = m.q("yt.player.exports.feedbackStart") || m.Ke;
    m.l("yt.player.exports.feedbackStart", ci, void 0);
    var bg, hg = ! 1, gg = "", $f = ! 1;
    var mg = [];
    var sg, Lg, Mg, tg = 0, vg = [900, 60, "waiting", ], Dg = [500, 99, "waiting", ], 
    xg = [300, 60, "waiting", ], 
    zg = [400, 99, "waiting", ], 
    Fg = [300, 101, "done", ];
    var Og = [];
    window.yt = window.yt || {
      
    };
    m.l("yt.setConfig", m.Ya, void 0);
    m.l("yt.getConfig", m.v, void 0);
    m.l("yt.hasMsg", m.gb, void 0);
    m.l("yt.pubsub.publish", m.B, void 0);
    m.l("yt.pubsub.subscribe", m.y, void 0);
    m.l("yt.setMsg", m.eb, void 0);
    m.l("yt.setGoogMsg", (function (a) 
    {
      Za(m.fb, arguments);
    }), 
    void 0);
    m.l("yt.setAjaxToken", (function () 
    {
      
    }), 
    void 0);
    m.l("reportTimingMaps", (function (a, b, c, d) 
    {
      if(a)
        for(var e in a)
          m.tc(e, a[e], d);
      if(c)
        for(var f in c)
          wc(f, c[f], d);
      if(b)
        for(var h in b)
          a = h, c = b[h], zc(d)[a] = c;
      return Gc(d);
    }), 
    void 0);
    m.l("yt.timing.reportAdToVideo", (function (a, b, c) 
    {
      c = {
        v : 2,
        s : "youtube",
        action : c ? "watch7ad_html5" : "watch7ad"
      };
      var d = [], e;
      for(e in a)
        "_" != e.charAt(0) && d.push(e + "." + a[e]);
      c.rt = d.join(",");
      for(var f in b)
        "_" != f.charAt(0) && (c[f] = b[f]);
      a = m.v("TIMING_INFO") || {
        
      };
      "e" in a && (c.e = a.e);
      "ei" in a && (c.ei = a.ei);
      Ac(c);
    }), 
    void 0);
    m.t(Qg, m.Nc);
    Qg.prototype.enable = (function () 
    {
      window.onload = og;
      window.onunload = pg;
      window.onerror = qg;
      var a = window.ytspf || {
        
      };
      a.enabled ? (window.addEventListener && (window.addEventListener("spfrequest", rg), window.addEventListener("spfpartprocess", wg), 
      window.addEventListener("spfpartdone", Bg), 
      window.addEventListener("spfprocess", Cg), 
      window.addEventListener("spfdone", Eg), 
      window.addEventListener("spferror", Gg), 
      window.addEventListener("spfreload", Hg), 
      window.addEventListener("spfjsbeforeunload", Rg)), 
      a.config = a.config || {
        
      }, 
      window.ytdepmap ? window.spf.script.ready("spf", (function () 
      {
        a.enabled = window.spf.init(a.config);
      })) : a.enabled = window.spf.init(a.config), 
      this.subscribe("init", Ig), 
      this.subscribe("dispose", Kg)) : window.spf.dispose();
      this.subscribe("init", this.init, this);
      this.subscribe("dispose", this.dispose, this);
    });
    Qg.prototype.init = (function () 
    {
      Qg.G.init.call(this);
      (window.ytspf || {
        
      }).enabled || window.spf.dispose();
      Tc();
      var a = window.ytPageFrameLoaded || ! 1, b, c;
      ! a && m.v("PAGEFRAME_JS") ? (b = m.v("PAGEFRAME_JS"), c = (function () 
      {
        m.q("ytbin.www.pageframe.setup")();
        window.ytPageFrameLoaded = ! 0;
      })) : a && (a = m.q("yt.www.masthead.loadSearchbox")) && a();
      var a = m.v("JS_COMMON_MODULE"), d = m.v("JS_PAGE_MODULES");
      if(window.ytdepmap)
        d || (d = [a, ]), a = m.v("JS_DELAY_LOAD", void 0), 0 < a ? (m.x(this.b), this.b = m.w((function () 
        {
          b && m.kd(b, c);
          window.spf.script.require(d);
        }), 
        a)) : (b && m.kd(b, c), window.spf.script.require(d));
      else
      {
        var e = {
          
        };
        e[a] = d;
        a = m.v("JS_DELAY_LOAD", void 0);
        0 < a ? (m.x(this.b), this.b = m.w((function () 
        {
          b && m.kd(b, c);
          m.nd(e);
        }), 
        a)) : (b && m.kd(b, c), m.nd(e));
      }
      Ng();
      Zf();
    });
    Qg.prototype.dispose = (function () 
    {
      m.x(this.b);
      var a = m.q("ytbin.www.pageframe.cancelSetup");
      a && a();
      m.L(Og);
      Og.length = 0;
      m.cb(bg);
      if(a = m.dg())
        a.removeEventListener("onReady", cg), a.removeEventListener("onStateChange", cg), 
        a.removeEventListener("onReady", eg), 
        a.removeEventListener("onStateChange", eg);
      Qg.G.dispose.call(this);
    });
    Qg.prototype.disable = (function () 
    {
      Qg.G.disable.call(this);
      window.removeEventListener && (window.removeEventListener("spfrequest", rg), window.removeEventListener("spfpartprocess", wg), 
      window.removeEventListener("spfpartdone", Bg), 
      window.removeEventListener("spfprocess", Cg), 
      window.removeEventListener("spfdone", Eg), 
      window.removeEventListener("spferror", Gg), 
      window.removeEventListener("spfreload", Hg), 
      window.removeEventListener("spfjsbeforeunload", Rg));
      window.onload = null;
      window.onunload = null;
      window.onerror = null;
    });
    m.Pc(new Qg);
  }))(_yt_www);
  