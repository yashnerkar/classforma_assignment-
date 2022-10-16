import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleRecords } from "../actions/actionTypes";
const Records = () => {
  // const dispatch = useDispatch();
  const [set, setState] = useState(true);
  const arr = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  ];
  return (
    <div className="border border-dark">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "blue" }}
      >
        <p className="fs-4 m-0 p-2 text-light text-center">Records</p>
        <i
          class="bx bx-menu fs-2 text-light"
          onClick={() => setState(!set)}
          style={{ cursor: "pointer" }}
          id="btn"
        ></i>
      </div>
      {set
        ? arr.map((item, index) => {
            return (
              <div
                key={item}
                id={index}
                className="border border-dark p-2"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  border: "1px solid #000000",
                  cursor: "pointer",
                }}
              >
                {item}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Records;
