import React, { useState } from 'react';
import './SymptomCheck.css';
import { useNavigate } from 'react-router-dom';
import { Activity, AlertCircle, ClipboardList, RefreshCw } from 'lucide-react';

const SymptomChecker = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Input, 2: Final Result & Report
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAnalysis = () => {
    if (input1 && input2 && input3) {
      setLoading(true);
      // Mock delay to feel like AI is working
      setTimeout(() => {
        setLoading(false);
        setStep(2);
      }, 1500);
    }
  };

  const doctorNote = (
    <div className="doctor-note">
      <p>⚠️ <strong>Important:</strong> Doctor se jarur salah lein. Ye sirf AI sujhav hai.</p>
    </div>
  );

  return (
    <div className="checker-container">
      <div className="checker-card">
        <button className="back-button" onClick={() => (step === 2 ? setStep(1) : navigate(-1))}>
          {step === 2 ? "← Re-edit Symptoms" : "← Back"}
        </button>

        {/* STEP 1: INPUT FORM */}
        {step === 1 && (
          <div className="fade-in">
            <h2 className="step-title">AI Symptom Analysis</h2>
            <p className="step-sub">Please describe your condition below.</p>
            
            <div className="form-tag">
              <label>What are your symptoms?</label>
              <input 
                className='input-tag' 
                type="text" 
                placeholder='e.g. Fever, Headache, Cough' 
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
              />
              
              <label>Duration</label>
              <input 
                className='input-tag' 
                type="text" 
                placeholder='e.g. 3 Days' 
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
              />

              <label>Additional Details</label>
              <input 
                className='input-tag' 
                type="text" 
                placeholder='e.g. Age 25, high severity' 
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
              />

              <button 
                onClick={handleAnalysis}
                className="analyze-btn" 
                disabled={loading || !input1 || !input2 || !input3}
              >
                {loading ? "ANALYZING..." : "GET INSTANT ANALYSIS"}
              </button>
            </div>
            {doctorNote}
          </div>
        )}

        {/* STEP 2: COMBINED RESULTS & REPORT */}
        {step === 2 && (
          <div className="result-page fade-in">
            <div className="result-header">
              <div className="risk-indicator">
                <Activity size={32} color="#ef4444" />
                <div>
                  <h3>Analysis Result</h3>
                  <span className="risk-badge">Moderate Risk</span>
                </div>
              </div>
            </div>

            <div className="summary-section">
              <h4>Patient Summary:</h4>
              <p>Patient is experiencing <strong>{input1}</strong> for <strong>{input2}</strong>. {input3 && `Notes: ${input3}`}</p>
            </div>

            <div className="report-grid">
              {/* Medicine Section */}
              <div className="report-card">
                <h3><ClipboardList size={20} /> Suggested Medicines</h3>
                <div className="med-box">
                  <p><strong>Paracetamol 500mg:</strong> 1 tab every 6h (Fever)</p>
                  <p><strong>Cetirizine:</strong> 1 tab at night (Allergy/Cough)</p>
                  <p><strong>ORS Solution:</strong> Stay hydrated</p>
                </div>
              </div>

              {/* Instructions Section */}
              <div className="report-card">
                <h3><AlertCircle size={20} /> Advice & Diet</h3>
                <ul>
                  <li>Take full bed rest for 2 days.</li>
                  <li>Drink warm water and avoid cold drinks.</li>
                  <li>Eat light food like Moong Dal Khichdi.</li>
                </ul>
              </div>
            </div>

            <div className="action-footer">
               <button className="reset-btn" onClick={() => {setStep(1); setInput1(''); setInput2(''); setInput3('');}}>
                <RefreshCw size={18} /> New Checkup
              </button>
            </div>
            {doctorNote}
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomChecker;