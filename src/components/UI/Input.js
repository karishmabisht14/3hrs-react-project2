import React from "react";

const Input = props => {
    return <React.Fragment>
        <label htmlFor={props.id}>{props.label}</label>
        <input id={props.id} type={props.type} value={props.value} onChange={props.onChange}/>
    </React.Fragment>
};

export default Input;