import React from "react"

const Event = ({event, dispatch}) => { // {props}にしたらprops.eventでundefinedになる
  const { id, title, body } = event
  const handleDeleteEvent = eventId => {
    console.log("eventid:"+eventId)
    dispatch({
      type: "DELETE_EVENT",
      deleteId: eventId
    })
  }
      return (
      <tr key={id}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{body}</td>
        <td><button type="button" className="btn btn-danger" onClick={() => handleDeleteEvent(id)}>削除</button></td>
      </tr>
      )
}

export default Event