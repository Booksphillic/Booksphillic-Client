import { BottomNavigation } from '@mui/material';
import React from 'react'
import styled from "styled-components";
import { ColContainer, RowContainer } from '../../components/Container';
import { Link } from 'react-router-dom';
const Card = ({title, id,subtitle, img, scraped }) => {
  return (
    <Link to={`/profileContent/${id}`} >
    <CardContainer>
      <Img src={img}></Img>
      <ContentContainer>
        <Left>
            <Title>{title}</Title>
            <RowContainer>
                <Bottom>송파</Bottom>
                <Bottom>ㅣ</Bottom>
                <Bottom>{subtitle}</Bottom>
            </RowContainer>
        </Left>
        <Right>
            <ColContainer> 
            {
              scraped===true ? <img src='../img/scraped.png'></img> : <img src='../img/unscraped.png'></img>
            }
            <ScrapTitle>스크랩</ScrapTitle>
            </ColContainer>
        </Right>
      </ContentContainer>
      
    </CardContainer>
    </Link>
  )
} 

export default Card
const CardContainer=styled(ColContainer)`
  height: 366px;
`
const Img=styled.img`
  width:100%;
  height: 64%;
  margin-bottom: 25px;
`
const ContentContainer=styled(RowContainer)`
    
`
const Left=styled(ColContainer)`
    width:85%;
`
const Right=styled(ColContainer)`
    width:15%;
`
const Title=styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  color: #222222;
`
const Bottom=styled.div`
  font-size: 16px;
  color: #616161;
`
const ScrapTitle=styled.div`
    font-size: 14px;
color: #BDBDBD;
`