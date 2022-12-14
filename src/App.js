//import logo from './logo.svg';

import './App.scss';
import {Header} from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemListContainer} from './components/Main/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/Main/ItemDetailContainer/ItemDetailContainer'
import {CartContainer} from './components/Main/CartContainer/CartContainer'
import {OrderPurchase} from './components/Main/OrderPurchase/OrderPurchase'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider} from './context/CartContext'


const App = () => {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/libros/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/busqueda/:busquedaId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
          <Route path='/orderPurchase' element={<OrderPurchase/>}/> 
          <Route path='*' element={ <Navigate to="/"/>} />   
        </Routes>
        {/*<Footer/>*/}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
