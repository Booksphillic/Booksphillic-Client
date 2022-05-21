import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from"styled-components"
import { ColContainer } from '../../components/Container'
const Input = ({value}) => {
  const [search, setSearch]=useState('');
  const onChangeSearch=(e)=>{
    e.preventDefault();
    setSearch(e.target.value);
  }
  const onKeyPress=(e)=>{
    if (e.key==='Enter'){
      window.location.href=`/searchContent/${search}`;
     // document.location.href('');
      console.log("enter")
    }
  }
  return (
      <ColContainer>
    <InputWrapper placeholder='어떤 책방을 찾고 계신가요?'
      onChange={onChangeSearch}
      onKeyPress={onKeyPress}
      value={value}
    >
    </InputWrapper>   
      <Img src='../../img/search_gray.png'></Img>
      </ColContainer>
   

  )

}

export default Input
const InputWrapper=styled.input`
    position: relative;
    height: 110px;
    background: #FFFFFF;
    border: 1px solid #616161;
    border-radius: 100px;
    padding-left: 20px;
`
const Img=styled.img`
    position: absolute;
    right: 18%;
    margin-top:30px;
`