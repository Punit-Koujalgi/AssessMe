import "./tf.css";

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

const TF = (props) => {
  let statements = [];
  props.data.forEach((item) => {
    statements.push(item.sentence);
  });
  statements = shuffleArray(statements);
  return (
    <>
      <div className="container-fluid">Mark these True or False</div>
      <div className="divider mt-2"></div>
      <div className="container-fluid my-2">
        {statements.map((sent, id) => {
          return (
            <div key={id} className="statement my-3">
              {(id + 1).toString() + " ) "}
              {sent}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default TF;
