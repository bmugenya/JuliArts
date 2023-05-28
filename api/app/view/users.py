from flask import request,Blueprint,jsonify,render_template
from app.model.data_model import User
from app import db,mail
from flask_mail import Message
import os

users = Blueprint('users', __name__)



@users.route('/subscribe', methods=['POST'])
def subscribe():
    data = request.get_json()
    email = data.get('email')
    
    if not email:
        return jsonify({'msg': 'Missing JSON'}), 400


    user = User.query.filter_by(email=email).first()


    msg = "Thank you for subscribing."
    send_msg = Message(msg,sender=os.getenv('MAIL_USERNAME'),recipients=[email])
    send_msg.html = render_template('mail.html')
    mail.send(send_msg)

    if not user:
        user = User(**data)
        db.session.add(user)
        db.session.commit()
        return jsonify({'message': 'user created successfully'})


   
    return jsonify({'message': 'User already exists'}), 200
 





   

