import React from 'react'
import '../style/mobileNavigation.css'
function Navigation() {



// toggle check for checkbox to hide and show navigation link
let check = () =>{ 
  document.querySelectorAll('input[type="checkbox"]').forEach(e => e.checked ^= 1)
 
}


  return (
<div className="nav section">
  <div className="links">
<a href="#home"> Home </a>
   <a href="#about" >  About</a>
   
   <a href="#skill" > Skill </a>
   <a href="#roject" > Project </a>
   <a href="#contact" > Contact </a>


   </div>


<nav className="menu section">

   <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
   <label className="menu-open-button" for="menu-open">
    <span className="lines line-1"></span>
    <span className="lines line-2"></span>
    <span className="lines line-3"></span>
  </label>

   <a href="#Home" className="menu-item blue" onClick={check} > <i className="fa fa-anchor"></i> </a>
   <a href="#Home" className="menu-item green" onClick={check}> <i className="fa fa-coffee"></i> </a>
   <a href="#Home" className="menu-item red" onClick={check}> <i className="fa fa-heart"></i> </a>
   <a href="#Home" className="menu-item purple" onClick={check}> <i className="fa fa-microphone"></i> </a>
   <a href="#Home" className="menu-item orange" onClick={check}> <i className="fa fa-star"></i> </a>
   <a href="#Home" className="menu-item lightblue" onClick={check}> <i className="fa fa-diamond"></i> </a>
  
</nav>
</div>
  )

}

export default Navigation