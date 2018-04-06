'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

document.addEventListener('click', function (e) {
	// sample link in toc
	if (e.target.closest('.switch')) {
		switcheroo();
	}
	if (e.target.closest('p.disclosures a')) {
		createPopOver(e);
	}
});

// gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
// var getClosest = function ( elem, selector ) {
// Get closest match
// 	for ( ; elem && elem !== document; elem = elem.parentNode ) {
// 		if ( elem.matches( selector ) ) return elem;
// 	}
// 	return null;
// };

// var elem = document.querySelector('span[itemprop = "name"]');
// var closestElem = getClosest(elem, 'a');


//////////////////////////////////////////////////////
// Create a div at the top level to display tables
//////////////////////////////////////////////////////
var tablePop = document.querySelector('.table-xl');
var tablePopActivator = tablePop.querySelector('.table-xl--btn');
var theTable = tablePop.querySelector('table');

if (tablePop.offsetWidth < theTable.offsetWidth) {
	tablePop.classList.add('scrollable');
	// add the code below to the dom only when the condition is true
	// `
	// <span class="table-xl--btn">
	//                <svg class="icn">
	//                  <title>Open table</title>
	//                  <use xlink:href="#arrows-open" />
	//                </svg>
	//              </span>
	// `
}

tablePopActivator.addEventListener('click', makeTableDiv);

function makeTableDiv(el) {

	var tablePopOver = document.createElement('div');
	tablePopOver.classList.add('table-popover');

	tablePopOver.style.top = 0 + "px";
	tablePopOver.style.left = 0;
	document.body.appendChild(tablePopOver);

	var tableId = document.getElementById("0090");
	var tableClone = tableId.cloneNode(true);

	var popper = document.querySelector('.table-popover');
	popper.innerHTML = '\n\t<div class="table-content">\n\t<!-- table goes here -->\n\t</div>\n\t';
	var tableContent = popper.querySelector('.table-content');
	tableContent.appendChild(tableClone);

	var arrowInverter = tableContent.querySelector('.table-xl--btn');
	arrowInverter.innerHTML = '\n\t<span class="table-xl--btn-close" onclick="destroyTablePopover()">\n    <svg class="icn">\n      <title>Open table</title>\n      <use xlink:href="#arrows-close" />\n    </svg>\n  </span>\n  ';
}

function destroyTablePopover() {
	var currTPop = document.querySelector('.table-popover');
	if (currTPop) {
		document.body.removeChild(currTPop);
		event.preventDefault();
	}
}

//////////////////////////////////////////////////////
// tablePopOver.style.top = (window.scrollY + 48) + "px";
// let rect = this.getBoundingClientRect();
//////////////////////////////////////////////////////


function createPopOver(e) {

	var templateSelector = void 0;

	if (!e.target.href) {
		templateSelector = this.href;
	} else {
		templateSelector = e.target.href;
	}

	destroyPopover();

	var popOver = document.createElement('div');
	popOver.classList.add('popover');
	document.body.appendChild(popOver);

	// const templateSelector = e.target.href;

	// console.log(templateSelector)

	if (templateSelector.includes('#main-certifications-disclosures')) {
		popOver.innerHTML = popOverFragDisclosure;
	}

	if (templateSelector.includes('#single')) {
		popOver.innerHTML = popOverFrag;
	}

	if (templateSelector.includes('#multiples')) {
		popOver.innerHTML = popOverFragMultiples;
	}

	// const xAxis = e.pageX;
	var yAxis = e.pageY;
	popOver.style.position = 'absolute';
	popOver.style.left = '1rem';
	popOver.style.top = yAxis + 16 + 'px';

	// if (templateSelector === '#icn-1'){
	// 	popOver.innerHTML = popOverFragIcn01;
	// } else if (templateSelector === '#icn-2'){
	// 	popOver.innerHTML = popOverFragIcn02;
	// } else if (templateSelector === '#icn-3'){
	// 	popOver.innerHTML = popOverFragIcn03;
	// }

	var closePopover = popOver.querySelector('.close-popover');
	closePopover.addEventListener('click', destroyPopover);
	popOver.classList.toggle('show');
	e.preventDefault();
}

