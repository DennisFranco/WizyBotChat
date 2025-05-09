interface MessageBubbleProps {
  text: string;
  sender: "user" | "bot";
  isTyping?: boolean;
  timestamp?: string;
}

/**
 * A single chat message bubble with optional timestamp and typing effect.
 */
export default function MessageBubble({
  text,
  sender,
  isTyping = false,
  timestamp,
}: MessageBubbleProps) {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div className={`max-w-[80%] px-4 py-2 rounded-xl relative shadow-sm ${
        isUser
          ? "bg-blue-500 text-white rounded-br-none"
          : "bg-gray-200 text-gray-800 rounded-bl-none"
      }`}>
        {/* Message content */}
        {isTyping ? (
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300" />
          </div>
        ) : (
          <span className="text-sm leading-snug">{text}</span>
        )}

        {/* Timestamp */}
        {timestamp && !isTyping && (
          <p className={`text-[10px] mt-1 text-left ${isUser ? "text-gray-200" : "text-gray-500"}`}>
            {timestamp}
          </p>
        )}
      </div>
    </div>
  );
}
