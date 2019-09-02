import * as actionTypes from './action-types'

const defaultSate = {
  osList:[],
  total:0,
  physicalNum:0,
  virtualNum:0,
  buildingNum:0,
  idleNum:0
}
export default (state = defaultSate, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_OSLIST: return (function () {
      let total = action.osList.length
      let physicalNum = 0
      let virtualNum = 0
      let buildingNum = 0
      let idleNum = 0
      action.osList.forEach(item=>{
        if(item.type === 'physical'){
          physicalNum++
        }else if (item.type === 'virtual') {
          virtualNum++
        }
        if(item.status === 'building'){
          buildingNum++
        }else if (item.status === 'idle') {
          idleNum++
        }
      })
      return {
        osList:action.osList,
        total,
        physicalNum,
        virtualNum,
        buildingNum,
        idleNum
      }
    })();
    case actionTypes.CHANGE_RESOURCES: return (function () {
      const newState = JSON.parse(JSON.stringify(state))
      newState.osList[action.oneIndex].resources = action.resources
      return newState
    })();
    default: return state
  }
}