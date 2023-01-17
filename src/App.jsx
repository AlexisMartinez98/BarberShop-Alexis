import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import './App.css'
import ItemListContainer from './containers/ItemListContainer'
import Footer from './components/Footer'
import ItemDetailContainer from './containers/ItemDetailContainer'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
      <Footer/>
    </>
  )
}

export default App
