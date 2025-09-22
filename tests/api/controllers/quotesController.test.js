const { quoteController } = require('../../../src/api/controllers/quotesController');

jest.mock('../../../src/api/services/quotesService', () => ({
	getQuote: jest.fn().mockResolvedValue('<svg>mock</svg>')
}));

function createMockRes() {
	const res = {};
	res.setHeader = jest.fn();
	res.header = jest.fn();
	res.send = jest.fn();
	return res;
}

describe('quoteController', () => {
	it('sets headers and sends SVG response', async () => {
		const req = { query: {} };
		const res = createMockRes();

		await quoteController(req, res);

		expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'image/svg+xml');
		expect(res.header).toHaveBeenCalledWith('Cache-Control', 'no-cache,max-age=0,no-store,s-maxage=0,proxy-revalidate');
		expect(res.header).toHaveBeenCalledWith('Pragma', 'no-cache');
		expect(res.header).toHaveBeenCalledWith('Expires', '-1');
		expect(res.send).toHaveBeenCalledWith('<svg>mock</svg>');
	});
}); 