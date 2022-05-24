import React from 'react'
import styled from 'styled-components'
import { RoundBtn } from '../Buttons'
import { ColContainer, Container, RowContainer } from '../Container'
import Location from '../Location'
const BookstoreProfile = () => {
  return (
    <ProfileContainer>
        <Col1>
            <InfoContainer>
                <RowContainer>
                    <Icon src='../img/icons/location.png'></Icon>
                    <InfoText>주소</InfoText>
                </RowContainer>
                <RowContainer>
                    <Icon src='../img/icons/call.png'></Icon>
                    <InfoText></InfoText>
                </RowContainer>
                <RowContainer>
                    <Icon src='../img/icons/link.png'></Icon>
                    <InfoText>인스타 링크</InfoText>
                </RowContainer>
                <RowContainer>
                    <Icon src='../img/icons/time.png'></Icon>
                    <InfoText>운영시간</InfoText>
                </RowContainer>
                <RowContainer>
                    <Btn>책방 프로필 보러가기</Btn>
                    <ColContainer>
                        <img src='../img/scrap.png'></img>
                        <InfoText>스크랩</InfoText>
                    </ColContainer>
                </RowContainer>
            </InfoContainer>
        </Col1>
        <Col2>
            <Box>
               <Location/>
            </Box>
        </Col2>
    </ProfileContainer>
  )
}

export default BookstoreProfile
const ProfileContainer=styled(RowContainer)`
    padding: 114px 10%;
    display:grid;
    grid-template-columns: 1fr 1fr;
    
`
const Col1=styled(ColContainer)`
    
`
const Icon=styled.img`
    
`
const InfoText=styled.div`
    font-weight: 400;
font-size: 16px;
color: #616161;
`
const InfoContainer=styled(ColContainer)`
`
const Col2=styled.div`
`
const Btn=styled(RoundBtn)`
`
const Box=styled.div`
    height:100px;
    border: 1px solid black;
    position: relative;
`
