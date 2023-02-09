import React from 'react'
import Item from './Item'

const ItemList = function ({list}) {
    return list.map(({id, imageSrc, imageAlt, title, price, brand , category, name}) => (
            <Item 
                key={id}
                title={title}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                price={price}
                brand={brand}
                id={id}
                category={category}
                name={name}
            />
    ));
};

export default ItemList