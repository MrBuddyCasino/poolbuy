/** @jsx m */

'use strict';

var poolbuy = require('./../namespace.js');

poolbuy.signup.view = function() {

     return m("span", [
     		m("div", {class:"col-lg-4"}),
			m("div", {class:"col-lg-4"}, [
				m("div", {class:"well bs-component"}, [
					m("form", {class:"form-horizontal", role:"form"}, [
						m("fieldset", [
							m("legend", ["Sign Up"]),

							m("label", {for:"inputEmail", class:"sr-only"}, ["Email address"]),
							m("input", {type:"email", id:"inputEmail", class:"form-control", placeholder:"Email address", required:true, autofocus:true}),

							m("label", {for:"inputPassword", class:"sr-only"}, ["Password"]),
							m("input", {type:"password", id:"inputPassword", class:"form-control", placeholder:"Password", required:true}),

							m("label", {for:"inputPassword2", class:"sr-only"}, ["Repeat"]),
							m("input", {type:"password", id:"inputPassword2", class:"form-control", placeholder:"Repeat Password", required:true}),

							m("button", {class:"btn btn-lg btn-primary btn-block", type:"submit"}, ["Create Account"])
						])
					])
				])
			]),
			m("div", {class:"col-lg-4"})
			])

		};