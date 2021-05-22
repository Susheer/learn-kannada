import { useState } from "react"; 


function Item(props){
   const [active,setActive] =useState(false)
    let color=null;
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
    if(active){
     color="active"
     cardClasses+=" "+color+" white-text z-depth-5" 
    }
    else{
        cardStyle.backgroundColor="#e3e9f1"
    }
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
        onMouseOver={()=>{
            setActive(true)
            
          }}
          onClick={()=>{
            if(props.navigateTo){
              props.navigateTo();
            }
          }}
          onMouseOut={()=>{
           
            setActive(false)
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
            <i class="material-icons" style={{fontSize:'3.5rem'}}>{props.icon}</i>
            <p style={{color:cardStyle.backgroundColor?"gray":"white",margin:0}}>{props.title}</p>
          </div>
        </div>
      </div>
    );
}

export default Item;