import React, { useState } from "react"

  const EventForm = ({eventState, dispatch}) => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    
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
    return (
    <>
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
        disabled={eventState.length === 0}>すべてのイベントを削除する</button>
      </form>
    </>
)}

export default EventForm;