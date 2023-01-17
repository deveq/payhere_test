import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import Aside from 'components/Aside';
import * as Styled from 'pages/Layout/styles';
import ChipList from 'components/ChipList';
import { repositoriesAsideListData } from 'assets/asideListData';
import { repositoriesState } from 'atoms/repositoriesState';
import { useRecoilState } from 'recoil';
import SearchResult from './SearchResult';

const Repositories = () => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get('query');
	const [page, setPage] = useState(1);
	const menuList = repositoriesAsideListData.map((val) => val.title);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [selectedRepository, setSelectedRepository] = useState('');
	const [repositories, setRepositories] = useRecoilState(repositoriesState);

	useEffect(() => {
		// 정렬 변경된 값으로 다시 요청하기
	}, [selectedIndex, query]);

	useEffect(() => {
		if (!selectedRepository) return;
		const answer = confirm(
			`관심목록에서 제거하시겠습니까?\n저장소이름: ${selectedRepository}`,
		);

		if (answer) {
			setRepositories((prev) => {
				return prev.filter((item) => item !== selectedRepository);
			});
			setSelectedRepository('');
		}
	}, [selectedRepository]);

	return (
		<>
			<Aside
				data={menuList}
				setIndex={setSelectedIndex}
				index={selectedIndex}
				title="정렬"
			/>
			<Styled.CommonContainer>
				<Suspense fallback={<div>로딩중...</div>}>
					<Styled.CardTitle>
						{query ? `검색어 : ${query}` : '검색어를 입력하세요'}
					</Styled.CardTitle>
					{query && (
						<SearchResult
							index={selectedIndex}
							page={page}
							setPage={setPage}
							query={query}
						/>
					)}
				</Suspense>
			</Styled.CommonContainer>
			<Styled.RightContainer>
				<Styled.CardTitle>관심목록</Styled.CardTitle>
				<ChipList
					data={repositories}
					selectedItem={selectedRepository}
					onClick={setSelectedRepository}
				/>
			</Styled.RightContainer>
		</>
	);
};

export default Repositories;
