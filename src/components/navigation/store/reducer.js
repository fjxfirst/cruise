import * as actionTypes from './action-types'

const defaultSate = {
  navigationList:[],
  historyList:[
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
    'bjstdmngbgr02/Acceptance_test',
  ],
  isNavShow:false
}
export default (state = defaultSate, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_NAVIGATION: return {
      ...state,
      navigationList:action.navigationList,
    };
    case actionTypes.CHANGE_ISNAVSHOW: return {
      ...state,
      isNavShow:action.isNavShow
    }
    default:
      return state
  }
}