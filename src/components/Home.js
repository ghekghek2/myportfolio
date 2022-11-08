import React from 'react'
import '../style/home.css'
import heroImg from '../images/home-img.png'

function Home() {

  
  
  return (
    <div  className='section home '>
      <div className="content "  >

                <img src={heroImg} alt="" className='hero-img' />

       <p > <span className='title'>Hi I'm Kevin</span>  <br /> A Computer Technician and Aspiring Front-End Web Developer  <br />Web Design<br/>UI/UX</p>
     
    
       <div className="buttons">
         <button className="btn resume">Resume</button><br />
         <button className="btn btn-contact">Contact me</button>
       </div>
       <div className="social-icon">
        <a href="#Home"><i className="icon-hov fab fa-viber"></i></a> 
        <a href="#Home">  <i className="icon-hov fab fa-facebook-f"></i></a> 
        <a href="#Home">    <i className="icon-hov fab fa-linkedin-in"></i></a> 
        <a href="#Home">   <i className="icon-hov fas fa-at"></i></a> 

         </div>
     </div>
            
         
    </div>
  )
}

export default Home