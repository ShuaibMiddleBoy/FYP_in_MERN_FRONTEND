import React from 'react'
import style from "./newsLetter.module.css";

const NewsLetter = () => {
  return (
    <div className={style.container}>
        <h2>Do You Need Help With Anything?</h2>
        <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
        <form>
            <input type="email" placeholder='Email Address' className={style.email} />
            <input type="submit" value={"Subscribe"} className={style.btn}/>
        </form>
    </div>
  )
}

export default NewsLetter;