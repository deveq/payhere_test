import { useQuery } from 'react-query';
import { getRepositories, SearchRepositoriesConfig } from 'api';

const useGetRepositories = (
	query: string,
	config?: SearchRepositoriesConfig,
) => {
	return useQuery(['repositories', query, config], () =>
		getRepositories(query, config),
	);
};

export default useGetRepositories;
