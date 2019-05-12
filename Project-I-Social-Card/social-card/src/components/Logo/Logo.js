import React from 'react';
import img1 from '../../img/LambdaLogo.png';
import { StyledDiv } from './Logo.styles'

export default function Logo() {
    return (
        <StyledDiv>
            <img src={img1} alt="logo" />;
        </StyledDiv>
    );
}
