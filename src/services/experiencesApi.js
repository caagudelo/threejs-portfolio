const DEFAULT_BASE_URL = 'https://api-porfolio.cagudelo.com';
const DEFAULT_API_KEY = '';

const buildHeaders = () => ({
  'Content-Type': 'application/x-www-form-urlencoded',
  Authorization: import.meta.env.VITE_PORTFOLIO_API_KEY || DEFAULT_API_KEY,
});

const buildEndpoint = () => {
  const baseUrl = import.meta.env.VITE_PORTFOLIO_API_BASE || DEFAULT_BASE_URL;
  const url = new URL('/experiences', baseUrl);
  url.searchParams.set('select', '*');
  url.searchParams.set('orderBy', 'start_date_experience');
  url.searchParams.set('orderMode', 'DESC');
  return url.toString();
};

export async function fetchExperiences() {
  const response = await fetch(buildEndpoint(), {
    method: 'GET',
    headers: buildHeaders(),
  });

  if (!response.ok) {
    throw new Error(`Error al obtener experiencias: ${response.status}`);
  }

  const payload = await response.json();
  return Array.isArray(payload?.results) ? payload.results : [];
}
