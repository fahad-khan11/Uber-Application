import { Link } from 'react-router-dom'
import oneImage from '../assets/Images/logo.png'
import { useState } from 'react'

const CaptainSignup = () => {
 const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
 const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [userData,setUserData] = useState({})


  const submitHandler = (e) => {
    e.preventDefault()
    setUserData({
      fullName: {
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
      }
    })
    console.log(userData);
    
    setEmail('')
    setPassword('')
    setFirstName('')
    setLastName('')
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
    <div>
    <img className='w-16 mb-10 ' src={oneImage} alt="" />
    <form onSubmit={(e)=>{
     submitHandler(e)}} 
     >
       <h3 className='text-lg mb-2 font-medium'>what's our captain name</h3>

       <div className='flex gap-2 mb-5'>
       <input className='bg-[#eeeee] mb-7 border w-1/2 rounded px-4 py-2 text-lg placeholder:text-base'
        type="text" required 
       placeholder='First name'
       value={firstName}
        onChange={(e)=> {
          setFirstName(e.target.value)
        }}
       /> 
          <input className='bg-[#eeeee] mb-7 w-1/2 border rounded px-4 py-2 text-lg placeholder:text-base'
        type="text" required 
       placeholder='Last name'
        value={lastName}
          onChange={(e)=> {
            setLastName(e.target.value)
          }}
       />
       </div>

       <h3 className='text-lg mb-2 font-medium'>what's our captain's email</h3>
       <input className='bg-[#eeeee] mb-7 border w-full rounded px-4 py-2 text-lg placeholder:text-base'
        type="email" required 
       placeholder='email@example.com'
        value={email}
        onChange={(e)=> {
          setEmail(e.target.value)
        }
        }

       /> 
       <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>
       <input className='bg-[#eeeee] mb-7 border rounded px-4 py-2 w-full text-base placeholder:text-base'
        type="password" 
        required placeholder='Enter the password'
        value={password}
        onChange={(e)=> {
          setPassword(e.target.value)
        }}
        /> 
       <button className='bg-pink-400 text-white font-semibold mb-3 border rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
       <p className='text-center'>Already have an account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
     </form>
    </div>
    <div>
      <p className='text-[10px] leading-tight'>
        By proceeding, I agree that Uber or its representatives may contact me by email, phone, or SMS (including by automatic telephone dialing system) at the email address or number I provide, including for marketing purposes. I have read and understand the relevant Driver Privacy Statement.
      </p>
    </div>
   </div>
  )
}

export default CaptainSignup