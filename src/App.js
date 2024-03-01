
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import {Contact} from './components/Contact'
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

import { Footer } from "./components/Footer";


function App() {
  return (
    <>
    
    <NavBar/>
    <Banner/>
    <Contact/>
    <Skills/>
    <Projects />
     
      <Footer />
    </>
  );
}

export default App;
