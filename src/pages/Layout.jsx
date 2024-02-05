import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Layout() {
    return (
        <div className='w-screen'>
            <Navbar />
            <div className='max-w-7xl mx-auto p-3'>
                <Outlet />
            </div>
        </div>
    )
}
