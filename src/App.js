import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
// import Project from "./components/Project";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";


import $ from "jquery";

import Turn from "./components/Turn";
import './style/project.css';
import "./index.css";
const options = {
  width: 800,
  height: 600,
  autoCenter: true,
  display: "double",
  acceleration: true,
  elevation: 50,
  gradients: !$.isTouch,
  when: {
    turned: function (e, page) {
      console.log("Current view: ", $(this).turn("view"));
    },
  },
};

const pages = [
  './images/home-img.png',
  './images/pin.png'
 
];



function App() {
  return (
    <div className="App">
       <Navigation/>
      <Home/>
      <About/>
    
<Skill/>
<Turn options={options} className="magazine">
      {pages.map((page, index) => (
        <div key={index} className="page">
          <img src={page} alt="" />
        </div>
      ))}
    </Turn>
<Contact/>
    </div>
  );
}

export default App;
