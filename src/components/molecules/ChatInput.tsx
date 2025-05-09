import { useState, KeyboardEvent, FormEvent } from "react";
import { Smile, Send } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
}

/**
 * Chat input field with emoji icon, send button and branding.
 */
export default function ChatInput({ onSend }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (trimmed) {
      onSend(trimmed);
      setInput("");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <div className="bg-white border-t border-gray-200 pt-2">
      {/* Input row */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between px-3 py-3"
      >
        {/* Emoji icon */}
        <Smile className="text-gray-400 mr-3" />

        {/* Text input */}
        <input
          type="text"
          className="flex-1 text-sm px-2 py-2 focus:outline-none"
          placeholder="Write a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {/* Send button */}
        <button
          type="submit"
          className="bg-blue-900 hover:bg-blue-700 text-white p-2 rounded-full ml-2 items-center"
        >
          <Send size={18} />
        </button>
      </form>

      {/* Branding */}
      <div className="w-full bg-gray-100 text-[10px] text-center text-gray-500 py-1 rounded-b-xl">
        Powered By <span className="underline">Wizybot</span>
      </div>
    </div>
  );
}
