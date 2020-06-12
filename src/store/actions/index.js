import axios from 'axios';

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_PRODUCTS_PAGINATE = 'SET_PRODUCTS_PAGINATE';
export const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
export const SET_FETCH_STATUS = 'SET_FETCH_STATUS';
export const SET_ADS = 'SET_ADS';
export const SET_SORT_TYPE = 'SET_SORT_TYPE';

const baseURL = `http://localhost:3000/`;
const itemsPerPage = 10;

export const getProducts = () => {
    return (dispatch) => {
        axios
            .get(`${baseURL}products`)
            .then(({ data }) => {
                dispatch(setProducts(data))
                console.log(data)
                const totalPages = Math.ceil(data.length / itemsPerPage)
                dispatch(setTotalPages(totalPages))
            }).catch((err) => {
                console.log(err)
            });
    }
}

export const setProducts = (data) => {
    return {
        type: SET_PRODUCTS,
        payload: data
    }
}

export const setTotalPages = (totalPages) => {
    return {
        type: SET_TOTAL_PAGES,
        payload: totalPages
    }
}

export const setFetchStatus = (status) => {
    return {
        type: SET_FETCH_STATUS,
        payload: status
    }
}

export const productPerPage = (pageNumber) => {
    return (dispatch) => {
        axios
            .get(`${baseURL}products?_page=${pageNumber}&_limit=${itemsPerPage}`)
            .then(({ data }) => {
                dispatch(setProductsPaginate(data))
                dispatch(setFetchStatus(false))
            }).catch((err) => {
                console.log(err)
            });
    }
}

export const setProductsPaginate = (data) => {
    return {
        type: SET_PRODUCTS_PAGINATE,
        payload: data
    }
}

export const getAds = (randomAds) => {
    return(dispatch) => {
        axios
            .get(`${baseURL}ads/?r=${randomAds}`)
            .then(({ data }) => {
                console.log(data)
                dispatch(setAds(data))
            }).catch((err) => {
                console.log(err)
            });
    }
}

export const setAds = (adsNumber) => {
    return {
        type: SET_ADS,
        payload: `${baseURL}ads/?r=${adsNumber}`
    }
}

export const setSortType = (type) => {
    return {
        type: SET_SORT_TYPE,
        payload: type
    }
}

