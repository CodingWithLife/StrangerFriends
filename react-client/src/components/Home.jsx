import React from 'react';
import "../css/Home.css";

class Home extends React.Component {
  render () {
  return (
    <div  className="home">

    <div class="block">
      <article class="message">
        <div className="message-body">
        Without Judgement There aren’t good or bad Archetypes,but
        each has a strength and shadow side. Relatable We recognize
        ourselves and others in these characters.Fluid Our top
        Archetypes may fluctuate depending on situations we find
        ourselves in.Adaptable Once we are aware of our ‘natural’
        reactions, we can choose differently. Memorable Individuals,
        leaders and team now have an easy reference point for
        acknowledging behavior and discussing change.Meaningful
        Understanding the different motives of the Archetypes often
        answers the ‘why’ behind our purpose in life or our organization’s
        mission in the world.
        </div>
      </article>
      <div className="leftSideBar">
      <ul>
      <a href="https://twitter.com/CWithlife"><li><i className="fab fa-twitter-square"></i></li></a>
      <a href="https://www.facebook.com/coding.withlife.9"><li><i className="fab fa-facebook-square"></i></li></a>
      <a href="https://www.instagram.com/codingwithlife/"><li><i className="fab fa-instagram"></i></li></a>
      </ul>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <center><img className="logo" src="https://saraletourneau.files.wordpress.com/2016/11/arch-group_tworows.png?w=550&h=235"/></center>









<footer class="footer">
<div class="content has-text-centered">
  <p>
    <strong id="Hola" className="title is-2">Holacode</strong><br/>
    <strong className="Rights">Thesis Project © 2018</strong>
  </p>
</div>
</footer>
    </div>)
  }
}

export default Home;
// <a href="mailto:codingwithlife@gmail.com?Subject=Hello%20again"target="_top">Contac Us</a>
