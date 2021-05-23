import { useState } from "react";

function Item(props){
    let cardStyle={
        width: "100%",
        height: "125px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "10px",
      }
      let cardClasses="card";
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
        
          onClick={()=>{
            if(props.onClick){
              props.onClick();
            }
          }}
          class={cardClasses}
          style={cardStyle}
        >
          <div
            className="content"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems:'center',
              flexDirection: "column",
            }}
          >
            {props.children}
          </div>
        </div>
      </div>
    );
}

export default Item;