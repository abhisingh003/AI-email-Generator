# AI Mail Generator 🚀 live link - https://ai-email-generator-rose.vercel.app/

A modern, professional AI-powered email generation web application. Create polished, human-sounding emails instantly with smart AI prompts.

## Features ✨

- **Instant Email Generation**: Generate professional emails in seconds powered by OpenAI
- **Smart Tone Controls**: Choose from Formal, Professional, Friendly, Persuasive, Apology, or Follow-up
- **Customizable Length**: Short, Medium, or Detailed emails
- **Multi-language Support**: Generate emails in 7+ languages
- **Premium UI/UX**: Modern glassmorphism design with smooth animations
- **One-Click Copy**: Quickly copy or download generated emails as TXT
- **Fast & Responsive**: Optimized for all devices and lightning-fast performance

## Tech Stack 💻

### Frontend
- **React 18** + **TypeScript** - UI framework
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Modern styling
- **Framer Motion** - Smooth animations
- **Lucide Icons** - Beautiful icons
- **Axios** - HTTP client

### Backend
- **FastAPI** - High-performance Python framework
- **OpenAI API** - AI email generation
- **Pydantic** - Data validation
- **Uvicorn** - ASGI server

### Deployment
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Production web server

## Project Structure 📁

```
.
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Landing & Generator pages
│   │   ├── hooks/           # Custom React hooks
│   │   ├── services/        # API communication
│   │   ├── animations/      # Framer Motion configs
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Global styles
│   ├── Dockerfile           # Frontend container
│   ├── nginx.conf          # Nginx configuration
│   ├── package.json        # Dependencies
│   ├── tailwind.config.js  # Tailwind configuration
│   └── vite.config.ts      # Vite configuration
│
├── backend/                 # FastAPI backend
│   ├── app/
│   │   ├── api/            # API routes
│   │   ├── services/       # Business logic
│   │   ├── prompts/        # AI prompt engineering
│   │   ├── utils/          # Utilities & config
│   │   └── main.py         # FastAPI app
│   ├── Dockerfile          # Backend container
│   ├── requirements.txt    # Python dependencies
│   ├── .env               # Environment variables (local)
│   └── .env.example       # Environment template
│
├── docker-compose.yml      # Docker Compose config
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## Getting Started 🎯

### Prerequisites
- **Node.js** 18+ (for frontend)
- **Python** 3.11+ (for backend)
- **OpenAI API Key** - Get one at https://platform.openai.com/api-keys
- **Docker & Docker Compose** (for containerized deployment)

---

## ⚡ QUICKSTART (Recommended)

### Run with Docker Compose (One Command!)

```bash
# 1. Set up OpenAI API key
cd backend
cp .env.example .env
# Edit .env and add your OPENAI_API_KEY

# 2. Start everything
cd ..
docker-compose up --build
```

**Done!** Open http://localhost in your browser

- **Frontend**: http://localhost
- **Backend API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs

---

## 🖥️ Run Locally (Development Mode)

### Backend Setup

#### Step 1: Python Environment
```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate it
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate
```

#### Step 2: Install & Configure
```bash
pip install -r requirements.txt

# Copy environment template
cp .env.example .env

# Edit .env file (add your OpenAI key)
# Windows: notepad .env
# macOS/Linux: nano .env
```

**Edit backend/.env:**
```env
OPENAI_API_KEY=sk-your-actual-key-here
ENVIRONMENT=development
DEBUG=true
```

**Get your OpenAI API key:**
1. Go to https://platform.openai.com/api-keys
2. Click "Create new secret key"
3. Copy and paste it into your .env file

#### Step 3: Run Backend
```bash
# Make sure you're in backend/ directory with venv activated
uvicorn app.main:app --reload
```

**Backend is running at**: http://localhost:8000

**Verify it works:**
```bash
# In another terminal
curl http://localhost:8000/health
```

**Expected response:**
```json
{
  "status": "healthy",
  "service": "AI Email Generator API",
  "version": "1.0.0"
}
```

---

### Frontend Setup

#### Step 1: Install Dependencies
```bash
cd frontend
npm install
```

#### Step 2: Configure API
Create **frontend/.env.local**:
```env
VITE_API_URL=http://localhost:8000/api
```

#### Step 3: Run Dev Server
```bash
npm run dev
```

**Frontend is running at**: http://localhost:5173

---

### Test Everything

1. Open http://localhost:5173
2. Click "Launch App"
3. Fill the form:
   - **Purpose**: "Request a meeting"
   - **Recipient**: "CEO"
   - **Tone**: "Professional"
   - **Length**: "Medium"
   - **Key Points**: "Discuss quarterly goals"
4. Click "Generate Email"
5. See your AI-generated email!
6. Click "Copy" or "Download"

---

## 🐳 Docker Compose Guide

### Start Everything
```bash
docker-compose up --build
```

### Stop Everything
```bash
docker-compose down
```

### View Logs
```bash
docker-compose logs -f
docker-compose logs -f backend
docker-compose logs -f frontend
```

### Rebuild Specific Service
```bash
docker-compose up --build backend
docker-compose up --build frontend
```

### Run Command in Container
```bash
docker-compose exec backend bash
docker-compose exec frontend sh
```

---

## 📡 API Reference

### Generate Email
```
POST /api/generate-email

