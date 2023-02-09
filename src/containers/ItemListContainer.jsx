import ItemList from '../components/ItemList'
// import { productsData } from './../data/productsData';
import { getFirestore, query, where } from 'firebase/firestore';
import Banner from './../components/Banner';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';


const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const id = useParams();
    
    useEffect (() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "productsData");
        
        
        if (id && id.categoryId) {
            // const item = productsData.filter(product => product.category === id.categoryId)
            // setProducts(item)
            const queryfil = query(queryCollection, where("category", "==", id.categoryId));
        getDocs(queryfil)    
            .then(res => setProducts(res.docs.map (product => ({id: product.id, ...product.data()}) )) )
            
        }else {
            // setProducts(productsData)
            getDocs(queryCollection)    
            .then(res => setProducts(res.docs.map (product => ({id: product.id, ...product.data()}) )) )

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