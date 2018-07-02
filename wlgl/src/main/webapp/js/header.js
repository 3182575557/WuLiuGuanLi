	"use strict";

	function Delegate(e) { this.listenerMap = [{}, {}], e && this.root(e), this.handle = Delegate.prototype.handle.bind(this) }

	function matchesTag(e, t) { return e.toLowerCase() === t.tagName.toLowerCase() }

	function matchesRoot(e, t) { return this.rootElement === window ? t === document : this.rootElement === t }

	function matchesId(e, t) { return e === t.id }

	function Toggler(e) {
		function t() { a.isOpen = !a.isOpen, a.isOpen ? (a.button.setAttribute("aria-expanded", "true"), a.target.setAttribute("aria-hidden", "false")) : (a.button.setAttribute("aria-expanded", "false"), a.target.setAttribute("aria-hidden", "true")) }

		function o(e) { a.isOpen && 27 === e.keyCode && t() }

		function i(o) { a.isOpen && !e.contains(o.target) && t() }

		function n() { e || (e = document.body); var n = e.querySelector(s),
				l = e.querySelector(r);
			n && (a.rootEl = e, a.button = n, a.target = l, a.isOpen = !1, a.button.addEventListener("click", t), document.body.addEventListener("click", i), document.body.addEventListener("keydown", o)) } var a = this,
			s = "[data-o-toggler-button]",
			r = "[data-o-toggler-target]";
		n() }

	function Nav(e) {
		function t() { e || (e = document.body); var t = new Delegate(e);
			s.delegate = t, s.rootEl = e }

		function o() { var e = ".nav-section-head.mobile",
				t = s.rootEl.querySelectorAll(e);
			s.delegate.on("click", e, function(e, o) { for(var i = 0; i < t.length; i++) t[i].setAttribute("aria-selected", "false");
				o.setAttribute("aria-selected", "true") }) }

		function i() { var e = s.rootEl.querySelector("[data-o-nav-togglable]"),
				t = a.navClassName + "--open";
			e && e.addEventListener("click", function() { document.documentElement.classList.toggle(t), document.body.classList.toggle(t) }) }

		function n() { var e = "[data-o-nav-togglable]";
			s.delegate.on("click", e, function(e, t) { var o = t.getAttribute("aria-pressed"); "true" === o ? t.setAttribute("aria-pressed", "false") : "false" !== o && o || t.setAttribute("aria-pressed", "true") }) } var a = { navClassName: "o-nav" },
			s = this;
		t(), i(), n(), o() }

	function searchRedirect(e) { "string" == typeof e && (e = document.querySelector(e)); var t = e.querySelector(".search-input"),
			o = window.location.protocol + "//" + window.location.hostname + "/archiver/",
			i = /^(20\d{2})[-\s\/](0[1-9]|1[012])[-\s\/](0[1-9]|[12][0-9]|3[01])$/;
		e.addEventListener("submit", function(e) { var n = t.value,
				a = n.match(i); if(a) { e.preventDefault(); var s = a.slice(1).join("-");
				console.log(s), window.location.assign(o + s) } }) }

	function getEmptyNavSections(e) { for(var t = ".nav-section", o = e.querySelectorAll(t), i = {}, n = 0, a = o.length; n < a; n++) { var s = o[n],
				r = s.getAttribute("aria-selected"),
				l = s.getAttribute("data-section");!r && l && (i[l] = s) } return i }

	function zipObject(e, t) { for(var o in e) e.hasOwnProperty(o) && o in t && e[o].appendChild(t[o]) }

	function stringToDOM(e) { var t = document.createElement("ol");
		t.innerHTML = e; var o = {},
			i = t.querySelectorAll(".nav-section"); if(i.length > 0)
			for(var n = 0, a = i.length; n < a; n++) { var s = i[n],
					r = s.getAttribute("data-section"),
					l = s.querySelector(".nav-items");
				o[r] = l } else
				for(var c = t.getElementsByTagName("li"), d = 0; d < c.length; d++) { var u = c[d]; if(u.className.search(/nav-section/) > -1)
						for(var m = u.getAttribute("data-section"), f = u.getElementsByTagName("ol"), h = 0; h < f.length; h++) { var g = f[h]; if(g.className.search(/nav-items/) !== -1) { var p = g;
								o[m] = p } } }
		return o }

	function findTop(e) { var t = 0; if(e && e.offsetParent) { do t += e.offsetTop; while (e = e.offsetParent); return t } }

	function getBodyHeight() { var e = window,
			t = document,
			o = t.documentElement,
			i = t.getElementsByTagName("body")[0],
			n = e.innerHeight || o.clientHeight || i.clientHeight; return n }

	function stickyAdsPrepare() { if("object" == typeof stickyAds && stickyAds.length > 0)
			for(var e = 0; e < stickyAds.length; e++) { var t = document.getElementById(stickyAds[e].BannerId).parentNode.parentNode.parentNode.parentNode,
					o = document.getElementById(stickyAds[e].BannerId).parentNode.parentNode.parentNode;
				stickyAds[e].oTop = findTop(t), stickyAds[e].currentClass = o.className } }

	function loadImagesLazy() { if(1 !== figuresLoadStatus) { for(var e = 0, t = 0; t < figuresLazy.length; t++) "" !== figuresLazy[t] && (scrollTop + 2 * bodyHeight > figuresLazy[t].imageTop && (figures[t].innerHTML = '<img src="' + figuresLazy[t].imageUrl + '" data-backupimage="' + figuresLazy[t].imageUrlBack + '">', figures[t].className = figuresLazy[t].loadedClass, figuresLazy[t] = ""), e++);
			0 === e && (figuresLoadStatus = 1) } }

	function loadVideosLazy() { if(1 !== videosLoadStatus) { for(var e = 0, t = 0; t < videosLazy.length; t++) "" !== videosLazy[t] && (scrollTop + 2 * bodyHeight > videosLazy[t].videoTop && (videos[t].innerHTML = videosLazy[t].ih, videos[t].className = "", videosLazy[t] = ""), e++);
			0 === e && (videosLoadStatus = 1) } }

	function checkInView(e) { return scrollTop + bodyHeight > e.top + e.height * e.minimum && scrollTop < e.top + e.height && e.height > 0 && !document.hidden }

	function trackViewables() { try { for(var e = window.gPageId || "Other Page", t = 0; t < viewables.length; t++)
				if("" !== viewables[t] && viewables[t].viewed === !1 && checkInView(viewables[t]) === !0) { var o = t;
					viewables[o].viewed = "pending", setTimeout(function(t) { return function() { checkInView(viewables[t]) === !0 ? (viewables[t].viewed = !0, ga("send", "event", e, "In View", viewables[t].id, { nonInteraction: 1 }), "" !== viewables[t].adch && "" !== viewables[t].adPosition && ga("send", "event", "Ad In View", viewables[t].adch, viewables[t].adPosition, { nonInteraction: 1 })) : viewables[t].viewed = !1 } }(o), viewables[o].time) } } catch(e) {} }

	function loadImages() { var e, t = window.location.search,
			o = !1,
			i = 100;
		figures = document.querySelectorAll("figure.loading"), figuresLazy = [], figuresLoadStatus = 0; try {
			(360 === w || 375 === w || 320 === w || 414 === w || 768 === w || 1024 === w || w > 1220) && (o = !0) } catch(e) {} for(e = 0; e < figures.length; e++) { var n, a = figures[e],
				s = a.offsetWidth,
				r = a.offsetHeight,
				l = findTop(a),
				c = a.getAttribute("data-url"),
				d = a.className || "",
				u = "cover",
				m = a.parentNode.className || "",
				f = !1,
				h = "",
				g = "https://www.ft.com/__origami/service/image/v2/images/raw/"; if(isRetinaDevice === !0 && (s = 2 * s, r = 2 * r, h = "is-retina"), (!t || t.indexOf("?ad=no") === -1) && o === !1) { var p = s % i; if(0 !== p) { var v = r / s,
						y = parseInt(s / i, 10);
					s = (y + 1) * i, r = parseInt(s * v, 10), h = "is-retina" } } /brand/.test(m) && (u = "contain"), c = encodeURIComponent(c), /sponsor/.test(d) ? (c = g + c + "?source=ftchinese&height=" + r + "&fit=" + u, f = !0) : s > 0 && r > 0 && (c = g + c + "?source=ftchinese&width=" + s + "&height=" + r + "&fit=" + u, f = !0), f === !0 ? (n = c.replace("i.ftimg.net", "i.ftmailbox.com"), figuresLazy[e] = { imageTop: l, imageUrl: c, imageUrlBack: n, loadedClass: h }) : figuresLazy[e] = "" } for(videos = document.querySelectorAll("figure.loading-video"), videosLazy = [], videosLoadStatus = 0, hostForVideo = "", "localhost" !== window.location.hostname && 0 !== window.location.hostname.indexOf("192.168") && 0 !== window.location.hostname.indexOf("10.113") && 0 !== window.location.hostname.indexOf("127.0") || (hostForVideo = "http://www.ftchinese.com"), e = 0; e < videos.length; e++) { var b = videos[e],
				N = findTop(b),
				k = b.offsetWidth,
				T = b.offsetHeight,
				S = b.getAttribute("data-vid"),
				H = b.getAttribute("data-item-type") || "video";
			k > 0 && T > 0 && t.indexOf("?ad=no") === -1 && "http://www.ftchinese.com" !== hostForVideo ? videosLazy[e] = { ih: '<iframe name="video-frame" id="video-frame" style="width:100%;height:100%;position:absolute;" src="' + hostForVideo + "/" + H + "/" + S + "?i=2&w=" + k + "&h=" + T + '&autostart=false" scrolling="no" frameborder="0" allowfullscreen=true></iframe>', videoTop: N } : videosLazy[e] = "" } loadImagesLazy(), loadVideosLazy(), trackViewables() }

	function viewablesInit() { if(sections.length > 0 && "string" == typeof window.gPageId && "" !== window.gPageId) { var e = { block: 0, banner: 0, mpu: 0, storympu: 0, footer: 0, "in-story-recommend": 0 };
			window.bBlocked = "unknown"; for(var t = 0; t < sections.length; t++) { var o, i, n = findTop(sections[t]),
					a = sections[t].offsetHeight,
					s = "other",
					r = 0,
					l = 1e3,
					c = "",
					d = "",
					u = !1;
				o = !("object" != typeof viewables[t] || !viewables[t].viewed) && viewables[t].viewed, sections[t].className.indexOf("bn-ph") >= 0 ? (0 === t && "number" != typeof n && document.getElementById("topad") && sections[t].previousSibling.offsetTop > 0 && (n = sections[t].previousSibling.offsetTop, a = sections[t].previousSibling.offsetHeight), s = "banner", r = .5, u = !0) : "story_main_mpu" === sections[t].id ? (s = "storympu", r = .5, u = !0) : sections[t].className.indexOf("mpu-container") >= 0 ? (s = "mpu", r = .5, u = !0) : sections[t].className.indexOf("footer") >= 0 ? s = "footer" : sections[t].className.indexOf("block") >= 0 ? s = "block" : sections[t].className.indexOf("in-story-recommend") >= 0 && (s = "in-story-recommend"), u === !0 && (i = sections[t].querySelector(".banner-iframe"), null !== i && (c = i.getAttribute("data-adch") || "", d = i.getAttribute("data-adPosition") || "")), e[s]++, "number" == typeof n ? (viewables[t] = { id: s + "-" + e[s], top: n, height: a, minimum: r, time: l, viewed: o, adch: c, adPosition: d }, 0 === t && (window.bBlocked = "no")) : (viewables[t] = "", 0 === t && (window.bBlocked = "yes")), sections[t].setAttribute("data-id", s + "-" + e[s]) } } }

	function stickyBottomPrepare() { if(gNavOffsetY = findTop(document.querySelector(".o-nav__placeholder")), bodyHeight = getBodyHeight(gNavOffsetY), "object" == typeof recommendInner && (gRecomendOffsetY = findTop(recommendInner)), document.getElementById("story-action-placeholder") && (gShareOffsetY = findTop(document.getElementById("story-action-placeholder"))), document.getElementById("audio-placeholder") && (gAudioOffsetY = findTop(document.getElementById("audio-placeholder"))), w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, sectionsWithSide.length > 0)
			for(var e = 0; e < sectionsWithSide.length; e++) sectionClassName[e] = sectionsWithSide[e].className, w < hasSideWidth ? (sectionClassNameNew[e] = sectionClassName[e].replace(/ fixmain| fixside| bottommain| bottomside| sticktop/g, ""), sectionClassNameNew[e] !== sectionClassName[e] && (sectionClassName[e] = sectionClassNameNew[e], sectionsWithSide[e].className = sectionClassNameNew[e])) : /fixmain|fixside|bottommain|bottomside|sticktop/.test(sectionClassName[e]) || (containerTop[e] = findTop(sectionsWithSide[e]), mainHeight[e] = sectionsWithSide[e].querySelector(".content-inner").offsetHeight, sideHeight[e] = sectionsWithSide[e].querySelector(".side-inner").offsetHeight + defaultPadding, minHeight[e] = Math.min(mainHeight[e], sideHeight[e]), maxHeight[e] = Math.max(mainHeight[e], sideHeight[e]));
		viewablesInit() }

	function stickyBottomUpdate() { var e = htmlClass.replace(/( o-nav-sticky)|( tool-sticky)|( audio-sticky)/g, ""); if("function" == typeof requestAnimationFrame && requestAnimationFrame(stickyBottomUpdate), "number" == typeof gShareOffsetY && gShareOffsetY > gNavOffsetY ? scrollTop >= gShareOffsetY ? e += " tool-sticky" : scrollTop >= gNavHeight && (e += " o-nav-sticky") : scrollTop >= gNavOffsetY && (e += " o-nav-sticky"), "number" == typeof gAudioOffsetY && gAudioOffsetY > gNavOffsetY && scrollTop + gNavOffsetY >= gAudioOffsetY && (e += " audio-sticky"), e !== htmlClass && (htmlClass = e, document.documentElement.className = htmlClass), sectionsWithSideLength > 0 && w > hasSideWidth)
			for(var t = 0; t < sectionsWithSideLength; t++) { sectionClassNameNew[t] = sectionClassName[t].replace(/fixmain|fixside|bottommain|bottomside|sticktop/g, ""); var o = 0,
					i = 0,
					n = "";
				maxHeight[t] + gNavHeight + defaultPadding >= bodyHeight && maxHeight[t] - minHeight[t] >= 100 && (minHeight[t] + gNavHeight + defaultPadding < bodyHeight ? (n = " sticktop", o = containerTop[t] + maxHeight[t] - minHeight[t] - scrollTop - gNavHeight - defaultPadding, i = containerTop[t] - gNavHeight - scrollTop - defaultPadding, /side-left/.test(sectionClassName[t]) && (o += defaultPadding)) : (o = containerTop[t] + maxHeight[t] - bodyHeight - scrollTop, i = containerTop[t] + minHeight[t] - bodyHeight - scrollTop, /side-left/.test(sectionClassName[t]) && (o += defaultPadding / 2)), mainHeight[t] > sideHeight[t] ? o <= 0 ? sectionClassNameNew[t] += " bottomside" : i <= 0 && (sectionClassNameNew[t] += " fixside" + n) : mainHeight[t] < sideHeight[t] && (o < 30 ? sectionClassNameNew[t] += " bottommain" : i < 0 && (sectionClassNameNew[t] += " fixmain" + n))), sectionClassNameNew[t] = sectionClassNameNew[t].replace(/[\s]+/g, " "), sectionClassNameNew[t] !== sectionClassName[t] && (sectionClassName[t] = sectionClassNameNew[t], sectionsWithSide[t].className = sectionClassNameNew[t]) }
		if("object" == typeof stickyAds && stickyAds.length > 0)
			for(var a = 0; a < stickyAds.length; a++) { var s = stickyAds[a].oTop - scrollTop - gNavHeight,
					r = s + stickyAds[a].stickyHeight,
					l = "";
				l = s <= 0 && r > 0 ? " is-fix" : "", l = "banner-container" + l, l !== stickyAds[a].currentClass && (stickyAds[a].currentClass = l, document.getElementById(stickyAds[a].BannerId).parentNode.parentNode.parentNode.className = l) } gRecomendInViewNoted === !1 && window.recommendLoaded === !0 && "object" == typeof window.recommendInner && gRecomendOffsetY > 0 && scrollTop + bodyHeight > gRecomendOffsetY && (void 0 === window.FTStoryid && (window.FTStoryid = ""), ga("send", "event", "Story Recommend", "Seen" + window.recommendVersion, FTStoryid, { nonInteraction: 1 }), gRecomendInViewNoted = !0), "object" == typeof inreadAd && inreadAd.h > 0 && inreadAd.t > 0 && inreadAd.displayed === !1 && scrollTop + bodyHeight > inreadAd.t + inreadAd.h && showInreadAd(), loadImagesLazy(), loadVideosLazy(), trackViewables() }

	function requestTick() { ticking || requestAnimationFrame(stickyBottomUpdate), ticking = !0 }

	function stickyBottom() { scrollTop = window.scrollY || document.documentElement.scrollTop, "function" == typeof requestAnimationFrame ? requestTick() : stickyBottomUpdate() }

	function setResizeClass() { htmlClass.indexOf(" resized") < 0 && (htmlClass += " resized", document.documentElement.className = htmlClass) }

	function contains(e, t) { if(e && e.length > 0 && t && t.value && t.tag)
			for(var o = 0; o < e.length; o++)
				if(e[o].value === t.value && e[o].tag === t.tag) return !0; return !1 }

	function checkFollow() { var e, t, o = new XMLHttpRequest,
			i = {};
		i.head = {}, i.head.transactiontype = "31004", i.head.source = "web", i.body = {}, i.body.ielement = {}, /127\.0|localhost|192\.168/.test(window.location.href) ? (e = "GET", t = "/api/page/recommend.json") : (e = "POST", t = "/eaclient/apijson.php"), o.open(e, encodeURI(t)), o.setRequestHeader("Content-Type", "application/json"), o.onload = function() { if(200 === o.status)
				for(var e = JSON.parse(o.responseText), t = document.querySelectorAll("button.myft-follow"), i = 0; i < t.length; i++) { var n = {};
					n.type = t[i].getAttribute("data-type"), n.value = t[i].getAttribute("data-tag"), contains(e.body.odatalist, n) === !0 && (t[i].innerHTML = "已关注", t[i].className = t[i].className.replace(/ plus/g, " tick")) } }, o.send(JSON.stringify(i)) } Delegate.prototype.root = function(e) { var t, o = this.listenerMap; if(this.rootElement) { for(t in o[1]) o[1].hasOwnProperty(t) && this.rootElement.removeEventListener(t, this.handle, !0); for(t in o[0]) o[0].hasOwnProperty(t) && this.rootElement.removeEventListener(t, this.handle, !1) } if(!e || !e.addEventListener) return this.rootElement && delete this.rootElement, this;
		this.rootElement = e; for(t in o[1]) o[1].hasOwnProperty(t) && this.rootElement.addEventListener(t, this.handle, !0); for(t in o[0]) o[0].hasOwnProperty(t) && this.rootElement.addEventListener(t, this.handle, !1); return this }, Delegate.prototype.captureForType = function(e) { return ["blur", "error", "focus", "load", "resize", "scroll"].indexOf(e) !== -1 }, Delegate.prototype.on = function(e, t, o, i) { var n, a, s, r; if(!e) throw new TypeError("Invalid event type: " + e); if("function" == typeof t && (i = o, o = t, t = null), void 0 === i && (i = this.captureForType(e)), "function" != typeof o) throw new TypeError("Handler must be a type of Function"); return n = this.rootElement, a = this.listenerMap[i ? 1 : 0], a[e] || (n && n.addEventListener(e, this.handle, i), a[e] = []), t ? /^[a-z]+$/i.test(t) ? (r = t, s = matchesTag) : /^#[a-z0-9\-_]+$/i.test(t) ? (r = t.slice(1), s = matchesId) : (r = t, s = matches) : (r = null, s = matchesRoot.bind(this)), a[e].push({ selector: t, handler: o, matcher: s, matcherParam: r }), this }, Delegate.prototype.off = function(e, t, o, i) { var n, a, s, r, l; if("function" == typeof t && (i = o, o = t, t = null), void 0 === i) return this.off(e, t, o, !0), this.off(e, t, o, !1), this; if(s = this.listenerMap[i ? 1 : 0], !e) { for(l in s) s.hasOwnProperty(l) && this.off(l, t, o); return this } if(r = s[e], !r || !r.length) return this; for(n = r.length - 1; n >= 0; n--) a = r[n], t && t !== a.selector || o && o !== a.handler || r.splice(n, 1); return r.length || (delete s[e], this.rootElement && this.rootElement.removeEventListener(e, this.handle, i)), this }, Delegate.prototype.handle = function(e) { var t, o, i, n, a, s, r, l = e.type,
			c = [],
			d = "ftLabsDelegateIgnore"; if(e[d] !== !0) { switch(r = e.target, 3 === r.nodeType && (r = r.parentNode), i = this.rootElement, n = e.eventPhase || (e.target !== e.currentTarget ? 3 : 2)) {
				case 1:
					c = this.listenerMap[1][l]; break;
				case 2:
					this.listenerMap[0] && this.listenerMap[0][l] && (c = c.concat(this.listenerMap[0][l])), this.listenerMap[1] && this.listenerMap[1][l] && (c = c.concat(this.listenerMap[1][l])); break;
				case 3:
					c = this.listenerMap[0][l] } for(o = c.length; r && o;) { for(t = 0; t < o && (a = c[t], a); t++)
					if(a.matcher.call(r, a.matcherParam, r) && (s = this.fire(e, r, a)), s === !1) return e[d] = !0, void e.preventDefault(); if(r === i) break;
				o = c.length, r = r.parentElement } } }, Delegate.prototype.fire = function(e, t, o) { return o.handler.call(t, e, t) };
	var matches = function(e) { if(e) { var t = e.prototype; return t.matches || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector } }(Element);
	Delegate.prototype.destroy = function() { this.off(), this.root() }, searchRedirect("#search-form");
	var ajax = { getData: function(e, t) { var o = new XMLHttpRequest;
				o.onreadystatechange = function() { 4 === o.readyState && (o.status >= 200 && o.status < 300 || 304 === o.status ? t(null, o.responseText) : t(o.status)) }, o.open("GET", e), o.send(null) } },
		navEl = document.querySelector(".o-nav");
	new Nav(navEl);
	var searchEl = navEl.querySelector(".o-nav__search");
	new Toggler(searchEl);
	var emptyNavSections = getEmptyNavSections(navEl);
	ajax.getData("/m/corp/ajax-nav.html", function(e, t) { if(e) return e; var o = stringToDOM(t);
		zipObject(emptyNavSections, o) });
	var containerTop = [],
		mainHeight = [],
		sideHeight = [],
		bodyHeight, gNavOffsetY = 0,
		gNavHeight = 44,
		gShareOffsetY, gAudioOffsetY, gRecomendOffsetY, gRecomendInViewNoted = !1,
		defaultPadding = 30,
		hasSideWidth = 690,
		sectionsWithSide = document.querySelectorAll(".block-container.has-side"),
		sections = document.querySelectorAll(".block-container, .footer-container, .bn-ph, .mpu-container, #story_main_mpu, .in-story-recommend"),
		delegate, htmlClass = document.documentElement.className,
		sectionsWithSideLength = sectionsWithSide.length,
		sectionClassName = [],
		sectionClassNameNew = [],
		minHeight = [],
		maxHeight = [],
		isRetinaDevice = window.devicePixelRatio > 1,
		scrollTop = window.scrollY || document.documentElement.scrollTop,
		ticking = !1,
		hostForVideo = "",
		currentFavButton, figures = document.querySelectorAll("figure.loading"),
		figuresLazy = [],
		figuresLoadStatus = 0,
		videos = document.querySelectorAll("figure.loading-video"),
		videosLazy = [],
		videosLoadStatus = 0,
		viewables = [];
	try { delegate = new Delegate(document.body) } catch(e) {} gNavOffsetY = findTop(document.querySelector(".o-nav__placeholder")), 0 === gNavOffsetY && (gNavOffsetY = findTop(document.querySelector(".site-map")));
	var addEvent = window.attachEvent || window.addEventListener,
		eventResize = window.attachEvent ? "onresize" : "resize",
		eventScroll = window.attachEvent ? "onscroll" : "scroll";
	if(gNavOffsetY > 30 && w > 490 && isTouchDevice() === !1 || document.getElementById("audio-placeholder")) try { stickyBottomPrepare(), stickyAdsPrepare(), addEvent(eventScroll, function() { stickyBottom() }), addEvent(eventResize, function() { stickyBottomPrepare(), stickyAdsPrepare(), reloadBanners(), setResizeClass(), loadImages() }), setInterval(function() { stickyBottomPrepare(), stickyAdsPrepare() }, 1e4) } catch(e) {} else bodyHeight = getBodyHeight(), addEvent(eventResize, function() { bodyHeight = getBodyHeight(), reloadBanners(), loadImages(), setResizeClass() }), addEvent(eventScroll, function() { scrollTop = window.scrollY || document.documentElement.scrollTop, loadImagesLazy(), loadVideosLazy(), trackViewables() });
	"undefined" == typeof SVGRect && (document.documentElement.className += " no-svg"), loadImages(), viewablesInit();
	try { delegate.on("error", "img", function() { var e = this.getAttribute("data-backupimage") || ""; "" !== e ? (this.setAttribute("data-backupimage", ""), this.src = e) : this.style.display = "none" }) } catch(e) {}
	try { delegate.on("click", ".video-package .XL2 a.image", function() { var e = hostForVideo + this.getAttribute("href"),
				t = this.parentNode.parentNode.parentNode,
				o = t.querySelector("#video-package-play"),
				i = o.offsetWidth,
				n = o.offsetHeight,
				a = this.parentNode.parentNode,
				s = a.querySelector(".item-headline a").innerHTML,
				r = this.parentNode.parentNode.parentNode.querySelectorAll(".video-package .XL2");
			e = e.replace(/#.*$/g, ""); for(var l = 0; l < r.length; l++) { var c = r[l].className;
				c.indexOf(" on") >= 0 && (c = c.replace(" on", ""), r[l].className = c) } return this.parentNode.parentNode.className += " on", o.querySelector("iframe").src = e + "?i=2&k=1&w=" + i + "&h=" + n + "&autostart=true", t.querySelector(".video-package-title a").innerHTML = s, t.querySelector(".video-package-title a").href = e, !1 }), delegate.on("click", "a, .track-click", function() { var e = this.getAttribute("data-ec") || "",
				t = this.getAttribute("data-ea") || "",
				o = this.getAttribute("data-el") || ""; "" !== e && "" !== t && ga("send", "event", e, t, o) }), delegate.on("click", ".overlay", function(e) { "cell" === e.target.className && closeOverlay() }) } catch(e) {} delegate.on("click", ".overlay-close, .overlay-bg", function() { var e = this.getAttribute("data-parentid");
		closeOverlay(e) }), delegate.on("click", ".current-edition span", function() { var e = this.parentNode.parentNode.className;
		e.indexOf(" on") > 0 ? e = e.replace(/ on/g, "") : e += " on", this.parentNode.parentNode.className = e }), delegate.on("click", ".icon-save button", function() { if("" === username || null === username) return void alert("您必须登录后能才能收藏文章!"); var e, t = this.id.replace(/addfavlink/g, ""); if("收藏" === this.innerHTML) e = "add";
		else { if("删除" !== this.innerHTML) return;
			e = "remove" } currentFavButton = document.getElementById("addfavlink" + t) || document.getElementById("addfavlink"), currentFavButton.innerHTML = "add" === e ? "保存..." : "删除..."; var o = new XMLHttpRequest;
		o.open("POST", "/users/" + e + "favstory/" + t), o.setRequestHeader("Content-Type", "application/text"), o.onload = function() { if(200 === o.status) { var t = o.responseText; "ok" !== t && "" !== t || (currentFavButton.innerHTML = "add" === e ? "删除" : "收藏") } else 200 !== o.status }, o.send(JSON.stringify({ storyid: t })) });
	try { var eleFollow;
		delegate.on("click", ".myft-follow", function() { if("" === window.username || null === window.username) document.getElementById("login-reason").innerHTML = "<b>请先登录再关注话题</b>", showOverlay("overlay-login");
			else { if(this.className.indexOf(" pending") >= 0) return;
				this.className += " pending"; var e, t, o = this.className.indexOf(" plus") > 0 ? 1 : 0,
					i = this.innerHTML,
					n = "pending",
					a = new XMLHttpRequest,
					s = {};
				s.head = {}, s.head.transactiontype = "31003", s.head.source = "web", s.body = {}, s.body.ielement = {}, s.body.ielement.type = this.getAttribute("data-type"), s.body.ielement.value = this.getAttribute("data-tag"), s.body.ielement.cmd = o, /127\.0|localhost|192\.168/.test(window.location.href) ? (e = "GET", t = "/api/page/recommend.json") : (e = "POST", t = "/eaclient/apijson.php"), this.innerHTML = this.className.indexOf(" plus") > 0 ? "关注..." : "取消关注...", eleFollow = this, a.open(e, encodeURI(t)), a.setRequestHeader("Content-Type", "application/json"), a.onload = function() { try { if(200 === a.status) { var e = JSON.parse(a.responseText);
							n = "0" === e.body.oelement.errorcode ? "success" : "20101" === e.body.oelement.errorcode ? "followed" : "20100" === e.body.oelement.errorcode ? "unfollowed" : "failed" } else 200 !== a.status && (this.innerHTML = "操作失败", n = "failed") } catch(e) { n = "failed" } "success" === n ? 1 === o ? (eleFollow.innerHTML = "已关注", eleFollow.className = eleFollow.className.replace(" plus", " tick")) : (eleFollow.innerHTML = "关注", eleFollow.className = eleFollow.className.replace(" tick", " plus")) : "followed" === n ? (eleFollow.innerHTML = "已关注", eleFollow.className = eleFollow.className.replace(" plus", " tick")) : "unfollowed" === n ? (eleFollow.innerHTML = "关注", eleFollow.className = eleFollow.className.replace(" tick", " plus")) : (eleFollow.innerHTML = "操作失败", setTimeout(function() { eleFollow.innerHTML = i }, 1e3)), eleFollow.className = eleFollow.className.replace(/ pending/g, "") }, a.send(JSON.stringify(s)) } }) } catch(e) {} checkFollow();


	function trackClicks() { if("string" == typeof window.gPageId)
			for(var e = document.querySelectorAll(".block-container"), t = 0; t < e.length; t++) { for(var r = e[t].querySelectorAll(".list-container"), a = e[t].querySelector(".side-container"), l = 0; l < r.length; l++)
					for(var i = r[l].querySelectorAll(".item-container"), n = 0; n < i.length; n++)
						for(var o = i[n].querySelectorAll("a"), c = 0; c < o.length; c++) o[c].setAttribute("data-ec", "Click"), o[c].setAttribute("data-ea", window.gPageId), o[c].setAttribute("data-el", "Block" + t + "-List" + l + "-Item" + n); if(null !== a)
					for(var s = a.querySelectorAll(".links-container, .interactives, .vidoes, .mps"), d = 0; d < s.length; d++)
						for(var u = s[d].querySelectorAll(".item-container, li, .links a"), g = 0; g < u.length; g++) { var A; if("A" === u[g].tagName) u[g].setAttribute("data-ec", "Click"), u[g].setAttribute("data-ea", window.gPageId), u[g].setAttribute("data-el", "Side" + t + "-List" + d + "-Item" + g);
							else { A = u[g].querySelectorAll("a"); for(var f = 0; f < A.length; f++) A[f].setAttribute("data-ec", "Click"), A[f].setAttribute("data-ea", window.gPageId), A[f].setAttribute("data-el", "Side" + t + "-List" + d + "-Item" + g) } } } } trackClicks();
