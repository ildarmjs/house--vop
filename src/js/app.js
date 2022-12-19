import { isWebp, headerFixed }from './modules'
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

// Проверка браузера на поддерку .webp изображений ====================================================================================================================================================
isWebp()
// ====================================================================================================================================================

// Паралакс мышей ====================================================================================================================================================
// const mousePrlx = new MousePRLX({})
// ====================================================================================================================================================

// Фиксированный header ====================================================================================================================================================
// headerFixed()
// ====================================================================================================================================================
const iconMenu = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')
if (iconMenu) {
	iconMenu.addEventListener('click', e => {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active')
		menuBody.classList.toggle('_active')
	})
}

// Прокрутка к нужному разделу
const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick)
	})
}
function onMenuLinkClick(e) {
	const menuLink = e.target
	if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
		const gotoBlock = document.querySelector(menuLink.dataset.goto)
		const gotoBlockValue =
			gotoBlock.getBoundingClientRect().top +
			pageYOffset -
			document.querySelector('header').offsetHeight

		if (iconMenu.classList.contains('_active')) {
			document.body.classList.remove('_lock')
			iconMenu.classList.remove('_active')
			menuBody.classList.remove('_active')
		}
		window.scrollTo({
			top: gotoBlockValue,
			behavior: 'smooth',
		})
		e.preventDefault()
	}
}