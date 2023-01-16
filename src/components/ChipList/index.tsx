import * as Styled from './styles';

interface ChipListProps {
    data: string[];
}

const ChipList = ({data}: ChipListProps) => {
    return (
        <Styled.ChipList>
            {
                data.map((item, index) => (
                    <Styled.Chip key={item} selected={index === 0}>{item}</Styled.Chip>
                ))
            }
        </Styled.ChipList>
    )
}

export default ChipList;