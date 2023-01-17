import {useState, useEffect} from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { getIssues, IssueState, SearchIssueConfig } from 'api';
import {IssueResult} from 'types/api';


export const useGetIssues = (
	repository: string,
	config: SearchIssueConfig,
) => {
	return useQuery(['issues', repository, config], () =>
		getIssues(repository, config),
	);
};

export const useGetAllIssues = (
	repository: string[],
	config: SearchIssueConfig,
) => {
	const reqArray = repository.map(repoName => getIssues(repoName, config));
	return useQuery(['issues', repository, config], () =>
		Promise.all(reqArray)
	);
};

export const useGetTest = (
    reqs: Promise<IssueResult[] | undefined>[],
	repositories: string[],
	config?: SearchIssueConfig,
) => {
	return useQuery(['issues', JSON.stringify(repositories), JSON.stringify(config)], () => {
		return Promise.all(reqs);
	})
}