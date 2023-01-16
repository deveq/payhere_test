import styled from 'styled-components';
import {BsCheckCircle, BsSlashCircle, } from 'react-icons/bs';
import {TbCircleDot} from 'react-icons/tb';
import {IconBaseProps} from 'react-icons'

export type IssueType = 'open' | 'closed' | 'notPlanned';

interface StatusProps extends IconBaseProps {
    status: IssueType;
}

export const Container = styled.li`
    display: flex;
    background: ${({theme}) => theme.bg_page2};
    border: 1px solid ${({theme}) => theme.border3};
    border-radius: 10px;
    padding: 20px 10px;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const RepositoryInfo = styled.div`
    color: ${({theme}) => theme.text2};
    font-weight: bold;
    font-size: 14px;
`;

export const Title = styled.div`
    color: ${({theme}) => theme.primary};
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
`;

export const Context = styled.p`
    color: ${({theme}) => theme.text1};
    font-size: 14px;
    max-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

export const Info = styled.div`
    color: ${({theme}) => theme.text2};
    font-size: 12px;
`;

const StyledStatus = ({status, ...rest}: StatusProps) => {
    if (status === 'open') {
        return <TbCircleDot {...rest} color="#3fb950" />
    } else if (status === 'closed') {
        return <BsCheckCircle {...rest} color="#a371f7" />
    } else if (status === 'notPlanned') {
        return <BsSlashCircle {...rest} color="#8b9491" />
    }
    return <TbCircleDot {...rest} />
}

export const Status = styled(StyledStatus)`
    width: 25px;
    height: 25px;
    flex-shrink: 0;
    margin-right: 5px;
`;

export const IssueList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-shrink: 0;
    max-height: 75vh;
    overflow: auto;
`;