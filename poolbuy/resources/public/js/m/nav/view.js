/** @jsx m */

'use strict';

poolbuy.nav.view = function() {

		        // Static navbar
    	return  m("nav", {class:"navbar navbar-default", role:"navigation"}, [
		          m("div", {class:"container-fluid"}, [
		            m("div", {class:"navbar-header"}, [
		              m("button", {type:"button", class:"navbar-toggle collapsed", 'data-toggle':"collapse", 'data-target':"#navbar", 'aria-expanded':"false", 'aria-controls':"navbar"}, [
		                m("span", {class:"sr-only"}, ["Toggle navigation"]),
		                m("span", {class:"icon-bar"}),
		                m("span", {class:"icon-bar"}),
		                m("span", {class:"icon-bar"})
		              ]),
		              m("a", {class:"navbar-brand", href:"#"}, ["PB"])
		            ]),
		            m("div", {id:"navbar", class:"navbar-collapse collapse"}, [
		              m("ul", {class:"nav navbar-nav"}, [
		                m("li", {class:"active"}, [m("a", {href:"#"}, ["Home"])]),
		                m("li", [m("a", {href:"#"}, ["Browse"])])
		              ]),
		              m("ul", {class:"nav navbar-nav navbar-right"}, [
		                m("li", {class:"active"}, [
		                	m("a", {href:"login.html", class:"dropdown-toggle", 'data-toggle':"dropdown", role:"button", 'aria-expanded':"false"}, ["Login"])
		                ])
		              ]),

		              m("form", {class:"navbar-form", role:"search"}, [
		  	            m("div", {class:"input-group"}, [
		  			      m("span", {class:"input-group-addon glyphicon glyphicon-search"}),
		  			      m("input", {type:"text", class:"form-control", placeholder:"Search"} )
		  			    ])
		  			])

		            ])/* /.nav-collapse */
		          ])/* /.container-fluid */
		        ])
		};