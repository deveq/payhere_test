import styled from 'styled-components';

export const IssuesContainer = styled.div`
    flex: 1;
    padding: 70px 30px 40px 30px;
    display: flex;
    flex-direction: column;
`;

export const CardTitle = styled.h3`
    color: ${({theme}) => theme.text3};
    font-size: 18px;
    transition: all 0.5s ease;
    padding: 5px;
    border-radius: 5px;
    text-indent: -10px;
`;

export const FilterContainer = styled.div`
    width: 300px;
    background: ${({theme}) => theme.bg_page1};
    padding: 30px 40px;
    box-sizing: border-box;
`;

export const PaginationWrapper = styled.div`
    padding-top: 50px;
    flex: 1;
`;