import React from 'react';
import './Home.css';

import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

import Footer from './Footer';
import Card from './Card';


const Home = () => {
  const navigate = useNavigate();

  const handleStartSypmCheck = () => {
    navigate("/check")
  }

  
  return (
    <div className="home-wrapper">
    
      <Navbar />
      

      <header className="home-header">
        <div className="container">

          <div className="hero-grid">
            <div className="hero-text-content">
              <span className="badge">AI-Powered Healthcare</span>
              <h1 className="hero-title">
                Welcome to <span className="gradient-text">Smarter Health</span>
              </h1>
              <p className="hero-description">
                Experience a new era of personal health management. Our artificial 
                intelligence analyzes your symptoms in seconds to provide reliable 
                insights and medical guidance.
              </p>

             

              <div className="cta-group">
                <div className='button-cta'>
                <button onClick={handleStartSypmCheck} className="main-cta-btn">
                  START SYMPTOM CHECK
                </button>

                <button onClick={() => navigate("/imageanalysis")} className="main-cta-btn">
                  Image Analysis Input
                </button>
                </div>
                <span className="confidential-text">
                  🔒 Confidential • Fast • Accurate
                </span>
              </div>
            </div>

            <div className="hero-visual-content">
              <div className="glass-card main-card">
                <div className="scan-line"></div>
               <img 
                  src="https://png.pngtree.com/png-vector/20250124/ourmid/pngtree-innovative-medical-robot-ai-doctor-in-clinical-setting-image-png-image_15323571.png" 
                  alt="Human Body AI" 
                  className="body-visual"
                />
                
              </div>
            </div>
          </div>

        </div>
      </header>
      <Card />
     
      <Footer className="home-footer" />
    </div>
  );
};

export default Home;