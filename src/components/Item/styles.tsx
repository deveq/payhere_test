import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    flex-direction: column;
    background: ${({theme}) => theme.bg_page2};
    border: 1px solid ${({theme}) => theme.border3};
    border-radius: 10px;
    padding: 20px 10px;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const TopInfo = styled.div`
    color: ${({theme}) => theme.text2};
    font-weight: bold;
    font-size: 14px;
`;

export const BottomInfo = styled.div`
    color: ${({theme}) => theme.text2};
    font-weight: bold;
    font-size: 14px;
`;

export const Title = styled.h4`
    color: ${({theme}) => theme.primary};
    font-weight: bold;
    cursor: pointer;
`;

export const Description = styled.p`
    color: ${({theme}) => theme.text1};
    font-size: 14px;
    max-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

export const Meta = styled.div`
    color: ${({theme}) => theme.text2};
    font-size: 12px;
`;
