from models.shared import db

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created = db.Column(db.)
    eexpires = db.Column(db.)

    username = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(80))

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

    def __repr__(self):
        return '<User %r>' % self.username
