
const menuItemArr = document.querySelectorAll('.menu-item');
const iconArr = document.querySelectorAll('.arrow')

const menuContentArr = document.querySelectorAll('.menu-content-div');

menuItemArr.forEach(menu=>{
    menu.onclick = menuContentShow
})

function menuContentShow() {
    let index;
    for (let i=0;i<menuItemArr.length;i++) {
        if (this===menuItemArr[i]) index = i 
    }
    let menuContent = menuContentArr[index]

    for (let i=0;i<menuContentArr.length;i++) {
        if (menuContent!==menuContentArr[i]) {
            if (menuContentArr[i].classList.length===1) menuContentArr[i].classList.add('menu-content-close')
        }
    }

    iconArr.forEach(icon=>{
        if (icon!==iconArr[index]) {
            if (icon.classList.length===2) icon.classList.remove('rotate')
        }
    })
    
    
    menuContent.classList.toggle('menu-content-close')
    iconArr[index].classList.toggle('rotate')
}


const mobileMenuIcon = document.querySelector('.menu-icon');

const mobileMenu = document.querySelector('.menu-mobile');

mobileMenuIcon.onclick = mobileMenuFunction

function mobileMenuFunction() {
    mobileMenu.classList.toggle('mobile-menu-close')
}


const mobileMenuItemArr = document.querySelectorAll('.mobile-menu-item')

mobileMenuItemArr.forEach(menuItem=>{
    menuItem.onclick = mobileMenuDescriptionFunction
})

const mobileMenuDescriptionArr = document.querySelectorAll('.mobile-menu-description')
const mobileMenuIconArr = document.querySelectorAll('.mobile-menu-icon')

function mobileMenuDescriptionFunction() {
    let index;
    for (let i=0;i<mobileMenuItemArr.length;i++){
        if (this===mobileMenuItemArr[i]) index = i
    }
    mobileMenuDescriptionArr.forEach(menuDescription=>{
        if (menuDescription!==mobileMenuDescriptionArr[index]) {
            if (!(menuDescription.classList.contains('mobile-menu-description-close'))) menuDescription.classList.add('mobile-menu-description-close')
        }
    })
    mobileMenuDescriptionArr[index].classList.toggle('mobile-menu-description-close')

    mobileMenuIconArr.forEach(menuIcon=>{
        if (menuIcon!==mobileMenuIconArr[index]) {
            if (menuIcon.classList.contains('rotate')) menuIcon.classList.remove('rotate')
        }
    })

    mobileMenuIconArr[index].classList.toggle('rotate')

}