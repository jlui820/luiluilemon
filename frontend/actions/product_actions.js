import * as ProductApiUtil from '../util/product_api_util'

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
})

export const receiveProduct = product => {
   
    return {
        type: RECEIVE_PRODUCT,
        product
    }
}

export const fetchProducts = () => dispatch => (
    ProductApiUtil.fetchProducts()
    .then(products => dispatch(receiveProducts(products)))
)

export const fetchProduct = id => dispatch => (
    ProductApiUtil.fetchProduct(id)
    .then(product => dispatch(receiveProduct(product)))
)