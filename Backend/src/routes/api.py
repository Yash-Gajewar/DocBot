from fastapi import APIRouter
from src.endpoints import disease_prediction_endp, user_endp, doctor_endp

router = APIRouter()
router.include_router(disease_prediction_endp.router)
router.include_router(user_endp.router)
router.include_router(doctor_endp.router)





