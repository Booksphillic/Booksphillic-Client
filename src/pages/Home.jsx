import React from 'react'
import Header from '../components/Header';
import styled from "styled-components";
import { CenterContainer, ColContainer, RowContainer,Container } from '../components/Container';
import BestReview from '../components/main/BestReview';

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
          <img src='../img/bookstore1.png' width="63%" height="100%"/>
          </ContentWrapper>
          <ContentWrapper>
            <img src='../img/bookstore1.png' width="38%" height="100%" ></img>
            <BookstoreContent>ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ</BookstoreContent>
          <MoreBtn>
            <div>더 많은 컨텐츠 <br/>보러가기</div>
            <img src='../img/arrow.png'></img>
          </MoreBtn>
       


          </ContentWrapper>
        </HomeCenterContainer>
       
  
     
      </HomeContainer>
       
    </>
   
  
 
  )
}

export default Home;

const HomeContainer=styled(Container)`
  background-image: url('../img/background_home.jpg');
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
  padding: 14vh 0%; 
  //margin-bottom: 7px;
`
const ContentWrapper=styled(RowContainer)`
  height: 513px;
  width: 100%;
  position: relative;
`
const BookstoreContent=styled(ColContainer)`
  height: 100%;
  padding: 5%;
  width: 35vw;
`
const MoreContents=styled.div`
  height: 100%;
  position: relative;
`
const MoreBtn=styled(RowContainer)`
  position: absolute;
  bottom: 10px;
  right: 10px;
`