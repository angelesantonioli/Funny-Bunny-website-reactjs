import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const {cart, clear, removeItem} = useContext(CartContext);
        return <div>
            {
                cart.map((product) => (
                    <div key={product.name} style= {{display: 'flex', flexDirection:'row', width:'600px', justifyContent:'space-between'}}>
                        <h2>
                            {product.name}
                        </h2>
                        <h5>
                            {product.quantity}
                        </h5>
                        <button onClick={() => removeItem(product.id)}>X</button>
                    </div>
                ))
            }
            {
                cart.length > 0  && <button onClick={clear}>Vaciar carrito</button>
            }
        </div>;
};

export default Cart;