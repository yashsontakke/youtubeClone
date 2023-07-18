import React , {useEffect}from 'react'
import Sidebar from './Siderbar'
import { Outlet , useNavigate  } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Body = () => {
  // const navigate = useNavigate();
  // const navigateChanged = useSelector((state) => (
  //   state.videos.navigate 
  // ));

  // useEffect(()=>{
  //   navigate("/")
  //   console.log("path changed")
  // },[navigateChanged])

  
  
  return (
    <>
    <div className='flex '>
        <Sidebar/>
        <Outlet/>
    </div>
        
    </>
  
  )
}

export default Body