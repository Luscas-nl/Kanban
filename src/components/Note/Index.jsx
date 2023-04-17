import "./Style.css"

function Note(props) {

    function OnDragStart(event){
        event.dataTransfer.setData('text', event.target.id)

        event.currentTarget.style.opacity = ".4"
        event.currentTarget.style.cursor = "grabbing"
    }

    function OnDragEnd(event){
        event.currentTarget.style.opacity = "1"
        event.currentTarget.style.cursor = "pointer"
    }

    return(
        <div className="Note" draggable="true" onDragStart={OnDragStart} onDragEnd={OnDragEnd}>
            <span className="noteProgress" progress={props.prog ?? "make"}></span>
            <p className="noteTitle">{props.title ?? "Alguma Coisa Aqui"}</p>
            <p className="noteDesc">{props.desc ?? "A Descrição da coisa ali Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur vero repellat, reprehenderit illum saepe dolor facere molestias sapiente quaerat."}</p>
            <div className="tagsBox">
                <span className="tag">Algo</span>
                <span className="tag">Trabalho</span>
                <span className="tag">Gremio</span>
                <span className="tag">Ifal</span>
            </div>
        </div>
    )
}

export default Note