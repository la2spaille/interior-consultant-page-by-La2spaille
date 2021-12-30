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

const ratio = .01
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
const handleIntersect = function (entries, observer) {
    entries.forEach(function(entry){
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('is-active')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect,options)
window.addEventListener('load', (e) => {
    document.querySelectorAll('.anim-element').forEach(function(r) {
        observer.observe(r)
    })
    e.stopPropagation()
})
