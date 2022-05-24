import React from 'react'
import {  BlackBtn, BorderGrayBtn } from '../components/Buttons'
import { RowContainer, ColContainer } from '../components/Container'
import Header from '../components/Header'
import styled from 'styled-components'
import KaKaoLogin from 'react-kakao-login'
const Login = () => {
  return (
    <>
        <Header/>
        <RowContainer style={{margin: "150px 10%" }}>
            <Col1>
            <Title>동네 책방의 모든 이야기를 담다</Title>
            <Subtitle>북스필릭에서 나만의 동네 책방을 찾아보세요</Subtitle>
            </Col1>
            <Col2>
                <Title style={{marginBottom:"35px"}}>로그인</Title>
                <Inputs>
                <Input placeholder="이메일(아이디)" style={{marginBottom:"20px"}}></Input>
                    <Input placeholder="비밀번호"></Input>
                </Inputs>
                
                <input type="radio"></input>
                <BlackBtn padding={0} style={{textAlign:"center", marginTop:"35px"}}>로그인</BlackBtn>
                <RowContainer style={{margin:"20px 0", gap:"4%", width:"100%"}}>
                    <BorderGrayBtn style={{width:"41%", textAlign:"center"}}>일반회원으로 가입하기</BorderGrayBtn>
                    <BorderGrayBtn style={{width:"41%" , textAlign:"center"}}>사장님으로 가입하기</BorderGrayBtn>
                </RowContainer>
                <BorderGrayBtn style={{marginBottom:"35px", textAlign:"center", padding:"15px 0"}}>아이디/비밀번호 찾기</BorderGrayBtn>
                <hr/>
                <RowContainer>
                    
                </RowContainer>
            </Col2>
        </RowContainer>
    </>
  )
}

export default Login
const Col1=styled(ColContainer)`
    width:50%;
    display: flex;
    height:100%;
    align-self: flex-start;
`
const Title=styled.div`
    font-weight: 700;
font-size: 30px;
`
const Subtitle=styled.div`
    font-weight: 400;
font-size: 16px;
color: #616161;
margin-top: 10px;
`
const Col2=styled(ColContainer)`
display: flex;
    width: 50%;
`
/*const BlackBtn=styled.button`
    text-align: center;
    margin-top: 35px;
    background-color: #2A3143;
`*/
const Inputs=styled(ColContainer)`
    width:100%;
`
const Input=styled.input`
    height: 40px;
    width:95%;
    padding: 20px 0 20px 5%;
    border: 1px solid #616161;
`