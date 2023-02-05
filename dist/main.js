/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/cleanContent.js":
/*!***************************************!*\
  !*** ./src/functions/cleanContent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cleanContent)
/* harmony export */ });
function cleanContent(){
    const container= document.querySelector('#content')

    if(container.firstElementChild){
        container.firstElementChild.className='seg'
        setTimeout(() => {
            container.firstElementChild.remove()
            
        }, 950);
        }
   
}

/***/ }),

/***/ "./src/functions/createEl.js":
/*!***********************************!*\
  !*** ./src/functions/createEl.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createEl)
/* harmony export */ });
function createEl(tag, text, classes){
    const myEl= document.createElement(tag)
    myEl.textContent= text;
    if(classes){
        if(typeof classes === 'string'){
            myEl.classList.add(classes)
        } else{
            myEl.classList.add(...classes)
        }
    }
    return myEl
}

/***/ }),

/***/ "./src/pages/base.js":
/*!***************************!*\
  !*** ./src/pages/base.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_bread_hhtfjg_c_scale_w_1400_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/bread_hhtfjg_c_scale,w_1400.jpg */ "./src/imgs/bread_hhtfjg_c_scale,w_1400.jpg");
/* harmony import */ var _functions_createEl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/createEl */ "./src/functions/createEl.js");



function base(){
    const container= document.querySelector('#content')

    function header(){
    const headerSection= document.createElement('header')

    const headTextCont= (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_1__["default"])('div', '', 'title')
    headTextCont.append((0,_functions_createEl__WEBPACK_IMPORTED_MODULE_1__["default"])('h1','My Bakery'),(0,_functions_createEl__WEBPACK_IMPORTED_MODULE_1__["default"])('p', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam placeat saepe quas laudantium quasi officia error! Alias aperiam natus nulla officia laborum neque cumque non repudiandae, nobis magni nemo necessitatibus.'))

    const headImgCont= (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_1__["default"])('div','','image-wrap')
    const headImg= (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_1__["default"])('img','','bee')
    headImg.src= _imgs_bread_hhtfjg_c_scale_w_1400_jpg__WEBPACK_IMPORTED_MODULE_0__
    headImgCont.appendChild(headImg)

    headerSection.appendChild(headTextCont)
    headerSection.appendChild(headImgCont)
    document.body.insertBefore(headerSection, container)
    }
 

    function nav(){
        const navSection= document.createElement('section')
        navSection.id= 'main-nav'
        const nav = document.createElement('nav')
        const ul = (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_1__["default"])('ul', '', 'sections-list')
        ul.role= 'list'
        
        const liList= [document.createElement('li'), document.createElement('li'), document.createElement('li')]
        liList[0].appendChild((0,_functions_createEl__WEBPACK_IMPORTED_MODULE_1__["default"])('a','Home'))
        liList[1].appendChild((0,_functions_createEl__WEBPACK_IMPORTED_MODULE_1__["default"])('a','Menu'))
        liList[2].appendChild((0,_functions_createEl__WEBPACK_IMPORTED_MODULE_1__["default"])('a','Contact'))
        
        liList.forEach(li=>li.firstChild.href="javascript:void(0)")
        
        ul.appendChild(liList[0])
        ul.appendChild(liList[1])
        ul.appendChild(liList[2])
        
        nav.appendChild(ul)
        navSection.appendChild(nav)
        
        document.body.insertBefore(navSection, container)
    }

    function footer(){
        const footer= document.createElement('footer')
        const p = (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_1__["default"])('p','Follow us on:')
        const ul = document.createElement('ul')
        ul.role='list'
        
        const liList= [document.createElement('li'), document.createElement('li')]
        liList[0].appendChild((0,_functions_createEl__WEBPACK_IMPORTED_MODULE_1__["default"])('a','Facebook'))
        liList[1].appendChild((0,_functions_createEl__WEBPACK_IMPORTED_MODULE_1__["default"])('a','Instagram'))
        liList.forEach(li=>li.firstChild.href='#')
        
        ul.appendChild(liList[0])
        ul.appendChild(liList[1])

        footer.append(p, ul)
        document.body.appendChild(footer)
    }

    header()
    nav()
    footer()
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (base);


/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _functions_createEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createEl */ "./src/functions/createEl.js");


function contact(){
    const container = document.querySelector('#content')
    const contactS= document.createElement('section')
    contactS.id='contact'
    
    const locationSection = document.createElement('section')
    locationSection.id='location'

    const reservationSection=document.createElement('section')
    reservationSection.id= 'reservations'
        
    const form= document.createElement('form')
    
    const lname= (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_0__["default"])('label','Name:')
    lname.for='name'
    const iname=createinput('text','name','name')

    const lemail= (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_0__["default"])('label','Email:')
    lemail.for='email'
    const iemail= createinput('email','email','email')

    const ldate= (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_0__["default"])('label', 'Date:')
    ldate.for='date'
    const idate= createinput('datetime-local','date','date')

    const but= document.createElement('input')
    but.type= 'submit'
    but.value= 'Submit'


    locationSection.append((0,_functions_createEl__WEBPACK_IMPORTED_MODULE_0__["default"])('h2','Location & Hours'),
    (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_0__["default"])('p','123 Main St, Anytown USA'),(0,_functions_createEl__WEBPACK_IMPORTED_MODULE_0__["default"])('p','Open 7 days a week'),
    (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_0__["default"])('p','Monday-Thursday: 11am-9pm'),(0,_functions_createEl__WEBPACK_IMPORTED_MODULE_0__["default"])('p','Friday-Saturday: 11am-10pm'),
    (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_0__["default"])('p','Sunday: 12pm-9pm'))

    form.append(lname,iname,lemail,iemail,ldate,idate,but)
    reservationSection.appendChild((0,_functions_createEl__WEBPACK_IMPORTED_MODULE_0__["default"])('h2','Make a Reservation'))
    reservationSection.appendChild(form)
    contactS.appendChild(locationSection)
    contactS.appendChild(reservationSection)
    container.appendChild(contactS)

}
function createinput(type, id, name){
    const myInput=document.createElement('input')
    myInput.type=type;
    myInput.id=id;
    myInput.name=name;
    return myInput
}

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgs_menu_muffin_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/menu/muffin.jpg */ "./src/imgs/menu/muffin.jpg");
/* harmony import */ var _imgs_menu_Sourdough_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/menu/Sourdough.jpg */ "./src/imgs/menu/Sourdough.jpg");
/* harmony import */ var _imgs_menu_scones_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/menu/scones.jpg */ "./src/imgs/menu/scones.jpg");
/* harmony import */ var _imgs_menu_croissant_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/menu/croissant.jpg */ "./src/imgs/menu/croissant.jpg");
/* harmony import */ var _functions_createEl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/createEl */ "./src/functions/createEl.js");






