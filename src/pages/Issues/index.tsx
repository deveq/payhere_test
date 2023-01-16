import {useState} from 'react';
import Aside from 'components/Aside';
import * as Styled from './styles';
import ChipList from 'components/ChipList';
import IssueList from 'components/IssueList';
import {IssueProps} from 'components/IssueList/Issue';
import Pagination from 'components/Pagination';

const asideMenuList = [
    '베스트 매치',
    '최근순',
    '오래된순',
    '댓글 많은순',
    '댓글 적은순',
    '최근 수정된 순',
    '오래된 수정 순',
]
const Issues = () => {
    const [page, setPage] = useState(1);
    const issues: IssueProps[] = [
        {
            title: 'react-native aaaa bbb ccc',
            info: '#12312 by yap241986 was closed 14 hours ago',
            status: 'open',
        },
        {
            title: 'DevTools Bug Element &quot;3&quot; not found',
            info: '#26001 by yap241986 was closed 14 hours ago',
            status: 'open',
        },
        {
            title: 'Dev1Tools Bug Element &quot;3&quot; not found',
            info: '#26001 by yap241986 was closed 14 hours ago',
            status: 'open',
        },
        // {
        //     title: 'DevTools1 Bug Ele22ment &quot;3&quot; not found',
        //     info: '#26001 by yap241986 was closed 14 hours ago',
        //     status: 'open',
        // },
        // {
        //     title: 'DevTools1 Bug Element &quot;3&quot; not found',
        //     info: '#26001 by yap241986 was closed 14 hours ago',
        //     status: 'open',
        // },
        // {
        //     title: 'DevTools 2Bug Element &quot;3&quot; not found',
        //     info: '#26001 by yap241986 was closed 14 hours ago',
        //     status: 'open',
        // },
        // {
        //     title: 'DevTools 3Bug Element &quot;3&quot; not found',
        //     info: '#26001 by yap241986 was closed 14 hours ago',
        //     status: 'open',
        // },
        // {
        //     title: 'DevTools Bu4g Element &quot;3&quot; not found',
        //     info: '#26001 by yap241986 was closed 14 hours ago',
        //     status: 'open',
        // },
        // {
        //     title: 'DevTools B1ug Element &quot;3&quot; not found',
        //     info: '#26001 by yap241986 was closed 14 hours ago',
        //     status: 'open',
        // },
        // {
        //     title: 'DevT11ools B1ug Element &quot;3&quot; not found',
        //     info: '#26001 by yap241986 was closed 14 hours ago',
        //     status: 'open',
        // },
    ]
    return (
        <>
            <Aside data={asideMenuList} title="정렬" />
            <Styled.IssuesContainer>
                <IssueList issues={issues} />
                <Styled.PaginationWrapper>
                    <Pagination total={332} limit={10} page={page} setPage={setPage} />
                </Styled.PaginationWrapper>
            </Styled.IssuesContainer>
            <Styled.FilterContainer>
                <Styled.CardTitle>관심목록</Styled.CardTitle>
                <ChipList data={['react', 'react-native', 'deveqreact-native','react-nativereact-native']} />
                <Styled.CardTitle>필터</Styled.CardTitle>
                <ChipList data={['open', 'closed', 'all']} />
            </Styled.FilterContainer>
        </>
    )
}

export default Issues;