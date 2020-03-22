import React, {Component} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default class CreateUsers extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);



        this.state = {
            username: "",
            isSubmitted: false
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        }); 
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,
        }

        console.log(user);
        axios.post("https://floating-hamlet-81586.herokuapp.com/users/add", user)
            .then(() => {
                this.setState({isSubmitted: true});
            });

        this.setState({
            username: ""
        })
    } 

    render(){
        const isSubmitted = this.state.isSubmitted;
        let message;
        if(isSubmitted){
            message = <Link className="alert-post" to="/"><div class="alert alert-success " role="alert">You successfully added a user!</div></Link>;
            setTimeout(() => { this.setState({isSubmitted: false}); }, 3000);
        } else {
            message = <div></div>;
        }
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input 
                        type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn"/>
                    </div>
                    <div className="form-group">
                        {message}
                    </div>
                </form>
            </div>
        )
    }
}