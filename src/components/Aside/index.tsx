import * as Styled from './styles';
import AsideList, {IAsideListItem} from './AsideList';

interface AsideProps {
    data: string[];
    title: string;
}

const Aside = ({data, title}: AsideProps) => {
    return (
        <Styled.Aside>
            <Styled.Title>{title}</Styled.Title>
            <AsideList data={data} />
        </Styled.Aside>
    )
}

export default Aside;