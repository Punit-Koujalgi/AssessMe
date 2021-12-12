import "./FitbAns.css";

const FITBAns = (props) => {
  const questions = [];
  const answers = [];
  props.data.forEach((item) => {
    let ques = item.question;
    let ans = item.answer;
    questions.push(ques);
    answers.push(ans);
  });
  return (
    <div className="container-fluid">
      <div className="divider mt-3"></div>
      <div className="questions">
        {questions.map((op, i) => (
          <div className="ques" key={i}>
            {(i + 1).toString() + " ) "}
            {op}
          </div>
        ))}
        {answers.map((op, i) => (
          <div className="ques" key={i}>
            {"Ans: "}
            {op}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FITBAns;
