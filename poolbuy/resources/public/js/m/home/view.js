/** @jsx m */

'use strict';

var m = require('./../../lib/mithril/mithril.js');

module.exports = function(ctrl) {
	return	m("div", {class:"jumbotron"}, [
		        m("h1", ["Join forces."]),
		        m("p", ["Order parts together, save on shipping."]),
		        m("p", [
		          m("a", {class:"btn btn-lg btn-primary", href:"../../components/#navbar", role:"button"}, ["Create Account »"])
		        ])
			])
};
