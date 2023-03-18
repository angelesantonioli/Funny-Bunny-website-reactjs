import './CartWidget.css';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
    const { cart } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    console.log(cart);

    useEffect(() => {
        setTotal(cart.reduce((prev, curent) => prev + curent.quantity, 0))
    }, [cart])
    return (
        <Link to={'/cart'}>
            <div className="cart">
                <li><img className="icon2" alt='carrito' src={"./shopping-cart.png"} /></li>
                {total}
            </div>
        </Link>
    )
}

export default CartWidget;