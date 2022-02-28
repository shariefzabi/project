import React, { Component } from "react";
import { connect } from "react-redux";
import CounterButton from "../modules/counterButton/counterButton";
import CounterLabel from "../modules/counterLabel/counterLabel";
import * as actionType from '../store/actions'

function Counter(props:any) {
    
        return (
            <div className="Counter">
                <CounterLabel value={props.ctr} />
                <CounterButton
                    clicked={props.onAdd}
                    label="Add" />
                <CounterButton
                    clicked={props.onSubtract}
                    label="Subtract" />
            </div>
        )
    }

    
const mapStateToProps = (state:any) => {
    return {
        ctr:state.counter
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        onAdd: () => dispatch({ type: actionType.ADD}),
        onSubtract: () => dispatch({ type: actionType.SUBTRACT })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);