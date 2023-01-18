import { Route, Routes} from "react-router-dom";
import React from 'react'
import ItemDetail from '../components/ItemDetail'
import { productsData } from "../data/productsData";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    const id = useParams();
    // console.log(id)
    const itemId = useLocation().pathname.split('/')[1]
    // console.log(itemId)

    const product = productsData.find(product => product.id == itemId)

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(product)
            }, 2000)
        })
        promise.then((result) => {
            setItem(result)
        })
    },[])
    
    console.log (item)
    return (
        <>
            <ItemDetail data= {item}/>
        </>
    )
}

export default ItemDetailContainer