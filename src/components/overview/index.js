import React, {Component} from 'react'
import {connect} from 'react-redux'


class Overview extends Component {
  render() {
    const {total,physicalNum,virtualNum,buildingNum,idleNum} = this.props
    return (
      <div className="general-information">
        <div id="buildbox" className="box1 building-box">
          <div className="building-img icon-cog"></div>
          <span className="type-name">Building</span>
          <span className="number">{buildingNum}</span>
        </div>
        <div className="box1 idle-box">
          <span className="type-name">ldle</span>
          <span className="number">{idleNum}</span>
          <i className="coffee icon-coffee"></i>
        </div>
        <div className="box1 total">
          <div className="total-item">
            <div className="top-key">ALL</div>
            <div className="bottom-value">{total}</div>
            <span className="top-key-desk">ALL</span>
            <span className="bottom-value-desk">{total}</span>
          </div>
          <div className="total-item">
            <div className="top-key">PHYSICAL</div>
            <div className="bottom-value">{physicalNum}</div>
            <span className="top-key-desk">PHYSICAL</span>
            <span className="bottom-value-desk">{physicalNum}</span>
          </div>
          <div className="total-item">
            <div className="top-key">VIRTUAL</div>
            <div className="bottom-value">{virtualNum}</div>
            <span className="top-key-desk">VIRTUAL</span>
            <span className="bottom-value-desk">{virtualNum}</span>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(
  state=>({
    total:state.agents.total,
    physicalNum:state.agents.physicalNum,
    virtualNum:state.agents.virtualNum,
    buildingNum:state.agents.buildingNum,
    idleNum:state.agents.idleNum
  }),
  null
)(Overview)