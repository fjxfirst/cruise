import React, {Component} from 'react'
import {connect} from 'react-redux'
import {actions} from '../agents/store'
class PopupBox extends Component {
  componentDidMount() {
    const {top, left} = this.props
    if(window.currentWidth<=1024){
      this.maskDom.style.height= window.currentHeight+'px'
    }else {
      this.popupDom.style.left = left - 18 + 'Px'
      this.popupDom.style.top = top + 41 + 'Px'
    }
  }

  componentDidUpdate() {
    const {top, left} = this.props
    if(window.currentWidth<=1024){
      this.maskDom.style.height= window.currentHeight+'px'
    }else{
      this.popupDom.style.left = left - 18 + 'Px'
      this.popupDom.style.top = top + 41 + 'Px'
    }
  }
  addResources = () => {
    const { osItem, oneIndex, patchOsList, hidePopup }=this.props
    let resources = this.browserInput.value.split(',')
    resources = resources.filter(resource => resource !== '')
    resources = [...osItem.resources, ...resources]
    patchOsList(osItem.id, resources, oneIndex)
    hidePopup()
  }

  stopPropagation=(e)=>{
    e.nativeEvent.stopImmediatePropagation()
  }
  render() {
    console.log(window.currentWidth)
    return (
      <div id="mask" ref={e => {this.maskDom = e}}>
        <div id="popup-box" ref={e => {this.popupDom = e}} onClick={this.stopPropagation}>
          <div className="triangle"/>
          <i className="icon-close close" onClick={()=>{this.props.hidePopup()}}/>
          <p className="warn">Separate multiple resource name with commas</p>
          <input id="browser-input" type="text" ref={e => {this.browserInput = e}}/>
          <div className="button-wrap">
            <div className="add-resources" onClick={this.addResources}>Add Resources</div>
            <div className="cancel" onClick={()=>{this.props.hidePopup()}}>Cancel</div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  dispatch=>({
    patchOsList(id, resources, oneIndex) {
      dispatch(actions.patchOsList(id, resources, oneIndex))
    }
  })
  )(PopupBox)