import React from 'react'
import '../style/about.css'
import Pin from '../images/pin.png'
function About() {
  return (
    <div className='about section'>


 <div className="about-box">
            <div className='about-header'>
   
       <p className="title">    About Kevin</p>
                <p>
                  I'm Kevin Divinagracia a Freelancer Computer Technician based
                  on Mariveles Bataan with years of experience of repairing,
                  installation, troubleshooting and updating softwares and
                  applications. Aiming to use my skills and experiences to enter
                  the world of web development. A Career shifter that wanted to
                  explore and utilize my strong background and skill being a
                  computer technician .
                </p>
    <img src={Pin} alt="" />
            </div>
            <div className="about-right">
              <div className="like">
                <div className="like-title">
                  <h5>Interested to</h5>
                </div>
                <div className="like-content">
                  <ul>
                    <li>Web Design</li>
                    <li>Graphics Design</li>
                    <li>Ui/Ux</li>
                    <li>Animation</li>
                    <li>Computer Repair</li>
                    <li>Smartphones Repair</li>
                  </ul>
                </div>
              </div>
              <img src={Pin} alt="" />
            </div>


            </div>
          </div>
  
  )
}

export default About