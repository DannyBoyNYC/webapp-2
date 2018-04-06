document.addEventListener('click', function(e){
	// sample link in toc
	if (e.target.closest('.switch')) {
		switcheroo();
	}
	if (e.target.closest('p.disclosures a')) {
		createPopOver(e);
	}
})

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
const tablePop = document.querySelector('.table-xl');
const tablePopActivator = tablePop.querySelector('.table-xl--btn');
const theTable = tablePop.querySelector('table');

if (tablePop.offsetWidth < theTable.offsetWidth){
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

tablePopActivator.addEventListener('click', makeTableDiv)

function makeTableDiv(el){

	const tablePopOver = document.createElement('div');
	tablePopOver.classList.add('table-popover');

	tablePopOver.style.top = 0 + "px";
	tablePopOver.style.left = 0;
	document.body.appendChild(tablePopOver);

	let tableId = document.getElementById("0090");
	let tableClone = tableId.cloneNode(true);

	let popper = document.querySelector('.table-popover');
	popper.innerHTML = 
	`
	<div class="table-content">
	<!-- table goes here -->
	</div>
	`;
	let tableContent = popper.querySelector('.table-content')
	tableContent.appendChild(tableClone);

	let arrowInverter = tableContent.querySelector('.table-xl--btn');
	arrowInverter.innerHTML = 
	`
	<span class="table-xl--btn-close" onclick="destroyTablePopover()">
    <svg class="icn">
      <title>Open table</title>
      <use xlink:href="#arrows-close" />
    </svg>
  </span>
  `
	;

}

function destroyTablePopover(){
	const currTPop = document.querySelector('.table-popover')
	if (currTPop){
		document.body.removeChild(currTPop);
		event.preventDefault();
	}
}

//////////////////////////////////////////////////////
	// tablePopOver.style.top = (window.scrollY + 48) + "px";
	// let rect = this.getBoundingClientRect();
//////////////////////////////////////////////////////




function createPopOver(e){

	let templateSelector;

	if ( !e.target.href ){
		templateSelector = this.href;
	} else {
		templateSelector = e.target.href;
	}

	destroyPopover();

	const popOver = document.createElement('div');
	popOver.classList.add('popover');
	document.body.appendChild(popOver);

	// const templateSelector = e.target.href;

	// console.log(templateSelector)

	if (templateSelector.includes('#main-certifications-disclosures')){
		popOver.innerHTML = popOverFragDisclosure;
	}

	if (templateSelector.includes('#single')){
		popOver.innerHTML = popOverFrag;
	}

	if (templateSelector.includes('#multiples')){
		popOver.innerHTML = popOverFragMultiples;
	}

	// const xAxis = e.pageX;
	const yAxis = e.pageY;
	popOver.style.position = 'absolute';
	popOver.style.left = `1rem`;
	popOver.style.top = `${yAxis + 16}px`;

	// if (templateSelector === '#icn-1'){
	// 	popOver.innerHTML = popOverFragIcn01;
	// } else if (templateSelector === '#icn-2'){
	// 	popOver.innerHTML = popOverFragIcn02;
	// } else if (templateSelector === '#icn-3'){
	// 	popOver.innerHTML = popOverFragIcn03;
	// }

	const closePopover = popOver.querySelector('.close-popover');
	closePopover.addEventListener('click', destroyPopover)
	popOver.classList.toggle('show');
	e.preventDefault();
}

function destroyPopover(){
	const currPop = document.querySelector('.popover')
	if (currPop){
		document.body.removeChild(currPop);
	}
}


// POPOVERS //
// byline popovers
const popLinks = document.querySelectorAll('.byline a');
const popLinksArray = [...popLinks]
// popLinksArray.forEach( popLink => popLink.addEventListener('click', popUpAction));
popLinksArray.forEach( popLink => popLink.addEventListener('click', createPopOver));


// all popovers
function popUpAction(e){

	const popOver = document.createElement('div');
	popOver.classList.add('popover');
	document.body.appendChild(popOver)

	const templateSelector = this.getAttribute('href');
	const linkCoords = this.getBoundingClientRect();
	const coords = {
		bottom: linkCoords.bottom + window.scrollY,
		left: linkCoords.left + window.scrollX
	}
	popOver.style.position = 'absolute'
	popOver.style.top = `${coords.bottom + 4}px`; 

	let mql = window.matchMedia('(min-width: 760px)');

	if (mql.matches) {
		popOver.style.left = `${coords.left}px`;
	} else {
		popOver.style.left = `1rem`;
	}

	if (templateSelector === '#multiples'){
		popOver.innerHTML = popOverFragMultiples;
	} else if (templateSelector === '#single'){
		popOver.innerHTML = popOverFrag;
	} else if (templateSelector === '#icn-1'){
		popOver.innerHTML = popOverFragIcn01;
	} else if (templateSelector === '#icn-2'){
		popOver.innerHTML = popOverFragIcn02;
	} else if (templateSelector === '#icn-3'){
		popOver.innerHTML = popOverFragIcn03;
	}

	popOver.classList.toggle('show');

	const tempVar = document.querySelector('.popover__content a');
	tempVar.addEventListener('click', () => {
		scrollIt(
			document.querySelector('#main-certifications-disclosures'),
			300,
			'easeOutQuad',
			() => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
			)
	});

	const closePopover = popOver.querySelector('.close-popover');
	closePopover.addEventListener('click', function(){
		popOver.classList.remove('show');
		document.body.removeChild(popOver);
	})
	e.preventDefault();
}





// content switcher for show
const switchlink = document.querySelector('.switch')
const switchh1 = document.querySelector('.switch-h1')
const switchh2 = document.querySelector('.switch-h2')
const switchlede = document.querySelector('.switch-lede')
const switchToc = document.querySelector('.switch-cont')
const htmlRoot = document.querySelector('html')

switchToc.style.display = 'none'

if(switchh2){
	switchh2.style.display = 'none'
	switchh1.style.display = 'none'
	switchlede.style.display = 'none'
}

function switcheroo(){
	console.log('test switcheroo')
	htmlRoot.classList.add('in-chapter') // add root class
	switchlink.parentNode.classList.toggle('active')

	switchh1.innerHTML = 'Focus'
	switchToc.style.display = 'block'
	switchh2.style.display = 'block'
	switchh1.style.display = 'block'
	switchlede.style.display = 'block'
	switchlede.classList.toggle('lede') 
	switchh1.classList.toggle('alt') 
	switchh2.classList.toggle('alt') 
}

// end switcher for show

// TOC activation
const toc = document.querySelector('.toc');
const toctoc = document.querySelector('.toc__toc');
const menuShow = document.querySelector('.menu-bug');
const contentHeader = document.querySelector('.content__header');
const labelHeader = document.querySelector('.trigger');
// const iconList = document.querySelector('.icon-list');
// var iconListIcons = [].slice.call(iconList.querySelectorAll('a'));

// open close toc
menuShow.addEventListener('click', activateToc);
// ?????
// labelHeader.addEventListener('click', activateToc);

function activateToc () {
	const tocCoords = toc.getBoundingClientRect();
	const topOfToc = (tocCoords.height)
	toctoc.style.top = topOfToc + 'px';
	toctoc.classList.toggle('toc__open');
}


// window.scroll functions //
// show menubar at top of page, make the icon list static

window.addEventListener('scroll', fixTop);
const tocCoords = toc.getBoundingClientRect();
const coords = { bottom: tocCoords.bottom + window.scrollY }
function fixTop(){
	if (window.scrollY > coords.bottom) {
		toc.classList.add('fix-top')
		setTimeout(function(){
			toc.classList.add('fix-top-open')
		}, 0)
	} else if(window.scrollY < coords.bottom) {
		toc.classList.remove('fix-top')
		toc.classList.remove('fix-top-open')
	}
}


// footnotes //
const fnlink = document.querySelector('.footnote-link');
const fntext = document.querySelector('.footnote-item');

if(fnlink){
	fnlink.addEventListener('click', show);
}

function show(){
	this.classList.toggle('fn-expanded');
	fntext.classList.toggle('fn-displayed');
	setTimeout(animate, 100);
}

function animate(){
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

function scrollIt(destination, duration = 200, easing = 'linear', callback) {

	const easings = {
		linear(t) {
			return t;
		},
		easeInQuad(t) {
			return t * t;
		},
		easeOutQuad(t) {
			return t * (2 - t);
		},
		easeInOutQuad(t) {
			return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
		},
		easeInCubic(t) {
			return t * t * t;
		},
		easeOutCubic(t) {
			return (--t) * t * t + 1;
		},
		easeInOutCubic(t) {
			return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
		},
		easeInQuart(t) {
			return t * t * t * t;
		},
		easeOutQuart(t) {
			return 1 - (--t) * t * t * t;
		},
		easeInOutQuart(t) {
			return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
		},
		easeInQuint(t) {
			return t * t * t * t * t;
		},
		easeOutQuint(t) {
			return 1 + (--t) * t * t * t * t;
		},
		easeInOutQuint(t) {
			return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
		}
	};

	const start = window.pageYOffset;
	const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

	const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
	const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
	const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
	const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

	if ('requestAnimationFrame' in window === false) {
		window.scroll(0, destinationOffsetToScroll);
		if (callback) {
			callback();
		}
		return;
	}

	function scroll() {
		const now = 'now' in window.performance ? performance.now() : new Date().getTime();
		const time = Math.min(1, ((now - startTime) / duration));
		const timeFunction = easings[easing](time);
		window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

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
































