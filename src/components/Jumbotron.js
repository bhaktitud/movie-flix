import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export default function Tron() {

    return (
        <div className='my-3 bg-light d-flex flex-row justify-content-center align-items-center' >
            <Jumbotron className='shadow bg-white'>
                <h1>Hello, Emoji Lovers! (ノ・∀・)ノ</h1>
                <hr/>
                <p>
                    Here you're sure to find a bargain on some of the finest ascii available to purchase. 
                </p>
                <p>
                    Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.
                </p>
                <p>But first, a word from our sponsors:</p>
            </Jumbotron>
        </div>
    )
}