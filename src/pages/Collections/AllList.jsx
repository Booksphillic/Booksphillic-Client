import React,{useState} from 'react'
import styled from "styled-components";
import { CenterContainer, Container, RowContainer } from '../../components/Container';
import Header from '../../components/Header';
import BookstoreCard from './BookstoreCard';
import Footer from '../../components/Footer';
import Pagination from './Pagination';

const dummy=["1","1","1","1","1","1","1","1","1","1"];
const dummy2=["2","2","2","2","2","2","2","2","2","2"];

const AllList = () => {
    const [limit, setLimit]=useState(9);
    const [page, setPage]=useState(1);
    const offset=(page-1)*limit;
    const [category, setCategory]=useState("1");
    const handleClickRadioBtn=(e)=>{
        console.log(e.target.value);
        setCategory(e.target.value);
        setPage(1);
    }
  return (
    <Background>
        <Header/>
        <CenterContainer>
            <RadioBtnWrapper>
                <RadioBtn
                    id="radio1"
                    type="radio"
                    value="1"
                    checked={category==="1"}
                    onChange={handleClickRadioBtn}
                />
                <Label for="radio1">
                모든 동네 보기
                </Label>
                <RadioBtn
                    id="radio2"
                    type="radio"
                    value="2"
                    checked={category==="2"}
                    onChange={handleClickRadioBtn}
                />
                  <Label for="radio2">
                    이 주의 동네만 모아보기
                  </Label>
            </RadioBtnWrapper>
            
            {
                category==="1"                
                ?
                <Collection>
                {dummy.slice(offset, offset+limit).map((dum)=>(
                  <BookstoreCard title={dum}/>
                ))}
                 </Collection>
                :
                <>
                <Title>#파동이 닿는 곳, 송파</Title>
                <Collection>
                {dummy2.slice(offset, offset+limit).map((dum)=>(
                  <BookstoreCard title={dum}/>
                ))}
                 </Collection>
                 </>
            }
           <Pagination
              total={
                (category === "1" ? dummy.length: dummy2.length)
              }
              limit={limit}
              page={page}
              setPage={setPage}
           />
        </CenterContainer>
        <Footer/>
    </Background>
  )
}

export default AllList
const Background=styled(Container)`
background-image: url('../img/background/background_collection.jpg');
background-attachment: local;
background-size: 100% 4001px;
`
const RadioBtnWrapper=styled(RowContainer)`
   margin: 743px 0 47px 9%;
`
const RadioBtn=styled.input`
      width: 20px;
      height:20px;
      border: 1px solid #BDBDBD;
      border-radius: 100%;
      &:checked+Label{
         color:black;
      }
      &:checked{
        background-color: #FFFA88;
        border: none;
      }
`
const Label=styled.label`
   font-size:20px;
   color:#BDBDBD;
   margin-left: 1%;
   margin-right: 5%;
`
const Collection=styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap:107px 5%;
  margin:30px 9%;
`
const Title=styled.div`
font-weight: 700;
font-size: 30px;
margin-left: 9%;
margin-bottom: 20px;
color: #BDBDBD;

`