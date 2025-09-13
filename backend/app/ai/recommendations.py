from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import models, database
from .auth import verify_token
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from typing import List

router = APIRouter()

def get_db():
    db = next(database.get_db())
    try:
        yield db
    finally:
        db.close()

def get_course_features(db: Session):
    courses = db.query(models.Course).all()
    features = np.array([[1 if c.category == "math" else 0, 1 if c.category == "science" else 0] for c in courses])
    return features, [c.id for c in courses]

@router.get("/recommendations")
async def get_recommendations(course_id: int, token: str = Depends(verify_token), db: Session = Depends(get_db)):
    user = token
    features, course_ids = get_course_features(db)
    idx = course_ids.index(course_id)
    similarity = cosine_similarity([features[idx]], features)[0]
    similar_indices = similarity.argsort()[::-1][1:4]  # Top 3 recommendations
    recommendations = [course_ids[i] for i in similar_indices]
    return {"recommended_course_ids": recommendations}