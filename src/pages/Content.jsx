import React from 'react'
import styled from "styled-components";
import { CenterContainer, ColContainer, RowContainer,Container } from '../components/Container';
import Header from '../components/Header';
import Flex from '../components/Flex';
import { RoundBtn } from '../components/Buttons';
import Accordion from '../components/content/SimpleAccordion';
import Footer from '../components/Footer';
import TopSection from '../components/TopSection';
const Content = () => {
    const tags=["#태그1", "#태그2"]
    //url에서 id 받아와서 get하기(useLocation())
  return (
    <>
    <Background>
        <Header/>
        <CenterContainer>
           <TopSection title="제목" editor="신경미" date="2022.05.20" tags={tags}/>
            <ContentWrapper>
                <ContentContainer>
                    <img src='../img/bookstore1.png' width="49%" height="690px" ></img>
                    <Paragraph>
                        <ParagraphTiTle>송리단길의 <br/>작은서점</ParagraphTiTle>
                        <ParagraphContent>잠실 송리단길에는 작은 서점이 있다. 바로 &lt;무엇보다 책방&gt;. 이런 곳에 책방이 있나? 라고 생각이 들었던 이곳. 엘리베이터가 없는 건물의 3층으로 올라오면 무엇보다 책방이  나를 맞이하고 있다. 생각보다 작고, 다채로운 공간이지만 다양한 무언가를 담고 있다. 각각의 독립서적 부터 작가와 책방지기가 추천하는 책 등 다양한 도서 뿐만 아니라, 메모지나 엽서 등 문구제품도 있다.
                        </ParagraphContent>
                    </Paragraph>
                </ContentContainer>
                <ContentContainer>
                    <Paragraph2>
                        
                        <ParagraphContent>잠실 송리단길에는 작은 서점이 있다. 바로 &lt;무엇보다 책방&gt;. 이런 곳에 책방이 있나? 라고 생각이 들었던 이곳. 엘리베이터가 없는 건물의 3층으로 올라오면 무엇보다 책방이  나를 맞이하고 있다. 생각보다 작고, 다채로운 공간이지만 다양한 무언가를 담고 있다. 각각의 독립서적 부터 작가와 책방지기가 추천하는 책 등 다양한 도서 뿐만 아니라, 메모지나 엽서 등 문구제품도 있다.
                        </ParagraphContent>
                    </Paragraph2>
                    <img src='../img/bookstore1.png' width="40%" height="558px" ></img>
                </ContentContainer>
            </ContentWrapper>
            <ImgContainer>
                <ImgHeader>
                    <TopTitle>책방의 공간들</TopTitle>
                    <div>
                        <img src='../img/previous.png'></img>
                        <img src='../img/next.png'></img> 
                    </div>
                </ImgHeader>
                <ImgWrapper>
                <div></div>
                <img src='../img/bookstore1.png' width="32%" height="470px"></img>
                <img src='../img/bookstore1.png' width="32%" height="470px"></img>
                <img src='../img/bookstore1.png' width="32%" height="470px"></img>
                </ImgWrapper>
            </ImgContainer>
            <Recommend>
                <Col1>
                <TopTitle>책방지기의 <br/>추천도서</TopTitle>
                <div>책방지기 박현서</div>
                </Col1>
                <Col2>
                <img src='../img/content/sample_book.png' style={{transform: "rotate(15deg)", height:"250px", width:"80%" }} ></img>
                <img src='../img/content/sample_book.png' style={{transform: "rotate(-15deg)", height:"250px", width:"80%"}}></img>
                </Col2>
                <Col3>
                <Review>
                <div style={{fontSize: "24px", fontWeight:"700"}}>퇴근 후 동네책방</div>
                <ParagraphContent>각기 다른 매력의 동네책방을 담아놓은 여행에세이</ParagraphContent>
                </Review>
                <Review>
                <div style={{fontSize: "24px", fontWeight:"700"}}>퇴근 후 동네책방</div>
                <ParagraphContent>각기 다른 매력의 동네책방을 담아놓은 여행에세이</ParagraphContent>
                </Review>
                <RoundBtnContainer>
                    <RoundBtn>미스터리북 신청하기</RoundBtn>
                </RoundBtnContainer>
                </Col3>
            </Recommend>
            <AccordionContainer>
            <Accordion/>
            </AccordionContainer>
           <MoreContent>
                <TopTitle>더 많은 책방의 이야기가 궁금하다면?</TopTitle>
                <RoundBtn>콘텐츠 보러가기</RoundBtn>
           </MoreContent>
        </CenterContainer>
        <Footer></Footer>
    </Background>
    </>
  )
}

export default Content
const Background=styled(Container)`
    background-image: url('../img/background/background_content.jpg');
    background-attachment: local;
    background-size: 100% 4665px;
`
const TopTitle=styled(Flex)`
   
    font-weight: 700;
    font-size: 36px;
    justify-content: center;
`
const ContentWrapper=styled(ColContainer)`
    margin: 0px 6% 107px 6%;
`
const ContentContainer=styled(RowContainer)`
    margin-top: 107px;
    margin-bottom: 25px;
`
const Paragraph=styled(ColContainer)`
    width: 41%;
    height: 690px;
    margin-left: 10%;
`
const Paragraph2=styled.div`
    margin-left: 8%;
    margin-right: 10%;
    height: 558px;
    width: 42%;
`
const ParagraphTiTle=styled.div`
    font-size: 55px;
    font-weight: 700;
    margin-bottom: 50px;
`
const ParagraphContent=styled.div`
    font-size: 20px;
    line-height: 37px;
    letter-spacing: -0.6px;
    color: #222222;
`
const ImgContainer=styled.div`
    margin-top: 123px;
    border: solid black 1px;
    height: 560px;
    margin-bottom: 180px;
`
const ImgHeader=styled(RowContainer)`
    justify-content: space-between;
    align-content: center;
    padding: 0 14px 0 14px;
    height: 65px;
`
const ImgWrapper=styled(RowContainer)`
    gap:0 14px;
    height: 495px;
`
const Recommend=styled(RowContainer)`
    padding: 20px 20px 0px 20px;
    height: 585px;
`
const Col1=styled(ColContainer)`
    width: 15%;
    margin-right: 20%;
    height: 100px;
    margin-top: 80px;
    margin-bottom:400px;
`
const Col2=styled(ColContainer)`
    width:15%;
`
const Col3=styled(ColContainer)`
    width:45%;
    height: 450px;
`
const Review=styled(ColContainer)`
    margin: 44px 0 44px 5%;
    padding-left: 5%;
`
const RoundBtnContainer=styled(Flex)`
    padding-right: 15%;
    margin-top: 66px;
    justify-content: flex-end;
`
const AccordionContainer=styled.div`
    margin-top: 254px;
`
const MoreContent=styled(ColContainer)`
    margin: 150px 0 150px 0;
    align-items: center;
    gap: 40px;
`