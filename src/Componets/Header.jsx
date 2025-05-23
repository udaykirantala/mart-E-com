import logo from '../assets/Images/achieversIT.png'
import '../Componets/Header.css'
export const Header = ()=>{
    return(
        <>
        <div className='headerContainer'>
            <div className='headerImage'>
                <img src={logo} alt="Logo" />
            </div>
            <div>
                <nav>
                    <ul className='headerLinks'>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Cart</li>
                        <li><i class="fa-solid fa-user"></i></li>
                        <li><i class="fa-solid fa-cart-shopping"></i></li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}