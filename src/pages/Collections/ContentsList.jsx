import React from 'react'
import Header from '../../components/Header';
import styled from "styled-components";
import { CenterContainer , Container} from '../../components/Container';
import { RowContainer } from '../../components/Container';
import { Box } from '../../components/apply/Boxs';
import BookstoreCard from './BookstoreCard';
import Event from './Event';
import { Link } from 'react-router-dom';
const collections=[
  {
    title:"제목0",
    id: 0
  },
  {
    title:"제목1",
    id: 1
  },
  {
    title:"제목2",
    id: 2
  },
  {
    title:"제목3",
    id: 3
  },
  {
    title:"제목4",
    id: 4
  },
  {
    title:"제목5",
    id: 5
  },
];

const ContentsList = () => {
  
  return (
    <Background>
        <Header/>
        <TitleImg src='../img/collection/collection_title.png'></TitleImg>
        <CenterContainer>
            <Blocks>
              <TitleBox style={{background:"#FFFFFF"}}>이주의 동네</TitleBox>
              <TitleBox style={{background:"#FFFA88"}}>파동이 닿는 곳, 송파</TitleBox>
            </Blocks>
            <Collection>
           {collections.map((collection)=>(
             <BookstoreCard title={collection.title} id={collection.id}/>
           ))}
            </Collection>
            <MoreContents>+전체 콘텐츠보기</MoreContents>
            
            <Blocks>
              <TitleBox style={{background:"#FFFFFF"}}>다른 동네 컬렉션</TitleBox>
            </Blocks>
            <Collection>
           {collections.map((collection)=>(
             <BookstoreCard title={collection.title} id={collection.id}/>
           ))}
            </Collection>
            <Link to='/allCollection'>
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
const TitleImg=styled.img`
  width: 20%;
  height: 144px;
  margin: 144px 0 113px 10%;
`
const Blocks=styled(RowContainer)`
  margin-left:2%;
  margin-top: 168px;
  gap:10px;
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