import { useState } from 'react';
import Aside from 'components/Aside';
import * as Styled from 'pages/Layout/styles';
import ChipList from 'components/ChipList';
import Pagination from 'components/Pagination';
import {issueResult} from 'api/mockData';
import Item from 'components/Item';

const asideMenuList = [
	'베스트 매치',
	'최근순',
	'오래된순',
	'댓글 많은순',
	'댓글 적은순',
	'최근 수정된 순',
	'오래된 수정 순',
];
const Issues = () => {
	const [page, setPage] = useState(1);
	return (
		<>
			<Aside data={asideMenuList} title="정렬" />
			<Styled.CommonContainer>
				<Styled.CardTitle>이슈를 모아볼 저장소를 선택해주세요</Styled.CardTitle>
				<ChipList
					data={[
						'react',
						'react-native',
						'deveqreact-native',
						'react-nativereact-native',
					]}
				/>
				<Styled.ListWrapper>
					{
						issueResult.map(item => (
							<Item 
								key={`${item.title}_${item.created_at}`}
								title={item.title}
								meta={item.created_at}
								onClick={() => {
									window.open(item.html_url, '_blank');
								}}
                        />
						))
					}
					<Pagination total={332} limit={10} page={page} setPage={setPage} />
				</Styled.ListWrapper>
			</Styled.CommonContainer>
			<Styled.RightContainer>
				<Styled.CardTitle>필터</Styled.CardTitle>
				<ChipList data={['open', 'closed', 'all']} />
			</Styled.RightContainer>
		</>
	);
};

export default Issues;
