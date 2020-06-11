import React from 'react';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList'



export default function Home () {

    return(
        <Layout>
            <div>
                <ProductList />
            </div>
        </Layout>
    )
}