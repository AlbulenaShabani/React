import React from 'react'
import './footer.css'
import footerlogo from '../../assets/images/footerlogo.svg'


const footer = () => {
  return (
  
<footer>


<div class="footer-box">

<div class="footer-logotype">

    <div class="footer-critotext">
    
        <img src= {footerlogo} />

        <p>Lorem ipsum dolor sit amet consectetur <br /> 
        adipisicing elit. Placeat obcaecati voluptas <br /> 
        voluptates! Voluptates laborum nam <br /> 
        ratione minus necessitatibus, iure <br /> 
        praesentium.
        </p>

    </div>

    <div class="four-boxestext">

        <div class="fourboxes">
            <h5><strong>Company</strong></h5>
           
            <div class="footer-button">

                <div><a href="#">About</a></div>
                <div><a href="#">Features</a></div>
                <div><a href="#">Works</a></div>
                <div><a href="#">Career</a></div>

            </div>

        </div>

        <div class="fourboxes">

            <h5><strong>Help</strong></h5>

            <div class="footer-button">
                <div><a href="#">Customer Support</a></div>
                <div><a href="#">Delivery Details</a></div>
                <div><a href="#">Terms & Conditions</a></div>
                <div><a href="#">Privacy Policy</a></div>
            </div>

        </div>

        <div class="fourboxes">

            <h5><strong>Resources</strong></h5>

            <div class="footer-button">
                <div><a href="#">Free eBooks</a></div>
                <div><a href="#">Development Tutorial</a></div>
                <div><a href="#">How to - Blog</a></div>
                <div><a href="#">Youtube Playlist</a></div>
            </div>
        </div>
        <div class="fourboxes">
                
                    <h5><strong>Link</strong></h5>
                
                <div class="footer-button">
                    <div><a href="#">Free eBooks</a></div>
                    <div><a href="#">Development Tutorial</a></div>
                    <div><a href="#">How to - Blog</a></div>
                     <div><a href="#">Youtube Playlist</a></div>
                </div>
        </div>






    </div>



</div>



<div class="footer-line">

    <hr />

</div>


<div class="footer-end">

    <p>
        &copy 2023 Crito - Consulting Company Inc. All Rights Reserved.
    </p>
    
   <div class="socialmedia-end">
    <a href="#">
        <i class="fa-brands fa-facebook"></i>
    </a>
    <a href="#">
        <i class="fa-brands fa-twitter"></i>
    </a>
    <a href="#">
        <i class="fa-brands fa-instagram"></i>
    </a>
    <a href="#">
        <i class="fa-brands fa-linkedin"></i>
    </a>




   </div>
    


</div>









</div>























</footer>


  )
}

export default footer