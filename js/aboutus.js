/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
function OpenWin(n) {
    $("#whois").html('<img alt="" src="' + imagePath + 'loading.gif" />');
    $("#whoisTrigger").trigger("click");
    $.ajax({ type: "GET", dataType: "text", data: "Domain=" + n, url: "/WhoisDomain.ashx", success: function(n) { $("#whois").html(n) }, failure: function(n) { alert(n) } })
}

function checkDomain() {
    var n = $("#check_domain input[type='text']").val(),
        t;
    return n != "" ? ($("#check_domain_result").slideDown(), res_container == "" ? res_container = $("#res_container").html() : $("#res_container").html(res_container), t = $("#check_domain input[type='checkbox']:checked").length, t == 0 ? ($(".check-domain-result input[type='checkbox']").prop("checked", !1), $("#check_domain input[type='checkbox']").each(function() {
        var r = $(this).parent().css("display"),
            i = $(this).val(),
            t = $(".check-domain-result input[type='checkbox'][value='" + i + "']");
        r != "none" ? ($(t).parent().show(), $(t).hide(), $(t).parent().append('<img src="' + imagePath + 'loading.gif" alt="" class="loading" />'), $.ajax({
            type: "GET",
            dataType: "text",
            data: "domain=" + n + $(this).val(),
            url: "/CheckDomain.ashx",
            success: function(r) {
                if (r != "False") {
                    var u = '<img class="nocheck" src="' + imagePath + 'nocheck.gif" name="nocheck_' + i + '" alt="" /><span class="res">' + i + "<\/span><a target='_blank' class='inf' onclick='OpenWin(\"" + n + i + "\",this); return false;' href='javascript:;'> Xem thĂ´ng tin<\/a>";
                    $(t).parent().html(u)
                } else $(t).show(), $(t).parent().find("img").remove()
            },
            failure: function(n) { console.log(n) }
        })) : $(t).parent().hide()
    })) : ($(".check-domain-result input[type='checkbox']").prop("checked", !1), $("#check_domain input[type='checkbox']").each(function() {
        var r = $(this).parent().css("display"),
            i = $(this).val(),
            t = $(".check-domain-result input[type='checkbox'][value='" + i + "']");
        r != "none" ? ($(t).parent().show(), $(this).prop("checked") == !0 ? ($(t).hide(), $(t).parent().append('<img src="' + imagePath + 'loading.gif" alt="" class="loading" />'), $.ajax({
            type: "GET",
            dataType: "text",
            data: "domain=" + n + $(this).val(),
            url: "/CheckDomain.ashx",
            success: function(r) {
                if (r != "False") {
                    var u = '<img class="nocheck" src="' + imagePath + 'nocheck.gif" name="nocheck_' + i + '" alt="" /><span class="res">' + i + "<\/span><a target='_blank' class='inf' onclick='OpenWin(\"" + n + i + "\",this); return false;' href='javascript:;'> Xem thĂ´ng tin<\/a>";
                    $(t).parent().html(u)
                } else $(t).show(), $(t).parent().find("img").remove()
            },
            failure: function(n) { console.log(n) }
        })) : $(t).parent().hide()) : $(t).parent().hide()
    }))) : (alert("Vui lĂ²ng nháº­p tĂªn miá»n Ä‘á»ƒ kiá»ƒm tra!"), $(".check-domain input[type='text']").focus()), !1
}

function addLoadEvent(n) {
    if (document.readyState === "complete") n();
    else {
        var t = window.onload;
        window.onload = typeof onload != "function" ? n : function() {
            t && t();
            n()
        }
    }
}

function sapoRegisterModal(n) {
    var t = document.getElementsByTagName("body")[0],
        i, r;
    n.includes(".") ? (n = n.replace(".", ""), i = document.getElementsByClassName(n), Array.from(i).forEach(function(n) {
        t.style.overflow = "";
        n.style.display = "block";
        setTimeout(function() {
            n.classList.add("show");
            t.classList.add("sapo-modal-register-open")
        }, 200);
        var i = n.querySelectorAll('[data-dismiss="sapo-modal-register"]');
        i.forEach(function(t) {
            t.addEventListener("click", function() {
                n.style.display = "none";
                n.classList.remove("show");
                setTimeout(function() { i.classList.remove("sapo-modal-register-open") }, 200)
            })
        })
    })) : (n = n.replace("#", ""), document.getElementById(n).style.display = "block", setTimeout(function() {
        document.getElementById(n).classList.add("show");
        t.classList.add("sapo-modal-register-open")
    }, 200), r = document.getElementById(n).querySelectorAll('[data-dismiss="sapo-modal-register"]'), r.forEach(function(i) {
        i.addEventListener("click", function() {
            document.getElementById(n).classList.remove("show");
            t.classList.remove("sapo-modal-register-open");
            setTimeout(function() { document.getElementById(n).style.display = "none" }, 200)
        })
    }))
}

function closeAllSapoModal() {
    var n = document.getElementsByTagName("body")[0];
    n.classList.remove("sapo-modal-register-open");
    document.querySelectorAll(".sapo-modal-register").length > 0 && document.querySelectorAll(".sapo-modal-register").forEach(function(n) {
        n.classList.remove("show");
        n.style.display = "none"
    })
}

function DOMEval(n) {
    var u = window.document,
        t, r, i = u.createElement("script");
    if (i.text = n.innerHTML, n)
        for (t in preservedScriptAttributes) r = n[t] || n.getAttribute && n.getAttribute(t), r && i.setAttribute(t, r);
    u.head.appendChild(i).parentNode.removeChild(i)
}

function ajax(n) {
    var r, i, u, t;
    if (typeof n.url == "undefined") try { n.url = location.href } catch (f) {
        r = document.createElement("a");
        r.href = "";
        n.url = r.href
    }
    if (typeof n.method == "undefined" && (n.method = "GET"), typeof n.data == "undefined") n.data = null;
    else {
        i = "";
        for (u in n.data) i != "" && (i += "&"), i += encodeURIComponent(u) + "=" + encodeURIComponent(n.data[u]);
        n.data = i
    }
    if (typeof n.statusCode == "undefined" && (n.statusCode = {}), typeof n.beforeSend == "undefined" && (n.beforeSend = function() {}), typeof n.success == "undefined" && (n.success = function() {}), typeof n.error == "undefined" && (n.error = function() {}), typeof n.complete == "undefined" && (n.complete = function() {}), typeof n.statusCode["404"], t = null, window.XMLHttpRequest || window.ActiveXObject)
        if (window.ActiveXObject) try { t = new ActiveXObject("Msxml2.XMLHTTP") } catch (f) { t = new ActiveXObject("Microsoft.XMLHTTP") } else t = new XMLHttpRequest;
        else return alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest..."), null;
    t.onreadystatechange = function() {
        var i;
        if (t.readyState == 1 && n.beforeSend(), t.readyState == 4)
            if (n.complete(t, t.status), t.status == 200 || t.status == 0) {
                if (i = t.responseText, t.responseText) try { i = JSON.parse(t.responseText) } catch (r) {}
                n.success(i, t.status)
            } else {
                if (i = t.responseText, t.responseText) try { i = JSON.parse(t.responseText) } catch (r) {}
                n.success(i, t.status)
            }
    };
    n.method == "POST" || n.method == "post" ? (t.open(n.method, n.url, !0), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), t.send(n.data)) : (n.url.indexOf("?") > -1 ? n.data != null && n.data != "" && (n.url += "&" + n.data) : n.data != null && n.data != "" && (n.url += "?" + n.data), t.open(n.method, n.url, !0), t.send(null))
}

function jsonp(n, t) {
    var r = "jsonp_callback_" + Math.round(1e5 * Math.random()),
        i;
    window[r] = function(n) {
        delete window[r];
        document.body.removeChild(i);
        t(n)
    };
    i = document.createElement("script");
    i.src = n + (n.indexOf("?") >= 0 ? "&" : "?") + "callback=" + r;
    document.body.appendChild(i)
}

function encodeURIParams(n, t) {
    var r = [],
        i, u;
    for (i in n) n.hasOwnProperty(i) && (u = n[i], u != null && r.push(encodeURIComponent(i) + "=" + encodeURIComponent(u)));
    return r.length == 0 ? "" : (t ? "?" : "") + r.join("&")
}

function bodauTiengViet(n) { return n = n.toLowerCase(), n = n.replace(/Ă |Ă¡|áº¡|áº£|Ă£|Ă¢|áº§|áº¥|áº­|áº©|áº«|Äƒ|áº±|áº¯|áº·|áº³|áºµ/g, "a"), n = n.replace(/Ă¨|Ă©|áº¹|áº»|áº½|Ăª|á»|áº¿|á»‡|á»ƒ|á»…/g, "e"), n = n.replace(/Ă¬|Ă­|á»‹|á»‰|Ä©/g, "i"), n = n.replace(/Ă²|Ă³|á»|á»|Ăµ|Ă´|á»“|á»‘|á»™|á»•|á»—|Æ¡|á»|á»›|á»£|á»Ÿ|á»¡/g, "o"), n = n.replace(/Ă¹|Ăº|á»¥|á»§|Å©|Æ°|á»«|á»©|á»±|á»­|á»¯/g, "u"), n = n.replace(/á»³|Ă½|á»µ|á»·|á»¹/g, "y"), n.replace(/Ä‘/g, "d") }

function getParameterByName(n) {
    n = n.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var i = new RegExp("[\\?&]" + n + "=([^&#]*)"),
        t = i.exec(location.search);
    return t === null ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
}

function onInputStoreName(n) { if (n.keyCode == 13) return !1 }

function generateAlias(n) { return n = n.toLowerCase(), n = n.replace(/Ă |Ă¡|áº¡|áº£|Ă£|Ă¢|áº§|áº¥|áº­|áº©|áº«|Äƒ|áº±|áº¯|áº·|áº³|áºµ/g, "a"), n = n.replace(/Ă¨|Ă©|áº¹|áº»|áº½|Ăª|á»|áº¿|á»‡|á»ƒ|á»…/g, "e"), n = n.replace(/Ă¬|Ă­|á»‹|á»‰|Ä©/g, "i"), n = n.replace(/Ă²|Ă³|á»|á»|Ăµ|Ă´|á»“|á»‘|á»™|á»•|á»—|Æ¡|á»|á»›|á»£|á»Ÿ|á»¡/g, "o"), n = n.replace(/Ă¹|Ăº|á»¥|á»§|Å©|Æ°|á»«|á»©|á»±|á»­|á»¯/g, "u"), n = n.replace(/á»³|Ă½|á»µ|á»·|á»¹/g, "y"), n = n.replace(/Ä‘/g, "d"), n = n.replace(/'|\"|\(|\)|\[|\]/g, ""), n = n.replace(/\W+/g, "-"), n.slice(-1) === "-" && (n = n.replace(/-+$/, "")), n.slice(0, 1) === "-" && (n = n.replace(/^-+/, "")), n }

function setCookie(n, t, i) {
    var r, u;
    i || (i = 30);
    r = new Date;
    r.setTime(r.getTime() + i * 864e5);
    u = "expires=" + r.toGMTString();
    document.cookie = n + "=" + t + "; " + u + ";domain=.sapo.vn;path=/"
}

function newSetCookie(n, t) { document.cookie = n + "=" + t }

function getUrlWithoutDomain(n) { return n.replace(/^.*\/\/[^\/]+/, "") }

function getCookie(n) { for (var t, r = n + "=", u = document.cookie.split(";"), i = 0; i < u.length; i++) { for (t = u[i]; t.charAt(0) == " ";) t = t.substring(1); if (t.indexOf(r) == 0) return t.substring(r.length, t.length) } return null }

function getSessionStorage(n) { return window.sessionStorage.getItem(n) }

function setSessionStorage(n, t) { window.sessionStorage.setItem(n, t) }

function guid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx".replace(/[xy]/g, function(n) {
        var t = Math.random() * 16 | 0,
            i = n == "x" ? t : t & 3 | 8;
        return i.toString(16)
    }).toUpperCase()
}

function setParameter(n, t, i) {
    if (n.indexOf(t + "=") >= 0) {
        var u = n.substring(0, n.indexOf(t)),
            r = n.substring(n.indexOf(t));
        r = r.substring(r.indexOf("=") + 1);
        r = r.indexOf("&") >= 0 ? r.substring(r.indexOf("&")) : "";
        n = u + t + "=" + i + r
    } else n += n.indexOf("?") < 0 ? "?" + t + "=" + i : "&" + t + "=" + i;
    return n
}

function getDateTime() {
    var n = new Date,
        t = n.getDate(),
        i = n.getMonth() + 1,
        r = n.getFullYear(),
        u = n.getHours(),
        f = n.getMinutes(),
        e = n.getSeconds(),
        datetime;
    return t < 10 && (t = "0" + t), i < 10 && (i = "0" + i), i + "/" + t + "/" + r + " " + u + ":" + f + ":" + e
}

function parseHtml(n) {
    var t = new DOMParser,
        i = t.parseFromString(n, "text/html");
    return i.body.childNodes[0]
}

function clone(n) { return n.cloneNode(!1) }

function serializeArray(n) {
    var r = {},
        i, t;
    if (typeof n == "object" && n.nodeName.toLowerCase() == "form")
        for (i = n.querySelectorAll("input, select"), t = 0; t < i.length; t++) i[t].getAttribute("name") && (r[i[t].getAttribute("name")] = i[t].value);
    return r
}

function checkShowCaptcha(n, t, i, r, u, f, e) {
    ajax({
        url: urlCheckIpLocation,
        method: "POST",
        success: function(o) {
            showCaptcha = o.CountryCode != "VN" ? !0 : !1;
            n == "fnb" ? createModalFnB(f, o.CountryCode, e) : createModal(t, i, r, u, o.CountryCode)
        },
        error: function(o) {
            showCaptcha = !0;
            n == "fnb" ? createModalFnB(f, o.CountryCode, e) : createModal(t, i, r, u, o.CountryCode)
        }
    })
}

function createCaptcha(n) {
    var u, e, t, i;
    n.querySelectorAll("#CaptchaInput")[0].value = "";
    n.querySelectorAll("#Captcha")[0].innerHTML = "";
    var f = "0123456789abcdefghijklmnopqrstuvwxyz",
        r = [];
    for (u = 0; u < 4; u++) e = Math.floor(Math.random() * f.length), r.push(f[e]);
    t = document.createElement("canvas");
    t.id = "CaptchaCanv";
    t.width = 95;
    t.height = 48;
    i = t.getContext("2d");
    i.font = "bold 25px Arial";
    i.textAlign = "center";
    i.fillStyle = "#333333";
    i.fillText(r.join(""), 48, 33);
    codeCaptcha = r.join("");
    n.querySelectorAll("#Captcha")[0].append(t)
}

function resetCaptcha(n) {
    var u, e, t, i;
    n.parentNode.querySelectorAll("#CaptchaInput")[0].value = "";
    n.parentNode.querySelectorAll("#Captcha")[0].innerHTML = "";
    var f = "0123456789abcdefghijklmnopqrstuvwxyz",
        r = [];
    for (u = 0; u < 4; u++) e = Math.floor(Math.random() * f.length), r.push(f[e]);
    t = document.createElement("canvas");
    t.id = "CaptchaCanv";
    t.width = 95;
    t.height = 48;
    i = t.getContext("2d");
    i.font = "bold 25px Arial";
    i.textAlign = "center";
    i.fillStyle = "#333333";
    i.fillText(r.join(""), 48, 33);
    codeCaptcha = r.join("");
    n.parentNode.querySelectorAll("#Captcha")[0].append(t)
}

function showModalTrial(n, t, i) {
    var o, s, r, u, f, e, h, c;
    popupOpen == !1 && (popupOpen = !0, o = "", i && (o = "OMNI"), s = "", n && n.parentNode && n.parentNode.parentNode.querySelectorAll(".input-site-name")[0] && (s = n.parentNode.parentNode.querySelectorAll(".input-site-name")[0].value), r = getParameterByName("sales_team"), r !== null && r !== "" && setCookie("sales_team", r, 30), u = getParameterByName("kd"), u !== null && u !== "" && setCookie("kd", u, 30), f = getParameterByName("ref"), f !== null && f !== "" && setCookie("ref", f, 30), e = getParameterByName("campaign"), e !== null && e !== "" && setCookie("campaign", e, 30), h = getCookie("start_time"), (h == null || h == "") && setCookie("start_time", getDateTime(), .0115), c = window.location.href, setCookie("source", c, 30), checkShowCaptcha("", t, s, c, o))
}

function createModal(n, t, i, r, u) {
    var o = parseHtml('<div id="trialPopupModal" class="sapo-modal-register fade" role="dialog"><div class="sapo-modal-register-dialog" role="document"><div class="sapo-modal-register-content"><div class="sapo-modal-register-body"><\/div><\/div><\/div><\/div>'),
        y = o.querySelectorAll(".sapo-modal-register-body")[0],
        f, vt, e, yt, st, p, ht, w, ct, b, k, d, at, ni, ti, ii, ri;
    vt = parseHtml('<div class="logo"><img src="https://www.sapo.vn/Themes/Portal/Default/StylesV2/images/logo/Sapo-logo.svg?v=202101071107" alt="Sapo logo" class="fade show"><\/div>');
    yt = parseHtml('<button type="button" class="close" data-dismiss="sapo-modal-register" onCLick="popupOpen = false;" aria-label="Close"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 3.02143L26.9786 0L15 11.9786L3.02143 0L0 3.02143L11.9786 15L0 26.9786L3.02143 30L15 18.0214L26.9786 30L30 26.9786L18.0214 15L30 3.02143Z" /><\/svg><\/button>');
    switch (n) {
        case 1:
            e = parseHtml('<div class="block-title"><h2>DĂ¹ng thá»­ Sapo miá»…n phĂ­ 7 ngĂ y<\/h2><p>+100,000 doanh nghiá»‡p &amp; chá»§ shop tin dĂ¹ng<\/p><\/div>');
            break;
        case 2:
            e = parseHtml('<div class="block-title"><h2>DĂ¹ng thá»­ Sapo Web miá»…n phĂ­ 7 ngĂ y<\/h2><p>+100,000 doanh nghiá»‡p &amp; chá»§ shop tin dĂ¹ng<\/p><\/div>');
            break;
        case 3:
            e = parseHtml('<div class="block-title"><h2>DĂ¹ng thá»­ pháº§n má»m quáº£n lĂ½ fanpage Sapo Social<\/h2><p>ÄÆ°á»£c tĂ­ch há»£p miá»…n phĂ­ trĂªn Sapo<\/p><\/div>');
            break;
        case 4:
            e = parseHtml('<div class="block-title"><h2>DĂ¹ng thá»­ Sapo POS miá»…n phĂ­ 7 ngĂ y<\/h2><p>+100,000 doanh nghiá»‡p &amp; chá»§ shop tin dĂ¹ng<\/p><\/div>');
            break;
        case 5:
            e = window.isHub !== undefined && window.isHub !== null && window.isHub == !0 ? parseHtml('<div class="block-title"><h2>DĂ¹ng thá»­ Sapo Hub miá»…n phĂ­ 7 ngĂ y<\/h2><p>+100,000 doanh nghiá»‡p &amp; chá»§ shop tin dĂ¹ng<\/p><\/div>') : parseHtml('<div class="block-title"><h2>DĂ¹ng thá»­ Sapo Omnichannel miá»…n phĂ­ 7 ngĂ y<\/h2><p>+100,000 doanh nghiá»‡p &amp; chá»§ shop tin dĂ¹ng<\/p><\/div>');
            break;
        case 6:
            e = parseHtml('<div class="block-title"><h2>DĂ¹ng thá»­ Sapo Go miá»…n phĂ­ 7 ngĂ y<\/h2><p>+100,000 doanh nghiá»‡p &amp; chá»§ shop tin dĂ¹ng<\/p><\/div>');
            break;
        case 7:
            e = parseHtml('<div class="block-title"><h2>DĂ¹ng thá»­ Sapo miá»…n phĂ­ 7 ngĂ y<\/h2><p>+100,000 doanh nghiá»‡p &amp; chá»§ shop tin dĂ¹ng<\/p><\/div>');
            break;
        default:
            e = parseHtml('<div class="block-title"><h2>DĂ¹ng thá»­ Sapo miá»…n phĂ­ 7 ngĂ y<\/h2><p>+100,000 doanh nghiá»‡p &amp; chá»§ shop tin dĂ¹ng<\/p><\/div>')
    }
    f = parseHtml('<form action="' + urlRegister + '" id="trialForm" autocomplete="off" class="form-request" onsubmit="return handleSubmit(event, ' + n + ')" method="POST" accept-charset="UTF-8"><\/form>');
    var ft = parseHtml('<div class="row"><\/div>'),
        a = parseHtml('<div class="col-md-6"><\/div>'),
        s = parseHtml('<div class="form-group mdc-text-field"><\/div>'),
        ui = parseHtml('<div class="form-group mdc-selectize"><\/div>'),
        h = parseHtml('<label for=""><\/label>'),
        fi = parseHtml('<ul class="register-form-error"><\/ul>'),
        et = parseHtml('<input type="text" pattern="^.{3,60}$" maxlength="60" id="StoreName" class="form-control form-input" name="StoreName" required="" title="TĂªn cá»§a hĂ ng dĂ i tá»« 3 Ä‘áº¿n 60 kĂ½ tá»±" />');
    t != undefined && t != "" && (et.value = t, et.classList.add("valid"));
    var ei = parseHtml('<input type="text" maxlength="60" id="FullName" class="form-control form-input" name="FullName" required="" />'),
        oi = parseHtml('<input type="tel" pattern="^0\\d{7,24}$" maxlength="25" id="PhoneNumber" class="form-control form-input" name="PhoneNumber" required="" />'),
        ot = parseHtml('<select id="CityDistrict" name="CityDistrict" required=""><\/select>');
    ot.append(parseHtml('<option value="" hidden=""><\/option>'));
    jsonCity != null && jsonCity.length > 0 && jsonCity.forEach(function(n) {
        if (n != null && n != undefined) {
            var t = parseHtml('<option value="' + n.Title + "," + n.Code + '" data-data=\'{"code":"' + n.Code + '","city":"' + n.Title.replace("'", "&#x27;") + "\"}'>" + n.Title + "<\/option>");
            ot.append(t)
        }
    });
    var si = parseHtml('<select id="PackageType" name="PackageType" required=""><option value="" hidden=""><\/option><option value="pos">Pháº§n má»m quáº£n lĂ½ bĂ¡n hĂ ng<\/option><option value="web">Thiáº¿t káº¿ website bĂ¡n hĂ ng<\/option><option value="sapo_go">Quáº£n lĂ½ bĂ¡n hĂ ng online (Facebook &amp; SĂ n TMÄT)<\/option><option value="omni">Quáº£n lĂ½ vĂ  bĂ¡n hĂ ng Ä‘a kĂªnh<\/option><\/select>'),
        hi = parseHtml('<select id="PreferredService" name="PreferredService" required=""><option value="" hidden=""><\/option><option value="POS">BĂ¡n táº¡i cá»­a hĂ ng<\/option><option value="EWEB">BĂ¡n trĂªn website<\/option><option value="ESOCIAL">BĂ¡n trĂªn Facebook<\/option><option value="MARKET">BĂ¡n trĂªn sĂ n TMÄT<\/option><\/select>'),
        ci = parseHtml('<select id="PackageType" name="PackageType" required=""><option value="" hidden=""><\/option><option value="sapo_go">Quáº£n lĂ½ bĂ¡n hĂ ng online (Facebook &amp; SĂ n TMÄT)<\/option><option value="omni">Quáº£n lĂ½ vĂ  bĂ¡n hĂ ng Ä‘a kĂªnh<\/option><\/select>'),
        li = parseHtml('<button type="submit" class="btn-registration"><span>ÄÄƒng kĂ½ dĂ¹ng thá»­<\/span><svg class="pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"><\/path><\/svg><\/button>'),
        ai = parseHtml('<div class="social-login"><span>Hoáº·c Ä‘Äƒng kĂ½ nhanh báº±ng tĂ i khoáº£n<\/span><div class="social-login__btn-group"><a href="javascript:void(0)" onclick="registerFacebook(' + n + ')"><img src="https://www.sapo.vn/Themes/Portal/Default/StylesV2/images/svg_sociallogin_fb_new.svg" alt="Sapo" /><\/a><a href="javascript:void(0)" onclick="registerGoogle(' + n + ')"><img src="https://www.sapo.vn/Themes/Portal/Default/StylesV2/images/svg_sociallogin_gg_new.svg" alt="Sapo" /><\/a><\/div><\/div>'),
        vi = parseHtml('<div className="hidden-input"><input id="Preferred" name="Preferred" type="hidden" value="' + (getCookie("preferred") != null ? getCookie("preferred") : "") + '" /><input id="SaleName" name="SaleName" type="hidden" value="' + (getCookie("kd") != null ? getCookie("kd") : "") + '" /><input id="Reference" name="Reference" type="hidden" value="' + (getCookie("ref") != null ? getCookie("ref") : "") + '" /><input id="Source" name="Source" type="hidden" value="' + (i != null ? i : "") + '" /><input id="Referral" name="Referral" type="hidden" value="' + (getCookie("referral") != null ? getCookie("referral") : "") + '" /><input id="Campaign" name="Campaign" type="hidden" value="' + (getCookie("campaign") != null ? getCookie("campaign") : "") + '" /><input id="LandingPage" name="LandingPage" type="hidden" value="' + (getCookie("landing_page") != null ? getCookie("landing_page") : "") + '" /><input id="StartTime" name="StartTime" type="hidden" value="' + (getCookie("start_time") != null ? getCookie("start_time") : "") + '" /><input id="EndTime" name="EndTime" type="hidden" value="' + (getDateTime() != null ? getDateTime() : "") + '" /><input id="PageView" name="PageView" type="hidden" value="' + (getCookie("pageview") != null ? getCookie("pageview") : "") + '" /><input id="AffId" name="AffId" type="hidden" value="' + (getCookie("aff_id") != null ? getCookie("aff_id") : "") + '" /><input id="AffTrackingId" name="AffTrackingId" type="hidden" value="' + (getCookie("aff_tracking_id") != null ? getCookie("aff_tracking_id") : "") + '" /><input id="Type" name="Type" type="hidden" value="' + n + '"><input id="SalesTeam" name="SalesTeam" type="hidden" value="' + (getCookie("sales_team") != null ? getCookie("sales_team") : "") + '" /><input id="City" name="City" type="hidden" /><input id="CityId" name="CityId" type="hidden" /><input id="CityNameAndId" name="CityNameAndId" type="hidden" /><input id="SocialSource" name="SocialSource" type="hidden" value="" /><input id="FacebookName" name="FacebookName" type="hidden" value="" /><input id="FacebookAvatar" name="FacebookAvatar" type="hidden" value="" /><\/div>');
    f.append(fi);
    st = clone(s);
    p = clone(h);
    p.setAttribute("for", "FullName");
    p.innerHTML = "Há» tĂªn cá»§a báº¡n";
    st.append(ei, p);
    ht = clone(s);
    w = clone(h);
    w.setAttribute("for", "StoreName");
    w.innerHTML = "TĂªn cá»­a hĂ ng cá»§a báº¡n";
    ht.append(et, w);
    ct = clone(s);
    b = clone(h);
    b.setAttribute("for", "PhoneNumber");
    b.innerHTML = "Sá»‘ Ä‘iá»‡n thoáº¡i cá»§a báº¡n";
    ct.append(oi, b);
    k = clone(ui);
    d = clone(h);
    d.setAttribute("for", "CityDistrict-tomselected");
    d.innerHTML = "Báº¡n á»Ÿ tá»‰nh/ thĂ nh phá»‘ nĂ o?";
    k.append(ot, d);
    var pt = clone(ft),
        v = clone(ft),
        wt = clone(a),
        bt = clone(a);
    wt.append(ct);
    bt.append(ht);
    pt.append(wt, bt);
    f.append(st, pt);
    var c = clone(s),
        l = clone(h),
        g = clone(a),
        nt = clone(a),
        kt = clone(a),
        tt = clone(s);
    if (l.setAttribute("for", "PackageType"), l.innerHTML = "Chá»n sáº£n pháº©m báº¡n quan tĂ¢m", g.append(k), c.classList.add("mdc-select-field"), tt.classList.add("mdc-select-field"), n != 2 && n != 3 && n != 4 && n != 5 && n != 6 && n != 7 ? (c.append(si), c.append(l), nt.append(c), v.append(g, nt), f.append(v)) : n == 7 ? (c.append(ci), c.append(l), nt.append(c), v.append(g, nt), f.append(v)) : n == 5 ? (tt.append(hi), l.setAttribute("for", "PreferredService"), l.innerHTML = "Chá»n kĂªnh bĂ¡n hĂ ng Æ°u tiĂªn", tt.append(l), kt.append(tt), v.append(g, kt), f.append(v)) : f.append(k), u != "VN") {
        var it = clone(s),
            lt = clone(h),
            dt = clone(ft),
            gt = clone(a);
        it.classList.add("mdc-text-field", "captcha-field");
        lt.setAttribute("for", "CaptchaInput");
        lt.innerHTML = "MĂ£ an toĂ n";
        it.innerHTML += '<input autocomplete="off" type="text" value="" name="CaptchaInput" id="CaptchaInput" maxlength="4" required="" class="form-control form-input" /><a onclick="resetCaptcha(this)" class="resetCaptchaBtn" id="captchaReset" href="javascript:void(0);"><\/a><div id="Captcha"><\/div>';
        it.append(lt);
        gt.append(it);
        dt.append(gt);
        f.append(dt);
        createCaptcha(f)
    }
    var yi = parseHtml('<input type="checkbox" required="" checked="true" id="ConfirmPolicy" />'),
        rt = clone(s),
        ut = clone(h);
    rt.classList.remove("mdc-text-field");
    rt.classList.add("mdc-checkbox");
    ut.setAttribute("for", "ConfirmPolicy");
    ut.append(yi);
    ut.append(parseHtml("<span style='font-size: 14px;'>TĂ´i Ä‘á»“ng Ă½ vá»›i <a href='https://support.sapo.vn/quy-dinh-su-dung?campaign=form_dungthu_sapo&utm_campaign=form_dungthu_sapo_ref_quy_dinh_su_dung&utm_source=form_dungthu&utm_medium=textlink_referral' target='_blank'>quy Ä‘á»‹nh sá»­ dá»¥ng<\/a> vĂ  <a href='https://support.sapo.vn/chinh-sach-bao-mat?campaign=form_dungthu_sapo&utm_campaign=form_dungthu_sapo_ref_chinh_sach_bao_mat&utm_source=form_dungthu&utm_medium=textlink_referral' target='_blank'>chĂ­nh sĂ¡ch báº£o máº­t<\/a> cá»§a Sapo<\/span>"));
    rt.append(ut);
    f.append(rt);
    at = clone(s);
    at.append(li);
    f.append(at);
    f.append(ai);
    f.append(vi);
    y.innerHTML = "";
    y.append(yt);
    y.append(vt);
    y.append(e);
    y.append(f);
    document.getElementById("trialPopupModal") && document.getElementById("trialPopupModal").remove();
    ni = document.getElementsByTagName("body")[0];
    ni.append(o);
    sapoRegisterModal("#trialPopupModal");
    new TomSelect(f.querySelectorAll("#CityDistrict")[0], {
        positionDropdown: "auto",
        openOnFocus: !1,
        placeholder: "",
        chooseItemOnBlur: !0,
        render: { option: function(n) { return "<div data-city='" + JSON.parse(n.data).city + "' data-code='" + JSON.parse(n.data).code + '\' class="option">' + JSON.parse(n.data).city + "<\/div>" } },
        onFocus: function() {
            for (var t = this.wrapper.parentNode, n = 0; n < t.childNodes.length; n++)
                if (t.childNodes[n].tagName.toLowerCase() == "label") { t.childNodes[n].classList.add("filled"); break }
        },
        onBlur: function() {
            var t, n;
            if (this.items.length === 0)
                for (t = this.wrapper.parentNode, n = 0; n < t.childNodes.length; n++)
                    if (t.childNodes[n].tagName.toLowerCase() == "label") { t.childNodes[n].classList.remove("filled"); break }
        },
        onChange: function(n) {
            var r = n.split(","),
                i, t;
            for (o.querySelectorAll('input[name="City"]')[0].value = r[0], o.querySelectorAll('input[name="CityId"]')[0].value = r[1], o.querySelectorAll('input[name="CityNameAndId"]')[0].value = n, i = this.wrapper.parentNode, t = 0; t < i.childNodes.length; t++)
                if (i.childNodes[t].tagName.toLowerCase() == "label") { i.childNodes[t].classList.add("filled"); break }
        },
        onInitialize: function() {
            var t, n;
            if (this.items.length > 0)
                for (t = this.wrapper.parentNode, n = 0; n < t.childNodes.length; n++)
                    if (t.childNodes[n].tagName.toLowerCase() == "label") { t.childNodes[n].classList.add("filled"); break }
        }
    });
    ti = window.intlTelInput(document.querySelector("#PhoneNumber"), { onlyCountries: ["vn"], hiddenInput: "mobile", separateDialCode: !0, allowDropdown: !1 });
    ti.setCountry("vn");
    o.querySelectorAll("#PhoneNumber")[0].addEventListener("focus", function(n) { n.target.parentNode.parentNode.classList.add("valid") });
    o.querySelectorAll("#PhoneNumber")[0].addEventListener("focusout", function(n) { n.target.value == "" && n.target.parentNode.parentNode.classList.remove("valid") });
    ii = o.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], input[type="password"]');
    ri = ["change", "keyup", "input"];
    ii.forEach(function(n) { ri.forEach(function(t) { n.addEventListener(t, function(n) { n.target.value == "" ? n.target.parentNode.classList.remove("valid") : n.target.parentNode.classList.add("valid") }) }) })
}

function handleSubmit(n) {
    var t, i, r;
    return (n.preventDefault(), t = document.getElementById("trialForm"), t.querySelectorAll(".register-form-error")[0].innerHTML = "", t.querySelectorAll(".btn-registration")[0].classList.add("btn-loading"), i = "", r = t.querySelectorAll("#StoreName")[0].value, t.querySelectorAll("#CaptchaInput").length > 0 && t.querySelectorAll("#CaptchaInput")[0].value != codeCaptcha && showCaptcha == !0) ? (t.querySelectorAll("#CaptchaInput")[0].value = "", t.querySelectorAll("#CaptchaInput")[0].parentNode.classList.remove("valid"), t.querySelectorAll(".register-form-error")[0].innerHTML = "<li>Sai mĂ£ an toĂ n<\/li>", t.querySelectorAll(".resetCaptchaBtn")[0].dispatchEvent(new Event("click")), t.querySelectorAll("#CaptchaInput")[0].focus(), t.querySelectorAll(".btn-registration")[0].classList.remove("btn-loading"), !1) : (checkAlias(r, function(n) {
        if (n) {
            var u = serializeArray(t),
                f = JSON.stringify(u);
            ajax({
                url: urlRegister,
                method: "post",
                data: JSON.parse(f),
                success: function(n) {
                    if (n.result) setTimeout(function() { window.location.href = n.result.RedirectUrl }, 400);
                    else {
                        if (t.querySelectorAll(".btn-registration")[0].classList.remove("btn-loading"), n.error)
                            if (n.error == "TENANT_EXISTED") i += "<li>Cá»­a hĂ ng <strong>" + r + "<\/strong> Ä‘Ă£ tá»“n táº¡i trong há»‡ thá»‘ng!<\/li>";
                            else if (n.error == "REGISTER_FAILED") i += "<li>CĂ³ lá»—i xáº£y ra<\/li>";
                        else
                            for (var e = n.error.replace(/\n/g, "; ").replace(/; $/, ""), f = e.split(";"), u = 0; u < f.length; ++u) i += "<li>" + f[u] + "<\/li>";
                        else i += "<li>CĂ³ lá»—i xáº£y ra<\/li>";
                        if (!!i) return t.querySelectorAll(".register-form-error")[0].innerHTML = i, t.querySelectorAll(".register-form-error")[0].classList.add("show"), !1
                    }
                },
                error: function(n) {
                    if (t.querySelectorAll(".btn-registration")[0].classList.remove("btn-loading"), n && n.error)
                        for (var f = n.error.replace(/\n/g, "; ").replace(/; $/, ""), u = f.split(";"), r = 0; r < u.length; ++r) i += "<li>" + u[r] + "<\/li>";
                    else i += "<li>CĂ³ lá»—i xáº£y ra<\/li>";
                    if (i) return t.querySelectorAll(".register-form-error")[0].innerHTML = i, t.querySelectorAll(".register-form-error")[0].classList.add("show"), !1
                }
            })
        } else return t.querySelectorAll(".register-form-error")[0].innerHTML = "<li>Cá»­a hĂ ng <strong>" + r + "<\/strong> Ä‘Ă£ tá»“n táº¡i trong há»‡ thá»‘ng!<\/li>", t.querySelectorAll(".register-form-error")[0].classList.add("show"), t.querySelectorAll(".btn-registration")[0].classList.remove("btn-loading"), !1
    }), !1)
}

function checkAlias(n, t) {
    var i = urlCheckAlias + "?alias=" + n;
    jsonp(i, t)
}

function buildRedirectUrl(n, t) {
    var u;
    if (!redirectUri || redirectUri === "" || redirectUri.toString().toLowerCase() === "iphone" || redirectUri.toString().toLowerCase() === "android") return window.location.href;
    var r = new URL(redirectUri),
        f = r.search,
        i = new URLSearchParams(f);
    return i.set("type", n), i.set("show_popup", "true"), u = document.getElementById("trialForm"), u.querySelectorAll("input").forEach(function(n) { n.value != "" && n.value != null && n.getAttribute("name") != "Type" && n.getAttribute("name") != "Password" && n.getAttribute("name") != "StoreName" && n.getAttribute("name") != "PhoneNumber" && n.getAttribute("name") != "Email" && i.set(n.getAttribute("name"), n.value) }), u.querySelectorAll("select").length > 0 && u.querySelectorAll("select").forEach(function(n) { n.getAttribute("name") != "CityDistrict" && n.getAttribute("name") != "PackageType" && n.getAttribute("name") != "PreferredService" && (r += "&" + n.getAttribute("name") + "=" + n.value) }), i.set("lang", "vi-VN"), i.set("sourceInfo", t), r.search = i.toString(), r.toString()
}

function registerFacebook(n) {
    var t = { client_id: facebookClientId, redirect_uri: facebookRedirectUri, state: JSON.stringify({ redirectUrl: buildRedirectUrl(n, "facebook"), type: "signup" }), scope: "email", response_type: "code" },
        i = "https://www.facebook.com/v3.2/dialog/oauth" + encodeURIParams(t, !0);
    window.location.href = i
}

function registerGoogle(n) {
    var t = { client_id: googleClientId, redirect_uri: googleRedirectUri, scope: "email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile", access_type: "online", state: JSON.stringify({ redirectUrl: buildRedirectUrl(n, "google"), type: "signup" }), response_type: "code" },
        i = "https://accounts.google.com/o/oauth2/v2/auth" + encodeURIParams(t, !0);
    window.location.href = i
}

function showModalTrialFnB(n, t) {
    var e, i, r, u, f, o, s;
    popupOpen == !1 && (popupOpen = !0, e = "", n && n.parentNode && n.parentNode.parentNode.querySelectorAll("#phone_number_fnb")[0] && (e = n.parentNode.parentNode.querySelectorAll("#phone_number_fnb")[0].value), i = getParameterByName("sales_team"), i !== null && i !== "" && setCookie("sales_team", i, 30), r = getParameterByName("kd"), r !== null && r !== "" && setCookie("kd", r, 30), u = getParameterByName("ref"), u !== null && u !== "" && setCookie("ref", u, 30), f = getParameterByName("campaign"), f !== null && f !== "" && setCookie("campaign", f, 30), o = getCookie("start_time"), (o == null || o == "") && setCookie("start_time", getDateTime(), .0115), s = window.location.href, setCookie("source", s, 30), checkShowCaptcha("fnb", "", "", "", "", e, t))
}

function createModalFnB(n, t, i) {
    var e = parseHtml('<div id="trialPopupModalFnB" class="sapo-modal-register fade" role="dialog"><div class="sapo-modal-register-dialog" role="document"><div class="sapo-modal-register-content"><div class="sapo-modal-register-body"><\/div><\/div><\/div><\/div>'),
        o = e.querySelectorAll(".sapo-modal-register-body")[0],
        r, ft, et, ot, ht, s, d, h, g, c, nt, l, tt, a, it, v, ut, pt, wt, bt;
    ft = parseHtml('<div class="logo"><img src="https://www.sapo.vn/Themes/Portal/Default/StylesV2/images/logo/Sapo-logo.svg?v=202101071107" alt="Sapo logo" class="fade show"><\/div>');
    ot = parseHtml('<button type="button" class="close" data-dismiss="sapo-modal-register" onCLick="popupOpen = false;" aria-label="Close"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 3.02143L26.9786 0L15 11.9786L3.02143 0L0 3.02143L11.9786 15L0 26.9786L3.02143 30L15 18.0214L26.9786 30L30 26.9786L18.0214 15L30 3.02143Z" /><\/svg><\/button>');
    et = i && i == "GrabFood" ? parseHtml('<div class="block-title"><h2>ÄÄƒng kĂ½ bĂ¡n hĂ ng trĂªn GrabFood qua Sapo FnB<\/h2><p>HÆ°á»Ÿng trá»n Æ°u Ä‘Ă£i háº¥p dáº«n<\/p>') : parseHtml('<div class="block-title"><h2>ÄÄƒng kĂ½ dĂ¹ng thá»­ Sapo FnB<\/h2><p>Miá»…n phĂ­ 7 ngĂ y vá»›i Ä‘áº§y Ä‘á»§ tĂ­nh nÄƒng<\/p>');
    r = parseHtml('<form action="' + urlRegisterFnb + '" id="trialFormFnB" autocomplete="off" class="form-request" onsubmit="return handleSubmitFnB(event)" method="POST" accept-charset="UTF-8"><\/form>');
    var st = parseHtml('<div class="row"><\/div>'),
        b = parseHtml('<div class="col-md-6"><\/div>'),
        u = parseHtml('<div class="form-group mdc-text-field"><\/div>'),
        kt = parseHtml('<div class="form-group mdc-selectize"><\/div>'),
        f = parseHtml('<label for=""><\/label>'),
        dt = parseHtml('<ul class="register-form-error"><\/ul>'),
        gt = parseHtml('<div class="register-phone-exist"><\/div>'),
        ni = parseHtml('<input type="text" pattern="^.{3,60}$" maxlength="60" id="StoreName" class="form-control form-input" name="StoreName" required="" title="TĂªn cá»§a nhĂ  hĂ ng dĂ i tá»« 3 Ä‘áº¿n 60 kĂ½ tá»±" />'),
        ti = parseHtml('<input type="text" maxlength="60" id="FullName" class="form-control form-input" name="FullName" required="" />'),
        k = parseHtml('<input type="tel" maxlength="15" pattern="((0|84|\\+84)(3|5|7|8|9)[0-9]{8}$|^$)" id="Phone" class="form-control form-input" name="Phone" required="" />');
    n != undefined && n != "" && (k.value = n, k.classList.add("valid"));
    ht = parseHtml('<input type="email" pattern="^[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$" maxlength="50" id="Email" class="form-control form-input" name="Email" required="" />');
    s = parseHtml('<select id="CityDistrict" name="CityDistrict" required=""><\/select>');
    s.append(parseHtml('<option value="" hidden=""><\/option>'));
    jsonCity != null && jsonCity.length > 0 && jsonCity.forEach(function(n) {
        n != null && n != undefined && n.Districts != undefined && n.Districts.length > 0 && n.Districts.forEach(function(t) {
            var i = parseHtml('<option value="' + n.Title + " - " + t.Title + '" data-data=\'{"city":"' + n.Title.replace("'", "&#x27;") + '","district":"' + t.Title.replace("'", "&#x27;") + "\"}'>" + n.Title + " - " + t.Title + "<\/option>");
            s.append(i)
        })
    });
    var ii = parseHtml('<button type="submit" class="btn-registration btn-fnb"><span>ÄÄƒng kĂ½ dĂ¹ng thá»­<\/span><svg class="pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"><\/path><\/svg><\/button>'),
        ri = parseHtml('<div className="hidden-input"><input id="Preferred" name="Preferred" type="hidden" value="' + (getCookie("preferred") != null ? getCookie("preferred") : "") + '"><input id="SaleName" name="SaleName" type="hidden" value="' + (getCookie("kd") != null ? getCookie("kd") : "") + '"><input id="Reference" name="Reference" type="hidden" value="' + (getCookie("ref") != null ? getCookie("ref") : "") + '"><input id="Source" name="Source" type="hidden" value="' + (getCookie("source") != null ? getCookie("source") : "") + '"><input id="Referral" name="Referral" type="hidden" value="' + (getCookie("referral") != null ? getCookie("referral") : "") + '"><input id="Campaign" name="Campaign" type="hidden" value="' + (getCookie("campaign") != null ? getCookie("campaign") : "") + '"><input id="LandingPage" name="LandingPage" type="hidden" value="' + (getCookie("landing_page") != null ? getCookie("landing_page") : "") + '"><input id="StartTime" name="StartTime" type="hidden" value="' + (getCookie("start_time") != null ? getCookie("start_time") : "") + '"><input id="EndTime" name="EndTime" type="hidden" value="' + (getDateTime() != null ? getDateTime() : "") + '"><input id="PageView" name="PageView" type="hidden" value="' + (getCookie("pageview") != null ? getCookie("pageview") : "") + '"><input id="AffId" name="AffId" type="hidden" value="' + (getCookie("aff_id") != null ? getCookie("aff_id") : "") + '"><input id="AffTrackingId" name="AffTrackingId" type="hidden" value="' + (getCookie("aff_tracking_id") != null ? getCookie("aff_tracking_id") : "") + '"><input id="Province" name="Province" type="hidden"><input id="District" name="District" type="hidden"><\/div>');
    r.append(gt);
    r.append(dt);
    d = clone(u);
    h = clone(f);
    h.setAttribute("for", "StoreName");
    h.innerHTML = "TĂªn quĂ¡n cá»§a báº¡n";
    d.append(ni, h);
    g = clone(u);
    c = clone(f);
    c.setAttribute("for", "FullName");
    c.innerHTML = "Há» vĂ  tĂªn cá»§a báº¡n";
    g.append(ti, c);
    nt = clone(u);
    l = clone(f);
    l.setAttribute("for", "Phone");
    l.innerHTML = "Sá»‘ Ä‘iá»‡n thoáº¡i cá»§a báº¡n";
    nt.append(k, l);
    tt = clone(u);
    a = clone(f);
    a.setAttribute("for", "Email");
    a.innerHTML = "Email Ä‘Äƒng kĂ½";
    tt.append(ht, a);
    it = clone(kt);
    v = clone(f);
    v.setAttribute("for", "CityDistrict-tomselected");
    v.innerHTML = "Báº¡n Ä‘ang á»Ÿ quáº­n/huyá»‡n nĂ o?";
    it.append(s, v);
    var ct = clone(st),
        lt = clone(b),
        at = clone(b);
    if (lt.append(g), at.append(nt), ct.append(lt, at), r.append(d, ct, tt, it), t != "VN") {
        var y = clone(u),
            rt = clone(f),
            vt = clone(st),
            yt = clone(b);
        y.classList.add("mdc-text-field", "captcha-field");
        rt.setAttribute("for", "CaptchaInput");
        rt.innerHTML = "MĂ£ an toĂ n";
        y.innerHTML += '<input autocomplete="off" type="text" value="" name="CaptchaInput" id="CaptchaInput" maxlength="4" required class="form-control form-input"><a onclick="resetCaptcha(this)" class="resetCaptchaBtn" id="captchaReset" href="javascript:void(0);"><\/a><div id="Captcha"><\/div>';
        y.append(rt);
        yt.append(y);
        vt.append(yt);
        r.append(vt);
        createCaptcha(r)
    }
    var ui = parseHtml('<input type="checkbox" required="" checked="true" id="ConfirmPolicy" />'),
        p = clone(u),
        w = clone(f);
    p.classList.remove("mdc-text-field");
    p.classList.add("mdc-checkbox");
    w.setAttribute("for", "ConfirmPolicy");
    w.append(ui);
    w.append(parseHtml("<span style='font-size: 14px;'>TĂ´i Ä‘á»“ng Ă½ vá»›i <a href='https://support.sapo.vn/quy-dinh-su-dung?campaign=form_dungthu_sapo&utm_campaign=form_dungthu_sapo_ref_quy_dinh_su_dung&utm_source=form_dungthu&utm_medium=textlink_referral' target='_blank'>quy Ä‘á»‹nh sá»­ dá»¥ng<\/a> vĂ  <a href='https://support.sapo.vn/chinh-sach-bao-mat?campaign=form_dungthu_sapo&utm_campaign=form_dungthu_sapo_ref_chinh_sach_bao_mat&utm_source=form_dungthu&utm_medium=textlink_referral' target='_blank'>chĂ­nh sĂ¡ch báº£o máº­t<\/a> cá»§a Sapo<\/span>"));
    p.append(w);
    r.append(p);
    ut = clone(u);
    ut.append(ii);
    r.append(ut);
    r.append(ri);
    o.innerHTML = "";
    o.append(ot);
    o.append(ft);
    o.append(et);
    o.append(r);
    document.getElementById("trialPopupModalFnB") && document.getElementById("trialPopupModalFnB").remove();
    pt = document.getElementsByTagName("body")[0];
    pt.append(e);
    sapoRegisterModal("#trialPopupModalFnB");
    new TomSelect(r.querySelectorAll("#CityDistrict")[0], {
        positionDropdown: "auto",
        openOnFocus: !1,
        placeholder: "",
        chooseItemOnBlur: !0,
        render: { option: function(n) { return "<div data-city='" + n.city + "' data-district='" + n.district + '\' class="option">' + n.value + "<\/div>" } },
        onFocus: function() {
            for (var t = this.wrapper.parentNode, n = 0; n < t.childNodes.length; n++)
                if (t.childNodes[n].tagName.toLowerCase() == "label") { t.childNodes[n].classList.add("filled"); break }
        },
        onBlur: function() {
            var t, n;
            if (this.items.length === 0)
                for (t = this.wrapper.parentNode, n = 0; n < t.childNodes.length; n++)
                    if (t.childNodes[n].tagName.toLowerCase() == "label") { t.childNodes[n].classList.remove("filled"); break }
        },
        onChange: function(n) {
            var t = n.split(" - ");
            e.querySelectorAll('input[name="Province"]')[0].value = t[0];
            e.querySelectorAll('input[name="District"]')[0].value = t[1]
        },
        onInitialize: function() {
            var t, n;
            if (this.items.length > 0)
                for (t = this.wrapper.parentNode, n = 0; n < t.childNodes.length; n++)
                    if (t.childNodes[n].tagName.toLowerCase() == "label") { t.childNodes[n].classList.add("filled"); break }
        }
    });
    wt = e.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], input[type="password"]');
    bt = ["change", "keyup", "input"];
    wt.forEach(function(n) { bt.forEach(function(t) { n.addEventListener(t, function(n) { n.target.value == "" ? n.target.parentNode.classList.remove("valid") : n.target.parentNode.classList.add("valid") }) }) })
}

function modalVerifiedOTP() {
    var t = parseHtml('<div id="modalVerifiedOTP" class="sapo-modal-register fade" role="dialog"><div class="sapo-modal-register-dialog" role="document"><div class="sapo-modal-register-content"><div class="sapo-modal-register-body"><\/div><\/div><\/div><\/div>'),
        n = t.querySelectorAll(".sapo-modal-register-body")[0],
        i, o, s, h, c = parseHtml('<div class="notification"><\/div>'),
        e, p, w, b;
    o = parseHtml('<div class="logo"><img src="https://www.sapo.vn/Themes/Portal/Default/StylesV2/images/logo/Sapo-logo.svg?v=202101071107" alt="Sapo logo" class="fade show"><\/div>');
    h = parseHtml('<button type="button" class="close" data-dismiss="sapo-modal-register" aria-label="Close" onCLick="popupOpen = false;"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 3.02143L26.9786 0L15 11.9786L3.02143 0L0 3.02143L11.9786 15L0 26.9786L3.02143 30L15 18.0214L26.9786 30L30 26.9786L18.0214 15L30 3.02143Z" /><\/svg><\/button>');
    s = parseHtml("<h2>XĂ¡c minh mĂ£ OTP cá»§a báº¡n<\/h2>");
    i = parseHtml('<form action="' + urlRegisterFnb + '" id="fnbVerifiedOTP" onsubmit="return verifiedOTP(this);" autocomplete="off" class="form-request" method="POST" accept-charset="UTF-8"><\/form>');
    var r = parseHtml('<div class="form-group mdc-text-field"><\/div>'),
        l = parseHtml('<label for=""><\/label>'),
        k = parseHtml('<input type="tel" id="Phone" class="form-control form-input valid" name="Phone" required="" readOnly="true" disabled="true" value="' + phoneNumber + '" />'),
        d = parseHtml('<input type="text" id="FnBCode" maxlength="6" autocomplete="one-time-code" pattern="^\\d{6}$" class="form-control form-input" name="FnBCode" required="" title="MĂ£ xĂ¡c minh pháº£i lĂ  sá»‘ vĂ  gá»“m 6 kĂ­ tá»±" />');
    c.innerHTML = '<div class="noti d-flex"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.48672 0 0 4.48672 0 10C0 15.5133 4.48672 20 10 20C15.5133 20 20 15.5133 20 10C20 4.48672 15.5133 0 10 0ZM15.0688 7.88125L9.65234 13.2977C9.48984 13.4602 9.27578 13.5414 9.06328 13.5414C8.85 13.5414 8.63672 13.4602 8.47422 13.2977L5.76562 10.5891C5.44063 10.2641 5.44063 9.73672 5.76562 9.41016C6.09063 9.08359 6.61797 9.08516 6.94453 9.41016L9.06328 11.5289L13.8906 6.70156C14.2156 6.37656 14.743 6.37656 15.0695 6.70156C15.3961 7.02656 15.3938 7.55469 15.0688 7.88125Z" fill="#0FD186"/><\/svg><span>MĂ£ xĂ¡c minh Ä‘Ă£ Ä‘Æ°á»£c gá»­i vĂ o sá»‘ Ä‘iá»‡n thoáº¡i cá»§a báº¡n.<br>Náº¿u khĂ´ng nháº­n Ä‘Æ°á»£c vui lĂ²ng <a href="javascript:;" onclick="return resendOTP(this);" class="btn-retry">thá»­ láº¡i<svg class="pulse" style="display: none;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"><\/path><\/svg><\/a><\/div>';
    var a = parseHtml('<div class="text-center"><\/div>'),
        g = parseHtml('<button type="submit" class="btn-registration btn-fnb"><span>XĂ¡c nháº­n<\/span><svg class="pulse" style="display: none;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"><\/path><\/svg><\/button>'),
        v = clone(r),
        u = clone(l);
    u.setAttribute("for", "Phone");
    u.innerHTML = "Sá»‘ Ä‘iá»‡n thoáº¡i cá»§a báº¡n";
    v.append(k, u);
    var y = clone(r),
        f = clone(l),
        nt = parseHtml('<span class="text-danger" data-valmsg-for="FnBCode" style="display: none;"><\/span>');
    f.setAttribute("for", "FnBCode");
    f.innerHTML = "MĂ£ xĂ¡c minh";
    y.append(d, f, nt);
    e = clone(r);
    e.append(g);
    a.append(e);
    i.append(c, v, y, a);
    n.innerHTML = "";
    n.append(h);
    n.append(o);
    n.append(s);
    n.append(i);
    closeAllSapoModal();
    document.getElementById("modalVerifiedOTP") && document.getElementById("modalVerifiedOTP").remove();
    p = document.getElementsByTagName("body")[0];
    p.append(t);
    sapoRegisterModal("#modalVerifiedOTP");
    w = t.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], input[type="password"]');
    b = ["change", "keyup", "input"];
    w.forEach(function(n) { b.forEach(function(t) { n.addEventListener(t, function(n) { n.target.value == "" ? n.target.parentNode.classList.remove("valid") : n.target.parentNode.classList.add("valid") }) }) })
}

function modalCreateStatus(n, t) {
    var u = parseHtml('<div id="modalCreateStatus" class="sapo-modal-register sapo-modal-register-success fade" role="dialog"><div class="sapo-modal-register-dialog" role="document"><div class="sapo-modal-register-content"><div class="sapo-modal-register-body"><\/div><\/div><\/div><\/div>'),
        i = u.querySelectorAll(".sapo-modal-register-body")[0],
        o, f, s, e, h, r, c;
    o = parseHtml('<div class="logo"><img src="https://www.sapo.vn/Themes/Portal/Default/StylesV2/images/logo/Sapo-logo.svg?v=202101071107" alt="Sapo logo" class="fade show"><\/div>');
    s = parseHtml('<button type="button" class="close" data-dismiss="sapo-modal-register" aria-label="Close"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 3.02143L26.9786 0L15 11.9786L3.02143 0L0 3.02143L11.9786 15L0 26.9786L3.02143 30L15 18.0214L26.9786 30L30 26.9786L18.0214 15L30 3.02143Z" /><\/svg><\/button>');
    n == "failed" ? (f = parseHtml("<h2>ÄÄƒng kĂ½ dĂ¹ng thá»­ Sapo FnB <br/>khĂ´ng thĂ nh cĂ´ng!<\/h2>"), e = parseHtml('<div class="htmlBody"><svg class="icon-failed" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000"><g><path d="M500,10C229,10,10,229,10,500s219,490,490,490c271,0,490-219,490-490S771,10,500,10z M814.1,772.8l-41.3,41.3L500,541.3L227.2,814.1l-41.3-41.3L458.7,500L185.9,225.4l41.3-41.3L500,456.9l272.8-272.8l41.3,41.3L541.3,500L814.1,772.8z"/><\/g><\/svg><p>CĂ³ lá»—i xáº£y ra trong quĂ¡ trĂ¬nh Ä‘Äƒng kĂ½. Vui lĂ²ng thá»­ láº¡i sau!<\/p><\/div>'), i.classList.add("modal-failed")) : (f = parseHtml("<h2>ÄÄƒng kĂ½ dĂ¹ng thá»­ Sapo FnB thĂ nh cĂ´ng!<\/h2>"), e = parseHtml('<div class="htmlBody"><p>Chuyá»ƒn hÆ°á»›ng Ä‘áº¿n nhĂ  hĂ ng cá»§a báº¡n sau<\/p><div class="count-down"><span>5<\/span><svg class="svg-countdown" width="116" height="116" xmlns="http://www.w3.org/2000/svg"><circle r="50" cy="58" cx="58" stroke-width="10" fill="none" /><\/svg><svg class="svg-countdown-progress" width="116" height="116" xmlns="http://www.w3.org/2000/svg"><circle class="circle-animation" r="50" cy="58" cx="-58" stroke-width="10" stroke="#0cc2ed" fill="none" /><\/svg><\/div><p class="text-redirect">HOáº¶C<\/p><a href="' + t + '" class="btn-registration btn-fnb" rel="nofollow">VĂ o nhĂ  hĂ ng cá»§a báº¡n<\/a><\/div>'));
    i.innerHTML = "";
    i.append(s);
    i.append(o);
    i.append(f);
    i.append(e);
    closeAllSapoModal();
    document.getElementById("modalCreateStatus") && document.getElementById("modalCreateStatus").remove();
    h = document.getElementsByTagName("body")[0];
    h.append(u);
    sapoRegisterModal("#modalCreateStatus");
    formData = null;
    phoneNumber = null;
    popupVerifiedOpen = !1;
    n == "success" && (r = 5, c = setInterval(function() {
        if (u.querySelectorAll(".count-down")[0].querySelectorAll("span")[0].innerHTML = r, r == 0) {
            clearInterval(c);
            window.location.href = t;
            return
        }
        u.querySelectorAll(".svg-countdown-progress")[0].querySelectorAll(".circle-animation")[0].style["stroke-dashoffset"] = 315 - (r - 1) * 63;
        r--
    }, 1e3))
}

function handleSubmitFnB(n) {
    var t, i;
    return (n.preventDefault(), t = document.getElementById("trialFormFnB"), t.querySelectorAll(".register-form-error")[0].innerHTML = "", t.querySelectorAll(".register-phone-exist")[0].innerHTML = "", t.querySelectorAll(".btn-registration")[0].classList.add("btn-loading"), i = "", phoneNumber = t.querySelectorAll("#Phone")[0].value, t.querySelectorAll("#CaptchaInput").length > 0 && t.querySelectorAll("#CaptchaInput")[0].value != codeCaptcha && showCaptcha == !0) ? (t.querySelectorAll("#CaptchaInput")[0].value = "", t.querySelectorAll("#CaptchaInput")[0].classList.remove("valid"), t.querySelectorAll(".register-form-error")[0].innerHTML = "<li>Sai mĂ£ an toĂ n<\/li>", t.querySelectorAll(".resetCaptchaBtn")[0].dispatchEvent(new Event("click")), t.querySelectorAll("#CaptchaInput")[0].focus(), t.querySelectorAll(".btn-registration")[0].classList.remove("btn-loading"), !1) : (validateModel(function(n) {
        n ? checkPhone(function(n) {
            if (n) sendOTP(function(n) { return n ? (formData = t, modalVerifiedOTP(), !0) : (t.querySelectorAll(".btn-registration")[0].classList.remove("btn-loading"), t.querySelectorAll("#CaptchaInput")[0].value = "", t.querySelectorAll("#CaptchaInput")[0].classList.remove("valid"), t.querySelectorAll(".resetCaptchaBtn")[0].dispatchEvent(new Event("click")), !1) });
            else return t.querySelectorAll(".register-phone-exist")[0].innerHTML = "Sá»‘ Ä‘iá»‡n thoáº¡i <strong>" + phoneNumber + '<\/strong> Ä‘Ă£ tá»“n táº¡i trong há»‡ thá»‘ng.<br/>Äá»ƒ Ä‘Äƒng nháº­p vĂ o nhĂ  hĂ ng cá»§a báº¡n vui lĂ²ng <a href="' + urlFnb + '/admin/authorization/login" target="_blank" rel="nofollow">click vĂ o Ä‘Ă¢y!<\/a>', t.querySelectorAll(".register-phone-exist")[0].classList.add("show"), t.querySelectorAll(".btn-registration")[0].classList.remove("btn-loading"), t.querySelectorAll("#CaptchaInput")[0].value = "", t.querySelectorAll("#CaptchaInput")[0].classList.remove("valid"), t.querySelectorAll(".resetCaptchaBtn")[0].dispatchEvent(new Event("click")), !1
        }) : (t.querySelectorAll(".btn-registration")[0].classList.remove("btn-loading"), t.querySelectorAll(".resetCaptchaBtn")[0].dispatchEvent(new Event("click")))
    }), !1)
}

function validateModel(n) {
    var i = document.getElementById("trialFormFnB"),
        t = "",
        r = serializeArray(i),
        u = JSON.stringify(r);
    return ajax({
        url: "/fnb/validateregister",
        method: "post",
        data: JSON.parse(u),
        success: function(r) {
            var e, u, f;
            if (r != null && r != "") {
                if (r.error)
                    for (e = r.error.replace(/\n/g, ";").replace(/; $/, ""), u = e.split(";"), u = u.filter(function(n, t, i) { return t === i.indexOf(n) }), f = 0; f < u.length; ++f) u[f] != null && u[f] != "" && (t += "<li>" + u[f] + "<\/li>");
                if (!!t) return i.querySelectorAll(".register-form-error")[0].innerHTML = t, i.querySelectorAll(".register-form-error")[0].classList.add("show"), n(!1)
            }
            return n(!0)
        },
        error: function(r) {
            var e, u, f;
            if (r != null && r != "") {
                if (r.responseJSON && r.responseJSON.error)
                    for (e = r.responseJSON.error.replace(/\n/g, ";").replace(/; $/, ""), u = e.split(";"), u = u.filter(function(n, t, i) { return t === i.indexOf(n) }), f = 0; f < u.length; ++f) u[f] != null && u[f] != "" && (t += "<li>" + u[f] + "<\/li>");
                !t || (i.querySelectorAll(".register-form-error")[0].innerHTML = t, i.querySelectorAll(".register-form-error")[0].classList.add("show"))
            }
            return n(!1)
        }
    }), !1
}

function checkPhone(n) { ajax({ url: "/fnb/checkphonenumber", data: { phonenumber: phoneNumber }, success: n, error: function() { n(!1) } }) }

function sendOTP(n) {
    var t = document.getElementById("trialFormFnB");
    ajax({
        url: "/fnb/sendotp",
        method: "post",
        data: { phonenumber: phoneNumber },
        success: function(i) {
            i == !0 ? n(!0) : i.error != null && i.error != "" && (t.querySelectorAll(".register-form-error")[0].innerHTML = "<li>" + i.error + "<\/li>", t.querySelectorAll(".register-form-error")[0].classList.add("show"));
            n(!1)
        },
        error: function() { n(!1) }
    })
}

function resendOTP(n) {
    var t = document.getElementById("fnbVerifiedOTP");
    t.querySelectorAll(".has-error").length > 0 && (t.querySelectorAll(".has-error")[0].innerHTML = "");
    n.querySelectorAll("svg")[0].style.display = "";
    ajax({ url: "/fnb/sendotp", method: "post", data: { phonenumber: phoneNumber }, success: function(i) { return (n.querySelectorAll("svg")[0].style.display = "none", t.querySelectorAll("#FnBCode")[0].value = "", t.querySelectorAll("#FnBCode")[0].classList.remove("valid"), i.error != null && i.error != "") ? (t.querySelectorAll('[data-valmsg-for="FnBCode"]')[0].innerHTML = i.error, t.querySelectorAll('[data-valmsg-for="FnBCode"]')[0].style.display = "block", !1) : !0 }, error: function() { return n.querySelectorAll("svg")[0].style.display = "none", t.querySelectorAll('[data-valmsg-for="FnBCode"]')[0].innerHTML = "CĂ³ lá»—i xáº£y ra khi gá»­i láº¡i mĂ£ OTP. Vui lĂ²ng thá»­ láº¡i sau!", t.querySelectorAll('[data-valmsg-for="FnBCode"]')[0].style.display = "block", !1 } })
}

function verifiedOTP(n) {
    var t = document.getElementById("fnbVerifiedOTP"),
        i = t.querySelectorAll("#FnBCode")[0].value;
    if (t.querySelectorAll("invalid").length > 0 && t.querySelectorAll(".invalid")[0].classList.remove("invalid"), n.querySelectorAll("svg")[0].style.display = "block", i == "" || i == null) return n.querySelectorAll("svg")[0].style.display = "none", t.querySelectorAll("#FnBCode")[0].parentNode.classList.add("invalid"), t.querySelectorAll('[data-valmsg-for="FnBCode"]')[0].innerHTML = "Báº¡n chÆ°a nháº­p mĂ£ xĂ¡c minh", t.querySelectorAll('[data-valmsg-for="FnBCode"]')[0].style.display = "block", t.querySelectorAll("#FnBCode")[0].focus(), !1;
    if (i != null & i != "") ajax({ url: "/fnb/verifiedotp", method: "post", data: { fnbcode: i, phonenumber: phoneNumber }, success: function(r) { return r.error != null && r.error != "" ? (t.querySelectorAll("#FnBCode")[0].parentNode.classList.add("invalid"), t.querySelectorAll('[data-valmsg-for="FnBCode"]')[0].innerHTML = r.error, t.querySelectorAll('[data-valmsg-for="FnBCode"]')[0].style.display = "block", n.querySelectorAll("svg")[0].style.display = "none") : createStore(i), !1 }, error: function() { return n.querySelectorAll("svg")[0].style.display = "none", t.querySelectorAll('[data-valmsg-for="FnBCode"]')[0].innerHTML = "CĂ³ lá»—i xáº£y ra. Vui lĂ²ng thá»­ láº¡i sau!", t.querySelectorAll('[data-valmsg-for="FnBCode"]')[0].style.display = "block", !1 } });
    else return n.querySelectorAll("svg")[0].style.display = "none", t.querySelectorAll('[data-valmsg-for="FnBCode"]')[0].innerHTML = "CĂ³ lá»—i xáº£y ra. Vui lĂ²ng thá»­ láº¡i sau!", t.querySelectorAll('[data-valmsg-for="FnBCode"]')[0].style.display = "block", !1;
    return !1
}

function createStore(n) {
    var t = serializeArray(formData),
        i;
    return t.Otp = n, i = JSON.stringify(t), ajax({
        url: "/fnb/registerfnb",
        method: "post",
        data: JSON.parse(i),
        success: function(n) {
            if (n.result != null && n.result != "") {
                var t = urlFnb + "/admin/authorization/login?phone=" + n.result.Phone + "&token_redirect=" + n.result.TokenRedirect;
                window.gtag && gtag_report_conversion();
                modalCreateStatus("success", t)
            } else modalCreateStatus("failed", "")
        },
        error: function() { modalCreateStatus("failed") }
    }), popupOpen = !1, !1
}

function gtag_report_conversion() { return gtag("event", "conversion", { send_to: "AW-529280946/3S49CJPb6eIBELLfsPwB" }), !1 }
var imagePath, res_container, preservedScriptAttributes;
! function(n, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) { if (!n.document) throw new Error("jQuery requires a window with a document"); return t(n) } : t(n) }("undefined" != typeof window ? window : this, function(n, t) {
    "use strict";

    function br(n, t, i) {
        var r, e, u = (i = i || f).createElement("script");
        if (u.text = n, t)
            for (r in oe)(e = t[r] || t.getAttribute && t.getAttribute(r)) && u.setAttribute(r, e);
        i.head.appendChild(u).parentNode.removeChild(u)
    }

    function ut(n) { return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ri[pr.call(n)] || "object" : typeof n }

    function pi(n) {
        var t = !!n && "length" in n && n.length,
            i = ut(n);
        return !u(n) && !rt(n) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in n)
    }

    function c(n, t) { return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase() }

    function bi(n, t, r) { return u(t) ? i.grep(n, function(n, i) { return !!t.call(n, i, n) !== r }) : t.nodeType ? i.grep(n, function(n) { return n === t !== r }) : "string" != typeof t ? i.grep(n, function(n) { return -1 < ii.call(t, n) !== r }) : i.filter(t, n, r) }

    function uu(n, t) { while ((n = n[t]) && 1 !== n.nodeType); return n }

    function et(n) { return n }

    function fi(n) { throw n; }

    function fu(n, t, i, r) { var f; try { n && u(f = n.promise) ? f.call(n).done(t).fail(i) : n && u(f = n.then) ? f.call(n, t, i) : t.apply(void 0, [n].slice(r)) } catch (n) { i.apply(void 0, [n]) } }

    function oi() {
        f.removeEventListener("DOMContentLoaded", oi);
        n.removeEventListener("load", oi);
        i.ready()
    }

    function ce(n, t) { return t.toUpperCase() }

    function y(n) { return n.replace(se, "ms-").replace(he, ce) }

    function bt() { this.expando = i.expando + bt.uid++ }

    function ou(n, t, i) {
        var u, r;
        if (void 0 === i && 1 === n.nodeType)
            if (u = "data-" + t.replace(ae, "-$&").toLowerCase(), "string" == typeof(i = n.getAttribute(u))) {
                try { i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : le.test(r) ? JSON.parse(r) : r) } catch (n) {}
                o.set(n, t, i)
            } else i = void 0;
        return i
    }

    function hu(n, t, r, u) {
        var s, h, c = 20,
            l = u ? function() { return u.cur() } : function() { return i.css(n, t, "") },
            o = l(),
            e = r && r[3] || (i.cssNumber[t] ? "" : "px"),
            f = n.nodeType && (i.cssNumber[t] || "px" !== e && +o) && kt.exec(i.css(n, t));
        if (f && f[3] !== e) {
            for (o /= 2, e = e || f[3], f = +o || 1; c--;) i.style(n, t, f + e), (1 - h) * (1 - (h = l() / o || .5)) <= 0 && (c = 0), f /= h;
            f *= 2;
            i.style(n, t, f + e);
            r = r || []
        }
        return r && (f = +f || +o || 0, s = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = e, u.start = f, u.end = s)), s
    }

    function ht(n, t) { for (var h, f, a, s, c, l, e, o = [], u = 0, v = n.length; u < v; u++)(f = n[u]).style && (h = f.style.display, t ? ("none" === h && (o[u] = r.get(f, "display") || null, o[u] || (f.style.display = "")), "" === f.style.display && dt(f) && (o[u] = (e = c = s = void 0, c = (a = f).ownerDocument, l = a.nodeName, (e = ki[l]) || (s = c.body.appendChild(c.createElement(l)), e = i.css(s, "display"), s.parentNode.removeChild(s), "none" === e && (e = "block"), ki[l] = e)))) : "none" !== h && (o[u] = "none", r.set(f, "display", h))); for (u = 0; u < v; u++) null != o[u] && (n[u].style.display = o[u]); return n }

    function s(n, t) { var r; return r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [], void 0 === t || t && c(n, t) ? i.merge([n], r) : r }

    function di(n, t) { for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval")) }

    function vu(n, t, r, u, f) {
        for (var e, o, p, a, w, v, c = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
            if ((e = n[l]) || 0 === e)
                if ("object" === ut(e)) i.merge(y, e.nodeType ? [e] : e);
                else if (au.test(e)) {
            for (o = o || c.appendChild(t.createElement("div")), p = (cu.exec(e) || ["", ""])[1].toLowerCase(), a = h[p] || h._default, o.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) o = o.lastChild;
            i.merge(y, o.childNodes);
            (o = c.firstChild).textContent = ""
        } else y.push(t.createTextNode(e));
        for (c.textContent = "", l = 0; e = y[l++];)
            if (u && -1 < i.inArray(e, u)) f && f.push(e);
            else if (w = st(e), o = s(c.appendChild(e), "script"), w && di(o), r)
            for (v = 0; e = o[v++];) lu.test(e.type || "") && r.push(e);
        return c
    }

    function ct() { return !0 }

    function lt() { return !1 }

    function we(n, t) { return n === function() { try { return f.activeElement } catch (n) {} }() == ("focus" === t) }

    function gi(n, t, r, u, f, e) {
        var o, s;
        if ("object" == typeof t) { for (s in "string" != typeof r && (u = u || r, r = void 0), t) gi(n, s, r, u, t[s], e); return n }
        if (null == u && null == f ? (f = r, u = r = void 0) : null == f && ("string" == typeof r ? (f = u, u = void 0) : (f = u, u = r, r = void 0)), !1 === f) f = lt;
        else if (!f) return n;
        return 1 === e && (o = f, (f = function(n) { return i().off(n), o.apply(this, arguments) }).guid = o.guid || (o.guid = i.guid++)), n.each(function() { i.event.add(this, t, f, u, r) })
    }

    function hi(n, t, u) {
        u ? (r.set(n, t, !1), i.event.add(n, t, {
            namespace: !1,
            handler: function(n) {
                var o, e, f = r.get(this, t);
                if (1 & n.isTrigger && this[t]) {
                    if (f.length)(i.event.special[t] || {}).delegateType && n.stopPropagation();
                    else if (f = k.call(arguments), r.set(this, t, f), o = u(this, t), this[t](), f !== (e = r.get(this, t)) || o ? r.set(this, t, !1) : e = {}, f !== e) return n.stopImmediatePropagation(), n.preventDefault(), e.value
                } else f.length && (r.set(this, t, { value: i.event.trigger(i.extend(f[0], i.Event.prototype), f.slice(1), this) }), n.stopImmediatePropagation())
            }
        })) : void 0 === r.get(n, t) && i.event.add(n, t, ct)
    }

    function pu(n, t) { return c(n, "table") && c(11 !== t.nodeType ? t : t.firstChild, "tr") && i(n).children("tbody")[0] || n }

    function ge(n) { return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n }

    function no(n) { return "true/" === (n.type || "").slice(0, 5) ? n.type = n.type.slice(5) : n.removeAttribute("type"), n }

    function wu(n, t) {
        var u, s, f, h, c, e;
        if (1 === t.nodeType) {
            if (r.hasData(n) && (e = r.get(n).events))
                for (f in r.remove(t, "handle events"), e)
                    for (u = 0, s = e[f].length; u < s; u++) i.event.add(t, f, e[f][u]);
            o.hasData(n) && (h = o.access(n), c = i.extend({}, h), o.set(t, c))
        }
    }

    function at(n, t, f, o) {
        t = yr(t);
        var a, b, l, v, h, y, c = 0,
            p = n.length,
            d = p - 1,
            w = t[0],
            k = u(w);
        if (k || 1 < p && "string" == typeof w && !e.checkClone && ke.test(w)) return n.each(function(i) {
            var r = n.eq(i);
            k && (t[0] = w.call(this, i, r.html()));
            at(r, t, f, o)
        });
        if (p && (b = (a = vu(t, n[0].ownerDocument, !1, n, o)).firstChild, 1 === a.childNodes.length && (a = b), b || o)) {
            for (v = (l = i.map(s(a, "script"), ge)).length; c < p; c++) h = a, c !== d && (h = i.clone(h, !0, !0), v && i.merge(l, s(h, "script"))), f.call(n[c], h, c);
            if (v)
                for (y = l[l.length - 1].ownerDocument, i.map(l, no), c = 0; c < v; c++) h = l[c], lu.test(h.type || "") && !r.access(h, "globalEval") && i.contains(y, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? i._evalUrl && !h.noModule && i._evalUrl(h.src, { nonce: h.nonce || h.getAttribute("nonce") }, y) : br(h.textContent.replace(de, ""), h, y))
        }
        return n
    }

    function bu(n, t, r) { for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++) r || 1 !== u.nodeType || i.cleanData(s(u)), u.parentNode && (r && st(u) && di(s(u, "script")), u.parentNode.removeChild(u)); return n }

    function ni(n, t, r) { var o, s, h, f, u = n.style; return (r = r || ci(n)) && ("" !== (f = r.getPropertyValue(t) || r[t]) || st(n) || (f = i.style(n, t)), !e.pixelBoxStyles() && nr.test(f) && to.test(t) && (o = u.width, s = u.minWidth, h = u.maxWidth, u.minWidth = u.maxWidth = u.width = f, f = r.width, u.width = o, u.minWidth = s, u.maxWidth = h)), void 0 !== f ? f + "" : f }

    function du(n, t) {
        return {
            get: function() {
                if (!n()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function tr(n) {
        var t = i.cssProps[n] || tf[n];
        return t || (n in nf ? n : tf[n] = function(n) {
            for (var i = n[0].toUpperCase() + n.slice(1), t = gu.length; t--;)
                if ((n = gu[t] + i) in nf) return n
        }(n) || n)
    }

    function ff(n, t, i) { var r = kt.exec(t); return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t }

    function ir(n, t, r, u, f, e) {
        var o = "width" === t ? 1 : 0,
            h = 0,
            s = 0;
        if (r === (u ? "border" : "content")) return 0;
        for (; o < 4; o += 2) "margin" === r && (s += i.css(n, r + b[o], !0, f)), u ? ("content" === r && (s -= i.css(n, "padding" + b[o], !0, f)), "margin" !== r && (s -= i.css(n, "border" + b[o] + "Width", !0, f))) : (s += i.css(n, "padding" + b[o], !0, f), "padding" !== r ? s += i.css(n, "border" + b[o] + "Width", !0, f) : h += i.css(n, "border" + b[o] + "Width", !0, f));
        return !u && 0 <= e && (s += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - .5)) || 0), s
    }

    function ef(n, t, r) {
        var f = ci(n),
            o = (!e.boxSizingReliable() || r) && "border-box" === i.css(n, "boxSizing", !1, f),
            s = o,
            u = ni(n, t, f),
            h = "offset" + t[0].toUpperCase() + t.slice(1);
        if (nr.test(u)) {
            if (!r) return u;
            u = "auto"
        }
        return (!e.boxSizingReliable() && o || !e.reliableTrDimensions() && c(n, "tr") || "auto" === u || !parseFloat(u) && "inline" === i.css(n, "display", !1, f)) && n.getClientRects().length && (o = "border-box" === i.css(n, "boxSizing", !1, f), (s = h in n) && (u = n[h])), (u = parseFloat(u) || 0) + ir(n, t, r || (o ? "border" : "content"), s, f, u) + "px"
    }

    function a(n, t, i, r, u) { return new a.prototype.init(n, t, i, r, u) }

    function rr() { li && (!1 === f.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(rr) : n.setTimeout(rr, i.fx.interval), i.fx.tick()) }

    function cf() { return n.setTimeout(function() { vt = void 0 }), vt = Date.now() }

    function ai(n, t) {
        var u, r = 0,
            i = { height: n };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (u = b[r])] = i["padding" + u] = n;
        return t && (i.opacity = i.width = n), i
    }

    function lf(n, t, i) {
        for (var u, f = (v.tweeners[t] || []).concat(v.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function v(n, t, r) {
        var o, s, h = 0,
            a = v.prefilters.length,
            e = i.Deferred().always(function() { delete l.elem }),
            l = function() { if (s) return !1; for (var o = vt || cf(), t = Math.max(0, f.startTime + f.duration - o), i = 1 - (t / f.duration || 0), r = 0, u = f.tweens.length; r < u; r++) f.tweens[r].run(i); return e.notifyWith(n, [f, i, t]), i < 1 && u ? t : (u || e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f]), !1) },
            f = e.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, { specialEasing: {}, easing: i.easing._default }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: vt || cf(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) { var u = i.Tween(n, f.opts, t, r, f.opts.specialEasing[t] || f.opts.easing); return f.tweens.push(u), u },
                stop: function(t) {
                    var i = 0,
                        r = t ? f.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < r; i++) f.tweens[i].run(1);
                    return t ? (e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f, t])) : e.rejectWith(n, [f, t]), this
                }
            }),
            c = f.props;
        for (! function(n, t) {
                var r, f, e, u, o;
                for (r in n)
                    if (e = t[f = y(r)], u = n[r], Array.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), (o = i.cssHooks[f]) && "expand" in o)
                        for (r in u = o.expand(u), delete n[f], u) r in n || (n[r] = u[r], t[r] = e);
                    else t[f] = e
            }(c, f.opts.specialEasing); h < a; h++)
            if (o = v.prefilters[h].call(f, n, c, f.opts)) return u(o.stop) && (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)), o;
        return i.map(c, lf, f), u(f.opts.start) && f.opts.start.call(n, f), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always), i.fx.timer(i.extend(l, { elem: n, anim: f, queue: f.opts.queue })), f
    }

    function tt(n) { return (n.match(l) || []).join(" ") }

    function it(n) { return n.getAttribute && n.getAttribute("class") || "" }

    function ur(n) { return Array.isArray(n) ? n : "string" == typeof n && n.match(l) || [] }

    function sr(n, t, r, u) {
        var f;
        if (Array.isArray(t)) i.each(t, function(t, i) { r || uo.test(n) ? u(n, i) : sr(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u) });
        else if (r || "object" !== ut(t)) u(n, t);
        else
            for (f in t) sr(n + "[" + f + "]", t[f], r, u)
    }

    function gf(n) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var r, f = 0,
                e = t.toLowerCase().match(l) || [];
            if (u(i))
                while (r = e[f++]) "+" === r[0] ? (r = r.slice(1) || "*", (n[r] = n[r] || []).unshift(i)) : (n[r] = n[r] || []).push(i)
        }
    }

    function ne(n, t, r, u) {
        function e(s) { var h; return f[s] = !0, i.each(n[s] || [], function(n, i) { var s = i(t, r, u); return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1) }), h }
        var f = {},
            o = n === hr;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function lr(n, t) { var r, u, f = i.ajaxSettings.flatOptions || {}; for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]); return u && i.extend(!0, n, u), n }
    var p = [],
        vr = Object.getPrototypeOf,
        k = p.slice,
        yr = p.flat ? function(n) { return p.flat.call(n) } : function(n) { return p.concat.apply([], n) },
        yi = p.push,
        ii = p.indexOf,
        ri = {},
        pr = ri.toString,
        ui = ri.hasOwnProperty,
        wr = ui.toString,
        ee = wr.call(Object),
        e = {},
        u = function(n) { return "function" == typeof n && "number" != typeof n.nodeType },
        rt = function(n) { return null != n && n === n.window },
        f = n.document,
        oe = { type: !0, src: !0, nonce: !0, noModule: !0 },
        kr = "3.5.1",
        i = function(n, t) { return new i.fn.init(n, t) },
        d, wi, nu, tu, iu, ru, l, eu, ei, ot, dt, ki, h, au, vt, li, yt, of, sf, hf, af, pt, vf, yf, pf, fr, er, te, wt, ie, ar, vi, re, ue, fe;
    i.fn = i.prototype = {
        jquery: kr,
        constructor: i,
        length: 0,
        toArray: function() { return k.call(this) },
        get: function(n) { return null == n ? k.call(this) : n < 0 ? this[n + this.length] : this[n] },
        pushStack: function(n) { var t = i.merge(this.constructor(), n); return t.prevObject = this, t },
        each: function(n) { return i.each(this, n) },
        map: function(n) { return this.pushStack(i.map(this, function(t, i) { return n.call(t, i, t) })) },
        slice: function() { return this.pushStack(k.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        even: function() { return this.pushStack(i.grep(this, function(n, t) { return (t + 1) % 2 })) },
        odd: function() { return this.pushStack(i.grep(this, function(n, t) { return t % 2 })) },
        eq: function(n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(0 <= t && t < i ? [this[t]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: yi,
        sort: p.sort,
        splice: p.splice
    };
    i.extend = i.fn.extend = function() {
        var s, f, e, t, o, c, n = arguments[0] || {},
            r = 1,
            l = arguments.length,
            h = !1;
        for ("boolean" == typeof n && (h = n, n = arguments[r] || {}, r++), "object" == typeof n || u(n) || (n = {}), r === l && (n = this, r--); r < l; r++)
            if (null != (s = arguments[r]))
                for (f in s) t = s[f], "__proto__" !== f && n !== t && (h && t && (i.isPlainObject(t) || (o = Array.isArray(t))) ? (e = n[f], c = o && !Array.isArray(e) ? [] : o || i.isPlainObject(e) ? e : {}, o = !1, n[f] = i.extend(h, c, t)) : void 0 !== t && (n[f] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (kr + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) { throw new Error(n); },
        noop: function() {},
        isPlainObject: function(n) { var t, i; return !(!n || "[object Object]" !== pr.call(n)) && (!(t = vr(n)) || "function" == typeof(i = ui.call(t, "constructor") && t.constructor) && wr.call(i) === ee) },
        isEmptyObject: function(n) { for (var t in n) return !1; return !0 },
        globalEval: function(n, t, i) { br(n, { nonce: t && t.nonce }, i) },
        each: function(n, t) {
            var r, i = 0;
            if (pi(n)) {
                for (r = n.length; i < r; i++)
                    if (!1 === t.call(n[i], i, n[i])) break
            } else
                for (i in n)
                    if (!1 === t.call(n[i], i, n[i])) break; return n
        },
        makeArray: function(n, t) { var r = t || []; return null != n && (pi(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : yi.call(r, n)), r },
        inArray: function(n, t, i) { return null == t ? -1 : ii.call(t, n, i) },
        merge: function(n, t) { for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i]; return n.length = r, n },
        grep: function(n, t, i) { for (var u = [], r = 0, f = n.length, e = !i; r < f; r++) !t(n[r], r) !== e && u.push(n[r]); return u },
        map: function(n, t, i) {
            var e, u, r = 0,
                f = [];
            if (pi(n))
                for (e = n.length; r < e; r++) null != (u = t(n[r], r, i)) && f.push(u);
            else
                for (r in n) null != (u = t(n[r], r, i)) && f.push(u);
            return yr(f)
        },
        guid: 1,
        support: e
    });
    "function" == typeof Symbol && (i.fn[Symbol.iterator] = p[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) { ri["[object " + t + "]"] = t.toLowerCase() });
    d = function(n) {
        function u(n, t, r, u) {
            var s, y, c, l, p, w, d, v = t && t.ownerDocument,
                a = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof n || !n || 1 !== a && 9 !== a && 11 !== a) return r;
            if (!u && (b(t), t = t || i, h)) {
                if (11 !== a && (p = ar.exec(n)))
                    if (s = p[1]) { if (9 === a) { if (!(c = t.getElementById(s))) return r; if (c.id === s) return r.push(c), r } else if (v && (c = v.getElementById(s)) && et(t, c) && c.id === s) return r.push(c), r } else { if (p[2]) return k.apply(r, t.getElementsByTagName(n)), r; if ((s = p[3]) && f.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(s)), r }
                if (f.qsa && !lt[n + " "] && (!o || !o.test(n)) && (1 !== a || "object" !== t.nodeName.toLowerCase())) {
                    if (d = n, v = t, 1 === a && (er.test(n) || yi.test(n))) {
                        for ((v = ti.test(n) && ri(t.parentNode) || t) === t && f.scope || ((l = t.getAttribute("id")) ? l = l.replace(pi, wi) : t.setAttribute("id", l = e)), y = (w = ft(n)).length; y--;) w[y] = (l ? "#" + l : ":scope") + " " + pt(w[y]);
                        d = w.join(",")
                    }
                    try { return k.apply(r, v.querySelectorAll(d)), r } catch (t) { lt(n, !0) } finally { l === e && t.removeAttribute("id") }
                }
            }
            return si(n.replace(at, "$1"), t, r, u)
        }

        function yt() { var n = []; return function i(r, u) { return n.push(r + " ") > t.cacheLength && delete i[n.shift()], i[r + " "] = u } }

        function l(n) { return n[e] = !0, n }

        function a(n) {
            var t = i.createElement("fieldset");
            try { return !!n(t) } catch (n) { return !1 } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ii(n, i) { for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i }

        function ki(n, t) {
            var i = t && n,
                r = i && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function yr(n) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === n } }

        function pr(n) { return function(t) { var i = t.nodeName.toLowerCase(); return ("input" === i || "button" === i) && t.type === n } }

        function di(n) { return function(t) { return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && vr(t) === n : t.disabled === n : "label" in t && t.disabled === n } }

        function it(n) { return l(function(t) { return t = +t, l(function(i, r) { for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u])) }) }) }

        function ri(n) { return n && "undefined" != typeof n.getElementsByTagName && n }

        function gi() {}

        function pt(n) { for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value; return i }

        function wt(n, t, i) {
            var r = t.dir,
                u = t.next,
                f = u || r,
                o = i && "parentNode" === f,
                s = nr++;
            return t.first ? function(t, i, u) {
                while (t = t[r])
                    if (1 === t.nodeType || o) return n(t, i, u);
                return !1
            } : function(t, i, h) {
                var c, l, a, y = [v, s];
                if (h) {
                    while (t = t[r])
                        if ((1 === t.nodeType || o) && n(t, i, h)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            if (l = (a = t[e] || (t[e] = {}))[t.uniqueID] || (a[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[r] || t;
                            else { if ((c = l[f]) && c[0] === v && c[1] === s) return y[2] = c[2]; if ((l[f] = y)[2] = n(t, i, h)) return !0 } return !1
            }
        }

        function ui(n) {
            return 1 < n.length ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function bt(n, t, i, r, u) { for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)(e = n[f]) && (i && !i(e, r, u) || (o.push(e), h && t.push(f))); return o }

        function fi(n, t, i, r, f, o) {
            return r && !r[e] && (r = fi(r)), f && !f[e] && (f = fi(f, o)), l(function(e, o, s, h) {
                var a, l, v, w = [],
                    p = [],
                    b = o.length,
                    d = e || function(n, t, i) { for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i); return i }(t || "*", s.nodeType ? [s] : s, []),
                    y = !n || !e && t ? d : bt(d, w, n, s, h),
                    c = i ? f || (e ? n : b || r) ? [] : o : y;
                if (i && i(y, c, s, h), r)
                    for (a = bt(c, p), r(a, [], s, h), l = a.length; l--;)(v = a[l]) && (c[p[l]] = !(y[p[l]] = v));
                if (e) {
                    if (f || n) {
                        if (f) {
                            for (a = [], l = c.length; l--;)(v = c[l]) && a.push(y[l] = v);
                            f(null, c = [], a, h)
                        }
                        for (l = c.length; l--;)(v = c[l]) && -1 < (a = f ? nt(e, v) : w[l]) && (e[a] = !(o[a] = v))
                    }
                } else c = bt(c === o ? c.splice(b, c.length) : c), f ? f(null, o, c, h) : k.apply(o, c)
            })
        }

        function ei(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = wt(function(n) { return n === o }, c, !0), a = wt(function(n) { return -1 < nt(o, n) }, c, !0), f = [function(n, t, i) { var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i)); return o = null, r }]; i < s; i++)
                if (u = t.relative[n[i].type]) f = [wt(ui(f), u)];
                else {
                    if ((u = t.filter[n[i].type].apply(null, n[i].matches))[e]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type]) break;
                        return fi(1 < i && ui(f), 1 < i && pt(n.slice(0, i - 1).concat({ value: " " === n[i - 2].type ? "*" : "" })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && pt(n))
                    }
                    f.push(u)
                }
            return ui(f)
        }
        var rt, f, t, st, oi, ft, kt, si, ht, w, ut, b, i, s, h, o, d, ct, et, e = "sizzle" + 1 * new Date,
            c = n.document,
            v = 0,
            nr = 0,
            hi = yt(),
            ci = yt(),
            li = yt(),
            lt = yt(),
            dt = function(n, t) { return n === t && (ut = !0), 0 },
            tr = {}.hasOwnProperty,
            g = [],
            ir = g.pop,
            rr = g.push,
            k = g.push,
            ai = g.slice,
            nt = function(n, t) {
                for (var i = 0, r = n.length; i < r; i++)
                    if (n[i] === t) return i;
                return -1
            },
            gt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            r = "[\\x20\\t\\r\\n\\f]",
            tt = "(?:\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            vi = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
            ni = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + vi + ")*)|.*)\\)|)",
            ur = new RegExp(r + "+", "g"),
            at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
            fr = new RegExp("^" + r + "*," + r + "*"),
            yi = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
            er = new RegExp(r + "|>"),
            or = new RegExp(ni),
            sr = new RegExp("^" + tt + "$"),
            vt = { ID: new RegExp("^#(" + tt + ")"), CLASS: new RegExp("^\\.(" + tt + ")"), TAG: new RegExp("^(" + tt + "|[*])"), ATTR: new RegExp("^" + vi), PSEUDO: new RegExp("^" + ni), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"), bool: new RegExp("^(?:" + gt + ")$", "i"), needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i") },
            hr = /HTML$/i,
            cr = /^(?:input|select|textarea|button)$/i,
            lr = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            ar = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ti = /[+~]/,
            y = new RegExp("\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\([^\\r\\n\\f])", "g"),
            p = function(n, t) { var i = "0x" + n.slice(1) - 65536; return t || (i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)) },
            pi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            wi = function(n, t) { return t ? "\0" === n ? "ï¿½" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n },
            bi = function() { b() },
            vr = wt(function(n) { return !0 === n.disabled && "fieldset" === n.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" });
        try {
            k.apply(g = ai.call(c.childNodes), c.childNodes);
            g[c.childNodes.length].nodeType
        } catch (rt) {
            k = {
                apply: g.length ? function(n, t) { rr.apply(n, ai.call(t)) } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        for (rt in f = u.support = {}, oi = u.isXML = function(n) {
                var i = n.namespaceURI,
                    t = (n.ownerDocument || n).documentElement;
                return !hr.test(i || t && t.nodeName || "HTML")
            }, b = u.setDocument = function(n) {
                var v, u, l = n ? n.ownerDocument || n : c;
                return l != i && 9 === l.nodeType && l.documentElement && (s = (i = l).documentElement, h = !oi(i), c != i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", bi, !1) : u.attachEvent && u.attachEvent("onunload", bi)), f.scope = a(function(n) { return s.appendChild(n).appendChild(i.createElement("div")), "undefined" != typeof n.querySelectorAll && !n.querySelectorAll(":scope fieldset div").length }), f.attributes = a(function(n) { return n.className = "i", !n.getAttribute("className") }), f.getElementsByTagName = a(function(n) { return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length }), f.getElementsByClassName = ot.test(i.getElementsByClassName), f.getById = a(function(n) { return s.appendChild(n).id = e, !i.getElementsByName || !i.getElementsByName(e).length }), f.getById ? (t.filter.ID = function(n) { var t = n.replace(y, p); return function(n) { return n.getAttribute("id") === t } }, t.find.ID = function(n, t) { if ("undefined" != typeof t.getElementById && h) { var i = t.getElementById(n); return i ? [i] : [] } }) : (t.filter.ID = function(n) { var t = n.replace(y, p); return function(n) { var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id"); return i && i.value === t } }, t.find.ID = function(n, t) {
                    if ("undefined" != typeof t.getElementById && h) {
                        var r, u, f, i = t.getElementById(n);
                        if (i) {
                            if ((r = i.getAttributeNode("id")) && r.value === n) return [i];
                            for (f = t.getElementsByName(n), u = 0; i = f[u++];)
                                if ((r = i.getAttributeNode("id")) && r.value === n) return [i]
                        }
                        return []
                    }
                }), t.find.TAG = f.getElementsByTagName ? function(n, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : f.qsa ? t.querySelectorAll(n) : void 0 } : function(n, t) {
                    var i, r = [],
                        f = 0,
                        u = t.getElementsByTagName(n);
                    if ("*" === n) { while (i = u[f++]) 1 === i.nodeType && r.push(i); return r }
                    return u
                }, t.find.CLASS = f.getElementsByClassName && function(n, t) { if ("undefined" != typeof t.getElementsByClassName && h) return t.getElementsByClassName(n) }, d = [], o = [], (f.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                    var t;
                    s.appendChild(n).innerHTML = "<a id='" + e + "'><\/a><select id='" + e + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                    n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                    n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + gt + ")");
                    n.querySelectorAll("[id~=" + e + "-]").length || o.push("~=");
                    (t = i.createElement("input")).setAttribute("name", "");
                    n.appendChild(t);
                    n.querySelectorAll("[name='']").length || o.push("\\[" + r + "*name" + r + "*=" + r + "*(?:''|\"\")");
                    n.querySelectorAll(":checked").length || o.push(":checked");
                    n.querySelectorAll("a#" + e + "+*").length || o.push(".#.+[+~]");
                    n.querySelectorAll("\\\f");
                    o.push("[\\r\\n\\f]")
                }), a(function(n) {
                    n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden");
                    n.appendChild(t).setAttribute("name", "D");
                    n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                    2 !== n.querySelectorAll(":enabled").length && o.push(":enabled", ":disabled");
                    s.appendChild(n).disabled = !0;
                    2 !== n.querySelectorAll(":disabled").length && o.push(":enabled", ":disabled");
                    n.querySelectorAll("*,:x");
                    o.push(",.*:")
                })), (f.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                    f.disconnectedMatch = ct.call(n, "*");
                    ct.call(n, "[s!='']:x");
                    d.push("!=", ni)
                }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) {
                    var r = 9 === n.nodeType ? n.documentElement : n,
                        i = t && t.parentNode;
                    return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
                } : function(n, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === n) return !0;
                    return !1
                }, dt = v ? function(n, t) { if (n === t) return ut = !0, 0; var r = !n.compareDocumentPosition - !t.compareDocumentPosition; return r || (1 & (r = (n.ownerDocument || n) == (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(n) === r ? n == i || n.ownerDocument == c && et(c, n) ? -1 : t == i || t.ownerDocument == c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1) } : function(n, t) {
                    if (n === t) return ut = !0, 0;
                    var r, u = 0,
                        o = n.parentNode,
                        s = t.parentNode,
                        f = [n],
                        e = [t];
                    if (!o || !s) return n == i ? -1 : t == i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                    if (o === s) return ki(n, t);
                    for (r = n; r = r.parentNode;) f.unshift(r);
                    for (r = t; r = r.parentNode;) e.unshift(r);
                    while (f[u] === e[u]) u++;
                    return u ? ki(f[u], e[u]) : f[u] == c ? -1 : e[u] == c ? 1 : 0
                }), i
            }, u.matches = function(n, t) { return u(n, null, null, t) }, u.matchesSelector = function(n, t) {
                if (b(n), f.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try { var r = ct.call(n, t); if (r || f.disconnectedMatch || n.document && 11 !== n.document.nodeType) return r } catch (n) { lt(t, !0) }
                return 0 < u(t, i, null, [n]).length
            }, u.contains = function(n, t) { return (n.ownerDocument || n) != i && b(n), et(n, t) }, u.attr = function(n, r) {
                (n.ownerDocument || n) != i && b(n);
                var e = t.attrHandle[r.toLowerCase()],
                    u = e && tr.call(t.attrHandle, r.toLowerCase()) ? e(n, r, !h) : void 0;
                return void 0 !== u ? u : f.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
            }, u.escape = function(n) { return (n + "").replace(pi, wi) }, u.error = function(n) { throw new Error("Syntax error, unrecognized expression: " + n); }, u.uniqueSort = function(n) {
                var r, u = [],
                    t = 0,
                    i = 0;
                if (ut = !f.detectDuplicates, w = !f.sortStable && n.slice(0), n.sort(dt), ut) { while (r = n[i++]) r === n[i] && (t = u.push(i)); while (t--) n.splice(u[t], 1) }
                return w = null, n
            }, st = u.getText = function(n) {
                var r, i = "",
                    u = 0,
                    t = n.nodeType;
                if (t) { if (1 === t || 9 === t || 11 === t) { if ("string" == typeof n.textContent) return n.textContent; for (n = n.firstChild; n; n = n.nextSibling) i += st(n) } else if (3 === t || 4 === t) return n.nodeValue } else
                    while (r = n[u++]) i += st(r);
                return i
            }, (t = u.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: vt,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(n) { return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4) }, CHILD: function(n) { return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n }, PSEUDO: function(n) { var i, t = !n[6] && n[2]; return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && or.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3)) } },
                filter: {
                    TAG: function(n) { var t = n.replace(y, p).toLowerCase(); return "*" === n ? function() { return !0 } : function(n) { return n.nodeName && n.nodeName.toLowerCase() === t } },
                    CLASS: function(n) { var t = hi[n + " "]; return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) { return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "") }) },
                    ATTR: function(n, t, i) { return function(r) { var f = u.attr(r, n); return null == f ? "!=" === t : !t || (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && -1 < f.indexOf(i) : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? -1 < (" " + f.replace(ur, " ") + " ").indexOf(i) : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-")) } },
                    CHILD: function(n, t, i, r, u) {
                        var s = "nth" !== n.slice(0, 3),
                            o = "last" !== n.slice(-4),
                            f = "of-type" === t;
                        return 1 === r && 0 === u ? function(n) { return !!n.parentNode } : function(t, i, h) {
                            var p, d, y, c, a, w, b = s !== o ? "nextSibling" : "previousSibling",
                                k = t.parentNode,
                                nt = f && t.nodeName.toLowerCase(),
                                g = !h && !f,
                                l = !1;
                            if (k) {
                                if (s) {
                                    while (b) {
                                        for (c = t; c = c[b];)
                                            if (f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) return !1;
                                        w = b = "only" === n && !w && "nextSibling"
                                    }
                                    return !0
                                }
                                if (w = [o ? k.firstChild : k.lastChild], o && g) {
                                    for (l = (a = (p = (d = (y = (c = k)[e] || (c[e] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]) && p[2], c = a && k.childNodes[a]; c = ++a && c && c[b] || (l = a = 0) || w.pop();)
                                        if (1 === c.nodeType && ++l && c === t) { d[n] = [v, a, l]; break }
                                } else if (g && (l = a = (p = (d = (y = (c = t)[e] || (c[e] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]), !1 === l)
                                    while (c = ++a && c && c[b] || (l = a = 0) || w.pop())
                                        if ((f ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && ((d = (y = c[e] || (c[e] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] = [v, l]), c === t)) break;
                                return (l -= u) === r || l % r == 0 && 0 <= l / r
                            }
                        }
                    },
                    PSEUDO: function(n, i) { var f, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n); return r[e] ? r(i) : 1 < r.length ? (f = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) { for (var e, u = r(n, i), f = u.length; f--;) n[e = nt(n, u[f])] = !(t[e] = u[f]) }) : function(n) { return r(n, 0, f) }) : r }
                },
                pseudos: {
                    not: l(function(n) {
                        var t = [],
                            r = [],
                            i = kt(n.replace(at, "$1"));
                        return i[e] ? l(function(n, t, r, u) { for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e)) }) : function(n, u, f) { return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop() }
                    }),
                    has: l(function(n) { return function(t) { return 0 < u(n, t).length } }),
                    contains: l(function(n) {
                        return n = n.replace(y, p),
                            function(t) { return -1 < (t.textContent || st(t)).indexOf(n) }
                    }),
                    lang: l(function(n) {
                        return sr.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                            function(t) {
                                var i;
                                do
                                    if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) { var i = n.location && n.location.hash; return i && i.slice(1) === t.id },
                    root: function(n) { return n === s },
                    focus: function(n) { return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex) },
                    enabled: di(!1),
                    disabled: di(!0),
                    checked: function(n) { var t = n.nodeName.toLowerCase(); return "input" === t && !!n.checked || "option" === t && !!n.selected },
                    selected: function(n) { return n.parentNode && n.parentNode.selectedIndex, !0 === n.selected },
                    empty: function(n) {
                        for (n = n.firstChild; n; n = n.nextSibling)
                            if (n.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(n) { return !t.pseudos.empty(n) },
                    header: function(n) { return lr.test(n.nodeName) },
                    input: function(n) { return cr.test(n.nodeName) },
                    button: function(n) { var t = n.nodeName.toLowerCase(); return "input" === t && "button" === n.type || "button" === t },
                    text: function(n) { var t; return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase()) },
                    first: it(function() { return [0] }),
                    last: it(function(n, t) { return [t - 1] }),
                    eq: it(function(n, t, i) { return [i < 0 ? i + t : i] }),
                    even: it(function(n, t) { for (var i = 0; i < t; i += 2) n.push(i); return n }),
                    odd: it(function(n, t) { for (var i = 1; i < t; i += 2) n.push(i); return n }),
                    lt: it(function(n, t, i) { for (var r = i < 0 ? i + t : t < i ? t : i; 0 <= --r;) n.push(r); return n }),
                    gt: it(function(n, t, i) { for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r); return n })
                }
            }).pseudos.nth = t.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) t.pseudos[rt] = yr(rt);
        for (rt in { submit: !0, reset: !0 }) t.pseudos[rt] = pr(rt);
        return gi.prototype = t.filters = t.pseudos, t.setFilters = new gi, ft = u.tokenize = function(n, i) { var e, f, s, o, r, h, c, l = ci[n + " "]; if (l) return i ? 0 : l.slice(0); for (r = n, h = [], c = t.preFilter; r;) { for (o in e && !(f = fr.exec(r)) || (f && (r = r.slice(f[0].length) || r), h.push(s = [])), e = !1, (f = yi.exec(r)) && (e = f.shift(), s.push({ value: e, type: f[0].replace(at, " ") }), r = r.slice(e.length)), t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({ value: e, type: o, matches: f }), r = r.slice(e.length)); if (!e) break } return i ? r.length : r ? u.error(n) : ci(n, h).slice(0) }, kt = u.compile = function(n, r) {
            var s, c, a, o, y, p, w = [],
                d = [],
                f = li[n + " "];
            if (!f) {
                for (r || (r = ft(n)), s = r.length; s--;)(f = ei(r[s]))[e] ? w.push(f) : d.push(f);
                (f = li(n, (c = d, o = 0 < (a = w).length, y = 0 < c.length, p = function(n, r, f, e, s) {
                    var l, nt, d, g = 0,
                        p = "0",
                        tt = n && [],
                        w = [],
                        it = ht,
                        rt = n || y && t.find.TAG("*", s),
                        ut = v += null == it ? 1 : Math.random() || .1,
                        ft = rt.length;
                    for (s && (ht = r == i || r || s); p !== ft && null != (l = rt[p]); p++) {
                        if (y && l) {
                            for (nt = 0, r || l.ownerDocument == i || (b(l), f = !h); d = c[nt++];)
                                if (d(l, r || i, f)) { e.push(l); break }
                            s && (v = ut)
                        }
                        o && ((l = !d && l) && g--, n && tt.push(l))
                    }
                    if (g += p, o && p !== g) {
                        for (nt = 0; d = a[nt++];) d(tt, w, r, f);
                        if (n) {
                            if (0 < g)
                                while (p--) tt[p] || w[p] || (w[p] = ir.call(e));
                            w = bt(w)
                        }
                        k.apply(e, w);
                        s && !n && 0 < w.length && 1 < g + a.length && u.uniqueSort(e)
                    }
                    return s && (v = ut, ht = it), tt
                }, o ? l(p) : p))).selector = n
            }
            return f
        }, si = u.select = function(n, i, r, u) {
            var o, f, e, l, a, c = "function" == typeof n && n,
                s = !u && ft(n = c.selector || n);
            if (r = r || [], 1 === s.length) {
                if (2 < (f = s[0] = s[0].slice(0)).length && "ID" === (e = f[0]).type && 9 === i.nodeType && h && t.relative[f[1].type]) {
                    if (!(i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0])) return r;
                    c && (i = i.parentNode);
                    n = n.slice(f.shift().value.length)
                }
                for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) { if (e = f[o], t.relative[l = e.type]) break; if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ti.test(f[0].type) && ri(i.parentNode) || i))) { if (f.splice(o, 1), !(n = u.length && pt(f))) return k.apply(r, u), r; break } }
            }
            return (c || kt(n, s))(u, i, !h, r, !i || ti.test(n) && ri(i.parentNode) || i), r
        }, f.sortStable = e.split("").sort(dt).join("") === e, f.detectDuplicates = !!ut, b(), f.sortDetached = a(function(n) { return 1 & n.compareDocumentPosition(i.createElement("fieldset")) }), a(function(n) { return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href") }) || ii("type|href|height|width", function(n, t, i) { if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), f.attributes && a(function(n) { return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value") }) || ii("value", function(n, t, i) { if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue }), a(function(n) { return null == n.getAttribute("disabled") }) || ii(gt, function(n, t, i) { var r; if (!i) return !0 === n[t] ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null }), u
    }(n);
    i.find = d;
    i.expr = d.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = d.uniqueSort;
    i.text = d.getText;
    i.isXMLDoc = d.isXML;
    i.contains = d.contains;
    i.escapeSelector = d.escape;
    var ft = function(n, t, r) {
            for (var u = [], f = void 0 !== r;
                (n = n[t]) && 9 !== n.nodeType;)
                if (1 === n.nodeType) {
                    if (f && i(n).is(r)) break;
                    u.push(n)
                }
            return u
        },
        dr = function(n, t) { for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n); return i },
        gr = i.expr.match.needsContext;
    wi = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    i.filter = function(n, t, r) { var u = t[0]; return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) { return 1 === n.nodeType })) };
    i.fn.extend({
        find: function(n) {
            var t, r, u = this.length,
                f = this;
            if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(f[t], this)) return !0
            }));
            for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
            return 1 < u ? i.uniqueSort(r) : r
        },
        filter: function(n) { return this.pushStack(bi(this, n || [], !1)) },
        not: function(n) { return this.pushStack(bi(this, n || [], !0)) },
        is: function(n) { return !!bi(this, "string" == typeof n && gr.test(n) ? i(n) : n || [], !1).length }
    });
    tu = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (i.fn.init = function(n, t, r) {
        var e, o;
        if (!n) return this;
        if (r = r || nu, "string" == typeof n) {
            if (!(e = "<" === n[0] && ">" === n[n.length - 1] && 3 <= n.length ? [null, n, null] : tu.exec(n)) || !e[1] && t) return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
            if (e[1]) {
                if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0)), wi.test(e[1]) && i.isPlainObject(t))
                    for (e in t) u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
                return this
            }
            return (o = f.getElementById(e[2])) && (this[0] = o, this.length = 1), this
        }
        return n.nodeType ? (this[0] = n, this.length = 1, this) : u(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this)
    }).prototype = i.fn;
    nu = i(f);
    iu = /^(?:parents|prev(?:Until|All))/;
    ru = { children: !0, contents: !0, next: !0, prev: !0 };
    i.fn.extend({
        has: function(n) {
            var t = i(n, this),
                r = t.length;
            return this.filter(function() {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n])) return !0
            })
        },
        closest: function(n, t) {
            var r, f = 0,
                o = this.length,
                u = [],
                e = "string" != typeof n && i(n);
            if (!gr.test(n))
                for (; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? -1 < e.index(r) : 1 === r.nodeType && i.find.matchesSelector(r, n))) { u.push(r); break }
            return this.pushStack(1 < u.length ? i.uniqueSort(u) : u)
        },
        index: function(n) { return n ? "string" == typeof n ? ii.call(i(n), this[0]) : ii.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(n, t) { return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t)))) },
        addBack: function(n) { return this.add(null == n ? this.prevObject : this.prevObject.filter(n)) }
    });
    i.each({ parent: function(n) { var t = n.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(n) { return ft(n, "parentNode") }, parentsUntil: function(n, t, i) { return ft(n, "parentNode", i) }, next: function(n) { return uu(n, "nextSibling") }, prev: function(n) { return uu(n, "previousSibling") }, nextAll: function(n) { return ft(n, "nextSibling") }, prevAll: function(n) { return ft(n, "previousSibling") }, nextUntil: function(n, t, i) { return ft(n, "nextSibling", i) }, prevUntil: function(n, t, i) { return ft(n, "previousSibling", i) }, siblings: function(n) { return dr((n.parentNode || {}).firstChild, n) }, children: function(n) { return dr(n.firstChild) }, contents: function(n) { return null != n.contentDocument && vr(n.contentDocument) ? n.contentDocument : (c(n, "template") && (n = n.content || n), i.merge([], n.childNodes)) } }, function(n, t) { i.fn[n] = function(r, u) { var f = i.map(this, t, r); return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), 1 < this.length && (ru[n] || i.uniqueSort(f), iu.test(n) && f.reverse()), this.pushStack(f) } });
    l = /[^\x20\t\r\n\f]+/g;
    i.Callbacks = function(n) {
        var a, h;
        n = "string" == typeof n ? (a = n, h = {}, i.each(a.match(l) || [], function(n, t) { h[t] = !0 }), h) : i.extend({}, n);
        var o, r, v, f, t = [],
            s = [],
            e = -1,
            y = function() {
                for (f = f || n.once, v = o = !0; s.length; e = -1)
                    for (r = s.shift(); ++e < t.length;) !1 === t[e].apply(r[0], r[1]) && n.stopOnFalse && (e = t.length, r = !1);
                n.memory || (r = !1);
                o = !1;
                f && (t = r ? [] : "")
            },
            c = { add: function() { return t && (r && !o && (e = t.length - 1, s.push(r)), function f(r) { i.each(r, function(i, r) { u(r) ? n.unique && c.has(r) || t.push(r) : r && r.length && "string" !== ut(r) && f(r) }) }(arguments), r && !o && y()), this }, remove: function() { return i.each(arguments, function(n, r) { for (var u; - 1 < (u = i.inArray(r, t, u));) t.splice(u, 1), u <= e && e-- }), this }, has: function(n) { return n ? -1 < i.inArray(n, t) : 0 < t.length }, empty: function() { return t && (t = []), this }, disable: function() { return f = s = [], t = r = "", this }, disabled: function() { return !t }, lock: function() { return f = s = [], r || o || (t = r = ""), this }, locked: function() { return !!f }, fireWith: function(n, t) { return f || (t = [n, (t = t || []).slice ? t.slice() : t], s.push(t), o || y()), this }, fire: function() { return c.fireWith(this, arguments), this }, fired: function() { return !!v } };
        return c
    };
    i.extend({
        Deferred: function(t) {
            var f = [
                    ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                    ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                e = {
                    state: function() { return o },
                    always: function() { return r.done(arguments).fail(arguments), this },
                    "catch": function(n) { return e.then(null, n) },
                    pipe: function() {
                        var n = arguments;
                        return i.Deferred(function(t) {
                            i.each(f, function(i, f) {
                                var e = u(n[f[4]]) && n[f[4]];
                                r[f[1]](function() {
                                    var n = e && e.apply(this, arguments);
                                    n && u(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    then: function(t, r, e) {
                        function s(t, r, f, e) {
                            return function() {
                                var h = this,
                                    c = arguments,
                                    l = function() {
                                        var n, i;
                                        if (!(t < o)) {
                                            if ((n = f.apply(h, c)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                            i = n && ("object" == typeof n || "function" == typeof n) && n.then;
                                            u(i) ? e ? i.call(n, s(o, r, et, e), s(o, r, fi, e)) : (o++, i.call(n, s(o, r, et, e), s(o, r, fi, e), s(o, r, et, r.notifyWith))) : (f !== et && (h = void 0, c = [n]), (e || r.resolveWith)(h, c))
                                        }
                                    },
                                    a = e ? l : function() {
                                        try { l() } catch (l) {
                                            i.Deferred.exceptionHook && i.Deferred.exceptionHook(l, a.stackTrace);
                                            o <= t + 1 && (f !== fi && (h = void 0, c = [l]), r.rejectWith(h, c))
                                        }
                                    };
                                t ? a() : (i.Deferred.getStackHook && (a.stackTrace = i.Deferred.getStackHook()), n.setTimeout(a))
                            }
                        }
                        var o = 0;
                        return i.Deferred(function(n) {
                            f[0][3].add(s(0, n, u(e) ? e : et, n.notifyWith));
                            f[1][3].add(s(0, n, u(t) ? t : et));
                            f[2][3].add(s(0, n, u(r) ? r : fi))
                        }).promise()
                    },
                    promise: function(n) { return null != n ? i.extend(n, e) : e }
                },
                r = {};
            return i.each(f, function(n, t) {
                var i = t[2],
                    u = t[5];
                e[t[1]] = i.add;
                u && i.add(function() { o = u }, f[3 - n][2].disable, f[3 - n][3].disable, f[0][2].lock, f[0][3].lock);
                i.add(t[3].fire);
                r[t[0]] = function() { return r[t[0] + "With"](this === r ? void 0 : this, arguments), this };
                r[t[0] + "With"] = i.fireWith
            }), e.promise(r), t && t.call(r, r), r
        },
        when: function(n) {
            var e = arguments.length,
                t = e,
                o = Array(t),
                f = k.call(arguments),
                r = i.Deferred(),
                s = function(n) {
                    return function(t) {
                        o[n] = this;
                        f[n] = 1 < arguments.length ? k.call(arguments) : t;
                        --e || r.resolveWith(o, f)
                    }
                };
            if (e <= 1 && (fu(n, r.done(s(t)).resolve, r.reject, !e), "pending" === r.state() || u(f[t] && f[t].then))) return r.then();
            while (t--) fu(f[t], s(t), r.reject);
            return r.promise()
        }
    });
    eu = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(t, i) { n.console && n.console.warn && t && eu.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i) };
    i.readyException = function(t) { n.setTimeout(function() { throw t; }) };
    ei = i.Deferred();
    i.fn.ready = function(n) { return ei.then(n)["catch"](function(n) { i.readyException(n) }), this };
    i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(n) {
            (!0 === n ? --i.readyWait : i.isReady) || (i.isReady = !0) !== n && 0 < --i.readyWait || ei.resolveWith(f, [i])
        }
    });
    i.ready.then = ei.then;
    "complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll ? n.setTimeout(i.ready) : (f.addEventListener("DOMContentLoaded", oi), n.addEventListener("load", oi));
    var w = function(n, t, r, f, e, o, s) {
            var h = 0,
                l = n.length,
                c = null == r;
            if ("object" === ut(r))
                for (h in e = !0, r) w(n, t, h, r[h], !0, o, s);
            else if (void 0 !== f && (e = !0, u(f) || (s = !0), c && (s ? (t.call(n, f), t = null) : (c = t, t = function(n, t, r) { return c.call(i(n), r) })), t))
                for (; h < l; h++) t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r)));
            return e ? n : c ? t.call(n) : l ? t(n[0], r) : o
        },
        se = /^-ms-/,
        he = /-([a-z])/g;
    ot = function(n) { return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType };
    bt.uid = 1;
    bt.prototype = {
        cache: function(n) { var t = n[this.expando]; return t || (t = {}, ot(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, { value: t, configurable: !0 }))), t },
        set: function(n, t, i) {
            var r, u = this.cache(n);
            if ("string" == typeof t) u[y(t)] = i;
            else
                for (r in t) u[y(r)] = t[r];
            return u
        },
        get: function(n, t) { return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][y(t)] },
        access: function(n, t, i) { return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i), void 0 !== i ? i : t) },
        remove: function(n, t) {
            var u, r = n[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t)
                    for (u = (t = Array.isArray(t) ? t.map(y) : (t = y(t)) in r ? [t] : t.match(l) || []).length; u--;) delete r[t[u]];
                (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
            }
        },
        hasData: function(n) { var t = n[this.expando]; return void 0 !== t && !i.isEmptyObject(t) }
    };
    var r = new bt,
        o = new bt,
        le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ae = /[A-Z]/g;
    i.extend({ hasData: function(n) { return o.hasData(n) || r.hasData(n) }, data: function(n, t, i) { return o.access(n, t, i) }, removeData: function(n, t) { o.remove(n, t) }, _data: function(n, t, i) { return r.access(n, t, i) }, _removeData: function(n, t) { r.remove(n, t) } });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, i = this[0],
                s = i && i.attributes;
            if (void 0 === n) {
                if (this.length && (e = o.get(i), 1 === i.nodeType && !r.get(i, "hasDataAttrs"))) {
                    for (f = s.length; f--;) s[f] && 0 === (u = s[f].name).indexOf("data-") && (u = y(u.slice(5)), ou(i, u, e[u]));
                    r.set(i, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof n ? this.each(function() { o.set(this, n) }) : w(this, function(t) {
                var r;
                if (i && void 0 === t) return void 0 !== (r = o.get(i, n)) ? r : void 0 !== (r = ou(i, n)) ? r : void 0;
                this.each(function() { o.set(this, n, t) })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(n) { return this.each(function() { o.remove(this, n) }) }
    });
    i.extend({
        queue: function(n, t, u) { var f; if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || [] },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t);
            "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, function() { i.dequeue(n, t) }, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) { var u = t + "queueHooks"; return r.get(n, u) || r.access(n, u, { empty: i.Callbacks("once memory").add(function() { r.remove(n, [t + "queue", u]) }) }) }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) { return this.each(function() { i.dequeue(this, n) }) },
        clearQueue: function(n) { return this.queue(n || "fx", []) },
        promise: function(n, t) {
            var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function() {--e || o.resolveWith(f, [f]) };
            for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;)(u = r.get(f[s], n + "queueHooks")) && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(t)
        }
    });
    var su = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        kt = new RegExp("^(?:([+-])=|)(" + su + ")([a-z%]*)$", "i"),
        b = ["Top", "Right", "Bottom", "Left"],
        g = f.documentElement,
        st = function(n) { return i.contains(n.ownerDocument, n) },
        ve = { composed: !0 };
    g.getRootNode && (st = function(n) { return i.contains(n.ownerDocument, n) || n.getRootNode(ve) === n.ownerDocument });
    dt = function(n, t) { return "none" === (n = t || n).style.display || "" === n.style.display && st(n) && "none" === i.css(n, "display") };
    ki = {};
    i.fn.extend({ show: function() { return ht(this, !0) }, hide: function() { return ht(this) }, toggle: function(n) { return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() { dt(this) ? i(this).show() : i(this).hide() }) } });
    var nt, si, gt = /^(?:checkbox|radio)$/i,
        cu = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        lu = /^$|^module$|\/(?:java|ecma)script/i;
    nt = f.createDocumentFragment().appendChild(f.createElement("div"));
    (si = f.createElement("input")).setAttribute("type", "radio");
    si.setAttribute("checked", "checked");
    si.setAttribute("name", "t");
    nt.appendChild(si);
    e.checkClone = nt.cloneNode(!0).cloneNode(!0).lastChild.checked;
    nt.innerHTML = "<textarea>x<\/textarea>";
    e.noCloneChecked = !!nt.cloneNode(!0).lastChild.defaultValue;
    nt.innerHTML = "<option><\/option>";
    e.option = !!nt.lastChild;
    h = { thead: [1, "<table>", "<\/table>"], col: [2, "<table><colgroup>", "<\/colgroup><\/table>"], tr: [2, "<table><tbody>", "<\/tbody><\/table>"], td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"], _default: [0, "", ""] };
    h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
    h.th = h.td;
    e.option || (h.optgroup = h.option = [1, "<select multiple='multiple'>", "<\/select>"]);
    au = /<|&#?\w+;/;
    var ye = /^key/,
        pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        yu = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var p, a, k, v, w, h, s, c, o, b, d, y = r.get(n);
            if (ot(n))
                for (u.handler && (u = (p = u).handler, e = p.selector), e && i.find.matchesSelector(g, e), u.guid || (u.guid = i.guid++), (v = y.events) || (v = y.events = Object.create(null)), (a = y.handle) || (a = y.handle = function(t) { if ("undefined" != typeof i && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments) }), w = (t = (t || "").match(l) || [""]).length; w--;) o = d = (k = yu.exec(t[w]) || [])[1], b = (k[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i.extend({ type: o, origType: d, data: f, handler: u, guid: u.guid, selector: e, needsContext: e && i.expr.match.needsContext.test(e), namespace: b.join(".") }, p), (c = v[o]) || ((c = v[o] = []).delegateCount = 0, s.setup && !1 !== s.setup.call(n, f, b, a) || n.addEventListener && n.addEventListener(o, a)), s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, h) : c.push(h), i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var y, k, c, v, p, s, h, a, o, b, d, w = r.hasData(n) && r.get(n);
            if (w && (v = w.events)) {
                for (p = (t = (t || "").match(l) || [""]).length; p--;)
                    if (o = d = (c = yu.exec(t[p]) || [])[1], b = (c[2] || "").split(".").sort(), o) {
                        for (h = i.event.special[o] || {}, a = v[o = (f ? h.delegateType : h.bindType) || o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--;) s = a[y], !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(y, 1), s.selector && a.delegateCount--, h.remove && h.remove.call(n, s));
                        k && !a.length && (h.teardown && !1 !== h.teardown.call(n, b, w.handle) || i.removeEvent(n, o, w.handle), delete v[o])
                    } else
                        for (o in v) i.event.remove(n, o + t[p], u, f, !0);
                i.isEmptyObject(v) && r.remove(n, "handle events")
            }
        },
        dispatch: function(n) {
            var u, h, c, e, f, l, s = new Array(arguments.length),
                t = i.event.fix(n),
                a = (r.get(this, "events") || Object.create(null))[t.type] || [],
                o = i.event.special[t.type] || {};
            for (s[0] = t, u = 1; u < arguments.length; u++) s[u] = arguments[u];
            if (t.delegateTarget = this, !o.preDispatch || !1 !== o.preDispatch.call(this, t)) {
                for (l = i.event.handlers.call(this, t, a), u = 0;
                    (e = l[u++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = e.elem, h = 0;
                        (f = e.handlers[h++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !1 !== f.namespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f, t.data = f.data, void 0 !== (c = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, s)) && !1 === (t.result = c) && (t.preventDefault(), t.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(n, t) {
            var f, h, u, e, o, c = [],
                s = t.delegateCount,
                r = n.target;
            if (s && r.nodeType && !("click" === n.type && 1 <= n.button))
                for (; r !== this; r = r.parentNode || this)
                    if (1 === r.nodeType && ("click" !== n.type || !0 !== r.disabled)) {
                        for (e = [], o = {}, f = 0; f < s; f++) void 0 === o[u = (h = t[f]).selector + " "] && (o[u] = h.needsContext ? -1 < i(u, this).index(r) : i.find(u, this, null, [r]).length), o[u] && e.push(h);
                        e.length && c.push({ elem: r, handlers: e })
                    }
            return r = this, s < t.length && c.push({ elem: r, handlers: t.slice(s) }), c
        },
        addProp: function(n, t) { Object.defineProperty(i.Event.prototype, n, { enumerable: !0, configurable: !0, get: u(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[n] }, set: function(t) { Object.defineProperty(this, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) },
        fix: function(n) { return n[i.expando] ? n : new i.Event(n) },
        special: { load: { noBubble: !0 }, click: { setup: function(n) { var t = this || n; return gt.test(t.type) && t.click && c(t, "input") && hi(t, "click", ct), !1 }, trigger: function(n) { var t = this || n; return gt.test(t.type) && t.click && c(t, "input") && hi(t, "click"), !0 }, _default: function(n) { var t = n.target; return gt.test(t.type) && t.click && c(t, "input") && r.get(t, "click") || c(t, "a") } }, beforeunload: { postDispatch: function(n) { void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result) } } }
    };
    i.removeEvent = function(n, t, i) { n.removeEventListener && n.removeEventListener(t, i) };
    i.Event = function(n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && !1 === n.returnValue ? ct : lt, this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || Date.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: lt,
        isPropagationStopped: lt,
        isImmediatePropagationStopped: lt,
        isSimulated: !1,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = ct;
            n && !this.isSimulated && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = ct;
            n && !this.isSimulated && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = ct;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(n) { var t = n.button; return null == n.which && ye.test(n.type) ? null != n.charCode ? n.charCode : n.keyCode : !n.which && void 0 !== t && pe.test(n.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : n.which } }, i.event.addProp);
    i.each({ focus: "focusin", blur: "focusout" }, function(n, t) { i.event.special[n] = { setup: function() { return hi(this, n, we), !1 }, trigger: function() { return hi(this, n), !0 }, delegateType: t } });
    i.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, r = n.relatedTarget,
                    f = n.handleObj;
                return r && (r === this || i.contains(this, r)) || (n.type = f.origType, u = f.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    i.fn.extend({ on: function(n, t, i, r) { return gi(this, n, t, i, r) }, one: function(n, t, i, r) { return gi(this, n, t, i, r, 1) }, off: function(n, t, r) { var u, f; if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this; if ("object" == typeof n) { for (f in n) this.off(f, t, n[f]); return this } return !1 !== t && "function" != typeof t || (r = t, t = void 0), !1 === r && (r = lt), this.each(function() { i.event.remove(this, n, r, t) }) } });
    var be = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        de = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    i.extend({
        htmlPrefilter: function(n) { return n },
        clone: function(n, t, r) {
            var u, c, o, f, l, a, v, h = n.cloneNode(!0),
                y = st(n);
            if (!(e.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (f = s(h), u = 0, c = (o = s(n)).length; u < c; u++) l = o[u], a = f[u], void 0, "input" === (v = a.nodeName.toLowerCase()) && gt.test(l.type) ? a.checked = l.checked : "input" !== v && "textarea" !== v || (a.defaultValue = l.defaultValue);
            if (t)
                if (r)
                    for (o = o || s(n), f = f || s(h), u = 0, c = o.length; u < c; u++) wu(o[u], f[u]);
                else wu(n, h);
            return 0 < (f = s(h, "script")).length && di(f, !y && s(n, "script")), h
        },
        cleanData: function(n) {
            for (var u, t, f, s = i.event.special, e = 0; void 0 !== (t = n[e]); e++)
                if (ot(t)) {
                    if (u = t[r.expando]) {
                        if (u.events)
                            for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = void 0
                    }
                    t[o.expando] && (t[o.expando] = void 0)
                }
        }
    });
    i.fn.extend({
        detach: function(n) { return bu(this, n, !0) },
        remove: function(n) { return bu(this, n) },
        text: function(n) { return w(this, function(n) { return void 0 === n ? i.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n) }) }, null, n, arguments.length) },
        append: function() { return at(this, arguments, function(n) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || pu(this, n).appendChild(n) }) },
        prepend: function() {
            return at(this, arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = pu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() { return at(this, arguments, function(n) { this.parentNode && this.parentNode.insertBefore(n, this) }) },
        after: function() { return at(this, arguments, function(n) { this.parentNode && this.parentNode.insertBefore(n, this.nextSibling) }) },
        empty: function() { for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(s(n, !1)), n.textContent = ""); return this },
        clone: function(n, t) { return n = null != n && n, t = null == t ? n : t, this.map(function() { return i.clone(this, n, t) }) },
        html: function(n) {
            return w(this, function(n) {
                var t = this[0] || {},
                    r = 0,
                    u = this.length;
                if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof n && !be.test(n) && !h[(cu.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; r < u; r++) 1 === (t = this[r] || {}).nodeType && (i.cleanData(s(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (n) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return at(this, arguments, function(t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(s(this)), r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(n, t) { i.fn[n] = function(n) { for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), yi.apply(f, u.get()); return this.pushStack(f) } });
    var nr = new RegExp("^(" + su + ")(?!px)[a-z%]+$", "i"),
        ci = function(t) { var i = t.ownerDocument.defaultView; return i && i.opener || (i = n), i.getComputedStyle(t) },
        ku = function(n, t, i) { var u, r, f = {}; for (r in t) f[r] = n.style[r], n.style[r] = t[r]; for (r in u = i.call(n), t) n.style[r] = f[r]; return u },
        to = new RegExp(b.join("|"), "i");
    ! function() {
        function r() {
            if (t) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                g.appendChild(s).appendChild(t);
                var i = n.getComputedStyle(t);
                h = "1%" !== i.top;
                v = 12 === u(i.marginLeft);
                t.style.right = "60%";
                a = 36 === u(i.right);
                c = 36 === u(i.width);
                t.style.position = "absolute";
                l = 12 === u(t.offsetWidth / 3);
                g.removeChild(s);
                t = null
            }
        }

        function u(n) { return Math.round(parseFloat(n)) }
        var h, c, l, a, o, v, s = f.createElement("div"),
            t = f.createElement("div");
        t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === t.style.backgroundClip, i.extend(e, { boxSizingReliable: function() { return r(), c }, pixelBoxStyles: function() { return r(), a }, pixelPosition: function() { return r(), h }, reliableMarginLeft: function() { return r(), v }, scrollboxSize: function() { return r(), l }, reliableTrDimensions: function() { var t, i, r, u; return null == o && (t = f.createElement("table"), i = f.createElement("tr"), r = f.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", i.style.height = "1px", r.style.height = "9px", g.appendChild(t).appendChild(i).appendChild(r), u = n.getComputedStyle(i), o = 3 < parseInt(u.height), g.removeChild(t)), o } }))
    }();
    var gu = ["Webkit", "Moz", "ms"],
        nf = f.createElement("div").style,
        tf = {};
    var io = /^(none|table(?!-c[ea]).+)/,
        rf = /^--/,
        ro = { position: "absolute", visibility: "hidden", display: "block" },
        uf = { letterSpacing: "0", fontWeight: "400" };
    i.extend({
        cssHooks: { opacity: { get: function(n, t) { if (t) { var i = ni(n, "opacity"); return "" === i ? "1" : i } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function(n, t, r, u) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var f, h, o, c = y(t),
                    l = rf.test(t),
                    s = n.style;
                if (l || (t = tr(c)), o = i.cssHooks[t] || i.cssHooks[c], void 0 === r) return o && "get" in o && void 0 !== (f = o.get(n, !1, u)) ? f : s[t];
                "string" == (h = typeof r) && (f = kt.exec(r)) && f[1] && (r = hu(n, t, f), h = "number");
                null != r && r == r && ("number" !== h || l || (r += f && f[3] || (i.cssNumber[c] ? "" : "px")), e.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (s[t] = "inherit"), o && "set" in o && void 0 === (r = o.set(n, r, u)) || (l ? s.setProperty(t, r) : s[t] = r))
            }
        },
        css: function(n, t, r, u) { var f, e, o, s = y(t); return rf.test(t) || (t = tr(s)), (o = i.cssHooks[t] || i.cssHooks[s]) && "get" in o && (f = o.get(n, !0, r)), void 0 === f && (f = ni(n, t, u)), "normal" === f && t in uf && (f = uf[t]), "" === r || r ? (e = parseFloat(f), !0 === r || isFinite(e) ? e || 0 : f) : f }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) { if (r) return !io.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? ef(n, t, u) : ku(n, ro, function() { return ef(n, t, u) }) },
            set: function(n, r, u) {
                var s, f = ci(n),
                    h = !e.scrollboxSize() && "absolute" === f.position,
                    c = (h || u) && "border-box" === i.css(n, "boxSizing", !1, f),
                    o = u ? ir(n, t, u, c, f) : 0;
                return c && h && (o -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(f[t]) - ir(n, t, "border", !1, f) - .5)), o && (s = kt.exec(r)) && "px" !== (s[3] || "px") && (n.style[t] = r, r = i.css(n, t)), ff(0, r, o)
            }
        }
    });
    i.cssHooks.marginLeft = du(e.reliableMarginLeft, function(n, t) { if (t) return (parseFloat(ni(n, "marginLeft")) || n.getBoundingClientRect().left - ku(n, { marginLeft: 0 }, function() { return n.getBoundingClientRect().left })) + "px" });
    i.each({ margin: "", padding: "", border: "Width" }, function(n, t) { i.cssHooks[n + t] = { expand: function(i) { for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++) f[n + b[r] + t] = u[r] || u[r - 2] || u[0]; return f } }; "margin" !== n && (i.cssHooks[n + t].set = ff) });
    i.fn.extend({
        css: function(n, t) {
            return w(this, function(n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (Array.isArray(t)) { for (f = ci(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f); return o }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, 1 < arguments.length)
        }
    });
    ((i.Tween = a).prototype = {
        constructor: a,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() { var n = a.propHooks[this.prop]; return n && n.get ? n.get(this) : a.propHooks._default.get(this) },
        run: function(n) { var t, r = a.propHooks[this.prop]; return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : a.propHooks._default.set(this), this }
    }).init.prototype = a.prototype;
    (a.propHooks = { _default: { get: function(n) { var t; return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, "")) && "auto" !== t ? t : 0 }, set: function(n) { i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || !i.cssHooks[n.prop] && null == n.elem.style[tr(n.prop)] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit) } } }).scrollTop = a.propHooks.scrollLeft = { set: function(n) { n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now) } };
    i.easing = { linear: function(n) { return n }, swing: function(n) { return .5 - Math.cos(n * Math.PI) / 2 }, _default: "swing" };
    i.fx = a.prototype.init;
    i.fx.step = {};
    sf = /^(?:toggle|show|hide)$/;
    hf = /queueHooks$/;
    i.Animation = i.extend(v, {
        tweeners: { "*": [function(n, t) { var i = this.createTween(n, t); return hu(i.elem, n, kt.exec(t), i), i }] },
        tweener: function(n, t) { u(n) ? (t = n, n = ["*"]) : n = n.match(l); for (var i, r = 0, f = n.length; r < f; r++) i = n[r], v.tweeners[i] = v.tweeners[i] || [], v.tweeners[i].unshift(t) },
        prefilters: [function(n, t, u) {
            var f, y, w, c, b, h, o, l, k = "width" in t || "height" in t,
                v = this,
                p = {},
                s = n.style,
                a = n.nodeType && dt(n),
                e = r.get(n, "fxshow");
            for (f in u.queue || (null == (c = i._queueHooks(n, "fx")).unqueued && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function() { c.unqueued || b() }), c.unqueued++, v.always(function() {
                    v.always(function() {
                        c.unqueued--;
                        i.queue(n, "fx").length || c.empty.fire()
                    })
                })), t)
                if (y = t[f], sf.test(y)) {
                    if (delete t[f], w = w || "toggle" === y, y === (a ? "hide" : "show")) {
                        if ("show" !== y || !e || void 0 === e[f]) continue;
                        a = !0
                    }
                    p[f] = e && e[f] || i.style(n, f)
                }
            if ((h = !i.isEmptyObject(t)) || !i.isEmptyObject(p))
                for (f in k && 1 === n.nodeType && (u.overflow = [s.overflow, s.overflowX, s.overflowY], null == (o = e && e.display) && (o = r.get(n, "display")), "none" === (l = i.css(n, "display")) && (o ? l = o : (ht([n], !0), o = n.style.display || o, l = i.css(n, "display"), ht([n]))), ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (h || (v.done(function() { s.display = o }), null == o && (l = s.display, o = "none" === l ? "" : l)), s.display = "inline-block")), u.overflow && (s.overflow = "hidden", v.always(function() {
                        s.overflow = u.overflow[0];
                        s.overflowX = u.overflow[1];
                        s.overflowY = u.overflow[2]
                    })), h = !1, p) h || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", { display: o }), w && (e.hidden = !a), a && ht([n], !0), v.done(function() { for (f in a || ht([n]), r.remove(n, "fxshow"), p) i.style(n, f, p[f]) })), h = lf(a ? e[f] : 0, f, v), f in e || (e[f] = h.start, a && (h.end = h.start, h.start = 0))
        }],
        prefilter: function(n, t) { t ? v.prefilters.unshift(n) : v.prefilters.push(n) }
    });
    i.speed = function(n, t, r) {
        var f = n && "object" == typeof n ? i.extend({}, n) : { complete: r || !r && t || u(n) && n, duration: n, easing: r && t || t && !u(t) && t };
        return i.fx.off ? f.duration = 0 : "number" != typeof f.duration && (f.duration = f.duration in i.fx.speeds ? i.fx.speeds[f.duration] : i.fx.speeds._default), null != f.queue && !0 !== f.queue || (f.queue = "fx"), f.old = f.complete, f.complete = function() {
            u(f.old) && f.old.call(this);
            f.queue && i.dequeue(this, f.queue)
        }, f
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) { return this.filter(dt).css("opacity", 0).show().end().animate({ opacity: t }, n, i, r) },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function() {
                    var t = v(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0)
                };
            return e.finish = e, s || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return "string" != typeof n && (u = t, t = n, n = void 0), t && this.queue(n || "fx", []), this.each(function() {
                var s = !0,
                    t = null != n && n + "queueHooks",
                    o = i.timers,
                    e = r.get(this);
                if (t) e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e) e[t] && e[t].stop && hf.test(t) && f(e[t]);
                for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                !s && u || i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return !1 !== n && (n = n || "fx"), this.each(function() {
                var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0;
                for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) { return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ai(t, !0), n, i, u) }
    });
    i.each({ slideDown: ai("show"), slideUp: ai("hide"), slideToggle: ai("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(n, t) { i.fn[n] = function(n, i, r) { return this.animate(t, n, i, r) } });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0,
            t = i.timers;
        for (vt = Date.now(); n < t.length; n++)(r = t[n])() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        vt = void 0
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        i.fx.start()
    };
    i.fx.interval = 13;
    i.fx.start = function() { li || (li = !0, rr()) };
    i.fx.stop = function() { li = null };
    i.fx.speeds = { slow: 600, fast: 200, _default: 400 };
    i.fn.delay = function(t, r) {
        return t = i.fx && i.fx.speeds[t] || t, r = r || "fx", this.queue(r, function(i, r) {
            var u = n.setTimeout(i, t);
            r.stop = function() { n.clearTimeout(u) }
        })
    };
    yt = f.createElement("input");
    of = f.createElement("select").appendChild(f.createElement("option"));
    yt.type = "checkbox";
    e.checkOn = "" !== yt.value;
    e.optSelected = of.selected;
    (yt = f.createElement("input")).value = "t";
    yt.type = "radio";
    e.radioValue = "t" === yt.value;
    pt = i.expr.attrHandle;
    i.fn.extend({ attr: function(n, t) { return w(this, i.attr, n, t, 1 < arguments.length) }, removeAttr: function(n) { return this.each(function() { i.removeAttr(this, n) }) } });
    i.extend({
        attr: function(n, t, r) { var f, u, e = n.nodeType; if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (u = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? af : void 0)), void 0 !== r ? null === r ? void i.removeAttr(n, t) : u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : u && "get" in u && null !== (f = u.get(n, t)) ? f : null == (f = i.find.attr(n, t)) ? void 0 : f) },
        attrHooks: { type: { set: function(n, t) { if (!e.radioValue && "radio" === t && c(n, "input")) { var i = n.value; return n.setAttribute("type", t), i && (n.value = i), t } } } },
        removeAttr: function(n, t) {
            var i, u = 0,
                r = t && t.match(l);
            if (r && 1 === n.nodeType)
                while (i = r[u++]) n.removeAttribute(i)
        }
    });
    af = { set: function(n, t, r) { return !1 === t ? i.removeAttr(n, r) : n.setAttribute(r, r), r } };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = pt[t] || i.find.attr;
        pt[t] = function(n, t, i) { var f, e, u = t.toLowerCase(); return i || (e = pt[u], pt[u] = f, f = null != r(n, t, i) ? u : null, pt[u] = e), f }
    });
    vf = /^(?:input|select|textarea|button)$/i;
    yf = /^(?:a|area)$/i;
    i.fn.extend({ prop: function(n, t) { return w(this, i.prop, n, t, 1 < arguments.length) }, removeProp: function(n) { return this.each(function() { delete this[i.propFix[n] || n] }) } });
    i.extend({ prop: function(n, t, r) { var f, u, e = n.nodeType; if (3 !== e && 8 !== e && 2 !== e) return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t] }, propHooks: { tabIndex: { get: function(n) { var t = i.find.attr(n, "tabindex"); return t ? parseInt(t, 10) : vf.test(n.nodeName) || yf.test(n.nodeName) && n.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } });
    e.optSelected || (i.propHooks.selected = {
        get: function(n) { var t = n.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(n) {
            var t = n.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { i.propFix[this.toLowerCase()] = this });
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, f, e, s, h, c = 0;
            if (u(n)) return this.each(function(t) { i(this).addClass(n.call(this, t, it(this))) });
            if ((o = ur(n)).length)
                while (t = this[c++])
                    if (f = it(t), r = 1 === t.nodeType && " " + tt(f) + " ") {
                        for (s = 0; e = o[s++];) r.indexOf(" " + e + " ") < 0 && (r += e + " ");
                        f !== (h = tt(r)) && t.setAttribute("class", h)
                    }
            return this
        },
        removeClass: function(n) {
            var o, r, t, f, e, s, h, c = 0;
            if (u(n)) return this.each(function(t) { i(this).removeClass(n.call(this, t, it(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ((o = ur(n)).length)
                while (r = this[c++])
                    if (f = it(r), t = 1 === r.nodeType && " " + tt(f) + " ") {
                        for (s = 0; e = o[s++];)
                            while (-1 < t.indexOf(" " + e + " ")) t = t.replace(" " + e + " ", " ");
                        f !== (h = tt(t)) && r.setAttribute("class", h)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var f = typeof n,
                e = "string" === f || Array.isArray(n);
            return "boolean" == typeof t && e ? t ? this.addClass(n) : this.removeClass(n) : u(n) ? this.each(function(r) { i(this).toggleClass(n.call(this, r, it(this), t), t) }) : this.each(function() {
                var t, o, u, s;
                if (e)
                    for (o = 0, u = i(this), s = ur(n); t = s[o++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else void 0 !== n && "boolean" !== f || ((t = it(this)) && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === n ? "" : r.get(this, "__className__") || ""))
            })
        },
        hasClass: function(n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                if (1 === t.nodeType && -1 < (" " + tt(it(t)) + " ").indexOf(i)) return !0;
            return !1
        }
    });
    pf = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, e, f = this[0];
            return arguments.length ? (e = u(n), this.each(function(r) {
                var u;
                1 === this.nodeType && (null == (u = e ? n.call(this, r, i(this).val()) : n) ? u = "" : "number" == typeof u ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) { return null == n ? "" : n + "" })), (t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : f ? (t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]) && "get" in t && void 0 !== (r = t.get(f, "value")) ? r : "string" == typeof(r = f.value) ? r.replace(pf, "") : null == r ? "" : r : void 0
        }
    });
    i.extend({
        valHooks: {
            option: { get: function(n) { var t = i.find.attr(n, "value"); return null != t ? t : tt(i.text(n)) } },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, u = n.selectedIndex, f = "select-one" === n.type, s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
                        if (((t = o[r]).selected || r === u) && !t.disabled && (!t.parentNode.disabled || !c(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(), f) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(n, t) { for (var r, u, f = n.options, e = i.makeArray(t), o = f.length; o--;)((u = f[o]).selected = -1 < i.inArray(i.valHooks.option.get(u), e)) && (r = !0); return r || (n.selectedIndex = -1), e }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = { set: function(n, t) { if (Array.isArray(t)) return n.checked = -1 < i.inArray(i(n).val(), t) } };
        e.checkOn || (i.valHooks[this].get = function(n) { return null === n.getAttribute("value") ? "on" : n.value })
    });
    e.focusin = "onfocusin" in n;
    fr = /^(?:focusinfocus|focusoutblur)$/;
    er = function(n) { n.stopPropagation() };
    i.extend(i.event, {
        trigger: function(t, e, o, s) {
            var k, c, l, d, v, y, a, p, w = [o || f],
                h = ui.call(t, "type") ? t.type : t,
                b = ui.call(t, "namespace") ? t.namespace.split(".") : [];
            if (c = p = l = o = o || f, 3 !== o.nodeType && 8 !== o.nodeType && !fr.test(h + i.event.triggered) && (-1 < h.indexOf(".") && (h = (b = h.split(".")).shift(), b.sort()), v = h.indexOf(":") < 0 && "on" + h, (t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), e = null == e ? [t] : i.makeArray(e, [t]), a = i.event.special[h] || {}, s || !a.trigger || !1 !== a.trigger.apply(o, e))) {
                if (!s && !a.noBubble && !rt(o)) {
                    for (d = a.delegateType || h, fr.test(d + h) || (c = c.parentNode); c; c = c.parentNode) w.push(c), l = c;
                    l === (o.ownerDocument || f) && w.push(l.defaultView || l.parentWindow || n)
                }
                for (k = 0;
                    (c = w[k++]) && !t.isPropagationStopped();) p = c, t.type = 1 < k ? d : a.bindType || h, (y = (r.get(c, "events") || Object.create(null))[t.type] && r.get(c, "handle")) && y.apply(c, e), (y = v && c[v]) && y.apply && ot(c) && (t.result = y.apply(c, e), !1 === t.result && t.preventDefault());
                return t.type = h, s || t.isDefaultPrevented() || a._default && !1 !== a._default.apply(w.pop(), e) || !ot(o) || v && u(o[h]) && !rt(o) && ((l = o[v]) && (o[v] = null), i.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, er), o[h](), t.isPropagationStopped() && p.removeEventListener(h, er), i.event.triggered = void 0, l && (o[v] = l)), t.result
            }
        },
        simulate: function(n, t, r) {
            var u = i.extend(new i.Event, r, { type: n, isSimulated: !0 });
            i.event.trigger(u, null, t)
        }
    });
    i.fn.extend({ trigger: function(n, t) { return this.each(function() { i.event.trigger(n, t, this) }) }, triggerHandler: function(n, t) { var r = this[0]; if (r) return i.event.trigger(n, t, r, !0) } });
    e.focusin || i.each({ focus: "focusin", blur: "focusout" }, function(n, t) {
        var u = function(n) { i.event.simulate(t, n.target, i.event.fix(n)) };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this.document || this,
                    f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this.document || this,
                    f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
            }
        }
    });
    var ti = n.location,
        wf = { guid: Date.now() },
        or = /\?/;
    i.parseXML = function(t) { var r; if (!t || "string" != typeof t) return null; try { r = (new n.DOMParser).parseFromString(t, "text/xml") } catch (t) { r = void 0 } return r && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r };
    var uo = /\[\]$/,
        bf = /\r?\n/g,
        fo = /^(?:submit|button|image|reset|file)$/i,
        eo = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, f = [],
            e = function(n, t) {
                var i = u(t) ? t() : t;
                f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (null == n) return "";
        if (Array.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() { e(this.name, this.value) });
        else
            for (r in n) sr(r, n[r], t, e);
        return f.join("&")
    };
    i.fn.extend({ serialize: function() { return i.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var n = i.prop(this, "elements"); return n ? i.makeArray(n) : this }).filter(function() { var n = this.type; return this.name && !i(this).is(":disabled") && eo.test(this.nodeName) && !fo.test(n) && (this.checked || !gt.test(n)) }).map(function(n, t) { var r = i(this).val(); return null == r ? null : Array.isArray(r) ? i.map(r, function(n) { return { name: t.name, value: n.replace(bf, "\r\n") } }) : { name: t.name, value: r.replace(bf, "\r\n") } }).get() } });
    var oo = /%20/g,
        so = /#.*$/,
        ho = /([?&])_=[^&]*/,
        co = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        lo = /^(?:GET|HEAD)$/,
        ao = /^\/\//,
        kf = {},
        hr = {},
        df = "*/".concat("*"),
        cr = f.createElement("a");
    return cr.href = ti.href, i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: ti.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ti.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": df, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": i.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(n, t) { return t ? lr(lr(n, i.ajaxSettings), t) : lr(i.ajaxSettings, n) },
        ajaxPrefilter: gf(kf),
        ajaxTransport: gf(hr),
        ajax: function(t, r) {
            function b(t, r, f, c) {
                var v, rt, b, p, g, l = r;
                s || (s = !0, d && n.clearTimeout(d), a = void 0, k = c || "", e.readyState = 0 < t ? 4 : 0, v = 200 <= t && t < 300 || 304 === t, f && (p = function(n, t, i) {
                    for (var e, u, f, o, s = n.contents, r = n.dataTypes;
                        "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
                    if (e)
                        for (u in s)
                            if (s[u] && s[u].test(e)) { r.unshift(u); break }
                    if (r[0] in i) f = r[0];
                    else {
                        for (u in i) {
                            if (!r[0] || n.converters[u + " " + r[0]]) { f = u; break }
                            o || (o = u)
                        }
                        f = f || o
                    }
                    if (f) return f !== r[0] && r.unshift(f), i[f]
                }(u, e, f)), !v && -1 < i.inArray("script", u.dataTypes) && (u.converters["text script"] = function() {}), p = function(n, t, i, r) {
                    var h, u, f, s, e, o = {},
                        c = n.dataTypes.slice();
                    if (c[1])
                        for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
                    for (u = c.shift(); u;)
                        if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                            if ("*" === u) u = e;
                            else if ("*" !== e && e !== u) {
                        if (!(f = o[e + " " + u] || o["* " + u]))
                            for (h in o)
                                if ((s = h.split(" "))[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {!0 === f ? f = o[h] : !0 !== o[h] && (u = s[0], c.unshift(s[1])); break }
                        if (!0 !== f)
                            if (f && n.throws) t = f(t);
                            else try { t = f(t) } catch (n) { return { state: "parsererror", error: f ? n : "No conversion from " + e + " to " + u } }
                    }
                    return { state: "success", data: t }
                }(u, p, e, v), v ? (u.ifModified && ((g = e.getResponseHeader("Last-Modified")) && (i.lastModified[o] = g), (g = e.getResponseHeader("etag")) && (i.etag[o] = g)), 204 === t || "HEAD" === u.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = p.state, rt = p.data, v = !(b = p.error))) : (b = l, !t && l || (l = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || l) + "", v ? tt.resolveWith(h, [rt, l, e]) : tt.rejectWith(h, [e, l, b]), e.statusCode(w), w = void 0, y && nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : b]), it.fireWith(h, [e, l]), y && (nt.trigger("ajaxComplete", [e, u]), --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (r = t, t = void 0);
            r = r || {};
            var a, o, k, v, d, c, s, y, g, p, u = i.ajaxSetup({}, r),
                h = u.context || u,
                nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                w = u.statusCode || {},
                rt = {},
                ut = {},
                ft = "canceled",
                e = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (s) {
                            if (!v)
                                for (v = {}; t = co.exec(k);) v[t[1].toLowerCase() + " "] = (v[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = v[n.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() { return s ? k : null },
                    setRequestHeader: function(n, t) { return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this },
                    overrideMimeType: function(n) { return null == s && (u.mimeType = n), this },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (s) e.always(n[e.status]);
                            else
                                for (t in n) w[t] = [w[t], n[t]];
                        return this
                    },
                    abort: function(n) { var t = n || ft; return a && a.abort(t), b(0, t), this }
                };
            if (tt.promise(e), u.url = ((t || u.url || ti.href) + "").replace(ao, ti.protocol + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = (u.dataType || "*").toLowerCase().match(l) || [""], null == u.crossDomain) {
                c = f.createElement("a");
                try {
                    c.href = u.url;
                    c.href = c.href;
                    u.crossDomain = cr.protocol + "//" + cr.host != c.protocol + "//" + c.host
                } catch (t) { u.crossDomain = !0 }
            }
            if (u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)), ne(kf, u, r, e), s) return e;
            for (g in (y = i.event && u.global) && 0 == i.active++ && i.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !lo.test(u.type), o = u.url.replace(so, ""), u.hasContent ? u.data && u.processData && 0 === (u.contentType || "").indexOf("application/x-www-form-urlencoded") && (u.data = u.data.replace(oo, "+")) : (p = u.url.slice(o.length), u.data && (u.processData || "string" == typeof u.data) && (o += (or.test(o) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (o = o.replace(ho, "$1"), p = (or.test(o) ? "&" : "?") + "_=" + wf.guid++ + p), u.url = o + p), u.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o])), (u.data && u.hasContent && !1 !== u.contentType || r.contentType) && e.setRequestHeader("Content-Type", u.contentType), e.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + df + "; q=0.01" : "") : u.accepts["*"]), u.headers) e.setRequestHeader(g, u.headers[g]);
            if (u.beforeSend && (!1 === u.beforeSend.call(h, e, u) || s)) return e.abort();
            if (ft = "abort", it.add(u.complete), e.done(u.success), e.fail(u.error), a = ne(hr, u, r, e)) {
                if (e.readyState = 1, y && nt.trigger("ajaxSend", [e, u]), s) return e;
                u.async && 0 < u.timeout && (d = n.setTimeout(function() { e.abort("timeout") }, u.timeout));
                try {
                    s = !1;
                    a.send(rt, b)
                } catch (t) {
                    if (s) throw t;
                    b(-1, t)
                }
            } else b(-1, "No Transport");
            return e
        },
        getJSON: function(n, t, r) { return i.get(n, t, r, "json") },
        getScript: function(n, t) { return i.get(n, void 0, t, "script") }
    }), i.each(["get", "post"], function(n, t) { i[t] = function(n, r, f, e) { return u(r) && (e = e || f, f = r, r = void 0), i.ajax(i.extend({ url: n, type: t, dataType: e, data: r, success: f }, i.isPlainObject(n) && n)) } }), i.ajaxPrefilter(function(n) { for (var t in n.headers) "content-type" === t.toLowerCase() && (n.contentType = n.headers[t] || "") }), i._evalUrl = function(n, t, r) { return i.ajax({ url: n, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(n) { i.globalEval(n, t, r) } }) }, i.fn.extend({
        wrapAll: function(n) { var t; return this[0] && (u(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var n = this; n.firstElementChild;) n = n.firstElementChild; return n }).append(this)), this },
        wrapInner: function(n) {
            return u(n) ? this.each(function(t) { i(this).wrapInner(n.call(this, t)) }) : this.each(function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) { var t = u(n); return this.each(function(r) { i(this).wrapAll(t ? n.call(this, r) : n) }) },
        unwrap: function(n) { return this.parent(n).not("body").each(function() { i(this).replaceWith(this.childNodes) }), this }
    }), i.expr.pseudos.hidden = function(n) { return !i.expr.pseudos.visible(n) }, i.expr.pseudos.visible = function(n) { return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length) }, i.ajaxSettings.xhr = function() { try { return new n.XMLHttpRequest } catch (t) {} }, te = { 0: 200, 1223: 204 }, wt = i.ajaxSettings.xhr(), e.cors = !!wt && "withCredentials" in wt, e.ajax = wt = !!wt, i.ajaxTransport(function(t) {
        var i, r;
        if (e.cors || wt && !t.crossDomain) return {
            send: function(u, f) {
                var o, e = t.xhr();
                if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) e[o] = t.xhrFields[o];
                for (o in t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType), t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest"), u) e.setRequestHeader(o, u[o]);
                i = function(n) { return function() { i && (i = r = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null, "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(te[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? { binary: e.response } : { text: e.responseText }, e.getAllResponseHeaders())) } };
                e.onload = i();
                r = e.onerror = e.ontimeout = i("error");
                void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function() { 4 === e.readyState && n.setTimeout(function() { i && r() }) };
                i = i("abort");
                try { e.send(t.hasContent && t.data || null) } catch (u) { if (i) throw u; }
            },
            abort: function() { i && i() }
        }
    }), i.ajaxPrefilter(function(n) { n.crossDomain && (n.contents.script = !1) }), i.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(n) { return i.globalEval(n), n } } }), i.ajaxPrefilter("script", function(n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }), i.ajaxTransport("script", function(n) {
        var r, t;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(u, e) {
                r = i("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", t = function(n) {
                    r.remove();
                    t = null;
                    n && e("error" === n.type ? 404 : 200, n.type)
                });
                f.head.appendChild(r[0])
            },
            abort: function() { t && t() }
        }
    }), ar = [], vi = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var n = ar.pop() || i.expando + "_" + wf.guid++; return this[n] = !0, n } }), i.ajaxPrefilter("json jsonp", function(t, r, f) {
        var e, o, s, h = !1 !== t.jsonp && (vi.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && vi.test(t.data) && "data");
        if (h || "jsonp" === t.dataTypes[0]) return e = t.jsonpCallback = u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, h ? t[h] = t[h].replace(vi, "$1" + e) : !1 !== t.jsonp && (t.url += (or.test(t.url) ? "&" : "?") + t.jsonp + "=" + e), t.converters["script json"] = function() { return s || i.error(e + " was not called"), s[0] }, t.dataTypes[0] = "json", o = n[e], n[e] = function() { s = arguments }, f.always(function() {
            void 0 === o ? i(n).removeProp(e) : n[e] = o;
            t[e] && (t.jsonpCallback = r.jsonpCallback, ar.push(e));
            s && u(o) && o(s[0]);
            s = o = void 0
        }), "script"
    }), e.createHTMLDocument = ((ie = f.implementation.createHTMLDocument("").body).innerHTML = "<form><\/form><form><\/form>", 2 === ie.childNodes.length), i.parseHTML = function(n, t, r) { return "string" != typeof n ? [] : ("boolean" == typeof t && (r = t, t = !1), t || (e.createHTMLDocument ? ((s = (t = f.implementation.createHTMLDocument("")).createElement("base")).href = f.location.href, t.head.appendChild(s)) : t = f), u = !r && [], (o = wi.exec(n)) ? [t.createElement(o[1])] : (o = vu([n], t, u), u && u.length && i(u).remove(), i.merge([], o.childNodes))); var s, o, u }, i.fn.load = function(n, t, r) {
        var f, s, h, e = this,
            o = n.indexOf(" ");
        return -1 < o && (f = tt(n.slice(o)), n = n.slice(0, o)), u(t) ? (r = t, t = void 0) : t && "object" == typeof t && (s = "POST"), 0 < e.length && i.ajax({ url: n, type: s || "GET", dataType: "html", data: t }).done(function(n) {
            h = arguments;
            e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
        }).always(r && function(n, t) { e.each(function() { r.apply(this, h || [n.responseText, t, n]) }) }), this
    }, i.expr.pseudos.animated = function(n) { return i.grep(i.timers, function(t) { return n === t.elem }).length }, i.offset = {
        setOffset: function(n, t, r) {
            var v, o, s, h, e, c, l = i.css(n, "position"),
                a = i(n),
                f = {};
            "static" === l && (n.style.position = "relative");
            e = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            ("absolute" === l || "fixed" === l) && -1 < (s + c).indexOf("auto") ? (h = (v = a.position()).top, o = v.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            u(t) && (t = t.call(n, r, i.extend({}, e)));
            null != t.top && (f.top = t.top - e.top + h);
            null != t.left && (f.left = t.left - e.left + o);
            "using" in t ? t.using.call(n, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), a.css(f))
        }
    }, i.fn.extend({
        offset: function(n) { if (arguments.length) return void 0 === n ? this : this.each(function(t) { i.offset.setOffset(this, n, t) }); var r, u, t = this[0]; if (t) return t.getClientRects().length ? (r = t.getBoundingClientRect(), u = t.ownerDocument.defaultView, { top: r.top + u.pageYOffset, left: r.left + u.pageXOffset }) : { top: 0, left: 0 } },
        position: function() {
            if (this[0]) {
                var n, r, u, t = this[0],
                    f = { top: 0, left: 0 };
                if ("fixed" === i.css(t, "position")) r = t.getBoundingClientRect();
                else {
                    for (r = this.offset(), u = t.ownerDocument, n = t.offsetParent || u.documentElement; n && (n === u.body || n === u.documentElement) && "static" === i.css(n, "position");) n = n.parentNode;
                    n && n !== t && 1 === n.nodeType && ((f = i(n).offset()).top += i.css(n, "borderTopWidth", !0), f.left += i.css(n, "borderLeftWidth", !0))
                }
                return { top: r.top - f.top - i.css(t, "marginTop", !0), left: r.left - f.left - i.css(t, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var n = this.offsetParent; n && "static" === i.css(n, "position");) n = n.offsetParent; return n || g }) }
    }), i.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function(i) {
            return w(this, function(n, i, u) {
                var f;
                if (rt(n) ? f = n : 9 === n.nodeType && (f = n.defaultView), void 0 === u) return f ? f[t] : n[i];
                f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u
            }, n, i, arguments.length)
        }
    }), i.each(["top", "left"], function(n, t) { i.cssHooks[t] = du(e.pixelPosition, function(n, r) { if (r) return r = ni(n, t), nr.test(r) ? i(n).position()[t] + "px" : r }) }), i.each({ Height: "height", Width: "width" }, function(n, t) {
        i.each({ padding: "inner" + n, content: t, "": "outer" + n }, function(r, u) {
            i.fn[u] = function(f, e) {
                var o = arguments.length && (r || "boolean" != typeof f),
                    s = r || (!0 === f || !0 === e ? "margin" : "border");
                return w(this, function(t, r, f) { var e; return rt(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s) }, t, o ? f : void 0, o)
            }
        })
    }), i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) { i.fn[t] = function(n) { return this.on(t, n) } }), i.fn.extend({ bind: function(n, t, i) { return this.on(n, null, t, i) }, unbind: function(n, t) { return this.off(n, null, t) }, delegate: function(n, t, i, r) { return this.on(t, n, i, r) }, undelegate: function(n, t, i) { return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i) }, hover: function(n, t) { return this.mouseenter(n).mouseleave(t || n) } }), i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) { i.fn[t] = function(n, i) { return 0 < arguments.length ? this.on(t, null, n, i) : this.trigger(t) } }), re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, i.proxy = function(n, t) { var r, f, e; if ("string" == typeof t && (r = n[t], t = n, n = r), u(n)) return f = k.call(arguments, 2), (e = function() { return n.apply(t || this, f.concat(k.call(arguments))) }).guid = n.guid = n.guid || i.guid++, e }, i.holdReady = function(n) { n ? i.readyWait++ : i.ready(!0) }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = c, i.isFunction = u, i.isWindow = rt, i.camelCase = y, i.type = ut, i.now = Date.now, i.isNumeric = function(n) { var t = i.type(n); return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n)) }, i.trim = function(n) { return null == n ? "" : (n + "").replace(re, "") }, "function" == typeof define && define.amd && define("jquery", [], function() { return i }), ue = n.jQuery, fe = n.$, i.noConflict = function(t) { return n.$ === i && (n.$ = fe), t && n.jQuery === i && (n.jQuery = ue), i }, "undefined" == typeof t && (n.jQuery = n.$ = i), i
});
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(n) { typeof define == "function" && define.amd ? define(["jquery"], n) : n(jQuery) })(function(n) {
    function i(n) { return t.raw ? n : encodeURIComponent(n) }

    function f(n) { return t.raw ? n : decodeURIComponent(n) }

    function e(n) { return i(t.json ? JSON.stringify(n) : String(n)) }

    function o(n) { n.indexOf('"') === 0 && (n = n.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return n = decodeURIComponent(n.replace(u, " ")), t.json ? JSON.parse(n) : n } catch (i) {} }

    function r(i, r) { var u = t.raw ? i : o(i); return n.isFunction(r) ? r(u) : u }
    var u = /\+/g,
        t = n.cookie = function(u, o, s) {
            var y, a, h, v, c, p;
            if (o !== undefined && !n.isFunction(o)) return s = n.extend({}, t.defaults, s), typeof s.expires == "number" && (y = s.expires, a = s.expires = new Date, a.setTime(+a + y * 864e5)), document.cookie = [i(u), "=", e(o), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("");
            for (h = u ? undefined : {}, v = document.cookie ? document.cookie.split("; ") : [], c = 0, p = v.length; c < p; c++) {
                var w = v[c].split("="),
                    b = f(w.shift()),
                    l = w.join("=");
                if (u && u === b) { h = r(l, o); break }
                u || (l = r(l)) === undefined || (h[b] = l)
            }
            return h
        };
    t.defaults = {};
    n.removeCookie = function(t, i) { return n.cookie(t) === undefined ? !1 : (n.cookie(t, "", n.extend({}, i, { expires: -1 })), !n.cookie(t)) }
});
! function(n, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Swiper = t() }(this, function() {
    "use strict";

    function t(n, t) {
        var s = [],
            r = 0,
            h, c, e, o;
        if (n && !t && n instanceof f) return n;
        if (n)
            if ("string" == typeof n)
                if (e = n.trim(), 0 <= e.indexOf("<") && 0 <= e.indexOf(">"))
                    for (o = "div", 0 === e.indexOf("<li") && (o = "ul"), 0 === e.indexOf("<tr") && (o = "tbody"), 0 !== e.indexOf("<td") && 0 !== e.indexOf("<th") || (o = "tr"), 0 === e.indexOf("<tbody") && (o = "table"), 0 === e.indexOf("<option") && (o = "select"), (c = u.createElement(o)).innerHTML = e, r = 0; r < c.childNodes.length; r += 1) s.push(c.childNodes[r]);
                else
                    for (h = t || "#" !== n[0] || n.match(/[ .<>:~]/) ? (t || u).querySelectorAll(n.trim()) : [u.getElementById(n.trim().split("#")[1])], r = 0; r < h.length; r += 1) h[r] && s.push(h[r]);
        else if (n.nodeType || n === i || n === u) s.push(n);
        else if (0 < n.length && n[0].nodeType)
            for (r = 0; r < n.length; r += 1) s.push(n[r]);
        return new f(s)
    }

    function rt(n) { for (var i = [], t = 0; t < n.length; t += 1) - 1 === i.indexOf(n[t]) && i.push(n[t]); return i }

    function at() {
        var n = this,
            t = n.params,
            i = n.el,
            r;
        if (!i || 0 !== i.offsetWidth) {
            t.breakpoints && n.setBreakpoint();
            var u = n.allowSlideNext,
                f = n.allowSlidePrev,
                e = n.snapGrid;
            (n.allowSlideNext = !0, n.allowSlidePrev = !0, n.updateSize(), n.updateSlides(), t.freeMode) ? (r = Math.min(Math.max(n.translate, n.maxTranslate()), n.minTranslate()), n.setTranslate(r), n.updateActiveIndex(), n.updateSlidesClasses(), t.autoHeight && n.updateAutoHeight()) : (n.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && n.isEnd && !n.params.centeredSlides ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0));
            n.allowSlidePrev = f;
            n.allowSlideNext = u;
            n.params.watchOverflow && e !== n.snapGrid && n.checkOverflow()
        }
    }
    var u = "undefined" == typeof document ? { body: {}, addEventListener: function() {}, removeEventListener: function() {}, activeElement: { blur: function() {}, nodeName: "" }, querySelector: function() { return null }, querySelectorAll: function() { return [] }, getElementById: function() { return null }, createEvent: function() { return { initEvent: function() {} } }, createElement: function() { return { children: [], childNodes: [], style: {}, setAttribute: function() {}, getElementsByTagName: function() { return [] } } }, location: { hash: "" } } : document,
        i = "undefined" == typeof window ? { document: u, navigator: { userAgent: "" }, location: {}, history: {}, CustomEvent: function() { return this }, addEventListener: function() {}, removeEventListener: function() {}, getComputedStyle: function() { return { getPropertyValue: function() { return "" } } }, Image: function() {}, Date: function() {}, screen: {}, setTimeout: function() {}, clearTimeout: function() {} } : window,
        f = function(n) { for (var t = 0; t < n.length; t += 1) this[t] = n[t]; return this.length = n.length, this },
        ut;
    t.fn = f.prototype;
    t.Class = f;
    t.Dom7 = f;
    ut = {
        addClass: function(n) {
            var r, i, t;
            if (void 0 === n) return this;
            for (r = n.split(" "), i = 0; i < r.length; i += 1)
                for (t = 0; t < this.length; t += 1) void 0 !== this[t] && void 0 !== this[t].classList && this[t].classList.add(r[i]);
            return this
        },
        removeClass: function(n) {
            for (var t, r = n.split(" "), i = 0; i < r.length; i += 1)
                for (t = 0; t < this.length; t += 1) void 0 !== this[t] && void 0 !== this[t].classList && this[t].classList.remove(r[i]);
            return this
        },
        hasClass: function(n) { return !!this[0] && this[0].classList.contains(n) },
        toggleClass: function(n) {
            for (var t, r = n.split(" "), i = 0; i < r.length; i += 1)
                for (t = 0; t < this.length; t += 1) void 0 !== this[t] && void 0 !== this[t].classList && this[t].classList.toggle(r[i]);
            return this
        },
        attr: function(n, t) {
            var u = arguments,
                i, r;
            if (1 === arguments.length && "string" == typeof n) return this[0] ? this[0].getAttribute(n) : void 0;
            for (i = 0; i < this.length; i += 1)
                if (2 === u.length) this[i].setAttribute(n, t);
                else
                    for (r in n) this[i][r] = n[r], this[i].setAttribute(r, n[r]);
            return this
        },
        removeAttr: function(n) { for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(n); return this },
        data: function(n, t) { var i, r, u; if (void 0 !== t) { for (r = 0; r < this.length; r += 1)(i = this[r]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[n] = t; return this } if (i = this[0]) return i.dom7ElementDataStorage && n in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[n] : (u = i.getAttribute("data-" + n), u || void 0) },
        transform: function(n) { for (var i, t = 0; t < this.length; t += 1) i = this[t].style, i.webkitTransform = n, i.transform = n; return this },
        transition: function(n) { var t, i; for ("string" != typeof n && (n += "ms"), t = 0; t < this.length; t += 1) i = this[t].style, i.webkitTransitionDuration = n, i.transitionDuration = n; return this },
        on: function() {
            function y(n) {
                var f = n.target,
                    i, e, r;
                if (f)
                    if (i = n.target.dom7EventData || [], i.indexOf(n) < 0 && i.unshift(n), t(f).is(c)) u.apply(f, i);
                    else
                        for (e = t(f).parents(), r = 0; r < e.length; r += 1) t(e[r]).is(c) && u.apply(e[r], i)
            }

            function p(n) {
                var t = n && n.target && n.target.dom7EventData || [];
                t.indexOf(n) < 0 && t.unshift(n);
                u.apply(this, t)
            }
            for (var a, r, e, l, n, o, s, i = [], h = arguments.length; h--;) i[h] = arguments[h];
            var v = i[0],
                c = i[1],
                u = i[2],
                f = i[3];
            for ("function" == typeof i[1] && (v = (a = i)[0], u = a[1], f = a[2], c = void 0), f || (f = !1), e = v.split(" "), l = 0; l < this.length; l += 1)
                if (n = this[l], c)
                    for (r = 0; r < e.length; r += 1) o = e[r], n.dom7LiveListeners || (n.dom7LiveListeners = {}), n.dom7LiveListeners[o] || (n.dom7LiveListeners[o] = []), n.dom7LiveListeners[o].push({ listener: u, proxyListener: y }), n.addEventListener(o, y, f);
                else
                    for (r = 0; r < e.length; r += 1) s = e[r], n.dom7Listeners || (n.dom7Listeners = {}), n.dom7Listeners[s] || (n.dom7Listeners[s] = []), n.dom7Listeners[s].push({ listener: u, proxyListener: p }), n.addEventListener(s, p, f);
            return this
        },
        off: function() {
            for (var l, v, s, f, h, i, n, r, c, t = [], e = arguments.length; e--;) t[e] = arguments[e];
            var y = t[0],
                a = t[1],
                o = t[2],
                u = t[3];
            for ("function" == typeof t[1] && (y = (l = t)[0], o = l[1], u = l[2], a = void 0), u || (u = !1), v = y.split(" "), s = 0; s < v.length; s += 1)
                for (f = v[s], h = 0; h < this.length; h += 1)
                    if (i = this[h], n = void 0, !a && i.dom7Listeners ? n = i.dom7Listeners[f] : a && i.dom7LiveListeners && (n = i.dom7LiveListeners[f]), n && n.length)
                        for (r = n.length - 1; 0 <= r; r -= 1) c = n[r], o && c.listener === o ? (i.removeEventListener(f, c.proxyListener, u), n.splice(r, 1)) : o || (i.removeEventListener(f, c.proxyListener, u), n.splice(r, 1));
            return this
        },
        trigger: function() {
            for (var s, e, t, r, n = [], f = arguments.length; f--;) n[f] = arguments[f];
            for (var h = n[0].split(" "), c = n[1], o = 0; o < h.length; o += 1)
                for (s = h[o], e = 0; e < this.length; e += 1) {
                    t = this[e];
                    r = void 0;
                    try { r = new i.CustomEvent(s, { detail: c, bubbles: !0, cancelable: !0 }) } catch (n) {
                        (r = u.createEvent("Event")).initEvent(s, !0, !0);
                        r.detail = c
                    }
                    t.dom7EventData = n.filter(function(n, t) { return 0 < t });
                    t.dispatchEvent(r);
                    t.dom7EventData = [];
                    delete t.dom7EventData
                }
            return this
        },
        transitionEnd: function(n) {
            function u(f) {
                if (f.target === this)
                    for (n.call(this, f), t = 0; t < i.length; t += 1) r.off(i[t], u)
            }
            var t, i = ["webkitTransitionEnd", "transitionend"],
                r = this;
            if (n)
                for (t = 0; t < i.length; t += 1) r.on(i[t], u);
            return this
        },
        outerWidth: function(n) { if (0 < this.length) { if (n) { var t = this.styles(); return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left")) } return this[0].offsetWidth } return null },
        outerHeight: function(n) { if (0 < this.length) { if (n) { var t = this.styles(); return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom")) } return this[0].offsetHeight } return null },
        offset: function() {
            if (0 < this.length) {
                var n = this[0],
                    t = n.getBoundingClientRect(),
                    r = u.body,
                    f = n.clientTop || r.clientTop || 0,
                    e = n.clientLeft || r.clientLeft || 0,
                    o = n === i ? i.scrollY : n.scrollTop,
                    s = n === i ? i.scrollX : n.scrollLeft;
                return { top: t.top + o - f, left: t.left + s - e }
            }
            return null
        },
        css: function(n, t) {
            var r, u;
            if (1 === arguments.length) {
                if ("string" != typeof n) {
                    for (r = 0; r < this.length; r += 1)
                        for (u in n) this[r].style[u] = n[u];
                    return this
                }
                if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(n)
            }
            if (2 === arguments.length && "string" == typeof n) { for (r = 0; r < this.length; r += 1) this[r].style[n] = t; return this }
            return this
        },
        each: function(n) {
            if (!n) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === n.call(this[t], t, this[t])) return this;
            return this
        },
        html: function(n) { if (void 0 === n) return this[0] ? this[0].innerHTML : void 0; for (var t = 0; t < this.length; t += 1) this[t].innerHTML = n; return this },
        text: function(n) { if (void 0 === n) return this[0] ? this[0].textContent.trim() : null; for (var t = 0; t < this.length; t += 1) this[t].textContent = n; return this },
        is: function(n) {
            var o, e, r = this[0];
            if (!r || void 0 === n) return !1;
            if ("string" == typeof n) {
                if (r.matches) return r.matches(n);
                if (r.webkitMatchesSelector) return r.webkitMatchesSelector(n);
                if (r.msMatchesSelector) return r.msMatchesSelector(n);
                for (o = t(n), e = 0; e < o.length; e += 1)
                    if (o[e] === r) return !0;
                return !1
            }
            if (n === u) return r === u;
            if (n === i) return r === i;
            if (n.nodeType || n instanceof f) {
                for (o = n.nodeType ? [n] : n, e = 0; e < o.length; e += 1)
                    if (o[e] === r) return !0;
                return !1
            }
            return !1
        },
        index: function() { var t, n = this[0]; if (n) { for (t = 0; null !== (n = n.previousSibling);) 1 === n.nodeType && (t += 1); return t } },
        eq: function(n) { if (void 0 === n) return this; var t, i = this.length; return new f(i - 1 < n ? [] : n < 0 ? (t = i + n) < 0 ? [] : [this[t]] : [this[n]]) },
        append: function() {
            for (var n, e, t, o, s, i = [], r = arguments.length; r--;) i[r] = arguments[r];
            for (e = 0; e < i.length; e += 1)
                for (n = i[e], t = 0; t < this.length; t += 1)
                    if ("string" == typeof n)
                        for (o = u.createElement("div"), o.innerHTML = n; o.firstChild;) this[t].appendChild(o.firstChild);
                    else if (n instanceof f)
                for (s = 0; s < n.length; s += 1) this[t].appendChild(n[s]);
            else this[t].appendChild(n);
            return this
        },
        prepend: function(n) {
            for (var i, r, t = 0; t < this.length; t += 1)
                if ("string" == typeof n)
                    for (r = u.createElement("div"), r.innerHTML = n, i = r.childNodes.length - 1; 0 <= i; i -= 1) this[t].insertBefore(r.childNodes[i], this[t].childNodes[0]);
                else if (n instanceof f)
                for (i = 0; i < n.length; i += 1) this[t].insertBefore(n[i], this[t].childNodes[0]);
            else this[t].insertBefore(n, this[t].childNodes[0]);
            return this
        },
        next: function(n) { return 0 < this.length ? n ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(n) ? new f([this[0].nextElementSibling]) : new f([]) : this[0].nextElementSibling ? new f([this[0].nextElementSibling]) : new f([]) : new f([]) },
        nextAll: function(n) {
            var u = [],
                r = this[0],
                i;
            if (!r) return new f([]);
            for (; r.nextElementSibling;) i = r.nextElementSibling, n ? t(i).is(n) && u.push(i) : u.push(i), r = i;
            return new f(u)
        },
        prev: function(n) { if (0 < this.length) { var i = this[0]; return n ? i.previousElementSibling && t(i.previousElementSibling).is(n) ? new f([i.previousElementSibling]) : new f([]) : i.previousElementSibling ? new f([i.previousElementSibling]) : new f([]) } return new f([]) },
        prevAll: function(n) {
            var u = [],
                r = this[0],
                i;
            if (!r) return new f([]);
            for (; r.previousElementSibling;) i = r.previousElementSibling, n ? t(i).is(n) && u.push(i) : u.push(i), r = i;
            return new f(u)
        },
        parent: function(n) { for (var r = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (n ? t(this[i].parentNode).is(n) && r.push(this[i].parentNode) : r.push(this[i].parentNode)); return t(rt(r)) },
        parents: function(n) {
            for (var i, r = [], u = 0; u < this.length; u += 1)
                for (i = this[u].parentNode; i;) n ? t(i).is(n) && r.push(i) : r.push(i), i = i.parentNode;
            return t(rt(r))
        },
        closest: function(n) { var t = this; return void 0 === n ? new f([]) : (t.is(n) || (t = t.parents(n).eq(0)), t) },
        find: function(n) {
            for (var u, i, r = [], t = 0; t < this.length; t += 1)
                for (u = this[t].querySelectorAll(n), i = 0; i < u.length; i += 1) r.push(u[i]);
            return new f(r)
        },
        children: function(n) {
            for (var r, i, u = [], e = 0; e < this.length; e += 1)
                for (r = this[e].childNodes, i = 0; i < r.length; i += 1) n ? 1 === r[i].nodeType && t(r[i]).is(n) && u.push(r[i]) : 1 === r[i].nodeType && u.push(r[i]);
            return new f(rt(u))
        },
        remove: function() { for (var n = 0; n < this.length; n += 1) this[n].parentNode && this[n].parentNode.removeChild(this[n]); return this },
        add: function() {
            for (var r, u, f, n = [], i = arguments.length; i--;) n[i] = arguments[i];
            for (r = 0; r < n.length; r += 1)
                for (f = t(n[r]), u = 0; u < f.length; u += 1) this[this.length] = f[u], this.length += 1;
            return this
        },
        styles: function() { return this[0] ? i.getComputedStyle(this[0], null) : {} }
    };
    Object.keys(ut).forEach(function(n) { t.fn[n] = ut[n] });
    var a, w, b, n = {
            deleteProps: function(n) {
                var t = n;
                Object.keys(t).forEach(function(n) { try { t[n] = null } catch (n) {} try { delete t[n] } catch (n) {} })
            },
            nextTick: function(n, t) { return void 0 === t && (t = 0), setTimeout(n, t) },
            now: function() { return Date.now() },
            getTranslate: function(n, t) { var f, u, e, r; return void 0 === t && (t = "x"), r = i.getComputedStyle(n, null), i.WebKitCSSMatrix ? (6 < (u = r.transform || r.webkitTransform).split(",").length && (u = u.split(", ").map(function(n) { return n.replace(",", ".") }).join(", ")), e = new i.WebKitCSSMatrix("none" === u ? "" : u)) : f = (e = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (u = i.WebKitCSSMatrix ? e.m41 : 16 === f.length ? parseFloat(f[12]) : parseFloat(f[4])), "y" === t && (u = i.WebKitCSSMatrix ? e.m42 : 16 === f.length ? parseFloat(f[13]) : parseFloat(f[5])), u || 0 },
            parseUrlQuery: function(n) {
                var r, f, u, e, o = {},
                    t = n || i.location.href;
                if ("string" == typeof t && t.length)
                    for (e = (f = (t = -1 < t.indexOf("?") ? t.replace(/\S*\?/, "") : "").split("&").filter(function(n) { return "" !== n })).length, r = 0; r < e; r += 1) u = f[r].replace(/#\S+/g, "").split("="), o[decodeURIComponent(u[0])] = void 0 === u[1] ? void 0 : decodeURIComponent(u[1]) || "";
                return o
            },
            isObject: function(n) { return "object" == typeof n && null !== n && n.constructor && n.constructor === Object },
            extend: function() {
                for (var r, e, i, t, s, u = [], f = arguments.length; f--;) u[f] = arguments[f];
                for (r = Object(u[0]), e = 1; e < u.length; e += 1)
                    if (i = u[e], null != i)
                        for (var h = Object.keys(Object(i)), o = 0, c = h.length; o < c; o += 1) t = h[o], s = Object.getOwnPropertyDescriptor(i, t), void 0 !== s && s.enumerable && (n.isObject(r[t]) && n.isObject(i[t]) ? n.extend(r[t], i[t]) : !n.isObject(r[t]) && n.isObject(i[t]) ? (r[t] = {}, n.extend(r[t], i[t])) : r[t] = i[t]);
                return r
            }
        },
        r = (b = u.createElement("div"), {
            touch: i.Modernizr && !0 === i.Modernizr.touch || !!(0 < i.navigator.maxTouchPoints || "ontouchstart" in i || i.DocumentTouch && u instanceof i.DocumentTouch),
            pointerEvents: !!(i.navigator.pointerEnabled || i.PointerEvent || "maxTouchPoints" in i.navigator),
            prefixedPointerEvents: !!i.navigator.msPointerEnabled,
            transition: (w = b.style, "transition" in w || "webkitTransition" in w || "MozTransition" in w),
            transforms3d: i.Modernizr && !0 === i.Modernizr.csstransforms3d || (a = b.style, "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a),
            flexbox: function() {
                for (var i = b.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n += 1)
                    if (t[n] in i) return !0;
                return !1
            }(),
            observer: "MutationObserver" in i || "WebkitMutationObserver" in i,
            passiveListener: function() {
                var n = !1,
                    t;
                try {
                    t = Object.defineProperty({}, "passive", { get: function() { n = !0 } });
                    i.addEventListener("testPassiveListener", null, t)
                } catch (n) {}
                return n
            }(),
            gestures: "ongesturestart" in i
        }),
        h = function(n) {
            void 0 === n && (n = {});
            var t = this;
            t.params = n;
            t.eventsListeners = {};
            t.params && t.params.on && Object.keys(t.params.on).forEach(function(n) { t.on(n, t.params.on[n]) })
        },
        lt = { components: { configurable: !0 } };
    h.prototype.on = function(n, t, i) {
        var r = this,
            u;
        return "function" != typeof t ? r : (u = i ? "unshift" : "push", n.split(" ").forEach(function(n) {
            r.eventsListeners[n] || (r.eventsListeners[n] = []);
            r.eventsListeners[n][u](t)
        }), r)
    };
    h.prototype.once = function(n, t, i) {
        var r = this;
        return "function" != typeof t ? r : r.on(n, function i() {
            for (var f = [], u = arguments.length; u--;) f[u] = arguments[u];
            t.apply(r, f);
            r.off(n, i)
        }, i)
    };
    h.prototype.off = function(n, t) { var i = this; return i.eventsListeners && n.split(" ").forEach(function(n) { void 0 === t ? i.eventsListeners[n] = [] : i.eventsListeners[n] && i.eventsListeners[n].length && i.eventsListeners[n].forEach(function(r, u) { r === t && i.eventsListeners[n].splice(u, 1) }) }), i };
    h.prototype.emit = function() {
        for (var i, u, f, t, n = [], r = arguments.length; r--;) n[r] = arguments[r];
        return t = this, t.eventsListeners && ("string" == typeof n[0] || Array.isArray(n[0]) ? (i = n[0], u = n.slice(1, n.length), f = t) : (i = n[0].events, u = n[0].data, f = n[0].context || t), (Array.isArray(i) ? i : i.split(" ")).forEach(function(n) {
            if (t.eventsListeners && t.eventsListeners[n]) {
                var i = [];
                t.eventsListeners[n].forEach(function(n) { i.push(n) });
                i.forEach(function(n) { n.apply(f, u) })
            }
        })), t
    };
    h.prototype.useModulesParams = function(t) {
        var i = this;
        i.modules && Object.keys(i.modules).forEach(function(r) {
            var u = i.modules[r];
            u.params && n.extend(t, u.params)
        })
    };
    h.prototype.useModules = function(n) {
        void 0 === n && (n = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var r = t.modules[i],
                u = n[i] || {};
            r.instance && Object.keys(r.instance).forEach(function(n) {
                var i = r.instance[n];
                t[n] = "function" == typeof i ? i.bind(t) : i
            });
            r.on && t.on && Object.keys(r.on).forEach(function(n) { t.on(n, r.on[n]) });
            r.create && r.create.bind(t)(u)
        })
    };
    lt.components.set = function(n) { this.use && this.use(n) };
    h.installModule = function(t) { for (var i, f, u = [], r = arguments.length - 1; 0 < r--;) u[r] = arguments[r + 1]; return i = this, i.prototype.modules || (i.prototype.modules = {}), f = t.name || Object.keys(i.prototype.modules).length + "_" + n.now(), (i.prototype.modules[f] = t).proto && Object.keys(t.proto).forEach(function(n) { i.prototype[n] = t.proto[n] }), t.static && Object.keys(t.static).forEach(function(n) { i[n] = t.static[n] }), t.install && t.install.apply(i, u), i };
    h.use = function(n) { for (var t, r = [], i = arguments.length - 1; 0 < i--;) r[i] = arguments[i + 1]; return t = this, Array.isArray(n) ? (n.forEach(function(n) { return t.installModule(n) }), t) : t.installModule.apply(t, [n].concat(r)) };
    Object.defineProperties(h, lt);
    var gt = {
            updateSize: function() {
                var i, r, t = this,
                    u = t.$el;
                i = void 0 !== t.params.width ? t.params.width : u[0].clientWidth;
                r = void 0 !== t.params.height ? t.params.height : u[0].clientHeight;
                0 === i && t.isHorizontal() || 0 === r && t.isVertical() || (i = i - parseInt(u.css("padding-left"), 10) - parseInt(u.css("padding-right"), 10), r = r - parseInt(u.css("padding-top"), 10) - parseInt(u.css("padding-bottom"), 10), n.extend(t, { width: i, height: r, size: t.isHorizontal() ? i : r }))
            },
            updateSlides: function() {
                var u = this,
                    t = u.params,
                    b = u.$wrapperEl,
                    v = u.size,
                    st = u.rtlTranslate,
                    ei = u.wrongRTL,
                    wt = u.virtual && t.virtual.enabled,
                    oi = wt ? u.virtual.slides.length : u.slides.length,
                    c = b.children("." + u.params.slideClass),
                    p = wt ? u.virtual.slides.length : c.length,
                    f = [],
                    k = [],
                    ht = [],
                    ct = t.slidesOffsetBefore,
                    ut, d, o, l, it, ft, rt, et, ot, pt;
                "function" == typeof ct && (ct = t.slidesOffsetBefore.call(u));
                ut = t.slidesOffsetAfter;
                "function" == typeof ut && (ut = t.slidesOffsetAfter.call(u));
                var si = u.snapGrid.length,
                    hi = u.snapGrid.length,
                    s = t.spaceBetween,
                    e = -ct,
                    lt = 0,
                    at = 0;
                if (void 0 !== v) {
                    "string" == typeof s && 0 <= s.indexOf("%") && (s = parseFloat(s.replace("%", "")) / 100 * v);
                    u.virtualSize = -s;
                    st ? c.css({ marginLeft: "", marginTop: "" }) : c.css({ marginRight: "", marginBottom: "" });
                    1 < t.slidesPerColumn && (d = Math.floor(p / t.slidesPerColumn) === p / u.params.slidesPerColumn ? p : Math.ceil(p / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (d = Math.max(d, t.slidesPerView * t.slidesPerColumn)));
                    for (var g, nt = t.slidesPerColumn, bt = d / nt, kt = Math.floor(p / t.slidesPerColumn), h = 0; h < p; h += 1) {
                        if (o = 0, l = c.eq(h), 1 < t.slidesPerColumn) {
                            var tt = void 0,
                                w = void 0,
                                y = void 0;
                            "column" === t.slidesPerColumnFill ? (y = h - (w = Math.floor(h / nt)) * nt, (kt < w || w === kt && y === nt - 1) && nt <= (y += 1) && (y = 0, w += 1), tt = w + y * d / nt, l.css({ "-webkit-box-ordinal-group": tt, "-moz-box-ordinal-group": tt, "-ms-flex-order": tt, "-webkit-order": tt, order: tt })) : w = h - (y = Math.floor(h / bt)) * bt;
                            l.css("margin-" + (u.isHorizontal() ? "top" : "left"), 0 !== y && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", w).attr("data-swiper-row", y)
                        }
                        if ("none" !== l.css("display")) {
                            if ("auto" === t.slidesPerView) {
                                var a = i.getComputedStyle(l[0], null),
                                    vt = l[0].style.transform,
                                    yt = l[0].style.webkitTransform;
                                if (vt && (l[0].style.transform = "none"), yt && (l[0].style.webkitTransform = "none"), t.roundLengths) o = u.isHorizontal() ? l.outerWidth(!0) : l.outerHeight(!0);
                                else if (u.isHorizontal()) {
                                    var dt = parseFloat(a.getPropertyValue("width")),
                                        ci = parseFloat(a.getPropertyValue("padding-left")),
                                        li = parseFloat(a.getPropertyValue("padding-right")),
                                        gt = parseFloat(a.getPropertyValue("margin-left")),
                                        ni = parseFloat(a.getPropertyValue("margin-right")),
                                        ti = a.getPropertyValue("box-sizing");
                                    o = ti && "border-box" === ti ? dt + gt + ni : dt + ci + li + gt + ni
                                } else {
                                    var ii = parseFloat(a.getPropertyValue("height")),
                                        ai = parseFloat(a.getPropertyValue("padding-top")),
                                        vi = parseFloat(a.getPropertyValue("padding-bottom")),
                                        ri = parseFloat(a.getPropertyValue("margin-top")),
                                        ui = parseFloat(a.getPropertyValue("margin-bottom")),
                                        fi = a.getPropertyValue("box-sizing");
                                    o = fi && "border-box" === fi ? ii + ri + ui : ii + ai + vi + ri + ui
                                }
                                vt && (l[0].style.transform = vt);
                                yt && (l[0].style.webkitTransform = yt);
                                t.roundLengths && (o = Math.floor(o))
                            } else o = (v - (t.slidesPerView - 1) * s) / t.slidesPerView, t.roundLengths && (o = Math.floor(o)), c[h] && (u.isHorizontal() ? c[h].style.width = o + "px" : c[h].style.height = o + "px");
                            c[h] && (c[h].swiperSlideSize = o);
                            ht.push(o);
                            t.centeredSlides ? (e = e + o / 2 + lt / 2 + s, 0 === lt && 0 !== h && (e = e - v / 2 - s), 0 === h && (e = e - v / 2 - s), Math.abs(e) < .001 && (e = 0), t.roundLengths && (e = Math.floor(e)), at % t.slidesPerGroup == 0 && f.push(e), k.push(e)) : (t.roundLengths && (e = Math.floor(e)), at % t.slidesPerGroup == 0 && f.push(e), k.push(e), e = e + o + s);
                            u.virtualSize += o + s;
                            lt = o;
                            at += 1
                        }
                    }
                    if (u.virtualSize = Math.max(u.virtualSize, v) + ut, st && ei && ("slide" === t.effect || "coverflow" === t.effect) && b.css({ width: u.virtualSize + t.spaceBetween + "px" }), r.flexbox && !t.setWrapperSize || (u.isHorizontal() ? b.css({ width: u.virtualSize + t.spaceBetween + "px" }) : b.css({ height: u.virtualSize + t.spaceBetween + "px" })), 1 < t.slidesPerColumn && (u.virtualSize = (o + t.spaceBetween) * d, u.virtualSize = Math.ceil(u.virtualSize / t.slidesPerColumn) - t.spaceBetween, u.isHorizontal() ? b.css({ width: u.virtualSize + t.spaceBetween + "px" }) : b.css({ height: u.virtualSize + t.spaceBetween + "px" }), t.centeredSlides)) {
                        for (g = [], it = 0; it < f.length; it += 1) ft = f[it], t.roundLengths && (ft = Math.floor(ft)), f[it] < u.virtualSize + f[0] && g.push(ft);
                        f = g
                    }
                    if (!t.centeredSlides) {
                        for (g = [], rt = 0; rt < f.length; rt += 1) et = f[rt], t.roundLengths && (et = Math.floor(et)), f[rt] <= u.virtualSize - v && g.push(et);
                        f = g;
                        1 < Math.floor(u.virtualSize - v) - Math.floor(f[f.length - 1]) && f.push(u.virtualSize - v)
                    }(0 === f.length && (f = [0]), 0 !== t.spaceBetween && (u.isHorizontal() ? st ? c.css({ marginLeft: s + "px" }) : c.css({ marginRight: s + "px" }) : c.css({ marginBottom: s + "px" })), t.centerInsufficientSlides) && (ot = 0, (ht.forEach(function(n) { ot += n + (t.spaceBetween ? t.spaceBetween : 0) }), (ot -= t.spaceBetween) < v) && (pt = (v - ot) / 2, f.forEach(function(n, t) { f[t] = n - pt }), k.forEach(function(n, t) { k[t] = n + pt })));
                    n.extend(u, { slides: c, snapGrid: f, slidesGrid: k, slidesSizesGrid: ht });
                    p !== oi && u.emit("slidesLengthChange");
                    f.length !== si && (u.params.watchOverflow && u.checkOverflow(), u.emit("snapGridLengthChange"));
                    k.length !== hi && u.emit("slidesGridLengthChange");
                    (t.watchSlidesProgress || t.watchSlidesVisibility) && u.updateSlidesOffset()
                }
            },
            updateAutoHeight: function(n) {
                var i, t = this,
                    r = [],
                    u = 0,
                    f, e;
                if ("number" == typeof n ? t.setTransition(n) : !0 === n && t.setTransition(t.params.speed), "auto" !== t.params.slidesPerView && 1 < t.params.slidesPerView)
                    for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                        if (f = t.activeIndex + i, f > t.slides.length) break;
                        r.push(t.slides.eq(f)[0])
                    } else r.push(t.slides.eq(t.activeIndex)[0]);
                for (i = 0; i < r.length; i += 1) void 0 !== r[i] && (e = r[i].offsetHeight, u = u < e ? e : u);
                u && t.$wrapperEl.css("height", u + "px")
            },
            updateSlidesOffset: function() { for (var t = this.slides, n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = this.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop },
            updateSlidesProgress: function(n) {
                var s, r, f, c, o, h;
                void 0 === n && (n = this && this.translate || 0);
                var i = this,
                    e = i.params,
                    u = i.slides,
                    l = i.rtlTranslate;
                if (0 !== u.length) {
                    for (void 0 === u[0].swiperSlideOffset && i.updateSlidesOffset(), s = -n, l && (s = n), u.removeClass(e.slideVisibleClass), i.visibleSlidesIndexes = [], i.visibleSlides = [], r = 0; r < u.length; r += 1) f = u[r], c = (s + (e.centeredSlides ? i.minTranslate() : 0) - f.swiperSlideOffset) / (f.swiperSlideSize + e.spaceBetween), e.watchSlidesVisibility && (o = -(s - f.swiperSlideOffset), h = o + i.slidesSizesGrid[r], (0 <= o && o < i.size || 0 < h && h <= i.size || o <= 0 && h >= i.size) && (i.visibleSlides.push(f), i.visibleSlidesIndexes.push(r), u.eq(r).addClass(e.slideVisibleClass))), f.progress = l ? -c : c;
                    i.visibleSlides = t(i.visibleSlides)
                }
            },
            updateProgress: function(t) {
                void 0 === t && (t = this && this.translate || 0);
                var i = this,
                    e = i.params,
                    o = i.maxTranslate() - i.minTranslate(),
                    f = i.progress,
                    r = i.isBeginning,
                    u = i.isEnd,
                    s = r,
                    h = u;
                0 === o ? u = r = !(f = 0) : (r = (f = (t - i.minTranslate()) / o) <= 0, u = 1 <= f);
                n.extend(i, { progress: f, isBeginning: r, isEnd: u });
                (e.watchSlidesProgress || e.watchSlidesVisibility) && i.updateSlidesProgress(t);
                r && !s && i.emit("reachBeginning toEdge");
                u && !h && i.emit("reachEnd toEdge");
                (s && !r || h && !u) && i.emit("fromEdge");
                i.emit("progress", f)
            },
            updateSlidesClasses: function() {
                var f, t = this,
                    e = t.slides,
                    n = t.params,
                    i = t.$wrapperEl,
                    o = t.activeIndex,
                    s = t.realIndex,
                    h = t.virtual && n.virtual.enabled,
                    r, u;
                e.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass);
                (f = h ? t.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + o + '"]') : e.eq(o)).addClass(n.slideActiveClass);
                n.loop && (f.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]').addClass(n.slideDuplicateActiveClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]').addClass(n.slideDuplicateActiveClass));
                r = f.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
                n.loop && 0 === r.length && (r = e.eq(0)).addClass(n.slideNextClass);
                u = f.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
                n.loop && 0 === u.length && (u = e.eq(-1)).addClass(n.slidePrevClass);
                n.loop && (r.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass), u.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + u.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + u.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass))
            },
            updateActiveIndex: function(t) {
                var o, i = this,
                    e = i.rtlTranslate ? i.translate : -i.translate,
                    f = i.slidesGrid,
                    s = i.snapGrid,
                    c = i.params,
                    l = i.activeIndex,
                    a = i.realIndex,
                    v = i.snapIndex,
                    u = t,
                    r, h;
                if (void 0 === u) {
                    for (r = 0; r < f.length; r += 1) void 0 !== f[r + 1] ? e >= f[r] && e < f[r + 1] - (f[r + 1] - f[r]) / 2 ? u = r : e >= f[r] && e < f[r + 1] && (u = r + 1) : e >= f[r] && (u = r);
                    c.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
                }((o = 0 <= s.indexOf(e) ? s.indexOf(e) : Math.floor(u / c.slidesPerGroup)) >= s.length && (o = s.length - 1), u !== l) ? (h = parseInt(i.slides.eq(u).attr("data-swiper-slide-index") || u, 10), n.extend(i, { snapIndex: o, realIndex: h, previousIndex: l, activeIndex: u }), i.emit("activeIndexChange"), i.emit("snapIndexChange"), a !== h && i.emit("realIndexChange"), i.emit("slideChange")) : o !== v && (i.snapIndex = o, i.emit("snapIndexChange"))
            },
            updateClickedSlide: function(n) {
                var i = this,
                    f = i.params,
                    r = t(n.target).closest("." + f.slideClass)[0],
                    e = !1,
                    u;
                if (r)
                    for (u = 0; u < i.slides.length; u += 1) i.slides[u] === r && (e = !0);
                if (!r || !e) return i.clickedSlide = void 0, void(i.clickedIndex = void 0);
                i.clickedSlide = r;
                i.clickedIndex = i.virtual && i.params.virtual.enabled ? parseInt(t(r).attr("data-swiper-slide-index"), 10) : t(r).index();
                f.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
            }
        },
        ni = {
            getTranslate: function(t) {
                var i;
                void 0 === t && (t = this.isHorizontal() ? "x" : "y");
                var f = this.params,
                    r = this.rtlTranslate,
                    u = this.translate,
                    e = this.$wrapperEl;
                return f.virtualTranslate ? r ? -u : u : (i = n.getTranslate(e[0], t), r && (i = -i), i || 0)
            },
            setTranslate: function(n, t) {
                var i = this,
                    h = i.rtlTranslate,
                    o = i.params,
                    s = i.$wrapperEl,
                    c = i.progress,
                    u = 0,
                    f = 0,
                    e;
                i.isHorizontal() ? u = h ? -n : n : f = n;
                o.roundLengths && (u = Math.floor(u), f = Math.floor(f));
                o.virtualTranslate || (r.transforms3d ? s.transform("translate3d(" + u + "px, " + f + "px, 0px)") : s.transform("translate(" + u + "px, " + f + "px)"));
                i.previousTranslate = i.translate;
                i.translate = i.isHorizontal() ? u : f;
                e = i.maxTranslate() - i.minTranslate();
                (0 === e ? 0 : (n - i.minTranslate()) / e) !== c && i.updateProgress(n);
                i.emit("setTranslate", i.translate, t)
            },
            minTranslate: function() { return -this.snapGrid[0] },
            maxTranslate: function() { return -this.snapGrid[this.snapGrid.length - 1] }
        },
        ti = {
            setTransition: function(n, t) {
                this.$wrapperEl.transition(n);
                this.emit("setTransition", n, t)
            },
            transitionStart: function(n, t) {
                var r;
                void 0 === n && (n = !0);
                var i = this,
                    u = i.activeIndex,
                    e = i.params,
                    f = i.previousIndex;
                if (e.autoHeight && i.updateAutoHeight(), r = t, r || (r = f < u ? "next" : u < f ? "prev" : "reset"), i.emit("transitionStart"), n && u !== f) {
                    if ("reset" === r) return void i.emit("slideResetTransitionStart");
                    i.emit("slideChangeTransitionStart");
                    "next" === r ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
                }
            },
            transitionEnd: function(n, t) {
                var r;
                void 0 === n && (n = !0);
                var i = this,
                    u = i.activeIndex,
                    f = i.previousIndex;
                if (i.animating = !1, i.setTransition(0), r = t, r || (r = f < u ? "next" : u < f ? "prev" : "reset"), i.emit("transitionEnd"), n && u !== f) {
                    if ("reset" === r) return void i.emit("slideResetTransitionEnd");
                    i.emit("slideChangeTransitionEnd");
                    "next" === r ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
                }
            }
        },
        ii = {
            slideTo: function(n, t, i, u) {
                var f, e, a, s, o, l;
                void 0 === n && (n = 0);
                void 0 === t && (t = this.params.speed);
                void 0 === i && (i = !0);
                f = this;
                e = n;
                e < 0 && (e = 0);
                var h = f.params,
                    v = f.snapGrid,
                    y = f.slidesGrid,
                    w = f.previousIndex,
                    c = f.activeIndex,
                    p = f.rtlTranslate;
                if (f.animating && h.preventInteractionOnTransition) return !1;
                if (a = Math.floor(e / h.slidesPerGroup), a >= v.length && (a = v.length - 1), (c || h.initialSlide || 0) === (w || 0) && i && f.emit("beforeSlideChangeStart"), o = -v[a], f.updateProgress(o), h.normalizeSlideIndex)
                    for (l = 0; l < y.length; l += 1) - Math.floor(100 * o) >= Math.floor(100 * y[l]) && (e = l);
                return f.initialized && e !== c && (!f.allowSlideNext && o < f.translate && o < f.minTranslate() || !f.allowSlidePrev && o > f.translate && o > f.maxTranslate() && (c || 0) !== e) ? !1 : (s = c < e ? "next" : e < c ? "prev" : "reset", p && -o === f.translate || !p && o === f.translate ? (f.updateActiveIndex(e), h.autoHeight && f.updateAutoHeight(), f.updateSlidesClasses(), "slide" !== h.effect && f.setTranslate(o), "reset" !== s && (f.transitionStart(i, s), f.transitionEnd(i, s)), !1) : (0 !== t && r.transition ? (f.setTransition(t), f.setTranslate(o), f.updateActiveIndex(e), f.updateSlidesClasses(), f.emit("beforeTransitionStart", t, u), f.transitionStart(i, s), f.animating || (f.animating = !0, f.onSlideToWrapperTransitionEnd || (f.onSlideToWrapperTransitionEnd = function(n) { f && !f.destroyed && n.target === this && (f.$wrapperEl[0].removeEventListener("transitionend", f.onSlideToWrapperTransitionEnd), f.$wrapperEl[0].removeEventListener("webkitTransitionEnd", f.onSlideToWrapperTransitionEnd), f.onSlideToWrapperTransitionEnd = null, delete f.onSlideToWrapperTransitionEnd, f.transitionEnd(i, s)) }), f.$wrapperEl[0].addEventListener("transitionend", f.onSlideToWrapperTransitionEnd), f.$wrapperEl[0].addEventListener("webkitTransitionEnd", f.onSlideToWrapperTransitionEnd))) : (f.setTransition(0), f.setTranslate(o), f.updateActiveIndex(e), f.updateSlidesClasses(), f.emit("beforeTransitionStart", t, u), f.transitionStart(i, s), f.transitionEnd(i, s)), !0))
            },
            slideToLoop: function(n, t, i, r) {
                void 0 === n && (n = 0);
                void 0 === t && (t = this.params.speed);
                void 0 === i && (i = !0);
                var u = n;
                return this.params.loop && (u += this.loopedSlides), this.slideTo(u, t, i, r)
            },
            slideNext: function(n, t, i) {
                void 0 === n && (n = this.params.speed);
                void 0 === t && (t = !0);
                var r = this,
                    u = r.params,
                    f = r.animating;
                return u.loop ? !f && (r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft, r.slideTo(r.activeIndex + u.slidesPerGroup, n, t, i)) : r.slideTo(r.activeIndex + u.slidesPerGroup, n, t, i)
            },
            slidePrev: function(n, t, i) {
                function f(n) { return n < 0 ? -Math.floor(Math.abs(n)) : Math.floor(n) }
                void 0 === n && (n = this.params.speed);
                void 0 === t && (t = !0);
                var r = this,
                    l = r.params,
                    a = r.animating,
                    u = r.snapGrid,
                    o = r.slidesGrid,
                    v = r.rtlTranslate;
                if (l.loop) {
                    if (a) return !1;
                    r.loopFix();
                    r._clientLeft = r.$wrapperEl[0].clientLeft
                }
                var e, s = f(v ? r.translate : -r.translate),
                    h = u.map(function(n) { return f(n) }),
                    c = (o.map(function(n) { return f(n) }), u[h.indexOf(s)], u[h.indexOf(s) - 1]);
                return void 0 !== c && (e = o.indexOf(c)) < 0 && (e = r.activeIndex - 1), r.slideTo(e, n, t, i)
            },
            slideReset: function(n, t, i) { return void 0 === n && (n = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, n, t, i) },
            slideToClosest: function(n, t, i) {
                var o, e;
                void 0 === n && (n = this.params.speed);
                void 0 === t && (t = !0);
                var r = this,
                    u = r.activeIndex,
                    f = Math.floor(u / r.params.slidesPerGroup);
                return f < r.snapGrid.length - 1 && (o = r.rtlTranslate ? r.translate : -r.translate, e = r.snapGrid[f], (r.snapGrid[f + 1] - e) / 2 < o - e && (u = r.params.slidesPerGroup)), r.slideTo(u, n, t, i)
            },
            slideToClickedSlide: function() {
                var f, i = this,
                    u = i.params,
                    o = i.$wrapperEl,
                    e = "auto" === u.slidesPerView ? i.slidesPerViewDynamic() : u.slidesPerView,
                    r = i.clickedIndex;
                if (u.loop) {
                    if (i.animating) return;
                    f = parseInt(t(i.clickedSlide).attr("data-swiper-slide-index"), 10);
                    u.centeredSlides ? r < i.loopedSlides - e / 2 || r > i.slides.length - i.loopedSlides + e / 2 ? (i.loopFix(), r = o.children("." + u.slideClass + '[data-swiper-slide-index="' + f + '"]:not(.' + u.slideDuplicateClass + ")").eq(0).index(), n.nextTick(function() { i.slideTo(r) })) : i.slideTo(r) : r > i.slides.length - e ? (i.loopFix(), r = o.children("." + u.slideClass + '[data-swiper-slide-index="' + f + '"]:not(.' + u.slideDuplicateClass + ")").eq(0).index(), n.nextTick(function() { i.slideTo(r) })) : i.slideTo(r)
                } else i.slideTo(r)
            }
        },
        ri = {
            loopCreate: function() {
                var r = this,
                    n = r.params,
                    f = r.$wrapperEl,
                    i, c, l, a, e, o, s, h;
                if (f.children("." + n.slideClass + "." + n.slideDuplicateClass).remove(), i = f.children("." + n.slideClass), n.loopFillGroupWithBlank && (c = n.slidesPerGroup - i.length % n.slidesPerGroup, c !== n.slidesPerGroup)) {
                    for (l = 0; l < c; l += 1) a = t(u.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass), f.append(a);
                    i = f.children("." + n.slideClass)
                }
                for ("auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = i.length), r.loopedSlides = parseInt(n.loopedSlides || n.slidesPerView, 10), r.loopedSlides += n.loopAdditionalSlides, r.loopedSlides > i.length && (r.loopedSlides = i.length), e = [], o = [], i.each(function(n, u) {
                        var f = t(u);
                        n < r.loopedSlides && o.push(u);
                        n < i.length && n >= i.length - r.loopedSlides && e.push(u);
                        f.attr("data-swiper-slide-index", n)
                    }), s = 0; s < o.length; s += 1) f.append(t(o[s].cloneNode(!0)).addClass(n.slideDuplicateClass));
                for (h = e.length - 1; 0 <= h; h -= 1) f.prepend(t(e[h].cloneNode(!0)).addClass(n.slideDuplicateClass))
            },
            loopFix: function() {
                var i, n = this,
                    o = n.params,
                    r = n.activeIndex,
                    f = n.slides,
                    t = n.loopedSlides,
                    s = n.allowSlidePrev,
                    h = n.allowSlideNext,
                    c = n.snapGrid,
                    e = n.rtlTranslate,
                    u;
                n.allowSlidePrev = !0;
                n.allowSlideNext = !0;
                u = -c[r] - n.getTranslate();
                r < t ? (i = f.length - 3 * t + r, i += t, n.slideTo(i, 0, !1, !0) && 0 !== u && n.setTranslate((e ? -n.translate : n.translate) - u)) : ("auto" === o.slidesPerView && 2 * t <= r || r >= f.length - t) && (i = -f.length + r + t, i += t, n.slideTo(i, 0, !1, !0) && 0 !== u && n.setTranslate((e ? -n.translate : n.translate) - u));
                n.allowSlidePrev = s;
                n.allowSlideNext = h
            },
            loopDestroy: function() {
                var t = this.$wrapperEl,
                    n = this.params,
                    i = this.slides;
                t.children("." + n.slideClass + "." + n.slideDuplicateClass + ",." + n.slideClass + "." + n.slideBlankClass).remove();
                i.removeAttr("data-swiper-slide-index")
            }
        },
        ui = {
            setGrabCursor: function(n) {
                if (!(r.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                    var t = this.el;
                    t.style.cursor = "move";
                    t.style.cursor = n ? "-webkit-grabbing" : "-webkit-grab";
                    t.style.cursor = n ? "-moz-grabbin" : "-moz-grab";
                    t.style.cursor = n ? "grabbing" : "grab"
                }
            },
            unsetGrabCursor: function() { r.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "") }
        },
        fi = {
            appendSlide: function(n) {
                var t = this,
                    f = t.$wrapperEl,
                    u = t.params,
                    i;
                if (u.loop && t.loopDestroy(), "object" == typeof n && "length" in n)
                    for (i = 0; i < n.length; i += 1) n[i] && f.append(n[i]);
                else f.append(n);
                u.loop && t.loopCreate();
                u.observer && r.observer || t.update()
            },
            prependSlide: function(n) {
                var t = this,
                    u = t.params,
                    e = t.$wrapperEl,
                    o = t.activeIndex,
                    f, i;
                if (u.loop && t.loopDestroy(), f = o + 1, "object" == typeof n && "length" in n) {
                    for (i = 0; i < n.length; i += 1) n[i] && e.prepend(n[i]);
                    f = o + n.length
                } else e.prepend(n);
                u.loop && t.loopCreate();
                u.observer && r.observer || t.update();
                t.slideTo(f, 0, !1)
            },
            addSlide: function(n, t) {
                var i = this,
                    o = i.$wrapperEl,
                    f = i.params,
                    u = i.activeIndex,
                    h, v, e, s;
                if (f.loop && (u -= i.loopedSlides, i.loopDestroy(), i.slides = o.children("." + f.slideClass)), h = i.slides.length, n <= 0) i.prependSlide(t);
                else if (h <= n) i.appendSlide(t);
                else {
                    for (var c = n < u ? u + 1 : u, l = [], a = h - 1; n <= a; a -= 1) v = i.slides.eq(a), v.remove(), l.unshift(v);
                    if ("object" == typeof t && "length" in t) {
                        for (e = 0; e < t.length; e += 1) t[e] && o.append(t[e]);
                        c = n < u ? u + t.length : u
                    } else o.append(t);
                    for (s = 0; s < l.length; s += 1) o.append(l[s]);
                    f.loop && i.loopCreate();
                    f.observer && r.observer || i.update();
                    f.loop ? i.slideTo(c + i.loopedSlides, 0, !1) : i.slideTo(c, 0, !1)
                }
            },
            removeSlide: function(n) {
                var t = this,
                    f = t.params,
                    s = t.$wrapperEl,
                    o = t.activeIndex,
                    u, i, e;
                if (f.loop && (o -= t.loopedSlides, t.loopDestroy(), t.slides = s.children("." + f.slideClass)), i = o, "object" == typeof n && "length" in n) {
                    for (e = 0; e < n.length; e += 1) u = n[e], t.slides[u] && t.slides.eq(u).remove(), u < i && (i -= 1);
                    i = Math.max(i, 0)
                } else u = n, t.slides[u] && t.slides.eq(u).remove(), u < i && (i -= 1), i = Math.max(i, 0);
                f.loop && t.loopCreate();
                f.observer && r.observer || t.update();
                f.loop ? t.slideTo(i + t.loopedSlides, 0, !1) : t.slideTo(i, 0, !1)
            },
            removeAllSlides: function() {
                for (var t = [], n = 0; n < this.slides.length; n += 1) t.push(n);
                this.removeSlide(t)
            }
        },
        e = function() {
            var t = i.navigator.userAgent,
                n = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: i.cordova || i.phonegap, phonegap: i.cordova || i.phonegap },
                s = t.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                c = t.match(/(Android);?[\s\/]+([\d.]+)?/),
                f = t.match(/(iPad).*OS\s([\d_]+)/),
                r = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                e = !f && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                o, h;
            return (s && (n.os = "windows", n.osVersion = s[2], n.windows = !0), c && !s && (n.os = "android", n.osVersion = c[2], n.android = !0, n.androidChrome = 0 <= t.toLowerCase().indexOf("chrome")), (f || e || r) && (n.os = "ios", n.ios = !0), e && !r && (n.osVersion = e[2].replace(/_/g, "."), n.iphone = !0), f && (n.osVersion = f[2].replace(/_/g, "."), n.ipad = !0), r && (n.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, n.iphone = !0), n.ios && n.osVersion && 0 <= t.indexOf("Version/") && "10" === n.osVersion.split(".")[0] && (n.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]), n.desktop = !(n.os || n.android || n.webView), n.webView = (e || f || r) && t.match(/.*AppleWebKit(?!.*Safari)/i), n.os && "ios" === n.os) && (o = n.osVersion.split("."), h = u.querySelector('meta[name="viewport"]'), n.minimalUi = !n.webView && (r || e) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && h && 0 <= h.getAttribute("content").indexOf("minimal-ui")), n.pixelRatio = i.devicePixelRatio || 1, n
        }();
    var ei = {
            attachEvents: function() {
                var f = this,
                    o = f.params,
                    s = f.touchEvents,
                    a = f.el,
                    v = f.wrapperEl,
                    h, c, l;
                f.onTouchStart = function(r) {
                    var o = this,
                        s = o.touchEventsData,
                        e = o.params,
                        h = o.touches,
                        f, l, v;
                    if ((!o.animating || !e.preventInteractionOnTransition) && (f = r, f.originalEvent && (f = f.originalEvent), s.isTouchEvent = "touchstart" === f.type, (s.isTouchEvent || !("which" in f) || 3 !== f.which) && !(!s.isTouchEvent && "button" in f && 0 < f.button || s.isTouched && s.isMoved)))
                        if (e.noSwiping && t(f.target).closest(e.noSwipingSelector ? e.noSwipingSelector : "." + e.noSwipingClass)[0]) o.allowClick = !0;
                        else if (!e.swipeHandler || t(f).closest(e.swipeHandler)[0]) {
                        h.currentX = "touchstart" === f.type ? f.targetTouches[0].pageX : f.pageX;
                        h.currentY = "touchstart" === f.type ? f.targetTouches[0].pageY : f.pageY;
                        var c = h.currentX,
                            y = h.currentY,
                            p = e.edgeSwipeDetection || e.iOSEdgeSwipeDetection,
                            a = e.edgeSwipeThreshold || e.iOSEdgeSwipeThreshold;
                        p && (c <= a || c >= i.screen.width - a) || ((n.extend(s, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), h.startX = c, h.startY = y, s.touchStartTime = n.now(), o.allowClick = !0, o.updateSize(), o.swipeDirection = void 0, 0 < e.threshold && (s.allowThresholdMove = !1), "touchstart" !== f.type) && (l = !0, t(f.target).is(s.formElements) && (l = !1), u.activeElement && t(u.activeElement).is(s.formElements) && u.activeElement !== f.target && u.activeElement.blur(), v = l && o.allowTouchMove && e.touchStartPreventDefault, (e.touchStartForcePreventDefault || v) && f.preventDefault()), o.emit("touchStart", f))
                    }
                }.bind(f);
                f.onTouchMove = function(i) {
                    var f = this,
                        r = f.touchEventsData,
                        s = f.params,
                        e = f.touches,
                        b = f.rtlTranslate,
                        o = i,
                        c, l, w, a, v, h, y, p;
                    if (o.originalEvent && (o = o.originalEvent), r.isTouched) {
                        if (!r.isTouchEvent || "mousemove" !== o.type) {
                            if (c = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX, l = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY, o.preventedByNestedSwiper) return e.startX = c, void(e.startY = l);
                            if (!f.allowTouchMove) return f.allowClick = !1, void(r.isTouched && (n.extend(e, { startX: c, startY: l, currentX: c, currentY: l }), r.touchStartTime = n.now()));
                            if (r.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                                if (f.isVertical()) { if (l < e.startY && f.translate <= f.maxTranslate() || l > e.startY && f.translate >= f.minTranslate()) return r.isTouched = !1, void(r.isMoved = !1) } else if (c < e.startX && f.translate <= f.maxTranslate() || c > e.startX && f.translate >= f.minTranslate()) return;
                            if (r.isTouchEvent && u.activeElement && o.target === u.activeElement && t(o.target).is(r.formElements)) return r.isMoved = !0, void(f.allowClick = !1);
                            if ((r.allowTouchCallbacks && f.emit("touchMove", o), !(o.targetTouches && 1 < o.targetTouches.length)) && (e.currentX = c, e.currentY = l, a = e.currentX - e.startX, v = e.currentY - e.startY, !(f.params.threshold && Math.sqrt(Math.pow(a, 2) + Math.pow(v, 2)) < f.params.threshold)))
                                if (void 0 === r.isScrolling && (f.isHorizontal() && e.currentY === e.startY || f.isVertical() && e.currentX === e.startX ? r.isScrolling = !1 : 25 <= a * a + v * v && (w = 180 * Math.atan2(Math.abs(v), Math.abs(a)) / Math.PI, r.isScrolling = f.isHorizontal() ? w > s.touchAngle : 90 - w > s.touchAngle)), r.isScrolling && f.emit("touchMoveOpposite", o), void 0 === r.startMoving && (e.currentX === e.startX && e.currentY === e.startY || (r.startMoving = !0)), r.isScrolling) r.isTouched = !1;
                                else if (r.startMoving) {
                                if (f.allowClick = !1, o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), r.isMoved || (s.loop && f.loopFix(), r.startTranslate = f.getTranslate(), f.setTransition(0), f.animating && f.$wrapperEl.trigger("webkitTransitionEnd transitionend"), r.allowMomentumBounce = !1, !s.grabCursor || !0 !== f.allowSlideNext && !0 !== f.allowSlidePrev || f.setGrabCursor(!0), f.emit("sliderFirstMove", o)), f.emit("sliderMove", o), r.isMoved = !0, h = f.isHorizontal() ? a : v, e.diff = h, h *= s.touchRatio, b && (h = -h), f.swipeDirection = 0 < h ? "prev" : "next", r.currentTranslate = h + r.startTranslate, y = !0, p = s.resistanceRatio, s.touchReleaseOnEdges && (p = 0), 0 < h && r.currentTranslate > f.minTranslate() ? (y = !1, s.resistance && (r.currentTranslate = f.minTranslate() - 1 + Math.pow(-f.minTranslate() + r.startTranslate + h, p))) : h < 0 && r.currentTranslate < f.maxTranslate() && (y = !1, s.resistance && (r.currentTranslate = f.maxTranslate() + 1 - Math.pow(f.maxTranslate() - r.startTranslate - h, p))), y && (o.preventedByNestedSwiper = !0), !f.allowSlideNext && "next" === f.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !f.allowSlidePrev && "prev" === f.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), 0 < s.threshold) { if (!(Math.abs(h) > s.threshold || r.allowThresholdMove)) return void(r.currentTranslate = r.startTranslate); if (!r.allowThresholdMove) return r.allowThresholdMove = !0, e.startX = e.currentX, e.startY = e.currentY, r.currentTranslate = r.startTranslate, void(e.diff = f.isHorizontal() ? e.currentX - e.startX : e.currentY - e.startY) }
                                s.followFinger && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (f.updateActiveIndex(), f.updateSlidesClasses()), s.freeMode && (0 === r.velocities.length && r.velocities.push({ position: e[f.isHorizontal() ? "startX" : "startY"], time: r.touchStartTime }), r.velocities.push({ position: e[f.isHorizontal() ? "currentX" : "currentY"], time: n.now() })), f.updateProgress(r.currentTranslate), f.setTranslate(r.currentTranslate))
                            }
                        }
                    } else r.startMoving && r.isScrolling && f.emit("touchMoveOpposite", o)
                }.bind(f);
                f.onTouchEnd = function(t) {
                    var i = this,
                        r = i.touchEventsData,
                        u = i.params,
                        ot = i.touches,
                        g = i.rtlTranslate,
                        nt = i.$wrapperEl,
                        e = i.slidesGrid,
                        h = i.snapGrid,
                        c = t,
                        l, w, a, k, it, d, v, y, p, ut;
                    if (c.originalEvent && (c = c.originalEvent), r.allowTouchCallbacks && i.emit("touchEnd", c), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && u.grabCursor && i.setGrabCursor(!1), r.isMoved = !1, void(r.startMoving = !1);
                    if (u.grabCursor && r.isMoved && r.isTouched && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!1), w = n.now(), a = w - r.touchStartTime, i.allowClick && (i.updateClickedSlide(c), i.emit("tap", c), a < 300 && 300 < w - r.lastClickTime && (r.clickTimeout && clearTimeout(r.clickTimeout), r.clickTimeout = n.nextTick(function() { i && !i.destroyed && i.emit("click", c) }, 300)), a < 300 && w - r.lastClickTime < 300 && (r.clickTimeout && clearTimeout(r.clickTimeout), i.emit("doubleTap", c))), r.lastClickTime = n.now(), n.nextTick(function() { i.destroyed || (i.allowClick = !0) }), !r.isTouched || !r.isMoved || !i.swipeDirection || 0 === ot.diff || r.currentTranslate === r.startTranslate) return r.isTouched = !1, r.isMoved = !1, void(r.startMoving = !1);
                    if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, l = u.followFinger ? g ? i.translate : -i.translate : -r.currentTranslate, u.freeMode) {
                        if (l < -i.minTranslate()) return void i.slideTo(i.activeIndex);
                        if (l > -i.maxTranslate()) return void(i.slides.length < h.length ? i.slideTo(h.length - 1) : i.slideTo(i.slides.length - 1));
                        if (u.freeModeMomentum) {
                            if (1 < r.velocities.length) {
                                var tt = r.velocities.pop(),
                                    ft = r.velocities.pop(),
                                    st = tt.position - ft.position,
                                    et = tt.time - ft.time;
                                i.velocity = st / et;
                                i.velocity /= 2;
                                Math.abs(i.velocity) < u.freeModeMinimumVelocity && (i.velocity = 0);
                                (150 < et || 300 < n.now() - tt.time) && (i.velocity = 0)
                            } else i.velocity = 0;
                            i.velocity *= u.freeModeMomentumVelocityRatio;
                            r.velocities.length = 0;
                            var b = 1e3 * u.freeModeMomentumRatio,
                                ht = i.velocity * b,
                                f = i.translate + ht;
                            if (g && (f = -f), d = !1, v = 20 * Math.abs(i.velocity) * u.freeModeMomentumBounceRatio, f < i.maxTranslate()) u.freeModeMomentumBounce ? (f + i.maxTranslate() < -v && (f = i.maxTranslate() - v), k = i.maxTranslate(), d = !0, r.allowMomentumBounce = !0) : f = i.maxTranslate(), u.loop && u.centeredSlides && (it = !0);
                            else if (f > i.minTranslate()) u.freeModeMomentumBounce ? (f - i.minTranslate() > v && (f = i.minTranslate() + v), k = i.minTranslate(), d = !0, r.allowMomentumBounce = !0) : f = i.minTranslate(), u.loop && u.centeredSlides && (it = !0);
                            else if (u.freeModeSticky) {
                                for (p = 0; p < h.length; p += 1)
                                    if (h[p] > -f) { y = p; break }
                                f = -(f = Math.abs(h[y] - f) < Math.abs(h[y - 1] - f) || "next" === i.swipeDirection ? h[y] : h[y - 1])
                            }
                            if (it && i.once("transitionEnd", function() { i.loopFix() }), 0 !== i.velocity) b = g ? Math.abs((-f - i.translate) / i.velocity) : Math.abs((f - i.translate) / i.velocity);
                            else if (u.freeModeSticky) return void i.slideToClosest();
                            u.freeModeMomentumBounce && d ? (i.updateProgress(k), i.setTransition(b), i.setTranslate(f), i.transitionStart(!0, i.swipeDirection), i.animating = !0, nt.transitionEnd(function() { i && !i.destroyed && r.allowMomentumBounce && (i.emit("momentumBounce"), i.setTransition(u.speed), i.setTranslate(k), nt.transitionEnd(function() { i && !i.destroyed && i.transitionEnd() })) })) : i.velocity ? (i.updateProgress(f), i.setTransition(b), i.setTranslate(f), i.transitionStart(!0, i.swipeDirection), i.animating || (i.animating = !0, nt.transitionEnd(function() { i && !i.destroyed && i.transitionEnd() }))) : i.updateProgress(f);
                            i.updateActiveIndex();
                            i.updateSlidesClasses()
                        } else if (u.freeModeSticky) return void i.slideToClosest();
                        (!u.freeModeMomentum || a >= u.longSwipesMs) && (i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses())
                    } else { for (var o = 0, rt = i.slidesSizesGrid[0], s = 0; s < e.length; s += u.slidesPerGroup) void 0 !== e[s + u.slidesPerGroup] ? l >= e[s] && l < e[s + u.slidesPerGroup] && (rt = e[(o = s) + u.slidesPerGroup] - e[s]) : l >= e[s] && (o = s, rt = e[e.length - 1] - e[e.length - 2]); if (ut = (l - e[o]) / rt, a > u.longSwipesMs) { if (!u.longSwipes) return void i.slideTo(i.activeIndex); "next" === i.swipeDirection && (ut >= u.longSwipesRatio ? i.slideTo(o + u.slidesPerGroup) : i.slideTo(o)); "prev" === i.swipeDirection && (ut > 1 - u.longSwipesRatio ? i.slideTo(o + u.slidesPerGroup) : i.slideTo(o)) } else { if (!u.shortSwipes) return void i.slideTo(i.activeIndex); "next" === i.swipeDirection && i.slideTo(o + u.slidesPerGroup); "prev" === i.swipeDirection && i.slideTo(o) } }
                }.bind(f);
                f.onClick = function(n) { this.allowClick || (this.params.preventClicks && n.preventDefault(), this.params.preventClicksPropagation && this.animating && (n.stopPropagation(), n.stopImmediatePropagation())) }.bind(f);
                h = "container" === o.touchEventsTarget ? a : v;
                c = !!o.nested;
                !r.touch && (r.pointerEvents || r.prefixedPointerEvents) ? (h.addEventListener(s.start, f.onTouchStart, !1), u.addEventListener(s.move, f.onTouchMove, c), u.addEventListener(s.end, f.onTouchEnd, !1)) : (r.touch && (l = !("touchstart" !== s.start || !r.passiveListener || !o.passiveListeners) && { passive: !0, capture: !1 }, h.addEventListener(s.start, f.onTouchStart, l), h.addEventListener(s.move, f.onTouchMove, r.passiveListener ? { passive: !1, capture: c } : c), h.addEventListener(s.end, f.onTouchEnd, l)), (o.simulateTouch && !e.ios && !e.android || o.simulateTouch && !r.touch && e.ios) && (h.addEventListener("mousedown", f.onTouchStart, !1), u.addEventListener("mousemove", f.onTouchMove, c), u.addEventListener("mouseup", f.onTouchEnd, !1)));
                (o.preventClicks || o.preventClicksPropagation) && h.addEventListener("click", f.onClick, !0);
                f.on(e.ios || e.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", at, !0)
            },
            detachEvents: function() {
                var n = this,
                    t = n.params,
                    i = n.touchEvents,
                    h = n.el,
                    c = n.wrapperEl,
                    f = "container" === t.touchEventsTarget ? h : c,
                    o = !!t.nested,
                    s;
                !r.touch && (r.pointerEvents || r.prefixedPointerEvents) ? (f.removeEventListener(i.start, n.onTouchStart, !1), u.removeEventListener(i.move, n.onTouchMove, o), u.removeEventListener(i.end, n.onTouchEnd, !1)) : (r.touch && (s = !("onTouchStart" !== i.start || !r.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 }, f.removeEventListener(i.start, n.onTouchStart, s), f.removeEventListener(i.move, n.onTouchMove, o), f.removeEventListener(i.end, n.onTouchEnd, s)), (t.simulateTouch && !e.ios && !e.android || t.simulateTouch && !r.touch && e.ios) && (f.removeEventListener("mousedown", n.onTouchStart, !1), u.removeEventListener("mousemove", n.onTouchMove, o), u.removeEventListener("mouseup", n.onTouchEnd, !1)));
                (t.preventClicks || t.preventClicksPropagation) && f.removeEventListener("click", n.onClick, !0);
                n.off(e.ios || e.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", at)
            }
        },
        k, oi = {
            setBreakpoint: function() {
                var t = this,
                    h = t.activeIndex,
                    c = t.initialized,
                    o = t.loopedSlides,
                    f, i, r, u, e, s;
                void 0 === o && (o = 0);
                f = t.params;
                i = f.breakpoints;
                i && (!i || 0 !== Object.keys(i).length) && (r = t.getBreakpoint(i), r && t.currentBreakpoint !== r && (u = r in i ? i[r] : void 0, u && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(n) {
                    var t = u[n];
                    void 0 !== t && (u[n] = "slidesPerView" !== n || "AUTO" !== t && "auto" !== t ? "slidesPerView" === n ? parseFloat(t) : parseInt(t, 10) : "auto")
                }), e = u || t.originalParams, s = f.loop && e.slidesPerView !== f.slidesPerView, n.extend(t.params, e), n.extend(t, { allowTouchMove: t.params.allowTouchMove, allowSlideNext: t.params.allowSlideNext, allowSlidePrev: t.params.allowSlidePrev }), t.currentBreakpoint = r, s && c && (t.loopDestroy(), t.loopCreate(), t.updateSlides(), t.slideTo(h - o + t.loopedSlides, 0, !1)), t.emit("breakpoint", e)))
            },
            getBreakpoint: function(n) { var t, r, f, u; if (n) { for (t = !1, r = [], Object.keys(n).forEach(function(n) { r.push(n) }), r.sort(function(n, t) { return parseInt(n, 10) - parseInt(t, 10) }), f = 0; f < r.length; f += 1) u = r[f], this.params.breakpointsInverse ? u <= i.innerWidth && (t = u) : u >= i.innerWidth && !t && (t = u); return t || "max" } }
        },
        v = { isIE: !!i.navigator.userAgent.match(/Trident/g) || !!i.navigator.userAgent.match(/MSIE/g), isEdge: !!i.navigator.userAgent.match(/Edge/g), isSafari: (k = i.navigator.userAgent.toLowerCase(), 0 <= k.indexOf("safari") && k.indexOf("chrome") < 0 && k.indexOf("android") < 0), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent) },
        vt = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, preventInteractionOnTransition: !1, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, breakpointsInverse: !1, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, centerInsufficientSlides: !1, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !0, touchStartPreventDefault: !0, touchStartForcePreventDefault: !1, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0 },
        ft = {
            update: gt,
            translate: ni,
            transition: ti,
            slide: ii,
            loop: ri,
            grabCursor: ui,
            manipulation: fi,
            events: ei,
            breakpoints: oi,
            checkOverflow: {
                checkOverflow: function() {
                    var n = this,
                        t = n.isLocked;
                    n.isLocked = 1 === n.snapGrid.length;
                    n.allowSlideNext = !n.isLocked;
                    n.allowSlidePrev = !n.isLocked;
                    t !== n.isLocked && n.emit(n.isLocked ? "lock" : "unlock");
                    t && t !== n.isLocked && (n.isEnd = !1, n.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var i = this.classNames,
                        t = this.params,
                        u = this.rtl,
                        f = this.$el,
                        n = [];
                    n.push(t.direction);
                    t.freeMode && n.push("free-mode");
                    r.flexbox || n.push("no-flexbox");
                    t.autoHeight && n.push("autoheight");
                    u && n.push("rtl");
                    1 < t.slidesPerColumn && n.push("multirow");
                    e.android && n.push("android");
                    e.ios && n.push("ios");
                    (v.isIE || v.isEdge) && (r.pointerEvents || r.prefixedPointerEvents) && n.push("wp8-" + t.direction);
                    n.forEach(function(n) { i.push(t.containerModifierClass + n) });
                    f.addClass(i.join(" "))
                },
                removeClasses: function() {
                    var n = this.$el,
                        t = this.classNames;
                    n.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(n, t, r, u, f, e) {
                    function s() { e && e() }
                    var o;
                    n.complete && f ? s() : t ? ((o = new i.Image).onload = s, o.onerror = s, u && (o.sizes = u), r && (o.srcset = r), t && (o.src = t)) : s()
                },
                preloadImages: function() {
                    function r() { null != n && n && !n.destroyed && (void 0 !== n.imagesLoaded && (n.imagesLoaded += 1), n.imagesLoaded === n.imagesToLoad.length && (n.params.updateOnImagesReady && n.update(), n.emit("imagesReady"))) }
                    var n = this,
                        i, t;
                    for (n.imagesToLoad = n.$el.find("img"), i = 0; i < n.imagesToLoad.length; i += 1) t = n.imagesToLoad[i], n.loadImage(t, t.currentSrc || t.getAttribute("src"), t.srcset || t.getAttribute("srcset"), t.sizes || t.getAttribute("sizes"), !0, r)
                }
            }
        },
        et = {},
        o = function(i) {
            function u() {
                for (var w, s, e, f, y, o, p, a, c, v, h = [], l = arguments.length; l--;) h[l] = arguments[l];
                return 1 === h.length && h[0].constructor && h[0].constructor === Object ? e = h[0] : (s = (w = h)[0], e = w[1]), e || (e = {}), e = n.extend({}, e), s && !e.el && (e.el = s), i.call(this, e), Object.keys(ft).forEach(function(n) { Object.keys(ft[n]).forEach(function(t) { u.prototype[t] || (u.prototype[t] = ft[n][t]) }) }), f = this, void 0 === f.modules && (f.modules = {}), Object.keys(f.modules).forEach(function(n) {
                    var r = f.modules[n],
                        t, i;
                    if (r.params) {
                        if (t = Object.keys(r.params)[0], i = r.params[t], "object" != typeof i || null === i) return;
                        if (!(t in e && "enabled" in i)) return;
                        !0 === e[t] && (e[t] = { enabled: !0 });
                        "object" != typeof e[t] || "enabled" in e[t] || (e[t].enabled = !0);
                        e[t] || (e[t] = { enabled: !1 })
                    }
                }), y = n.extend({}, vt), f.useModulesParams(y), f.params = n.extend({}, y, et, e), f.originalParams = n.extend({}, f.params), f.passedParams = n.extend({}, e), o = (f.$ = t)(f.params.el), (s = o[0]) ? 1 < o.length ? (p = [], o.each(function(t, i) {
                    var r = n.extend({}, e, { el: i });
                    p.push(new u(r))
                }), p) : (s.swiper = f, o.data("swiper", f), v = o.children("." + f.params.wrapperClass), n.extend(f, { $el: o, el: s, $wrapperEl: v, wrapperEl: v[0], classNames: [], slides: t(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function() { return "horizontal" === f.params.direction }, isVertical: function() { return "vertical" === f.params.direction }, rtl: "rtl" === s.dir.toLowerCase() || "rtl" === o.css("direction"), rtlTranslate: "horizontal" === f.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === o.css("direction")), wrongRTL: "-webkit-box" === v.css("display"), activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: f.params.allowSlideNext, allowSlidePrev: f.params.allowSlidePrev, touchEvents: (a = ["touchstart", "touchmove", "touchend"], c = ["mousedown", "mousemove", "mouseup"], r.pointerEvents ? c = ["pointerdown", "pointermove", "pointerup"] : r.prefixedPointerEvents && (c = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), f.touchEventsTouch = { start: a[0], move: a[1], end: a[2] }, f.touchEventsDesktop = { start: c[0], move: c[1], end: c[2] }, r.touch || !f.params.simulateTouch ? f.touchEventsTouch : f.touchEventsDesktop), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video", lastClickTime: n.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: f.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), f.useModules(), f.params.init && f.init(), f) : void 0
            }
            i && (u.__proto__ = i);
            var f = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } };
            return ((u.prototype = Object.create(i && i.prototype)).constructor = u).prototype.slidesPerViewDynamic = function() {
                var t = this,
                    l = t.params,
                    n = t.slides,
                    c = t.slidesGrid,
                    s = t.size,
                    i = t.activeIndex,
                    f = 1,
                    e, h, r, u, o;
                if (l.centeredSlides) { for (h = n[i].swiperSlideSize, r = i + 1; r < n.length; r += 1) n[r] && !e && (f += 1, s < (h += n[r].swiperSlideSize) && (e = !0)); for (u = i - 1; 0 <= u; u -= 1) n[u] && !e && (f += 1, s < (h += n[u].swiperSlideSize) && (e = !0)) } else
                    for (o = i + 1; o < n.length; o += 1) c[o] - c[i] < s && (f += 1);
                return f
            }, u.prototype.update = function() {
                function r() {
                    var t = n.rtlTranslate ? -1 * n.translate : n.translate,
                        i = Math.min(Math.max(t, n.maxTranslate()), n.minTranslate());
                    n.setTranslate(i);
                    n.updateActiveIndex();
                    n.updateSlidesClasses()
                }
                var n = this,
                    i, t;
                n && !n.destroyed && (i = n.snapGrid, t = n.params, t.breakpoints && n.setBreakpoint(), n.updateSize(), n.updateSlides(), n.updateProgress(), n.updateSlidesClasses(), n.params.freeMode ? (r(), n.params.autoHeight && n.updateAutoHeight()) : (("auto" === n.params.slidesPerView || 1 < n.params.slidesPerView) && n.isEnd && !n.params.centeredSlides ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0)) || r(), t.watchOverflow && i !== n.snapGrid && n.checkOverflow(), n.emit("update"))
            }, u.prototype.init = function() {
                var n = this;
                n.initialized || (n.emit("beforeInit"), n.params.breakpoints && n.setBreakpoint(), n.addClasses(), n.params.loop && n.loopCreate(), n.updateSize(), n.updateSlides(), n.params.watchOverflow && n.checkOverflow(), n.params.grabCursor && n.setGrabCursor(), n.params.preloadImages && n.preloadImages(), n.params.loop ? n.slideTo(n.params.initialSlide + n.loopedSlides, 0, n.params.runCallbacksOnInit) : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit), n.attachEvents(), n.initialized = !0, n.emit("init"))
            }, u.prototype.destroy = function(t, i) {
                void 0 === t && (t = !0);
                void 0 === i && (i = !0);
                var r = this,
                    u = r.params,
                    e = r.$el,
                    o = r.$wrapperEl,
                    f = r.slides;
                return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), u.loop && r.loopDestroy(), i && (r.removeClasses(), e.removeAttr("style"), o.removeAttr("style"), f && f.length && f.removeClass([u.slideVisibleClass, u.slideActiveClass, u.slideNextClass, u.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), r.emit("destroy"), Object.keys(r.eventsListeners).forEach(function(n) { r.off(n) }), !1 !== t && (r.$el[0].swiper = null, r.$el.data("swiper", null), n.deleteProps(r)), r.destroyed = !0), null
            }, u.extendDefaults = function(t) { n.extend(et, t) }, f.extendedDefaults.get = function() { return et }, f.defaults.get = function() { return vt }, f.Class.get = function() { return i }, f.$.get = function() { return t }, Object.defineProperties(u, f), u
        }(h),
        si = { name: "device", proto: { device: e }, "static": { device: e } },
        hi = { name: "support", proto: { support: r }, "static": { support: r } },
        ci = { name: "browser", proto: { browser: v }, "static": { browser: v } },
        li = {
            name: "resize",
            create: function() {
                var t = this;
                n.extend(t, { resize: { resizeHandler: function() { t && !t.destroyed && t.initialized && (t.emit("beforeResize"), t.emit("resize")) }, orientationChangeHandler: function() { t && !t.destroyed && t.initialized && t.emit("orientationchange") } } })
            },
            on: {
                init: function() {
                    i.addEventListener("resize", this.resize.resizeHandler);
                    i.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function() {
                    i.removeEventListener("resize", this.resize.resizeHandler);
                    i.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        },
        d = {
            func: i.MutationObserver || i.WebkitMutationObserver,
            attach: function(n, t) {
                void 0 === t && (t = {});
                var r = this,
                    u = new d.func(function(n) {
                        if (1 !== n.length) {
                            var t = function() { r.emit("observerUpdate", n[0]) };
                            i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0)
                        } else r.emit("observerUpdate", n[0])
                    });
                u.observe(n, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData });
                r.observer.observers.push(u)
            },
            init: function() {
                var n = this,
                    i, t;
                if (r.observer && n.params.observer) {
                    if (n.params.observeParents)
                        for (i = n.$el.parents(), t = 0; t < i.length; t += 1) n.observer.attach(i[t]);
                    n.observer.attach(n.$el[0], { childList: n.params.observeSlideChildren });
                    n.observer.attach(n.$wrapperEl[0], { attributes: !1 })
                }
            },
            destroy: function() {
                this.observer.observers.forEach(function(n) { n.disconnect() });
                this.observer.observers = []
            }
        },
        ai = { name: "observer", params: { observer: !1, observeParents: !1, observeSlideChildren: !1 }, create: function() { n.extend(this, { observer: { init: d.init.bind(this), attach: d.attach.bind(this), destroy: d.destroy.bind(this), observers: [] } }) }, on: { init: function() { this.observer.init() }, destroy: function() { this.observer.destroy() } } },
        g = {
            update: function(t) {
                function ut() {
                    i.updateSlides();
                    i.updateProgress();
                    i.updateSlidesClasses();
                    i.lazy && i.params.lazy.enabled && i.lazy.load()
                }
                var i = this,
                    v = i.params,
                    y = v.slidesPerView,
                    c = v.slidesPerGroup,
                    ft = v.centeredSlides,
                    nt = i.params.virtual,
                    tt = nt.addSlidesBefore,
                    it = nt.addSlidesAfter,
                    f = i.virtual,
                    p = f.from,
                    l = f.to,
                    s = f.slides,
                    et = f.slidesGrid,
                    rt = f.renderSlide,
                    ot = f.offset,
                    w, b, k, d, g, a, o, r;
                i.updateActiveIndex();
                d = i.activeIndex || 0;
                w = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top";
                ft ? (b = Math.floor(y / 2) + c + tt, k = Math.floor(y / 2) + c + it) : (b = y + (c - 1) + tt, k = c + it);
                var u = Math.max((d || 0) - k, 0),
                    e = Math.min((d || 0) + b, s.length - 1),
                    h = (i.slidesGrid[u] || 0) - (i.slidesGrid[0] || 0);
                if (n.extend(i.virtual, { from: u, to: e, offset: h, slidesGrid: i.slidesGrid }), p === u && l === e && !t) return i.slidesGrid !== et && h !== ot && i.slides.css(w, h + "px"), void i.updateProgress();
                if (i.params.virtual.renderExternal) return i.params.virtual.renderExternal.call(i, { offset: h, from: u, to: e, slides: function() { for (var t = [], n = u; n <= e; n += 1) t.push(s[n]); return t }() }), void ut();
                if (g = [], a = [], t) i.$wrapperEl.find("." + i.params.slideClass).remove();
                else
                    for (o = p; o <= l; o += 1)(o < u || e < o) && i.$wrapperEl.find("." + i.params.slideClass + '[data-swiper-slide-index="' + o + '"]').remove();
                for (r = 0; r < s.length; r += 1) u <= r && r <= e && (void 0 === l || t ? a.push(r) : (l < r && a.push(r), r < p && g.push(r)));
                a.forEach(function(n) { i.$wrapperEl.append(rt(s[n], n)) });
                g.sort(function(n, t) { return t - n }).forEach(function(n) { i.$wrapperEl.prepend(rt(s[n], n)) });
                i.$wrapperEl.children(".swiper-slide").css(w, h + "px");
                ut()
            },
            renderSlide: function(n, i) {
                var r = this,
                    f = r.params.virtual,
                    u;
                return f.cache && r.virtual.cache[i] ? r.virtual.cache[i] : (u = f.renderSlide ? t(f.renderSlide.call(r, n, i)) : t('<div class="' + r.params.slideClass + '" data-swiper-slide-index="' + i + '">' + n + "<\/div>"), u.attr("data-swiper-slide-index") || u.attr("data-swiper-slide-index", i), f.cache && (r.virtual.cache[i] = u), u)
            },
            appendSlide: function(n) {
                this.virtual.slides.push(n);
                this.virtual.update(!0)
            },
            prependSlide: function(n) {
                var t = this,
                    i, r;
                (t.virtual.slides.unshift(n), t.params.virtual.cache) && (i = t.virtual.cache, r = {}, Object.keys(i).forEach(function(n) { r[n + 1] = i[n] }), t.virtual.cache = r);
                t.virtual.update(!0);
                t.slideNext(0)
            }
        },
        vi = {
            name: "virtual",
            params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0 } },
            create: function() {
                var t = this;
                n.extend(t, { virtual: { update: g.update.bind(t), appendSlide: g.appendSlide.bind(t), prependSlide: g.prependSlide.bind(t), renderSlide: g.renderSlide.bind(t), slides: t.params.virtual.slides, cache: {} } })
            },
            on: {
                beforeInit: function() {
                    var t = this,
                        i;
                    t.params.virtual.enabled && (t.classNames.push(t.params.containerModifierClass + "virtual"), i = { watchSlidesProgress: !0 }, n.extend(t.params, i), n.extend(t.originalParams, i), t.params.initialSlide || t.virtual.update())
                },
                setTranslate: function() { this.params.virtual.enabled && this.virtual.update() }
            }
        },
        ot = {
            handle: function(n) {
                var t = this,
                    o = t.rtlTranslate,
                    f = n,
                    r, c, l, h, s;
                if ((f.originalEvent && (f = f.originalEvent), r = f.keyCode || f.charCode, !t.allowSlideNext && (t.isHorizontal() && 39 === r || t.isVertical() && 40 === r)) || !t.allowSlidePrev && (t.isHorizontal() && 37 === r || t.isVertical() && 38 === r)) return !1;
                if (!(f.shiftKey || f.altKey || f.ctrlKey || f.metaKey || u.activeElement && u.activeElement.nodeName && ("input" === u.activeElement.nodeName.toLowerCase() || "textarea" === u.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
                        if (c = !1, 0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var a = i.innerWidth,
                            v = i.innerHeight,
                            e = t.$el.offset();
                        for (o && (e.left -= t.$el[0].scrollLeft), l = [
                                [e.left, e.top],
                                [e.left + t.width, e.top],
                                [e.left, e.top + t.height],
                                [e.left + t.width, e.top + t.height]
                            ], h = 0; h < l.length; h += 1) s = l[h], 0 <= s[0] && s[0] <= a && 0 <= s[1] && s[1] <= v && (c = !0);
                        if (!c) return
                    }
                    t.isHorizontal() ? (37 !== r && 39 !== r || (f.preventDefault ? f.preventDefault() : f.returnValue = !1), (39 === r && !o || 37 === r && o) && t.slideNext(), (37 === r && !o || 39 === r && o) && t.slidePrev()) : (38 !== r && 40 !== r || (f.preventDefault ? f.preventDefault() : f.returnValue = !1), 40 === r && t.slideNext(), 38 === r && t.slidePrev());
                    t.emit("keyPress", r)
                }
            },
            enable: function() { this.keyboard.enabled || (t(u).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0) },
            disable: function() { this.keyboard.enabled && (t(u).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1) }
        },
        yi = { name: "keyboard", params: { keyboard: { enabled: !1, onlyInViewport: !0 } }, create: function() { n.extend(this, { keyboard: { enabled: !1, enable: ot.enable.bind(this), disable: ot.disable.bind(this), handle: ot.handle.bind(this) } }) }, on: { init: function() { this.params.keyboard.enabled && this.keyboard.enable() }, destroy: function() { this.keyboard.enabled && this.keyboard.disable() } } },
        c = {
            lastScrollTime: n.now(),
            event: -1 < i.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                var t = "onwheel",
                    n = t in u,
                    i;
                return n || (i = u.createElement("div"), i.setAttribute(t, "return;"), n = "function" == typeof i[t]), !n && u.implementation && u.implementation.hasFeature && !0 !== u.implementation.hasFeature("", "") && (n = u.implementation.hasFeature("Events.wheel", "3.0")), n
            }() ? "wheel" : "mousewheel",
            normalize: function(n) {
                var u = 0,
                    t = 0,
                    i = 0,
                    r = 0;
                return "detail" in n && (t = n.detail), "wheelDelta" in n && (t = -n.wheelDelta / 120), "wheelDeltaY" in n && (t = -n.wheelDeltaY / 120), "wheelDeltaX" in n && (u = -n.wheelDeltaX / 120), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (u = t, t = 0), i = 10 * u, r = 10 * t, "deltaY" in n && (r = n.deltaY), "deltaX" in n && (i = n.deltaX), (i || r) && n.deltaMode && (1 === n.deltaMode ? (i *= 40, r *= 40) : (i *= 800, r *= 800)), i && !u && (u = i < 1 ? -1 : 1), r && !t && (t = r < 1 ? -1 : 1), { spinX: u, spinY: t, pixelX: i, pixelY: r }
            },
            handleMouseEnter: function() { this.mouseEntered = !0 },
            handleMouseLeave: function() { this.mouseEntered = !1 },
            handle: function(t) {
                var u = t,
                    r = this,
                    s = r.params.mousewheel;
                if (!r.mouseEntered && !s.releaseOnEdges) return !0;
                u.originalEvent && (u = u.originalEvent);
                var e = 0,
                    h = r.rtlTranslate ? -1 : 1,
                    f = c.normalize(u);
                if (s.forceToAxis)
                    if (r.isHorizontal()) {
                        if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
                        e = f.pixelX * h
                    } else {
                        if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
                        e = f.pixelY
                    }
                else e = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * h : -f.pixelY;
                if (0 === e) return !0;
                if (s.invert && (e = -e), r.params.freeMode) {
                    r.params.loop && r.loopFix();
                    var o = r.getTranslate() + e * s.sensitivity,
                        l = r.isBeginning,
                        a = r.isEnd;
                    if (o >= r.minTranslate() && (o = r.minTranslate()), o <= r.maxTranslate() && (o = r.maxTranslate()), r.setTransition(0), r.setTranslate(o), r.updateProgress(), r.updateActiveIndex(), r.updateSlidesClasses(), (!l && r.isBeginning || !a && r.isEnd) && r.updateSlidesClasses(), r.params.freeModeSticky && (clearTimeout(r.mousewheel.timeout), r.mousewheel.timeout = n.nextTick(function() { r.slideToClosest() }, 300)), r.emit("scroll", u), r.params.autoplay && r.params.autoplayDisableOnInteraction && r.autoplay.stop(), o === r.minTranslate() || o === r.maxTranslate()) return !0
                } else {
                    if (60 < n.now() - r.mousewheel.lastScrollTime)
                        if (e < 0)
                            if (r.isEnd && !r.params.loop || r.animating) { if (s.releaseOnEdges) return !0 } else r.slideNext(), r.emit("scroll", u);
                    else if (r.isBeginning && !r.params.loop || r.animating) { if (s.releaseOnEdges) return !0 } else r.slidePrev(), r.emit("scroll", u);
                    r.mousewheel.lastScrollTime = (new i.Date).getTime()
                }
                return u.preventDefault ? u.preventDefault() : u.returnValue = !1, !1
            },
            enable: function() {
                var n = this,
                    i;
                return c.event ? n.mousewheel.enabled ? !1 : (i = n.$el, "container" !== n.params.mousewheel.eventsTarged && (i = t(n.params.mousewheel.eventsTarged)), i.on("mouseenter", n.mousewheel.handleMouseEnter), i.on("mouseleave", n.mousewheel.handleMouseLeave), i.on(c.event, n.mousewheel.handle), n.mousewheel.enabled = !0) : !1
            },
            disable: function() {
                var n = this,
                    i;
                return c.event ? n.mousewheel.enabled ? (i = n.$el, "container" !== n.params.mousewheel.eventsTarged && (i = t(n.params.mousewheel.eventsTarged)), i.off(c.event, n.mousewheel.handle), !(n.mousewheel.enabled = !1)) : !1 : !1
            }
        },
        y = {
            update: function() {
                var n = this,
                    t = n.params.navigation;
                if (!n.params.loop) {
                    var u = n.navigation,
                        i = u.$nextEl,
                        r = u.$prevEl;
                    r && 0 < r.length && (n.isBeginning ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[n.params.watchOverflow && n.isLocked ? "addClass" : "removeClass"](t.lockClass));
                    i && 0 < i.length && (n.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[n.params.watchOverflow && n.isLocked ? "addClass" : "removeClass"](t.lockClass))
                }
            },
            onPrevClick: function(n) {
                n.preventDefault();
                this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick: function(n) {
                n.preventDefault();
                this.isEnd && !this.params.loop || this.slideNext()
            },
            init: function() {
                var u, f, r = this,
                    i = r.params.navigation;
                (i.nextEl || i.prevEl) && (i.nextEl && (u = t(i.nextEl), r.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < u.length && 1 === r.$el.find(i.nextEl).length && (u = r.$el.find(i.nextEl))), i.prevEl && (f = t(i.prevEl), r.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < f.length && 1 === r.$el.find(i.prevEl).length && (f = r.$el.find(i.prevEl))), u && 0 < u.length && u.on("click", r.navigation.onNextClick), f && 0 < f.length && f.on("click", r.navigation.onPrevClick), n.extend(r.navigation, { $nextEl: u, nextEl: u && u[0], $prevEl: f, prevEl: f && f[0] }))
            },
            destroy: function() {
                var n = this,
                    r = n.navigation,
                    t = r.$nextEl,
                    i = r.$prevEl;
                t && t.length && (t.off("click", n.navigation.onNextClick), t.removeClass(n.params.navigation.disabledClass));
                i && i.length && (i.off("click", n.navigation.onPrevClick), i.removeClass(n.params.navigation.disabledClass))
            }
        },
        nt = {
            update: function() {
                var n = this,
                    w = n.rtl,
                    i = n.params.pagination,
                    e, s, l, u, a;
                if (i.el && n.pagination.el && n.pagination.$el && 0 !== n.pagination.$el.length) {
                    var r, h = n.virtual && n.params.virtual.enabled ? n.virtual.slides.length : n.slides.length,
                        f = n.pagination.$el,
                        o = n.params.loop ? Math.ceil((h - 2 * n.loopedSlides) / n.params.slidesPerGroup) : n.snapGrid.length;
                    if (n.params.loop ? ((r = Math.ceil((n.activeIndex - n.loopedSlides) / n.params.slidesPerGroup)) > h - 1 - 2 * n.loopedSlides && (r -= h - 2 * n.loopedSlides), o - 1 < r && (r -= o), r < 0 && "bullets" !== n.params.paginationType && (r = o + r)) : r = void 0 !== n.snapIndex ? n.snapIndex : n.activeIndex || 0, "bullets" === i.type && n.pagination.bullets && 0 < n.pagination.bullets.length) {
                        if (u = n.pagination.bullets, i.dynamicBullets && (n.pagination.bulletSize = u.eq(0)[n.isHorizontal() ? "outerWidth" : "outerHeight"](!0), f.css(n.isHorizontal() ? "width" : "height", n.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"), 1 < i.dynamicMainBullets && void 0 !== n.previousIndex && (n.pagination.dynamicBulletIndex += r - n.previousIndex, n.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? n.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : n.pagination.dynamicBulletIndex < 0 && (n.pagination.dynamicBulletIndex = 0)), e = r - n.pagination.dynamicBulletIndex, l = ((s = e + (Math.min(u.length, i.dynamicMainBullets) - 1)) + e) / 2), u.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"), 1 < f.length) u.each(function(n, u) {
                            var f = t(u),
                                o = f.index();
                            o === r && f.addClass(i.bulletActiveClass);
                            i.dynamicBullets && (e <= o && o <= s && f.addClass(i.bulletActiveClass + "-main"), o === e && f.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), o === s && f.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                        });
                        else if (u.eq(r).addClass(i.bulletActiveClass), i.dynamicBullets) {
                            for (var b = u.eq(e), k = u.eq(s), c = e; c <= s; c += 1) u.eq(c).addClass(i.bulletActiveClass + "-main");
                            b.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev");
                            k.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
                        }
                        if (i.dynamicBullets) {
                            var d = Math.min(u.length, i.dynamicMainBullets + 4),
                                g = (n.pagination.bulletSize * d - n.pagination.bulletSize) / 2 - l * n.pagination.bulletSize,
                                nt = w ? "right" : "left";
                            u.css(n.isHorizontal() ? nt : "top", g + "px")
                        }
                    }
                    if ("fraction" === i.type && (f.find("." + i.currentClass).text(i.formatFractionCurrent(r + 1)), f.find("." + i.totalClass).text(i.formatFractionTotal(o))), "progressbar" === i.type) {
                        a = i.progressbarOpposite ? n.isHorizontal() ? "vertical" : "horizontal" : n.isHorizontal() ? "horizontal" : "vertical";
                        var v = (r + 1) / o,
                            y = 1,
                            p = 1;
                        "horizontal" === a ? y = v : p = v;
                        f.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + y + ") scaleY(" + p + ")").transition(n.params.speed)
                    }
                    "custom" === i.type && i.renderCustom ? (f.html(i.renderCustom(n, r + 1, o)), n.emit("paginationRender", n, f[0])) : n.emit("paginationUpdate", n, f[0]);
                    f[n.params.watchOverflow && n.isLocked ? "addClass" : "removeClass"](i.lockClass)
                }
            },
            render: function() {
                var t = this,
                    n = t.params.pagination,
                    f, u;
                if (n.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                    var e = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        r = t.pagination.$el,
                        i = "";
                    if ("bullets" === n.type) {
                        for (f = t.params.loop ? Math.ceil((e - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length, u = 0; u < f; u += 1) i += n.renderBullet ? n.renderBullet.call(t, u, n.bulletClass) : "<" + n.bulletElement + ' class="' + n.bulletClass + '"><\/' + n.bulletElement + ">";
                        r.html(i);
                        t.pagination.bullets = r.find("." + n.bulletClass)
                    }
                    "fraction" === n.type && (i = n.renderFraction ? n.renderFraction.call(t, n.currentClass, n.totalClass) : '<span class="' + n.currentClass + '"><\/span> / <span class="' + n.totalClass + '"><\/span>', r.html(i));
                    "progressbar" === n.type && (i = n.renderProgressbar ? n.renderProgressbar.call(t, n.progressbarFillClass) : '<span class="' + n.progressbarFillClass + '"><\/span>', r.html(i));
                    "custom" !== n.type && t.emit("paginationRender", t.pagination.$el[0])
                }
            },
            init: function() {
                var u = this,
                    i = u.params.pagination,
                    r;
                i.el && (r = t(i.el), 0 !== r.length && (u.params.uniqueNavElements && "string" == typeof i.el && 1 < r.length && 1 === u.$el.find(i.el).length && (r = u.$el.find(i.el)), "bullets" === i.type && i.clickable && r.addClass(i.clickableClass), r.addClass(i.modifierClass + i.type), "bullets" === i.type && i.dynamicBullets && (r.addClass("" + i.modifierClass + i.type + "-dynamic"), u.pagination.dynamicBulletIndex = 0, i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)), "progressbar" === i.type && i.progressbarOpposite && r.addClass(i.progressbarOppositeClass), i.clickable && r.on("click", "." + i.bulletClass, function(n) {
                    n.preventDefault();
                    var i = t(this).index() * u.params.slidesPerGroup;
                    u.params.loop && (i += u.loopedSlides);
                    u.slideTo(i)
                }), n.extend(u.pagination, { $el: r, el: r[0] })))
            },
            destroy: function() {
                var n = this,
                    t = n.params.pagination,
                    i;
                t.el && n.pagination.el && n.pagination.$el && 0 !== n.pagination.$el.length && (i = n.pagination.$el, i.removeClass(t.hiddenClass), i.removeClass(t.modifierClass + t.type), n.pagination.bullets && n.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && i.off("click", "." + t.bulletClass))
            }
        },
        s = {
            setTranslate: function() {
                var t = this;
                if (t.params.scrollbar.el && t.scrollbar.el) {
                    var o = t.scrollbar,
                        h = t.rtlTranslate,
                        c = t.progress,
                        i = o.dragSize,
                        e = o.trackSize,
                        u = o.$dragEl,
                        s = o.$el,
                        l = t.params.scrollbar,
                        f = i,
                        n = (e - i) * c;
                    h ? 0 < (n = -n) ? (f = i - n, n = 0) : e < -n + i && (f = e + n) : n < 0 ? (f = i + n, n = 0) : e < n + i && (f = e - n);
                    t.isHorizontal() ? (r.transforms3d ? u.transform("translate3d(" + n + "px, 0, 0)") : u.transform("translateX(" + n + "px)"), u[0].style.width = f + "px") : (r.transforms3d ? u.transform("translate3d(0px, " + n + "px, 0)") : u.transform("translateY(" + n + "px)"), u[0].style.height = f + "px");
                    l.hide && (clearTimeout(t.scrollbar.timeout), s[0].style.opacity = 1, t.scrollbar.timeout = setTimeout(function() {
                        s[0].style.opacity = 0;
                        s.transition(400)
                    }, 1e3))
                }
            },
            setTransition: function(n) { this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(n) },
            updateSize: function() {
                var t = this;
                if (t.params.scrollbar.el && t.scrollbar.el) {
                    var i = t.scrollbar,
                        r = i.$dragEl,
                        u = i.$el;
                    r[0].style.width = "";
                    r[0].style.height = "";
                    var f, o = t.isHorizontal() ? u[0].offsetWidth : u[0].offsetHeight,
                        e = t.size / t.virtualSize,
                        s = e * (o / t.size);
                    f = "auto" === t.params.scrollbar.dragSize ? o * e : parseInt(t.params.scrollbar.dragSize, 10);
                    t.isHorizontal() ? r[0].style.width = f + "px" : r[0].style.height = f + "px";
                    u[0].style.display = 1 <= e ? "none" : "";
                    t.params.scrollbarHide && (u[0].style.opacity = 0);
                    n.extend(i, { trackSize: o, divider: e, moveDivider: s, dragSize: f });
                    i.$el[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
                }
            },
            setDragPosition: function(n) {
                var i, t = this,
                    r = t.scrollbar,
                    e = t.rtlTranslate,
                    o = r.$el,
                    f = r.dragSize,
                    s = r.trackSize,
                    u;
                i = ((t.isHorizontal() ? "touchstart" === n.type || "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX || n.clientX : "touchstart" === n.type || "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY || n.clientY) - o.offset()[t.isHorizontal() ? "left" : "top"] - f / 2) / (s - f);
                i = Math.max(Math.min(i, 1), 0);
                e && (i = 1 - i);
                u = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * i;
                t.updateProgress(u);
                t.setTranslate(u);
                t.updateActiveIndex();
                t.updateSlidesClasses()
            },
            onDragStart: function(n) {
                var t = this,
                    u = t.params.scrollbar,
                    i = t.scrollbar,
                    f = t.$wrapperEl,
                    r = i.$el,
                    e = i.$dragEl;
                t.scrollbar.isTouched = !0;
                n.preventDefault();
                n.stopPropagation();
                f.transition(100);
                e.transition(100);
                i.setDragPosition(n);
                clearTimeout(t.scrollbar.dragTimeout);
                r.transition(0);
                u.hide && r.css("opacity", 1);
                t.emit("scrollbarDragStart", n)
            },
            onDragMove: function(n) {
                var t = this.scrollbar,
                    i = this.$wrapperEl,
                    r = t.$el,
                    u = t.$dragEl;
                this.scrollbar.isTouched && (n.preventDefault ? n.preventDefault() : n.returnValue = !1, t.setDragPosition(n), i.transition(0), r.transition(0), u.transition(0), this.emit("scrollbarDragMove", n))
            },
            onDragEnd: function(t) {
                var i = this,
                    r = i.params.scrollbar,
                    u = i.scrollbar.$el;
                i.scrollbar.isTouched && (i.scrollbar.isTouched = !1, r.hide && (clearTimeout(i.scrollbar.dragTimeout), i.scrollbar.dragTimeout = n.nextTick(function() {
                    u.css("opacity", 0);
                    u.transition(400)
                }, 1e3)), i.emit("scrollbarDragEnd", t), r.snapOnRelease && i.slideToClosest())
            },
            enableDraggable: function() {
                var n = this;
                if (n.params.scrollbar.el) {
                    var h = n.scrollbar,
                        f = n.touchEventsTouch,
                        e = n.touchEventsDesktop,
                        o = n.params,
                        t = h.$el[0],
                        i = !(!r.passiveListener || !o.passiveListeners) && { passive: !1, capture: !1 },
                        s = !(!r.passiveListener || !o.passiveListeners) && { passive: !0, capture: !1 };
                    r.touch ? (t.addEventListener(f.start, n.scrollbar.onDragStart, i), t.addEventListener(f.move, n.scrollbar.onDragMove, i), t.addEventListener(f.end, n.scrollbar.onDragEnd, s)) : (t.addEventListener(e.start, n.scrollbar.onDragStart, i), u.addEventListener(e.move, n.scrollbar.onDragMove, i), u.addEventListener(e.end, n.scrollbar.onDragEnd, s))
                }
            },
            disableDraggable: function() {
                var n = this;
                if (n.params.scrollbar.el) {
                    var h = n.scrollbar,
                        f = n.touchEventsTouch,
                        e = n.touchEventsDesktop,
                        o = n.params,
                        t = h.$el[0],
                        i = !(!r.passiveListener || !o.passiveListeners) && { passive: !1, capture: !1 },
                        s = !(!r.passiveListener || !o.passiveListeners) && { passive: !0, capture: !1 };
                    r.touch ? (t.removeEventListener(f.start, n.scrollbar.onDragStart, i), t.removeEventListener(f.move, n.scrollbar.onDragMove, i), t.removeEventListener(f.end, n.scrollbar.onDragEnd, s)) : (t.removeEventListener(e.start, n.scrollbar.onDragStart, i), u.removeEventListener(e.move, n.scrollbar.onDragMove, i), u.removeEventListener(e.end, n.scrollbar.onDragEnd, s))
                }
            },
            init: function() {
                var i = this,
                    u;
                if (i.params.scrollbar.el) {
                    var e = i.scrollbar,
                        o = i.$el,
                        f = i.params.scrollbar,
                        r = t(f.el);
                    i.params.uniqueNavElements && "string" == typeof f.el && 1 < r.length && 1 === o.find(f.el).length && (r = o.find(f.el));
                    u = r.find("." + i.params.scrollbar.dragClass);
                    0 === u.length && (u = t('<div class="' + i.params.scrollbar.dragClass + '"><\/div>'), r.append(u));
                    n.extend(e, { $el: r, el: r[0], $dragEl: u, dragEl: u[0] });
                    f.draggable && e.enableDraggable()
                }
            },
            destroy: function() { this.scrollbar.disableDraggable() }
        },
        st = {
            setTransform: function(n, i) {
                var a = this.rtl,
                    f = t(n),
                    s = a ? -1 : 1,
                    h = f.attr("data-swiper-parallax") || "0",
                    r = f.attr("data-swiper-parallax-x"),
                    u = f.attr("data-swiper-parallax-y"),
                    e = f.attr("data-swiper-parallax-scale"),
                    o = f.attr("data-swiper-parallax-opacity"),
                    c, l;
                (r || u ? (r = r || "0", u = u || "0") : this.isHorizontal() ? (r = h, u = "0") : (u = h, r = "0"), r = 0 <= r.indexOf("%") ? parseInt(r, 10) * i * s + "%" : r * i * s + "px", u = 0 <= u.indexOf("%") ? parseInt(u, 10) * i + "%" : u * i + "px", null != o) && (c = o - (o - 1) * (1 - Math.abs(i)), f[0].style.opacity = c);
                null == e ? f.transform("translate3d(" + r + ", " + u + ", 0px)") : (l = e - (e - 1) * (1 - Math.abs(i)), f.transform("translate3d(" + r + ", " + u + ", 0px) scale(" + l + ")"))
            },
            setTranslate: function() {
                var n = this,
                    r = n.$el,
                    u = n.slides,
                    i = n.progress,
                    f = n.snapGrid;
                r.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, r) { n.parallax.setTransform(r, i) });
                u.each(function(r, u) {
                    var e = u.progress;
                    1 < n.params.slidesPerGroup && "auto" !== n.params.slidesPerView && (e += Math.ceil(r / 2) - i * (f.length - 1));
                    e = Math.min(Math.max(e, -1), 1);
                    t(u).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) { n.parallax.setTransform(i, e) })
                })
            },
            setTransition: function(n) {
                void 0 === n && (n = this.params.speed);
                this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(i, r) {
                    var u = t(r),
                        f = parseInt(u.attr("data-swiper-parallax-duration"), 10) || n;
                    0 === n && (f = 0);
                    u.transition(f)
                })
            }
        },
        ht = {
            getDistanceBetweenTouches: function(n) {
                if (n.targetTouches.length < 2) return 1;
                var t = n.targetTouches[0].pageX,
                    i = n.targetTouches[0].pageY,
                    r = n.targetTouches[1].pageX,
                    u = n.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(r - t, 2) + Math.pow(u - i, 2))
            },
            onGestureStart: function(n) {
                var u = this,
                    e = u.params.zoom,
                    f = u.zoom,
                    i = f.gesture;
                if (f.fakeGestureTouched = !1, f.fakeGestureMoved = !1, !r.gestures) {
                    if ("touchstart" !== n.type || "touchstart" === n.type && n.targetTouches.length < 2) return;
                    f.fakeGestureTouched = !0;
                    i.scaleStart = ht.getDistanceBetweenTouches(n)
                }
                i.$slideEl && i.$slideEl.length || (i.$slideEl = t(n.target).closest(".swiper-slide"), 0 === i.$slideEl.length && (i.$slideEl = u.slides.eq(u.activeIndex)), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + e.containerClass), i.maxRatio = i.$imageWrapEl.attr("data-swiper-zoom") || e.maxRatio, 0 !== i.$imageWrapEl.length) ? (i.$imageEl.transition(0), u.zoom.isScaling = !0) : i.$imageEl = void 0
            },
            onGestureChange: function(n) {
                var u = this.params.zoom,
                    t = this.zoom,
                    i = t.gesture;
                if (!r.gestures) {
                    if ("touchmove" !== n.type || "touchmove" === n.type && n.targetTouches.length < 2) return;
                    t.fakeGestureMoved = !0;
                    i.scaleMove = ht.getDistanceBetweenTouches(n)
                }
                i.$imageEl && 0 !== i.$imageEl.length && (t.scale = r.gestures ? n.scale * t.currentScale : i.scaleMove / i.scaleStart * t.currentScale, t.scale > i.maxRatio && (t.scale = i.maxRatio - 1 + Math.pow(t.scale - i.maxRatio + 1, .5)), t.scale < u.minRatio && (t.scale = u.minRatio + 1 - Math.pow(u.minRatio - t.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
            },
            onGestureEnd: function(n) {
                var u = this.params.zoom,
                    t = this.zoom,
                    i = t.gesture;
                if (!r.gestures) {
                    if (!t.fakeGestureTouched || !t.fakeGestureMoved) return;
                    if ("touchend" !== n.type || "touchend" === n.type && n.changedTouches.length < 2 && !e.android) return;
                    t.fakeGestureTouched = !1;
                    t.fakeGestureMoved = !1
                }
                i.$imageEl && 0 !== i.$imageEl.length && (t.scale = Math.max(Math.min(t.scale, i.maxRatio), u.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"), t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (i.$slideEl = void 0))
            },
            onTouchStart: function(n) {
                var i = this.zoom,
                    r = i.gesture,
                    t = i.image;
                r.$imageEl && 0 !== r.$imageEl.length && (t.isTouched || (e.android && n.preventDefault(), t.isTouched = !0, t.touchesStart.x = "touchstart" === n.type ? n.targetTouches[0].pageX : n.pageX, t.touchesStart.y = "touchstart" === n.type ? n.targetTouches[0].pageY : n.pageY))
            },
            onTouchMove: function(t) {
                var e = this,
                    f = e.zoom,
                    u = f.gesture,
                    i = f.image,
                    r = f.velocity,
                    o, s;
                if (u.$imageEl && 0 !== u.$imageEl.length && (e.allowClick = !1, i.isTouched && u.$slideEl) && (i.isMoved || (i.width = u.$imageEl[0].offsetWidth, i.height = u.$imageEl[0].offsetHeight, i.startX = n.getTranslate(u.$imageWrapEl[0], "x") || 0, i.startY = n.getTranslate(u.$imageWrapEl[0], "y") || 0, u.slideWidth = u.$slideEl[0].offsetWidth, u.slideHeight = u.$slideEl[0].offsetHeight, u.$imageWrapEl.transition(0), e.rtl && (i.startX = -i.startX, i.startY = -i.startY)), o = i.width * f.scale, s = i.height * f.scale, !(o < u.slideWidth && s < u.slideHeight))) {
                    if ((i.minX = Math.min(u.slideWidth / 2 - o / 2, 0), i.maxX = -i.minX, i.minY = Math.min(u.slideHeight / 2 - s / 2, 0), i.maxY = -i.minY, i.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, i.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !i.isMoved && !f.isScaling) && (e.isHorizontal() && (Math.floor(i.minX) === Math.floor(i.startX) && i.touchesCurrent.x < i.touchesStart.x || Math.floor(i.maxX) === Math.floor(i.startX) && i.touchesCurrent.x > i.touchesStart.x) || !e.isHorizontal() && (Math.floor(i.minY) === Math.floor(i.startY) && i.touchesCurrent.y < i.touchesStart.y || Math.floor(i.maxY) === Math.floor(i.startY) && i.touchesCurrent.y > i.touchesStart.y))) return void(i.isTouched = !1);
                    t.preventDefault();
                    t.stopPropagation();
                    i.isMoved = !0;
                    i.currentX = i.touchesCurrent.x - i.touchesStart.x + i.startX;
                    i.currentY = i.touchesCurrent.y - i.touchesStart.y + i.startY;
                    i.currentX < i.minX && (i.currentX = i.minX + 1 - Math.pow(i.minX - i.currentX + 1, .8));
                    i.currentX > i.maxX && (i.currentX = i.maxX - 1 + Math.pow(i.currentX - i.maxX + 1, .8));
                    i.currentY < i.minY && (i.currentY = i.minY + 1 - Math.pow(i.minY - i.currentY + 1, .8));
                    i.currentY > i.maxY && (i.currentY = i.maxY - 1 + Math.pow(i.currentY - i.maxY + 1, .8));
                    r.prevPositionX || (r.prevPositionX = i.touchesCurrent.x);
                    r.prevPositionY || (r.prevPositionY = i.touchesCurrent.y);
                    r.prevTime || (r.prevTime = Date.now());
                    r.x = (i.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2;
                    r.y = (i.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2;
                    Math.abs(i.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0);
                    Math.abs(i.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0);
                    r.prevPositionX = i.touchesCurrent.x;
                    r.prevPositionY = i.touchesCurrent.y;
                    r.prevTime = Date.now();
                    u.$imageWrapEl.transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                }
            },
            onTouchEnd: function() {
                var i = this.zoom,
                    r = i.gesture,
                    n = i.image,
                    t = i.velocity,
                    s, h, c;
                if (r.$imageEl && 0 !== r.$imageEl.length) {
                    if (!n.isTouched || !n.isMoved) return n.isTouched = !1, void(n.isMoved = !1);
                    n.isTouched = !1;
                    n.isMoved = !1;
                    var u = 300,
                        f = 300,
                        l = t.x * u,
                        e = n.currentX + l,
                        a = t.y * f,
                        o = n.currentY + a;
                    0 !== t.x && (u = Math.abs((e - n.currentX) / t.x));
                    0 !== t.y && (f = Math.abs((o - n.currentY) / t.y));
                    s = Math.max(u, f);
                    n.currentX = e;
                    n.currentY = o;
                    h = n.width * i.scale;
                    c = n.height * i.scale;
                    n.minX = Math.min(r.slideWidth / 2 - h / 2, 0);
                    n.maxX = -n.minX;
                    n.minY = Math.min(r.slideHeight / 2 - c / 2, 0);
                    n.maxY = -n.minY;
                    n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX);
                    n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY);
                    r.$imageWrapEl.transition(s).transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var t = this.zoom,
                    n = t.gesture;
                n.$slideEl && this.previousIndex !== this.activeIndex && (n.$imageEl.transform("translate3d(0,0,0) scale(1)"), n.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, n.$slideEl = void 0, n.$imageEl = void 0, n.$imageWrapEl = void 0)
            },
            toggle: function(n) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(n)
            },
            "in": function(n) {
                var s, h, b, k, u, f, d, g, nt, tt, c, l, a, v, y, p, e = this,
                    r = e.zoom,
                    o = e.params.zoom,
                    i = r.gesture,
                    w = r.image;
                (i.$slideEl || (i.$slideEl = e.clickedSlide ? t(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + o.containerClass)), i.$imageEl && 0 !== i.$imageEl.length) && (i.$slideEl.addClass("" + o.zoomedSlideClass), void 0 === w.touchesStart.x && n ? (s = "touchend" === n.type ? n.changedTouches[0].pageX : n.pageX, h = "touchend" === n.type ? n.changedTouches[0].pageY : n.pageY) : (s = w.touchesStart.x, h = w.touchesStart.y), r.scale = i.$imageWrapEl.attr("data-swiper-zoom") || o.maxRatio, r.currentScale = i.$imageWrapEl.attr("data-swiper-zoom") || o.maxRatio, n ? (y = i.$slideEl[0].offsetWidth, p = i.$slideEl[0].offsetHeight, b = i.$slideEl.offset().left + y / 2 - s, k = i.$slideEl.offset().top + p / 2 - h, d = i.$imageEl[0].offsetWidth, g = i.$imageEl[0].offsetHeight, nt = d * r.scale, tt = g * r.scale, a = -(c = Math.min(y / 2 - nt / 2, 0)), v = -(l = Math.min(p / 2 - tt / 2, 0)), (u = b * r.scale) < c && (u = c), a < u && (u = a), (f = k * r.scale) < l && (f = l), v < f && (f = v)) : f = u = 0, i.$imageWrapEl.transition(300).transform("translate3d(" + u + "px, " + f + "px,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + r.scale + ")"))
            },
            out: function() {
                var i = this,
                    r = i.zoom,
                    u = i.params.zoom,
                    n = r.gesture;
                n.$slideEl || (n.$slideEl = i.clickedSlide ? t(i.clickedSlide) : i.slides.eq(i.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + u.containerClass));
                n.$imageEl && 0 !== n.$imageEl.length && (r.scale = 1, r.currentScale = 1, n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), n.$slideEl.removeClass("" + u.zoomedSlideClass), n.$slideEl = void 0)
            },
            enable: function() {
                var n = this,
                    t = n.zoom,
                    i;
                t.enabled || (t.enabled = !0, i = !("touchstart" !== n.touchEvents.start || !r.passiveListener || !n.params.passiveListeners) && { passive: !0, capture: !1 }, r.gestures ? (n.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, i), n.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, i), n.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === n.touchEvents.start && (n.$wrapperEl.on(n.touchEvents.start, ".swiper-slide", t.onGestureStart, i), n.$wrapperEl.on(n.touchEvents.move, ".swiper-slide", t.onGestureChange, i), n.$wrapperEl.on(n.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), n.$wrapperEl.on(n.touchEvents.move, "." + n.params.zoom.containerClass, t.onTouchMove))
            },
            disable: function() {
                var n = this,
                    t = n.zoom,
                    i;
                t.enabled && (n.zoom.enabled = !1, i = !("touchstart" !== n.touchEvents.start || !r.passiveListener || !n.params.passiveListeners) && { passive: !0, capture: !1 }, r.gestures ? (n.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, i), n.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, i), n.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === n.touchEvents.start && (n.$wrapperEl.off(n.touchEvents.start, ".swiper-slide", t.onGestureStart, i), n.$wrapperEl.off(n.touchEvents.move, ".swiper-slide", t.onGestureChange, i), n.$wrapperEl.off(n.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), n.$wrapperEl.off(n.touchEvents.move, "." + n.params.zoom.containerClass, t.onTouchMove))
            }
        },
        yt = {
            loadInSlide: function(n, i) {
                var r, u, f, e;
                void 0 === i && (i = !0);
                r = this;
                u = r.params.lazy;
                void 0 !== n && 0 !== r.slides.length && (f = r.virtual && r.params.virtual.enabled ? r.$wrapperEl.children("." + r.params.slideClass + '[data-swiper-slide-index="' + n + '"]') : r.slides.eq(n), e = f.find("." + u.elementClass + ":not(." + u.loadedClass + "):not(." + u.loadingClass + ")"), !f.hasClass(u.elementClass) || f.hasClass(u.loadedClass) || f.hasClass(u.loadingClass) || (e = e.add(f[0])), 0 !== e.length && e.each(function(n, e) {
                    var o = t(e);
                    o.addClass(u.loadingClass);
                    var s = o.attr("data-background"),
                        h = o.attr("data-src"),
                        c = o.attr("data-srcset"),
                        l = o.attr("data-sizes");
                    r.loadImage(o[0], h || s, c, l, !1, function() {
                        var n, t, e;
                        null != r && r && (!r || r.params) && !r.destroyed && ((s ? (o.css("background-image", 'url("' + s + '")'), o.removeAttr("data-background")) : (c && (o.attr("srcset", c), o.removeAttr("data-srcset")), l && (o.attr("sizes", l), o.removeAttr("data-sizes")), h && (o.attr("src", h), o.removeAttr("data-src"))), o.addClass(u.loadedClass).removeClass(u.loadingClass), f.find("." + u.preloaderClass).remove(), r.params.loop && i) && (n = f.attr("data-swiper-slide-index"), f.hasClass(r.params.slideDuplicateClass) ? (t = r.$wrapperEl.children('[data-swiper-slide-index="' + n + '"]:not(.' + r.params.slideDuplicateClass + ")"), r.lazy.loadInSlide(t.index(), !1)) : (e = r.$wrapperEl.children("." + r.params.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]'), r.lazy.loadInSlide(e.index(), !1))), r.emit("lazyImageReady", f[0], o[0]))
                    });
                    r.emit("lazyImageLoad", f[0], o[0])
                }))
            },
            load: function() {
                function l(n) { if (c) { if (o.children("." + i.slideClass + '[data-swiper-slide-index="' + n + '"]').length) return !0 } else if (p[n]) return !0; return !1 }

                function w(n) { return c ? t(n).attr("data-swiper-slide-index") : t(n).index() }
                var n = this,
                    o = n.$wrapperEl,
                    i = n.params,
                    p = n.slides,
                    r = n.activeIndex,
                    c = n.virtual && i.virtual.enabled,
                    s = i.lazy,
                    u = i.slidesPerView,
                    f, e, v, y;
                if ("auto" === u && (u = 0), n.lazy.initialImageLoaded || (n.lazy.initialImageLoaded = !0), n.params.watchSlidesVisibility) o.children("." + i.slideVisibleClass).each(function(i, r) {
                    var u = c ? t(r).attr("data-swiper-slide-index") : t(r).index();
                    n.lazy.loadInSlide(u)
                });
                else if (1 < u)
                    for (f = r; f < r + u; f += 1) l(f) && n.lazy.loadInSlide(f);
                else n.lazy.loadInSlide(r);
                if (s.loadPrevNext)
                    if (1 < u || s.loadPrevNextAmount && 1 < s.loadPrevNextAmount) { for (var b = s.loadPrevNextAmount, a = u, k = Math.min(r + a + Math.max(b, a), p.length), d = Math.max(r - Math.max(a, b), 0), h = r + u; h < k; h += 1) l(h) && n.lazy.loadInSlide(h); for (e = d; e < r; e += 1) l(e) && n.lazy.loadInSlide(e) } else v = o.children("." + i.slideNextClass), 0 < v.length && n.lazy.loadInSlide(w(v)), y = o.children("." + i.slidePrevClass), 0 < y.length && n.lazy.loadInSlide(w(y))
            }
        },
        p = {
            LinearSpline: function(n, t) { var i, u, e, r, f, o = function(n, t) { for (u = -1, i = n.length; 1 < i - u;) n[e = i + u >> 1] <= t ? u = e : i = e; return i }; return this.x = n, this.y = t, this.lastIndex = n.length - 1, this.interpolate = function(n) { return n ? (f = o(this.x, n), r = f - 1, (n - this.x[r]) * (this.y[f] - this.y[r]) / (this.x[f] - this.x[r]) + this.y[r]) : 0 }, this },
            getInterpolateFunction: function(n) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new p.LinearSpline(t.slidesGrid, n.slidesGrid) : new p.LinearSpline(t.snapGrid, n.snapGrid))
            },
            setTranslate: function(n, t) {
                function s(n) {
                    var t = i.rtlTranslate ? -i.translate : i.translate;
                    "slide" === i.params.controller.by && (i.controller.getInterpolateFunction(n), u = -i.controller.spline.interpolate(-t));
                    u && "container" !== i.params.controller.by || (e = (n.maxTranslate() - n.minTranslate()) / (i.maxTranslate() - i.minTranslate()), u = (t - i.minTranslate()) * e + n.minTranslate());
                    i.params.controller.inverse && (u = n.maxTranslate() - u);
                    n.updateProgress(u);
                    n.setTranslate(u, i);
                    n.updateActiveIndex();
                    n.updateSlidesClasses()
                }
                var e, u, i = this,
                    r = i.controller.control,
                    f;
                if (Array.isArray(r))
                    for (f = 0; f < r.length; f += 1) r[f] !== t && r[f] instanceof o && s(r[f]);
                else r instanceof o && t !== r && s(r)
            },
            setTransition: function(t, i) {
                function e(i) {
                    i.setTransition(t, f);
                    0 !== t && (i.transitionStart(), i.params.autoHeight && n.nextTick(function() { i.updateAutoHeight() }), i.$wrapperEl.transitionEnd(function() { r && (i.params.loop && "slide" === f.params.controller.by && i.loopFix(), i.transitionEnd()) }))
                }
                var u, f = this,
                    r = f.controller.control;
                if (Array.isArray(r))
                    for (u = 0; u < r.length; u += 1) r[u] !== i && r[u] instanceof o && e(r[u]);
                else r instanceof o && i !== r && e(r)
            }
        },
        pt = {
            makeElFocusable: function(n) { return n.attr("tabIndex", "0"), n },
            addElRole: function(n, t) { return n.attr("role", t), n },
            addElLabel: function(n, t) { return n.attr("aria-label", t), n },
            disableEl: function(n) { return n.attr("aria-disabled", !0), n },
            enableEl: function(n) { return n.attr("aria-disabled", !1), n },
            onEnterKey: function(n) {
                var i = this,
                    u = i.params.a11y,
                    r;
                13 === n.keyCode && (r = t(n.target), i.navigation && i.navigation.$nextEl && r.is(i.navigation.$nextEl) && (i.isEnd && !i.params.loop || i.slideNext(), i.isEnd ? i.a11y.notify(u.lastSlideMessage) : i.a11y.notify(u.nextSlideMessage)), i.navigation && i.navigation.$prevEl && r.is(i.navigation.$prevEl) && (i.isBeginning && !i.params.loop || i.slidePrev(), i.isBeginning ? i.a11y.notify(u.firstSlideMessage) : i.a11y.notify(u.prevSlideMessage)), i.pagination && r.is("." + i.params.pagination.bulletClass) && r[0].click())
            },
            notify: function(n) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(n))
            },
            updateNavigation: function() {
                var n = this;
                if (!n.params.loop) {
                    var r = n.navigation,
                        t = r.$nextEl,
                        i = r.$prevEl;
                    i && 0 < i.length && (n.isBeginning ? n.a11y.disableEl(i) : n.a11y.enableEl(i));
                    t && 0 < t.length && (n.isEnd ? n.a11y.disableEl(t) : n.a11y.enableEl(t))
                }
            },
            updatePagination: function() {
                var n = this,
                    i = n.params.a11y;
                n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.bullets.each(function(r, u) {
                    var f = t(u);
                    n.a11y.makeElFocusable(f);
                    n.a11y.addElRole(f, "button");
                    n.a11y.addElLabel(f, i.paginationBulletMessage.replace(/{{index}}/, f.index() + 1))
                })
            },
            init: function() {
                var n = this,
                    t, i, r;
                n.$el.append(n.a11y.liveRegion);
                r = n.params.a11y;
                n.navigation && n.navigation.$nextEl && (t = n.navigation.$nextEl);
                n.navigation && n.navigation.$prevEl && (i = n.navigation.$prevEl);
                t && (n.a11y.makeElFocusable(t), n.a11y.addElRole(t, "button"), n.a11y.addElLabel(t, r.nextSlideMessage), t.on("keydown", n.a11y.onEnterKey));
                i && (n.a11y.makeElFocusable(i), n.a11y.addElRole(i, "button"), n.a11y.addElLabel(i, r.prevSlideMessage), i.on("keydown", n.a11y.onEnterKey));
                n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.$el.on("keydown", "." + n.params.pagination.bulletClass, n.a11y.onEnterKey)
            },
            destroy: function() {
                var t, i, n = this;
                n.a11y.liveRegion && 0 < n.a11y.liveRegion.length && n.a11y.liveRegion.remove();
                n.navigation && n.navigation.$nextEl && (t = n.navigation.$nextEl);
                n.navigation && n.navigation.$prevEl && (i = n.navigation.$prevEl);
                t && t.off("keydown", n.a11y.onEnterKey);
                i && i.off("keydown", n.a11y.onEnterKey);
                n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.$el.off("keydown", "." + n.params.pagination.bulletClass, n.a11y.onEnterKey)
            }
        },
        l = {
            init: function() {
                var n = this,
                    t;
                if (n.params.history) {
                    if (!i.history || !i.history.pushState) return n.params.history.enabled = !1, void(n.params.hashNavigation.enabled = !0);
                    t = n.history;
                    t.initialized = !0;
                    t.paths = l.getPathValues();
                    (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, n.params.runCallbacksOnInit), n.params.history.replaceState || i.addEventListener("popstate", n.history.setHistoryPopState))
                }
            },
            destroy: function() { this.params.history.replaceState || i.removeEventListener("popstate", this.history.setHistoryPopState) },
            setHistoryPopState: function() {
                this.history.paths = l.getPathValues();
                this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function() {
                var n = i.location.pathname.slice(1).split("/").filter(function(n) { return "" !== n }),
                    t = n.length;
                return { key: n[t - 2], value: n[t - 1] }
            },
            setHistory: function(n, t) {
                var f, r, u;
                this.history.initialized && this.params.history.enabled && (f = this.slides.eq(t), r = l.slugify(f.attr("data-history")), i.location.pathname.includes(n) || (r = n + "/" + r), u = i.history.state, u && u.value === r || (this.params.history.replaceState ? i.history.replaceState({ value: r }, null, r) : i.history.pushState({ value: r }, null, r)))
            },
            slugify: function(n) { return n.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "") },
            scrollToSlide: function(n, t, i) {
                var r = this,
                    u, e, f, o;
                if (t)
                    for (u = 0, e = r.slides.length; u < e; u += 1) f = r.slides.eq(u), l.slugify(f.attr("data-history")) !== t || f.hasClass(r.params.slideDuplicateClass) || (o = f.index(), r.slideTo(o, n, i));
                else r.slideTo(0, n, i)
            }
        },
        tt = {
            onHashCange: function() {
                var n = this,
                    i = u.location.hash.replace("#", ""),
                    t;
                if (i !== n.slides.eq(n.activeIndex).attr("data-hash")) {
                    if (t = n.$wrapperEl.children("." + n.params.slideClass + '[data-hash="' + i + '"]').index(), void 0 === t) return;
                    n.slideTo(t)
                }
            },
            setHash: function() {
                var n = this,
                    t, r;
                n.hashNavigation.initialized && n.params.hashNavigation.enabled && (n.params.hashNavigation.replaceState && i.history && i.history.replaceState ? i.history.replaceState(null, null, "#" + n.slides.eq(n.activeIndex).attr("data-hash") || "") : (t = n.slides.eq(n.activeIndex), r = t.attr("data-hash") || t.attr("data-history"), u.location.hash = r || ""))
            },
            init: function() {
                var n = this,
                    e, f, o, r, s;
                if (!(!n.params.hashNavigation.enabled || n.params.history && n.params.history.enabled)) {
                    if (n.hashNavigation.initialized = !0, e = u.location.hash.replace("#", ""), e)
                        for (f = 0, o = n.slides.length; f < o; f += 1) r = n.slides.eq(f), (r.attr("data-hash") || r.attr("data-history")) !== e || r.hasClass(n.params.slideDuplicateClass) || (s = r.index(), n.slideTo(s, 0, n.params.runCallbacksOnInit, !0));
                    n.params.hashNavigation.watchState && t(i).on("hashchange", n.hashNavigation.onHashCange)
                }
            },
            destroy: function() { this.params.hashNavigation.watchState && t(i).off("hashchange", this.hashNavigation.onHashCange) }
        },
        it = {
            run: function() {
                var t = this,
                    i = t.slides.eq(t.activeIndex),
                    r = t.params.autoplay.delay;
                i.attr("data-swiper-autoplay") && (r = i.attr("data-swiper-autoplay") || t.params.autoplay.delay);
                t.autoplay.timeout = n.nextTick(function() { t.params.autoplay.reverseDirection ? t.params.loop ? (t.loopFix(), t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.isBeginning ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(t.slides.length - 1, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.params.loop ? (t.loopFix(), t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")) : t.isEnd ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(0, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")) }, r)
            },
            start: function() { var n = this; return void 0 === n.autoplay.timeout && !n.autoplay.running && (n.autoplay.running = !0, n.emit("autoplayStart"), n.autoplay.run(), !0) },
            stop: function() { var n = this; return !!n.autoplay.running && void 0 !== n.autoplay.timeout && (n.autoplay.timeout && (clearTimeout(n.autoplay.timeout), n.autoplay.timeout = void 0), n.autoplay.running = !1, n.emit("autoplayStop"), !0) },
            pause: function(n) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== n && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
            }
        },
        wt = {
            setTranslate: function() { for (var t, i, u, f, n = this, e = n.slides, r = 0; r < e.length; r += 1) t = n.slides.eq(r), i = -t[0].swiperSlideOffset, n.params.virtualTranslate || (i -= n.translate), u = 0, n.isHorizontal() || (u = i, i = 0), f = n.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0), t.css({ opacity: f }).transform("translate3d(" + i + "px, " + u + "px, 0px)") },
            setTransition: function(n) {
                var t = this,
                    r = t.slides,
                    u = t.$wrapperEl,
                    i;
                (r.transition(n), t.params.virtualTranslate && 0 !== n) && (i = !1, r.transitionEnd(function() {
                    if (!i && t && !t.destroyed) {
                        i = !0;
                        t.animating = !1;
                        for (var r = ["webkitTransitionEnd", "transitionend"], n = 0; n < r.length; n += 1) u.trigger(r[n])
                    }
                }))
            }
        },
        bt = {
            setTranslate: function() {
                var u, n = this,
                    nt = n.$el,
                    k = n.$wrapperEl,
                    tt = n.slides,
                    d = n.width,
                    it = n.height,
                    g = n.rtlTranslate,
                    i = n.size,
                    s = n.params.cubeEffect,
                    f = n.isHorizontal(),
                    st = n.virtual && n.params.virtual.enabled,
                    c = 0,
                    w, r, e, h, l, ut, y, p, ot;
                for (s.shadow && (f ? (0 === (u = k.find(".swiper-cube-shadow")).length && (u = t('<div class="swiper-cube-shadow"><\/div>'), k.append(u)), u.css({ height: d + "px" })) : 0 === (u = nt.find(".swiper-cube-shadow")).length && (u = t('<div class="swiper-cube-shadow"><\/div>'), nt.append(u))), w = 0; w < tt.length; w += 1) {
                    r = tt.eq(w);
                    e = w;
                    st && (e = parseInt(r.attr("data-swiper-slide-index"), 10));
                    h = 90 * e;
                    l = Math.floor(h / 360);
                    g && (h = -h, l = Math.floor(-h / 360));
                    var a = Math.max(Math.min(r[0].progress, 1), -1),
                        o = 0,
                        rt = 0,
                        b = 0;
                    e % 4 == 0 ? (o = 4 * -l * i, b = 0) : (e - 1) % 4 == 0 ? (o = 0, b = 4 * -l * i) : (e - 2) % 4 == 0 ? (o = i + 4 * l * i, b = i) : (e - 3) % 4 == 0 && (o = -i, b = 3 * i + 4 * i * l);
                    g && (o = -o);
                    f || (rt = o, o = 0);
                    ut = "rotateX(" + (f ? 0 : -h) + "deg) rotateY(" + (f ? h : 0) + "deg) translate3d(" + o + "px, " + rt + "px, " + b + "px)";
                    (a <= 1 && -1 < a && (c = 90 * e + 90 * a, g && (c = 90 * -e - 90 * a)), r.transform(ut), s.slideShadows) && (y = f ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"), p = f ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom"), 0 === y.length && (y = t('<div class="swiper-slide-shadow-' + (f ? "left" : "top") + '"><\/div>'), r.append(y)), 0 === p.length && (p = t('<div class="swiper-slide-shadow-' + (f ? "right" : "bottom") + '"><\/div>'), r.append(p)), y.length && (y[0].style.opacity = Math.max(-a, 0)), p.length && (p[0].style.opacity = Math.max(a, 0)))
                }
                if (k.css({ "-webkit-transform-origin": "50% 50% -" + i / 2 + "px", "-moz-transform-origin": "50% 50% -" + i / 2 + "px", "-ms-transform-origin": "50% 50% -" + i / 2 + "px", "transform-origin": "50% 50% -" + i / 2 + "px" }), s.shadow)
                    if (f) u.transform("translate3d(0px, " + (d / 2 + s.shadowOffset) + "px, " + -d / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + s.shadowScale + ")");
                    else {
                        var ft = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                            ht = 1.5 - (Math.sin(2 * ft * Math.PI / 360) / 2 + Math.cos(2 * ft * Math.PI / 360) / 2),
                            ct = s.shadowScale,
                            et = s.shadowScale / ht,
                            lt = s.shadowOffset;
                        u.transform("scale3d(" + ct + ", 1, " + et + ") translate3d(0px, " + (it / 2 + lt) + "px, " + -it / 2 / et + "px) rotateX(-90deg)")
                    }
                ot = v.isSafari || v.isUiWebView ? -i / 2 : 0;
                k.transform("translate3d(0px,0," + ot + "px) rotateX(" + (n.isHorizontal() ? 0 : c) + "deg) rotateY(" + (n.isHorizontal() ? -c : 0) + "deg)")
            },
            setTransition: function(n) {
                var t = this.$el;
                this.slides.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n);
                this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(n)
            }
        },
        kt = {
            setTranslate: function() {
                for (var n, r, u, f, i = this, o = i.slides, a = i.rtlTranslate, s = 0; s < o.length; s += 1) {
                    n = o.eq(s);
                    r = n[0].progress;
                    i.params.flipEffect.limitRotation && (r = Math.max(Math.min(n[0].progress, 1), -1));
                    var e = -180 * r,
                        c = 0,
                        h = -n[0].swiperSlideOffset,
                        l = 0;
                    (i.isHorizontal() ? a && (e = -e) : (l = h, c = -e, e = h = 0), n[0].style.zIndex = -Math.abs(Math.round(r)) + o.length, i.params.flipEffect.slideShadows) && (u = i.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"), f = i.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom"), 0 === u.length && (u = t('<div class="swiper-slide-shadow-' + (i.isHorizontal() ? "left" : "top") + '"><\/div>'), n.append(u)), 0 === f.length && (f = t('<div class="swiper-slide-shadow-' + (i.isHorizontal() ? "right" : "bottom") + '"><\/div>'), n.append(f)), u.length && (u[0].style.opacity = Math.max(-r, 0)), f.length && (f[0].style.opacity = Math.max(r, 0)));
                    n.transform("translate3d(" + h + "px, " + l + "px, 0px) rotateX(" + c + "deg) rotateY(" + e + "deg)")
                }
            },
            setTransition: function(n) {
                var t = this,
                    r = t.slides,
                    u = t.activeIndex,
                    f = t.$wrapperEl,
                    i;
                (r.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n), t.params.virtualTranslate && 0 !== n) && (i = !1, r.eq(u).transitionEnd(function() {
                    if (!i && t && !t.destroyed) {
                        i = !0;
                        t.animating = !1;
                        for (var r = ["webkitTransitionEnd", "transitionend"], n = 0; n < r.length; n += 1) f.trigger(r[n])
                    }
                }))
            }
        },
        dt = {
            setTranslate: function() {
                for (var g, o, s, f = this, nt = f.width, tt = f.height, p = f.slides, it = f.$wrapperEl, rt = f.slidesSizesGrid, e = f.params.coverflowEffect, n = f.isHorizontal(), w = f.translate, b = n ? nt / 2 - w : tt / 2 - w, k = n ? e.rotate : -e.rotate, ut = e.depth, h = 0, ft = p.length; h < ft; h += 1) {
                    var u = p.eq(h),
                        d = rt[h],
                        i = (b - u[0].swiperSlideOffset - d / 2) / d * e.modifier,
                        c = n ? k * i : 0,
                        l = n ? 0 : k * i,
                        a = -ut * Math.abs(i),
                        v = n ? 0 : e.stretch * i,
                        y = n ? e.stretch * i : 0;
                    Math.abs(y) < .001 && (y = 0);
                    Math.abs(v) < .001 && (v = 0);
                    Math.abs(a) < .001 && (a = 0);
                    Math.abs(c) < .001 && (c = 0);
                    Math.abs(l) < .001 && (l = 0);
                    g = "translate3d(" + y + "px," + v + "px," + a + "px)  rotateX(" + l + "deg) rotateY(" + c + "deg)";
                    (u.transform(g), u[0].style.zIndex = 1 - Math.abs(Math.round(i)), e.slideShadows) && (o = n ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top"), s = n ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom"), 0 === o.length && (o = t('<div class="swiper-slide-shadow-' + (n ? "left" : "top") + '"><\/div>'), u.append(o)), 0 === s.length && (s = t('<div class="swiper-slide-shadow-' + (n ? "right" : "bottom") + '"><\/div>'), u.append(s)), o.length && (o[0].style.opacity = 0 < i ? i : 0), s.length && (s[0].style.opacity = 0 < -i ? -i : 0))
                }(r.pointerEvents || r.prefixedPointerEvents) && (it[0].style.perspectiveOrigin = b + "px 50%")
            },
            setTransition: function(n) { this.slides.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n) }
        },
        ct = {
            init: function() {
                var t = this,
                    i = t.params.thumbs,
                    r = t.constructor;
                i.swiper instanceof r ? (t.thumbs.swiper = i.swiper, n.extend(t.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), n.extend(t.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 })) : n.isObject(i.swiper) && (t.thumbs.swiper = new r(n.extend({}, i.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 })), t.thumbs.swiperCreated = !0);
                t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass);
                t.thumbs.swiper.on("tap", t.thumbs.onThumbClick)
            },
            onThumbClick: function() {
                var n = this,
                    r = n.thumbs.swiper,
                    o, s, u, i, f, e;
                r && (o = r.clickedIndex, s = r.clickedSlide, s && t(s).hasClass(n.params.thumbs.slideThumbActiveClass) || null == o || ((u = r.params.loop ? parseInt(t(r.clickedSlide).attr("data-swiper-slide-index"), 10) : o, n.params.loop) && (i = n.activeIndex, n.slides.eq(i).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, i = n.activeIndex), f = n.slides.eq(i).prevAll('[data-swiper-slide-index="' + u + '"]').eq(0).index(), e = n.slides.eq(i).nextAll('[data-swiper-slide-index="' + u + '"]').eq(0).index(), u = void 0 === f ? e : void 0 === e ? f : e - i < i - f ? e : f), n.slideTo(u)))
            },
            update: function(n) {
                var r = this,
                    t = r.thumbs.swiper,
                    o, u, i, f, e, s, h, c, l;
                if (t)
                    if (o = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView, r.realIndex !== t.realIndex && (i = t.activeIndex, t.params.loop ? (t.slides.eq(i).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, i = t.activeIndex), f = t.slides.eq(i).prevAll('[data-swiper-slide-index="' + r.realIndex + '"]').eq(0).index(), e = t.slides.eq(i).nextAll('[data-swiper-slide-index="' + r.realIndex + '"]').eq(0).index(), u = void 0 === f ? e : void 0 === e ? f : e - i == i - f ? i : e - i < i - f ? e : f) : u = r.realIndex, t.visibleSlidesIndexes.indexOf(u) < 0 && (t.params.centeredSlides ? u = i < u ? u - Math.floor(o / 2) + 1 : u + Math.floor(o / 2) - 1 : i < u && (u = u - o + 1), t.slideTo(u, n ? 0 : void 0))), s = 1, h = r.params.thumbs.slideThumbActiveClass, 1 < r.params.slidesPerView && !r.params.centeredSlides && (s = r.params.slidesPerView), t.slides.removeClass(h), t.params.loop)
                        for (c = 0; c < s; c += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (r.realIndex + c) + '"]').addClass(h);
                    else
                        for (l = 0; l < s; l += 1) t.slides.eq(r.realIndex + l).addClass(h)
            }
        },
        pi = [si, hi, ci, li, ai, vi, yi, {
            name: "mousewheel",
            params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } },
            create: function() {
                var t = this;
                n.extend(t, { mousewheel: { enabled: !1, enable: c.enable.bind(t), disable: c.disable.bind(t), handle: c.handle.bind(t), handleMouseEnter: c.handleMouseEnter.bind(t), handleMouseLeave: c.handleMouseLeave.bind(t), lastScrollTime: n.now() } })
            },
            on: { init: function() { this.params.mousewheel.enabled && this.mousewheel.enable() }, destroy: function() { this.mousewheel.enabled && this.mousewheel.disable() } }
        }, {
            name: "navigation",
            params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
            create: function() {
                var t = this;
                n.extend(t, { navigation: { init: y.init.bind(t), update: y.update.bind(t), destroy: y.destroy.bind(t), onNextClick: y.onNextClick.bind(t), onPrevClick: y.onPrevClick.bind(t) } })
            },
            on: {
                init: function() {
                    this.navigation.init();
                    this.navigation.update()
                },
                toEdge: function() { this.navigation.update() },
                fromEdge: function() { this.navigation.update() },
                destroy: function() { this.navigation.destroy() },
                click: function(n) {
                    var u = this.navigation,
                        i = u.$nextEl,
                        r = u.$prevEl;
                    !this.params.navigation.hideOnClick || t(n.target).is(r) || t(n.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: { pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: function(n) { return n }, formatFractionTotal: function(n) { return n }, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", progressbarOppositeClass: "swiper-pagination-progressbar-opposite", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } },
            create: function() {
                var t = this;
                n.extend(t, { pagination: { init: nt.init.bind(t), render: nt.render.bind(t), update: nt.update.bind(t), destroy: nt.destroy.bind(t), dynamicBulletIndex: 0 } })
            },
            on: {
                init: function() {
                    this.pagination.init();
                    this.pagination.render();
                    this.pagination.update()
                },
                activeIndexChange: function() { this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update() },
                snapIndexChange: function() { this.params.loop || this.pagination.update() },
                slidesLengthChange: function() { this.params.loop && (this.pagination.render(), this.pagination.update()) },
                snapGridLengthChange: function() { this.params.loop || (this.pagination.render(), this.pagination.update()) },
                destroy: function() { this.pagination.destroy() },
                click: function(n) {
                    var i = this;
                    i.params.pagination.el && i.params.pagination.hideOnClick && 0 < i.pagination.$el.length && !t(n.target).hasClass(i.params.pagination.bulletClass) && i.pagination.$el.toggleClass(i.params.pagination.hiddenClass)
                }
            }
        }, {
            name: "scrollbar",
            params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } },
            create: function() {
                var t = this;
                n.extend(t, { scrollbar: { init: s.init.bind(t), destroy: s.destroy.bind(t), updateSize: s.updateSize.bind(t), setTranslate: s.setTranslate.bind(t), setTransition: s.setTransition.bind(t), enableDraggable: s.enableDraggable.bind(t), disableDraggable: s.disableDraggable.bind(t), setDragPosition: s.setDragPosition.bind(t), onDragStart: s.onDragStart.bind(t), onDragMove: s.onDragMove.bind(t), onDragEnd: s.onDragEnd.bind(t), isTouched: !1, timeout: null, dragTimeout: null } })
            },
            on: {
                init: function() {
                    this.scrollbar.init();
                    this.scrollbar.updateSize();
                    this.scrollbar.setTranslate()
                },
                update: function() { this.scrollbar.updateSize() },
                resize: function() { this.scrollbar.updateSize() },
                observerUpdate: function() { this.scrollbar.updateSize() },
                setTranslate: function() { this.scrollbar.setTranslate() },
                setTransition: function(n) { this.scrollbar.setTransition(n) },
                destroy: function() { this.scrollbar.destroy() }
            }
        }, { name: "parallax", params: { parallax: { enabled: !1 } }, create: function() { n.extend(this, { parallax: { setTransform: st.setTransform.bind(this), setTranslate: st.setTranslate.bind(this), setTransition: st.setTransition.bind(this) } }) }, on: { beforeInit: function() { this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0) }, init: function() { this.params.parallax && this.parallax.setTranslate() }, setTranslate: function() { this.params.parallax && this.parallax.setTranslate() }, setTransition: function(n) { this.params.parallax && this.parallax.setTransition(n) } } }, {
            name: "zoom",
            params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
            create: function() {
                var t = this,
                    r = { enabled: !1, scale: 1, currentScale: 1, isScaling: !1, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } },
                    i;
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(n) { r[n] = ht[n].bind(t) });
                n.extend(t, { zoom: r });
                i = 1;
                Object.defineProperty(t.zoom, "scale", {
                    get: function() { return i },
                    set: function(n) {
                        if (i !== n) {
                            var r = t.zoom.gesture.$imageEl ? t.zoom.gesture.$imageEl[0] : void 0,
                                u = t.zoom.gesture.$slideEl ? t.zoom.gesture.$slideEl[0] : void 0;
                            t.emit("zoomChange", n, r, u)
                        }
                        i = n
                    }
                })
            },
            on: { init: function() { this.params.zoom.enabled && this.zoom.enable() }, destroy: function() { this.zoom.disable() }, touchStart: function(n) { this.zoom.enabled && this.zoom.onTouchStart(n) }, touchEnd: function(n) { this.zoom.enabled && this.zoom.onTouchEnd(n) }, doubleTap: function(n) { this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(n) }, transitionEnd: function() { this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd() } }
        }, {
            name: "lazy",
            params: { lazy: { enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } },
            create: function() { n.extend(this, { lazy: { initialImageLoaded: !1, load: yt.load.bind(this), loadInSlide: yt.loadInSlide.bind(this) } }) },
            on: {
                beforeInit: function() { this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1) },
                init: function() { this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load() },
                scroll: function() { this.params.freeMode && !this.params.freeModeSticky && this.lazy.load() },
                resize: function() { this.params.lazy.enabled && this.lazy.load() },
                scrollbarDragMove: function() { this.params.lazy.enabled && this.lazy.load() },
                transitionStart: function() {
                    var n = this;
                    n.params.lazy.enabled && (n.params.lazy.loadOnTransitionStart || !n.params.lazy.loadOnTransitionStart && !n.lazy.initialImageLoaded) && n.lazy.load()
                },
                transitionEnd: function() { this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load() }
            }
        }, {
            name: "controller",
            params: { controller: { control: void 0, inverse: !1, by: "slide" } },
            create: function() {
                var t = this;
                n.extend(t, { controller: { control: t.params.controller.control, getInterpolateFunction: p.getInterpolateFunction.bind(t), setTranslate: p.setTranslate.bind(t), setTransition: p.setTransition.bind(t) } })
            },
            on: { update: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, resize: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, observerUpdate: function() { this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline) }, setTranslate: function(n, t) { this.controller.control && this.controller.setTranslate(n, t) }, setTransition: function(n, t) { this.controller.control && this.controller.setTransition(n, t) } }
        }, {
            name: "a11y",
            params: { a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}" } },
            create: function() {
                var i = this;
                n.extend(i, { a11y: { liveRegion: t('<span class="' + i.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"><\/span>') } });
                Object.keys(pt).forEach(function(n) { i.a11y[n] = pt[n].bind(i) })
            },
            on: { init: function() { this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation()) }, toEdge: function() { this.params.a11y.enabled && this.a11y.updateNavigation() }, fromEdge: function() { this.params.a11y.enabled && this.a11y.updateNavigation() }, paginationUpdate: function() { this.params.a11y.enabled && this.a11y.updatePagination() }, destroy: function() { this.params.a11y.enabled && this.a11y.destroy() } }
        }, {
            name: "history",
            params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
            create: function() {
                var t = this;
                n.extend(t, { history: { init: l.init.bind(t), setHistory: l.setHistory.bind(t), setHistoryPopState: l.setHistoryPopState.bind(t), scrollToSlide: l.scrollToSlide.bind(t), destroy: l.destroy.bind(t) } })
            },
            on: { init: function() { this.params.history.enabled && this.history.init() }, destroy: function() { this.params.history.enabled && this.history.destroy() }, transitionEnd: function() { this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex) } }
        }, {
            name: "hash-navigation",
            params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
            create: function() {
                var t = this;
                n.extend(t, { hashNavigation: { initialized: !1, init: tt.init.bind(t), destroy: tt.destroy.bind(t), setHash: tt.setHash.bind(t), onHashCange: tt.onHashCange.bind(t) } })
            },
            on: { init: function() { this.params.hashNavigation.enabled && this.hashNavigation.init() }, destroy: function() { this.params.hashNavigation.enabled && this.hashNavigation.destroy() }, transitionEnd: function() { this.hashNavigation.initialized && this.hashNavigation.setHash() } }
        }, {
            name: "autoplay",
            params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } },
            create: function() {
                var t = this;
                n.extend(t, { autoplay: { running: !1, paused: !1, run: it.run.bind(t), start: it.start.bind(t), stop: it.stop.bind(t), pause: it.pause.bind(t), onTransitionEnd: function(n) { t && !t.destroyed && t.$wrapperEl && n.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop()) } } })
            },
            on: { init: function() { this.params.autoplay.enabled && this.autoplay.start() }, beforeTransitionStart: function(n, t) { this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(n) : this.autoplay.stop()) }, sliderFirstMove: function() { this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause()) }, destroy: function() { this.autoplay.running && this.autoplay.stop() } }
        }, {
            name: "effect-fade",
            params: { fadeEffect: { crossFade: !1 } },
            create: function() { n.extend(this, { fadeEffect: { setTranslate: wt.setTranslate.bind(this), setTransition: wt.setTransition.bind(this) } }) },
            on: {
                beforeInit: function() {
                    var t = this,
                        i;
                    "fade" === t.params.effect && (t.classNames.push(t.params.containerModifierClass + "fade"), i = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 }, n.extend(t.params, i), n.extend(t.originalParams, i))
                },
                setTranslate: function() { "fade" === this.params.effect && this.fadeEffect.setTranslate() },
                setTransition: function(n) { "fade" === this.params.effect && this.fadeEffect.setTransition(n) }
            }
        }, {
            name: "effect-cube",
            params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 } },
            create: function() { n.extend(this, { cubeEffect: { setTranslate: bt.setTranslate.bind(this), setTransition: bt.setTransition.bind(this) } }) },
            on: {
                beforeInit: function() {
                    var t = this,
                        i;
                    "cube" === t.params.effect && (t.classNames.push(t.params.containerModifierClass + "cube"), t.classNames.push(t.params.containerModifierClass + "3d"), i = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 }, n.extend(t.params, i), n.extend(t.originalParams, i))
                },
                setTranslate: function() { "cube" === this.params.effect && this.cubeEffect.setTranslate() },
                setTransition: function(n) { "cube" === this.params.effect && this.cubeEffect.setTransition(n) }
            }
        }, {
            name: "effect-flip",
            params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
            create: function() { n.extend(this, { flipEffect: { setTranslate: kt.setTranslate.bind(this), setTransition: kt.setTransition.bind(this) } }) },
            on: {
                beforeInit: function() {
                    var t = this,
                        i;
                    "flip" === t.params.effect && (t.classNames.push(t.params.containerModifierClass + "flip"), t.classNames.push(t.params.containerModifierClass + "3d"), i = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 }, n.extend(t.params, i), n.extend(t.originalParams, i))
                },
                setTranslate: function() { "flip" === this.params.effect && this.flipEffect.setTranslate() },
                setTransition: function(n) { "flip" === this.params.effect && this.flipEffect.setTransition(n) }
            }
        }, { name: "effect-coverflow", params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } }, create: function() { n.extend(this, { coverflowEffect: { setTranslate: dt.setTranslate.bind(this), setTransition: dt.setTransition.bind(this) } }) }, on: { beforeInit: function() { var n = this; "coverflow" === n.params.effect && (n.classNames.push(n.params.containerModifierClass + "coverflow"), n.classNames.push(n.params.containerModifierClass + "3d"), n.params.watchSlidesProgress = !0, n.originalParams.watchSlidesProgress = !0) }, setTranslate: function() { "coverflow" === this.params.effect && this.coverflowEffect.setTranslate() }, setTransition: function(n) { "coverflow" === this.params.effect && this.coverflowEffect.setTransition(n) } } }, {
            name: "thumbs",
            params: { thumbs: { swiper: null, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } },
            create: function() { n.extend(this, { thumbs: { swiper: null, init: ct.init.bind(this), update: ct.update.bind(this), onThumbClick: ct.onThumbClick.bind(this) } }) },
            on: {
                beforeInit: function() {
                    var n = this.params.thumbs;
                    n && n.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                },
                slideChange: function() { this.thumbs.swiper && this.thumbs.update() },
                update: function() { this.thumbs.swiper && this.thumbs.update() },
                resize: function() { this.thumbs.swiper && this.thumbs.update() },
                observerUpdate: function() { this.thumbs.swiper && this.thumbs.update() },
                setTransition: function(n) {
                    var t = this.thumbs.swiper;
                    t && t.setTransition(n)
                },
                beforeDestroy: function() {
                    var n = this.thumbs.swiper;
                    n && this.thumbs.swiperCreated && n && n.destroy()
                }
            }
        }];
    return void 0 === o.use && (o.use = o.Class.use, o.installModule = o.Class.installModule), o.use(pi), o
});
/*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(n, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((n = n || self).bootstrap = {}, n.jQuery, n.Popper) }(this, function(n, t, i) {
    "use strict";

    function uu(n, t) { for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i) }

    function l(n, t, i) { return t && uu(n.prototype, t), i && uu(n, i), n }

    function f(n) {
        for (var i, r, t = 1; t < arguments.length; t++) i = null != arguments[t] ? arguments[t] : {}, r = Object.keys(i), "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(i).filter(function(n) { return Object.getOwnPropertyDescriptor(i, n).enumerable }))), r.forEach(function(t) {
            var r, u, f;
            r = n;
            f = i[u = t];
            u in r ? Object.defineProperty(r, u, { value: f, enumerable: !0, configurable: !0, writable: !0 }) : r[u] = f
        });
        return n
    }

    function cf(n) {
        var u = this,
            i = !1;
        return t(this).one(r.TRANSITION_END, function() { i = !0 }), setTimeout(function() { i || r.triggerTransitionEnd(u) }, n), this
    }

    function wu(n, t, i) {
        if (0 === n.length) return n;
        if (i && "function" == typeof i) return i(n);
        for (var u = (new window.DOMParser).parseFromString(n, "text/html"), e = Object.keys(t), f = [].slice.call(u.body.querySelectorAll("*")), o = function(n) {
                var i = f[n],
                    o = i.nodeName.toLowerCase(),
                    r, u;
                if (-1 === e.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                r = [].slice.call(i.attributes);
                u = [].concat(t["*"] || [], t[o] || []);
                r.forEach(function(n) {
                    (function(n, t) {
                        var i = n.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(i)) return -1 === us.indexOf(i) || Boolean(n.nodeValue.match(fs) || n.nodeValue.match(es));
                        for (var u = t.filter(function(n) { return n instanceof RegExp }), r = 0, f = u.length; r < f; r++)
                            if (i.match(u[r])) return !0;
                        return !1
                    })(n, u) || i.removeAttribute(n.nodeName)
                })
            }, r = 0, s = f.length; r < s; r++) o(r);
        return u.body.innerHTML
    }
    var at, r;
    t = t && t.hasOwnProperty("default") ? t.default : t;
    i = i && i.hasOwnProperty("default") ? i.default : i;
    at = "transitionend";
    r = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(n) { for (; n += ~~(1e6 * Math.random()), document.getElementById(n);); return n },
        getSelectorFromElement: function(n) {
            var t = n.getAttribute("data-target"),
                i;
            t && "#" !== t || (i = n.getAttribute("href"), t = i && "#" !== i ? i.trim() : "");
            try { return document.querySelector(t) ? t : null } catch (n) { return null }
        },
        getTransitionDurationFromElement: function(n) {
            if (!n) return 0;
            var i = t(n).css("transition-duration"),
                r = t(n).css("transition-delay"),
                u = parseFloat(i),
                f = parseFloat(r);
            return u || f ? (i = i.split(",")[0], r = r.split(",")[0], 1e3 * (parseFloat(i) + parseFloat(r))) : 0
        },
        reflow: function(n) { return n.offsetHeight },
        triggerTransitionEnd: function(n) { t(n).trigger(at) },
        supportsTransitionEnd: function() { return Boolean(at) },
        isElement: function(n) { return (n[0] || n).nodeType },
        typeCheckConfig: function(n, t, i) {
            var u, s;
            for (u in i)
                if (Object.prototype.hasOwnProperty.call(i, u)) {
                    var e = i[u],
                        f = t[u],
                        o = f && r.isElement(f) ? "element" : (s = f, {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(e).test(o)) throw new Error(n.toUpperCase() + ': Option "' + u + '" provided type "' + o + '" but expected type "' + e + '".');
                }
        },
        findShadowRoot: function(n) { if (!document.documentElement.attachShadow) return null; if ("function" != typeof n.getRootNode) return n instanceof ShadowRoot ? n : n.parentNode ? r.findShadowRoot(n.parentNode) : null; var t = n.getRootNode(); return t instanceof ShadowRoot ? t : null }
    };
    t.fn.emulateTransitionEnd = cf;
    t.event.special[r.TRANSITION_END] = { bindType: at, delegateType: at, handle: function(n) { if (t(n.target).is(this)) return n.handleObj.handler.apply(this, arguments) } };
    var vt = "alert",
        pi = "bs.alert",
        cr = "." + pi,
        lf = t.fn[vt],
        lr = { CLOSE: "close" + cr, CLOSED: "closed" + cr, CLICK_DATA_API: "click" + cr + ".data-api" },
        af = "alert",
        vf = "fade",
        yf = "show",
        it = function() {
            function n(n) { this._element = n }
            var i = n.prototype;
            return i.close = function(n) {
                var t = this._element;
                n && (t = this._getRootElement(n));
                this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, i.dispose = function() {
                t.removeData(this._element, pi);
                this._element = null
            }, i._getRootElement = function(n) {
                var u = r.getSelectorFromElement(n),
                    i = !1;
                return u && (i = document.querySelector(u)), i || (i = t(n).closest("." + af)[0]), i
            }, i._triggerCloseEvent = function(n) { var i = t.Event(lr.CLOSE); return t(n).trigger(i), i }, i._removeElement = function(n) {
                var u = this,
                    i;
                (t(n).removeClass(yf), t(n).hasClass(vf)) ? (i = r.getTransitionDurationFromElement(n), t(n).one(r.TRANSITION_END, function(t) { return u._destroyElement(n, t) }).emulateTransitionEnd(i)) : this._destroyElement(n)
            }, i._destroyElement = function(n) { t(n).detach().trigger(lr.CLOSED).remove() }, n._jQueryInterface = function(i) {
                return this.each(function() {
                    var u = t(this),
                        r = u.data(pi);
                    r || (r = new n(this), u.data(pi, r));
                    "close" === i && r[i](this)
                })
            }, n._handleDismiss = function(n) {
                return function(t) {
                    t && t.preventDefault();
                    n.close(this)
                }
            }, l(n, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), n
        }();
    t(document).on(lr.CLICK_DATA_API, '[data-dismiss="alert"]', it._handleDismiss(new it));
    t.fn[vt] = it._jQueryInterface;
    t.fn[vt].Constructor = it;
    t.fn[vt].noConflict = function() { return t.fn[vt] = lf, it._jQueryInterface };
    var yt = "button",
        wi = "bs.button",
        ar = "." + wi,
        vr = ".data-api",
        pf = t.fn[yt],
        pt = "active",
        wf = "btn",
        bf = "focus",
        fu = '[data-toggle^="button"]',
        kf = '[data-toggle="buttons"]',
        df = 'input:not([type="hidden"])',
        gf = ".active",
        eu = ".btn",
        ou = { CLICK_DATA_API: "click" + ar + vr, FOCUS_BLUR_DATA_API: "focus" + ar + vr + " blur" + ar + vr },
        wt = function() {
            function n(n) { this._element = n }
            var i = n.prototype;
            return i.toggle = function() {
                var r = !0,
                    f = !0,
                    i = t(this._element).closest(kf)[0],
                    n, u;
                if (i && (n = this._element.querySelector(df), n)) {
                    if ("radio" === n.type && (n.checked && this._element.classList.contains(pt) ? r = !1 : (u = i.querySelector(gf), u && t(u).removeClass(pt))), r) {
                        if (n.hasAttribute("disabled") || i.hasAttribute("disabled") || n.classList.contains("disabled") || i.classList.contains("disabled")) return;
                        n.checked = !this._element.classList.contains(pt);
                        t(n).trigger("change")
                    }
                    n.focus();
                    f = !1
                }
                f && this._element.setAttribute("aria-pressed", !this._element.classList.contains(pt));
                r && t(this._element).toggleClass(pt)
            }, i.dispose = function() {
                t.removeData(this._element, wi);
                this._element = null
            }, n._jQueryInterface = function(i) {
                return this.each(function() {
                    var r = t(this).data(wi);
                    r || (r = new n(this), t(this).data(wi, r));
                    "toggle" === i && r[i]()
                })
            }, l(n, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), n
        }();
    t(document).on(ou.CLICK_DATA_API, fu, function(n) {
        n.preventDefault();
        var i = n.target;
        t(i).hasClass(wf) || (i = t(i).closest(eu));
        wt._jQueryInterface.call(t(i), "toggle")
    }).on(ou.FOCUS_BLUR_DATA_API, fu, function(n) {
        var i = t(n.target).closest(eu)[0];
        t(i).toggleClass(bf, /^focus(in)?$/.test(n.type))
    });
    t.fn[yt] = wt._jQueryInterface;
    t.fn[yt].Constructor = wt;
    t.fn[yt].noConflict = function() { return t.fn[yt] = pf, wt._jQueryInterface };
    var rt = "carousel",
        bt = "bs.carousel",
        o = "." + bt,
        su = ".data-api",
        ne = t.fn[rt],
        yr = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        te = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        bi = "next",
        ki = "prev",
        ie = "left",
        re = "right",
        s = { SLIDE: "slide" + o, SLID: "slid" + o, KEYDOWN: "keydown" + o, MOUSEENTER: "mouseenter" + o, MOUSELEAVE: "mouseleave" + o, TOUCHSTART: "touchstart" + o, TOUCHMOVE: "touchmove" + o, TOUCHEND: "touchend" + o, POINTERDOWN: "pointerdown" + o, POINTERUP: "pointerup" + o, DRAG_START: "dragstart" + o, LOAD_DATA_API: "load" + o + su, CLICK_DATA_API: "click" + o + su },
        ue = "carousel",
        w = "active",
        fe = "slide",
        ee = "carousel-item-right",
        oe = "carousel-item-left",
        se = "carousel-item-next",
        he = "carousel-item-prev",
        ce = "pointer-event",
        le = ".active",
        pr = ".active.carousel-item",
        ae = ".carousel-item",
        ve = ".carousel-item img",
        ye = ".carousel-item-next, .carousel-item-prev",
        pe = ".carousel-indicators",
        we = '[data-ride="carousel"]',
        hu = { TOUCH: "touch", PEN: "pen" },
        ut = function() {
            function i(n, t) {
                this._items = null;
                this._interval = null;
                this._activeElement = null;
                this._isPaused = !1;
                this._isSliding = !1;
                this.touchTimeout = null;
                this.touchStartX = 0;
                this.touchDeltaX = 0;
                this._config = this._getConfig(t);
                this._element = n;
                this._indicatorsElement = this._element.querySelector(pe);
                this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints;
                this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);
                this._addEventListeners()
            }
            var n = i.prototype;
            return n.next = function() { this._isSliding || this._slide(bi) }, n.nextWhenVisible = function() {!document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next() }, n.prev = function() { this._isSliding || this._slide(ki) }, n.pause = function(n) {
                n || (this._isPaused = !0);
                this._element.querySelector(ye) && (r.triggerTransitionEnd(this._element), this.cycle(!0));
                clearInterval(this._interval);
                this._interval = null
            }, n.cycle = function(n) {
                n || (this._isPaused = !1);
                this._interval && (clearInterval(this._interval), this._interval = null);
                this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, n.to = function(n) {
                var u = this,
                    i, r;
                if (this._activeElement = this._element.querySelector(pr), i = this._getItemIndex(this._activeElement), !(n > this._items.length - 1 || n < 0))
                    if (this._isSliding) t(this._element).one(s.SLID, function() { return u.to(n) });
                    else {
                        if (i === n) return this.pause(), void this.cycle();
                        r = i < n ? bi : ki;
                        this._slide(r, this._items[n])
                    }
            }, n.dispose = function() {
                t(this._element).off(o);
                t.removeData(this._element, bt);
                this._items = null;
                this._config = null;
                this._element = null;
                this._interval = null;
                this._isPaused = null;
                this._isSliding = null;
                this._activeElement = null;
                this._indicatorsElement = null
            }, n._getConfig = function(n) { return n = f({}, yr, n), r.typeCheckConfig(rt, n, te), n }, n._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX),
                    n;
                t <= 40 || (n = t / this.touchDeltaX, 0 < n && this.prev(), n < 0 && this.next())
            }, n._addEventListeners = function() {
                var n = this;
                this._config.keyboard && t(this._element).on(s.KEYDOWN, function(t) { return n._keydown(t) });
                "hover" === this._config.pause && t(this._element).on(s.MOUSEENTER, function(t) { return n.pause(t) }).on(s.MOUSELEAVE, function(t) { return n.cycle(t) });
                this._config.touch && this._addTouchEventListeners()
            }, n._addTouchEventListeners = function() {
                var n = this,
                    i, r;
                this._touchSupported && (i = function(t) { n._pointerEvent && hu[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX) }, r = function(t) {
                    n._pointerEvent && hu[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX);
                    n._handleSwipe();
                    "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function(t) { return n.cycle(t) }, 500 + n._config.interval))
                }, t(this._element.querySelectorAll(ve)).on(s.DRAG_START, function(n) { return n.preventDefault() }), this._pointerEvent ? (t(this._element).on(s.POINTERDOWN, function(n) { return i(n) }), t(this._element).on(s.POINTERUP, function(n) { return r(n) }), this._element.classList.add(ce)) : (t(this._element).on(s.TOUCHSTART, function(n) { return i(n) }), t(this._element).on(s.TOUCHMOVE, function(t) {
                    var i;
                    n.touchDeltaX = (i = t).originalEvent.touches && 1 < i.originalEvent.touches.length ? 0 : i.originalEvent.touches[0].clientX - n.touchStartX
                }), t(this._element).on(s.TOUCHEND, function(n) { return r(n) })))
            }, n._keydown = function(n) {
                if (!/input|textarea/i.test(n.target.tagName)) switch (n.which) {
                    case 37:
                        n.preventDefault();
                        this.prev();
                        break;
                    case 39:
                        n.preventDefault();
                        this.next()
                }
            }, n._getItemIndex = function(n) { return this._items = n && n.parentNode ? [].slice.call(n.parentNode.querySelectorAll(ae)) : [], this._items.indexOf(n) }, n._getItemByDirection = function(n, t) {
                var u = n === bi,
                    f = n === ki,
                    i = this._getItemIndex(t),
                    e = this._items.length - 1,
                    r;
                return (f && 0 === i || u && i === e) && !this._config.wrap ? t : (r = (i + (n === ki ? -1 : 1)) % this._items.length, -1 === r ? this._items[this._items.length - 1] : this._items[r])
            }, n._triggerSlideEvent = function(n, i) {
                var u = this._getItemIndex(n),
                    f = this._getItemIndex(this._element.querySelector(pr)),
                    r = t.Event(s.SLIDE, { relatedTarget: n, direction: i, from: f, to: u });
                return t(this._element).trigger(r), r
            }, n._setActiveIndicatorElement = function(n) {
                var r, i;
                this._indicatorsElement && (r = [].slice.call(this._indicatorsElement.querySelectorAll(le)), t(r).removeClass(w), i = this._indicatorsElement.children[this._getItemIndex(n)], i && t(i).addClass(w))
            }, n._slide = function(n, i) {
                var e, o, h, a = this,
                    f = this._element.querySelector(pr),
                    p = this._getItemIndex(f),
                    u = i || f && this._getItemByDirection(n, f),
                    b = this._getItemIndex(u),
                    v = Boolean(this._interval),
                    c, l, y;
                (h = n === bi ? (e = oe, o = se, ie) : (e = ee, o = he, re), u && t(u).hasClass(w)) ? this._isSliding = !1: !this._triggerSlideEvent(u, h).isDefaultPrevented() && f && u && (this._isSliding = !0, v && this.pause(), this._setActiveIndicatorElement(u), c = t.Event(s.SLID, { relatedTarget: u, direction: h, from: p, to: b }), t(this._element).hasClass(fe) ? (t(u).addClass(o), r.reflow(u), t(f).addClass(e), t(u).addClass(e), l = parseInt(u.getAttribute("data-interval"), 10), this._config.interval = l ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, l) : this._config.defaultInterval || this._config.interval, y = r.getTransitionDurationFromElement(f), t(f).one(r.TRANSITION_END, function() {
                    t(u).removeClass(e + " " + o).addClass(w);
                    t(f).removeClass(w + " " + o + " " + e);
                    a._isSliding = !1;
                    setTimeout(function() { return t(a._element).trigger(c) }, 0)
                }).emulateTransitionEnd(y)) : (t(f).removeClass(w), t(u).addClass(w), this._isSliding = !1, t(this._element).trigger(c)), v && this.cycle())
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this).data(bt),
                        u = f({}, yr, t(this).data()),
                        e;
                    if ("object" == typeof n && (u = f({}, u, n)), e = "string" == typeof n ? n : u.slide, r || (r = new i(this, u), t(this).data(bt, r)), "number" == typeof n) r.to(n);
                    else if ("string" == typeof e) {
                        if ("undefined" == typeof r[e]) throw new TypeError('No method named "' + e + '"');
                        r[e]()
                    } else u.interval && u.ride && (r.pause(), r.cycle())
                })
            }, i._dataApiClickHandler = function(n) {
                var s = r.getSelectorFromElement(this),
                    u, o, e;
                s && (u = t(s)[0], u && t(u).hasClass(ue) && (o = f({}, t(u).data(), t(this).data()), e = this.getAttribute("data-slide-to"), e && (o.interval = !1), i._jQueryInterface.call(t(u), o), e && t(u).data(bt).to(e), n.preventDefault()))
            }, l(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return yr } }]), i
        }();
    t(document).on(s.CLICK_DATA_API, "[data-slide], [data-slide-to]", ut._dataApiClickHandler);
    t(window).on(s.LOAD_DATA_API, function() { for (var i, r = [].slice.call(document.querySelectorAll(we)), n = 0, u = r.length; n < u; n++) i = t(r[n]), ut._jQueryInterface.call(i, i.data()) });
    t.fn[rt] = ut._jQueryInterface;
    t.fn[rt].Constructor = ut;
    t.fn[rt].noConflict = function() { return t.fn[rt] = ne, ut._jQueryInterface };
    var ft = "collapse",
        b = "bs.collapse",
        kt = "." + b,
        be = t.fn[ft],
        wr = { toggle: !0, parent: "" },
        ke = { toggle: "boolean", parent: "(string|element)" },
        dt = { SHOW: "show" + kt, SHOWN: "shown" + kt, HIDE: "hide" + kt, HIDDEN: "hidden" + kt, CLICK_DATA_API: "click" + kt + ".data-api" },
        k = "show",
        gt = "collapse",
        di = "collapsing",
        br = "collapsed",
        cu = "width",
        de = "height",
        ge = ".show, .collapsing",
        lu = '[data-toggle="collapse"]',
        ni = function() {
            function i(n, t) {
                this._isTransitioning = !1;
                this._element = n;
                this._config = this._getConfig(t);
                this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'));
                for (var f = [].slice.call(document.querySelectorAll(lu)), i = 0, o = f.length; i < o; i++) {
                    var e = f[i],
                        u = r.getSelectorFromElement(e),
                        s = [].slice.call(document.querySelectorAll(u)).filter(function(t) { return t === n });
                    null !== u && 0 < s.length && (this._selector = u, this._triggerArray.push(e))
                }
                this._parent = this._config.parent ? this._getParent() : null;
                this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray);
                this._config.toggle && this.toggle()
            }
            var n = i.prototype;
            return n.toggle = function() { t(this._element).hasClass(k) ? this.hide() : this.show() }, n.show = function() {
                var n, e, u = this,
                    o, f, s, h;
                this._isTransitioning || t(this._element).hasClass(k) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(ge)).filter(function(n) { return "string" == typeof u._config.parent ? n.getAttribute("data-parent") === u._config.parent : n.classList.contains(gt) })).length && (n = null), n && (e = t(n).not(this._selector).data(b)) && e._isTransitioning) || (o = t.Event(dt.SHOW), (t(this._element).trigger(o), o.isDefaultPrevented()) || (n && (i._jQueryInterface.call(t(n).not(this._selector), "hide"), e || t(n).data(b, null)), f = this._getDimension(), t(this._element).removeClass(gt).addClass(di), this._element.style[f] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(br).attr("aria-expanded", !0), this.setTransitioning(!0), s = "scroll" + (f[0].toUpperCase() + f.slice(1)), h = r.getTransitionDurationFromElement(this._element), t(this._element).one(r.TRANSITION_END, function() {
                    t(u._element).removeClass(di).addClass(gt).addClass(k);
                    u._element.style[f] = "";
                    u.setTransitioning(!1);
                    t(u._element).trigger(dt.SHOWN)
                }).emulateTransitionEnd(h), this._element.style[f] = this._element[s] + "px"))
            }, n.hide = function() {
                var s = this,
                    u, n, f, i, e, o, h;
                if (!this._isTransitioning && t(this._element).hasClass(k) && (u = t.Event(dt.HIDE), t(this._element).trigger(u), !u.isDefaultPrevented())) {
                    if (n = this._getDimension(), this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", r.reflow(this._element), t(this._element).addClass(di).removeClass(gt).removeClass(k), f = this._triggerArray.length, 0 < f)
                        for (i = 0; i < f; i++) e = this._triggerArray[i], o = r.getSelectorFromElement(e), null !== o && (t([].slice.call(document.querySelectorAll(o))).hasClass(k) || t(e).addClass(br).attr("aria-expanded", !1));
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    h = r.getTransitionDurationFromElement(this._element);
                    t(this._element).one(r.TRANSITION_END, function() {
                        s.setTransitioning(!1);
                        t(s._element).removeClass(di).addClass(gt).trigger(dt.HIDDEN)
                    }).emulateTransitionEnd(h)
                }
            }, n.setTransitioning = function(n) { this._isTransitioning = n }, n.dispose = function() {
                t.removeData(this._element, b);
                this._config = null;
                this._parent = null;
                this._element = null;
                this._triggerArray = null;
                this._isTransitioning = null
            }, n._getConfig = function(n) { return (n = f({}, wr, n)).toggle = Boolean(n.toggle), r.typeCheckConfig(ft, n, ke), n }, n._getDimension = function() { return t(this._element).hasClass(cu) ? cu : de }, n._getParent = function() {
                var n, e = this,
                    u, f;
                return r.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent), u = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', f = [].slice.call(n.querySelectorAll(u)), t(f).each(function(n, t) { e._addAriaAndCollapsedClass(i._getTargetFromElement(t), [t]) }), n
            }, n._addAriaAndCollapsedClass = function(n, i) {
                var r = t(n).hasClass(k);
                i.length && t(i).toggleClass(br, !r).attr("aria-expanded", r)
            }, i._getTargetFromElement = function(n) { var t = r.getSelectorFromElement(n); return t ? document.querySelector(t) : null }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var u = t(this),
                        r = u.data(b),
                        e = f({}, wr, u.data(), "object" == typeof n && n ? n : {});
                    if (!r && e.toggle && /show|hide/.test(n) && (e.toggle = !1), r || (r = new i(this, e), u.data(b, r)), "string" == typeof n) {
                        if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, l(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return wr } }]), i
        }();
    t(document).on(dt.CLICK_DATA_API, lu, function(n) {
        "A" === n.currentTarget.tagName && n.preventDefault();
        var i = t(this),
            u = r.getSelectorFromElement(this),
            f = [].slice.call(document.querySelectorAll(u));
        t(f).each(function() {
            var n = t(this),
                r = n.data(b) ? "toggle" : i.data();
            ni._jQueryInterface.call(n, r)
        })
    });
    t.fn[ft] = ni._jQueryInterface;
    t.fn[ft].Constructor = ni;
    t.fn[ft].noConflict = function() { return t.fn[ft] = be, ni._jQueryInterface };
    var et = "dropdown",
        ti = "bs.dropdown",
        y = "." + ti,
        kr = ".data-api",
        no = t.fn[et],
        to = new RegExp("38|40|27"),
        e = { HIDE: "hide" + y, HIDDEN: "hidden" + y, SHOW: "show" + y, SHOWN: "shown" + y, CLICK: "click" + y, CLICK_DATA_API: "click" + y + kr, KEYDOWN_DATA_API: "keydown" + y + kr, KEYUP_DATA_API: "keyup" + y + kr },
        gi = "disabled",
        h = "show",
        io = "dropup",
        ro = "dropright",
        uo = "dropleft",
        au = "dropdown-menu-right",
        fo = "position-static",
        nr = '[data-toggle="dropdown"]',
        dr = ".dropdown-menu",
        eo = ".navbar-nav",
        oo = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        so = "top-start",
        ho = "top-end",
        co = "bottom-start",
        lo = "bottom-end",
        ao = "right-start",
        vo = "left-start",
        yo = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" },
        po = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" },
        p = function() {
            function n(n, t) {
                this._element = n;
                this._popper = null;
                this._config = this._getConfig(t);
                this._menu = this._getMenuElement();
                this._inNavbar = this._detectNavbar();
                this._addEventListeners()
            }
            var u = n.prototype;
            return u.toggle = function() {
                var u, c, o, s, f;
                if (!this._element.disabled && !t(this._element).hasClass(gi) && (u = n._getParentFromElement(this._element), c = t(this._menu).hasClass(h), (n._clearMenus(), !c) && (o = { relatedTarget: this._element }, s = t.Event(e.SHOW, o), t(u).trigger(s), !s.isDefaultPrevented()))) {
                    if (!this._inNavbar) {
                        if ("undefined" == typeof i) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                        f = this._element;
                        "parent" === this._config.reference ? f = u : r.isElement(this._config.reference) && (f = this._config.reference, "undefined" != typeof this._config.reference.jquery && (f = this._config.reference[0]));
                        "scrollParent" !== this._config.boundary && t(u).addClass(fo);
                        this._popper = new i(f, this._menu, this._getPopperConfig())
                    }
                    "ontouchstart" in document.documentElement && 0 === t(u).closest(eo).length && t(document.body).children().on("mouseover", null, t.noop);
                    this._element.focus();
                    this._element.setAttribute("aria-expanded", !0);
                    t(this._menu).toggleClass(h);
                    t(u).toggleClass(h).trigger(t.Event(e.SHOWN, o))
                }
            }, u.show = function() {
                if (!(this._element.disabled || t(this._element).hasClass(gi) || t(this._menu).hasClass(h))) {
                    var i = { relatedTarget: this._element },
                        r = t.Event(e.SHOW, i),
                        u = n._getParentFromElement(this._element);
                    t(u).trigger(r);
                    r.isDefaultPrevented() || (t(this._menu).toggleClass(h), t(u).toggleClass(h).trigger(t.Event(e.SHOWN, i)))
                }
            }, u.hide = function() {
                if (!this._element.disabled && !t(this._element).hasClass(gi) && t(this._menu).hasClass(h)) {
                    var i = { relatedTarget: this._element },
                        r = t.Event(e.HIDE, i),
                        u = n._getParentFromElement(this._element);
                    t(u).trigger(r);
                    r.isDefaultPrevented() || (t(this._menu).toggleClass(h), t(u).toggleClass(h).trigger(t.Event(e.HIDDEN, i)))
                }
            }, u.dispose = function() {
                t.removeData(this._element, ti);
                t(this._element).off(y);
                this._element = null;
                (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, u.update = function() {
                this._inNavbar = this._detectNavbar();
                null !== this._popper && this._popper.scheduleUpdate()
            }, u._addEventListeners = function() {
                var n = this;
                t(this._element).on(e.CLICK, function(t) {
                    t.preventDefault();
                    t.stopPropagation();
                    n.toggle()
                })
            }, u._getConfig = function(n) { return n = f({}, this.constructor.Default, t(this._element).data(), n), r.typeCheckConfig(et, n, this.constructor.DefaultType), n }, u._getMenuElement = function() {
                if (!this._menu) {
                    var t = n._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(dr))
                }
                return this._menu
            }, u._getPlacement = function() {
                var i = t(this._element.parentNode),
                    n = co;
                return i.hasClass(io) ? (n = so, t(this._menu).hasClass(au) && (n = ho)) : i.hasClass(ro) ? n = ao : i.hasClass(uo) ? n = vo : t(this._menu).hasClass(au) && (n = lo), n
            }, u._detectNavbar = function() { return 0 < t(this._element).closest(".navbar").length }, u._getOffset = function() {
                var t = this,
                    n = {};
                return "function" == typeof this._config.offset ? n.fn = function(n) { return n.offsets = f({}, n.offsets, t._config.offset(n.offsets, t._element) || {}), n } : n.offset = this._config.offset, n
            }, u._getPopperConfig = function() { var n = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n }, n._jQueryInterface = function(i) {
                return this.each(function() {
                    var r = t(this).data(ti);
                    if (r || (r = new n(this, "object" == typeof i ? i : null), t(this).data(ti, r)), "string" == typeof i) {
                        if ("undefined" == typeof r[i]) throw new TypeError('No method named "' + i + '"');
                        r[i]()
                    }
                })
            }, n._clearMenus = function(i) {
                var l, s;
                if (!i || 3 !== i.which && ("keyup" !== i.type || 9 === i.which))
                    for (var u = [].slice.call(document.querySelectorAll(nr)), r = 0, a = u.length; r < a; r++) {
                        var f = n._getParentFromElement(u[r]),
                            c = t(u[r]).data(ti),
                            o = { relatedTarget: u[r] };
                        (i && "click" === i.type && (o.clickEvent = i), c) && (l = c._menu, !t(f).hasClass(h) || i && ("click" === i.type && /input|textarea/i.test(i.target.tagName) || "keyup" === i.type && 9 === i.which) && t.contains(f, i.target) || (s = t.Event(e.HIDE, o), t(f).trigger(s), s.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), u[r].setAttribute("aria-expanded", "false"), t(l).removeClass(h), t(f).removeClass(h).trigger(t.Event(e.HIDDEN, o)))))
                    }
            }, n._getParentFromElement = function(n) { var t, i = r.getSelectorFromElement(n); return i && (t = document.querySelector(i)), t || n.parentNode }, n._dataApiKeydownHandler = function(i) {
                var f, e, u, r, o;
                (/input|textarea/i.test(i.target.tagName) ? 32 === i.which || 27 !== i.which && (40 !== i.which && 38 !== i.which || t(i.target).closest(dr).length) : !to.test(i.which)) || (i.preventDefault(), i.stopPropagation(), this.disabled || t(this).hasClass(gi)) || (f = n._getParentFromElement(this), e = t(f).hasClass(h), e && (!e || 27 !== i.which && 32 !== i.which) ? (u = [].slice.call(f.querySelectorAll(oo)), 0 !== u.length && (r = u.indexOf(i.target), 38 === i.which && 0 < r && r--, 40 === i.which && r < u.length - 1 && r++, r < 0 && (r = 0), u[r].focus())) : (27 === i.which && (o = f.querySelector(nr), t(o).trigger("focus")), t(this).trigger("click")))
            }, l(n, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return yo } }, { key: "DefaultType", get: function() { return po } }]), n
        }();
    t(document).on(e.KEYDOWN_DATA_API, nr, p._dataApiKeydownHandler).on(e.KEYDOWN_DATA_API, dr, p._dataApiKeydownHandler).on(e.CLICK_DATA_API + " " + e.KEYUP_DATA_API, p._clearMenus).on(e.CLICK_DATA_API, nr, function(n) {
        n.preventDefault();
        n.stopPropagation();
        p._jQueryInterface.call(t(this), "toggle")
    }).on(e.CLICK_DATA_API, ".dropdown form", function(n) { n.stopPropagation() });
    t.fn[et] = p._jQueryInterface;
    t.fn[et].Constructor = p;
    t.fn[et].noConflict = function() { return t.fn[et] = no, p._jQueryInterface };
    var ot = "modal",
        ii = "bs.modal",
        c = "." + ii,
        wo = t.fn[ot],
        gr = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        bo = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        u = { HIDE: "hide" + c, HIDDEN: "hidden" + c, SHOW: "show" + c, SHOWN: "shown" + c, FOCUSIN: "focusin" + c, RESIZE: "resize" + c, CLICK_DISMISS: "click.dismiss" + c, KEYDOWN_DISMISS: "keydown.dismiss" + c, MOUSEUP_DISMISS: "mouseup.dismiss" + c, MOUSEDOWN_DISMISS: "mousedown.dismiss" + c, CLICK_DATA_API: "click" + c + ".data-api" },
        ko = "modal-dialog-scrollable",
        go = "modal-scrollbar-measure",
        ns = "modal-backdrop",
        vu = "modal-open",
        st = "fade",
        tr = "show",
        ts = ".modal-dialog",
        is = ".modal-body",
        rs = '[data-dismiss="modal"]',
        yu = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        pu = ".sticky-top",
        ri = function() {
            function i(n, t) {
                this._config = this._getConfig(t);
                this._element = n;
                this._dialog = n.querySelector(ts);
                this._backdrop = null;
                this._isShown = !1;
                this._isBodyOverflowing = !1;
                this._ignoreBackdropClick = !1;
                this._isTransitioning = !1;
                this._scrollbarWidth = 0
            }
            var n = i.prototype;
            return n.toggle = function(n) { return this._isShown ? this.hide() : this.show(n) }, n.show = function(n) {
                var i = this,
                    r;
                this._isShown || this._isTransitioning || (t(this._element).hasClass(st) && (this._isTransitioning = !0), r = t.Event(u.SHOW, { relatedTarget: n }), t(this._element).trigger(r), this._isShown || r.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(u.CLICK_DISMISS, rs, function(n) { return i.hide(n) }), t(this._dialog).on(u.MOUSEDOWN_DISMISS, function() { t(i._element).one(u.MOUSEUP_DISMISS, function(n) { t(n.target).is(i._element) && (i._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return i._showElement(n) })))
            }, n.hide = function(n) {
                var o = this,
                    i, f, e;
                (n && n.preventDefault(), this._isShown && !this._isTransitioning) && (i = t.Event(u.HIDE), (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) && (this._isShown = !1, f = t(this._element).hasClass(st), (f && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(u.FOCUSIN), t(this._element).removeClass(tr), t(this._element).off(u.CLICK_DISMISS), t(this._dialog).off(u.MOUSEDOWN_DISMISS), f) ? (e = r.getTransitionDurationFromElement(this._element), t(this._element).one(r.TRANSITION_END, function(n) { return o._hideModal(n) }).emulateTransitionEnd(e)) : this._hideModal()))
            }, n.dispose = function() {
                [window, this._element, this._dialog].forEach(function(n) { return t(n).off(c) });
                t(document).off(u.FOCUSIN);
                t.removeData(this._element, ii);
                this._config = null;
                this._element = null;
                this._dialog = null;
                this._backdrop = null;
                this._isShown = null;
                this._isBodyOverflowing = null;
                this._ignoreBackdropClick = null;
                this._isTransitioning = null;
                this._scrollbarWidth = null
            }, n.handleUpdate = function() { this._adjustDialog() }, n._getConfig = function(n) { return n = f({}, gr, n), r.typeCheckConfig(ot, n, bo), n }, n._showElement = function(n) {
                var i = this,
                    e = t(this._element).hasClass(st),
                    o, f, s;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element);
                this._element.style.display = "block";
                this._element.removeAttribute("aria-hidden");
                this._element.setAttribute("aria-modal", !0);
                t(this._dialog).hasClass(ko) ? this._dialog.querySelector(is).scrollTop = 0 : this._element.scrollTop = 0;
                e && r.reflow(this._element);
                t(this._element).addClass(tr);
                this._config.focus && this._enforceFocus();
                o = t.Event(u.SHOWN, { relatedTarget: n });
                f = function() {
                    i._config.focus && i._element.focus();
                    i._isTransitioning = !1;
                    t(i._element).trigger(o)
                };
                e ? (s = r.getTransitionDurationFromElement(this._dialog), t(this._dialog).one(r.TRANSITION_END, f).emulateTransitionEnd(s)) : f()
            }, n._enforceFocus = function() {
                var n = this;
                t(document).off(u.FOCUSIN).on(u.FOCUSIN, function(i) { document !== i.target && n._element !== i.target && 0 === t(n._element).has(i.target).length && n._element.focus() })
            }, n._setEscapeEvent = function() {
                var n = this;
                this._isShown && this._config.keyboard ? t(this._element).on(u.KEYDOWN_DISMISS, function(t) { 27 === t.which && (t.preventDefault(), n.hide()) }) : this._isShown || t(this._element).off(u.KEYDOWN_DISMISS)
            }, n._setResizeEvent = function() {
                var n = this;
                this._isShown ? t(window).on(u.RESIZE, function(t) { return n.handleUpdate(t) }) : t(window).off(u.RESIZE)
            }, n._hideModal = function() {
                var n = this;
                this._element.style.display = "none";
                this._element.setAttribute("aria-hidden", !0);
                this._element.removeAttribute("aria-modal");
                this._isTransitioning = !1;
                this._showBackdrop(function() {
                    t(document.body).removeClass(vu);
                    n._resetAdjustments();
                    n._resetScrollbar();
                    t(n._element).trigger(u.HIDDEN)
                })
            }, n._removeBackdrop = function() { this._backdrop && (t(this._backdrop).remove(), this._backdrop = null) }, n._showBackdrop = function(n) {
                var i = this,
                    f = t(this._element).hasClass(st) ? st : "",
                    o, e, s;
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = ns, f && this._backdrop.classList.add(f), t(this._backdrop).appendTo(document.body), t(this._element).on(u.CLICK_DISMISS, function(n) { i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : n.target === n.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide()) }), f && r.reflow(this._backdrop), t(this._backdrop).addClass(tr), !n) return;
                    if (!f) return void n();
                    o = r.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop).one(r.TRANSITION_END, n).emulateTransitionEnd(o)
                } else !this._isShown && this._backdrop ? (t(this._backdrop).removeClass(tr), e = function() {
                    i._removeBackdrop();
                    n && n()
                }, t(this._element).hasClass(st) ? (s = r.getTransitionDurationFromElement(this._backdrop), t(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(s)) : e()) : n && n()
            }, n._adjustDialog = function() {
                var n = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && n && (this._element.style.paddingLeft = this._scrollbarWidth + "px");
                this._isBodyOverflowing && !n && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function() {
                this._element.style.paddingLeft = "";
                this._element.style.paddingRight = ""
            }, n._checkScrollbar = function() {
                var n = document.body.getBoundingClientRect();
                this._isBodyOverflowing = n.left + n.right < window.innerWidth;
                this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function() {
                var n = this,
                    i, r, u, f;
                this._isBodyOverflowing && (i = [].slice.call(document.querySelectorAll(yu)), r = [].slice.call(document.querySelectorAll(pu)), t(i).each(function(i, r) {
                    var u = r.style.paddingRight,
                        f = t(r).css("padding-right");
                    t(r).data("padding-right", u).css("padding-right", parseFloat(f) + n._scrollbarWidth + "px")
                }), t(r).each(function(i, r) {
                    var u = r.style.marginRight,
                        f = t(r).css("margin-right");
                    t(r).data("margin-right", u).css("margin-right", parseFloat(f) - n._scrollbarWidth + "px")
                }), u = document.body.style.paddingRight, f = t(document.body).css("padding-right"), t(document.body).data("padding-right", u).css("padding-right", parseFloat(f) + this._scrollbarWidth + "px"));
                t(document.body).addClass(vu)
            }, n._resetScrollbar = function() {
                var r = [].slice.call(document.querySelectorAll(yu)),
                    n, i;
                t(r).each(function(n, i) {
                    var r = t(i).data("padding-right");
                    t(i).removeData("padding-right");
                    i.style.paddingRight = r || ""
                });
                n = [].slice.call(document.querySelectorAll("" + pu));
                t(n).each(function(n, i) { var r = t(i).data("margin-right"); "undefined" != typeof r && t(i).css("margin-right", r).removeData("margin-right") });
                i = t(document.body).data("padding-right");
                t(document.body).removeData("padding-right");
                document.body.style.paddingRight = i || ""
            }, n._getScrollbarWidth = function() {
                var n = document.createElement("div"),
                    t;
                return n.className = go, document.body.appendChild(n), t = n.getBoundingClientRect().width - n.clientWidth, document.body.removeChild(n), t
            }, i._jQueryInterface = function(n, r) {
                return this.each(function() {
                    var u = t(this).data(ii),
                        e = f({}, gr, t(this).data(), "object" == typeof n && n ? n : {});
                    if (u || (u = new i(this, e), t(this).data(ii, u)), "string" == typeof n) {
                        if ("undefined" == typeof u[n]) throw new TypeError('No method named "' + n + '"');
                        u[n](r)
                    } else e.show && u.show(r)
                })
            }, l(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return gr } }]), i
        }();
    t(document).on(u.CLICK_DATA_API, '[data-toggle="modal"]', function(n) {
        var i, e = this,
            o = r.getSelectorFromElement(this),
            s, h;
        o && (i = document.querySelector(o));
        s = t(i).data(ii) ? "toggle" : f({}, t(i).data(), t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
        h = t(i).one(u.SHOW, function(n) { n.isDefaultPrevented() || h.one(u.HIDDEN, function() { t(e).is(":visible") && e.focus() }) });
        ri._jQueryInterface.call(t(i), s, this)
    });
    t.fn[ot] = ri._jQueryInterface;
    t.fn[ot].Constructor = ri;
    t.fn[ot].noConflict = function() { return t.fn[ot] = wo, ri._jQueryInterface };
    var us = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        fs = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        es = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    var d = "tooltip",
        ir = "bs.tooltip",
        a = "." + ir,
        os = t.fn[d],
        bu = "bs-tooltip",
        ss = new RegExp("(^|\\s)" + bu + "\\S+", "g"),
        hs = ["sanitize", "whiteList", "sanitizeFn"],
        cs = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object" },
        ls = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        as = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"><\/div><div class="tooltip-inner"><\/div><\/div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] } },
        ui = "show",
        nu = "out",
        vs = { HIDE: "hide" + a, HIDDEN: "hidden" + a, SHOW: "show" + a, SHOWN: "shown" + a, INSERTED: "inserted" + a, CLICK: "click" + a, FOCUSIN: "focusin" + a, FOCUSOUT: "focusout" + a, MOUSEENTER: "mouseenter" + a, MOUSELEAVE: "mouseleave" + a },
        fi = "fade",
        ei = "show",
        ys = ".tooltip-inner",
        ps = ".arrow",
        oi = "hover",
        tu = "focus",
        ws = "click",
        bs = "manual",
        g = function() {
            function u(n, t) {
                if ("undefined" == typeof i) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0;
                this._timeout = 0;
                this._hoverState = "";
                this._activeTrigger = {};
                this._popper = null;
                this.element = n;
                this.config = this._getConfig(t);
                this.tip = null;
                this._setListeners()
            }
            var n = u.prototype;
            return n.enable = function() { this._isEnabled = !0 }, n.disable = function() { this._isEnabled = !1 }, n.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, n.toggle = function(n) {
                if (this._isEnabled)
                    if (n) {
                        var r = this.constructor.DATA_KEY,
                            i = t(n.currentTarget).data(r);
                        i || (i = new this.constructor(n.currentTarget, this._getDelegateConfig()), t(n.currentTarget).data(r, i));
                        i._activeTrigger.click = !i._activeTrigger.click;
                        i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (t(this.getTipElement()).hasClass(ei)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, n.dispose = function() {
                clearTimeout(this._timeout);
                t.removeData(this.element, this.constructor.DATA_KEY);
                t(this.element).off(this.constructor.EVENT_KEY);
                t(this.element).closest(".modal").off("hide.bs.modal");
                this.tip && t(this.tip).remove();
                this._isEnabled = null;
                this._timeout = null;
                this._hoverState = null;
                (this._activeTrigger = null) !== this._popper && this._popper.destroy();
                this._popper = null;
                this.element = null;
                this.config = null;
                this.tip = null
            }, n.show = function() {
                var n = this,
                    f, e, c, u, o, l, s, a, h, v;
                if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                if (f = t.Event(this.constructor.Event.SHOW), this.isWithContent() && this._isEnabled) {
                    if (t(this.element).trigger(f), e = r.findShadowRoot(this.element), c = t.contains(null !== e ? e : this.element.ownerDocument.documentElement, this.element), f.isDefaultPrevented() || !c) return;
                    u = this.getTipElement();
                    o = r.getUID(this.constructor.NAME);
                    u.setAttribute("id", o);
                    this.element.setAttribute("aria-describedby", o);
                    this.setContent();
                    this.config.animation && t(u).addClass(fi);
                    l = "function" == typeof this.config.placement ? this.config.placement.call(this, u, this.element) : this.config.placement;
                    s = this._getAttachment(l);
                    this.addAttachmentClass(s);
                    a = this._getContainer();
                    t(u).data(this.constructor.DATA_KEY, this);
                    t.contains(this.element.ownerDocument.documentElement, this.tip) || t(u).appendTo(a);
                    t(this.element).trigger(this.constructor.Event.INSERTED);
                    this._popper = new i(this.element, u, { placement: s, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ps }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t) { t.originalPlacement !== t.placement && n._handlePopperPlacementChange(t) }, onUpdate: function(t) { return n._handlePopperPlacementChange(t) } });
                    t(u).addClass(ei);
                    "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                    h = function() {
                        n.config.animation && n._fixTransition();
                        var i = n._hoverState;
                        n._hoverState = null;
                        t(n.element).trigger(n.constructor.Event.SHOWN);
                        i === nu && n._leave(null, n)
                    };
                    t(this.tip).hasClass(fi) ? (v = r.getTransitionDurationFromElement(this.tip), t(this.tip).one(r.TRANSITION_END, h).emulateTransitionEnd(v)) : h()
                }
            }, n.hide = function(n) {
                var i = this,
                    u = this.getTipElement(),
                    f = t.Event(this.constructor.Event.HIDE),
                    e = function() {
                        i._hoverState !== ui && u.parentNode && u.parentNode.removeChild(u);
                        i._cleanTipClass();
                        i.element.removeAttribute("aria-describedby");
                        t(i.element).trigger(i.constructor.Event.HIDDEN);
                        null !== i._popper && i._popper.destroy();
                        n && n()
                    },
                    o;
                (t(this.element).trigger(f), f.isDefaultPrevented()) || ((t(u).removeClass(ei), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger[ws] = !1, this._activeTrigger[tu] = !1, this._activeTrigger[oi] = !1, t(this.tip).hasClass(fi)) ? (o = r.getTransitionDurationFromElement(u), t(u).one(r.TRANSITION_END, e).emulateTransitionEnd(o)) : e(), this._hoverState = "")
            }, n.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, n.isWithContent = function() { return Boolean(this.getTitle()) }, n.addAttachmentClass = function(n) { t(this.getTipElement()).addClass(bu + "-" + n) }, n.getTipElement = function() { return this.tip = this.tip || t(this.config.template)[0], this.tip }, n.setContent = function() {
                var n = this.getTipElement();
                this.setElementContent(t(n.querySelectorAll(ys)), this.getTitle());
                t(n).removeClass(fi + " " + ei)
            }, n.setElementContent = function(n, i) { "object" != typeof i || !i.nodeType && !i.jquery ? this.config.html ? (this.config.sanitize && (i = wu(i, this.config.whiteList, this.config.sanitizeFn)), n.html(i)) : n.text(i) : this.config.html ? t(i).parent().is(n) || n.empty().append(i) : n.text(t(i).text()) }, n.getTitle = function() { var n = this.element.getAttribute("data-original-title"); return n || (n = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), n }, n._getOffset = function() {
                var t = this,
                    n = {};
                return "function" == typeof this.config.offset ? n.fn = function(n) { return n.offsets = f({}, n.offsets, t.config.offset(n.offsets, t.element) || {}), n } : n.offset = this.config.offset, n
            }, n._getContainer = function() { return !1 === this.config.container ? document.body : r.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container) }, n._getAttachment = function(n) { return ls[n.toUpperCase()] }, n._setListeners = function() {
                var n = this;
                this.config.trigger.split(" ").forEach(function(i) {
                    if ("click" === i) t(n.element).on(n.constructor.Event.CLICK, n.config.selector, function(t) { return n.toggle(t) });
                    else if (i !== bs) {
                        var r = i === oi ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN,
                            u = i === oi ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT;
                        t(n.element).on(r, n.config.selector, function(t) { return n._enter(t) }).on(u, n.config.selector, function(t) { return n._leave(t) })
                    }
                });
                t(this.element).closest(".modal").on("hide.bs.modal", function() { n.element && n.hide() });
                this.config.selector ? this.config = f({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle()
            }, n._fixTitle = function() {
                var n = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== n) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, n._enter = function(n, i) {
                var r = this.constructor.DATA_KEY;
                (i = i || t(n.currentTarget).data(r)) || (i = new this.constructor(n.currentTarget, this._getDelegateConfig()), t(n.currentTarget).data(r, i));
                n && (i._activeTrigger["focusin" === n.type ? tu : oi] = !0);
                t(i.getTipElement()).hasClass(ei) || i._hoverState === ui ? i._hoverState = ui : (clearTimeout(i._timeout), i._hoverState = ui, i.config.delay && i.config.delay.show ? i._timeout = setTimeout(function() { i._hoverState === ui && i.show() }, i.config.delay.show) : i.show())
            }, n._leave = function(n, i) {
                var r = this.constructor.DATA_KEY;
                (i = i || t(n.currentTarget).data(r)) || (i = new this.constructor(n.currentTarget, this._getDelegateConfig()), t(n.currentTarget).data(r, i));
                n && (i._activeTrigger["focusout" === n.type ? tu : oi] = !1);
                i._isWithActiveTrigger() || (clearTimeout(i._timeout), i._hoverState = nu, i.config.delay && i.config.delay.hide ? i._timeout = setTimeout(function() { i._hoverState === nu && i.hide() }, i.config.delay.hide) : i.hide())
            }, n._isWithActiveTrigger = function() {
                for (var n in this._activeTrigger)
                    if (this._activeTrigger[n]) return !0;
                return !1
            }, n._getConfig = function(n) { var i = t(this.element).data(); return Object.keys(i).forEach(function(n) {-1 !== hs.indexOf(n) && delete i[n] }), "number" == typeof(n = f({}, this.constructor.Default, i, "object" == typeof n && n ? n : {})).delay && (n.delay = { show: n.delay, hide: n.delay }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), r.typeCheckConfig(d, n, this.constructor.DefaultType), n.sanitize && (n.template = wu(n.template, n.whiteList, n.sanitizeFn)), n }, n._getDelegateConfig = function() {
                var t = {},
                    n;
                if (this.config)
                    for (n in this.config) this.constructor.Default[n] !== this.config[n] && (t[n] = this.config[n]);
                return t
            }, n._cleanTipClass = function() {
                var i = t(this.getTipElement()),
                    n = i.attr("class").match(ss);
                null !== n && n.length && i.removeClass(n.join(""))
            }, n._handlePopperPlacementChange = function(n) {
                var t = n.instance;
                this.tip = t.popper;
                this._cleanTipClass();
                this.addAttachmentClass(this._getAttachment(n.placement))
            }, n._fixTransition = function() {
                var n = this.getTipElement(),
                    i = this.config.animation;
                null === n.getAttribute("x-placement") && (t(n).removeClass(fi), this.config.animation = !1, this.hide(), this.show(), this.config.animation = i)
            }, u._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data(ir),
                        r = "object" == typeof n && n;
                    if ((i || !/dispose|hide/.test(n)) && (i || (i = new u(this, r), t(this).data(ir, i)), "string" == typeof n)) {
                        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, l(u, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return as } }, { key: "NAME", get: function() { return d } }, { key: "DATA_KEY", get: function() { return ir } }, { key: "Event", get: function() { return vs } }, { key: "EVENT_KEY", get: function() { return a } }, { key: "DefaultType", get: function() { return cs } }]), u
        }();
    t.fn[d] = g._jQueryInterface;
    t.fn[d].Constructor = g;
    t.fn[d].noConflict = function() { return t.fn[d] = os, g._jQueryInterface };
    var ht = "popover",
        rr = "bs.popover",
        v = "." + rr,
        ks = t.fn[ht],
        ku = "bs-popover",
        ds = new RegExp("(^|\\s)" + ku + "\\S+", "g"),
        gs = f({}, g.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>' }),
        nh = f({}, g.DefaultType, { content: "(string|element|function)" }),
        th = "fade",
        ih = "show",
        rh = ".popover-header",
        uh = ".popover-body",
        fh = { HIDE: "hide" + v, HIDDEN: "hidden" + v, SHOW: "show" + v, SHOWN: "shown" + v, INSERTED: "inserted" + v, CLICK: "click" + v, FOCUSIN: "focusin" + v, FOCUSOUT: "focusout" + v, MOUSEENTER: "mouseenter" + v, MOUSELEAVE: "mouseleave" + v },
        ur = function(n) {
            function r() { return n.apply(this, arguments) || this }
            var u, f, i;
            return f = n, (u = r).prototype = Object.create(f.prototype), (u.prototype.constructor = u).__proto__ = f, i = r.prototype, i.isWithContent = function() { return this.getTitle() || this._getContent() }, i.addAttachmentClass = function(n) { t(this.getTipElement()).addClass(ku + "-" + n) }, i.getTipElement = function() { return this.tip = this.tip || t(this.config.template)[0], this.tip }, i.setContent = function() {
                var i = t(this.getTipElement()),
                    n;
                this.setElementContent(i.find(rh), this.getTitle());
                n = this._getContent();
                "function" == typeof n && (n = n.call(this.element));
                this.setElementContent(i.find(uh), n);
                i.removeClass(th + " " + ih)
            }, i._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, i._cleanTipClass = function() {
                var i = t(this.getTipElement()),
                    n = i.attr("class").match(ds);
                null !== n && 0 < n.length && i.removeClass(n.join(""))
            }, r._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data(rr),
                        u = "object" == typeof n ? n : null;
                    if ((i || !/dispose|hide/.test(n)) && (i || (i = new r(this, u), t(this).data(rr, i)), "string" == typeof n)) {
                        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, l(r, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return gs } }, { key: "NAME", get: function() { return ht } }, { key: "DATA_KEY", get: function() { return rr } }, { key: "Event", get: function() { return fh } }, { key: "EVENT_KEY", get: function() { return v } }, { key: "DefaultType", get: function() { return nh } }]), r
        }(g);
    t.fn[ht] = ur._jQueryInterface;
    t.fn[ht].Constructor = ur;
    t.fn[ht].noConflict = function() { return t.fn[ht] = ks, ur._jQueryInterface };
    var nt = "scrollspy",
        fr = "bs.scrollspy",
        er = "." + fr,
        eh = t.fn[nt],
        du = { offset: 10, method: "auto", target: "" },
        oh = { offset: "number", method: "string", target: "(string|element)" },
        iu = { ACTIVATE: "activate" + er, SCROLL: "scroll" + er, LOAD_DATA_API: "load" + er + ".data-api" },
        sh = "dropdown-item",
        tt = "active",
        hh = '[data-spy="scroll"]',
        gu = ".nav, .list-group",
        ru = ".nav-link",
        ch = ".nav-item",
        nf = ".list-group-item",
        lh = ".dropdown",
        ah = ".dropdown-item",
        vh = ".dropdown-toggle",
        yh = "offset",
        tf = "position",
        si = function() {
            function i(n, i) {
                var r = this;
                this._element = n;
                this._scrollElement = "BODY" === n.tagName ? window : n;
                this._config = this._getConfig(i);
                this._selector = this._config.target + " " + ru + "," + this._config.target + " " + nf + "," + this._config.target + " " + ah;
                this._offsets = [];
                this._targets = [];
                this._activeTarget = null;
                this._scrollHeight = 0;
                t(this._scrollElement).on(iu.SCROLL, function(n) { return r._process(n) });
                this.refresh();
                this._process()
            }
            var n = i.prototype;
            return n.refresh = function() {
                var n = this,
                    u = this._scrollElement === this._scrollElement.window ? yh : tf,
                    i = "auto" === this._config.method ? u : this._config.method,
                    f = i === tf ? this._getScrollTop() : 0;
                this._offsets = [];
                this._targets = [];
                this._scrollHeight = this._getScrollHeight();
                [].slice.call(document.querySelectorAll(this._selector)).map(function(n) {
                    var u, e = r.getSelectorFromElement(n),
                        o;
                    return (e && (u = document.querySelector(e)), u) && (o = u.getBoundingClientRect(), o.width || o.height) ? [t(u)[i]().top + f, e] : null
                }).filter(function(n) { return n }).sort(function(n, t) { return n[0] - t[0] }).forEach(function(t) {
                    n._offsets.push(t[0]);
                    n._targets.push(t[1])
                })
            }, n.dispose = function() {
                t.removeData(this._element, fr);
                t(this._scrollElement).off(er);
                this._element = null;
                this._scrollElement = null;
                this._config = null;
                this._selector = null;
                this._offsets = null;
                this._targets = null;
                this._activeTarget = null;
                this._scrollHeight = null
            }, n._getConfig = function(n) {
                if ("string" != typeof(n = f({}, du, "object" == typeof n && n ? n : {})).target) {
                    var i = t(n.target).attr("id");
                    i || (i = r.getUID(nt), t(n.target).attr("id", i));
                    n.target = "#" + i
                }
                return r.typeCheckConfig(nt, n, oh), n
            }, n._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, n._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, n._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, n._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    r = this._getScrollHeight(),
                    u = this._config.offset + r - this._getOffsetHeight(),
                    i, n;
                if (this._scrollHeight !== r && this.refresh(), u <= t) i = this._targets[this._targets.length - 1], this._activeTarget !== i && this._activate(i);
                else { if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (n = this._offsets.length; n--;) this._activeTarget !== this._targets[n] && t >= this._offsets[n] && ("undefined" == typeof this._offsets[n + 1] || t < this._offsets[n + 1]) && this._activate(this._targets[n]) }
            }, n._activate = function(n) {
                this._activeTarget = n;
                this._clear();
                var r = this._selector.split(",").map(function(t) { return t + '[data-target="' + n + '"],' + t + '[href="' + n + '"]' }),
                    i = t([].slice.call(document.querySelectorAll(r.join(","))));
                i.hasClass(sh) ? (i.closest(lh).find(vh).addClass(tt), i.addClass(tt)) : (i.addClass(tt), i.parents(gu).prev(ru + ", " + nf).addClass(tt), i.parents(gu).prev(ch).children(ru).addClass(tt));
                t(this._scrollElement).trigger(iu.ACTIVATE, { relatedTarget: n })
            }, n._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(n) { return n.classList.contains(tt) }).forEach(function(n) { return n.classList.remove(tt) })
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = t(this).data(fr);
                    if (r || (r = new i(this, "object" == typeof n && n), t(this).data(fr, r)), "string" == typeof n) {
                        if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, l(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "Default", get: function() { return du } }]), i
        }();
    t(window).on(iu.LOAD_DATA_API, function() { for (var r, n = [].slice.call(document.querySelectorAll(hh)), i = n.length; i--;) r = t(n[i]), si._jQueryInterface.call(r, r.data()) });
    t.fn[nt] = si._jQueryInterface;
    t.fn[nt].Constructor = si;
    t.fn[nt].noConflict = function() { return t.fn[nt] = eh, si._jQueryInterface };
    var or = "bs.tab",
        hi = "." + or,
        ph = t.fn.tab,
        ci = { HIDE: "hide" + hi, HIDDEN: "hidden" + hi, SHOW: "show" + hi, SHOWN: "shown" + hi, CLICK_DATA_API: "click" + hi + ".data-api" },
        wh = "dropdown-menu",
        li = "active",
        bh = "disabled",
        rf = "fade",
        uf = "show",
        kh = ".dropdown",
        dh = ".nav, .list-group",
        ff = ".active",
        ef = "> li > .active",
        gh = ".dropdown-toggle",
        nc = "> .dropdown-menu .active",
        ai = function() {
            function n(n) { this._element = n }
            var i = n.prototype;
            return i.show = function() {
                var h = this,
                    u, n, i, f, c, e, o, s;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(li) || t(this._element).hasClass(bh) || (i = t(this._element).closest(dh)[0], f = r.getSelectorFromElement(this._element), i && (c = "UL" === i.nodeName || "OL" === i.nodeName ? ef : ff, n = (n = t.makeArray(t(i).find(c)))[n.length - 1]), e = t.Event(ci.HIDE, { relatedTarget: this._element }), o = t.Event(ci.SHOW, { relatedTarget: n }), (n && t(n).trigger(e), t(this._element).trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (f && (u = document.querySelector(f)), this._activate(this._element, i), s = function() {
                    var i = t.Event(ci.HIDDEN, { relatedTarget: h._element }),
                        r = t.Event(ci.SHOWN, { relatedTarget: n });
                    t(n).trigger(i);
                    t(h._element).trigger(r)
                }, u ? this._activate(u, u.parentNode, s) : s()))
            }, i.dispose = function() {
                t.removeData(this._element, or);
                this._element = null
            }, i._activate = function(n, i, u) {
                var s = this,
                    f = (!i || "UL" !== i.nodeName && "OL" !== i.nodeName ? t(i).children(ff) : t(i).find(ef))[0],
                    h = u && f && t(f).hasClass(rf),
                    e = function() { return s._transitionComplete(n, f, u) },
                    o;
                f && h ? (o = r.getTransitionDurationFromElement(f), t(f).removeClass(uf).one(r.TRANSITION_END, e).emulateTransitionEnd(o)) : e()
            }, i._transitionComplete = function(n, i, u) {
                var f, e, o;
                i && (t(i).removeClass(li), f = t(i.parentNode).find(nc)[0], f && t(f).removeClass(li), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1));
                (t(n).addClass(li), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !0), r.reflow(n), n.classList.contains(rf) && n.classList.add(uf), n.parentNode && t(n.parentNode).hasClass(wh)) && (e = t(n).closest(kh)[0], e && (o = [].slice.call(e.querySelectorAll(gh)), t(o).addClass(li)), n.setAttribute("aria-expanded", !0));
                u && u()
            }, n._jQueryInterface = function(i) {
                return this.each(function() {
                    var u = t(this),
                        r = u.data(or);
                    if (r || (r = new n(this), u.data(or, r)), "string" == typeof i) {
                        if ("undefined" == typeof r[i]) throw new TypeError('No method named "' + i + '"');
                        r[i]()
                    }
                })
            }, l(n, null, [{ key: "VERSION", get: function() { return "4.3.1" } }]), n
        }();
    t(document).on(ci.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(n) {
        n.preventDefault();
        ai._jQueryInterface.call(t(this), "show")
    });
    t.fn.tab = ai._jQueryInterface;
    t.fn.tab.Constructor = ai;
    t.fn.tab.noConflict = function() { return t.fn.tab = ph, ai._jQueryInterface };
    var ct = "toast",
        sr = "bs.toast",
        vi = "." + sr,
        tc = t.fn[ct],
        lt = { CLICK_DISMISS: "click.dismiss" + vi, HIDE: "hide" + vi, HIDDEN: "hidden" + vi, SHOW: "show" + vi, SHOWN: "shown" + vi },
        ic = "fade",
        of = "hide",
        yi = "show",
        sf = "showing",
        rc = { animation: "boolean", autohide: "boolean", delay: "number" },
        hf = { animation: !0, autohide: !0, delay: 500 },
        uc = '[data-dismiss="toast"]',
        hr = function() {
            function i(n, t) {
                this._element = n;
                this._config = this._getConfig(t);
                this._timeout = null;
                this._setListeners()
            }
            var n = i.prototype;
            return n.show = function() {
                var n = this,
                    i, u;
                t(this._element).trigger(lt.SHOW);
                this._config.animation && this._element.classList.add(ic);
                i = function() {
                    n._element.classList.remove(sf);
                    n._element.classList.add(yi);
                    t(n._element).trigger(lt.SHOWN);
                    n._config.autohide && n.hide()
                };
                (this._element.classList.remove(of), this._element.classList.add(sf), this._config.animation) ? (u = r.getTransitionDurationFromElement(this._element), t(this._element).one(r.TRANSITION_END, i).emulateTransitionEnd(u)) : i()
            }, n.hide = function(n) {
                var i = this;
                this._element.classList.contains(yi) && (t(this._element).trigger(lt.HIDE), n ? this._close() : this._timeout = setTimeout(function() { i._close() }, this._config.delay))
            }, n.dispose = function() {
                clearTimeout(this._timeout);
                this._timeout = null;
                this._element.classList.contains(yi) && this._element.classList.remove(yi);
                t(this._element).off(lt.CLICK_DISMISS);
                t.removeData(this._element, sr);
                this._element = null;
                this._config = null
            }, n._getConfig = function(n) { return n = f({}, hf, t(this._element).data(), "object" == typeof n && n ? n : {}), r.typeCheckConfig(ct, n, this.constructor.DefaultType), n }, n._setListeners = function() {
                var n = this;
                t(this._element).on(lt.CLICK_DISMISS, uc, function() { return n.hide(!0) })
            }, n._close = function() {
                var n = this,
                    i = function() {
                        n._element.classList.add(of);
                        t(n._element).trigger(lt.HIDDEN)
                    },
                    u;
                (this._element.classList.remove(yi), this._config.animation) ? (u = r.getTransitionDurationFromElement(this._element), t(this._element).one(r.TRANSITION_END, i).emulateTransitionEnd(u)) : i()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var u = t(this),
                        r = u.data(sr);
                    if (r || (r = new i(this, "object" == typeof n && n), u.data(sr, r)), "string" == typeof n) {
                        if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n](this)
                    }
                })
            }, l(i, null, [{ key: "VERSION", get: function() { return "4.3.1" } }, { key: "DefaultType", get: function() { return rc } }, { key: "Default", get: function() { return hf } }]), i
        }();
    t.fn[ct] = hr._jQueryInterface;
    t.fn[ct].Constructor = hr;
    t.fn[ct].noConflict = function() { return t.fn[ct] = tc, hr._jQueryInterface },
        function() { if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var n = t.fn.jquery.split(" ")[0].split("."); if (n[0] < 2 && n[1] < 9 || 1 === n[0] && 9 === n[1] && n[2] < 1 || 4 <= n[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"); }();
    n.Util = r;
    n.Alert = it;
    n.Button = wt;
    n.Carousel = ut;
    n.Collapse = ni;
    n.Dropdown = p;
    n.Modal = ri;
    n.Popover = ur;
    n.Scrollspy = si;
    n.Tab = ai;
    n.Toast = hr;
    n.Tooltip = g;
    Object.defineProperty(n, "__esModule", { value: !0 })
});
! function(n, t, i) {
    "use strict";

    function s(n, t) {
        var u, o, e, r = [],
            s = 0;
        n && n.isDefaultPrevented() || (n.preventDefault(), t = t || {}, n && n.data && (t = f(n.data.options, t)), u = t.$target || i(n.currentTarget).trigger("blur"), (e = i.fancybox.getInstance()) && e.$trigger && e.$trigger.is(u) || (t.selector ? r = i(t.selector) : (o = u.attr("data-fancybox") || "", o ? (r = n.data ? n.data.items : [], r = r.length ? r.filter('[data-fancybox="' + o + '"]') : i('[data-fancybox="' + o + '"]')) : r = [u]), s = i(r).index(u), s < 0 && (s = 0), e = i.fancybox.open(r, t, s), e.$trigger = u))
    }
    if (n.console = n.console || { info: function() {} }, i) {
        if (i.fn.fancybox) return void console.info("fancyBox already initialized");
        var l = { closeExisting: !1, loop: !1, gutter: 50, keyboard: !0, preventCaptionOverlap: !0, arrows: !0, infobar: !0, smallBtn: "auto", toolbar: "auto", buttons: ["zoom", "slideShow", "thumbs", "close"], idleTime: 3, protect: !1, modal: !1, image: { preload: !1 }, ajax: { settings: { data: { fancybox: !0 } } }, iframe: { tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""><\/iframe>', preload: !0, css: {}, attr: { scrolling: "auto" } }, video: { tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download<\/a> and watch with your favorite video player!<\/video>', format: "", autoStart: !0 }, defaultType: "image", animationEffect: "zoom", animationDuration: 366, zoomOpacity: "auto", transitionEffect: "fade", transitionDuration: 366, slideClass: "", baseClass: "", baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"><\/div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index><\/span>&nbsp;/&nbsp;<span data-fancybox-count><\/span><\/div><div class="fancybox-toolbar">{{buttons}}<\/div><div class="fancybox-navigation">{{arrows}}<\/div><div class="fancybox-stage"><\/div><div class="fancybox-caption"><div class="fancybox-caption__body"><\/div><\/div><\/div><\/div>', spinnerTpl: '<div class="fancybox-loading"><\/div>', errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<\/p><\/div>', btnTpl: { download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/><\/svg><\/a>', zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/><\/svg><\/button>', close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/><\/svg><\/button>', arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/><\/svg><\/div><\/button>', arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/><\/svg><\/div><\/button>', smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/><\/svg><\/button>' }, parentEl: "body", hideScrollbar: !0, autoFocus: !0, backFocus: !0, trapFocus: !0, fullScreen: { autoStart: !1 }, touch: { vertical: !0, momentum: !0 }, hash: null, media: {}, slideShow: { autoStart: !1, speed: 3e3 }, thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" }, wheel: "auto", onInit: i.noop, beforeLoad: i.noop, afterLoad: i.noop, beforeShow: i.noop, afterShow: i.noop, beforeClose: i.noop, afterClose: i.noop, onActivate: i.noop, onDeactivate: i.noop, clickContent: function(n) { return "image" === n.type && "zoom" }, clickSlide: "close", clickOutside: "close", dblclickContent: !1, dblclickSlide: !1, dblclickOutside: !1, mobile: { preventCaptionOverlap: !1, idleTime: !1, clickContent: function(n) { return "image" === n.type && "toggleControls" }, clickSlide: function(n) { return "image" === n.type ? "toggleControls" : "close" }, dblclickContent: function(n) { return "image" === n.type && "zoom" }, dblclickSlide: function(n) { return "image" === n.type && "zoom" } }, lang: "en", i18n: { en: { CLOSE: "Close", NEXT: "Next", PREV: "Previous", ERROR: "The requested content cannot be loaded. <br/> Please try again later.", PLAY_START: "Start slideshow", PLAY_STOP: "Pause slideshow", FULL_SCREEN: "Full screen", THUMBS: "Thumbnails", DOWNLOAD: "Download", SHARE: "Share", ZOOM: "Zoom" }, de: { CLOSE: "Schlie&szlig;en", NEXT: "Weiter", PREV: "Zur&uuml;ck", ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.", PLAY_START: "Diaschau starten", PLAY_STOP: "Diaschau beenden", FULL_SCREEN: "Vollbild", THUMBS: "Vorschaubilder", DOWNLOAD: "Herunterladen", SHARE: "Teilen", ZOOM: "Vergr&ouml;&szlig;ern" } } },
            e = i(n),
            r = i(t),
            a = 0,
            v = function(n) { return n && n.hasOwnProperty && n instanceof i },
            c = function() { return n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame || function(t) { return n.setTimeout(t, 1e3 / 60) } }(),
            y = function() { return n.cancelAnimationFrame || n.webkitCancelAnimationFrame || n.mozCancelAnimationFrame || n.oCancelAnimationFrame || function(t) { n.clearTimeout(t) } }(),
            o = function() {
                var n, r = t.createElement("fakeelement"),
                    i = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };
                for (n in i)
                    if (void 0 !== r.style[n]) return i[n];
                return "transitionend"
            }(),
            u = function(n) { return n && n.length && n[0].offsetHeight },
            f = function(n, t) { var r = i.extend(!0, {}, n, t); return i.each(t, function(n, t) { i.isArray(t) && (r[n] = t) }), r },
            p = function(n) { var r, u; return !(!n || n.ownerDocument !== t) && (i(".fancybox-container").css("pointer-events", "none"), r = { x: n.getBoundingClientRect().left + n.offsetWidth / 2, y: n.getBoundingClientRect().top + n.offsetHeight / 2 }, u = t.elementFromPoint(r.x, r.y) === n, i(".fancybox-container").css("pointer-events", ""), u) },
            h = function(n, t, r) {
                var u = this;
                u.opts = f({ index: r }, i.fancybox.defaults);
                i.isPlainObject(t) && (u.opts = f(u.opts, t));
                i.fancybox.isMobile && (u.opts = f(u.opts, u.opts.mobile));
                u.id = u.opts.id || ++a;
                u.currIndex = parseInt(u.opts.index, 10) || 0;
                u.prevIndex = null;
                u.prevPos = null;
                u.currPos = 0;
                u.firstRun = !0;
                u.group = [];
                u.slides = {};
                u.addContent(n);
                u.group.length && u.init()
            };
        i.extend(h.prototype, {
            init: function() {
                var f, e, r = this,
                    o = r.group[r.currIndex],
                    u = o.opts;
                u.closeExisting && i.fancybox.close(!0);
                i("body").addClass("fancybox-active");
                !i.fancybox.getInstance() && !1 !== u.hideScrollbar && !i.fancybox.isMobile && t.body.scrollHeight > n.innerHeight && (i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (n.innerWidth - t.documentElement.clientWidth) + "px;}<\/style>"), i("body").addClass("compensate-for-scrollbar"));
                e = "";
                i.each(u.buttons, function(n, t) { e += u.btnTpl[t] || "" });
                f = i(r.translate(r, u.baseTpl.replace("{{buttons}}", e).replace("{{arrows}}", u.btnTpl.arrowLeft + u.btnTpl.arrowRight))).attr("id", "fancybox-container-" + r.id).addClass(u.baseClass).data("FancyBox", r).appendTo(u.parentEl);
                r.$refs = { container: f };
                ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(n) { r.$refs[n] = f.find(".fancybox-" + n) });
                r.trigger("onInit");
                r.activate();
                r.jumpTo(r.currIndex)
            },
            translate: function(n, t) { var i = n.opts.i18n[n.opts.lang] || n.opts.i18n.en; return t.replace(/\{\{(\w+)\}\}/g, function(n, t) { return void 0 === i[t] ? n : i[t] }) },
            addContent: function(n) {
                var r, t = this,
                    u = i.makeArray(n);
                i.each(u, function(n, r) {
                    var h, o, l, s, c, u = {},
                        e = {};
                    i.isPlainObject(r) ? (u = r, e = r.opts || r) : "object" === i.type(r) && i(r).length ? (h = i(r), e = h.data() || {}, e = i.extend(!0, {}, e, e.options), e.$orig = h, u.src = t.opts.src || e.src || h.attr("href"), u.type || u.src || (u.type = "inline", u.src = r)) : u = { type: "html", src: r + "" };
                    u.opts = i.extend(!0, {}, t.opts, e);
                    i.isArray(e.buttons) && (u.opts.buttons = e.buttons);
                    i.fancybox.isMobile && u.opts.mobile && (u.opts = f(u.opts, u.opts.mobile));
                    o = u.type || u.opts.type;
                    s = u.src || "";
                    !o && s && ((l = s.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (o = "video", u.opts.video.format || (u.opts.video.format = "video/" + ("ogv" === l[1] ? "ogg" : l[1]))) : s.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? o = "image" : s.match(/\.(pdf)((\?|#).*)?$/i) ? (o = "iframe", u = i.extend(!0, u, { contentType: "pdf", opts: { iframe: { preload: !1 } } })) : "#" === s.charAt(0) && (o = "inline"));
                    o ? u.type = o : t.trigger("objectNeedsType", u);
                    u.contentType || (u.contentType = i.inArray(u.type, ["html", "inline", "ajax"]) > -1 ? "html" : u.type);
                    u.index = t.group.length;
                    "auto" == u.opts.smallBtn && (u.opts.smallBtn = i.inArray(u.type, ["html", "inline", "ajax"]) > -1);
                    "auto" === u.opts.toolbar && (u.opts.toolbar = !u.opts.smallBtn);
                    u.$thumb = u.opts.$thumb || null;
                    u.opts.$trigger && u.index === t.opts.index && (u.$thumb = u.opts.$trigger.find("img:first"), u.$thumb.length && (u.opts.$orig = u.opts.$trigger));
                    u.$thumb && u.$thumb.length || !u.opts.$orig || (u.$thumb = u.opts.$orig.find("img:first"));
                    u.$thumb && !u.$thumb.length && (u.$thumb = null);
                    u.thumb = u.opts.thumb || (u.$thumb ? u.$thumb[0].src : null);
                    "function" === i.type(u.opts.caption) && (u.opts.caption = u.opts.caption.apply(r, [t, u]));
                    "function" === i.type(t.opts.caption) && (u.opts.caption = t.opts.caption.apply(r, [t, u]));
                    u.opts.caption instanceof i || (u.opts.caption = void 0 === u.opts.caption ? "" : u.opts.caption + "");
                    "ajax" === u.type && (c = s.split(/\s+/, 2), c.length > 1 && (u.src = c.shift(), u.opts.filter = c.shift()));
                    u.opts.modal && (u.opts = i.extend(!0, u.opts, { trapFocus: !0, infobar: 0, toolbar: 0, smallBtn: 0, keyboard: 0, slideShow: 0, fullScreen: 0, thumbs: 0, touch: 0, clickContent: !1, clickSlide: !1, clickOutside: !1, dblclickContent: !1, dblclickSlide: !1, dblclickOutside: !1 }));
                    t.group.push(u)
                });
                Object.keys(t.slides).length && (t.updateControls(), (r = t.Thumbs) && r.isActive && (r.create(), r.focus()))
            },
            addEvents: function() {
                var t = this;
                t.removeEvents();
                t.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(n) {
                    n.stopPropagation();
                    n.preventDefault();
                    t.close(n)
                }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(n) {
                    n.stopPropagation();
                    n.preventDefault();
                    t.previous()
                }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(n) {
                    n.stopPropagation();
                    n.preventDefault();
                    t.next()
                }).on("click.fb", "[data-fancybox-zoom]", function() { t[t.isScaledDown() ? "scaleToActual" : "scaleToFit"]() });
                e.on("orientationchange.fb resize.fb", function(n) {
                    n && n.originalEvent && "resize" === n.originalEvent.type ? (t.requestId && y(t.requestId), t.requestId = c(function() { t.update(n) })) : (t.current && "iframe" === t.current.type && t.$refs.stage.hide(), setTimeout(function() {
                        t.$refs.stage.show();
                        t.update(n)
                    }, i.fancybox.isMobile ? 600 : 250))
                });
                r.on("keydown.fb", function(n) {
                    var f = i.fancybox ? i.fancybox.getInstance() : null,
                        u = f.current,
                        r = n.keyCode || n.which;
                    return 9 == r ? void(u.opts.trapFocus && t.focus(n)) : (!u.opts.keyboard || n.ctrlKey || n.altKey || n.shiftKey || i(n.target).is("input,textarea,video,audio")) ? void 0 : 8 === r || 27 === r ? (n.preventDefault(), void t.close(n)) : 37 === r || 38 === r ? (n.preventDefault(), void t.previous()) : 39 === r || 40 === r ? (n.preventDefault(), void t.next()) : void t.trigger("afterKeydown", n, r)
                });
                t.group[t.currIndex].opts.idleTime && (t.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function() {
                    t.idleSecondsCounter = 0;
                    t.isIdle && t.showControls();
                    t.isIdle = !1
                }), t.idleInterval = n.setInterval(function() {++t.idleSecondsCounter >= t.group[t.currIndex].opts.idleTime && !t.isDragging && (t.isIdle = !0, t.idleSecondsCounter = 0, t.hideControls()) }, 1e3))
            },
            removeEvents: function() {
                var t = this;
                e.off("orientationchange.fb resize.fb");
                r.off("keydown.fb .fb-idle");
                this.$refs.container.off(".fb-close .fb-prev .fb-next");
                t.idleInterval && (n.clearInterval(t.idleInterval), t.idleInterval = null)
            },
            previous: function(n) { return this.jumpTo(this.currPos - 1, n) },
            next: function(n) { return this.jumpTo(this.currPos + 1, n) },
            jumpTo: function(n, t) {
                var s, a, h, f, e, o, v, c, y, r = this,
                    l = r.group.length;
                if (!(r.isDragging || r.isClosing || r.isAnimating && r.firstRun)) {
                    if (n = parseInt(n, 10), !(h = r.current ? r.current.opts.loop : r.opts.loop) && (n < 0 || n >= l)) return !1;
                    if (s = r.firstRun = !Object.keys(r.slides).length, e = r.current, r.prevIndex = r.currIndex, r.prevPos = r.currPos, f = r.createSlide(n), l > 1 && ((h || f.index < l - 1) && r.createSlide(n + 1), (h || f.index > 0) && r.createSlide(n - 1)), r.current = f, r.currIndex = f.index, r.currPos = f.pos, r.trigger("beforeShow", s), r.updateControls(), f.forcedDuration = void 0, i.isNumeric(t) ? f.forcedDuration = t : t = f.opts[s ? "animationDuration" : "transitionDuration"], t = parseInt(t, 10), a = r.isMoved(f), f.$slide.addClass("fancybox-slide--current"), s) return f.opts.animationEffect && t && r.$refs.container.css("transition-duration", t + "ms"), r.$refs.container.addClass("fancybox-is-open").trigger("focus"), r.loadSlide(f), void r.preload("image");
                    o = i.fancybox.getTranslate(e.$slide);
                    v = i.fancybox.getTranslate(r.$refs.stage);
                    i.each(r.slides, function(n, t) { i.fancybox.stop(t.$slide, !0) });
                    e.pos !== f.pos && (e.isComplete = !1);
                    e.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");
                    a ? (y = o.left - (e.pos * o.width + e.pos * e.opts.gutter), i.each(r.slides, function(n, e) {
                        e.$slide.removeClass("fancybox-animated").removeClass(function(n, t) { return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ") });
                        var s = e.pos * o.width + e.pos * e.opts.gutter;
                        i.fancybox.setTranslate(e.$slide, { top: 0, left: s - v.left + y });
                        e.pos !== f.pos && e.$slide.addClass("fancybox-slide--" + (e.pos > f.pos ? "next" : "previous"));
                        u(e.$slide);
                        i.fancybox.animate(e.$slide, { top: 0, left: (e.pos - f.pos) * o.width + (e.pos - f.pos) * e.opts.gutter }, t, function() {
                            e.$slide.css({ transform: "", opacity: "" }).removeClass("fancybox-slide--next fancybox-slide--previous");
                            e.pos === r.currPos && r.complete()
                        })
                    })) : t && f.opts.transitionEffect && (c = "fancybox-animated fancybox-fx-" + f.opts.transitionEffect, e.$slide.addClass("fancybox-slide--" + (e.pos > f.pos ? "next" : "previous")), i.fancybox.animate(e.$slide, c, t, function() { e.$slide.removeClass(c).removeClass("fancybox-slide--next fancybox-slide--previous") }, !1));
                    f.isLoaded ? r.revealContent(f) : r.loadSlide(f);
                    r.preload("image")
                }
            },
            createSlide: function(n) { var u, r, t = this; return r = n % t.group.length, r = r < 0 ? t.group.length + r : r, !t.slides[n] && t.group[r] && (u = i('<div class="fancybox-slide"><\/div>').appendTo(t.$refs.stage), t.slides[n] = i.extend(!0, {}, t.group[r], { pos: n, $slide: u, isLoaded: !1 }), t.updateSlide(t.slides[n])), t.slides[n] },
            scaleToActual: function(n, t, r) {
                var e, o, s, v, y, f = this,
                    u = f.current,
                    p = u.$content,
                    l = i.fancybox.getTranslate(u.$slide).width,
                    a = i.fancybox.getTranslate(u.$slide).height,
                    h = u.width,
                    c = u.height;
                f.isAnimating || f.isMoved() || !p || "image" != u.type || !u.isLoaded || u.hasError || (f.isAnimating = !0, i.fancybox.stop(p), n = void 0 === n ? .5 * l : n, t = void 0 === t ? .5 * a : t, e = i.fancybox.getTranslate(p), e.top -= i.fancybox.getTranslate(u.$slide).top, e.left -= i.fancybox.getTranslate(u.$slide).left, v = h / e.width, y = c / e.height, o = .5 * l - .5 * h, s = .5 * a - .5 * c, h > l && (o = e.left * v - (n * v - n), o > 0 && (o = 0), o < l - h && (o = l - h)), c > a && (s = e.top * y - (t * y - t), s > 0 && (s = 0), s < a - c && (s = a - c)), f.updateCursor(h, c), i.fancybox.animate(p, { top: s, left: o, scaleX: v, scaleY: y }, r || 366, function() { f.isAnimating = !1 }), f.SlideShow && f.SlideShow.isActive && f.SlideShow.stop())
            },
            scaleToFit: function(n) {
                var t, r = this,
                    u = r.current,
                    f = u.$content;
                r.isAnimating || r.isMoved() || !f || "image" != u.type || !u.isLoaded || u.hasError || (r.isAnimating = !0, i.fancybox.stop(f), t = r.getFitPos(u), r.updateCursor(t.width, t.height), i.fancybox.animate(f, { top: t.top, left: t.left, scaleX: t.width / f.width(), scaleY: t.height / f.height() }, n || 366, function() { r.isAnimating = !1 }))
            },
            getFitPos: function(n) {
                var u, f, c, s, l = this,
                    e = n.$content,
                    o = n.$slide,
                    t = n.width || n.opts.width,
                    r = n.height || n.opts.height,
                    h = {};
                return !!(n.isLoaded && e && e.length) && (u = i.fancybox.getTranslate(l.$refs.stage).width, f = i.fancybox.getTranslate(l.$refs.stage).height, u -= parseFloat(o.css("paddingLeft")) + parseFloat(o.css("paddingRight")) + parseFloat(e.css("marginLeft")) + parseFloat(e.css("marginRight")), f -= parseFloat(o.css("paddingTop")) + parseFloat(o.css("paddingBottom")) + parseFloat(e.css("marginTop")) + parseFloat(e.css("marginBottom")), t && r || (t = u, r = f), c = Math.min(1, u / t, f / r), t *= c, r *= c, t > u - .5 && (t = u), r > f - .5 && (r = f), "image" === n.type ? (h.top = Math.floor(.5 * (f - r)) + parseFloat(o.css("paddingTop")), h.left = Math.floor(.5 * (u - t)) + parseFloat(o.css("paddingLeft"))) : "video" === n.contentType && (s = n.opts.width && n.opts.height ? t / r : n.opts.ratio || 16 / 9, r > t / s ? r = t / s : t > r * s && (t = r * s)), h.width = t, h.height = r, h)
            },
            update: function(n) {
                var t = this;
                i.each(t.slides, function(i, r) { t.updateSlide(r, n) })
            },
            updateSlide: function(n, t) {
                var r = this,
                    f = n && n.$content,
                    e = n.width || n.opts.width,
                    o = n.height || n.opts.height,
                    u = n.$slide;
                r.adjustCaption(n);
                f && (e || o || "video" === n.contentType) && !n.hasError && (i.fancybox.stop(f), i.fancybox.setTranslate(f, r.getFitPos(n)), n.pos === r.currPos && (r.isAnimating = !1, r.updateCursor()));
                r.adjustLayout(n);
                u.length && (u.trigger("refresh"), n.pos === r.currPos && r.$refs.toolbar.add(r.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", u.get(0).scrollHeight > u.get(0).clientHeight));
                r.trigger("onUpdate", n, t)
            },
            centerSlide: function(n) {
                var r = this,
                    u = r.current,
                    t = u.$slide;
                !r.isClosing && u && (t.siblings().css({ transform: "", opacity: "" }), t.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), i.fancybox.animate(t, { top: 0, left: 0, opacity: 1 }, void 0 === n ? 0 : n, function() {
                    t.css({ transform: "", opacity: "" });
                    u.isComplete || r.complete()
                }, !1))
            },
            isMoved: function(n) { var t, r, u = n || this.current; return !!u && (r = i.fancybox.getTranslate(this.$refs.stage), t = i.fancybox.getTranslate(u.$slide), !u.$slide.hasClass("fancybox-animated") && (Math.abs(t.top - r.top) > .5 || Math.abs(t.left - r.left) > .5)) },
            updateCursor: function(n, t) {
                var o, e, u = this,
                    r = u.current,
                    f = u.$refs.container;
                r && !u.isClosing && u.Guestures && (f.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = u.canPan(n, t), e = !!o || u.isZoomable(), f.toggleClass("fancybox-is-zoomable", e), i("[data-fancybox-zoom]").prop("disabled", !e), o ? f.addClass("fancybox-can-pan") : e && ("zoom" === r.opts.clickContent || i.isFunction(r.opts.clickContent) && "zoom" == r.opts.clickContent(r)) ? f.addClass("fancybox-can-zoomIn") : r.opts.touch && (r.opts.touch.vertical || u.group.length > 1) && "video" !== r.contentType && f.addClass("fancybox-can-swipe"))
            },
            isZoomable: function() {
                var t, i = this,
                    n = i.current;
                return n && !i.isClosing && "image" === n.type && !n.hasError && (!n.isLoaded || (t = i.getFitPos(n)) && (n.width > t.width || n.height > t.height)) ? !0 : !1
            },
            isScaledDown: function(n, t) {
                var e = this,
                    r = !1,
                    u = e.current,
                    f = u.$content;
                return void 0 !== n && void 0 !== t ? r = n < u.width && t < u.height : f && (r = i.fancybox.getTranslate(f), r = r.width < u.width && r.height < u.height), r
            },
            canPan: function(n, t) {
                var e = this,
                    r = e.current,
                    f = null,
                    u = !1;
                return "image" === r.type && (r.isComplete || n && t) && !r.hasError && (u = e.getFitPos(r), void 0 !== n && void 0 !== t ? f = { width: n, height: t } : r.isComplete && (f = i.fancybox.getTranslate(r.$content)), f && u && (u = Math.abs(f.width - u.width) > 1.5 || Math.abs(f.height - u.height) > 1.5)), u
            },
            loadSlide: function(n) {
                var u, r, f, t = this;
                if (!n.isLoading && !n.isLoaded) {
                    if (n.isLoading = !0, !1 === t.trigger("beforeLoad", n)) return n.isLoading = !1, !1;
                    switch (u = n.type, r = n.$slide, r.off("refresh").trigger("onReset").addClass(n.opts.slideClass), u) {
                        case "image":
                            t.setImage(n);
                            break;
                        case "iframe":
                            t.setIframe(n);
                            break;
                        case "html":
                            t.setContent(n, n.src || n.content);
                            break;
                        case "video":
                            t.setContent(n, n.opts.video.tpl.replace(/\{\{src\}\}/gi, n.src).replace("{{format}}", n.opts.videoFormat || n.opts.video.format || "").replace("{{poster}}", n.thumb || ""));
                            break;
                        case "inline":
                            i(n.src).length ? t.setContent(n, i(n.src)) : t.setError(n);
                            break;
                        case "ajax":
                            t.showLoading(n);
                            f = i.ajax(i.extend({}, n.opts.ajax.settings, { url: n.src, success: function(i, r) { "success" === r && t.setContent(n, i) }, error: function(i, r) { i && "abort" !== r && t.setError(n) } }));
                            r.one("onReset", function() { f.abort() });
                            break;
                        default:
                            t.setError(n)
                    }
                    return !0
                }
            },
            setImage: function(n) {
                var u, r = this;
                setTimeout(function() {
                    var t = n.$image;
                    r.isClosing || !n.isLoading || t && t.length && t[0].complete || n.hasError || r.showLoading(n)
                }, 50);
                r.checkSrcset(n);
                n.$content = i('<div class="fancybox-content"><\/div>').addClass("fancybox-is-hidden").appendTo(n.$slide.addClass("fancybox-slide--image"));
                !1 !== n.opts.preload && n.opts.width && n.opts.height && n.thumb && (n.width = n.opts.width, n.height = n.opts.height, u = t.createElement("img"), u.onerror = function() {
                    i(this).remove();
                    n.$ghost = null
                }, u.onload = function() { r.afterLoad(n) }, n.$ghost = i(u).addClass("fancybox-image").appendTo(n.$content).attr("src", n.thumb));
                r.setBigImage(n)
            },
            checkSrcset: function(t) {
                var i, r, e, s, o = t.opts.srcset || t.opts.image.srcset,
                    f, u;
                if (o) {
                    for (e = n.devicePixelRatio || 1, s = n.innerWidth * e, r = o.split(",").map(function(n) {
                            var t = {};
                            return n.trim().split(/\s+/).forEach(function(n, i) {
                                var r = parseInt(n.substring(0, n.length - 1), 10);
                                if (0 === i) return t.url = n;
                                r && (t.value = r, t.postfix = n[n.length - 1])
                            }), t
                        }), r.sort(function(n, t) { return n.value - t.value }), f = 0; f < r.length; f++)
                        if (u = r[f], "w" === u.postfix && u.value >= s || "x" === u.postfix && u.value >= e) { i = u; break }!i && r.length && (i = r[r.length - 1]);
                    i && (t.src = i.url, t.width && t.height && "w" == i.postfix && (t.height = t.width / t.height * i.value, t.width = i.value), t.opts.srcset = o)
                }
            },
            setBigImage: function(n) {
                var r = this,
                    f = t.createElement("img"),
                    u = i(f);
                n.$image = u.one("error", function() { r.setError(n) }).one("load", function() {
                    var t;
                    n.$ghost || (r.resolveImageSlideSize(n, this.naturalWidth, this.naturalHeight), r.afterLoad(n));
                    r.isClosing || (n.opts.srcset && (t = n.opts.sizes, t && "auto" !== t || (t = (n.width / n.height > 1 && e.width() / e.height() > 1 ? "100" : Math.round(n.width / n.height * 100)) + "vw"), u.attr("sizes", t).attr("srcset", n.opts.srcset)), n.$ghost && setTimeout(function() { n.$ghost && !r.isClosing && n.$ghost.hide() }, Math.min(300, Math.max(1e3, n.height / 1600))), r.hideLoading(n))
                }).addClass("fancybox-image").attr("src", n.src).appendTo(n.$content);
                (f.complete || "complete" == f.readyState) && u.naturalWidth && u.naturalHeight ? u.trigger("load") : f.error && u.trigger("error")
            },
            resolveImageSlideSize: function(n, t, i) {
                var r = parseInt(n.opts.width, 10),
                    u = parseInt(n.opts.height, 10);
                n.width = t;
                n.height = i;
                r > 0 && (n.width = r, n.height = Math.floor(r * i / t));
                u > 0 && (n.width = Math.floor(u * t / i), n.height = u)
            },
            setIframe: function(n) {
                var u, f = this,
                    t = n.opts.iframe,
                    r = n.$slide;
                n.$content = i('<div class="fancybox-content' + (t.preload ? " fancybox-is-hidden" : "") + '"><\/div>').css(t.css).appendTo(r);
                r.addClass("fancybox-slide--" + n.contentType);
                n.$iframe = u = i(t.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(t.attr).appendTo(n.$content);
                t.preload ? (f.showLoading(n), u.on("load.fb error.fb", function() {
                    this.isReady = 1;
                    n.$slide.trigger("refresh");
                    f.afterLoad(n)
                }), r.on("refresh.fb", function() {
                    var s, i, f = n.$content,
                        e = t.css.width,
                        o = t.css.height;
                    if (1 === u[0].isReady) {
                        try {
                            s = u.contents();
                            i = s.find("body")
                        } catch (n) {}
                        i && i.length && i.children().length && (r.css("overflow", "visible"), f.css({ width: "100%", "max-width": "100%", height: "9999px" }), void 0 === e && (e = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))), f.css("width", e || "").css("max-width", ""), void 0 === o && (o = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))), f.css("height", o || ""), r.css("overflow", "auto"));
                        f.removeClass("fancybox-is-hidden")
                    }
                })) : f.afterLoad(n);
                u.attr("src", n.src);
                r.one("onReset", function() {
                    try { i(this).find("iframe").hide().unbind().attr("src", "//about:blank") } catch (n) {}
                    i(this).off("refresh.fb").empty();
                    n.isLoaded = !1;
                    n.isRevealed = !1
                })
            },
            setContent: function(n, t) {
                var r = this;
                r.isClosing || (r.hideLoading(n), n.$content && i.fancybox.stop(n.$content), n.$slide.empty(), v(t) && t.parent().length ? ((t.hasClass("fancybox-content") || t.parent().hasClass("fancybox-content")) && t.parents(".fancybox-slide").trigger("onReset"), n.$placeholder = i("<div>").hide().insertAfter(t), t.css("display", "inline-block")) : n.hasError || ("string" === i.type(t) && (t = i("<div>").append(i.trim(t)).contents()), n.opts.filter && (t = i("<div>").html(t).find(n.opts.filter))), n.$slide.one("onReset", function() {
                    i(this).find("video,audio").trigger("pause");
                    n.$placeholder && (n.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(), n.$placeholder = null);
                    n.$smallBtn && (n.$smallBtn.remove(), n.$smallBtn = null);
                    n.hasError || (i(this).empty(), n.isLoaded = !1, n.isRevealed = !1)
                }), i(t).appendTo(n.$slide), i(t).is("video,audio") && (i(t).addClass("fancybox-video"), i(t).wrap("<div><\/div>"), n.contentType = "video", n.opts.width = n.opts.width || i(t).attr("width"), n.opts.height = n.opts.height || i(t).attr("height")), n.$content = n.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), n.$content.siblings().hide(), n.$content.length || (n.$content = n.$slide.wrapInner("<div><\/div>").children().first()), n.$content.addClass("fancybox-content"), n.$slide.addClass("fancybox-slide--" + n.contentType), r.afterLoad(n))
            },
            setError: function(n) {
                n.hasError = !0;
                n.$slide.trigger("onReset").removeClass("fancybox-slide--" + n.contentType).addClass("fancybox-slide--error");
                n.contentType = "html";
                this.setContent(n, this.translate(n, n.opts.errorTpl));
                n.pos === this.currPos && (this.isAnimating = !1)
            },
            showLoading: function(n) {
                var t = this;
                (n = n || t.current) && !n.$spinner && (n.$spinner = i(t.translate(t, t.opts.spinnerTpl)).appendTo(n.$slide).hide().fadeIn("fast"))
            },
            hideLoading: function(n) {
                var t = this;
                (n = n || t.current) && n.$spinner && (n.$spinner.stop().remove(), delete n.$spinner)
            },
            afterLoad: function(n) {
                var t = this;
                t.isClosing || (n.isLoading = !1, n.isLoaded = !0, t.trigger("afterLoad", n), t.hideLoading(n), !n.opts.smallBtn || n.$smallBtn && n.$smallBtn.length || (n.$smallBtn = i(t.translate(n, n.opts.btnTpl.smallBtn)).appendTo(n.$content)), n.opts.protect && n.$content && !n.hasError && (n.$content.on("contextmenu.fb", function(n) { return 2 == n.button && n.preventDefault(), !0 }), "image" === n.type && i('<div class="fancybox-spaceball"><\/div>').appendTo(n.$content)), t.adjustCaption(n), t.adjustLayout(n), n.pos === t.currPos && t.updateCursor(), t.revealContent(n))
            },
            adjustCaption: function(n) {
                var i, t = this,
                    r = n || t.current,
                    u = r.opts.caption,
                    o = r.opts.preventCaptionOverlap,
                    f = t.$refs.caption,
                    e = !1;
                f.toggleClass("fancybox-caption--separate", o);
                o && u && u.length && (r.pos !== t.currPos ? (i = f.clone().appendTo(f.parent()), i.children().eq(0).empty().html(u), e = i.outerHeight(!0), i.empty().remove()) : t.$caption && (e = t.$caption.outerHeight(!0)), r.$slide.css("padding-bottom", e || ""))
            },
            adjustLayout: function(n) {
                var r, u, f, i, e = this,
                    t = n || e.current;
                t.isLoaded && !0 !== t.opts.disableLayoutFix && (t.$content.css("margin-bottom", ""), t.$content.outerHeight() > t.$slide.height() + .5 && (f = t.$slide[0].style["padding-bottom"], i = t.$slide.css("padding-bottom"), parseFloat(i) > 0 && (r = t.$slide[0].scrollHeight, t.$slide.css("padding-bottom", 0), Math.abs(r - t.$slide[0].scrollHeight) < 1 && (u = i), t.$slide.css("padding-bottom", f))), t.$content.css("margin-bottom", u))
            },
            revealContent: function(n) {
                var r, c, f, h, t = this,
                    s = n.$slide,
                    e = !1,
                    o = !1,
                    l = t.isMoved(n),
                    a = n.isRevealed;
                return n.isRevealed = !0, r = n.opts[t.firstRun ? "animationEffect" : "transitionEffect"], f = n.opts[t.firstRun ? "animationDuration" : "transitionDuration"], f = parseInt(void 0 === n.forcedDuration ? f : n.forcedDuration, 10), !l && n.pos === t.currPos && f || (r = !1), "zoom" === r && (n.pos === t.currPos && f && "image" === n.type && !n.hasError && (o = t.getThumbPos(n)) ? e = t.getFitPos(n) : r = "fade"), "zoom" === r ? (t.isAnimating = !0, e.scaleX = e.width / o.width, e.scaleY = e.height / o.height, h = n.opts.zoomOpacity, "auto" == h && (h = Math.abs(n.width / n.height - o.width / o.height) > .1), h && (o.opacity = .1, e.opacity = 1), i.fancybox.setTranslate(n.$content.removeClass("fancybox-is-hidden"), o), u(n.$content), void i.fancybox.animate(n.$content, e, f, function() {
                    t.isAnimating = !1;
                    t.complete()
                })) : (t.updateSlide(n), r ? (i.fancybox.stop(s), c = "fancybox-slide--" + (n.pos >= t.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + r, s.addClass(c).removeClass("fancybox-slide--current"), n.$content.removeClass("fancybox-is-hidden"), u(s), "image" !== n.type && n.$content.hide().show(0), void i.fancybox.animate(s, "fancybox-slide--current", f, function() {
                    s.removeClass(c).css({ transform: "", opacity: "" });
                    n.pos === t.currPos && t.complete()
                }, !0)) : (n.$content.removeClass("fancybox-is-hidden"), a || !l || "image" !== n.type || n.hasError || n.$content.hide().fadeIn("fast"), void(n.pos === t.currPos && t.complete())))
            },
            getThumbPos: function(n) {
                var t, u, e, o, f, s = !1,
                    r = n.$thumb;
                return !(!r || !p(r[0])) && (t = i.fancybox.getTranslate(r), u = parseFloat(r.css("border-top-width") || 0), e = parseFloat(r.css("border-right-width") || 0), o = parseFloat(r.css("border-bottom-width") || 0), f = parseFloat(r.css("border-left-width") || 0), s = { top: t.top + u, left: t.left + f, width: t.width - e - f, height: t.height - u - o, scaleX: 1, scaleY: 1 }, t.width > 0 && t.height > 0 && s)
            },
            complete: function() {
                var r, n = this,
                    t = n.current,
                    f = {};
                !n.isMoved() && t.isLoaded && (t.isComplete || (t.isComplete = !0, t.$slide.siblings().trigger("onReset"), n.preload("inline"), u(t.$slide), t.$slide.addClass("fancybox-slide--complete"), i.each(n.slides, function(t, r) { r.pos >= n.currPos - 1 && r.pos <= n.currPos + 1 ? f[r.pos] = r : r && (i.fancybox.stop(r.$slide), r.$slide.off().remove()) }), n.slides = f), n.isAnimating = !1, n.updateCursor(), n.trigger("afterShow"), t.opts.video.autoStart && t.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
                    this.webkitExitFullscreen && this.webkitExitFullscreen();
                    n.next()
                }), t.opts.autoFocus && "html" === t.contentType && (r = t.$content.find("input[autofocus]:enabled:visible:first"), r.length ? r.trigger("focus") : n.focus(null, !0)), t.$slide.scrollTop(0).scrollLeft(0))
            },
            preload: function(n) {
                var i, r, t = this;
                t.group.length < 2 || (r = t.slides[t.currPos + 1], i = t.slides[t.currPos - 1], i && i.type === n && t.loadSlide(i), r && r.type === n && t.loadSlide(r))
            },
            focus: function(n, r) {
                var u, e, f = this,
                    o = 'a[href],area[href],input:not([disabled]):not([type="hidden"]):not([aria-hidden]),select:not([disabled]):not([aria-hidden]),textarea:not([disabled]):not([aria-hidden]),button:not([disabled]):not([aria-hidden]),iframe,object,embed,video,audio,[contenteditable],[tabindex]:not([tabindex^="-"])';
                f.isClosing || (u = !n && f.current && f.current.isComplete ? f.current.$slide.find("*:visible" + (r ? ":not(.fancybox-close-small)" : "")) : f.$refs.container.find("*:visible"), u = u.filter(o).filter(function() { return "hidden" !== i(this).css("visibility") && !i(this).hasClass("disabled") }), u.length ? (e = u.index(t.activeElement), n && n.shiftKey ? (e < 0 || 0 == e) && (n.preventDefault(), u.eq(u.length - 1).trigger("focus")) : (e < 0 || e == u.length - 1) && (n && n.preventDefault(), u.eq(0).trigger("focus"))) : f.$refs.container.trigger("focus"))
            },
            activate: function() {
                var n = this;
                i(".fancybox-container").each(function() {
                    var t = i(this).data("FancyBox");
                    t && t.id !== n.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), t.isVisible = !1)
                });
                n.isVisible = !0;
                (n.current || n.isIdle) && (n.update(), n.updateControls());
                n.trigger("onActivate");
                n.addEvents()
            },
            close: function(n, t) {
                var o, s, h, l, a, y, e, r = this,
                    f = r.current,
                    v = function() { r.cleanUp(n) };
                return !r.isClosing && (r.isClosing = !0, !1 === r.trigger("beforeClose", n) ? (r.isClosing = !1, c(function() { r.update() }), !1) : (r.removeEvents(), h = f.$content, o = f.opts.animationEffect, s = i.isNumeric(t) ? t : o ? f.opts.animationDuration : 0, f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== n ? i.fancybox.stop(f.$slide) : o = !1, f.$slide.siblings().trigger("onReset").remove(), s && r.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", s + "ms"), r.hideLoading(f), r.hideControls(!0), r.updateCursor(), "zoom" !== o || h && s && "image" === f.type && !r.isMoved() && !f.hasError && (e = r.getThumbPos(f)) || (o = "fade"), "zoom" === o ? (i.fancybox.stop(h), l = i.fancybox.getTranslate(h), y = { top: l.top, left: l.left, scaleX: l.width / e.width, scaleY: l.height / e.height, width: e.width, height: e.height }, a = f.opts.zoomOpacity, "auto" == a && (a = Math.abs(f.width / f.height - e.width / e.height) > .1), a && (e.opacity = 0), i.fancybox.setTranslate(h, y), u(h), i.fancybox.animate(h, e, s, v), !0) : (o && s ? i.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, s, v) : !0 === n ? setTimeout(v, s) : v(), !0)))
            },
            cleanUp: function(t) {
                var f, e, o, r = this,
                    u = r.current.opts.$orig;
                r.current.$slide.trigger("onReset");
                r.$refs.container.empty().remove();
                r.trigger("afterClose", t);
                r.current.opts.backFocus && (u && u.length && u.is(":visible") || (u = r.$trigger), u && u.length && (e = n.scrollX, o = n.scrollY, u.trigger("focus"), i("html, body").scrollTop(o).scrollLeft(e)));
                r.current = null;
                f = i.fancybox.getInstance();
                f ? f.activate() : (i("body").removeClass("fancybox-active compensate-for-scrollbar"), i("#fancybox-style-noscroll").remove())
            },
            trigger: function(n, t) {
                var o, f = Array.prototype.slice.call(arguments, 1),
                    e = this,
                    u = t && t.opts ? t : e.current;
                if (u ? f.unshift(u) : u = e, f.unshift(e), i.isFunction(u.opts[n]) && (o = u.opts[n].apply(u, f)), !1 === o) return o;
                "afterClose" !== n && e.$refs ? e.$refs.container.trigger(n + ".fb", f) : r.trigger(n + ".fb", f)
            },
            updateControls: function() {
                var n = this,
                    r = n.current,
                    f = r.index,
                    u = n.$refs.container,
                    o = n.$refs.caption,
                    e = r.opts.caption;
                r.$slide.trigger("refresh");
                e && e.length ? (n.$caption = o, o.children().eq(0).html(e)) : n.$caption = null;
                n.hasHiddenControls || n.isIdle || n.showControls();
                u.find("[data-fancybox-count]").html(n.group.length);
                u.find("[data-fancybox-index]").html(f + 1);
                u.find("[data-fancybox-prev]").prop("disabled", !r.opts.loop && f <= 0);
                u.find("[data-fancybox-next]").prop("disabled", !r.opts.loop && f >= n.group.length - 1);
                "image" === r.type ? u.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", r.opts.image.src || r.src).show() : r.opts.toolbar && u.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
                i(t.activeElement).is(":hidden,[disabled]") && n.$refs.container.trigger("focus")
            },
            hideControls: function(n) {
                var i = this,
                    t = ["infobar", "toolbar", "nav"];
                !n && i.current.opts.preventCaptionOverlap || t.push("caption");
                this.$refs.container.removeClass(t.map(function(n) { return "fancybox-show-" + n }).join(" "));
                this.hasHiddenControls = !0
            },
            showControls: function() {
                var n = this,
                    t = n.current ? n.current.opts : n.opts,
                    i = n.$refs.container;
                n.hasHiddenControls = !1;
                n.idleSecondsCounter = 0;
                i.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && n.group.length > 1)).toggleClass("fancybox-show-caption", !!n.$caption).toggleClass("fancybox-show-nav", !!(t.arrows && n.group.length > 1)).toggleClass("fancybox-is-modal", !!t.modal)
            },
            toggleControls: function() { this.hasHiddenControls ? this.showControls() : this.hideControls() }
        });
        i.fancybox = {
            version: "3.5.6",
            defaults: l,
            getInstance: function(n) {
                var t = i('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                    r = Array.prototype.slice.call(arguments, 1);
                return t instanceof h && ("string" === i.type(n) ? t[n].apply(t, r) : "function" === i.type(n) && n.apply(t, r), t)
            },
            open: function(n, t, i) { return new h(n, t, i) },
            close: function(n) {
                var t = this.getInstance();
                t && (t.close(), !0 === n && this.close(n))
            },
            destroy: function() {
                this.close(!0);
                r.add("body").off("click.fb-start", "**")
            },
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: function() { var i = t.createElement("div"); return n.getComputedStyle && n.getComputedStyle(i) && n.getComputedStyle(i).getPropertyValue("transform") && !(t.documentMode && t.documentMode < 11) }(),
            getTranslate: function(n) { var t; return !(!n || !n.length) && (t = n[0].getBoundingClientRect(), { top: t.top || 0, left: t.left || 0, width: t.width, height: t.height, opacity: parseFloat(n.css("opacity")) }) },
            setTranslate: function(n, t) {
                var i = "",
                    r = {};
                if (n && t) return void 0 === t.left && void 0 === t.top || (i = (void 0 === t.left ? n.position().left : t.left) + "px, " + (void 0 === t.top ? n.position().top : t.top) + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), void 0 !== t.scaleX && void 0 !== t.scaleY ? i += " scale(" + t.scaleX + ", " + t.scaleY + ")" : void 0 !== t.scaleX && (i += " scaleX(" + t.scaleX + ")"), i.length && (r.transform = i), void 0 !== t.opacity && (r.opacity = t.opacity), void 0 !== t.width && (r.width = t.width), void 0 !== t.height && (r.height = t.height), n.css(r)
            },
            animate: function(n, t, r, u, f) {
                var s, e = this;
                i.isFunction(r) && (u = r, r = null);
                e.stop(n);
                s = e.getTranslate(n);
                n.on(o, function(o) { o && o.originalEvent && (!n.is(o.originalEvent.target) || "z-index" == o.originalEvent.propertyName) || (e.stop(n), i.isNumeric(r) && n.css("transition-duration", ""), i.isPlainObject(t) ? void 0 !== t.scaleX && void 0 !== t.scaleY && e.setTranslate(n, { top: t.top, left: t.left, width: s.width * t.scaleX, height: s.height * t.scaleY, scaleX: 1, scaleY: 1 }) : !0 !== f && n.removeClass(t), i.isFunction(u) && u(o)) });
                i.isNumeric(r) && n.css("transition-duration", r + "ms");
                i.isPlainObject(t) ? (void 0 !== t.scaleX && void 0 !== t.scaleY && (delete t.width, delete t.height, n.parent().hasClass("fancybox-slide--image") && n.parent().addClass("fancybox-is-scaling")), i.fancybox.setTranslate(n, t)) : n.addClass(t);
                n.data("timer", setTimeout(function() { n.trigger(o) }, r + 33))
            },
            stop: function(n, t) { n && n.length && (clearTimeout(n.data("timer")), t && n.trigger(o), n.off(o).css("transition-duration", ""), n.parent().removeClass("fancybox-is-scaling")) }
        };
        i.fn.fancybox = function(n) { var t; return n = n || {}, t = n.selector || !1, t ? i("body").off("click.fb-start", t).on("click.fb-start", t, { options: n }, s) : this.off("click.fb-start").on("click.fb-start", { items: this, options: n }, s), this };
        r.on("click.fb-start", "[data-fancybox]", s);
        r.on("click.fb-start", "[data-fancybox-trigger]", function() { i('[data-fancybox="' + i(this).attr("data-fancybox-trigger") + '"]').eq(i(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", { $trigger: i(this) }) }),
            function() {
                var n = null;
                r.on("mousedown mouseup focus blur", ".fancybox-button", function(t) {
                    switch (t.type) {
                        case "mousedown":
                            n = i(this);
                            break;
                        case "mouseup":
                            n = null;
                            break;
                        case "focusin":
                            i(".fancybox-button").removeClass("fancybox-focus");
                            i(this).is(n) || i(this).is("[disabled]") || i(this).addClass("fancybox-focus");
                            break;
                        case "focusout":
                            i(".fancybox-button").removeClass("fancybox-focus")
                    }
                })
            }()
    }
}(window, document, jQuery),
function(n) {
    "use strict";
    var r = { youtube: { matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i, params: { autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 }, paramPlace: 8, type: "iframe", url: "https://www.youtube-nocookie.com/embed/$4", thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg" }, vimeo: { matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/, params: { autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 }, paramPlace: 3, type: "iframe", url: "//player.vimeo.com/video/$2" }, instagram: { matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l" }, gmap_place: { matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i, type: "iframe", url: function(n) { return "//maps.google." + n[2] + "/?ll=" + (n[9] ? n[9] + "&z=" + Math.floor(n[10]) + (n[12] ? n[12].replace(/^\//, "&") : "") : n[12] + "").replace(/\?/, "&") + "&output=" + (n[12] && n[12].indexOf("layer=c") > 0 ? "svembed" : "embed") } }, gmap_search: { matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i, type: "iframe", url: function(n) { return "//maps.google." + n[2] + "/maps?q=" + n[5].replace("query=", "q=").replace("api=1", "") + "&output=embed" } } },
        t = function(t, i, r) { if (t) return r = r || "", "object" === n.type(r) && (r = n.param(r, !0)), n.each(i, function(n, i) { t = t.replace("$" + n, i || "") }), r.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + r), t },
        i;
    n(document).on("objectNeedsType.fb", function(i, u, f) {
        var v, y, s, c, e, a, l, o = f.src || "",
            h = !1;
        v = n.extend(!0, {}, r, f.opts.media);
        n.each(v, function(i, r) {
            var u, v;
            if (s = o.match(r.matcher)) {
                if (h = r.type, l = i, a = {}, r.paramPlace && s[r.paramPlace])
                    for (e = s[r.paramPlace], "?" == e[0] && (e = e.substring(1)), e = e.split("&"), u = 0; u < e.length; ++u) v = e[u].split("=", 2), 2 == v.length && (a[v[0]] = decodeURIComponent(v[1].replace(/\+/g, " ")));
                return c = n.extend(!0, {}, r.params, f.opts[i], a), o = "function" === n.type(r.url) ? r.url.call(this, s, c, f) : t(r.url, s, c), y = "function" === n.type(r.thumb) ? r.thumb.call(this, s, c, f) : t(r.thumb, s), "youtube" === i ? o = o.replace(/&t=((\d+)m)?(\d+)s/, function(n, t, i, r) { return "&start=" + ((i ? 60 * parseInt(i, 10) : 0) + parseInt(r, 10)) }) : "vimeo" === i && (o = o.replace("&%23", "#")), !1
            }
        });
        h ? (f.opts.thumb || f.opts.$thumb && f.opts.$thumb.length || (f.opts.thumb = y), "iframe" === h && (f.opts = n.extend(!0, f.opts, { iframe: { preload: !1, attr: { scrolling: "no" } } })), n.extend(f, { type: h, src: o, origSrc: f.src, contentSource: l, contentType: "image" === h ? "image" : "gmap_place" == l || "gmap_search" == l ? "map" : "video" })) : o && (f.type = f.opts.defaultType)
    });
    i = {
        youtube: { src: "https://www.youtube.com/iframe_api", "class": "YT", loading: !1, loaded: !1 },
        vimeo: { src: "https://player.vimeo.com/api/player.js", "class": "Vimeo", loading: !1, loaded: !1 },
        load: function(n) {
            var t, i = this;
            if (this[n].loaded) return void setTimeout(function() { i.done(n) });
            this[n].loading || (this[n].loading = !0, t = document.createElement("script"), t.type = "text/javascript", t.src = this[n].src, "youtube" === n ? window.onYouTubeIframeAPIReady = function() {
                i[n].loaded = !0;
                i.done(n)
            } : t.onload = function() {
                i[n].loaded = !0;
                i.done(n)
            }, document.body.appendChild(t))
        },
        done: function(t) {
            var i, r, u;
            "youtube" === t && delete window.onYouTubeIframeAPIReady;
            (i = n.fancybox.getInstance()) && (r = i.current.$content.find("iframe"), "youtube" === t && void 0 !== YT && YT ? u = new YT.Player(r.attr("id"), { events: { onStateChange: function(n) { 0 == n.data && i.next() } } }) : "vimeo" === t && void 0 !== Vimeo && Vimeo && (u = new Vimeo.Player(r), u.on("ended", function() { i.next() })))
        }
    };
    n(document).on({ "afterShow.fb": function(n, t, r) { t.group.length > 1 && ("youtube" === r.contentSource || "vimeo" === r.contentSource) && i.load(r.contentSource) } })
}(jQuery),
function(n, t, i) {
    "use strict";
    var o = function() { return n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame || function(t) { return n.setTimeout(t, 1e3 / 60) } }(),
        f = function() { return n.cancelAnimationFrame || n.webkitCancelAnimationFrame || n.mozCancelAnimationFrame || n.oCancelAnimationFrame || function(t) { n.clearTimeout(t) } }(),
        e = function(t) {
            var r = [],
                i;
            t = t.originalEvent || t || n.e;
            t = t.touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t];
            for (i in t) t[i].pageX ? r.push({ x: t[i].pageX, y: t[i].pageY }) : t[i].clientX && r.push({ x: t[i].clientX, y: t[i].clientY });
            return r
        },
        u = function(n, t, i) { return t && n ? "x" === i ? n.x - t.x : "y" === i ? n.y - t.y : Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2)) : 0 },
        s = function(n) {
            if (n.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || i.isFunction(n.get(0).onclick) || n.data("selectable")) return !0;
            for (var t = 0, r = n[0].attributes, u = r.length; t < u; t++)
                if ("data-fancybox-" === r[t].nodeName.substr(0, 14)) return !0;
            return !1
        },
        c = function(t) {
            var i = n.getComputedStyle(t)["overflow-y"],
                r = n.getComputedStyle(t)["overflow-x"],
                u = ("scroll" === i || "auto" === i) && t.scrollHeight > t.clientHeight,
                f = ("scroll" === r || "auto" === r) && t.scrollWidth > t.clientWidth;
            return u || f
        },
        h = function(n) { for (var t = !1;;) { if (t = c(n.get(0))) break; if (n = n.parent(), !n.length || n.hasClass("fancybox-stage") || n.is("body")) break } return t },
        r = function(n) {
            var t = this;
            t.instance = n;
            t.$bg = n.$refs.bg;
            t.$stage = n.$refs.stage;
            t.$container = n.$refs.container;
            t.destroy();
            t.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(t, "ontouchstart"))
        };
    r.prototype.destroy = function() {
        var n = this;
        n.$container.off(".fb.touch");
        i(t).off(".fb.touch");
        n.requestId && (f(n.requestId), n.requestId = null);
        n.tapped && (clearTimeout(n.tapped), n.tapped = null)
    };
    r.prototype.ontouchstart = function(r) {
        var f = this,
            o = i(r.target),
            l = f.instance,
            c = l.current,
            a = c.$slide,
            y = c.$content,
            v = "touchstart" == r.type;
        if (v && f.$container.off("mousedown.fb.touch"), (!r.originalEvent || 2 != r.originalEvent.button) && a.length && o.length && !s(o) && !s(o.parent()) && (o.is("img") || !(r.originalEvent.clientX > o[0].clientWidth + o.offset().left))) {
            if (!c || l.isAnimating || c.$slide.hasClass("fancybox-animated")) return r.stopPropagation(), void r.preventDefault();
            f.realPoints = f.startPoints = e(r);
            f.startPoints.length && (c.touch && r.stopPropagation(), f.startEvent = r, f.canTap = !0, f.$target = o, f.$content = y, f.opts = c.opts.touch, f.isPanning = !1, f.isSwiping = !1, f.isZooming = !1, f.isScrolling = !1, f.canPan = l.canPan(), f.startTime = (new Date).getTime(), f.distanceX = f.distanceY = f.distance = 0, f.canvasWidth = Math.round(a[0].clientWidth), f.canvasHeight = Math.round(a[0].clientHeight), f.contentLastPos = null, f.contentStartPos = i.fancybox.getTranslate(f.$content) || { top: 0, left: 0 }, f.sliderStartPos = i.fancybox.getTranslate(a), f.stagePos = i.fancybox.getTranslate(l.$refs.stage), f.sliderStartPos.top -= f.stagePos.top, f.sliderStartPos.left -= f.stagePos.left, f.contentStartPos.top -= f.stagePos.top, f.contentStartPos.left -= f.stagePos.left, i(t).off(".fb.touch").on(v ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(f, "ontouchend")).on(v ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(f, "ontouchmove")), i.fancybox.isMobile && t.addEventListener("scroll", f.onscroll, !0), ((f.opts || f.canPan) && (o.is(f.$stage) || f.$stage.find(o).length) || (o.is(".fancybox-image") && r.preventDefault(), i.fancybox.isMobile && o.parents(".fancybox-caption").length)) && (f.isScrollable = h(o) || h(o.parent()), i.fancybox.isMobile && f.isScrollable || r.preventDefault(), (1 === f.startPoints.length || c.hasError) && (f.canPan ? (i.fancybox.stop(f.$content), f.isPanning = !0) : f.isSwiping = !0, f.$container.addClass("fancybox-is-grabbing")), 2 === f.startPoints.length && "image" === c.type && (c.isLoaded || c.$ghost) && (f.canTap = !1, f.isSwiping = !1, f.isPanning = !1, f.isZooming = !0, i.fancybox.stop(f.$content), f.centerPointStartX = .5 * (f.startPoints[0].x + f.startPoints[1].x) - i(n).scrollLeft(), f.centerPointStartY = .5 * (f.startPoints[0].y + f.startPoints[1].y) - i(n).scrollTop(), f.percentageOfImageAtPinchPointX = (f.centerPointStartX - f.contentStartPos.left) / f.contentStartPos.width, f.percentageOfImageAtPinchPointY = (f.centerPointStartY - f.contentStartPos.top) / f.contentStartPos.height, f.startDistanceBetweenFingers = u(f.startPoints[0], f.startPoints[1]))))
        }
    };
    r.prototype.onscroll = function() {
        var n = this;
        n.isScrolling = !0;
        t.removeEventListener("scroll", n.onscroll, !0)
    };
    r.prototype.ontouchmove = function(n) { var t = this; return void 0 !== n.originalEvent.buttons && 0 === n.originalEvent.buttons ? void t.ontouchend(n) : t.isScrolling ? void(t.canTap = !1) : (t.newPoints = e(n), void((t.opts || t.canPan) && t.newPoints.length && t.newPoints.length && (t.isSwiping && !0 === t.isSwiping || n.preventDefault(), t.distanceX = u(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = u(t.newPoints[0], t.startPoints[0], "y"), t.distance = u(t.newPoints[0], t.startPoints[0]), t.distance > 0 && (t.isSwiping ? t.onSwipe(n) : t.isPanning ? t.onPan() : t.isZooming && t.onZoom())))) };
    r.prototype.onSwipe = function() {
        var e, t = this,
            r = t.instance,
            s = t.isSwiping,
            u = t.sliderStartPos.left || 0;
        if (!0 !== s) "x" == s && (t.distanceX > 0 && (t.instance.group.length < 2 || 0 === t.instance.current.index && !t.instance.current.opts.loop) ? u += Math.pow(t.distanceX, .8) : t.distanceX < 0 && (t.instance.group.length < 2 || t.instance.current.index === t.instance.group.length - 1 && !t.instance.current.opts.loop) ? u -= Math.pow(-t.distanceX, .8) : u += t.distanceX), t.sliderLastPos = { top: "x" == s ? 0 : t.sliderStartPos.top + t.distanceY, left: u }, t.requestId && (f(t.requestId), t.requestId = null), t.requestId = o(function() {
            t.sliderLastPos && (i.each(t.instance.slides, function(n, r) {
                var u = r.pos - t.instance.currPos;
                i.fancybox.setTranslate(r.$slide, { top: t.sliderLastPos.top, left: t.sliderLastPos.left + u * t.canvasWidth + u * r.opts.gutter })
            }), t.$container.addClass("fancybox-is-sliding"))
        });
        else if (Math.abs(t.distance) > 10) {
            if (t.canTap = !1, r.group.length < 2 && t.opts.vertical ? t.isSwiping = "y" : r.isDragging || !1 === t.opts.vertical || "auto" === t.opts.vertical && i(n).width() > 800 ? t.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(t.distanceY, t.distanceX) / Math.PI), t.isSwiping = e > 45 && e < 135 ? "y" : "x"), "y" === t.isSwiping && i.fancybox.isMobile && t.isScrollable) return void(t.isScrolling = !0);
            r.isDragging = t.isSwiping;
            t.startPoints = t.newPoints;
            i.each(r.slides, function(n, u) {
                var f, e;
                i.fancybox.stop(u.$slide);
                f = i.fancybox.getTranslate(u.$slide);
                e = i.fancybox.getTranslate(r.$refs.stage);
                u.$slide.css({ transform: "", opacity: "", "transition-duration": "" }).removeClass("fancybox-animated").removeClass(function(n, t) { return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ") });
                u.pos === r.current.pos && (t.sliderStartPos.top = f.top - e.top, t.sliderStartPos.left = f.left - e.left);
                i.fancybox.setTranslate(u.$slide, { top: f.top - e.top, left: f.left - e.left })
            });
            r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
        }
    };
    r.prototype.onPan = function() {
        var n = this;
        if (u(n.newPoints[0], n.realPoints[0]) < (i.fancybox.isMobile ? 10 : 5)) return void(n.startPoints = n.newPoints);
        n.canTap = !1;
        n.contentLastPos = n.limitMovement();
        n.requestId && f(n.requestId);
        n.requestId = o(function() { i.fancybox.setTranslate(n.$content, n.contentLastPos) })
    };
    r.prototype.limitMovement = function() {
        var f, e, o, s, n, t, i = this,
            h = i.canvasWidth,
            v = i.canvasHeight,
            r = i.distanceX,
            u = i.distanceY,
            c = i.contentStartPos,
            l = c.left,
            y = c.top,
            a = c.width,
            p = c.height;
        return n = a > h ? l + r : l, t = y + u, f = Math.max(0, .5 * h - .5 * a), e = Math.max(0, .5 * v - .5 * p), o = Math.min(h - a, .5 * h - .5 * a), s = Math.min(v - p, .5 * v - .5 * p), r > 0 && n > f && (n = f - 1 + Math.pow(-f + l + r, .8) || 0), r < 0 && n < o && (n = o + 1 - Math.pow(o - l - r, .8) || 0), u > 0 && t > e && (t = e - 1 + Math.pow(-e + y + u, .8) || 0), u < 0 && t < s && (t = s + 1 - Math.pow(s - y - u, .8) || 0), { top: t, left: n }
    };
    r.prototype.limitPosition = function(n, t, i, r) {
        var e = this,
            u = e.canvasWidth,
            f = e.canvasHeight;
        return i > u ? (n = n > 0 ? 0 : n, n = n < u - i ? u - i : n) : n = Math.max(0, u / 2 - i / 2), r > f ? (t = t > 0 ? 0 : t, t = t < f - r ? f - r : t) : t = Math.max(0, f / 2 - r / 2), { top: t, left: n }
    };
    r.prototype.onZoom = function() {
        var t = this,
            r = t.contentStartPos,
            s = r.width,
            h = r.height,
            a = r.left,
            v = r.top,
            y = u(t.newPoints[0], t.newPoints[1]),
            e = y / t.startDistanceBetweenFingers,
            c = Math.floor(s * e),
            l = Math.floor(h * e),
            p = (s - c) * t.percentageOfImageAtPinchPointX,
            w = (h - l) * t.percentageOfImageAtPinchPointY,
            b = (t.newPoints[0].x + t.newPoints[1].x) / 2 - i(n).scrollLeft(),
            k = (t.newPoints[0].y + t.newPoints[1].y) / 2 - i(n).scrollTop(),
            d = b - t.centerPointStartX,
            g = k - t.centerPointStartY,
            nt = a + (p + d),
            tt = v + (w + g),
            it = { top: tt, left: nt, scaleX: e, scaleY: e };
        t.canTap = !1;
        t.newWidth = c;
        t.newHeight = l;
        t.contentLastPos = it;
        t.requestId && f(t.requestId);
        t.requestId = o(function() { i.fancybox.setTranslate(t.$content, t.contentLastPos) })
    };
    r.prototype.ontouchend = function(n) {
        var r = this,
            u = r.isSwiping,
            o = r.isPanning,
            s = r.isZooming,
            h = r.isScrolling;
        if (r.endPoints = e(n), r.dMs = Math.max((new Date).getTime() - r.startTime, 1), r.$container.removeClass("fancybox-is-grabbing"), i(t).off(".fb.touch"), t.removeEventListener("scroll", r.onscroll, !0), r.requestId && (f(r.requestId), r.requestId = null), r.isSwiping = !1, r.isPanning = !1, r.isZooming = !1, r.isScrolling = !1, r.instance.isDragging = !1, r.canTap) return r.onTap(n);
        r.speed = 100;
        r.velocityX = r.distanceX / r.dMs * .5;
        r.velocityY = r.distanceY / r.dMs * .5;
        o ? r.endPanning() : s ? r.endZooming() : r.endSwiping(u, h)
    };
    r.prototype.endSwiping = function(n, t) {
        var r = this,
            u = !1,
            o = r.instance.group.length,
            f = Math.abs(r.distanceX),
            e = "x" == n && o > 1 && (r.dMs > 130 && f > 10 || f > 50);
        r.sliderLastPos = null;
        "y" == n && !t && Math.abs(r.distanceY) > 50 ? (i.fancybox.animate(r.instance.current.$slide, { top: r.sliderStartPos.top + r.distanceY + 150 * r.velocityY, opacity: 0 }, 200), u = r.instance.close(!0, 250)) : e && r.distanceX > 0 ? u = r.instance.previous(300) : e && r.distanceX < 0 && (u = r.instance.next(300));
        !1 !== u || "x" != n && "y" != n || r.instance.centerSlide(200);
        r.$container.removeClass("fancybox-is-sliding")
    };
    r.prototype.endPanning = function() {
        var r, u, t, n = this;
        n.contentLastPos && (!1 === n.opts.momentum || n.dMs > 350 ? (r = n.contentLastPos.left, u = n.contentLastPos.top) : (r = n.contentLastPos.left + 500 * n.velocityX, u = n.contentLastPos.top + 500 * n.velocityY), t = n.limitPosition(r, u, n.contentStartPos.width, n.contentStartPos.height), t.width = n.contentStartPos.width, t.height = n.contentStartPos.height, i.fancybox.animate(n.$content, t, 366))
    };
    r.prototype.endZooming = function() {
        var u, f, e, o, n = this,
            s = n.instance.current,
            t = n.newWidth,
            r = n.newHeight;
        n.contentLastPos && (u = n.contentLastPos.left, f = n.contentLastPos.top, o = { top: f, left: u, width: t, height: r, scaleX: 1, scaleY: 1 }, i.fancybox.setTranslate(n.$content, o), t < n.canvasWidth && r < n.canvasHeight ? n.instance.scaleToFit(150) : t > s.width || r > s.height ? n.instance.scaleToActual(n.centerPointStartX, n.centerPointStartY, 150) : (e = n.limitPosition(u, f, t, r), i.fancybox.animate(n.$content, e, 150)))
    };
    r.prototype.onTap = function(t) {
        var f, u = this,
            s = i(t.target),
            r = u.instance,
            o = r.current,
            h = t && e(t) || u.startPoints,
            c = h[0] ? h[0].x - i(n).scrollLeft() - u.stagePos.left : 0,
            l = h[0] ? h[0].y - i(n).scrollTop() - u.stagePos.top : 0,
            a = function(n) {
                var f = o.opts[n];
                if (i.isFunction(f) && (f = f.apply(r, [o, t])), f) switch (f) {
                    case "close":
                        r.close(u.startEvent);
                        break;
                    case "toggleControls":
                        r.toggleControls();
                        break;
                    case "next":
                        r.next();
                        break;
                    case "nextOrClose":
                        r.group.length > 1 ? r.next() : r.close(u.startEvent);
                        break;
                    case "zoom":
                        "image" == o.type && (o.isLoaded || o.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(c, l) : r.group.length < 2 && r.close(u.startEvent))
                }
            };
        if ((!t.originalEvent || 2 != t.originalEvent.button) && (s.is("img") || !(c > s[0].clientWidth + s.offset().left))) {
            if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) f = "Outside";
            else if (s.is(".fancybox-slide")) f = "Slide";
            else {
                if (!r.current.$content || !r.current.$content.find(s).addBack().filter(s).length) return;
                f = "Content"
            }
            if (u.tapped) {
                if (clearTimeout(u.tapped), u.tapped = null, Math.abs(c - u.tapX) > 50 || Math.abs(l - u.tapY) > 50) return this;
                a("dblclick" + f)
            } else u.tapX = c, u.tapY = l, o.opts["dblclick" + f] && o.opts["dblclick" + f] !== o.opts["click" + f] ? u.tapped = setTimeout(function() {
                u.tapped = null;
                r.isAnimating || a("click" + f)
            }, 500) : a("click" + f);
            return this
        }
    };
    i(t).on("onActivate.fb", function(n, t) { t && !t.Guestures && (t.Guestures = new r(t)) }).on("beforeClose.fb", function(n, t) { t && t.Guestures && t.Guestures.destroy() })
}(window, document, jQuery),
function(n, t) {
    "use strict";
    t.extend(!0, t.fancybox.defaults, { btnTpl: { slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/><\/svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/><\/svg><\/button>' }, slideShow: { autoStart: !1, speed: 3e3, progress: !0 } });
    var i = function(n) {
        this.instance = n;
        this.init()
    };
    t.extend(i.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var n = this,
                i = n.instance,
                r = i.group[i.currIndex].opts.slideShow;
            n.$button = i.$refs.toolbar.find("[data-fancybox-play]").on("click", function() { n.toggle() });
            i.group.length < 2 || !r ? n.$button.hide() : r.progress && (n.$progress = t('<div class="fancybox-progress"><\/div>').appendTo(i.$refs.inner))
        },
        set: function(n) {
            var r = this,
                i = r.instance,
                u = i.current;
            u && (!0 === n || u.opts.loop || i.currIndex < i.group.length - 1) ? r.isActive && "video" !== u.contentType && (r.$progress && t.fancybox.animate(r.$progress.show(), { scaleX: 1 }, u.opts.slideShow.speed), r.timer = setTimeout(function() { i.current.opts.loop || i.current.index != i.group.length - 1 ? i.next() : i.jumpTo(0) }, u.opts.slideShow.speed)) : (r.stop(), i.idleSecondsCounter = 0, i.showControls())
        },
        clear: function() {
            var n = this;
            clearTimeout(n.timer);
            n.timer = null;
            n.$progress && n.$progress.removeAttr("style").hide()
        },
        start: function() {
            var n = this,
                t = n.instance.current;
            t && (n.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), n.isActive = !0, t.isComplete && n.set(!0), n.instance.trigger("onSlideShowChange", !0))
        },
        stop: function() {
            var n = this,
                t = n.instance.current;
            n.clear();
            n.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play");
            n.isActive = !1;
            n.instance.trigger("onSlideShowChange", !1);
            n.$progress && n.$progress.removeAttr("style").hide()
        },
        toggle: function() {
            var n = this;
            n.isActive ? n.stop() : n.start()
        }
    });
    t(n).on({
        "onInit.fb": function(n, t) { t && !t.SlideShow && (t.SlideShow = new i(t)) },
        "beforeShow.fb": function(n, t, i, r) {
            var u = t && t.SlideShow;
            r ? u && i.opts.slideShow.autoStart && u.start() : u && u.isActive && u.clear()
        },
        "afterShow.fb": function(n, t) {
            var i = t && t.SlideShow;
            i && i.isActive && i.set()
        },
        "afterKeydown.fb": function(i, r, u, f, e) {
            var o = r && r.SlideShow;
            o && u.opts.slideShow && (80 === e || 32 === e) && !t(n.activeElement).is("button,a,input") && (f.preventDefault(), o.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(n, t) {
            var i = t && t.SlideShow;
            i && i.stop()
        }
    });
    t(n).on("visibilitychange", function() {
        var r = t.fancybox.getInstance(),
            i = r && r.SlideShow;
        i && i.isActive && (n.hidden ? i.clear() : i.set())
    })
}(document, jQuery),
function(n, t) {
    "use strict";
    var i = function() {
            for (var t, i, r = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ], f = {}, u = 0; u < r.length; u++)
                if (t = r[u], t && t[1] in n) { for (i = 0; i < t.length; i++) f[r[0][i]] = t[i]; return f }
            return !1
        }(),
        r;
    i && (r = {
        request: function(t) {
            t = t || n.documentElement;
            t[i.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
        },
        exit: function() { n[i.exitFullscreen]() },
        toggle: function(t) {
            t = t || n.documentElement;
            this.isFullscreen() ? this.exit() : this.request(t)
        },
        isFullscreen: function() { return Boolean(n[i.fullscreenElement]) },
        enabled: function() { return Boolean(n[i.fullscreenEnabled]) }
    }, t.extend(!0, t.fancybox.defaults, { btnTpl: { fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/><\/svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/><\/svg><\/button>' }, fullScreen: { autoStart: !1 } }), t(n).on(i.fullscreenchange, function() {
        var i = r.isFullscreen(),
            n = t.fancybox.getInstance();
        n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1, n.update(!0, !0, 0), n.isComplete || n.complete()), n.trigger("onFullscreenChange", i), n.$refs.container.toggleClass("fancybox-is-fullscreen", i), n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !i).toggleClass("fancybox-button--fsexit", i))
    }));
    t(n).on({
        "onInit.fb": function(n, t) {
            var u;
            if (!i) return void t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
            t && t.group[t.currIndex].opts.fullScreen ? (u = t.$refs.container, u.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(n) {
                n.stopPropagation();
                n.preventDefault();
                r.toggle()
            }), t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && r.request(), t.FullScreen = r) : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
        },
        "afterKeydown.fb": function(n, t, i, r, u) { t && t.FullScreen && 70 === u && (r.preventDefault(), t.FullScreen.toggle()) },
        "beforeClose.fb": function(n, t) { t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && r.exit() }
    })
}(document, jQuery),
function(n, t) {
    "use strict";
    var i = "fancybox-thumbs",
        r;
    t.fancybox.defaults = t.extend(!0, { btnTpl: { thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/><\/svg><\/button>' }, thumbs: { autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y" } }, t.fancybox.defaults);
    r = function(n) { this.init(n) };
    t.extend(r.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(n) {
            var t = this,
                r = n.group,
                u = 0,
                i, f;
            for (t.instance = n, t.opts = r[n.currIndex].opts.thumbs, n.Thumbs = t, t.$button = n.$refs.toolbar.find("[data-fancybox-thumbs]"), i = 0, f = r.length; i < f && (r[i].thumb && u++, !(u > 1)); i++);
            u > 1 && t.opts ? (t.$button.removeAttr("style").on("click", function() { t.toggle() }), t.isActive = !0) : t.$button.hide()
        },
        create: function() {
            var r, n = this,
                u = n.instance,
                f = n.opts.parentEl,
                e = [];
            n.$grid || (n.$grid = t('<div class="' + i + " " + i + "-" + n.opts.axis + '"><\/div>').appendTo(u.$refs.container.find(f).addBack().filter(f)), n.$grid.on("click", "a", function() { u.jumpTo(t(this).attr("data-index")) }));
            n.$list || (n.$list = t('<div class="' + i + '__list">').appendTo(n.$grid));
            t.each(u.group, function(n, t) {
                r = t.thumb;
                r || "image" !== t.type || (r = t.src);
                e.push('<a href="javascript:;" tabindex="0" data-index="' + n + '"' + (r && r.length ? ' style="background-image:url(' + r + ')"' : 'class="fancybox-thumbs-missing"') + "><\/a>")
            });
            n.$list[0].innerHTML = e.join("");
            "x" === n.opts.axis && n.$list.width(parseInt(n.$grid.css("padding-right"), 10) + u.group.length * n.$list.children().eq(0).outerWidth(!0))
        },
        focus: function(n) {
            var u, t, i = this,
                r = i.$list,
                f = i.$grid;
            i.instance.current && (u = r.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + i.instance.current.index + '"]').addClass("fancybox-thumbs-active"), t = u.position(), "y" === i.opts.axis && (t.top < 0 || t.top > r.height() - u.outerHeight()) ? r.stop().animate({ scrollTop: r.scrollTop() + t.top }, n) : "x" === i.opts.axis && (t.left < f.scrollLeft() || t.left > f.scrollLeft() + (f.width() - u.outerWidth())) && r.parent().stop().animate({ scrollLeft: t.left }, n))
        },
        update: function() {
            var n = this;
            n.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);
            n.isVisible ? (n.$grid || n.create(), n.instance.trigger("onThumbsShow"), n.focus(0)) : n.$grid && n.instance.trigger("onThumbsHide");
            n.instance.update()
        },
        hide: function() {
            this.isVisible = !1;
            this.update()
        },
        show: function() {
            this.isVisible = !0;
            this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible;
            this.update()
        }
    });
    t(n).on({
        "onInit.fb": function(n, t) {
            var i;
            t && !t.Thumbs && (i = new r(t), i.isActive && !0 === i.opts.autoStart && i.show())
        },
        "beforeShow.fb": function(n, t, i, r) {
            var u = t && t.Thumbs;
            u && u.isVisible && u.focus(r ? 0 : 250)
        },
        "afterKeydown.fb": function(n, t, i, r, u) {
            var f = t && t.Thumbs;
            f && f.isActive && 71 === u && (r.preventDefault(), f.toggle())
        },
        "beforeClose.fb": function(n, t) {
            var i = t && t.Thumbs;
            i && i.isVisible && !1 !== i.opts.hideOnClose && i.$grid.hide()
        }
    })
}(document, jQuery),
function(n, t) {
    "use strict";

    function i(n) { var t = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" }; return String(n).replace(/[&<>"'`=\/]/g, function(n) { return t[n] }) }
    t.extend(!0, t.fancybox.defaults, { btnTpl: { share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/><\/svg><\/button>' }, share: { url: function(n, t) { return !n.currentHash && "inline" !== t.type && "html" !== t.type && (t.origSrc || t.src) || window.location }, tpl: '<div class="fancybox-share"><h1>{{SHARE}}<\/h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /><\/svg><span>Facebook<\/span><\/a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /><\/svg><span>Twitter<\/span><\/a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/><\/svg><span>Pinterest<\/span><\/a><\/p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /><\/p><\/div>' } });
    t(n).on("click", "[data-fancybox-share]", function() {
        var u, f, r = t.fancybox.getInstance(),
            n = r.current || null;
        n && ("function" === t.type(n.opts.share.url) && (u = n.opts.share.url.apply(n, [r, n])), f = n.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === n.type ? encodeURIComponent(n.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(u)).replace(/\{\{url_raw\}\}/g, i(u)).replace(/\{\{descr\}\}/g, r.$caption ? encodeURIComponent(r.$caption.text()) : ""), t.fancybox.open({
            src: r.translate(r, f),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function(n, t) {
                    r.$refs.container.one("beforeClose.fb", function() { n.close(null, 0) });
                    t.$content.find(".fancybox-share__button").click(function() { return window.open(this.href, "Share", "width=550, height=450"), !1 })
                },
                mobile: { autoFocus: !1 }
            }
        }))
    })
}(document, jQuery),
function(n, t, i) {
    "use strict";

    function r() {
        var i = n.location.hash.substr(1),
            t = i.split("-"),
            r = t.length > 1 && /^\+?\d+$/.test(t[t.length - 1]) ? parseInt(t.pop(-1), 10) || 1 : 1,
            u = t.join("-");
        return { hash: i, index: r < 1 ? 1 : r, gallery: u }
    }

    function u(n) { "" !== n.gallery && i("[data-fancybox='" + i.escapeSelector(n.gallery) + "']").eq(n.index - 1).focus().trigger("click.fb-start") }

    function f(n) { var t, i; return !!n && (t = n.current ? n.current.opts : n.opts, "" !== (i = t.hash || (t.$orig ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger") : "")) && i) }
    i.escapeSelector || (i.escapeSelector = function(n) { return (n + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(n, t) { return t ? "\0" === n ? "ï¿½" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n }) });
    i(function() {
        !1 !== i.fancybox.defaults.hash && (i(t).on({
            "onInit.fb": function(n, t) { var i, u;!1 !== t.group[t.currIndex].opts.hash && (i = r(), (u = f(t)) && i.gallery && u == i.gallery && (t.currIndex = i.index - 1)) },
            "beforeShow.fb": function(i, r, u, e) {
                var o;
                u && !1 !== u.opts.hash && (o = f(r)) && (r.currentHash = o + (r.group.length > 1 ? "-" + (u.index + 1) : ""), n.location.hash !== "#" + r.currentHash && (e && !r.origHash && (r.origHash = n.location.hash), r.hashTimer && clearTimeout(r.hashTimer), r.hashTimer = setTimeout(function() {
                    "replaceState" in n.history ? (n.history[e ? "pushState" : "replaceState"]({}, t.title, n.location.pathname + n.location.search + "#" + r.currentHash), e && (r.hasCreatedHistory = !0)) : n.location.hash = r.currentHash;
                    r.hashTimer = null
                }, 300)))
            },
            "beforeClose.fb": function(i, r, u) { u && !1 !== u.opts.hash && (clearTimeout(r.hashTimer), r.currentHash && r.hasCreatedHistory ? n.history.back() : r.currentHash && ("replaceState" in n.history ? n.history.replaceState({}, t.title, n.location.pathname + n.location.search + (r.origHash || "")) : n.location.hash = r.origHash), r.currentHash = null) }
        }), i(n).on("hashchange.fb", function() {
            var n = r(),
                t = null;
            i.each(i(".fancybox-container").get().reverse(), function(n, r) { var u = i(r).data("FancyBox"); if (u && u.currentHash) return t = u, !1 });
            t ? t.currentHash === n.gallery + "-" + n.index || 1 === n.index && t.currentHash == n.gallery || (t.currentHash = null, t.close()) : "" !== n.gallery && u(n)
        }), setTimeout(function() { i.fancybox.getInstance() || u(r()) }, 50))
    })
}(window, document, jQuery),
function(n, t) {
    "use strict";
    var i = (new Date).getTime();
    t(n).on({
        "onInit.fb": function(n, t) {
            t.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(n) {
                var r = t.current,
                    u = (new Date).getTime();
                t.group.length < 2 || !1 === r.opts.wheel || "auto" === r.opts.wheel && "image" !== r.type || (n.preventDefault(), n.stopPropagation(), r.$slide.hasClass("fancybox-animated") || (n = n.originalEvent || n, u - i < 250 || (i = u, t[(-n.deltaY || -n.deltaX || n.wheelDelta || -n.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, jQuery),
function(n, t) { typeof define == "function" && define.amd ? define("sifter", t) : typeof exports == "object" ? module.exports = t() : n.Sifter = t() }(this, function() {
    var n = function(n, t) {
        this.items = n;
        this.settings = t || { diacritics: !0 }
    };
    n.prototype.tokenize = function(n) {
        if (n = o(String(n || "").toLowerCase()), n = n.replace("Ă¢", "a").replace("Äƒ", "a").replace("Ăª", "e").replace("Ă´", "o").replace("Æ¡", "o").replace("Æ°", "u").replace("Ă‚", "A").replace("Ä‚", "A").replace("Ă", "E").replace("Ă”", "O").replace("Æ ", "O").replace("Æ¯", "U"), !n || !n.length) return [];
        for (var r, u, h = [], f = n.split(/ +/), i = 0, e = f.length; i < e; i++) {
            if (r = s(f[i]), this.settings.diacritics)
                for (u in t) t.hasOwnProperty(u) && (r = r.replace(new RegExp(u, "g"), t[u]));
            h.push({ string: f[i], regex: new RegExp(r, "i") })
        }
        return h
    };
    n.prototype.iterator = function(n, t) {
        var r;
        r = i(n) ? Array.prototype.forEach || function(n) { for (var t = 0, i = this.length; t < i; t++) n(this[t], t, this) } : function(n) { for (var t in this) this.hasOwnProperty(t) && n(this[t], t, this) };
        r.apply(n, [t])
    };
    n.prototype.getScoreFunction = function(n, t) {
        var h, f, u, i, o, s, e;
        return (h = this, n = h.prepareSearch(n, t), u = n.tokens, f = n.options.fields, i = u.length, o = n.options.nesting, s = function(n, t) { var i, r; return n ? (n = String(n || ""), r = n.search(t.regex), r === -1) ? 0 : (i = t.string.length / n.length, r === 0 && (i += .5), i) : 0 }, e = function() { var n = f.length; return n ? n === 1 ? function(n, t) { return s(r(t, f[0], o), n) } : function(t, i) { for (var u = 0, e = 0; u < n; u++) e += s(r(i, f[u], o), t); return e / n } : function() { return 0 } }(), !i) ? function() { return 0 } : i === 1 ? function(n) { return e(u[0], n) } : n.options.conjunction === "and" ? function(n) {
            for (var t, r = 0, f = 0; r < i; r++) {
                if (t = e(u[r], n), t <= 0) return 0;
                f += t
            }
            return f / i
        } : function(n) { for (var t = 0, r = 0; t < i; t++) r += e(u[t], n); return r / i }
    };
    n.prototype.getSortFunction = function(n, t) {
        var i, e, l, a, f, h, y, c, o, v, s;
        if (l = this, n = l.prepareSearch(n, t), s = !n.query && t.sort_empty || t.sort, o = function(n, i) { return n === "$score" ? i.score : r(l.items[i.id], n, t.nesting) }, f = [], s)
            for (i = 0, e = s.length; i < e; i++)(n.query || s[i].field !== "$score") && f.push(s[i]);
        if (n.query) {
            for (v = !0, i = 0, e = f.length; i < e; i++)
                if (f[i].field === "$score") { v = !1; break }
            v
        } else
            for (i = 0, e = f.length; i < e; i++)
                if (f[i].field === "$score") { f.splice(i, 1); break } for (c = [], i = 0, e = f.length; i < e; i++) c.push(f[i].direction === "desc" ? -1 : 1);
        return h = f.length, h ? h === 1 ? (a = f[0].field, y = c[0], function(n, t) { return y * u(o(a, n), o(a, t)) }) : function(n, t) {
            for (var r, e, i = 0; i < h; i++)
                if (e = f[i].field, r = c[i] * u(o(e, n), o(e, t)), r) return r;
            return 0
        } : null
    };
    n.prototype.prepareSearch = function(n, t) {
        if (typeof n == "object") return n;
        t = e({}, t);
        var r = t.fields,
            u = t.sort,
            f = t.sort_empty;
        return r && !i(r) && (t.fields = [r]), u && !i(u) && (t.sort = [u]), f && !i(f) && (t.sort_empty = [f]), { options: t, query: String(n || "").toLowerCase(), tokens: this.tokenize(n), total: 0, items: [] }
    };
    n.prototype.search = function(n, t) {
        var r = this,
            u, i, f, e;
        return i = this.prepareSearch(n, t), t = i.options, n = i.query, e = t.score || r.getScoreFunction(i), n.length ? r.iterator(r.items, function(n, r) {
            u = e(n);
            (t.filter === !1 || u > 0) && i.items.push({ score: u, id: r })
        }) : r.iterator(r.items, function(n, t) { i.items.push({ score: 1, id: t }) }), f = r.getSortFunction(i, t), f && i.items.sort(f), i.total = i.items.length, typeof t.limit == "number" && (i.items = i.items.slice(0, t.limit)), i
    };
    var u = function(n, t) { return typeof n == "number" && typeof t == "number" ? n > t ? 1 : n < t ? -1 : 0 : (n = f(String(n || "")), t = f(String(t || "")), n > t) ? 1 : t > n ? -1 : 0 },
        e = function(n) {
            for (var r, t, i = 1, u = arguments.length; i < u; i++)
                if (t = arguments[i], t)
                    for (r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
            return n
        },
        r = function(n, t, i) { if (n && t) { if (!i) return n[t]; for (var r = t.split("."); r.length && (n = n[r.shift()]);); return n } },
        o = function(n) { return (n + "").replace(/^\s+|\s+$|/g, "") },
        s = function(n) { return (n + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1") },
        i = Array.isArray || typeof $ != "undefined" && $.isArray || function(n) { return Object.prototype.toString.call(n) === "[object Array]" },
        t = { A: "[Aâ’¶ï¼¡Ă€ĂĂ‚áº¦áº¤áºªáº¨ĂƒÄ€Ä‚áº°áº®áº´áº²È¦Ç Ă„Çáº¢Ă…ÇºÇÈ€È‚áº áº¬áº¶á¸€Ä„Èºâ±¯]", AA: "[êœ²]", AE: "[Ă†Ç¼Ç¢]", AO: "[êœ´]", AU: "[êœ¶]", AV: "[êœ¸êœº]", AY: "[êœ¼]", B: "[Bâ’·ï¼¢á¸‚á¸„á¸†ÉƒÆ‚Æ]", C: "[Câ’¸ï¼£Ä†ÄˆÄÄŒĂ‡á¸ˆÆ‡È»êœ¾]", D: "[Dâ’¹ï¼¤á¸Äá¸Œá¸á¸’á¸ÄÆ‹ÆÆ‰ê¹]", DZ: "[Ç±Ç„]", Dz: "[Ç²Ç…]", E: "[Eâ’ºï¼¥ĂˆĂ‰Ăá»€áº¾á»„á»‚áº¼Ä’á¸”á¸–Ä”Ä–Ă‹áººÄÈ„È†áº¸á»†È¨á¸œÄ˜á¸˜á¸ÆÆ]", F: "[Fâ’»ï¼¦á¸Æ‘ê»]", G: "[Gâ’¼ï¼§Ç´Äœá¸ ÄÄ Ç¦Ä¢Ç¤Æ“ê ê½ê¾]", H: "[Hâ’½ï¼¨Ä¤á¸¢á¸¦Èá¸¤á¸¨á¸ªÄ¦â±§â±µê]", I: "[Iâ’¾ï¼©ĂŒĂĂÄ¨ÄªÄ¬Ä°Ăá¸®á»ˆÇÈˆÈá»Ä®á¸¬Æ—]", J: "[Jâ’¿ï¼ªÄ´Éˆ]", K: "[Kâ“€ï¼«á¸°Ç¨á¸²Ä¶á¸´Æ˜â±©ê€ê‚ê„ê¢]", L: "[Lâ“ï¼¬Ä¿Ä¹Ä½á¸¶á¸¸Ä»á¸¼á¸ºÅÈ½â±¢â± êˆê†ê€]", LJ: "[Ç‡]", Lj: "[Çˆ]", M: "[Mâ“‚ï¼­á¸¾á¹€á¹‚â±®Æœ]", N: "[Nâ“ƒï¼®Ç¸ÅƒĂ‘á¹„Å‡á¹†Å…á¹á¹ˆÈ Æêê¤]", NJ: "[Ç]", Nj: "[Ç‹]", O: "[Oâ“„ï¼¯Ă’Ă“Ă”á»’á»á»–á»”Ă•á¹ŒÈ¬á¹ÅŒá¹á¹’ÅÈ®È°Ă–Èªá»ÅÇ‘ÈŒÈÆ á»œá»á» á»á»¢á»Œá»˜ÇªÇ¬Ă˜Ç¾Æ†ÆŸêêŒ]", OI: "[Æ¢]", OO: "[ê]", OU: "[È¢]", P: "[Pâ“…ï¼°á¹”á¹–Æ¤â±£êê’ê”]", Q: "[Qâ“†ï¼±ê–ê˜É]", R: "[Râ“‡ï¼²Å”á¹˜Å˜ÈÈ’á¹á¹œÅ–á¹ÉŒâ±¤êê¦ê‚]", S: "[Sâ“ˆï¼³áºÅá¹¤Åœá¹ Å á¹¦á¹¢á¹¨È˜Åâ±¾ê¨ê„]", T: "[Tâ“‰ï¼´á¹ªÅ¤á¹¬ÈÅ¢á¹°á¹®Å¦Æ¬Æ®È¾ê†]", TZ: "[êœ¨]", U: "[Uâ“ï¼µĂ™ĂĂ›Å¨á¹¸Åªá¹ºÅ¬ĂœÇ›Ç—Ç•Ç™á»¦Å®Å°Ç“È”È–Æ¯á»ªá»¨á»®á»¬á»°á»¤á¹²Å²á¹¶á¹´É„]", V: "[Vâ“‹ï¼¶á¹¼á¹¾Æ²êÉ…]", VY: "[ê ]", W: "[Wâ“Œï¼·áº€áº‚Å´áº†áº„áºˆâ±²]", X: "[Xâ“ï¼¸áºáºŒ]", Y: "[Yâ“ï¼¹á»²ĂÅ¶á»¸È²áºÅ¸á»¶á»´Æ³Éá»¾]", Z: "[Zâ“ï¼ºÅ¹áºÅ»Å½áº’áº”ÆµÈ¤â±¿â±«ê¢]", a: "[aâ“ï½áºĂ Ă¡Ă¢áº§áº¥áº«áº©Ă£ÄÄƒáº±áº¯áºµáº³È§Ç¡Ă¤ÇŸáº£Ă¥Ç»ÇÈÈƒáº¡áº­áº·á¸Ä…â±¥É]", aa: "[êœ³]", ae: "[Ă¦Ç½Ç£]", ao: "[êœµ]", au: "[êœ·]", av: "[êœ¹êœ»]", ay: "[êœ½]", b: "[bâ“‘ï½‚á¸ƒá¸…á¸‡Æ€ÆƒÉ“]", c: "[câ“’ï½ƒÄ‡Ä‰Ä‹ÄĂ§á¸‰ÆˆÈ¼êœ¿â†„]", d: "[dâ““ï½„á¸‹Äá¸á¸‘á¸“á¸Ä‘ÆŒÉ–É—êº]", dz: "[Ç³Ç†]", e: "[eâ“”ï½…Ă¨Ă©Ăªá»áº¿á»…á»ƒáº½Ä“á¸•á¸—Ä•Ä—Ă«áº»Ä›È…È‡áº¹á»‡È©á¸Ä™á¸™á¸›É‡É›Ç]", f: "[fâ“•ï½†á¸ŸÆ’ê¼]", g: "[gâ“–ï½‡ÇµÄá¸¡ÄŸÄ¡Ç§Ä£Ç¥É ê¡áµ¹ê¿]", h: "[hâ“—ï½ˆÄ¥á¸£á¸§ÈŸá¸¥á¸©á¸«áº–Ä§â±¨â±¶É¥]", hv: "[Æ•]", i: "[iâ“˜ï½‰Ă¬Ă­Ă®Ä©Ä«Ä­Ă¯á¸¯á»‰ÇÈ‰È‹á»‹Ä¯á¸­É¨Ä±]", j: "[jâ“™ï½ÄµÇ°É‰]", k: "[kâ“ï½‹á¸±Ç©á¸³Ä·á¸µÆ™â±ªêêƒê…ê£]", l: "[lâ“›ï½ŒÅ€ÄºÄ¾á¸·á¸¹Ä¼á¸½á¸»Å¿Å‚ÆÉ«â±¡ê‰êê‡]", lj: "[Ç‰]", m: "[mâ“œï½á¸¿á¹á¹ƒÉ±É¯]", n: "[nâ“ï½Ç¹Å„Ă±á¹…Åˆá¹‡Å†á¹‹á¹‰ÆÉ²Å‰ê‘ê¥]", nj: "[ÇŒ]", o: "[oâ“ï½Ă²Ă³Ă´á»“á»‘á»—á»•Ăµá¹È­á¹Åá¹‘á¹“ÅÈ¯È±Ă¶È«á»Å‘Ç’ÈÈÆ¡á»á»›á»¡á»Ÿá»£á»á»™Ç«Ç­Ă¸Ç¿É”ê‹êÉµ]", oi: "[Æ£]", ou: "[È£]", oo: "[ê]", p: "[pâ“Ÿï½á¹•á¹—Æ¥áµ½ê‘ê“ê•]", q: "[qâ“ ï½‘É‹ê—ê™]", r: "[râ“¡ï½’Å•á¹™Å™È‘È“á¹›á¹Å—á¹ŸÉÉ½ê›ê§êƒ]", s: "[sâ“¢ï½“ĂŸÅ›á¹¥Åá¹¡Å¡á¹§á¹£á¹©È™ÅŸÈ¿ê©ê…áº›]", t: "[tâ“£ï½”á¹«áº—Å¥á¹­È›Å£á¹±á¹¯Å§Æ­Êˆâ±¦ê‡]", tz: "[êœ©]", u: "[uâ“¤ï½•Ă¹ĂºĂ»Å©á¹¹Å«á¹»Å­Ă¼ÇœÇ˜Ç–Çá»§Å¯Å±Ç”È•È—Æ°á»«á»©á»¯á»­á»±á»¥á¹³Å³á¹·á¹µÊ‰]", v: "[vâ“¥ï½–á¹½á¹¿Ê‹êŸÊŒ]", vy: "[ê¡]", w: "[wâ“¦ï½—áºáºƒÅµáº‡áº…áº˜áº‰â±³]", x: "[xâ“§ï½˜áº‹áº]", y: "[yâ“¨ï½™á»³Ă½Å·á»¹È³áºĂ¿á»·áº™á»µÆ´Éá»¿]", z: "[zâ“©ï½Åºáº‘Å¼Å¾áº“áº•Æ¶È¥É€â±¬ê£]" },
        f = function() {
            var i, u, n, r, f = "",
                e = {},
                o;
            for (n in t)
                if (t.hasOwnProperty(n))
                    for (r = t[n].substring(2, t[n].length - 1), f += r, i = 0, u = r.length; i < u; i++) e[r.charAt(i)] = n;
            return o = new RegExp("[" + f + "]", "g"),
                function(n) { return n.replace(o, function(n) { return e[n] }).toLowerCase() }
        }();
    return n
}),
function(n, t) { typeof define == "function" && define.amd ? define("microplugin", t) : typeof exports == "object" ? module.exports = t() : n.MicroPlugin = t() }(this, function() {
    var n = {},
        t;
    return n.mixin = function(n) {
        n.plugins = {};
        n.prototype.initializePlugins = function(n) {
            var i, e, r, f = this,
                u = [];
            if (f.plugins = { names: [], settings: {}, requested: {}, loaded: {} }, t.isArray(n))
                for (i = 0, e = n.length; i < e; i++) typeof n[i] == "string" ? u.push(n[i]) : (f.plugins.settings[n[i].name] = n[i].options, u.push(n[i].name));
            else if (n)
                for (r in n) n.hasOwnProperty(r) && (f.plugins.settings[r] = n[r], u.push(r));
            while (u.length) f.require(u.shift())
        };
        n.prototype.loadPlugin = function(t) {
            var i = this,
                r = i.plugins,
                u = n.plugins[t];
            if (!n.plugins.hasOwnProperty(t)) throw new Error('Unable to find "' + t + '" plugin');
            r.requested[t] = !0;
            r.loaded[t] = u.fn.apply(i, [i.plugins.settings[t] || {}]);
            r.names.push(t)
        };
        n.prototype.require = function(n) {
            var t = this,
                i = t.plugins;
            if (!t.plugins.loaded.hasOwnProperty(n)) {
                if (i.requested[n]) throw new Error('Plugin has circular dependency ("' + n + '")');
                t.loadPlugin(n)
            }
            return i.loaded[n]
        };
        n.define = function(t, i) { n.plugins[t] = { name: t, fn: i } }
    }, t = { isArray: Array.isArray || function(n) { return Object.prototype.toString.call(n) === "[object Array]" } }, n
}),
function(n, t) { typeof define == "function" && define.amd ? define("selectize", ["jquery", "sifter", "microplugin"], t) : typeof exports == "object" ? module.exports = t(require("jquery"), require("sifter"), require("microplugin")) : n.Selectize = t(n.jQuery, n.Sifter, n.MicroPlugin) }(this, function(n, t, i) {
    "use strict";
    var d = function(n, t) {
            if (typeof t != "string" || t.length) {
                var i = typeof t == "string" ? new RegExp(t, "i") : t,
                    r = function(n) {
                        var o = 0,
                            e, s, u, t;
                        if (n.nodeType === 3) {
                            if (e = n.data.search(i), e >= 0 && n.data.length > 0) {
                                s = n.data.match(i);
                                u = document.createElement("span");
                                u.className = "highlight";
                                var f = n.splitText(e),
                                    c = f.splitText(s[0].length),
                                    h = f.cloneNode(!0);
                                u.appendChild(h);
                                f.parentNode.replaceChild(u, f);
                                o = 1
                            }
                        } else if (n.nodeType === 1 && n.childNodes && !/(script|style)/i.test(n.tagName) && (n.className !== "highlight" || n.tagName !== "SPAN"))
                            for (t = 0; t < n.childNodes.length; ++t) t += r(n.childNodes[t]);
                        return o
                    };
                return n.each(function() { r(this) })
            }
        },
        f;
    n.fn.removeHighlight = function() {
        return this.find("span.highlight").each(function() {
            this.parentNode.firstChild.nodeName;
            var n = this.parentNode;
            n.replaceChild(this.firstChild, this);
            n.normalize()
        }).end()
    };
    f = function() {};
    f.prototype = {
        on: function(n, t) {
            this._events = this._events || {};
            this._events[n] = this._events[n] || [];
            this._events[n].push(t)
        },
        off: function(n, t) {
            var i = arguments.length;
            if (i === 0) return delete this._events;
            if (i === 1) return delete this._events[n];
            (this._events = this._events || {}, n in this._events != !1) && this._events[n].splice(this._events[n].indexOf(t), 1)
        },
        trigger: function(n) {
            if (this._events = this._events || {}, n in this._events != !1)
                for (var t = 0; t < this._events[n].length; t++) this._events[n][t].apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    f.mixin = function(n) { for (var i = ["on", "off", "trigger"], t = 0; t < i.length; t++) n.prototype[i[t]] = f.prototype[i[t]] };
    var e = /Mac/.test(navigator.userAgent),
        g = 65,
        nt = 13,
        tt = 27,
        l = 37,
        it = 38,
        rt = 80,
        y = 39,
        ut = 40,
        ft = 78,
        o = 8,
        a = 46,
        et = 16,
        ot = e ? 91 : 17,
        st = e ? 18 : 17,
        p = 9,
        h = 1,
        ht = 2,
        w = !/android/i.test(window.navigator.userAgent) && !!document.createElement("input").validity,
        b = function(n) { return typeof n != "undefined" },
        u = function(n) { return typeof n == "undefined" || n === null ? null : typeof n == "boolean" ? n ? "1" : "0" : n + "" },
        s = function(n) { return (n + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") },
        kt = function(n) { return (n + "").replace(/\$/g, "$$$$") },
        c = {};
    c.before = function(n, t, i) {
        var r = n[t];
        n[t] = function() { return i.apply(n, arguments), r.apply(n, arguments) }
    };
    c.after = function(n, t, i) {
        var r = n[t];
        n[t] = function() { var t = r.apply(n, arguments); return i.apply(n, arguments), t }
    };
    var ct = function(n) { var t = !1; return function() { t || (t = !0, n.apply(this, arguments)) } },
        lt = function(n, t) {
            var i;
            return function() {
                var r = this,
                    u = arguments;
                window.clearTimeout(i);
                i = window.setTimeout(function() { n.apply(r, u) }, t)
            }
        },
        k = function(n, t, i) {
            var u, f = n.trigger,
                r = {};
            n.trigger = function() {
                var i = arguments[0];
                if (t.indexOf(i) !== -1) r[i] = arguments;
                else return f.apply(n, arguments)
            };
            i.apply(n, []);
            n.trigger = f;
            for (u in r) r.hasOwnProperty(u) && f.apply(n, r[u])
        },
        at = function(n, t, i, r) { n.on(t, i, function(t) { for (var i = t.target; i && i.parentNode !== n[0];) i = i.parentNode; return t.currentTarget = i, r.apply(this, [t]) }) },
        v = function(n) {
            var t = {},
                i, r;
            return "selectionStart" in n ? (t.start = n.selectionStart, t.length = n.selectionEnd - t.start) : document.selection && (n.focus(), i = document.selection.createRange(), r = document.selection.createRange().text.length, i.moveStart("character", -n.value.length), t.start = i.text.length - r, t.length = r), t
        },
        vt = function(n, t, i) {
            var r, f, u = {};
            if (i)
                for (r = 0, f = i.length; r < f; r++) u[i[r]] = n.css(i[r]);
            else u = n.css();
            t.css(u)
        },
        yt = function(t, i) { return t ? (r.$testInput || (r.$testInput = n("<span />").css({ position: "absolute", top: -99999, left: -99999, width: "auto", padding: 0, whiteSpace: "pre" }).appendTo("body")), r.$testInput.text(t), vt(i, r.$testInput, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]), r.$testInput.width()) : 0 },
        pt = function(n) {
            var t = null,
                i = function(i, r) {
                    var u, f, l, c, h, y, s, e;
                    (i = i || window.event || {}, r = r || {}, i.metaKey || i.altKey) || (r.force || n.data("grow") !== !1) && (u = n.val(), i.type && i.type.toLowerCase() === "keydown" && (f = i.keyCode, l = f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 96 && f <= 111 || f >= 186 && f <= 222 || f === 32, f === a || f === o ? (e = v(n[0]), e.length ? u = u.substring(0, e.start) + u.substring(e.start + e.length) : f === o && e.start ? u = u.substring(0, e.start - 1) + u.substring(e.start + 1) : f === a && typeof e.start != "undefined" && (u = u.substring(0, e.start) + u.substring(e.start + 1))) : l && (y = i.shiftKey, s = String.fromCharCode(i.keyCode), s = y ? s.toUpperCase() : s.toLowerCase(), u += s)), c = n.attr("placeholder"), !u && c && (u = c), h = yt(u, n) + 4, h !== t && (t = h, n.width(h), n.triggerHandler("resize")))
                };
            n.on("keydown keyup update blur", i);
            i()
        },
        wt = function(n) { var t = document.createElement("div"); return t.appendChild(n.cloneNode(!0)), t.innerHTML },
        bt = function(n, t) {
            t || (t = {});
            console.error("Selectize: " + n);
            t.explanation && (console.group && console.group(), console.error(t.explanation), console.group && console.groupEnd())
        },
        r = function(i, u) {
            var e, s, c, o, f = this,
                l;
            if (o = i[0], o.selectize = f, l = window.getComputedStyle && window.getComputedStyle(o, null), c = l ? l.getPropertyValue("direction") : o.currentStyle && o.currentStyle.direction, c = c || i.parents("[dir]:first").attr("dir") || "", n.extend(f, { order: 0, settings: u, $input: i, tabIndex: i.attr("tabindex") || "", tagType: o.tagName.toLowerCase() === "select" ? h : ht, rtl: /rtl/i.test(c), eventNS: ".selectize" + ++r.count, highlightedValue: null, isBlurring: !1, isOpen: !1, isDisabled: !1, isRequired: i.is("[required]"), isInvalid: !1, isLocked: !1, isFocused: !1, isInputHidden: !1, isSetup: !1, isShiftDown: !1, isCmdDown: !1, isCtrlDown: !1, ignoreFocus: !1, ignoreBlur: !1, ignoreHover: !1, hasOptions: !1, currentResults: null, lastValue: "", caretPos: 0, loading: 0, loadedSearches: {}, $activeOption: null, $activeItems: [], optgroups: {}, options: {}, userOptions: {}, items: [], renderCache: {}, onSearchChange: u.loadThrottle === null ? f.onSearchChange : lt(f.onSearchChange, u.loadThrottle) }), f.sifter = new t(this.options, { diacritics: u.diacritics }), f.settings.options) {
                for (e = 0, s = f.settings.options.length; e < s; e++) f.registerOption(f.settings.options[e]);
                delete f.settings.options
            }
            if (f.settings.optgroups) {
                for (e = 0, s = f.settings.optgroups.length; e < s; e++) f.registerOptionGroup(f.settings.optgroups[e]);
                delete f.settings.optgroups
            }
            f.settings.mode = f.settings.mode || (f.settings.maxItems === 1 ? "single" : "multi");
            f.settings.dropdownDirection = f.settings.dropdownDirection || "auto";
            typeof f.settings.hideSelected != "boolean" && (f.settings.hideSelected = f.settings.mode === "multi");
            f.initializePlugins(f.settings.plugins);
            f.setupCallbacks();
            f.setupTemplates();
            f.setup()
        };
    return f.mixin(r), typeof i != "undefined" ? i.mixin(r) : bt("Dependency MicroPlugin is missing", { explanation: 'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.' }), n.extend(r.prototype, {
        setup: function() {
            var t = this,
                r = t.settings,
                o = t.eventNS,
                b = n(window),
                a = n(document),
                i = t.$input,
                s, c, u, f, k, d, v, y, p, l, g;
            v = t.settings.mode;
            y = i.attr("class") || "";
            s = n("<div>").addClass(r.wrapperClass).addClass(y).addClass(v);
            c = n("<div>").addClass(r.inputClass).addClass("items").appendTo(s);
            u = n('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex", i.is(":disabled") ? "-1" : t.tabIndex);
            d = n(r.dropdownParent || s);
            f = n("<div>").addClass(r.dropdownClass).addClass(v).hide().appendTo(d);
            k = n("<div>").addClass(r.dropdownContentClass).appendTo(f);
            (l = i.attr("id")) && (u.attr("id", l + "-selectized"), n("label[for='" + l + "']").attr("for", l + "-selectized"));
            t.settings.copyClassesToDropdown && f.addClass(y);
            s.css({ width: i[0].style.width });
            t.plugins.names.length && (p = "plugin-" + t.plugins.names.join(" plugin-"), s.addClass(p), f.addClass(p));
            (r.maxItems === null || r.maxItems > 1) && t.tagType === h && i.attr("multiple", "multiple");
            t.settings.placeholder && u.attr("placeholder", r.placeholder);
            !t.settings.splitOn && t.settings.delimiter && (g = t.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), t.settings.splitOn = new RegExp("\\s*" + g + "+\\s*"));
            i.attr("autocorrect") && u.attr("autocorrect", i.attr("autocorrect"));
            i.attr("autocapitalize") && u.attr("autocapitalize", i.attr("autocapitalize"));
            u[0].type = i[0].type;
            t.$wrapper = s;
            t.$control = c;
            t.$control_input = u;
            t.$dropdown = f;
            t.$dropdown_content = k;
            f.on("mouseenter mousedown click", "[data-disabled]>[data-selectable]", function(n) { n.stopImmediatePropagation() });
            f.on("mouseenter", "[data-selectable]", function() { return t.onOptionHover.apply(t, arguments) });
            f.on("mousedown click", "[data-selectable]", function() { return t.onOptionSelect.apply(t, arguments) });
            at(c, "mousedown", "*:not(input)", function() { return t.onItemSelect.apply(t, arguments) });
            pt(u);
            c.on({ mousedown: function() { return t.onMouseDown.apply(t, arguments) }, click: function() { return t.onClick.apply(t, arguments) } });
            u.on({ mousedown: function(n) { n.stopPropagation() }, keydown: function() { return t.onKeyDown.apply(t, arguments) }, keyup: function() { return t.onKeyUp.apply(t, arguments) }, keypress: function() { return t.onKeyPress.apply(t, arguments) }, resize: function() { t.positionDropdown.apply(t, []) }, blur: function() { return t.onBlur.apply(t, arguments) }, focus: function() { return t.ignoreBlur = !1, t.onFocus.apply(t, arguments) }, paste: function() { return t.onPaste.apply(t, arguments) } });
            a.on("keydown" + o, function(n) {
                t.isCmdDown = n[e ? "metaKey" : "ctrlKey"];
                t.isCtrlDown = n[e ? "altKey" : "ctrlKey"];
                t.isShiftDown = n.shiftKey
            });
            a.on("keyup" + o, function(n) {
                n.keyCode === st && (t.isCtrlDown = !1);
                n.keyCode === et && (t.isShiftDown = !1);
                n.keyCode === ot && (t.isCmdDown = !1)
            });
            a.on("mousedown" + o, function(n) {
                if (t.isFocused) {
                    if (n.target === t.$dropdown[0] || n.target.parentNode === t.$dropdown[0]) return !1;
                    t.$control.has(n.target).length || n.target === t.$control[0] || t.blur(n.target)
                }
            });
            b.on(["scroll" + o, "resize" + o].join(" "), function() { t.isOpen && t.positionDropdown.apply(t, arguments) });
            b.on("mousemove" + o, function() { t.ignoreHover = !1 });
            if (this.revertSettings = { $children: i.children().detach(), tabindex: i.attr("tabindex") }, i.attr("tabindex", -1).hide().after(t.$wrapper), n.isArray(r.items) && (t.setValue(r.items), delete r.items), w) i.on("invalid" + o, function(n) {
                n.preventDefault();
                t.isInvalid = !0;
                t.refreshState()
            });
            t.updateOriginalInput();
            t.refreshItems();
            t.refreshState();
            t.updatePlaceholder();
            t.isSetup = !0;
            i.is(":disabled") && t.disable();
            t.on("change", this.onChange);
            if (i.data("selectize", t), i.addClass("selectized"), t.trigger("initialize"), r.preload === !0) t.onSearchChange("")
        },
        setupTemplates: function() {
            var t = this,
                i = t.settings.labelField,
                r = t.settings.optgroupLabelField,
                u = { optgroup: function(n) { return '<div class="optgroup">' + n.html + "<\/div>" }, optgroup_header: function(n, t) { return '<div class="optgroup-header">' + t(n[r]) + "<\/div>" }, option: function(n, t) { return '<div class="option">' + t(n[i]) + "<\/div>" }, item: function(n, t) { return '<div class="item">' + t(n[i]) + "<\/div>" }, option_create: function(n, t) { return '<div class="create">Add <strong>' + t(n.input) + "<\/strong>&hellip;<\/div>" } };
            t.settings.render = n.extend({}, u, t.settings.render)
        },
        setupCallbacks: function() {
            var n, t, i = { initialize: "onInitialize", change: "onChange", item_add: "onItemAdd", item_remove: "onItemRemove", clear: "onClear", option_add: "onOptionAdd", option_remove: "onOptionRemove", option_clear: "onOptionClear", optgroup_add: "onOptionGroupAdd", optgroup_remove: "onOptionGroupRemove", optgroup_clear: "onOptionGroupClear", dropdown_open: "onDropdownOpen", dropdown_close: "onDropdownClose", type: "onType", load: "onLoad", focus: "onFocus", blur: "onBlur" };
            for (n in i)
                if (i.hasOwnProperty(n) && (t = this.settings[i[n]], t)) this.on(n, t)
        },
        onClick: function(n) {
            var t = this;
            t.isFocused && t.isOpen || (t.focus(), n.preventDefault())
        },
        onMouseDown: function(t) {
            var i = this,
                r = t.isDefaultPrevented(),
                u = n(t.target);
            if (i.isFocused) { if (t.target !== i.$control_input[0]) return i.settings.mode === "single" ? i.isOpen ? i.close() : i.open() : r || i.setActiveItem(null), !1 } else r || window.setTimeout(function() { i.focus() }, 0)
        },
        onChange: function() { this.$input.trigger("change") },
        onPaste: function(t) {
            var i = this;
            if (i.isFull() || i.isInputHidden || i.isLocked) { t.preventDefault(); return }
            i.settings.splitOn && setTimeout(function() {
                var u = i.$control_input.val(),
                    r, t, f;
                if (u.match(i.settings.splitOn))
                    for (r = n.trim(u).split(i.settings.splitOn), t = 0, f = r.length; t < f; t++) i.createItem(r[t])
            }, 0)
        },
        onKeyPress: function(n) { if (this.isLocked) return n && n.preventDefault(); var t = String.fromCharCode(n.keyCode || n.which); if (this.settings.create && this.settings.mode === "multi" && t === this.settings.delimiter) return this.createItem(), n.preventDefault(), !1 },
        onKeyDown: function(n) {
            var u = n.target === this.$control_input[0],
                t = this,
                i, r;
            if (t.isLocked) { n.keyCode !== p && n.preventDefault(); return }
            switch (n.keyCode) {
                case g:
                    if (t.isCmdDown) { t.selectAll(); return }
                    break;
                case tt:
                    t.isOpen && (n.preventDefault(), n.stopPropagation(), t.close());
                    return;
                case ft:
                    if (!n.ctrlKey || n.altKey) break;
                case ut:
                    !t.isOpen && t.hasOptions ? t.open() : t.$activeOption && (t.ignoreHover = !0, i = t.getAdjacentOption(t.$activeOption, 1), i.length && t.setActiveOption(i, !0, !0));
                    n.preventDefault();
                    return;
                case rt:
                    if (!n.ctrlKey || n.altKey) break;
                case it:
                    t.$activeOption && (t.ignoreHover = !0, r = t.getAdjacentOption(t.$activeOption, -1), r.length && t.setActiveOption(r, !0, !0));
                    n.preventDefault();
                    return;
                case nt:
                    if (t.isOpen && t.$activeOption) {
                        t.onOptionSelect({ currentTarget: t.$activeOption });
                        n.preventDefault()
                    }
                    return;
                case l:
                    t.advanceSelection(-1, n);
                    return;
                case y:
                    t.advanceSelection(1, n);
                    return;
                case p:
                    if (t.settings.selectOnTab && t.isOpen && t.$activeOption) {
                        t.onOptionSelect({ currentTarget: t.$activeOption });
                        t.isFull() || n.preventDefault()
                    }
                    t.settings.create && t.createItem() && n.preventDefault();
                    return;
                case o:
                case a:
                    t.deleteSelection(n);
                    return
            }
            if ((t.isFull() || t.isInputHidden) && !(e ? n.metaKey : n.ctrlKey)) { n.preventDefault(); return }
        },
        onKeyUp: function(n) {
            var t = this,
                i;
            if (t.isLocked) return n && n.preventDefault();
            if (i = t.$control_input.val() || "", t.lastValue !== i) {
                t.lastValue = i;
                t.onSearchChange(i);
                t.refreshOptions();
                t.trigger("type", i)
            }
        },
        onSearchChange: function(n) {
            var t = this,
                i = t.settings.load;
            i && (t.loadedSearches.hasOwnProperty(n) || (t.loadedSearches[n] = !0, t.load(function(r) { i.apply(t, [n, r]) })))
        },
        onFocus: function(n) {
            var t = this,
                i = t.isFocused;
            if (t.isDisabled) return t.blur(), n && n.preventDefault(), !1;
            if (!t.ignoreFocus) {
                if (t.isFocused = !0, t.settings.preload === "focus") t.onSearchChange("");
                i || t.trigger("focus");
                t.$activeItems.length || (t.showInput(), t.setActiveItem(null), t.refreshOptions(!!t.settings.openOnFocus));
                t.refreshState()
            }
        },
        onBlur: function(n, t) {
            var i = this,
                r;
            if (i.isFocused && (i.isFocused = !1, !i.ignoreFocus)) {
                if (!i.ignoreBlur && document.activeElement === i.$dropdown_content[0]) {
                    i.ignoreBlur = !0;
                    i.onFocus(n);
                    return
                }
                r = function() {
                    i.close();
                    i.setTextboxValue("");
                    i.setActiveItem(null);
                    i.setActiveOption(null);
                    i.setCaret(i.items.length);
                    i.refreshState();
                    t && t.focus && t.focus();
                    i.isBlurring = !1;
                    i.ignoreFocus = !1;
                    i.trigger("blur")
                };
                i.isBlurring = !0;
                i.ignoreFocus = !0;
                i.settings.create && i.settings.createOnBlur ? i.createItem(null, !1, r) : r()
            }
        },
        onOptionHover: function(n) { this.ignoreHover || this.setActiveOption(n.currentTarget, !1) },
        onOptionSelect: function(t) {
            var r, u, i = this;
            t.preventDefault && (t.preventDefault(), t.stopPropagation());
            u = n(t.currentTarget);
            u.hasClass("create") ? i.createItem(null, function() { i.settings.closeAfterSelect && i.close() }) : (r = u.attr("data-value"), typeof r != "undefined" && (i.lastQuery = null, i.setTextboxValue(""), i.addItem(r), i.settings.closeAfterSelect ? i.close() : !i.settings.hideSelected && t.type && /mouse/.test(t.type) && i.setActiveOption(i.getOption(r))))
        },
        onItemSelect: function(n) {
            var t = this;
            t.isLocked || t.settings.mode === "multi" && (n.preventDefault(), t.setActiveItem(n.currentTarget, n))
        },
        load: function(n) {
            var t = this,
                i = t.$wrapper.addClass(t.settings.loadingClass);
            t.loading++;
            n.apply(t, [function(n) {
                t.loading = Math.max(t.loading - 1, 0);
                n && n.length && (t.addOption(n), t.refreshOptions(t.isFocused && !t.isInputHidden));
                t.loading || i.removeClass(t.settings.loadingClass);
                t.trigger("load", n)
            }])
        },
        setTextboxValue: function(n) {
            var t = this.$control_input,
                i = t.val() !== n;
            i && (t.val(n).triggerHandler("update"), this.lastValue = n)
        },
        getValue: function() { return this.tagType === h && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter) },
        setValue: function(n, t) {
            var i = t ? [] : ["change"];
            k(this, i, function() {
                this.clear(t);
                this.addItems(n, t)
            })
        },
        setActiveItem: function(t, i) {
            var r = this,
                e, o, h, u, f, s, c, l;
            if (r.settings.mode !== "single") {
                if (t = n(t), !t.length) {
                    n(r.$activeItems).removeClass("active");
                    r.$activeItems = [];
                    r.isFocused && r.showInput();
                    return
                }
                if (e = i && i.type.toLowerCase(), e === "mousedown" && r.isShiftDown && r.$activeItems.length) {
                    for (l = r.$control.children(".active:last"), u = Array.prototype.indexOf.apply(r.$control[0].childNodes, [l[0]]), f = Array.prototype.indexOf.apply(r.$control[0].childNodes, [t[0]]), u > f && (c = u, u = f, f = c), o = u; o <= f; o++) s = r.$control[0].childNodes[o], r.$activeItems.indexOf(s) === -1 && (n(s).addClass("active"), r.$activeItems.push(s));
                    i.preventDefault()
                } else e === "mousedown" && r.isCtrlDown || e === "keydown" && this.isShiftDown ? t.hasClass("active") ? (h = r.$activeItems.indexOf(t[0]), r.$activeItems.splice(h, 1), t.removeClass("active")) : r.$activeItems.push(t.addClass("active")[0]) : (n(r.$activeItems).removeClass("active"), r.$activeItems = [t.addClass("active")[0]]);
                r.hideInput();
                this.isFocused || r.focus()
            }
        },
        setActiveOption: function(t, i, r) {
            var e, o, f, s, h, u = this;
            (u.$activeOption && u.$activeOption.removeClass("active"), u.$activeOption = null, t = n(t), t.length) && (u.$activeOption = t.addClass("active"), (i || !b(i)) && (e = u.$dropdown_content.height(), o = u.$activeOption.outerHeight(!0), i = u.$dropdown_content.scrollTop() || 0, f = u.$activeOption.offset().top - u.$dropdown_content.offset().top + i, s = f, h = f - e + o, f + o > e + i ? u.$dropdown_content.stop().animate({ scrollTop: h }, r ? u.settings.scrollDuration : 0) : f < i && u.$dropdown_content.stop().animate({ scrollTop: s }, r ? u.settings.scrollDuration : 0)))
        },
        selectAll: function() {
            var n = this;
            n.settings.mode !== "single" && (n.$activeItems = Array.prototype.slice.apply(n.$control.children(":not(input)").addClass("active")), n.$activeItems.length && (n.hideInput(), n.close()), n.focus())
        },
        hideInput: function() {
            var n = this;
            n.setTextboxValue("");
            n.$control_input.css({ opacity: 0, position: "absolute", left: n.rtl ? 1e4 : -1e4 });
            n.isInputHidden = !0
        },
        showInput: function() {
            this.$control_input.css({ opacity: 1, position: "relative", left: 0 });
            this.isInputHidden = !1
        },
        focus: function() {
            var n = this;
            n.isDisabled || (n.ignoreFocus = !0, n.$control_input[0].focus(), window.setTimeout(function() {
                n.ignoreFocus = !1;
                n.onFocus()
            }, 0))
        },
        blur: function(n) {
            if (this.settings.chooseItemOnBlur) this.onOptionSelect({ currentTarget: this.$activeOption });
            this.$control_input[0].blur();
            this.onBlur(null, n)
        },
        getScoreFunction: function(n) { return this.sifter.getScoreFunction(n, this.getSearchOptions()) },
        getSearchOptions: function() {
            var n = this.settings,
                t = n.sortField;
            return typeof t == "string" && (t = [{ field: t }]), { fields: n.searchField, conjunction: n.searchConjunction, sort: t, nesting: n.nesting }
        },
        search: function(t) {
            var f, r, e, i = this,
                o = i.settings,
                s = this.getSearchOptions();
            if (o.score && (e = i.settings.score.apply(this, [t]), typeof e != "function")) throw new Error('Selectize "score" setting must be a function that returns a function');
            if (t !== i.lastQuery ? (i.lastQuery = t, r = i.sifter.search(t, n.extend(s, { score: e })), i.currentResults = r) : r = n.extend(!0, {}, i.currentResults), o.hideSelected)
                for (f = r.items.length - 1; f >= 0; f--) i.items.indexOf(u(r.items[f].id)) !== -1 && r.items.splice(f, 1);
            return r
        },
        refreshOptions: function(t) {
            var f, v, tt, e, s, l, k, it, r, y, p, a, g, h, w, b;
            typeof t == "undefined" && (t = !0);
            var i = this,
                nt = n.trim(i.$control_input.val()),
                o = i.search(nt),
                c = i.$dropdown_content,
                rt = i.$activeOption && u(i.$activeOption.attr("data-value"));
            for (e = o.items.length, typeof i.settings.maxOptions == "number" && (e = Math.min(e, i.settings.maxOptions)), s = {}, l = [], f = 0; f < e; f++)
                for (k = i.options[o.items[f].id], it = i.render("option", k), r = k[i.settings.optgroupField] || "", y = n.isArray(r) ? r : [r], v = 0, tt = y && y.length; v < tt; v++) r = y[v], i.optgroups.hasOwnProperty(r) || (r = ""), s.hasOwnProperty(r) || (s[r] = document.createDocumentFragment(), l.push(r)), s[r].appendChild(it);
            for (this.settings.lockOptgroupOrder && l.sort(function(n, t) {
                    var r = i.optgroups[n].$order || 0,
                        u = i.optgroups[t].$order || 0;
                    return r - u
                }), p = document.createDocumentFragment(), f = 0, e = l.length; f < e; f++) r = l[f], i.optgroups.hasOwnProperty(r) && s[r].childNodes.length ? (a = document.createDocumentFragment(), a.appendChild(i.render("optgroup_header", i.optgroups[r])), a.appendChild(s[r]), p.appendChild(i.render("optgroup", n.extend({}, i.optgroups[r], { html: wt(a), dom: a })))) : p.appendChild(s[r]);
            if (c.html(p), i.settings.highlight && (c.removeHighlight(), o.query.length && o.tokens.length))
                for (f = 0, e = o.tokens.length; f < e; f++) d(c, o.tokens[f].regex);
            if (!i.settings.hideSelected)
                for (f = 0, e = i.items.length; f < e; f++) i.getOption(i.items[f]).addClass("selected");
            g = i.canCreate(nt);
            g && (c.prepend(i.render("option_create", { input: nt })), b = n(c[0].childNodes[0]));
            i.hasOptions = o.items.length > 0 || g;
            i.hasOptions ? (o.items.length > 0 ? (w = rt && i.getOption(rt), w && w.length ? h = w : i.settings.mode === "single" && i.items.length && (h = i.getOption(i.items[0])), h && h.length || (h = b && !i.settings.addPrecedence ? i.getAdjacentOption(b, 1) : c.find("[data-selectable]:first"))) : h = b, i.setActiveOption(h), t && !i.isOpen && i.open()) : (i.setActiveOption(null), t && i.isOpen && i.close());
            i.positionDropdown()
        },
        addOption: function(t) { var r, f, u, i = this; if (n.isArray(t)) { for (r = 0, f = t.length; r < f; r++) i.addOption(t[r]); return }(u = i.registerOption(t)) && (i.userOptions[u] = !0, i.lastQuery = null, i.trigger("option_add", u, t)) },
        registerOption: function(n) { var t = u(n[this.settings.valueField]); return typeof t == "undefined" || t === null || this.options.hasOwnProperty(t) ? !1 : (n.$order = n.$order || ++this.order, this.options[t] = n, t) },
        registerOptionGroup: function(n) { var t = u(n[this.settings.optgroupValueField]); return t ? (n.$order = n.$order || ++this.order, this.optgroups[t] = n, t) : !1 },
        addOptionGroup: function(n, t) {
            t[this.settings.optgroupValueField] = n;
            (n = this.registerOptionGroup(t)) && this.trigger("optgroup_add", n, t)
        },
        removeOptionGroup: function(n) { this.optgroups.hasOwnProperty(n) && (delete this.optgroups[n], this.renderCache = {}, this.trigger("optgroup_remove", n)) },
        clearOptionGroups: function() {
            this.optgroups = {};
            this.renderCache = {};
            this.trigger("optgroup_clear")
        },
        updateOption: function(t, i) {
            var r = this,
                s, h, f, c, e, o, l;
            if ((t = u(t), f = u(i[r.settings.valueField]), t !== null) && r.options.hasOwnProperty(t)) {
                if (typeof f != "string") throw new Error("Value must be set in option data");
                l = r.options[t].$order;
                f !== t && (delete r.options[t], c = r.items.indexOf(t), c !== -1 && r.items.splice(c, 1, f));
                i.$order = i.$order || l;
                r.options[f] = i;
                e = r.renderCache.item;
                o = r.renderCache.option;
                e && (delete e[t], delete e[f]);
                o && (delete o[t], delete o[f]);
                r.items.indexOf(f) !== -1 && (s = r.getItem(t), h = n(r.render("item", i)), s.hasClass("active") && h.addClass("active"), s.replaceWith(h));
                r.lastQuery = null;
                r.isOpen && r.refreshOptions(!1)
            }
        },
        removeOption: function(n, t) {
            var i = this,
                r, f;
            n = u(n);
            r = i.renderCache.item;
            f = i.renderCache.option;
            r && delete r[n];
            f && delete f[n];
            delete i.userOptions[n];
            delete i.options[n];
            i.lastQuery = null;
            i.trigger("option_remove", n);
            i.removeItem(n, t)
        },
        clearOptions: function() {
            var t = this,
                i;
            t.loadedSearches = {};
            t.userOptions = {};
            t.renderCache = {};
            i = t.options;
            n.each(t.options, function(n) { t.items.indexOf(n) == -1 && delete i[n] });
            t.options = t.sifter.items = i;
            t.lastQuery = null;
            t.trigger("option_clear")
        },
        getOption: function(n) { return this.getElementWithValue(n, this.$dropdown_content.find("[data-selectable]")) },
        getAdjacentOption: function(t, i) {
            var r = this.$dropdown.find("[data-selectable]"),
                u = r.index(t) + i;
            return u >= 0 && u < r.length ? r.eq(u) : n()
        },
        getElementWithValue: function(t, i) {
            if (t = u(t), typeof t != "undefined" && t !== null)
                for (var r = 0, f = i.length; r < f; r++)
                    if (i[r].getAttribute("data-value") === t) return n(i[r]);
            return n()
        },
        getItem: function(n) { return this.getElementWithValue(n, this.$control.children()) },
        addItems: function(t, i) {
            var u, f, r, e, o;
            for (this.buffer = document.createDocumentFragment(), u = this.$control[0].childNodes, r = 0; r < u.length; r++) this.buffer.appendChild(u[r]);
            for (f = n.isArray(t) ? t : [t], r = 0, e = f.length; r < e; r++) this.isPending = r < e - 1, this.addItem(f[r], i);
            o = this.$control[0];
            o.insertBefore(this.buffer, o.firstChild);
            this.buffer = null
        },
        addItem: function(t, i) {
            var r = i ? [] : ["change"];
            k(this, r, function() {
                var e, s, h, r = this,
                    f = r.settings.mode,
                    o, c;
                if (t = u(t), r.items.indexOf(t) !== -1) { f === "single" && r.close(); return }
                r.options.hasOwnProperty(t) && ((f === "single" && r.clear(i), f === "multi" && r.isFull()) || (e = n(r.render("item", r.options[t])), c = r.isFull(), r.items.splice(r.caretPos, 0, t), r.insertAtCaret(e), r.isPending && (c || !r.isFull()) || r.refreshState(), r.isSetup && (h = r.$dropdown_content.find("[data-selectable]"), r.isPending || (s = r.getOption(t), o = r.getAdjacentOption(s, 1).attr("data-value"), r.refreshOptions(r.isFocused && f !== "single"), o && r.setActiveOption(r.getOption(o))), !h.length || r.isFull() ? r.close() : r.isPending || r.positionDropdown(), r.updatePlaceholder(), r.trigger("item_add", t, e), r.isPending || r.updateOriginalInput({ silent: i }))))
            })
        },
        removeItem: function(t, i) {
            var r = this,
                f, e, o;
            f = t instanceof n ? t : r.getItem(t);
            t = u(f.attr("data-value"));
            e = r.items.indexOf(t);
            e !== -1 && (f.remove(), f.hasClass("active") && (o = r.$activeItems.indexOf(f[0]), r.$activeItems.splice(o, 1)), r.items.splice(e, 1), r.lastQuery = null, !r.settings.persist && r.userOptions.hasOwnProperty(t) && r.removeOption(t, i), e < r.caretPos && r.setCaret(r.caretPos - 1), r.refreshState(), r.updatePlaceholder(), r.updateOriginalInput({ silent: i }), r.positionDropdown(), r.trigger("item_remove", t, f))
        },
        createItem: function(t, i) {
            var r = this,
                s = r.caretPos,
                f;
            if (t = t || n.trim(r.$control_input.val() || ""), f = arguments[arguments.length - 1], typeof f != "function" && (f = function() {}), typeof i != "boolean" && (i = !0), !r.canCreate(t)) return f(), !1;
            r.lock();
            var h = typeof r.settings.create == "function" ? this.settings.create : function(n) { var t = {}; return t[r.settings.labelField] = n, t[r.settings.valueField] = n, t },
                e = ct(function(n) {
                    if (r.unlock(), !n || typeof n != "object") return f();
                    var t = u(n[r.settings.valueField]);
                    if (typeof t != "string") return f();
                    r.setTextboxValue("");
                    r.addOption(n);
                    r.setCaret(s);
                    r.addItem(t);
                    r.refreshOptions(i && r.settings.mode !== "single");
                    f(n)
                }),
                o = h.apply(this, [t, e]);
            return typeof o != "undefined" && e(o), !0
        },
        refreshItems: function() {
            this.lastQuery = null;
            this.isSetup && this.addItem(this.items);
            this.refreshState();
            this.updateOriginalInput()
        },
        refreshState: function() {
            this.refreshValidityState();
            this.refreshClasses()
        },
        refreshValidityState: function() {
            if (!this.isRequired) return !1;
            var n = !this.items.length;
            this.isInvalid = n;
            this.$control_input.prop("required", n);
            this.$input.prop("required", !n)
        },
        refreshClasses: function() {
            var t = this,
                i = t.isFull(),
                r = t.isLocked;
            t.$wrapper.toggleClass("rtl", t.rtl);
            t.$control.toggleClass("focus", t.isFocused).toggleClass("disabled", t.isDisabled).toggleClass("required", t.isRequired).toggleClass("invalid", t.isInvalid).toggleClass("locked", r).toggleClass("full", i).toggleClass("not-full", !i).toggleClass("input-active", t.isFocused && !t.isInputHidden).toggleClass("dropdown-active", t.isOpen).toggleClass("has-options", !n.isEmptyObject(t.options)).toggleClass("has-items", t.items.length > 0);
            t.$control_input.data("grow", !i && !r)
        },
        isFull: function() { return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems },
        updateOriginalInput: function(n) {
            var i, u, r, f, t = this;
            if (n = n || {}, t.tagType === h) {
                for (r = [], i = 0, u = t.items.length; i < u; i++) f = t.options[t.items[i]][t.settings.labelField] || "", r.push('<option value="' + s(t.items[i]) + '" selected="selected">' + s(f) + "<\/option>");
                r.length || this.$input.attr("multiple") || r.push('<option value="" selected="selected"><\/option>');
                t.$input.html(r.join(""))
            } else t.$input.val(t.getValue()), t.$input.attr("value", t.$input.val());
            t.isSetup && (n.silent || t.trigger("change", t.$input.val()))
        },
        updatePlaceholder: function() {
            if (this.settings.placeholder) {
                var n = this.$control_input;
                this.items.length ? n.removeAttr("placeholder") : n.attr("placeholder", this.settings.placeholder);
                n.triggerHandler("update", { force: !0 })
            }
        },
        open: function() {
            var n = this;
            n.isLocked || n.isOpen || n.settings.mode === "multi" && n.isFull() || (n.focus(), n.isOpen = !0, n.refreshState(), n.$dropdown.css({ visibility: "hidden", display: "block" }), n.positionDropdown(), n.$dropdown.css({ visibility: "visible" }), n.trigger("dropdown_open", n.$dropdown))
        },
        close: function() {
            var n = this,
                t = n.isOpen;
            n.settings.mode === "single" && n.items.length && (n.hideInput(), n.isBlurring || n.$control_input.blur());
            n.isOpen = !1;
            n.$dropdown.hide();
            n.setActiveOption(null);
            n.refreshState();
            t && n.trigger("dropdown_close", n.$dropdown)
        },
        positionDropdown: function() {
            var t = this,
                i = t.settings.dropdownDirection,
                r, u;
            return i !== "auto" ? t.setDropdownDirection(i) : (t.setDropdownDirection("down"), r = t.$dropdown[0].getBoundingClientRect(), u = r.bottom <= (window.innerHeight || n(window).height()), u ? void 0 : t.setDropdownDirection("up"))
        },
        setDropdownDirection: function(n) {
            var t = this.$control,
                i = this.settings.dropdownParent === "body" ? t.offset() : t.position();
            i.top += t.outerHeight(!0);
            this.$dropdown.css({ width: t[0].getBoundingClientRect().width, left: i.left, top: n === "down" ? i.top : "auto", bottom: n === "down" ? "auto" : i.top }).toggleClass("dropdown-up", n === "down" ? !1 : !0)
        },
        clear: function(n) {
            var t = this;
            t.items.length && (t.$control.children(":not(input)").remove(), t.items = [], t.lastQuery = null, t.setCaret(0), t.setActiveItem(null), t.updatePlaceholder(), t.updateOriginalInput({ silent: n }), t.refreshState(), t.showInput(), t.trigger("clear"))
        },
        insertAtCaret: function(n) {
            var i = Math.min(this.caretPos, this.items.length),
                r = n[0],
                t = this.buffer || this.$control[0];
            i === 0 ? t.insertBefore(r, t.firstChild) : t.insertBefore(r, t.childNodes[i]);
            this.setCaret(i + 1)
        },
        deleteSelection: function(t) {
            var f, l, u, e, r, s, h, c, a, i = this;
            if (u = t && t.keyCode === o ? -1 : 1, e = v(i.$control_input[0]), i.$activeOption && !i.settings.hideSelected && (h = i.getAdjacentOption(i.$activeOption, -1).attr("data-value")), r = [], i.$activeItems.length) {
                for (a = i.$control.children(".active:" + (u > 0 ? "last" : "first")), s = i.$control.children(":not(input)").index(a), u > 0 && s++, f = 0, l = i.$activeItems.length; f < l; f++) r.push(n(i.$activeItems[f]).attr("data-value"));
                t && (t.preventDefault(), t.stopPropagation())
            } else(i.isFocused || i.settings.mode === "single") && i.items.length && (u < 0 && e.start === 0 && e.length === 0 ? r.push(i.items[i.caretPos - 1]) : u > 0 && e.start === i.$control_input.val().length && r.push(i.items[i.caretPos]));
            if (!r.length || typeof i.settings.onDelete == "function" && i.settings.onDelete.apply(i, [r]) === !1) return !1;
            for (typeof s != "undefined" && i.setCaret(s); r.length;) i.removeItem(r.pop());
            return i.showInput(), i.positionDropdown(), i.refreshOptions(!0), h && (c = i.getOption(h), c.length && i.setActiveOption(c)), !0
        },
        advanceSelection: function(n, t) {
            var o, r, u, f, s, e, i = this;
            n !== 0 && (i.rtl && (n *= -1), o = n > 0 ? "last" : "first", r = v(i.$control_input[0]), i.isFocused && !i.isInputHidden ? (f = i.$control_input.val().length, s = n < 0 ? r.start === 0 && r.length === 0 : r.start === f, s && !f && i.advanceCaret(n, t)) : (e = i.$control.children(".active:" + o), e.length && (u = i.$control.children(":not(input)").index(e), i.setActiveItem(null), i.setCaret(n > 0 ? u + 1 : u))))
        },
        advanceCaret: function(n, t) {
            var i = this,
                u, r;
            n !== 0 && (u = n > 0 ? "next" : "prev", i.isShiftDown ? (r = i.$control_input[u](), r.length && (i.hideInput(), i.setActiveItem(r), t && t.preventDefault())) : i.setCaret(i.caretPos + n))
        },
        setCaret: function(t) {
            var i = this,
                r, e, u, f;
            if (t = i.settings.mode === "single" ? i.items.length : Math.max(0, Math.min(i.items.length, t)), !i.isPending)
                for (u = i.$control.children(":not(input)"), r = 0, e = u.length; r < e; r++) f = n(u[r]).detach(), r < t ? i.$control_input.before(f) : i.$control.append(f);
            i.caretPos = t
        },
        lock: function() {
            this.close();
            this.isLocked = !0;
            this.refreshState()
        },
        unlock: function() {
            this.isLocked = !1;
            this.refreshState()
        },
        disable: function() {
            var n = this;
            n.$input.prop("disabled", !0);
            n.$control_input.prop("disabled", !0).prop("tabindex", -1);
            n.isDisabled = !0;
            n.lock()
        },
        enable: function() {
            var n = this;
            n.$input.prop("disabled", !1);
            n.$control_input.prop("disabled", !1).prop("tabindex", n.tabIndex);
            n.isDisabled = !1;
            n.unlock()
        },
        destroy: function() {
            var t = this,
                i = t.eventNS,
                u = t.revertSettings;
            t.trigger("destroy");
            t.off();
            t.$wrapper.remove();
            t.$dropdown.remove();
            t.$input.html("").append(u.$children).removeAttr("tabindex").removeClass("selectized").attr({ tabindex: u.tabindex }).show();
            t.$control_input.removeData("grow");
            t.$input.removeData("selectize");
            --r.count == 0 && r.$testInput && (r.$testInput.remove(), r.$testInput = undefined);
            n(window).off(i);
            n(document).off(i);
            n(document.body).off(i);
            delete t.$input[0].selectize
        },
        render: function(t, i) {
            var e, h, f = "",
                o = !1,
                r = this;
            return ((t === "option" || t === "item") && (e = u(i[r.settings.valueField]), o = !!e), o && (b(r.renderCache[t]) || (r.renderCache[t] = {}), r.renderCache[t].hasOwnProperty(e))) ? r.renderCache[t][e] : (f = n(r.settings.render[t].apply(this, [i, s])), t === "option" || t === "option_create" ? i[r.settings.disabledField] || f.attr("data-selectable", "") : t === "optgroup" && (h = i[r.settings.optgroupValueField] || "", f.attr("data-group", h), i[r.settings.disabledField] && f.attr("data-disabled", "")), (t === "option" || t === "item") && f.attr("data-value", e || ""), o && (r.renderCache[t][e] = f[0]), f[0])
        },
        clearCache: function(n) {
            var t = this;
            typeof n == "undefined" ? t.renderCache = {} : delete t.renderCache[n]
        },
        canCreate: function(n) {
            var i = this,
                t;
            return i.settings.create ? (t = i.settings.createFilter, n.length && (typeof t != "function" || t.apply(i, [n])) && (typeof t != "string" || new RegExp(t).test(n)) && (!(t instanceof RegExp) || t.test(n))) : !1
        }
    }), r.count = 0, r.defaults = { options: [], optgroups: [], plugins: [], delimiter: ",", splitOn: null, persist: !0, diacritics: !0, create: !1, createOnBlur: !1, chooseItemOnBlur: !1, createFilter: null, highlight: !0, openOnFocus: !0, maxOptions: 1e3, maxItems: null, hideSelected: null, addPrecedence: !1, selectOnTab: !0, preload: !1, allowEmptyOption: !1, closeAfterSelect: !1, scrollDuration: 60, loadThrottle: 300, loadingClass: "loading", dataAttr: "data-data", optgroupField: "optgroup", valueField: "value", labelField: "text", disabledField: "disabled", optgroupLabelField: "label", optgroupValueField: "value", lockOptgroupOrder: !1, sortField: "$order", searchField: ["text"], searchConjunction: "and", mode: null, wrapperClass: "selectize-control", inputClass: "selectize-input", dropdownClass: "selectize-dropdown", dropdownContentClass: "selectize-dropdown-content", dropdownParent: null, copyClassesToDropdown: !0, render: {} }, n.fn.selectize = function(t) {
        var c = n.fn.selectize.defaults,
            i = n.extend({}, c, t),
            o = i.dataAttr,
            s = i.labelField,
            e = i.valueField,
            h = i.disabledField,
            f = i.optgroupField,
            l = i.optgroupLabelField,
            a = i.optgroupValueField,
            v = function(t, r) {
                var u, h, f, c, a = t.attr(o),
                    l;
                if (a)
                    for (r.options = JSON.parse(a), u = 0, h = r.options.length; u < h; u++) r.items.push(r.options[u][e]);
                else {
                    if (l = n.trim(t.val() || ""), !i.allowEmptyOption && !l.length) return;
                    for (f = l.split(i.delimiter), u = 0, h = f.length; u < h; u++) c = {}, c[s] = f[u], c[e] = f[u], r.options.push(c);
                    r.items = f
                }
            },
            y = function(t, r) {
                var c, w, p, v, d = r.options,
                    y = {},
                    b = function(n) { var t = o && n.attr(o); return typeof t == "string" && t.length ? JSON.parse(t) : null },
                    k = function(t, o) {
                        var l, a, c;
                        if (t = n(t), l = u(t.val()), l || i.allowEmptyOption) {
                            if (y.hasOwnProperty(l)) { o && (a = y[l][f], a ? n.isArray(a) ? a.push(o) : y[l][f] = [a, o] : y[l][f] = o); return }
                            c = b(t) || {};
                            c[s] = c[s] || t.text();
                            c[e] = c[e] || l;
                            c[h] = c[h] || t.prop("disabled");
                            c[f] = c[f] || o;
                            y[l] = c;
                            d.push(c);
                            t.is(":selected") && r.items.push(l)
                        }
                    },
                    g = function(t) { var f, o, i, u, e; for (t = n(t), i = t.attr("label"), i && (u = b(t) || {}, u[l] = i, u[a] = i, u[h] = t.prop("disabled"), r.optgroups.push(u)), e = n("option", t), f = 0, o = e.length; f < o; f++) k(e[f], i) };
                for (r.maxItems = t.attr("multiple") ? null : 1, v = t.children(), c = 0, w = v.length; c < w; c++) p = v[c].tagName.toLowerCase(), p === "optgroup" ? g(v[c]) : p === "option" && k(v[c])
            };
        return this.each(function() {
            var f;
            if (!this.selectize) {
                var o, u = n(this),
                    s = this.tagName.toLowerCase(),
                    e = u.attr("placeholder") || u.attr("data-placeholder");
                e || i.allowEmptyOption || (e = u.children('option[value=""]').text());
                f = { placeholder: e, options: [], optgroups: [], items: [] };
                s === "select" ? y(u, f) : v(u, f);
                o = new r(u, n.extend(!0, {}, c, f, t))
            }
        })
    }, n.fn.selectize.defaults = r.defaults, n.fn.selectize.support = { validity: w }, r.define("drag_drop", function() {
        if (!n.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
        if (this.settings.mode === "multi") {
            var t = this;
            t.lock = function() { var n = t.lock; return function() { var i = t.$control.data("sortable"); return i && i.disable(), n.apply(t, arguments) } }();
            t.unlock = function() { var n = t.unlock; return function() { var i = t.$control.data("sortable"); return i && i.enable(), n.apply(t, arguments) } }();
            t.setup = function() {
                var i = t.setup;
                return function() {
                    i.apply(this, arguments);
                    var r = t.$control.sortable({
                        items: "[data-value]",
                        forcePlaceholderSize: !0,
                        disabled: t.isLocked,
                        start: function(n, t) {
                            t.placeholder.css("width", t.helper.css("width"));
                            r.css({ overflow: "visible" })
                        },
                        stop: function() {
                            r.css({ overflow: "hidden" });
                            var u = t.$activeItems ? t.$activeItems.slice() : null,
                                i = [];
                            r.children("[data-value]").each(function() { i.push(n(this).attr("data-value")) });
                            t.setValue(i);
                            t.setActiveItem(u)
                        }
                    })
                }
            }()
        }
    }), r.define("dropdown_header", function(t) {
        var i = this;
        t = n.extend({ title: "Untitled", headerClass: "selectize-dropdown-header", titleRowClass: "selectize-dropdown-header-title", labelClass: "selectize-dropdown-header-label", closeClass: "selectize-dropdown-header-close", html: function(n) { return '<div class="' + n.headerClass + '"><div class="' + n.titleRowClass + '"><span class="' + n.labelClass + '">' + n.title + '<\/span><a href="javascript:void(0)" class="' + n.closeClass + '">&times;<\/a><\/div><\/div>' } }, t);
        i.setup = function() {
            var r = i.setup;
            return function() {
                r.apply(i, arguments);
                i.$dropdown_header = n(t.html(t));
                i.$dropdown.prepend(i.$dropdown_header)
            }
        }()
    }), r.define("optgroup_columns", function(t) {
        var i = this,
            r, u;
        t = n.extend({ equalizeWidth: !0, equalizeHeight: !0 }, t);
        this.getAdjacentOption = function(t, i) {
            var r = t.closest("[data-group]").find("[data-selectable]"),
                u = r.index(t) + i;
            return u >= 0 && u < r.length ? r.eq(u) : n()
        };
        this.onKeyDown = function() {
            var n = i.onKeyDown;
            return function(t) {
                var e, u, f, r;
                if (this.isOpen && (t.keyCode === l || t.keyCode === y)) {
                    i.ignoreHover = !0;
                    r = this.$activeOption.closest("[data-group]");
                    e = r.find("[data-selectable]").index(this.$activeOption);
                    r = t.keyCode === l ? r.prev("[data-group]") : r.next("[data-group]");
                    f = r.find("[data-selectable]");
                    u = f.eq(Math.min(f.length - 1, e));
                    u.length && this.setActiveOption(u);
                    return
                }
                return n.apply(this, arguments)
            }
        }();
        r = function() {
            var n, t = r.width,
                i = document;
            return typeof t == "undefined" && (n = i.createElement("div"), n.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"><\/div><\/div>', n = n.firstChild, i.body.appendChild(n), t = r.width = n.offsetWidth - n.clientWidth, i.body.removeChild(n)), t
        };
        u = function() {
            var e, u, o, s, c, h, f;
            if (f = n("[data-group]", i.$dropdown_content), u = f.length, u && i.$dropdown_content.width()) {
                if (t.equalizeHeight) {
                    for (o = 0, e = 0; e < u; e++) o = Math.max(o, f.eq(e).height());
                    f.css({ height: o })
                }
                t.equalizeWidth && (h = i.$dropdown_content.innerWidth() - r(), s = Math.round(h / u), f.css({ width: s }), u > 1 && (c = h - s * (u - 1), f.eq(u - 1).css({ width: c })))
            }
        };
        (t.equalizeHeight || t.equalizeWidth) && (c.after(this, "positionDropdown", u), c.after(this, "refreshOptions", u))
    }), r.define("remove_button", function(t) {
        t = n.extend({ label: "&times;", title: "Remove", className: "remove", append: !0 }, t);
        var i = function(t, i) {
                i.className = "remove-single";
                var r = t,
                    u = '<a href="javascript:void(0)" class="' + i.className + '" tabindex="-1" title="' + s(i.title) + '">' + i.label + "<\/a>",
                    f = function(t, i) { return n("<span>").append(t).append(i) };
                t.setup = function() {
                    var e = r.setup;
                    return function() {
                        if (i.append) {
                            var o = n(r.$input.context).attr("id"),
                                h = n("#" + o),
                                s = r.settings.render.item;
                            r.settings.render.item = function() { return f(s.apply(t, arguments), u) }
                        }
                        e.apply(t, arguments);
                        t.$control.on("click", "." + i.className, function(n) {
                            (n.preventDefault(), r.isLocked) || r.clear()
                        })
                    }
                }()
            },
            r = function(t, i) {
                var r = t,
                    u = '<a href="javascript:void(0)" class="' + i.className + '" tabindex="-1" title="' + s(i.title) + '">' + i.label + "<\/a>",
                    f = function(n, t) { var i = n.search(/(<\/[^>]+>\s*)$/); return n.substring(0, i) + t + n.substring(i) };
                t.setup = function() {
                    var e = r.setup;
                    return function() {
                        if (i.append) {
                            var o = r.settings.render.item;
                            r.settings.render.item = function() { return f(o.apply(t, arguments), u) }
                        }
                        e.apply(t, arguments);
                        t.$control.on("click", "." + i.className, function(t) {
                            if (t.preventDefault(), !r.isLocked) {
                                var i = n(t.currentTarget).parent();
                                r.setActiveItem(i);
                                r.deleteSelection() && r.setCaret(r.items.length)
                            }
                        })
                    }
                }()
            };
        if (this.settings.mode === "single") { i(this, t); return }
        r(this, t)
    }), r.define("restore_on_backspace", function(n) {
        var t = this;
        n.text = n.text || function(n) { return n[this.settings.labelField] };
        this.onKeyDown = function() {
            var i = t.onKeyDown;
            return function(t) {
                var r, u;
                if (t.keyCode === o && this.$control_input.val() === "" && !this.$activeItems.length && (r = this.caretPos - 1, r >= 0 && r < this.items.length)) {
                    u = this.options[this.items[r]];
                    this.deleteSelection(t) && (this.setTextboxValue(n.text.apply(this, [u])), this.refreshOptions(!0));
                    t.preventDefault();
                    return
                }
                return i.apply(this, arguments)
            }
        }()
    }), r
});
! function(n) { "object" == typeof module && module.exports ? module.exports = n() : window.intlTelInput = n() }(function(n) {
    "use strict";
    return function() {
        function c(n, t) { if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function"); }

        function s(n, t) { for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i) }

        function l(n, t, i) { return t && s(n.prototype, t), i && s(n, i), n }
        for (var i, r, o, t = [
                ["Afghanistan (â€«Ø§ÙØºØ§Ù†Ø³ØªØ§Ù†â€¬â€)", "af", "93"],
                ["Albania (ShqipĂ«ri)", "al", "355"],
                ["Algeria (â€«Ø§Ù„Ø¬Ø²Ø§Ø¦Ø±â€¬â€)", "dz", "213"],
                ["American Samoa", "as", "1", 5, ["684"]],
                ["Andorra", "ad", "376"],
                ["Angola", "ao", "244"],
                ["Anguilla", "ai", "1", 6, ["264"]],
                ["Antigua and Barbuda", "ag", "1", 7, ["268"]],
                ["Argentina", "ar", "54"],
                ["Armenia (Ơ€Ơ¡ƠµƠ¡Ơ½Ơ¿Ơ¡Ơ¶)", "am", "374"],
                ["Aruba", "aw", "297"],
                ["Ascension Island", "ac", "247"],
                ["Australia", "au", "61", 0],
                ["Austria (Ă–sterreich)", "at", "43"],
                ["Azerbaijan (AzÉ™rbaycan)", "az", "994"],
                ["Bahamas", "bs", "1", 8, ["242"]],
                ["Bahrain (â€«Ø§Ù„Ø¨Ø­Ø±ÙÙ†â€¬â€)", "bh", "973"],
                ["Bangladesh (à¦¬à¦¾à¦‚à¦²à¦¾à¦¦à§‡à¦¶)", "bd", "880"],
                ["Barbados", "bb", "1", 9, ["246"]],
                ["Belarus (Đ‘ĐµĐ»Đ°Ñ€ÑƒÑÑŒ)", "by", "375"],
                ["Belgium (BelgiĂ«)", "be", "32"],
                ["Belize", "bz", "501"],
                ["Benin (BĂ©nin)", "bj", "229"],
                ["Bermuda", "bm", "1", 10, ["441"]],
                ["Bhutan (à½ à½–à¾²à½´à½‚)", "bt", "975"],
                ["Bolivia", "bo", "591"],
                ["Bosnia and Herzegovina (Đ‘Đ¾ÑĐ½Đ° Đ¸ Đ¥ĐµÑ€Ñ†ĐµĐ³Đ¾Đ²Đ¸Đ½Đ°)", "ba", "387"],
                ["Botswana", "bw", "267"],
                ["Brazil (Brasil)", "br", "55"],
                ["British Indian Ocean Territory", "io", "246"],
                ["British Virgin Islands", "vg", "1", 11, ["284"]],
                ["Brunei", "bn", "673"],
                ["Bulgaria (Đ‘ÑĐ»Đ³Đ°Ñ€Đ¸Ñ)", "bg", "359"],
                ["Burkina Faso", "bf", "226"],
                ["Burundi (Uburundi)", "bi", "257"],
                ["Cambodia (á€á˜áŸ’á–á»á‡á¶)", "kh", "855"],
                ["Cameroon (Cameroun)", "cm", "237"],
                ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]],
                ["Cape Verde (Kabu Verdi)", "cv", "238"],
                ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]],
                ["Cayman Islands", "ky", "1", 12, ["345"]],
                ["Central African Republic (RĂ©publique centrafricaine)", "cf", "236"],
                ["Chad (Tchad)", "td", "235"],
                ["Chile", "cl", "56"],
                ["China (ä¸­å›½)", "cn", "86"],
                ["Christmas Island", "cx", "61", 2, ["89164"]],
                ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]],
                ["Colombia", "co", "57"],
                ["Comoros (â€«Ø¬Ø²Ø± Ø§Ù„Ù‚Ù…Ø±â€¬â€)", "km", "269"],
                ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
                ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
                ["Cook Islands", "ck", "682"],
                ["Costa Rica", "cr", "506"],
                ["CĂ´te dâ€™Ivoire", "ci", "225"],
                ["Croatia (Hrvatska)", "hr", "385"],
                ["Cuba", "cu", "53"],
                ["CuraĂ§ao", "cw", "599", 0],
                ["Cyprus (ÎÏÏ€ÏÎ¿Ï‚)", "cy", "357"],
                ["Czech Republic (ÄŒeskĂ¡ republika)", "cz", "420"],
                ["Denmark (Danmark)", "dk", "45"],
                ["Djibouti", "dj", "253"],
                ["Dominica", "dm", "1", 13, ["767"]],
                ["Dominican Republic (RepĂºblica Dominicana)", "do", "1", 2, ["809", "829", "849"]],
                ["Ecuador", "ec", "593"],
                ["Egypt (â€«Ù…ØµØ±â€¬â€)", "eg", "20"],
                ["El Salvador", "sv", "503"],
                ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
                ["Eritrea", "er", "291"],
                ["Estonia (Eesti)", "ee", "372"],
                ["Eswatini", "sz", "268"],
                ["Ethiopia", "et", "251"],
                ["Falkland Islands (Islas Malvinas)", "fk", "500"],
                ["Faroe Islands (FĂ¸royar)", "fo", "298"],
                ["Fiji", "fj", "679"],
                ["Finland (Suomi)", "fi", "358", 0],
                ["France", "fr", "33"],
                ["French Guiana (Guyane franĂ§aise)", "gf", "594"],
                ["French Polynesia (PolynĂ©sie franĂ§aise)", "pf", "689"],
                ["Gabon", "ga", "241"],
                ["Gambia", "gm", "220"],
                ["Georgia (áƒ¡áƒáƒ¥áƒáƒ áƒ—áƒ•áƒ”áƒáƒ)", "ge", "995"],
                ["Germany (Deutschland)", "de", "49"],
                ["Ghana (Gaana)", "gh", "233"],
                ["Gibraltar", "gi", "350"],
                ["Greece (Î•Î»Î»Î¬Î´Î±)", "gr", "30"],
                ["Greenland (Kalaallit Nunaat)", "gl", "299"],
                ["Grenada", "gd", "1", 14, ["473"]],
                ["Guadeloupe", "gp", "590", 0],
                ["Guam", "gu", "1", 15, ["671"]],
                ["Guatemala", "gt", "502"],
                ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]],
                ["Guinea (GuinĂ©e)", "gn", "224"],
                ["Guinea-Bissau (GuinĂ© Bissau)", "gw", "245"],
                ["Guyana", "gy", "592"],
                ["Haiti", "ht", "509"],
                ["Honduras", "hn", "504"],
                ["Hong Kong (é¦™æ¸¯)", "hk", "852"],
                ["Hungary (MagyarorszĂ¡g)", "hu", "36"],
                ["Iceland (Ăsland)", "is", "354"],
                ["India (à¤­à¤¾à¤°à¤¤)", "in", "91"],
                ["Indonesia", "id", "62"],
                ["Iran (â€«Ø§ÛŒØ±Ø§Ù†â€¬â€)", "ir", "98"],
                ["Iraq (â€«Ø§Ù„Ø¹Ø±Ø§Ù‚â€¬â€)", "iq", "964"],
                ["Ireland", "ie", "353"],
                ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]],
                ["Israel (â€«×™×©×¨××œâ€¬â€)", "il", "972"],
                ["Italy (Italia)", "it", "39", 0],
                ["Jamaica", "jm", "1", 4, ["876", "658"]],
                ["Japan (æ—¥æœ¬)", "jp", "81"],
                ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]],
                ["Jordan (â€«Ø§Ù„Ø£Ø±Ø¯Ù†â€¬â€)", "jo", "962"],
                ["Kazakhstan (ĐĐ°Đ·Đ°Ñ…ÑÑ‚Đ°Đ½)", "kz", "7", 1, ["33", "7"]],
                ["Kenya", "ke", "254"],
                ["Kiribati", "ki", "686"],
                ["Kosovo", "xk", "383"],
                ["Kuwait (â€«Ø§Ù„ÙƒÙˆÙØªâ€¬â€)", "kw", "965"],
                ["Kyrgyzstan (ĐÑ‹Ñ€Đ³Ñ‹Đ·ÑÑ‚Đ°Đ½)", "kg", "996"],
                ["Laos (àº¥àº²àº§)", "la", "856"],
                ["Latvia (Latvija)", "lv", "371"],
                ["Lebanon (â€«Ù„Ø¨Ù†Ø§Ù†â€¬â€)", "lb", "961"],
                ["Lesotho", "ls", "266"],
                ["Liberia", "lr", "231"],
                ["Libya (â€«Ù„ÙØ¨ÙØ§â€¬â€)", "ly", "218"],
                ["Liechtenstein", "li", "423"],
                ["Lithuania (Lietuva)", "lt", "370"],
                ["Luxembourg", "lu", "352"],
                ["Macau (æ¾³é–€)", "mo", "853"],
                ["Macedonia (FYROM) (ĐœĐ°ĐºĐµĐ´Đ¾Đ½Đ¸Ñ˜Đ°)", "mk", "389"],
                ["Madagascar (Madagasikara)", "mg", "261"],
                ["Malawi", "mw", "265"],
                ["Malaysia", "my", "60"],
                ["Maldives", "mv", "960"],
                ["Mali", "ml", "223"],
                ["Malta", "mt", "356"],
                ["Marshall Islands", "mh", "692"],
                ["Martinique", "mq", "596"],
                ["Mauritania (â€«Ù…ÙˆØ±ÙØªØ§Ù†ÙØ§â€¬â€)", "mr", "222"],
                ["Mauritius (Moris)", "mu", "230"],
                ["Mayotte", "yt", "262", 1, ["269", "639"]],
                ["Mexico (MĂ©xico)", "mx", "52"],
                ["Micronesia", "fm", "691"],
                ["Moldova (Republica Moldova)", "md", "373"],
                ["Monaco", "mc", "377"],
                ["Mongolia (ĐœĐ¾Đ½Đ³Đ¾Đ»)", "mn", "976"],
                ["Montenegro (Crna Gora)", "me", "382"],
                ["Montserrat", "ms", "1", 16, ["664"]],
                ["Morocco (â€«Ø§Ù„Ù…ØºØ±Ø¨â€¬â€)", "ma", "212", 0],
                ["Mozambique (MoĂ§ambique)", "mz", "258"],
                ["Myanmar (Burma) (á€™á€¼á€”á€ºá€™á€¬)", "mm", "95"],
                ["Namibia (NamibiĂ«)", "na", "264"],
                ["Nauru", "nr", "674"],
                ["Nepal (à¤¨à¥‡à¤ªà¤¾à¤²)", "np", "977"],
                ["Netherlands (Nederland)", "nl", "31"],
                ["New Caledonia (Nouvelle-CalĂ©donie)", "nc", "687"],
                ["New Zealand", "nz", "64"],
                ["Nicaragua", "ni", "505"],
                ["Niger (Nijar)", "ne", "227"],
                ["Nigeria", "ng", "234"],
                ["Niue", "nu", "683"],
                ["Norfolk Island", "nf", "672"],
                ["North Korea (́¡°́„  ë¯¼́£¼́£¼́˜ ́¸ë¯¼ ê³µí™”êµ­)", "kp", "850"],
                ["Northern Mariana Islands", "mp", "1", 17, ["670"]],
                ["Norway (Norge)", "no", "47", 0],
                ["Oman (â€«Ø¹ÙÙ…Ø§Ù†â€¬â€)", "om", "968"],
                ["Pakistan (â€«Ù¾Ø§Ú©Ø³ØªØ§Ù†â€¬â€)", "pk", "92"],
                ["Palau", "pw", "680"],
                ["Palestine (â€«ÙÙ„Ø³Ø·ÙÙ†â€¬â€)", "ps", "970"],
                ["Panama (PanamĂ¡)", "pa", "507"],
                ["Papua New Guinea", "pg", "675"],
                ["Paraguay", "py", "595"],
                ["Peru (PerĂº)", "pe", "51"],
                ["Philippines", "ph", "63"],
                ["Poland (Polska)", "pl", "48"],
                ["Portugal", "pt", "351"],
                ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
                ["Qatar (â€«Ù‚Ø·Ø±â€¬â€)", "qa", "974"],
                ["RĂ©union (La RĂ©union)", "re", "262", 0],
                ["Romania (RomĂ¢nia)", "ro", "40"],
                ["Russia (Đ Đ¾ÑÑĐ¸Ñ)", "ru", "7", 0],
                ["Rwanda", "rw", "250"],
                ["Saint BarthĂ©lemy", "bl", "590", 1],
                ["Saint Helena", "sh", "290"],
                ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]],
                ["Saint Lucia", "lc", "1", 19, ["758"]],
                ["Saint Martin (Saint-Martin (partie franĂ§aise))", "mf", "590", 2],
                ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
                ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]],
                ["Samoa", "ws", "685"],
                ["San Marino", "sm", "378"],
                ["SĂ£o TomĂ© and PrĂ­ncipe (SĂ£o TomĂ© e PrĂ­ncipe)", "st", "239"],
                ["Saudi Arabia (â€«Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ø¹Ø±Ø¨ÙØ© Ø§Ù„Ø³Ø¹ÙˆØ¯ÙØ©â€¬â€)", "sa", "966"],
                ["Senegal (SĂ©nĂ©gal)", "sn", "221"],
                ["Serbia (Đ¡Ñ€Đ±Đ¸Ñ˜Đ°)", "rs", "381"],
                ["Seychelles", "sc", "248"],
                ["Sierra Leone", "sl", "232"],
                ["Singapore", "sg", "65"],
                ["Sint Maarten", "sx", "1", 21, ["721"]],
                ["Slovakia (Slovensko)", "sk", "421"],
                ["Slovenia (Slovenija)", "si", "386"],
                ["Solomon Islands", "sb", "677"],
                ["Somalia (Soomaaliya)", "so", "252"],
                ["South Africa", "za", "27"],
                ["South Korea (ëŒ€í•œë¯¼êµ­)", "kr", "82"],
                ["South Sudan (â€«Ø¬Ù†ÙˆØ¨ Ø§Ù„Ø³ÙˆØ¯Ø§Ù†â€¬â€)", "ss", "211"],
                ["Spain (EspaĂ±a)", "es", "34"],
                ["Sri Lanka (à·à·â€à¶»à·“ à¶½à¶‚à¶à·à·€)", "lk", "94"],
                ["Sudan (â€«Ø§Ù„Ø³ÙˆØ¯Ø§Ù†â€¬â€)", "sd", "249"],
                ["Suriname", "sr", "597"],
                ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]],
                ["Sweden (Sverige)", "se", "46"],
                ["Switzerland (Schweiz)", "ch", "41"],
                ["Syria (â€«Ø³ÙˆØ±ÙØ§â€¬â€)", "sy", "963"],
                ["Taiwan (å°ç£)", "tw", "886"],
                ["Tajikistan", "tj", "992"],
                ["Tanzania", "tz", "255"],
                ["Thailand (à¹„à¸—à¸¢)", "th", "66"],
                ["Timor-Leste", "tl", "670"],
                ["Togo", "tg", "228"],
                ["Tokelau", "tk", "690"],
                ["Tonga", "to", "676"],
                ["Trinidad and Tobago", "tt", "1", 22, ["868"]],
                ["Tunisia (â€«ØªÙˆÙ†Ø³â€¬â€)", "tn", "216"],
                ["Turkey (TĂ¼rkiye)", "tr", "90"],
                ["Turkmenistan", "tm", "993"],
                ["Turks and Caicos Islands", "tc", "1", 23, ["649"]],
                ["Tuvalu", "tv", "688"],
                ["U.S. Virgin Islands", "vi", "1", 24, ["340"]],
                ["Uganda", "ug", "256"],
                ["Ukraine (Đ£ĐºÑ€Đ°Ñ—Đ½Đ°)", "ua", "380"],
                ["United Arab Emirates (â€«Ø§Ù„Ø¥Ù…Ø§Ø±Ø§Øª Ø§Ù„Ø¹Ø±Ø¨ÙØ© Ø§Ù„Ù…ØªØ­Ø¯Ø©â€¬â€)", "ae", "971"],
                ["United Kingdom", "gb", "44", 0],
                ["United States", "us", "1", 0],
                ["Uruguay", "uy", "598"],
                ["Uzbekistan (OÊ»zbekiston)", "uz", "998"],
                ["Vanuatu", "vu", "678"],
                ["Vatican City (CittĂ  del Vaticano)", "va", "39", 1, ["06698"]],
                ["Venezuela", "ve", "58"],
                ["Vietnam (Viá»‡t Nam)", "vn", "84"],
                ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
                ["Western Sahara (â€«Ø§Ù„ØµØ­Ø±Ø§Ø¡ Ø§Ù„ØºØ±Ø¨ÙØ©â€¬â€)", "eh", "212", 1, ["5288", "5289"]],
                ["Yemen (â€«Ø§Ù„ÙÙ…Ù†â€¬â€)", "ye", "967"],
                ["Zambia", "zm", "260"],
                ["Zimbabwe", "zw", "263"],
                ["Ă…land Islands", "ax", "358", 1, ["18"]]
            ], u = 0; u < t.length; u++) i = t[u], t[u] = { name: i[0], iso2: i[1], dialCode: i[2], priority: i[3] || 0, areaCodes: i[4] || null };
        r = { getInstance: function(n) { var t = n.getAttribute("data-intl-tel-input-id"); return window.intlTelInputGlobals.instances[t] }, instances: {}, documentReady: function() { return "complete" === document.readyState } };
        "object" == typeof window && (window.intlTelInputGlobals = r);
        var a = 0,
            h = { allowDropdown: !0, autoHideDialCode: !0, autoPlaceholder: "polite", customContainer: "", customPlaceholder: null, dropdownContainer: null, excludeCountries: [], formatOnDisplay: !0, geoIpLookup: null, hiddenInput: "", initialCountry: "", localizedCountries: null, nationalMode: !0, onlyCountries: [], placeholderNumberType: "MOBILE", preferredCountries: ["us", "gb"], separateDialCode: !1, utilsScript: "" },
            v = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"],
            e = function(n, t) { for (var r = Object.keys(n), i = 0; i < r.length; i++) t(r[i], n[r[i]]) },
            f = function(n) { e(window.intlTelInputGlobals.instances, function(t) { window.intlTelInputGlobals.instances[t][n]() }) },
            y = function() {
                function i(n, t) {
                    var u = this,
                        r;
                    c(this, i);
                    this.id = a++;
                    this.a = n;
                    this.b = null;
                    this.c = null;
                    r = t || {};
                    this.d = {};
                    e(h, function(n, t) { u.d[n] = r.hasOwnProperty(n) ? r[n] : t });
                    this.e = Boolean(n.getAttribute("placeholder"))
                }
                return l(i, [{
                    key: "_init",
                    value: function() {
                        var n = this,
                            t, i;
                        (this.d.nationalMode && (this.d.autoHideDialCode = !1), this.d.separateDialCode && (this.d.autoHideDialCode = this.d.nationalMode = !1), this.g = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.g && (document.body.classList.add("iti-mobile"), this.d.dropdownContainer || (this.d.dropdownContainer = document.body)), "undefined" != typeof Promise) ? (t = new Promise(function(t, i) {
                            n.h = t;
                            n.i = i
                        }), i = new Promise(function(t, i) {
                            n.i0 = t;
                            n.i1 = i
                        }), this.promise = Promise.all([t, i])) : (this.h = this.i = function() {}, this.i0 = this.i1 = function() {});
                        this.s = {};
                        this._b();
                        this._f();
                        this._h();
                        this._i();
                        this._i3()
                    }
                }, {
                    key: "_b",
                    value: function() {
                        this._d();
                        this._d2();
                        this._e();
                        this.d.localizedCountries && this._d0();
                        (this.d.onlyCountries.length || this.d.localizedCountries) && this.p.sort(this._d1)
                    }
                }, {
                    key: "_c",
                    value: function(t, i, r) {
                        var u, f;
                        for (i.length > this.countryCodeMaxLen && (this.countryCodeMaxLen = i.length), this.q.hasOwnProperty(i) || (this.q[i] = []), u = 0; u < this.q[i].length; u++)
                            if (this.q[i][u] === t) return;
                        f = r !== n ? r : this.q[i].length;
                        this.q[i][f] = t
                    }
                }, {
                    key: "_d",
                    value: function() {
                        var n, i;
                        this.d.onlyCountries.length ? (n = this.d.onlyCountries.map(function(n) { return n.toLowerCase() }), this.p = t.filter(function(t) { return n.indexOf(t.iso2) > -1 })) : this.d.excludeCountries.length ? (i = this.d.excludeCountries.map(function(n) { return n.toLowerCase() }), this.p = t.filter(function(n) { return -1 === i.indexOf(n.iso2) })) : this.p = t
                    }
                }, { key: "_d0", value: function() { for (var t, n = 0; n < this.p.length; n++) t = this.p[n].iso2.toLowerCase(), this.d.localizedCountries.hasOwnProperty(t) && (this.p[n].name = this.d.localizedCountries[t]) } }, { key: "_d1", value: function(n, t) { return n.name.localeCompare(t.name) } }, {
                    key: "_d2",
                    value: function() {
                        var i, t, r, n, s, u, f, e, o;
                        for (this.countryCodeMaxLen = 0, this.dialCodes = {}, this.q = {}, i = 0; i < this.p.length; i++) t = this.p[i], this.dialCodes[t.dialCode] || (this.dialCodes[t.dialCode] = !0), this._c(t.iso2, t.dialCode, t.priority);
                        for (r = 0; r < this.p.length; r++)
                            if (n = this.p[r], n.areaCodes)
                                for (s = this.q[n.dialCode][0], u = 0; u < n.areaCodes.length; u++) {
                                    for (f = n.areaCodes[u], e = 1; e < f.length; e++) o = n.dialCode + f.substr(0, e), this._c(s, o), this._c(n.iso2, o);
                                    this._c(n.iso2, n.dialCode + f)
                                }
                    }
                }, { key: "_e", value: function() { var n, i, t; for (this.preferredCountries = [], n = 0; n < this.d.preferredCountries.length; n++) i = this.d.preferredCountries[n].toLowerCase(), t = this._y(i, !1, !0), t && this.preferredCountries.push(t) } }, { key: "_e2", value: function(n, t, i) { var r = document.createElement(n); return t && e(t, function(n, t) { return r.setAttribute(n, t) }), i && i.appendChild(r), r } }, {
                    key: "_f",
                    value: function() {
                        var n, t, i, r, u;
                        this.a.hasAttribute("autocomplete") || this.a.form && this.a.form.hasAttribute("autocomplete") || this.a.setAttribute("autocomplete", "off");
                        n = "iti";
                        this.d.allowDropdown && (n += " iti--allow-dropdown");
                        this.d.separateDialCode && (n += " iti--separate-dial-code");
                        this.d.customContainer && (n += " ", n += this.d.customContainer);
                        t = this._e2("div", { "class": n });
                        (this.a.parentNode.insertBefore(t, this.a), this.k = this._e2("div", { "class": "iti__flag-container" }, t), t.appendChild(this.a), this.selectedFlag = this._e2("div", { "class": "iti__selected-flag", role: "combobox", "aria-controls": "iti-".concat(this.id, "__country-listbox"), "aria-owns": "iti-".concat(this.id, "__country-listbox"), "aria-expanded": "false" }, this.k), this.l = this._e2("div", { "class": "iti__flag" }, this.selectedFlag), this.d.separateDialCode && (this.t = this._e2("div", { "class": "iti__selected-dial-code" }, this.selectedFlag)), this.d.allowDropdown && (this.selectedFlag.setAttribute("tabindex", "0"), this.u = this._e2("div", { "class": "iti__arrow" }, this.selectedFlag), this.m = this._e2("ul", { "class": "iti__country-list iti__hide", id: "iti-".concat(this.id, "__country-listbox"), role: "listbox", "aria-label": "List of countries" }), this.preferredCountries.length && (this._g(this.preferredCountries, "iti__preferred", !0), this._e2("li", { "class": "iti__divider", role: "separator", "aria-disabled": "true" }, this.m)), this._g(this.p, "iti__standard"), this.d.dropdownContainer ? (this.dropdown = this._e2("div", { "class": "iti iti--container" }), this.dropdown.appendChild(this.m)) : this.k.appendChild(this.m)), this.d.hiddenInput) && (i = this.d.hiddenInput, r = this.a.getAttribute("name"), r && (u = r.lastIndexOf("["), -1 !== u && (i = "".concat(r.substr(0, u), "[").concat(i, "]"))), this.hiddenInput = this._e2("input", { type: "hidden", name: i }), t.appendChild(this.hiddenInput))
                    }
                }, {
                    key: "_g",
                    value: function(n, t, i) {
                        for (var u, e, r = "", f = 0; f < n.length; f++) u = n[f], e = i ? "-preferred" : "", r += "<li class='iti__country ".concat(t, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(u.iso2).concat(e, "' role='option' data-dial-code='").concat(u.dialCode, "' data-country-code='").concat(u.iso2, "' aria-selected='false'>"), r += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(u.iso2, "'><\/div><\/div>"), r += "<span class='iti__country-name'>".concat(u.name, "<\/span>"), r += "<span class='iti__dial-code'>+".concat(u.dialCode, "<\/span>"), r += "<\/li>";
                        this.m.insertAdjacentHTML("beforeend", r)
                    }
                }, {
                    key: "_h",
                    value: function() {
                        var i = this.a.getAttribute("value"),
                            r = this.a.value,
                            o = i && "+" === i.charAt(0) && (!r || "+" !== r.charAt(0)),
                            n = o ? i : r,
                            f = this._5(n),
                            e = this._w(n),
                            t = this.d,
                            u = t.initialCountry,
                            s = t.nationalMode,
                            h = t.autoHideDialCode,
                            c = t.separateDialCode;
                        f && !e ? this._v(n) : "auto" !== u && (u ? this._z(u.toLowerCase()) : f && e ? this._z("us") : (this.j = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.p[0].iso2, n || this._z(this.j)), n || s || h || c || (this.a.value = "+".concat(this.s.dialCode)));
                        n && this._u(n)
                    }
                }, {
                    key: "_i",
                    value: function() {
                        this._j();
                        this.d.autoHideDialCode && this._l();
                        this.d.allowDropdown && this._i2();
                        this.hiddenInput && this._i0()
                    }
                }, {
                    key: "_i0",
                    value: function() {
                        var n = this;
                        this._a14 = function() { n.hiddenInput.value = n.getNumber() };
                        this.a.form && this.a.form.addEventListener("submit", this._a14)
                    }
                }, { key: "_i1", value: function() { for (var n = this.a; n && "LABEL" !== n.tagName;) n = n.parentNode; return n } }, {
                    key: "_i2",
                    value: function() {
                        var n = this,
                            t;
                        this._a9 = function(t) { n.m.classList.contains("iti__hide") ? n.a.focus() : t.preventDefault() };
                        t = this._i1();
                        t && t.addEventListener("click", this._a9);
                        this._a10 = function() {!n.m.classList.contains("iti__hide") || n.a.disabled || n.a.readOnly || n._n() };
                        this.selectedFlag.addEventListener("click", this._a10);
                        this._a11 = function(t) { n.m.classList.contains("iti__hide") && -1 !== ["ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter"].indexOf(t.key) && (t.preventDefault(), t.stopPropagation(), n._n()); "Tab" === t.key && n._2() };
                        this.k.addEventListener("keydown", this._a11)
                    }
                }, {
                    key: "_i3",
                    value: function() {
                        var n = this;
                        this.d.utilsScript && !window.intlTelInputUtils ? window.intlTelInputGlobals.documentReady() ? window.intlTelInputGlobals.loadUtils(this.d.utilsScript) : window.addEventListener("load", function() { window.intlTelInputGlobals.loadUtils(n.d.utilsScript) }) : this.i0();
                        "auto" === this.d.initialCountry ? this._i4() : this.h()
                    }
                }, {
                    key: "_i4",
                    value: function() {
                        window.intlTelInputGlobals.autoCountry ? this.handleAutoCountry() : window.intlTelInputGlobals.startedLoadingAutoCountry || (window.intlTelInputGlobals.startedLoadingAutoCountry = !0, "function" == typeof this.d.geoIpLookup && this.d.geoIpLookup(function(n) {
                            window.intlTelInputGlobals.autoCountry = n.toLowerCase();
                            setTimeout(function() { return f("handleAutoCountry") })
                        }, function() { return f("rejectAutoCountryPromise") }))
                    }
                }, {
                    key: "_j",
                    value: function() {
                        var n = this;
                        this._a12 = function() { n._v(n.a.value) && n._m2CountryChange() };
                        this.a.addEventListener("keyup", this._a12);
                        this._a13 = function() { setTimeout(n._a12) };
                        this.a.addEventListener("cut", this._a13);
                        this.a.addEventListener("paste", this._a13)
                    }
                }, { key: "_j2", value: function(n) { var t = this.a.getAttribute("maxlength"); return t && n.length > t ? n.substr(0, t) : n } }, {
                    key: "_l",
                    value: function() {
                        var n = this;
                        this._a8 = function() { n._l2() };
                        this.a.form && this.a.form.addEventListener("submit", this._a8);
                        this.a.addEventListener("blur", this._a8)
                    }
                }, {
                    key: "_l2",
                    value: function() {
                        if ("+" === this.a.value.charAt(0)) {
                            var n = this._m(this.a.value);
                            n && this.s.dialCode !== n || (this.a.value = "")
                        }
                    }
                }, { key: "_m", value: function(n) { return n.replace(/\D/g, "") } }, {
                    key: "_m2",
                    value: function(n) {
                        var t = document.createEvent("Event");
                        t.initEvent(n, !0, !0);
                        this.a.dispatchEvent(t)
                    }
                }, {
                    key: "_n",
                    value: function() {
                        this.m.classList.remove("iti__hide");
                        this.selectedFlag.setAttribute("aria-expanded", "true");
                        this._o();
                        this.b && (this._x(this.b, !1), this._3(this.b, !0));
                        this._p();
                        this.u.classList.add("iti__arrow--up");
                        this._m2("open:countrydropdown")
                    }
                }, { key: "_n2", value: function(n, t, i) { i && !n.classList.contains(t) ? n.classList.add(t) : !i && n.classList.contains(t) && n.classList.remove(t) } }, {
                    key: "_o",
                    value: function() {
                        var o = this,
                            e;
                        if (this.d.dropdownContainer && this.d.dropdownContainer.appendChild(this.dropdown), !this.g) {
                            var i = this.a.getBoundingClientRect(),
                                n = window.pageYOffset || document.documentElement.scrollTop,
                                t = i.top + n,
                                r = this.m.offsetHeight,
                                u = t + this.a.offsetHeight + r < n + window.innerHeight,
                                f = t - r > n;
                            (this._n2(this.m, "iti__country-list--dropup", !u && f), this.d.dropdownContainer) && (e = !u && f ? 0 : this.a.offsetHeight, this.dropdown.style.top = "".concat(t + e, "px"), this.dropdown.style.left = "".concat(i.left + document.body.scrollLeft, "px"), this._a4 = function() { return o._2() }, window.addEventListener("scroll", this._a4))
                        }
                    }
                }, { key: "_o2", value: function(n) { for (var t = n; t && t !== this.m && !t.classList.contains("iti__country");) t = t.parentNode; return t === this.m ? null : t } }, {
                    key: "_p",
                    value: function() {
                        var n = this,
                            r, t, i;
                        this._a0 = function(t) {
                            var i = n._o2(t.target);
                            i && n._x(i, !1)
                        };
                        this.m.addEventListener("mouseover", this._a0);
                        this._a1 = function(t) {
                            var i = n._o2(t.target);
                            i && n._1(i)
                        };
                        this.m.addEventListener("click", this._a1);
                        r = !0;
                        this._a2 = function() {
                            r || n._2();
                            r = !1
                        };
                        document.documentElement.addEventListener("click", this._a2);
                        t = "";
                        i = null;
                        this._a3 = function(r) { r.preventDefault(); "ArrowUp" === r.key || "Up" === r.key || "ArrowDown" === r.key || "Down" === r.key ? n._q(r.key) : "Enter" === r.key ? n._r() : "Escape" === r.key ? n._2() : /^[a-zA-ZĂ€-Ă¿Đ°-ÑĐ-Đ¯ ]$/.test(r.key) && (i && clearTimeout(i), t += r.key.toLowerCase(), n._s(t), i = setTimeout(function() { t = "" }, 1e3)) };
                        document.addEventListener("keydown", this._a3)
                    }
                }, {
                    key: "_q",
                    value: function(n) {
                        var t = "ArrowUp" === n || "Up" === n ? this.c.previousElementSibling : this.c.nextElementSibling;
                        t && (t.classList.contains("iti__divider") && (t = "ArrowUp" === n || "Up" === n ? t.previousElementSibling : t.nextElementSibling), this._x(t, !0))
                    }
                }, { key: "_r", value: function() { this.c && this._1(this.c) } }, {
                    key: "_s",
                    value: function(n) {
                        for (var i, t = 0; t < this.p.length; t++)
                            if (this._t(this.p[t].name, n)) {
                                i = this.m.querySelector("#iti-".concat(this.id, "__item-").concat(this.p[t].iso2));
                                this._x(i, !1);
                                this._3(i, !0);
                                break
                            }
                    }
                }, { key: "_t", value: function(n, t) { return n.substr(0, t.length).toLowerCase() === t } }, {
                    key: "_u",
                    value: function(n) {
                        var t = n;
                        if (this.d.formatOnDisplay && window.intlTelInputUtils && this.s) {
                            var r = !this.d.separateDialCode && (this.d.nationalMode || "+" !== t.charAt(0)),
                                i = intlTelInputUtils.numberFormat,
                                u = i.NATIONAL,
                                f = i.INTERNATIONAL,
                                e = r ? u : f;
                            t = intlTelInputUtils.formatNumber(t, this.s.iso2, e)
                        }
                        t = this._7(t);
                        this.a.value = t
                    }
                }, {
                    key: "_v",
                    value: function(n) {
                        var t = n,
                            f = this.s.dialCode,
                            h = "1" === f,
                            r, s, u;
                        t && this.d.nationalMode && h && "+" !== t.charAt(0) && ("1" !== t.charAt(0) && (t = "1".concat(t)), t = "+".concat(t));
                        this.d.separateDialCode && f && "+" !== t.charAt(0) && (t = "+".concat(f).concat(t));
                        var e = this._5(t, !0),
                            o = this._m(t),
                            i = null;
                        if (e) {
                            if (r = this.q[this._m(e)], s = -1 !== r.indexOf(this.s.iso2) && o.length <= e.length - 1, !("1" === f && this._w(o)) && !s)
                                for (u = 0; u < r.length; u++)
                                    if (r[u]) { i = r[u]; break }
                        } else "+" === t.charAt(0) && o.length ? i = "" : t && "+" !== t || (i = this.j);
                        return null !== i && this._z(i)
                    }
                }, {
                    key: "_w",
                    value: function(n) {
                        var t = this._m(n),
                            i;
                        return "1" === t.charAt(0) ? (i = t.substr(1, 3), -1 !== v.indexOf(i)) : !1
                    }
                }, {
                    key: "_x",
                    value: function(n, t) {
                        var i = this.c;
                        i && i.classList.remove("iti__highlight");
                        this.c = n;
                        this.c.classList.add("iti__highlight");
                        t && this.c.focus()
                    }
                }, {
                    key: "_y",
                    value: function(n, i, r) {
                        for (var f = i ? t : this.p, u = 0; u < f.length; u++)
                            if (f[u].iso2 === n) return f[u];
                        if (r) return null;
                        throw new Error("No country data for '".concat(n, "'"));
                    }
                }, {
                    key: "_z",
                    value: function(n) {
                        var e = this.s.iso2 ? this.s : {},
                            r, u, f, i, t;
                        return this.s = n ? this._y(n, !1, !1) : {}, this.s.iso2 && (this.j = this.s.iso2), this.l.setAttribute("class", "iti__flag iti__".concat(n)), r = n ? "".concat(this.s.name, ": +").concat(this.s.dialCode) : "Unknown", (this.selectedFlag.setAttribute("title", r), this.d.separateDialCode) && (u = this.s.dialCode ? "+".concat(this.s.dialCode) : "", this.t.innerHTML = u, f = this.selectedFlag.offsetWidth || this._z2(), this.a.style.paddingLeft = "".concat(f + 6, "px")), (this._0(), this.d.allowDropdown) && (i = this.b, (i && (i.classList.remove("iti__active"), i.setAttribute("aria-selected", "false")), n) && (t = this.m.querySelector("#iti-".concat(this.id, "__item-").concat(n, "-preferred")) || this.m.querySelector("#iti-".concat(this.id, "__item-").concat(n)), t.setAttribute("aria-selected", "true"), t.classList.add("iti__active"), this.b = t, this.selectedFlag.setAttribute("aria-activedescendant", t.getAttribute("id")))), e.iso2 !== n
                    }
                }, {
                    key: "_z2",
                    value: function() {
                        var n = this.a.parentNode.cloneNode(),
                            t, i, r;
                        return n.style.visibility = "hidden", document.body.appendChild(n), t = this.k.cloneNode(), n.appendChild(t), i = this.selectedFlag.cloneNode(!0), t.appendChild(i), r = i.offsetWidth, n.parentNode.removeChild(n), r
                    }
                }, {
                    key: "_0",
                    value: function() {
                        var i = "aggressive" === this.d.autoPlaceholder || !this.e && "polite" === this.d.autoPlaceholder,
                            t, n;
                        window.intlTelInputUtils && i && (t = intlTelInputUtils.numberType[this.d.placeholderNumberType], n = this.s.iso2 ? intlTelInputUtils.getExampleNumber(this.s.iso2, this.d.nationalMode, t) : "", n = this._7(n), "function" == typeof this.d.customPlaceholder && (n = this.d.customPlaceholder(n, this.s)), this.a.setAttribute("placeholder", n))
                    }
                }, {
                    key: "_1",
                    value: function(n) {
                        var i = this._z(n.getAttribute("data-country-code")),
                            t;
                        this._2();
                        this._4(n.getAttribute("data-dial-code"), !0);
                        this.a.focus();
                        t = this.a.value.length;
                        this.a.setSelectionRange(t, t);
                        i && this._m2CountryChange()
                    }
                }, {
                    key: "_2",
                    value: function() {
                        this.m.classList.add("iti__hide");
                        this.selectedFlag.setAttribute("aria-expanded", "false");
                        this.u.classList.remove("iti__arrow--up");
                        document.removeEventListener("keydown", this._a3);
                        document.documentElement.removeEventListener("click", this._a2);
                        this.m.removeEventListener("mouseover", this._a0);
                        this.m.removeEventListener("click", this._a1);
                        this.d.dropdownContainer && (this.g || window.removeEventListener("scroll", this._a4), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown));
                        this._m2("close:countrydropdown")
                    }
                }, {
                    key: "_3",
                    value: function(n, t) {
                        var i = this.m,
                            s = window.pageYOffset || document.documentElement.scrollTop,
                            u = i.offsetHeight,
                            f = i.getBoundingClientRect().top + s,
                            l = f + u,
                            e = n.offsetHeight,
                            o = n.getBoundingClientRect().top + s,
                            a = o + e,
                            r = o - f + i.scrollTop,
                            h = u / 2 - e / 2,
                            c;
                        o < f ? (t && (r -= h), i.scrollTop = r) : a > l && (t && (r += h), c = u - e, i.scrollTop = r - c)
                    }
                }, {
                    key: "_4",
                    value: function(n, t) {
                        var r, i = this.a.value,
                            u = "+".concat(n),
                            f;
                        if ("+" === i.charAt(0)) f = this._5(i), r = f ? i.replace(f, u) : u;
                        else {
                            if (this.d.nationalMode || this.d.separateDialCode) return;
                            if (i) r = u + i;
                            else {
                                if (!t && this.d.autoHideDialCode) return;
                                r = u
                            }
                        }
                        this.a.value = r
                    }
                }, {
                    key: "_5",
                    value: function(n, t) {
                        var u = "",
                            r, i, f;
                        if ("+" === n.charAt(0))
                            for (r = "", i = 0; i < n.length; i++)
                                if (f = n.charAt(i), !isNaN(parseInt(f, 10))) {
                                    if (r += f, t) this.q[r] && (u = n.substr(0, i + 1));
                                    else if (this.dialCodes[r]) { u = n.substr(0, i + 1); break }
                                    if (r.length === this.countryCodeMaxLen) break
                                }
                        return u
                    }
                }, {
                    key: "_6",
                    value: function() {
                        var n = this.a.value.trim(),
                            t = this.s.dialCode,
                            i = this._m(n);
                        return (this.d.separateDialCode && "+" !== n.charAt(0) && t && i ? "+".concat(t) : "") + n
                    }
                }, {
                    key: "_7",
                    value: function(n) {
                        var i = n,
                            t, r;
                        return this.d.separateDialCode && (t = this._5(i), t && (t = "+".concat(this.s.dialCode), r = " " === i[t.length] || "-" === i[t.length] ? t.length + 1 : t.length, i = i.substr(r))), this._j2(i)
                    }
                }, { key: "_m2CountryChange", value: function() { this._m2("countrychange") } }, { key: "handleAutoCountry", value: function() { "auto" === this.d.initialCountry && (this.j = window.intlTelInputGlobals.autoCountry, this.a.value || this.setCountry(this.j), this.h()) } }, {
                    key: "handleUtils",
                    value: function() {
                        window.intlTelInputUtils && (this.a.value && this._u(this.a.value), this._0());
                        this.i0()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t = this.a.form,
                            i, n;
                        this.d.allowDropdown && (this._2(), this.selectedFlag.removeEventListener("click", this._a10), this.k.removeEventListener("keydown", this._a11), i = this._i1(), i && i.removeEventListener("click", this._a9));
                        this.hiddenInput && t && t.removeEventListener("submit", this._a14);
                        this.d.autoHideDialCode && (t && t.removeEventListener("submit", this._a8), this.a.removeEventListener("blur", this._a8));
                        this.a.removeEventListener("keyup", this._a12);
                        this.a.removeEventListener("cut", this._a13);
                        this.a.removeEventListener("paste", this._a13);
                        this.a.removeAttribute("data-intl-tel-input-id");
                        n = this.a.parentNode;
                        n.parentNode.insertBefore(this.a, n);
                        n.parentNode.removeChild(n);
                        delete window.intlTelInputGlobals.instances[this.id]
                    }
                }, { key: "getExtension", value: function() { return window.intlTelInputUtils ? intlTelInputUtils.getExtension(this._6(), this.s.iso2) : "" } }, { key: "getNumber", value: function(n) { if (window.intlTelInputUtils) { var t = this.s.iso2; return intlTelInputUtils.formatNumber(this._6(), t, n) } return "" } }, { key: "getNumberType", value: function() { return window.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._6(), this.s.iso2) : -99 } }, { key: "getSelectedCountryData", value: function() { return this.s } }, { key: "getValidationError", value: function() { if (window.intlTelInputUtils) { var n = this.s.iso2; return intlTelInputUtils.getValidationError(this._6(), n) } return -99 } }, {
                    key: "isValidNumber",
                    value: function() {
                        var n = this._6().trim(),
                            t = this.d.nationalMode ? this.s.iso2 : "";
                        return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(n, t) : null
                    }
                }, {
                    key: "setCountry",
                    value: function(n) {
                        var t = n.toLowerCase();
                        this.l.classList.contains("iti__".concat(t)) || (this._z(t), this._4(this.s.dialCode, !1), this._m2CountryChange())
                    }
                }, {
                    key: "setNumber",
                    value: function(n) {
                        var t = this._v(n);
                        this._u(n);
                        t && this._m2CountryChange()
                    }
                }, {
                    key: "setPlaceholderNumberType",
                    value: function(n) {
                        this.d.placeholderNumberType = n;
                        this._0()
                    }
                }]), i
            }();
        return r.getCountryData = function() { return t }, o = function(n, t, i) {
                var r = document.createElement("script");
                r.onload = function() {
                    f("handleUtils");
                    t && t()
                };
                r.onerror = function() {
                    f("rejectUtilsScriptPromise");
                    i && i()
                };
                r.className = "iti-load-utils";
                r.async = !0;
                r.src = n;
                document.body.appendChild(r)
            }, r.loadUtils = function(n) {
                if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
                    if (window.intlTelInputGlobals.startedLoadingUtilsScript = !0, "undefined" != typeof Promise) return new Promise(function(t, i) { return o(n, t, i) });
                    o(n)
                }
                return null
            }, r.defaults = h, r.version = "17.0.12",
            function(n, t) { var i = new y(n, t); return i._init(), n.setAttribute("data-intl-tel-input-id", i.id), window.intlTelInputGlobals.instances[i.id] = i, i }
    }()
});
imagePath = "/Themes/Portal/Default/Images/";
res_container = "";
$(function() {
    $("input[type='text'][name='tb_domain']").keypress(function(n) { if (n.keyCode == 13) return checkDomain() });
    $(".check-domain label, .check-domain-result label").hide();
    $(".check-domain label.common, .check-domain-result label.common").show();
    $(".domain-tabs a").click(function() {
        $(".domain-tabs a").removeAttr("class");
        $(this).attr("class", "current");
        var n = $(this).attr("type");
        $(".check-domain label, .check-domain-result label").hide();
        $(".check-domain label." + n + ", .check-domain-result label." + n).show()
    });
    var n = "";
    $(".check-domain input[type='checkbox']").each(function() {
        var t = $(this).parent().attr("class");
        n = n + '<label class="' + t + '"><input type="checkbox" name="cb_ext_result_domain" value="' + $(this).val() + '" /><span>' + $(this).val() + "<\/span><\/label>"
    });
    n = n + '<br class="clear" />';
    $("#res_container").html(n)
});
addLoadEvent(function() {
    var n = document.querySelectorAll('[data-toggle="sapo-modal-register"]');
    n.forEach(function(n) {
        var i = document.getElementsByTagName("body")[0],
            t = n.dataset.modal,
            r;
        n.addEventListener("click", function() {
            $("body").css("overflow", "");
            document.getElementById(t).style.display = "block";
            document.getElementById(t).classList.add("show");
            setTimeout(function() { i.classList.add("sapo-modal-register-open") }, 200)
        });
        r = document.getElementById(t).querySelectorAll('[data-dismiss="sapo-modal-register"]');
        r.forEach(function(n) {
            n.addEventListener("click", function() {
                document.getElementById(modalId).style.display = "none";
                document.getElementById(modalId).classList.remove("show");
                setTimeout(function() { i.classList.remove("sapo-modal-register-open") }, 200)
            })
        })
    })
});
preservedScriptAttributes = { type: !0, src: !0, nonce: !0, noModule: !0 };
addLoadEvent(function() {
    var s = getCookie("aff_id"),
        i = getParameterByName("aff_id"),
        n = getParameterByName("aff_tracking_id"),
        r, u, f, e, o, h, c, t;
    s == null || s == "" ? (i !== null && i !== "" && setCookie("aff_id", i, 30), n !== null && n !== "" && setCookie("aff_tracking_id", n, 30)) : i == s && n !== null && n !== "" && setCookie("aff_tracking_id", n, 30);
    r = getParameterByName("kd");
    r !== null && r !== "" && setCookie("kd", r, 30);
    u = getParameterByName("sales_team");
    u !== null && u !== "" && setCookie("sales_team", u, 30);
    f = getParameterByName("ref");
    f !== null && f !== "" && setCookie("ref", f, 30);
    e = getParameterByName("campaign");
    e !== null && e !== "" && setCookie("campaign", e, 30);
    document.referrer && document.referrer != "" && document.referrer.indexOf("www.sapo.vn") == -1 && setCookie("referral", document.referrer, 30);
    o = getParameterByName("aff_partner_id");
    o !== null && o !== "" && setCookie("partner", o, 30);
    h = getCookie("landing_page");
    (h == null || h == "") && setCookie("landing_page", document.location.href, .0115);
    c = getCookie("start_time");
    (c == null || c == "") && setCookie("start_time", getDateTime(), .0115);
    t = getCookie("pageview");
    t == null || t == "" || t == "NaN" ? setCookie("pageview", 1, .0115) : setCookie("pageview", parseInt(t) + 1, .0115)
});