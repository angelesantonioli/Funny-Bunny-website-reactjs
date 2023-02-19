import './App.css';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App"  style={ {backgroundColor: 'rgb(230, 161, 228)'} } >
      <NavBar />
      <ItemListContainer name="customer" />
    </div>
  );
}

export default App;
