import * as Styled from './styles';
import Issue, {IssueProps} from './Issue';

interface IssueListProps {
    issues: IssueProps[];
}

const IssueList = ({issues}: IssueListProps) => {
    return (
        <Styled.IssueList>
            {
                issues.map(issue => (
                    <Issue {...issue} key={`${issue.title} ${issue.info}`} />
                ))
            }
        </Styled.IssueList>
    )
}

export default IssueList;