import React from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../components/Container'
import {RoundBtn, BorderGrayBtn} from '../../components/Buttons'
const WriteReview = () => {
  return (
    <ColContainer style={{background:"white"}}>
      <ImgContainer>
        <div>도서/책방 사진</div>
          <RowContainer>
            <SubTitle>메인사진</SubTitle>
            <Input></Input>
          </RowContainer>
          <RowContainer>
            <SubTitle>사진1</SubTitle>
            <Input></Input>
          </RowContainer>
          <RowContainer>
            <SubTitle>사진2</SubTitle>
            <Input></Input>
          </RowContainer>
          <BorderGrayBtn>사진 추가하기</BorderGrayBtn>
      </ImgContainer>  
      <WriteContainer>
        <div>리뷰 작성</div>
          <Textarea></Textarea>
          <RoundBtn>리뷰 업로드</RoundBtn>
     
      </WriteContainer>
    </ColContainer>
  
  )
}

export default WriteReview

const ImgContainer=styled(ColContainer)`
  font-weight: 400;
font-size: 16px;
`
const Title=styled.div`
`
const SubTitle=styled.div`
`
const Input=styled.input`
height: 40px;
background: #F5F5F5;
`
const WriteContainer=styled(ColContainer)`
`
const Textarea=styled.textarea`
  background: #F5F5F5;
  height: 100px;
`