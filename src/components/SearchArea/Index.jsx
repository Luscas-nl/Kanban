import "./Style.css"
import SearchBox from "./SearchBox/Index"

function SearchArea(props) {
    return(
        <div className="SearchAreaBox">
            <div className="filterButton">
                <i class="fa fa-filter" aria-hidden="true"></i>
                <p>Filtro</p>
            </div>

            <SearchBox />
        </div>
    )
}

export default SearchArea