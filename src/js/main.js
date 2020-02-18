import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock/lib/bodyScrollLock.es6';


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
		headerNav.style.transition = '0.4s ease 0s';
		setTimeout(function () {
			headerNav.classList.add('menu-open');
		}, 500);
		hamburger.classList.add('active');
		state = true;
		// setTimeout(function () {
		// 	headerNav.removeAttribute('style');
		// }, 400);
	}

	function closeMenu() {
		headerNav.style.transition = '0.4s ease 0s';

		setTimeout(function () {
			headerNav.classList.remove('menu-open');
		}, 500);
		hamburger.classList.remove('active');
		state = false;
		enableBodyScroll(headerNav);
		// setTimeout(function () {
		// 	headerNav.removeAttribute('style');
		// }, 400);
	}
}

mobileMenu();


