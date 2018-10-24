import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Signin from './components/Signin.js';
import Home from './components/Home.jsx';
import Chat from './components/Chat.jsx';
import Survey from './components/Survey.jsx';
import Nav from './components/NavigationBar.jsx';
import Profiles from './components/Profiles.jsx';
import Revolutionary from "./components/archetypes/revolutionary.jsx";
import Sage from "./components/archetypes/sage.jsx";
import Ruler from "./components/archetypes/ruler.jsx";
import Magician from "./components/archetypes/magician.jsx";
import Lover from "./components/archetypes/lover.jsx";
import Jester from "./components/archetypes/jester.jsx";
import Innocent from "./components/archetypes/innocent.jsx";
import Hero from "./components/archetypes/hero.jsx";
import Explorer from "./components/archetypes/explorer.jsx";
import Everyperson from "./components/archetypes/everyperson.jsx";
import Creator from "./components/archetypes/creator.jsx";
import Caregiver from "./components/archetypes/caregiver.jsx";

class App extends React.Component {
    render () {
    return (
      <BrowserRouter>
       <div>
       <Nav />
           <Switch>
             <Route exact path="/" component={Home}/>
             <Route path="/Chat" component={Chat}/>
             <Route path="/Survey" component={Survey}/>
             <Route path="/Profiles" component={Profiles}/>

             <Route exact path="/revolutionary" component={Revolutionary}/>
             <Route path="/jester" component={Jester}/>
             <Route path="/lover" component={Lover}/>
             <Route exact path="/caregiver" component={Caregiver}/>
             <Route path="/everyperson" component={Everyperson}/>
             <Route path="/innocent" component={Innocent}/>
             <Route exact path="/ruler" component={Ruler}/>
             <Route path="/sage" component={Sage}/>
             <Route path="/magician" component={Magician}/>
             <Route exact path="/hero" component={Hero}/>
             <Route path="/creator" component={Creator}/>
             <Route path="/explorer" component={Explorer}/>

            </Switch>
         </div>
     </BrowserRouter>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
