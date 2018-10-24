import React from 'react';



class Creator extends React.Component {
    render () {
      return (
        <div className='the creator'>
          <h3 className='title1'>The Creator</h3>

            <p>The creator is born to bring something into being that does not yet exist.
              They hate to be passive consumers of anything, much preferring to make their own entertainment.
              Creators are often artists or musicians though they can be found in almost any area of work.
            </p>

            <div className='creatorimg'></div>
              <img src="https://kayeputnam.com/wp-content/uploads/2017/03/creator-icon-300x300.png"  />
              <br/>
            <p>
              <ul><strong className='bold1'>Goal:</strong> to create things of enduring value</ul>
              <ul><strong className='bold1'>Fear:</strong> failing to create anything great</ul>
              <ul><strong className='bold1'>Weakness:</strong> perfectionism and creative blocks caused by fear of not being exceptional</ul>
              <ul><strong className='bold1'>Talent:</strong> creativity and imagination</ul>
            </p>

            <br/>
            <br/>
            <br/>
            <br/>


        </div>)
      }
    }

export default Creator;
