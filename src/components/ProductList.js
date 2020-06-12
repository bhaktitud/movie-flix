import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productPerPage, getProducts, setFetchStatus } from '../store/actions';
import styled from 'styled-components';
import Sort from '../helper/Sort';
import Product from './ProductCard';


export default function ProductList () {
    const dispatch = useDispatch()
    const totalPages = useSelector(state => state.totalPages)
    const productsPerPage = useSelector(state => state.productsPerPage)
    const fetchStatus = useSelector(state => state.fetchStatus)
    const sortByType = useSelector(state => state.sortByType)
    let [currentPage, setCurrentPage] = useState(1)
    
    useEffect(() => {
        dispatch(getProducts())
        dispatch(productPerPage(currentPage))
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if(!fetchStatus) return;
        // eslint-disable-next-line
        currentPage = currentPage + 1
        setCurrentPage(currentPage)
        fetchMoreItems();
    }, [fetchStatus])

    useEffect(() => {
        if(!sortByType) return;
        Sort(productsPerPage, sortByType)
    }, [sortByType, productsPerPage])

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || fetchStatus) return;
        dispatch(setFetchStatus(true))
    }

    function fetchMoreItems(){
        dispatch(productPerPage(currentPage))
    }

    return (
        <ListContainer>
            <CardContainer>
                {productsPerPage.map(product => (
                    <Product product={product} key={product.id} />
                ))}
            </CardContainer>
            {fetchStatus && <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_IVaLPO.json"  background="transparent"  speed="1"  style={{width: '300px', height: '300px'}}  loop autoplay></lottie-player>}
            <br />
            {currentPage > totalPages && '~ end of catalogue ~'}
        </ListContainer>
    )
}

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 60vw;
    flex-wrap: wrap
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 60vw;
    flex-wrap: wrap
`