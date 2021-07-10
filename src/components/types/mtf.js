import "./mtf.css";

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

const MTF = (props) => {
  let keys = props.data.keys;
  let defs = props.data.defs;

  keys = shuffleArray([...keys]);
  defs = shuffleArray([...defs]);

  return (
    <div className="container-fluid behind-mtf">
      <div className="row">
        <div className="col-sm-5 heading pb-2">Names</div>
        <div className="col-sm-7 heading pb-2">Meanings</div>
      </div>
      {Array.from({ length: keys.length }).map((k, i) => {
        return (
          <div className="row row1 my-3" key={i}>
            <div className="col-sm-5 pb-2">{keys[i]}</div>
            <div className="col-sm-7 pb-2">{defs[i]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MTF;
