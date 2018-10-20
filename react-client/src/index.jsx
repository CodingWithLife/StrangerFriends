import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/Home.jsx';
import Chat from './components/Chat.jsx';
import Survey from './components/Survey.jsx';
import Nav from './components/NavigationBar.jsx';
import Profiles from './components/Profiles.jsx';

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
            </Switch>
         </div>
     </BrowserRouter>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
