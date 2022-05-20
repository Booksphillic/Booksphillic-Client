import React from 'react'
import styled from "styled-components";
import { CenterContainer, ColContainer, Container, RowContainer } from '../../components/Container';
import Header from '../../components/Header';
import TopSection from '../../components/TopSection';
import Location from '../../components/Location';
import { StyleRounded } from '@mui/icons-material';
import Review from './Review';
import Accordion from './Accordion';
import { RoundBtn } from '../../components/Buttons';
import Footer from '../../components/Footer';
const tags=["#태그1", "#태그2"];
const ProfileContent = () => {
    //url 속 id로 axios get
  return (
    <Background>
      <Header/>
      <TopSection title="title" tags={tags}/>
      <ImgContainer>
      
      </ImgContainer>
      <CenterContainer>
          <InfoContainer>
           <Map>
            <Location/>
           </Map>
           <Info>
                <Title>동네책방 주책</Title>
                <RowContainer>
                    <Icon src='../img/icons/location.png'></Icon>
                    <InfoText>주소</InfoText>
                </RowContainer>
                <RowContainer>
                    <Icon src='../img/icons/call.png'></Icon>
                    <InfoText>이메일</InfoText>
                </RowContainer>
                <RowContainer>
                    <Icon src='../img/icons/link.png'></Icon>
                    <InfoText>인스타 링크</InfoText>
                </RowContainer>
                <RowContainer>
                    <Icon src='../img/icons/time.png'></Icon>
                    <InfoText>운영시간</InfoText>
                </RowContainer>
                <RowContainer>
                    <Icon src='../img/icons/notice.png'></Icon>
                    <InfoText>공지사항</InfoText>
                </RowContainer>
           </Info>
          </InfoContainer>
          <Review/>
      </CenterContainer>

       <AccordionContainer>
            <Accordion/>
      </AccordionContainer>
      <BtnContainer>
        <div style={{fontSize:"36px", fontWeight:"700"}}>책방지기에게 도서 큐레이션을 받고 싶다면?</div>
        <RoundBtn>미스터리북 신청하기</RoundBtn>
      </BtnContainer>
      <ReviewContainer>
          {/*여기 그냥 이미지로 넣어도 될 듯??*/}
          <img src='../img/profile/reviewsample.png'></img>
          <img src='../img/profile/reviewsample.png'></img>
          <img src='../img/profile/reviewsample.png'></img>
      </ReviewContainer>
      <ReviewBtnContainer>
          <img src='../img/profile/btn.png'></img>
      </ReviewBtnContainer>
      <Footer/>
    </Background>
  )
}

export default ProfileContent
const Background=styled(Container)`
background-image: url('../img/background/background_profileContent.jpg');
background-attachment: local;
background-size: 100% 5255px;
`
const ImgContainer=styled.div`
    height: 857px;
`
const InfoContainer=styled(RowContainer)`
margin-top: 321px;
height:572px;
margin-bottom: 315px;
`
const Map=styled.div`
  padding: 16px;
`
const Info=styled(ColContainer)`
   margin-left: 5%;
`
const Icon=styled.img`

`
const Title=styled.div`
    font-weight: 700;
font-size: 30px;
margin: 80px 0 75px 0;
`
const InfoText=styled.div`
    font-weight: 500;
font-size: 20px;
color: #222222;
gap:15px;
`
const AccordionContainer=styled.div`
    margin-top: 151px;
`
const BtnContainer=styled(ColContainer)`
    margin:150px 0 50px 0;
    display:flex;
    align-items: center;
    gap:50px;
`
const ReviewContainer=styled(RowContainer)`
    display: grid;
    gap:2%;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 5% 50px 5% ;
`
const ReviewBtnContainer=styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 150px;
    margin-right: 5%;
`
