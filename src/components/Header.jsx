import React from 'react'
import styled from "styled-components"
import { BorderWhiteBtn } from './Buttons'
import { RowContainer } from './Container'

const Header = () => {
  return (
      <HeaderContainer>
        <HeaderChildContainer>
          <img src="../img/logo.png"></img>
          <Menu>동네컬렉션</Menu>
          <Menu>서점프로필</Menu>
        </HeaderChildContainer>
        <HeaderChildContainer>
          <BorderWhiteBtn>미스터리북 신청하기</BorderWhiteBtn>
          <img src='../img/search.png'></img>
          <img src='../img/mypage.png'></img>
        </HeaderChildContainer>
      </HeaderContainer>
     
  )
}

export default Header;
const HeaderContainer=styled(RowContainer)`
  height: 64px;
  background-color: #2A3143;
  padding: 0px 44px;
  justify-content: space-between;
`
const Menu=styled.div`
  color: white;
  margin: 0px 20px;
`
const HeaderChildContainer=styled(RowContainer)`
  gap: 0px 40px;
`
