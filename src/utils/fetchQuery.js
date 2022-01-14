const BASE_URL = 'https://api.themoviedb.org/3';
export const KEY = '926288ccedb892ed59969fcc82f10d15';

async function fetchQuery(param) {
  return fetch(`${BASE_URL}/${param}?api_key=${KEY}&language=en-US`).then(
    response => {
      return response.ok
        ? response.json()
        : Promise.reject(new Error('Not found'));
    },
  );
}

export async function fetchTrendingMovies() {
  return fetchQuery('trending/movie/day');
  //https://api.themoviedb.org/3/   trending/all/day    ?api_key=<<api_key>>
}

export async function fetchMovie(param) {
  return fetchQuery(`movie/${param}`);
  //  https://api.themoviedb.org/3/   movie/{movie_id}    ?api_key=<<api_key>>&language=en-US/
}

export async function fetchMovieCast(movieId) {
  //  return fetchQuery(`movie/${id}/credits`);
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
  );
}

export async function fetchMovieReviews(id) {
  return fetchQuery(`movie/${id}/reviews`);
}
