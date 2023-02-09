import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import './App.css'
import ItemListContainer from './containers/ItemListContainer'
import Footer from './components/Footer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import Cart from './components/Cart';
import Form from './form/Form';
import CartProvider from './contex/CartContext';
import '../db/firebase-config'

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
              <Route path='/form' element={<Form/>}/>
              <Route path='*' element={<h1>404 Not Found</h1>}/>
            </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
