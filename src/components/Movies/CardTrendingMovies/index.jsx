import { useQuery } from "react-query";
import axios from "axios";
import { Card } from "antd";
import { useNavigate, Link } from "react-router-dom";
import useMovieStore from "../../../store/movies";
const { Meta } = Card;
const CardTrendingMovies = () => {
  const { setSelectedMovie, setSelectedMovieId } = useMovieStore();

  const navigate = useNavigate();
  const handleClick = (movieItem) => {
    setSelectedMovie(movieItem);
    navigate("/info/movie");
  };

  const handleClickId = (movieId) => {
    setSelectedMovieId(movieId);
    navigate("/reviews/movie");
  };

  const { data } = useQuery(
    "/trending/movie",
    async () => {
      const res = await axios({
        url: "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmE5ZDUyNTUyYWMwM2Y2NTcyM2Y5Yzk0NThmNTQ5NiIsInN1YiI6IjY2MjZhZDU2YjlhMGJkMDE3YWQ3N2RiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bG96fhN_Kz3uFKwobMwdYjnJAm1VRtWUY4CiGlK62aY",
        },
      });
      return res.data.results;
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((movie) => (
          <li key={movie.id}>
            <Card
              style={{
                height: 500,
                position: "relative",
              }}
              cover={
                <img
                  className="cursor-pointer"
                  onClick={() => handleClick(movie)}
                  alt="example"
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                />
              }
            >
              <Meta title={movie.title} description={movie.overview} />
              <Link
                className="border-2 py-2 px-8 bg-[#4096ff] font-bold rounded-md inline-block absolute bottom-0 left-0"
                to="/reviews/movie"
                onClick={() => handleClickId(movie.id)}
              >
                Reviews
              </Link>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CardTrendingMovies;
