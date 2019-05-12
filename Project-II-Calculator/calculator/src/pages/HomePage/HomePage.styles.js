import styled from 'styled-components';
import { Container } from '../../GolbalStyles';

export const StyledContainer = styled(Container)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    & > div:nth-child(1) {
        grid-column: 1 / 5;
        grid-row: 1 / 2;
    }
    & > div:nth-child(2) {
        grid-column: 1 / 4;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        & > button:nth-child(1) {
            width: 100%;
            grid-column: 1 / 4;
            font-weight: 100;
        }
        & > button:nth-child(11) {
            grid-column: 1 / 4;
        }
    }
    & > div:nth-child(3) {
        display: flex;
        flex-direction: column;
        grid-column: 4 / 5;
    }
`;
