/** @jsx m */

'use strict';

var m = require('./../../lib/mithril/mithril.js');

module.exports = function(ctrl, args, nav, main) {
	return	<div class="container">
                {/* Static navbar */}
                <span id="nav-container">
                    { m.component(nav) }
                </span>
                {/* Main component for a primary marketing message or call to action */}
                <span id="main-container">
                	{ m.component(main) }
                </span>
            </div>
};
