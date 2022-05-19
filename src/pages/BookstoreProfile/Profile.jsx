import React,{useState} from 'react'
import styled from "styled-components";
import { CenterContainer, ColContainer, Container,RowContainer } from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Category } from '@mui/icons-material';
import DropDown from '../../components/DropDown';
import Card from './Card';
import Pagination from '../../components/Pagination';
const dummy=["1","1","1","1","1","1","1","1","1","1"];

const Profile = () => {
  const [limit, setLimit]=useState(9);
  const [page, setPage]=useState(1);
  const offset=(page-1)*limit;
  return (
    <Background>
      <Header/>
      <CenterContainer>
        <Weekly>
          <WeeklyTitle>
            <Title>
              <Sub>차, 책, 전시가 만나다</Sub>
              <div>송파, 하우스북스</div>
            </Title>
            <Title>
              <Sub>차, 책, 전시가 만나다</Sub>
              <div>송파, 하우스북스</div>
            </Title>
            <Title>
              <Sub>차, 책, 전시가 만나다</Sub>
              <div>송파, 하우스북스</div>
            </Title>
          </WeeklyTitle>
          <WeeklyImg src='../img/profile/sample.png'></WeeklyImg>
        </Weekly>
        <Content>
        <DropDown/>
        <Collection>
          {dummy.slice(offset, offset+limit).map((dum)=>(
            <Card title={dum}/>
          ))}
        </Collection>
        <Pagination
              total={dummy.length}
              limit={limit}
              page={page}
              setPage={setPage}
           />
        </Content>
      </CenterContainer>
      <Footer/>
    </Background>
  )
}

export default Profile
const Background=styled(Container)`
background-image: url('../img/background/background_profile.jpg');
background-attachment: local;
background-size: 100% 3803px;
`
const Weekly=styled(RowContainer)`
  margin-top: 570px;
  margin-bottom: 205px;
`
const WeeklyTitle=styled(ColContainer)`
  width:50%;
  gap:60px;
  height:660px;
  padding: 40px 0 0 5%;
`
const WeeklyImg=styled.img`
  width:50%;
  height: 660px;
`
const Title=styled.div`
font-weight: 700;
font-size: 30px;
`
const Content=styled(Container)`
  margin: 147px 7% 151px 7%;
`
const Sub=styled.div`
  font-weight: 500;
font-size: 20px;
color: #616161;
`
const Collection=styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap:107px 5%;
  margin-top:42px;
`