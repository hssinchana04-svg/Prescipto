import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [state, setState] = useState('Admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setAToken, backendUrl } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post(`${backendUrl}/api/admin/login`, { email, password })
      if (data.success) {
        localStorage.setItem('aToken', data.token)
        setAToken(data.token)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='bg-white px-8 py-6 rounded-lg shadow-lg w-full max-w-sm'>
        <div className='flex flex-col gap-3'>
          <p className='text-2xl font-semibold m-auto'>
            <span className='text-primary'>Admin</span> Login
          </p>
          <div>
            <p className='text-sm font-medium text-gray-500 mt-3'>Email</p>
            <input
              onChange={e => setEmail(e.target.value)}
              value={email}
              className='border border-gray-300 rounded w-full p-2 mt-1 outline-none focus:border-primary'
              type="email"
              required
            />
          </div>
          <div>
            <p className='text-sm font-medium text-gray-500 mt-3'>Password</p>
            <input
              onChange={e => setPassword(e.target.value)}
              value={password}
              className='border border-gray-300 rounded w-full p-2 mt-1 outline-none focus:border-primary'
              type="password"
              required
            />
          </div>
          <button className='bg-primary text-white w-full py-2 rounded-md text-sm mt-2 hover:bg-indigo-600 transition-colors'>
            Login
          </button>
        </div>
      </div>
    </form>
  )
}

export default Login
