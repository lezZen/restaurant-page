import base from "./pages/base"
import home from "./pages/home.js"
import menu from "./pages/menu.js"
import cleanContent from "./functions/cleanContent"
import contact from "./pages/contact"

base()
home()
const navbarLi = document.querySelectorAll('#main-nav li')
navbarLi[0].addEventListener('click', showHome)
navbarLi[1].addEventListener('click', showMenu)
navbarLi[2].addEventListener('click', showContact)


function showHome(){
    manageEvents('home', navbarLi)
    cleanContent()
    setTimeout(home, 950)
}

function showMenu(){

    manageEvents('menu', navbarLi)
    cleanContent()
    setTimeout( menu ,950)
}



function showContact(){

    manageEvents('contact', navbarLi)
    cleanContent()
   setTimeout(contact,950)

}

function manageEvents(func, list){
   
    switch(func){
        case 'home':   

            removeEvents();
            setTimeout(() => {
                list[1].addEventListener('click', showMenu);
                list[2].addEventListener('click', showContact);  
            }, 950);
            
            break;

        case 'menu':

            removeEvents();

            setTimeout(() => { 
                list[0].addEventListener('click', showHome);
                list[2].addEventListener('click', showContact);
            }, 950);
            break;
            
        case 'contact':

            removeEvents();
            setTimeout(() => {
                list[0].addEventListener('click', showHome);
                list[1].addEventListener('click', showMenu);
            }, 950);
            break;
    }

    function removeEvents(){
        list[0].removeEventListener('click', showHome)
        list[1].removeEventListener('click', showMenu)
        list[2].removeEventListener('click', showContact)
        
    }
   
  
}
