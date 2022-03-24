/** 
 * ===================================================================
 * main js
 *
 * ------------------------------------------------------------------- 
 */

const titlePerso = document.getElementById("title-perso");
const listePerso = document.getElementById("liste-perso");

titlePerso.addEventListener("click", displayOnOff);

function displayOnOff() {
	if (listePerso.style.display == "none") {
		listePerso.style.display = "contents";
	} else {
		listePerso.style.display = "none";
	}
}

if (!localStorage.getItem('P1-1main') && !localStorage.getItem('P1-2main') && !localStorage.getItem('P1-pugi')
	&& !localStorage.getItem('P1-armedist') && !localStorage.getItem('P1-discrt') && !localStorage.getItem('P1-intimi')
	&& !localStorage.getItem('P1-menso') && !localStorage.getItem('P1-resialt') && !localStorage.getItem('P1-depla')
	&& !localStorage.getItem('P1-fruit') && !localStorage.getItem('P1-hakiarm') && !localStorage.getItem('P1-hakiobs')
	&& !localStorage.getItem('P1-pv')) {
	populateStorage();
} else {
	setStyles();
}

if (!localStorage.getItem('P2-1main') && !localStorage.getItem('P2-2main') && !localStorage.getItem('P2-pugi')
	&& !localStorage.getItem('P2-armedist') && !localStorage.getItem('P2-discrt') && !localStorage.getItem('P2-intimi')
	&& !localStorage.getItem('P2-menso') && !localStorage.getItem('P2-resialt') && !localStorage.getItem('P2-depla')
	&& !localStorage.getItem('P2-fruit') && !localStorage.getItem('P2-hakiarm') && !localStorage.getItem('P2-hakiobs')
	&& !localStorage.getItem('P2-pv')) {
	populateStorage();
} else {
	setStyles();
}

if (!localStorage.getItem('P3-1main') && !localStorage.getItem('P3-2main') && !localStorage.getItem('P3-pugi')
	&& !localStorage.getItem('P3-armedist') && !localStorage.getItem('P3-discrt') && !localStorage.getItem('P3-intimi')
	&& !localStorage.getItem('P3-menso') && !localStorage.getItem('P3-resialt') && !localStorage.getItem('P3-depla')
	&& !localStorage.getItem('P3-fruit') && !localStorage.getItem('P3-hakiarm') && !localStorage.getItem('P3-hakiobs')
	&& !localStorage.getItem('P3-pv')) {
	populateStorage();
} else {
	setStyles();
}

if (!localStorage.getItem('P4-1main') && !localStorage.getItem('P4-2main') && !localStorage.getItem('P4-pugi')
	&& !localStorage.getItem('P4-armedist') && !localStorage.getItem('P4-discrt') && !localStorage.getItem('P4-intimi')
	&& !localStorage.getItem('P4-menso') && !localStorage.getItem('P4-resialt') && !localStorage.getItem('P4-depla')
	&& !localStorage.getItem('P4-fruit') && !localStorage.getItem('P4-hakiarm') && !localStorage.getItem('P4-hakiobs')
	&& !localStorage.getItem('P4-pv')) {
	populateStorage();
} else {
	setStyles();
}

if (!localStorage.getItem('P5-1main') && !localStorage.getItem('P5-2main') && !localStorage.getItem('P5-pugi')
	&& !localStorage.getItem('P5-armedist') && !localStorage.getItem('P5-discrt') && !localStorage.getItem('P5-intimi')
	&& !localStorage.getItem('P5-menso') && !localStorage.getItem('P5-resialt') && !localStorage.getItem('P5-depla')
	&& !localStorage.getItem('P5-fruit') && !localStorage.getItem('P5-hakiarm') && !localStorage.getItem('P5-hakiobs')
	&& !localStorage.getItem('P5-pv')) {
	populateStorage();
} else {
	setStyles();
}
const btnValide = document.querySelectorAll(".inputValide");
btnValide.forEach(element => {
	element.addEventListener("click", populateStorage);
});


