import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import { RowContainer } from '../../components/Container';
import ReviewCard from './ReviewCard';
import Pagination from '../../components/Pagination';
import { DonutLarge } from '@mui/icons-material';
import axios from 'axios';
const collections=[
    {
      title:"제목0",
      id: 0
    },
    {
      title:"제목1",
      id: 1
    },
    {
      title:"제목2",
      id: 2
    },
    {
      title:"제목3",
      id: 3
    },
    {
      title:"제목4",
      id: 4
    },
  ];
const Review = ({id}) => {
    const [limit, setLimit]=useState(2);
  const [page, setPage]=useState(1);
  const offset=(page-1)*limit;
  useEffect(()=>{
    axios.get(`/api/bookstore/${id}/reviewList`)
    .then((res)=>{
      console.log(res.data.data);
  })
  },[])
  return (
      <>
        <ReviewContainer>
            {collections.slice(offset, offset+limit).map((col)=>(
                <ReviewCard id={col.id}/>
            ))}
        </ReviewContainer>
        <PaginationWrapper>
        <Pagination
            total={collections.length}
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