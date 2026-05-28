"""
Environment variables and configuration
"""

import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def get_openai_api_key() -> str:
    """Get OpenAI API key from environment"""
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise ValueError("OPENAI_API_KEY environment variable is not set")
    return api_key

def get_environment() -> str:
    """Get application environment"""
    return os.getenv("ENVIRONMENT", "development")

def get_debug_mode() -> bool:
    """Get debug mode setting"""
    return os.getenv("DEBUG", "false").lower() == "true"
