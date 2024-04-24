import { create } from "zustand";

const useMoviesStore = create((set) => ({
  searchQuery: "",
  setSearchQuery: (value) => set({ searchQuery: value }),
  selectedMovieId: null,
  setSelectedMovieId: (movieId) => set({ selectedMovieId: movieId }),
  newMovie: [],
  setSelectedMovie: (movieItem) => set({ newMovie: movieItem }),
}));

export default useMoviesStore;
