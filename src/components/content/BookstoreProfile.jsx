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
                <RowContainer  style={{gap:"5%", marginBottom:"25px"}}>
                    <Icon src='../img/icons/location.png'></Icon>
                    <InfoText>주소</InfoText>
                </RowContainer>
                <RowContainer  style={{gap:"5%", marginBottom:"25px"}}>
                    <Icon src='../img/icons/call.png'></Icon>
                    <InfoText></InfoText>
                </RowContainer>
                <RowContainer  style={{gap:"5%", marginBottom:"25px"}}>
                    <Icon src='../img/icons/link.png'></Icon>
                    <InfoText>인스타 링크</InfoText>
                </RowContainer>
                <RowContainer  style={{gap:"5%", marginBottom:"25px", alignItems:"start"}}>
                    <Icon src='../img/icons/time.png'></Icon>
                    <ColContainer>
                    <InfoText><div>월</div> </InfoText>  
                    <InfoText><div>화</div> </InfoText>
                    <InfoText><div>수</div>  </InfoText>
                    <InfoText><div>목</div>  </InfoText>
                    <InfoText><div>금</div> </InfoText>
                    <InfoText><div>토</div> </InfoText>
                    <InfoText><div>일</div>  </InfoText> 
                    </ColContainer>
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
            <Map>
            <Location/>
            </Map>
           
            
              
            </Box>
        </Col2>
    </ProfileContainer>
  )
}

export default BookstoreProfile
const ProfileContainer=styled(RowContainer)`
    margin: 70px 10% 100px 10%;
    min-height: 375px;
`
const Col1=styled(ColContainer)`
    width: 50%;
    height: 100%;
`
const Icon=styled.img`
    height: 25px;
    display: flex;
`
const InfoText=styled.div`
    font-weight: 400;
font-size: 16px;
color: #616161;
`
const InfoContainer=styled(ColContainer)`   
    height: 100%;
   align-content: flex-start;
`
const Col2=styled.div`

width: 50%;
`
const Btn=styled(RoundBtn)`
`
const Box=styled.div`
    width:100%;
    height:430px;
    border: 1px solid #616161;
position: relative;
z-index: 0;
`
const Map=styled.div`
    z-index: 1;
    width:100%;
    height:430px;
    position: absolute;
    top: 20px;
    right: 5%;
`

