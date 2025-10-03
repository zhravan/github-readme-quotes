jest.mock('node-fetch', () => jest.fn());

const fetch = require('node-fetch');
const fetchApi = require('../../src/utils/fetchApi');

describe('fetchApi', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it('returns parsed json on success', async () => {
		fetch.mockResolvedValue({ json: async () => ({ ok: true }) });
		const res = await fetchApi('https://example.com');
		expect(res).toEqual({ ok: true });
		expect(fetch).toHaveBeenCalledWith('https://example.com', undefined);
	});

	it('throws on fetch error', async () => {
		const err = new Error('network');
		fetch.mockRejectedValue(err);
		await expect(fetchApi('https://example.com')).rejects.toThrow('network');
	});
}); 