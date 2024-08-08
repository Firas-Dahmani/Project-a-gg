import React from 'react';

const HelloTagA = () => {
    return (
        <div>
            Hello from A
            <br />
            <HelloTagA />
        </div>
    );
}

export default HelloTagA;
