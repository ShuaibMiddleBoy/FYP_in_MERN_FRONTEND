import React from 'react'
import "./contact.css";
import { Link } from 'react-router-dom';
import heroImg from "./asset/hero.jpg";
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
      </form>
    </div>
  </div>
</div>
  )
}

export default Contact