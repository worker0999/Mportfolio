import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, RefreshCw, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Question {
  q: string;
  opts: { text: string; points: number }[];
}

export default function VibeQuiz() {
  const [step, setStep] = useState<'intro' | 'qa' | 'result'>('intro');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);

  const questions: Question[] = [
    {
      q: "What's your preferred way to spend a quiet weekend?",
      opts: [
        { text: "Exploring new places & traveling", points: 25 },
        { text: "Spending quality time with family", points: 25 },
        { text: "Reading beneficial content & learning", points: 22 },
        { text: "Engaging in deep conversations with friends", points: 24 },
      ],
    },
    {
      q: "Which value is most vital in your ideal partnership?",
      opts: [
        { text: "Islamic mindset & character", points: 25 },
        { text: "Sincerity, mercy and trust", points: 25 },
        { text: "Family connection & mutual support", points: 23 },
        { text: "Personal growth & career ambitions", points: 20 },
      ],
    },
    {
      q: "Your outlook towards lifestyle and travel?",
      opts: [
        { text: "Spontaneous trips and active hiking", points: 23 },
        { text: "Balanced travels mixed with quiet stays", points: 25 },
        { text: "Discovering local history & cultures", points: 25 },
        { text: "Simple retreats, prioritizing comfort", points: 18 },
      ],
    },
    {
      q: "How do you maintain a healthy work-life balance?",
      opts: [
        { text: "Faith, family, and job alignment", points: 25 },
        { text: "Workouts, running, and physical fitness", points: 25 },
        { text: "Supporting each other's career growth", points: 20 },
        { text: "Prioritizing shared family moments first", points: 24 },
      ],
    },
  ];

  const handleStart = () => {
    setScore(0);
    setCurrentIdx(0);
    setStep('qa');
  };

  const handleAnswer = (points: number) => {
    const nextScore = score + points;
    setScore(nextScore);

    if (currentIdx < questions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setStep('result');
      // Trigger canvas-confetti
      const matchPercentage = Math.min(100, Math.max(75, nextScore));
      if (matchPercentage >= 80) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#C5A059', '#D4B26F', '#FAF9F6'],
        });
      }
    }
  };

  const handleRestart = () => {
    setStep('intro');
  };

  const getResults = () => {
    const matchPercentage = Math.min(100, Math.max(75, score));
    let feedback = '';

    if (matchPercentage >= 90) {
      feedback = "Outstanding match! We share a high degree of mutual values, lifestyle aspirations, and an active outlook towards life. Let's definitely connect!";
    } else if (matchPercentage >= 80) {
      feedback = "Beautiful alignment! We value similar balances of family, career, and personal growth. A conversation could unlock wonderful common grounds.";
    } else {
      feedback = "Comfortable sync! We have a complementary set of values that can build a balanced, stable relationship. We'd love to chat and know more.";
    }

    return { percentage: matchPercentage, feedback };
  };

  const progressPercent = ((currentIdx) / questions.length) * 100;

  return (
    <section id="quiz" className="py-24 px-6 max-w-7xl mx-auto flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-16 relative">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          Vibe Matcher
        </h2>
        <p className="font-sans text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm md:text-base">
          A fun, lighthearted icebreaker to check our lifestyle alignment!
        </p>
        <div className="w-12 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Quiz Card */}
      <div className="w-full max-w-2xl bg-white/70 dark:bg-emerald-950/40 backdrop-blur-md border border-gold-500/10 dark:border-gold-500/15 rounded-3xl overflow-hidden shadow-2xl p-8 md:p-12 relative">
        {/* Progress Bar (Only during QA) */}
        {step === 'qa' && (
          <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100 dark:bg-slate-800">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-500 to-gold-600"
              style={{ width: `${progressPercent}%` }}
              layoutId="quizProgress"
            />
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === 'intro' && (
            <motion.div
              key="intro"
              className="flex flex-col items-center text-center py-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mb-6 text-gold-500">
                <Heart className="w-8 h-8 fill-current" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4">
                Let's Check Our Vibes!
              </h3>
              <p className="font-sans text-sm md:text-base text-slate-500 dark:text-slate-400 mb-8 max-w-md leading-relaxed">
                Answer 4 simple questions about your values, travel choices, and weekend ideas to see how compatible our lifestyles are.
              </p>
              <button
                onClick={handleStart}
                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-sans font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg hover:shadow-gold-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                Start Vibe Check
              </button>
            </motion.div>
          )}

          {step === 'qa' && (
            <motion.div
              key={currentIdx}
              className="flex flex-col py-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <span className="font-sans text-xs font-bold text-gold-500 uppercase tracking-widest mb-2">
                Question {currentIdx + 1} of {questions.length}
              </span>
              <h4 className="font-sans font-bold text-lg md:text-xl text-slate-800 dark:text-white mb-8">
                {questions[currentIdx].q}
              </h4>
              <div className="flex flex-col gap-3">
                {questions[currentIdx].opts.map((opt, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => handleAnswer(opt.points)}
                    className="w-full text-left bg-slate-50 dark:bg-emerald-950/20 hover:bg-gold-500/10 dark:hover:bg-gold-500/10 border border-slate-100 dark:border-transparent hover:border-gold-500/40 dark:hover:border-gold-500/30 rounded-2xl px-6 py-4.5 font-sans text-sm font-semibold text-slate-700 dark:text-slate-350 transition-all cursor-pointer"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {opt.text}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'result' && (
            <motion.div
              key="result"
              className="flex flex-col items-center text-center py-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mb-6 text-gold-500">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-2">
                Compatibility Score
              </h3>
              <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gold-500 to-[#E2C999] bg-clip-text text-transparent mb-6">
                {getResults().percentage}%
              </div>
              <p className="font-sans text-sm md:text-base text-slate-500 dark:text-slate-400 mb-8 max-w-md leading-relaxed">
                {getResults().feedback}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={handleRestart}
                  className="flex items-center gap-2 bg-transparent border border-gold-500 text-slate-900 dark:text-white hover:bg-gold-500/10 font-sans font-semibold text-sm px-6 py-3.5 rounded-full transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                >
                  <RefreshCw className="w-4 h-4 text-gold-500" /> Try Again
                </button>
                <a
                  href="#connect"
                  className="flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-sans font-semibold text-sm px-6 py-3.5 rounded-full shadow-lg hover:shadow-gold-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" /> Express Interest
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
