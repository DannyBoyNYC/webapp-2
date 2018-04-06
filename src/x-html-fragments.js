const popOverFragDisclosure = `
<a class="close-popover" href="#0">✖︎</a>
<div class="popover__content" style="font-size: 0.875rem">
<p>This here document is intended for institutional investors and is not subject to all of the independence and disclosure standards applicable to debt research reports prepared for retail investors under U.S. FINRA Rule 2242. Barclays trades the securities covered in this report for its own account and on a discretionary basis on behalf of certain clients. Such trading interests may be contrary to the recommendations offered in this report.</p>
<p>For analyst certification(s) and important disclosures, please <a href="#main-certifications-disclosures">click here</a>.</p>
<p>Completed 12 Nov 2017, 12:00 GMT<br/>Released 14 Nov 2017, 0600 GMT</p>
</div>
`;

const popOverFrag = `
<a class="close-popover" href="#00">✖︎</a>
<div class="popover__content">
<div>
	<span class="popover__credentials">Bradley Rogoff, CFA</span>
	<span class="popover__credentials">BCI, US</span> 
	<span class="popover__credentials">High Grade Credit</span>
</div>
<ul>
<li>
<svg class="icn">
<title>Phone number</title>
<use xlink:href="#icon-phone" />
</svg>
<a href="#0">+1 (212) 526-4000</a></li>
<li>
<svg class="icn">
<title>Phone number</title>
<use xlink:href="#icon-person" />
</svg>
<a href="#0">Analyst's Page</a></li>
<li>
<svg class="icn">
<title>Phone number</title>
<use xlink:href="#icon-email" />
</svg>
<a href="#0">bradley.rogoff@barclays.com</a></li>
</ul>
</div>
`;

const popOverFragMultiples = `
<a class="close-popover" href="#00">✖︎</a>
<div class="popover__content multiple">
<div>
	<span class="popover__credentials">Bradley Rogoff, CFA</span>
	<span class="popover__credentials">BCI, US</span> 
	<span class="popover__credentials">High Grade Credit</span>
</div>
<ul>
<li>
<svg class="icn">
<title>Phone number</title>
<use xlink:href="#icon-phone" />
</svg>
<a href="#0">+1 (212) 526-4000</a></li>
<li>
<svg class="icn">
<title>Phone number</title>
<use xlink:href="#icon-person" />
</svg>
<a href="#0">Analyst's Page</a></li>
<li>
<svg class="icn">
<title>Phone number</title>
<use xlink:href="#icon-email" />
</svg>
<a href="#0">bradley.rogoff@barclays.com</a></li>
</ul>
</div>

<div class="popover__content multiple">
<div>
	<span class="popover__credentials">Bradley Rogoff, CFA</span>
	<span class="popover__credentials">BCI, US</span> 
	<span class="popover__credentials">High Grade Credit</span>
</div>
<ul>
<li>
<svg class="icn">
<title>Phone number</title>
<use xlink:href="#icon-phone" />
</svg>
<a href="#0">+1 (212) 526-4000</a></li>
<li>
<svg class="icn">
<title>Phone number</title>
<use xlink:href="#icon-person" />
</svg>
<a href="#0">Analyst's Page</a></li>
<li>
<svg class="icn">
<title>Phone number</title>
<use xlink:href="#icon-email" />
</svg>
<a href="#0">bradley.rogoff@barclays.com</a></li>
</ul>
</div>

<div class="popover__content multiple">
<div>
	<span class="popover__credentials">Bradley Rogoff, CFA</span>
	<span class="popover__credentials">BCI, US</span> 
	<span class="popover__credentials">High Grade Credit</span>
</div>
<ul>
<li>
<svg class="icn">
<title>Phone number</title>
<use xlink:href="#icon-phone" />
</svg>
<a href="#0">+1 (212) 526-4000</a></li>
<li>
<svg class="icn">
<title>Phone number</title>
<use xlink:href="#icon-person" />
</svg>
<a href="#0">Analyst's Page</a></li>
<li>
<svg class="icn">
<title>Phone number</title>
<use xlink:href="#icon-email" />
</svg>
<a href="#0">bradley.rogoff@barclays.com</a></li>
</ul>
</div>
`;


const popOverFragIcn01 = `
<a class="close-popover" href="#0">✖︎</a>
<div class="popover__content">

<div>Subscribe</div>
<ul>
<li><a href="#0">Add to Read Later</a> <input type="checkbox"> </li>
<li><a href="#0">Clippings &amp; Annotations</a>
<ul>
<li><a href="#0">Annotation 1</a></li>
<li><a href="#0">Annotation 2</a></li>
</ul>
</li>

</ul>

<div>Document Tools</div>
<ul>
<li><span class="md" aria-hidden="true" data-icon=""></span> <a href="#0">Add to Quicklist</a></li>
<li><span class="md" aria-hidden="true" data-icon=""></span> <a href="#0">Add to Briefcase</a></li>
<li><span class="md" aria-hidden="true" data-icon=""></span> <a href="#0">Email Me</a></li>
<li><span class="md" aria-hidden="true" data-icon=""></span> <a href="#0">Share</a></li>
<li><span class="md" aria-hidden="true" data-icon=""></span> <a href="#0">Subscribe Client</a></li>
<li><span class="md" aria-hidden="true" data-icon=""></span> <a href="#0">Copy Link</a></li>
</ul>

</div>

</div>
`;

const popOverFragIcn02 = `
<a class="close-popover" href="#0">✖︎</a>
<div class="popover__content">

<div>Print PDF</div>
<ul style="display: block">
<li><a><span class="md" aria-hidden="true" data-icon="&#xE001;"></span> This chapter (3 pages)</a></li>
<li><a><span class="md" aria-hidden="true" data-icon="&#xE001;"></span> US Credit Alpha (43 pages)</a></li>
</ul>
</div>
</div>
`;

const popOverFragIcn03 = `
<a class="close-popover" href="#0">✖︎</a>
<div class="popover__content">

<div>Attachments in this article</div>
<ul style="display: block">
<li> <a><span class="md" aria-hidden="true" data-icon="&#xE001;"></span> Sample PDF</a></li>
<li> <a><span class="md" aria-hidden="true" data-icon="&#xE006;"></span> Sample Power Point</a></li>
<li> <a><span class="md" aria-hidden="true" data-icon="&#xE003;"></span> Sample Word doc</a></li>
<li> <a><span class="md" aria-hidden="true" data-icon="&#xE002;"></span> Sample Excel spreadsheet</a></li>
</ul>
</div>
</div>
`;



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
