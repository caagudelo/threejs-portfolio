import React from 'react';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: 60,
      background: 'rgba(16,16,26,0.95)',
      color: '#00ffd0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem',
      zIndex: 100,
      fontWeight: 700,
      letterSpacing: 1,
      fontSize: '1.2rem',
      boxShadow: '0 2px 16px #0006',
    }}>
      <span>Mi Portafolio 3D</span>
      <div style={{display:'flex',gap:'2rem'}}>
        <a href="#info-panel" style={{color:'#00ffd0',textDecoration:'none'}}>Explorar</a>
        <a href="#contacto" style={{color:'#00ffd0',textDecoration:'none'}}>Contacto</a>
      </div>
    </nav>
  );
}
