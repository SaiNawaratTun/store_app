import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='w-full border-b-2'>
            <ul className=' max-w-7xl mx-auto flex p-4  justify-between'>
                <div>
                    <Link to={'/'}>Logo</Link>
                </div>
                <div className='flex space-x-3'>
                    <Link to={'/'} className='font-medium'>Home</Link>
                    <NavLink to={'/create'} className='font-medium'>Create</NavLink>
                    <li className='font-medium'>About</li>
                </div>
            </ul>
        </div>
    )
}
