import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import "./App.css";
import MovieDetail from "./components/pages/MovieDetail";
import { useState } from "react";

function App() {
  const [movieSummary, setMovieSummary] = useState(
    JSON.parse(localStorage.getItem("movie")) || {}
  );

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home setMovieSummary={setMovieSummary} />} />
        <Route
          path="/movie/:id"
          element={<MovieDetail movieSummary={movieSummary} />}
        />
      </Routes>
    </div>
  );
}

export default App;
