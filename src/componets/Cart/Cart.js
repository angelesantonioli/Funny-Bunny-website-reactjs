import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";
import './Cart.css'

const Cart = () => {
    const { cart, clear, removeItem } = useContext(CartContext);
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const navigate = useNavigate();

    const createOrder = (event) => {
        event.preventDefault();
        const db = getFirestore();
        const querySnapshot = collection(db, 'orders');

        addDoc(querySnapshot, {
            buyer: {
                email: formValue.email,
                name: formValue.name,
                phone: formValue.phone
            },
            products: cart.map((product) => {
                return {
                    title: product.title,
                    price: product.price,
                    id: product.id,
                    quantity: product.quantity
                }
            }),
            total: cart.reduce((acc, current) => acc + current.price * current.quantity, 0),
        })
            .then((response) => {
                console.log(response.id);
                alert(`Orden con el id: ${response.id} ha sido creada`)
                updateStocks(db);
            })
            .catch((error) => console.log(error))
    };

    const updateStocks = (db) => {
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

    const handleInput = (event) => {
        setFormValue({ ...formValue, [event.target.name]: event.target.value })
    };

    return <div className='cartContainer' >
        <div>
            {
                cart.map((product) => (
                    <div className='cartProduct' key={product.title}>
                        <h2>
                            {product.title}
                        </h2>
                        <h5>
                            {product.quantity}
                        </h5>
                        <h4>
                            {product.price} USD
                        </h4>
                        <button onClick={() => removeItem(product.id)}>X</button>
                    </div>
                ))
            }
            {
                cart.length > 0 && <div className='cartSubProduct' style={{ display: 'flex', flexDirection: 'column', width: '600px', justifyContent: 'space-between' }}>
                    <h4>
                        Total a pagar: {cart.reduce((acc, current) => acc + current.price * current.quantity, 0)} USD
                    </h4>
                    <button onClick={clear}>Vaciar carrito</button>
                    <button onClick={() => navigate('/')}> Seguir comprando</button>
                </div>
            }
            {cart.length > 0 && <div>
                <form className='cartForm' >
                    <h5>Completar el formulario para completar tu orden</h5>
                    <input name='name' type='text' placeholder='Nombre' value={formValue.name} onChange={handleInput} />
                    <input name='phone' type='text' placeholder='Teléfono' value={formValue.phone} onChange={handleInput} />
                    <input name='email' type='email' placeholder='Email' value={formValue.email} onChange={handleInput} />
                    <button onClick={createOrder}>Completar compra</button>
                </form>
            </div>}
        </div>
        {
            cart.length === 0 && <div>
                <h2>No hay productos en tu carrito</h2>
                <button onClick={() => navigate('/')}> Seguir comprando</button>
            </div>
        }
    </div>;
};

export default Cart;