import React from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../components/Container'
import Header from '../../components/Header'
import Input from './Input'
import { useParams } from 'react-router-dom'
import BookstoreCard from '../Collections/BookstoreCard'
import Footer from '../../components/Footer'
const SearchContent = () => {
    const dummy=["1","1","1","1"];
    const dummy2=["2","2","2","2"];
    let {value}=useParams();
    console.log(value)
  return (
    <>
        <Header/>
        <Top>
            <div style={{width:"70%"}}>
            <Input value={value}/>
            </div>
        </Top>
        <SearchContainer>
            <ResultContainer>
                <RowContainer>
                    <Info>'{value}'</Info>
                    <Info2>검색결과</Info2>
                </RowContainer>
                <RowContainer style={{marginTop:"108px"}}>
                <Title>동네 컬렉션</Title>
                <Num>{dummy.length}개</Num>
                </RowContainer>
               
               <Collections>
               {dummy.map((dum)=>(
                  <BookstoreCard title={dum}/>
                ))}
               </Collections>
               <hr style={{margin: "107px 0"}}/>
               <RowContainer>
               <Title>책방 프로필</Title>
                <Num>{dummy2.length}개</Num>
               </RowContainer>
               <Collections>
               {dummy2.map((dum)=>(
                  <BookstoreCard title={dum}/>
                ))}
               </Collections>
            </ResultContainer>
        </SearchContainer>
        <Footer/>
    </>
  )
}

export default SearchContent
const Background=styled.div`
`
const Top=styled.div`
    background: #FFFA88;
    height: 368px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const SearchContainer=styled(ColContainer)`
     margin: 150px 10%;
`
const ResultContainer=styled(ColContainer)`
`
const Info=styled.div`
    font-weight: 700;
    font-size: 36px;
`
const Info2=styled(Info)`
    color: #9E9E9E;
    margin-left: 1%;
`
const Collections=styled(RowContainer)`
    display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap:107px 5%;
  margin:17px 0 0 0;
`
const Title=styled.div`
    font-weight: 700;
    font-size: 30px;
`
const Num=styled.div`
    margin-left: 1%;
    font-weight: 500;
    font-size: 20px;
    color: #616161;
`