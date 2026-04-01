import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { DoctorContext } from '../context/DoctorContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext)
  const { dToken, setDToken } = useContext(DoctorContext)
  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 glass-panel sticky top-0 z-50'>
      <div className='flex items-center gap-2 text-xs'>
        <p className='font-semibold text-xl text-primary'>Prescripto</p>
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button
        onClick={logout}
        className='bg-primary text-white text-sm px-10 py-2 rounded-full hover:bg-indigo-600 shadow-md hover:shadow-lg transition-all duration-300'
      >
        Logout
      </button>
    </div>
  )
}

export default Navbar
