from pydantic import BaseModel
from fastapi import Form

class User(BaseModel):
    email : str = Form(...)
    password : str = Form(...)