import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Highlighter from "react-highlight-words";
import { handleHighlight } from "../actions/actionTypes";

const ParaGraph = () => {
  const dispatch = useDispatch();
  const personData = useSelector((state) => state.reducer.personData);
  const org = useSelector((state) => state.reducer.orgData);

  const highlight = useSelector((state) => state.reducer.highlight);
  const string = `It was July 21, 1969, and Neil Armstrong awoke with a start. It was
  the day he would become the first human being to ever walk on the
  moon. The journey had begun several days earlier, when on July 16th,
  the Apollo 11 launched from Earth headed into outer space. On board
  with Neil Armstrong were Michael Collins and Buzz Aldrin. The crew
  landed on the moon in the Sea of Tranquility a day before the actual
  walk. Upon Neil’s first step onto the moon’s surface, he declared,
  “That’s one small step for man, one giant leap for mankind.” It sure
  was!`;

  // const array = () => {};

  const handleSelect = () => {
    if (highlight.person) {
      const text = window.getSelection().toString();
      dispatch({
        type: "PERSON",
        payload: {
          personData: text === "" ? null : text,
          person: text === "" ? null : "person",
        },
      });
    }
    if (highlight.org) {
      const text = window.getSelection().toString();
      dispatch({
        type: "ORG",
        payload: {
          orgData: text === "" ? null : text,
          org: text === "" ? null : "org",
        },
      });
    }
  };

  return (
    <div className=" border border-dark">
      <div className="d-flex p-2" style={{ backgroundColor: "blue" }}>
        <button
          className="btn btn-light mx-3 px-4 text-dark border border-light"
          id="person"
          onClick={(e) => {
            dispatch(handleHighlight(e.target.id));
          }}
        >
          PERSON
        </button>
        <button
          className="btn btn-light   mx-3 px-3 text-dark border border-light"
          id="org"
          onClick={(e) => {
            dispatch(handleHighlight(e.target.id));
          }}
        >
          ORG
        </button>
      </div>
      <div className="p-3 m-3">
        <Highlighter
          onMouseUp={handleSelect}
          highlightClassName="YourHighlightClass"
          searchWords={personData.personText}
          autoEscape={true}
          textToHighlight={string}
        />
      </div>
    </div>
  );
};

export default ParaGraph;
