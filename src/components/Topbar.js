import React from 'react'
import { useDispatch } from 'react-redux';
import { wordStartAddNew } from '../actions/words';

import { useForm } from '../hooks/useForm'

export const Topbar = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        text: '',
    });

    const {text} = formValues;

    const handleSend = (e) => {
        e.preventDefault();
        dispatch(wordStartAddNew(text));
    };

    return (
        <nav className="navbar navbar-red bg-danger justify-content-center">
            <form 
                className="form-inline w-100  justify-content-center"
                onSubmit={handleSend}
            >
                <input className="form-control mr-sm-2 w-50" 
                    type="search" 
                    placeholder="Insert Text" 
                    aria-label="Search" 
                    name="text"
                    value={text}
                    onChange={handleInputChange}
                />
                <button className="btn my-2 my-sm-0 btn-outline-light bg-primary " type="submit">Send</button>
            </form>
        </nav>
    )
}
