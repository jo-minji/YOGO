import React,{useState} from "react";
import {Route,Link} from 'react-router-dom';
import styled from "styled-components";
import CloseButton from 'react-bootstrap/CloseButton';

const InsertFormPositioner = styled.div`height:64px;
                                    z-index:99;
                                    width:100%;
                                    padding:20px 0 20px 50px;
                                    box-sizing: border-box;
                                    background-color:#f8f9fa;
                                    `
const Close = styled.button`
                            border:none;
                            float:right;
                            background-color:#ccc;
                            margin-right:20px
                            `
const style = {fontSize:'14px', textDecoration:'none', color: '#454444'}


function Closed(){
    const [open,setOpen] = useState(true);

    const onToggle = ()=>{
        setOpen(!open)
    }


    return(       
        <div>
            {open &&(
              <InsertFormPositioner>
                <Link to='/component/join' style={style} >회원가입을 하시면 바로 사용가능한 1,000원 포인트를 적립해드려요!</Link>             
                <Close>
                  <CloseButton onClick={onToggle} open={open}/>
                </Close>
              </InsertFormPositioner>
            )}
        </div>
    )
}

export default Closed;
