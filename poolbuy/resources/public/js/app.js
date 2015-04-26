
// libs
require('./lib/jquery/dist/jquery.js');
//require('./lib/bootstrap/dist/js/bootstrap.js');
require('./lib/mithril/mithril.js');


//namespace
if(poolbuy == undefined)
{
	global.poolbuy = {}
}


require('./m/setup.js');

require('./m/home/model.js');
require('./m/home/controller.js');
require('./m/home/view.js');

require('./m/nav/model.js');
require('./m/nav/controller.js');
require('./m/nav/view.js');
/*
require('./m/login/model.js');
require('./m/login/controller.js');
require('./m/login/view.js');

require('./m/account/model.js');
require('./m/account/controller.js');
require('./m/account/view.js');
*/
require('./m/signup/model.js');
require('./m/signup/controller.js');
require('./m/signup/view.js');

require('./m/common.js');
