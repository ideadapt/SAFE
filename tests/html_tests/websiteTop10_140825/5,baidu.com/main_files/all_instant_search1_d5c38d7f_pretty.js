  var Cookie = {
    set : (function (d, g, f, i, a, b) 
    {
      document.cookie = d + "=" + (b ? g : escape(g)) + ((a) ? "; expires=" + a.toGMTString() : "") + ((i) ? "; path=" + i : "; path=/") + ((f) ? "; domain=" + f : "");
    }),
    get : (function (d, b) 
    {
      var a = document.cookie.match(new RegExp("(^| )" + d + "=([^;]*)(;|$)"));
      if(a != null)
      {
        return unescape(a[2]);
      }
      return b;
    }),
    clear : (function (a, d, b) 
    {
      if(this.get(a))
      {
        document.cookie = a + "=" + ((d) ? "; path=" + d : "; path=/") + ((b) ? "; domain=" + b : "") + ";expires=Fri, 02-Jan-1970 00:00:00 GMT";
      }
    })
  };
  function escapeHTML(a) 
  {
    return a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, "&amp;").replace(/ /g, "&nbsp;").replace(/"/g, "&#34;").replace(/'/g, "&#39;");
  }
  function initPreload(a1) 
  {
    document.write = document.writeln = (function () 
    {
      
    });
    function F() 
    {
      Cookie.set("ISSW", "1", null, null, new Date(new Date().getTime() + 300 * 1000));
    }
    if(bds && bds.comm && bds.comm.query == "clearissw")
    {
      Cookie.clear("ISSW");
    }
    (function () 
    {
      var be = $.Deferred();
      bds.comm.registerUnloadHandler = (function (bf) 
      {
        be.done(bf);
      });
      bds.comm.resolveUnloadHandler = (function () 
      {
        be.resolve();
        be = $.Deferred();
      });
    })();
    function aV(be) 
    {
      return $.trim(be).replace(/\s+/g, " ");
    }
    function aw(bg) 
    {
      if(typeof bg == "string")
      {
        var be, bf = 0;
        for(be = 0;be < bg.length;be ++)
        {
          bf += bg.charCodeAt(be);
        }
        return bf;
      }
      return 0;
    }
    function bb(bj) 
    {
      var be = {
        
      };
      var bi, bf, bl, bg;
      if(bj.indexOf("?") > - 1)
      {
        bl = bj.split("?");
        bg = bl[1];
      }
      else
      {
        bg = bj;
      }
      if(bg.indexOf("&") > - 1)
      {
        bi = bg.split("&");
      }
      else
      {
        bi = new Array(bg);
      }
      for(var bh = 0;bh < bi.length;bh ++)
      {
        try
{          bi[bh] = bi[bh].indexOf("=") > - 1 ? bi[bh] : bi[bh] + "=";
          bf = bi[bh].split("=");
          be[bf[0]] = decodeURIComponent(bf[1].replace(/\+/g, " "));}
        catch(bk)
{          }

      }
      return be;
    }
    window.b_rec = (function (bg) 
    {
      var be;
      if(bg)
      {
        be = navigator.userAgent;
      }
      else
      {
        try
{          be = (window.external && window.external.twGetRunPath) ? window.external.twGetRunPath() : "";}
        catch(bf)
{          be = "";}

      }
      be = be.replace(/:/, "~").replace(/\t/, "`");
      return be;
    });
    window.scr_rec = (function () 
    {
      var be = "";
      try
{        be += [document.body.clientWidth, document.body.clientHeight, window.screenTop, window.screenLeft, window.screen.height, window.screen.width, ].join("_");}
      catch(bf)
{        }

      return be;
    });
    window.reh_rec = (function () 
    {
      var bg = [], be = [];
      try
{        $("#content_left").children(".result,.result-op").each((function (bh, bi) 
        {
          bg.push($(bi).height());
        }));}
      catch(bf)
{        }

      try
{        $("#con-ar").children(".result,.result-op").each((function (bh, bi) 
        {
          be.push($(bi).height());
        }));}
      catch(bf)
{        }

      return bg.join("_") + "|" + be.join("_");
    });
    window.onerror = (function () 
    {
      if(window.console && console.debug)
      {
        console.debug(arguments);
      }
      bds.comm.jserror = Array.prototype.slice.call(arguments).join("\t");
    });
    window.hash = (function (bf, be) 
    {
      if(! bf)
      {
        return;
      }
      if(bf && ! be && ab)
      {
        return ab.p(bf);
      }
      if(bf && be && ab)
      {
        ab.p(bf, be);
        a4.href = ab.buildSearchUrl();
      }
    });
    var al, bd = false;
    function q() 
    {
      if(! al)
      {
        al = $("<div id='_mask'/>").css({
          opacity : 0.3,
          position : "absolute",
          background : "#fff",
          "z-index" : 80,
          top : "105px",
          left : "0"
        });
      }
      if(! bd)
      {
        bd = true;
        al.width(ag.width());
        al.height(ag.height());
        al.appendTo(u);
      }
    }
    function aK() 
    {
      if(al && bd)
      {
        bd = false;
        al.remove();
      }
    }
    function l(be, bh, bf) 
    {
      bf || (bf = 0);
      var bg = be.length;
      if(bf < 0)
      {
        bf = bg + bf;
      }
      for(;bf < bg;bf ++)
      {
        if(be[bf] === bh)
        {
          return bf;
        }
      }
      return - 1;
    }
    (function () 
    {
      var be = $.globalEval;
      $.globalEval = (function (bf) 
      {
        var bh = new Date().getTime();
        try
{          be.apply($, arguments);}
        catch(bg)
{          }

        if(new Date().getTime() - bh > 500)
        {
          
        }
      });
    })();
    function J(bi, bh) 
    {
      var bg = bh.find("script:not([src])"), bf = 0;
      var be = $.globalEval;
      $.globalEval = (function (bj) 
      {
        window.currentScriptElem = bg[bf];
        bf ++;
        try
{          be.apply($, arguments);}
        catch(bk)
{          if(window.console && console.debug)
          {
            console.debug(bj);
            console.debug(bk);
          }}

      });
      bi.append(bh);
      window.currentScriptElem = undefined;
      $.globalEval = be;
    }
    function a7(be) 
    {
      try
{        be();}
      catch(bf)
{        if(window.console && console.debug)
        {
          console.debug(bf);
        }}

    }
    var an = {
      use_cache_repeatedly : true,
      index_form : "#form",
      kw : "#kw",
      result_form : "#form"
    };
    if(a1)
    {
      $.extend(an, a1);
    }
    var aU = 10;
    var ba = 60000;
    var aP = window.__confirm_timeout ? window.__confirm_timeout : 10000;
    var i = (function () 
    {
      var be = [];
      function bf(bg) 
      {
        if(typeof bg != "object" || bg == null)
        {
          return;
        }
        if(bg.xhr && bg.xhr.abort)
        {
          bg.xhr.abort();
        }
        delete bg.xhr;
        delete bg.html;
      }
      return {
        getCacheList : (function () 
        {
          var bg = $.map(be, (function (bh) 
          {
            if(bh && (new Date().getTime() - bh.startTime > ba))
            {
              return false;
            }
            else
            {
              return bh.querySign;
            }
          }));
          bg = $.grep(bg, (function (bh) 
          {
            return ! ! bh;
          }));
          return bg.join("\t");
        }),
        hasCache : (function (bh) 
        {
          var bg = bi(bh);
          if(bg && (new Date().getTime() - bg.startTime > ba))
          {
            this.deleteCache(bg);
            bg = null;
          }
          return bg;
          function bi(bj) 
          {
            var bk, bl;
            bl = bj.p("wd");
            if(! bl)
            {
              return false;
            }
            $.grep(be, (function (bm) 
            {
              if(bm.real_wd ? (bm.real_wd == bl && (bm.env.p("pn") == bj.p("pn") || (! bm.env.p("pn") && ! bj.p("pn")))) : (bj.equals(bm.env)))
              {
                bk = bm;
              }
            }));
            if(bk)
            {
              return bk;
            }
            return null;
          }
        }),
        shouldShow : (function (bg) 
        {
          if(bg.force)
          {
            return true;
          }
          if(! bg.shouldShow && ! bg.force && bg.no_predict)
          {
            return false;
          }
          var bh = aV(kw.val());
          if(! bh || (av && bg.env.equals(av.env)))
          {
            return false;
          }
          if(bg.env.p("wd").indexOf(bh) == 0)
          {
            return true;
          }
          if(bg.real_wd.indexOf(bh) == 0)
          {
            return true;
          }
          return false;
        }),
        getCacheBySign : (function (bh) 
        {
          var bg = false;
          $.each(be, (function (bj, bi) 
          {
            if(! bg && bi.querySign == bh && (! bi.env.p("pn") || bi.env.p("pn") == 0))
            {
              bg = bi;
            }
          }));
          return bg;
        }),
        addCache : (function (bg) 
        {
          if(l(be, bg) != - 1)
          {
            return;
          }
          var bi;
          for(bi = 0;bi < be.length;bi ++)
          {
            while(be[bi] && (bg.querySign ? (bg.querySign == be[bi].querySign && bg.env.p("pn") == be[bi].env.p("pn")) : (bg.env.equals(be[bi].env))))
            {
              var bh = be.splice(bi, 1);
              if(typeof av != "undefined" && bh[0] === av)
              {
                av = bg;
              }
              bf(bh[0]);
            }
          }
          be.unshift(bg);
          while(be.length > aU)
          {
            bf(be.pop());
          }
        }),
        deleteCache : (function (bg) 
        {
          bf(bg);
          be = $.grep(be, (function (bh) 
          {
            return bh !== bg;
          }));
        }),
        deleteCacheByEnv : (function (bg) 
        {
          be = $.grep(be, (function (bi) 
          {
            var bh = bi.env.equals(bi.env);
            if(bh)
            {
              bf(bi);
            }
            return ! bh;
          }));
        }),
        clearCache : (function () 
        {
          $.each(be, (function (bh, bg) 
          {
            bf(bg);
          }));
          be = [];
        })
      };
    })();
    var a4 = document.location;
    var aq = {
      onurlchange : (function () 
      {
        
      })
    };
    (function () 
    {
      var bg = "onhashchange" in window;
      var bj = "onpopstate" in window;
      var bk = a4.pathname.length > 1 ? a4.pathname : "/s";
      if(navigator.userAgent.match(/MSIE (6|7)/))
      {
        bg = false;
        bj = false;
      }
      if(an.disable_popstate)
      {
        bj = false;
      }
      if(! bg && ! bj)
      {
        F();
      }
      function be() 
      {
        var bm = a4.href.match(/#+(.*)$/);
        return bm ? bm[1] : "";
      }
      var bl = (function () 
      {
        var bn = "", bm;
        return (function (bp, bo) 
        {
          if(bo)
          {
            bn = bo.buildQueryString();
            a4.hash = bn;
          }
          if(bp || bn != be())
          {
            bi(bp);
            bn = be();
          }
        });
      })();
      aq.setUrl = (function (bm) 
      {
        if(bj)
        {
          bh(false, bm);
        }
        else
        {
          if(bg)
          {
            bl(false, bm);
          }
        }
      });
      function bf() 
      {
        var bm = a4.href.match(/\?([^#]+)/);
        return bm ? bm[1].replace(/\?/g, "&") : "";
      }
      function bi(bm) 
      {
        var bn = new U(bb(aq.getQueryString()));
        if(! bn.hashCode())
        {
          if(pageState != 0)
          {
            a4.replace(a4.pathname + a4.search.replace(/([?&])isidx=[^&*]&?/, "$1"));
          }
          else
          {
            if(a4.search != a4.search.replace(/([?&])isidx=[^&*]&?/, "$1"))
            {
              a4.replace(a4.pathname + a4.search.replace(/([?&])isidx=[^&*]&?/, "$1"));
            }
          }
        }
        else
        {
          if(pageState == 0 && ! bds.comm.newindex)
          {
            au(bn);
          }
        }
        aq.onurlchange(bn, bm);
      }
      var bh = (function () 
      {
        var bm = "", bn;
        return (function (bp, bo) 
        {
          if(bo)
          {
            bm = bo.buildQueryString();
            window.history.pushState(bo, "", bo.buildSyncSearchUrl());
          }
          if(bp || bm != bf())
          {
            bi(bp);
            bm = bf();
          }
        });
      })();
      aq.getQueryString = (function () 
      {
        if(bj)
        {
          return bf();
        }
        else
        {
          if(/wd=/.test(be()))
          {
            return be();
          }
          else
          {
            return bf();
          }
        }
      });
      aq.init = (function () 
      {
        if(bj)
        {
          (function () 
          {
            var bn = a4.href;
            var bo = false;
            $(window).on("swap_begin", (function () 
            {
              bo = true;
            }));
            $(window).bind("popstate", (function () 
            {
              if(bo || ! bn || bn != a4.href)
              {
                bh();
              }
              bn = null;
            }));
            $(window).bind("hashchange", (function () 
            {
              var bp = be();
              if(/wd=/.test(bp))
              {
                a4.replace(bk + "?" + bp);
              }
            }));
          })();
        }
        else
        {
          if(bg)
          {
            $(window).bind("hashchange", (function () 
            {
              bl();
            }));
            $((function () 
            {
              bl();
            }));
          }
        }
        var bm = be();
        if(/wd=/.test(bm))
        {
          if(bg)
          {
            window.history.replaceState(null, "", bk + "?" + bm);
            bh();
          }
          else
          {
            if(bg)
            {
              bl();
            }
            else
            {
              a4.replace(bk + "?" + bm);
            }
          }
        }
      });
      aq.support = (function () 
      {
        return (bj || bg) && Cookie.get("ISSW") != 1;
      });
      aq.getLinkParams = (function () 
      {
        if(! bj)
        {
          var bm = be();
          if(/wd=/.test(bm))
          {
            return bm.replace(/&rsv[^=]*=[^&]*/g, "").replace(/[^a-zA-Z0-9]url=/g, "");
          }
        }
        return false;
      });
      aq.clickResultLink = (function (bm, bo, bn) 
      {
        if(bj)
        {
          bm.one("click", (function () 
          {
            window.history.pushState(null, "", bo.buildSyncSearchUrl(bn));
            bh();
            return false;
          }));
        }
        else
        {
          bm.attr("href", bo.buildSearchUrl(bn)).attr("target", "_self");
        }
      });
      aq.submit = (function (bn, bm) 
      {
        setTimeout((function () 
        {
          if(bj)
          {
            window.history.pushState(bn, "", bn.buildSyncSearchUrl());
            bh(bm);
          }
          else
          {
            if(bg)
            {
              a4.href = bn.buildSearchUrl();
              bl(bm);
            }
            else
            {
              a4.href = bn.buildSyncSearchUrl();
            }
          }
        }), 
        0);
      });
      window.changeUrl = (function (bn) 
      {
        var bm = new U(bb(bn));
        aq.submit(bm, true);
      });
    })();
    aq.onurlchange = (function (bf, be) 
    {
      W.done((function () 
      {
        aR.setKey(bf.p("wd"));
        aR.hide();
      }));
      aO = new Date().getTime();
      kw.val(bf.p("wd"));
      aS(bf.p("wd"));
      K();
      if(bds && bds.abase64 && bds.abase64.restart)
      {
        bds.abase64.restart();
      }
      r({
        env : bf,
        force : true,
        use_cache : ! be,
        no_predict : true
      });
    });
    var R = [];
    var at = an.disable ? an.disable : false;
    if(window.__disable_preload)
    {
      at = true;
    }
    var Q = at;
    var z = false;
    if(window.__disable_predict)
    {
      z = true;
    }
    var a3 = z;
    var g = 200;
    var aX = 250;
    var aE = 2000;
    var aL = 100;
    var aA = 800;
    var aJ = bds.comm.switchAddMask ? bds.comm.switchAddMask : false;
    if(! aJ)
    {
      aJ = window.__switch_add_mask ? window.__switch_add_mask : false;
    }
    aJ = true;
    var d = bds.comm.preloadMouseMoveDistance ? bds.comm.preloadMouseMoveDistance : 5;
    var y = 0;
    var aC = (function () 
    {
      
    });
    var ap = bb(a4.search);
    if(! aq.support())
    {
      ! (function () 
      {
        function be() 
        {
          a4.hash && a4.hash.match(/[^a-zA-Z0-9](wd|word)=/) && a4.replace("//www.baidu.com/s?" + a4.href.match(/#(.*)$/)[1]);
        }
        a4.hash.match(/[^a-zA-Z0-9](wd|word)=/) ? (a4.replace("//www.baidu.com/s?" + a4.href.match(/#(.*)$/)[1]), 
        (function () 
        {
          throw new Error("redirect to sync");
        })()) : (document.getElementById("wrapper").style.display = "block", 
        "onhashchange" in window ? window.onhashchange = be : setInterval(be, 200));
      })();
      Q = at = true;
    }
    var I = Cookie.get("BAIDUID", "nobdid").split(":")[0];
    var az = I.substr(0, 6) + I.substr(I.length - 5, 5) + parseInt(Math.random() * 99999);
    while(az.length < 16)
    {
      az += "0";
    }
    az = encodeURIComponent(az);
    var ar, a8;
    var a5 = index_kw = kw = $(an.kw), aa;
    var aO;
    var Y, ak, S, aQ, Z, aD;
    var ag = $("#wrapper_wrapper");
    var aZ = [];
    var N = window.__async_strategy;
    var L;
    ar = $(an.index_form);
    var a2 = ar.serializeArray();
    a8 = $(an.result_form);
    var aT = new Date().getTime();
    function U(bi) 
    {
      if(! U.__init)
      {
        U.__init = true;
        var bk = ["wd", "pn", "nojc", "cl", ];
        var bg = ["wd", "cl", "ct", "tn", "rn", "ie", "f", "lm", "si", "usm", "z", "ch", "sts", "vit", "dsp", "trh", "trb", "tre", "la", "lo", "st", "nojc", "haobd", "rtt", "bsst", "gvideo", "__eis", "__eist", "oq", "fenlei", "sid", ];
        var bh = ["w", "word", ];
        U.prototype.clone = (function (bm) 
        {
          var bn = new U(bj(this.params));
          if(typeof bm == "object")
          {
            for(var bl in bm)
            {
              if(bm.hasOwnProperty(bl) && l(bg, bl) >= 0)
              {
                bn.p(bl, bm[bl]);
              }
            }
          }
          return bn;
        });
        U.prototype.buildSearchUrl = (function (bl) 
        {
          return a4.protocol + "//" + a4.host + a4.pathname + a4.search + "#" + this.buildQueryString(bl);
        });
        U.prototype.buildSyncSearchUrl = (function (bl) 
        {
          return a4.protocol + "//" + a4.host + "/s?" + this.buildQueryString(bl);
        });
        U.prototype.buildQueryString = (function (bn) 
        {
          var bm = bj(this.params);
          if(typeof bn == "object")
          {
            for(var bl in bn)
            {
              if(bn.hasOwnProperty(bl))
              {
                bm[bl] = bn[bl];
              }
            }
          }
          var bo = "";
          for(param in bm)
          {
            if(param && bm.hasOwnProperty(param) && bm[param] !== "")
            {
              bo += param + "=" + encodeURIComponent(bm[param]).replace(/'/g, "%27") + "&";
            }
          }
          return bo.substr(0, bo.length - 1);
        });
        U.prototype.equals = (function (bm) 
        {
          if(! bm || ! bm.p)
          {
            return false;
          }
          for(var bn = 0;bn < bk.length;bn ++)
          {
            var bl = bk[bn];
            if(bl == "pn")
            {
              var bp = this.p(bl) ? this.p(bl) : "0";
              var bo = bm.p(bl) ? bm.p(bl) : "0";
              if(bp != bo)
              {
                return false;
              }
            }
            else
            {
              if(this.p(bl) != bm.p(bl))
              {
                return false;
              }
            }
          }
          return true;
        });
        U.prototype.p = (function (bm, bl) 
        {
          if(l(bh, bm) >= 0)
          {
            bm = "wd";
          }
          if(bl === undefined)
          {
            return this.params[bm];
          }
          this.params[bm] = bl;
          return this;
        });
        U.prototype.hashCode = (function () 
        {
          var bm = [];
          if(! this.p("wd"))
          {
            return "";
          }
          for(var bn = 0;bn < bk.length;bn ++)
          {
            var bl = bk[bn];
            if(bl == "pn" && ! this.p(bl))
            {
              bm.push("0");
            }
            else
            {
              bm.push(this.p(bl));
            }
          }
          return bm.join("\t");
        });
        U.prototype.filterOtherParams = (function () 
        {
          for(var bl in this.params)
          {
            if(this.params.hasOwnProperty(bl) && l(bg, bl) < 0)
            {
              delete this.params[bl];
            }
          }
        });
        U.prototype.wdSameName = (function () 
        {
          var bl;
          for(bl = 0;bl < bh.length;bl ++)
          {
            if(this.params && this.params[bh[bl]])
            {
              this.params.wd = this.params[bh[bl]];
              delete this.params[bh[bl]];
            }
          }
        });
      }
      this.params = bb(aq.getQueryString());
      this.filterOtherParams();
      if(typeof bi == "object")
      {
        for(var be in bi)
        {
          if(bi.hasOwnProperty(be))
          {
            this.p(be, bi[be]);
          }
        }
      }
      if(pageState == 0)
      {
        for(var bf = 0;bf < a2.length;bf ++)
        {
          if(! this.p(a2[bf].name))
          {
            this.p(a2[bf].name, a2[bf].value);
          }
        }
      }
      this.wdSameName();
      function bj(bm) 
      {
        if(typeof bm == "object")
        {
          var bl = {
            
          };
          for(be in bm)
          {
            if(bm.hasOwnProperty(be))
            {
              bl[be] = bm[be];
            }
          }
        }
        else
        {
          bl = bm;
        }
        return bl;
      }
    }
    window.pageState = 0;
    var ab = null;
    var av = null;
    var B = {
      
    };
    var ao = false;
    var aR, aF, j;
    var W = $.ajax({
      dataType : "script",
      cache : true,
      url : "http://s1.bdstatic.com/r/www/cache/static/sug/js/bdsug_input_event_71c2f617.js"
    });
    var am;
    var o = "focus";
    var M;
    (function () 
    {
      var br = 600;
      var bf, bh, bo, bp, bj;
      var bm = "//www.baidu.com/nocache/fesplg/s.gif?product_id=45&page_id=317&page_type=0";
      var bl = new Date().getTime();
      var bq = false;
      var bg = 0;
      var bn = "";
      var bi = [];
      function be(bs) 
      {
        if(bo)
        {
          bk.cus_frext = bp - bo;
          if(bj && bj != - 1)
          {
            bk.cus_frwt = bj;
            bj = - 1;
          }
        }
        if(bk.cus_hitpreload)
        {
          bk.cus_net = 0;
        }
        clearTimeout(bq);
        bq = false;
        var bD = new Date().getTime();
        if(bD - bl < 2000)
        {
          bk = window.PDC_ASYNC.log = {
            
          };
          bl = bD;
          return;
        }
        bl = bD;
        var bE = Math.random(), bv = /6671|6672|6347|7549|7548|7904|8334|8335/;
        if(((bE > 0.51 && bE < 0.52) || (bv.test(bds.comm.sid) && (bE > 0 && bE < 0.5)) || bds.comm.intrSid || (bds._base64 && (bds._base64.pdc == true || bds._base64.sepExp))) && bk.cus_srv)
        {
          if(bv.test(bds.comm.sid))
          {
            window.PDC_ASYNC.setParam("issam", 1);
          }
          window.PDC_ASYNC.getImgCount($("#container"));
          if(window._WWW_IFST && bg == 0)
          {
            window.PDC_ASYNC.setParam("ifst", window._WWW_IFST);
          }
          window.PDC_ASYNC.setParam("ic_lis", bn);
          if(bs)
          {
            $.extend(bk, bs);
          }
          var bu = "";
          for(param in bk)
          {
            if(param && bk.hasOwnProperty(param) && bk[param] !== "")
            {
              bu += "&" + param + "=" + encodeURIComponent(bk[param]);
            }
          }
          if(! bu)
          {
            return;
          }
          if(bds._base64)
          {
            if(bds._base64.pdc == true || bds._base64.sepExp)
            {
              bu += "&issam=1";
            }
            if(bds._base64.sepExp)
            {
              bu += "&cus_b64exp=" + bds._base64.sepExp;
            }
            var bA = [];
            if(bds._base64.reqT)
            {
              $.each(bds._base64.reqT, (function (bF, bG) 
              {
                bA.push(bF + "_" + bG);
              }));
            }
            bu += "&cus_cusval=" + bA.join("|");
          }
          var bx = [];
          try
{            var bB = window.performance;
            if(typeof bB != "undefined" && bB.getEntries && bB.webkitClearResourceTimings)
            {
              var bz = bB.getEntries();
              $.each(bz, (function (bF, bG) 
              {
                if(bG.name.match(/bdstatic.com\/image\?imglist/))
                {
                  bx.push(parseInt(bG.domainLookupEnd - bG.domainLookupStart) + "_" + parseInt(bG.connectEnd - bG.connectStart) + "_" + parseInt(bG.responseStart - bG.requestStart) + "_" + parseInt(bG.responseEnd - bG.responseStart));
                }
              }));
              bB.webkitClearResourceTimings();
            }}
          catch(bC)
{            }

          if(bx.length > 0)
          {
            bu += "&cus_rtb64=" + bx.join("|");
          }
          bu += "&cus_slctr=" + bg;
          var bt = bm + bu;
          var by = new Image();
          var bw = "_LOG_" + new Date().getTime();
          by.onload = (function () 
          {
            delete window[bw];
          });
          window[bw] = by;
          by.src = bt;
        }
        bk = window.PDC_ASYNC.log = {
          
        };
        delete window.PDC_ASYNC.cacheData;
        bi = [];
        bf = bh = bo = bp = 0;
        bg ++;
      }
      $((function () 
      {
        bj = new Date().getTime() - window._ASYNC_START;
      }));
      window.PDC_ASYNC = {
        changeQuery : (function (bt, bs) 
        {
          be();
          if(typeof bs == "undefined")
          {
            bf = new Date().getTime();
          }
          else
          {
            bf = bs;
          }
          bk.cus_q = bt.p("wd");
          bk.cus_fs = - 1;
          bk.sid = bds.comm.indexSid;
          bk.qid = bds.comm.qid;
          bk.cus_newindex = bds.comm.newindex;
          bk.intrSid = bds.comm.intrSid;
        }),
        hitPreload : (function () 
        {
          bk.cus_hitpreload = 1;
        }),
        prefetchImg : (function (bs, bt, bu) 
        {
          bk.cus_pi = 1;
          bk.cus_pi_succ = bs;
          bk.cus_pi_fail = bt;
          bk.cus_pi_no = bu;
        }),
        recvData : (function (bs) 
        {
          bo = bh = new Date().getTime();
          bk.cus_net = bh - bf;
          bk.cus_fs = bh - bf;
          bp = bh;
          if(bs)
          {
            this.bindImgLoad(bs.find("#container"));
          }
        }),
        bindImgLoad : (function (bs) 
        {
          bs.find("img").one("load", (function () 
          {
            var bv = $(this).offset(), bt = bv.top, bu = bv.left;
            if(bt < br && bt > 0)
            {
              bp = new Date().getTime();
              bk.cus_fs = bp - bf;
              bi.push(bt + "_" + bu + "_" + bk.cus_fs);
              bn = $(this).attr("data-src") || $(this).attr("src");
            }
          }));
        }),
        domReady : (function () 
        {
          bo = new Date().getTime();
          bp = bo;
          bk.cus_fs = bo - bf;
          bk.cus_frdom = bo - bh;
          bk.cus_tti2 = bo - bf;
          bk.cus_srv = bds.se.mon.srvt;
          bk.cus_net = bk.cus_net - bds.se.mon.srvt;
          bq = setTimeout((function () 
          {
            be({
              cus_5s : 1
            });
          }), 
          (typeof window.__confirm_timeout != "undefined" ? window.__confirm_timeout + 1000 : 6000));
        }),
        jsReady : (function () 
        {
          bk.cus_js = new Date().getTime() - bf;
        }),
        setParam : (function (bs, bt) 
        {
          bk[bs] = bt;
        }),
        getExtTime : (function () 
        {
          if(typeof bo != "undefined" && typeof bp != "undefined")
          {
            return bp - bo;
          }
          return 0;
        }),
        getImgCount : (function (bt) 
        {
          var by = 0, bx = bt.find("img"), bw = bt.find("#content_left").find("img"), 
          bz = 0, 
          bs = 0, 
          bv = 0;
          for(var bu = 0;bu < bx.length;bu ++)
          {
            bv = bx.eq(bu).offset().top;
            if(bv < br && bv > 0)
            {
              by ++;
            }
          }
          if(this.cacheData && bw.length > 0)
          {
            for(var bu = 0;bu < bw.length;bu ++)
            {
              bv = bw.eq(bu).offset().top;
              if(bv < br && bv > 0)
              {
                bz += 1;
                if(this.cacheData['"' + bw.eq(bu).attr("src") + '"'] == 1)
                {
                  bs += 1;
                }
              }
            }
            delete this.cacheData;
          }
          this.setParam("cus_ic", bx.length);
          this.setParam("cus_extic", by);
          this.setParam("cus_extlic", bz);
          this.setParam("cus_icl", bw.length);
          this.setParam("ic_pre_slc", bs);
          this.setParam("cus_icr", bt.find("#content_right").find("img").length);
          this.setParam("img_info", bi.join(","));
        }),
        init : (function () 
        {
          $(window).on("unload", (function () 
          {
            be({
              cus_unload : 1
            });
          })).on("beforeunload", (function () 
          {
            be({
              cus_unload : 1
            });
          }));
        })
      };
      var bk = window.PDC_ASYNC.log = {
        
      };
    })();
    window.PDC_ASYNC.init();
    W.done((function () 
    {
      aR = aF = j = bds.se.sug({
        maxNum : 10,
        withoutRich : true,
        withoutZhixin : true,
        form : a8[0],
        ipt : kw[0],
        cbname : "bdsugresultcb",
        submission : aB
      });
      kw.keydown((function (bf) 
      {
        var bg = k(this);
        if(bf.keyCode == 39 && bg == this.value.length && av && av.real_wd != this.value && aa.val())
        {
          kw.val(av.real_wd);
          aR.check();
          aS(av.real_wd);
          K(av);
        }
      }));
      kw.keyup((function () 
      {
        if(aa)
        {
          aa.scrollLeft(kw.scrollLeft());
        }
      }));
      kw.mousedown((function () 
      {
        if(aa)
        {
          aa.scrollLeft(kw.scrollLeft());
        }
      }));
      kw.mouseup((function () 
      {
        if(aa)
        {
          aa.scrollLeft(kw.scrollLeft());
        }
      }));
      aR.on("start", (function () 
      {
        o = "focus";
      }));
      $(window).on("blur", (function () 
      {
        aR.hide();
      }));
      $("body").on("click", (function (bf) 
      {
        if(bf.isTrigger == 2 || bf.isTrigger == 3)
        {
          return false;
        }
        aR.hide();
      }));
      var be;
      aR.on("inputChange", (function (bg, bf) 
      {
        aS("");
        aY();
        if(M)
        {
          M = false;
          return;
        }
        if(window.__restart_confirm_timeout)
        {
          aj();
        }
        if(pageState == 0 && window.__disable_index_predict)
        {
          return;
        }
        if(aa)
        {
          aa.scrollLeft(kw.scrollLeft());
        }
        o = "input";
        aO = new Date().getTime();
        clearTimeout(be);
        be = false;
        if($.trim(bf.value) == "")
        {
          a();
          be = setTimeout((function () 
          {
            aR.hide();
          }), 
          500);
          return;
        }
        am = bf.checkStore();
        var bh = new U({
          pn : "",
          wd : bf.value
        });
        if(pageState == 0)
        {
          au(bh);
          ag.html("<div id='ent_sug'>请按“回车”键发起检索</div>");
        }
        if(! /^[a-zA-Z0-9~!@#$%^&*()_+=-]$/.test(bf.value))
        {
          r({
            env : bh,
            use_cache : true,
            force : false
          });
        }
      }));
      aR.on("selectSug", (function (bi, bh, bg, bf) 
      {
        aS("");
        if(pageState == 0 && window.__disable_index_predict)
        {
          return;
        }
        if(bg == - 1)
        {
          if(av)
          {
            aR.setVisibleSug(av.real_wd);
          }
          var bj = new U({
            pn : "",
            wd : bh.value
          });
          r({
            env : bj,
            use_cache : true,
            force : false
          });
        }
        else
        {
          aR.setVisibleSug();
          aS("");
          var bj = new U({
            pn : "",
            wd : bf
          });
          r({
            env : bj,
            force : false,
            use_cache : true,
            no_predict : true,
            shouldShow : true
          });
        }
      }));
      aR.on("render", (function (bg, bf) 
      {
        if(av)
        {
          aR.setVisibleSug(av.real_wd);
        }
      }));
      if(pageState == 0)
      {
        aR.start();
      }
    }));
    function k(bg) 
    {
      var bf = 0;
      if(document.selection)
      {
        var be = document.selection.createRange();
        be.moveStart("character", - bg.value.length);
        bf = be.text.length;
      }
      else
      {
        if(bg.selectionStart || bg.selectionStart == "0")
        {
          bf = bg.selectionStart;
        }
      }
      return (bf);
    }
    function aH(be, bf) 
    {
      if(be)
      {
        bf = $.extend(be.log, bf);
      }
    }
    function aM() 
    {
      if(bds.comm.seinfo)
      {
        bds.comm.seinfo.rsv_pre = encodeURIComponent(x());
        bds.comm.seinfo.reh = reh_rec();
        bds.comm.seinfo.scr = scr_rec();
        c(bds.comm.seinfo);
      }
      if(bds.comm.cgif)
      {
        var be = bds.comm.cgifimg = new Image();
        be.src = bds.comm.cgif;
      }
    }
    var O = {
      
    };
    window.addPerformanceLog = (function (be, bf) 
    {
      O["perf_" + be] = bf;
    });
    function x() 
    {
      return aZ.length;
    }
    var ad, C, a6, t;
    (function () 
    {
      var bh;
      var bl = - 1, bk = 0;
      var bf = - 1, bi = - 1, be = - 1, bg = - 1;
      var bj = 0;
      ad = (function (bn) 
      {
        if(! bn)
        {
          return;
        }
        be = bn.pageX;
        bg = bn.pageY;
        bh = bn.target;
        var bm = $(bn.target);
        if(bm.attr("type") == "submit")
        {
          bj = 1;
        }
        var bo = bm.offset();
        bf = be - bo.left;
        bi = bg - bo.top;
        bk = new Date().getTime();
      });
      C = (function (bm) 
      {
        if(! bm || bm.target != bh)
        {
          return;
        }
        bl = new Date().getTime() - bk;
      });
      t = (function (bn) 
      {
        if(bds && bds.comm && bds.comm.query)
        {
          bn = bds.comm.query;
        }
        var bm = bj + "." + bl + "." + bf + "." + bi + "." + be + "." + bg;
        bm = aw(bm + bn) + "." + bm;
        return bm;
      });
      a6 = (function () 
      {
        bl = - 1;
        bk = 0;
        bf = - 1;
        bi = - 1;
        be = - 1;
        bg = - 1;
        bj = 0;
      });
    })();
    $(document).delegate("a", "mousedown", (function () 
    {
      s(av, ao, 22)();
    }));
    function E(be) 
    {
      $(document).delegate("a", "mousedown", (function () 
      {
        return (function () 
        {
          var bk = be.prefix;
          var bj = $(this);
          var bg = bj.attr("href");
          var bf;
          if(bk && bg && bg.indexOf(bk) == 0)
          {
            bg = bg.substring(bk.length);
          }
          if(! bk && bg)
          {
            var bh = bg.match(/^http:\/\/[^\/]+/);
            if(bh)
            {
              bk = bh[0];
            }
            else
            {
              return;
            }
            bg = bg.replace(/^http:\/\/[^\/]+/, "");
          }
          if(bg)
          {
            bf = bg.match(be.regex);
          }
          if(bf && bf[2] && bf[2].match(/&(wd|word)=/))
          {
            return;
          }
          if(bg && bf)
          {
            if(be.convertTable && be.convertTable[bf[1]])
            {
              bf[1] = be.convertTable[bf[1]];
            }
            var bi = aq.getLinkParams();
            if(bi)
            {
              bj.attr("href", bk + "/" + bf[1] + "?" + bf[2] + "&" + bi);
            }
          }
        });
      })());
    }
    E({
      prefix : "http://www.baidu.com",
      regex : /^\/*(link)\?(.*)$/
    });
    E({
      prefix : "//www.baidu.com",
      regex : /^\/*(link)\?(.*)$/
    });
    E({
      prefix : "http://www.baidu.com",
      convertTable : {
        "baidu.php" : "baidu.php",
        "aladdin.php" : "aladdin.php",
        "siva.php" : "siva.php",
        "adrc.php" : "adrc.php",
        "zhixin.php" : "zhixin.php"
      },
      regex : /^\/*(baidu\.php|aladdin\.php|siva\.php|adrc\.php|zhixin\.php)\?(.*)$/
    });
    if(a4.host != "www.baidu.com")
    {
      E({
        prefix : "",
        convertTable : {
          "baidu.php" : "baidu.php",
          "aladdin.php" : "aladdin.php",
          "siva.php" : "siva.php",
          "adrc.php" : "adrc.php",
          "zhixin.php" : "zhixin.php"
        },
        regex : /^\/*(baidu\.php|aladdin\.php|siva\.php|adrc\.php|zhixin\.php)\?(.*)$/
      });
    }
    E({
      prefix : "http://bzclk.baidu.com",
      regex : /^\/*(adrc\.php)\?(.*)$/
    });
    if(aq.support())
    {
      $(document).delegate("a", "mousedown", (function () 
      {
        var be = a4.protocol + "//" + a4.host;
        return (function (bh) 
        {
          var bg = $(this);
          if(bg.attr("target") && bg.attr("target") != "_self")
          {
            return;
          }
          var bf = bg.attr("href");
          if(bf && bf.indexOf(be) == 0)
          {
            bf = bf.substring(be.length);
          }
          if(bf)
          {
            matched = bf.match(/^\/*s\?(.*)/);
          }
          if(bf && matched)
          {
            var bi = bb(matched[0]);
            if(! bi.pn)
            {
              bi.pn = "";
            }
            if(l(["baidurt", "baiduwb", "baidufir", "SE_baiduxueshu_c1gjeupa", ], 
            bi.tn) < 0)
            {
              aq.clickResultLink(bg, ab, bi);
              ad(bh);
            }
            return;
          }
        });
      })());
    }
    $(document).delegate("a", "mouseup", (function (be) 
    {
      C(be);
    }));
    $(document).delegate("#su,#su1", "mouseup", (function (be) 
    {
      C(be);
    }));
    $(document).delegate("#su,#su1", "mousedown", (function (be) 
    {
      ad(be);
    }));
    var u = $("body");
    var V = document.title;
    (function (bf) 
    {
      var be = bf('<div style="clear:both;display:block;visibility:hidden;position:absolute;top:0;"><span style="width;inherit;margin:0;font:16px/22px arial;"></span></div>').appendTo("body").find("span");
      bf.fn.textWidth = (function () 
      {
        be.html(escapeHTML(bf(this).val()));
        var bg = be.width();
        return bg;
      });
    })(jQuery);
    function aS(be) 
    {
      if(w)
      {
        if(aa)
        {
          aa.val("");
        }
        return;
      }
      if(pageState == 0)
      {
        return;
      }
      if(window.__disable_kw_tip)
      {
        return;
      }
      if(! aa)
      {
        aa = $('<input id="kw_tip" unselectable="on" onselectstart="return false;" class="s_ipt s_ipt_tip" disabled autocomplete="off" value="" maxlength="100">').insertBefore(kw);
        aa.parent().click((function (bi) 
        {
          var bh = kw.get(0);
          if(bi.target === bh)
          {
            return true;
          }
          bh.focus();
          var bf = bh.value.length;
          if(document.selection)
          {
            var bg = bh.createTextRange();
            bg.moveStart("character", bf);
            bg.collapse();
            bg.select();
          }
          else
          {
            if(typeof bh.selectionStart == "number" && typeof bh.selectionEnd == "number")
            {
              bh.selectionStart = bh.selectionEnd = bf;
            }
          }
          return false;
        }));
        aa.get(0).onselectstart = (function () 
        {
          return false;
        });
      }
      if(aV(kw.val()) == aV(be))
      {
        aa.val("");
        return;
      }
      aa.val(be);
      if(be != "")
      {
        aa.css("text-indent", kw.textWidth() + 10 + "px").val(be).show();
      }
      else
      {
        aa.hide();
      }
    }
    function a0() 
    {
      a7((function () 
      {
        A.dispose();
      }));
      a7((function () 
      {
        if(A && A.__clear)
        {
          A.__clear();
        }
      }));
      a7((function () 
      {
        $.each(bds.comm.tips, (function (be, bf) 
        {
          if(bf && bf.destroy)
          {
            bf.destroy();
          }
        }));
        $("#c-tips-container").empty();
        bds.comm.tips = [];
      }));
      a7((function () 
      {
        if(window.app && window.app.dispose)
        {
          window.app.dispose();
        }
      }));
      a7((function () 
      {
        bds.comm.resolveUnloadHandler();
      }));
      if(bds && bds.se && bds.se.certification && bds.se.certification.data)
      {
        bds.se.certification.data = [];
      }
    }
    var w = false;
    function ay() 
    {
      w = false;
    }
    function a(be) 
    {
      w = true;
      if(window.__disable_swap_to_empty)
      {
        if(av && av.real_wd && $.trim(kw.val()))
        {
          aS(av.real_wd);
          K(av);
        }
        else
        {
          aS("");
          K();
        }
        return;
      }
      clearTimeout(Z);
      Z = false;
      ag.hide();
      if(pageState == 0)
      {
        au(be);
      }
      ao = av;
      av = null;
      ab = null;
      a0();
      if(bds && bds.se && bds.se.certification && bds.se.certification.data)
      {
        bds.se.certification.data = [];
      }
      a7((function () 
      {
        aC();
      }));
      bds.clearReady();
      if($.trim(kw.val()))
      {
        ag.html("<div style='margin:30px 0 0 162px;font-size:13px;color:#666'>请按“回车”键发起检索</div>");
      }
      else
      {
        ag.empty();
      }
      document.title = "百度搜索";
      aS("");
      ag.show();
    }
    function K(be) 
    {
      if(window.__enable_jc)
      {
        $("#isjc").remove();
        var bf = aV(kw.val());
        if(be && bf && be.real_wd != bf)
        {
          $('<p id="isjc" class="hit_top"><i class="c-icon c-icon-bear"></i><font class="f14"><strong>以下为您显示“<em>' + escapeHTML(be.real_wd) + '</em>”的搜索结果。</strong>&nbsp;仍然搜索：<a href="/s?f=13&amp;nojc=1&amp;wd=' + encodeURIComponent(bf) + '">' + escapeHTML(bf) + "</a></font><br></p>").prependTo("#content_left");
        }
      }
    }
    $(window).on("swap_dom_ready", (function (bf, be) 
    {
      aS(be.real_wd);
      K(be);
    }));
    $(window).on("swap_end", (function (bf, be) 
    {
      if(! be)
      {
        return;
      }
      if(Z)
      {
        clearTimeout(Z);
        Z = false;
        aD = null;
      }
      be.confirm = false;
      if(! be.force)
      {
        aD = s(be, ao, 21);
        Z = setTimeout(aD, aP);
      }
      else
      {
        s(be, ao, 20)();
      }
    }));
    function aN(bh, be) 
    {
      O = {
        
      };
      if(! be)
      {
        be = i.hasCache(bh);
      }
      var bj = new Date().getTime();
      if(! be.force)
      {
        aH(be, {
          utime : new Date().getTime() - aT
        });
      }
      if(! be || ! be.loaded)
      {
        return false;
      }
      a7((function () 
      {
        $(window).trigger("swap_begin", [be, bh, ]);
      }));
      a7((function () 
      {
        try
{          if(be.json)
          {
            bds.abase64.loadImg(be.json.img_list.right, be.json.img_list.left);
          }
          else
          {
            var bm = $.parseJSON(be.html.find("#img_list").text());
            bds.abase64.loadImg(bm.right, bm.left);
          }}
        catch(bl)
{          }

        bds.abase64.end();
        if(be.prepic)
        {
          be.prepic.abort();
          delete be.prepic;
        }
      }));
      if(typeof L != "undefined")
      {
        L.abort();
      }
      ag.hide();
      oldEnv = ab;
      ab = bh;
      ao = av;
      av = be;
      a0();
      if(bds && bds.se && bds.se.certification && bds.se.certification.data)
      {
        bds.se.certification.data = [];
      }
      if(pageState == 0)
      {
        au(bh);
      }
      a7((function () 
      {
        aC();
      }));
      bds.clearReady();
      ag.empty();
      var bi = be.html;
      if(an.use_cache_repeatedly)
      {
        bi = bi.clone();
      }
      var bg = be.json;
      a7((function () 
      {
        if(bi)
        {
          bi.find("#head_style").children().removeAttr("data-for").appendTo("head");
        }
        else
        {
          $(bg.head_style).removeAttr("data-for").appendTo("head");
        }
      }));
      a7((function () 
      {
        if(bi)
        {
          $.globalEval(bi.find("#head_script").html());
        }
        else
        {
          $(bg.head_script).filter("script").each((function (bl, bm) 
          {
            $.globalEval($(bm).html());
          }));
        }
      }));
      a7((function () 
      {
        if(bi)
        {
          bi.find("#content_script script").each((function (bl, bm) 
          {
            $.globalEval($(bm).html());
          }));
        }
        else
        {
          $(bg.content_script).filter("script").each((function (bl, bm) 
          {
            $.globalEval($(bm).html());
          }));
        }
      }));
      var bf = bi.find("#container");
      if(bg)
      {
        bf = $(bg.container);
      }
      window.PDC_ASYNC.bindImgLoad(bf);
      J(ag, bf);
      var bk = bi.find("#footer").children();
      if(bg)
      {
        bk = $(bg.footer);
      }
      J(ag, bk);
      if(bds && bds.comm && bds.comm.templateName == bds.comm.resTemplateName)
      {
        if(bds.comm.seinfo)
        {
          bds.comm.seinfo.rsv_tpfail = 0;
        }
      }
      else
      {
        if(bds.comm.seinfo)
        {
          bds.comm.seinfo.rsv_tpfail = 1;
        }
      }
      if(pageState != 0 && bds && bds.util && bds.util.setContainerWidth)
      {
        bds.util.setContainerWidth();
      }
      document.title = bh.p("wd") + "_百度搜索";
      ag.show();
      aK();
      aH(be, {
        domtime : new Date().getTime() - bj
      });
      aH(be, {
        waittime : new Date().getTime() - aO
      });
      $(window).trigger("swap_dom_ready", [be, bh, ]);
      window.PDC_ASYNC.domReady();
      if(window.__lazy_foot_js)
      {
        setTimeout((function () 
        {
          X(bh, be, bj);
        }), 
        0);
      }
      else
      {
        X(bh, be, bj);
      }
    }
    function X(bg, be, bi) 
    {
      var bh, bf;
      if(! bi)
      {
        bi = 0;
      }
      if(be)
      {
        bh = be.html;
        bf = be.json;
      }
      a7((function () 
      {
        a8.get(0).f.value = 8;
      }));
      a7((function () 
      {
        var bj = new Date().getTime();
        if(bds.abase64)
        {
          bds.abase64.setDomLoad("left");
          bds.abase64.setDomLoad("right");
        }
        aH(be, {
          base64time : new Date().getTime() - bj
        });
      }));
      a7((function () 
      {
        var bj = new Date().getTime();
        if(bh)
        {
          $.globalEval(bh.find("#jsMerge").html());
        }
        else
        {
          if(bf)
          {
            $(bf.jsMerge).filter("script").each((function (bk, bl) 
            {
              $.globalEval($(bl).html());
            }));
          }
        }
        aH(be, {
          jsmergetime : new Date().getTime() - bj
        });
      }));
      $("#search").find("form").submit((function () 
      {
        var bk = kw;
        kw = $(this).find("[name='wd']");
        var bj = aB.call(this);
        kw = bk;
        return bj;
      }));
      a7((function () 
      {
        var bj = new Date().getTime();
        bds.doReady();
        aH(be, {
          bdstime : new Date().getTime() - bj
        });
      }));
      a7((function () 
      {
        var bj = new Date().getTime();
        A.__runAla();
        aH(be, {
          alajstime : new Date().getTime() - bj
        });
      }));
      a7((function () 
      {
        var bj = new Date().getTime();
        if(bh)
        {
          $.globalEval(bh.find("#ecomScript").html());
        }
        else
        {
          if(bf)
          {
            $(bf.ecomScript).filter("script").each((function (bk, bl) 
            {
              $.globalEval($(bl).html());
            }));
          }
        }
        aH(be, {
          ecomtime : new Date().getTime() - bj
        });
      }));
      window.scrollTo(0, 0);
      swap_wait = false;
      a7((function () 
      {
        var bj = new Date().getTime();
        if(bds.se.tools)
        {
          if(S)
          {
            clearTimeout(S);
          }
          S = setTimeout((function () 
          {
            bds.se.tools();
          }), 
          600);
        }
        if(bds && bds.se && bds.se.certification && bds.se.certification.build)
        {
          if(ak)
          {
            clearTimeout(ak);
          }
          ak = setTimeout((function () 
          {
            if($(".certification").size() > 0)
            {
              bds.se.certification.build.init();
            }
          }), 
          1000);
        }
        if(bds && bds.se && bds.se.safeTip)
        {
          if(Y)
          {
            clearTimeout(Y);
          }
          Y = setTimeout((function () 
          {
            if($(".unsafe_ico_new").size() > 0)
            {
              bds.se.safeTip.init();
            }
          }), 
          1200);
        }
        aH(be, {
          tiptime : new Date().getTime() - bj
        });
      }));
      a7((function () 
      {
        var bj = new Date().getTime();
        if(aQ)
        {
          clearTimeout(aQ);
        }
        aQ = setTimeout((function () 
        {
          if(bds.se.login && bds.se.login.setUserInfo)
          {
            bds.se.login.setUserInfo();
          }
          if(bds.su && bds.su.U && bds.su.U.urTrigger.init)
          {
            bds.su.U.urTrigger.init();
          }
          else
          {
            if((bds.comm.newindex || bds.comm.username) && bds.su.urStatic)
            {
              var bk = $.ajax({
                dataType : "script",
                cache : true,
                url : bds.su.urStatic + "/static/ur/js/ur/urstatic-async-1.4.js"
              });
              bk.done((function () 
              {
                bds.su.U.urTrigger.init();
              }));
            }
          }
        }), 
        1400);
        aH(be, {
          urtime : new Date().getTime() - bj
        });
      }));
      a7((function () 
      {
        var bj = new Date().getTime();
        window.initResultClickLog();
        aH(be, {
          clicktime : new Date().getTime() - bj
        });
      }));
      a7((function () 
      {
        aH(be, {
          rtime : new Date().getTime() - bi,
          used : 1
        });
        if(bds.comm.seinfo && be)
        {
          bds.comm.seinfo.rsv_pstg = be.type;
        }
      }));
      typeof a6 == "function" ? a6() : "";
      a7((function () 
      {
        if(! be)
        {
          return;
        }
        var bk = "<table>";
        for(var bj in be.log)
        {
          if(be.log.hasOwnProperty(bj))
          {
            bk += "<tr><td>" + bj + "</td><td>" + encodeURIComponent(be.log[bj]) + "</td></tr>";
          }
        }
        for(var bj in O)
        {
          if(O.hasOwnProperty(bj))
          {
            bk += "<tr><td>" + bj + "</td><td>" + encodeURIComponent(O[bj]) + "</td></tr>";
          }
        }
        bk += "</table>";
        $("#debug").html(bk);
      }));
      a7((function () 
      {
        $(window).trigger("swap_end", [be, bg, ]);
        a9();
        aT = new Date().getTime();
        window.PDC_ASYNC.jsReady();
      }));
      if(window.PDC_ASYNC.log.cus_net > 600)
      {
        if(window.PDC_ASYNC.log.cus_net > 1000)
        {
          window.__async_strategy = 0;
        }
        else
        {
          window.__async_strategy = Math.max(0, N - 1);
        }
      }
      else
      {
        window.__async_strategy = N;
      }
    }
    function a0() 
    {
      a7((function () 
      {
        A.dispose();
      }));
      a7((function () 
      {
        if(A && A.__clear)
        {
          A.__clear();
        }
      }));
      a7((function () 
      {
        $.each(bds.comm.tips, (function (be, bf) 
        {
          if(bf && bf.destroy)
          {
            bf.destroy();
          }
        }));
        $("#c-tips-container").empty();
        bds.comm.tips = [];
      }));
      a7((function () 
      {
        if(window.app && window.app.dispose)
        {
          window.app.dispose();
        }
      }));
      a7((function () 
      {
        bds.comm.resolveUnloadHandler();
      }));
      if(bds && bds.se && bds.se.certification && bds.se.certification.data)
      {
        bds.se.certification.data = [];
      }
    }
    function aj() 
    {
      if(Z && aD)
      {
        clearTimeout(Z);
        Z = setTimeout(aD, aP);
      }
    }
    function s(be, bg, bf) 
    {
      return (function () 
      {
        if(! be || be.confirm)
        {
          return;
        }
        bds.comm.cur_query = be.real_wd;
        be.confirm = true;
        Z = false;
        aD = null;
        var bi = {
          
        };
        if(bg && bg.env)
        {
          bi.is_referer = bg.env.buildSyncSearchUrl();
        }
        else
        {
          bi.is_referer = a4.protocol + "//" + a4.host + a4.pathname + a4.search;
        }
        bi.is_xhr = "1";
        var bh = new U(bb(aq.getQueryString()));
        if(! be.env.equals(bh) && ! be.env.clone({
          wd : be.prw
        }).equals(bh))
        {
          aq.setUrl(be.env);
        }
        if(! be.seq)
        {
          be.seq = 1;
        }
        else
        {
          be.seq ++;
        }
        if(window.PDC_ASYNC && PDC_ASYNC.setParam)
        {
          window.PDC_ASYNC.setParam("cus_pstg", bf);
        }
        var bj = "/s?ie=utf-8&csq=" + be.seq + "&pstg=" + bf + "&mod=2&isbd=1&cqid=" + be.qid + "&istc=" + (new Date().getTime() - be.startTime) + "&ver=" + bds.comm.baiduis_verify + "&chk=" + be.chk + "&isid=" + az + "&" + be.env.buildQueryString() + (be.force ? "&f4s=1" : "") + (typeof t == "function" ? "&_ck=" + t(be.env.p("wd")) : "");
        $.ajax({
          headers : bi,
          url : bj
        });
        if(bds.comm.seinfo)
        {
          bds.comm.seinfo.rsv_prw = kw.val();
          bds.comm.seinfo.rsv_pstg = bf;
        }
        aM();
        az = be.qid;
        W.done((function () 
        {
          if(bf == 20)
          {
            aR.updateInitData();
          }
        }));
      });
    }
    $(window).on("indexOff", (function (bf, be) 
    {
      W.done((function () 
      {
        aS(be.p("wd"));
      }));
    }));
    if(aq.support())
    {
      W.done((function () 
      {
        aR.setMaxNum(4);
      }));
    }
    var ax = false, P;
    var aW = false;
    a8.mousedown((function () 
    {
      aW = false;
    })).delegate("a,input", "focus", (function () 
    {
      aW = false;
    }));
    function aB(bf) 
    {
      if(! aq.support())
      {
        return true;
      }
      if(aW)
      {
        return false;
      }
      aW = true;
      kw.blur();
      aS("");
      if($(this).attr("target"))
      {
        return true;
      }
      ax = true;
      P = setTimeout((function () 
      {
        ax = false;
      }), 1000);
      try
{        if(! $.trim(kw.val()))
        {
          a4.href = "/";
          return false;
        }
        var bi = new U();
        var bh = $(this).serializeArray(), be;
        for(be = 0;be < bh.length;be ++)
        {
          bi.p(bh[be].name, bh[be].value);
        }
        bi.p("wd", kw.val());
        if(bi.p("nojc"))
        {
          bi.p("nojc", "");
        }
        if(av)
        {
          if((bi.equals(av.env.clone({
            wd : av.real_wd
          }))) && ! av.force)
          {
            s(av, ao, 22)();
            av.force = true;
            aS(av.real_wd);
            K(av);
            return false;
          }
          if(av.env.p("rsv_spt"))
          {
            bi.p("rsv_spt", av.env.p("rsv_spt"));
          }
        }
        if(bds && bds.abase64 && bds.abase64.restart)
        {
          bds.abase64.restart();
        }
        aq.submit(bi, ! ! bf);}
      catch(bg)
{        }

      return false;
    }
    var aI = {
      
    };
    function r(bg) 
    {
      var bh = {
        force : false,
        no_predict : false,
        use_cache : false,
        shouldShow : true
      };
      if(bg)
      {
        $.extend(bh, bg);
      }
      var bj = bh.env, bl = bh.force, bk = bh.no_predict, bf = bh.shouldShow, 
      bi = bh.use_cache, 
      be;
      if(! bj || ! bj.p("wd") || ! bj.hashCode())
      {
        return;
      }
      if((at || Cookie.get("ISSW") == 1) && ! bl && bk)
      {
        return;
      }
      if((z || Cookie.get("ISSW") == 1) && ! bl && ! bk)
      {
        return;
      }
      if(bi && (be = i.hasCache(bj)))
      {
        if(bf)
        {
          if(! av || be.real_wd != av.real_wd || be.env.p("pn") != av.env.p("pn"))
          {
            be.force = bh.force;
            if(bds && bds.abase64 && bds.abase64.restart)
            {
              bds.abase64.restart();
            }
            window.PDC_ASYNC.changeQuery(bj);
            window.PDC_ASYNC.hitPreload();
            window.PDC_ASYNC.recvData();
            aN(bj, be);
          }
          aS(be.real_wd);
          K(be);
        }
        return;
      }
      if(! bl && bk && aI[bj.hashCode()])
      {
        return;
      }
      if(bl && bf && bk)
      {
        q();
      }
      be = {
        env : bj,
        no_predict : bk,
        shouldShow : bf,
        loaded : false,
        force : bl,
        startTime : new Date().getTime(),
        log : {
          ctime : new Date().getTime() - aT,
          wd : bj.p("wd"),
          ntime : 0,
          stat : 0,
          used : 0,
          rtime : 0,
          utime : (bl ? new Date().getTime() - aT : 0),
          res : 0
        }
      };
      aZ.push(be.log);
      y ++;
      if(bk)
      {
        if(aI[bj.hashCode()])
        {
          i.deleteCache(aI[bj.hashCode()]);
        }
        aI[bj.hashCode()] = be;
      }
      b(be, bk);
    }
    function aG() 
    {
      var be = [];
      if(am)
      {
        be = $.map(am.slice(0, 2), (function (bf) 
        {
          return bf.value;
        }));
      }
      return be.join("\t");
    }
    function bc(be) 
    {
      F();
      a4.replace(be.buildSyncSearchUrl());
    }
    var D, H;
    function ah(bf, be) 
    {
      if(! be)
      {
        at = true;
        if(D)
        {
          clearTimeout(D);
          D = false;
        }
        D = setTimeout((function () 
        {
          at = Q;
        }), 
        bf);
      }
      else
      {
        z = true;
        if(H)
        {
          clearTimeout(H);
          H = false;
        }
        H = setTimeout((function () 
        {
          z = a3;
        }), 
        bf);
      }
    }
    function b(bk, bj) 
    {
      var bl = bk.env;
      var bh = {
        
      };
      if(av && av.env)
      {
        bh.is_referer = av.env.buildSyncSearchUrl();
      }
      else
      {
        bh.is_referer = a4.protocol + "//" + a4.host + a4.pathname + a4.search;
      }
      bh.is_xhr = "1";
      if(window.bds && bds.comm && bds.comm.cur_query)
      {
        bl.p("bs", bds.comm.cur_query);
      }
      var bf = "ie=utf-8" + (bds.comm.newindex ? "&newi=1" : "") + (ap.sid ? "&sid=" + encodeURIComponent(ap.sid) : "") + (ap.tnp ? "&tnp=" + encodeURIComponent(ap.tnp) : "") + "&mod=" + (bj ? "1" : "11") + "&isbd=1&isid=" + az + "&" + bl.buildQueryString() + "&rsv_sid=" + bds.comm.indexSid + "&_ss=" + (bk.shouldShow ? 1 : 0) + "&clist=" + encodeURIComponent(i.getCacheList()) + "&hsug=" + encodeURIComponent(aG()) + (bk.force ? "&f4s=1" : "") + "&csor=" + k(kw.get(0));
      var bg = "/s?" + bf;
      bg += "&_cr1=" + aw(bg);
      var be = (bk.force ? "1" : "0") + (bk.no_predict ? "1" : "0") + (bk.shouldShow ? "1" : "0");
      if(B[be] && be != "010")
      {
        B[be].abort();
        delete B[be];
      }
      if(be == "111")
      {
        for(var bi in B)
        {
          if(B.hasOwnProperty(bi))
          {
            B[bi].abort();
            delete B[bi];
          }
        }
      }
      var bm = B[be] = $.ajax({
        url : bg,
        dataType : "html",
        headers : bh,
        success : (function (bp, bn, by) 
        {
          if(by.status == "302" || (bp && bp.indexOf("<div>") > 10))
          {
            if(bk.force)
            {
              bc(bl);
            }
            else
            {
              i.deleteCache(bk);
            }
            return;
          }
          aH(bk, {
            ntime : new Date().getTime() - bk.startTime,
            res : 1
          });
          bk.loaded = true;
          var bu = bk.html = $(bp);
          var bx = parseInt(bu.find("#__status").html());
          var bv = parseInt(bu.find("#__switchtime").html());
          var bq = parseInt(bu.find("#__redirect").html());
          bk.real_wd = bu.find("#__real_wd").text();
          bk.real_wd_org = bu.find("#__real_wd_org").text();
          var bo = false;
          if(bl.p("wd") == aV(kw.val()) && bk.shouldShow)
          {
            bo = true;
          }
          if(bk.real_wd)
          {
            bk.prw = bl.p("wd");
            bl.p("wd", bk.real_wd);
          }
          var bt = bu.find("#__queryId").html();
          var bw = bu.find("#__querySign").html();
          bk.querySign = bw;
          aH(bk, {
            stat : (bx ? bx : 0)
          });
          if(bds.comm.isDebug)
          {
            $("#isDebugInfo").html(bu.find("#__isDebugInfo").html());
          }
          if(bt)
          {
            bk.qid = bt;
          }
          var bs = bu.find("#__chk").html();
          bk.chk = bs ? bs : 0;
          if(! bp || (! bt && ! bv && ! bq && ! bx) || (! bw && bk.force))
          {
            if(bk.force)
            {
              bl.p("__eis", 1);
              bl.p("__eist", bp ? bp.length : 0);
              bl.p("real_wd", bk.real_wd);
              bc(bl);
              return;
            }
            else
            {
              i.deleteCache(bk);
              return;
            }
          }
          if(bv > 0)
          {
            ah(bv * 1000, ! bj);
          }
          if(bx == - 11)
          {
            var br = i.getCacheBySign(bw);
            if(! br)
            {
              r({
                env : bk.env.clone({
                  wd : bk.real_wd
                }),
                force : bk.force,
                use_cache : false,
                no_predict : true
              });
              i.deleteCache(bk);
              return;
            }
            br.force = bk.force;
            ay();
            aS(br.real_wd);
            K(br);
            i.deleteCache(bk);
            bk = br;
            if(! av || bk.real_wd != av.real_wd)
            {
              bo = true;
            }
          }
          else
          {
            if(bx < 0)
            {
              if(bq == 1 && bk.force)
              {
                aH(bk, {
                  redirect : 1
                });
                bc(bl);
                return;
              }
              a();
              i.deleteCache(bk);
              return;
            }
            else
            {
              if(bx > 0)
              {
                i.deleteCache(bk);
                return;
              }
            }
          }
          i.addCache(bk);
          if((i.shouldShow(bk) || bo) && bk !== av || bk.force)
          {
            ay();
            bk.shouldShow = false;
            if(bds && bds.abase64 && bds.abase64.restart)
            {
              bds.abase64.restart();
            }
            window.PDC_ASYNC.changeQuery(bl, bk.startTime);
            window.PDC_ASYNC.recvData();
            aN(bl, bk);
          }
        }),
        error : (function () 
        {
          i.deleteCache(bk);
        })
      });
      bk.xhr = bm;
      R.push(bm);
      bm.always((function () 
      {
        var bo, bn;
        for(bo = 0;bo < R.length;bo ++)
        {
          if(bm === R[bo])
          {
            R.splice(bo, 1);
            break;
          }
        }
        for(bn in aI)
        {
          if(aI.hasOwnProperty(bn))
          {
            if(aI[bn] === bk)
            {
              delete aI[bn];
              break;
            }
          }
        }
      }));
    }
    function a9() 
    {
      var be;
      aZ = [];
      for(be = 0;be < R.length;be ++)
      {
        R[be].abort();
        delete R[be];
      }
      R = [];
      y = 0;
      ax = false;
      clearTimeout(P);
    }
    aq.init();
    $((function () 
    {
      var be = $("script").last();
      var bf = $("head");
      aC = (function () 
      {
        be.nextAll().not("[data-for]").not("#passport-login-pop").remove();
        bf.find("*").not("[data-for]").not("meta").not("title").not("script[async]").not('link[href*="passport"]').remove();
      });
    }));
    function p() 
    {
      if(window.index_off)
      {
        window.index_off();
      }
      if(index_kw[0] !== a5[0])
      {
        index_kw.val("");
      }
      kw = a5;
      pageState = 1;
      bds.comm.ishome = 0;
      ab = new U();
      av = {
        env : ab,
        real_wd : bds.comm.query,
        force : true,
        confirm : true
      };
      W.done((function (be) 
      {
        return (function () 
        {
          j.start();
        });
      })());
      $(window).trigger("index_off");
      bds.util.setContainerWidth();
      if(window.__lazy_foot_js)
      {
        setTimeout((function () 
        {
          X();
        }), 0);
      }
      else
      {
        X();
      }
    }
    function au(be) 
    {
      if(window.index_off)
      {
        window.index_off();
      }
      if(index_kw.get(0) !== a5.get(0))
      {
        index_kw.val("");
        a5.val(be.p("wd"));
      }
      kw = a5;
      pageState = 1;
      bds.comm.ishome = 0;
      W.done((function () 
      {
        if(aF !== j)
        {
          aF.stop();
          j.hide();
          j.setKey(be.p("wd"));
          j.start();
        }
      }));
      bds.util.setContainerWidth();
      $(window).trigger("index_off", be);
    }
    $(window).on("swap_end", (function (bf, be) 
    {
      if(! be)
      {
        aM();
      }
    }));
    if(bds.comm.resultPage)
    {
      p();
    }
    $("#s_tab a").mousedown((function () 
    {
      setHeadUrl(this);
    })).focus((function () 
    {
      setHeadUrl(this);
    }));
    ag.delegate("#page strong+a,#page a.n", "mouseover", (function () 
    {
      r({
        env : new U(bb($(this).attr("href"))),
        force : false,
        use_cache : true,
        no_predict : true,
        shouldShow : false
      });
    }));
    var ae, ac;
    function aY() 
    {
      ae = false;
      ac = false;
    }
    function n(bg) 
    {
      if(! ae)
      {
        ae = {
          x : bg.pageX,
          y : bg.pageY
        };
      }
      if(Math.abs(ae.x - bg.pageX) > d || Math.abs(ae.y - bg.pageY) > d)
      {
        if(! ac)
        {
          var be = aR;
          var bf = 1;
          if(bf && be && be.data() && be.data()[0] && be.visible())
          {
            r({
              env : new U().clone({
                wd : be.data()[0].value
              }),
              force : false,
              no_predict : true,
              use_cache : true,
              shouldShow : false
            });
            bf --;
          }
          if(bf && be && be.data() && be.data()[1] && be.visible())
          {
            r({
              env : new U().clone({
                wd : be.data()[1].value
              }),
              force : false,
              no_predict : true,
              use_cache : true,
              shouldShow : false
            });
            bf --;
          }
        }
        ac = true;
      }
    }
    W.done((function () 
    {
      $(document).mousemove(n);
    }));
    $("#u .back_org").click((function () 
    {
      var be = new Date();
      be.setTime(new Date().getTime() + 1103760000000);
      Cookie.set("ORIGIN", 2, document.domain, "/", be);
      if(ab)
      {
        a4.replace(ab.buildSyncSearchUrl({
          _r : Math.random()
        }));
      }
      else
      {
        a4.href = "/";
      }
    }));
    $(window).scroll((function () 
    {
      var bg = $("#head"), be = $(window);
      var bf = 40;
      var bj;
      var bi = bg.offset().top;
      var bh = (function () 
      {
        if(bj)
        {
          clearTimeout(bj);
          bj = false;
        }
        bj = setTimeout((function () 
        {
          var bk = be.scrollTop();
          if(bk > bf + bi)
          {
            bj = setTimeout((function () 
            {
              bg.addClass("s_down");
              W.done((function () 
              {
                j.hide();
              }));
            }), 
            0);
          }
          else
          {
            if(bk <= bf + bi)
            {
              bj = setTimeout((function () 
              {
                bg.removeClass("s_down");
              }), 
              0);
            }
          }
        }), 
        50);
      });
      bh();
      return bh;
    })());
    kw.bind("paste", (function (bf) 
    {
      var bg = this;
      var be = this.value;
      M = true;
      setTimeout((function () 
      {
        if(bg.value && bg.value != be)
        {
          r({
            env : new U().clone({
              wd : $.trim(bg.value)
            }),
            force : false,
            use_cache : true,
            no_predict : true,
            shouldShow : true
          });
        }
      }), 
      0);
    }));
    var m = (function () 
    {
      var be = {
        
      };
      return {
        add : (function (bf, bg) 
        {
          if(bf && bf.hashCode && bg && (bg.left || bg.right))
          {
            be[bf.hashCode()] = bg;
          }
        }),
        get : (function (bf) 
        {
          if(bf && bf.hashCode && be.hasOwnProperty(bf.hashCode()))
          {
            return be[bf.hashCode()];
          }
          return false;
        }),
        clear : (function () 
        {
          be = {
            
          };
        })
      };
    })();
    function af(be) 
    {
      return;
      if(! window.__IS_IMG_PREFETCH_SW || ! be || ! be.html)
      {
        return;
      }
      var bf = be.html.find("#__isImgList").text();
      var bh;
      try
{        bh = $.parseJSON(bf);
        bh = {
          left : bh.left.sidList,
          right : bh.right.sidList
        };}
      catch(bg)
{        }

      m.add(be.env, bh);
    }
    function f(bf) 
    {
      if(! window.__IS_IMG_PREFETCH_SW || ! bf || ! bf.env)
      {
        return;
      }
      var bg;
      if(bg = m.get(bf.env))
      {
        if(bg.right && window.PDC_ASYNC && window.PDC_ASYNC.setParam)
        {
          window.PDC_ASYNC.setParam("ic_pre_all", bg.right.length);
        }
        bds.abase64.loadImg(bg.right, bg.left);
      }
      else
      {
        if(window.__IS_IMG_PREFETCH_SW !== 2)
        {
          be(bf);
        }
        else
        {
          window.PDC_ASYNC.setParam("ic_pre_sam", 1);
        }
      }
      function be(bh) 
      {
        var bk = window.__IS_IMG_PREFETCH_ASM ? "needAsm=0&" : "";
        var bi = window.__IS_IMG_PREFETCH_ASM === 1 ? "allAsm=1&" : "";
        var bj = "/r/prepic?ie=utf-8&" + bk + bi + bh.env.buildQueryString();
        var bl = + (new Date());
        if(window.PDC_ASYNC && window.PDC_ASYNC.setParam)
        {
          window.PDC_ASYNC.setParam("ic_pre_spic", 1);
        }
        bh.prepic = $.ajax({
          url : bj,
          dataType : "json",
          success : (function (bo) 
          {
            if(bo)
            {
              if(window.PDC_ASYNC && window.PDC_ASYNC.setParam)
              {
                if(bo.right || bo.left)
                {
                  window.PDC_ASYNC.setParam("ic_pre_all", bo.right.sidList && bo.right.sidList.length);
                  window.PDC_ASYNC.setParam("ic_pre_lc", bo.left.urlList && bo.left.urlList.length);
                }
                window.PDC_ASYNC.setParam("ic_pre_rpic", 1);
                window.PDC_ASYNC.setParam("ic_pre_time", + (new Date()) - bl);
              }
              if(bo.right && bo.left)
              {
                bds.abase64.loadImg(bo.right.sidList, bo.left.sidList);
                if(bo.left.urlList && bo.left.urlList.length > 0)
                {
                  var bm = bo.left.urlList;
                  window.PDC_ASYNC.cacheData = {
                    
                  };
                  for(var bn = 0;bn < bm.length;bn ++)
                  {
                    (function (bq) 
                    {
                      var bp = new Image();
                      var br = "_PREIMG_" + new Date().getTime();
                      window.PDC_ASYNC.cacheData['"' + bq + '"'] = 1;
                      bp.onload = (function () 
                      {
                        delete window[br];
                      });
                      window[br] = bp;
                      bp.src = bq;
                    })(bm[bn]);
                  }
                }
              }
            }
          }),
          error : (function () 
          {
            
          })
        });
      }
    }
  }
  function G(a) 
  {
    return document.getElementById(a);
  }
  function addEV(d, b, a) 
  {
    if(window.attachEvent)
    {
      d.attachEvent("on" + b, a);
    }
    else
    {
      if(window.addEventListener)
      {
        d.addEventListener(b, a, false);
      }
    }
  }
  function _aMC(d) 
  {
    var b = d, a = - 1;
    while(b = b.parentNode)
    {
      a = parseInt(b.getAttribute("id"));
      if(a > 0)
      {
        return a;
      }
    }
  }
  function al_c(a) 
  {
    while(a.tagName != "TABLE")
    {
      a = a.parentNode;
    }
    return a.getAttribute("id");
  }
  function al_c2(b, a) 
  {
    while(a --)
    {
      while((b = b.parentNode).tagName != "TABLE")
      {
        
      }
    }
    return b.getAttribute("id");
  }
  function c(a) 
  {
    var k = a.p1;
    if(a.fm == "alop" && ! ("rsv_xpath" in a))
    {
      if(k && G(k).getAttribute("srcid") == "6677")
      {
        
      }
      else
      {
        return true;
      }
    }
    if(k && ! ("p5" in a))
    {
      a.p5 = k;
    }
    var b = window.document.location.href, g = "", d = "", l = "", 
    f = window["BD_PS_C" + (new Date()).getTime()] = new Image();
    for(v in a)
    {
      switch(v){
        case "title":
          d = a[v].replace(/<[^<>]+>/g, "");
          if(d && d.length > 100)
          {
            d = d.substring(0, 100);
          }
          d = encodeURIComponent(d);
          break;

        case "mu":
          

        case "url":
          d = escape(a[v]);
          break;

        default:
          d = a[v];
        
      }
      g += "&" + v + "=" + d;
    }
    if(! ("mu" in a))
    {
      try
{        if(("p2" in a) && G(a.p1).getAttribute("mu") && a.fm != "pl")
        {
          l = "&mu=" + escape(G(a.p1).getAttribute("mu"));
        }}
      catch(i)
{        }

    }
    var j = bds.comm.ubsurl + "?q=" + bds.comm.queryEnc + g + l + "&rsv_sid=" + bds.comm.sid + "&cid=" + bds.comm.cid + "&qid=" + bds.comm.queryId + "&t=" + new Date().getTime() + "&path=" + encodeURIComponent(b);
    if(bds.comm.inter)
    {
      j = j + "&rsv_inter=" + bds.comm.inter;
    }
    if(bds && bds.comm && bds.comm.seinfo && bds.comm.seinfo.rsv_pstg)
    {
      j = j + "&rsv_pstg=" + bds.comm.seinfo.rsv_pstg;
    }
    if(bds && bds.comm && bds.comm.resultPage)
    {
      j = j + "&rsv_iorr=1";
    }
    else
    {
      j = j + "&rsv_iorr=0";
    }
    f.src = j;
    return true;
  }
  function ns_c_pj(j, i) 
  {
    var k = encodeURIComponent(window.document.location.href), 
    g = "", 
    a = "", 
    b = "", 
    f = bds.comm.queryEnc, 
    d = window["BD_PS_C" + (new Date()).getTime()] = new Image();
    for(v in j)
    {
      switch(v){
        case "title":
          a = encodeURIComponent(j[v].replace(/<[^<>]+>/g, ""));
          break;

        case "url":
          a = encodeURIComponent(j[v]);
          break;

        default:
          a = j[v];
        
      }
      g += v + "=" + a + "&";
    }
    b = "&mu=" + k;
    d.src = "http://nsclick.baidu.com/v.gif?pid=201&" + (i || "") + g + "path=" + k + "&wd=" + f + "&rsv_sid=" + bds.comm.sid + "&t=" + new Date().getTime();
    return true;
  }
  function ns_c(a) 
  {
    return ns_c_pj(a, "pj=www&");
  }
  bds.util.getWinWidth = (function () 
  {
    return window.document.documentElement.clientWidth;
  });
  bds.util.setContainerWidth = (function () 
  {
    var g = G("container"), b = G("wrapper"), a = (function (i, j) 
    {
      j.className = j.className.replace(i, "");
    }), 
    f = (function (i, j) 
    {
      j.className = (j.className + " " + i).replace(/^\s+/g, "");
    }), 
    d = (function (i, j) 
    {
      return i.test(j.className);
    });
    if(bds.util.getWinWidth() < 1207)
    {
      if(g)
      {
        a(/\bcontainer_l\b/g, g);
        if(! d(/\bcontainer_s\b/, g))
        {
          f("container_s", g);
        }
      }
      if(b)
      {
        a(/\bwrapper_l\b/g, b);
        if(! d(/\bwrapper_s\b/, b))
        {
          f("wrapper_s", b);
        }
      }
      bds.comm.containerSize = "s";
    }
    else
    {
      if(g)
      {
        a(/\bcontainer_s\b/g, g);
        if(! d(/\bcontainer_l\b/, g))
        {
          f("container_l", g);
        }
      }
      if(b)
      {
        a(/\bwrapper_s\b/g, b);
        if(! d(/\bwrapper_l\b/, b))
        {
          f("wrapper_l", b);
        }
      }
      bds.comm.containerSize = "l";
    }
  });
  $(window).resize((function () 
  {
    if("pageState" in window && pageState != 0)
    {
      bds.util.setContainerWidth();
      bds.event.trigger("se.window_resize");
    }
  }));
  window.A = bds.aladdin = {
    ids : [],
    has : true,
    list : [],
    logs : [],
    loadTimes : []
  };
  (function () 
  {
    var l = [], g = false;
    var b = (function (q, p) 
    {
      try
{        q.call(p);}
      catch(r)
{        }

    });
    bds.ready = (function (p) 
    {
      if(typeof p != "function")
      {
        return;
      }
      if(g)
      {
        b(p);
      }
      else
      {
        l.push(p);
      }
    });
    bds.doReady = (function () 
    {
      g = true;
      while(l.length)
      {
        b(l.shift());
      }
    });
    bds.clearReady = (function () 
    {
      g = false;
      l = [];
    });
    A.__clear = (function () 
    {
      A.ids = [];
      A.has = true;
      A.list = [];
      A.logs = [];
      A.loadTimes = [];
      o = [];
      k = null;
      j = [];
      n = [];
      i = [];
    });
    var o = [], n = [], i = [], k = null, j = [], m = (function (q) 
    {
      var p = {
        
      };
      if(q)
      {
        try
{          var s = new Function("return " + q)();
          if(s)
          {
            p = s;
          }}
        catch(t)
{          }

      }
      return p;
    }), 
    f = (function () 
    {
      var p = document.getElementsByTagName("script");
      return (function () 
      {
        var r = p[p.length - 1];
        if(window.currentScriptElem)
        {
          r = window.currentScriptElem;
        }
        var q = r;
        while(q)
        {
          if(q.className)
          {
            if(/(?:^|\s)result(?:-op)?(?:$|\s)/.test(q.className))
            {
              if(tplname = q.getAttribute("tpl"))
              {
                return q;
              }
            }
          }
          q = q.parentNode;
        }
      });
    })(), 
    a = (function () 
    {
      var r = $(".result-op").get().concat($(".result").get()), 
      t = {
        
      };
      for(var q = 0, p, s;s = r[q];q ++)
      {
        if(p = s.getAttribute("tpl"))
        {
          if(t[p])
          {
            t[p].push(s);
          }
          else
          {
            t[p] = [s, ];
          }
        }
      }
      return t;
    }), 
    d = A._Aladdin = (function () 
    {
      this.p1 = 0;
      this.mu = null;
    });
    A.merge = (function (p, q) 
    {
      j.push({
        tplname : p,
        fn : q
      });
    });
    A.init = A.setup = (function (r, q) 
    {
      if(r === undefined || r === null)
      {
        return;
      }
      var s, p = k || f();
      if(! p)
      {
        return;
      }
      s = {
        container : p
      };
      if(typeof r == "function")
      {
        s.handler = r;
      }
      else
      {
        if(typeof r == "object")
        {
          s.data = r;
        }
        else
        {
          s.data = {
            
          };
          s.data[r] = q;
        }
      }
      o.push(s);
    });
    A.addDisposeHandler = (function (p) 
    {
      i.push(p);
    });
    A.dispose = (function () 
    {
      while(n.length)
      {
        var r = n.shift();
        b(r.fn, r.obj);
      }
      var p = i;
      for(var q = 0;q < p.length;q ++)
      {
        var r = p[q];
        b(r.fn, r.obj);
      }
    });
    A.__runAla = (function () 
    {
      if(j.length)
      {
        var x = a();
        for(var y = 0, E;E = j[y];y ++)
        {
          var u = x[E.tplname];
          if(u)
          {
            for(var w = 0, p;p = u[w];w ++)
            {
              k = p;
              E.fn();
              k = null;
            }
          }
        }
      }
      var r = [], D = (function (F) 
      {
        if(! isNaN(F.initIndex))
        {
          return r[F.initIndex * 1];
        }
        var H = {
          data : {
            
          },
          handlers : [],
          container : F
        };
        r.push(H);
        F.initIndex = r.length - 1;
        return H;
      });
      for(var y = 0, E;E = o[y];y ++)
      {
        var t = D(E.container);
        if(E.data)
        {
          for(var s in E.data)
          {
            if(E.data.hasOwnProperty(s))
            {
              t.data[s] = E.data[s];
            }
          }
        }
        else
        {
          if(E.handler)
          {
            t.handlers.push(E.handler);
          }
        }
      }
      for(var y = 0, E;E = r[y];y ++)
      {
        var B, z, C, q = new d();
        q.data = E.data;
        q.container = E.container;
        q._init();
        A.list.push(q);
        z = new Date();
        while(B = E.handlers.shift())
        {
          b(B, q);
          if(typeof q.dispose == "function")
          {
            n.push({
              obj : q,
              fn : q.dispose
            });
            q.dispose = null;
          }
        }
        C = new Date(), obj = {
          srcid : q.srcid
        };
        obj.tpl = q.container.getAttribute("tpl");
        obj.time = C - z;
        A.loadTimes.push(obj);
        $.each(A._Aladdin.fixs, (function (F, H) 
        {
          H.call(q, q);
        }));
      }
    });
    d.prototype = {
      _init : (function () 
      {
        var p = m(this.container.getAttribute("data-click"));
        this.p1 = p.p1 || this.container.id;
        this.mu = p.mu || this.container.getAttribute("mu");
        this.srcid = p.rsv_srcid || this.container.getAttribute("srcid");
      })
    };
  })();
  jQuery && jQuery.extend({
    stringify : (function stringify(b) 
    {
      if("JSON" in window)
      {
        return JSON.stringify(b);
      }
      var l = typeof (b);
      if(l != "object" || b === null)
      {
        if(l == "string")
        {
          b = '"' + b + '"';
        }
        return String(b);
      }
      else
      {
        var d = {
          "\\b" : "\\b",
          "\\t" : "\\t",
          "\\n" : "\\n",
          "\\f" : "\\f",
          "\\r" : "\\r",
          '"' : '\\"',
          "\\\\" : "\\\\"
        };
        function i(n) 
        {
          if(/["\\\x00-\x1f]/.test(n))
          {
            n = n.replace(/["\\\x00-\x1f]/g, (function (o) 
            {
              var p = d[o];
              if(p)
              {
                return p;
              }
              p = o.charCodeAt();
              return "\\u00" + Math.floor(p / 16).toString(16) + (p % 16).toString(16);
            }));
          }
          return '"' + n + '"';
        }
        function a(s) 
        {
          var o = ["[", ], p = s.length, n, q, r;
          for(q = 0;q < p;q ++)
          {
            r = s[q];
            switch(typeof r){
              case "undefined":
                

              case "function":
                

              case "unknown":
                break;

              default:
                if(n)
                {
                  o.push(",");
                }
                o.push($.stringify(r));
                n = 1;
              
            }
          }
          o.push("]");
          return o.join("");
        }
        switch(typeof b){
          case "undefined":
            return "undefined";

          case "number":
            return isFinite(b) ? String(b) : "null";

          case "string":
            return i(b);

          case "boolean":
            return String(b);

          default:
            if(b === null)
            {
              return "null";
            }
            else
            {
              if(b instanceof Array)
              {
                return a(b);
              }
              else
              {
                var m = ["{", ], g = $.stringify, f, k;
                for(var j in b)
                {
                  if(Object.prototype.hasOwnProperty.call(b, j))
                  {
                    k = b[j];
                    switch(typeof k){
                      case "undefined":
                        

                      case "unknown":
                        

                      case "function":
                        break;

                      default:
                        if(f)
                        {
                          m.push(",");
                        }
                        f = 1;
                        m.push(g(j) + ":" + g(k));
                      
                    }
                  }
                }
                m.push("}");
                return m.join("");
              }
            }
          
        }
      }
    }),
    format : (function (d, a) 
    {
      d = String(d);
      var b = Array.prototype.slice.call(arguments, 1), f = Object.prototype.toString;
      if(b.length)
      {
        b = b.length == 1 ? (a !== null && (/\[object Array\]|\[object Object\]/.test(f.call(a))) ? a : b) : b;
        return d.replace(/#\{(.+?)\}/g, (function (g, j) 
        {
          var i = b[j];
          if("[object Function]" == f.call(i))
          {
            i = i(j);
          }
          return ("undefined" == typeof i ? "" : i);
        }));
      }
      return d;
    }),
    subByte : (function (m, b, g) 
    {
      var f = [], k = m.split("");
      g = g || "…";
      for(var j = 0, d = k.length;j < d;j ++)
      {
        if(k[j].charCodeAt(0) > 255)
        {
          f.push("*");
        }
        f.push(k[j]);
      }
      if(b && b > 0 && f.length > b)
      {
        k = f.join("").substring(0, b - 1).replace(/\*/g, "") + g;
      }
      else
      {
        return m;
      }
      return k;
    }),
    getByteLength : (function (j) 
    {
      var d = [], g = j.split("");
      for(var f = 0, b = g.length;f < b;f ++)
      {
        if(g[f].charCodeAt(0) > 255)
        {
          d.push("*");
        }
        d.push(g[f]);
      }
      return d.length;
    }),
    _isValidKey : (function (a) 
    {
      return (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24')).test(a);
    }),
    setCookie : (function (d, f, b) 
    {
      f = encodeURIComponent(f);
      if(! jQuery._isValidKey(d))
      {
        return;
      }
      b = b || {
        
      };
      var a = b.expires;
      if("number" == typeof b.expires)
      {
        a = new Date();
        a.setTime(a.getTime() + b.expires);
      }
      document.cookie = d + "=" + f + (b.path ? "; path=" + b.path : "") + (a ? "; expires=" + a.toGMTString() : "") + (b.domain ? "; domain=" + b.domain : "") + (b.secure ? "; secure" : "");
    }),
    getCookie : (function (b) 
    {
      var f = "";
      if(jQuery._isValidKey(b))
      {
        var d = new RegExp("(^| )" + b + "=([^;]*)(;|\x24)"), a = d.exec(document.cookie);
        if(a)
        {
          f = a[2] || null;
          if("string" == typeof f)
          {
            f = decodeURIComponent(f);
            return f;
          }
        }
      }
      return null;
    }),
    removeCookie : (function (b, a) 
    {
      a = a || {
        
      };
      a.expires = new Date(0);
      jQuery.setCookie(b, "", a);
    })
  });
  var define;
  var require;
  (function (d) 
  {
    var s = {
      
    };
    var Q = [];
    var B = 1;
    var j = 2;
    var u = 3;
    var i = 4;
    var av = af();
    var U;
    function k(aA, aB) 
    {
      X(aA);
      var az = r.waitSeconds;
      if(H(aA) && az)
      {
        if(U)
        {
          clearTimeout(U);
        }
        U = setTimeout(K, az * 1000);
      }
      return av(aA, aB);
    }
    k.toUrl = av.toUrl;
    function K() 
    {
      var aB = [];
      var aC = [];
      var aA = {
        
      };
      var az;
      for(var aD in s)
      {
        if(! ah(aD))
        {
          az = 1;
          aB.push(aD);
        }
        ak(s[aD].depMs || [], (function (aF) 
        {
          var aE = aF.absId;
          if(! s[aE] && ! aA[aE])
          {
            az = 1;
            aC.push(aE);
            aA[aE] = 1;
          }
        }));
      }
      if(az)
      {
        throw new Error("[MODULE_TIMEOUT]Hang( " + (aB.join(", ") || "none") + " ) Miss( " + (aC.join(", ") || "none") + " )");
      }
    }
    var D;
    function Y() 
    {
      var aD = arguments.length;
      if(! aD)
      {
        return;
      }
      var aF;
      var aE;
      var aC = arguments[-- aD];
      while(aD --)
      {
        var az = arguments[aD];
        if(typeof az === "string")
        {
          aF = az;
        }
        else
        {
          if(H(az))
          {
            aE = az;
          }
        }
      }
      var aA = window.opera;
      if(! aF && document.attachEvent && (! (aA && aA.toString() === "[object Opera]")))
      {
        var aB = x();
        aF = aB && aB.getAttribute("data-require-id");
      }
      if(aF)
      {
        C(aF, aE, aC);
        if(D)
        {
          clearTimeout(D);
        }
        D = setTimeout(au, 1);
      }
      else
      {
        a.push({
          deps : aE,
          factory : aC
        });
      }
    }
    Y.amd = {
      
    };
    function an() 
    {
      var az = r.config[this.id];
      if(az && typeof az === "object")
      {
        return az;
      }
      return {
        
      };
    }
    function C(aC, aB, az) 
    {
      if(s[aC])
      {
        return;
      }
      var aA = {
        id : aC,
        deps : aB || ["require", "exports", "module", ],
        factoryDeps : [],
        factory : az,
        exports : {
          
        },
        config : an,
        state : B,
        require : af(aC),
        depMs : [],
        depMsIndex : {
          
        },
        depRs : [],
        depPMs : {
          
        }
      };
      s[aC] = aA;
      Q.push(aA);
    }
    var n = /require\(\s*(['"'])([^'"]+)\1\s*\)/g;
    var M = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg;
    function au() 
    {
      var az = [];
      var aA = {
        
      };
      function aB(aC) 
      {
        if(s[aC] || aA[aC])
        {
          return;
        }
        az.push(aC);
        aA[aC] = 1;
      }
      ak(Q, (function (aD) 
      {
        if(aD.state > B)
        {
          return;
        }
        var aG = aD.deps.slice(0);
        var aF = aG.length;
        var aE = 0;
        var aC = aD.factory;
        if(typeof aC === "function")
        {
          aE = Math.min(aC.length, aF);
          aC.toString().replace(M, "").replace(n, (function (aI, aH, aJ) 
          {
            aG.push(aJ);
          }));
        }
        ak(aG, (function (aI, aH) 
        {
          var aL = ae(aI);
          var aK = ar(aL.module, aD.id);
          var aM, aJ;
          if(aK && ! F[aK])
          {
            if(aL.resource)
            {
              aJ = {
                id : aI,
                module : aK,
                resource : aL.resource
              };
              aD.depPMs[aK] = 1;
              aD.depRs.push(aJ);
            }
            aM = aD.depMsIndex[aK];
            if(! aM)
            {
              aM = {
                id : aL.module,
                absId : aK,
                hard : aH < aE,
                circular : at
              };
              aD.depMs.push(aM);
              aD.depMsIndex[aK] = aM;
              aB(aK);
            }
          }
          else
          {
            aM = {
              absId : aK
            };
          }
          if(aH < aF)
          {
            aD.factoryDeps.push(aJ || aM);
          }
        }));
        aD.state = j;
        ak(aD.depMs, (function (aH) 
        {
          aa(aD.id, aH.absId);
        }));
        p(aD);
      }));
      b(az);
    }
    function aa(aA, az) 
    {
      function aB() 
      {
        ay(aA);
      }
      g(az, (function () 
      {
        var aC = s[aA];
        if(aC.depPMs[az])
        {
          ak(aC.depRs, (function (aD) 
          {
            if(aD.absId || aD.module !== az)
            {
              return;
            }
            aD.absId = ar(aD.id, aA);
            g(aD.absId, aB);
            b([aD.absId, ], null, aA);
          }));
        }
        aB();
      }));
    }
    var t = 0;
    var Z = 1;
    var ap = 2;
    function p(aC) 
    {
      var aE = aC.id;
      aC.invokeFactory = az;
      az();
      function aA() 
      {
        var aF = ap;
        ak(aC.depRs, (function (aG) 
        {
          if(! (aG.absId && ah(aG.absId)))
          {
            aF = t;
            return false;
          }
        }));
        if(aF !== ap)
        {
          return aF;
        }
        ak(aC.depMs, (function (aG) 
        {
          if(ah(aG.absId))
          {
            return;
          }
          if(aG.circular === at)
          {
            aG.circular = al(aE, aG.absId);
          }
          switch(aG.circular){
            case aq:
              if(aG.hard)
              {
                aF = Z;
              }
              break;

            case aj:
              aF = Z;
              break;

            case at:
              aF = t;
              return false;

            
          }
        }));
        return aF;
      }
      function az() 
      {
        if(aC.state >= u)
        {
          return;
        }
        var aF = aA();
        if(aF >= Z)
        {
          aB();
        }
        if(aF < ap)
        {
          return;
        }
        var aL = [];
        ak(aC.factoryDeps, (function (aM) 
        {
          aL.push(aM.absId);
        }));
        var aJ = ao(aL, {
          require : aC.require,
          exports : aC.exports,
          module : aC
        });
        try
{          var aI = aC.factory;
          var aH = typeof aI === "function" ? aI.apply(d, aJ) : aI;
          if(aH != null)
          {
            aC.exports = aH;
          }}
        catch(aK)
{          if(/^\[MODULE_MISS\]"([^"]+)/.test(aK.message))
          {
            var aG = aC.depMsIndex[RegExp.$1];
            aG && (aG.hard = 1);
            return;
          }
          throw aK;}

        aC.state = u;
        aC.invokeFactory = null;
        ad(aE);
      }
      var aD;
      function aB() 
      {
        if(! aD)
        {
          aD = 1;
          ak(aC.depMs, (function (aF) 
          {
            if(aF.circular === aq)
            {
              ay(aF.absId);
            }
          }));
        }
      }
    }
    function E(az) 
    {
      return s[az] && s[az].state >= j;
    }
    function ah(az) 
    {
      return s[az] && s[az].state >= u;
    }
    function S(aE, aA) 
    {
      var aC = s[aE];
      aA = aA || {
        
      };
      aA[aE] = 1;
      if(! aC || aC.state < u)
      {
        return false;
      }
      if(aC.state === i)
      {
        return true;
      }
      var aD = aC.depMs;
      var az = aD.length;
      while(az --)
      {
        var aB = aD[az].absId;
        if(aA[aB])
        {
          continue;
        }
        if(! S(aB, aA))
        {
          return false;
        }
      }
      aC.state = i;
      return true;
    }
    function ao(aA, aB) 
    {
      var az = [];
      ak(aA, (function (aC) 
      {
        az.push(aB[aC] || y(aC));
      }));
      return az;
    }
    var at = 0;
    var aj = 1;
    var aq = 2;
    function al(aE, aF, aA) 
    {
      if(! E(aF))
      {
        return at;
      }
      aA = aA || {
        
      };
      aA[aF] = 1;
      var aC = s[aF];
      if(aF === aE)
      {
        return aq;
      }
      var aG = aC && aC.depMs;
      if(aG)
      {
        var az = aG.length;
        while(az --)
        {
          var aB = aG[az].absId;
          if(aA[aB])
          {
            continue;
          }
          var aD = al(aE, aB, aA);
          switch(aD){
            case aq:
              

            case at:
              return aD;

            
          }
        }
      }
      return aj;
    }
    function ay(aA) 
    {
      var az = s[aA];
      if(az && az.invokeFactory)
      {
        az.invokeFactory();
      }
    }
    var R = {
      
    };
    function ad(aC) 
    {
      var aA = R[aC] || [];
      var az = aA.length;
      while(az --)
      {
        var aB = aA[az];
        aB && aB();
      }
      aA.length = 0;
      delete R[aC];
    }
    function g(aC, aA, aB) 
    {
      if(ah(aC))
      {
        aA(aC);
        return;
      }
      var az = R[aC];
      if(! az)
      {
        az = R[aC] = [];
      }
      aB ? az.unshift(aA) : az.push(aA);
    }
    function y(az) 
    {
      if(ah(az))
      {
        return s[az].exports;
      }
      return null;
    }
    var F = {
      require : k,
      exports : 1,
      module : 1
    };
    var a = [];
    function w(az) 
    {
      var aA = a.slice(0);
      a.length = 0;
      a = [];
      ak(aA, (function (aB) 
      {
        C(aB.id || az, aB.deps, aB.factory);
      }));
      au();
    }
    function b(aB, aD, az) 
    {
      if(typeof aB === "string")
      {
        if(! ah(aB))
        {
          throw new Error('[MODULE_MISS]"' + aB + '" is not exists!');
        }
        return y(aB);
      }
      var aC = 0;
      if(H(aB))
      {
        aA();
        ! aC && ak(aB, (function (aE) 
        {
          if(! F[aE])
          {
            g(aE, aA, 1);
            (aE.indexOf("!") > 0 ? I : l)(aE, az);
          }
        }));
      }
      function aA() 
      {
        if(! aC)
        {
          var aE = 1;
          ak(aB, (function (aF) 
          {
            if(! F[aF])
            {
              return (aE = S(aF));
            }
          }));
          if(aE)
          {
            aC = 1;
            (typeof aD === "function") && aD.apply(d, ao(aB, F));
          }
        }
      }
    }
    var V = {
      
    };
    function l(aA) 
    {
      if(V[aA] || s[aA])
      {
        return;
      }
      V[aA] = 1;
      var az = document.createElement("script");
      az.setAttribute("data-require-id", aA);
      az.src = N(aA + ".js");
      az.async = true;
      if(az.readyState)
      {
        az.onreadystatechange = aB;
      }
      else
      {
        az.onload = aB;
      }
      ax(az);
      function aB() 
      {
        var aC = az.readyState;
        if(typeof aC === "undefined" || /^(loaded|complete)$/.test(aC))
        {
          az.onload = az.onreadystatechange = null;
          az = null;
          w(aA);
        }
      }
    }
    function I(az, aB) 
    {
      if(s[az])
      {
        return;
      }
      var aE = ae(az);
      var aD = {
        id : az,
        state : j
      };
      s[az] = aD;
      function aA(aF) 
      {
        aD.state = i;
        aD.exports = aF || true;
        ad(az);
      }
      aA.fromText = (function (aG, aF) 
      {
        new Function(aF)();
        w(aG);
      });
      function aC(aF) 
      {
        var aG = aB ? s[aB].require : av;
        aF.load(aE.resource, aG, aA, an.call({
          id : az
        }));
      }
      b([aE.module, ], aC);
    }
    var r = {
      baseUrl : "./",
      paths : {
        
      },
      config : {
        
      },
      map : {
        
      },
      packages : [],
      waitSeconds : 0,
      urlArgs : {
        
      }
    };
    k.config = (function (aA) 
    {
      for(var aB in r)
      {
        if(aA.hasOwnProperty(aB))
        {
          var aD = aA[aB];
          var az = r[aB];
          if(aB === "urlArgs" && typeof aD === "string")
          {
            J = aD;
          }
          else
          {
            var aC = typeof az;
            if(aC === "string" || aC === "number")
            {
              r[aB] = aD;
            }
            else
            {
              if(H(az))
              {
                ak(aD, (function (aE) 
                {
                  az.push(aE);
                }));
              }
              else
              {
                for(var aB in aD)
                {
                  az[aB] = aD[aB];
                }
              }
            }
          }
        }
      }
      aw();
    });
    aw();
    var O;
    var L;
    var P;
    var J;
    var am;
    function aw() 
    {
      r.baseUrl = r.baseUrl.replace(/\/$/, "") + "/";
      var az = q();
      O = ac(r.paths);
      O.sort(az);
      P = ac(r.map);
      P.sort(az);
      ak(P, (function (aB) 
      {
        var aA = aB.k;
        aB.v = ac(aB.v);
        aB.v.sort(az);
        aB.reg = aA === "*" ? /^/ : ag(aA);
      }));
      L = [];
      ak(r.packages, (function (aA) 
      {
        var aB = aA;
        if(typeof aA === "string")
        {
          aB = {
            name : aA.split("/")[0],
            location : aA,
            main : "main"
          };
        }
        aB.location = aB.location || aB.name;
        aB.main = (aB.main || "main").replace(/\.js$/i, "");
        L.push(aB);
      }));
      L.sort(q("name"));
      am = ac(r.urlArgs);
      am.sort(az);
    }
    function N(az) 
    {
      var aD = /(\.[a-z0-9]+)$/i;
      var aI = /(\?[^#]*)$/;
      var aE = "";
      var aB = az;
      var aF = "";
      if(aI.test(az))
      {
        aF = RegExp.$1;
        az = az.replace(aI, "");
      }
      if(aD.test(az))
      {
        aE = RegExp.$1;
        aB = az.replace(aD, "");
      }
      var aA = aB;
      var aH;
      ak(O, (function (aK) 
      {
        var aJ = aK.k;
        if(ag(aJ).test(aB))
        {
          aA = aA.replace(aJ, aK.v);
          aH = 1;
          return false;
        }
      }));
      if(! aH)
      {
        ak(L, (function (aJ) 
        {
          var aK = aJ.name;
          if(ag(aK).test(aB))
          {
            aA = aA.replace(aK, aJ.location);
            return false;
          }
        }));
      }
      if(! /^([a-z]{2,10}:\/)?\//i.test(aA))
      {
        aA = r.baseUrl + aA;
      }
      aA += aE + aF;
      var aG;
      function aC(aJ) 
      {
        if(! aG)
        {
          aA += (aA.indexOf("?") > 0 ? "&" : "?") + aJ;
          aG = 1;
        }
      }
      ak(am, (function (aJ) 
      {
        if(ag(aJ.k).test(aB))
        {
          aC(aJ.v);
          return false;
        }
      }));
      J && aC(J);
      return aA;
    }
    function af(az) 
    {
      var aB = {
        
      };
      function aA(aC, aF) 
      {
        if(typeof aC === "string")
        {
          var aE = aB[aC];
          if(! aE)
          {
            aE = aB[aC] = b(ar(aC, az));
          }
          return aE;
        }
        else
        {
          if(H(aC))
          {
            var aD = [];
            ak(aC, (function (aH) 
            {
              var aG = ae(aH);
              if(aG.resource)
              {
                aD.push(ar(aG.module, az));
              }
            }));
            b(aD, (function () 
            {
              var aG = [];
              ak(aC, (function (aH) 
              {
                aG.push(ar(aH, az));
              }));
              b(aG, aF, az);
            }), 
            az);
          }
        }
      }
      aA.toUrl = (function (aC) 
      {
        return N(ar(aC, az));
      });
      return aA;
    }
    function ar(aE, az) 
    {
      if(! aE)
      {
        return "";
      }
      az = az || "";
      var aC = ae(aE);
      if(! aC)
      {
        return aE;
      }
      var aD = aC.resource;
      var aB = m(aC.module, az);
      ak(L, (function (aF) 
      {
        var aG = aF.name;
        if(aG === aB)
        {
          aB = aG + "/" + aF.main;
          return false;
        }
      }));
      ak(P, (function (aF) 
      {
        if(aF.reg.test(az))
        {
          ak(aF.v, (function (aI) 
          {
            var aG = aI.k;
            var aH = ag(aG);
            if(aH.test(aB))
            {
              aB = aB.replace(aG, aI.v);
              return false;
            }
          }));
          return false;
        }
      }));
      if(aD)
      {
        var aA = y(aB);
        aD = aA.normalize ? aA.normalize(aD, (function (aF) 
        {
          return ar(aF, az);
        })) : ar(aD, az);
        aB += "!" + aD;
      }
      return aB;
    }
    function m(aA, aH) 
    {
      if(aA.indexOf(".") === 0)
      {
        var aI = aH.split("/");
        var aG = aA.split("/");
        var az = aI.length - 1;
        var aB = aG.length;
        var aE = 0;
        var aC = 0;
        pathLoop : for(var aF = 0;aF < aB;aF ++)
        {
          var aD = aG[aF];
          switch(aD){
            case "..":
              if(aE < az)
              {
                aE ++;
                aC ++;
              }
              else
              {
                break pathLoop;
              }
              break;

            case ".":
              aC ++;
              break;

            default:
              break pathLoop;
            
          }
        }
        aI.length = az - aE;
        aG = aG.slice(aC);
        return aI.concat(aG).join("/");
      }
      return aA;
    }
    function X(aB) 
    {
      var aA = [];
      function az(aC) 
      {
        if(aC.indexOf(".") === 0)
        {
          aA.push(aC);
        }
      }
      if(typeof aB === "string")
      {
        az(aB);
      }
      else
      {
        ak(aB, (function (aC) 
        {
          az(aC);
        }));
      }
      if(aA.length > 0)
      {
        throw new Error("[REQUIRE_FATAL]Relative ID is not allowed in global require: " + aA.join(", "));
      }
    }
    var o = /^[-_a-z0-9\.]+(\/[-_a-z0-9\.]+)*$/i;
    function ae(aA) 
    {
      var az = aA.split("!");
      if(o.test(az[0]))
      {
        return {
          module : az[0],
          resource : az[1]
        };
      }
      return null;
    }
    function ac(aB) 
    {
      var aA = [];
      for(var az in aB)
      {
        if(aB.hasOwnProperty(az))
        {
          aA.push({
            k : az,
            v : aB[az]
          });
        }
      }
      return aA;
    }
    var W;
    var z;
    function x() 
    {
      if(W)
      {
        return W;
      }
      else
      {
        if(z && z.readyState === "interactive")
        {
          return z;
        }
        else
        {
          var az = document.getElementsByTagName("script");
          var aB = az.length;
          while(aB --)
          {
            var aA = az[aB];
            if(aA.readyState === "interactive")
            {
              z = aA;
              return aA;
            }
          }
        }
      }
    }
    var ab = document.getElementsByTagName("head")[0];
    var f = document.getElementsByTagName("base")[0];
    if(f)
    {
      ab = f.parentNode;
    }
    function ax(az) 
    {
      W = az;
      f ? ab.insertBefore(az, f) : ab.appendChild(az);
      W = null;
    }
    function ag(az) 
    {
      return new RegExp("^" + az + "(/|$)");
    }
    function H(az) 
    {
      return az instanceof Array;
    }
    function ak(aC, aB) 
    {
      if(H(aC))
      {
        for(var aA = 0, az = aC.length;aA < az;aA ++)
        {
          if(aB(aC[aA], aA) === false)
          {
            break;
          }
        }
      }
    }
    function q(az) 
    {
      az = az || "k";
      return (function (aB, aA) 
      {
        var aD = aB[az];
        var aC = aA[az];
        if(aC === "*")
        {
          return - 1;
        }
        if(aD === "*")
        {
          return 1;
        }
        return aC.length - aD.length;
      });
    }
    d.define = Y;
    d.require = k;
  })(this);
  require.config({
    baseUrl : "http://s1.bdstatic.com/r/www/cache/biz",
    packages : [{
      name : "ecma",
      location : "http://ecma.bdimg.com/public01"
    }, ],
    paths : {
      aladdin : "http://s1.bdstatic.com/r/www/aladdin",
      ui : "http://s1.bdstatic.com/r/www/cache/amd/ui"
    }
  });
  function TagQ(a, b) 
  {
    return b.getElementsByTagName(a);
  }
  function h(b) 
  {
    b.style.behavior = "url(#default#homepage)";
    b.setHomePage(bds.comm.domain);
    var a = window["BD_PS_C" + (new Date()).getTime()] = new Image();
    a.src = bds.comm.ubsurl + "?fm=hp&tn=" + bds.comm.tn + "&t=" + new Date().getTime();
  }
  function setHeadUrl(b) 
  {
    var d = G("kw").value;
    d = encodeURIComponent(d);
    var a = b.href;
    a = a.replace(new RegExp("(" + b.getAttribute("wdfield") + "=)[^&]*"), 
    "\x241" + d + "&ie=utf-8");
    b.href = a;
  }
  bds.util.addStyle = (function (b) 
  {
    if(isIE)
    {
      var d = document.createStyleSheet();
      d.cssText = b;
    }
    else
    {
      var a = document.createElement("style");
      a.type = "text/css";
      a.appendChild(document.createTextNode(b));
      document.getElementsByTagName("HEAD")[0].appendChild(a);
    }
  });
  bds.util.getContentRightHeight = (function () 
  {
    return ($("#content_right").get(0)) ? $("#content_right").get(0).offsetHeight : 0;
  });
  bds.util.getContentLeftHeight = (function () 
  {
    return ($("#content_left").get(0)) ? $("#content_left").get(0).offsetHeight : 0;
  });
  A.uiPrefix = "//www.baidu.com/cache/aladdin/ui/";
  (function () 
  {
    var a = window.bds.aladdin;
    if(typeof (baidu) != "undefined")
    {
      a.baidu = baidu;
    }
    var i = a._Aladdin.fixs = [];
    var f = {
      
    }, d = 0;
    var g = (function (k) 
    {
      k.ajaxId = ++ d;
      f[k.ajaxId] = k;
    });
    var j = (function (k) 
    {
      delete f[k.ajaxId];
    });
    var b = (function (k) 
    {
      if(! k.ajaxId)
      {
        return false;
      }
      return f.hasOwnProperty(k.ajaxId);
    });
    a.addDisposeHandler({
      obj : f,
      fn : (function () 
      {
        for(var k in f)
        {
          if(f.hasOwnProperty(k))
          {
            delete f[k];
          }
        }
      })
    });
    $.extend(a._Aladdin.prototype, {
      q : (function (l, k) 
      {
        k = k || "";
        return $(this.container).find(k + "." + l).get();
      }),
      qq : (function (l, k) 
      {
        return this.q(l, k)[0];
      }),
      find : (function (k) 
      {
        return window.jQuery(k, this.container);
      }),
      ready : (function () 
      {
        $(document).ready.apply(this, arguments);
      }),
      ajax : (function (w, z, n) 
      {
        var x = a.AJAX;
        var B = + new Date();
        var m = n.params || {
          
        };
        var o = {
          query : w,
          co : n.co || "",
          resource_id : z,
          t : B
        };
        $.extend(o, x.PARAMS);
        $.extend(o, m);
        var w = $.param(o);
        var l = x.API_URL + "?" + w;
        var u = (function () 
        {
          var p = new Image();
          p.src = $.format(x.ERR_URL, {
            url : l
          });
          a.logs.push(p);
        });
        var s = new Date().getTime();
        var r = (function (p) 
        {
          var t = new Date().getTime() - s;
          var C = {
            fm : "opendataajax",
            srcid : z,
            time : t,
            status : p
          };
          ns_c(C);
        });
        var y = (function (p) 
        {
          if(! b(y))
          {
            return;
          }
          k();
          if(p.status == 0)
          {
            n.success(p.data);
          }
          else
          {
            n.error && n.error(p.status);
            u();
          }
          r(0);
        });
        var q = (function () 
        {
          if(! b(q))
          {
            return;
          }
          k();
          n.timeout && n.timeout();
          u();
          r(1);
        });
        var k = (function () 
        {
          j(y);
          j(q);
        });
        g(y);
        g(q);
        $.ajax({
          url : l,
          scriptCharset : x.PARAMS.oe,
          timeout : x.TIMEOUT,
          dataType : "jsonp",
          jsonp : "cb",
          success : y,
          error : q
        });
      })
    });
    a.AJAX = {
      API_URL : "http://opendata.baidu.com/api.php",
      ERR_URL : "http://open.baidu.com/stat/al_e.gif?ajax_err_url=#{url}",
      PARAMS : {
        ie : "utf8",
        oe : "gbk",
        cb : "op_aladdin_callback",
        format : "json",
        tn : "baidu"
      },
      TIMEOUT : 6000
    };
    i.push((function (k) 
    {
      var l = /msie (\d+\.\d+)/i.test(navigator.userAgent) ? (document.documentMode || + RegExp["\x241"]) : undefined;
      if(l)
      {
        var m = document.charset;
        $.each(k.container.getElementsByTagName("form"), (function (o, p) 
        {
          var q = (function () 
          {
            var r = p.acceptCharset;
            if(r && r.toString().toUpperCase() != "UNKNOWN" && r != document.charset)
            {
              document.charset = r;
              setTimeout((function () 
              {
                document.charset = m;
              }), 
              1000);
            }
          });
          $(p).on("submit", q);
          var n = p.submit;
          p.submit = (function () 
          {
            q();
            try
{              n.call(p);}
            catch(r)
{              n();}

          });
        }));
      }
    }));
  })();
  (function () 
  {
    var g = window.A, b = {
      
    }, j = {
      
    }, 
    s = {
      
    }, 
    p = document, 
    n = p.getElementsByTagName("head")[0], 
    i = false, 
    f = ["baidu", ], 
    q = false, 
    d = g.baidu, 
    m = (function () 
    {
      
    });
    var l = {
      "*" : (function (t, u) 
      {
        return u + "?v=2014010100";
      }),
      scrollbarv : (function (t, u) 
      {
        return u + "?v=20140121";
      }),
      likeshare4 : (function (t, u) 
      {
        return u + "?v=20140116";
      }),
      mboxsingleton : (function (t, u) 
      {
        return u + "?v=20140116";
      }),
      sms : (function (t, u) 
      {
        return u + "?v=20140507";
      }),
      tab : (function (t, u) 
      {
        return u + "?v=20140117";
      }),
      tabs : (function (t, u) 
      {
        return u + "?v=20140116";
      }),
      musicplayer : (function (t, u) 
      {
        return u + "?v=20140123";
      }),
      slider : (function (t, u) 
      {
        return u + "?v=20140123";
      }),
      suggestion : (function (t, u) 
      {
        return u + "?v=20140123";
      }),
      tabs5 : (function (t, u) 
      {
        return u + "?v=20140117";
      }),
      tabx : (function (t, u) 
      {
        return u + "?v=20140117";
      }),
      dropdown1 : (function (t, u) 
      {
        return u + "?v=20140117";
      }),
      dropdown21 : (function (t, u) 
      {
        return u + "?v=20140227";
      }),
      advert : (function (t, u) 
      {
        return u + "?v=20140523";
      }),
      honourCard : (function (t, u) 
      {
        return u + "?v=20140711";
      }),
      share : (function (t, u) 
      {
        return u + "?v=20140319";
      }),
      qHotCity : (function (t, u) 
      {
        return u + "?v=20140806";
      }),
      ALD_feedback : (function (t, u) 
      {
        return u + "?v=20140818";
      })
    };
    $(document).ready((function () 
    {
      i = true;
    }));
    g.addDisposeHandler({
      obj : g,
      fn : (function () 
      {
        for(var t in s)
        {
          if(s.hasOwnProperty(t))
          {
            var u = s[t];
            while(u.length)
            {
              u.pop();
            }
          }
        }
      })
    });
    function a(u, z) 
    {
      var x = typeof u === "string" ? u.split(/\s*,\s*/) : u;
      if(x.length > 1)
      {
        if(z)
        {
          a(x.shift(), (function () 
          {
            if(x.length > 0)
            {
              a(x, z);
            }
          }));
        }
        else
        {
          while(x.length)
          {
            a(x.shift());
          }
        }
        return;
      }
      u = x[0];
      if(u === "jquery" && window.jQuery)
      {
        ! g.ui.jquery && (g.ui.jquery = window.jQuery);
        z && z();
        return;
      }
      var y = u.replace(/\./g, "/");
      var t = u.replace(/^[\s\S]*\./, "");
      var w = g.uiPrefix + y + "/" + t;
      if(y.search("style/") == 0)
      {
        o(w + ".css", z);
      }
      else
      {
        w += ".js";
        if(l.hasOwnProperty(u))
        {
          if(typeof l[u] == "function")
          {
            w = l[u](u, w);
          }
          else
          {
            if(typeof l[u] == "string")
            {
              w = l[u];
            }
          }
        }
        else
        {
          if(l.hasOwnProperty("*"))
          {
            w = l["*"](u, w);
          }
        }
        if(z)
        {
          r(w, z);
        }
        else
        {
          k(w);
        }
      }
    }
    a.cache = b;
    function o(u, w) 
    {
      w = w || m;
      if(u in b)
      {
        w();
        return;
      }
      var t = p.createElement("link");
      t.rel = "stylesheet";
      t.type = "text/css";
      t.href = u;
      t.setAttribute("data-for", "A.ui");
      n.appendChild(t);
      b[u] = 1;
      w();
    }
    function k(t) 
    {
      if(i)
      {
        r(t, m);
        return;
      }
      if(t in b)
      {
        return;
      }
      p.write('<script charset="gb2312" type="text/javascript" src="' + t + '"><\/script>');
      b[t] = 1;
    }
    function r(w, x) 
    {
      x = x || m;
      if(w in b)
      {
        x();
        return;
      }
      if(w in j)
      {
        s[w].push(x);
        return;
      }
      j[w] = 1;
      var u = s[w] = [x, ];
      var t = p.createElement("script");
      t.type = "text/javascript";
      t.charset = "gb2312";
      t.onload = t.onreadystatechange = (function () 
      {
        if((! this.readyState || this.readyState === "loaded" || this.readyState === "complete"))
        {
          while(u.length)
          {
            u.shift()();
          }
          delete j[w];
          b[w] = 1;
          t.onload = t.onreadystatechange = null;
        }
      });
      t.src = w;
      t.setAttribute("data-for", "A.ui");
      n.insertBefore(t, n.firstChild);
    }
    g.uicss = (function (t) 
    {
      o(g.uiPrefix + t);
    });
    g.uijs = (function (t, u) 
    {
      r(g.uiPrefix + t, u);
    });
    g.uijsPathMap = (function (t) 
    {
      $.extend(l, t);
    });
    g.use = a;
    g.ui = g.ui || {
      
    };
    g.addCssText = (function (x) 
    {
      var B = "opui-style-tag-id", u = "data-for", t = "A.ui", 
      w = document.getElementById(B);
      if(! w)
      {
        w = document.createElement("style");
        w.setAttribute("type", "text/css");
        w.setAttribute(u, t);
        w.id = B;
        document.getElementsByTagName("head")[0].appendChild(w);
      }
      try
{        var y = document.createTextNode(x);
        w.appendChild(y);}
      catch(z)
{        if(w.styleSheet)
        {
          w.styleSheet.cssText += x;
        }}

    });
    $(window).on("swap_end", (function () 
    {
      var u = /MSIE\s?6/.test(window.navigator.userAgent);
      var t = (function (w, y, x) 
      {
        $(w).each((function (C, B) 
        {
          var D = $(B), z = new Image(), E = D.attr("src");
          z.onload = (function () 
          {
            var K = y, H = x, J = this.width, F = this.height, I = (J / F) / (K / H);
            if(I > 1)
            {
              if(J > K)
              {
                J = K;
              }
              else
              {
                J = "auto";
              }
              F = "auto";
            }
            else
            {
              if(F > H)
              {
                F = H;
              }
              else
              {
                F = "auto";
              }
              J = "auto";
            }
            D.css({
              height : F,
              width : J
            });
            z.onload = null;
            z = null;
          });
          z.src = E;
        }));
      });
      if(u)
      {
        t("img.result-left-img", 98, 121);
      }
      $(".c-feedback").bind("click", (function () 
      {
        var w = this;
        g.use("ALD_feedback", (function () 
        {
          var D = "right", x, z, C = $(w);
          if(C.parents("#content_left").length)
          {
            D = "left";
            z = C.parents(".result-op"), x = z.attr("srcid");
          }
          else
          {
            if(C.parents("#content_right").length)
            {
              z = C.parents("#con-ar");
            }
          }
          var y = {
            query : bds.comm.query,
            srcid : x,
            target : z,
            username : bds.comm.username,
            flag : D
          };
          var B = g.ui.ALD_feedback(y);
          g.addDisposeHandler({
            obj : B,
            fn : B.dispose
          });
        }));
      }));
    }));
  })();
  bds.event = new (function () 
  {
    var i = {
      
    };
    function d(j, l) 
    {
      if(typeof l == "function" || l instanceof Function)
      {
        var k = a(j);
        i[k.name] = i[k.name] || [];
        i[k.name].push({
          prod : k.prod,
          callback : l
        });
      }
    }
    function g(l, o) 
    {
      var n = a(l), k = i[n.name] || [], j = 0;
      while(j < k.length)
      {
        var m = k[j];
        if(o === m.callback && f(n.prod, m.prod))
        {
          k.splice(j, 1);
        }
        else
        {
          j ++;
        }
      }
    }
    function b(j, m) 
    {
      var q = a(j), k = i[q.name] || [], r = {
        data : m,
        eventId : j
      };
      for(var n = 0, o = k.length;n < o;n ++)
      {
        var l = k[n];
        try
{          if(f(l.prod, q.prod))
          {
            l.callback.call(this, r);
          }}
        catch(p)
{          }

      }
    }
    function f(j, k) 
    {
      return new RegExp("^" + j.replace(/\./g, "\\.").replace(/\*/g, ".+") + "$").test(k);
    }
    function a(j) 
    {
      var k = j.match(/(.+)\.(.+)/);
      if(k && k[2])
      {
        return {
          prod : k[1],
          name : k[2]
        };
      }
      else
      {
        return {
          
        };
      }
    }
    this.on = d;
    this.off = g;
    this.trigger = b;
    this.events = i;
  });
  var baidu = A.baidu, T = baidu;
  (function (A) 
  {
    var baidu = window.baidu;
    var LOG_CLASS = ["TITLE", "LINK", "IMG", "BTN", "INPUT", "OTHERS", ];
    var C_LOG_CLASS = ["btn", ];
    var contentLeft, contentRight, contentTop;
    function clickDebug(e) 
    {
      
    }
    window.initResultClickLog = (function () 
    {
      contentLeft = $("#content_left").get(0);
      contentRight = $("#con-ar").get(0);
      contentTop = $("#con-at").get(0);
      if(A.has)
      {
        var aladdin_tables = $(".result-op").get(), srcid;
        $.each(aladdin_tables, (function (i, v) 
        {
          if(srcid = v.getAttribute("srcid"))
          {
            A.ids.push([v.id, srcid, ]);
          }
        }));
      }
      bindP5();
    });
    $(document).ready((function () 
    {
      bindLogEvent();
    }));
    function bindP5() 
    {
      var item, index = (bds.comm.pageNum - 1) * bds.comm.pageSize + 1, 
      leftItems = (contentLeft && contentLeft.children) || [], 
      rightItems = (contentRight && contentRight.children) || [], 
      topItems = (contentTop && contentTop.children) || [], 
      isResult = (function (o) 
      {
        return (o.nodeType == 1 && o.className && /\bresult(\-op)?\b/.test(o.className));
      }), 
      isFrame = (function (o) 
      {
        return (o.nodeType == 1 && o.className && /\bc\-frame\b/.test(o.className));
      }), 
      setClickData = (function (wrap, data) 
      {
        var sData = wrap.getAttribute("data-click") || "{}";
        try
{          var oData = eval("(" + sData + ")");
          sData = $.stringify($.extend(oData, data));
          wrap.setAttribute("data-click", sData);}
        catch(e)
{          clickDebug(e);}

      }), 
      bindP5ClickData = (function (items) 
      {
        for(var i = 0, l = items.length;i < l;i ++)
        {
          item = items[i];
          if(isResult(item))
          {
            setClickData(item, {
              p5 : index ++
            });
          }
          else
          {
            if(isFrame(item))
            {
              try
{                var frameItems = item.children[0].children;
                for(var j = 0, lj = frameItems.length;j < lj;j ++)
                {
                  var frameItem = frameItems[j];
                  if(isResult(frameItem))
                  {
                    setClickData(frameItem, {
                      p5 : index ++
                    });
                  }
                }}
              catch(e)
{                clickDebug(e);}

            }
          }
        }
        index = (bds.comm.pageNum - 1) * bds.comm.pageSize + 1;
      });
      bindP5ClickData(leftItems);
      bindP5ClickData(rightItems);
      bindP5ClickData(topItems);
    }
    function getXPath(node, wrap, path) 
    {
      path = path || [];
      wrap = wrap || document;
      if(node === wrap)
      {
        return path;
      }
      if(node.parentNode !== wrap)
      {
        path = getXPath(node.parentNode, wrap, path);
      }
      if(node.previousSibling)
      {
        var count = 1;
        var sibling = node.previousSibling;
        do
        {
          if(sibling.nodeType == 1 && sibling.nodeName == node.nodeName)
          {
            count ++;
          }
          sibling = sibling.previousSibling;
        }while(sibling);
      }
      if(node.nodeType == 1)
      {
        path.push(node.nodeName.toLowerCase() + (count > 1 ? count : ""));
      }
      return path;
    }
    function bindLogEvent() 
    {
      $body = $("body");
      $body.on("mousedown", (function (e) 
      {
        var e = window.event || e, t = e.srcElement || e.target, 
        $t = $(t);
        try
{          var $parent = $t, fm, wrap;
          while($parent.length && ! ($parent.hasClass("result") || $parent.hasClass("result-op") || $parent.hasClass("xpath-log")))
          {
            $parent = $parent.parent();
          }
          if(! $parent.length)
          {
            return;
          }
          if($parent.hasClass("result-op"))
          {
            fm = "alop";
          }
          else
          {
            if($parent.hasClass("result"))
            {
              fm = "as";
            }
          }
          wrap = $parent.get(0);
          var xpath = getXPath(t, wrap);
          if(check(xpath, t, wrap))
          {
            log(xpath, t, wrap, fm);
          }}
        catch(e)
{          clickDebug(e);}

      }));
    }
    function getType(xpath, t, wrap) 
    {
      var node = t, cs = LOG_CLASS, cl = cs.length, clc = C_LOG_CLASS, 
      clcl = clc.length, 
      xstr = xpath.join(" "), 
      i = 0;
      while(node !== wrap)
      {
        for(i = 0;i < cl;i ++)
        {
          if($(node).hasClass("OP_LOG_" + cs[i]))
          {
            return cs[i].toLowerCase();
          }
        }
        for(i = 0;i < clcl;i ++)
        {
          if($(node).hasClass("c-" + clc[i]))
          {
            return clc[i];
          }
        }
        node = node.parentNode;
      }
      if(/\bh3\d*\b/.test(xstr))
      {
        return "title";
      }
      if(/\ba\d*\b/.test(xstr))
      {
        if(/\bimg\d*\b/.test(xstr))
        {
          return "img";
        }
        return "link";
      }
      if(/\b(input|select|button|textarea|datalist)\d*\b/.test(xstr))
      {
        return "input";
      }
      if(/\blabel\d*\b/.test(xstr) && t.getElementsByTagName("input").length > 0)
      {
        return "input";
      }
      return "";
    }
    function check(xpath, t, wrap) 
    {
      if(A.LOGTOOL)
      {
        A.LOGTOOL.call(t, xpath, t, wrap);
        return false;
      }
      return true;
    }
    function log(xpath, t, wrap, fm) 
    {
      if(t.getAttribute("data-nolog") != null)
      {
        return;
      }
      var type = getType(xpath, t, wrap);
      if(! type)
      {
        return false;
      }
      if(type == "title" && ! /\ba\d*\b/.test(xpath))
      {
        return false;
      }
      var nourl = "http://nourl.ubs.baidu.com";
      var mu = wrap.getAttribute("mu") || nourl;
      if(mu == nourl)
      {
        var h3 = wrap.getElementsByTagName("h3");
        if(h3 && h3[0])
        {
          var a = h3[0].getElementsByTagName("a");
          mu = (a && a[0]) ? a[0].href : mu;
        }
      }
      var l = xpath.length, url, p = t, srcid = wrap.getAttribute("srcid");
      var title = "";
      var tag = t.nodeType == 1 ? t.tagName.toLowerCase() : "";
      if(type == "input")
      {
        if(/input|textarea/.test(tag))
        {
          title = t.value;
          if(t.type && t.type.toLowerCase() == "password")
          {
            title = "";
          }
        }
        else
        {
          if(/select|datalist/.test(tag))
          {
            if(t.children.length > 0)
            {
              var index = t.selectedIndex || 0;
              title = t.children[index > - 1 ? index : 0].innerHTML;
            }
          }
          else
          {
            title = t.innerHTML || t.value || "";
          }
        }
      }
      else
      {
        if(tag == "img")
        {
          title = t.title;
        }
        if(! title)
        {
          while(l > 0)
          {
            l --;
            if(/^a\d*\b/.test(xpath[l]))
            {
              url = p.href;
              title = p.innerHTML;
              if(p.getAttribute("data-nolog") != null)
              {
                return;
              }
              break;
            }
            else
            {
              if(p.className && (/OP_LOG_/.test(p.className)))
              {
                title = p.innerHTML;
                break;
              }
              p = p.parentNode;
            }
          }
        }
      }
      title = $.trim(title);
      if(! url || url.slice(- 1) === "#" || ! (/^http/.test(url)))
      {
        url = mu;
      }
      var data = {
        rsv_xpath : xpath.join("-") + "(" + type + ")",
        title : title,
        url : url,
        rsv_height : wrap.offsetHeight,
        rsv_width : wrap.offsetWidth,
        rsv_tpl : wrap.getAttribute("tpl")
      };
      var rewritedatakey = {
        url : 1,
        title : 1
      };
      if(wrap.id && wrap.id.match(/^\d+$/))
      {
        data.p1 = wrap.id;
      }
      if(srcid)
      {
        data.rsv_srcid = srcid;
      }
      var ext_data, attr, is_fm_null;
      p = t;
      do
      {
        if(p.getAttribute("data-nolog") != null)
        {
          return;
        }
        if(ext_data = p.getAttribute("data-click"))
        {
          try
{            ext_data = (new Function("return " + ext_data))();
            for(attr in ext_data)
            {
              if(attr == "fm" && ext_data.fm === null)
              {
                is_fm_null = true;
              }
              if(ext_data.hasOwnProperty(attr) && ((typeof data[attr] == "undefined") || rewritedatakey[attr]))
              {
                data[attr] = ext_data[attr];
              }
            }}
          catch(e)
{            clickDebug(e);}

        }
        p = p.parentNode;
      }while(p && p !== wrap.parentNode);
      for(var i in data)
      {
        if(data[i] === null)
        {
          delete data[i];
        }
      }
      if(type == "title")
      {
        if("mu" in data)
        {
          delete data.mu;
        }
      }
      else
      {
        if(! data.mu)
        {
          data.mu = mu;
        }
      }
      if(is_fm_null)
      {
        if("fm" in data)
        {
          delete data.fm;
        }
      }
      else
      {
        if(type == "input")
        {
          data.fm = "beha";
          data.url = nourl;
        }
        if(! data.fm)
        {
          data.fm = fm;
        }
        if(! data.fm)
        {
          return;
        }
      }
      window.c(data);
    }
  })(window.bds.aladdin);
  for(ai in al_arr)
  {
    al_arr[ai]();
  }
  $(document).ready((function () 
  {
    var a;
    $(document).on("click", "h3.t>a", (function (f) 
    {
      f = window.event || f;
      var b = $("#wrapper_wrapper"), d = $(this).parent().nextAll(".c-recommend");
      if(! f.ctrlKey && d.length && d.css("display") === "none")
      {
        a = setTimeout((function () 
        {
          b.find(".c-recommend").hide();
          d.show();
        }), 
        150);
      }
    }));
    $(window).on("swap_begin", (function () 
    {
      this.clearTimeout(a);
    }));
  }));
  window.onunload = (function () 
  {
    
  });
  function addEV(d, b, a) 
  {
    if(window.attachEvent)
    {
      d.attachEvent("on" + b, a);
    }
    else
    {
      if(window.addEventListener)
      {
        d.addEventListener(b, a, false);
      }
    }
  }
  bds.se.openime = (function (a) 
  {
    if(! window.bdime)
    {
      $.ajax({
        cache : true,
        dataType : "script",
        url : "http://s1.bdstatic.com/r/www/cache/static/ime/js/openime_async_3f34411d.js",
        success : (function () 
        {
          if(a)
          {
            openIme.set("py", true);
          }
        })
      });
    }
    else
    {
      openIme.set("py", true);
    }
  });
  if(/\bbdime=[12]/.test(document.cookie))
  {
    bds.se.openime(false);
  }
  else
  {
    $((function () 
    {
      if(bds.comm.supportis)
      {
        $("<a href=\"http://www.baidu.com/search/is/index.html\" target=\"_blank\"  onmousedown=\"return ns_c({'fm':'tab','tab':'jsjd'})\" id=\"about_is\"><i></i>了解新版</a>").insertAfter("#form .s_btn_wr");
      }
    }));
  }
  var bds = bds || {
    
  };
  bds.se = bds.se || {
    
  };
  bds.se.tip = bds.se.tip || {
    
  };
  bds.comm.tipZIndex = 220;
  bds.comm.tips = [];
  bds.se.tip = (function (a) 
  {
    this.init = (function () 
    {
      this.op = {
        target : a.target || {
          
        },
        mode : a.mode || "over",
        title : a.title || null,
        content : a.content || null,
        uncontrolled : (a.uncontrolled) ? true : false,
        arrow : {
          has : 1,
          offset : 10
        },
        close : a.close || 0,
        align : a.align || "left",
        offset : {
          x : 10,
          y : 20
        },
        arrowSize : 16
      };
      if(a.arrow)
      {
        this.op.arrow.has = (a.arrow.has == 0) ? 0 : 1;
        this.op.arrow.offset = (a.arrow.offset >= 0) ? a.arrow.offset : 10;
      }
      if(a.offset)
      {
        this.op.offset.x = (a.offset.x || a.offset.x == 0) ? a.offset.x : 10;
        this.op.offset.y = (a.offset.y || a.offset.y == 0) ? a.offset.y : 20;
      }
      this.ext = a.ext || {
        
      };
      this.dom = $("<div>", {
        "class" : "c-tip-con"
      });
      this.visible = false;
      this.rendered = false;
      this.isAuto = (this.op.align === "auto") ? true : false;
      this.bindEvent();
    });
    this.render = (function () 
    {
      if(this.op.close)
      {
        this.enableCloseIcon();
      }
      if(this.op.title)
      {
        this.setTitle(this.op.title);
      }
      if(this.op.content)
      {
        this.setContent(this.op.content);
      }
      if(this.op.arrow.has)
      {
        this.enableArrow();
      }
      $("#c-tips-container").append(this.dom);
    });
    this.bindEvent = (function () 
    {
      this.delay = {
        overIcon : null,
        outIcon : null,
        overDom : null,
        outDom : null
      };
      if(this.op.mode == "over")
      {
        var b = this;
        $(b.op.target).on("mouseenter", (function () 
        {
          window.clearTimeout(b.delay.outIcon);
          window.clearTimeout(b.delay.outDom);
          b.delay.overIcon = setTimeout((function () 
          {
            b.show();
          }), 
          200);
        }));
        b.dom.on("mouseenter", (function () 
        {
          window.clearTimeout(b.delay.outIcon);
          window.clearTimeout(b.delay.outDom);
          b.delay.overDom = setTimeout((function () 
          {
            b.show();
          }), 
          200);
        }));
        $(b.op.target).on("mouseleave", (function () 
        {
          window.clearTimeout(b.delay.overIcon);
          window.clearTimeout(b.delay.overDom);
          b.delay.outIcon = setTimeout((function () 
          {
            b.hide();
          }), 
          200);
        }));
        b.dom.on("mouseleave", (function () 
        {
          window.clearTimeout(b.delay.overIcon);
          window.clearTimeout(b.delay.overDom);
          b.delay.outIcon = setTimeout((function () 
          {
            b.hide();
          }), 
          200);
        }));
      }
      else
      {
        if(this.op.mode == "none")
        {
          var b = this;
          b.show();
        }
      }
    });
    this.enableArrow = (function () 
    {
      var b = $("<div>", {
        "class" : "c-tip-arrow"
      }).html("<em></em><ins></ins>").appendTo(this.dom);
      this.arrow = b;
    });
    this.enableCloseIcon = (function () 
    {
      var d = this;
      var b = $("<div>", {
        "class" : "c-tip-close"
      }).html("<i class='c-icon c-icon-close'></i>").appendTo(this.dom).click((function () 
      {
        d.hide();
      }));
      this.close = b;
    });
    this.setTitle = (function (b) 
    {
      if(b.nodeType)
      {
        var d = $("<h3>", {
          "class" : "c-tip-title"
        }).append(b).appendTo(this.dom);
      }
      else
      {
        var d = $("<h3>", {
          "class" : "c-tip-title"
        }).html(b).appendTo(this.dom);
      }
      this.title = d;
    });
    this.setContent = (function (d) 
    {
      var b = $("<div>").html(d).appendTo(this.dom);
      this.content = b;
    });
    this.setArrow = (function (b) 
    {
      if(b)
      {
        if(b.offset >= 0)
        {
          this.op.arrow.offset = b.offset;
        }
      }
      if(this.op.arrow.has && this.arrow)
      {
        switch(this.op.align){
          case "left":
            this.arrow.css({
              left : this.op.arrow.offset + "px"
            });
            break;

          case "right":
            this.arrow.css({
              right : this.op.arrow.offset + 16 + "px"
            });
            break;

          default:
            break;
          
        }
      }
    });
    this.setOffset = (function (b) 
    {
      if(b)
      {
        this.op.offset.x = (b.x || b.x == 0) ? b.x : this.op.offset.x;
        this.op.offset.y = (b.y || b.y == 0) ? b.y : this.op.offset.y;
      }
      switch(this.op.align){
        case "left":
          var d = $(this.getTarget()).offset();
          this.getDom().css({
            top : d.top + this.op.offset.y + "px",
            left : d.left - this.op.offset.x + "px"
          });
          break;

        case "right":
          var d = $(this.getTarget()).offset();
          this.getDom().css({
            top : d.top + this.op.offset.y + "px",
            left : d.left + this.op.offset.x + $(this.getTarget()).width() - this.getDom().width() + "px"
          });
          break;

        default:
          break;
        
      }
    });
    this.autoOffset = (function (o) 
    {
      var d = {
        w : this.dom.outerWidth(),
        h : this.dom.outerHeight()
      }, 
      m = $(this.getTarget()), 
      n = m.offset(), 
      i = {
        w : m.outerWidth(),
        h : m.outerHeight()
      }, 
      l = $(window), 
      f = l.scrollTop(), 
      k = {
        w : l.width(),
        h : l.height()
      }, 
      b = {
        left : 0,
        top : 0
      }, 
      j = {
        
      }, 
      g;
      if((k.h + f - i.h - n.top) > d.h)
      {
        b.top = i.h + n.top + this.op.arrowSize / 2;
        this.arrow.removeClass("c-tip-arrow-down");
      }
      else
      {
        if(n.top - f > d.h)
        {
          b.top = n.top - d.h - this.op.arrowSize / 2;
          this.arrow.addClass("c-tip-arrow-down");
        }
        else
        {
          b.top = i.h + n.top + this.op.arrowSize / 2;
          this.arrow.removeClass("c-tip-arrow-down");
        }
      }
      g = n.left + i.w / 2 - this.op.arrow.offset - this.op.arrowSize / 2;
      b.left = g;
      if(b.left > 0 && (b.left + d.w) > k.w)
      {
        b.left = n.left + i.w / 2 - d.w + this.op.arrow.offset + this.op.arrowSize / 2;
        j.right = this.op.arrow.offset + this.op.arrowSize;
        j.left = "auto";
        if(b.left < 0)
        {
          b.left = g;
          j.left = this.op.arrow.offset;
          j.right = "auto";
        }
      }
      else
      {
        j.left = this.op.arrow.offset;
        j.right = "auto";
      }
      this.dom.css(b);
      this.arrow.css(j);
    });
    this.enable = (function () 
    {
      
    });
    this.disable = (function () 
    {
      
    });
    this.destroy = (function () 
    {
      
    });
    this.show = (function () 
    {
      if(! this.visible)
      {
        this.onShow();
        if(! this.rendered)
        {
          bds.comm.tips.push(this);
          this.render();
          this.rendered = true;
        }
        if(this.isAuto)
        {
          this.autoOffset();
        }
        else
        {
          this.setOffset();
          this.setArrow();
        }
        this.dom.css({
          "z-index" : bds.comm.tipZIndex
        });
        bds.comm.tipZIndex ++;
        this.dom.css({
          display : "block"
        });
        this.visible = true;
      }
    });
    this.hide = (function () 
    {
      if(this.visible)
      {
        this.dom.css({
          display : "none"
        });
        this.onHide();
        this.visible = false;
      }
    });
    this.onShow = a.onShow || (function () 
    {
      
    });
    this.onHide = a.onHide || (function () 
    {
      
    });
    this.getTarget = (function () 
    {
      return this.op.target;
    });
    this.getDom = (function () 
    {
      return this.dom;
    });
    this.init();
  });
  bds.event.trigger("se.api_tip_ready");
  $(document).mousedown((function (b) 
  {
    b = b || window.event;
    var a = b.target || b.srcElement;
    while(a && a.tagName && a != document.body && a.tagName.toLowerCase() != "html")
    {
      if(a.className == "c-tip-con")
      {
        break;
      }
      a = a.parentNode;
    }
    if(a && a.className != "c-tip-con")
    {
      $(bds.comm.tips).each((function () 
      {
        if(! this.op.uncontrolled)
        {
          if(this.op.close)
          {
            this.hide();
          }
        }
      }));
    }
  }));
  var sethfPos = sethfPos || 0;
  (function () 
  {
    var q = "//www.baidu.com/", n = navigator.userAgent.indexOf("MSIE") != - 1 && ! window.opera, 
    r = Math.random() * 100, 
    w = "百度一下，你就知道", 
    d = "";
    window.fa = (function (z) 
    {
      try
{        if(window.sidebar)
        {
          window.sidebar.addPanel(w, q, "");
        }
        else
        {
          if(window.opera && window.print)
          {
            z.setAttribute("rel", "sidebar");
            z.setAttribute("href", q);
            z.setAttribute("title", w);
            z.click();
          }
          else
          {
            window.external.AddFavorite(q, w);
          }
        }}
      catch(y)
{        }

    });
    function f(z) 
    {
      if(z)
      {
        var y = z.parentNode;
        if(y)
        {
          y.style.marginBottom = "20px";
          y.style.marginTop = "2px";
        }
      }
    }
    if(n)
    {
      try
{        var x = /se /gi.test(navigator.userAgent);
        var o = /AppleWebKit/gi.test(navigator.userAgent) && /theworld/gi.test(navigator.userAgent);
        var l = /theworld/gi.test(navigator.userAgent);
        var p = /360se/gi.test(navigator.userAgent);
        var a = /360chrome/gi.test(navigator.userAgent);
        var g = /greenbrowser/gi.test(navigator.userAgent);
        var t = /qqbrowser/gi.test(navigator.userAgent);
        var m = /tencenttraveler/gi.test(navigator.userAgent);
        var k = /maxthon/gi.test(navigator.userAgent);
        var u = /krbrowser/gi.test(navigator.userAgent);
        var b = false;
        try
{          b = + external.twGetVersion(external.twGetSecurityID(window)).replace(/\./g, "") > 1013;}
        catch(s)
{          }

        if(x || b || o || l || p || a || g || t || m || k || u)
        {
          var j = sethfPos ? document.getElementById("set_f") : document.getElementById("setf");
          if(j)
          {
            j.style.display = "inline";
            if(sethfPos)
            {
              f(j);
              d = "favorites";
            }
          }
        }
        else
        {
          var i = sethfPos ? document.getElementById("set_h") : document.getElementById("seth");
          if(i)
          {
            i.style.display = "inline";
            if(sethfPos)
            {
              f(i);
              d = "home";
            }
          }
        }}
      catch(s)
{        }

    }
    else
    {
      var j = sethfPos ? document.getElementById("set_f") : document.getElementById("setf");
      if(j)
      {
        j.style.display = "inline";
      }
      if(sethfPos)
      {
        f(j);
        d = "favorites";
      }
    }
    if(d && sethfPos)
    {
      ns_c({
        fm : "sethf_show",
        tab : d
      });
    }
  })();
  function user_c(i) 
  {
    var g = "", f = "", a = "", b = "", j = encodeURIComponent(window.document.location.href), 
    d = window["BD_PS_C" + (new Date()).getTime()] = new Image();
    for(v in i)
    {
      switch(v){
        case "title":
          a = encodeURIComponent(i[v].replace(/<[^<>]+>/g, ""));
          break;

        case "url":
          a = encodeURIComponent(i[v]);
          break;

        default:
          a = i[v];
        
      }
      g += v + "=" + a + "&";
    }
    b = "&mu=" + j;
    d.src = "http://nsclick.baidu.com/v.gif?pid=201&pj=psuser&" + g + "path=" + j + "&wd=" + f + "&t=" + new Date().getTime();
    return true;
  }
  function initPassV3() 
  {
    bds.se.passv3 = passport.pop.init({
      apiOpt : {
        loginType : 1,
        product : "mn",
        u : window.document.location.href,
        safeFlag : 0,
        staticPage : "http://www.baidu.com/cache/user/html/v3Jump.html"
      },
      cache : false,
      tangram : true,
      authsite : ["qzone", "tsina", ],
      authsiteCfg : {
        act : "implicit",
        display : "popup",
        jumpUrl : "http://www.baidu.com/cache/static/user/html/xd.html",
        onBindSuccess : (function (b, d) 
        {
          var a = decodeURIComponent(d.passport_uname || d.displayname);
          bds.se.login.success(a);
          return false;
        })
      },
      onLoginSuccess : (function (b) 
      {
        b.returnValue = false;
        var a = b.rsp.data.userName || b.rsp.data.mail || b.rsp.data.phoneNumber;
        bds.se.login.success(a);
      }),
      onSubmitStart : (function (a) 
      {
        
      }),
      onSubmitedErr : (function (a) 
      {
        
      }),
      onSystemErr : (function (a) 
      {
        
      }),
      onShow : (function () 
      {
        var b = $(".tang-pass-login .pass-reglink"), a = b.attr("href");
        if(bds.comm.query == "去说世界杯")
        {
          if(new RegExp("&subpro=[0-9a-zA-Z%]*([&]*)", "gmi").test(a))
          {
            b.attr("href", a.replace(/\&subpro=[0-9a-zA-Z%]*([\&]*)/g, "&subpro=shijiebei"));
          }
          else
          {
            b.attr("href", a + "&subpro=shijiebei");
          }
        }
        else
        {
          b.attr("href", a.replace(/\&subpro=[0-9a-zA-Z%]*([\&]*)/g, ""));
        }
      }),
      onHide : (function () 
      {
        
      }),
      onDestroy : (function () 
      {
        
      })
    });
  }
  if(! bds.comm.user)
  {
    $.getScript(location.protocol + "//passport.baidu.com/passApi/js/uni_login_wrapper.js?cdnversion=" + new Date().getTime(), 
    initPassV3);
  }
  bds.se.loginCallbackFunc = null;
  bds.se.login = {
    init : (function () 
    {
      this.setUserInfo();
      var a = this;
      bds.comm.loginAction.push((function (b, d) 
      {
        a.setUserInfo(d);
      }));
    }),
    setUserInfo : (function (b) 
    {
      var a = b || bds.comm.user;
      if(! a)
      {
        return;
      }
      $("#lb").replaceWith('<a href="http://i.baidu.com" class="username">' + escapeHTML(bds.comm.username) + '<i class="c-icon"></i></a>');
    }),
    open : (function (b, a) 
    {
      bds.se.loginCallbackFunc = b || (function () 
      {
        window.document.location.reload(true);
      });
      bds.se.passv3.show();
    }),
    success : (function (a) 
    {
      if(! bds.comm)
      {
        return;
      }
      bds.comm.user = a;
      bds.comm.username = a;
      window.bdUser = a;
      bds.se.passv3.hide();
      bds.se.loginCallbackFunc.call(window, 1, a);
      for(var b = 0;b < bds.comm.loginAction.length;b ++)
      {
        bds.comm.loginAction[b].call(window, 1, a);
      }
    })
  };
  bds.se.login.init();
  window._invoke_login = (function (b, a) 
  {
    bds.se.login.open(b, a);
  });
  function isp_hijack(g) 
  {
    var i = document.getElementById("wrapper"), b, a = false, 
    d, 
    f;
    if(! bds.comm.query)
    {
      a = true;
    }
    if(g.stat == 1)
    {
      b = document.createElement("div");
      b.innerHTML = '<div style="zoom:1;_margin-left:1024px;"><div style="position:relative;_float:left;_margin-left:-1024px;"><div style="width:100%;min-width:1024px;"><div style="border:2px solid #fd9162;zoom:1;overflow:hidden;padding:0 0 6px 12px;"><div style="position:relative;width:100%;*overflow:auto;padding-top:10px;"><div style="height:18px;margin-bottom:6px;"><i class="c-icon" style="width:18px;height:18px;background-position:-168px -72px;"></i><strong style="display:inline-block;margin-left:8px;font-size:14px;color:#666;">百度提示您：</strong></div><span style="display:block;color:#333;text-indent:26px;font-size:13px;">我们发现当前您可能受到异常广告弹窗的影响，通常这是受第三方恶意劫持导致。使用 <a href="http://shadu.baidu.com/landingpage/competing.html?from=10064" target="_blank" style="color:#0000D0;text-decoration:underline">防恶意广告专版杀毒软件</a>，可有效改善您的上网体验，免受恶意广告的困扰。</span><a id="isp-close-btn" style="display:inline-block;width:9px;height:9px;position:absolute;top:6px;right:6px;background:url(http://s1.bdstatic.com/r/www/cache/static/global/img/wsCloseBtn2_4a84c812.png) no-repeat;" href="javascript:void(0);"></a></div></div></div></div></div>';
      if(! a)
      {
        i.style.position = "relative";
        document.getElementById("u").style.top = 0;
        b.style.margin = "-6px 0 8px 0";
        document.body.insertBefore(b, i);
      }
      else
      {
        i.insertBefore(b, i.children[0]);
      }
      d = document.getElementById("isp-close-btn");
      f = d.parentNode.getElementsByTagName("a")[0];
      d.onclick = (function () 
      {
        if(a)
        {
          i.removeChild(b);
        }
        else
        {
          document.body.removeChild(b);
          i.style.position = "";
          document.getElementById("u").style.top = "4px";
        }
      });
      d.onmousedown = (function () 
      {
        ns_c({
          fm : "behs",
          tab : "tj_notice",
          cont : "jcbro",
          action : "close",
          area : "topbar"
        });
      });
      f.onmousedown = (function () 
      {
        ns_c({
          fm : "behs",
          tab : "tj_notice",
          cont : "jcbro",
          action : "click",
          area : "topbar"
        });
      });
      ns_c({
        fm : "behs",
        tab : "tj_notice",
        cont : "jcbro",
        action : "show",
        area : "topbar"
      });
    }
  }
  (function () 
  {
    function a() 
    {
      var d, f = "http://isphijack.baidu.com/index.php?cb=isp_hijack", 
      j = [];
      if(top.location != self.location)
      {
        try
{          var b = top.document.getElementsByTagName("frame");
          var l = top.document.getElementsByTagName("iframe");
          for(var g = 0;g < b.length;g ++)
          {
            j.push(b[g].getAttribute("src"));
          }
          for(var g = 0;g < l.length;g ++)
          {
            j.push(l[g].getAttribute("src"));
          }}
        catch(k)
{          }

        ns_c({
          fm : "frm",
          top : encodeURIComponent(top.location.href),
          furls : encodeURIComponent(j.join("|"))
        });
        if(j)
        {
          d = document.createElement("script");
          d.src = f + "&urls=" + encodeURIComponent(j.join("|")) + "&t=" + (+ new Date());
          document.body.appendChild(d);
        }
      }
    }
    $(a);
  })();
  try
{    if(window.console && window.console.log)
    {
      console.log("一张网页，要经历怎样的过程，才能抵达用户面前？\n一位新人，要经历怎样的成长，才能站在技术之巅？\n探寻这里的秘密；\n体验这里的挑战；\n成为这里的主人；\n加入百度，加入网页搜索，你，可以影响世界。\n");
      console.log("请将简历发送至 %c ps_recruiter@baidu.com（ 邮件标题请以“姓名-应聘XX职位-来自console”命名）", 
      "color:red");
      console.log("职位介绍：http://dwz.cn/hr2013");
    }}
  catch(e)
{    }

  var bds = bds || {
    
  };
  bds.se = bds.se || {
    
  };
  bds.se.tool = bds.se.tool || {
    
  };
  bds.comm.host = {
    bfe : "//www.baidu.com/tools",
    favo : "http://i.baidu.com",
    share : "http://bdimg.share.baidu.com/static/api/js/custom/resultshare.js",
    report : "http://jubao.baidu.com",
    koubei : "http://koubei.baidu.com"
  };
  bds.se.tool = (function (item) 
  {
    this.init = (function () 
    {
      this.render();
    });
    this.render = (function () 
    {
      var ops = eval("(" + item.getAttribute("data-tools") + ")");
      var toolsDom = $("<div>", {
        "class" : "c-tip-menu"
      });
      var toolsList = $("<ul>");
      var toolsFavo = $("<li>");
      var toolsFavoLink = $("<a>").html("收藏");
      toolsFavoLink.on("mousedown", (function () 
      {
        bds.se.tool.favo(ops, item.getAttribute("id"));
        ns_c({
          fm : "tools",
          tab : "favo"
        });
      }));
      toolsFavoLink.on("mouseover", (function () 
      {
        $(this).css("background-color", "#ebebeb");
      }));
      toolsFavoLink.on("mouseout", (function () 
      {
        $(this).css("background-color", "#fff");
      }));
      toolsFavo.append(toolsFavoLink);
      toolsList.append(toolsFavo);
      var toolsShare = $("<li>");
      var toolsShareLink = $("<a>").html("分享");
      toolsShareLink.on("mousedown", (function () 
      {
        bds.se.tool.share(ops, item.getAttribute("id"));
        ns_c({
          fm : "tools",
          tab : "share"
        });
      }));
      toolsShareLink.on("mouseover", (function () 
      {
        $(this).css("background-color", "#ebebeb");
      }));
      toolsShareLink.on("mouseout", (function () 
      {
        $(this).css("background-color", "#fff");
      }));
      toolsShare.append(toolsShareLink);
      toolsList.append(toolsShare);
      var toolsKoubei = $("<li>").html("<a target=\"_blank\" onmousedown=\"ns_c({'fm': 'tools','tab':'koubei'})\" href=\"" + bds.comm.host.bfe + "?url=" + encodeURIComponent(ops.url) + "&jump=" + encodeURIComponent(bds.comm.host.koubei + "/womc/p/sentry?title=" + encodeURIComponent(ops.title) + "&q=" + encodeURIComponent(bds.comm.query)) + '&key=surl">评价</a>');
      toolsList.append(toolsKoubei);
      var toolsReport = $("<li>").html("<a target=\"_blank\" onmousedown=\"ns_c({'fm': 'tools','tab':'report'})\" href=\"" + bds.comm.host.bfe + "?url=" + encodeURIComponent(ops.url) + "&jump=" + encodeURIComponent(bds.comm.host.report + "/jubao/accu/?title=" + encodeURIComponent(ops.title) + "&q=" + encodeURIComponent(bds.comm.query)) + '&key=surl">举报</a>');
      toolsList.append(toolsReport);
      toolsDom.append(toolsList);
      var tTip = new bds.se.tip({
        target : $(".c-icon", item)[0],
        mode : "none",
        align : "left",
        offset : {
          x : 33
        },
        arrow : {
          has : 1,
          offset : 30
        },
        content : toolsDom,
        ext : {
          category : "tools"
        }
      });
      tTip.onShow = (function () 
      {
        ns_c({
          fm : "tools",
          tab : "show"
        });
      });
    });
    this.init();
  });
  bds.se.tool.share = (function (b, a) 
  {
    this.op = b || {
      
    };
    this.init = (function (f, d) 
    {
      $.getScript(bds.comm.host.share, (function () 
      {
        $(bds.comm.tips).each((function () 
        {
          if(! this.op.uncontrolled)
          {
            this.hide();
          }
        }));
        var g = new bds.se.tip({
          target : $(".c-icon", document.getElementById(d))[0],
          mode : "none",
          offset : {
            x : 33
          },
          arrow : {
            has : 0
          },
          close : 1,
          content : '<div class="c-tools-share" style="width:200px;"></div>'
        });
        var i = $(".c-tools-share", g.dom.get(0))[0];
        __bdshare.render({
          boxEle : i,
          url : f.url,
          txt : f.title + " -- 分享自百度搜索"
        });
      }));
    })(this.op, a);
  });
  bds.se.tool.favo = (function (d, b) 
  {
    this.op = d || {
      
    };
    this.init = (function (k, j) 
    {
      if(k)
      {
        var f = document.createElement("script");
        var g = bds.comm.host.bfe, i = bds.comm.host.favo;
        f.src = g + "?url=" + encodeURIComponent(k.url) + "&jump=" + encodeURIComponent(i + "/myfavorite/set?irt=1&t=" + encodeURIComponent(k.title) + "&id=" + encodeURIComponent(j) + "&c=bds.se.tool.favo.succ") + "&key=url";
        document.body.appendChild(f);
      }
    });
    if(bds.comm.user)
    {
      this.init(this.op, b);
    }
    else
    {
      if(bds.se.login && bds.se.login.open)
      {
        var a = this;
        bds.se.login.open((function (g, f) 
        {
          if(g == 1)
          {
            a.init(a.op, b);
          }
        }));
      }
    }
  });
  bds.se.tool.favo.succ = (function (json) 
  {
    if(json.suc)
    {
      if(json.status)
      {
        switch(json.status){
          case 302:
            if(bds.se.login && bds.se.login.open)
            {
              bds.se.login.open((function (stat, user) 
              {
                if(stat == 1)
                {
                  bds.se.tool.favo(eval("(" + $("#" + json.id)[0].getAttribute("data-tools") + ")"), 
                  json.id);
                }
              }));
            }
            break;

          case 5:
            var succContent = '<div class="c-tip-notice">';
            succContent += '<h3 class="c-tip-notice-fail">收藏失败，请稍后再试</h3>';
            succContent += "</div>";
            break;

          
        }
      }
    }
    else
    {
      if(json.status)
      {
        var succContent = '<div class="c-tip-notice">';
        succContent += '<h3 class="c-tip-notice-succ">已收藏至：</h3>';
        succContent += "<ul>";
        switch(json.status){
          case 2:
            succContent += '<li class="c-tip-item-succ"><i class="c-icon c-icon-success"></i>个人中心“<a href="http://i.baidu.com/my/collect" target="_blank">我的收藏</a>”</li>';
            succContent += '<li class="c-tip-item-succ"><i class="c-icon c-icon-success"></i>百度首页“<a href="http://www.baidu.com" target="_blank">我的导航</a>”</li>';
            break;

          case 3:
            succContent += '<li class="c-tip-item-succ"><i class="c-icon c-icon-success"></i>个人中心“<a href="http://i.baidu.com/my/collect" target="_blank">我的收藏</a>”</li>';
            succContent += '<li class="c-tip-item-fail"><i class="c-icon c-icon-fail"></i>百度首页“<a href="http://www.baidu.com" target="_blank">我的导航</a>”</li>';
            break;

          case 4:
            succContent += '<li class="c-tip-item-fail"><i class="c-icon c-icon-fail"></i>个人中心“<a href="http://i.baidu.com/my/collect" target="_blank">我的收藏</a>”</li>';
            succContent += '<li class="c-tip-item-succ"><i class="c-icon c-icon-success"></i>百度首页“<a href="http://www.baidu.com" target="_blank">我的导航</a>”</li>';
            break;

          default:
            break;
          
        }
        succContent += "</ul>";
        succContent += "</div>";
      }
    }
    $(bds.comm.tips).each((function () 
    {
      if(! this.op.uncontrolled)
      {
        this.hide();
      }
    }));
    new bds.se.tip({
      target : $(".c-icon", document.getElementById(json.id))[0],
      offset : {
        x : 33
      },
      arrow : {
        has : 0
      },
      mode : "none",
      arrow : {
        has : 0
      },
      close : 1,
      content : succContent
    });
  });
  var bds = bds || {
    
  };
  bds.se = bds.se || {
    
  };
  bds.se.tools = bds.se.tools || {
    
  };
  bds.se.tools = (function () 
  {
    var a = delayHideOnIcon = delayShowOnTip = delayHideOnTip = {
      
    };
    $("#container").delegate(".c-tools", "mouseover", (function () 
    {
      var b = this;
      window.clearTimeout(delayHideOnIcon);
      window.clearTimeout(delayHideOnTip);
      a = setTimeout((function () 
      {
        var d = 1;
        $(bds.comm.tips).each((function (f) 
        {
          if(this.getTarget() == $(".c-icon", b)[0])
          {
            d = 0;
            this.show();
            return false;
          }
        }));
        if(d)
        {
          tools = new bds.se.tool(b);
        }
      }), 
      200);
    })).delegate(".c-tools", "mouseout", (function () 
    {
      window.clearTimeout(a);
      window.clearTimeout(delayShowOnTip);
      var b = this;
      delayHideOnIcon = setTimeout((function () 
      {
        $(bds.comm.tips).each((function (d) 
        {
          if(this.getTarget() == $(".c-icon", b)[0])
          {
            this.hide();
            return false;
          }
        }));
      }), 
      200);
    }));
    $("#c-tips-container").delegate(".c-tip-con", "mouseover", (function () 
    {
      var b = this;
      window.clearTimeout(delayHideOnIcon);
      window.clearTimeout(delayHideOnTip);
      delayShowOnTip = setTimeout((function () 
      {
        $(bds.comm.tips).each((function (d) 
        {
          if(this.getDom().get(0) == b && this.ext.category && this.ext.category == "tools")
          {
            this.show();
            return false;
          }
        }));
      }), 
      200);
    })).delegate(".c-tip-con", "mouseout", (function () 
    {
      window.clearTimeout(a);
      window.clearTimeout(delayShowOnTip);
      var b = this;
      delayHideOnTip = setTimeout((function () 
      {
        $(bds.comm.tips).each((function (d) 
        {
          if(this.getDom().get(0) == b && this.ext.category && this.ext.category == "tools")
          {
            this.hide();
            return false;
          }
        }));
      }), 
      200);
    }));
  });
  bds.se.tools();
  $(document).delegate("#feedback", "click", (function () 
  {
    var a = document.createElement("script");
    a.charset = "utf-8";
    a.src = "http://s1.bdstatic.com/r/www/cache/static/hps/js/ps_feedback_b94070b4.js";
    document.body.appendChild(a);
  }));
  var bds = bds || {
    
  };
  bds.se = bds.se || {
    
  };
  bds.se.banner = (function (a, d, b) 
  {
    this.init = (function () 
    {
      b = b || {
        
      };
      this.$dom_panel = $(a);
      this.hintText = d;
      this.hintIcon = b.iconClass || "";
      this.downUrl = b.downUrl || "";
      this.hintCookie = b.cookie || "";
      this.showNum = (this.hintCookie && $.getCookie(this.hintCookie)) ? Number($.getCookie(this.hintCookie)) : 0;
      this.nscTab = b.nscTab || "";
      this.ishome = (bds.comm && bds.comm.ishome == 1) ? 1 : 0;
      if(a && d && this.showNum < 5)
      {
        this.show();
      }
    });
    this.show = (function () 
    {
      this.render();
      this.showNum += 1;
      $.setCookie(this.hintCookie, this.showNum, {
        expires : 30 * 24 * 60 * 60 * 1000
      });
      if(! window.bds || ! bds.comm || ! bds.comm.isui)
      {
        if(this.ishome == 1)
        {
          $("body").addClass("index_body_hasbanner");
        }
        else
        {
          $("body").addClass("res_body_hasbanner");
        }
      }
      this.$dom_panel.prepend(this.bannerHtml);
      if(this.ishome != 1)
      {
        this.headFloat();
      }
      this.bindEvent();
      ns_c({
        fm : "behs",
        tab : ((this.ishome == 1) ? "tj_" : "") + "baidu_" + (this.nscTab ? this.nscTab : "topbanner") + "show"
      });
    });
    this.render = (function () 
    {
      var f = [];
      f = f.concat(['<div class="res_top_banner">', '<i class="c-icon ' + (this.hintIcon ? this.hintIcon : "res_top_banner_icon") + '"></i>', "<span>" + this.hintText + "</span>", (this.downUrl) ? '<a href="' + this.downUrl + '" class="res_top_banner_download">立即体验</a>' : "", '<i class="c-icon res_top_banner_close"></i>', "</div>", ]);
      this.bannerHtml = f.join("");
    });
    this.headFloat = (function () 
    {
      var g = $("#head"), i = $(window), f = $(".res_top_banner");
      $(window).scroll((function () 
      {
        var k = f.height() || 0, j = i.scrollTop();
        if(j < k)
        {
          g.attr("style", "position:absolute;");
        }
        else
        {
          g.attr("style", "top:0px;_top:" + k + "px;");
        }
      }));
    });
    this.bindEvent = (function () 
    {
      var f = $(".res_top_banner"), g = this;
      $(".res_top_banner_download", f).on("mousedown", (function () 
      {
        g.hintCookie && $.setCookie(g.hintCookie, 5, {
          expires : 30 * 24 * 60 * 60 * 1000
        });
        ns_c({
          fm : "behs",
          tab : ((g.ishome == 1) ? "tj_" : "") + "baidu_" + (g.nscTab ? g.nscTab : "topbanner") + "down"
        });
      }));
      $(".res_top_banner_close", f).on("mousedown", (function () 
      {
        if(! window.bds || ! bds.comm || ! bds.comm.isui)
        {
          if(g.ishome == 1)
          {
            $("body").removeClass("index_body_hasbanner");
          }
          else
          {
            $("body").removeClass("res_body_hasbanner");
          }
        }
        f.detach();
        g.hintCookie && $.setCookie(g.hintCookie, 5, {
          expires : 30 * 24 * 60 * 60 * 1000
        });
        ns_c({
          fm : "behs",
          tab : ((g.ishome == 1) ? "tj_" : "") + "baidu_" + (g.nscTab ? g.nscTab : "topbanner") + "close"
        });
      }));
      $(window).on("swap_begin", (function () 
      {
        if(! window.bds || ! bds.comm || ! bds.comm.isui)
        {
          if(g.ishome == 1)
          {
            $("body").removeClass("index_body_hasbanner");
          }
          else
          {
            $("body").removeClass("res_body_hasbanner");
          }
        }
        f.detach();
      }));
    });
    this.init();
  });
  bds.se.certification = bds.se.certification || {
    
  };
  bds.se.certification.build = (function () 
  {
    var g = 2;
    var d = [".hinticon{height:16px;width:16px;}", ];
    var i = "40519,40524";
    var l = "40520,40525";
    var f = "http://tag.baidu.com/";
    bds.util.addStyle(d.join(""));
    function k() 
    {
      var n = [], m = [];
      $(".certification").each((function () 
      {
        var q = this.getAttribute("certification_key");
        var o = bds.se.certification.data[q];
        var r = "";
        for(var p = 0;p < o.length;p ++)
        {
          if(l.indexOf(o[p]) != - 1)
          {
            $(".c-icon-v1", this).addClass("c-icon-v3");
          }
          else
          {
            if(i.indexOf(o[p]) != - 1)
            {
              $(".c-icon-v1", this).addClass("c-icon-v2");
            }
          }
          $(".c-icon-v1", this).css("visibility", "visible");
          r += o[p] + "|";
        }
        if($.inArray(q, n) == - 1)
        {
          n.push(q);
          m.push(r.replace(/\|$/, ""));
        }
      }));
      if(n.length < 1)
      {
        return;
      }
      $.getJSON(f + "?urls=" + n.join(",") + "&flag=" + m.join(",") + "&sid=" + bds.comm.sid + "&qid=" + bds.comm.qid + "&v=" + g + "&callback=?", 
      bds.se.certification.build.show);
    }
    function j(m) 
    {
      if(m.code != 0)
      {
        return;
      }
      $(".vstar").each((function () 
      {
        var p = this.getAttribute("certification_key");
        var o = this.getAttribute("dis_url").replace(/(^\s*)|(\s*$)/g, "");
        var n = m.data[p];
        a(this, n.vstar, o, "vstar");
      }));
      $(".cfda").each((function () 
      {
        var p = this.getAttribute("certification_key");
        var o = this.getAttribute("dis_url").replace(/(^\s*)|(\s*$)/g, "");
        var n = m.data[p];
        a(this, n.medical, o, "cfda");
      }));
      $(".cata").each((function () 
      {
        var p = this.getAttribute("certification_key");
        var o = this.getAttribute("dis_url").replace(/(^\s*)|(\s*$)/g, "");
        var n = m.data[p];
        a(this, n.aviation, o, "cata");
      }));
    }
    function a(q, n, m, p) 
    {
      if(! n)
      {
        return;
      }
      var t = "<div class='c-tip-info hitcon'><ul>";
      if(p == "vstar")
      {
        var t = "<div class='c-tip-cer hitcon'><ul>";
      }
      var s = n.hint;
      var r = "over";
      if(n.url)
      {
        $("a", q).attr("href", n.url).removeAttr("onclick");
      }
      if(! n || ! s)
      {
        r = "none";
        return;
      }
      for(var o = 0;o < s.length;o ++)
      {
        if(s[o] == "")
        {
          continue;
        }
        t += "<li ";
        if(s[o].icon)
        {
          t += "class='c-tip-item-i'><img src='" + s[o].icon + "' class='c-customicon c-gap-icon-right-small c-tip-item-icon' />";
        }
        else
        {
          t += ">";
        }
        t += b(s[o].txt);
        t += "</li>";
      }
      t += "</ul></div>";
      new bds.se.tip({
        target : q,
        mode : r,
        title : n.label + "：",
        content : t,
        offset : {
          x : 10,
          y : 25
        },
        onShow : (function () 
        {
          _this = this;
          var w = "";
          var x = 1;
          for(var u = 0;u < s.length;u ++)
          {
            w += s[u].misid + ",";
            if(l.indexOf(s[u].misid) != - 1)
            {
              x = 3;
            }
            else
            {
              if(i.indexOf(s[u].misid) != - 1)
              {
                x = 2;
              }
            }
          }
          ns_c({
            hintUrl : m,
            hintId : w,
            hintTpl : p
          });
          if(t.indexOf("ecard") != - 1)
          {
            setTimeout((function () 
            {
              A.use("honourCard", (function () 
              {
                var y = $(_this.getDom()).find(".ecard");
                A.ui.honourCard(y, n.url, x, y.attr("value"));
              }));
            }), 
            0);
          }
          $(this.dom.get(0)).delegate("a", "mousedown", (function () 
          {
            ns_c({
              hintUrl : m,
              hintTpl : p,
              title : this.innerHTML,
              pos : u
            });
          }));
        })
      });
    }
    function b(n) 
    {
      var m = n;
      m = m.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
      m = m.replace("[/url]", "</a>").replace(/\[url ([^\s]*)\]/, "<a href='$1' target='_blank'>");
      m = m.replace(/\[img ([^\s]*)\]/, "<img src='$1' />");
      m = m.replace(/\[ecard (-?[\d]{0,3})\]/, "<div class='ecard' value='$1'></div>");
      return m;
    }
    return {
      init : k,
      show : j
    };
  })();
  bds.se.safeTip = (function () 
  {
    var selfCSS = [".unsafe_content{margin-top:4px;}", "a.unsafe_ico_new{color:#b95b07;}", ".safe_icons{width:60px;line-height:15px;font-zise:12px;color:#666;text-align:center;display:inline-block;vertical-align:top}", ".safe_icons_bd{width:16px;height:16px;display:inline-block;background:url(//www.baidu.com/cache/spam/img/safe-icons-1.1.png) no-repeat -17px 0;position:relative;z-index:0}", ".safe_icons_qq{width:16px;height:16px;display:inline-block;background:url(//www.baidu.com/cache/spam/img/safe-icons-1.1.png) no-repeat -173px 0;position:relative;z-index:0}", ".safe_icons_hs{width:16px;height:16px;display:inline-block;background:url(//www.baidu.com/cache/spam/img/safe-icons-1.1.png) no-repeat -68px 0;position:relative;z-index:0}", ".safe_icons_js{width:16px;height:16px;display:inline-block;background:url(//www.baidu.com/cache/spam/img/safe-icons-1.1.png) no-repeat 0 0;position:relative;z-index:0}", ".safe_icons_sc{width:16px;height:16px;display:inline-block;background:url(//www.baidu.com/cache/spam/img/safe-icons-1.1.png) no-repeat -51px 0;position:relative;z-index:0}", ".safe_icons_fail{width:14px;height:14px;display:inline-block;background:url(//www.baidu.com/cache/spam/img/safe-icons-1.1.png)  no-repeat -159px 0;position:absolute;left:9px;top:7px}", ];
    function init() 
    {
      bds.util.addStyle(selfCSS.join(""));
      var num_unsafe = 0, tj_which = [], data_tpl = "", data_id = [];
      var unsafe = $(".unsafe_ico_new").get();
      for(var i = 0;i < unsafe.length;i ++)
      {
        var obj = unsafe[i];
        var s_data = eval("(" + obj.getAttribute("data-safe") + ")");
        data_id.push(obj.getAttribute("data-id"));
        data_tpl = obj.getAttribute("data-tpl");
        var s_type = {
          qq : "0",
          bd : "0",
          sc : "0",
          js : "0",
          hs : "0"
        };
        if(s_data)
        {
          s_item = s_data.hintItem;
          for(var j = 0;j < s_item.length;j ++)
          {
            s_type[s_item[j]] = "1";
          }
          for(var key in s_type)
          {
            if(s_type[key] == "1")
            {
              tj_which.push(key);
            }
          }
        }
        while(obj.className.indexOf("result") == - 1)
        {
          obj = obj.parentNode;
        }
        if(obj.className.indexOf("result") != - 1)
        {
          var h3 = obj.getElementsByTagName("h3");
          if(h3)
          {
            var links = h3[0].getElementsByTagName("a");
            if(links)
            {
              var html = links[0].innerHTML;
              links[0].href = unsafe[i].href;
              links[0].innerHTML = html;
            }
          }
        }
        num_unsafe ++;
        var safedata = eval("(" + unsafe[i].getAttribute("data-safe") + ")");
        var tip_id = unsafe[i].getAttribute("data-id");
        var tip_tpl = unsafe[i].getAttribute("data-tpl");
        setTipCon(unsafe[i], safedata, tip_id, tip_tpl);
      }
      if(num_unsafe > 0)
      {
        ns_c({
          tab : "safetip",
          num_unsafe : num_unsafe,
          prd : tj_which.join("|"),
          hintId : data_id,
          hintTpl : data_tpl
        });
      }
    }
    function setTipCon(obj, data, tip_id, tip_tpl) 
    {
      var safeName = {
        qq : "电脑<br>管家",
        bd : "百度安<br>全检测",
        sc : "SCANV<br>安全中心",
        js : "金山<br>云安全",
        hs : "小红伞"
      };
      var groupName = {
        qq : 0,
        js : 0,
        bd : 0,
        sc : 0,
        hs : 0
      }, 
      nameHtml = [], 
      typeHtml = [], 
      html = "";
      if(data == "")
      {
        return;
      }
      var group = data.hintItem;
      for(var i = 0;i < group.length;i ++)
      {
        groupName[group[i]] = 1;
      }
      for(var key in groupName)
      {
        if(groupName[key] == 1)
        {
          nameHtml.push('<span class="safe_icons"><span class="safe_icons_' + key + '"><span class="safe_icons_fail"></span></span><br>' + safeName[key] + "</span>");
        }
      }
      html = '<div class="c-tip-info"><strong><em>' + data.hintLabelMid + "</em>&nbsp;&nbsp;" + data.hintLabelSuf + "</strong>";
      html += '<p class="c-gap-top-small c-gap-bottom-small">' + nameHtml.join("") + "</p></div>";
      new bds.se.tip({
        target : obj,
        title : data.hintLabelPre + "：",
        content : html,
        offset : {
          x : - 20,
          y : 25
        },
        onShow : (function () 
        {
          ns_c({
            tab : "safetip",
            safe : 0,
            which : data.hintItem.join("|"),
            hintId : tip_id,
            hintTpl : tip_tpl
          });
        })
      });
    }
    return {
      init : init
    };
  })();
  var bds = bds || {
    
  };
  bds.se = bds.se || {
    
  };
  bds.se.trust = bds.se.trust || {
    
  };
  bds.se.trust = (function () 
  {
    var o = 4;
    var p = [];
    var n = [];
    var d = "http://tag.baidu.com/";
    var j = null;
    var m = null;
    function q() 
    {
      p = [], n = [];
      $(".c-trust").each((function () 
      {
        var s = $(this);
        var r = this.getAttribute("data_key");
        if(s.parent(".c-icons-inner").length == 0)
        {
          s.wrap("<span class='c-icons-outer'><span class='c-icons-inner'></span></span>");
        }
        if($.inArray(r, p) == - 1)
        {
          p.push(this.getAttribute("data_key"));
        }
        if($.inArray(this, n) == - 1)
        {
          n.push(this);
        }
      }));
      $(".c-trust-as").each((function () 
      {
        m = $.parseJSON($(this).attr("hint-data"));
        if(m)
        {
          j = $(this);
          l(m, $(this).attr("hint-type"));
        }
      }));
      if(p.length < 1)
      {
        return;
      }
      k();
    }
    function k() 
    {
      $.getJSON(d + "?urls=" + p.join(",") + "&sid=" + bds.comm.sid + "&qid=" + bds.comm.qid + "&v=" + o + "&callback=?", 
      b);
    }
    function b(r) 
    {
      if(r.code != 0)
      {
        return;
      }
      $(n).each((function () 
      {
        var s = this.getAttribute("data_key");
        m = r.data[s];
        if(! m)
        {
          return;
        }
        j = $(this);
        j.html("");
        if(m.vstar && m.vstar.hint && m.vstar.hint.length > 0)
        {
          f(m.vstar.hint[0].vlevel, m.vstar.url);
        }
        if(m.medical)
        {
          g();
        }
        if(m.aviation)
        {
          i();
        }
      }));
    }
    function f(u, r) 
    {
      var s = $("<span>", {
        "class" : "c-vline"
      });
      var t = $("<a>", {
        "class" : "c-icon c-icon-v" + u,
        target : "_blank",
        onclick : "return false",
        href : "#"
      });
      if(r)
      {
        t.attr({
          href : r,
          onclick : ""
        });
      }
      j.append(s);
      j.append(t);
      A.use("honourCard", (function () 
      {
        
      }));
      l(m.vstar, "vstar");
    }
    function g() 
    {
      var r = $("<span>", {
        "class" : "c-vline"
      });
      var s = $("<a>", {
        "class" : "c-icon c-icon-med",
        target : "_blank",
        onclick : "return false",
        href : "#"
      });
      j.append(r);
      j.append(s);
      l(m.medical, "medical");
    }
    function i() 
    {
      var r = $("<span>", {
        "class" : "c-vline"
      });
      var s = $("<a>", {
        "class" : "c-icon c-icon-air",
        target : "_blank",
        onclick : "return false",
        href : "#"
      });
      j.append(r);
      j.append(s);
      l(m.aviation, "aviation");
    }
    function l(t, w) 
    {
      var z = t.hint;
      var y = "over";
      var s = t.url;
      if(! t || ! z)
      {
        return;
      }
      if(w == "vstar")
      {
        var x = "<div class='c-tip-cer hitcon'><ul>";
      }
      else
      {
        var x = "<div class='c-tip-info hitcon'><ul>";
      }
      for(var u = 0;u < z.length;u ++)
      {
        if(z[u] == "")
        {
          y = "none";
          continue;
        }
        x += "<li ";
        if(z[u].icon)
        {
          x += "class='c-tip-item-i'><img src='" + z[u].icon + "' class='c-customicon c-gap-icon-right-small c-tip-item-icon' />";
        }
        else
        {
          x += ">";
        }
        x += a(z[u].txt);
        x += "</li>";
      }
      x += "</ul></div>";
      var r = new bds.se.tip({
        target : j,
        mode : y,
        align : "auto",
        title : t.label + "：",
        content : x,
        offset : {
          x : 3,
          y : 25
        }
      });
      r.onShow = (function () 
      {
        var C = 1;
        for(var B = 0;B < z.length;B ++)
        {
          if(z[B].vlevel > C)
          {
            C = z[B].vlevel;
          }
        }
        ns_c({
          hintUrl : j.attr("data_key"),
          hintTpl : w,
          hintId : C
        });
        if(x.indexOf("ecard") != - 1)
        {
          setTimeout((function () 
          {
            A.use("honourCard", (function () 
            {
              var D = $(r.getDom()).find(".c-trust-ecard");
              A.ui.honourCard(D, s, C, D.attr("value"));
            }));
          }), 
          0);
        }
        $("li", this.dom).each((function (D) 
        {
          $("a", this).each((function (E) 
          {
            this.onmousedown = (function () 
            {
              ns_c({
                hintUrl : s,
                hintTpl : w,
                title : this.innerHTML,
                pos : E
              });
            });
          }));
        }));
      });
    }
    function a(s) 
    {
      var r = s;
      r = r.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
      r = r.replace("[/url]", "</a>").replace(/\[url ([^\s]*)\]/, "<a href='$1' target='_blank'>");
      r = r.replace(/\[img ([^\s]*)\]/, "<img src='$1' />");
      r = r.replace(/\[ecard (-?[\d]{0,3})\]/, "<div class='c-trust-ecard' value='$1'></div>");
      return r;
    }
    q();
    return {
      init : q,
      render : b
    };
  })();
  bds.abase64 = (function () 
  {
    var k;
    if(bds && bds._base64)
    {
      k = bds._base64;
    }
    else
    {
      k = {
        domain : "http://b1.bdstatic.com/",
        b64Exp : - 1,
        pdc : false,
        sep : 16
      };
      bds._base64 = k;
    }
    var a = {
      left : "content_left",
      right : "content_right"
    }, 
    C = "BASE64_BOTTAG", 
    r = k.domain, 
    u = [], 
    x = {
      left : $.Deferred(),
      right : $.Deferred()
    }, 
    y = {
      left : {
        
      },
      right : {
        
      }
    }, 
    n = [], 
    w = false, 
    B = false, 
    I = 0, 
    g = 0, 
    q = 0, 
    s = null, 
    f = 1;
    bds._base64.reqT = {
      
    };
    function E() 
    {
      u = [];
      x = {
        left : $.Deferred(),
        right : $.Deferred()
      }, 
      y = {
        left : {
          
        },
        right : {
          
        }
      };
      n = [];
      w = false;
      B = false;
      I = 0;
      g = 0;
      q = 0;
      s = null;
      f = 1;
      for(var J = 0;J < d.length;J ++)
      {
        if(d.abort)
        {
          d[J].abort();
        }
      }
      d = [];
      d.push(x.left);
      d.push(x.right);
    }
    var d = [];
    function i(L, Q) 
    {
      q ++;
      var L = L || [], Q = Q || [];
      L = $.grep(L, (function (R) 
      {
        if(y.right.hasOwnProperty(R))
        {
          return false;
        }
        y.right[R] = false;
        return true;
      }));
      Q = $.grep(Q, (function (R) 
      {
        if(y.left.hasOwnProperty(R))
        {
          return false;
        }
        y.left[R] = false;
        return true;
      }));
      bds._base64.sepExp = 0;
      bds._base64.reqT = {
        
      };
      var M = false;
      if(encodeURIComponent($("#kw").val()) == "%E6%B7%98%E5%AE%9D" && L.length > 10)
      {
        var P = Math.ceil(Math.random() * 4);
        if(P == 2 || P == 4)
        {
          M = true;
        }
        bds._base64.sepExp = P;
      }
      if(L.length > 12)
      {
        M = true;
      }
      f = (k.b64Exp == 1 || bds._base64.sepExp == 3 || bds._base64.sepExp == 4) ? 2 : 1;
      r = "http://b" + f + ".bdstatic.com/";
      var N = window.PDC_ASYNC;
      if(k.b64Exp == 2)
      {
        if(Q.length > 0)
        {
          B = true;
          l(Q, "left", "reql");
        }
      }
      if(L.length > 0)
      {
        if((M && L.length > 10) || (k.b64Exp == 3 && typeof k.sep != "undefined" && L.length >= k.sep))
        {
          var O = Math.round(L.length / 2);
          var K = [], J = [];
          $.each(L, (function (R, S) 
          {
            R < O ? K.push(S) : J.push(S);
          }));
          l(K, "right", "reqr2");
          l(J, "right", "reqr1");
        }
        else
        {
          l(L, "right", "reqr");
        }
        if(N && N.setParam)
        {
          N.setParam("ic_pre_suc", q + "_" + L.length);
        }
      }
    }
    function l(J, N, O) 
    {
      var L = r + "image?imglist=" + J.join(",");
      var K = "is_base64_img" + d.length;
      L += "&cb=" + K;
      var M = new Date() * 1;
      var P = $.ajax({
        url : L,
        cache : true,
        dataType : "jsonp",
        jsonp : false,
        timeout : 1500,
        jsonpCallback : K,
        success : (function (Q) 
        {
          bds._base64.reqT[O] = new Date() * 1 - M;
          if(N == "right")
          {
            D(Q);
          }
          else
          {
            if(N == "left")
            {
              F(Q);
            }
          }
        })
      });
      d.push(P);
    }
    function j() 
    {
      var J = s = $.when.apply($, d);
      s.always((function () 
      {
        var K = + (new Date());
        if(J !== s)
        {
          return;
        }
        if(k.b64Exp == 2)
        {
          o("left");
        }
        o("right");
        PDC_ASYNC.setParam("cus_b64_js", + (new Date()) - K);
      }));
    }
    var o = (function (L) 
    {
      var M = y[L];
      var J = document.getElementById(a[L]);
      if(! J)
      {
        return;
      }
      var O = J.getElementsByTagName("IMG");
      for(var K = 0;K < O.length;K ++)
      {
        var N = O[K].getAttribute("data-b64-id");
        if(N)
        {
          if(M.hasOwnProperty(N) && M[N])
          {
            p(O[K], M[N]);
          }
          else
          {
            t(O[K]);
          }
        }
      }
      b();
    });
    function b() 
    {
      setTimeout((function () 
      {
        for(var J = 0;J < u.length;J ++)
        {
          var K = u[J];
          if(! K.loaded)
          {
            t(K.obj);
          }
        }
        u = [];
      }), 
      200);
    }
    function p(J, K) 
    {
      try
{        J.onerror = (function () 
        {
          t(this);
        });
        u.push({
          obj : J,
          loaded : false
        });
        J.onload = (function () 
        {
          for(var N = 0;N < u.length;N ++)
          {
            var M = u[N];
            if(M.obj == this)
            {
              M.loaded = true;
            }
          }
        });
        J.src = "data:image/jpeg;base64," + K;}
      catch(L)
{        t(J);}

    }
    var t = (function (J) 
    {
      if(J.getAttribute("data-b64-id") != null && J.getAttribute("data-b64-id") != "" && J.getAttribute("data-src") != null)
      {
        J.src = J.getAttribute("data-src");
      }
    });
    var D = (function (J) 
    {
      m(J, "right");
    });
    var F = (function (J) 
    {
      m(J, "left");
    });
    var m = (function (L, K) 
    {
      for(var J in L)
      {
        if(L.hasOwnProperty(J))
        {
          y[K][J] = L[J];
        }
      }
    });
    var z = (function (J) 
    {
      x[J].resolve();
    });
    var H = (function (K) 
    {
      var J = "http://nsclick.baidu.com/v.gif?pid=315&rsv_yc_log=3&";
      var M = "b64log__" + (new Date()).getTime(), L = window[M] = new Image();
      L.onload = (L.onerror = (function () 
      {
        window[M] = null;
      }));
      L.src = J + K + "&_t=" + new Date() * 1;
      L = null;
    });
    return {
      loadImg : i,
      setDomLoad : z,
      end : j,
      restart : E
    };
  })();
  $((function () 
  {
    if(bds.comm.user && bds.comm.user != "")
    {
      setTimeout((function () 
      {
        $.ajax({
          dataType : "script",
          cache : true,
          url : "http://su.bdimg.com/static/message/js/mt_show.js?v=20140801",
          success : (function () 
          {
            function a() 
            {
              if($("#imsg")[0] && $("#u")[0] && $("#user")[0])
              {
                bds.se.message && bds.se.message.init && bds.se.message.init({
                  button : $("#imsg"),
                  refer : $("#u")
                });
                $("#user").on("mouseover", (function () 
                {
                  $("#s_mod_msg").hide();
                }));
              }
              if($("#imsg1")[0] && $("#u1")[0] && $("#user1")[0])
              {
                bds.se.message && bds.se.message.init && bds.se.message.init({
                  button : $("#imsg1"),
                  refer : $("#u1")
                });
                $("#user1").on("mouseover", (function () 
                {
                  $("#s_mod_msg").hide();
                }));
              }
            }
            function b() 
            {
              bds.se.message && bds.se.message.addStyle && bds.se.message.addStyle();
            }
            bds.comm.loginAction.push((function (d, f) 
            {
              if(d == 1)
              {
                a();
                b();
              }
            }));
            if(bds.comm.newindex)
            {
              $(window).on("index_off", (function () 
              {
                setTimeout((function () 
                {
                  a();
                  b();
                }), 
                0);
              }));
            }
            else
            {
              a();
              b();
            }
            $(window).on("swap_end", b);
          })
        });
      }), 
      0);
    }
  }));
  bds.se.heightControl = {
    check : (function () 
    {
      return $("#content_right").height() > $("#content_left").height();
    }),
    cleanEC : (function () 
    {
      var d = $(".ec_bdtg"), b = $("#ec_im_container").children("div"), 
      g = b.length, 
      f = g - 1;
      if(bds.se.heightControl.check())
      {
        if(d && d.length)
        {
          d.css("display", "none");
        }
      }
      while(bds.se.heightControl.check() && f >= 0)
      {
        var a = b[f];
        $(a).css("display", "none");
        f --;
      }
    }),
    cleanRes : (function () 
    {
      var f = $("#content_right").find(".result-op"), b = f.length, 
      a = b - 1;
      while(bds.se.heightControl.check() && a > 0)
      {
        var d = f[a];
        $(d).css("display", "none");
        a --;
      }
    }),
    init : (function () 
    {
      bds.se.heightControl.cleanEC();
      bds.se.heightControl.cleanRes();
    })
  };
  $(window).on("swap_end", (function () 
  {
    if(bds.se.trust)
    {
      bds.se.trust.init();
    }
    bds.se.heightControl.init();
    bds.util.setContainerWidth();
    var a = $(".res_dialog_data").get();
    if(a && a.length > 0)
    {
      setTimeout((function () 
      {
        $.ajax({
          dataType : "script",
          cache : true,
          url : "http://s1.bdstatic.com/r/www/cache/static/shadu/shadu_68be8ee9.js",
          success : (function () 
          {
            bds.se.hintDialog.init();
          })
        });
      }), 
      0);
    }
  }));
  $((function () 
  {
    $("#head").delegate(".index_tab_top>a,.index_tab_bottom>a,#u1>a", "mousedown", 
    (function () 
    {
      return ns_c({
        fm : "behs",
        tab : $(this).attr("name"),
        query : "",
        un : encodeURIComponent(bds.comm.user || "")
      });
    }));
  }));
  