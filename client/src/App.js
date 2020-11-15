//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />
//import logo from 'mandelbrot.jpg'
import './App.css';
import Sample  from './Sample'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router ,Switch , Route } from "react-router-dom";
import Navigation from './navbar'
import Moto from './moto'
import Video from './video'
import Slider from './carousel'
import Speciality from './speciality'
import InputForm from './form'
import Contact from './contact'
import Footer from './footer'
import Moto1 from './moto1'
import Title from './title'
import About from './about'
import Welcome from './Welcome';
import Careers from './career'
import Terms from './terms'
import Privacy from './privacy'
import Python from './python'
import Sudoku from './sudoku'
import Chess from './chess'
import Rubik from './rubik'
import Webdev from './webdev'
import Matholympiad from './matholympiad'


function Home(){
  return (
    <div className="App">
    <header className="App-header">
 
  
  <Title></Title>
  <div className='rowC' >
      <Moto1 />
      <Moto />
      <Video />
  </div>
  <Sample></Sample>
  <Slider />
  <Welcome></Welcome>
  <Speciality></Speciality>
  <InputForm/>
  <Contact/>
  

   
</header>
</div>
  )

}


function Courses(){
  return(

    <div className="Course">
        <Sample></Sample>
        <Slider />
        <Welcome></Welcome>
    </div>

  )

}

function ContactList(){
  return(
    <>
    <Contact/>
    </>
  )
}

function App() {
  return (
    <div> 
    <Navigation/>
    <Router>
    <Switch>
    <Route path="/" exact component= {Home} />
    <Route path="/about" exact component={About} />
    <Route path="/courses" exact component={Courses} />
    <Route path="/Contact" exact component={ContactList} />
    <Route path="/Careers" exact component={Careers} />
    <Route path="/privacy" exact component={Privacy} />
    <Route path="/terms" exact component={Terms} />
    <Route path="/python" exact component={Python} />
    <Route path="/sudoku" exact component={Sudoku} />
    <Route path="/chess" exact component={Chess} />
    <Route path="/rubik" exact component={Rubik} />
    <Route path="/webdev" exact component={Webdev} />
    <Route path="/matholympiad" exact component={Matholympiad} />
    </Switch> 
    </Router>
    <Footer/>
    </div>

  );
}



export default App;
