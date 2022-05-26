import React,{useState} from 'react'
import { ColContainer, RowContainer,Container, ApplyContentContainer } from '../../components/Container'
import styled from "styled-components";
import Chip from '@mui/material/Chip';
import {Link, useLocation} from 'react-router-dom';
import { BlackBtn } from '../../components/Buttons';
import InputWrapper from '../../components/apply/Input';
import {Background} from '../../components/apply/Background';
var dataLists=["#술이 있는", "#독립출판", "#전시", "#여행서점", "#동화서점", "#좌석"];


const ApplyPickup_3 = () => {
    const [chip, setChip]=useState("");
    const [chips, setChips]=useState([]);
    const location = useLocation();
    const {date, store} = location.state;
    const[click, setClick]=useState(Array(dataLists.length).fill(false));
    const handleClick=(id)=>{
        setClick(click.map((element, index)=>{
            return index===id ? !element : element;
        }))
    }

    const AddChip=()=>{
        console.log(chip)
        setChips([...chips, chip]);
        console.log(chips);
    }
    const handleDelete=(e, value)=>{
        e.preventDefault();
        setChips(chips.filter((chip)=> chip!==value));
    }
  return (
      <Background>
        <ApplyContainer>
        <Col1>
            <TitleWrapper>
                <Num>05</Num>
                <Title>도서 유형</Title>
            </TitleWrapper>
            <ApplyContentContainer>
            <Subtitle style={{marginBottom:"20px"}}>책방 사장님이 취향에 맞는 도서를 선별합니다.</Subtitle>
            <RowContainer>

                <Input type="text"  value={chip} onChange={e=>setChip(e.target.value)}></Input>

                <BlackBtn style={{marginLeft:"10px"}} onClick={AddChip}>추가하기</BlackBtn>
            </RowContainer>
            <Chips style={{margin:"20px 0px 10px 0px"}}>
                {chips.map((list, i) => (
                        <Chip key={i} label={list} size="medium"
                              style={{backgroundColor:'#FFFA88', padding:"3px 1%", marginRight:"12px"}}
                              onDelete={(e)=>handleDelete(e, list)}></Chip>
                ))}
            </Chips>
            <hr></hr>
            <Subtitle>이런 태그는 어떠세요?</Subtitle>
            <GridChips>
            {dataLists.map((value, index) => (        
                            <Chip 
                            className={`${
                                click[index] ? 'click' : ''
                            }`}
                            style={ 
                                click[index] ? {backgroundColor:'#FFFA88'} : {}
                            }
                            key={index}
                            label={value}  
                            size="medium" 
                            onClick={()=>{
                                handleClick(index)
                            }
                            } ></Chip>
                    ))}

            </GridChips>
            </ApplyContentContainer>
            <TitleWrapper>
                <Num>06</Num>
                <Title>요청사항</Title>
            </TitleWrapper>
            <ApplyContentContainer>
            <Input06 type="text" placeholder='추가적인 요청사항이 있다면 적어주세요' ></Input06>
            </ApplyContentContainer>

        </Col1>
        <Col2>
        <Link to="/apply4">
            <img src='../img/arrow2.png' style={{position:'absolute', bottom: '0px', right:'0px'}}></img>
        </Link>

        </Col2>
        </ApplyContainer>
      </Background>

  )
}

export default ApplyPickup_3

const ApplyContainer=styled(RowContainer)`
    margin-top: 29px;
    padding: 82px 40px 82px 99px;
    display: grid;
    grid-template-columns: 3fr 2fr;
`
const Col1=styled(ColContainer)`

`
const TitleWrapper=styled(RowContainer)`
    gap: 0px 20px;
    margin-top: 77px;
`
const Title=styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 52px;
`
const Num=styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 35px;
`
const Subtitle=styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 35px;
    color: #616161;
    margin-bottom: 10px;
`
const Chips=styled.div`
    white-space: pre-line;
width: 100%;

`
const GridChips=styled(RowContainer)`
    gap: 17px 12px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`
const Col2=styled.div`
    position: relative;
    height: 100%;
`
const Input06=styled.input`
    border-bottom: 1px solid #616161;
    margin-top: 20px;
    width: 360px;
`
const Input=styled.input`
border: 1px solid #616161;
height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 70%;
`
