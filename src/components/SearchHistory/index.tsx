import { memo } from 'react';
import * as Styled from './styles';

interface SearchHistoryProps {
	isFocused: boolean;
	recordHistory: string[];
	onClickHistoryItem: (text: string) => void;
}

const SearchHistory = ({
	isFocused,
	recordHistory,
	onClickHistoryItem,
}: SearchHistoryProps) => {
	return (
		<Styled.History show={isFocused && recordHistory.length > 0}>
			{recordHistory.map((item) => {
				return (
					<Styled.HistoryItem
						onClick={() => {
							onClickHistoryItem(item);
						}}
						key={item}
					>
						{item}
					</Styled.HistoryItem>
				);
			})}
		</Styled.History>
	);
};

// Input컴포넌트의 props인 text가 변경될때마다 리렌더링 되었던것을
// 별도의 컴포넌트로 뽑은 후 memo로 감싸주면서 최적화를 시킨다.
export default memo(SearchHistory);
