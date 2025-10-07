from pymongo import MongoClient
from django.conf import settings

def get_mongo():
    client = MongoClient(settings.MONGO_URI)
    return client[settings.MONGO_DB]