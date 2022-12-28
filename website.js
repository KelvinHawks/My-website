const date = document.querySelector('#date')
date.innerHTML = new Date().getFullYear()

const navToggle = document.querySelector('#media-q')
const links = document.querySelector('.links')
const showLink = document.querySelector('.display-icons')

navToggle.addEventListener('click', function(){
    //showLink.classList.toggle('hide-icons')
    showLink.style.transition = '0.5s'
    const containerHeight = showLink.getBoundingClientRect().height
    const linkHeight = links.getBoundingClientRect().height
    if(containerHeight === 0){
        showLink.style.height = `${linkHeight}px`
    }else{
        showLink.style.height = 0
    }
})

const navBar = document.querySelector('.nav-bar')
const scrollUp = document.querySelector('.scroll-up')
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset
    const navHeight = navBar.getBoundingClientRect().height
    if(scrollHeight > navHeight){
        navBar.classList.add('fixed-nav')
        scrollUp.classList.add('scroll-hide')
    }else{
        navBar.classList.remove('fixed-nav')
        scrollUp.classList.remove('scroll-hide')
    }
})

const scrollLink = document.querySelectorAll('.scroll-link')

scrollLink.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault()
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)
        const navHeight = navBar.getBoundingClientRect().height
        //const fixedNav = navBar.classList.contains("fixed-nav")
        //const containerHeight = showLink.getBoundingClientRect().height
        let position = element.offsetTop - navHeight
        /*if(!fixedNav){
            position = position - navHeight
        }
        if(navHeight > 70){
            position = position + containerHeight
        }*/
        window.scrollTo({
            left: 0,
            top: position
        })
        showLink.style.height = 0
    })
})