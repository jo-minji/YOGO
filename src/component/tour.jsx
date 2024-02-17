import React from "react";
import './tour.css'
import {Route} from 'react-router-dom';
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronDoubleLeft } from "react-icons/hi2";
import { HiChevronDoubleRight } from "react-icons/hi2";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import Tour1 from "./tour1";
import Tour2 from "./tour2";
import Tour3 from "./tour3";


function Tour(){
    return(
        <div className="tour">
            <ul className="t_nav">
                <li><Link to="/">홈</Link></li>
                <li>/</li>
                <li><Link to="/">투어</Link></li>
            </ul>
            <h2>투어</h2>
                <span className="t_num">총 <b>44</b>개의 상품이 있습니다.
                    <select>
                        <option>- 정렬방법 -</option>
                        <option>신상품</option>
                        <option>상품명</option>
                        <option>낮은가격</option>
                        <option>높은가격</option>
                        <option>사용후기</option>
                    </select>
                </span>


            

            <Route path='/component/tour' exact={true} component={Tour1}/>
            <Route path='/component/tour/tour1' component={Tour1}/>
            <Route path='/component/tour/tour2' component={Tour2}/>
            <Route path='/component/tour/tour3' component={Tour3}/>


            <div className="btns">
                <ul>
                    <li><Link to=""><HiChevronDoubleLeft/></Link></li>
                    <li><Link to=""><HiChevronLeft/></Link></li>
                    <li className="num num1" ><Link to="/component/tour/tour1" >1</Link></li>
                    <li className="num"><Link to="/component/tour/tour2">2</Link></li>
                    <li className="num num3"><Link to="/component/tour/tour3">3</Link></li>
                    <li><Link to=""><HiChevronRight/></Link></li>
                    <li><Link to=""><HiChevronDoubleRight/></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Tour;