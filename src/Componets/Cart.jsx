import { useContext } from "react";
import { CartContext } from "./CartContext";
import '../Componets/Cart.css'

export const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

    // Update quantity, remove item if newQuantity <= 0
    const updateQuantity = (id, newQuantity) => {
        if (newQuantity <= 0) {
            removeItem(id);
        } else {
            setCart(prevCart =>
                prevCart.map(item =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };

    // Remove item from cart
    const removeItem = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const totalPrice = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0);


    return (
        <div>
        {cart.length?(
            <div className="cartConatiner">
                <div className="cartProductsDetails">
                    {cart.map(item => (
                        <div key={item.id} className="cartProductDetailsContainer">
                            <div className="cartProductDetailsImage">
                                <img src={item.imgUrl} alt={item.productName} />
                            </div>
                            <div className="cartProdctDetails">
                                <h1>{item.productName}</h1>
                                <p className="cartProdctPrice">
                                <span>${item.price}.00 * {item.quantity}</span>
                                    <span className="productTotalPrice">${item.price * item.quantity}.00</span>
                                </p>
                            </div>
                            <div className="cartDetailsButtonContainer">
                                <div className="cartDetailsRemoveBtn">
                                    <button onClick={() => removeItem(item.id)}>
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                                <div className="cartDetailsQuantityBtn">
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="cartDetailsQuantityIncBtn">
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="cartDetailsQuantityDceBtn">
                                        <i className="fa-solid fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cartSummaryDetails">
                    <h4>Cart Summary</h4><hr/>
                    <h5>Total Price:</h5>
                    <h4>${totalPrice}.00</h4>
                </div>
            </div>
        ):(
            <div className="noProdctsContainer">
                <p>Your Cart is Empty</p>
            </div>
        )}
        </div>
    );
};
