import IteamButton from '../../buttons/card-button';
const Practise = () => {
  return (
    <div className="container">
      <div className="divider"></div>
      <div className="section title">
        <div className="row">
          <div className="col s12">
            <div className="center-align">
              <h5>Practise</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="section item-container">
        <div className="row">
        <div className="col s6 m6">
        <IteamButton title="Vowel" icon="extension"/>
        </div>
          <div className="col s6 m6">
          <IteamButton title="Constants" icon="bubble_chart"/>
          </div>
          <div className="col s6 m6">
          <IteamButton title="Numbers" icon="local_library"/>
        </div>
        <div className="col s6 m6">
        <IteamButton title="All" icon="local_library"/>
      </div>
         
        </div>
      </div>
      <div className="section item-container">
    </div>
 
      </div>
  );
};



export default Practise;

