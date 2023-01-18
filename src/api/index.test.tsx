import axios, { AxiosResponse } from 'axios';
import { getRepositories, getIssues } from 'api';
import { mockRepoResult, mockIssueResult } from 'assets/mockData';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('axios request test', () => {
	it('repository list를 반환', async () => {
		const mockedResponse: AxiosResponse = {
			data: mockRepoResult,
			status: 200,
			statusText: 'OK',
			headers: {},
			config: {},
		};

		mockedAxios.get.mockResolvedValue(mockedResponse);

		expect(axios.get).not.toHaveBeenCalled();
		const data = await getRepositories('react', {
			order: 'asc',
		});
		expect(axios.get).toHaveBeenCalled();
		expect(data).toEqual(mockRepoResult);
	});

	it('issue list를 반환', async () => {
		const mockedResponse: AxiosResponse = {
			data: mockIssueResult,
			status: 200,
			statusText: 'OK',
			headers: {},
			config: {},
		};

		mockedAxios.get.mockResolvedValue(mockedResponse);

		expect(axios.get).not.toHaveBeenCalled();
		const data = await getIssues('react', {
			direction: 'asc',
		});
		expect(axios.get).toHaveBeenCalled();
		expect(data).toEqual(mockIssueResult);
	});
});
