import React from 'react'
import './businessConsultingAgency.css'
import twowomen from '../../assets/images/twowomen.svg'


const bussinesConsultingAgency = () => {
  return (
   
    <>
    
        <div class="why-choose">

            <div class="agencybox">


                <div class="choose-left">   
    
                    
                    <div class="over-top">

                        <p>Why Choose Us</p>

                        <h2><strong>Why We Are The <br />
                                    Best Business <br />
                                    Consulting Agency
                        </strong></h2>


                    </div>

                    <div class="choose-leftdown">

                            <div class="emojis">

                            <i class="fa-regular fa-thumbs-up"></i>

                                <div class="emoji-text">
                                    <h6><strong>Process Excellence</strong></h6>
                                    <p>Lorem, ipsum dolor sit amet consectetur.</p>

                                </div>
                        
                            </div>

                            <div class="emojis">

                                <i class="fa-solid fa-bullseye"></i>
                            
                                <div class="emoji-text">

                                    <h6><strong>Experience Design</strong></h6>
                                    <p>Lorem, ipsum dolor sit amet consectetur.</p>

                                </div>

                            </div>

                            <div class="emojis">

                                <i class="fa-solid fa-scale-balanced"></i>

                                <div class="emoji-text">

                                    <h6><strong>Experience Design</strong></h6>
                                    <p>Lorem, ipsum dolor sit amet consectetur.</p>

                                </div>

                            </div>


                            <div class="emojis">

                                 <i class="fa-solid fa-brain"></i>


                                <div class="emoji-text">
                                    <h6><strong>Artificial Inteligence</strong></h6>
                                    <p>Lorem, ipsum dolor sit amet consectetur.</p>



                                </div>

                            </div>
                    </div>


                </div>


                <div class="choose-right">


                    <div class="two-women">

                        <img src= {twowomen} />

                    </div>

            
                    <div class="right-down">

                    </div>





                </div>
        
            </div> 

        </div>
    
    </>


  )
}

export default bussinesConsultingAgency