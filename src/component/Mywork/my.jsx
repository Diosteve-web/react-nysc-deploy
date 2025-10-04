import React from 'react'
import Theme from '../../assets/nysc.jpeg'
import mywork_data from "../../assets/mywork_data.js";
import  arrow from '../../assets/arrow_icon.svg'
import './my.css';

const my = () => {
  return (
    <div  id ="mywork" className="mywork">
<div className=" work ">
    <h1> NYSC STATE COODINTOR BRO</h1>
<img  src={Theme} alt='my works'/>
</div>
<div className="nysc-work-container">
  <h2 className="nysc-title">My NYSC Projects</h2>
  <div className="nysc-gallery">
    {mywork_data.map((work, index) => (
      <div className="nysc-card" key={index}>
        <img src={work.w_img} alt="img" />
      </div>
    ))}
  </div>
</div>
<div className="mywork-showmore">
  <p>Show More</p>
  <img src={arrow} alt="icon"/>
</div>

    </div>
  )
}

export default my