
import {useSelector} from "react-redux";
export const Rank = () => {
const rank = useSelector((state) => state.rank);
const handleReset = () => {
    window.location.reload();
}
return (
 <>
    <h4 className="m-3 "> Your rank is: {rank}</h4>
   <button type="button"  onClick={handleReset} className="btn btn-primary ml-3 mt-5 mb-10">Try Again?</button>
 </>
)
}