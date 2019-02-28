import React from 'react';
import { StyledDiv} from './SectionTop.styles'

export default function SectionTop() {
    return (
        <StyledDiv>
            <div>
                <h3>Lambda School</h3>
                <p>@LambdaSchool - 26 jan</p>
            </div>
            <div>
                Let's learn React by building simple interfaces with components.
                Don't try to overthink it, just keep it simple and have fun.
                Once you feel comfortable using components you are well on your
                way to mastering React!
            </div>
        </StyledDiv>
    );
}