function home(){
    const mainCont= document.querySelector('#content')

    const homeSection= document.createElement('section')
    homeSection.id= 'home'
    

    const homeCont=(0,_functions_createEl__WEBPACK_IMPORTED_MODULE_4__["default"])('div','', "home-cont")
    
    for (let i = 1; i <= 3; i++) {
      const homeP = (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_4__["default"])("div", null, null);
      homeP.append(
        (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_4__["default"])("h3", `Something`),
        (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_4__["default"])("p", 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum recusandae molestias ut asperiores laborum soluta quam eveniet obcaecati minima dolorem necessitatibus totam, ipsa labore earum quaerat ad iusto possimus cum, reprehenderit mollitia eos ducimus provident? Iste in unde facilis itaque?')
      );
      homeCont.appendChild(homeP);//*** */
    }
    
    const aside= (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_4__["default"])('aside', '', 'top')
    
    const productsTop= document.createElement('div')

    addProduct(productsTop, _imgs_menu_muffin_jpg__WEBPACK_IMPORTED_MODULE_0__, "Muffin", "Lorem ipsum dolor sit amet.")
    addProduct(productsTop, _imgs_menu_Sourdough_jpg__WEBPACK_IMPORTED_MODULE_1__, "Sourdough", "Lorem ipsum dolor sit amet.")
    addProduct(productsTop, _imgs_menu_scones_jpg__WEBPACK_IMPORTED_MODULE_2__, "Scones", "Lorem ipsum dolor sit amet.")
    addProduct(productsTop, _imgs_menu_croissant_jpg__WEBPACK_IMPORTED_MODULE_3__, "Croissant", "Lorem ipsum dolor sit amet.")

    aside.appendChild((0,_functions_createEl__WEBPACK_IMPORTED_MODULE_4__["default"])('h3', 'Top products'))
    aside.appendChild(productsTop)/** */
    homeSection.appendChild(homeCont)//********* */
    homeSection.appendChild(aside)/*** */
    mainCont.appendChild(homeSection)//**** */
}

function addProduct(top,imgsrc, title, description){
        const img =document.createElement('img')
        img.src= imgsrc
        const div =document.createElement('div')
        div.append((0,_functions_createEl__WEBPACK_IMPORTED_MODULE_4__["default"])('h4', title), (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_4__["default"])('p', description))
        const container= (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_4__["default"])('div', '', 'top-product')
        container.appendChild(img)
        container.appendChild(div)
        top.appendChild(container)
        
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_createEl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createEl */ "./src/functions/createEl.js");
/* harmony import */ var _imgs_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/menu/bg.jpg */ "./src/imgs/menu/bg.jpg");
/* harmony import */ var _imgs_menu_bg2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/menu/bg2.jpg */ "./src/imgs/menu/bg2.jpg");
/* harmony import */ var _imgs_menu_combinedImgs_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/menu/combinedImgs.jpg */ "./src/imgs/menu/combinedImgs.jpg");
/* harmony import */ var _imgs_menu_croissant_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/menu/croissant.jpg */ "./src/imgs/menu/croissant.jpg");
/* harmony import */ var _imgs_menu_muffin_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imgs/menu/muffin.jpg */ "./src/imgs/menu/muffin.jpg");
/* harmony import */ var _imgs_menu_scones_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../imgs/menu/scones.jpg */ "./src/imgs/menu/scones.jpg");
/* harmony import */ var _imgs_menu_Sourdough_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../imgs/menu/Sourdough.jpg */ "./src/imgs/menu/Sourdough.jpg");
/* harmony import */ var _imgs_menu_whole_wheat_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../imgs/menu/whole_wheat.jpg */ "./src/imgs/menu/whole_wheat.jpg");










