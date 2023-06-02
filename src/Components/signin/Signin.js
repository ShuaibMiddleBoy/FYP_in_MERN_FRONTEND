import React, { useState } from 'react'
// import "./login.css";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import FaceIcon from '@mui/icons-material/Face';
// import { Link } from 'react-router-dom';
import ShowModel from './ShowSignin';

const Signin= () => {
const [showModel, setShowModel] = useState(false);


const openModel = () => setShowModel(true);
const closeModel = () => setShowModel(false);




  return (
    <>
                <Button variant="contained" onClick={openModel} style={{backgroundColor:"lightgray", color:"#4E4E4E"}}>
              <AccountCircleIcon />
            </Button>

   { showModel && <ShowModel closeModel={closeModel} />}

        
    </>
  )
}

export default Signin;