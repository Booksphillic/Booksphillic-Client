import React,{useEffect, useState} from 'react'
import styled from "styled-components";
import { CenterContainer, ColContainer, Container,RowContainer } from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Category } from '@mui/icons-material';
import DropDown from '../../components/DropDown';
import Card from './Card';
import Pagination from '../../components/Pagination';
import Select from '../../components/Select'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Profile = () => {
  const [limit, setLimit]=useState(9);
  const [page, setPage]=useState(1);
  const [dummy, setDummy]=useState([]);
  const offset=(page-1)*limit;
  const [category, setCategory]=useState(1);
  useEffect(()=>{
    axios.get('api/bookstore/list')
    .then((res)=>{
      console.log(res.data.data)
      setDummy(res.data.data)
    })
  }, [useParams()])

  const handleChange=(e)=>{
    console.log(e.target.value);
    axios.get('api/bookstore/list', {params: {district:e.target.value}})
    .then(
      (res)=>{
        console.log(res.data.data)
        setDummy(res.data.data)
      }
    )
  }
  return (
    <Background>
      <Header/>
      <CenterContainer>
        <Weekly>
          <WeeklyTitle>
            <Title onClick={(e)=>{setCategory(1);}} className={category===1? "focused":""}>
              <Sub>차, 책, 전시가 만나다</Sub>
              <div>송파, 하우스북스</div>
            </Title>
            <Title onClick={(e)=>{setCategory(2);}} className={category===2? "focused":""}>
              <Sub>차, 책, 전시가 만나다</Sub>
              <div>송파, 하우스북스</div>
            </Title>
            <Title onClick={(e)=>{setCategory(3); console.log(category);}} className={category===3? "focused":""}>
              <Sub>차, 책, 전시가 만나다</Sub>
              <div>송파, 하우스북스</div>
            </Title>
          </WeeklyTitle>
          {
            category===1
            ?<WeeklyImg src='../img/profile/sample.png'></WeeklyImg>
            :(
              category===2
              ? <WeeklyImg src='../img/profile/sample2.png'></WeeklyImg>
              : <WeeklyImg src='../img/profile/sample3.png'></WeeklyImg>
            )
          }
          
        </Weekly>
        <Content>
        <DropDown handelChange={handleChange}/>
        
        <Collection>
          {dummy.slice(offset, offset+limit).map((dum)=>(
            <Card title={dum.name} id={dum.storeId} subtitle={dum.subtitle} img={dum.profileImgUrl}/>
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
  color: #BDBDBD;
&.focused{
  color:black;
  background-color: #FFFA88;
  width: 70%;
  margin-left: -15%;
  padding: 10px 0 10px 3%;
}
  
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