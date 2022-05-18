import React from 'react'
import styled from "styled-components";
import { ColContainer, RowContainer } from '../../components/Container'
import { RoundBtn } from '../../components/Buttons'
const Event = () => {
  return (
    <EventContainer>
        <EventWrapper>
            <Col1>
                <Img src='../img/content/sample_book.png'></Img>
                <BtnContainer>
                    <RoundBtn>책방 프로필 보러가기</RoundBtn>
                </BtnContainer>
                
            </Col1>
            <Col2>
            <ContentContainer>
            <Title>책방 창업 워크숍 &lt;나는 왜 책방인가&gt;</Title>
                <Content>꾸준히 책방 창업과 운영과 관련한 클래스, 세미나를 선보이는 책방 연희가 꾸준히 선보였던 책방창업 클래스를 단독으로 보다 심도있게 
                &lt;나는 왜 책방인가&gt;를 준비했습니다.독립책방 창업을 준비하거나, 이제 시작했거나, 운영하고 있지만 잘 모르는 분들, 새로운 콘텐츠 창작과 책방을 함께 하고픈 분들 신청해주세요.</Content>
            </ContentContainer>
               
                <Info>
                    <RowContainer style={{marginBottom:"15px"}}>
                        <div style={{background: "#E0EBF5", height:"29px", padding:"2px 10px", marginRight:"1%"}}>일시</div>
                        <div style={{fontSize: "16px", color: "#222222"}}>내용</div>
                    </RowContainer>
                    <RowContainer style={{marginBottom:"15px"}}>
                        <div style={{background: "#E0EBF5", height:"29px", padding:"2px 10px", marginRight:"1%"}}>일시</div>
                        <div style={{fontSize: "16px", color: "#222222"}}>내용</div>
                    </RowContainer>
                    <RowContainer style={{marginBottom:"15px"}}>
                        <div style={{background: "#E0EBF5", height:"29px", padding:"2px 10px", marginRight:"1%"}}>일시</div>
                        <div style={{fontSize: "16px", color: "#222222"}}>내용</div>
                    </RowContainer>
                    <RowContainer style={{marginBottom:"15px"}}>
                        <div style={{background: "#E0EBF5", height:"29px", padding:"2px 10px", marginRight:"1%"}}>일시</div>
                        <div style={{fontSize: "16px", color: "#222222"}}>내용</div>
                    </RowContainer>
                    <RowContainer style={{marginBottom:"15px"}}>
                        <div style={{background: "#E0EBF5", height:"29px", padding:"2px 10px", marginRight:"1%"}}>일시</div>
                        <div style={{fontSize: "16px", color: "#222222"}}>내용</div>
                    </RowContainer>
                </Info>
                
            </Col2>
        </EventWrapper>
        <EventWrapper>
            <Col1>
                <Img src='../img/content/sample_book.png'></Img>
                <BtnContainer>
                    <RoundBtn>책방 프로필 보러가기</RoundBtn>
                </BtnContainer>
                
            </Col1>
            <Col2>
            <ContentContainer>
            <Title>책방 창업 워크숍 &lt;나는 왜 책방인가&gt;</Title>
                <Content>꾸준히 책방 창업과 운영과 관련한 클래스, 세미나를 선보이는 책방 연희가 꾸준히 선보였던 책방창업 클래스를 단독으로 보다 심도있게 
                &lt;나는 왜 책방인가&gt;를 준비했습니다.독립책방 창업을 준비하거나, 이제 시작했거나, 운영하고 있지만 잘 모르는 분들, 새로운 콘텐츠 창작과 책방을 함께 하고픈 분들 신청해주세요.</Content>
            </ContentContainer>
               
                <Info>
                    <RowContainer style={{marginBottom:"15px"}}>
                        <div style={{background: "#E0EBF5", height:"29px", padding:"2px 10px", marginRight:"1%"}}>일시</div>
                        <div style={{fontSize: "16px", color: "#222222"}}>내용</div>
                    </RowContainer>
                    <RowContainer style={{marginBottom:"15px"}}>
                        <div style={{background: "#E0EBF5", height:"29px", padding:"2px 10px", marginRight:"1%"}}>일시</div>
                        <div style={{fontSize: "16px", color: "#222222"}}>내용</div>
                    </RowContainer>
                    <RowContainer style={{marginBottom:"15px"}}>
                        <div style={{background: "#E0EBF5", height:"29px", padding:"2px 10px", marginRight:"1%"}}>일시</div>
                        <div style={{fontSize: "16px", color: "#222222"}}>내용</div>
                    </RowContainer>
                    <RowContainer style={{marginBottom:"15px"}}>
                        <div style={{background: "#E0EBF5", height:"29px", padding:"2px 10px", marginRight:"1%"}}>일시</div>
                        <div style={{fontSize: "16px", color: "#222222"}}>내용</div>
                    </RowContainer>
                    <RowContainer style={{marginBottom:"15px"}}>
                        <div style={{background: "#E0EBF5", height:"29px", padding:"2px 10px", marginRight:"1%"}}>일시</div>
                        <div style={{fontSize: "16px", color: "#222222"}}>내용</div>
                    </RowContainer>
                </Info>
                
            </Col2>
        </EventWrapper>
    </EventContainer>
  )
  }
export default Event
const EventContainer=styled(ColContainer)`
   margin-left:0.1%;
   margin-top: 121px;
`
const EventWrapper=styled(RowContainer)`
   height: 614px;
`
const Col1=styled(ColContainer)`
    width:31.3%;
`
const Img=styled.img`
    height: 416px;
`
const BtnContainer=styled.div`
    height: 198px;
    padding: 70px 0 61px 0;
    display: flex;
    justify-content: center;
`
const Col2=styled(ColContainer)`
    width: 70%;
`
const Title=styled.div`
font-weight: 700;
font-size: 30px;
color: #222222;
margin-bottom: 20px;
`
const Content=styled.div`
font-weight: 400;
font-size: 16px;
line-height: 25px;
color: #9E9E9E;
`
const ContentContainer=styled(ColContainer)`
    padding: 61px 35% 61px 5%;
`
const Info=styled(ColContainer)`
    height: 327px;
    padding-top:63px;
    padding-left: 5%;
`