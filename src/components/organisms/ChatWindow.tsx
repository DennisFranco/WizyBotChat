import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MessageBubble from "../atoms/MessageBubble";
import ChatInput from "../molecules/ChatInput";
import ChatHeader from "../molecules/ChatHeader";
import ProductCarousel from "./ProductCarousel";
import { getRandomResponse } from "../../utils/randomResponses";

/**
 * Represents a single message in the chat.
 */
interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "bot";
  isTyping?: boolean;
  type?: "text" | "product";
  timestamp?: string;
}

/**
 * Returns current time formatted as: hh:mm AM | Mon Day
 */
function getCurrentTime(): string {
  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const date = now.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return `${time} | ${date}`;
}

/**
 * ChatWindow component handles the message list, user input, and bot interaction.
 */
export default function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null); // Used for scroll-to-bottom

  // Initial welcome message from bot
  useEffect(() => {
    const welcomeMessage: ChatMessage = {
      id: uuidv4(),
      text: "Hello there! Do you need any help?",
      sender: "bot",
      type: "text",
      timestamp: getCurrentTime(),
    };
    setMessages([welcomeMessage]);
  }, []);

  // Scroll to the bottom every time messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /**
   * Handles the user's message submission.
   */
  const handleSendMessage = (message: string) => {
    const timestamp = getCurrentTime();

    const userMessage: ChatMessage = {
      id: uuidv4(),
      text: message,
      sender: "user",
      type: "text",
      timestamp,
    };

    // Add user's message
    setMessages((prev) => [...prev, userMessage]);

    // Add bot typing placeholder
    const typingMessage: ChatMessage = {
      id: uuidv4(),
      text: "...",
      sender: "bot",
      isTyping: true,
      type: "text",
    };

    setMessages((prev) => [...prev, typingMessage]);

    // Simulate bot response after 3 seconds
    setTimeout(() => {
      setMessages((prev) => {
        const updated = prev.filter((msg) => msg.id !== typingMessage.id);

        // If user requested product recommendations
        if (message.toLowerCase() === "i want product recommendations") {
          const productMessage: ChatMessage = {
            id: uuidv4(),
            text: "",
            sender: "bot",
            type: "product",
            timestamp: getCurrentTime(),
          };
          return [...updated, productMessage];
        }

        // Otherwise, random bot response
        const botReply: ChatMessage = {
          id: uuidv4(),
          text: getRandomResponse(),
          sender: "bot",
          type: "text",
          timestamp: getCurrentTime(),
        };

        return [...updated, botReply];
      });
    }, 3000);
  };

  return (
    <div className="flex flex-col h-[90vh] bg-white rounded-xl shadow overflow-hidden">
      {/* Header */}
      <ChatHeader />

      {/* Message list */}
      <div className="flex-1 overflow-y-auto px-4 py-4 bg-gray-50 space-y-2">
        {messages.map((msg) =>
          msg.type === "product" ? (
            <div key={msg.id}>
              <ProductCarousel />
            </div>
          ) : (
            <MessageBubble
              key={msg.id}
              text={msg.text}
              sender={msg.sender}
              isTyping={msg.isTyping}
              timestamp={msg.timestamp}
            />
          )
        )}

        {/* Auto-scroll anchor */}
        <div ref={bottomRef} />
      </div>

      {/* Input field */}
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
}
