import { useState } from "react";
import { quizQuestions, quizResults } from "@/data/quiz";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuizPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const question = quizQuestions[currentQ];
  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const result = quizResults.find((r) => totalScore >= r.range[0] && totalScore <= r.range[1]);

  const handleAnswer = (score: number) => {
    const next = { ...answers, [question.id]: score };
    setAnswers(next);
    if (currentQ < quizQuestions.length - 1) {
      setTimeout(() => setCurrentQ(currentQ + 1), 200);
    } else {
      setTimeout(() => setShowResult(true), 200);
    }
  };

  const reset = () => {
    setAnswers({});
    setCurrentQ(0);
    setShowResult(false);
  };

  return (
    <div className="container mx-auto px-4 py-10 md:py-16 max-w-2xl">
      <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="mr-1.5 h-3.5 w-3.5" /> Back to home
      </Link>

      <h1 className="text-3xl font-extrabold text-foreground mb-2">How AI-Ready Is Your Product Practice?</h1>
      <p className="text-muted-foreground mb-8">A quick self-assessment to see where you stand — and what to explore next.</p>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div key={currentQ} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
            {/* Progress */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                  style={{ width: `${((currentQ + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground font-medium">
                {currentQ + 1}/{quizQuestions.length}
              </span>
            </div>

            <h2 className="text-xl font-bold text-foreground mb-5">{question.question}</h2>

            <div className="flex flex-col gap-3">
              {question.options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleAnswer(opt.score)}
                  className={`text-left px-4 py-3.5 rounded-lg border transition-all text-sm font-medium ${
                    answers[question.id] === opt.score
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-card text-foreground hover:border-primary/30 hover:bg-muted/50"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {currentQ > 0 && (
              <Button variant="ghost" size="sm" className="mt-4 text-muted-foreground" onClick={() => setCurrentQ(currentQ - 1)}>
                ← Previous
              </Button>
            )}
          </motion.div>
        ) : (
          result && (
            <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div className="rounded-lg border bg-card p-8 text-center mb-6">
                <div className="text-5xl mb-4">{result.emoji}</div>
                <h2 className="text-2xl font-extrabold text-foreground mb-2">You're: {result.title}</h2>
                <p className="text-muted-foreground mb-1">Score: {totalScore}/{quizQuestions.length * 3}</p>
                <p className="text-muted-foreground leading-relaxed mt-4">{result.description}</p>
              </div>

              <div className="rounded-lg border bg-card p-6 mb-6">
                <h3 className="font-bold text-foreground mb-3">Recommended Next Steps</h3>
                <ul className="space-y-2">
                  {result.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={reset}>
                  <RotateCcw className="mr-2 h-4 w-4" /> Retake Quiz
                </Button>
                <Link to="/start-here">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                    Start Exploring
                  </Button>
                </Link>
              </div>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}
