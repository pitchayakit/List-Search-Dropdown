import React, { Component } from 'react'
import Input from '../Component/Input'
import Table from '../Component/Table'
import Button from '../Component/Button'

class App extends Component {
  constructor(props) {
    super(props);
    const data = [
      [{"important": 1,"career":"พนักงานบริษัทำหน้าที่ภายในสำนักงานไม่ได้ออกติดต่อภายนอก"},"ธุรกิจเอกชน",1,1,1],
      [{"important": 1,"career":"พนักงานบริษัท ติดต่อภายนอก เช่น พนักงานขาย"},"ธุรกิจเอกชน",1,1,1],
      [{"important": 1,"career":"เจ้าของบริษัท / นายหน้าจัดหางาน"},"เจ้าของธุรกิจ",1,1,1],
      [{"important": 1,"career":"เจ้าของบริษัท / นายหน้าจัดหางาน"},"เจ้าของธุรกิจ",1,1,1],
      [{"important": 1,"career":"เจ้าของบริษัทและผู้จัดการ"},"โฆษณา",1,1,1],
      [{"important": 0,"career":"กรรมกร"},"การผลิตแก๊สอะเซทิลิน",1,1,1],
      [{"important": 0,"career":"กรรมกร"},"อุตสาหกรรมน้ำมัน และก๊าซธรรมชาติ",1,1,1],
      [{"important": 0,"career":"กรรมกร"},"การผลิตกาว",1,1,1]
    ]
    this.state = {
        searchInputValue : "",
        data : data,
        columns : ['อาชีพ','กลุ่มอาชีพ','ขั้นอาชีพ','เบี้ยเพิ่มพิเศษ','ขั้นอาชีพสำหรับ PA'],
        filterData : data,
        showTable: false,
    }
  }

  inputChange = (e) =>{
    this.setState({
      searchInputValue : e.target.value,
      filterData : this.filterData(e.target.value,this.state.data)
    })
  }

  inputClick = () => {
    this.setState({
      showTable : true
    })
  }

  filterData = (query,data) => {
    return data.filter((el) =>
      el[0].career.toLowerCase().indexOf(query.toLowerCase()) > -1
    )
  }

  backButtonClick = () => {
    this.setState({
      showTable : false
    })
  }

  displayTable () {
    const { filterData, columns } = this.state

    return (
      <div>
        <Table data={filterData} columns={columns} />
        <div className="text-center">
          <Button backButtonClick={this.backButtonClick} label="กลับ" />
        </div>
      </div>
    )
  }

  render() {
    const { showTable } = this.state
    return (
      <div className="list-search-dropdown">
        <div className="search-input">
          <p>อาชีพประจำ (ชื่ออาชีพ)*</p>
          <Input type="name" name="searchInput" inputChange={this.inputChange} placeholder="พิมพ์เพื่อค้นหา" inputClick={this.inputClick} />
        </div>
        {showTable ? 
          this.displayTable() : null
        }
      </div>
    );
  }
}

export default App
