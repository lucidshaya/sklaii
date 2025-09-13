from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError
from passlib.context import CryptContext
from sqlalchemy.orm import Session
from .. import models, database
import os
from dotenv import load_dotenv

load_dotenv()
CLERK_SECRET_KEY = os.getenv("CLERK_SECRET_KEY")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/auth/token")
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

router = APIRouter()

def get_db():
    db = next(database.get_db())
    try:
        yield db
    finally:
        db.close()

def verify_token(token: str, db: Session = Depends(get_db)):
    try:
        payload = jwt.decode(token, CLERK_SECRET_KEY, algorithms=["HS256"])
        clerk_id = payload.get("sub")
        if not clerk_id:
            raise HTTPException(status_code=401, detail="Invalid token")
        user = db.query(models.User).filter(models.User.clerk_id == clerk_id).first()
        if not user:
            user = models.User(clerk_id=clerk_id, email=payload.get("email"), name=payload.get("name"))
            db.add(user)
            db.commit()
            db.refresh(user)
        return user
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

@router.get("/me")
async def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    user = verify_token(token, db)
    return {"id": user.id, "email": user.email, "name": user.name}