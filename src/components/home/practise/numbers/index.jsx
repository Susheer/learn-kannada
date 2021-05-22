import React,{useEffect, useState} from 'react';
import {mapping,mappHindi,numbers } from "../../../../store";
import FloatingButton  from "../../../floating-button";
function App() {
    const getNumber=()=>{
        return Math.floor(Math.random()* numbers.length)
    }
const [number,setnumber]=useState(numbers[0]);
const [index,setIndex]=useState(0);
const [show,setShow]=useState(false);
let question=(<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
  <h1 className="center-align pulse" style={{textTransform:'capitalize',padding:'9px 20px'}}>{index}</h1>
</div>)
let answer=(<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<h1 className="center-align pulse" style={{textTransform:'capitalize',padding:'9px 20px'}}>{number}</h1>
</div>)
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row" style={{ marginTop: "15%" }}>
            <div className="col s12 m2"></div>
            <div className="col s12 m8 ">
              <div className="card">
                <div className="card-content">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems:'center'
                    }}
                  >
                    {
                      show?
                      answer
                    :question
}
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m2"></div>
          </div>
          <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              marginTop: "5%",
            }}
          >
            <button className="waves-effect waves-light btn-large  indigo z-depth-5" onClick={()=>{
              let newIndex=getNumber();
              setIndex(newIndex);
              setnumber(numbers[newIndex])
            }}>
              Next Question <i className="material-icons right">arrow_forward</i>
            </button>
           
          </div>
        </div>
      </div>
      <FloatingButton state={show} showPic={setShow}/>
    </>
  );
}

export default App;
