import os,random, string

class Config(object):
    # database options
    SECRET_KEY  = os.getenv('SECRET_KEY')

    if not SECRET_KEY:
        SECRET_KEY = ''.join(random.choice( string.ascii_lowercase  ) for i in range( 32 ))   

    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URI')
    USE_CORS = True
    CORS_SUPPORTS_CREDENTIALS = True
    CORS_HEADERS = 'Content-Type'
    MAIL_SERVER = os.getenv('MAIL_SERVER')
    MAIL_PORT = int(os.getenv('MAIL_PORT') or 25)
    MAIL_USE_TLS = os.getenv('MAIL_USE_TLS') is not None
    MAIL_USERNAME = os.getenv('MAIL_USERNAME')
    MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
        


class ProductionConfig(Config):
    DEBUG = False
    
class DevelopmentConfig(Config):
    DEBUG = True
 

# Load all possible configurations
configurations = {
    'production': ProductionConfig,
    'development': DevelopmentConfig
}