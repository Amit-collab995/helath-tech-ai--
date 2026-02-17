import React, { useState } from 'react';
import './SymptomCheck.css';
import { useNavigate } from 'react-router-dom';

const SymptomChecker = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Input, 2: Analysis, 3: Medicine Suggestions, 4: Medicine Report
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const handleInitialAnalysis = () => {
    if (input1 && input2 && input3) {
      setStep(2);
    }
  };

  const handleMedicineAnalysis = () => {
    setStep(3);
  };

  const handleMedicineReport = () => {
    setStep(4);
  };

  const doctorNote = (
    <div className="doctor-note">
      <p>⚠️ <strong>Important:</strong> Doctor se jarur salah lein. Ye sirf sujhav hai, professional medical advice ka substitute nahi hai.</p>
    </div>
  );

  return (
    <div className="checker-container">
      <div className="checker-card">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>
        
        {/* STEP 1: THREE INPUTS */}
        {step === 1 && (
          <div className="fade-in">
            <h2 className="step-title">How are you feeling?</h2>
            <p className="step-sub">Please fill all the fields below.</p>
            <form className='form-tag' onSubmit={(e) => { e.preventDefault(); handleInitialAnalysis(); }}>
              <input 
                className='input-tag' 
                type="text" 
                placeholder='Enter your symptoms' 
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                required
              />
              <input 
                className='input-tag' 
                type="text" 
                placeholder='How many days' 
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                required
              />
              <input 
                className='input-tag' 
                type="text" 
                placeholder='Additional details (age, severity, etc.)' 
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="analyze-btn" 
                disabled={!input1 || !input2 || !input3}
              >
                ANALYZE SYMPTOMS
              </button>
            </form>
            {doctorNote}
          </div>
        )}

        {/* STEP 2: ANALYSIS PAGE WITH ANALYZE BUTTON */}
        {step === 2 && (
          <div className="analysis-page fade-in">
            <div className="loading-state">
              <div className="ai-loader"></div>
              <h3>AI is Analyzing Your Symptoms...</h3>
              <p>Comparing your symptoms with our medical database.</p>
              <div className="symptom-summary">
                <h4>Your Input Summary:</h4>
                <p><strong>Symptoms:</strong> {input1}</p>
                <p><strong>Duration:</strong> {input2}</p>
                <p><strong>Additional Info:</strong> {input3}</p>
              </div>
            </div>
            <button className="analyze-btn" onClick={handleMedicineAnalysis} style={{ marginTop: '30px' }}>
              GET MEDICINE SUGGESTIONS
            </button>
            {doctorNote}
          </div>
        )}

        {/* STEP 3: MEDICINE SUGGESTIONS */}
        {step === 3 && (
          <div className="result-dashboard fade-in">
            <div className="result-header">
              <span className="risk-badge red">Analysis Complete</span>
              <h2>Medicine Suggestions</h2>
            </div>

            <div className="medicine-list">
              <div className="medicine-item">
                <div className="medicine-info">
                  <h4>Paracetamol 500mg</h4>
                  <p>Dosage: 1 tablet every 6-8 hours</p>
                  <p className="medicine-purpose">For fever and pain relief</p>
                </div>
              </div>
              
              <div className="medicine-item">
                <div className="medicine-info">
                  <h4>Ibuprofen 400mg</h4>
                  <p>Dosage: 1 tablet every 8 hours</p>
                  <p className="medicine-purpose">For inflammation and pain</p>
                </div>
              </div>

              <div className="medicine-item">
                <div className="medicine-info">
                  <h4>Vitamin C Supplements</h4>
                  <p>Dosage: As per doctor's advice</p>
                  <p className="medicine-purpose">To boost immunity</p>
                </div>
              </div>
            </div>

            <div className="recommendation-box">
              <h4>👨‍⚕️ General Recommendations:</h4>
              <ul>
                <li>Take medicines as prescribed</li>
                <li>Stay hydrated - drink plenty of water</li>
                <li>Get adequate rest</li>
                <li>Monitor your symptoms</li>
              </ul>
            </div>

            <button className="medicine-report-btn" onClick={handleMedicineReport}>
              VIEW DETAILED MEDICINE REPORT
            </button>
            {doctorNote}
          </div>
        )}

        {/* STEP 4: DETAILED MEDICINE REPORT */}
        {step === 4 && (
          <div className="medicine-report-page fade-in">
            <div className="result-header">
              <h2>Detailed Medicine Report</h2>
            </div>

            <div className="report-section">
              <h3>Prescribed Medicines:</h3>
              <div className="detailed-medicine-list">
                <div className="detailed-medicine-item">
                  <h4>1. Paracetamol 500mg</h4>
                  <p><strong>Dosage:</strong> 1 tablet every 6-8 hours (Maximum 4 times a day)</p>
                  <p><strong>Duration:</strong> 3-5 days or as needed</p>
                  <p><strong>Purpose:</strong> Reduces fever and relieves pain</p>
                  <p><strong>Side Effects:</strong> Rare, but may cause nausea in some cases</p>
                  <p><strong>Precautions:</strong> Do not exceed recommended dosage</p>
                </div>

                <div className="detailed-medicine-item">
                  <h4>2. Ibuprofen 400mg</h4>
                  <p><strong>Dosage:</strong> 1 tablet every 8 hours (Maximum 3 times a day)</p>
                  <p><strong>Duration:</strong> 3-5 days</p>
                  <p><strong>Purpose:</strong> Anti-inflammatory and pain relief</p>
                  <p><strong>Side Effects:</strong> May cause stomach upset, take with food</p>
                  <p><strong>Precautions:</strong> Avoid if you have stomach ulcers or kidney problems</p>
                </div>

                <div className="detailed-medicine-item">
                  <h4>3. Vitamin C Supplements</h4>
                  <p><strong>Dosage:</strong> 500mg once daily</p>
                  <p><strong>Duration:</strong> 7-10 days</p>
                  <p><strong>Purpose:</strong> Boosts immune system</p>
                  <p><strong>Side Effects:</strong> Generally safe, may cause mild stomach upset</p>
                  <p><strong>Precautions:</strong> Take with meals</p>
                </div>
              </div>
            </div>

            <div className="report-section">
              <h3>General Instructions:</h3>
              <ul className="instructions-list">
                <li>Take all medicines at regular intervals</li>
                <li>Do not skip doses</li>
                <li>Complete the full course even if you feel better</li>
                <li>Drink plenty of water throughout the day</li>
                <li>Avoid alcohol while taking these medicines</li>
                <li>If symptoms worsen, consult doctor immediately</li>
              </ul>
            </div>

            <div className="report-section">
              <h3>Diet Recommendations:</h3>
              <ul className="instructions-list">
                <li>Eat light, easily digestible food</li>
                <li>Include fruits and vegetables in your diet</li>
                <li>Avoid spicy and oily food</li>
                <li>Stay hydrated with water, soups, and juices</li>
              </ul>
            </div>

            <button className="reset-btn" onClick={() => {setStep(1); setInput1(''); setInput2(''); setInput3('');}}>
              Start New Analysis
            </button>
            {doctorNote}
          </div>
        )}

      </div>
    </div>
  );
};

export default SymptomChecker;