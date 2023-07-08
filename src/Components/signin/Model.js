import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import style from "./model.module.css";

const MyModel = ({ closeModel }) => {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }

    return () => {
      document.body.style.overflowY = "scroll";
    };
  });

  const [user, setUser] = useState({
    email: "",
    password: "",
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
    const { email, password } = user;
    console.log(email, password);

    const res = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (data.auth) {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("auth", JSON.stringify(data.auth));
      navigate("/");
    } else {
      alert("Please Enter Correct Details");
    }
  };

  return (
    <>
      <div className={style.wrapper} onClick={closeModel}></div>
      <div className={style.container}>
        <button onClick={closeModel} className={style.crossBtn}>
          X
        </button>
        <div className={style.loginForm}>
          <h2 className={style.heading}>Login</h2>
          <form className={style.form} onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              className={style.inputField}
              onChange={handleInput}
              value={user.email}
              placeholder="User Email*"
            />
            <input
              type="password"
              name="password"
              className={style.inputField}
              onChange={handleInput}
              value={user.password}
              placeholder="Password*"
            />
            <div>
              <input type="checkbox" className={style.checkBox} />
              <span>Remember Me</span>
            </div>
            <Button
              type="submit"
              variant="contained"
              className={style.submitBtn}
            >
              Login
            </Button>
          </form>
          <div className={style.regAndForget}>
            <Link to="/signup" className={style.link}>
              Register Here
            </Link>
            <Link to="/" className={style.link}>
              Forget Password?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyModel;
