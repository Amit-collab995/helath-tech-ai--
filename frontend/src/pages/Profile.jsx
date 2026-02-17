import React, { useState } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  // Mock data for history
  const [history] = useState([
    { id: 1, date: '2026-02-01', symptoms: 'Severe Headache, Nausea', result: 'Migraine', risk: 'Yellow' },
    { id: 2, date: '2026-01-15', symptoms: 'Dry Cough, High Fever', result: 'Common Flu', risk: 'Red' },
    { id: 3, date: '2025-12-20', symptoms: 'Fatigue, Muscle Pain', result: 'Vitamin Deficiency', risk: 'Green' },
  ]);

  const user = {
    name: "John Doe",
    age: 28,
    bloodGroup: "O+",
    allergies: "Peanuts, Dust",
    chronic: "None"
  };

  return (
    <div className="profile-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="profile-grid">
        
        {/* Left Side: Personal Details Card */}
        <aside className="user-info-card">
          <div className="profile-pic">JD</div>
          <h2>{user.name}</h2>
          <p className="email">john.doe@example.com</p>
          
          <hr className="divider" />
          
          <div className="details-list">
            <div className="detail-item"><span>Age:</span> {user.age}</div>
            <div className="detail-item"><span>Blood Group:</span> {user.bloodGroup}</div>
            <div className="detail-item"><span>Allergies:</span> {user.allergies}</div>
            <div className="detail-item"><span>Chronic:</span> {user.chronic}</div>
          </div>
          
          <button className="edit-btn">Edit Profile</button>
        </aside>

        {/* Right Side: History Section */}
        <main className="history-section">
          <div className="history-header">
            <h3>Past Symptom Checks</h3>
            <span className="count">{history.length} Records</span>
          </div>

          <div className="history-list">
            {history.map((record) => (
              <div key={record.id} className="history-card">
                <div className="card-top">
                  <span className="date">{record.date}</span>
                  <span className={`risk-tag ${record.risk.toLowerCase()}`}>
                    {record.risk} Risk
                  </span>
                </div>
                <div className="card-body">
                  <h4>{record.result}</h4>
                  <p><strong>Symptoms:</strong> {record.symptoms}</p>
                </div>
                <button className="view-report-btn">View Full Analysis</button>
              </div>
            ))}
          </div>
        </main>

      </div>
    </div>
  );
};

export default Profile;