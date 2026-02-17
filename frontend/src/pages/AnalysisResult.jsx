import React from 'react';
import { useNavigate } from 'react-router-dom';

const AnalysisResult = () => {
  const navigate = useNavigate();

  return (
    <div className="page analysis-result-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h1>Analysis Results</h1>
      <p>Your AI-powered health analysis will appear here.</p>
      {/* TODO: Show risk scores, recommendations, and next steps */}
    </div>
  );
};

export default AnalysisResult;
