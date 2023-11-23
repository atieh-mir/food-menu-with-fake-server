import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import "../style/menuInfo.css";
const FOOD_API = "  http://localhost:3000/menu"
export const MenuInfo = () => {
    const[menuInfo,setMenuInfo] = useState([])
    const {id} = useParams();


   useEffect(()=>{

    fetch(`${FOOD_API}/${id}`)
        .then(res => res.json())
        .then(data => {
          setMenuInfo(data);
          console.log(id);
         })
         .catch(e =>{
           console.log(e)
         })
},[])

const {title, img, price, description} = menuInfo;
    return(
       <div className="menu-info-container">
        <img src={img} className="food--img"/>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <p className="price"> price: {price}</p>
       </div>
    )
}