import React from 'react';
import './AISection.css';

const AISection = () => {
  return (
    <div className="hospital-ai-container">
      {/* SECTION 1: Virtual Clinic - Image Left, Text Right */}
      <div className="hospital-row alternate">
        <div className="hospital-visual">
          <div className="scanner-container">
            <div className="scanner-line"></div>
            <img 
              src="https://img.freepik.com/free-vector/doctor-checking-patient-with-artificial-intelligence_23-2148512140.jpg" 
              alt="Virtual AI Doctor" 
            />
          </div>
        </div>
        <div className="hospital-content">
          <div className="clinic-badge">VIRTUAL TRIAGE SYSTEM</div>
          <h2>Consult with <span className="neon-blue">Digital Doctors</span></h2>
          <p>
            Traditional hospitals ki lambi lines ko kahein alvida. Hamara AI Virtual Doctor 
            aapke symptoms ko patient-centric approach se analyze karta hai, bilkul 
            ek real-time consultation ki tarah.
          </p>
          <div className="service-pills">
            <span>🛡️ Secure Data</span>
            <span>⚡ Instant Response</span>
            <span>🌍 Multi-lingual</span>
          </div>
        </div>
      </div>

      {/* SECTION 2: AI Diagnostic Lab - Text Left, Image Right */}
      <div className="hospital-row">
        <div className="hospital-content">
          <div className="clinic-badge">AI DIAGNOSTIC HUB</div>
          <h2>Advanced <span className="neon-green">Clinical Analysis</span></h2>
          <p>
            Hamara AI engine hazaron medical journals aur case studies ko scan karke 
            aapke liye accurate diagnosis taiyar karta hai. Yeh machine learning 
            ka use karke har report ko personalize karta hai.
          </p>
          <div className="diagnostic-card">
            <div className="lab-header">
              <span className="pulse-dot"></span>
              <h4>System Diagnosis...</h4>
            </div>
            <div className="dna-loader">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <p className="lab-note">Diagnostic Precision: 99.8%</p>
          </div>
        </div>
        <div className="hospital-visual">
          <div className="glass-lab-frame">
            <img 
              src="https://img.freepik.com/free-vector/scientist-working-with-futuristic-medical-interface_23-2148512135.jpg" 
              alt="AI Medical Lab" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISection;