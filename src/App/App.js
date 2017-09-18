import React, { Component } from 'react'
import Input from '../Component/Input'
import './Style/App.css'
import Table from '../Component/Table'

class App extends Component {
  constructor(props) {
    super(props);
    const data = [
      ["พนักงานบริษัทำหน้าที่ภายในสำนักงานไม่ได้ออกติดต่อภายนอก","ธุรกิจเอกชน",1,1,1],
      ["พนักงานบริษัท ติดต่อภายนอก เช่น พนักงานขาย","ธุรกิจเอกชน",1,1,1],
      ["เจ้าของบริษัท / นายหน้าจัดหางาน","เจ้าของธุรกิจ",1,1,1],
      ["เจ้าของบริษัท / นายหน้าจัดหางาน","เจ้าของธุรกิจ",1,1,1],
      ["เจ้าของบริษัทและผู้จัดการ","โฆษณา",1,1,1],
      ["กรรมกร","การผลิตแก๊สอะเซทิลิน",1,1,1],
      ["กรรมกร","อุตสาหกรรมน้ำมัน และก๊าซธรรมชาติ",1,1,1],
      ["กรรมกร","การผลิตกาว",1,1,1],
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
      <div className="list-search-dropdown">
        <div className="search-input">
          <p>อาชีพประจำ (ชื่ออาชีพ)*</p>
          <Input type="name" name="searchInput" inputChange={this.inputChange} placeholder="พิมพ์เพื่อค้นหา" />
        </div>
        <Table data={filterData} columns={columns} />
      </div>
    );
  }
}

export default App
