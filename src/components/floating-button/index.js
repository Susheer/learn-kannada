const FloatingButton = ({state,showPic}) => {
  return (
    <div class="fixed-action-btn">
      <a class="btn-floating btn-large indigo" onClick={()=>{
        showPic(!state);
      }}>
        <i class="large material-icons">remove_red_eye</i>
      </a>
    </div>
  );
};

export default FloatingButton;
