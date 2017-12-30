(function(os, win, doc) {
    "use strict";
    // lib,burglish,burmese,syllable
        var gc = navigator.userAgent;
    var QW = /Gecko/.test(gc);
    var QT = /Opera/.test(gc);
    var w1 = /MSIE/.test(gc);
    var QR = {};
    var QX = {};
    var h7 = {};
    var gJ = {
        basic: true
    };
    var gl = {
        i: 0,
        OT: {}
    };
    function $(e) {
        return doc.getElementById(e);
    }
    function eCreate(e) {
        return doc.createElement(e);
    }
    function eEmpty(e) {
        while (e.hasChildNodes()) e.removeChild(e.firstChild);
        return e;
    }
    function eText(e) {
        if (e) {
            return e + app.id.text;
        }
        return app.id.text;
        // app.id.target+app.id.text
        }
    function Ku(e) {
        try {
            var Ot = eval(e);
            if (typeof eval(e) != "undefined") return true;
        } catch (e) {}
        return false;
    }
    function g9() {
        var e = $(eText(app.id.source)).value;
        var t = "";
        for (var a = 0; a < e.length; a++) {
            var r = e.charCodeAt(a);
            if (r == 10) {
                t += "\n";
            } else {
                t += "'" + e.charCodeAt(a) + "',";
            }
        }
        $(eText(app.id.target)).value = t;
    }
    function gA() {
        $(eText(app.id.target)).value = unescape($(eText(app.id.source)).value);
    }
    function N3() {
        $(eText(app.id.target)).value = NJ(Qu($(eText(app.id.source)).value));
    }
    function Qx() {
        eText(app.id.source);
        var e = $(eText(app.id.source)).value;
        self.status = gM[app.id.source].name + " -> " + gM[app.id.target].name;
        $(eText(app.id.target)).value = e.Ng(gM[app.id.source].name, gM[app.id.target].name);
    }
    function g1() {
        if ($(app.id.force).value != QN) QN = $(app.id.force).value;
        if ($(app.id.exception).value != g8) g8 = $(app.id.exception).value;
        var e = $(eText(app.id.source)).value;
        self.status = gM[app.id.source].name + " ->" + gM[app.id.target].name;
        var t = e;
        if (!Oa[gM[app.id.source].name].unicode) {
            t = t.Q5();
        }
        t = t.Ng(gM[app.id.source].name, gM[app.id.target].name);
        if (!Oa[gM[app.id.source].name].unicode) {
            t = t.Nf();
        }
        $(eText(app.id.target)).value = t;
        Nl(false);
    }
    function gb() {
        // var Ot = ["QE", "NQ", "g8"];
        var Ot = [ "QE", "g8" ];
        for (var j = 0; j < Ot.length; j++) {
            var wM = eval(Ot[j]).split(",");
            for (var i = 0; i < wM.length; i++) {
                if (!/[^a-z]/.test(wM[i])) {
                    QX[wM[i].toLowerCase()] = 1;
                }
            }
        }
        var wM = QN.split(",");
        for (var i = 0; i < wM.length; i++) {
            h7[wM[i]] = 1;
        }
    }
    function Ne(e, t) {
        t = $(e).style.display == "none";
        $(e).style.display = t != false ? "" : "none";
        // $(Oz).visible = gz != false ? false : true;
        }
    function gS(e) {
        $(e).style.display = "none";
        // $(Oz).visible = false;
        }
    function wQ(e, t) {
        // var e = $(Oz);
        // e.currentStyle ? e.currentStyle.display :getComputedStyle(e, null).display;
        // console.log(e.currentStyle);
        // if (gz !=false)
        $(e).style.display = t != false ? "block" : "none";
        // e.visible = gz != false ? false : true;
        // if ($(Oz).style.display)
        // e.style.visibility = gz != false ? "visible" : "hidden";
        // e.visible = gz != false ? false : true;
        // $(Oz).style.visibility = gz != false ? "visible" : "hidden";
        // $(Oz).visible = gz != false ? false : true;
        }
    function Kx(e) {
        $(e).style.display = "none";
        // $(Oz).style.visibility = "hidden";
        // $(Oz).visible = false;
        }
    // function N9(wd) {
    //   var wA = eCreate('style');
    //   wA.setAttribute("type", "text/css");
    //   if (wd.id) wA.setAttribute("id", wd.id);
    //   if (wA.styleSheet) {
    //     wA.styleSheet.cssText = wd.css;
    //   } else {
    //     wA.appendChild(doc.createTextNode(wd.css));
    //   }
    //   var Oq = doc.getElementsByTagName('head')[0];
    //   Oq.appendChild(wA);
    // };
    // function Ko(a, b) {
    //   return a - b;
    // }
    String.prototype.OY = function(e) {
        var t = -1;
        if (arguments.length != 1) return t;
        if (typeof e != "array" && typeof e != "object") return t;
        for (var a = 0; a < e.length; a++) {
            if (this == e[a]) t = a;
        }
        return t;
    };
    String.prototype.reverse = function() {
        var e = "";
        for (var t = 0; t < this.length; t++) {
            e = this.charAt(t) + e;
        }
        return e;
    };
    function NI(e, t) {
        var a = String(e);
        while (a.length < t) {
            a = "0" + a;
        }
        return a;
    }
    function Ql(e) {
        return e.replace(/([!"#$%&'()*+,-./:;?@[\\\]_`{|}~])/g, "\\$1");
    }
    String.prototype.Ql = function() {
        return Ql(this);
    };
    function wi(e) {
        return e.replace(/^[\s​]+|[\s​]+$/gm, "");
    }
    function Kp(e) {
        return wi(e).replace(/^\,+|\,+$/gm, "");
    }
    String.prototype.wi = function() {
        return wi(this);
    };
    String.prototype.Kp = function() {
        return Kp(this);
    };
    String.prototype.K1 = function(e) {
        return NI(this, e);
    };
    function hT(e) {
        return String.fromCharCode(e);
    }
    function O6(e) {
        return e.length;
    }
    function Qu(e) {
        return escape(e).replace(/\%/g, "\\");
    }
    // function Np(Oz) {
    //   return unescape(Oz.replace(/\\/g, '%'));
    // };
    function NJ(e) {
        return unescape(e.replace(/\\([0-7][0-9A-F])/g, "%$1"));
    }
    function Nl(gz, QY, Nq) {
        if (gz) {
            if ($("loading")) {
                wQ("loading");
            } else {
                var h6 = eCreate("div");
                h6.id = "loading";
                h6.innerHTML = "<div>" + (Nq || "Loading...") + "</div>";
                doc.body.appendChild(h6);
            }
            setTimeout(eval(QY), 100);
        } else {
            Kx("loading");
        }
    }
    var Kn = new Object();
    Kn.c = Kn.start = new Date();
    Kn.d = function() {
        var e = new Date().getTime() - this.c;
        return e;
    };
    Kn.u = function() {
        this.c = new Date().getTime();
    };
    // function OV() {
    //   return Math.random();
    // };
        var gR = false;
    var N5, Nr, g4, tx, ty;
    function Q0(e, t, a, r, i) {
        a = a || "";
        r = r || 0;
        i = i ? i - 1 : 0;
        var n = e.scrollTop;
        var O = e.scrollLeft;
        var o = e.textLength;
        var s = e.selectionStart - i;
        var l = (e.selectionEnd || e.selectionStart) - i;
        var f = e.value.substring(0, s - r);
        var $ = e.value.substring(s, l);
        var u = e.value.substring(l, o);
        e.value = f + t + (a ? $ : "") + a + u;
        e.selectionStart = s + (t.length - r) + i;
        e.selectionEnd = e.selectionStart;
        e.scrollTop = n;
        e.scrollLeft = O;
        return false;
    }
    function QC(e, t, a, r, i) {
        a = a || "";
        r = r || 0;
        i = i ? i - 1 : 0;
        e.focus();
        var n = "​‌​";
        var O = doc.selection.createRange();
        O.moveStart("character", -i);
        var o = O.text;
        doc.selection.createRange().text = O.text + n;
        var s = e.value.indexOf(n) - i;
        var l = e.value.substring(0, s - r - o.length);
        var f = e.value.substring(s + n.length, e.value.length);
        e.value = l + t + o + a + f;
        O = e.createTextRange();
        O.collapse(true);
        var $ = l.split("\r\n").length - 1;
        O.moveStart("character", s + (t.length - r) - $);
        O.select();
        return false;
    }
    function KR(e, t, a, r, i) {
        w1 ? QC(e, t, a, r, i) : Q0(e, t, a, r, i);
    }
    function OX(e) {
        // var Kl = $(Oz).offsetLeft;
        // var w7 = $(Oz).offsetTop;
        // while (i = OT.offsetParent) {
        //   Kl += i.offsetLeft;
        // }
        // while (i = OT.offsetParent) {
        //   w7 += i.offsetTop;
        // }
        return [ $(e).offsetLeft, $(e).offsetTop ];
    }
    function Qw(e) {
        if (gR) {
            g4.style.left = QW ? tx + e.clientX - N5 : tx + event.clientX - N5;
            g4.style.top = QW ? ty + e.clientY - Nr : ty + event.clientY - Nr;
            return false;
        }
    }
    function gP(e) {
        var t = QW ? e.target : event.srcElement;
        var a = w1 ? "BODY" : "HTML";
        while (t.tagName != a && !/dragme/.test(t.className)) {
            t = QW ? t.parentNode : t.parentElement;
        }
        if (/dragme/.test(t.className)) {
            gR = true;
            g4 = t;
            tx = parseInt(g4.style.left + 0);
            ty = parseInt(g4.style.top + 0);
            N5 = QW ? e.clientX : event.clientX;
            Nr = QW ? e.clientY : event.clientY;
            doc.onmousemove = Qw;
            return false;
        }
    }
    doc.onmousedown = gP;
    doc.onmouseup = new Function("gR=false");
    gJ.lib = true;
    var gM = {
        source: {
            name: "Zawgyi"
        },
        target: {
            name: "Myanmar3",
            direct: true
        }
        // source:{ name:'Zawgyi'}, target:{ name:'WinInnwa',direct:true }
        };
    function NO(e, t, a) {
        var r = eText(e);
        if (t) {
            gM[e].name = t;
            gf(e);
        }
        a = gM[e].name;
        if (!gM[e].hasOwnProperty("direct")) {
            if (Oa[a]) {
                if (Oa[a].wg && Oa[a].unicode) {
                    hV(a);
                    $(app.id.input).classList.remove("inactive");
                } else {
                    $(app.id.input).classList.add("inactive");
                }
            }
        }
        $(r).style.fontFamily = Oa[a] ? Oa[a].css.join(",") : "";
        $(r).style.fontSize = (Oa[a] ? Oa[a].QG : 13) + "pt";
    }
    function gf(e) {
        if ($(e).innerHTML === "") {
            var t = eCreate("li");
            var a = eCreate("p");
            var r = eCreate("ol");
            for (var i in Oa) {
                if (Oa[i]["wg"]) {
                    var n = eCreate("li");
                    n.setAttribute("id", i);
                    if (Oa[i].wg && Oa[i].unicode) n.classList.add("unicode");
                    if (i == gM[e].name) n.classList.add("active");
                    n.dataset.detail = Oa[i]["wW"];
                    n.appendChild(doc.createTextNode(Oa[i].QJ));
                    r.appendChild(n);
                }
            }
            a.appendChild(doc.createTextNode(gM[e].name));
            r.addEventListener("click", function(t) {
                var r = t.target || t.srcElement;
                var i = r.parentElement;
                if (r.dataset.detail && !r.classList.contains("active")) {
                    // console.log(elP.childNodes);
                    // console.log(elP.getElementsByClassName('active'));
                    // el.classList.add('active');
                    while (i.getElementsByClassName("active").length > 0) {
                        i.getElementsByClassName("active")[0].classList.remove("active");
                    }
                    r.classList.add("active");
                    gM[e].name = r.id;
                    a.innerHTML = r.innerHTML;
                    NO(e);
                }
                // direct
                                if (gM[e].hasOwnProperty("direct")) {
                    Qx();
                }
            });
            t.appendChild(a);
            t.appendChild(r);
            $(e).appendChild(t);
        } else {
            $(e).firstChild.firstChild.innerHTML = gM[e].name;
        }
    }
    // for (var O4 in Oa) {
    //   if (Oa[O4].wg && Oa[O4].unicode) wo += '<option value="' + O4 + '">' + Oa[O4].QJ + '<\/option>';
    // }
    gJ.int = true;
    var gv = "1.9.12.090705";
    var wB = {
        ynn: [ "$1င္း" ],
        yn: [ "$1င္", "$1င္း" ],
        ye: [ "$1ိုင္း", "$1ိုင္", "$1ိုင့္" ],
        y: [ "$1ိုင္", "$1ိုင္း", "$1ိုင့္" ],
        uz: [ "$1ြဇ္", "ေ$1ာဇ္" ],
        uu: [ "$1ူး" ],
        ut: [ "$1ြတ္", "$1ြပ္", "ေ$1ာတ္", "$1ြဋ္" ],
        urt: [ "$1ာတ္", "$1ာက္", "$1ာဟ္" ],
        urd: [ "$1ာတ္", "$1ာက္", "$1ာဟ္" ],
        urr: [ "$1ား" ],
        urk: [ "$1ာတ္", "$1ာက္", "$1ာဟ္" ],
        urh: [ "$1ာ့" ],
        urd: [ "$1ာဒ္", "$1ာ႒္" ],
        urb: [ "$1ာဘ္" ],
        ur: [ "$1ာ", "$1ား", "$1ာ့" ],
        unt: [ "$1ြန္႕", "$1ြံ႕", "$1ြမ့္" ],
        unn: [ "$1ြန္း", "$1ြမ္း", "$1န္း", "$1ြဏ္း" ],
        un: [ "$1ြန္", "$1ြန္း", "$1ြမ္", "$1ြံ", "$1ြဏ္", "$1ြဏ္း" ],
        umt: [ "$1ြမ့္" ],
        umm: [ "$1ြမ္း", "$1ြမ္" ],
        um: [ "$1ြမ္", "$1ြမ္း" ],
        uh: [ "$1ူ႕" ],
        u: [ "$1ူ", "$1ု", "$1ူ႕" ],
        t: [ "ေ$1ာက္" ],
        rr: [ "$1ား" ],
        rh: [ "$1ာ့" ],
        r: [ "$1ာ", "$1ား", "$1ာ့" ],
        oy: [ "$1ိြဳင္" ],
        ove: [ "$1ုဗ္" ],
        ov: [ "$1ုဗ္" ],
        out: [ "ေ$1ာက္", "ေ$1ာတ္", "ေ$1ာဂ္" ],
        ount: [ "ေ$1ာင့္" ],
        ounh: [ "ေ$1ာင့္" ],
        oung: [ "ေ$1ာင္", "ေ$1ာင္း" ],
        oun: [ "ေ$1ာင္", "ေ$1ာင္း", "ေ$1ာင့္" ],
        oun: [ "ေ$1ာင္", "ေ$1ာင္း" ],
        ou: [ "$1ိုး", "$1ို" ],
        oth: [ "$1ို႕" ],
        ote: [ "$1ုတ္", "$1ုပ္", "$1ုက္", "$1ုစ္", "$1ုဇ္", "$1ုဂ္", "$1ုဋ္" ],
        ot: [ "ေ$1ာ့", "$1ုတ္", "$1ုပ္", "$1ုက္", "$1ုစ္", "$1ုဇ္", "$1ုဂ္", "$1ုဋ္" ],
        ot: [ "$1ို႕", "ေ$1ာ့", "$1ိုယ့္" ],
        ort: [ "ေ$1ာ့" ],
        orh: [ "ေ$1ာ့" ],
        or: [ "ေ$1ာ္", "ေ$1ာ" ],
        ope: [ "$1ုပ္", "$1ုတ္" ],
        op: [ "$1ုပ္", "$1ုတ္" ],
        op: [ "$1ို႕", "ေ$1ာ့", "$1ိုယ့္" ],
        ooz: [ "$1ြဇ္", "ေ$1ာဇ္" ],
        oot: [ "$1ြတ္", "$1ြပ္" ],
        oont: [ "$1ြန့္", "$1ြမ့္" ],
        oonh: [ "$1ြန့္", "$1ြမ့္" ],
        oon: [ "$1ြန္း", "$1ြန္", "$1ြမ္း", "$1ြမ္" ],
        oomt: [ "$1ြမ့္", "$1ြန့္" ],
        oomh: [ "$1ြမ့္", "$1ြန့္" ],
        oom: [ "$1ြမ္း", "$1ြမ္" ],
        ood: [ "$1ြဒ္", "$1ြတ္" ],
        oo: [ "$1ိုး", "$1ူး" ],
        ont: [ "$1ြန္႔", "$1ြံ႕", "$1ြမ့္", "$1ုန္႕", "$1ံု႕" ],
        one: [ "$1ုန္း", "$1ုမ္း", "$1ုံး", "$1ုဥ္း", "$1ုန္", "$1ုမ္", "$1ုံ" ],
        on: [ "$1ြန္", "$1ြံ", "$1ံု", "$1ြဏ္" ],
        ol: [ "$1ိုလ္", "ေ$1ာ", "$1ိုဠ္" ],
        oke: [ "$1ုက္" ],
        ok: [ "$1ုက္" ],
        oi: [ "$1ိြဳင္" ],
        ohnh: [ "$1ုန္႕", "$1ုမ့္" ],
        ohn: [ "$1ုန္း", "$1ုမ္း" ],
        ohmh: [ "$1ုန္႕", "$1ုမ့္" ],
        ohm: [ "$1ုန္း", "$1ုမ္း" ],
        oh: [ "$1ို႕", "ေ$1ာ့", "$1ိုယ့္" ],
        oet: [ "$1ို႕" ],
        oeh: [ "$1ို႕" ],
        oe: [ "$1ိုး" ],
        ode: [ "$1ုဒ္", "$1ုဎ္" ],
        od: [ "$1ုဒ္", "$1ုဎ္" ],
        oav: [ "$1ုဗ္" ],
        oat: [ "$1ုတ္", "$1ုပ္", "$1ုက္", "$1ုစ္", "$1ုဇ္", "$1ုဂ္", "$1ုဋ္" ],
        oap: [ "$1ုပ္", "$1ုတ္" ],
        oant: [ "$1ုန္႕", "$1ုမ့္", "$1ံု႔", "$1ုဥ့္" ],
        oann: [ "$1ုန္း", "$1ုမ္း", "$1ံုး", "$1ုဥ္း" ],
        oanh: [ "$1ုန္႕", "$1ုမ့္", "$1ံု႔", "$1ုဥ့္" ],
        oan: [ "$1ုန္", "$1ုမ္", "$1ံု", "$1ုဏ္", "$1ုဥ္", "$1ုလ္" ],
        oak: [ "$1ုက္" ],
        oad: [ "$1ုဒ္", "$1ုဎ္", "$1ုသ္" ],
        oa: [ "$1ြာ" ],
        o: [ "$1ို", "$1ိုး", "$1ိုရ္", "$1ိုယ္", "$1ိုဠ္", "$1ိုဟ္" ],
        iz: [ "$1ဇ္", "$1ာဇ္" ],
        ite: [ "$1ိုက္" ],
        it: [ "$1စ္", "$1တ္", "ေ$1တ္", "ေ$1က္", "$1ဋ္", "ေ$1စ္" ],
        is: [ "$1စ္", "ေ$1စ္" ],
        is: [ "$1စ္", "$1တ္", "ေ$1တ္", "ေ$1က္", "$1ဋ္", "ေ$1စ္" ],
        int: [ "$1င့္", "$1ဥ့္" ],
        inn: [ "$1င္း", "$1ဥ္း" ],
        ing: [ "$1င္း", "$1ဥ္း" ],
        ine: [ "$1ိုင္", "$1ိုင္း", "$1ိုဏ္း" ],
        in: [ "$1င္", "$1င္း", "$1ဥ္", "ေ$1န္", "$1ဥ္း" ],
        ike: [ "$1ိုက္" ],
        ik: [ "$1စ္", "$1တ္", "ေ$1တ္", "ေ$1က္", "$1ဋ္", "ေ$1စ္" ],
        ii: [ "$1ီး", "$1ည္း", "$1ည့္" ],
        ih: [ "$1ည့္" ],
        ide: [ "$1ိုဒ္" ],
        id: [ "$1စ္" ],
        i: [ "$1ိ", "$1ီ", "$1ည္", "$1ည္း", "$1ည့္" ],
        g: [ "ေ$1ာင္", "ေ$1ာင္း" ],
        f: [ "$1္" ],
        eyy: [ "ေ$1း", "$1ည္း" ],
        eyt: [ "ေ$1့", "$1ည့္" ],
        eyh: [ "ေ$1့", "$1ည့္" ],
        ey: [ "ေ$1း", "$1ည္း" ],
        ey: [ "ေ$1", "$1ည္", "ေ$1း", "ေ$1့", "$1ည္း" ],
        et: [ "$1က္", "$1တ္", "$1ပ္" ],
        ert: [ "$1ာတ္", "$1ာက္", "$1ာဟ္" ],
        ert: [ "$1ာတ္", "$1ာက္", "$1ာဟ္" ],
        err: [ "$1ား" ],
        erk: [ "$1ာတ္", "$1ာက္", "$1ာဟ္" ],
        erh: [ "$1ာ့" ],
        erd: [ "$1ာဒ္", "$1ာ႒္" ],
        erb: [ "$1ာဘ္" ],
        er: [ "$1ာ", "$1ား", "$1ာ့" ],
        en: [ "$1ဲန္း", "$1ဲန္", "$1န္" ],
        elh: [ "$1ဲ့", "$1ယ့္", "$1ည့္" ],
        el: [ "$1ဲ", "$1ယ္", "$1ည္", "$1ည္း", "$1ဲ့", "$1ည့္" ],
        ek: [ "$1က္" ],
        eit: [ "$1ိတ္", "$1ိပ္", "$1ိက္", "$1ိဋ္", "$1ိသ္" ],
        eint: [ "$1ိန္႕", "$1ိမ့္" ],
        einn: [ "$1ိန္း", "$1ိမ္း", "$1ိဏ္း" ],
        einh: [ "$1ိန္႕", "$1ိမ့္" ],
        ein: [ "$1ိန္", "$1ိမ္", "$1ႎ", "$1ိင္", "$1ိဥ္", "$1ိဏ္", "$1ိလ္" ],
        eih: [ "ေ$1့", "$1ဲ့", "$1ယ့္", "$1ည့္" ],
        ei: [ "ေ$1း", "$1ဲ", "$1ယ္", "ေ$1", "$1ည္း", "$1ည္" ],
        eh: [ "$1ဲ့", "$1ည့္", "ေ$1့", "$1ဲ", "$1ည္" ],
        ee: [ "$1ီး", "$1ည္း" ],
        eck: [ "$1က္" ],
        ec: [ "$1က္" ],
        "e`": [ "$1ဲ့", "$1ဲ" ],
        e: [ "$1ီ", "$1ဲ", "$1ည္", "$1ယ္", "ေ$1", "ေ$1း", "$1ည့္", "$1ဲ့" ],
        ayy: [ "ေ$1း", "$1ည္း" ],
        ayt: [ "ေ$1့", "$1ည့္" ],
        ayh: [ "ေ$1့", "$1ည့္" ],
        aye: [ "ေ$1း", "$1ည္း" ],
        ay: [ "ေ$1", "$1ည္", "ေ$1း", "ေ$1့", "$1ည္း" ],
        aww: [ "ေ$1ာ" ],
        awt: [ "ေ$1ာ့" ],
        awn: [ "ေ$1ာန္" ],
        awh: [ "ေ$1ာ့" ],
        aw: [ "ေ$1ာ", "ေ$1ာ္", "ေ$1ာ့", "ေ$1ာဝ္" ],
        ave: [ "$1ိဗ္" ],
        av: [ "$1ဗ္" ],
        aut: [ "ေ$1ာက္", "ေ$1ာတ္" ],
        aunt: [ "ေ$1ာင့္" ],
        aunh: [ "ေ$1ာင့္" ],
        aung: [ "ေ$1ာင္", "ေ$1ာင္း" ],
        aun: [ "ေ$1ာင္", "ေ$1ာင္း", "ေ$1ာင့္" ],
        aun: [ "ေ$1ာင္", "ေ$1ာင္း" ],
        auk: [ "ေ$1ာက္", "ေ$1ာတ္" ],
        au: [ "ေ$1ာ" ],
        ath: [ "$1သ္" ],
        ate: [ "$1ိတ္", "$1ိပ္", "$1ိဇ္", "$1ိစ္", "$1ိက္", "$1ိဋ္", "$1ိသ္" ],
        at: [ "$1တ္", "$1က္", "$1ပ္", "$1ဟ္", "$1ဋ္" ],
        art: [ "$1ာတ္", "$1ာက္", "$1ာဟ္" ],
        art: [ "$1ာတ္", "$1ာက္", "$1ာဟ္" ],
        arr: [ "$1ား" ],
        arnn: [ "$1ာန္း", "$1ာဏ္း" ],
        arn: [ "$1ာန္", "$1ာဏ္", "$1ာဟ္" ],
        arl: [ "$1ာယ္", "$1ာည္" ],
        ark: [ "$1ာတ္", "$1ာက္", "$1ာဟ္" ],
        arh: [ "$1ာ့" ],
        ard: [ "$1ာဒ္", "$1ာ႒္" ],
        arb: [ "$1ာဘ္" ],
        ar: [ "$1ာ", "$1ား", "$1ာ့" ],
        ape: [ "$1ိပ္" ],
        ap: [ "$1ပ္" ],
        ant: [ "$1န္႕", "$1ံ့", "$1မ့္" ],
        ann: [ "$1န္း", "$1မ္း", "$1ဏ္း" ],
        an: [ "$1န္", "$1ံ", "$1မ္", "$1ဏ္", "$1လ္" ],
        amm: [ "$1မ္း" ],
        am: [ "$1မ္", "$1မ္း", "$1န္", "$1ံ" ],
        alh: [ "$1ယ့္", "$1ဲ့", "$1ည့္", "$1ဲ", "$1ည္" ],
        al: [ "$1ယ္", "$1ဲ", "$1ည္", "$1ည္း", "$1ဲ့", "$1ည့္", "$1လ္" ],
        ake: [ "$1ိက္", "$1ိတ္" ],
        ak: [ "$1က္" ],
        aiv: [ "$1ိဗ္" ],
        ait: [ "$1ိတ္", "$1ိပ္", "$1ိဇ္", "$1ိစ္", "$1ိက္" ],
        aid: [ "$1ိတ္", "$1ိပ္", "$1ိက္", "$1ိဋ္", "$1ိသ္" ],
        aip: [ "$1ိပ္" ],
        aint: [ "$1ိန္႕", "$1ိမ့္" ],
        ainn: [ "$1ိန္း", "$1ိမ္း", "$1ိဏ္း" ],
        ainh: [ "$1ိန္႕", "$1ိမ့္" ],
        aing: [ "$1ိုင္", "$1ိုင္း" ],
        ain: [ "$1ိန္", "$1ိမ္", "$1ႎ", "$1ိင္", "$1ိဥ္", "$1ိဏ္", "$1ိလ္" ],
        aik: [ "$1ိက္", "$1ိတ္" ],
        aid: [ "$1ိဒ္" ],
        ai: [ "$1ိုင္း", "$1ိုင္", "$1ိုဏ္း", "$1ိုင့္", "ေ$1" ],
        ag: [ "$1ဂ္" ],
        aeh: [ "ေ$1့", "$1ည့္", "$1ဲ့" ],
        ae: [ "$1ယ္", "$1ဲ", "ေ$1", "$1ည္", "ေ$1း" ],
        ade: [ "$1ိဒ္" ],
        ad: [ "$1ဒ္", "$1ဎ္" ],
        ack: [ "$1က္" ],
        ac: [ "$1က္" ],
        ab: [ "$1ဘ္" ],
        "a`": [ "$1ဲ့", "$1ဲ" ],
        a: [ "$1", "$1ာ့" ],
        "`": [ "$1ဲ့", "$1ဲ" ]
    };
    var wU = {
        zz: [ "စ်" ],
        zw: [ "ဇြ" ],
        zh: [ "စ်" ],
        z: [ "ဇ", "စ်" ],
        yy: [ "ယ", "ယ်" ],
        yw: [ "ရြ", "ယြ" ],
        yh: [ "ယွ" ],
        yh: [ "ယ", "ယ်" ],
        y: [ "ရ", "ယ", "လ်", "ယ်" ],
        x: [ "ဆ", "စ" ],
        wh: [ "ဝွ" ],
        w: [ "ဝ" ],
        v: [ "ဗ", "ဘ" ],
        u: [ "အ" ],
        ty: [ "တ်", "ၾတ" ],
        tw: [ "တြ" ],
        tt: [ "ဋ" ],
        tr: [ "တ်", "ၾတ" ],
        thw: [ "သြ" ],
        th: [ "သ" ],
        t: [ "တ", "ဋ", "ထ" ],
        sy: [ "ၾဆ" ],
        sw: [ "စြ", "ဆြ" ],
        ss: [ "ဆ" ],
        shw: [ "ရႊ" ],
        sh: [ "ရွ", "လွ်", "သွ်" ],
        s: [ "စ", "ဆ" ],
        r: [ "ရ", "ယ", "လ်" ],
        q: [ "က" ],
        py: [ "ျပ", "ပ်" ],
        pw: [ "ပြ" ],
        phy: [ "ျဖ", "ဖ်" ],
        phw: [ "ဖြ" ],
        ph: [ "ဖ" ],
        p: [ "ပ" ],
        o: [ "အ" ],
        ny: [ "ည", "ျင", "ဉ" ],
        nw: [ "ႏြ" ],
        nn: [ "ဏ" ],
        nhy: [ "ညွ", "ျငွ", "ဥွ" ],
        nhw: [ "ႏႊ" ],
        nhg: [ "ငွ" ],
        nh: [ "ငွ", "ႏွ", "ဏွ" ],
        ngw: [ "ငြ" ],
        ngh: [ "ငွ" ],
        ng: [ "င" ],
        n: [ "န", "ဏ" ],
        my: [ "ျမ", "မ်" ],
        mw: [ "မြ", "ျမြ" ],
        mhy: [ "မွ်", "ျမွ" ],
        mhw: [ "မႊ", "ျမႊ" ],
        mh: [ "မွ" ],
        m: [ "မ" ],
        ly: [ "လ်", "လွ်" ],
        lw: [ "လြ", "လႊ" ],
        ll: [ "ဠ" ],
        lhy: [ "လွ်", "လ်" ],
        lhw: [ "လႊ" ],
        lh: [ "လွ", "ဠွ" ],
        l: [ "လ", "ဠ" ],
        kyw: [ "ၾကြ", "ကြၽ" ],
        ky: [ "က်", "ၾက" ],
        kw: [ "ကြ" ],
        khw: [ "ခြ" ],
        kh: [ "ခ" ],
        k: [ "က", "ခ" ],
        j: [ "ဂ်", "ျဂ" ],
        i: [ "အ" ],
        hw: [ "ဟြ" ],
        htw: [ "ထြ" ],
        htt: [ "ဌ" ],
        ht: [ "ထ", "ဌ", "႒" ],
        hs: [ "ဆ" ],
        hnw: [ "ႏႊ" ],
        hn: [ "ႏွ", "ဏွ" ],
        hmy: [ "မွ်", "ျမွ" ],
        hmw: [ "မႊ", "ျမႊ" ],
        hm: [ "မွ" ],
        hly: [ "လွ်", "လ်" ],
        hlw: [ "လႊ" ],
        hl: [ "လွ", "ဠွ" ],
        hdd: [ "ဎ" ],
        hd: [ "ဍ", "ဎ" ],
        h: [ "ဟ" ],
        gy: [ "ဂ်", "ျဂ", "ၾက" ],
        gw: [ "ဂြ" ],
        gh: [ "ဃ" ],
        gg: [ "ဃ" ],
        g: [ "ဂ", "က", "ဃ" ],
        fy: [ "ျဖ", "ဖ်" ],
        fw: [ "ဖြ", "ဘြ" ],
        f: [ "ဖ" ],
        e: [ "အ" ],
        dw: [ "ဒြ", "ျဒ" ],
        dr: [ "ဒြ", "ျဒ" ],
        dd: [ "ဓ" ],
        d: [ "ဒ", "ဓ", "တ", "ဍ", "ဎ" ],
        chw: [ "ခြၽ", "ျခြ" ],
        ch: [ "ခ်", "ျခ" ],
        c: [ "က" ],
        by: [ "ဗ်", "ျဗ", "ဘ်" ],
        bw: [ "ဘြ", "ဗြ", "ပြ" ],
        b: [ "ဘ", "ဗ", "ပ" ],
        a: [ "အ" ]
    };
    var wj = [ [ "([^ျၾ][ခဂငဒပဝ၀][ၠ-ၼႇႇွုူႈႉြႊ]?)ာ", "$1ါ" ], [ "^([ခဂငဒပဝ၀][ၠ-ၼႇႇွုူႈႉြႊ]?)ာ", "$1ါ" ], [ "ါ္", "ၚ" ], [ "န([ံိဲ]?[ၠ-ၼႇွုူႈႉြႊ])", "ႏ$1" ], [ "([ၠ-ၼႇွုူႈႉြႊန်ဳဴ].?)[့႔]", "$1႕" ], [ "([ျၾ-ႄ][က-အႏ႐][ိြွႊ]?)ု", "$1ဳ" ], [ "([ျၾ-ႄ][က-အႏ႐][ိြွႊ]?)ူ", "$1ဴ" ], [ "([ဈ-ဍဠဥ်ၠ-ၽႅ႑-႓][ိြွႊ]?)ု", "$1ဳ" ], [ "([ဈ-ဍဠဥ်ၠ-ၽႅ႑-႓][ိြွႊ]?)ူ", "$1ဴ" ], [ "ွ([ံိႎဲ]?)ု", "$1ႈ" ], [ "ွ([ံိႎဲ]?)ူ", "$1ႉ" ], [ "ရ([ံိႎဲ]?[ုူႈႉ])", "႐$1" ], [ "ွ([ိႎဲၽ်]?)ွ", "ွ$1" ], [ "ြွ|ွြ|ႊွ", "ႊ" ], [ "်ြ", "ြၽ" ], [ "[ွႇ]([ိီ်ၽ]?)ြ", "ႊ$1" ], [ "်ွ", "ွ်" ], [ "([ျၾ].{0,2})ွ", "$1ႇ" ], [ "([ဝြႊ].{0,2})ြ", "$1" ], [ "([ဥ])[ုဳ]", "$1" ], [ "ၤ(.{0,2})ိ", "ႋ$1" ], [ "ၤ(.{0,2})ီ", "ႌ$1" ], [ "ာ႕", "ာ့" ], [ "ၾ([ကဃဆဏတထဘယလသဟ][ံိႎဲ]?ြ)", "ႂ$1" ], [ "([^ျၾ][ခဂငဒပဝ၀][ၠ-ၼႇႇွုူႈႉြႊ]?)ာ္", "$1ၚ" ] ];
    var wp = [ [ "[ၿႁႃ]", "ျ" ], [ "[ႀႂႄ]", "ၾ" ], [ "[့႔႕]+", "့" ], [ "s+([ါ-ွ]+)", "$1" ], [ "(.?[ိံ].?)[ူ]", "$1ု" ], [ "ဳ", "ု" ], [ "ဴ", "ူ" ], [ "([ျၾ-ႄ][က-အႏ႐][ိြွႊ]?)ု", "$1ဳ" ], [ "([ျၾ-ႄ][က-အႏ႐][ိြွႊ]?)ူ", "$1ဴ" ], [ "([ဈ-ဍဠဥ်ၠ-ၽႅ႑-႓][ိြွႊ]?)ု", "$1ဳ" ], [ "([ဈ-ဍဠဥ်ၠ-ၽႅ႑-႓][ိြွႊ]?)ူ", "$1ဴ" ], [ "([ကဃဆဏတထဘယလသဟ][ံိႎဲ]?)ၲ", "$1ၱ", "ၱ", "ၲ" ], [ "([ကဃဆဏတထဘယလသဟ][ံိႎဲ]?)ၴ", "$1ၳ", "ၳ", "ၴ" ], [ "([ကဃဆဏတထဘယလသဟ][ံိႎဲ]?)႓", "$1ၻ", "ၻ", "႓" ], [ "[ျၿ-ႃ]([ကဃဆဏတထဘယလသဟ])", "ၾ$1" ], [ "န([ံိဲ]?[ၠ-ၼႇွုူႈႉြႊ])", "ႏ$1" ] ];
    var wu = [ [ "([^ျၾ])?([ခဂငဒပဝ])ာ", "$1$2ါ" ], [ "ါ္", "ၚ" ], [ "ၾ([ကအ])(ြ)", "ႂ$1$2" ], [ "([ျၾ-ႄ][က-အႏ႐][ိြွႊ]?)ု", "$1ဳ" ], [ "([ျၾ-ႄ][က-အႏ႐][ိြွႊ]?)ူ", "$1ဴ" ], [ "([ဈ-ဍဠဥ်ၠ-ၽႅ႑-႓][ိြွႊ]?)ု", "$1ဳ" ], [ "([ဈ-ဍဠဥ်ၠ-ၽႅ႑-႓][ိြွႊ]?)ူ", "$1ဴ" ], [ "([ြ][ိ-ံ]?)့", "$1႕" ], [ "[ွႇ]([ိီ်ၽ]?)ြ", "ႊ$1" ], [ "န([ံိဲ]?[ၠ-ၼႇွုူႈႉြႊ])", "ႏ$1" ] ];
    var w9 = [ [ "အု", "ဥ" ], [ "အိ(?![ု])", "ဣ" ], [ "ေအာ(?![့္])", "ဩ" ] ];
    var wS = [ [ "တစ္", "ႏွစ္", "သံုး", "ေလး", "ငါး", "ေျခာက္", "ခုႏွစ္", "ရွစ္", "ကိုး" ], [ [ "ဆယ္", "ဆယ့္" ], [ "ရာ", "ရာ့" ], [ "ေထာင္", "ေထာင့္" ], [ "ေသာင္း", "ေသာင္း" ], [ "သိန္း", "သိန္း" ], [ "သန္း", "သန္း" ], [ "ကုေဋ", "ကုေဋ" ] ], "၀၁၂၃၄၅၆၇၈၉" ];
    var wI = [ [ "kyarr", "က်္ား", -1 ], [ "kyunote", "ကြၽႏု္ပ္", -1 ], [ "nhite", "၌", -1 ], [ "hnite", "၌", -1 ], [ "shat", "ယွက္", -1 ], [ "nyin", "ညာဥ္", -1 ], [ "shin", "ယွဥ္", -1 ], [ "kyar", "က်္ာ", -1 ], [ "yway", "၍", -1 ], [ "umm", "အမ္" ], [ "imm", "အင္းမ္..." ], [ "yin", "ယာဥ္", -1 ], [ "yin", "ယ်ာဥ္", -1 ], [ "ywe", "၍", -1 ], [ "d", "ဒီ" ], [ "u", "ယူ" ], [ "own", "အံုး", -1 ], [ "it", "ဧတ္" ], [ "el", "ဧည့္" ], [ "ei", "ဣ" ], [ "or", "ဪ", -1 ], [ "ei", "၏" ], [ "ei", "ဤ" ], [ "oo", "ဥ" ], [ "ah", "အ" ], [ "aw", "ဪ" ], [ "ay", "ဧ" ], [ "ag", "ေအာင္" ], [ "oo", "ဦး" ], [ "oh", "အိုး" ], [ "r", "အာ" ], [ "ae", "အဲ" ], [ "ei", "အိ" ], [ "ei", "အီ" ], [ "um", "အမ္" ], [ ".", "။" ], [ ",", "၊" ], [ ",", "ျပီး" ], [ ".", "ျပီ" ], [ "4", "၎", -1 ], [ ".", "ဤ" ], [ ".", "သည္" ], [ ".", "၏" ], [ ",", "၌" ], [ ",", "၍" ], [ ",", "ႏွင့္" ], [ "f", "--္", -1 ], [ "b", "ျပီ" ], [ "o", "အို" ], [ "p", "ျပီ" ], [ "e", "ဤ" ], [ "a", "အ" ], [ "a", "ေအ", -1 ], [ "u", "ဥ" ], [ "u", "ဦး" ], [ "h", "--့", -1 ], [ ";", "း" ], [ "eu", "အူ" ], [ "u", "အူ" ], [ "u", "အု" ], [ "a", "အစ္", -1 ], [ "tun", "ထြန္း" ] ];
    var wn = [ "[ဍဋဌဣ][ႇွုူႈႉြႊ]", "[ဠ][ြႊ]", "[ၠ-ၼ႒][ႇွႈႉြႊ]" ];
    var w2 = [ "က", "ခ", "ဂ", "ဃ", "င", "စ", "ဆ", "ဇ", "ဈ", "ဉ", "ၫ", "ည", "ဋ", "ဌ", "႒", "ဍ", "ဎ", "ဏ", "တ", "ထ", "ဒ", "ဓ", "ႏ", "န", "ပ", "ဖ", "ဗ", "ဘ", "မ", "ယ", "႐", "ရ", "လ", "ဝ", "သ", "ႆ", "ဟ", "ဠ", "အ", "--ဿ", "- ၠ", "- ၡ", "- ၢ", "- ၣ", "- ၥ", "- ၦ", "- ၧ", "- ၨ", "- ၩ", "- ၬ", "- ၭ", "- ၰ", "- ၱ", "- ၲ", "- ၳ", "- ၴ", "- ၵ", "- ၶ", "- ၷ", "- ၸ", "- ၹ", "- ၺ", "- ၻ", "- ႓", "- ၼ", "- ႅ", "၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉", "ေ", "- ိ", "- ီ", "- ္", "- ၤ", "- ာ", "- ါ", "- ၚ", "- ဲ", "- ြ", "- ႊ", "- ံ", "- း", "- ်", "- ၽ", "ျ- ", "ၾ- ", "ၿ- ", "ႀ- ", "ႁ- ", "ႂ- ", "ႃ- ", "ႄ- ", "- ့", "- ႔", "- ႕", "- ု", "- ူ", "- ဳ", "- ဴ", "- ႈ", "- ႉ", "- ွ", "- ႇ", "- ႋ", "- ႌ", "- ႎ", "- ႍ", "ဣ", "ဤ", "ဥ", "ၪ", "ဦ", "ဧ", "ဩ", "ဪ", "၍", "၌", "၎", "၏", "႗", "ၮ", "ၯ", "႑", "- ႖", "- ၊", "- ။" ];
    var w_ = [ "က", "ခ", "ဂ", "ဃ", "င", "စ", "ဆ", "ဇ", "ဈ", "ဉ", "ည", "ဋ", "ဌ", "ဍ", "ဎ", "ဏ", "တ", "ထ", "ဒ", "ဓ", "န", "ပ", "ဖ", "ဗ", "ဘ", "မ", "ယ", "ရ", "လ", "ဝ", "သ", "ဿ", "ဟ", "ဠ", "အ", "၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉", "ေ", "ိ", "ီ", "ု", "ူ", "(--္)", "်", "ာ", "ါ", "ဲ", "ံ", "့", "း", "ျ", "ြ", "ွ", "ှ", "ဣ", "ဤ", "ဥ", "ဦ", "ဧ", "ဩ", "ဪ", "၍", "၌", "၎င်း", "၏", "-၊", "-။" ];
    var OD = new Object();
    function NP(e) {
        OD.x = e.id;
        if (!OD[OD.x]) return;
        var t = OD[OD.x]["KV"];
        if (!t) {
            if ($("burmese") && !OD[OD.x]["self"]) $("burmese").value = "";
            Kx(OD.x + "drop");
            return;
        }
        if (/\d/.test(t) && OD.gz) {
            OD[OD.x]["KV"] = "";
            Kx(OD.x + "drop");
            return;
        }
        var a = gW(e, t);
        var r = a.length;
        a = gF(e, t, a);
        a = Nb(e, t, a);
        a = g3(e, t, a);
        if (!OD[OD.x]["hq"]) {
            OD[OD.x]["hE"] = a.length == 0 ? OD[OD.x]["hE"] + 1 : 0;
            if (OD[OD.x]["hE"] == 0) {
                OD[OD.x]["w6"] = [];
                OD[OD.x]["w6"][0] = a[0];
            }
            if (OD[OD.x]["hE"] == 1 && t.length > OD[OD.x]["hE"]) {
                var i = OD[OD.x]["KV"];
                OD[OD.x]["KV"] = OD[OD.x]["w6"][0][0];
                OD[OD.x]["list"] = [ OD[OD.x]["w6"][0] ];
                OD[OD.x]["Km"] = 1;
                NB(e);
                OD[OD.x]["KV"] = t.substring(t.length - OD[OD.x]["hE"], t.length);
                OD[OD.x]["hE"] = 0;
            }
        }
        N8(e, t, a);
        // $("col" + OD.x + "0").style.width = /\d+/.test(KV) ? "auto" : '150';
        }
    function Nb(wx, KV, Kf) {
        var ON;
        var OQ;
        var Og;
        var Kc;
        var K5;
        var K0;
        var Kr;
        var help = "" + KV + "";
        OD[OD.x]["lower"] = KV.charCodeAt(0) > 64 && KV.charCodeAt(0) < 91 ? true : false;
        if (/^[aeiou]/i.test(KV)) {
            KV = KV.replace(/^([aeiou])/, "$1$1");
        }
        var KX = KV.toLowerCase();
        var wH = KX[0];
        var i = 0;
        while (wU[KX.substr(0, ++i)] && i <= KX.length) wH = KX.substr(0, i);
        var KT = KX.slice(i - 1) || "a";
        if (!wB[KT]) return Kf;
        ON = eval("/^" + wH + "/i");
        for (var Oy = 0; Oy < wU[wH].length; Oy++) {
            Kc = wU[wH][Oy];
            if (OD[OD.x]["lower"]) {
                if (wC(OD[OD.x]["plChar"]) != 4) {
                    Kc = h4(wU[wH][Oy], OD[OD.x]["gM"]);
                }
            }
            K5 = KV.replace(ON, Kc);
            OQ = eval("/" + "(.*)" + KT + "$/");
            for (var n = 0; n < wB[KT].length; n++) {
                K0 = K5.replace(OQ, wB[KT][n]);
                if (!/\w/.test(K0)) {
                    var exist = false;
                    for (var p = 0; p < Kf.length; p++) {
                        if (Kf[p][1] === K0) {
                            exist = true;
                            break;
                        }
                    }
                    if (!exist) {
                        var gY = false;
                        for (var OC = 0; OC < wn.length; OC++) {
                            if (eval("/" + wn[OC] + "/").test(K0)) {
                                gY = true;
                                break;
                            }
                        }
                        if (!gY && OD[OD.x]["hq"]) {
                            if (gQ[hz] && K0.length > 1) {
                                if (gQ[hz].indexOf("," + K0 + ",") == -1) gY = true;
                            }
                        }
                        if (!gY) {
                            Kf[Kf.length] = [ help, (OD[OD.x]["lower"] ? "---" : "") + K0 ];
                            OD[OD.x]["list"][Kf.length - 1] = eval(Kf[Kf.length - 1]);
                        }
                    }
                    if (Kf.length > 20) return Kf;
                }
            }
        }
        var Kw = "";
        for (var i = 0; i < Kf.length; i++) {
            Kw += (i > 0 ? "||" : "") + Kf[i][1];
        }
        for (var l = 0; l < wj.length; l++) {
            Og = eval("/" + wj[l][0] + "/g");
            if (Og.test(Kw)) {
                Kw = Kw.replace(Og, wj[l][1]);
            }
        }
        Kw = Kw.split("||");
        for (var i = 0; i < Kf.length; i++) {
            Kf[i][1] = Kw[i];
        }
        return Kf;
    }
    function g3(wx, KV, Kf) {
        for (var OM = 0; OM < Kf.length; OM++) {
            for (var OC = 0; OC < w9.length; OC++) {
                var OL = eval("/" + w9[OC][0] + "/");
                if (OL.test(Kf[OM][1])) {
                    var K0 = Kf[OM][1].replace(OL, w9[OC][1]);
                    var exist = false;
                    for (var Oe = 0; Oe < Kf.length; Oe++) {
                        if (Kf[Oe][1] == K0) {
                            exist = true;
                            break;
                        }
                    }
                    if (!exist) {
                        var gY = false;
                        for (var Oe = 0; Oe < wn.length; Oe++) {
                            if (eval("/" + wn[Oe] + "/").test(K0)) {
                                gY = true;
                                break;
                            }
                        }
                        if (!gY) {
                            Kf[Kf.length] = [ Kf[OM][0], K0 ];
                        }
                    }
                }
            }
        }
        var Q3 = [];
        for (var OM = 0; OM < Kf.length; OM++) {
            if (Kf[OM].length >= 3) {
                if (Kf[OM][2] != -1) {
                    Q3[Q3.length] = Kf[OM];
                }
            } else {
                Q3[Q3.length] = Kf[OM];
            }
        }
        for (var OM = 0; OM < Kf.length; OM++) {
            if (Kf[OM].length >= 3) {
                if (Kf[OM][2] == -1) {
                    Q3[Q3.length] = Kf[OM];
                }
            }
        }
        Kf = Q3;
        if (OD[OD.x]["gM"] != "Zawgyi") {
            var Ot = "";
            for (var OM = 0; OM < Kf.length; OM++) {
                Ot += (OM > 0 ? "\f" : "") + Kf[OM][1];
            }
            Ot = Ot.Ng("Zawgyi", OD[OD.x]["gM"], {
                Qv: true
            }).split("\f");
            for (var OM = 0; OM < Kf.length; OM++) {
                Kf[OM][1] = Ot[OM];
            }
        }
        OD[OD.x]["list"] = Kf;
        return Kf;
    }
    function gW(wx, KV) {
        var Nu = 0;
        var Kf = [];
        var qtmp = KV.Ql();
        var isBur = OD[OD.x]["isburmese"] ? 1 : 0;
        var re = eval("/^" + qtmp + "/");
        for (var i = 0; i < wI.length; i++) {
            if (Nu > 10) break;
            if (re.test(wI[i][isBur])) {
                OD[OD.x]["list"][Nu] = Kf[Nu] = wI[i].slice();
                Nu++;
            }
        }
        return Kf;
    }
    function gF(wx, KV, Kf) {
        if (!isNaN(KV) && !/[^\d]+/.test(KV) && !OD["ignore"]) {
            var Oh = KV.gp();
            Kf[Kf.length] = [ KV, Oh ];
            OD[OD.x]["list"][Kf.length - 1] = eval(Kf[Kf.length - 1]);
            var dig = "";
            var az = true;
            var O0 = KV.reverse();
            var d = 0;
            if (O0.length <= wS[1].length + 1) {
                for (var i = 0; i < O0.length; i++) {
                    if (d > 0) az = false;
                    d = parseInt(O0.charAt(i));
                    if (i == 0 && d > 0) {
                        dig = wS[0][d - 1];
                    } else if (d > 0) {
                        dig = wS[0][d - 1] + wS[1][i - 1][az ? 0 : 1] + dig;
                    }
                }
            }
            if (dig != "") {
                Kf[Kf.length] = [ KV, dig ];
                OD[OD.x]["list"][Kf.length - 1] = eval(Kf[Kf.length - 1]);
            }
        }
        return Kf;
    }
    var K3 = {
        Myanmar3: [ "ဘယ်ညာ Arrow Key ကိုသုံးပြီးColumnကိုရွေးပါ။", "အပေါ်အောက် Arrow Key ဖြင့်စာလုံးတစ်ခုစီရွေးသွားနိုင်ပါသည်။", "Enter ကီး Tab ကီးစသည်တို့ဖြင့် စာလုံးကို အတည်ပြုနိုင်ပါသည်။", "ဝ မှ ၉ အထိ Shortcut ကီးများကိုသုံးပါ။", "ပုဒ်ကလေးပုဒ်မအတွက်,နှင့် . ကိုသုံးပါ။", '"စ်က်" စသည့်တို့ကိုရိုက်ချင်လျှင် sf,kf စသည်ဖြင့်ရိုက်ပါ။', "အောက်ကမြစ်သပ်သပ်ရိုက်ချင်လျှင် h ဖြင့်ရိုက်ပါ။", "ဝစ်စပေါက်သပ်သပ်ရိုက်ချင်လျှင်;ဖြင့်ရိုက်ပါ။", "ပတ်ဆင့်များကို ရိုက်ချင်လျှင် စာလုံးအကြီးဖြင့်ရိုက်ပါ။ tak Ka thol - တက္ကသိုလ်", "မောင် ကို mg, အောင် ကို ag,ကာ ကို kr, ပါကို pr ဖြင့်ရိုက်နိုင်သည်။", "ဉာဏ်ကို nyarn, ပါယ် ကို parl စသည်ဖြင့်ရိုက်ပါ။", "မြန်မာစာလုံး မရွေးလိုပါက Esc နှိပ်နိုင်ပါသည်။" ]
    };
    function hO() {
        // if (!K3[hz]) {
        //   K3[hz] = K3["Myanmar3"];
        // }
        if (!K3[hz]) {
            K3[hz] = K3["Myanmar3"].join("\f").Ng("Myanmar3", hz, {
                Qv: true
            }).split("\f");
        }
        return K3[hz][Math.round(Math.random() * (K3[hz].length - 1))];
    }
    function N8(e, t, a) {
        var r = 0;
        var i = eEmpty($(OD.x + "drop"));
        var n = eCreate("div");
        var O = eCreate("ol");
        // console.log('N8');
                O.setAttribute("id", "col" + OD.x + "0");
        O.setAttribute("class", "gH");
        if (OD[OD.x]) {
            if (OD[OD.x].K3) {
                // var pHelp = eCreate('p');
                // pHelp.appendChild(doc.createTextNode(hO()));
                // pHelp.setAttribute('id','help'+OD.x);
                // pHelp.setAttribute('class','ge');
                // Ks.appendChild(pHelp);
                O.setAttribute("data-title", hO());
            }
            if (OD[OD.x].gM) {
                if (Oa[OD[OD.x].gM]) {
                    O.style.fontFamily = Oa[OD[OD.x].gM].css.join(",");
                }
            }
        }
        // Ks += '<div id="col' + OD.x + '0" class="gH">';
        // if (Kf.length == 0) Ks = "&lt;No Items available>";
                if (a.length == 0) {
            var o = eCreate("li");
            o.appendChild(doc.createTextNode("&lt;No Items available"));
            O.appendChild(o);
        }
        for (var s = 0; s < a.length; s++) {
            // if (i % 10 == 0 && i > 9 && i != Kf.length) {
            //   Ks += '<\/div><div id="col' + OD.x + (i / 10) + '" class="gH">';
            // }
            var l = OD[OD.x]["isburmese"] ? a[s][0] : " - " + a[s][0].replace(t, t);
            var o = eCreate("li");
            o.onmousedown = function() {
                NB();
            };
            o.onmouseup = function() {
                Qp();
            };
            o.onmouseover = function(e) {
                N2(e.target.dataset.fn);
            };
            o.onmouseout = function(e) {
                e.target.classList.remove("off");
            };
            o.appendChild(doc.createTextNode(a[s][1]));
            o.setAttribute("id", "wO" + OD.x + s);
            o.setAttribute("data-fn", s);
            o.setAttribute("data-en", l);
            O.appendChild(o);
        }
        n.appendChild(O);
        i.appendChild(n);
        if (a.length >= 1) {
            wQ(OD.x + "drop");
            OD[OD.x]["hC"] = -1;
        }
        OD[OD.x]["Km"] = a.length;
        if (!w1) {
            var f = OX(OD.x);
            var u = f[1] - i.offsetHeight - 2;
            var h = 0;
            if (OD[OD.x]["Qe"]) {
                var c = e.value.substring(0, e.selectionEnd).split(/\n/);
                var g = 1;
                var d = $(OD.x + "span");
                d.innerHTML = c[0][0];
                var v = 0;
                var D = d.offsetHeight;
                for (var p = 0; p < c.length; p++) {
                    var w = 0;
                    for (var K = 0; K < Math.floor(c[p].length / 200); K++) {
                        d.innerHTML = c[p].substring(K * 200, K * 200 + 200);
                        w += d.offsetWidth;
                    }
                    d.innerHTML = c[p].slice(K * 200);
                    w += d.offsetWidth;
                    if (p == c.length - 1) {
                        g += Math.floor(w / e.offsetWidth);
                        v = w % e.offsetWidth;
                    } else {
                        g += Math.ceil(w / e.offsetWidth) || 1;
                    }
                }
                if (doc.body.clientHeight + doc.body.scrollTop > e.offsetTop + e.offsetHeight + i.offsetHeight) {
                    var x = D * g - e.scrollTop;
                    h = f[1] + x;
                }
                i.style.left = f[0] + v + 8 - e.scrollLeft;
                if (i.offsetLeft + i.offsetWidth > doc.body.clientWidth) i.style.left = doc.body.clientWidth - i.offsetWidth;
                i.style.top = u < 0 ? h : u;
            } else if (OD[OD.x]["hc"]) {
                i.style.left = f[0];
                i.style.top = f[1] + e.offsetHeight;
            } else {
                if (doc.body.clientHeight + doc.body.scrollTop > e.offsetTop + e.offsetHeight + i.offsetHeight) {
                    h = f[1] + e.offsetHeight;
                }
                i.style.left = f[0];
                i.style.top = u < 0 ? h : u;
            }
        }
    }
    function Ns(e) {
        var t = e.target ? e.target : e.srcElement;
        OD.x = t.id;
        OD["ignore"] = false;
        var a = e.keyCode ? e.keyCode : e.charCode;
        OD.ctrl = e.ctrlKey || e.ctrl;
        OD.alt = e.altKey || e.altLeft;
        OD.shift = e.shiftKey || e.shift || e.shiftLeft;
        OD.gz = (OD.alt ? 1 : 0) | (OD.ctrl ? 2 : 0) | (OD.shift ? 4 : 0);
        OD.hR = a >= 112 && a <= 123 || a < 20 || a >= 37 && a <= 40 || a >= 33 && a <= 36 || a == 45 || a == 46;
        OD.QB = 0;
        OD.Qg = a;
        if (a == 13) {
            var r = OD[OD.x]["Km"] == 0;
            if (!r) {
                NB(t);
                if (QT) OD.QB = 1;
                return false;
            }
            return r;
        } else if (a == 113) {
            var i = $("chk" + t.id + "K6");
            // Kg.classList.toggle('active',Kg.classList.contains('active') != false);
                        i.classList.toggle("active", !i.classList.contains("active"));
            // Kg.checked = !Kg.checked;
                        gD(i, t.id, "K6");
            return false;
        } else if (a == 38 && OD[OD.x]["Km"] > 0) {
            OD[OD.x]["hC"] = OD[OD.x]["hC"] - 1;
            N2(OD[OD.x]["hC"]);
            if (QT) OD.QB = 1;
            return !OD[OD.x]["K6"];
        } else if (a == 40) {
            if (!OD[OD.x]["KV"]) return;
            if (OD[OD.x]["Km"] == 0) {
                NP(t);
            } else if (OD[OD.x]["hC"] < OD[OD.x]["Km"] - 1) {
                OD[OD.x]["hC"] = OD[OD.x]["hC"] + 1;
                N2(OD[OD.x]["hC"]);
            }
            if (QT) OD.QB = 1;
            return !OD[OD.x]["K6"];
        } else if (a == 32) {
            if (OD[OD.x]["K6"]) {
                if (!OD[OD.x]["KV"]) return;
                if (OD[OD.x]["Km"] > 1) {
                    OD[OD.x]["hC"] += 1;
                    if (OD[OD.x]["hC"] >= OD[OD.x]["Km"]) OD[OD.x]["hC"] = 0;
                    N2(OD[OD.x]["hC"]);
                    // console.log(wV,'32-1');
                                } else {
                    hX(t);
                    // console.log(wV,'32-2');
                                }
                if (QT) OD.QB = 1;
                return false;
            }
        } else if (a == 9) {
            hX(t);
            if (QT) t.blur();
            return false;
        } else if (a == 37 && OD[OD.x]["Km"] > 10 && OD[OD.x]["hC"] > -1) {
            OD[OD.x]["hC"] = OD[OD.x]["hC"] > 10 ? OD[OD.x]["hC"] - 10 : 0;
            N2(OD[OD.x]["hC"]);
            if (QT) OD.QB = 1;
            return false;
        } else if (a == 39 && OD[OD.x]["Km"] > 0 && OD[OD.x]["hC"] > -1) {
            OD[OD.x]["hC"] = OD[OD.x]["hC"] + 10 < OD[OD.x]["Km"] ? OD[OD.x]["hC"] + 10 : OD[OD.x]["Km"] - 1;
            N2(OD[OD.x]["hC"]);
            if (QT) OD.QB = 1;
            return false;
        } else if (a == 8) {
            if (OD[OD.x]["KV"].length > 0) {
                OD[OD.x]["KV"] = OD[OD.x]["KV"].substr(0, OD[OD.x]["KV"].length - 1);
                if (OD[OD.x]["K6"]) NP(t);
            }
            if (OD[OD.x]["Qo"]) OD[OD.x]["w5"] = "";
        } else if (a == 46) {} else if (a == 35 || a == 36) {} else if (a >= 48 && a <= 57) {
            if (/[^\d]+/.test(OD[OD.x]["KV"])) {
                OD["ignore"] = true;
                OD[OD.x]["hC"] = (OD[OD.x]["hC"] >= 10 ? OD[OD.x]["hC"] - OD[OD.x]["hC"] % 10 : 0) + a - 48;
                N2(OD[OD.x]["hC"]);
                hX(t);
                if (QT) OD.QB = 1;
                return false;
            }
        } else if (a == 27) {
            OD[OD.x]["KV"] = "";
            OD[OD.x]["Km"] = 0;
            OD[OD.x]["hC"] = -1;
            Kx(OD.x + "drop");
            return false;
        } else if (a == 118) {
            return false;
        } else if (a == 119 || OD.gz == 1 && a == 78) {
            var i = $("chk" + t.id + "Qo");
            // Kg.checked = !Kg.checked;
            // Kg.classList.toggle('active',Kg.classList.contains('active'));
            // Kg.classList.toggle('active');
                        i.classList.toggle("active", !i.classList.contains("active"));
            gD(i, t.id, "Qo");
            return false;
        }
        if (w1 && OD.gz & 3 == 3) NL(e);
    }
    function QF(e) {
        var t = e.target ? e.target : e.srcElement;
        gt(t);
    }
    function NL(e) {
        if (OD.QB) return false;
        var t = e.target ? e.target : e.srcElement;
        var a = e.keyCode ? e.keyCode : e.charCode;
        if (OD.gz & 4) a = OD.Qg;
        var r = hT(a);
        var i = String(OD.gz) + r;
        if ((OD.gz == 1 || OD.gz == 2 || OD.hR || !OD.x) && !Oa[hz]["Ow"][i]) return;
        var n = /[\w;\.\,`]/;
        if (n.test(r) && OD[OD.x]["K6"]) {
            if (!OD["ignore"] && (e.charCode != 0 || !Ku(e.charCode))) {
                if (OD[OD.x]["KV"] == "") {
                    OD[OD.x]["spos"] = t.selectionStart;
                }
                OD[OD.x]["KV"] += "" + r;
                NP(t);
            }
        } else if (OD[OD.x]["Qo"]) {
            var O = null;
            if (w1) {
                if (Oa[hz]["Ow"][i]) {
                    O = Oa[hz]["Ow"][i];
                    e.keyCode = null;
                    return QC(t, O, "");
                } else {
                    O = OD.gz == 3 ? h4(hT(hG(a))) : hG(a);
                    if (Oa[hz].unicode == 51) {
                        var o = OD[OD.x]["w5"];
                        var s = hT(O);
                        if (g_(t, s, o)) {
                            e.keyCode = null;
                            OD[OD.x]["w5"] = o;
                            return;
                        }
                        OD[OD.x]["w5"] = hT(O);
                    }
                    if (O) e.keyCode = O;
                }
                return;
            } else if (Qn(String(a)) || Oa[hz]["Ow"][i]) {
                if (Oa[hz]["Ow"][i]) {
                    O = Oa[hz]["Ow"][i];
                } else {
                    if (hG(a) == 0) return;
                    O = OD.gz == 3 ? h4(hT(hG(a))) : hT(hG(a));
                }
                var l = t.selectionStart;
                if (Oa[hz].unicode == 51) {
                    var o = t.value.substr(l - 1, 1);
                    if (g_(t, O, o)) return false;
                }
                return Q0(t, O, "");
            }
        }
    }
    function g_(e, t, a) {
        if (OD[OD.x]["Q7"] != (/[က-အ]/.test(t) ? "M" : t) + a) {
            if (/[ေ]/.test(a) && /[က-အ]/.test(t) || /[ြ]/.test(a) && /[က-အ]/.test(t) || /[ေ]/.test(a) && /[ြ]/.test(t)) {
                OD[OD.x]["Q7"] = (/[က-အ]/.test(t) ? "M" : t) + a;
                KR(e, t + a, "", a.length);
                return true;
            }
        }
        OD[OD.x]["Q7"] = "";
        return false;
    }
    function hX(wx) {
        var KF = $(OD.x);
        var h9 = 0;
        if (!OD[OD.x]["KV"]) {
            return;
        }
        var wG = OD[OD.x]["list"][OD[OD.x]["hC"]] != null ? OD[OD.x]["list"][OD[OD.x]["hC"]] : OD[OD.x]["list"][0];
        var KU = wG[1].replace(/\-/g, "");
        var hU = OD[OD.x]["Ke"];
        if (OD[OD.x]["lower"] && hU.length > 0) {
            var Nj = hU.charAt(hU.length - 1);
            var wJ = 1;
            if (wC(Nj) != 82) {
                wJ = 0;
                Nj = "";
            }
            var KJ = hU.charAt(hU.length - 1 - wJ);
            var NF = hU.substr(0, hU.length - 1 - wJ);
        }
        if (hz == "Zawgyi") {
            if (OD[OD.x]["lower"] && hU.length > 0) {
                if (KW(KU.charAt(0)) != 3) {
                    var re = eval("/" + hU + OD[OD.x]["KV"] + "/gi");
                    h9 = 1 + wJ;
                    var KN = 0;
                    for (var Oy = 0; Oy < KU.length; Oy++) {
                        switch (wC(KU.charAt(Oy))) {
                          case 77:
                          case 99:
                          case 100:
                            NF += KU.charAt(Oy);
                            KN++;
                            h9--;
                            break;
                        }
                    }
                    KU = KU.substr(KN, KU.length - KN);
                    var hM = KU.charAt(0);
                    if (wC(KJ) == 4) {
                        if (wC(hM) >= 99 && wC(hM) <= 106) {
                            KU = hM + KU.charAt(1) + "ၤ" + KU.substr(2, KU.length - 1);
                        } else {
                            KU = hM + "ၤ" + KU.substr(1, KU.length - 1);
                        }
                    } else if (wC(KJ) == 14 && wC(hM) == 12) {
                        KU = "႑" + KU.substr(1, KU.length - 1);
                    } else if (wC(KJ) == 10 && wC(hM) == 43) {
                        KU = "႗" + KU.substr(1, KU.length - 1);
                    } else if (wC(KJ) == 12 && wC(hM) == 12) {
                        KU = "ၮ" + KU.substr(1, KU.length - 1);
                    } else if (wC(KJ) == 13 && wC(hM) == 12) {
                        KU = "ၯ" + KU.substr(1, KU.length - 1);
                    } else if (wC(hM) == 29) {
                        KU = "ႆ" + KU.substr(1, KU.length - 1);
                    } else if (wC(hM) == 117) {} else if (wC(hM) == 31) {} else {
                        if (KJ) NF += KJ;
                        h9--;
                    }
                    var Kj = NF + KU;
                    for (var l = 0; l < wp.length; l++) {
                        if (wp[l].length >= 4) {
                            Kj = Kj.replace(wp[l][2], wp[l][3]);
                        }
                        var Og = eval("/" + wp[l][0] + "/");
                        if (Og.test(Kj)) {
                            Kj = Kj.replace(Og, wp[l][1]);
                        }
                    }
                }
            }
        } else if (Oa[hz].unicode == 51) {
            if (OD[OD.x]["lower"] && NF.length > 1) {
                Kj = "္" + KU;
            }
        }
        if (!wG) {
            OD[OD.x]["KV"] = "";
            return;
        }
        if (typeof wG != "string") wG = KU;
        wG = OD[OD.x]["lower"] ? Kj : wG;
        wG = wG.replace(/\-/g, "");
        KR(KF, wG, "", OD[OD.x]["KV"].length + (OD[OD.x]["lower"] ? h9 + NF.length : 0), OD[OD.x]["hE"]);
        QO(OD[OD.x]["KV"], wG);
    }
    function QO(e, t) {
        var a = OD[OD.x]["Ke"] = t;
        if (wC(a.substr(a.length - 1, 1)) == 82) {
            OD[OD.x]["plChar"] = a.substr(a.length - 2, 1);
        }
        OD[OD.x]["w5"] = e;
        OD[OD.x]["KV"] = "";
        OD[OD.x]["Km"] = 0;
        OD[OD.x]["hC"] = -1;
        Kx(OD.x + "drop");
    }
    function NB() {
        var e = $(OD.x);
        var t = OD[OD.x]["hC"];
        if (t == -1 && OD[OD.x]["K6"]) t = 0;
        if (t > -1 && t < OD[OD.x]["Km"]) {
            var a = OD[OD.x]["list"][t];
            if (typeof a == "array") a = a[0];
            hX(e);
        }
    }
    function Qp() {
        var e = $(OD.x);
        e.focus();
        gt(e);
    }
    function NE(e) {
        if (e) {
            OD.x = e.id;
            e.focus();
        }
    }
    function N2(e) {
        OD[OD.x]["hC"] = e;
        if (e < 0) {
            Kx(OD.x + "drop");
            OD[OD.x]["hC"] = -1;
            return false;
        }
        if (OD[OD.x]["Km"] < 1) return false;
        for (var t = 0; t < OD[OD.x]["Km"]; t++) {
            var a = $("wO" + OD.x + t);
            // itemX.className = i == index ? "Nh" : "ga";
                        a.className = t == e ? "on" : "off";
        }
        for (var t = 0; t < Math.ceil(OD[OD.x]["Km"] / 10); t++) {
            var a = $("col" + OD.x + t);
            // $("col" + OD.x + i).className = i == Math.floor(OD[OD.x]["hC"] / 10) ? "gH" : "gV";
                        if (a) a.className = t == Math.floor(OD[OD.x]["hC"] / 10) ? "gH" : "gV";
        }
        wQ(OD.x + "drop");
        return false;
    }
    function Ki(e) {
        if ($(e.id + "drop")) Kx(e.id + "drop");
        return false;
    }
    function onFocus(e) {}
    function gt(e) {
        if (doc.selection) {
            var t = doc.selection.createRange();
            $(e.id + "drop").style.top = t.offsetTop + e.Ox;
            $(e.id + "drop").style.left = t.offsetLeft;
        }
    }
    function go(e) {
        // if (!OT.tag) return;
        // $(OT.tag).innerHTML = '<textarea style="height:' + (OT.rows ? OT.rows * 30 : 30) + ';" rows="' + (OT.rows ? OT.rows : 1) + '" id="' + OT.id + '"' + ' autocomplete="off" ' + 'onkeydown="return Ns(event);"' + (w1 ? 'onkeypress="NL(event);"' : '') + 'onkeyup="QF(event);"' + 'onmouseup="QF(event);"' + 'onblur="Ki(this);"' + 'onfocus="onFocus(this);">' + '</textarea>';
        // doc.body.innerHTML += '<span id="' + OT.id + 'drop"' + ' class="g7">' + '</span>';
    }
    function gx(e) {
        var t = $(e.id);
        t.setAttribute("data-autocomplete", "off");
        t.setAttribute("data-burglish", "true");
        var a = t.value;
        var r = t.parentNode;
        var i = r.innerHTML;
        t.onfocus = function(e) {
            return onFocus(this);
        };
        t.onblur = function(e) {
            return Ki(this);
        };
        t.onmouseover = function(e) {
            return NE(this);
        };
        t.onmouseup = function(e) {
            return QF(e, this);
        };
        t.onkeypress = function(e) {
            return NL(e);
        };
        t.onkeyup = function(e) {
            return QF(e, this);
        };
        t.onkeydown = function(e) {
            return Ns(e, this);
        };
        var n = $(app.id.input);
        if (OD[t.id]["Q_"]) {
            n.style.display = "none";
        }
        // wo = '<span style="display:' + (OD[wx.id]["Q_"] ? "none" : "") + ';color:#000;font-size:90%;">';
                for (var O in OD[t.id]["Qa"]) {
            var o = eCreate("li");
            o.setAttribute("id", "chk" + t.id + O);
            o.setAttribute("data-id", O);
            o.setAttribute("data-title", OD[t.id]["Qa"][O].text);
            o.onclick = function(e) {
                e.target.classList.toggle("active", !e.target.classList.contains("active"));
                var a = e.target.dataset.id;
                gD(e.target, t.id, a, OD[t.id]["Qa"][a]["cb"]);
                e.preventDefault();
            };
            // li.appendChild(doc.createTextNode(OD[wx.id]["Qa"][x].text));
                        n.appendChild(o);
        }
        // for (var x in OD[wx.id]["Qa"]) {
        //   wo += '<input id="chk' + wx.id + x + '" ' + OD[wx.id]["wv"] + ' type="checkbox" onclick="gD(this,\'' + wx.id + '\',\'' + x + '\',\'' + OD[wx.id]["Qa"][x]["cb"] + '\');">' + OD[wx.id]["Qa"][x].text + '<\/input> ';
        // }
        // wo += '<select ' + OD[wx.id]["wv"] + ' name="Choose Font" id="Nk" onchange="hV(this.value)" style="vertical-align:middle;">';
        // for (var O4 in Oa) {
        //   if (Oa[O4].wg && Oa[O4].unicode) wo += '<option value="' + O4 + '">' + Oa[O4].QJ + '<\/option>';
        // }
        // wo += "<\/select>";
                if (OD[e.id]["KY"]) {
            var o = eCreate("li");
            o.setAttribute("id", "btn" + t.id + O);
            o.onclick = function(e) {
                ND();
            };
            o.appendChild(doc.createTextNode("Add Font BBCode"));
            n.appendChild(o);
        }
        // if (OD[OT.id]["KY"]) {
        //   wo += ' <input id="btn' + wx.id + x + '" ' + OD[wx.id]["wv"] + ' type="button" onclick="ND();" value="Add Font BBCode"><\/input> ';
        // }
                var o = eCreate("li");
        o.setAttribute("id", "btn" + t.id + O + OD[t.id]["wv"]);
        o.onclick = function(e) {
            gL();
        };
        o.appendChild(doc.createTextNode("Correct Syntax!"));
        n.appendChild(o);
        // wo += ' <input id="btn' + wx.id + x + '" ' + OD[wx.id]["wv"] + ' type="button" onclick="gL();" value="Correct Syntax!"><\/input> ';
        // if (OD[OT.id]["Nt"] != false) wo += " Burglish v" + gv;
        // wo += "<\/span>";
        // if ($("Qi")) {
        //   $("Qi").innerHTML = wo;
        // } else {
        //   ws += "<br>" + wo;
        // }
        // wo = '';
        // if ($("hQ")) {
        //   $("hQ").innerHTML = wo;
        // } else {
        //   ws += '<br><div id="hQ" class="gk dragme" style="display:none;"><div>Draggable Box:You can move this anywhere<\/div><div id="Na">' + wo + '</div><div>This idea is inspired from<a href="http://saturngod.net/">SaturnGod<\/a>\'s<a href="http://www.mysteryzillion.org/project/webtext/">Web Text Editor<\/a><\/div><\/div><br>';
        // }
        // ws += '<span id="' + OT.id + 'drop"' + ' class="g7">' + '</span>';
        // ws += '<br><span id="' + OT.id + 'span"' + ' style="border:0;padding:0;margin:0;width:0;height:0;visibility:hidden;font-family:Zawgyi-One,Arial,Sans-Serif;" visible="false">' + '</span>';
                var s = eCreate("div");
        s.setAttribute("id", e.id + "drop");
        s.setAttribute("class", "g7");
        s.style.display = "none";
        r.appendChild(s);
        var l = eCreate("div");
        l.setAttribute("id", e.id + "span");
        r.appendChild(l);
        var f = eCreate("div"), u = eCreate("ol");
        f.setAttribute("id", "hQ");
        f.setAttribute("class", "gk dragme");
        f.style.display = "none";
        u.setAttribute("id", "Na");
        u.setAttribute("data-title", "Draggable Box:You can move this anywhere");
        f.appendChild(u);
        r.appendChild(f);
        // Qk.innerHTML = ws;
                $(e.id).setAttribute("data-autocomplete", OD[e.id]["K6"] ? "off" : "on");
        // $(OT.id)["autocomplete"] = OD[OT.id]["K6"] ? "Off" : "On";
                if (doc.selection) {
            t = $(e.id);
            t.select();
            var h = doc.selection.createRange();
            t.Ox = h.boundingHeight;
        }
        OD.x = e.id;
        setTimeout(function() {
            $(e.id).focus();
            $(e.id).value = a;
        }, 50);
    }
    var gI = doc.onkeypress ? doc.onkeypress : function() {};
    // if (!w1) doc.onkeypress = NL;
        function gD(wx, Oz, O4, O7) {
        if (wx.classList.contains("active")) {
            if (O4 == "K6") {
                OD[Oz]["Qo"] = false;
            } else if (O4 == "Qo") {
                OD[Oz]["K6"] = false;
            }
        }
        // wx.classList.toggle('active');
                OD[Oz][O4] = wx.classList.contains("active");
        gu(Oz);
        // if (OD[Oz]["Qo"] && O4 == "Qo") hV($("Nk").value);
                if (OD[Oz]["Qo"] && O4 == "Qo") {
            hV(gM.source.name);
        }
        // $(Oz)["autocomplete"] = OD[Oz]["K6"] ? "Off" : "On";
                $(Oz).setAttribute("data-autocomplete", OD[Oz]["K6"] ? "off" : "on");
        if (Ku(O7)) eval(O7)(Oz, O4, true);
        return false;
    }
    function gu(e) {
        // console.log(Oz,'gu');
        // console.log(OD[Oz]["Qa"]);
        for (var t in OD[e]["Qa"]) {
            // console.log(x);
            // console.log(OD[Oz][x]);
            $("chk" + e + t).classList.toggle("active", OD[e][t]);
            // $('chk' + Oz + x).classList.toggle('active',OD[Oz]["Qa"][x]==true);
                }
        return false;
    }
    function hV(e) {
        if (!OD.x) return;
        OD[OD.x].gM = hz = e;
        var t = $(OD.x);
        t.focus();
        // var i = Oa[O4]["css"].length - 1;
        // while (i >= 0) {
        //   OT.style.fontFamily = Oa[O4]["css"][i] + "," + OT.style.fontFamily.replace(Oa[O4]["css"][i] + ",", "");
        //   i--;
        // }
        // OT.style.fontSize = Oa[O4].QG + "pt";
        // $(OD.x + "span").style.fontFamily = $(OD.x + "drop").style.fontFamily = String(Oa[O4]["css"]);
        // $(OD.x + "span").style.fontSize = $(OD.x + "drop").style.fontSize = Oa[O4].QG + "pt";
        // if ($("help" + OD.x)) {
        //   $("help" + OD.x).style.fontFamily = String(Oa[O4]["css"]);
        //   $("help" + OD.x).style.fontSize = Oa[O4].QG + "pt";
        // }
                if (!K3[hz]) {
            K3[hz] = K3["Myanmar3"].join("\f").Ng("Myanmar3", hz, {
                Qv: true
            }).split("\f");
        }
        // if (!K3[hz]) K3[hz] = K3["Myanmar3"];
                if ($("chk" + OD.x + "NW").classList.contains("active")) NM(OD.x, "NW");
        return false;
    }
    function ND() {
        var e = $(OD.x);
        if (OD[OD.x]["KY"]) {
            KR(e, '[gM="' + Oa[hz].QJ + '"]', "[/gM]");
        }
        return false;
    }
    function gL() {
        var OT = $(OD.x);
        var OO = OT.value;
        OO = OO.gL(hz);
        for (var l = 0; l < wp.length; l++) {
            if (wp[l].length >= 4) {
                OO = OO.replace(wp[l][2], wp[l][3]);
            }
            var Og = eval("/" + wp[l][0] + "/g");
            if (Og.test(OO)) {
                OO = OO.replace(Og, wp[l][1]);
            }
        }
        for (var l = 0; l < wj.length; l++) {
            var Og = eval("/" + wj[l][0] + "/g");
            if (Og.test(OO)) {
                OO = OO.replace(Og, wj[l][1]);
            }
        }
        OT.value = OO;
        return false;
    }
    function NM(e, t, a) {
        var r = eEmpty($("Na")), i;
        if (hz == "Zawgyi") {
            for (var n = 0; n < w2.length; n++) {
                i = eCreate("li");
                i.setAttribute("data-fn", w2[n].replace(/[\-\s]+/g, ""));
                i.appendChild(doc.createTextNode(w2[n]));
                i.onclick = function() {
                    Os(this.dataset.fn);
                };
                r.appendChild(i);
            }
        } else if (Oa[hz].unicode == 51) {
            for (var n = 0; n < w_.length; n++) {
                i = eCreate("li");
                i.setAttribute("data-fn", w_[n].replace(/[\-\s\w()]+/g, ""));
                i.appendChild(doc.createTextNode(w_[n]));
                i.onclick = function() {
                    Os(this.dataset.fn);
                };
                r.appendChild(i);
            }
        } else {
            for (var n = 0; n < Oa[hz].OE.length - 16; n++) {
                if (!Oa[hz].OE[n]) continue;
                var O = hT(Oa[hz].OE[n]);
                i = eCreate("li");
                i.setAttribute("data-fn", (n >= 79 && n <= 98 ? "--" : "") + O);
                i.appendChild(doc.createTextNode(O));
                i.onclick = function() {
                    Os(this.dataset.fn);
                };
                r.appendChild(i);
            }
        }
        if (Oa[hz]) {
            r.style.fontFamily = Oa[hz].css.join(",");
        }
        // ol.className = Oa[hz].QJ;
                if (a) Ne("hQ", $("chk" + e + t).classList.contains("active"));
        return false;
    }
    function Os(e) {
        var t = $(OD.x);
        KR(t, e);
        t.focus();
    }
    function gZ(e, t) {
        OD[e.id] = {
            list: [],
            hC: -1,
            Km: 0,
            KV: "",
            w5: "",
            Ke: "",
            hE: 0,
            Kv: 1,
            K6: true,
            hq: false,
            Qo: false,
            NW: false,
            hk: false,
            K3: true,
            Qe: 0,
            hc: 1,
            wv: "",
            Qa: {
                K6: {
                    text: "Burglish Menu(F2)"
                },
                K3: {
                    text: "Tips"
                },
                Qe: {
                    text: "Follow Cursor"
                },
                hq: {
                    text: "Known Syllables Only"
                },
                NW: {
                    text: "Characters List",
                    cb: "NM"
                },
                Qo: {
                    text: "TypeWriter(F8)"
                }
            },
            // 'gM': 'Zawgyi',
            // 'Ow': 'WinInnwa'
            gM: gM.source.name,
            Ow: gM.target.name
        };
        for (var a in e) {
            if (a != "id") OD[e.id][a] = e[a];
        }
        if (!t) {
            if ($(e.id)) {
                if ($(e.id).tagName == "TEXTAREA") gx(e);
            } else {
                go(e);
            }
            gu(e.id);
        }
        hz = OD[e.id].gM;
    }
    gJ.burglish = true;
    var Oa = {
        Zawgyi: {
            QJ: "Zawgyi-One",
            unicode: 1,
            wg: true,
            QG: 12,
            OE: [ 4096, 4097, 4098, 4099, 4100, 4101, 4102, 4103, 4104, 4106, 4107, 4108, 4109, 4110, 4111, 4112, 4113, 4114, 4115, 4116, 4117, 4118, 4119, 4120, 4121, 4122, 4123, 4124, 4125, 4126, 4127, 4128, 4129, 4192, 4193, 4194, 4195, 0, 4197, 4198, 4200, 4201, 0, 4204, 4205, 0, 0, 4208, 4209, 4211, 4213, 4214, 4215, 4216, 4217, 4218, 4219, 4220, 0, 0, 4229, 0, 0, 0, 0, 0, 4160, 4161, 4162, 4163, 4164, 4165, 4166, 4167, 4168, 4169, 0, 4145, 0, 4141, 4142, 4095, 4153, 4196, 4140, 4139, 4186, 0, 4146, 0, 4156, 4234, 0, 4150, 4152, 0, 4154, 4221, 0, 4155, 4222, 4223, 4224, 4225, 4226, 4227, 4228, 0, 4151, 4244, 4245, 0, 4170, 4171, 0, 4239, 4240, 4242, 4133, 4135, 4175, 0, 4230, 4173, 4172, 4132, 0, 4143, 4144, 4147, 4148, 4232, 4233, 4157, 4231, 0, 4235, 4236, 4238, 4237, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4137, 4138, 0, 4105, 4203, 4202, 4134, 0, 4174, 4131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4247, 4206, 4207, 0, 4241, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4246, 0, 0, 0, 4199, 4210, 4212, 4243, 0, 43, 45, 0, 47, 0, 40, 41, 91, 93, 63, 0, 34, 34, 39, 39, 61 ],
            min: 34,
            max: 4247,
            O8: [ [ 4104, "々だ" ], [ 4192, "け　" ], [ 4193, "け、" ], [ 4194, "け。" ], [ 4195, "け〃" ], [ 4197, "け々" ], [ 4198, "け〆" ], [ 4200, "け〇" ], [ 4201, "け〈" ], [ 4204, "け《" ], [ 4205, "け》" ], [ 4208, "け『" ], [ 4209, "け』" ], [ 4211, "け【" ], [ 4213, "け】" ], [ 4214, "け〒" ], [ 4215, "け〓" ], [ 4216, "け〔" ], [ 4217, "け〕" ], [ 4218, "け〖" ], [ 4219, "け〗" ], [ 4220, "け〘" ], [ 4229, "け〛" ], [ 4196, "〄げけ" ], [ 4186, "さげ" ], [ 4234, "ゅず" ], [ 4221, "だ" ], [ 4222, "っ" ], [ 4223, "っ" ], [ 4224, "っ" ], [ 4225, "っ" ], [ 4226, "っ" ], [ 4227, "っ" ], [ 4228, "っ" ], [ 4244, "ぬ" ], [ 4245, "ぬ" ], [ 4239, "〓" ], [ 4240, "〚" ], [ 4242, "《け》" ], [ 4147, "み" ], [ 4148, "む" ], [ 4232, "ゅみ" ], [ 4233, "ゅむ" ], [ 4231, "ゅ" ], [ 4235, "〄げけく" ], [ 4236, "〄げけぐ" ], [ 4238, "くそ" ], [ 4237, "〄げけそ" ], [ 4137, "つ〝" ], [ 4138, "きつ〝ごげ" ], [ 4203, "〉" ], [ 4202, "ぶ" ], [ 4134, "ぶぐ" ], [ 4174, "ゞ〄げぞ" ], [ 4247, "《け《" ], [ 4206, "「け「" ], [ 4207, "」け「" ], [ 4241, "『け「" ], [ 4199, "け〆" ], [ 4210, "け』" ], [ 4212, "け【" ], [ 4243, "け〗" ] ],
            Ow: {
                "4<": "ဝ",
                "4I": "၍",
                "4Y": "၌",
                "4T": "ဤ",
                "4K": "ႉ",
                "7L": "ႋ",
                "7D": "ႌ",
                "3d": "ႎ",
                "3l": "ႍ",
                "4R": "ြၽ",
                "4Q": "ွ်",
                "4W": "ႊၽ",
                "35": "ဩ",
                "75": "ဪ",
                "39": "ဦ",
                "34": "၎",
                "74": "ဣ"
            },
            order: {
                NA: {
                    Ov: [],
                    O0: []
                },
                h_: [],
                KT: [ "ွ", "ႇ", "ြ", "ႊ", "်", "ၽ", "ၤ", "ိ", "ီ", "ံ", "ႋ", "ႌ", "ႍ", "ႎ", "ဲ", "ု", "ဳ", "ူ", "ဴ", "ႈ", "ႉ", "ာ", "ါ", "္", "ၚ", "့", "႔", "႕", "း" ],
                after: []
            },
            Ol: {
                "ျ([ကဃဆဏတထဘယလသဟ])": "ၾ$1"
            },
            OH: {},
            wW: "(Zawgyi,Zawgyi1...)",
            css: [ "Zawgyi-One", "Zawgyi1" ]
        },
        UniBurma: {
            QJ: "UniBurma",
            unicode: 1,
            wg: true,
            QG: 14,
            OE: [ 4096, 4097, 4098, 4099, 4100, 4101, 4102, 4103, 4104, 4106, 4107, 4108, 4109, 4110, 4111, 4112, 4113, 4114, 4115, 4116, 4117, 4118, 4119, 4120, 4121, 4122, 4123, 4124, 4125, 4126, 4127, 4128, 4129, 4192, 4193, 4194, 4219, 0, 4196, 4197, 4198, 4247, 0, 4214, 4213, 0, 0, 4199, 4201, 4203, 4204, 4205, 4206, 4207, 4208, 4209, 4210, 4211, 0, 0, 4212, 0, 0, 0, 0, 0, 4160, 4161, 4162, 4163, 4164, 4165, 4166, 4167, 4168, 4169, 0, 4145, 0, 4141, 4142, 4095, 4153, 4230, 4140, 4189, 4190, 0, 4146, 0, 4222, 4223, 0, 4150, 4152, 0, 4149, 4149, 0, 4148, 4147, 4243, 4242, 0, 0, 0, 0, 0, 4151, 4251, 4250, 0, 4170, 4171, 0, 4238, 4255, 4233, 4133, 4135, 4175, 0, 4237, 4173, 4172, 4132, 0, 4143, 4144, 4226, 4227, 4225, 0, 4224, 4191, 0, 4231, 4232, 4228, 4229, 0, 0, 4247, 4246, 4248, 0, 0, 0, 0, 0, 0, 4137, 4138, 0, 4105, 4236, 4239, 4134, 0, 4174, 4131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4234, 4235, 4217, 0, 4216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4215, 0, 0, 4195, 0, 4200, 4202, 0, 0, 43, 45, 0, 47, 0, 40, 41, 91, 93, 63, 0, 0, 0, 0, 0 ],
            min: 40,
            max: 4255,
            O8: [ [ 4104, "々だ" ], [ 4192, "け　" ], [ 4193, "け、" ], [ 4194, "け。" ], [ 4219, "け〃" ], [ 4196, "け々" ], [ 4197, "け〆" ], [ 4198, "け〇" ], [ 4247, "け〈" ], [ 4214, "け《" ], [ 4213, "け》" ], [ 4199, "け『" ], [ 4201, "け』" ], [ 4203, "け【" ], [ 4204, "け】" ], [ 4205, "け〒" ], [ 4206, "け〓" ], [ 4207, "け〔" ], [ 4208, "け〕" ], [ 4209, "け〖" ], [ 4210, "け〗" ], [ 4211, "け〘" ], [ 4212, "け〛" ], [ 4230, "〄げけ" ], [ 4190, "さげ" ], [ 4223, "ゅず" ], [ 4149, "だ" ], [ 4147, "っ" ], [ 4243, "っ" ], [ 4242, "っ" ], [ 4251, "ぬ" ], [ 4250, "ぬ" ], [ 4238, "〓" ], [ 4255, "〚" ], [ 4233, "《け》" ], [ 4226, "み" ], [ 4227, "む" ], [ 4225, "ゅみ" ], [ 4191, "ゅ" ], [ 4231, "〄げけく" ], [ 4232, "〄げけぐ" ], [ 4228, "くそ" ], [ 4229, "〄げけそ" ], [ 4247, "ずだ" ], [ 4246, "ゅだ" ], [ 4248, "ゅずだ" ], [ 4137, "つ〝" ], [ 4138, "きつ〝ごげ" ], [ 4236, "〉" ], [ 4239, "ぶ" ], [ 4134, "ぶぐ" ], [ 4174, "ゞ〄げぞ" ], [ 4234, "《け《" ], [ 4235, "「け「" ], [ 4217, "」け「" ], [ 4216, "『け「" ], [ 4195, "け〃" ], [ 4200, "け』" ], [ 4202, "け【" ] ],
            Ow: {},
            wW: "(UniBurma...)",
            css: [ "UniBurma" ]
        },
        MyaZedi: {
            QJ: "MyaZedi",
            unicode: 1,
            wg: true,
            QG: 14,
            OE: [ 4096, 4097, 4098, 4099, 4100, 4101, 4102, 4103, 4104, 4106, 4107, 4108, 4109, 4110, 4111, 4112, 4113, 4114, 4115, 4116, 4117, 4118, 4119, 4120, 4121, 4122, 4123, 4124, 4160, 4126, 4127, 4128, 4129, 4192, 4193, 4194, 4195, 0, 4196, 4221, 4198, 4249, 0, 4214, 4213, 0, 0, 4199, 4200, 4202, 4204, 4205, 4206, 4207, 4208, 4209, 4210, 4211, 0, 0, 4212, 0, 4220, 0, 0, 0, 4160, 4161, 4162, 4163, 4164, 4165, 4166, 4167, 4168, 4169, 0, 4145, 0, 4141, 4142, 4095, 4153, 4230, 4140, 4189, 4190, 0, 4146, 0, 4222, 4223, 0, 4150, 4152, 0, 4149, 0, 0, 4148, 4147, 4243, 4242, 4240, 4241, 0, 0, 0, 4151, 4251, 4250, 0, 4170, 4171, 0, 4238, 4255, 4233, 4133, 4135, 4175, 0, 4237, 4173, 4172, 4132, 0, 4143, 4144, 4226, 4227, 4225, 0, 4224, 4191, 0, 4231, 4232, 4228, 4229, 0, 0, 4247, 4246, 4248, 0, 0, 0, 4244, 4245, 0, 4137, 4138, 0, 4105, 4236, 4239, 4134, 0, 4174, 4131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4234, 4235, 4217, 0, 4216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4215, 0, 4218, 0, 0, 4200, 4203, 0, 0, 43, 45, 0, 47, 0, 40, 41, 91, 93, 63, 0, 0, 0, 0, 0 ],
            min: 40,
            max: 4255,
            O8: [ [ 4104, "々だ" ], [ 4192, "け　" ], [ 4193, "け、" ], [ 4194, "け。" ], [ 4195, "け〃" ], [ 4196, "け々" ], [ 4221, "け〆" ], [ 4198, "け〇" ], [ 4249, "け〈" ], [ 4214, "け《" ], [ 4213, "け》" ], [ 4199, "け『" ], [ 4200, "け』" ], [ 4202, "け【" ], [ 4204, "け】" ], [ 4205, "け〒" ], [ 4206, "け〓" ], [ 4207, "け〔" ], [ 4208, "け〕" ], [ 4209, "け〖" ], [ 4210, "け〗" ], [ 4211, "け〘" ], [ 4212, "け〛" ], [ 4220, "け〝" ], [ 4230, "〄げけ" ], [ 4190, "さげ" ], [ 4223, "ゅず" ], [ 4147, "っ" ], [ 4243, "っ" ], [ 4242, "っ" ], [ 4240, "っ" ], [ 4241, "っ" ], [ 4251, "ぬ" ], [ 4250, "ぬ" ], [ 4238, "〓" ], [ 4255, "〚" ], [ 4233, "《け》" ], [ 4226, "み" ], [ 4227, "む" ], [ 4225, "ゅみ" ], [ 4191, "ゅ" ], [ 4231, "〄げけく" ], [ 4232, "〄げけぐ" ], [ 4228, "くそ" ], [ 4229, "〄げけそ" ], [ 4247, "ずだ" ], [ 4246, "ゅだ" ], [ 4248, "ゅずだ" ], [ 4244, "っず" ], [ 4245, "っず" ], [ 4137, "つ〝" ], [ 4138, "きつ〝ごげ" ], [ 4236, "〉" ], [ 4239, "ぶ" ], [ 4134, "ぶぐ" ], [ 4174, "ゞ〄げぞ" ], [ 4234, "《け《" ], [ 4235, "「け「" ], [ 4217, "」け「" ], [ 4216, "『け「" ], [ 4218, "け　" ], [ 4200, "け』" ], [ 4203, "け【" ] ],
            Ow: {},
            wW: "(Myazedi,bit,Mandalay...)",
            css: [ "Myazedi", "bit", "Mandalay" ]
        },
        Myanmar3: {
            QJ: "Myanmar3",
            unicode: 51,
            wg: true,
            QG: 13,
            OE: [ 4096, 4097, 4098, 4099, 4100, 4101, 4102, 4103, 4104, 4106, 4107, 4108, 4109, 4110, 4111, 4112, 4113, 4114, 4115, 4116, 4117, 4118, 4119, 4120, 4121, 4122, 4123, 4124, 4125, 4126, 4127, 4128, 4129, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4160, 4161, 4162, 4163, 4164, 4165, 4166, 4167, 4168, 4169, 0, 4145, 0, 4141, 4142, 4153, 4154, 0, 4140, 4139, 0, 0, 4146, 0, 4157, 0, 0, 4150, 4152, 0, 4155, 0, 0, 4156, 0, 0, 0, 0, 0, 0, 0, 0, 4151, 0, 0, 0, 4170, 4171, 0, 0, 0, 0, 4133, 4135, 4175, 0, 4159, 4173, 4172, 4132, 0, 4143, 4144, 0, 0, 0, 0, 4158, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4137, 4138, 0, 4105, 0, 0, 4134, 4174, 0, 4131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 45, 0, 47, 0, 40, 41, 91, 93, 63, 0, 34, 34, 39, 39, 61 ],
            min: 34,
            max: 4175,
            O8: [ [ 4104, "々だ" ], [ 4137, "つ〝" ], [ 4138, "きつ〝ごげ" ], [ 4134, "ぶぐ" ] ],
            Ow: {
                "4<": "ဝ",
                "4F": "္",
                "4I": "၍",
                "4Y": "၌",
                "4T": "ဤ",
                "4K": "ှု",
                "4R": "ျွ",
                "4Q": "ျှ",
                "4W": "ျွှ",
                "35": "ဩ",
                "75": "ဪ",
                "39": "ဦ",
                "34": "၎င်း",
                "74": "ဣ"
            },
            order: {
                NA: {
                    Ov: [ [ "(ြ)([က-အ])", "$2$1" ], [ "([ေ])([က-အ])", "$2$1" ], [ "([က-အ][ာ-ဿ]*)(င်္)", "$2$1" ], [ "ေ(်္[က-အ])", "$2ေ" ], [ "ဥ([္်ာ])", "ဉ$1" ] ],
                    O0: [ [ "(င်္)([က-အ])", "$2$1" ], [ "(္[က-အ][ျွှ]*)([ေြ]+)", "$2$1" ], [ "([က-အ][ျွှ]*)([ေြ]+)", "$2$1" ], [ "ြေ", "ေြ" ] ]
                },
                h_: [],
                KT: [ "ျ", "ြ", "ွ", "ှ", "ေ", "ါ", "ာ", "ိ", "ီ", "ု", "ူ", "ဲ", "ံ", "်", "္", "့" ],
                after: [ [ "([ါ-ဲျ-ှ]+)(္[က-အ])", "$2$1" ], [ "ု်", "်ု" ] ]
            },
            Ol: {},
            wW: "(Myanmar2,...)",
            css: [ "Myanmar3", "Myanmar2" ]
        },
        Padauk: {
            QJ: "Padauk",
            unicode: 51,
            wg: true,
            QG: 14,
            inherit: "Myanmar3",
            wW: "(Padauk...)",
            css: [ "Padauk", "PadaukOT" ]
        },
        Parabaik: {
            QJ: "Parabaik",
            unicode: 51,
            wg: true,
            QG: 14,
            inherit: "Myanmar3",
            wW: "(ParabaikSans,...)",
            css: [ "Parabaik", "ParabaikSans" ]
        },
        WinInnwa: {
            QJ: "WinInnwa",
            unicode: 0,
            wg: true,
            QG: 14,
            OE: [ 117, 99, 42, 67, 105, 112, 113, 90, 0, 110, 35, 88, 33, 161, 80, 119, 120, 39, 34, 101, 121, 122, 65, 98, 114, 44, 38, 118, 48, 111, 91, 86, 116, 250, 169, 190, 162, 0, 246, 228, 198, 209, 0, 179, 178, 0, 0, 214, 197, 172, 180, 168, 233, 220, 230, 193, 199, 174, 0, 0, 8217, 0, 0, 0, 0, 0, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 97, 0, 100, 68, 4095, 102, 70, 109, 103, 58, 0, 74, 0, 71, 84, 0, 72, 59, 0, 115, 223, 0, 106, 77, 78, 66, 96, 126, 0, 0, 0, 104, 89, 85, 0, 63, 47, 0, 69, 189, 124, 79, 123, 92, 0, 243, 237, 252, 254, 0, 107, 108, 75, 76, 73, 170, 83, 167, 0, 216, 208, 240, 248, 0, 0, 82, 81, 87, 0, 234, 251, 60, 62, 0, 0, 0, 0, 218, 241, 205, 0, 164, 0, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 165, 215, 185, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 0, 0, 0, 0, 229, 166, 0, 0, 43, 45, 0, 94, 0, 40, 41, 171, 187, 191, 0, 0, 0, 0, 0, 61 ],
            min: 33,
            max: 8217,
            O8: [ [ 250, "け　" ], [ 169, "け、" ], [ 190, "け。" ], [ 162, "け〃" ], [ 246, "け々" ], [ 228, "け〆" ], [ 198, "け〇" ], [ 209, "け〈" ], [ 179, "け《" ], [ 178, "け》" ], [ 214, "け『" ], [ 197, "け』" ], [ 172, "け【" ], [ 180, "け】" ], [ 168, "け〒" ], [ 233, "け〓" ], [ 220, "け〔" ], [ 230, "け〕" ], [ 193, "け〖" ], [ 199, "け〗" ], [ 174, "け〘" ], [ 8217, "け〛" ], [ 70, "〄げけ" ], [ 58, "さげ" ], [ 84, "ゅず" ], [ 223, "だ" ], [ 77, "っ" ], [ 78, "っ" ], [ 66, "っ" ], [ 96, "っ" ], [ 126, "っ" ], [ 89, "ぬ" ], [ 85, "ぬ" ], [ 69, "〓" ], [ 189, "〚" ], [ 124, "《け》" ], [ 75, "み" ], [ 76, "む" ], [ 73, "ゅみ" ], [ 170, "ゅむ" ], [ 167, "ゅ" ], [ 216, "〄げけく" ], [ 208, "〄げけぐ" ], [ 240, "くそ" ], [ 248, "〄げけそ" ], [ 82, "ずだ" ], [ 81, "ゅだ" ], [ 87, "ゅずだ" ], [ 234, "っみ" ], [ 251, "っみ" ], [ 60, "っず" ], [ 62, "っず" ], [ 241, "〉" ], [ 205, "ぶ" ], [ 165, "《け《" ], [ 215, "「け「" ], [ 185, "」け「" ], [ 64, "『け「" ], [ 229, "け』" ], [ 166, "け【" ] ],
            Ow: {},
            wW: "(WinKalaw,WinInnwa,Win Innwa,...)",
            css: [ "WinInnwa", "WinKalaw" ]
        },
        MMyanmar1: {
            QJ: "M-Myanmar1",
            unicode: 0,
            wg: true,
            QG: 14,
            OE: [ 117, 99, 42, 8226, 105, 112, 113, 90, 0, 110, 8482, 88, 161, 732, 43, 119, 120, 39, 34, 101, 121, 122, 65, 98, 114, 44, 55, 118, 48, 111, 91, 8211, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 49, 50, 51, 52, 53, 54, 94, 56, 57, 0, 97, 0, 100, 68, 4095, 102, 135, 109, 103, 58, 0, 74, 0, 71, 70, 0, 72, 59, 0, 115, 0, 0, 106, 45, 0, 0, 0, 0, 0, 0, 0, 104, 92, 0, 0, 47, 63, 0, 69, 38, 125, 79, 123, 46, 0, 169, 73, 89, 84, 0, 107, 108, 75, 76, 61, 140, 83, 124, 0, 8249, 710, 8240, 352, 0, 0, 96, 126, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8212, 110, 79, 0, 155, 0, 8224, 0, 85, 81, 67, 165, 80, 62, 0, 37, 171, 8220, 8221, 180, 0, 64, 33, 35, 87, 154, 93, 60, 77, 170, 78, 182, 179, 95, 163, 164, 36, 168, 186, 66, 82, 0, 339, 198, 166, 86, 162, 181, 0, 0, 0, 0, 0, 0, 0, 0, 0, 167, 8222, 0, 178, 0, 0, 0, 0, 0, 0, 177, 145, 146, 145, 146, 61 ],
            min: 33,
            max: 8482,
            O8: [ [ 135, "〄げけ" ], [ 58, "さげ" ], [ 70, "ゅず" ], [ 45, "っ" ], [ 92, "ぬ" ], [ 69, "〓" ], [ 38, "〚" ], [ 125, "《け》" ], [ 75, "み" ], [ 76, "む" ], [ 61, "ゅみ" ], [ 140, "ゅむ" ], [ 124, "ゅ" ], [ 8249, "〄げけく" ], [ 710, "〄げけぐ" ], [ 8240, "くそ" ], [ 352, "〄げけそ" ], [ 96, "ずだ" ], [ 126, "ゅだ" ], [ 110, "〉" ], [ 79, "ぶ" ], [ 85, "　け　" ], [ 81, "　け、" ], [ 67, "。け。" ], [ 165, "。け〃" ], [ 80, "々け々" ], [ 62, "々け〆" ], [ 37, "〇け〇" ], [ 171, "〇け〈" ], [ 8220, "《け《" ], [ 8221, "「け「" ], [ 180, "」け「" ], [ 64, "『け「" ], [ 33, "『け」" ], [ 35, "『け【" ], [ 87, "』け』" ], [ 154, "』け【" ], [ 93, "】け】" ], [ 60, "】け〒" ], [ 77, "〓け』" ], [ 170, "〓け【" ], [ 78, "〓け】" ], [ 182, "〓け〒" ], [ 179, "〓け〓" ], [ 95, "〔け〔" ], [ 163, "〔け〕" ], [ 164, "〖け〖" ], [ 36, "〘け〔" ], [ 168, "〘け〕" ], [ 186, "〘〷" ], [ 66, "〘け〗" ], [ 82, "〘け〘" ], [ 339, "〛け〛" ], [ 198, "〝〹" ], [ 166, "〞け〘" ], [ 86, "゚け々" ], [ 162, "゚け〇" ], [ 181, "゚け〈" ] ],
            Ow: {},
            wW: "(used in Myan Encylopedia)",
            css: [ "M-Myanmar1" ]
        },
        Academy: {
            QJ: "Academy",
            unicode: 0,
            wg: true,
            QG: 16,
            OE: [ 117, 99, 125, 67, 105, 112, 113, 90, 0, 110, 0, 88, 0, 205, 69, 119, 120, 39, 34, 101, 121, 122, 65, 98, 114, 60, 38, 118, 48, 111, 91, 86, 116, 0, 81, 0, 0, 0, 80, 233, 223, 0, 0, 0, 0, 0, 0, 0, 87, 77, 78, 221, 0, 0, 0, 183, 66, 82, 0, 0, 0, 0, 0, 0, 0, 0, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 97, 0, 100, 68, 4095, 102, 70, 109, 103, 59, 0, 74, 0, 71, 0, 0, 72, 58, 0, 115, 0, 0, 93, 106, 93, 106, 93, 106, 93, 106, 0, 208, 104, 104, 0, 63, 96, 0, 0, 124, 88, 79, 123, 62, 0, 0, 73, 89, 84, 0, 107, 108, 75, 76, 228, 228, 83, 219, 0, 0, 192, 0, 224, 0, 0, 161, 0, 0, 0, 206, 218, 226, 194, 0, 0, 0, 217, 217, 110, 79, 0, 52, 0, 195, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 213, 216, 215, 0, 214, 201, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 87, 166, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 220, 193 ],
            min: 34,
            max: 4095,
            O8: [ [ 81, "け、" ], [ 80, "け々" ], [ 233, "け〆" ], [ 223, "け〇" ], [ 87, "け』" ], [ 77, "け【" ], [ 78, "け】" ], [ 221, "け〒" ], [ 183, "け〖" ], [ 66, "け〗" ], [ 82, "け〘" ], [ 70, "〄げけ" ], [ 59, "さげ" ], [ 106, "っ" ], [ 93, "っ" ], [ 106, "っ" ], [ 93, "っ" ], [ 106, "っ" ], [ 93, "っ" ], [ 106, "っ" ], [ 104, "ぬ" ], [ 104, "ぬ" ], [ 124, "〚" ], [ 88, "《け》" ], [ 75, "み" ], [ 76, "む" ], [ 228, "ゅみ" ], [ 228, "ゅむ" ], [ 219, "ゅ" ], [ 192, "〄げけぐ" ], [ 224, "〄げけそ" ], [ 161, "ずだ" ], [ 206, "っみ" ], [ 218, "っみ" ], [ 226, "っず" ], [ 194, "っず" ], [ 217, "゚ご" ], [ 110, "〉" ], [ 79, "ぶ" ], [ 213, "《け《" ], [ 216, "「け「" ], [ 215, "」け「" ], [ 214, "『け「" ], [ 201, "『〬" ], [ 87, "け』" ], [ 166, "け【" ] ],
            Ow: {},
            wW: "(Academy,Aeyar,Aekari...)",
            css: [ "Academy", "Aeyar", "Aekari" ]
        },
        King: {
            QJ: "Kingmyanmarsar",
            unicode: 0,
            wg: true,
            QG: 14,
            OE: [ 117, 99, 42, 67, 105, 112, 113, 90, 0, 110, 131, 88, 128, 130, 37, 119, 120, 39, 34, 101, 121, 122, 65, 98, 114, 44, 38, 118, 48, 111, 91, 86, 116, 85, 81, 126, 161, 0, 80, 62, 153, 172, 0, 172, 0, 0, 0, 0, 151, 136, 78, 60, 77, 96, 137, 138, 66, 82, 0, 0, 152, 0, 0, 0, 0, 0, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 97, 0, 100, 68, 4095, 102, 70, 109, 103, 58, 0, 74, 0, 71, 36, 0, 72, 59, 0, 115, 0, 0, 45, 106, 95, 125, 45, 106, 95, 125, 0, 104, 139, 140, 0, 47, 63, 0, 69, 38, 88, 79, 123, 46, 0, 92, 73, 89, 84, 0, 107, 108, 75, 76, 43, 155, 83, 145, 0, 146, 133, 215, 134, 0, 0, 124, 35, 0, 0, 0, 0, 60, 62, 0, 0, 0, 94, 94, 33, 79, 0, 52, 0, 144, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 165, 215, 203, 0, 143, 142, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 87, 136, 0, 0, 147, 61, 149, 132, 0, 40, 41, 0, 0, 0, 0, 0, 0, 158, 159 ],
            min: 33,
            max: 4095,
            O8: [ [ 85, "け　" ], [ 81, "け、" ], [ 126, "け。" ], [ 161, "け〃" ], [ 80, "け々" ], [ 62, "け〆" ], [ 153, "け〇" ], [ 172, "け〈" ], [ 172, "け《" ], [ 151, "け』" ], [ 136, "け【" ], [ 78, "け】" ], [ 60, "け〒" ], [ 77, "け〓" ], [ 96, "け〔" ], [ 137, "け〕" ], [ 138, "け〖" ], [ 66, "け〗" ], [ 82, "け〘" ], [ 152, "け〛" ], [ 70, "〄げけ" ], [ 58, "さげ" ], [ 36, "ゅず" ], [ 106, "っ" ], [ 95, "っ" ], [ 125, "っ" ], [ 106, "っ" ], [ 95, "っ" ], [ 125, "っ" ], [ 139, "ぬ" ], [ 140, "ぬ" ], [ 69, "〓" ], [ 38, "〚" ], [ 88, "《け》" ], [ 75, "み" ], [ 76, "む" ], [ 43, "ゅみ" ], [ 155, "ゅむ" ], [ 145, "ゅ" ], [ 146, "〄げけく" ], [ 133, "〄げけぐ" ], [ 215, "くそ" ], [ 134, "〄げけそ" ], [ 124, "ずだ" ], [ 35, "ゅだ" ], [ 60, "っず" ], [ 62, "っず" ], [ 94, "゚ご" ], [ 33, "〉" ], [ 79, "ぶ" ], [ 165, "《け《" ], [ 215, "「け「" ], [ 203, "」け「" ], [ 143, "『け「" ], [ 142, "『〬" ], [ 87, "け』" ], [ 136, "け【" ] ],
            Ow: {},
            wW: "(King...)",
            css: [ "Kingmyanmarsar" ]
        },
        Gandamar: {
            QJ: "Gandamar-Letter1",
            unicode: 0,
            wg: true,
            QG: 16,
            OE: [ 117, 99, 125, 67, 105, 112, 113, 90, 0, 110, 35, 88, 0, 205, 69, 119, 120, 39, 34, 101, 121, 122, 65, 98, 114, 44, 92, 118, 48, 111, 91, 86, 116, 0, 81, 190, 162, 0, 80, 233, 223, 0, 0, 0, 0, 0, 161, 0, 87, 77, 0, 221, 0, 0, 0, 212, 66, 82, 0, 0, 0, 0, 163, 0, 0, 0, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 97, 0, 100, 68, 4095, 102, 70, 109, 103, 58, 0, 74, 0, 71, 207, 0, 72, 59, 0, 115, 0, 0, 93, 106, 93, 106, 93, 106, 93, 106, 0, 104, 208, 208, 0, 63, 47, 0, 243, 124, 35, 79, 123, 46, 0, 0, 73, 89, 84, 0, 107, 108, 75, 76, 228, 228, 83, 219, 0, 0, 192, 0, 224, 0, 0, 0, 0, 0, 0, 0, 0, 226, 194, 0, 0, 0, 210, 217, 110, 215, 0, 52, 0, 195, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 213, 216, 64, 0, 214, 201, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 87, 77, 0, 0, 0, 0, 230, 0, 0, 0, 0, 186, 187, 191, 181, 60, 0, 220, 193 ],
            min: 34,
            max: 4095,
            O8: [ [ 81, "け、" ], [ 190, "け。" ], [ 162, "け〃" ], [ 80, "け々" ], [ 233, "け〆" ], [ 223, "け〇" ], [ 87, "け』" ], [ 77, "け【" ], [ 221, "け〒" ], [ 212, "け〖" ], [ 66, "け〗" ], [ 82, "け〘" ], [ 163, "け〝" ], [ 70, "〄げけ" ], [ 58, "さげ" ], [ 207, "ゅず" ], [ 106, "っ" ], [ 93, "っ" ], [ 106, "っ" ], [ 93, "っ" ], [ 106, "っ" ], [ 93, "っ" ], [ 106, "っ" ], [ 208, "ぬ" ], [ 208, "ぬ" ], [ 243, "〓" ], [ 124, "〚" ], [ 35, "《け》" ], [ 75, "み" ], [ 76, "む" ], [ 228, "ゅみ" ], [ 228, "ゅむ" ], [ 219, "ゅ" ], [ 192, "〄げけぐ" ], [ 224, "〄げけそ" ], [ 226, "っず" ], [ 194, "っず" ], [ 210, "゚ご" ], [ 110, "〉" ], [ 215, "ぶ" ], [ 213, "《け《" ], [ 216, "「け「" ], [ 64, "」け「" ], [ 214, "『け「" ], [ 201, "『〬" ], [ 87, "け』" ], [ 77, "け【" ] ],
            Ow: {},
            wW: "(Gandamar...)",
            css: [ "Gandamar-Letter1", "Gandamar" ]
        },
        Metrix: {
            QJ: "Metrix-1",
            unicode: 0,
            wg: true,
            QG: 15,
            OE: [ 117, 99, 42, 67, 105, 112, 113, 90, 0, 110, 35, 88, 33, 161, 80, 119, 120, 39, 34, 101, 121, 122, 65, 98, 114, 44, 38, 118, 48, 111, 91, 86, 116, 250, 169, 190, 162, 0, 246, 228, 198, 209, 0, 179, 178, 0, 0, 214, 197, 172, 180, 168, 233, 220, 230, 193, 199, 174, 0, 0, 8217, 0, 0, 0, 0, 0, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 97, 0, 100, 68, 4095, 102, 70, 109, 103, 58, 0, 74, 0, 71, 84, 0, 72, 59, 0, 115, 0, 0, 106, 77, 78, 66, 106, 77, 78, 66, 0, 104, 89, 85, 0, 63, 47, 0, 69, 189, 124, 79, 123, 92, 0, 243, 237, 252, 254, 0, 107, 108, 75, 76, 73, 170, 83, 167, 0, 216, 208, 240, 248, 0, 0, 82, 81, 87, 0, 205, 251, 60, 62, 0, 0, 0, 211, 218, 241, 234, 0, 164, 0, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 165, 215, 185, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 229, 166, 0, 0, 43, 45, 95, 94, 37, 40, 41, 171, 187, 0, 181, 231, 46, 93, 125 ],
            min: 33,
            max: 8217,
            O8: [ [ 250, "け　" ], [ 169, "け、" ], [ 190, "け。" ], [ 162, "け〃" ], [ 246, "け々" ], [ 228, "け〆" ], [ 198, "け〇" ], [ 209, "け〈" ], [ 179, "け《" ], [ 178, "け》" ], [ 214, "け『" ], [ 197, "け』" ], [ 172, "け【" ], [ 180, "け】" ], [ 168, "け〒" ], [ 233, "け〓" ], [ 220, "け〔" ], [ 230, "け〕" ], [ 193, "け〖" ], [ 199, "け〗" ], [ 174, "け〘" ], [ 8217, "け〛" ], [ 70, "〄げけ" ], [ 58, "さげ" ], [ 84, "ゅず" ], [ 77, "っ" ], [ 78, "っ" ], [ 66, "っ" ], [ 106, "っ" ], [ 77, "っ" ], [ 78, "っ" ], [ 66, "っ" ], [ 89, "ぬ" ], [ 85, "ぬ" ], [ 69, "〓" ], [ 189, "〚" ], [ 124, "《け》" ], [ 75, "み" ], [ 76, "む" ], [ 73, "ゅみ" ], [ 170, "ゅむ" ], [ 167, "ゅ" ], [ 216, "〄げけく" ], [ 208, "〄げけぐ" ], [ 240, "くそ" ], [ 248, "〄げけそ" ], [ 82, "ずだ" ], [ 81, "ゅだ" ], [ 87, "ゅずだ" ], [ 205, "っみ" ], [ 251, "っみ" ], [ 60, "っず" ], [ 62, "っず" ], [ 211, "゚ご" ], [ 241, "〉" ], [ 234, "ぶ" ], [ 165, "《け《" ], [ 215, "「け「" ], [ 185, "」け「" ], [ 64, "『け「" ], [ 229, "け』" ], [ 166, "け【" ] ],
            Ow: {},
            wW: "Metrix-1(Matrix...)",
            css: [ "Metrix-1" ]
        },
        CE: {
            QJ: "CECLASSIC",
            unicode: 0,
            wg: true,
            QG: 16,
            OE: [ 117, 99, 42, 67, 105, 112, 113, 90, 220, 110, 227, 88, 228, 229, 37, 119, 120, 39, 34, 101, 121, 122, 65, 98, 114, 44, 38, 118, 48, 111, 91, 86, 116, 85, 81, 126, 239, 0, 80, 62, 242, 241, 0, 0, 0, 0, 194, 193, 87, 212, 78, 60, 77, 96, 255, 253, 66, 82, 0, 0, 219, 0, 195, 0, 0, 0, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 97, 0, 100, 68, 4095, 102, 70, 109, 103, 58, 0, 74, 0, 71, 36, 0, 72, 59, 0, 115, 0, 0, 95, 106, 94, 125, 95, 106, 94, 125, 0, 104, 104, 104, 0, 47, 63, 0, 69, 64, 245, 79, 123, 46, 0, 92, 73, 89, 84, 0, 107, 108, 75, 76, 43, 225, 83, 83, 0, 204, 244, 254, 217, 0, 0, 124, 35, 0, 0, 210, 211, 60, 62, 0, 0, 0, 0, 93, 33, 246, 0, 214, 0, 226, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 238, 199, 202, 0, 208, 233, 0, 0, 0, 0, 0, 0, 0, 234, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 87, 212, 0, 0, 0, 0, 353, 224, 188, 0, 0, 171, 172, 192, 732, 8221, 0, 186, 187 ],
            min: 33,
            max: 8221,
            O8: [ [ 220, "々だ" ], [ 85, "け　" ], [ 81, "け、" ], [ 126, "け。" ], [ 239, "け〃" ], [ 80, "け々" ], [ 62, "け〆" ], [ 242, "け〇" ], [ 241, "け〈" ], [ 193, "け『" ], [ 87, "け』" ], [ 212, "け【" ], [ 78, "け】" ], [ 60, "け〒" ], [ 77, "け〓" ], [ 96, "け〔" ], [ 255, "け〕" ], [ 253, "け〖" ], [ 66, "け〗" ], [ 82, "け〘" ], [ 219, "け〛" ], [ 195, "け〝" ], [ 70, "〄げけ" ], [ 58, "さげ" ], [ 36, "ゅず" ], [ 106, "っ" ], [ 94, "っ" ], [ 125, "っ" ], [ 95, "っ" ], [ 106, "っ" ], [ 94, "っ" ], [ 125, "っ" ], [ 104, "ぬ" ], [ 104, "ぬ" ], [ 69, "〓" ], [ 64, "〚" ], [ 245, "《け》" ], [ 75, "み" ], [ 76, "む" ], [ 43, "ゅみ" ], [ 225, "ゅむ" ], [ 83, "ゅ" ], [ 204, "〄げけく" ], [ 244, "〄げけぐ" ], [ 254, "くそ" ], [ 217, "〄げけそ" ], [ 124, "ずだ" ], [ 35, "ゅだ" ], [ 210, "っみ" ], [ 211, "っみ" ], [ 60, "っず" ], [ 62, "っず" ], [ 33, "〉" ], [ 246, "ぶ" ], [ 238, "《け《" ], [ 199, "「け「" ], [ 202, "」け「" ], [ 208, "『け「" ], [ 233, "『〬" ], [ 234, "び〲" ], [ 87, "け』" ], [ 212, "け【" ] ],
            Ow: {},
            wW: "(CENORMAL,CE EXCEL...)",
            css: [ "CECLASSIC", "CENORMAL" ]
        },
        MSHEAVY: {
            QJ: "MS-HEAVY",
            unicode: 0,
            wg: true,
            QG: 12,
            OE: [ 117, 99, 42, 67, 105, 112, 113, 90, 0, 110, 60, 88, 62, 130, 37, 119, 120, 39, 34, 101, 121, 122, 65, 98, 114, 44, 38, 118, 48, 111, 91, 86, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 97, 0, 100, 68, 4095, 102, 70, 109, 103, 58, 0, 74, 0, 71, 36, 0, 72, 59, 0, 115, 0, 0, 45, 106, 95, 125, 45, 106, 95, 125, 0, 104, 139, 140, 0, 47, 63, 0, 69, 38, 64, 79, 123, 46, 0, 92, 73, 89, 84, 0, 107, 108, 75, 76, 43, 155, 83, 0, 0, 216, 208, 240, 248, 0, 0, 124, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 94, 33, 79, 0, 52, 0, 163, 0, 163, 179, 183, 195, 165, 164, 174, 176, 0, 0, 0, 0, 180, 190, 0, 173, 168, 188, 172, 178, 162, 0, 170, 171, 184, 169, 189, 192, 166, 0, 193, 175, 167, 185, 182, 187, 186, 177, 191, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 0, 0, 0, 0, 0, 0, 40, 41, 0, 0, 0, 0, 0, 0 ],
            min: 33,
            max: 4095,
            O8: [ [ 70, "〄げけ" ], [ 58, "さげ" ], [ 36, "ゅず" ], [ 106, "っ" ], [ 95, "っ" ], [ 125, "っ" ], [ 106, "っ" ], [ 95, "っ" ], [ 125, "っ" ], [ 139, "ぬ" ], [ 140, "ぬ" ], [ 69, "〓" ], [ 38, "〚" ], [ 64, "《け》" ], [ 75, "み" ], [ 76, "む" ], [ 43, "ゅみ" ], [ 155, "ゅむ" ], [ 216, "〄げけく" ], [ 208, "〄げけぐ" ], [ 240, "くそ" ], [ 248, "〄げけそ" ], [ 124, "ずだ" ], [ 35, "ゅだ" ], [ 33, "〉" ], [ 79, "ぶ" ], [ 163, "　〡" ], [ 179, "　〢" ], [ 183, "。〣" ], [ 195, "。〤" ], [ 165, "々〦" ], [ 164, "々〧" ], [ 174, "〇〦" ], [ 176, "〇〨" ], [ 180, "『〢" ], [ 190, "『け「" ], [ 173, "『〯" ], [ 168, "』〰" ], [ 188, "』〱" ], [ 172, "】〲" ], [ 178, "】〳" ], [ 162, "び〰" ], [ 170, "び〲" ], [ 171, "び〳" ], [ 184, "び〴" ], [ 169, "〔〵" ], [ 189, "〔〶" ], [ 192, "〖〷" ], [ 166, "〘〵" ], [ 193, "〘〷" ], [ 175, "〘〸" ], [ 167, "〘〹" ], [ 185, "〛〸" ], [ 182, "〛〼" ], [ 187, "〝〹" ], [ 186, "〞〹" ], [ 177, "ぶ〦" ], [ 191, "ぶ〨" ] ],
            Ow: {},
            wW: "(MS-MOOM)",
            css: [ "MS-HEAVY", "MS-MOOM" ]
        },
        WwinBurmese: {
            QJ: "Wwin_Burmese",
            unicode: 0,
            wg: true,
            QG: 16,
            OE: [ 117, 99, 42, 67, 105, 112, 113, 90, 0, 110, 201, 88, 200, 202, 37, 119, 120, 39, 34, 101, 121, 122, 65, 98, 114, 44, 38, 118, 48, 111, 91, 86, 116, 85, 81, 126, 402, 0, 80, 62, 8230, 198, 0, 0, 0, 0, 8222, 0, 339, 206, 78, 60, 77, 96, 8240, 352, 0, 82, 0, 0, 8224, 0, 0, 0, 0, 0, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 97, 0, 100, 68, 4095, 102, 70, 109, 103, 58, 0, 74, 0, 71, 36, 0, 72, 59, 0, 115, 115, 0, 106, 61, 43, 125, 106, 61, 43, 125, 0, 104, 64, 338, 0, 47, 63, 0, 69, 182, 207, 79, 123, 46, 0, 92, 73, 89, 84, 0, 107, 108, 75, 76, 95, 170, 83, 234, 0, 245, 244, 246, 248, 0, 0, 124, 35, 233, 0, 241, 240, 60, 62, 0, 0, 0, 0, 94, 33, 79, 0, 8218, 0, 193, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 195, 196, 197, 0, 190, 191, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 204, 205, 0, 0, 0, 0, 0, 0, 87, 710, 0, 0, 353, 0, 187, 167, 181, 0, 0, 161, 162, 180, 0, 732, 178, 0, 0 ],
            min: 33,
            max: 8240,
            O8: [ [ 85, "け　" ], [ 81, "け、" ], [ 126, "け。" ], [ 402, "け〃" ], [ 80, "け々" ], [ 62, "け〆" ], [ 8230, "け〇" ], [ 198, "け〈" ], [ 339, "け』" ], [ 206, "け【" ], [ 78, "け】" ], [ 60, "け〒" ], [ 77, "け〓" ], [ 96, "け〔" ], [ 8240, "け〕" ], [ 352, "け〖" ], [ 82, "け〘" ], [ 8224, "け〛" ], [ 70, "〄げけ" ], [ 58, "さげ" ], [ 36, "ゅず" ], [ 115, "だ" ], [ 61, "っ" ], [ 43, "っ" ], [ 125, "っ" ], [ 106, "っ" ], [ 61, "っ" ], [ 43, "っ" ], [ 125, "っ" ], [ 64, "ぬ" ], [ 338, "ぬ" ], [ 69, "〓" ], [ 182, "〚" ], [ 207, "《け》" ], [ 75, "み" ], [ 76, "む" ], [ 95, "ゅみ" ], [ 170, "ゅむ" ], [ 234, "ゅ" ], [ 245, "〄げけく" ], [ 244, "〄げけぐ" ], [ 246, "くそ" ], [ 248, "〄げけそ" ], [ 124, "ずだ" ], [ 35, "ゅだ" ], [ 233, "ゅずだ" ], [ 241, "っみ" ], [ 240, "っみ" ], [ 60, "っず" ], [ 62, "っず" ], [ 33, "〉" ], [ 79, "ぶ" ], [ 195, "《け《" ], [ 196, "「け「" ], [ 197, "」け「" ], [ 190, "『け「" ], [ 191, "『〬" ], [ 192, "『〯" ], [ 204, "ぶ〦" ], [ 205, "ぶ〨" ], [ 87, "け』" ], [ 710, "け【" ] ],
            Ow: {},
            wW: "(Wwin...)",
            css: [ "Wwin_Burmese" ]
        },
        Kannaka: {
            QJ: "Kannaka",
            unicode: 0,
            wg: true,
            QG: 14,
            OE: [ 107, 75, 103, 71, 99, 115, 83, 122, 90, 118, 33, 64, 35, 36, 37, 116, 84, 100, 68, 110, 112, 80, 98, 66, 109, 121, 114, 108, 119, 113, 104, 76, 65, 182, 402, 169, 220, 0, 223, 201, 171, 219, 0, 0, 0, 0, 0, 0, 124, 202, 187, 209, 127, 74, 196, 96, 177, 181, 0, 0, 172, 0, 0, 0, 0, 0, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 0, 101, 0, 105, 94, 4095, 92, 231, 97, 229, 197, 0, 180, 0, 88, 87, 0, 77, 59, 0, 165, 0, 0, 174, 194, 8220, 8221, 0, 0, 0, 0, 0, 46, 214, 62, 0, 39, 34, 0, 78, 82, 8482, 85, 69, 102, 0, 339, 106, 210, 200, 0, 117, 168, 111, 248, 79, 216, 120, 72, 0, 228, 199, 732, 67, 0, 0, 193, 89, 8222, 0, 8217, 8216, 0, 0, 0, 0, 0, 0, 710, 86, 233, 203, 38, 0, 73, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 161, 163, 162, 0, 0, 164, 81, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 234, 235, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 45, 0, 47, 0, 40, 41, 91, 93, 63, 0, 123, 125, 60, 60, 61 ],
            min: 33,
            max: 8482,
            O8: [ [ 90, "々だ" ], [ 182, "け　" ], [ 402, "け、" ], [ 169, "け。" ], [ 220, "け〃" ], [ 223, "け々" ], [ 201, "け〆" ], [ 171, "け〇" ], [ 219, "け〈" ], [ 124, "け』" ], [ 202, "け【" ], [ 187, "け】" ], [ 209, "け〒" ], [ 127, "け〓" ], [ 74, "け〔" ], [ 196, "け〕" ], [ 96, "け〖" ], [ 177, "け〗" ], [ 181, "け〘" ], [ 172, "け〛" ], [ 231, "〄げけ" ], [ 197, "さげ" ], [ 87, "ゅず" ], [ 194, "っ" ], [ 8220, "っ" ], [ 8221, "っ" ], [ 214, "ぬ" ], [ 62, "ぬ" ], [ 78, "〓" ], [ 82, "〚" ], [ 8482, "《け》" ], [ 111, "み" ], [ 248, "む" ], [ 79, "ゅみ" ], [ 216, "ゅむ" ], [ 72, "ゅ" ], [ 228, "〄げけく" ], [ 199, "〄げけぐ" ], [ 732, "くそ" ], [ 67, "〄げけそ" ], [ 193, "ずだ" ], [ 89, "ゅだ" ], [ 8222, "ゅずだ" ], [ 8217, "っみ" ], [ 8216, "っみ" ], [ 86, "〉" ], [ 233, "ぶ" ], [ 203, "ぶぐ" ], [ 70, "《" ], [ 161, "《け《" ], [ 163, "「け「" ], [ 162, "」け「" ], [ 164, "『け」" ], [ 81, "『け【" ], [ 234, "゚け々" ], [ 235, "゚け〇" ] ],
            Ow: {},
            wW: "(used in En-MM Dict)",
            css: [ "Kannaka" ]
        },
        Arial: {
            QG: 10,
            OE: [],
            Ow: {},
            wg: false,
            QJ: "Arial",
            css: [ "Arial" ]
        },
        default: {
            QG: 10,
            OE: [],
            Ow: {},
            wg: false
        }
    };
    (function() {
        for (var e in Oa) if (Oa[e]["inherit"]) for (var t in Oa[Oa[e]["inherit"]]) if (!Oa[e][t]) Oa[e][t] = Oa[Oa[e]["inherit"]][t];
    })();
    var hz = "Zawgyi";
    var Qc = {
        en: [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december", ",", "am", "pm" ],
        bu: [ "တနဂၤေႏြေန႕", "တနလၤာေန႕", "အဂၤါေန႕", "ဗုဒၶဟူးေန႕", "ၾကာသာပေတးေန႕", "ေသာၾကာေန႕", "စေနေန႕", "ဇန္နဝါရီလ", "ေဖေဖာ္ဝါရီလ", "မတ္လ", "ဧျပီလ", "ေမလ", "ဂြၽန္လ", "ဂ်ဴလိုင္လ", "ဩဂုတ္လ", "စက္တင္ဘာလ", "ေအာက္တိုဘာလ", "ႏိုဝင္ဘာလ", "ဒီဇင္ဘာလ", "၊", "မနက္ခင္း", "မြန္းလြဲပိုင္း" ]
    };
    String.prototype.gL = function(src, gX) {
        if (!gX) gX = {};
        var Oo = Oa[src];
        var QV = this;
        if (/[^၁-၉]၀/.test(QV)) {
            QV = QV.replace(/([^၁-၉])၀/g, "$1ဝ");
        }
        if (!gX["Qv"]) {
            var wT = Oo.max < 4255 ? Oo.max : 4255;
            for (var i = 4130; i <= wT; i++) {
                if (i >= 4160 && i <= 4169) continue;
                var Oi = hT(i);
                var re = eval("/(" + Oi + ")" + Oi + "+/gm");
                if (re.test(QV)) QV = QV.replace(re, "$1");
            }
        }
        if (Oo["order"]) {
            if (Oo["order"]["NA"]) {
                var Ot = Oo["order"]["NA"]["Ov"];
                for (var i = 0; i < Ot.length; i++) {
                    var re = eval("/" + Ot[i][0] + "/g");
                    if (re.test(QV)) QV = QV.replace(re, Ot[i][1]);
                }
            }
            if (Oo["order"]["h_"]) {
                var Ot = Oo["order"]["h_"];
                for (var i = 0; i < Ot.length; i++) {
                    var re = eval("/" + Ot[i][0] + "/g");
                    if (re.test(QV)) QV = QV.replace(re, Ot[i][1]);
                }
            }
            if (Oo["order"]["KT"]) {
                var Ot = Oo["order"]["KT"];
                for (var i = 0; i < Ot.length - 2; i++) {
                    var re = eval("/([" + Ot.slice(i + 1).join("") + "]+)(" + Ot[i] + ")/g");
                    if (re.test(QV)) QV = QV.replace(re, "$2$1");
                }
            }
            if (Oo["order"]["after"]) {
                var Ot = Oo["order"]["after"];
                for (var i = 0; i < Ot.length; i++) {
                    var re = eval("/" + Ot[i][0] + "/g");
                    if (re.test(QV)) QV = QV.replace(re, Ot[i][1]);
                }
            }
        }
        return QV;
    };
    String.prototype.Ng = function(src, dest, gX) {
        if (!gX) gX = {};
        var Oz = Oa[src];
        var Oo = Oa[dest];
        var NV = {};
        var Nc = {};
        var hY = this;
        var QV = "";
        var gq = 12288;
        var wb = 16;
        var K8 = 226;
        if (Oz["order"]) {
            var Ot = Oz["order"]["NA"]["O0"];
            for (var i = 0; i < Ot.length; i++) {
                var re = eval("/" + Ot[i][0] + "/g");
                if (re.test(hY)) hY = hY.replace(re, Ot[i][1]);
            }
        }
        for (var i = 0; i < K8; i++) {
            if (Oz.OE[i] != 0) {
                NV[Oz.OE[i]] = i + gq;
            }
        }
        for (var i = 0; i < Oz.O8.length; i++) {
            Nc[Oz.O8[i][0]] = (255 & NV[Oz.O8[i][0]]) + (i << 8);
        }
        for (var i = 0; i < hY.length; i++) {
            var Oi = hY.charCodeAt(i);
            if (Oi >= Oz.min && Oi <= Oz.max) {
                if (Nc[Oi] && !Oo.OE[Nc[Oi] & 255] != 0) {
                    var hZ = Oz.O8[Nc[Oi] >> 8 & 255][1];
                    QV += hZ;
                    continue;
                }
                if (NV[Oi]) {
                    QV += hT(NV[Oi]);
                    continue;
                }
            }
            QV += hT(Oi);
        }
        hY = QV;
        QV = "";
        for (var j = 0; j < hY.length; j++) {
            var Oi = hY.charCodeAt(j);
            if (Oi >= gq && Oi <= gq + K8) {
                if (Oo.OE[Oi - gq] != 0) {
                    var h2 = false;
                    if (hY.length > 1) {
                        for (var i = 0; i < Oo.O8.length; i++) {
                            if (Oo.O8[i][1].length > 1 && hY.slice(j).indexOf(Oo.O8[i][1]) == 0) {
                                QV += hT(Oo.O8[i][0]);
                                j += Oo.O8[i].length - 1;
                                h2 = true;
                                break;
                            }
                        }
                    }
                    if (!h2) QV += hT(Oo.OE[Oi - gq]);
                    continue;
                }
            }
            QV += hT(Oi);
        }
        QV = QV.gL(dest);
        return QV;
    };
    String.prototype.gp = function() {
        var e = "";
        var t = [ "0123456789", "၀၁၂၃၄၅၆၇၈၉" ];
        for (var a = 0; a < this.length; a++) {
            e += /[0-9]/.test(this.charAt(a)) ? t[1].charAt(this.charAt(a)) : this.charAt(a);
        }
        return e;
    };
    String.prototype.gj = function() {
        var re;
        var Oc = String(this);
        for (var Oy = 0; Oy < Qc.en.length; Oy++) {
            var re = eval("/" + Qc.en[Oy] + "/gi");
            if (re.test(Oc)) {
                Oc = Oc.replace(re, Qc.bu[Oy]);
            }
        }
        return Oc.gp();
    };
    String.prototype.QZ = function(Ob) {
        Ob = Ob ? Ob : "Zawgyi";
        if (!Oa[Ob]["order"]) {
            return this;
        }
        var re;
        var Oc = this;
        if (Oa[Ob]["order"]["KT"]) {
            var Ot = Oa[Ob]["order"]["KT"];
            for (var i = 0; i < Ot.length - 2; i++) {
                var re = eval("/([" + Ot.slice(i + 1).join("") + "]+)(" + Ot[i] + ")/g");
                if (re.test(Oc)) Oc = Oc.replace(re, "$2$1");
            }
        }
        return Oc;
    };
    function h4(e, t) {
        var a = "";
        t = t ? t : hz;
        var r = Oa[t].OE;
        for (var i = 0; i < e.length; i++) {
            for (var n = 0; n < r.length; n++) {
                if (hT(r[n]) == e.charAt(i)) {
                    if (r[n + 33] != 0 && n < 33) {
                        a += hT(r[n + 33]);
                    } else {
                        a += e.charAt(i);
                    }
                    break;
                }
            }
        }
        return a;
    }
    function hF(e, t) {
        var a = "";
        t = t ? t : hz;
        var r = Oa[t].OE;
        for (var i = 0; i < e.length; i++) {
            for (var n = 0; n < r.length; n++) {
                if (hT(r[n]) == e.charAt(i)) {
                    if (n > 32 && n < 32 + 33) {
                        a += hT(r[n - 33]);
                    } else {
                        a += e.charAt(i);
                    }
                    break;
                }
            }
        }
        return a;
    }
    function wC(e, t) {
        t = t ? t : hz;
        var a = Oa[t].OE;
        for (var r = 0; r < a.length; r++) {
            if (hT(a[r]) == e) {
                return r;
            }
        }
    }
    function wD(e, t) {
        t = t ? t : hz;
        return hT(Oa[t].OE[e]);
    }
    function KW(e) {
        var t = wC(e);
        if (t < 33) {
            return 1;
        } else if (t < 66 || t > 195 && t < 202) {
            return 2;
        } else if (t < 76) {
            return 3;
        } else {
            return 0;
        }
    }
    function hG(e, t, a) {
        t = t ? t : OD[OD.x]["Ow"];
        a = a ? a : hz;
        var r = Oa[t];
        for (var i = 0; i < r.OE.length; i++) {
            if (r.OE[i] == e) {
                return Oa[a].OE[i];
            }
        }
        return false;
    }
    function Qn(e, t) {
        t = t ? t : OD[OD.x]["Ow"];
        var a = Oa[t];
        return e.OY(a.OE) != -1;
    }
    gJ.burmese = true;
    var gQ = {
        Zawgyi: "ေျမႇာင္း,ေျမႇာင့္,ေျဖာင့္,ေျခာင္း,ေက်ာင္း,ေခ်ာင္း,ျမႇိဳက္,ဗ်ိဳင္း,ခ်ိဳင္း,ေျမႇာက္,က်ိဳင္း,ေညႇာင့္,ျပိဳင္း,ေႏွာင္း,ေျဖာင္း,ေသွ်ာင္,ေဖ်ာင္း,ေၾကာင့္,ေႏွာင့္,ေျငာင့္,ေၾကာင္း,ေလ်ာင္း,ေျမႇာင္,ျငႇိမ္း,ေပ်ာင္း,ေျမာင္း,ခ်ိဳင့္,ေလွ်ာက္,ေျပာင္း,ေမွာင့္,ေျဗာင္း,လွိမ့္,ျဖဳန္း,လွ်ိဳး,ဂ်ိဳက္,ေငါင္း,ေရာင္း,ေခ်ာင္,ဘြိဳင္,ေမွာင္,ေလွာက္,ဂိုင္း,ေလွ်ာ္,ျပိဳင္,ကြၽန္း,ျပဳန္း,ေျဗာင္,ရွိန္း,ထိုင္း,ေဖ်ာက္,ေဒါင္း,ျခိဳက္,ျမႇင့္,ေစာင့္,ကိုင္း,ေဟာင္း,ခ်ိမ့္,ႏိုင္း,ေျဖာင္,ျဗဳန္း,သွ်ိဳး,ေၾကာင္,ရိုင္း,ေရာင့္,ေျပာင္,ေပါင္း,ျငိမ္း,သိုင္း,ပိုင္း,ဟိုင္း,ျခိမ့္,ျဖိဳင္,ႏိႈင္း,ေမာင္,ေမာင္း,ေယာင္း,ျခိမ္း,ေျမာင္,က်ိန္း,ၾကိမ္း,ေမွ်ာ္,ေအာင့္,လွ်မ္း,ေရွာင္,ျပိန္း,ခ်ိန္း,ေဖာင္း,စိုင္း,ေပ်ာက္,ေလ်ာက္,ဗိုင္း,ေစာင္း,ျမိန္႔,ေမွ်ာ့,ေရွာက္,ႂကြင္း,ဂိုဏ္း,ေဆာင့္,မိႈင္း,ဗ်ိဳက္,ေခ်ာက္,ေထာင့္,ေျဖာက္,ေၾကာက္,လိႈင္း,ေဗာင္း,ႁခြမ္း,ဖိုင့္,မွ်ဥ္း,မိုင္း,လွ်ိဳ႕,ေက်ာက္,ပုဏ္,ေကာင္း,ေလွ်ာ့,ေဆာင္း,ေဒါင့္,ခ်ဳန္း,ေသာင္း,ျမႇဳပ္,ေညာင္း,ေတာင့္,ျမိဳက္,ေတာင္း,ျမိဳင္,ေမွာက္,ေဇာင္း,ႁခြင္း,ျမႇံဳး,ေျဗာက္,ျဂိဳဟ္,မွ်ိဳ႕,ခြၽန္း,ေလွာင္,ႏွိမ့္,ေလာင္း,ေခါင္း,ေျခာက္,ခ်ိဳင္,မွိန္း,ေဂ်ာက္,ျပြမ္း,ေခါင့္,ေျပာက္,ျငိမ့္,ေဘာင္း,ကိုယ့္,ကြၽမ္း,က်ိဳက္,ေမ်ာက္,ေႏွာင္,ဒိုင္း,ၾကိဳက္,ေထာင္း,ၾကိဳင္,ျပိဳက္,ေျမာက္,ဝိုင္း,ဆိုင္း,တိုင္း,စြမ္း,မွိန္,ျမိတ္,မ်ဥ္း,က်ဥ္း,ျခဳတ္,က်ံဳး,က်န္း,ရိႈက္,ဖ်ိဳး,ထိန္း,ေလွာ္,ခ်ိဳး,ေနာင္,ျမည္း,ေခြၽး,ကြၽန္,ျဗံဳး,ျငိမ္,မွည့္,ရည္း,ယြန္း,ပိုလ္,ရိုက္,ေလွ်ာ,ကြန္း,ဖြင့္,ေကာင္,ေက်ာ္,ေခါင္,ဖိန္း,ႏုန္း,ေပ်ာ္,ေယာင္,ခ်ဳတ္,ဗုန္း,ျဗိစ္,ျပြန္,လႊင့္,လိႈင္,ရုန္း,ကြမ္း,ေဖာင္,ျငမ္း,ဘိုင္,ဟုန္း,ေဖာက္,ေဘာက္,ဖိမ့္,ေျဖာ္,လိႈက္,ခ်ိတ္,လိုက္,ျပည့္,ဝုန္း,ဖိုင္,ေဖာဋ္,လွန္း,လိမ့္,ပိုင္,ထြန္႔,ဘိန္း,သြန္း,ႏုန္႔,ေၾကာ္,ကြၽတ္,ရိုင္,က်င့္,လွ်ပ္,ရွမ္း,လွ်ိဳ,ေသာပ္,ဗိုက္,ျဖည္း,ေဗာက္,ရႊန္း,ရွိန္,ခ်ဳပ္,လ်ဥ္း,ဗြမ္း,ျခဳပ္,စိမ္း,စုန္႔,ႏႈန္း,ေလာက္,ခ်ိပ္,ေဆာင္,တိုင္,ႏြမ္း,ကိုင္,ျမန္း,ေဂါက္,ျပံဳး,ႂကြက္,သိမ့္,လွ်င္,ေကာက္,ေထာင္,လိန္း,ပိန္း,ဘုန္း,ေထာက္,စ်ာန္,ပုန္း,သွ်ား,စိုင္,ဝွန္း,ႏွန္႔,ၾကန္႔,ဝိုက္,ဖိုလ္,ခ်ည္း,ေမာက္,ဝွမ္း,ျခင္း,နိမ့္,ၾကံဳး,ေမွာ္,ျပိတ္,ပိုက္,ျပန္႔,လြင့္,ၾကဳတ္,စြန္း,ျဖဳတ္,စြန္႔,ဆြန္႔,လွန္႔,ဆုန္း,ႏွင္း,သိုက္,စိန္း,လိုဏ္,ျပိန္,ဒ်န္႔,လႊမ္း,ၾကိမ္,ဒိုက္,ဒုန္း,ျဖည့္,ၾကမ္း,ႂကြား,ခ်င့္,လြန္း,စိုက္,ျဖန္႔,ျဖန္း,ေဘာင္,ဆိုင္,ရွဥ္း,ခ်ိန္,က်င္း,ျဖံဳး,ရွဥ့္,ဆိမ့္,ျငိဳး,ေပ်ာ့,ထိုင္,ရႊမ္း,အိမ္း,ေလာင္,ျဖံဳ႕,လွည့္,ျဖဳပ္,အိမ့္,ရုန္႔,ဖ်န္း,ပိမ့္,ႏိႈက္,ႏိႈက္,ငိုက္,က်ိတ္,ေအာက္,ေအာင္,ေမွ်ာ,ကိန္း,ႂကြယ္,အိုင္,ဗိန္း,ဒိန္း,လွည္း,ျဖင္း,ေဖ်ာ့,ၾကိဳ႕,ဒိုင္,ျပြတ္,ေဖ်ာ္,ၾကိတ္,ပ်ိဳး,လိုင္,စုန္း,ဗိုလ္,ဆိုက္,ျဗိဳ႕,သိမ္း,အိုက္,သုဥ္း,ေခ်ာ့,သိန္း,ပိုဒ္,ၾကဥ္း,ျခမ္း,ျပင္း,သွ်တ္,ဟိန္း,ေျမာ့,ေပါက္,ေျမႇး,ဖုန္း,ေျမာ္,ၾကိဳး,ခ်ည့္,အုန္း,ရႈန္း,ျဗဳတ္,ဗ်ည္း,ႏိုင္,ထိမ္း,ဗ်ဳပ္,ညႇင္း,ေရာင္,ေပါင္,ခ်ံဳး,ရွင္း,ေကြၽး,ႂကြပ္,ခ်ဥ္း,ထိန္႔,ေခါက္,ပြန္း,ခိုင္,ျပဳတ္,ထိုက္,စိမ့္,ကိုယ္,ခ်င္း,က်ိဳ႕,ကြန္႔,ခ်ံဳ႕,ညႇိဳး,ေကာဋ္,ညႇိဳ႕,ေဒါင္,ခိုက္,ဘြင္း,ေယာက္,ျငင္း,က်ဳတ္,လွမ္း,လိမ္း,ညြန္႔,က်ည္း,ခြၽင္,ေႂကြ႕,ေက်ာ့,ပြင့္,က်ံဳ႕,ရြမ္း,ခ်ိဳ႕,ေသာင္,ခြင့္,ေလ်ာ္,ယြင္း,ဂြမ္း,က်ိဳး,လြမ္း,ေရာက္,ခြၽတ္,ကြင္း,ကုန္း,တြန္း,ေႂကြး,ျမည့္,ျဗာဟ္,ျမိန္,မႈန္႔,မိန္႔,ျပဳဗ္,မႈန္း,ျမႇပ္,ဆြမ္း,ေညႇာ္,ေညာင္,မ်ိဳး,ထြန္း,ေနာက္,က်ိန္,ပ်င္း,မွန္း,မွ်င္,ႏွမ္း,တိန္း,ႏွိပ္,တိုက္,ေဟာင္,ေဆာက္,ၾကည့္,ေၾကာ့,ျမိဳ႕,မုန္း,မုန္႔,တိမ္း,တြန္႔,မိုက္,ဂိုက္,ျမိဳး,ေစာင္,က်မ္း,ေသာက္,ေျပာ့,တုန္း,ႏွိမ္,ၾကည္း,ပ်ိဳ႕,ျမြက္,မြမ္း,ခ်မ္း,ဗ်ိဳး,ေငါက္,မြန္း,ျမဳပ္,ျပိဳး,ခြန္း,ျပဳပ္,ခြၽန္,ေတာင္,ယိမ္း,ကြၽက္,ဂ်ဳတ္,ျပိသ္,ယိုင္,ခြင္း,မႊင္း,ဖ်ဥ္း,ဘုဥ္း,ျမင့္,ဖ်င္း,ေစာက္,ေလ်ာ့,ေဒါက္,မွ်စ္,မွ်ား,ညႇဥ္း,ကိုက္,မႊန္း,မိန္း,က်ဳပ္,ျခိဳး,မိႈင္,ပ်ဥ္း,ေခ်ာ္,မွိတ္,ျမင္း,ေတာက္,ျဖိဳး,က်ိပ္,မွင္,ယဥ္း,ေထြး,ခြင္,ဖြပ္,ႏွယ္,ဆိတ္,ညြန္,ခြက္,ညြတ္,ခြၽံ,ပြက္,ယွဥ္,ဧည့္,ခြံ႕,ကုပ္,ကိစ္,ေသဥ္,ေထာ္,ဘြတ္,ညႇိဳ,ညိဳ႕,ခြၽဲ,ေဒါ့,ယဥ့္,ဘုမ္,ဘုတ္,ဘို႔,က်ံဳ,ဆန္႔,ၾကား,ရိက္,ထိန္,ခ်ဥ္,ေဒြး,ရွက္,ရံႈ႕,ရင္း,ခ်ီး,ရွင္,က်ိဳ,ညည္း,ဆန္း,ညည့္,ညႇစ္,ဗြတ္,ဗြက္,ဖြတ္,ဗ်ဥ္,ညင္း,ညႇက္,ဗ်ပ္,ဗ်တ္,ဗ်စ္,ဗ်ဂ္,က်ယ္,ျဗဴး,ေပါ့,ဗံုး,ဗုဒ္,ဗို႔,ဉာသ္,ေဖြး,ကင္း,ျဗဟ္,ဗိသ္,ခ်ံဳ,ေသြး,ဗန္း,က်ပ္,ဇြန္,ဇြတ္,ျဗက္,ခ်ိဳ,ထုတ္,ဖြား,ဖြယ္,ရွပ္,ဇာစ္,ဖြံ႕,ခ်ယ္,ရံုး,ေသဋ္,ေဝွး,ဇိမ္,ထြင္,ဖ်ပ္,ရိႈး,ဖ်န္,ဇင္း,ဖ်တ္,ဖ်စ္,ၾကယ္,ရွဴး,ရႊပ္,ဖ်င္,ဖ်က္,ေျဖာ,ေဖာ့,ရြပ္,ဆြယ္,ေရွာ,ဆြပ္,ေရႊ႕,ေပြး,ခ်န္,က်န္,ဆြံ႕,က်တ္,ဖုသ္,ေမႊး,ေရြး,ၾကတ္,ဖုတ္,ဆံုး,ဆိုး,ဖို႔,ခ်ည္,ဆုပ္,ေရြ႕,ဒိဋ္,အံုး,ျခား,ေဘာ္,ေဘာ့,က်ည္,လႊံ႕,ျဖန္,ဖန္႔,က်စ္,ဖိတ္,လင္း,လိင္,ခ်က္,ေဖာ္,ျဖစ္,ဖင့္,ဆယ့္,ျဒပ္,ေပြ႕,ခ်ဲ႕,ဆမ္း,ေျပး,ၾကက္,ေျပာ,ဆိပ္,လိတ္,ရဥ့္,ဆို႔,က်င္,လိပ္,ပြပ္,ပြန္,ျဖတ္,လွပ္,ျခဴး,လာဘ္,က်က္,ေတြး,ေဗာ့,လန္း,ဆည္း,ပ်ား,ပ်ပ္,လုတ္,ဒိုး,ပ်စ္,ေဆာ္,ပ်က္,လ်င္,ေစ်း,ေစာ္,ေျဗာ,လုပ္,လႊား,ၾကံ့,ဇာတ္,ျပီး,ခိုး,ေႁခြ,ေခ်း,ခုပ္,စြပ္,ေခ်ာ,ခုန္,ျပံဳ,စြန္,လြန္,စြတ္,ေက်း,ပုဗ္,စြက္,ေက်ာ,ေၾကး,ေကာ္,ပုဒ္,ပုတ္,ပုဏ္,ေဟာ့,လွန္,ရံႈး,စဥ္း,ပုဂ္,ဖံုး,စဥ့္,ႏံု႔,ႏို႔,ဝိဇ္,ဖမ္း,ဝင္း,ပါဒ္,ဝမ္း,နိစ္,ဝွန္,ေမြး,နိဋ္,စိုး,ေမႊ႕,နန္း,အင့္,ျခယ္,ျပန္,စုတ္,ကန္း,ပိန္,ဟံုး,ေမတ္,ျပတ္,ဟုန္,ပိတ္,သင္း,ပိသ္,ဆုတ္,သင့္,ျပဋ္,ပါဌ္,စို႕,ျခစ္,သိန္,နင္း,သန္း,သန္႔,ျပည္,ႏွံ႕,ပံု႔,သွ်ိ,ေျမာ,ႏွစ္,သြပ္,ပုစ္,သြန္,ပင္း,ၾကီး,သိဒ္,ျပင္,ပုန္,ပင့္,ပုပ္,စမ္း,ပုလ္,ေကြး,ပိုး,ပံုး,ခုတ္,သံုး,ၾကဴး,သုဒ္,စိမ္,စိပ္,သုက္,သို႔,ေခြ႕,ျပဲ႕,စြယ္,ေအာ့,ၾကန္,သိဟ္,သမ္း,သိမ္,သံု႔,သိပ္,ႏွပ္,သိက္,စန္း,သိုး,ပ်ံ႕,ျခည္,စိန္,ခန္႔,သုပ္,ခန္း,စန္႔,ျပက္,ဆင္း,နိသ္,သည္း,သိဥ္,သုန္,နမ္း,သိင္,စိတ္,ပြဲ႕,နိမ္,နိဗ္,သြတ္,နိပ္,စည္း,ၾကမ္,ေမာ္,ကိန္,စည့္,နန္႔,ခင္း,ခ်င္,သြား,သြက္,ဟင္း,ဟည္း,နည္း,ျခင္,ပည္း,လန္႕,ဟန္႔,ျဖင္,ဝန္း,စင္း,ခမ္း,ေမ်ာ,နင့္,ပိဏ္,ဟိတ္,ဟုတ္,ဝင့္,နိဂ္,ဟိုး,ဟုပ္,ၾကဥ္,ေမြ႕,ျဖံဳ,ေျမြ,ကန္႔,လြယ္,ခ်စ္,ျပစ္,သုတ္,ျဖား,လြတ္,လြင္,ဓာတ္,လ်ဥ္,စုန္,လွ်ာ,ေျမ့,ဖုန္,ေမွး,ေျမး,ငြား,ဖိုး,လ်ပ္,ျဖိဳ,ဆြတ္,လ်စ္,ပန္း,ဒြန္,လ်က္,လွ်ံ,လွီး,ေရွ႕,လံုး,ျဖဴး,အန္း,ႏွင္,လံု႔,ရြတ္,ႏႊင္,ဒံုး,ၾကံဳ,ေလာ္,အိတ္,အင္း,ျငီး,ဒုလ္,အိမ္,ေလြ႕,ပြား,ခ်ား,ဒုတ္,ျပယ္,ထြက္,ဖြဲ႕,လမ္း,ေသာ္,လိမ္,လႈပ္,ဒုက္,ျငိဳ,ေရာ့,အိပ္,ၾကိဳ,ငံုး,စံုး,ငုပ္,လႊတ္,ေႏွာ,ငုတ္,လည္း,ဒန္း,ေအာ္,လွစ္,ဒိန္,အမ္း,စုပ္,ဉာဏ္,ဒန္႔,လွင္,ငံု႕,ဒိတ္,ဉာဥ္,အုန္,အုတ္,အိုး,ျပား,အုပ္,လံႈ႔,ကံုး,ကြယ္,အံု႕,ျဖီး,ျငား,ေရွး,ငွား,ရြား,ပို႔,ရြယ္,ထြား,ႏုတ္,ရြက္,ရြံ႕,ေရာ္,ရြဲ႕,ကိုး,ထြန္,ႏိုး,ထြတ္,ကြမ္,ေႏွး,ႏုပ္,ေၾကာ,ရိုး,က်ား,ခ်ပ္,ရုပ္,ရုတ္,ထံုး,ဘင္း,ညိတ္,ညႊတ္,ဘိတ္,ထိုး,ရုက္,ဘန္႔,ဘန္း,ထုပ္,ညႇပ္,ရို႕,ကြပ္,ရွား,ငမ္း,ထံု႔,ရမ္း,ကိတ္,ေကာ့,ကုမ္,ဘိုး,ရႈပ္,ရိပ္,ငန္း,ဘြဲ႕,ရန္း,ထမ္း,ညိဳး,ဘြား,ရႈတ္,ရိတ္,ထိမ္,ရွည္,ထိပ္,ညဥ့္,ရွစ္,ထန္း,ရင့္,ရႊင္,ငွက္,ေႂကြ,ထန္႔,မွဲ႕,ပြတ္,ေကြ႕,ကြန္,မွက္,ျမက္,ထိတ္,ကုဗ္,ရႊံ႕,ထည့္,ျမင္,ျပိဳ,ရိႈ႕,ေခတ္,ထင္း,ကြတ္,ယြတ္,ယြက္,ႏွီး,ၾကင္,ဂ်ဴး,ျဗတ္,ေႏႊး,ယိုး,ေလာ့,ယုတ္,ယုဂ္,တြယ္,ယံု႔,တြပ္,ယို႔,ျပသ္,ယာဥ္,တြန္,ကုန္,တြတ္,တြင္,ယန္း,ဖ်ား,ေခြး,ဂ်ပ္,ယင္း,ယွက္,ႏွတ္,ဂ်တ္,ေခြၽ,ကုတ္,ကြက္,ျပဴး,ႏႈတ္,ေဝသ္,ခံုး,ေဂြး,ကြၽံ,တံုး,ေဝွ႕,တိုး,မ်ိဳ,တုပ္,ဂုန္,မ်ား,တုန္,မ်က္,တုတ္,ဂုဏ္,ကုဋ္,ျမဴး,မွဴး,တို႔,ျခံဳ,ျမႇဴ,ႏြဲ႕,ကြၽဲ,ဖ်ဥ္,ျမံဳ,မိုး,တမ္း,မုန္,မုတ္,တိမ္,ေစြ႕,ၾကပ္,မုဋ္,ဂိဇ္,မုခ္,တိပ္,ေဆြ႕,မုက္,ေသာ့,ေသြ႕,ျမား,ေဆြး,မွား,တန္း,ျမီး,မာရ္,မာန္,တိန္,ေဇဋ္,ေသတ္,တန္႔,က်ဥ္,ပ်တ္,မိသ္,မိလ္,တိတ္,ပ်ိဳ,က်ီး,တည္း,တည့္,က်ဴး,ၾကည္,မန္း,ျမန္,တင္း,မြတ္,မြန္,မွန္,တင့္,ခြပ္,ဂ်င္,မႊန္,ေတာ္,မႈန္,ေတြ႕,မိန္,ပ်ဥ္,ျမတ္,ကုက္,တြက္,မွတ္,မႊတ္,မႈတ္,ယမ္း,ခြန္,မိတ္,ဂ်ံဳ,ဇုန္,ေထရ္,ႏြား,ႏြယ္,မည္း,ျမည္,ဗိန္,ျမစ္,ၾကစ္,ယုန္,မင္း,ဌာန္,မင္,ဣဋ္,ကို,မဂ္,မက္,မွီ,မဲ့,ျမီ,မိႈ,ျမဲ,ညီး,ခြံ,ဘြာ,ႁခြ,ဘူး,ဘီး,ညိဳ,ခြဲ,ဘံု,ညား,ညႇာ,ဘား,ဘယ္,ညပ္,ဘန္,ဘဒ္,ညန္,ဘတ္,ဘဏ္,ဘင္,ဘက္,ညတ္,ခ်ဴ,ကား,ကစ္,ညစ္,ဗြီ,ဗ်ဴ,ညင္,ဗ်ာ,ညက္,က်ာ,ညံ့,ၾကာ,ဗူး,ညႇီ,ညႇိ,ဗံု,ဗား,ျဗာ,ဉတ္,ႏြံ,ႏ်ဴ,ဗန္,ႏူး,ဦး,ဥံဳ,ဗင္,ဇြဲ,ျဗဲ,ေအာ,ဇီး,ခ်ာ,ကသ္,ေဟာ,ဖြာ,ေသြ,ေသး,ႏႊံ,ေသာ,ဖြဲ,ဇယ္,ေၾသ,ေဝး,ေဝ့,ဇမ္,ဖ်ာ,ဇန္,ေလး,ဇင္,ေလာ,ဖ်ံ,ေျဖ,ကယ္,ဖူး,ေရြ,ေရး,ဖီး,ဖင္,ျဖဴ,ေရာ,ေရႊ,ကင္,ေယာ,ေမြ,ဆြဲ,ဆူး,ေမး,ဆီး,ဖံု,ဖို,ေမာ,ဖား,ျဖာ,ေမ့,ဖယ္,ေဘး,ဖပ္,ေဘာ,ေဗြ,ဆံု,ေဗာ,ဖန္,ေဖြ,ဆို,ဖတ္,ေဖး,ဖည္,ဆား,ခ်ီ,ေဖာ,ဆယ္,ဖဂ္,ေပြ,ဖက္,ေပး,ျဖဲ,ခ်ဲ,ဆပ္,ေပါ,ေျပ,ေပၚ,ေနာ,ေန႔,ဆန္,ခူး,ေဒါ,ဆဒ္,ေဒၚ,ေထြ,ကက္,ပြဲ,ဆတ္,ေထာ,ဆဋ္,ေတး,ပ်ဴ,ေတာ,ဆည္,ေဌး,ပ်ာ,ဆင္,က်ံ,ဆက္,ေဆြ,ေဆး,ဆံ့,ေဆာ,ပ်ံ,ကမ္,ေစြ,ေစး,က်ီ,ဥပ္,ပဥ္,ပူး,ေငြ,ေဃာ,ျပဴ,ေဂါ,စြာ,က်ဲ,ေဂၚ,ေခြ,ေခ်,က်ိ,ျပဳ,ေခါ,ေခၚ,ေျခ,စြံ,ေက်,စြဲ,ခံု,ကပ္,ေကာ,ေၾက,ခို,ပံု,ႏံု,ဥစ္,ပို,ႏႊာ,ဣစ္,အူး,ျပာ,စဥ္,ပါး,စူး,အံု,အို,စီး,ျခာ,ဥက္,ခါး,အသ္,ပလ္,အဗ္,အပ္,ပယ္,အန္,အတ္,အဋ္,ပပ္,ေမႊ,အစ္,အင္,အဂ္,အက္,အံ့,ကံ့,ဟီး,ပန္,ေျမ,ဟံု,ဟို,ပတ္,စံု,ဟပ္,ပဏ္,ဟန္,ပဋ္,ကူး,ဟစ္,ဟက္,စို,ပဇ္,စား,သြာ,ပစ္,ခပ္,သြံ,ဥသ္,ပင္,ဣသ္,သီး,ပက္,ပံ့,ပဲ့,စမ္,ျပီ,ခန္,သို,သား,ျပဲ,သယ္,စပ္,ကဲ့,ခတ္,ၾကဴ,သမ္,သဗ္,သပ္,ဣန္,နီး,သန္,နား,သဒ္,သတ္,သဏ္,သဥ္,သည္,သစ္,နယ္,စန္,သင္,သက္,သံ့,သဲ့,စဏ္,သူ႕,နပ္,ၾကံ,နန္,ဝါး,နတ္,စည္,ဝသ္,စစ္,ဝယ္,ဝပ္,နစ္,ဟင္,ဝန္,ဝတ္,ဝဋ္,စင္,ခင္,ဝစ္,နင္,စက္,ဟသ္,ဝင္,ဝဂ္,နက္,ဝက္,ဝံ့,နံ႕,ခက္,ဝွဲ,နဲ႕,ေအး,ခံ့,ဓား,လြဲ,ႏွံ,ဓမ္,လ်ာ,ကန္,ဒြါ,ျခံ,ဒြိ,လူး,လွဴ,ဣဒ္,ဒူး,ဒီး,လံု,လို,လႊာ,လယ္,ျငဴ,လပ္,ဒံု,လန္,ဒယ္,လတ္,လည္,လစ္,ကြာ,ဒန္,အား,လင္,ဒဏ္,ငံု,လက္,လွံ,လွီ,လွဲ,ဒင္,ငို,ဒက္,လံႈ,လႊဲ,ရြာ,ေလ့,ႏွာ,ျငာ,ႏို,ထြာ,ရြံ,ငါး,ရြဲ,ငါ့,ရူး,ရွဴ,ထူး,ငယ္,ထီး,ရံု,ရို,ရွာ,ရသ္,ရယ္,ရမ္,ထံု,ေလွ,ထို,ရပ္,ထယ္,ရန္,ငန္,ရတ္,ငတ္,ရည္,ထပ္,ရစ္,ရင္,ငံ့,ရက္,ရွံ,ထန္,ရွဲ,ရွိ,ကတ္,ထတ္,ျငိ,ႏွဲ,ထည္,ထစ္,ထင္,ထက္,ယြံ,ယဥ္,ယူး,ယီး,ဂ်ဴ,ကဏ္,ယံု,ယို,ယား,ယပ္,ဂ်ာ,ယန္,ယတ္,ယဇ္,ယစ္,တြဲ,ယင္,တ်ာ,ယက္,ယဲ့,ဥတ္,ဣတ္,ၾကဲ,တူး,ဂ်ီ,မြဲ,တီး,မွ်,ကြီ,ဥမ္,မဥ္,ေစ့,ေစာ,မူး,မီး,တံု,ႂကြ,ျမဴ,တို,ဂံု,တား,တယ္,ကြဲ,ဂန္,တမ္,မံု,တပ္,မား,ျမာ,မွာ,တန္,မႊာ,မလ္,မယ္,တတ္,မပ္,ခြာ,တည္,တစ္,တင္,တက္,တံ့,မန္,တဲ့,က်ဴ,မတ္,ၾတိ,မဏ္,မည္,မဇ္,ဥဏ္,မစ္,ကံု,ၾကိ,ဋီ,ျမ,မွ,မံ,မူ,မီ,မႈ,မဲ,မိ,ကု,ညဳ,ဘု,ခြ,ဘာ,ညာ,ဘူ,ဘီ,ဘဲ,ဘိ,ၾက,ဗ်,ညံ,ညီ,ညဲ,ညိ,ကာ,ဗာ,ဉာ,ဗူ,ဗီ,ဗိ,ေအ,ေဟ,ကဲ,ဇာ,ေသ,ေဝ,ဇူ,ဇီ,ဖ်,ေလ,ဇိ,ေရ,ေယ,ဖု,ကိ,ဖာ,ေမ,ေဘ,ေဗ,ဆု,ဆာ,ေဖ,ျဖ,ဖူ,ဖီ,ဖဲ,ဖိ,ခ်,ေပ,ေန,ေဒ,ပြ,ေတ,ေဇ,ဆံ,ပ်,ဆူ,ဆီ,ေစ,ဆဲ,က်,စ်,ေက,ခု,ႏု,ပု,ပါ,အု,အာ,ခါ,အံ,အူ,အီ,အဲ,အိ,ဟာ,ဟံ,ဟီ,ဟဲ,ဟိ,စု,စာ,ျပ,ပူ,ပီ,သု,သာ,ပဲ,ပိ,နာ,သံ,သူ,သီ,ၾသ,သဲ,သိ,ဝါ,စံ,ဝံ,နံ,ဝီ,ဝဲ,နီ,စူ,ဝိ,နိ,စီ,ျခ,စဲ,ဓာ,စိ,ဓူ,ဒြ,ခံ,ခူ,လု,ခဲ,ဒု,ဒါ,ကံ,လံ,ျဒ,ငု,လူ,လီ,ဒံ,လႊ,ဒူ,လဲ,ဒီ,ဒိ,ကူ,ရြ,ငါ,ရာ,ထု,ထာ,ငံ,ရွ,ရံ,ရူ,ရီ,ရႈ,ရဲ,ရိ,ထံ,ကီ,ထူ,ထီ,ထဲ,ထိ,ယု,ယာ,ယံ,ယူ,မြ,တု,တာ,ဂု,ဂါ,မု,ဂူ,ဂီ,မာ,ဂိ,တံ,တူ,တီ,တဲ,တိ,ႏွ"
    };
    gJ.syllable = true;
    var g8 = ",burglish,zawgyi,innwa,alt,ctrl,html,jupiter,firefox,mozilla,english,myanmar,burmese,";
    var QN = ",Sm,Mum,";
    var QE = ",A,AA,AAA,Aachen,aardvark,Aaren,Aarhus,Aarika,Aaron,AB,aback,abacus,abaft,Abagael,Abagail,abalone,abandoner,abandon,abandonment,abase,abasement,abaser,abashed,abashment,abash,abate,abated,abatement,abater,abattoir,Abba,Abbe,abbess,Abbey,abbey,Abbie,Abbi,Abbot,abbot,Abbott,abbr,abbrev,abbreviated,abbreviates,abbreviate,abbreviating,abbreviation,Abbye,Abby,ABC,Abdel,abdicate,abdication,abdomen,abdominal,abduct,abduction,abductor,Abdul,ab,abeam,Abelard,Abel,Abelson,Abe,Aberdeen,Abernathy,aberrant,aberrational,aberration,abet,abetted";
    gJ.english = true;
    String.prototype.Nf = function() {
        return this.replace(/[䀀-俿]+/g, function(e) {
            return e.replace(/./g, function(e) {
                return String.fromCharCode(e.charCodeAt(0) - 16384);
            });
        });
    };
    String.prototype.Q5 = function() {
        return this.replace(/[A-Za-z][a-z\-\']+/g, function(e) {
            if (!h7[e]) {
                if (QX[e.toLowerCase()]) {
                    return e.replace(/./g, function(e) {
                        return String.fromCharCode(e.charCodeAt(0) + 16384);
                    });
                } else {
                    return e;
                }
            } else {
                return e;
            }
        });
    };
    gJ.language = true;
    var app = {
        id: {
            source: "source",
            target: "target",
            input: "sourceOptions",
            output: "targetOptions",
            text: "Text",
            force: "force",
            exception: "exceptions"
        },
        task: {
            Option: {
                text: "Option",
                class: "option",
                handler: function(e) {
                    // console.log('Option');
                    // console.log(e.getAttribute('class'));
                    // e.getAttribute('class').indexOf("active");
                    gJ.basic = e.classList.contains("active");
                    e.classList.toggle("active");
                    if (gJ.basic) {
                        // e.classList.remove('active');
                        $("wR").style.display = "none";
                        $("wL").style.display = "none";
                    } else {
                        // e.classList.add('active');
                        $("wR").removeAttribute("style");
                        $("wL").removeAttribute("style");
                        gb();
                    }
                }
            },
            Switch: {
                text: "Switch",
                handler: function() {
                    var e = gM.target.name, t = gM.source.name;
                    NO("source", e);
                    NO("target", t);
                }
            },
            Convert: {
                text: "Convert",
                handler: function() {
                    Qx();
                    // console.log('Convert');
                                }
            },
            CharCode: {
                text: "CharCode",
                handler: function() {
                    g9();
                    // console.log('CharCode');
                                }
            },
            EscapeUnicode: {
                text: "Escape Unicode",
                handler: function() {
                    N3();
                    // console.log('EscapeUnicode');
                                }
            },
            ConvertAdvanced: {
                text: "Convert Advanced",
                id: "wR",
                style: "display:none;",
                handler: function() {
                    Nl(true, "g1");
                    // console.log('ConvertAdvanced');
                                }
            }
        },
        initTask: function() {
            var e = this.task, t = $(app.id.output), a = Object.keys(e).map(function(a, r) {
                var i = eCreate("li"), n = e[a];
                i.appendChild(doc.createTextNode(n.text));
                if (n.hasOwnProperty("class")) {
                    i.setAttribute("class", n.class);
                }
                if (n.hasOwnProperty("id")) {
                    i.setAttribute("id", n.id);
                }
                if (n.hasOwnProperty("style")) {
                    i.setAttribute("style", n.style);
                }
                i.addEventListener("click", function(e) {
                    if (n.hasOwnProperty("handler")) n.handler(e.target);
                });
                t.appendChild(i);
            });
            Promise.all(a).then(function() {
                NO(app.id.source, "Zawgyi");
                NO(app.id.target, "WinInnwa");
                $(app.id.exception).value = g8;
                $(app.id.force).value = QN;
                // eText(app.id.source)
                // eText(app.id.target)
                // app.id.force
                // app.id.exception
                        }).then(function() {
                gZ({
                    id: eText(app.id.source),
                    N_: true,
                    self: true,
                    KY: false,
                    ows: 20
                });
            });
        },
        init: function(e) {
            app.request.text = e;
            return app.request;
        },
        request: {
            load: function(e, t) {
                app.initTask();
            },
            convert: function(e, t) {
                // return 'text'.Ng('Zawgyi','Myanmar3');
                return this.text.Ng(e, t);
            }
        }
    };
    function testing() {
        console.log("yes");
    }
    win[os] = app.init;
})("Burglish", window, document);

document.addEventListener("DOMContentLoaded", function(e) {
    new Burglish().load();
    // console.log(Burglish('အမည္မေဖာ္လိုသူ').convert('Zawgyi','Myanmar3'));
    // console.log('အမည္မေဖာ္လိုသူ');
});