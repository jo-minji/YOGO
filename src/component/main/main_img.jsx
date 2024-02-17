import React,{Component} from "react";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'


class MainImg extends Component{
    render(){
        const settings={
            arrows: false,
            dots:true, 
            infinite:true,
            speed:300,
            autoplay:true,
            autopalySpeed:1000,
            slidesToShow:1,
            slidersToScroll:1
        }
        
        return(
                 <Slider {...settings}>
                     <img src="/images/main1.jpeg"></img>
                     <img src="/images/main2.jpeg"></img>
                     <img src="/images/main3.png"></img>
                     <img src="/images/main4.jpeg"></img>
                     <img src="/images/main5.jpeg"></img>
                 </Slider>
        )
    }
}

export default MainImg