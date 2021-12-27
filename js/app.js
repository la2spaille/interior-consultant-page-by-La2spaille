const menuBtn = document.querySelector('.w-menu')
const closeBtn = document.querySelector('.w-header-mobile-nav-close')
const headerNavMobile = document.querySelector('.w-header-mobile-nav')
menuBtn.addEventListener('click', (e) => {
    headerNavMobile.classList.add('is-active')
    e.stopPropagation()
})
closeBtn.addEventListener('click', (e) => {
    headerNavMobile.classList.remove('is-active')
    e.stopPropagation()
})