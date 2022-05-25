import React, {useState} from 'react'
import { ColContainer, RowContainer } from '../Container'
import styled from 'styled-components'

const Card = ({title}) => {
    const [click, setClick]=useState(false);
    const handleClick=()=>{
      setClick(!click);
    }
  return (
    <ColContainer onClick={handleClick}>
    <CardContainer>
        <Col1>
          <Img src='../img/bookstore1.png'></Img>
          <Content>
          <Title>무엇보다 책방</Title>
          <Tags>#무엇보다 책방 #파동이 닿는 곳, 송파 #송리단길 #아담한 #조용한 #편안한 #독립출판 #전시 #좌석</Tags>
          </Content>
        </Col1>
        <Col2>
                <RowContainer style={{gap:"5%", marginBottom:"25px"}}>
                    <Icon src='../img/icons/location.png'></Icon>
                    <InfoText>주소</InfoText>
                </RowContainer>
                <RowContainer style={{gap:"5%" , marginBottom:"25px"}}>
                    <Icon src='../img/icons/call.png'></Icon>
                    <InfoText>연락처</InfoText>
                </RowContainer>
                <RowContainer style={{gap:"5%" , marginBottom:"25px"}}>
                    <Icon src='../img/icons/link.png'></Icon>
                    <InfoText>인스타 링크</InfoText>
                </RowContainer>
                <RowContainer style={{gap:"5%" , marginBottom:"25px",alignItems:"flex-start"}}>
                    <Icon src='../img/icons/time.png'></Icon>
                    {  
                    <ColContainer>
                    <InfoText><div>월</div> {} </InfoText>  
                    <InfoText><div>화</div> {} </InfoText>
                    <InfoText><div>수</div> </InfoText>
                    <InfoText><div>목</div>  </InfoText>
                    <InfoText><div>금</div>  </InfoText>
                    <InfoText><div>토</div>  </InfoText>
                    <InfoText><div>일</div>  </InfoText> 
                    </ColContainer>
                    }
                </RowContainer>
        </Col2>
    </CardContainer>
    <div style={{display:"flex", justifyContent:"center", marginTop:"10px"}}>
    <Check src={click ? '../img/icons/yellowCheck.png':'../img/icons/check.png'}></Check>
    </div>

    </ColContainer>
  )
}

export default Card
const CardContainer=styled(RowContainer) `
  height:430px;
  //max-width: 459px;
  width: 100%;
  border: 1px solid #616161;
`
const Img=styled.img`
    height: 50%;
`
const Content=styled(ColContainer)`
  padding: 44px 5% 27px 5%;
`
const Title=styled.div`
font-weight: 500;
font-size: 20px;
margin-bottom: 5px;
`
const Tags=styled.div`
  white-space: pre-line;
  width:100%;
`

const Col1=styled(ColContainer)`
  width:50%;
  height:100%;
  border-right: 1px solid #616161;
`
const Col2=styled(ColContainer)`
  width:50%;
  padding: 27px 5%;
`
const Icon=styled.img`
    height: 20px;
    display: flex;
`
const InfoText=styled(RowContainer)`
    font-weight: 400;
font-size: 14px;
color: #9E9E9E;

`
const Check=styled.img`
  max-width:40px;
  height: 40px;
  
`