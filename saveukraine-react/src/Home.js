import React from 'react';
import Container from 'react-bootstrap/Container';
import Navigation from './Navigation';
import Footer from './Footer';
import './Home.css';
// import headerimage from '/Users/merissabridgeman/dev/saveukraine/saveukraine/saveukraine-react/src/images/Ukraineheader.jpeg';

function Home(props) {
return (
  <>
  <Container>
    <Navigation />
    <div className="header">
    </div>
    <h1 className='title'> How to use this site</h1>
    <h2 className='directions'>
    <ul>
      <li>
      Select a radio tuner, and use the in the frequency tab as frequencies.
      </li>
      <br/>
      <li>
      For a detailed overview: Monitoring The Airwaves During the Ukrainian Conflict

      Russian Military Operations have been recorded on channels below, and posted here for archive.
      </li>
      <br/>
      <li>
      If you hear any Russian War Chatter, please record and submit it to us.
      </li>
      <br/>
      <li>
        Lastly, Join our Discord Server! https://discord.gg/K49eBFUC
      </li>
    </ul>
    </h2>
    <Footer />
  </Container>
  </>
  );
}

export default Home;