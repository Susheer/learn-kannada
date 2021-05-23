import React from "react";
function App() {
  let question = (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1
        className="center-align pulse"
        style={{ textTransform: "capitalize", padding: "9px 20px" }}
      >
        On progres
      </h1>
      <h1
        className="center-align pulse"
        style={{ textTransform: "capitalize", padding: "0px 32px" }}
      >
        :)
      </h1>
    </div>
  );
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
                      alignItems: "center",
                    }}
                  >
                    {question}
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
            <button
              className="waves-effect waves-light btn-large  indigo z-depth-5"
              onClick={() => {}}
            >
              Next Question{" "}
              <i className="material-icons right">arrow_forward</i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
