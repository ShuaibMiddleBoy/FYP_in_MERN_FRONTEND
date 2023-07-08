import React, { useEffect, useState } from 'react';
import axios from "axios";
import style from "./updateProperty.module.css";
import {useNavigate, useParams} from "react-router-dom";
const UpdateProperty = () => {

  const navigate = useNavigate();

    const [property, setProperty] = useState([]);
    const {id} = useParams();
  
    useEffect(()=>{
      getProperty();
    },[])
  
    const getProperty = async () => {
      const res = await fetch(`http://localhost:8000/property/${id}`);
      const  data = await res.json();
      setProperty(data);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {title, type, price, desc} = property;
      
        const res = await fetch(`http://localhost:8000/update-property/${id}`, {
          method : "PUT",
          headers : {
            "Content-Type" : "application/json",
            Authorization : `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
          },
          body : JSON.stringify({title, type, price, desc})
        })

        const data = await res.json();
        navigate("/")
  
      }
    
    const handleChange = (e) => {
        const {value, name} = e.target;

        setProperty((preVale)=>{
          return {
            ...preVale,
            [name] : value
          }
        })
    }
    const handleImage = (e) => {
        setProperty((preValue)=>{
            return {
              ...preValue,
              image : e.target.files[0]
            }
          })
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