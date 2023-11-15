import React from 'react'
import './Section.css'
import Blacksuit from '../../assets/images/blacksuit.svg'


const section = () => {
  return (
  
    
  
  
<section>

<div class="sectionbox" >

             <div class="texttitel">
                    <div class="titel">
                        <h1>
                        <strong> We Provide The <br /> Best Business <br /> Solutions</strong>
                        </h1>
                    </div>
               
                    <div>
                         <p>
                         Establish your vision and value proposition and turn them into testable <br /> prototypes.
                        </p>

                    </div>
                    <nav class="button">
                        <a class="getconsulting" href="#">
                        Get Consulting <i class="fa-solid fa-arrow-right"></i>
                        </a>
            
                        <a class="learnmore" href="#">
                        Learn More <i class="fa-solid fa-arrow-right"></i>
                        </a>
                        </nav>
             </div>

                      <div class="thepicture">

                         <img src= {Blacksuit} />
                         
                      </div>

        </div>

</section>


  )
}

export default section