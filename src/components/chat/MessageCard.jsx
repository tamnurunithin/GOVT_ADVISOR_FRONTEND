import { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";

const MessageCard = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full rounded-2xl border border-slate-200 bg-white shadow-md"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <div>
          <h3 className="font-semibold text-slate-800">
            🤖 GovAssist AI
          </h3>

          <p className="text-xs text-slate-500">
            AI Government Scheme Advisor
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="rounded-lg p-2 transition hover:bg-slate-100"
          title="Copy Response"
        >
          {copied ? (
            <FaCheck className="text-green-600" />
          ) : (
            <FaRegCopy className="text-slate-600" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="px-6 py-5">
        <div className="prose prose-slate max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </motion.div>
  );
};

export default MessageCard;