import React from 'react'
import { ColContainer, RowContainer,Container } from '../components/Container'
import styled from "styled-components";
import Chip from '@mui/material/Chip';
var dataLists=["#술이 있는", "#독립출판", "#전시", "#여행서점", "#동화서점", "#좌석"];
const ApplyPickup_1 = () => {
  return (
      <Background>
        <ApplyContainer>
        <Col1>
            <TitleWrapper>
                <Num>05</Num>
                <Title>도서 유형</Title>
            </TitleWrapper>
            <Subtitle>책방 사장님이 취향에 맞는 도서를 선별합니다.</Subtitle>
        <Input type="text" placeholder='yyyy.mm.dd' ></Input>
            <TitleWrapper>
                <Num>02</Num>
                <Title>픽업장소</Title>
            </TitleWrapper>
            
            <Subtitle>픽업할 장소 혹은 책방의 이름을 입력하세요</Subtitle>
            <Input type="text" placeholder='서울특별시 송파구' ></Input>
            <TitleWrapper>
                <Num>03</Num>
            <Title>책방 유형</Title>
            </TitleWrapper>
            <Subtitle>선택한 키워드에 맞는 책방을 추천해드립니다.</Subtitle>
            <Chips>
                {dataLists.map((list) => (
                        <Chip label={list} size="medium" variant="outlined" ></Chip>
                ))}
            </Chips>
        </Col1>
        <Col2>
            <img src='../img/arrow2.png' style={{position:'absolute', bottom: '0px', right:'0px'}}></img>
        </Col2>
        </ApplyContainer>
      </Background>
   
  )
}

export default ApplyPickup_1
const Background=styled(Container)`
     background-image: url('../img/background/background_apply.png');
     background-attachment: local;
     background-size: 100% 1024px;
`
const ApplyContainer=styled(RowContainer)`
    margin-top: 29px;
    padding: 82px 40px 82px 99px;
    display: grid;
    grid-template-columns: 3fr 2fr;
`
const Col1=styled(ColContainer)`

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
    margin-left: 38px;
`
const Input=styled.input`
    margin-left: 38px;
    border: 1px solid #616161;
    margin-top: 20px;
    width: 360px;
`
const Chips=styled(RowContainer)`
    margin-left: 38px;
    gap: 17px 12px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`
const Col2=styled.div`
    position: relative;
    height: 100%;
`
