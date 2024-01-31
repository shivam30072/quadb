import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item, setMovieSummary }) => {
  const name = item?.show?.name;
  const rating = item?.show?.rating?.average || 6;
  const genre = item?.show?.genres?.join(", ");

  const navigate = useNavigate();
  const handleClick = () => {
    setMovieSummary(item);
    localStorage.setItem("movie", JSON.stringify(item));
    navigate(`/movie/${item?.show?.id}`);
  };

  return (
    <div
      className="card"
      style={{
        marginBottom: "24px",
        borderRadius: "8px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <div style={{ height: "280px", borderRadius: "8px" }}>
        <div style={{ width: "250px", borderRadius: "8px", height: "200px" }}>
          <img
            src={item?.show?.image?.original || item?.show?.image?.medium}
            alt=""
            width={"100%"}
            height={"200px"}
            style={{
              objectFit: "cover",
              borderTopRightRadius: "8px",
              borderTopLeftRadius: "8px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#ECF1F3",
            borderBottomRightRadius: "8px",
            borderBottomLeftRadius: "8px",
            padding: "8px",
            gap: "4px",
          }}
        >
          <span>Name: {name}</span>
          <span>Rating: {rating}/10</span>
          <span>Genre: {genre}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
