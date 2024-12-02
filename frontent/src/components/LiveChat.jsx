import React, { useState } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "Support", text: "Hi! How can we help you today?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "You", text: input }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen ? (
        <div className="w-80 bg-white shadow-lg rounded-lg">
          {/* Header */}
          <div className="flex justify-between items-center p-4 bg-blue-500 text-white rounded-t-lg">
            <h4 className="font-bold">Support Chat</h4>
            <button onClick={toggleChat}>
              <FaTimes />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 h-60 overflow-y-scroll space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "You" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    msg.sender === "You" ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="flex p-4 border-t">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-2 py-1 border rounded-lg"
            />
            <button
              onClick={handleSend}
              className="ml-2 px-4 py-1 bg-blue-500 text-white rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="p-4 bg-blue-500 text-white rounded-full shadow-lg"
        >
          <FaCommentDots size={24} />
        </button>
      )}
    </div>
  );
};

export default LiveChat;
