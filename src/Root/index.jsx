import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import InfoMoviesPage from "../pages/InfoMoviesPage";
import CommentMoviesPage from "../pages/CommentMoviesPage";

const Root = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/info/movie" element={<InfoMoviesPage />} />
        <Route path="/reviews/movie" element={<CommentMoviesPage />} />
      </Routes>
    </>
  );
};

export default Root;