function destroyPopover() {
	var currPop = document.querySelector('.popover');
	if (currPop) {
		document.body.removeChild(currPop);
	}
}

// POPOVERS //
// byline popovers
var popLinks = document.querySelectorAll('.byline a');
var popLinksArray = [].concat(_toConsumableArray(popLinks));
// popLinksArray.forEach( popLink => popLink.addEventListener('click', popUpAction));
popLinksArray.forEach(function (popLink) {
	return popLink.addEventListener('click', createPopOver);
});

// all popovers
function popUpAction(e) {

	var popOver = document.createElement('div');
	popOver.classList.add('popover');
	document.body.appendChild(popOver);

	var templateSelector = this.getAttribute('href');
	var linkCoords = this.getBoundingClientRect();
	var coords = {
		bottom: linkCoords.bottom + window.scrollY,
		left: linkCoords.left + window.scrollX
	};
	popOver.style.position = 'absolute';
	popOver.style.top = coords.bottom + 4 + 'px';

	var mql = window.matchMedia('(min-width: 760px)');

	if (mql.matches) {
		popOver.style.left = coords.left + 'px';
	} else {
		popOver.style.left = '1rem';
	}

	if (templateSelector === '#multiples') {
		popOver.innerHTML = popOverFragMultiples;
	} else if (templateSelector === '#single') {
		popOver.innerHTML = popOverFrag;
	} else if (templateSelector === '#icn-1') {
		popOver.innerHTML = popOverFragIcn01;
	} else if (templateSelector === '#icn-2') {
		popOver.innerHTML = popOverFragIcn02;
	} else if (templateSelector === '#icn-3') {
		popOver.innerHTML = popOverFragIcn03;
	}

	popOver.classList.toggle('show');

	var tempVar = document.querySelector('.popover__content a');
	tempVar.addEventListener('click', function () {
		scrollIt(document.querySelector('#main-certifications-disclosures'), 300, 'easeOutQuad', function () {
			return console.log('Just finished scrolling to ' + window.pageYOffset + 'px');
		});
	});

	var closePopover = popOver.querySelector('.close-popover');
	closePopover.addEventListener('click', function () {
		popOver.classList.remove('show');
		document.body.removeChild(popOver);
	});
	e.preventDefault();
}

// content switcher for show
var switchlink = document.querySelector('.switch');
var switchh1 = document.querySelector('.switch-h1');
var switchh2 = document.querySelector('.switch-h2');
var switchlede = document.querySelector('.switch-lede');
var switchToc = document.querySelector('.switch-cont');
var htmlRoot = document.querySelector('html');

switchToc.style.display = 'none';

if (switchh2) {
	switchh2.style.display = 'none';
	switchh1.style.display = 'none';
	switchlede.style.display = 'none';
}

function switcheroo() {
	console.log('test switcheroo');
	htmlRoot.classList.add('in-chapter'); // add root class
	switchlink.parentNode.classList.toggle('active');

	switchh1.innerHTML = 'Focus';
	switchToc.style.display = 'block';
	switchh2.style.display = 'block';
	switchh1.style.display = 'block';
	switchlede.style.display = 'block';
	switchlede.classList.toggle('lede');
	switchh1.classList.toggle('alt');
	switchh2.classList.toggle('alt');
}

// end switcher for show

// TOC activation
var toc = document.querySelector('.toc');
var toctoc = document.querySelector('.toc__toc');
var menuShow = document.querySelector('.menu-bug');
var contentHeader = document.querySelector('.content__header');
var labelHeader = document.querySelector('.trigger');
// const iconList = document.querySelector('.icon-list');
// var iconListIcons = [].slice.call(iconList.querySelectorAll('a'));

// open close toc
menuShow.addEventListener('click', activateToc);
// ?????
// labelHeader.addEventListener('click', activateToc);

function activateToc() {
	var tocCoords = toc.getBoundingClientRect();
	var topOfToc = tocCoords.height;
	toctoc.style.top = topOfToc + 'px';
	toctoc.classList.toggle('toc__open');
}

// window.scroll functions //
// show menubar at top of page, make the icon list static

