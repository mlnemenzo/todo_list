import React from "react";
import ListData from '../helpers/list_data';
import list_data from "../helpers/list_data";

export default props => {                    // no paren required for one prop

    console.log('List Data: ', list_data);

    const listElements = list_data.map((item, index) => {
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

