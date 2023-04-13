import "./Style.css"

function NoteList(props) {
    return(
        <div className="NoteList">
            <h2 className="typeTitle">{props.type ?? "Fazer"}</h2>
        </div>
    )
}

export default NoteList