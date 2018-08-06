import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: [1,2,3,4]
    }
    this.getSkills();
  }

  getSkills() {
    const url='https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json';
    fetch(url)
      .then(res => res.json())
      .then(customSkills => {
        console.log(customSkills.skills);
        this.setState({
          skills: customSkills.skills
        })
      })
  }
  render() {
    return (
      <div className="App">
        
        <select>
          {this.state.skills.map((item)=>{
            return <option value={item} key={item}>{item}</option>
          })}
        </select>
      </div>
    );
  }
}

export default App;
