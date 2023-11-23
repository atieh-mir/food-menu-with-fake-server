
import { useState } from "react";
import aboutPicture from "../../public/image/depositphotos_252955842-stock-photo-assortment-of-various-kinds-of.jpg";
import "../style/contact.css"


export const Contac = () => {

const [name,setName] = useState('')
const [email,setEmail] = useState('')

const handleNameValu = ({target})=>{
setName(target.value)
}
const handleEmailValu = ({target})=>{
    setEmail(target.value)
}

const handleFormMenuSubmit = (e) => {
    e.preventDefault();
    if(!name || !email){
        alert("please fill form")
    }else{
        setName("");
        setEmail("")
    }

}
    return(
        <div className="contact-container">
            
                <img src={aboutPicture}  className="contact-img"/>
           
            <div  className="contact-form">
            <h1> Contact Us</h1>
                <form className="form-container" onSubmit={handleFormMenuSubmit}> 
               
                    <label  >Full Name</label>
                    <input type="text" placeholder="Enter full name" onChange={handleNameValu} value={name}/>
                    <label  >Email</label>
                    <input type="email" placeholder="Enter email..." onChange={handleEmailValu} value={email} />
                    <label  >Massage</label>
                    <textarea placeholder="Enter message..."></textarea>
                    <button type="submit">Send Massage</button>
                </form>
            </div>
        </div>
    )
}