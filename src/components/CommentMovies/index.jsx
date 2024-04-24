import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import axios from "axios";
import useMovieStore from "../../store/movies";

const CommentMovies = () => {
  const { selectedMovieId } = useMovieStore();

  const { data } = useQuery(
    selectedMovieId && "/reviews/movie",
    async () => {
      const res = await axios({
        url: `https://api.themoviedb.org/3/movie/${selectedMovieId}/reviews?language=en-US&page=1`,
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
      enabled: selectedMovieId !== null,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      <div className="w-[80%] mx-auto mt-8">
        <h3 className="mb-3 text-[32px]">Movie Reviews</h3>
        <Link
          className="border-2 py-2 px-5 bg-purple-100 font-bold rounded-md mb-5 inline-block mr-10"
          to="/home"
        >
          Back
        </Link>
        {selectedMovieId && data?.length === 0 && <p>No reviews found.</p>}
        {data?.map((item) => (
              <div key={item.id} className="border-2 rounded-md mb-5 p-3">
                <p className="font-bold text-[20px] mb-2">{item.author}</p>
                <p className="break-normal text-[16px]">{item.content}</p>
                <span>{item.updated_at.slice(0, -14)}</span>
              </div>
            ))}
      </div>
    </>
  );
};

export default CommentMovies;
