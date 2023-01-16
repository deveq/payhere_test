import { request } from './client';
import { RepositoryResult, IssueResult } from 'types/api';
import qs from 'qs';

type IssueSortType = 'created' | 'updated' | 'comments';
type SortDirection = 'asc' | 'desc';
type IssueState = 'open' | 'closed' | 'all';

export interface SearchIssueConfig {
	milestone?: string;
	state?: IssueState; // default open
	assignee?: string;
	creator?: string;
	mentioned?: string;
	labels?: string;
	sort?: IssueSortType; // default created
	direction?: SortDirection; // default desc
	since?: string; // YYYY-MM-DDTHH:MM:SSZ
	per_page?: number; // default 30
	page?: number; // default 1
}

type RepositorySortType = 'starts' | 'forks' | 'help-wanted-issues' | 'updated';

export interface SearchRepositoriesConfig {
	sort?: RepositorySortType; // default best match
	order?: SortDirection; // desc
	per_page?: number; // 30
	page?: number; // 1
}

export const getRepositories = async (
	query: string,
	config?: SearchRepositoriesConfig,
) => {
	try {
		let querystring = '&';
		if (config) {
			querystring += qs.stringify(config);
		}

		const response = await request.get<RepositoryResult>(
			`/search/repositories?q=${query}`,
		);

		return response.data;
	} catch (error) {
		console.error(error, 'apis - getRepositories Error');
	}
};

export const getIssues = async (
	owner: string,
	repository: string,
	config?: SearchIssueConfig,
) => {
	try {
		let querystring = '';
		if (config) {
			querystring = qs.stringify(config);
		}
		const response = await request.get<IssueResult>(
			`/repos/${owner}/${repository}/issues?${querystring}`,
		);
		return response.data;
	} catch (error) {
		console.error(error, 'apis - getIssues Error');
	}
};
