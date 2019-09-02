import * as actionTypes from './action-types'
import axios from 'axios'

export const changeOsList = (osList) => ({
  type: actionTypes.CHANGE_OSLIST,
  osList
})
export const changeResources = (id,resources, oneIndex) => ({
  type: actionTypes.CHANGE_RESOURCES,
  id,
  resources,
  oneIndex
})
export const getOsList = () => (
  (dispath) => {
    axios.get('http://localhost:3001/agents')
    .then(res => {
      if (res.status === 200) {
        dispath(changeOsList(res.data))
      }
    })
  }
)
export const patchOsList = (id, resources, oneIndex) => (
  (dispatch) => {
    axios.patch(`http://localhost:3001/agents/${id}`,{resources})
    .then(res=>{
      if(res.status === 200){
        dispatch(changeResources(id,resources, oneIndex))
      }
    })
  }
)

export const getOsListByType = (type) => (
  (dispatch) => {
    axios.get(`http://localhost:3001/agents?type=${type}`)
    .then(res=>{
      if(res.status === 200){
        dispatch(changeOsList(res.data))
      }
    })
  }
)

export const getOsListByName = (name) => (
  (dispatch) => {
    axios.get(`http://localhost:3001/agents?name_like=${name}`)
    .then(res=>{
      if(res.status === 200){
        dispatch(changeOsList(res.data))
      }
    })
  }
)