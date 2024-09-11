import React, { useState } from "react";
import "./styles.css";
import data from "./data"; // Importing data

export default function Accordion() {
  const [selectedData, setSelectedData] = useState(null);
  const [eneableMSelection, setMSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSSelection(getCid) {
    setSelectedData(getCid === selectedData ? null : getCid);
    console.log(selectedData);
  }

  function handleMultiSelection(getCid) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCid);

    console.log(findIndexOfCurrentId, multiple);

    if (findIndexOfCurrentId === -1) copyMultiple.push(getCid);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  }

  return (
    <div className="wrapper">
      <button
        onClick={() => setMSelection(!eneableMSelection)}
        className="btn-wrap"
      >
        Enable Multi seection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem, index) => (
            <div className="item" key={index}>
              <div
                onClick={
                  eneableMSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>

                {
                    eneableMSelection ? multiple.indexOf(dataItem.id) !== -1 &&(
                    <div className="content">{dataItem.answer}</div>)
                    : selectedData === dataItem.id && (
                        <div className="content">{dataItem.answer}</div>)
                }

                {/* {selectedData === dataItem.id ||
                multiple.indexOf(dataItem.id !== -1) ? (
                    
                ) : null} */}
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
}
