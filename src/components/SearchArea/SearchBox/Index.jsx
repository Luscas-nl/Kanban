import "./Style.css"

function SearchBox(props) {
    return(
        <div className="SearchBox">
            <div className="iconSearchBox">
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            <input type="text" name="" id="" placeholder="Busque por Cards, Assuntos, Tags..." />
        </div>
    )
}

export default SearchBox