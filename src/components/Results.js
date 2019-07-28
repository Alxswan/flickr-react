import React from "react";
import Card from "./Card";


function Results({ data }) {
  return (
    <div className="results">
      {data &&
        data.length &&
        data.map((item, i) => <Card key={`card-${i}`} item={item} />)}
    </div>
  );
}

export default Results;
