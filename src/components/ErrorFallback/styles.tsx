import styled from 'styled-components';
import {flexCenter} from 'styles/helper';
import {FaRegSadTear} from 'react-icons/fa';

export const Container = styled.div`
    height: 100vh;
    ${flexCenter};
    flex-direction: column;
`;

export const Paragraph = styled.p`
    font-size: 30px;
`;

export const ErrorMessage = styled.pre`
    font-size: 20px;
`;

export const SadIcon = styled(FaRegSadTear)`
    width: 100px;
    height: 100px;
    color: gray;
`;