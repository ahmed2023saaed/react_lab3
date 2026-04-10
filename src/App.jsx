
import './App.css'
import React from 'react'
import About from "./pages/about"

import { Link , BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Profile from './pages/profile'
import Settings from './pages/settings'
import Login from './pages/login'
import ProtectedRoute from './pages/guard'
import SignUp from './pages/signUp'
export default function App() {

  return (
    <>



    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route  path='/signUp' element={<SignUp/>}/>
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
          }>
          <Route path='profile' element={<Profile/>}  />
          <Route path='settings' element={<Settings/>}  />
        </Route>
      </Routes>
    </BrowserRouter>




    </>
  )
}


