import React from 'react';
import "../css/Header.css"
import {Link} from 'react-router-dom';


class Profiles extends React.Component {
    render () {
    return (

    <div>
    <Link to="/outlaw"><img src="https://culturetalk.com/wp-content/uploads/2015/07/outlaw-icon-400x400.png"/></Link>
    <Link to="/jester"><img src="https://www.culturetalk.com/wp-content/uploads/2015/07/jester-icon-400x400.png" /></Link>
    <Link to="/lover"><img src="https://culturetalk.com/wp-content/uploads/2015/07/lover-icon-400x400.png"/></Link>
    <Link to="/caregiver"><img src="https://www.culturetalk.com/wp-content/uploads/2015/07/caregiver-icon-400x400.png"  /></Link>
    <Link to="/everyman"><img src="https://culturetalk.com/wp-content/uploads/2015/07/everyman-icon-400x400.png"/></Link>
    <Link to="/innocent"><img src="https://culturetalk.com/wp-content/uploads/2015/07/innocent-icon-400x400.png"  /></Link>
    <Link to="/ruler"><img src="https://www.culturetalk.com/wp-content/uploads/2015/07/ruler-icon-400x400.png" /></Link>
    <Link to="/sage"><img src="https://www.culturetalk.com/wp-content/uploads/2015/07/caregiver-icon-400x400.png"  /></Link>
    <Link to="/magician"><img src="https://culturetalk.com/wp-content/uploads/2015/07/magician-icon-400x400.png"/></Link>
    <Link to="/hero"><img src="https://culturetalk.com/wp-content/uploads/2015/07/hero-icon-400x400.png"/></Link>
    <Link to="/creator"><img src="https://www.culturetalk.com/wp-content/uploads/2015/07/creator-icon-400x400.png" /></Link>
    <Link to="/explorer"><img src="https://www.culturetalk.com/wp-content/uploads/2015/07/explorer-icon-400x400.png" /></Link>
  	</div>
    )
  }
}

export default Profiles;
//falta la imagen 1 y 5 
