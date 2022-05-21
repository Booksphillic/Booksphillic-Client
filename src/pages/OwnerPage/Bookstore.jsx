import React from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../components/Container'
const Bookstore = () => {
  return (
    <>
    <Title>내 책방 관리</Title>
    <Content>
        <BasicContainer>
            <SubTitle>
                기본정보
            </SubTitle>
            <BasicRow>
                <Img src='../img/bookstore1.png'></Img>
                <Inputs>
                    <InputWrapper>
                        <div>책방 이름</div>
                        <Input></Input>  
                    </InputWrapper>
                  
                </Inputs>
            </BasicRow>
        </BasicContainer>
    </Content>
    </>
  )
}

export default Bookstore
const Title=styled.div`
    font-weight: 700;
    font-size: 36px;
    margin-bottom: 50px;
`
const Content=styled(ColContainer)`
    
`
const BasicContainer=styled(ColContainer)`
    background-color: white;
`
const SubTitle=styled.div`
    font-weight: 500;
font-size: 20px;
`
const BasicRow=styled(RowContainer)`
    
`
const Img=styled.img`
`
const Inputs=styled(ColContainer)`
    font-weight: 400;
    font-size: 16px;
`
const InputWrapper=styled(RowContainer)`
    
`
const Input=styled.input`
    background: #F5F5F5;
`