import React, {useEffect, useState} from 'react'
import { MyPageContentContainer, RowContainer } from '../../components/Container'
import styled from "styled-components";
import { BorderGrayBtn } from '../../components/Buttons';
import axios from 'axios';

const EditProfile = () => {
    const[profile, setProfile]=useState({});
    useEffect(()=>{
        //일케 하면 난 안됨(로그인부터 뭔가 잘못됨 난,,, -새별)
        /*axios.get("api/user/profile", {params: {userId:localStorage.getItem('userId') }})
        .then(res=>{
           setProfile(res.data.data);
        })*/
    },[])
  return (
    <MyPageContentContainer>
        <Top>
            <Img src='../img/mypage/profile.png'></Img>
            <Btns>
                <BorderGrayBtn style={{height:"30px"}}>수정</BorderGrayBtn>
                <BorderGrayBtn style={{height:"30px"}}>삭제</BorderGrayBtn>
            </Btns>
        </Top>
        <Content>
            <Title>이름</Title>
            <Input placeholder={profile.username}></Input>
            <Title>이메일(아이디)</Title>
            <Input placeholder={profile.email}></Input>
            <Title>비밀번호</Title>
            <Input placeholder='******'></Input>
            <Title>휴대폰번호</Title>
            <Input placeholder={profile.phoneNumber}></Input>
        </Content>
        <RowContainer style={{marginTop:"40px"}}>
        <Delete>*북스필릭 회원탈퇴를 원하신다면</Delete>
        <Delete> 여기</Delete>{/*링크달기 */}
        <Delete>를 클릭하세요.</Delete>
        </RowContainer>
        
    </MyPageContentContainer>
  )
}

export default EditProfile
const Top=styled(RowContainer)`
    gap:10%;
    margin-top: 20px;
    margin-bottom:34px;
`
const Img=styled.img`
    height: 75px;
`
const Btns=styled(RowContainer)`
    width: 50%;
    gap: 5%;
`
const Content=styled.div`
    display:grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 24px 5%;
`
const Title=styled.div`
    margin-top:10px;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    text-align: center;
`
const Input=styled.input`
height: 40px;
background: #F5F5F5;
`
const Delete=styled.span`
    font-weight: 400;
font-size: 14px;
color: #616161;
`