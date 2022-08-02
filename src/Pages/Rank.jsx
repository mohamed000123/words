import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const Rank = () => {
  const rank = useSelector((state) => state.rank);
  // reset the quiz page
  const handleReset = () => {
    window.location.reload();
  };
  return (
    <>
      <h4 className="m-3 "> Your rank is: {rank}</h4>
      <button
        type="button"
        onClick={handleReset}
        className="btn btn-primary ml-3 mt-5 mb-10"
      >
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          Try Again?
        </Link>{" "}
      </button>
    </>
  );
};
