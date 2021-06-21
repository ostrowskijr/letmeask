import React, { useState } from 'react';

type ButtonProps = {
    text?: string
};

export const Button = (props: ButtonProps) => {
    //const { text } = props;
    const [counter, setCounter] = useState(0);
    function increment() {
        setCounter(counter + 1);
    }
    return (
        <button onClick={increment}>
            {`Contador ${counter}`}
        </button>
    );
};
