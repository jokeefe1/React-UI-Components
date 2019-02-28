import React from 'react';
import { FaRegEnvelope, FaRegHeart } from 'react-icons/fa';
import { MdChatBubbleOutline, MdRefresh } from 'react-icons/md';
import { StyledDiv, StyledHeart, StyledRefresh } from './Footer.styles';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: 0,
            heart: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.persist();
        const { name } = e.target;
        console.log(e.target)
    }
    render() {
        return (
            <StyledDiv>
                <MdChatBubbleOutline size={18} />
                <StyledRefresh name="refresh" onClick={this.handleClick}>
                    <MdRefresh size={18} />
                    {this.state.refresh}
                </StyledRefresh>
                <StyledHeart name="heart" onClick={this.handleClick}>
                    <FaRegHeart size={18} />
                    {this.state.heart}
                </StyledHeart>
                <FaRegEnvelope size={18} />
            </StyledDiv>
        );
    }
}
