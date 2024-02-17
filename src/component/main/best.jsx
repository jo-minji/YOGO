import React,{Component} from "react";

const style2 = {fontWeight:'bold', color: '#302e2e;'}





class Best extends Component{

    componentDidMount(){
        const bestNav = document.querySelectorAll('.best_nav li');
        const bestList = document.querySelectorAll('.best_list li');


        for(let i=0; i<bestNav.length;i++){
            bestNav[i].index=i;
            bestNav[i].onclick = (e)=>{
                let n = e.currentTarget.index; 
                
                for(let j=0; j<bestNav.length;j++){
                    if(j==n){
                        bestNav[j].classList.add('on');
                        bestList[j].classList.add('active');
                    }else{
                        bestNav[j].classList.remove('on');
                        bestList[j].classList.remove('active');
                    }
                }
            }
            
        }
    }

    render(){
        return(
            <div>
                <div className="head_in">
                    <b>YOGO's BEST</b>
                </div>
                <ul className="best_nav">
                    <li>실시간랭킹</li>
                    <li>마감임박</li>
                    <li>특가상품</li>
                    <li>품절임박</li>
                    <li>오픈예정</li>
                </ul>
                <ul className="best_list">
                    <li className='active'>
                        <div>
                            <a href="">
                                <img src="/images/rank1.jpeg"></img>
                                <span>[판매종료]주당의비결 숙취해소제 10개입 세트(2차)</span>
                            </a>
                            <span style={style2}>21,800원</span>
                        </div>
                        <div>
                            <a href="">
                                <img src="/images/rank2.jpeg"></img>
                                <span>예보링X항사리91 숙박권 이벤트!</span>
                            </a>
                            <span style={style2}>144,000원</span>
                        </div>
                        <div>
                            <a href="">
                                <img src="/images/rank3.png"></img>
                                <span>[3차오픈!] 주당의 비결 숙취해소제 10개입 세트</span>
                            </a>
                            <span style={style2}>21,800원</span>
                        </div>
                    </li>                      
                    <li>
                        <div>
                            <a href="">
                                <img src="/images/rank1.jpeg"></img>
                                <span>[판매종료]주당의비결 숙취해소제 10개입 세트(2차)</span>
                            </a>
                            <span style={style2}>21,800원</span>
                        </div>
                        <div>
                            <a href="">
                                <img src="/images/rank2.jpeg"></img>
                                <span>예보링X항사리91 숙박권 이벤트!</span>
                            </a>
                            <span style={style2}>144,000원</span>
                        </div>
                        <div>
                            <a href="">
                                <img src="/images/rank3.png"></img>
                                <span>[3차오픈!] 주당의 비결 숙취해소제 10개입 세트</span>
                            </a>
                            <span style={style2}>21,800원</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="">
                                <img src="/images/rank2.jpeg"></img>
                                <span>예보링X항사리91 숙박권 이벤트!</span>
                            </a>
                            <span style={style2}>144,000원</span>
                        </div>
                        <div>
                            <a href="">
                                <img src="/images/rank1.jpeg"></img>
                                <span>[판매종료]주당의비결 숙취해소제 10개입 세트(2차)</span>
                            </a>
                            <span style={style2}>21,800원</span>
                        </div>
                        <div>
                            <a href="">
                                <img src="/images/rank3.png"></img>
                                <span>[3차오픈!] 주당의 비결 숙취해소제 10개입 세트</span>
                            </a>
                            <span style={style2}>21,800원</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="">
                                <img src="/images/rank2.jpeg"></img>
                                <span>예보링X항사리91 숙박권 이벤트!</span>
                            </a>
                            <span style={style2}>144,000원</span>
                        </div>
                        <div>
                            <a href="">
                                <img src="/images/rank1.jpeg"></img>
                                <span>[판매종료]주당의비결 숙취해소제 10개입 세트(2차)</span>
                            </a>
                            <span style={style2}>21,800원</span>
                        </div>
                        <div>
                            <a href="">
                                <img src="/images/rank3.png"></img>
                                <span>[3차오픈!] 주당의 비결 숙취해소제 10개입 세트</span>
                            </a>
                            <span style={style2}>21,800원</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="">
                                <img src="/images/rank4.png"></img>
                                <span>[판매종료] 심장에박현서X엔젤토크림</span>
                            </a>
                            <span style={style2}>40,000원</span>
                        </div>
                        <div>
                            <a href="">
                                <img src="/images/rank5.png"></img>
                                <span>[판매종료] 생각없이사는연X그랑모던 풀빌라 패키지</span>
                            </a>
                            <span style={style2}>63,000원</span>
                        </div>
                        <div>
                            <a href="">
                                <img src="/images/rank6.jpeg"></img>
                                <span>[판매종료] 매일제히XsMTS</span>
                            </a>
                            <span style={style2}>117,000원</span>
                        </div>
                        <div>
                            <a href="">
                                <img src="/images/rank7.jpeg"></img>
                                <span>[2차오픈!] 심장에박현서X엔젤토크림</span>
                            </a>
                            <span style={style2}>40,000원</span>
                        </div>
                    </li>
                </ul>
            </div>
            
        )}
}

export default Best;