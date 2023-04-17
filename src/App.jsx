import { useState } from 'react'
import './App.css'
import Menu from './components/Menu/Index'
import SearchArea from './components/SearchArea/Index'
import ImageProfile from './assets/Images/Profile.png'
import Note from './components/Note/Index'

function App() {

  function OnDragOver(e){
    e.preventDefault()
  }

  function OnDrop(e){
    const id = e.dataTransfer.getData('text')
    const dragElement = document.getElementById(id)
    const dropZone = e.target

    dropZone.insertAdjacentHTML('beforeend', dragElement)
    e.dataTransfer.clearData()
  }

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
            <div className="notesBox" onDragOver={OnDragOver} onDrop={OnDrop}>
              <Note />
              <Note desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur vero repellat, reprehenderit illum saepe dolor facere molestias sapiente quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur vero repellat, reprehenderit illum saepe dolor facere molestias sapiente quaerat."/>
              <Note />
              <Note desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur vero repellat, reprehenderit illum saepe dolor facere molestias sapiente quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur vero repellat, reprehenderit illum saepe dolor facere molestias sapiente quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur vero repellat, reprehenderit illum saepe dolor facere molestias sapiente quaerat."/>
            </div>
        </div>
        <div className="NoteList">
            <h2 className="typeTitle">{"Fazendo"}</h2>
            <div className="notesBox">
              <Note prog="work" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur vero repellat, reprehenderit illum saepe dolor facere molestias sapiente quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur vero repellat, reprehenderit illum saepe dolor facere molestias sapiente quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur vero repellat, reprehenderit illum saepe dolor facere molestias sapiente quaerat."/>
              <Note prog="work" />
              <Note prog="work" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur vero repellat, reprehenderit illum saepe dolor facere molestias sapiente quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur vero repellat, reprehenderit illum saepe dolor facere molestias sapiente quaerat."/>
              <Note prog="work" />
            </div>
        </div>
        <div className="NoteList">
            <h2 className="typeTitle">{"Terminado"}</h2>
            <div className="notesBox">
              <Note prog="finish" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur vero repellat, reprehenderit illum saepe dolor facere molestias sapiente quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur vero repellat, reprehenderit illum saepe dolor facere molestias sapiente quaerat."/>
              <Note prog="finish" />
              <Note prog="finish" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur vero repellat, reprehenderit illum saepe dolor facere molestias sapiente quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur vero repellat, reprehenderit illum saepe dolor facere molestias sapiente quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur vero repellat, reprehenderit illum saepe dolor facere molestias sapiente quaerat."/>
              <Note prog="finish" />
            </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default App
