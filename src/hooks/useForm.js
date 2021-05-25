import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = (newFormState = initialState) => {
        setValues( newFormState );
    };

    const handleInputChange = ({ target }, url) => {

        setValues({
            ...values,
            [ target.name ]: target.value,
            url
        });

    };

    return [ values, handleInputChange, reset ];

}