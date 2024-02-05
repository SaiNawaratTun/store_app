import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='w-full border-b-2'>
            <ul className=' max-w-7xl mx-auto flex p-4  justify-between'>
                <div>
                    <Link to={'/'}>Logo</Link>
                </div>
                <div className='flex space-x-3'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/create'}>Create</Link>
                    <li>About</li>
                </div>
            </ul>
        </div>
    )
}
