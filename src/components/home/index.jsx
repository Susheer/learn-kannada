import Item from './item';
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
          <div className="col s6">
            <Item title="Read" icon="local_library"/>
          </div>
          <div className="col s6">
          <Item title="Practise" icon="extension"/>
          </div>
        </div>
      </div>
      <div className="section item-container">
      <div className="row">
        <div className="col s6">
          <Item title="Write" icon="border_color"/>
        </div>
        <div className="col s6">
        <Item title="Settings" icon="settings"/>
        </div>
      </div>
    </div>
 
      </div>
  );
};



export default Home;

