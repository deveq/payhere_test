import {ReactElement} from 'react';
import * as Styled from './styles';
import Issue, {IssueProps} from './Issue';

interface IssueListProps {
    issues: IssueProps[];
    pagination?: ReactElement;
}

const IssueList = ({issues, pagination}: IssueListProps) => {
    return (
        <Styled.IssueList>
            {
                issues.map(issue => (
                    <Issue {...issue} key={`${issue.title} ${issue.info}`} />
                ))
            }
            <>
                {
                    pagination
                }
            </>
        </Styled.IssueList>
    )
}

export default IssueList;