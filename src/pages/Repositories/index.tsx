import {useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import Aside from 'components/Aside';
import * as Styled from 'pages/Layout/styles';
import Pagination from 'components/Pagination';
import ChipList from 'components/ChipList';
import Item from 'components/Item';
import {repoResult} from 'api/mockData';


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
            <Styled.CommonContainer>
                <Styled.CardTitle>
                    {
                        query 
                            ? `검색어 : ${query}`
                            : '검색어를 입력하세요'
                    }
                </Styled.CardTitle>
                <Styled.ListWrapper>
                    {
                        repoResult.items.map(item => 
                            <Item 
                                key={`${item.full_name}_${item.created_at}`}
                                title={item.full_name}
                                description={item.description}
                                meta={item.created_at}
                                onClick={() => alert(`${item.full_name} 추가`) }
                            />
                        )
                    }
                    <Pagination total={332} limit={10} page={page} setPage={setPage} />
                </Styled.ListWrapper>
            </Styled.CommonContainer>
            <Styled.RightContainer>
                <Styled.CardTitle>관심목록</Styled.CardTitle>
                <ChipList data={['react', 'react-native', 'deveqreact-native','react-nativereact-native']} />
            </Styled.RightContainer>
        </>
    )
}

export default Repositories;