import axios from "axios";

const URL = "https://api.tvmaze.com/search/shows?q=all";

export const fetchData = async () => {
  let res;
  try {
    res = await axios.get(URL);
    if (res) {
      res = res.data;
    }
  } catch (error) {
    console.log(error);
    res = [];
  }

  return res;
};
