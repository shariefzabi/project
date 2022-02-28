import React from 'react';

function CounterLabel(props:any) {
    return (
        <div className='CounterLabel'>
            {props.value}
        </div>
    )
}

export default CounterLabel;