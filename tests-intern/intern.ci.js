define([
	'./intern'
], function (intern) {
	/* globals process */
	intern.tunnel = 'NullTunnel';
	intern.tunnelOptions = {
		hostname: 'localhost',
		port: 4445
	};

	intern.capabilities = {
		'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER
	};

	return intern;
});
