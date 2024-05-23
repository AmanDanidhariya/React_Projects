import { useState } from "react";
import "./style.css";
import data from "./data.js";

const Accordion = () => {
  //single select
  const [selected, setSelected] = useState(null);
  //for button
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  //contain multiple select
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  function handleMultiSelection(currentId) {
    let prevData = [...multiple];
    const findIndexOfCurrentId = prevData.indexOf(currentId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) {
      prevData.push(currentId);
    } else {
      prevData.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(prevData);
  }

  console.log(selected);=== item.id
  console.log(multiple);
  console.log(enableMultiSelect);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
        {enableMultiSelect
          ? "disable multi selection"
          : "Enable multi selection"}
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => {
            return (
              <div key={item.id} className="item">
                <div
                  className="title"
                  onClick={
                    enableMultiSelect
                      ? () => handleMultiSelection(item.id)
                      : () => handleSingleSelection(item.id)
                  }
                >
                  <h3 className="question">{item.question}</h3>
                  <span className="open">+</span>
                </div>
                { selected === item.id || multiple.indexOf(item.id) !== -1 ? (
                  <div className="content">{item.answer}</div>
                ) : null}
              </div>
            );
          })
        ) : (
          <div>no data found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
