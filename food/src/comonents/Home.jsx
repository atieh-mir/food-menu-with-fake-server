import  food from '../../public/image/food.jpg'
import '../style/home.css'
export const Home =() => {

    return(
        <div className='container'>
            <img className='home-image' src={food} />
            <div className='home-container'>
            <h1>Food corner</h1>
            <p>INDIAN FOOD AT A CLICK</p>
            <button>ORDER NOW</button>
            </div>
        </div>
    )
}