function setStyles() {
	var P1uneMain = localStorage.getItem('P1-1main');
	document.getElementById('P1-1main').value = P1uneMain;
	var P1deuxMain = localStorage.getItem('P1-2main');
	document.getElementById('P1-2main').value = P1deuxMain;
	var P1Main = localStorage.getItem('P1-pugi');
	document.getElementById('P1-pugi').value = P1Main;
	var P1armDist = localStorage.getItem('P1-armedist');
	document.getElementById('P1-armedist').value = P1armDist;
	var P1discrt = localStorage.getItem('P1-discrt');
	document.getElementById('P1-discrt').value = P1discrt;
	var P1intimi = localStorage.getItem('P1-intimi');
	document.getElementById('P1-intimi').value = P1intimi;
	var P1menso = localStorage.getItem('P1-menso');
	document.getElementById('P1-menso').value = P1menso;
	var P1resialt = localStorage.getItem('P1-resialt');
	document.getElementById('P1-resialt').value = P1resialt;
	var P1depla = localStorage.getItem('P1-depla');
	document.getElementById('P1-depla').value = P1depla;
	var P1fruit = localStorage.getItem('P1-fruit');
	document.getElementById('P1-fruit').value = P1fruit;
	var P1hakiarm = localStorage.getItem('P1-hakiarm');
	document.getElementById('P1-hakiarm').value = P1hakiarm;
	var P1hakiobs = localStorage.getItem('P1-hakiobs');
	document.getElementById('P1-hakiobs').value = P1hakiobs;
	var P1pv = localStorage.getItem('P1-pv');
	document.getElementById('P1-pv').value = P1pv;

	/************************************************************
	* Perso 2************************************************
	*********************************************************/

	var P2uneMain = localStorage.getItem('P2-1main');
	document.getElementById('P2-1main').value = P2uneMain;
	var P2deuxMain = localStorage.getItem('P2-2main');
	document.getElementById('P2-2main').value = P2deuxMain;
	var P2Main = localStorage.getItem('P2-pugi');
	document.getElementById('P2-pugi').value = P2Main;
	var P2armDist = localStorage.getItem('P2-armedist');
	document.getElementById('P2-armedist').value = P2armDist;
	var P2discrt = localStorage.getItem('P2-discrt');
	document.getElementById('P2-discrt').value = P2discrt;
	var P2intimi = localStorage.getItem('P2-intimi');
	document.getElementById('P2-intimi').value = P2intimi;
	var P2menso = localStorage.getItem('P2-menso');
	document.getElementById('P2-menso').value = P2menso;
	var P2resialt = localStorage.getItem('P2-resialt');
	document.getElementById('P2-resialt').value = P2resialt;
	var P2depla = localStorage.getItem('P2-depla');
	document.getElementById('P2-depla').value = P2depla;
	var P2fruit = localStorage.getItem('P2-fruit');
	document.getElementById('P2-fruit').value = P2fruit;
	var P2hakiarm = localStorage.getItem('P2-hakiarm');
	document.getElementById('P2-hakiarm').value = P2hakiarm;
	var P2hakiobs = localStorage.getItem('P2-hakiobs');
	document.getElementById('P2-hakiobs').value = P2hakiobs;
	var P2pv = localStorage.getItem('P2-pv');
	document.getElementById('P2-pv').value = P2pv;

	/************************************************************
	* Perso 3************************************************
	*********************************************************/

	var P3uneMain = localStorage.getItem('P3-1main');
	document.getElementById('P3-1main').value = P3uneMain;
	var P3deuxMain = localStorage.getItem('P3-2main');
	document.getElementById('P3-2main').value = P3deuxMain;
	var P3Main = localStorage.getItem('P3-pugi');
	document.getElementById('P3-pugi').value = P3Main;
	var P3armDist = localStorage.getItem('P3-armedist');
	document.getElementById('P3-armedist').value = P3armDist;
	var P3discrt = localStorage.getItem('P3-discrt');
	document.getElementById('P3-discrt').value = P3discrt;
	var P3intimi = localStorage.getItem('P3-intimi');
	document.getElementById('P3-intimi').value = P3intimi;
	var P3menso = localStorage.getItem('P3-menso');
	document.getElementById('P3-menso').value = P3menso;
	var P3resialt = localStorage.getItem('P3-resialt');
	document.getElementById('P3-resialt').value = P3resialt;
	var P3depla = localStorage.getItem('P3-depla');
	document.getElementById('P3-depla').value = P3depla;
	var P3fruit = localStorage.getItem('P3-fruit');
	document.getElementById('P3-fruit').value = P3fruit;
	var P3hakiarm = localStorage.getItem('P3-hakiarm');
	document.getElementById('P3-hakiarm').value = P3hakiarm;
	var P3hakiobs = localStorage.getItem('P3-hakiobs');
	document.getElementById('P3-hakiobs').value = P3hakiobs;
	var P3pv = localStorage.getItem('P3-pv');
	document.getElementById('P3-pv').value = P3pv;

	/************************************************************
	* Perso 4************************************************
	*********************************************************/

	var P4uneMain = localStorage.getItem('P4-1main');
	document.getElementById('P4-1main').value = P4uneMain;
	var P4deuxMain = localStorage.getItem('P4-2main');
	document.getElementById('P4-2main').value = P4deuxMain;
	var P4Main = localStorage.getItem('P4-pugi');
	document.getElementById('P4-pugi').value = P4Main;
	var P4armDist = localStorage.getItem('P4-armedist');
	document.getElementById('P4-armedist').value = P4armDist;
	var P4discrt = localStorage.getItem('P4-discrt');
	document.getElementById('P4-discrt').value = P4discrt;
	var P4intimi = localStorage.getItem('P4-intimi');
	document.getElementById('P4-intimi').value = P4intimi;
	var P4menso = localStorage.getItem('P4-menso');
	document.getElementById('P4-menso').value = P4menso;
	var P4resialt = localStorage.getItem('P4-resialt');
	document.getElementById('P4-resialt').value = P4resialt;
	var P4depla = localStorage.getItem('P4-depla');
	document.getElementById('P4-depla').value = P4depla;
	var P4fruit = localStorage.getItem('P4-fruit');
	document.getElementById('P4-fruit').value = P4fruit;
	var P4hakiarm = localStorage.getItem('P4-hakiarm');
	document.getElementById('P4-hakiarm').value = P4hakiarm;
	var P4hakiobs = localStorage.getItem('P4-hakiobs');
	document.getElementById('P4-hakiobs').value = P4hakiobs;
	var P4pv = localStorage.getItem('P4-pv');
	document.getElementById('P4-pv').value = P4pv;

	/************************************************************
	* Perso 5************************************************
	*********************************************************/

	var P5uneMain = localStorage.getItem('P5-1main');
	document.getElementById('P5-1main').value = P5uneMain;
	var P5deuxMain = localStorage.getItem('P5-2main');
	document.getElementById('P5-2main').value = P5deuxMain;
	var P5Main = localStorage.getItem('P5-pugi');
	document.getElementById('P5-pugi').value = P5Main;
	var P5armDist = localStorage.getItem('P5-armedist');
	document.getElementById('P5-armedist').value = P5armDist;
	var P5discrt = localStorage.getItem('P5-discrt');
	document.getElementById('P5-discrt').value = P5discrt;
	var P5intimi = localStorage.getItem('P5-intimi');
	document.getElementById('P5-intimi').value = P5intimi;
	var P5menso = localStorage.getItem('P5-menso');
	document.getElementById('P5-menso').value = P5menso;
	var P5resialt = localStorage.getItem('P5-resialt');
	document.getElementById('P5-resialt').value = P5resialt;
	var P5depla = localStorage.getItem('P5-depla');
	document.getElementById('P5-depla').value = P5depla;
	var P5fruit = localStorage.getItem('P5-fruit');
	document.getElementById('P5-fruit').value = P5fruit;
	var P5hakiarm = localStorage.getItem('P5-hakiarm');
	document.getElementById('P5-hakiarm').value = P5hakiarm;
	var P5hakiobs = localStorage.getItem('P5-hakiobs');
	document.getElementById('P5-hakiobs').value = P5hakiobs;
	var P5pv = localStorage.getItem('P5-pv');
	document.getElementById('P5-pv').value = P5pv;
}

