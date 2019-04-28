import React, { Component } from 'react'


// เอามาใช้ในการเปลั่ยนหน้า โดยเรียกใช้ผ่าน this.props.history.push("/route");
import { withRouter } from 'react-router-dom'

class Index extends Component {
    //--บรรทัดข้างล่างขาดไม่ได้ ถ้าใครมี eslint ใน extension ไม่งั้นมันจะ errors
    //eslint-disable-next-line
    constructor(){
        super();
        this.state = ({
            infoString: "ตัวอย่างปุ่มไปหน้าต่างๆ",
            infoNumber: 555555
        })
    }

    //Creating function to handler the button
    //@@ สร้างฟังชั่นมารอรับการกดของปุ่ม
    onMoveToTestPage(){
        console.log("ปุ่มได้ถูกกด"); // Log ดูเฉยๆ
        this.props.history.push("/test");
    }

  render() {
    return (
      <div className="container mt-5">
            <h1>{this.state.infoString}</h1>
            <button type="button" class="btn btn-primary mr-5" onClick={this.onMoveToTestPage.bind(this)}>ไปหน้าอื่น</button>
            <button type="button" class="btn btn-primary mr-5">ไปหน้าอื่น</button>
            <button type="button" class="btn btn-primary" style={{marginRight: "5px"}}>ไปหน้าอื่น</button>
      </div>
    )
  }
}

export default withRouter(Index);