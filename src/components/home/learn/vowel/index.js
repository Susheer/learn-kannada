import React from "react";
import { vowel, vowelHindi } from "../../../../store";
import Label from "../../../re-useable/card";

function Item({ title, subtitle }) {
  return (
    <div className="col s2 ">
      <Label>
        <p>{title}</p>
        <p>{subtitle}</p>
      </Label>
    </div>
  );
}

function App() {
  var list = [];
  for (let obj of vowel) {
    for (let key in obj) {
      list.push({ first_lng: obj[key], second_lng: vowelHindi[key] });
    }
  }
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row" style={{ marginTop: "15%" }}>
            {list.map((el) => (
              <Item title={el.first_lng} subtitle={el.second_lng} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
