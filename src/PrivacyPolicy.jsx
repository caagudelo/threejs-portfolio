import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      lineHeight: '1.6'
    }}>
      <Link to="/" style={{
        color: '#00ffd0',
        textDecoration: 'none',
        display: 'inline-block',
        marginBottom: '20px'
      }}>
        ← Volver al Inicio
      </Link>
      
      <h1 style={{ color: '#00ffd0', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Política de Privacidad</h1>
      
      <p><strong>Última actualización:</strong> {new Date().toLocaleDateString()}</p>
      
      <p>
        Bienvenido a mi portafolio. Esta Política de Privacidad describe cómo se recopila, utiliza y protege la información
        cuando visitas este sitio web.
      </p>

      <h2>1. Información que recopilamos</h2>
      <p>
        Este sitio web es principalmente un portafolio personal e informativo. Por lo general, no requerimos que los usuarios
        creen cuentas ni proporcionen información personal sensible para navegar por el sitio.
      </p>
      <p>
        Sin embargo, podemos recopilar información de las siguientes maneras:
      </p>
      <ul>
        <li>
          <strong>Información de contacto:</strong> Si decides contactarme a través de enlaces de correo electrónico o formularios
          (si los hubiera), recibiré tu dirección de correo electrónico y cualquier otra información que elijas proporcionar.
        </li>
        <li>
          <strong>Datos técnicos y de uso:</strong> Como la mayoría de los sitios web, podemos recopilar automáticamente cierta
          información cuando visitas nuestro sitio, como tu dirección IP, tipo de navegador, sistema operativo y páginas visitadas.
          Esto se utiliza para fines analíticos y para mejorar la experiencia del usuario.
        </li>
      </ul>

      <h2>2. Uso de la información</h2>
      <p>La información recopilada se utiliza para:</p>
      <ul>
        <li>Responder a tus consultas o mensajes.</li>
        <li>Mejorar y optimizar el funcionamiento del sitio web.</li>
        <li>Analizar tendencias de tráfico y uso.</li>
      </ul>

      <h2>3. Cookies y Tecnologías de Rastreo</h2>
      <p>
        Este sitio puede utilizar cookies o tecnologías similares para mejorar tu experiencia. Puedes configurar tu navegador
        para rechazar todas las cookies o para que te avise cuando se envíe una cookie via la configuración de tu navegador.
      </p>

      <h2>4. Servicios de Terceros</h2>
      <p>
        Podemos utilizar servicios de terceros (como bibliotecas de fuentes, análisis de tráfico o alojamiento) que pueden
        recopilar información anónima o identificable según sus propias políticas de privacidad.
      </p>

      <h2>5. Cambios a esta política</h2>
      <p>
        Me reservo el derecho de actualizar esta Política de Privacidad en cualquier momento. Te recomiendo revisar esta página
        periódicamente para estar al tanto de cualquier cambio.
      </p>

      <h2>6. Contacto</h2>
      <p>
        Si tienes preguntas sobre esta Política de Privacidad, puedes contactarme a través de los medios proporcionados en la página principal.
      </p>
      
      <footer style={{ marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #333', fontSize: '0.9em', color: '#888' }}>
        <p>&copy; {new Date().getFullYear()} Camilo Agudelo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
