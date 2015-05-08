
// libs
var $ = require('./lib/jquery/dist/jquery.js');
//require('./lib/bootstrap/dist/js/bootstrap.js');
var m = require('./lib/mithril/mithril.js');

// componnents
var home = require('./m/home/component.js');
var nav = require('./m/nav/component.js');
//poolbuy.login = require('./m/login/module.js');
//poolbuy.account = require('./m/account/module.js');
//poolbuy.signup = require('./m/signup/module.js');

// pages

var index = require('./m/layout/component.js');
index = m.component(index, {}, nav, home);


// setup routes
m.route(document.body, "/", {
   "/":		index
//   "/login": 	poolbuy.login,
//   "/account": poolbuy.account,
//   "/signup": 	poolbuy.signup
});

