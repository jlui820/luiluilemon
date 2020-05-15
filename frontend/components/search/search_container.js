import { connect } from 'react-redux';
import Search from './search';
import { getResults, clearSearch } from '../../actions/search_actions';
import { fetchProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => ({
    searches: state.entities.search || [],
    // searches: Object.values(state.entities.products)
})

const mapDispatchToProps = dispatch => ({
    getResults: search => dispatch(getResults(search)),
    clearSearch: () => dispatch(clearSearch()),
    fetchProduct: id => dispatch(fetchProduct(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)