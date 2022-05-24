import React, {useEffect, useParams, useState} from 'react'
import Header from '../../components/Header';
import styled from "styled-components";
import { CenterContainer , Container} from '../../components/Container';
import { RowContainer } from '../../components/Container';
import { Box } from '../../components/apply/Boxs';
import BookstoreCard from './BookstoreCard';
import Event from './Event';
import { Link } from 'react-router-dom';
import axios from 'axios';
const ContentsList = () => {
  const [week, setWeek]=useState([]);
  const [other, setOther]=useState([]);
  useEffect(()=>{
    //이주의 동네를 송파로 가정
    axios.get('/api/board?include=SONGPA&size=6')
    .then((res)=>{
      console.log(res.data.data);
      setWeek(res.data.data);
    })
    axios.get('/api/board?exclude=SONGPA&size=6')
    .then((res)=>{
      console.log(res.data);
      setOther(res.data.data);
    })
  }, [])
  return (
    <Background>
        <Header/>
        <HeaderTitle>
          <div style={{fontFamily: "NIXGONFONTS", width: '333px', height: '52px', fontSize: '65px', marginBottom: '40px'}}>
            동네 컬렉션
          </div>
          <div style={{fontFamily: "NIXGONFONTS", fontSize: '35px'}}>
            동네 책방의 이야기에 끌리다
          </div>
        </HeaderTitle>

        <CenterContainer>
            <Blocks>
              <TitleBox style={{background:"#FFFFFF", alignItems:'center'}}>이주의 동네</TitleBox>
              <TitleBox style={{background:"#FFFA88", alignItems:'center'}}>파동이 닿는 곳, 송파</TitleBox>
            </Blocks>
            <Collection>
           {week.map((week)=>(
             <BookstoreCard dum={week}/>
           ))}
            </Collection>
            <Link to="/allCollection/2">
            <MoreContents>+전체 콘텐츠보기</MoreContents> 
            </Link>
           
            <Blocks>
              <TitleBox style={{background:"#FFFFFF"}}>다른 동네 컬렉션</TitleBox>
            </Blocks>
            <Collection>
           {other.map((other)=>(
             <BookstoreCard dum={other}/>
           ))}
            </Collection>
            <Link to='/allCollection/1'>
            <MoreContents>+전체 콘텐츠보기</MoreContents> 
            </Link>
           
            <Blocks>

            <TitleBox style={{background:"#FFFFFF"}}>이번주 책방 이벤트</TitleBox>
            </Blocks>
            <Event></Event>
        </CenterContainer>
    </Background>
  )
}

export default ContentsList
const Background=styled(Container)`
background-image: url('../img/background/background_list.jpg');
background-attachment: local;
background-size: 100% 6544px;
`
const HeaderTitle=styled.div`
  height: 144px;
  margin: 144px 0 113px 10%;
  font-style: normal;
  font-weight: 400;
  line-height: 52px;
`
const Blocks=styled(RowContainer)`
  margin-left:2%;
  margin-top: 168px;
  gap:10px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  align-items: center;
  text-align: center;
`
const TitleBox=styled(Box)`
  padding: 14px 4% 14px 4%;
  border: 1px solid #616161;
`
const Collection=styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap:107px 5%;
  margin:107px 9%;
`
const MoreContents=styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #9E9E9E;
  display:flex;
  justify-content: center;
`