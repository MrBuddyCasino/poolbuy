/** @jsx m */

'use strict';

poolbuy.signup.view = function() {

     return <span>
     		<div class="col-lg-4"></div>
			<div class="col-lg-4">
				<div class="well bs-component">
					<form class="form-horizontal" role="form">
						<fieldset>
							<legend>Sign Up</legend>

							<label for="inputEmail" class="sr-only">Email address</label>
							<input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus></input>

							<label for="inputPassword" class="sr-only">Password</label>
							<input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>

							<label for="inputPassword2" class="sr-only">Repeat</label>
							<input type="password" id="inputPassword2" class="form-control" placeholder="Repeat Password" required></input>

							<button class="btn btn-lg btn-primary btn-block" type="submit">Create Account</button>
						</fieldset>
					</form>
				</div>
			</div>
			<div class="col-lg-4"></div>
			</span>

		};