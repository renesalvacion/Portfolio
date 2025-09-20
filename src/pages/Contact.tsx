import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AddLocationIcon from '@mui/icons-material/AddLocation';

export default function Contact() {
  return (
    <div>
      <h1 className='text-3xl font-extrabold text-center text-gray-400 underline'>Contact </h1>
      <br />
      <div className="c bg-stone-200
      flex justify-center align-middle flex-col" style={{ width:'100%', height:'30vh', }}>
        <h1 
        className='text-3xl
        font-bold
        text-center
        pt-2
        '>Get In Touch With Me</h1>

        
             <p 
                className='
                font-semibold
                text-center
                pt-3
                ' >
                  I wholeheartedly encourage you to reach out and connect with me at your earliest convenience; 
                  whether you have questions, <br /> ideas, or simply wish to engage in a meaningful conversation, I am always 
                  eager to hear from you and <br /> look forward to the opportunity to communicate and collaborate.
                </p>
    
       
      </div>
      

      <div className="hC flex justify-center gap-5 pt-7">

        <div className="cont">
          <form action="" className='flex flex-col gap-6 ' >
            <div className="in flex gap-0.5">
                  <input className='bg-slate-50' type="text" placeholder='Email..'  style={{minWidth:'22rem', borderRadius:'2px'}}/>
                  <input className='bg-indigo-50' type="text" placeholder='Subject..' style={{minWidth:'22rem',borderRadius:'2px'}}/>
            </div>
           
            <input className='bg-lime-50' type="text" placeholder='Name..'  style={{borderRadius:'2px'}}/>
            <input className='bg-lime-50' type="text" placeholder='Message..'  style={{resize:'both', minHeight:'15rem',borderRadius:'2px'}}/>
          <button className='bg-stone-200 p-2 font-bold cursor-pointer' >Submit</button>
          </form>

        </div>

        <div className="cont2 bg-teal-50 rounded-lg shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition" 
        style={{minWidth:'32rem'}}
        >
          <h5 className='text-center font-bold'>Our NewLetters</h5>
        </div>

      </div>
      <br />

<div className="flex justify-center">


  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-7 ">
        <div className="bg-stone-100 p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-center"> < PhoneIcon className='text-stone-800' style={{fontSize:'3rem'}}/></h3>
          <p className="text-gray-600">Content for the first card goes here.</p>
        </div>
        
        <div className="bg-stone-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-center"> < AttachEmailIcon className='text-stone-800' style={{fontSize:'3rem'}}/> </h3>
          <p className="text-gray-600">Content for the second card goes here.</p>
        </div>
        
        <div className="bg-stone-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-center"> < AddLocationIcon className='text-stone-800' style={{fontSize:'3rem'}}/> </h3>
          <p className="text-gray-600">Content for the third card goes here.</p>
        </div>
      </div>

</div>

      


    
    </div>
  )
}

