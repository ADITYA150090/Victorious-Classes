import React from 'react';
import Navbar from '../app/components/Navbar'
const studyMaterials = [
  { title: 'SHORTCUT-KEYS', link: '/files/dsa-notes.pdf' },
  { title: 'MS-WORD', link: '/files/java-guide.pdf' },
  { title: 'MS-EXCEL', link: '/files/asd.pdf' },
  { title: 'POWER POINT- PPT', link: '/files/mcu.pdf' },
  { title: 'EMAIL', link: '/files/mcu.pdf' },
  { title: 'SHORTCUT-KEYS', link: '/files/dsa-notes.pdf' },
  { title: 'MS-WORD', link: '/files/java-guide.pdf' },
  { title: 'MS-EXCEL', link: '/files/asd.pdf' },
  { title: 'POWER POINT- PPT', link: '/files/mcu.pdf' },
  { title: 'EMAIL', link: '/files/mcu.pdf' },
  { title: 'Data Structures Notes', link: '/files/dsa-notes.pdf' },
  { title: 'Java Quick Guide', link: '/files/java-guide.pdf' },
  { title: 'C Programming ', link: '/files/asd.pdf' },
  { title: 'C++ Programming', link: '/files/mcu.pdf' },
  { title: 'Python', link: '/files/mcu.pdf' },
];

export default function Library() {
  return (
    <div>
      <Navbar/>
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>📚 Study Material Library</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {studyMaterials.map((material, index) => (
          <div key={index} style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '50px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)'
          }}>
            <h3 style={{ marginBottom: '10px' }}>{material.title}</h3>
            <a 
              href={material.link} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                padding: '10px 15px',
                backgroundColor: '#0070f3',
                color: '#fff',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              View / Download
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
