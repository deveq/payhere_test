import {Dispatch, SetStateAction} from 'react';
import * as Styled from './styles';
import AsideList, {IAsideListItem} from './AsideList';

interface AsideProps {
    data: string[];
    title: string;
    setIndex: Dispatch<SetStateAction<number>>;
    index: number;
}

const Aside = ({data, title, setIndex, index}: AsideProps) => {
    return (
        <Styled.Aside>
            <Styled.Title>{title}</Styled.Title>
            <AsideList data={data} index={index} setIndex={setIndex} />
        </Styled.Aside>
    )
}

export default Aside;