
import './contactMain.css'
import Karta from '../../assets/images/Map.svg'
import React, { useState } from 'react'



const contactMain = () => {

    const [name, setName] = useState ('');
    const [epost, setEpost] = useState ('');
    const [message, setMessage] = useState ('');
    const [nameError, setNameError] = useState ('');
    const [epostError, setEpostError] = useState ('');
    const [messageError, setMessageError] = useState ('');

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName (value);
        if (value.length < 2) {
            setNameError ('Name must be at least 2 characters long');
        } else {
            setNameError('');
        }

    };

    const handleEpostChange = (e) => {
        const value = e.target.value;
        setEpost (value);
        if (!value.includes ('@')) {
            setEpostError ('Email must contain @')
        } else {
            setEpostError ('');
        }


    };

    const handleMessageChange = (e) => {
        const value = e.target.value;
        setMessage (value);
        if (value.length <10) {
            setMessageError ('Message must be at least 10 characters')
        } else{
            setMessageError ('');
        }
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        const body = {
            name: name,
            email: epost,
            message: message
        };

        console.log("body: ", body);

          try {
            const response = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            });

            console.log("Response", response);

            if (response.status === 200) {
              alert("Message Successfully ");
            } else {
              alert("Something is incorrect");
            }
          } catch (error) {
            console.log(error);
          }
      };
  

  return (

    
<section>

    <div class="big-box">

        <div class="HCL-box">


            <div class="HC-box">
                <a href="home.html">
                     Home
                 </a>
                <a href="contact.html">
                    Contact
                </a>
            </div>

            <div class="Lets-connectbox">

                <h1><strong>Let’s Connect</strong></h1>

            </div>


        </div>

    </div>



    <div class="contactbox">

        <div class="contact-information">
            <div class="box-text">
                <div class="cu-symbol">
                    <i class="fa-solid fa-location-dot"></i>
                </div>
         
                <div class="cu-text">
            
                    <h6><strong>Visit us</strong></h6>
             
                    <p>
                     Sveavägen 31<br />
                     111 34 STOCKHOLM
                    </p>

                </div>
            </div>
         </div>

        <div class="contact-information">
            <div class="box-text">
                <div class="cu-symbol">
                    <i class="fa-solid fa-phone"></i>
                </div>
     
                <div class="cu-text">
        
                <h6><strong>Call us</strong></h6>
         
                <p>
                    +46 (8) 121 470 50<br />
                    +46 (8) 121 470 51
                </p>

                </div>
            </div>
        </div>
        
        <div class="contact-information">
            <div class="box-text">
                <div class="cu-symbol">
                    <i class="fa-solid fa-envelope"></i>
                </div>
 
                <div class="cu-text">
    
                <h6><strong>Email us</strong></h6>
     
                <p>
                    info@crito.com<br />
                    support@crito.com
                </p>

                </div>
            </div>
        </div>

    </div>

    <div class="send-messagebox">
            <div class="send-box">
                
                <div class="send-messagetitle">

                    <h2><strong>
                        Leave us a message <br />
                        for any information.
                    </strong></h2>

                </div>

    
    
                <form onSubmit={sendMessage} class="searchbox">
                
                    <div class="write-text">
                        <input type="text" placeholder="Name*" value={name} onChange={handleNameChange} />
                        {nameError && <div ClassName= "error"> {nameError} </div>}

                    </div>
                   
                    <div class="write-text">
                        <input type="text" placeholder="Epost*" value={epost} onChange={handleEpostChange} />
                        {epostError && <div ClassName= "error"> {epostError} </div>}   

                    </div>
                    
                    <div class="write-textbig">
                        <input type="text" placeholder="Your Message*" value={message} onChange={handleMessageChange} />
                        {messageError && <div ClassName= "error"> {messageError} </div>}

                
                    </div>
                
                        <nav class="sendmessage-button">

                            <button type='submit'>
                             Send Message
                            </button>

                        </nav>
                    </form>

                

            </div>
    </div>

    
    <div class="map-box New-box">

        <img src= {Karta}   />


    </div>


</section>

  )
}

export default contactMain