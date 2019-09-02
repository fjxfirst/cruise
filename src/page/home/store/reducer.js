import * as actionTypes from './action-types'


const defaultSate = {
  currentWidth:0
}
export default (state = defaultSate, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_WIDTH: return {
      currentWidth:action.currentWidth
    }
    default:
      return state
  }

}