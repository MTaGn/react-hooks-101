import React from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className='form-gorup'>
          <label htmlFor='formEventTitle'>タイトル</label>
          <input className='form-control' id='formEventTitle'></input>
        </div>

        <div className='form-gorup'>
          <label htmlFor='formEventBody'>ボディー</label>
          <textarea className='form-control' id='formEventBody'></textarea>
        </div>
        <button className='btn btn-primary'>イベントを作成する</button>
        <button className='btn btn-danger'>すべてのイベントを削除する</button>
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

        </tbody>
      </table>
    </div>
  );
}

export default App;
