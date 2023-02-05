import createEl from "../functions/createEl";
import bg from "../imgs/menu/bg.jpg"
import bgS from "../imgs/menu/bg2.jpg"
import combinedImgs from "../imgs/menu/combinedImgs.jpg"
import croissantImg from "../imgs/menu/croissant.jpg"
import muffImg from "../imgs/menu/muffin.jpg"
import sconesImg from "../imgs/menu/scones.jpg"
import SourdoughImg from "../imgs/menu/Sourdough.jpg"
import whole_WheatImg from "../imgs/menu/whole_wheat.jpg"

function menu(){
    const mainCont= document.querySelector('#content')
    mainCont.befo

    const menuSection= document.createElement('section')
    menuSection.id= 'menu'

    const breadsTitle= createEl('h2', 'Our Breads')
    const breadsUl= createEl('ul','', 'ulMenu')
    breadsUl.appendChild( createLi(SourdoughImg, 'Sourdough', ["Classic Sourdough","Sourdough with Olives","Sourdough with Sun-dried Tomatoes"]))
    breadsUl.appendChild(createLi(whole_WheatImg, 'Whole Wheat', ["Whole Wheat Loaf","Whole Wheat Baguette"]))
    breadsUl.appendChild(createLi(combinedImgs, "Speciality Breads", ["Cinnamon Raisin", "Herb and Garlic", "Walnut and Cranberry"]))

    const pastriesTitle= createEl('h2', 'Pastries')
    const pastriesUl= createEl('ul', '', 'ulMenu')
    pastriesUl.appendChild(createLi(croissantImg, 'Croissants',["Plain Croissant", "Almond Croissant", "Chocolate Croissant"]))
    pastriesUl.appendChild(createLi(muffImg, 'Muffins', ["Blueberry Muffin", "Chocolate Chip Muffin"]))
    pastriesUl.appendChild(createLi(sconesImg,'Scones', ["Cranberry Orange Scone", "Lemon Blueberry Scone"]))
  

    menuSection.appendChild(breadsTitle)
    menuSection.appendChild(breadsUl)
    menuSection.appendChild(pastriesTitle)
    menuSection.appendChild(pastriesUl)
    mainCont.appendChild(menuSection)
}

function createLi(imgsrc, title, listext, imgspecial){
    const menuLi = document.createElement('li')

    const productbg = document.createElement('img')
    imgspecial ?  productbg.src= bg : productbg.src=bgS;

    const ptitle= createEl('h3', title)

    const pcontainer= createEl('div', '', 'product')
    
    let imgcont
    imgspecial ? imgcont= createEl('div','', 'product-img') :  imgcont= createEl('div','', 'product-img', 'combImg');
    const productimg= document.createElement('img')
    productimg.src= imgsrc
    imgcont.appendChild(productimg)

    const ul= document.createElement('ul')
    listext.forEach(element => {
        ul.appendChild(createEl('li',element))
    });

    pcontainer.append(imgcont, ul)

    menuLi.append(productbg, ptitle, pcontainer)

    return menuLi
}   

export default menu