function populateStorage() {
	localStorage.setItem('P1-1main', document.getElementById('P1-1main').value);
	localStorage.setItem('P1-2main', document.getElementById('P1-2main').value);
	localStorage.setItem('P1-pugi', document.getElementById('P1-pugi').value);
	localStorage.setItem('P1-armedist', document.getElementById('P1-armedist').value);
	localStorage.setItem('P1-discrt', document.getElementById('P1-discrt').value);
	localStorage.setItem('P1-intimi', document.getElementById('P1-intimi').value);
	localStorage.setItem('P1-menso', document.getElementById('P1-menso').value);
	localStorage.setItem('P1-resialt', document.getElementById('P1-resialt').value);
	localStorage.setItem('P1-depla', document.getElementById('P1-depla').value);
	localStorage.setItem('P1-fruit', document.getElementById('P1-fruit').value);
	localStorage.setItem('P1-hakiarm', document.getElementById('P1-hakiarm').value);
	localStorage.setItem('P1-hakiobs', document.getElementById('P1-hakiobs').value);
	localStorage.setItem('P1-pv', document.getElementById('P1-pv').value);
	/************************************************************
	* Perso 2************************************************
	*********************************************************/

	localStorage.setItem('P2-1main', document.getElementById('P2-1main').value);
	localStorage.setItem('P2-2main', document.getElementById('P2-2main').value);
	localStorage.setItem('P2-pugi', document.getElementById('P2-pugi').value);
	localStorage.setItem('P2-armedist', document.getElementById('P2-armedist').value);
	localStorage.setItem('P2-discrt', document.getElementById('P2-discrt').value);
	localStorage.setItem('P2-intimi', document.getElementById('P2-intimi').value);
	localStorage.setItem('P2-menso', document.getElementById('P2-menso').value);
	localStorage.setItem('P2-resialt', document.getElementById('P2-resialt').value);
	localStorage.setItem('P2-depla', document.getElementById('P2-depla').value);
	localStorage.setItem('P2-fruit', document.getElementById('P2-fruit').value);
	localStorage.setItem('P2-hakiarm', document.getElementById('P2-hakiarm').value);
	localStorage.setItem('P2-hakiobs', document.getElementById('P2-hakiobs').value);
	localStorage.setItem('P2-pv', document.getElementById('P2-pv').value);

	/************************************************************
	* Perso 3************************************************
	*********************************************************/

	localStorage.setItem('P3-1main', document.getElementById('P3-1main').value);
	localStorage.setItem('P3-2main', document.getElementById('P3-2main').value);
	localStorage.setItem('P3-pugi', document.getElementById('P3-pugi').value);
	localStorage.setItem('P3-armedist', document.getElementById('P3-armedist').value);
	localStorage.setItem('P3-discrt', document.getElementById('P3-discrt').value);
	localStorage.setItem('P3-intimi', document.getElementById('P3-intimi').value);
	localStorage.setItem('P3-menso', document.getElementById('P3-menso').value);
	localStorage.setItem('P3-resialt', document.getElementById('P3-resialt').value);
	localStorage.setItem('P3-depla', document.getElementById('P3-depla').value);
	localStorage.setItem('P3-fruit', document.getElementById('P3-fruit').value);
	localStorage.setItem('P3-hakiarm', document.getElementById('P3-hakiarm').value);
	localStorage.setItem('P3-hakiobs', document.getElementById('P3-hakiobs').value);
	localStorage.setItem('P3-pv', document.getElementById('P3-pv').value);

	/************************************************************
	* Perso 4************************************************
	*********************************************************/

	localStorage.setItem('P4-1main', document.getElementById('P4-1main').value);
	localStorage.setItem('P4-2main', document.getElementById('P4-2main').value);
	localStorage.setItem('P4-pugi', document.getElementById('P4-pugi').value);
	localStorage.setItem('P4-armedist', document.getElementById('P4-armedist').value);
	localStorage.setItem('P4-discrt', document.getElementById('P4-discrt').value);
	localStorage.setItem('P4-intimi', document.getElementById('P4-intimi').value);
	localStorage.setItem('P4-menso', document.getElementById('P4-menso').value);
	localStorage.setItem('P4-resialt', document.getElementById('P4-resialt').value);
	localStorage.setItem('P4-depla', document.getElementById('P4-depla').value);
	localStorage.setItem('P4-fruit', document.getElementById('P4-fruit').value);
	localStorage.setItem('P4-hakiarm', document.getElementById('P4-hakiarm').value);
	localStorage.setItem('P4-hakiobs', document.getElementById('P4-hakiobs').value);
	localStorage.setItem('P4-pv', document.getElementById('P4-pv').value);

	/************************************************************
	* Perso 5************************************************
	*********************************************************/

	localStorage.setItem('P5-1main', document.getElementById('P5-1main').value);
	localStorage.setItem('P5-2main', document.getElementById('P5-2main').value);
	localStorage.setItem('P5-pugi', document.getElementById('P5-pugi').value);
	localStorage.setItem('P5-armedist', document.getElementById('P5-armedist').value);
	localStorage.setItem('P5-discrt', document.getElementById('P5-discrt').value);
	localStorage.setItem('P5-intimi', document.getElementById('P5-intimi').value);
	localStorage.setItem('P5-menso', document.getElementById('P5-menso').value);
	localStorage.setItem('P5-resialt', document.getElementById('P5-resialt').value);
	localStorage.setItem('P5-depla', document.getElementById('P5-depla').value);
	localStorage.setItem('P5-fruit', document.getElementById('P5-fruit').value);
	localStorage.setItem('P5-hakiarm', document.getElementById('P5-hakiarm').value);
	localStorage.setItem('P5-hakiobs', document.getElementById('P5-hakiobs').value);
	localStorage.setItem('P5-pv', document.getElementById('P5-pv').value);

	setStyles();
}

