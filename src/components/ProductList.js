import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productPerPage, getProducts, setFetchStatus, getSortedProducts } from '../store/actions';
import styled from 'styled-components';
import Product from './ProductCard';
import Skeleton from './Skeleton';


export default function ProductList () {
    const dispatch = useDispatch()
    const totalPages = useSelector(state => state.totalPages)
    const productsPerPage = useSelector(state => state.productsPerPage)
    const fetchStatus = useSelector(state => state.fetchStatus)
    const sortByType = useSelector(state => state.sortByType)
    const sortedProducts = useSelector(state => state.sortedProducts)
    let [currentPage, setCurrentPage] = useState(1)
    
    useEffect(() => {
        dispatch(getProducts())
        dispatch(productPerPage(currentPage))
        dispatch(setFetchStatus(true))
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
        dispatch(getSortedProducts(sortByType))
        setCurrentPage(totalPages)
    }, [sortByType, dispatch, totalPages])

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || fetchStatus) return;
        dispatch(setFetchStatus(true))
    }

    function fetchMoreItems() {
        dispatch(productPerPage(currentPage))
    }

    return (
        <ListContainer>
            <CardContainer>
                {
                    sortByType === '' ? 
                        productsPerPage.map(product => (
                            <Product product={product} key={product.id} />
                        ))
                        : sortedProducts.map(product => (
                            <Product product={product} key={product.id} />
                        ))
                };
            </CardContainer>
            {
                fetchStatus && <Skeleton />
            }
            <br />
            {
                currentPage > totalPages && '~ end of catalogue ~'
            }
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