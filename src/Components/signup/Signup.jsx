import React, { useEffect, useState } from "react";
import familyPic from "./asset/familyPic.jpg";
import style from "./signup.module.css";
import { Link } from "react-router-dom";
// import request from "../../util/fetchAPI";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const [user, setUser] = useState({
    userName: "",
    email: "",
    profileImage: "",
    password: "",
    cPassword: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;
    setUser((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userName, email, profileImage, password, cPassword } = user;

    const res = await fetch("http://localhost:8000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        email,
        profileImage,
        password,
        cPassword,
      }),
    });

    const data = await res.json();
    localStorage.setItem("user", JSON.stringify(data));
    if (data.userName) {
      navigate("/");
    }
  };
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
                <label htmlFor="cPassword">
                  Confirm Password<span>*</span>
                </label>
                <input
                  type="password"
                  name="cPassword"
                  placeholder="Enter Confirm Password"
                  value={user.cPassword}
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
