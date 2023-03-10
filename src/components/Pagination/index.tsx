import { SetStateAction, Dispatch } from 'react';
import * as Styled from './styles';
import { useDebounce } from 'hooks';

export interface PaginationProps {
	total: number;
	page: number;
	setPage: Dispatch<SetStateAction<number>>;
	limit: number;
	onlyArrow?: boolean;
}

const Pagination = ({
	page,
	setPage,
	limit,
	total,
	onlyArrow,
}: PaginationProps) => {
	const numPages = Math.ceil(total / limit);
	const startPage = Math.floor((page - 1) / 10) * 10 + 1;
	const endPage = Math.min(startPage + 9, numPages);

	const getNumber = () => {
		const arr = [];
		for (let i = startPage; i <= endPage; i++) {
			arr.push(i);
		}
		return arr;
	};

	const moveToPrev = useDebounce(() => {
		setPage((prev) => prev - 1);
	}, 500);

	const moveToNext = useDebounce(() => {
		setPage((prev) => prev + 1);
	}, 500);

	const moveToTarget = useDebounce((num: number) => {
		setPage(num);
	}, 500);

	return (
		<Styled.Container>
			<Styled.PageButton
				onClick={moveToPrev}
				disabled={page === 1}
				hide={page === 1}
			>
				{onlyArrow ? '이전 페이지' : '<'}
			</Styled.PageButton>
			{!onlyArrow && startPage > 10 && (
				<>
					<Styled.PageButton
						onClick={() => {
							moveToTarget(1);
						}}
					>
						1
					</Styled.PageButton>
					<Styled.PageButton disabled>...</Styled.PageButton>
				</>
			)}
			<>
				{!onlyArrow &&
					getNumber().map((num) => (
						<Styled.PageButton
							onClick={() => {
								moveToTarget(num);
							}}
							selected={num === page}
							key={`page_${num}`}
						>
							{num}
						</Styled.PageButton>
					))}
			</>
			<Styled.PageButton
				hide={numPages === page}
				onClick={moveToNext}
				disabled={page === numPages}
			>
				{onlyArrow ? '다음 페이지' : '>'}
			</Styled.PageButton>
		</Styled.Container>
	);
};

export default Pagination;

/*
total, limit을 받고 10개씩 페이지를 렌더링 한다
numPages가 10 이상일 경우 앞 혹은 뒤에 ...을 렌더링해주는데
제일 앞, 뒤에는 1번과 마지막 페이지를 렌더링 해준다

case1. total: 132, limit: 10, curr: 1
< 1 ~ 10 ... 14 >
case2. total: 132, limit: 10, curr 11
< 1 ... 11 ~ 14 >
case3. total: 632, lmit: 10, curren 33
< 1 ... 31 ~ 40 ... 64 >

1이면 0
11이면 1
21이면 2
const startPage = Math.floor(currentPage / 10) * 10 + 1 부터 시작

startPage
pageCount / 10

만약 currentPage가 pageCount보다 크다면 1페이지를 렌더링하도록

//계산
const pageCount = Math.ceil(total / 10) = 14;

TODO: 버그발견
current page가 20일때 11~20이 아니라 21~30으로 렌더링됨!


 */
