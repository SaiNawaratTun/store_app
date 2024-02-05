import React, { useEffect, useState } from 'react'

export default function ItemForm() {
    let [title, setTitle] = useState('');
    let [price, setPrice] = useState('');
    let [type, setType] = useState('food');
    let [file, setFile] = useState(null);
    let [preview, setPreview] = useState('')

    let handleImageChange = (e) => {
        e.preventDefault();
        setFile(e.target.files[0])
    }

    let handlePreviewImage = (file) => {
        let reader = new FileReader;
        reader.readAsDataURL(file);

        reader.onload = () => {
            setPreview(reader.result)
        }
    }

    useEffect(() => {
        if (file) {
            handlePreviewImage(file);
        }
    }, [file])


    return (
        <div className='w-full flex justify-center p-8'>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">
                            Title {title}
                        </label>
                        <input value={title} onChange={e => setTitle(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="" type="text" placeholder="Please Enter Item Title" />
                        {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">
                            Price {price}
                        </label>
                        <input value={price} onChange={e => setPrice(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="" type="number" min='50' placeholder="Please Enter Price" />
                        {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">
                            Image
                        </label>
                        <input type="file" onChange={handleImageChange} />
                        {!!preview && <img src={preview} alt="" className='w-full md:w-1/2' />}
                    </div>
                </div>
                <div className="w-full md:w-1/3 mb-3 sm:mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                        Type {type}
                    </label>
                    <div className="relative">
                        <select value={type} onChange={e => setType(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option value='food'>Food</option>
                            <option value='drink'>Drink</option>
                            <option value='thing'>Thing</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className='border rounded-lg text-center bg-blue-500'>
                    <button className='px-1 py-2 text-white text-xl'> Create</button>
                </div>

            </form>
        </div>
    )
}
