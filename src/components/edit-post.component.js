import React, {Component} from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class EditPosts extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);



        this.state = {
            username: "",
            title: "",
            description: "",
            url: "",
            date: new Date(),
            users: []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/posts/"+this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    title: response.data.title,
                    description: response.data.description,
                    url: response.data.url, 
                    date: new Date(response.data.date)
                })
            })
            .catch(function(error){
                console.log(error);
            })

        axios.get("http://localhost:5000/users/")
        .then(response => {
            if (response.data.length > 0) {
                this.setState({
                    users: response.data.map(user => user.username),
                })
            }
        })
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        }); 
    }

    onChangeTitle(e){
        this.setState({
            title: e.target.value
        }); 
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        }); 
    }

    onChangeUrl(e){
        this.setState({
            url: e.target.value
        }); 
    }

    onChangeDate(date){
        this.setState({
            date: date
        }); 
    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            username: this.state.username,
            title: this.state.title,
            description: this.state.description,
            url: this.state.url,
            date: this.state.date
        }

        console.log(post);

        axios.post("http://localhost:5000/posts/update/"+this.props.match.params.id, post)
            .then(res => console.log(res.data));

        window.location = "/";
    }

    render(){
        return (
            <div>
                <h3>Edit Post</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        >
                        {
                            this.state.users.map(function(user){
                                return <option 
                                key={user}
                                value={user}>{user}
                                </option>;
                            })
                        }   
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.title}
                        onChange={this.onChangeTitle}/>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}/>
                    </div>
                    <div className="form-group">
                        <label>Url: </label>
                        <input type="text"
                        required
                        className="form-control"
                        value={this.state.url}
                        onChange={this.onChangeUrl}/>
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit Post" className="btn"/>
                    </div>
                </form>
            </div>
        )
    }
}