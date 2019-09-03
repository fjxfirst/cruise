import React, {Component, Fragment} from 'react'
import logo from '../../img/logo.svg'
import {connect} from 'react-redux'
import {actions} from '../navigation/store'
import ModalContainer from '../modalContainer'
import Navigation from '../navigation'

class Header extends Component {
  state = {
    isShowUserControl: false
  }

  componentDidMount() {
    document.addEventListener('click', this.hiddenUserControl)
  }

  /*
  * 弹出遮罩层后，禁止底层页面的滚动
  * */
  notScroll = () => {
    document.body.style.position = 'fixed'
    document.body.style.top = '0'
    document.body.style.overflow = 'hidden'
  }

  showNav = () => {
    const {changeIsNavShow} = this.props
    if (window.currentWidth <= 1024) {
      this.notScroll()
    }
    changeIsNavShow(true)
  }
  hiddenUserControl = () => {
    this.setState({
      isShowUserControl: false
    })
  }
  showUserControl = () => {
    if(this.state.isShowUserControl){
      this.setState({
        isShowUserControl: false
      })
    }else{
      this.setState({
        isShowUserControl: true
      })
    }
  }

  render() {
    const {avatar, isNavShow} = this.props
    const {isShowUserControl} = this.state
    return (
      <Fragment>
        <header id="header">
          <div id="header-content">
            <div id="navicon" className="icon-navicon" onClick={this.showNav}></div>
            <img id="logo" src={logo} alt="logo"/>
            <div className="user-control" onClick={(e) => {
              e.nativeEvent.stopImmediatePropagation()
              this.showUserControl()
            }}>
              <img className="user-img" src={avatar} alt="avatar"/>
              <i className="icon-angle-down"></i>
              {
                isShowUserControl && <div className="control-wrap">
                  <div className="option">
                    <i className="icon-id-card"></i><span>Profile</span>
                  </div>
                  <div className="option">
                    <i className="icon-sign-in"></i><span>Sign Out</span>
                  </div>
                </div>
              }
            </div>

          </div>

        </header>
        <ModalContainer isShow={isNavShow}>
          <Navigation/>
        </ModalContainer>
      </Fragment>
    )
  }
}

export default connect(
  state => ({
    avatar: state.header.avatar,
    isNavShow: state.navigation.isNavShow
  }),
  dispatch => ({
    changeIsNavShow(isNavShow) {
      dispatch(actions.changeIsNavShow(isNavShow))
    }
  })
  , null)(Header)