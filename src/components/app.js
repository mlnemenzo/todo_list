import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import '../assets/css/app.css';
import List from './list';
import AddItem from './add-items';
import listData from '../helpers/list_data';
import axios from 'axios';

const BASE_URL = "http://api.reactprototypes.com";
const API_KEY = "?key=deadmau5er";

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

    async AddItem(item) {
        await axios.post((`${BASE_URL}/todos${API_KEY}`), item);

        this.getListData();
    }

    async getListData() {

        try {

        const response = await axios.get(`${BASE_URL}/todos${API_KEY}`);

        console.log("Data: ", response.data.todos);

        this.setState({
            listData: response.data.todos
            });
        } catch(err) {
            console.log("ERROR: ", err.message);
        }

        // axios.get(`${BASE_URL}/todos${API_KEY}`).then( resp => {
        //     console.log("Response: ", resp.data.todos);

        //     this.setState({
        //         listData: resp.data.todos
        //     })
        // })
    }

    async deleteItems(id) {
        await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);

        this.getListData();


        
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
