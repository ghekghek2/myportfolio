import React from 'react'
import '../style/contact.css'
function Contact() {


  return (
    <div className='section'><div className="post-it"><br />
    <p className="sticky taped">
      <strong>Mary, Mary</strong><br/>
      Mary, Mary, quite contrary,<br/>
      How does your garden grow?<br/>
      With silver bells, and cockle shells,<br/>
      And pretty maids all in a row.<br/>
    </p>
  </div>
  <div className="post-it">

  <p>Contact me</p>
  <form className='note' action="https://formsubmit.co/ghekghek2@gmail.com" method="POST">
              <p class="contact-title">Contact me <i class="fas fa-envelope"></i></p>
              <input type="hidden" name="_subject" value="New email"/>
         
              <label for="email">Email</label>
              <input type="text" name="email" required/>
              <label for="message">Message</label>
         
             <textarea name="message" id="" cols="50" rows="10" ></textarea>
             <button type="submit" class="btn">Send <span><i class="fas fa-arrow-right"></i></span></button>
            </form>


  </div></div>
  )
}

export default Contact