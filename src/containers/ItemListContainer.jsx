import ItemList from '../components/ItemList'
import { productsData } from './../data/productsData';
import Banner from './../components/Banner';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const id = useParams();
    // console.log(id)

    const item = productsData.filter(product => product.category === id.categoryId)
    // console.log(item)
    
    useEffect (() => {
        if (id && id.categoryId) {
            const item = productsData.filter(product => product.category === id.categoryId)
            setProducts(item)
            
        }else {
            setProducts(productsData)
        }
    },[id])

    return (
        <div className='itemListContainer flex flex-col'>
            <Banner/>
            <div className='grid gap-4 grid-cols-5 px-10 py-5'>
                        <ItemList 
                        list= {products}
                        />
            </div>
            
        </div>
    )
    }

export default ItemListContainer