window.addEventListener('scroll', fixTop);
var tocCoords = toc.getBoundingClientRect();
var coords = { bottom: tocCoords.bottom + window.scrollY };
function fixTop() {
	if (window.scrollY > coords.bottom) {
		toc.classList.add('fix-top');
		setTimeout(function () {
			toc.classList.add('fix-top-open');
		}, 0);
	} else if (window.scrollY < coords.bottom) {
		toc.classList.remove('fix-top');
		toc.classList.remove('fix-top-open');
	}
}

// footnotes //
var fnlink = document.querySelector('.footnote-link');
var fntext = document.querySelector('.footnote-item');

if (fnlink) {
	fnlink.addEventListener('click', show);
}

function show() {
	this.classList.toggle('fn-expanded');
	fntext.classList.toggle('fn-displayed');
	setTimeout(animate, 100);
}

function animate() {
	fntext.classList.toggle('fn-expanded');
}

// simulate clicking on a large table
// const tablePopover = document.querySelector('.figure-header');
// const tableToPop = document.querySelector('.table-container');
// const tableToPop = document.querySelector('.figure-header + table');
// const captionToPop = document.querySelector('.caption')

// support MAIN-2
// if(tablePopover) {
// 	tablePopover.addEventListener('click', showTable);
// }

// function showTable(){
// 	tableToPop.classList.toggle('table-pop')
// 	captionToPop.classList.toggle('table-pop')
// 	if (tableToPop.classList.contains('table-pop')) {
// 		tablePopIcon.classList.add('hilite')
// 		tablePopIcon.innerHTML = 
// 		`<svg class="icn">
// 		<title>Open table</title>
// 		<use xlink:href="#arrows-close" />
// 		</svg>`
// 	} else {
// 		tablePopIcon.classList.remove('hilite')
// 		tablePopIcon.innerHTML = 
// 		`<svg class="icn">
// 		<title>Open table</title>
// 		<use xlink:href="#arrows-open" />
// 		</svg>`
// 	}
// }


// scroll stuff - https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/

// disclosureLink.addEventListener('click', () => scrollIt(50000));

function scrollIt(destination) {
	var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
	var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
	var callback = arguments[3];


	var easings = {
		linear: function linear(t) {
			return t;
		},
		easeInQuad: function easeInQuad(t) {
			return t * t;
		},
		easeOutQuad: function easeOutQuad(t) {
			return t * (2 - t);
		},
		easeInOutQuad: function easeInOutQuad(t) {
			return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
		},
		easeInCubic: function easeInCubic(t) {
			return t * t * t;
		},
		easeOutCubic: function easeOutCubic(t) {
			return --t * t * t + 1;
		},
		easeInOutCubic: function easeInOutCubic(t) {
			return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
		},
		easeInQuart: function easeInQuart(t) {
			return t * t * t * t;
		},
		easeOutQuart: function easeOutQuart(t) {
			return 1 - --t * t * t * t;
		},
		easeInOutQuart: function easeInOutQuart(t) {
			return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
		},
		easeInQuint: function easeInQuint(t) {
			return t * t * t * t * t;
		},
		easeOutQuint: function easeOutQuint(t) {
			return 1 + --t * t * t * t * t;
		},
		easeInOutQuint: function easeInOutQuint(t) {
			return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
		}
	};

	var start = window.pageYOffset;
	var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

	var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
	var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
	var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
	var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

	if ('requestAnimationFrame' in window === false) {
		window.scroll(0, destinationOffsetToScroll);
		if (callback) {
			callback();
		}
		return;
	}

	function scroll() {
		var now = 'now' in window.performance ? performance.now() : new Date().getTime();
		var time = Math.min(1, (now - startTime) / duration);
		var timeFunction = easings[easing](time);
		window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

		if (window.pageYOffset === destinationOffsetToScroll) {
			if (callback) {
				callback();
			}
			return;
		}

		requestAnimationFrame(scroll);
	}

	scroll();
}
"use strict";

var popOverFragDisclosure = "\n<a class=\"close-popover\" href=\"#0\">\u2716\uFE0E</a>\n<div class=\"popover__content\" style=\"font-size: 0.875rem\">\n<p>This here document is intended for institutional investors and is not subject to all of the independence and disclosure standards applicable to debt research reports prepared for retail investors under U.S. FINRA Rule 2242. Barclays trades the securities covered in this report for its own account and on a discretionary basis on behalf of certain clients. Such trading interests may be contrary to the recommendations offered in this report.</p>\n<p>For analyst certification(s) and important disclosures, please <a href=\"#main-certifications-disclosures\">click here</a>.</p>\n<p>Completed 12 Nov 2017, 12:00 GMT<br/>Released 14 Nov 2017, 0600 GMT</p>\n</div>\n";

