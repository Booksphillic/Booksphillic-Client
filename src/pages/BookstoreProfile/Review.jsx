import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import { RowContainer,ColContainer } from '../../components/Container';
import ReviewCard from './ReviewCard';
import Pagination from '../../components/Pagination';
import { DonutLarge } from '@mui/icons-material';
import axios from 'axios';

const Review = ({collection}) => {
  //const [collections, setCollections]=useState([]);
    const [limit, setLimit]=useState(2);
  const [page, setPage]=useState(1);
  const offset=(page-1)*limit;
  
    console.log("hi");
    
  
  return (
      <>
        <ReviewContainer>
            {collection.slice(offset, offset+limit).map((col)=>(
                <CardContainer>
                <BigImg src='../img/bookstore1.png'></BigImg>
                <RowContainer style={{gap:"2%"}}>
                    <SmallImg src='../img/bookstore1.png'></SmallImg>
                    <SmallImg src='../img/bookstore1.png'></SmallImg>
                </RowContainer>
                <ContentContainer>
                    <hr style={{margin: "15px 0"}}/>
                    <Id>{col.reviewId}</Id>
                    <Date>2022.05.18</Date>
                    <RowContainer>
                        <Emoji src='../img/emoji/smile.png'></Emoji>
                        <Content>책,커피, 따뜻한 분위기, 그리고 친절한 사장님까지 완벽한 곳이었어요. 추천해주신 책도 정말 좋았습니다. 특히 커피 마시며 책을 볼 수 있어서 너무 좋았어요.</Content>
                    </RowContainer>
                    <hr style={{margin: "15px 0"}}/>
                </ContentContainer>
            </CardContainer>
            ))}
        </ReviewContainer>
        <PaginationWrapper>
        <Pagination
            total={collection.length}
            limit={limit}
            page={page}
            setPage={setPage}
            review={1}
        />
        </PaginationWrapper>      
      </>

  )
}

export default Review
const ReviewContainer=styled(RowContainer)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height:714px;
    width: 50%;
    margin: 20px 2%;
    gap:0 22%;
`
const PaginationWrapper=styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
const CardContainer=styled(ColContainer)`
    display: grid;
    grid-template-rows: 2fr 1fr 1fr;
    height: 700px;
`
const BigImg=styled.img`
    height:347px;
    margin-bottom: 15px;
`
const SmallImg=styled.img`
    height: 170px;
`
const ContentContainer=styled.div`
    height: 150px;
`
const Id=styled.div`
    font-weight: 500;
font-size: 20px;
color: #616161;
`
const Date=styled.div`
    font-weight: 400;
font-size: 14px;
color: #BDBDBD;
margin-bottom: 15px;
`
const Emoji=styled.img`
    height: 20px;
    width: 20px;
    margin-bottom: 20px;
    margin-right: 2%;
`
const Content=styled.div`
    font-weight: 400;
font-size: 16px;
color: #616161;
`