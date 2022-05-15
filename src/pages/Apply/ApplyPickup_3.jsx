import React from 'react'
import { ColContainer, RowContainer,Container, ApplyContentContainer } from '../../components/Container'
import styled from "styled-components";
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';
import { BlackBtn } from '../../components/Buttons';
import InputWrapper from '../../components/apply/Input';
import {Background} from '../../components/apply/Background';
var dataLists=["#술이 있는", "#독립출판", "#전시", "#여행서점", "#동화서점", "#좌석"];
const handleDelete=()=>{

}
const ApplyPickup_1 = () => {
  return (
      <Background>
        <ApplyContainer>
        <Col1>
            <TitleWrapper>
                <Num>05</Num>
                <Title>도서 유형</Title>
            </TitleWrapper>
            <ApplyContentContainer>
            <Subtitle style={{marginBottom:"20px"}}>책방 사장님이 취향에 맞는 도서를 선별합니다.</Subtitle>
            <RowContainer>
                <InputWrapper placeholder=""/>
                <BlackBtn style={{marginLeft:"10px"}}>추가하기</BlackBtn>
            </RowContainer>
            <Chips style={{margin:"10px 0px 10px 0px"}}>
                {dataLists.map((list) => (
                        <Chip label={list} size="medium" style={{backgroundColor:'#FFFA88'}} onDelete={handleDelete}></Chip>
                ))}
            </Chips>
            <hr></hr>
            <Subtitle>이런 태그는 어떠세요?</Subtitle>
            <Chips>
                {dataLists.map((list) => (
                        <Chip label={list} size="medium" variant="outlined" ></Chip>
                ))}
            </Chips>
            </ApplyContentContainer>
            <TitleWrapper>
                <Num>06</Num>
                <Title>요청사항</Title>
            </TitleWrapper>
            <ApplyContentContainer>
            <Input06 type="text" placeholder='추가적인 요청사항이 있다면 적어주세요' ></Input06>
            </ApplyContentContainer>
    
        </Col1>
        <Col2>
        <Link to="/apply4">
            <img src='../img/arrow2.png' style={{position:'absolute', bottom: '0px', right:'0px'}}></img>
        </Link>
            
        </Col2>
        </ApplyContainer>
      </Background>
   
  )
}

export default ApplyPickup_1

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
    margin-bottom: 10px;
`

const Chips=styled(RowContainer)`
    gap: 17px 12px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    
`
const Col2=styled.div`
    position: relative;
    height: 100%;
`
const Input06=styled.input`
    border-bottom: 1px solid #616161;
    margin-top: 20px;
    width: 360px;
`