var popOverFrag = "\n<a class=\"close-popover\" href=\"#00\">\u2716\uFE0E</a>\n<div class=\"popover__content\">\n<div>\n\t<span class=\"popover__credentials\">Bradley Rogoff, CFA</span>\n\t<span class=\"popover__credentials\">BCI, US</span> \n\t<span class=\"popover__credentials\">High Grade Credit</span>\n</div>\n<ul>\n<li>\n<svg class=\"icn\">\n<title>Phone number</title>\n<use xlink:href=\"#icon-phone\" />\n</svg>\n<a href=\"#0\">+1 (212) 526-4000</a></li>\n<li>\n<svg class=\"icn\">\n<title>Phone number</title>\n<use xlink:href=\"#icon-person\" />\n</svg>\n<a href=\"#0\">Analyst's Page</a></li>\n<li>\n<svg class=\"icn\">\n<title>Phone number</title>\n<use xlink:href=\"#icon-email\" />\n</svg>\n<a href=\"#0\">bradley.rogoff@barclays.com</a></li>\n</ul>\n</div>\n";

var popOverFragMultiples = "\n<a class=\"close-popover\" href=\"#00\">\u2716\uFE0E</a>\n<div class=\"popover__content multiple\">\n<div>\n\t<span class=\"popover__credentials\">Bradley Rogoff, CFA</span>\n\t<span class=\"popover__credentials\">BCI, US</span> \n\t<span class=\"popover__credentials\">High Grade Credit</span>\n</div>\n<ul>\n<li>\n<svg class=\"icn\">\n<title>Phone number</title>\n<use xlink:href=\"#icon-phone\" />\n</svg>\n<a href=\"#0\">+1 (212) 526-4000</a></li>\n<li>\n<svg class=\"icn\">\n<title>Phone number</title>\n<use xlink:href=\"#icon-person\" />\n</svg>\n<a href=\"#0\">Analyst's Page</a></li>\n<li>\n<svg class=\"icn\">\n<title>Phone number</title>\n<use xlink:href=\"#icon-email\" />\n</svg>\n<a href=\"#0\">bradley.rogoff@barclays.com</a></li>\n</ul>\n</div>\n\n<div class=\"popover__content multiple\">\n<div>\n\t<span class=\"popover__credentials\">Bradley Rogoff, CFA</span>\n\t<span class=\"popover__credentials\">BCI, US</span> \n\t<span class=\"popover__credentials\">High Grade Credit</span>\n</div>\n<ul>\n<li>\n<svg class=\"icn\">\n<title>Phone number</title>\n<use xlink:href=\"#icon-phone\" />\n</svg>\n<a href=\"#0\">+1 (212) 526-4000</a></li>\n<li>\n<svg class=\"icn\">\n<title>Phone number</title>\n<use xlink:href=\"#icon-person\" />\n</svg>\n<a href=\"#0\">Analyst's Page</a></li>\n<li>\n<svg class=\"icn\">\n<title>Phone number</title>\n<use xlink:href=\"#icon-email\" />\n</svg>\n<a href=\"#0\">bradley.rogoff@barclays.com</a></li>\n</ul>\n</div>\n\n<div class=\"popover__content multiple\">\n<div>\n\t<span class=\"popover__credentials\">Bradley Rogoff, CFA</span>\n\t<span class=\"popover__credentials\">BCI, US</span> \n\t<span class=\"popover__credentials\">High Grade Credit</span>\n</div>\n<ul>\n<li>\n<svg class=\"icn\">\n<title>Phone number</title>\n<use xlink:href=\"#icon-phone\" />\n</svg>\n<a href=\"#0\">+1 (212) 526-4000</a></li>\n<li>\n<svg class=\"icn\">\n<title>Phone number</title>\n<use xlink:href=\"#icon-person\" />\n</svg>\n<a href=\"#0\">Analyst's Page</a></li>\n<li>\n<svg class=\"icn\">\n<title>Phone number</title>\n<use xlink:href=\"#icon-email\" />\n</svg>\n<a href=\"#0\">bradley.rogoff@barclays.com</a></li>\n</ul>\n</div>\n";

