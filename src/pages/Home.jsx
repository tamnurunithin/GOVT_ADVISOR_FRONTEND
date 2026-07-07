import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ChatBubble from "../components/chat/ChatBubble";
import TypingIndicator from "../components/chat/TypingIndicator";
import ChatInput from "../components/chat/ChatInput";
import PromptCard from "../components/ui/PromptCard";

const Home = ({ messages, loading, onSend }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const prompts = [
    {
      icon: "🎓",
      title: "Education",
      description: "Scholarships and higher education schemes",
    },
    {
      icon: "🌾",
      title: "Agriculture",
      description: "Farmer welfare and agriculture schemes",
    },
    {
      icon: "👩",
      title: "Women Welfare",
      description: "Women empowerment and financial support",
    },
    {
      icon: "🚀",
      title: "Startups",
      description: "Funding and startup assistance",
    },
    {
      icon: "💼",
      title: "Employment",
      description: "Jobs and skill development schemes",
    },
    {
      icon: "🏥",
      title: "Healthcare",
      description: "Health insurance and medical assistance",
    },
  ];

  const handlePromptClick = (title) => {
    const promptMap = {
      Education: "What scholarships are available for students?",
      Agriculture: "What schemes are available for farmers?",
      "Women Welfare": "What schemes are available for women?",
      Startups: "What startup funding schemes are available?",
      Employment: "What employment schemes are available?",
      Healthcare: "What healthcare schemes are available?",
    };

    onSend(promptMap[title]);
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center px-6">

      {messages.length === 0 && (
        <>
          {/* Hero */}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 text-center"
          >
            <div className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              🇮🇳 AI Powered Government Scheme Advisor
            </div>

            <h1 className="mt-6 text-5xl font-extrabold text-slate-800">
              GovAssist AI
            </h1>

            <p className="mt-5 text-xl text-slate-600">
              Discover Government Schemes in Seconds
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-500">
              Powered by LangChain, FAISS, FastAPI and Groq Llama,
              GovAssist AI helps citizens discover the most relevant
              government schemes using official documents.
            </p>
          </motion.div>

          {/* Feature Cards */}

          <div className="mt-16 grid w-full gap-6 md:grid-cols-3">

            <div className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="text-5xl">
                🤖
              </div>

              <h3 className="mt-4 text-xl font-bold">
                AI Powered
              </h3>

              <p className="mt-3 text-slate-500">
                Uses Retrieval-Augmented Generation to answer only from
                official government documents.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="text-5xl">
                ⚡
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Lightning Fast
              </h3>

              <p className="mt-3 text-slate-500">
                FAISS semantic search instantly retrieves the most relevant
                government scheme information.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="text-5xl">
                🛡️
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Trusted Information
              </h3>

              <p className="mt-3 text-slate-500">
                Responses are generated only from uploaded government PDFs,
                reducing AI hallucinations.
              </p>
            </div>

          </div>

          {/* Categories */}

          <div className="mt-20 w-full">

            <div className="mb-8 text-center">

              <h2 className="text-3xl font-bold text-slate-800">
                Popular Categories
              </h2>

              <p className="mt-3 text-slate-500">
                Click a category below to instantly ask GovAssist AI.
              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {prompts.map((prompt, index) => (
                <div
                  key={index}
                  onClick={() => handlePromptClick(prompt.title)}
                  className="cursor-pointer"
                >
                  <PromptCard
                    icon={prompt.icon}
                    title={prompt.title}
                    description={prompt.description}
                  />
                </div>
              ))}
            </div>

          </div>
        </>
      )}

      {/* Chat Area */}
      <div className="mt-12 w-full max-w-5xl">
              <AnimatePresence>

          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <ChatBubble
                role={message.role}
                content={message.content}
              />
            </motion.div>
          ))}

        </AnimatePresence>

        {loading && (
          <TypingIndicator />
        )}

        <div ref={bottomRef} />

      </div>

      <div className="mt-8 w-full max-w-5xl">

        <ChatInput
          onSend={onSend}
          loading={loading}
        />

      </div>

    </div>
  );
};

export default Home;