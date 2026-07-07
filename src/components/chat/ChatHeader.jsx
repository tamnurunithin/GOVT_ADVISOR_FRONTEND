import { Menu } from "lucide-react";

const ChatHeader = ({
  
  setSidebarOpen,
}) => {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-5">
      {/* Left Section */}
      <div className="flex items-center">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="mr-4 rounded-lg p-2 transition hover:bg-slate-100 md:hidden"
        >
          <Menu size={24} />
        </button>

        {/* Title */}
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            🇮🇳 GovAssist AI
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Find the right government schemes with AI
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center">
        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          ● AI Ready
        </span>
      </div>
    </header>
  );
};

export default ChatHeader;