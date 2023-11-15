import React from 'react'
import Blueskirt from '../../assets/images/blueskirt.svg'
import './aboutCompany.css'

const aboutCompany = () => {
  return (

    <>
    <div class="consultingbox">


        <div class="consulting-left">
            
        <img src= {Blueskirt} />
    
        </div>


        <div class="blue-box">
    
        <h5><strong>Samantha Brown, <span>Founder</span></strong></h5>
        <p>"Lorem ipsum dolor sit amet consectetur <br />
        adipisicing elit."</p>

        </div>




        <div class="consulting-right">

            <p id="ab">About company</p>

            <h2><strong>We Are Business  <br />
            Consulting & Credit <br />
            Repair Experts</strong></h2>


             <p class="one">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam <br />
                officiis quas assumenda esse obcaecati? Ex esse error voluptates iure  <br />
                vel totam eos.
             </p>
            <p class="two">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse  <br />
                quasi incidunt adipisci accusantium libero provident voluptate amet.
            </p>


        <div class="consulting-buttons">
        
            <a class="Learn-More" href="#"> 
            Learn More<i class="fa-solid fa-arrow-right"></i>
            </a>
    
    
            <a class="intro-videos" href="#">
                <i class="fa-regular fa-circle-play"></i>
          
            </a> Intro Videos
    
    
    
    </div>


 </div>



</div>
    
    
    
    </>


  )
}

export default aboutCompany