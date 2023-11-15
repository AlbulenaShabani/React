import React from 'react'
import './teamTestimonial.css'
import Kristine from '../../assets/images/Kristine.jpg'
import Mark from '../../assets/images/Mark.jpg'
import Kimberly from '../../assets/images/Kimberly.jpg'
import Justin from '../../assets/images/Justin.jpg'
import Cassandra from '../../assets/images/Cassandra.jpg'
import Amanda from '../../assets/images/Amanda.jpg'
import Jack from '../../assets/images/Jack.jpg'


const teamTestimonial = () => {
  return (

<>
<div class="yellow-bigbox">

<div class="team-box">

    <div class="ETM-box">

        <p>Meet Our Team</p>


        <div class="Button-text">
            
            <h2><strong>Experience Team Members</strong></h2>

            <a href="#"> 
                Browse Team <i class="fa-solid fa-arrow-right"></i>
             </a>

         </div>

    </div>


    <div class="members-photo">

        <div class="photo">
            <img src= {Kristine} />
            <h4><strong>Kristine Palmer</strong></h4>
            <p>Chef Operation Officer</p>

        </div>
        <div class="photo">
           <img src= {Mark} />
            <h4><strong>Mark Aubri</strong></h4>
            <p>Senior Consultant</p>

        </div>
        <div class="photo">
            <img src= {Kimberly} />
            <h4><strong>Kimberly Hansen</strong></h4>
            <p>Senior Consultant</p>
        </div>
        <div class="photo">
            <img src= {Justin} />
            <h4><strong>Justin Willoman</strong></h4>
            <p>Senior Tech Consultant</p>


        </div>


    </div>



    <div class="switch">
       <a href="">
        

        <i class="fa-solid fa-ellipsis"></i>
       </a>



    </div>


</div>





<div class="Testimonial-box">


    <div class="Testimonial-text">
        <p>Testimonial</p>
        <h2><strong>What Our Client Says</strong></h2>

    </div>


    
    <div class="three-boxes">

            <div class="box-border">
               
                     <div class="star">

                        &#9733; &#9733; &#9733; &#9733; &#9733;

                     </div>


                       <div class="star-text"> 
                        <p>
                        "Lorem ipsum dolor, sit amet consectetur <br />
                        adipisicing elit. Laudantium libero, ad <br />
                        dignissimos velit qui, dolorum obcaecati <br />
                        cum saepe nesciunt nemo eligendi <br />
                        numquam voluptate"
                        </p>
                        </div>

                    <div class="three-photos">

                        <img src= {Cassandra} />

                        <div class="names">

                            <h4><strong>Cassandra Warren</strong></h4>
                            <p>Business Manager, Dorfus</p>


                        </div>

                    </div>

            </div>



            <div class="box-border">

                    <div class="star">

                         &#9733; &#9733; &#9733; &#9733; &#9733;

                    </div>

                        <div class="star-text">
                        <p>
                        "Lorem ipsum dolor, sit amet consectetur <br />
                        adipisicing elit. Laudantium libero, ad <br />
                        dignissimos velit qui, dolorum obcaecati <br />
                        cum saepe nesciunt nemo eligendi <br />
                        numquam voluptate"
                        </p>
                        </div>

                    <div class="three-photos">

                        <img src= {Amanda} />

                            <div class="names">

                                <h4><strong>Amanda Tulling</strong></h4>
                                <p>Senior Developer, Square</p>

                            </div>

                    </div>

                  

            </div>

            
            
            <div class="box-border">

                    <div class="star">

                        &#9733; &#9733; &#9733; &#9733; &#9733;

                    </div>

                        <div class="star-text">
                        <p>
                        "Lorem ipsum dolor, sit amet consectetur <br />
                        adipisicing elit. Laudantium libero, ad <br />
                        dignissimos velit qui, dolorum obcaecati <br />
                        cum saepe nesciunt nemo eligendi <br />
                        numquam voluptate"
                        </p>
                        </div>
                    
                    <div class="three-photos">

                        <img src= {Jack} />

                        <div class="names">
                        
                            <h4><strong>Jack McDogglas</strong></h4>
                            <p>Key Account Manager, Gobona</p>

                        </div>

                    </div>

                   
                    
            </div>

        </div>


        <div class="button-allreviews">

            <a href="#">

               All Reviews 
               <i class="fa-solid fa-arrow-right"></i>
                
            </a>

        </div>








</div>






















</div>







</>




  )
}

export default teamTestimonial