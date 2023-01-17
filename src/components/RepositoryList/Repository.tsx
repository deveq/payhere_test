import * as Styled from './styles';
import {IssueType} from './styles';

export interface IssueProps {
    status: IssueType;
    title: string;
    info: string;
}

const Repository = ({status, title, info}: IssueProps) => {
    return (
        <Styled.Container>
            <Styled.Status status={status} />
            <Styled.Body>
                <Styled.RepositoryInfo>facebook/react</Styled.RepositoryInfo>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Context>Do you have a similar function but in react and actually builds the data so that i can store in my own db instead of building client side tables ?</Styled.Context>
                <Styled.Info>{info}</Styled.Info>
            </Styled.Body>
        </Styled.Container>
    )
}

export default Repository;