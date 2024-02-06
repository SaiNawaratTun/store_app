import React from 'react'

export default function ItemList() {
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
            <div className='w-full grid grid-cols-2 md:grid-cols-4 text-center gap-5 mt-6'>
                <div className='space-y-2 border border-gray-700 rounded-lg shadow-xl shadow-gray-500 p-3'>
                    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
                    <h2>Title</h2>
                    <p>1000kyats</p>
                </div>
                <div className='space-y-2 border border-gray-700 rounded-lg shadow-xl shadow-gray-500 p-3'>
                    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
                    <h2>Title</h2>
                    <p>1000kyats</p>
                </div>
                <div className='space-y-2 border border-gray-700 rounded-lg shadow-xl shadow-gray-500 p-3'>
                    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
                    <h2>Title</h2>
                    <p>1000kyats</p>
                </div>
                <div className='space-y-2 border border-gray-700 rounded-lg shadow-xl shadow-gray-500 p-3'>
                    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
                    <h2>Title</h2>
                    <p>1000kyats</p>
                </div>
                <div className='space-y-2 border border-gray-700 rounded-lg shadow-xl shadow-gray-500 p-3'>
                    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
                    <h2>Title</h2>
                    <p>1000kyats</p>
                </div>
                <div className='space-y-2 border border-gray-700 rounded-lg shadow-xl shadow-gray-500 p-3'>
                    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" />
                    <h2>Title</h2>
                    <p>1000kyats</p>
                </div>

            </div>
        </div>
    )
}
