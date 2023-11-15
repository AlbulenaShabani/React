import React from 'react'
import './Features.css'



const Features = () => {
  return (
    <>
    <div class="advice">


    <div class="advicebigbox">

            <div class="advicebox-left">

                <p class="features">
                    Features
                </p>

                <h2>
                   <strong>Our Accounting is <br />
                    trusted by thousand <br />
                    of companies</strong>
                </h2>

                <nav class="advicelearnmore">

                    <a href="#">Learn More
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>


                </nav>

                

            </div>

       
        <div class="advicebox-right">
                
            <div class="topbox">

                <div class="box">
                    <i class="fa-regular fa-handshake"></i>
                    <h4><strong>Business Advice</strong></h4>
                    <p>Lorem ipsum, dolor sit amet<br />
                        consectetur adipisicing elit.
                    </p>
                </div>
                
                <div class="box">
                    <i class="fa-solid fa-comments-dollar"></i>
                    <h4><strong>Financial Advice</strong></h4>
                    <p>Lorem ipsum, dolor sit amet<br />
                        consectetur adipisicing elit.</p>
                </div>

            </div>
                
            <div class="downbox">

                <div class="box">
                    <i class="fa-regular fa-lightbulb"></i>
                    <h4><strong>Startup Business</strong></h4>
                    <p>Lorem ipsum, dolor sit amet<br />
                        consectetur adipisicing elit.</p>
                </div>

                <div class="box">
                    <i class="fa-solid fa-gear"></i>
                    <h4><strong>Risk Management</strong></h4>
                    <p>Lorem ipsum, dolor sit amet<br />
                        consectetur adipisicing elit.</p>
                </div>
            </div>

        </div>  

    </div>

</div>
</>
    
  )
}

export default Features