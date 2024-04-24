import useMovieStore from "../../store/movies";
import { Link } from "react-router-dom";
const InfoMovies = () => {
  const { newMovie } = useMovieStore();
  return (
    <>
      <div className="w-[80%] mx-auto mt-8">
        <div>
          <h3 className="mb-3 text-[32px]">Movie information</h3>
          <Link
            className="border-2 py-2 px-5 bg-purple-100 font-bold rounded-md mb-5 inline-block"
            to="/home"
          >
            Back
          </Link>
          <div className="flex justify-around items-start">
            <div>
              <img
                className="w-[400px] h-[450px]"
                src={`https://image.tmdb.org/t/p/original/${newMovie.poster_path}`}
                alt={newMovie.title}
              />
            </div>
            <div className="text-balance flex flex-col gap-3">
              <h3><span className="font-bold pr-2 text-[20px]">Title:</span> {newMovie.original_title}</h3>
              <p className="w-[500px]"><span className="font-bold pr-2 text-[20px]">Overview:</span> {newMovie.overview}</p>
              <p><span className="font-bold pr-2 text-[20px]">Vote count:</span> {newMovie.vote_count}</p>
              <p><span className="font-bold pr-2 text-[20px]">Popularity:</span> {newMovie.popularity}</p>
              <span><span className="font-bold pr-2 text-[20px]">Date:</span> {newMovie.release_date}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoMovies;
