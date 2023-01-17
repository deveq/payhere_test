import { useState, useEffect } from 'react';
import Aside from 'components/Aside';
import * as Styled from 'pages/Layout/styles';
import ChipList from 'components/ChipList';
import Pagination from 'components/Pagination';
import { issueResult } from 'api/mockData';
import Item from 'components/Item';
import { issuesAsideListData } from 'assets/asideListData';
import useGetIssues from'hooks/useGetIssues';

const Issues = () => {
	const [page, setPage] = useState(1);
	const menuList = issuesAsideListData.map((val) => val.title);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [selectedRepository, setSelectedRepository] = useState('');
	const [selectedFilter, setSelectedFilter] = useState('open');

	

	useEffect(() => {
		// 정렬 변경된 값으로 다시 요청하기
	}, [selectedIndex, selectedRepository, selectedFilter]);

	return (
		<>
			<Aside
				data={menuList}
				setIndex={setSelectedIndex}
				index={selectedIndex}
				title="정렬"
			/>
			<Styled.CommonContainer>
				<Styled.CardTitle>
					이슈를 모아볼 저장소를 선택해주세요{selectedRepository}
				</Styled.CardTitle>
				<ChipList
					data={[
						'react',
						'react-native',
						'deveqreact-native',
						'react-nativereact-native',
					]}
					onClick={setSelectedRepository}
					selectedItem={selectedRepository}
				/>
				<Styled.ListWrapper>
					{issueResult.map((item) => (
						<Item
							key={`${item.title}_${item.created_at}`}
							title={item.title}
							meta={item.created_at}
							onClick={() => {
								window.open(item.html_url, '_blank');
							}}
						/>
					))}
					<Pagination total={332} limit={10} page={page} setPage={setPage} />
				</Styled.ListWrapper>
			</Styled.CommonContainer>
			<Styled.RightContainer>
				<Styled.CardTitle>필터</Styled.CardTitle>
				<ChipList
					data={['open', 'closed', 'all']}
					selectedItem={selectedFilter}
					onClick={setSelectedFilter}
				/>
			</Styled.RightContainer>
		</>
	);
};

export default Issues;
