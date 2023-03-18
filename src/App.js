import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import Cart from './componets/Cart/Cart';
import CartProvider from './componets/context/CartProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
    <Routes>
      <Route path="/" element= {<ItemListContainer/>} />
      <Route path="/cart" element= {<Cart/>} />
      <Route path="/item/:id" element= {<ItemDetailContainer/>} />
      <Route path="/category/:categoryId" element= {<ItemListContainer/>} />
      <Route path="*" element= {<div><h1> ¡Opps! Esa página no existe</h1></div>} />
    </Routes>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;