function menu(){
    const mainCont= document.querySelector('#content')
    mainCont.befo

    const menuSection= document.createElement('section')
    menuSection.id= 'menu'

    const breadsTitle= (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', 'Our Breads')
    const breadsUl= (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_0__["default"])('ul','', 'ulMenu')
    breadsUl.appendChild( createLi(_imgs_menu_Sourdough_jpg__WEBPACK_IMPORTED_MODULE_7__, 'Sourdough', ["Classic Sourdough","Sourdough with Olives","Sourdough with Sun-dried Tomatoes"]))
    breadsUl.appendChild(createLi(_imgs_menu_whole_wheat_jpg__WEBPACK_IMPORTED_MODULE_8__, 'Whole Wheat', ["Whole Wheat Loaf","Whole Wheat Baguette"]))
    breadsUl.appendChild(createLi(_imgs_menu_combinedImgs_jpg__WEBPACK_IMPORTED_MODULE_3__, "Speciality Breads", ["Cinnamon Raisin", "Herb and Garlic", "Walnut and Cranberry"]))

    const pastriesTitle= (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_0__["default"])('h2', 'Pastries')
    const pastriesUl= (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_0__["default"])('ul', '', 'ulMenu')
    pastriesUl.appendChild(createLi(_imgs_menu_croissant_jpg__WEBPACK_IMPORTED_MODULE_4__, 'Croissants',["Plain Croissant", "Almond Croissant", "Chocolate Croissant"]))
    pastriesUl.appendChild(createLi(_imgs_menu_muffin_jpg__WEBPACK_IMPORTED_MODULE_5__, 'Muffins', ["Blueberry Muffin", "Chocolate Chip Muffin"]))
    pastriesUl.appendChild(createLi(_imgs_menu_scones_jpg__WEBPACK_IMPORTED_MODULE_6__,'Scones', ["Cranberry Orange Scone", "Lemon Blueberry Scone"]))
  

    menuSection.appendChild(breadsTitle)
    menuSection.appendChild(breadsUl)
    menuSection.appendChild(pastriesTitle)
    menuSection.appendChild(pastriesUl)
    mainCont.appendChild(menuSection)
}

function createLi(imgsrc, title, listext, imgspecial){
    const menuLi = document.createElement('li')

    const productbg = document.createElement('img')
    imgspecial ?  productbg.src= _imgs_menu_bg_jpg__WEBPACK_IMPORTED_MODULE_1__ : productbg.src=_imgs_menu_bg2_jpg__WEBPACK_IMPORTED_MODULE_2__;

    const ptitle= (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_0__["default"])('h3', title)

    const pcontainer= (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_0__["default"])('div', '', 'product')
    
    let imgcont
    imgspecial ? imgcont= (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_0__["default"])('div','', 'product-img') :  imgcont= (0,_functions_createEl__WEBPACK_IMPORTED_MODULE_0__["default"])('div','', 'product-img', 'combImg');
    const productimg= document.createElement('img')
    productimg.src= imgsrc
    imgcont.appendChild(productimg)

    const ul= document.createElement('ul')
    listext.forEach(element => {
        ul.appendChild((0,_functions_createEl__WEBPACK_IMPORTED_MODULE_0__["default"])('li',element))
    });

    pcontainer.append(imgcont, ul)

    menuLi.append(productbg, ptitle, pcontainer)

    return menuLi
}   

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/imgs/bread_hhtfjg_c_scale,w_1400.jpg":
/*!**************************************************!*\
  !*** ./src/imgs/bread_hhtfjg_c_scale,w_1400.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e8147a98736a5d3ae57.jpg";

/***/ }),

/***/ "./src/imgs/menu/Sourdough.jpg":
/*!*************************************!*\
  !*** ./src/imgs/menu/Sourdough.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0cd512dc8df321d411ef.jpg";

/***/ }),

/***/ "./src/imgs/menu/bg.jpg":
/*!******************************!*\
  !*** ./src/imgs/menu/bg.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18c1b9f7b36ae990279b.jpg";

/***/ }),

/***/ "./src/imgs/menu/bg2.jpg":
/*!*******************************!*\
  !*** ./src/imgs/menu/bg2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed8e527e94a9c8a51db6.jpg";

/***/ }),

/***/ "./src/imgs/menu/combinedImgs.jpg":
/*!****************************************!*\
  !*** ./src/imgs/menu/combinedImgs.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4cda62fc5badc21df7b4.jpg";

/***/ }),

/***/ "./src/imgs/menu/croissant.jpg":
/*!*************************************!*\
  !*** ./src/imgs/menu/croissant.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc1cabf7e8f49ea2dcdb.jpg";

/***/ }),

/***/ "./src/imgs/menu/muffin.jpg":
/*!**********************************!*\
  !*** ./src/imgs/menu/muffin.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fdbb12d90b15dcfb935.jpg";

/***/ }),

/***/ "./src/imgs/menu/scones.jpg":
/*!**********************************!*\
  !*** ./src/imgs/menu/scones.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f327618656961ec6aec.jpg";

/***/ }),

/***/ "./src/imgs/menu/whole_wheat.jpg":
/*!***************************************!*\
  !*** ./src/imgs/menu/whole_wheat.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b8b0a60a642fb3d918a.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/base */ "./src/pages/base.js");
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home.js */ "./src/pages/home.js");
/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu.js */ "./src/pages/menu.js");
/* harmony import */ var _functions_cleanContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/cleanContent */ "./src/functions/cleanContent.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");






