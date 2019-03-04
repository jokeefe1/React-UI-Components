import React from 'react';
import DisplayWindow from '../../components/DisplayWindow/DisplayWindow';
import SmallButton from '../../components/SmallButton/SmallButton';
import {
    SmallRedButtonData,
    SmallWhiteButtonData,
    WideButtonData
} from '../../data/buttonData';
import { StyledContainer } from './HomePage.styles';

export default function HomePage() {
    const smWhiteBtn = SmallWhiteButtonData.map((item, index) => {
        return <SmallButton key={index} data={item} color="white" />;
    });

    const smRedBtn = SmallRedButtonData.map((item, index) => {
        return <SmallButton key={index} data={item} color="red" />;
    });


    return (
        <StyledContainer>
            <DisplayWindow />
            <div>{smWhiteBtn}</div>
            <div>{smRedBtn}</div>
        </StyledContainer>
    );
}
