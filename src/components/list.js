import React from "react";

export default props => {                    // no paren required for one prop

    if(!props.data.length) {
        return <h1 className = "center grey-text text-lighten-2">No To Do Items.</h1>
    }

    console.log('List Data: ', props.data);

    const listElements = props.data.map((item, index) => {
        return (
        <li key ={index} className = "collection-item row">
        <div className="col s10">
            {item.title}
        </div>
        <div className = "col s2 right-align">
            <button className ="btn red darken-2 " onClick = {() => { props.delete(item._id)}}>Delete</button>
        </div>
        </li>
        )
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

