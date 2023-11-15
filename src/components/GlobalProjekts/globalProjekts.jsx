import React from 'react'
import './globalProjekts.css'
import Business from '../../assets/images/business.jpg'
import Phone from '../../assets/images/phone.jpg'
import Block from '../../assets/images/block.jpg'
import Computer from '../../assets/images/computer.jpg'




const globalProjekts = () => {
  return (
  
    <>
    
    <div class="global-bbox">

<div class="global-box">

    <div class="global-title">
    
    
    <p>Project & Case Studies</p>


    <h2><strong>Let’s Looks Our Global Projects</strong></h2>

    </div>


   
    
    <div class="global-top">


        <div class="global-four">
             <img src= {Business} />
            <h6><strong>Grow your business</strong></h6>
            <hr />
           <a href="#">
            Read More <i class="fa-solid fa-arrow-right-long"></i>
           </a>

        </div>

        <div class="global-four">
            <img src= {Phone} />
            <h6><strong>Why your client needs a responsive website</strong></h6>
            <hr />
                <a href="#">
                Read More <i class="fa-solid fa-arrow-right-long"></i>
                </a>
            
        </div>




    </div>

    <div class="global-down">

        <div class="global-four">
            <img src= {Block} />
            <h6><strong>Educate your employees to get better results</strong></h6>
            <hr />
                <a href="#">
                Read More <i class="fa-solid fa-arrow-right-long"></i>
                </a>
            




        </div>
        <div class="global-four">

            <img src= {Computer} />
            <h6><strong>Business Insights is a important piece of your business</strong></h6>
            <hr />
                <a href="#">
                Read More <i class="fa-solid fa-arrow-right-long"></i>
                </a>

        </div>


    </div>


    <nav>
        <a href="#">   
        All Recent Projects <i class="fa-solid fa-arrow-right-long"></i>
        </a>







    </nav>
















</div>






















</div>
    
    
    
    
    
    
    
    </>


  )
}

export default globalProjekts