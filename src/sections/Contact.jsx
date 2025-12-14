import React, { useState } from 'react';

export default function Contact() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  return (
    <div id="contacto" style={{
      position: 'absolute',
      bottom: '6%',
      left: '6%',
      zIndex: 24,
      pointerEvents: 'auto',
    }}>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '999px',
            border: '1px solid #00ffd0',
            background: 'rgba(10, 12, 24, 0.85)',
            color: '#00ffd0',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 4px 18px rgba(0,0,0,0.45)'
          }}
        >
          Contacto
        </button>
      )}
      {open && (
        <form onSubmit={handleSubmit} style={{
          background: 'rgba(10, 12, 24, 0.92)',
          borderRadius: '1.2rem',
          boxShadow: '0 4px 32px rgba(0,0,0,0.65)',
          color: '#fff',
          minWidth: 260,
          maxWidth: 360,
          width: '100%',
          padding: '1.8rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          border: '1px solid #00ffd0',
          backdropFilter: 'blur(6px)'
        }}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <h3 style={{ margin: 0, color: '#00ffd0', fontWeight: 700 }}>Contacto</h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              style={{
                border: 'none',
                background: 'transparent',
                color: '#00ffd0',
                fontSize: '1.2rem',
                cursor: 'pointer'
              }}
            >×</button>
          </div>
          <input type="text" placeholder="Nombre" style={{padding:'0.7rem',borderRadius:8,border:'1px solid #00ffd0',background:'#181828',color:'#fff'}} />
          <input type="email" placeholder="Email" style={{padding:'0.7rem',borderRadius:8,border:'1px solid #00ffd0',background:'#181828',color:'#fff'}} />
          <textarea placeholder="Mensaje" rows={4} style={{padding:'0.7rem',borderRadius:8,border:'1px solid #00ffd0',background:'#181828',color:'#fff'}} />
          <button type="submit" style={{padding:'0.7rem',borderRadius:8,border:'none',background:'#00ffd0',color:'#181828',fontWeight:700,cursor:'pointer'}}>Enviar</button>
        </form>
      )}
    </div>
  );
}
