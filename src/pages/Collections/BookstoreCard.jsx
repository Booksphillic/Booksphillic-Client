import { BottomNavigation } from '@mui/material';
import React from 'react'
import styled from "styled-components";
import { ColContainer, RowContainer } from '../../components/Container';
import { Link } from 'react-router-dom';
const BookstoreCard = ({dum}) => {
  const title=dum.title.split(":");
  return (
    <Link to={`/content/${dum.postId}`} >
      <CardContainer>
        <Img src={dum.storeImgUrl}></Img>
        <Title className={title[0].length<14 ? "" : "long"}>{title[0]}</Title>
        <Title>:{title[1]}</Title>
        <Content>{ dum.content.length <80
        ?dum.content
        :dum.content.slice(0, 80)+"..."
      }</Content>
        <hr/>
        <BottomWrapper>
        <Bottom>파동이 닿는 곳, 송파</Bottom>
        <Bottom>ㅣ</Bottom>
        <Bottom>{dum.category}</Bottom>
        </BottomWrapper>
      </CardContainer>    
    </Link>

  )
}

export default BookstoreCard
const CardContainer=styled(ColContainer)`
  
  height: 524px;
`
const Img=styled.img`
  max-width: 348px;
  height: 261px;
  object-fit: cover;
  margin-bottom: 25px;
`
const Title=styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  color: #222222;
  &.long{
    font-size: 25px;
  }
`
const Content=styled.div`
  margin-top:10px;
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #9E9E9E;
`
const BottomWrapper=styled(RowContainer) `
`
const Bottom=styled.div`
  font-size: 16px;
  color: #616161;
`