import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { setSortType, setFetchStatus } from '../store/actions';
import { useDispatch } from 'react-redux';

export default function Toolbar() {

    const dispatch = useDispatch()

    const handleSortByType = (type) => {
        dispatch(setSortType(type))
        dispatch(setFetchStatus(true))
    }

    return (
        <div className='w-100 h-25 my-4 pl-3 pt-1 pb-1 d-flex flex-row' >
            <Dropdown className='btn-xl ml-5 shadow'>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Sort by
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleSortByType('price')}>Price</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSortByType('size')}>Size</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSortByType('id')}>ID</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}