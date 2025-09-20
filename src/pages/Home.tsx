import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import Email from '../components/Modal';
export default function Home() {

  const [isOpen, setOpenModal] = useState(false)

   useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      // other settings as needed
    });

    // If content changes (e.g., dynamic elements), refresh
    // AOS.refresh();

  }, []);
  return (
    <div>
  
      <div className="hone">
        <h1 data-aos="fade-right">PORT <br /> FOLIO</h1>
      </div>
      <div className="htwo">
        <div className="name flex flex-col align-middle justify-center" data-aos="fade-up">
          <h2 className='text-4xl font-extrabold'>RENE O. SALVACION JR.</h2>
          <h5 style={{textAlign:'center', fontWeight:'500'}}>SOFTWARE DEVELOPER</h5>

          <br />

          <button className='btn_mess' onClick={()=>setOpenModal(true)} >Get In Touch</button>
        </div>
        <h1 data-aos="fade-left"> PORT <br /> FOLIO</h1>

        <Email modalActive={isOpen} onClose={()=>setOpenModal(false)} >

          <form action="" className='flex flex-col'>
            <input type="text" placeholder='Email...'/>
            <input type="text" placeholder='Subject...'/>
            <input type="text" placeholder='Name....'/>
            <input type="text" placeholder='Message.....'/>
            <button>Submit</button>
          </form>
        </Email>
      </div>

    <div className="socia flex justify-center gap-9" style={{position:'relative', top:'6rem'}} data-aos="fade-up">
        <a href="" className='ig'><InstagramIcon/></a>
        <a href="" className='fb'><FacebookIcon/></a>
        <a href="" className='li'><LinkedInIcon/></a>
        <a href="" className='gh'><GitHubIcon/></a>
      </div>
    </div>
  )
}
