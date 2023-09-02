from pymongo import ASCENDING
from src.establish_db_connection import database
import json

collection = database.Doctors


def fetch_all_doctors():
    data = []
    cursor = collection.find({})

    for document in cursor:
        del document['_id']
    
        data.append(document)

    return data

def fetch_specific_doctors(type:str):
    data = []
    cursor = collection.find({"speciality":type})

    for document in cursor:
        del document['_id']
    
        data.append(document)

    return data

