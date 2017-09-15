import React, { Component } from 'react'
import Input from '../Component/Input'
import './Style/App.css'
import Table from '../Component/Table'

class App extends Component {
  constructor(props) {
    super(props);
    const data = [
      ["apple","aaab",1,1,1],
      ["banana","aaabbb",1,1,1],
      ["grapes","aaabbbccc",1,1,1],
      ["mango","aaabbbccc",1,1,1],
      ["orange","aaabbbcccddd",1,1,1]
    ]
    this.state = {
        searchInputValue : "",
        data : data,
        columns : ['อาชีพ','กลุ่มอาชีพ','ขั้นอาชีพ','เบี้ยเพิ่มพิเศษ','ขั้นอาชีพสำหรับ PA'],
        filterData : data
    }
  }

  inputChange = (e) =>{
    this.setState({
      searchInputValue : e.target.value,
      filterData : this.filterData(e.target.value,this.state.data)
    })
  }

  filterData = (query,data) => {
    return data.filter((el) =>
      el[0].toLowerCase().indexOf(query.toLowerCase()) > -1
    )
  }

  render() {
    const { filterData, columns } = this.state
    return (
      <div className="App">
          <Input type="name" name="searchInput" inputChange={this.inputChange} />
          {this.state.searchInputValue}
          <Table data={filterData} columns={columns} />
      </div>
    );
  }
}

export default App
