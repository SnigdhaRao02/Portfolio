import logo from './logo.svg';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Hero} from "./components/Hero/hero";
import {About} from "./components/About/about";
import {Experience} from "./components/Experience/experience";
import {Projects} from "./components/Projects/projects";
import {Contact} from "./components/Contact/contact";
import {Facts} from "./components/Facts/facts";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Facts/>
      <Contact/>
      
    </div>
  );
}

export default App;
