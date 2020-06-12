import React from 'react';
import styled from 'styled-components';
import dateToRelativeFormat from '../helper/dateFormatter';
import currencyFormatter from '../helper/currencyFormatter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";


export default function Product({ product }) {
    return (
        <ProductCard 
                className='d-flex bg-white flex-column mx-3 my-3 shadow border rounded align-items-center justify-content-around' 
                style={{ width: '20rem', height: '20rem' }}
            >
                <div className='flex-wrap w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
                    <p className='pt-3' style={{fontSize: `${product.size}px`}}>{product.face}</p>
                </div>
                <Description className='border-top d-flex flex-row mx-2 pt-2 pb-2 justify-content-between align-items-between w-100 h-50'>
                    <div className='w-100 h-100 d-flex flex-column mx-2 align-items-start justify-content-center '>
                        <small>Product ID: <strong>{product.id}</strong></small>
                        <small>Release Date: <strong>{dateToRelativeFormat(product.date)}</strong></small>
                        <small>Size: <strong>{product.size}px</strong></small>
                    </div>
                    <div className='h-100 pr-2 d-flex flex-column align-items-center mr-2 justify-content-center'>
                        <h3><strong><span className="badge badge-success">{currencyFormatter(product.price)}</span></strong></h3>
                        <h5 className='btn btn-sm btn-primary'><FontAwesomeIcon icon={faCartPlus} /> <strong>Add</strong></h5>
                    </div>
                </Description>
        </ProductCard>
    )
}


const Description = styled.div`
    background-image: linear-gradient(to right, #ffffff, #f9f9f9, #f4f3f3, #eeeded, #e9e7e7);
`

const ProductCard = styled.div`
    :hover {
        color: #ed5544;
        cursor: pointer;
    }
`