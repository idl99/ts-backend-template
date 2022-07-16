import express from 'express';

const host = process.env.APP_HOST || '0.0.0.0';
const port = process.env.APP_PORT
	? Number.parseInt(process.env.APP_PORT)
	: 8080;

const server = (() => {
	const app = express();

	app.get('/health', (req, res) => {
		res.send();
	});

	const server = app.listen(port, host);

	console.log(`Server started on http://${host}:${port}`);

	return server;
})();

export default server;
