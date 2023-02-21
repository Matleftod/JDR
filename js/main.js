/** 
 * ===================================================================
 * main js
 *
 * ------------------------------------------------------------------- 
 */

document.addEventListener('DOMContentLoaded', appelleFunction);

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
	&& !localStorage.getItem('P1-menso') && !localStorage.getItem('P1-connai') && !localStorage.getItem('P1-styspe') && !localStorage.getItem('P1-intel')
	&& !localStorage.getItem('P1-perce') && !localStorage.getItem('P1-nego') && !localStorage.getItem('P1-char') && !localStorage.getItem('P1-volon') 
	&& !localStorage.getItem('P1-rois') && !localStorage.getItem('P1-hakiarm') && !localStorage.getItem('P1-hakiobs')
	&& !localStorage.getItem('P1-pv') && !localStorage.getItem('P1-life')) {
	populateStorage();
} else {
	setStyles();
}

if (!localStorage.getItem('P2-1main') && !localStorage.getItem('P2-2main') && !localStorage.getItem('P2-pugi')
	&& !localStorage.getItem('P2-armedist') && !localStorage.getItem('P2-discrt') && !localStorage.getItem('P2-intimi')
	&& !localStorage.getItem('P2-menso') && !localStorage.getItem('P2-connai') && !localStorage.getItem('P2-styspe') && !localStorage.getItem('P2-intel')
	&& !localStorage.getItem('P2-perce') && !localStorage.getItem('P2-nego') && !localStorage.getItem('P2-char') && !localStorage.getItem('P2-volon') 
	&& !localStorage.getItem('P2-rois') && !localStorage.getItem('P2-hakiarm') && !localStorage.getItem('P2-hakiobs')
	&& !localStorage.getItem('P2-pv') && !localStorage.getItem('P2-life')) {
	populateStorage();
} else {
	setStyles();
}

if (!localStorage.getItem('P3-1main') && !localStorage.getItem('P3-2main') && !localStorage.getItem('P3-pugi')
	&& !localStorage.getItem('P3-armedist') && !localStorage.getItem('P3-discrt') && !localStorage.getItem('P3-intimi')
	&& !localStorage.getItem('P3-menso') && !localStorage.getItem('P3-connai') && !localStorage.getItem('P3-styspe') && !localStorage.getItem('P3-intel')
	&& !localStorage.getItem('P3-perce') && !localStorage.getItem('P3-nego') && !localStorage.getItem('P3-char') && !localStorage.getItem('P3-volon') 
	&& !localStorage.getItem('P3-rois') && !localStorage.getItem('P3-hakiarm') && !localStorage.getItem('P3-hakiobs')
	&& !localStorage.getItem('P3-pv') && !localStorage.getItem('P3-life')) {
	populateStorage();
} else {
	setStyles();
}

if (!localStorage.getItem('P4-1main') && !localStorage.getItem('P4-2main') && !localStorage.getItem('P4-pugi')
	&& !localStorage.getItem('P4-armedist') && !localStorage.getItem('P4-discrt') && !localStorage.getItem('P4-intimi')
	&& !localStorage.getItem('P4-menso') && !localStorage.getItem('P4-connai') && !localStorage.getItem('P4-styspe') && !localStorage.getItem('P4-intel')
	&& !localStorage.getItem('P4-perce') && !localStorage.getItem('P4-nego') && !localStorage.getItem('P4-char') && !localStorage.getItem('P4-volon') 
	&& !localStorage.getItem('P4-rois') && !localStorage.getItem('P4-hakiarm') && !localStorage.getItem('P4-hakiobs')
	&& !localStorage.getItem('P4-pv') && !localStorage.getItem('P4-life')) {
	populateStorage();
} else {
	setStyles();
}