var popOverFragIcn01 = "\n<a class=\"close-popover\" href=\"#0\">\u2716\uFE0E</a>\n<div class=\"popover__content\">\n\n<div>Subscribe</div>\n<ul>\n<li><a href=\"#0\">Add to Read Later</a> <input type=\"checkbox\"> </li>\n<li><a href=\"#0\">Clippings &amp; Annotations</a>\n<ul>\n<li><a href=\"#0\">Annotation 1</a></li>\n<li><a href=\"#0\">Annotation 2</a></li>\n</ul>\n</li>\n\n</ul>\n\n<div>Document Tools</div>\n<ul>\n<li><span class=\"md\" aria-hidden=\"true\" data-icon=\"\uF440\"></span> <a href=\"#0\">Add to Quicklist</a></li>\n<li><span class=\"md\" aria-hidden=\"true\" data-icon=\"\uF380\"></span> <a href=\"#0\">Add to Briefcase</a></li>\n<li><span class=\"md\" aria-hidden=\"true\" data-icon=\"\uF116\"></span> <a href=\"#0\">Email Me</a></li>\n<li><span class=\"md\" aria-hidden=\"true\" data-icon=\"\uF436\"></span> <a href=\"#0\">Share</a></li>\n<li><span class=\"md\" aria-hidden=\"true\" data-icon=\"\uF407\"></span> <a href=\"#0\">Subscribe Client</a></li>\n<li><span class=\"md\" aria-hidden=\"true\" data-icon=\"\uF395\"></span> <a href=\"#0\">Copy Link</a></li>\n</ul>\n\n</div>\n\n</div>\n";

var popOverFragIcn02 = "\n<a class=\"close-popover\" href=\"#0\">\u2716\uFE0E</a>\n<div class=\"popover__content\">\n\n<div>Print PDF</div>\n<ul style=\"display: block\">\n<li><a><span class=\"md\" aria-hidden=\"true\" data-icon=\"&#xE001;\"></span> This chapter (3 pages)</a></li>\n<li><a><span class=\"md\" aria-hidden=\"true\" data-icon=\"&#xE001;\"></span> US Credit Alpha (43 pages)</a></li>\n</ul>\n</div>\n</div>\n";

var popOverFragIcn03 = "\n<a class=\"close-popover\" href=\"#0\">\u2716\uFE0E</a>\n<div class=\"popover__content\">\n\n<div>Attachments in this article</div>\n<ul style=\"display: block\">\n<li> <a><span class=\"md\" aria-hidden=\"true\" data-icon=\"&#xE001;\"></span> Sample PDF</a></li>\n<li> <a><span class=\"md\" aria-hidden=\"true\" data-icon=\"&#xE006;\"></span> Sample Power Point</a></li>\n<li> <a><span class=\"md\" aria-hidden=\"true\" data-icon=\"&#xE003;\"></span> Sample Word doc</a></li>\n<li> <a><span class=\"md\" aria-hidden=\"true\" data-icon=\"&#xE002;\"></span> Sample Excel spreadsheet</a></li>\n</ul>\n</div>\n</div>\n";

//mql = media query list
// const breakOne = '360'; // 360px  22.5em
// const breakTwo = '760'; // 760px  46.25em
// const breakThree = '980'; // 980px  61.25em
// const breakFour = '1140'; // 1140px  71.25em
// const breakFive = '1300'; // 1300px  81.25

// const mqlBreakOne = window.matchMedia(`(min-width: ${breakOne}px)`);
// const mqlBreakTwo = window.matchMedia(`(min-width: ${breakTwo}px)`);
// const mqlBreakThree = window.matchMedia(`(min-width: ${breakThree}px)`);
// const mqlBreakFour = window.matchMedia(`(min-width: ${breakFour}px)`);
// const mqlBreakFive = window.matchMedia(`(min-width: ${breakFive}px)`);

//# sourceMappingURL=scripts-babel.js.map