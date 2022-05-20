import React from 'react'
import styled from"styled-components"
import { ColContainer } from '../../components/Container'
const Input = () => {
  return (
      <ColContainer>
      
    <InputWrapper placeholder='어떤 책방을 찾고 계신가요?'>
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