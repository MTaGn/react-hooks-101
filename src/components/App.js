import React, { useReducer } from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import reducer from "../reducers/index";
import EventForm from "./EventForm"
import Events from "./Events"

function App() {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className="container-fluid">
      <EventForm eventState={state} dispatch={dispatch}/>
      <Events eventState={state} dispatch={dispatch}/>
      {/* <h4>イベント一覧</h4>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
          state.map( (event) => {
            return (
            <Event event={event} dispatch={dispatch}/>
            )
          } )
          }
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
