import { Component } from "react";
import Table from "../components/Table/Table";
import API from "../utils/API";

class Home extends Component {
    state = {
        people: []
    }

    // componentDidMount() {
    //     API.getRandomPeople()
    //     .then(res => this.state({people:res.data}))
    //     .catch(err => console.log(err))
    // }

    render() {
        return (
            <div>
                <Table 
                results = {this.state.people}
                />
            </div>
        )
    }
       

}


export default Home