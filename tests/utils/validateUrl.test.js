const getValidUrl = require('../../src/utils/validateUrl');

describe('getValidUrl', () => {
	it('returns invalid for bad URL', async () => {
		const res = await getValidUrl('not-a-url');
		expect(res.isValidUrl).toBe(false);
		expect(res.customQuotesUrl).toBe('not-a-url');
	});

	it('returns valid for a normal URL without github transform', async () => {
		const res = await getValidUrl('https://example.com/data.json');
		expect(res.isValidUrl).toBe(true);
		expect(res.customQuotesUrl).toBe('https://example.com/data.json');
	});

	it('transforms github blob URL to raw URL', async () => {
		const res = await getValidUrl('https://github.com/user/repo/blob/main/file.json');
		expect(res.isValidUrl).toBe(true);
		expect(res.customQuotesUrl).toBe('https://raw.githubusercontent.com/user/repo/main/file.json');
	});
}); 