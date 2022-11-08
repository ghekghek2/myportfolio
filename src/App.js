import "./App.css";
import Home from "./components/Home.js";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import "./index.css";
function App() {
  return (
    <div className="App">
       <Navigation/>
      <Home />

    </div>
  );
}

export default App;
