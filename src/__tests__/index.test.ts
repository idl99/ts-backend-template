import request from 'supertest';
import server from '../server';

describe('Server', () => {
	afterAll(() => {
		server.close();
	});

	it('should run', async () => {
		const response = await request(server).get('/health');

		expect(response.status).toBe(200);
	});
});
