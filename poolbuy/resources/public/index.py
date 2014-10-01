from flask import Flask
from flask import render_template
from flask.ext.sqlalchemy import SQLAlchemy
from models.shared import db
from models import User

app = Flask(__name__)
app.debug = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://poolbuy:poolbuy@localhost/poolbuy'
db.init_app(app)
with app.app_context():
	db.create_all()

	@app.route("/")
	def index():
		return render_template('index.html')

		if __name__ == "__main__":
			app.run()
