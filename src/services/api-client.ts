import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f49d2b1dcc414ba8afb090756f92f6fc",
  },
});
