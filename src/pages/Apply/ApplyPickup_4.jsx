import React from 'react'
import { ColContainer, RowContainer,Container, ApplyContentContainer } from '../../components/Container'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import InputWrapper from '../../components/apply/Input';
import {Box, LongBox} from '../../components/apply/Boxs';
import {Background} from '../../components/apply/Background';
var dataLists=["#술이 있는", "#독립출판", "#전시", "#여행서점", "#동화서점", "#좌석"];
const ApplyPickup_4 = () => {
  return (
      <Background>
        <ApplyContainer>
        <Col1>
            <TitleWrapper>
                <Num>07</Num>
                <Title>결제정보</Title>
            </TitleWrapper>
            <ApplyContentContainer>
            <Subtitle>서비스 이용료로 2000원이 발생합니다.</Subtitle>
            <Sub>
                결제 금액
            </Sub>
            <CostBox>
                <div style={{color: '#BDBDBD', fontSize:'16px'}}>총 결제 금액</div>
                <div style={{color: '#000000', fontSize:'30px', fontWeight:'700'}}>2000원</div>
            </CostBox>
            
            <Sub>
                결제 수단
            </Sub>
            <Grid>
                <Box><img src='../img/apply/kakaopay.png'/></Box>
                <Box><img src='../img/apply/naverpay.png'/></Box>
                <Box><img src='../img/apply/payco.png'/></Box>
                <Box><img src='../img/apply/phone.png'/></Box>
            </Grid>
            <LongBox style={{marginTop:"5px"}}><img src='../img/apply/cardpay.png'/></LongBox>
            <br/>
            <hr></hr>
            <Sub>안내 사항</Sub>
            <Notice>※구매 도서에 대한 잔여 금액은 책방에서 직접 결제하셔야 합니다.<br/>
                ※신청이 확인된 후에는 취소 및 환불이 불가합니다.</Notice>
            </ApplyContentContainer>
            
        </Col1>
        <Col2>
        <Link to="/apply5">
        <img src='../img/arrow2.png' style={{position:'absolute', bottom: '0px', right:'0px'}}></img>
        </Link>
            
        </Col2>
       </ApplyContainer>
      </Background>
   
  )
}

export default ApplyPickup_4

const ApplyContainer=styled(RowContainer)`
    margin-top: 29px;
    padding: 82px 40px 82px 99px;
    display: grid;
    grid-template-columns: 3fr 2fr;
`
const Col1=styled(ColContainer)`

`
const CostBox=styled(LongBox)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 1% 0px 1%;
`
const Sub=styled.div`
    font-weight: 500;
    font-size: 20px;
    margin: 30px 0px 10px 0px;
`
const TitleWrapper=styled(RowContainer)`
    gap: 0px 20px;
    margin-top: 77px;
`
const Title=styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 52px;
`
const Num=styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 35px;
`
const Subtitle=styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 35px;
    color: #616161;
   
`
const Grid=styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(45%, auto));
    gap: 5px 5px;
    
`
const Col2=styled.div`
    position: relative;
    height: 100%;
`
const Notice=styled.div`
    font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
color: #9E9E9E;
`
