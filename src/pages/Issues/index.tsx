import { useState, useEffect, Suspense, useMemo} from 'react';
import Aside from 'components/Aside';
import * as Styled from 'pages/Layout/styles';
import { repositoriesState } from 'atoms/repositoriesState';
import { useRecoilValue } from 'recoil';
import SearchResult from './SearchResult';

import {getIssues} from 'api';


const Issues = () => {
	const [page, setPage] = useState(1);
	const repositories = useRecoilValue(repositoriesState);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const menuList = ['최신순' ,'오래된 순'];
		// repositories.length === 0 ? [] : ['전체보기', ...repositories];
	// useEffect(() => {

	// }, [selectedIndex, repositories])

	// if (!data) return;
	// const filteredArray = data.flat(1).filter(item => !!item);
	// const sortedArray = filteredArray.sort((a,b) => parseInt(a!.created_at) - parseInt(b!.created_at))
	// setIssueArray(sortedArray);
	// useEffect(() => {
	// 	// 정렬 변경된 값으로 다시 요청하기
	// }, [selectedIndex]);

	const reqs = useMemo(() => {
		return repositories.map(repoName => getIssues(repoName, {
			direction: selectedIndex === 0 ? 'desc' : 'asc',
			sort: 'created',
			page,
			per_page: 10,
		}))
	}, [repositories, selectedIndex, page]);

	return (
		<>
			<Aside
				data={menuList}
				setIndex={setSelectedIndex}
				index={selectedIndex}
				title="정렬"
			/>
			<Styled.CommonContainer>
				<Suspense fallback={<div>abcd</div>}>
					<SearchResult
						index={selectedIndex}
						page={page}
						setPage={setPage}
						repositories={repositories}
						reqs={reqs}
					/>
				</Suspense>
			</Styled.CommonContainer>
			<Styled.RightContainer>
				<Styled.CardTitle>필터</Styled.CardTitle>
				{/* <ChipList
					data={['open', 'closed', 'all']}
					selectedItem={selectedFilter}
					onClick={setSelectedFilter}
				/> */}
			</Styled.RightContainer>
		</>
	);
};

export default Issues;
