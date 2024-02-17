import './App.css';
import React,{useState} from "react";
import Closed from './component/close';
import {Route} from 'react-router-dom';
import Join from './component/join';
import Login from './component/login';
import Order from './component/order';
import Recent from './component/recent';
import Customer from './component/customer';
import Tour from './component/tour';
import Food from './component/food';
import Shopping from './component/shopping';
import All from './component/all';
import TheWeek from './component/the_week';
import Market from './component/market'
import Mainpage from './component/main';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CloseButton from 'react-bootstrap/CloseButton';
import { IoPersonOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";

import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';







function App() {



  const [open,setOpen] = useState(false);

    const onToggle = ()=>{
        setOpen(!open)
    }

    
 
  
  return (
    <div id='wrap'>
    
      <Closed />

      <div>
        {open &&(
                <>
                <div class='box'>
                  <div className='c_icon' onClick={onToggle}><CloseButton /></div>
                  <h2>SEARCH</h2>
                  <div className='input'>
                    <input type="text"></input>
                    <a href='/'><CiSearch className='s_icon'/></a></div>     
                  </div>

                <div onClick={onToggle} className="no_box"></div>
                </>
            )}
      </div>

      <div className='info_mn'>
        <ul>
          <li><Link to='/component/login'>로그인</Link></li>
          <li><Link to='/component/order'>주문조회</Link></li>
          <li><Link to='/component/recent'>최근본상품</Link></li>
          <li>
              <NavDropdown title="고객센터">
                <div className='customer'>
                    <a><NavDropdown.Item>고객센터</NavDropdown.Item></a>
                    <a><NavDropdown.Item>리뷰</NavDropdown.Item></a>
                    <a><NavDropdown.Item>이벤트</NavDropdown.Item></a>
                    <a><NavDropdown.Item> 자주묻는질문</NavDropdown.Item></a>
                  </div>
              </NavDropdown>
            </li>
        </ul>
      </div>
      <header>
          <div className='logo'>
              <div className='img'>
                <a href='/'><img src='/images/logo.jpeg'></img></a>
              </div>
          </div>
          <div className='nav'>
            <ul className='main_nav'>
              <li><Link to='/component/tour'>투어</Link></li>
              <li><Link to='/component/food'>푸드</Link></li>
              <li><Link to='/component/shopping' >쇼핑</Link></li>
              <li><Link to='/component/all'>ALL</Link></li>
              <li><Link to='/component/the_week'>더위크&더코노셔</Link></li>
            </ul>

            <ul className='sub_nav'>
              <li onClick={onToggle} open={open}>
                <IoSearchOutline/>
              </li>
                <li><a href='/component/login'><IoPersonOutline/></a></li>
                <li><a href='/component/Market'><IoBagOutline/></a></li>
            </ul>
          </div>
      </header>


      <Route path='/component/join' component={Join}/>
      <Route path='/component/login' component={Login}/>
      <Route path='/component/order' component={Order}/>
      <Route path='/component/recent' component={Recent}/>
      <Route path='/component/customer' component={Customer}/>

      <Route path='/component/tour' component={Tour}/>
      <Route path='/component/food' component={Food}/>
      <Route path='/component/shopping' component={Shopping}/>
      <Route path='/component/all' component={All}/>
      
      <Route path='/component/market' component={Market}/>

      <Route path='/component/the_week' component={TheWeek}/>
      
      <Route path='/' exact={true} component={Mainpage}/>

      
      <footer>
        <div className='footer_in'>
          <div className='f_logo'>
            <a href='/'><img src='/images/logo.jpeg'/></a>
          </div>

          <div className='f_mid'>
            <div>
              <ul>
                <li>회사소개</li>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
                <li>이용안내</li>
              </ul>
              <b>쇼핑몰 기본정보</b>
              <span>
                <dt>상호명</dt>
                <dd>(주)플랫폼구사삼</dd>
                <dt>대표자명</dt>
                <dd>권기준</dd>
              </span>
              <dt>사업장 주소</dt>
              <dd>03785 서울특별시 서대문구 신촌로3길 15 (창천동) 산성빌딩 3층</dd>
             <span>
                <dt>대표 전화</dt>
                <dd>070-4191-6565</dd>
                <dt>사업자 등록번호</dt>
                <dd>516-87-01107</dd>
              </span>
              <dt>통신판매업 신고번호</dt>
              <dd>2022-서울서대문-2032 [사업자정보확인]</dd>
              <dt>개인정보보호책임자</dt>
              <dd>윤승준</dd>
            </div>
            <div>
              <b>고객센터 정보</b>
              <dt>상담/주문 전화</dt>
              <dd>070-4191-6565</dd>
              <dt>상담/주문 이메일</dt>
              <span>biz.yogo@gmail.com</span>
              <dt>CS운영시간</dt>
              <span>
                <dd>09:30~17:30</dd>
                <dd>*사이트에서 결제되는 상품에 대한 배송, 환불, 민원 등의 책임은 (주)플랫폼구사삼에서 진행합니다.
                </dd>
                <dd>-민원 담당자: 윤승준/ 070-4191-6565</dd>
              </span>
            </div>
            <div>
              <b>결제정보</b>
              <dt>무통장 계좌정보</dt>
              <span>우리은행 1005904137475
                  주식화시 플랫폼구사삼
              </span>
            </div>
          </div>

          <div className='f_btm'>
            <div className='fbtm_in'>
              Copyright © YOGO. All Rights Reserved. Hosting by Cafe24 Corp.
              
              <ul>
                <li>SNS</li>
                <li><a href=''><FaInstagram/></a></li>
                <li><a href=''><FaYoutube/></a></li>
                <li><a href=''><FaFacebookF/></a></li>
                <li><a href=''><RiKakaoTalkFill/></a></li>
                <li><a href=''><FaTwitter/></a></li>
                <li><a href=''><img src='/images/blog.png'/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