if (!localStorage.getItem('P5-1main') && !localStorage.getItem('P5-2main') && !localStorage.getItem('P5-pugi')
	&& !localStorage.getItem('P5-armedist') && !localStorage.getItem('P5-discrt') && !localStorage.getItem('P5-intimi')
	&& !localStorage.getItem('P5-menso') && !localStorage.getItem('P5-connai') && !localStorage.getItem('P5-styspe') && !localStorage.getItem('P5-intel')
	&& !localStorage.getItem('P5-perce') && !localStorage.getItem('P5-nego') && !localStorage.getItem('P5-char') && !localStorage.getItem('P5-volon') 
	&& !localStorage.getItem('P5-rois') && !localStorage.getItem('P5-hakiarm') && !localStorage.getItem('P5-hakiobs')
	&& !localStorage.getItem('P5-pv') && !localStorage.getItem('P5-life')) {
	populateStorage();
} else {
	setStyles();
}
const btnValide = document.querySelectorAll(".inputValide");
btnValide.forEach(element => {
	element.addEventListener("click", appelleFunction);
});

function appelleFunction() {
	populateStorage();
	updateMaxLife();
	updateBarreLife();
}


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
	var P1connai = localStorage.getItem('P1-connai');
	document.getElementById('P1-connai').value = P1connai;
	var P1styspe = localStorage.getItem('P1-styspe');
	document.getElementById('P1-styspe').value = P1styspe;
	var P1intel = localStorage.getItem('P1-intel');
	document.getElementById('P1-intel').value = P1intel;
	var P1perce = localStorage.getItem('P1-perce');
	document.getElementById('P1-perce').value = P1perce;
	var P1nego = localStorage.getItem('P1-nego');
	document.getElementById('P1-nego').value = P1nego;
	var P1char = localStorage.getItem('P1-char');
	document.getElementById('P1-char').value = P1char;
	var P1volon = localStorage.getItem('P1-volon');
	document.getElementById('P1-volon').value = P1volon;
	var P1rois = localStorage.getItem('P1-rois');
	document.getElementById('P1-rois').value = P1rois;
	var P1hakiarm = localStorage.getItem('P1-hakiarm');
	document.getElementById('P1-hakiarm').value = P1hakiarm;
	var P1hakiobs = localStorage.getItem('P1-hakiobs');
	document.getElementById('P1-hakiobs').value = P1hakiobs;
	var P1pv = localStorage.getItem('P1-pv');
	document.getElementById('P1-pv').value = P1pv;
	var P1life = localStorage.getItem('P1-life');
	document.getElementById('P1-life').value = P1life;

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
	var P2connai = localStorage.getItem('P2-connai');
	document.getElementById('P2-connai').value = P2connai;
	var P2styspe = localStorage.getItem('P2-styspe');
	document.getElementById('P2-styspe').value = P2styspe;
	var P2intel = localStorage.getItem('P2-intel');
	document.getElementById('P2-intel').value = P2intel;
	var P2perce = localStorage.getItem('P2-perce');
	document.getElementById('P2-perce').value = P2perce;
	var P2nego = localStorage.getItem('P2-nego');
	document.getElementById('P2-nego').value = P2nego;
	var P2char = localStorage.getItem('P2-char');
	document.getElementById('P2-char').value = P2char;
	var P2volon = localStorage.getItem('P2-volon');
	document.getElementById('P2-volon').value = P2volon;
	var P2rois = localStorage.getItem('P2-rois');
	document.getElementById('P2-rois').value = P2rois;
	var P2hakiarm = localStorage.getItem('P2-hakiarm');
	document.getElementById('P2-hakiarm').value = P2hakiarm;
	var P2hakiobs = localStorage.getItem('P2-hakiobs');
	document.getElementById('P2-hakiobs').value = P2hakiobs;
	var P2pv = localStorage.getItem('P2-pv');
	document.getElementById('P2-pv').value = P2pv;
	var P2life = localStorage.getItem('P2-life');
	document.getElementById('P2-life').value = P2life;

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
	var P3connai = localStorage.getItem('P3-connai');
	document.getElementById('P3-connai').value = P3connai;
	var P3styspe = localStorage.getItem('P3-styspe');
	document.getElementById('P3-styspe').value = P3styspe;
	var P3intel = localStorage.getItem('P3-intel');
	document.getElementById('P3-intel').value = P3intel;
	var P3perce = localStorage.getItem('P3-perce');
	document.getElementById('P3-perce').value = P3perce;
	var P3nego = localStorage.getItem('P3-nego');
	document.getElementById('P3-nego').value = P3nego;
	var P3char = localStorage.getItem('P3-char');
	document.getElementById('P3-char').value = P3char;
	var P3volon = localStorage.getItem('P3-volon');
	document.getElementById('P3-volon').value = P3volon;
	var P3rois = localStorage.getItem('P3-rois');
	document.getElementById('P3-rois').value = P3rois;
	var P3hakiarm = localStorage.getItem('P3-hakiarm');
	document.getElementById('P3-hakiarm').value = P3hakiarm;
	var P3hakiobs = localStorage.getItem('P3-hakiobs');
	document.getElementById('P3-hakiobs').value = P3hakiobs;
	var P3pv = localStorage.getItem('P3-pv');
	document.getElementById('P3-pv').value = P3pv;
	var P3life = localStorage.getItem('P3-life');
	document.getElementById('P3-life').value = P3life;

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
	var P4connai = localStorage.getItem('P4-connai');
	document.getElementById('P4-connai').value = P4connai;
	var P4styspe = localStorage.getItem('P4-styspe');
	document.getElementById('P4-styspe').value = P4styspe;
	var P4intel = localStorage.getItem('P4-intel');
	document.getElementById('P4-intel').value = P4intel;
	var P4perce = localStorage.getItem('P4-perce');
	document.getElementById('P4-perce').value = P4perce;
	var P4nego = localStorage.getItem('P4-nego');
	document.getElementById('P4-nego').value = P4nego;
	var P4char = localStorage.getItem('P4-char');
	document.getElementById('P4-char').value = P4char;
	var P4volon = localStorage.getItem('P4-volon');
	document.getElementById('P4-volon').value = P4volon;
	var P4rois = localStorage.getItem('P4-rois');
	document.getElementById('P4-rois').value = P4rois;
	var P4hakiarm = localStorage.getItem('P4-hakiarm');
	document.getElementById('P4-hakiarm').value = P4hakiarm;
	var P4hakiobs = localStorage.getItem('P4-hakiobs');
	document.getElementById('P4-hakiobs').value = P4hakiobs;
	var P4pv = localStorage.getItem('P4-pv');
	document.getElementById('P4-pv').value = P4pv;
	var P4life = localStorage.getItem('P4-life');
	document.getElementById('P4-life').value = P4life;

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
	var P5connai = localStorage.getItem('P5-connai');
	document.getElementById('P5-connai').value = P5connai;
	var P5styspe = localStorage.getItem('P5-styspe');
	document.getElementById('P5-styspe').value = P5styspe;
	var P5intel = localStorage.getItem('P5-intel');
	document.getElementById('P5-intel').value = P5intel;
	var P5perce = localStorage.getItem('P5-perce');
	document.getElementById('P5-perce').value = P5perce;
	var P5nego = localStorage.getItem('P5-nego');
	document.getElementById('P5-nego').value = P5nego;
	var P5char = localStorage.getItem('P5-char');
	document.getElementById('P5-char').value = P5char;
	var P5volon = localStorage.getItem('P5-volon');
	document.getElementById('P5-volon').value = P5volon;
	var P5rois = localStorage.getItem('P5-rois');
	document.getElementById('P5-rois').value = P5rois;
	var P5hakiarm = localStorage.getItem('P5-hakiarm');
	document.getElementById('P5-hakiarm').value = P5hakiarm;
	var P5hakiobs = localStorage.getItem('P5-hakiobs');
	document.getElementById('P5-hakiobs').value = P5hakiobs;
	var P5pv = localStorage.getItem('P5-pv');
	document.getElementById('P5-pv').value = P5pv;
	var P5life = localStorage.getItem('P5-life');
	document.getElementById('P5-life').value = P5life;
}

