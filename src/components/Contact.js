import React from 'react'
import '../style/contact.css'
function Contact() {


  return (
    <div className=' contact section'>
      <div className="post-it post-left"><br />
    <p className="sticky taped">
    <ul>
      <li>
        learn React js...
      </li>
      <li>Learn Gsap Animation...</li>
<li>learn photoshop...</li>
    </ul>
    </p>
  </div>
  <div className="post-it post-right">


  <form className='note' action="https://formsubmit.co/ghekghek2@gmail.com" method="POST">
              <p class="contact-title">Contact me <i class="fas fa-envelope"></i></p>
              <input type="hidden" name="_subject" value="New email"/>
         
              <label for="email">Email</label>
              <input className='email' type="text" name="email" required/>
              <label for="message">Message</label>
         
             <textarea name="message" id=""  ></textarea>
             <button type="submit" class="btn">Send <span><i class="fas fa-arrow-right"></i></span></button>
            </form>


  </div></div>
  )
}

export default Contact