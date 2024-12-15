import React, { useState, useEffect, useRef } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm Khan's personal assistant. Ask me anything about him!",
    },
  ]);

  const knowledgeBase = [
    {
      question: ["who", "who are you", "about khan"],
      answer:
        "Khan is a computer science student, day-trader, and web developer who loves blending creativity with tech.",
    },
    {
      question: ["skills", "what can khan do", "what are khan's skills"],
      answer:
        "Khan is skilled in web development (React, Node.js), Forex trading, and constantly exploring new tech tools.",
    },
    {
      question: ["projects", "show projects", "what has khan built"],
      answer:
        "Khan built 'TheThoughtSpace' and 'Khanalysis', among other innovative web projects.",
    },
    {
      question: ["contact", "how to reach khan"],
      answer:
        "You can contact Khan at behangarid1@gmail.com or find him on LinkedIn and GitHub.",
    },
    {
      question: ["experience", "background", "where did khan study"],
      answer:
        "Khan studied computer science and has experience in trading, coding, and continuously learning new technologies.",
    },
    {
      question: ["interests", "hobbies"],
      answer:
        "Khan loves coding, exploring AI tools, working on trading strategies, and learning about new cultures.",
    },
  ];

  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const lower = input.toLowerCase();
    const matched = knowledgeBase.find((kb) =>
      kb.question.some((q) => lower.includes(q))
    );

    let botResponse;
    if (matched) {
      botResponse = matched.answer;
    } else {
      botResponse =
        "I'm not sure about that. Try asking about Khan's skills, projects, background, or hobbies!";
    }

    const botMessage = { sender: "bot", text: botResponse };
    setMessages((prev) => [...prev, botMessage]);

    setInput("");
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
  };

  const suggestions = [
    "Who is Khan?",
    "What are Khan's skills?",
    "Show projects",
    "How to reach Khan?",
    "Tell me about Khan's experience",
    "Khan's interests?",
    "Khan's hobbies?",
    "What about Forex trading?",
  ];

  return (
    <div>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-[#00FFC8] text-black p-3 rounded-full shadow-lg hover:bg-[#00d9ac] transition"
          style={{ zIndex: 9999 }}
        >
          <FiMessageCircle size={24} />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed bottom-6 right-6 w-72 bg-black border border-gray-700 rounded-lg shadow-2xl flex flex-col"
          style={{
            zIndex: 9999,
            maxHeight: "60vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-2 flex justify-between items-center rounded-t-lg">
            <span className="text-gray-300 text-sm font-semibold">
              Khan's Chatbot
            </span>
            <button onClick={() => setIsOpen(false)}>
              <FiX className="text-gray-400 hover:text-gray-300" />
            </button>
          </div>

          {/* Messages area */}
          <div
            className="flex-1 p-2 overflow-auto text-sm text-gray-200 space-y-2 bg-gray-900"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#444 #111" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`inline-block px-2 py-1 rounded-md ${
                    msg.sender === "user"
                      ? "bg-[#00FFC8] text-black"
                      : "bg-gray-700"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>

          {/* Suggestions */}
          <div className="bg-gray-800 p-2 text-xs text-gray-300 flex flex-wrap gap-2">
            <span className="opacity-80 w-full">Try asking:</span>
            {suggestions.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSuggestionClick(s)}
                className="underline hover:text-gray-100"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input area */}
          <div className="p-2 bg-gray-800 flex space-x-2 border-t border-gray-700">
            <input
              className="flex-1 bg-gray-900 text-gray-100 text-sm p-1 rounded outline-none placeholder-gray-500"
              placeholder="Ask about Khan..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-[#00FFC8] text-black text-sm px-2 py-1 rounded hover:bg-[#00d9ac]"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
