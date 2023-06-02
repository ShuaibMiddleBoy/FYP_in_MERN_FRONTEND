import {useEffect } from "react";
import style from "./login.module.css";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';


const ShowModel = ({closeModel}) => {

    useEffect(()=>{
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    })
    return (
      <>
      <div className={style.modalWrapper} onClick={closeModel}></div>
      <div className={style.modalContainer}>
      <div className={style.loginForm}>
      <button onClick={closeModel} className={style.crossBtn}><CloseIcon></CloseIcon></button>
        <h2 className={style.heading}>Login</h2>
        <form className={style.form}>
          <input type="email" className={style.inputField} placeholder="User Email*" />
          <input type="password" className={style.inputField} placeholder="Password*"/>
          <div>
            <input type="checkbox" className={style.checkBox}/><span>Remember Me</span>
          </div>
          <Button variant="contained" className={style.submitBtn}>Login</Button>
        </form>
        <div className={style.regAndForget}>
          <Link to="/signup" className={style.link}>Register Here</Link>
          <Link to="/" className={style.link}>Forget Password?</Link>
        </div>
      </div>
        </div>
      </>
    )
  }

  export default ShowModel;