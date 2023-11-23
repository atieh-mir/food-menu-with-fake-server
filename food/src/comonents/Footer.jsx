import insta from '../../public/image/logo/instagram.png';
import twitter from '../../public/image/logo/twiter.png';
import facebook from '../../public/image/logo/facebook.png';
import linkdin from '../../public/image/logo/linkdin.png';
import '../style/footer.css'
export const Footer = () => {
    return(
        <div className='footer-container'>
            <img  src={insta} className='footer-img'/>
            <img  src={twitter} className='footer-img'/>
            <img  src={facebook} className='footer-img'/>
            <img  src={linkdin} className='footer-img'/>
        </div>
    )
}