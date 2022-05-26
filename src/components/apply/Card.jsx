import React, {useState} from 'react'
import { ColContainer, RowContainer } from '../Container'
import styled from 'styled-components'

const Card = ({data}) => {

  return (
    <CardContainer>
        <Col1>
          <Img src={data.profileImgUrl}></Img>
          <Content>
          <Title>{data.name}</Title>
          <Tags>
              태그 목록 (아직 추가 안함)
              {/*{data.tagList.map(t => {*/}
              {/*    return <span>{t}</span>;*/}
              {/*})}*/}
          </Tags>
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
                    <InfoText><div>월</div></InfoText>
                    <InfoText><div>화</div></InfoText>
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

