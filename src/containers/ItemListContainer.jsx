import {Route, Routes } from "react-router-dom";
import ItemList from '../components/ItemList'
import ItemDetail from '../components/ItemDetail'
import data from '../data/data.json'
import Banner from './../components/Banner';

const ItemListContainer = () => {

    const {maquinas, herramientas, accesorios} = data

    return (
        <div className='itemListContainer flex flex-col'>
            <Banner/>
            <div className='grid gap-4 grid-cols-5 px-10 py-5'>
                <Routes>
                    <Route path='/' element={
                        <ItemList 
                        list= {maquinas.concat(herramientas, accesorios)}
                        />
                    }/>
                    <Route path='maquinas' element={<ItemList list= {maquinas}/>}/>
                    <Route path='herramientas' element={<ItemList list= {herramientas}/>}/>
                    <Route path='accesorios' element={<ItemList list= {accesorios}/>}/>
                </Routes>
            </div>
            
        </div>
    )
    }

export default ItemListContainer