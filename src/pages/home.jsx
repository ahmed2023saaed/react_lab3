import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {



  return (
    <>
    <div className=' text-2xl  text-center my-4'>home</div>

    <Link to={"/dashboard"}>go to dashboard</Link>
    <Link to={"/signUp"}>go to signUp</Link>
    </>
  )
}
