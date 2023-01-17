import {SortDirection} from 'api';
interface SortingData {
    title: string;
    value?: string;
    direction?: SortDirection;
}

export const repositoriesAsideListData: SortingData[] = [
    {
        title: '베스트 매치',
    }, 
    {
        title: '최근순',
        value: 'updated',
        direction: 'desc',
    },
    {
        title: '오래된 순',
        value: 'updated',
        direction: 'asc',
    },
    {
        title: '별 많은 순',
        value: 'stars',
        direction: 'desc',
    },
    {
        title: '별 적은 순',
        value: 'stars',
        direction: 'asc',
    },
    {
        title: '포크 많은 순',
        value: 'forks',
        direction: 'desc',
    },
    {
        title: '포크 적은 순',
        value: 'forks',
        direction: 'asc',
    },
]

export const issuesAsideListData: SortingData[] = [
    {
        title: '최근순',
        value: 'created',
        direction: 'desc',
    },
    {
        title: '오래된 순',
        value: 'created',
        direction: 'asc',
    },
    {
        title: '댓글 많은 순',
        value: 'comments',
        direction: 'desc',
    },
    {
        title: '댓글 적은 순',
        value: 'comments',
        direction: 'asc',
    },
];