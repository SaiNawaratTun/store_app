import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { storage } from '../firebase';
import useFirestore from '../hooks/useFirestore';
import { useNavigate } from 'react-router-dom';

export default function ItemForm() {
    let [title, setTitle] = useState('');
    let [price, setPrice] = useState('');
    let [type, setType] = useState('food');
    let [file, setFile] = useState(null);
    let [preview, setPreview] = useState('')
    let [loading, setLoading] = useState(false)

    let navigate = useNavigate();

    let { addCollection } = useFirestore()

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

    let uploadImage = async (file) => {
        let uniqueFileName = Date.now().toString() + '-' + file.name;
        let path = '/images/' + uniqueFileName;
        let storageRef = ref(storage, path);
        await uploadBytes(storageRef, file);
        return await getDownloadURL(storageRef)
    }

    let submitForm = async (e) => {
        e.preventDefault();
        setLoading(true)
        let url = await uploadImage(file)
        let data = {
            title,
            price,
            type,
            image: url
        }
        await addCollection('items', data);

        navigate('/')

    }

    return (
        <div className='w-full flex justify-center p-8 '>
            <form className="w-full max-w-lg" onSubmit={submitForm}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">
                            Title
                        </label>
                        <input value={title} onChange={e => setTitle(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="" type="text" placeholder="Please Enter Item Title" />
                        {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">
                            Price
                        </label>
                        <input value={price} onChange={e => setPrice(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="" type="number" min='50' placeholder="Please Enter Price" />
                        {!!price && price < 50 ? <p className="text-red-600 text-xs italic">*** Put The price more than 50 ***</p> : <p></p>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="">
                            Image
                        </label>
                        <input class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4
                                    file:rounded-lg file:border-1 file:font-bold file:bg-blue-50 file:text-blue-700
                                 hover:file:bg-blue-100" type="file" onChange={handleImageChange} />
                        {!!preview && <img src={preview} alt="" className='w-full md:w-1/2 mt-2' />}
                    </div>
                </div>
                <div className="w-full md:w-1/3 mb-3 sm:mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                        Type
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
                <div className='border rounded-lg text-center bg-blue-500 w-full' >
                    <button className='w-full px-1 py-2 text-white text-xl flex justify-center items-center' onClick={submitForm}>
                        {loading && <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>}
                        <p>Create</p>
                    </button>
                </div>

            </form>
        </div>
    )
}
