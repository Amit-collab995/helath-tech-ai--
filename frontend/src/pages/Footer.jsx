import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import './Footer.css';

const Footer = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello! I am your AI Health Assistant. How can I help you today?" }
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Gemini API Configuration
 
 

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const currentInput = userInput;
    const updatedMessages = [...messages, { role: "user", text: currentInput }];
    setMessages(updatedMessages);
    setUserInput("");
    setLoading(true);

    try {
      

     

      // Sending message
      const result = await chat.sendMessage(currentInput);
      const response = await result.response;
      const aiText = response.text();

      if (aiText) {
        setMessages([...updatedMessages, { role: "ai", text: aiText }]);
      }
    } catch (error) {
      console.error("Gemini Error:", error);
      
      // Fallback message for user
      setMessages([
        ...updatedMessages, 
        { role: "ai", text: "Service temporarily unavailable. Please check your API key or try again in a moment." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const hospitals = [
  {
    id: 1,
    name: "Jaslok Hospital",
    phone: "022-66573333",
    link: "https://www.jaslokhospital.net",
    city: "Mumbai",
  },
  {
    id: 2,
    name: "Amrita Hospital",
    phone: "0484-2851234",
    link: "https://www.amritahospitals.org",
    city: "Kochi",
  },
  {
    id: 3,
    name: "SL Raheja Hospital",
    phone: "022-66529999",
    link: "https://www.rahejahospital.com",
    city: "Mumbai",
  },
  {
    id: 4,
    name: "Fortis Hospital",
    phone: "0124-4921021",
    link: "https://www.fortishealthcare.com",
    city: "Gurgaon",
  },
  {
    id: 5,
    name: "Apollo Hospitals",
    phone: "044-28293333",
    link: "https://www.apollohospitals.com",
    city: "Chennai",
  },
  {
    id: 6,
    name: "Manipal Hospital",
    phone: "080-25024444",
    link: "https://www.manipalhospitals.com",
    city: "Bangalore",
  },
  {
    id: 7,
    name: "Medanta Hospital",
    phone: "0124-4141414",
    link: "https://www.medanta.org",
    city: "Gurgaon",
  },
  {
    id: 8,
    name: "Narayana Health",
    phone: "080-71222222",
    link: "https://www.narayanahealth.org",
    city: "Bangalore",
  },
  {
    id: 9,
    name: "Max Super Speciality Hospital",
    phone: "011-40554055",
    link: "https://www.maxhealthcare.in",
    city: "Delhi",
  },
  {
    id: 10,
    name: "Kokilaben Dhirubhai Ambani Hospital",
    phone: "022-30999999",
    link: "https://www.kokilabenhospital.com",
    city: "Mumbai",
  }
];


  return (
    <footer className="main-footer">
      {/* 1. AI CHATBOT WIDGET */}
      <div className={`ai-chatbot-widget ${chatOpen ? 'open' : ''}`}>
        <div className="chat-header" onClick={() => setChatOpen(!chatOpen)}>
          <div className="ai-icon">{loading ? "⏳" : "🤖"}</div>
          <span>Meditech AI Assistant</span>
        </div>
        
        {chatOpen && (
          <div className="chat-body">
            <div className="messages-display">
              {messages.map((msg, index) => (
                <div key={index} className={`message-bubble ${msg.role}`}>
                  {msg.text}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            
            <div className="chat-input-area">
              <input 
                type="text" 
                placeholder="Ask health questions..." 
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button onClick={handleSendMessage} disabled={loading}>
                {loading ? "..." : "Send"}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 2. REAL HOSPITALS DIRECTORY */}
      <div className="footer-top">
        <div className="container">
          <h2 className="footer-title">Top Rated Partner Hospitals & Booking</h2>
          <div className="hospital-grid">
            {hospitals.map((h, index) => (
              <div key={index} className="hospital-item">
                <div className="h-info">
                  <strong>{h.name}</strong>
                  <p>{h.city} | 📞 {h.phone}</p>
                </div>
                <a href={h.link} target="_blank" rel="noreferrer" className="book-link">
                  Book Online →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. FINAL FOOTER LINKS */}
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-flex">
            <div className="footer-brand">MEDITECH <span>AI</span></div>
            <p>© 2026 Smart Healthcare AI. Powered by Gemini 1.5 Flash.</p>
            <div className="social-links">
              <span>Twitter</span>
              <span>LinkedIn</span>
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
