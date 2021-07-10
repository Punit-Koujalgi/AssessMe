import "./mcq.css";

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

const getOptions = (ans, arr) => {
  //console.log(arr);
  if (arr.length > 3) {
    arr = arr.slice(0, 3);
  }
  let newArray = [...arr, ans];
  //console.log(newArray);
  return shuffleArray(newArray);
};

const MCQ = (props) => {
  // console.log(props.data);
  const map1 = new Map();
  map1.set(0, "a");
  map1.set(1, "b");
  map1.set(2, "c");
  map1.set(3, "d");
  return (
    <div className="container-fluid">
      {props.data.map((item, i) => {
        return (
          <div className="ques" key={i}>
            {(i + 1).toString() + " ) "}
            {item.question}
            {getOptions(item.answer, item.distractors).map((op, j) => {
              return (
                <div className="option">
                  {map1.get(j) + " ) "}
                  {op}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default MCQ;
