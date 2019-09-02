import {combineReducers} from 'redux'
import {headerReducer} from '../components/header/store'
import {navigationReducer} from '../components/navigation/store'
import {agentsReducer} from '../components/agents/store'
import {detailReducer} from '../page/home/store'

export default combineReducers({
  header:headerReducer,
  navigation:navigationReducer,
  agents:agentsReducer,
  detail:detailReducer
})