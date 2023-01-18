import { useState, useEffect, Suspense, useMemo} from 'react';
import Aside from 'components/Aside';
import * as Styled from 'pages/Layout/styles';
import { repositoriesState } from 'atoms/repositoriesState';
import { useRecoilState } from 'recoil';
import SearchResult from './SearchResult';
import ChipList from 'components/ChipList';
import {getIssues} from 'api';
import Loading from 'components/Loading';


const Issues = () => {
	const [page, setPage] = useState(1);
	const [repositories, setRepositories] = useRecoilState(repositoriesState);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [selectedRepository, setSelectedRepository] = useState('');
	const menuList = ['최신순' ,'오래된 순'];

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
				{
					repositories.length > 0 ? (

						<Suspense fallback={<Loading />}>
							<SearchResult
								index={selectedIndex}
								page={page}
								setPage={setPage}
								repositories={repositories}
								reqs={reqs}
							/>
						</Suspense>
					) : (
						<Styled.CardTitle>
							관심목록을 등록해보세요
					</Styled.CardTitle>
					)
				}
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

export default Issues;
