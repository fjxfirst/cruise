import * as actionTypes from './action-types'
export const changeNavigation=(navigationList)=>({
  type:actionTypes.CHANGE_NAVIGATION,
  navigationList
})
export const changeIsNavShow=(isNavShow)=>({
  type:actionTypes.CHANGE_ISNAVSHOW,
  isNavShow
})