import { useContext } from "react";
import { CartContext } from "./CartContext";

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

    return (
        <div>
            {cart.map(item => (
                <div key={item.id}>
                    <div>
                        <img src={item.imgUrl} alt={item.productName} />
                    </div>
                    <div>
                        <h1>{item.productName}</h1>
                        <p>
                            {item.price} * {item.quantity} ={" "}
                            <span>{item.price * item.quantity}</span>
                        </p>
                    </div>
                    <div>
                        <div>
                            <button onClick={() => removeItem(item.id)}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                <i className="fa-solid fa-plus"></i>
                            </button>
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                <i className="fa-solid fa-minus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
