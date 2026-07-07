import { motion } from "framer-motion";
import {
  Plus,
  MessageSquare,
  Landmark,
} from "lucide-react";

const Sidebar = ({ onNewChat }) => {
  const recentChats = [
    "Scholarships for Students",
    "Farmer Welfare Schemes",
    "Startup Funding",
    "Women Empowerment",
  ];

  return (
    <motion.aside
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="hidden w-72 flex-col border-r border-slate-200 bg-white md:flex"
    >
      {/* Logo */}
      <div className="border-b border-slate-200 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-600 p-3 text-white">
            <Landmark size={24} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-800">
              GovAssist AI
            </h1>

            <p className="text-sm text-slate-500">
              Government Scheme Advisor
            </p>
          </div>
        </div>
      </div>

      {/* New Chat */}
      <div className="p-5">
        <button
          onClick={onNewChat}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          <Plus size={20} />
          New Chat
        </button>
      </div>

      {/* Recent Chats */}
      <div className="flex-1 overflow-y-auto px-5">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Recent Chats
        </h3>

        <div className="space-y-3">
          {recentChats.map((chat, index) => (
            <button
              key={index}
              className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-slate-100"
            >
              <MessageSquare
                size={18}
                className="text-slate-500"
              />

              <span className="text-sm text-slate-700">
                {chat}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 p-5">
        <p className="text-center text-xs text-slate-500">
          Powered by FastAPI • LangChain • FAISS • Groq
        </p>
      </div>
    </motion.aside>
  );
};

export default Sidebar;