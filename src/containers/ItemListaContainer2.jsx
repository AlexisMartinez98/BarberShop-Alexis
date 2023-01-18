import React from 'react'
import { productsData } from './../data/productsData';
import { useState } from 'react';

const ItemListaContainer2 = () => {

    console.log(productsData)

    const products = productsData.map (product => {
        return (
            <div>
                <h1>{product.title}</h1>
                <img src={product.imageSrc} alt={product.imageAlt}/>
                <p>{product.price}</p>
                <p>{product.brand}</p>
                <p>{product.category}</p>
            </div>
        )
    })
    return (
        <div>{products}</div>
    )
}

export default ItemListaContainer2