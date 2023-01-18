import styled from 'styled-components';
import {flexCenter} from 'styles/helper';

export const Aside = styled.aside`
    width: 200px;
    background: ${({theme}) => theme.bg_page1};
    padding: 30px;
    box-sizing: border-box;
    flex-shrink: 0;
`;

export const List = styled.ul`
    display: grid;
    gap: 5px;
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    border-bottom: ${({theme}) => `1px solid ${theme.bg_element4}`};
    color: ${({theme}) => theme.text1};
    padding-bottom: 10px;
    margin-bottom: 20px;
    text-indent: 10px;
`;

export const ListItem = styled.li<{selected: boolean}>`
    background: ${({selected,theme}) => selected ? theme.bg_element1 : 'transparent'};
    padding: 15px 20px;
    border-radius: 10px;
    font-weight: bold;
    color: ${({selected, theme}) => selected ? theme.text2 : theme.text3};
    &:hover,
    &:active {
        background: ${({theme}) => theme.bg_element1};
    };
    cursor: pointer;
`;

export const Subtitle = styled.div`

`;