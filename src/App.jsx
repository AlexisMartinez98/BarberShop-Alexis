import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import './App.css'
import ItemListContainer from './containers/ItemListContainer'
import Footer from './components/Footer'
import ItemDetailContainer from './containers/ItemDetailContainer'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/:itemId' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
