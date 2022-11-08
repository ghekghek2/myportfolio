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
<a href="#home">  </a>
   <a href="#about" >  Section</a>
   <a href="#skill" > Skill </a>
   <a href="#roject" > Project </a>
   <a href="#contact" > Contact </a>


   </div>


<nav class="menu section">

   <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
   <label class="menu-open-button" for="menu-open">
    <span class="lines line-1"></span>
    <span class="lines line-2"></span>
    <span class="lines line-3"></span>
  </label>

   <a href="#Home" class="menu-item blue" onClick={check} > <i class="fa fa-anchor"></i> </a>
   <a href="#Home" class="menu-item green" onClick={check}> <i class="fa fa-coffee"></i> </a>
   <a href="#Home" class="menu-item red" onClick={check}> <i class="fa fa-heart"></i> </a>
   <a href="#Home" class="menu-item purple" onClick={check}> <i class="fa fa-microphone"></i> </a>
   <a href="#Home" class="menu-item orange" onClick={check}> <i class="fa fa-star"></i> </a>
   <a href="#Home" class="menu-item lightblue" onClick={check}> <i class="fa fa-diamond"></i> </a>
  
</nav>
</div>
  )

}

export default Navigation