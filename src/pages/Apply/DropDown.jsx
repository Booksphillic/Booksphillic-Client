import React from 'react'
import styled from "styled-components";
const options=[
  {value:"GANGNAM", name:"강남구"},
  {value:"GANGDONG", name:"강동구"},
  {value:"GANGBOOK", name:"강북구"},
  {value:"GANGSEO", name:"강서구"},
  {value:"GWANAK", name:"관악구"},
  {value:"GWANGJIN", name:"광진구"},
  {value:"GOORO", name:"구로구"},
  {value:"GUEMCHON", name:"금천구"},
  {value:"NOWON", name:"노원구"},
  {value:"DOBONG", name:"도봉구"},
  {value:"DONGDAEMOON", name:"동대문구"},
  {value:"GONGJAK", name:"동작구"},
  {value:"MAPO", name:"마포구"},
  {value:"1", name:"서대문구"},
  {value:"2", name:"서초구"},
  {value:"3", name:"성동구"},
  {value:"4", name:"성북구"},
  {value:"SONGPA", name:"송파구"},
  {value:"5", name:"양천구"},
  {value:"6", name:"영등포구"},
  {value:"7", name:"용산구"},
  {value:"8", name:"은평구"},
  {value:"9", name:"종로구"},
  {value:"10", name:"중구"},
  {value:"11", name:"중랑구"}

]
const DropDown = ({handleChange}) => {

  return (
   <DropDownWrapper onChange={handleChange}>
   {
     options.map((opt)=>(
       <option 
       key={opt.value}
       value={opt.value}
       >
         {opt.name}
       </option>
     ))
   }
   </DropDownWrapper>
  )
}

export default DropDown
const DropDownWrapper=styled.select`
height: 60px;
    width:70%;
    border: 1px solid #616161;
    background-color:#f4f4f4 ;
    
`