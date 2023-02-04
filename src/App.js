import './App.css';
import NavBar from './componets/NavBar';
import ItemListContainer from './componets/ItemListContainer'

function App() {
  return (
    <div className="App"  style={ {backgroundColor: 'rgb(230, 161, 228)'} } >
      <NavBar />
      <ItemListContainer name="customer" />
    </div>
  );
}

export default App;
