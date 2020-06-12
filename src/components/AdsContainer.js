import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import randomAdsIndex from '../helper/randomizeAdsIndex';
import { setAds } from '../store/actions';

export default function AdsContainer() {

    const dispatch = useDispatch()
    const productsPerPage = useSelector(state => state.productsPerPage)
    const adsSource = useSelector(state => state.ads)
    

    useEffect(() => {
        if(productsPerPage % 20 === 0) return;
        dispatch(setAds(randomAdsIndex()))
    }, [productsPerPage])

    return (
        <div className='w-100 h-25 d-flex flex-column justify-content-center align-items-center' >
            <small>ads by our sponsors</small>
            <img className='shadow rounded' src={adsSource} alt='ads' />
        </div>
    )
}