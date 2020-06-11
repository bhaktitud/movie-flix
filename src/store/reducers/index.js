import {
    SET_PRODUCTS,
    SET_PRODUCTS_PAGINATE,
    SET_TOTAL_PAGES,
    SET_FETCH_STATUS,
} from '../actions';

const initialState = {
    products: [],
    productsPerPage : [],
    totalPages: 0,
    fetchStatus: false
}

export const reducers = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case SET_PRODUCTS_PAGINATE:
            return {
                ...state,
                productsPerPage: [...state.productsPerPage, ...payload]
            }
        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: payload
            }
        case SET_FETCH_STATUS:
            return {
                ...state,
                fetchStatus: payload
            }
        default:
            return state;
    }
}