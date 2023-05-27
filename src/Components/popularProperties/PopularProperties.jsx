import React, { useEffect, useState } from 'react'
import style from "./popularProperties.module.css";
import card1 from "./asset/h1.png"
import card2 from "./asset/h2.png"
import card3 from "./asset/h3.png"
// import card4 from "./asset/h4.png"
// import card5 from "./asset/h5.png"
import {Link} from "react-router-dom";
import request from "../../util/fetchAPI";

const PopularProperties = () => {

    const [numProperties, setNumProperties] = useState({});

    useEffect(()=>{
     const fetchNUmProperties = async () => {
        try {
            const data = await request("/property/find/type", "GET");
            setNumProperties(data);
            
        } catch (error) {
            console.log(error);
        }
     }
     fetchNUmProperties();
    },[])

  return (
    <div className={style.container}>
    <div className={style.heading}>
        <h1>Different Types of Properties</h1>
        <p>Best type of properties for you</p>
        </div>

<div className={style.featuredProp}>
<div className={style.card}>
  <Link to="/properties?type=beach&content=1&priceRange=0" alt="">
    <img src={card1} alt="" width={"55px"}/>
    <div className={style.cardContent}>
      <h4>Beach Properties</h4>
      <p>{numProperties.beach} Property</p>
    </div>
    </Link>
  </div>
  <div className={style.card}>
  <Link href="/properties?type=mountain&content=1&priceRange=0" alt="">
    <img src={card2} alt="" width={"55px"}/>
    <div className={style.cardContent}>
      <h4>Mountain Properties</h4>
      <p>{numProperties.village} Property</p>
    </div>
    </Link>
  </div>
  <div className={style.card}>
  <Link href="/properties?type=village&content=1&priceRange=0" alt="">
    <img src={card3} alt="" width={"55px"}/>
    <div className={style.cardContent}>
      <h4>Mountain Properties</h4>
      <p>{numProperties.mountain} Property</p>
    </div>
    </Link>
  </div>
</div>
    </div>
  )
}

export default PopularProperties;