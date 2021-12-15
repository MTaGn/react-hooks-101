const events = ( state = [], action ) => {
  switch(action.type) {
    case "CREATE_EVENT":
      const event = {title: action.title, body:action.body}
      const length = state.length
      // const id = length === 0 ? 1 : state[length - 1].id + 1
      const id = length === 0 ? 1 : length + 1
      // return {id:id, ...event}
      return {id, ...event} //上と同じ意味
    case "DELETE_EVENT":
      return state
    case "FELETE_ALL_EVENT":
      return state
    default:
      return state
  }
}

export default events