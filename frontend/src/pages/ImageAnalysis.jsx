import React, { useState } from 'react';
import { Upload, Camera, XCircle, CheckCircle } from 'lucide-react';
import './ImageAnalysis.css'; // Existing CSS file

const ImageAnalysis = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null); // To store AI result
  const [isLoading, setIsLoading] = useState(false); // For loading state

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file); // Store the file object itself
      setImagePreviewUrl(URL.createObjectURL(file)); // For showing preview
      setAnalysisResult(null); // Clear previous results
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setIsLoading(true);
    setAnalysisResult(null); // Clear previous result before new analysis

    // --- Mock AI Analysis Logic ---
    // Yahan par hum ek dummy delay aur result dikha rahe hain.
    // Real project mein yahan Backend API call hogi.
    console.log("Sending image for analysis:", selectedImage.name);

    await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate API call delay (3 seconds)

    // Dummy results based on some criteria (you can make this smarter)
    const dummySymptoms = [
      "Skin Rash (Psoriasis pattern detected)",
      "Redness and swelling in affected area",
      "Minor epidermal irritation"
    ];
    
    // Yahan aap real-time AI API call integrate kar sakte hain.
    // Example: const response = await fetch('/api/analyze-image', { method: 'POST', body: formData });
    // const realResult = await response.json();

    setIsLoading(false);
    setAnalysisResult({
      symptoms: dummySymptoms,
      confidence: "High",
      advice: "Consult a Dermatologist or General Physician immediately.",
      disclaimer: "AI analysis is for guidance only and does not replace professional medical diagnosis."
    });
  };

  const clearImage = () => {
    setSelectedImage(null);
    setImagePreviewUrl('');
    setAnalysisResult(null);
  };

  return (
    <div className="analysis-container">
      <h2>AI Image-based Symptom Analysis</h2>
      <p className="subtitle">Upload medical images or reports for preliminary AI assessment.</p>

      <div className="upload-section">
        <div className={`image-preview-box ${selectedImage ? 'has-image' : ''}`}>
          {imagePreviewUrl ? (
            <>
              <img src={imagePreviewUrl} alt="Preview" className="uploaded-img-preview" />
              <button className="clear-image-btn" onClick={clearImage} title="Remove Image"><XCircle size={24} /></button>
            </>
          ) : (
            <div className="upload-placeholder">
              <Upload size={48} className="upload-icon" />
              <p>Drag & Drop your image here or</p>
              <input type="file" accept="image/*" onChange={handleImageChange} id="imageUpload" hidden />
              <label htmlFor="imageUpload" className="select-image-btn">Browse Files</label>
            </div>
          )}
        </div>

        {selectedImage && (
          <button 
            className="analyze-button" 
            onClick={handleAnalyze} 
            disabled={isLoading}
          >
            {isLoading ? 'Analyzing...' : 'Analyze Symptoms'}
            {isLoading && <span className="spinner"></span>}
          </button>
        )}
      </div>

      {/* Analysis Result Display */}
      {analysisResult && (
        <div className="analysis-results-card">
          <h3><CheckCircle size={24} className="result-check-icon" /> AI Analysis Report</h3>
          <div className="detected-symptoms-list">
            <h4>Detected Symptoms:</h4>
            <ul>
              {analysisResult.symptoms.map((symptom, index) => (
                <li key={index}>• {symptom}</li>
              ))}
            </ul>
          </div>
          <p><strong>Confidence:</strong> {analysisResult.confidence}</p>
          <p><strong>AI Recommendation:</strong> {analysisResult.advice}</p>
          <p className="disclaimer">{analysisResult.disclaimer}</p>
        </div>
      )}

      
    </div>
  );
};

export default ImageAnalysis;