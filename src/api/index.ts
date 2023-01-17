import { request } from './client';
import { RepositoryResult, IssueResult } from 'types/api';
import qs from 'qs';

export type IssueSortType = 'created' | 'updated' | 'comments';
export type SortDirection = 'asc' | 'desc';
export type IssueState = 'open' | 'closed' | 'all';

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

export type RepositorySortType = 'starts' | 'forks' | 'help-wanted-issues' | 'updated' | undefined;

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
		let querystring = '';
		if (config) {
			querystring += '&' + qs.stringify(config);
		}

		const response = await request.get<RepositoryResult>(
			`/search/repositories?q=${query}${querystring}`,
		);
		return response.data;
	} catch (error) {
		console.error(error, 'apis - getRepositories Error');
	}
};

export const getIssues = async (
	repository: string,
	config?: SearchIssueConfig,
) => {
	try {
		let querystring = '';
		if (config) {
			querystring += qs.stringify(config);
		}
		const url = `/repos/${repository}/issues?${querystring}`;
		const response = await request.get<IssueResult[]>(url);
		return response.data;
	} catch (error) {
		console.error(error, 'apis - getIssues Error');
	}
};
