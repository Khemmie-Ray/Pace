# Pace - AI-Powered Reading Accountability App

**Pace** is an intelligent reading application that helps users build consistent reading habits through word-by-word reading, personalized goal setting, and AI-powered performance coaching.

![Pace Banner](./public/logo.png)

## Overview

Pace transforms reading from a passive activity into an accountable, measurable practice. Users upload their eBooks, set personalized reading goals, and receive AI-powered insights to improve their reading performance over time.

![SCreenshot](https://res.cloudinary.com/dy7el0ucd/image/upload/v1770161688/Screenshot_2026-02-03_at_23.48.03_xnialh.png)
---
![SCreenshot](https://res.cloudinary.com/dy7el0ucd/image/upload/v1770161687/Screenshot_2026-02-03_at_23.44.52_fxzixn.png)
---
![SCreenshot](https://res.cloudinary.com/dy7el0ucd/image/upload/v1770161687/Screenshot_2026-02-03_at_23.45.14_int6wr.png)

## Key Features

### Smart PDF Processing
- Upload PDF eBooks for instant parsing
- Automatic chapter detection and front matter removal
- Intelligent text extraction with support for complex book structures
- Preview and navigation system with 100-word paginated views

### Personalized Goal Setting
- Set custom word count goals
- Configure reading speed (Words Per Minute)
- Start reading from any chapter or specific word
- Estimated completion time calculations

### Unique Reading Interface
- **One-word-at-a-time display** - Eliminates distractions
- Adjustable reading speed (WPM-based pacing)
- Manual navigation controls (play, pause, skip forward/backward)
- Real-time progress tracking
- Visual progress indicators

### AI-Powered Performance Coaching
- Automated session analysis using Google Gemini
- Personalized feedback on reading performance
- Actionable improvement suggestions
- Smart goal recommendations for next sessions

### Advanced Observability with Opik
- Complete AI interaction tracking
- Input/output logging for all AI calls
- Performance metrics and token usage monitoring
- Production-ready observability dashboard

### Real-Time Analytics
- Live WPM tracking (target vs. actual)
- Completion rate monitoring
- Session duration tracking
- Progress visualization

## Technical Architecture

### Tech Stack

**Frontend:**
- Next.js 16 (App Router)
- React 19 with TypeScript
- Tailwind CSS for styling
- Lucide React for icons

**Backend:**
- Next.js API Routes (server-side)
- PDF.js for document parsing

**AI & Observability:**
- Google Gemini AI (gemini-2.5-flash)
- Opik for AI observability and tracking
- Integrated monitoring and evaluation

**State Management:**
- React Context API
- Custom hooks for reading logic

### Project Structure

```
pace/
├── app/
│   ├── api/
│   │   └── ai/
│   │       └── analyze-session/
│   │           └── route.ts          # AI analysis endpoint
│   ├── get-started/
│   │   └── page.tsx                  # Main reading interface
│   └── layout.tsx
├── components/
│   └── getStarted/
│       ├── SetGoal.tsx               # Goal setting & PDF upload
│       ├── Read.tsx                  # Word-by-word reader
│       └── AssessGoal.tsx            # Performance analytics
└── shared/
│       ├── Header.tsx               # App logo and navigtion links            
│       └── Footer.tsx 
├── contexts/
│   └── ReadingContext.tsx            # Global reading state
├── lib/
│   ├── ai/
│   │   └── geminiClient.ts           # Gemini AI client with Opik
│   └── pdf/
│       └── pdfParser.ts              # PDF processing logic
└── .env.local                        # Environment variables
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Google Gemini API key
- Opik account and API key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/pace.git
cd pace
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
OPIK_API_KEY=your_opik_api_key_here
OPIK_WORKSPACE=your_opik_workspace_name
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Getting API Keys

**Google Gemini API:**
1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Click "Get API Key"
3. Copy your API key
4. (Optional) Activate $300 free Google Cloud credits for higher rate limits

**Opik:**
1. Sign up at [Comet.com](https://www.comet.com/signup)
2. Navigate to Opik project settings
3. Copy your API key and workspace name

## How to Use

### 1. Upload Your Book
- Click the upload area or drag & drop a PDF file
- Supported: PDF files up to 10MB
- Or use "Sample Data" to test with dummy content

### 2. Set Your Goal
- Choose a word count goal (e.g., 500 words)
- Set your target reading speed (e.g., 200 WPM)
- Preview the book content (paginated, 100 words per page)
- Select a starting point (beginning, specific chapter, or any word)

### 3. Start Reading
- Words appear one at a time at your set pace
- Use controls: Play, Pause, Skip Forward/Back, Reset
- Track live progress: words read, actual WPM, completion %

### 4. Review Performance
- After completing your goal, AI analyzes your session
- View personalized insights:
  - Performance summary
  - What you did well
  - Areas for improvement
  - Suggested next goal

### 5. Monitor AI Quality
- Check Opik dashboard for all AI interactions
- Review inputs, outputs, and token usage
- Track AI performance over time

## Future Enhancements

- [ ] localStorage integration for resume reading
- [ ] Multi-session progress tracking
- [ ] Reading streaks and achievements
- [ ] Social features (reading groups, leaderboards)
- [ ] Mobile app (React Native)
- [ ] Voice reading mode
- [ ] Reading analytics dashboard
- [ ] Book recommendations based on reading patterns

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linter
npm run lint

# Build for production
npm run build
```

## Opik Integration

Pace uses Opik for comprehensive AI observability:

- **Automatic tracking** of all Gemini AI calls
- **Input/output logging** for debugging
- **Token usage monitoring** for cost optimization
- **Performance metrics** for quality assurance
- **Error tracking** for reliability

View Pace traces below: ![Opik Dashboard](https://res.cloudinary.com/dy7el0ucd/image/upload/v1770161687/Screenshot_2026-02-04_at_00.18.42_xdrczc.png)

##  Author

**Pace** was built for the Encode Commit To Change: An AI Agents Hackathon by:
- Oluwakemi Atoyebi(Khemmie-Ray) - Full Stack Developer

## Acknowledgments

- Google Gemini for AI capabilities
- Opik/Comet for observability platform
- Next.js team for the amazing framework
- PDF.js for document processing
- The open-source community

## Contact

For questions or feedback:
- Email: atokemmy@gmail.com
- GitHub: [@Khemmie-Ray](https://github.com/Khemmie-Ray)
- Demo: [Live Demo Link](https://pace-theta.vercel.app)

## Show Your Support

If you find Pace helpful, please give it a ⭐️ on GitHub!

---

**Built with ❤️ for readers who want to build better habits.**