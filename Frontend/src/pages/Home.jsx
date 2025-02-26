import React from 'react'
import oneImage from '../assets/Images/logo.png'
import bgImage from '../assets/Images/app.png'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
        <div className='h-screen pt-8 bg-center  bg-no-repeat flex justify-between flex-col w-full' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "100% auto",  // Full width, automatic height
    backgroundPosition: "top center" }}>
        {/* <img src="/assets/Images/one.png" alt="One" /> */}
        <img className='w-14 ml-8 ' src={oneImage} alt="" />
            <div className='bg-white py-4 px-4 '>
                <h2 className='text-xl font-bold'>Get Started with Uber</h2> 
                <Link to='/login' className='flex justify-center items-center w-full bg-black text-white py-3 mt-5 rounded '>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home