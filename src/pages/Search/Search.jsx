import React from 'react'
import styled from 'styled-components'
import { CenterContainer, ColContainer, RowContainer } from '../../components/Container'
import Header from '../../components/Header'
import Input from './Input'
import { Chip } from '@mui/material'
import Footer from '../../components/Footer'
const dummy=["#송파","#아담한","#조용한","#편안한","#독립출판","#전시","#좌석","#독서모임","#반려동물"]
const Weekly=[
  {title:"동네책방 주책"},
  {title:"무엇보다 책방"}
]
const Monthly=[
  {title:"월간 베스트1"},
  {title:"월간 배스트2"}
]
const Search = () => {
  return (
    <Background>
        <Header/>
        <SearchContainer>
          <Input/>
          <Chips>
          {dummy.map((dum) => (
                        <Chip label={dum} size="medium" variant="outlined" ></Chip>
              ))}
          </Chips>
        </SearchContainer>
        <Best>
            {Weekly.map((e)=>(
              <ColContainer>
              <img src='../img/bookstore1.png' style={{height:"204px", width:"273px"}}></img>
              <Title>{e.title}</Title>              
              </ColContainer>

            ))}
            {Monthly.map((e)=>(
              <ColContainer>
              <img src='../img/bookstore1.png' style={{height:"204px", width:"273px"}}></img>
              <Title>{e.title}</Title>              
              </ColContainer>

            ))}
        </Best>
        <Footer/>
    </Background>
  )
}

export default Search
const Background=styled.div`
  background-image: url('../img/background/background_search.jpg');
  background-attachment: local;
  //background-size: cover;//반응형 성공!
  background-size: 100% 1725px;
`
const SearchContainer=styled(CenterContainer)`
    margin: 150px 15%;
`
const Chips=styled(RowContainer)`
  gap: 17px 12px;
  margin: 100px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`
const Best=styled(RowContainer)`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2%;
  margin: 220px 10%;
`
const Title=styled.div`
  font-weight: 500;
  font-size: 20px;
`