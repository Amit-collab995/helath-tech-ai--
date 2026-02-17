import React, { useState } from 'react';
import './Reminders.css';
import { useNavigate } from 'react-router-dom';

const Reminders = () => {
  const navigate = useNavigate();
  const [reminders, setReminders] = useState([
    { id: 1, name: 'Paracetamol', dosage: '500mg', time: 'Morning', taken: false },
    { id: 2, name: 'Vitamin D3', dosage: '1 Tab', time: 'Noon', taken: true },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newMed, setNewMed] = useState({ name: '', dosage: '', time: 'Morning' });

  const addReminder = () => {
    if (newMed.name) {
      setReminders([...reminders, { ...newMed, id: Date.now(), taken: false }]);
      setShowModal(false);
      setNewMed({ name: '', dosage: '', time: 'Morning' });
    }
  };

  const toggleTaken = (id) => {
    setReminders(reminders.map(r => r.id === id ? { ...r, taken: !r.taken } : r));
  };

  return (
    <div className="reminder-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="reminder-header">
        <h1>Medicine Schedule</h1>
        <button className="add-btn" onClick={() => setShowModal(true)}>+ Add New Reminder</button>
      </div>

      <div className="schedule-grid">
        {['Morning', 'Noon', 'Night'].map(slot => (
          <div className="time-slot" key={slot}>
            <h3>{slot === 'Morning' ? '☀️' : slot === 'Noon' ? '🌤️' : '🌙'} {slot}</h3>
            <div className="med-list">
              {reminders.filter(r => r.time === slot).map(med => (
                <div key={med.id} className={`med-card ${med.taken ? 'completed' : ''}`}>
                  <div className="med-info">
                    <h4>{med.name}</h4>
                    <p>{med.dosage}</p>
                  </div>
                  <button 
                    className={`mark-btn ${med.taken ? 'taken' : ''}`}
                    onClick={() => toggleTaken(med.id)}
                  >
                    {med.taken ? '✓ Taken' : 'Mark Taken'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Simple Modal for Adding Medicine */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add Medication</h2>
            <input 
              type="text" placeholder="Medicine Name" 
              onChange={(e) => setNewMed({...newMed, name: e.target.value})} 
            />
            <input 
              type="text" placeholder="Dosage (e.g. 1 pill)" 
              onChange={(e) => setNewMed({...newMed, dosage: e.target.value})} 
            />
            <select onChange={(e) => setNewMed({...newMed, time: e.target.value})}>
              <option value="Morning">Morning</option>
              <option value="Noon">Noon</option>
              <option value="Night">Night</option>
            </select>
            <div className="modal-actions">
              <button onClick={addReminder} className="save-btn">Save</button>
              <button onClick={() => setShowModal(false)} className="cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reminders;