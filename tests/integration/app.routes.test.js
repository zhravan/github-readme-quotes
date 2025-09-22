const request = require('supertest');

jest.mock('../../src/api/services/quotesService', () => ({
	getQuote: jest.fn().mockResolvedValue('<svg>integration</svg>')
}));

let server;

beforeAll(async () => {
	const express = require('express');
	const app = express();
	const bodyParser = require('body-parser');
	const morgan = require('morgan');
	const routes = require('../../src/api/routes/quotes-router');
	const cors = require('cors');
	app.use(cors());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(morgan('dev'));
	routes(app);
	server = app;
});

describe('GET /quote', () => {
	it('returns SVG', async () => {
		const res = await request(server).get('/quote');
		expect(res.statusCode).toBe(200);
		expect(res.headers['content-type']).toMatch(/image\/svg\+xml/);
		const body = res.text ?? (Buffer.isBuffer(res.body) ? res.body.toString() : undefined);
		expect(body).toBe('<svg>integration</svg>');
	});
}); 