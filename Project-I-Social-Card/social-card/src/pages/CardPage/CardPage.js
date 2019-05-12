import React from 'react';
import Footer from '../../components/Footer/Footer';
import Logo from '../../components/Logo/Logo';
import SectionBottom from '../../components/SectionBottom/SectionBottom';
import SectionMiddle from '../../components/SectionMiddle/SectionMiddle';
import SectionTop from '../../components/SectionTop/SectionTop';
import { StyledContainer, StyledDiv } from './CardPage.styles.js';

export default function CardPage() {
    return (
        <StyledContainer>
            <Logo />
            <StyledDiv>
                <a href="https://www.reactjs.org">
                    <SectionTop />
                    <SectionMiddle />
                    <SectionBottom />
                </a>
                <Footer />
            </StyledDiv>
        </StyledContainer>
    );
}
