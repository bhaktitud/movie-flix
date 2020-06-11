import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productPerPage, getProducts, setFetchStatus } from '../store/actions';
import { Card } from 'react-bootstrap';


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
        <div>
            {productsPerPage.map(product => (
                <Card key={product.id}>
                    <p>{product.face}</p>
                </Card>
            ))}
            {fetchStatus && 'Loading...'}
        </div>
    )
}