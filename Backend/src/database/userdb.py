from pymongo import ASCENDING
from src.establish_db_connection import database

collection = database.Users

collection.create_index([("email", ASCENDING)], unique=True)

def create_user(user):
    try:
        document = user
        result = collection.insert_one(document)
        return result
    except Exception:
        return "duplicate"
    
def user_exists(email:str, password:str):
    result = collection.find_one({"email": email, "password": password})
    if result is not None:
        return True
    else:
        return False
