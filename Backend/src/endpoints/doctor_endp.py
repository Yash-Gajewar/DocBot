from fastapi import HTTPException, APIRouter
from src.database.doctordb import fetch_all_doctors,fetch_specific_doctors


router = APIRouter(
    prefix="/api/doctor",
    tags=["doctor"],
    responses={404: {"description": "Not found"}},
)


@router.get("/getalldoctors")
async def get_user():
    result = fetch_all_doctors()
    return result

@router.get("/getspecificdoctors")
async def get_specific_doctors(type:str):
    result = fetch_specific_doctors(type)
    return result




       

