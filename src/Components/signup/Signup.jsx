import React, { useState } from "react";
import familyPic from "./asset/familyPic.jpg";
import style from "./signup.module.css";
import { Link } from "react-router-dom";
// import request from "../../util/fetchAPI";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    email : "",
    profileImage : "",
    password : "",
    confirmPassword : ""


  })
  
  const handleInput = (e) => {
    const {value, name} = e.target;
    setUser((preValue)=>{
      return{
        ...preValue,
        [name] : value
      }
    })
  }


  const handleImage = (e) => {
        setUser((preValue)=>{
          return {
            ...preValue,
            profileImage : e.target.files[0]
          }
        })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profileImage", user.profileImage);
    formData.append("userName", user.userName);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("confirmPassword", user.confirmPassword);


    try {
    const data =   await axios.post("http://localhost:8000/auth/register", formData);
      alert("User register successfuly!");     
      // navigate("/");
       const res = data.data;
       console.log(res);
      if(res.auth){
        localStorage.setItem("token", JSON.stringify(res.auth));
        localStorage.setItem("user", JSON.stringify(data.data))
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <div className={style.container}>
        <div className={style.grid}>
          <div className={style.left}>
            <img srcSet={familyPic} alt="" className={style.image} />
          </div>
          <div className={style.right}>
            <h2>Create Your Free Account</h2>
            <form onSubmit={handleSubmit} className={style.form}>
              <div>
                <label htmlFor="userName">
                  User Name<span>*</span>
                </label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter Your Name"
                  value={user.userName}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="email">
                  Email<span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="profileImage">
                  Upload Phote<span>*</span>
                </label>
                <input
                  type="file"
                  name="profileImage"
                  accept=".jpg, .jpeg, .png"
                  // style={{ display: "none" }}
                  onChange={handleImage}
                />
              </div>
              <div>
                <label htmlFor="password">
                  Password<span>*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword">
                  Confirm Password<span>*</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter Confirm Password"
                  value={user.confirmPassword}
                  onChange={handleInput}
                />
              </div>
              <input type="submit" value="Register" />
            </form>
            <div className="alreadyAccount">
              <span>
                Already have an Account? <Link to="/signin">Sign In</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
