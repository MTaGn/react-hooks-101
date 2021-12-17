import React, { useReducer, useState } from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import reducer from "../reducers/index";
import Event from "./Event"

function App() {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [state, dispatch] = useReducer(reducer, [])
  const addEvent = e => {
    // 画面リフレッシュ防ぐ
    e.preventDefault()
    dispatch({
      type: "CREATE_EVENT",
      title,
      body
    })
    setTitle("")
    setBody("")
  }
  
  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm("すべてのイベントを削除してもよろしいですか？")
    if (result) { dispatch({type:"DELETE_ALL_EVENT"}) }
  }

  const unCreatable = title === "" || body === ""

  console.log(state);

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className='form-gorup'>
          <label htmlFor='formEventTitle'>タイトル</label>
          <input className='form-control' id='formEventTitle' value={title} onChange={ e => { setTitle(e.target.value) } }></input>
        </div>

        <div className='form-gorup'>
          <label htmlFor='formEventBody'>ボディー</label>
          <textarea className='form-control' id='formEventBody' value={body} onChange={ e => {setBody(e.target.value)} }></textarea>
        </div>
        <button className='btn btn-primary' onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className='btn btn-danger' 
        // これがあると全削除のdispatch処理呼ばれない
        onClick={deleteAllEvents} 
        disabled={state.length === 0}>すべてのイベントを削除する</button>
      </form>
      <h4>イベント一覧</h4>
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
      </table>
    </div>
  );
}

export default App;
