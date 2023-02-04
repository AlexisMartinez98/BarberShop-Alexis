import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import './App.css'
import ItemListContainer from './containers/ItemListContainer'
import Footer from './components/Footer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import Cart from './components/Cart';
import CartProvider from './contex/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/:itemId' element={<ItemDetailContainer/>}/>
            </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
