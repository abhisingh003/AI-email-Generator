"""
Email prompt engineering templates
"""

class EmailPrompt:
    """Handles email prompt generation with proper engineering"""
    
    # Length guidelines
    LENGTH_GUIDELINES = {
        "Short": "Keep it brief and concise (3-4 sentences)",
        "Medium": "Standard length (5-8 sentences)",
        "Detailed": "Comprehensive and thorough (10-12 sentences)"
    }
    
    # Tone characteristics
    TONE_CHARACTERISTICS = {
        "Formal": "Use formal language, professional structure, traditional greeting and closing",
        "Professional": "Use professional language, warm but business-appropriate tone",
        "Friendly": "Use warm, approachable language while maintaining professionalism",
        "Persuasive": "Use compelling arguments, clear benefits, and call-to-action",
        "Apology": "Show genuine remorse, explain briefly, offer solution, maintain professionalism",
        "Follow-up": "Reference previous communication, add new value, maintain momentum"
    }
    
    def __init__(self, purpose: str, recipient_type: str, tone: str, 
                 length: str, key_points: str):
        """Initialize email prompt parameters"""
        self.purpose = purpose
        self.recipient_type = recipient_type
        self.tone = tone
        self.length = length
        self.key_points = key_points
    
    def build_prompt(self) -> str:
        """Build the complete email generation prompt"""
        
        tone_style = self.TONE_CHARACTERISTICS.get(self.tone, "professional")
        length_guide = self.LENGTH_GUIDELINES.get(self.length, "standard length")
        
        prompt = f"""Generate a professional email with these specifications:

PURPOSE:
{self.purpose}

RECIPIENT TYPE:
{self.recipient_type}

TONE:
{self.tone} - {tone_style}

LENGTH:
{length_guide}

KEY POINTS TO INCLUDE:
{self.key_points}

REQUIREMENTS:
- Write a clear, professional, and human-sounding email
- Include appropriate greeting and closing
- Make it compelling and well-structured
- Avoid robotic or generic wording
- Use natural language and conversational flow
- Ensure all key points are covered naturally

Please generate only the email content, starting with the greeting and ending with the closing. Do not include any additional text or explanations."""
        
        return prompt
    
    def __repr__(self) -> str:
        """String representation of the prompt"""
        return (f"EmailPrompt(purpose='{self.purpose}', "
                f"recipient='{self.recipient_type}', tone='{self.tone}', "
                f"length='{self.length}')")
