import React from 'react'
import "./contact.css";
import { Link } from 'react-router-dom';
import heroImg from "./asset/hero.jpg";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = () => {
  return (
    <div class="contact_us_2">
  <div class="responsive-container-block big-container">
    <div class="blueBG">
    <img src={heroImg} alt="" />
    </div>
    <div class="responsive-container-block container">
      <form class="form-box">
        <div class="container-block form-wrapper">
          <div className="mainHeading">
            <h2 className='heading'>GET IN TOUCH</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, obcaecati!</p>
          </div>
          <div className="inputContainer">
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Phone no'/>
            <textarea placeholder='Write your message here'></textarea>
          </div>
          <button class="submit-btn">
            Submit
          </button>
        </div>
        <div class="social-media-links">
          <Link to="/" >
            <TwitterIcon style={{color:"36a420"}}/>
          </Link>
          <Link to="/">
        <FacebookRoundedIcon style={{color:"36a420"}}/>
          </Link>
          <Link to="/">
        <LinkedInIcon style={{color:"36a420"}}/>
          </Link>
          <Link to="/">
            <InstagramIcon style={{color:"36a420"}}/>
          </Link>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Contact