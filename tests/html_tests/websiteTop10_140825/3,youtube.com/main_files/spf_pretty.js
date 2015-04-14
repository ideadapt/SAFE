  (function () 
  {
    function l(a, b, c) 
    {
      var d = Array.prototype.slice.call(arguments, 2);
      return (function () 
      {
        var c = d.slice();
        c.push.apply(c, arguments);
        return a.apply(b, c);
      });
    }
    function aa(a, b) 
    {
      if(a)
      {
        var c = Array.prototype.slice.call(arguments, 1);
        try
{          return a.apply(null, c);}
        catch(d)
{          return d;}

      }
    }
    function m(a, b) 
    {
      if(document.createEvent)
      {
        var c = document.createEvent("CustomEvent");
        c.initCustomEvent("spf" + a, ! 0, ! 0, b);
        return document.dispatchEvent(c);
      }
      return ! 0;
    }
    function n() 
    {
      return (new Date).getTime();
    }
    ;
    function ba(a) 
    {
      return a.classList ? a.classList : a.className && a.className.match(/\S+/g) || [];
    }
    function p(a, b) 
    {
      if(a.classList)
        return a.classList.contains(b);
      for(var c = ba(a), d = 0, e = c.length;d < e;d ++)
        if(c[d] == b)
          return ! 0;
      return ! 1;
    }
    function ca(a, b) 
    {
      a.classList ? a.classList.add(b) : p(a, b) || (a.className += " " + b);
    }
    function da(a, b) 
    {
      if(a.classList)
        a.classList.remove(b);
      else
      {
        for(var c = ba(a), d = [], e = 0, f = c.length;e < f;e ++)
          c[e] != b && d.push(c[e]);
        a.className = d.join(" ");
      }
    }
    ;
    function ea(a, b, c, d) 
    {
      var e = d || {
        
      }, f = ! 1, g = 0, k, h = new XMLHttpRequest;
      h.open(a, b, ! 0);
      h.timing = {
        
      };
      var u = h.abort;
      h.abort = (function () 
      {
        clearTimeout(k);
        h.onreadystatechange = null;
        u.call(h);
      });
      h.onreadystatechange = (function () 
      {
        var a = h.timing;
        if(2 == h.readyState)
        {
          a.responseStart = a.responseStart || n();
          f = - 1 < (h.getResponseHeader("Transfer-Encoding") || "").toLowerCase().indexOf("chunked");
          if(! f)
          {
            var a = h.getResponseHeader("X-Firefox-Spdy"), c = window.chrome && chrome.loadTimes && chrome.loadTimes(), 
            c = c && c.wasFetchedViaSpdy;
            f = ! (! a && ! c);
          }
          e.v && e.v(h);
        }
        else
          3 == h.readyState ? f && e.l && (a = h.responseText.substring(g), g = h.responseText.length, 
          e.l(h, a)) : 4 == h.readyState && (a.responseEnd = a.responseEnd || n(), window.performance && window.performance.getEntriesByName && (h.resourceTiming = window.performance.getEntriesByName(b)[0]), 
          f && e.l && h.responseText.length > g && (a = h.responseText.substring(g), g = h.responseText.length, 
          e.l(h, a)), 
          clearTimeout(k), 
          e.u && e.u(h));
      });
      a = "POST" == a;
      if(e.headers)
        for(var D in e.headers)
          h.setRequestHeader(D, e.headers[D]), "content-type" == D.toLowerCase() && (a = ! 1);
      a && h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      0 < e.A && (k = setTimeout((function () 
      {
        h.abort();
        e.w && e.w(h);
      }), 
      e.A));
      h.timing.fetchStart = n();
      h.send(c);
      return h;
    }
    ;
    function q(a, b) 
    {
      return r[a] = b;
    }
    var r = window._spf_state || {
      
    };
    window._spf_state = r;
    function s(a, b) 
    {
      if(a.forEach)
        a.forEach(b, void 0);
      else
        for(var c = 0, d = a.length;c < d;c ++)
          c in a && b.call(void 0, a[c], c, a);
    }
    function t(a, b) 
    {
      if(a.every)
        return a.every(b, void 0);
      for(var c = 0, d = a.length;c < d;c ++)
        if(c in a && ! b.call(void 0, a[c], c, a))
          return ! 1;
      return ! 0;
    }
    function fa(a, b) 
    {
      if(a.map)
        return a.map(b, void 0);
      var c = [];
      c.length = a.length;
      s(a, (function (a, e, f) 
      {
        c[e] = b.call(void 0, a, e, f);
      }));
      return c;
    }
    function v(a) 
    {
      return "[object Array]" == Object.prototype.toString.call(a) ? a : [a, ];
    }
    ;
    var ga = {
      "animation-class" : "spf-animate",
      "animation-duration" : 425,
      "cache-lifetime" : 600000,
      "cache-max" : 50,
      "cache-unified" : ! 1,
      "link-class" : "spf-link",
      "nolink-class" : "spf-nolink",
      "navigate-limit" : 20,
      "navigate-lifetime" : 86400000,
      "request-timeout" : 0,
      "url-identifier" : "?spf=__type__"
    }, 
    w = {
      
    };
    "config" in r || q("config", w);
    w = r.config;
    function ha(a, b) 
    {
      var c = b || document;
      return c.querySelectorAll ? c.querySelectorAll(a) : [];
    }
    function ia(a) 
    {
      var b, c = a.parentNode;
      if(c && 11 != c.nodeType)
        if(a.removeNode)
          a.removeNode(! 1);
        else
        {
          for(;b = a.firstChild;)
            c.insertBefore(b, a);
          c.removeChild(a);
        }
    }
    function ja(a, b, c) 
    {
      for(;a;)
      {
        if(b(a))
          return a;
        if(c && a == c)
          break;
        a = a.parentNode;
      }
      return null;
    }
    function ka(a, b, c) 
    {
      a = a || "";
      b = b || document;
      var d = b.createElement("iframe");
      d.id = a;
      d.src = 'javascript:""';
      d.style.display = "none";
      c && (d.onload = l(c, null, d));
      b.body.appendChild(d);
      return d;
    }
    ;
    function x(a, b, c) 
    {
      c = c || 0;
      return a.lastIndexOf(b, c) == c;
    }
    function la(a, b) 
    {
      var c = a.length - b.length;
      return 0 <= c && a.indexOf(b, c) == c;
    }
    function y(a) 
    {
      return "[object String]" == Object.prototype.toString.call(a);
    }
    var z = String.prototype.trim ? (function (a) 
    {
      return a.trim();
    }) : (function (a) 
    {
      return a.replace(/^\s+|\s+$/g, "");
    });
    function ma(a) 
    {
      a = a.split("#");
      return [a[0], a.slice(1).join("#"), ];
    }
    ;
    function na(a) 
    {
      var b = A();
      a in b && delete b[a];
    }
    function oa() 
    {
      var a = A(), b;
      for(b in a)
        pa(a[b]) || delete a[b];
    }
    function pa(a) 
    {
      if(! (a && "data" in a))
        return ! 1;
      var b = a.life, b = isNaN(b) ? Infinity : b, c = n() - a.time, 
      d = parseInt(w["cache-max"], 10), 
      d = isNaN(d) ? Infinity : d;
      a = (parseInt(r["cache-counter"], 10) || 0) - a.count;
      return c < b && a < d;
    }
    function A() 
    {
      return "cache-storage" in r ? r["cache-storage"] : q("cache-storage", {
        
      });
    }
    ;
    function qa(a, b, c, d) 
    {
      var e = window.history.state;
      d && e && (b = b || e);
      ra(! 0, a, b, c);
    }
    function ra(a, b, c, d) 
    {
      if(b || c)
      {
        b = b || window.location.href;
        c = c || {
          
        };
        var e = n();
        q("history-timestamp", e);
        c["spf-timestamp"] = e;
        if(a)
          sa(c, b);
        else
          if(a = ta().contentWindow.history.pushState, "function" == typeof a)
            a.call(window.history, c, "", b);
          else
            throw Error("history.pushState is not a function.");
        q("history-url", b);
        d && (d = r["history-callback"]) && d(b, c);
      }
    }
    function ua(a) 
    {
      var b = window.location.href;
      if(r["history-ignore-pop"])
        q("history-ignore-pop", ! 1);
      else
        if(a.state)
        {
          a = a.state;
          var c = a["spf-timestamp"];
          b == r["history-url"] ? (q("history-timestamp", c), sa(a, b)) : (a["spf-back"] = c < parseInt(r["history-timestamp"], 10), 
          a["spf-current"] = r["history-url"], 
          q("history-timestamp", c), 
          q("history-url", b), 
          (c = r["history-callback"]) && c(b, a));
        }
    }
    function sa(a, b) 
    {
      var c = ta().contentWindow.history.replaceState;
      if("function" == typeof c)
        c.call(window.history, a, "", b);
      else
        throw Error("history.replaceState is not a function");
    }
    function ta() 
    {
      var a = document.getElementById("history-iframe");
      a || (a = ka("history-iframe"));
      return a;
    }
    ;
    function va(a, b) 
    {
      a && b && (a in B || (B[a] = []), B[a].push(b));
    }
    function wa(a, b) 
    {
      a in B && b && t(B[a], (function (a, d, e) 
      {
        return a == b ? (e[d] = null, ! 1) : ! 0;
      }));
    }
    function xa(a) 
    {
      a in B && s(B[a], (function (a, c, d) 
      {
        d[c] = null;
        a && a();
      }));
    }
    var B = {
      
    };
    "ps-s" in r || q("ps-s", B);
    B = r["ps-s"];
    function C(a, b, c) 
    {
      var d = E[a];
      return a && b ? (d || (d = E[a] = {
        items : [],
        k : 0,
        n : 1
      }), 
      d.items.push({
        F : b,
        D : c || 0
      })) : d && d.items.length || 0;
    }
    function F(a, b) 
    {
      var c = E[a];
      if(c)
      {
        var d = 0 < c.k;
        0 < c.n && (b || ! d) && ya(a, b);
      }
    }
    function G(a) 
    {
      (a = E[a]) && a.n --;
    }
    function H(a, b) 
    {
      var c = E[a];
      c && (c.n ++, F(a, b));
    }
    function za(a) 
    {
      var b = E[a];
      b && (clearTimeout(b.k), delete E[a]);
    }
    function Aa(a) 
    {
      var b = (parseInt(r.uid, 10) || 0) + 1;
      return a["spf-key"] || (a["spf-key"] = "" + q("uid", b));
    }
    function ya(a, b) 
    {
      var c = E[a];
      if(c && (clearTimeout(c.k), c.k = 0, 0 < c.n))
      {
        var d = c.items.shift();
        if(d)
        {
          var e = l((function (a, b) 
          {
            a();
            b();
          }), 
          null, 
          d.F, 
          l(ya, null, a, b));
          b ? e() : c.k = setTimeout(e, d.D);
        }
      }
    }
    var E = {
      
    };
    function I(a) 
    {
      var b = document.createElement("a");
      b.href = a;
      return ma(b.href)[0];
    }
    function Ba(a) 
    {
      var b = document.createElement("a");
      b.href = a;
      return (a = b.pathname) && "/" == a[0] ? a : "/" + a;
    }
    ;
    function Ca(a, b, c, d) 
    {
      var e = "js" == a;
      b = v(b);
      var f = y(c), g = f ? c : "", k = f ? d : c;
      c = k;
      if(g)
      {
        d = t(b, l(Da, null, a));
        var h = J[a + "-" + g];
        ! d && h && (m(e ? "jsbeforeunload" : "cssbeforeunload", {
          name : g,
          urls : h
        }), 
        delete J[a + "-" + g], 
        c = (function () 
        {
          Ea(a, g, h);
          k && k();
        }));
      }
      e = g || "^" + b.sort().join("^");
      Fa(a, e, b);
      va(a + "-" + e, c);
      s(b, (function (b) 
      {
        var c;
        c = K(a, b);
        L[c] ? Ga(a) : (b = M(a, b, l(Ga, null, a)), g && b.setAttribute("name", g));
      }));
    }
    function Ha(a, b) 
    {
      var c = J[a + "-" + b] || [];
      delete J[a + "-" + b];
      Ea(a, b, c);
    }
    function Ea(a, b, c) 
    {
      c.length && (m("js" == a ? "jsunload" : "cssunload", {
        name : b,
        urls : c
      }), 
      s(c, (function (b) 
      {
        Ia(a, b);
      })));
    }
    function Ga(a) 
    {
      var b = a + "-", c;
      for(c in B)
        0 == c.indexOf(b) && t(c.substring(b.length).split("|"), l(Ja, null, a)) && xa(c);
    }
    function M(a, b, c, d) 
    {
      function e() 
      {
        L[b] && (L[b] = 2);
        c && setTimeout(c, 0);
        return null;
      }
      var f = "js" == a;
      b = K(a, b);
      L[b] = 1;
      if(! b)
        return e();
      d = d || document;
      var g = d.createElement(f ? "script" : "link"), k = N(b);
      g.className = a + "-" + k;
      "onload" in g ? g.onerror = g.onload = e : g.onreadystatechange = (function () 
      {
        /^c|loade/.test(g.readyState) && e();
      });
      a = d.getElementsByTagName("head")[0];
      f ? (g.async = ! 0, g.src = b, a.insertBefore(g, a.firstChild)) : (g.rel = "stylesheet", g.href = b, a.appendChild(g));
      return g;
    }
    function Ia(a, b) 
    {
      b = K(a, b);
      var c = N(b), c = ha("." + (a + "-" + c), void 0);
      s(c, (function (a) 
      {
        a.parentNode && a.parentNode.removeChild(a);
      }));
      delete L[b];
    }
    function Ka(a) 
    {
      var b = "js" == a, c = [];
      s(ha(b ? "script[src]" : 'link[rel~="stylesheet"]'), (function (d) 
      {
        var e = b ? d.src : d.href, e = K(a, e);
        if(! L[e])
        {
          L[e] = 2;
          var f = N(e);
          ca(d, a + "-" + f);
          (f = d.getAttribute("name")) && Fa(a, f, [e, ]);
          c.push(d);
        }
      }));
    }
    function La(a, b) 
    {
      if(b && (b = K(a, b), ! L[b]))
      {
        var c = N(b), d = a + "-" + c, e = a + "-prefetch", c = document.getElementById(e);
        if(! c)
          c = ka(e, null, (function (a) 
          {
            a.title = e;
            F(e, ! 0);
          }));
        else
          if(c.contentWindow.document.getElementById(d))
            return;
        d = l(Ma, null, c, a, b, d);
        c.title ? d() : C(e, d);
      }
    }
    function Ma(a, b, c, d) 
    {
      a = a.contentWindow.document;
      "js" == b ? (b = a.createElement("object"), Na ? a.createElement("script").src = c : b.data = c, 
      b.id = d, 
      a.body.appendChild(b)) : (b = M(b, c, null, a), b.id = d);
    }
    function K(a, b) 
    {
      var c = "rsrc-p-" + a;
      if(b)
      {
        var d = b.indexOf("//");
        if(0 > d)
        {
          c = r[c] || "";
          if(y(c))
            b = c + b;
          else
            for(var e in c)
              b = b.replace(e, c[e]);
          b = 0 > b.indexOf("." + a) ? b + "." + a : b;
          b = I(b);
        }
        else
          0 == d && (b = I(b));
      }
      return b;
    }
    function Da(a, b) 
    {
      b = K(a, b);
      return 2 == L[b];
    }
    function Oa(a) 
    {
      return "js-" + a;
    }
    function N(a) 
    {
      return a ? a.replace(/[^\w]/g, "") : "";
    }
    function Fa(a, b, c) 
    {
      var d = a + "-" + b;
      J[d] = [];
      s(c, (function (b) 
      {
        b = K(a, b);
        J[d].push(b);
      }));
    }
    function Ja(a, b) 
    {
      var c = J[a + "-" + b], d = l(Da, null, a);
      return ! b || ! ! c && t(c, d);
    }
    var L = {
      
    }, J = {
      
    }, Na = - 1 != navigator.userAgent.indexOf(" Trident/");
    "rsrc-s" in r || q("rsrc-s", L);
    L = r["rsrc-s"];
    "rsrc-u" in r || q("rsrc-u", J);
    J = r["rsrc-u"];
    function Pa(a, b, c) 
    {
      Ca("js", a, b, c);
    }
    function Qa(a) 
    {
      Ha("js", a);
    }
    function Ra(a) 
    {
      a = v(a);
      s(a, (function (a) 
      {
        La("js", a);
      }));
    }
    function Sa(a, b, c) 
    {
      a = v(a);
      var d = [];
      s(a, (function (a) 
      {
        a && ! J["js-" + a] && d.push(a);
      }));
      var e = ! d.length;
      if(b)
      {
        var f = t(a, l(Ja, null, "js"));
        e && f ? b() : (a = Oa(a.sort().join("|")), va(a, b));
      }
      c && ! e && c(d);
    }
    function Ta(a, b) 
    {
      a = v(a);
      s(a, (function (a) 
      {
        a && Ua(a, O[a] || a) && Va(a);
      }));
      Sa(a, b, Wa);
    }
    function Wa(a) 
    {
      s(a, (function (a) 
      {
        function c() 
        {
          Pa(e, a);
        }
        var d = P[a], e = O[a] || a;
        d ? Ta(d, c) : c();
      }));
    }
    function Va(a) 
    {
      a = v(a);
      s(a, (function (a) 
      {
        var c = [], d;
        for(d in P)
        {
          var e = P[d], e = v(e);
          s(e, (function (e) 
          {
            e == a && c.push(d);
          }));
        }
        s(c, (function (a) 
        {
          Va(a);
        }));
        Qa(a);
      }));
    }
    function Xa(a, b) 
    {
      if(a = z(a))
        if(window.execScript)
          window.execScript(a);
        else
          if(x(a, "use strict", 1))
          {
            var c = document.createElement("script");
            c.text = a;
            var d = document.getElementsByTagName("head")[0] || document.body;
            d.appendChild(c);
            d.removeChild(c);
          }
          else
            (0, eval)(a);
      b && b();
    }
    function Ua(a, b) 
    {
      var c = J["js-" + a];
      return c ? (b = v(b), ! t(c, (function (a, e) 
      {
        return c[e] == K("js", b[e]);
      }))) : ! 1;
    }
    var P = {
      
    };
    "js-d" in r || q("js-d", P);
    var P = r["js-d"], O = {
      
    };
    "js-u" in r || q("js-u", O);
    O = r["js-u"];
    function Ya(a, b, c) 
    {
      Ca("css", a, b, c);
    }
    function Za(a) 
    {
      a = v(a);
      s(a, (function (a) 
      {
        La("css", a);
      }));
    }
    ;
    function $a(a, b, c) 
    {
      if(b)
      {
        var d = [], e;
        b = 0;
        c && (a += "\r\n");
        var f = a.indexOf("[\r\n", b);
        for(- 1 < f && (b = f + 3);- 1 < (f = a.indexOf(",\r\n", b));)
          e = z(a.substring(b, f)), b = f + 3, e && d.push(JSON.parse(e));
        f = a.indexOf("]\r\n", b);
        - 1 < f && (e = z(a.substring(b, f)), b = f + 3, e && d.push(JSON.parse(e)));
        e = "";
        a.length > b && (e = a.substring(b), c && la(e, "\r\n") && (e = e.substring(0, e.length - 2)));
        return {
          j : d,
          d : e
        };
      }
      a = JSON.parse(a);
      "number" == typeof a.length ? d = a : d = [a, ];
      return {
        j : d,
        d : ""
      };
    }
    function Q(a, b, c, d, e) 
    {
      var f = "process " + I(a), g = ! w["experimental-process-async"], 
      k;
      k = 0;
      b.timing || (b.timing = {
        
      });
      b.title && (document.title = b.title);
      d && b.url && I(b.url) != I(window.location.href) && qa(b.url + window.location.hash, null, ! 1, ! 0);
      if(b.head || b.css)
        k = l((function (a, b) 
        {
          if(w["experimental-extract-unified"])
          {
            var c = R(a);
            S(c);
            G(f);
            T(c, (function () 
            {
              b.spfProcessCss = n();
              H(f, g);
            }));
          }
          else
            S(ab(a)), b.spfProcessCss = n();
        }), 
        null, 
        b.head || b.css, 
        b.timing), 
        k = C(f, k);
      b.attr && (k = l((function (a, b) 
      {
        for(var c in a)
        {
          var d = document.getElementById(c);
          if(d)
          {
            var e = a[c], f = void 0;
            for(f in e)
            {
              var g = e[f];
              "class" == f ? d.className = g : "style" == f ? d.style.cssText = g : d.setAttribute(f, g);
            }
          }
        }
        b.spfProcessAttr = n();
      }), 
      null, 
      b.attr, 
      b.timing), 
      k = C(f, k));
      d = b.body || b.html || {
        
      };
      var h = k, u;
      for(u in d)
        k = l((function (a, b) 
        {
          var c = document.getElementById(a);
          if(c)
          {
            var d = w["experimental-extract-unified"] ? R(b) : bb(b), 
            h = w["animation-class"];
            if(cb && p(c, h))
            {
              G(f);
              var k = Aa(c);
              F(k, ! 0);
              d = {
                p : d,
                reverse : ! ! e,
                g : null,
                i : null,
                h : c,
                B : h + "-old",
                C : h + "-new",
                t : e ? h + "-reverse-start" : h + "-forward-start",
                s : e ? h + "-reverse-end" : h + "-forward-end"
              };
              c = l((function (a) 
              {
                w["experimental-extract-unified"] && S(a.p);
                ca(a.h, a.t);
                a.g = document.createElement("div");
                a.g.className = a.B;
                var b = a.h, c = a.g;
                if(c)
                {
                  for(var d;d = b.firstChild;)
                    c.appendChild(d);
                  b.appendChild(c);
                }
                a.i = document.createElement("div");
                a.i.className = a.C;
                a.i.innerHTML = a.p.b;
                a.reverse ? (b = a.g, b.parentNode.insertBefore(a.i, b)) : (b = a.g, b.parentNode.insertBefore(a.i, b.nextSibling));
              }), 
              null, 
              d);
              C(k, c, 0);
              c = l((function (a) 
              {
                da(a.h, a.t);
                ca(a.h, a.s);
              }), 
              null, 
              d);
              C(k, c, 0);
              c = l((function (a) 
              {
                a.h.removeChild(a.g);
                da(a.h, a.s);
                ia(a.i);
                G(k);
                T(a.p, (function () 
                {
                  H(k);
                }));
              }), 
              null, 
              d);
              C(k, c, parseInt(w["animation-duration"], 10));
              c = l((function (a, b) 
              {
                H(b);
              }), 
              null, 
              d, 
              f);
              C(k, c);
              F(k);
            }
            else
              w["experimental-extract-unified"] && S(d), c.innerHTML = d.b, 
              G(f), 
              T(d, (function () 
              {
                H(f, g);
              }));
          }
        }), 
        null, 
        u, 
        d[u], 
        b.timing), 
        k = C(f, k);
      u = k - h;
      b.foot || b.js ? (k = l((function (a, b, c) 
      {
        c && (b.spfProcessHtml = n());
        w["experimental-extract-unified"] ? (a = R(a), S(a), G(f), T(a, (function () 
        {
          b.spfProcessJs = n();
          H(f, g);
        }))) : (G(f), T(bb(a), (function () 
        {
          b.spfProcessJs = n();
          H(f, g);
        })));
      }), 
      null, 
      b.foot || b.js, 
      b.timing, 
      u), 
      k = C(f, k)) : u && (k = l((function (a) 
      {
        a.spfProcessHtml = n();
      }), 
      null, 
      b.timing), 
      k = C(f, k));
      c && (k = C(f, l(c, null, a, b)));
      F(f, g);
    }
    function db(a, b, c) 
    {
      var d = "preprocess " + I(a), e;
      if(b.head || b.css)
        e = l((function (a) 
        {
          w["experimental-extract-unified"] ? (a = R(a), eb(a), U(a)) : eb(ab(a));
        }), 
        null, 
        b.head || b.css), 
        C(d, e);
      var f = b.body || b.html || {
        
      }, g;
      for(g in f)
        f[g] && (e = l((function (a, b) 
        {
          if(w["experimental-extract-unified"])
          {
            var c = R(b);
            eb(c);
            U(c);
          }
          else
            U(bb(b));
        }), 
        null, 
        g, 
        f[g]), 
        C(d, e));
      if(b.foot || b.js)
        e = l((function (a) 
        {
          w["experimental-extract-unified"] ? (a = R(a), eb(a), U(a)) : U(bb(a));
        }), 
        null, 
        b.foot || b.js), 
        C(d, e);
      c && C(d, l(c, null, a, b));
      F(d);
    }
    function R(a) 
    {
      var b = new fb;
      if(! a)
        return b;
      if(! y(a))
        return a.scripts && s(a.scripts, (function (a) 
        {
          b.c.push({
            url : a.url || "",
            text : a.text || "",
            name : a.name || "",
            async : a.async || ! 1
          });
        })), 
        a.styles && s(a.styles, (function (a) 
        {
          b.a.push({
            url : a.url || "",
            text : a.text || "",
            name : a.name || ""
          });
        })), 
        b.b = a.html || "", 
        b;
      a = a.replace(gb, (function (a, d, e, f) 
      {
        return "script" == d ? (a = (a = e.match(hb)) ? a[1] : "", d = (d = e.match(ib)) ? d[1] : "", 
        e = jb.test(e), 
        b.c.push({
          url : d,
          text : f,
          name : a,
          async : e
        }), 
        "") : "style" == d ? (a = (a = e.match(hb)) ? a[1] : "", b.a.push({
          url : "",
          text : f,
          name : a
        }), 
        "") : a;
      }));
      a = a.replace(kb, (function (a, d) 
      {
        var e = d.match(lb), e = e ? e[1] : "";
        if("stylesheet" == e)
        {
          var e = (e = d.match(hb)) ? e[1] : "", f = d.match(mb), f = f ? f[1] : "";
          b.a.push({
            url : f,
            text : "",
            name : e
          });
          return "";
        }
        return a;
      }));
      b.b = a;
      return b;
    }
    function bb(a) 
    {
      var b = new nb;
      if(! a)
        return b;
      if(! y(a))
        return a.scripts && s(a.scripts, (function (a) 
        {
          b.c.push({
            url : a.url || "",
            text : a.text || "",
            name : a.name || "",
            async : a.async || ! 1
          });
        })), 
        b.b = a.html || "", 
        b;
      a = a.replace(ob, (function (a, d, e) 
      {
        a = (a = d.match(pb)) ? a[1] : "";
        var f = d.match(qb), f = f ? f[1] : "";
        d = rb.test(d);
        b.c.push({
          url : a,
          text : e,
          name : f,
          async : d
        });
        return "";
      }));
      b.b = a;
      return b;
    }
    function T(a, b) 
    {
      if(0 >= a.c.length)
        b && b();
      else
      {
        var c = - 1, d = (function () 
        {
          c ++;
          if(c < a.c.length)
          {
            var e = a.c[c];
            e.url ? e.async ? (Pa(e.url, e.name), d()) : Pa(e.url, e.name, d) : e.text ? Xa(e.text, d) : d();
          }
          else
            b && b();
        });
        d();
      }
    }
    function U(a) 
    {
      0 >= a.c.length || (a = fa(a.c, (function (a) 
      {
        return a.url;
      })), 
      Ra(a));
    }
    function ab(a) 
    {
      var b = new sb;
      if(! a)
        return b;
      if(! y(a))
        return a.styles && s(a.styles, (function (a) 
        {
          b.a.push({
            url : a.url || "",
            text : a.text || "",
            name : a.name || ""
          });
        })), 
        b.b = a.html || "", 
        b;
      a = a.replace(tb, (function (a, d) 
      {
        if(- 1 != d.indexOf('rel="stylesheet"'))
        {
          var e = d.match(ub), e = e ? e[1] : "", f = d.match(qb), 
          f = f ? f[1] : "";
          b.a.push({
            url : e,
            text : "",
            name : f
          });
          return "";
        }
        return a;
      }));
      a = a.replace(vb, (function (a, d, e) 
      {
        b.a.push({
          url : "",
          text : e,
          name : ""
        });
        return "";
      }));
      b.b = a;
      return b;
    }
    function S(a) 
    {
      if(! (0 >= a.a.length))
        for(var b = 0, c = a.a.length;b < c;b ++)
        {
          var d = a.a[b];
          if(d.url)
            Ya(d.url, d.name);
          else
            if(d.text && (d = d.text, d = z(d)))
            {
              var e = document.createElement("style");
              (document.getElementsByTagName("head")[0] || document.body).appendChild(e);
              "styleSheet" in e ? e.styleSheet.cssText = d : e.appendChild(document.createTextNode(d));
            }
        }
    }
    function eb(a) 
    {
      0 >= a.a.length || (a = fa(a.a, (function (a) 
      {
        return a.url;
      })), 
      Za(a));
    }
    function sb() 
    {
      this.b = "";
      this.a = [];
    }
    function nb() 
    {
      this.b = "";
      this.c = [];
    }
    function fb() 
    {
      this.b = "";
      this.c = [];
      this.a = [];
    }
    var cb = (function () 
    {
      var a = document.createElement("div");
      if("transition" in a.style)
        return ! 0;
      for(var b = ["webkit", "Moz", "Ms", "O", "Khtml", ], c = 0, d = b.length;c < d;c ++)
        if(b[c] + "Transition" in a.style)
          return ! 0;
      return ! 1;
    })(), 
    ob = /\x3cscript([\s\S]*?)\x3e([\s\S]*?)\x3c\/script\x3e/ig, 
    vb = /\x3cstyle([\s\S]*?)\x3e([\s\S]*?)\x3c\/style\x3e/ig, 
    tb = /\x3clink([\s\S]*?)\x3e/ig, 
    ub = /href="([\S]+)"/, 
    pb = /src="([\S]+)"/, 
    qb = /name="([\S]+)"/, 
    rb = /(?:\s|^)async(?:\s|=|$)/i, 
    kb = /\x3clink([\s\S]*?)\x3e/ig, 
    gb = /\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/ig, 
    jb = /(?:\s|^)async(?:\s|=|$)/i, 
    mb = /(?:\s|^)href\s*=\s*["']?([^\s"']+)/i, 
    hb = /(?:\s|^)name\s*=\s*["']?([^\s"']+)/i, 
    lb = /(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i, 
    ib = /(?:\s|^)src\s*=\s*["']?([^\s"']+)/i;
    function wb(a, b) 
    {
      var c = b || {
        
      };
      c.method = ((c.method || "GET") + "").toUpperCase();
      c.type = c.type || "request";
      var d = a, e = w["url-identifier"] || "";
      if(e)
      {
        var f = c.type || "", g = "";
        - 1 != d.indexOf("#") && (g = ma(d), d = g[0], g = "#" + g[1]);
        e = e.replace("__type__", f);
        d = x(e, "?") && - 1 != d.indexOf("?") ? d + e.replace("?", "&") : d + e;
        d += g;
      }
      d = I(d);
      e = {
        
      };
      e.spfUrl = d;
      e.startTime = n();
      e.fetchStart = e.startTime;
      n : {
        var g = xb(a, c.current, null, c.type, ! 1), k = c.current, 
        f = [];
        k && (f.push(g + " previous " + k), f.push(g + " previous " + Ba(k)));
        f.push(g);
        g = 0;
        for(k = f.length;g < k;g ++)
        {
          var h;
          r : {
            h = f[g];
            var u = A();
            if(h in u)
            {
              u = u[h];
              if(pa(u))
              {
                h = u.data;
                break r;
              }
              na(h);
            }
            h = void 0;
          }
          if(h)
          {
            f = {
              key : f[g],
              response : h
            };
            break n;
          }
        }
        f = null;
      }
      e.spfCached = ! ! f;
      if(f)
        return setTimeout(l(yb, null, a, c, e, f.key, f.response), 0), 
        null;
      f = {
        
      };
      void 0 != c.r && (f["X-SPF-Referer"] = c.r);
      c.current && (f["X-SPF-Previous"] = c.current);
      g = {
        q : ! 1,
        d : "",
        complete : []
      };
      e = l(zb, null, a, c, e, g);
      e = {
        headers : f,
        A : w["request-timeout"],
        v : l(Ab, null, a, g),
        l : l(Bb, null, a, c, g),
        u : e,
        w : e
      };
      return "POST" == c.method ? ea("POST", d, c.o, e) : ea("GET", d, null, e);
    }
    function yb(a, b, c, d, e) 
    {
      var f = ! 1;
      c.responseStart = c.responseEnd = n();
      b.type && x(b.type, "navigate") && (c.navigationStart = c.startTime, c.spfPrefetchType = "cache", 
      w["cache-unified"] || (na(d), f = ! 0));
      if(b.e && "multipart" == e.type)
      {
        d = e.parts;
        for(var g = 0;g < d.length;g ++)
          b.e(a, d[g]);
      }
      Cb(a, b, c, e, f);
    }
    function Ab(a, b, c) 
    {
      a = c.getResponseHeader("X-SPF-Response-Type") || "";
      b.q = - 1 != a.toLowerCase().indexOf("multipart");
    }
    function Bb(a, b, c, d, e, f) 
    {
      if(c.q)
      {
        e = c.d + e;
        var g;
        try
{          g = $a(e, ! 0, f);}
        catch(k)
{          d.abort();
          b.f && b.f(a, k);
          return;}

        if(b.e)
          for(d = 0;d < g.j.length;d ++)
            b.e(a, g.j[d]);
        c.complete = c.complete.concat(g.j);
        c.d = g.d;
      }
    }
    function zb(a, b, c, d, e) 
    {
      if(e.timing)
        for(var f in e.timing)
          c[f] = e.timing[f];
      if(e.resourceTiming)
        if("load" == b.type)
          for(var g in e.resourceTiming)
            c[g] = e.resourceTiming[g];
        else
        {
          f = c.startTime = c.startTime + Math.round(e.resourceTiming.startTime || 0);
          for(var k in e.resourceTiming)
            g = e.resourceTiming[k], void 0 !== g && (la(k, "Start") || la(k, "End")) && (c[k] = f + Math.round(g));
        }
      "load" != b.type && (c.navigationStart = c.startTime);
      d.complete.length && (d.d = z(d.d), d.d && Bb(a, b, d, e, "", ! 0));
      var h;
      try
{        h = $a(e.responseText).j;}
      catch(u)
{        b.f && b.f(a, u);
        return;}

      if(b.e && 1 < h.length)
        for(d = d.complete.length;d < h.length;d ++)
          b.e(a, h[d]);
      if(1 < h.length)
      {
        var D;
        d = 0;
        for(e = h.length;d < e;d ++)
          k = h[d], k.cacheType && (D = k.cacheType);
        h = {
          parts : h,
          type : "multipart"
        };
        D && (h.cacheType = D);
      }
      else
        h = 1 == h.length ? h[0] : {
          
        };
      Cb(a, b, c, h, ! 0);
    }
    function Cb(a, b, c, d, e) 
    {
      if(e && "POST" != b.method && (e = xb(a, b.current, d.cacheType, b.type, ! 0)))
      {
        var f = parseInt(w["cache-lifetime"], 10), g = parseInt(w["cache-max"], 10);
        if(! (0 >= f || 0 >= g))
        {
          var g = A(), k = (parseInt(r["cache-counter"], 10) || 0) + 1;
          q("cache-counter", k);
          g[e] = {
            data : d,
            life : f,
            time : n(),
            count : k
          };
          setTimeout(oa, 1000);
        }
      }
      d.timing = c;
      b.m && b.m(a, d);
    }
    function xb(a, b, c, d, e) 
    {
      a = I(a);
      var f;
      w["cache-unified"] ? f = a : "navigate-back" == d || "navigate-forward" == d ? f = "history " + a : "navigate" == d ? f = (e ? "history " : "prefetch ") + a : "prefetch" == d && (f = e ? "prefetch " + a : "");
      b && "url" == c ? f += " previous " + b : b && "path" == c && (f += " previous " + Ba(b));
      return f || "";
    }
    ;
    function Db(a) 
    {
      return ja(a, (function (a) 
      {
        return p(a, w["link-class"]);
      }));
    }
    function Eb(a) 
    {
      return ja(a, (function (a) 
      {
        return p(a, w["nolink-class"]);
      }));
    }
    function Fb(a, b) 
    {
      return ja(a, (function (a) 
      {
        return a.href && "img" != a.tagName.toLowerCase();
      }), 
      b);
    }
    function Gb(a) 
    {
      if(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey || 0 < a.button)
        return null;
      var b = Db(a.target);
      return ! b || w["nolink-class"] && Eb(a.target) ? null : (a = Fb(a.target, b)) ? a.href : null;
    }
    function Hb() 
    {
      if(! r["nav-init"])
        return ! 1;
      var a = (parseInt(r["nav-counter"], 10) || 0) + 1, b = parseInt(w["navigate-limit"], 10), 
      b = isNaN(b) ? Infinity : b;
      if(a > b)
        return ! 1;
      a = n() - (parseInt(r["nav-time"], 10) - 1);
      b = parseInt(w["navigate-lifetime"], 10);
      b = isNaN(b) ? Infinity : b;
      return a > b ? ! 1 : ! 0;
    }
    function Ib(a) 
    {
      if(! a.defaultPrevented)
      {
        var b = Gb(a);
        null !== b && (b && b != window.location.href ? Hb() && m("click", {
          url : b,
          target : a.target
        }) && (Jb(b), a.preventDefault()) : a.preventDefault());
      }
    }
    function Kb(a) 
    {
      var b = Gb(a);
      b && b != window.location.href && setTimeout((function () 
      {
        Lb(b, void 0);
      }), 
      0);
    }
    function Mb(a, b) 
    {
      var c = ! (! b || ! b["spf-back"]), d = b && b["spf-referer"], 
      e = b && b["spf-current"];
      Hb() ? m("history", {
        url : a,
        referer : d,
        previous : e
      }) && Jb(a, null, e, d, ! 0, c) : V(a, "1");
    }
    function Jb(a, b, c, d, e, f) 
    {
      b = b || {
        
      };
      q("nav-counter", (parseInt(r["nav-counter"], 10) || 0) + 1);
      q("nav-time", n());
      d = void 0 == d ? window.location.href : d;
      q("nav-referer", d);
      c = e ? c : window.location.href;
      if(Nb(a, d, c, b))
      {
        W();
        Ob(a);
        var g = I(a), k = "preprocess " + I(g), h;
        for(h in E)
          k != h && x(h, "preprocess") && za(h);
        h = Pb()[g];
        q("nav-request", h);
        q("nav-promote", null);
        q("nav-promote-time", null);
        h && 4 != h.readyState ? (f = ! ! e, e = "preprocess " + I(a), c = "promote " + I(a), 
        q("nav-promote", a), 
        q("nav-promote-time", n()), 
        za(e), 
        F(c, ! 0), 
        f || Qb(a, d, l(X, null, b))) : (e = ! ! e, h = ! ! f, f = l(X, null, b), b = wb(a, {
          method : b.method,
          e : l(Rb, null, b, h),
          f : f,
          m : l(Sb, null, b, h, ""),
          o : b.postData,
          type : "navigate" + (e ? h ? "-back" : "-forward" : ""),
          current : c,
          r : d
        }), 
        q("nav-request", b), 
        e || Qb(a, d, f));
      }
      else
        V(a, "2");
    }
    function Qb(a, b, c) 
    {
      try
{        ra(! 1, a, {
          "spf-referer" : b
        }, void 0);}
      catch(d)
{        W(), c(a, d);}

    }
    function X(a, b, c) 
    {
      q("nav-request", null);
      Tb(b, c, a) && (a = "10", c && (a += " Message: " + c.message), V(b, a));
    }
    function Rb(a, b, c, d) 
    {
      if(Ub(c, d, a))
        if(d.redirect)
          Vb(a, d.redirect);
        else
          try
{            Q(c, d, (function () 
            {
              Wb(c, d, a);
            }), 
            ! 0, 
            b);}
          catch(e)
{            X(a, c, e);}

      else
        V(c, "3");
    }
    function Sb(a, b, c, d, e) 
    {
      q("nav-request", null);
      r["nav-promote"] == c && (c = e.timing || {
        
      }, c.navigationStart = r["nav-promote-time"], 
      c.spfPrefetchType = "promote");
      c = "multipart" == e.type;
      if(! c)
      {
        if(! Xb(d, e, a))
        {
          V(d, "4");
          return;
        }
        if(e.redirect)
        {
          Vb(a, e.redirect);
          return;
        }
      }
      try
{        Q(d, c ? {
          
        } : e, (function () 
        {
          Yb(d, e, a);
        }), 
        ! 0, 
        b);}
      catch(f)
{        X(a, d, f);}

    }
    function Vb(a, b) 
    {
      try
{        b += window.location.hash, qa(b, null, ! 0, ! 0);}
      catch(c)
{        W(), X(a, b, c);}

    }
    function W() 
    {
      var a = r["nav-request"];
      a && (a.abort(), q("nav-request", null));
    }
    function Y(a, b) 
    {
      var c;
      a && (c = Array.prototype.slice.call(arguments), c[0] = a, 
      c = aa.apply(null, c));
      return ! 1 !== c;
    }
    function V(a, b) 
    {
      W();
      Ob();
      m("reload", {
        url : a,
        reason : b
      });
      w["experimental-remove-history"] && window.location.href == a && (q("history-ignore-pop", ! 0), window.history.back());
      setTimeout((function () 
      {
        window.location.href = a;
      }), 
      0);
    }
    function Zb(a, b, c) 
    {
      b = b || {
        
      };
      c = c || a;
      Nb(a, void 0, void 0, b, ! 0) && wb(a, {
        method : b.method,
        e : l($b, null, ! 1, b, c),
        f : l(ac, null, ! 1, b, c),
        m : l(bc, null, ! 1, b, c),
        o : b.postData,
        type : "load"
      });
    }
    function Lb(a, b, c) 
    {
      b = b || {
        
      };
      c = c || a;
      var d = window.location.href;
      Nb(a, void 0, void 0, b, ! 0) && (b = wb(a, {
        method : b.method,
        e : l($b, null, ! 0, b, c),
        f : l(ac, null, ! 0, b, c),
        m : l(bc, null, ! 0, b, c),
        o : b.postData,
        type : "prefetch",
        current : d
      }), 
      a = I(a), 
      Pb()[a] = b);
    }
    function ac(a, b, c, d, e) 
    {
      a && cc(d);
      a && r["nav-promote"] == c ? X(b, d, e) : Tb(d, e, b, ! 0);
    }
    function $b(a, b, c, d, e) 
    {
      if(Ub(d, e, b, ! 0))
        if(e.redirect)
          dc(a, b, c, e.redirect);
        else
        {
          if(a)
          {
            var f = l(Rb, null, b, ! 1, d, e), g = "promote " + I(c);
            C(g, f);
            if(r["nav-promote"] == c)
            {
              F(g, ! 0);
              return;
            }
          }
          (a ? db : Q)(d, e, (function () 
          {
            Wb(d, e, b, ! 0);
          }));
        }
    }
    function bc(a, b, c, d, e) 
    {
      var f = "multipart" == e.type;
      if(! f)
      {
        if(! Xb(d, e, b, ! 0))
        {
          V(d, "4");
          return;
        }
        if(e.redirect)
        {
          dc(a, b, c, e.redirect);
          return;
        }
      }
      var g = "promote " + I(c);
      if(a)
      {
        cc(d);
        if(r["nav-promote"] == c)
        {
          C(g, l(Sb, null, b, ! 1, c, d, e));
          F(g, ! 0);
          return;
        }
        za(g);
      }
      g = a ? db : Q;
      try
{        g(d, f ? {
          
        } : e, (function () 
        {
          Yb(d, e, b, ! 0);
        }));}
      catch(k)
{        ac(a, b, c, d, k);}

    }
    function dc(a, b, c, d) 
    {
      a = a ? Lb : Zb;
      var e = {
        
      };
      s("onError onRequest onPartProcess onPartDone onProcess onDone".split(" "), 
      (function (a) 
      {
        e[a] = b[a];
      }));
      a(d, e, c);
    }
    function Tb(a, b, c, d) 
    {
      a = {
        url : a,
        err : b
      };
      (c = Y((c || {
        
      }).onError, a)) && ! d && (c = m("error", a));
      return c;
    }
    function Nb(a, b, c, d, e) 
    {
      a = {
        url : a,
        referer : b,
        previous : c
      };
      (d = Y((d || {
        
      }).onRequest, a)) && ! e && (d = m("request", a));
      return d;
    }
    function Ub(a, b, c, d) 
    {
      a = {
        url : a,
        part : b
      };
      (c = Y((c || {
        
      }).onPartProcess, a)) && ! d && (c = m("partprocess", a));
      return c;
    }
    function Wb(a, b, c, d) 
    {
      a = {
        url : a,
        part : b
      };
      Y((c || {
        
      }).onPartDone, a) && ! d && m("partdone", a);
    }
    function Xb(a, b, c, d) 
    {
      a = {
        url : a,
        response : b
      };
      (c = Y((c || {
        
      }).onProcess, a)) && ! d && (c = m("process", a));
      return c;
    }
    function Yb(a, b, c, d) 
    {
      a = {
        url : a,
        response : b
      };
      Y((c || {
        
      }).onDone, a) && ! d && m("done", a);
    }
    function cc(a) 
    {
      a = I(a);
      var b = Pb(), c = b[a];
      c && c.abort();
      delete b[a];
    }
    function Ob(a) 
    {
      var b = Pb();
      a = a && I(a);
      for(var c in b)
        a != c && cc(c);
    }
    function Pb() 
    {
      return "nav-prefetches" in r ? r["nav-prefetches"] : q("nav-prefetches", {
        
      });
    }
    ;
    function Z() 
    {
      Ka("js");
      Ka("css");
      "complete" == document.readyState && (document.removeEventListener ? document.removeEventListener("DOMContentLoaded", Z, ! 1) : document.detachEvent && document.detachEvent("onreadystatechange", Z));
    }
    document.addEventListener ? document.addEventListener("DOMContentLoaded", Z, ! 1) : document.attachEvent && document.attachEvent("onreadystatechange", Z);
    Z();
    var ec = {
      init : (function (a) 
      {
        var b = ! ("function" != typeof window.history.pushState && ! ta().contentWindow.history.pushState);
        a = a || {
          
        };
        for(var c in ga)
          w[c] = c in a ? a[c] : ga[c];
        for(c in a)
          c in ga || (w[c] = a[c]);
        if(b)
        {
          c = Tb;
          if(! r["history-init"] && window.addEventListener)
          {
            a = window.location.href;
            window.addEventListener("popstate", ua, ! 1);
            q("history-init", ! 0);
            q("history-callback", Mb);
            q("history-error-callback", c);
            q("history-listener", ua);
            q("history-url", a);
            q("history-timestamp", n());
            var d = {
              "spf-referer" : document.referrer
            };
            try
{              qa(a, d);}
            catch(e)
{              c && c(a, e);}

          }
          ! r["nav-init"] && document.addEventListener && (document.addEventListener("click", Ib, ! 1), ! w["experimental-prefetch-mousedown"] || "ontouchstart" in window || 0 < window.navigator.maxTouchPoints || 0 < window.navigator.msMaxTouchPoints || (document.addEventListener("mousedown", Kb, ! 1), q("prefetch-listener", Kb)), 
          q("nav-init", ! 0), 
          q("nav-counter", 0), 
          q("nav-time", n()), 
          q("nav-listener", Ib));
        }
        return b;
      }),
      dispose : (function () 
      {
        "undefined" != typeof History && History.prototype.pushState && (W(), r["nav-init"] && (document.removeEventListener && (document.removeEventListener("click", r["nav-listener"], ! 1), 
        w["experimental-prefetch-mousedown"] && document.removeEventListener("mousedown", r["prefetch-listener"], ! 1)), 
        q("nav-init", ! 1), 
        q("nav-counter", null), 
        q("nav-time", null), 
        q("nav-listener", null)), 
        r["history-init"] && (window.removeEventListener && window.removeEventListener("popstate", r["history-listener"], ! 1), 
        q("history-init", ! 1), 
        q("history-callback", null), 
        q("history-error-callback", null), 
        q("history-listener", null), 
        q("history-url", null), 
        q("history-timestamp", 0)));
        for(var a in w)
          delete w[a];
      }),
      navigate : (function (a, b) 
      {
        a && a != window.location.href && (Hb() ? Jb(a, b) : V(a, "1"));
      }),
      load : (function (a, b) 
      {
        Zb(a, b);
      }),
      process : Q,
      prefetch : (function (a, b) 
      {
        Lb(a, b);
      })
    }, 
    fc = {
      script : {
        load : Pa,
        get : (function (a, b) 
        {
          return M("js", a, b);
        }),
        ready : Sa,
        done : (function (a) 
        {
          Fa("js", a, []);
          Ga("js");
        }),
        require : Ta,
        declare : (function (a, b) 
        {
          if(a)
          {
            for(var c in a)
              P[c] = a[c];
            if(b)
              for(c in b)
                O[c] = b[c];
          }
        }),
        path : (function (a) 
        {
          q("rsrc-p-js", a);
        }),
        unload : Qa,
        ignore : (function (a, b) 
        {
          a = v(a);
          var c = Oa(a.sort().join("|"));
          wa(c, b);
        }),
        unrequire : Va,
        prefetch : Ra
      },
      style : {
        load : Ya,
        get : (function (a, b) 
        {
          return M("css", a, b);
        }),
        unload : (function (a) 
        {
          Ha("css", a);
        }),
        path : (function (a) 
        {
          q("rsrc-p-css", a);
        }),
        prefetch : Za
      }
    }, 
    gc = this.spf = this.spf || {
      
    }, 
    hc;
    for(hc in ec)
      gc[hc] = ec[hc];
    for(var $ in fc)
      for(var ic in fc[$])
        gc[$] = gc[$] || {
          
        }, gc[$][ic] = fc[$][ic];
    m("ready");
  })();
  