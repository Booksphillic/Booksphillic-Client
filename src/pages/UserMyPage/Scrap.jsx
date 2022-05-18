
import React,{useState} from 'react'
import styled from "styled-components";
import { ColContainer, MyPageContentContainer, RowContainer } from '../../components/Container';
import Pagination from '../../components/Pagination';
const Scrap = () => {
     const [limit, setLimit]=useState(3);
    const [page, setPage]=useState(1);
    const offset=(page-1)*limit;
    const dummy=[{title:'무엇보다 책방'}, {title:'리스본 서점'}, {title:'동네책방 주책'}];
  return (
    <MyPageContentContainer>
        {dummy.slice(offset, offset+limit).map((dum)=>(
            <Box>
                <Img src='../img/bookstore1.png'></Img>
                <Col>
                    <Title>{dum.title}</Title>
                    <Sub>부제목</Sub>
                    <Tag>#파동이 닿는 곳,송파</Tag>
                </Col>
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

export default Scrap
const Box=styled(RowContainer)`
    gap:20%;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #BDBDBD;
`
const Img=styled.img`
    width:40%;
    height:100px;
`
const Col=styled(ColContainer)`
    width:40%;
`
const Title=styled.div`
font-weight: 500;
font-size: 20px;
color: #222222;
`
const Sub=styled.div`
    font-weight: 400;
font-size: 14px;
color: #BDBDBD;
`
const Tag=styled.div`
font-weight: 400;
font-size: 16px;
color: #616161;

`
const PaginationWrapper=styled.div`
    margin-top: -70px;
    
`