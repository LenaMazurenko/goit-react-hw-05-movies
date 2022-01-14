import { Img, Box } from './MovieDetails.styled';

export default function MovieDetails({ md }) {
  return (
    <Box>
      <Img
        src={`https://www.themoviedb.org/t/p/w780/${md.backdrop_path}`}
        alt={md.original_title}
      />
      <div>
        <h1>{md.original_title}</h1>
        <p>Average: {md.vote_average}</p>
        <h3>Overview</h3>
        <p>{md.overview}</p>
        <h3>Genres</h3>
        <ul>
          {md.genres.map(genre => {
            return <li key={genre.id}>{genre.name}</li>;
          })}
        </ul>
      </div>
    </Box>
  );
}
