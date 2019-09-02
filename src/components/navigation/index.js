import React, {Component, Fragment} from 'react'

import {connect} from 'react-redux'
import {actions} from "./store"


class Navigation extends Component {
  /*
 * 关闭遮罩层后，启用底层页面的滚动
 * */
  canScroll=()=>{
    document.body.style.position='static'
    document.body.style.top='auto'
    document.body.style.overflow='visible'
  }

  componentDidMount() {
    if(window.currentWidth<=1024){
      this.maskDom.style.height= window.currentHeight+'px'
    }
  }

  componentDidUpdate() {
    if(window.currentWidth<=1024){
      this.maskDom.style.height= window.currentHeight+'px'
    }
  }
  hiddenNav=()=>{
    const { changeIsNavShow } = this.props
    this.canScroll()
    changeIsNavShow(false)
  }
  render() {
    const {historyList} = this.props
    return (
      <Fragment>
        <div id="mask" ref={e => {this.maskDom = e}}>
          <div id="navigation-wrap">
            <i id="nav-close" className="icon-close" onClick={this.hiddenNav}></i>
            <ul className="navigation">
            <li>
              <i className="icon-dashboard"></i>
              <span>DASHBOARD</span>
            </li>
            <li>
              <i className="icon-sitemap"></i>
              <span>AGENT</span>
            </li>
            <li>
              <i className="icon-boat"></i>
              <span>MY CRUISE</span>
            </li>
            <li>
              <i className="icon-life-bouy"></i>
              <span>HELP</span>
            </li>
          </ul>
            <div id="history-wrap">
              <div id="history-title">History</div>
              <ul className="history-list">
                {
                  historyList.map((history,index) => (<li key={index}><span>●</span>{history}</li>))
                }
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default connect(
  state => ({
    historyList:state.navigation.historyList
  }),
  dispatch => ({
    changeIsNavShow(isNavShow) {
      dispatch(actions.changeIsNavShow(isNavShow))
    }
  })
  , null)(Navigation)