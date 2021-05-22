import React,{useEffect} from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from "./components/home"
import Practise from "./components/home/practise"
import PractiseVowel from "./components/home/practise/vowel"
import PractiseNumber from "./components/home/practise/numbers"
import PractiseConstants from "./components/home/practise/constants"
import PractiseAll from "./components/home/practise/all"
import "./App.css";
import Navbar from "./components/navbar";
import * as M from "materialize-css/dist/js/materialize.min.js"
function App() {
  useEffect(()=>{
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems);
      var collapsible = document.querySelectorAll('.collapsible');
       M.Collapsible.init(collapsible);
     
  },[])

 
  return (
    <>
    <Navbar/>
    <Switch> 
      <Route path="/" exact component={Home}/>
      <Route path="/Vowels" exact component={Vowels}/>
      <Route path="/Constents" exact component={Constents}/>
      <Route path="/Practise" exact component={Practise}/>
      <Route path="/practise/vowel" exact component={PractiseVowel}/>
      <Route path="/practise/number" exact component={PractiseNumber}/>
      <Route path="/practise/constants" exact component={PractiseConstants}/>
      <Route path="/practise/all" exact component={PractiseAll}/>
    </Switch>
     </>
  )
}


function Constents() {
  return <h2>Constents</h2>;
}

function Vowels() {
  return <h2>Vowels</h2>;
}

export default App;
