//import logo from './logo.svg';

import './App.scss';
import {Header} from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemListContainer} from './components/Main/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/Main/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/libros/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={ <Navigate to="/"/>} />         
        </Routes>
        {/*<Footer/>*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
