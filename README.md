# CLASSE CROISSANT - TEF/TCF Speaking & Writing Toolkit

Premium French proficiency platform for Indian students preparing for TEF/TCF exams.

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account (free tier)
- OpenAI API key

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create `.env.local`:**
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
   OPENAI_API_KEY=your_openai_api_key
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Visit:** http://localhost:3000

## Architecture

### Frontend
- Next.js 14 with App Router
- React 18 with TypeScript
- TailwindCSS for styling
- Framer Motion for animations
- Recharts for dashboards

### Backend
- Supabase for authentication & database
- OpenAI API for evaluations & diagnostics
- Vercel for deployment

### Database Schema

**Users:**
- id (UUID, primary)
- email
- full_name
- created_at
- current_clb (0-12)
- target_clb
- study_streak
- total_practice_hours

**Assessments:**
- id (UUID, primary)
- user_id (FK)
- assessment_type (speaking/writing)
- score (0-100)
- fluency (0-10)
- grammar (0-10)
- vocabulary (0-10)
- pronunciation (0-10)
- structure (0-10)
- register (0-10)
- feedback
- created_at

**Progress:**
- id (UUID, primary)
- user_id (FK)
- date
- prompts_completed
- score
- weak_areas
- created_at

**Leaderboard:**
- id (UUID, primary)
- user_id (FK)
- category (speaking_challenge/writing_challenge/most_improved)
- score
- rank
- created_at

## Features

### 1. Dashboard
- CLB estimate with progress tracking
- Weekly performance charts
- Study streak counter
- Weakness summary with recommendations
- Repeated error analysis
- Quick module access

### 2. Speaking Module
- 150 curated TEF/TCF prompts
- Prompt categories & randomizer
- Browser-based recording
- Timer with TEF/TCF timing
- Automatic transcript generation
- AI-powered fluency analysis
- Scores: fluency, grammar, vocabulary, pronunciation, structure, register

### 3. Writing Module
- 70 unique writing prompts
- Rich text editor with formatting
- AI analysis & feedback
- Auto-corrected versions
- B2 level expression suggestions
- CLB impact assessment

### 4. Diagnostic Engine
- Identify weak patterns from assessment history
- Detect repeated errors & grammar gaps
- Missing connectors analysis
- Current vs potential CLB prediction
- Actionable improvement recommendations

### 5. Grammar Lab
- Comprehensive grammar guides (English + French)
- Topics: tenses, subjonctif, conditionnel, pronouns, connectors
- Interactive quizzes
- Progress tracking per topic

### 6. CRS + CLB Calculator
- Input: listening, reading, writing, speaking scores
- Output: CLB level, CRS points, immigration impact
- Canadian PR pathway visualization

### 7. AI Study Planner
- Weekly personalized study plans
- Based on identified weaknesses
- Time allocation recommendations
- Daily focus areas
- CLB improvement projections

### 8. Community Leaderboard
- Speaking challenge rankings
- Writing challenge rankings
- Most improved students
- Professional-style design only

### 9. Mock Exam Mode
- Full TEF exam simulation
- Realistic timing & countdown
- Follow-up questions
- Final CLB report generation
- Performance analytics

## Free Tier Optimization

- **Supabase:** 500K read operations/month, 100K write operations/month
- **OpenAI:** $5 free credits (demo/test evaluations)
- **Vercel:** Free tier with unlimited deployments
- **Storage:** Leverage Vercel KV or Supabase file storage

## Cost Estimates (Monthly)

- Supabase: $0 (free tier) or $25+ (production)
- OpenAI API: Variable ($0.01-$0.02 per transcript evaluation)
- Vercel: $0 (free tier) or $20+ (production)
- **Total estimated:** $0-50/month at launch

## Deployment

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial CLASSE CROISSANT setup"
   git push
   ```

2. **Deploy to Vercel:**
   - Connect GitHub repo
   - Add environment variables
   - Deploy

3. **Set up Supabase:**
   - Create tables from schema
   - Enable Row Level Security (RLS)
   - Test authentication flow

## Next Steps

1. Build Speaking Module with MediaRecorder API
2. Build Writing Module with text editor
3. Implement AI evaluation endpoints
4. Create Grammar Lab content & quizzes
5. Build CRS Calculator logic
6. Add Leaderboard & Community features
7. Develop Mock Exam mode
8. Add email notifications
9. Launch beta with early users
10. Optimize AI costs & performance

## Support

For issues, feature requests, or questions, visit our documentation or contact support@classecroissant.com

---

**CLASSE CROISSANT** - Master TEF & TCF with Precision
