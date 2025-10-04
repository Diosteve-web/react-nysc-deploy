import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Section from "./component/section/section";
import About from "./component/About/About";
import  Sev from  './component/service/service';
import My from "./component/Mywork/my";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
/// using const arrow as the componnet
const App = () => {
  return (
    <div>
      
      <Navbar></Navbar>
      <Section></Section>
      <About></About>
    <Sev></Sev>
    <My></My>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  );
};

export default App;
