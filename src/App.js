import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';
import ProductItem from './components/ProductItem';
import ProductShow from './context/ProductShow';
import {Provider} from 'react-redux'
import store from './store/Store';

function App() {
  return (
    <div>
    <Provider store={store}>
    <ProductShow>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/item' element={<ProductItem/>}/>
      </Routes>
    </BrowserRouter>
    </ProductShow>
    </Provider>
    </div>
  );
}

export default App;
