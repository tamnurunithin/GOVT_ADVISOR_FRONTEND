import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const loadingSteps = [
  "🔍 Searching government schemes...",
  "📄 Reading official documents...",
  "🧠 Understanding your question...",
  "⚡ Retrieving relevant information...",
  "🤖 Generating your answer...",
];

const TypingIndicator = () => {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % loadingSteps.length);
    }, 1400);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6 flex justify-start"
    >
      <div className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-white shadow-md">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
          <div>
            <h4 className="font-semibold text-slate-800">
              🤖 GovAssist AI
            </h4>

            <p className="text-xs text-slate-500">
              Processing your request...
            </p>
          </div>
        </div>

        {/* Loading Content */}
        <div className="px-5 py-5">
          <motion.p
            key={stepIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-5 text-slate-700"
          >
            {loadingSteps[stepIndex]}
          </motion.p>

          <div className="flex gap-2">
            <span className="h-3 w-3 animate-bounce rounded-full bg-blue-500"></span>

            <span
              className="h-3 w-3 animate-bounce rounded-full bg-blue-500"
              style={{ animationDelay: "0.15s" }}
            ></span>

            <span
              className="h-3 w-3 animate-bounce rounded-full bg-blue-500"
              style={{ animationDelay: "0.3s" }}
            ></span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TypingIndicator;