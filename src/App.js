import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Joyride from 'react-joyride';
import './react-joyride-compiled.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(index, last) {
    if (this.joyride.getProgress().index === 2) {
      setTimeout(() => {
        this.joyride.next();
        }, 1); 
    }
  }

  render() {

    return (
      <div className="App">
        <Joyride
          ref={c => (this.joyride = c)}
          steps={[
            {
              title: 'First Step',
              text: 'Prototype!',
              selector: '.App-intro',
            },
            {
              title: 'Tab One',
              selector: '.one',
            },
            {
              title: 'Click Tab',
              text: 'DO NOT CLICK NEXT, CLICK THE TAB!',
              selector: '.twoTab',
            },
            {
              title: 'Tab Two',
              selector: '.two',
            }
            ]}
          run={true} // or some other boolean for when you want to start it
          type={"continuous"}
          showOverlay={true}
          allowClicksThruHole={true}
          autoStart={true}
        />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Tabs onSelect={this.handleSelect}>
          <TabList>
            <Tab>One</Tab>
            <Tab className="twoTab">Two</Tab>
          </TabList>
          <TabPanel>
            <p className="one">11111111</p>
          </TabPanel>
          <TabPanel>
            <p className="two">22222222</p>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
