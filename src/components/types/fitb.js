import "./fitb.css";

const FITB = (props) => {
  const options = [];
  const questions = [];
  props.data.forEach((item) => {
    options.push(item.answer);
    questions.push(item.question);
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
export default FITB;
