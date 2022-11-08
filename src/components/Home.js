import React from 'react'
import '../style/home.css'
import heroImg from '../images/home-img.png'
function Home() {
  return (
    <div id='Home' className='home section'>
      <div className="content">

    
                <img src={heroImg} alt="" className='hero-img' />

       <p class="greetings">Hi I'm Kevin</p>
       <p class="aspiring">
         A Computer Technician and Aspiring Front-End Web Developer
       </p>
       <p>Web Design</p>
       <p>Ui/ux Developer</p>
       <div class="buttons">
         <button class="btn resume">Resume</button>
         <button class="btn contact">Contact me</button>
       </div>
       <div class="social-icon">
         <i class="icon-hov fab fa-viber"></i>
         <i class="icon-hov fab fa-facebook-f"></i>
         <i class="icon-hov fab fa-linkedin-in"></i>
         <i class="icon-hov fas fa-at"></i>

         </div>
 
     </div>
            
         
    </div>
  )
}

export default Home