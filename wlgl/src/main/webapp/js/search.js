	window.errorBuffer = window.errorBuffer || [];

			function beaconCssError(e) {
				window.errorBuffer.push({
					error: e ? e : new Error('CSS failed to load.'),
					context: {
						isMobileNetork: document.cookie.replace(/(?:(?:^|.*;\s*)h2_isMobile\s*\=\s*([^;]*).*$)|^.*$/, "$1") === '' ? false : true
					}
				});
			}
			window.cutsTheMustard = (typeof Function.prototype.bind !== 'undefined');
			if(window.cutsTheMustard) {
				document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/, 'js').replace(/\bcore\b/, 'enhanced');
			}
				function GetCookie(e) {
				var n = document.cookie.indexOf(e + "="),
					t = n + e.length + 1,
					o = document.cookie.indexOf(";", t);
				return n || e === document.cookie.substring(0, e.length) ? n === -1 ? null : (o === -1 && (o = document.cookie.length), decodeURIComponent(document.cookie.substring(t, o))) : null
			}

			function SetCookie(e, n, t, o, i) {
				var a = SetCookie.arguments,
					d = SetCookie.arguments.length,
					r = new Date,
					s = d > 5 && a[5];
				o = d > 3 ? a[3] : null, i = d > 4 ? a[4] : null, t = null === t || "" === t ? 5184e7 : 1e3 * t, r.setTime(r.getTime() + t), document.cookie = e + "=" + escape(n) + (null === r ? "" : "; expires=" + r.toGMTString()) + (null === o ? "/" : "; path=" + o) + (null === i ? "" : "; domain=" + i) + (s === !0 ? "; secure" : "")
			}

			function DeleteCookie(e) {
				var n = new Date,
					t = GetCookie(e);
				n.setTime(n.getTime() - 1), document.cookie = e + "=" + t + "; expires=" + n.toGMTString()
			}

			function paravalue(e, n) { var t, o; return e.indexOf(n + "=") > 1 ? (t = e.indexOf(n) + n.length + 1, o = e.substring(t, e.length), o = o.replace(/[\&\#].*/g, "")) : o = "", o }

			function trackerNew() {
				var e, n, t, o, i, a, d, r, s, c, m, l = window.location.href,
					u = "",
					g = "",
					p = GetCookie("USER_NAME") || "",
					h = GetCookie("USER_ID") || "",
					f = GetCookie("ccode") || "",
					y = navigator.userAgent || navigator.vendor || "",
					v = 0;
				w > 0 && (v = w > 1220 ? "XL: above 1220" : w > 980 ? "Large: 981-1220" : w > 690 ? "Medium: 691-981" : w > 490 ? "Small: 491-690" : "Phone: under 491", ga("set", "dimension18", v)), m = /ipad/i.test(y) ? "iPad" : /OS [0-9]+\_/i.test(y) && /iphone|ipod/i.test(y) ? "iPhone" : /android/i.test(y) ? "Android" : isTouchDevice() === !0 ? "Other Touch Device" : "Desktop", m = "Page by " + m, ga("set", "contentGroup4", m), u = paravalue(l, "ccode"), l.indexOf("isappinstalled") > 0 && l.indexOf("code") < 0 ? (n = "marketing", u = "2G178002") : l.indexOf("#s=d") > 0 ? (n = "DailyEmail", u = "1D110215") : l.indexOf("#s=n") > 0 ? (n = "DailyEmail", u = "1D130201") : l.indexOf("#s=o") > 0 ? (n = "DailyEmail", u = "1D130202") : l.indexOf("#s=p") > 0 ? (n = "PMEmail", u = "1P110215") : l.indexOf("#s=w") > 0 ? (n = "WeeklyEmail", u = "1W110215") : l.indexOf("?wt") > 0 ? (n = "Marketing", u = "WeChatNewsQuiz") : "1D110215" === u ? n = "DailyEmail" : "1P110215" === u ? n = "PMEmail" : "1W110215" === u ? n = "WeeklyEmail" : "1R110215" === u ? n = "RSS" : "1Z120420" === u ? n = "Zacker" : l.indexOf("utm_campaign") >= 0 ? (u = paravalue(l, "utm_campaign"), n = paravalue(l, "utm_source")) : "" === u ? (u = GetCookie("ccode") || "", n = "Other") : n = "Other";
				try { "" !== u && u !== f && (SetCookie("ccode", u, 864e4, "/", ".ftchinese.com"), SetCookie("ccode", u, 864e4, "/")) } catch(e) {} o = "marketing", i = "campaign", /micromessenger/i.test(y) ? (o = "WeChat", i = "Social") : n.indexOf("Email") >= 0 ? (o = "EmailNewsletter", i = "referral") : n.indexOf("RSS") >= 0 ? (o = "RSS", i = "referral") : n.indexOf("Zacker") >= 0 && (o = "Zacker", i = "referral");
				try { ga("set", "AllowAnchor", !0), "" !== u && l.indexOf("utm_campaign") < 0 && (ga("set", "campaignName", u), ga("set", "campaignSource", o), ga("set", "campaignMedium", i), l = window.location.href) } catch(e) {}
				if("string" == typeof window.interactiveType) try { ga("set", "contentGroup1", window.interactiveType) } catch(e) {} void 0 !== window.FTAdchID && null !== window.FTAdchID && "" !== window.FTAdchID && ga("set", "dimension1", window.FTAdchID), t = "" === p ? "visitor" : "member", "" !== h && ga("set", "dimension14", h), ga("set", "dimension2", t), ga("set", "dimension13", n);
				try { e = window.gKeyTag, e = e.replace(/白底|靠右|单页|插图|透明|高清|置顶|沉底|资料|突发/g, "").replace(/,+/g, ",") } catch(e) {} g = "", r = "", l.indexOf("story") >= 0 ? g = "Story" : l.indexOf("interactive") >= 0 ? (g = "Interactive", r = "product") : l.indexOf("photo") >= 0 ? (g = "Photo", r = "product") : l.indexOf("video") >= 0 ? (g = "Video", r = "video") : g = l.indexOf("search") >= 0 ? "Search" : l.indexOf("channel") >= 0 ? "Channel" : l.indexOf("comment") >= 0 ? "coment" : l.indexOf("column") >= 0 ? "Column" : l.indexOf("tag") >= 0 ? "Tag" : l.indexOf("topic") >= 0 ? "Topic" : "/" === l || "/?refresh=" === l || l.indexOf("index.php") >= 0 ? "Home" : "Other", ga("set", "dimension4", g), void 0 === window.ftcteam || null === window.ftcteam || "" === window.ftcteam ? "" !== r && ga("set", "dimension5", r) : ga("set", "dimension5", window.ftcteam), void 0 !== window.gauthor && null !== window.gauthor && "" !== window.gauthor && ga("set", "dimension6", window.gauthor), void 0 !== window.storyGenre && null !== window.storyGenre && "" !== window.storyGenre && ga("set", "dimension8", window.storyGenre), void 0 !== window.storyArea && null !== window.storyArea && "" !== window.storyArea && ga("set", "dimension9", window.storyArea), void 0 !== window.storyIndustry && null !== window.storyIndustry && "" !== window.storyIndustry && ga("set", "dimension10", window.storyIndustry), void 0 !== window.mainTopic && null !== window.mainTopic && "" !== window.mainTopic && ga("set", "dimension11", window.mainTopic), void 0 !== window.subTopic && null !== window.subTopic && "" !== window.subTopic && ga("set", "dimension12", window.subTopic), setTimeout(function() {
					if("yes" === window.isBlocked || "yes" === window.bBlocked ? ga("set", "dimension16", "yes") : "no" === window.isBlocked && ga("set", "dimension16", "no"), void 0 !== window.bpage && 0 !== window.bpage && null !== window.bpage ? (a = l, a = void 0 !== window.virtualPage ? window.virtualPage : a.replace(/^.*\/story/g, "story"), void 0 !== window.metaInfo && (a = a + "?" + window.metaInfo), a = "/barrier/" + window.bpage + "/" + a, ga("send", "pageview", a)) : void 0 !== window.virtualPage ? (d = l, d = d.replace(/^.*\/(story|video|interactive)\/[0-9]+/g, "").replace(/^.*\.com[\/]*/g, "").replace(/search\/.*$/g, ""), void 0 !== window.metaInfo ? d = /\?.*\#/i.test(d) ? d.replace(/#/g, "&" + window.metaInfo + "#") : d.indexOf("?") >= 0 ? d + "&" + window.metaInfo : d.indexOf("#") >= 0 ? d.replace(/#/g, "?" + window.metaInfo + "#") : d + "?" + window.metaInfo : /\?/i.test(d) && (d = d.replace(/\?/g, "&")), void 0 === window.gAutoStart && ga("send", "pageview", window.virtualPage + d)) : void 0 === window.gAutoStart && ga("send", "pageview"), "string" == typeof window.FTStoryid && "string" == typeof e && e.indexOf(",") >= 0)
						for(c = e.split(","), s = 0; s < c.length; s++) ga("send", "event", "Story Tag", c[s], window.FTStoryid, { nonInteraction: 1 })
				}, 300)
			}

			function isTouchDevice() { var e = document.createElement("div"); return e.setAttribute("ongesturestart", "return;"), "function" == typeof e.ongesturestart }

			function showOverlay(e) { document.getElementById(e).className = "overlay-container on" }

			function closeOverlay(e) { void 0 !== e ? document.getElementById(e).className = "overlay-container" : (document.getElementById("pop-ad").style.display = "none", document.getElementById("pop-ad").innerHTML = "") }

			function adReachability() {
				var e, n = { dcR: "_dc", mmR: "_mm", szR: "_sz", amR: "_am" },
					t = "";
				for(var o in n) n.hasOwnProperty(o) && (e = GetCookie(o), "reachable" === e ? t += "&" + n[o] + "=1" : null === e && (t += "&" + n[o] + "=2"));
				return t
			}

			function trackAd(e, n, t) { var o, i; if("function" == typeof window.ga) { o = (new Date).getTime(), i = o - window.adStartTime, ga("send", "event", "Third Party Ad", e + " - all", n, { nonInteraction: 1 }), ga("send", "timing", "Third Party Ad", e, i, n), void 0 !== t && "" !== t && ga("send", "event", "Third Party Ad", e + " - " + t, n, { nonInteraction: 1 }), "number" == typeof window.startTime && (o = (new Date).getTime(), i = o - window.startTime, ga("send", "timing", "Third Party Ad", e + " VS Page Start", i, n)); try {} catch(e) {} } }

			function checkAd(e, n) {
				var t, o, i, a = !1,
					d = 0,
					r = 0,
					s = 0,
					c = 0,
					m = "",
					l = n.getElementsByTagName("div")[0],
					u = "",
					w = "",
					g = 1800;
				e.checking === !0 && (m = e.adClient + " " + e.adWidth + "x" + e.adHeight + " " + e.adNote, void 0 !== e.thirdPartyVendor ? u = e.thirdPartyVendor : /doubleclick|adsafeprotected\.com\/.*\/dc\//i.test(e.fallBackImg) && (u = "dcR"), 0 === e.checkingTime ? ("" !== u && (w = GetCookie(u) || "unknown", e.reachabilityStatus = w), trackAd("Impression Track Start", m, w)) : (void 0 !== e.reachabilityStatus && (w = e.reachabilityStatus), void 0 !== e.thirdPartyVendor && (u = e.thirdPartyVendor)), null === n ? a = !1 : e.checkDom === !0 ? (d = n.getElementsByTagName("img").length, r = n.getElementsByTagName("object").length, s = n.getElementsByTagName("iframe").length, c = n.getElementsByTagName("video").length, a = d > 0 || s > 0 || r > 0 || c > 0) : a = !0, a === !0 ? (e.checking = !1, trackAd("Impression Track Success", m, w), SetCookie(u, "reachable", g, "/")) : e.checkingTime < e.checkingTimeMax ? (e.checkingTime += 1, setTimeout(function() { checkAd(e, n) }, 1e3)) : (trackAd("Impression Track Fail Main", m, w), SetCookie(u, "unreachable", g, "/"), void 0 !== e.fallBackImg && "" !== e.fallBackImg && (o = /[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/gi, i = new RegExp(o), e.fallBackImg.match(i) ? (t = new Image, t.src = e.fallBackImg, t.onload = function() { l.innerHTML = '<img src="' + t.src + '">', trackAd("Impression Track Success", m, w), trackAd("Impression Track Fallback Image", m, w) }, t.onerror = function() { trackAd("Impression Track Fail Fallback", m, w) }) : (trackAd("Impression Track Fail Fallback Invalid", m, w), ga("send", "event", "FallBack Image Error", m, e.fallBackImg, { nonInteraction: 1 })))))
			}

			function checkAdLoad() { var e, n, t, o, i, a, d, r; "5" === window.adUnitTrack ? e = document.body : document.getElementById(window.adUnitIds[window.adUnitTrack]) && (e = document.getElementById(window.adUnitIds[window.adUnitTrack])), "object" == typeof e ? (n = e.getElementsByTagName("a").length || 0, t = e.getElementsByTagName("video").length || 0, o = e.getElementsByTagName("iframe").length || 0, i = e.getElementsByTagName("img").length || 0, a = e.getElementsByTagName("div").length || 0, d = e.getElementsByTagName("object").length || 0, r = n + t + o + i + a + d, r > 0 ? trackAd("Loaded Something", window.adPositionTrack + " " + window.adIdTrack) : setTimeout(function() { checkAdLoad() }, 1e3)) : trackAd("ID " + window.adUnitIds[window.adUnitTrack] + " not found", window.adPositionTrack + " " + window.adIdTrack); try {} catch(e) {} }

			function adLoadStatus(e, n) { ga("send", "event", "Ad Load", e, n, { nonInteraction: 1 }) }

			function setDolphinSlot(e) {
				var n, t = window.dolRand ? "&slot=" + window.dolRand : "",
					o = GetCookie(e);
				if(!o) return t;
				window.cArray = o.split(";");
				for(n in window.cArray) window.cArray.hasOwnProperty(n) && (window.cArray[n] = window.cArray[n].replace("|", "="), t += "&_" + window.cArray[n]);
				return t
			}

			function initAds() { uaString = navigator.userAgent || navigator.vendor || "", isWeChat = /micromessenger/i.test(uaString), w1 = Math.max(document.documentElement.clientWidth, window.innerWidth || 0), w2 = window.screen.availWidth || 0, w2 > 0 && w1 > w2 && (w1 = w2); for(var e in adPositions) adPositions.hasOwnProperty(e) && (adCount[e] = 0, adMax[e] = adPositions[e].length) }

			function sendEvent(e, n, t, o) { gaLoaded === !0 ? ga("send", "event", e, n, t, o) : eventsToSend.push({ ec: e, ea: n, el: t, ei: o }) }

			function clearEvents() {
				for(var e = eventsToSend.length, n = 0; n < e; n++) ga("send", "event", eventsToSend[n].ec, eventsToSend[n].ea, eventsToSend[n].el, eventsToSend[n].ei);
				eventsToSend = [], gaLoaded = !0
			}

			function writeAd(e, n) {
				var t, o, i, a, d, r, s, c = adchID,
					m = "",
					l = "",
					u = "",
					w = !1;
				/iPad/i.test(uaString) && /mpu/.test(e) ? (c = "2021", w = !0, e = "mpu" === e ? "ipadhomempu" : "ipadstorympu") : /OS [0-9]+\_/i.test(uaString) && (/iPhone/i.test(uaString) || /iPod/i.test(uaString)) ? (c = "2022", w = !0) : (/Android|micromessenger/i.test(uaString) || w1 <= 490) && (c = "2023", w = !0);
				var g = window.location.href.replace(/^.*adchannelID=([0-9]{4}).*$/g, "$1"),
					p = !1;
				if(/^[0-9]{4}$/.test(g) && (c = g, p = !0), "undefined" != typeof window.FTadchannelID && window.FTadchannelID && !p && (c = window.FTadchannelID, p = !0), ("2022" === c || "2023" === c || p) && w && (/utm\_campaign=2[MU]16/i.test(location.href) ? "fullpage" === e ? e = "phonefullpage" : e.indexOf("banner") < 0 ? (e = "phonehomempuBonus", SetCookie("fs0", 1, 0, "/")) : e = "phonebanner" : e.indexOf("banner") >= 0 ? e = "phonebanner" : "mpu" === e || "homempu" === e ? e = "phonehomempu" : "tagmpu" === e || "taginlinempu" === e ? e = "phonetagmpu" : "storybanner" === e ? e = "phonestorybanner" : "storympu" === e ? e = "phonestorympu" : "storympuVW" === e ? e = "phonestorympuVW" : "homempuVW" === e ? e = "phonehomempuVW" : "fullpage" === e && (e = "phonefullpage"), window.sponsorMobile === !0 && ("phonebanner" === e ? e = "phonestorybannersponsor" : "phonestorympu" === e && (e = "2022" === c ? "phonestoryiphonempu" : "phonestoryandroidmpu"), c = adchID)), "luxury" === window.pageTheme ? m = "&bg=e0cdac" : "ebook" === window.pageTheme && (m = "&bg=777777"), t = /banner/i.test(e) && 0 === adCount[e] && /^(1200|1300|1500)$/i.test(c) ? "t" : "a", o = adCount[e], void 0 !== o && o < adMax[e])
					if(i = adPositions[e][o], a = "/m/marketing/" + t + ".html?v=20161009143608" + m + "#adid=" + c + i + "&pid=" + e + adCount[e], /mpu/.test(e) ? (d = "300", r = "250") : /phone.*banner/.test(e) ? (d = "100%", r = "50") : /phonefullpage/.test(e) ? (d = "0", r = "0") : (d = "969", r = "90"), isWeChat === !0) {
						slotStr = "";
						var h = c + i,
							f = "";
						window.adType = e, l = '<div class="banner-iframe" style="width: 100%; " data-adch="' + c + '" data-adPosition="' + i + '"><scr', l += 'ipt src="http://dolphin.ftimg.net/s?z=ft&c=' + h + slotStr + f + '&_fallback=0" charset="gbk">', l += "</scr", l += "ipt></div>"
					} else s = '<iframe class="banner-iframe" data-adch="' + c + '" data-adPosition="' + i + '" id="' + e + adCount[e] + '" width="' + d + '" height="' + r + '" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" src="' + a + '" data-src="' + a + '" data-ad-type="' + e + '" data-ad-count=' + adCount[e] + "></iframe>";
				else {
					a = "", s = "";
					var y = document.querySelectorAll(".bn-ph"),
						v = document.querySelectorAll(".mpu-container, #story_main_mpu");
					/banner/.test(e) && y && y[o] ? y[o].style.display = "none" : /mpu/.test(e) && v && v[o] && (v[o].style.display = "none")
				}
				if("string" == typeof window.gDebugAd && (u = window.gDebugAd.replace("adcode_for_debug", c + i)), adCount[e] = adCount[e] + 1, n === !0) return a + u;
				if(isWeChat === !0) { try { "string" == typeof i && sendEvent("Ad Impression", c, i, { nonInteraction: 1 }) } catch(e) {} return l + u }
				return s + u
			}

			function reloadBanners() {
				var e, n = 0;
				if(0 === bannerIframeContainers.length)
					for(e = document.querySelectorAll(".banner-iframe"), n = 0; n < e.length; n++) bannerIframeContainers[n] = e[n].parentNode;
				for(adCount = {}, initAds(), n = 0; n < bannerIframeContainers.length; n++) {
					var t, o, i, a = bannerIframeContainers[n].querySelector(".banner-iframe");
					null !== a ? (t = a.getAttribute("data-src"), o = a.getAttribute("data-ad-type"), i = a.getAttribute("data-ad-count")) : (t = "", o = "", i = 0);
					var d = writeAd(o, !0);
					t !== d && (bannerIframeContainers[n].innerHTML = writeAd(o))
				}
			}

			function checkB() {
				var e = document.createElement("div");
				e.innerHTML = "&nbsp;", e.className = "adsbox", document.body.appendChild(e), window.setTimeout(function() { isBlocked = 0 === e.offsetHeight ? "yes" : "no", e.remove() }, 100)
			}
			var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
				username = GetCookie("USER_NAME") || "",
				userId = GetCookie("USER_ID") || "",
				ccodeCookie = GetCookie("ccode") || "",
				user_name = GetCookie("USER_NAME");
			null !== user_name && (document.documentElement.className += " is-member");
			var adPositions = { banner: ["0001", "0006", "0007", "0008"], tagbanner: ["0010"], mpu: ["0003", "0004", "0005"], tagmpu: ["0012", "0013"], storympu: ["0005", "0003", "0004", "0003"], ipadhomempu: ["0003", "0004"], ipadstorympu: ["0005"], phonebanner: ["0101", "0114"], phonempu: ["0003"], phonestorybanner: ["0101"], phonestorybannersponsor: ["0109", "0109"], phonestorympu: ["0004"], phonestoryiphonempu: ["0110"], phonestoryandroidmpu: ["0111"], phonefullpage: ["0107", "9951", "9952", "9953", "9954"], phonestorympuVW: ["0119"], phonehomempu: ["0003"], phonehomempuBonus: ["0003", "0004", "0005", "0006", "0007", "0008", "9901", "9902", "9903", "9904", "9905", "9906", "9907", "9908", "9909", "9910", "9911", "9912", "9913", "9914", "9915", "9916", "9917", "9918"], phonetagmpu: ["0119", "0004", "0120"] };
			window.dolRand = Math.round(1e6 * Math.random());
			var slotStr = setDolphinSlot("USER_KV"),
				adCount = {},
				adMax = {},
				uaString, w1, w2, isWeChat, gaLoaded = !1,
				eventsToSend = [],
				bannerIframeContainers = [],
				isBlocked = "unknown";
			initAds(), isWeChat === !0 && (document.documentElement.className += " is-wechat");
			if(typeof startTime === "undefined") {
				var startTime = new Date().getTime();
			}
			var adchID = '1000';
			var adchIDNew = window.location.href.replace(/^.*adchannelID=([0-9]{4}).*$/g, '$1');
			if(/^[0-9]{4}$/.test(adchIDNew)) {
				adchID = adchIDNew;
			}
		</script>
		<!-- Google Analytics -->
		<script>
			(function(i, s, o, g, r, a, m) {
				i['GoogleAnalyticsObject'] = r;
				i[r] = i[r] || function() {
					(i[r].q = i[r].q || []).push(arguments)
				}, i[r].l = 1 * new Date();
				a = s.createElement(o),
					m = s.getElementsByTagName(o)[0];
				a.async = 1;
				a.src = g;
				m.parentNode.insertBefore(a, m);
				a.onload = function() { if(typeof clearEvents === 'function') { clearEvents() } }
			})(window, document, 'script', '/index.php/jsapi/analytics', 'ga');
			ga('create', 'UA-1608715-1');
			ga('require', 'displayfeatures');
			if(window.gAutoStart === undefined) {
				try {
					trackerNew();
				} catch(err) {
					ga('send', 'pageview');
				}
			}
			function linkClickGa(e) {
				ga('send', 'event', 'AdClick', $(e).attr("href"), "An");
			}
			(function(i, s, o, g, r, a, m) {
				i['FtcAnalyticsObject'] = r;
				i[r] = i[r] || function() {
					(i[r].q = i[r].q || []).push(arguments)
				}, i[r].l = 1 * new Date();
				a = s.createElement(o), m = s.getElementsByTagName(o)[0];
				a.async = 1;
				a.src = g;
				m.parentNode.insertBefore(a, m)
			})(window, document, 'script', '/log/analytics.js', 'fa');
			fa('create', 'UA-XXXX-Y', { 'alwaysSendReferrer': true }); // Replace with your property ID.
			if(window.gAutoStart === undefined) { fa('send', 'pageview'); }
			if(window.gAutoStart === undefined) {
				(function(d, s, u, j, x) {
					j = d.createElement(s),
						x = d.getElementsByTagName(s)[0];
					j.async = true;
					j.src = u;
					x.parentNode.insertBefore(j, x)
				})(document, 'script', 'http://static.ftchinese.com/js/log.js?v=7&20160318');
			}
				var gUaOfPage = navigator.userAgent || navigator.vendor || "";
			if(/micromessenger/i.test(gUaOfPage)) {
				document.write('<div class="hide"><img src="picture/friend-share-icon.jpg" width="0" height="0" /></div>');
			}
			var gPageId = 'home';
			var thisday1 = new Date();
				var todaydate1 = thisday1.getFullYear() + "-" + (thisday1.getMonth() + 1) + "-" + thisday1.getDate();
				var fullsc = GetCookie("rb2");
				var loadFullAtEnd = false;
				var fullPageAdchId = '10000014';
				var testFullPageAd = false;
				if(window.adchID !== '1000' && window.adchID !== undefined && /[0-9]{4}/.test(window.adchID)) {
					fullPageAdchId = window.adchID + '0014';
					testFullPageAd = true;
				}
				if((fullsc == null && w > 490 && isTouchDevice() === false && (todaydate1 == "2017-1-25" || todaydate1 == "2017-1-19" || todaydate1 == "2017-1-28" || todaydate1 == "2017-1-23" || todaydate1 == "2017-1-18")) || testFullPageAd === true) {
					document.write('<scr' + 'ipt type="text/jav' + 'ascript" src="http://dolphin.ftimg.net/s?z=ft&amp;c=' + fullPageAdchId + '&amp;slot=645072137&amp;_sex=101&amp;_trip=1&amp;_lux=1&amp;_dc=2&amp;_mm=2&amp;_sz=2&amp;_am=2" charset="gbk"></scr' + 'ipt>');
				} else if(fullsc == null) {
					loadFullAtEnd = true;
				}
				setTimeout(function() {
					stickyBottomPrepare();
					stickyAdsPrepare();
				}, 9000);