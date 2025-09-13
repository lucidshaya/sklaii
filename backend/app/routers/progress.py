from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import models, database
from .auth import verify_token

router = APIRouter()

def get_db():
    db = next(database.get_db())
    try:
        yield db
    finally:
        db.close()

@router.get("/")
async def get_progress(token: str = Depends(verify_token), db: Session = Depends(get_db)):
    user = token
    progress = db.query(models.Progress).filter(models.Progress.user_id == user.id).all()
    return [{"course_id": p.course_id, "percentage": p.percentage} for p in progress]

@router.put("/{course_id}")
async def update_progress(course_id: int, percentage: float, token: str = Depends(verify_token), db: Session = Depends(get_db)):
    user = token
    progress = db.query(models.Progress).filter(models.Progress.user_id == user.id, models.Progress.course_id == course_id).first()
    if not progress:
        progress = models.Progress(user_id=user.id, course_id=course_id, percentage=0.0)
        db.add(progress)
    progress.percentage = percentage
    db.commit()
    db.refresh(progress)
    return {"course_id": progress.course_id, "percentage": progress.percentage}