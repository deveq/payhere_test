import * as Styled from './styles';
import AsideList, {IAsideListItem} from './AsideList';

interface AsideProps {
    title: string;
}

const data: IAsideListItem[] = [
    {
        onClick: (index) => { alert(index)},
        title: '다크모드',
    },
    {
        onClick: (index) => { alert(index)},
        title: '검색 기록',
    },
    {
        onClick: (index) => { alert(index)},
        title: '계정',
    },
    {
        onClick: (index) => { alert(index)},
        title: '초기화',
    },
]


const Aside = () => {
    return (
        <Styled.Aside>
            <Styled.Title>설정</Styled.Title>
            <AsideList 
                data={data}
            />
        </Styled.Aside>
    )
}

export default Aside;