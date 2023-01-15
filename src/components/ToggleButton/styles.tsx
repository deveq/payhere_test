import styled from 'styled-components';

interface SpaceProps {
    clicked?: boolean;
}

export const Container = styled.div<SpaceProps>`
    width: 60px;
    height: 30px;
    background-color: ${({clicked}) => clicked ? 'green' : 'gray'};
    display: flex;
    border-radius: 30px;
    transition: all 0.5s ease;
`;

export const Thumb = styled.div<SpaceProps>`
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: ${({clicked}) => clicked ? 'white' : 'whitesmoke'};
    border: 2px solid ${({clicked}) => clicked ? 'green' : 'gray'};
    box-sizing: border-box;
    transition: all 0.5s ease;

`;

export const Space = styled.div<SpaceProps>`
    flex: ${({clicked}) => clicked ? 1 : 0};
    transition: all 0.5s ease;
`;

