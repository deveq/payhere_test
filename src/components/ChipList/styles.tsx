import styled from 'styled-components';

interface ChipProps {
    selected?: boolean;
}

export const Chip = styled.div<ChipProps>`
    padding: 5px 10px;
    max-width: 150px;
    min-width: 40px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 20px;
    border: 1px solid ${({theme}) => theme.border2};
    background: ${({selected, theme}) => selected ? theme.primary : 'white'};
    color: ${({selected}) => selected ? 'white' : '#333'};
    cursor: pointer;
    &:active {
        opacity: 0.9;
    }
`;

export const ChipList = styled.div`
    display: flex;
    /* flex-direction: column;
    align-items: flex-start; */
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 10px;
`;

export const Message = styled.p`
    color: ${({theme}) => theme.text1};
`;