import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productPerPage, getProducts, setFetchStatus } from '../store/actions';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import dateToRelativeFormat from '../helper/dateFormatter'


export default function ProductList () {
    const dispatch = useDispatch()
    const totalPages = useSelector(state => state.totalPages)
    const productsPerPage = useSelector(state => state.productsPerPage)
    const fetchStatus = useSelector(state => state.fetchStatus)
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
        currentPage = currentPage + 1
        setCurrentPage(currentPage)
        fetchMoreItems();
    }, [fetchStatus])

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
                    <Card 
                        className='d-flex flex-column bg-light mx-3 my-3 shadow hoverable border rounded align-items-center justify-content-around' 
                        key={product.id} 
                        style={{ width: '20rem', height: '10rem' }}
                    >
                        <div>
                            <p className='pt-3' style={{fontSize: `${product.size}px`}}>{product.face}</p>
                        </div>
                        <div className='d-flex flex-column mx-2' style={{marginBottom: '5%', alignSelf: 'flex-start'}}>
                            <small>Product ID: <strong>{product.id}</strong></small>
                            <small>Release Date: <strong>{dateToRelativeFormat(product.date)}</strong></small>
                            <small>Size: <strong>{product.size}px</strong></small>
                        </div>
                </Card>
                ))}
            </CardContainer>
            {fetchStatus && 'Loading...'}
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
