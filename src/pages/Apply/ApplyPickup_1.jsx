import React from 'react'
import { ColContainer, RowContainer,Container, ApplyContentContainer } from '../../components/Container'
import styled from "styled-components";
import { Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import InputWrapper  from '../../components/apply/Input';
import {Background} from '../../components/apply/Background';
import { useState } from 'react';
import { ClassNames } from '@emotion/react';

var dataLists=["#술이 있는", "#독립출판", "#전시", "#여행서점", "#동화서점", "#좌석"];


const ApplyPickup_1 = () => {
    const[click, setClick]=useState(Array(dataLists.length).fill(false));
    const handleClick=(id)=>{
        setClick(click.map((element, index)=>{
            return index===id ? !element : element;
        }))
    }
  return (
      <Background>
        <ApplyContainer>
        <ColContainer>
            <TitleWrapper>
                <Num>01</Num>
                <Title>픽업 일자</Title>
            </TitleWrapper>
            <ApplyContentContainer>
                <Subtitle>원하는 픽업일자를 입력하세요</Subtitle>
                <InputWrapper  placeholder="yyyy.mm.dd"/>
            </ApplyContentContainer>
            <TitleWrapper>
                <Num>02</Num>
                <Title>픽업장소</Title>
            </TitleWrapper>
            <ApplyContentContainer>
                <Subtitle>픽업할 장소 혹은 책방의 이름을 입력하세요</Subtitle>
                <InputWrapper  placeholder="서울특별시 송파구"/>
            </ApplyContentContainer>
          
            <TitleWrapper>
                <Num>03</Num>
            <Title>책방 유형</Title>
            </TitleWrapper>
            <ApplyContentContainer>
                <Subtitle>선택한 키워드에 맞는 책방을 추천해드립니다.</Subtitle>
                <Chips>
                    {dataLists.map((value, index) => (        
                            <Chip 
                            className={`${
                                click[index] ? 'blue' : 'red'
                            }`}
                            style={ 
                                click[index] ? {backgroundColor:'#FFFA88'} : {}
                            }
                            key={index}
                            label={value}  
                            size="medium" 
                            //style= {{backgroundColor:'red'}}
                            onClick={()=>{
                                handleClick(index)
                            }
                            } ></Chip>
                    ))}
                </Chips>
            </ApplyContentContainer>
        </ColContainer>
        <Col2>
        <Link to="/apply2">
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
    margin-bottom: 20px;
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
