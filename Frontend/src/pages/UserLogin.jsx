import React, { useState } from 'react'
import oneImage from '../assets/Images/logo.png'
import { Link } from 'react-router-dom'


const UserLogin = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [userData,setUserData] = useState({})


  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
      email:email,
      password:password
    })
    
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
     <div>
     <img className='w-16 mb-10 ' src={oneImage} alt="" />
     <form onSubmit={(e)=>{
      submitHandler(e)}} 
      >
        <h3 className='text-lg mb-2 font-medium'>what's your email</h3>
        <input className='bg-[#eeeee] mb-7 border rounded px-4 py-2 w-full text-lg placeholder:text-base'
         type="email" required 
        placeholder='email@example.com'
        value={email} 
        onChange={(e)=> {
          setEmail(e.target.value)
        }
        }
        /> 
        <h3 className='text-xl mb-2 font-medium'>Enter Password</h3>
        <input className='bg-[#eeeee] mb-7 border rounded px-4 py-2 w-full text-lg placeholder:text-base'
         type="password" 
         required placeholder='Enter the password'
         value={password}
         onChange={(e)=> {
          setPassword(e.target.value)
         }}
         /> 
        <button className='bg-[#111] text-white font-semibold mb-3 border rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
        <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
      </form>
     </div>
     <div>
      <Link to='/captain-login' className='bg-[#10b541] flex justify-center items-center text-white font-semibold mb-5 border rounded px-4 py-2 w-full text-lg placeholder:text-base' >Sign in as Captain</Link>
     </div>
    </div>
  )
}

export default UserLogin