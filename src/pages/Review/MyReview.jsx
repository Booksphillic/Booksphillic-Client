import React , {useState} from 'react'
import styled from 'styled-components'
import Pagination from '../../components/Pagination';
import { ColContainer, MyPageContentContainer,RowContainer } from '../../components/Container';
import WriteReview from './WriteReview';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BorderGrayBtn } from '../../components/Buttons';

const MyReview = () => {
  const [limit, setLimit]=useState(2);
  const [page, setPage]=useState(1);
  const offset=(page-1)*limit;
  const dummy=[{title:'무엇보다 책방'}, {title:'리스본 서점'}, {title:'동네책방 주책'}]
  return (
    <MyPageContentContainer>
    {dummy.slice(offset, offset+limit).map((d)=>(
        <Box>
        <Accordion square={true} style={{boxShadow:"none", width:"100%"}} disableGutters={true} >
        <AccordionSummary
          style={{height:"113px", borderBottom: "1px solid #BDBDBD", width:"100%"}}
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <RowContainer style={{display:'flex',justifyContent:"space-between", width:"100%"}}>
          <ColContainer>
                  <Date>2022.05,07</Date>
                  <Title>{d.title}</Title>
          </ColContainer>
          <Category>책방 리뷰</Category>
        </RowContainer>
        </AccordionSummary>
        <AccordionDetails style={{padding: "20px 0"}}>
          <WriteReview></WriteReview>
        </AccordionDetails>
      </Accordion>
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

export default MyReview
const Box=styled.div`
    height: 130px;
    display: flex;
    justify-content: space-between;
    //border-bottom: 1px solid #BDBDBD;
    align-items:center;
`
const Date=styled.div`
    font-weight: 400;
font-size: 14px;
color: #BDBDBD;
`
const Category=styled.div`
`
const Title=styled.div`
    font-weight: 500;
font-size: 20px;
color: #222222;
`
const PaginationWrapper=styled.div`
    margin-top: -50px;
`