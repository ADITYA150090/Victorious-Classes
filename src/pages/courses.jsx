import React from 'react';
import Navbar from '../app/components/Navbar'
const studyMaterials = [
  
  { title: 'MS-WORD', link: '/files/java-guide.pdf',img:'https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_Word_Logo_512px.png' },
  { title: 'MS-EXCEL', link: '/files/asd.pdf',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/826px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png' },
  { title: 'POWER POINT- PPT', link: '/files/mcu.pdf',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png' },
  { title: 'EMAIL', link: '/files/mcu.pdf',img:'https://i.pinimg.com/736x/88/e1/4c/88e14cc7e7fcbb0e0e09de26cec86c61.jpg' },
  { title: 'SHORTCUT-KEYS', link: '/files/dsa-notes.pdf',img:'https://media.istockphoto.com/id/1400327147/vector/shortcuts.jpg?s=612x612&w=0&k=20&c=DUWmOwHrSiKshXWrQr-9i6EHJFkkTyNbLYoW5oiCZ8s=' },
  { title: 'Advanced Excel', link: '/files/java-guide.pdf',img:'https://shoppc.preciouscomputer.com/wp-content/uploads/2024/12/advanced-excel-igmguru_960742918_l.jpg' },
  { title: 'Tally prime', link: '/files/asd.pdf',img:'https://5.imimg.com/data5/SELLER/Default/2023/4/301462781/WG/JP/YR/64443040/tally-prime-software.png' },
  { title: 'Corel Draw', link: '/files/mcu.pdf',img:'https://i.pinimg.com/736x/cf/65/e7/cf65e79742e9fe3a7199ce9b1abd9f15.jpg' },
  { title: 'Photoshop', link: '/files/mcu.pdf',img:'https://logowik.com/content/uploads/images/adobe-photoshop-cc3131.jpg' },
  { title: 'Pagemaker', link: '/files/dsa-notes.pdf',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGdHwPizS3boWxQRW0MFGtyFiDIKKbAAYgpQ&s' },
  { title: 'Data Structures Notes', link: '/files/dsa-notes.pdf',img:'https://play-lh.googleusercontent.com/9zvNJHedNg_6lOdwcodODMVsyeHKxuTIpnbBzomRGGZAp_vKVXnd5SlF8XZcXyGYjQ' },
  { title: 'Java Quick Guide', link: '/files/java-guide.pdf',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkCCdLCDhY7mwKXP4bHVQ1SFZxn3pPM2QLFw&s' },
  { title: 'C Programming ', link: '/files/asd.pdf',img:'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' },
  { title: 'C++ Programming', link: '/files/mcu.pdf',img:'data:image/jpeg;base64,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' },
  { title: 'Python', link: '/files/mcu.pdf',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' },
];

export default function cources() {
  return (
    <div>
      <Navbar/>
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', fontFamily: 'Arial, sans-serif' }}>📚 Courses We Cover</h1>
      
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
            <h3 style={{ marginBottom: '10px', fontFamily: 'Arial, sans-serif' }}>{material.title}</h3>
            <img style={{justifyContent: 'center',padding: '10px 2px 30px -9px',
              height: '180px',
              width: '200px',
              margin: '20px',
                
                borderRadius: '5px',
                
                alignItems: 'center',}} src={material.img} alt="kk" />
            <a 
              href={material.link} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                padding: '10px 53px',
                justifyContent: 'center',
                backgroundColor: '#0070f3',
                color: '#fff',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold',
                alignItems: 'center',
              }}
            >
             
               Syllabus
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
