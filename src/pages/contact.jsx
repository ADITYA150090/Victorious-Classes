import Navbar from '../app/components/Navbar'
export default function contact() {
    return (
      <div>
        <Navbar/>
        <div style={{
        height: '93vh',
        backgroundColor: '#f7f7f7',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center'
      }}>
        
        <img 
          src="https://cdn-icons-png.flaticon.com/512/189/189792.png" 
          alt="Under Construction" 
          style={{ width: 100, marginBottom: 20 }} 
        />
        <h1 style={{ color: '#333' }}>🚧 Page Under Construction 🚧</h1>
        <p style={{ color: '#666' }}>We’re working on something awesome. Please check back soon!</p>
      </div>
      </div>
    );
  }
  