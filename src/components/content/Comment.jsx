import React from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../Container'
import { BorderGrayBtn } from '../Buttons'
const Comment = () => {
    const contentlist=[1,2,3];
  return (
      <CommentContainer>
        <CommentList>
            {
                contentlist.map((list)=>(
                    <Reply>
                    <Img src='../img/mypage/profile.png'></Img>
                    <ColContainer>
                    <RowContainer style={{fontWeight:"400", fontSize:"16px", color:"#BDBDBD"}}>
                        <div>아이디</div>
                        <div>ㅣ</div>
                        <div>날짜</div>
                    </RowContainer>
                    <Content>
                        댓글 내용
                    </Content>
                    </ColContainer>
                </Reply>
                ))
            }
        </CommentList>
        <Textarea placeholder='에디터의 글에 댓글을 남겨보세요.'></Textarea>
        <BtnContainer>
            <BorderGrayBtn>댓글 남기기</BorderGrayBtn>
        </BtnContainer>
      </CommentContainer>
       
  )
}

export default Comment
const CommentContainer=styled(ColContainer)`
    margin: 100px 10%;
`
const CommentList=styled(ColContainer)`
    min-height: 310px;
`
const Reply=styled(RowContainer)`
    border-bottom: 1px solid #616161;
    padding: 27px 0;
`
const Img=styled.img`
    margin-right: 15px;
`
const Content=styled.div`
    font-weight: 500;
font-size: 20px;
color: #222222;
margin-top: 10px;
`
const Textarea=styled.textarea`
    margin: 27px 0;
    height: 170px;
    padding:3%;
`
const BtnContainer=styled.div`
display:flex;
justify-content: flex-end;
`