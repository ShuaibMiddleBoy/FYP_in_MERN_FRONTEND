import React, { useEffect, useState } from 'react'
import style from "./propertyDetails.module.css";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

const PropertyDetails = () => {
  const navigate = useNavigate();
  const [propertyDetails, setPropertyDetails] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    getPropertyDetails();
  },[])

  const getPropertyDetails = async () => {
    const res = await fetch(`http://localhost:8000/property/${id}`, {
      headers : {
        Authorization : `Bearer ${JSON.parse(localStorage.getItem("auth"))}`
      }
    });
    const  data = await res.json();
    setPropertyDetails(data);
  }
  const deleteProperty = async (id) => {
    const res = await fetch(`http://localhost:8000/property/${id}`, {
      method : "Delete",
      headers : {
        Authorization : `Bearer ${JSON.parse(localStorage.getItem("auth"))}`
      }
    })

    const data = res.json();
    if(data){
      alert("data deleted");
      navigate("/properties");

    }

  }
  return (
    <>
    <div className={style.wrapper}>
    <div className={style.container}>
      <div className={style.image}>
        <img src={`http://localhost:8000/images/${propertyDetails.image}`} alt="img" srcset="" />
      </div>
      <div className={style.details}>
      <h3>Details</h3>
          <ul className={style.grid}>
<li><span>Type:</span><span>House</span></li>
<li><span>Area:</span><span>4.4Marla</span></li>
<li><span>Price:</span><span>${propertyDetails.price}</span></li>
<li><span>Purpose:</span><span>For Sale</span></li>
<li><span>Location:</span><span>Islamabad</span></li>
<li><span>Bedroom(s):</span><span>5</span></li>
          </ul>
      </div>
      <div className={style.desc}>
        <h3>Description</h3>
        <span>25x40 Brand New Triple Storey House Is Available For Sale In D-12 3        <br />CDA transfer <br /><br />Features <br />5 bedrooms </span>
      </div>
      <Button variant="contained" onClick={()=>deleteProperty(propertyDetails._id)}>Delete Property</Button>
      <Link to={`/update-property/${propertyDetails._id}`}>
      <Button variant="contained">Upadet Property</Button> 
      </Link>
         </div>
    </div>
    </>
  )
}

export default PropertyDetails