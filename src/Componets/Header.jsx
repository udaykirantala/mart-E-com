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
                        <Link to={'/home'}><li>Home</li></Link>
                        <Link to={'/shop'}><li>Shop</li></Link>
                        <Link to={'/cart'}><li>Cart</li></Link>
                        <li><i className="fa-solid fa-user"></i></li>
                        <Link to={'/cart'}><li><i className="fa-solid fa-cart-shopping"></i><sup>{cout}</sup></li></Link>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}