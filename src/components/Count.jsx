import React from 'react'
import { useState} from 'react'

const Count = ({item, onAdd}) => {
    const [count, setCount] = useState(1)

    const handleAdd = () => {
        setCount(count + 1 > item.stock ? count : count + 1)
    }

    const handleSubstract = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <div className='flex items-center justify-center'>
                <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded' onClick={handleSubstract}>-</button>
                <span className='font-bold m-4'>{count}</span>
                <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded' onClick={handleAdd}>+</button>
            </div>
            <button className='bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded w-full uppercase' onClick={() => onAdd(count) & alert(`se agrego ${count} producto ${item.brand}`)}>Agregar Producto</button>
        </div>

    )
}

export default Count