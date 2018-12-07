import gamesData from './gamesData'


export default function reducer(state={
  teams:gamesData.teams,
  selectedPlayer:null
}, action){
  switch (action.type) {
    case "CHOOSE_PLAYER":
      return{...state, selectedPlayer:action.payload}
      break;
    default:
      return state
  }
}
