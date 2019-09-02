import React, {Component} from 'react'
import {connect} from 'react-redux'
import {actions} from './store'
import Navigation from '../../components/navigation'
import Overview from '../../components/overview'
import Search from '../../components/search'
import Agents from '../../components/agents'

class Home extends Component {
  currentWidth=()=>{
    const {setCurrentWidth}=this.props
    console.log(document.documentElement.clientWidth)
    setCurrentWidth(document.documentElement.clientWidth)
  }
 /* componentDidMount() {
    const {osList}=this.props
    const rightContent = document.getElementsByClassName('right-content')[0]
    const leftContent = document.getElementsByClassName('left-content')[0]

    setTimeout(()=>{
      console.log(rightContent.clientHeight)
      if(osList.length){
        leftContent.style.height = rightContent.clientHeight+'Px'
      }
    },400)
  }

  componentDidUpdate() {
    const {osList}=this.props
    const rightContent = document.getElementsByClassName('right-content')[0]
    const leftContent = document.getElementsByClassName('left-content')[0]
    console.log(rightContent.clientHeight)
    leftContent.style.height = rightContent.clientHeight+'Px'
    setTimeout(()=>{
      if(osList.length){
        leftContent.style.height = rightContent.clientHeight-13+'Px'
      }
    },400)
  }*/
  render() {
    return (
      <div id="content-wrap">
        <div id="content">
          <div className="left-place"></div>{/*占位*/}
          <div className="left-content" ref={(e)=>{this.leftContent=e}}>
            <Navigation/>
          </div>
            <div className="right-content" ref={(e)=>{this.rightContent=e}}>
              <Overview/>
              <Search/>
              <Agents/>
            </div>
        </div>
      </div>
    )
  }
}
export default connect(
  state=>({
    osList: state.agents.osList
  }),
  dispatch=>({
    setCurrentWidth(currentWidth){
      dispatch(actions.changeCurrentWidth(currentWidth))
    }
  })
  )(Home)