import Item from '../buttons/grid-button';
const Home = () => {
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
            <Item title="Quiz" icon="local_library"/>
          </div>
          <div className="col s12">
          <Item title="Learn" icon="extension"/>
          </div>
        </div>
      </div>
      <div className="section item-container">
    </div>
 
      </div>
  );
};



export default Home;