(function ($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */
	$(window).load(function () {

		// will first fade out the loading animation 
		$("#loader").fadeOut("slow", function () {

			// will fade out the whole DIV that covers the website.
			$("#preloader").delay(300).fadeOut("slow");

		});

	})


	/*---------------------------------------------------- */
	/* FitText Settings
	------------------------------------------------------ */
	setTimeout(function () {

		$('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });

	}, 100);


	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */
	$(".fluid-video-wrapper").fitVids();


	/*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */
	$("#owl-slider").owlCarousel({
		navigation: false,
		pagination: true,
		itemsCustom: [
			[0, 1],
			[700, 2],
			[960, 3]
		],
		navigationText: false
	});


	/*----------------------------------------------------- */
	/* Alert Boxes
		------------------------------------------------------- */
	$('.alert-box').on('click', '.close', function () {
		$(this).parent().fadeOut(500);
	});


	/*----------------------------------------------------- */
	/* Stat Counter
		------------------------------------------------------- */
	var statSection = $("#stats"),
		stats = $(".stat-count");

	statSection.waypoint({

		handler: function (direction) {

			if (direction === "down") {

				stats.each(function () {
					var $this = $(this);

					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 4000,
						easing: 'swing',
						step: function (curValue) {
							$this.text(Math.ceil(curValue));
						}
					});
				});

			}

			// trigger once only
			this.destroy();

		},

		offset: "90%"

	});


	/*---------------------------------------------------- */
	/*	Masonry
	------------------------------------------------------ */
	var containerProjects = $('#folio-wrapper');

	containerProjects.imagesLoaded(function () {

		containerProjects.masonry({
			itemSelector: '.folio-item',
			resize: true
		});

	});


	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
	$('.item-wrap a').magnificPopup({

		type: 'inline',
		fixedContentPos: false,
		removalDelay: 300,
		showCloseBtn: false,
		mainClass: 'mfp-fade'

	});

	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

})(jQuery);