import React from "react";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import logo from "./asset/logo.png";

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.left}>
          <Link to="/">
            <img alt="logo" srcset={logo} style={{ width: "80px" }} />
          </Link>
        </div>

        {auth ? 
      <> 
          <div className={style.center}>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/properties"}>Properties</Link>
              </li>
              <li>
                <Link to={"/featured"}>Featured</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className={style.right}>
          <ul>
          <li>
            <Link onClick={logout} to="/">Logout</Link>
            </li>
            </ul>
          </div>
          </>  
        : 
          <>
            <div className={style.center}>
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <div className={style.right}>
            <ul>
                    <li>
                      <Link to={"/signin"}>SignIn</Link>
                    </li>
                    <li>
                      <Link to={"/signup"}>SignUp</Link>
                    </li>
                  </ul> 
            </div>
          </>
        }
      </div>
    </>
  );
};

export default Navbar;
