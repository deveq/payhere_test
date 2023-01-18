import styled from 'styled-components';

export const Container = styled.div`
	background: ${({theme}) => theme.bg_page3};
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const Main = styled.main`
	display: flex;
	flex: 1;
	height: calc(100% - 70px);
`;

export const ListWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-shrink: 0;
    flex: 1;
    overflow: auto;
`;

export const PaginationWrapper = styled.div`
    padding-top: 50px;
    flex: 1;
`;

export const CardTitle = styled.h3`
    color: ${({theme}) => theme.text3};
    font-size: 18px;
    transition: all 0.5s ease;
    padding: 5px;
    border-radius: 5px;
    text-indent: -10px;
    margin-bottom: 10px;
`;

export const CommonContainer = styled.div`
    flex: 1;
    padding: 30px;
    display: flex;
    flex-direction: column;
`;

export const RightContainer = styled.div`
    width: 250px;
    background: ${({theme}) => theme.bg_page1};
    padding: 30px 40px;
    box-sizing: border-box;
    flex-shrink: 0;
`;