import createEl from "../functions/createEl";

export default function contact(){
    const container = document.querySelector('#content')
    const contactS= document.createElement('section')
    contactS.id='contact'
    
    const locationSection = document.createElement('section')
    locationSection.id='location'

    const reservationSection=document.createElement('section')
    reservationSection.id= 'reservations'
        
    const form= document.createElement('form')
    
    const lname= createEl('label','Name:')
    lname.for='name'
    const iname=createinput('text','name','name')

    const lemail= createEl('label','Email:')
    lemail.for='email'
    const iemail= createinput('email','email','email')

    const ldate= createEl('label', 'Date:')
    ldate.for='date'
    const idate= createinput('datetime-local','date','date')

    const but= document.createElement('input')
    but.type= 'submit'
    but.value= 'Submit'


    locationSection.append(createEl('h2','Location & Hours'),
    createEl('p','123 Main St, Anytown USA'),createEl('p','Open 7 days a week'),
    createEl('p','Monday-Thursday: 11am-9pm'),createEl('p','Friday-Saturday: 11am-10pm'),
    createEl('p','Sunday: 12pm-9pm'))

    form.append(lname,iname,lemail,iemail,ldate,idate,but)
    reservationSection.appendChild(createEl('h2','Make a Reservation'))
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