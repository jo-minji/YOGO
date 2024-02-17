import React from "react";
import {Route,Link} from 'react-router-dom';

import { GoChevronRight } from "react-icons/go";




function Pick() {
    return(
        <>
            <div className="head_in">
                <b>YOGO Pick!</b>
                <span>오늘은 요고 하세요!</span>
            </div>
            <div className="pick_m">
                <a href="">
                    <div className ="p_top"><img src="/images/pick1.jpeg"/></div>
                    <div className="p_bottom">
                        <div className="p_text">
                            <h6>주당의 비결,&nbsp;&nbsp;마지막 수량 OPEN!</h6>
                            <span>고민은 진짜 배송만 늦출 뿐 ...</span>
                        </div>
                        <div className="p_button"><GoChevronRight className="p_icon"/></div>
                    </div>
                </a>
                <a href="">
                    <div className="p_top"><img src="/images/pick2.jpeg"/></div>
                    <div className="p_bottom">
                        <div className="p_text">
                            <h6>항사리91 숙박권 이벤트 진행중!</h6>
                            <span>온수 추가금 없는 풀캉스는 처음이지?</span>
                        </div>
                        <div className="p_button"><GoChevronRight className="p_icon"/></div>
                    </div>
                </a>
                <a href="">
                    <div className ="p_top"><img src="/images/pick3.jpeg"/></div>
                    <div className="p_bottom">
                        <div className="p_text">
                            <h6>주당의 비결,&nbsp;&nbsp;마지막 수량 OPEN!</h6>
                            <span>고민은 진짜 배송만 늦출 뿐 ...</span>
                        </div>
                        <div className="p_button"><GoChevronRight className="p_icon"/></div>
                    </div>
                </a>
                
            </div>
        </>
    )
  }
  
  export default Pick;