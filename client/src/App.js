//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />
//import logo from 'mandelbrot.jpg'
import './App.css';
import Sample  from './Sample'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from './navbar'
import Moto from './moto'
import Video from './video'
import Slider from './carousel'
import Speciality from './speciality'
import InputForm from './form'
import Contact from './contact'
import Footer from './footer'

function App() {
  return (  
    <div className="App">
      <header className="App-header">
      <Router>
    <Navigation />
    
    <div className='rowC'>
        <Moto />
        <Video />
    </div>
    <Sample></Sample>
    <Slider />
   
   
  </Router>
     
      
        
       
        <Speciality></Speciality>
        <InputForm/>
        <Contact/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
