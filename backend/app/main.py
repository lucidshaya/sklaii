from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import auth, courses, progress, profile, settings
from .ai.recommendations import router as ai_router
from .database import engine, Base

app = FastAPI(title="Skilled Learners API")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Adjust for your frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(courses.router, prefix="/api/courses", tags=["courses"])
app.include_router(progress.router, prefix="/api/progress", tags=["progress"])
app.include_router(profile.router, prefix="/api/profile", tags=["profile"])
app.include_router(settings.router, prefix="/api/settings", tags=["settings"])
app.include_router(ai_router, prefix="/api/ai", tags=["ai"])

# Create tables
Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)