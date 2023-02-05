import headerImg from "../imgs/bread_hhtfjg_c_scale,w_1400.jpg"
import createEl from "../functions/createEl"

function base(){
    const container= document.querySelector('#content')

    function header(){
    const headerSection= document.createElement('header')

    const headTextCont= createEl('div', '', 'title')
    headTextCont.append(createEl('h1','My Bakery'),createEl('p', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam placeat saepe quas laudantium quasi officia error! Alias aperiam natus nulla officia laborum neque cumque non repudiandae, nobis magni nemo necessitatibus.'))

    const headImgCont= createEl('div','','image-wrap')
    const headImg= createEl('img','','bee')
    headImg.src= headerImg
    headImgCont.appendChild(headImg)

    headerSection.appendChild(headTextCont)
    headerSection.appendChild(headImgCont)
    document.body.insertBefore(headerSection, container)
    }
 

    function nav(){
        const navSection= document.createElement('section')
        navSection.id= 'main-nav'
        const nav = document.createElement('nav')
        const ul = createEl('ul', '', 'sections-list')
        ul.role= 'list'
        
        const liList= [document.createElement('li'), document.createElement('li'), document.createElement('li')]
        liList[0].appendChild(createEl('a','Home'))
        liList[1].appendChild(createEl('a','Menu'))
        liList[2].appendChild(createEl('a','Contact'))
        
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
        const p = createEl('p','Follow us on:')
        const ul = document.createElement('ul')
        ul.role='list'
        
        const liList= [document.createElement('li'), document.createElement('li')]
        liList[0].appendChild(createEl('a','Facebook'))
        liList[1].appendChild(createEl('a','Instagram'))
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

export default  base
