import { useEffect, useState } from 'react';

export default function Verify() {
  const [loading, setLoading] = useState(true);
  const [playerRecord, setPlayerRecord] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Grab '?id=...' from the browser URL address bar
    const urlParams = new URLSearchParams(window.location.search);
    const certificateId = urlParams.get('id');

    if (!certificateId) {
      setError('No Certificate ID was provided for verification.');
      setLoading(false);
      return;
    }

    // Fetch from your public/records.json folder
    fetch('/records.json')
      .then((res) => {
        if (!res.ok) throw new Error('Could not access the database.');
        return res.json();
      })
      .then((data) => {
        const match = data.find((record) => record.id === certificateId);
        if (match) {
          setPlayerRecord(match);
        } else {
          setError('Invalid ID. This record was not found in our system.');
        }
      })
      .catch((err) => {
        setError('System error looking up this record.');
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  // Simple CSS styles directly in the file to make it look clean and official
  const containerStyle = {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center',
    fontFamily: 'system-ui, sans-serif',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
    border: '1px solid #333'
  };

  if (loading) return <div style={containerStyle}>Checking Gamperium Records...</div>;
  if (error) return <div style={{...containerStyle, color: '#ff6b6b'}}>⚠️ {error}</div>;

  return (
    <div style={containerStyle}>
      {/* 1. Circular Verified Badge */}
      <div style={{
        width: '80px',
        height: '80px',
        backgroundColor: 'rgba(212, 175, 55, 0.1)', // Subtle gold glow background
        border: '3px solid #d4af37',               // Solid Gold Border
        borderRadius: '50%',
        margin: '0 auto 20px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)'
      }}>
        {/* Animated/Clean SVG Checkmark Icon */}
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>

      {/* 2. Header Section */}
      <h2 style={{ color: '#d4af37', marginBottom: '5px', letterSpacing: '2px', fontSize: '22px', fontWeight: '800' }}>
        GAMPERIUM VERIFIED
      </h2>
      <p style={{ color: '#888', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: '0' }}>
        Official Achievement Record
      </p>
      
      <hr style={{ borderColor: '#2a2a2a', margin: '25px 0', borderStyle: 'solid' }} />
      
      {/* 3. Data Presentation Layer */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'left' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #222', paddingBottom: '8px' }}>
          <span style={{ color: '#777', fontSize: '14px' }}>Player Name</span>
          <span style={{ color: '#fff', fontWeight: '600', fontSize: '16px' }}>{playerRecord.name}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #222', paddingBottom: '8px' }}>
          <span style={{ color: '#777', fontSize: '14px' }}>Game Conquered</span>
          <span style={{ color: '#fff', fontWeight: '500' }}>{playerRecord.game}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #222', paddingBottom: '8px' }}>
          <span style={{ color: '#777', fontSize: '14px' }}>Difficulty Level</span>
          <span style={{ 
            color: playerRecord.difficulty.toLowerCase() === 'legendary' ? '#ff4d4d' : '#d4af37', 
            fontWeight: '600',
            textTransform: 'uppercase',
            fontSize: '13px',
            letterSpacing: '0.5px'
          }}>
            {playerRecord.difficulty}
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '4px' }}>
          <span style={{ color: '#777', fontSize: '14px' }}>Verification Date</span>
          <span style={{ color: '#aaa', fontFamily: 'monospace' }}>{playerRecord.date}</span>
        </div>

      </div>

      <hr style={{ borderColor: '#2a2a2a', margin: '25px 0 15px 0', borderStyle: 'solid' }} />

      {/* 4. Bottom Security Footer */}
      <div style={{ 
        fontSize: '11px', 
        color: '#555', 
        letterSpacing: '0.5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px'
      }}>
        🔒 SECURE DIGITAL CERTIFICATE PATH // ID: {playerRecord.id}
      </div>
    </div>
  );
}