function populateStorage() {
	localStorage.setItem('P1-1main', document.getElementById('P1-1main').value);
	localStorage.setItem('P1-2main', document.getElementById('P1-2main').value);
	localStorage.setItem('P1-pugi', document.getElementById('P1-pugi').value);
	localStorage.setItem('P1-armedist', document.getElementById('P1-armedist').value);
	localStorage.setItem('P1-discrt', document.getElementById('P1-discrt').value);
	localStorage.setItem('P1-intimi', document.getElementById('P1-intimi').value);
	localStorage.setItem('P1-menso', document.getElementById('P1-menso').value);
	localStorage.setItem('P1-connai', document.getElementById('P1-connai').value);
	localStorage.setItem('P1-styspe', document.getElementById('P1-styspe').value);
	localStorage.setItem('P1-intel', document.getElementById('P1-intel').value);
	localStorage.setItem('P1-perce', document.getElementById('P1-perce').value);
	localStorage.setItem('P1-nego', document.getElementById('P1-nego').value);
	localStorage.setItem('P1-char', document.getElementById('P1-char').value);
	localStorage.setItem('P1-volon', document.getElementById('P1-volon').value);
	localStorage.setItem('P1-rois', document.getElementById('P1-rois').value);
	localStorage.setItem('P1-hakiarm', document.getElementById('P1-hakiarm').value);
	localStorage.setItem('P1-hakiobs', document.getElementById('P1-hakiobs').value);
	localStorage.setItem('P1-pv', document.getElementById('P1-pv').value);
	localStorage.setItem('P1-life', document.getElementById('P1-life').value);
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
	localStorage.setItem('P2-connai', document.getElementById('P2-connai').value);
	localStorage.setItem('P2-styspe', document.getElementById('P2-styspe').value);
	localStorage.setItem('P2-intel', document.getElementById('P2-intel').value);
	localStorage.setItem('P2-perce', document.getElementById('P2-perce').value);
	localStorage.setItem('P2-nego', document.getElementById('P2-nego').value);
	localStorage.setItem('P2-char', document.getElementById('P2-char').value);
	localStorage.setItem('P2-volon', document.getElementById('P2-volon').value);
	localStorage.setItem('P2-rois', document.getElementById('P2-rois').value);
	localStorage.setItem('P2-hakiarm', document.getElementById('P2-hakiarm').value);
	localStorage.setItem('P2-hakiobs', document.getElementById('P2-hakiobs').value);
	localStorage.setItem('P2-pv', document.getElementById('P2-pv').value);
	localStorage.setItem('P2-life', document.getElementById('P2-life').value);

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
	localStorage.setItem('P3-connai', document.getElementById('P3-connai').value);
	localStorage.setItem('P3-styspe', document.getElementById('P3-styspe').value);
	localStorage.setItem('P3-intel', document.getElementById('P3-intel').value);
	localStorage.setItem('P3-perce', document.getElementById('P3-perce').value);
	localStorage.setItem('P3-nego', document.getElementById('P3-nego').value);
	localStorage.setItem('P3-char', document.getElementById('P3-char').value);
	localStorage.setItem('P3-volon', document.getElementById('P3-volon').value);
	localStorage.setItem('P3-rois', document.getElementById('P3-rois').value);
	localStorage.setItem('P3-hakiarm', document.getElementById('P3-hakiarm').value);
	localStorage.setItem('P3-hakiobs', document.getElementById('P3-hakiobs').value);
	localStorage.setItem('P3-pv', document.getElementById('P3-pv').value);
	localStorage.setItem('P3-life', document.getElementById('P3-life').value);

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
	localStorage.setItem('P4-connai', document.getElementById('P4-connai').value);
	localStorage.setItem('P4-styspe', document.getElementById('P4-styspe').value);
	localStorage.setItem('P4-intel', document.getElementById('P4-intel').value);
	localStorage.setItem('P4-perce', document.getElementById('P4-perce').value);
	localStorage.setItem('P4-nego', document.getElementById('P4-nego').value);
	localStorage.setItem('P4-char', document.getElementById('P4-char').value);
	localStorage.setItem('P4-volon', document.getElementById('P4-volon').value);
	localStorage.setItem('P4-rois', document.getElementById('P4-rois').value);
	localStorage.setItem('P4-hakiarm', document.getElementById('P4-hakiarm').value);
	localStorage.setItem('P4-hakiobs', document.getElementById('P4-hakiobs').value);
	localStorage.setItem('P4-pv', document.getElementById('P4-pv').value);
	localStorage.setItem('P4-life', document.getElementById('P4-life').value);

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
	localStorage.setItem('P5-connai', document.getElementById('P5-connai').value);
	localStorage.setItem('P5-styspe', document.getElementById('P5-styspe').value);
	localStorage.setItem('P5-intel', document.getElementById('P5-intel').value);
	localStorage.setItem('P5-perce', document.getElementById('P5-perce').value);
	localStorage.setItem('P5-nego', document.getElementById('P5-nego').value);
	localStorage.setItem('P5-char', document.getElementById('P5-char').value);
	localStorage.setItem('P5-volon', document.getElementById('P5-volon').value);
	localStorage.setItem('P5-rois', document.getElementById('P5-rois').value);
	localStorage.setItem('P5-hakiarm', document.getElementById('P5-hakiarm').value);
	localStorage.setItem('P5-hakiobs', document.getElementById('P5-hakiobs').value);
	localStorage.setItem('P5-pv', document.getElementById('P5-pv').value);
	localStorage.setItem('P5-life', document.getElementById('P5-life').value);

	setStyles();
}

