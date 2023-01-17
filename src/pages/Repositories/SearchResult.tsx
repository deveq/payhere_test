import { Suspense, Dispatch, SetStateAction, useRef, useEffect } from 'react';
import * as Styled from 'pages/Layout/styles';
import Item from 'components/Item';
import Pagination from 'components/Pagination';
import {useGetRepositories} from 'hooks';
import { repositoriesAsideListData } from 'assets/asideListData';
import { RepositorySortType } from 'api';
import {useSetRecoilState} from 'recoil';
import {repositoriesState} from 'atoms/repositoriesState';

interface SearchResultProps {
	page: number;
	setPage: Dispatch<SetStateAction<number>>;
	query: string;
	index: number;
}

const SearchResult = ({ page, setPage, query, index }: SearchResultProps) => {
	const {data, status} = useGetRepositories(query, {
		order: repositoriesAsideListData[index].direction,
		sort: repositoriesAsideListData[index].value as RepositorySortType,
		page,
		per_page: 10,
	});
	const listRef = useRef<HTMLUListElement>(null);
	const setRepositories = useSetRecoilState(repositoriesState);
	useEffect(() => {
		if (listRef.current) {
			listRef.current.scrollTop = 0;
		}
	}, [page]);

	const appendRepository = (repoName: string) => {
		setRepositories(prev => {

			if (prev.includes(repoName)) {
				alert('동일한 저장소는 추가할 수 없습니다.');
				return prev;
			}

			if (prev.length === 4) {
				alert('4개 초과');
				return prev;
			} 
			
			const newArray = [...prev];
			newArray.push(repoName);
			return newArray;
		})
	}

	if (status === 'success' && !data) {
		/**
		 * 할당량제한이 걸린 경우
		 * success로 처리되기때문에, success이지만 data가 오지 않았다면
		 * 에러를 throw해 강제로 ErrorBoundary fallback을 보여준다.
		 */
		throw new Error('요청이 많아 잠시 후 시도해주세요. 로그인을 하면 할당량이 늘어납니다!');
	}

	return (
		<Suspense fallback={<div>abcd</div>}>
			{data && (
				<Styled.ListWrapper ref={listRef}>
					{data.items.map((item) => (
						<Item
							key={`${item.full_name}_${item.created_at}`}
							title={item.full_name}
							description={item.description}
							meta={item.created_at}
							onClick={() => appendRepository(item.full_name)}
						/>
					))}
					<Pagination
						total={data.total_count}
						limit={10}
						page={page}
						setPage={setPage}
					/>
				</Styled.ListWrapper>
			)}
		</Suspense>
	);
};

export default SearchResult;
