import Item from '../buttons/grid-button';
import {useHistory } from "react-router-dom"; 
const Home = () => {
  let history=useHistory();
  const onClickButton=(route)=>{
    history.push(route);
  }
  return (
    <div className="container">
      <div className="divider"></div>
      <div className="section title">
        <div className="row">
          <div className="col s12">
            <div className="center-align">
              <h5>What are you looking for?</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="section item-container">
        <div className="row">
        <div className="col s12">
        <Item title="Learn" icon="extension" navigateTo={onClickButton.bind(this,"/Learn")}/>
        </div>
          <div className="col s12">
          <Item title="Practise" icon="bubble_chart" navigateTo={onClickButton.bind(this,"/Practise")}/>
          </div>
          <div className="col s12">
          <Item title="Quiz" icon="local_library"/>
        </div>
        </div>
      </div>
      <div className="section item-container">
    </div>
 
      </div>
  );
};



export default Home;

