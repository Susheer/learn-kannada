import React,{useState} from 'react';
import "./App.css";
import FloatingButton from "./components/floating-button";
import Navbar from "./components/navbar";
import {mapping,mappHindi } from "./images";

function App() {

const [index,setIndex]=useState(0);
const [pic,setPIC]=useState(mapping[0]);
const [show,setShow]=useState(false);
let key=Object.keys(pic)[0];
let question=(<div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
  <h1 className="center-align pulse" style={{textTransform:'capitalize',padding:'9px 20px'}}>{key}</h1>
  <h1 className="center-align pulse" style={{textTransform:'capitalize',padding:'0px 32px'}}>{mappHindi[key]}</h1>
</div>)
  return (
    <>
      <Navbar />

      <div class="section">
        <div class="container">
          <div class="row" style={{ marginTop: "15%" }}>
            <div class="col s12 m2"></div>
            <div class="col s12 m8 ">
              <div class="card">
                <div class="card-content">
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
                      <h1 className="center-align pulse" style={{textTransform:'capitalize'}}>{pic[key]}</h1>
                    :question
}
                  </div>
                </div>
              </div>
            </div>
            <div class="col s12 m2"></div>
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
            <a class="waves-effect waves-light btn-large  indigo z-depth-5" onClick={()=>{
              let num=Math.floor(Math.random()*mapping.length);
              
              setPIC(mapping[num])

            }}>
              Next Question <i class="material-icons right">arrow_forward</i>
            </a>
           
          </div>
        </div>
      </div>
      <FloatingButton state={show} showPic={setShow}/>
    </>
  );
}

export default App;
