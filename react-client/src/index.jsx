import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/Home.jsx';
import Chat from './components/Chat.jsx';
import Survey from './components/Survey.jsx';
import Nav from './components/NavigationBar.jsx';
import Profiles from './components/Profiles.jsx';
import Outlaw from "./components/archetypes/outlaw.jsx"

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

             <Route exact path="/outlaw" component={Outlaw}/>
             <Route path="/jester" component={Outlaw}/>
             <Route path="/lover" component={Outlaw}/>
             <Route exact path="/caregiver" component={Outlaw}/>
             <Route path="/everyman" component={Outlaw}/>
             <Route path="/innocent" component={Outlaw}/>
             <Route exact path="/ruler" component={Outlaw}/>
             <Route path="/sage" component={Outlaw}/>
             <Route path="/magician" component={Outlaw}/>
             <Route exact path="/hero" component={Outlaw}/>
             <Route path="/creator" component={Outlaw}/>
             <Route path="/explorer" component={Outlaw}/>

            </Switch>
         </div>
     </BrowserRouter>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
