import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock/lib/bodyScrollLock.es6';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
	once: false
});

function mobileMenu() {

	let hamburger = document.getElementById('hamburger-btn');

	let headerNav = document.getElementById('header-nav');

	let state = false;

	hamburger.addEventListener('click', function () {
		if (state === false) {
			openMenu();
		} else {
			closeMenu();
		}
	});


	function openMenu() {
		disableBodyScroll(headerNav);
		headerNav.style.transition = '0.4s ease-in 0s';
		setTimeout(function () {
			headerNav.classList.add('menu-open');
		}, 200);
		hamburger.classList.add('active');
		state = true;
	}

	function closeMenu() {
		headerNav.style.transition = '0.4s ease-in 0s';
		setTimeout(function () {
			headerNav.classList.remove('menu-open');
		}, 200);
		hamburger.classList.remove('active');
		state = false;
		enableBodyScroll(headerNav);
	}
}

// document.body.onload = function () {
// 	setTimeout(function () {
// 		var preloader = document.getElementById("preloader");
// 		if (!preloader.classList.contains("done")) {
// 			preloader.classList.add("done");
// 		}
// 	}, 3000);
// };


mobileMenu();


