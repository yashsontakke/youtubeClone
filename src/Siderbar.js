import React from 'react'
import { useSelector } from 'react-redux'

const Siderbar = () => {
  const visibile = useSelector((state)=>state.Sidebar.isVisible);
 
  if(!visibile)  return null ;

  return (
    // <div className='w-72 '>
    //     <ul className='h-52 pl-8 py-4 px-10' >
    //         <li>Home</li>
    //         <li>Shorts</li>
    //         <li>Subscriptions</li>
    //         <li>YoutubeMusic</li>
    //     </ul>
    // </div>
    <div className='w-72'>
    <ul className='h-52 pl-8 py-4 px-10 bg-gradient-to-b from-purple-500 to-indigo-500 text-white rounded-lg'>
      <li className='mb-4 text-lg font-bold'>Home</li>
      <li className='mb-4 text-lg font-bold'>Shorts</li>
      <li className='mb-4 text-lg font-bold'>Subscriptions</li>
      <li className='mb-4 text-lg font-bold'>YoutubeMusic</li>
    </ul>
  </div>
  
  )
}

export default Siderbar