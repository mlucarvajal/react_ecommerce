import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <ItemListContainer  greeting= {'PROXIMAMENTE TIENDA DE GAFAS'}/>
    </div>
  );
}

export default App;
