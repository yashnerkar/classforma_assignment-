import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../modal/Modal";
const Annotations = () => {
  const [data, setData] = useState([{}]);
  const [set, setState] = useState(true);
  // const dispatch = useDispatch();
  const person = useSelector((state) => state.reducer.personData);
  const org = useSelector((state) => state.reducer.orgData);

  useEffect(() => {
    setData([{ ...person, ...org }]);
  }, [person, org]);
  return (
    <div className="p-2 border border-dark">
      <div
        className="d-flex border border-dark text-light justify-content-around align-items-center p-0 m-0"
        style={{ backgroundColor: "blue" }}
      >
        <p className="fs-4 p-0 m-0">Annotations</p>
        <i
          class="bx bx-menu fs-2 text-light"
          onClick={() => setState(!set)}
          style={{ cursor: "pointer" }}
          id="btn"
        ></i>
      </div>
      {set
        ? data.map((data, index) => {
            return (
              <>
                <div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">highlighted text</th>
                        <th scope="col">Tag</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>{data.personText}</td>
                        <td>{data.person}</td>
                        <td>
                          <Modal />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>{data.orgText}</td>
                        <td>{data.org}</td>
                        <td>
                          <Modal />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            );
          })
        : null}
    </div>
  );
};

export default Annotations;
