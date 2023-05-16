import React,{ StrictMode } from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Education from './Education/Education';
import Portfolio from './Portfolio/Portfolio';
import TeamView from './TeamView/TeamView';
import Contact from './Contact/Contact';
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <About/>  
      <Education/>

      <Portfolio/>
      <StrictMode>
      <TeamView/>
      </StrictMode>
      <Contact/>

    </div>
  );
}

export default App;
