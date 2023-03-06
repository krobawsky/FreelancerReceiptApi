import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState<any>( initialForm );

    const onInputChange = ({ target }: any) => {
        let { name, value, checked } = target;
        if(value == "on") value = checked;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        formState,
        setFormState,
        onInputChange,
        onResetForm,
        ...formState,
    }
}

export default useForm;
