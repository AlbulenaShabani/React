import React from 'react'
import './articleNews.css'
import Twentyfive from '../../assets/images/tjugofem.jpg'
import Seventeen from '../../assets/images/sjutton.jpg'
import Thirteen from '../../assets/images/tretton.jpg'


const articleNews = () => {
  return (
    
    <>
    
    <div class="article-newsbox">

<div class="article-newstext">

    <div class="article-news">
            <p>
                 Article & News
            </p>


        <div class="article-newstitle">

            <h2><strong>Get Every Single Articles & News</strong></h2>

            <a href="#">
                 Browse Articles
                <i class="fa-solid fa-arrow-right"></i>
            </a>


        </div>

     </div>


     <div class="business-boxes">

        <div class="threebox">
            <img src= {Twentyfive} />
            
            <p class="BT">Bussines</p>

            <h5><strong>How To Use Digitalization <br />
                In The Classroom</strong></h5>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />
                     Architecto sed hic libero.</p>

        </div>

        <div    class="threebox">
            <img src= {Seventeen} />

            <p class="BT">Business</p>

            <h5><strong>How To Implement Chat GPT <br />
                In Your Projects</strong></h5>



            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />
                 Architecto sed hic libero.</p>
           

        </div>

        <div class="threebox">
            <img src= {Thirteen} />

            <p class="BT">Business</p>

            <h5><strong>The Guide To Support<br />
                Modern CSS Design</strong></h5>


            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />
                 Architecto sed hic libero.</p>

        </div>

     </div>




        <div class="switch-news">

            <i class="fa-solid fa-ellipsis"></i>

        </div>





</div>













</div>

    
    
    
    
    
    
    </>



  )
}

export default articleNews