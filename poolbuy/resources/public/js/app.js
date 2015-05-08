
// libs
var $ = require('./lib/jquery/dist/jquery.js');
//require('./lib/bootstrap/dist/js/bootstrap.js');
var m = require('./lib/mithril/mithril.js');

var poolbuy = {};

// modules
poolbuy.home = require('./m/home/component.js');
poolbuy.nav = require('./m/nav/component.js');
//poolbuy.login = require('./m/login/module.js');
//poolbuy.account = require('./m/account/module.js');
//poolbuy.signup = require('./m/signup/module.js');

// modules

m.mount(document.getElementById('nav-container'), poolbuy.nav);
m.mount(document.getElementById('main-container'), poolbuy.home);


// setup routes
// m.route(document.body, "/", {
//    "/": 		poolbuy.home
//    "/login": 	poolbuy.login,
//    "/account": poolbuy.account,
//    "/signup": 	poolbuy.signup
// });

