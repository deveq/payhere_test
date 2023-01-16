import { useQuery } from 'react-query';
import { getIssues, SearchIssueConfig } from 'api';

const useGetIssues = (
	owner: string,
	repository: string,
	config?: SearchIssueConfig,
) => {
	return useQuery(['issues', owner, repository], () =>
		getIssues(owner, repository, config),
	);
};

export default useGetIssues;
