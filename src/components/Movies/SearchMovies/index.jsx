import { Input, Card } from "antd";
import { useQuery } from "react-query";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import useMoviesStore from "../../../store/movies";

const { Search } = Input;
const { Meta } = Card;

const SearchMovies = () => {
  const { setSelectedMovie, setSearchQuery, searchQuery, setSelectedMovieId } =
    useMoviesStore();
  const navigate = useNavigate();

  const handleClick = (movieItem) => {
    setSelectedMovie(movieItem);
    navigate("/info/movie");
  };

  const handleClickId = (movieId) => {
    setSelectedMovieId(movieId);
    navigate("/reviews/movie");
  };

  const onSearch = (value) => {
    setSearchQuery(value);
  };

  const { data } = useQuery(
    `/search_query=${searchQuery}`,
    async () => {
      if (!searchQuery) return;
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmE5ZDUyNTUyYWMwM2Y2NTcyM2Y5Yzk0NThmNTQ5NiIsInN1YiI6IjY2MjZhZDU2YjlhMGJkMDE3YWQ3N2RiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bG96fhN_Kz3uFKwobMwdYjnJAm1VRtWUY4CiGlK62aY",
          },
        }
      );
      return res.data.results;
    },
    {
      enabled: !!searchQuery,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      <Search
        className="mb-6 inline-block w-full sm:w-80 lg:w-96 custom-search max-ms:w-full max-ms:w-[350px]"
        placeholder="Enter your search movie"
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((item) => (
          <div key={item.id}>
            <Card
              style={{
                height: 500,
              }}
              cover={
                <img
                  className="cursor-pointer"
                  onClick={() => handleClick(item)}
                  alt="example"
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                />
              }
            >
              <Meta title={item.original_title} description={item.overview} />
              <Link
                className="border-2 py-2 px-8 bg-[#4096ff] font-bold rounded-md inline-block absolute bottom-0 left-0"
                to="/reviews/movie"
                onClick={() => handleClickId(item.id)}
              >
                Reviews
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchMovies;
