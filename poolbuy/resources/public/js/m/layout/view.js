/** @jsx m */

'use strict';

var m = require('./../../lib/mithril/mithril.js');

module.exports = function(ctrl, args, nav, main) {
	return	m("div", {class:"container"}, [
                /* Static navbar */
                m("span", {id:"nav-container"}, [
                     m.component(nav) 
                ]),
                /* Main component for a primary marketing message or call to action */
                m("span", {id:"main-container"}, [
                	 m.component(main) 
                ])
            ])
};
