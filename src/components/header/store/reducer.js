import * as actionTypes from './action-types'
import avatar from '../../../img/avatar.jpg'
const defaultSate = {
  avatar:avatar
}
export default (state = defaultSate, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_AVATAR: return {
      avatar:action.avatar
    }
    default:
      return state
  }
}