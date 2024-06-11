import React from "react";
import { Link } from "react-router-dom";
import hero from "../images/nav_hero.gif"
import pic_1 from "../images/pic-1.jpg";
import pic_2 from "../images/pic-2.jpg";
import pic_3 from "../images/pic-3.avif";
import pic_4 from "../images/pic-4.jpg";
import pic_5 from "../images/pic-5.webp";
import pic_6 from "../images/pic-6.jpg";
import pic_7 from "../images/pic-7.jpg";
import pic_8 from "../images/pic-8.jpg";
import pic_9 from "../images/pic-9.webp";
import pic_10 from "../images/pic-10.jpg";
import pic_11 from "../images/pic-11.jpg";
import pic_12 from "../images/pic-12.jpg";
import pic_13 from "../images/pic-13.webp";
import pic_14 from "../images/pic-14.jpg";
import pic_15 from "../images/pic-15.jpg";
import pic_16 from "../images/pic-16.webp";
import pic_17 from "../images/pic-17.jpg";
import pic_18 from "../images/pic-18.jpg";
import pic_19 from "../images/pic-19.jpg";
import pic_20 from "../images/pic-20.jpg";
export default function Landing(){
  return(
    <div className="landing">
        <div className="landing-top">
          <div className="landing-left">
              <img src={hero} className="hero_image"/>
          </div>
          <div className="landing-right">
            <h1>HOLA AMIGOS !</h1>
            <p>This is made for the selection test of FMC Weekend. Hope I get selected !</p>
            <div className="land-links">
            <Link to="/login"><button className="button-landing">SIGN ME UP</button></Link>
            <Link to="/register"><button className="button-yes button-landing">REGISTER ME</button></Link>
            </div>
          </div>
        </div>
        <div className="landing-bottom">
          <div className="yoo-top">
            <img src={pic_1}/>
            <img src={pic_2} />
            <img src={pic_3}/>
            <img src={pic_4} />
            <img src={pic_5}/>
            <img src={pic_6}/>
            <img src={pic_7}/>
            <img src={pic_8}/>
            <img src={pic_9}/>
            <img src={pic_10}/>
          </div>
          <div className="yoo-middle">
              <h1>ENJOY THE THRILL</h1>
          </div>
          <div className="yoo-bottom">
            <img src={pic_11}/>
            <img src={pic_12}/>
            <img src={pic_13}/>
            <img src={pic_14}/>
            <img src={pic_15}/>
            <img src={pic_16}/>
            <img src={pic_17}/>
            <img src={pic_18}/>
            <img src={pic_19}/>
            <img src={pic_20}/>
          </div>
        </div>
    </div>
  )
}