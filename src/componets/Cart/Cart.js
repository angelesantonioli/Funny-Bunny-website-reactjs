import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";

const Cart = () => {
    const { cart, clear, removeItem } = useContext(CartContext);
    const navigate = useNavigate();
    const db = getFirestore();

    const createOrder = (event) => {
        event.preventDefault();
        const querySnapshot = collection(db, 'orders');

            addDoc(querySnapshot, {
                buyer: {
                    email: '',
                    name: '',
                    phone: ''
                },
                products: cart.map((product) => {
                    return {
                        title: product.title,
                        price: product.price,
                        id: product. id,
                        quantity: product.quantity
                    }
                }),
                total: cart.reduce((acc, current) => acc + current.price * current.quantity, 0),
            })
            .then((response) => {
                console.log(response.id);
                alert(`Orden con el id: ${response.id} ha sido creada`)
                updateStocks();
            })
            .catch((error) => console.log(error))
    };

    const updateStocks = () => {
        cart.forEach((product) => {
            const querySnapshot = doc(db, 'products', product.id);

            updateDoc(querySnapshot, {
                stock: product.stock - product.quantity,
            })
            .then(() => {
                alert('El stock fue actualizado')
            })
            .catch((error) => console.log(error))
        })
    };

    return <div>
        {
            cart.map((product) => (
                <div key={product.title} style={{ display: 'flex', flexDirection: 'row', width: '600px', justifyContent: 'space-between' }}>
                    <h2>
                        {product.title}
                    </h2>
                    <h5>
                        {product.quantity}
                    </h5>
                    <h2>
                        {product.price} USD
                    </h2>
                    <button onClick={() => removeItem(product.id)}>X</button>
                </div>
            ))
        }
        {
            cart.length > 0 && <div style={{ display: 'flex', flexDirection: 'row', width: '600px', justifyContent: 'space-between' }}>
                <h2>
                    Total a pagar: {cart.reduce((acc, current) => acc + current.price * current.quantity, 0)}
                </h2>
                <button onClick={clear}>Vaciar carrito</button>
                <button onClick={() => navigate('/')}> Seguir comprando</button>
                <button onClick={createOrder}>Completar compra</button>
            </div>
        }
        {
            cart.length === 0 && <div>
                <h2>No hay productos en tu carrito</h2>
                <button onClick={() => navigate('/')}> Seguir comprando</button>
            </div>
        }
    </div>;
};

export default Cart;