import { useEffect, useState } from "react";
import ChatLayout from "./layouts/ChatLayout";
import Home from "./pages/Home";
import { askQuestion } from "./api/chatApi";

function App() {
  // Load previous chat from localStorage on startup
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("govassist-chat");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  const [loading, setLoading] = useState(false);

  // NEW: Mobile sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Save chat whenever messages change
  useEffect(() => {
    localStorage.setItem(
      "govassist-chat",
      JSON.stringify(messages)
    );
  }, [messages]);

  const handleSend = async (question) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: question,
      },
    ]);

    setLoading(true);

    try {
      const response = await askQuestion(question);

      // Add AI response
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.answer,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setLoading(false);

    // Remove saved chat history
    localStorage.removeItem("govassist-chat");
  };

  return (
    <ChatLayout
      onNewChat={clearChat}
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
    >
      <Home
        messages={messages}
        loading={loading}
        onSend={handleSend}
      />
    </ChatLayout>
  );
}

export default App;