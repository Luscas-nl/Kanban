import { useState } from 'react'
import './App.css'
import Menu from './components/Menu/Index'
import SearchArea from './components/SearchArea/Index'
import ImageProfile from './assets/Images/Profile.png'
import Note from './components/Note/Index'

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="NoteBox">
        <div className="KanbanInfosBox">
          <div className="TitleInfosBox">
            <h1 className="TitleKanban">Meu Dunban</h1>
            <i class="fa fa-pencil" aria-hidden="true" />
          </div>
          <div className="imgInfosBox">
            <img src={ImageProfile} alt="" />
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </div>
        </div>

      <SearchArea />

      <div className="NoteArea">
        <div className="NoteList">
            <h2 className="typeTitle">{"Fazer"}</h2>
            <div className="notesBox">
              <Note />
            </div>
        </div>
        <div className="NoteList">
            <h2 className="typeTitle">{"Fazendo"}</h2>
        </div>
        <div className="NoteList">
            <h2 className="typeTitle">{"Terminado"}</h2>
        </div>
      </div>

      </div>
    </div>
  )
}

export default App
