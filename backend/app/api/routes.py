from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import logging

from app.services.email_service import generate_email

router = APIRouter(prefix="/api")

logger = logging.getLogger(__name__)


class GenerateEmailRequest(BaseModel):
    purpose: str
    recipient_type: str
    tone: str
    length: str
    key_points: str
    language: str = "English"


@router.post("/generate-email")
async def create_email(
    request: GenerateEmailRequest
):
    try:
        logger.info(
            f"Generating email - Purpose: {request.purpose}, Tone: {request.tone}"
        )

        result = await generate_email(
            purpose=request.purpose,
            recipient_type=request.recipient_type,
            tone=request.tone,
            length=request.length,
            key_points=request.key_points,
            language=request.language,
        )

        return result

    except Exception as e:
        logger.error(
            f"Error generating email: {e}"
        )

        raise HTTPException(
            status_code=500,
            detail="Failed to generate email. Please try again."
        )


@router.get("/supported-tones")
async def supported_tones():
    return {
        "tones": [
            "Formal",
            "Professional",
            "Friendly",
            "Persuasive",
            "Apology",
            "Follow-up",
        ]
    }


@router.get("/supported-lengths")
async def supported_lengths():
    return {
        "lengths": [
            "Short",
            "Medium",
            "Detailed",
        ]
    }