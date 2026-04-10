import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {



  return (
    <>
    <div className='text-center'>dashboard</div>

<div className='flex items-center flex-col gap-3 my-2'>

    <Link to={"/dashboard/settings"}>go to Setting</Link>
    <Link to={"/dashboard/profile"}>go to profile</Link>
    
</div>
    <Outlet/>
    </>


  )
}
