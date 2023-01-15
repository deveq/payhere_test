import styled from "styled-components";
import {FiSearch} from 'react-icons/fi';
import {flexCenter} from 'styles/helper';


const Container = styled.div`
    ${flexCenter};
    width: 250px;
    border-radius: 10px;
    overflow: hidden;
    margin-left: 20px;
    padding: 10px;
    border: 1px solid ${({theme}) => theme.border3};
    background: ${({theme}) => theme.bg_element1};
`;

const Input = styled.input`
    border: none;
    outline: none;
    flex: 1;
    font-size: 16px;
    color: ${({theme}) => theme.text1};
    background: ${({theme}) => theme.bg_element1};
`;

const Icon = styled(FiSearch)`
    width: 20px;
    height: 20px;
    color: ${({theme}) => theme.text1};
    cursor: pointer;
    &:hover,
    &:active {
        opacity: 0.6;
    }
`;



export {Input, Container, Icon};