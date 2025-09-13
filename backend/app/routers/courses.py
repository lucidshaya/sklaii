from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import models, database

router = APIRouter()

def get_db():
    db = next(database.get_db())
    try:
        yield db
    finally:
        db.close()

@router.get("/")
async def get_courses(db: Session = Depends(get_db)):
    courses = db.query(models.Course).all()
    return [{"id": c.id, "title": c.title, "description": c.description, "category": c.category} for c in courses]

@router.get("/{course_id}")
async def get_course(course_id: int, db: Session = Depends(get_db)):
    course = db.query(models.Course).filter(models.Course.id == course_id).first()
    if not course:
        raise HTTPException(status_code=404, detail="Course not found")
    return {"id": course.id, "title": course.title, "description": course.description, "category": course.category}