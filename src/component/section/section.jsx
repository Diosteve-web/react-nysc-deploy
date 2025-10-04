import React from 'react'
import './section.css';
import Agbor from '../../assets/nysc.jpeg';
const section = () => {
  return (
    <div id="section" className="section-tio"> 
      <img  src={Agbor} alt="" className="Agbor"/>
    <h1>NYSC Osun State Coordinator </h1>
<p>– Agbor Ndoma Obim: A Visionary Leader in Youth Development</p>
<div className="section-action">
<div className="section-connect">Connct with NYSC</div>
<div className="section-resume">The state coodinator</div>
</div>

    </div>
  );
};

export default section
