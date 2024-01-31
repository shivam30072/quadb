import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import MovieCard from "../MovieCard";
import { fetchData } from "../../api";

const Home = ({ setMovieSummary }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function callApi() {
      let res = await fetchData();
      // removed this item because it didn't had any image
      res = res.filter((item) => item?.show?.name !== "All Stars");
      setData(res);
    }

    callApi();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>MovieMania</h1>
      <div
        style={{
          padding: "24px",
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        {data.map((item) => (
          <MovieCard
            key={item.score}
            item={item}
            setMovieSummary={setMovieSummary}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
