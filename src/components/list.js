import React from "react";

export default props => {                    // no paren required for one prop

    if(!props.data.length) {
        return <h1 className = "center grey-text text-lighten-2">No To Do Items.</h1>
    }

    console.log('List Data: ', props.data);

    const listElements = props.data.map((item, index) => {
        return <li key ={index} className = "collection-item">{item.title}</li>
    });

    return (
        <div>
            <h3 className = "center">List will be here.</h3>
            <ul className="collection">
                { listElements }
            </ul>
        </div>
    );
}

