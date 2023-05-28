import React, {useState, useEffect} from 'react';
import style from "./featuredProperties.module.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import img1 from "./asset/p-1.png";
import img2 from "./asset/p-2.png";
import img3 from "./asset/p-3.png";
import img4 from "./asset/p-4.png";
import img5 from "./asset/p-5.png";
import img6 from "./asset/p-6.png";
import request from "../../util/fetchAPI";
import { Link } from '@mui/material';

const FeaturedProperties = () => {
    const [featuredProperties, setFeaturedProperties] = useState([]);

    useEffect(()=>{
        const fetchFeaturedProperties = async () => {
            try {
                const data = await request("/property/find/featured", "GET");
            setFeaturedProperties(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchFeaturedProperties();
    },[])

  return (
    <div className={style.container}>
            <div className={style.heading}>
        <h1>Our Featured Properties</h1>
        <p>Properties you may like</p>
        </div>
        <div className={style.grid}>
        {featuredProperties.map((property)=>{
        return(
            <div key={property._id} className={style.box}>
                <div className={style.image}>
                    <img src={img1} alt="" /> {/* https://localhost:8000/images/${property.image} */}
                </div>
                <div className={style.text}>
                 <div className={style.category}>
                 <span>For Rent</span>
                 <FavoriteIcon className={style.favoriteIcon}/>
                 </div>
                 <h4>Red Carpet Real Estate</h4>
                 <p>Ring road peshawar</p>
                </div>
                <div className={style.button}>
                <div>
                <Button variant="contained" className={style.btn}>{property.price}</Button>
                    <label htmlFor="">/sqft</label>
                    </div>
                    <span>Apartment</span>
                </div>
            </div>)    
        })}
            {/* <div className={style.box}>
                <div className={style.image}>
                    <img src={img1} alt="" />
                </div>
                <div className={style.text}>
                 <div className={style.category}>
                 <span>For Rent</span>
                 <FavoriteIcon className={style.favoriteIcon}/>
                 </div>
                 <h4>Red Carpet Real Estate</h4>
                 <p>Ring road peshawar</p>
                </div>
                <div className={style.button}>
                <div>
                <Button variant="contained" className={style.btn}>599</Button>
                    <label htmlFor="">/sqft</label>
                    </div>
                    <span>Apartment</span>
                </div>
            </div>
            <div className={style.box}>
                <div className={style.image}>
                    <img src={img2} alt="" />
                </div>
                <div className={style.text}>
                 <div className={style.category}>
                 <span>For Rent</span>
                 <FavoriteIcon className={style.favoriteIcon}/>
                 </div>
                 <h4>Red Carpet Real Estate</h4>
                 <p>Ring road peshawar</p>
                </div>
                <div className={style.button}>
                <div>
                <Button variant="contained" className={style.btn}>599</Button>
                    <label htmlFor="">/sqft</label>
                    </div>
                    <span>Apartment</span>
                </div>
            </div>
            <div className={style.box}>
                <div className={style.image}>
                    <img src={img3} alt="" />
                </div>
                <div className={style.text}>
                 <div className={style.category}>
                 <span>For Rent</span>
                 <FavoriteIcon className={style.favoriteIcon}/>
                 </div>
                 <h4>Red Carpet Real Estate</h4>
                 <p>Ring road peshawar</p>
                </div>
                <div className={style.button}>
                <div>
                <Button variant="contained" className={style.btn}>599</Button>
                    <label htmlFor="">/sqft</label>
                    </div>
                    <span>Apartment</span>
                </div>
            </div>
            <div className={style.box}>
                <div className={style.image}>
                    <img src={img4} alt="" />
                </div>
                <div className={style.text}>
                 <div className={style.category}>
                 <span>For Rent</span>
                 <FavoriteIcon className={style.favoriteIcon}/>
                 </div>
                 <h4>Red Carpet Real Estate</h4>
                 <p>Ring road peshawar</p>
                </div>
                <div className={style.button}>
                <div>
                <Button variant="contained" className={style.btn}>599</Button>
                    <label htmlFor="">/sqft</label>
                    </div>
                    <span>Apartment</span>
                </div>
            </div>
            <div className={style.box}>
                <div className={style.image}>
                    <img src={img5} alt="" />
                </div>
                <div className={style.text}>
                 <div className={style.category}>
                 <span>For Rent</span>
                 <FavoriteIcon className={style.favoriteIcon}/>
                 </div>
                 <h4>Red Carpet Real Estate</h4>
                 <p>Ring road peshawar</p>
                </div>
                <div className={style.button}>
                <div>
                <Button variant="contained" className={style.btn}>599</Button>
                    <label htmlFor="">/sqft</label>
                    </div>
                    <span>Apartment</span>
                </div>
            </div>
            <div className={style.box}>
                <div className={style.image}>
                    <img src={img6} alt="" />
                </div>
                <div className={style.text}>
                 <div className={style.category}>
                 <span>For Rent</span>
                 <FavoriteIcon className={style.favoriteIcon}/>
                 </div>
                 <h4>Red Carpet Real Estate</h4>
                 <p>Ring road peshawar</p>
                </div>
                <div className={style.button}>
                <div>
                <Button variant="contained" className={style.btn}>599</Button>
                    <label htmlFor="">/sqft</label>
                    </div>
                    <span>Apartment</span>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default FeaturedProperties;