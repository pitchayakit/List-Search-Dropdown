import React, { Component } from 'react'
import Input from '../Component/Input'
import './Style/App.css'

class App extends Component {
  render() {
    let occupation = [
      { "career":"aaa", "careerGroup":"aaa", "careerClass":1, "specialChip":1, "paClass":1 },
      { "career":"aaabbb", "careerGroup":"aaabbb", "careerClass":2, "specialChip":2, "paClass":2 },
      { "career":"aaabbbccc", "careerGroup":"aaaccc", "careerClass":3, "specialChip":3, "paClass":3 }
    ]

    return (
      <div className="App">
          <Input type="name" name="searchInput"/>
          {occupation.career}
      </div>
    );
  }
}

export default App
