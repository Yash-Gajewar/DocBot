from typing import List
from pydantic import BaseModel

class Symptoms(BaseModel):
    symptoms: list