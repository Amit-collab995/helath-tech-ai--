import React, { useState } from 'react';
import './DoctorDirectory.css';
import { useNavigate } from 'react-router-dom';

const DoctorDirectory = () => {
  const navigate = useNavigate();
  const [doctors] = useState([
    { id: 1, name: "Dr. Sarah Ahmed", specialty: "Cardiologist", experience: "12 Yrs", rating: 4.9, status: "Available" },
    { id: 2, name: "Dr. Rajesh Khanna", specialty: "General Physician", experience: "15 Yrs", rating: 4.7, status: "Busy" },
    { id: 3, name: "Dr. Amit Verma", specialty: "Neurologist", experience: "10 Yrs", rating: 4.8, status: "Available" },
    { id: 4, name: "Dr. Priya Sahni", specialty: "Pediatrician", experience: "8 Yrs", rating: 4.6, status: "Available" },
  ]);

  return (
    <div className="directory-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      {/* Emergency Section */}
      <section className="emergency-banner">
        <div className="emergency-content">
          <div className="emergency-icon">🚨</div>
          <div className="emergency-text">
            <h2>Medical Emergency?</h2>
            <p>Don't wait for AI analysis in critical situations. Call nearby hospitals immediately.</p>
          </div>
        </div>
        <div className="emergency-actions">
          <button className="call-btn ambulance">📞 Call Ambulance (102)</button>
          <button className="call-btn er">🏥 Nearby ER</button>
        </div>
      </section>

      {/* Directory Section */}
      <div className="directory-main">
        <div className="directory-header">
          <h3>Recommended Specialists</h3>
          <div className="filter-tags">
            <span className="tag active">All</span>
            <span className="tag">Cardiology</span>
            <span className="tag">Neurology</span>
            <span className="tag">General</span>
          </div>
        </div>

        <div className="doctor-grid">
          {doctors.map(doc => (
            <div key={doc.id} className="doctor-card">
              <div className="doc-avatar">👨‍⚕️</div>
              <div className="doc-details">
                <div className="doc-status-row">
                  <span className={`status-dot ${doc.status.toLowerCase()}`}></span>
                  <span className="status-text">{doc.status}</span>
                </div>
                <h4>{doc.name}</h4>
                <p className="specialty">{doc.specialty}</p>
                <div className="doc-stats">
                  <span>⭐ {doc.rating}</span>
                  <span>•</span>
                  <span>{doc.experience} exp</span>
                </div>
              </div>
              <button className="book-btn">Book Appointment</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDirectory;