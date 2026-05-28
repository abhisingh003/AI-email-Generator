import os
import logging
from openai import OpenAI

logger = logging.getLogger(__name__)

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)

MODEL_NAME = os.getenv(
    "MODEL_NAME",
    "gpt-4.1-mini"
)


async def generate_email(
    purpose: str,
    recipient_type: str,
    tone: str,
    length: str,
    key_points: str,
    language: str = "English",
):
    try:
        logger.info(
            "Calling OpenAI API for email generation"
        )

        prompt = f"""
You are an expert professional email writer.

Generate a clear, professional, and human-sounding email.

Purpose:
{purpose}

Recipient:
{recipient_type}

Tone:
{tone}

Length:
{length}

Language:
{language}

Key Points:
{key_points}

Avoid robotic wording.
Make the email natural and polished.
"""

        response = client.chat.completions.create(
            model=MODEL_NAME,
            messages=[
                {
                    "role": "system",
                    "content": "You are a professional email writer."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.7,
        )

        email_text = (
            response
            .choices[0]
            .message
            .content
        )

        tokens_used = (
            response
            .usage
            .total_tokens
            if response.usage
            else 0
        )

        return {
            "email": email_text,
            "tokens_used": tokens_used,
            "status": "success",
        }

    except Exception as e:
        logger.exception(
            f"OpenAI generation failed: {e}"
        )
        raise Exception(
            "Failed to generate email. Please try again."
        )