import React from 'react'
import styled from "styled-components"
import { useRef, useState } from 'react'
import { ColContainer, RowContainer } from '../../components/Container'
import { BorderGrayBtn, RoundBtn } from '../../components/Buttons'
import { Avatar, Chip } from '@mui/material'
const WriteReview = () => {
    const emoji=[
        {src:"../img/emoji/happy.png",
        name:"추천해요"},
        {src:"../img/emoji/smile.png",
        name:"좋아요"},
        {src:"../img/emoji/heart.png",
        name:"맘에 들어요"},
        {src:"../img/emoji/wink.png",
        name:"짱이에요"},
        ]
    const[click, setClick]=useState(Array(4).fill(false));
    const handleClick=(id)=>{
        setClick(click.map((element, index)=>{
            return index===id ? !element : element;
        }))
    }
    const [img, setImg]=useState([]);
    const [previewImg, setPreviewImg]=useState([]);
    const imageInput = useRef();
   const insertImg=(e)=>{
       //console.log(e.target.files[0]);
       let reader=new FileReader();

       if (e.target.files[0]){
           reader.readAsDataURL(e.target.files[0]);
           setImg([...img, e.target.files[0]]);
       }

       reader.onloadend=()=>{
           const previewImgUrl=reader.result;
           //console.log(previewImgUrl);
           if (previewImgUrl){
               setPreviewImg([...previewImg,previewImgUrl]);
           }
       }
   }
   const getPreviewImg = () => {
    if(img === null || img.length === 0) {
      return (
         <div>최대 4장까지 가능합니다.  </div>
      )
    } else {
        return (
        <ImgContainer>
      { img.map((el, index) => {
        return (
              <Img src={previewImg[index]} />
        )
      })}
        </ImgContainer>
        )
    }
  }
  return (
    <WriteReviewContainer>
        
    <StyledFileInput
        onClick={() => {
            imageInput.current.click();
        }}
    >
        사진 등록
    </StyledFileInput>
        <form encType='multipart/form-data'>
            
        <input 
                type="file"
                id="file"
                ref={imageInput}
                style={{ display: 'none' }}
                accept='image/jpg, image/jpeg, image/png'
                onChange={(e)=>{insertImg(e)}}
                ></input>
        </form>
      {getPreviewImg()}
      <RowContainer style={{gap:"1%", marginTop:"20px"}}>
                {emoji.map((emo, index) => (
                        <Chip size="medium" 
                        label={emo.name}
                        avatar={<Avatar src={emo.src}/>}
                        variant={
                            click[index] ?  "": "outlined"
                        }
                        style={ 
                            click[index] ? {backgroundColor:'#FFFA88'} : {}
                        }
                        onClick={()=>{
                            handleClick(index)
                        }}
                        >
                    </Chip>
                ))}
        </RowContainer>
      <Textarea placeholder='여러분은 이 책방에 어떤 점이 끌리셨나요? 여러분의 후기를 남겨주세요'
        maxLength={100}>
      </Textarea>
      <BtnContainer>
      <BorderGrayBtn>
          <img src='../img/icons/pencil.png' style={{height:"20px", marginRight:"10px"}}></img>
          <span>리뷰 남기기</span>
        </BorderGrayBtn>
      </BtnContainer>
    </WriteReviewContainer>
    
  )
}

export default WriteReview
const WriteReviewContainer=styled(ColContainer)`
margin-bottom:115px;
`
const ImgContainer=styled(RowContainer)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap:1%;
`
const Img=styled.img`
    height: 200px;
`
const StyledFileInput=styled(RoundBtn)`
width:10%;
margin-bottom: 20px;
`
const Textarea=styled.textarea`
    height: 170px;
    margin-top:20px;
    padding: 24px;
   border: 1px solid #616161;
`
const BtnContainer=styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
`