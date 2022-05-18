import React from 'react'
import styled from "styled-components";
import { BorderGrayBtn } from '../../components/Buttons';
import BookstoreCard from '../Collections/BookstoreCard';
import { CenterContainer, ColContainer, MyPageContentContainer } from '../../components/Container';
import Pagination from '../../components/Pagination';
import { useState } from 'react';
        
const Apply = () => {
    const [limit, setLimit]=useState(3);
    const [page, setPage]=useState(1);
    const offset=(page-1)*limit;
const dummy=[{title:'무엇보다 책방'}, {title:'리스본 서점'}, {title:'동네책방 주책'}]

  return (
    <MyPageContentContainer>
        {dummy.slice(offset, offset+limit).map((d)=>(
            <Box>
            <ColContainer>
                <Date>2022.05,07</Date>
                <Title>{d.title}</Title>
            </ColContainer>
            <BorderGrayBtn>리뷰 쓰기</BorderGrayBtn>
        </Box>
        ))}
        <PaginationWrapper>
        <Pagination
        total={dummy.length}
          limit={limit}
          page={page}
          setPage={setPage}
       />
        </PaginationWrapper>
        
    </MyPageContentContainer>
  )
}

export default Apply
const Box=styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #BDBDBD;
    align-items:center;
`
const Date=styled.div`
    font-weight: 400;
font-size: 14px;
color: #BDBDBD;
`
const Title=styled.div`
    font-weight: 500;
font-size: 20px;
color: #222222;
`
const PaginationWrapper=styled.div`
    margin-top: -50px;
`