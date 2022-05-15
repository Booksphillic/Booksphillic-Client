import React from 'react'
import styled from "styled-components";
import { ApplyContentContainer, Container, RowContainer } from '../../components/Container';
import { LongUnderlineBox } from '../../components/apply/Boxs';
import { Chip } from '@mui/material';
import { RoundBtn } from '../../components/Buttons';
import Flex from '../../components/Flex';
import {Background} from '../../components/apply/Background';
var dataLists=["#술이 있는", "#독립출판", "#전시", "#여행서점", "#동화서점", "#좌석"];
const ApplyPickup_5 = () => {
    return (
        <Background>
            <ApplyContainer>
                <Title>미스터리북 신청이 완료되었습니다.</Title>
              <Sub>
                  픽업 책방
              </Sub>
              <LongUnderlineBox style={{marginBottom:"34px"}}>무엇보다 책방</LongUnderlineBox>
              <Sub>
                  픽업 일자
              </Sub>
              <LongUnderlineBox  style={{marginBottom:"34px"}}>2022-05-09</LongUnderlineBox>
              <Sub>
                  도서 유형
              </Sub>
              <LongUnderlineBox  style={{marginBottom:"34px"}}>
                <Chips>
                {dataLists.map((list) => (
                        <Chip label={list} size="medium" style={{backgroundColor:'#FFFA88'}}  ></Chip>
                ))}
                </Chips>
               
              </LongUnderlineBox>
              <Sub>
                  추가 요청 사항
              </Sub>
              <LongUnderlineBox style={{marginBottom:"34px"}} >동네서점 특별 에디션이면 좋겠어요</LongUnderlineBox>
              <BtnContainer>
              <RoundBtn>확인</RoundBtn>
              </BtnContainer>
              </ApplyContainer>
        </Background>
     
    )
}
  
export default ApplyPickup_5

const ApplyContainer=styled(ApplyContentContainer)`
    margin: 112px 0px 0px 82px;
`
const Sub=styled.div`
    font-weight: 500;
    font-size: 20px;
`

const Title=styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 52px;
    margin-bottom: 68px;
`
const Chips=styled(RowContainer)`
    gap: 17px 12px;
    display: grid;
    grid-template-columns: repeat(6, minmax(10%, auto));

`
const BtnContainer=styled(Flex)`
    justify-content: end;
    margin-bottom: 100px;
`
