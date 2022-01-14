import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../utils/fetchQuery';
import { Grid, Item, Image } from './Cast.styled';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCast(movieId).then(obj => setCast([...obj.cast]));
  }, [movieId]);

  return (
    <>
      {cast && (
        <Grid>
          {cast.map(el => {
            return (
              <Item key={el.id}>
                <Image
                  src={`https://www.themoviedb.org/t/p/w780/${el.profile_path}`}
                  alt={el.original_name}
                />
                <h3>{el.original_name}</h3>
                <p>Character: {el.character}</p>
              </Item>
            );
          })}
        </Grid>
      )}
    </>
  );
}
