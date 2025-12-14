// Servicio para obtener repositorios públicos de GitHub de un usuario
export async function fetchGithubRepos(username) {
  const url = `https://api.github.com/users/${username}/repos?type=owner&per_page=100`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Error al obtener los repositorios');
  const data = await response.json();
  // Puedes filtrar, ordenar o mapear aquí si lo deseas
  return data.filter(repo => repo.stargazers_count >= 0);
}
