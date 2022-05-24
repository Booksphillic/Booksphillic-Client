import React from 'react'
import styled from 'styled-components'
import { ColContainer } from '../../components/Container'
import Header from '../../components/Header'
const Editor = () => {
  return (
    <Background>
        <Header/>
        <Top>

        </Top>
    </Background>
  )
}

export default Editor
const Background=styled(Contianer)`
background-image: url('../img/background/background_editor.jpg');
  background-attachment: local;
  background-size: 100% 2790px;
`
const Top=styled(ColContainer)`
    
`