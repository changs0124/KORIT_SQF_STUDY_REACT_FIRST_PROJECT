import { useState } from "react";

export function useInput(defaultValue, length) {
    const [ value, setValue ] = useState(defaultValue);
    const onChange = (e) => {
        if(e.target.value.length < length + 1) {
            setValue(e.target.value);
        }
    }

    return {
        value,
        setValue,
        onChange
    }


}