import React from 'react'

import Skills from '../components/aboutArray'

export default function About() {
  return (
    <div>
      <h1 className='text-3xl font-extrabold text-center text-gray-400 underline'>ABOUT ME</h1>

      <div className="introW flex justify-between " style={{alignItems:'center'}}>

        <div className="intro">
        <h1 style={{fontSize:'7rem', fontWeight:'700'}}>HELLO</h1>
        <div className="ch flex gap-0.5" style={{fontSize:'7rem', fontWeight:'700'}}>
          <h1>IM</h1>
          <h1 className='' style={{color:'red'}}>RENE!</h1>
        </div>
        
      </div>

      <div className="introp" style={{width:'50rem'}}>
        <p className='font-semibold' style={{letterSpacing:'.1rem'}}>I'm a Computer Science graduate and a passionate 
          Full Stack Developer with a strong foundation in both front-end and back-end technologies. I enjoy building scalable, responsive web applications and solving real-world problems through clean, efficient code. With experience in modern frameworks, databases, and development tools, I strive to create seamless user experiences and robust 
          system architectures. I'm always eager to learn, grow, and contribute to impactful projects.</p>
      </div>

      </div>

      


     <div className="hsec flex justify-around">
       <div className="about-section grid grid-cols-2 gap-5">
          <div className=" max-w-sm p-6 bg-white border border-gray-200 
          rounded-lg shadow-sm ">
            <h1 className='text-center font-bold'>EDUCATION</h1>
            <br />
            <ul>
                <li className="list-disc list-inside">
                    CAVITE STATE UNIVERSITY
                    <p className='text-center'>2021 - 2025</p>
                </li>

                <li className="list-disc list-inside">
                    SOUTHEAST ASIA INSTITUTE OF TRADE AND TECHNOLOGY
                    <p className='text-center'>2019 - 2021</p>
                </li>
            </ul>
            
          </div>

          <div className=" max-w-sm p-6 bg-white border border-gray-200 
          rounded-lg shadow-sm ">
            <h1 className='text-center font-bold'>EXPERIENCE</h1>
            <br />
            <li className="list-disc list-inside">
              INTERN: BACOOR NATIONAL HIGH SCHOOL
              <p className='text-center'>Programmer</p>
            </li>

            <li className="list-disc list-inside">
                CLOUD STARTUP COMPANY
              <p className='text-center'>FULLSTACK DEVELOPER</p>
              <p className='text-center'>MARCH 2023 - MAY 2023</p>
            </li>
          </div>
      </div>

       <div className="skills">
        <h1 className='text-center font-extrabold'>SKILLS</h1>
      <Skills/>
       </div>
     </div>


     <br />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition">
              <h1 className='font-bold text-center'>Hobbies</h1>
            </div>

            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition">
              <h1 className='font-bold text-center'>Hobbies</h1>
            </div>

            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition">
              <h1 className='font-bold text-center'>Hobbies</h1>
            </div>

            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition">
              <h1 className='font-bold text-center'>Hobbies</h1>
            </div>
        </div>
      
    </div>
  )
}
