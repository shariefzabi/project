import React from 'react';
// import './CounterButton.css';

function CounterButton(props:any) {
    return (
        <div className="CounterButton">
            <button
                type="button"
                onClick={props.clicked}
                className="btn btn-primary">
                {props.label}
            </button>
        </div>
    )
}
export default CounterButton;