
export default function ProjectCard({ title, description, url, language, forks, stars, created_at }) {
  const formattedDate = created_at ? new Date(created_at).toLocaleDateString() : 'Fecha no disponible';
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: 'rgba(20, 20, 40, 0.95)',
        borderRadius: '1.2rem',
        boxShadow: '0 4px 32px #0008',
        color: '#fff',
        minWidth: 220,
        maxWidth: 320,
        width: '100%',
        padding: '1.5rem',
        margin: '1rem 0',
        textDecoration: 'none',
        transition: 'transform 0.3s, box-shadow 0.3s',
        transform: 'translateY(0)',
        display: 'block',
        fontFamily: 'inherit',
        fontSize: '1.1rem',
        border: '1px solid #00ffd0',
        wordBreak: 'break-word',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px) scale(1.04)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
    >
      <div style={{marginBottom:8, color:'#aaa', fontSize:'0.9em'}}>{formattedDate}</div>
      <h3 style={{ margin: '0 0 0.5rem 0', color: '#00ffd0', fontWeight: 700 }}>{title}</h3>
      <p style={{ margin: 0, minHeight: 40 }}>{description}</p>
      <div style={{display:'flex',justifyContent:'space-between',marginTop:12,alignItems:'center'}}>
        <span style={{color:'#00ffd0',fontWeight:600}}>{language || 'Sin lenguaje'}</span>
        <span title="Forks" style={{marginLeft:8}}>Forks: {forks}</span>
        <span title="Stars" style={{marginLeft:8}}>Stars: {stars}</span>
      </div>
    </a>
  );
}
