import React from 'react'
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container";
import SearchItem from "./search_container";

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
        // debugger
        const searchResults = this.props.searches.map(product => (
            <SearchItem key={product.id} product={product}/>))
            // debugger
        return (
            <div className="search-bar">
                <div className="searchbar-icon">
                    <i className="fas fa-search searchIcon"></i>
                    <input className='searchbox' onChange={this.handleSearch} type="text" placeholder="Search"/>
                </div>
                <div className="search-body-result">
                    {searchResults}
                </div>
            </div>
        )
    }
}

export default Search





//before change for original nav bar 
// render() {
//         const searchResults = this.props.searches.map(product => (
//             <SearchItem key={product.id} product={product}/>))
//         return (
//             <div className="search-bar">
//                 <div className="search-body-search">
//                     <input onChange={this.handleSearch} type="text" placeholder="Search" id="search-bar-indexshow"/>
//                 </div>
//                 <div className="search-body-result">
//                     {searchResults}
//                 </div>
//             </div>
//         )
//     }