import React from "react";
import style from "./navbar.module.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import logo from "./asset/logo.png"

const Navbar = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.left}>
        <Link to="/">
          <img src={logo} alt="" srcset="" width={"80px"} />
          </Link>
        </div>
        <div className={style.center}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/featured">Featured</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={style.right}>
          <Link to="/signin">
          <Button className={style.login} variant="contained">
              Login
            </Button>
          </Link>
          <Link to="/post_property">
            <Button className={style.postProperty} variant="contained">
              Post Property
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
