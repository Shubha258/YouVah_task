import './App.css';
// import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
// import Section1 from './Section1/Section1.js'
// import  './Section1/Sec1.css';
// import {Landingpage} from './Section1/Landingpage'
import Section1 from './Section1/Section1';
import Section2 from './section2/Section2';
import Section3 from './section3/Section3';
import Section4 from './Section4/Section4';
import {Section5} from './Section5/Section5';
import {Communicate} from './Section6/Communicate';
import {Footer} from './Footer/Footer';
import { Landingpage } from './Section1/Landingpage';
function App() {
  return (
    <div className="wrapper">
           {/* <Landingpage/> */}
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
           <Communicate/>
           <Footer/>
      </div>
    )
}

export default App;