const txtSucces = document.querySelectorAll(".txtSucces");
const txtEchec = document.querySelectorAll(".txtEchec");
const btnSucces = document.querySelectorAll(".btnSucces");
const btnEchec = document.querySelectorAll(".btnEchec");

btnSucces[0].addEventListener("click", displaySucces);
function displaySucces() {
	txtSucces[0].classList.remove("displayNone");
	setTimeout(function fadeOut() {
		txtSucces[0].classList.add("fadeOut");
	}, 5000);
	setTimeout(function displayNone() {
		txtSucces[0].classList.add("displayNone");
		txtSucces[0].classList.remove("fadeOut");
	}, 9500);
}
btnEchec[0].addEventListener("click", displayEchec);
function displayEchec() {
	txtEchec[0].classList.remove("displayNone");
	setTimeout(function fadeOut() {
		txtEchec[0].classList.add("fadeOut");
	}, 5000);
	setTimeout(function displayNone() {
		txtEchec[0].classList.add("displayNone");
		txtEchec[0].classList.remove("fadeOut");
	}, 9500);
}

const P1maxLife = document.getElementById("P1-maxlife");
const P2maxLife = document.getElementById("P2-maxlife");
const P3maxLife = document.getElementById("P3-maxlife");
const P4maxLife = document.getElementById("P4-maxlife");
const P5maxLife = document.getElementById("P5-maxlife");
function updateMaxLife() {
	P1maxLife.innerHTML = localStorage.getItem('P1-pv');
	P2maxLife.innerHTML = localStorage.getItem('P2-pv');
	P3maxLife.innerHTML = localStorage.getItem('P3-pv');
	P4maxLife.innerHTML = localStorage.getItem('P4-pv');
	P5maxLife.innerHTML = localStorage.getItem('P5-pv');
}

function updateBarreLife() {
	const P1barre = document.getElementById("P1-barre");
	let P1lifepurcent = (localStorage.getItem('P1-life') / localStorage.getItem('P1-pv')) * 100 + "%";
	const P2barre = document.getElementById("P2-barre");
	let P2lifepurcent = (localStorage.getItem('P2-life') / localStorage.getItem('P2-pv')) * 100 + "%";
	const P3barre = document.getElementById("P3-barre");
	let P3lifepurcent = (localStorage.getItem('P3-life') / localStorage.getItem('P3-pv')) * 100 + "%";
	const P4barre = document.getElementById("P4-barre");
	let P4lifepurcent = (localStorage.getItem('P4-life') / localStorage.getItem('P4-pv')) * 100 + "%";
	const P5barre = document.getElementById("P5-barre");
	let P5lifepurcent = (localStorage.getItem('P5-life') / localStorage.getItem('P5-pv')) * 100 + "%";

	P1barre.style.width = P1lifepurcent;
	P2barre.style.width = P2lifepurcent;
	P3barre.style.width = P3lifepurcent;
	P4barre.style.width = P4lifepurcent;
	P5barre.style.width = P5lifepurcent;
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