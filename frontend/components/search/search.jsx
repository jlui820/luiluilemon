import React from 'react'
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container";
import SearchItem from "./search_item"

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch(e){
        if (e.target.value === "") {
            this.props.clearSearch()
        }else{
            this.props.getResults(e.target.value)
        }
    }

    componentDidMount() {
        this.props.clearSearch()
        window.scrollTo(0, 0)
    }

    render() {
        const searchResults = this.props.searches.map(product => (
            <SearchItem key={product.id} product={product}/>
        ))
        return (
            <div className="search-page">
                <div className="search-body">
                    <div className="search-body-search">
                        <input onChange={this.handleSearch} type="text" placeholder="Search" id="search-bar-indexshow"/>
                    </div>
                    <div className="search-body-result">
                        {searchResults}
                    </div>
                </div>
            </div>
        )
    }
}

export default Search