import SeoHead from '@/components/SeoHead';
import { useRouter } from 'next/router';

type MoviesType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number
}

export default function Home({ results }: { results: MoviesType[] }) {
  const router = useRouter();
  const handleMove = (id:number, title: string) => {
    router.push(
      `/movies/${title}/${id}`
    )
  }

  return (
    <div className="container">
      <SeoHead title="Home" />
      {
        results?.map((movie: MoviesType) => (
            <div className="movie" onClick={() => handleMove(movie.id, movie.original_title)} key={movie.id} >
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              <h4>{movie.original_title}</h4>
            </div>
        ))
      }
       <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
export async function getServerSideProps() {
  const { results } = await ( await fetch(`http://localhost:3000/api/movies`)).json();

  return {
    props: {
      results
    }
  }
}