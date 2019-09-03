import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {actions} from './store'
import centosImg from '../../img/centos.png'
import debianImg from '../../img/debian.png'
import suseImg from '../../img/suse.png'
import ubuntuImg from '../../img/ubuntu.png'
import windowsImg from '../../img/windows.png'
import ModalContainer from '../modalContainer'
import PopupBox from '../popupBox'

class Agents extends Component {
  state = {
    osImg: {
      centos: centosImg,
      debian: debianImg,
      suse: suseImg,
      ubuntu: ubuntuImg,
      windows: windowsImg
    },
    isShow: false,
    osItem: {},
    top: '',
    left: '',
    oneIndex:0
  }

  componentDidMount() {
    document.addEventListener('click', this.hidePopup)
    const {getOsList} = this.props
    getOsList()
  }
  /*
  * 弹出遮罩层后，禁止底层页面的滚动
  * */
  notScroll=()=>{
    document.body.style.position='fixed'
    document.body.style.top='0'
    document.body.style.overflow='hidden'
  }
  /*
 * 关闭遮罩层后，启用底层页面的滚动
 * */
  canScroll=()=>{
    document.body.style.position='static'
    document.body.style.top='auto'
    document.body.style.overflow='visible'
  }
  showPopup = (osItem,oneIndex, e) => {
    if(window.currentWidth<=1024){
      this.notScroll()
    }
    this.setState({
      isShow: true,
      osItem,
      top: e.currentTarget.offsetTop,
      left: e.currentTarget.offsetLeft,
      oneIndex
    })
  }
  hidePopup=()=>{
    this.canScroll()
    this.setState({
      isShow: false
    })
  }
  removeResources=(osItem,oneIndex,index)=>{
    const {patchOsList}=this.props
    let resources = [...osItem.resources]
    resources.splice(index,1)
    patchOsList(osItem.id,resources,oneIndex)
  }
  render() {
    const {osList,getOsList} = this.props
    const {osImg, isShow, osItem, top, left, oneIndex} = this.state
    let content
    if(!osList.length){
     content = <div className="no-data">暂无数据，您可以尝试<span className="refresh-data" onClick={()=>{getOsList()}}>刷新</span></div>
    }else{
      content = <ul className="system-list">
        {
          osList.map((osItem, oneIndex) => (
            <li className={`system-item border-${osItem.status}`} key={osItem.id}>
              <img className="system-icon" src={osImg[osItem.os]} alt="systemIcon"/>
              <div className="item-info">
                <div className="top-info">
                  <div className="top-inline name">
                    <i className="icon-desktop"/>
                    <span className="url-name">{osItem.name}</span>
                  </div>
                  <div id="status-type" className={`top-inline status-${osItem.status}`}>{osItem.status}</div>
                  <div className="top-inline ip">
                    <i className="icon-info"/>
                    <span className="ip-text">{osItem.ip}</span>
                  </div>
                  <div className="top-inline location">
                    <i className="icon-folder"/>
                    <span className="folder-text">{osItem.location}</span>
                  </div>
                </div>
                <div className="add-info">
                  <div className="add-button" onClick={(e) => {
                    e.nativeEvent.stopImmediatePropagation()
                    this.showPopup(osItem,oneIndex, e)
                  }}>
                    <i className="icon-plus"/>
                  </div>
                  <ul className="browser-list">
                    {
                      osItem.resources.map((resourceItem, index) => (
                        <li className="browser-item" key={index}>{resourceItem}<i className="icon-trash" onClick={()=>{this.removeResources(osItem,oneIndex,index)}} ></i></li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    }
    return (
      <Fragment>
        {content}
        <ModalContainer isShow={isShow}>
          <PopupBox osItem={osItem} top={top} left={left} oneIndex={oneIndex} hidePopup={this.hidePopup}/>
        </ModalContainer>
      </Fragment>
    )
  }
}

export default connect(
  state => ({
    osList: state.agents.osList
  }),
  dispatch => ({
    getOsList() {
      dispatch(actions.getOsList())
    },
    patchOsList(id, resources, oneIndex) {
      dispatch(actions.patchOsList(id, resources, oneIndex))
    }
  })
)(Agents)