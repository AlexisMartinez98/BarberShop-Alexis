import  { getFirestore, doc , getDoc } from "firebase/firestore";
import ItemDetail from '../components/ItemDetail'
// import { productsData } from "../data/productsData";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect} from "react";
import MoonLoader   from "react-spinners/MoonLoader  ";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    const {itemId} = useParams();
    // // console.log(id)
    // const itemId = useLocation().pathname.split('/')[1]
    // // console.log(itemId)

    // const product = productsData.find(product => product.id == itemId)

    // useEffect(() => {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(product)
    //         }, 600)
    //     })
    //     promise.then((result) => {
    //         setItem(result)
    //     })
    // },[])

    const spiner = () => {
        return (
            <div className="flex justify-center items-center flex-col p-16 m-16">
                <MoonLoader  
                    color="#b91c1c"
                    size={100}
                    />
                <h1 className="font-bold mt-8 text-2xl">Cargando Producto...</h1>
            </div>
        )
    }
    useEffect(() => {
        const querydb = getFirestore();
        const querydoc = doc(querydb, "productsData", itemId);
            setTimeout(() => {
                getDoc(querydoc)
                .then(res => setItem({id: res.id, ...res.data()}))
                .catch(err => console.log(err))
            }, 1000)
    },[itemId])
    // console.log(item)
    return (
        <>
            {item.id ? <ItemDetail data= {item}/> : spiner()}
        </>
    )
}

export default ItemDetailContainer