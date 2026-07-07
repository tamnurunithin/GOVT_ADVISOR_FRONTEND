import { motion } from "framer-motion";
import MessageCard from "./MessageCard";

const ChatBubble = ({ role, content }) => {
  const isUser = role === "user";

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className={`mb-6 flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {isUser ? (
        <div className="w-full max-w-3xl rounded-2xl bg-blue-600 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-blue-500 px-5 py-3">
            <div>
              <h4 className="font-semibold">
                👤 You
              </h4>

              <p className="text-xs text-blue-100">
                {time}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-5">
            <p className="whitespace-pre-wrap leading-7">
              {content}
            </p>
          </div>
        </div>
      ) : (
                <div className="w-full max-w-3xl">
          <MessageCard content={content} />
        </div>
      )}
    </motion.div>
  );
};

export default ChatBubble;