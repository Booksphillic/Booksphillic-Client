import React from 'react'
import Header from '../components/Header';
import styled from "styled-components";
import { CenterContainer, ColContainer, RowContainer,Container } from '../components/Container';
import BestReview from '../components/main/BestReview';
import { Col } from 'react-bootstrap';
import styledEngine from '@mui/styled-engine';
import IntroMistery from '../components/main/IntroMistery';
import Footer from '../components/Footer';
const Home = () => {
  return (
  <>
   <Header/>
      <HomeContainer>
        <HomeCenterContainer>
          <TopWrapper>
            <img src='../img/house.png'></img>
            <div>파동이 닿는 곳, 송파</div>
          </TopWrapper>
          <ContentWrapper>
          <BookstoreContent>
            <div>hiiiiiiiiiiiㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑㅑ</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          </BookstoreContent>
          <img src='../img/bookstore1.png' width="62.4%" height="100%" ></img>
          </ContentWrapper>
          <ContentWrapper>
          <img src='../img/bookstore1.png' width="37.6%" height="100%" ></img>
            <BookstoreContent>ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ</BookstoreContent>
          <MoreBtn>
            <div>더 많은 컨텐츠 <br/>보러가기</div>
            <img src='../img/arrow.png'></img>
          </MoreBtn>
          </ContentWrapper>
          <BestReview/>
          <BookStoreProfile>
          <ProfileTop>
            <RowContainer>
            <img src='../img/bookstore.png'></img>
            <div>송파의 책방 프로필</div>
            </RowContainer>
            <RowContainer>
            <img src='../img/previous.png'></img>
            <img src='../img/next.png'></img>
            </RowContainer>
          </ProfileTop>
          <ProfileContent>
            <ProfileCard>
              <div style={{height:"490px"}}>이미지 자리</div>
              <ProfileBottom>
                <Bottom1>
                  <div>동네책방 주책</div>
                  <div>주소</div>
                </Bottom1>
                <Bottom2>
                  <img src='../img/scrap.png' height="48px" width="60%" style={{marginLeft: "15%"}}></img>
                  <div>스크랩하기</div>
                </Bottom2>
              </ProfileBottom>
            </ProfileCard>
          </ProfileContent>
          <ProfileEnd>
            <img src='../img/moreBookstore.png'></img>
          </ProfileEnd>
        </BookStoreProfile>
        <IntroMistery/>
        </HomeCenterContainer>
      </HomeContainer>
       <Footer/>
    </>
   
  
 
  )
}

export default Home;

const HomeContainer=styled(Container)`
  background-image: url('../img/background/background_home.jpg');
  background-attachment: local;
  //background-size: cover;//반응형 성공!
  background-size: 100% 4119px;
 
`
const HomeCenterContainer=styled(CenterContainer)`
  margin: 0 3%; //양 옆 띄우기
`
const TopWrapper=styled(RowContainer)`
  width: 100%;
  justify-content: center;
  line-height: 52px;
  padding: 80px 0%; 
  margin-bottom: 3px;
`
const ContentWrapper=styled(RowContainer)`
  height: 511px;
  width: 100%;
  position: relative;
`
const BookstoreContent=styled(ColContainer)`
  height: 100%;
  padding: 5%;
  width: 37.6%;
`
const MoreBtn=styled(RowContainer)`
  position: absolute;
  bottom: 10px;
  right: 10px;
`
const BookStoreProfile=styled(ColContainer)`
  
`
const ProfileTop=styled(RowContainer)`
  justify-content: space-between;
  padding: 15px 2%;
`
const ProfileContent=styled(RowContainer)`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const ProfileCard=styled(ColContainer)`
   
`
const ProfileBottom=styled(RowContainer)`
  padding: 20px 1% 20px 5% ;
`
const Bottom1=styled(ColContainer)`
  width: 80%;
`
const Bottom2=styled(ColContainer)`
  width: 20%;
  padding-left: 5%;
`
const ProfileEnd=styled(RowContainer)`
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
`