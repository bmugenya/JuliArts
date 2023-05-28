import jwt
import datetime

# Secret key for JWT encoding and decoding
SECRET_KEY = 'your_secret_key_here'

def create_ticket(email, expiration_hours=1):
    expiration = datetime.datetime.utcnow() + datetime.timedelta(hours=expiration_hours)

    payload = {
        'email': email,
        'exp': expiration
    }
    print(payload)

    token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')

    return token
