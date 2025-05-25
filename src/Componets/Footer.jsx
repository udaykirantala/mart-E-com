import './Footer.css'
export const Footer=()=>{
    return(
        <>
        <div className="footerConatiner">
            <div className='martName'>
                <div>
                    <h2><i className="fa-solid fa-bag-shopping"></i><span>Mart</span></h2>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maxime et culpa quo quasi, repudiandae consequatur tempora hic neque consequuntur enim molestiae sit sed non eaque commodi, maiores asperiores officiis.</p>
                </div>
            </div>
            <div className='aboutUs'>
                <div>
                    <div><h2>About Us</h2></div>
                </div>
                <div className='listDatails'>
                    <ul>
                        <li>Careers</li>
                        <li>Our Stores</li>
                        <li>Our Cares</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <div className='customerCare'>
                <div>
                    <div><h2>Customer Care</h2></div>
                </div>
                <div className='listDatails'>
                    <ul>
                        <li>Help Center</li>
                        <li>How to Buy</li>
                        <li>Track Your Order</li>
                        <li>Corporate & Bulk Purchasing</li>
                        <li>Return & Refunds</li>
                    </ul>
                </div>
            </div>
            <div className='contactUs'>
                <div>
                    <div><h2>Contact Us</h2></div>
                </div>
                <div className='listDatails'>
                    <ul>
                        <li>70 Washington Square South,NewYork,NY 10012,Unitrd States</li>
                        <li>Email:example@gmail.com</li>
                        <li>Phone:+1 1123 456 780</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}