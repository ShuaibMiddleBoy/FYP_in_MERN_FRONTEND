import style from "./hero.module.css";
import React from 'react';
import Button from '@mui/material/Button';

const Hero = () => {
  return (
    <div className={style.container}>
      <h2 className={style.mainHeading}>Search properties for sale in pakistan</h2>
      <div className={style.sellType}>
      <Button variant="contained">Buy</Button>
      <Button variant="contained">Rent</Button>
      </div>
      <div className={style.inputPart}>
      <div className={style.searchPlace}>
        <select name="selectCity" id="selectCity">
          <option value="" disabled>Select city</option>
          <option value="islamabad">Islamabad</option>
          <option value="karachi">Karachi</option>
          <option value="peshawar">Peshawar</option>
          <option value="lahore">Lahore</option>
        </select>
        <select name="selectType" id="selectType">
          <option value="" disabled>Select Type</option>
          <option value="beach">Beach</option>
          <option value="mountain">Mountain</option>
          <option value="village">Village</option>
        </select>
        <select name="priceRange" id="priceRange">
          <option value="" disabled>Select Price Range</option>
          <option value="1">10-20</option>
          <option value="1">20-30</option>
          <option value="1">30-40</option>
          <option value="1">40-50</option>
          <option value="1">50-60</option>
        </select>
        <button type="submit">Search</button>
      </div>
      </div>
    </div>
  )
}

export default Hero