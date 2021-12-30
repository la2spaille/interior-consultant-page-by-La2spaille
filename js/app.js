const menuBtn = document.querySelector('.w-menu')
const closeBtn = document.querySelector('.w-header-mobile-nav-close')
const headerNavMobile = document.querySelector('.w-header-mobile-nav')
const loader = document.querySelector('#loader')
window.addEventListener('load', (e) => {
    loader.classList.add('load')
    e.stopPropagation()
})
menuBtn.addEventListener('click', (e) => {
    headerNavMobile.classList.add('is-active')
    e.stopPropagation()
})
closeBtn.addEventListener('click', (e) => {
    headerNavMobile.classList.remove('is-active')
    e.stopPropagation()
})
// var animElement = document.querySelectorAll('.anim-element')
// var windowH = window.innerHeight
// var scrollToop = window.scrollTop
// var elementOffset = animElement.scrollTop
// var distance = elementOffset - scrollToop
// // window.addEventListener('load', (e) => {
//     animElement.forEach(element => {
//         window.addEventListener('scroll', (e) => {
//             if (distance < 800){
//                 element.classList.add('is-active')
//             }
//             e.stopPropagation()
//         })
//     })
// //     e.stopPropagation()
// // })
