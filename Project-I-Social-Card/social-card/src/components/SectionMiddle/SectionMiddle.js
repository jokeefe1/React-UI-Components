import React from 'react'
import {StyledDiv } from './SectionMiddle.styles'
import Img1 from '../../img/reactLogo.png'

export default function SectionMiddle(props) {
  return (
    <StyledDiv>
      <img src={Img1} alt="react logo"/>
    </StyledDiv>
  )
}
