import React from 'react';
import "../css/Header.css"
import "../css/Profiles.css";
import $ from "jquery";
import {Link} from 'react-router-dom';


class Profiles extends React.Component {
  constructor(props) {
   super(props);

 }
    render () {
    return (

    <div>
    <br/>
    <br/>
    <br/>
    <br/>

      <div className="columns">
        <div className="column">
          <center><h3>Revolutionary</h3></center>
          <Link to="/revolutionary"><img src="https://culturetalk.com/wp-content/uploads/2015/07/revolutionary-icon-400x400.png"/></Link>
          <center><h3>Jester</h3></center>
          <Link to="/jester"><img src="https://www.culturetalk.com/wp-content/uploads/2015/07/jester-icon-400x400.png" /></Link>
        </div>
        <div className="column">
          <center><h3>lover</h3></center>
          <Link to="/lover"><img src="https://culturetalk.com/wp-content/uploads/2015/07/lover-icon-400x400.png"/></Link>
          <center><h3>Caregiver</h3></center>
          <Link to="/caregiver"><img src="https://www.culturetalk.com/wp-content/uploads/2015/07/caregiver-icon-400x400.png"  /></Link>
          <br/>
          <br/>
        </div>
        <div className="column">
        <center><h3>Every person</h3></center>
          <Link to="/everyperson"><img src="https://culturetalk.com/wp-content/uploads/2015/07/everyperson-icon-400x400.png"/></Link>
          <center><h3>Innocent</h3></center>
          <Link to="/innocent"><img src="https://culturetalk.com/wp-content/uploads/2015/07/innocent-icon-400x400.png"  /></Link>
        </div>
          <div className="column">
          <center><h3>Ruler</h3></center>
          <Link to="/ruler"><img src="https://www.culturetalk.com/wp-content/uploads/2015/07/ruler-icon-400x400.png" /></Link>
          <center><h3>Sage</h3></center>
          <Link to="/sage"><img src="https://www.culturetalk.com/wp-content/uploads/2015/07/caregiver-icon-400x400.png"  /></Link>
          </div>
          <div className="column">
          <center><h3>Magician</h3></center>
          <Link to="/magician"><img src="https://culturetalk.com/wp-content/uploads/2015/07/magician-icon-400x400.png"/></Link>
          <center><h3>Hero</h3></center>
          <Link to="/hero"><img src="https://culturetalk.com/wp-content/uploads/2015/07/hero-icon-400x400.png"/></Link>
          </div>
          <div className="column">
          <center><h3>Creator</h3></center>
          <Link to="/creator"><img src="https://www.culturetalk.com/wp-content/uploads/2015/07/creator-icon-400x400.png" /></Link>
          <center><h3>Explorer</h3></center>
          <Link to="/explorer"><img src="https://www.culturetalk.com/wp-content/uploads/2015/07/explorer-icon-400x400.png" /></Link>
          </div>
      </div>
    </div>
    )
  }
}

export default Profiles;
//falta la imagen 1 y 5
