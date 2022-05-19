import { BottomNavigation } from '@mui/material';
import React from 'react'
import styled from "styled-components";
import { ColContainer, RowContainer } from '../../components/Container';
import { Link } from 'react-router-dom';
const BookstoreCard = ({title, id}) => {
  return (
    <Link to={`/content/${id}`} >
      <CardContainer>
        <Img src='../img/bookstore1.png'></Img>
        <Title>{title}</Title>
        <Title>:무엇보다 책방</Title>
        <Content>잠실 송리단길에는 작은 서점이 있다. 이런 곳에 책방이 있나? 라고 생각이 들었던 이곳. 엘리베이터가 없는 건물의  3층으로 올라오면 무엇보다…</Content>
        <hr/>
        <BottomWrapper>
        <Bottom>파동이 닿는 곳, 송파</Bottom>
        <Bottom>ㅣ</Bottom>
        <Bottom>Bookstore</Bottom>
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
  width:100%;
  height: 50%;
  margin-bottom: 25px;
`
const Title=styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  color: #222222;
`
const Content=styled.div`
  margin-top:10px;
  margin-bottom: 23px;
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