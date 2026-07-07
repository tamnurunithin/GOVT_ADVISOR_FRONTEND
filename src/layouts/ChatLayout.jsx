import Sidebar from "../components/layout/Sidebar";
import ChatHeader from "../components/chat/ChatHeader";

const ChatLayout = ({
  children,
  onNewChat,
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar
        onNewChat={onNewChat}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <ChatHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default ChatLayout;