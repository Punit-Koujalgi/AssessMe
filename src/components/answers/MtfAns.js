import "./MtfAns.css";

const MTFAns = (props) => {
  let keys = props.data.keys;
  let defs = props.data.defs;
  return (
    <div className="container-fluid behind-mtf">
      <div className="row">
        <div className="col-sm-5 heading pb-2">Names</div>
        <div className="col-sm-7 heading pb-2">Meanings</div>
      </div>
      {Array.from({ length: keys.length }).map((k, i) => {
        return (
          <div className="row row1 my-3" key={i}>
            <div className="col-sm-5 pb-2">
              <mark>{keys[i]}</mark>
            </div>
            <div className="col-sm-7 pb-2">{defs[i]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MTFAns;
