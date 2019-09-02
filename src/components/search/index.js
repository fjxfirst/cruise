import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {actions} from "../agents/store"

class Search extends Component {
  searchByName = () => {
    const {getOsListByName} = this.props
    let name = this.nameInput.value
    getOsListByName(name)
  }
  mideaRender = () => {
    const {getOsList, getOsListByType} = this.props
    if (window.currentWidth < 786) {
      return (
        <Fragment>
          <div className="search-content">
            <label>
              <input type="text" ref={e => {
                this.nameInput = e
              }}/>
              <i className="icon-search" onClick={this.searchByName}></i>
            </label>
            <i className="icon-th-card"></i>
            <i className="icon-th-list actived"></i>
          </div>
          <ul>
            <li onClick={getOsList}>All</li>
            <li onClick={() => {
              getOsListByType('physical')
            }}>Physical
            </li>
            <li onClick={() => {
              getOsListByType('virtual')
            }}>Virtual
            </li>
          </ul>
        </Fragment>)
    }else {
      return (
        <Fragment>
          <ul>
            <li onClick={getOsList}>All</li>
            <li onClick={() => {
              getOsListByType('physical')
            }}>Physical
            </li>
            <li onClick={() => {
              getOsListByType('virtual')
            }}>Virtual
            </li>
          </ul>
          <div className="search-content">
            <label>
              <input type="text" ref={e => {
                this.nameInput = e
              }}/>
              <i className="icon-search" onClick={this.searchByName}></i>
            </label>
            <i className="icon-th-card"></i>
            <i className="icon-th-list actived"></i>
          </div>
        </Fragment>)
    }
  }

  render() {

    return (
      <div className="type">
        {this.mideaRender()}
      </div>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    getOsList() {
      dispatch(actions.getOsList())
    },
    getOsListByType(type) {
      dispatch(actions.getOsListByType(type))
    },
    getOsListByName(name) {
      dispatch(actions.getOsListByName(name))
    }
  })
)(Search)