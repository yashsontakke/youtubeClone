import React from 'react'
const Shimmer = () => {
    return (
        <>
            <div className='flex flex-wrap'>
                {Array(20).fill("").map((a, index) => (
                    <div key={index} className='w-72 p-2 m-2 h-40 bg-gradient-to-r from-gray-400 to-gray-300 rounded-lg shadow-md'>
                        <div className='animate-pulse bg-gradient-to-r from-gray-300 to-gray-400 h-full rounded-lg'></div>
                    </div>
                ))}
            </div>

        </>

    )
}

export default Shimmer