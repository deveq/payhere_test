import { useState, Dispatch, SetStateAction, memo, useEffect } from 'react';
import * as Styled from 'pages/Layout/styles';
import { useGetAllIssues, useGetTest } from 'hooks';
import { repositoriesState } from 'atoms/repositoriesState';
import { useRecoilState } from 'recoil';
import { IssueResult } from 'types/api';
import Item from 'components/Item';
import Pagination from 'components/Pagination';
import { getIssues } from 'api';

interface SearchResultProps {
	page: number;
	setPage: Dispatch<SetStateAction<number>>;
	index: number;
	repositories: string[];
	reqs: Promise<IssueResult[] | undefined>[];
}

const SearchResult = ({
	page,
	setPage,
	index,
	repositories,
	reqs,
}: SearchResultProps) => {
	const { data, status } = useGetTest(reqs, repositories, {
		direction: index === 0 ? 'desc' : 'asc',
		sort: 'created',
        page,
        per_page: 10,
	});

	const [issueArray, setIssueArray] = useState<(IssueResult | undefined)[]>(
		data?.flat(1) || [],
	);

	useEffect(() => {
		setIssueArray(data?.flat(1) || []);
	}, [data, page]);

	const sortIssues = (
		issues: (IssueResult | undefined)[],
		direction: number,
	) => {
		return issues.sort((a, b) => {
			if (!a || !b) return 0;
			const x = new Date(a.created_at).getTime();
			const y = new Date(b.created_at).getTime();

			// direction이 0이면 최신순 -> *1
			// direction이 1이면 오래된 순 -> * -1
			if (direction !== 0) return x - y;
			return y - x;
		});
	};

	if (status === 'success' && !data) {
		/**
		 * 할당량제한이 걸린 경우
		 * success로 처리되기때문에, success이지만 data가 오지 않았다면
		 * 에러를 throw해 강제로 ErrorBoundary fallback을 보여준다.
		 */
		throw new Error(
			'요청이 많아 잠시 후 시도해주세요. 로그인을 하면 할당량이 늘어납니다!',
		);
	}

    if (data && data.length === 0) {
        <div>끝</div>
    }

	return (
		<Styled.ListWrapper>
			{sortIssues(issueArray, index).map((item) => {
				//  const "https://api.github.com/repos/facebook/react"
				if (item) {
					const repoUrl = item.repository_url.split('/');
					const repoName = repoUrl.pop();
					const owner = repoUrl.pop();
					return (
						<Item
							key={`${item.title}_${item.created_at}`}
							upperInfo={`${owner}/${repoName}`}
							title={item.title}
							meta={item.created_at}
							onClick={() => {
								window.open(item.html_url, '_blank');
							}}
						/>
					);
				}
				return null;
			})}
			<Pagination
				total={1000}
				limit={10 * repositories.length}
				page={page}
				setPage={setPage}
				onlyArrow={true}
			/>
		</Styled.ListWrapper>
	);
};

export default memo(SearchResult);
