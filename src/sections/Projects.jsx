
import React from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Projects({ repos, loading, error }) {
  return (
    <section id="proyectos" style={{
      position: 'absolute',
      top: '12vh',
      left: 0,
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      zIndex: 10,
      pointerEvents: 'auto',
      flexWrap: 'wrap',
      padding: '0 2vw',
      boxSizing: 'border-box',
      minHeight: '40vh',
    }}>
      {loading && <div style={{color:'#00ffd0',fontWeight:700}}>Cargando repositorios...</div>}
      {error && <div style={{color:'red'}}>{error}</div>}
      {!loading && !error && repos.map((repo) => (
        <ProjectCard
          key={repo.id}
          title={repo.name}
          description={repo.description}
          url={repo.html_url}
          language={repo.language}
          forks={repo.forks}
          stars={repo.stargazers_count}
          created_at={repo.created_at}
        />
      ))}
    </section>
  );
}
