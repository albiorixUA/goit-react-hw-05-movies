const BASEURL = 'https://api.themoviedb.org/3/';
const APIKEY = '606cb073ea160aeac28dec084af576e2';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrending() {
  return fetchWithErrorHandling(
    `${BASEURL}trending/movie/week?api_key=${APIKEY}`
  );
}

export function fetchSearchMovies(query) {
  return fetchWithErrorHandling(
    `${BASEURL}search/movie?api_key=${APIKEY}&query=${query}`
  );
}

export function fetchMovieDetails(id) {
  return fetchWithErrorHandling(`${BASEURL}movie/${id}?api_key=${APIKEY}`);
}

export function fetchMovieCredits(id) {
  return fetchWithErrorHandling(
    `${BASEURL}movie/${id}/credits?api_key=${APIKEY}`
  );
}

export function fetchMoviesReviews(id) {
  return fetchWithErrorHandling(
    `${BASEURL}/movies/${id}/reviews?api_key=${APIKEY}`
  );
}
