import React from 'react'
import '../style/mobileNavigation.css'
function navigation() {

 
  return (
<nav class="menu">
  <h1>hello</h1>
   <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
   <label class="menu-open-button" for="menu-open">
    <span class="lines line-1"></span>
    <span class="lines line-2"></span>
    <span class="lines line-3"></span>
  </label>

   <a href="#Home" class="menu-item blue"> <i class="fa fa-anchor"></i> </a>
   <a href="#Home" class="menu-item green"> <i class="fa fa-coffee"></i> </a>
   <a href="#Home" class="menu-item red"> <i class="fa fa-heart"></i> </a>
   <a href="#Home" class="menu-item purple"> <i class="fa fa-microphone"></i> </a>
   <a href="#Home" class="menu-item orange"> <i class="fa fa-star"></i> </a>
   <a href="#Home" class="menu-item lightblue"> <i class="fa fa-diamond"></i> </a>
  
</nav>

  )

}

export default navigation