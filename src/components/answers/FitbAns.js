import "./FitbAns.css";

const FITBAns = (props) => {
  const options = [];
  const questions = [];
  props.data.forEach((item) => {
    options.push(item.answer);
    //let sent = item.question.replace("_________", "<b>" + item.answer + "</b>");
    let ques = item.question;
    let sent = (
      <span>
        {ques.slice(0, ques.indexOf("_"))}
        <mark>{item.answer}</mark>
        {ques.slice(ques.lastIndexOf("_") + 1)}
      </span>
    );
    questions.push(sent);
  });
  return (
    <div className="container-fluid">
      <div className="options">
        {options.map((op, i) => (
          <span className="answer" key={i}>
            {op}
          </span>
        ))}
      </div>
      <div className="divider mt-3"></div>
      <div className="questions">
        {questions.map((op, i) => (
          <div className="ques" key={i}>
            {(i + 1).toString() + " ) "}
            {op}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FITBAns;
