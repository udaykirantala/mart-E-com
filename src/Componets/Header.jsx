import { Link } from 'react-router-dom'
import logo from '../assets/Images/achieversIT.png'
import '../Componets/Header.css'
export const Header = ({cout})=>{
    return(
        <>
        <div className='headerContainer'>
            <div className='headerImage'>
                <img src={logo} alt="Logo" />
            </div>
            <div>
                <nav>
                    <ul className='headerLinks'>
                        <li><Link to={'/home'} className='Links'>Home</Link></li>
                        <li><Link to={'/shop'} className='Links'>Shop</Link></li>
                        <li><Link to={'/cart'} className='Links'>Cart</Link></li>
                        <li><i className="fa-solid fa-user"></i></li>
                        <li className='cartLogoCount'><Link to={'/cart'} className='Links'><i className="fa-solid fa-cart-shopping"></i><sup className='countValue'>{cout}</sup></Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}