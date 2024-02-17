import React from "react";
import './main/main.css'
import MainImg from "./main/main_img";
import Pick from "./main/pick";
import Review from "./main/review"
import Best from "./main/best";
import Play from "./main/play";
import Contact from "./main/contact";



function Main(){
    return(
        <div className='main'>
            <div className='main_in'>
                <MainImg/>
                <Pick/>
                <Review/>
                <Best/>
                <Play/>
                <Contact/>
            </div>
        </div>
    )
}
export default Main;