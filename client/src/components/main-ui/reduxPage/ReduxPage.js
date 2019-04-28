import React, { Component } from 'react'

import {connect} from 'react-redux'


class ReduxPage extends Component {

    //eslint-disable-next-line
    constructor(){
        super();
    }

    componentDidMount(){
        console.log("Is work === " + this.props.global.isWork)
    }


  render() {
    return (
      <div className="container">
        <h1>This connected with redux</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    global: state.global
})


export default connect(mapStateToProps)(ReduxPage);