export default function cleanContent(){
    const container= document.querySelector('#content')

    if(container.firstElementChild){
        container.firstElementChild.className='seg'
        setTimeout(() => {
            container.firstElementChild.remove()
            
        }, 950);
        }
   
}