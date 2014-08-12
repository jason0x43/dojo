define([
	'./AdapterRegistry',
	'./Evented',
	'./Stateful',
	'./_base',
	'./colors',
	'./currency',
	'./date',
	'./date/locale',
	'./date/stamp',
	'./fx/easing',
	'./io-query',
	'./json',
	'./number',
	'./on',
	'./promise',
	'./regexp',
	'./request',
	'./store',
	'./string',
	'./topic',
	'./when',
	'./cldr/monetary',
	'./cldr/supplemental',

	// host-specific tests
	'dojo/has!host-browser?./back',
	'dojo/has!host-browser?./dom-form',
	'dojo/has!host-browser?./hash',
	'dojo/has!host-browser?./io/iframe',
	'dojo/has!host-browser?./mouse',
	'dojo/has!host-browser?./rpc',
	'dojo/has!host-node?./node',
	'dojo/has!host-browser?./require/require',
	'dojo/has!host-browser?./router'
], function () {});
