import React from 'react'
import { Link } from 'react-router-dom';
import SearchItem from "./search_item";


class Search extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     input: ''
        // };

        this.handleSearch = this.handleSearch.bind(this);
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
            <SearchItem clearSearch={this.props.clearSearch} key={product.id} product={product}/>))
        return (
            <div className="search-bar">
                <div className="searchbar-icon">
                    <i className="fas fa-search searchIcon"></i>
                    <input className='searchbox' onChange={this.handleSearch} type="text" placeholder="Search"/>
                </div>
                <div className="search-body-result">
                    {searchResults.slice(0,4)}
                </div>
            </div>
        )
    }
}

export default Search


