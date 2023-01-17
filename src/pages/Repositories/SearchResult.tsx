import { Suspense, Dispatch, SetStateAction, useRef, useEffect } from 'react';
import * as Styled from 'pages/Layout/styles';
import Item from 'components/Item';
import Pagination from 'components/Pagination';
import useGetRepositories from 'hooks/useGetRepositories';
import { repositoriesAsideListData } from 'assets/asideListData';
import { RepositorySortType } from 'api';

interface SearchResultProps {
	page: number;
	setPage: Dispatch<SetStateAction<number>>;
	query: string;
	index: number;
}

const SearchResult = ({ page, setPage, query, index }: SearchResultProps) => {
	const { data } = useGetRepositories(query, {
		order: repositoriesAsideListData[index].direction,
		sort: repositoriesAsideListData[index].value as RepositorySortType,
		page,
		per_page: 10,
	});
	const listRef = useRef<HTMLUListElement>(null);
	useEffect(() => {
		if (listRef.current) {
			listRef.current.scrollTop = 0;
		}
	}, [page])
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
							onClick={() => alert(`${item.full_name} 추가`)}
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