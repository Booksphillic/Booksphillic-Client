import React from 'react'
import { ColContainer, RowContainer,Container, ApplyContentContainer } from '../../components/Container'
import styled from "styled-components";
import Chip from '@mui/material/Chip';
import Card from '../../components/apply/Card';
import Flex from '../../components/Flex';
import { Link } from 'react-router-dom';
import {Background} from '../../components/apply/Background';
var dataLists=["#송파", "#독립출판", "#전시"]
var products=["card1", "card2", "card3", "card4"];
const ApplyPickup_1 = () => {
  return (
      <Background>
        <ApplyContainer>
        <ColContainer>
            <TitleWrapper>
                <Num>04</Num>
                <Title>책방 선택</Title>
            </TitleWrapper>
            <ApplyContentContainer>
                <Subtitle>원하는 책방을 선택하세요</Subtitle>
                <Chips>
                    {dataLists.map((list) => (
                            <Chip label={list} size="medium" variant="outlined" ></Chip>
                    ))}
                </Chips>
                <SubText>
                    <div>10개의 추천 책방이 있습니다.</div>
                </SubText>
                <StoreContainer>
                <Stores>
                {products.map((data)=>{
                    return(
                        <Card title={data}></Card>
                )})}
                   
                </Stores>
                </StoreContainer>
               
            </ApplyContentContainer>
           
        </ColContainer>
        <Col2>
        <Link to="/apply3">
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
const SubText=styled(Flex)`
    margin-top: 30px;
    margin-bottom: 15px;
    justify-content: flex-end;
`
const Stores=styled.div`
    //display: grid;
    //grid-template-columns: 1fr 1fr 1fr;
    //grid-template-rows: 1fr 1fr 1fr;
    
    //grid-auto-flow: dense; /* [2] */
    //grid-template-columns: repeat(auto-fit, 30%); /* [1] */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    //width: 90%;
    min-width: 500px;
    border:1px dotted #FF00FF;
    //height: 500px;
    gap: 21px 21px;
   
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

const Chips=styled(RowContainer)`
    gap: 17px 12px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`
const Col2=styled.div`
    position: relative;
    height: 100%;
`
const StoreContainer=styled.div`
    width: 100%;
    height: 490px;
`