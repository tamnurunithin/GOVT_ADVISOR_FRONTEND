import { useState } from "react";
import { Send } from "lucide-react";

const ChatInput = ({ onSend, loading }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    if (!question.trim()) return;

    onSend(question);

    setQuestion("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="mx-auto mt-10 flex w-full max-w-3xl items-center gap-3 rounded-2xl border border-slate-300 bg-white p-3 shadow-md">
      <input
        type="text"
        value={question}
        placeholder="Ask about any government scheme..."
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 border-none bg-transparent px-3 py-2 outline-none"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="rounded-xl bg-blue-600 p-3 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        <Send size={20} />
      </button>
    </div>
  );
};

export default ChatInput;