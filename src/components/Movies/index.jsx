import CardTrendingMovies from "./CardTrendingMovies";
import SearchMovies from "./SearchMovies";
import useMoviesStore from "../../store/movies";

const Movies = () => {
  const { searchQuery } = useMoviesStore();
  return (
    <div className="w-[80%] mx-auto mt-8">
      <h3 className="mb-[10px] font-bold text-[40px]">Movies List</h3>
      <SearchMovies />
      {searchQuery === "" && <CardTrendingMovies />}
    </div>
  );
};

export default Movies;
