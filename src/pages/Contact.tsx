import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AddLocationIcon from '@mui/icons-material/AddLocation';

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";


export default function Contact() {

  const ImageUrl = "../../public/dev.jpg"
  return (
    <div>
      
      <div className="c bg-amber-50
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
                text-gray-600
                pt-3
                ' >
                  I wholeheartedly encourage you to reach out and connect with me at your earliest convenience; 
                  whether you have questions, <br /> ideas, or simply wish to engage in a meaningful conversation, I am always 
                  eager to hear from you and <br /> look forward to the opportunity to communicate and collaborate.
                </p>
    
       
      </div>
      

      <div className="hC flex justify-center gap-5 pt-7 m-10">

        <div className="cont">
         <form action="" className="flex flex-col gap-6">
  <div className="in flex gap-2">
    <div className="flex flex-col">
      <label htmlFor="email" className="font-medium text-sm text-gray-700 mb-1">Email</label>
      <input
        id="email"
        className="bg-stone-100 shadow p-2"
        type="email"
        placeholder="Email.."
        style={{ minWidth: '22rem', borderRadius: '2px' }}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="subject" className="font-medium text-sm text-gray-700 mb-1">Subject</label>
      <input
        id="subject"
        className="bg-stone-100 shadow p-2"
        type="text"
        placeholder="Subject.."
        style={{ minWidth: '22rem', borderRadius: '2px' }}
      />
    </div>
  </div>

  <div className="flex flex-col">
    <label htmlFor="name" className="font-medium text-sm text-gray-700 mb-1">Name</label>
    <input
      id="name"
      className="bg-stone-100 shadow p-2"
      type="text"
      placeholder="Name.."
      style={{ borderRadius: '2px' }}
    />
  </div>

  <div className="flex flex-col">
    <label htmlFor="message" className="font-medium text-sm text-gray-700 mb-1">Message</label>
    <textarea
      id="message"
      className="bg-stone-100 shadow p-2"
      placeholder="Message.."
      style={{ resize: 'both', minHeight: '15rem', borderRadius: '2px' }}
    />
  </div>

  <button className="bg-stone-200 p-2 font-bold cursor-pointer w-full px-4 rounded">
    Submit
  </button>
</form>

        </div>

<div
  className="cont2 w-full bg-center bg-cover rounded-lg shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition"
  style={{
    minWidth: '32rem',
    backgroundImage: `url(${ImageUrl})`,
    position: 'relative',
  }}
>
  <div
    className="overlay"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity here
      zIndex: 0,
    }}
  ></div>
  <h5 className="text-center font-bold z-10 text-white shadow text-3xl text-shadow-2xs">Our NewsLetters</h5>

  <p className="text-white text-center p-10 text-shadow-2xs z-10 mt-2 px-4 text-sm sm:text-base">
  Stay up to date with my latest projects, updates, and web development tips. Sign up and never miss out!
</p>

<p className="text-white text-center text-shadow-2xs z-10 mt-2 px-4 text-sm sm:text-base">
  Let's stay connected! Drop your email and I’ll keep you posted on my latest dev work and passion projects.
</p>


<div className="con_socia z-10 pt-10">
  <h4 className='font-bold z text-white text-shadow-2xs'>YOU CAN REACH OUT ON MY SOCIAL MEDIA ACCOUNT</h4>

   <div
                className="socia flex justify-center gap-9"
                style={{ position: "relative", top: "1rem" }}
                data-aos="fade-up"
              >
                <a href="" className="ig">
                  <InstagramIcon className='text-white text-shadow-2xs' style={{fontSize:'2rem'}}/>
                </a>
                <a href="" className="fb">
                  <FacebookIcon className='text-white text-shadow-2xs' style={{fontSize:'2rem'}}/>
                </a>
                <a href="" className="li">
                  <LinkedInIcon className='text-white text-shadow-2xs' style={{fontSize:'2rem'}}/>
                </a>
                <a href="" className="gh">
                  <GitHubIcon className='text-white text-shadow-2xs' style={{fontSize:'2rem'}}/>
                </a>
            </div>

</div>


</div>



      </div>
      <br />

<h1 className='text-center font-semibold text-gray-500'>FOLLOW ME ON:</h1>
<div className="flex justify-center">
  


  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-7 ">
        <div className="bg-stone-100 p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-center"> < PhoneIcon className='text-stone-800' style={{fontSize:'3rem'}}/></h3>
          <p className="text-gray-600 text-center font-bold">(+63)9859537769</p>
        </div>
        
        <div className="bg-stone-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-center"> < AttachEmailIcon className='text-stone-800' style={{fontSize:'3rem'}}/> </h3>
          <p className="text-gray-600 text-center font-bold">renesalvacion26@gmail.com</p>
        </div>
        
        <div className="bg-stone-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-center"> < AddLocationIcon className='text-stone-800' style={{fontSize:'3rem'}}/> </h3>
          <p className="text-gray-600 text-center font-bold">Las Pinas City, NCR.</p>
        </div>
      </div>

</div>

      


    
    </div>
  )
}