{
  "purpose": "Request partnership",
  "recipient_type": "CEO",
  "tone": "Professional",
  "length": "Medium",
  "key_points": "Mutual benefits, timeline",
  "language": "English"
}

Response:
{
  "email": "Dear CEO,\n\n...",
  "tokens_used": 150,
  "status": "success"
}
```

### Check API Health
```
GET /health

Response:
{
  "status": "healthy",
  "service": "AI Email Generator API",
  "version": "1.0.0"
}
```

### Interactive API Docs
Visit: http://localhost:8000/docs

---

## 🔧 Troubleshooting

### Frontend can't connect to backend

**Check if backend is running:**
```bash
curl http://localhost:8000/health
```

**Fix API URL:**
- Ensure `frontend/.env.local` has correct `VITE_API_URL`
- Restart frontend: `npm run dev`

### OpenAI API errors

**"OpenAI authentication failed"**
- Check API key in `backend/.env` is correct
- Key must start with `sk-`
- Verify key hasn't expired at platform.openai.com

### Port already in use

**Check what's using port 8000:**
```bash
# Windows
netstat -ano | findstr :8000
# macOS/Linux
lsof -i :8000
```

**Kill the process or use different port:**
```bash
npm run dev -- --port 3000
```

### Docker issues

```bash
# Clean everything and rebuild
docker-compose down
docker system prune -a
docker-compose up --build
```

---

## 🚀 Deployment

### Deploy Backend to Render

1. Push to GitHub
2. Create new Render service → **Python**
3. Connect repository
4. **Build command**: `pip install -r requirements.txt`
5. **Start command**: `uvicorn app.main:app --host 0.0.0.0`
6. Add env var: `OPENAI_API_KEY` (your key)
7. Deploy!

### Deploy Frontend to Vercel

```bash
npm install -g vercel
cd frontend
vercel

# Set environment variable in dashboard:
# VITE_API_URL=https://your-backend.onrender.com/api
```

### Deploy Frontend to Netlify

```bash
# Build first
npm run build

# Then drag dist/ folder to https://app.netlify.com
```

---

## 📚 Development

### Build Frontend for Production
```bash
cd frontend
npm run build
npm run preview  # Preview production build
```

### Format Code
```bash
# Frontend
cd frontend
npx prettier --write src/

# Backend (requires black, isort)
cd backend
black app/
isort app/
```

---

## 🔐 Environment Variables

### Backend (.env)

```env
# Required
OPENAI_API_KEY=sk-your-key-here

# Optional
ENVIRONMENT=development        # development | production
DEBUG=true                      # true | false
BACKEND_HOST=0.0.0.0          # Server host
BACKEND_PORT=8000             # Server port
```

### Frontend (.env.local)

```env
VITE_API_URL=http://localhost:8000/api
```

---

## 📊 Performance

- **Frontend**: Vite (instant HMR), Code splitting, Image optimization
- **Backend**: Async FastAPI, Connection pooling, Efficient prompting
- **Animations**: 60fps with Framer Motion, GPU-accelerated CSS
- **Bundle Size**: Frontend ~150KB gzipped

---

## 🤝 Contributing

1. Fork repository
2. Create feature branch: `git checkout -b feature/name`
3. Commit: `git commit -m 'Add feature'`
4. Push: `git push origin feature/name`
5. Open Pull Request

---

## 📄 License

MIT License - Free for personal and commercial use

---

## 💡 Tips

1. **Performance**: Enable browser caching for faster loads
2. **Security**: Never commit `.env` files with real API keys
3. **Testing**: Use `/docs` endpoint for API testing
4. **Scaling**: Use environment-based configuration for multiple environments

---

**Built with ❤️ using React, FastAPI, and OpenAI**

Happy email generating! 🎉
