import React from 'react';
import { StyledDiv } from './SmallButton.styles';

export default function SmallButton(props) {
    const redStyle = {
        backgroundColor: 'maroon',
        color: 'white'
    }
    return <StyledDiv style={ props.color === 'red' ? redStyle : null}>{props.data}</StyledDiv>;
}
