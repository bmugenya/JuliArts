from app import db
from datetime import datetime

class User(db.Model):

    __tablename__ = 'users'

    id = db.Column(db.Integer,primary_key=True)
    email = db.Column(db.String(64), unique=True)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)


    def __repr__(self):
        return '<User {}>'.format(self.email)

