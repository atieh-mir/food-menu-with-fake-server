import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/menu.css";

const LIST_MENU = "  http://localhost:3000/menu";


export const Menu = () => {

   const [listMenu, setListMenu] = useState([]);

   useEffect(()=>{
        fetch(LIST_MENU)
        .then(res => res.json())
        .then(data => {
          setListMenu(data);
   
         })
         .catch(e =>{
           console.log(e)
         })
 
   },[])
   
   
    return(
        <div className="container--menu">
        <div>
        <h1>Our Menu</h1>
        <div className="menu--list">{
         listMenu.map(({id,title,price,img})=>{
            return(
             <Link to={`/menu/${id}`}     key={id} className="link">
              <div  className="list--food" >
                <img src={img}/>
                <h3>{title}</h3>
              <p>{price}</p>
              </div></Link>
            )
          })
        }</div>
        </div>
        </div>
    )
}