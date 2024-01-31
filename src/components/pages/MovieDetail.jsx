import React from "react";

const MovieDetail = ({ movieSummary }) => {
  const image =
    movieSummary?.show?.image?.original || movieSummary?.show?.image?.medium;
  console.log(movieSummary);

  const name = movieSummary?.show?.name;
  const rating = movieSummary?.show?.rating?.average || 6;
  const genre = movieSummary?.show?.genres?.join(", ");
  const premiered = movieSummary?.show?.premiered;
  const runtime = movieSummary?.show?.runtime;
  const status = movieSummary?.show?.status;
  const summary = movieSummary?.show?.summary;
  const country = movieSummary?.show?.network?.country?.name;
  return (
    <div
      style={{
        padding: "24px",
        background: "#F4F8F9",
        minHeight: "100vh",
        display: "flex",
        gap: "12px",
      }}
    >
      <div style={{ width: "400px" }}>
        <img
          src={image}
          alt=""
          width={"100%"}
          style={{ borderRadius: "8px" }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: "24px" }}>Name: {name}</span>
        <span style={{ fontSize: "16px", marginTop: "8px" }}>
          Rating: {rating}/10
        </span>
        <span style={{ fontSize: "16px", marginTop: "8px" }}>
          Premiered: {premiered}
        </span>
        <span style={{ fontSize: "16px", marginTop: "8px" }}>
          Country: {country}
        </span>
        <span style={{ fontSize: "16px", marginTop: "8px" }}>
          Runtime: {runtime} min
        </span>
        <span style={{ fontSize: "16px", marginTop: "8px" }}>
          Genres: {genre}
        </span>
        <span style={{ fontSize: "16px", marginTop: "8px" }}>
          Status: {status}
        </span>
        <span style={{ fontSize: "16px", marginTop: "8px", maxWidth: "800px" }}>
          Summary: {summary}
        </span>
      </div>
    </div>
  );
};

export default MovieDetail;
