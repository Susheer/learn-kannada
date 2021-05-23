import React from "react";
import { numbers } from "../../../../store";
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
 numbers.forEach((el,index)=>{
  list.push({ first_lng: index, second_lng: el });
 }) 
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
