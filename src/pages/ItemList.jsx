import React from 'react'
import useFirestore from '../hooks/useFirestore'
import trash from '../assets/trash.svg'
import pencil from '../assets/pencil.svg'
import { Link } from 'react-router-dom'

export default function ItemList() {

    let { getcollection, deleteCollection } = useFirestore()

    let { data: items } = getcollection('items');

    let deleteItem = async (id) => {
        await deleteCollection('items', id)
    }

    return (
        <div className='w-full'>
            <div className='flex flex-wrap gap-3 justify-center'>
                <button className="transition ease-in-out delay-150 px-5 py-2 rounded-lg text-white font-medium bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
                    Foods
                </button>
                <button className="transition ease-in-out delay-150 px-5 py-2 rounded-lg text-white font-medium bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
                    Drinks
                </button>
                <button className="transition ease-in-out delay-150 px-5 py-2 rounded-lg text-white font-medium bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
                    Things
                </button>
            </div>
            {!!items && <div className='w-full grid grid-cols-2 md:grid-cols-4 text-center gap-5 mt-6'>
                {items.map(item => (
                    <div className='w-full flex flex-col justify-center space-y-2 border border-gray-700 rounded-lg shadow-xl shadow-gray-500 p-3' key={item.id}>
                        <img src={item.image} alt="" className=' h-36 md:h-64' />
                        <h2>{item.title}</h2>
                        <p>{item.price} kyats</p>
                        <div className='w-full flex justify-center gap-2'>
                            <Link to={`/edit/${item.id}`} className=' cursor-pointer'>
                                <img src={pencil} alt="" />
                            </Link>
                            <img src={trash} alt="" className=' cursor-pointer' onClick={e => deleteItem(item.id)} />
                        </div>
                    </div>
                ))}
            </div>}
        </div>
    )
}
