import { getWords } from "../Redux/action_creators";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Form } from "../components/Form";
export const Practice = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // calling the action to get the words
  useEffect(() => {
    dispatch(getWords());
  }, []);
  const words = state.words;
  return (
    <>
      <h4 className="m-3 ">
        {" "}
        Please choose one answer and click on next to get the next word{" "}
      </h4>
      <Form words={words} />
    </>
  );
};
