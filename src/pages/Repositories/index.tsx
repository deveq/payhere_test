import {useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import Aside from 'components/Aside';
import * as Styled from './styles';
import Pagination from 'components/Pagination';
import ChipList from 'components/ChipList';

const asideMenuList = [
    '베스트 매치',
    '최근순',
    '오래된 순',
    '별 많은 순',
    '별 적은 순',
    '포크 많은 순',
    '포크 적은 순',
]

const Repositories = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const [page, setPage] = useState(1);
    return (
        <>
            <Aside data={asideMenuList} title="정렬" />
            <Styled.Container>
                <Styled.PaginationWrapper>
                    <Pagination total={332} limit={10} page={page} setPage={setPage} />
                </Styled.PaginationWrapper>
            </Styled.Container>
            <Styled.InterestsContainer>
                <Styled.CardTitle>관심목록</Styled.CardTitle>
                <ChipList data={['react', 'react-native', 'deveqreact-native','react-nativereact-native']} />
            </Styled.InterestsContainer>
        </>
    )
}

export default Repositories;