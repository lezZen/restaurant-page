import muffImg from "../imgs/menu/muffin.jpg";
import sourdoughImg from "../imgs/menu/Sourdough.jpg";
import sconeImg from "../imgs/menu/scones.jpg";
import croissantImg from "../imgs/menu/croissant.jpg";
import createEl from "../functions/createEl"

function home(){
    const mainCont= document.querySelector('#content')

    const homeSection= document.createElement('section')
    homeSection.id= 'home'
    

    const homeCont=createEl('div','', "home-cont")
    
    for (let i = 1; i <= 3; i++) {
      const homeP = createEl("div", null, null);
      homeP.append(
        createEl("h3", `Something`),
        createEl("p", 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum recusandae molestias ut asperiores laborum soluta quam eveniet obcaecati minima dolorem necessitatibus totam, ipsa labore earum quaerat ad iusto possimus cum, reprehenderit mollitia eos ducimus provident? Iste in unde facilis itaque?')
      );
      homeCont.appendChild(homeP);//*** */
    }
    
    const aside= createEl('aside', '', 'top')
    
    const productsTop= document.createElement('div')

    addProduct(productsTop, muffImg, "Muffin", "Lorem ipsum dolor sit amet.")
    addProduct(productsTop, sourdoughImg, "Sourdough", "Lorem ipsum dolor sit amet.")
    addProduct(productsTop, sconeImg, "Scones", "Lorem ipsum dolor sit amet.")
    addProduct(productsTop, croissantImg, "Croissant", "Lorem ipsum dolor sit amet.")

    aside.appendChild(createEl('h3', 'Top products'))
    aside.appendChild(productsTop)/** */
    homeSection.appendChild(homeCont)//********* */
    homeSection.appendChild(aside)/*** */
    mainCont.appendChild(homeSection)//**** */
}

function addProduct(top,imgsrc, title, description){
        const img =document.createElement('img')
        img.src= imgsrc
        const div =document.createElement('div')
        div.append(createEl('h4', title), createEl('p', description))
        const container= createEl('div', '', 'top-product')
        container.appendChild(img)
        container.appendChild(div)
        top.appendChild(container)
        
}
export default home