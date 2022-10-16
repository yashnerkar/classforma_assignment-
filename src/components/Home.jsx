import React, { useState } from "react";
import Records from "./records/Records";
import Annotations from "./annotations/Annotations";
import ParaGraph from "./paragraph/ParaGraph";
const Home = () => {
  return (
    <div className="m-5" style={{ backgroundColor: "" }}>
      <div className="row p-5">
        <div className="col-md-3  ">
          <Records />
        </div>
        <div className="col-md-6 ">
          <ParaGraph />
        </div>
        <div className="col-md-3 ">
          <Annotations />
        </div>
      </div>
    </div>
  );
};

export default Home;
