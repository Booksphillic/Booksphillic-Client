import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import { RowContainer, ColContainer } from './Container';
import Flex from './Flex';

const TopSection = ({title, editor, editorImage, date,id, tags}) => {
    const location=useLocation();
    const handleLocation=()=>{
        if (location.pathname.includes("profile")){
            return "profile";
        }
    }
    
  return (
    <Top>
        <TopTitle style={{width: "67%"}}> {title}</TopTitle>
            <EditorWrapper>
            <Editor>
                {editorImage && 
                <img src={editorImage}></img>
                }
                {handleLocation()==="profile"
                ?<div>스크랩</div>
                :
                <>
                <div>에디터 {editor}</div>
                <div>{date}</div>
                </>
            }
                
            </Editor>
            </EditorWrapper>
            <Tags>
                <div>{tags}</div>
        </Tags>
    </Top>
  )
}

export default TopSection
const Top=styled(RowContainer)`
    height: 150px;
`
const TopTitle=styled(Flex)`
   
    font-weight: 700;
    font-size: 36px;
    justify-content: center;
`
const EditorWrapper=styled(Flex)`
    width: 11%;
    display: flex; 
    justify-content: center;
   
`
const Editor=styled(ColContainer)`
    font-size: 16px;
    color: #616161;
`
const Tags=styled(Flex)`
    width: 22%;
    justify-content: center;
    padding: 0px 20px 0px 20px;
`