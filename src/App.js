import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element= {<ItemListContainer/>} />
      <Route path="/item/:id" element= {<ItemDetailContainer/>} />
      <Route path="/category/:categoryId" element= {<ItemListContainer/>} />
      <Route path="*" element= {<div><h1> ¡Opps! Esa página no existe</h1></div>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
