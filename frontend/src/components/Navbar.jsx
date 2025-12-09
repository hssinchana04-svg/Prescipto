import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)

  const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-grey-400'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          {({ isActive }) => (
            <div className='flex flex-col items-center gap-1'>
              <p>HOME</p>
              <div className={`w-3/5 h-0.5 bg-gray-700 ${isActive ? 'block' : 'hidden'}`} />
            </div>
          )}
        </NavLink>
        <NavLink to='/doctors'>
          {({ isActive }) => (
            <div className='flex flex-col items-center gap-1'>
              <p>ALL DOCTORS</p>
              <div className={`w-3/5 h-0.5 bg-gray-700 ${isActive ? 'block' : 'hidden'}`} />
            </div>
          )}
        </NavLink>
        <NavLink to='/about'>
          {({ isActive }) => (
            <div className='flex flex-col items-center gap-1'>
              <p>ABOUT</p>
              <div className={`w-3/5 h-0.5 bg-gray-700 ${isActive ? 'block' : 'hidden'}`} />
            </div>
          )}
        </NavLink>
        <NavLink to='/contact'>
          {({ isActive }) => (
            <div className='flex flex-col items-center gap-1'>
              <p>CONTACT</p>
              <div className={`w-3/5 h-0.5 bg-gray-700 ${isActive ? 'block' : 'hidden'}`} />
            </div>
          )}
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
          token ? <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8  rounded-full' src={assets.profile_pic} alt="" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>

          </div>
            : <button onClick={() => navigate('/login')} className='bg-blue-500 text-white px-5 py-2 rounded-full font-light hidden md:block cursor-pointer hover:bg-blue-600'>Create account</button>
        }

      </div>
    </div>
  )

}

export default Navbar
