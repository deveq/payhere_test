import * as Styled from './styles';
import AsideList, {IAsideListItem} from './AsideList';

interface AsideProps {
    selectedIndex: number;
    data: IAsideListItem[];
}

const Aside = ({selectedIndex, data}: AsideProps) => {
    return (
        <Styled.Aside>
            <Styled.Title>설정</Styled.Title>
            <AsideList selectedIndex={selectedIndex} data={data} />
        </Styled.Aside>
    )
}

export default Aside;