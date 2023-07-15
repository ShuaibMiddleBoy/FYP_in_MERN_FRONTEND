import React, { useEffect, useState } from 'react';
import axios from "axios";
import style from "./updateProperty.module.css";
import {useNavigate, useParams} from "react-router-dom";
import request from '../../util/fetchAPI';
const UpdateProperty = () => {

  const navigate = useNavigate();

    const [property, setPropertyDetails] = useState([]);
    const {id} = useParams();
  
    useEffect(() => {
      const fetchPropertyDetails = async () => {
          try {
              const data = await request(`/property/find/${id}`, 'GET')
              setPropertyDetails(data)
          } catch (error) {
              console.error(error)
          }
      }
      fetchPropertyDetails()
  }, [id])
  
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        // const {title, type, price, desc} = property;
      
        // const res = await fetch(`http://localhost:8000/property/${id}`, {
        //   method : "PUT",
        //   headers : {
        //     "Content-Type" : "application/json",
        //     Authorization : `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
        //   },
        //   body : JSON.stringify({title, type, price, desc})
        // })

        // const data = await res.json();
        // console.log(data);
        // navigate("/")
  
      }
    
    const handleChange = (e) => {
    //     const {value, name} = e.target;

    //     setPropertyDetails((preVale)=>{
    //       return {
    //         ...preVale,
    //         [name] : value
    //       }
    //     })
    }
    const handleImage = (e) => {
    //     setPropertyDetails((preValue)=>{
    //         return {
    //           ...preValue,
    //           image : e.target.files[0]
    //         }
    //       })
    }
    
      
  return (
    <div className={style.wrapper}>
    <div className={style.container}>
        <h2  className={style.heading}>Update Property</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" placeholder='title' name='title' onChange={handleChange} value={property.title} />
        <input type="text" placeholder='type' name='type' onChange={handleChange} value={property.type} />
        <input type="text" placeholder='price' name='price' onChange={handleChange} value={property.price} />
        <input type="file" name='image' accept=".png, .jpg, .jpeg" onChange={handleImage}/>
        <textarea name="desc" rows="10" onChange={handleChange} value={property.desc}></textarea>
        <input type="submit" value="Update" />
        </form>
    </div>
    </div>
  )
}

export default UpdateProperty