# Database connections, passwords and private keys should be stored in this

# With this import you can choose between development and production
from beboard.settings.development import *

SECRET_KEY = 'a^(1=a@opwcvb00u6%f2h!1p4y9tkc68yc_=t1^gy-8!o-^@#x'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
