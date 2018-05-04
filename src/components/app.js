import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import '../assets/css/app.css';
import List from './list';
import AddItem from './add-items';
import listData from '../helpers/list_data'

class App extends Component {

    constructor(props) {
        super(props) 
        
        this.state = {
            listData: []
        };
    }

    componentDidMount() {
        this.getListData();
    }

    AddItem(item) {
        this.setState({
            listData: [...this.state.listData, item]
        });
    }

    getListData() {
        setTimeout(() => {
        this.setState({ listData });
        }, 500);
    }

    deleteItems(index) {
        const listData = this.state.listData.slice();

        listData.splice(index, 1);

        this.setState({ listData });
    }

    render() { 
        return (<div className = "container">
                    <h1 className = "center">To Do List</h1>
                    <AddItem add={this.AddItem.bind(this)}/>
                    <List data = {this.state.listData} delete = {this.deleteItems.bind(this)}/>
                </div>
        );
    }

}

export default App;
