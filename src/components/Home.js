import React from 'react';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList'
import AdsContainer from './AdsContainer';
import Toolbar from './Toolbar';
import Tron from './Jumbotron';



export default function Home () {

    return(
        <Layout>
            <div className='d-flex bg-light flex-column align-items-center justify-content-center'>
                <Tron />
                <AdsContainer />
                <Toolbar />
                <ProductList />
            </div>
        </Layout>
    )
}