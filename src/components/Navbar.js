import "./Navbar.css";

const Navbar = (props) => {
  const fitb = () => {
    props.onChangeShowing("FITB");
  };
  const mcq = () => {
    props.onChangeShowing("MCQ");
  };
  const tf = () => {
    props.onChangeShowing("TF");
  };
  const mtf = () => {
    props.onChangeShowing("MTF");
  };

  return (
    <div id="navbar" className="container-fluid">
      <div className="name mb-0 h2">Assess Me!</div>
      <div id="controls" className="container-fluid mt-3">
        <button
          type="button"
          className="btn shadow-none navButtons"
          onClick={fitb}>
          F-I-T-B
        </button>
        <button
          type="button"
          className="btn shadow-none navButtons"
          onClick={mcq}>
          MCQs
        </button>
        <button
          type="button"
          className="btn shadow-none navButtons"
          onClick={tf}>
          True/False
        </button>
        <button
          type="button"
          className="btn shadow-none navButtons"
          onClick={mtf}>
          M-T-F
        </button>
        <button
          type="button"
          className="btn shadow-none navButtons"
          onClick={props.onChangeAnswers}>
          View Answers
        </button>
      </div>
    </div>
  );
};

export default Navbar;