(0,_pages_base__WEBPACK_IMPORTED_MODULE_0__["default"])()
;(0,_pages_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
const navbarLi = document.querySelectorAll('#main-nav li')
navbarLi[0].addEventListener('click', showHome)
navbarLi[1].addEventListener('click', showMenu)
navbarLi[2].addEventListener('click', showContact)


function showHome(){
    manageEvents('home', navbarLi)
    ;(0,_functions_cleanContent__WEBPACK_IMPORTED_MODULE_3__["default"])()
    setTimeout(_pages_home_js__WEBPACK_IMPORTED_MODULE_1__["default"], 950)
}

function showMenu(){

    manageEvents('menu', navbarLi)
    ;(0,_functions_cleanContent__WEBPACK_IMPORTED_MODULE_3__["default"])()
    setTimeout( _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"] ,950)
}



function showContact(){

    manageEvents('contact', navbarLi)
    ;(0,_functions_cleanContent__WEBPACK_IMPORTED_MODULE_3__["default"])()
   setTimeout(_pages_contact__WEBPACK_IMPORTED_MODULE_4__["default"],950)

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJO0FBQ25COztBQUVBOztBQUVBO0FBQ0EsSUFBSSxvRUFBWTtBQUNoQixnQkFBZ0Isc0RBQUk7QUFDcEI7Ozs7QUFJQTs7QUFFQTtBQUNBLElBQUksb0VBQVk7QUFDaEIsY0FBYyxzREFBTzs7QUFFckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Z1bmN0aW9ucy9jbGVhbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVFbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvYmFzZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsZWFuQ29udGVudCgpe1xuICAgIGNvbnN0IGNvbnRhaW5lcj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG4gICAgaWYoY29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKXtcbiAgICAgICAgY29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTmFtZT0nc2VnJ1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKVxuICAgICAgICAgICAgXG4gICAgICAgIH0sIDk1MCk7XG4gICAgICAgIH1cbiAgIFxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsKHRhZywgdGV4dCwgY2xhc3Nlcyl7XG4gICAgY29uc3QgbXlFbD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpXG4gICAgbXlFbC50ZXh0Q29udGVudD0gdGV4dDtcbiAgICBpZihjbGFzc2VzKXtcbiAgICAgICAgaWYodHlwZW9mIGNsYXNzZXMgPT09ICdzdHJpbmcnKXtcbiAgICAgICAgICAgIG15RWwuY2xhc3NMaXN0LmFkZChjbGFzc2VzKVxuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBteUVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NlcylcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbXlFbFxufSIsImltcG9ydCBoZWFkZXJJbWcgZnJvbSBcIi4uL2ltZ3MvYnJlYWRfaGh0ZmpnX2Nfc2NhbGUsd18xNDAwLmpwZ1wiXG5pbXBvcnQgY3JlYXRlRWwgZnJvbSBcIi4uL2Z1bmN0aW9ucy9jcmVhdGVFbFwiXG5cbmZ1bmN0aW9uIGJhc2UoKXtcbiAgICBjb25zdCBjb250YWluZXI9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcblxuICAgIGZ1bmN0aW9uIGhlYWRlcigpe1xuICAgIGNvbnN0IGhlYWRlclNlY3Rpb249IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG5cbiAgICBjb25zdCBoZWFkVGV4dENvbnQ9IGNyZWF0ZUVsKCdkaXYnLCAnJywgJ3RpdGxlJylcbiAgICBoZWFkVGV4dENvbnQuYXBwZW5kKGNyZWF0ZUVsKCdoMScsJ015IEJha2VyeScpLGNyZWF0ZUVsKCdwJywgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIElwc2FtIHBsYWNlYXQgc2FlcGUgcXVhcyBsYXVkYW50aXVtIHF1YXNpIG9mZmljaWEgZXJyb3IhIEFsaWFzIGFwZXJpYW0gbmF0dXMgbnVsbGEgb2ZmaWNpYSBsYWJvcnVtIG5lcXVlIGN1bXF1ZSBub24gcmVwdWRpYW5kYWUsIG5vYmlzIG1hZ25pIG5lbW8gbmVjZXNzaXRhdGlidXMuJykpXG5cbiAgICBjb25zdCBoZWFkSW1nQ29udD0gY3JlYXRlRWwoJ2RpdicsJycsJ2ltYWdlLXdyYXAnKVxuICAgIGNvbnN0IGhlYWRJbWc9IGNyZWF0ZUVsKCdpbWcnLCcnLCdiZWUnKVxuICAgIGhlYWRJbWcuc3JjPSBoZWFkZXJJbWdcbiAgICBoZWFkSW1nQ29udC5hcHBlbmRDaGlsZChoZWFkSW1nKVxuXG4gICAgaGVhZGVyU2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkVGV4dENvbnQpXG4gICAgaGVhZGVyU2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkSW1nQ29udClcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShoZWFkZXJTZWN0aW9uLCBjb250YWluZXIpXG4gICAgfVxuIFxuXG4gICAgZnVuY3Rpb24gbmF2KCl7XG4gICAgICAgIGNvbnN0IG5hdlNlY3Rpb249IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICAgICAgICBuYXZTZWN0aW9uLmlkPSAnbWFpbi1uYXYnXG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gICAgICAgIGNvbnN0IHVsID0gY3JlYXRlRWwoJ3VsJywgJycsICdzZWN0aW9ucy1saXN0JylcbiAgICAgICAgdWwucm9sZT0gJ2xpc3QnXG4gICAgICAgIFxuICAgICAgICBjb25zdCBsaUxpc3Q9IFtkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXVxuICAgICAgICBsaUxpc3RbMF0uYXBwZW5kQ2hpbGQoY3JlYXRlRWwoJ2EnLCdIb21lJykpXG4gICAgICAgIGxpTGlzdFsxXS5hcHBlbmRDaGlsZChjcmVhdGVFbCgnYScsJ01lbnUnKSlcbiAgICAgICAgbGlMaXN0WzJdLmFwcGVuZENoaWxkKGNyZWF0ZUVsKCdhJywnQ29udGFjdCcpKVxuICAgICAgICBcbiAgICAgICAgbGlMaXN0LmZvckVhY2gobGk9PmxpLmZpcnN0Q2hpbGQuaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiKVxuICAgICAgICBcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGlMaXN0WzBdKVxuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaUxpc3RbMV0pXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpTGlzdFsyXSlcbiAgICAgICAgXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZCh1bClcbiAgICAgICAgbmF2U2VjdGlvbi5hcHBlbmRDaGlsZChuYXYpXG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShuYXZTZWN0aW9uLCBjb250YWluZXIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9vdGVyKCl7XG4gICAgICAgIGNvbnN0IGZvb3Rlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcbiAgICAgICAgY29uc3QgcCA9IGNyZWF0ZUVsKCdwJywnRm9sbG93IHVzIG9uOicpXG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuICAgICAgICB1bC5yb2xlPSdsaXN0J1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbGlMaXN0PSBbZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKV1cbiAgICAgICAgbGlMaXN0WzBdLmFwcGVuZENoaWxkKGNyZWF0ZUVsKCdhJywnRmFjZWJvb2snKSlcbiAgICAgICAgbGlMaXN0WzFdLmFwcGVuZENoaWxkKGNyZWF0ZUVsKCdhJywnSW5zdGFncmFtJykpXG4gICAgICAgIGxpTGlzdC5mb3JFYWNoKGxpPT5saS5maXJzdENoaWxkLmhyZWY9JyMnKVxuICAgICAgICBcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGlMaXN0WzBdKVxuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaUxpc3RbMV0pXG5cbiAgICAgICAgZm9vdGVyLmFwcGVuZChwLCB1bClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpXG4gICAgfVxuXG4gICAgaGVhZGVyKClcbiAgICBuYXYoKVxuICAgIGZvb3RlcigpXG59XG5cbmV4cG9ydCBkZWZhdWx0ICBiYXNlXG4iLCJpbXBvcnQgY3JlYXRlRWwgZnJvbSBcIi4uL2Z1bmN0aW9ucy9jcmVhdGVFbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0KCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIGNvbnN0IGNvbnRhY3RTPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICBjb250YWN0Uy5pZD0nY29udGFjdCdcbiAgICBcbiAgICBjb25zdCBsb2NhdGlvblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICBsb2NhdGlvblNlY3Rpb24uaWQ9J2xvY2F0aW9uJ1xuXG4gICAgY29uc3QgcmVzZXJ2YXRpb25TZWN0aW9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICAgIHJlc2VydmF0aW9uU2VjdGlvbi5pZD0gJ3Jlc2VydmF0aW9ucydcbiAgICAgICAgXG4gICAgY29uc3QgZm9ybT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgXG4gICAgY29uc3QgbG5hbWU9IGNyZWF0ZUVsKCdsYWJlbCcsJ05hbWU6JylcbiAgICBsbmFtZS5mb3I9J25hbWUnXG4gICAgY29uc3QgaW5hbWU9Y3JlYXRlaW5wdXQoJ3RleHQnLCduYW1lJywnbmFtZScpXG5cbiAgICBjb25zdCBsZW1haWw9IGNyZWF0ZUVsKCdsYWJlbCcsJ0VtYWlsOicpXG4gICAgbGVtYWlsLmZvcj0nZW1haWwnXG4gICAgY29uc3QgaWVtYWlsPSBjcmVhdGVpbnB1dCgnZW1haWwnLCdlbWFpbCcsJ2VtYWlsJylcblxuICAgIGNvbnN0IGxkYXRlPSBjcmVhdGVFbCgnbGFiZWwnLCAnRGF0ZTonKVxuICAgIGxkYXRlLmZvcj0nZGF0ZSdcbiAgICBjb25zdCBpZGF0ZT0gY3JlYXRlaW5wdXQoJ2RhdGV0aW1lLWxvY2FsJywnZGF0ZScsJ2RhdGUnKVxuXG4gICAgY29uc3QgYnV0PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgYnV0LnR5cGU9ICdzdWJtaXQnXG4gICAgYnV0LnZhbHVlPSAnU3VibWl0J1xuXG5cbiAgICBsb2NhdGlvblNlY3Rpb24uYXBwZW5kKGNyZWF0ZUVsKCdoMicsJ0xvY2F0aW9uICYgSG91cnMnKSxcbiAgICBjcmVhdGVFbCgncCcsJzEyMyBNYWluIFN0LCBBbnl0b3duIFVTQScpLGNyZWF0ZUVsKCdwJywnT3BlbiA3IGRheXMgYSB3ZWVrJyksXG4gICAgY3JlYXRlRWwoJ3AnLCdNb25kYXktVGh1cnNkYXk6IDExYW0tOXBtJyksY3JlYXRlRWwoJ3AnLCdGcmlkYXktU2F0dXJkYXk6IDExYW0tMTBwbScpLFxuICAgIGNyZWF0ZUVsKCdwJywnU3VuZGF5OiAxMnBtLTlwbScpKVxuXG4gICAgZm9ybS5hcHBlbmQobG5hbWUsaW5hbWUsbGVtYWlsLGllbWFpbCxsZGF0ZSxpZGF0ZSxidXQpXG4gICAgcmVzZXJ2YXRpb25TZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZUVsKCdoMicsJ01ha2UgYSBSZXNlcnZhdGlvbicpKVxuICAgIHJlc2VydmF0aW9uU2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtKVxuICAgIGNvbnRhY3RTLmFwcGVuZENoaWxkKGxvY2F0aW9uU2VjdGlvbilcbiAgICBjb250YWN0Uy5hcHBlbmRDaGlsZChyZXNlcnZhdGlvblNlY3Rpb24pXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RTKVxuXG59XG5mdW5jdGlvbiBjcmVhdGVpbnB1dCh0eXBlLCBpZCwgbmFtZSl7XG4gICAgY29uc3QgbXlJbnB1dD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbXlJbnB1dC50eXBlPXR5cGU7XG4gICAgbXlJbnB1dC5pZD1pZDtcbiAgICBteUlucHV0Lm5hbWU9bmFtZTtcbiAgICByZXR1cm4gbXlJbnB1dFxufSIsImltcG9ydCBtdWZmSW1nIGZyb20gXCIuLi9pbWdzL21lbnUvbXVmZmluLmpwZ1wiO1xuaW1wb3J0IHNvdXJkb3VnaEltZyBmcm9tIFwiLi4vaW1ncy9tZW51L1NvdXJkb3VnaC5qcGdcIjtcbmltcG9ydCBzY29uZUltZyBmcm9tIFwiLi4vaW1ncy9tZW51L3Njb25lcy5qcGdcIjtcbmltcG9ydCBjcm9pc3NhbnRJbWcgZnJvbSBcIi4uL2ltZ3MvbWVudS9jcm9pc3NhbnQuanBnXCI7XG5pbXBvcnQgY3JlYXRlRWwgZnJvbSBcIi4uL2Z1bmN0aW9ucy9jcmVhdGVFbFwiXG5cbmZ1bmN0aW9uIGhvbWUoKXtcbiAgICBjb25zdCBtYWluQ29udD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuXG4gICAgY29uc3QgaG9tZVNlY3Rpb249IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICAgIGhvbWVTZWN0aW9uLmlkPSAnaG9tZSdcbiAgICBcblxuICAgIGNvbnN0IGhvbWVDb250PWNyZWF0ZUVsKCdkaXYnLCcnLCBcImhvbWUtY29udFwiKVxuICAgIFxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykge1xuICAgICAgY29uc3QgaG9tZVAgPSBjcmVhdGVFbChcImRpdlwiLCBudWxsLCBudWxsKTtcbiAgICAgIGhvbWVQLmFwcGVuZChcbiAgICAgICAgY3JlYXRlRWwoXCJoM1wiLCBgU29tZXRoaW5nYCksXG4gICAgICAgIGNyZWF0ZUVsKFwicFwiLCAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERvbG9ydW0gcmVjdXNhbmRhZSBtb2xlc3RpYXMgdXQgYXNwZXJpb3JlcyBsYWJvcnVtIHNvbHV0YSBxdWFtIGV2ZW5pZXQgb2JjYWVjYXRpIG1pbmltYSBkb2xvcmVtIG5lY2Vzc2l0YXRpYnVzIHRvdGFtLCBpcHNhIGxhYm9yZSBlYXJ1bSBxdWFlcmF0IGFkIGl1c3RvIHBvc3NpbXVzIGN1bSwgcmVwcmVoZW5kZXJpdCBtb2xsaXRpYSBlb3MgZHVjaW11cyBwcm92aWRlbnQ/IElzdGUgaW4gdW5kZSBmYWNpbGlzIGl0YXF1ZT8nKVxuICAgICAgKTtcbiAgICAgIGhvbWVDb250LmFwcGVuZENoaWxkKGhvbWVQKTsvLyoqKiAqL1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBhc2lkZT0gY3JlYXRlRWwoJ2FzaWRlJywgJycsICd0b3AnKVxuICAgIFxuICAgIGNvbnN0IHByb2R1Y3RzVG9wPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgYWRkUHJvZHVjdChwcm9kdWN0c1RvcCwgbXVmZkltZywgXCJNdWZmaW5cIiwgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC5cIilcbiAgICBhZGRQcm9kdWN0KHByb2R1Y3RzVG9wLCBzb3VyZG91Z2hJbWcsIFwiU291cmRvdWdoXCIsIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuXCIpXG4gICAgYWRkUHJvZHVjdChwcm9kdWN0c1RvcCwgc2NvbmVJbWcsIFwiU2NvbmVzXCIsIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuXCIpXG4gICAgYWRkUHJvZHVjdChwcm9kdWN0c1RvcCwgY3JvaXNzYW50SW1nLCBcIkNyb2lzc2FudFwiLCBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LlwiKVxuXG4gICAgYXNpZGUuYXBwZW5kQ2hpbGQoY3JlYXRlRWwoJ2gzJywgJ1RvcCBwcm9kdWN0cycpKVxuICAgIGFzaWRlLmFwcGVuZENoaWxkKHByb2R1Y3RzVG9wKS8qKiAqL1xuICAgIGhvbWVTZWN0aW9uLmFwcGVuZENoaWxkKGhvbWVDb250KS8vKioqKioqKioqICovXG4gICAgaG9tZVNlY3Rpb24uYXBwZW5kQ2hpbGQoYXNpZGUpLyoqKiAqL1xuICAgIG1haW5Db250LmFwcGVuZENoaWxkKGhvbWVTZWN0aW9uKS8vKioqKiAqL1xufVxuXG5mdW5jdGlvbiBhZGRQcm9kdWN0KHRvcCxpbWdzcmMsIHRpdGxlLCBkZXNjcmlwdGlvbil7XG4gICAgICAgIGNvbnN0IGltZyA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgaW1nLnNyYz0gaW1nc3JjXG4gICAgICAgIGNvbnN0IGRpdiA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGl2LmFwcGVuZChjcmVhdGVFbCgnaDQnLCB0aXRsZSksIGNyZWF0ZUVsKCdwJywgZGVzY3JpcHRpb24pKVxuICAgICAgICBjb25zdCBjb250YWluZXI9IGNyZWF0ZUVsKCdkaXYnLCAnJywgJ3RvcC1wcm9kdWN0JylcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgdG9wLmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbiAgICAgICAgXG59XG5leHBvcnQgZGVmYXVsdCBob21lIiwiaW1wb3J0IGNyZWF0ZUVsIGZyb20gXCIuLi9mdW5jdGlvbnMvY3JlYXRlRWxcIjtcbmltcG9ydCBiZyBmcm9tIFwiLi4vaW1ncy9tZW51L2JnLmpwZ1wiXG5pbXBvcnQgYmdTIGZyb20gXCIuLi9pbWdzL21lbnUvYmcyLmpwZ1wiXG5pbXBvcnQgY29tYmluZWRJbWdzIGZyb20gXCIuLi9pbWdzL21lbnUvY29tYmluZWRJbWdzLmpwZ1wiXG5pbXBvcnQgY3JvaXNzYW50SW1nIGZyb20gXCIuLi9pbWdzL21lbnUvY3JvaXNzYW50LmpwZ1wiXG5pbXBvcnQgbXVmZkltZyBmcm9tIFwiLi4vaW1ncy9tZW51L211ZmZpbi5qcGdcIlxuaW1wb3J0IHNjb25lc0ltZyBmcm9tIFwiLi4vaW1ncy9tZW51L3Njb25lcy5qcGdcIlxuaW1wb3J0IFNvdXJkb3VnaEltZyBmcm9tIFwiLi4vaW1ncy9tZW51L1NvdXJkb3VnaC5qcGdcIlxuaW1wb3J0IHdob2xlX1doZWF0SW1nIGZyb20gXCIuLi9pbWdzL21lbnUvd2hvbGVfd2hlYXQuanBnXCJcblxuZnVuY3Rpb24gbWVudSgpe1xuICAgIGNvbnN0IG1haW5Db250PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgbWFpbkNvbnQuYmVmb1xuXG4gICAgY29uc3QgbWVudVNlY3Rpb249IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICAgIG1lbnVTZWN0aW9uLmlkPSAnbWVudSdcblxuICAgIGNvbnN0IGJyZWFkc1RpdGxlPSBjcmVhdGVFbCgnaDInLCAnT3VyIEJyZWFkcycpXG4gICAgY29uc3QgYnJlYWRzVWw9IGNyZWF0ZUVsKCd1bCcsJycsICd1bE1lbnUnKVxuICAgIGJyZWFkc1VsLmFwcGVuZENoaWxkKCBjcmVhdGVMaShTb3VyZG91Z2hJbWcsICdTb3VyZG91Z2gnLCBbXCJDbGFzc2ljIFNvdXJkb3VnaFwiLFwiU291cmRvdWdoIHdpdGggT2xpdmVzXCIsXCJTb3VyZG91Z2ggd2l0aCBTdW4tZHJpZWQgVG9tYXRvZXNcIl0pKVxuICAgIGJyZWFkc1VsLmFwcGVuZENoaWxkKGNyZWF0ZUxpKHdob2xlX1doZWF0SW1nLCAnV2hvbGUgV2hlYXQnLCBbXCJXaG9sZSBXaGVhdCBMb2FmXCIsXCJXaG9sZSBXaGVhdCBCYWd1ZXR0ZVwiXSkpXG4gICAgYnJlYWRzVWwuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoY29tYmluZWRJbWdzLCBcIlNwZWNpYWxpdHkgQnJlYWRzXCIsIFtcIkNpbm5hbW9uIFJhaXNpblwiLCBcIkhlcmIgYW5kIEdhcmxpY1wiLCBcIldhbG51dCBhbmQgQ3JhbmJlcnJ5XCJdKSlcblxuICAgIGNvbnN0IHBhc3RyaWVzVGl0bGU9IGNyZWF0ZUVsKCdoMicsICdQYXN0cmllcycpXG4gICAgY29uc3QgcGFzdHJpZXNVbD0gY3JlYXRlRWwoJ3VsJywgJycsICd1bE1lbnUnKVxuICAgIHBhc3RyaWVzVWwuYXBwZW5kQ2hpbGQoY3JlYXRlTGkoY3JvaXNzYW50SW1nLCAnQ3JvaXNzYW50cycsW1wiUGxhaW4gQ3JvaXNzYW50XCIsIFwiQWxtb25kIENyb2lzc2FudFwiLCBcIkNob2NvbGF0ZSBDcm9pc3NhbnRcIl0pKVxuICAgIHBhc3RyaWVzVWwuYXBwZW5kQ2hpbGQoY3JlYXRlTGkobXVmZkltZywgJ011ZmZpbnMnLCBbXCJCbHVlYmVycnkgTXVmZmluXCIsIFwiQ2hvY29sYXRlIENoaXAgTXVmZmluXCJdKSlcbiAgICBwYXN0cmllc1VsLmFwcGVuZENoaWxkKGNyZWF0ZUxpKHNjb25lc0ltZywnU2NvbmVzJywgW1wiQ3JhbmJlcnJ5IE9yYW5nZSBTY29uZVwiLCBcIkxlbW9uIEJsdWViZXJyeSBTY29uZVwiXSkpXG4gIFxuXG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoYnJlYWRzVGl0bGUpXG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoYnJlYWRzVWwpXG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQocGFzdHJpZXNUaXRsZSlcbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChwYXN0cmllc1VsKVxuICAgIG1haW5Db250LmFwcGVuZENoaWxkKG1lbnVTZWN0aW9uKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVMaShpbWdzcmMsIHRpdGxlLCBsaXN0ZXh0LCBpbWdzcGVjaWFsKXtcbiAgICBjb25zdCBtZW51TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG5cbiAgICBjb25zdCBwcm9kdWN0YmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZ3NwZWNpYWwgPyAgcHJvZHVjdGJnLnNyYz0gYmcgOiBwcm9kdWN0Ymcuc3JjPWJnUztcblxuICAgIGNvbnN0IHB0aXRsZT0gY3JlYXRlRWwoJ2gzJywgdGl0bGUpXG5cbiAgICBjb25zdCBwY29udGFpbmVyPSBjcmVhdGVFbCgnZGl2JywgJycsICdwcm9kdWN0JylcbiAgICBcbiAgICBsZXQgaW1nY29udFxuICAgIGltZ3NwZWNpYWwgPyBpbWdjb250PSBjcmVhdGVFbCgnZGl2JywnJywgJ3Byb2R1Y3QtaW1nJykgOiAgaW1nY29udD0gY3JlYXRlRWwoJ2RpdicsJycsICdwcm9kdWN0LWltZycsICdjb21iSW1nJyk7XG4gICAgY29uc3QgcHJvZHVjdGltZz0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBwcm9kdWN0aW1nLnNyYz0gaW1nc3JjXG4gICAgaW1nY29udC5hcHBlbmRDaGlsZChwcm9kdWN0aW1nKVxuXG4gICAgY29uc3QgdWw9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBsaXN0ZXh0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGNyZWF0ZUVsKCdsaScsZWxlbWVudCkpXG4gICAgfSk7XG5cbiAgICBwY29udGFpbmVyLmFwcGVuZChpbWdjb250LCB1bClcblxuICAgIG1lbnVMaS5hcHBlbmQocHJvZHVjdGJnLCBwdGl0bGUsIHBjb250YWluZXIpXG5cbiAgICByZXR1cm4gbWVudUxpXG59ICAgXG5cbmV4cG9ydCBkZWZhdWx0IG1lbnUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgYmFzZSBmcm9tIFwiLi9wYWdlcy9iYXNlXCJcbmltcG9ydCBob21lIGZyb20gXCIuL3BhZ2VzL2hvbWUuanNcIlxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vcGFnZXMvbWVudS5qc1wiXG5pbXBvcnQgY2xlYW5Db250ZW50IGZyb20gXCIuL2Z1bmN0aW9ucy9jbGVhbkNvbnRlbnRcIlxuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vcGFnZXMvY29udGFjdFwiXG5cbmJhc2UoKVxuaG9tZSgpXG5jb25zdCBuYXZiYXJMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtYWluLW5hdiBsaScpXG5uYXZiYXJMaVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dIb21lKVxubmF2YmFyTGlbMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TWVudSlcbm5hdmJhckxpWzJdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0NvbnRhY3QpXG5cblxuZnVuY3Rpb24gc2hvd0hvbWUoKXtcbiAgICBtYW5hZ2VFdmVudHMoJ2hvbWUnLCBuYXZiYXJMaSlcbiAgICBjbGVhbkNvbnRlbnQoKVxuICAgIHNldFRpbWVvdXQoaG9tZSwgOTUwKVxufVxuXG5mdW5jdGlvbiBzaG93TWVudSgpe1xuXG4gICAgbWFuYWdlRXZlbnRzKCdtZW51JywgbmF2YmFyTGkpXG4gICAgY2xlYW5Db250ZW50KClcbiAgICBzZXRUaW1lb3V0KCBtZW51ICw5NTApXG59XG5cblxuXG5mdW5jdGlvbiBzaG93Q29udGFjdCgpe1xuXG4gICAgbWFuYWdlRXZlbnRzKCdjb250YWN0JywgbmF2YmFyTGkpXG4gICAgY2xlYW5Db250ZW50KClcbiAgIHNldFRpbWVvdXQoY29udGFjdCw5NTApXG5cbn1cblxuZnVuY3Rpb24gbWFuYWdlRXZlbnRzKGZ1bmMsIGxpc3Qpe1xuICAgXG4gICAgc3dpdGNoKGZ1bmMpe1xuICAgICAgICBjYXNlICdob21lJzogICBcblxuICAgICAgICAgICAgcmVtb3ZlRXZlbnRzKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBsaXN0WzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd01lbnUpO1xuICAgICAgICAgICAgICAgIGxpc3RbMl0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Q29udGFjdCk7ICBcbiAgICAgICAgICAgIH0sIDk1MCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ21lbnUnOlxuXG4gICAgICAgICAgICByZW1vdmVFdmVudHMoKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IFxuICAgICAgICAgICAgICAgIGxpc3RbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93SG9tZSk7XG4gICAgICAgICAgICAgICAgbGlzdFsyXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dDb250YWN0KTtcbiAgICAgICAgICAgIH0sIDk1MCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICBjYXNlICdjb250YWN0JzpcblxuICAgICAgICAgICAgcmVtb3ZlRXZlbnRzKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBsaXN0WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0hvbWUpO1xuICAgICAgICAgICAgICAgIGxpc3RbMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TWVudSk7XG4gICAgICAgICAgICB9LCA5NTApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlRXZlbnRzKCl7XG4gICAgICAgIGxpc3RbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93SG9tZSlcbiAgICAgICAgbGlzdFsxXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNZW51KVxuICAgICAgICBsaXN0WzJdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0NvbnRhY3QpXG4gICAgICAgIFxuICAgIH1cbiAgIFxuICBcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==