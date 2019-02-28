import styled from 'styled-components';

export const StyledDiv = styled.div`
           font-size: 1.3rem;
           div {
               display: flex;
               align-items: baseline;
               h3 {
                   font-weight: 900;
                   padding-right: 1rem;
               }
               p {
                   font-size: 1rem;
                   font-weight: 900;
                   color: lightgray;
               }
           }
           &:first-child > div:nth-child(2) {
               padding-bottom: 1rem;
           }
       `;
