
// modules

m.module(document.getElementById('nav-container'), poolbuy.nav);
m.module(document.getElementById('main-container'), poolbuy.home);


// setup routes
m.route(document.body, "/", {
    "/": 		poolbuy.home,
//    "/login": 	poolbuy.login,
//    "/account": poolbuy.account,
    "/signup": 	poolbuy.signup
});
