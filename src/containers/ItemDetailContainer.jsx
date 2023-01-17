import { Route, Routes} from "react-router-dom";
import React from 'react'
import ItemDetail from '../components/ItemDetail'
import data from '../data/data.json'

const ItemDetailContainer = () => {

    return (
        <> 
            <Routes>
                <Route path='/maquinas/:id' element={<ItemDetail data= {data}/>}/>
                <Route path='/herramientas/:id' element={<ItemDetail data= {data}/>}/>
                <Route path='/accesorios/:id' element={<ItemDetail data= {data}/>}/>
            </Routes>
        </>
    )
}

export default ItemDetailContainer