/** @jsx m */

'use strict';

poolbuy.home.view = function() {
	return	m("div", {class:"jumbotron"}, [
		        m("h1", ["Join forces."]),
		        m("p", ["Order parts together, save on shipping."]),
		        m("p", [
		          m("a", {class:"btn btn-lg btn-primary", href:"../../components/#navbar", role:"button"}, ["Create Account »"])
		        ])
			])
};
