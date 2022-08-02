import { get_words, get_rank } from "./actionsTypes";
const axios = require("axios");
// Create Actions Creators

export function getWords() {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get("http://localhost:4000/api/words");
      dispatch({
        type: get_words,
        payload: response.data.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getRank(data) {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post("http://localhost:4000/api/rank", {
        score: data.score,
      });
      dispatch({
        type: get_rank,
        payload: response.data.rank,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
