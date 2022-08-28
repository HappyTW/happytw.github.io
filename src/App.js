import React, {Component} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './components/Home'
import AboutMe from './components/AboutMe';
import Links from './components/Links';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
          <ReactFullpage
            navigation = {true}
            sectionsColor = {['#fff2cc', '#ffd966', '#f1c232']}
            anchors={['Home', 'About-Me', 'Links']}
            navigationTooltips = {['Home', 'About Me', 'Links']}
            render={({state, fullpageApi}) => {
              return (
                <ReactFullpage.Wrapper>
                  <Home />
                  <AboutMe />
                  <Links />
                </ReactFullpage.Wrapper>
              );
            }}
          />
      </div>
    );
  }
}

export default App;