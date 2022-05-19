import React from 'react'
import styled from "styled-components";
import { CenterContainer, ColContainer, MyPageContainer, RowContainer } from '../../components/Container';
import Header from '../../components/Header';
import { useState } from 'react';
import Footer from '../../components/Footer';
import Apply from './Apply';
import EditProfile from './EditProfile';
import Scrap from './Scrap';
const UserMyPage = () => {
    const [tab, setTab]=useState(1);
    const handleContent=()=>{
        switch (tab) {
            case 1:
               return <Apply/>
             case 2:
                return <EditProfile/>
             case 3:
                return  <Scrap/>
            default:
                console.log("err");
        }
    }
  return (

    <Background>
        <Header/>
        <MyPageContainer>
            <Top>마이페이지</Top>
            <Profile>
                <img></img>
                <Title>안녕하세요 '이름' 님</Title>
                <Id>id</Id>
            </Profile>
            <hr style={{margin: "42px 5% 0 5%", color:"#BDBDBD"}}/>
            <Degree>
                <ColContainer>
                    <SubTitle>나의 필릭지수</SubTitle>
                    <Percent>80%</Percent>
                </ColContainer>
                <RowContainer style={{gap:"30px"}}>
                    <Col>
                        <SubTitle style={{height:"43px"}}>미스터리북 신청 </SubTitle>
                        <SubTitle>내가 쓴 리뷰 </SubTitle>
                    </Col>
                    <ColContainer>
                        <RowContainer>
                            <Num>3</Num>
                            <Id>건</Id>
                        </RowContainer>
                        <RowContainer>
                            <Num>3</Num>
                            <Id>건</Id>
                        </RowContainer>
                    </ColContainer>
                </RowContainer>   
            </Degree>
            <Animation>
                {/*일단 배경 이미지로 대체*/}
            </Animation>
            <ColContainer>
                <Menu>
                    <Tab onClick={(e)=>setTab(1)} className={tab===1? "focused":""}>미스터리북 신청</Tab>
                    <Tab onClick={(e)=>setTab(2)} className={tab===2? "focused":""}>프로필 설정</Tab>
                    <Tab onClick={(e)=>setTab(3)} className={tab===3? "focused":""}>스크랩</Tab>
                    <Tab onClick={(e)=>setTab(4)} className={tab===4? "focused":""}>문의</Tab>
                </Menu>
                <Content>
                  {handleContent()}
                </Content>
            </ColContainer>

        </MyPageContainer>
        <Footer/>
    </Background>
  )
}

export default UserMyPage
const Background=styled.div`
  background-image: url('../img/background/background_usermypage.jpg');
  background-attachment: local;
  //background-size: cover;//반응형 성공!
  background-size: 100% 1825px;
`
const Top=styled.div`
    font-weight: 700;
    font-size: 36px;
`
const Profile=styled(ColContainer)`
    display:flex;
    margin-top: 110px;
    align-items: center;
`
const Title=styled.div`
font-weight: 500;
font-size: 20px;
color: #222222;
`
const Id=styled.div`
font-weight: 400;
font-size: 16px;
color: #BDBDBD;

`
const Degree=styled(RowContainer)`
   margin: 30px 5% 0 5%;
   display: flex;
   justify-content: space-between;
`
const SubTitle=styled.div`
    font-weight: 400;
    font-size: 16px;
`
const Percent=styled(Top)`
    margin-top: 10px;
`
const Col=styled(ColContainer)`
    display: flex;
    align-items: flex-end;
    
`
const Num=styled.div`
    font-weight: 700;
    font-size: 30px;
    color: #FF784E;
   
`
const Animation=styled.div`
margin-top: 50px;
    height:115px;
    margin-bottom: 65px;
`
const Menu=styled(RowContainer)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`
const Tab=styled.button`
   font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #616161;
    
   &.focused{
    font-weight: 500;
    font-size: 18px;
    color: #222222;
    background-color: white;
    padding: 13px 0 12px 0;
   }
`
const Content=styled.div`
    height:490px;
    background-color: white;
    margin-bottom: 100px;
`
