const events = ( state = [], action ) => {
  switch(action.type) {
    case "CREATE_EVENT":
      const event = {title: action.title, body:action.body}
      let slength = state.length
      let id = slength === 0 ? 1 : state[slength - 1].id + 1
      return [...state, {id, ...event}] // id:idと同じ
    case "DELETE_EVENT":
      console.log("case_deletevent")
      return state.filter( event => event.id !== action.deleteId )
    case "DELETE_ALL_EVENT":
      return []
    default:
      return state
  }
}

export default events;