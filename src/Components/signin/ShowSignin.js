import { useEffect, useState } from "react";
import style from "./signin.module.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import request from "../../util/fetchAPI";

const ShowModel = ({ closeModel }) => {
  const navigate = useNavigate();
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
    const { password, email } = user;
    try {
      let res = await fetch("http://localhost:8000/auth/login", {
        method : "POST",
        headers : {
          "Content-Type":"application/json"
        },
        body : JSON.stringify({email, password})
      });
const data = await res.json();
if(data.auth){
  localStorage.setItem("token", JSON.stringify(data.auth));
  localStorage.setItem("user", JSON.stringify(data.findUser))
}
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  });
  return (
    <>
      <div className={style.modalWrapper} onClick={closeModel}></div>
      <div className={style.modalContainer}>
        <div className={style.loginForm}>
          <button onClick={closeModel} className={style.crossBtn}>
            <CloseIcon></CloseIcon>
          </button>
          <h2 className={style.heading}>Login</h2>
          <form className={style.form} onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              className={style.inputField}
              placeholder="User Email*"
              value={user.email}
              onChange={handleInput}
            />
            <input
              type="password"
              name="password"
              className={style.inputField}
              placeholder="Password*"
              value={user.password}
              onChange={handleInput}
            />
            <div>
              <input type="checkbox" className={style.checkBox} />
              <span>Remember Me</span>
            </div>
            <Button
              variant="contained"
              type="submit"
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

export default ShowModel;
