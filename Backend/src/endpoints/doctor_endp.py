from fastapi import FastAPI, APIRouter, Depends, HTTPException, status
from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from pydantic import BaseModel
from typing import List

DATABASE_URL = "mysql+pymysql://username:password@localhost/docbot"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

Base = declarative_base()

class Doctor(Base):
    __tablename__ = "doctors"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    speciality = Column(String(50))
    hospital = Column(String(50))
    experience = Column(Integer)
    location = Column(String(50))

class DoctorBase(BaseModel):
    id: int
    name: str
    speciality: str
    hospital: str
    experience: int
    location : str

app = FastAPI()
router = APIRouter()

@router.get("/getalldoctors", response_model=List[DoctorBase])
async def get_all_doctors(db: Session = Depends(get_db)):
    doctors = db.query(Doctor).all()
    if not doctors:
        raise HTTPException(status_code=404, detail="No doctors found")
    return doctors

@router.get("/getspecificdoctors", response_model=List[DoctorBase])
async def get_specific_doctors(speciality: str, db: Session = Depends(get_db)):
    doctors = db.query(Doctor).filter(Doctor.speciality == speciality).all()
    if not doctors:
        raise HTTPException(status_code=404, detail="No doctors found for the given specialty")
    return doctors

app.include_router(router)
