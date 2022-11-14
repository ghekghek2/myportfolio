import React ,{useRef} from 'react'
import {useIntersection} from 'react-use';

import gsap from "gsap"
import '../style/about.css'
import Pin from '../images/pin.png'


function About() {


   const sectionRef = useRef(null)



   const intersection = useIntersection(sectionRef,{
    root:null,
    rootMargin:"200px",
    threshold:1
   })

const fadeIn = element =>{
gsap.to(element,1,{

  y:-60,

  ease:'power4.out',
  margin:0,
  opacity:1,
  stagger:{
    amount:.5
  }
})
}

const fadeOut = element =>{
  gsap.to(element,1,{
    opacity:0,
    y:-20,
    ease:'power4.out',

  })
}


intersection && intersection.intersectionRatio < 1
?fadeOut(".fadeIn")
:fadeIn(".fadeIn")

    

  return (
    <div className='about section'>


 <div ref={sectionRef }   className="   about-wrapper section fadeIn ">
<div className=' about-me fadeIn '>
       <div className="left-box   box">  
       <p className='about-title fadeIn'> About Kevin</p>
                <p   className=' p about-content fadeIn'>
                  I'm Kevin Divinagracia a Freelancer Computer Technician based
                  on Mariveles Bataan with years of experience of repairing,
                  installation, troubleshooting and updating softwares and
                  applications. Aiming to use my skills and experiences to enter
                  the world of web development. A Career shifter that wanted to
                  explore and utilize my strong background and skill being a
                  computer technician .
                  </p>
                  <img  src={Pin} alt="" />
                </div>
 
            </div>
            <div className="right-box box ">
                  <p className='about-title fadeIn'>Interested to</p>
                <div className=" like-content fadeIn">
                  <ul>
                    <li className=' fadeIn '><p className='p' >Web Design</p></li>
                    <li className=' fadeIn '><p className='p' >Graphics Design</p></li>
                    <li className=' fadeIn '><p className='p' >Ui/Ux</p></li>
                    <li className=' fadeIn '><p className='p'>Animation</p></li>
                    <li className=' fadeIn '><p className='p' >Computer Repair</p></li>
                    <li className=' fadeIn '><p className='p' >Smartphones Repair</p></li>
                  </ul>
            
              </div>
              <img src={Pin} alt="" />
            </div>


            </div>
          </div>
  
  )
}

export default About