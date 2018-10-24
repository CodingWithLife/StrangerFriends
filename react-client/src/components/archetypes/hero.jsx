import React from 'react';



class Hero extends React.Component {
    render () {
      return (
        <div className='hero'>
            <h3 className='title1'>The Hero</h3>
              <p>
              The hero thrives on being strong and standing up for others.
              They may feel they have a destiny that they must accomplish.
               Heroes are courageous in their quest for justice and equality and will stand up to even the most powerful forces if they think they are wrong.
              </p>

              <div className='careimg'></div>
                <img src="https://assets2.archetypes.com/wp-content/uploads/2015/01/nav-icons_Caregiver-150x150.png"  />
                  <br/>

            <p>
              <ul><strong className='bold1'>Goal:</strong> to help others and protect the weak</ul>
              <ul><strong className='bold1'>Fear:</strong> being perceived as weak or frightened</ul>
              <ul><strong className='bold1'>Weakness:</strong> arrogance, always needing another battle to fight</ul>
              <ul><strong className='bold1'>Talent:</strong> competence and courage</ul>
            </p>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>)
  }
}

export default Hero;
