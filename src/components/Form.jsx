import { useState ,useRef } from "react"
import { useDispatch ,useSelector} from "react-redux";
import{ProgressBar} from "./ProgressBar";
import {getRank} from '../Redux/action_creators';
export const Form = ({words}) => {
const dispatch = useDispatch();
const choices = ["verb","noun","adjective","adverb"]
const [disableForm, setDisableForm] = useState(false)
const [answer,setAnswer] = useState("")
const [toggleNext,setToggleNext] = useState(false)
const [toggleSubmit,setToggleSubmit] = useState(false)
const [trueanswer,setTrueanswer] = useState(false)
const [showResult,setShowResult] = useState(false)
const[finished,setFinished] = useState(false)
const [score,setScore] = useState(0)
const handleChoice = (e) => {
setAnswer(e.target.value)
setToggleSubmit(true)
}
// handel submitting the answer
const [i,setI] = useState(1)
const handleSubmit = () => {
setShowResult(true);
setToggleNext(true);
setDisableForm(true);
setToggleSubmit(false);
if (answer  === words[i-1].pos ) {setTrueanswer(true) ; setScore(score+1)}else setTrueanswer(false)
setProgress(progress+10)
}
// handel getting the next word
const wordRef = useRef()
const [progress,setProgress] = useState(0)
const handleNext = () => {
// handel changing the question word after the answer is submitted
if (i < words.length) {
wordRef.current.innerText = words[i].word
setI(i+1)
setShowResult(false);
setToggleNext(false);
setDisableForm(false);
}
if (i === words.length) {
setFinished(true)
}
}
const handelRank = () => {
const student_score = (score/10)*100;
// const student_score = 50

dispatch(getRank({score:student_score}))
}
 

return(
<>
  <div className="d-flex mt-5 mb-2 justify-content-center" >
    {words&&(
   <h5 ref={wordRef}>{words[0]?.word}</h5>
    )}
  </div>
 <div className="container text-right">

  {choices.map((choice) => (
     <div className="form-check mb-2">
        <input className="form-check-input" type="radio" name="gridRadios" id={choice} value={choice} onClick={handleChoice} disabled={disableForm} />
        <label className="form-check-label" for={choice}>
          {choice}
        </label>
    </div>
  ))}
 {showResult && !trueanswer? (
    <div className="alert alert-danger mt-5"> Wrong answer </div>
  ):null}
 {showResult && trueanswer? (
    <div className="alert alert-success mt-5"> right answer </div>
  ):null}
<div  style={{marginTop:"100px",marginBottom:"30px"}}>
  <ProgressBar progress={progress}/>
</div>
{!finished? (
  <>
   <button type="button" disabled={!toggleSubmit} onClick={handleSubmit} className="btn btn-primary mt-5 mb-10">submit</button>
   <button type="button" disabled={!toggleNext} onClick={handleNext} className="btn btn-primary ml-3 mt-5 mb-10">next</button>
 </>
):
   <button type="button" disabled={!toggleNext} onClick={handelRank} className="btn btn-primary ml-3 mt-5 mb-10">Get Rank</button>
}
</div>
</>
)
}

    