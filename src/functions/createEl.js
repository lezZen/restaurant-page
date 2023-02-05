export default function createEl(tag, text, classes){
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