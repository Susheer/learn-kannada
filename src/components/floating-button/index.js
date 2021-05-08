const FloatingButton = ({state,showPic}) => {
  return (
    <div className="fixed-action-btn">
      <a className="btn-floating btn-large indigo" onClick={()=>{
        showPic(!state);
      }}>
        <i className="large material-icons">remove_red_eye</i>
      </a>
    </div>
  );
};

export default FloatingButton;
