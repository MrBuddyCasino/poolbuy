/** @jsx m */

'use strict';

poolbuy.nav.view = function() {

		        // Static navbar
    	return  <nav class="navbar navbar-default" role="navigation">
		          <div class="container-fluid">
		            <div class="navbar-header">
		              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		                <span class="sr-only">Toggle navigation</span>
		                <span class="icon-bar"></span>
		                <span class="icon-bar"></span>
		                <span class="icon-bar"></span>
		              </button>
		              <a class="navbar-brand" href="#">PB</a>
		            </div>
		            <div id="navbar" class="navbar-collapse collapse">
		              <ul class="nav navbar-nav">
		                <li class="active"><a href="#">Home</a></li>
		                <li><a href="#">Browse</a></li>
		              </ul>
		              <ul class="nav navbar-nav navbar-right">
		                <li class="active">
		                	<a href="login.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Login</a>
		                </li>
		              </ul>

		              <form class="navbar-form" role="search">
		  	            <div class="input-group">
		  			      <span class="input-group-addon glyphicon glyphicon-search"></span>
		  			      <input type="text" class="form-control" placeholder="Search" />
		  			    </div>
		  			</form>

		            </div>{/* /.nav-collapse */}
		          </div>{/* /.container-fluid */}
		        </nav>
		};